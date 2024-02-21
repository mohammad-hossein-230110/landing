import React,{useState ,useEffect, createContext} from 'react'
import { BiSolidLeftArrow } from "react-icons/bi";




const ChangeLanguage = ({language , setLanguage}) => {
  
  


  return (

  
    <div className=' absolute top-[20px] left-4 sm:static  flex flex-row-reverse sm:flex-col mr-6  sm:mb-[90px] gap-4'>
          <div onClick={() => {
              setLanguage(0);
              
            }} className=' hover:cursor-pointer flex justify-center items-center gap-1'>
            <span className={` ${language==0 ?  "text-white" : "text-[#BF7140]" } font-sans text-[14px] `}>English</span>
            {language==0 &&  <BiSolidLeftArrow className=' sm:block hidden text-white'/>}
          </div>
          <div onClick={() => {
              setLanguage(1);
            }} className=' hover:cursor-pointer flex justify-center items-center gap-1 '>
            <span className={` ${language==1 ?  "text-white" : "text-[#BF7140]" } font-sahel text-[14px] `}>العربیه</span>
            {language==1 &&  <BiSolidLeftArrow className='sm:block hidden text-white'/>}
             
          </div>
          <div 
          onClick={() => {
            setLanguage(2);
          }} className=' hover:cursor-pointer flex justify-center items-center gap-1'>
            <span className={` ${language==2 ?  "text-white" : "text-[#BF7140]" } font-sahel tetx-[14px] `}>فارسی</span>
            {language==2 &&  <BiSolidLeftArrow className='sm:block hidden text-white'/>}
            
          </div>
         
    </div>
  )
}

export default ChangeLanguage