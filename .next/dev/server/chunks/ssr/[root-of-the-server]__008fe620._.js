module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/elements/FullHeightWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FullHeightWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function FullHeightWrapper({ children, className = '' }) {
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateHeight = ()=>setHeight(window.innerHeight);
        // Set initial height
        updateHeight();
        // Listen for window resize
        window.addEventListener('resize', updateHeight);
        // Cleanup listener on unmount
        return ()=>window.removeEventListener('resize', updateHeight);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/public/assets/css/Marquee.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/components/elements/Marquee.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/public/assets/css/Marquee.module.css [app-ssr] (css module)");
'use client';
;
;
;
function Marquee({ children, direction = 'left', speed = 20, pauseOnHover = false, className = '' }) {
    const animationDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`${speed}s`, [
        speed
    ]);
    const marqueeClass = [
        __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marquee,
        __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][`marquee_${direction}`],
        pauseOnHover ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pauseOnHover : '',
        className
    ].join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: marqueeClass,
        style: {
            ['--duration']: animationDuration
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].track,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/elements/Marquee.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$css$2f$Marquee$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__008fe620._.js.map