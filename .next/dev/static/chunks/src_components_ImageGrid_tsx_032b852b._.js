(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ImageGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ImageGrid(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "0fd121a1d58d700999259f7f923d4148c1cb24c1810261126bfdd348a29133f9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0fd121a1d58d700999259f7f923d4148c1cb24c1810261126bfdd348a29133f9";
    }
    const { images, variant: t1, seriesTitle: t2 } = t0;
    const variant = t1 === undefined ? "grid" : t1;
    const seriesTitle = t2 === undefined ? "series" : t2;
    const seriesColumns = images.length <= 1 ? "columns-1" : images.length <= 4 ? "columns-1 md:columns-2 lg:columns-2" : "columns-1 md:columns-2 lg:columns-3";
    const columnClasses = variant === "series" ? seriesColumns : "columns-1 md:columns-2";
    const [activeSrc, setActiveSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    let t4;
    if ($[1] !== activeSrc) {
        t3 = ({
            "ImageGrid[useEffect()]": ()=>{
                if (!activeSrc) {
                    return;
                }
                const handleKeyDown = {
                    "ImageGrid[useEffect() > handleKeyDown]": (event)=>{
                        if (event.key === "Escape") {
                            setActiveSrc(null);
                        }
                    }
                }["ImageGrid[useEffect() > handleKeyDown]"];
                window.addEventListener("keydown", handleKeyDown);
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["ImageGrid[useEffect()]"];
        t4 = [
            activeSrc
        ];
        $[1] = activeSrc;
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = `${columnClasses} gap-8 lg:gap-12 [column-fill:_balance]`;
    let t6;
    if ($[4] !== images || $[5] !== seriesTitle) {
        let t7;
        if ($[7] !== seriesTitle) {
            t7 = ({
                "ImageGrid[images.map()]": (src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-pointer overflow-hidden break-inside-avoid mb-8 lg:mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "w-full text-left",
                            onClick: {
                                "ImageGrid[images.map() > <button>.onClick]": ()=>setActiveSrc(src)
                            }["ImageGrid[images.map() > <button>.onClick]"],
                            "aria-label": "View image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src,
                                    alt: `Photography - ${seriesTitle} series`,
                                    className: "w-full h-auto",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ImageGrid.tsx",
                                    lineNumber: 64,
                                    columnNumber: 194
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageGrid.tsx",
                                lineNumber: 64,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageGrid.tsx",
                            lineNumber: 62,
                            columnNumber: 140
                        }, this)
                    }, src, false, {
                        fileName: "[project]/src/components/ImageGrid.tsx",
                        lineNumber: 62,
                        columnNumber: 43
                    }, this)
            })["ImageGrid[images.map()]"];
            $[7] = seriesTitle;
            $[8] = t7;
        } else {
            t7 = $[8];
        }
        t6 = images.map(t7);
        $[4] = images;
        $[5] = seriesTitle;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[9] !== t5 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/ImageGrid.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== activeSrc || $[13] !== seriesTitle) {
        t8 = activeSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6",
            role: "dialog",
            "aria-modal": "true",
            onClick: {
                "ImageGrid[<div>.onClick]": ()=>setActiveSrc(null)
            }["ImageGrid[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: activeSrc,
                alt: `Photography - ${seriesTitle} large view`,
                className: "max-h-[90vh] max-w-[90vw] object-contain",
                onClick: _ImageGridImgOnClick
            }, void 0, false, {
                fileName: "[project]/src/components/ImageGrid.tsx",
                lineNumber: 91,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ImageGrid.tsx",
            lineNumber: 89,
            columnNumber: 22
        }, this) : null;
        $[12] = activeSrc;
        $[13] = seriesTitle;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                t8
            ]
        }, void 0, true);
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
}
_s(ImageGrid, "vPbc749bSvnnlMjYclN+819QfJc=");
_c = ImageGrid;
function _ImageGridImgOnClick(event_0) {
    return event_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ImageGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ImageGrid_tsx_032b852b._.js.map