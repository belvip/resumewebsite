import React from "react";
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    const skillsData = [
        {
            domain: t('frontend'),
            technologies: "HTML, CSS, JavaScript, React, Tailwind, WordPress"
        },
        {
            domain: t('backend'),
            technologies: "Java (Spring Boot), Node.js (Express/NestJS), Python (FastAPI/Django/Flask)"
        },
        {
            domain: t('database'),
            technologies: "PostgreSQL, MongoDB, MySQL"
        },
        {
            domain: t('dataEngineering'),
            technologies: "SQL, DBT, Apache Airflow, BigQuery, ETL/ELT"
        },
        {
            domain: t('cloudDevops'),
            technologies: "Git, GitHub Actions, Docker, Render, Heroku"
        },
        {
            domain: t('biVisualization'),
            technologies: "Tableau, Power BI"
        }
    ];

    return (
        <div className="mx-auto max-w-6xl px-8">
            <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <div className="bg-base-300 text-base-content p-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">{t('skills')}</h1>
                    <p className="text-lg opacity-80">{t('skillsSubtitle')}</p>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-base-200">
                                <th className="text-lg font-semibold text-base-content">{t('skillsDomain')}</th>
                                <th className="text-lg font-semibold text-base-content">{t('skillsTechnologies')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skillsData.map((skill, index) => (
                                <tr key={index} className="hover:bg-base-200 transition-colors">
                                    <td className="font-medium text-base-content font-semibold">
                                        {skill.domain}
                                    </td>
                                    <td className="text-base-content/80">
                                        {skill.technologies}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Skills;
