import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import InputField from '../InputField';
import circle_bg from '../../assets/images/circle-bg.png'

const genders = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Other' }
];

const verificationMethods = [
    { id: 1, name: 'Phone number' },
    { id: 2, name: 'Email' }
];

const accountTypes = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Organization" }
];

const days = Array.from({ length: 31 }, (_, i) => ({ id: i + 1, name: (i + 1).toString() }));
const months = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' }
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => ({ id: currentYear - i, name: (currentYear - i).toString() }));

const MobileCreateAccountForm = () => {
    const [accountType, setAccountType] = useState(accountTypes[0]);
    const [name, setName] = useState('');
    const [selectedGender, setSelectedGender] = useState(genders[0]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedVerification, setSelectedVerification] = useState(verificationMethods[0]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    useEffect(() => {
        if (password && !passwordRegex.test(password)) {
            setErrors(prev => ({
                ...prev,
                password: 'Password must be minimum 8 characters and include at least one uppercase, lowercase, number, and symbol'
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                password: ''
            }));
        }

        if (confirmPassword && password !== confirmPassword) {
            setErrors(prev => ({
                ...prev,
                confirmPassword: 'Passwords do not match'
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                confirmPassword: ''
            }));
        }

        const isValid = (
            accountType &&
            name &&
            selectedGender &&
            email &&
            phone &&
            selectedDay &&
            selectedMonth &&
            selectedYear &&
            passwordRegex.test(password) &&
            password === confirmPassword
        );
        setIsFormValid(isValid);
    }, [password, confirmPassword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        console.log({
            accountType,
            name,
            gender: selectedGender,
            email,
            phone,
            dob: `${selectedDay.name}/${selectedMonth.name}/${selectedYear.name}`,
            password,
            verificationMethod: selectedVerification
        });
    };

    return (
        <div className="flex-1 min-h-screen flex justify-center items-center bg-cover bg-center" style={{
            backgroundImage: `url(${circle_bg})`
        }}>
            <form onSubmit={handleSubmit} className="space-y-2 w-full px-8 text-[#035fc9]">
                <Link to={'/'} className='top-8 absolute'><FaChevronLeft /></Link>

                <div className=' my-8'>
                    <h1 className='text-xl text-center'>Create an account</h1>
                </div>

                <div className="space-y-2">
                    <Dropdown
                        isMobile={true}
                        label={'Account Type*'}
                        selected={accountType}
                        setSelected={setAccountType}
                        options={accountTypes}
                    />

                    <InputField
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name*"
                        required
                    />

                    <Dropdown
                        isMobile={true}
                        label={""}
                        selected={selectedGender}
                        setSelected={setSelectedGender}
                        options={genders}
                    />

                    <InputField
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email*"
                        required
                    />

                    <InputField
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number*"
                        required
                    />

                    <div>
                        <label className="block mb-2">Date of birth</label>
                        <div className="grid grid-cols-4 gap-4 w-full">
                            <div>
                                <Dropdown
                                    isMobile={true}
                                    label={""}
                                    selected={selectedDay}
                                    setSelected={setSelectedDay}
                                    options={days}
                                />
                            </div>
                            <div className='col-span-2'>
                                <Dropdown
                                    isMobile={true}
                                    label={""}
                                    selected={selectedMonth}
                                    setSelected={setSelectedMonth}
                                    options={months}
                                />
                            </div>
                            <div>
                                <Dropdown
                                    isMobile={true}
                                    label={""}
                                    selected={selectedYear}
                                    setSelected={setSelectedYear}
                                    options={years}
                                />
                            </div>
                        </div>
                    </div>

                    <InputField
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password*"
                        required
                    />
                    <label className="flex items-center gap-2 text-gray-400">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="h-4 w-4"
                        />
                        Show Password
                    </label>



                    <InputField
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password*"
                        required
                    />
                    <label className="flex items-center gap-2 text-gray-400">
                        <input
                            type="checkbox"
                            checked={showConfirmPassword}
                            onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="h-4 w-4"
                        />
                        Show Password
                    </label>


                    <Dropdown
                        isMobile={true}
                        label={'Verify With*'}
                        selected={selectedVerification}
                        setSelected={setSelectedVerification}
                        options={verificationMethods}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <small>
                        <p>
                            By signing up, I accept the OneSyncID{' '}
                            <span className="underline cursor-pointer text-[#D48A35]">Cloud terms of service</span> and acknowledge
                            the <span className="underline cursor-pointer text-[#D48A35]">privacy policy</span>
                        </p>
                    </small>
                    <button
                        type="submit"
                        className="w-full bg-[#035fc9] hover:bg-[#035fc9be] text-white py-1 text-sm transition duration-100 rounded-md"
                    >
                        Create
                    </button>
                </div>
            </form>


            {errors.password && (
                <p className="text-red-300 italic fixed top-3 right-3 w-72 bg-white p-4 rounded-md">{errors.password}</p>
            )}
            {errors.confirmPassword && (
                <p className="text-red-300 italic fixed top-3 right-3 w-72 bg-white p-4 rounded-md">{errors.confirmPassword}</p>
            )}

        </div>
    );
};

export default MobileCreateAccountForm;