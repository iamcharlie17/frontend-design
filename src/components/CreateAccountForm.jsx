import { useState, useEffect } from 'react';
import MobileCreateAccountForm from './Forms/MobileCreateAccountForm';
import DesktopCreateAccountForm from './Forms/DesktopCreateAccountForm';

const CreateAccountForm = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobileView ? <MobileCreateAccountForm /> : <DesktopCreateAccountForm />;
};

export default CreateAccountForm;