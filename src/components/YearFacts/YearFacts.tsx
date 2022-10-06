import {useState} from 'react';
import "swiper/scss";
import "swiper/scss/navigation";
import {changeArrayIndexInLoop, usePrevious} from '../../app/commonFunctions';
import {AnimatedCircle} from '../AnimatedCircle';
import {AnimatedFadeIn} from '../AnimatedFadeIn';
import {AnimatedNums} from '../AnimatedNums';
import {Header} from '../Header';
import {NavBlock} from '../NavBlock';
import {SwiperStyled} from '../SwiperStyled';
import s from './YearFacts.module.scss';
import {YearFactsProps} from './YearFacts.types';

export const YearFacts = ({data}: YearFactsProps) => {

    const [currentPage, setCurrentPage] = useState<number>(0)

    const fromYear = Math.min.apply(null, data[currentPage].data.map((v) => v.year))
    const toYear = Math.max.apply(null, data[currentPage].data.map((v) => v.year))

    const prevFromYear = usePrevious(fromYear)
    const prevToYear = usePrevious(toYear)

    const changePage = (increment: boolean) => {
        setCurrentPage(changeArrayIndexInLoop(currentPage, data.length, increment))
    }

    return (
        <div className={s.wrapper}>
            <Header />
            <div className={s.years}>
                <span className={s.years_start}>
                    <AnimatedNums from={prevFromYear ?? fromYear} to={fromYear} duration={700} />
                </span>
                <span className={s.years_end}>
                    <AnimatedNums from={prevToYear ?? toYear} to={toYear} duration={700} />
                </span>
            </div>

            <div className={s.circle}>
                <AnimatedCircle
                    onClick={setCurrentPage}
                    qty={data.length}
                    radius={265}
                    currentPos={currentPage}
                    description={data[currentPage].name}
                />
            </div>

            <NavBlock
                activePage={currentPage + 1}
                maxPage={data.length}
                onChange={changePage}
            />

            <div className={s.swiper}>
                <AnimatedFadeIn>
                    <SwiperStyled items={data[currentPage].data} />
                </AnimatedFadeIn>
            </div>

        </div>
    )
}