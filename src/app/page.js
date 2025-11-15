import HeroPage from "@/components/HeroPage";
import HomePageContent from "@/components/HomePageContent";
import CaruselHome from "@/components/CaruselHome";
import Bottom from "@/components/Bottom";

export default function Home() {
  return (
    <div className="">
      <main className="w-full h-full">
        <HeroPage />
        <CaruselHome />
        <HomePageContent />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Bottom />
      </footer>
    </div>
  );
}
