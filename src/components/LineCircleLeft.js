export default function LineCircleLeft({ top, width, rightEdge }) {
  return (
    <div
      style={{ top: `${top}%`, right: rightEdge || '0' }}
      className={`hidden md:flex items-center hidden absolute z-1000`}
    >
      <div className="w-1 h-1 border-2 border-white bg-white rounded-full flex items-center justify-center"></div>
      <div style={{ width: `${width}px` }}  className="h-[1px] bg-white"></div>
    </div>
  );
}
