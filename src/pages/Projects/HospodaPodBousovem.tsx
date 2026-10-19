import ProjectLayout from "./components/ProjectLayout";
import frontView from "../../assets/images/hospoda-pod-bousovem/front-view.png"
import sideView from "../../assets/images/hospoda-pod-bousovem/side-view.png"


function HospodaPodBousovem() {
  return (
    <ProjectLayout
      title='Hospůdka pod Boušovem'
      overview='
      Hospůdka pod Boušovem is a responsive website built for a local Czech pub, allowing visitors to explore the menu, upcoming events, photo gallery, and essential information.

      I designed and developed the website using React, TypeScript, and Tailwind CSS, integrating Sanity CMS so the owner can manage and update content without modifying the code.'
      type='Client website'
      features='Dynamic menu, events, photo gallery, CMS integration'
      stack='React, TypeScript, Tailwind CSS, Sanity CMS, Motion'
      lesson='Working on a real client project taught me how to balance design decisions with practical requirements, integrate Sanity CMS for content management, and build a website that is easy for both visitors and the owner to use.'
      images={[frontView, sideView]}
      theme='light'
      livePath='https://hospudka-pod-bousovem.leluanvn21.workers.dev/'
      gitHubPath='https://github.com/Luan2118/hospudka-pod-bousovem'
      prev='/finance-tracker'
    />
  )
}

export default HospodaPodBousovem;