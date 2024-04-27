export default function Skill({ image, text, color, bgColor }) {
  return (
    <div
      className="flex justify-center items-center transition-all duration-500 hover:translate-x-1.5"
      translate="no"
    >
      <img
        src={image}
        alt={text}
        className="w-11 h-11 bg-gray-900 aspect-square outline-none outline-offset-0 outline-1 outline-gray-900 dark:outline-gray-50 rounded-lg select-none"
      />

      <span
        className="text-xs font-black uppercase outline-none outline-offset-0 outline-1 outline-gray-900 dark:outline-gray-50 rounded-r-lg p-2 -z-[1]"
        style={{ backgroundColor: bgColor, color: color }}
      >
        {text}
      </span>
    </div>
  );
}
