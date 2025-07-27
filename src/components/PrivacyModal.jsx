import { useTranslation } from 'react-i18next';

const PrivacyModal = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <dialog id="privacy_modal" className="modal">
            <div className="modal-box max-w-4xl">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
                <h3 className="font-bold text-lg mb-4">{t('privacyPolicy')}</h3>
                
                <div className="space-y-4 text-sm">
                    <section>
                        <h4 className="font-semibold mb-2">{t('privacyDataCollected')}</h4>
                        <p className="text-base-content/80">{t('privacyDataCollectedDesc')}</p>
                    </section>

                    <section>
                        <h4 className="font-semibold mb-2">{t('privacyDataUsage')}</h4>
                        <p className="text-base-content/80">{t('privacyDataUsageDesc')}</p>
                    </section>

                    <section>
                        <h4 className="font-semibold mb-2">{t('privacyDataSharing')}</h4>
                        <p className="text-base-content/80">{t('privacyDataSharingDesc')}</p>
                    </section>

                    <section>
                        <h4 className="font-semibold mb-2">{t('privacyUserRights')}</h4>
                        <p className="text-base-content/80">{t('privacyUserRightsDesc')}</p>
                    </section>

                    <section>
                        <h4 className="font-semibold mb-2">{t('privacyCookies')}</h4>
                        <p className="text-base-content/80">{t('privacyCookiesDesc')}</p>
                    </section>

                    <section>
                        <h4 className="font-semibold mb-2">{t('privacyContact')}</h4>
                        <p className="text-base-content/80">
                            {t('privacyContactDesc')} 
                            <a href="mailto:belvinard97@mail.com" className="link link-primary">belvinard97@mail.com</a>
                        </p>
                    </section>

                    <div className="border-t pt-4 mt-6">
                        <p className="text-xs text-base-content/60">
                            {t('privacyLastUpdated')} {currentYear}
                        </p>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default PrivacyModal;