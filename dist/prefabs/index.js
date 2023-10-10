"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/prefabs/index.ts
var prefabs_exports = {};
__export(prefabs_exports, {
  AudioConference: () => AudioConference,
  Chat: () => Chat,
  ChatEntry: () => ChatEntry,
  ControlBar: () => ControlBar,
  MediaDeviceMenu: () => MediaDeviceMenu,
  PreJoin: () => PreJoin,
  VideoConference: () => VideoConference,
  formatChatMessageLinks: () => formatChatMessageLinks,
  useChat: () => useChat,
  usePreviewDevice: () => usePreviewDevice,
  usePreviewTracks: () => usePreviewTracks
});
module.exports = __toCommonJS(prefabs_exports);

// src/prefabs/Chat.tsx
var import_components_core3 = require("@livekit/components-core");
var React8 = __toESM(require("react"));

// src/context/layout-context.ts
var import_components_core = require("@livekit/components-core");
var React = __toESM(require("react"));

// src/context/chat-context.ts
function chatReducer(state, action) {
  if (action.msg && action.msg !== state.showChat) {
    if (action.msg === "show_chat") {
      return __spreadProps(__spreadValues({}, state), { showChat: "show_chat" });
    } else if (action.msg === "show_invite") {
      return __spreadProps(__spreadValues({}, state), { showChat: "show_invite" });
    } else if (action.msg === "show_users") {
      return __spreadProps(__spreadValues({}, state), { showChat: "show_users" });
    } else if (action.msg === "unread_msg") {
      return __spreadProps(__spreadValues({}, state), { unreadMessages: action.count });
    } else if (action.msg === "hide_chat") {
      return __spreadProps(__spreadValues({}, state), { showChat: null });
    } else {
      return __spreadProps(__spreadValues({}, state), { showChat: null });
    }
  } else {
    return __spreadProps(__spreadValues({}, state), { showChat: null });
  }
}

// src/context/pin-context.ts
function pinReducer(state, action) {
  if (action.msg === "set_pin") {
    return [action.trackReference];
  } else if (action.msg === "clear_pin") {
    return [];
  } else {
    return __spreadValues({}, state);
  }
}

// src/context/layout-context.ts
var LayoutContext = React.createContext(void 0);
function useLayoutContext() {
  const layoutContext = React.useContext(LayoutContext);
  if (!layoutContext) {
    throw Error("Tried to access LayoutContext context outside a LayoutContextProvider provider.");
  }
  return layoutContext;
}
function useEnsureLayoutContext(layoutContext) {
  const layout = useMaybeLayoutContext();
  layoutContext != null ? layoutContext : layoutContext = layout;
  if (!layoutContext) {
    throw Error("Tried to access LayoutContext context outside a LayoutContextProvider provider.");
  }
  return layoutContext;
}
function useCreateLayoutContext() {
  const [pinState, pinDispatch] = React.useReducer(pinReducer, import_components_core.PIN_DEFAULT_STATE);
  const [widgetState, widgetDispatch] = React.useReducer(chatReducer, import_components_core.WIDGET_DEFAULT_STATE);
  return {
    pin: { dispatch: pinDispatch, state: pinState },
    widget: { dispatch: widgetDispatch, state: widgetState }
  };
}
function useEnsureCreateLayoutContext(layoutContext) {
  const [pinState, pinDispatch] = React.useReducer(pinReducer, import_components_core.PIN_DEFAULT_STATE);
  const [widgetState, widgetDispatch] = React.useReducer(chatReducer, import_components_core.WIDGET_DEFAULT_STATE);
  return layoutContext != null ? layoutContext : {
    pin: { dispatch: pinDispatch, state: pinState },
    widget: { dispatch: widgetDispatch, state: widgetState }
  };
}
function useMaybeLayoutContext() {
  return React.useContext(LayoutContext);
}

// src/context/participant-context.ts
var React3 = __toESM(require("react"));

// src/context/track-context.ts
var React2 = __toESM(require("react"));
var TrackContext = React2.createContext(void 0);
function useMaybeTrackContext() {
  return React2.useContext(TrackContext);
}

// src/context/participant-context.ts
var ParticipantContext = React3.createContext(void 0);
function useMaybeParticipantContext() {
  return React3.useContext(ParticipantContext);
}
function useEnsureParticipant(participant) {
  var _a;
  const context = useMaybeParticipantContext();
  const trackContext = useMaybeTrackContext();
  const p = (_a = participant != null ? participant : context) != null ? _a : trackContext == null ? void 0 : trackContext.participant;
  if (!p) {
    throw new Error(
      "No participant provided, make sure you are inside a participant context or pass the participant explicitly"
    );
  }
  return p;
}

// src/context/room-context.ts
var React4 = __toESM(require("react"));
var RoomContext = React4.createContext(void 0);
function useRoomContext() {
  const ctx = React4.useContext(RoomContext);
  if (!ctx) {
    throw Error("tried to access room context outside of livekit room component");
  }
  return ctx;
}
function useMaybeRoomContext() {
  return React4.useContext(RoomContext);
}
function useEnsureRoom(room) {
  const context = useMaybeRoomContext();
  const r = room != null ? room : context;
  if (!r) {
    throw new Error(
      "No room provided, make sure you are inside a Room context or pass the room explicitly"
    );
  }
  return r;
}

// src/hooks/internal/useObservableState.ts
var React5 = __toESM(require("react"));
function useObservableState(observable, startWith) {
  const [state, setState] = React5.useState(startWith);
  React5.useEffect(() => {
    if (typeof window === "undefined" || !observable)
      return;
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);
  return state;
}

// src/utils.ts
var React6 = __toESM(require("react"));

// src/mergeProps.ts
var import_clsx = __toESM(require("clsx"));
function chain(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function mergeProps(...args) {
  const result = __spreadValues({}, args[0]);
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    for (const key in props) {
      const a = result[key];
      const b = props[key];
      if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) {
        result[key] = chain(a, b);
      } else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") {
        result[key] = (0, import_clsx.default)(a, b);
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
  }
  return result;
}

// src/utils.ts
function isProp(prop) {
  return prop !== void 0;
}
function mergeProps2(...props) {
  return mergeProps(...props.filter(isProp));
}
function cloneSingleChild(children, props, key) {
  return React6.Children.map(children, (child) => {
    if (React6.isValidElement(child) && React6.Children.only(children)) {
      return React6.cloneElement(child, __spreadProps(__spreadValues({}, props), { key }));
    }
    return child;
  });
}

// src/components/ChatEntry.tsx
var import_components_core2 = require("@livekit/components-core");
var React7 = __toESM(require("react"));
function ChatEntry(_a) {
  var _b = _a, {
    entry,
    hideName = false,
    hideTimestamp = false,
    messageFormatter
  } = _b, props = __objRest(_b, [
    "entry",
    "hideName",
    "hideTimestamp",
    "messageFormatter"
  ]);
  var _a2, _b2, _c, _d;
  const formattedMessage = React7.useMemo(() => {
    return messageFormatter ? messageFormatter(entry.message) : entry.message;
  }, [entry.message, messageFormatter]);
  const time = new Date(entry.timestamp);
  const locale = navigator ? navigator.language : "en-US";
  return /* @__PURE__ */ React7.createElement(
    "li",
    __spreadValues({
      className: "lk-chat-entry",
      title: time.toLocaleTimeString(locale, { timeStyle: "full" }),
      "data-lk-message-origin": ((_a2 = entry.from) == null ? void 0 : _a2.isLocal) ? "local" : "remote"
    }, props),
    (!hideTimestamp || !hideName) && /* @__PURE__ */ React7.createElement("span", { className: "lk-meta-data" }, !hideName && /* @__PURE__ */ React7.createElement("strong", { className: "lk-participant-name" }, (_d = (_b2 = entry.from) == null ? void 0 : _b2.name) != null ? _d : (_c = entry.from) == null ? void 0 : _c.identity), !hideTimestamp && /* @__PURE__ */ React7.createElement("span", { className: "lk-timestamp" }, time.toLocaleTimeString(locale, { timeStyle: "short" }))),
    /* @__PURE__ */ React7.createElement("span", { className: "lk-message-body" }, formattedMessage)
  );
}
function formatChatMessageLinks(message) {
  return (0, import_components_core2.tokenize)(message, (0, import_components_core2.createDefaultGrammar)()).map((tok, i) => {
    if (typeof tok === `string`) {
      return tok;
    } else {
      const content = tok.content.toString();
      const href = tok.type === `url` ? /^http(s?):\/\//.test(content) ? content : `https://${content}` : `mailto:${content}`;
      return /* @__PURE__ */ React7.createElement("a", { className: "lk-chat-link", key: i, href, target: "_blank", rel: "noreferrer" }, content);
    }
  });
}

// src/prefabs/Chat.tsx
function useChat(options) {
  const room = useRoomContext();
  const [setup, setSetup] = React8.useState();
  const isSending = useObservableState(setup == null ? void 0 : setup.isSendingObservable, false);
  const chatMessages = useObservableState(setup == null ? void 0 : setup.messageObservable, []);
  React8.useEffect(() => {
    const setupChatReturn = (0, import_components_core3.setupChat)(room, options);
    setSetup(setupChatReturn);
    return setupChatReturn.destroy;
  }, [room, options]);
  return { send: setup == null ? void 0 : setup.send, chatMessages, isSending };
}
function Chat(_a) {
  var _b = _a, { messageFormatter, messageDecoder, messageEncoder } = _b, props = __objRest(_b, ["messageFormatter", "messageDecoder", "messageEncoder"]);
  const inputRef = React8.useRef(null);
  const ulRef = React8.useRef(null);
  const chatOptions = React8.useMemo(() => {
    return { messageDecoder, messageEncoder };
  }, [messageDecoder, messageEncoder]);
  const { send, chatMessages, isSending } = useChat(chatOptions);
  const layoutContext = useMaybeLayoutContext();
  const lastReadMsgAt = React8.useRef(0);
  function handleSubmit(event) {
    return __async(this, null, function* () {
      event.preventDefault();
      if (inputRef.current && inputRef.current.value.trim() !== "") {
        if (send) {
          yield send(inputRef.current.value);
          inputRef.current.value = "";
          inputRef.current.focus();
        }
      }
    });
  }
  React8.useEffect(() => {
    var _a2;
    if (ulRef) {
      (_a2 = ulRef.current) == null ? void 0 : _a2.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef, chatMessages]);
  React8.useEffect(() => {
    var _a2, _b2, _c, _d, _e;
    if (!layoutContext || chatMessages.length === 0) {
      return;
    }
    if (((_a2 = layoutContext.widget.state) == null ? void 0 : _a2.showChat) && chatMessages.length > 0 && lastReadMsgAt.current !== ((_b2 = chatMessages[chatMessages.length - 1]) == null ? void 0 : _b2.timestamp)) {
      lastReadMsgAt.current = (_c = chatMessages[chatMessages.length - 1]) == null ? void 0 : _c.timestamp;
      return;
    }
    const unreadMessageCount = chatMessages.filter(
      (msg) => !lastReadMsgAt.current || msg.timestamp > lastReadMsgAt.current
    ).length;
    const { widget } = layoutContext;
    if (unreadMessageCount > 0 && ((_d = widget.state) == null ? void 0 : _d.unreadMessages) !== unreadMessageCount) {
      (_e = widget.dispatch) == null ? void 0 : _e.call(widget, { msg: "unread_msg", count: unreadMessageCount });
    }
  }, [chatMessages, layoutContext == null ? void 0 : layoutContext.widget]);
  return /* @__PURE__ */ React8.createElement("div", __spreadProps(__spreadValues({}, props), { className: "lk-chat" }), /* @__PURE__ */ React8.createElement("ul", { className: "lk-list lk-chat-messages", ref: ulRef }, props.children ? chatMessages.map(
    (msg, idx) => cloneSingleChild(props.children, {
      entry: msg,
      key: idx,
      messageFormatter
    })
  ) : chatMessages.map((msg, idx, allMsg) => {
    const hideName = idx >= 1 && allMsg[idx - 1].from === msg.from;
    const hideTimestamp = idx >= 1 && msg.timestamp - allMsg[idx - 1].timestamp < 6e4;
    return /* @__PURE__ */ React8.createElement(
      ChatEntry,
      {
        key: idx,
        hideName,
        hideTimestamp: hideName === false ? false : hideTimestamp,
        entry: msg,
        messageFormatter
      }
    );
  })), /* @__PURE__ */ React8.createElement("form", { className: "lk-chat-form", onSubmit: handleSubmit }, /* @__PURE__ */ React8.createElement(
    "input",
    {
      className: "lk-form-control lk-chat-form-input",
      disabled: isSending,
      ref: inputRef,
      type: "text",
      placeholder: "Enter a message..."
    }
  ), /* @__PURE__ */ React8.createElement("button", { type: "submit", className: "lk-button lk-chat-form-button", disabled: isSending }, "Send")));
}

// src/prefabs/PreJoin.tsx
var import_livekit_client7 = require("livekit-client");
var React55 = __toESM(require("react"));

// src/prefabs/MediaDeviceMenu.tsx
var import_components_core25 = require("@livekit/components-core");
var React35 = __toESM(require("react"));

// src/components/controls/MediaDeviceSelect.tsx
var React34 = __toESM(require("react"));

// src/hooks/internal/useResizeObserver.ts
var React9 = __toESM(require("react"));
var import_latest = __toESM(require("@react-hook/latest"));
function useResizeObserver(target, callback) {
  const resizeObserver = getResizeObserver();
  const storedCallback = (0, import_latest.default)(callback);
  React9.useLayoutEffect(() => {
    let didUnsubscribe = false;
    const targetEl = target.current;
    if (!targetEl)
      return;
    function cb(entry, observer) {
      if (didUnsubscribe)
        return;
      storedCallback.current(entry, observer);
    }
    resizeObserver == null ? void 0 : resizeObserver.subscribe(targetEl, cb);
    return () => {
      didUnsubscribe = true;
      resizeObserver == null ? void 0 : resizeObserver.unsubscribe(targetEl, cb);
    };
  }, [target.current, resizeObserver, storedCallback]);
  return resizeObserver == null ? void 0 : resizeObserver.observer;
}
function createResizeObserver() {
  let ticking = false;
  let allEntries = [];
  const callbacks = /* @__PURE__ */ new Map();
  if (typeof window === "undefined") {
    return;
  }
  const observer = new ResizeObserver((entries, obs) => {
    allEntries = allEntries.concat(entries);
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const triggered = /* @__PURE__ */ new Set();
        for (let i = 0; i < allEntries.length; i++) {
          if (triggered.has(allEntries[i].target))
            continue;
          triggered.add(allEntries[i].target);
          const cbs = callbacks.get(allEntries[i].target);
          cbs == null ? void 0 : cbs.forEach((cb) => cb(allEntries[i], obs));
        }
        allEntries = [];
        ticking = false;
      });
    }
    ticking = true;
  });
  return {
    observer,
    subscribe(target, callback) {
      var _a;
      observer.observe(target);
      const cbs = (_a = callbacks.get(target)) != null ? _a : [];
      cbs.push(callback);
      callbacks.set(target, cbs);
    },
    unsubscribe(target, callback) {
      var _a;
      const cbs = (_a = callbacks.get(target)) != null ? _a : [];
      if (cbs.length === 1) {
        observer.unobserve(target);
        callbacks.delete(target);
        return;
      }
      const cbIndex = cbs.indexOf(callback);
      if (cbIndex !== -1)
        cbs.splice(cbIndex, 1);
      callbacks.set(target, cbs);
    }
  };
}
var _resizeObserver;
var getResizeObserver = () => !_resizeObserver ? _resizeObserver = createResizeObserver() : _resizeObserver;
var useSize = (target) => {
  const [size, setSize] = React9.useState({ width: 0, height: 0 });
  React9.useLayoutEffect(() => {
    if (target.current) {
      const { width, height } = target.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [target.current]);
  const resizeCallback = React9.useCallback(
    (entry) => setSize(entry.contentRect),
    []
  );
  useResizeObserver(target, resizeCallback);
  return size;
};

// src/hooks/internal/useMediaQuery.ts
var React10 = __toESM(require("react"));
function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = React10.useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  React10.useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

// src/hooks/useConnectionQualityIndicator.ts
var import_components_core4 = require("@livekit/components-core");
var import_livekit_client = require("livekit-client");
var React11 = __toESM(require("react"));
function useConnectionQualityIndicator(options = {}) {
  const p = useEnsureParticipant(options.participant);
  const { className, connectionQualityObserver } = React11.useMemo(
    () => (0, import_components_core4.setupConnectionQualityIndicator)(p),
    [p]
  );
  const quality = useObservableState(connectionQualityObserver, import_livekit_client.ConnectionQuality.Unknown);
  return { className, quality };
}

// src/hooks/useConnectionStatus.ts
var import_components_core5 = require("@livekit/components-core");
var React12 = __toESM(require("react"));
function useConnectionState(room) {
  const r = useEnsureRoom(room);
  const observable = React12.useMemo(() => (0, import_components_core5.connectionStateObserver)(r), [r]);
  const connectionState = useObservableState(observable, r.state);
  return connectionState;
}

// src/hooks/useDisconnectButton.ts
var import_components_core6 = require("@livekit/components-core");
var import_livekit_client2 = require("livekit-client");
var React13 = __toESM(require("react"));
function useDisconnectButton(props) {
  const room = useRoomContext();
  const connectionState = useConnectionState(room);
  const buttonProps = React13.useMemo(() => {
    const { className, disconnect } = (0, import_components_core6.setupDisconnectButton)(room);
    const mergedProps = mergeProps(props, {
      className,
      onClick: () => {
        var _a;
        return disconnect((_a = props.stopTracks) != null ? _a : true);
      },
      disabled: connectionState === import_livekit_client2.ConnectionState.Disconnected
    });
    return mergedProps;
  }, [room, props, connectionState]);
  return { buttonProps };
}

// src/hooks/useFacingMode.ts
var import_livekit_client3 = require("livekit-client");
function useFacingMode(trackReference) {
  if (trackReference.publication instanceof import_livekit_client3.LocalTrackPublication) {
    const localTrack = trackReference.publication.track;
    if (localTrack) {
      const { facingMode } = (0, import_livekit_client3.facingModeFromLocalTrack)(localTrack);
      return facingMode;
    }
  }
  return "undefined";
}

// src/hooks/useFocusToggle.ts
var import_components_core7 = require("@livekit/components-core");
var React14 = __toESM(require("react"));
function useFocusToggle({ trackSource, participant, props }) {
  const p = useEnsureParticipant(participant);
  const layoutContext = useMaybeLayoutContext();
  const { className } = React14.useMemo(() => (0, import_components_core7.setupFocusToggle)(), []);
  const inFocus = React14.useMemo(() => {
    const track = p.getTrack(trackSource);
    if ((layoutContext == null ? void 0 : layoutContext.pin.state) && track) {
      return (0, import_components_core7.isTrackReferencePinned)(
        { participant: p, source: trackSource, publication: track },
        layoutContext.pin.state
      );
    } else {
      return false;
    }
  }, [p, trackSource, layoutContext]);
  const mergedProps = React14.useMemo(
    () => mergeProps(props, {
      className,
      onClick: (event) => {
        var _a;
        (_a = props.onClick) == null ? void 0 : _a.call(props, event);
        const track = p.getTrack(trackSource);
        if ((layoutContext == null ? void 0 : layoutContext.pin.dispatch) && track) {
          if (inFocus) {
            layoutContext.pin.dispatch({
              msg: "clear_pin"
            });
          } else {
            layoutContext.pin.dispatch({
              msg: "set_pin",
              trackReference: {
                participant: p,
                publication: track,
                source: track.source
              }
            });
          }
        }
      }
    }),
    [props, className, p, trackSource, inFocus, layoutContext]
  );
  return { mergedProps, inFocus };
}

// src/hooks/useGridLayout.ts
var import_components_core8 = require("@livekit/components-core");
var React15 = __toESM(require("react"));
function useGridLayout(gridElement, trackCount) {
  const { width, height } = useSize(gridElement);
  const layout = width > 0 && height > 0 ? (0, import_components_core8.selectGridLayout)(import_components_core8.GRID_LAYOUTS, trackCount, width, height) : import_components_core8.GRID_LAYOUTS[0];
  React15.useEffect(() => {
    if (gridElement.current && layout) {
      gridElement.current.style.setProperty("--lk-col-count", layout == null ? void 0 : layout.columns.toString());
      gridElement.current.style.setProperty("--lk-row-count", layout == null ? void 0 : layout.rows.toString());
    }
  }, [gridElement, layout]);
  return {
    layout
  };
}

// src/hooks/useIsMuted.ts
var import_components_core9 = require("@livekit/components-core");
var React16 = __toESM(require("react"));
function useIsMuted(source, options = {}) {
  var _a;
  const p = useEnsureParticipant(options.participant);
  const [isMuted, setIsMuted] = React16.useState(!!((_a = p.getTrack(source)) == null ? void 0 : _a.isMuted));
  React16.useEffect(() => {
    const listener = (0, import_components_core9.mutedObserver)(p, source).subscribe(setIsMuted);
    return () => listener.unsubscribe();
  }, [p, source]);
  return isMuted;
}

// src/hooks/useIsSpeaking.ts
var import_components_core10 = require("@livekit/components-core");
var React17 = __toESM(require("react"));
function useIsSpeaking(participant) {
  const p = useEnsureParticipant(participant);
  const observable = React17.useMemo(() => (0, import_components_core10.createIsSpeakingObserver)(p), [p]);
  const isSpeaking = useObservableState(observable, p.isSpeaking);
  return isSpeaking;
}

// src/hooks/useLocalParticipant.ts
var import_components_core11 = require("@livekit/components-core");
var React18 = __toESM(require("react"));
function useLocalParticipant(options = {}) {
  const room = useEnsureRoom(options.room);
  const [localParticipant, setLocalParticipant] = React18.useState(room.localParticipant);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = React18.useState(
    localParticipant.isMicrophoneEnabled
  );
  const [isCameraEnabled, setIsCameraEnabled] = React18.useState(
    localParticipant.isMicrophoneEnabled
  );
  const [lastMicrophoneError, setLastMicrophoneError] = React18.useState(
    localParticipant.lastMicrophoneError
  );
  const [lastCameraError, setLastCameraError] = React18.useState(localParticipant.lastCameraError);
  const [isScreenShareEnabled, setIsScreenShareEnabled] = React18.useState(
    localParticipant.isMicrophoneEnabled
  );
  const [microphoneTrack, setMicrophoneTrack] = React18.useState(
    void 0
  );
  const [cameraTrack, setCameraTrack] = React18.useState(void 0);
  const handleUpdate = (media) => {
    setIsCameraEnabled(media.isCameraEnabled);
    setIsMicrophoneEnabled(media.isMicrophoneEnabled);
    setIsScreenShareEnabled(media.isScreenShareEnabled);
    setCameraTrack(media.cameraTrack);
    setMicrophoneTrack(media.microphoneTrack);
    setLastMicrophoneError(media.participant.lastMicrophoneError);
    setLastCameraError(media.participant.lastCameraError);
    setLocalParticipant(media.participant);
  };
  React18.useEffect(() => {
    const listener = (0, import_components_core11.observeParticipantMedia)(localParticipant).subscribe(handleUpdate);
    return () => listener.unsubscribe();
  }, [localParticipant]);
  return {
    isMicrophoneEnabled,
    isScreenShareEnabled,
    isCameraEnabled,
    microphoneTrack,
    cameraTrack,
    lastMicrophoneError,
    lastCameraError,
    localParticipant
  };
}

// src/hooks/useLocalParticipantPermissions.ts
var import_components_core12 = require("@livekit/components-core");
var React19 = __toESM(require("react"));
function useLocalParticipantPermissions() {
  const room = useRoomContext();
  const permissionObserver = React19.useMemo(
    () => (0, import_components_core12.participantPermissionObserver)(room.localParticipant),
    [room]
  );
  const permissions = useObservableState(permissionObserver, room.localParticipant.permissions);
  return permissions;
}

// src/hooks/useMediaDeviceSelect.ts
var import_components_core13 = require("@livekit/components-core");
var React20 = __toESM(require("react"));
function useMediaDeviceSelect({
  kind,
  room,
  track,
  requestPermissions
}) {
  const roomContext = useMaybeRoomContext();
  const deviceObserver = React20.useMemo(
    () => (0, import_components_core13.createMediaDeviceObserver)(kind, requestPermissions),
    [kind, requestPermissions]
  );
  const devices = useObservableState(deviceObserver, []);
  const [currentDeviceId, setCurrentDeviceId] = React20.useState("");
  const { className, activeDeviceObservable, setActiveMediaDevice } = React20.useMemo(
    () => (0, import_components_core13.setupDeviceSelector)(kind, room != null ? room : roomContext, track),
    [kind, room, roomContext, track]
  );
  React20.useEffect(() => {
    const listener = activeDeviceObservable.subscribe((deviceId) => {
      import_components_core13.log.info("setCurrentDeviceId", deviceId);
      if (deviceId)
        setCurrentDeviceId(deviceId);
    });
    return () => {
      listener == null ? void 0 : listener.unsubscribe();
    };
  }, [activeDeviceObservable]);
  return { devices, className, activeDeviceId: currentDeviceId, setActiveMediaDevice };
}

// src/hooks/useMediaDevices.ts
var React21 = __toESM(require("react"));
var import_components_core14 = require("@livekit/components-core");
function useMediaDevices({ kind }) {
  const deviceObserver = React21.useMemo(() => (0, import_components_core14.createMediaDeviceObserver)(kind), [kind]);
  const devices = useObservableState(deviceObserver, []);
  return devices;
}

// src/hooks/useMediaTrackBySourceOrName.ts
var import_components_core15 = require("@livekit/components-core");
var import_components_core16 = require("@livekit/components-core");
var React22 = __toESM(require("react"));
function useMediaTrackBySourceOrName(observerOptions, options = {}) {
  const [publication, setPublication] = React22.useState((0, import_components_core16.getTrackByIdentifier)(observerOptions));
  const [isMuted, setMuted] = React22.useState(publication == null ? void 0 : publication.isMuted);
  const [isSubscribed, setSubscribed] = React22.useState(publication == null ? void 0 : publication.isSubscribed);
  const [track, setTrack] = React22.useState(publication == null ? void 0 : publication.track);
  const [orientation, setOrientation] = React22.useState("landscape");
  const previousElement = React22.useRef();
  const { className, trackObserver } = React22.useMemo(() => {
    return (0, import_components_core16.setupMediaTrack)(observerOptions);
  }, [
    observerOptions.participant.identity,
    observerOptions.source,
    (0, import_components_core15.isTrackReference)(observerOptions) && observerOptions.publication.trackSid
  ]);
  React22.useEffect(() => {
    const subscription = trackObserver.subscribe((publication2) => {
      import_components_core16.log.debug("update track", publication2);
      setPublication(publication2);
      setMuted(publication2 == null ? void 0 : publication2.isMuted);
      setSubscribed(publication2 == null ? void 0 : publication2.isSubscribed);
      setTrack(publication2 == null ? void 0 : publication2.track);
    });
    return () => subscription == null ? void 0 : subscription.unsubscribe();
  }, [trackObserver]);
  React22.useEffect(() => {
    var _a, _b;
    if (track) {
      if (previousElement.current) {
        track.detach(previousElement.current);
      }
      if (((_a = options.element) == null ? void 0 : _a.current) && !((0, import_components_core16.isLocal)(observerOptions.participant) && (track == null ? void 0 : track.kind) === "audio")) {
        track.attach(options.element.current);
      }
    }
    previousElement.current = (_b = options.element) == null ? void 0 : _b.current;
    return () => {
      if (previousElement.current) {
        track == null ? void 0 : track.detach(previousElement.current);
      }
    };
  }, [track, options.element]);
  React22.useEffect(() => {
    var _a, _b;
    if (typeof ((_a = publication == null ? void 0 : publication.dimensions) == null ? void 0 : _a.width) === "number" && typeof ((_b = publication == null ? void 0 : publication.dimensions) == null ? void 0 : _b.height) === "number") {
      const orientation_ = publication.dimensions.width > publication.dimensions.height ? "landscape" : "portrait";
      setOrientation(orientation_);
    }
  }, [publication]);
  return {
    publication,
    isMuted,
    isSubscribed,
    track,
    elementProps: mergeProps2(options.props, __spreadValues({
      className,
      "data-lk-local-participant": observerOptions.participant.isLocal,
      "data-lk-source": publication == null ? void 0 : publication.source
    }, (publication == null ? void 0 : publication.kind) === "video" && { "data-lk-orientation": orientation }))
  };
}

// src/hooks/useMediaTrack.ts
function useMediaTrack(source, participant, options = {}) {
  const p = useEnsureParticipant(participant);
  return useMediaTrackBySourceOrName({ source, participant: p }, options);
}

// src/hooks/usePagination.ts
var React24 = __toESM(require("react"));

// src/hooks/useVisualStableUpdate.ts
var import_components_core17 = require("@livekit/components-core");
var React23 = __toESM(require("react"));
function useVisualStableUpdate(trackReferences, maxItemsOnPage, options = {}) {
  const lastTrackRefs = React23.useRef([]);
  const lastMaxItemsOnPage = React23.useRef(-1);
  const layoutChanged = maxItemsOnPage !== lastMaxItemsOnPage.current;
  const sortedTrackRefs = typeof options.customSortFunction === "function" ? options.customSortFunction(trackReferences) : (0, import_components_core17.sortTrackReferences)(trackReferences);
  let updatedTrackRefs = [...sortedTrackRefs];
  if (layoutChanged === false) {
    try {
      updatedTrackRefs = (0, import_components_core17.updatePages)(lastTrackRefs.current, sortedTrackRefs, maxItemsOnPage);
    } catch (error) {
      import_components_core17.log.error("Error while running updatePages(): ", error);
    }
  }
  if (layoutChanged) {
    lastTrackRefs.current = sortedTrackRefs;
  } else {
    lastTrackRefs.current = updatedTrackRefs;
  }
  lastMaxItemsOnPage.current = maxItemsOnPage;
  return updatedTrackRefs;
}

// src/hooks/usePagination.ts
function usePagination(itemPerPage, trackReferences) {
  const [currentPage, setCurrentPage] = React24.useState(1);
  const totalPageCount = Math.max(Math.ceil(trackReferences.length / itemPerPage), 1);
  if (currentPage > totalPageCount) {
    setCurrentPage(totalPageCount);
  }
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const changePage = (direction) => {
    setCurrentPage((state) => {
      if (direction === "next") {
        if (state === totalPageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const goToPage = (num) => {
    if (num > totalPageCount) {
      setCurrentPage(totalPageCount);
    } else if (num < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(num);
    }
  };
  const updatedTrackReferences = useVisualStableUpdate(trackReferences, itemPerPage);
  const tracksOnPage = updatedTrackReferences.slice(firstItemIndex, lastItemIndex);
  return {
    totalPageCount,
    nextPage: () => changePage("next"),
    prevPage: () => changePage("previous"),
    setPage: goToPage,
    firstItemIndex,
    lastItemIndex,
    tracks: tracksOnPage,
    currentPage
  };
}

// src/hooks/useParticipantTile.ts
var import_components_core18 = require("@livekit/components-core");
var import_livekit_client4 = require("livekit-client");
var React25 = __toESM(require("react"));
function useParticipantTile({
  participant,
  source,
  publication,
  onParticipantClick,
  disableSpeakingIndicator,
  htmlProps
}) {
  const p = useEnsureParticipant(participant);
  const mergedProps = React25.useMemo(() => {
    const { className } = (0, import_components_core18.setupParticipantTile)();
    return mergeProps(htmlProps, {
      className,
      onClick: (event) => {
        var _a;
        (_a = htmlProps.onClick) == null ? void 0 : _a.call(htmlProps, event);
        if (typeof onParticipantClick === "function") {
          const track = publication != null ? publication : p.getTrack(source);
          onParticipantClick({ participant: p, track });
        }
      }
    });
  }, [htmlProps, source, onParticipantClick, p, publication]);
  const isVideoMuted = useIsMuted(import_livekit_client4.Track.Source.Camera, { participant });
  const isAudioMuted = useIsMuted(import_livekit_client4.Track.Source.Microphone, { participant });
  const isSpeaking = useIsSpeaking(participant);
  const facingMode = useFacingMode({ participant, publication, source });
  return {
    elementProps: __spreadValues({
      "data-lk-audio-muted": isAudioMuted,
      "data-lk-video-muted": isVideoMuted,
      "data-lk-speaking": disableSpeakingIndicator === true ? false : isSpeaking,
      "data-lk-local-participant": participant.isLocal,
      "data-lk-source": source,
      "data-lk-facing-mode": facingMode
    }, mergedProps)
  };
}

// src/hooks/useRemoteParticipants.ts
var import_components_core19 = require("@livekit/components-core");
var React26 = __toESM(require("react"));
function useRemoteParticipants(options = {}) {
  const room = useEnsureRoom(options.room);
  const [participants, setParticipants] = React26.useState([]);
  React26.useEffect(() => {
    const listener = (0, import_components_core19.connectedParticipantsObserver)(room, {
      additionalRoomEvents: options.updateOnlyOn
    }).subscribe(setParticipants);
    return () => listener.unsubscribe();
  }, [room, JSON.stringify(options.updateOnlyOn)]);
  return participants;
}

// src/hooks/useParticipants.ts
function useParticipants(options = {}) {
  const remoteParticipants = useRemoteParticipants(options);
  const { localParticipant } = useLocalParticipant(options);
  return [localParticipant, ...remoteParticipants];
}

// src/hooks/usePinnedTracks.ts
var React27 = __toESM(require("react"));
function usePinnedTracks(layoutContext) {
  layoutContext = useEnsureLayoutContext(layoutContext);
  return React27.useMemo(() => {
    if ((layoutContext == null ? void 0 : layoutContext.pin.state) !== void 0 && layoutContext.pin.state.length >= 1) {
      return layoutContext.pin.state;
    }
    return [];
  }, [layoutContext.pin.state]);
}

// src/hooks/useStartAudio.ts
var import_components_core20 = require("@livekit/components-core");
var React28 = __toESM(require("react"));
function useStartAudio({ room, props }) {
  const roomEnsured = useEnsureRoom(room);
  const { className, roomAudioPlaybackAllowedObservable, handleStartAudioPlayback } = React28.useMemo(
    () => (0, import_components_core20.setupStartAudio)(),
    []
  );
  const observable = React28.useMemo(
    () => roomAudioPlaybackAllowedObservable(roomEnsured),
    [roomEnsured, roomAudioPlaybackAllowedObservable]
  );
  const { canPlayAudio } = useObservableState(observable, { canPlayAudio: false });
  const mergedProps = React28.useMemo(
    () => mergeProps(props, {
      className,
      onClick: () => {
        handleStartAudioPlayback(roomEnsured);
      },
      style: { display: canPlayAudio ? "none" : "block" }
    }),
    [props, className, canPlayAudio, handleStartAudioPlayback, roomEnsured]
  );
  return { mergedProps, canPlayAudio };
}

// src/hooks/useSwipe.ts
var React29 = __toESM(require("react"));
function useSwipe(element, options = {}) {
  var _a;
  const touchStart = React29.useRef(null);
  const touchEnd = React29.useRef(null);
  const minSwipeDistance = (_a = options.minSwipeDistance) != null ? _a : 50;
  const onTouchStart = (event) => {
    touchEnd.current = null;
    touchStart.current = event.targetTouches[0].clientX;
  };
  const onTouchMove = (event) => {
    touchEnd.current = event.targetTouches[0].clientX;
  };
  const onTouchEnd = React29.useCallback(() => {
    if (!touchStart.current || !touchEnd.current) {
      return;
    }
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && options.onLeftSwipe)
      options.onLeftSwipe();
    if (isRightSwipe && options.onRightSwipe)
      options.onRightSwipe();
  }, [minSwipeDistance, options]);
  React29.useEffect(() => {
    const elementCopy = element.current;
    if (elementCopy) {
      elementCopy.addEventListener("touchstart", onTouchStart, { passive: true });
      elementCopy.addEventListener("touchmove", onTouchMove, { passive: true });
      elementCopy.addEventListener("touchend", onTouchEnd, { passive: true });
    }
    return () => {
      if (elementCopy) {
        elementCopy.removeEventListener("touchstart", onTouchStart);
        elementCopy.removeEventListener("touchmove", onTouchMove);
        elementCopy.removeEventListener("touchend", onTouchEnd);
      }
    };
  }, [element, onTouchEnd]);
}

// src/hooks/useChatToggle.ts
var import_components_core21 = require("@livekit/components-core");
var React30 = __toESM(require("react"));
function useChatToggle({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const { className } = React30.useMemo(() => (0, import_components_core21.setupChatToggle)(), []);
  const mergedProps = React30.useMemo(() => {
    return mergeProps(props, {
      className,
      onClick: () => {
        if (dispatch)
          dispatch({ msg: "toggle_chat" });
      },
      "aria-pressed": (state == null ? void 0 : state.showChat) ? "true" : "false",
      "data-lk-unread-msgs": state ? state.unreadMessages < 10 ? state.unreadMessages.toFixed(0) : "9+" : "0"
    });
  }, [props, className, dispatch, state]);
  return { mergedProps };
}

// src/hooks/useTrackMutedIndicator.ts
var import_components_core22 = require("@livekit/components-core");
var React31 = __toESM(require("react"));
function useTrackMutedIndicator(source, options = {}) {
  var _a;
  const p = useEnsureParticipant(options.participant);
  const { className, mediaMutedObserver } = React31.useMemo(
    () => (0, import_components_core22.setupTrackMutedIndicator)(p, source),
    [p, source]
  );
  const isMuted = useObservableState(mediaMutedObserver, !!((_a = p.getTrack(source)) == null ? void 0 : _a.isMuted));
  return { isMuted, className };
}

// src/hooks/useTrackToggle.ts
var import_components_core23 = require("@livekit/components-core");
var React32 = __toESM(require("react"));
function useTrackToggle(_a) {
  var _b = _a, {
    source,
    onChange,
    initialState,
    captureOptions
  } = _b, rest = __objRest(_b, [
    "source",
    "onChange",
    "initialState",
    "captureOptions"
  ]);
  var _a2;
  const room = useMaybeRoomContext();
  const track = (_a2 = room == null ? void 0 : room.localParticipant) == null ? void 0 : _a2.getTrack(source);
  const { toggle, className, pendingObserver, enabledObserver } = React32.useMemo(
    () => room ? (0, import_components_core23.setupMediaToggle)(source, room, captureOptions) : (0, import_components_core23.setupManualToggle)(),
    [room, source, JSON.stringify(captureOptions)]
  );
  const pending = useObservableState(pendingObserver, false);
  const enabled = useObservableState(enabledObserver, initialState != null ? initialState : !!(track == null ? void 0 : track.isEnabled));
  React32.useEffect(() => {
    onChange == null ? void 0 : onChange(enabled);
  }, [enabled, onChange]);
  React32.useEffect(() => {
    if (initialState !== void 0) {
      import_components_core23.log.debug("forcing initial toggle state", source, initialState);
      toggle(initialState);
    }
  }, []);
  const newProps = React32.useMemo(() => mergeProps(rest, { className }), [rest, className]);
  const clickHandler = React32.useCallback(
    (evt) => {
      var _a3;
      toggle();
      (_a3 = rest.onClick) == null ? void 0 : _a3.call(rest, evt);
    },
    [rest, toggle]
  );
  return {
    toggle,
    enabled,
    pending,
    track,
    buttonProps: __spreadProps(__spreadValues({}, newProps), {
      "aria-pressed": enabled,
      "data-lk-source": source,
      "data-lk-enabled": enabled,
      disabled: pending,
      onClick: clickHandler
    })
  };
}

// src/hooks/useTracks.ts
var import_components_core24 = require("@livekit/components-core");
var import_livekit_client5 = require("livekit-client");
var React33 = __toESM(require("react"));
function useTracks(sources = [
  import_livekit_client5.Track.Source.Camera,
  import_livekit_client5.Track.Source.Microphone,
  import_livekit_client5.Track.Source.ScreenShare,
  import_livekit_client5.Track.Source.ScreenShareAudio,
  import_livekit_client5.Track.Source.Unknown
], options = {}) {
  const room = useEnsureRoom(options.room);
  const [trackReferences, setTrackReferences] = React33.useState([]);
  const [participants, setParticipants] = React33.useState([]);
  const sources_ = React33.useMemo(() => {
    return sources.map((s) => (0, import_components_core24.isSourceWitOptions)(s) ? s.source : s);
  }, [JSON.stringify(sources)]);
  React33.useEffect(() => {
    const subscription = (0, import_components_core24.trackReferencesObservable)(room, sources_, {
      additionalRoomEvents: options.updateOnlyOn,
      onlySubscribed: options.onlySubscribed
    }).subscribe(({ trackReferences: trackReferences2, participants: participants2 }) => {
      import_components_core24.log.debug("setting track bundles", trackReferences2, participants2);
      setTrackReferences(trackReferences2);
      setParticipants(participants2);
    });
    return () => subscription.unsubscribe();
  }, [room, JSON.stringify(options.updateOnlyOn), JSON.stringify(sources)]);
  const maybeTrackReferences = React33.useMemo(() => {
    if ((0, import_components_core24.isSourcesWithOptions)(sources)) {
      const requirePlaceholder = requiredPlaceholders(sources, participants);
      const trackReferencesWithPlaceholders = Array.from(trackReferences);
      participants.forEach((participant) => {
        var _a;
        if (requirePlaceholder.has(participant.identity)) {
          const sourcesToAddPlaceholder = (_a = requirePlaceholder.get(participant.identity)) != null ? _a : [];
          sourcesToAddPlaceholder.forEach((placeholderSource) => {
            if (trackReferences.find(
              ({ participant: p, publication }) => participant.identity === p.identity && publication.source === placeholderSource
            )) {
              return;
            }
            import_components_core24.log.debug(
              `Add ${placeholderSource} placeholder for participant ${participant.identity}.`
            );
            const placeholder = {
              participant,
              source: placeholderSource
            };
            trackReferencesWithPlaceholders.push(placeholder);
          });
        }
      });
      return trackReferencesWithPlaceholders;
    } else {
      return trackReferences;
    }
  }, [trackReferences, participants, sources]);
  return maybeTrackReferences;
}
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}
function requiredPlaceholders(sources, participants) {
  const placeholderMap = /* @__PURE__ */ new Map();
  if ((0, import_components_core24.isSourcesWithOptions)(sources)) {
    const sourcesThatNeedPlaceholder = sources.filter((sourceWithOption) => sourceWithOption.withPlaceholder).map((sourceWithOption) => sourceWithOption.source);
    participants.forEach((participant) => {
      const sourcesOfSubscribedTracks = participant.getTracks().map((pub) => {
        var _a;
        return (_a = pub.track) == null ? void 0 : _a.source;
      }).filter((trackSource) => trackSource !== void 0);
      const placeholderNeededForThisParticipant = Array.from(
        difference(new Set(sourcesThatNeedPlaceholder), new Set(sourcesOfSubscribedTracks))
      );
      if (placeholderNeededForThisParticipant.length > 0) {
        placeholderMap.set(participant.identity, placeholderNeededForThisParticipant);
      }
    });
  }
  return placeholderMap;
}

// src/components/controls/MediaDeviceSelect.tsx
function MediaDeviceSelect(_a) {
  var _b = _a, {
    kind,
    initialSelection,
    onActiveDeviceChange,
    onDeviceListChange,
    onDeviceSelectError,
    exactMatch,
    track,
    requestPermissions
  } = _b, props = __objRest(_b, [
    "kind",
    "initialSelection",
    "onActiveDeviceChange",
    "onDeviceListChange",
    "onDeviceSelectError",
    "exactMatch",
    "track",
    "requestPermissions"
  ]);
  const room = useMaybeRoomContext();
  const { devices, activeDeviceId, setActiveMediaDevice, className } = useMediaDeviceSelect({
    kind,
    room,
    track,
    requestPermissions
  });
  React34.useEffect(() => {
    if (initialSelection !== void 0) {
      setActiveMediaDevice(initialSelection);
    }
  }, [setActiveMediaDevice]);
  React34.useEffect(() => {
    if (typeof onDeviceListChange === "function") {
      onDeviceListChange(devices);
    }
  }, [onDeviceListChange, devices]);
  React34.useEffect(() => {
    if (activeDeviceId && activeDeviceId !== "") {
      onActiveDeviceChange == null ? void 0 : onActiveDeviceChange(activeDeviceId);
    }
  }, [activeDeviceId]);
  const handleActiveDeviceChange = (deviceId) => __async(this, null, function* () {
    try {
      yield setActiveMediaDevice(deviceId, { exact: exactMatch });
    } catch (e) {
      if (e instanceof Error) {
        onDeviceSelectError == null ? void 0 : onDeviceSelectError(e);
      } else {
        throw e;
      }
    }
  });
  const mergedProps = React34.useMemo(
    () => mergeProps2(props, { className }, { className: "lk-list" }),
    [className, props]
  );
  function isActive(deviceId, activeDeviceId2, index) {
    return deviceId === activeDeviceId2 || index === 0 && activeDeviceId2 === "default";
  }
  return /* @__PURE__ */ React34.createElement("ul", __spreadValues({}, mergedProps), devices.map((device, index) => /* @__PURE__ */ React34.createElement(
    "li",
    {
      key: device.deviceId,
      id: device.deviceId,
      "data-lk-active": isActive(device.deviceId, activeDeviceId, index),
      "aria-selected": isActive(device.deviceId, activeDeviceId, index),
      role: "option"
    },
    /* @__PURE__ */ React34.createElement("button", { className: "lk-button", onClick: () => handleActiveDeviceChange(device.deviceId) }, device.label)
  )));
}

// src/prefabs/MediaDeviceMenu.tsx
var import_components_core26 = require("@livekit/components-core");
function MediaDeviceMenu(_a) {
  var _b = _a, {
    kind,
    initialSelection,
    onActiveDeviceChange,
    tracks,
    requestPermissions = false
  } = _b, props = __objRest(_b, [
    "kind",
    "initialSelection",
    "onActiveDeviceChange",
    "tracks",
    "requestPermissions"
  ]);
  const [isOpen, setIsOpen] = React35.useState(false);
  const [devices, setDevices] = React35.useState([]);
  const [updateRequired, setUpdateRequired] = React35.useState(true);
  const handleActiveDeviceChange = (kind2, deviceId) => {
    import_components_core26.log.debug("handle device change");
    setIsOpen(false);
    onActiveDeviceChange == null ? void 0 : onActiveDeviceChange(kind2, deviceId);
  };
  const button = React35.useRef(null);
  const tooltip = React35.useRef(null);
  React35.useLayoutEffect(() => {
    if (button.current && tooltip.current && (devices || updateRequired)) {
      (0, import_components_core25.computeMenuPosition)(button.current, tooltip.current).then(({ x, y }) => {
        if (tooltip.current) {
          Object.assign(tooltip.current.style, { left: `${x}px`, top: `${y}px` });
        }
      });
    }
    setUpdateRequired(false);
  }, [button, tooltip, devices, updateRequired]);
  const handleClickOutside = React35.useCallback(
    (event) => {
      if (!tooltip.current) {
        return;
      }
      if (event.target === button.current) {
        return;
      }
      if (isOpen && (0, import_components_core25.wasClickOutside)(tooltip.current, event)) {
        setIsOpen(false);
      }
    },
    [isOpen, tooltip, button]
  );
  React35.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", () => setUpdateRequired(true));
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", () => setUpdateRequired(true));
    };
  }, [handleClickOutside, setUpdateRequired]);
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement(
    "button",
    __spreadProps(__spreadValues({
      className: "lk-button lk-button-menu",
      "aria-pressed": isOpen
    }, props), {
      onClick: () => setIsOpen(!isOpen),
      ref: button
    }),
    props.children
  ), !props.disabled && /* @__PURE__ */ React35.createElement(
    "div",
    {
      className: "lk-device-menu",
      ref: tooltip,
      style: { visibility: isOpen ? "visible" : "hidden" }
    },
    kind ? /* @__PURE__ */ React35.createElement(
      MediaDeviceSelect,
      {
        initialSelection,
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange(kind, deviceId),
        onDeviceListChange: setDevices,
        kind,
        track: tracks == null ? void 0 : tracks[kind],
        requestPermissions
      }
    ) : /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement("div", { className: "lk-device-menu-heading" }, "Audio inputs"), /* @__PURE__ */ React35.createElement(
      MediaDeviceSelect,
      {
        kind: "audioinput",
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange("audioinput", deviceId),
        onDeviceListChange: setDevices,
        track: tracks == null ? void 0 : tracks.audioinput,
        requestPermissions
      }
    ), /* @__PURE__ */ React35.createElement("div", { className: "lk-device-menu-heading" }, "Video inputs"), /* @__PURE__ */ React35.createElement(
      MediaDeviceSelect,
      {
        kind: "videoinput",
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange("videoinput", deviceId),
        onDeviceListChange: setDevices,
        track: tracks == null ? void 0 : tracks.videoinput,
        requestPermissions
      }
    ))
  ));
}

// src/components/controls/TrackToggle.tsx
var React53 = __toESM(require("react"));

// src/assets/icons/util.tsx
var React52 = __toESM(require("react"));
var import_livekit_client6 = require("livekit-client");

// src/assets/icons/ChatIcon.tsx
var React36 = __toESM(require("react"));
var SvgChatIcon = (props) => /* @__PURE__ */ React36.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 18, fill: "none" }, props), /* @__PURE__ */ React36.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v13.594a.75.75 0 0 1-1.234.572l-3.691-3.12a1.25 1.25 0 0 0-.807-.296H2.75A2.75 2.75 0 0 1 0 10.75v-8ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h7.518c.65 0 1.279.23 1.775.65l2.457 2.077V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React36.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    clipRule: "evenodd"
  }
));
var ChatIcon_default = SvgChatIcon;

// src/assets/icons/Chevron.tsx
var React37 = __toESM(require("react"));
var SvgChevron = (props) => /* @__PURE__ */ React37.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React37.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M5.293 2.293a1 1 0 0 1 1.414 0l4.823 4.823a1.25 1.25 0 0 1 0 1.768l-4.823 4.823a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707a1 1 0 0 1 0-1.414z",
    clipRule: "evenodd"
  }
));
var Chevron_default = SvgChevron;

// src/assets/icons/FocusToggleIcon.tsx
var React38 = __toESM(require("react"));
var SvgFocusToggleIcon = (props) => /* @__PURE__ */ React38.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React38.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ React38.createElement("path", { d: "M10 1.75h4.25m0 0V6m0-4.25L9 7M6 14.25H1.75m0 0V10m0 4.25L7 9" })));
var FocusToggleIcon_default = SvgFocusToggleIcon;

// src/assets/icons/LeaveIcon.tsx
var React39 = __toESM(require("react"));
var SvgLeaveIcon = (props) => /* @__PURE__ */ React39.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React39.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 2.75A2.75 2.75 0 0 1 4.75 0h6.5A2.75 2.75 0 0 1 14 2.75v10.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React39.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.78 7.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h4.69l-.97-.97a.75.75 0 0 1 1.06-1.06l2.25 2.25Z",
    clipRule: "evenodd"
  }
));
var LeaveIcon_default = SvgLeaveIcon;

// src/assets/icons/QualityExcellentIcon.tsx
var React40 = __toESM(require("react"));
var SvgQualityExcellentIcon = (props) => /* @__PURE__ */ React40.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React40.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React40.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }));
var QualityExcellentIcon_default = SvgQualityExcellentIcon;

// src/assets/icons/QualityGoodIcon.tsx
var React41 = __toESM(require("react"));
var SvgQualityGoodIcon = (props) => /* @__PURE__ */ React41.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React41.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React41.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React41.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React41.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React41.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityGoodIcon_default = SvgQualityGoodIcon;

// src/assets/icons/QualityPoorIcon.tsx
var React42 = __toESM(require("react"));
var SvgQualityPoorIcon = (props) => /* @__PURE__ */ React42.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React42.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React42.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React42.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React42.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React42.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React42.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityPoorIcon_default = SvgQualityPoorIcon;

// src/assets/icons/QualityUnknownIcon.tsx
var React43 = __toESM(require("react"));
var SvgQualityUnknownIcon = (props) => /* @__PURE__ */ React43.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React43.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React43.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4Zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9Zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V.5Z" }), /* @__PURE__ */ React43.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4Zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9Zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V.5Z" })));
var QualityUnknownIcon_default = SvgQualityUnknownIcon;

// src/assets/icons/ScreenShareIcon.tsx
var React44 = __toESM(require("react"));
var SvgScreenShareIcon = (props) => /* @__PURE__ */ React44.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none" }, props), /* @__PURE__ */ React44.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h14.5A2.75 2.75 0 0 1 20 2.75v10.5A2.75 2.75 0 0 1 17.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React44.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.47 4.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v4.69a.75.75 0 0 1-1.5 0V6.56l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25Z",
    clipRule: "evenodd"
  }
));
var ScreenShareIcon_default = SvgScreenShareIcon;

// src/assets/icons/ScreenShareStopIcon.tsx
var React45 = __toESM(require("react"));
var SvgScreenShareStopIcon = (props) => /* @__PURE__ */ React45.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none" }, props), /* @__PURE__ */ React45.createElement("g", { fill: "currentColor" }, /* @__PURE__ */ React45.createElement("path", { d: "M7.28 4.22a.75.75 0 0 0-1.06 1.06L8.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 6.94z" }), /* @__PURE__ */ React45.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.75 0A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h14.5A2.75 2.75 0 0 0 20 13.25V2.75A2.75 2.75 0 0 0 17.25 0zM1.5 2.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25z",
    clipRule: "evenodd"
  }
)));
var ScreenShareStopIcon_default = SvgScreenShareStopIcon;

// src/assets/icons/SpinnerIcon.tsx
var React46 = __toESM(require("react"));
var SvgSpinnerIcon = (props) => /* @__PURE__ */ React46.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 12Z",
    clipRule: "evenodd",
    opacity: 0.7
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1.072a.75.75 0 0 1 .274 1.024l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 12 1.072Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 11.464a.75.75 0 0 1 .274 1.025l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 6 11.464Z",
    clipRule: "evenodd",
    opacity: 0.6
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 4a.75.75 0 0 1-.274 1.025l-2.165 1.25a.75.75 0 1 1-.75-1.3l2.165-1.25A.75.75 0 0 1 14.928 4Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 10a.75.75 0 0 1-.275 1.024l-2.165 1.25a.75.75 0 0 1-.75-1.298l2.165-1.25A.75.75 0 0 1 4.536 10Z",
    clipRule: "evenodd",
    opacity: 0.5
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16 8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 16 8Z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 8Z",
    clipRule: "evenodd",
    opacity: 0.4
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 12a.75.75 0 0 1-1.024.274l-2.165-1.25a.75.75 0 0 1 .75-1.299l2.165 1.25A.75.75 0 0 1 14.928 12Z",
    clipRule: "evenodd",
    opacity: 0.9
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 6a.75.75 0 0 1-1.025.275l-2.165-1.25a.75.75 0 1 1 .75-1.3l2.165 1.25A.75.75 0 0 1 4.536 6Z",
    clipRule: "evenodd",
    opacity: 0.3
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 14.928a.75.75 0 0 1-1.024-.274l-1.25-2.165a.75.75 0 0 1 1.298-.75l1.25 2.165A.75.75 0 0 1 12 14.928Z",
    clipRule: "evenodd",
    opacity: 0.8
  }
), /* @__PURE__ */ React46.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 4.536a.75.75 0 0 1-1.024-.275l-1.25-2.165a.75.75 0 1 1 1.299-.75l1.25 2.165A.75.75 0 0 1 6 4.536Z",
    clipRule: "evenodd",
    opacity: 0.2
  }
));
var SpinnerIcon_default = SvgSpinnerIcon;

// src/assets/icons/UnfocusToggleIcon.tsx
var React47 = __toESM(require("react"));
var SvgUnfocusToggleIcon = (props) => /* @__PURE__ */ React47.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React47.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ React47.createElement("path", { d: "M13.25 7H9m0 0V2.75M9 7l5.25-5.25M2.75 9H7m0 0v4.25M7 9l-5.25 5.25" })));
var UnfocusToggleIcon_default = SvgUnfocusToggleIcon;

// src/assets/icons/tl/CameraDisabledIcon.tsx
var React48 = __toESM(require("react"));
var SvgCameraDisabledIcon = (props) => /* @__PURE__ */ React48.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React48.createElement(
    "path",
    {
      d: "M14.6155 6.64973C14.6155 6.64973 14.6409 5.84659 14.6155 5.58451C14.4718 3.85986 13.3474 3.26807 11.1409 3.26807H5.80627C3.13476 3.26807 2.24707 4.15575 2.24707 6.82727V13.9457C2.24707 15.0109 2.56833 16.0846 3.40529 16.7694L3.9379 17.1498",
      stroke: "white",
      "stroke-width": "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React48.createElement(
    "path",
    {
      d: "M14.7084 9.49878V13.9457C14.7084 16.6172 13.8207 17.5049 11.1492 17.5049H6.69385",
      stroke: "white",
      "stroke-width": "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React48.createElement(
    "path",
    {
      d: "M19.1554 5.93958V13.6075C19.1554 15.0194 18.2085 15.5097 17.0588 14.6981L14.7085 13.0495",
      stroke: "white",
      "stroke-width": "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React48.createElement(
    "path",
    {
      d: "M19.172 2.0929L2.26367 19.0012",
      stroke: "white",
      "stroke-width": "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var CameraDisabledIcon_default = SvgCameraDisabledIcon;

// src/assets/icons/tl/CameraIcon.tsx
var React49 = __toESM(require("react"));
var SvgCameraIcon = (props) => /* @__PURE__ */ React49.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React49.createElement(
    "path",
    {
      d: "M10.9042 17.5049H5.56116C2.88964 17.5049 2.00195 15.7295 2.00195 13.9457V6.82727C2.00195 4.15575 2.88964 3.26807 5.56116 3.26807H10.9042C13.5757 3.26807 14.4634 4.15575 14.4634 6.82727V13.9457C14.4634 16.6172 13.5673 17.5049 10.9042 17.5049Z",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React49.createElement(
    "path",
    {
      d: "M16.8136 14.6981L14.4634 13.0495V7.71495L16.8136 6.06638C17.9634 5.26324 18.9103 5.75358 18.9103 7.16543V13.6075C18.9103 15.0193 17.9634 15.5097 16.8136 14.6981Z",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React49.createElement(
    "path",
    {
      d: "M10.0333 9.54101C10.7336 9.54101 11.3014 8.97325 11.3014 8.27289C11.3014 7.57252 10.7336 7.00476 10.0333 7.00476C9.3329 7.00476 8.76514 7.57252 8.76514 8.27289C8.76514 8.97325 9.3329 9.54101 10.0333 9.54101Z",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var CameraIcon_default = SvgCameraIcon;

// src/assets/icons/tl/MicDisabledIcon.tsx
var React50 = __toESM(require("react"));
var SvgMicDisabledIcon = (props) => /* @__PURE__ */ React50.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M14.222 5.74004V5.48647C14.222 3.61847 12.709 2.10547 10.841 2.10547C8.97296 2.10547 7.45996 3.61847 7.45996 5.48647V9.71272",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M8.33936 12.4091C8.95639 13.0937 9.85235 13.5163 10.8413 13.5163C12.7093 13.5163 14.2223 12.0033 14.2223 10.1353V9.71271",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M6.42871 14.7419C7.5867 15.8154 9.13351 16.4747 10.8409 16.4747C14.4079 16.4747 17.3071 13.5755 17.3071 10.0085V8.57159",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M4.375 8.57159V10.0085C4.375 10.9045 4.5525 11.7497 4.88215 12.5274",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M17.6624 2.81549L4.02002 16.4663",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M9.99561 2.95068V5.48643",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React50.createElement(
    "path",
    {
      d: "M10.8408 16.4747V19.0105",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var MicDisabledIcon_default = SvgMicDisabledIcon;

// src/assets/icons/tl/MicIcon.tsx
var React51 = __toESM(require("react"));
var SvgMicIcon = (props) => /* @__PURE__ */ React51.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 22 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React51.createElement(
    "path",
    {
      d: "M10.9049 13.3448C12.7729 13.3448 14.2859 11.8318 14.2859 9.96384V5.31496C14.2859 3.44696 12.7729 1.93396 10.9049 1.93396C9.03692 1.93396 7.52393 3.44696 7.52393 5.31496V9.96384C7.52393 11.8318 9.03692 13.3448 10.9049 13.3448Z",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React51.createElement(
    "path",
    {
      d: "M4.43896 8.40009V9.83701C4.43896 13.404 7.33817 16.3032 10.9051 16.3032C14.4721 16.3032 17.3713 13.404 17.3713 9.83701V8.40009",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React51.createElement(
    "path",
    {
      d: "M9.73047 5.67844C10.4912 5.39951 11.3195 5.39951 12.0803 5.67844",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React51.createElement(
    "path",
    {
      d: "M10.229 7.47034C10.677 7.35201 11.1419 7.35201 11.5899 7.47034",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React51.createElement(
    "path",
    {
      d: "M10.9048 16.3032V18.839",
      stroke: "white",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var MicIcon_default = SvgMicIcon;

// src/assets/icons/util.tsx
function getSourceIcon(source, enabled) {
  switch (source) {
    case import_livekit_client6.Track.Source.Microphone:
      return enabled ? /* @__PURE__ */ React52.createElement(MicIcon_default, null) : /* @__PURE__ */ React52.createElement(MicDisabledIcon_default, null);
    case import_livekit_client6.Track.Source.Camera:
      return enabled ? /* @__PURE__ */ React52.createElement(CameraIcon_default, null) : /* @__PURE__ */ React52.createElement(CameraDisabledIcon_default, null);
    case import_livekit_client6.Track.Source.ScreenShare:
      return enabled ? /* @__PURE__ */ React52.createElement(ScreenShareStopIcon_default, null) : /* @__PURE__ */ React52.createElement(ScreenShareIcon_default, null);
    default:
      return void 0;
  }
}
function getConnectionQualityIcon(quality) {
  switch (quality) {
    case import_livekit_client6.ConnectionQuality.Excellent:
      return /* @__PURE__ */ React52.createElement(QualityExcellentIcon_default, null);
    case import_livekit_client6.ConnectionQuality.Good:
      return /* @__PURE__ */ React52.createElement(QualityGoodIcon_default, null);
    case import_livekit_client6.ConnectionQuality.Poor:
      return /* @__PURE__ */ React52.createElement(QualityPoorIcon_default, null);
    default:
      return /* @__PURE__ */ React52.createElement(QualityUnknownIcon_default, null);
  }
}

// src/components/controls/TrackToggle.tsx
function TrackToggle(_a) {
  var _b = _a, { showIcon } = _b, props = __objRest(_b, ["showIcon"]);
  const { buttonProps, enabled } = useTrackToggle(props);
  return /* @__PURE__ */ React53.createElement("button", __spreadValues({}, buttonProps), (showIcon != null ? showIcon : true) && getSourceIcon(props.source, enabled), props.children);
}

// src/prefabs/PreJoin.tsx
var import_components_core27 = require("@livekit/components-core");

// src/assets/images/ParticipantPlaceholder.tsx
var React54 = __toESM(require("react"));
var SvgParticipantPlaceholder = (props) => /* @__PURE__ */ React54.createElement(
  "svg",
  __spreadValues({
    width: 320,
    height: 320,
    viewBox: "0 0 320 320",
    preserveAspectRatio: "xMidYMid meet",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React54.createElement(
    "path",
    {
      d: "M160 180C204.182 180 240 144.183 240 100C240 55.8172 204.182 20 160 20C115.817 20 79.9997 55.8172 79.9997 100C79.9997 144.183 115.817 180 160 180Z",
      fill: "white",
      fillOpacity: 0.25
    }
  ),
  /* @__PURE__ */ React54.createElement(
    "path",
    {
      d: "M97.6542 194.614C103.267 191.818 109.841 192.481 115.519 195.141C129.025 201.466 144.1 205 159.999 205C175.899 205 190.973 201.466 204.48 195.141C210.158 192.481 216.732 191.818 222.345 194.614C262.703 214.719 291.985 253.736 298.591 300.062C300.15 310.997 291.045 320 280 320H39.9997C28.954 320 19.8495 310.997 21.4087 300.062C28.014 253.736 57.2966 214.72 97.6542 194.614Z",
      fill: "white",
      fillOpacity: 0.25
    }
  )
);
var ParticipantPlaceholder_default = SvgParticipantPlaceholder;

// src/prefabs/PreJoin.tsx
var DEFAULT_USER_CHOICES = {
  username: "",
  videoEnabled: true,
  audioEnabled: true,
  videoDeviceId: "default",
  audioDeviceId: "default"
};
function usePreviewTracks(options, onError) {
  const [tracks, setTracks] = React55.useState();
  React55.useEffect(() => {
    let trackPromise = void 0;
    let needsCleanup = false;
    if (options.audio || options.video) {
      trackPromise = (0, import_livekit_client7.createLocalTracks)(options);
      trackPromise.then((tracks2) => {
        if (needsCleanup) {
          tracks2.forEach((tr) => tr.stop());
        } else {
          setTracks(tracks2);
        }
      }).catch(onError);
    }
    return () => {
      needsCleanup = true;
      trackPromise == null ? void 0 : trackPromise.then(
        (tracks2) => tracks2.forEach((track) => {
          track.stop();
        })
      );
    };
  }, [JSON.stringify(options)]);
  return tracks;
}
function usePreviewDevice(enabled, deviceId, kind) {
  const [deviceError, setDeviceError] = React55.useState(null);
  const [isCreatingTrack, setIsCreatingTrack] = React55.useState(false);
  const devices = useMediaDevices({ kind });
  const [selectedDevice, setSelectedDevice] = React55.useState(
    void 0
  );
  const [localTrack, setLocalTrack] = React55.useState();
  const [localDeviceId, setLocalDeviceId] = React55.useState(deviceId);
  React55.useEffect(() => {
    setLocalDeviceId(deviceId);
  }, [deviceId]);
  const createTrack = (deviceId2, kind2) => __async(this, null, function* () {
    try {
      const track = kind2 === "videoinput" ? yield (0, import_livekit_client7.createLocalVideoTrack)({
        deviceId: deviceId2,
        resolution: import_livekit_client7.VideoPresets.h720.resolution
      }) : yield (0, import_livekit_client7.createLocalAudioTrack)({ deviceId: deviceId2 });
      const newDeviceId = yield track.getDeviceId();
      if (newDeviceId && deviceId2 !== newDeviceId) {
        prevDeviceId.current = newDeviceId;
        setLocalDeviceId(newDeviceId);
      }
      setLocalTrack(track);
    } catch (e) {
      if (e instanceof Error) {
        setDeviceError(e);
      }
    }
  });
  const switchDevice = (track, id) => __async(this, null, function* () {
    yield track.setDeviceId(id);
    prevDeviceId.current = id;
  });
  const prevDeviceId = React55.useRef(localDeviceId);
  React55.useEffect(() => {
    if (enabled && !localTrack && !deviceError && !isCreatingTrack) {
      import_components_core27.log.debug("creating track", kind);
      setIsCreatingTrack(true);
      createTrack(localDeviceId, kind).finally(() => {
        setIsCreatingTrack(false);
      });
    }
  }, [enabled, localTrack, deviceError, isCreatingTrack]);
  React55.useEffect(() => {
    if (!localTrack) {
      return;
    }
    if (!enabled) {
      import_components_core27.log.debug(`muting ${kind} track`);
      localTrack.mute().then(() => import_components_core27.log.debug(localTrack.mediaStreamTrack));
    } else if ((selectedDevice == null ? void 0 : selectedDevice.deviceId) && prevDeviceId.current !== (selectedDevice == null ? void 0 : selectedDevice.deviceId)) {
      import_components_core27.log.debug(`switching ${kind} device from`, prevDeviceId.current, selectedDevice.deviceId);
      switchDevice(localTrack, selectedDevice.deviceId);
    } else {
      import_components_core27.log.debug(`unmuting local ${kind} track`);
      localTrack.unmute();
    }
  }, [localTrack, selectedDevice, enabled, kind]);
  React55.useEffect(() => {
    return () => {
      if (localTrack) {
        import_components_core27.log.debug(`stopping local ${kind} track`);
        localTrack.stop();
        localTrack.mute();
      }
    };
  }, []);
  React55.useEffect(() => {
    setSelectedDevice(devices.find((dev) => dev.deviceId === localDeviceId));
  }, [localDeviceId, devices]);
  return {
    selectedDevice,
    localTrack,
    deviceError
  };
}
function PreJoin(_a) {
  var _b = _a, {
    defaults = {},
    onValidate,
    onSubmit,
    onError,
    debug,
    joinLabel = "Join Room",
    micLabel = "Microphone",
    camLabel = "Camera",
    userLabel = "Username"
  } = _b, htmlProps = __objRest(_b, [
    "defaults",
    "onValidate",
    "onSubmit",
    "onError",
    "debug",
    "joinLabel",
    "micLabel",
    "camLabel",
    "userLabel"
  ]);
  var _a2, _b2, _c, _d, _e;
  const [userChoices, setUserChoices] = React55.useState(DEFAULT_USER_CHOICES);
  const [username, setUsername] = React55.useState(
    (_a2 = defaults.username) != null ? _a2 : DEFAULT_USER_CHOICES.username
  );
  const [videoEnabled, setVideoEnabled] = React55.useState(
    (_b2 = defaults.videoEnabled) != null ? _b2 : DEFAULT_USER_CHOICES.videoEnabled
  );
  const initialVideoDeviceId = (_c = defaults.videoDeviceId) != null ? _c : DEFAULT_USER_CHOICES.videoDeviceId;
  const [videoDeviceId, setVideoDeviceId] = React55.useState(initialVideoDeviceId);
  const initialAudioDeviceId = (_d = defaults.audioDeviceId) != null ? _d : DEFAULT_USER_CHOICES.audioDeviceId;
  const [audioEnabled, setAudioEnabled] = React55.useState(
    (_e = defaults.audioEnabled) != null ? _e : DEFAULT_USER_CHOICES.audioEnabled
  );
  const [audioDeviceId, setAudioDeviceId] = React55.useState(initialAudioDeviceId);
  const tracks = usePreviewTracks(
    {
      audio: audioEnabled ? { deviceId: initialAudioDeviceId } : false,
      video: videoEnabled ? { deviceId: initialVideoDeviceId } : false
    },
    onError
  );
  const videoEl = React55.useRef(null);
  const videoTrack = React55.useMemo(
    () => tracks == null ? void 0 : tracks.filter((track) => track.kind === import_livekit_client7.Track.Kind.Video)[0],
    [tracks]
  );
  const facingMode = React55.useMemo(() => {
    if (videoTrack) {
      const { facingMode: facingMode2 } = (0, import_livekit_client7.facingModeFromLocalTrack)(videoTrack);
      return facingMode2;
    } else {
      return "undefined";
    }
  }, [videoTrack]);
  const audioTrack = React55.useMemo(
    () => tracks == null ? void 0 : tracks.filter((track) => track.kind === import_livekit_client7.Track.Kind.Audio)[0],
    [tracks]
  );
  React55.useEffect(() => {
    if (videoEl.current && videoTrack) {
      videoTrack.unmute();
      videoTrack.attach(videoEl.current);
    }
    return () => {
      videoTrack == null ? void 0 : videoTrack.detach();
    };
  }, [videoTrack]);
  const [isValid, setIsValid] = React55.useState();
  const handleValidation = React55.useCallback(
    (values) => {
      if (typeof onValidate === "function") {
        return onValidate(values);
      } else {
        return values.username !== "";
      }
    },
    [onValidate]
  );
  React55.useEffect(() => {
    const newUserChoices = {
      username,
      videoEnabled,
      videoDeviceId,
      audioEnabled,
      audioDeviceId
    };
    setUserChoices(newUserChoices);
    setIsValid(handleValidation(newUserChoices));
  }, [username, videoEnabled, handleValidation, audioEnabled, audioDeviceId, videoDeviceId]);
  function handleSubmit(event) {
    event.preventDefault();
    if (handleValidation(userChoices)) {
      if (typeof onSubmit === "function") {
        onSubmit(userChoices);
      }
    } else {
      import_components_core27.log.warn("Validation failed with: ", userChoices);
    }
  }
  return /* @__PURE__ */ React55.createElement("div", __spreadValues({ className: "lk-prejoin" }, htmlProps), /* @__PURE__ */ React55.createElement("div", { className: "lk-video-container" }, videoTrack && /* @__PURE__ */ React55.createElement("video", { ref: videoEl, width: "1280", height: "720", "data-lk-facing-mode": facingMode }), (!videoTrack || !videoEnabled) && /* @__PURE__ */ React55.createElement("div", { className: "lk-camera-off-note" }, /* @__PURE__ */ React55.createElement(ParticipantPlaceholder_default, null))), /* @__PURE__ */ React55.createElement("div", { className: "lk-button-group-container" }, /* @__PURE__ */ React55.createElement("div", { className: "lk-button-group audio" }, /* @__PURE__ */ React55.createElement(
    TrackToggle,
    {
      id: "microphoneButton",
      initialState: audioEnabled,
      source: import_livekit_client7.Track.Source.Microphone,
      onChange: (enabled) => setAudioEnabled(enabled)
    },
    micLabel
  ), /* @__PURE__ */ React55.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React55.createElement(
    MediaDeviceMenu,
    {
      initialSelection: audioDeviceId,
      kind: "audioinput",
      disabled: !audioTrack,
      tracks: { audioinput: audioTrack },
      onActiveDeviceChange: (_, id) => setAudioDeviceId(id)
    }
  ))), /* @__PURE__ */ React55.createElement("div", { className: "lk-button-group video" }, /* @__PURE__ */ React55.createElement(
    TrackToggle,
    {
      id: "cameraButton",
      initialState: videoEnabled,
      source: import_livekit_client7.Track.Source.Camera,
      onChange: (enabled) => setVideoEnabled(enabled)
    },
    camLabel
  ), /* @__PURE__ */ React55.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React55.createElement(
    MediaDeviceMenu,
    {
      initialSelection: videoDeviceId,
      kind: "videoinput",
      disabled: !videoTrack,
      tracks: { videoinput: videoTrack },
      onActiveDeviceChange: (_, id) => setVideoDeviceId(id)
    }
  )))), /* @__PURE__ */ React55.createElement("form", { className: "lk-username-container" }, /* @__PURE__ */ React55.createElement(
    "input",
    {
      className: "lk-form-control",
      id: "username",
      name: "username",
      type: "text",
      defaultValue: username,
      placeholder: userLabel,
      onChange: (inputEl) => setUsername(inputEl.target.value),
      autoComplete: "off"
    }
  ), /* @__PURE__ */ React55.createElement(
    "button",
    {
      className: "lk-button lk-join-button",
      type: "submit",
      id: "submitButton",
      onClick: handleSubmit,
      disabled: !isValid
    },
    joinLabel
  )), debug && /* @__PURE__ */ React55.createElement(React55.Fragment, null, /* @__PURE__ */ React55.createElement("strong", null, "User Choices:"), /* @__PURE__ */ React55.createElement("ul", { className: "lk-list", style: { overflow: "hidden", maxWidth: "15rem" } }, /* @__PURE__ */ React55.createElement("li", null, "Username: ", `${userChoices.username}`), /* @__PURE__ */ React55.createElement("li", null, "Video Enabled: ", `${userChoices.videoEnabled}`), /* @__PURE__ */ React55.createElement("li", null, "Audio Enabled: ", `${userChoices.audioEnabled}`), /* @__PURE__ */ React55.createElement("li", null, "Video Device: ", `${userChoices.videoDeviceId}`), /* @__PURE__ */ React55.createElement("li", null, "Audio Device: ", `${userChoices.audioDeviceId}`))));
}

// src/prefabs/VideoConference.tsx
var React90 = __toESM(require("react"));

// src/components/layout/LayoutContextProvider.tsx
var import_components_core28 = require("@livekit/components-core");
var React56 = __toESM(require("react"));
function LayoutContextProvider({
  value,
  onPinChange,
  onWidgetChange,
  children
}) {
  const layoutContextValue = useEnsureCreateLayoutContext(value);
  React56.useEffect(() => {
    import_components_core28.log.debug("PinState Updated", { state: layoutContextValue.pin.state });
    if (onPinChange && layoutContextValue.pin.state)
      onPinChange(layoutContextValue.pin.state);
  }, [layoutContextValue.pin.state, onPinChange]);
  React56.useEffect(() => {
    import_components_core28.log.debug("Chat Widget Updated", { widgetState: layoutContextValue.widget.state });
    if (onWidgetChange && layoutContextValue.widget.state) {
      onWidgetChange(layoutContextValue.widget.state);
    }
  }, [onWidgetChange, layoutContextValue.widget.state]);
  return /* @__PURE__ */ React56.createElement(LayoutContext.Provider, { value: layoutContextValue }, children);
}

// src/components/RoomAudioRenderer.tsx
var import_components_core30 = require("@livekit/components-core");
var import_livekit_client9 = require("livekit-client");
var React58 = __toESM(require("react"));

// src/components/participant/AudioTrack.tsx
var React57 = __toESM(require("react"));
var import_components_core29 = require("@livekit/components-core");
var import_livekit_client8 = require("livekit-client");
function AudioTrack(_a) {
  var _b = _a, {
    onSubscriptionStatusChanged,
    volume,
    source,
    name,
    publication,
    participant: p
  } = _b, props = __objRest(_b, [
    "onSubscriptionStatusChanged",
    "volume",
    "source",
    "name",
    "publication",
    "participant"
  ]);
  const mediaEl = React57.useRef(null);
  const participant = useEnsureParticipant(p);
  const { elementProps, isSubscribed, track } = useMediaTrackBySourceOrName(
    { source, name, participant, publication },
    {
      element: mediaEl,
      props
    }
  );
  React57.useEffect(() => {
    onSubscriptionStatusChanged == null ? void 0 : onSubscriptionStatusChanged(!!isSubscribed);
  }, [isSubscribed, onSubscriptionStatusChanged]);
  React57.useEffect(() => {
    if (track === void 0 || volume === void 0) {
      return;
    }
    if (track instanceof import_livekit_client8.RemoteAudioTrack) {
      track.setVolume(volume);
    } else {
      import_components_core29.log.warn("volume can only be set on remote audio tracks");
    }
  }, [volume, track]);
  return /* @__PURE__ */ React57.createElement("audio", __spreadValues({ ref: mediaEl }, elementProps));
}

// src/components/RoomAudioRenderer.tsx
function RoomAudioRenderer() {
  const tracks = useTracks([import_livekit_client9.Track.Source.Microphone, import_livekit_client9.Track.Source.ScreenShareAudio], {
    updateOnlyOn: [],
    onlySubscribed: false
  }).filter((ref) => !(0, import_components_core30.isLocal)(ref.participant));
  React58.useEffect(() => {
    tracks.forEach((track) => track.publication.setSubscribed(true));
  }, [tracks]);
  return /* @__PURE__ */ React58.createElement("div", { style: { display: "none" } }, tracks.map((trackRef) => /* @__PURE__ */ React58.createElement(AudioTrack, __spreadValues({ key: trackRef.publication.trackSid }, trackRef))));
}

// src/prefabs/ControlBar.tsx
var import_livekit_client10 = require("livekit-client");
var React66 = __toESM(require("react"));

// src/components/controls/DisconnectButton.tsx
var React59 = __toESM(require("react"));
function DisconnectButton(props) {
  const { buttonProps } = useDisconnectButton(props);
  return /* @__PURE__ */ React59.createElement("button", __spreadValues({}, buttonProps), props.children);
}

// src/components/controls/StartAudio.tsx
var React60 = __toESM(require("react"));
function StartAudio(_a) {
  var _b = _a, { label = "Allow Audio" } = _b, props = __objRest(_b, ["label"]);
  const room = useRoomContext();
  const { mergedProps } = useStartAudio({ room, props });
  return /* @__PURE__ */ React60.createElement("button", __spreadValues({}, mergedProps), label);
}

// src/components/controls/ChatToggle.tsx
var React61 = __toESM(require("react"));
function ChatToggle(props) {
  const { mergedProps } = useChatToggle({ props });
  return /* @__PURE__ */ React61.createElement("button", __spreadValues({}, mergedProps), props.children);
}

// src/components/controls/ShareLinkToggle.tsx
var React62 = __toESM(require("react"));
var import_components_core31 = require("@livekit/components-core");
function useToggleShareLink({ props }) {
  const { dispatch } = useLayoutContext().widget;
  const { className } = React62.useMemo(() => (0, import_components_core31.setupShareLinkToggle)(), []);
  const mergedProps = React62.useMemo(
    () => mergeProps2(props, {
      className,
      onClick: () => {
        if (dispatch)
          dispatch({ msg: "show_invite" });
      }
    }),
    [props, className, dispatch]
  );
  return { mergedProps };
}
function ShareLinkToggle(props) {
  const { mergedProps } = useToggleShareLink({ props });
  return /* @__PURE__ */ React62.createElement("button", __spreadValues({}, mergedProps), props.children);
}

// src/components/controls/UserToggle.tsx
var React63 = __toESM(require("react"));
var import_components_core32 = require("@livekit/components-core");
function useToggleUserLink({ props }) {
  const { dispatch } = useLayoutContext().widget;
  const { className } = React63.useMemo(() => (0, import_components_core32.setupUserToggle)(), []);
  const mergedProps = React63.useMemo(
    () => mergeProps2(props, {
      className,
      onClick: () => {
        if (dispatch)
          dispatch({ msg: "show_users" });
      }
    }),
    [props, className, dispatch]
  );
  return { mergedProps };
}
function UserToggle(props) {
  const { mergedProps } = useToggleUserLink({ props });
  return /* @__PURE__ */ React63.createElement("button", __spreadValues({}, mergedProps), props.children);
}

// src/assets/icons/InviteIcon.tsx
var React64 = __toESM(require("react"));
var SvgInviteIcon = (props) => /* @__PURE__ */ React64.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 25, height: 20, fill: "none" }, props), /* @__PURE__ */ React64.createElement(
  "path",
  {
    d: "M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z",
    fill: "#ffffff"
  }
));
var InviteIcon_default = SvgInviteIcon;

// src/assets/icons/UsersIcon.tsx
var React65 = __toESM(require("react"));
var SvgUserIcon = (props) => /* @__PURE__ */ React65.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none" }, props), /* @__PURE__ */ React65.createElement(
  "path",
  {
    id: "Vector",
    d: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "#ffffff"
  }
));
var UsersIcon_default = SvgUserIcon;

// src/prefabs/ControlBar.tsx
var import_components_core33 = require("@livekit/components-core");
function ControlBar(_a) {
  var _b = _a, {
    variation,
    controls,
    waitingRoomCount,
    screenShareTracks
  } = _b, props = __objRest(_b, [
    "variation",
    "controls",
    "waitingRoomCount",
    "screenShareTracks"
  ]);
  var _a2, _b2, _c, _d, _e, _f, _g;
  const layoutContext = useMaybeLayoutContext();
  const [isChatOpen, setIsChatOpen] = React66.useState(false);
  const [isShareLinkOpen, setIsShareLinkOpen] = React66.useState(false);
  const [isUserOpen, setIsUserOpen] = React66.useState(false);
  React66.useEffect(() => {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    if (((_a3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _a3.showChat) == "show_chat") {
      setIsChatOpen(((_b3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _b3.showChat) == "show_chat");
    } else if (((_c2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _c2.showChat) == "show_invite") {
      setIsShareLinkOpen(((_d2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _d2.showChat) == "show_invite");
    } else if (((_e2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _e2.showChat) == "show_users") {
      setIsUserOpen(((_f2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _f2.showChat) == "show_users");
    }
  }, [(_a2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _a2.showChat]);
  const isTooLittleSpace = useMediaQuery(
    `(max-width: ${isChatOpen || isShareLinkOpen || isUserOpen ? 1e3 : 760}px)`
  );
  const defaultVariation = isTooLittleSpace ? "minimal" : "verbose";
  variation != null ? variation : variation = defaultVariation;
  const visibleControls = __spreadValues({ leave: true }, controls);
  const localPermissions = useLocalParticipantPermissions();
  if (!localPermissions) {
    visibleControls.camera = false;
    visibleControls.chat = false;
    visibleControls.microphone = false;
    visibleControls.screenShare = false;
    visibleControls.sharelink = false;
    visibleControls.users = false;
  } else {
    (_b2 = visibleControls.camera) != null ? _b2 : visibleControls.camera = localPermissions.canPublish;
    (_c = visibleControls.microphone) != null ? _c : visibleControls.microphone = localPermissions.canPublish;
    (_d = visibleControls.screenShare) != null ? _d : visibleControls.screenShare = localPermissions.canPublish;
    (_e = visibleControls.chat) != null ? _e : visibleControls.chat = localPermissions.canPublishData && (controls == null ? void 0 : controls.chat);
    (_f = visibleControls.sharelink) != null ? _f : visibleControls.sharelink = localPermissions.canPublishData && (controls == null ? void 0 : controls.sharelink);
    (_g = visibleControls.users) != null ? _g : visibleControls.users = localPermissions.canPublishData && (controls == null ? void 0 : controls.users);
  }
  const showIcon = React66.useMemo(
    () => variation === "minimal" || variation === "verbose",
    [variation]
  );
  const showText = React66.useMemo(
    () => variation === "textOnly" || variation === "verbose",
    [variation]
  );
  const browserSupportsScreenSharing = (0, import_components_core33.supportsScreenSharing)();
  const [isScreenShareEnabled, setIsScreenShareEnabled] = React66.useState(false);
  const onScreenShareChange = (enabled) => {
    setIsScreenShareEnabled(enabled);
  };
  const htmlProps = mergeProps2({ className: "lk-control-bar" }, props);
  React66.useEffect(() => {
    const buttons = document.querySelectorAll("[data-lk-source]");
    if (!isScreenShareEnabled && screenShareTracks !== 0) {
      buttons.forEach((button) => {
        const source = button.getAttribute("data-lk-source");
        if (source === "screen_share") {
          button.disabled = true;
        }
      });
    } else {
      buttons.forEach((button) => {
        const source = button.getAttribute("data-lk-source");
        if (source === "screen_share") {
          button.disabled = false;
        }
      });
    }
  }, [screenShareTracks, isScreenShareEnabled]);
  return /* @__PURE__ */ React66.createElement("div", __spreadValues({}, htmlProps), visibleControls.microphone && /* @__PURE__ */ React66.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ React66.createElement(TrackToggle, { source: import_livekit_client10.Track.Source.Microphone, showIcon }, showText && "Microphone"), /* @__PURE__ */ React66.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React66.createElement(MediaDeviceMenu, { kind: "audioinput" }))), visibleControls.camera && /* @__PURE__ */ React66.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ React66.createElement(TrackToggle, { source: import_livekit_client10.Track.Source.Camera, showIcon }, showText && "Camera"), /* @__PURE__ */ React66.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React66.createElement(MediaDeviceMenu, { kind: "videoinput" }))), visibleControls.screenShare && browserSupportsScreenSharing && /* @__PURE__ */ React66.createElement(
    TrackToggle,
    {
      source: import_livekit_client10.Track.Source.ScreenShare,
      captureOptions: { audio: true, selfBrowserSurface: "include" },
      showIcon,
      onChange: onScreenShareChange,
      disabled: !isScreenShareEnabled && screenShareTracks !== 0,
      title: !isScreenShareEnabled && screenShareTracks !== 0 ? "Someone has shared screen" : isScreenShareEnabled ? "You're sharing your scrren" : "You can share your screen"
    },
    showText && (isScreenShareEnabled ? "Stop screen share" : "Share screen")
  ), visibleControls.chat && /* @__PURE__ */ React66.createElement(ChatToggle, null, showIcon && /* @__PURE__ */ React66.createElement(ChatIcon_default, null), showText && "Chat"), visibleControls.sharelink && /* @__PURE__ */ React66.createElement(ShareLinkToggle, null, showIcon && /* @__PURE__ */ React66.createElement(InviteIcon_default, null), showText && "Invite"), visibleControls.users && /* @__PURE__ */ React66.createElement(UserToggle, null, showIcon && /* @__PURE__ */ React66.createElement(UsersIcon_default, null), showText && "Participants", waitingRoomCount !== 0 && /* @__PURE__ */ React66.createElement("span", { className: "waiting-count" }, waitingRoomCount)), visibleControls.leave && /* @__PURE__ */ React66.createElement(DisconnectButton, null, showIcon && /* @__PURE__ */ React66.createElement(LeaveIcon_default, null), showText && visibleControls.leaveButton), /* @__PURE__ */ React66.createElement(StartAudio, { label: "Start Audio" }));
}

// src/components/layout/FocusLayout.tsx
var React74 = __toESM(require("react"));

// src/components/participant/ParticipantTile.tsx
var React73 = __toESM(require("react"));
var import_livekit_client12 = require("livekit-client");
var import_components_core35 = require("@livekit/components-core");

// src/components/participant/ConnectionQualityIndicator.tsx
var React67 = __toESM(require("react"));
function ConnectionQualityIndicator(props) {
  var _a;
  const { className, quality } = useConnectionQualityIndicator(props);
  const elementProps = React67.useMemo(() => {
    return __spreadProps(__spreadValues({}, mergeProps2(props, { className })), { "data-lk-quality": quality });
  }, [quality, props, className]);
  return /* @__PURE__ */ React67.createElement("div", __spreadValues({}, elementProps), (_a = props.children) != null ? _a : getConnectionQualityIcon(quality));
}

// src/components/participant/ParticipantName.tsx
var import_components_core34 = require("@livekit/components-core");
var React68 = __toESM(require("react"));
function ParticipantName(_a) {
  var _b = _a, { participant } = _b, props = __objRest(_b, ["participant"]);
  const p = useEnsureParticipant(participant);
  const { className, infoObserver } = React68.useMemo(() => {
    return (0, import_components_core34.setupParticipantName)(p);
  }, [p]);
  const { identity, name } = useObservableState(infoObserver, {
    name: p.name,
    identity: p.identity,
    metadata: p.metadata
  });
  const mergedProps = React68.useMemo(() => {
    return mergeProps2(props, { className, "data-lk-participant-name": name });
  }, [props, className, name]);
  return /* @__PURE__ */ React68.createElement("span", __spreadValues({}, mergedProps), name !== "" ? name : identity, props.children);
}

// src/components/participant/TrackMutedIndicator.tsx
var React69 = __toESM(require("react"));
function TrackMutedIndicator(_a) {
  var _b = _a, {
    source,
    participant,
    show = "always"
  } = _b, props = __objRest(_b, [
    "source",
    "participant",
    "show"
  ]);
  var _a2;
  const { className, isMuted } = useTrackMutedIndicator(source, { participant });
  const showIndicator = show === "always" || show === "muted" && isMuted || show === "unmuted" && !isMuted;
  const htmlProps = React69.useMemo(
    () => mergeProps2(props, {
      className
    }),
    [className, props]
  );
  if (!showIndicator) {
    return null;
  }
  return /* @__PURE__ */ React69.createElement("div", __spreadProps(__spreadValues({}, htmlProps), { "data-lk-muted": isMuted }), (_a2 = props.children) != null ? _a2 : getSourceIcon(source, !isMuted));
}

// src/components/controls/FocusToggle.tsx
var React70 = __toESM(require("react"));
function FocusToggle(_a) {
  var _b = _a, { trackSource, participant } = _b, props = __objRest(_b, ["trackSource", "participant"]);
  const { mergedProps, inFocus } = useFocusToggle({ trackSource, participant, props });
  return /* @__PURE__ */ React70.createElement(LayoutContext.Consumer, null, (layoutContext) => layoutContext !== void 0 && /* @__PURE__ */ React70.createElement("button", __spreadValues({}, mergedProps), props.children ? props.children : inFocus ? /* @__PURE__ */ React70.createElement(UnfocusToggleIcon_default, null) : /* @__PURE__ */ React70.createElement(FocusToggleIcon_default, null)));
}

// src/components/participant/VideoTrack.tsx
var import_livekit_client11 = require("livekit-client");
var React71 = __toESM(require("react"));
var useHooks = __toESM(require("usehooks-ts"));
function VideoTrack(_a) {
  var _b = _a, {
    onTrackClick,
    onClick,
    onSubscriptionStatusChanged,
    name,
    publication,
    source,
    participant: p,
    manageSubscription
  } = _b, props = __objRest(_b, [
    "onTrackClick",
    "onClick",
    "onSubscriptionStatusChanged",
    "name",
    "publication",
    "source",
    "participant",
    "manageSubscription"
  ]);
  const mediaEl = React71.useRef(null);
  const intersectionEntry = useHooks.useIntersectionObserver(mediaEl, {});
  const debouncedIntersectionEntry = useHooks.useDebounce(intersectionEntry, 3e3);
  React71.useEffect(() => {
    if (manageSubscription && publication instanceof import_livekit_client11.RemoteTrackPublication && (debouncedIntersectionEntry == null ? void 0 : debouncedIntersectionEntry.isIntersecting) === false) {
      publication.setSubscribed(false);
    }
  }, [debouncedIntersectionEntry, publication, manageSubscription]);
  React71.useEffect(() => {
    if (manageSubscription && publication instanceof import_livekit_client11.RemoteTrackPublication && (intersectionEntry == null ? void 0 : intersectionEntry.isIntersecting) === true) {
      publication.setSubscribed(true);
    }
  }, [intersectionEntry, publication, manageSubscription]);
  const participant = useEnsureParticipant(p);
  const {
    elementProps,
    publication: pub,
    isSubscribed
  } = useMediaTrackBySourceOrName(
    { participant, name, source, publication },
    {
      element: mediaEl,
      props
    }
  );
  React71.useEffect(() => {
    onSubscriptionStatusChanged == null ? void 0 : onSubscriptionStatusChanged(!!isSubscribed);
  }, [isSubscribed, onSubscriptionStatusChanged]);
  const clickHandler = (evt) => {
    onClick == null ? void 0 : onClick(evt);
    onTrackClick == null ? void 0 : onTrackClick({ participant, track: pub });
  };
  return /* @__PURE__ */ React71.createElement("video", __spreadProps(__spreadValues({ ref: mediaEl }, elementProps), { muted: true, onClick: clickHandler }));
}

// src/components/participant/ParticipantNamePlaceholder.tsx
var React72 = __toESM(require("react"));
var ParticipantNamePlaceholder = (props) => {
  const [image, setImage] = React72.useState(false);
  return /* @__PURE__ */ React72.createElement("div", null, props.name && /* @__PURE__ */ React72.createElement(
    "img",
    {
      style: image ? {} : { display: "none" },
      src: `https://ui-avatars.com/api/?name=${props.name}&rounded=true&size=250&background=565656&bold=true`,
      alt: `${props.name} profile image`,
      onLoad: () => setImage(true)
    }
  ));
};

// src/components/participant/ParticipantTile.tsx
function ParticipantContextIfNeeded(props) {
  const hasContext = !!useMaybeParticipantContext();
  return props.participant && !hasContext ? /* @__PURE__ */ React73.createElement(ParticipantContext.Provider, { value: props.participant }, props.children) : /* @__PURE__ */ React73.createElement(React73.Fragment, null, props.children);
}
function ParticipantTile(_a) {
  var _b = _a, {
    participant,
    children,
    source = import_livekit_client12.Track.Source.Camera,
    onParticipantClick,
    publication,
    disableSpeakingIndicator
  } = _b, htmlProps = __objRest(_b, [
    "participant",
    "children",
    "source",
    "onParticipantClick",
    "publication",
    "disableSpeakingIndicator"
  ]);
  var _a2, _b2;
  const p = useEnsureParticipant(participant);
  const trackRef = (_a2 = useMaybeTrackContext()) != null ? _a2 : {
    participant: p,
    source,
    publication
  };
  const { elementProps } = useParticipantTile({
    participant: trackRef.participant,
    htmlProps,
    source: trackRef.source,
    publication: trackRef.publication,
    disableSpeakingIndicator,
    onParticipantClick
  });
  const layoutContext = useMaybeLayoutContext();
  const handleSubscribe = React73.useCallback(
    (subscribed) => {
      if (trackRef.source && !subscribed && layoutContext && layoutContext.pin.dispatch && (0, import_components_core35.isParticipantSourcePinned)(trackRef.participant, trackRef.source, layoutContext.pin.state)) {
        layoutContext.pin.dispatch({ msg: "clear_pin" });
      }
    },
    [trackRef.participant, layoutContext, trackRef.source]
  );
  return /* @__PURE__ */ React73.createElement("div", __spreadValues({ style: { position: "relative" } }, elementProps), /* @__PURE__ */ React73.createElement(ParticipantContextIfNeeded, { participant: trackRef.participant }, children != null ? children : /* @__PURE__ */ React73.createElement(React73.Fragment, null, ((_b2 = trackRef.publication) == null ? void 0 : _b2.kind) === "video" || trackRef.source === import_livekit_client12.Track.Source.Camera || trackRef.source === import_livekit_client12.Track.Source.ScreenShare ? /* @__PURE__ */ React73.createElement(
    VideoTrack,
    {
      participant: trackRef.participant,
      source: trackRef.source,
      publication: trackRef.publication,
      onSubscriptionStatusChanged: handleSubscribe,
      manageSubscription: true
    }
  ) : /* @__PURE__ */ React73.createElement(
    AudioTrack,
    {
      participant: trackRef.participant,
      source: trackRef.source,
      publication: trackRef.publication,
      onSubscriptionStatusChanged: handleSubscribe
    }
  ), /* @__PURE__ */ React73.createElement("div", { className: "lk-participant-placeholder" }, p && /* @__PURE__ */ React73.createElement(ParticipantNamePlaceholder, { name: p.name })), /* @__PURE__ */ React73.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React73.createElement("div", { className: "lk-participant-metadata-item" }, trackRef.source === import_livekit_client12.Track.Source.Camera ? /* @__PURE__ */ React73.createElement(React73.Fragment, null, /* @__PURE__ */ React73.createElement(
    TrackMutedIndicator,
    {
      source: import_livekit_client12.Track.Source.Microphone,
      show: "always"
    }
  ), /* @__PURE__ */ React73.createElement(ParticipantName, null)) : /* @__PURE__ */ React73.createElement(React73.Fragment, null, /* @__PURE__ */ React73.createElement(ScreenShareIcon_default, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ React73.createElement(ParticipantName, null, "'s screen"))), /* @__PURE__ */ React73.createElement(ConnectionQualityIndicator, { className: "lk-participant-metadata-item" }))), /* @__PURE__ */ React73.createElement(FocusToggle, { trackSource: trackRef.source })));
}

// src/components/layout/FocusLayout.tsx
function FocusLayoutContainer(props) {
  const elementProps = mergeProps2(props, { className: "lk-focus-layout" });
  return /* @__PURE__ */ React74.createElement("div", __spreadValues({}, elementProps), props.children);
}
function FocusLayout(_a) {
  var _b = _a, { track } = _b, htmlProps = __objRest(_b, ["track"]);
  return /* @__PURE__ */ React74.createElement(ParticipantTile, __spreadValues(__spreadValues({}, track), htmlProps));
}

// src/components/layout/GridLayout.tsx
var React78 = __toESM(require("react"));

// src/components/TrackLoop.tsx
var import_components_core36 = require("@livekit/components-core");
var React75 = __toESM(require("react"));
function TrackLoop(_a) {
  var _b = _a, { tracks } = _b, props = __objRest(_b, ["tracks"]);
  return /* @__PURE__ */ React75.createElement(React75.Fragment, null, tracks.map((trackReference) => {
    const trackSource = (0, import_components_core36.isTrackReference)(trackReference) ? trackReference.publication.source : trackReference.source;
    return /* @__PURE__ */ React75.createElement(
      TrackContext.Provider,
      {
        value: trackReference,
        key: `${trackReference.participant.identity}_${trackSource}`
      },
      cloneSingleChild(props.children)
    );
  }));
}

// src/components/controls/PaginationControl.tsx
var React76 = __toESM(require("react"));
var import_components_core37 = require("@livekit/components-core");
function PaginationControl({
  totalPageCount,
  nextPage,
  prevPage,
  currentPage,
  pagesContainer: connectedElement
}) {
  const [interactive, setInteractive] = React76.useState(false);
  React76.useEffect(() => {
    let subscription;
    if (connectedElement) {
      subscription = (0, import_components_core37.createInteractingObservable)(connectedElement.current, 2e3).subscribe(
        setInteractive
      );
    }
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [connectedElement]);
  return /* @__PURE__ */ React76.createElement("div", { className: "lk-pagination-control", "data-lk-user-interaction": interactive }, /* @__PURE__ */ React76.createElement("button", { className: "lk-button", onClick: prevPage }, /* @__PURE__ */ React76.createElement(Chevron_default, null)), /* @__PURE__ */ React76.createElement("span", { className: "lk-pagination-count" }, `${currentPage} of ${totalPageCount}`), /* @__PURE__ */ React76.createElement("button", { className: "lk-button", onClick: nextPage }, /* @__PURE__ */ React76.createElement(Chevron_default, null)));
}

// src/components/controls/PaginationIndicator.tsx
var React77 = __toESM(require("react"));
function PaginationIndicator({ totalPageCount, currentPage }) {
  const bubbles = new Array(totalPageCount).fill("").map((_, index) => {
    if (index + 1 === currentPage) {
      return /* @__PURE__ */ React77.createElement("span", { "data-lk-active": true, key: index });
    } else {
      return /* @__PURE__ */ React77.createElement("span", { key: index });
    }
  });
  return /* @__PURE__ */ React77.createElement("div", { className: "lk-pagination-indicator" }, bubbles);
}

// src/components/layout/GridLayout.tsx
function GridLayout(_a) {
  var _b = _a, { tracks } = _b, props = __objRest(_b, ["tracks"]);
  const gridEl = React78.createRef();
  const elementProps = React78.useMemo(
    () => mergeProps2(props, { className: "lk-grid-layout" }),
    [props]
  );
  const { layout } = useGridLayout(gridEl, tracks.length);
  const pagination = usePagination(layout.maxTiles, tracks);
  useSwipe(gridEl, {
    onLeftSwipe: pagination.nextPage,
    onRightSwipe: pagination.prevPage
  });
  return /* @__PURE__ */ React78.createElement("div", __spreadValues({ ref: gridEl, "data-lk-pagination": pagination.totalPageCount > 1 }, elementProps), /* @__PURE__ */ React78.createElement(TrackLoop, { tracks: pagination.tracks }, props.children), tracks.length > layout.maxTiles && /* @__PURE__ */ React78.createElement(React78.Fragment, null, /* @__PURE__ */ React78.createElement(
    PaginationIndicator,
    {
      totalPageCount: pagination.totalPageCount,
      currentPage: pagination.currentPage
    }
  ), /* @__PURE__ */ React78.createElement(PaginationControl, __spreadValues({ pagesContainer: gridEl }, pagination))));
}

// src/prefabs/ShareLink.tsx
var React84 = __toESM(require("react"));

// src/components/layout/CarouselLayout.tsx
var import_components_core38 = require("@livekit/components-core");
var React79 = __toESM(require("react"));
var MIN_HEIGHT = 130;
var MIN_WIDTH = 140;
var MIN_VISIBLE_TILES = 1;
var ASPECT_RATIO = 16 / 10;
var ASPECT_RATIO_INVERT = (1 - ASPECT_RATIO) * -1;
function CarouselLayout(_a) {
  var _b = _a, { tracks, orientation } = _b, props = __objRest(_b, ["tracks", "orientation"]);
  const asideEl = React79.useRef(null);
  const [prevTiles, setPrevTiles] = React79.useState(0);
  const { width, height } = useSize(asideEl);
  const carouselOrientation = orientation ? orientation : height >= width ? "vertical" : "horizontal";
  const tileSpan = carouselOrientation === "vertical" ? Math.max(width * ASPECT_RATIO_INVERT, MIN_HEIGHT) : Math.max(height * ASPECT_RATIO, MIN_WIDTH);
  const scrollBarWidth = (0, import_components_core38.getScrollBarWidth)();
  const tilesThatFit = carouselOrientation === "vertical" ? Math.max((height - scrollBarWidth) / tileSpan, MIN_VISIBLE_TILES) : Math.max((width - scrollBarWidth) / tileSpan, MIN_VISIBLE_TILES);
  let maxVisibleTiles = Math.round(tilesThatFit);
  if (Math.abs(tilesThatFit - prevTiles) < 0.5) {
    maxVisibleTiles = Math.round(prevTiles);
  } else if (prevTiles !== tilesThatFit) {
    setPrevTiles(tilesThatFit);
  }
  const sortedTiles = useVisualStableUpdate(tracks, maxVisibleTiles);
  React79.useLayoutEffect(() => {
    if (asideEl.current) {
      asideEl.current.dataset.lkOrientation = carouselOrientation;
      asideEl.current.style.setProperty("--lk-max-visible-tiles", maxVisibleTiles.toString());
    }
  }, [maxVisibleTiles, carouselOrientation]);
  return /* @__PURE__ */ React79.createElement("aside", __spreadValues({ key: carouselOrientation, className: "lk-carousel", ref: asideEl }, props), /* @__PURE__ */ React79.createElement(TrackLoop, { tracks: sortedTiles }, props.children));
}

// src/components/participant/AudioVisualizer.tsx
var import_livekit_client13 = require("livekit-client");
var React80 = __toESM(require("react"));
function AudioVisualizer(_a) {
  var _b = _a, { participant } = _b, props = __objRest(_b, ["participant"]);
  const [volumeBars, setVolumeBars] = React80.useState([]);
  const svgWidth = 200;
  const svgHeight = 90;
  const barWidth = 6;
  const barSpacing = 4;
  const volMultiplier = 50;
  const barCount = 7;
  const { track } = useMediaTrack(import_livekit_client13.Track.Source.Microphone, participant);
  React80.useEffect(() => {
    if (!track || !(track instanceof import_livekit_client13.LocalAudioTrack || track instanceof import_livekit_client13.RemoteAudioTrack)) {
      return;
    }
    const { analyser, cleanup } = (0, import_livekit_client13.createAudioAnalyser)(track, {
      smoothingTimeConstant: 0.8,
      fftSize: 64
    });
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const calculateBars = () => {
      analyser.getByteFrequencyData(dataArray);
      const sums = new Array(barCount).fill(0);
      dataArray.slice(1);
      const binSize = 6;
      for (let i = 0; i < barCount / 2; i += 1) {
        const id = Math.floor(barCount / 2 - i);
        for (let k = 0; k < binSize; k += 1) {
          sums[id] += Math.pow(dataArray[i * binSize + k] / 255, 2);
        }
        sums[id] /= binSize;
      }
      for (let i = 0; i < barCount / 2; i += 1) {
        const id = Math.floor(barCount / 2 + i);
        if (sums[id] !== 0) {
          continue;
        }
        for (let k = 0; k < binSize; k += 1) {
          sums[id] += Math.pow(dataArray[i * binSize + k] / 255, 2);
        }
        sums[id] /= binSize;
      }
      return sums.map((s) => s * volMultiplier);
    };
    const calcInterval = setInterval(() => {
      const bars = calculateBars();
      setVolumeBars(bars);
    }, 100);
    return () => {
      clearInterval(calcInterval);
      cleanup();
    };
  }, [track]);
  return /* @__PURE__ */ React80.createElement(
    "svg",
    __spreadProps(__spreadValues({
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${svgWidth} ${svgHeight}`
    }, props), {
      className: "lk-audio-visualizer"
    }),
    /* @__PURE__ */ React80.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%" }),
    /* @__PURE__ */ React80.createElement(
      "g",
      {
        style: {
          transform: `translate(${(svgWidth - barCount * (barWidth + barSpacing)) / 2}px, 0)`
        }
      },
      volumeBars.map((vol, idx) => /* @__PURE__ */ React80.createElement(
        "rect",
        {
          key: idx,
          x: idx * (barWidth + barSpacing),
          y: svgHeight / 2 - vol / 2,
          width: barWidth,
          height: vol
        }
      ))
    )
  );
}

// src/components/ParticipantLoop.tsx
var React81 = __toESM(require("react"));
function ParticipantLoop(_a) {
  var _b = _a, { participants } = _b, props = __objRest(_b, ["participants"]);
  return /* @__PURE__ */ React81.createElement(React81.Fragment, null, participants.map((participant) => /* @__PURE__ */ React81.createElement(ParticipantContext.Provider, { value: participant, key: participant.identity }, cloneSingleChild(props.children))));
}

// src/components/Toast.tsx
var import_livekit_client14 = require("livekit-client");
var React82 = __toESM(require("react"));
function Toast(props) {
  const htmlProps = React82.useMemo(() => mergeProps2(props, { className: "lk-toast" }), [props]);
  return /* @__PURE__ */ React82.createElement("div", __spreadValues({}, htmlProps), props.children);
}
function ConnectionStateToast(props) {
  const [notification, setNotification] = React82.useState(void 0);
  const state = useConnectionState(props.room);
  React82.useEffect(() => {
    switch (state) {
      case import_livekit_client14.ConnectionState.Reconnecting:
        setNotification(
          /* @__PURE__ */ React82.createElement(React82.Fragment, null, /* @__PURE__ */ React82.createElement(SpinnerIcon_default, { className: "lk-spinner" }), " Reconnecting")
        );
        break;
      case import_livekit_client14.ConnectionState.Connecting:
        setNotification(
          /* @__PURE__ */ React82.createElement(React82.Fragment, null, /* @__PURE__ */ React82.createElement(SpinnerIcon_default, { className: "lk-spinner" }), " Connecting")
        );
        break;
      case import_livekit_client14.ConnectionState.Disconnected:
        setNotification(/* @__PURE__ */ React82.createElement(React82.Fragment, null, "Disconnected"));
        break;
      default:
        setNotification(void 0);
        break;
    }
  }, [state]);
  return notification ? /* @__PURE__ */ React82.createElement(Toast, { className: "lk-toast-connection-state" }, notification) : /* @__PURE__ */ React82.createElement(React82.Fragment, null);
}

// src/components/participant/ParticipantAudioTile.tsx
var React83 = __toESM(require("react"));
var import_livekit_client15 = require("livekit-client");
function ParticipantAudioTile(_a) {
  var _b = _a, {
    participant,
    children,
    source,
    publication,
    disableSpeakingIndicator,
    onParticipantClick
  } = _b, htmlProps = __objRest(_b, [
    "participant",
    "children",
    "source",
    "publication",
    "disableSpeakingIndicator",
    "onParticipantClick"
  ]);
  const p = useEnsureParticipant(participant);
  const { elementProps } = useParticipantTile({
    participant: p,
    htmlProps,
    disableSpeakingIndicator,
    source: import_livekit_client15.Track.Source.Microphone,
    publication,
    onParticipantClick
  });
  return /* @__PURE__ */ React83.createElement("div", __spreadValues({ style: { position: "relative" } }, elementProps), /* @__PURE__ */ React83.createElement(ParticipantContextIfNeeded, { participant: p }, children != null ? children : /* @__PURE__ */ React83.createElement(React83.Fragment, null, /* @__PURE__ */ React83.createElement(AudioTrack, { source: source != null ? source : import_livekit_client15.Track.Source.Microphone }), /* @__PURE__ */ React83.createElement(AudioVisualizer, null), /* @__PURE__ */ React83.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React83.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ React83.createElement(TrackMutedIndicator, { source: import_livekit_client15.Track.Source.Microphone }), /* @__PURE__ */ React83.createElement(ParticipantName, null)), /* @__PURE__ */ React83.createElement(ConnectionQualityIndicator, { className: "lk-participant-metadata-item" })))));
}

// src/prefabs/ShareLink.tsx
function useGetLink() {
  const host = getHostUrl();
  const link = `${host}/meeting/${useGetRoom().name}`;
  return { link };
}
function useGetRoom() {
  const room = useRoomContext();
  return room;
}
function getHostUrl() {
  return typeof window ? window.location.origin : "";
}
function getToken() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("token");
}
function ShareLink(_a) {
  var props = __objRest(_a, []);
  const inputRef = React84.useRef(null);
  const ulRef = React84.useRef(null);
  const { link } = useGetLink();
  const [users, setUsers] = React84.useState([]);
  const [searched, setSearched] = React84.useState([]);
  const [showToast, setShowToast] = React84.useState(false);
  const room = useGetRoom();
  function searchUsers(key) {
    return __async(this, null, function* () {
      if (key) {
        const filteredData = users.filter(function(item) {
          return item.full_name.toLocaleLowerCase().startsWith(key.toLocaleLowerCase());
        });
        setSearched(filteredData);
      } else {
        setSearched(users);
      }
    });
  }
  function getUsers() {
    return __async(this, null, function* () {
      const data = {
        method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          meeting_id: room.name,
          token: getToken()
        })
      };
      fetch(`${getHostUrl()}/api/get-users`, data).then((res) => __async(this, null, function* () {
        if (res.ok) {
          const body = yield res.json();
          setUsers(body);
          setSearched(body);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  React84.useEffect(() => {
    if (room.name) {
      getUsers();
    }
  }, [room.name]);
  function handleSubmit(event) {
    return __async(this, null, function* () {
      event.preventDefault();
      if (inputRef.current && inputRef.current.value.trim() !== "") {
        searchUsers(inputRef.current.value);
      } else {
        setSearched(users);
      }
    });
  }
  function handleInvite(user) {
    return __async(this, null, function* () {
      const data = {
        method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "userId": user.contact_id,
          // body data type must match "Content-Type" header
          "userName": user.full_name,
          // body data type must match "Content-Type" header
          "message": link,
          "meeting_id": room.name,
          "token": getToken()
        })
      };
      fetch(`/api/invite-user`, data).then((res) => __async(this, null, function* () {
        if (res.ok) {
          user.invited = true;
          const currentUserIndex = users.findIndex((item) => item.user_id === user.user_id);
          const updatedUser = __spreadProps(__spreadValues({}, users[currentUserIndex]), { invited: true });
          const newUsers = [
            ...users.slice(0, currentUserIndex),
            updatedUser,
            ...users.slice(currentUserIndex + 1)
          ];
          setUsers(newUsers);
          const currentSearchedIndex = searched.findIndex((item) => item.user_id === user.user_id);
          const updatedSearched = __spreadProps(__spreadValues({}, searched[currentSearchedIndex]), { invited: true });
          const newSearched = [
            ...searched.slice(0, currentSearchedIndex),
            updatedSearched,
            ...searched.slice(currentSearchedIndex + 1)
          ];
          setSearched(newSearched);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  function handleCopy() {
    return __async(this, null, function* () {
      navigator.clipboard.writeText(link);
      setShowToast(true);
    });
  }
  React84.useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3e3);
    }
  }, [showToast]);
  React84.useEffect(() => {
    var _a2;
    if (ulRef) {
      (_a2 = ulRef.current) == null ? void 0 : _a2.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef, users]);
  return /* @__PURE__ */ React84.createElement("div", __spreadProps(__spreadValues({}, props), { className: "lk-chat lk-sharelink" }), /* @__PURE__ */ React84.createElement("form", { className: "lk-chat-form" }, /* @__PURE__ */ React84.createElement("input", { className: "lk-form-control lk-chat-form-input", type: "text", value: link, readOnly: true }), /* @__PURE__ */ React84.createElement("button", { type: "button", className: "lk-button lk-chat-form-button", onClick: handleCopy }, "Copy")), showToast ? /* @__PURE__ */ React84.createElement(Toast, { className: "lk-toast-connection-state" }, "Copied") : /* @__PURE__ */ React84.createElement(React84.Fragment, null), /* @__PURE__ */ React84.createElement("form", { className: "lk-chat-form", onSubmit: handleSubmit }, /* @__PURE__ */ React84.createElement(
    "input",
    {
      className: "lk-form-control lk-chat-form-input",
      ref: inputRef,
      type: "text",
      placeholder: "Search User...",
      onChange: handleSubmit
    }
  )), searched.length > 0 ? /* @__PURE__ */ React84.createElement("ul", { className: "lk-list lk-chat-messages", ref: ulRef }, searched.map((user, index) => {
    return /* @__PURE__ */ React84.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React84.createElement("div", null, /* @__PURE__ */ React84.createElement("span", { className: "lk-message-body" }, user.full_name), /* @__PURE__ */ React84.createElement("span", { className: "lk-message-body lk-message-text" }, user.user_name)), /* @__PURE__ */ React84.createElement("button", { type: "button", onClick: () => handleInvite(user), className: "lk-button lk-chat-form-button" + (user.invited ? " invited" : "") }, user.invited ? "Invited" : "Invite"));
  })) : "");
}

// src/prefabs/Users.tsx
var React89 = __toESM(require("react"));

// src/components/participant/ParticipantList.tsx
var React85 = __toESM(require("react"));
var import_livekit_client16 = require("livekit-client");
var ParticipantList = (_a) => {
  var _b = _a, {
    participant,
    children,
    publication,
    disableSpeakingIndicator,
    onParticipantClick
  } = _b, htmlProps = __objRest(_b, [
    "participant",
    "children",
    "publication",
    "disableSpeakingIndicator",
    "onParticipantClick"
  ]);
  const p = useEnsureParticipant(participant);
  const { elementProps } = useParticipantTile({
    participant: p,
    htmlProps,
    disableSpeakingIndicator,
    source: import_livekit_client16.Track.Source.Microphone,
    publication,
    onParticipantClick
  });
  return /* @__PURE__ */ React85.createElement("div", __spreadValues({ style: { position: "relative" } }, elementProps), /* @__PURE__ */ React85.createElement(ParticipantContextIfNeeded, { participant: p }, children != null ? children : /* @__PURE__ */ React85.createElement(React85.Fragment, null, /* @__PURE__ */ React85.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React85.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ React85.createElement(ParticipantName, null)), /* @__PURE__ */ React85.createElement("div", { className: "display-flex" }, /* @__PURE__ */ React85.createElement(
    TrackMutedIndicator,
    {
      source: import_livekit_client16.Track.Source.Microphone,
      show: "always"
    }
  ), /* @__PURE__ */ React85.createElement(
    TrackMutedIndicator,
    {
      source: import_livekit_client16.Track.Source.Camera,
      show: "always"
    }
  ))))));
};

// src/components/ToggleSwitch.tsx
var import_react = __toESM(require("react"));
var ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled
}) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32)
      return;
    e.preventDefault();
    onChange(!checked);
  }
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "toggle-switch" + (small ? " small-switch" : "") }, /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type: "checkbox",
      name,
      className: "toggle-switch-checkbox",
      id,
      checked,
      onChange: (e) => onChange(e.target.checked),
      disabled
    }
  ), id ? /* @__PURE__ */ import_react.default.createElement(
    "label",
    {
      className: "toggle-switch-label",
      tabIndex: disabled ? -1 : 1,
      onKeyDown: (e) => handleKeyPress(e),
      htmlFor: id
    },
    /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: disabled ? "toggle-switch-inner toggle-switch-disabled" : "toggle-switch-inner",
        "data-yes": optionLabels[0],
        "data-no": optionLabels[1],
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch",
        tabIndex: -1
      }
    )
  ) : null);
};

// src/assets/icons/ApproveIcon.tsx
var React87 = __toESM(require("react"));
var SvgApproveIcon = (props) => /* @__PURE__ */ React87.createElement(
  "svg",
  __spreadValues({
    width: "15",
    height: "11",
    viewBox: "0 0 17 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React87.createElement(
    "path",
    {
      d: "M6.44587 12.3181C6.35059 12.3854 6.21756 12.3816 6.13768 12.2966C5.87427 12.0164 5.62193 11.7435 5.3696 11.4706C3.87981 9.87788 2.38394 8.27905 0.900223 6.68022C0.225256 5.95072 0.316468 4.8747 1.09481 4.30933C1.73937 3.83516 2.60284 3.91419 3.18052 4.52211C4.17777 5.57381 5.16286 6.63767 6.14794 7.69545C6.18071 7.73039 6.21348 7.76612 6.24709 7.80263C6.35423 7.919 6.5347 7.92887 6.64657 7.81703V7.81703C8.25798 6.30939 9.86939 4.80175 11.4869 3.30019C12.399 2.4491 13.305 1.60409 14.2232 0.765159C15.1293 -0.0676915 16.5461 0.357852 16.8258 1.54938C16.9717 2.1573 16.7832 2.68011 16.3211 3.11173C15.0928 4.25462 13.8705 5.39751 12.6483 6.5404C11.4565 7.65289 10.2646 8.76539 9.0728 9.87788C8.20696 10.689 7.33509 11.4881 6.4692 12.2991C6.46178 12.3061 6.45416 12.3123 6.44587 12.3181V12.3181Z",
      fill: "white"
    }
  )
);
var ApproveIcon_default = SvgApproveIcon;

// src/assets/icons/RejectIcon.tsx
var React88 = __toESM(require("react"));
var SvgRejectIcon = (props) => /* @__PURE__ */ React88.createElement(
  "svg",
  __spreadValues({
    width: "15",
    height: "11",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React88.createElement(
    "path",
    {
      d: "M6.70508 8.22715C6.03352 8.9047 5.39471 9.54143 4.74772 10.1863C4.16624 10.7659 3.59295 11.3455 3.01147 11.9169C2.61836 12.3006 2.15154 12.4231 1.62739 12.2271C1.136 12.0475 0.849362 11.672 0.775653 11.1578C0.710135 10.7006 0.8985 10.3251 1.2179 10.0067C2.33991 8.88837 3.46191 7.77001 4.58392 6.65165C4.66582 6.57001 4.76409 6.51287 4.87875 6.43124C4.7559 6.30063 4.6822 6.21899 4.60849 6.14553C3.47829 5.01084 2.33991 3.88431 1.20971 2.74962C0.677375 2.21085 0.620047 1.49248 1.0623 0.953708C1.57826 0.325139 2.43819 0.292486 3.05242 0.896565C4.18262 2.01493 5.31281 3.14146 6.43482 4.27614C6.51672 4.35778 6.57404 4.45574 6.66413 4.57002C6.78698 4.45574 6.86888 4.38227 6.94259 4.3088C8.08097 3.17411 9.21117 2.03942 10.3496 0.912892C10.931 0.333302 11.7336 0.325139 12.2578 0.863913C12.7655 1.3782 12.7655 2.16187 12.2414 2.7088C11.6845 3.28839 11.103 3.85166 10.5297 4.42308C9.88273 5.06798 9.22755 5.72104 8.55598 6.39042C8.64607 6.48838 8.71978 6.56185 8.79349 6.64348C9.92368 7.77001 11.0457 8.89654 12.1759 10.0231C12.5199 10.3659 12.7082 10.7659 12.6099 11.2639C12.5117 11.7537 12.2168 12.0884 11.75 12.2516C11.2668 12.4231 10.8164 12.3169 10.4396 11.9741C10.0711 11.6312 9.72713 11.272 9.37496 10.921C8.49046 10.0231 7.61415 9.14143 6.70508 8.22715Z",
      fill: "white"
    }
  )
);
var RejectIcon_default = SvgRejectIcon;

// src/prefabs/Users.tsx
function Users(_a) {
  var _b = _a, { onWaitingRoomChange } = _b, props = __objRest(_b, ["onWaitingRoomChange"]);
  const ulRef = React89.useRef(null);
  const participants = useParticipants();
  const [waitingRoom, setWaitingRoom] = React89.useState([]);
  const [toggleWaiting, setToggleWaiting] = React89.useState(true);
  const room = useRoomContext();
  function usersList() {
    return __async(this, null, function* () {
      const postData = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          meeting_id: room.name,
          token: getToken()
        })
      };
      fetch(`/api/get-waiting-room-users`, postData).then((res) => __async(this, null, function* () {
        if (res.ok) {
          const body = yield res.json();
          setWaitingRoom(body.users);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  React89.useEffect(() => {
    if (room.name) {
      usersList();
    }
  }, [room.name]);
  React89.useEffect(() => {
    const interval = setInterval(() => {
      usersList();
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  React89.useEffect(() => {
    onWaitingRoomChange(waitingRoom.length);
  }, [onWaitingRoomChange, waitingRoom]);
  React89.useEffect(() => {
    var _a2;
    if (ulRef) {
      (_a2 = ulRef.current) == null ? void 0 : _a2.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef]);
  function admitUser(identity, type) {
    return __async(this, null, function* () {
      const postData = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          room: room.name,
          identity,
          type,
          token: getToken()
        })
      };
      fetch(`/api/accept-request`, postData).then((res) => __async(this, null, function* () {
        if (res.status) {
          const remaining = waitingRoom.filter(
            (item) => item.identity !== identity
          );
          setWaitingRoom(remaining);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  function approveAll() {
    return __async(this, null, function* () {
      const postData = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          meeting_id: room.name,
          token: getToken()
        })
      };
      fetch(`/api/approve-all-participant`, postData).then((res) => __async(this, null, function* () {
        if (res.status) {
          setWaitingRoom([]);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  const onToggleWaitingChange = (checked) => {
    const postData = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        room: room.name,
        waiting_room: checked,
        token: getToken()
      })
    };
    fetch(`/api/set-waitingroom`, postData).then((res) => __async(this, null, function* () {
      if (res.status) {
        setToggleWaiting(checked);
      } else {
        throw Error("Error fetching server url, check server logs");
      }
    }));
  };
  return /* @__PURE__ */ React89.createElement("div", __spreadProps(__spreadValues({}, props), { className: "lk-chat lk-users" }), /* @__PURE__ */ React89.createElement("div", { className: "lk-waitinroom" }, /* @__PURE__ */ React89.createElement("div", { className: "tl-waitingroom-heading" }, /* @__PURE__ */ React89.createElement("h3", null, "Waiting Room"), /* @__PURE__ */ React89.createElement("div", { className: "tl-toggle-switch" }, /* @__PURE__ */ React89.createElement(
    ToggleSwitch,
    {
      id: "toggleSwitch",
      checked: toggleWaiting,
      onChange: onToggleWaitingChange,
      name: "toggleSwitch",
      optionLabels: ["On", "Off"],
      small: false,
      disabled: false
    }
  )), toggleWaiting && waitingRoom.length ? /* @__PURE__ */ React89.createElement(
    "button",
    {
      className: "lk-button tl-info tl-approve",
      onClick: () => approveAll()
    },
    "Approve All"
  ) : ""), waitingRoom.map((item) => /* @__PURE__ */ React89.createElement("div", { className: "tl-participant-li", key: item.username }, /* @__PURE__ */ React89.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React89.createElement("div", { className: "lk-participant-metadata-item" }, item.username), /* @__PURE__ */ React89.createElement("div", { className: "display-flex" }, /* @__PURE__ */ React89.createElement(
    "button",
    {
      className: "lk-button lk-waiting-room lk-success",
      onClick: () => admitUser(item.identity, "accepted")
    },
    /* @__PURE__ */ React89.createElement(ApproveIcon_default, null)
  ), /* @__PURE__ */ React89.createElement(
    "button",
    {
      className: "lk-button lk-waiting-room lk-danger",
      onClick: () => admitUser(item.identity, "rejected")
    },
    /* @__PURE__ */ React89.createElement(RejectIcon_default, null)
  )))))), /* @__PURE__ */ React89.createElement("div", { className: "lk-participants" }, /* @__PURE__ */ React89.createElement("div", { className: "tl-participants-heading" }, /* @__PURE__ */ React89.createElement("h3", null, "Participants  ", /* @__PURE__ */ React89.createElement("span", null, "(", participants.length, ")"))), (participants == null ? void 0 : participants.length) ? /* @__PURE__ */ React89.createElement(ParticipantLoop, { participants }, /* @__PURE__ */ React89.createElement(ParticipantList, null)) : /* @__PURE__ */ React89.createElement("div", null, /* @__PURE__ */ React89.createElement("h5", null, "No Participants"))));
}

// src/prefabs/VideoConference.tsx
var import_components_core39 = require("@livekit/components-core");
var import_livekit_client17 = require("livekit-client");
function VideoConference(_a) {
  var _b = _a, {
    showShareButton,
    showParticipantButton,
    leaveButton
  } = _b, props = __objRest(_b, [
    "showShareButton",
    "showParticipantButton",
    "leaveButton"
  ]);
  var _a2, _b2;
  const [widgetState, setWidgetState] = React90.useState({
    showChat: null,
    unreadMessages: 0
  });
  const lastAutoFocusedScreenShareTrack = React90.useRef(null);
  const [waiting, setWaiting] = React90.useState(null);
  const [waitingRoomCount, setWaitingRoomCount] = React90.useState(0);
  const tracks = useTracks(
    [
      { source: import_livekit_client17.Track.Source.Camera, withPlaceholder: true },
      { source: import_livekit_client17.Track.Source.ScreenShare, withPlaceholder: false }
    ],
    { updateOnlyOn: [import_livekit_client17.RoomEvent.ActiveSpeakersChanged] }
  );
  const widgetUpdate = (state) => {
    import_components_core39.log.debug("updating widget state", state);
    setWidgetState(state);
  };
  const updateCount = (count) => {
    import_components_core39.log.debug("count ", count);
    setWaitingRoomCount(count);
  };
  const setWaitingMessage = (message) => {
    if (showParticipantButton) {
      setWaiting(message);
    }
  };
  const layoutContext = useCreateLayoutContext();
  const screenShareTracks = tracks.filter(import_components_core39.isTrackReference).filter((track) => track.publication.source === import_livekit_client17.Track.Source.ScreenShare);
  const focusTrack = (_a2 = usePinnedTracks(layoutContext)) == null ? void 0 : _a2[0];
  const carouselTracks = tracks.filter((track) => !(0, import_components_core39.isEqualTrackRef)(track, focusTrack));
  React90.useEffect(() => {
    if (waiting) {
      setTimeout(() => {
        setWaiting(null);
      }, 3e3);
    }
  }, [waiting]);
  React90.useEffect(() => {
    var _a3, _b3, _c, _d;
    if (screenShareTracks.length > 0 && lastAutoFocusedScreenShareTrack.current === null) {
      import_components_core39.log.debug("Auto set screen share focus:", { newScreenShareTrack: screenShareTracks[0] });
      (_b3 = (_a3 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a3, { msg: "set_pin", trackReference: screenShareTracks[0] });
      lastAutoFocusedScreenShareTrack.current = screenShareTracks[0];
    } else if (lastAutoFocusedScreenShareTrack.current && !screenShareTracks.some(
      (track) => {
        var _a4, _b4;
        return track.publication.trackSid === ((_b4 = (_a4 = lastAutoFocusedScreenShareTrack.current) == null ? void 0 : _a4.publication) == null ? void 0 : _b4.trackSid);
      }
    )) {
      import_components_core39.log.debug("Auto clearing screen share focus.");
      (_d = (_c = layoutContext.pin).dispatch) == null ? void 0 : _d.call(_c, { msg: "clear_pin" });
      lastAutoFocusedScreenShareTrack.current = null;
    }
  }, [
    screenShareTracks.map((ref) => ref.publication.trackSid).join(),
    (_b2 = focusTrack == null ? void 0 : focusTrack.publication) == null ? void 0 : _b2.trackSid
  ]);
  return /* @__PURE__ */ React90.createElement("div", __spreadValues({ className: "lk-video-conference" }, props), (0, import_components_core39.isWeb)() && /* @__PURE__ */ React90.createElement(
    LayoutContextProvider,
    {
      value: layoutContext,
      onWidgetChange: widgetUpdate
    },
    /* @__PURE__ */ React90.createElement("div", { className: "lk-video-conference-inner" }, !focusTrack ? /* @__PURE__ */ React90.createElement("div", { className: "lk-grid-layout-wrapper" }, /* @__PURE__ */ React90.createElement(GridLayout, { tracks }, /* @__PURE__ */ React90.createElement(ParticipantTile, null))) : /* @__PURE__ */ React90.createElement("div", { className: "lk-focus-layout-wrapper" }, /* @__PURE__ */ React90.createElement(FocusLayoutContainer, null, /* @__PURE__ */ React90.createElement(CarouselLayout, { tracks: carouselTracks }, /* @__PURE__ */ React90.createElement(ParticipantTile, null)), focusTrack && /* @__PURE__ */ React90.createElement(FocusLayout, { track: focusTrack }))), /* @__PURE__ */ React90.createElement(
      ControlBar,
      {
        controls: {
          chat: false,
          sharelink: showShareButton,
          users: showParticipantButton,
          leaveButton
        },
        waitingRoomCount,
        screenShareTracks: screenShareTracks.length
      }
    )),
    showShareButton ? /* @__PURE__ */ React90.createElement(ShareLink, { style: {
      display: widgetState.showChat == "show_invite" ? "flex" : "none"
    } }) : /* @__PURE__ */ React90.createElement(React90.Fragment, null),
    showParticipantButton ? /* @__PURE__ */ React90.createElement(
      Users,
      {
        style: { display: widgetState.showChat == "show_users" ? "flex" : "none" },
        onWaitingRoomChange: updateCount,
        setWaiting: setWaitingMessage
      }
    ) : /* @__PURE__ */ React90.createElement(React90.Fragment, null),
    waiting ? /* @__PURE__ */ React90.createElement(Toast, { className: "lk-toast-connection-state" }, /* @__PURE__ */ React90.createElement(UserToggle, null, waiting)) : /* @__PURE__ */ React90.createElement(React90.Fragment, null)
  ), /* @__PURE__ */ React90.createElement(RoomAudioRenderer, null), /* @__PURE__ */ React90.createElement(ConnectionStateToast, null));
}

// src/prefabs/AudioConference.tsx
var React91 = __toESM(require("react"));
function AudioConference(_a) {
  var props = __objRest(_a, []);
  const [widgetState, setWidgetState] = React91.useState({
    showChat: null,
    unreadMessages: 0
  });
  const participants = useParticipants();
  return /* @__PURE__ */ React91.createElement(LayoutContextProvider, { onWidgetChange: setWidgetState }, /* @__PURE__ */ React91.createElement("div", __spreadValues({ className: "lk-audio-conference" }, props), /* @__PURE__ */ React91.createElement("div", { className: "lk-audio-conference-stage" }, /* @__PURE__ */ React91.createElement(ParticipantLoop, { participants }, /* @__PURE__ */ React91.createElement(ParticipantAudioTile, null))), /* @__PURE__ */ React91.createElement(
    ControlBar,
    {
      controls: { microphone: true, screenShare: false, camera: false, chat: true },
      waitingRoomCount: 0
    }
  ), widgetState.showChat == "show_chat" && /* @__PURE__ */ React91.createElement(Chat, null)));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioConference,
  Chat,
  ChatEntry,
  ControlBar,
  MediaDeviceMenu,
  PreJoin,
  VideoConference,
  formatChatMessageLinks,
  useChat,
  usePreviewDevice,
  usePreviewTracks
});
//# sourceMappingURL=index.js.map