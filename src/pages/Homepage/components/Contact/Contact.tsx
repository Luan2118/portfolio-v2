import github from "../../../../assets/icons/github.png"
import linkedin from "../../../../assets/icons/linkedin.png"
import cv from "../../../../assets/icons/cv.png"
import ContactLink from "./components/ContactLink";
import FormField from "./components/FormField";
import Footer from "../Footer";

function Contact() {
  return (
    <>
      <div className="h-dvh bg-[#FFFBF4] flex flex-col gap-15 py-15 px-5 xs:px-15 sm:px-20 sm:py-30 md:gap-40 md:py-40 lg:px-40  2xl:px-80">

        <div className="mx-auto">
          <p className="text-[clamp(56px,10vw,128px)] leading-none font-[Judson] text-center">Get in Contact</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 ">

          <form className="order-1 md:order-2 flex flex-col justify-between ">

            <FormField id="name" label="Your name" placeholder="John Doe" />

            <FormField id="email" label="Your email" placeholder="johndoe@example.com" />

            <FormField id="message" label="Your message" placeholder="Tell me about the opportunity..." />

            <button className="self-end text-sm lg:text-lg">Submit</button>
          </form>

          <div className="order-2 md:order-1 flex flex-col gap-15 md:gap-30 mt-20 md:mt-0">
            <div className="flex flex-col gap-6">
              <ContactLink src={github} text="Github" />

              <ContactLink src={linkedin} text="LinkedIn" />

              <ContactLink src={cv} text="CV" />

            </div>

            <div className="w-[200px] sm:w-[240px] 2xl:w-xs">
              <p className="text-xl sm:text-2xl 2xl:text-3xl font-[Judson]">leluanvn21@seznam.cz</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  )
}


export default Contact;