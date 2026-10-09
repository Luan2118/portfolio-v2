import { motion } from "motion/react";
import useCursor from "../../../../../hooks/useCursor";

type FormFieldProps = {
  id: string
  label: string
  placeholder: string
  name: string
  type?: string
}

function FormField({ id, label, placeholder, name, type }: FormFieldProps) {

  const { setIsHover } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col group gap-1 text-sm md:text-base lg:text-lg font-[Inter] "
      onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
    >
      <label htmlFor={id} className="mt-1">{label}</label>
      {id === 'message' ?
        <textarea name={id} id={id} placeholder={placeholder} className="h-[80px] md:h-[100px] border border-t-0 border-l-0 border-r-0 border-[#292725]/40 outline-none focus-visible:ring-1 focus-visible:ring-[#171512]"></textarea> :

        <input name={name} id={id} type={type} placeholder={placeholder} className=" border border-t-0 border-l-0 border-r-0 border-[#292725]/40 outline-none focus-visible:ring-1 focus-visible:ring-[#171512]" />
      }
      <div>
      </div>
    </motion.div>
  )
}

export default FormField;