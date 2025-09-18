import BgVideo from "@/components/BgVideo";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Solution() {
  return (
    <>
      <div className="h-[620px]">
        <BgVideo link={"/solutionVideo.mp4"} />
        <div className="absolute top-116  z-20 w-full flex justify-center">
          <h1 className={`text-[56px] font-bold text-white ${lato.className}`}>
            World needs efficient, healthy and sustainable fats
          </h1>
        </div>
      </div>
    </>
  );
}
