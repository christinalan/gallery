import './style.css';
import BaseProject from './Project'
import nonclub_logo from '../assets/nonclub_logo.png'
import nonclub from '../assets/nonclub.gif'
import nonclub1 from '../assets/nonclub1.png'
import nonclub2 from '../assets/nonclub2.png'
import nonclub3 from '../assets/nonclub3.png'
import nonclub4 from '../assets/nonclub4.png'
import nonclub5 from '../assets/nonclub5.png'

const NonClub = () => {
    const projectData = {
        stack: 'P5, Three.JS, sockets, web audio, user mapping, user research, prototyping',
        link: "https://non-club.herokuapp.com/",
        description: `nonclub was created as a response to the shifting environment around club spaces throughout and after covid.
        After researching club theory in relation to collective memory, hyperreality, and types of re-enactment, I settled on creating a digital respite.
        The end result was less aimed at recreating memories, but to suggest alternative ways of discovery and connecting that still pulled from the same emotive
        appeal of certain club experiences. The process involved readings on embodiment and interface hacking, interviews with similar artists, system mapping,
        prototyping, multiple audio experiments, and extensive user testing.
        `,
        logo: nonclub_logo,
        image1: nonclub1,
        info1: `The starting page of the nonclub journey: after user feedback, I created a page with more explicit instructions and a note about the project's intent.`,
        image2: nonclub,
        info2: ` As a nod to further
        development, the setting of the user id (frequency) was to invoke the feeling of going through the experience together.`,
    }

    return (
        <div className="project">
            <BaseProject projectData={projectData} />
            <div className="extra-info sm:pr-8">
                <div className="more-info flex flex-col sm:flex-row items-center gap-2 mt-10">
                <p className="more-info-description text-lg sm:text-sm px-6">
                    These are snapshots of different parts of the journey. User testing and feedback fine-tuned the clarity and frequency of instructions. There's a clear
                    arc to the experience, one of unfamiliarity to familiarity, one of disembodiment to embodied connection. Ultimately, it hopes to give the user a renewed
                    and 'non-digital' digital interaction.
                </p>
                    <div className="flex flex-col gap-3">
                        <img className="project-image-small rounded-lg" src={nonclub2}/>
                        <img className="project-image-small rounded-lg" src={nonclub3}/>
                        <img className="project-image-small rounded-lg" src={nonclub4}/>
                        <img className="project-image-small rounded-lg" src={nonclub5}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NonClub;