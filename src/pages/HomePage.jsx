import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import Skill from "../components/Skill.jsx";
import PageSection from "../components/PageSection.jsx";
import BtnDarkMode from "../components/BtnDarkMode.jsx";
import { data } from "../services/data.js";

export default function HomePage() {
  const [mode, setMode] = useState(() => {
    const theme = localStorage.getItem("mode");
    return theme ? JSON.parse(theme) : false;
  });

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <>

        <BtnDarkMode onClick={handleMode} mode={mode} />

        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-gray-50 dark:border-b-gray-900"></div>
        <section>
          <img
            src="/assets/iconHNR.webp"
            alt="icon HNR"
            className="w-1/5 h-1/5 aspect-square outline-none outline-2 outline-offset-0 outline-gray-900 dark:outline-gray-50 rounded-3xl mb-4"
          />
          <PageSection
            section="Front End Developer•Junior"
            title="Hai, Nama saya Hafiz Nur Rahman"
            description="Berpengalaman +- 1 Tahun, Siap untuk belajar hal-hal baru, penyelesaian masalah dan bekerja secara tim."
          />
        </section>

        <section>
          <PageSection
            section="Proyek"
            title="Ini adalah daftar proyek saya"
            description="proyek ini saya buat untuk mengimplementasikan apa saja yang telah saya pelajari selama ini."
          />
          <div className="grid grid-cols-2 gap-4 landscape:grid-cols-4 md:grid-cols-4">
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

        <section>
          <PageSection
            section="Keahlian"
            title="Daftar teknologi yang telah di pelajari"
            description="berikut ini adalah daftar teknologi yang telah saya pelajari"
          />
          <div className="w-full flex flex-wrap gap-4 justify-center landscape:w-4/6 md:w-4/6 mx-auto">
            {data.skill.map(skill => (
              <Skill
                image={skill.icon}
                text={skill.text}
                color={skill.color}
                bgColor={skill.bgColor}
              />
            ))}
          </div>
        </section>

        <section>
          <PageSection
            section="Kontak"
            title="Ada keperluan, kontak saya"
            description="hubungi melalui media sosial saya atau melalui email."
          />
          <div className="flex flex-wrap gap-4">
            {data.socialmedia.map(media => (
              <a
                href={media.url}
                target="_blank"
                className="capitalize no-underline font-bold hover:underline hover:text-[#B80000]"
              >
                {media.platform}&#8599;
              </a>
            ))}
          </div>
        </section>
    
    </>
  );
}
