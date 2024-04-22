export default function PageSection({ section, title, description, color}) {
  return (
    <>
      <div className="mb-5">
        <span className={`${color} text-xs font-black p-2`}>{section}</span>
        <h2 className="text-3xl font-black mb-6">{title}</h2>
        <p className="landscape:w-4/6 md:w-4/6">{description}</p>
      </div>
    </>
  );
}
