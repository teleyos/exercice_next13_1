import {createTheme} from "@kuma-ui/core";

const theme = createTheme({
    colors: {
        red: {
            100: "red",
        },
        blue: "blue",
    },
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1400px",
        xxl: "2000px"
    },
    components: {
        Button: {
            baseStyle: {
                bg: "black", // bg is short for background
                p: "10px", // p is short for padding
            },
        },
    },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
    export interface Theme extends UserTheme {
    }
}

export default theme;
