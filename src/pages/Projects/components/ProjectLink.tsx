type ProjectLinkProps = {
  label: string
  theme: 'dark' | 'light'
  projectPath: string
}


function ProjectLink({ label, theme, projectPath }: ProjectLinkProps) {
  const buttonStyle = label === 'Live'
    ? "border-[#A84A3A] text-[#A84A3A]"
    : theme === "dark"
      ? "border-white text-white"
      : "border-[#292725] text-[#292725]"
  return (

        <a href={projectPath} className={`text-xs xs:text-sm sm:text-base border rounded-sm py-1 px-3 xs:px-6 md:px-8 ${buttonStyle}`}> {label}</a>
  )
}

export default ProjectLink;