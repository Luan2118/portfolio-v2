type NavItemProps = {
  label: string
  path: string
}

function NavItem({label, path}: NavItemProps) {
  return (
    <a href={path} className="font-medium text-sm sm:text-base ">
      {label}
    </a>
  )
}


export default NavItem;