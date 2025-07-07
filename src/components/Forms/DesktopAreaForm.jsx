import { useState } from 'react';
import Dropdown from '../Dropdown';
import bd_flag from '../../assets/flags/bd.png';
import usa_flag from '../../assets/flags/usa.png';
import england_flag from '../../assets/flags/england.png';
import { Link } from 'react-router-dom';

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
  { id: 2, name: 'England', value: 'england', icon: england_flag },
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

const DesktopAreaForm = () => {
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
    <div className="flex-1 min-h-screen flex justify-center items-center bg-[#00346f]">
      <div className='h-full flex flex-col justify-center w-full px-16 text-white'>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h1 className="text-xl md:text-5xl font-semibold">Select an area</h1>
            <h1 className="text-[#83addf] mt-4 text-lg">
              Already have an account?{' '}
              <span className="underline text-white cursor-pointer hover:text-blue-200">Sign In</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dropdown isMobile={false} label={'Language'} selected={selectedLanguage} setSelected={setSelectedLanguage} options={languages} />
            <Dropdown isMobile={false} label={'Currency'} selected={selectedCurrency} setSelected={setSelectedCurrency} options={currencies} />
            <div className="col-span-1 md:col-span-2">
              <Dropdown isMobile={false} label={"Country"} selected={selectedCountry} setSelected={setSelectedCountry} options={countries} />
            </div>
            <div className="col-span-1 md:col-span-2">
              <Dropdown isMobile={false} label={"City"} selected={selectedCity} setSelected={setSelectedCity} options={cities} />
            </div>
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
              <button type='submit' className="w-full bg-[#D48A35] hover:bg-amber-600 py-2 text-xl transition duration-100 rounded-md">
                Continue
              </button>
            </Link>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#00346f] text-gray-300 text-lg font-semibold">Or</span>
            </div>
          </div>

          <button type="button" className="w-full border-2 border-[#D48A35] text-xl text-[#D48A35] py-2 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2">
            Allow Location Automatically
          </button>

          <div className='text-center mt-16'>
            <button type="button" className='underline text-white text-xl cursor-pointer'>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default DesktopAreaForm;