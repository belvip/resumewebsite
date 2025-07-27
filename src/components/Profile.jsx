import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram,FaEllipsisV, FaTimes, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import ImgProfile from "./images/logoJava.png";
import ImgFigurine from "../assets/figurineImage.png";
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-80">
                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            className="w-full h-48 object-cover cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            src={ImgProfile}
                            alt="Belvinard"
                            onClick={() => setIsRevealed(true)}
                        />
                        {/* Floating Button */}
                        <Link
                            className="absolute bottom-4 right-4 bg-yellow-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                            onClick={() => setIsRevealed(true)}
                        >
                            <FaEllipsisV size={20} />
                        </Link>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 text-center">
                        <h2 className="text-xl font-semibold tracking-tight leading-8">
                            {t('jobTitle')}
                        </h2>
                        <p className="text-lg">{t('jobSubtitle')}</p>
                    </div>

                    {/* Card Reveal */}
                    {isRevealed && (
                        <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-xl font-semibold ">
                                {t('followMe')}
                            </h2>
                            <button
                                className="absolute top-2 right-2 text-gray-800 hover:text-gray-600"
                                onClick={() => setIsRevealed(false)}
                            >
                                <FaTimes size={20} />
                            </button>

                            {/* Social Icons */}
                            <div className="flex justify-center md:justify-start space-x-3">
                                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="text-base-content/60 hover:text-blue-500 cursor-pointer transition-colors" size={18} />
                                </a>
                                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-base-content/60 hover:text-blue-400 cursor-pointer transition-colors" size={18} />
                                </a>
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-base-content/60 hover:text-pink-500 cursor-pointer transition-colors" size={18} />
                                </a>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className="text-base-content/60 hover:text-blue-700 cursor-pointer transition-colors" size={18} />
                                                        </a>
                                <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className="text-base-content/60 hover:text-black cursor-pointer transition-colors" size={18} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <img src={ImgFigurine} alt="Figurine" className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto border-2 border-gray-300 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" />
                </div>
            </div>

            <div className="max-w-6xl">
                <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                    <div className="p-8">
                        <p className="text-lg text-base-content/90 leading-relaxed mb-4 text-justify">{t('profileDescription')}</p>
                        <div className="">
                            <Link to="/about" className="text-base-content underline hover:text-base-content/80 cursor-pointer transition-colors">
                                {t('learnMore')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Profile;
