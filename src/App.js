import React ,{useState} from 'react';
import './App.css';
import data from './data/data';
import Texts from './Components/Texts';
import  ChangeLanguage  from './Components/ChangeLanguage';
import Video from "./Components/Video"
import Form from "./Components/Form"



function App() {

  const [language,setLanguage] = useState(2)  

  return (
    <div className='  relative sm:h-screen   bg-[#EFA77A]'>

    <div className= " bg-[#EFA77A] flex sm:h-full  flex-col-reverse sm:flex-row-reverse">
      {/* image */}
      <img src={data[0].src} alt="" className=" h-[200px] sm:h-[607px]"></img>
      {/* end image */}
      {/* right secton  */}
      <div className=' w-full   bg-[#EFA77A] '>
        {/*  start top section  */}
          <div className={` w-full flex sm:items-center sm:flex-row flex-col-reverse  sm:gap-[${ language!=2 ? 15 : 65}px] gap-[20px]    sm:justify-end `}>
              <Texts language = {language}  setLanguage ={setLanguage} />
              <div className=' flex justify-center items-center mt-[80px]'>
              <div className=' h-[1px] w-[90%] bg-[#BE794E] sm:hidden block'></div>
              </div>
              <div className=' justify-between items-center flex flex-row-reverse gap-4'>
                <img src={data[5].src} className=' block sm:hidden absolute top-[20px] right-4'></img>
                <div className=' flex flex-col top-[20px] right-[100px] absolute'>
                <span className=' text-[12px] block sm:hidden'>we stand with</span>
                  <span className=' sm:hidden block'>Palestine</span>
                </div>
              <ChangeLanguage language = {language}  setLanguage ={setLanguage} />
              </div>
          </div>
          {/* end top section */}
             {/* start bottom section */}
             <div className=' sm:absolute sm:bottom-16 sm:gap-32  ml-[170px] flex sm:flex-row flex-col sm:mr-0 mr-[170px] gap-10  justify-center items-center'>
              <div className=' flex justify-center items-center gap-10'>
              <img src={data[4].src} className=' sm:block hidden mb-20 '></img>
            <Form language={language} setLanguage={setLanguage}/> 
              
              </div>
            <Video/>
            
          </div>
          {/* end bottom section  */}
      </div>
      {/* end right section */}
    </div>
    
    </div>
  );
}

export default App;
