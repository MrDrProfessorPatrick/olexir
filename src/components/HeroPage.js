import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/OlexirPresentation.png"
        alt="Background"
        fill
        className="object-cover"
        priority
        sizes="1000px"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Olexir
        </h1>
      </div>
    </section>
  );
}
