import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation()

    return (
        <>
            <div className='bg-[#0f574b] px-32 py-14 text-[#FFFFFF] mt-20 text-center lg:text-start'>
                <div className='flex flex-col items-center lg:flex-row lg:justify-between'>
                    <div className=''>
                        <p className='text-4xl'>{t("footer.section1.heading")}</p>
                        <p className='mt-16 lg:mt-4'>{t("footer.section1.des")}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center mt-16 lg:mt-0'>
                        <button className='w-40 h-12 bg-transparent text-lg font-bold mt-5 sm:ml-5'>{t("footer.section1.buttonGetStarted")}</button>
                        <button className='w-40 h-12 bg-transparent border border-[#568980] rounded-lg text-lg text-[#FFFFFF] font-bold mt-5 sm:ml-5'>{t("footer.section1.buttonContact")}</button>
                    </div>
                </div>
                <hr className='border border-[#568980] mt-16' />
                <div className='text-4xl mt-12'>
                    EDCT
                </div>
                <div className='flex flex-col items-center lg:flex-row lg:justify-between mt-8'>
                    <div className='w-64 leading-8'>
                        {t("footer.section2.des")}
                    </div>
                    <div className='flex flex-col mt-14 lg:mt-0'>
                        <p>Email: education@edu.com</p>
                        <p>Phone: +1 (234) 567-89-00</p>
                    </div>
                    <div>
                        <div className='pb-3 text-white text-md font-light '>Sign up for our News Letter:</div>
                        <div className='flex flex-col lg:flex-row items-center mt-14 lg:mt-0'>
                            <div>
                                <input className='w-64 h-12 text-[black] rounded-lg border border-transparent pl-5' type='email' name='email' placeholder='Email' />
                            </div>
                            <div className='mt-5 lg:ml-3 lg:mt-0'>
                                <button className='bg-transparent w-24 h-12 font-medium rounded-lg'>
                                    {t("footer.section2.button")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border border-[#568980] mt-16' />
                <div className='flex flex-col items-center lg:flex-row lg:justify-between mt-14'>
                    <p>{t("footer.section3.policy")}</p>
                    <p className='text-[#999999] mt-5 lg:mt-0'>© 2022 {t("footer.section3.policyLink")}</p>
                </div>
            </div>
        </>
    )
}

export default Footer