import React from "react";

const Skills = () => {
    return (
        <div className="flex justify-center">
            <div className="shadow-lg rounded-lg p-6 w-full max-w-3xl">
                <h6 className="text-lg font-bold mb-4">PROFESSIONAL SKILLS</h6>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Skill Progress Bars */}
                    {[
                        { skill: "HTML", width: "89%" },
                        { skill: "CSS", width: "100%" },
                        { skill: "JAVASCRIPT", width: "90%" },
                        { skill: "PHP", width: "95%" },
                        { skill: "MySQL", width: "90%" },
                        { skill: "JQUERY", width: "70%" },
                    ].map(({ skill, width }, index) => (
                        <div key={index}>
                            <p className="font-medium">{skill}</p>
                            <div className="w-full bg-gray-300 rounded-full h-2">
                                <div
                                    className="bg-yellow-500 h-2 rounded-full"
                                    style={{ width }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
