export default function LineCircleRight({ top, width }) {
  return (
    <div
      style={{ top: `${top}px` }}
      className={`hidden md:flex items-center mr-4 left-[-40px] absolute z-1000 `}
    >
      <div
        className={`h-[1px] bg-white/65`}
        style={{ width: `${width}px` }}
      ></div>
      <div className="w-1 h-1 border-2 border-white bg-white rounded-full flex items-center justify-center"></div>
    </div>
  );
}
