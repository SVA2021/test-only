import s from './FactCard.module.scss'
import {FactCardProps} from './FactCard.types'

export const FactCard = ({item}: FactCardProps) => {
    return (
        <div className={s.card} >
            <h3 className={s.card__title} >
                {item.year}
            </h3>
            <p className={s.card__text} >
                {item.description}
            </p>
        </div>
    )
}