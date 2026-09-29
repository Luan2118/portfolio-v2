type ButtonProps = {
  label: string
}


function Button({ label }: ButtonProps) {
  return (
    <button className={label === 'Live' ? "text-xs xs:text-sm sm:text-base border py-1 px-3 xs:px-6 md:px-8 border-[#7F342A] text-[#7F342A]" : "text-xs xs:text-sm sm:text-base border py-1 px-3 xs:px-6 md:px-8 border-[#292725] text-[#292725]"}>
      {label}
    </button>
  )
}

export default Button;