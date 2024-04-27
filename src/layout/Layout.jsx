import { Outlet,ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <ScrollRestoration/>
    
      <section className="w-screen h-dvh font-black bg-[#B80000] flex flex-col justify-center items-center ">
        <video
          autoPlay
          muted
          loop
          className="w-1/2 h-auto aspect-square select-none landscape:w-1/4 pointer-events-none"
        >
          <source src="/assets/motionHNR.webm" type="video/webm" />
        </video>
        <h1 className="text-xs text-gray-50 leading-none">Hafiz Nur Rahman</h1>
      </section>
      <main className="flex flex-col gap-8 md:w-10/12 mx-auto p-5 relative">
        <Outlet />
      </main>
    </>
  );
}
