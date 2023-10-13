import styles from "../../styles/Whales.module.css";
import Link from "next/link";
import { useCallback } from "react";


  const media_urls = [
    {
      id: 1,
      title: "Whales 1/3",
      url: "videos/video1",
      video_url:
        "https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657501529/obcg/whale1_iyc5yc.mp4#t=0.001",
    },
    {
      id: 2,
      title: "Whales 2/3",
      url: "videos/video2",
      video_url:
        "https://res.cloudinary.com/dfnaxhqqq/video/upload/ac_none,q_auto:best/v1690687830/whale22_kwxnuo.mp4#t=0.001",
    },
    {
      id: 3,
      title: "Whales 3/3",
      url: "videos/video3",
      video_url:
        "https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657501527/obcg/whale3_ziwwhq.mp4#t=0.001",
    },
  ];
  const Whales = () => {
  // handle mouse enter
const handleMouseEnter = useCallback((e) => {
  const vid = e.target;
  vid.muted = true;
  vid.play();
}, []);

// handle mouse leave
const handleMouseLeave = useCallback((e) => {
  const vid = e.target;
  vid.muted = false;
  vid.currentTime = 0;
  vid.pause();
}, []);

  return (
    <>
      <div className={styles.headline}>
        <h1 className="text-center">Pickering Passage, July 2022</h1>
      </div>
      <div className="container">
        <div className="row">
          {media_urls.map((media) => (
            <div key={media.id} className="col-lg-4 col-sm-6 mb-4">
              <Link href={media.url} legacyBehavior>
                <div className="card h-100 bg-indigo-500">
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardTitle}> {media.title}</h4>
                    <video
                      preload="none"
                      width="100%"
                      height="auto"
                      style={{ paddingBottom: "10px" }}
                      controls
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source src={media.video_url} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whales;
