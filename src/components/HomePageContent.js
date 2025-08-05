// HomeImage1
import Image from "next/image";

export default function HomePageContent() {
  return (
    <div className="w-full h-[1500px]">
      <div className="w-fit text-center text-2xl mt-[283px] ml-35 mb-[156px]">
        Focus on <span className="font-bold">[Feel. Taste. Heal]</span> our
        Wellness
      </div>
      <div className="relative w-full h-[496px]">
        <Image
          src="/HomeImage1.png"
          alt="home image 1"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 200px)"
        />
      </div>
      <div>
        <h2 className="lg:text-6xl md:text-3xl sm:text-2xl font-bold mt-[76px] text-center">
          Where your wellness begins
        </h2>
        <p className="mt-[66px] lg:text-4xl md:text-2xl sm:text-xl pl-10 pr-10 pt-4 pb-4">
          Over 60% of cosmetics rely on fossil-derived or animal fats, while
          edible fats are packed with trans and saturated lipids that contribute
          to obesity, diabetes and cardiovascular diseases, killing one in three
          people globally.
        </p>
        <p className="mt-[36px] lg:text-4xl md:text-2xl sm:text-xl pl-10 pr-10 pt-4 pb-4">
          Plant oils, rich in PUFA polyunsaturated fats, offer a sustainable,
          bioactive alternative; however, their fluidity and oxidative
          instability drastically limit their applications in food, cosmetics,
          and pharmaceuticals.
        </p>
      </div>
    </div>
  );
}
