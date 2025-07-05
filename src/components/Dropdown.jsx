import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import clsx from "clsx";
import { FaSortDown } from "react-icons/fa";

const Dropdown = ({label, selected, setSelected, options}) => {
    return (
        <div className="w-full">
            <label className="block text-xl mb-2">{label}</label>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                    <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white text-gray-500 px-6 py-4 text-left text-lg shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {selected.name}
                        <FaSortDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    </ListboxButton>
                    <ListboxOptions className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm">
                        {options.map((item) => (
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
                                <div className="flex items-center justify-between">
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