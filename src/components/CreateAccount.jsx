import info_vector from '../assets/images/info-vector.png'
import CreateAccountForm from './CreateAccountForm';
import LeftSide from './LeftSide';
const CreateAccount = () => {
    return (
        <div className="min-h-screen bg-white md:bg-[#00346f] flex">
            <LeftSide vector_url={info_vector}/>
            <CreateAccountForm/>
        </div>
    );
};


export default CreateAccount;