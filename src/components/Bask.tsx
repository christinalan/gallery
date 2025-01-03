import './style.css';
import BaseProject from './Project'
import bask from '../assets/bask_logo.png'
import bask_health from '../assets/bask_health.png';
import bask_demo from '../assets/bask_demo.gif'


const Bask = () => {
    const projectData = {
        stack: 'React, Three.JS, GLSL, Blender',
        link: "https://bask.health/",
        description: `For Bask Health, a full service platform for telehealth, I built an immersive house that showcases each of the services Bask offers to clients. 
        Visitors can explore each room, seeing the patient interact and learn from professionals. I worked with Blender, ThreeJS, and React to deploy the entire experience.`,
        logo: bask,
        image1: ``,
        info1: ``,
        info2: ``,
        image2: '',
    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="extra-info sm:pr-8">
                <div className="more-info flex flex-col sm:flex-row items-center gap-2 mt-10 mb-10">
                <div className="flex flex-col gap-3">
                        <img className="project-image-small rounded-lg" src={bask_health}/>
                        <img className="project-image-small rounded-lg" src={bask_demo}/>
                </div>

                <p className="more-info-description text-lg sm:text-sm px-6">
                    The project required extensive re-modeling and 3D optimization for proper playback. I worked with a team of designer and developers to integrate the ThreeJS experience with the existing UI.
                </p>
                </div>
            </div>

        </div>
    )
}

export default Bask;