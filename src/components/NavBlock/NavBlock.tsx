import s from './NavBlock.module.scss';
import {NavBlockProps} from './NavBlock.types';

export const NavBlock = ({activePage, maxPage, onChange}: NavBlockProps) => {

    return (
        <div className={s.navigation}>
            <p className={s.navigation__pages}>
                {`${activePage}/${maxPage}`}
            </p>
            <div className={s.navigation__buttons}>
                <button className={s.navigation__button}
                    disabled={activePage === 1}
                    onClick={() => onChange(false)}
                >
                    {`<`}
                </button>
                <button className={s.navigation__button}
                    disabled={activePage === maxPage}
                    onClick={() => onChange(true)}
                >
                    {`>`}
                </button>
            </div>
        </div>
    )
}