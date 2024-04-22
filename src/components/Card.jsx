export default function Card({ number, link, image, title, description }) {
    return (
        <a
            href={link}
            className="w-full h-auto bg-gray-50 border-2 border-gray-900 shadow-[2px_2px_0_#000] shadow-gray-900 rounded-3xl p-2 relative transition-all duration-500 hover:scale-95"
            translate="no"
            target="_blank"
        >
            <div className="w-8 h-8 flex justify-center items-center text-gray-50 font-bold bg-blue-500 shadow-[2px_2px_0_#000] shadow-blue-900 absolute -top-3 -left-3 rounded-full select-none">
                {number}
            </div>
            <img
                src={image}
                alt={title || "image"}
                className="min-w-full h-auto aspect-video bg-gray-200 shadow-[2px_2px_0_#000] shadow-gray-500 rounded-xl select-none"
            />
            <h2 className="font-black capitalize line-clamp-2 my-2">{title || "title"}</h2>
            <small className="line-clamp-5">
                {description || "description"}
            </small>
        </a>
    );
}
