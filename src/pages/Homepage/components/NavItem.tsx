import useCursor from "../../../hooks/useCursor"


type NavItemProps = {
  label: string
  path: string
}

function NavItem({label, path}: NavItemProps) {

  const { setIsHover } = useCursor();

  return (
    <a href={path} className="text-sm sm:text-lg " onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {label}
    </a>
  )
}


export default NavItem;