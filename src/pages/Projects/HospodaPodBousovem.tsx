import ProjectLayout from "./components/ProjectLayout";
import frontView from "../../assets/images/hospoda-pod-bousovem/front-view.png"
import sideView from "../../assets/images/hospoda-pod-bousovem/side-view.png"


function HospodaPodBousovem() {
  return (
    <ProjectLayout 
      title="Hospoda pod Boušovem"
      overview="Local business website for a village pub, focused on presenting the venue, menu and essential visitor information."
      isInProgress={true}
      images={[sideView, frontView, sideView]}
    />
  )
}

export default HospodaPodBousovem;