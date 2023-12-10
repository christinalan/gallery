import BaseProject from './Project'
import freesound_logo from '../assets/freesound_logo.png'
import freesound from '../assets/freesound.png'
import freesound2 from '../assets/freesound2.png'
import freesound3 from '../assets/freesound3.png'

const Birbs = () => {
    const projectData = {
        stack: "p5, web audio, freesound API",
        link: "",
        description: `A simple visualizer to explore FreeSound's incredible sound library.`,
        logo: freesound_logo,
        image1: '',
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col items-center sm:items-start mt-0">
            <img className="max-w-sm rounded-3xl px-2 py-7" src={freesound} alt="image of project"/>
            <img className="max-w-sm rounded-3xl px-2 py-7" src={freesound2} alt="image of project"/>
                <img className="max-w-sm rounded-3xl px-2 py-7" src={freesound3} alt="image of project"/>
            </div>
        </div>
    )
}

export default Birbs;