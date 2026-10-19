import ProjectLayout from "./components/ProjectLayout";
import hero from "../../assets/images/hospoda-pod-bousovem/hospudka-pod-bousovem-hero.png"
import menu from "../../assets/images/hospoda-pod-bousovem/hospudka-pod-bousovem-menu.png"
import eventContact from "../../assets/images/hospoda-pod-bousovem/hospudka-pod-bousovem-event-contact.png"
import galerieNasPribeh from "../../assets/images/hospoda-pod-bousovem/hospudka-pod-bousovem-galerie-nas-pribeh.png"
import heroMobile from "../../assets/images/hospoda-pod-bousovem/hospudka-pod-bousovem-mobile-hero.png"
import contactMobile from "../../assets/images/hospoda-pod-bousovem/hospudka-pod-bousovem-mobile-contact.png"


function HospodaPodBousovem() {
  return (
    <ProjectLayout
      title='Hospůdka pod Boušovem'
      overview='
      A responsive website for Hospůdka pod Boušovem, a local Czech pub, helping visitors browse food and drink menus, discover events, and find opening hours and directions. It also includes a photo gallery and the pub’s story, while Sanity CMS lets the owner update key content without changing the source code.'
      type='Client website'
      features='Dynamic menu, events, photo gallery, CMS integration'
      stack='React, TypeScript, Tailwind CSS, Sanity CMS, Motion'
      lesson='For my first client project, I learned to connect a React and TypeScript frontend to Sanity CMS and retrieve related content using GROQ queries. I gained experience handling loading, error, and empty states when displaying external data. Using Motion for the second time gave me further practice with scroll-triggered animations and interactive transitions.'
      images={[hero, menu, eventContact, galerieNasPribeh, heroMobile, contactMobile]}
      theme='light'
      livePath='https://hospudka-pod-bousovem.leluanvn21.workers.dev/'
      gitHubPath='https://github.com/Luan2118/hospudka-pod-bousovem'
      prev='/finance-tracker'
    />
  )
}

export default HospodaPodBousovem;