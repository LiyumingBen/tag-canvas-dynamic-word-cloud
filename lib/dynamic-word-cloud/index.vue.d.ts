import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    data: {
        required: true;
        type: PropType<{
            name: string;
            value: number;
        }[]>;
    };
    canvasId: {
        type: StringConstructor;
        default: string;
    };
    labelLength: {
        type: NumberConstructor;
        default: number;
    };
    colorList: {
        type: any;
        default: () => string[];
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltips: {
        type: BooleanConstructor;
        default: boolean;
    };
    option: {
        type: any;
        default: () => void;
    };
}, {
    state: {
        containerRef: HTMLDivElement | null;
        canvasWidth: number;
        canvasHeight: number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        required: true;
        type: PropType<{
            name: string;
            value: number;
        }[]>;
    };
    canvasId: {
        type: StringConstructor;
        default: string;
    };
    labelLength: {
        type: NumberConstructor;
        default: number;
    };
    colorList: {
        type: any;
        default: () => string[];
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltips: {
        type: BooleanConstructor;
        default: boolean;
    };
    option: {
        type: any;
        default: () => void;
    };
}>>, {
    canvasId: string;
    labelLength: number;
    colorList: any;
    showValue: boolean;
    showTooltips: boolean;
    option: any;
}, {}>;
export default _default;
