import React from 'react'
import { useTranslation } from 'react-i18next'

function TermCondition() {
    const { t } = useTranslation()
    return (
        <div>
            <div>
                <h6 className='font-bold'>1. {t("about_TewosTechnology")}</h6>
            </div>
            <div>
                <p className="font-serif  indent-8">{t("description_about_tewos")} </p>
            </div>

            <div>
                <h6 className='font-bold'>2. {t("our_vision")} </h6>
            </div>
            <div>
                <p class="font-serif indent-8">{t("description_about_vision")} </p>

            </div>

            <div>
                <h6 className='font-bold'>3. {t("our_values")} </h6>
            </div>
            <div>
                <p class="font-serif indent-8">3.1 {t("team_work")}<br />
                    {t("description_about_teamwork")}</p>

                <p class="font-serif indent-8">3.2 {t("creativity")}<br />
                    {t("description_about_creativity")}</p>


                <p class="font-serif indent-8">3.2 {t("inovation")}<br />
                    {t("description_about_inovation")}</p>
            </div>

        </div>
    )
}

export default TermCondition