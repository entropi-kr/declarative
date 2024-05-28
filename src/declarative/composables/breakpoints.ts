import {useBreakpoints} from "@vueuse/core";
import {inject} from "vue";

export function useTailwindBreakpoints() {
    const config = inject<any>("tailwind-config");
    const screens = config.theme.screens;

    function parse(input: string) {
        return parseInt(input.replace("px", ""));
    }

    return useBreakpoints({
        sm: parse(screens.sm),
        md: parse(screens.sm),
        lg: parse(screens.sm),
        xl: parse(screens.sm),
        '2xl': parse(screens["2xl"]),
    });
}