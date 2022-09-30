import React from 'react'
import { useTranslation } from 'react-i18next'

function Testimonial() {
    const { t } = useTranslation()

    return (
        <>
            <div className='flex flex-col items-center text-center lg:flex-row lg:justify-around lg:text-start mt-32'>

                <div className='relative max-w-[36rem]'>
                    <div className='bg-[#E8CD9C] mx-10 sm:ml-[1.85rem] max-w-xs sm:max-w-lg rounded-lg px-2 p-4 pt-2'>
                        <div className='flex justify-between '>
                            <div className='bg-[#C4C4C4] rounded-full border-8 border-[#FFFFFF] flex flex-col justify-center items-center w-40 h-40'>
                                <img alt='' src='/assets/images/Testimonial Portrait Icon.png' />
                            </div>
                            <div>
                                <img alt='' src='/assets/images/Quote.png' />
                            </div>
                        </div>
                        <div className='pl-4 text-left'>
                            <div className='text-[#0F574B] text-xl mt-8 leading-8 w-full md:w-[30rem]'>
                                {t("testimonials.card.des")}
                            </div>
                            <div className='mt-7 text-[#0F574B] text-base'>
                                {t("testimonials.card.name")}
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-[#989898] text-base leading-8'>
                                    {t("testimonials.card.company")}
                                </div>
                                <div className='flex mb-20 max-h-'>
                                    <button className='bg-[#0F574B] rounded-full w-12 h-12 flex flex-col justify-center items-center'>
                                        <img alt='' src='/assets/images/Testimonial Arrow Left.png' />
                                    </button>
                                    <button className='bg-[#0F574B] rounded-full w-12 h-12 flex flex-col justify-center items-center ml-2'>
                                        <img alt='' src='/assets/images/Testimonial Arrow Right.png' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' max-w-xs sm:w-[36rem]'>
                        <img alt='' className='absolute -top-8 z-10 h-[36rem] sm:h-full' src='/assets/images/Testimonial Layer 2.png' />
                    </div>
                    <div className=''>
                        <img alt='' className='absolute -top-16 left-[38%] sm:left-64 z-0' src='/assets/images/About Dots Top.png' />
                    </div>
                    <div className=''>
                        <img alt='' className='absolute top-[6rem] left-[91%] sm:left-[94%] z-20' src='/assets/images/Polygon.png' />
                    </div>
                    <div className=''>
                        <img alt='' className='absolute bottom-28 left-[-4.5%] sm:left-[-3%] z-0' src='/assets/images/Oval.png' />
                    </div>
                    <div className=''>
                        <img alt='' className='absolute top-44 left-[87.5%] sm:left-[91.5%] z-10' src='/assets/images/Oval-1.png' />
                    </div>
                </div>
                <div className='flex flex-col mt-10 lg:mt-0 '>
                    <div className='text-base font-bold text-[#1F4167]'>
                        {t("testimonials.heading")}
                    </div>
                    <div className='text-5xl lg:w-80 text-[#1F4167] mt-4'>
                        {t("testimonials.title")}
                    </div>
                    <div className='text-xl text-[#1F4167] lg:max-w-md mt-7 leading-8'>
                        {t("testimonials.description1")}
                    </div>
                    <div className='text-xs text-[#999999] lg:max-w-md mt-7 leading-8'>
                        {t("testimonials.description2")}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center text-center lg:flex-row lg:justify-around lg:text-start mt-32'>
                <div className='flex flex-col'>
                    <div className='text-base font-bold text-[#1F4167]'>
                        {t("features.heading")}
                    </div>
                    <div className='text-5xl lg:w-80 text-[#1F4167] mt-4'>
                        {t("features.title")}
                    </div>
                    <div className='text-xl text-[#1F4167] lg:max-w-md mt-7 leading-8'>
                        {t("features.des1")}
                    </div>
                    <div className='text-xs text-[#999999] lg:max-w-md mt-7 leading-8'>
                        {t("features.des2")}
                    </div>
                </div>
                <div className='flex flex-col text-left my-16 lg:mt-0'>
                    <div className='relative'>
                        <div className='max-w-sm md:max-w-md lg:max-w-lg rounded-lg bg-[#dbe6e4] flex flex-col md:flex-row items-center md:justify-center md:items-center py-10 px-2 md:px-4 lg:px-8'>
                            <div className='flex flex-col bg-[#1F4167] rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 justify-center items-center '>
                                <img src='/assets/images/Professional Icon.png' alt='Professional' />
                            </div>
                            <div className='flex flex-col md:ml-4 text-center md:text-left'>
                                <div className='text-3xl text-[#1F4167]'>
                                    {t("features.cards.power.title")}
                                </div>
                                <div className='w-80 text-[#999999]'>
                                    {t("features.cards.power.des")}
                                </div>
                            </div>
                        </div>
                        <div className='max-w-sm md:max-w-md lg:max-w-lg rounded-lg bg-[#0F574B] flex flex-col md:flex-row items-center md:justify-center md:items-center py-10 px-2 md:px-4 lg:px-8 my-4'>
                            <div className='flex flex-col bg-[#E8CD9C] rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 justify-center items-center '>
                                <img src='/assets/images/Skill Icon.png' alt='Professional' />
                            </div>
                            <div className='flex flex-col md:ml-4 text-center md:text-left'>
                                <div className='text-3xl text-[#E8CD9C]'>
                                    {t("features.cards.actual.title")}
                                </div>
                                <div className='w-80 text-[#E8CD9C]'>
                                    {t("features.cards.actual.des")}
                                </div>
                            </div>
                        </div>
                        <div className='max-w-sm md:max-w-md lg:max-w-lg rounded-lg bg-[#dbe6e4] flex flex-col md:flex-row items-center md:justify-center md:items-center py-10 px-2 md:px-4 lg:px-8'>
                            <div className='flex flex-col bg-[#EEA1E2] z-20 rounded-full w-28 h-28 justify-center items-center '>
                                <img src='/assets/images/Growth Icon.png' alt='Professional' />
                            </div>
                            <div className='flex flex-col md:ml-4 text-center md:text-left'>
                                <div className='text-3xl text-[#1F4167]'>
                                    {t("features.cards.growth.title")}
                                </div>
                                <div className='w-80 text-[#999999] '>
                                    {t("features.cards.growth.des")}
                                </div>
                            </div>
                        </div>
                        <img alt='' className='absolute top-[-5%] left-[35%] md:left-[50%] z-10' src='/assets/images/About Dots Top.png' />
                        <img alt='' className='absolute bottom-[-26%] left-[-18%] z-10' src='/assets/images/About Dots Bottom.png' />
                        <img alt='' className='absolute top-[12%] left-[92%] md:top-[18%] md:left-[95%] z-10' src='/assets/images/Polygon Blue.png' />
                        <img alt='' className='absolute top-[64.5%] left-[76%] md:top-[67%] z-10' src='/assets/images/dot blue.png' />
                        <img alt='' className='absolute top-[39%] left-[-5%] md:left-[-3.5%] z-0' src='/assets/images/Oval.png' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center text-center lg:flex-row lg:justify-around lg:text-start'>
                <div className='relative'>
                    <div className='bg-[#E8CD9C] w-80 py-7 pl-12 pr-7 rounded-lg mt-32'>
                        <div className='flex flex-col items-end'>
                            <div className='flex'>
                                <div className='w-3 h-3 bg-[#F07867] rounded-full' />
                                <div className='w-3 h-3 bg-[#0F574B] rounded-full mx-3' />
                                <div className='w-3 h-3 bg-[#F1A4E5] rounded-full' />
                            </div>
                            <div className='text-[#0F574B] text-5xl mt-14'>
                                {t("pricing.cards.title")}
                            </div>
                            <div className='text-[#0F574B] text-base mt-2'>
                                {t("pricing.cards.subTitle")}
                            </div>
                        </div>
                        <div className='flex flex-col mt-20'>
                            <div className='flex items-center'>
                                <img alt='' src='/assets/images/Triangle.png' />
                                <div className='ml-3'>
                                    {t("pricing.cards.point1")}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img alt='' src='/assets/images/Triangle 2.png' />
                                <div className='ml-3'>
                                    {t("pricing.cards.point2")}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img alt='' src='/assets/images/Triangle 3.png' />
                                <div className='ml-3'>
                                    {t("pricing.cards.point3")}
                                </div>
                            </div>
                            <div className='mt-12'>
                                <button className='w-40 h-12 text-lg font-bold bg-[#0F574B] text-[#FFFFFF] rounded-lg'>
                                    {t("pricing.cards.button")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute w-full h-[24rem] top-[28%] -left-8 rounded-lg -z-20 bg-gray-400'></div>
                    <img alt='' className='absolute top-[56%] left-[84%] hidden sm:block' src='/assets/images/icon date.png' />
                    <img alt='' className='absolute top-[36%] left-[-35%] hidden sm:block' src='/assets/images/price.png' />
                    <img alt='' className='absolute top-[40%] left-[92%] z-20' src='/assets/images/Polygon.png' />
                    <img alt='' className='absolute top-[18%] left-[50%] sm:left-[55%] -z-10' src='/assets/images/About Dots Top.png' />
                    <img alt='' className='absolute bottom-[-28%] left-[-36%] -z-10' src='/assets/images/About Dots Bottom.png' />
                </div>
                <div className='flex flex-col mt-32'>
                    <div className='text-base font-bold text-[#1F4167]'>
                        {t("pricing.heading")}

                    </div>
                    <div className='text-5xl lg:w-80 text-[#1F4167] mt-4'>
                        {t("pricing.title")}
                    </div>
                    <div className='text-xl text-[#1F4167] lg:max-w-md mt-7 leading-8'>
                        {t("testimonials.description1")}
                    </div>
                    <div className='text-xs text-[#999999] lg:max-w-md mt-7 leading-8'>
                        {t("testimonials.description2")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial