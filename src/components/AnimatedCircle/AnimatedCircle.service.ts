export const setCoordinates = (qty: number) => {
    let result = []
    const shiftedAngleRad = 1 * Math.PI * (125 / 360) // 125 found by experiment way
    const currentAngleRad = 2 * Math.PI / qty
    for (let i = 0; i < qty; i++) {
        result.push({
            x: Math.sin(i * currentAngleRad - shiftedAngleRad),
            y: Math.cos(i * currentAngleRad - shiftedAngleRad),
            angle: 360 * i / qty
        })
    }
    return result
}