export const roundToNumberOfDecimalPlaces = (
    value: string,
    numberOfDecimalPlaces: number
): number => parseFloat(parseFloat(value).toFixed(numberOfDecimalPlaces))
