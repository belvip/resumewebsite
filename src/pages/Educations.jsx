import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const Educations = () => {
    const { t } = useTranslation();

    return (
        <div className="align-element">
            <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-base-300 text-base-content p-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">{t('educations')}</h1>
                    <p className="text-lg opacity-80">{t('educationsSubtitle')}</p>
                </div>

                <div className="p-8">
                    {/* Introduction */}
                    <div className="mb-8 text-center">
                        <FaCertificate className="mx-auto text-base-content text-4xl mb-4" />
                        <p className="text-lg text-base-content/90 leading-relaxed max-w-3xl mx-auto">
                            {t('educationsIntro')}
                        </p>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-base-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <cert.icon className={`${cert.iconColor} text-3xl`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-base-content mb-2">
                                                Certificat {cert.provider} – {cert.title}
                                            </h3>
                                            <p className="text-base-content/70 text-sm">
                                                {cert.provider} • {cert.year}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a 
                                            href={cert.certificateUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary/20 text-base-content px-4 py-2 rounded-lg hover:bg-primary/30 transition-colors"
                                        >
                                            <span>{t('viewCertificate')}</span>
                                            <FaExternalLinkAlt size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-8 text-center">
                        <p className="text-base-content/60 text-sm">
                            {t('certificationsNote')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educations;