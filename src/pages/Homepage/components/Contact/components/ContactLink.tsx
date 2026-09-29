type ContactLinkProps = {
  text: string
  src: string
}

function ContactLink({text, src}: ContactLinkProps) {
  return (
      <div className="flex gap-4 items-center">
        <img src={src} alt="" className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"/>
        <p className="text-sm lg:text-lg">{text}</p>
      </div>
  )
}


export default ContactLink;