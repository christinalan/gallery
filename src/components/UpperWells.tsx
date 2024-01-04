import BaseProject from './Project'
import uw_logo from '../assets/uw_logo.png'
import uw1 from '../assets/uw1.png'
import uw2 from '../assets/uw2.png'
import uw3 from '../assets/uw3.png'
import uw4 from '../assets/uw4.png'

const UpperWells = () => {
    const projectData = {
        stack: "Unity, Blender, C#",
        link: "https://christinalan.itch.io/vw-final",
        description: `Upper Wells is a virtual, speculative museum that reimagines a future where today's declining water systems, due to haphazard policies and capitalist economies, are reconstructed entirely.
        Expanding upon promising technologies and solutions currently being explored, this interactive experience hopes to increase visitor awareness and desire to become more involved in the governance and conservation of today's water systems.`,
        logo: uw_logo,
        image1: ``,
        info1: ``,
        image2: ``,
        info2: ``,
    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-sm mt-5">
                <img className="max-w-sm sm:max-w-lg lg:max-w-xl rounded-3xl px-2" src={uw1} alt="image of project"/>
            </div>
            <div className="more-info flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-sm mt-5 pb-4">
                <img className="max-w-sm sm:max-w-lg lg:max-w-xl rounded-3xl px-2" src={uw2} alt="image of project"/>
            </div>
            <div className="more-info flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-sm mt-5">
                <img className="max-w-sm sm:max-w-lg lg:max-w-xl rounded-3xl px-2" src={uw3} alt="image of project"/>
            </div>
            <div className="more-info flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-sm mt-5 pb-4">
                <img className="max-w-sm sm:max-w-lg lg:max-w-xl rounded-3xl px-2" src={uw4} alt="image of project"/>
            </div>
        </div>
    )
}

export default UpperWells;