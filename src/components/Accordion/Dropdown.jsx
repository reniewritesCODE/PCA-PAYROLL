// src/Dropdown.js
import React, { useState, useRef } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Close dropdown on outside click
    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Dropdown
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 3</a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
