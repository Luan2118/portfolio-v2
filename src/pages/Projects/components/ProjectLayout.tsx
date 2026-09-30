import { Link } from "react-router-dom";
import blackArrow from "../../../assets/icons/blackArrow.png"
import whiteArrow from "../../../assets/icons/whiteArrow.png"
import ProjectLink from "./ProjectLink";


type ProjectLayoutProps = {
  title: string
  overview: string
  type?: string
  features?: string
  stack?: string
  lesson?: string
  images: string[]
  theme: 'light' | 'dark'
  isInProgress?: boolean
  livePath: string 
  gitHubPath: string
}

function ProjectLayout({ title, overview, type, features, stack, lesson, images, theme, isInProgress, livePath, gitHubPath }: ProjectLayoutProps) {

  const linkPath = 
    title === 'Gym Tracker' ? '/finance-tracker' : 
    title === 'Finance Tracker' ? '/hospudka-pod-bousovem' : '/'
  
  const linkStyle = theme === "dark"
      ? "border-white text-white"
      : "border-[#292725] text-[#292725]"

  const isDark = theme === 'dark';

  return (
    <div className={` grid grid-cols-1 xl:grid-cols-2 px-10 md:px-15 xl:p-0 xl:h-dvh ${isDark ? 'bg-[#171512] text-[#FFFBF4]' : 'bg-[#FFFBF4] text-[#171512]'}`}>

      <div className={`contents xl:flex xl:flex-col xl:px-20 2xl:px-30 ${isDark ? 'bg-[#171512]' : 'bg-[#FFFBF4]'}`}>
        <div className="order-1 flex flex-col gap-6 md:gap-10 py-8">

          <Link to='/' className="mb-15">
            <img src={isDark ? whiteArrow : blackArrow} alt="" />
          </Link>


          <h1 className="text-5xl lg:text-7xl font-[Judson] text-center">{title}</h1>

          {isInProgress ? <p className="font-[Inter] text-3xl text-[#A84A3A] mx-auto tracking-[0.4rem] mt-15 mb-15">WEBSITE REDESIGN - IN PROGRESS</p>
            : null}

          <div className="mt-5">
            <p className="text-xl lg:text-2xl font-[Judson] py-4">Project Overview</p>
            <p className="text-sm md:text-base">
              {overview}
            </p>
          </div>



          {isInProgress ? null :
            <>
              <div>
                <p className="text-xl lg:text-2xl font-[Judson] py-4">Details</p>

                <dl className="text-sm md:text-base">
                  <div className="grid grid-cols-[80px_1fr] gap-4 border-b border-black/20 pb-2">
                    <dt className="font-medium uppercase tracking-wide">Type</dt>
                    <dd>{type}</dd>
                  </div>

                  <div className="grid grid-cols-[80px_1fr] gap-4 border-b border-black/20 py-2">
                    <dt className="font-medium uppercase tracking-wide">Features</dt>
                    <dd>{features}</dd>
                  </div>

                  <div className="grid grid-cols-[80px_1fr] gap-4 pt-2">
                    <dt className="font-medium uppercase tracking-wide">Stack</dt>
                    <dd>{stack}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <p className="text-xl lg:text-2xl font-[Judson] py-4">What I learned</p>
                <p className="text-sm md:text-base">
                  {lesson}
                </p>
              </div>
            </>
          }
        </div>

        {isInProgress ? null :
          <div className="order-3 flex justify-between py-6  xl:mt-8">
            <div className="flex gap-2 md:gap-5">
              <ProjectLink label="Live" theme={theme} projectPath={livePath}/>
              <ProjectLink label="Github" theme={theme} projectPath={gitHubPath}/>
            </div>
            <Link to={linkPath} className={`text-xs xs:text-sm sm:text-base rounded-sm border py-1 px-3 xs:px-6 md:px-8 ${linkStyle}`}>Next Project</Link>
          </div>
        }

      </div>

      <div className="order-2 xl:overflow-y-scroll ">
        {images?.map((image) => {
          return (
            <img src={image} alt="" key={image} />
          )
        })}
      </div>

    </div>
  )
}


export default ProjectLayout;