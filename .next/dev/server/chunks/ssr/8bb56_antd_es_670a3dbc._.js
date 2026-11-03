module.exports = [
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

//# sourceMappingURL=8bb56_antd_es_670a3dbc._.js.map