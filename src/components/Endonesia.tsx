import BaseProject from './Project'
import endonesia_logo from '../assets/endonesia_logo.png'
import endonesia from '../assets/endonesia.png'

const Endonesia = () => {
    const projectData = {
        stack: "React, React Router, Soundcloud, Figma",
        link: "https://endonesia.web.app/mixes",
        description: `Website for a NYC and Seoul based label and mix series, Endonesia. This project involved building a 
        custom music player with Soundcloud's widget, and incorporating Bandcamp API for label releases.`,
        logo: endonesia_logo,
        image1: ``,
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col sm:flex-row items-center mt-0">
                <img className="max-w-sm sm:max-w-lg rounded-xl px-5 opacity-80" src={endonesia} alt="image of project"/>
            </div>
        </div>
    )
}

export default Endonesia;