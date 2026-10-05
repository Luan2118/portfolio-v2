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
      initial={{opacity: 0, x: 40}}
      whileInView={{opacity: 1, x: 0}}
      transition={{ duration: 1, ease: "easeOut"}}
      className="flex flex-col group gap-1 text-sm md:text-base lg:text-lg font-[Inter] "
      onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
      >
      <label htmlFor={id} className="mt-1">{label}</label>
      {id === 'message' ?
        <textarea name={id} id={id} placeholder={placeholder} className="h-[50px] md:h-[100px] border-0 outline-0"></textarea> :

        <input name={name} id={id} type={type} placeholder={placeholder} className="border-0 outline-0" />
      }
      <div>
        <hr className="opacity-25" />
        <hr className="scale-x-0 origin-left group-hover:scale-x-100 duration-700" />
      </div>
    </motion.div>
  )
}

export default FormField;