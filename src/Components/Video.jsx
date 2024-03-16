import React , {useRef , useState , useEffect} from 'react'
import data from "../data/data"
import { FaPlay } from "react-icons/fa";


const Video = () => {

  // const [isPlaying, setIsPlaying] = useState();
  // const videoRef = useRef(null);

  // const handlePlayPause = () => {
  //   const video = videoRef.current;
  //   if (video.paused) {
  //     video.play();
  //     setIsPlaying(true);
  //   } else {
  //     video.pause();
  //     setIsPlaying(false);
  //   }
  // };

  // useEffect(() => {
  //   const getparticipants = () => {
     
  //     if(videoRef.paused){
  //       setIsPlaying(false)

  //     }
  //     else{
        
  //       setIsPlaying(true)
  //     }
  //   };

  //   getparticipants();
  // }, [videoRef.paused]);

  return (
    <div className=" mt-4 scale-90 sm:w-[300px] m-[-5px] mb-[-40px] relative sm:h-[192px] w-[250px] h-[150px]  rounded-[16px] bg-[#C6835A]">
    
         <video
            controls
            //  onClick={handlePlayPause}
              // ref={videoRef}
              className="flex justify-center  items-center sm:scale-110  rounded-[16px]  absolute sm:top-[5px] top-[-2px] right-[-10px] sm:right-[-25px]"
            >
              <source src={data[3].src} type="video/mp4" />
            </video>
            {/* {!isPlaying && (
              // <div className=" w-full justify-center items-center flex">
              <button
                onClick={handlePlayPause}
                className=" p-2  bg-white  absolute sm:top-[100px] top-[52px] right-[92px] sm:right-[150px] rounded-full"
              >
                <FaPlay size={20} className=" ml-1 text-[#E35C5C]" />
              </button>
              // </div>
            )} */}
    </div>
  )
}

export default Video