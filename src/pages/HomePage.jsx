import Card from "../components/Card.jsx";
import Skill from "../components/Skill.jsx";

export default function HomePage() {
    const data = {
        skill: [
            {
                icon: "/assets/technology_icon/html_icon.png",
                text: "html",
                color: "#ef642a"
            },
            {
                icon: "/assets/technology_icon/css_icon.png",
                text: "css",
                color: "#0089ca"
            },
            {
                icon: "/assets/technology_icon/javascript_icon.png",
                text: "javascript",
                color: "#ffd83a"
            },
            {
                icon: "/assets/technology_icon/tailwind_icon.png",
                text: "tailwind",
                color: "#17bfcc"
            },
            {
                icon: "/assets/technology_icon/react_icon.png",
                text: "react",
                color: "#00d8ff"
            }
        ],
        projects: [
            {
                id: "1",
                link: "/",
                image: "/assets/project_thumbnail/thumbnail_portfolio.png",
                title: "Portfolio",
                description:
                    "Ini merupakan website portofolio saya, dengan desain UI yang sederhana, interaktif dan modern."
            },
            {
                id: "2",
                link: "/",
                image: "/assets/project_thumbnail/thumbnail_topup_game.png",
                title: "Topup Game",
                description:
                    "proyek ini saya bangun menggunakan React dan Tailwind. (tahap pengembangan)"
            }
        ]
    };
    return (
        <>
            <section className="w-screen h-dvh font-black bg-gray-50 flex flex-col justify-center items-center">
                <h1 className="text-[40vmin] text-gray-900 leading-none">PH</h1>
                <span className="tracking-widest">Portofolio Hafiz</span>
            </section>
            <section className="bg-gradient-to-tr from-blue-500/20 to-purple-500/20 p-5">
                <img
                    src="/assets/icon_site.png"
                    alt="icon"
                    className="w-1/5 h-1/5 aspect-square outline-none outline-2 outline-offset-0 outline-gray-900 rounded-3xl mb-4"
                />
                <span
                    className="text-purple-500 text-xs font-black p-2"
                    translate="no"
                >
                    Full Stack Developer • Junior
                </span>
                <h2 className="text-5xl font-black mb-6">
                    Hai, Nama saya Hafiz Nur Rahman
                </h2>
                <p className="landscape:w-4/6 md:w-4/6">
                    Berpengalaman +- 1 Tahun, Siap untuk belajar hal-hal baru,
                    penyelesaian masalah dan bekerja secara tim.
                </p>
            </section>
            <section className="bg-gradient-to-br from-blue-500/20 to-green-500/20 p-5">
                <div className="mb-5">
                    <span className="text-green-500 text-xs font-black p-2">
                        Proyek
                    </span>
                    <h2 className="text-3xl font-black mb-6">
                        Ini adalah daftar proyek saya
                    </h2>
                    <p className="landscape:w-4/6 md:w-4/6">
                        proyek ini saya buat untuk mengimplementasikan apa saja
                        yang telah saya pelajari selama ini.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 landscape:grid-cols-4 md:grid-cols-4">
                    {data.projects.map((project, index) => (
                        <Card
                            number={index + 1}
                            link={project.link}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </section>
            <section className="bg-gradient-to-bl from-green-500/20 to-orange-500/20 p-5">
                <div className="mb-5">
                    <span className="text-orange-500 text-xs font-black p-2">
                        Keahlian
                    </span>
                    <h2 className="text-3xl font-black mb-6">
                        Daftar teknologi yang telah di pelajari
                    </h2>
                    <p className="landscape:w-4/6 md:w-4/6">
                        berikut ini adalah daftar teknologi yang telah saya
                        pelajari
                    </p>
                </div>

                <div className="w-full flex flex-wrap gap-4 justify-center landscape:w-4/6 md:w-4/6 mx-auto">
                    {data.skill.map(skill => (
                        <Skill
                            image={skill.icon}
                            text={skill.text}
                            color={skill.color}
                        />
                    ))}
                </div>
            </section>
            <section className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-5">
                <div className="mb-5">
                    <span className="text-red-500 text-xs font-black p-2">
                        Kontak
                    </span>
                    <h2 className="text-3xl font-black mb-6">
                        Ada keperluan, kontak saya
                    </h2>
                    <p className="landscape:w-4/6 md:w-4/6">
                        hubungi melalui media sosial saya atau melalui email.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 underline font-bold">
                    <a href="https://github.com/hafiznurrahman">
                        Github&#8599;
                    </a>
                    <a href="https://instagram.com/hfznr__">Instagram&#8599;</a>
                    <a href="https://linkedin.com/in/hafiznurrahman">
                        Linkedin&#8599;
                    </a>
                    <a href="mailto:hafiznurrahman.dev@gmail.com">
                        Email&#8599;
                    </a>
                </div>
            </section>
        </>
    );
}
