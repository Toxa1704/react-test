'use client';

import React, { FC, useState, useEffect } from "react";
import dataCountries from "@/component/_dataCountries"
import styles from "@/css/addUserCountry.module.css";



const MenuDropdownCountry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCoutry, setSelectedCountry] = useState("Select country");

    const countries = Array.from(new Set(dataCountries.map(user => user.name)));
    const handleCountryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCountry(event.target.value);
        setIsOpen(false);
    };

    return (
        <div>
            <div
                className={styles.dropDownCountry}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className={`${styles.dropDownCountryTitle} ${selectedCoutry !=="Select country" ? styles.activeCountry : ""}`}>{selectedCoutry}</div>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.2649 14.265L16.2649 19.265C16.1946 19.3352 16.0993 19.3747 15.9999 19.3747C15.9005 19.3747 15.8052 19.3352 15.7349 19.265L10.7349 14.265C10.6687 14.1939 10.6326 14.0999 10.6343 14.0027C10.636 13.9056 10.6754 13.8129 10.7441 13.7442C10.8128 13.6755 10.9055 13.6361 11.0027 13.6344C11.0998 13.6327 11.1938 13.6688 11.2649 13.735L15.9999 18.4694L20.7349 13.735C20.806 13.6688 20.9 13.6327 20.9972 13.6344C21.0943 13.6361 21.187 13.6755 21.2557 13.7442C21.3244 13.8129 21.3638 13.9056 21.3655 14.0027C21.3672 14.0999 21.3312 14.1939 21.2649 14.265Z"
                        fill="#1B2438"
                    />
                </svg>
            </div>
            <div className={`${styles.listMenu} ${isOpen ? styles.active : ''}`}>
                <form className={styles.listMenuForm}>
                    {countries.map((country, index) => (
                        <div key={index}>
                            <input
                                className={styles.formInput}
                                type="radio"
                                id={country}
                                name="country"
                                value={country}
                                onChange={handleCountryChange}
                            />
                            <label htmlFor={country}>{country}</label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default MenuDropdownCountry;
