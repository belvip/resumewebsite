import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaPinterest, FaEllipsisV, FaTimes } from "react-icons/fa";
import ImgProfile from "./images/logoJava.png";
import ImgFigurine from "../assets/figurineImage.png"

const Profile = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-80">
                {/* Profile Image */}
                <div className="relative">
                    <img
                        className="w-full h-48 object-cover cursor-pointer"
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
                        Java Developer
                    </h2>
                    <p className="text-lg">Full Stack Web Developer</p>
                </div>

                {/* Card Reveal */}
                {isRevealed && (
                    <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center shadow-lg">
                        <h2 className="text-xl font-semibold ">
                            Follow Me
                        </h2>
                        <button
                            className="absolute top-2 right-2 text-gray-800 hover:text-gray-600"
                            onClick={() => setIsRevealed(false)}
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4 text-gray-800">
                            <FaFacebookF size={24} className="hover:text-blue-500 cursor-pointer" />
                            <FaTwitter size={24} className="hover:text-blue-400 cursor-pointer" />
                            <FaGooglePlusG size={24} className="hover:text-red-500 cursor-pointer" />
                            <FaInstagram size={24} className="hover:text-pink-500 cursor-pointer" />
                            <FaPinterest size={24} className="hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>
                )}
            </div>

            <div>
                <img src={ImgFigurine} alt="Figurine" />
            </div>
        </div>
    );
};

export default Profile;
