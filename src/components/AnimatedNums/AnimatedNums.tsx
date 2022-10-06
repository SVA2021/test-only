import {animated, useSpring} from 'react-spring'

export interface AnimatedNumsProps {
    from: number
    to: number
    duration: number
}

export const AnimatedNums = ({from, to, duration}: AnimatedNumsProps) => {
    const {number} = useSpring({
        reset: true,
        from: {number: from},
        number: to,
        config: {
            duration: duration,
        }
    })
    return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
}
