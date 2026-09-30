type ContactLinkProps = {
  text: string
  src: string
  path: string
}

function ContactLink({text, src, path}: ContactLinkProps) {
  return (
      <a href={path} target='_blank' rel="noopener noreferrer" className="flex gap-4 items-center w-fit">
        <img src={src} alt="" className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"/>
        <p className="text-sm lg:text-lg">{text}</p>
      </a>
  )
}


export default ContactLink;