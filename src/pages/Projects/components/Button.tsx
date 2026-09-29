type ButtonProps = {
  label: string
  theme: 'dark' | 'light'
}


function Button({ label, theme }: ButtonProps) {
  const buttonStyle = label === 'Live'
    ? "border-[#A84A3A] text-[#A84A3A]"
    : theme === "dark"
      ? "border-white text-white"
      : "border-[#292725] text-[#292725]"
  return (
    <button
      className={`text-xs xs:text-sm sm:text-base border py-1 px-3 xs:px-6 md:px-8 ${buttonStyle}`}
    >

      {label}

    </button>
  )
}

export default Button;