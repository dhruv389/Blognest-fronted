import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../index.css";
import bg2 from "../Images/dh1.mp4"
import invest from "../Images/investment.mp4";
import educ from "../Images/education.mp4";
import art from "../Images/art.mp4";
import weat from "../Images/weather.mp4";
import bus from "../Images/business.mp4";
import agr from "../Images/agriculture.mp4";
// import required modules

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={bg2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="content">
            <h1 style={{fontSize:"3vh"}}>🌈Welcome To BlogNest </h1>
            <b style={{color:"#252542"}}><FaQuoteLeft size={"30px"} />Write, Share, Learn from Other Blogs - Expand Horizons..




<FaQuoteRight size={"30px"}/></b>
          </div>
        </SwiperSlide>

<SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={agr} type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="content">
            <h1>🌿AGRICULTURE🍁 </h1>
            <p><FaQuoteLeft size={"30px"}/> Cultivating insights in the field of farming and agribusiness, nurturing growth from seed to harvest.! <FaQuoteRight size={"30px"}/></p>
          </div>
        </SwiperSlide>

<SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={educ} type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="content">
            <h1>📖EDUCATION🏫 </h1>
            <p><FaQuoteLeft  size={"30px"}/>Empowering minds through knowledge-sharing, where learning knows no bounds and curiosity fuels progress.! <FaQuoteRight size={"30px"}/></p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={art} type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="content">
            <h1>🎨ART🎨 </h1>
            <p><FaQuoteLeft  size={"30px"}/>Celebrating the beauty of expression, where imagination meets craftsmanship to paint vibrant narratives.! <FaQuoteRight size={"30px"}/></p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={weat} type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="content">
            <h1>🍂 WEATHER 🍃 </h1>
            <p><FaQuoteLeft  size={"30px"}/> Tracking nature's rhythm, from sunny days to stormy skies, decoding the language of the elements.! <FaQuoteRight size={"30px"}/></p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={invest} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <h1>💱INVESTMENT💱 </h1>
            <p><FaQuoteLeft  size={"30px"}/> Navigating the complexities of finance and wealth management, forging pathways to financial prosperity !! <FaQuoteRight size={"30px"}/></p>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          {" "}
          <video autoPlay loop muted playsInline>
            <source src={bus} type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="content">
            <h1>💰BUSINESS🧑‍💼 </h1>
            <p><FaQuoteLeft  size={"30px"}/> Unraveling the dynamics of commerce, entrepreneurship, and innovation, shaping tomorrow's economic landscapes.! <FaQuoteRight size={"30px"}/></p>
          </div>
        </SwiperSlide>
        
       
       
      </Swiper>
    </>
  );
};

export default Slider;
