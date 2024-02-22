import React , {useEffect, useState} from 'react'
import enTranslation from "../Languages/en.json"
import faTranslation from "../Languages/fa.json"
import arTranslation from "../Languages/ar.json"
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

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

const Form = ({language , setLanguage}) => {

    const [name , setName] = useState()
    const [number , setNumber] = useState()
    const [description , setDescription] = useState("")  

    const handlePhoneNumberChange = (value, Number,selectedCountryData) => {
      setNumber("")
       let val = selectedCountryData.dialCode + Number
    setNumber(val);
    // console.log(typeof value)
    console.log( number)
    // console.log(selectedCountryData.dialCode)

    // setNumber()
    
     
  };

    async function submit() {
        let info = {
          complex_name: name,
          phone_number: number,
          description: description,
        };
    
        await fetch("http://192.168.9.6:8000/forms/the-issue-of-honorables/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "X-CSRFToken":"23tMKbRT725veaRIUL7UWnAcIj0zJzWVqfKzZpNxAMw15eapLgnTsNXjORZXTNpU",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((json) => {
            // console.log(number)
            // console.log( json);
            // toast.success(t("toast"), {
            //   position: "top-center",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   // theme: "light",
            //   // transition: Bounce,
            //   });
          
          })
          .catch((e) => {
            console.log("login erorr ==>>> ", e);
          });
      }

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
  return (
    <div className=' scale-95 gap-[20px] sm:mt-10   flex flex-col justify-center items-center '>

 <input
              dir={`${language==0 ? "ltr" : "rtl" }`}
              value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={t("name")}
              className=" pr-4 font-sahel focus:outline-none   placeholder:font-sahel placeholder:pr-2 placeholder:pl-2 placeholder:sm:text-[14px] sm:text-[14px] placeholder:text-[10px] placeholder:pb-2 rounded-[8px] sm:w-[300px] sm:h-[50px] h-[40px] w-[180px]"
            ></input>
            {/* <input
              dir={`${language==0 ? "ltr" : "rtl" }`}
              type="text"
              value={number}
            onChange={(e) => setNumber(e.target.value)}
              placeholder={t("number")}
              className=" pr-4 font-sahel focus:outline-none placeholder:font-sahel placeholder:pr-2 placeholder:pl-2 placeholder:sm:text-[14px] sm:text-[14px] placeholder:text-[10px] placeholder:pb-2 rounded-[8px] sm:w-[300px] sm:h-[50px] h-[40px] w-[180px]"
            ></input> */}

             <IntlTelInput
       
        // containerClassName="pr-4 font-sahel focus:outline-none placeholder:font-sahel placeholder:pr-2 placeholder:pl-2 placeholder:sm:text-[14px] sm:text-[14px] placeholder:text-[10px] placeholder:pb-2 rounded-[8px] sm:w-[300px] sm:h-[50px] h-[40px] w-[180px]"
        value={number}
        dir={`${language==0 ? "ltr" : "rtl" }`}
        onPhoneNumberChange={handlePhoneNumberChange}
        excludeCountries={['il']}
        // separateDialCode={true}
        preferredCountries={['ir']}
        // selectedCountryData = {selectedcountrydata}
      />

            <button
              onClick={submit}
              className=" font-sahel text-white bg-[#51CE94] text-[10px] sm:text-[14px]  py-2 px-4 sm:w-[300px] h-[40px] sm:h-[50px] w-[180px] rounded-[8px] "
            >
              {t("button")}
            </button>
            {/* { language == 0 ? <ToastContainer/> :
          <ToastContainer rtl/>} */}
    </div>
  )
}

export default Form