import { motion, type Variants } from "framer-motion";

type ProjectLinkProps = {
  label: string
  theme: 'dark' | 'light'
  projectPath?: string
}

const item: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

function ProjectLink({ label, theme, projectPath, }: ProjectLinkProps) {
  const buttonStyle = label === 'Live'
    ? "border-[#A84A3A] text-[#A84A3A]"
    : theme === "dark"
      ? "border-white text-white"
      : "border-[#292725] text-[#292725]"
  return (

    <motion.a 
      variants={item}
    href={projectPath} 
    target='_blank' 
    rel="noopener noreferrer" 
    className={`text-xs xs:text-sm sm:text-base border rounded-sm py-1 px-3 xs:px-6 md:px-8 ${buttonStyle}`}>
      {label}
    </motion.a>
  )
}

export default ProjectLink;