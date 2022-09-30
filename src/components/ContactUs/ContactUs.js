import { Input } from 'antd';
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next'


function ContactUs() {
    const { t } = useTranslation()
    const recaptchaRef = React.createRef();
    return (
        <div className='relative'>
            <div className="flex flex-col items-center">
                <div className='text-[#1F4167] text-4xl font-medium mt-32 mb-20 text-center'>
                    {t("contactUs.contactUs")}
                </div>
                <div className='w-[90%] sm:w-[60%] h-[550px] rounded-xl bg-[#0F574B] p-8 flex flex-col justify-between items-center' style={{ border: '1px solid #0f574b' }}>
                    <div className='flex flex-col w-full gap-4 md:flex-row items-center justify-between'>
                        <Input className='h-10 rounded-md p-2' placeholder={t("contactUs.firstName")} />
                        <Input className='h-10 rounded-md p-2' placeholder={t("contactUs.lastName")} />
                    </div>
                    <Input className=' h-10 rounded-md p-2' placeholder='Email' />
                    <Input className='h-10 rounded-md p-2' placeholder={t("contactUs.subject")} />
                    <textarea className='h-28 w-full rounded-md p-2' placeholder={t("contactUs.message")} />
                    <div>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={'akdjfkafkjalkejraj'}
                        />
                    </div>
                    <button className='w-40 h-12 bg-transparent border border-[#568980] rounded-lg text-lg text-[#FFFFFF] font-bold mt-5 sm:ml-5'>{t("contactUs.submit")}</button>

                </div>
            </div>

            <img alt='' className='absolute top-[25%] left-[60%] z-10 hidden sm:block' src='/assets/images/About Dots Top.png' />
            <img alt='' className='absolute bottom-[-20%] left-[10%] z-10 hidden sm:block' src='/assets/images/About Dots Bottom.png' />
            <img alt='' className='absolute top-[76%] left-[78%] z-10 hidden sm:block' src='/assets/images/Polygon Blue.png' />
            <img alt='' className='absolute top-[37%] left-[19.1%] z-10 hidden sm:block' src='/assets/images/dot blue.png' />
            <img alt='' className='absolute bottom-[-2%] left-[67%] z-10 hidden sm:block' src='/assets/images/Oval.png' />
        </div>
    )
}

export default ContactUs