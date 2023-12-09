import ReactPlayer from 'react-player'
import BaseProject from './Project'
import worldupstream_logo from '../assets/worldupstream_logo.png'

const Chatnimal = () => {
    const projectData = {
        stack: "sound design, sonic mapping",
        link: "https://cezar.io/world-upstream",
        description: `Designed the sound for Cezar Mocan's art piece, World Upstream: an emergent, more-than-human community and their interactions with a nearby decaying dam.
        Given character mappings and story arcs, I created sounds that could dynamically fit the various needs and moods of each of the project's protagonists.`,
        logo: worldupstream_logo,
        image1: ``,
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col gap-5 max-w-sm sm: max-w-lg items-center mt-0">
               <ReactPlayer 
                className=""
                url="worldupstream1.mp4"
                width='100%'
                height='100%'
                controls={true}
               />
                 <ReactPlayer 
                className=""
                url="worldupstream2.mp4"
                width='100%'
                height='100%'
                controls={true}
               />
            </div>
        </div>
    )
}

export default Chatnimal;