import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Index = () => {
    return (
      <MainContainer keywords={"main page"}>
        <Header></Header>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </MainContainer>
    );
};

export default Index;
