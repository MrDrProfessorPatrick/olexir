export default function LineCircleLeft({ top }) {
  return (
    <div
      className={`hidden md:flex items-center right-0 top-${top} hidden absolute`}
    >
      <div className="w-3 h-3 border-2 border-white bg-white rounded-full flex items-center justify-center"></div>
      <div className="w-20 h-[1px] bg-white"></div>
    </div>
  );
}
