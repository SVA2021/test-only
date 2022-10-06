import {SwiperStyledProps} from "./SwiperStyled.types"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import {FactCard} from "../FactCard";
import './SwiperStyled.scss'

export const SwiperStyled = ({items}: SwiperStyledProps) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={80}
            className='mySwiper'>
            {items.map((item) =>
                <SwiperSlide className='mySwiper__slide' key={item.year} >
                    <FactCard item={item} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}