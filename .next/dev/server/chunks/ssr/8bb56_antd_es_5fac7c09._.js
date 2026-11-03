module.exports = [
"[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDocument",
    ()=>isDocument,
    "isFunction",
    ()=>isFunction,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isNumber",
    ()=>isNumber,
    "isPlainObject",
    ()=>isPlainObject,
    "isPrimitive",
    ()=>isPrimitive,
    "isString",
    ()=>isString,
    "isThenable",
    ()=>isThenable,
    "isTransitionEvent",
    ()=>isTransitionEvent,
    "isWindow",
    ()=>isWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
;
const isNumber = (val)=>{
    return typeof val === 'number' && !Number.isNaN(val);
};
const isString = (val)=>{
    return typeof val === 'string';
};
const isPlainObject = (val)=>{
    return val !== null && typeof val === 'object';
};
const isFunction = (val)=>{
    return typeof val === 'function';
};
const isThenable = (val)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(val) && isFunction(val.then);
};
const isPrimitive = (val)=>{
    return typeof val !== 'object' && !isFunction(val) || val === null;
};
const isTransitionEvent = (event)=>{
    return isPlainObject(event) && 'propertyName' in event && isString(event.propertyName);
};
const isWindow = (val)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(val)) {
        return false;
    }
    return val === val.window;
};
const isDocument = (val)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(val)) {
        return false;
    }
    return val instanceof Document || val.constructor.name === 'HTMLDocument' || val.nodeType === window.Node.DOCUMENT_NODE;
};
const isHTMLElement = (val)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(val)) {
        return false;
    }
    return typeof HTMLElement !== 'undefined' && val instanceof HTMLElement;
};
}),
"[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigConsumer",
    ()=>ConfigConsumer,
    "ConfigContext",
    ()=>ConfigContext,
    "Variants",
    ()=>Variants,
    "defaultIconPrefixCls",
    ()=>defaultIconPrefixCls,
    "defaultPrefixCls",
    ()=>defaultPrefixCls,
    "useComponentConfig",
    ()=>useComponentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const defaultPrefixCls = 'ant';
const defaultIconPrefixCls = 'anticon';
const Variants = [
    'outlined',
    'borderless',
    'filled',
    'underlined'
];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) {
        return customizePrefixCls;
    }
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
const ConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ConfigContext);
    const { getPrefixCls, direction, getPopupContainer, renderEmpty } = context;
    const propValue = context[propName];
    return {
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT,
        ...propValue,
        getPrefixCls,
        direction,
        getPopupContainer,
        renderEmpty
    };
}
}),
"[project]/invest/node_modules/antd/es/version/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '6.6.6';
}),
"[project]/invest/node_modules/antd/es/version/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/version/version.js [app-ssr] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/invest/node_modules/antd/es/theme/themes/seed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultPresetColors",
    ()=>defaultPresetColors
]);
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
   * @deprecated Use magenta instead
   */ pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = {
    // preset color palettes
    ...defaultPresetColors,
    // Color
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: 'solid',
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Focus Outline
    focusOutline: true,
    // Motion
    motion: true
};
const __TURBOPACK__default__export__ = seedToken;
}),
"[project]/invest/node_modules/antd/es/theme/interface/presetColors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetColors",
    ()=>PresetColors
]);
const PresetColors = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
];
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genColorMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/FastColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/interface/presetColors.js [app-ssr] (ecmascript)");
;
;
function genColorMapToken(seed, { generateColorPalettes, generateNeutralColorPalettes }) {
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](errorColors[1]).mix(new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](errorColors[3]), 50).toHexString();
    const presetColorTokens = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetColors"].forEach((colorKey)=>{
        const colorBase = seed[colorKey];
        if (colorBase) {
            const colorPalette = generateColorPalettes(colorBase);
            presetColorTokens[`${colorKey}Hover`] = colorPalette[5];
            presetColorTokens[`${colorKey}Active`] = colorPalette[7];
        }
    });
    return {
        ...neutralColors,
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        ...presetColorTokens,
        colorBgMask: new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"]('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    };
}
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genRadius.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    // radiusLG
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
        radiusLG = 16;
    }
    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
    } else if (radiusBase >= 16) {
        radiusSM = 8;
    }
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
    } else if (radiusBase >= 6) {
        radiusXS = 2;
    }
    // radiusOuter
    if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
    } else if (radiusBase >= 8) {
        radiusOuter = 6;
    }
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
const __TURBOPACK__default__export__ = genRadius;
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genCommonMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genRadius.js [app-ssr] (ecmascript)");
;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return {
        // motion
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
        // line
        lineWidthBold: lineWidth + 1,
        // radius
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(borderRadius)
    };
}
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
    };
};
const __TURBOPACK__default__export__ = genControlHeight;
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getFontSizes,
    "getLineHeight",
    ()=>getLineHeight
]);
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.E ** (i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-ssr] (ecmascript)");
;
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
const __TURBOPACK__default__export__ = genFontMapToken;
}),
"[project]/invest/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genSizeMapToken
]);
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3) // 4
    };
}
}),
"[project]/invest/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlphaColor",
    ()=>getAlphaColor,
    "getSolidColor",
    ()=>getSolidColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/FastColor.js [app-ssr] (ecmascript)");
;
const getAlphaColor = (baseColor, alpha)=>new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](baseColor);
    return instance.darken(brightness).toHexString();
};
}),
"[project]/invest/node_modules/antd/es/theme/themes/default/colors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateColorPalettes",
    ()=>generateColorPalettes,
    "generateNeutralColorPalettes",
    ()=>generateNeutralColorPalettes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/colors/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/colors/es/generate.js [app-ssr] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [app-ssr] (ecmascript)");
;
;
const generateColorPalettes = (baseColor)=>{
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor, shadowColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    const colorShadow = shadowColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorShadow,
        colorText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.88),
        colorTextSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.65),
        colorTextTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.45),
        colorTextQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.25),
        colorFill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.15),
        colorFillSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.06),
        colorFillTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.04),
        colorFillQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.02),
        colorBgSolid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 1),
        colorBgSolidHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.75),
        colorBgSolidActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.95),
        colorBgLayout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 4),
        colorBgContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgElevated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgSpotlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderDisabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 6)
    };
};
}),
"[project]/invest/node_modules/antd/es/theme/themes/default/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>derivative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/colors/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/colors/es/generate.js [app-ssr] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/colors/es/presets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/seed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/default/colors.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function derivative(token) {
    // pink is deprecated name of magenta, keep this for backwards compatibility
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetPrimaryColors"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetPrimaryColors"].magenta;
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetPalettes"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetPalettes"].magenta;
    const colorPalettes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPresetColors"]).map((colorKey)=>{
        const colors = token[colorKey] === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetPrimaryColors"][colorKey] ? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetPalettes"][colorKey] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev[`${colorKey}-${i + 1}`] = colors[i];
            prev[`${colorKey}${i + 1}`] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = {
            ...prev,
            ...cur
        };
        return prev;
    }, {});
    return {
        ...token,
        ...colorPalettes,
        // Colors
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token, {
            generateColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColorPalettes"],
            generateNeutralColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateNeutralColorPalettes"]
        }),
        // Font
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token.fontSize),
        // Size
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // Height
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // Others
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token)
    };
}
}),
"[project]/invest/node_modules/antd/es/theme/themes/default/theme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/default/index.js [app-ssr] (ecmascript)");
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = defaultTheme;
}),
"[project]/invest/node_modules/antd/es/theme/themes/default/theme.js [app-ssr] (ecmascript) <export default as defaultTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/default/theme.js [app-ssr] (ecmascript)");
}),
"[project]/invest/node_modules/antd/es/theme/context.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignTokenContext",
    ()=>DesignTokenContext,
    "defaultConfig",
    ()=>defaultConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/seed.js [app-ssr] (ecmascript)");
;
;
;
const defaultConfig = {
    token: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    override: {
        override: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    hashed: true
};
const DesignTokenContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(defaultConfig);
}),
"[project]/invest/node_modules/antd/es/theme/util/getAlphaColor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/FastColor.js [app-ssr] (ecmascript)");
;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](frontColor).toRgb();
    if (originAlpha < 1) {
        return frontColor;
    }
    const { r: bR, g: bG, b: bB } = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"]({
                r,
                g,
                b,
                a: Math.round(fA * 100) / 100
            }).toRgbString();
        }
    }
    // fallback
    /* istanbul ignore next */ return new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"]({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
const __TURBOPACK__default__export__ = getAlphaColor;
}),
"[project]/invest/node_modules/antd/es/theme/util/alias.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/fast-color/es/FastColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/seed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/getAlphaColor.js [app-ssr] (ecmascript)");
;
;
;
function formatToken(derivativeToken) {
    const { override, ...restToken } = derivativeToken;
    const overrideTokens = {
        ...override
    };
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = {
        ...restToken,
        ...overrideTokens
    };
    const shadowBaseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FastColor"](mergedToken.colorShadow);
    const shadowBaseAlpha = shadowBaseColor.a;
    const getShadowColor = (alpha)=>shadowBaseColor.clone().setA(shadowBaseAlpha * alpha).toRgbString();
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    const screenXXXL = 1920;
    // Motion
    if (mergedToken.motion === false) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    // Generate alias token
    const aliasToken = {
        ...mergedToken,
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        colorErrorAffix: mergedToken.colorError,
        colorWarningAffix: mergedToken.colorWarning,
        // Font
        fontHeight: Math.round(mergedToken.fontSize * mergedToken.lineHeight),
        fontHeightSM: Math.round(mergedToken.fontSizeSM * mergedToken.lineHeightSM),
        fontHeightLG: Math.round(mergedToken.fontSizeLG * mergedToken.lineHeightLG),
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.focusOutline === false ? 0 : mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowSecondary: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowTertiary: `
      0 1px 2px 0 ${getShadowColor(0.05)},
      0 1px 6px -1px ${getShadowColor(0.03)},
      0 2px 4px 0 ${getShadowColor(0.03)}
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        screenXXLMax: screenXXXL - 1,
        screenXXXL,
        screenXXXLMin: screenXXXL,
        boxShadowPopoverArrow: `2px 2px 5px ${getShadowColor(0.05)}`,
        dropShadowPopover: `drop-shadow(0 6px 16px ${getShadowColor(0.08)}) drop-shadow(0 3px 6px ${getShadowColor(0.12)}) drop-shadow(0 9px 28px ${getShadowColor(0.05)})`,
        boxShadowCard: `
      0 1px 2px -2px ${getShadowColor(0.16)},
      0 3px 6px 0 ${getShadowColor(0.12)},
      0 5px 12px 4px ${getShadowColor(0.09)}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 ${getShadowColor(0.08)},
      -3px 0 6px -4px ${getShadowColor(0.12)},
      -9px 0 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 ${getShadowColor(0.08)},
      3px 0 6px -4px ${getShadowColor(0.12)},
      9px 0 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 ${getShadowColor(0.08)},
      0 -3px 6px -4px ${getShadowColor(0.12)},
      0 -9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowTabsOverflowLeft: `inset 10px 0 8px -8px ${getShadowColor(0.08)}`,
        boxShadowTabsOverflowRight: `inset -10px 0 8px -8px ${getShadowColor(0.08)}`,
        boxShadowTabsOverflowTop: `inset 0 10px 8px -8px ${getShadowColor(0.08)}`,
        boxShadowTabsOverflowBottom: `inset 0 -10px 8px -8px ${getShadowColor(0.08)}`,
        // Override AliasToken
        ...overrideTokens
    };
    return aliasToken;
}
}),
"[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useToken,
    "getComputedToken",
    ()=>getComputedToken,
    "ignore",
    ()=>ignore,
    "unitless",
    ()=>unitless
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [app-ssr] (ecmascript) <export default as useCacheToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/version/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/default/theme.js [app-ssr] (ecmascript) <export default as defaultTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/themes/seed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/alias.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const ignore = {
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true,
    screenXXLMax: true,
    screenXXXL: true,
    screenXXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override, ...components } = overrideToken;
    // Merge with override
    let mergedDerivativeToken = {
        ...derivativeToken,
        override
    };
    // Format if needed
    mergedDerivativeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedDerivativeToken);
    if (components) {
        Object.entries(components).forEach(([key, value])=>{
            const { theme: componentTheme, ...componentTokens } = value;
            let mergedComponentToken = componentTokens;
            if (componentTheme) {
                mergedComponentToken = getComputedToken({
                    ...mergedDerivativeToken,
                    ...componentTokens
                }, {
                    override: componentTokens
                }, componentTheme);
            }
            mergedDerivativeToken[key] = mergedComponentToken;
        });
    }
    return mergedDerivativeToken;
};
function useToken() {
    const { token: rootDesignToken, hashed, theme, override, cssVar: ctxCssVar, zeroRuntime } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"]);
    const { csp, getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const cssVar = {
        prefix: ctxCssVar?.prefix ?? getPrefixCls(),
        key: ctxCssVar?.key ?? 'css-var-root'
    };
    const salt = `${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]}-${hashed || ''}`;
    const mergedTheme = theme || __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__["defaultTheme"];
    const [token, hashId, realToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__["useCacheToken"])(mergedTheme, [
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken,
        cssVar: {
            ...cssVar,
            unitless,
            ignore,
            preserve
        },
        nonce: csp?.nonce
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar,
        !!zeroRuntime
    ];
}
}),
"[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript) <export default as useToken>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript)");
}),
"[project]/invest/node_modules/antd/es/_util/responsiveObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "matchScreen",
    ()=>matchScreen,
    "responsiveArray",
    ()=>responsiveArray,
    "responsiveArrayReversed",
    ()=>responsiveArrayReversed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
;
;
;
const responsiveArray = [
    'xxxl',
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const responsiveArrayReversed = [].concat(responsiveArray).reverse();
const getResponsiveMap = (token)=>({
        xs: `(max-width: ${token.screenXSMax}px)`,
        sm: `(min-width: ${token.screenSM}px)`,
        md: `(min-width: ${token.screenMD}px)`,
        lg: `(min-width: ${token.screenLG}px)`,
        xl: `(min-width: ${token.screenXL}px)`,
        xxl: `(min-width: ${token.screenXXL}px)`,
        xxxl: `(min-width: ${token.screenXXXL}px)`
    });
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */ const validateBreakpoints = (token)=>{
    const indexableToken = token;
    const revBreakpoints = [].concat(responsiveArray).reverse();
    revBreakpoints.forEach((breakpoint, i)=>{
        const breakpointUpper = breakpoint.toUpperCase();
        const screenMin = `screen${breakpointUpper}Min`;
        const screen = `screen${breakpointUpper}`;
        if (!(indexableToken[screenMin] <= indexableToken[screen])) {
            throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
        }
        if (i < revBreakpoints.length - 1) {
            const screenMax = `screen${breakpointUpper}Max`;
            if (!(indexableToken[screen] <= indexableToken[screenMax])) {
                throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
            }
            const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
            const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
            if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
                throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
            }
        }
    });
    return token;
};
const matchScreen = (screens, screenSizes)=>{
    if (!screenSizes) {
        return;
    }
    for (const breakpoint of responsiveArray){
        if (screens[breakpoint] && screenSizes?.[breakpoint] !== undefined) {
            return screenSizes[breakpoint];
        }
    }
};
const useResponsiveObserver = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const responsiveMap = getResponsiveMap(validateBreakpoints(token));
    // To avoid repeat create instance, we add `useMemo` here.
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const subscribers = new Map();
        let subUid = -1;
        let screens = {};
        return {
            responsiveMap,
            matchHandlers: {},
            dispatch (pointMap) {
                screens = pointMap;
                subscribers.forEach((func)=>{
                    func(screens);
                });
                return subscribers.size >= 1;
            },
            subscribe (func) {
                if (!subscribers.size) {
                    this.register();
                }
                subUid += 1;
                subscribers.set(subUid, func);
                func(screens);
                return subUid;
            },
            unsubscribe (paramToken) {
                subscribers.delete(paramToken);
                if (!subscribers.size) {
                    this.unregister();
                }
            },
            register () {
                Object.entries(responsiveMap).forEach(([screen, mediaQuery])=>{
                    const listener = ({ matches })=>{
                        this.dispatch({
                            ...screens,
                            [screen]: matches
                        });
                    };
                    const mql = window.matchMedia(mediaQuery);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(mql.addEventListener)) {
                        mql.addEventListener('change', listener);
                    }
                    this.matchHandlers[mediaQuery] = {
                        mql,
                        listener
                    };
                    listener(mql);
                });
            },
            unregister () {
                Object.values(responsiveMap).forEach((mediaQuery)=>{
                    const handler = this.matchHandlers[mediaQuery];
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(handler?.mql.removeEventListener)) {
                        handler.mql.removeEventListener('change', handler?.listener);
                    }
                });
                subscribers.clear();
            }
        };
    }, [
        responsiveMap
    ]);
};
const __TURBOPACK__default__export__ = useResponsiveObserver;
}),
"[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WarningContext",
    ()=>WarningContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "devUseWarning",
    ()=>devUseWarning,
    "noop",
    ()=>noop,
    "resetWarned",
    ()=>resetWarned,
    "useDevWarning",
    ()=>useDevWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript) <export default as warning>");
;
;
function noop() {}
const { resetWarned: rcResetWarned } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"];
let deprecatedWarnList = null;
function resetWarned() {
    deprecatedWarnList = null;
    rcResetWarned();
}
let _warning = noop;
if ("TURBOPACK compile-time truthy", 1) {
    _warning = (valid, component, message)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(valid, `[antd: ${component}] ${message}`);
        // StrictMode will inject console which will not throw warning in React 17.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
}
const warning = _warning;
const WarningContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const useDevWarning = ("TURBOPACK compile-time truthy", 1) ? (component)=>{
    const { strict } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](WarningContext);
    const typeWarning = (valid, type, message)=>{
        if (!valid) {
            if (strict === false && type === 'deprecated') {
                const existWarning = deprecatedWarnList;
                if (!deprecatedWarnList) {
                    deprecatedWarnList = {};
                }
                deprecatedWarnList[component] = deprecatedWarnList[component] || [];
                if (!deprecatedWarnList[component].includes(message || '')) {
                    deprecatedWarnList[component].push(message || '');
                }
                // Warning for the first time
                if (!existWarning) {
                    console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
                }
            } else {
                ("TURBOPACK compile-time truthy", 1) ? warning(valid, component, message) : "TURBOPACK unreachable";
            }
        }
    };
    typeWarning.deprecated = (valid, oldProp, newProp, message = '')=>{
        typeWarning(valid, 'deprecated', `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ''}`);
    };
    return typeWarning;
} : "TURBOPACK unreachable";
const devUseWarning = useDevWarning;
const __TURBOPACK__default__export__ = warning;
}),
"[project]/invest/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */ const useCSSVarCls = (prefixCls)=>`${prefixCls}-css-var`;
const __TURBOPACK__default__export__ = useCSSVarCls;
}),
"[project]/invest/node_modules/antd/es/config-provider/SizeContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeContextProvider",
    ()=>SizeContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const SizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
const SizeContextProvider = ({ children, size })=>{
    const originSize = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SizeContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SizeContext.Provider, {
        value: size || originSize
    }, children);
};
const __TURBOPACK__default__export__ = SizeContext;
}),
"[project]/invest/node_modules/antd/es/config-provider/hooks/useSize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/SizeContext.js [app-ssr] (ecmascript)");
;
;
;
const useSize = (customSize)=>{
    const size = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedSize = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!customSize) {
            return size;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(customSize)) {
            return customSize ?? size;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(customSize)) {
            return customSize(size);
        }
        return size;
    }, [
        customSize,
        size
    ]);
    return mergedSize;
};
const __TURBOPACK__default__export__ = useSize;
}),
"[project]/invest/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForceUpdate",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useForceUpdate = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useReducer((ori)=>ori + 1, 0);
};
}),
"[project]/invest/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/responsiveObserver.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useBreakpoint(refreshOnChange = true, defaultScreens = {}) {
    const screensRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(defaultScreens);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const responsiveObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])(()=>{
        const token = responsiveObserver.subscribe((supportScreens)=>{
            screensRef.current = supportScreens;
            if (refreshOnChange) {
                forceUpdate();
            }
        });
        return ()=>responsiveObserver.unsubscribe(token);
    }, [
        refreshOnChange
    ]);
    return screensRef.current;
}
const __TURBOPACK__default__export__ = useBreakpoint;
}),
"[project]/invest/node_modules/antd/es/avatar/AvatarContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const AvatarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const __TURBOPACK__default__export__ = AvatarContext;
}),
"[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearFix",
    ()=>clearFix,
    "genCommonStyle",
    ()=>genCommonStyle,
    "genFocusOutline",
    ()=>genFocusOutline,
    "genFocusStyle",
    ()=>genFocusStyle,
    "genIconStyle",
    ()=>genIconStyle,
    "genLinkStyle",
    ()=>genLinkStyle,
    "operationUnit",
    ()=>operationUnit,
    "resetComponent",
    ()=>resetComponent,
    "resetIcon",
    ()=>resetIcon,
    "textEllipsis",
    ()=>textEllipsis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
"use client";
;
const textEllipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
};
const resetComponent = (token, needInheritFontFamily = false)=>({
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: token.colorText,
        fontSize: token.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token.lineHeight,
        listStyle: 'none',
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    });
const resetIcon = ()=>({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textAlign: 'center',
        textTransform: 'none',
        // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
        verticalAlign: '-0.125em',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '> *': {
            lineHeight: 1
        },
        svg: {
            display: 'inline-block',
            verticalAlign: 'inherit'
        }
    });
const loadingCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('loadingCircle', {
    '100%': {
        transform: 'rotate(360deg)'
    }
});
const clearFix = ()=>({
        // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
        '&::before': {
            display: 'table',
            content: '""'
        },
        '&::after': {
            // https://github.com/ant-design/ant-design/issues/21864
            display: 'table',
            clear: 'both',
            content: '""'
        }
    });
const genFocusOutline = (token, offset)=>({
        outline: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
        outlineOffset: offset ?? 1,
        transition: [
            `outline-offset`,
            `outline`
        ].map((prop)=>`${prop} 0s`).join(', ')
    });
const genFocusStyle = (token, offset)=>({
        '&:focus-visible': genFocusOutline(token, offset)
    });
const genLinkStyle = (token)=>({
        a: {
            color: token.colorLink,
            textDecoration: token.linkDecoration,
            backgroundColor: 'transparent',
            // remove the gray background on active links in IE 10.
            outline: 'none',
            cursor: 'pointer',
            transition: `color ${token.motionDurationSlow}`,
            '-webkit-text-decoration-skip': 'objects',
            // remove gaps in links underline in iOS 8+ and Safari 8+.
            '&:hover': {
                color: token.colorLinkHover
            },
            '&:active': {
                color: token.colorLinkActive
            },
            '&:active, &:hover': {
                textDecoration: token.linkHoverDecoration,
                outline: 0
            },
            // https://github.com/ant-design/ant-design/issues/22503
            '&:focus': {
                textDecoration: token.linkFocusDecoration,
                outline: 0
            },
            ...genFocusStyle(token),
            '&[disabled]': {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    });
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont)=>{
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
        boxSizing: 'border-box',
        '&::before, &::after': {
            boxSizing: 'border-box'
        }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
        resetFontStyle = {
            fontFamily: token.fontFamily,
            fontSize: token.fontSize
        };
    }
    return {
        [rootPrefixSelector]: {
            ...resetFontStyle,
            ...resetStyle,
            [prefixSelector]: resetStyle
        }
    };
};
const genIconStyle = (iconPrefixCls)=>({
        [`.${iconPrefixCls}`]: {
            ...resetIcon(),
            '&::before': {
                display: 'none'
            },
            '&[tabindex]': {
                cursor: 'pointer'
            }
        },
        [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
            display: 'block'
        },
        [`.${iconPrefixCls}-spin`]: {
            animationName: loadingCircle,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        }
    });
const operationUnit = (token)=>({
        // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
        // And Typography use this to generate link style which should not do this.
        color: token.colorLink,
        textDecoration: token.linkDecoration,
        outline: 'none',
        cursor: 'pointer',
        transition: `all ${token.motionDurationSlow}`,
        border: 0,
        padding: 0,
        background: 'none',
        userSelect: 'none',
        ...genFocusStyle(token),
        '&:hover': {
            color: token.colorLinkHover,
            textDecoration: token.linkHoverDecoration
        },
        '&:focus': {
            color: token.colorLinkHover,
            textDecoration: token.linkFocusDecoration
        },
        '&:active': {
            color: token.colorLinkActive,
            textDecoration: token.linkHoverDecoration
        }
    });
}),
"[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genComponentStyleHook",
    ()=>genComponentStyleHook,
    "genCssVar",
    ()=>genCssVar,
    "genStyleHooks",
    ()=>genStyleHooks,
    "genSubStyleComponent",
    ()=>genSubStyleComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs-utils/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js [app-ssr] (ecmascript) <export default as genStyleUtils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript)");
;
;
;
;
;
const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__["genStyleUtils"])({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
        const rootPrefixCls = getPrefixCls();
        return {
            rootPrefixCls,
            iconPrefixCls
        };
    },
    useToken: ()=>{
        const [theme, realToken, hashId, token, cssVar, zeroRuntime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar,
            zeroRuntime
        };
    },
    useCSP: ()=>{
        const { csp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
        return csp ?? {};
    },
    getResetStyles: (token, config)=>{
        const linkStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genLinkStyle"])(token);
        return [
            linkStyle,
            {
                '&': linkStyle
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genIconStyle"])(config?.prefix.iconPrefixCls ?? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"])
        ];
    },
    getCommonStyle: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCommonStyle"],
    getCompUnitless: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unitless"]
});
const genCssVar = (antCls, component)=>{
    const cssPrefix = `--${antCls.replace(/\./g, '')}-${component}-`;
    const varName = (name)=>{
        return `${cssPrefix}${name}`;
    };
    const varRef = (name, fallback)=>{
        return fallback ? `var(${cssPrefix}${name}, ${fallback})` : `var(${cssPrefix}${name})`;
    };
    return [
        varName,
        varRef
    ];
};
}),
"[project]/invest/node_modules/antd/es/avatar/style/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
const genBaseStyle = (token)=>{
    const { antCls, componentCls, iconCls, avatarBg, avatarColor, containerSize, containerSizeLG, containerSizeSM, textFontSize, textFontSizeLG, textFontSizeSM, iconFontSize, iconFontSizeLG, iconFontSizeSM, borderRadius, borderRadiusLG, borderRadiusSM, lineWidth, lineType } = token;
    // Avatar size style
    const avatarSizeStyle = (size, fontSize, iconFontSize, radius)=>({
            width: size,
            height: size,
            borderRadius: '50%',
            fontSize,
            [`&${componentCls}-square`]: {
                borderRadius: radius
            },
            [`&${componentCls}-icon`]: {
                fontSize: iconFontSize,
                [`> ${iconCls}`]: {
                    margin: 0
                }
            }
        });
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            color: avatarColor,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            verticalAlign: 'middle',
            background: avatarBg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} transparent`,
            '&-image': {
                background: 'transparent'
            },
            [`${antCls}-image-img`]: {
                display: 'block'
            },
            ...avatarSizeStyle(containerSize, textFontSize, iconFontSize, borderRadius),
            '&-lg': {
                ...avatarSizeStyle(containerSizeLG, textFontSizeLG, iconFontSizeLG, borderRadiusLG)
            },
            '&-sm': {
                ...avatarSizeStyle(containerSizeSM, textFontSizeSM, iconFontSizeSM, borderRadiusSM)
            },
            '> img': {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        }
    };
};
const genGroupStyle = (token)=>{
    const { componentCls, groupBorderColor, groupOverlapping, groupSpace } = token;
    return {
        [`${componentCls}-group`]: {
            display: 'inline-flex',
            [componentCls]: {
                borderColor: groupBorderColor
            },
            '> *:not(:first-child)': {
                marginInlineStart: groupOverlapping
            }
        },
        [`${componentCls}-group-popover`]: {
            [`${componentCls} + ${componentCls}`]: {
                marginInlineStart: groupSpace
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { controlHeight, controlHeightLG, controlHeightSM, fontSize, fontSizeLG, fontSizeXL, fontSizeHeading3, marginXS, marginXXS, colorBorderBg } = token;
    return {
        containerSize: controlHeight,
        containerSizeLG: controlHeightLG,
        containerSizeSM: controlHeightSM,
        textFontSize: fontSize,
        textFontSizeLG: fontSize,
        textFontSizeSM: fontSize,
        iconFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
        iconFontSizeLG: fontSizeHeading3,
        iconFontSizeSM: fontSize,
        groupSpace: marginXXS,
        groupOverlapping: -marginXS,
        groupBorderColor: colorBorderBg
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Avatar', (token)=>{
    const { colorTextLightSolid, colorTextPlaceholder } = token;
    const avatarToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        avatarBg: colorTextPlaceholder,
        avatarColor: colorTextLightSolid
    });
    return [
        genBaseStyle(avatarToken),
        genGroupStyle(avatarToken)
    ];
}, prepareComponentToken);
}),
"[project]/invest/node_modules/antd/es/avatar/Avatar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/resize-observer/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/ref.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/responsiveObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/hooks/useSize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/AvatarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, shape, size: customSize, src, srcSet, icon, className, rootClassName, style, alt, draggable, children, crossOrigin, gap = 4, onError, ...others } = props;
    const [scale, setScale] = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isImgExist, setIsImgExist] = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const avatarNodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const avatarChildrenRef = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const avatarNodeMergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRef"])(ref, avatarNodeRef);
    const { getPrefixCls, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('avatar');
    const avatarCtx = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const setScaleParam = ()=>{
        if (!avatarChildrenRef.current || !avatarNodeRef.current) {
            return;
        }
        const childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale
        const nodeWidth = avatarNodeRef.current.offsetWidth;
        // denominator is 0 is no meaning
        if (childrenWidth !== 0 && nodeWidth !== 0) {
            if (gap * 2 < nodeWidth) {
                setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
            }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setMounted(true);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsImgExist(true);
        setScale(1);
    }, [
        src,
        srcSet
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](setScaleParam, [
        gap
    ]);
    const handleImgLoadError = ()=>{
        const errorFlag = onError?.();
        if (errorFlag !== false) {
            setIsImgExist(false);
        }
    };
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((ctxSize)=>customSize ?? avatarCtx?.size ?? ctxSize ?? 'medium');
    const needResponsive = Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(size) ? size || {} : {}).some((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["responsiveArray"].includes(key));
    const hasIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(icon);
    const screens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(needResponsive);
    const responsiveSizeStyle = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(size)) {
            return {};
        }
        const currentSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchScreen"])(screens, size);
        return currentSize ? {
            width: currentSize,
            height: currentSize,
            fontSize: currentSize && (hasIcon || (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(children)) ? currentSize / 2 : 18
        } : {};
    }, [
        screens,
        size,
        hasIcon,
        children
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Avatar');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : "TURBOPACK unreachable";
    }
    const prefixCls = getPrefixCls('avatar', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const sizeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small'
    });
    const hasImageElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](src);
    const mergedShape = shape || avatarCtx?.shape || 'circle';
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, sizeCls, contextClassName, `${prefixCls}-${mergedShape}`, {
        [`${prefixCls}-image`]: hasImageElement || src && isImgExist,
        [`${prefixCls}-icon`]: hasIcon
    }, cssVarCls, rootCls, className, rootClassName, hashId);
    const sizeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(size) ? {
        width: size,
        height: size,
        fontSize: hasIcon ? size / 2 : 18
    } : {};
    let childrenToRender;
    if (typeof src === 'string' && isImgExist) {
        childrenToRender = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("img", {
            src: src,
            draggable: draggable,
            srcSet: srcSet,
            onError: handleImgLoadError,
            alt: alt,
            crossOrigin: crossOrigin
        });
    } else if (hasImageElement) {
        childrenToRender = src;
    } else if (hasIcon) {
        childrenToRender = icon;
    } else if (mounted || scale !== 1) {
        const transformString = `scale(${scale})`;
        const childrenStyle = {
            WebkitTransform: transformString,
            transform: transformString
        };
        childrenToRender = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            onResize: setScaleParam
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-string`,
            ref: avatarChildrenRef,
            style: childrenStyle
        }, children));
    } else {
        childrenToRender = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-string`,
            style: {
                opacity: 0
            },
            ref: avatarChildrenRef
        }, children);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ...others,
        style: {
            ...sizeStyle,
            ...responsiveSizeStyle,
            ...contextStyle,
            ...style
        },
        className: classString,
        ref: avatarNodeMergedRef
    }, childrenToRender);
});
if ("TURBOPACK compile-time truthy", 1) {
    Avatar.displayName = 'Avatar';
}
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/invest/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneElement",
    ()=>cloneElement,
    "isFragment",
    ()=>isFragment,
    "replaceElement",
    ()=>replaceElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
;
;
function isFragment(child) {
    return child && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(child) && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment;
}
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
        return replacement;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(props) ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
}),
"[project]/invest/node_modules/antd/es/_util/getRenderPropValue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRenderPropValue",
    ()=>getRenderPropValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
;
;
const getRenderPropValue = (propValue)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(propValue)) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(propValue) ? propValue() : propValue;
};
}),
"[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fill object structure by schema, initialize empty objects for keys with `_default` property.
 */ __turbopack_context__.s([
    "fillObjectBySchema",
    ()=>fillObjectBySchema
]);
const fillObjectBySchema = (obj, schema)=>{
    const newObj = {
        ...obj
    };
    Object.keys(schema).forEach((key)=>{
        if (schema[key]._default) {
            newObj[key] || (newObj[key] = {});
        } else {
            newObj[key] = fillObjectBySchema(newObj[key], schema[key]);
        }
    });
    return newObj;
};
}),
"[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeStyles",
    ()=>mergeStyles,
    "resolveStyleOrClass",
    ()=>resolveStyleOrClass,
    "useMergeSemantic",
    ()=>useMergeSemantic,
    "useSemanticRootStyle",
    ()=>useSemanticRootStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const mergeClassNames = (schema = {}, ...classNames)=>{
    return classNames.filter((item)=>Boolean(item)).reduce((acc, cur)=>{
        // Loop keys of the current classNames
        Object.keys(cur).forEach((key)=>{
            const keySchema = schema[key];
            const curVal = cur[key];
            if (keySchema) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(curVal)) {
                    // Loop fill
                    acc[key] = mergeClassNames(keySchema, acc[key], curVal);
                } else {
                    // Convert string to object structure
                    const { _default: defaultField } = keySchema;
                    if (defaultField) {
                        acc[key] = acc[key] || {};
                        acc[key][defaultField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(acc[key][defaultField], curVal);
                    }
                }
            } else {
                // Flatten fill
                acc[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(acc[key], curVal);
            }
        });
        return acc;
    }, {});
};
const useSemanticClassNames = (schema, ...classNames)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>mergeClassNames.apply(void 0, [
            schema
        ].concat(classNames)), [
        schema
    ].concat(classNames));
};
const mergeStyles = (...styles)=>{
    return styles.filter((item)=>Boolean(item)).reduce((acc, cur = {})=>{
        Object.keys(cur).forEach((key)=>{
            acc[key] = {
                ...acc[key],
                ...cur[key]
            };
        });
        return acc;
    }, {});
};
const useSemanticStyles = (...styles)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>mergeStyles.apply(void 0, styles), [].concat(styles));
};
const useSemanticRootStyle = (style, key = 'root')=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>style ? {
            [key]: style
        } : undefined, [
        style,
        key
    ]);
};
const resolveStyleOrClass = (value, info)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(value) ? value(info) : value;
};
const useMergeSemantic = (classNamesList, stylesList, info, schema)=>{
    const resolvedClassNamesList = classNamesList.map((classNames)=>classNames ? resolveStyleOrClass(classNames, info) : undefined);
    const resolvedStylesList = stylesList.map((styles)=>styles ? resolveStyleOrClass(styles, info) : undefined);
    const mergedClassNames = useSemanticClassNames.apply(void 0, [
        schema
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(resolvedClassNamesList)));
    const mergedStyles = useSemanticStyles.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(resolvedStylesList));
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!schema) {
            return [
                mergedClassNames,
                mergedStyles
            ];
        }
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillObjectBySchema"])(mergedClassNames, schema),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillObjectBySchema"])(mergedStyles, schema)
        ];
    }, [
        mergedClassNames,
        mergedStyles,
        schema
    ]);
};
}),
"[project]/invest/node_modules/antd/es/_util/motion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTransitionName",
    ()=>getTransitionName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
;
;
// ================== Collapse Motion ==================
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>({
        height: node?.scrollHeight ?? 0,
        opacity: node ? 1 : 0
    });
const getCurrentHeight = (node)=>({
        height: node?.offsetHeight ?? 0
    });
const skipOpacityTransition = (_, event)=>{
    return event?.deadline === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransitionEvent"])(event) && event.propertyName === 'height';
};
const initCollapseMotion = (rootCls = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPrefixCls"])=>({
        motionName: `${rootCls}-motion-collapse`,
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    });
const _SelectPlacements = [
    'bottomLeft',
    'bottomRight',
    'topLeft',
    'topRight'
];
const getTransitionName = (rootPrefixCls, motion, transitionName)=>{
    if (transitionName !== undefined) {
        return transitionName;
    }
    return `${rootPrefixCls}-${motion}`;
};
;
const __TURBOPACK__default__export__ = initCollapseMotion;
}),
"[project]/invest/node_modules/antd/es/form/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "FormItemInputContext",
    ()=>FormItemInputContext,
    "FormItemPrefixContext",
    ()=>FormItemPrefixContext,
    "FormProvider",
    ()=>FormProvider,
    "NoFormStyle",
    ()=>NoFormStyle,
    "NoStyleItemContext",
    ()=>NoStyleItemContext,
    "VariantContext",
    ()=>VariantContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/form/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/form/es/FormContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/omit.js [app-ssr] (ecmascript) <export default as omit>");
"use client";
;
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    labelAlign: 'right',
    layout: 'horizontal',
    itemRef: ()=>{}
});
const NoStyleItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const FormProvider = (props)=>{
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
        'prefixCls'
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...providerProps
    });
};
const FormItemPrefixContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    FormItemInputContext.displayName = 'FormItemInputContext';
}
const NoFormStyle = ({ children, status, override })=>{
    const formItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormItemInputContext);
    const newFormItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const newContext = {
            ...formItemInputContext
        };
        if (override) {
            delete newContext.isFormItemInput;
        }
        if (status) {
            delete newContext.status;
            delete newContext.hasFeedback;
            delete newContext.feedbackIcon;
        }
        return newContext;
    }, [
        status,
        override,
        formItemInputContext
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](FormItemInputContext.Provider, {
        value: newFormItemInputContext
    }, children);
};
const VariantContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
}),
"[project]/invest/node_modules/antd/es/_util/hooks/useOrientation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrientation",
    ()=>useOrientation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const isValidOrientation = (orientation)=>{
    return orientation === 'horizontal' || orientation === 'vertical';
};
const useOrientation = (orientation, vertical, legacyDirection)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const validOrientation = isValidOrientation(orientation);
        let mergedOrientation;
        if (validOrientation) {
            mergedOrientation = orientation;
        } else if (typeof vertical === 'boolean') {
            mergedOrientation = vertical ? 'vertical' : 'horizontal';
        } else {
            const validLegacyDirection = isValidOrientation(legacyDirection);
            mergedOrientation = validLegacyDirection ? legacyDirection : 'horizontal';
        }
        return [
            mergedOrientation,
            mergedOrientation === 'vertical'
        ];
    }, [
        legacyDirection,
        orientation,
        vertical
    ]);
};
}),
"[project]/invest/node_modules/antd/es/space/style/compact.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
;
const genSpaceCompactStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-block': {
                display: 'flex',
                width: '100%'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Space',
    'Compact'
], genSpaceCompactStyle, ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/invest/node_modules/antd/es/space/Compact.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoCompactStyle",
    ()=>NoCompactStyle,
    "SpaceCompactItemContext",
    ()=>SpaceCompactItemContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCompactItemContext",
    ()=>useCompactItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/Children/toArray.js [app-ssr] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useOrientation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/hooks/useSize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/space/style/compact.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SpaceCompactItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useCompactItemContext = (prefixCls, direction)=>{
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const compactItemClassnames = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!compactItemContext) {
            return '';
        }
        const { compactDirection, isFirstItem, isLastItem } = compactItemContext;
        const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-compact${separator}item`, {
            [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
            [`${prefixCls}-compact${separator}last-item`]: isLastItem,
            [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl'
        });
    }, [
        prefixCls,
        direction,
        compactItemContext
    ]);
    return {
        compactSize: compactItemContext?.compactSize,
        compactDirection: compactItemContext?.compactDirection,
        compactItemClassnames
    };
};
const NoCompactStyle = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: null
    }, children);
};
const CompactItem = (props)=>{
    const { children, ...others } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>others, [
            others
        ])
    }, children);
};
const Compact = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { size, direction, orientation, block, prefixCls: customizePrefixCls, className, rootClassName, children, vertical, ...restProps } = props;
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Space.Compact');
        warning.deprecated(!direction, 'direction', 'orientation');
    }
    const [mergedOrientation, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical, direction);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((ctx)=>size ?? ctx);
    const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
    const [hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const clx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, {
        [`${prefixCls}-rtl`]: directionConfig === 'rtl',
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-vertical`]: mergedVertical
    }, className, rootClassName);
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            nativeElement: nativeElementRef.current
        }));
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>childNodes.map((child, i)=>{
            const key = child?.key || `${prefixCls}-item-${i}`;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](CompactItem, {
                key: key,
                compactSize: mergedSize,
                compactDirection: mergedOrientation,
                isFirstItem: i === 0 && (!compactItemContext || compactItemContext?.isFirstItem),
                isLastItem: i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)
            }, child);
        }), [
        childNodes,
        compactItemContext,
        mergedOrientation,
        mergedSize,
        prefixCls
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: clx,
        ...restProps
    }, nodes);
});
const __TURBOPACK__default__export__ = Compact;
}),
"[project]/invest/node_modules/antd/es/_util/ContextIsolator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/form/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/space/Compact.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ContextIsolator = (props)=>{
    const { space, form, children } = props;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(children)) {
        return null;
    }
    let result = children;
    if (form) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoFormStyle"], {
            override: true,
            status: true
        }, result);
    }
    if (space) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoCompactStyle"], null, result);
    }
    return result;
};
const __TURBOPACK__default__export__ = ContextIsolator;
}),
"[project]/invest/node_modules/antd/es/_util/zindexContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ZIndexContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
if ("TURBOPACK compile-time truthy", 1) {
    ZIndexContext.displayName = 'ZIndexContext';
}
const __TURBOPACK__default__export__ = ZIndexContext;
}),
"[project]/invest/node_modules/antd/es/_util/hooks/useZIndex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTAINER_MAX_OFFSET",
    ()=>CONTAINER_MAX_OFFSET,
    "consumerBaseZIndexOffset",
    ()=>consumerBaseZIndexOffset,
    "containerBaseZIndexOffset",
    ()=>containerBaseZIndexOffset,
    "useZIndex",
    ()=>useZIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/zindexContext.js [app-ssr] (ecmascript)");
;
;
;
;
// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
/**
 * Static function will default be the `CONTAINER_MAX_OFFSET`.
 * But it still may have children component like Select, Dropdown.
 * So the warning zIndex should exceed the `CONTAINER_MAX_OFFSET`.
 */ const CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
};
const isContainerType = (type)=>{
    return type in containerBaseZIndexOffset;
};
const useZIndex = (componentType, customZIndex)=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const parentZIndex = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const isContainer = isContainerType(componentType);
    let result;
    if (customZIndex !== undefined) {
        result = [
            customZIndex,
            customZIndex
        ];
    } else {
        let zIndex = parentZIndex ?? 0;
        if (isContainer) {
            zIndex += // Use preset token zIndex by default but not stack when has parent container
            (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
            containerBaseZIndexOffset[componentType];
        } else {
            zIndex += consumerBaseZIndexOffset[componentType];
        }
        result = [
            parentZIndex === undefined ? customZIndex : zIndex,
            zIndex
        ];
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])(componentType);
        const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
        const currentZIndex = result[0] || 0;
        ("TURBOPACK compile-time truthy", 1) ? warning(customZIndex !== undefined || currentZIndex <= maxZIndex, 'usage', '`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.') : "TURBOPACK unreachable";
    }
    return result;
};
}),
"[project]/invest/node_modules/antd/es/style/roundedArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genRoundedArrow",
    ()=>genRoundedArrow,
    "getArrowToken",
    ()=>getArrowToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
;
function getArrowToken(token) {
    const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
    const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
    return {
        arrowShadowWidth: shadowWidth,
        arrowPath,
        arrowPolygon
    };
}
const genRoundedArrow = (token, bgColor, boxShadow)=>{
    const { sizePopupArrow, arrowPolygon, arrowPath, arrowShadowWidth, borderRadiusXS, calc } = token;
    const afterStyle = {
        content: '""',
        position: 'absolute',
        width: arrowShadowWidth,
        height: arrowShadowWidth,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: {
            _skip_check_: true,
            value: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(borderRadiusXS)} 0`
        },
        transform: 'translateY(50%) rotate(-135deg)',
        zIndex: 0,
        background: 'transparent'
    };
    if (boxShadow) {
        afterStyle.boxShadow = boxShadow;
    }
    return {
        pointerEvents: 'none',
        width: sizePopupArrow,
        height: sizePopupArrow,
        overflow: 'hidden',
        '&::before': {
            position: 'absolute',
            bottom: 0,
            insetInlineStart: 0,
            width: sizePopupArrow,
            height: calc(sizePopupArrow).div(2).equal(),
            background: bgColor,
            clipPath: {
                _multi_value_: true,
                value: [
                    arrowPolygon,
                    arrowPath
                ]
            },
            content: '""'
        },
        '&::after': afterStyle
    };
};
}),
"[project]/invest/node_modules/antd/es/style/placementArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_VERTICAL_CONTENT_RADIUS",
    ()=>MAX_VERTICAL_CONTENT_RADIUS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getArrowOffsetToken",
    ()=>getArrowOffsetToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/roundedArrow.js [app-ssr] (ecmascript)");
;
;
;
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
    const { contentRadius, limitVerticalRadius } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
        arrowOffsetHorizontal: arrowOffset,
        arrowOffsetVertical
    };
}
const getArrowStyle = (token, colorBg, options)=>{
    const { componentCls, boxShadowPopoverArrow, arrowOffsetVertical, arrowOffsetHorizontal, antCls } = token;
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    const { arrowDistance = 0, arrowShadow = true } = options || {};
    return {
        [componentCls]: {
            // ============================ Basic ============================
            [`${componentCls}-arrow`]: [
                {
                    position: 'absolute',
                    zIndex: 1,
                    // lift it up so the menu wouldn't cask shadow on it
                    display: 'block',
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genRoundedArrow"])(token, colorBg, arrowShadow ? boxShadowPopoverArrow : false),
                    '&:before': {
                        background: colorBg
                    }
                }
            ],
            // ========================== Placement ==========================
            // Here handle the arrow position and rotate stuff
            // >>>>> Top
            [[
                `&-placement-top > ${componentCls}-arrow`,
                `&-placement-topLeft > ${componentCls}-arrow`,
                `&-placement-topRight > ${componentCls}-arrow`
            ].join(',')]: {
                bottom: arrowDistance,
                transform: 'translateY(100%) rotate(180deg)'
            },
            [`&-placement-top > ${componentCls}-arrow`]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
            },
            '&-placement-topLeft': {
                [varName('arrow-offset-x')]: arrowOffsetHorizontal,
                [`> ${componentCls}-arrow`]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-topRight': {
                [varName('arrow-offset-x')]: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal)})`,
                [`> ${componentCls}-arrow`]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            // >>>>> Bottom
            [[
                `&-placement-bottom > ${componentCls}-arrow`,
                `&-placement-bottomLeft > ${componentCls}-arrow`,
                `&-placement-bottomRight > ${componentCls}-arrow`
            ].join(',')]: {
                top: arrowDistance,
                transform: `translateY(-100%)`
            },
            [`&-placement-bottom > ${componentCls}-arrow`]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: `translateX(-50%) translateY(-100%)`
            },
            '&-placement-bottomLeft': {
                [varName('arrow-offset-x')]: arrowOffsetHorizontal,
                [`> ${componentCls}-arrow`]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-bottomRight': {
                [varName('arrow-offset-x')]: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal)})`,
                [`> ${componentCls}-arrow`]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            // >>>>> Left
            [[
                `&-placement-left > ${componentCls}-arrow`,
                `&-placement-leftTop > ${componentCls}-arrow`,
                `&-placement-leftBottom > ${componentCls}-arrow`
            ].join(',')]: {
                right: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(100%) rotate(90deg)'
            },
            [`&-placement-left > ${componentCls}-arrow`]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
            },
            [`&-placement-leftTop > ${componentCls}-arrow`]: {
                top: arrowOffsetVertical
            },
            [`&-placement-leftBottom > ${componentCls}-arrow`]: {
                bottom: arrowOffsetVertical
            },
            // >>>>> Right
            [[
                `&-placement-right > ${componentCls}-arrow`,
                `&-placement-rightTop > ${componentCls}-arrow`,
                `&-placement-rightBottom > ${componentCls}-arrow`
            ].join(',')]: {
                left: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(-100%) rotate(-90deg)'
            },
            [`&-placement-right > ${componentCls}-arrow`]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
            },
            [`&-placement-rightTop > ${componentCls}-arrow`]: {
                top: arrowOffsetVertical
            },
            [`&-placement-rightBottom > ${componentCls}-arrow`]: {
                bottom: arrowOffsetVertical
            }
        }
    };
};
const __TURBOPACK__default__export__ = getArrowStyle;
}),
"[project]/invest/node_modules/antd/es/_util/placements.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getPlacements,
    "getOverflowOptions",
    ()=>getOverflowOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/placementArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
;
;
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
        return {
            adjustX: false,
            adjustY: false
        };
    }
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(autoAdjustOverflow) ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch(placement){
        case 'top':
        case 'bottom':
            baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
            baseOverflow.shiftY = true;
            baseOverflow.adjustY = true;
            break;
        case 'left':
        case 'right':
            baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
            baseOverflow.shiftX = true;
            baseOverflow.adjustX = true;
            break;
    }
    const mergedOverflow = {
        ...baseOverflow,
        ...overflow
    };
    // Support auto shift
    if (!mergedOverflow.shiftX) {
        mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
        mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
}
const PlacementAlignMap = {
    left: {
        points: [
            'cr',
            'cl'
        ]
    },
    right: {
        points: [
            'cl',
            'cr'
        ]
    },
    top: {
        points: [
            'bc',
            'tc'
        ]
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ]
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tr'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ]
    }
};
const ArrowCenterPlacementAlignMap = {
    topLeft: {
        points: [
            'bl',
            'tc'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'cl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tc'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'cr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'bc'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'cr'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bc'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'cl'
        ]
    }
};
const DisableAutoArrowList = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
]);
function getPlacements(config) {
    const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    // Dynamic offset
    const arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
        contentRadius: borderRadius,
        limitVerticalRadius: true
    });
    Object.keys(PlacementAlignMap).forEach((key)=>{
        const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
        const placementInfo = {
            ...template,
            offset: [
                0,
                0
            ],
            dynamicInset: true
        };
        placementMap[key] = placementInfo;
        // Disable autoArrow since design is fixed position
        if (DisableAutoArrowList.has(key)) {
            placementInfo.autoArrow = false;
        }
        // Static offset
        switch(key){
            case 'top':
            case 'topLeft':
            case 'topRight':
                placementInfo.offset[1] = -halfArrowWidth - offset;
                break;
            case 'bottom':
            case 'bottomLeft':
            case 'bottomRight':
                placementInfo.offset[1] = halfArrowWidth + offset;
                break;
            case 'left':
            case 'leftTop':
            case 'leftBottom':
                placementInfo.offset[0] = -halfArrowWidth - offset;
                break;
            case 'right':
            case 'rightTop':
            case 'rightBottom':
                placementInfo.offset[0] = halfArrowWidth + offset;
                break;
        }
        if (arrowPointAtCenter) {
            switch(key){
                case 'topLeft':
                case 'bottomLeft':
                    placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
                    break;
                case 'topRight':
                case 'bottomRight':
                    placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
                    break;
                case 'leftTop':
                case 'rightTop':
                    placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
                    break;
                case 'leftBottom':
                case 'rightBottom':
                    placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
                    break;
            }
        }
        // Overflow
        placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
        // VisibleFirst
        if (visibleFirst) {
            placementInfo.htmlRegion = 'visibleFirst';
        }
    });
    return placementMap;
}
}),
"[project]/invest/node_modules/antd/es/table/TableMeasureRowContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const TableMeasureRowContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(false);
const __TURBOPACK__default__export__ = TableMeasureRowContext;
}),
"[project]/invest/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useMergedArrow = (providedArrow, providedContextArrow)=>{
    const toConfig = (arrow)=>typeof arrow === 'boolean' ? {
            show: arrow
        } : arrow || {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const arrowConfig = toConfig(providedArrow);
        const contextArrowConfig = toConfig(providedContextArrow);
        return {
            ...contextArrowConfig,
            ...arrowConfig,
            show: arrowConfig.show ?? contextArrowConfig.show ?? true
        };
    }, [
        providedArrow,
        providedContextArrow
    ]);
};
const __TURBOPACK__default__export__ = useMergedArrow;
}),
"[project]/invest/node_modules/antd/es/style/motion/motion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMotion",
    ()=>initMotion
]);
const initMotionCommon = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false)=>{
    const sameLevelPrefix = sameLevel ? '&' : '';
    return {
        [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
            ...initMotionCommon(duration),
            animationPlayState: 'paused'
        },
        [`${sameLevelPrefix}${motionCls}-leave`]: {
            ...initMotionCommon(duration),
            animationPlayState: 'paused'
        },
        [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
            animationName: inKeyframes,
            animationPlayState: 'running'
        },
        [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
            animationName: outKeyframes,
            animationPlayState: 'running',
            pointerEvents: 'none'
        }
    };
};
}),
"[project]/invest/node_modules/antd/es/style/motion/fade.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fadeIn",
    ()=>fadeIn,
    "fadeOut",
    ()=>fadeOut,
    "initFadeMotion",
    ()=>initFadeMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/motion/motion.js [app-ssr] (ecmascript)");
;
;
const fadeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeIn', {
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
const fadeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeOut', {
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
const initFadeMotion = (token, sameLevel = false)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-fade`;
    const sameLevelPrefix = sameLevel ? '&' : '';
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel),
        {
            [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: 'linear'
            },
            [`${sameLevelPrefix}${motionCls}-leave`]: {
                animationTimingFunction: 'linear'
            }
        }
    ];
};
}),
"[project]/invest/node_modules/antd/es/style/motion/zoom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initZoomMotion",
    ()=>initZoomMotion,
    "zoomBigIn",
    ()=>zoomBigIn,
    "zoomBigOut",
    ()=>zoomBigOut,
    "zoomDownIn",
    ()=>zoomDownIn,
    "zoomDownOut",
    ()=>zoomDownOut,
    "zoomIn",
    ()=>zoomIn,
    "zoomLeftIn",
    ()=>zoomLeftIn,
    "zoomLeftOut",
    ()=>zoomLeftOut,
    "zoomOut",
    ()=>zoomOut,
    "zoomRightIn",
    ()=>zoomRightIn,
    "zoomRightOut",
    ()=>zoomRightOut,
    "zoomUpIn",
    ()=>zoomUpIn,
    "zoomUpOut",
    ()=>zoomUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/motion/motion.js [app-ssr] (ecmascript)");
;
;
const zoomIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomIn', {
    '0%': {
        transform: 'scale(0.2)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.2)',
        opacity: 0
    }
});
const zoomBigIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigIn', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomBigOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const zoomUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    }
});
const zoomUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    }
});
const zoomLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    }
});
const zoomLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    }
});
const zoomRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    }
});
const zoomRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    }
});
const zoomDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    }
});
const zoomDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    }
});
const zoomMotion = {
    zoom: {
        inKeyframes: zoomIn,
        outKeyframes: zoomOut
    },
    'zoom-big': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-left': {
        inKeyframes: zoomLeftIn,
        outKeyframes: zoomLeftOut
    },
    'zoom-right': {
        inKeyframes: zoomRightIn,
        outKeyframes: zoomRightOut
    },
    'zoom-up': {
        inKeyframes: zoomUpIn,
        outKeyframes: zoomUpOut
    },
    'zoom-down': {
        inKeyframes: zoomDownIn,
        outKeyframes: zoomDownOut
    }
};
const initZoomMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = zoomMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid),
        {
            [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
                transform: 'scale(0)',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc,
                '&-prepare': {
                    transform: 'none'
                }
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
}),
"[project]/invest/node_modules/antd/es/theme/util/genPresetColor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genPresetColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/interface/presetColors.js [app-ssr] (ecmascript)");
;
function genPresetColor(token, genCss) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>{
        const lightColor = token[`${colorKey}1`];
        const lightBorderColor = token[`${colorKey}3`];
        const darkColor = token[`${colorKey}6`];
        const textColor = token[`${colorKey}7`];
        return {
            ...prev,
            ...genCss(colorKey, {
                lightColor,
                lightBorderColor,
                darkColor,
                textColor
            })
        };
    }, {});
}
}),
"[project]/invest/node_modules/antd/es/theme/util/genPresetColor.js [app-ssr] (ecmascript) <export default as genPresetColor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genPresetColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genPresetColor.js [app-ssr] (ecmascript)");
}),
"[project]/invest/node_modules/antd/es/tooltip/style/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/motion/fade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/motion/zoom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/placementArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/roundedArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genPresetColor.js [app-ssr] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
;
;
const FALL_BACK_ORIGIN = '50%';
const genTooltipStyle = (token)=>{
    const { calc, componentCls, // ant-tooltip
    tooltipMaxWidth, tooltipColor, tooltipBg, tooltipBorderRadius, zIndexPopup, controlHeight, dropShadowPopover, paddingSM, paddingXS, arrowOffsetHorizontal, sizePopupArrow, antCls } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    // arrowOffsetHorizontal + arrowWidth + borderRadius
    const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
    // borderRadius * 2 + arrowWidth
    const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
    const sharedBodyStyle = {
        minWidth: centerAlignMinWidth,
        minHeight: controlHeight,
        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(paddingSM).div(2).equal())} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(paddingXS)}`,
        color: varRef('overlay-color', tooltipColor),
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tooltipBg,
        borderRadius: tooltipBorderRadius,
        boxSizing: 'border-box'
    };
    const sharedTransformOrigin = {
        // When use `autoArrow`, origin will follow the arrow position
        [varName('valid-offset-x')]: varRef('arrow-offset-x', 'var(--arrow-x)'),
        transformOrigin: [
            varRef('valid-offset-x', FALL_BACK_ORIGIN),
            `var(--arrow-y, ${FALL_BACK_ORIGIN})`
        ].join(' ')
    };
    return [
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                position: 'absolute',
                zIndex: zIndexPopup,
                display: 'block',
                width: 'max-content',
                maxWidth: tooltipMaxWidth,
                visibility: 'visible',
                filter: dropShadowPopover,
                ...sharedTransformOrigin,
                '&-hidden': {
                    display: 'none'
                },
                [varName('arrow-background-color')]: tooltipBg,
                // Wrapper for the tooltip content
                [`${componentCls}-container`]: [
                    sharedBodyStyle,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initFadeMotion"])(token, true)
                ],
                [`&:has(~ ${componentCls}-unique-container)`]: {
                    [`${componentCls}-container`]: {
                        border: 'none',
                        background: 'transparent'
                    }
                },
                // Align placement should have another min width
                [[
                    `&-placement-topLeft`,
                    `&-placement-topRight`,
                    `&-placement-bottomLeft`,
                    `&-placement-bottomRight`
                ].join(',')]: {
                    minWidth: edgeAlignMinWidth
                },
                // Limit left and right placement radius
                [[
                    `&-placement-left`,
                    `&-placement-leftTop`,
                    `&-placement-leftBottom`,
                    `&-placement-right`,
                    `&-placement-rightTop`,
                    `&-placement-rightBottom`
                ].join(',')]: {
                    [`${componentCls}-inner`]: {
                        borderRadius: token.min(tooltipBorderRadius, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_VERTICAL_CONTENT_RADIUS"])
                    }
                },
                [`${componentCls}-content`]: {
                    position: 'relative'
                },
                // generator for preset color
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { darkColor })=>({
                        [`&${componentCls}-${colorKey}`]: {
                            [`${componentCls}-container`]: {
                                backgroundColor: darkColor
                            },
                            [`${componentCls}-arrow`]: {
                                [varName('arrow-background-color')]: darkColor
                            }
                        }
                    })),
                // RTL
                '&-rtl': {
                    direction: 'rtl'
                }
            }
        },
        // Arrow Style
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token, varRef('arrow-background-color'), {
            arrowShadow: false
        }),
        // Pure Render
        {
            [`${componentCls}-pure`]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow
            }
        },
        // Unique Body
        {
            [`${componentCls}-unique-container`]: {
                ...sharedBodyStyle,
                ...sharedTransformOrigin,
                position: 'absolute',
                zIndex: calc(zIndexPopup).sub(1).equal(),
                filter: dropShadowPopover,
                '&-hidden': {
                    display: 'none'
                },
                '&-visible': {
                    transition: `all ${token.motionDurationSlow}`
                }
            }
        }
    ];
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + 70,
        maxWidth: 250,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
            contentRadius: token.borderRadius,
            limitVerticalRadius: true
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
        }))
    });
const __TURBOPACK__default__export__ = (prefixCls, rootCls, injectStyle = true)=>{
    const useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tooltip', (token)=>{
        const { borderRadius, colorTextLightSolid, colorBgSpotlight, maxWidth } = token;
        const TooltipToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            // default variables
            tooltipMaxWidth: maxWidth,
            tooltipColor: colorTextLightSolid,
            tooltipBorderRadius: borderRadius,
            tooltipBg: colorBgSpotlight
        });
        return [
            genTooltipStyle(TooltipToken),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initZoomMotion"])(token, 'zoom-big-fast')
        ];
    }, prepareComponentToken, {
        resetStyle: false,
        // Popover use Tooltip as internal component. We do not need to handle this.
        injectStyle
    });
    return useStyle(prefixCls, rootCls);
};
}),
"[project]/invest/node_modules/antd/es/_util/colors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetStatusColors",
    ()=>PresetStatusColors,
    "isPresetColor",
    ()=>isPresetColor,
    "isPresetStatusColor",
    ()=>isPresetStatusColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/interface/presetColors.js [app-ssr] (ecmascript)");
;
;
const inverseColors = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetColors"].map((color)=>`${color}-inverse`);
const PresetStatusColors = [
    'success',
    'processing',
    'error',
    'default',
    'warning'
];
function isPresetColor(color, includeInverse = true) {
    if (includeInverse) {
        return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inverseColors), (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetColors"])).includes(color);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetColors"].includes(color);
}
function isPresetStatusColor(color) {
    return PresetStatusColors.includes(color);
}
}),
"[project]/invest/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AggregationColor",
    ()=>AggregationColor,
    "getHex",
    ()=>getHex,
    "toHexFormat",
    ()=>toHexFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@babel/runtime/helpers/esm/createClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/color-picker/es/color.js [app-ssr] (ecmascript)");
;
;
;
const toHexFormat = (value, alpha)=>value?.replace(/[^0-9a-f]/gi, '').slice(0, alpha ? 8 : 6) || '';
const getHex = (value, alpha)=>value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/ function() {
    function AggregationColor(color) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, AggregationColor);
        this.cleared = false;
        // Clone from another AggregationColor
        if (color instanceof AggregationColor) {
            this.metaColor = color.metaColor.clone();
            this.colors = color.colors?.map((info)=>({
                    color: new AggregationColor(info.color),
                    percent: info.percent
                }));
            this.cleared = color.cleared;
            return;
        }
        const isArray = Array.isArray(color);
        if (isArray && color.length) {
            this.colors = color.map(({ color: c, percent })=>({
                    color: new AggregationColor(c),
                    percent
                }));
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](this.colors[0].color.metaColor);
        } else {
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](isArray ? '' : color);
        }
        if (!color || isArray && !this.colors) {
            this.metaColor = this.metaColor.setA(0);
            this.cleared = true;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(AggregationColor, [
        {
            key: "toHsb",
            value: function toHsb() {
                return this.metaColor.toHsb();
            }
        },
        {
            key: "toHsbString",
            value: function toHsbString() {
                return this.metaColor.toHsbString();
            }
        },
        {
            key: "toHex",
            value: function toHex() {
                return getHex(this.toHexString(), this.metaColor.a < 1);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return this.metaColor.toHexString();
            }
        },
        {
            key: "toRgb",
            value: function toRgb() {
                return this.metaColor.toRgb();
            }
        },
        {
            key: "toRgbString",
            value: function toRgbString() {
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "isGradient",
            value: function isGradient() {
                return !!this.colors && !this.cleared;
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return this.colors || [
                    {
                        color: this,
                        percent: 0
                    }
                ];
            }
        },
        {
            key: "toCssString",
            value: function toCssString() {
                const { colors } = this;
                // CSS line-gradient
                if (colors) {
                    const colorsStr = colors.map((c)=>`${c.color.toRgbString()} ${c.percent}%`).join(', ');
                    return `linear-gradient(90deg, ${colorsStr})`;
                }
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "equals",
            value: function equals(color) {
                if (!color || this.isGradient() !== color.isGradient()) {
                    return false;
                }
                if (!this.isGradient()) {
                    return this.toHexString() === color.toHexString();
                }
                return this.colors.length === color.colors.length && this.colors.every((c, i)=>{
                    const target = color.colors[i];
                    return c.percent === target.percent && c.color.equals(target.color);
                });
            }
        }
    ]);
}();
}),
"[project]/invest/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genAlphaColor",
    ()=>genAlphaColor,
    "generateColor",
    ()=>generateColor,
    "getColorAlpha",
    ()=>getColorAlpha,
    "getGradientPercentColor",
    ()=>getGradientPercentColor,
    "getRoundNumber",
    ()=>getRoundNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/color-picker/es/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)");
;
;
;
const generateColor = (color)=>{
    if (color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"]) {
        return color;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](color);
};
const getRoundNumber = (value)=>Math.round(Number(value || 0));
const getColorAlpha = (color)=>getRoundNumber(color.toHsb().a * 100);
const genAlphaColor = (color, alpha)=>{
    const rgba = color.toRgb();
    // Color from hsb input may get `rgb` is (0/0/0) when `hsb.b` is 0
    // So if rgb is empty, we should get from hsb
    if (!rgba.r && !rgba.g && !rgba.b) {
        const hsba = color.toHsb();
        hsba.a = alpha || 1;
        return generateColor(hsba);
    }
    rgba.a = alpha || 1;
    return generateColor(rgba);
};
const getGradientPercentColor = (colors, percent)=>{
    const filledColors = [
        {
            percent: 0,
            color: colors[0].color
        }
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colors), [
        {
            percent: 100,
            color: colors[colors.length - 1].color
        }
    ]);
    for(let i = 0; i < filledColors.length - 1; i += 1){
        const startPtg = filledColors[i].percent;
        const endPtg = filledColors[i + 1].percent;
        const startColor = filledColors[i].color;
        const endColor = filledColors[i + 1].color;
        if (startPtg <= percent && percent <= endPtg) {
            const dist = endPtg - startPtg;
            if (dist === 0) {
                return startColor;
            }
            const ratio = (percent - startPtg) / dist * 100;
            const startRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](startColor);
            const endRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](endColor);
            return startRcColor.mix(endRcColor, ratio).toRgbString();
        }
    }
    // This will never reach
    /* istanbul ignore next */ return '';
};
}),
"[project]/invest/node_modules/antd/es/tooltip/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseColor",
    ()=>parseColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
;
;
;
;
const parseColor = (rootPrefixCls, prefixCls, color)=>{
    const isInternalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresetColor"])(color);
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCssVar"])(rootPrefixCls, 'tooltip');
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-${color}`]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    const rgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(color).toRgb();
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    const textColor = luminance < 0.5 ? '#FFF' : '#000';
    if (color && !isInternalColor) {
        overlayStyle.background = color;
        overlayStyle[varName('overlay-color')] = textColor;
        arrowStyle[varName('arrow-background-color')] = color;
    }
    return {
        className,
        overlayStyle,
        arrowStyle
    };
};
}),
"[project]/invest/node_modules/antd/es/tooltip/PurePanel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/tooltip/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/tooltip/es/Popup.js [app-ssr] (ecmascript) <export default as Popup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/util.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, placement = 'top', title, color, overlayInnerStyle, classNames, styles } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseColor"])(rootPrefixCls, prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const innerStyles = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const mergedStyle = {
            ...overlayInnerStyle,
            ...colorInfo.overlayStyle
        };
        return {
            container: mergedStyle
        };
    }, [
        overlayInnerStyle,
        colorInfo.overlayStyle
    ]);
    const mergedProps = {
        ...props,
        placement
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        classNames
    ], [
        innerStyles,
        styles
    ], {
        props: mergedProps
    });
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(rootCls, hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: rootClassName,
        style: arrowContentStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-arrow`
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__["Popup"], {
        ...props,
        className: hashId,
        prefixCls: prefixCls,
        classNames: mergedClassNames,
        styles: mergedStyles
    }, title));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/invest/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/motion/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const MotionContent = ({ children })=>{
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    // This will never reach since we will not render this when no children
    /* istanbul ignore next */ if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return children;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: true,
        motionName: `${rootPrefixCls}-fade`,
        motionAppear: true,
        motionEnter: true,
        motionLeave: false,
        removeOnLeave: false
    }, ({ style: motionStyle, className: motionClassName })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(children, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, motionClassName),
                style: {
                    ...oriProps.style,
                    ...motionStyle
                }
            }));
    });
};
const __TURBOPACK__default__export__ = MotionContent;
}),
"[project]/invest/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/trigger/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UniqueProvider$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-ssr] (ecmascript) <export default as UniqueProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$MotionContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const cachedPlacements = [
    null,
    null
];
function uniqueBuiltinPlacements(ori) {
    if (cachedPlacements[0] !== ori) {
        const target = {};
        Object.keys(ori).forEach((placement)=>{
            target[placement] = {
                ...ori[placement],
                dynamicInset: false
            };
        });
        cachedPlacements[0] = ori;
        cachedPlacements[1] = target;
    }
    return cachedPlacements[1];
}
const UniqueProvider = ({ children })=>{
    const renderPopup = (options)=>{
        const { id, builtinPlacements, popup } = options;
        const popupEle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(popup) ? popup() : popup;
        const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements);
        return {
            ...options,
            getPopupContainer: null,
            arrow: false,
            popup: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$MotionContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                key: id
            }, popupEle),
            builtinPlacements: parsedPlacements
        };
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UniqueProvider$3e$__["UniqueProvider"], {
        postTriggerProps: renderPopup
    }, children);
};
const __TURBOPACK__default__export__ = UniqueProvider;
}),
"[project]/invest/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/tooltip/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-ssr] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/ContextIsolator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useZIndex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/motion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/placements.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/zindexContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$table$2f$TableMeasureRowContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/table/TableMeasureRowContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/PurePanel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/util.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const InternalTooltip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, openClassName, getTooltipContainer, color, children, afterOpenChange, arrow: tooltipArrow, destroyTooltipOnHide, destroyOnHidden, title, overlay, trigger, builtinPlacements, autoAdjustOverflow = true, motion, getPopupContainer, placement = 'top', mouseEnterDelay, mouseLeaveDelay, rootClassName, styles, classNames, onOpenChange, // Legacy
    overlayInnerStyle, overlayStyle, overlayClassName, ...restProps } = props;
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const injectFromPopover = props['data-popover-inject'];
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, ...semanticConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('tooltip');
    // When injected from Popover/Popconfirm, skip tooltip-specific semantic config
    // to prevent ConfigProvider tooltip config from leaking into those components
    const { className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, arrow: contextArrow, trigger: contextTrigger, mouseEnterDelay: contextMouseEnterDelay, mouseLeaveDelay: contextMouseLeaveDelay } = injectFromPopover ? {} : semanticConfig;
    const mergedMouseEnterDelay = mouseEnterDelay ?? contextMouseEnterDelay ?? 0.1;
    const mergedMouseLeaveDelay = mouseLeaveDelay ?? contextMouseLeaveDelay ?? 0.1;
    const mergedArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tooltipArrow, contextArrow);
    const mergedShowArrow = mergedArrow.show;
    const mergedTrigger = trigger || contextTrigger || 'hover';
    const mergedGetPopupContainer = getPopupContainer || getTooltipContainer || getContextPopupContainer;
    const mergedDestroyOnHidden = destroyOnHidden ?? !!destroyTooltipOnHide;
    const inTableMeasureRow = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$table$2f$TableMeasureRowContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    // ============================== Ref ===============================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Tooltip');
    const tooltipRef = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const forceAlign = ()=>{
        tooltipRef.current?.forceAlign();
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            forceAlign,
            nativeElement: tooltipRef.current?.nativeElement,
            popupElement: tooltipRef.current?.popupElement
        }));
    // ============================== Warn ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        [
            [
                'overlayStyle',
                'styles.root'
            ],
            [
                'overlayInnerStyle',
                'styles.container'
            ],
            [
                'overlayClassName',
                'classNames.root'
            ],
            [
                'destroyTooltipOnHide',
                'destroyOnHidden'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : "TURBOPACK unreachable";
    }
    // ============================== Open ==============================
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(props.defaultOpen ?? false, props.open);
    const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
    const onInternalOpenChange = (nextOpen)=>{
        setOpen(noTitle ? false : nextOpen);
        if (!noTitle && onOpenChange) {
            onOpenChange(nextOpen);
        }
    };
    const tooltipPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return builtinPlacements || (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            arrowPointAtCenter: mergedArrow?.pointAtCenter ?? false,
            autoAdjustOverflow,
            arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
            borderRadius: token.borderRadius,
            offset: token.marginXXS,
            visibleFirst: true
        });
    }, [
        mergedArrow,
        builtinPlacements,
        token,
        mergedShowArrow,
        autoAdjustOverflow
    ]);
    const memoOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (title === 0) {
            return title;
        }
        return overlay || title || '';
    }, [
        overlay,
        title
    ]);
    const memoOverlayWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        space: true,
        form: true
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(memoOverlay) ? memoOverlay() : memoOverlay);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        trigger: mergedTrigger,
        builtinPlacements: tooltipPlacements,
        getPopupContainer: mergedGetPopupContainer,
        destroyOnHidden: mergedDestroyOnHidden,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay
    };
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const overlayStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(overlayStyle);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles,
        overlayStyleRoot
    ], {
        props: mergedProps
    });
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    let tempOpen = open;
    // Hide tooltip when there is no title or in table measure row
    if (!('open' in props) && noTitle || inTableMeasureRow) {
        tempOpen = false;
    }
    // ============================= Render =============================
    const child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFragment"])(children) ? children : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls, !injectFromPopover);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseColor"])(rootPrefixCls, prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const themeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(rootCls, hashId, cssVarCls);
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(overlayClassName, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
    // ============================ zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useZIndex"])('Tooltip', restProps.zIndex);
    const containerStyle = {
        ...mergedStyles.container,
        ...overlayInnerStyle,
        ...colorInfo.overlayStyle
    };
    const content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        unique: true,
        ...restProps,
        zIndex: zIndex,
        showArrow: mergedShowArrow,
        placement: placement,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            container: mergedClassNames.container,
            arrow: mergedClassNames.arrow,
            uniqueContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(themeCls, mergedClassNames.container)
        },
        styles: {
            root: {
                ...arrowContentStyle,
                ...mergedStyles.root
            },
            container: containerStyle,
            uniqueContainer: containerStyle,
            arrow: mergedStyles.arrow
        },
        ref: tooltipRef,
        overlay: memoOverlayWrapper,
        visible: tempOpen,
        onVisibleChange: onInternalOpenChange,
        afterVisibleChange: afterOpenChange,
        arrowContent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-arrow-content`
        }),
        motion: {
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom-big-fast', typeof motion?.motionName === 'string' ? motion?.motionName : undefined),
            motionDeadline: 1000
        },
        trigger: mergedTrigger,
        builtinPlacements: tooltipPlacements,
        getTooltipContainer: mergedGetPopupContainer,
        destroyOnHidden: mergedDestroyOnHidden
    }, tempOpen && !restProps.disabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        className: childCls
    }) : child);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, content);
});
const Tooltip = InternalTooltip;
if ("TURBOPACK compile-time truthy", 1) {
    Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Tooltip.UniqueProvider = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Tooltip;
}),
"[project]/invest/node_modules/antd/es/popover/style/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/motion/zoom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/placementArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/roundedArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/interface/presetColors.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const FALL_BACK_ORIGIN = '50%';
const genBaseStyle = (token)=>{
    const { componentCls, popoverColor, titleMinWidth, fontWeightStrong, innerPadding, dropShadowPopover, colorTextHeading, borderRadiusLG, zIndexPopup, titleMarginBottom, colorBgElevated, popoverBg, titleBorderBottom, innerContentPadding, titlePadding, antCls } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    return [
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                position: 'absolute',
                top: 0,
                // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
                left: {
                    _skip_check_: true,
                    value: 0
                },
                zIndex: zIndexPopup,
                fontWeight: 400,
                whiteSpace: 'normal',
                textAlign: 'start',
                cursor: 'auto',
                userSelect: 'text',
                filter: dropShadowPopover,
                // When use `autoArrow`, origin will follow the arrow position
                [varName('valid-offset-x')]: varRef('arrow-offset-x', 'var(--arrow-x)'),
                transformOrigin: [
                    varRef('valid-offset-x', FALL_BACK_ORIGIN),
                    `var(--arrow-y, ${FALL_BACK_ORIGIN})`
                ].join(' '),
                [varName('arrow-background-color')]: colorBgElevated,
                width: 'max-content',
                maxWidth: '100vw',
                '&-rtl': {
                    direction: 'rtl'
                },
                '&-hidden': {
                    display: 'none'
                },
                [`${componentCls}-content`]: {
                    position: 'relative'
                },
                [`${componentCls}-container`]: {
                    backgroundColor: popoverBg,
                    backgroundClip: 'padding-box',
                    borderRadius: borderRadiusLG,
                    padding: innerPadding
                },
                [`${componentCls}-title`]: {
                    minWidth: titleMinWidth,
                    marginBottom: titleMarginBottom,
                    color: colorTextHeading,
                    fontWeight: fontWeightStrong,
                    borderBottom: titleBorderBottom,
                    padding: titlePadding
                },
                [`${componentCls}-content`]: {
                    color: popoverColor,
                    padding: innerContentPadding
                }
            }
        },
        // Arrow Style
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token, varRef('arrow-background-color'), {
            arrowShadow: false
        }),
        // Pure Render
        {
            [`${componentCls}-pure`]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow,
                display: 'inline-block'
            }
        }
    ];
};
const genColorStyle = (token)=>{
    const { componentCls, antCls } = token;
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    return {
        [componentCls]: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetColors"].map((colorKey)=>{
            const lightColor = token[`${colorKey}6`];
            return {
                [`&${componentCls}-${colorKey}`]: {
                    [varName('arrow-background-color')]: lightColor,
                    [`${componentCls}-inner`]: {
                        backgroundColor: lightColor
                    },
                    [`${componentCls}-arrow`]: {
                        background: 'transparent'
                    }
                }
            };
        })
    };
};
const prepareComponentToken = (token)=>{
    const { lineWidth, controlHeight, fontHeight, padding, wireframe, zIndexPopupBase, borderRadiusLG, marginXS, lineType, colorSplit, paddingSM } = token;
    const titlePaddingBlockDist = controlHeight - fontHeight;
    const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
    const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
    const popoverPaddingHorizontal = padding;
    return {
        titleMinWidth: 177,
        zIndexPopup: zIndexPopupBase + 30,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowToken"])(token),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
            contentRadius: borderRadiusLG,
            limitVerticalRadius: true
        }),
        // internal
        innerPadding: wireframe ? 0 : 12,
        titleMarginBottom: wireframe ? 0 : marginXS,
        titlePadding: wireframe ? `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px` : 0,
        titleBorderBottom: wireframe ? `${lineWidth}px ${lineType} ${colorSplit}` : 'none',
        innerContentPadding: wireframe ? `${paddingSM}px ${popoverPaddingHorizontal}px` : 0
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Popover', (token)=>{
    const { colorBgElevated, colorText } = token;
    const popoverToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        popoverBg: colorBgElevated,
        popoverColor: colorText
    });
    return [
        genBaseStyle(popoverToken),
        genColorStyle(popoverToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initZoomMotion"])(popoverToken, 'zoom-big')
    ];
}, prepareComponentToken, {
    resetStyle: false,
    deprecatedTokens: [
        [
            'width',
            'titleMinWidth'
        ],
        [
            'minWidth',
            'titleMinWidth'
        ]
    ]
});
}),
"[project]/invest/node_modules/antd/es/popover/PurePanel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>Overlay,
    "RawPurePanel",
    ()=>RawPurePanel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/tooltip/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/tooltip/es/Popup.js [app-ssr] (ecmascript) <export default as Popup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/getRenderPropValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/popover/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Overlay = (props)=>{
    const { title, content, prefixCls, classNames, styles } = props;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(title) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(content)) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(title) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-title`, classNames?.title),
        style: styles?.title
    }, title), (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(content) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-content`, classNames?.content),
        style: styles?.content
    }, content));
};
const RawPurePanel = (props)=>{
    const { hashId, prefixCls, className, style, placement = 'top', title, content, children, classNames, styles } = props;
    const titleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRenderPropValue"])(title);
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRenderPropValue"])(content);
    const mergedProps = {
        ...props,
        placement
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        classNames
    ], [
        styles
    ], {
        props: mergedProps
    });
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: rootClassName,
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-arrow`
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__["Popup"], {
        ...props,
        className: hashId,
        prefixCls: prefixCls,
        classNames: mergedClassNames,
        styles: mergedStyles
    }, children || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Overlay, {
        prefixCls: prefixCls,
        title: titleNode,
        content: contentNode,
        classNames: mergedClassNames,
        styles: mergedStyles
    })));
};
const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RawPurePanel, {
        ...restProps,
        prefixCls: prefixCls,
        hashId: hashId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(className, cssVarCls)
    });
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/invest/node_modules/antd/es/popover/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-ssr] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/getRenderPropValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/motion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/popover/PurePanel.js [app-ssr] (ecmascript)");
// CSSINJS
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/popover/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const InternalPopover = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, title, content, overlayClassName, placement = 'top', trigger, children, mouseEnterDelay, mouseLeaveDelay, onOpenChange, overlayStyle = {}, styles, classNames, motion, arrow: popoverArrow, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, arrow: contextArrow, trigger: contextTrigger, mouseEnterDelay: contextMouseEnterDelay, mouseLeaveDelay: contextMouseLeaveDelay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('popover');
    const mergedMouseEnterDelay = mouseEnterDelay ?? contextMouseEnterDelay ?? 0.1;
    const mergedMouseLeaveDelay = mouseLeaveDelay ?? contextMouseLeaveDelay ?? 0.1;
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const rootPrefixCls = getPrefixCls();
    const mergedArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(popoverArrow, contextArrow);
    const mergedTrigger = trigger || contextTrigger || 'hover';
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Popover');
        ("TURBOPACK compile-time truthy", 1) ? warning(!onOpenChange || onOpenChange.length <= 1, 'usage', 'The second `onOpenChange` parameter is internal and unsupported. Please lock to a previous version if needed.') : "TURBOPACK unreachable";
    }
    // ============================= Styles =============================
    const mergedProps = {
        ...props,
        placement,
        trigger: mergedTrigger,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay,
        overlayStyle,
        styles,
        classNames
    };
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const overlayStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(overlayStyle);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles,
        overlayStyleRoot
    ], {
        props: mergedProps
    });
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(overlayClassName, hashId, cssVarCls, contextClassName, mergedClassNames.root);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(props.defaultOpen ?? false, props.open);
    const settingOpen = (nextOpen)=>{
        setOpen(nextOpen);
        onOpenChange?.(nextOpen);
    };
    const titleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRenderPropValue"])(title);
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRenderPropValue"])(content);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        unique: false,
        arrow: mergedArrow,
        placement: placement,
        trigger: mergedTrigger,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay,
        ...restProps,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            container: mergedClassNames.container,
            arrow: mergedClassNames.arrow
        },
        styles: {
            root: mergedStyles.root,
            container: mergedStyles.container,
            arrow: mergedStyles.arrow
        },
        ref: ref,
        open: open,
        onOpenChange: settingOpen,
        overlay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(titleNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(contentNode) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
            prefixCls: prefixCls,
            title: titleNode,
            content: contentNode,
            classNames: mergedClassNames,
            styles: mergedStyles
        }) : null,
        motion: {
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom-big', typeof motion?.motionName === 'string' ? motion?.motionName : undefined)
        },
        "data-popover-inject": true
    }, children);
});
const Popover = InternalPopover;
Popover._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Popover.displayName = 'Popover';
}
const __TURBOPACK__default__export__ = Popover;
}),
"[project]/invest/node_modules/antd/es/avatar/AvatarGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/Children/toArray.js [app-ssr] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/popover/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/AvatarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const AvatarContextProvider = (props)=>{
    const { size, shape } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const avatarContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            size: props.size || size,
            shape: props.shape || shape
        }), [
        props.size,
        props.shape,
        size,
        shape
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: avatarContextValue
    }, props.children);
};
const AvatarGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, rootClassName, style, maxCount, maxStyle, size, shape, maxPopoverPlacement, maxPopoverTrigger, children, max } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Avatar.Group');
        [
            [
                'maxCount',
                'max={{ count: number }}'
            ],
            [
                'maxStyle',
                'max={{ style: CSSProperties }}'
            ],
            [
                'maxPopoverPlacement',
                'max={{ popover: PopoverProps }}'
            ],
            [
                'maxPopoverTrigger',
                'max={{ popover: PopoverProps }}'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const prefixCls = getPrefixCls('avatar', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(groupPrefixCls, {
        [`${groupPrefixCls}-rtl`]: direction === 'rtl'
    }, cssVarCls, rootCls, className, rootClassName, hashId);
    const childrenWithProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).map((child, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            // eslint-disable-next-line react/no-array-index-key
            key: `avatar-key-${index}`
        }));
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            nativeElement: nativeElementRef.current
        }));
    const mergeCount = max?.count || maxCount;
    const numOfChildren = childrenWithProps.length;
    if (mergeCount && mergeCount < numOfChildren) {
        const childrenShow = childrenWithProps.slice(0, mergeCount);
        const childrenHidden = childrenWithProps.slice(mergeCount, numOfChildren);
        const mergeStyle = max?.style || maxStyle;
        const mergePopoverTrigger = max?.popover?.trigger || maxPopoverTrigger || 'hover';
        const mergePopoverPlacement = max?.popover?.placement || maxPopoverPlacement || 'top';
        const popoverProps = {
            content: childrenHidden,
            ...max?.popover,
            placement: mergePopoverPlacement,
            trigger: mergePopoverTrigger,
            rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${groupPrefixCls}-popover`, max?.popover?.rootClassName)
        };
        childrenShow.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            key: "avatar-popover-key",
            destroyOnHidden: true,
            ...popoverProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            style: mergeStyle
        }, `+${numOfChildren - mergeCount}`)));
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](AvatarContextProvider, {
            shape: shape,
            size: size
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: nativeElementRef,
            className: cls,
            style: style
        }, childrenShow));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](AvatarContextProvider, {
        shape: shape,
        size: size
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: cls,
        style: style
    }, childrenWithProps));
});
const __TURBOPACK__default__export__ = AvatarGroup;
}),
"[project]/invest/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/AvatarGroup.js [app-ssr] (ecmascript)");
"use client";
;
;
const Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Avatar.Group = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/invest/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript) <export default as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript)");
}),
"[project]/invest/node_modules/antd/es/badge/SingleNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const UnitNumber = (props)=>{
    const { prefixCls, value, current, offset = 0 } = props;
    let style;
    if (offset) {
        style = {
            position: 'absolute',
            top: `${offset}00%`,
            left: 0
        };
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-only-unit`, {
            current
        })
    }, value);
};
function getOffset(start, end, unit) {
    let index = start;
    let offset = 0;
    while((index + 10) % 10 !== end){
        index += unit;
        offset += unit;
    }
    return offset;
}
const SingleNumber = (props)=>{
    const { prefixCls, count: originCount, value: originValue } = props;
    const value = Number(originValue);
    const count = Math.abs(originCount);
    const [prevValue, setPrevValue] = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](value);
    const [prevCount, setPrevCount] = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](count);
    // ============================= Events =============================
    const onTransitionEnd = ()=>{
        setPrevValue(value);
        setPrevCount(count);
    };
    // Fallback if transition events are not supported
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const timer = setTimeout(onTransitionEnd, 1000);
        return ()=>clearTimeout(timer);
    }, [
        value
    ]);
    // ============================= Render =============================
    // Render unit list
    let unitNodes;
    let offsetStyle;
    if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
        // Nothing to change
        unitNodes = [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](UnitNumber, {
                ...props,
                key: value,
                current: true
            })
        ];
        offsetStyle = {
            transition: 'none'
        };
    } else {
        unitNodes = [];
        // Fill basic number units
        const end = value + 10;
        const unitNumberList = [];
        for(let index = value; index <= end; index += 1){
            unitNumberList.push(index);
        }
        const unit = prevCount < count ? 1 : -1;
        // Fill with number unit nodes
        const prevIndex = unitNumberList.findIndex((n)=>n % 10 === prevValue);
        // Cut list
        const cutUnitNumberList = unit < 0 ? unitNumberList.slice(0, prevIndex + 1) : unitNumberList.slice(prevIndex);
        unitNodes = cutUnitNumberList.map((n, index)=>{
            const singleUnit = n % 10;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](UnitNumber, {
                ...props,
                key: n,
                value: singleUnit,
                offset: unit < 0 ? index - prevIndex : index,
                current: index === prevIndex
            });
        });
        // Calculate container offset value
        offsetStyle = {
            transform: `translateY(${-getOffset(prevValue, value, unit)}00%)`
        };
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-only`,
        style: offsetStyle,
        onTransitionEnd: onTransitionEnd
    }, unitNodes);
};
const __TURBOPACK__default__export__ = SingleNumber;
}),
"[project]/invest/node_modules/antd/es/badge/ScrollNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$SingleNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/SingleNumber.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ScrollNumber = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, count, className, motionClassName, style, title, show, component: Component = 'sup', children, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('scroll-number', customizePrefixCls);
    // ============================ Render ============================
    const newProps = {
        ...restProps,
        'data-show': show,
        style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className, motionClassName),
        title: title
    };
    // Only integer need motion
    let numberNodes = count;
    if (count && Number(count) % 1 === 0) {
        const numberList = String(count).split('');
        numberNodes = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("bdi", null, numberList.map((num, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$SingleNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                prefixCls: prefixCls,
                count: Number(count),
                value: num,
                // eslint-disable-next-line react/no-array-index-key
                key: numberList.length - i
            })));
    }
    // allow specify the border
    // mock border-color by box-shadow for compatible with old usage:
    // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
    if (style?.borderColor) {
        newProps.style = {
            ...style,
            boxShadow: `0 0 0 1px ${style.borderColor} inset`
        };
    }
    if (children) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(children, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-custom-component`, oriProps?.className, motionClassName)
            }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Component, {
        ...newProps,
        ref: ref
    }, numberNodes);
});
const __TURBOPACK__default__export__ = ScrollNumber;
}),
"[project]/invest/node_modules/antd/es/badge/style/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genPresetColor.js [app-ssr] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
const antStatusProcessing = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antStatusProcessing', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0.5
    },
    '100%': {
        transform: 'scale(2.4)',
        opacity: 0
    }
});
const antZoomBadgeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBadgeIn', {
    '0%': {
        transform: 'scale(0) translate(50%, -50%)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1) translate(50%, -50%)'
    }
});
const antZoomBadgeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBadgeOut', {
    '0%': {
        transform: 'scale(1) translate(50%, -50%)'
    },
    '100%': {
        transform: 'scale(0) translate(50%, -50%)',
        opacity: 0
    }
});
const antNoWrapperZoomBadgeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antNoWrapperZoomBadgeIn', {
    '0%': {
        transform: 'scale(0)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)'
    }
});
const antNoWrapperZoomBadgeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antNoWrapperZoomBadgeOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0)',
        opacity: 0
    }
});
const antBadgeLoadingCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antBadgeLoadingCircle', {
    '0%': {
        transformOrigin: '50%'
    },
    '100%': {
        transform: 'translate(50%, -50%) rotate(360deg)',
        transformOrigin: '50%'
    }
});
const genSharedBadgeStyle = (token)=>{
    const { componentCls, iconCls, antCls, badgeShadowSize, textFontSize, textFontSizeSM, statusSize, dotSize, textFontWeight, indicatorHeight, indicatorHeightSM, marginXS, calc } = token;
    const numberPrefixCls = `${antCls}-scroll-number`;
    const colorPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { darkColor })=>({
            [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
                background: darkColor,
                [`&:not(${componentCls}-count)`]: {
                    color: darkColor
                },
                'a:hover &': {
                    background: darkColor
                }
            }
        }));
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            display: 'inline-block',
            width: 'fit-content',
            lineHeight: 1,
            [`${componentCls}-count`]: {
                display: 'inline-flex',
                justifyContent: 'center',
                zIndex: token.indicatorZIndex,
                minWidth: indicatorHeight,
                height: indicatorHeight,
                color: token.badgeTextColor,
                fontWeight: textFontWeight,
                fontSize: textFontSize,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(indicatorHeight),
                whiteSpace: 'nowrap',
                textAlign: 'center',
                background: token.badgeColor,
                borderRadius: calc(indicatorHeight).div(2).equal(),
                boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(badgeShadowSize)} ${token.badgeShadowColor}`,
                transition: `background-color ${token.motionDurationMid}`,
                a: {
                    color: token.badgeTextColor
                },
                'a:hover': {
                    color: token.badgeTextColor
                },
                'a:hover &': {
                    background: token.badgeColorHover
                }
            },
            [`${componentCls}-count-sm`]: {
                minWidth: indicatorHeightSM,
                height: indicatorHeightSM,
                fontSize: textFontSizeSM,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(indicatorHeightSM),
                borderRadius: calc(indicatorHeightSM).div(2).equal()
            },
            [`${componentCls}-multiple-words`]: {
                paddingInline: token.paddingInline,
                bdi: {
                    unicodeBidi: 'plaintext'
                }
            },
            [`${componentCls}-dot`]: {
                zIndex: token.indicatorZIndex,
                width: dotSize,
                minWidth: dotSize,
                height: dotSize,
                background: token.badgeColor,
                borderRadius: '100%',
                boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(badgeShadowSize)} ${token.badgeShadowColor}`
            },
            [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
                position: 'absolute',
                top: 0,
                insetInlineEnd: 0,
                transform: 'translate(50%, -50%)',
                transformOrigin: '100% 0%',
                [`&${iconCls}-spin`]: {
                    animationName: antBadgeLoadingCircle,
                    animationDuration: '1s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                }
            },
            [`&${componentCls}-status`]: {
                lineHeight: 'inherit',
                verticalAlign: 'baseline',
                [`${componentCls}-status-dot`]: {
                    position: 'relative',
                    top: -1,
                    // Magic number, but seems better experience
                    display: 'inline-block',
                    width: statusSize,
                    height: statusSize,
                    verticalAlign: 'middle',
                    borderRadius: '50%'
                },
                [`${componentCls}-status-success`]: {
                    backgroundColor: token.colorSuccess
                },
                [`${componentCls}-status-processing`]: {
                    overflow: 'visible',
                    color: token.colorInfoTextHover,
                    backgroundColor: token.colorInfo,
                    borderColor: 'currentcolor',
                    '&::after': {
                        position: 'absolute',
                        top: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        borderWidth: badgeShadowSize,
                        borderStyle: 'solid',
                        borderColor: 'inherit',
                        borderRadius: '50%',
                        animationName: antStatusProcessing,
                        animationDuration: token.badgeProcessingDuration,
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'ease-in-out',
                        content: '""'
                    }
                },
                [`${componentCls}-status-default`]: {
                    backgroundColor: token.colorTextPlaceholder
                },
                [`${componentCls}-status-error`]: {
                    backgroundColor: token.colorError
                },
                [`${componentCls}-status-warning`]: {
                    backgroundColor: token.colorWarning
                },
                [`${componentCls}-status-text`]: {
                    marginInlineStart: marginXS,
                    color: token.colorText,
                    fontSize: token.fontSize
                }
            },
            ...colorPreset,
            [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
                animationName: antZoomBadgeIn,
                animationDuration: token.motionDurationSlow,
                animationTimingFunction: token.motionEaseOutBack,
                animationFillMode: 'both'
            },
            [`${componentCls}-zoom-leave`]: {
                animationName: antZoomBadgeOut,
                animationDuration: token.motionDurationSlow,
                animationTimingFunction: token.motionEaseOutBack,
                animationFillMode: 'both'
            },
            [`&${componentCls}-not-a-wrapper`]: {
                [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
                    animationName: antNoWrapperZoomBadgeIn,
                    animationDuration: token.motionDurationSlow,
                    animationTimingFunction: token.motionEaseOutBack
                },
                [`${componentCls}-zoom-leave`]: {
                    animationName: antNoWrapperZoomBadgeOut,
                    animationDuration: token.motionDurationSlow,
                    animationTimingFunction: token.motionEaseOutBack
                },
                [`&:not(${componentCls}-status)`]: {
                    verticalAlign: 'middle'
                },
                [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
                    transform: 'none'
                },
                [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
                    position: 'relative',
                    top: 'auto',
                    display: 'block',
                    transformOrigin: '50% 50%'
                }
            },
            [numberPrefixCls]: {
                overflow: 'hidden',
                transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack}`,
                [`${numberPrefixCls}-only`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: indicatorHeight,
                    transition: `all ${token.motionDurationSlow} ${token.motionEaseOutBack}`,
                    WebkitTransformStyle: 'preserve-3d',
                    WebkitBackfaceVisibility: 'hidden'
                }
            },
            // ====================== RTL =======================
            '&-rtl': {
                direction: 'rtl',
                [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
                    transform: 'translate(-50%, -50%)'
                }
            }
        }
    };
};
const prepareToken = (token)=>{
    const { fontHeight, lineWidth, marginXS, colorBorderBg } = token;
    const badgeFontHeight = fontHeight;
    const badgeShadowSize = lineWidth;
    const badgeTextColor = token.colorTextLightSolid;
    const badgeColor = token.colorError;
    const badgeColorHover = token.colorErrorHover;
    const badgeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        badgeFontHeight,
        badgeShadowSize,
        badgeTextColor,
        badgeColor,
        badgeColorHover,
        badgeShadowColor: colorBorderBg,
        badgeProcessingDuration: '1.2s',
        badgeRibbonOffset: marginXS,
        // Follow token just by Design. Not related with token
        badgeRibbonCornerTransform: 'scaleY(0.75)',
        badgeRibbonCornerFilter: `brightness(75%)`
    });
    return badgeToken;
};
const prepareComponentToken = (token)=>{
    const { fontSize, lineHeight, fontSizeSM, lineWidth, paddingXS } = token;
    return {
        indicatorZIndex: 'auto',
        indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
        indicatorHeightSM: fontSize,
        dotSize: fontSizeSM / 2,
        textFontSize: fontSizeSM,
        textFontSizeSM: fontSizeSM,
        textFontWeight: 'normal',
        statusSize: fontSizeSM / 2,
        paddingInline: paddingXS
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Badge', (token)=>{
    const badgeToken = prepareToken(token);
    return genSharedBadgeStyle(badgeToken);
}, prepareComponentToken);
}),
"[project]/invest/node_modules/antd/es/badge/Badge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/motion/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@rc-component/util/es/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$ScrollNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/ScrollNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, scrollNumberPrefixCls: customizeScrollNumberPrefixCls, children, status, text, color, count = null, overflowCount = 99, dot = false, size = 'medium', title, offset, style, className, rootClassName, classNames, styles, showZero = false, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('badge');
    const prefixCls = getPrefixCls('badge', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Badge');
        warning.deprecated(size !== 'default', 'size="default"', 'size="medium"');
    }
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        overflowCount,
        size,
        dot,
        showZero
    };
    // ================================ Misc ================================
    const numberedDisplayCount = count > overflowCount ? `${overflowCount}+` : count;
    const isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0 || text === '0' || text === 0;
    const ignoreCount = count === null || isZero && !showZero;
    const hasStatus = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(status) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(color)) && ignoreCount;
    const hasStatusValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(status) || !isZero;
    const isStatusBadge = Boolean(!children && hasStatus && (text || hasStatusValue));
    // =============================== Styles ===============================
    const offsetStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!offset) {
            return undefined;
        }
        const horizontalOffset = Number.parseFloat(offset[0]);
        return {
            marginTop: offset[1],
            insetInlineEnd: -horizontalOffset
        };
    }, [
        offset
    ]);
    const mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...offsetStyle,
            ...contextStyle,
            ...style
        }), [
        offsetStyle,
        style,
        contextStyle
    ]);
    const legacyStyleKey = isStatusBadge ? 'root' : 'indicator';
    const contextLegacyStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, legacyStyleKey);
    const componentLegacyStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, legacyStyleKey);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextLegacyStyle,
        styles,
        componentLegacyStyle
    ], {
        props: mergedProps
    });
    const showAsDot = dot && !isZero;
    const mergedCount = showAsDot ? '' : numberedDisplayCount;
    const isHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const isEmpty = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(mergedCount) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactRenderable"])(text);
        return (isEmpty || isZero && !showZero) && !showAsDot;
    }, [
        mergedCount,
        isZero,
        showZero,
        showAsDot,
        text
    ]);
    // Count should be cache in case hidden change it
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(count);
    if (!isHidden) {
        countRef.current = count;
    }
    const livingCount = countRef.current;
    // We need cache count since remove motion should not change count display
    const displayCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(mergedCount);
    if (!isHidden) {
        displayCountRef.current = mergedCount;
    }
    const displayCount = displayCountRef.current;
    // We will cache the dot status to avoid shaking on leaved motion
    const isDotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(showAsDot);
    if (!isHidden) {
        isDotRef.current = showAsDot;
    }
    // =============================== Render ===============================
    // >>> Title
    const fallbackTitleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(livingCount) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(livingCount) ? livingCount : undefined;
    const titleNode = title === null || title === false ? undefined : title ?? fallbackTitleNode;
    // >>> Status Text
    const showStatusTextNode = !isHidden && (text === 0 ? showZero : !!text && text !== true);
    const statusTextNode = !showStatusTextNode ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: isStatusBadge ? {
            color: mergedStyles.root?.color
        } : undefined,
        className: `${prefixCls}-status-text`
    }, text);
    // >>> Display Component
    const displayNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(livingCount) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(livingCount, (oriProps)=>({
            style: {
                ...mergedStyle,
                ...oriProps.style
            }
        })) : undefined;
    // InternalColor
    const isInternalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresetColor"])(color, false);
    // Shared styles
    const statusCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.indicator, {
        [`${prefixCls}-status-dot`]: hasStatus,
        [`${prefixCls}-status-${status}`]: !!status,
        [`${prefixCls}-color-${color}`]: isInternalColor
    });
    const statusStyle = {};
    if (color && !isInternalColor) {
        statusStyle.color = color;
        statusStyle.background = color;
    }
    const badgeClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-status`]: hasStatus,
        [`${prefixCls}-not-a-wrapper`]: !children,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, contextClassName, mergedClassNames.root, hashId, cssVarCls);
    // <Badge status="success" />
    if (isStatusBadge) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            ref: ref,
            ...restProps,
            className: badgeClassName,
            style: {
                ...offsetStyle,
                ...mergedStyles.root
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: statusCls,
            style: {
                ...mergedStyles.indicator,
                ...statusStyle
            }
        }), statusTextNode);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ref: ref,
        ...restProps,
        className: badgeClassName,
        style: mergedStyles.root
    }, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: !isHidden,
        motionName: `${prefixCls}-zoom`,
        motionAppear: false,
        motionDeadline: 1000
    }, ({ className: motionClassName })=>{
        const scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
        const isDot = isDotRef.current;
        const scrollNumberCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.indicator, {
            [`${prefixCls}-dot`]: isDot,
            [`${prefixCls}-count`]: !isDot,
            [`${prefixCls}-count-sm`]: size === 'small',
            [`${prefixCls}-multiple-words`]: !isDot && displayCount && displayCount.toString().length > 1,
            [`${prefixCls}-status-${status}`]: !!status,
            [`${prefixCls}-color-${color}`]: isInternalColor
        });
        const scrollNumberStyle = {
            ...offsetStyle,
            ...mergedStyles.indicator
        };
        if (color && !isInternalColor) {
            scrollNumberStyle.background = color;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$ScrollNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: scrollNumberPrefixCls,
            show: !isHidden,
            motionClassName: motionClassName,
            className: scrollNumberCls,
            count: displayCount,
            title: titleNode,
            style: scrollNumberStyle,
            key: "scrollNumber"
        }, displayNode);
    }), statusTextNode);
});
if ("TURBOPACK compile-time truthy", 1) {
    Badge.displayName = 'Badge';
}
const __TURBOPACK__default__export__ = Badge;
}),
"[project]/invest/node_modules/antd/es/badge/style/ribbon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genPresetColor.js [app-ssr] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
;
;
;
;
// ============================== Ribbon ==============================
const genRibbonStyle = (token)=>{
    const { antCls, badgeFontHeight, marginXS, badgeRibbonOffset, calc } = token;
    const ribbonPrefixCls = `${antCls}-ribbon`;
    const ribbonWrapperPrefixCls = `${antCls}-ribbon-wrapper`;
    const statusRibbonPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { darkColor })=>({
            [`&${ribbonPrefixCls}-color-${colorKey}`]: {
                background: darkColor,
                color: darkColor
            }
        }));
    return {
        [ribbonWrapperPrefixCls]: {
            position: 'relative'
        },
        [ribbonPrefixCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'absolute',
            top: marginXS,
            padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)}`,
            color: token.colorPrimary,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(badgeFontHeight),
            whiteSpace: 'nowrap',
            backgroundColor: token.colorPrimary,
            borderRadius: token.borderRadiusSM,
            [`${ribbonPrefixCls}-content`]: {
                color: token.badgeTextColor
            },
            [`${ribbonPrefixCls}-corner`]: {
                position: 'absolute',
                top: '100%',
                width: badgeRibbonOffset,
                height: badgeRibbonOffset,
                color: 'currentcolor',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(badgeRibbonOffset).div(2).equal())} solid`,
                transform: token.badgeRibbonCornerTransform,
                transformOrigin: 'top',
                filter: token.badgeRibbonCornerFilter
            },
            ...statusRibbonPreset,
            [`&${ribbonPrefixCls}-placement-end`]: {
                insetInlineEnd: calc(badgeRibbonOffset).mul(-1).equal(),
                borderEndEndRadius: 0,
                [`${ribbonPrefixCls}-corner`]: {
                    insetInlineEnd: 0,
                    borderInlineEndColor: 'transparent',
                    borderBlockEndColor: 'transparent'
                }
            },
            [`&${ribbonPrefixCls}-placement-start`]: {
                insetInlineStart: calc(badgeRibbonOffset).mul(-1).equal(),
                borderEndStartRadius: 0,
                [`${ribbonPrefixCls}-corner`]: {
                    insetInlineStart: 0,
                    borderBlockEndColor: 'transparent',
                    borderInlineStartColor: 'transparent'
                }
            },
            // ====================== RTL =======================
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Badge',
    'Ribbon'
], (token)=>{
    const badgeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return genRibbonStyle(badgeToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/invest/node_modules/antd/es/badge/Ribbon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$ribbon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/style/ribbon.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Ribbon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, prefixCls: customizePrefixCls, style, color, children, text, placement = 'end', rootClassName, styles, classNames: ribbonClassNames } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('ribbon');
    const prefixCls = getPrefixCls('ribbon', customizePrefixCls);
    const wrapperCls = `${prefixCls}-wrapper`;
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$ribbon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, wrapperCls);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        placement
    };
    const contextIndicatorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, 'indicator');
    const indicatorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, 'indicator');
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        ribbonClassNames
    ], [
        contextStyles,
        contextIndicatorStyle,
        styles,
        indicatorStyle
    ], {
        props: mergedProps
    });
    const colorInPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresetColor"])(color, false);
    const ribbonCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-placement-${placement}`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-color-${color}`]: colorInPreset
    }, className, contextClassName, mergedClassNames.indicator);
    const colorStyle = {};
    const cornerColorStyle = {};
    if (color && !colorInPreset) {
        colorStyle.background = color;
        cornerColorStyle.color = color;
    }
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            nativeElement: nativeElementRef.current
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(wrapperCls, rootClassName, hashId, cssVarCls, mergedClassNames.root),
        style: mergedStyles.root
    }, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(ribbonCls, hashId),
        style: {
            ...colorStyle,
            ...mergedStyles.indicator
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-content`, mergedClassNames.content),
        style: mergedStyles.content
    }, text), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-corner`,
        style: cornerColorStyle
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Ribbon.displayName = 'Ribbon';
}
const __TURBOPACK__default__export__ = Ribbon;
}),
"[project]/invest/node_modules/antd/es/badge/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Ribbon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/Ribbon.js [app-ssr] (ecmascript)");
"use client";
;
;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Badge.Ribbon = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Ribbon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Badge;
}),
"[project]/invest/node_modules/antd/es/badge/index.js [app-ssr] (ecmascript) <export default as Badge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/antd/es/badge/index.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=8bb56_antd_es_5fac7c09._.js.map