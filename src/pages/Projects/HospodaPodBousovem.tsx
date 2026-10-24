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
      overview="
      I designed and built a responsive website for Hospůdka pod Boušovem, a local pub in Všekary. The homepage brings together the food and drinks menus, upcoming events, and visitor information. Separate pages tell the pub’s story and showcase its photo gallery. I used Figma to plan the design and integrated Sanity CMS so the owner can update key content without changing the code. The site also includes page-specific SEO metadata and structured data for the pub."
      type='Client website'
      features='Dynamic menu, events, photo gallery, Sanity CMS integration, on-page SEO, local business structured data'
      stack='React, TypeScript, Tailwind CSS, Sanity CMS, Motion'
      lesson='This was my first client project, and I learned how to take a website from design to launch. I used Figma to plan the layouts, then built them with React, TypeScript, and Tailwind CSS. I connected the site to Sanity, wrote GROQ queries to fetch content, and handled loading, error, and empty states. I also gained practical experience with responsive design, animations, and SEO for a local business.'
      images={[hero, menu, eventContact, galerieNasPribeh, heroMobile, contactMobile]}
      theme='light'
      livePath='https://hospudka-pod-bousovem.leluanvn21.workers.dev/'
      gitHubPath='https://github.com/Luan2118/hospudka-pod-bousovem'
      prev='/gym-tracker'
      next='/finance-tracker'
    />
  )
}

export default HospodaPodBousovem;