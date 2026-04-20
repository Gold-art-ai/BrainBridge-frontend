(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/brainbridge/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/brainbridge/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/brainbridge/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/brainbridge/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/brainbridge/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/brainbridge/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/brainbridge/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider_default,
    "ReactReduxContext",
    ()=>ReactReduxContext,
    "batch",
    ()=>batch,
    "connect",
    ()=>connect_default,
    "createDispatchHook",
    ()=>createDispatchHook,
    "createSelectorHook",
    ()=>createSelectorHook,
    "createStoreHook",
    ()=>createStoreHook,
    "shallowEqual",
    ()=>shallowEqual,
    "useDispatch",
    ()=>useDispatch,
    "useSelector",
    ()=>useSelector,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/utils/react.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/hooks/useSelector.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)");
;
// src/utils/react-is.ts
var IS_REACT_19 = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].startsWith("19");
var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for(IS_REACT_19 ? "react.transitional.element" : "react.element");
var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
    return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) ? true : false;
}
function typeOf(object) {
    if (typeof object === "object" && object !== null) {
        const { $$typeof } = object;
        switch($$typeof){
            case REACT_ELEMENT_TYPE:
                switch(object = object.type, object){
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                        return object;
                    default:
                        switch(object = object && object.$$typeof, object){
                            case REACT_CONTEXT_TYPE:
                            case REACT_FORWARD_REF_TYPE:
                            case REACT_LAZY_TYPE:
                            case REACT_MEMO_TYPE:
                                return object;
                            case REACT_CONSUMER_TYPE:
                                return object;
                            default:
                                return $$typeof;
                        }
                }
            case REACT_PORTAL_TYPE:
                return $$typeof;
        }
    }
}
function isContextConsumer(object) {
    return IS_REACT_19 ? typeOf(object) === REACT_CONSUMER_TYPE : typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
    if (!selector) {
        throw new Error(`Unexpected value for ${methodName} in connect.`);
    } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
        if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
            warning(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
        }
    }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
    verify(mapStateToProps, "mapStateToProps");
    verify(mapDispatchToProps, "mapDispatchToProps");
    verify(mergeProps, "mergeProps");
}
// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, { areStatesEqual, areOwnPropsEqual, areStatePropsEqual }) {
    let hasRunAtLeastOnce = false;
    let state;
    let ownProps;
    let stateProps;
    let dispatchProps;
    let mergedProps;
    function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
    }
    function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewState() {
        const nextStateProps = mapStateToProps(state, ownProps);
        const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
        const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
}
function finalPropsSelectorFactory(dispatch, { initMapStateToProps, initMapDispatchToProps, initMergeProps, ...options }) {
    const mapStateToProps = initMapStateToProps(dispatch, options);
    const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    const mergeProps = initMergeProps(dispatch, options);
    if ("TURBOPACK compile-time truthy", 1) {
        verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
    }
    return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = (...args)=>dispatch(actionCreator(...args));
        }
    }
    return boundActionCreators;
}
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    const proto = Object.getPrototypeOf(obj);
    if (proto === null) return true;
    let baseProto = proto;
    while(Object.getPrototypeOf(baseProto) !== null){
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
    if (!isPlainObject(value)) {
        warning(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
    }
}
// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch) {
        const constant = getConstant(dispatch);
        function constantSelector() {
            return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
    };
}
function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, { displayName }) {
        const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
        };
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
            proxy.mapToProps = mapToProps;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
            let props = proxy(stateOrDispatch, ownProps);
            if (typeof props === "function") {
                proxy.mapToProps = props;
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                props = proxy(stateOrDispatch, ownProps);
            }
            if ("TURBOPACK compile-time truthy", 1) verifyPlainObject(props, displayName, methodName);
            return props;
        };
        return proxy;
    };
}
// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
    return (dispatch, options)=>{
        throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
    };
}
// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant((dispatch)=>// @ts-ignore
        bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch)=>({
            dispatch
        })) : typeof mapDispatchToProps === "function" ? // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps") : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}
// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(()=>({})) : typeof mapStateToProps === "function" ? // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}
// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps
    };
}
function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
        let hasRunOnce = false;
        let mergedProps;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
            if (hasRunOnce) {
                if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
            } else {
                hasRunOnce = true;
                mergedProps = nextMergedProps;
                if ("TURBOPACK compile-time truthy", 1) verifyPlainObject(mergedProps, displayName, "mergeProps");
            }
            return mergedProps;
        };
    };
}
function mergePropsFactory(mergeProps) {
    return !mergeProps ? ()=>defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}
// src/utils/batch.ts
function defaultNoopBatch(callback) {
    callback();
}
// src/utils/Subscription.ts
function createListenerCollection() {
    let first = null;
    let last = null;
    return {
        clear () {
            first = null;
            last = null;
        },
        notify () {
            defaultNoopBatch(()=>{
                let listener = first;
                while(listener){
                    listener.callback();
                    listener = listener.next;
                }
            });
        },
        get () {
            const listeners = [];
            let listener = first;
            while(listener){
                listeners.push(listener);
                listener = listener.next;
            }
            return listeners;
        },
        subscribe (callback) {
            let isSubscribed = true;
            const listener = last = {
                callback,
                next: null,
                prev: last
            };
            if (listener.prev) {
                listener.prev.next = listener;
            } else {
                first = listener;
            }
            return function unsubscribe() {
                if (!isSubscribed || first === null) return;
                isSubscribed = false;
                if (listener.next) {
                    listener.next.prev = listener.prev;
                } else {
                    last = listener.prev;
                }
                if (listener.prev) {
                    listener.prev.next = listener.next;
                } else {
                    first = listener.next;
                }
            };
        }
    };
}
var nullListeners = {
    notify () {},
    get: ()=>[]
};
function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    let subscriptionsAmount = 0;
    let selfSubscribed = false;
    function addNestedSub(listener) {
        trySubscribe();
        const cleanupListener = listeners.subscribe(listener);
        let removed = false;
        return ()=>{
            if (!removed) {
                removed = true;
                cleanupListener();
                tryUnsubscribe();
            }
        };
    }
    function notifyNestedSubs() {
        listeners.notify();
    }
    function handleChangeWrapper() {
        if (subscription.onStateChange) {
            subscription.onStateChange();
        }
    }
    function isSubscribed() {
        return selfSubscribed;
    }
    function trySubscribe() {
        subscriptionsAmount++;
        if (!unsubscribe) {
            unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
            listeners = createListenerCollection();
        }
    }
    function tryUnsubscribe() {
        subscriptionsAmount--;
        if (unsubscribe && subscriptionsAmount === 0) {
            unsubscribe();
            unsubscribe = void 0;
            listeners.clear();
            listeners = nullListeners;
        }
    }
    function trySubscribeSelf() {
        if (!selfSubscribed) {
            selfSubscribed = true;
            trySubscribe();
        }
    }
    function tryUnsubscribeSelf() {
        if (selfSubscribed) {
            selfSubscribed = false;
            tryUnsubscribe();
        }
    }
    const subscription = {
        addNestedSub,
        notifyNestedSubs,
        handleChangeWrapper,
        isSubscribed,
        trySubscribe: trySubscribeSelf,
        tryUnsubscribe: tryUnsubscribeSelf,
        getListeners: ()=>listeners
    };
    return subscription;
}
// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = ()=>!!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = ()=>typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = ()=>isDOM || isReactNative ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
// src/utils/shallowEqual.ts
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
// src/utils/hoistStatics.ts
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {
    [ForwardRef]: FORWARD_REF_STATICS,
    [Memo]: MEMO_STATICS
};
function getStatics(component) {
    if (isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
    if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
            const inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent);
            }
        }
        let keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        const targetStatics = getStatics(targetComponent);
        const sourceStatics = getStatics(sourceComponent);
        for(let i = 0; i < keys.length; ++i){
            const key = keys[i];
            if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
// src/components/Context.ts
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */ {};
function getContext() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]) return {};
    const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
    let realContext = contextMap.get(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]);
    if (!realContext) {
        realContext = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
        if ("TURBOPACK compile-time truthy", 1) {
            realContext.displayName = "ReactRedux";
        }
        contextMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"], realContext);
    }
    return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
// src/components/connect.tsx
var NO_SUBSCRIPTION_ARRAY = [
    null,
    null
];
var stringifyComponent = (Comp)=>{
    try {
        return JSON.stringify(Comp);
    } catch (err) {
        return String(Comp);
    }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
    useIsomorphicLayoutEffect({
        "useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect": ()=>effectFunc(...effectArgs)
    }["useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect"], dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
    lastWrapperProps.current = wrapperProps;
    renderIsScheduled.current = false;
    if (childPropsFromStoreUpdate.current) {
        childPropsFromStoreUpdate.current = null;
        notifyNestedSubs();
    }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
    if (!shouldHandleStateChanges) return ()=>{};
    let didUnsubscribe = false;
    let lastThrownError = null;
    const checkForUpdates = ()=>{
        if (didUnsubscribe || !isMounted.current) {
            return;
        }
        const latestStoreState = store.getState();
        let newChildProps, error;
        try {
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
        } catch (e) {
            error = e;
            lastThrownError = e;
        }
        if (!error) {
            lastThrownError = null;
        }
        if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
                notifyNestedSubs();
            }
        } else {
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true;
            additionalSubscribeListener();
        }
    };
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    const unsubscribeWrapper = ()=>{
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
        if (lastThrownError) {
            throw lastThrownError;
        }
    };
    return unsubscribeWrapper;
}
function strictEqual(a, b) {
    return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, { // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
// @ts-ignore
pure, areStatesEqual = strictEqual, areOwnPropsEqual = shallowEqual, areStatePropsEqual = shallowEqual, areMergedPropsEqual = shallowEqual, // use React's forwardRef to expose a ref of the wrapped component
forwardRef = false, // the context consumer to use
context = ReactReduxContext } = {}) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
            hasWarnedAboutDeprecatedPureOption = true;
            warning('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
        }
    }
    const Context = context;
    const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
    const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
    const initMergeProps = mergePropsFactory(mergeProps);
    const shouldHandleStateChanges = Boolean(mapStateToProps);
    const wrapWithConnect = (WrappedComponent)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
            if (!isValid) throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
        }
        const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
        const displayName = `Connect(${wrappedComponentName})`;
        const selectorFactoryOptions = {
            shouldHandleStateChanges,
            displayName,
            wrappedComponentName,
            WrappedComponent,
            // @ts-ignore
            initMapStateToProps,
            initMapDispatchToProps,
            initMergeProps,
            areStatesEqual,
            areStatePropsEqual,
            areOwnPropsEqual,
            areMergedPropsEqual
        };
        function ConnectFunction(props) {
            const [propsContext, reactReduxForwardedRef, wrapperProps] = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo": ()=>{
                    const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
                    return [
                        props.context,
                        reactReduxForwardedRef2,
                        wrapperProps2
                    ];
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo"], [
                props
            ]);
            const ContextToUse = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]": ()=>{
                    let ResultContext = Context;
                    if (propsContext?.Consumer) {
                        if ("TURBOPACK compile-time truthy", 1) {
                            const isValid = /* @__PURE__ */ isContextConsumer(// @ts-ignore
                            /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](propsContext.Consumer, null));
                            if (!isValid) {
                                throw new Error("You must pass a valid React context consumer as `props.context`");
                            }
                            ResultContext = propsContext;
                        }
                    }
                    return ResultContext;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]"], [
                propsContext,
                Context
            ]);
            const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ContextToUse);
            const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
            const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
            if (("TURBOPACK compile-time value", "development") !== "production" && !didStoreComeFromProps && !didStoreComeFromContext) {
                throw new Error(`Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`);
            }
            const store = didStoreComeFromProps ? props.store : contextValue.store;
            const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
            const childPropsSelector = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]": ()=>{
                    return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]"], [
                store
            ]);
            const [subscription, notifyNestedSubs] = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo": ()=>{
                    if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
                    const subscription2 = createSubscription(store, didStoreComeFromProps ? void 0 : contextValue.subscription);
                    const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
                    return [
                        subscription2,
                        notifyNestedSubs2
                    ];
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo"], [
                store,
                didStoreComeFromProps,
                contextValue
            ]);
            const overriddenContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]": ()=>{
                    if (didStoreComeFromProps) {
                        return contextValue;
                    }
                    return {
                        ...contextValue,
                        subscription
                    };
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]"], [
                didStoreComeFromProps,
                contextValue,
                subscription
            ]);
            const lastChildProps = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            const lastWrapperProps = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](wrapperProps);
            const childPropsFromStoreUpdate = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            const renderIsScheduled = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
            const isMounted = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
            const latestSubscriptionCallbackError = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            useIsomorphicLayoutEffect({
                "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                    isMounted.current = true;
                    return ({
                        "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                            isMounted.current = false;
                        }
                    })["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"];
                }
            }["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"], []);
            const actualChildPropsSelector = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector]": ()=>{
                    const selector = {
                        "connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector].selector": ()=>{
                            if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
                                return childPropsFromStoreUpdate.current;
                            }
                            return childPropsSelector(store.getState(), wrapperProps);
                        }
                    }["connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector].selector"];
                    return selector;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector]"], [
                store,
                wrapperProps
            ]);
            const subscribeForReact = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact]": ()=>{
                    const subscribe = {
                        "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe": (reactListener)=>{
                            if (!subscription) {
                                return ({
                                    "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe": ()=>{}
                                })["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe"];
                            }
                            return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
                            childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
                        }
                    }["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe"];
                    return subscribe;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact]"], [
                subscription
            ]);
            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
                lastWrapperProps,
                lastChildProps,
                renderIsScheduled,
                wrapperProps,
                childPropsFromStoreUpdate,
                notifyNestedSubs
            ]);
            let actualChildProps;
            try {
                actualChildProps = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](// TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
                subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
                // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
                actualChildPropsSelector, getServerState ? ({
                    "connect.wrapWithConnect.ConnectFunction.useSyncExternalStore": ()=>childPropsSelector(getServerState(), wrapperProps)
                })["connect.wrapWithConnect.ConnectFunction.useSyncExternalStore"] : actualChildPropsSelector);
            } catch (err) {
                if (latestSubscriptionCallbackError.current) {
                    ;
                    err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
                }
                throw err;
            }
            useIsomorphicLayoutEffect({
                "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                    latestSubscriptionCallbackError.current = void 0;
                    childPropsFromStoreUpdate.current = void 0;
                    lastChildProps.current = actualChildProps;
                }
            }["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"]);
            const renderedWrappedComponent = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]": ()=>{
                    return(// @ts-ignore
                    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](WrappedComponent, {
                        ...actualChildProps,
                        ref: reactReduxForwardedRef
                    }));
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]"], [
                reactReduxForwardedRef,
                WrappedComponent,
                actualChildProps
            ]);
            const renderedChild = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[renderedChild]": ()=>{
                    if (shouldHandleStateChanges) {
                        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ContextToUse.Provider, {
                            value: overriddenContextValue
                        }, renderedWrappedComponent);
                    }
                    return renderedWrappedComponent;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[renderedChild]"], [
                ContextToUse,
                renderedWrappedComponent,
                overriddenContextValue
            ]);
            return renderedChild;
        }
        const _Connect = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](ConnectFunction);
        const Connect = _Connect;
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = ConnectFunction.displayName = displayName;
        if (forwardRef) {
            const _forwarded = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function forwardConnectRef(props, ref) {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Connect, {
                    ...props,
                    reactReduxForwardedRef: ref
                });
            });
            const forwarded = _forwarded;
            forwarded.displayName = displayName;
            forwarded.WrappedComponent = WrappedComponent;
            return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
        }
        return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
    };
    return wrapWithConnect;
}
var connect_default = connect;
// src/components/Provider.tsx
function Provider(providerProps) {
    const { children, context, serverState, store } = providerProps;
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Provider.useMemo[contextValue]": ()=>{
            const subscription = createSubscription(store);
            const baseContextValue = {
                store,
                subscription,
                getServerState: serverState ? ({
                    "Provider.useMemo[contextValue]": ()=>serverState
                })["Provider.useMemo[contextValue]"] : void 0
            };
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                const { identityFunctionCheck = "once", stabilityCheck = "once" } = providerProps;
                return /* @__PURE__ */ Object.assign(baseContextValue, {
                    stabilityCheck,
                    identityFunctionCheck
                });
            }
        }
    }["Provider.useMemo[contextValue]"], [
        store,
        serverState
    ]);
    const previousState = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Provider.useMemo[previousState]": ()=>store.getState()
    }["Provider.useMemo[previousState]"], [
        store
    ]);
    useIsomorphicLayoutEffect({
        "Provider.useIsomorphicLayoutEffect": ()=>{
            const { subscription } = contextValue;
            subscription.onStateChange = subscription.notifyNestedSubs;
            subscription.trySubscribe();
            if (previousState !== store.getState()) {
                subscription.notifyNestedSubs();
            }
            return ({
                "Provider.useIsomorphicLayoutEffect": ()=>{
                    subscription.tryUnsubscribe();
                    subscription.onStateChange = void 0;
                }
            })["Provider.useIsomorphicLayoutEffect"];
        }
    }["Provider.useIsomorphicLayoutEffect"], [
        contextValue,
        previousState
    ]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Context.Provider, {
        value: contextValue
    }, children);
}
var Provider_default = Provider;
// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
    return function useReduxContext2() {
        const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
        if (("TURBOPACK compile-time value", "development") !== "production" && !contextValue) {
            throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
        }
        return contextValue;
    };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : // @ts-ignore
    createReduxContextHook(context);
    const useStore2 = ()=>{
        const { store } = useReduxContext2();
        return store;
    };
    Object.assign(useStore2, {
        withTypes: ()=>useStore2
    });
    return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();
// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
    const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
    const useDispatch2 = ()=>{
        const store = useStore2();
        return store.dispatch;
    };
    Object.assign(useDispatch2, {
        withTypes: ()=>useDispatch2
    });
    return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();
;
var refEquality = (a, b)=>a === b;
function createSelectorHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
    const useSelector2 = (selector, equalityFnOrOptions = {})=>{
        const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? {
            equalityFn: equalityFnOrOptions
        } : equalityFnOrOptions;
        if ("TURBOPACK compile-time truthy", 1) {
            if (!selector) {
                throw new Error(`You must pass a selector to useSelector`);
            }
            if (typeof selector !== "function") {
                throw new Error(`You must pass a function as a selector to useSelector`);
            }
            if (typeof equalityFn !== "function") {
                throw new Error(`You must pass a function as an equality function to useSelector`);
            }
        }
        const reduxContext = useReduxContext2();
        const { store, subscription, getServerState } = reduxContext;
        const firstRun = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
        const wrappedSelector = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            [selector.name] (state) {
                const selected = selector(state);
                if ("TURBOPACK compile-time truthy", 1) {
                    const { devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? {} : equalityFnOrOptions;
                    const { identityFunctionCheck, stabilityCheck } = reduxContext;
                    const { identityFunctionCheck: finalIdentityFunctionCheck, stabilityCheck: finalStabilityCheck } = {
                        stabilityCheck,
                        identityFunctionCheck,
                        ...devModeChecks
                    };
                    if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
                        const toCompare = selector(state);
                        if (!equalityFn(selected, toCompare)) {
                            let stack = void 0;
                            try {
                                throw new Error();
                            } catch (e) {
                                ;
                                ({ stack } = e);
                            }
                            console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
                                state,
                                selected,
                                selected2: toCompare,
                                stack
                            });
                        }
                    }
                    if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
                        if (selected === state) {
                            let stack = void 0;
                            try {
                                throw new Error();
                            } catch (e) {
                                ;
                                ({ stack } = e);
                            }
                            console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.", {
                                stack
                            });
                        }
                    }
                    if (firstRun.current) firstRun.current = false;
                }
                return selected;
            }
        }[selector.name], [
            selector
        ]);
        const selectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
        __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"](selectedState);
        return selectedState;
    };
    Object.assign(useSelector2, {
        withTypes: ()=>useSelector2
    });
    return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();
// src/exports.ts
var batch = defaultNoopBatch;
;
 //# sourceMappingURL=react-redux.mjs.map
}),
"[project]/brainbridge/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Immer",
    ()=>Immer2,
    "applyPatches",
    ()=>applyPatches,
    "castDraft",
    ()=>castDraft,
    "castImmutable",
    ()=>castImmutable,
    "createDraft",
    ()=>createDraft,
    "current",
    ()=>current,
    "enableArrayMethods",
    ()=>enableArrayMethods,
    "enableMapSet",
    ()=>enableMapSet,
    "enablePatches",
    ()=>enablePatches,
    "finishDraft",
    ()=>finishDraft,
    "freeze",
    ()=>freeze,
    "immerable",
    ()=>DRAFTABLE,
    "isDraft",
    ()=>isDraft,
    "isDraftable",
    ()=>isDraftable,
    "nothing",
    ()=>NOTHING,
    "original",
    ()=>original,
    "produce",
    ()=>produce,
    "produceWithPatches",
    ()=>produceWithPatches,
    "setAutoFreeze",
    ()=>setAutoFreeze,
    "setUseStrictIteration",
    ()=>setUseStrictIteration,
    "setUseStrictShallowCopy",
    ()=>setUseStrictShallowCopy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
// src/utils/errors.ts
var errors = ("TURBOPACK compile-time truthy", 1) ? [
    // All error codes, starting by 0:
    function(plugin) {
        return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
        return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
        return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
        return `'original' expects a draft, got: ${thing}`;
    }
] : "TURBOPACK unreachable";
function die(error, ...args) {
    if ("TURBOPACK compile-time truthy", 1) {
        const e = errors[error];
        const msg = isFunction(e) ? e.apply(null, args) : e;
        throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
// src/utils/common.ts
var O = Object;
var getPrototypeOf = O.getPrototypeOf;
var CONSTRUCTOR = "constructor";
var PROTOTYPE = "prototype";
var CONFIGURABLE = "configurable";
var ENUMERABLE = "enumerable";
var WRITABLE = "writable";
var VALUE = "value";
var isDraft = (value)=>!!value && !!value[DRAFT_STATE];
function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
    if (!value || !isObjectish(value)) return false;
    const proto = getPrototypeOf(value);
    if (proto === null || proto === O[PROTOTYPE]) return true;
    const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
    if (Ctor === Object) return true;
    if (!isFunction(Ctor)) return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
        ctorString = Function.toString.call(Ctor);
        cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
}
function original(value) {
    if (!isDraft(value)) die(15, value);
    return value[DRAFT_STATE].base_;
}
function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0 /* Object */ ) {
        const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
        keys.forEach((key)=>{
            iter(key, obj[key], obj);
        });
    } else {
        obj.forEach((entry, index)=>iter(index, entry, obj));
    }
}
function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : isArray(thing) ? 1 /* Array */  : isMap(thing) ? 2 /* Map */  : isSet(thing) ? 3 /* Set */  : 0 /* Object */ ;
}
var has = (thing, prop, type = getArchtype(thing))=>type === 2 /* Map */  ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
var get = (thing, prop, type = getArchtype(thing))=>// @ts-ignore
    type === 2 /* Map */  ? thing.get(prop) : thing[prop];
var set = (thing, propOrOldValue, value, type = getArchtype(thing))=>{
    if (type === 2 /* Map */ ) thing.set(propOrOldValue, value);
    else if (type === 3 /* Set */ ) {
        thing.add(value);
    } else thing[propOrOldValue] = value;
};
function is(x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
var isArray = Array.isArray;
var isMap = (target)=>target instanceof Map;
var isSet = (target)=>target instanceof Set;
var isObjectish = (target)=>typeof target === "object";
var isFunction = (target)=>typeof target === "function";
var isBoolean = (target)=>typeof target === "boolean";
function isArrayIndex(value) {
    const n = +value;
    return Number.isInteger(n) && String(n) === value;
}
var getProxyDraft = (value)=>{
    if (!isObjectish(value)) return null;
    return value?.[DRAFT_STATE];
};
var latest = (state)=>state.copy_ || state.base_;
var getValue = (value)=>{
    const proxyDraft = getProxyDraft(value);
    return proxyDraft ? proxyDraft.copy_ ?? proxyDraft.base_ : value;
};
var getFinalValue = (state)=>state.modified_ ? state.copy_ : state.base_;
function shallowCopy(base, strict) {
    if (isMap(base)) {
        return new Map(base);
    }
    if (isSet(base)) {
        return new Set(base);
    }
    if (isArray(base)) return Array[PROTOTYPE].slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
        const descriptors = O.getOwnPropertyDescriptors(base);
        delete descriptors[DRAFT_STATE];
        let keys = Reflect.ownKeys(descriptors);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const desc = descriptors[key];
            if (desc[WRITABLE] === false) {
                desc[WRITABLE] = true;
                desc[CONFIGURABLE] = true;
            }
            if (desc.get || desc.set) descriptors[key] = {
                [CONFIGURABLE]: true,
                [WRITABLE]: true,
                // could live with !!desc.set as well here...
                [ENUMERABLE]: desc[ENUMERABLE],
                [VALUE]: base[key]
            };
        }
        return O.create(getPrototypeOf(base), descriptors);
    } else {
        const proto = getPrototypeOf(base);
        if (proto !== null && isPlain) {
            return {
                ...base
            };
        }
        const obj = O.create(proto);
        return O.assign(obj, base);
    }
}
function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) {
        O.defineProperties(obj, {
            set: dontMutateMethodOverride,
            add: dontMutateMethodOverride,
            clear: dontMutateMethodOverride,
            delete: dontMutateMethodOverride
        });
    }
    O.freeze(obj);
    if (deep) each(obj, (_key, value)=>{
        freeze(value, true);
    }, false);
    return obj;
}
function dontMutateFrozenCollections() {
    die(2);
}
var dontMutateMethodOverride = {
    [VALUE]: dontMutateFrozenCollections
};
function isFrozen(obj) {
    if (obj === null || !isObjectish(obj)) return true;
    return O.isFrozen(obj);
}
// src/utils/plugins.ts
var PluginMapSet = "MapSet";
var PluginPatches = "Patches";
var PluginArrayMethods = "ArrayMethods";
var plugins = {};
function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
        die(0, pluginKey);
    }
    return plugin;
}
var isPluginLoaded = (pluginKey)=>!!plugins[pluginKey];
function loadPlugin(pluginKey, implementation) {
    if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}
// src/core/scope.ts
var currentScope;
var getCurrentScope = ()=>currentScope;
var createScope = (parent_, immer_)=>({
        drafts_: [],
        parent_,
        immer_,
        // Whenever the modified draft contains a draft from another scope, we
        // need to prevent auto-freezing so the unowned draft can be finalized.
        canAutoFreeze_: true,
        unfinalizedDrafts_: 0,
        handledSet_: /* @__PURE__ */ new Set(),
        processedForPatches_: /* @__PURE__ */ new Set(),
        mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
        arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
    });
function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
        scope.patchPlugin_ = getPlugin(PluginPatches);
        scope.patches_ = [];
        scope.inversePatches_ = [];
        scope.patchListener_ = patchListener;
    }
}
function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
}
function leaveScope(scope) {
    if (scope === currentScope) {
        currentScope = scope.parent_;
    }
}
var enterScope = (immer2)=>currentScope = createScope(currentScope, immer2);
function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 /* Object */  || state.type_ === 1 /* Array */ ) state.revoke_();
    else state.revoked_ = true;
}
// src/core/finalize.ts
function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
        if (baseDraft[DRAFT_STATE].modified_) {
            revokeScope(scope);
            die(4);
        }
        if (isDraftable(result)) {
            result = finalize(scope, result);
        }
        const { patchPlugin_ } = scope;
        if (patchPlugin_) {
            patchPlugin_.generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope);
        }
    } else {
        result = finalize(scope, baseDraft);
    }
    maybeFreeze(scope, result, true);
    revokeScope(scope);
    if (scope.patches_) {
        scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value) {
    if (isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    if (!state) {
        const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
        return finalValue;
    }
    if (!isSameScope(state, rootScope)) {
        return value;
    }
    if (!state.modified_) {
        return state.base_;
    }
    if (!state.finalized_) {
        const { callbacks_ } = state;
        if (callbacks_) {
            while(callbacks_.length > 0){
                const callback = callbacks_.pop();
                callback(rootScope);
            }
        }
        generatePatchesAndFinalize(state, rootScope);
    }
    return state.copy_;
}
function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
        freeze(value, deep);
    }
}
function markStateFinalized(state) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
}
var isSameScope = (state, rootScope)=>state.scope_ === rootScope;
var EMPTY_LOCATIONS_RESULT = [];
function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
    const parentCopy = latest(parent);
    const parentType = parent.type_;
    if (originalKey !== void 0) {
        const currentValue = get(parentCopy, originalKey, parentType);
        if (currentValue === draftValue) {
            set(parentCopy, originalKey, finalizedValue, parentType);
            return;
        }
    }
    if (!parent.draftLocations_) {
        const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
        each(parentCopy, (key, value)=>{
            if (isDraft(value)) {
                const keys = draftLocations.get(value) || [];
                keys.push(key);
                draftLocations.set(value, keys);
            }
        });
    }
    const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
    for (const location of locations){
        set(parentCopy, location, finalizedValue, parentType);
    }
}
function registerChildFinalizationCallback(parent, child, key) {
    parent.callbacks_.push(function childCleanup(rootScope) {
        const state = child;
        if (!state || !isSameScope(state, rootScope)) {
            return;
        }
        rootScope.mapSetPlugin_?.fixSetContents(state);
        const finalizedValue = getFinalValue(state);
        updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
        generatePatchesAndFinalize(state, rootScope);
    });
}
function generatePatchesAndFinalize(state, rootScope) {
    const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 /* Set */  || state.type_ === 1 /* Array */  && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0);
    if (shouldFinalize) {
        const { patchPlugin_ } = rootScope;
        if (patchPlugin_) {
            const basePath = patchPlugin_.getPath(state);
            if (basePath) {
                patchPlugin_.generatePatches_(state, basePath, rootScope);
            }
        }
        markStateFinalized(state);
    }
}
function handleCrossReference(target, key, value) {
    const { scope_ } = target;
    if (isDraft(value)) {
        const state = value[DRAFT_STATE];
        if (isSameScope(state, scope_)) {
            state.callbacks_.push(function crossReferenceCleanup() {
                prepareCopy(target);
                const finalizedValue = getFinalValue(state);
                updateDraftInParent(target, value, finalizedValue, key);
            });
        }
    } else if (isDraftable(value)) {
        target.callbacks_.push(function nestedDraftCleanup() {
            const targetCopy = latest(target);
            if (target.type_ === 3 /* Set */ ) {
                if (targetCopy.has(value)) {
                    handleValue(value, scope_.handledSet_, scope_);
                }
            } else {
                if (get(targetCopy, key, target.type_) === value) {
                    if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
                        handleValue(get(target.copy_, key, target.type_), scope_.handledSet_, scope_);
                    }
                }
            }
        });
    }
}
function handleValue(target, handledSet, rootScope) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return target;
    }
    if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) {
        return target;
    }
    handledSet.add(target);
    each(target, (key, value)=>{
        if (isDraft(value)) {
            const state = value[DRAFT_STATE];
            if (isSameScope(state, rootScope)) {
                const updatedValue = getFinalValue(state);
                set(target, key, updatedValue, target.type_);
                markStateFinalized(state);
            }
        } else if (isDraftable(value)) {
            handleValue(value, handledSet, rootScope);
        }
    });
    return target;
}
// src/core/proxy.ts
function createProxyProxy(base, parent) {
    const baseIsArray = isArray(base);
    const state = {
        type_: baseIsArray ? 1 /* Array */  : 0 /* Object */ ,
        // Track which produce call this is associated with.
        scope_: parent ? parent.scope_ : getCurrentScope(),
        // True for both shallow and deep changes.
        modified_: false,
        // Used during finalization.
        finalized_: false,
        // Track which properties have been assigned (true) or deleted (false).
        // actually instantiated in `prepareCopy()`
        assigned_: void 0,
        // The parent draft state.
        parent_: parent,
        // The base state.
        base_: base,
        // The base proxy.
        draft_: null,
        // set below
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false,
        // `callbacks` actually gets assigned in `createProxy`
        callbacks_: void 0
    };
    let target = state;
    let traps = objectTraps;
    if (baseIsArray) {
        target = [
            state
        ];
        traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return [
        proxy,
        state
    ];
}
var objectTraps = {
    get (state, prop) {
        if (prop === DRAFT_STATE) return state;
        let arrayPlugin = state.scope_.arrayMethodsPlugin_;
        const isArrayWithStringProp = state.type_ === 1 /* Array */  && typeof prop === "string";
        if (isArrayWithStringProp) {
            if (arrayPlugin?.isArrayOperationMethod(prop)) {
                return arrayPlugin.createMethodInterceptor(state, prop);
            }
        }
        const source = latest(state);
        if (!has(source, prop, state.type_)) {
            return readPropFromProto(state, source, prop);
        }
        const value = source[prop];
        if (state.finalized_ || !isDraftable(value)) {
            return value;
        }
        if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(state.operationMethod) && isArrayIndex(prop)) {
            return value;
        }
        if (value === peek(state.base_, prop)) {
            prepareCopy(state);
            const childKey = state.type_ === 1 /* Array */  ? +prop : prop;
            const childDraft = createProxy(state.scope_, value, state, childKey);
            return state.copy_[childKey] = childDraft;
        }
        return value;
    },
    has (state, prop) {
        return prop in latest(state);
    },
    ownKeys (state) {
        return Reflect.ownKeys(latest(state));
    },
    set (state, prop, value) {
        const desc = getDescriptorFromProto(latest(state), prop);
        if (desc?.set) {
            desc.set.call(state.draft_, value);
            return true;
        }
        if (!state.modified_) {
            const current2 = peek(latest(state), prop);
            const currentState = current2?.[DRAFT_STATE];
            if (currentState && currentState.base_ === value) {
                state.copy_[prop] = value;
                state.assigned_.set(prop, false);
                return true;
            }
            if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_))) return true;
            prepareCopy(state);
            markChanged(state);
        }
        if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
        (value !== void 0 || prop in state.copy_) || // special case: NaN
        Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
        state.copy_[prop] = value;
        state.assigned_.set(prop, true);
        handleCrossReference(state, prop, value);
        return true;
    },
    deleteProperty (state, prop) {
        prepareCopy(state);
        if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
            state.assigned_.set(prop, false);
            markChanged(state);
        } else {
            state.assigned_.delete(prop);
        }
        if (state.copy_) {
            delete state.copy_[prop];
        }
        return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor (state, prop) {
        const owner = latest(state);
        const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
        if (!desc) return desc;
        return {
            [WRITABLE]: true,
            [CONFIGURABLE]: state.type_ !== 1 /* Array */  || prop !== "length",
            [ENUMERABLE]: desc[ENUMERABLE],
            [VALUE]: owner[prop]
        };
    },
    defineProperty () {
        die(11);
    },
    getPrototypeOf (state) {
        return getPrototypeOf(state.base_);
    },
    setPrototypeOf () {
        die(12);
    }
};
var arrayTraps = {};
for(let key in objectTraps){
    let fn = objectTraps[key];
    arrayTraps[key] = function() {
        const args = arguments;
        args[0] = args[0][0];
        return fn.apply(this, args);
    };
}
arrayTraps.deleteProperty = function(state, prop) {
    if (("TURBOPACK compile-time value", "development") !== "production" && isNaN(parseInt(prop))) die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
    if (("TURBOPACK compile-time value", "development") !== "production" && prop !== "length" && isNaN(parseInt(prop))) die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
}
function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? VALUE in desc ? desc[VALUE] : // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    let proto = getPrototypeOf(source);
    while(proto){
        const desc = Object.getOwnPropertyDescriptor(proto, prop);
        if (desc) return desc;
        proto = getPrototypeOf(proto);
    }
    return void 0;
}
function markChanged(state) {
    if (!state.modified_) {
        state.modified_ = true;
        if (state.parent_) {
            markChanged(state.parent_);
        }
    }
}
function prepareCopy(state) {
    if (!state.copy_) {
        state.assigned_ = /* @__PURE__ */ new Map();
        state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
    }
}
// src/core/immerClass.ts
var Immer2 = class {
    constructor(config){
        this.autoFreeze_ = true;
        this.useStrictShallowCopy_ = false;
        this.useStrictIteration_ = false;
        /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */ this.produce = (base, recipe, patchListener)=>{
            if (isFunction(base) && !isFunction(recipe)) {
                const defaultBase = recipe;
                recipe = base;
                const self = this;
                return function curriedProduce(base2 = defaultBase, ...args) {
                    return self.produce(base2, (draft)=>recipe.call(this, draft, ...args));
                };
            }
            if (!isFunction(recipe)) die(6);
            if (patchListener !== void 0 && !isFunction(patchListener)) die(7);
            let result;
            if (isDraftable(base)) {
                const scope = enterScope(this);
                const proxy = createProxy(scope, base, void 0);
                let hasError = true;
                try {
                    result = recipe(proxy);
                    hasError = false;
                } finally{
                    if (hasError) revokeScope(scope);
                    else leaveScope(scope);
                }
                usePatchesInScope(scope, patchListener);
                return processResult(result, scope);
            } else if (!base || !isObjectish(base)) {
                result = recipe(base);
                if (result === void 0) result = base;
                if (result === NOTHING) result = void 0;
                if (this.autoFreeze_) freeze(result, true);
                if (patchListener) {
                    const p = [];
                    const ip = [];
                    getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
                        patches_: p,
                        inversePatches_: ip
                    });
                    patchListener(p, ip);
                }
                return result;
            } else die(1, base);
        };
        this.produceWithPatches = (base, recipe)=>{
            if (isFunction(base)) {
                return (state, ...args)=>this.produceWithPatches(state, (draft)=>base(draft, ...args));
            }
            let patches, inversePatches;
            const result = this.produce(base, recipe, (p, ip)=>{
                patches = p;
                inversePatches = ip;
            });
            return [
                result,
                patches,
                inversePatches
            ];
        };
        if (isBoolean(config?.autoFreeze)) this.setAutoFreeze(config.autoFreeze);
        if (isBoolean(config?.useStrictShallowCopy)) this.setUseStrictShallowCopy(config.useStrictShallowCopy);
        if (isBoolean(config?.useStrictIteration)) this.setUseStrictIteration(config.useStrictIteration);
    }
    createDraft(base) {
        if (!isDraftable(base)) die(8);
        if (isDraft(base)) base = current(base);
        const scope = enterScope(this);
        const proxy = createProxy(scope, base, void 0);
        proxy[DRAFT_STATE].isManual_ = true;
        leaveScope(scope);
        return proxy;
    }
    finishDraft(draft, patchListener) {
        const state = draft && draft[DRAFT_STATE];
        if (!state || !state.isManual_) die(9);
        const { scope_: scope } = state;
        usePatchesInScope(scope, patchListener);
        return processResult(void 0, scope);
    }
    /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */ setAutoFreeze(value) {
        this.autoFreeze_ = value;
    }
    /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */ setUseStrictShallowCopy(value) {
        this.useStrictShallowCopy_ = value;
    }
    /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */ setUseStrictIteration(value) {
        this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
        return this.useStrictIteration_;
    }
    applyPatches(base, patches) {
        let i;
        for(i = patches.length - 1; i >= 0; i--){
            const patch = patches[i];
            if (patch.path.length === 0 && patch.op === "replace") {
                base = patch.value;
                break;
            }
        }
        if (i > -1) {
            patches = patches.slice(i + 1);
        }
        const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
        if (isDraft(base)) {
            return applyPatchesImpl(base, patches);
        }
        return this.produce(base, (draft)=>applyPatchesImpl(draft, patches));
    }
};
function createProxy(rootScope, value, parent, key) {
    const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent?.scope_ ?? getCurrentScope();
    scope.drafts_.push(draft);
    state.callbacks_ = parent?.callbacks_ ?? [];
    state.key_ = key;
    if (parent && key !== void 0) {
        registerChildFinalizationCallback(parent, state, key);
    } else {
        state.callbacks_.push(function rootDraftCleanup(rootScope2) {
            rootScope2.mapSetPlugin_?.fixSetContents(state);
            const { patchPlugin_ } = rootScope2;
            if (state.modified_ && patchPlugin_) {
                patchPlugin_.generatePatches_(state, [], rootScope2);
            }
        });
    }
    return draft;
}
// src/core/current.ts
function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
}
function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    let copy;
    let strict = true;
    if (state) {
        if (!state.modified_) return state.base_;
        state.finalized_ = true;
        copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
        strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
        copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue)=>{
        set(copy, key, currentImpl(childValue));
    }, strict);
    if (state) {
        state.finalized_ = false;
    }
    return copy;
}
// src/plugins/patches.ts
function enablePatches() {
    const errorOffset = 16;
    if ("TURBOPACK compile-time truthy", 1) {
        errors.push('Sets cannot have "replace" patches.', function(op) {
            return "Unsupported patch operation: " + op;
        }, function(path) {
            return "Cannot apply patch, path doesn't resolve: " + path;
        }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
    }
    function getPath(state, path = []) {
        if (state.key_ !== void 0) {
            const parentCopy = state.parent_.copy_ ?? state.parent_.base_;
            const proxyDraft = getProxyDraft(get(parentCopy, state.key_));
            const valueAtKey = get(parentCopy, state.key_);
            if (valueAtKey === void 0) {
                return null;
            }
            if (valueAtKey !== state.draft_ && valueAtKey !== state.base_ && valueAtKey !== state.copy_) {
                return null;
            }
            if (proxyDraft != null && proxyDraft.base_ !== state.base_) {
                return null;
            }
            const isSet2 = state.parent_.type_ === 3 /* Set */ ;
            let key;
            if (isSet2) {
                const setParent = state.parent_;
                key = Array.from(setParent.drafts_.keys()).indexOf(state.key_);
            } else {
                key = state.key_;
            }
            if (!(isSet2 && parentCopy.size > key || has(parentCopy, key))) {
                return null;
            }
            path.push(key);
        }
        if (state.parent_) {
            return getPath(state.parent_, path);
        }
        path.reverse();
        try {
            resolvePath(state.copy_, path);
        } catch (e) {
            return null;
        }
        return path;
    }
    function resolvePath(base, path) {
        let current2 = base;
        for(let i = 0; i < path.length - 1; i++){
            const key = path[i];
            current2 = get(current2, key);
            if (!isObjectish(current2) || current2 === null) {
                throw new Error(`Cannot resolve path at '${path.join("/")}'`);
            }
        }
        return current2;
    }
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";
    function generatePatches_(state, basePath, scope) {
        if (state.scope_.processedForPatches_.has(state)) {
            return;
        }
        state.scope_.processedForPatches_.add(state);
        const { patches_, inversePatches_ } = scope;
        switch(state.type_){
            case 0 /* Object */ :
            case 2 /* Map */ :
                return generatePatchesFromAssigned(state, basePath, patches_, inversePatches_);
            case 1 /* Array */ :
                return generateArrayPatches(state, basePath, patches_, inversePatches_);
            case 3 /* Set */ :
                return generateSetPatches(state, basePath, patches_, inversePatches_);
        }
    }
    function generateArrayPatches(state, basePath, patches, inversePatches) {
        let { base_, assigned_ } = state;
        let copy_ = state.copy_;
        if (copy_.length < base_.length) {
            ;
            [base_, copy_] = [
                copy_,
                base_
            ];
            [patches, inversePatches] = [
                inversePatches,
                patches
            ];
        }
        const allReassigned = state.allIndicesReassigned_ === true;
        for(let i = 0; i < base_.length; i++){
            const copiedItem = copy_[i];
            const baseItem = base_[i];
            const isAssigned = allReassigned || assigned_?.get(i.toString());
            if (isAssigned && copiedItem !== baseItem) {
                const childState = copiedItem?.[DRAFT_STATE];
                if (childState && childState.modified_) {
                    continue;
                }
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REPLACE,
                    path,
                    // Need to maybe clone it, as it can in fact be the original value
                    // due to the base/copy inversion at the start of this function
                    value: clonePatchValueIfNeeded(copiedItem)
                });
                inversePatches.push({
                    op: REPLACE,
                    path,
                    value: clonePatchValueIfNeeded(baseItem)
                });
            }
        }
        for(let i = base_.length; i < copy_.length; i++){
            const path = basePath.concat([
                i
            ]);
            patches.push({
                op: ADD,
                path,
                // Need to maybe clone it, as it can in fact be the original value
                // due to the base/copy inversion at the start of this function
                value: clonePatchValueIfNeeded(copy_[i])
            });
        }
        for(let i = copy_.length - 1; base_.length <= i; --i){
            const path = basePath.concat([
                i
            ]);
            inversePatches.push({
                op: REMOVE,
                path
            });
        }
    }
    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
        const { base_, copy_, type_ } = state;
        each(state.assigned_, (key, assignedValue)=>{
            const origValue = get(base_, key, type_);
            const value = get(copy_, key, type_);
            const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
            if (origValue === value && op === REPLACE) return;
            const path = basePath.concat(key);
            patches.push(op === REMOVE ? {
                op,
                path
            } : {
                op,
                path,
                value: clonePatchValueIfNeeded(value)
            });
            inversePatches.push(op === ADD ? {
                op: REMOVE,
                path
            } : op === REMOVE ? {
                op: ADD,
                path,
                value: clonePatchValueIfNeeded(origValue)
            } : {
                op: REPLACE,
                path,
                value: clonePatchValueIfNeeded(origValue)
            });
        });
    }
    function generateSetPatches(state, basePath, patches, inversePatches) {
        let { base_, copy_ } = state;
        let i = 0;
        base_.forEach((value)=>{
            if (!copy_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REMOVE,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: ADD,
                    path,
                    value
                });
            }
            i++;
        });
        i = 0;
        copy_.forEach((value)=>{
            if (!base_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: ADD,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: REMOVE,
                    path,
                    value
                });
            }
            i++;
        });
    }
    function generateReplacementPatches_(baseValue, replacement, scope) {
        const { patches_, inversePatches_ } = scope;
        patches_.push({
            op: REPLACE,
            path: [],
            value: replacement === NOTHING ? void 0 : replacement
        });
        inversePatches_.push({
            op: REPLACE,
            path: [],
            value: baseValue
        });
    }
    function applyPatches_(draft, patches) {
        patches.forEach((patch)=>{
            const { path, op } = patch;
            let base = draft;
            for(let i = 0; i < path.length - 1; i++){
                const parentType = getArchtype(base);
                let p = path[i];
                if (typeof p !== "string" && typeof p !== "number") {
                    p = "" + p;
                }
                if ((parentType === 0 /* Object */  || parentType === 1 /* Array */ ) && (p === "__proto__" || p === CONSTRUCTOR)) die(errorOffset + 3);
                if (isFunction(base) && p === PROTOTYPE) die(errorOffset + 3);
                base = get(base, p);
                if (!isObjectish(base)) die(errorOffset + 2, path.join("/"));
            }
            const type = getArchtype(base);
            const value = deepClonePatchValue(patch.value);
            const key = path[path.length - 1];
            switch(op){
                case REPLACE:
                    switch(type){
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            die(errorOffset);
                        default:
                            return base[key] = value;
                    }
                case ADD:
                    switch(type){
                        case 1 /* Array */ :
                            return key === "-" ? base.push(value) : base.splice(key, 0, value);
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            return base.add(value);
                        default:
                            return base[key] = value;
                    }
                case REMOVE:
                    switch(type){
                        case 1 /* Array */ :
                            return base.splice(key, 1);
                        case 2 /* Map */ :
                            return base.delete(key);
                        case 3 /* Set */ :
                            return base.delete(patch.value);
                        default:
                            return delete base[key];
                    }
                default:
                    die(errorOffset + 1, op);
            }
        });
        return draft;
    }
    function deepClonePatchValue(obj) {
        if (!isDraftable(obj)) return obj;
        if (isArray(obj)) return obj.map(deepClonePatchValue);
        if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v])=>[
                k,
                deepClonePatchValue(v)
            ]));
        if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
        const cloned = Object.create(getPrototypeOf(obj));
        for(const key in obj)cloned[key] = deepClonePatchValue(obj[key]);
        if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
        return cloned;
    }
    function clonePatchValueIfNeeded(obj) {
        if (isDraft(obj)) {
            return deepClonePatchValue(obj);
        } else return obj;
    }
    loadPlugin(PluginPatches, {
        applyPatches_,
        generatePatches_,
        generateReplacementPatches_,
        getPath
    });
}
// src/plugins/mapset.ts
function enableMapSet() {
    class DraftMap extends Map {
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 2 /* Map */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                assigned_: void 0,
                base_: target,
                draft_: this,
                isManual_: false,
                revoked_: false,
                callbacks_: []
            };
        }
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(key) {
            return latest(this[DRAFT_STATE]).has(key);
        }
        set(key, value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!latest(state).has(key) || latest(state).get(key) !== value) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_.set(key, true);
                state.copy_.set(key, value);
                state.assigned_.set(key, true);
                handleCrossReference(state, key, value);
            }
            return this;
        }
        delete(key) {
            if (!this.has(key)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareMapCopy(state);
            markChanged(state);
            if (state.base_.has(key)) {
                state.assigned_.set(key, false);
            } else {
                state.assigned_.delete(key);
            }
            state.copy_.delete(key);
            return true;
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_ = /* @__PURE__ */ new Map();
                each(state.base_, (key)=>{
                    state.assigned_.set(key, false);
                });
                state.copy_.clear();
            }
        }
        forEach(cb, thisArg) {
            const state = this[DRAFT_STATE];
            latest(state).forEach((_value, key, _map)=>{
                cb.call(thisArg, this.get(key), key, this);
            });
        }
        get(key) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            const value = latest(state).get(key);
            if (state.finalized_ || !isDraftable(value)) {
                return value;
            }
            if (value !== state.base_.get(key)) {
                return value;
            }
            const draft = createProxy(state.scope_, value, state, key);
            prepareMapCopy(state);
            state.copy_.set(key, draft);
            return draft;
        }
        keys() {
            return latest(this[DRAFT_STATE]).keys();
        }
        values() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.values(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value
                    };
                }
            };
        }
        entries() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.entries(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value: [
                            r.value,
                            value
                        ]
                    };
                }
            };
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.entries();
        }
    }
    function proxyMap_(target, parent) {
        const map = new DraftMap(target, parent);
        return [
            map,
            map[DRAFT_STATE]
        ];
    }
    function prepareMapCopy(state) {
        if (!state.copy_) {
            state.assigned_ = /* @__PURE__ */ new Map();
            state.copy_ = new Map(state.base_);
        }
    }
    class DraftSet extends Set {
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 3 /* Set */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                base_: target,
                draft_: this,
                drafts_: /* @__PURE__ */ new Map(),
                revoked_: false,
                isManual_: false,
                assigned_: void 0,
                callbacks_: []
            };
        }
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!state.copy_) {
                return state.base_.has(value);
            }
            if (state.copy_.has(value)) return true;
            if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
            return false;
        }
        add(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!this.has(value)) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.add(value);
                handleCrossReference(state, value, value);
            }
            return this;
        }
        delete(value) {
            if (!this.has(value)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            markChanged(state);
            return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : /* istanbul ignore next */ false);
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.clear();
            }
        }
        values() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.values();
        }
        entries() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.entries();
        }
        keys() {
            return this.values();
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.values();
        }
        forEach(cb, thisArg) {
            const iterator = this.values();
            let result = iterator.next();
            while(!result.done){
                cb.call(thisArg, result.value, result.value, this);
                result = iterator.next();
            }
        }
    }
    function proxySet_(target, parent) {
        const set2 = new DraftSet(target, parent);
        return [
            set2,
            set2[DRAFT_STATE]
        ];
    }
    function prepareSetCopy(state) {
        if (!state.copy_) {
            state.copy_ = /* @__PURE__ */ new Set();
            state.base_.forEach((value)=>{
                if (isDraftable(value)) {
                    const draft = createProxy(state.scope_, value, state, value);
                    state.drafts_.set(value, draft);
                    state.copy_.add(draft);
                } else {
                    state.copy_.add(value);
                }
            });
        }
    }
    function assertUnrevoked(state) {
        if (state.revoked_) die(3, JSON.stringify(latest(state)));
    }
    function fixSetContents(target) {
        if (target.type_ === 3 /* Set */  && target.copy_) {
            const copy = new Set(target.copy_);
            target.copy_.clear();
            copy.forEach((value)=>{
                target.copy_.add(getValue(value));
            });
        }
    }
    loadPlugin(PluginMapSet, {
        proxyMap_,
        proxySet_,
        fixSetContents
    });
}
// src/plugins/arrayMethods.ts
function enableArrayMethods() {
    const SHIFTING_METHODS = /* @__PURE__ */ new Set([
        "shift",
        "unshift"
    ]);
    const QUEUE_METHODS = /* @__PURE__ */ new Set([
        "push",
        "pop"
    ]);
    const RESULT_RETURNING_METHODS = /* @__PURE__ */ new Set([
        ...QUEUE_METHODS,
        ...SHIFTING_METHODS
    ]);
    const REORDERING_METHODS = /* @__PURE__ */ new Set([
        "reverse",
        "sort"
    ]);
    const MUTATING_METHODS = /* @__PURE__ */ new Set([
        ...RESULT_RETURNING_METHODS,
        ...REORDERING_METHODS,
        "splice"
    ]);
    const FIND_METHODS = /* @__PURE__ */ new Set([
        "find",
        "findLast"
    ]);
    const NON_MUTATING_METHODS = /* @__PURE__ */ new Set([
        "filter",
        "slice",
        "concat",
        "flat",
        ...FIND_METHODS,
        "findIndex",
        "findLastIndex",
        "some",
        "every",
        "indexOf",
        "lastIndexOf",
        "includes",
        "join",
        "toString",
        "toLocaleString"
    ]);
    function isMutatingArrayMethod(method) {
        return MUTATING_METHODS.has(method);
    }
    function isNonMutatingArrayMethod(method) {
        return NON_MUTATING_METHODS.has(method);
    }
    function isArrayOperationMethod(method) {
        return isMutatingArrayMethod(method) || isNonMutatingArrayMethod(method);
    }
    function enterOperation(state, method) {
        state.operationMethod = method;
    }
    function exitOperation(state) {
        state.operationMethod = void 0;
    }
    function executeArrayMethod(state, operation, markLength = true) {
        prepareCopy(state);
        const result = operation();
        markChanged(state);
        if (markLength) state.assigned_.set("length", true);
        return result;
    }
    function markAllIndicesReassigned(state) {
        state.allIndicesReassigned_ = true;
    }
    function normalizeSliceIndex(index, length) {
        if (index < 0) {
            return Math.max(length + index, 0);
        }
        return Math.min(index, length);
    }
    function handleInsertedValues(state, startIndex, values) {
        for(let i = 0; i < values.length; i++){
            const index = startIndex + i;
            state.assigned_.set(index, true);
            handleCrossReference(state, index, values[i]);
        }
    }
    function handleSimpleOperation(state, method, args) {
        return executeArrayMethod(state, ()=>{
            const lengthBefore = state.copy_.length;
            const result = state.copy_[method](...args);
            if (SHIFTING_METHODS.has(method)) {
                markAllIndicesReassigned(state);
            }
            if (method === "push" && args.length > 0) {
                handleInsertedValues(state, lengthBefore, args);
            } else if (method === "unshift" && args.length > 0) {
                handleInsertedValues(state, 0, args);
            }
            return RESULT_RETURNING_METHODS.has(method) ? result : state.draft_;
        });
    }
    function handleReorderingOperation(state, method, args) {
        return executeArrayMethod(state, ()=>{
            ;
            state.copy_[method](...args);
            markAllIndicesReassigned(state);
            return state.draft_;
        }, false);
    }
    function createMethodInterceptor(state, originalMethod) {
        return function interceptedMethod(...args) {
            const method = originalMethod;
            enterOperation(state, method);
            try {
                if (isMutatingArrayMethod(method)) {
                    if (RESULT_RETURNING_METHODS.has(method)) {
                        return handleSimpleOperation(state, method, args);
                    }
                    if (REORDERING_METHODS.has(method)) {
                        return handleReorderingOperation(state, method, args);
                    }
                    if (method === "splice") {
                        const res = executeArrayMethod(state, ()=>state.copy_.splice(...args));
                        markAllIndicesReassigned(state);
                        if (args.length > 2) {
                            const startIndex = normalizeSliceIndex(args[0] ?? 0, state.copy_.length);
                            handleInsertedValues(state, startIndex, args.slice(2));
                        }
                        return res;
                    }
                } else {
                    return handleNonMutatingOperation(state, method, args);
                }
            } finally{
                exitOperation(state);
            }
        };
    }
    function handleNonMutatingOperation(state, method, args) {
        const source = latest(state);
        if (method === "filter") {
            const predicate = args[0];
            const result = [];
            for(let i = 0; i < source.length; i++){
                if (predicate(source[i], i, source)) {
                    result.push(state.draft_[i]);
                }
            }
            return result;
        }
        if (FIND_METHODS.has(method)) {
            const predicate = args[0];
            const isForward = method === "find";
            const step = isForward ? 1 : -1;
            const start = isForward ? 0 : source.length - 1;
            for(let i = start; i >= 0 && i < source.length; i += step){
                if (predicate(source[i], i, source)) {
                    return state.draft_[i];
                }
            }
            return void 0;
        }
        if (method === "slice") {
            const rawStart = args[0] ?? 0;
            const rawEnd = args[1] ?? source.length;
            const start = normalizeSliceIndex(rawStart, source.length);
            const end = normalizeSliceIndex(rawEnd, source.length);
            const result = [];
            for(let i = start; i < end; i++){
                result.push(state.draft_[i]);
            }
            return result;
        }
        return source[method](...args);
    }
    loadPlugin(PluginArrayMethods, {
        createMethodInterceptor,
        isArrayOperationMethod,
        isMutatingArrayMethod
    });
}
// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */ immer.setUseStrictShallowCopy.bind(immer);
var setUseStrictIteration = /* @__PURE__ */ immer.setUseStrictIteration.bind(immer);
var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
var castDraft = (value)=>value;
var castImmutable = (value)=>value;
;
 //# sourceMappingURL=immer.mjs.map
}),
"[project]/brainbridge/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorCreator",
    ()=>createSelectorCreator,
    "createStructuredSelector",
    ()=>createStructuredSelector,
    "lruMemoize",
    ()=>lruMemoize,
    "referenceEqualityCheck",
    ()=>referenceEqualityCheck,
    "setGlobalDevModeChecks",
    ()=>setGlobalDevModeChecks,
    "unstable_autotrackMemoize",
    ()=>autotrackMemoize,
    "weakMapMemoize",
    ()=>weakMapMemoize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/devModeChecks/identityFunctionCheck.ts
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult)=>{
    if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
        let isInputSameAsOutput = false;
        try {
            const emptyObject = {};
            if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true;
        } catch  {}
        if (isInputSameAsOutput) {
            let stack = void 0;
            try {
                throw new Error();
            } catch (e) {
                ;
                ({ stack } = e);
            }
            console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", {
                stack
            });
        }
    }
};
// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs)=>{
    const { memoize, memoizeOptions } = options;
    const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
    const createAnEmptyObject = memoize(()=>({}), ...memoizeOptions);
    const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
    if (!areInputSelectorResultsEqual) {
        let stack = void 0;
        try {
            throw new Error();
        } catch (e) {
            ;
            ({ stack } = e);
        }
        console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
            arguments: inputSelectorArgs,
            firstInputs: inputSelectorResults,
            secondInputs: inputSelectorResultsCopy,
            stack
        });
    }
};
// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks)=>{
    Object.assign(globalDevModeChecks, devModeChecks);
};
// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
    if (typeof func !== "function") {
        throw new TypeError(errorMessage);
    }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
    if (typeof object !== "object") {
        throw new TypeError(errorMessage);
    }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
    if (!array.every((item)=>typeof item === "function")) {
        const itemTypes = array.map((item)=>typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
        throw new TypeError(`${errorMessage}[${itemTypes}]`);
    }
}
var ensureIsArray = (item)=>{
    return Array.isArray(item) ? item : [
        item
    ];
};
function getDependencies(createSelectorArgs) {
    const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
    assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
    return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
    const inputSelectorResults = [];
    const { length } = dependencies;
    for(let i = 0; i < length; i++){
        inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
    }
    return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks)=>{
    const { identityFunctionCheck, inputStabilityCheck } = {
        ...globalDevModeChecks,
        ...devModeChecks
    };
    return {
        identityFunctionCheck: {
            shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
            run: runIdentityFunctionCheck
        },
        inputStabilityCheck: {
            shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
            run: runInputStabilityCheck
        }
    };
};
// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
    revision = $REVISION;
    _value;
    _lastValue;
    _isEqual = tripleEq;
    constructor(initialValue, isEqual = tripleEq){
        this._value = this._lastValue = initialValue;
        this._isEqual = isEqual;
    }
    // Whenever a storage value is read, it'll add itself to the current tracker if
    // one exists, entangling its state with that cache.
    get value() {
        CURRENT_TRACKER?.add(this);
        return this._value;
    }
    // Whenever a storage value is updated, we bump the global revision clock,
    // assign the revision for this storage to the new value, _and_ we schedule a
    // rerender. This is important, and it's what makes autotracking  _pull_
    // based. We don't actively tell the caches which depend on the storage that
    // anything has happened. Instead, we recompute the caches when needed.
    set value(newValue) {
        if (this.value === newValue) return;
        this._value = newValue;
        this.revision = ++$REVISION;
    }
};
function tripleEq(a, b) {
    return a === b;
}
var TrackingCache = class {
    _cachedValue;
    _cachedRevision = -1;
    _deps = [];
    hits = 0;
    fn;
    constructor(fn){
        this.fn = fn;
    }
    clear() {
        this._cachedValue = void 0;
        this._cachedRevision = -1;
        this._deps = [];
        this.hits = 0;
    }
    get value() {
        if (this.revision > this._cachedRevision) {
            const { fn } = this;
            const currentTracker = /* @__PURE__ */ new Set();
            const prevTracker = CURRENT_TRACKER;
            CURRENT_TRACKER = currentTracker;
            this._cachedValue = fn();
            CURRENT_TRACKER = prevTracker;
            this.hits++;
            this._deps = Array.from(currentTracker);
            this._cachedRevision = this.revision;
        }
        CURRENT_TRACKER?.add(this);
        return this._cachedValue;
    }
    get revision() {
        return Math.max(...this._deps.map((d)=>d.revision), 0);
    }
};
function getValue(cell) {
    if (!(cell instanceof Cell)) {
        console.warn("Not a valid cell! ", cell);
    }
    return cell.value;
}
function setValue(storage, value) {
    if (!(storage instanceof Cell)) {
        throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");
    }
    storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
    return new Cell(initialValue, isEqual);
}
function createCache(fn) {
    assertIsFunction(fn, "the first parameter to `createCache` must be a function");
    return new TrackingCache(fn);
}
// src/autotrackMemoize/tracking.ts
var neverEq = (a, b)=>false;
function createTag() {
    return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
    setValue(tag, value);
}
var consumeCollection = (node)=>{
    let tag = node.collectionTag;
    if (tag === null) {
        tag = node.collectionTag = createTag();
    }
    getValue(tag);
};
var dirtyCollection = (node)=>{
    const tag = node.collectionTag;
    if (tag !== null) {
        dirtyTag(tag, null);
    }
};
// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy(this, objectProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var objectProxyHandler = {
    get (node, key) {
        function calculateResult() {
            const { value } = node;
            const childValue = Reflect.get(value, key);
            if (typeof key === "symbol") {
                return childValue;
            }
            if (key in proto) {
                return childValue;
            }
            if (typeof childValue === "object" && childValue !== null) {
                let childNode = node.children[key];
                if (childNode === void 0) {
                    childNode = node.children[key] = createNode(childValue);
                }
                if (childNode.tag) {
                    getValue(childNode.tag);
                }
                return childNode.proxy;
            } else {
                let tag = node.tags[key];
                if (tag === void 0) {
                    tag = node.tags[key] = createTag();
                    tag.value = childValue;
                }
                getValue(tag);
                return childValue;
            }
        }
        const res = calculateResult();
        return res;
    },
    ownKeys (node) {
        consumeCollection(node);
        return Reflect.ownKeys(node.value);
    },
    getOwnPropertyDescriptor (node, prop) {
        return Reflect.getOwnPropertyDescriptor(node.value, prop);
    },
    has (node, prop) {
        return Reflect.has(node.value, prop);
    }
};
var ArrayTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy([
        this
    ], arrayProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var arrayProxyHandler = {
    get ([node], key) {
        if (key === "length") {
            consumeCollection(node);
        }
        return objectProxyHandler.get(node, key);
    },
    ownKeys ([node]) {
        return objectProxyHandler.ownKeys(node);
    },
    getOwnPropertyDescriptor ([node], prop) {
        return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
    },
    has ([node], prop) {
        return objectProxyHandler.has(node, prop);
    }
};
function createNode(value) {
    if (Array.isArray(value)) {
        return new ArrayTreeNode(value);
    }
    return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
    const { value, tags, children } = node;
    node.value = newValue;
    if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
        dirtyCollection(node);
    } else {
        if (value !== newValue) {
            let oldKeysSize = 0;
            let newKeysSize = 0;
            let anyKeysAdded = false;
            for(const _key in value){
                oldKeysSize++;
            }
            for(const key in newValue){
                newKeysSize++;
                if (!(key in value)) {
                    anyKeysAdded = true;
                    break;
                }
            }
            const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
            if (isDifferent) {
                dirtyCollection(node);
            }
        }
    }
    for(const key in tags){
        const childValue = value[key];
        const newChildValue = newValue[key];
        if (childValue !== newChildValue) {
            dirtyCollection(node);
            dirtyTag(tags[key], newChildValue);
        }
        if (typeof newChildValue === "object" && newChildValue !== null) {
            delete tags[key];
        }
    }
    for(const key in children){
        const childNode = children[key];
        const newChildValue = newValue[key];
        const childValue = childNode.value;
        if (childValue === newChildValue) {
            continue;
        } else if (typeof newChildValue === "object" && newChildValue !== null) {
            updateNode(childNode, newChildValue);
        } else {
            deleteNode(childNode);
            delete children[key];
        }
    }
}
function deleteNode(node) {
    if (node.tag) {
        dirtyTag(node.tag, null);
    }
    dirtyCollection(node);
    for(const key in node.tags){
        dirtyTag(node.tags[key], null);
    }
    for(const key in node.children){
        deleteNode(node.children[key]);
    }
}
// src/lruMemoize.ts
function createSingletonCache(equals) {
    let entry;
    return {
        get (key) {
            if (entry && equals(entry.key, key)) {
                return entry.value;
            }
            return NOT_FOUND;
        },
        put (key, value) {
            entry = {
                key,
                value
            };
        },
        getEntries () {
            return entry ? [
                entry
            ] : [];
        },
        clear () {
            entry = void 0;
        }
    };
}
function createLruCache(maxSize, equals) {
    let entries = [];
    function get(key) {
        const cacheIndex = entries.findIndex((entry)=>equals(key, entry.key));
        if (cacheIndex > -1) {
            const entry = entries[cacheIndex];
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
            }
            return entry.value;
        }
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            entries.unshift({
                key,
                value
            });
            if (entries.length > maxSize) {
                entries.pop();
            }
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get,
        put,
        getEntries,
        clear
    };
}
var referenceEqualityCheck = (a, b)=>a === b;
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        const { length } = prev;
        for(let i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) {
                return false;
            }
        }
        return true;
    };
}
function lruMemoize(func, equalityCheckOrOptions) {
    const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    const { equalityCheck = referenceEqualityCheck, maxSize = 1, resultEqualityCheck } = providedOptions;
    const comparator = createCacheKeyComparator(equalityCheck);
    let resultsCount = 0;
    const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
        let value = cache.get(arguments);
        if (value === NOT_FOUND) {
            value = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const entries = cache.getEntries();
                const matchingEntry = entries.find((entry)=>resultEqualityCheck(entry.value, value));
                if (matchingEntry) {
                    value = matchingEntry.value;
                    resultsCount !== 0 && resultsCount--;
                }
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = ()=>{
        cache.clear();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
    const node = createNode([]);
    let lastArgs = null;
    const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
    const cache = createCache(()=>{
        const res = func.apply(null, node.proxy);
        return res;
    });
    function memoized() {
        if (!shallowEqual(lastArgs, arguments)) {
            updateNode(node, arguments);
            lastArgs = arguments;
        }
        return cache.value;
    }
    memoized.clearCache = ()=>{
        return cache.clear();
    };
    return memoized;
}
// src/weakMapMemoize.ts
var StrongRef = class {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value;
    }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
    return {
        s: UNTERMINATED,
        v: void 0,
        o: null,
        p: null
    };
}
function weakMapMemoize(func, options = {}) {
    let fnNode = createCacheNode();
    const { resultEqualityCheck } = options;
    let lastResult;
    let resultsCount = 0;
    function memoized() {
        let cacheNode = fnNode;
        const { length } = arguments;
        for(let i = 0, l = length; i < l; i++){
            const arg = arguments[i];
            if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
                let objectCache = cacheNode.o;
                if (objectCache === null) {
                    cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
                }
                const objectNode = objectCache.get(arg);
                if (objectNode === void 0) {
                    cacheNode = createCacheNode();
                    objectCache.set(arg, cacheNode);
                } else {
                    cacheNode = objectNode;
                }
            } else {
                let primitiveCache = cacheNode.p;
                if (primitiveCache === null) {
                    cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
                }
                const primitiveNode = primitiveCache.get(arg);
                if (primitiveNode === void 0) {
                    cacheNode = createCacheNode();
                    primitiveCache.set(arg, cacheNode);
                } else {
                    cacheNode = primitiveNode;
                }
            }
        }
        const terminatedNode = cacheNode;
        let result;
        if (cacheNode.s === TERMINATED) {
            result = cacheNode.v;
        } else {
            result = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const lastResultValue = lastResult?.deref?.() ?? lastResult;
                if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
                    result = lastResultValue;
                    resultsCount !== 0 && resultsCount--;
                }
                const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
                lastResult = needsWeakRef ? new Ref(result) : result;
            }
        }
        terminatedNode.s = TERMINATED;
        terminatedNode.v = result;
        return result;
    }
    memoized.clearCache = ()=>{
        fnNode = createCacheNode();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
    const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
        memoize: memoizeOrOptions,
        memoizeOptions: memoizeOptionsFromArgs
    } : memoizeOrOptions;
    const createSelector2 = (...createSelectorArgs)=>{
        let recomputations = 0;
        let dependencyRecomputations = 0;
        let lastResult;
        let directlyPassedOptions = {};
        let resultFunc = createSelectorArgs.pop();
        if (typeof resultFunc === "object") {
            directlyPassedOptions = resultFunc;
            resultFunc = createSelectorArgs.pop();
        }
        assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
        const combinedOptions = {
            ...createSelectorCreatorOptions,
            ...directlyPassedOptions
        };
        const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = combinedOptions;
        const finalMemoizeOptions = ensureIsArray(memoizeOptions);
        const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
        const dependencies = getDependencies(createSelectorArgs);
        const memoizedResultFunc = memoize(function recomputationWrapper() {
            recomputations++;
            return resultFunc.apply(null, arguments);
        }, ...finalMemoizeOptions);
        let firstRun = true;
        const selector = argsMemoize(function dependenciesChecker() {
            dependencyRecomputations++;
            const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
            lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
            if ("TURBOPACK compile-time truthy", 1) {
                const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
                if (identityFunctionCheck.shouldRun) {
                    identityFunctionCheck.run(resultFunc, inputSelectorResults, lastResult);
                }
                if (inputStabilityCheck.shouldRun) {
                    const inputSelectorResultsCopy = collectInputSelectorResults(dependencies, arguments);
                    inputStabilityCheck.run({
                        inputSelectorResults,
                        inputSelectorResultsCopy
                    }, {
                        memoize,
                        memoizeOptions: finalMemoizeOptions
                    }, arguments);
                }
                if (firstRun) firstRun = false;
            }
            return lastResult;
        }, ...finalArgsMemoizeOptions);
        return Object.assign(selector, {
            resultFunc,
            memoizedResultFunc,
            dependencies,
            dependencyRecomputations: ()=>dependencyRecomputations,
            resetDependencyRecomputations: ()=>{
                dependencyRecomputations = 0;
            },
            lastResult: ()=>lastResult,
            recomputations: ()=>recomputations,
            resetRecomputations: ()=>{
                recomputations = 0;
            },
            memoize,
            argsMemoize
        });
    };
    Object.assign(createSelector2, {
        withTypes: ()=>createSelector2
    });
    return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector)=>{
    assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map((key)=>inputSelectorsObject[key]);
    const structuredSelector = selectorCreator(dependencies, (...inputSelectorResults)=>{
        return inputSelectorResults.reduce((composition, value, index)=>{
            composition[inputSelectorKeys[index]] = value;
            return composition;
        }, {});
    });
    return structuredSelector;
}, {
    withTypes: ()=>createStructuredSelector
});
;
 //# sourceMappingURL=reselect.mjs.map
}),
"[project]/brainbridge/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__DO_NOT_USE__ActionTypes",
    ()=>actionTypes_default,
    "applyMiddleware",
    ()=>applyMiddleware,
    "bindActionCreators",
    ()=>bindActionCreators,
    "combineReducers",
    ()=>combineReducers,
    "compose",
    ()=>compose,
    "createStore",
    ()=>createStore,
    "isAction",
    ()=>isAction,
    "isPlainObject",
    ()=>isPlainObject,
    "legacy_createStore",
    ()=>legacy_createStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/utils/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (()=>typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
// src/utils/actionTypes.ts
var randomString = ()=>Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
// src/utils/kindOf.ts
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    const type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            {
                return type;
            }
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    const constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    let typeOfVal = typeof val;
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = /* @__PURE__ */ new Map();
            currentListeners.forEach((listener, key)=>{
                nextListeners.set(key, listener);
            });
        }
    }
    function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        }
        return currentState;
    }
    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        const listenerId = listenerIdCounter++;
        nextListeners.set(listenerId, listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            nextListeners.delete(listenerId);
            currentListeners = null;
        };
    }
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
        }
        if (typeof action.type === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (typeof action.type !== "string") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Reducers may not dispatch actions.");
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const listeners = currentListeners = nextListeners;
        listeners.forEach((listener)=>{
            listener();
        });
        return action;
    }
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
        }
        currentReducer = nextReducer;
        dispatch({
            type: actionTypes_default.REPLACE
        });
    }
    function observable() {
        const outerSubscribe = subscribe;
        return {
            /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe (observer) {
                if (typeof observer !== "object" || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
                }
                function observeState() {
                    const observerAsObserver = observer;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState());
                    }
                }
                observeState();
                const unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe
                };
            },
            [symbol_observable_default] () {
                return this;
            }
        };
    }
    dispatch({
        type: actionTypes_default.INIT
    });
    const store = {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [symbol_observable_default]: observable
    };
    return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
    return createStore(reducer, preloadedState, enhancer);
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    const reducerKeys = Object.keys(reducers);
    const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
        return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject(inputState)) {
        return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
    }
    const unexpectedKeys = Object.keys(inputState).filter((key)=>!reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
    unexpectedKeys.forEach((key)=>{
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === actionTypes_default.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key)=>{
        const reducer = reducers[key];
        const initialState = reducer(void 0, {
            type: actionTypes_default.INIT
        });
        if (typeof initialState === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
        }
        if (typeof reducer(void 0, {
            type: actionTypes_default.PROBE_UNKNOWN_ACTION()
        }) === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
        }
    });
}
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for(let i = 0; i < reducerKeys.length; i++){
        const key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === "undefined") {
                warning(`No reducer provided for key "${key}"`);
            }
        }
        if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== "production") {
        unexpectedKeyCache = {};
    }
    let shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state = {}, action) {
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        let hasChanged = false;
        const nextState = {};
        for(let i = 0; i < finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                const actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
    return function(...args) {
        return dispatch(actionCreator.apply(this, args));
    };
}
function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== "object" || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
// src/compose.ts
function compose(...funcs) {
    if (funcs.length === 0) {
        return (arg)=>arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b)=>(...args)=>a(b(...args)));
}
// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
    return (createStore2)=>(reducer, preloadedState)=>{
            const store = createStore2(reducer, preloadedState);
            let dispatch = ()=>{
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args)=>dispatch(action, ...args)
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}
// src/utils/isAction.ts
function isAction(action) {
    return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
;
 //# sourceMappingURL=redux.mjs.map
}),
"[project]/brainbridge/node_modules/redux-thunk/dist/redux-thunk.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "thunk",
    ()=>thunk,
    "withExtraArgument",
    ()=>withExtraArgument
]);
// src/index.ts
function createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch, getState })=>(next)=>(action)=>{
                if (typeof action === "function") {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
    return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
;
}),
"[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "ReducerType",
    ()=>ReducerType,
    "SHOULD_AUTOBATCH",
    ()=>SHOULD_AUTOBATCH,
    "TaskAbortError",
    ()=>TaskAbortError,
    "Tuple",
    ()=>Tuple,
    "addListener",
    ()=>addListener,
    "asyncThunkCreator",
    ()=>asyncThunkCreator,
    "autoBatchEnhancer",
    ()=>autoBatchEnhancer,
    "buildCreateSlice",
    ()=>buildCreateSlice,
    "clearAllListeners",
    ()=>clearAllListeners,
    "combineSlices",
    ()=>combineSlices,
    "configureStore",
    ()=>configureStore,
    "createAction",
    ()=>createAction,
    "createActionCreatorInvariantMiddleware",
    ()=>createActionCreatorInvariantMiddleware,
    "createAsyncThunk",
    ()=>createAsyncThunk,
    "createDraftSafeSelector",
    ()=>createDraftSafeSelector,
    "createDraftSafeSelectorCreator",
    ()=>createDraftSafeSelectorCreator,
    "createDynamicMiddleware",
    ()=>createDynamicMiddleware,
    "createEntityAdapter",
    ()=>createEntityAdapter,
    "createImmutableStateInvariantMiddleware",
    ()=>createImmutableStateInvariantMiddleware,
    "createListenerMiddleware",
    ()=>createListenerMiddleware,
    "createReducer",
    ()=>createReducer,
    "createSerializableStateInvariantMiddleware",
    ()=>createSerializableStateInvariantMiddleware,
    "createSlice",
    ()=>createSlice,
    "findNonSerializableValue",
    ()=>findNonSerializableValue,
    "formatProdErrorMessage",
    ()=>formatProdErrorMessage,
    "isActionCreator",
    ()=>isActionCreator,
    "isAllOf",
    ()=>isAllOf,
    "isAnyOf",
    ()=>isAnyOf,
    "isAsyncThunkAction",
    ()=>isAsyncThunkAction,
    "isFluxStandardAction",
    ()=>isFSA,
    "isFulfilled",
    ()=>isFulfilled,
    "isImmutableDefault",
    ()=>isImmutableDefault,
    "isPending",
    ()=>isPending,
    "isPlain",
    ()=>isPlain,
    "isRejected",
    ()=>isRejected,
    "isRejectedWithValue",
    ()=>isRejectedWithValue,
    "miniSerializeError",
    ()=>miniSerializeError,
    "nanoid",
    ()=>nanoid,
    "prepareAutoBatched",
    ()=>prepareAutoBatched,
    "removeListener",
    ()=>removeListener,
    "unwrapResult",
    ()=>unwrapResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
// src/reduxImports.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
// src/getDefaultMiddleware.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/redux-thunk/dist/redux-thunk.mjs [app-client] (ecmascript)");
;
;
;
;
;
// src/createDraftSafeSelector.ts
var createDraftSafeSelectorCreator = (...args)=>{
    const createSelector2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorCreator"])(...args);
    const createDraftSafeSelector2 = Object.assign((...args2)=>{
        const selector = createSelector2(...args2);
        const wrappedSelector = (value, ...rest)=>selector((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["current"])(value) : value, ...rest);
        Object.assign(wrappedSelector, selector);
        return wrappedSelector;
    }, {
        withTypes: ()=>createDraftSafeSelector2
    });
    return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ createDraftSafeSelectorCreator(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weakMapMemoize"]);
;
// src/devtoolsExtension.ts
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"].apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
    return function(noop3) {
        return noop3;
    };
};
;
// src/tsHelpers.ts
var hasMatchFunction = (v)=>{
    return v && typeof v.match === "function";
};
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator(...args) {
        if (prepareAction) {
            let prepared = prepareAction(...args);
            if (!prepared) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "prepareAction did not return an object");
            }
            return {
                type,
                payload: prepared.payload,
                ..."meta" in prepared && {
                    meta: prepared.meta
                },
                ..."error" in prepared && {
                    error: prepared.error
                }
            };
        }
        return {
            type,
            payload: args[0]
        };
    }
    actionCreator.toString = ()=>`${type}`;
    actionCreator.type = type;
    actionCreator.match = (action)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action) && action.type === type;
    return actionCreator;
}
function isActionCreator(action) {
    return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
    hasMatchFunction(action);
}
function isFSA(action) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return [
        "type",
        "payload",
        "error",
        "meta"
    ].indexOf(key) > -1;
}
// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
    const splitType = type ? `${type}`.split("/") : [];
    const actionName = splitType[splitType.length - 1] || "actionCreator";
    return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { isActionCreator: isActionCreator2 = isActionCreator } = options;
    return ()=>(next)=>(action)=>{
                if (isActionCreator2(action)) {
                    console.warn(getMessage(action.type));
                }
                return next(action);
            };
}
// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
    let elapsed = 0;
    return {
        measureTime (fn) {
            const started = Date.now();
            try {
                return fn();
            } finally{
                const finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded () {
            if (elapsed > maxDelay) {
                console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
            }
        }
    };
}
var Tuple = class _Tuple extends Array {
    constructor(...items){
        super(...items);
        Object.setPrototypeOf(this, _Tuple.prototype);
    }
    static get [Symbol.species]() {
        return _Tuple;
    }
    concat(...arr) {
        return super.concat.apply(this, arr);
    }
    prepend(...arr) {
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new _Tuple(...arr[0].concat(this));
        }
        return new _Tuple(...arr.concat(this));
    }
};
function freezeDraftable(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftable"])(val) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"])(val, ()=>{}) : val;
}
function getOrInsertComputed(map, key, compute) {
    if (map.has(key)) return map.get(key);
    return map.set(key, compute(key)).get(key);
}
// src/immutableStateInvariantMiddleware.ts
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignoredPaths, obj) {
    const trackedProperties = trackProperties(isImmutable, ignoredPaths, obj);
    return {
        detectMutations () {
            return detectMutations(isImmutable, ignoredPaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignoredPaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
    const tracked = {
        value: obj
    };
    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
        checkedObjects.add(obj);
        tracked.children = {};
        const hasIgnoredPaths = ignoredPaths.length > 0;
        for(const key in obj){
            const nestedPath = path ? path + "." + key : key;
            if (hasIgnoredPaths) {
                const hasMatches = ignoredPaths.some((ignored)=>{
                    if (ignored instanceof RegExp) {
                        return ignored.test(nestedPath);
                    }
                    return nestedPath === ignored;
                });
                if (hasMatches) {
                    continue;
                }
            }
            tracked.children[key] = trackProperties(isImmutable, ignoredPaths, obj[key], nestedPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
    const prevObj = trackedProperty ? trackedProperty.value : void 0;
    const sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return {
            wasMutated: true,
            path
        };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return {
            wasMutated: false
        };
    }
    const keysToDetect = {};
    for(let key in trackedProperty.children){
        keysToDetect[key] = true;
    }
    for(let key in obj){
        keysToDetect[key] = true;
    }
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for(let key in keysToDetect){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return {
        wasMutated: false
    };
}
function createImmutableStateInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        let stringify2 = function(obj, serializer, indent, decycler) {
            return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
        }, getSerialize2 = function(serializer, decycler) {
            let stack = [], keys = [];
            if (!decycler) decycler = function(_, value) {
                if (stack[0] === value) return "[Circular ~]";
                return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            };
            return function(key, value) {
                if (stack.length > 0) {
                    var thisPos = stack.indexOf(this);
                    ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                    ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                    if (~stack.indexOf(value)) value = decycler.call(this, key, value);
                } else stack.push(value);
                return serializer == null ? value : serializer.call(this, key, value);
            };
        };
        var stringify = stringify2, getSerialize = getSerialize2;
        let { isImmutable = isImmutableDefault, ignoredPaths, warnAfter = 32 } = options;
        const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
        return ({ getState })=>{
            let state = getState();
            let tracker = track(state);
            let result;
            return (next)=>(action)=>{
                    const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
                        }
                    });
                    const dispatchedAction = next(action);
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
                        }
                    });
                    measureUtils.warnIfExceeded();
                    return dispatchedAction;
                };
        };
    }
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    const type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
    let foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache?.has(value)) return false;
    const entries = getEntries != null ? getEntries(value) : Object.entries(value);
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (const [key, nestedValue] of entries){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    if (cache && isNestedFrozen(value)) cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value)) return false;
    for (const nestedValue of Object.values(value)){
        if (typeof nestedValue !== "object" || nestedValue === null) continue;
        if (!isNestedFrozen(nestedValue)) return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const { isSerializable = isPlain, getEntries, ignoredActions = [], ignoredActionPaths = [
            "meta.arg",
            "meta.baseQueryMeta"
        ], ignoredPaths = [], warnAfter = 32, ignoreState = false, ignoreActions = false, disableCache = false } = options;
        const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
        return (storeAPI)=>(next)=>(action)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                        return next(action);
                    }
                    const result = next(action);
                    const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
                    if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
                        measureUtils.measureTime(()=>{
                            const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                            if (foundActionNonSerializableValue) {
                                const { keyPath, value } = foundActionNonSerializableValue;
                                console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                            }
                        });
                    }
                    if (!ignoreState) {
                        measureUtils.measureTime(()=>{
                            const state = storeAPI.getState();
                            const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                            if (foundStateNonSerializableValue) {
                                const { keyPath, value } = foundStateNonSerializableValue;
                                console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
                            }
                        });
                        measureUtils.warnIfExceeded();
                    }
                    return result;
                };
    }
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
var buildGetDefaultMiddleware = ()=>function getDefaultMiddleware(options) {
        const { thunk = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options ?? {};
        let middlewareArray = new Tuple();
        if (thunk) {
            if (isBoolean(thunk)) {
                middlewareArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thunk"]);
            } else {
                middlewareArray.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withExtraArgument"])(thunk.extraArgument));
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (immutableCheck) {
                let immutableOptions = {};
                if (!isBoolean(immutableCheck)) {
                    immutableOptions = immutableCheck;
                }
                middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
            }
            if (serializableCheck) {
                let serializableOptions = {};
                if (!isBoolean(serializableCheck)) {
                    serializableOptions = serializableCheck;
                }
                middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
            }
            if (actionCreatorCheck) {
                let actionCreatorOptions = {};
                if (!isBoolean(actionCreatorCheck)) {
                    actionCreatorOptions = actionCreatorCheck;
                }
                middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
            }
        }
        return middlewareArray;
    };
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = ()=>(payload)=>({
            payload,
            meta: {
                [SHOULD_AUTOBATCH]: true
            }
        });
var createQueueWithTimer = (timeout)=>{
    return (notify)=>{
        setTimeout(notify, timeout);
    };
};
var autoBatchEnhancer = (options = {
    type: "raf"
})=>(next)=>(...args)=>{
            const store = next(...args);
            let notifying = true;
            let shouldNotifyAtEndOfTick = false;
            let notificationQueued = false;
            const listeners = /* @__PURE__ */ new Set();
            const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
            typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
            const notifyListeners = ()=>{
                notificationQueued = false;
                if (shouldNotifyAtEndOfTick) {
                    shouldNotifyAtEndOfTick = false;
                    listeners.forEach((l)=>l());
                }
            };
            return Object.assign({}, store, {
                // Override the base `store.subscribe` method to keep original listeners
                // from running if we're delaying notifications
                subscribe (listener2) {
                    const wrappedListener = ()=>notifying && listener2();
                    const unsubscribe = store.subscribe(wrappedListener);
                    listeners.add(listener2);
                    return ()=>{
                        unsubscribe();
                        listeners.delete(listener2);
                    };
                },
                // Override the base `store.dispatch` method so that we can check actions
                // for the `shouldAutoBatch` flag and determine if batching is active
                dispatch (action) {
                    try {
                        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
                        shouldNotifyAtEndOfTick = !notifying;
                        if (shouldNotifyAtEndOfTick) {
                            if (!notificationQueued) {
                                notificationQueued = true;
                                queueCallback(notifyListeners);
                            }
                        }
                        return store.dispatch(action);
                    } finally{
                        notifying = true;
                    }
                }
            });
        };
// src/getDefaultEnhancers.ts
var buildGetDefaultEnhancers = (middlewareEnhancer)=>function getDefaultEnhancers(options) {
        const { autoBatch = true } = options ?? {};
        let enhancerArray = new Tuple(middlewareEnhancer);
        if (autoBatch) {
            enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
        }
        return enhancerArray;
    };
// src/configureStore.ts
function configureStore(options) {
    const getDefaultMiddleware = buildGetDefaultMiddleware();
    const { reducer = void 0, middleware, devTools = true, duplicateMiddlewareCheck = true, preloadedState = void 0, enhancers = void 0 } = options || {};
    let rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(reducer)) {
        rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])(reducer);
    } else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && middleware && typeof middleware !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`middleware` field must be a callback");
    }
    let finalMiddleware;
    if (typeof middleware === "function") {
        finalMiddleware = middleware(getDefaultMiddleware);
        if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(finalMiddleware)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "when using a middleware builder function, an array of middleware must be returned");
        }
    } else {
        finalMiddleware = getDefaultMiddleware();
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "each middleware provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && duplicateMiddlewareCheck) {
        let middlewareReferences = /* @__PURE__ */ new Set();
        finalMiddleware.forEach((middleware2)=>{
            if (middlewareReferences.has(middleware2)) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
            }
            middlewareReferences.add(middleware2);
        });
    }
    let finalCompose = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"];
    if (devTools) {
        finalCompose = composeWithDevTools({
            // Enable capture of stack traces for dispatched Redux actions
            trace: ("TURBOPACK compile-time value", "development") !== "production",
            ...typeof devTools === "object" && devTools
        });
    }
    const middlewareEnhancer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMiddleware"])(...finalMiddleware);
    const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
    if (("TURBOPACK compile-time value", "development") !== "production" && enhancers && typeof enhancers !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`enhancers` field must be a callback");
    }
    let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
    if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(storeEnhancers)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`enhancers` callback must return an array");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && storeEnhancers.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "each enhancer provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
        console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
    }
    const composedEnhancer = finalCompose(...storeEnhancers);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
        addCase (typeOrActionCreator, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (actionMatchers.length > 0) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (!type) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` cannot be called with an empty action type");
            }
            if (type in actionsMap) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addAsyncThunk (asyncThunk, reducers) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
                }
            }
            if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
            if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
            if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
            if (reducers.settled) actionMatchers.push({
                matcher: asyncThunk.settled,
                reducer: reducers.settled
            });
            return builder;
        },
        addMatcher (matcher, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({
                matcher,
                reducer
            });
            return builder;
        },
        addDefaultCase (reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [
        actionsMap,
        actionMatchers,
        defaultCaseReducer
    ];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof mapOrBuilderCallback === "object") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
        }
    }
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
    let getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = ()=>freezeDraftable(initialState());
    } else {
        const frozenInitialState = freezeDraftable(initialState);
        getInitialState = ()=>frozenInitialState;
    }
    function reducer(state = getInitialState(), action) {
        let caseReducers = [
            actionsMap[action.type],
            ...finalActionMatchers.filter(({ matcher })=>matcher(action)).map(({ reducer: reducer2 })=>reducer2)
        ];
        if (caseReducers.filter((cr)=>!!cr).length === 0) {
            caseReducers = [
                finalDefaultCaseReducer
            ];
        }
        return caseReducers.reduce((previousState, caseReducer)=>{
            if (caseReducer) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(previousState)) {
                    const draft = previousState;
                    const result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftable"])(previousState)) {
                    const result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                } else {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"])(previousState, (draft)=>{
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/matchers.ts
var matches = (matcher, action)=>{
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    } else {
        return matcher(action);
    }
};
function isAnyOf(...matchers) {
    return (action)=>{
        return matchers.some((matcher)=>matches(matcher, action));
    };
}
function isAllOf(...matchers) {
    return (action)=>{
        return matchers.every((matcher)=>matches(matcher, action));
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta) return false;
    const hasValidRequestId = typeof action.meta.requestId === "string";
    const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.pending));
}
function isRejected(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
    const hasFlag = (action)=>{
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return isAllOf(isRejected(...asyncThunks), hasFlag);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "fulfilled"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending",
                "fulfilled",
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.flatMap((asyncThunk)=>[
            asyncThunk.pending,
            asyncThunk.rejected,
            asyncThunk.fulfilled
        ]));
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = class {
    constructor(payload, meta){
        this.payload = payload;
        this.meta = meta;
    }
    /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ _type;
};
var FulfillWithMeta = class {
    constructor(payload, meta){
        this.payload = payload;
        this.meta = meta;
    }
    /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ _type;
};
var miniSerializeError = (value)=>{
    if (typeof value === "object" && value !== null) {
        const simpleError = {};
        for (const property of commonProperties){
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return {
        message: String(value)
    };
};
var externalAbortMessage = "External signal was aborted";
var createAsyncThunk = /* @__PURE__ */ (()=>{
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta)=>({
                payload,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "fulfilled"
                }
            }));
        const pending = createAction(typePrefix + "/pending", (requestId, arg, meta)=>({
                payload: void 0,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "pending"
                }
            }));
        const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta)=>({
                payload,
                error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    rejectedWithValue: !!payload,
                    requestStatus: "rejected",
                    aborted: error?.name === "AbortError",
                    condition: error?.name === "ConditionError"
                }
            }));
        function actionCreator(arg, { signal } = {}) {
            return (dispatch, getState, extra)=>{
                const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
                const abortController = new AbortController();
                let abortHandler;
                let abortReason;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                if (signal) {
                    if (signal.aborted) {
                        abort(externalAbortMessage);
                    } else {
                        signal.addEventListener("abort", ()=>abort(externalAbortMessage), {
                            once: true
                        });
                    }
                }
                const promise = async function() {
                    let finalAction;
                    try {
                        let conditionResult = options?.condition?.(arg, {
                            getState,
                            extra
                        });
                        if (isThenable(conditionResult)) {
                            conditionResult = await conditionResult;
                        }
                        if (conditionResult === false || abortController.signal.aborted) {
                            throw {
                                name: "ConditionError",
                                message: "Aborted due to condition callback returning false."
                            };
                        }
                        const abortedPromise = new Promise((_, reject)=>{
                            abortHandler = ()=>{
                                reject({
                                    name: "AbortError",
                                    message: abortReason || "Aborted"
                                });
                            };
                            abortController.signal.addEventListener("abort", abortHandler, {
                                once: true
                            });
                        });
                        dispatch(pending(requestId, arg, options?.getPendingMeta?.({
                            requestId,
                            arg
                        }, {
                            getState,
                            extra
                        })));
                        finalAction = await Promise.race([
                            abortedPromise,
                            Promise.resolve(payloadCreator(arg, {
                                dispatch,
                                getState,
                                extra,
                                requestId,
                                signal: abortController.signal,
                                abort,
                                rejectWithValue: (value, meta)=>{
                                    return new RejectWithValue(value, meta);
                                },
                                fulfillWithValue: (value, meta)=>{
                                    return new FulfillWithMeta(value, meta);
                                }
                            })).then((result)=>{
                                if (result instanceof RejectWithValue) {
                                    throw result;
                                }
                                if (result instanceof FulfillWithMeta) {
                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                }
                                return fulfilled(result, requestId, arg);
                            })
                        ]);
                    } catch (err) {
                        finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                    } finally{
                        if (abortHandler) {
                            abortController.signal.removeEventListener("abort", abortHandler);
                        }
                    }
                    const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                    if (!skipDispatch) {
                        dispatch(finalAction);
                    }
                    return finalAction;
                }();
                return Object.assign(promise, {
                    abort,
                    requestId,
                    arg,
                    unwrap () {
                        return promise.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending,
            rejected,
            fulfilled,
            settled: isAnyOf(rejected, fulfilled),
            typePrefix
        });
    }
    createAsyncThunk2.withTypes = ()=>createAsyncThunk2;
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/createSlice.ts
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
    [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2)=>{
    ReducerType2["reducer"] = "reducer";
    ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
    ReducerType2["asyncThunk"] = "asyncThunk";
    return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
    return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
    const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
    return function createSlice2(options) {
        const { name, reducerPath = name } = options;
        if (!name) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`name` is a required option for createSlice");
        }
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if (options.initialState === void 0) {
                console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
            }
        }
        const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
        const reducerNames = Object.keys(reducers);
        const context = {
            sliceCaseReducersByName: {},
            sliceCaseReducersByType: {},
            actionCreators: {},
            sliceMatchers: []
        };
        const contextMethods = {
            addCase (typeOrActionCreator, reducer2) {
                const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                if (!type) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`context.addCase` cannot be called with an empty action type");
                }
                if (type in context.sliceCaseReducersByType) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
                }
                context.sliceCaseReducersByType[type] = reducer2;
                return contextMethods;
            },
            addMatcher (matcher, reducer2) {
                context.sliceMatchers.push({
                    matcher,
                    reducer: reducer2
                });
                return contextMethods;
            },
            exposeAction (name2, actionCreator) {
                context.actionCreators[name2] = actionCreator;
                return contextMethods;
            },
            exposeCaseReducer (name2, reducer2) {
                context.sliceCaseReducersByName[name2] = reducer2;
                return contextMethods;
            }
        };
        reducerNames.forEach((reducerName)=>{
            const reducerDefinition = reducers[reducerName];
            const reducerDetails = {
                reducerName,
                type: getType(name, reducerName),
                createNotation: typeof options.reducers === "function"
            };
            if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
                handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
            } else {
                handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
            }
        });
        function buildReducer() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (typeof options.extraReducers === "object") {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
            const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [
                options.extraReducers
            ];
            const finalCaseReducers = {
                ...extraReducers,
                ...context.sliceCaseReducersByType
            };
            return createReducer(options.initialState, (builder)=>{
                for(let key in finalCaseReducers){
                    builder.addCase(key, finalCaseReducers[key]);
                }
                for (let sM of context.sliceMatchers){
                    builder.addMatcher(sM.matcher, sM.reducer);
                }
                for (let m of actionMatchers){
                    builder.addMatcher(m.matcher, m.reducer);
                }
                if (defaultCaseReducer) {
                    builder.addDefaultCase(defaultCaseReducer);
                }
            });
        }
        const selectSelf = (state)=>state;
        const injectedSelectorCache = /* @__PURE__ */ new Map();
        const injectedStateCache = /* @__PURE__ */ new WeakMap();
        let _reducer;
        function reducer(state, action) {
            if (!_reducer) _reducer = buildReducer();
            return _reducer(state, action);
        }
        function getInitialState() {
            if (!_reducer) _reducer = buildReducer();
            return _reducer.getInitialState();
        }
        function makeSelectorProps(reducerPath2, injected = false) {
            function selectSlice(state) {
                let sliceState = state[reducerPath2];
                if (typeof sliceState === "undefined") {
                    if (injected) {
                        sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "selectSlice returned undefined for an uninjected slice reducer");
                    }
                }
                return sliceState;
            }
            function getSelectors(selectState = selectSelf) {
                const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, ()=>/* @__PURE__ */ new WeakMap());
                return getOrInsertComputed(selectorCache, selectState, ()=>{
                    const map = {};
                    for (const [name2, selector] of Object.entries(options.selectors ?? {})){
                        map[name2] = wrapSelector(selector, selectState, ()=>getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
                    }
                    return map;
                });
            }
            return {
                reducerPath: reducerPath2,
                getSelectors,
                get selectors () {
                    return getSelectors(selectSlice);
                },
                selectSlice
            };
        }
        const slice = {
            name,
            reducer,
            actions: context.actionCreators,
            caseReducers: context.sliceCaseReducersByName,
            getInitialState,
            ...makeSelectorProps(reducerPath),
            injectInto (injectable, { reducerPath: pathOpt, ...config } = {}) {
                const newReducerPath = pathOpt ?? reducerPath;
                injectable.inject({
                    reducerPath: newReducerPath,
                    reducer
                }, config);
                return {
                    ...slice,
                    ...makeSelectorProps(newReducerPath, true)
                };
            }
        };
        return slice;
    };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
    function wrapper(rootState, ...args) {
        let sliceState = selectState(rootState);
        if (typeof sliceState === "undefined") {
            if (injected) {
                sliceState = getInitialState();
            } else if ("TURBOPACK compile-time truthy", 1) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "selectState returned undefined for an uninjected slice reducer");
            }
        }
        return selector(sliceState, ...args);
    }
    wrapper.unwrapped = selector;
    return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
    function asyncThunk(payloadCreator, config) {
        return {
            _reducerDefinitionType: "asyncThunk" /* asyncThunk */ ,
            payloadCreator,
            ...config
        };
    }
    asyncThunk.withTypes = ()=>asyncThunk;
    return {
        reducer (caseReducer) {
            return Object.assign({
                // hack so the wrapping function has the same name as the original
                // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
                [caseReducer.name] (...args) {
                    return caseReducer(...args);
                }
            }[caseReducer.name], {
                _reducerDefinitionType: "reducer" /* reducer */ 
            });
        },
        preparedReducer (prepare, reducer) {
            return {
                _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */ ,
                prepare,
                reducer
            };
        },
        asyncThunk
    };
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
    let caseReducer;
    let prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
        if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
        }
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
        caseReducer = maybeReducerWithPrepare;
    }
    context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */ ;
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */ ;
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
    if (!cAT) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
    }
    const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
    const thunk = cAT(type, payloadCreator, options);
    context.exposeAction(reducerName, thunk);
    if (fulfilled) {
        context.addCase(thunk.fulfilled, fulfilled);
    }
    if (pending) {
        context.addCase(thunk.pending, pending);
    }
    if (rejected) {
        context.addCase(thunk.rejected, rejected);
    }
    if (settled) {
        context.addMatcher(thunk.settled, settled);
    }
    context.exposeCaseReducer(reducerName, {
        fulfilled: fulfilled || noop,
        pending: pending || noop,
        rejected: rejected || noop,
        settled: settled || noop
    });
}
function noop() {}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory(stateAdapter) {
    function getInitialState(additionalState = {}, entities) {
        const state = Object.assign(getInitialEntityState(), additionalState);
        return entities ? stateAdapter.setAll(state, entities) : state;
    }
    return {
        getInitialState
    };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState, options = {}) {
        const { createSelector: createSelector2 = createDraftSafeSelector } = options;
        const selectIds = (state)=>state.ids;
        const selectEntities = (state)=>state.entities;
        const selectAll = createSelector2(selectIds, selectEntities, (ids, entities)=>ids.map((id)=>entities[id]));
        const selectId = (_, id)=>id;
        const selectById = (entities, id)=>entities[id];
        const selectTotal = createSelector2(selectIds, (ids)=>ids.length);
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
                selectById: createSelector2(selectEntities, selectId, selectById)
            };
        }
        const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
        return {
            selectIds: createSelector2(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createSelector2(selectState, selectAll),
            selectTotal: createSelector2(selectState, selectTotal),
            selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return {
        getSelectors
    };
}
// src/entities/state_adapter.ts
var isDraftTyped = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"];
function createSingleArgumentStateOperator(mutator) {
    const operator = createStateOperator((_, state)=>mutator(state));
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        const runMutator = (draft)=>{
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            } else {
                mutator(arg, draft);
            }
        };
        if (isDraftTyped(state)) {
            runMutator(state);
            return state;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"])(state, runMutator);
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    const key = selectId(entity);
    if (("TURBOPACK compile-time value", "development") !== "production" && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function getCurrent(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["current"])(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingIdsArray = getCurrent(state.ids);
    const existingIds = new Set(existingIdsArray);
    const added = [];
    const addedIds = /* @__PURE__ */ new Set([]);
    const updated = [];
    for (const entity of newEntities){
        const id = selectIdValue(entity, selectId);
        if (existingIds.has(id) || addedIds.has(id)) {
            updated.push({
                id,
                changes: entity
            });
        } else {
            addedIds.add(id);
            added.push(entity);
        }
    }
    return [
        added,
        updated,
        existingIdsArray
    ];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        ;
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([
            key
        ], state);
    }
    function removeManyMutably(keys, state) {
        let didMutate = false;
        keys.forEach((key)=>{
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter((id)=>id in state.entities);
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        const original3 = state.entities[update.id];
        if (original3 === void 0) {
            return false;
        }
        const updated = Object.assign({}, original3, update.changes);
        const newKey = selectIdValue(updated, selectId);
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        ;
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        const newKeys = {};
        const updatesPerEntity = {};
        updates.forEach((update)=>{
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    // Spreads ignore falsy values, so this works even if there isn't
                    // an existing update already at this key
                    changes: {
                        ...updatesPerEntity[update.id]?.changes,
                        ...update.changes
                    }
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            const didMutateIds = updates.filter((update)=>takeNewKey(newKeys, update, state)).length > 0;
            if (didMutateIds) {
                state.ids = Object.values(state.entities).map((e)=>selectIdValue(e, selectId));
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
        addManyMutably(added, state);
        updateManyMutably(updated, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function findInsertIndex(sortedItems, item, comparisonFunction) {
    let lowIndex = 0;
    let highIndex = sortedItems.length;
    while(lowIndex < highIndex){
        let middleIndex = lowIndex + highIndex >>> 1;
        const currentItem = sortedItems[middleIndex];
        const res = comparisonFunction(item, currentItem);
        if (res >= 0) {
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex;
        }
    }
    return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
    const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
    sortedItems.splice(insertAtIndex, 0, item);
    return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    function addOneMutably(entity, state) {
        return addManyMutably([
            entity
        ], state);
    }
    function addManyMutably(newEntities, state, existingIds) {
        newEntities = ensureEntitiesArray(newEntities);
        const existingKeys = new Set(existingIds ?? getCurrent(state.ids));
        const addedKeys = /* @__PURE__ */ new Set();
        const models = newEntities.filter((model)=>{
            const modelId = selectIdValue(model, selectId);
            const notAdded = !addedKeys.has(modelId);
            if (notAdded) addedKeys.add(modelId);
            return !existingKeys.has(modelId) && notAdded;
        });
        if (models.length !== 0) {
            mergeFunction(state, models);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([
            entity
        ], state);
    }
    function setManyMutably(newEntities, state) {
        let deduplicatedEntities = {};
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            for (const item of newEntities){
                const entityId = selectId(item);
                deduplicatedEntities[entityId] = item;
                delete state.entities[entityId];
            }
            newEntities = ensureEntitiesArray(deduplicatedEntities);
            mergeFunction(state, newEntities);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state, []);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        let appliedUpdates = false;
        let replacedIds = false;
        for (let update of updates){
            const entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            const newId = selectId(entity);
            if (update.id !== newId) {
                replacedIds = true;
                delete state.entities[update.id];
                const oldIndex = state.ids.indexOf(update.id);
                state.ids[oldIndex] = newId;
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            mergeFunction(state, [], appliedUpdates, replacedIds);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
        if (added.length) {
            addManyMutably(added, state, existingIdsArray);
        }
        if (updated.length) {
            updateManyMutably(updated, state);
        }
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    const mergeFunction = (state, addedItems, appliedUpdates, replacedIds)=>{
        const currentEntities = getCurrent(state.entities);
        const currentIds = getCurrent(state.ids);
        const stateEntities = state.entities;
        let ids = currentIds;
        if (replacedIds) {
            ids = new Set(currentIds);
        }
        let sortedEntities = [];
        for (const id of ids){
            const entity = currentEntities[id];
            if (entity) {
                sortedEntities.push(entity);
            }
        }
        const wasPreviouslyEmpty = sortedEntities.length === 0;
        for (const item of addedItems){
            stateEntities[selectId(item)] = item;
            if (!wasPreviouslyEmpty) {
                insert(sortedEntities, item, comparer);
            }
        }
        if (wasPreviouslyEmpty) {
            sortedEntities = addedItems.slice().sort(comparer);
        } else if (appliedUpdates) {
            sortedEntities.sort(comparer);
        }
        const newSortedIds = sortedEntities.map(selectId);
        if (!areArraysEqual(currentIds, newSortedIds)) {
            state.ids = newSortedIds;
        }
    };
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = {
        sortComparer: false,
        selectId: (instance)=>instance.id,
        ...options
    };
    const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    const stateFactory = createInitialStateFactory(stateAdapter);
    const selectorsFactory = createSelectorsFactory();
    return {
        selectId,
        sortComparer,
        ...stateFactory,
        ...selectorsFactory,
        ...stateAdapter
    };
}
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
    constructor(code){
        this.code = code;
        this.message = `${task} ${cancelled} (reason: ${code})`;
    }
    name = "TaskAbortError";
    message;
};
// src/listenerMiddleware/utils.ts
var assertFunction = (func, expected)=>{
    if (typeof func !== "function") {
        throw new TypeError(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${expected} is not a function`);
    }
};
var noop2 = ()=>{};
var catchRejection = (promise, onError = noop2)=>{
    promise.catch(onError);
    return promise;
};
var addAbortSignalListener = (abortSignal, callback)=>{
    abortSignal.addEventListener("abort", callback, {
        once: true
    });
    return ()=>abortSignal.removeEventListener("abort", callback);
};
// src/listenerMiddleware/task.ts
var validateActive = (signal)=>{
    if (signal.aborted) {
        throw new TaskAbortError(signal.reason);
    }
};
function raceWithSignal(signal, promise) {
    let cleanup = noop2;
    return new Promise((resolve, reject)=>{
        const notifyRejection = ()=>reject(new TaskAbortError(signal.reason));
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise.finally(()=>cleanup()).then(resolve, reject);
    }).finally(()=>{
        cleanup = noop2;
    });
}
var runTask = async (task2, cleanUp)=>{
    try {
        await Promise.resolve();
        const value = await task2();
        return {
            status: "ok",
            value
        };
    } catch (error) {
        return {
            status: error instanceof TaskAbortError ? "cancelled" : "rejected",
            error
        };
    } finally{
        cleanUp?.();
    }
};
var createPause = (signal)=>{
    return (promise)=>{
        return catchRejection(raceWithSignal(signal, promise).then((output)=>{
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = (signal)=>{
    const pause = createPause(signal);
    return (timeoutMs)=>{
        return pause(new Promise((resolve)=>setTimeout(resolve, timeoutMs)));
    };
};
// src/listenerMiddleware/index.ts
var { assign } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises)=>{
    const linkControllers = (controller)=>addAbortSignalListener(parentAbortSignal, ()=>controller.abort(parentAbortSignal.reason));
    return (taskExecutor, opts)=>{
        assertFunction(taskExecutor, "taskExecutor");
        const childAbortController = new AbortController();
        linkControllers(childAbortController);
        const result = runTask(async ()=>{
            validateActive(parentAbortSignal);
            validateActive(childAbortController.signal);
            const result2 = await taskExecutor({
                pause: createPause(childAbortController.signal),
                delay: createDelay(childAbortController.signal),
                signal: childAbortController.signal
            });
            validateActive(childAbortController.signal);
            return result2;
        }, ()=>childAbortController.abort(taskCompleted));
        if (opts?.autoJoin) {
            parentBlockingPromises.push(result.catch(noop2));
        }
        return {
            result: createPause(parentAbortSignal)(result),
            cancel () {
                childAbortController.abort(taskCancelled);
            }
        };
    };
};
var createTakePattern = (startListening, signal)=>{
    const take = async (predicate, timeout)=>{
        validateActive(signal);
        let unsubscribe = ()=>{};
        const tuplePromise = new Promise((resolve, reject)=>{
            let stopListening = startListening({
                predicate,
                effect: (action, listenerApi)=>{
                    listenerApi.unsubscribe();
                    resolve([
                        action,
                        listenerApi.getState(),
                        listenerApi.getOriginalState()
                    ]);
                }
            });
            unsubscribe = ()=>{
                stopListening();
                reject();
            };
        });
        const promises = [
            tuplePromise
        ];
        if (timeout != null) {
            promises.push(new Promise((resolve)=>setTimeout(resolve, timeout, null)));
        }
        try {
            const output = await raceWithSignal(signal, Promise.race(promises));
            validateActive(signal);
            return output;
        } finally{
            unsubscribe();
        }
    };
    return (predicate, timeout)=>catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options)=>{
    let { type, actionCreator, matcher, predicate, effect } = options;
    if (type) {
        predicate = createAction(type).match;
    } else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    } else if (matcher) {
        predicate = matcher;
    } else if (predicate) {} else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return {
        predicate,
        type,
        effect
    };
};
var createListenerEntry = /* @__PURE__ */ assign((options)=>{
    const { type, predicate, effect } = getListenerEntryPropsFrom(options);
    const entry = {
        id: nanoid(),
        effect,
        type,
        predicate,
        pending: /* @__PURE__ */ new Set(),
        unsubscribe: ()=>{
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Unsubscribe not initialized");
        }
    };
    return entry;
}, {
    withTypes: ()=>createListenerEntry
});
var findListenerEntry = (listenerMap, options)=>{
    const { type, effect, predicate } = getListenerEntryPropsFrom(options);
    return Array.from(listenerMap.values()).find((entry)=>{
        const matchPredicateOrType = typeof type === "string" ? entry.type === type : entry.predicate === predicate;
        return matchPredicateOrType && entry.effect === effect;
    });
};
var cancelActiveListeners = (entry)=>{
    entry.pending.forEach((controller)=>{
        controller.abort(listenerCancelled);
    });
};
var createClearListenerMiddleware = (listenerMap, executingListeners)=>{
    return ()=>{
        for (const listener2 of executingListeners.keys()){
            cancelActiveListeners(listener2);
        }
        listenerMap.clear();
    };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo)=>{
    try {
        errorHandler(errorToNotify, errorInfo);
    } catch (errorHandlerError) {
        setTimeout(()=>{
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), {
    withTypes: ()=>addListener
});
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), {
    withTypes: ()=>removeListener
});
var defaultErrorHandler = (...args)=>{
    console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {})=>{
    const listenerMap = /* @__PURE__ */ new Map();
    const executingListeners = /* @__PURE__ */ new Map();
    const trackExecutingListener = (entry)=>{
        const count = executingListeners.get(entry) ?? 0;
        executingListeners.set(entry, count + 1);
    };
    const untrackExecutingListener = (entry)=>{
        const count = executingListeners.get(entry) ?? 1;
        if (count === 1) {
            executingListeners.delete(entry);
        } else {
            executingListeners.set(entry, count - 1);
        }
    };
    const { extra, onError = defaultErrorHandler } = middlewareOptions;
    assertFunction(onError, "onError");
    const insertEntry = (entry)=>{
        entry.unsubscribe = ()=>listenerMap.delete(entry.id);
        listenerMap.set(entry.id, entry);
        return (cancelOptions)=>{
            entry.unsubscribe();
            if (cancelOptions?.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    const startListening = (options)=>{
        const entry = findListenerEntry(listenerMap, options) ?? createListenerEntry(options);
        return insertEntry(entry);
    };
    assign(startListening, {
        withTypes: ()=>startListening
    });
    const stopListening = (options)=>{
        const entry = findListenerEntry(listenerMap, options);
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    assign(stopListening, {
        withTypes: ()=>stopListening
    });
    const notifyListener = async (entry, action, api, getOriginalState)=>{
        const internalTaskController = new AbortController();
        const take = createTakePattern(startListening, internalTaskController.signal);
        const autoJoinPromises = [];
        try {
            entry.pending.add(internalTaskController);
            trackExecutingListener(entry);
            await Promise.resolve(entry.effect(action, // Use assign() rather than ... to avoid extra helper functions added to bundle
            assign({}, api, {
                getOriginalState,
                condition: (predicate, timeout)=>take(predicate, timeout).then(Boolean),
                take,
                delay: createDelay(internalTaskController.signal),
                pause: createPause(internalTaskController.signal),
                extra,
                signal: internalTaskController.signal,
                fork: createFork(internalTaskController.signal, autoJoinPromises),
                unsubscribe: entry.unsubscribe,
                subscribe: ()=>{
                    listenerMap.set(entry.id, entry);
                },
                cancelActiveListeners: ()=>{
                    entry.pending.forEach((controller, _, set)=>{
                        if (controller !== internalTaskController) {
                            controller.abort(listenerCancelled);
                            set.delete(controller);
                        }
                    });
                },
                cancel: ()=>{
                    internalTaskController.abort(listenerCancelled);
                    entry.pending.delete(internalTaskController);
                },
                throwIfCancelled: ()=>{
                    validateActive(internalTaskController.signal);
                }
            })));
        } catch (listenerError) {
            if (!(listenerError instanceof TaskAbortError)) {
                safelyNotifyError(onError, listenerError, {
                    raisedBy: "effect"
                });
            }
        } finally{
            await Promise.all(autoJoinPromises);
            internalTaskController.abort(listenerCompleted);
            untrackExecutingListener(entry);
            entry.pending.delete(internalTaskController);
        }
    };
    const clearListenerMiddleware = createClearListenerMiddleware(listenerMap, executingListeners);
    const middleware = (api)=>(next)=>(action)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                    return next(action);
                }
                if (addListener.match(action)) {
                    return startListening(action.payload);
                }
                if (clearAllListeners.match(action)) {
                    clearListenerMiddleware();
                    return;
                }
                if (removeListener.match(action)) {
                    return stopListening(action.payload);
                }
                let originalState = api.getState();
                const getOriginalState = ()=>{
                    if (originalState === INTERNAL_NIL_TOKEN) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${alm}: getOriginalState can only be called synchronously`);
                    }
                    return originalState;
                };
                let result;
                try {
                    result = next(action);
                    if (listenerMap.size > 0) {
                        const currentState = api.getState();
                        const listenerEntries = Array.from(listenerMap.values());
                        for (const entry of listenerEntries){
                            let runListener = false;
                            try {
                                runListener = entry.predicate(action, currentState, originalState);
                            } catch (predicateError) {
                                runListener = false;
                                safelyNotifyError(onError, predicateError, {
                                    raisedBy: "predicate"
                                });
                            }
                            if (!runListener) {
                                continue;
                            }
                            notifyListener(entry, action, api, getOriginalState);
                        }
                    }
                } finally{
                    originalState = INTERNAL_NIL_TOKEN;
                }
                return result;
            };
    return {
        middleware,
        startListening,
        stopListening,
        clearListeners: clearListenerMiddleware
    };
};
// src/dynamicMiddleware/index.ts
var createMiddlewareEntry = (middleware)=>({
        middleware,
        applied: /* @__PURE__ */ new Map()
    });
var matchInstance = (instanceId)=>(action)=>action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = ()=>{
    const instanceId = nanoid();
    const middlewareMap = /* @__PURE__ */ new Map();
    const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares)=>({
            payload: middlewares,
            meta: {
                instanceId
            }
        })), {
        withTypes: ()=>withMiddleware
    });
    const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
        middlewares.forEach((middleware2)=>{
            getOrInsertComputed(middlewareMap, middleware2, createMiddlewareEntry);
        });
    }, {
        withTypes: ()=>addMiddleware
    });
    const getFinalMiddleware = (api)=>{
        const appliedMiddleware = Array.from(middlewareMap.values()).map((entry)=>getOrInsertComputed(entry.applied, api, entry.middleware));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"])(...appliedMiddleware);
    };
    const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
    const middleware = (api)=>(next)=>(action)=>{
                if (isWithMiddleware(action)) {
                    addMiddleware(...action.payload);
                    return api.dispatch;
                }
                return getFinalMiddleware(api)(next)(action);
            };
    return {
        middleware,
        addMiddleware,
        withMiddleware,
        instanceId
    };
};
;
var isSliceLike = (maybeSliceLike)=>"reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices)=>slices.flatMap((sliceOrMap)=>isSliceLike(sliceOrMap) ? [
            [
                sliceOrMap.reducerPath,
                sliceOrMap.reducer
            ]
        ] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value)=>!!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap, initialStateCache)=>getOrInsertComputed(stateProxyMap, state, ()=>new Proxy(state, {
            get: (target, prop, receiver)=>{
                if (prop === ORIGINAL_STATE) return target;
                const result = Reflect.get(target, prop, receiver);
                if (typeof result === "undefined") {
                    const cached = initialStateCache[prop];
                    if (typeof cached !== "undefined") return cached;
                    const reducer = reducerMap[prop];
                    if (reducer) {
                        const reducerResult = reducer(void 0, {
                            type: nanoid()
                        });
                        if (typeof reducerResult === "undefined") {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${prop.toString()}" returned undefined when called for selector(). If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                        }
                        initialStateCache[prop] = reducerResult;
                        return reducerResult;
                    }
                }
                return result;
            }
        }));
var original = (state)=>{
    if (!isStateProxy(state)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "original must be used on state Proxy");
    }
    return state[ORIGINAL_STATE];
};
var emptyObject = {};
var noopReducer = (state = emptyObject)=>state;
function combineSlices(...slices) {
    const reducerMap = Object.fromEntries(getReducers(slices));
    const getReducer = ()=>Object.keys(reducerMap).length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])(reducerMap) : noopReducer;
    let reducer = getReducer();
    function combinedReducer(state, action) {
        return reducer(state, action);
    }
    combinedReducer.withLazyLoadedSlices = ()=>combinedReducer;
    const initialStateCache = {};
    const inject = (slice, config = {})=>{
        const { reducerPath, reducer: reducerToInject } = slice;
        const currentReducer = reducerMap[reducerPath];
        if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                console.error(`called \`inject\` to override already-existing reducer ${reducerPath} without specifying \`overrideExisting: true\``);
            }
            return combinedReducer;
        }
        if (config.overrideExisting && currentReducer !== reducerToInject) {
            delete initialStateCache[reducerPath];
        }
        reducerMap[reducerPath] = reducerToInject;
        reducer = getReducer();
        return combinedReducer;
    };
    const selector = Object.assign(function makeSelector(selectorFn, selectState) {
        return function selector2(state, ...args) {
            return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap, initialStateCache), ...args);
        };
    }, {
        original
    });
    return Object.assign(combinedReducer, {
        inject,
        selector
    });
}
// src/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
    return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
;
 //# sourceMappingURL=redux-toolkit.modern.mjs.map
}),
"[project]/brainbridge/node_modules/immer/dist/immer.mjs [app-client] (ecmascript) <export produce as createNextState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNextState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)");
}),
"[project]/brainbridge/node_modules/@standard-schema/utils/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchemaError",
    ()=>SchemaError,
    "getDotPath",
    ()=>getDotPath
]);
// src/getDotPath/getDotPath.ts
function getDotPath(issue) {
    if (issue.path?.length) {
        let dotPath = "";
        for (const item of issue.path){
            const key = typeof item === "object" ? item.key : item;
            if (typeof key === "string" || typeof key === "number") {
                if (dotPath) {
                    dotPath += `.${key}`;
                } else {
                    dotPath += key;
                }
            } else {
                return null;
            }
        }
        return dotPath;
    }
    return null;
}
// src/SchemaError/SchemaError.ts
var SchemaError = class extends Error {
    /**
   * The schema issues.
   */ issues;
    /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */ constructor(issues){
        super(issues[0].message);
        this.name = "SchemaError";
        this.issues = issues;
    }
};
;
}),
"[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NamedSchemaError",
    ()=>NamedSchemaError,
    "QueryStatus",
    ()=>QueryStatus,
    "_NEVER",
    ()=>_NEVER,
    "buildCreateApi",
    ()=>buildCreateApi,
    "copyWithStructuralSharing",
    ()=>copyWithStructuralSharing,
    "coreModule",
    ()=>coreModule,
    "coreModuleName",
    ()=>coreModuleName,
    "createApi",
    ()=>createApi,
    "defaultSerializeQueryArgs",
    ()=>defaultSerializeQueryArgs,
    "fakeBaseQuery",
    ()=>fakeBaseQuery,
    "fetchBaseQuery",
    ()=>fetchBaseQuery,
    "retry",
    ()=>retry,
    "setupListeners",
    ()=>setupListeners,
    "skipToken",
    ()=>skipToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/query/core/rtkImports.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/immer/dist/immer.mjs [app-client] (ecmascript) <export produce as createNextState>");
// src/query/utils/immerImports.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)");
// src/query/standardSchema.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$standard$2d$schema$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@standard-schema/utils/dist/index.js [app-client] (ecmascript)");
// src/query/core/apiState.ts
var QueryStatus = /* @__PURE__ */ ((QueryStatus7)=>{
    QueryStatus7["uninitialized"] = "uninitialized";
    QueryStatus7["pending"] = "pending";
    QueryStatus7["fulfilled"] = "fulfilled";
    QueryStatus7["rejected"] = "rejected";
    return QueryStatus7;
})(QueryStatus || {});
var STATUS_UNINITIALIZED = "uninitialized" /* uninitialized */ ;
var STATUS_PENDING = "pending" /* pending */ ;
var STATUS_FULFILLED = "fulfilled" /* fulfilled */ ;
var STATUS_REJECTED = "rejected" /* rejected */ ;
function getRequestStatusFlags(status) {
    return {
        status,
        isUninitialized: status === STATUS_UNINITIALIZED,
        isLoading: status === STATUS_PENDING,
        isSuccess: status === STATUS_FULFILLED,
        isError: status === STATUS_REJECTED
    };
}
;
// src/query/utils/copyWithStructuralSharing.ts
var isPlainObject2 = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"];
function copyWithStructuralSharing(oldObj, newObj) {
    if (oldObj === newObj || !(isPlainObject2(oldObj) && isPlainObject2(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
        return newObj;
    }
    const newKeys = Object.keys(newObj);
    const oldKeys = Object.keys(oldObj);
    let isSameObject = newKeys.length === oldKeys.length;
    const mergeObj = Array.isArray(newObj) ? [] : {};
    for (const key of newKeys){
        mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
        if (isSameObject) isSameObject = oldObj[key] === mergeObj[key];
    }
    return isSameObject ? oldObj : mergeObj;
}
// src/query/utils/filterMap.ts
function filterMap(array, predicate, mapper) {
    return array.reduce((acc, item, i)=>{
        if (predicate(item, i)) {
            acc.push(mapper(item, i));
        }
        return acc;
    }, []).flat();
}
// src/query/utils/isAbsoluteUrl.ts
function isAbsoluteUrl(url) {
    return new RegExp(`(^|:)//`).test(url);
}
// src/query/utils/isDocumentVisible.ts
function isDocumentVisible() {
    if (typeof document === "undefined") {
        return true;
    }
    return document.visibilityState !== "hidden";
}
// src/query/utils/isNotNullish.ts
function isNotNullish(v) {
    return v != null;
}
function filterNullishValues(map) {
    return [
        ...map?.values() ?? []
    ].filter(isNotNullish);
}
// src/query/utils/isOnline.ts
function isOnline() {
    return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
// src/query/utils/joinUrls.ts
var withoutTrailingSlash = (url)=>url.replace(/\/$/, "");
var withoutLeadingSlash = (url)=>url.replace(/^\//, "");
function joinUrls(base, url) {
    if (!base) {
        return url;
    }
    if (!url) {
        return base;
    }
    if (isAbsoluteUrl(url)) {
        return url;
    }
    const delimiter = base.endsWith("/") || !url.startsWith("?") ? "/" : "";
    base = withoutTrailingSlash(base);
    url = withoutLeadingSlash(url);
    return `${base}${delimiter}${url}`;
}
// src/query/utils/getOrInsert.ts
function getOrInsertComputed(map, key, compute) {
    if (map.has(key)) return map.get(key);
    return map.set(key, compute(key)).get(key);
}
var createNewMap = ()=>/* @__PURE__ */ new Map();
// src/query/utils/signals.ts
var timeoutSignal = (milliseconds)=>{
    const abortController = new AbortController();
    setTimeout(()=>{
        const message = "signal timed out";
        const name = "TimeoutError";
        abortController.abort(// some environments (React Native, Node) don't have DOMException
        typeof DOMException !== "undefined" ? new DOMException(message, name) : Object.assign(new Error(message), {
            name
        }));
    }, milliseconds);
    return abortController.signal;
};
var anySignal = (...signals)=>{
    for (const signal of signals)if (signal.aborted) return AbortSignal.abort(signal.reason);
    const abortController = new AbortController();
    for (const signal of signals){
        signal.addEventListener("abort", ()=>abortController.abort(signal.reason), {
            signal: abortController.signal,
            once: true
        });
    }
    return abortController.signal;
};
// src/query/fetchBaseQuery.ts
var defaultFetchFn = (...args)=>fetch(...args);
var defaultValidateStatus = (response)=>response.status >= 200 && response.status <= 299;
var defaultIsJsonContentType = (headers)=>/*applicat*/ /ion\/(vnd\.api\+)?json/.test(headers.get("content-type") || "");
function stripUndefined(obj) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(obj)) {
        return obj;
    }
    const copy = {
        ...obj
    };
    for (const [k, v] of Object.entries(copy)){
        if (v === void 0) delete copy[k];
    }
    return copy;
}
var isJsonifiable = (body)=>typeof body === "object" && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(body) || Array.isArray(body) || typeof body.toJSON === "function");
function fetchBaseQuery({ baseUrl, prepareHeaders = (x)=>x, fetchFn = defaultFetchFn, paramsSerializer, isJsonContentType = defaultIsJsonContentType, jsonContentType = "application/json", jsonReplacer, timeout: defaultTimeout, responseHandler: globalResponseHandler, validateStatus: globalValidateStatus, ...baseFetchOptions } = {}) {
    if (typeof fetch === "undefined" && fetchFn === defaultFetchFn) {
        console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.");
    }
    return async (arg, api, extraOptions)=>{
        const { getState, extra, endpoint, forced, type } = api;
        let meta;
        let { url, headers = new Headers(baseFetchOptions.headers), params = void 0, responseHandler = globalResponseHandler ?? "json", validateStatus = globalValidateStatus ?? defaultValidateStatus, timeout = defaultTimeout, ...rest } = typeof arg == "string" ? {
            url: arg
        } : arg;
        let config = {
            ...baseFetchOptions,
            signal: timeout ? anySignal(api.signal, timeoutSignal(timeout)) : api.signal,
            ...rest
        };
        headers = new Headers(stripUndefined(headers));
        config.headers = await prepareHeaders(headers, {
            getState,
            arg,
            extra,
            endpoint,
            forced,
            type,
            extraOptions
        }) || headers;
        const bodyIsJsonifiable = isJsonifiable(config.body);
        if (config.body != null && !bodyIsJsonifiable && typeof config.body !== "string") {
            config.headers.delete("content-type");
        }
        if (!config.headers.has("content-type") && bodyIsJsonifiable) {
            config.headers.set("content-type", jsonContentType);
        }
        if (bodyIsJsonifiable && isJsonContentType(config.headers)) {
            config.body = JSON.stringify(config.body, jsonReplacer);
        }
        if (!config.headers.has("accept")) {
            if (responseHandler === "json") {
                config.headers.set("accept", "application/json");
            } else if (responseHandler === "text") {
                config.headers.set("accept", "text/plain, text/html, */*");
            }
        }
        if (params) {
            const divider = ~url.indexOf("?") ? "&" : "?";
            const query = paramsSerializer ? paramsSerializer(params) : new URLSearchParams(stripUndefined(params));
            url += divider + query;
        }
        url = joinUrls(baseUrl, url);
        const request = new Request(url, config);
        const requestClone = new Request(url, config);
        meta = {
            request: requestClone
        };
        let response;
        try {
            response = await fetchFn(request);
        } catch (e) {
            return {
                error: {
                    status: (e instanceof Error || typeof DOMException !== "undefined" && e instanceof DOMException) && e.name === "TimeoutError" ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                    error: String(e)
                },
                meta
            };
        }
        const responseClone = response.clone();
        meta.response = responseClone;
        let resultData;
        let responseText = "";
        try {
            let handleResponseError;
            await Promise.all([
                handleResponse(response, responseHandler).then((r)=>resultData = r, (e)=>handleResponseError = e),
                // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
                // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
                responseClone.text().then((r)=>responseText = r, ()=>{})
            ]);
            if (handleResponseError) throw handleResponseError;
        } catch (e) {
            return {
                error: {
                    status: "PARSING_ERROR",
                    originalStatus: response.status,
                    data: responseText,
                    error: String(e)
                },
                meta
            };
        }
        return validateStatus(response, resultData) ? {
            data: resultData,
            meta
        } : {
            error: {
                status: response.status,
                data: resultData
            },
            meta
        };
    };
    //TURBOPACK unreachable
    ;
    async function handleResponse(response, responseHandler) {
        if (typeof responseHandler === "function") {
            return responseHandler(response);
        }
        if (responseHandler === "content-type") {
            responseHandler = isJsonContentType(response.headers) ? "json" : "text";
        }
        if (responseHandler === "json") {
            const text = await response.text();
            return text.length ? JSON.parse(text) : null;
        }
        return response.text();
    }
}
// src/query/HandledError.ts
var HandledError = class {
    constructor(value, meta = void 0){
        this.value = value;
        this.meta = meta;
    }
};
// src/query/retry.ts
async function defaultBackoff(attempt = 0, maxRetries = 5, signal) {
    const attempts = Math.min(attempt, maxRetries);
    const timeout = ~~((Math.random() + 0.4) * (300 << attempts));
    await new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>resolve(), timeout);
        if (signal) {
            const abortHandler = ()=>{
                clearTimeout(timeoutId);
                reject(new Error("Aborted"));
            };
            if (signal.aborted) {
                clearTimeout(timeoutId);
                reject(new Error("Aborted"));
            } else {
                signal.addEventListener("abort", abortHandler, {
                    once: true
                });
            }
        }
    });
}
function fail(error, meta) {
    throw Object.assign(new HandledError({
        error,
        meta
    }), {
        throwImmediately: true
    });
}
function failIfAborted(signal) {
    if (signal.aborted) {
        fail({
            status: "CUSTOM_ERROR",
            error: "Aborted"
        });
    }
}
var EMPTY_OPTIONS = {};
var retryWithBackoff = (baseQuery, defaultOptions)=>async (args, api, extraOptions)=>{
        const possibleMaxRetries = [
            5,
            (defaultOptions || EMPTY_OPTIONS).maxRetries,
            (extraOptions || EMPTY_OPTIONS).maxRetries
        ].filter((x)=>x !== void 0);
        const [maxRetries] = possibleMaxRetries.slice(-1);
        const defaultRetryCondition = (_, __, { attempt })=>attempt <= maxRetries;
        const options = {
            maxRetries,
            backoff: defaultBackoff,
            retryCondition: defaultRetryCondition,
            ...defaultOptions,
            ...extraOptions
        };
        let retry2 = 0;
        while(true){
            failIfAborted(api.signal);
            try {
                const result = await baseQuery(args, api, extraOptions);
                if (result.error) {
                    throw new HandledError(result);
                }
                return result;
            } catch (e) {
                retry2++;
                if (e.throwImmediately) {
                    if (e instanceof HandledError) {
                        return e.value;
                    }
                    throw e;
                }
                if (e instanceof HandledError) {
                    if (!options.retryCondition(e.value.error, args, {
                        attempt: retry2,
                        baseQueryApi: api,
                        extraOptions
                    })) {
                        return e.value;
                    }
                } else {
                    if (retry2 > options.maxRetries) {
                        return {
                            error: e
                        };
                    }
                }
                failIfAborted(api.signal);
                try {
                    await options.backoff(retry2, options.maxRetries, api.signal);
                } catch (backoffError) {
                    failIfAborted(api.signal);
                    throw backoffError;
                }
            }
        }
    };
var retry = /* @__PURE__ */ Object.assign(retryWithBackoff, {
    fail
});
// src/query/core/setupListeners.ts
var INTERNAL_PREFIX = "__rtkq/";
var ONLINE = "online";
var OFFLINE = "offline";
var FOCUS = "focus";
var FOCUSED = "focused";
var VISIBILITYCHANGE = "visibilitychange";
var onFocus = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${INTERNAL_PREFIX}${FOCUSED}`);
var onFocusLost = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${INTERNAL_PREFIX}un${FOCUSED}`);
var onOnline = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${INTERNAL_PREFIX}${ONLINE}`);
var onOffline = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${INTERNAL_PREFIX}${OFFLINE}`);
var actions = {
    onFocus,
    onFocusLost,
    onOnline,
    onOffline
};
var initialized = false;
function setupListeners(dispatch, customHandler) {
    function defaultHandler() {
        const [handleFocus, handleFocusLost, handleOnline, handleOffline] = [
            onFocus,
            onFocusLost,
            onOnline,
            onOffline
        ].map((action)=>()=>dispatch(action()));
        const handleVisibilityChange = ()=>{
            if (window.document.visibilityState === "visible") {
                handleFocus();
            } else {
                handleFocusLost();
            }
        };
        let unsubscribe = ()=>{
            initialized = false;
        };
        if (!initialized) {
            if (typeof window !== "undefined" && window.addEventListener) {
                let updateListeners2 = function(add) {
                    Object.entries(handlers).forEach(([event, handler])=>{
                        if (add) {
                            window.addEventListener(event, handler, false);
                        } else {
                            window.removeEventListener(event, handler);
                        }
                    });
                };
                var updateListeners = updateListeners2;
                const handlers = {
                    [FOCUS]: handleFocus,
                    [VISIBILITYCHANGE]: handleVisibilityChange,
                    [ONLINE]: handleOnline,
                    [OFFLINE]: handleOffline
                };
                updateListeners2(true);
                initialized = true;
                unsubscribe = ()=>{
                    updateListeners2(false);
                    initialized = false;
                };
            }
        }
        return unsubscribe;
    }
    return customHandler ? customHandler(dispatch, actions) : defaultHandler();
}
// src/query/endpointDefinitions.ts
var ENDPOINT_QUERY = "query" /* query */ ;
var ENDPOINT_MUTATION = "mutation" /* mutation */ ;
var ENDPOINT_INFINITEQUERY = "infinitequery" /* infinitequery */ ;
function isQueryDefinition(e) {
    return e.type === ENDPOINT_QUERY;
}
function isMutationDefinition(e) {
    return e.type === ENDPOINT_MUTATION;
}
function isInfiniteQueryDefinition(e) {
    return e.type === ENDPOINT_INFINITEQUERY;
}
function isAnyQueryDefinition(e) {
    return isQueryDefinition(e) || isInfiniteQueryDefinition(e);
}
function calculateProvidedBy(description, result, error, queryArg, meta, assertTagTypes) {
    const finalDescription = isFunction(description) ? description(result, error, queryArg, meta) : description;
    if (finalDescription) {
        return filterMap(finalDescription, isNotNullish, (tag)=>assertTagTypes(expandTagDescription(tag)));
    }
    return [];
}
function isFunction(t) {
    return typeof t === "function";
}
function expandTagDescription(description) {
    return typeof description === "string" ? {
        type: description
    } : description;
}
;
;
// src/tsHelpers.ts
function asSafePromise(promise, fallback) {
    return promise.catch(fallback);
}
// src/query/apiTypes.ts
var getEndpointDefinition = (context, endpointName)=>context.endpointDefinitions[endpointName];
// src/query/core/buildInitiate.ts
var forceQueryFnSymbol = Symbol("forceQueryFn");
var isUpsertQuery = (arg)=>typeof arg[forceQueryFnSymbol] === "function";
function buildInitiate({ serializeQueryArgs, queryThunk, infiniteQueryThunk, mutationThunk, api, context, getInternalState }) {
    const getRunningQueries = (dispatch)=>getInternalState(dispatch)?.runningQueries;
    const getRunningMutations = (dispatch)=>getInternalState(dispatch)?.runningMutations;
    const { unsubscribeQueryResult, removeMutationResult, updateSubscriptionOptions } = api.internalActions;
    return {
        buildInitiateQuery,
        buildInitiateInfiniteQuery,
        buildInitiateMutation,
        getRunningQueryThunk,
        getRunningMutationThunk,
        getRunningQueriesThunk,
        getRunningMutationsThunk
    };
    //TURBOPACK unreachable
    ;
    function getRunningQueryThunk(endpointName, queryArgs) {
        return (dispatch)=>{
            const endpointDefinition = getEndpointDefinition(context, endpointName);
            const queryCacheKey = serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            });
            return getRunningQueries(dispatch)?.get(queryCacheKey);
        };
    }
    function getRunningMutationThunk(_endpointName, fixedCacheKeyOrRequestId) {
        return (dispatch)=>{
            return getRunningMutations(dispatch)?.get(fixedCacheKeyOrRequestId);
        };
    }
    function getRunningQueriesThunk() {
        return (dispatch)=>filterNullishValues(getRunningQueries(dispatch));
    }
    function getRunningMutationsThunk() {
        return (dispatch)=>filterNullishValues(getRunningMutations(dispatch));
    }
    function middlewareWarning(dispatch) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (middlewareWarning.triggered) return;
            const returnedValue = dispatch(api.internalActions.internal_getRTKQSubscriptions());
            middlewareWarning.triggered = true;
            if (typeof returnedValue !== "object" || typeof returnedValue?.type === "string") {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Warning: Middleware for RTK-Query API at reducerPath "${api.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
            }
        }
    }
    function buildInitiateAnyQuery(endpointName, endpointDefinition) {
        const queryAction = (arg, { subscribe = true, forceRefetch, subscriptionOptions, [forceQueryFnSymbol]: forceQueryFn, ...rest } = {})=>(dispatch, getState)=>{
                const queryCacheKey = serializeQueryArgs({
                    queryArgs: arg,
                    endpointDefinition,
                    endpointName
                });
                let thunk;
                const commonThunkArgs = {
                    ...rest,
                    type: ENDPOINT_QUERY,
                    subscribe,
                    forceRefetch,
                    subscriptionOptions,
                    endpointName,
                    originalArgs: arg,
                    queryCacheKey,
                    [forceQueryFnSymbol]: forceQueryFn
                };
                if (isQueryDefinition(endpointDefinition)) {
                    thunk = queryThunk(commonThunkArgs);
                } else {
                    const { direction, initialPageParam, refetchCachedPages } = rest;
                    thunk = infiniteQueryThunk({
                        ...commonThunkArgs,
                        // Supply these even if undefined. This helps with a field existence
                        // check over in `buildSlice.ts`
                        direction,
                        initialPageParam,
                        refetchCachedPages
                    });
                }
                const selector = api.endpoints[endpointName].select(arg);
                const thunkResult = dispatch(thunk);
                const stateAfter = selector(getState());
                middlewareWarning(dispatch);
                const { requestId, abort } = thunkResult;
                const skippedSynchronously = stateAfter.requestId !== requestId;
                const runningQuery = getRunningQueries(dispatch)?.get(queryCacheKey);
                const selectFromState = ()=>selector(getState());
                const statePromise = Object.assign(forceQueryFn ? // a query has been forced (upsertQueryData)
                // -> we want to resolve it once data has been written with the data that will be written
                thunkResult.then(selectFromState) : skippedSynchronously && !runningQuery ? // a query has been skipped due to a condition and we do not have any currently running query
                // -> we want to resolve it immediately with the current data
                Promise.resolve(stateAfter) : // query just started or one is already in flight
                // -> wait for the running query, then resolve with data from after that
                Promise.all([
                    runningQuery,
                    thunkResult
                ]).then(selectFromState), {
                    arg,
                    requestId,
                    subscriptionOptions,
                    queryCacheKey,
                    abort,
                    async unwrap () {
                        const result = await statePromise;
                        if (result.isError) {
                            throw result.error;
                        }
                        return result.data;
                    },
                    refetch: (options)=>dispatch(queryAction(arg, {
                            subscribe: false,
                            forceRefetch: true,
                            ...options
                        })),
                    unsubscribe () {
                        if (subscribe) dispatch(unsubscribeQueryResult({
                            queryCacheKey,
                            requestId
                        }));
                    },
                    updateSubscriptionOptions (options) {
                        statePromise.subscriptionOptions = options;
                        dispatch(updateSubscriptionOptions({
                            endpointName,
                            requestId,
                            queryCacheKey,
                            options
                        }));
                    }
                });
                if (!runningQuery && !skippedSynchronously && !forceQueryFn) {
                    const runningQueries = getRunningQueries(dispatch);
                    runningQueries.set(queryCacheKey, statePromise);
                    statePromise.then(()=>{
                        runningQueries.delete(queryCacheKey);
                    });
                }
                return statePromise;
            };
        return queryAction;
    }
    function buildInitiateQuery(endpointName, endpointDefinition) {
        const queryAction = buildInitiateAnyQuery(endpointName, endpointDefinition);
        return queryAction;
    }
    function buildInitiateInfiniteQuery(endpointName, endpointDefinition) {
        const infiniteQueryAction = buildInitiateAnyQuery(endpointName, endpointDefinition);
        return infiniteQueryAction;
    }
    function buildInitiateMutation(endpointName) {
        return (arg, { track = true, fixedCacheKey } = {})=>(dispatch, getState)=>{
                const thunk = mutationThunk({
                    type: "mutation",
                    endpointName,
                    originalArgs: arg,
                    track,
                    fixedCacheKey
                });
                const thunkResult = dispatch(thunk);
                middlewareWarning(dispatch);
                const { requestId, abort, unwrap } = thunkResult;
                const returnValuePromise = asSafePromise(thunkResult.unwrap().then((data)=>({
                        data
                    })), (error)=>({
                        error
                    }));
                const reset = ()=>{
                    dispatch(removeMutationResult({
                        requestId,
                        fixedCacheKey
                    }));
                };
                const ret = Object.assign(returnValuePromise, {
                    arg: thunkResult.arg,
                    requestId,
                    abort,
                    unwrap,
                    reset
                });
                const runningMutations = getRunningMutations(dispatch);
                runningMutations.set(requestId, ret);
                ret.then(()=>{
                    runningMutations.delete(requestId);
                });
                if (fixedCacheKey) {
                    runningMutations.set(fixedCacheKey, ret);
                    ret.then(()=>{
                        if (runningMutations.get(fixedCacheKey) === ret) {
                            runningMutations.delete(fixedCacheKey);
                        }
                    });
                }
                return ret;
            };
    }
}
;
var NamedSchemaError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$standard$2d$schema$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SchemaError"] {
    constructor(issues, value, schemaName, _bqMeta){
        super(issues);
        this.value = value;
        this.schemaName = schemaName;
        this._bqMeta = _bqMeta;
    }
};
var shouldSkip = (skipSchemaValidation, schemaName)=>Array.isArray(skipSchemaValidation) ? skipSchemaValidation.includes(schemaName) : !!skipSchemaValidation;
async function parseWithSchema(schema, data, schemaName, bqMeta) {
    const result = await schema["~standard"].validate(data);
    if (result.issues) {
        throw new NamedSchemaError(result.issues, data, schemaName, bqMeta);
    }
    return result.value;
}
// src/query/core/buildThunks.ts
function defaultTransformResponse(baseQueryReturnValue) {
    return baseQueryReturnValue;
}
var addShouldAutoBatch = (arg = {})=>{
    return {
        ...arg,
        [__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SHOULD_AUTOBATCH"]]: true
    };
};
function buildThunks({ reducerPath, baseQuery, context: { endpointDefinitions }, serializeQueryArgs, api, assertTagType, selectors, onSchemaFailure, catchSchemaFailure: globalCatchSchemaFailure, skipSchemaValidation: globalSkipSchemaValidation }) {
    const patchQueryData = (endpointName, arg, patches, updateProvided)=>(dispatch, getState)=>{
            const endpointDefinition = endpointDefinitions[endpointName];
            const queryCacheKey = serializeQueryArgs({
                queryArgs: arg,
                endpointDefinition,
                endpointName
            });
            dispatch(api.internalActions.queryResultPatched({
                queryCacheKey,
                patches
            }));
            if (!updateProvided) {
                return;
            }
            const newValue = api.endpoints[endpointName].select(arg)(// Work around TS 4.1 mismatch
            getState());
            const providedTags = calculateProvidedBy(endpointDefinition.providesTags, newValue.data, void 0, arg, {}, assertTagType);
            dispatch(api.internalActions.updateProvidedBy([
                {
                    queryCacheKey,
                    providedTags
                }
            ]));
        };
    function addToStart(items, item, max = 0) {
        const newItems = [
            item,
            ...items
        ];
        return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
    }
    function addToEnd(items, item, max = 0) {
        const newItems = [
            ...items,
            item
        ];
        return max && newItems.length > max ? newItems.slice(1) : newItems;
    }
    const updateQueryData = (endpointName, arg, updateRecipe, updateProvided = true)=>(dispatch, getState)=>{
            const endpointDefinition = api.endpoints[endpointName];
            const currentState = endpointDefinition.select(arg)(// Work around TS 4.1 mismatch
            getState());
            const ret = {
                patches: [],
                inversePatches: [],
                undo: ()=>dispatch(api.util.patchQueryData(endpointName, arg, ret.inversePatches, updateProvided))
            };
            if (currentState.status === STATUS_UNINITIALIZED) {
                return ret;
            }
            let newValue;
            if ("data" in currentState) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftable"])(currentState.data)) {
                    const [value, patches, inversePatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produceWithPatches"])(currentState.data, updateRecipe);
                    ret.patches.push(...patches);
                    ret.inversePatches.push(...inversePatches);
                    newValue = value;
                } else {
                    newValue = updateRecipe(currentState.data);
                    ret.patches.push({
                        op: "replace",
                        path: [],
                        value: newValue
                    });
                    ret.inversePatches.push({
                        op: "replace",
                        path: [],
                        value: currentState.data
                    });
                }
            }
            if (ret.patches.length === 0) {
                return ret;
            }
            dispatch(api.util.patchQueryData(endpointName, arg, ret.patches, updateProvided));
            return ret;
        };
    const upsertQueryData = (endpointName, arg, value)=>(dispatch)=>{
            const res = dispatch(api.endpoints[endpointName].initiate(arg, {
                subscribe: false,
                forceRefetch: true,
                [forceQueryFnSymbol]: ()=>({
                        data: value
                    })
            }));
            return res;
        };
    const getTransformCallbackForEndpoint = (endpointDefinition, transformFieldName)=>{
        return endpointDefinition.query && endpointDefinition[transformFieldName] ? endpointDefinition[transformFieldName] : defaultTransformResponse;
    };
    const executeEndpoint = async (arg, { signal, abort, rejectWithValue, fulfillWithValue, dispatch, getState, extra })=>{
        const endpointDefinition = endpointDefinitions[arg.endpointName];
        const { metaSchema, skipSchemaValidation = globalSkipSchemaValidation } = endpointDefinition;
        const isQuery = arg.type === ENDPOINT_QUERY;
        try {
            let transformResponse = defaultTransformResponse;
            const baseQueryApi = {
                signal,
                abort,
                dispatch,
                getState,
                extra,
                endpoint: arg.endpointName,
                type: arg.type,
                forced: isQuery ? isForcedQuery(arg, getState()) : void 0,
                queryCacheKey: isQuery ? arg.queryCacheKey : void 0
            };
            const forceQueryFn = isQuery ? arg[forceQueryFnSymbol] : void 0;
            let finalQueryReturnValue;
            const fetchPage = async (data, param, maxPages, previous)=>{
                if (param == null && data.pages.length) {
                    return Promise.resolve({
                        data
                    });
                }
                const finalQueryArg = {
                    queryArg: arg.originalArgs,
                    pageParam: param
                };
                const pageResponse = await executeRequest(finalQueryArg);
                const addTo = previous ? addToStart : addToEnd;
                return {
                    data: {
                        pages: addTo(data.pages, pageResponse.data, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    },
                    meta: pageResponse.meta
                };
            };
            async function executeRequest(finalQueryArg) {
                let result;
                const { extraOptions, argSchema, rawResponseSchema, responseSchema } = endpointDefinition;
                if (argSchema && !shouldSkip(skipSchemaValidation, "arg")) {
                    finalQueryArg = await parseWithSchema(argSchema, finalQueryArg, "argSchema", {});
                }
                if (forceQueryFn) {
                    result = forceQueryFn();
                } else if (endpointDefinition.query) {
                    transformResponse = getTransformCallbackForEndpoint(endpointDefinition, "transformResponse");
                    result = await baseQuery(endpointDefinition.query(finalQueryArg), baseQueryApi, extraOptions);
                } else {
                    result = await endpointDefinition.queryFn(finalQueryArg, baseQueryApi, extraOptions, (arg2)=>baseQuery(arg2, baseQueryApi, extraOptions));
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                    const what = endpointDefinition.query ? "`baseQuery`" : "`queryFn`";
                    let err;
                    if (!result) {
                        err = `${what} did not return anything.`;
                    } else if (typeof result !== "object") {
                        err = `${what} did not return an object.`;
                    } else if (result.error && result.data) {
                        err = `${what} returned an object containing both \`error\` and \`result\`.`;
                    } else if (result.error === void 0 && result.data === void 0) {
                        err = `${what} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
                    } else {
                        for (const key of Object.keys(result)){
                            if (key !== "error" && key !== "data" && key !== "meta") {
                                err = `The object returned by ${what} has the unknown property ${key}.`;
                                break;
                            }
                        }
                    }
                    if (err) {
                        console.error(`Error encountered handling the endpoint ${arg.endpointName}.
                  ${err}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, result);
                    }
                }
                if (result.error) throw new HandledError(result.error, result.meta);
                let { data } = result;
                if (rawResponseSchema && !shouldSkip(skipSchemaValidation, "rawResponse")) {
                    data = await parseWithSchema(rawResponseSchema, result.data, "rawResponseSchema", result.meta);
                }
                let transformedResponse = await transformResponse(data, result.meta, finalQueryArg);
                if (responseSchema && !shouldSkip(skipSchemaValidation, "response")) {
                    transformedResponse = await parseWithSchema(responseSchema, transformedResponse, "responseSchema", result.meta);
                }
                return {
                    ...result,
                    data: transformedResponse
                };
            }
            if (isQuery && "infiniteQueryOptions" in endpointDefinition) {
                const { infiniteQueryOptions } = endpointDefinition;
                const { maxPages = Infinity } = infiniteQueryOptions;
                const refetchCachedPages = arg.refetchCachedPages ?? infiniteQueryOptions.refetchCachedPages ?? true;
                let result;
                const blankData = {
                    pages: [],
                    pageParams: []
                };
                const cachedData = selectors.selectQueryEntry(getState(), arg.queryCacheKey)?.data;
                const isForcedQueryNeedingRefetch = // arg.forceRefetch
                isForcedQuery(arg, getState()) && !arg.direction;
                const existingData = isForcedQueryNeedingRefetch || !cachedData ? blankData : cachedData;
                if ("direction" in arg && arg.direction && existingData.pages.length) {
                    const previous = arg.direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const param = pageParamFn(infiniteQueryOptions, existingData, arg.originalArgs);
                    result = await fetchPage(existingData, param, maxPages, previous);
                } else {
                    const { initialPageParam = infiniteQueryOptions.initialPageParam } = arg;
                    const cachedPageParams = cachedData?.pageParams ?? [];
                    const firstPageParam = cachedPageParams[0] ?? initialPageParam;
                    const totalPages = cachedPageParams.length;
                    result = await fetchPage(existingData, firstPageParam, maxPages);
                    if (forceQueryFn) {
                        result = {
                            data: result.data.pages[0]
                        };
                    }
                    if (refetchCachedPages) {
                        for(let i = 1; i < totalPages; i++){
                            const param = getNextPageParam(infiniteQueryOptions, result.data, arg.originalArgs);
                            result = await fetchPage(result.data, param, maxPages);
                        }
                    }
                }
                finalQueryReturnValue = result;
            } else {
                finalQueryReturnValue = await executeRequest(arg.originalArgs);
            }
            if (metaSchema && !shouldSkip(skipSchemaValidation, "meta") && finalQueryReturnValue.meta) {
                finalQueryReturnValue.meta = await parseWithSchema(metaSchema, finalQueryReturnValue.meta, "metaSchema", finalQueryReturnValue.meta);
            }
            return fulfillWithValue(finalQueryReturnValue.data, addShouldAutoBatch({
                fulfilledTimeStamp: Date.now(),
                baseQueryMeta: finalQueryReturnValue.meta
            }));
        } catch (error) {
            let caughtError = error;
            if (caughtError instanceof HandledError) {
                let transformErrorResponse = getTransformCallbackForEndpoint(endpointDefinition, "transformErrorResponse");
                const { rawErrorResponseSchema, errorResponseSchema } = endpointDefinition;
                let { value, meta } = caughtError;
                try {
                    if (rawErrorResponseSchema && !shouldSkip(skipSchemaValidation, "rawErrorResponse")) {
                        value = await parseWithSchema(rawErrorResponseSchema, value, "rawErrorResponseSchema", meta);
                    }
                    if (metaSchema && !shouldSkip(skipSchemaValidation, "meta")) {
                        meta = await parseWithSchema(metaSchema, meta, "metaSchema", meta);
                    }
                    let transformedErrorResponse = await transformErrorResponse(value, meta, arg.originalArgs);
                    if (errorResponseSchema && !shouldSkip(skipSchemaValidation, "errorResponse")) {
                        transformedErrorResponse = await parseWithSchema(errorResponseSchema, transformedErrorResponse, "errorResponseSchema", meta);
                    }
                    return rejectWithValue(transformedErrorResponse, addShouldAutoBatch({
                        baseQueryMeta: meta
                    }));
                } catch (e) {
                    caughtError = e;
                }
            }
            try {
                if (caughtError instanceof NamedSchemaError) {
                    const info = {
                        endpoint: arg.endpointName,
                        arg: arg.originalArgs,
                        type: arg.type,
                        queryCacheKey: isQuery ? arg.queryCacheKey : void 0
                    };
                    endpointDefinition.onSchemaFailure?.(caughtError, info);
                    onSchemaFailure?.(caughtError, info);
                    const { catchSchemaFailure = globalCatchSchemaFailure } = endpointDefinition;
                    if (catchSchemaFailure) {
                        return rejectWithValue(catchSchemaFailure(caughtError, info), addShouldAutoBatch({
                            baseQueryMeta: caughtError._bqMeta
                        }));
                    }
                }
            } catch (e) {
                caughtError = e;
            }
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
                console.error(`An unhandled error occurred processing a request for the endpoint "${arg.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, caughtError);
            } else {
                console.error(caughtError);
            }
            throw caughtError;
        }
    };
    function isForcedQuery(arg, state) {
        const requestState = selectors.selectQueryEntry(state, arg.queryCacheKey);
        const baseFetchOnMountOrArgChange = selectors.selectConfig(state).refetchOnMountOrArgChange;
        const fulfilledVal = requestState?.fulfilledTimeStamp;
        const refetchVal = arg.forceRefetch ?? (arg.subscribe && baseFetchOnMountOrArgChange);
        if (refetchVal) {
            return refetchVal === true || (Number(/* @__PURE__ */ new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
        }
        return false;
    }
    const createQueryThunk = ()=>{
        const generatedQueryThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${reducerPath}/executeQuery`, executeEndpoint, {
            getPendingMeta ({ arg }) {
                const endpointDefinition = endpointDefinitions[arg.endpointName];
                return addShouldAutoBatch({
                    startedTimeStamp: Date.now(),
                    ...isInfiniteQueryDefinition(endpointDefinition) ? {
                        direction: arg.direction
                    } : {}
                });
            },
            condition (queryThunkArg, { getState }) {
                const state = getState();
                const requestState = selectors.selectQueryEntry(state, queryThunkArg.queryCacheKey);
                const fulfilledVal = requestState?.fulfilledTimeStamp;
                const currentArg = queryThunkArg.originalArgs;
                const previousArg = requestState?.originalArgs;
                const endpointDefinition = endpointDefinitions[queryThunkArg.endpointName];
                const direction = queryThunkArg.direction;
                if (isUpsertQuery(queryThunkArg)) {
                    return true;
                }
                if (requestState?.status === "pending") {
                    return false;
                }
                if (isForcedQuery(queryThunkArg, state)) {
                    return true;
                }
                if (isQueryDefinition(endpointDefinition) && endpointDefinition?.forceRefetch?.({
                    currentArg,
                    previousArg,
                    endpointState: requestState,
                    state
                })) {
                    return true;
                }
                if (fulfilledVal && !direction) {
                    return false;
                }
                return true;
            },
            dispatchConditionRejection: true
        });
        return generatedQueryThunk;
    };
    const queryThunk = createQueryThunk();
    const infiniteQueryThunk = createQueryThunk();
    const mutationThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${reducerPath}/executeMutation`, executeEndpoint, {
        getPendingMeta () {
            return addShouldAutoBatch({
                startedTimeStamp: Date.now()
            });
        }
    });
    const hasTheForce = (options)=>"force" in options;
    const hasMaxAge = (options)=>"ifOlderThan" in options;
    const prefetch = (endpointName, arg, options = {})=>(dispatch, getState)=>{
            const force = hasTheForce(options) && options.force;
            const maxAge = hasMaxAge(options) && options.ifOlderThan;
            const queryAction = (force2 = true)=>{
                const options2 = {
                    forceRefetch: force2,
                    subscribe: false
                };
                return api.endpoints[endpointName].initiate(arg, options2);
            };
            const latestStateValue = api.endpoints[endpointName].select(arg)(getState());
            if (force) {
                dispatch(queryAction());
            } else if (maxAge) {
                const lastFulfilledTs = latestStateValue?.fulfilledTimeStamp;
                if (!lastFulfilledTs) {
                    dispatch(queryAction());
                    return;
                }
                const shouldRetrigger = (Number(/* @__PURE__ */ new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
                if (shouldRetrigger) {
                    dispatch(queryAction());
                }
            } else {
                dispatch(queryAction(false));
            }
        };
    function matchesEndpoint(endpointName) {
        return (action)=>action?.meta?.arg?.endpointName === endpointName;
    }
    function buildMatchThunkActions(thunk, endpointName) {
        return {
            matchPending: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAllOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isPending"])(thunk), matchesEndpoint(endpointName)),
            matchFulfilled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAllOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(thunk), matchesEndpoint(endpointName)),
            matchRejected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAllOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejected"])(thunk), matchesEndpoint(endpointName))
        };
    }
    return {
        queryThunk,
        mutationThunk,
        infiniteQueryThunk,
        prefetch,
        updateQueryData,
        upsertQueryData,
        patchQueryData,
        buildMatchThunkActions
    };
}
function getNextPageParam(options, { pages, pageParams }, queryArg) {
    const lastIndex = pages.length - 1;
    return options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams, queryArg);
}
function getPreviousPageParam(options, { pages, pageParams }, queryArg) {
    return options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams, queryArg);
}
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
    return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(action) ? action.payload : void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejectedWithValue"])(action) ? action.payload : void 0, action.meta.arg.originalArgs, "baseQueryMeta" in action.meta ? action.meta.baseQueryMeta : void 0, assertTagType);
}
// src/query/utils/getCurrent.ts
function getCurrent(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["current"])(value) : value;
}
// src/query/core/buildSlice.ts
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
    const substate = state[queryCacheKey];
    if (substate) {
        update(substate);
    }
}
function getMutationCacheKey(id) {
    return ("arg" in id ? id.arg.fixedCacheKey : id.fixedCacheKey) ?? id.requestId;
}
function updateMutationSubstateIfExists(state, id, update) {
    const substate = state[getMutationCacheKey(id)];
    if (substate) {
        update(substate);
    }
}
var initialState = {};
function buildSlice({ reducerPath, queryThunk, mutationThunk, serializeQueryArgs, context: { endpointDefinitions: definitions, apiUid, extractRehydrationInfo, hasRehydrationInfo }, assertTagType, config }) {
    const resetApiState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${reducerPath}/resetApiState`);
    function writePendingCacheEntry(draft, arg, upserting, meta) {
        draft[arg.queryCacheKey] ??= {
            status: STATUS_UNINITIALIZED,
            endpointName: arg.endpointName
        };
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, (substate)=>{
            substate.status = STATUS_PENDING;
            substate.requestId = upserting && substate.requestId ? // for `upsertQuery` **updates**, keep the current `requestId`
            substate.requestId : // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            meta.requestId;
            if (arg.originalArgs !== void 0) {
                substate.originalArgs = arg.originalArgs;
            }
            substate.startedTimeStamp = meta.startedTimeStamp;
            const endpointDefinition = definitions[meta.arg.endpointName];
            if (isInfiniteQueryDefinition(endpointDefinition) && "direction" in arg) {
                ;
                substate.direction = arg.direction;
            }
        });
    }
    function writeFulfilledCacheEntry(draft, meta, payload, upserting) {
        updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, (substate)=>{
            if (substate.requestId !== meta.requestId && !upserting) return;
            const { merge } = definitions[meta.arg.endpointName];
            substate.status = STATUS_FULFILLED;
            if (merge) {
                if (substate.data !== void 0) {
                    const { fulfilledTimeStamp, arg, baseQueryMeta, requestId } = meta;
                    let newData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__["createNextState"])(substate.data, (draftSubstateData)=>{
                        return merge(draftSubstateData, payload, {
                            arg: arg.originalArgs,
                            baseQueryMeta,
                            fulfilledTimeStamp,
                            requestId
                        });
                    });
                    substate.data = newData;
                } else {
                    substate.data = payload;
                }
            } else {
                substate.data = definitions[meta.arg.endpointName].structuralSharing ?? true ? copyWithStructuralSharing((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(substate.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["original"])(substate.data) : substate.data, payload) : payload;
            }
            delete substate.error;
            substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
    }
    const querySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/queries`,
        initialState,
        reducers: {
            removeQueryResult: {
                reducer (draft, { payload: { queryCacheKey } }) {
                    delete draft[queryCacheKey];
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            },
            cacheEntriesUpserted: {
                reducer (draft, action) {
                    for (const entry of action.payload){
                        const { queryDescription: arg, value } = entry;
                        writePendingCacheEntry(draft, arg, true, {
                            arg,
                            requestId: action.meta.requestId,
                            startedTimeStamp: action.meta.timestamp
                        });
                        writeFulfilledCacheEntry(draft, {
                            arg,
                            requestId: action.meta.requestId,
                            fulfilledTimeStamp: action.meta.timestamp,
                            baseQueryMeta: {}
                        }, value, // We know we're upserting here
                        true);
                    }
                },
                prepare: (payload)=>{
                    const queryDescriptions = payload.map((entry)=>{
                        const { endpointName, arg, value } = entry;
                        const endpointDefinition = definitions[endpointName];
                        const queryDescription = {
                            type: ENDPOINT_QUERY,
                            endpointName,
                            originalArgs: entry.arg,
                            queryCacheKey: serializeQueryArgs({
                                queryArgs: arg,
                                endpointDefinition,
                                endpointName
                            })
                        };
                        return {
                            queryDescription,
                            value
                        };
                    });
                    const result = {
                        payload: queryDescriptions,
                        meta: {
                            [__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SHOULD_AUTOBATCH"]]: true,
                            requestId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                            timestamp: Date.now()
                        }
                    };
                    return result;
                }
            },
            queryResultPatched: {
                reducer (draft, { payload: { queryCacheKey, patches } }) {
                    updateQuerySubstateIfExists(draft, queryCacheKey, (substate)=>{
                        substate.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPatches"])(substate.data, patches.concat());
                    });
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        },
        extraReducers (builder) {
            builder.addCase(queryThunk.pending, (draft, { meta, meta: { arg } })=>{
                const upserting = isUpsertQuery(arg);
                writePendingCacheEntry(draft, arg, upserting, meta);
            }).addCase(queryThunk.fulfilled, (draft, { meta, payload })=>{
                const upserting = isUpsertQuery(meta.arg);
                writeFulfilledCacheEntry(draft, meta, payload, upserting);
            }).addCase(queryThunk.rejected, (draft, { meta: { condition, arg, requestId }, error, payload })=>{
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, (substate)=>{
                    if (condition) {} else {
                        if (substate.requestId !== requestId) return;
                        substate.status = STATUS_REJECTED;
                        substate.error = payload ?? error;
                    }
                });
            }).addMatcher(hasRehydrationInfo, (draft, action)=>{
                const { queries } = extractRehydrationInfo(action);
                for (const [key, entry] of Object.entries(queries)){
                    if (// do not rehydrate entries that were currently in flight.
                    entry?.status === STATUS_FULFILLED || entry?.status === STATUS_REJECTED) {
                        draft[key] = entry;
                    }
                }
            });
        }
    });
    const mutationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/mutations`,
        initialState,
        reducers: {
            removeMutationResult: {
                reducer (draft, { payload }) {
                    const cacheKey = getMutationCacheKey(payload);
                    if (cacheKey in draft) {
                        delete draft[cacheKey];
                    }
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        },
        extraReducers (builder) {
            builder.addCase(mutationThunk.pending, (draft, { meta, meta: { requestId, arg, startedTimeStamp } })=>{
                if (!arg.track) return;
                draft[getMutationCacheKey(meta)] = {
                    requestId,
                    status: STATUS_PENDING,
                    endpointName: arg.endpointName,
                    startedTimeStamp
                };
            }).addCase(mutationThunk.fulfilled, (draft, { payload, meta })=>{
                if (!meta.arg.track) return;
                updateMutationSubstateIfExists(draft, meta, (substate)=>{
                    if (substate.requestId !== meta.requestId) return;
                    substate.status = STATUS_FULFILLED;
                    substate.data = payload;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(mutationThunk.rejected, (draft, { payload, error, meta })=>{
                if (!meta.arg.track) return;
                updateMutationSubstateIfExists(draft, meta, (substate)=>{
                    if (substate.requestId !== meta.requestId) return;
                    substate.status = STATUS_REJECTED;
                    substate.error = payload ?? error;
                });
            }).addMatcher(hasRehydrationInfo, (draft, action)=>{
                const { mutations } = extractRehydrationInfo(action);
                for (const [key, entry] of Object.entries(mutations)){
                    if (// do not rehydrate entries that were currently in flight.
                    (entry?.status === STATUS_FULFILLED || entry?.status === STATUS_REJECTED) && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
                    key !== entry?.requestId) {
                        draft[key] = entry;
                    }
                }
            });
        }
    });
    const initialInvalidationState = {
        tags: {},
        keys: {}
    };
    const invalidationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/invalidation`,
        initialState: initialInvalidationState,
        reducers: {
            updateProvidedBy: {
                reducer (draft, action) {
                    for (const { queryCacheKey, providedTags } of action.payload){
                        removeCacheKeyFromTags(draft, queryCacheKey);
                        for (const { type, id } of providedTags){
                            const subscribedQueries = (draft.tags[type] ??= {})[id || "__internal_without_id"] ??= [];
                            const alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                            if (!alreadySubscribed) {
                                subscribedQueries.push(queryCacheKey);
                            }
                        }
                        draft.keys[queryCacheKey] = providedTags;
                    }
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        },
        extraReducers (builder) {
            builder.addCase(querySlice.actions.removeQueryResult, (draft, { payload: { queryCacheKey } })=>{
                removeCacheKeyFromTags(draft, queryCacheKey);
            }).addMatcher(hasRehydrationInfo, (draft, action)=>{
                const { provided } = extractRehydrationInfo(action);
                for (const [type, incomingTags] of Object.entries(provided.tags ?? {})){
                    for (const [id, cacheKeys] of Object.entries(incomingTags)){
                        const subscribedQueries = (draft.tags[type] ??= {})[id || "__internal_without_id"] ??= [];
                        for (const queryCacheKey of cacheKeys){
                            const alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                            if (!alreadySubscribed) {
                                subscribedQueries.push(queryCacheKey);
                            }
                            draft.keys[queryCacheKey] = provided.keys[queryCacheKey];
                        }
                    }
                }
            }).addMatcher((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk), (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejectedWithValue"])(queryThunk)), (draft, action)=>{
                writeProvidedTagsForQueries(draft, [
                    action
                ]);
            }).addMatcher(querySlice.actions.cacheEntriesUpserted.match, (draft, action)=>{
                const mockActions = action.payload.map(({ queryDescription, value })=>{
                    return {
                        type: "UNKNOWN",
                        payload: value,
                        meta: {
                            requestStatus: "fulfilled",
                            requestId: "UNKNOWN",
                            arg: queryDescription
                        }
                    };
                });
                writeProvidedTagsForQueries(draft, mockActions);
            });
        }
    });
    function removeCacheKeyFromTags(draft, queryCacheKey) {
        const existingTags = getCurrent(draft.keys[queryCacheKey] ?? []);
        for (const tag of existingTags){
            const tagType = tag.type;
            const tagId = tag.id ?? "__internal_without_id";
            const tagSubscriptions = draft.tags[tagType]?.[tagId];
            if (tagSubscriptions) {
                draft.tags[tagType][tagId] = getCurrent(tagSubscriptions).filter((qc)=>qc !== queryCacheKey);
            }
        }
        delete draft.keys[queryCacheKey];
    }
    function writeProvidedTagsForQueries(draft, actions3) {
        const providedByEntries = actions3.map((action)=>{
            const providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
            const { queryCacheKey } = action.meta.arg;
            return {
                queryCacheKey,
                providedTags
            };
        });
        invalidationSlice.caseReducers.updateProvidedBy(draft, invalidationSlice.actions.updateProvidedBy(providedByEntries));
    }
    const subscriptionSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/subscriptions`,
        initialState,
        reducers: {
            updateSubscriptionOptions (d, a) {},
            unsubscribeQueryResult (d, a) {},
            internal_getRTKQSubscriptions () {}
        }
    });
    const internalSubscriptionsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/internalSubscriptions`,
        initialState,
        reducers: {
            subscriptionsUpdated: {
                reducer (state, action) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPatches"])(state, action.payload);
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        }
    });
    const configSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/config`,
        initialState: {
            online: isOnline(),
            focused: isDocumentVisible(),
            middlewareRegistered: false,
            ...config
        },
        reducers: {
            middlewareRegistered (state, { payload }) {
                state.middlewareRegistered = state.middlewareRegistered === "conflict" || apiUid !== payload ? "conflict" : true;
            }
        },
        extraReducers: (builder)=>{
            builder.addCase(onOnline, (state)=>{
                state.online = true;
            }).addCase(onOffline, (state)=>{
                state.online = false;
            }).addCase(onFocus, (state)=>{
                state.focused = true;
            }).addCase(onFocusLost, (state)=>{
                state.focused = false;
            }).addMatcher(hasRehydrationInfo, (draft)=>({
                    ...draft
                }));
        }
    });
    const combinedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
        queries: querySlice.reducer,
        mutations: mutationSlice.reducer,
        provided: invalidationSlice.reducer,
        subscriptions: internalSubscriptionsSlice.reducer,
        config: configSlice.reducer
    });
    const reducer = (state, action)=>combinedReducer(resetApiState.match(action) ? void 0 : state, action);
    const actions2 = {
        ...configSlice.actions,
        ...querySlice.actions,
        ...subscriptionSlice.actions,
        ...internalSubscriptionsSlice.actions,
        ...mutationSlice.actions,
        ...invalidationSlice.actions,
        resetApiState
    };
    return {
        reducer,
        actions: actions2
    };
}
// src/query/core/buildSelectors.ts
var skipToken = /* @__PURE__ */ Symbol.for("RTKQ/skipToken");
var initialSubState = {
    status: STATUS_UNINITIALIZED
};
var defaultQuerySubState = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__["createNextState"])(initialSubState, ()=>{});
var defaultMutationSubState = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__["createNextState"])(initialSubState, ()=>{});
function buildSelectors({ serializeQueryArgs, reducerPath, createSelector: createSelector2 }) {
    const selectSkippedQuery = (state)=>defaultQuerySubState;
    const selectSkippedMutation = (state)=>defaultMutationSubState;
    return {
        buildQuerySelector,
        buildInfiniteQuerySelector,
        buildMutationSelector,
        selectInvalidatedBy,
        selectCachedArgsForQuery,
        selectApiState,
        selectQueries,
        selectMutations,
        selectQueryEntry,
        selectConfig
    };
    //TURBOPACK unreachable
    ;
    function withRequestFlags(substate) {
        return {
            ...substate,
            ...getRequestStatusFlags(substate.status)
        };
    }
    function selectApiState(rootState) {
        const state = rootState[reducerPath];
        if ("TURBOPACK compile-time truthy", 1) {
            if (!state) {
                if (selectApiState.triggered) return state;
                selectApiState.triggered = true;
                console.error(`Error: No data found at \`state.${reducerPath}\`. Did you forget to add the reducer to the store?`);
            }
        }
        return state;
    }
    function selectQueries(rootState) {
        return selectApiState(rootState)?.queries;
    }
    function selectQueryEntry(rootState, cacheKey) {
        return selectQueries(rootState)?.[cacheKey];
    }
    function selectMutations(rootState) {
        return selectApiState(rootState)?.mutations;
    }
    function selectConfig(rootState) {
        return selectApiState(rootState)?.config;
    }
    function buildAnyQuerySelector(endpointName, endpointDefinition, combiner) {
        return (queryArgs)=>{
            if (queryArgs === skipToken) {
                return createSelector2(selectSkippedQuery, combiner);
            }
            const serializedArgs = serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            });
            const selectQuerySubstate = (state)=>selectQueryEntry(state, serializedArgs) ?? defaultQuerySubState;
            return createSelector2(selectQuerySubstate, combiner);
        };
    }
    function buildQuerySelector(endpointName, endpointDefinition) {
        return buildAnyQuerySelector(endpointName, endpointDefinition, withRequestFlags);
    }
    function buildInfiniteQuerySelector(endpointName, endpointDefinition) {
        const { infiniteQueryOptions } = endpointDefinition;
        function withInfiniteQueryResultFlags(substate) {
            const stateWithRequestFlags = {
                ...substate,
                ...getRequestStatusFlags(substate.status)
            };
            const { isLoading, isError, direction } = stateWithRequestFlags;
            const isForward = direction === "forward";
            const isBackward = direction === "backward";
            return {
                ...stateWithRequestFlags,
                hasNextPage: getHasNextPage(infiniteQueryOptions, stateWithRequestFlags.data, stateWithRequestFlags.originalArgs),
                hasPreviousPage: getHasPreviousPage(infiniteQueryOptions, stateWithRequestFlags.data, stateWithRequestFlags.originalArgs),
                isFetchingNextPage: isLoading && isForward,
                isFetchingPreviousPage: isLoading && isBackward,
                isFetchNextPageError: isError && isForward,
                isFetchPreviousPageError: isError && isBackward
            };
        }
        return buildAnyQuerySelector(endpointName, endpointDefinition, withInfiniteQueryResultFlags);
    }
    function buildMutationSelector() {
        return (id)=>{
            let mutationId;
            if (typeof id === "object") {
                mutationId = getMutationCacheKey(id) ?? skipToken;
            } else {
                mutationId = id;
            }
            const selectMutationSubstate = (state)=>selectApiState(state)?.mutations?.[mutationId] ?? defaultMutationSubState;
            const finalSelectMutationSubstate = mutationId === skipToken ? selectSkippedMutation : selectMutationSubstate;
            return createSelector2(finalSelectMutationSubstate, withRequestFlags);
        };
    }
    function selectInvalidatedBy(state, tags) {
        const apiState = state[reducerPath];
        const toInvalidate = /* @__PURE__ */ new Set();
        const finalTags = filterMap(tags, isNotNullish, expandTagDescription);
        for (const tag of finalTags){
            const provided = apiState.provided.tags[tag.type];
            if (!provided) {
                continue;
            }
            let invalidateSubscriptions = (tag.id !== void 0 ? // id given: invalidate all queries that provide this type & id
            provided[tag.id] : // no id: invalidate all queries that provide this type
            Object.values(provided).flat()) ?? [];
            for (const invalidate of invalidateSubscriptions){
                toInvalidate.add(invalidate);
            }
        }
        return Array.from(toInvalidate.values()).flatMap((queryCacheKey)=>{
            const querySubState = apiState.queries[queryCacheKey];
            return querySubState ? {
                queryCacheKey,
                endpointName: querySubState.endpointName,
                originalArgs: querySubState.originalArgs
            } : [];
        });
    }
    function selectCachedArgsForQuery(state, queryName) {
        return filterMap(Object.values(selectQueries(state)), (entry)=>entry?.endpointName === queryName && entry.status !== STATUS_UNINITIALIZED, (entry)=>entry.originalArgs);
    }
    function getHasNextPage(options, data, queryArg) {
        if (!data) return false;
        return getNextPageParam(options, data, queryArg) != null;
    }
    function getHasPreviousPage(options, data, queryArg) {
        if (!data || !options.getPreviousPageParam) return false;
        return getPreviousPageParam(options, data, queryArg) != null;
    }
}
;
// src/query/defaultSerializeQueryArgs.ts
var cache = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs = ({ endpointName, queryArgs })=>{
    let serialized = "";
    const cached = cache?.get(queryArgs);
    if (typeof cached === "string") {
        serialized = cached;
    } else {
        const stringified = JSON.stringify(queryArgs, (key, value)=>{
            value = typeof value === "bigint" ? {
                $bigint: value.toString()
            } : value;
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(value) ? Object.keys(value).sort().reduce((acc, key2)=>{
                acc[key2] = value[key2];
                return acc;
            }, {}) : value;
            return value;
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(queryArgs)) {
            cache?.set(queryArgs, stringified);
        }
        serialized = stringified;
    }
    return `${endpointName}(${serialized})`;
};
;
function buildCreateApi(...modules) {
    return function baseCreateApi(options) {
        const extractRehydrationInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weakMapMemoize"])((action)=>options.extractRehydrationInfo?.(action, {
                reducerPath: options.reducerPath ?? "api"
            }));
        const optionsWithDefaults = {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: false,
            refetchOnFocus: false,
            refetchOnReconnect: false,
            invalidationBehavior: "delayed",
            ...options,
            extractRehydrationInfo,
            serializeQueryArgs (queryArgsApi) {
                let finalSerializeQueryArgs = defaultSerializeQueryArgs;
                if ("serializeQueryArgs" in queryArgsApi.endpointDefinition) {
                    const endpointSQA = queryArgsApi.endpointDefinition.serializeQueryArgs;
                    finalSerializeQueryArgs = (queryArgsApi2)=>{
                        const initialResult = endpointSQA(queryArgsApi2);
                        if (typeof initialResult === "string") {
                            return initialResult;
                        } else {
                            return defaultSerializeQueryArgs({
                                ...queryArgsApi2,
                                queryArgs: initialResult
                            });
                        }
                    };
                } else if (options.serializeQueryArgs) {
                    finalSerializeQueryArgs = options.serializeQueryArgs;
                }
                return finalSerializeQueryArgs(queryArgsApi);
            },
            tagTypes: [
                ...options.tagTypes || []
            ]
        };
        const context = {
            endpointDefinitions: {},
            batch (fn) {
                fn();
            },
            apiUid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            extractRehydrationInfo,
            hasRehydrationInfo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weakMapMemoize"])((action)=>extractRehydrationInfo(action) != null)
        };
        const api = {
            injectEndpoints,
            enhanceEndpoints ({ addTagTypes, endpoints }) {
                if (addTagTypes) {
                    for (const eT of addTagTypes){
                        if (!optionsWithDefaults.tagTypes.includes(eT)) {
                            ;
                            optionsWithDefaults.tagTypes.push(eT);
                        }
                    }
                }
                if (endpoints) {
                    for (const [endpointName, partialDefinition] of Object.entries(endpoints)){
                        if (typeof partialDefinition === "function") {
                            partialDefinition(getEndpointDefinition(context, endpointName));
                        } else {
                            Object.assign(getEndpointDefinition(context, endpointName) || {}, partialDefinition);
                        }
                    }
                }
                return api;
            }
        };
        const initializedModules = modules.map((m)=>m.init(api, optionsWithDefaults, context));
        function injectEndpoints(inject) {
            const evaluatedEndpoints = inject.endpoints({
                query: (x)=>({
                        ...x,
                        type: ENDPOINT_QUERY
                    }),
                mutation: (x)=>({
                        ...x,
                        type: ENDPOINT_MUTATION
                    }),
                infiniteQuery: (x)=>({
                        ...x,
                        type: ENDPOINT_INFINITEQUERY
                    })
            });
            for (const [endpointName, definition] of Object.entries(evaluatedEndpoints)){
                if (inject.overrideExisting !== true && endpointName in context.endpointDefinitions) {
                    if (inject.overrideExisting === "throw") {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `called \`injectEndpoints\` to override already-existing endpointName ${endpointName} without specifying \`overrideExisting: true\``);
                    } else if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                        console.error(`called \`injectEndpoints\` to override already-existing endpointName ${endpointName} without specifying \`overrideExisting: true\``);
                    }
                    continue;
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                    if (isInfiniteQueryDefinition(definition)) {
                        const { infiniteQueryOptions } = definition;
                        const { maxPages, getPreviousPageParam: getPreviousPageParam2 } = infiniteQueryOptions;
                        if (typeof maxPages === "number") {
                            if (maxPages < 1) {
                                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `maxPages for endpoint '${endpointName}' must be a number greater than 0`);
                            }
                            if (typeof getPreviousPageParam2 !== "function") {
                                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `getPreviousPageParam for endpoint '${endpointName}' must be a function if maxPages is used`);
                            }
                        }
                    }
                }
                context.endpointDefinitions[endpointName] = definition;
                for (const m of initializedModules){
                    m.injectEndpoint(endpointName, definition);
                }
            }
            return api;
        }
        return api.injectEndpoints({
            endpoints: options.endpoints
        });
    };
}
;
var _NEVER = /* @__PURE__ */ Symbol();
function fakeBaseQuery() {
    return function() {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.");
    };
}
// src/query/tsHelpers.ts
function assertCast(v) {}
function safeAssign(target, ...args) {
    return Object.assign(target, ...args);
}
// src/query/core/buildMiddleware/batchActions.ts
var buildBatchedActionsHandler = ({ api, queryThunk, internalState, mwApi })=>{
    const subscriptionsPrefix = `${api.reducerPath}/subscriptions`;
    let previousSubscriptions = null;
    let updateSyncTimer = null;
    const { updateSubscriptionOptions, unsubscribeQueryResult } = api.internalActions;
    const actuallyMutateSubscriptions = (currentSubscriptions, action)=>{
        if (updateSubscriptionOptions.match(action)) {
            const { queryCacheKey, requestId, options } = action.payload;
            const sub = currentSubscriptions.get(queryCacheKey);
            if (sub?.has(requestId)) {
                sub.set(requestId, options);
            }
            return true;
        }
        if (unsubscribeQueryResult.match(action)) {
            const { queryCacheKey, requestId } = action.payload;
            const sub = currentSubscriptions.get(queryCacheKey);
            if (sub) {
                sub.delete(requestId);
            }
            return true;
        }
        if (api.internalActions.removeQueryResult.match(action)) {
            currentSubscriptions.delete(action.payload.queryCacheKey);
            return true;
        }
        if (queryThunk.pending.match(action)) {
            const { meta: { arg, requestId } } = action;
            const substate = getOrInsertComputed(currentSubscriptions, arg.queryCacheKey, createNewMap);
            if (arg.subscribe) {
                substate.set(requestId, arg.subscriptionOptions ?? substate.get(requestId) ?? {});
            }
            return true;
        }
        let mutated = false;
        if (queryThunk.rejected.match(action)) {
            const { meta: { condition, arg, requestId } } = action;
            if (condition && arg.subscribe) {
                const substate = getOrInsertComputed(currentSubscriptions, arg.queryCacheKey, createNewMap);
                substate.set(requestId, arg.subscriptionOptions ?? substate.get(requestId) ?? {});
                mutated = true;
            }
        }
        return mutated;
    };
    const getSubscriptions = ()=>internalState.currentSubscriptions;
    const getSubscriptionCount = (queryCacheKey)=>{
        const subscriptions = getSubscriptions();
        const subscriptionsForQueryArg = subscriptions.get(queryCacheKey);
        return subscriptionsForQueryArg?.size ?? 0;
    };
    const isRequestSubscribed = (queryCacheKey, requestId)=>{
        const subscriptions = getSubscriptions();
        return !!subscriptions?.get(queryCacheKey)?.get(requestId);
    };
    const subscriptionSelectors = {
        getSubscriptions,
        getSubscriptionCount,
        isRequestSubscribed
    };
    function serializeSubscriptions(currentSubscriptions) {
        return JSON.parse(JSON.stringify(Object.fromEntries([
            ...currentSubscriptions
        ].map(([k, v])=>[
                k,
                Object.fromEntries(v)
            ]))));
    }
    return (action, mwApi2)=>{
        if (!previousSubscriptions) {
            previousSubscriptions = serializeSubscriptions(internalState.currentSubscriptions);
        }
        if (api.util.resetApiState.match(action)) {
            previousSubscriptions = {};
            internalState.currentSubscriptions.clear();
            updateSyncTimer = null;
            return [
                true,
                false
            ];
        }
        if (api.internalActions.internal_getRTKQSubscriptions.match(action)) {
            return [
                false,
                subscriptionSelectors
            ];
        }
        const didMutate = actuallyMutateSubscriptions(internalState.currentSubscriptions, action);
        let actionShouldContinue = true;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (didMutate) {
            if (!updateSyncTimer) {
                updateSyncTimer = setTimeout(()=>{
                    const newSubscriptions = serializeSubscriptions(internalState.currentSubscriptions);
                    const [, patches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produceWithPatches"])(previousSubscriptions, ()=>newSubscriptions);
                    mwApi2.next(api.internalActions.subscriptionsUpdated(patches));
                    previousSubscriptions = newSubscriptions;
                    updateSyncTimer = null;
                }, 500);
            }
            const isSubscriptionSliceAction = typeof action.type == "string" && !!action.type.startsWith(subscriptionsPrefix);
            const isAdditionalSubscriptionAction = queryThunk.rejected.match(action) && action.meta.condition && !!action.meta.arg.subscribe;
            actionShouldContinue = !isSubscriptionSliceAction && !isAdditionalSubscriptionAction;
        }
        return [
            actionShouldContinue,
            false
        ];
    };
};
// src/query/core/buildMiddleware/cacheCollection.ts
var THIRTY_TWO_BIT_MAX_TIMER_SECONDS = 2147483647 / 1e3 - 1;
var buildCacheCollectionHandler = ({ reducerPath, api, queryThunk, context, internalState, selectors: { selectQueryEntry, selectConfig }, getRunningQueryThunk, mwApi })=>{
    const { removeQueryResult, unsubscribeQueryResult, cacheEntriesUpserted } = api.internalActions;
    const canTriggerUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])(unsubscribeQueryResult.match, queryThunk.fulfilled, queryThunk.rejected, cacheEntriesUpserted.match);
    function anySubscriptionsRemainingForKey(queryCacheKey) {
        const subscriptions = internalState.currentSubscriptions.get(queryCacheKey);
        if (!subscriptions) {
            return false;
        }
        const hasSubscriptions = subscriptions.size > 0;
        return hasSubscriptions;
    }
    const currentRemovalTimeouts = {};
    function abortAllPromises(promiseMap) {
        for (const promise of promiseMap.values()){
            promise?.abort?.();
        }
    }
    const handler = (action, mwApi2)=>{
        const state = mwApi2.getState();
        const config = selectConfig(state);
        if (canTriggerUnsubscribe(action)) {
            let queryCacheKeys;
            if (cacheEntriesUpserted.match(action)) {
                queryCacheKeys = action.payload.map((entry)=>entry.queryDescription.queryCacheKey);
            } else {
                const { queryCacheKey } = unsubscribeQueryResult.match(action) ? action.payload : action.meta.arg;
                queryCacheKeys = [
                    queryCacheKey
                ];
            }
            handleUnsubscribeMany(queryCacheKeys, mwApi2, config);
        }
        if (api.util.resetApiState.match(action)) {
            for (const [key, timeout] of Object.entries(currentRemovalTimeouts)){
                if (timeout) clearTimeout(timeout);
                delete currentRemovalTimeouts[key];
            }
            abortAllPromises(internalState.runningQueries);
            abortAllPromises(internalState.runningMutations);
        }
        if (context.hasRehydrationInfo(action)) {
            const { queries } = context.extractRehydrationInfo(action);
            handleUnsubscribeMany(Object.keys(queries), mwApi2, config);
        }
    };
    function handleUnsubscribeMany(cacheKeys, api2, config) {
        const state = api2.getState();
        for (const queryCacheKey of cacheKeys){
            const entry = selectQueryEntry(state, queryCacheKey);
            if (entry?.endpointName) {
                handleUnsubscribe(queryCacheKey, entry.endpointName, api2, config);
            }
        }
    }
    function handleUnsubscribe(queryCacheKey, endpointName, api2, config) {
        const endpointDefinition = getEndpointDefinition(context, endpointName);
        const keepUnusedDataFor = endpointDefinition?.keepUnusedDataFor ?? config.keepUnusedDataFor;
        if (keepUnusedDataFor === Infinity) {
            return;
        }
        const finalKeepUnusedDataFor = Math.max(0, Math.min(keepUnusedDataFor, THIRTY_TWO_BIT_MAX_TIMER_SECONDS));
        if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
            const currentTimeout = currentRemovalTimeouts[queryCacheKey];
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }
            currentRemovalTimeouts[queryCacheKey] = setTimeout(()=>{
                if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
                    const entry = selectQueryEntry(api2.getState(), queryCacheKey);
                    if (entry?.endpointName) {
                        const runningQuery = api2.dispatch(getRunningQueryThunk(entry.endpointName, entry.originalArgs));
                        runningQuery?.abort();
                    }
                    api2.dispatch(removeQueryResult({
                        queryCacheKey
                    }));
                }
                delete currentRemovalTimeouts[queryCacheKey];
            }, finalKeepUnusedDataFor * 1e3);
        }
    }
    return handler;
};
// src/query/core/buildMiddleware/cacheLifecycle.ts
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var buildCacheLifecycleHandler = ({ api, reducerPath, context, queryThunk, mutationThunk, internalState, selectors: { selectQueryEntry, selectApiState } })=>{
    const isQueryThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncThunkAction"])(queryThunk);
    const isMutationThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncThunkAction"])(mutationThunk);
    const isFulfilledThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk, mutationThunk);
    const lifecycleMap = {};
    const { removeQueryResult, removeMutationResult, cacheEntriesUpserted } = api.internalActions;
    function resolveLifecycleEntry(cacheKey, data, meta) {
        const lifecycle = lifecycleMap[cacheKey];
        if (lifecycle?.valueResolved) {
            lifecycle.valueResolved({
                data,
                meta
            });
            delete lifecycle.valueResolved;
        }
    }
    function removeLifecycleEntry(cacheKey) {
        const lifecycle = lifecycleMap[cacheKey];
        if (lifecycle) {
            delete lifecycleMap[cacheKey];
            lifecycle.cacheEntryRemoved();
        }
    }
    function getActionMetaFields(action) {
        const { arg, requestId } = action.meta;
        const { endpointName, originalArgs } = arg;
        return [
            endpointName,
            originalArgs,
            requestId
        ];
    }
    const handler = (action, mwApi, stateBefore)=>{
        const cacheKey = getCacheKey(action);
        function checkForNewCacheKey(endpointName, cacheKey2, requestId, originalArgs) {
            const oldEntry = selectQueryEntry(stateBefore, cacheKey2);
            const newEntry = selectQueryEntry(mwApi.getState(), cacheKey2);
            if (!oldEntry && newEntry) {
                handleNewKey(endpointName, originalArgs, cacheKey2, mwApi, requestId);
            }
        }
        if (queryThunk.pending.match(action)) {
            const [endpointName, originalArgs, requestId] = getActionMetaFields(action);
            checkForNewCacheKey(endpointName, cacheKey, requestId, originalArgs);
        } else if (cacheEntriesUpserted.match(action)) {
            for (const { queryDescription, value } of action.payload){
                const { endpointName, originalArgs, queryCacheKey } = queryDescription;
                checkForNewCacheKey(endpointName, queryCacheKey, action.meta.requestId, originalArgs);
                resolveLifecycleEntry(queryCacheKey, value, {});
            }
        } else if (mutationThunk.pending.match(action)) {
            const state = mwApi.getState()[reducerPath].mutations[cacheKey];
            if (state) {
                const [endpointName, originalArgs, requestId] = getActionMetaFields(action);
                handleNewKey(endpointName, originalArgs, cacheKey, mwApi, requestId);
            }
        } else if (isFulfilledThunk(action)) {
            resolveLifecycleEntry(cacheKey, action.payload, action.meta.baseQueryMeta);
        } else if (removeQueryResult.match(action) || removeMutationResult.match(action)) {
            removeLifecycleEntry(cacheKey);
        } else if (api.util.resetApiState.match(action)) {
            for (const cacheKey2 of Object.keys(lifecycleMap)){
                removeLifecycleEntry(cacheKey2);
            }
        }
    };
    function getCacheKey(action) {
        if (isQueryThunk(action)) return action.meta.arg.queryCacheKey;
        if (isMutationThunk(action)) {
            return action.meta.arg.fixedCacheKey ?? action.meta.requestId;
        }
        if (removeQueryResult.match(action)) return action.payload.queryCacheKey;
        if (removeMutationResult.match(action)) return getMutationCacheKey(action.payload);
        return "";
    }
    function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi, requestId) {
        const endpointDefinition = getEndpointDefinition(context, endpointName);
        const onCacheEntryAdded = endpointDefinition?.onCacheEntryAdded;
        if (!onCacheEntryAdded) return;
        const lifecycle = {};
        const cacheEntryRemoved = new Promise((resolve)=>{
            lifecycle.cacheEntryRemoved = resolve;
        });
        const cacheDataLoaded = Promise.race([
            new Promise((resolve)=>{
                lifecycle.valueResolved = resolve;
            }),
            cacheEntryRemoved.then(()=>{
                throw neverResolvedError;
            })
        ]);
        cacheDataLoaded.catch(()=>{});
        lifecycleMap[queryCacheKey] = lifecycle;
        const selector = api.endpoints[endpointName].select(isAnyQueryDefinition(endpointDefinition) ? originalArgs : queryCacheKey);
        const extra = mwApi.dispatch((_, __, extra2)=>extra2);
        const lifecycleApi = {
            ...mwApi,
            getCacheEntry: ()=>selector(mwApi.getState()),
            requestId,
            extra,
            updateCachedData: isAnyQueryDefinition(endpointDefinition) ? (updateRecipe)=>mwApi.dispatch(api.util.updateQueryData(endpointName, originalArgs, updateRecipe)) : void 0,
            cacheDataLoaded,
            cacheEntryRemoved
        };
        const runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
        Promise.resolve(runningHandler).catch((e)=>{
            if (e === neverResolvedError) return;
            throw e;
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/devMiddleware.ts
var buildDevCheckHandler = ({ api, context: { apiUid }, reducerPath })=>{
    return (action, mwApi)=>{
        if (api.util.resetApiState.match(action)) {
            mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid));
        }
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if (api.internalActions.middlewareRegistered.match(action) && action.payload === apiUid && mwApi.getState()[reducerPath]?.config?.middlewareRegistered === "conflict") {
                console.warn(`There is a mismatch between slice and middleware for the reducerPath "${reducerPath}".
You can only have one api per reducer path, this will lead to crashes in various situations!${reducerPath === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
            }
        }
    };
};
// src/query/core/buildMiddleware/invalidationByTags.ts
var buildInvalidationByTagsHandler = ({ reducerPath, context, context: { endpointDefinitions }, mutationThunk, queryThunk, api, assertTagType, refetchQuery, internalState })=>{
    const { removeQueryResult } = api.internalActions;
    const isThunkActionWithTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(mutationThunk), (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejectedWithValue"])(mutationThunk));
    const isQueryEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk, mutationThunk), (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejected"])(queryThunk, mutationThunk));
    let pendingTagInvalidations = [];
    let pendingRequestCount = 0;
    const handler = (action, mwApi)=>{
        if (queryThunk.pending.match(action) || mutationThunk.pending.match(action)) {
            pendingRequestCount++;
        }
        if (isQueryEnd(action)) {
            pendingRequestCount = Math.max(0, pendingRequestCount - 1);
        }
        if (isThunkActionWithTags(action)) {
            invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
        } else if (isQueryEnd(action)) {
            invalidateTags([], mwApi);
        } else if (api.util.invalidateTags.match(action)) {
            invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, void 0, assertTagType), mwApi);
        }
    };
    function hasPendingRequests() {
        return pendingRequestCount > 0;
    }
    function invalidateTags(newTags, mwApi) {
        const rootState = mwApi.getState();
        const state = rootState[reducerPath];
        pendingTagInvalidations.push(...newTags);
        if (state.config.invalidationBehavior === "delayed" && hasPendingRequests()) {
            return;
        }
        const tags = pendingTagInvalidations;
        pendingTagInvalidations = [];
        if (tags.length === 0) return;
        const toInvalidate = api.util.selectInvalidatedBy(rootState, tags);
        context.batch(()=>{
            const valuesArray = Array.from(toInvalidate.values());
            for (const { queryCacheKey } of valuesArray){
                const querySubState = state.queries[queryCacheKey];
                const subscriptionSubState = getOrInsertComputed(internalState.currentSubscriptions, queryCacheKey, createNewMap);
                if (querySubState) {
                    if (subscriptionSubState.size === 0) {
                        mwApi.dispatch(removeQueryResult({
                            queryCacheKey
                        }));
                    } else if (querySubState.status !== STATUS_UNINITIALIZED) {
                        mwApi.dispatch(refetchQuery(querySubState));
                    }
                }
            }
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/polling.ts
var buildPollingHandler = ({ reducerPath, queryThunk, api, refetchQuery, internalState })=>{
    const { currentPolls, currentSubscriptions } = internalState;
    const pendingPollingUpdates = /* @__PURE__ */ new Set();
    let pollingUpdateTimer = null;
    const handler = (action, mwApi)=>{
        if (api.internalActions.updateSubscriptionOptions.match(action) || api.internalActions.unsubscribeQueryResult.match(action)) {
            schedulePollingUpdate(action.payload.queryCacheKey, mwApi);
        }
        if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
            schedulePollingUpdate(action.meta.arg.queryCacheKey, mwApi);
        }
        if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
            startNextPoll(action.meta.arg, mwApi);
        }
        if (api.util.resetApiState.match(action)) {
            clearPolls();
            if (pollingUpdateTimer) {
                clearTimeout(pollingUpdateTimer);
                pollingUpdateTimer = null;
            }
            pendingPollingUpdates.clear();
        }
    };
    function schedulePollingUpdate(queryCacheKey, api2) {
        pendingPollingUpdates.add(queryCacheKey);
        if (!pollingUpdateTimer) {
            pollingUpdateTimer = setTimeout(()=>{
                for (const key of pendingPollingUpdates){
                    updatePollingInterval({
                        queryCacheKey: key
                    }, api2);
                }
                pendingPollingUpdates.clear();
                pollingUpdateTimer = null;
            }, 0);
        }
    }
    function startNextPoll({ queryCacheKey }, api2) {
        const state = api2.getState()[reducerPath];
        const querySubState = state.queries[queryCacheKey];
        const subscriptions = currentSubscriptions.get(queryCacheKey);
        if (!querySubState || querySubState.status === STATUS_UNINITIALIZED) return;
        const { lowestPollingInterval, skipPollingIfUnfocused } = findLowestPollingInterval(subscriptions);
        if (!Number.isFinite(lowestPollingInterval)) return;
        const currentPoll = currentPolls.get(queryCacheKey);
        if (currentPoll?.timeout) {
            clearTimeout(currentPoll.timeout);
            currentPoll.timeout = void 0;
        }
        const nextPollTimestamp = Date.now() + lowestPollingInterval;
        currentPolls.set(queryCacheKey, {
            nextPollTimestamp,
            pollingInterval: lowestPollingInterval,
            timeout: setTimeout(()=>{
                if (state.config.focused || !skipPollingIfUnfocused) {
                    api2.dispatch(refetchQuery(querySubState));
                }
                startNextPoll({
                    queryCacheKey
                }, api2);
            }, lowestPollingInterval)
        });
    }
    function updatePollingInterval({ queryCacheKey }, api2) {
        const state = api2.getState()[reducerPath];
        const querySubState = state.queries[queryCacheKey];
        const subscriptions = currentSubscriptions.get(queryCacheKey);
        if (!querySubState || querySubState.status === STATUS_UNINITIALIZED) {
            return;
        }
        const { lowestPollingInterval } = findLowestPollingInterval(subscriptions);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!Number.isFinite(lowestPollingInterval)) {
            cleanupPollForKey(queryCacheKey);
            return;
        }
        const currentPoll = currentPolls.get(queryCacheKey);
        const nextPollTimestamp = Date.now() + lowestPollingInterval;
        if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
            startNextPoll({
                queryCacheKey
            }, api2);
        }
    }
    function cleanupPollForKey(key) {
        const existingPoll = currentPolls.get(key);
        if (existingPoll?.timeout) {
            clearTimeout(existingPoll.timeout);
        }
        currentPolls.delete(key);
    }
    function clearPolls() {
        for (const key of currentPolls.keys()){
            cleanupPollForKey(key);
        }
    }
    function findLowestPollingInterval(subscribers = /* @__PURE__ */ new Map()) {
        let skipPollingIfUnfocused = false;
        let lowestPollingInterval = Number.POSITIVE_INFINITY;
        for (const entry of subscribers.values()){
            if (!!entry.pollingInterval) {
                lowestPollingInterval = Math.min(entry.pollingInterval, lowestPollingInterval);
                skipPollingIfUnfocused = entry.skipPollingIfUnfocused || skipPollingIfUnfocused;
            }
        }
        return {
            lowestPollingInterval,
            skipPollingIfUnfocused
        };
    }
    return handler;
};
// src/query/core/buildMiddleware/queryLifecycle.ts
var buildQueryLifecycleHandler = ({ api, context, queryThunk, mutationThunk })=>{
    const isPendingThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isPending"])(queryThunk, mutationThunk);
    const isRejectedThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejected"])(queryThunk, mutationThunk);
    const isFullfilledThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk, mutationThunk);
    const lifecycleMap = {};
    const handler = (action, mwApi)=>{
        if (isPendingThunk(action)) {
            const { requestId, arg: { endpointName, originalArgs } } = action.meta;
            const endpointDefinition = getEndpointDefinition(context, endpointName);
            const onQueryStarted = endpointDefinition?.onQueryStarted;
            if (onQueryStarted) {
                const lifecycle = {};
                const queryFulfilled = new Promise((resolve, reject)=>{
                    lifecycle.resolve = resolve;
                    lifecycle.reject = reject;
                });
                queryFulfilled.catch(()=>{});
                lifecycleMap[requestId] = lifecycle;
                const selector = api.endpoints[endpointName].select(isAnyQueryDefinition(endpointDefinition) ? originalArgs : requestId);
                const extra = mwApi.dispatch((_, __, extra2)=>extra2);
                const lifecycleApi = {
                    ...mwApi,
                    getCacheEntry: ()=>selector(mwApi.getState()),
                    requestId,
                    extra,
                    updateCachedData: isAnyQueryDefinition(endpointDefinition) ? (updateRecipe)=>mwApi.dispatch(api.util.updateQueryData(endpointName, originalArgs, updateRecipe)) : void 0,
                    queryFulfilled
                };
                onQueryStarted(originalArgs, lifecycleApi);
            }
        } else if (isFullfilledThunk(action)) {
            const { requestId, baseQueryMeta } = action.meta;
            lifecycleMap[requestId]?.resolve({
                data: action.payload,
                meta: baseQueryMeta
            });
            delete lifecycleMap[requestId];
        } else if (isRejectedThunk(action)) {
            const { requestId, rejectedWithValue, baseQueryMeta } = action.meta;
            lifecycleMap[requestId]?.reject({
                error: action.payload ?? action.error,
                isUnhandledError: !rejectedWithValue,
                meta: baseQueryMeta
            });
            delete lifecycleMap[requestId];
        }
    };
    return handler;
};
// src/query/core/buildMiddleware/windowEventHandling.ts
var buildWindowEventHandler = ({ reducerPath, context, api, refetchQuery, internalState })=>{
    const { removeQueryResult } = api.internalActions;
    const handler = (action, mwApi)=>{
        if (onFocus.match(action)) {
            refetchValidQueries(mwApi, "refetchOnFocus");
        }
        if (onOnline.match(action)) {
            refetchValidQueries(mwApi, "refetchOnReconnect");
        }
    };
    function refetchValidQueries(api2, type) {
        const state = api2.getState()[reducerPath];
        const queries = state.queries;
        const subscriptions = internalState.currentSubscriptions;
        context.batch(()=>{
            for (const queryCacheKey of subscriptions.keys()){
                const querySubState = queries[queryCacheKey];
                const subscriptionSubState = subscriptions.get(queryCacheKey);
                if (!subscriptionSubState || !querySubState) continue;
                const values = [
                    ...subscriptionSubState.values()
                ];
                const shouldRefetch = values.some((sub)=>sub[type] === true) || values.every((sub)=>sub[type] === void 0) && state.config[type];
                if (shouldRefetch) {
                    if (subscriptionSubState.size === 0) {
                        api2.dispatch(removeQueryResult({
                            queryCacheKey
                        }));
                    } else if (querySubState.status !== STATUS_UNINITIALIZED) {
                        api2.dispatch(refetchQuery(querySubState));
                    }
                }
            }
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/index.ts
function buildMiddleware(input) {
    const { reducerPath, queryThunk, api, context, getInternalState } = input;
    const { apiUid } = context;
    const actions2 = {
        invalidateTags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${reducerPath}/invalidateTags`)
    };
    const isThisApiSliceAction = (action)=>action.type.startsWith(`${reducerPath}/`);
    const handlerBuilders = [
        buildDevCheckHandler,
        buildCacheCollectionHandler,
        buildInvalidationByTagsHandler,
        buildPollingHandler,
        buildCacheLifecycleHandler,
        buildQueryLifecycleHandler
    ];
    const middleware = (mwApi)=>{
        let initialized2 = false;
        const internalState = getInternalState(mwApi.dispatch);
        const builderArgs = {
            ...input,
            internalState,
            refetchQuery,
            isThisApiSliceAction,
            mwApi
        };
        const handlers = handlerBuilders.map((build)=>build(builderArgs));
        const batchedActionsHandler = buildBatchedActionsHandler(builderArgs);
        const windowEventsHandler = buildWindowEventHandler(builderArgs);
        return (next)=>{
            return (action)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                    return next(action);
                }
                if (!initialized2) {
                    initialized2 = true;
                    mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid));
                }
                const mwApiWithNext = {
                    ...mwApi,
                    next
                };
                const stateBefore = mwApi.getState();
                const [actionShouldContinue, internalProbeResult] = batchedActionsHandler(action, mwApiWithNext, stateBefore);
                let res;
                if (actionShouldContinue) {
                    res = next(action);
                } else {
                    res = internalProbeResult;
                }
                if (!!mwApi.getState()[reducerPath]) {
                    windowEventsHandler(action, mwApiWithNext, stateBefore);
                    if (isThisApiSliceAction(action) || context.hasRehydrationInfo(action)) {
                        for (const handler of handlers){
                            handler(action, mwApiWithNext, stateBefore);
                        }
                    }
                }
                return res;
            };
        };
    };
    return {
        middleware,
        actions: actions2
    };
    //TURBOPACK unreachable
    ;
    function refetchQuery(querySubState) {
        return input.api.endpoints[querySubState.endpointName].initiate(querySubState.originalArgs, {
            subscribe: false,
            forceRefetch: true
        });
    }
}
// src/query/core/module.ts
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = ({ createSelector: createSelector2 = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"] } = {})=>({
        name: coreModuleName,
        init (api, { baseQuery, tagTypes, reducerPath, serializeQueryArgs, keepUnusedDataFor, refetchOnMountOrArgChange, refetchOnFocus, refetchOnReconnect, invalidationBehavior, onSchemaFailure, catchSchemaFailure, skipSchemaValidation }, context) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enablePatches"])();
            assertCast(serializeQueryArgs);
            const assertTagType = (tag)=>{
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                    if (!tagTypes.includes(tag.type)) {
                        console.error(`Tag type '${tag.type}' was used, but not specified in \`tagTypes\`!`);
                    }
                }
                return tag;
            };
            Object.assign(api, {
                reducerPath,
                endpoints: {},
                internalActions: {
                    onOnline,
                    onOffline,
                    onFocus,
                    onFocusLost
                },
                util: {}
            });
            const selectors = buildSelectors({
                serializeQueryArgs,
                reducerPath,
                createSelector: createSelector2
            });
            const { selectInvalidatedBy, selectCachedArgsForQuery, buildQuerySelector, buildInfiniteQuerySelector, buildMutationSelector } = selectors;
            safeAssign(api.util, {
                selectInvalidatedBy,
                selectCachedArgsForQuery
            });
            const { queryThunk, infiniteQueryThunk, mutationThunk, patchQueryData, updateQueryData, upsertQueryData, prefetch, buildMatchThunkActions } = buildThunks({
                baseQuery,
                reducerPath,
                context,
                api,
                serializeQueryArgs,
                assertTagType,
                selectors,
                onSchemaFailure,
                catchSchemaFailure,
                skipSchemaValidation
            });
            const { reducer, actions: sliceActions } = buildSlice({
                context,
                queryThunk,
                infiniteQueryThunk,
                mutationThunk,
                serializeQueryArgs,
                reducerPath,
                assertTagType,
                config: {
                    refetchOnFocus,
                    refetchOnReconnect,
                    refetchOnMountOrArgChange,
                    keepUnusedDataFor,
                    reducerPath,
                    invalidationBehavior
                }
            });
            safeAssign(api.util, {
                patchQueryData,
                updateQueryData,
                upsertQueryData,
                prefetch,
                resetApiState: sliceActions.resetApiState,
                upsertQueryEntries: sliceActions.cacheEntriesUpserted
            });
            safeAssign(api.internalActions, sliceActions);
            const internalStateMap = /* @__PURE__ */ new WeakMap();
            const getInternalState = (dispatch)=>{
                const state = getOrInsertComputed(internalStateMap, dispatch, ()=>({
                        currentSubscriptions: /* @__PURE__ */ new Map(),
                        currentPolls: /* @__PURE__ */ new Map(),
                        runningQueries: /* @__PURE__ */ new Map(),
                        runningMutations: /* @__PURE__ */ new Map()
                    }));
                return state;
            };
            const { buildInitiateQuery, buildInitiateInfiniteQuery, buildInitiateMutation, getRunningMutationThunk, getRunningMutationsThunk, getRunningQueriesThunk, getRunningQueryThunk } = buildInitiate({
                queryThunk,
                mutationThunk,
                infiniteQueryThunk,
                api,
                serializeQueryArgs,
                context,
                getInternalState
            });
            safeAssign(api.util, {
                getRunningMutationThunk,
                getRunningMutationsThunk,
                getRunningQueryThunk,
                getRunningQueriesThunk
            });
            const { middleware, actions: middlewareActions } = buildMiddleware({
                reducerPath,
                context,
                queryThunk,
                mutationThunk,
                infiniteQueryThunk,
                api,
                assertTagType,
                selectors,
                getRunningQueryThunk,
                getInternalState
            });
            safeAssign(api.util, middlewareActions);
            safeAssign(api, {
                reducer,
                middleware
            });
            return {
                name: coreModuleName,
                injectEndpoint (endpointName, definition) {
                    const anyApi = api;
                    const endpoint = anyApi.endpoints[endpointName] ??= {};
                    if (isQueryDefinition(definition)) {
                        safeAssign(endpoint, {
                            name: endpointName,
                            select: buildQuerySelector(endpointName, definition),
                            initiate: buildInitiateQuery(endpointName, definition)
                        }, buildMatchThunkActions(queryThunk, endpointName));
                    }
                    if (isMutationDefinition(definition)) {
                        safeAssign(endpoint, {
                            name: endpointName,
                            select: buildMutationSelector(),
                            initiate: buildInitiateMutation(endpointName)
                        }, buildMatchThunkActions(mutationThunk, endpointName));
                    }
                    if (isInfiniteQueryDefinition(definition)) {
                        safeAssign(endpoint, {
                            name: endpointName,
                            select: buildInfiniteQuerySelector(endpointName, definition),
                            initiate: buildInitiateInfiniteQuery(endpointName, definition)
                        }, buildMatchThunkActions(queryThunk, endpointName));
                    }
                }
            };
        }
    });
// src/query/core/index.ts
var createApi = /* @__PURE__ */ buildCreateApi(coreModule());
;
 //# sourceMappingURL=rtk-query.modern.mjs.map
}),
"[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiProvider",
    ()=>ApiProvider,
    "UNINITIALIZED_VALUE",
    ()=>UNINITIALIZED_VALUE,
    "createApi",
    ()=>createApi,
    "reactHooksModule",
    ()=>reactHooksModule,
    "reactHooksModuleName",
    ()=>reactHooksModuleName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/query/react/rtkqImports.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
// src/query/react/reactImports.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/query/react/ApiProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
// src/query/utils/capitalize.ts
function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
}
// src/query/utils/countObjectKeys.ts
function countObjectKeys(obj) {
    let count = 0;
    for(const _key in obj){
        count++;
    }
    return count;
}
// src/query/endpointDefinitions.ts
var ENDPOINT_QUERY = "query" /* query */ ;
var ENDPOINT_MUTATION = "mutation" /* mutation */ ;
var ENDPOINT_INFINITEQUERY = "infinitequery" /* infinitequery */ ;
function isQueryDefinition(e) {
    return e.type === ENDPOINT_QUERY;
}
function isMutationDefinition(e) {
    return e.type === ENDPOINT_MUTATION;
}
function isInfiniteQueryDefinition(e) {
    return e.type === ENDPOINT_INFINITEQUERY;
}
// src/query/tsHelpers.ts
function safeAssign(target, ...args) {
    return Object.assign(target, ...args);
}
;
;
;
// src/query/react/constants.ts
var UNINITIALIZED_VALUE = Symbol();
// src/query/react/useSerializedStableValue.ts
function useStableQueryArgs(queryArgs) {
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(queryArgs);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStableQueryArgs.useMemo[copy]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyWithStructuralSharing"])(cache.current, queryArgs)
    }["useStableQueryArgs.useMemo[copy]"], [
        queryArgs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStableQueryArgs.useEffect": ()=>{
            if (cache.current !== copy) {
                cache.current = copy;
            }
        }
    }["useStableQueryArgs.useEffect"], [
        copy
    ]);
    return copy;
}
// src/query/react/useShallowStableValue.ts
function useShallowStableValue(value) {
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useShallowStableValue.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(cache.current, value)) {
                cache.current = value;
            }
        }
    }["useShallowStableValue.useEffect"], [
        value
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(cache.current, value) ? cache.current : value;
}
// src/query/react/buildHooks.ts
var canUseDOM = ()=>!!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = ()=>typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = ()=>isDOM || isReactNative ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
var noPendingQueryStateSelector = (selected)=>{
    if (selected.isUninitialized) {
        return {
            ...selected,
            isUninitialized: false,
            isFetching: true,
            isLoading: selected.data !== void 0 ? false : true,
            // This is the one place where we still have to use `QueryStatus` as an enum,
            // since it's the only reference in the React package and not in the core.
            status: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryStatus"].pending
        };
    }
    return selected;
};
function pick(obj, ...keys) {
    const ret = {};
    keys.forEach((key)=>{
        ret[key] = obj[key];
    });
    return ret;
}
var COMMON_HOOK_DEBUG_FIELDS = [
    "data",
    "status",
    "isLoading",
    "isSuccess",
    "isError",
    "error"
];
function buildHooks({ api, moduleOptions: { batch, hooks: { useDispatch, useSelector, useStore }, unstable__sideEffectsInRender, createSelector }, serializeQueryArgs, context }) {
    const usePossiblyImmediateEffect = unstable__sideEffectsInRender ? (cb)=>cb() : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
    const unsubscribePromiseRef = (ref)=>ref.current?.unsubscribe?.();
    const endpointDefinitions = context.endpointDefinitions;
    return {
        buildQueryHooks,
        buildInfiniteQueryHooks,
        buildMutationHook,
        usePrefetch
    };
    //TURBOPACK unreachable
    ;
    function queryStatePreSelector(currentState, lastResult, queryArgs) {
        if (lastResult?.endpointName && currentState.isUninitialized) {
            const { endpointName } = lastResult;
            const endpointDefinition = endpointDefinitions[endpointName];
            if (queryArgs !== __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] && serializeQueryArgs({
                queryArgs: lastResult.originalArgs,
                endpointDefinition,
                endpointName
            }) === serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            })) lastResult = void 0;
        }
        let data = currentState.isSuccess ? currentState.data : lastResult?.data;
        if (data === void 0) data = currentState.data;
        const hasData = data !== void 0;
        const isFetching = currentState.isLoading;
        const isLoading = (!lastResult || lastResult.isLoading || lastResult.isUninitialized) && !hasData && isFetching;
        const isSuccess = currentState.isSuccess || hasData && (isFetching && !lastResult?.isError || currentState.isUninitialized);
        return {
            ...currentState,
            data,
            currentData: currentState.data,
            isFetching,
            isLoading,
            isSuccess
        };
    }
    function infiniteQueryStatePreSelector(currentState, lastResult, queryArgs) {
        if (lastResult?.endpointName && currentState.isUninitialized) {
            const { endpointName } = lastResult;
            const endpointDefinition = endpointDefinitions[endpointName];
            if (queryArgs !== __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] && serializeQueryArgs({
                queryArgs: lastResult.originalArgs,
                endpointDefinition,
                endpointName
            }) === serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            })) lastResult = void 0;
        }
        let data = currentState.isSuccess ? currentState.data : lastResult?.data;
        if (data === void 0) data = currentState.data;
        const hasData = data !== void 0;
        const isFetching = currentState.isLoading;
        const isLoading = (!lastResult || lastResult.isLoading || lastResult.isUninitialized) && !hasData && isFetching;
        const isSuccess = currentState.isSuccess || isFetching && hasData;
        return {
            ...currentState,
            data,
            currentData: currentState.data,
            isFetching,
            isLoading,
            isSuccess
        };
    }
    function usePrefetch(endpointName, defaultOptions) {
        const dispatch = useDispatch();
        const stableDefaultOptions = useShallowStableValue(defaultOptions);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "buildHooks.usePrefetch.useCallback": (arg, options)=>dispatch(api.util.prefetch(endpointName, arg, {
                    ...stableDefaultOptions,
                    ...options
                }))
        }["buildHooks.usePrefetch.useCallback"], [
            endpointName,
            dispatch,
            stableDefaultOptions
        ]);
    }
    function useQuerySubscriptionCommonImpl(endpointName, arg, { refetchOnReconnect, refetchOnFocus, refetchOnMountOrArgChange, skip = false, pollingInterval = 0, skipPollingIfUnfocused = false, ...rest } = {}) {
        const { initiate } = api.endpoints[endpointName];
        const dispatch = useDispatch();
        const subscriptionSelectorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
        if (!subscriptionSelectorsRef.current) {
            const returnedValue = dispatch(api.internalActions.internal_getRTKQSubscriptions());
            if ("TURBOPACK compile-time truthy", 1) {
                if (typeof returnedValue !== "object" || typeof returnedValue?.type === "string") {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Warning: Middleware for RTK-Query API at reducerPath "${api.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
                }
            }
            subscriptionSelectorsRef.current = returnedValue;
        }
        const stableArg = useStableQueryArgs(skip ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] : arg);
        const stableSubscriptionOptions = useShallowStableValue({
            refetchOnReconnect,
            refetchOnFocus,
            pollingInterval,
            skipPollingIfUnfocused
        });
        const initialPageParam = rest.initialPageParam;
        const stableInitialPageParam = useShallowStableValue(initialPageParam);
        const refetchCachedPages = rest.refetchCachedPages;
        const stableRefetchCachedPages = useShallowStableValue(refetchCachedPages);
        const promiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
        let { queryCacheKey, requestId } = promiseRef.current || {};
        let currentRenderHasSubscription = false;
        if (queryCacheKey && requestId) {
            currentRenderHasSubscription = subscriptionSelectorsRef.current.isRequestSubscribed(queryCacheKey, requestId);
        }
        const subscriptionRemoved = !currentRenderHasSubscription && promiseRef.current !== void 0;
        usePossiblyImmediateEffect({
            "buildHooks.useQuerySubscriptionCommonImpl.usePossiblyImmediateEffect": ()=>{
                if (subscriptionRemoved) {
                    promiseRef.current = void 0;
                }
            }
        }["buildHooks.useQuerySubscriptionCommonImpl.usePossiblyImmediateEffect"], [
            subscriptionRemoved
        ]);
        usePossiblyImmediateEffect({
            "buildHooks.useQuerySubscriptionCommonImpl.usePossiblyImmediateEffect": ()=>{
                const lastPromise = promiseRef.current;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (stableArg === __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"]) {
                    lastPromise?.unsubscribe();
                    promiseRef.current = void 0;
                    return;
                }
                const lastSubscriptionOptions = promiseRef.current?.subscriptionOptions;
                if (!lastPromise || lastPromise.arg !== stableArg) {
                    lastPromise?.unsubscribe();
                    const promise = dispatch(initiate(stableArg, {
                        subscriptionOptions: stableSubscriptionOptions,
                        forceRefetch: refetchOnMountOrArgChange,
                        ...isInfiniteQueryDefinition(endpointDefinitions[endpointName]) ? {
                            initialPageParam: stableInitialPageParam,
                            refetchCachedPages: stableRefetchCachedPages
                        } : {}
                    }));
                    promiseRef.current = promise;
                } else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }
        }["buildHooks.useQuerySubscriptionCommonImpl.usePossiblyImmediateEffect"], [
            dispatch,
            initiate,
            refetchOnMountOrArgChange,
            stableArg,
            stableSubscriptionOptions,
            subscriptionRemoved,
            stableInitialPageParam,
            stableRefetchCachedPages,
            endpointName
        ]);
        return [
            promiseRef,
            dispatch,
            initiate,
            stableSubscriptionOptions
        ];
    }
    function buildUseQueryState(endpointName, preSelector) {
        const useQueryState = (arg, { skip = false, selectFromResult } = {})=>{
            const { select } = api.endpoints[endpointName];
            const stableArg = useStableQueryArgs(skip ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] : arg);
            const lastValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
            const selectDefaultResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildUseQueryState.useQueryState.useMemo[selectDefaultResult]": ()=>// Normally ts-ignores are bad and should be avoided, but we're
                    // already casting this selector to be `Selector<any>` anyway,
                    // so the inconsistencies don't matter here
                    // @ts-ignore
                    createSelector([
                        // @ts-ignore
                        select(stableArg),
                        {
                            "buildHooks.buildUseQueryState.useQueryState.useMemo[selectDefaultResult]": (_, lastResult)=>lastResult
                        }["buildHooks.buildUseQueryState.useQueryState.useMemo[selectDefaultResult]"],
                        {
                            "buildHooks.buildUseQueryState.useQueryState.useMemo[selectDefaultResult]": (_)=>stableArg
                        }["buildHooks.buildUseQueryState.useQueryState.useMemo[selectDefaultResult]"]
                    ], preSelector, {
                        memoizeOptions: {
                            resultEqualityCheck: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"]
                        }
                    })
            }["buildHooks.buildUseQueryState.useQueryState.useMemo[selectDefaultResult]"], [
                select,
                stableArg
            ]);
            const querySelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildUseQueryState.useQueryState.useMemo[querySelector]": ()=>selectFromResult ? createSelector([
                        selectDefaultResult
                    ], selectFromResult, {
                        devModeChecks: {
                            identityFunctionCheck: "never"
                        }
                    }) : selectDefaultResult
            }["buildHooks.buildUseQueryState.useQueryState.useMemo[querySelector]"], [
                selectDefaultResult,
                selectFromResult
            ]);
            const currentState = useSelector({
                "buildHooks.buildUseQueryState.useQueryState.useSelector[currentState]": (state)=>querySelector(state, lastValue.current)
            }["buildHooks.buildUseQueryState.useQueryState.useSelector[currentState]"], __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"]);
            const store = useStore();
            const newLastValue = selectDefaultResult(store.getState(), lastValue.current);
            useIsomorphicLayoutEffect({
                "buildHooks.buildUseQueryState.useQueryState.useIsomorphicLayoutEffect": ()=>{
                    lastValue.current = newLastValue;
                }
            }["buildHooks.buildUseQueryState.useQueryState.useIsomorphicLayoutEffect"], [
                newLastValue
            ]);
            return currentState;
        };
        return useQueryState;
    }
    function usePromiseRefUnsubscribeOnUnmount(promiseRef) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "buildHooks.usePromiseRefUnsubscribeOnUnmount.useEffect": ()=>{
                return ({
                    "buildHooks.usePromiseRefUnsubscribeOnUnmount.useEffect": ()=>{
                        unsubscribePromiseRef(promiseRef);
                        promiseRef.current = void 0;
                    }
                })["buildHooks.usePromiseRefUnsubscribeOnUnmount.useEffect"];
            }
        }["buildHooks.usePromiseRefUnsubscribeOnUnmount.useEffect"], [
            promiseRef
        ]);
    }
    function refetchOrErrorIfUnmounted(promiseRef) {
        if (!promiseRef.current) throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Cannot refetch a query that has not been started yet.");
        return promiseRef.current.refetch();
    }
    function buildQueryHooks(endpointName) {
        const useQuerySubscription = (arg, options = {})=>{
            const [promiseRef] = useQuerySubscriptionCommonImpl(endpointName, arg, options);
            usePromiseRefUnsubscribeOnUnmount(promiseRef);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildQueryHooks.useQuerySubscription.useMemo": ()=>({
                        /**
         * A method to manually refetch data for the query
         */ refetch: ({
                            "buildHooks.buildQueryHooks.useQuerySubscription.useMemo": ()=>refetchOrErrorIfUnmounted(promiseRef)
                        })["buildHooks.buildQueryHooks.useQuerySubscription.useMemo"]
                    })
            }["buildHooks.buildQueryHooks.useQuerySubscription.useMemo"], [
                promiseRef
            ]);
        };
        const useLazyQuerySubscription = ({ refetchOnReconnect, refetchOnFocus, pollingInterval = 0, skipPollingIfUnfocused = false } = {})=>{
            const { initiate } = api.endpoints[endpointName];
            const dispatch = useDispatch();
            const [arg, setArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(UNINITIALIZED_VALUE);
            const promiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
            const stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect,
                refetchOnFocus,
                pollingInterval,
                skipPollingIfUnfocused
            });
            usePossiblyImmediateEffect({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.usePossiblyImmediateEffect": ()=>{
                    const lastSubscriptionOptions = promiseRef.current?.subscriptionOptions;
                    if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                        promiseRef.current?.updateSubscriptionOptions(stableSubscriptionOptions);
                    }
                }
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.usePossiblyImmediateEffect"], [
                stableSubscriptionOptions
            ]);
            const subscriptionOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(stableSubscriptionOptions);
            usePossiblyImmediateEffect({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.usePossiblyImmediateEffect": ()=>{
                    subscriptionOptionsRef.current = stableSubscriptionOptions;
                }
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.usePossiblyImmediateEffect"], [
                stableSubscriptionOptions
            ]);
            const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.useCallback[trigger]": function(arg2, preferCacheValue = false) {
                    let promise;
                    batch({
                        "buildHooks.buildQueryHooks.useLazyQuerySubscription.useCallback[trigger]": ()=>{
                            unsubscribePromiseRef(promiseRef);
                            promiseRef.current = promise = dispatch(initiate(arg2, {
                                subscriptionOptions: subscriptionOptionsRef.current,
                                forceRefetch: !preferCacheValue
                            }));
                            setArg(arg2);
                        }
                    }["buildHooks.buildQueryHooks.useLazyQuerySubscription.useCallback[trigger]"]);
                    return promise;
                }
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.useCallback[trigger]"], [
                dispatch,
                initiate
            ]);
            const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.useCallback[reset]": ()=>{
                    if (promiseRef.current?.queryCacheKey) {
                        dispatch(api.internalActions.removeQueryResult({
                            queryCacheKey: promiseRef.current?.queryCacheKey
                        }));
                    }
                }
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.useCallback[reset]"], [
                dispatch
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.useEffect": ()=>{
                    return ({
                        "buildHooks.buildQueryHooks.useLazyQuerySubscription.useEffect": ()=>{
                            unsubscribePromiseRef(promiseRef);
                        }
                    })["buildHooks.buildQueryHooks.useLazyQuerySubscription.useEffect"];
                }
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.useEffect"], []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.useEffect": ()=>{
                    if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
                        trigger(arg, true);
                    }
                }
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.useEffect"], [
                arg,
                trigger
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildQueryHooks.useLazyQuerySubscription.useMemo": ()=>[
                        trigger,
                        arg,
                        {
                            reset
                        }
                    ]
            }["buildHooks.buildQueryHooks.useLazyQuerySubscription.useMemo"], [
                trigger,
                arg,
                reset
            ]);
        };
        const useQueryState = buildUseQueryState(endpointName, queryStatePreSelector);
        return {
            useQueryState,
            useQuerySubscription,
            useLazyQuerySubscription,
            useLazyQuery (options) {
                const [trigger, arg, { reset }] = useLazyQuerySubscription(options);
                const queryStateResults = useQueryState(arg, {
                    ...options,
                    skip: arg === UNINITIALIZED_VALUE
                });
                const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                    "buildHooks.buildQueryHooks.useMemo[info]": ()=>({
                            lastArg: arg
                        })
                }["buildHooks.buildQueryHooks.useMemo[info]"], [
                    arg
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                    "buildHooks.buildQueryHooks.useMemo": ()=>[
                            trigger,
                            {
                                ...queryStateResults,
                                reset
                            },
                            info
                        ]
                }["buildHooks.buildQueryHooks.useMemo"], [
                    trigger,
                    queryStateResults,
                    reset,
                    info
                ]);
            },
            useQuery (arg, options) {
                const querySubscriptionResults = useQuerySubscription(arg, options);
                const queryStateResults = useQueryState(arg, {
                    selectFromResult: arg === __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] || options?.skip ? void 0 : noPendingQueryStateSelector,
                    ...options
                });
                const debugValue = pick(queryStateResults, ...COMMON_HOOK_DEBUG_FIELDS);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(debugValue);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                    "buildHooks.buildQueryHooks.useMemo": ()=>({
                            ...queryStateResults,
                            ...querySubscriptionResults
                        })
                }["buildHooks.buildQueryHooks.useMemo"], [
                    queryStateResults,
                    querySubscriptionResults
                ]);
            }
        };
    }
    function buildInfiniteQueryHooks(endpointName) {
        const useInfiniteQuerySubscription = (arg, options = {})=>{
            const [promiseRef, dispatch, initiate, stableSubscriptionOptions] = useQuerySubscriptionCommonImpl(endpointName, arg, options);
            const subscriptionOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(stableSubscriptionOptions);
            usePossiblyImmediateEffect({
                "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.usePossiblyImmediateEffect": ()=>{
                    subscriptionOptionsRef.current = stableSubscriptionOptions;
                }
            }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.usePossiblyImmediateEffect"], [
                stableSubscriptionOptions
            ]);
            const hookRefetchCachedPages = options.refetchCachedPages;
            const stableHookRefetchCachedPages = useShallowStableValue(hookRefetchCachedPages);
            const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useCallback[trigger]": function(arg2, direction) {
                    let promise;
                    batch({
                        "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useCallback[trigger]": ()=>{
                            unsubscribePromiseRef(promiseRef);
                            promiseRef.current = promise = dispatch(initiate(arg2, {
                                subscriptionOptions: subscriptionOptionsRef.current,
                                direction
                            }));
                        }
                    }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useCallback[trigger]"]);
                    return promise;
                }
            }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useCallback[trigger]"], [
                promiseRef,
                dispatch,
                initiate
            ]);
            usePromiseRefUnsubscribeOnUnmount(promiseRef);
            const stableArg = useStableQueryArgs(options.skip ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] : arg);
            const refetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useCallback[refetch]": (options2)=>{
                    if (!promiseRef.current) throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Cannot refetch a query that has not been started yet.");
                    const mergedOptions = {
                        refetchCachedPages: options2?.refetchCachedPages ?? stableHookRefetchCachedPages
                    };
                    return promiseRef.current.refetch(mergedOptions);
                }
            }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useCallback[refetch]"], [
                promiseRef,
                stableHookRefetchCachedPages
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useMemo": ()=>{
                    const fetchNextPage = {
                        "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useMemo.fetchNextPage": ()=>{
                            return trigger(stableArg, "forward");
                        }
                    }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useMemo.fetchNextPage"];
                    const fetchPreviousPage = {
                        "buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useMemo.fetchPreviousPage": ()=>{
                            return trigger(stableArg, "backward");
                        }
                    }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useMemo.fetchPreviousPage"];
                    return {
                        trigger,
                        /**
           * A method to manually refetch data for the query
           */ refetch,
                        fetchNextPage,
                        fetchPreviousPage
                    };
                }
            }["buildHooks.buildInfiniteQueryHooks.useInfiniteQuerySubscription.useMemo"], [
                refetch,
                trigger,
                stableArg
            ]);
        };
        const useInfiniteQueryState = buildUseQueryState(endpointName, infiniteQueryStatePreSelector);
        return {
            useInfiniteQueryState,
            useInfiniteQuerySubscription,
            useInfiniteQuery (arg, options) {
                const { refetch, fetchNextPage, fetchPreviousPage } = useInfiniteQuerySubscription(arg, options);
                const queryStateResults = useInfiniteQueryState(arg, {
                    selectFromResult: arg === __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] || options?.skip ? void 0 : noPendingQueryStateSelector,
                    ...options
                });
                const debugValue = pick(queryStateResults, ...COMMON_HOOK_DEBUG_FIELDS, "hasNextPage", "hasPreviousPage");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(debugValue);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                    "buildHooks.buildInfiniteQueryHooks.useMemo": ()=>({
                            ...queryStateResults,
                            fetchNextPage,
                            fetchPreviousPage,
                            refetch
                        })
                }["buildHooks.buildInfiniteQueryHooks.useMemo"], [
                    queryStateResults,
                    fetchNextPage,
                    fetchPreviousPage,
                    refetch
                ]);
            }
        };
    }
    function buildMutationHook(name) {
        return ({ selectFromResult, fixedCacheKey } = {})=>{
            const { select, initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const [promise, setPromise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "buildHooks.buildMutationHook.useEffect": ()=>({
                        "buildHooks.buildMutationHook.useEffect": ()=>{
                            if (!promise?.arg.fixedCacheKey) {
                                promise?.reset();
                            }
                        }
                    })["buildHooks.buildMutationHook.useEffect"]
            }["buildHooks.buildMutationHook.useEffect"], [
                promise
            ]);
            const triggerMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "buildHooks.buildMutationHook.useCallback[triggerMutation]": function(arg) {
                    const promise2 = dispatch(initiate(arg, {
                        fixedCacheKey
                    }));
                    setPromise(promise2);
                    return promise2;
                }
            }["buildHooks.buildMutationHook.useCallback[triggerMutation]"], [
                dispatch,
                initiate,
                fixedCacheKey
            ]);
            const { requestId } = promise || {};
            const selectDefaultResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildMutationHook.useMemo[selectDefaultResult]": ()=>select({
                        fixedCacheKey,
                        requestId: promise?.requestId
                    })
            }["buildHooks.buildMutationHook.useMemo[selectDefaultResult]"], [
                fixedCacheKey,
                promise,
                select
            ]);
            const mutationSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildMutationHook.useMemo[mutationSelector]": ()=>selectFromResult ? createSelector([
                        selectDefaultResult
                    ], selectFromResult) : selectDefaultResult
            }["buildHooks.buildMutationHook.useMemo[mutationSelector]"], [
                selectFromResult,
                selectDefaultResult
            ]);
            const currentState = useSelector(mutationSelector, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"]);
            const originalArgs = fixedCacheKey == null ? promise?.arg.originalArgs : void 0;
            const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "buildHooks.buildMutationHook.useCallback[reset]": ()=>{
                    batch({
                        "buildHooks.buildMutationHook.useCallback[reset]": ()=>{
                            if (promise) {
                                setPromise(void 0);
                            }
                            if (fixedCacheKey) {
                                dispatch(api.internalActions.removeMutationResult({
                                    requestId,
                                    fixedCacheKey
                                }));
                            }
                        }
                    }["buildHooks.buildMutationHook.useCallback[reset]"]);
                }
            }["buildHooks.buildMutationHook.useCallback[reset]"], [
                dispatch,
                fixedCacheKey,
                promise,
                requestId
            ]);
            const debugValue = pick(currentState, ...COMMON_HOOK_DEBUG_FIELDS, "endpointName");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(debugValue);
            const finalState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildMutationHook.useMemo[finalState]": ()=>({
                        ...currentState,
                        originalArgs,
                        reset
                    })
            }["buildHooks.buildMutationHook.useMemo[finalState]"], [
                currentState,
                originalArgs,
                reset
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "buildHooks.buildMutationHook.useMemo": ()=>[
                        triggerMutation,
                        finalState
                    ]
            }["buildHooks.buildMutationHook.useMemo"], [
                triggerMutation,
                finalState
            ]);
        };
    }
}
// src/query/react/module.ts
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = ({ batch = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"], hooks = {
    useDispatch: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
    useSelector: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
    useStore: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
}, createSelector = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"], unstable__sideEffectsInRender = false, ...rest } = {})=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const hookNames = [
            "useDispatch",
            "useSelector",
            "useStore"
        ];
        let warned = false;
        for (const hookName of hookNames){
            if (countObjectKeys(rest) > 0) {
                if (rest[hookName]) {
                    if (!warned) {
                        console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`");
                        warned = true;
                    }
                }
                hooks[hookName] = rest[hookName];
            }
            if (typeof hooks[hookName] !== "function") {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `When using custom hooks for context, all ${hookNames.length} hooks need to be provided: ${hookNames.join(", ")}.
Hook ${hookName} was either not provided or not a function.`);
            }
        }
    }
    return {
        name: reactHooksModuleName,
        init (api, { serializeQueryArgs }, context) {
            const anyApi = api;
            const { buildQueryHooks, buildInfiniteQueryHooks, buildMutationHook, usePrefetch } = buildHooks({
                api,
                moduleOptions: {
                    batch,
                    hooks,
                    unstable__sideEffectsInRender,
                    createSelector
                },
                serializeQueryArgs,
                context
            });
            safeAssign(anyApi, {
                usePrefetch
            });
            safeAssign(context, {
                batch
            });
            return {
                injectEndpoint (endpointName, definition) {
                    if (isQueryDefinition(definition)) {
                        const { useQuery, useLazyQuery, useLazyQuerySubscription, useQueryState, useQuerySubscription } = buildQueryHooks(endpointName);
                        safeAssign(anyApi.endpoints[endpointName], {
                            useQuery,
                            useLazyQuery,
                            useLazyQuerySubscription,
                            useQueryState,
                            useQuerySubscription
                        });
                        api[`use${capitalize(endpointName)}Query`] = useQuery;
                        api[`useLazy${capitalize(endpointName)}Query`] = useLazyQuery;
                    }
                    if (isMutationDefinition(definition)) {
                        const useMutation = buildMutationHook(endpointName);
                        safeAssign(anyApi.endpoints[endpointName], {
                            useMutation
                        });
                        api[`use${capitalize(endpointName)}Mutation`] = useMutation;
                    } else if (isInfiniteQueryDefinition(definition)) {
                        const { useInfiniteQuery, useInfiniteQuerySubscription, useInfiniteQueryState } = buildInfiniteQueryHooks(endpointName);
                        safeAssign(anyApi.endpoints[endpointName], {
                            useInfiniteQuery,
                            useInfiniteQuerySubscription,
                            useInfiniteQueryState
                        });
                        api[`use${capitalize(endpointName)}InfiniteQuery`] = useInfiniteQuery;
                    }
                }
            };
        }
    };
};
;
;
;
function ApiProvider(props) {
    const context = props.context || __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactReduxContext"];
    const existingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context);
    if (existingContext) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Existing Redux context detected. If you already have a store set up, please use the traditional Redux setup.");
    }
    const [store] = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "ApiProvider.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
                reducer: {
                    [props.api.reducerPath]: props.api.reducer
                },
                middleware: {
                    "ApiProvider.useState": (gDM)=>gDM().concat(props.api.middleware)
                }["ApiProvider.useState"]
            })
    }["ApiProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApiProvider.useEffect": ()=>props.setupListeners === false ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupListeners"])(store.dispatch, props.setupListeners)
    }["ApiProvider.useEffect"], [
        props.setupListeners,
        store.dispatch
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store,
        context
    }, props.children);
}
// src/query/react/index.ts
var createApi = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCreateApi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coreModule"])(), reactHooksModule());
;
 //# sourceMappingURL=rtk-query-react.modern.mjs.map
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser-crypto.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if (/*TURBOPACK member replacement*/ __turbopack_context__.g.crypto && /*TURBOPACK member replacement*/ __turbopack_context__.g.crypto.getRandomValues) {
    module.exports.randomBytes = function(length) {
        var bytes = new Uint8Array(length);
        /*TURBOPACK member replacement*/ __turbopack_context__.g.crypto.getRandomValues(bytes);
        return bytes;
    };
} else {
    module.exports.randomBytes = function(length) {
        var bytes = new Array(length);
        for(var i = 0; i < length; i++){
            bytes[i] = Math.floor(Math.random() * 256);
        }
        return bytes;
    };
}
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var crypto = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser-crypto.js [app-client] (ecmascript)");
// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
    string: function(length) {
        var max = _randomStringChars.length;
        var bytes = crypto.randomBytes(length);
        var ret = [];
        for(var i = 0; i < length; i++){
            ret.push(_randomStringChars.substr(bytes[i] % max, 1));
        }
        return ret.join('');
    },
    number: function(max) {
        return Math.floor(Math.random() * max);
    },
    numberString: function(max) {
        var t = ('' + (max - 1)).length;
        var p = new Array(t + 1).join('0');
        return (p + this.number(max)).slice(-t);
    }
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var random = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)");
var onUnload = {}, afterUnload = false, isChromePackagedApp = /*TURBOPACK member replacement*/ __turbopack_context__.g.chrome && /*TURBOPACK member replacement*/ __turbopack_context__.g.chrome.app && /*TURBOPACK member replacement*/ __turbopack_context__.g.chrome.app.runtime;
module.exports = {
    attachEvent: function(event, listener) {
        if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.addEventListener !== 'undefined') {
            /*TURBOPACK member replacement*/ __turbopack_context__.g.addEventListener(event, listener, false);
        } else if (/*TURBOPACK member replacement*/ __turbopack_context__.g.document && /*TURBOPACK member replacement*/ __turbopack_context__.g.attachEvent) {
            // IE quirks.
            // According to: http://stevesouders.com/misc/test-postmessage.php
            // the message gets delivered only to 'document', not 'window'.
            /*TURBOPACK member replacement*/ __turbopack_context__.g.document.attachEvent('on' + event, listener);
            // I get 'window' for ie8.
            /*TURBOPACK member replacement*/ __turbopack_context__.g.attachEvent('on' + event, listener);
        }
    },
    detachEvent: function(event, listener) {
        if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.addEventListener !== 'undefined') {
            /*TURBOPACK member replacement*/ __turbopack_context__.g.removeEventListener(event, listener, false);
        } else if (/*TURBOPACK member replacement*/ __turbopack_context__.g.document && /*TURBOPACK member replacement*/ __turbopack_context__.g.detachEvent) {
            /*TURBOPACK member replacement*/ __turbopack_context__.g.document.detachEvent('on' + event, listener);
            /*TURBOPACK member replacement*/ __turbopack_context__.g.detachEvent('on' + event, listener);
        }
    },
    unloadAdd: function(listener) {
        if (isChromePackagedApp) {
            return null;
        }
        var ref = random.string(8);
        onUnload[ref] = listener;
        if (afterUnload) {
            setTimeout(this.triggerUnloadCallbacks, 0);
        }
        return ref;
    },
    unloadDel: function(ref) {
        if (ref in onUnload) {
            delete onUnload[ref];
        }
    },
    triggerUnloadCallbacks: function() {
        for(var ref in onUnload){
            onUnload[ref]();
            delete onUnload[ref];
        }
    }
};
var unloadTriggered = function() {
    if (afterUnload) {
        return;
    }
    afterUnload = true;
    module.exports.triggerUnloadCallbacks();
};
// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
    module.exports.attachEvent('unload', unloadTriggered);
}
}),
"[project]/brainbridge/node_modules/requires-port/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */ module.exports = function required(port, protocol) {
    protocol = protocol.split(':')[0];
    port = +port;
    if (!port) return false;
    switch(protocol){
        case 'http':
        case 'ws':
            return port !== 80;
        case 'https':
        case 'wss':
            return port !== 443;
        case 'ftp':
            return port !== 21;
        case 'gopher':
            return port !== 70;
        case 'file':
            return false;
    }
    return port !== 0;
};
}),
"[project]/brainbridge/node_modules/querystringify/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var has = Object.prototype.hasOwnProperty, undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */ function decode(input) {
    try {
        return decodeURIComponent(input.replace(/\+/g, ' '));
    } catch (e) {
        return null;
    }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */ function encode(input) {
    try {
        return encodeURIComponent(input);
    } catch (e) {
        return null;
    }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */ function querystring(query) {
    var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
    while(part = parser.exec(query)){
        var key = decode(part[1]), value = decode(part[2]);
        //
        // Prevent overriding of existing properties. This ensures that build-in
        // methods like `toString` or __proto__ are not overriden by malicious
        // querystrings.
        //
        // In the case if failed decoding, we want to omit the key/value pairs
        // from the result.
        //
        if (key === null || value === null || key in result) continue;
        result[key] = value;
    }
    return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */ function querystringify(obj, prefix) {
    prefix = prefix || '';
    var pairs = [], value, key;
    //
    // Optionally prefix with a '?' if needed
    //
    if ('string' !== typeof prefix) prefix = '?';
    for(key in obj){
        if (has.call(obj, key)) {
            value = obj[key];
            //
            // Edge cases where we actually want to encode the value to an empty
            // string instead of the stringified value.
            //
            if (!value && (value === null || value === undef || isNaN(value))) {
                value = '';
            }
            key = encode(key);
            value = encode(value);
            //
            // If we failed to encode the strings, we should bail out as we don't
            // want to add invalid strings to the query.
            //
            if (key === null || value === null) continue;
            pairs.push(key + '=' + value);
        }
    }
    return pairs.length ? prefix + pairs.join('&') : '';
}
//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;
}),
"[project]/brainbridge/node_modules/url-parse/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var required = __turbopack_context__.r("[project]/brainbridge/node_modules/requires-port/index.js [app-client] (ecmascript)"), qs = __turbopack_context__.r("[project]/brainbridge/node_modules/querystringify/index.js [app-client] (ecmascript)"), controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, CRHTLF = /[\n\r\t]/g, slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, port = /:\d+$/, protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, windowsDriveLetter = /^[a-zA-Z]:/;
/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */ function trimLeft(str) {
    return (str ? str : '').toString().replace(controlOrWhitespace, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */ var rules = [
    [
        '#',
        'hash'
    ],
    [
        '?',
        'query'
    ],
    function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
    },
    [
        '/',
        'pathname'
    ],
    [
        '@',
        'auth',
        1
    ],
    [
        NaN,
        'host',
        undefined,
        1,
        1
    ],
    [
        /:(\d*)$/,
        'port',
        undefined,
        1
    ],
    [
        NaN,
        'hostname',
        undefined,
        1,
        1
    ] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */ var ignore = {
    hash: 1,
    query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */ function lolcation(loc) {
    var globalVar;
    if (typeof window !== 'undefined') globalVar = window;
    else if ("TURBOPACK compile-time truthy", 1) globalVar = /*TURBOPACK member replacement*/ __turbopack_context__.g;
    else //TURBOPACK unreachable
    ;
    var location = globalVar.location || {};
    loc = loc || location;
    var finaldestination = {}, type = typeof loc, key;
    if ('blob:' === loc.protocol) {
        finaldestination = new Url(unescape(loc.pathname), {});
    } else if ('string' === type) {
        finaldestination = new Url(loc, {});
        for(key in ignore)delete finaldestination[key];
    } else if ('object' === type) {
        for(key in loc){
            if (key in ignore) continue;
            finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === undefined) {
            finaldestination.slashes = slashes.test(loc.href);
        }
    }
    return finaldestination;
}
/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */ function isSpecial(scheme) {
    return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */ /**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */ function extractProtocol(address, location) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, '');
    location = location || {};
    var match = protocolre.exec(address);
    var protocol = match[1] ? match[1].toLowerCase() : '';
    var forwardSlashes = !!match[2];
    var otherSlashes = !!match[3];
    var slashesCount = 0;
    var rest;
    if (forwardSlashes) {
        if (otherSlashes) {
            rest = match[2] + match[3] + match[4];
            slashesCount = match[2].length + match[3].length;
        } else {
            rest = match[2] + match[4];
            slashesCount = match[2].length;
        }
    } else {
        if (otherSlashes) {
            rest = match[3] + match[4];
            slashesCount = match[3].length;
        } else {
            rest = match[4];
        }
    }
    if (protocol === 'file:') {
        if (slashesCount >= 2) {
            rest = rest.slice(2);
        }
    } else if (isSpecial(protocol)) {
        rest = match[4];
    } else if (protocol) {
        if (forwardSlashes) {
            rest = rest.slice(2);
        }
    } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
    }
    return {
        protocol: protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount: slashesCount,
        rest: rest
    };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */ function resolve(relative, base) {
    if (relative === '') return base;
    var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')), i = path.length, last = path[i - 1], unshift = false, up = 0;
    while(i--){
        if (path[i] === '.') {
            path.splice(i, 1);
        } else if (path[i] === '..') {
            path.splice(i, 1);
            up++;
        } else if (up) {
            if (i === 0) unshift = true;
            path.splice(i, 1);
            up--;
        }
    }
    if (unshift) path.unshift('');
    if (last === '.' || last === '..') path.push('');
    return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */ function Url(address, location, parser) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, '');
    if (!(this instanceof Url)) {
        return new Url(address, location, parser);
    }
    var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
    //
    // The following if statements allows this module two have compatibility with
    // 2 different API:
    //
    // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
    //    where the boolean indicates that the query string should also be parsed.
    //
    // 2. The `URL` interface of the browser which accepts a URL, object as
    //    arguments. The supplied object will be used as default values / fall-back
    //    for relative paths.
    //
    if ('object' !== type && 'string' !== type) {
        parser = location;
        location = null;
    }
    if (parser && 'function' !== typeof parser) parser = qs.parse;
    location = lolcation(location);
    //
    // Extract protocol information before running the instructions.
    //
    extracted = extractProtocol(address || '', location);
    relative = !extracted.protocol && !extracted.slashes;
    url.slashes = extracted.slashes || relative && location.slashes;
    url.protocol = extracted.protocol || location.protocol || '';
    address = extracted.rest;
    //
    // When the authority component is absent the URL starts with a path
    // component.
    //
    if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [
            /(.*)/,
            'pathname'
        ];
    }
    for(; i < instructions.length; i++){
        instruction = instructions[i];
        if (typeof instruction === 'function') {
            address = instruction(address, url);
            continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) {
            url[key] = address;
        } else if ('string' === typeof parse) {
            index = parse === '@' ? address.lastIndexOf(parse) : address.indexOf(parse);
            if (~index) {
                if ('number' === typeof instruction[2]) {
                    url[key] = address.slice(0, index);
                    address = address.slice(index + instruction[2]);
                } else {
                    url[key] = address.slice(index);
                    address = address.slice(0, index);
                }
            }
        } else if (index = parse.exec(address)) {
            url[key] = index[1];
            address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');
        //
        // Hostname, host and protocol should be lowercased so they can be used to
        // create a proper `origin`.
        //
        if (instruction[4]) url[key] = url[key].toLowerCase();
    }
    //
    // Also parse the supplied query string in to an object. If we're supplied
    // with a custom parser as function use that instead of the default build-in
    // parser.
    //
    if (parser) url.query = parser(url.query);
    //
    // If the URL is relative, resolve the pathname against the base URL.
    //
    if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
        url.pathname = resolve(url.pathname, location.pathname);
    }
    //
    // Default to a / for pathname if none exists. This normalizes the URL
    // to always have a /
    //
    if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
        url.pathname = '/' + url.pathname;
    }
    //
    // We should not add port numbers if they are already the default port number
    // for a given protocol. As the host also contains the port number we're going
    // override it with the hostname which contains no port number.
    //
    if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = '';
    }
    //
    // Parse down the `auth` for the username and password.
    //
    url.username = url.password = '';
    if (url.auth) {
        index = url.auth.indexOf(':');
        if (~index) {
            url.username = url.auth.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = url.auth.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
            url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ':' + url.password : url.username;
    }
    url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
    //
    // The href is just the compiled result.
    //
    url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */ function set(part, value, fn) {
    var url = this;
    switch(part){
        case 'query':
            if ('string' === typeof value && value.length) {
                value = (fn || qs.parse)(value);
            }
            url[part] = value;
            break;
        case 'port':
            url[part] = value;
            if (!required(value, url.protocol)) {
                url.host = url.hostname;
                url[part] = '';
            } else if (value) {
                url.host = url.hostname + ':' + value;
            }
            break;
        case 'hostname':
            url[part] = value;
            if (url.port) value += ':' + url.port;
            url.host = value;
            break;
        case 'host':
            url[part] = value;
            if (port.test(value)) {
                value = value.split(':');
                url.port = value.pop();
                url.hostname = value.join(':');
            } else {
                url.hostname = value;
                url.port = '';
            }
            break;
        case 'protocol':
            url.protocol = value.toLowerCase();
            url.slashes = !fn;
            break;
        case 'pathname':
        case 'hash':
            if (value) {
                var char = part === 'pathname' ? '/' : '#';
                url[part] = value.charAt(0) !== char ? char + value : value;
            } else {
                url[part] = value;
            }
            break;
        case 'username':
        case 'password':
            url[part] = encodeURIComponent(value);
            break;
        case 'auth':
            var index = value.indexOf(':');
            if (~index) {
                url.username = value.slice(0, index);
                url.username = encodeURIComponent(decodeURIComponent(url.username));
                url.password = value.slice(index + 1);
                url.password = encodeURIComponent(decodeURIComponent(url.password));
            } else {
                url.username = encodeURIComponent(decodeURIComponent(value));
            }
    }
    for(var i = 0; i < rules.length; i++){
        var ins = rules[i];
        if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
    }
    url.auth = url.password ? url.username + ':' + url.password : url.username;
    url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
    url.href = url.toString();
    return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */ function toString(stringify) {
    if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
    var query, url = this, host = url.host, protocol = url.protocol;
    if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
    var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');
    if (url.username) {
        result += url.username;
        if (url.password) result += ':' + url.password;
        result += '@';
    } else if (url.password) {
        result += ':' + url.password;
        result += '@';
    } else if (url.protocol !== 'file:' && isSpecial(url.protocol) && !host && url.pathname !== '/') {
        //
        // Add back the empty userinfo, otherwise the original invalid URL
        // might be transformed into a valid one with `url.pathname` as host.
        //
        result += '@';
    }
    //
    // Trailing colon is removed from `url.host` when it is parsed. If it still
    // ends with a colon, then add back the trailing colon that was removed. This
    // prevents an invalid URL from being transformed into a valid one.
    //
    if (host[host.length - 1] === ':' || port.test(url.hostname) && !url.port) {
        host += ':';
    }
    result += host + url.pathname;
    query = 'object' === typeof url.query ? stringify(url.query) : url.query;
    if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
    if (url.hash) result += url.hash;
    return result;
}
Url.prototype = {
    set: set,
    toString: toString
};
//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;
}),
"[project]/brainbridge/node_modules/ms/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/brainbridge/node_modules/ms/index.js [app-client] (ecmascript)");
    Object.keys(env).forEach(function(key) {
        createDebug[key] = env[key];
    });
    /**
  * Active `debug` instances.
  */ createDebug.instances = [];
    /**
  * The currently active debug mode names, and names to skip.
  */ createDebug.names = [];
    createDebug.skips = [];
    /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */ createDebug.formatters = {};
    /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */ function selectColor(namespace) {
        var hash = 0;
        for(var i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */ function createDebug(namespace) {
        var prevTime;
        function debug() {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var self = debug; // Set `diff` timestamp
            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            } // Apply any `formatters` transformations
            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return match;
                }
                index++;
                var formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    var val = args[index];
                    match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            }); // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        createDebug.instances.push(debug);
        return debug;
    }
    function destroy() {
        var index = createDebug.instances.indexOf(this);
        if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
        }
        return false;
    }
    function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    }
    /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) {
                continue;
            }
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
                createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
                createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
        }
        for(i = 0; i < createDebug.instances.length; i++){
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
        }
    }
    /**
  * Disable debug output.
  *
  * @api public
  */ function disable() {
        createDebug.enable('');
    }
    /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */ function enabled(name) {
        if (name[name.length - 1] === '*') {
            return true;
        }
        var i;
        var len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
    } // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    } // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */ function log() {
    var _console;
    // This hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    var r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {} // Swallow
    // XXX (@Qix-) should we be logging these?
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && 'env' in __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        r = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/common.js [app-client] (ecmascript)")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var URL = __turbopack_context__.r("[project]/brainbridge/node_modules/url-parse/index.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:utils:url');
}
module.exports = {
    getOrigin: function(url) {
        if (!url) {
            return null;
        }
        var p = new URL(url);
        if (p.protocol === 'file:') {
            return null;
        }
        var port = p.port;
        if (!port) {
            port = p.protocol === 'https:' ? '443' : '80';
        }
        return p.protocol + '//' + p.hostname + ':' + port;
    },
    isOriginEqual: function(a, b) {
        var res = this.getOrigin(a) === this.getOrigin(b);
        debug('same', a, b, res);
        return res;
    },
    isSchemeEqual: function(a, b) {
        return a.split(':')[0] === b.split(':')[0];
    },
    addPath: function(url, path) {
        var qs = url.split('?');
        return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
    },
    addQuery: function(url, q) {
        return url + (url.indexOf('?') === -1 ? '?' + q : '&' + q);
    },
    isLoopbackAddr: function(addr) {
        return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^\[::1\]$/.test(addr);
    }
};
}),
"[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    };
}
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/event/eventtarget.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */ function EventTarget() {
    this._listeners = {};
}
EventTarget.prototype.addEventListener = function(eventType, listener) {
    if (!(eventType in this._listeners)) {
        this._listeners[eventType] = [];
    }
    var arr = this._listeners[eventType];
    // #4
    if (arr.indexOf(listener) === -1) {
        // Make a copy so as not to interfere with a current dispatchEvent.
        arr = arr.concat([
            listener
        ]);
    }
    this._listeners[eventType] = arr;
};
EventTarget.prototype.removeEventListener = function(eventType, listener) {
    var arr = this._listeners[eventType];
    if (!arr) {
        return;
    }
    var idx = arr.indexOf(listener);
    if (idx !== -1) {
        if (arr.length > 1) {
            // Make a copy so as not to interfere with a current dispatchEvent.
            this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
        } else {
            delete this._listeners[eventType];
        }
        return;
    }
};
EventTarget.prototype.dispatchEvent = function() {
    var event = arguments[0];
    var t = event.type;
    // equivalent of Array.prototype.slice.call(arguments, 0);
    var args = arguments.length === 1 ? [
        event
    ] : Array.apply(null, arguments);
    // TODO: This doesn't match the real behavior; per spec, onfoo get
    // their place in line from the /first/ time they're set from
    // non-null. Although WebKit bumps it to the end every time it's
    // set.
    if (this['on' + t]) {
        this['on' + t].apply(this, args);
    }
    if (t in this._listeners) {
        // Grab a reference to the listeners list. removeEventListener may alter the list.
        var listeners = this._listeners[t];
        for(var i = 0; i < listeners.length; i++){
            listeners[i].apply(this, args);
        }
    }
};
module.exports = EventTarget;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventTarget = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/eventtarget.js [app-client] (ecmascript)");
function EventEmitter() {
    EventTarget.call(this);
}
inherits(EventEmitter, EventTarget);
EventEmitter.prototype.removeAllListeners = function(type) {
    if (type) {
        delete this._listeners[type];
    } else {
        this._listeners = {};
    }
};
EventEmitter.prototype.once = function(type, listener) {
    var self = this, fired = false;
    function g() {
        self.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    this.on(type, g);
};
EventEmitter.prototype.emit = function() {
    var type = arguments[0];
    var listeners = this._listeners[type];
    if (!listeners) {
        return;
    }
    // equivalent of Array.prototype.slice.call(arguments, 1);
    var l = arguments.length;
    var args = new Array(l - 1);
    for(var ai = 1; ai < l; ai++){
        args[ai - 1] = arguments[ai];
    }
    for(var i = 0; i < listeners.length; i++){
        listeners[i].apply(this, args);
    }
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;
module.exports.EventEmitter = EventEmitter;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/websocket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Driver = /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket || /*TURBOPACK member replacement*/ __turbopack_context__.g.MozWebSocket;
if (Driver) {
    module.exports = function WebSocketBrowserDriver(url) {
        return new Driver(url);
    };
} else {
    module.exports = undefined;
}
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/websocket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var utils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, WebsocketDriver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/websocket.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:websocket');
}
function WebSocketTransport(transUrl, ignore, options) {
    if (!WebSocketTransport.enabled()) {
        throw new Error('Transport created when disabled');
    }
    EventEmitter.call(this);
    debug('constructor', transUrl);
    var self = this;
    var url = urlUtils.addPath(transUrl, '/websocket');
    if (url.slice(0, 5) === 'https') {
        url = 'wss' + url.slice(5);
    } else {
        url = 'ws' + url.slice(4);
    }
    this.url = url;
    this.ws = new WebsocketDriver(this.url, [], options);
    this.ws.onmessage = function(e) {
        debug('message event', e.data);
        self.emit('message', e.data);
    };
    // Firefox has an interesting bug. If a websocket connection is
    // created after onunload, it stays alive even when user
    // navigates away from the page. In such situation let's lie -
    // let's not open the ws connection at all. See:
    // https://github.com/sockjs/sockjs-client/issues/28
    // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
    this.unloadRef = utils.unloadAdd(function() {
        debug('unload');
        self.ws.close();
    });
    this.ws.onclose = function(e) {
        debug('close event', e.code, e.reason);
        self.emit('close', e.code, e.reason);
        self._cleanup();
    };
    this.ws.onerror = function(e) {
        debug('error event', e);
        self.emit('close', 1006, 'WebSocket connection broken');
        self._cleanup();
    };
}
inherits(WebSocketTransport, EventEmitter);
WebSocketTransport.prototype.send = function(data) {
    var msg = '[' + data + ']';
    debug('send', msg);
    this.ws.send(msg);
};
WebSocketTransport.prototype.close = function() {
    debug('close');
    var ws = this.ws;
    this._cleanup();
    if (ws) {
        ws.close();
    }
};
WebSocketTransport.prototype._cleanup = function() {
    debug('_cleanup');
    var ws = this.ws;
    if (ws) {
        ws.onmessage = ws.onclose = ws.onerror = null;
    }
    utils.unloadDel(this.unloadRef);
    this.unloadRef = this.ws = null;
    this.removeAllListeners();
};
WebSocketTransport.enabled = function() {
    debug('enabled');
    return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';
// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;
module.exports = WebSocketTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/buffered-sender.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter;
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:buffered-sender');
}
function BufferedSender(url, sender) {
    debug(url);
    EventEmitter.call(this);
    this.sendBuffer = [];
    this.sender = sender;
    this.url = url;
}
inherits(BufferedSender, EventEmitter);
BufferedSender.prototype.send = function(message) {
    debug('send', message);
    this.sendBuffer.push(message);
    if (!this.sendStop) {
        this.sendSchedule();
    }
};
// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
    debug('sendScheduleWait');
    var self = this;
    var tref;
    this.sendStop = function() {
        debug('sendStop');
        self.sendStop = null;
        clearTimeout(tref);
    };
    tref = setTimeout(function() {
        debug('timeout');
        self.sendStop = null;
        self.sendSchedule();
    }, 25);
};
BufferedSender.prototype.sendSchedule = function() {
    debug('sendSchedule', this.sendBuffer.length);
    var self = this;
    if (this.sendBuffer.length > 0) {
        var payload = '[' + this.sendBuffer.join(',') + ']';
        this.sendStop = this.sender(this.url, payload, function(err) {
            self.sendStop = null;
            if (err) {
                debug('error', err);
                self.emit('close', err.code || 1006, 'Sending error: ' + err);
                self.close();
            } else {
                self.sendScheduleWait();
            }
        });
        this.sendBuffer = [];
    }
};
BufferedSender.prototype._cleanup = function() {
    debug('_cleanup');
    this.removeAllListeners();
};
BufferedSender.prototype.close = function() {
    debug('close');
    this._cleanup();
    if (this.sendStop) {
        this.sendStop();
        this.sendStop = null;
    }
};
module.exports = BufferedSender;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/polling.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter;
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:polling');
}
function Polling(Receiver, receiveUrl, AjaxObject) {
    debug(receiveUrl);
    EventEmitter.call(this);
    this.Receiver = Receiver;
    this.receiveUrl = receiveUrl;
    this.AjaxObject = AjaxObject;
    this._scheduleReceiver();
}
inherits(Polling, EventEmitter);
Polling.prototype._scheduleReceiver = function() {
    debug('_scheduleReceiver');
    var self = this;
    var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
    poll.on('message', function(msg) {
        debug('message', msg);
        self.emit('message', msg);
    });
    poll.once('close', function(code, reason) {
        debug('close', code, reason, self.pollIsClosing);
        self.poll = poll = null;
        if (!self.pollIsClosing) {
            if (reason === 'network') {
                self._scheduleReceiver();
            } else {
                self.emit('close', code || 1006, reason);
                self.removeAllListeners();
            }
        }
    });
};
Polling.prototype.abort = function() {
    debug('abort');
    this.removeAllListeners();
    this.pollIsClosing = true;
    if (this.poll) {
        this.poll.abort();
    }
};
module.exports = Polling;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/sender-receiver.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), BufferedSender = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/buffered-sender.js [app-client] (ecmascript)"), Polling = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/polling.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:sender-receiver');
}
function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
    var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
    debug(pollUrl);
    var self = this;
    BufferedSender.call(this, transUrl, senderFunc);
    this.poll = new Polling(Receiver, pollUrl, AjaxObject);
    this.poll.on('message', function(msg) {
        debug('poll message', msg);
        self.emit('message', msg);
    });
    this.poll.once('close', function(code, reason) {
        debug('poll close', code, reason);
        self.poll = null;
        self.emit('close', code, reason);
        self.close();
    });
}
inherits(SenderReceiver, BufferedSender);
SenderReceiver.prototype.close = function() {
    BufferedSender.prototype.close.call(this);
    debug('close');
    this.removeAllListeners();
    if (this.poll) {
        this.poll.abort();
        this.poll = null;
    }
};
module.exports = SenderReceiver;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), SenderReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/sender-receiver.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:ajax-based');
}
function createAjaxSender(AjaxObject) {
    return function(url, payload, callback) {
        debug('create ajax sender', url, payload);
        var opt = {};
        if (typeof payload === 'string') {
            opt.headers = {
                'Content-type': 'text/plain'
            };
        }
        var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
        var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
        xo.once('finish', function(status) {
            debug('finish', status);
            xo = null;
            if (status !== 200 && status !== 204) {
                return callback(new Error('http status ' + status));
            }
            callback();
        });
        return function() {
            debug('abort');
            xo.close();
            xo = null;
            var err = new Error('Aborted');
            err.code = 1000;
            callback(err);
        };
    };
}
function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
    SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}
inherits(AjaxBasedTransport, SenderReceiver);
module.exports = AjaxBasedTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/xhr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter;
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:receiver:xhr');
}
function XhrReceiver(url, AjaxObject) {
    debug(url);
    EventEmitter.call(this);
    var self = this;
    this.bufferPosition = 0;
    this.xo = new AjaxObject('POST', url, null);
    this.xo.on('chunk', this._chunkHandler.bind(this));
    this.xo.once('finish', function(status, text) {
        debug('finish', status, text);
        self._chunkHandler(status, text);
        self.xo = null;
        var reason = status === 200 ? 'network' : 'permanent';
        debug('close', reason);
        self.emit('close', null, reason);
        self._cleanup();
    });
}
inherits(XhrReceiver, EventEmitter);
XhrReceiver.prototype._chunkHandler = function(status, text) {
    debug('_chunkHandler', status);
    if (status !== 200 || !text) {
        return;
    }
    for(var idx = -1;; this.bufferPosition += idx + 1){
        var buf = text.slice(this.bufferPosition);
        idx = buf.indexOf('\n');
        if (idx === -1) {
            break;
        }
        var msg = buf.slice(0, idx);
        if (msg) {
            debug('message', msg);
            this.emit('message', msg);
        }
    }
};
XhrReceiver.prototype._cleanup = function() {
    debug('_cleanup');
    this.removeAllListeners();
};
XhrReceiver.prototype.abort = function() {
    debug('abort');
    if (this.xo) {
        this.xo.close();
        debug('close');
        this.emit('close', null, 'user');
        this.xo = null;
    }
    this._cleanup();
};
module.exports = XhrReceiver;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), utils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), XHR = /*TURBOPACK member replacement*/ __turbopack_context__.g.XMLHttpRequest;
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:browser:xhr');
}
function AbstractXHRObject(method, url, payload, opts) {
    debug(method, url);
    var self = this;
    EventEmitter.call(this);
    setTimeout(function() {
        self._start(method, url, payload, opts);
    }, 0);
}
inherits(AbstractXHRObject, EventEmitter);
AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
    var self = this;
    try {
        this.xhr = new XHR();
    } catch (x) {
    // intentionally empty
    }
    if (!this.xhr) {
        debug('no xhr');
        this.emit('finish', 0, 'no xhr support');
        this._cleanup();
        return;
    }
    // several browsers cache POSTs
    url = urlUtils.addQuery(url, 't=' + +new Date());
    // Explorer tends to keep connection open, even after the
    // tab gets closed: http://bugs.jquery.com/ticket/5280
    this.unloadRef = utils.unloadAdd(function() {
        debug('unload cleanup');
        self._cleanup(true);
    });
    try {
        this.xhr.open(method, url, true);
        if (this.timeout && 'timeout' in this.xhr) {
            this.xhr.timeout = this.timeout;
            this.xhr.ontimeout = function() {
                debug('xhr timeout');
                self.emit('finish', 0, '');
                self._cleanup(false);
            };
        }
    } catch (e) {
        debug('exception', e);
        // IE raises an exception on wrong port.
        this.emit('finish', 0, '');
        this._cleanup(false);
        return;
    }
    if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
        debug('withCredentials');
        // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
        // "This never affects same-site requests."
        this.xhr.withCredentials = true;
    }
    if (opts && opts.headers) {
        for(var key in opts.headers){
            this.xhr.setRequestHeader(key, opts.headers[key]);
        }
    }
    this.xhr.onreadystatechange = function() {
        if (self.xhr) {
            var x = self.xhr;
            var text, status;
            debug('readyState', x.readyState);
            switch(x.readyState){
                case 3:
                    // IE doesn't like peeking into responseText or status
                    // on Microsoft.XMLHTTP and readystate=3
                    try {
                        status = x.status;
                        text = x.responseText;
                    } catch (e) {
                    // intentionally empty
                    }
                    debug('status', status);
                    // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
                    if (status === 1223) {
                        status = 204;
                    }
                    // IE does return readystate == 3 for 404 answers.
                    if (status === 200 && text && text.length > 0) {
                        debug('chunk');
                        self.emit('chunk', status, text);
                    }
                    break;
                case 4:
                    status = x.status;
                    debug('status', status);
                    // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
                    if (status === 1223) {
                        status = 204;
                    }
                    // IE returns this for a bad port
                    // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
                    if (status === 12005 || status === 12029) {
                        status = 0;
                    }
                    debug('finish', status, x.responseText);
                    self.emit('finish', status, x.responseText);
                    self._cleanup(false);
                    break;
            }
        }
    };
    try {
        self.xhr.send(payload);
    } catch (e) {
        self.emit('finish', 0, '');
        self._cleanup(false);
    }
};
AbstractXHRObject.prototype._cleanup = function(abort) {
    debug('cleanup');
    if (!this.xhr) {
        return;
    }
    this.removeAllListeners();
    utils.unloadDel(this.unloadRef);
    // IE needs this field to be a function
    this.xhr.onreadystatechange = function() {};
    if (this.xhr.ontimeout) {
        this.xhr.ontimeout = null;
    }
    if (abort) {
        try {
            this.xhr.abort();
        } catch (x) {
        // intentionally empty
        }
    }
    this.unloadRef = this.xhr = null;
};
AbstractXHRObject.prototype.close = function() {
    debug('close');
    this._cleanup(true);
};
AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = [
    'Active'
].concat('Object').join('X');
if (!AbstractXHRObject.enabled && axo in /*TURBOPACK member replacement*/ __turbopack_context__.g) {
    debug('overriding xmlhttprequest');
    XHR = function() {
        try {
            return new /*TURBOPACK member replacement*/ __turbopack_context__.g[axo]('Microsoft.XMLHTTP');
        } catch (e) {
            return null;
        }
    };
    AbstractXHRObject.enabled = !!new XHR();
}
var cors = false;
try {
    cors = 'withCredentials' in new XHR();
} catch (ignored) {
// intentionally empty
}
AbstractXHRObject.supportsCORS = cors;
module.exports = AbstractXHRObject;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-cors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), XhrDriver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js [app-client] (ecmascript)");
function XHRCorsObject(method, url, payload, opts) {
    XhrDriver.call(this, method, url, payload, opts);
}
inherits(XHRCorsObject, XhrDriver);
XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;
module.exports = XHRCorsObject;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-local.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), XhrDriver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js [app-client] (ecmascript)");
function XHRLocalObject(method, url, payload /*, opts */ ) {
    XhrDriver.call(this, method, url, payload, {
        noCredentials: true
    });
}
inherits(XHRLocalObject, XhrDriver);
XHRLocalObject.enabled = XhrDriver.enabled;
module.exports = XHRLocalObject;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    isOpera: function() {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g.navigator && /opera/i.test(/*TURBOPACK member replacement*/ __turbopack_context__.g.navigator.userAgent);
    },
    isKonqueror: function() {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g.navigator && /konqueror/i.test(/*TURBOPACK member replacement*/ __turbopack_context__.g.navigator.userAgent);
    },
    hasDomain: function() {
        // non-browser client always has a domain
        if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.document) {
            return true;
        }
        try {
            return !!/*TURBOPACK member replacement*/ __turbopack_context__.g.document.domain;
        } catch (e) {
            return false;
        }
    }
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/xhr-streaming.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), AjaxBasedTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)"), XhrReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/xhr.js [app-client] (ecmascript)"), XHRCorsObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-cors.js [app-client] (ecmascript)"), XHRLocalObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-local.js [app-client] (ecmascript)"), browser = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser.js [app-client] (ecmascript)");
function XhrStreamingTransport(transUrl) {
    if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
        throw new Error('Transport created when disabled');
    }
    AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}
inherits(XhrStreamingTransport, AjaxBasedTransport);
XhrStreamingTransport.enabled = function(info) {
    if (info.nullOrigin) {
        return false;
    }
    // Opera doesn't support xhr-streaming #60
    // But it might be able to #92
    if (browser.isOpera()) {
        return false;
    }
    return XHRCorsObject.enabled;
};
XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax
// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!/*TURBOPACK member replacement*/ __turbopack_context__.g.document;
module.exports = XhrStreamingTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xdr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), eventUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), browser = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:sender:xdr');
}
// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx
function XDRObject(method, url, payload) {
    debug(method, url);
    var self = this;
    EventEmitter.call(this);
    setTimeout(function() {
        self._start(method, url, payload);
    }, 0);
}
inherits(XDRObject, EventEmitter);
XDRObject.prototype._start = function(method, url, payload) {
    debug('_start');
    var self = this;
    var xdr = new /*TURBOPACK member replacement*/ __turbopack_context__.g.XDomainRequest();
    // IE caches even POSTs
    url = urlUtils.addQuery(url, 't=' + +new Date());
    xdr.onerror = function() {
        debug('onerror');
        self._error();
    };
    xdr.ontimeout = function() {
        debug('ontimeout');
        self._error();
    };
    xdr.onprogress = function() {
        debug('progress', xdr.responseText);
        self.emit('chunk', 200, xdr.responseText);
    };
    xdr.onload = function() {
        debug('load');
        self.emit('finish', 200, xdr.responseText);
        self._cleanup(false);
    };
    this.xdr = xdr;
    this.unloadRef = eventUtils.unloadAdd(function() {
        self._cleanup(true);
    });
    try {
        // Fails with AccessDenied if port number is bogus
        this.xdr.open(method, url);
        if (this.timeout) {
            this.xdr.timeout = this.timeout;
        }
        this.xdr.send(payload);
    } catch (x) {
        this._error();
    }
};
XDRObject.prototype._error = function() {
    this.emit('finish', 0, '');
    this._cleanup(false);
};
XDRObject.prototype._cleanup = function(abort) {
    debug('cleanup', abort);
    if (!this.xdr) {
        return;
    }
    this.removeAllListeners();
    eventUtils.unloadDel(this.unloadRef);
    this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
    if (abort) {
        try {
            this.xdr.abort();
        } catch (x) {
        // intentionally empty
        }
    }
    this.unloadRef = this.xdr = null;
};
XDRObject.prototype.close = function() {
    debug('close');
    this._cleanup(true);
};
// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(/*TURBOPACK member replacement*/ __turbopack_context__.g.XDomainRequest && browser.hasDomain());
module.exports = XDRObject;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/xdr-streaming.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), AjaxBasedTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)"), XhrReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/xhr.js [app-client] (ecmascript)"), XDRObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xdr.js [app-client] (ecmascript)");
// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
function XdrStreamingTransport(transUrl) {
    if (!XDRObject.enabled) {
        throw new Error('Transport created when disabled');
    }
    AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}
inherits(XdrStreamingTransport, AjaxBasedTransport);
XdrStreamingTransport.enabled = function(info) {
    if (info.cookie_needed || info.nullOrigin) {
        return false;
    }
    return XDRObject.enabled && info.sameScheme;
};
XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax
module.exports = XdrStreamingTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/eventsource.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = /*TURBOPACK member replacement*/ __turbopack_context__.g.EventSource;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/eventsource.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, EventSourceDriver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/eventsource.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:receiver:eventsource');
}
function EventSourceReceiver(url) {
    debug(url);
    EventEmitter.call(this);
    var self = this;
    var es = this.es = new EventSourceDriver(url);
    es.onmessage = function(e) {
        debug('message', e.data);
        self.emit('message', decodeURI(e.data));
    };
    es.onerror = function(e) {
        debug('error', es.readyState, e);
        // ES on reconnection has readyState = 0 or 1.
        // on network error it's CLOSED = 2
        var reason = es.readyState !== 2 ? 'network' : 'permanent';
        self._cleanup();
        self._close(reason);
    };
}
inherits(EventSourceReceiver, EventEmitter);
EventSourceReceiver.prototype.abort = function() {
    debug('abort');
    this._cleanup();
    this._close('user');
};
EventSourceReceiver.prototype._cleanup = function() {
    debug('cleanup');
    var es = this.es;
    if (es) {
        es.onmessage = es.onerror = null;
        es.close();
        this.es = null;
    }
};
EventSourceReceiver.prototype._close = function(reason) {
    debug('close', reason);
    var self = this;
    // Safari and chrome < 15 crash if we close window before
    // waiting for ES cleanup. See:
    // https://code.google.com/p/chromium/issues/detail?id=89155
    setTimeout(function() {
        self.emit('close', null, reason);
        self.removeAllListeners();
    }, 200);
};
module.exports = EventSourceReceiver;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/eventsource.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), AjaxBasedTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)"), EventSourceReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/eventsource.js [app-client] (ecmascript)"), XHRCorsObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-cors.js [app-client] (ecmascript)"), EventSourceDriver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/browser/eventsource.js [app-client] (ecmascript)");
function EventSourceTransport(transUrl) {
    if (!EventSourceTransport.enabled()) {
        throw new Error('Transport created when disabled');
    }
    AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}
inherits(EventSourceTransport, AjaxBasedTransport);
EventSourceTransport.enabled = function() {
    return !!EventSourceDriver;
};
EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;
module.exports = EventSourceTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/version.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = '1.6.1';
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/iframe.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var eventUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), browser = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:utils:iframe');
}
module.exports = {
    WPrefix: '_jp',
    currentWindowId: null,
    polluteGlobalNamespace: function() {
        if (!(module.exports.WPrefix in /*TURBOPACK member replacement*/ __turbopack_context__.g)) {
            /*TURBOPACK member replacement*/ __turbopack_context__.g[module.exports.WPrefix] = {};
        }
    },
    postMessage: function(type, data) {
        if (/*TURBOPACK member replacement*/ __turbopack_context__.g.parent !== /*TURBOPACK member replacement*/ __turbopack_context__.g) {
            /*TURBOPACK member replacement*/ __turbopack_context__.g.parent.postMessage(JSON.stringify({
                windowId: module.exports.currentWindowId,
                type: type,
                data: data || ''
            }), '*');
        } else {
            debug('Cannot postMessage, no parent window.', type, data);
        }
    },
    createIframe: function(iframeUrl, errorCallback) {
        var iframe = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('iframe');
        var tref, unloadRef;
        var unattach = function() {
            debug('unattach');
            clearTimeout(tref);
            // Explorer had problems with that.
            try {
                iframe.onload = null;
            } catch (x) {
            // intentionally empty
            }
            iframe.onerror = null;
        };
        var cleanup = function() {
            debug('cleanup');
            if (iframe) {
                unattach();
                // This timeout makes chrome fire onbeforeunload event
                // within iframe. Without the timeout it goes straight to
                // onunload.
                setTimeout(function() {
                    if (iframe) {
                        iframe.parentNode.removeChild(iframe);
                    }
                    iframe = null;
                }, 0);
                eventUtils.unloadDel(unloadRef);
            }
        };
        var onerror = function(err) {
            debug('onerror', err);
            if (iframe) {
                cleanup();
                errorCallback(err);
            }
        };
        var post = function(msg, origin) {
            debug('post', msg, origin);
            setTimeout(function() {
                try {
                    // When the iframe is not loaded, IE raises an exception
                    // on 'contentWindow'.
                    if (iframe && iframe.contentWindow) {
                        iframe.contentWindow.postMessage(msg, origin);
                    }
                } catch (x) {
                // intentionally empty
                }
            }, 0);
        };
        iframe.src = iframeUrl;
        iframe.style.display = 'none';
        iframe.style.position = 'absolute';
        iframe.onerror = function() {
            onerror('onerror');
        };
        iframe.onload = function() {
            debug('onload');
            // `onload` is triggered before scripts on the iframe are
            // executed. Give it few seconds to actually load stuff.
            clearTimeout(tref);
            tref = setTimeout(function() {
                onerror('onload timeout');
            }, 2000);
        };
        /*TURBOPACK member replacement*/ __turbopack_context__.g.document.body.appendChild(iframe);
        tref = setTimeout(function() {
            onerror('timeout');
        }, 15000);
        unloadRef = eventUtils.unloadAdd(cleanup);
        return {
            post: post,
            cleanup: cleanup,
            loaded: unattach
        };
    },
    createHtmlfile: function(iframeUrl, errorCallback) {
        var axo = [
            'Active'
        ].concat('Object').join('X');
        var doc = new /*TURBOPACK member replacement*/ __turbopack_context__.g[axo]('htmlfile');
        var tref, unloadRef;
        var iframe;
        var unattach = function() {
            clearTimeout(tref);
            iframe.onerror = null;
        };
        var cleanup = function() {
            if (doc) {
                unattach();
                eventUtils.unloadDel(unloadRef);
                iframe.parentNode.removeChild(iframe);
                iframe = doc = null;
                CollectGarbage();
            }
        };
        var onerror = function(r) {
            debug('onerror', r);
            if (doc) {
                cleanup();
                errorCallback(r);
            }
        };
        var post = function(msg, origin) {
            try {
                // When the iframe is not loaded, IE raises an exception
                // on 'contentWindow'.
                setTimeout(function() {
                    if (iframe && iframe.contentWindow) {
                        iframe.contentWindow.postMessage(msg, origin);
                    }
                }, 0);
            } catch (x) {
            // intentionally empty
            }
        };
        doc.open();
        doc.write('<html><s' + 'cript>' + 'document.domain="' + /*TURBOPACK member replacement*/ __turbopack_context__.g.document.domain + '";' + '</s' + 'cript></html>');
        doc.close();
        doc.parentWindow[module.exports.WPrefix] = /*TURBOPACK member replacement*/ __turbopack_context__.g[module.exports.WPrefix];
        var c = doc.createElement('div');
        doc.body.appendChild(c);
        iframe = doc.createElement('iframe');
        c.appendChild(iframe);
        iframe.src = iframeUrl;
        iframe.onerror = function() {
            onerror('onerror');
        };
        tref = setTimeout(function() {
            onerror('timeout');
        }, 15000);
        unloadRef = eventUtils.unloadAdd(cleanup);
        return {
            post: post,
            cleanup: cleanup,
            loaded: unattach
        };
    }
};
module.exports.iframeEnabled = false;
if (/*TURBOPACK member replacement*/ __turbopack_context__.g.document) {
    // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
    // huge delay, or not at all.
    module.exports.iframeEnabled = (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.postMessage === 'function' || typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.postMessage === 'object') && !browser.isKonqueror();
}
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/iframe.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, version = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/version.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), iframeUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/iframe.js [app-client] (ecmascript)"), eventUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), random = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:transport:iframe');
}
function IframeTransport(transport, transUrl, baseUrl) {
    if (!IframeTransport.enabled()) {
        throw new Error('Transport created when disabled');
    }
    EventEmitter.call(this);
    var self = this;
    this.origin = urlUtils.getOrigin(baseUrl);
    this.baseUrl = baseUrl;
    this.transUrl = transUrl;
    this.transport = transport;
    this.windowId = random.string(8);
    var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
    debug(transport, transUrl, iframeUrl);
    this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
        debug('err callback');
        self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
        self.close();
    });
    this.onmessageCallback = this._message.bind(this);
    eventUtils.attachEvent('message', this.onmessageCallback);
}
inherits(IframeTransport, EventEmitter);
IframeTransport.prototype.close = function() {
    debug('close');
    this.removeAllListeners();
    if (this.iframeObj) {
        eventUtils.detachEvent('message', this.onmessageCallback);
        try {
            // When the iframe is not loaded, IE raises an exception
            // on 'contentWindow'.
            this.postMessage('c');
        } catch (x) {
        // intentionally empty
        }
        this.iframeObj.cleanup();
        this.iframeObj = null;
        this.onmessageCallback = this.iframeObj = null;
    }
};
IframeTransport.prototype._message = function(e) {
    debug('message', e.data);
    if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
        debug('not same origin', e.origin, this.origin);
        return;
    }
    var iframeMessage;
    try {
        iframeMessage = JSON.parse(e.data);
    } catch (ignored) {
        debug('bad json', e.data);
        return;
    }
    if (iframeMessage.windowId !== this.windowId) {
        debug('mismatched window id', iframeMessage.windowId, this.windowId);
        return;
    }
    switch(iframeMessage.type){
        case 's':
            this.iframeObj.loaded();
            // window global dependency
            this.postMessage('s', JSON.stringify([
                version,
                this.transport,
                this.transUrl,
                this.baseUrl
            ]));
            break;
        case 't':
            this.emit('message', iframeMessage.data);
            break;
        case 'c':
            var cdata;
            try {
                cdata = JSON.parse(iframeMessage.data);
            } catch (ignored) {
                debug('bad json', iframeMessage.data);
                return;
            }
            this.emit('close', cdata[0], cdata[1]);
            this.close();
            break;
    }
};
IframeTransport.prototype.postMessage = function(type, data) {
    debug('postMessage', type, data);
    this.iframeObj.post(JSON.stringify({
        windowId: this.windowId,
        type: type,
        data: data || ''
    }), this.origin);
};
IframeTransport.prototype.send = function(message) {
    debug('send', message);
    this.postMessage('m', message);
};
IframeTransport.enabled = function() {
    return iframeUtils.iframeEnabled;
};
IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;
module.exports = IframeTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/object.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    isObject: function(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    },
    extend: function(obj) {
        if (!this.isObject(obj)) {
            return obj;
        }
        var source, prop;
        for(var i = 1, length = arguments.length; i < length; i++){
            source = arguments[i];
            for(prop in source){
                if (Object.prototype.hasOwnProperty.call(source, prop)) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    }
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), IframeTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/iframe.js [app-client] (ecmascript)"), objectUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/object.js [app-client] (ecmascript)");
module.exports = function(transport) {
    function IframeWrapTransport(transUrl, baseUrl) {
        IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
    }
    inherits(IframeWrapTransport, IframeTransport);
    IframeWrapTransport.enabled = function(url, info) {
        if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.document) {
            return false;
        }
        var iframeInfo = objectUtils.extend({}, info);
        iframeInfo.sameOrigin = true;
        return transport.enabled(iframeInfo) && IframeTransport.enabled();
    };
    IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
    IframeWrapTransport.needBody = true;
    IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)
    IframeWrapTransport.facadeTransport = transport;
    return IframeWrapTransport;
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/htmlfile.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), iframeUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/iframe.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, random = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:receiver:htmlfile');
}
function HtmlfileReceiver(url) {
    debug(url);
    EventEmitter.call(this);
    var self = this;
    iframeUtils.polluteGlobalNamespace();
    this.id = 'a' + random.string(6);
    url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));
    debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
    var constructFunc = HtmlfileReceiver.htmlfileEnabled ? iframeUtils.createHtmlfile : iframeUtils.createIframe;
    /*TURBOPACK member replacement*/ __turbopack_context__.g[iframeUtils.WPrefix][this.id] = {
        start: function() {
            debug('start');
            self.iframeObj.loaded();
        },
        message: function(data) {
            debug('message', data);
            self.emit('message', data);
        },
        stop: function() {
            debug('stop');
            self._cleanup();
            self._close('network');
        }
    };
    this.iframeObj = constructFunc(url, function() {
        debug('callback');
        self._cleanup();
        self._close('permanent');
    });
}
inherits(HtmlfileReceiver, EventEmitter);
HtmlfileReceiver.prototype.abort = function() {
    debug('abort');
    this._cleanup();
    this._close('user');
};
HtmlfileReceiver.prototype._cleanup = function() {
    debug('_cleanup');
    if (this.iframeObj) {
        this.iframeObj.cleanup();
        this.iframeObj = null;
    }
    delete /*TURBOPACK member replacement*/ __turbopack_context__.g[iframeUtils.WPrefix][this.id];
};
HtmlfileReceiver.prototype._close = function(reason) {
    debug('_close', reason);
    this.emit('close', null, reason);
    this.removeAllListeners();
};
HtmlfileReceiver.htmlfileEnabled = false;
// obfuscate to avoid firewalls
var axo = [
    'Active'
].concat('Object').join('X');
if (axo in /*TURBOPACK member replacement*/ __turbopack_context__.g) {
    try {
        HtmlfileReceiver.htmlfileEnabled = !!new /*TURBOPACK member replacement*/ __turbopack_context__.g[axo]('htmlfile');
    } catch (x) {
    // intentionally empty
    }
}
HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;
module.exports = HtmlfileReceiver;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/htmlfile.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), HtmlfileReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/htmlfile.js [app-client] (ecmascript)"), XHRLocalObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-local.js [app-client] (ecmascript)"), AjaxBasedTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)");
function HtmlFileTransport(transUrl) {
    if (!HtmlfileReceiver.enabled) {
        throw new Error('Transport created when disabled');
    }
    AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}
inherits(HtmlFileTransport, AjaxBasedTransport);
HtmlFileTransport.enabled = function(info) {
    return HtmlfileReceiver.enabled && info.sameOrigin;
};
HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;
module.exports = HtmlFileTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/xhr-polling.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), AjaxBasedTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)"), XhrReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/xhr.js [app-client] (ecmascript)"), XHRCorsObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-cors.js [app-client] (ecmascript)"), XHRLocalObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-local.js [app-client] (ecmascript)");
function XhrPollingTransport(transUrl) {
    if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
        throw new Error('Transport created when disabled');
    }
    AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}
inherits(XhrPollingTransport, AjaxBasedTransport);
XhrPollingTransport.enabled = function(info) {
    if (info.nullOrigin) {
        return false;
    }
    if (XHRLocalObject.enabled && info.sameOrigin) {
        return true;
    }
    return XHRCorsObject.enabled;
};
XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax
module.exports = XhrPollingTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/xdr-polling.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), AjaxBasedTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/ajax-based.js [app-client] (ecmascript)"), XdrStreamingTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/xdr-streaming.js [app-client] (ecmascript)"), XhrReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/xhr.js [app-client] (ecmascript)"), XDRObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xdr.js [app-client] (ecmascript)");
function XdrPollingTransport(transUrl) {
    if (!XDRObject.enabled) {
        throw new Error('Transport created when disabled');
    }
    AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}
inherits(XdrPollingTransport, AjaxBasedTransport);
XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax
module.exports = XdrPollingTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/jsonp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var utils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/iframe.js [app-client] (ecmascript)"), random = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)"), browser = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter;
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:receiver:jsonp');
}
function JsonpReceiver(url) {
    debug(url);
    var self = this;
    EventEmitter.call(this);
    utils.polluteGlobalNamespace();
    this.id = 'a' + random.string(6);
    var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));
    /*TURBOPACK member replacement*/ __turbopack_context__.g[utils.WPrefix][this.id] = this._callback.bind(this);
    this._createScript(urlWithId);
    // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
    this.timeoutId = setTimeout(function() {
        debug('timeout');
        self._abort(new Error('JSONP script loaded abnormally (timeout)'));
    }, JsonpReceiver.timeout);
}
inherits(JsonpReceiver, EventEmitter);
JsonpReceiver.prototype.abort = function() {
    debug('abort');
    if (/*TURBOPACK member replacement*/ __turbopack_context__.g[utils.WPrefix][this.id]) {
        var err = new Error('JSONP user aborted read');
        err.code = 1000;
        this._abort(err);
    }
};
JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;
JsonpReceiver.prototype._callback = function(data) {
    debug('_callback', data);
    this._cleanup();
    if (this.aborting) {
        return;
    }
    if (data) {
        debug('message', data);
        this.emit('message', data);
    }
    this.emit('close', null, 'network');
    this.removeAllListeners();
};
JsonpReceiver.prototype._abort = function(err) {
    debug('_abort', err);
    this._cleanup();
    this.aborting = true;
    this.emit('close', err.code, err.message);
    this.removeAllListeners();
};
JsonpReceiver.prototype._cleanup = function() {
    debug('_cleanup');
    clearTimeout(this.timeoutId);
    if (this.script2) {
        this.script2.parentNode.removeChild(this.script2);
        this.script2 = null;
    }
    if (this.script) {
        var script = this.script;
        // Unfortunately, you can't really abort script loading of
        // the script.
        script.parentNode.removeChild(script);
        script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
        this.script = null;
    }
    delete /*TURBOPACK member replacement*/ __turbopack_context__.g[utils.WPrefix][this.id];
};
JsonpReceiver.prototype._scriptError = function() {
    debug('_scriptError');
    var self = this;
    if (this.errorTimer) {
        return;
    }
    this.errorTimer = setTimeout(function() {
        if (!self.loadedOkay) {
            self._abort(new Error('JSONP script loaded abnormally (onerror)'));
        }
    }, JsonpReceiver.scriptErrorTimeout);
};
JsonpReceiver.prototype._createScript = function(url) {
    debug('_createScript', url);
    var self = this;
    var script = this.script = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('script');
    var script2; // Opera synchronous load trick.
    script.id = 'a' + random.string(8);
    script.src = url;
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.onerror = this._scriptError.bind(this);
    script.onload = function() {
        debug('onload');
        self._abort(new Error('JSONP script loaded abnormally (onload)'));
    };
    // IE9 fires 'error' event after onreadystatechange or before, in random order.
    // Use loadedOkay to determine if actually errored
    script.onreadystatechange = function() {
        debug('onreadystatechange', script.readyState);
        if (/loaded|closed/.test(script.readyState)) {
            if (script && script.htmlFor && script.onclick) {
                self.loadedOkay = true;
                try {
                    // In IE, actually execute the script.
                    script.onclick();
                } catch (x) {
                // intentionally empty
                }
            }
            if (script) {
                self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
            }
        }
    };
    // IE: event/htmlFor/onclick trick.
    // One can't rely on proper order for onreadystatechange. In order to
    // make sure, set a 'htmlFor' and 'event' properties, so that
    // script code will be installed as 'onclick' handler for the
    // script object. Later, onreadystatechange, manually execute this
    // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
    // set. For reference see:
    //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
    // Also, read on that about script ordering:
    //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
    if (typeof script.async === 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g.document.attachEvent) {
        // According to mozilla docs, in recent browsers script.async defaults
        // to 'true', so we may use it to detect a good browser:
        // https://developer.mozilla.org/en/HTML/Element/script
        if (!browser.isOpera()) {
            // Naively assume we're in IE
            try {
                script.htmlFor = script.id;
                script.event = 'onclick';
            } catch (x) {
            // intentionally empty
            }
            script.async = true;
        } else {
            // Opera, second sync script hack
            script2 = this.script2 = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('script');
            script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
            script.async = script2.async = false;
        }
    }
    if (typeof script.async !== 'undefined') {
        script.async = true;
    }
    var head = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);
    if (script2) {
        head.insertBefore(script2, head.firstChild);
    }
};
module.exports = JsonpReceiver;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/jsonp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var random = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:sender:jsonp');
}
var form, area;
function createIframe(id) {
    debug('createIframe', id);
    try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        return /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('<iframe name="' + id + '">');
    } catch (x) {
        var iframe = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('iframe');
        iframe.name = id;
        return iframe;
    }
}
function createForm() {
    debug('createForm');
    form = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('form');
    form.style.display = 'none';
    form.style.position = 'absolute';
    form.method = 'POST';
    form.enctype = 'application/x-www-form-urlencoded';
    form.acceptCharset = 'UTF-8';
    area = /*TURBOPACK member replacement*/ __turbopack_context__.g.document.createElement('textarea');
    area.name = 'd';
    form.appendChild(area);
    /*TURBOPACK member replacement*/ __turbopack_context__.g.document.body.appendChild(form);
}
module.exports = function(url, payload, callback) {
    debug(url, payload);
    if (!form) {
        createForm();
    }
    var id = 'a' + random.string(8);
    form.target = id;
    form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);
    var iframe = createIframe(id);
    iframe.id = id;
    iframe.style.display = 'none';
    form.appendChild(iframe);
    try {
        area.value = payload;
    } catch (e) {
    // seriously broken browsers get here
    }
    form.submit();
    var completed = function(err) {
        debug('completed', id, err);
        if (!iframe.onerror) {
            return;
        }
        iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
        // Opera mini doesn't like if we GC iframe
        // immediately, thus this timeout.
        setTimeout(function() {
            debug('cleaning up', id);
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        }, 500);
        area.value = '';
        // It is not possible to detect if the iframe succeeded or
        // failed to submit our form.
        callback(err);
    };
    iframe.onerror = function() {
        debug('onerror', id);
        completed();
    };
    iframe.onload = function() {
        debug('onload', id);
        completed();
    };
    iframe.onreadystatechange = function(e) {
        debug('onreadystatechange', id, iframe.readyState, e);
        if (iframe.readyState === 'complete') {
            completed();
        }
    };
    return function() {
        debug('aborted', id);
        completed(new Error('Aborted'));
    };
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/jsonp-polling.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors
var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), SenderReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/sender-receiver.js [app-client] (ecmascript)"), JsonpReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/receiver/jsonp.js [app-client] (ecmascript)"), jsonpSender = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/jsonp.js [app-client] (ecmascript)");
function JsonPTransport(transUrl) {
    if (!JsonPTransport.enabled()) {
        throw new Error('Transport created when disabled');
    }
    SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}
inherits(JsonPTransport, SenderReceiver);
JsonPTransport.enabled = function() {
    return !!/*TURBOPACK member replacement*/ __turbopack_context__.g.document;
};
JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;
module.exports = JsonPTransport;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport-list.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = [
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/websocket.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/xhr-streaming.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/xdr-streaming.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/eventsource.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js [app-client] (ecmascript)")(__turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/eventsource.js [app-client] (ecmascript)")),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/htmlfile.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js [app-client] (ecmascript)")(__turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/htmlfile.js [app-client] (ecmascript)")),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/xhr-polling.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/xdr-polling.js [app-client] (ecmascript)"),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js [app-client] (ecmascript)")(__turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/xhr-polling.js [app-client] (ecmascript)")),
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/jsonp-polling.js [app-client] (ecmascript)")
];
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/facade.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var iframeUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/iframe.js [app-client] (ecmascript)");
function FacadeJS(transport) {
    this._transport = transport;
    transport.on('message', this._transportMessage.bind(this));
    transport.on('close', this._transportClose.bind(this));
}
FacadeJS.prototype._transportClose = function(code, reason) {
    iframeUtils.postMessage('c', JSON.stringify([
        code,
        reason
    ]));
};
FacadeJS.prototype._transportMessage = function(frame) {
    iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
    this._transport.send(data);
};
FacadeJS.prototype._close = function() {
    this._transport.close();
    this._transport.removeAllListeners();
};
module.exports = FacadeJS;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/info-ajax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), objectUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/object.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:info-ajax');
}
function InfoAjax(url, AjaxObject) {
    EventEmitter.call(this);
    var self = this;
    var t0 = +new Date();
    this.xo = new AjaxObject('GET', url);
    this.xo.once('finish', function(status, text) {
        var info, rtt;
        if (status === 200) {
            rtt = +new Date() - t0;
            if (text) {
                try {
                    info = JSON.parse(text);
                } catch (e) {
                    debug('bad json', text);
                }
            }
            if (!objectUtils.isObject(info)) {
                info = {};
            }
        }
        self.emit('finish', info, rtt);
        self.removeAllListeners();
    });
}
inherits(InfoAjax, EventEmitter);
InfoAjax.prototype.close = function() {
    this.removeAllListeners();
    this.xo.close();
};
module.exports = InfoAjax;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/info-iframe-receiver.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, XHRLocalObject = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-local.js [app-client] (ecmascript)"), InfoAjax = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/info-ajax.js [app-client] (ecmascript)");
function InfoReceiverIframe(transUrl) {
    var self = this;
    EventEmitter.call(this);
    this.ir = new InfoAjax(transUrl, XHRLocalObject);
    this.ir.once('finish', function(info, rtt) {
        self.ir = null;
        self.emit('message', JSON.stringify([
            info,
            rtt
        ]));
    });
}
inherits(InfoReceiverIframe, EventEmitter);
InfoReceiverIframe.transportName = 'iframe-info-receiver';
InfoReceiverIframe.prototype.close = function() {
    if (this.ir) {
        this.ir.close();
        this.ir = null;
    }
    this.removeAllListeners();
};
module.exports = InfoReceiverIframe;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/location.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = /*TURBOPACK member replacement*/ __turbopack_context__.g.location || {
    origin: 'http://localhost:80',
    protocol: 'http:',
    host: 'localhost',
    port: 80,
    href: 'http://localhost/',
    hash: ''
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/iframe-bootstrap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), eventUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), FacadeJS = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/facade.js [app-client] (ecmascript)"), InfoIframeReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/info-iframe-receiver.js [app-client] (ecmascript)"), iframeUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/iframe.js [app-client] (ecmascript)"), loc = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/location.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:iframe-bootstrap');
}
module.exports = function(SockJS, availableTransports) {
    var transportMap = {};
    availableTransports.forEach(function(at) {
        if (at.facadeTransport) {
            transportMap[at.facadeTransport.transportName] = at.facadeTransport;
        }
    });
    // hard-coded for the info iframe
    // TODO see if we can make this more dynamic
    transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
    var parentOrigin;
    /* eslint-disable camelcase */ SockJS.bootstrap_iframe = function() {
        /* eslint-enable camelcase */ var facade;
        iframeUtils.currentWindowId = loc.hash.slice(1);
        var onMessage = function(e) {
            if (e.source !== parent) {
                return;
            }
            if (typeof parentOrigin === 'undefined') {
                parentOrigin = e.origin;
            }
            if (e.origin !== parentOrigin) {
                return;
            }
            var iframeMessage;
            try {
                iframeMessage = JSON.parse(e.data);
            } catch (ignored) {
                debug('bad json', e.data);
                return;
            }
            if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
                return;
            }
            switch(iframeMessage.type){
                case 's':
                    var p;
                    try {
                        p = JSON.parse(iframeMessage.data);
                    } catch (ignored) {
                        debug('bad json', iframeMessage.data);
                        break;
                    }
                    var version = p[0];
                    var transport = p[1];
                    var transUrl = p[2];
                    var baseUrl = p[3];
                    debug(version, transport, transUrl, baseUrl);
                    // change this to semver logic
                    if (version !== SockJS.version) {
                        throw new Error('Incompatible SockJS! Main site uses:' + ' "' + version + '", the iframe:' + ' "' + SockJS.version + '".');
                    }
                    if (!urlUtils.isOriginEqual(transUrl, loc.href) || !urlUtils.isOriginEqual(baseUrl, loc.href)) {
                        throw new Error('Can\'t connect to different domain from within an ' + 'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
                    }
                    facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
                    break;
                case 'm':
                    facade._send(iframeMessage.data);
                    break;
                case 'c':
                    if (facade) {
                        facade._close();
                    }
                    facade = null;
                    break;
            }
        };
        eventUtils.attachEvent('message', onMessage);
        // Start
        iframeUtils.postMessage('s');
    };
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/shims.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable */ /* jscs: disable */ // pulled specific shims from https://github.com/es-shims/es5-shim
var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;
var _toString = ObjectPrototype.toString;
var isFunction = function(val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};
var supportsDescriptors = Object.defineProperty && function() {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) {
        return false;
    }
}();
// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
    defineProperty = function(object, name, method, forceAssign) {
        if (!forceAssign && name in object) {
            return;
        }
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
        });
    };
} else {
    defineProperty = function(object, name, method, forceAssign) {
        if (!forceAssign && name in object) {
            return;
        }
        object[name] = method;
    };
}
var defineProperties = function(object, map, forceAssign) {
    for(var name in map){
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
            defineProperty(object, name, map[name], forceAssign);
        }
    }
};
var toObject = function(o) {
    if (o == null) {
        throw new TypeError("can't convert " + o + ' to object');
    }
    return Object(o);
};
//
// Util
// ======
//
// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer
function toInteger(num) {
    var n = +num;
    if (n !== n) {
        n = 0;
    } else if (n !== 0 && n !== 1 / 0 && n !== -1 / 0) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}
function ToUint32(x) {
    return x >>> 0;
}
//
// Function
// ========
//
// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5
function Empty() {}
defineProperties(FunctionPrototype, {
    bind: function bind(that) {
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function() {
            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.
                var result = target.apply(this, args.concat(array_slice.call(arguments)));
                if (Object(result) === result) {
                    return result;
                }
                return this;
            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.
                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(that, args.concat(array_slice.call(arguments)));
            }
        };
        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.
        var boundLength = Math.max(0, target.length - args.length);
        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for(var i = 0; i < boundLength; i++){
            boundArgs.push('$' + i);
        }
        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }
        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.
        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.
        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.
        // 22. Return F.
        return bound;
    }
});
//
// Array
// =====
//
// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, {
    isArray: isArray
});
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function(_, __, context) {
            if (typeof context !== 'object') {
                properlyBoxesNonStrict = false;
            }
        });
        method.call([
            1
        ], function() {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};
defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/ ) {
        var object = toObject(this), self = splitString && isString(this) ? this.split('') : object, thisp = arguments[1], i = -1, length = self.length >>> 0;
        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
        }
        while(++i < length){
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));
// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [
    0,
    1
].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this), length = self.length >>> 0;
        if (!length) {
            return -1;
        }
        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }
        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for(; i < length; i++){
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);
//
// String
// ======
//
// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14
// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]
var string_split = StringPrototype.split;
if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
    (function() {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group
        StringPrototype.split = function(separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0) {
                return [];
            }
            // If `separator` is not a regex, use native split
            if (_toString.call(separator) !== '[object RegExp]') {
                return string_split.call(this, separator, limit);
            }
            var output = [], flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + // Proposed for ES6
            (separator.sticky ? 'y' : ''), lastLastIndex = 0, // Make `global` and avoid `lastIndex` issues by working with a copy
            separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */ limit = limit === void 0 ? -1 >>> 0 : ToUint32(limit);
            while(match = separator.exec(string)){
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function() {
                            for(var i = 1; i < arguments.length - 2; i++){
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        ArrayPrototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test('')) {
                    output.push('');
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    })();
// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) {
            return [];
        }
        return string_split.call(this, separator, limit);
    };
}
// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
    }
}, hasNegativeSubstrBug);
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/escape.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex, no-misleading-character-class
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, extraLookup;
// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
    var i;
    var unrolled = {};
    var c = [];
    for(i = 0; i < 65536; i++){
        c.push(String.fromCharCode(i));
    }
    escapable.lastIndex = 0;
    c.join('').replace(escapable, function(a) {
        unrolled[a] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        return '';
    });
    escapable.lastIndex = 0;
    return unrolled;
};
// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
    quote: function(string) {
        var quoted = JSON.stringify(string);
        // In most cases this should be very fast and good enough.
        extraEscapable.lastIndex = 0;
        if (!extraEscapable.test(quoted)) {
            return quoted;
        }
        if (!extraLookup) {
            extraLookup = unrollLookup(extraEscapable);
        }
        return quoted.replace(extraEscapable, function(a) {
            return extraLookup[a];
        });
    }
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/transport.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:utils:transport');
}
module.exports = function(availableTransports) {
    return {
        filterToEnabled: function(transportsWhitelist, info) {
            var transports = {
                main: [],
                facade: []
            };
            if (!transportsWhitelist) {
                transportsWhitelist = [];
            } else if (typeof transportsWhitelist === 'string') {
                transportsWhitelist = [
                    transportsWhitelist
                ];
            }
            availableTransports.forEach(function(trans) {
                if (!trans) {
                    return;
                }
                if (trans.transportName === 'websocket' && info.websocket === false) {
                    debug('disabled from server', 'websocket');
                    return;
                }
                if (transportsWhitelist.length && transportsWhitelist.indexOf(trans.transportName) === -1) {
                    debug('not in whitelist', trans.transportName);
                    return;
                }
                if (trans.enabled(info)) {
                    debug('enabled', trans.transportName);
                    transports.main.push(trans);
                    if (trans.facadeTransport) {
                        transports.facade.push(trans.facadeTransport);
                    }
                } else {
                    debug('disabled', trans.transportName);
                }
            });
            return transports;
        }
    };
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/utils/log.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var logObject = {};
[
    'log',
    'debug',
    'warn'
].forEach(function(level) {
    var levelExists;
    try {
        levelExists = /*TURBOPACK member replacement*/ __turbopack_context__.g.console && /*TURBOPACK member replacement*/ __turbopack_context__.g.console[level] && /*TURBOPACK member replacement*/ __turbopack_context__.g.console[level].apply;
    } catch (e) {
    // do nothing
    }
    logObject[level] = levelExists ? function() {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g.console[level].apply(/*TURBOPACK member replacement*/ __turbopack_context__.g.console, arguments);
    } : level === 'log' ? function() {} : logObject.log;
});
module.exports = logObject;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/event/event.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function Event(eventType) {
    this.type = eventType;
}
Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
    this.type = eventType;
    this.bubbles = canBubble;
    this.cancelable = cancelable;
    this.timeStamp = +new Date();
    return this;
};
Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};
Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;
module.exports = Event;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/event/close.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), Event = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/event.js [app-client] (ecmascript)");
function CloseEvent() {
    Event.call(this);
    this.initEvent('close', false, false);
    this.wasClean = false;
    this.code = 0;
    this.reason = '';
}
inherits(CloseEvent, Event);
module.exports = CloseEvent;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/event/trans-message.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), Event = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/event.js [app-client] (ecmascript)");
function TransportMessageEvent(data) {
    Event.call(this);
    this.initEvent('message', false, false);
    this.data = data;
}
inherits(TransportMessageEvent, Event);
module.exports = TransportMessageEvent;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-fake.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)");
function XHRFake() {
    var self = this;
    EventEmitter.call(this);
    this.to = setTimeout(function() {
        self.emit('finish', 200, '{}');
    }, XHRFake.timeout);
}
inherits(XHRFake, EventEmitter);
XHRFake.prototype.close = function() {
    clearTimeout(this.to);
};
XHRFake.timeout = 2000;
module.exports = XHRFake;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/info-iframe.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), utils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), IframeTransport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/iframe.js [app-client] (ecmascript)"), InfoReceiverIframe = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/info-iframe-receiver.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:info-iframe');
}
function InfoIframe(baseUrl, url) {
    var self = this;
    EventEmitter.call(this);
    var go = function() {
        var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);
        ifr.once('message', function(msg) {
            if (msg) {
                var d;
                try {
                    d = JSON.parse(msg);
                } catch (e) {
                    debug('bad json', msg);
                    self.emit('finish');
                    self.close();
                    return;
                }
                var info = d[0], rtt = d[1];
                self.emit('finish', info, rtt);
            }
            self.close();
        });
        ifr.once('close', function() {
            self.emit('finish');
            self.close();
        });
    };
    // TODO this seems the same as the 'needBody' from transports
    if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.document.body) {
        utils.attachEvent('load', go);
    } else {
        go();
    }
}
inherits(InfoIframe, EventEmitter);
InfoIframe.enabled = function() {
    return IframeTransport.enabled();
};
InfoIframe.prototype.close = function() {
    if (this.ifr) {
        this.ifr.close();
    }
    this.removeAllListeners();
    this.ifr = null;
};
module.exports = InfoIframe;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/info-receiver.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var EventEmitter = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/emitter.js [app-client] (ecmascript)").EventEmitter, inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), XDR = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xdr.js [app-client] (ecmascript)"), XHRCors = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-cors.js [app-client] (ecmascript)"), XHRLocal = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-local.js [app-client] (ecmascript)"), XHRFake = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport/sender/xhr-fake.js [app-client] (ecmascript)"), InfoIframe = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/info-iframe.js [app-client] (ecmascript)"), InfoAjax = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/info-ajax.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:info-receiver');
}
function InfoReceiver(baseUrl, urlInfo) {
    debug(baseUrl);
    var self = this;
    EventEmitter.call(this);
    setTimeout(function() {
        self.doXhr(baseUrl, urlInfo);
    }, 0);
}
inherits(InfoReceiver, EventEmitter);
// TODO this is currently ignoring the list of available transports and the whitelist
InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
    // determine method of CORS support (if needed)
    if (urlInfo.sameOrigin) {
        return new InfoAjax(url, XHRLocal);
    }
    if (XHRCors.enabled) {
        return new InfoAjax(url, XHRCors);
    }
    if (XDR.enabled && urlInfo.sameScheme) {
        return new InfoAjax(url, XDR);
    }
    if (InfoIframe.enabled()) {
        return new InfoIframe(baseUrl, url);
    }
    return new InfoAjax(url, XHRFake);
};
InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
    var self = this, url = urlUtils.addPath(baseUrl, '/info');
    debug('doXhr', url);
    this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);
    this.timeoutRef = setTimeout(function() {
        debug('timeout');
        self._cleanup(false);
        self.emit('finish');
    }, InfoReceiver.timeout);
    this.xo.once('finish', function(info, rtt) {
        debug('finish', info, rtt);
        self._cleanup(true);
        self.emit('finish', info, rtt);
    });
};
InfoReceiver.prototype._cleanup = function(wasClean) {
    debug('_cleanup');
    clearTimeout(this.timeoutRef);
    this.timeoutRef = null;
    if (!wasClean && this.xo) {
        this.xo.close();
    }
    this.xo = null;
};
InfoReceiver.prototype.close = function() {
    debug('close');
    this.removeAllListeners();
    this._cleanup(false);
};
InfoReceiver.timeout = 8000;
module.exports = InfoReceiver;
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/main.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
__turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/shims.js [app-client] (ecmascript)");
var URL = __turbopack_context__.r("[project]/brainbridge/node_modules/url-parse/index.js [app-client] (ecmascript)"), inherits = __turbopack_context__.r("[project]/brainbridge/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)"), random = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/random.js [app-client] (ecmascript)"), escape = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/escape.js [app-client] (ecmascript)"), urlUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/url.js [app-client] (ecmascript)"), eventUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/event.js [app-client] (ecmascript)"), transport = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/transport.js [app-client] (ecmascript)"), objectUtils = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/object.js [app-client] (ecmascript)"), browser = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/browser.js [app-client] (ecmascript)"), log = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/utils/log.js [app-client] (ecmascript)"), Event = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/event.js [app-client] (ecmascript)"), EventTarget = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/eventtarget.js [app-client] (ecmascript)"), loc = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/location.js [app-client] (ecmascript)"), CloseEvent = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/close.js [app-client] (ecmascript)"), TransportMessageEvent = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/event/trans-message.js [app-client] (ecmascript)"), InfoReceiver = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/info-receiver.js [app-client] (ecmascript)");
var debug = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    debug = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/node_modules/debug/src/browser.js [app-client] (ecmascript)")('sockjs-client:main');
}
var transports;
// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
    if (!(this instanceof SockJS)) {
        return new SockJS(url, protocols, options);
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
    }
    EventTarget.call(this);
    this.readyState = SockJS.CONNECTING;
    this.extensions = '';
    this.protocol = '';
    // non-standard extension
    options = options || {};
    if (options.protocols_whitelist) {
        log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
    }
    this._transportsWhitelist = options.transports;
    this._transportOptions = options.transportOptions || {};
    this._timeout = options.timeout || 0;
    var sessionId = options.sessionId || 8;
    if (typeof sessionId === 'function') {
        this._generateSessionId = sessionId;
    } else if (typeof sessionId === 'number') {
        this._generateSessionId = function() {
            return random.string(sessionId);
        };
    } else {
        throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
    }
    this._server = options.server || random.numberString(1000);
    // Step 1 of WS spec - parse and validate the url. Issue #8
    var parsedUrl = new URL(url);
    if (!parsedUrl.host || !parsedUrl.protocol) {
        throw new SyntaxError("The URL '" + url + "' is invalid");
    } else if (parsedUrl.hash) {
        throw new SyntaxError('The URL must not contain a fragment');
    } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
        throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
    }
    var secure = parsedUrl.protocol === 'https:';
    // Step 2 - don't allow secure origin with an insecure protocol
    if (loc.protocol === 'https:' && !secure) {
        // exception is 127.0.0.0/8 and ::1 urls
        if (!urlUtils.isLoopbackAddr(parsedUrl.hostname)) {
            throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
        }
    }
    // Step 3 - check port access - no need here
    // Step 4 - parse protocols argument
    if (!protocols) {
        protocols = [];
    } else if (!Array.isArray(protocols)) {
        protocols = [
            protocols
        ];
    }
    // Step 5 - check protocols argument
    var sortedProtocols = protocols.sort();
    sortedProtocols.forEach(function(proto, i) {
        if (!proto) {
            throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
        }
        if (i < sortedProtocols.length - 1 && proto === sortedProtocols[i + 1]) {
            throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
        }
    });
    // Step 6 - convert origin
    var o = urlUtils.getOrigin(loc.href);
    this._origin = o ? o.toLowerCase() : null;
    // remove the trailing slash
    parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));
    // store the sanitized url
    this.url = parsedUrl.href;
    debug('using url', this.url);
    // Step 7 - start connection in background
    // obtain server info
    // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
    this._urlInfo = {
        nullOrigin: !browser.hasDomain(),
        sameOrigin: urlUtils.isOriginEqual(this.url, loc.href),
        sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
    };
    this._ir = new InfoReceiver(this.url, this._urlInfo);
    this._ir.once('finish', this._receiveInfo.bind(this));
}
inherits(SockJS, EventTarget);
function userSetCode(code) {
    return code === 1000 || code >= 3000 && code <= 4999;
}
SockJS.prototype.close = function(code, reason) {
    // Step 1
    if (code && !userSetCode(code)) {
        throw new Error('InvalidAccessError: Invalid code');
    }
    // Step 2.4 states the max is 123 bytes, but we are just checking length
    if (reason && reason.length > 123) {
        throw new SyntaxError('reason argument has an invalid length');
    }
    // Step 3.1
    if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
        return;
    }
    // TODO look at docs to determine how to set this
    var wasClean = true;
    this._close(code || 1000, reason || 'Normal closure', wasClean);
};
SockJS.prototype.send = function(data) {
    // #13 - convert anything non-string to string
    // TODO this currently turns objects into [object Object]
    if (typeof data !== 'string') {
        data = '' + data;
    }
    if (this.readyState === SockJS.CONNECTING) {
        throw new Error('InvalidStateError: The connection has not been established yet');
    }
    if (this.readyState !== SockJS.OPEN) {
        return;
    }
    this._transport.send(escape.quote(data));
};
SockJS.version = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/version.js [app-client] (ecmascript)");
SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;
SockJS.prototype._receiveInfo = function(info, rtt) {
    debug('_receiveInfo', rtt);
    this._ir = null;
    if (!info) {
        this._close(1002, 'Cannot connect to server');
        return;
    }
    // establish a round-trip timeout (RTO) based on the
    // round-trip time (RTT)
    this._rto = this.countRTO(rtt);
    // allow server to override url used for the actual transport
    this._transUrl = info.base_url ? info.base_url : this.url;
    info = objectUtils.extend(info, this._urlInfo);
    debug('info', info);
    // determine list of desired and supported transports
    var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
    this._transports = enabledTransports.main;
    debug(this._transports.length + ' enabled transports');
    this._connect();
};
SockJS.prototype._connect = function() {
    for(var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()){
        debug('attempt', Transport.transportName);
        if (Transport.needBody) {
            if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.document.body || typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.document.readyState !== 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g.document.readyState !== 'complete' && /*TURBOPACK member replacement*/ __turbopack_context__.g.document.readyState !== 'interactive') {
                debug('waiting for body');
                this._transports.unshift(Transport);
                eventUtils.attachEvent('load', this._connect.bind(this));
                return;
            }
        }
        // calculate timeout based on RTO and round trips. Default to 5s
        var timeoutMs = Math.max(this._timeout, this._rto * Transport.roundTrips || 5000);
        this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
        debug('using timeout', timeoutMs);
        var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
        var options = this._transportOptions[Transport.transportName];
        debug('transport url', transportUrl);
        var transportObj = new Transport(transportUrl, this._transUrl, options);
        transportObj.on('message', this._transportMessage.bind(this));
        transportObj.once('close', this._transportClose.bind(this));
        transportObj.transportName = Transport.transportName;
        this._transport = transportObj;
        return;
    }
    this._close(2000, 'All transports failed', false);
};
SockJS.prototype._transportTimeout = function() {
    debug('_transportTimeout');
    if (this.readyState === SockJS.CONNECTING) {
        if (this._transport) {
            this._transport.close();
        }
        this._transportClose(2007, 'Transport timed out');
    }
};
SockJS.prototype._transportMessage = function(msg) {
    debug('_transportMessage', msg);
    var self = this, type = msg.slice(0, 1), content = msg.slice(1), payload;
    // first check for messages that don't need a payload
    switch(type){
        case 'o':
            this._open();
            return;
        case 'h':
            this.dispatchEvent(new Event('heartbeat'));
            debug('heartbeat', this.transport);
            return;
    }
    if (content) {
        try {
            payload = JSON.parse(content);
        } catch (e) {
            debug('bad json', content);
        }
    }
    if (typeof payload === 'undefined') {
        debug('empty payload', content);
        return;
    }
    switch(type){
        case 'a':
            if (Array.isArray(payload)) {
                payload.forEach(function(p) {
                    debug('message', self.transport, p);
                    self.dispatchEvent(new TransportMessageEvent(p));
                });
            }
            break;
        case 'm':
            debug('message', this.transport, payload);
            this.dispatchEvent(new TransportMessageEvent(payload));
            break;
        case 'c':
            if (Array.isArray(payload) && payload.length === 2) {
                this._close(payload[0], payload[1], true);
            }
            break;
    }
};
SockJS.prototype._transportClose = function(code, reason) {
    debug('_transportClose', this.transport, code, reason);
    if (this._transport) {
        this._transport.removeAllListeners();
        this._transport = null;
        this.transport = null;
    }
    if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
        this._connect();
        return;
    }
    this._close(code, reason);
};
SockJS.prototype._open = function() {
    debug('_open', this._transport && this._transport.transportName, this.readyState);
    if (this.readyState === SockJS.CONNECTING) {
        if (this._transportTimeoutId) {
            clearTimeout(this._transportTimeoutId);
            this._transportTimeoutId = null;
        }
        this.readyState = SockJS.OPEN;
        this.transport = this._transport.transportName;
        this.dispatchEvent(new Event('open'));
        debug('connected', this.transport);
    } else {
        // The server might have been restarted, and lost track of our
        // connection.
        this._close(1006, 'Server lost session');
    }
};
SockJS.prototype._close = function(code, reason, wasClean) {
    debug('_close', this.transport, code, reason, wasClean, this.readyState);
    var forceFail = false;
    if (this._ir) {
        forceFail = true;
        this._ir.close();
        this._ir = null;
    }
    if (this._transport) {
        this._transport.close();
        this._transport = null;
        this.transport = null;
    }
    if (this.readyState === SockJS.CLOSED) {
        throw new Error('InvalidStateError: SockJS has already been closed');
    }
    this.readyState = SockJS.CLOSING;
    setTimeout((function() {
        this.readyState = SockJS.CLOSED;
        if (forceFail) {
            this.dispatchEvent(new Event('error'));
        }
        var e = new CloseEvent('close');
        e.wasClean = wasClean || false;
        e.code = code || 1000;
        e.reason = reason;
        this.dispatchEvent(e);
        this.onmessage = this.onclose = this.onerror = null;
        debug('disconnected');
    }).bind(this), 0);
};
// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
    // In a local environment, when using IE8/9 and the `jsonp-polling`
    // transport the time needed to establish a connection (the time that pass
    // from the opening of the transport to the call of `_dispatchOpen`) is
    // around 200msec (the lower bound used in the article above) and this
    // causes spurious timeouts. For this reason we calculate a value slightly
    // larger than that used in the article.
    if (rtt > 100) {
        return 4 * rtt; // rto > 400msec
    }
    return 300 + rtt; // 300msec < rto <= 400msec
};
module.exports = function(availableTransports) {
    transports = transport(availableTransports);
    __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/iframe-bootstrap.js [app-client] (ecmascript)")(SockJS, availableTransports);
    return SockJS;
};
}),
"[project]/brainbridge/node_modules/sockjs-client/lib/entry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var transportList = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/transport-list.js [app-client] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/brainbridge/node_modules/sockjs-client/lib/main.js [app-client] (ecmascript)")(transportList);
// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in /*TURBOPACK member replacement*/ __turbopack_context__.g) {
    setTimeout(/*TURBOPACK member replacement*/ __turbopack_context__.g._sockjs_onload, 1);
}
}),
"[project]/brainbridge/node_modules/@stomp/stompjs/bundles/stomp.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? factory(exports) : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(exports1) {
    'use strict';
    /**
     * @internal
     */ function augmentWebsocket(webSocket, debug) {
        webSocket.terminate = function() {
            const noOp = ()=>{};
            // set all callbacks to no op
            this.onerror = noOp;
            this.onmessage = noOp;
            this.onopen = noOp;
            const ts = new Date();
            const id = Math.random().toString().substring(2, 8); // A simulated id
            const origOnClose = this.onclose;
            // Track delay in actual closure of the socket
            this.onclose = (closeEvent)=>{
                const delay = new Date().getTime() - ts.getTime();
                debug(`Discarded socket (#${id})  closed after ${delay}ms, with code/reason: ${closeEvent.code}/${closeEvent.reason}`);
            };
            this.close();
            origOnClose?.call(webSocket, {
                code: 4001,
                reason: `Quick discarding socket (#${id}) without waiting for the shutdown sequence.`,
                wasClean: false
            });
        };
    }
    /**
     * Some byte values, used as per STOMP specifications.
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ const BYTE = {
        // LINEFEED byte (octet 10)
        LF: '\x0A',
        // NULL byte (octet 0)
        NULL: '\x00'
    };
    /**
     * Frame class represents a STOMP frame.
     *
     * @internal
     */ class FrameImpl {
        /**
         * body of the frame
         */ get body() {
            if (!this._body && this.isBinaryBody) {
                this._body = new TextDecoder().decode(this._binaryBody);
            }
            return this._body || '';
        }
        /**
         * body as Uint8Array
         */ get binaryBody() {
            if (!this._binaryBody && !this.isBinaryBody) {
                this._binaryBody = new TextEncoder().encode(this._body);
            }
            // At this stage it will definitely have a valid value
            return this._binaryBody;
        }
        /**
         * Frame constructor. `command`, `headers` and `body` are available as properties.
         *
         * @internal
         */ constructor(params){
            const { command, headers, body, binaryBody, escapeHeaderValues, skipContentLengthHeader } = params;
            this.command = command;
            this.headers = Object.assign({}, headers || {});
            if (binaryBody) {
                this._binaryBody = binaryBody;
                this.isBinaryBody = true;
            } else {
                this._body = body || '';
                this.isBinaryBody = false;
            }
            this.escapeHeaderValues = escapeHeaderValues || false;
            this.skipContentLengthHeader = skipContentLengthHeader || false;
        }
        /**
         * deserialize a STOMP Frame from raw data.
         *
         * @internal
         */ static fromRawFrame(rawFrame, escapeHeaderValues) {
            const headers = {};
            const trim = (str)=>str.replace(/^\s+|\s+$/g, '');
            // In case of repeated headers, as per standards, first value need to be used
            for (const header of rawFrame.headers.reverse()){
                header.indexOf(':');
                const key = trim(header[0]);
                let value = trim(header[1]);
                if (escapeHeaderValues && rawFrame.command !== 'CONNECT' && rawFrame.command !== 'CONNECTED') {
                    value = FrameImpl.hdrValueUnEscape(value);
                }
                headers[key] = value;
            }
            return new FrameImpl({
                command: rawFrame.command,
                headers,
                binaryBody: rawFrame.binaryBody,
                escapeHeaderValues
            });
        }
        /**
         * @internal
         */ toString() {
            return this.serializeCmdAndHeaders();
        }
        /**
         * serialize this Frame in a format suitable to be passed to WebSocket.
         * If the body is string the output will be string.
         * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
         *
         * @internal
         */ serialize() {
            const cmdAndHeaders = this.serializeCmdAndHeaders();
            if (this.isBinaryBody) {
                return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
            } else {
                return cmdAndHeaders + this._body + BYTE.NULL;
            }
        }
        serializeCmdAndHeaders() {
            const lines = [
                this.command
            ];
            if (this.skipContentLengthHeader) {
                delete this.headers['content-length'];
            }
            for (const name of Object.keys(this.headers || {})){
                const value = this.headers[name];
                if (this.escapeHeaderValues && this.command !== 'CONNECT' && this.command !== 'CONNECTED') {
                    lines.push(`${name}:${FrameImpl.hdrValueEscape(`${value}`)}`);
                } else {
                    lines.push(`${name}:${value}`);
                }
            }
            if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) {
                lines.push(`content-length:${this.bodyLength()}`);
            }
            return lines.join(BYTE.LF) + BYTE.LF + BYTE.LF;
        }
        isBodyEmpty() {
            return this.bodyLength() === 0;
        }
        bodyLength() {
            const binaryBody = this.binaryBody;
            return binaryBody ? binaryBody.length : 0;
        }
        /**
         * Compute the size of a UTF-8 string by counting its number of bytes
         * (and not the number of characters composing the string)
         */ static sizeOfUTF8(s) {
            return s ? new TextEncoder().encode(s).length : 0;
        }
        static toUnit8Array(cmdAndHeaders, binaryBody) {
            const uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
            const nullTerminator = new Uint8Array([
                0
            ]);
            const uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
            uint8Frame.set(uint8CmdAndHeaders);
            uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
            uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
            return uint8Frame;
        }
        /**
         * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
         *
         * @internal
         */ static marshall(params) {
            const frame = new FrameImpl(params);
            return frame.serialize();
        }
        /**
         *  Escape header values
         */ static hdrValueEscape(str) {
            return str.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
        }
        /**
         * UnEscape header values
         */ static hdrValueUnEscape(str) {
            return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
        }
    }
    /**
     * @internal
     */ const NULL = 0;
    /**
     * @internal
     */ const LF = 10;
    /**
     * @internal
     */ const CR = 13;
    /**
     * @internal
     */ const COLON = 58;
    /**
     * This is an evented, rec descent parser.
     * A stream of Octets can be passed and whenever it recognizes
     * a complete Frame or an incoming ping it will invoke the registered callbacks.
     *
     * All incoming Octets are fed into _onByte function.
     * Depending on current state the _onByte function keeps changing.
     * Depending on the state it keeps accumulating into _token and _results.
     * State is indicated by current value of _onByte, all states are named as _collect.
     *
     * STOMP standards https://stomp.github.io/stomp-specification-1.2.html
     * imply that all lengths are considered in bytes (instead of string lengths).
     * So, before actual parsing, if the incoming data is String it is converted to Octets.
     * This allows faithful implementation of the protocol and allows NULL Octets to be present in the body.
     *
     * There is no peek function on the incoming data.
     * When a state change occurs based on an Octet without consuming the Octet,
     * the Octet, after state change, is fed again (_reinjectByte).
     * This became possible as the state change can be determined by inspecting just one Octet.
     *
     * There are two modes to collect the body, if content-length header is there then it by counting Octets
     * otherwise it is determined by NULL terminator.
     *
     * Following the standards, the command and headers are converted to Strings
     * and the body is returned as Octets.
     * Headers are returned as an array and not as Hash - to allow multiple occurrence of an header.
     *
     * This parser does not use Regular Expressions as that can only operate on Strings.
     *
     * It handles if multiple STOMP frames are given as one chunk, a frame is split into multiple chunks, or
     * any combination there of. The parser remembers its state (any partial frame) and continues when a new chunk
     * is pushed.
     *
     * Typically the higher level function will convert headers to Hash, handle unescaping of header values
     * (which is protocol version specific), and convert body to text.
     *
     * Check the parser.spec.js to understand cases that this parser is supposed to handle.
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ class Parser {
        constructor(onFrame, onIncomingPing){
            this.onFrame = onFrame;
            this.onIncomingPing = onIncomingPing;
            this._encoder = new TextEncoder();
            this._decoder = new TextDecoder();
            this._token = [];
            this._initState();
        }
        parseChunk(segment, appendMissingNULLonIncoming = false) {
            let chunk;
            if (typeof segment === 'string') {
                chunk = this._encoder.encode(segment);
            } else {
                chunk = new Uint8Array(segment);
            }
            // See https://github.com/stomp-js/stompjs/issues/89
            // Remove when underlying issue is fixed.
            //
            // Send a NULL byte, if the last byte of a Text frame was not NULL.F
            if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
                const chunkWithNull = new Uint8Array(chunk.length + 1);
                chunkWithNull.set(chunk, 0);
                chunkWithNull[chunk.length] = 0;
                chunk = chunkWithNull;
            }
            // tslint:disable-next-line:prefer-for-of
            for(let i = 0; i < chunk.length; i++){
                const byte = chunk[i];
                this._onByte(byte);
            }
        }
        // The following implements a simple Rec Descent Parser.
        // The grammar is simple and just one byte tells what should be the next state
        _collectFrame(byte) {
            if (byte === NULL) {
                // Ignore
                return;
            }
            if (byte === CR) {
                // Ignore CR
                return;
            }
            if (byte === LF) {
                // Incoming Ping
                this.onIncomingPing();
                return;
            }
            this._onByte = this._collectCommand;
            this._reinjectByte(byte);
        }
        _collectCommand(byte) {
            if (byte === CR) {
                // Ignore CR
                return;
            }
            if (byte === LF) {
                this._results.command = this._consumeTokenAsUTF8();
                this._onByte = this._collectHeaders;
                return;
            }
            this._consumeByte(byte);
        }
        _collectHeaders(byte) {
            if (byte === CR) {
                // Ignore CR
                return;
            }
            if (byte === LF) {
                this._setupCollectBody();
                return;
            }
            this._onByte = this._collectHeaderKey;
            this._reinjectByte(byte);
        }
        _reinjectByte(byte) {
            this._onByte(byte);
        }
        _collectHeaderKey(byte) {
            if (byte === COLON) {
                this._headerKey = this._consumeTokenAsUTF8();
                this._onByte = this._collectHeaderValue;
                return;
            }
            this._consumeByte(byte);
        }
        _collectHeaderValue(byte) {
            if (byte === CR) {
                // Ignore CR
                return;
            }
            if (byte === LF) {
                this._results.headers.push([
                    this._headerKey,
                    this._consumeTokenAsUTF8()
                ]);
                this._headerKey = undefined;
                this._onByte = this._collectHeaders;
                return;
            }
            this._consumeByte(byte);
        }
        _setupCollectBody() {
            const contentLengthHeader = this._results.headers.filter((header)=>{
                return header[0] === 'content-length';
            })[0];
            if (contentLengthHeader) {
                this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
                this._onByte = this._collectBodyFixedSize;
            } else {
                this._onByte = this._collectBodyNullTerminated;
            }
        }
        _collectBodyNullTerminated(byte) {
            if (byte === NULL) {
                this._retrievedBody();
                return;
            }
            this._consumeByte(byte);
        }
        _collectBodyFixedSize(byte) {
            // It is post decrement, so that we discard the trailing NULL octet
            if (this._bodyBytesRemaining-- === 0) {
                this._retrievedBody();
                return;
            }
            this._consumeByte(byte);
        }
        _retrievedBody() {
            this._results.binaryBody = this._consumeTokenAsRaw();
            try {
                this.onFrame(this._results);
            } catch (e) {
                console.log(`Ignoring an exception thrown by a frame handler. Original exception: `, e);
            }
            this._initState();
        }
        // Rec Descent Parser helpers
        _consumeByte(byte) {
            this._token.push(byte);
        }
        _consumeTokenAsUTF8() {
            return this._decoder.decode(this._consumeTokenAsRaw());
        }
        _consumeTokenAsRaw() {
            const rawResult = new Uint8Array(this._token);
            this._token = [];
            return rawResult;
        }
        _initState() {
            this._results = {
                command: undefined,
                headers: [],
                binaryBody: undefined
            };
            this._token = [];
            this._headerKey = undefined;
            this._onByte = this._collectFrame;
        }
    }
    /**
     * Possible states for the IStompSocket
     */ exports1.StompSocketState = void 0;
    (function(StompSocketState) {
        StompSocketState[StompSocketState["CONNECTING"] = 0] = "CONNECTING";
        StompSocketState[StompSocketState["OPEN"] = 1] = "OPEN";
        StompSocketState[StompSocketState["CLOSING"] = 2] = "CLOSING";
        StompSocketState[StompSocketState["CLOSED"] = 3] = "CLOSED";
    })(exports1.StompSocketState || (exports1.StompSocketState = {}));
    /**
     * Possible activation state
     */ exports1.ActivationState = void 0;
    (function(ActivationState) {
        ActivationState[ActivationState["ACTIVE"] = 0] = "ACTIVE";
        ActivationState[ActivationState["DEACTIVATING"] = 1] = "DEACTIVATING";
        ActivationState[ActivationState["INACTIVE"] = 2] = "INACTIVE";
    })(exports1.ActivationState || (exports1.ActivationState = {}));
    /**
     * Possible reconnection wait time modes
     */ exports1.ReconnectionTimeMode = void 0;
    (function(ReconnectionTimeMode) {
        ReconnectionTimeMode[ReconnectionTimeMode["LINEAR"] = 0] = "LINEAR";
        ReconnectionTimeMode[ReconnectionTimeMode["EXPONENTIAL"] = 1] = "EXPONENTIAL";
    })(exports1.ReconnectionTimeMode || (exports1.ReconnectionTimeMode = {}));
    /**
     * Possible ticker strategies for outgoing heartbeat ping
     */ exports1.TickerStrategy = void 0;
    (function(TickerStrategy) {
        TickerStrategy["Interval"] = "interval";
        TickerStrategy["Worker"] = "worker";
    })(exports1.TickerStrategy || (exports1.TickerStrategy = {}));
    class Ticker {
        constructor(_interval, _strategy = exports1.TickerStrategy.Interval, _debug){
            this._interval = _interval;
            this._strategy = _strategy;
            this._debug = _debug;
            this._workerScript = `
    var startTime = Date.now();
    setInterval(function() {
        self.postMessage(Date.now() - startTime);
    }, ${this._interval});
  `;
        }
        start(tick) {
            this.stop();
            if (this.shouldUseWorker()) {
                this.runWorker(tick);
            } else {
                this.runInterval(tick);
            }
        }
        stop() {
            this.disposeWorker();
            this.disposeInterval();
        }
        shouldUseWorker() {
            return typeof Worker !== 'undefined' && this._strategy === exports1.TickerStrategy.Worker;
        }
        runWorker(tick) {
            this._debug('Using runWorker for outgoing pings');
            if (!this._worker) {
                this._worker = new Worker(URL.createObjectURL(new Blob([
                    this._workerScript
                ], {
                    type: 'text/javascript'
                })));
                this._worker.onmessage = (message)=>tick(message.data);
            }
        }
        runInterval(tick) {
            this._debug('Using runInterval for outgoing pings');
            if (!this._timer) {
                const startTime = Date.now();
                this._timer = setInterval(()=>{
                    tick(Date.now() - startTime);
                }, this._interval);
            }
        }
        disposeWorker() {
            if (this._worker) {
                this._worker.terminate();
                delete this._worker;
                this._debug('Outgoing ping disposeWorker');
            }
        }
        disposeInterval() {
            if (this._timer) {
                clearInterval(this._timer);
                delete this._timer;
                this._debug('Outgoing ping disposeInterval');
            }
        }
    }
    /**
     * Supported STOMP versions
     *
     * Part of `@stomp/stompjs`.
     */ class Versions {
        /**
         * Takes an array of versions, typical elements '1.2', '1.1', or '1.0'
         *
         * You will be creating an instance of this class if you want to override
         * supported versions to be declared during STOMP handshake.
         */ constructor(versions){
            this.versions = versions;
        }
        /**
         * Used as part of CONNECT STOMP Frame
         */ supportedVersions() {
            return this.versions.join(',');
        }
        /**
         * Used while creating a WebSocket
         */ protocolVersions() {
            return this.versions.map((x)=>`v${x.replace('.', '')}.stomp`);
        }
    }
    /**
     * Indicates protocol version 1.0
     */ Versions.V1_0 = '1.0';
    /**
     * Indicates protocol version 1.1
     */ Versions.V1_1 = '1.1';
    /**
     * Indicates protocol version 1.2
     */ Versions.V1_2 = '1.2';
    /**
     * @internal
     */ Versions.default = new Versions([
        Versions.V1_2,
        Versions.V1_1,
        Versions.V1_0
    ]);
    /**
     * The STOMP protocol handler
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ class StompHandler {
        get connectedVersion() {
            return this._connectedVersion;
        }
        get connected() {
            return this._connected;
        }
        constructor(_client, _webSocket, config){
            this._client = _client;
            this._webSocket = _webSocket;
            this._connected = false;
            this._serverFrameHandlers = {
                // [CONNECTED Frame](https://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
                CONNECTED: (frame)=>{
                    this.debug(`connected to server ${frame.headers.server}`);
                    this._connected = true;
                    this._connectedVersion = frame.headers.version;
                    // STOMP version 1.2 needs header values to be escaped
                    if (this._connectedVersion === Versions.V1_2) {
                        this._escapeHeaderValues = true;
                    }
                    this._setupHeartbeat(frame.headers);
                    this.onConnect(frame);
                },
                // [MESSAGE Frame](https://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
                MESSAGE: (frame)=>{
                    // the callback is registered when the client calls
                    // `subscribe()`.
                    // If there is no registered subscription for the received message,
                    // the default `onUnhandledMessage` callback is used that the client can set.
                    // This is useful for subscriptions that are automatically created
                    // on the browser side (e.g. [RabbitMQ's temporary
                    // queues](https://www.rabbitmq.com/stomp.html)).
                    const subscription = frame.headers.subscription;
                    const onReceive = this._subscriptions[subscription] || this.onUnhandledMessage;
                    // bless the frame to be a Message
                    const message = frame;
                    const client = this;
                    const messageId = this._connectedVersion === Versions.V1_2 ? message.headers.ack : message.headers['message-id'];
                    // add `ack()` and `nack()` methods directly to the returned frame
                    // so that a simple call to `message.ack()` can acknowledge the message.
                    message.ack = (headers = {})=>{
                        return client.ack(messageId, subscription, headers);
                    };
                    message.nack = (headers = {})=>{
                        return client.nack(messageId, subscription, headers);
                    };
                    onReceive(message);
                },
                // [RECEIPT Frame](https://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
                RECEIPT: (frame)=>{
                    const callback = this._receiptWatchers[frame.headers['receipt-id']];
                    if (callback) {
                        callback(frame);
                        // Server will acknowledge only once, remove the callback
                        delete this._receiptWatchers[frame.headers['receipt-id']];
                    } else {
                        this.onUnhandledReceipt(frame);
                    }
                },
                // [ERROR Frame](https://stomp.github.com/stomp-specification-1.2.html#ERROR)
                ERROR: (frame)=>{
                    this.onStompError(frame);
                }
            };
            // used to index subscribers
            this._counter = 0;
            // subscription callbacks indexed by subscriber's ID
            this._subscriptions = {};
            // receipt-watchers indexed by receipts-ids
            this._receiptWatchers = {};
            this._partialData = '';
            this._escapeHeaderValues = false;
            this._lastServerActivityTS = Date.now();
            this.debug = config.debug;
            this.stompVersions = config.stompVersions;
            this.connectHeaders = config.connectHeaders;
            this.disconnectHeaders = config.disconnectHeaders;
            this.heartbeatIncoming = config.heartbeatIncoming;
            this.heartbeatToleranceMultiplier = config.heartbeatGracePeriods;
            this.heartbeatOutgoing = config.heartbeatOutgoing;
            this.splitLargeFrames = config.splitLargeFrames;
            this.maxWebSocketChunkSize = config.maxWebSocketChunkSize;
            this.forceBinaryWSFrames = config.forceBinaryWSFrames;
            this.logRawCommunication = config.logRawCommunication;
            this.appendMissingNULLonIncoming = config.appendMissingNULLonIncoming;
            this.discardWebsocketOnCommFailure = config.discardWebsocketOnCommFailure;
            this.onConnect = config.onConnect;
            this.onDisconnect = config.onDisconnect;
            this.onStompError = config.onStompError;
            this.onWebSocketClose = config.onWebSocketClose;
            this.onWebSocketError = config.onWebSocketError;
            this.onUnhandledMessage = config.onUnhandledMessage;
            this.onUnhandledReceipt = config.onUnhandledReceipt;
            this.onUnhandledFrame = config.onUnhandledFrame;
            this.onHeartbeatReceived = config.onHeartbeatReceived;
            this.onHeartbeatLost = config.onHeartbeatLost;
        }
        start() {
            const parser = new Parser(// On Frame
            (rawFrame)=>{
                const frame = FrameImpl.fromRawFrame(rawFrame, this._escapeHeaderValues);
                // if this.logRawCommunication is set, the rawChunk is logged at this._webSocket.onmessage
                if (!this.logRawCommunication) {
                    this.debug(`<<< ${frame}`);
                }
                const serverFrameHandler = this._serverFrameHandlers[frame.command] || this.onUnhandledFrame;
                serverFrameHandler(frame);
            }, // On Incoming Ping
            ()=>{
                this.debug('<<< PONG');
                this.onHeartbeatReceived();
            });
            this._webSocket.onmessage = (evt)=>{
                this.debug('Received data');
                this._lastServerActivityTS = Date.now();
                if (this.logRawCommunication) {
                    const rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;
                    this.debug(`<<< ${rawChunkAsString}`);
                }
                parser.parseChunk(evt.data, this.appendMissingNULLonIncoming);
            };
            this._webSocket.onclose = (closeEvent)=>{
                this.debug(`Connection closed to ${this._webSocket.url}`);
                this._cleanUp();
                this.onWebSocketClose(closeEvent);
            };
            this._webSocket.onerror = (errorEvent)=>{
                this.onWebSocketError(errorEvent);
            };
            const onOpen = ()=>{
                // Clone before updating
                const connectHeaders = Object.assign({}, this.connectHeaders);
                this.debug('Web Socket Opened...');
                connectHeaders['accept-version'] = this.stompVersions.supportedVersions();
                connectHeaders['heart-beat'] = [
                    this.heartbeatOutgoing,
                    this.heartbeatIncoming
                ].join(',');
                this._transmit({
                    command: 'CONNECT',
                    headers: connectHeaders
                });
            };
            if (this._webSocket.readyState === exports1.StompSocketState.OPEN) {
                onOpen();
            } else {
                this._webSocket.onopen = onOpen;
            }
        }
        _setupHeartbeat(headers) {
            if (headers.version !== Versions.V1_1 && headers.version !== Versions.V1_2) {
                return;
            }
            // It is valid for the server to not send this header
            // https://stomp.github.io/stomp-specification-1.2.html#Heart-beating
            if (!headers['heart-beat']) {
                return;
            }
            // heart-beat header received from the server looks like:
            //
            //     heart-beat: sx, sy
            const [serverOutgoing, serverIncoming] = headers['heart-beat'].split(',').map((v)=>parseInt(v, 10));
            if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
                const ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
                this.debug(`send PING every ${ttl}ms`);
                this._pinger = new Ticker(ttl, this._client.heartbeatStrategy, this.debug);
                this._pinger.start(()=>{
                    if (this._webSocket.readyState === exports1.StompSocketState.OPEN) {
                        this._webSocket.send(BYTE.LF);
                        this.debug('>>> PING');
                    }
                });
            }
            if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
                const ttl = Math.max(this.heartbeatIncoming, serverOutgoing);
                this.debug(`check PONG every ${ttl}ms`);
                this._ponger = setInterval(()=>{
                    const delta = Date.now() - this._lastServerActivityTS;
                    // We wait multiple grace periods to be flexible on window's setInterval calls
                    if (delta > ttl * this.heartbeatToleranceMultiplier) {
                        this.debug(`did not receive server activity for the last ${delta}ms`);
                        this.onHeartbeatLost();
                        this._closeOrDiscardWebsocket();
                    }
                }, ttl);
            }
        }
        _closeOrDiscardWebsocket() {
            if (this.discardWebsocketOnCommFailure) {
                this.debug('Discarding websocket, the underlying socket may linger for a while');
                this.discardWebsocket();
            } else {
                this.debug('Issuing close on the websocket');
                this._closeWebsocket();
            }
        }
        forceDisconnect() {
            if (this._webSocket) {
                if (this._webSocket.readyState === exports1.StompSocketState.CONNECTING || this._webSocket.readyState === exports1.StompSocketState.OPEN) {
                    this._closeOrDiscardWebsocket();
                }
            }
        }
        _closeWebsocket() {
            this._webSocket.onmessage = ()=>{}; // ignore messages
            this._webSocket.close();
        }
        discardWebsocket() {
            if (typeof this._webSocket.terminate !== 'function') {
                augmentWebsocket(this._webSocket, (msg)=>this.debug(msg));
            }
            // @ts-ignore - this method will be there at this stage
            this._webSocket.terminate();
        }
        _transmit(params) {
            const { command, headers, body, binaryBody, skipContentLengthHeader } = params;
            const frame = new FrameImpl({
                command,
                headers,
                body,
                binaryBody,
                escapeHeaderValues: this._escapeHeaderValues,
                skipContentLengthHeader
            });
            let rawChunk = frame.serialize();
            if (this.logRawCommunication) {
                this.debug(`>>> ${rawChunk}`);
            } else {
                this.debug(`>>> ${frame}`);
            }
            if (this.forceBinaryWSFrames && typeof rawChunk === 'string') {
                rawChunk = new TextEncoder().encode(rawChunk);
            }
            if (typeof rawChunk !== 'string' || !this.splitLargeFrames) {
                this._webSocket.send(rawChunk);
            } else {
                let out = rawChunk;
                while(out.length > 0){
                    const chunk = out.substring(0, this.maxWebSocketChunkSize);
                    out = out.substring(this.maxWebSocketChunkSize);
                    this._webSocket.send(chunk);
                    this.debug(`chunk sent = ${chunk.length}, remaining = ${out.length}`);
                }
            }
        }
        dispose() {
            if (this.connected) {
                try {
                    // clone before updating
                    const disconnectHeaders = Object.assign({}, this.disconnectHeaders);
                    if (!disconnectHeaders.receipt) {
                        disconnectHeaders.receipt = `close-${this._counter++}`;
                    }
                    this.watchForReceipt(disconnectHeaders.receipt, (frame)=>{
                        this._closeWebsocket();
                        this._cleanUp();
                        this.onDisconnect(frame);
                    });
                    this._transmit({
                        command: 'DISCONNECT',
                        headers: disconnectHeaders
                    });
                } catch (error) {
                    this.debug(`Ignoring error during disconnect ${error}`);
                }
            } else {
                if (this._webSocket.readyState === exports1.StompSocketState.CONNECTING || this._webSocket.readyState === exports1.StompSocketState.OPEN) {
                    this._closeWebsocket();
                }
            }
        }
        _cleanUp() {
            this._connected = false;
            if (this._pinger) {
                this._pinger.stop();
                this._pinger = undefined;
            }
            if (this._ponger) {
                clearInterval(this._ponger);
                this._ponger = undefined;
            }
        }
        publish(params) {
            const { destination, headers, body, binaryBody, skipContentLengthHeader } = params;
            const hdrs = Object.assign({
                destination
            }, headers);
            this._transmit({
                command: 'SEND',
                headers: hdrs,
                body,
                binaryBody,
                skipContentLengthHeader
            });
        }
        watchForReceipt(receiptId, callback) {
            this._receiptWatchers[receiptId] = callback;
        }
        subscribe(destination, callback, headers = {}) {
            headers = Object.assign({}, headers);
            if (!headers.id) {
                headers.id = `sub-${this._counter++}`;
            }
            headers.destination = destination;
            this._subscriptions[headers.id] = callback;
            this._transmit({
                command: 'SUBSCRIBE',
                headers
            });
            const client = this;
            return {
                id: headers.id,
                unsubscribe (hdrs) {
                    return client.unsubscribe(headers.id, hdrs);
                }
            };
        }
        unsubscribe(id, headers = {}) {
            headers = Object.assign({}, headers);
            delete this._subscriptions[id];
            headers.id = id;
            this._transmit({
                command: 'UNSUBSCRIBE',
                headers
            });
        }
        begin(transactionId) {
            const txId = transactionId || `tx-${this._counter++}`;
            this._transmit({
                command: 'BEGIN',
                headers: {
                    transaction: txId
                }
            });
            const client = this;
            return {
                id: txId,
                commit () {
                    client.commit(txId);
                },
                abort () {
                    client.abort(txId);
                }
            };
        }
        commit(transactionId) {
            this._transmit({
                command: 'COMMIT',
                headers: {
                    transaction: transactionId
                }
            });
        }
        abort(transactionId) {
            this._transmit({
                command: 'ABORT',
                headers: {
                    transaction: transactionId
                }
            });
        }
        ack(messageId, subscriptionId, headers = {}) {
            headers = Object.assign({}, headers);
            if (this._connectedVersion === Versions.V1_2) {
                headers.id = messageId;
            } else {
                headers['message-id'] = messageId;
            }
            headers.subscription = subscriptionId;
            this._transmit({
                command: 'ACK',
                headers
            });
        }
        nack(messageId, subscriptionId, headers = {}) {
            headers = Object.assign({}, headers);
            if (this._connectedVersion === Versions.V1_2) {
                headers.id = messageId;
            } else {
                headers['message-id'] = messageId;
            }
            headers.subscription = subscriptionId;
            return this._transmit({
                command: 'NACK',
                headers
            });
        }
    }
    /**
     * STOMP Client Class.
     *
     * Part of `@stomp/stompjs`.
     *
     * This class provides a robust implementation for connecting to and interacting with a
     * STOMP-compliant messaging broker over WebSocket. It supports STOMP versions 1.2, 1.1, and 1.0.
     *
     * Features:
     * - Handles automatic reconnections.
     * - Supports heartbeat mechanisms to detect and report communication failures.
     * - Allows customization of connection and WebSocket behaviors through configurations.
     * - Compatible with both browser environments and Node.js with polyfill support for WebSocket.
     */ class Client {
        /**
         * Provides access to the underlying WebSocket instance.
         * This property is **read-only**.
         *
         * Example:
         * ```javascript
         * const webSocket = client.webSocket;
         * if (webSocket) {
         *   console.log('WebSocket is connected:', webSocket.readyState === WebSocket.OPEN);
         * }
         * ```
         *
         * **Caution:**
         * Directly interacting with the WebSocket instance (e.g., sending or receiving frames)
         * can interfere with the proper functioning of this library. Such actions may cause
         * unexpected behavior, disconnections, or invalid state in the library's internal mechanisms.
         *
         * Instead, use the library's provided methods to manage STOMP communication.
         *
         * @returns The WebSocket instance used by the STOMP handler, or `undefined` if not connected.
         */ get webSocket() {
            return this._stompHandler?._webSocket;
        }
        /**
         * Allows customization of the disconnection headers.
         *
         * Any changes made during an active session will also be applied immediately.
         *
         * Example:
         * ```javascript
         * client.disconnectHeaders = {
         *   receipt: 'custom-receipt-id'
         * };
         * ```
         */ get disconnectHeaders() {
            return this._disconnectHeaders;
        }
        set disconnectHeaders(value) {
            this._disconnectHeaders = value;
            if (this._stompHandler) {
                this._stompHandler.disconnectHeaders = this._disconnectHeaders;
            }
        }
        /**
         * Indicates whether there is an active connection to the STOMP broker.
         *
         * Usage:
         * ```javascript
         * if (client.connected) {
         *   console.log('Client is connected to the broker.');
         * } else {
         *   console.log('No connection to the broker.');
         * }
         * ```
         *
         * @returns `true` if the client is currently connected, `false` otherwise.
         */ get connected() {
            return !!this._stompHandler && this._stompHandler.connected;
        }
        /**
         * The version of the STOMP protocol negotiated with the server during connection.
         *
         * This is a **read-only** property and reflects the negotiated protocol version after
         * a successful connection.
         *
         * Example:
         * ```javascript
         * console.log('Connected STOMP version:', client.connectedVersion);
         * ```
         *
         * @returns The negotiated STOMP protocol version or `undefined` if not connected.
         */ get connectedVersion() {
            return this._stompHandler ? this._stompHandler.connectedVersion : undefined;
        }
        /**
         * Indicates whether the client is currently active.
         *
         * A client is considered active if it is connected or actively attempting to reconnect.
         *
         * Example:
         * ```javascript
         * if (client.active) {
         *   console.log('The client is active.');
         * } else {
         *   console.log('The client is inactive.');
         * }
         * ```
         *
         * @returns `true` if the client is active, otherwise `false`.
         */ get active() {
            return this.state === exports1.ActivationState.ACTIVE;
        }
        _changeState(state) {
            this.state = state;
            this.onChangeState(state);
        }
        /**
         * Constructs a new STOMP client instance.
         *
         * The constructor initializes default values and sets up no-op callbacks for all events.
         * Configuration can be passed during construction, or updated later using `configure`.
         *
         * Example:
         * ```javascript
         * const client = new Client({
         *   brokerURL: 'wss://broker.example.com',
         *   reconnectDelay: 5000
         * });
         * ```
         *
         * @param conf Optional configuration object to initialize the client with.
         */ constructor(conf = {}){
            /**
             * STOMP protocol versions to use during the handshake. By default, the client will attempt
             * versions `1.2`, `1.1`, and `1.0` in descending order of preference.
             *
             * Example:
             * ```javascript
             * // Configure the client to only use versions 1.1 and 1.0
             * client.stompVersions = new Versions(['1.1', '1.0']);
             * ```
             */ this.stompVersions = Versions.default;
            /**
             * Timeout for establishing STOMP connection, in milliseconds.
             *
             * If the connection is not established within this period, the attempt will fail.
             * The default is `0`, meaning no timeout is set for connection attempts.
             *
             * Example:
             * ```javascript
             * client.connectionTimeout = 5000; // Fail connection if not established in 5 seconds
             * ```
             */ this.connectionTimeout = 0;
            /**
             * Delay (in milliseconds) between reconnection attempts if the connection drops.
             *
             * Set to `0` to disable automatic reconnections. The default value is `5000` ms (5 seconds).
             *
             * Example:
             * ```javascript
             * client.reconnectDelay = 3000; // Attempt reconnection every 3 seconds
             * client.reconnectDelay = 0; // Disable automatic reconnection
             * ```
             */ this.reconnectDelay = 5000;
            /**
             * The next reconnection delay, used internally.
             * Initialized to the value of [Client#reconnectDelay]{@link Client#reconnectDelay}, and it may
             * dynamically change based on [Client#reconnectTimeMode]{@link Client#reconnectTimeMode}.
             */ this._nextReconnectDelay = 0;
            /**
             * Maximum delay (in milliseconds) between reconnection attempts when using exponential backoff.
             *
             * Default is 15 minutes (`15 * 60 * 1000` milliseconds). If `0`, there will be no upper limit.
             *
             * Example:
             * ```javascript
             * client.maxReconnectDelay = 10000; // Maximum wait time is 10 seconds
             * ```
             */ this.maxReconnectDelay = 15 * 60 * 1000;
            /**
             * Mode for determining the time interval between reconnection attempts.
             *
             * Available modes:
             * - `ReconnectionTimeMode.LINEAR` (default): Fixed delays between reconnection attempts.
             * - `ReconnectionTimeMode.EXPONENTIAL`: Delay doubles after each attempt, capped by [maxReconnectDelay]{@link Client#maxReconnectDelay}.
             *
             * Example:
             * ```javascript
             * client.reconnectTimeMode = ReconnectionTimeMode.EXPONENTIAL;
             * client.reconnectDelay = 200; // Initial delay of 200 ms, doubles with each attempt
             * client.maxReconnectDelay = 2 * 60 * 1000; // Cap delay at 10 minutes
             * ```
             */ this.reconnectTimeMode = exports1.ReconnectionTimeMode.LINEAR;
            /**
             * Interval (in milliseconds) for receiving heartbeat signals from the server.
             *
             * Specifies the expected frequency of heartbeats sent by the server. Set to `0` to disable.
             *
             * Example:
             * ```javascript
             * client.heartbeatIncoming = 10000; // Expect a heartbeat every 10 seconds
             * ```
             */ this.heartbeatIncoming = 10000;
            /**
             * Multiplier for adjusting tolerance when processing heartbeat signals.
             *
             * Tolerance level is calculated using the multiplier:
             * `tolerance = heartbeatIncoming * heartbeatToleranceMultiplier`.
             * This helps account for delays in network communication or variations in timings.
             *
             * Default value is `2`.
             *
             * Example:
             * ```javascript
             * client.heartbeatToleranceMultiplier = 2.5; // Tolerates longer delays
             * ```
             */ this.heartbeatToleranceMultiplier = 2;
            /**
             * Interval (in milliseconds) for sending heartbeat signals to the server.
             *
             * Specifies how frequently heartbeats should be sent to the server. Set to `0` to disable.
             *
             * Example:
             * ```javascript
             * client.heartbeatOutgoing = 5000; // Send a heartbeat every 5 seconds
             * ```
             */ this.heartbeatOutgoing = 10000;
            /**
             * Strategy for sending outgoing heartbeats.
             *
             * Options:
             * - `TickerStrategy.Worker`: Uses Web Workers for sending heartbeats (recommended for long-running or background sessions).
             * - `TickerStrategy.Interval`: Uses standard JavaScript `setInterval` (default).
             *
             * Note:
             * - If Web Workers are unavailable (e.g., in Node.js), the `Interval` strategy is used automatically.
             * - Web Workers are preferable in browsers for reducing disconnects when tabs are in the background.
             *
             * Example:
             * ```javascript
             * client.heartbeatStrategy = TickerStrategy.Worker;
             * ```
             */ this.heartbeatStrategy = exports1.TickerStrategy.Interval;
            /**
             * Enables splitting of large text WebSocket frames into smaller chunks.
             *
             * This setting is enabled for brokers that support only chunked messages (e.g., Java Spring-based brokers).
             * Default is `false`.
             *
             * Warning:
             * - Should not be used with WebSocket-compliant brokers, as chunking may cause large message failures.
             * - Binary WebSocket frames are never split.
             *
             * Example:
             * ```javascript
             * client.splitLargeFrames = true;
             * client.maxWebSocketChunkSize = 4096; // Allow chunks of 4 KB
             * ```
             */ this.splitLargeFrames = false;
            /**
             * Maximum size (in bytes) for individual WebSocket chunks if [splitLargeFrames]{@link Client#splitLargeFrames} is enabled.
             *
             * Default is 8 KB (`8 * 1024` bytes). This value has no effect if [splitLargeFrames]{@link Client#splitLargeFrames} is `false`.
             */ this.maxWebSocketChunkSize = 8 * 1024;
            /**
             * Forces all WebSocket frames to use binary transport, irrespective of payload type.
             *
             * Default behavior determines frame type based on payload (e.g., binary data for ArrayBuffers).
             *
             * Example:
             * ```javascript
             * client.forceBinaryWSFrames = true;
             * ```
             */ this.forceBinaryWSFrames = false;
            /**
             * Workaround for a React Native WebSocket bug, where messages containing `NULL` are chopped.
             *
             * Enabling this appends a `NULL` character to incoming frames to ensure they remain valid STOMP packets.
             *
             * Warning:
             * - For brokers that split large messages, this may cause data loss or connection termination.
             *
             * Example:
             * ```javascript
             * client.appendMissingNULLonIncoming = true;
             * ```
             */ this.appendMissingNULLonIncoming = false;
            /**
             * Instruct the library to immediately terminate the socket on communication failures, even
             * before the WebSocket is completely closed.
             *
             * This is particularly useful in browser environments where WebSocket closure may get delayed,
             * causing prolonged reconnection intervals under certain failure conditions.
             *
             *
             * Example:
             * ```javascript
             * client.discardWebsocketOnCommFailure = true; // Enable aggressive closing of WebSocket
             * ```
             *
             * Default value: `false`.
             */ this.discardWebsocketOnCommFailure = false;
            /**
             * Current activation state of the client.
             *
             * Possible states:
             * - `ActivationState.ACTIVE`: Client is connected or actively attempting to connect.
             * - `ActivationState.INACTIVE`: Client is disconnected and not attempting to reconnect.
             * - `ActivationState.DEACTIVATING`: Client is in the process of disconnecting.
             *
             * Note: The client may transition directly from `ACTIVE` to `INACTIVE` without entering
             * the `DEACTIVATING` state.
             */ this.state = exports1.ActivationState.INACTIVE;
            // No op callbacks
            const noOp = ()=>{};
            this.debug = noOp;
            this.beforeConnect = noOp;
            this.onConnect = noOp;
            this.onDisconnect = noOp;
            this.onUnhandledMessage = noOp;
            this.onUnhandledReceipt = noOp;
            this.onUnhandledFrame = noOp;
            this.onHeartbeatReceived = noOp;
            this.onHeartbeatLost = noOp;
            this.onStompError = noOp;
            this.onWebSocketClose = noOp;
            this.onWebSocketError = noOp;
            this.logRawCommunication = false;
            this.onChangeState = noOp;
            // These parameters would typically get proper values before connect is called
            this.connectHeaders = {};
            this._disconnectHeaders = {};
            // Apply configuration
            this.configure(conf);
        }
        /**
         * Updates the client's configuration.
         *
         * All properties in the provided configuration object will override the current settings.
         *
         * Additionally, a warning is logged if `maxReconnectDelay` is configured to a
         * value lower than `reconnectDelay`, and `maxReconnectDelay` is adjusted to match `reconnectDelay`.
         *
         * Example:
         * ```javascript
         * client.configure({
         *   reconnectDelay: 3000,
         *   maxReconnectDelay: 10000
         * });
         * ```
         *
         * @param conf Configuration object containing the new settings.
         */ configure(conf) {
            // bulk assign all properties to this
            Object.assign(this, conf);
            // Warn on incorrect maxReconnectDelay settings
            if (this.maxReconnectDelay > 0 && this.maxReconnectDelay < this.reconnectDelay) {
                this.debug(`Warning: maxReconnectDelay (${this.maxReconnectDelay}ms) is less than reconnectDelay (${this.reconnectDelay}ms). Using reconnectDelay as the maxReconnectDelay delay.`);
                this.maxReconnectDelay = this.reconnectDelay;
            }
        }
        /**
         * Activates the client, initiating a connection to the STOMP broker.
         *
         * On activation, the client attempts to connect and sets its state to `ACTIVE`. If the connection
         * is lost, it will automatically retry based on `reconnectDelay` or `maxReconnectDelay`. If
         * `reconnectTimeMode` is set to `EXPONENTIAL`, the reconnect delay increases exponentially.
         *
         * To stop reconnection attempts and disconnect, call [Client#deactivate]{@link Client#deactivate}.
         *
         * Example:
         * ```javascript
         * client.activate(); // Connect to the broker
         * ```
         *
         * If the client is currently `DEACTIVATING`, connection is delayed until the deactivation process completes.
         */ activate() {
            const _activate = ()=>{
                if (this.active) {
                    this.debug('Already ACTIVE, ignoring request to activate');
                    return;
                }
                this._changeState(exports1.ActivationState.ACTIVE);
                this._nextReconnectDelay = this.reconnectDelay;
                this._connect();
            };
            // if it is deactivating, wait for it to complete before activating.
            if (this.state === exports1.ActivationState.DEACTIVATING) {
                this.debug('Waiting for deactivation to finish before activating');
                this.deactivate().then(()=>{
                    _activate();
                });
            } else {
                _activate();
            }
        }
        async _connect() {
            await this.beforeConnect(this);
            if (this._stompHandler) {
                this.debug('There is already a stompHandler, skipping the call to connect');
                return;
            }
            if (!this.active) {
                this.debug('Client has been marked inactive, will not attempt to connect');
                return;
            }
            // setup connection watcher
            if (this.connectionTimeout > 0) {
                // clear first
                if (this._connectionWatcher) {
                    clearTimeout(this._connectionWatcher);
                }
                this._connectionWatcher = setTimeout(()=>{
                    if (this.connected) {
                        return;
                    }
                    // Connection not established, close the underlying socket
                    // a reconnection will be attempted
                    this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`);
                    this.forceDisconnect();
                }, this.connectionTimeout);
            }
            this.debug('Opening Web Socket...');
            // Get the actual WebSocket (or a similar object)
            const webSocket = this._createWebSocket();
            this._stompHandler = new StompHandler(this, webSocket, {
                debug: this.debug,
                stompVersions: this.stompVersions,
                connectHeaders: this.connectHeaders,
                disconnectHeaders: this._disconnectHeaders,
                heartbeatIncoming: this.heartbeatIncoming,
                heartbeatGracePeriods: this.heartbeatToleranceMultiplier,
                heartbeatOutgoing: this.heartbeatOutgoing,
                heartbeatStrategy: this.heartbeatStrategy,
                splitLargeFrames: this.splitLargeFrames,
                maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                forceBinaryWSFrames: this.forceBinaryWSFrames,
                logRawCommunication: this.logRawCommunication,
                appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
                discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
                onConnect: (frame)=>{
                    // Successfully connected, stop the connection watcher
                    if (this._connectionWatcher) {
                        clearTimeout(this._connectionWatcher);
                        this._connectionWatcher = undefined;
                    }
                    // Reset reconnect delay after successful connection
                    this._nextReconnectDelay = this.reconnectDelay;
                    if (!this.active) {
                        this.debug('STOMP got connected while deactivate was issued, will disconnect now');
                        this._disposeStompHandler();
                        return;
                    }
                    this.onConnect(frame);
                },
                onDisconnect: (frame)=>{
                    this.onDisconnect(frame);
                },
                onStompError: (frame)=>{
                    this.onStompError(frame);
                },
                onWebSocketClose: (evt)=>{
                    this._stompHandler = undefined; // a new one will be created in case of a reconnect
                    if (this.state === exports1.ActivationState.DEACTIVATING) {
                        // Mark deactivation complete
                        this._changeState(exports1.ActivationState.INACTIVE);
                    }
                    // The callback is called before attempting to reconnect, this would allow the client
                    // to be `deactivated` in the callback.
                    this.onWebSocketClose(evt);
                    if (this.active) {
                        this._schedule_reconnect();
                    }
                },
                onWebSocketError: (evt)=>{
                    this.onWebSocketError(evt);
                },
                onUnhandledMessage: (message)=>{
                    this.onUnhandledMessage(message);
                },
                onUnhandledReceipt: (frame)=>{
                    this.onUnhandledReceipt(frame);
                },
                onUnhandledFrame: (frame)=>{
                    this.onUnhandledFrame(frame);
                },
                onHeartbeatReceived: ()=>{
                    this.onHeartbeatReceived();
                },
                onHeartbeatLost: ()=>{
                    this.onHeartbeatLost();
                }
            });
            this._stompHandler.start();
        }
        _createWebSocket() {
            let webSocket;
            if (this.webSocketFactory) {
                webSocket = this.webSocketFactory();
            } else if (this.brokerURL) {
                webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
            } else {
                throw new Error('Either brokerURL or webSocketFactory must be provided');
            }
            webSocket.binaryType = 'arraybuffer';
            return webSocket;
        }
        _schedule_reconnect() {
            if (this._nextReconnectDelay > 0) {
                this.debug(`STOMP: scheduling reconnection in ${this._nextReconnectDelay}ms`);
                this._reconnector = setTimeout(()=>{
                    if (this.reconnectTimeMode === exports1.ReconnectionTimeMode.EXPONENTIAL) {
                        this._nextReconnectDelay = this._nextReconnectDelay * 2;
                        // Truncated exponential backoff with a set limit unless disabled
                        if (this.maxReconnectDelay !== 0) {
                            this._nextReconnectDelay = Math.min(this._nextReconnectDelay, this.maxReconnectDelay);
                        }
                    }
                    this._connect();
                }, this._nextReconnectDelay);
            }
        }
        /**
         * Disconnects the client and stops the automatic reconnection loop.
         *
         * If there is an active STOMP connection at the time of invocation, the appropriate callbacks
         * will be triggered during the shutdown sequence. Once deactivated, the client will enter the
         * `INACTIVE` state, and no further reconnection attempts will be made.
         *
         * **Behavior**:
         * - If there is no active WebSocket connection, this method resolves immediately.
         * - If there is an active connection, the method waits for the underlying WebSocket
         *   to properly close before resolving.
         * - Multiple calls to this method are safe. Each invocation resolves upon completion.
         * - To reactivate, call [Client#activate]{@link Client#activate}.
         *
         * **Experimental Option:**
         * - By specifying the `force: true` option, the WebSocket connection is discarded immediately,
         *   bypassing both the STOMP and WebSocket shutdown sequences.
         * - **Caution:** Using `force: true` may leave the WebSocket in an inconsistent state,
         *   and brokers may not immediately detect the termination.
         *
         * Example:
         * ```javascript
         * // Graceful disconnect
         * await client.deactivate();
         *
         * // Forced disconnect to speed up shutdown when the connection is stale
         * await client.deactivate({ force: true });
         * ```
         *
         * @param options Configuration options for deactivation. Use `force: true` for immediate shutdown.
         * @returns A Promise that resolves when the deactivation process completes.
         */ async deactivate(options = {}) {
            const force = options.force || false;
            const needToDispose = this.active;
            let retPromise;
            if (this.state === exports1.ActivationState.INACTIVE) {
                this.debug(`Already INACTIVE, nothing more to do`);
                return Promise.resolve();
            }
            this._changeState(exports1.ActivationState.DEACTIVATING);
            // Clear reconnection timer just to be safe
            this._nextReconnectDelay = 0;
            // Clear if a reconnection was scheduled
            if (this._reconnector) {
                clearTimeout(this._reconnector);
                this._reconnector = undefined;
            }
            if (this._stompHandler && // @ts-ignore - if there is a _stompHandler, there is the webSocket
            this.webSocket.readyState !== exports1.StompSocketState.CLOSED) {
                const origOnWebSocketClose = this._stompHandler.onWebSocketClose;
                // we need to wait for the underlying websocket to close
                retPromise = new Promise((resolve, reject)=>{
                    // @ts-ignore - there is a _stompHandler
                    this._stompHandler.onWebSocketClose = (evt)=>{
                        origOnWebSocketClose(evt);
                        resolve();
                    };
                });
            } else {
                // indicate that auto reconnect loop should terminate
                this._changeState(exports1.ActivationState.INACTIVE);
                return Promise.resolve();
            }
            if (force) {
                this._stompHandler?.discardWebsocket();
            } else if (needToDispose) {
                this._disposeStompHandler();
            }
            return retPromise;
        }
        /**
         * Forces a disconnect by directly closing the WebSocket.
         *
         * Unlike a normal disconnect, this does not send a DISCONNECT sequence to the broker but
         * instead closes the WebSocket connection directly. After forcing a disconnect, the client
         * will automatically attempt to reconnect based on its `reconnectDelay` configuration.
         *
         * **Note:** To prevent further reconnect attempts, call [Client#deactivate]{@link Client#deactivate}.
         *
         * Example:
         * ```javascript
         * client.forceDisconnect();
         * ```
         */ forceDisconnect() {
            if (this._stompHandler) {
                this._stompHandler.forceDisconnect();
            }
        }
        _disposeStompHandler() {
            // Dispose STOMP Handler
            if (this._stompHandler) {
                this._stompHandler.dispose();
            }
        }
        /**
         * Sends a message to the specified destination on the STOMP broker.
         *
         * The `body` must be a `string`. For non-string payloads (e.g., JSON), encode it as a string before sending.
         * If sending binary data, use the `binaryBody` parameter as a [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
         *
         * **Content-Length Behavior**:
         * - For non-binary messages, the `content-length` header is added by default.
         * - The `content-length` header can be skipped for text frames by setting `skipContentLengthHeader: true` in the parameters.
         * - For binary messages, the `content-length` header is always included.
         *
         * **Notes**:
         * - Ensure that brokers support binary frames before using `binaryBody`.
         * - Sending messages with NULL octets and missing `content-length` headers can cause brokers to disconnect and throw errors.
         *
         * Example:
         * ```javascript
         * // Basic text message
         * client.publish({ destination: "/queue/test", body: "Hello, STOMP" });
         *
         * // Text message with additional headers
         * client.publish({ destination: "/queue/test", headers: { priority: 9 }, body: "Hello, STOMP" });
         *
         * // Skip content-length header
         * client.publish({ destination: "/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true });
         *
         * // Binary message
         * const binaryData = new Uint8Array([1, 2, 3, 4]);
         * client.publish({
         *   destination: '/topic/special',
         *   binaryBody: binaryData,
         *   headers: { 'content-type': 'application/octet-stream' }
         * });
         * ```
         */ publish(params) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.publish(params);
        }
        _checkConnection() {
            if (!this.connected) {
                throw new TypeError('There is no underlying STOMP connection');
            }
        }
        /**
         * Monitors for a receipt acknowledgment from the broker for specific operations.
         *
         * Add a `receipt` header to the operation (like subscribe or publish), and use this method with
         * the same receipt ID to detect when the broker has acknowledged the operation's completion.
         *
         * The callback is invoked with the corresponding {@link IFrame} when the receipt is received.
         *
         * Example:
         * ```javascript
         * const receiptId = "unique-receipt-id";
         *
         * client.watchForReceipt(receiptId, (frame) => {
         *   console.log("Operation acknowledged by the broker:", frame);
         * });
         *
         * // Attach the receipt header to an operation
         * client.publish({ destination: "/queue/test", headers: { receipt: receiptId }, body: "Hello" });
         * ```
         *
         * @param receiptId Unique identifier for the receipt.
         * @param callback Callback function invoked on receiving the RECEIPT frame.
         */ watchForReceipt(receiptId, callback) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.watchForReceipt(receiptId, callback);
        }
        /**
         * Subscribes to a destination on the STOMP broker.
         *
         * The callback is triggered for each message received from the subscribed destination. The message
         * is passed as an {@link IMessage} instance.
         *
         * **Subscription ID**:
         * - If no `id` is provided in `headers`, the library generates a unique subscription ID automatically.
         * - Provide an explicit `id` in `headers` if you wish to manage the subscription ID manually.
         *
         * Example:
         * ```javascript
         * const callback = (message) => {
         *   console.log("Received message:", message.body);
         * };
         *
         * // Auto-generated subscription ID
         * const subscription = client.subscribe("/queue/test", callback);
         *
         * // Explicit subscription ID
         * const mySubId = "my-subscription-id";
         * const subscription = client.subscribe("/queue/test", callback, { id: mySubId });
         * ```
         *
         * @param destination Destination to subscribe to.
         * @param callback Function invoked for each received message.
         * @param headers Optional headers for subscription, such as `id`.
         * @returns A {@link StompSubscription} which can be used to manage the subscription.
         */ subscribe(destination, callback, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            return this._stompHandler.subscribe(destination, callback, headers);
        }
        /**
         * Unsubscribes from a subscription on the STOMP broker.
         *
         * Prefer using the `unsubscribe` method directly on the {@link StompSubscription} returned from `subscribe` for cleaner management:
         * ```javascript
         * const subscription = client.subscribe("/queue/test", callback);
         * // Unsubscribe using the subscription object
         * subscription.unsubscribe();
         * ```
         *
         * This method can also be used directly with the subscription ID.
         *
         * Example:
         * ```javascript
         * client.unsubscribe("my-subscription-id");
         * ```
         *
         * @param id Subscription ID to unsubscribe.
         * @param headers Optional headers to pass for the UNSUBSCRIBE frame.
         */ unsubscribe(id, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.unsubscribe(id, headers);
        }
        /**
         * Starts a new transaction. The returned {@link ITransaction} object provides
         * methods for [commit]{@link ITransaction#commit} and [abort]{@link ITransaction#abort}.
         *
         * If `transactionId` is not provided, the library generates a unique ID internally.
         *
         * Example:
         * ```javascript
         * const tx = client.begin(); // Auto-generated ID
         *
         * // Or explicitly specify a transaction ID
         * const tx = client.begin("my-transaction-id");
         * ```
         *
         * @param transactionId Optional transaction ID.
         * @returns An instance of {@link ITransaction}.
         */ begin(transactionId) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            return this._stompHandler.begin(transactionId);
        }
        /**
         * Commits a transaction.
         *
         * It is strongly recommended to call [commit]{@link ITransaction#commit} on
         * the transaction object returned by [client#begin]{@link Client#begin}.
         *
         * Example:
         * ```javascript
         * const tx = client.begin();
         * // Perform operations under this transaction
         * tx.commit();
         * ```
         *
         * @param transactionId The ID of the transaction to commit.
         */ commit(transactionId) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.commit(transactionId);
        }
        /**
         * Aborts a transaction.
         *
         * It is strongly recommended to call [abort]{@link ITransaction#abort} directly
         * on the transaction object returned by [client#begin]{@link Client#begin}.
         *
         * Example:
         * ```javascript
         * const tx = client.begin();
         * // Perform operations under this transaction
         * tx.abort(); // Abort the transaction
         * ```
         *
         * @param transactionId The ID of the transaction to abort.
         */ abort(transactionId) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.abort(transactionId);
        }
        /**
         * Acknowledges receipt of a message. Typically, this should be done by calling
         * [ack]{@link IMessage#ack} directly on the {@link IMessage} instance passed
         * to the subscription callback.
         *
         * Example:
         * ```javascript
         * const callback = (message) => {
         *   // Process the message
         *   message.ack(); // Acknowledge the message
         * };
         *
         * client.subscribe("/queue/example", callback, { ack: "client" });
         * ```
         *
         * @param messageId The ID of the message to acknowledge.
         * @param subscriptionId The ID of the subscription.
         * @param headers Optional headers for the acknowledgment frame.
         */ ack(messageId, subscriptionId, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.ack(messageId, subscriptionId, headers);
        }
        /**
         * Rejects a message (negative acknowledgment). Like acknowledgments, this should
         * typically be done by calling [nack]{@link IMessage#nack} directly on the {@link IMessage}
         * instance passed to the subscription callback.
         *
         * Example:
         * ```javascript
         * const callback = (message) => {
         *   // Process the message
         *   if (isError(message)) {
         *     message.nack(); // Reject the message
         *   }
         * };
         *
         * client.subscribe("/queue/example", callback, { ack: "client" });
         * ```
         *
         * @param messageId The ID of the message to negatively acknowledge.
         * @param subscriptionId The ID of the subscription.
         * @param headers Optional headers for the NACK frame.
         */ nack(messageId, subscriptionId, headers = {}) {
            this._checkConnection();
            // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
            this._stompHandler.nack(messageId, subscriptionId, headers);
        }
    }
    /**
     * Configuration options for STOMP Client, each key corresponds to
     * field by the same name in {@link Client}. This can be passed to
     * the constructor of {@link Client} or to [Client#configure]{@link Client#configure}.
     *
     * Part of `@stomp/stompjs`.
     */ class StompConfig {
    }
    /**
     * STOMP headers. Many function calls will accept headers as parameters.
     * The headers sent by Broker will be available as [IFrame#headers]{@link IFrame#headers}.
     *
     * `key` and `value` must be valid strings.
     * In addition, `key` must not contain `CR`, `LF`, or `:`.
     *
     * Part of `@stomp/stompjs`.
     */ class StompHeaders {
    }
    /**
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */ class HeartbeatInfo {
        constructor(client){
            this.client = client;
        }
        get outgoing() {
            return this.client.heartbeatOutgoing;
        }
        set outgoing(value) {
            this.client.heartbeatOutgoing = value;
        }
        get incoming() {
            return this.client.heartbeatIncoming;
        }
        set incoming(value) {
            this.client.heartbeatIncoming = value;
        }
    }
    /**
     * Available for backward compatibility, please shift to using {@link Client}.
     *
     * **Deprecated**
     *
     * Part of `@stomp/stompjs`.
     *
     * To upgrade, please follow the [Upgrade Guide](https://stomp-js.github.io/guide/stompjs/upgrading-stompjs.html)
     */ class CompatClient extends Client {
        /**
         * Available for backward compatibility, please shift to using {@link Client}
         * and [Client#webSocketFactory]{@link Client#webSocketFactory}.
         *
         * **Deprecated**
         *
         * @internal
         */ constructor(webSocketFactory){
            super();
            /**
             * It is no op now. No longer needed. Large packets work out of the box.
             */ this.maxWebSocketFrameSize = 16 * 1024;
            this._heartbeatInfo = new HeartbeatInfo(this);
            this.reconnect_delay = 0;
            this.webSocketFactory = webSocketFactory;
            // Default from previous version
            this.debug = (...message)=>{
                console.log(...message);
            };
        }
        _parseConnect(...args) {
            let closeEventCallback;
            let connectCallback;
            let errorCallback;
            let headers = {};
            if (args.length < 2) {
                throw new Error('Connect requires at least 2 arguments');
            }
            if (typeof args[1] === 'function') {
                [headers, connectCallback, errorCallback, closeEventCallback] = args;
            } else {
                switch(args.length){
                    case 6:
                        [headers.login, headers.passcode, connectCallback, errorCallback, closeEventCallback, headers.host] = args;
                        break;
                    default:
                        [headers.login, headers.passcode, connectCallback, errorCallback, closeEventCallback] = args;
                }
            }
            return [
                headers,
                connectCallback,
                errorCallback,
                closeEventCallback
            ];
        }
        /**
         * Available for backward compatibility, please shift to using [Client#activate]{@link Client#activate}.
         *
         * **Deprecated**
         *
         * The `connect` method accepts different number of arguments and types. See the Overloads list. Use the
         * version with headers to pass your broker specific options.
         *
         * overloads:
         * - connect(headers, connectCallback)
         * - connect(headers, connectCallback, errorCallback)
         * - connect(login, passcode, connectCallback)
         * - connect(login, passcode, connectCallback, errorCallback)
         * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback)
         * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback, host)
         *
         * params:
         * - headers, see [Client#connectHeaders]{@link Client#connectHeaders}
         * - connectCallback, see [Client#onConnect]{@link Client#onConnect}
         * - errorCallback, see [Client#onStompError]{@link Client#onStompError}
         * - closeEventCallback, see [Client#onWebSocketClose]{@link Client#onWebSocketClose}
         * - login [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
         * - passcode [String], [Client#connectHeaders](../classes/Client.html#connectHeaders)
         * - host [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */ connect(...args) {
            const out = this._parseConnect(...args);
            if (out[0]) {
                this.connectHeaders = out[0];
            }
            if (out[1]) {
                this.onConnect = out[1];
            }
            if (out[2]) {
                this.onStompError = out[2];
            }
            if (out[3]) {
                this.onWebSocketClose = out[3];
            }
            super.activate();
        }
        /**
         * Available for backward compatibility, please shift to using [Client#deactivate]{@link Client#deactivate}.
         *
         * **Deprecated**
         *
         * See:
         * [Client#onDisconnect]{@link Client#onDisconnect}, and
         * [Client#disconnectHeaders]{@link Client#disconnectHeaders}
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */ disconnect(disconnectCallback, headers = {}) {
            if (disconnectCallback) {
                this.onDisconnect = disconnectCallback;
            }
            this.disconnectHeaders = headers;
            super.deactivate();
        }
        /**
         * Available for backward compatibility, use [Client#publish]{@link Client#publish}.
         *
         * Send a message to a named destination. Refer to your STOMP broker documentation for types
         * and naming of destinations. The headers will, typically, be available to the subscriber.
         * However, there may be special purpose headers corresponding to your STOMP broker.
         *
         *  **Deprecated**, use [Client#publish]{@link Client#publish}
         *
         * Note: Body must be String. You will need to covert the payload to string in case it is not string (e.g. JSON)
         *
         * ```javascript
         *        client.send("/queue/test", {priority: 9}, "Hello, STOMP");
         *
         *        // If you want to send a message with a body, you must also pass the headers argument.
         *        client.send("/queue/test", {}, "Hello, STOMP");
         * ```
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */ send(destination, headers = {}, body = '') {
            headers = Object.assign({}, headers);
            const skipContentLengthHeader = headers['content-length'] === false;
            if (skipContentLengthHeader) {
                delete headers['content-length'];
            }
            this.publish({
                destination,
                headers: headers,
                body,
                skipContentLengthHeader
            });
        }
        /**
         * Available for backward compatibility, renamed to [Client#reconnectDelay]{@link Client#reconnectDelay}.
         *
         * **Deprecated**
         */ set reconnect_delay(value) {
            this.reconnectDelay = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#webSocket]{@link Client#webSocket}.
         *
         * **Deprecated**
         */ get ws() {
            return this.webSocket;
        }
        /**
         * Available for backward compatibility, renamed to [Client#connectedVersion]{@link Client#connectedVersion}.
         *
         * **Deprecated**
         */ get version() {
            return this.connectedVersion;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */ get onreceive() {
            return this.onUnhandledMessage;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */ set onreceive(value) {
            this.onUnhandledMessage = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         * Prefer using [Client#watchForReceipt]{@link Client#watchForReceipt}.
         *
         * **Deprecated**
         */ get onreceipt() {
            return this.onUnhandledReceipt;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         *
         * **Deprecated**
         */ set onreceipt(value) {
            this.onUnhandledReceipt = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */ get heartbeat() {
            return this._heartbeatInfo;
        }
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */ set heartbeat(value) {
            this.heartbeatIncoming = value.incoming;
            this.heartbeatOutgoing = value.outgoing;
        }
    }
    /**
     * STOMP Class, acts like a factory to create {@link Client}.
     *
     * Part of `@stomp/stompjs`.
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}.
     */ class Stomp {
        /**
         * This method creates a WebSocket client that is connected to
         * the STOMP server located at the url.
         *
         * ```javascript
         *        var url = "ws://localhost:61614/stomp";
         *        var client = Stomp.client(url);
         * ```
         *
         * **Deprecated**
         *
         * It will be removed in next major version. Please switch to {@link Client}
         * using [Client#brokerURL]{@link Client#brokerURL}.
         */ static client(url, protocols) {
            // This is a hack to allow another implementation than the standard
            // HTML5 WebSocket class.
            //
            // It is possible to use another class by calling
            //
            //     Stomp.WebSocketClass = MozWebSocket
            //
            // *prior* to call `Stomp.client()`.
            //
            // This hack is deprecated and `Stomp.over()` method should be used
            // instead.
            // See remarks on the function Stomp.over
            if (protocols == null) {
                protocols = Versions.default.protocolVersions();
            }
            const wsFn = ()=>{
                const klass = Stomp.WebSocketClass || WebSocket;
                return new klass(url, protocols);
            };
            return new CompatClient(wsFn);
        }
        /**
         * This method is an alternative to [Stomp#client]{@link Stomp#client} to let the user
         * specify the WebSocket to use (either a standard HTML5 WebSocket or
         * a similar object).
         *
         * In order to support reconnection, the function Client._connect should be callable more than once.
         * While reconnecting
         * a new instance of underlying transport (TCP Socket, WebSocket or SockJS) will be needed. So, this function
         * alternatively allows passing a function that should return a new instance of the underlying socket.
         *
         * ```javascript
         *        var client = Stomp.over(function(){
         *          return new WebSocket('ws://localhost:15674/ws')
         *        });
         * ```
         *
         * **Deprecated**
         *
         * It will be removed in next major version. Please switch to {@link Client}
         * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
         */ static over(ws) {
            let wsFn;
            if (typeof ws === 'function') {
                wsFn = ws;
            } else {
                console.warn('Stomp.over did not receive a factory, auto reconnect will not work. ' + 'Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over');
                wsFn = ()=>ws;
            }
            return new CompatClient(wsFn);
        }
    }
    /**
     * In case you need to use a non standard class for WebSocket.
     *
     * For example when using within NodeJS environment:
     *
     * ```javascript
     *        StompJs = require('../../esm5/');
     *        Stomp = StompJs.Stomp;
     *        Stomp.WebSocketClass = require('websocket').w3cwebsocket;
     * ```
     *
     * **Deprecated**
     *
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
     */ // tslint:disable-next-line:variable-name
    Stomp.WebSocketClass = null;
    exports1.Client = Client;
    exports1.CompatClient = CompatClient;
    exports1.FrameImpl = FrameImpl;
    exports1.Parser = Parser;
    exports1.Stomp = Stomp;
    exports1.StompConfig = StompConfig;
    exports1.StompHeaders = StompHeaders;
    exports1.Versions = Versions;
}); //# sourceMappingURL=stomp.umd.js.map
}),
"[project]/brainbridge/node_modules/goober/dist/goober.modern.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>u,
    "extractCss",
    ()=>r,
    "glob",
    ()=>b,
    "keyframes",
    ()=>h,
    "setup",
    ()=>m,
    "styled",
    ()=>w
]);
let e = {
    data: ""
}, t = (t)=>{
    if ("object" == typeof window) {
        let e = (t ? t.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
            innerHTML: " ",
            id: "_goober"
        });
        return e.nonce = window.__nonce__, e.parentNode || (t || document.head).appendChild(e), e.firstChild;
    }
    return t || e;
}, r = (e)=>{
    let r = t(e), l = r.data;
    return r.data = "", l;
}, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n = /\n+/g, o = (e, t)=>{
    let r = "", l = "", a = "";
    for(let n in e){
        let c = e[n];
        "@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : l += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? l += o(c, t ? t.replace(/([^,])+/g, (e)=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t)=>/&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += o.p ? o.p(n, c) : n + ":" + c + ";");
    }
    return r + (t && a ? t + "{" + a + "}" : a) + l;
}, c = {}, s = (e)=>{
    if ("object" == typeof e) {
        let t = "";
        for(let r in e)t += r + s(e[r]);
        return t;
    }
    return e;
}, i = (e, t, r, i, p)=>{
    let u = s(e), d = c[u] || (c[u] = ((e)=>{
        let t = 0, r = 11;
        for(; t < e.length;)r = 101 * r + e.charCodeAt(t++) >>> 0;
        return "go" + r;
    })(u));
    if (!c[d]) {
        let t = u !== e ? e : ((e)=>{
            let t, r, o = [
                {}
            ];
            for(; t = l.exec(e.replace(a, ""));)t[4] ? o.shift() : t[3] ? (r = t[3].replace(n, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n, " ").trim();
            return o[0];
        })(e);
        c[d] = o(p ? {
            ["@keyframes " + d]: t
        } : t, r ? "" : "." + d);
    }
    let f = r && c.g ? c.g : null;
    return r && (c.g = c[d]), ((e, t, r, l)=>{
        l ? t.data = t.data.replace(l, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
    })(c[d], t, i, f), d;
}, p = (e, t, r)=>e.reduce((e, l, a)=>{
        let n = t[a];
        if (n && n.call) {
            let e = n(r), t = e && e.props && e.props.className || /^go/.test(e) && e;
            n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e;
        }
        return e + l + (null == n ? "" : n);
    }, "");
function u(e) {
    let r = this || {}, l = e.call ? e(r.p) : e;
    return i(l.unshift ? l.raw ? p(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t)=>Object.assign(e, t && t.call ? t(r.p) : t), {}) : l, t(r.target), r.g, r.o, r.k);
}
let d, f, g, b = u.bind({
    g: 1
}), h = u.bind({
    k: 1
});
function m(e, t, r, l) {
    o.p = t, d = e, f = r, g = l;
}
function w(e, t) {
    let r = this || {};
    return function() {
        let l = arguments;
        function a(n, o) {
            let c = Object.assign({}, n), s = c.className || a.className;
            r.p = Object.assign({
                theme: f && f()
            }, c), r.o = / *go\d+/.test(s), c.className = u.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
            let i = e;
            return e[0] && (i = c.as || e, delete c.as), g && i[0] && g(c), d(i, c);
        }
        return t ? t(a) : a;
    };
}
;
}),
"[project]/brainbridge/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckmarkIcon",
    ()=>L,
    "ErrorIcon",
    ()=>C,
    "LoaderIcon",
    ()=>F,
    "ToastBar",
    ()=>N,
    "ToastIcon",
    ()=>$,
    "Toaster",
    ()=>Fe,
    "default",
    ()=>zt,
    "resolveValue",
    ()=>h,
    "toast",
    ()=>n,
    "useToaster",
    ()=>w,
    "useToasterStore",
    ()=>V
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/goober/dist/goober.modern.js [app-client] (ecmascript)");
"use client";
var Z = (e)=>typeof e == "function", h = (e, t)=>Z(e) ? e(t) : e;
var W = (()=>{
    let e = 0;
    return ()=>(++e).toString();
})(), E = (()=>{
    let e;
    return ()=>{
        if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches;
        }
        return e;
    };
})();
;
var re = 20, k = "default";
var H = (e, t)=>{
    let { toastLimit: o } = e.settings;
    switch(t.type){
        case 0:
            return {
                ...e,
                toasts: [
                    t.toast,
                    ...e.toasts
                ].slice(0, o)
            };
        case 1:
            return {
                ...e,
                toasts: e.toasts.map((r)=>r.id === t.toast.id ? {
                        ...r,
                        ...t.toast
                    } : r)
            };
        case 2:
            let { toast: s } = t;
            return H(e, {
                type: e.toasts.find((r)=>r.id === s.id) ? 1 : 0,
                toast: s
            });
        case 3:
            let { toastId: a } = t;
            return {
                ...e,
                toasts: e.toasts.map((r)=>r.id === a || a === void 0 ? {
                        ...r,
                        dismissed: !0,
                        visible: !1
                    } : r)
            };
        case 4:
            return t.toastId === void 0 ? {
                ...e,
                toasts: []
            } : {
                ...e,
                toasts: e.toasts.filter((r)=>r.id !== t.toastId)
            };
        case 5:
            return {
                ...e,
                pausedAt: t.time
            };
        case 6:
            let i = t.time - (e.pausedAt || 0);
            return {
                ...e,
                pausedAt: void 0,
                toasts: e.toasts.map((r)=>({
                        ...r,
                        pauseDuration: r.pauseDuration + i
                    }))
            };
    }
}, v = [], j = {
    toasts: [],
    pausedAt: void 0,
    settings: {
        toastLimit: re
    }
}, f = {}, Y = (e, t = k)=>{
    f[t] = H(f[t] || j, e), v.forEach(([o, s])=>{
        o === t && s(f[t]);
    });
}, _ = (e)=>Object.keys(f).forEach((t)=>Y(e, t)), Q = (e)=>Object.keys(f).find((t)=>f[t].toasts.some((o)=>o.id === e)), S = (e = k)=>(t)=>{
        Y(t, e);
    }, se = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
}, V = (e = {}, t = k)=>{
    let [o, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(f[t] || j), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(f[t]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(a.current !== f[t] && s(f[t]), v.push([
            t,
            s
        ]), ()=>{
            let r = v.findIndex(([l])=>l === t);
            r > -1 && v.splice(r, 1);
        }), [
        t
    ]);
    let i = o.toasts.map((r)=>{
        var l, g, T;
        return {
            ...e,
            ...e[r.type],
            ...r,
            removeDelay: r.removeDelay || ((l = e[r.type]) == null ? void 0 : l.removeDelay) || (e == null ? void 0 : e.removeDelay),
            duration: r.duration || ((g = e[r.type]) == null ? void 0 : g.duration) || (e == null ? void 0 : e.duration) || se[r.type],
            style: {
                ...e.style,
                ...(T = e[r.type]) == null ? void 0 : T.style,
                ...r.style
            }
        };
    });
    return {
        ...o,
        toasts: i
    };
};
var ie = (e, t = "blank", o)=>({
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...o,
        id: (o == null ? void 0 : o.id) || W()
    }), P = (e)=>(t, o)=>{
        let s = ie(t, e, o);
        return S(s.toasterId || Q(s.id))({
            type: 2,
            toast: s
        }), s.id;
    }, n = (e, t)=>P("blank")(e, t);
n.error = P("error");
n.success = P("success");
n.loading = P("loading");
n.custom = P("custom");
n.dismiss = (e, t)=>{
    let o = {
        type: 3,
        toastId: e
    };
    t ? S(t)(o) : _(o);
};
n.dismissAll = (e)=>n.dismiss(void 0, e);
n.remove = (e, t)=>{
    let o = {
        type: 4,
        toastId: e
    };
    t ? S(t)(o) : _(o);
};
n.removeAll = (e)=>n.remove(void 0, e);
n.promise = (e, t, o)=>{
    let s = n.loading(t.loading, {
        ...o,
        ...o == null ? void 0 : o.loading
    });
    return typeof e == "function" && (e = e()), e.then((a)=>{
        let i = t.success ? h(t.success, a) : void 0;
        return i ? n.success(i, {
            id: s,
            ...o,
            ...o == null ? void 0 : o.success
        }) : n.dismiss(s), a;
    }).catch((a)=>{
        let i = t.error ? h(t.error, a) : void 0;
        i ? n.error(i, {
            id: s,
            ...o,
            ...o == null ? void 0 : o.error
        }) : n.dismiss(s);
    }), e;
};
;
var ce = 1e3, w = (e, t = "default")=>{
    let { toasts: o, pausedAt: s } = V(e, t), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map).current, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((c, m = ce)=>{
        if (a.has(c)) return;
        let p = setTimeout(()=>{
            a.delete(c), r({
                type: 4,
                toastId: c
            });
        }, m);
        a.set(c, p);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (s) return;
        let c = Date.now(), m = o.map((p)=>{
            if (p.duration === 1 / 0) return;
            let R = (p.duration || 0) + p.pauseDuration - (c - p.createdAt);
            if (R < 0) {
                p.visible && n.dismiss(p.id);
                return;
            }
            return setTimeout(()=>n.dismiss(p.id, t), R);
        });
        return ()=>{
            m.forEach((p)=>p && clearTimeout(p));
        };
    }, [
        o,
        s,
        t
    ]);
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(S(t), [
        t
    ]), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        r({
            type: 5,
            time: Date.now()
        });
    }, [
        r
    ]), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((c, m)=>{
        r({
            type: 1,
            toast: {
                id: c,
                height: m
            }
        });
    }, [
        r
    ]), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        s && r({
            type: 6,
            time: Date.now()
        });
    }, [
        s,
        r
    ]), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((c, m)=>{
        let { reverseOrder: p = !1, gutter: R = 8, defaultPosition: z } = m || {}, O = o.filter((u)=>(u.position || z) === (c.position || z) && u.height), K = O.findIndex((u)=>u.id === c.id), B = O.filter((u, I)=>I < K && u.visible).length;
        return O.filter((u)=>u.visible).slice(...p ? [
            B + 1
        ] : [
            0,
            B
        ]).reduce((u, I)=>u + (I.height || 0) + R, 0);
    }, [
        o
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        o.forEach((c)=>{
            if (c.dismissed) i(c.id, c.removeDelay);
            else {
                let m = a.get(c.id);
                m && (clearTimeout(m), a.delete(c.id));
            }
        });
    }, [
        o,
        i
    ]), {
        toasts: o,
        handlers: {
            updateHeight: g,
            startPause: l,
            endPause: T,
            calculateOffset: d
        }
    };
};
;
;
;
;
;
var de = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, me = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, le = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e)=>e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e)=>e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
;
var Te = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e)=>e.secondary || "#e0e0e0"};
  border-right-color: ${(e)=>e.primary || "#616161"};
  animation: ${Te} 1s linear infinite;
`;
;
var ge = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, he = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e)=>e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e)=>e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
var be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  position: absolute;
`, Se = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Ae = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ae} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, $ = ({ toast: e })=>{
    let { icon: t, type: o, iconTheme: s } = e;
    return t !== void 0 ? typeof t == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Pe, null, t) : t : o === "blank" ? null : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Se, null, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](F, {
        ...s
    }), o !== "loading" && __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](be, null, o === "error" ? __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](C, {
        ...s
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](L, {
        ...s
    })));
};
var Re = (e)=>`
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Ee = (e)=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, ve = "0%{opacity:0;} 100%{opacity:1;}", De = "0%{opacity:1;} 100%{opacity:0;}", Oe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Ie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, ke = (e, t)=>{
    let s = e.includes("top") ? 1 : -1, [a, i] = E() ? [
        ve,
        De
    ] : [
        Re(s),
        Ee(s)
    ];
    return {
        animation: t ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    };
}, N = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](({ toast: e, position: t, style: o, children: s })=>{
    let a = e.height ? ke(e.position || t || "top-center", e.visible) : {
        opacity: 0
    }, i = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]($, {
        toast: e
    }), r = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Ie, {
        ...e.ariaProps
    }, h(e.message, e));
    return __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Oe, {
        className: e.className,
        style: {
            ...a,
            ...o,
            ...e.style
        }
    }, typeof s == "function" ? s({
        icon: i,
        message: r
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, i, r));
});
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setup"])(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]);
var we = ({ id: e, className: t, style: o, onHeightUpdate: s, children: a })=>{
    let i = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "we.useCallback[i]": (r)=>{
            if (r) {
                let l = {
                    "we.useCallback[i].l": ()=>{
                        let g = r.getBoundingClientRect().height;
                        s(e, g);
                    }
                }["we.useCallback[i].l"];
                l(), new MutationObserver(l).observe(r, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                });
            }
        }
    }["we.useCallback[i]"], [
        e,
        s
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: i,
        className: t,
        style: o
    }, a);
}, Me = (e, t)=>{
    let o = e.includes("top"), s = o ? {
        top: 0
    } : {
        bottom: 0
    }, a = e.includes("center") ? {
        justifyContent: "center"
    } : e.includes("right") ? {
        justifyContent: "flex-end"
    } : {};
    return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: E() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: `translateY(${t * (o ? 1 : -1)}px)`,
        ...s,
        ...a
    };
}, Ce = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, D = 16, Fe = ({ reverseOrder: e, position: t = "top-center", toastOptions: o, gutter: s, children: a, toasterId: i, containerStyle: r, containerClassName: l })=>{
    let { toasts: g, handlers: T } = w(o, i);
    return __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        "data-rht-toaster": i || "",
        style: {
            position: "fixed",
            zIndex: 9999,
            top: D,
            left: D,
            right: D,
            bottom: D,
            pointerEvents: "none",
            ...r
        },
        className: l,
        onMouseEnter: T.startPause,
        onMouseLeave: T.endPause
    }, g.map((d)=>{
        let c = d.position || t, m = T.calculateOffset(d, {
            reverseOrder: e,
            gutter: s,
            defaultPosition: t
        }), p = Me(c, m);
        return __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](we, {
            id: d.id,
            key: d.id,
            onHeightUpdate: T.updateHeight,
            className: d.visible ? Ce : "",
            style: p
        }, d.type === "custom" ? h(d.message, d) : a ? a(d) : __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](N, {
            toast: d,
            position: c
        }));
    }));
};
var zt = n;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=5b5e6_75a5febf._.js.map