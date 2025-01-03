import {useState, createRef, useRef } from 'react'
import './root.css';
// import {Outlet } from 'react-router-dom'
import { Link, useNavigate, useLocation, useOutlet} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import About from '../components/About'
import {routes} from '../main'

const Root = () => {
  
  const locationLink = useLocation();
  const currentOutlet = useOutlet();

  const nodeRefs = useRef(
    Object.fromEntries(
      routes.map((route) => [route.path, createRef()])
    )
  );

  const [isMenuVisible, setMenuVisible] = useState(true);
  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768; 

  const handleAboutInfo = () => {
    navigate('/');
  }

  const onEnter = () => {
    gsap.from(
      ".project",
      { 
        y: 5,
        ease: "sine.InOut",
        duration: 1,
        opacity: 0,
        stagger: {
          amount: 0.5
        }
      }
    );
  };

  const onExit = () => {
    gsap.to(
      ".navLink",
      {
        duration: 0.5,
        y: -10,
        ease: "sine.out",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="full-app flex flex-col items-stretch sm:flex-row sm:justify-start sm:items-start text-neutral-300">
          <div className="header">
            <Link to={`/`}></Link>
          <div className="menu flex flex-col">
              <div onClick={() => setMenuVisible(true)} 
                  className={`${isMenuVisible ? 'h-1' : 'h3'} toolbar flex px-2`}>
                  <Toolbar >
                  <div className={`${isMobile ? (isMenuVisible ? 'invisible fixed' : 'visible relative') : 'invisible'}`}>
                    <MenuIcon />
                    </div>
                </Toolbar>
            </div>
            <nav className={`${isMenuVisible ? 'visible relative' : 'invisible fixed'} flex flex-col max-w-md sm:w-96 lg:w-screen items-stretch px-4 sm:px-8 mx-2 sm:my-10`}>
                <ul className="ml-0 px-0 text-2xl sm:text-xl list-none" onClick={() => isMobile ? setMenuVisible(false) : setMenuVisible(true)}>
                    <Link className="navLink" to={`/`} onClick={handleAboutInfo}><li>About</li></Link>
                    <Link className="navLink" to={`daze`}><li>Daze</li></Link>
                    <Link className="navLink" to={`bask`}><li>Bask Health</li></Link>
                    <Link className="navLink" to={`endonesia`}><li>Endonesia</li></Link>
                    <Link className="navLink" to={`birbs`}><li>Birbs</li></Link>
                    <Link className="navLink" to={`maplibs`}><li>Maplibs</li></Link>
                    <Link className="navLink" to={`nonclub`}><li>nonclub</li></Link>
                    <Link className="navLink" to={`worldupstream`}><li>World Upstream</li></Link>
                    <Link className="navLink" to={`sigid`}><li>Sigid Play</li></Link>
                    <Link className="navLink" to={`upperwells`}><li>Upper Wells</li></Link>
                    <Link className="navLink" to={`sluice`}><li>Sluice</li></Link>
                    <Link className="navLink" to={`chatnimal`}><li>Chatnimal</li></Link>
                    <Link className="navLink" to={`freesound`}><li>Freesound Landscapes</li></Link>
                </ul>
              </nav>
          </div>
          </div>

            <div className="project-content py-3 px-5 mt-5 sm:mt-8">
            <div className="link-content">
                
              <SwitchTransition>
                <CSSTransition
                    key={locationLink.pathname}
                    //@ts-expect-error nodeRefs is valid 
                    nodeRef={nodeRefs.current[locationLink.pathname]}
                    timeout={300}
                    classNames="fade"
                    onExit={onExit}
                    onEntering={onEnter}
                    unmountOnExit
                    >
                      <div>{currentOutlet}
                      {window.location.pathname === '/' && (<About />)}
                      </div>
                  {/* <Outlet /> */}
                </CSSTransition>
              </SwitchTransition>
              </div>
            </div>
          </div>
      </Box>
      );
}

export default Root;