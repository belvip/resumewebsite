import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaPinterest, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 border-t border-base-300 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* Left - Logo & Social Media */}
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
                        <div className="flex justify-center md:justify-start space-x-3 flex-wrap gap-y-2">
                            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF className="text-base-content/60 hover:text-blue-500 hover:scale-110 cursor-pointer transition-all duration-200" size={18} />
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-base-content/60 hover:text-blue-400 cursor-pointer transition-colors" size={18} />
                            </a>
                            <a href="https://plus.google.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaGooglePlusG className="text-base-content/60 hover:text-red-500 cursor-pointer transition-colors" size={18} />
                            </a>
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-base-content/60 hover:text-pink-500 cursor-pointer transition-colors" size={18} />
                            </a>
                            <a href="https://pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaPinterest className="text-base-content/60 hover:text-red-600 cursor-pointer transition-colors" size={18} />
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-base-content/60 hover:text-blue-700 cursor-pointer transition-colors" size={18} />
                            </a>
                            <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="text-base-content/60 hover:text-black cursor-pointer transition-colors" size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Center - Glory to God message */}
                    <div className="text-center">
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

                    {/* Right - Navigation Links */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-base-content mb-3">{t('navigation')}</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/" className="text-base-content/70 hover:text-primary hover:translate-x-1 text-sm transition-all duration-200">{t('home')}</Link>
                            <Link to="/about" className="text-base-content/70 hover:text-primary text-sm">{t('about')}</Link>
                            <Link to="/skills" className="text-base-content/70 hover:text-primary text-sm">{t('skills')}</Link>
                            <Link to="/experiences" className="text-base-content/70 hover:text-primary text-sm">{t('experiences')}</Link>
                            <Link to="/portfolios" className="text-base-content/70 hover:text-primary text-sm">{t('portfolios')}</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;