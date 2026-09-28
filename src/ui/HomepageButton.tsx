type HomepageButtonProps = {
  children: React.ReactNode
}

function HomepageButton({children}: HomepageButtonProps) {
  return (
    <button className="font-medium text-sm sm:text-base ">
      {children}
    </button>
  )
}


export default HomepageButton;