import React from 'react'
import Blogs from '../Blogs/Blogs'
import Logos from '../Logos/Logos'
import Testimonial from '../Testimonial/Testimonial'
import { useTranslation } from 'react-i18next'
import ContactUs from '../ContactUs/ContactUs'


function Courses() {
  const { t } = useTranslation()

  return (
    <>
      <div className='px-4 xl:pl-28 xl:pr-32'>
        <div className='text-[#1F4167] text-center xl:text-start'>
          {t("courses.heading")}
        </div>
        <div className='text-[#1F4167] text-center xl:text-start text-5xl mt-4'>
          {t("courses.title")}
        </div>
        <div className='flex flex-col items-center xl:flex-row xl:justify-between mt-7'>
          <div className='max-w-lg text-[#999999] text-center xl:text-start'>
            {t("courses.description")}
          </div>
          <div className='flex items-center mt-5 xl:mt-0'>
            <div className='items-center justify-center'>
              <input className='border border-[#DADADA] rounded-lg pl-4 h-12 text-[black]' type='text' name='search' placeholder='Search...' />
            </div>
            <div className='flex ml-3'>
              <button className='bg-[#1F4167] w-16 h-12 rounded-lg flex flex-col justify-center items-center'>
                <img src='/assets/images/Search Icon.png' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-10 xl:grid xl:gap-20 xl:grid-cols-3 mt-14'>
          <div className='w-80 bg-[#dbe6e4]'>
            <div className="bg-course-bg-1 bg-contain bg-no-repeat h-64 px-4 pt-4 flex justify-between" >
              <div className='text-[#FFFFFF] uppercase'>
                Design
              </div>
              <div className='bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center w-12 h-12'>
                <img src='/assets/images/Course Star.png' alt='' />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div>
                <div className='text-2xl text-[#1F4167] w-72'>
                  System Administration and IT Infrastructure Services
                </div>
              </div>
              <div className='bg-[#ffffff] w-72 h-36 px-5 rounded-lg mt-6'>
                <div className='flex justify-between mt-2'>
                  <div className='flex items-center'>
                    <img src='/assets/images/Course User Icon.png' />
                    <div className='text-[#1F4167] ml-3'>
                      42 users
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img src='/assets/images/Course Duration.png' />
                    <div className='text-[#1F4167]  ml-3'>
                      100 min
                    </div>
                  </div>
                </div>
                <hr className='w-64 border border-[#EFDED5] mt-1' />
                <div className='flex items-center mt-4'>
                  <img src='/assets/images/Course User 1.png' />
                  <div className='flex flex-col ml-5'>
                    <p className='text-xl text-[#1F4167]'>Afonso Pinto</p>
                    <p className='text-sm text-[#1F4167] mt-1'>Designer</p>
                  </div>
                </div>
              </div>
              <div className='flex mt-5 pb-7'>
                <div className='bg-[#FFFFFF] flex flex-col items-center justify-center rounded-lg w-16 h-12 text-[#1F4167] text-2xl'>
                  $19
                </div>
                <div className='ml-20'>
                  <button className='bg-[#E8CD9C] w-36 h-12 font-bold text-lg rounded-lg text-[#FFFFFF]'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-80 bg-[#dbe6e4]'>
            <div className='w-80 bg-[#dbe6e4]'>
              <div className="bg-course-bg-2 bg-contain bg-no-repeat h-64 px-4 pt-4 flex justify-between" >
                <div className='text-[#FFFFFF] uppercase'>
                  Technology
                </div>
                <div className='bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center w-12 h-12'>
                  <img src='/assets/images/Course Star.png' alt='' />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div>
                  <div className='text-2xl text-[#1F4167] w-72'>
                    Operating Systems Becoming a Power User
                  </div>
                </div>
                <div className='bg-[#ffffff] w-72 h-36 px-5 rounded-lg mt-6'>
                  <div className='flex justify-between mt-2'>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course User Icon.png' />
                      <div className='text-[#1F4167] ml-3'>
                        42 users
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course Duration.png' />
                      <div className='text-[#1F4167]  ml-3'>
                        100 min
                      </div>
                    </div>
                  </div>
                  <hr className='w-64 border border-[#EFDED5] mt-1' />
                  <div className='flex items-center mt-4'>
                    <img src='/assets/images/Course User 2.png' />
                    <div className='flex flex-col ml-5'>
                      <p className='text-xl text-[#1F4167]'>Gabie Sheber</p>
                      <p className='text-sm text-[#1F4167] mt-1'>Designer</p>
                    </div>
                  </div>
                </div>
                <div className='flex mt-5 pb-7'>
                  <div className='bg-[#FFFFFF] flex flex-col items-center justify-center rounded-lg w-16 h-12 text-[#1F4167] text-2xl'>
                    $24
                  </div>
                  <div className='ml-20'>
                    <button className='bg-[#E8CD9C] w-36 h-12 font-bold text-lg rounded-lg text-[#FFFFFF]'>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-80 bg-[#dbe6e4]'>
            <div className='w-80 bg-[#dbe6e4]'>
              <div className="bg-course-bg-3 bg-contain bg-no-repeat h-64 px-4 pt-4 flex justify-between" >
                <div className='text-[#FFFFFF] uppercase'>
                  Business
                </div>
                <div className='bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center w-12 h-12'>
                  <img src='/assets/images/Course Star.png' alt='' />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div>
                  <div className='text-2xl text-[#1F4167] w-72'>
                    The Bits and Bytes of Computer Networking
                  </div>
                </div>
                <div className='bg-[#ffffff] w-72 h-36 px-5 rounded-lg mt-6'>
                  <div className='flex justify-between mt-2'>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course User Icon.png' />
                      <div className='text-[#1F4167] ml-3'>
                        42 users
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course Duration.png' />
                      <div className='text-[#1F4167]  ml-3'>
                        100 min
                      </div>
                    </div>
                  </div>
                  <hr className='w-64 border border-[#EFDED5] mt-1' />
                  <div className='flex items-center mt-4'>
                    <img src='/assets/images/Course User 3.png' />
                    <div className='flex flex-col ml-5'>
                      <p className='text-xl text-[#1F4167]'>Tania Perfilyeva</p>
                      <p className='text-sm text-[#1F4167] mt-1'>Designer</p>
                    </div>
                  </div>
                </div>
                <div className='flex mt-5 pb-7'>
                  <div className='bg-[#FFFFFF] flex flex-col items-center justify-center rounded-lg w-16 h-12 text-[#1F4167] text-2xl'>
                    FREE
                  </div>
                  <div className='ml-20'>
                    <button className='bg-[#E8CD9C] w-36 h-12 font-bold text-lg rounded-lg text-[#FFFFFF]'>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-10 xl:grid xl:gap-20 xl:grid-cols-3 mt-14'>
          <div className='w-80 bg-[#dbe6e4]'>
            <div className="bg-course-bg-4 bg-contain bg-no-repeat h-64 px-4 pt-4 flex justify-between" >
              <div className='text-[#FFFFFF] uppercase'>
                Design
              </div>
              <div className='bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center w-12 h-12'>
                <img src='/assets/images/Course Star.png' alt='' />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div>
                <div className='text-2xl text-[#1F4167] w-72'>
                  Technical Support Fundamentals
                </div>
              </div>
              <div className='bg-[#ffffff] w-72 h-36 px-5 rounded-lg mt-6'>
                <div className='flex justify-between mt-2'>
                  <div className='flex items-center'>
                    <img src='/assets/images/Course User Icon.png' />
                    <div className='text-[#1F4167] ml-3'>
                      42 users
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img src='/assets/images/Course Duration.png' />
                    <div className='text-[#1F4167]  ml-3'>
                      100 min
                    </div>
                  </div>
                </div>
                <hr className='w-64 border border-[#EFDED5] mt-1' />
                <div className='flex items-center mt-4'>
                  <img src='/assets/images/Course User 4.png' />
                  <div className='flex flex-col ml-5'>
                    <p className='text-xl text-[#1F4167]'>Huo Shu</p>
                    <p className='text-sm text-[#1F4167] mt-1'>Designer</p>
                  </div>
                </div>
              </div>
              <div className='flex mt-5 pb-7'>
                <div className='bg-[#FFFFFF] flex flex-col items-center justify-center rounded-lg w-16 h-12 text-[#1F4167] text-2xl'>
                  $48
                </div>
                <div className='ml-20'>
                  <button className='bg-[#E8CD9C] w-36 h-12 font-bold text-lg rounded-lg text-[#FFFFFF]'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-80 bg-[#dbe6e4]'>
            <div className='w-80 bg-[#dbe6e4]'>
              <div className="bg-course-bg-5 bg-contain bg-no-repeat h-64 px-4 pt-4 flex justify-between" >
                <div className='text-[#FFFFFF] uppercase'>
                  FoodTech
                </div>
                <div className='bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center w-12 h-12'>
                  <img src='/assets/images/Course Star.png' alt='' />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div>
                  <div className='text-2xl text-[#1F4167] w-72'>
                    How to Succeed at: Writing Applications
                  </div>
                </div>
                <div className='bg-[#ffffff] w-72 h-36 px-5 rounded-lg mt-6'>
                  <div className='flex justify-between mt-2'>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course User Icon.png' />
                      <div className='text-[#1F4167] ml-3'>
                        42 users
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course Duration.png' />
                      <div className='text-[#1F4167]  ml-3'>
                        100 min
                      </div>
                    </div>
                  </div>
                  <hr className='w-64 border border-[#EFDED5] mt-1' />
                  <div className='flex items-center mt-4'>
                    <img src='/assets/images/Course User 5.png' />
                    <div className='flex flex-col ml-5'>
                      <p className='text-xl text-[#1F4167]'>Loni Bowcher</p>
                      <p className='text-sm text-[#1F4167] mt-1'>Designer</p>
                    </div>
                  </div>
                </div>
                <div className='flex mt-5 pb-7'>
                  <div className='bg-[#FFFFFF] flex flex-col items-center justify-center rounded-lg w-16 h-12 text-[#1F4167] text-2xl'>
                    $19
                  </div>
                  <div className='ml-20'>
                    <button className='bg-[#E8CD9C] w-36 h-12 font-bold text-lg rounded-lg text-[#FFFFFF]'>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-80 bg-[#dbe6e4]'>
            <div className='w-80 bg-[#dbe6e4]'>
              <div className="bg-course-bg-6 bg-contain bg-no-repeat h-64 px-4 pt-4 flex justify-between" >
                <div className='text-[#FFFFFF] uppercase'>
                  Literature
                </div>
                <div className='bg-[#FFFFFF] rounded-full flex flex-col justify-center items-center w-12 h-12'>
                  <img src='/assets/images/Course Star.png' alt='' />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div>
                  <div className='text-2xl text-[#1F4167] w-72'>
                    Medicine Administration for Carers
                  </div>
                </div>
                <div className='bg-[#ffffff] w-72 h-36 px-5 rounded-lg mt-6'>
                  <div className='flex justify-between mt-2'>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course User Icon.png' />
                      <div className='text-[#1F4167] ml-3'>
                        42 users
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <img src='/assets/images/Course Duration.png' />
                      <div className='text-[#1F4167]  ml-3'>
                        100 min
                      </div>
                    </div>
                  </div>
                  <hr className='w-64 border border-[#EFDED5] mt-1' />
                  <div className='flex items-center mt-4'>
                    <img src='/assets/images/Course User 6.png' />
                    <div className='flex flex-col ml-5'>
                      <p className='text-xl text-[#1F4167]'>Leon Hunt</p>
                      <p className='text-sm text-[#1F4167] mt-1'>Designer</p>
                    </div>
                  </div>
                </div>
                <div className='flex mt-5 pb-7'>
                  <div className='bg-[#FFFFFF] flex flex-col items-center justify-center rounded-lg w-16 h-12 text-[#1F4167] text-2xl'>
                    $19
                  </div>
                  <div className='ml-20'>
                    <button className='bg-[#E8CD9C] w-36 h-12 font-bold text-lg rounded-lg text-[#FFFFFF]'>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className='border border-[#fbd7d2] rounded-lg w-40 h-12 text-[#989898] font-bold text-lg'>
            Explore All
          </button>
        </div>
        <Testimonial />
        <ContactUs />
        <Blogs />
        <Logos />
      </div>
    </>
  )
}

export default Courses