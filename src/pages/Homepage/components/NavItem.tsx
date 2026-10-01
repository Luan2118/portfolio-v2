type NavItemProps = {
  label: string
  path: string
}

function NavItem({label, path}: NavItemProps) {
  return (
    <a href={path} className="text-sm sm:text-lg ">
      {label}
    </a>
  )
}


export default NavItem;