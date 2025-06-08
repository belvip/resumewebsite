import React from "react";

const Experiences = () => {
    return (
        <div className="align-element flex justify-center items-center">
            <div className="shadow-lg rounded-lg p-6 w-full max-w-6xl">
                <div className="mb-6">
                    <h6 className="text-xl font-bold mb-4">EXPERIENCE</h6>

                    {/* First Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start mb-6">
                        <div className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-md text-center">
                            Jan <strong>2020</strong> - Mar <strong>2021</strong>
                        </div>
                        <div className="sm:col-span-2">
                            <h6 className="text-lg font-bold mb-2">WEB DEVELOPER</h6>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                                earum doloribus dicta quod architecto, praesentium totam
                                molestiae similique culpa repellat blanditiis nam facilis eius
                                quaerat distinctio vitae, tenetur beatae repellendus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                                earum doloribus dicta quod architecto, praesentium totam
                                molestiae similique culpa repellat blanditiis nam facilis eius
                                quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </div>
                    </div>

                    {/* Second Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                        <div className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-md text-center">
                            Jan <strong>2020</strong> - Mar <strong>2021</strong>
                        </div>
                        <div className="sm:col-span-2">
                            <h6 className="text-lg font-bold mb-2">WEB DEVELOPER</h6>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                                earum doloribus dicta quod architecto, praesentium totam
                                molestiae similique culpa repellat blanditiis nam facilis eius
                                quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experiences;
