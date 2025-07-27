import React from "react";
import { useTranslation } from 'react-i18next';
import { FaBriefcase } from 'react-icons/fa';
import { getExperiences } from '../data/experiences';

const Experiences = () => {
    const { t } = useTranslation();
    const experiences = getExperiences(t);

    return (
        <div className="align-element">
            <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-base-300 text-base-content p-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">{t('experiences')}</h1>
                    <p className="text-lg opacity-80">{t('experiencesSubtitle')}</p>
                </div>

                <div className="p-8">
                    {/* Introduction */}
                    <div className="mb-8 text-left">
                        <FaBriefcase className="mx-auto text-base-content text-4xl mb-4" />
                        <p className="text-lg text-base-content/90 leading-relaxed max-w-3xl mx-auto">
                            {t('experiencesIntro')}
                        </p>
                    </div>

                    {/* Experiences Timeline */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-base-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    {/* Icon & Period */}
                                    <div className="flex-shrink-0 text-center lg:text-left">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 ${exp.color} text-white rounded-full mb-3`}>
                                            <exp.icon size={24} />
                                        </div>
                                        <div className={`${exp.color} text-white px-4 py-2 rounded-lg text-sm font-medium`}>
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-semibold text-base-content mb-2">
                                                {exp.title}
                                            </h3>
                                            <p className="text-base-content/70 font-medium">
                                                {exp.company} • {exp.location}
                                            </p>
                                        </div>

                                        <p className="text-base-content/80 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex} 
                                                    className="bg-base-300 text-base-content px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Future Note */}
                    <div className="mt-8 text-center bg-base-200 p-6 rounded-lg">
                        <p className="text-base-content/70 text-sm italic">
                            {t('futureNote')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
