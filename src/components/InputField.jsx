const InputField = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full mt-1 rounded-md bg-white text-[#00346F] px-4 py-1 md:py-2 text-lg shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 ${className}`}
      {...props}
    />
  );
};


export default InputField;