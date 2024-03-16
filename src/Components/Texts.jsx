import React , {useContext, useEffect, useState} from 'react'
import enTranslation from "../Languages/en.json"
import faTranslation from "../Languages/fa.json"
import arTranslation from "../Languages/ar.json"
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import data from '../data/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


i18n.use(initReactI18next).init({
    resources: {
      fa: { translation: faTranslation },
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    lng: "fa", // default language
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false,
    },
  });

  

  const changeLanguage = (lng) => {

    i18n.changeLanguage(lng);
  };

const Texts = ({language , setLanguage}) => {


  const { t } = useTranslation();
    const { i18n } = useTranslation();
    useEffect(() => {
        const getparticipants = () => {
         
            console.log(language)
            if(language==0){
              changeLanguage("en")
            }
            else if (language==1){
              changeLanguage("ar")
            }
            else if (language==2){
              changeLanguage("fa")
            }
        };
    
        getparticipants();
      }, [language]);
    

      // const change = () => {

      //   toast.success(t("toast"), {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     // theme: "light",
      //     // transition: Bounce,
      //     });
      // }

  return (
    <div  className={` relative ${language==0 ? 'sm:mr-0 top-[-10px]' : language==1 ? 'sm:mr-2': 'sm:mr-2'  }  sm:right-[10%] sm:mb-6  mb-10`}>
      <img className=' absolute sm:top-[5%] sm:right-[40%] right-[40%] top-0' src={data[2].src}></img>
      <div className=' sm:mt-[110px] flex flex-col justify-center items-center mt-[100px] '>
        <span className='  sm:text-[18px] text-center text-[14px] font-sahel mb-4 mx-12 '>{t("title")}</span>
        <div className=' flex flex-col justify-center items-center'>
        <span className=' sm:text-[14px] text-[9px]'>{t("line1")}</span>
        <span className=' sm:text-[14px] text-[9px]'>{t("line2")}</span>
        <span className=' sm:text-[14px] text-[9px]'>{t("line3")}</span>
        <span className=' sm:text-[14px] text-[9px]'>{t("line4")}</span>
        <span className=' sm:text-[14px] text-[9px]'>{t("line5")}</span>
        <span className=' sm:text-[14px] text-[9px]'>{t("line6")}</span>
        <span className=' mt-4 sm:text-[14px] text-[11px]'>{t("line7")}</span>
        
        </div>
      </div>
      
    </div>
  )
}

export default Texts