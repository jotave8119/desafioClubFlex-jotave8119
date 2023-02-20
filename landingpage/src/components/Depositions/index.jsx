import { Swiper as SwiperComponent } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import {FcBusinesswoman} from "react-icons/fc";
import {FcManager} from "react-icons/fc";
import "./depositions.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Depositions = () => {
    return(
        <section className="depoContent">
            <h3 className="depoTitle">Depoimentos</h3>
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
              }}>
                <SwiperSlide>
                    <div className="depoList">
                        <FcBusinesswoman size={30}/>
                        <p>Maria Silva</p>
                        <span>"Atendimento excelente"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcManager size={30}/>
                        <p>José Silva</p>
                        <span>"òtimos descontos!"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcBusinesswoman size={30}/>
                        <p>Júlia Pereira</p>
                        <span>"Melhor escolha que fiz"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcManager size={30}/>
                        <p>Pedro Manoel</p>
                        <span>"muito bom!"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcBusinesswoman size={30}/>
                        <p>Bruna Alves</p>
                        <span>"Tudo perfeito!"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcManager size={30}/>
                        <p>Mauro Cezar</p>
                        <span>"Super indico!"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcBusinesswoman size={30}/>
                        <p>Mariana Silveira</p>
                        <span>"Atendimento de qualidade!"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcManager size={30}/>
                        <p>João Oliveira</p>
                        <span>"mudou a minha vida"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcBusinesswoman size={30}/>
                        <p>Laura Muller</p>
                        <span>"Só facilidades"</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="depoList">
                        <FcManager size={30}/>
                        <p>Arthur Rodrigues</p>
                        <span>"Variedade sem igual"</span>
                    </div>
                </SwiperSlide>
            </SwiperComponent>
        </section>
    )
};

export default Depositions;