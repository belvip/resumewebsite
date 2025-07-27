import React from "react";
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data/skillsData';

const Skills = () => {
    const { t } = useTranslation();

    const skills = skillsData(t);

    return (
        <div className="align-element">
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
                            {skills.map((skill) => (
                                <tr key={skill.id} className="hover:bg-base-200 transition-colors">
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
