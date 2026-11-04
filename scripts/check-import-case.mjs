import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

const SOURCE_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
]);

const RESOLVE_EXTENSIONS = [
  "",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
];

const errors = [];
let checkedFiles = 0;
let checkedImports = 0;

function getFiles(directory) {
  if (!fs.existsSync(directory)) {
    throw new Error(`Folder tidak ditemukan: ${directory}`);
  }

  const results = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true,
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      results.push(...getFiles(fullPath));
    } else if (
      entry.isFile() &&
      SOURCE_EXTENSIONS.has(path.extname(entry.name))
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

function hasExactCase(target) {
  const relative = path.relative(ROOT, target);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return false;
  }

  let current = ROOT;

  for (const segment of relative.split(path.sep)) {
    if (!segment || segment === ".") continue;

    if (!fs.existsSync(current)) {
      return false;
    }

    const entries = fs.readdirSync(current);

    if (!entries.includes(segment)) {
      return false;
    }

    current = path.join(current, segment);
  }

  return fs.existsSync(current);
}

function resolveImport(importer, specifier) {
  const cleanSpecifier = specifier.split(/[?#]/)[0];

  const base = path.resolve(path.dirname(importer), cleanSpecifier);

  const candidates = [
    ...RESOLVE_EXTENSIONS.map((ext) => base + ext),
    ...RESOLVE_EXTENSIONS.filter(Boolean).map((ext) =>
      path.join(base, `index${ext}`),
    ),
  ];

  return candidates.some((candidate) => {
    return hasExactCase(candidate) && fs.statSync(candidate).isFile();
  });
}

function extractImports(source) {
  const imports = new Set();

  const patterns = [
    /\b(?:import|export)\s+(?:[\s\S]*?\s+from\s*)?["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      imports.add(match[1]);
    }
  }

  return [...imports];
}

console.log("\n🔍 Checking case-sensitive imports...\n");

for (const file of getFiles(SRC)) {
  checkedFiles++;

  const source = fs.readFileSync(file, "utf8");

  for (const specifier of extractImports(source)) {
    if (!specifier.startsWith(".")) {
      continue;
    }

    checkedImports++;

    if (!resolveImport(file, specifier)) {
      errors.push({
        file: path.relative(ROOT, file),
        import: specifier,
      });
    }
  }
}

console.log(`Files checked   : ${checkedFiles}`);
console.log(`Imports checked : ${checkedImports}`);

if (errors.length > 0) {
  console.error("\n❌ INVALID IMPORTS FOUND\n");

  for (const error of errors) {
    console.error(`File   : ${error.file}`);
    console.error(`Import : ${error.import}`);
    console.error("-----------------------------");
  }

  console.error(`\nTotal errors: ${errors.length}\n`);

  process.exit(1);
}

console.log("\n✅ All checked imports are valid!\n");
