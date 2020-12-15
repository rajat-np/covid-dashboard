export const numberFormatter = num => {

    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e+9

        ? Math.abs(Number(num)) / 1.0e+9 + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(num)) >= 1.0e+6

            ? Math.abs(Number(num)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(num)) >= 1.0e+3

                ? Math.abs(Number(num)) / 1.0e+3 + "K"

                : Math.abs(Number(num));

}

export const numberWithCommas = n => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}