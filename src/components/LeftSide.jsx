
import circle_bg from '../assets/images/circle-bg.png';

const LeftSide = ({vector_url}) => {
    return (
        <div className="hidden lg:flex flex-1 bg-white rounded-xl m-8">
            <div
                style={{
                    backgroundImage: `url(${circle_bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%',
                    borderRadius: '0.75rem',
                }}
                className="flex flex-col py-4"
            >
                <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div className="text-5xl text-center font-semibold">
                        <h1 className="text-[#035fc9]">
                            An App <span className="text-[#002d94]">for</span>
                        </h1>
                        <h1 className="text-[#035fc9]">
                            <span className="text-[#002d94]">Reading the</span> Right News
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <img src={vector_url} alt="" className="w-1/4" />
                    </div>
                </div>

                <div className="text-center space-y-2 mb-8">
                    <h1>from</h1>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-[#035fc9] to-[#002d94] bg-clip-text text-transparent">
                        Through
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;