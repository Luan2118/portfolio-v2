import { motion } from "motion/react";
import useCursor from "../../../../../hooks/useCursor";

type ContactLinkProps = {
  text: string
  src: string
  path: string
}

function ContactLink({ text, src, path }: ContactLinkProps) {

  const { setIsHover } = useCursor();

  return (
    <div className="flex flex-col w-fit group gap-1">
      <motion.a
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        href={path}
        target='_blank'
        rel="noopener noreferrer"
        className="flex gap-3 items-center w-fit pr-3"
        onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
      >
        <img src={src} alt="" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
        <p className="text-sm md:text-base lg:text-lg">{text}</p>

      </motion.a>
      <hr className="scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 border-0 h-px bg-white mix-blend-difference" />
    </div>
  )
}


export default ContactLink;