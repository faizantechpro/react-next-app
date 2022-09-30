import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  return (
    <>
      <div className='xl:pl-28 xl:pr-16 py-24'>
        <div className='flex flex-col items-center text-center xl:grid xl:grid-cols-2 xl:text-left'>
          <div className='hidden xl:flex xl:flex-col'>
            <div className='z-0 relative'>
              <div>
                <img src='assets/images/About Background Green.png' />
                <div className='z-0 absolute -top-7 left-72'>
                  <img src='/assets/images/About Dots Top.png' alt='Dots Top' />
                </div>
                <div className='z-10 absolute bottom-0 -mb-11 -left-12'>
                  <img src='/assets/images/About 1.png' alt='About' />
                </div>
                <div className='z-10 absolute top-20 -left-20 '>
                  <img src='/assets/images/Chat.png' alt='Chat' />
                </div>
                <div className='z-20 absolute bottom-4 left-[20rem]'>
                  <img src='/assets/images/Graph.png' alt='Graph' />
                </div>
                <div className='z-0 absolute -bottom-48 -left-24'>
                  <img src='/assets/images/About Dots Bottom.png' alt='Dots Top' />
                </div>
              </div>
            </div>
          </div>
          <div className='text-[#1F4167] px-4 xl:px-0'>
            <p className='font-bold text-3xl leading-9'>{t("about.heading1")}</p>
            <p className='font-bold text-5xl leading-10 mt-5 lg:mt-0'>{t("about.heading2")}</p>
            <p className='text-xl leading-8 xl:w-96 mt-9'>{t("about.description1")}</p>
            <p className='text-base leading-8 xl:w-96 mt-3 text-[#999999]'>{t("about.description2")}</p>
            <button className='bg-[#E8CD9C] text-[#FFFFFF] font-bold text-lg rounded-lg w-40 h-12 mt-5'>{t("about.infoButton")}</button>
          </div>
        </div>
        <div className='flex flex-col items-center text-center xl:grid xl:grid-cols-2 xl:text-left mt-36'>
          <div className='text-[#1F4167] px-4 xl:px-0'>
            <p className='font-bold text-base leading-8'>{t("services.heading1")}</p>
            <p className='text-5xl leading-10'>{t("services.heading2")}</p>
            <p className='text-xl leading-8 xl:max-w-sm mt-9'>{t("services.description1")}</p>
            <div className='flex flex-col items-center xl:flex-row'>
              <div className='flex flex-col justify-center items-center bg-[#F07867] rounded-full w-24 h-24 md:mr-8 md:mt-6'>
                <img src='/assets/images/Online Learning Icon.png' alt='Icon' />
              </div>
              <div className='text-[#999999] text-base xl:w-80'>
              {t("services.description2")}
              </div>
            </div>
          </div>
          <div className='hidden xl:flex xl:flex-col ml-48'>
            <div>
              <div className='z-0 relative'>
                <img src='assets/images/Our Services Background.png' />
                <div className='z-0 absolute -top-7 -right-10'>
                  <img src='/assets/images/About Dots Top.png' alt='Dots Top' />
                </div>
                <div className='z-10 absolute -bottom-10 -left-16'>
                  <img src='/assets/images/Our Services.png' alt='Services' />
                </div>
                <div className='z-10 absolute top-40 -left-20 '>
                  <img src='/assets/images/Our Services Mail.png' alt='Chat' />
                </div>
                <div className='z-20 absolute bottom-4 -right-5'>
                  <img src='/assets/images/Our Services Clock.png' alt='Graph' />
                </div>
                <div className='z-0 absolute -bottom-48 -left-28'>
                  <img src='/assets/images/About Dots Bottom.png' alt='Dots Top' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-online-education h-screen mt-10 bg-cover bg-no-repeat flex flex-col items-center">
        <div className='text-[#FFFFFF] text-5xl mt-32'>
          {t("onlineEducation.heading")}
        </div>
        <div className='max-w-3xl text-base text-[#FFFFFF] mt-7 text-center'>
        {t("onlineEducation.description")}
        </div>
        <div className='flex justify-around'>
          <button className='bg-[#E8CD9C] text-[#FFFFFF] font-bold text-lg rounded-lg w-40 h-12 mt-8'> {t("onlineEducation.buttonGetStarted")}</button>
          <button className='bg-transparent border-[#568980] border text-[#FFFFFF] font-bold text-lg rounded-lg w-40 h-12 mt-8 ml-7'>{t("onlineEducation.buttonContact")}</button>
        </div>
      </div>
    </>
  )
}

export default About