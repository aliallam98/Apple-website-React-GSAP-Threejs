import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [videoSource, setVideoSource] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const videoSourceHandler = () =>
    window.innerWidth < 760
      ? setVideoSource(smallHeroVideo)
      : setVideoSource(heroVideo);

  useEffect(() => {
    window.addEventListener("resize", videoSourceHandler);

    return window.removeEventListener("resize", videoSourceHandler);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 id="hero-title" className="hero-title">
          iPhone 15 Pro
        </h1>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSource}
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
