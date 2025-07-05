import AreaForm from "./AreaForm";
import LeftSide from "./LeftSide";
import home_vector from '../assets/images/home-vector.png'

const Area = () => {
    
    return (
        <div className="min-h-screen bg-[#00346f] flex">
            <LeftSide vector_url={home_vector}/>
            <AreaForm />
        </div>
    );
};

export default Area;