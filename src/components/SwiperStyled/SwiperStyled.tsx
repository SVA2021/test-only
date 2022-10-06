import {SwiperStyledProps} from "./SwiperStyled.types"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import {FactCard} from "../FactCard";
import './SwiperStyled.scss'
import useWindowSize from "../../app/useWindowSize";
import {useEffect, useState} from "react";

export const SwiperStyled = ({items}: SwiperStyledProps) => {

    const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop')
    const realWidth = useWindowSize()

    useEffect(() => {
        if (!realWidth.width) return
        if (realWidth.width < 1440 && deviceType !== 'mobile') setDeviceType('mobile')
        if (realWidth.width >= 1440 && deviceType !== 'desktop') setDeviceType('desktop')
    }, [realWidth.width, deviceType,])

    return (
        <Swiper
            navigation={true}
            pagination={deviceType === 'mobile'}
            modules={[Navigation, Pagination]}
            slidesPerView={"auto"}
            spaceBetween={deviceType === 'desktop' ? 80 : 25}
            className='mySwiper'>
            {items.map((item) =>
                <SwiperSlide className='mySwiper__slide' key={item.year} >
                    <FactCard item={item} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}