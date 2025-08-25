"use client";

export default function BgVideo() {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/path/to/video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <video
          src="/IMG_5117.mov"
          autoPlay
          muted
          loop
          className="absolute w-full h-[820px] object-cover"
        />
      </div>
    </div>
  );
}
