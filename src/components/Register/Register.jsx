import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Select from 'react-select';

import './Register.css';


const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'German', label: 'German' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' },
    { value: 'Turkish', label: 'Turkish' },
    { value: 'Japanese', label: 'Japanese' }
];

const levelOptions = [
     { value: 'A1', label: 'A1' },
    { value: 'A2', label: 'A2' },
    { value: 'B1', label: 'B1' },
    { value: 'B2', label: 'B2' },
    { value: 'C1', label: 'C1' },
    { value: 'C2', label: 'C2' }
];

function Register() {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [languageLevels, setLanguageLevels] = useState({});

    const handleSelectChange = (selectedLanguages) => {
        setSelectedLanguages(selectedLanguages);
        // Reset language levels when languages change
        setLanguageLevels({});
    };

    const handleLevelChange = (language, level) => {
        setLanguageLevels(prevLevels => ({
            ...prevLevels,
            [language]: level
        }));
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '100%',
            height: '100%',
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, .2)',
            outline: 'none',
            borderRadius: '40px',
            boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#333',
            fontWeight: '700',
            padding: '10px 20px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#fff',
            fontFamily: 'Sans-serif',
            fontSize: '16px',
        }),
        multiValue: (provided) => ({
            ...provided,
            borderRadius: '40px',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            fontSize: '16px',
            color: '#333',
            fontWeight: '700',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            cursor: 'pointer',
            ':hover': {
                background: '#eee',
            },
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '16px', // Adjust font size for options
            color: '#333', // Adjust text color for options
            padding: '10px 20px', // Adjust padding for options
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '16px', // Adjust font size for single value
            color: '#333', // Adjust text color for single value
        }),
       
    };

    return (
        <div className='login-body'>
            <div className='wrapper' role='form' aria-labelledby="formTitle">
                <form action="">
                    <h1 id="formTitle">Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Full Name' aria-label='Full Name' required />
                        <FaUserEdit className='icon' aria-hidden='true' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Write A Valid Email' aria-label='Email' required />
                        <MdOutlineMail className='icon' aria-hidden='true' />
                    </div>
                    <div className="input-box">
                        <label htmlFor="Birth"></label>
                        <input id='Birth' type="date" aria-label='Date of Birth' required />
                    </div>
                    <div className="input-box">
                        <Select
                            defaultValue={selectedLanguages}
                            isMulti
                            id="languages"
                            name="languages"
                            options={languageOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleSelectChange}
                            placeholder="Select language..."
                            aria-label='Select language(s)'
                            styles={customStyles}
                        />
                    </div>
                    {selectedLanguages.map(language => (
                        <div key={language.value} className="input-box">
                            <label>{language.label} Level:</label>
                            <select
                                value={languageLevels[language.value] || ''}
                                onChange={e => handleLevelChange(language.value, e.target.value)}
                                aria-label={language.label + ' Level'}
                            >
                                <option value="">Select Level</option>
                                {levelOptions.map(level => (
                                    <option key={level.value} value={level.value}>{level.label}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <button type="submit" className='register-button'>Register</button>
                    <button type="reset" className='register-button'>Clear</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
