import {useEffect, useRef} from 'react';

export function usePrevious(value: any) {
	const ref = useRef(null);
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

export const changeArrayIndexInLoop = (actual: number, length: number, increment: boolean): number => {
	return increment
		? actual === length - 1
			? 0
			: ++actual
		: actual === 0
			? length - 1
			: --actual
}