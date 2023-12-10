import ReactDOM from 'react-dom/client'
import Root from './routes/root.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom"
import ErrorPage from './error-page.tsx'
import MapLibs from './components/Maplibs.tsx'
import Birbs from './components/Birbs.tsx'
import Endonesia from './components/Endonesia.tsx'
import NonClub from './components/NonClub.tsx'
import Chatnimal from './components/Chatnimal.tsx'
import WorldUpstream from './components/WorldUpstream.tsx'
import Freesound from './components/Freesound.tsx'


export const routes = [
  {path: "/", element: <Root />},
  
    {
      path: "Maplibs",
      element: <MapLibs />,
    },
    {
      path: "birbs",
      element: <Birbs />,
    }

]

const router = createBrowserRouter([
  {
    path: "/gallery/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/gallery/Maplibs",
        element: <MapLibs />,
      },
      {
        path: "/gallery/birbs",
        element: <Birbs />,
      },
      {
        path: "/gallery/endonesia",
        element: <Endonesia />
      },
      {
        path: "/gallery/nonclub",
        element: <NonClub />
      },
      {
        path: "/gallery/worldupstream",
        element: <WorldUpstream />
      },
      {
        path: "/gallery/chatnimal",
        element: <Chatnimal />
      },
      {
        path: "/gallery/freesound",
        element: <Freesound />
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} future={{v7_startTransition: true}}/>
  // <React.StrictMode>
  // </React.StrictMode>,
)
