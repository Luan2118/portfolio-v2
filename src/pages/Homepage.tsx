import HomepageButton from "../ui/HomepageButton";
import menuIcon from "../assets/icons/menu.png"

function Homepage() {
  return (
    <div className="h-dvh bg-[#FFFBF4] flex flex-col justify-between p-8 font-[Inter]">

      <aside className="grid grid-cols-2 items-center xs:grid-cols-3">
        <div>
          <HomepageButton>LL</HomepageButton>
        </div>

        <div className="hidden text-sm text-center xs:block sm:text-base">
          Software Developer - Pilsen
        </div>

        <nav className="flex justify-end lg:hidden">
          <button className="w-[20px]">
            <img src={menuIcon} alt="Menu" />
          </button>
        </nav>
        
        <nav className="hidden flex justify-end gap-12 lg:flex">
          <HomepageButton>Projects</HomepageButton>
          <HomepageButton>Skills</HomepageButton>
          <HomepageButton>Contact</HomepageButton>
        </nav>
      </aside>

      <main className="m-auto">
        <h1 className="flex flex-col text-[clamp(110px,calc(50.14px+15.962vw),280px)] md:flex-row md:gap-10 font-[Judson] leading-[0.80]">
          <span>Luan</span>
          <span className="text-right">Le</span>
        </h1>
      </main>

      <aside className="text-sm flex justify-between sm:text-base font-[Inter]">
        <div>Learning by building</div>
        <div>(SCROLL)</div>
      </aside>

    </div>
  )
}


export default Homepage;