import github from "../../../../assets/icons/github.png"
import linkedin from "../../../../assets/icons/linkedin.png"
import cv from "../../../../assets/icons/cv.png"
import ContactLink from "./components/ContactLink";
import FormField from "./components/FormField";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { CircleCheck, CircleX } from "lucide-react";
import { motion } from "motion/react";

function Contact() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const statusMessage = setTimeout(() => {
      setStatus('')
    }, 3000)

    return () => clearTimeout(statusMessage)
  }, [status])

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {

      const response = await fetch(
        "https://formspree.io/f/mwlpznwj",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      }

    } catch (error) {
      console.error(error)
      setStatus("error");
    }
  };


  return (
    <>
      <div id="contact" className="min-h-dvh bg-[#FFFBF4] flex flex-col px-5 pt-5 gap-3 justify-between md:px-15 xl:px-40 2xl:px-65">

        <div className="overflow-hidden  my-auto">
          <motion.p
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[clamp(50px,calc(20px+10vw),60px)] md:text-[clamp(100px,10vw,128px)] leading-none font-[Judson] text-center ">
            Get in Touch
          </motion.p >
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-auto">

          <div className="order-1 lg:order-2">
            <form className="flex flex-col justify-between" onSubmit={(e) => handleSubmit(e)}>

              <FormField name="name" id="name" type="text" label="Your name" placeholder="John Doe" />

              <FormField name="name" id="email" type="email" label="Your email" placeholder="johndoe@example.com" />

              <FormField name="message" id="message" label="Your message" placeholder="Tell me about the opportunity..." />

              <motion.button
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="self-end text-sm md:text-base lg:text-lg font-[Inter] mt-1 sm:mt-3 px-3 border-[#292725] text-[#292725] rounded-sm cursor-pointer xs:px-5 md:px-6 ">Submit
              </motion.button>
            </form>

            {status === "success" && (
              <div className="flex gap-2 items-center mt-2 text-sm text-green-600 font-[Inter]">
                <CircleCheck size={16} />
                <span >Message sent successfully.</span>
              </div>

            )}

            {status === "error" && (
              <div className="flex gap-2 items-center mt-2 text-sm text-red-500 font-[Inter]">
                <CircleX size={16} />
                <span>Something went wrong.</span>
              </div>
            )}
          </div>

          <div className="order-2 lg:order-1 flex flex-col gap-3 xs:gap-10 lg:gap-0 md:justify-between  md:mt-0">
            <div className="flex flex-col gap-2 xs:gap-4 md:gap-5 mt-2">
              <ContactLink src={github} text="Github" path='https://github.com/Luan2118' />

              <ContactLink src={linkedin} text="LinkedIn" path='https://www.linkedin.com/in/luan-le-7671b9342/' />

              <ContactLink src={cv} text="CV" path='cv.pdf' />

            </div>

            <div className="w-fit group">
              <div className="overflow-hidden">
                <motion.a
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className=" text-lg sm:text-2xl 2xl:text-3xl font-[Judson]  pr-5"
                  href="mailto:leluanvn21@seznam.cz"
                  >
                  leluanvn21@seznam.cz
                </motion.a>
              </div>
              <hr className="scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}


export default Contact;