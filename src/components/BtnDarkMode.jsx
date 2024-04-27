export default function BtnDarkMode({ onClick, mode }) {
  return (
    <button
      className="w-10 h-10 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 rounded-full p-3 aspect-square bottom-5 right-5 fixed z-[1000]"
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center font-black rounded-full">
        {mode ? "L" : "D"}
      </div>
      <div className="w-full h-full bg-[#B80000]/20 absolute top-0 left-0 animate-ping rounded-full"></div>
    </button>
  );
}
