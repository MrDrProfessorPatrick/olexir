import BgVideo from "@/components/BgVideo";

export default function Solution() {
  return (
    <div>
      <h1 className="text-[60px] font-bold text-center mt-[45px] mb-[45px]">
        Solution
      </h1>
      <div className="grid grid-cols-2 gap-22 ml-[5%] mr-[5%] mb-[180px]">
        <div className="">
          <p className="text-[32px] leading-relaxed text-justify">
            We present an innovative platform technology that enables protein
            self-assembly into nanofibrils, structuring liquid oils into stable
            oleogels at low protein concentrations, without the need for
            heating, toxic solvents, nickel or expensive cross-linkers.
          </p>
        </div>
        <div className="">
          <p className="text-[32px] leading-relaxed text-justify">
            Through unlocking protein oleogelating capacity, we bring firmness
            and structure to liquid oils, serving the diverse needs of
            industries that touch every aspect of life.
          </p>
        </div>
      </div>
      <BgVideo />
    </div>
  );
}
