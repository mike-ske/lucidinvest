(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/elements/FullHeightWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FullHeightWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function FullHeightWrapper({ children, className = '' }) {
    _s();
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FullHeightWrapper.useEffect": ()=>{
            const updateHeight = {
                "FullHeightWrapper.useEffect.updateHeight": ()=>setHeight(window.innerHeight)
            }["FullHeightWrapper.useEffect.updateHeight"];
            // Set initial height
            updateHeight();
            // Listen for window resize
            window.addEventListener('resize', updateHeight);
            // Cleanup listener on unmount
            return ({
                "FullHeightWrapper.useEffect": ()=>window.removeEventListener('resize', updateHeight)
            })["FullHeightWrapper.useEffect"];
        }
    }["FullHeightWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `full-height ${className}`,
        style: {
            height: height ? `${height}px` : '100vh'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/elements/FullHeightWrapper.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(FullHeightWrapper, "B6pUubs9VOjkny8u5tJZ/0FzAOs=");
_c = FullHeightWrapper;
var _c;
__turbopack_context__.k.register(_c, "FullHeightWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/assets/css/Marquee.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "Marquee-module__5uvcCq__content",
  "marquee": "Marquee-module__5uvcCq__marquee",
  "marquee-down": "Marquee-module__5uvcCq__marquee-down",
  "marquee-left": "Marquee-module__5uvcCq__marquee-left",
  "marquee-right": "Marquee-module__5uvcCq__marquee-right",
  "marquee-up": "Marquee-module__5uvcCq__marquee-up",
  "marquee_down": "Marquee-module__5uvcCq__marquee_down",
  "marquee_left": "Marquee-module__5uvcCq__marquee_left",
  "marquee_right": "Marquee-module__5uvcCq__marquee_right",
  "marquee_up": "Marquee-module__5uvcCq__marquee_up",
  "pauseOnHover": "Marquee-module__5uvcCq__pauseOnHover",
  "track": "Marquee-module__5uvcCq__track",
});
}),
"[project]/components/elements/Marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/public/assets/css/Marquee.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Marquee({ children, direction = 'left', speed = 20, pauseOnHover = false, className = '' }) {
    _s();
    const animationDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Marquee.useMemo[animationDuration]": ()=>`${speed}s`
    }["Marquee.useMemo[animationDuration]"], [
        speed
    ]);
    const marqueeClass = [
        __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee,
        __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`marquee_${direction}`],
        pauseOnHover ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pauseOnHover : '',
        className
    ].join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: marqueeClass,
        style: {
            ['--duration']: animationDuration
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/elements/Marquee.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/elements/Marquee.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/elements/Marquee.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/elements/Marquee.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Marquee, "VcZFY1DYzj673qaUUG4Iv58ZbJs=");
_c = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6a147456._.js.map