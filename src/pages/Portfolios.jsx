import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFolderOpen, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import { portfolioTechnologies } from '../data/technologies';

const Portfolios = () => {
    const { t } = useTranslation();

    return (
        <div className="align-element">
            <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-base-300 text-base-content p-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">{t('portfolios')}</h1>
                    <p className="text-lg opacity-80">{t('portfoliosSubtitle')}</p>
                </div>

                <div className="p-8">
                    {/* Introduction */}
                    <div className="mb-8 text-center">
                        <FaFolderOpen className="mx-auto text-base-content text-4xl mb-4" />
                        <p className="text-lg text-base-content/90 leading-relaxed max-w-3xl mx-auto">
                            {t('portfoliosIntro')}
                        </p>
                    </div>

                    {/* Portfolio Link Card */}
                    <div className="bg-base-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                        <div className="mb-6">
                            <FaLaptopCode className="mx-auto text-base-content text-5xl mb-4" />
                            <h2 className="text-2xl font-semibold text-base-content mb-3">
                                {t('portfolioTitle')}
                            </h2>
                            <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
                                {t('portfolioDesc')}
                            </p>
                        </div>

                        {/* Portfolio Button */}
                        <a 
                            href="https://belvi-projects.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-base-content text-base-100 px-8 py-4 rounded-lg hover:bg-base-content/90 transition-colors text-lg font-medium"
                        >
                            <FaCode size={20} />
                            <span>{t('viewPortfolio')}</span>
                            <FaExternalLinkAlt size={16} />
                        </a>
                    </div>

                    {/* Technologies Preview */}
                    <div className="mt-8 text-center">
                        <h3 className="text-xl font-semibold mb-4 text-base-content">{t('technologiesUsed')}</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {portfolioTechnologies.map((tech) => (
                                <span 
                                    key={tech} 
                                    className="bg-base-300 text-base-content px-4 py-2 rounded-full text-sm font-medium border border-base-content/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="mt-8 text-center">
                        <p className="text-base-content/60 text-sm italic">
                            {t('portfolioNote')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolios;