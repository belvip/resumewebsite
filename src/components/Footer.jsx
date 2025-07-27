import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.jpg';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 border-t border-base-300 mt-auto py-8">
            <div className="align-element">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {/* Left - Logo */}
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-4 mb-3">
                            <Link to="/">
                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                    className="h-10 w-10 rounded-full object-contain hover:scale-105 transition-transform cursor-pointer"
                                />
                            </Link>
                        </div>
                        <p className="text-base-content/70 text-sm">Belvinard</p>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-base-content mb-3">{t('contact')}</h3>
                        <div className="space-y-3">
                            <div className="flex justify-center md:justify-start items-center gap-2">
                                <FaPhone className="text-base-content/60" size={14} />
                                <a href="tel:+237659394552" className="text-base-content/70 hover:text-base-content text-sm transition-colors">
                                    +237 6 59 39 45 52
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start items-center gap-2">
                                <FaEnvelope className="text-base-content/60" size={14} />
                                <a href="mailto:belvinard97@mail.com" className="text-base-content/70 hover:text-base-content text-sm transition-colors">
                                    belvinard97@gmail.com
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start items-center gap-2">
                                <span className="text-base-content/60 text-sm">📍</span>
                                <span className="text-base-content/70 text-sm">Yaoundé, Cameroun</span>
                            </div>
                            <div className="flex justify-center md:justify-start space-x-4 flex-wrap gap-y-2 mt-4">
                                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF className="text-base-content/60 hover:text-blue-600 hover:scale-110 cursor-pointer transition-all duration-200" size={18} />
                                </a>
                                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter className="text-base-content/60 hover:text-blue-400 hover:scale-110 cursor-pointer transition-all duration-200" size={18} />
                                </a>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedinIn className="text-base-content/60 hover:text-blue-700 hover:scale-110 cursor-pointer transition-all duration-200" size={18} />
                                </a>
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram className="text-base-content/60 hover:text-pink-500 hover:scale-110 cursor-pointer transition-all duration-200" size={18} />
                                </a>
                                 <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                    <FaTiktok className="text-base-content/60 hover:text-black hover:scale-110 cursor-pointer transition-all duration-200" size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-base-content mb-3">{t('navigation')}</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/" className="text-base-content/70 hover:text-base-content hover:translate-x-1 text-sm transition-all duration-200">{t('home')}</Link>
                            <Link to="/about" className="text-base-content/70 hover:text-base-content hover:translate-x-1 text-sm transition-all duration-200">{t('about')}</Link>
                            <Link to="/skills" className="text-base-content/70 hover:text-base-content hover:translate-x-1 text-sm transition-all duration-200">{t('skills')}</Link>
                            <Link to="/experiences" className="text-base-content/70 hover:text-base-content hover:translate-x-1 text-sm transition-all duration-200">{t('experiences')}</Link>
                            <Link to="/portfolios" className="text-base-content/70 hover:text-base-content hover:translate-x-1 text-sm transition-all duration-200">{t('portfolios')}</Link>
                            <div className="border-t border-base-300 pt-2 mt-3">
                                <button 
                                    onClick={() => document.getElementById('privacy_modal').showModal()}
                                    className="text-base-content/60 hover:text-base-content text-xs transition-colors"
                                >
                                    {t('privacyPolicy')}
                                </button>
                            </div>
                        </nav>
                    </div>

                    {/* Inspiration Section */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-base-content mb-3">{t('inspiration')}</h3>
                        <p className="text-base-content/80 text-sm">
                            {t('footerMessage')}
                        </p>
                        <p className="text-base-content/60 text-xs mt-1">
                            {t('footerSubMessage')}
                        </p>
                        <p className="text-base-content/60 text-xs mt-2">
                            Belvinard © {currentYear} - {t('allRightsReserved')}
                        </p>
                    </div>
                </div>
            </div>
            <PrivacyModal />
        </footer>
    );
};

export default Footer;