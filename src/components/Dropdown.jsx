import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { FaSortDown } from "react-icons/fa";
import clsx from 'clsx';

const Dropdown = ({ isMobile, label, selected, setSelected, options }) => {
    return (
        <div className={`w-full`}>
            <label className={`block md:text-xl `}>{label}</label>
            <Listbox value={selected} onChange={setSelected}>
                <div className={`relative`}>
                    <ListboxButton className={`relative flex items-center gap-2 w-full cursor-pointer rounded-md bg-white text-[#00346F] ${isMobile ? "px-1 py-1 border border-gray-100": "px-4 py-2 text-lg"} text-left  shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                        {selected.icon ? <img src={selected.icon} className={`h-6`} /> : ``}
                        <span>{selected.name}</span>
                        <FaSortDown className={`absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00346F]`} />
                    </ListboxButton>
                    <ListboxOptions className={`absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm`}>
                        {options.map((item) => (
                            <ListboxOption
                                key={item.id}
                                value={item}
                                className={({ active, selected }) =>
                                    clsx(
                                        `cursor-pointer select-none py-2 px-6 text-xl`,
                                        active ? `bg-gray-100 text-blue-900` : `text-gray-900`,
                                        selected ? `font-semibold` : ``
                                    )
                                }
                            >
                                <div className={`flex items-center gap-2`}>
                                    {item.icon ? <img src={item.icon} className={`h-6`} /> : ``}
                                    <span>{item.name}</span>
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};

export default Dropdown;