import React from 'react'
import { useTranslation } from 'react-i18next'


function Blogs() {
    const { t } = useTranslation()

    return (
        <>
            <div className='flex flex-col items-center mt-28'>
                <div className='font-bold text-base uppercase text-[#1F4167]'>
                {t("blogs.heading")}
                </div>
                <div className='text-5xl text-[#1F4167] mt-4'>
                {t("blogs.title")}
                </div>
                <div className='text-center text-[#999999] text-base lg:max-w-md leading-8 mt-7'>
                {t("blogs.des")}
                </div>
                <div className='grid grid-cols-1 gap-10 xl:grid-cols-3 mt-7'>
                    <div className='flex flex-col bg-[#dbe6e4] w-80 rounded-lg'>
                        <div className='bg-blogs-bg-1 bg-contain bg-no-repeat h-64 px-8 pt-9'>
                            <div className='text-[#FFFFFF] text-xs font-bold uppercase'>
                                Learning
                            </div>
                        </div>
                        <div className='w-72 text-2xl text-[#1F4167] leading-8 mx-8 mt-10'>
                            Powerful mental tools to help you master
                        </div>
                        <div className='flex justify-between items-center mx-8 mt-5 mb-11'>
                            <div className='flex items-center'>
                                <img src='/assets/images/Blogs User.png' alt='User' />
                                <p className='text-[#1F4167] ml-2'>Jon Doe</p>
                            </div>
                            <div className='flex items-center'>
                                <img src='/assets/images/Calendar.png' alt='Calendar' />
                                <p className='text-[#1F4167] ml-3'>29 Dec 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#dbe6e4] w-80 rounded-lg'>
                        <div className='bg-blogs-bg-3 bg-contain bg-no-repeat h-64 px-8 pt-9'>
                            <div className='text-[#FFFFFF] text-xs font-bold uppercase'>
                                Business
                            </div>
                        </div>
                        <div className='w-72 text-2xl text-[#1F4167] leading-8 mx-8 mt-10'>
                            Essential Strategies and Skills
                        </div>
                        <div className='flex justify-between items-center mx-8 mt-5 mb-11'>
                            <div className='flex items-center'>
                                <img src='/assets/images/Blogs User 2.png' alt='User' />
                                <p className='text-[#1F4167] ml-2'>Farhad Tarokh</p>
                            </div>
                            <div className='flex items-center'>
                                <img src='/assets/images/Calendar.png' alt='Calendar' />
                                <p className='text-[#1F4167] ml-3'>29 Dec 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#dbe6e4] w-80 rounded-lg'>
                        <div className='bg-blogs-bg-2 bg-contain bg-no-repeat h-64 px-8 pt-9'>
                            <div className='text-[#FFFFFF] text-xs font-bold uppercase'>
                                Education
                            </div>
                        </div>
                        <div className='w-72 text-2xl text-[#1F4167] leading-8 mx-8 mt-10'>
                            Financial Engineering and Risk Management
                        </div>
                        <div className='flex justify-between items-center mx-8 mt-5 mb-11'>
                            <div className='flex items-center'>
                                <img src='/assets/images/Blogs User 3.png' alt='User' />
                                <p className='text-[#1F4167] ml-2'>Abbie Wilson</p>
                            </div>
                            <div className='flex items-center'>
                                <img src='/assets/images/Calendar.png' alt='Calendar' />
                                <p className='text-[#1F4167] ml-3'>29 Dec 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <button className='border border-[#fbd7d2] rounded-lg w-40 h-12 text-[#989898] font-bold text-lg'>
                    {t("blogs.button")}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Blogs