import { Swiper as SwiperComponent } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import {BsBuilding} from "react-icons/bs";
import "./partnes.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Partnes = () => {

  return (
    <section className="partnesContent">
      <h3 className="partnesTitle">Empresas parceiras</h3>
      <SwiperComponent 
      modules={[Navigation, Pagination]}  
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: false }}
      scrollbar={ {draggable: true }}
      style={{
          "--swiper-navigation-color": "#13daa5",
          "--swiper-pagination-color": "#13daa5",
          display: "flex",
          justifyContent: "center",
          padding: 10,
          alignItems: "center",
          gap: 10
        }}
        >
        <SwiperSlide>
          <div className="partnesList">
            <BsBuilding size={50}/>
            <p>Empresa 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 7</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 8</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 9</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partnesList">
          <BsBuilding size={50}/>
            <p>Empresa 10</p>
          </div>
        </SwiperSlide>
      </SwiperComponent>
    </section>
  );
};

export default Partnes;
