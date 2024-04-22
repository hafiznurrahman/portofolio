import Card from "../components/Card.jsx";
import Skill from "../components/Skill.jsx";
import PageSection from "../components/PageSection.jsx";
import { data } from "../services/data.js";

export default function HomePage() {
  return (
    <main>
      <section className="w-screen h-dvh font-black bg-[#B80000] flex flex-col justify-center items-center">
        <img
          src="/assets/motionHNR.gif"
          alt="icon animation"
          className="w-1/2 h-auto aspect-square select-none landscape:w-1/4"
        />
        <h1 className="text-xs text-gray-50 leading-none">Hafiz Nur Rahman</h1>
      </section>

      <section className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-5">
        <img
          src="/assets/iconHNR.png"
          alt="icon"
          className="w-1/5 h-1/5 aspect-square outline-none outline-2 outline-offset-0 outline-red-50 rounded-3xl mb-4"
        />
        <PageSection
          section="Full Stack Developer•Junior"
          title="Hai, Nama saya Hafiz Nur Rahman"
          description="Berpengalaman +- 1 Tahun, Siap untuk belajar hal-hal baru, penyelesaian masalah dan bekerja secara tim."
          color="text-purple-500"
        />
      </section>

      <section className="bg-gradient-to-bl from-purple-500/20 to-green-500/20 p-5">
        <PageSection
          section="Proyek"
          title="Ini adalah daftar proyek saya"
          description="proyek ini saya buat untuk mengimplementasikan apa saja yang telah saya pelajari selama ini."
          color="text-green-500"
        />
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

      <section className="bg-gradient-to-br from-green-500/20 to-orange-500/20 p-5">
        <PageSection
          section="Keahlian"
          title="Daftar teknologi yang telah di pelajari"
          description="berikut ini adalah daftar teknologi yang telah saya pelajari"
          color="text-orange-500"
        />
        <div className="w-full flex flex-wrap gap-4 justify-center landscape:w-4/6 md:w-4/6 mx-auto">
          {data.skill.map(skill => (
            <Skill image={skill.icon} text={skill.text} color={skill.color} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-bl from-orange-500/20 to-red-500/20 p-5">
        <PageSection
          section="Kontak"
          title="Ada keperluan, kontak saya"
          description="hubungi melalui media sosial saya atau melalui email."
          color="text-red-500"
        />
        <div className="flex flex-wrap gap-4">
          {data.socialmedia.map(media => (
            <a
              href={media.url}
              target="_blank"
              className="underline font-bold hover:no-underline"
            >
              {media.platform}&#8599;
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
