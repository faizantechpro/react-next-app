import { Dropdown, Menu, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import React from 'react'

function Header() {
  const { i18n, t } = useTranslation();

  const handleMenuClick = (e) => {
    let lang = e.key;
    console.log(lang)
    i18n.changeLanguage(e.key)
  };
  const LanguageMenu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "English",
          key: "en",
          //icon: <UserOutlined />,
        },
        {
          label: "عربي",
          key: "ar",
        },
      ]}
      className="bg-black language-menu"
    />
  );
  return (
    <div>
      <div className='h-auto bg-[#dbe6e4] px-7 pt-7 pb-2'>
        <div className='flex flex-col md:flex-row justify-between items-center '>
          <div className='text-[#1F4167] font-bold text-4xl md:text-7xl lowercase flex-col items-center pb-5'>
            {t("logo")}
          </div>
          <div className='flex'>
            <div className='text-[#1F4167] text-xs leading-9 font-normal px-2 lg:px-8'>
              {t("menu.about")}
            </div>
            <div className='text-[#1F4167] text-xs leading-9 font-normal px-2 lg:px-8'>
              {t("menu.courses")}
            </div>
            <div className='text-[#1F4167] text-xs leading-9 font-normal px-2 lg:px-8'>
              {t("menu.blogs")}
            </div>
            <div className='text-[#1F4167] text-xs leading-9 font-normal px-2 lg:px-8'>
              {t("menu.contacts")}
            </div>
            <div className='text-[#1F4167] text-xs leading-9 font-normal px-2 lg:px-8'>
              <Dropdown overlay={LanguageMenu} placement="bottom">
                <button className='w-14  flex items-center justify-between'>
                  {/* <Space> */}
                    {t('language')}
                    <DownOutlined />
                  {/* </Space> */}
                </button>
              </Dropdown>
            </div>
          </div>
          <div className='hidden lg:flex'>
            <div className='border border-solid border-[#0F574B] rounded-full w-12 h-12 flex items-center justify-center'>
              <img src='/assets/images/instagram.png' alt='Instagram' />
            </div>
            <div className='border border-solid border-[#0F574B] rounded-full w-12 h-12 flex items-center justify-center mx-2'>
              <img src='/assets/images/twitter.png' alt='Twitter' />
            </div>
            <div className='border border-solid border-[#0F574B] rounded-full w-12 h-12 flex items-center justify-center'>
              <img src='/assets/images/facebook.png' alt='Facebook' />
            </div>
          </div>
        </div>
        <div className='flex flex-col text-center xl:flex-row xl:justify-between xl:text-start items-center mt-14'>
          <div className='text-[#1F4167]'>
            <p className='text-3xl md:text-5xl'>{t("header.part1")}</p>
            <p className='text-5xl md:text-7xl'>{t("header.part2")}<span className='font-bungee'>!</span></p>
            <p className='text-sm mt-8'>{t("header.description")}</p>
            <button className='border border-[#e1c5bf] rounded-lg w-40 h-11 text-[#868c8b] font-bold text-sm mt-3'>
              {t("header.infoButton")}
            </button>
            <div className='flex justify-center mt-20 md:mt-40 xl:ml-24'>
              <button className='mr-3'>
                <img src='/assets/images/GoogleStore.png' alt='Google Playstore' />
              </button>
              <button>
                <img src='/assets/images/AppleStore.png' alt='Apple App Store' />
              </button>
            </div>
          </div>
          <div className='hidden xl:flex'>
            <img src='/assets/images/PhoneScreenGroup.png' alt='Different Screens' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header