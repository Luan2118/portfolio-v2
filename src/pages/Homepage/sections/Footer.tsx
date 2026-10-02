import { motion } from "motion/react";

function Footer() {
  return (
    <div className="overflow-hidden bg-[#FFFBF4] ">
      <motion.footer
        initial={{ opacity: 0, y: "100%"}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center font-[Judson] bg-[#FFFBF4] py-2 text-sm sm:text-base">
        (© 2026 Luan Le)
      </motion.footer>
    </div>

  )
}

export default Footer;