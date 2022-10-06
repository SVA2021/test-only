import {useState} from 'react';
import {animated, useSpring} from 'react-spring';
import './AnimatedCircle.scss';
import {setCoordinates} from './AnimatedCircle.service';
import {AnimatedCircleProps} from './AnimatedCircle.types';

export const AnimatedCircle = ({qty, radius, description, currentPos, onClick, }: AnimatedCircleProps) => {

    const coordinates = setCoordinates(qty)
    const [activeClass, setActiveClass] = useState('circle__text circle__text-active')

    const handleRunning = (status: boolean) => {
        setActiveClass(status ? 'circle__text' : 'circle__text circle__text-active')
    }

    const rotate = useSpring({
        to: {rotate: -coordinates[currentPos].angle},
        config: {
            duration: 700,
        },
        onStart: () => handleRunning(true),
        onRest: () => handleRunning(false),
    })

    return (
        <animated.div
            style={rotate}
            className={'circle__center'} >
            <div className="circle__cloud">
                {
                    coordinates.map((point, index) =>
                        <p className='circle__point'
                            style={{
                                top: (1 + point.x) * radius,
                                left: (1 + point.y) * radius,
                            }}
                            key={index}
                        >
                            <p className={(index === currentPos) ? activeClass : 'circle__text'}
                                style={{transform: `rotate(${coordinates[currentPos].angle}deg)`, }}
                                onClick={() => onClick(index)}
                            >
                                {index + 1}
                                {(index === currentPos) &&
                                    <span>
                                        {description}
                                    </span>
                                }
                            </p>
                        </p>
                    )
                }
            </div>
        </animated.div>
    )
}
