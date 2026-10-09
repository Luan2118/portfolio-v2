import { Link } from "react-router-dom"
import useCursor from "../../hooks/useCursor"

function NotFound() {
  const { setIsHover } = useCursor()

  return (
    <main className="min-h-svh bg-[#FFFBF4] text-[#171512] flex flex-col items-center justify-center px-5 text-center">

      <p className="font-[Inter] text-xs uppercase tracking-[0.25em] text-[#171512]/50 mb-4">
        Page not found
      </p>

      <h1 className="font-[Judson] text-[clamp(110px,22vw,220px)] leading-[0.8]">
        404
      </h1>

      <p className="font-[Judson] text-2xl md:text-4xl mt-8 text-[#171512]/80">
        Are you lost?
      </p>

      <Link
        to="/"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="mt-10 font-[Inter] text-sm border border-[#292725] text-[#292725] bg-[#FFFBF4] py-1 px-3 xs:px-6 xs:text-sm 2xl:text-base rounded-sm"
      >
        Back to home ↗
      </Link>

    </main>
  )
}

export default NotFound