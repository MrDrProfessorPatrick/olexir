import HeroPage from "@/components/HeroPage";
import HomePageContent from "@/components/HomePageContent";
import CaruselHome from "@/components/CaruselHome";
import Bottom from "@/components/Bottom";

export default function Home() {
  const images = [
    {
      src: "/CaruselHome1.jpg",
      index: 0,
      text: "Tea tree oleogel structured by potato proteins for cosmetic applications",
    },
    {
      src: "/CaruselHome2.png",
      index: 1,
      text: "Rapeseed oleogel structured by soy proteins for food applications",
    },
    {
      src: "/CaruselHome3.png",
      index: 2,
      text: "Rapeseed oleogel structured by pea proteins for food applications",
    },
    {
      src: "/CaruselHome4.jpg",
      index: 3,
      text: "Flaxseed oleogel structured by flaxseed proteins for food applications",
    },
    {
      src: "/CaruselHome5.png",
      index: 4,
      text: "MCT oleogel structured by amaranth proteins with colourant for cosmetic applications",
    },
  ];

  return (
    <div className="">
      <main className="w-full h-full">
        <HeroPage />
        <CaruselHome images={images} />
        <HomePageContent />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Bottom />
      </footer>
    </div>
  );
}
