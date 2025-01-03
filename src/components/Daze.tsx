import BaseProject from './Project'
import daze_logo from '../assets/daze_logo.png'
import daze from '../assets/daze.png'

const Daze = () => {
    const projectData = {
        stack: "React, React Router, Typescript, Figma, Intercom",
        link: "https://daze.chat/",
        description: `Website for a creative messaging app, Daze. This website required seamless video and music integration, as well as Intercom messaging.`,
        logo: daze_logo,
        image1: ``,
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col sm:flex-row items-center mt-0">
                <img className="max-w-sm sm:max-w-lg lg:max-w-2xl rounded-xl px-5 md:px-1 opacity-80" src={daze} alt="image of project"/>
            </div>
        </div>
    )
}

export default Daze;