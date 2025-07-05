import { useState } from 'react'
import Dropdown from './Dropdown';

const languages = [
    { id: 1, name: 'English', value: 'english' },
    { id: 2, name: 'Bangla', value: 'bangla' },
]

const currencies = [
    { id: 1, name: 'USD $', value: 'usd' },
    { id: 2, name: 'BDT ৳', value: 'bdt' },
]

const countries = [
    { id: 1, name: 'Bangladesh', value: 'bangladesh' },
    { id: 2, name: 'England', value: 'england' },
    { id: 3, name: 'USA', value: 'usa' },
]

const cities = [
    { id: 1, name: 'Dhaka' },
    { id: 2, name: 'Chittagong' },
    { id: 3, name: 'Rajshahi' },
    { id: 4, name: 'Khulna' },
    { id: 5, name: 'Barishal' },
    { id: 6, name: 'Sylhet' },
    { id: 7, name: 'Rangpur' },
    { id: 8, name: 'Mymensingh' },
]

const AreaForm = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [selectedCity, setSelectedCity] = useState(cities[0])

    return (
        <div className="flex-1 min-h-screen flex justify-center items-center">
            <div className="text-white space-y-8 w-full px-16">
                <div>
                    <h1 className="text-5xl md:text-7xl font-semibold">Select an area</h1>
                    <h1 className="text-[#83addf] mt-4 text-lg">
                        Already have an account?{' '}
                        <span className="underline text-white cursor-pointer hover:text-blue-200">Sign In</span>
                    </h1>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Dropdown label={'Language'} selected={selectedLanguage} setSelected={setSelectedLanguage} options={languages} />
                    <Dropdown label={'Currency'} selected={selectedCurrency} setSelected={setSelectedCurrency} options={currencies} />
                    <div className="col-span-1 md:col-span-2">
                        <Dropdown label={"Country"} selected={selectedCountry} setSelected={setSelectedCountry} options={countries} />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <Dropdown label={"City"} selected={selectedCity} setSelected={setSelectedCity} options={cities} />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex flex-col gap-1">
                        <small>
                            <p>
                                By signing up, I accept the OneSyncID{' '}
                                <span className="underline cursor-pointer text-[#D48A35]">Cloud terms of service</span> and acknowledge
                                the <span className="underline cursor-pointer text-[#D48A35]">privacy policy</span>
                            </p>
                        </small>
                        <button className="w-full bg-[#D48A35] hover:bg-amber-600 transition duration-100 py-4 rounded-md text-xl">
                            Continue
                        </button>
                    </div>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white mx-16"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-[#00346f] text-lg text-gray-300 font-semibold">Or</span>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full border-2 border-[#D48A35] text-xl text-[#D48A35] py-4 px-6 rounded-md transition duration-200 flex items-center justify-center gap-2">
                        Allow Location Automatically
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AreaForm
