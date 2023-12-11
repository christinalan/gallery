import './style.css';
import BaseProject from './Project'
import sluice_logo from '../assets/sluice_logo.png'
import sluice1 from '../assets/sluice1.png'
import sluice2 from '../assets/sluice2.png'

const Birbs = () => {
    const projectData = {
        stack: "p5, web audio, freesound API",
        link: "",
        description: `Design for Sluice, a radio show, and developing audio-visual project based in NYC.`,
        logo: sluice_logo,
        image1: '',
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="margin-special more-info flex flex-col items-center sm:items-start mt-0">
                <img className="margin-special max-w-sm sm:max-w-xl rounded-3xl px-2 py-7" src={sluice1} alt="image of project"/>
                <img className="max-w-sm sm:max-w-xl rounded-3xl px-2 py-7" src={sluice2} alt="image of project"/>
            </div>
        </div>
    )
}

export default Birbs;