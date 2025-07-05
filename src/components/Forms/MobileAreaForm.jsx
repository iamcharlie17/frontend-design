import { useState } from 'react';
import Dropdown from '../Dropdown';
import bd_flag from '../../assets/flags/bd.png';
import usa_flag from '../../assets/flags/usa.png';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { FaChevronLeft, FaSortDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import circle_bg from '../../assets/images/circle-bg.png'

const languages = [
  { id: 1, name: 'English', value: 'english', icon: usa_flag },
  { id: 2, name: 'Bangla', value: 'bangla', icon: bd_flag },
];

const currencies = [
  { id: 1, name: 'USD $', value: 'usd', icon: '' },
  { id: 2, name: 'BDT ৳', value: 'bdt', icon: '' },
];

const countries = [
  { id: 1, name: 'Bangladesh', value: 'bangladesh', icon: bd_flag },
  { id: 2, name: 'England', value: 'england', icon: usa_flag },
  { id: 3, name: 'USA', value: 'usa', icon: usa_flag },
];

const cities = [
  { id: 1, name: 'Dhaka' },
  { id: 2, name: 'Chittagong' },
  { id: 3, name: 'Rajshahi' },
  { id: 4, name: 'Khulna' },
  { id: 5, name: 'Barishal' },
  { id: 6, name: 'Sylhet' },
  { id: 7, name: 'Rangpur' },
  { id: 8, name: 'Mymensingh' },
];

const MobileAreaForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      language: selectedLanguage,
      currency: selectedCurrency,
      country: selectedCountry,
      city: selectedCity
    });
  };

  return (
    <div className="flex-1 min-h-screen flex justify-center items-center bg-cover bg-center" style={{
        backgroundImage: `url(${circle_bg})`
    }}>
      <div className='h-full flex flex-col justify-center w-full px-8 text-[#035fc9]'>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Link to={'/'} className='absolute top-8 left-8'>
            <FaChevronLeft />
          </Link>
          
          <h1 className="text-xl text-center pb-8 font-semibold">Select to continue</h1>
          
          <div className="space-y-4">
            <div className="w-full flex justify-between items-center">
              <label className="block mb-2 w-1/2">Language</label>
              <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                <div className="relative w-1/2">
                  <ListboxButton className="relative flex items-center gap-2 w-full cursor-pointer rounded-md bg-white text-[#00346F] px-2 py-2 text-left shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {selectedLanguage.icon && <img src={selectedLanguage.icon} className="h-6" />}
                    <span>{selectedLanguage.name}</span>
                    <FaSortDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00346F]" />
                  </ListboxButton>
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
                          {item.icon && <img src={item.icon} className="h-6" />}
                          <span>{item.name}</span>
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            {/* Currency Dropdown */}
            <div className="w-full flex justify-between items-center">
              <label className="block mb-2 w-1/2">Currency</label>
              <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
                <div className="relative w-1/2">
                  <ListboxButton className="relative flex items-center gap-2 w-full cursor-pointer rounded-md bg-white text-[#00346F] px-2 py-2 text-left shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span>{selectedCurrency.name}</span>
                    <FaSortDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00346F]" />
                  </ListboxButton>
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
                        <span>{item.name}</span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            <Dropdown isMobile={true} label={"Country"} selected={selectedCountry} setSelected={setSelectedCountry} options={countries} />
            <Dropdown isMobile={true} label={"City"} selected={selectedCity} setSelected={setSelectedCity} options={cities} />
          </div>

          <div className="flex flex-col gap-1">
            <small>
              <p>
                By signing up, I accept the OneSyncID{' '}
                <span className="underline cursor-pointer text-[#D48A35]">Cloud terms of service</span> and acknowledge
                the <span className="underline cursor-pointer text-[#D48A35]">privacy policy</span>
              </p>
            </small>
            <Link to={'/create-account'}>
              <button type='submit' className="w-full bg-[#035fc9] hover:bg-[#035fc9be] text-white py-1 text-sm transition duration-100 rounded-md">
                Continue
              </button>
            </Link>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-500"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-100 text-gray-500 text-lg font-semibold">Or</span>
            </div>
          </div>

          <button type="button" className="w-full border-2 text-[#035fc9] border-[#035fc9be] text-sm py-1 rounded-md transition duration-200 flex items-center justify-center gap-2">
            Allow Location Automatically
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobileAreaForm;