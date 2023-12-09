import BaseProject from './Project'
import chatnimal_logo from '../assets/chatnimal_logo.png'
import chatnimal from '../assets/chatnimal.png'

const Chatnimal = () => {
    const projectData = {
        stack: "p5, web audio, sockets, user testing, audio deep diving",
        link: "https://chatnimal.herokuapp.com/",
        description: `Upon discovering the wild sounds of different animal communication, I built this animal chat
        application with Dorian Janezic. Users can send messages to each other and hear them translated in the 'language' of
        their selected animal.`,
        logo: chatnimal_logo,
        image1: ``,
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col sm:flex-row items-center mt-0">
                <img className="max-w-sm sm:max-w-xl rounded-3xl" src={chatnimal} alt="image of project"/>
            </div>
        </div>
    )
}

export default Chatnimal;