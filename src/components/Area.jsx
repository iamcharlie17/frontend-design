import AreaForm from "./AreaForm";
import LeftSide from "./LeftSide";

const Area = () => {
    return (
        <div className="min-h-screen bg-[#00346f] flex">
            <LeftSide/>
            <AreaForm />
        </div>
    );
};

export default Area;
