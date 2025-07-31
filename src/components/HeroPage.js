import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/titleTest.png"
        alt="Background"
        fill
        className="object-cover"
        priority
        sizes="1000px"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center top-[-180px]">
        <div className="p-0 m-0 animate-slideDown">
          <h1 className="lg:text-[200px] md:text-[140px] text-[62px] font-bold text-black leading-[10rem]">
            Olexir
          </h1>
        </div>
        <div className="md:text-[47px] text-[27px] text-white text-center bg-black w-full pt-[20px] pb-[20px] animate-slideLeft">
          Versatile Platform for Lipid Engineering
        </div>
      </div>
    </section>
  );
}
