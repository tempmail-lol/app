/**
 * Formats a number by adding commas every
 * three numbers, right to left.
 * 
 * Example: 12,345,678,900
 * 
 * @param value {number} the number to format
 * @returns {string} formatted number
 */
export default function(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
