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
      <div id="contact" className="min-h-dvh bg-[#FFFBF4] flex flex-col gap-15 py-15 px-5 xs:px-15 sm:px-20 md:gap-40 md:py-30 lg:py-40 lg:px-40  2xl:px-80">

        <div className="mx-auto overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[clamp(56px,10vw,128px)] leading-none font-[Judson] text-center">
            Get in Contact
          </motion.p >
        </div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">

          <div className="order-1 md:order-2">
            <form className="flex flex-col justify-between" onSubmit={(e) => handleSubmit(e)}>

              <FormField name="name" id="name" type="text" label="Your name" placeholder="John Doe" />

              <FormField name="name" id="email" type="email" label="Your email" placeholder="johndoe@example.com" />

              <FormField name="message" id="message" label="Your message" placeholder="Tell me about the opportunity..." />

              <motion.button
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="self-end text-sm lg:text-lg font-[Inter] mt-3  px-3 border-[#292725] text-[#292725] rounded-sm cursor-pointer xs:px-5 md:px-6 ">Submit
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

          <div className="order-2 md:order-1 flex flex-col gap-15 md:gap-0 md:justify-between  md:mt-0">
            <div className="flex flex-col gap-6 mt-2">
              <ContactLink src={github} text="Github" path='https://github.com/Luan2118' />

              <ContactLink src={linkedin} text="LinkedIn" path='https://www.linkedin.com/in/luan-le-7671b9342/' />

              <ContactLink src={cv} text="CV" path='cv.pdf' />

            </div>

            <div className="w-fit group">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className=" text-xl sm:text-2xl 2xl:text-3xl font-[Judson]  pr-5">
                  leluanvn21@seznam.cz
                </motion.p>
              </div>
              <hr className="scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600" />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}


export default Contact;