import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import styles from '../styles/Index.module.scss'


const Index = () => {
    return (
      <MainContainer keywords={"main page"}>
        <Header></Header>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.slide}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}></div>
          </SwiperSlide>
        </Swiper>
      </MainContainer>
    );
};

export default Index;
