import NavItem from "../components/NavItem";

function Hero() {
  return (
    <div id="hero" className="h-dvh bg-[#FFFBF4] flex flex-col justify-between p-8 font-[Inter]">
      <aside className="grid grid-cols-2 items-center sm:grid-cols-3">
        <div>
          <NavItem label="LL" path="#hero"/>
        </div>

        <p className="hidden text-sm text-center sm:block sm:text-lg">
          Software Developer - Pilsen
        </p>

        <nav className="flex justify-end gap-6 md:gap-10 lg:flex">
          <NavItem label="Projects" path="#projects"/>
          <NavItem label="Contact" path="#contact"/>
        </nav>
      </aside>

      <main className="m-auto">
        <h1 className="flex flex-col text-[clamp(110px,calc(50.14px+15.962vw),280px)] md:flex-row md:gap-10 font-[Judson] leading-[0.80]">
          <span>Luan</span>
          <span className="text-right">Le</span>
        </h1>
      </main>

      <aside className="text-sm flex justify-between sm:text-lg font-[Inter]">
        <p>Learning by building</p>
        <p>(SCROLL)</p>
      </aside>
    </div>
  )
}


export default Hero;