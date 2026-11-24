import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./VideoScLps.css";

const videoList = [
  {
    id: "_18XoV4gn3s",
    year: "2026",
    title: "Supercamp UTBK SNBT 2026",
    description: "Dokumentasi Program Supercamp Matrix 2026.",
    isLatest: true,
  },
  {
    id: "-VbHUqZlqco",
    year: "2025",
    title: "Supercamp UTBK SNBT 2025",
    description: "Matrix Group — Batch 3 Depok.",
  },
  {
    id: "E5FVSivR8-o",
    year: "2024",
    title: "Supercamp UTBK SNBT 2024",
    description: "Video profil dan dokumentasi Program Supercamp.",
  },
];

const VideoScLps = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoData = {
    "@context": "https://schema.org",
    "@graph": videoList.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: [`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      publisher: {
        "@type": "Organization",
        name: "Bimbel LPS",
      },
    })),
  };

  return (
    <section
      className="parent-box-video-sc-lps"
      aria-labelledby="sc-video-title">
      <script type="application/ld+json">{JSON.stringify(videoData)}</script>

      <div className="sc-video-heading">
        <h2 id="sc-video-title" className="title-video-sc-lps">
          Video Profil Supercamp UTBK SNBT
        </h2>

        <p className="desk-video-sc-lps">
          Tonton sekilas perjalanan dan pengalaman siswa dalam program karantina
          belajar Supercamp untuk persiapan UTBK SNBT dan masuk Fakultas
          Kedokteran di PTN favorit.
        </p>
      </div>

      <div className="sc-video-grid">
        {videoList.map((video) => (
          <article key={video.id} className="sc-video-card">
            <div className="sc-video-glass-frame">
              <div className="video-wrapper">
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <button
                      type="button"
                      className="sc-video-thumbnail-button"
                      onClick={() => setActiveVideo(video.id)}
                      aria-label={`Putar video ${video.title}`}>
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={`Thumbnail ${video.title}`}
                        className="sc-video-thumbnail"
                        loading="lazy"
                        decoding="async"
                        width="480"
                        height="360"
                      />

                      <span className="sc-video-overlay" aria-hidden="true" />

                      <span className="sc-video-play-button" aria-hidden="true">
                        <FontAwesomeIcon icon={faPlay} />
                      </span>
                    </button>

                    <span className="sc-video-year">{video.year}</span>

                    {video.isLatest && (
                      <span className="sc-video-latest">VIDEO TERBARU</span>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="sc-video-information">
              <h3 className="sc-video-card-title">{video.title}</h3>

              <p className="sc-video-card-description">{video.description}</p>

              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sc-video-youtube-link"
                aria-label={`Tonton ${video.title} di YouTube`}>
                Tonton di YouTube ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VideoScLps;
