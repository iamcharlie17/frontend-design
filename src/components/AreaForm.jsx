import { useState } from "react"
import MobileAreaForm from "./Forms/MobileAreaForm"
import DesktopAreaForm from "./Forms/DesktopAreaForm"


const AreaForm = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

    useState(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    return isMobileView ? <MobileAreaForm/> : <DesktopAreaForm/>
}

export default AreaForm;