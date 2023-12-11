import './style.css';
import BaseProject from './Project'
import sigid_logo from '../assets/sigid_logo.png'
import sigid1 from '../assets/sigid1.png'
import sigid2 from '../assets/sigid2.png'
import sigid3 from '../assets/sigid3.jpg'

const Sluice = () => {
    const projectData = {
        stack: 'Three.JS, raspberry pi, sockets, web audio, positional audio, blender, user research, prototyping',
        link: "https://www.xlaenz.com/zzz/sigidplay.html",
        description: `Sigid Play is a virtual radio landscape, created to invite listeners to the world of
        software defined radio and unusual radio frequencies. Artists can stream their radio transmissions for participants to listen to
        through audio-reactive visuals.`,
        logo: sigid_logo,
        image1: sigid1,
        info1: `The visuals were inspired by speculative drawings from research participants. In order to give these frequencies
        visual and material representation, I also pulled ideas from network culture, cloud infrastructure, and early electromagnetic sound research.`,
        image2: sigid2,
        info2: ``,
    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="extra-info sm:pr-8">
                <div className="more-info flex flex-col sm:flex-row items-center mt-5">
                        <img className="max-w-sm rounded-3xl px-2" src={sigid3}/>
                </div>
            </div>

        </div>
    )
}

export default Sluice;