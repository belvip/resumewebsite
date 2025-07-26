import React from "react";
import { useTranslation } from 'react-i18next';
import { FaCode, FaDatabase, FaRocket, FaBullseye } from 'react-icons/fa';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-base-300 text-base-content p-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">{t('about')}</h1>
                    <p className="text-lg opacity-80">{t('aboutSubtitle')}</p>
                </div>

                <div className="p-8">
                    {/* Introduction avec icône */}
                    <div className="mb-8 text-center">
                        <FaCode className="mx-auto text-base-content text-4xl mb-4" />
                        <p className="text-lg text-base-content/90 leading-relaxed max-w-4xl mx-auto">
                            {t('aboutIntro')}
                        </p>
                    </div>

                    {/* Grille de compétences */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Data Engineering */}
                        <div className="bg-base-200 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-base-content text-2xl mr-3" />
                                <h3 className="text-xl font-semibold">{t('dataEngineeringTitle')}</h3>
                            </div>
                            <p className="text-base-content/80">
                                {t('dataEngineeringDesc')}
                            </p>
                        </div>

                        {/* Full Stack Development */}
                        <div className="bg-base-200 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <FaRocket className="text-base-content text-2xl mr-3" />
                                <h3 className="text-xl font-semibold">{t('fullStackDev')}</h3>
                            </div>
                            <p className="text-base-content/80">
                                {t('fullStackDevDesc')}
                            </p>
                        </div>
                    </div>

                    {/* Objectif */}
                    <div className="bg-base-200 p-6 rounded-lg text-center border-l-4 border-base-content/20">
                        <FaBullseye className="mx-auto text-base-content text-3xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-base-content">{t('myObjective')}</h3>
                        <p className="text-lg text-base-content/90 max-w-3xl mx-auto">
                            {t('objectiveDesc')}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 text-center">
                        <h3 className="text-xl font-semibold mb-4">{t('technologiesMastered')}</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Java', 'Spring Boot', 'React', 'Node.js', 'Python', 'FastAPI', 'SQL', 'DBT', 'Airflow', 'BigQuery'].map((tech) => (
                                <span key={tech} className="bg-base-200 text-base-content px-3 py-1 rounded-full text-sm font-medium border border-base-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Personal Info Section */}
            <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden mt-8">
                <div className="bg-base-300 text-base-content p-6 text-center">
                    <h2 className="text-2xl font-bold">{t('personalInfo')}</h2>
                </div>
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="bg-base-200 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-base-content">{t('contactInfo')}</h3>
                            <div className="space-y-3">
                                <p className="text-base-content/80"><span className="font-medium">{t('address')}:</span> Yaoundé, Cameroun</p>
                                <p className="text-base-content/80"><span className="font-medium">{t('email')}:</span> belvinard97@mail.com</p>
                                <p className="text-base-content/80"><span className="font-medium">{t('phone')}:</span> +237 6 59 39 45 52</p>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="bg-base-200 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-base-content">{t('languages')}</h3>
                            <div className="space-y-3">
                                <p className="text-base-content/80"><span className="font-medium">{t('mainLanguage')}:</span> Français</p>
                                <p className="text-base-content/80"><span className="font-medium">{t('secondLanguage')}:</span> Anglais</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;