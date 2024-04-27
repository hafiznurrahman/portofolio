export default function Skill({ image, text, color }) {
  return (
    <div
      className="flex justify-center items-center transition-all duration-500 hover:translate-x-1.5"
      translate="no"
    >
      <img
        src={image}
        alt={text}
        className="w-11 h-11 bg-gray-900 aspect-square rounded-lg select-none"
      />
      <div className="h-8 flex justify-center items-center bg-gray-200 rounded-r-lg p-2">
        <span
          className="text-xs font-black uppercase drop-shadow-[0.5px_0.5px_0_#000]"
          style={{color:color}}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
