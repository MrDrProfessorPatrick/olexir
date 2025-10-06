"use client";

export default function BgVideo({ link }) {
  return (
    <div className="relative">
      <div className="relative z-10 flex items-center justify-center w-full h-[620px]">
        <video
          src={link}
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
