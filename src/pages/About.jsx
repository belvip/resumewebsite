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
                    <p className="text-lg opacity-80">Software Engineer & Data Specialist</p>
                </div>

                <div className="p-8">
                    {/* Introduction avec icône */}
                    <div className="mb-8 text-center">
                        <FaCode className="mx-auto text-base-content text-4xl mb-4" />
                        <p className="text-lg text-base-content/90 leading-relaxed max-w-4xl mx-auto">
                            <span className="font-semibold text-base-content">Passionné par les technologies web et la donnée</span>, je suis développeur fullstack spécialisé en 
                            <span className="font-medium"> Java (Spring Boot), JavaScript (React, Node.js) et Python (FastAPI)</span>.
                        </p>
                    </div>

                    {/* Grille de compétences */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Data Engineering */}
                        <div className="bg-base-200 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-base-content text-2xl mr-3" />
                                <h3 className="text-xl font-semibold">Data Engineering</h3>
                            </div>
                            <p className="text-base-content/80">
                                Grâce à mes compétences en <span className="font-medium">ingénierie d'entrepôt de données</span>, 
                                je sais construire des architectures data modernes avec 
                                <span className="font-medium"> SQL, ETL, DBT, Airflow et BigQuery</span>.
                            </p>
                        </div>

                        {/* Full Stack Development */}
                        <div className="bg-base-200 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <FaRocket className="text-base-content text-2xl mr-3" />
                                <h3 className="text-xl font-semibold">Développement Full Stack</h3>
                            </div>
                            <p className="text-base-content/80">
                                Je crée des <span className="font-medium">applications web de bout en bout</span>, 
                                tout en assurant l'intégration, la transformation et l'analyse des données à grande échelle.
                            </p>
                        </div>
                    </div>

                    {/* Objectif */}
                    <div className="bg-base-200 p-6 rounded-lg text-center border-l-4 border-base-content/20">
                        <FaBullseye className="mx-auto text-base-content text-3xl mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-base-content">Mon Objectif</h3>
                        <p className="text-lg text-base-content/90 max-w-3xl mx-auto">
                            Accompagner les entreprises dans la création d'<span className="font-semibold">applications intelligentes, 
                            connectées à leurs données</span>.
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 text-center">
                        <h3 className="text-xl font-semibold mb-4">Technologies Maîtrisées</h3>
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
        </div>
    );
};

export default About;
