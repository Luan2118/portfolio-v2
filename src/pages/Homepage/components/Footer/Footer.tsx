import github from "../../../../assets/icons/github.png"
import linkedin from "../../../../assets/icons/linkedin.png"
import cv from "../../../../assets/icons/cv.png"
import ContactLink from "./components/ContactLink";
import FormField from "./components/FormField";

function Footer() {
  return (
    <div className="h-dvh bg-[#FFFBF4]  flex flex-col p-40 px-70 gap-30">

      <div className="mx-auto">
        <p className="text-9xl font-[Judson]">Get in Contact</p>
      </div>


      <div className="grid grid-cols-2 font-[Inter]">
        <div className="flex flex-col gap-30">
          <div className="flex flex-col gap-6">
            <ContactLink src={github} text="Github" />

            <ContactLink src={linkedin} text="LinkedIn" />

            <ContactLink src={cv} text="CV" />

          </div>

          <div className="w-xs">
            <p className="text-3xl font-[Judson]">leluanvn21@seznam.cz</p>
            <hr />
          </div>
        </div>


        <form className="flex flex-col gap-10">

          <FormField id="name" label="Your name" placeholder="John Doe"/>

          <FormField id="email" label="Your email" placeholder="johndoe@example.com"/>

          <FormField id="message" label="Your message" placeholder="Tell me about the opportunity..."/>

          <button className="self-end">Submit</button>
        </form>
      </div>
      <p className="self-center font-[Judson]">(© 2026 Luan Le)</p>
    </div>
  )
}


export default Footer;