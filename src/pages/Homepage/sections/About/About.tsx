import { motion } from "motion/react";

function About() {
    return (
        <section className="bg-[#171512] text-[#FFFBF4] flex items-center  h-[500px] px-15 gap-15 border border-r-0 border-l-0 border-white/40">
            <div className="flex flex-col items-center flex-[2] py-30">
                <div className="overflow-hidden ">
                    <motion.h2
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[clamp(50px,15vw,100px)] font-[Judson] leading-none w-fit   ">
                        About me
                    </motion.h2>
                </div>

                <div className="overflow-hidden">

                    <motion.p
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}

                        className="text-[#FFFBF4]/70 max-w-[300px] w-fit">
                        How I learned, what I focus on, and how I approach frontend development.
                    </motion.p>
                </div>

            </div>

            <div className="w-px self-stretch bg-white/40" />

            <div className="font-[Inter] flex-[1] py-30">

                <div className="overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-block"
                    >
                        I'm a developer based in Pilsen, Czech Republic,
                    </motion.span>
                </div>

                <div className="overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block"

                    >
                        with an interest in both frontend and backend development.
                    </motion.span>
                </div>

                <div className="overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block"

                    >
                        I enjoy understanding how things work, finding practical solutions,

                    </motion.span>
                </div>


                <div className="overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block"

                    >
                        and improving my skills through hands-on experience.
                    </motion.span>
                </div>

            </div>

        </section>
    )
}

export default About;