import {ReactNode} from 'react'
import {animated, useSpring} from 'react-spring'

export interface AnimatedFadeInProps {
    children: ReactNode
}

export const AnimatedFadeIn = ({children}: AnimatedFadeInProps) => {
    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}, 
        reset: true,
        config: {
            duration: 700,
        },
    })
    return <animated.div style={props} >{children}</animated.div>
}
