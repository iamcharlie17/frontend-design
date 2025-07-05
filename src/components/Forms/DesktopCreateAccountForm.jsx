import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import InputField from '../InputField';

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

const DesktopCreateAccountForm = () => {
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
        <div className="flex-1 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="space-y-4 w-full px-8 text-white">
                <div>
                    <h1 className="text-xl md:text-4xl font-semibold">Create an account</h1>
                    <h1 className="text-[#83addf] mt-4 ">
                        Already have an account?{' '}
                        <span className="underline text-white cursor-pointer hover:text-blue-200">Sign In</span>
                    </h1>
                </div>
                <div className="space-y-4">
                    <div className='flex gap-4 items-center'>
                        <label className="block md:text-xl bg-white text-[#035fc9] px-4 rounded-md">Select Account Type*</label>
                        <div className="flex gap-4">
                            {accountTypes.map(type => (
                                <label
                                    key={type.id}
                                    className={`flex justify-center items-center px-4 rounded-sm text-white ${accountType.id === type.id ? "bg-[#603504] border-2" : "bg-[#D38A34]"}`}
                                >
                                    <input
                                        type="radio"
                                        name="accountType"
                                        checked={accountType.id === type.id}
                                        onChange={() => setAccountType(type)}
                                        className="hidden"
                                    />
                                    <span>{type.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <InputField
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name*"
                        required
                    />

                    <Dropdown
                        isMobile={false}
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
                        <label className="block md:text-xl mb-2">Date of birth</label>
                        <div className="grid grid-cols-4 gap-4 w-full">
                            <div>
                                <Dropdown
                                    isMobile={false}
                                    label={""}
                                    selected={selectedDay}
                                    setSelected={setSelectedDay}
                                    options={days}
                                />
                            </div>
                            <div className='col-span-2'>
                                <Dropdown
                                    isMobile={false}
                                    label={""}
                                    selected={selectedMonth}
                                    setSelected={setSelectedMonth}
                                    options={months}
                                />
                            </div>
                            <div>
                                <Dropdown
                                    isMobile={false}
                                    label={""}
                                    selected={selectedYear}
                                    setSelected={setSelectedYear}
                                    options={years}
                                />
                            </div>
                        </div>
                    </div>

                    <InputField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password*"
                        required
                    />
                    <InputField
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password*"
                        required
                    />

                    <div className='flex gap-4 items-center'>
                        <label className="block md:text-xl bg-white text-[#035fc9] px-4 rounded-md">Verify with*</label>
                        <div className="flex gap-4">
                            {verificationMethods.map(method => (
                                <label
                                    key={method.id}
                                    className={`flex justify-center items-center px-4 rounded-sm text-white ${selectedVerification.id === method.id ? "bg-[#603504] border-2" : "bg-[#D38A34]"}`}
                                >
                                    <input
                                        type="radio"
                                        name="verification"
                                        checked={selectedVerification.id === method.id}
                                        onChange={() => setSelectedVerification(method)}
                                        className="hidden"
                                    />
                                    <span>{method.name}</span>
                                </label>
                            ))}
                        </div>
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
                    <button
                        type="submit"
                        className="w-full bg-[#D48A35] hover:bg-amber-600 py-2 text-xl transition duration-100 rounded-md"
                    >
                        Create
                    </button>
                </div>

                <div className='text-center mt-8'>
                    <button
                        type="button"
                        className='underline md:text-xl cursor-pointer'
                        onClick={() => window.history.back()}
                    >
                        Back
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

export default DesktopCreateAccountForm;