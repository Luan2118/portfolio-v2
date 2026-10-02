import { motion } from "motion/react";

type ContactLinkProps = {
  text: string
  src: string
  path: string
}

function ContactLink({ text, src, path }: ContactLinkProps) {
  return (
    <motion.a
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      href={path}
      target='_blank'
      rel="noopener noreferrer"
      className="flex gap-4 items-center w-fit">
      <img src={src} alt="" className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]" />
      <p className="text-sm lg:text-lg">{text}</p>
    </motion.a>
  )
}


export default ContactLink;