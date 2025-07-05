import { useState } from 'react'
import Dropdown from './Dropdown';
import bd_flag from '../assets/flags/bd.png'
import usa_flag from '../assets/flags/usa.png'
import england_flag from '../assets/flags/england.png'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { FaSortDown } from 'react-icons/fa';

const languages = [
    { id: 1, name: 'English', value: 'english', icon: usa_flag },
    { id: 2, name: 'Bangla', value: 'bangla', icon: bd_flag },
]

const currencies = [
    { id: 1, name: 'USD $', value: 'usd', icon: '' },
    { id: 2, name: 'BDT ৳', value: 'bdt', icon: '' },
]

const countries = [
    { id: 1, name: 'Bangladesh', value: 'bangladesh', icon: bd_flag },
    { id: 2, name: 'England', value: 'england', icon: england_flag },
    { id: 3, name: 'USA', value: 'usa', icon: usa_flag },
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
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

    // Handle window resize
    useState(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            language: selectedLanguage,
            currency: selectedCurrency,
            country: selectedCountry,
            city: selectedCity
        })
    }

    return (
        <div className="flex-1 min-h-screen flex justify-center items-center">
            <div className={` space-y-8 w-full ${isMobileView ? 'px-8 text-[#035fc9] bg-white' : 'px-16 text-white'}`}>
                <div>
                    <h1 className={`${isMobileView ? 'text-3xl text-center my-8' : 'text-5xl md:text-7xl'} font-semibold`}>
                        {isMobileView ? 'Select to continue' : 'Select an area'}
                    </h1>
                    {!isMobileView && (
                        <h1 className="text-[#83addf] mt-4 text-lg">
                            Already have an account?{' '}
                            <span className="underline text-white cursor-pointer hover:text-blue-200">Sign In</span>
                        </h1>
                    )}
                </div>

                {isMobileView ? (
                    <div className="space-y-4">
                        <div className="w-full flex justify-between items-center">
                            <label className="block md:text-xl mb-2 w-1/2">Language</label>
                            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                                <div className="relative w-1/2">
                                    <ListboxButton className={`relative flex items-center gap-2 w-full cursor-pointer rounded-md bg-white text-[#00346F] ${isMobileView ? "px-2 py-2" : "px-6 py-4 text-lg"} text-left  shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                                        {selectedLanguage.icon ? <img src={selectedLanguage.icon} className="h-6" /> : ''}
                                        <span>{selectedLanguage.name}</span>
                                        <FaSortDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00346F]" />
                                    </ListboxButton >
                                    <ListboxOptions className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm">
                                        {languages.map((item) => (
                                            <ListboxOption
                                                key={item.id}
                                                value={item}
                                                className={({ active, selected }) =>
                                                    clsx(
                                                        'cursor-pointer select-none py-2 px-6 text-xl',
                                                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-900',
                                                        selected ? 'font-semibold' : ''
                                                    )
                                                }
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon ? <img src={item.icon} className="h-6" /> : ''}
                                                    <span>{item.name}</span>
                                                </div>
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <label className="block md:text-xl mb-2 w-1/2">Currency</label>
                            <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
                                <div className="relative w-1/2">
                                    <ListboxButton className={`relative flex items-center gap-2 w-full cursor-pointer rounded-md bg-white text-[#00346F] ${isMobileView ? "px-2 py-2" : "px-6 py-4 text-lg"} text-left shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                                        {selectedCurrency.icon ? <img src={selectedCurrency.icon} className="h-6" /> : ''}
                                        <span>{selectedCurrency.name}</span>
                                        <FaSortDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00346F]" />
                                    </ListboxButton >
                                    <ListboxOptions className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm">
                                        {currencies.map((item) => (
                                            <ListboxOption
                                                key={item.id}
                                                value={item}
                                                className={({ active, selected }) =>
                                                    clsx(
                                                        'cursor-pointer select-none py-2 px-6 text-xl',
                                                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-900',
                                                        selected ? 'font-semibold' : ''
                                                    )
                                                }
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon ? <img src={item.icon} className="h-6" /> : ''}
                                                    <span>{item.name}</span>
                                                </div>
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <Dropdown isMobile={isMobileView} label={"Country"} selected={selectedCountry} setSelected={setSelectedCountry} options={countries} />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <Dropdown isMobile={isMobileView} label={"City"} selected={selectedCity} setSelected={setSelectedCity} options={cities} />
                        </div>
                    </div>
                ) : (
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <Dropdown isMobile={isMobileView} label={'Language'} selected={selectedLanguage} setSelected={setSelectedLanguage} options={languages} />
                        <Dropdown isMobile={isMobileView} label={'Currency'} selected={selectedCurrency} setSelected={setSelectedCurrency} options={currencies} />
                        <div className="col-span-1 md:col-span-2">
                            <Dropdown isMobile={isMobileView} label={"Country"} selected={selectedCountry} setSelected={setSelectedCountry} options={countries} />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <Dropdown isMobile={isMobileView} label={"City"} selected={selectedCity} setSelected={setSelectedCity} options={cities} />
                        </div>
                    </form>
                )}


                <div className="col-span-1 md:col-span-2 flex flex-col gap-1">
                    <small>
                        <p>
                            By signing up, I accept the OneSyncID{' '}
                            <span className="underline cursor-pointer text-[#D48A35]">Cloud terms of service</span> and acknowledge
                            the <span className="underline cursor-pointer text-[#D48A35]">privacy policy</span>
                        </p>
                    </small>
                    <button type='submit' className={`w-full ${isMobileView ? "bg-[#035fc9] hover:bg-[#035fc9be] text-white py-2 text-sm" : "bg-[#D48A35] hover:bg-amber-600 py-4 text-xl"} transition duration-100  rounded-md `}>
                        Continue
                    </button>
                </div>
                <div className="relative md:my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className={`w-full border-t ${isMobileView ? "border-gray-500" : "border-white"} mx-16`}></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className={`px-4 ${isMobileView ? "bg-white text-gray-500" : "bg-[#00346f] text-gray-300"} text-lg  font-semibold`}>Or</span>
                    </div>
                </div>

                <div className="mt-6">
                    <button className={`w-full border-2 ${isMobileView ? "text-[#035fc9] border-[#035fc9be] text-sm py-2" : "border-[#D48A35] text-xl text-[#D48A35] py-4 px-6"}  rounded-md transition duration-200 flex items-center justify-center gap-2`}>
                        Allow Location Automatically
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AreaForm