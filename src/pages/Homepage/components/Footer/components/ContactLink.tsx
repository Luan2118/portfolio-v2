type ContactLinkProps = {
  text: string
  src: string
}

function ContactLink({text, src}: ContactLinkProps) {
  return (
      <div className="flex gap-4 items-center">
        <img src={src} alt="" />
        <p>{text}</p>
      </div>
  )
}


export default ContactLink;