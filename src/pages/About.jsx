import React from "react";

const About = () => {
    return (
        <div className="flex justify-center items-center">
            <div className=" shadow-lg rounded-lg p-6 w-full max-w-3xl">
                {/* About Section */}
                <div className="mb-6">
                    <h6 className="text-lg font-bold mb-2">ABOUT ME</h6>
                    <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enimminima quod molestias numquam, cumque eveniet delectus dolore
                        minima quod molestias numquam, cumque eveniet delectus dolore
                        laborum molestiae quis possimus eos dignissimos cupiditate ipsam
                        sunt doloremque commodi adipisci quasi?
                    </p>
                </div>

                {/* Personal Info Section */}
                <div className="border-t pt-4">
                    <h6 className="text-lg font-bold mb-2">PERSONAL INFO</h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Left Column */}
                        <div>
                            <p><strong>Address:</strong> 123 Lorem</p>
                            <p><strong>Email:</strong> test@yahoo.com</p>
                            <p><strong>Phone:</strong> 123 456 7898</p>
                        </div>
                        {/* Right Column */}
                        <div>
                            <p><strong>Main Language:</strong> English</p>
                            <p><strong>Second Language:</strong> Spanish</p>
                            <p><strong>Third Language:</strong> Chinese</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
