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
var __reflectGet = Reflect.get;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AudioConference: () => AudioConference,
  AudioTrack: () => AudioTrack,
  AudioVisualizer: () => AudioVisualizer,
  CameraDisabledIcon: () => CameraDisabledIcon_default,
  CameraIcon: () => CameraIcon_default,
  CarouselLayout: () => CarouselLayout,
  Chat: () => Chat,
  ChatCloseIcon: () => ChatCloseIcon_default,
  ChatEntry: () => ChatEntry,
  ChatIcon: () => ChatIcon_default,
  ChatToggle: () => ChatToggle,
  Chevron: () => Chevron_default,
  ClearPinButton: () => ClearPinButton,
  ConnectionQualityIndicator: () => ConnectionQualityIndicator,
  ConnectionState: () => ConnectionState3,
  ConnectionStateToast: () => ConnectionStateToast,
  ControlBar: () => ControlBar,
  DisconnectButton: () => DisconnectButton,
  FocusLayout: () => FocusLayout,
  FocusLayoutContainer: () => FocusLayoutContainer,
  FocusToggle: () => FocusToggle,
  FocusToggleIcon: () => FocusToggleIcon_default,
  GearIcon: () => GearIcon_default,
  GridLayout: () => GridLayout,
  LKFeatureContext: () => LKFeatureContext,
  LayoutContext: () => LayoutContext,
  LayoutContextProvider: () => LayoutContextProvider,
  LeaveIcon: () => LeaveIcon_default,
  LiveKitRoom: () => LiveKitRoom,
  LockLockedIcon: () => LockLockedIcon_default,
  MediaDeviceMenu: () => MediaDeviceMenu,
  MediaDeviceSelect: () => MediaDeviceSelect,
  MicDisabledIcon: () => MicDisabledIcon_default,
  MicIcon: () => MicIcon_default,
  ParticipantAudioTile: () => ParticipantAudioTile,
  ParticipantContext: () => ParticipantContext,
  ParticipantContextIfNeeded: () => ParticipantContextIfNeeded,
  ParticipantLoop: () => ParticipantLoop,
  ParticipantName: () => ParticipantName,
  ParticipantPlaceholder: () => ParticipantPlaceholder_default,
  ParticipantTile: () => ParticipantTile,
  PreJoin: () => PreJoin,
  QualityExcellentIcon: () => QualityExcellentIcon_default,
  QualityGoodIcon: () => QualityGoodIcon_default,
  QualityPoorIcon: () => QualityPoorIcon_default,
  QualityUnknownIcon: () => QualityUnknownIcon_default,
  RoomAudioRenderer: () => RoomAudioRenderer,
  RoomContext: () => RoomContext,
  RoomName: () => RoomName,
  ScreenShareIcon: () => ScreenShareIcon_default,
  ScreenShareStopIcon: () => ScreenShareStopIcon_default,
  ShareLinkToggle: () => ShareLinkToggle,
  SpinnerIcon: () => SpinnerIcon_default,
  StartAudio: () => StartAudio,
  Toast: () => Toast,
  TrackLoop: () => TrackLoop,
  TrackMutedIndicator: () => TrackMutedIndicator,
  TrackRefContext: () => TrackRefContext,
  TrackToggle: () => TrackToggle,
  UnfocusToggleIcon: () => UnfocusToggleIcon_default,
  VideoConference: () => VideoConference,
  VideoTrack: () => VideoTrack,
  formatChatMessageLinks: () => formatChatMessageLinks,
  isTrackReference: () => import_components_core61.isTrackReference,
  setLogExtension: () => import_components_core61.setLogExtension,
  setLogLevel: () => import_components_core61.setLogLevel,
  useAudioPlayback: () => useAudioPlayback,
  useChat: () => useChat,
  useChatToggle: () => useChatToggle,
  useClearPinButton: () => useClearPinButton,
  useConnectionQualityIndicator: () => useConnectionQualityIndicator,
  useConnectionState: () => useConnectionState,
  useCreateLayoutContext: () => useCreateLayoutContext,
  useDataChannel: () => useDataChannel,
  useDisconnectButton: () => useDisconnectButton,
  useEnsureCreateLayoutContext: () => useEnsureCreateLayoutContext,
  useEnsureLayoutContext: () => useEnsureLayoutContext,
  useEnsureParticipant: () => useEnsureParticipant,
  useEnsureRoom: () => useEnsureRoom,
  useEnsureTrackRef: () => useEnsureTrackRef,
  useFacingMode: () => useFacingMode,
  useFeatureContext: () => useFeatureContext,
  useFocusToggle: () => useFocusToggle,
  useGridLayout: () => useGridLayout,
  useIsEncrypted: () => useIsEncrypted,
  useIsMuted: () => useIsMuted,
  useIsSpeaking: () => useIsSpeaking,
  useLayoutContext: () => useLayoutContext,
  useLiveKitRoom: () => useLiveKitRoom,
  useLocalParticipant: () => useLocalParticipant,
  useLocalParticipantPermissions: () => useLocalParticipantPermissions,
  useMaybeLayoutContext: () => useMaybeLayoutContext,
  useMaybeParticipantContext: () => useMaybeParticipantContext,
  useMaybeRoomContext: () => useMaybeRoomContext,
  useMaybeTrackRefContext: () => useMaybeTrackRefContext,
  useMediaDeviceSelect: () => useMediaDeviceSelect,
  useMediaDevices: () => useMediaDevices,
  useMultibandTrackVolume: () => useMultibandTrackVolume,
  usePagination: () => usePagination,
  useParticipantContext: () => useParticipantContext,
  useParticipantInfo: () => useParticipantInfo,
  useParticipantPermissions: () => useParticipantPermissions,
  useParticipantTile: () => useParticipantTile,
  useParticipantTracks: () => useParticipantTracks,
  useParticipants: () => useParticipants,
  usePersistentUserChoices: () => usePersistentUserChoices,
  usePinnedTracks: () => usePinnedTracks,
  usePreviewDevice: () => usePreviewDevice,
  usePreviewTracks: () => usePreviewTracks,
  useRemoteParticipant: () => useRemoteParticipant,
  useRemoteParticipants: () => useRemoteParticipants,
  useRoomContext: () => useRoomContext,
  useRoomInfo: () => useRoomInfo,
  useSortedParticipants: () => useSortedParticipants,
  useSpeakingParticipants: () => useSpeakingParticipants,
  useStartAudio: () => useStartAudio,
  useStartVideo: () => useStartVideo,
  useSwipe: () => useSwipe,
  useToken: () => useToken,
  useTrackByName: () => useTrackByName,
  useTrackMutedIndicator: () => useTrackMutedIndicator,
  useTrackRefContext: () => useTrackRefContext,
  useTrackToggle: () => useTrackToggle,
  useTrackVolume: () => useTrackVolume,
  useTracks: () => useTracks,
  useVisualStableUpdate: () => useVisualStableUpdate,
  useWhiteboard: () => useWhiteboard
});
module.exports = __toCommonJS(src_exports);

// src/components/controls/ClearPinButton.tsx
var React51 = __toESM(require("react"));

// src/hooks/useAudioPlayback.ts
var React9 = __toESM(require("react"));

// src/hooks/internal/useResizeObserver.ts
var React = __toESM(require("react"));
var import_latest = __toESM(require("@react-hook/latest"));
function useResizeObserver(target, callback) {
  const resizeObserver = getResizeObserver();
  const storedCallback = (0, import_latest.default)(callback);
  React.useLayoutEffect(() => {
    let didUnsubscribe = false;
    const targetEl = target.current;
    if (!targetEl) return;
    function cb(entry, observer) {
      if (didUnsubscribe) return;
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
        for (let i2 = 0; i2 < allEntries.length; i2++) {
          if (triggered.has(allEntries[i2].target)) continue;
          triggered.add(allEntries[i2].target);
          const cbs = callbacks.get(allEntries[i2].target);
          cbs == null ? void 0 : cbs.forEach((cb) => cb(allEntries[i2], obs));
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
      var _a2;
      observer.observe(target);
      const cbs = (_a2 = callbacks.get(target)) != null ? _a2 : [];
      cbs.push(callback);
      callbacks.set(target, cbs);
    },
    unsubscribe(target, callback) {
      var _a2;
      const cbs = (_a2 = callbacks.get(target)) != null ? _a2 : [];
      if (cbs.length === 1) {
        observer.unobserve(target);
        callbacks.delete(target);
        return;
      }
      const cbIndex = cbs.indexOf(callback);
      if (cbIndex !== -1) cbs.splice(cbIndex, 1);
      callbacks.set(target, cbs);
    }
  };
}
var _resizeObserver;
var getResizeObserver = () => !_resizeObserver ? _resizeObserver = createResizeObserver() : _resizeObserver;
var useSize = (target) => {
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  React.useLayoutEffect(() => {
    if (target.current) {
      const { width, height } = target.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [target.current]);
  const resizeCallback = React.useCallback(
    (entry) => setSize(entry.contentRect),
    []
  );
  useResizeObserver(target, resizeCallback);
  return size;
};

// src/hooks/internal/useObservableState.ts
var React2 = __toESM(require("react"));
function useObservableState(observable, startWith) {
  const [state, setState] = React2.useState(startWith);
  React2.useEffect(() => {
    if (typeof window === "undefined" || !observable) return;
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);
  return state;
}

// src/hooks/internal/useMediaQuery.ts
var React3 = __toESM(require("react"));
function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = React3.useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  React3.useEffect(() => {
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

// src/hooks/useAudioPlayback.ts
var import_components_core2 = require("@livekit/components-core");

// src/context/layout-context.ts
var import_components_core = require("@livekit/components-core");
var React4 = __toESM(require("react"));

// src/context/chat-context.ts
function chatReducer(state, action) {
  if (action.msg && action.msg !== state.showChat) {
    if (action.msg === "show_chat") {
      return __spreadProps(__spreadValues({}, state), { showChat: "show_chat", unreadMessages: 0 });
    } else if (action.msg === "toggle_chat") {
      const newState = __spreadProps(__spreadValues({}, state), { showChat: state.showChat == "show_chat" ? null : "show_chat" });
      if (newState.showChat === "show_chat") {
        newState.unreadMessages = 0;
      }
      return newState;
    } else if (action.msg === "show_invite") {
      return __spreadProps(__spreadValues({}, state), { showChat: "show_invite" });
    } else if (action.msg === "show_users") {
      return __spreadProps(__spreadValues({}, state), { showChat: "show_users" });
    } else if (action.msg === "unread_msg") {
      return __spreadProps(__spreadValues({}, state), { unreadMessages: action.count });
    } else if (action.msg === "toggle_settings") {
      return __spreadProps(__spreadValues({}, state), { showSettings: !state.showSettings });
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

// src/context/whiteboard-context.ts
var WHITEBOARD_DEFAULT_STATE = { show_whiteboard: false };
function whiteboardReducer(state, action) {
  if (action.msg && action.msg == "show_whiteboard") {
    return __spreadProps(__spreadValues({}, state), { show_whiteboard: true });
  } else {
    return __spreadProps(__spreadValues({}, state), { show_whiteboard: false });
  }
}

// src/context/layout-context.ts
var LayoutContext = React4.createContext(void 0);
function useLayoutContext() {
  const layoutContext = React4.useContext(LayoutContext);
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
  const [pinState, pinDispatch] = React4.useReducer(pinReducer, import_components_core.PIN_DEFAULT_STATE);
  const [widgetState, widgetDispatch] = React4.useReducer(chatReducer, import_components_core.WIDGET_DEFAULT_STATE);
  const [whiteboardState, whiteboardDispatch] = React4.useReducer(whiteboardReducer, WHITEBOARD_DEFAULT_STATE);
  return {
    pin: { dispatch: pinDispatch, state: pinState },
    widget: { dispatch: widgetDispatch, state: widgetState },
    whiteboard: { dispatch: whiteboardDispatch, state: whiteboardState }
  };
}
function useEnsureCreateLayoutContext(layoutContext) {
  const [pinState, pinDispatch] = React4.useReducer(pinReducer, import_components_core.PIN_DEFAULT_STATE);
  const [widgetState, widgetDispatch] = React4.useReducer(chatReducer, import_components_core.WIDGET_DEFAULT_STATE);
  const [whiteboardState, whiteboardDispatch] = React4.useReducer(whiteboardReducer, WHITEBOARD_DEFAULT_STATE);
  return layoutContext != null ? layoutContext : {
    pin: { dispatch: pinDispatch, state: pinState },
    widget: { dispatch: widgetDispatch, state: widgetState },
    whiteboard: { dispatch: whiteboardDispatch, state: whiteboardState }
  };
}
function useMaybeLayoutContext() {
  return React4.useContext(LayoutContext);
}

// src/context/participant-context.ts
var React6 = __toESM(require("react"));

// src/context/track-reference-context.ts
var React5 = __toESM(require("react"));
var TrackRefContext = React5.createContext(
  void 0
);
function useTrackRefContext() {
  const trackReference = React5.useContext(TrackRefContext);
  if (!trackReference) {
    throw Error("tried to access track context outside of track context provider");
  }
  return trackReference;
}
function useMaybeTrackRefContext() {
  return React5.useContext(TrackRefContext);
}
function useEnsureTrackRef(trackRef) {
  const context = useMaybeTrackRefContext();
  const ref = trackRef != null ? trackRef : context;
  if (!ref) {
    throw new Error(
      "No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly"
    );
  }
  return ref;
}

// src/context/participant-context.ts
var ParticipantContext = React6.createContext(void 0);
function useParticipantContext() {
  const participant = React6.useContext(ParticipantContext);
  if (!participant) {
    throw Error("tried to access participant context outside of participant context provider");
  }
  return participant;
}
function useMaybeParticipantContext() {
  return React6.useContext(ParticipantContext);
}
function useEnsureParticipant(participant) {
  var _a2;
  const context = useMaybeParticipantContext();
  const trackContext = useMaybeTrackRefContext();
  const p2 = (_a2 = participant != null ? participant : context) != null ? _a2 : trackContext == null ? void 0 : trackContext.participant;
  if (!p2) {
    throw new Error(
      "No participant provided, make sure you are inside a participant context or pass the participant explicitly"
    );
  }
  return p2;
}

// src/context/room-context.ts
var React7 = __toESM(require("react"));
var RoomContext = React7.createContext(void 0);
function useRoomContext() {
  const ctx = React7.useContext(RoomContext);
  if (!ctx) {
    throw Error("tried to access room context outside of livekit room component");
  }
  return ctx;
}
function useMaybeRoomContext() {
  return React7.useContext(RoomContext);
}
function useEnsureRoom(room) {
  const context = useMaybeRoomContext();
  const r2 = room != null ? room : context;
  if (!r2) {
    throw new Error(
      "No room provided, make sure you are inside a Room context or pass the room explicitly"
    );
  }
  return r2;
}

// src/context/feature-context.ts
var React8 = __toESM(require("react"));
var LKFeatureContext = React8.createContext(void 0);
function useFeatureContext(require2) {
  const ctx = React8.useContext(LKFeatureContext);
  if (require2 === true) {
    if (ctx) {
      return ctx;
    } else {
      throw Error("tried to access feature context, but none is present");
    }
  }
  return ctx;
}

// src/hooks/useAudioPlayback.ts
function useAudioPlayback(room) {
  const roomEnsured = useEnsureRoom(room);
  const startAudio = React9.useCallback(() => __async(this, null, function* () {
    yield roomEnsured.startAudio();
  }), [roomEnsured]);
  const observable = React9.useMemo(
    () => (0, import_components_core2.roomAudioPlaybackAllowedObservable)(roomEnsured),
    [roomEnsured]
  );
  const { canPlayAudio } = useObservableState(observable, {
    canPlayAudio: roomEnsured.canPlaybackAudio
  });
  return { canPlayAudio, startAudio };
}

// src/hooks/useClearPinButton.ts
var import_components_core3 = require("@livekit/components-core");
var React10 = __toESM(require("react"));

// src/mergeProps.ts
var import_clsx = __toESM(require("clsx"));
function chain(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        try {
          callback(...args);
        } catch (e2) {
          console.error(e2);
        }
      }
    }
  };
}
function mergeProps(...args) {
  const result = __spreadValues({}, args[0]);
  for (let i2 = 1; i2 < args.length; i2++) {
    const props = args[i2];
    for (const key in props) {
      const a2 = result[key];
      const b2 = props[key];
      if (typeof a2 === "function" && typeof b2 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) {
        result[key] = chain(a2, b2);
      } else if ((key === "className" || key === "UNSAFE_className") && typeof a2 === "string" && typeof b2 === "string") {
        result[key] = (0, import_clsx.default)(a2, b2);
      } else {
        result[key] = b2 !== void 0 ? b2 : a2;
      }
    }
  }
  return result;
}

// src/hooks/useClearPinButton.ts
function useClearPinButton(props) {
  const { state, dispatch } = useLayoutContext().pin;
  const buttonProps = React10.useMemo(() => {
    const { className } = (0, import_components_core3.setupClearPinButton)();
    const mergedProps = mergeProps(props, {
      className,
      disabled: !(state == null ? void 0 : state.length),
      onClick: () => {
        if (dispatch) dispatch({ msg: "clear_pin" });
      }
    });
    return mergedProps;
  }, [props, dispatch, state]);
  return { buttonProps };
}

// src/hooks/useConnectionQualityIndicator.ts
var import_components_core4 = require("@livekit/components-core");
var import_livekit_client = require("livekit-client");
var React11 = __toESM(require("react"));
function useConnectionQualityIndicator(options = {}) {
  const p2 = useEnsureParticipant(options.participant);
  const { className, connectionQualityObserver } = React11.useMemo(
    () => (0, import_components_core4.setupConnectionQualityIndicator)(p2),
    [p2]
  );
  const quality = useObservableState(connectionQualityObserver, import_livekit_client.ConnectionQuality.Unknown);
  return { className, quality };
}

// src/hooks/useConnectionStatus.ts
var import_components_core5 = require("@livekit/components-core");
var React12 = __toESM(require("react"));
function useConnectionState(room) {
  const r2 = useEnsureRoom(room);
  const observable = React12.useMemo(() => (0, import_components_core5.connectionStateObserver)(r2), [r2]);
  const connectionState = useObservableState(observable, r2.state);
  return connectionState;
}

// src/hooks/useDataChannel.ts
var import_components_core6 = require("@livekit/components-core");
var React13 = __toESM(require("react"));
function useDataChannel(topicOrCallback, callback) {
  const onMessage = typeof topicOrCallback === "function" ? topicOrCallback : callback;
  const topic = typeof topicOrCallback === "string" ? topicOrCallback : void 0;
  const room = useRoomContext();
  const { send, messageObservable, isSendingObservable } = React13.useMemo(
    () => (0, import_components_core6.setupDataMessageHandler)(room, topic, onMessage),
    [room, topic, onMessage]
  );
  const message = useObservableState(messageObservable, void 0);
  const isSending = useObservableState(isSendingObservable, false);
  return {
    message,
    send,
    isSending
  };
}

// src/hooks/useDisconnectButton.ts
var import_components_core7 = require("@livekit/components-core");
var import_livekit_client2 = require("livekit-client");
var React14 = __toESM(require("react"));
function useDisconnectButton(props) {
  const room = useRoomContext();
  const connectionState = useConnectionState(room);
  const buttonProps = React14.useMemo(() => {
    const { className, disconnect } = (0, import_components_core7.setupDisconnectButton)(room);
    const mergedProps = mergeProps(props, {
      className,
      onClick: () => {
        var _a2;
        return disconnect((_a2 = props.stopTracks) != null ? _a2 : true);
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
var import_components_core8 = require("@livekit/components-core");
var React15 = __toESM(require("react"));
function useFocusToggle({ trackRef, props }) {
  const trackReference = useEnsureTrackRef(trackRef);
  const layoutContext = useMaybeLayoutContext();
  const { className } = React15.useMemo(() => (0, import_components_core8.setupFocusToggle)(), []);
  const inFocus = React15.useMemo(() => {
    return (0, import_components_core8.isTrackReferencePinned)(trackReference, layoutContext == null ? void 0 : layoutContext.pin.state);
  }, [trackRef, layoutContext == null ? void 0 : layoutContext.pin.state]);
  const mergedProps = React15.useMemo(
    () => mergeProps(props, {
      className,
      onClick: (event) => {
        var _a2, _b, _c2, _d, _e2;
        (_a2 = props.onClick) == null ? void 0 : _a2.call(props, event);
        if (inFocus) {
          (_c2 = layoutContext == null ? void 0 : (_b = layoutContext.pin).dispatch) == null ? void 0 : _c2.call(_b, {
            msg: "clear_pin"
          });
        } else {
          (_e2 = layoutContext == null ? void 0 : (_d = layoutContext.pin).dispatch) == null ? void 0 : _e2.call(_d, {
            msg: "set_pin",
            trackReference
          });
        }
      }
    }),
    [props, className, trackRef, inFocus, layoutContext == null ? void 0 : layoutContext.pin]
  );
  return { mergedProps, inFocus };
}

// src/hooks/useGridLayout.ts
var import_components_core9 = require("@livekit/components-core");
var React16 = __toESM(require("react"));
function useGridLayout(gridElement, trackCount) {
  const { width, height } = useSize(gridElement);
  const layout = width > 0 && height > 0 ? (0, import_components_core9.selectGridLayout)(import_components_core9.GRID_LAYOUTS, trackCount, width, height) : import_components_core9.GRID_LAYOUTS[0];
  React16.useEffect(() => {
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
var import_components_core10 = require("@livekit/components-core");
var React17 = __toESM(require("react"));
function useIsMuted(sourceOrTrackRef, options = {}) {
  var _a2, _b;
  const passedParticipant = typeof sourceOrTrackRef === "string" ? options.participant : sourceOrTrackRef.participant;
  const p2 = useEnsureParticipant(passedParticipant);
  const ref = typeof sourceOrTrackRef === "string" ? { participant: p2, source: sourceOrTrackRef } : sourceOrTrackRef;
  const [isMuted, setIsMuted] = React17.useState(
    !!(((_a2 = ref.publication) == null ? void 0 : _a2.isMuted) || ((_b = p2.getTrackPublication(ref.source)) == null ? void 0 : _b.isMuted))
  );
  React17.useEffect(() => {
    const listener = (0, import_components_core10.mutedObserver)(ref).subscribe(setIsMuted);
    return () => listener.unsubscribe();
  }, [(0, import_components_core10.getTrackReferenceId)(ref)]);
  return isMuted;
}

// src/hooks/useIsSpeaking.ts
var import_components_core11 = require("@livekit/components-core");
var React18 = __toESM(require("react"));
function useIsSpeaking(participant) {
  const p2 = useEnsureParticipant(participant);
  const observable = React18.useMemo(() => (0, import_components_core11.createIsSpeakingObserver)(p2), [p2]);
  const isSpeaking = useObservableState(observable, p2.isSpeaking);
  return isSpeaking;
}

// src/hooks/useLiveKitRoom.ts
var import_components_core12 = require("@livekit/components-core");
var import_livekit_client4 = require("livekit-client");
var React19 = __toESM(require("react"));
var defaultRoomProps = {
  connect: true,
  audio: false,
  video: false
};
function useLiveKitRoom(props) {
  const _a2 = __spreadValues(__spreadValues({}, defaultRoomProps), props), {
    token,
    serverUrl,
    options,
    room: passedRoom,
    connectOptions,
    connect,
    audio,
    video,
    screen,
    onConnected,
    onDisconnected,
    onError,
    onMediaDeviceFailure,
    onEncryptionError,
    simulateParticipants
  } = _a2, rest = __objRest(_a2, [
    "token",
    "serverUrl",
    "options",
    "room",
    "connectOptions",
    "connect",
    "audio",
    "video",
    "screen",
    "onConnected",
    "onDisconnected",
    "onError",
    "onMediaDeviceFailure",
    "onEncryptionError",
    "simulateParticipants"
  ]);
  if (options && passedRoom) {
    import_components_core12.log.warn(
      "when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead."
    );
  }
  const [room, setRoom] = React19.useState();
  React19.useEffect(() => {
    setRoom(passedRoom != null ? passedRoom : new import_livekit_client4.Room(options));
  }, [passedRoom]);
  const htmlProps = React19.useMemo(() => {
    const { className } = (0, import_components_core12.setupLiveKitRoom)();
    return mergeProps(rest, { className });
  }, [rest]);
  React19.useEffect(() => {
    if (!room) return;
    const onSignalConnected = () => {
      const localP = room.localParticipant;
      import_components_core12.log.debug("trying to publish local tracks");
      Promise.all([
        localP.setMicrophoneEnabled(!!audio, typeof audio !== "boolean" ? audio : void 0),
        localP.setCameraEnabled(!!video, typeof video !== "boolean" ? video : void 0),
        localP.setScreenShareEnabled(!!screen, typeof screen !== "boolean" ? screen : void 0)
      ]).catch((e2) => {
        import_components_core12.log.warn(e2);
        onError == null ? void 0 : onError(e2);
      });
    };
    const handleMediaDeviceError = (e2) => {
      const mediaDeviceFailure = import_livekit_client4.MediaDeviceFailure.getFailure(e2);
      onMediaDeviceFailure == null ? void 0 : onMediaDeviceFailure(mediaDeviceFailure);
    };
    const handleEncryptionError = (e2) => {
      onEncryptionError == null ? void 0 : onEncryptionError(e2);
    };
    room.on(import_livekit_client4.RoomEvent.SignalConnected, onSignalConnected).on(import_livekit_client4.RoomEvent.MediaDevicesError, handleMediaDeviceError).on(import_livekit_client4.RoomEvent.EncryptionError, handleEncryptionError);
    return () => {
      room.off(import_livekit_client4.RoomEvent.SignalConnected, onSignalConnected).off(import_livekit_client4.RoomEvent.MediaDevicesError, handleMediaDeviceError).off(import_livekit_client4.RoomEvent.EncryptionError, handleEncryptionError);
    };
  }, [room, audio, video, screen, onError, onEncryptionError, onMediaDeviceFailure]);
  React19.useEffect(() => {
    if (!room) return;
    if (simulateParticipants) {
      room.simulateParticipants({
        participants: {
          count: simulateParticipants
        },
        publish: {
          audio: true,
          useRealTracks: true
        }
      });
      return;
    }
    if (!token) {
      import_components_core12.log.debug("no token yet");
      return;
    }
    if (!serverUrl) {
      import_components_core12.log.warn("no livekit url provided");
      onError == null ? void 0 : onError(Error("no livekit url provided"));
      return;
    }
    if (connect) {
      import_components_core12.log.debug("connecting");
      room.connect(serverUrl, token, connectOptions).catch((e2) => {
        import_components_core12.log.warn(e2);
        onError == null ? void 0 : onError(e2);
      });
    } else {
      import_components_core12.log.debug("disconnecting because connect is false");
      room.disconnect();
    }
  }, [
    connect,
    token,
    JSON.stringify(connectOptions),
    room,
    onError,
    serverUrl,
    simulateParticipants
  ]);
  React19.useEffect(() => {
    if (!room) return;
    const connectionStateChangeListener = (state) => {
      switch (state) {
        case import_livekit_client4.ConnectionState.Disconnected:
          if (onDisconnected) onDisconnected();
          break;
        case import_livekit_client4.ConnectionState.Connected:
          if (onConnected) onConnected();
          break;
        default:
          break;
      }
    };
    room.on(import_livekit_client4.RoomEvent.ConnectionStateChanged, connectionStateChangeListener);
    return () => {
      room.off(import_livekit_client4.RoomEvent.ConnectionStateChanged, connectionStateChangeListener);
    };
  }, [token, onConnected, onDisconnected, room]);
  React19.useEffect(() => {
    if (!room) return;
    return () => {
      import_components_core12.log.info("disconnecting on onmount");
      room.disconnect();
    };
  }, [room]);
  return { room, htmlProps };
}

// src/hooks/useLocalParticipant.ts
var import_components_core13 = require("@livekit/components-core");
var React20 = __toESM(require("react"));
function useLocalParticipant(options = {}) {
  const room = useEnsureRoom(options.room);
  const [localParticipant, setLocalParticipant] = React20.useState(room.localParticipant);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = React20.useState(
    localParticipant.isMicrophoneEnabled
  );
  const [isCameraEnabled, setIsCameraEnabled] = React20.useState(
    localParticipant.isMicrophoneEnabled
  );
  const [lastMicrophoneError, setLastMicrophoneError] = React20.useState(
    localParticipant.lastMicrophoneError
  );
  const [lastCameraError, setLastCameraError] = React20.useState(localParticipant.lastCameraError);
  const [isScreenShareEnabled, setIsScreenShareEnabled] = React20.useState(
    localParticipant.isMicrophoneEnabled
  );
  const [microphoneTrack, setMicrophoneTrack] = React20.useState(
    void 0
  );
  const [cameraTrack, setCameraTrack] = React20.useState(void 0);
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
  React20.useEffect(() => {
    const listener = (0, import_components_core13.observeParticipantMedia)(room.localParticipant).subscribe(handleUpdate);
    return () => listener.unsubscribe();
  }, [room]);
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
var import_components_core14 = require("@livekit/components-core");
var React21 = __toESM(require("react"));
function useLocalParticipantPermissions() {
  const room = useRoomContext();
  const permissionObserver = React21.useMemo(
    () => (0, import_components_core14.participantPermissionObserver)(room.localParticipant),
    [room]
  );
  const permissions = useObservableState(permissionObserver, room.localParticipant.permissions);
  return permissions;
}

// src/hooks/useMediaDeviceSelect.ts
var import_components_core15 = require("@livekit/components-core");
var React22 = __toESM(require("react"));
function useMediaDeviceSelect({
  kind,
  room,
  track,
  requestPermissions,
  onError
}) {
  const roomContext = useMaybeRoomContext();
  const deviceObserver = React22.useMemo(
    () => (0, import_components_core15.createMediaDeviceObserver)(kind, onError, requestPermissions),
    [kind, requestPermissions, onError]
  );
  const devices = useObservableState(deviceObserver, []);
  const [currentDeviceId, setCurrentDeviceId] = React22.useState("");
  const { className, activeDeviceObservable, setActiveMediaDevice } = React22.useMemo(
    () => (0, import_components_core15.setupDeviceSelector)(kind, room != null ? room : roomContext, track),
    [kind, room, roomContext, track]
  );
  React22.useEffect(() => {
    const listener = activeDeviceObservable.subscribe((deviceId) => {
      import_components_core15.log.info("setCurrentDeviceId", deviceId);
      if (deviceId) setCurrentDeviceId(deviceId);
    });
    return () => {
      listener == null ? void 0 : listener.unsubscribe();
    };
  }, [activeDeviceObservable]);
  return { devices, className, activeDeviceId: currentDeviceId, setActiveMediaDevice };
}

// src/hooks/useMediaDevices.ts
var React23 = __toESM(require("react"));
var import_components_core16 = require("@livekit/components-core");
function useMediaDevices({
  kind,
  onError
}) {
  const deviceObserver = React23.useMemo(
    () => (0, import_components_core16.createMediaDeviceObserver)(kind, onError),
    [kind, onError]
  );
  const devices = useObservableState(deviceObserver, []);
  return devices;
}

// src/hooks/usePagination.ts
var React25 = __toESM(require("react"));

// src/hooks/useVisualStableUpdate.ts
var import_components_core17 = require("@livekit/components-core");
var React24 = __toESM(require("react"));
function useVisualStableUpdate(trackReferences, maxItemsOnPage, options = {}) {
  const lastTrackRefs = React24.useRef([]);
  const lastMaxItemsOnPage = React24.useRef(-1);
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
  const [currentPage, setCurrentPage] = React25.useState(1);
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

// src/hooks/useParticipantInfo.ts
var import_components_core18 = require("@livekit/components-core");
var React26 = __toESM(require("react"));
function useParticipantInfo(props = {}) {
  const p2 = useEnsureParticipant(props.participant);
  const infoObserver = React26.useMemo(() => (0, import_components_core18.participantInfoObserver)(p2), [p2]);
  const { identity, name, metadata } = useObservableState(infoObserver, {
    name: p2.name,
    identity: p2.identity,
    metadata: p2.metadata
  });
  return { identity, name, metadata };
}

// src/hooks/useParticipantPermissions.ts
var import_components_core19 = require("@livekit/components-core");
var React27 = __toESM(require("react"));
function useParticipantPermissions(options = {}) {
  const p2 = useEnsureParticipant(options.participant);
  const permissionObserver = React27.useMemo(() => (0, import_components_core19.participantPermissionObserver)(p2), [p2]);
  const permissions = useObservableState(permissionObserver, p2.permissions);
  return permissions;
}

// src/hooks/useParticipantTile.ts
var import_components_core20 = require("@livekit/components-core");
var React28 = __toESM(require("react"));
var import_livekit_client5 = require("livekit-client");
function useParticipantTile({
  trackRef,
  onParticipantClick,
  disableSpeakingIndicator,
  htmlProps
}) {
  const trackReference = useEnsureTrackRef(trackRef);
  const mergedProps = React28.useMemo(() => {
    const { className } = (0, import_components_core20.setupParticipantTile)();
    return mergeProps(htmlProps, {
      className,
      onClick: (event) => {
        var _a2, _b;
        (_a2 = htmlProps.onClick) == null ? void 0 : _a2.call(htmlProps, event);
        if (typeof onParticipantClick === "function") {
          const track = (_b = trackReference.publication) != null ? _b : trackReference.participant.getTrackPublication(trackReference.source);
          onParticipantClick({ participant: trackReference.participant, track });
        }
      }
    });
  }, [
    htmlProps,
    onParticipantClick,
    trackReference.publication,
    trackReference.source,
    trackReference.participant
  ]);
  const micTrack = trackReference.participant.getTrackPublication(import_livekit_client5.Track.Source.Microphone);
  const micRef = React28.useMemo(() => {
    return {
      participant: trackReference.participant,
      source: import_livekit_client5.Track.Source.Microphone,
      publication: micTrack
    };
  }, [micTrack, trackReference.participant]);
  const isVideoMuted = useIsMuted(trackReference);
  const isAudioMuted = useIsMuted(micRef);
  const isSpeaking = useIsSpeaking(trackReference.participant);
  const facingMode = useFacingMode(trackReference);
  return {
    elementProps: __spreadValues({
      "data-lk-audio-muted": isAudioMuted,
      "data-lk-video-muted": isVideoMuted,
      "data-lk-speaking": disableSpeakingIndicator === true ? false : isSpeaking,
      "data-lk-local-participant": trackReference.participant.isLocal,
      "data-lk-source": trackReference.source,
      "data-lk-facing-mode": facingMode
    }, mergedProps)
  };
}

// src/hooks/useRemoteParticipants.ts
var import_components_core21 = require("@livekit/components-core");
var React29 = __toESM(require("react"));
function useRemoteParticipants(options = {}) {
  const room = useEnsureRoom(options.room);
  const [participants, setParticipants] = React29.useState([]);
  React29.useEffect(() => {
    const listener = (0, import_components_core21.connectedParticipantsObserver)(room, {
      additionalRoomEvents: options.updateOnlyOn
    }).subscribe(setParticipants);
    return () => listener.unsubscribe();
  }, [room, JSON.stringify(options.updateOnlyOn)]);
  return participants;
}

// src/hooks/useParticipants.ts
var React30 = __toESM(require("react"));
function useParticipants(options = {}) {
  const remoteParticipants = useRemoteParticipants(options);
  const { localParticipant } = useLocalParticipant(options);
  return React30.useMemo(
    () => [localParticipant, ...remoteParticipants],
    [localParticipant, remoteParticipants]
  );
}

// src/hooks/usePinnedTracks.ts
var React31 = __toESM(require("react"));
function usePinnedTracks(layoutContext) {
  layoutContext = useEnsureLayoutContext(layoutContext);
  return React31.useMemo(() => {
    if ((layoutContext == null ? void 0 : layoutContext.pin.state) !== void 0 && layoutContext.pin.state.length >= 1) {
      return layoutContext.pin.state;
    }
    return [];
  }, [layoutContext.pin.state]);
}

// src/hooks/useRemoteParticipant.ts
var import_components_core22 = require("@livekit/components-core");
var React32 = __toESM(require("react"));
function useRemoteParticipant(identity, options = {}) {
  const room = useRoomContext();
  const [updateOnlyOn] = React32.useState(options.updateOnlyOn);
  const observable = React32.useMemo(
    () => (0, import_components_core22.connectedParticipantObserver)(room, identity, { additionalEvents: updateOnlyOn }),
    [room, identity, updateOnlyOn]
  );
  const participant = useObservableState(
    observable,
    room.getParticipantByIdentity(identity)
  );
  return participant;
}

// src/hooks/useRoomInfo.ts
var import_components_core23 = require("@livekit/components-core");
var React33 = __toESM(require("react"));
function useRoomInfo(options = {}) {
  const room = useEnsureRoom(options.room);
  const infoObserver = React33.useMemo(() => (0, import_components_core23.roomInfoObserver)(room), [room]);
  const { name, metadata } = useObservableState(infoObserver, {
    name: room.name,
    metadata: room.metadata
  });
  return { name, metadata };
}

// src/hooks/useSortedParticipants.ts
var import_components_core25 = require("@livekit/components-core");
var React35 = __toESM(require("react"));

// src/hooks/useSpeakingParticipants.ts
var import_components_core24 = require("@livekit/components-core");
var React34 = __toESM(require("react"));
function useSpeakingParticipants() {
  const room = useRoomContext();
  const speakerObserver = React34.useMemo(() => (0, import_components_core24.activeSpeakerObserver)(room), [room]);
  const activeSpeakers = useObservableState(speakerObserver, room.activeSpeakers);
  return activeSpeakers;
}

// src/hooks/useSortedParticipants.ts
function useSortedParticipants(participants) {
  const [sortedParticipants, setSortedParticipants] = React35.useState(
    (0, import_components_core25.sortParticipants)(participants)
  );
  const activeSpeakers = useSpeakingParticipants();
  React35.useEffect(() => {
    setSortedParticipants((0, import_components_core25.sortParticipants)(participants));
  }, [activeSpeakers, participants]);
  return sortedParticipants;
}

// src/hooks/useStartAudio.ts
var import_components_core26 = require("@livekit/components-core");
var React36 = __toESM(require("react"));
function useStartAudio({ room, props }) {
  const roomEnsured = useEnsureRoom(room);
  const { className, roomAudioPlaybackAllowedObservable: roomAudioPlaybackAllowedObservable2, handleStartAudioPlayback } = React36.useMemo(
    () => (0, import_components_core26.setupStartAudio)(),
    []
  );
  const observable = React36.useMemo(
    () => roomAudioPlaybackAllowedObservable2(roomEnsured),
    [roomEnsured, roomAudioPlaybackAllowedObservable2]
  );
  const { canPlayAudio } = useObservableState(observable, {
    canPlayAudio: roomEnsured.canPlaybackAudio
  });
  const mergedProps = React36.useMemo(
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

// src/hooks/useStartVideo.ts
var import_components_core27 = require("@livekit/components-core");
var React37 = __toESM(require("react"));
function useStartVideo({ room, props }) {
  const roomEnsured = useEnsureRoom(room);
  const { className, roomVideoPlaybackAllowedObservable, handleStartVideoPlayback } = React37.useMemo(
    () => (0, import_components_core27.setupStartVideo)(),
    []
  );
  const observable = React37.useMemo(
    () => roomVideoPlaybackAllowedObservable(roomEnsured),
    [roomEnsured, roomVideoPlaybackAllowedObservable]
  );
  const { canPlayVideo } = useObservableState(observable, {
    canPlayVideo: roomEnsured.canPlaybackVideo
  });
  const mergedProps = React37.useMemo(
    () => mergeProps(props, {
      className,
      onClick: () => {
        handleStartVideoPlayback(roomEnsured);
      },
      style: { display: canPlayVideo ? "none" : "block" }
    }),
    [props, className, canPlayVideo, handleStartVideoPlayback, roomEnsured]
  );
  return { mergedProps, canPlayVideo };
}

// src/hooks/useSwipe.ts
var React38 = __toESM(require("react"));
function useSwipe(element, options = {}) {
  var _a2;
  const touchStart = React38.useRef(null);
  const touchEnd = React38.useRef(null);
  const minSwipeDistance = (_a2 = options.minSwipeDistance) != null ? _a2 : 50;
  const onTouchStart = (event) => {
    touchEnd.current = null;
    touchStart.current = event.targetTouches[0].clientX;
  };
  const onTouchMove = (event) => {
    touchEnd.current = event.targetTouches[0].clientX;
  };
  const onTouchEnd = React38.useCallback(() => {
    if (!touchStart.current || !touchEnd.current) {
      return;
    }
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && options.onLeftSwipe) options.onLeftSwipe();
    if (isRightSwipe && options.onRightSwipe) options.onRightSwipe();
  }, [minSwipeDistance, options]);
  React38.useEffect(() => {
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
var import_components_core28 = require("@livekit/components-core");
var React39 = __toESM(require("react"));
function useChatToggle({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const { className } = React39.useMemo(() => (0, import_components_core28.setupChatToggle)(), []);
  const mergedProps = React39.useMemo(() => {
    return mergeProps(props, {
      className,
      onClick: () => {
        if (dispatch) dispatch({ msg: "toggle_chat" });
      },
      "aria-pressed": (state == null ? void 0 : state.showChat) == "show_chat" ? "true" : "false",
      "data-lk-unread-msgs": state ? state.unreadMessages < 10 ? state.unreadMessages.toFixed(0) : "9+" : "0"
    });
  }, [props, className, dispatch, state]);
  return { mergedProps };
}

// src/hooks/useToken.ts
var import_components_core29 = require("@livekit/components-core");
var React40 = __toESM(require("react"));
function useToken(tokenEndpoint, roomName, options = {}) {
  const [token, setToken] = React40.useState(void 0);
  React40.useEffect(() => {
    var _a2;
    if (tokenEndpoint === void 0) {
      throw Error("token endpoint needs to be defined");
    }
    if (((_a2 = options.userInfo) == null ? void 0 : _a2.identity) === void 0) {
      return;
    }
    const tokenFetcher = () => __async(this, null, function* () {
      import_components_core29.log.debug("fetching token");
      const params = new URLSearchParams(__spreadProps(__spreadValues({}, options.userInfo), { roomName }));
      const res = yield fetch(`${tokenEndpoint}?${params.toString()}`);
      if (!res.ok) {
        import_components_core29.log.error(
          `Could not fetch token. Server responded with status ${res.status}: ${res.statusText}`
        );
        return;
      }
      const { accessToken } = yield res.json();
      setToken(accessToken);
    });
    tokenFetcher();
  }, [tokenEndpoint, roomName, JSON.stringify(options)]);
  return token;
}

// src/hooks/useTrackMutedIndicator.ts
var import_components_core30 = require("@livekit/components-core");
var React41 = __toESM(require("react"));
function useTrackMutedIndicator(trackRef) {
  var _a2, _b;
  const trackReference = useEnsureTrackRef(trackRef);
  const { className, mediaMutedObserver } = React41.useMemo(
    () => (0, import_components_core30.setupTrackMutedIndicator)(trackReference),
    [(0, import_components_core30.getTrackReferenceId)(trackReference)]
  );
  const isMuted = useObservableState(
    mediaMutedObserver,
    !!(((_a2 = trackReference.publication) == null ? void 0 : _a2.isMuted) || ((_b = trackReference.participant.getTrackPublication(trackReference.source)) == null ? void 0 : _b.isMuted))
  );
  return { isMuted, className };
}

// src/hooks/useTrackToggle.ts
var import_components_core31 = require("@livekit/components-core");
var React42 = __toESM(require("react"));
function useTrackToggle(_a2) {
  var _b = _a2, {
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
  var _a3;
  const room = useMaybeRoomContext();
  const track = (_a3 = room == null ? void 0 : room.localParticipant) == null ? void 0 : _a3.getTrackPublication(source);
  const userInteractionRef = React42.useRef(false);
  const { toggle, className, pendingObserver, enabledObserver } = React42.useMemo(
    () => room ? (0, import_components_core31.setupMediaToggle)(source, room, captureOptions) : (0, import_components_core31.setupManualToggle)(),
    [room, source, JSON.stringify(captureOptions)]
  );
  const pending = useObservableState(pendingObserver, false);
  const enabled = useObservableState(enabledObserver, initialState != null ? initialState : !!(track == null ? void 0 : track.isEnabled));
  React42.useEffect(() => {
    onChange == null ? void 0 : onChange(enabled, userInteractionRef.current);
    userInteractionRef.current = false;
  }, [enabled, onChange]);
  React42.useEffect(() => {
    if (initialState !== void 0) {
      import_components_core31.log.debug("forcing initial toggle state", source, initialState);
      toggle(initialState);
    }
  }, []);
  const newProps = React42.useMemo(() => mergeProps(rest, { className }), [rest, className]);
  const clickHandler = React42.useCallback(
    (evt) => {
      var _a4;
      userInteractionRef.current = true;
      toggle().finally(() => userInteractionRef.current = false);
      (_a4 = rest.onClick) == null ? void 0 : _a4.call(rest, evt);
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
var import_components_core32 = require("@livekit/components-core");
var import_livekit_client6 = require("livekit-client");
var React43 = __toESM(require("react"));
function useTracks(sources = [
  import_livekit_client6.Track.Source.Camera,
  import_livekit_client6.Track.Source.Microphone,
  import_livekit_client6.Track.Source.ScreenShare,
  import_livekit_client6.Track.Source.ScreenShareAudio,
  import_livekit_client6.Track.Source.Unknown
], options = {}) {
  const room = useEnsureRoom(options.room);
  const [trackReferences, setTrackReferences] = React43.useState([]);
  const [participants, setParticipants] = React43.useState([]);
  const sources_ = React43.useMemo(() => {
    return sources.map((s2) => (0, import_components_core32.isSourceWitOptions)(s2) ? s2.source : s2);
  }, [JSON.stringify(sources)]);
  React43.useEffect(() => {
    const subscription = (0, import_components_core32.trackReferencesObservable)(room, sources_, {
      additionalRoomEvents: options.updateOnlyOn,
      onlySubscribed: options.onlySubscribed
    }).subscribe(({ trackReferences: trackReferences2, participants: participants2 }) => {
      import_components_core32.log.debug("setting track bundles", trackReferences2, participants2);
      setTrackReferences(trackReferences2);
      setParticipants(participants2);
    });
    return () => subscription.unsubscribe();
  }, [
    room,
    JSON.stringify(options.onlySubscribed),
    JSON.stringify(options.updateOnlyOn),
    JSON.stringify(sources)
  ]);
  const maybeTrackReferences = React43.useMemo(() => {
    if ((0, import_components_core32.isSourcesWithOptions)(sources)) {
      const requirePlaceholder = requiredPlaceholders(sources, participants);
      const trackReferencesWithPlaceholders = Array.from(trackReferences);
      participants.forEach((participant) => {
        var _a2;
        if (requirePlaceholder.has(participant.identity)) {
          const sourcesToAddPlaceholder = (_a2 = requirePlaceholder.get(participant.identity)) != null ? _a2 : [];
          sourcesToAddPlaceholder.forEach((placeholderSource) => {
            if (trackReferences.find(
              ({ participant: p2, publication }) => participant.identity === p2.identity && publication.source === placeholderSource
            )) {
              return;
            }
            import_components_core32.log.debug(
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
  if ((0, import_components_core32.isSourcesWithOptions)(sources)) {
    const sourcesThatNeedPlaceholder = sources.filter((sourceWithOption) => sourceWithOption.withPlaceholder).map((sourceWithOption) => sourceWithOption.source);
    participants.forEach((participant) => {
      const sourcesOfSubscribedTracks = participant.getTrackPublications().map((pub) => {
        var _a2;
        return (_a2 = pub.track) == null ? void 0 : _a2.source;
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

// src/hooks/useTrackRefBySourceOrName.ts
var import_components_core33 = require("@livekit/components-core");
var React44 = __toESM(require("react"));
var import_livekit_client7 = require("livekit-client");
function useTrackRefBySourceOrName(source) {
  var _a2, _b;
  const [publication, setPublication] = React44.useState((0, import_components_core33.getTrackByIdentifier)(source));
  const { trackObserver } = React44.useMemo(() => {
    return (0, import_components_core33.setupMediaTrack)(source);
  }, [(_a2 = source.participant.sid) != null ? _a2 : source.participant.identity, source.source]);
  React44.useEffect(() => {
    const subscription = trackObserver.subscribe((publication2) => {
      setPublication(publication2);
    });
    return () => subscription == null ? void 0 : subscription.unsubscribe();
  }, [trackObserver]);
  return {
    participant: source.participant,
    source: (_b = source.source) != null ? _b : import_livekit_client7.Track.Source.Unknown,
    publication
  };
}

// src/hooks/useTrackByName.ts
function useTrackByName(name, participant) {
  const p2 = useEnsureParticipant(participant);
  return useTrackRefBySourceOrName({ name, participant: p2 });
}

// src/hooks/useChat.ts
var import_components_core34 = require("@livekit/components-core");
var React45 = __toESM(require("react"));
function useChat(options) {
  const room = useRoomContext();
  const [setup, setSetup] = React45.useState();
  const isSending = useObservableState(setup == null ? void 0 : setup.isSendingObservable, false);
  const chatMessages = useObservableState(setup == null ? void 0 : setup.messageObservable, []);
  React45.useEffect(() => {
    const setupChatReturn = (0, import_components_core34.setupChat)(room, options);
    setSetup(setupChatReturn);
  }, [room, options]);
  return { send: setup == null ? void 0 : setup.send, update: setup == null ? void 0 : setup.update, chatMessages, isSending };
}

// src/hooks/useWhiteboard.ts
var import_react = __toESM(require("react"));
function useWhiteboard() {
  const { metadata } = useRoomInfo();
  const room = useRoomContext();
  const [isWhiteboardShared, setIsWhiteboardShared] = import_react.default.useState(false);
  const [isWhiteboardHost, setIsWhiteboardHost] = import_react.default.useState(true);
  const [url, setUrl] = import_react.default.useState(null);
  import_react.default.useEffect(() => {
    let meta = JSON.parse(metadata || "{}");
    if (meta) {
      if (meta == null ? void 0 : meta.whiteboard_domain) {
        let url2 = `${meta == null ? void 0 : meta.whiteboard_domain}?whiteboardid=${room.name}`;
        if (room.localParticipant.name) {
          url2 += `&username=${room.localParticipant.name}`;
        }
        setUrl(url2);
      } else {
        setUrl("/");
      }
      if (meta == null ? void 0 : meta.whiteboard) {
        setIsWhiteboardShared(meta == null ? void 0 : meta.whiteboard);
      } else {
        setIsWhiteboardShared(false);
      }
      if ((meta == null ? void 0 : meta.whiteboard_host) == room.localParticipant.identity) {
        setIsWhiteboardHost(true);
      } else {
        setIsWhiteboardHost(false);
      }
    }
  }, [metadata]);
  return { isWhiteboardShared, isWhiteboardHost, url };
}

// src/hooks/usePersistentUserChoices.ts
var import_components_core35 = require("@livekit/components-core");
var React47 = __toESM(require("react"));
function usePersistentUserChoices(options = {}) {
  var _a2;
  const [userChoices, setSettings] = React47.useState(
    (0, import_components_core35.loadUserChoices)(options.defaults, (_a2 = options.preventLoad) != null ? _a2 : false)
  );
  const saveAudioInputEnabled = React47.useCallback((isEnabled) => {
    setSettings((prev) => __spreadProps(__spreadValues({}, prev), { audioEnabled: isEnabled }));
  }, []);
  const saveVideoInputEnabled = React47.useCallback((isEnabled) => {
    setSettings((prev) => __spreadProps(__spreadValues({}, prev), { videoEnabled: isEnabled }));
  }, []);
  const saveAudioInputDeviceId = React47.useCallback((deviceId) => {
    setSettings((prev) => __spreadProps(__spreadValues({}, prev), { audioDeviceId: deviceId }));
  }, []);
  const saveVideoInputDeviceId = React47.useCallback((deviceId) => {
    setSettings((prev) => __spreadProps(__spreadValues({}, prev), { videoDeviceId: deviceId }));
  }, []);
  const saveUsername = React47.useCallback((username) => {
    setSettings((prev) => __spreadProps(__spreadValues({}, prev), { username }));
  }, []);
  React47.useEffect(() => {
    var _a3;
    (0, import_components_core35.saveUserChoices)(userChoices, (_a3 = options.preventSave) != null ? _a3 : false);
  }, [userChoices, options.preventSave]);
  return {
    userChoices,
    saveAudioInputEnabled,
    saveVideoInputEnabled,
    saveAudioInputDeviceId,
    saveVideoInputDeviceId,
    saveUsername
  };
}

// src/hooks/useIsEncrypted.ts
var React48 = __toESM(require("react"));
var import_livekit_client8 = require("livekit-client");
var import_components_core36 = require("@livekit/components-core");
function useIsEncrypted(participant) {
  const p2 = useEnsureParticipant(participant);
  const room = useEnsureRoom();
  const observer = React48.useMemo(() => (0, import_components_core36.encryptionStatusObservable)(room, p2), [room, p2]);
  const isEncrypted = useObservableState(
    observer,
    p2 instanceof import_livekit_client8.LocalParticipant ? p2.isE2EEEnabled : p2.isEncrypted
  );
  return isEncrypted;
}

// src/hooks/useTrackVolume.ts
var React49 = __toESM(require("react"));
var import_livekit_client9 = require("livekit-client");
var import_components_core37 = require("@livekit/components-core");
var useTrackVolume = (trackOrTrackReference, options = { fftSize: 32, smoothingTimeConstant: 0 }) => {
  const track = (0, import_components_core37.isTrackReference)(trackOrTrackReference) ? trackOrTrackReference.publication.track : trackOrTrackReference;
  const [volume, setVolume] = React49.useState(0);
  React49.useEffect(() => {
    if (!track || !track.mediaStream) {
      return;
    }
    const { cleanup, analyser } = (0, import_livekit_client9.createAudioAnalyser)(track, options);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const updateVolume = () => {
      analyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i2 = 0; i2 < dataArray.length; i2++) {
        const a2 = dataArray[i2];
        sum += a2 * a2;
      }
      setVolume(Math.sqrt(sum / dataArray.length) / 255);
    };
    const interval = setInterval(updateVolume, 1e3 / 30);
    return () => {
      cleanup();
      clearInterval(interval);
    };
  }, [track, track == null ? void 0 : track.mediaStream, JSON.stringify(options)]);
  return volume;
};
var normalizeFrequencies = (frequencies) => {
  const normalizeDb = (value) => {
    const minDb = -100;
    const maxDb = -10;
    let db = 1 - Math.max(minDb, Math.min(maxDb, value)) * -1 / 100;
    db = Math.sqrt(db);
    return db;
  };
  return frequencies.map((value) => {
    if (value === -Infinity) {
      return 0;
    }
    return normalizeDb(value);
  });
};
var multibandDefaults = {
  bands: 5,
  loPass: 100,
  hiPass: 600,
  updateInterval: 10,
  analyserOptions: { fftSize: 2048 }
};
var useMultibandTrackVolume = (trackOrTrackReference, options = {}) => {
  var _a2;
  const track = trackOrTrackReference instanceof import_livekit_client9.Track ? trackOrTrackReference : (_a2 = trackOrTrackReference == null ? void 0 : trackOrTrackReference.publication) == null ? void 0 : _a2.track;
  const [frequencyBands, setFrequencyBands] = React49.useState([]);
  const opts = __spreadValues(__spreadValues({}, multibandDefaults), options);
  React49.useEffect(() => {
    if (!track || !(track == null ? void 0 : track.mediaStream)) {
      return;
    }
    const { analyser, cleanup } = (0, import_livekit_client9.createAudioAnalyser)(track, opts.analyserOptions);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);
    const updateVolume = () => {
      analyser.getFloatFrequencyData(dataArray);
      let frequencies = new Float32Array(dataArray.length);
      for (let i2 = 0; i2 < dataArray.length; i2++) {
        frequencies[i2] = dataArray[i2];
      }
      frequencies = frequencies.slice(options.loPass, options.hiPass);
      const normalizedFrequencies = normalizeFrequencies(frequencies);
      const chunkSize = Math.ceil(normalizedFrequencies.length / opts.bands);
      const chunks = [];
      for (let i2 = 0; i2 < opts.bands; i2++) {
        const summedVolumes = normalizedFrequencies.slice(i2 * chunkSize, (i2 + 1) * chunkSize).reduce((acc, val) => acc += val, 0);
        chunks.push(summedVolumes / chunkSize);
      }
      setFrequencyBands(chunks);
    };
    const interval = setInterval(updateVolume, opts.updateInterval);
    return () => {
      cleanup();
      clearInterval(interval);
    };
  }, [track, track == null ? void 0 : track.mediaStream, JSON.stringify(options)]);
  return frequencyBands;
};

// src/hooks/useParticipantTracks.ts
var React50 = __toESM(require("react"));
var import_components_core38 = require("@livekit/components-core");
function useParticipantTracks(sources, participantIdentity) {
  const room = useRoomContext();
  const participantContext = useMaybeParticipantContext();
  const p2 = participantIdentity ? room.getParticipantByIdentity(participantIdentity) : participantContext;
  const observable = React50.useMemo(
    () => p2 ? (0, import_components_core38.participantTracksObservable)(p2, { sources }) : void 0,
    [p2 == null ? void 0 : p2.sid, p2 == null ? void 0 : p2.identity, JSON.stringify(sources)]
  );
  const trackRefs = useObservableState(observable, []);
  return trackRefs;
}

// src/components/controls/ClearPinButton.tsx
var ClearPinButton = /* @__PURE__ */ React51.forwardRef(function ClearPinButton2(props, ref) {
  const { buttonProps } = useClearPinButton(props);
  return /* @__PURE__ */ React51.createElement("button", __spreadValues({ ref }, buttonProps), props.children);
});

// src/components/ConnectionState.tsx
var React52 = __toESM(require("react"));
var ConnectionState3 = /* @__PURE__ */ React52.forwardRef(function ConnectionState4(_a2, ref) {
  var _b = _a2, { room } = _b, props = __objRest(_b, ["room"]);
  const connectionState = useConnectionState(room);
  return /* @__PURE__ */ React52.createElement("div", __spreadValues({ ref }, props), connectionState);
});

// src/components/controls/ChatToggle.tsx
var React53 = __toESM(require("react"));
var ChatToggle = /* @__PURE__ */ React53.forwardRef(
  function ChatToggle2(props, ref) {
    const { mergedProps } = useChatToggle({ props });
    return /* @__PURE__ */ React53.createElement("button", __spreadValues({ ref }, mergedProps), props.children);
  }
);

// src/utils.ts
var React54 = __toESM(require("react"));
var import_components_core39 = require("@livekit/components-core");
function isProp(prop) {
  return prop !== void 0;
}
function mergeProps2(...props) {
  return mergeProps(...props.filter(isProp));
}
function cloneSingleChild(children, props, key) {
  return React54.Children.map(children, (child) => {
    if (React54.isValidElement(child) && React54.Children.only(children)) {
      return React54.cloneElement(child, __spreadProps(__spreadValues({}, props), { key }));
    }
    return child;
  });
}
function warnAboutMissingStyles(el) {
  var _a2, _b;
  if (typeof window !== "undefined" && typeof process !== "undefined" && // eslint-disable-next-line turbo/no-undeclared-env-vars
  (((_a2 = process == null ? void 0 : process.env) == null ? void 0 : _a2.NODE_ENV) === "dev" || // eslint-disable-next-line turbo/no-undeclared-env-vars
  ((_b = process == null ? void 0 : process.env) == null ? void 0 : _b.NODE_ENV) === "development")) {
    const target = el != null ? el : document.querySelector(".lk-room-container");
    if (target && !getComputedStyle(target).getPropertyValue("--lk-has-imported-styles")) {
      import_components_core39.log.warn(
        "It looks like you're not using the `@livekit/components-styles package`. To render the UI with the default styling, please import it in your layout or page."
      );
    }
  }
}

// src/components/controls/ShareLinkToggle.tsx
var React55 = __toESM(require("react"));
function useToggleShareLink({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const className = "lk-button";
  const mergedProps = React55.useMemo(
    () => mergeProps2(props, {
      className,
      onClick: () => {
        if (dispatch) dispatch({ msg: "show_invite" });
      },
      "aria-pressed": (state == null ? void 0 : state.showChat) == "show_invite" ? "true" : "false"
    }),
    [props, className, dispatch]
  );
  return { mergedProps };
}
function ShareLinkToggle(props) {
  const { mergedProps } = useToggleShareLink({ props });
  return /* @__PURE__ */ React55.createElement("button", __spreadValues({}, mergedProps), props.children);
}

// src/components/controls/DisconnectButton.tsx
var React56 = __toESM(require("react"));
var DisconnectButton = /* @__PURE__ */ React56.forwardRef(function DisconnectButton2(props, ref) {
  const { buttonProps } = useDisconnectButton(props);
  return /* @__PURE__ */ React56.createElement("button", __spreadValues({ ref }, buttonProps), props.children);
});

// src/components/controls/FocusToggle.tsx
var React76 = __toESM(require("react"));

// src/assets/icons/CameraDisabledIcon.tsx
var React57 = __toESM(require("react"));
var SvgCameraDisabledIcon = (props) => /* @__PURE__ */ React57.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React57.createElement("path", { d: "M1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708L11 10.293V4.5A1.5 1.5 0 0 0 9.5 3H3.707zM0 4.5a1.5 1.5 0 0 1 .943-1.393l9.532 9.533c-.262.224-.603.36-.975.36h-8A1.5 1.5 0 0 1 0 11.5z" }), /* @__PURE__ */ React57.createElement("path", { d: "m15.2 3.6-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4" }));
var CameraDisabledIcon_default = SvgCameraDisabledIcon;

// src/assets/icons/CameraIcon.tsx
var React58 = __toESM(require("react"));
var SvgCameraIcon = (props) => /* @__PURE__ */ React58.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React58.createElement("path", { d: "M0 4.5A1.5 1.5 0 0 1 1.5 3h8A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-8A1.5 1.5 0 0 1 0 11.5zM15.2 3.6l-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4" }));
var CameraIcon_default = SvgCameraIcon;

// src/assets/icons/ChatCloseIcon.tsx
var React59 = __toESM(require("react"));
var SvgChatCloseIcon = (props) => /* @__PURE__ */ React59.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 24 24" }, props), /* @__PURE__ */ React59.createElement(
  "path",
  {
    fill: "#FFF",
    d: "M4.99 3.99a1 1 0 0 0-.697 1.717L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 1 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-.727-1.717 1 1 0 0 0-.687.303L12 10.586 5.707 4.293a1 1 0 0 0-.717-.303"
  }
));
var ChatCloseIcon_default = SvgChatCloseIcon;

// src/assets/icons/ChatIcon.tsx
var React60 = __toESM(require("react"));
var SvgChatIcon = (props) => /* @__PURE__ */ React60.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 18, fill: "none" }, props), /* @__PURE__ */ React60.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v13.594a.75.75 0 0 1-1.234.572l-3.691-3.12a1.25 1.25 0 0 0-.807-.296H2.75A2.75 2.75 0 0 1 0 10.75zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h7.518c.65 0 1.279.23 1.775.65l2.457 2.077V2.75c0-.69-.56-1.25-1.25-1.25z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React60.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5",
    clipRule: "evenodd"
  }
));
var ChatIcon_default = SvgChatIcon;

// src/assets/icons/Chevron.tsx
var React61 = __toESM(require("react"));
var SvgChevron = (props) => /* @__PURE__ */ React61.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React61.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M5.293 2.293a1 1 0 0 1 1.414 0l4.823 4.823a1.25 1.25 0 0 1 0 1.768l-4.823 4.823a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }
));
var Chevron_default = SvgChevron;

// src/assets/icons/FocusToggleIcon.tsx
var React62 = __toESM(require("react"));
var SvgFocusToggleIcon = (props) => /* @__PURE__ */ React62.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React62.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ React62.createElement("path", { d: "M10 1.75h4.25m0 0V6m0-4.25L9 7M6 14.25H1.75m0 0V10m0 4.25L7 9" })));
var FocusToggleIcon_default = SvgFocusToggleIcon;

// src/assets/icons/GearIcon.tsx
var React63 = __toESM(require("react"));
var SvgGearIcon = (props) => /* @__PURE__ */ React63.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React63.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M8.961.894C8.875-.298 7.125-.298 7.04.894c-.066.912-1.246 1.228-1.76.472-.67-.99-2.186-.115-1.664.96.399.824-.465 1.688-1.288 1.289-1.076-.522-1.95.994-.961 1.665.756.513.44 1.693-.472 1.759-1.192.086-1.192 1.836 0 1.922.912.066 1.228 1.246.472 1.76-.99.67-.115 2.186.96 1.664.824-.399 1.688.465 1.289 1.288-.522 1.076.994 1.95 1.665.961.513-.756 1.693-.44 1.759.472.086 1.192 1.836 1.192 1.922 0 .066-.912 1.246-1.228 1.76-.472.67.99 2.186.115 1.664-.96-.399-.824.465-1.687 1.288-1.289 1.076.522 1.95-.994.961-1.665-.756-.513-.44-1.693.472-1.759 1.192-.086 1.192-1.836 0-1.922-.912-.066-1.228-1.246-.472-1.76.99-.67.115-2.186-.96-1.664-.824.399-1.687-.465-1.289-1.288.522-1.076-.994-1.95-1.665-.961-.513.756-1.693.44-1.759-.472M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10",
    clipRule: "evenodd"
  }
));
var GearIcon_default = SvgGearIcon;

// src/assets/icons/LeaveIcon.tsx
var React64 = __toESM(require("react"));
var SvgLeaveIcon = (props) => /* @__PURE__ */ React64.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React64.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 2.75A2.75 2.75 0 0 1 4.75 0h6.5A2.75 2.75 0 0 1 14 2.75v10.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React64.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.78 7.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h4.69l-.97-.97a.75.75 0 0 1 1.06-1.06z",
    clipRule: "evenodd"
  }
));
var LeaveIcon_default = SvgLeaveIcon;

// src/assets/icons/LockLockedIcon.tsx
var React65 = __toESM(require("react"));
var SvgLockLockedIcon = (props) => /* @__PURE__ */ React65.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React65.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M4 6.104V4a4 4 0 1 1 8 0v2.104c1.154.326 2 1.387 2 2.646v4.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-4.5c0-1.259.846-2.32 2-2.646M5.5 4a2.5 2.5 0 0 1 5 0v2h-5z",
    clipRule: "evenodd"
  }
));
var LockLockedIcon_default = SvgLockLockedIcon;

// src/assets/icons/MicDisabledIcon.tsx
var React66 = __toESM(require("react"));
var SvgMicDisabledIcon = (props) => /* @__PURE__ */ React66.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React66.createElement("path", { d: "M12.227 11.52a5.48 5.48 0 0 0 1.246-2.97.5.5 0 0 0-.995-.1 4.5 4.5 0 0 1-.962 2.359l-1.07-1.07C10.794 9.247 11 8.647 11 8V3a3 3 0 0 0-6 0v1.293L1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708zM8 12.5c.683 0 1.33-.152 1.911-.425l.743.743c-.649.359-1.378.59-2.154.66V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.5 5.5 0 0 1-4.973-4.929.5.5 0 0 1 .995-.098A4.5 4.5 0 0 0 8 12.5" }), /* @__PURE__ */ React66.createElement("path", { d: "M8.743 10.907 5 7.164V8a3 3 0 0 0 3.743 2.907" }));
var MicDisabledIcon_default = SvgMicDisabledIcon;

// src/assets/icons/MicIcon.tsx
var React67 = __toESM(require("react"));
var SvgMicIcon = (props) => /* @__PURE__ */ React67.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React67.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.975 8.002a.5.5 0 0 1 .547.449 4.5 4.5 0 0 0 8.956 0 .5.5 0 1 1 .995.098A5.5 5.5 0 0 1 8.5 13.478V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.5 5.5 0 0 1-4.973-4.929.5.5 0 0 1 .448-.547",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React67.createElement("path", { d: "M5 3a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z" }));
var MicIcon_default = SvgMicIcon;

// src/assets/icons/QualityExcellentIcon.tsx
var React68 = __toESM(require("react"));
var SvgQualityExcellentIcon = (props) => /* @__PURE__ */ React68.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React68.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React68.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }));
var QualityExcellentIcon_default = SvgQualityExcellentIcon;

// src/assets/icons/QualityGoodIcon.tsx
var React69 = __toESM(require("react"));
var SvgQualityGoodIcon = (props) => /* @__PURE__ */ React69.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React69.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React69.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React69.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React69.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React69.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityGoodIcon_default = SvgQualityGoodIcon;

// src/assets/icons/QualityPoorIcon.tsx
var React70 = __toESM(require("react"));
var SvgQualityPoorIcon = (props) => /* @__PURE__ */ React70.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React70.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React70.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityPoorIcon_default = SvgQualityPoorIcon;

// src/assets/icons/QualityUnknownIcon.tsx
var React71 = __toESM(require("react"));
var SvgQualityUnknownIcon = (props) => /* @__PURE__ */ React71.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React71.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React71.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React71.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityUnknownIcon_default = SvgQualityUnknownIcon;

// src/assets/icons/ScreenShareIcon.tsx
var React72 = __toESM(require("react"));
var SvgScreenShareIcon = (props) => /* @__PURE__ */ React72.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none" }, props), /* @__PURE__ */ React72.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h14.5A2.75 2.75 0 0 1 20 2.75v10.5A2.75 2.75 0 0 1 17.25 16H2.75A2.75 2.75 0 0 1 0 13.25zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React72.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.47 4.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v4.69a.75.75 0 0 1-1.5 0V6.56l-.97.97a.75.75 0 0 1-1.06-1.06z",
    clipRule: "evenodd"
  }
));
var ScreenShareIcon_default = SvgScreenShareIcon;

// src/assets/icons/ScreenShareStopIcon.tsx
var React73 = __toESM(require("react"));
var SvgScreenShareStopIcon = (props) => /* @__PURE__ */ React73.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none" }, props), /* @__PURE__ */ React73.createElement("g", { fill: "currentColor" }, /* @__PURE__ */ React73.createElement("path", { d: "M7.28 4.22a.75.75 0 0 0-1.06 1.06L8.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 6.94z" }), /* @__PURE__ */ React73.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.75 0A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h14.5A2.75 2.75 0 0 0 20 13.25V2.75A2.75 2.75 0 0 0 17.25 0zM1.5 2.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25z",
    clipRule: "evenodd"
  }
)));
var ScreenShareStopIcon_default = SvgScreenShareStopIcon;

// src/assets/icons/SpinnerIcon.tsx
var React74 = __toESM(require("react"));
var SvgSpinnerIcon = (props) => /* @__PURE__ */ React74.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 12",
    clipRule: "evenodd",
    opacity: 0.7
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1.072a.75.75 0 0 1 .274 1.024l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 12 1.072",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 11.464a.75.75 0 0 1 .274 1.025l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 6 11.464",
    clipRule: "evenodd",
    opacity: 0.6
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 4a.75.75 0 0 1-.274 1.025l-2.165 1.25a.75.75 0 1 1-.75-1.3l2.165-1.25A.75.75 0 0 1 14.928 4",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 10a.75.75 0 0 1-.275 1.024l-2.165 1.25a.75.75 0 0 1-.75-1.298l2.165-1.25A.75.75 0 0 1 4.536 10",
    clipRule: "evenodd",
    opacity: 0.5
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16 8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 16 8",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 8",
    clipRule: "evenodd",
    opacity: 0.4
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 12a.75.75 0 0 1-1.024.274l-2.165-1.25a.75.75 0 0 1 .75-1.299l2.165 1.25A.75.75 0 0 1 14.928 12",
    clipRule: "evenodd",
    opacity: 0.9
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 6a.75.75 0 0 1-1.025.275l-2.165-1.25a.75.75 0 1 1 .75-1.3l2.165 1.25A.75.75 0 0 1 4.536 6",
    clipRule: "evenodd",
    opacity: 0.3
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 14.928a.75.75 0 0 1-1.024-.274l-1.25-2.165a.75.75 0 0 1 1.298-.75l1.25 2.165A.75.75 0 0 1 12 14.928",
    clipRule: "evenodd",
    opacity: 0.8
  }
), /* @__PURE__ */ React74.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 4.536a.75.75 0 0 1-1.024-.275l-1.25-2.165a.75.75 0 1 1 1.299-.75l1.25 2.165A.75.75 0 0 1 6 4.536",
    clipRule: "evenodd",
    opacity: 0.2
  }
));
var SpinnerIcon_default = SvgSpinnerIcon;

// src/assets/icons/UnfocusToggleIcon.tsx
var React75 = __toESM(require("react"));
var SvgUnfocusToggleIcon = (props) => /* @__PURE__ */ React75.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React75.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ React75.createElement("path", { d: "M13.25 7H9m0 0V2.75M9 7l5.25-5.25M2.75 9H7m0 0v4.25M7 9l-5.25 5.25" })));
var UnfocusToggleIcon_default = SvgUnfocusToggleIcon;

// src/components/controls/FocusToggle.tsx
var FocusToggle = /* @__PURE__ */ React76.forwardRef(
  function FocusToggle2(_a2, ref) {
    var _b = _a2, { trackRef } = _b, props = __objRest(_b, ["trackRef"]);
    const trackRefFromContext = useMaybeTrackRefContext();
    const { mergedProps, inFocus } = useFocusToggle({
      trackRef: trackRef != null ? trackRef : trackRefFromContext,
      props
    });
    return /* @__PURE__ */ React76.createElement(LayoutContext.Consumer, null, (layoutContext) => layoutContext !== void 0 && /* @__PURE__ */ React76.createElement("button", __spreadValues({ ref }, mergedProps), props.children ? props.children : inFocus ? /* @__PURE__ */ React76.createElement(UnfocusToggleIcon_default, null) : /* @__PURE__ */ React76.createElement(FocusToggleIcon_default, null)));
  }
);

// src/components/controls/MediaDeviceSelect.tsx
var React77 = __toESM(require("react"));
var import_livekit_client10 = require("livekit-client");
var MediaDeviceSelect = /* @__PURE__ */ React77.forwardRef(function MediaDeviceSelect2(_a2, ref) {
  var _b = _a2, {
    kind,
    initialSelection,
    onActiveDeviceChange,
    onDeviceListChange,
    onDeviceSelectError,
    exactMatch,
    track,
    requestPermissions,
    onError
  } = _b, props = __objRest(_b, [
    "kind",
    "initialSelection",
    "onActiveDeviceChange",
    "onDeviceListChange",
    "onDeviceSelectError",
    "exactMatch",
    "track",
    "requestPermissions",
    "onError"
  ]);
  const room = useMaybeRoomContext();
  const handleError = React77.useCallback(
    (e2) => {
      if (room) {
        room.emit(import_livekit_client10.RoomEvent.MediaDevicesError, e2);
      }
      onError == null ? void 0 : onError(e2);
    },
    [room, onError]
  );
  const { devices, activeDeviceId, setActiveMediaDevice, className } = useMediaDeviceSelect({
    kind,
    room,
    track,
    requestPermissions,
    onError: handleError
  });
  React77.useEffect(() => {
    if (initialSelection !== void 0) {
      setActiveMediaDevice(initialSelection);
    }
  }, [setActiveMediaDevice]);
  React77.useEffect(() => {
    if (typeof onDeviceListChange === "function") {
      onDeviceListChange(devices);
    }
  }, [onDeviceListChange, devices]);
  React77.useEffect(() => {
    console.log({ kind, activeDeviceId });
    if (activeDeviceId && activeDeviceId !== "") {
      onActiveDeviceChange == null ? void 0 : onActiveDeviceChange(activeDeviceId);
    }
  }, [activeDeviceId]);
  const handleActiveDeviceChange = (deviceId) => __async(this, null, function* () {
    try {
      yield setActiveMediaDevice(deviceId, { exact: exactMatch });
    } catch (e2) {
      if (e2 instanceof Error) {
        onDeviceSelectError == null ? void 0 : onDeviceSelectError(e2);
      } else {
        throw e2;
      }
    }
  });
  const mergedProps = React77.useMemo(
    () => mergeProps2(props, { className }, { className: "lk-list" }),
    [className, props]
  );
  function isActive(deviceId, activeDeviceId2, index) {
    return deviceId === activeDeviceId2 || index === 0 && activeDeviceId2 === "default";
  }
  return /* @__PURE__ */ React77.createElement("ul", __spreadValues({ ref }, mergedProps), devices.map((device, index) => /* @__PURE__ */ React77.createElement(
    "li",
    {
      key: device.deviceId,
      id: device.deviceId,
      "data-lk-active": isActive(device.deviceId, activeDeviceId, index),
      "aria-selected": isActive(device.deviceId, activeDeviceId, index),
      role: "option"
    },
    /* @__PURE__ */ React77.createElement("button", { className: "lk-button", onClick: () => handleActiveDeviceChange(device.deviceId) }, device.label)
  )));
});

// src/components/controls/StartAudio.tsx
var React78 = __toESM(require("react"));
var StartAudio = /* @__PURE__ */ React78.forwardRef(function StartAudio2(_a2, ref) {
  var _b = _a2, { label = "Allow Audio" } = _b, props = __objRest(_b, ["label"]);
  const room = useRoomContext();
  const { mergedProps } = useStartAudio({ room, props });
  return /* @__PURE__ */ React78.createElement("button", __spreadValues({ ref }, mergedProps), label);
});

// src/components/controls/TrackToggle.tsx
var React89 = __toESM(require("react"));

// src/assets/icons/util.tsx
var React88 = __toESM(require("react"));
var import_livekit_client11 = require("livekit-client");

// src/assets/icons/tl/CameraDisabledIcon.tsx
var React79 = __toESM(require("react"));
var SvgCameraDisabledIcon2 = (props) => /* @__PURE__ */ React79.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React79.createElement(
    "path",
    {
      d: "M14.6155 6.64973C14.6155 6.64973 14.6409 5.84659 14.6155 5.58451C14.4718 3.85986 13.3474 3.26807 11.1409 3.26807H5.80627C3.13476 3.26807 2.24707 4.15575 2.24707 6.82727V13.9457C2.24707 15.0109 2.56833 16.0846 3.40529 16.7694L3.9379 17.1498",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React79.createElement(
    "path",
    {
      d: "M14.7084 9.49878V13.9457C14.7084 16.6172 13.8207 17.5049 11.1492 17.5049H6.69385",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React79.createElement(
    "path",
    {
      d: "M19.1554 5.93958V13.6075C19.1554 15.0194 18.2085 15.5097 17.0588 14.6981L14.7085 13.0495",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React79.createElement(
    "path",
    {
      d: "M19.172 2.0929L2.26367 19.0012",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var CameraDisabledIcon_default2 = SvgCameraDisabledIcon2;

// src/assets/icons/tl/CameraIcon.tsx
var React80 = __toESM(require("react"));
var SvgCameraIcon2 = (props) => /* @__PURE__ */ React80.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React80.createElement(
    "path",
    {
      d: "M10.9042 17.5049H5.56116C2.88964 17.5049 2.00195 15.7295 2.00195 13.9457V6.82727C2.00195 4.15575 2.88964 3.26807 5.56116 3.26807H10.9042C13.5757 3.26807 14.4634 4.15575 14.4634 6.82727V13.9457C14.4634 16.6172 13.5673 17.5049 10.9042 17.5049Z",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React80.createElement(
    "path",
    {
      d: "M16.8136 14.6981L14.4634 13.0495V7.71495L16.8136 6.06638C17.9634 5.26324 18.9103 5.75358 18.9103 7.16543V13.6075C18.9103 15.0193 17.9634 15.5097 16.8136 14.6981Z",
      stroke: "white",
      strokeWidth: "1.66",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React80.createElement(
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
var CameraIcon_default2 = SvgCameraIcon2;

// src/assets/icons/tl/MicDisabledIcon.tsx
var React81 = __toESM(require("react"));
var SvgMicDisabledIcon2 = (props) => /* @__PURE__ */ React81.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M14.222 5.74004V5.48647C14.222 3.61847 12.709 2.10547 10.841 2.10547C8.97296 2.10547 7.45996 3.61847 7.45996 5.48647V9.71272",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M8.33936 12.4091C8.95639 13.0937 9.85235 13.5163 10.8413 13.5163C12.7093 13.5163 14.2223 12.0033 14.2223 10.1353V9.71271",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M6.42871 14.7419C7.5867 15.8154 9.13351 16.4747 10.8409 16.4747C14.4079 16.4747 17.3071 13.5755 17.3071 10.0085V8.57159",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M4.375 8.57159V10.0085C4.375 10.9045 4.5525 11.7497 4.88215 12.5274",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M17.6624 2.81549L4.02002 16.4663",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M9.99561 2.95068V5.48643",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React81.createElement(
    "path",
    {
      d: "M10.8408 16.4747V19.0105",
      stroke: "#f91f31",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var MicDisabledIcon_default2 = SvgMicDisabledIcon2;

// src/assets/icons/tl/MicIcon.tsx
var React82 = __toESM(require("react"));
var SvgMicIcon2 = (props) => /* @__PURE__ */ React82.createElement(
  "svg",
  __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 22 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React82.createElement(
    "path",
    {
      d: "M10.9049 13.3448C12.7729 13.3448 14.2859 11.8318 14.2859 9.96384V5.31496C14.2859 3.44696 12.7729 1.93396 10.9049 1.93396C9.03692 1.93396 7.52393 3.44696 7.52393 5.31496V9.96384C7.52393 11.8318 9.03692 13.3448 10.9049 13.3448Z",
      stroke: "#ADF802",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React82.createElement(
    "path",
    {
      d: "M4.43896 8.40009V9.83701C4.43896 13.404 7.33817 16.3032 10.9051 16.3032C14.4721 16.3032 17.3713 13.404 17.3713 9.83701V8.40009",
      stroke: "#ADF802",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React82.createElement(
    "path",
    {
      d: "M9.73047 5.67844C10.4912 5.39951 11.3195 5.39951 12.0803 5.67844",
      stroke: "#ADF802",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React82.createElement(
    "path",
    {
      d: "M10.229 7.47034C10.677 7.35201 11.1419 7.35201 11.5899 7.47034",
      stroke: "#ADF802",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ React82.createElement(
    "path",
    {
      d: "M10.9048 16.3032V18.839",
      stroke: "#ADF802",
      strokeWidth: "1.66129",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
);
var MicIcon_default2 = SvgMicIcon2;

// src/assets/icons/tl/SendMessage.tsx
var React83 = __toESM(require("react"));
var SvgSendMessage = (props) => /* @__PURE__ */ React83.createElement(
  "svg",
  __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none"
  }, props),
  /* @__PURE__ */ React83.createElement("path", { d: "M1.74805 17.0391L16.373 9.91406L1.74805 2.78906L1.74805 8.33072L12.2246 9.91406L1.74805 11.4974L1.74805 17.0391Z", fill: "#191A1E" })
);
var SendMessage_default = SvgSendMessage;

// src/assets/icons/tl/ApproveIcon.tsx
var React84 = __toESM(require("react"));
var SvgApproveIcon = (props) => /* @__PURE__ */ React84.createElement(
  "svg",
  __spreadValues({
    width: "15",
    height: "11",
    viewBox: "0 0 17 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React84.createElement(
    "path",
    {
      d: "M6.44587 12.3181C6.35059 12.3854 6.21756 12.3816 6.13768 12.2966C5.87427 12.0164 5.62193 11.7435 5.3696 11.4706C3.87981 9.87788 2.38394 8.27905 0.900223 6.68022C0.225256 5.95072 0.316468 4.8747 1.09481 4.30933C1.73937 3.83516 2.60284 3.91419 3.18052 4.52211C4.17777 5.57381 5.16286 6.63767 6.14794 7.69545C6.18071 7.73039 6.21348 7.76612 6.24709 7.80263C6.35423 7.919 6.5347 7.92887 6.64657 7.81703V7.81703C8.25798 6.30939 9.86939 4.80175 11.4869 3.30019C12.399 2.4491 13.305 1.60409 14.2232 0.765159C15.1293 -0.0676915 16.5461 0.357852 16.8258 1.54938C16.9717 2.1573 16.7832 2.68011 16.3211 3.11173C15.0928 4.25462 13.8705 5.39751 12.6483 6.5404C11.4565 7.65289 10.2646 8.76539 9.0728 9.87788C8.20696 10.689 7.33509 11.4881 6.4692 12.2991C6.46178 12.3061 6.45416 12.3123 6.44587 12.3181V12.3181Z",
      fill: "white"
    }
  )
);
var ApproveIcon_default = SvgApproveIcon;

// src/assets/icons/tl/RejectIcon.tsx
var React85 = __toESM(require("react"));
var SvgRejectIcon = (props) => /* @__PURE__ */ React85.createElement(
  "svg",
  __spreadValues({
    width: "15",
    height: "11",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React85.createElement(
    "path",
    {
      d: "M6.70508 8.22715C6.03352 8.9047 5.39471 9.54143 4.74772 10.1863C4.16624 10.7659 3.59295 11.3455 3.01147 11.9169C2.61836 12.3006 2.15154 12.4231 1.62739 12.2271C1.136 12.0475 0.849362 11.672 0.775653 11.1578C0.710135 10.7006 0.8985 10.3251 1.2179 10.0067C2.33991 8.88837 3.46191 7.77001 4.58392 6.65165C4.66582 6.57001 4.76409 6.51287 4.87875 6.43124C4.7559 6.30063 4.6822 6.21899 4.60849 6.14553C3.47829 5.01084 2.33991 3.88431 1.20971 2.74962C0.677375 2.21085 0.620047 1.49248 1.0623 0.953708C1.57826 0.325139 2.43819 0.292486 3.05242 0.896565C4.18262 2.01493 5.31281 3.14146 6.43482 4.27614C6.51672 4.35778 6.57404 4.45574 6.66413 4.57002C6.78698 4.45574 6.86888 4.38227 6.94259 4.3088C8.08097 3.17411 9.21117 2.03942 10.3496 0.912892C10.931 0.333302 11.7336 0.325139 12.2578 0.863913C12.7655 1.3782 12.7655 2.16187 12.2414 2.7088C11.6845 3.28839 11.103 3.85166 10.5297 4.42308C9.88273 5.06798 9.22755 5.72104 8.55598 6.39042C8.64607 6.48838 8.71978 6.56185 8.79349 6.64348C9.92368 7.77001 11.0457 8.89654 12.1759 10.0231C12.5199 10.3659 12.7082 10.7659 12.6099 11.2639C12.5117 11.7537 12.2168 12.0884 11.75 12.2516C11.2668 12.4231 10.8164 12.3169 10.4396 11.9741C10.0711 11.6312 9.72713 11.272 9.37496 10.921C8.49046 10.0231 7.61415 9.14143 6.70508 8.22715Z",
      fill: "white"
    }
  )
);
var RejectIcon_default = SvgRejectIcon;

// src/assets/icons/tl/InviteIcon.tsx
var React86 = __toESM(require("react"));
var SvgInviteIcon = (props) => /* @__PURE__ */ React86.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 25, height: 20, fill: "none" }, props), /* @__PURE__ */ React86.createElement(
  "path",
  {
    d: "M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z",
    fill: "#ffffff"
  }
));
var InviteIcon_default = SvgInviteIcon;

// src/assets/icons/tl/UsersIcon.tsx
var React87 = __toESM(require("react"));
var SvgUserIcon = (props) => /* @__PURE__ */ React87.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none" }, props), /* @__PURE__ */ React87.createElement(
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

// src/assets/icons/util.tsx
function getSourceIcon(source, enabled) {
  switch (source) {
    case import_livekit_client11.Track.Source.Microphone:
      return enabled ? /* @__PURE__ */ React88.createElement(MicIcon_default2, null) : /* @__PURE__ */ React88.createElement(MicDisabledIcon_default2, null);
    case import_livekit_client11.Track.Source.Camera:
      return enabled ? /* @__PURE__ */ React88.createElement(CameraIcon_default2, null) : /* @__PURE__ */ React88.createElement(CameraDisabledIcon_default2, null);
    case import_livekit_client11.Track.Source.ScreenShare:
      return enabled ? /* @__PURE__ */ React88.createElement(ScreenShareStopIcon_default, null) : /* @__PURE__ */ React88.createElement(ScreenShareIcon_default, null);
    default:
      return void 0;
  }
}
function getConnectionQualityIcon(quality) {
  switch (quality) {
    case import_livekit_client11.ConnectionQuality.Excellent:
      return /* @__PURE__ */ React88.createElement(QualityExcellentIcon_default, null);
    case import_livekit_client11.ConnectionQuality.Good:
      return /* @__PURE__ */ React88.createElement(QualityGoodIcon_default, null);
    case import_livekit_client11.ConnectionQuality.Poor:
      return /* @__PURE__ */ React88.createElement(QualityPoorIcon_default, null);
    default:
      return /* @__PURE__ */ React88.createElement(QualityUnknownIcon_default, null);
  }
}

// src/components/controls/TrackToggle.tsx
var TrackToggle = /* @__PURE__ */ React89.forwardRef(function TrackToggle2(_a2, ref) {
  var _b = _a2, { showIcon } = _b, props = __objRest(_b, ["showIcon"]);
  const { buttonProps, enabled } = useTrackToggle(props);
  return /* @__PURE__ */ React89.createElement("button", __spreadValues({ ref }, buttonProps), (showIcon != null ? showIcon : true) && getSourceIcon(props.source, enabled), props.children);
});

// src/components/layout/FocusLayout.tsx
var React99 = __toESM(require("react"));

// src/components/participant/ParticipantTile.tsx
var React98 = __toESM(require("react"));
var import_livekit_client14 = require("livekit-client");
var import_components_core44 = require("@livekit/components-core");

// src/components/participant/ConnectionQualityIndicator.tsx
var React90 = __toESM(require("react"));
var ConnectionQualityIndicator = /* @__PURE__ */ React90.forwardRef(function ConnectionQualityIndicator2(props, ref) {
  var _a2;
  const { className, quality } = useConnectionQualityIndicator(props);
  const elementProps = React90.useMemo(() => {
    return __spreadProps(__spreadValues({}, mergeProps2(props, { className })), { "data-lk-quality": quality });
  }, [quality, props, className]);
  return /* @__PURE__ */ React90.createElement("div", __spreadValues({ ref }, elementProps), (_a2 = props.children) != null ? _a2 : getConnectionQualityIcon(quality));
});

// src/components/participant/ParticipantName.tsx
var import_components_core40 = require("@livekit/components-core");
var React91 = __toESM(require("react"));
var ParticipantName = /* @__PURE__ */ React91.forwardRef(function ParticipantName2(_a2, ref) {
  var _b = _a2, { participant } = _b, props = __objRest(_b, ["participant"]);
  const p2 = useEnsureParticipant(participant);
  const { className, infoObserver } = React91.useMemo(() => {
    return (0, import_components_core40.setupParticipantName)(p2);
  }, [p2]);
  const { identity, name } = useObservableState(infoObserver, {
    name: p2.name,
    identity: p2.identity,
    metadata: p2.metadata
  });
  const mergedProps = React91.useMemo(() => {
    return mergeProps2(props, { className, "data-lk-participant-name": name });
  }, [props, className, name]);
  return /* @__PURE__ */ React91.createElement("span", __spreadValues({ ref }, mergedProps), name !== "" ? name : identity, props.children);
});

// src/components/participant/TrackMutedIndicator.tsx
var React92 = __toESM(require("react"));
var TrackMutedIndicator = /* @__PURE__ */ React92.forwardRef(function TrackMutedIndicator2(_a2, ref) {
  var _b = _a2, { trackRef, show = "always" } = _b, props = __objRest(_b, ["trackRef", "show"]);
  var _a3;
  const { className, isMuted } = useTrackMutedIndicator(trackRef);
  const showIndicator = show === "always" || show === "muted" && isMuted || show === "unmuted" && !isMuted;
  const htmlProps = React92.useMemo(
    () => mergeProps2(props, {
      className
    }),
    [className, props]
  );
  if (!showIndicator) {
    return null;
  }
  return /* @__PURE__ */ React92.createElement("div", __spreadProps(__spreadValues({ ref }, htmlProps), { "data-lk-muted": isMuted }), (_a3 = props.children) != null ? _a3 : getSourceIcon(trackRef.source, !isMuted));
});

// src/assets/images/ParticipantPlaceholder.tsx
var React93 = __toESM(require("react"));
var SvgParticipantPlaceholder = (props) => /* @__PURE__ */ React93.createElement(
  "svg",
  __spreadValues({
    width: 320,
    height: 320,
    viewBox: "0 0 320 320",
    preserveAspectRatio: "xMidYMid meet",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ React93.createElement(
    "path",
    {
      d: "M160 180C204.182 180 240 144.183 240 100C240 55.8172 204.182 20 160 20C115.817 20 79.9997 55.8172 79.9997 100C79.9997 144.183 115.817 180 160 180Z",
      fill: "white",
      fillOpacity: 0.25
    }
  ),
  /* @__PURE__ */ React93.createElement(
    "path",
    {
      d: "M97.6542 194.614C103.267 191.818 109.841 192.481 115.519 195.141C129.025 201.466 144.1 205 159.999 205C175.899 205 190.973 201.466 204.48 195.141C210.158 192.481 216.732 191.818 222.345 194.614C262.703 214.719 291.985 253.736 298.591 300.062C300.15 310.997 291.045 320 280 320H39.9997C28.954 320 19.8495 310.997 21.4087 300.062C28.014 253.736 57.2966 214.72 97.6542 194.614Z",
      fill: "white",
      fillOpacity: 0.25
    }
  )
);
var ParticipantPlaceholder_default = SvgParticipantPlaceholder;

// src/components/participant/VideoTrack.tsx
var import_livekit_client12 = require("livekit-client");
var React95 = __toESM(require("react"));

// src/hooks/useMediaTrackBySourceOrName.ts
var import_components_core41 = require("@livekit/components-core");
var import_components_core42 = require("@livekit/components-core");
var React94 = __toESM(require("react"));
function useMediaTrackBySourceOrName(observerOptions, options = {}) {
  var _a2;
  const [publication, setPublication] = React94.useState((0, import_components_core42.getTrackByIdentifier)(observerOptions));
  const [isMuted, setMuted] = React94.useState(publication == null ? void 0 : publication.isMuted);
  const [isSubscribed, setSubscribed] = React94.useState(publication == null ? void 0 : publication.isSubscribed);
  const [track, setTrack] = React94.useState(publication == null ? void 0 : publication.track);
  const [orientation, setOrientation] = React94.useState("landscape");
  const previousElement = React94.useRef();
  const { className, trackObserver } = React94.useMemo(() => {
    return (0, import_components_core42.setupMediaTrack)(observerOptions);
  }, [
    (_a2 = observerOptions.participant.sid) != null ? _a2 : observerOptions.participant.identity,
    observerOptions.source,
    (0, import_components_core41.isTrackReference)(observerOptions) && observerOptions.publication.trackSid
  ]);
  React94.useEffect(() => {
    const subscription = trackObserver.subscribe((publication2) => {
      import_components_core42.log.debug("update track", publication2);
      setPublication(publication2);
      setMuted(publication2 == null ? void 0 : publication2.isMuted);
      setSubscribed(publication2 == null ? void 0 : publication2.isSubscribed);
      setTrack(publication2 == null ? void 0 : publication2.track);
    });
    return () => subscription == null ? void 0 : subscription.unsubscribe();
  }, [trackObserver]);
  React94.useEffect(() => {
    var _a3, _b;
    if (track) {
      if (previousElement.current) {
        track.detach(previousElement.current);
      }
      if (((_a3 = options.element) == null ? void 0 : _a3.current) && !((0, import_components_core42.isLocal)(observerOptions.participant) && (track == null ? void 0 : track.kind) === "audio")) {
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
  React94.useEffect(() => {
    var _a3, _b;
    if (typeof ((_a3 = publication == null ? void 0 : publication.dimensions) == null ? void 0 : _a3.width) === "number" && typeof ((_b = publication == null ? void 0 : publication.dimensions) == null ? void 0 : _b.height) === "number") {
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

// src/components/participant/VideoTrack.tsx
var useHooks = __toESM(require("usehooks-ts"));
var VideoTrack = /* @__PURE__ */ React95.forwardRef(
  function VideoTrack2(_a2, ref) {
    var _b = _a2, {
      onTrackClick,
      onClick,
      onSubscriptionStatusChanged,
      trackRef,
      manageSubscription
    } = _b, props = __objRest(_b, [
      "onTrackClick",
      "onClick",
      "onSubscriptionStatusChanged",
      "trackRef",
      "manageSubscription"
    ]);
    const trackReference = useEnsureTrackRef(trackRef);
    const mediaEl = React95.useRef(null);
    React95.useImperativeHandle(ref, () => mediaEl.current);
    const intersectionEntry = useHooks.useIntersectionObserver(mediaEl, {});
    const debouncedIntersectionEntry = useHooks.useDebounce(intersectionEntry, 3e3);
    React95.useEffect(() => {
      if (manageSubscription && trackReference.publication instanceof import_livekit_client12.RemoteTrackPublication && (debouncedIntersectionEntry == null ? void 0 : debouncedIntersectionEntry.isIntersecting) === false && (intersectionEntry == null ? void 0 : intersectionEntry.isIntersecting) === false) {
        trackReference.publication.setSubscribed(false);
      }
    }, [debouncedIntersectionEntry, trackReference, manageSubscription]);
    React95.useEffect(() => {
      if (manageSubscription && trackReference.publication instanceof import_livekit_client12.RemoteTrackPublication && (intersectionEntry == null ? void 0 : intersectionEntry.isIntersecting) === true) {
        trackReference.publication.setSubscribed(true);
      }
    }, [intersectionEntry, trackReference, manageSubscription]);
    const {
      elementProps,
      publication: pub,
      isSubscribed
    } = useMediaTrackBySourceOrName(trackReference, {
      element: mediaEl,
      props
    });
    React95.useEffect(() => {
      onSubscriptionStatusChanged == null ? void 0 : onSubscriptionStatusChanged(!!isSubscribed);
    }, [isSubscribed, onSubscriptionStatusChanged]);
    const clickHandler = (evt) => {
      onClick == null ? void 0 : onClick(evt);
      onTrackClick == null ? void 0 : onTrackClick({ participant: trackReference == null ? void 0 : trackReference.participant, track: pub });
    };
    return /* @__PURE__ */ React95.createElement("video", __spreadProps(__spreadValues({ ref: mediaEl }, elementProps), { muted: true, onClick: clickHandler }));
  }
);

// src/components/participant/AudioTrack.tsx
var React96 = __toESM(require("react"));
var import_components_core43 = require("@livekit/components-core");
var import_livekit_client13 = require("livekit-client");
var AudioTrack = /* @__PURE__ */ React96.forwardRef(
  function AudioTrack2(_a2, ref) {
    var _b = _a2, { trackRef, onSubscriptionStatusChanged, volume, muted } = _b, props = __objRest(_b, ["trackRef", "onSubscriptionStatusChanged", "volume", "muted"]);
    const trackReference = useEnsureTrackRef(trackRef);
    const mediaEl = React96.useRef(null);
    React96.useImperativeHandle(ref, () => mediaEl.current);
    const {
      elementProps,
      isSubscribed,
      track,
      publication: pub
    } = useMediaTrackBySourceOrName(trackReference, {
      element: mediaEl,
      props
    });
    React96.useEffect(() => {
      onSubscriptionStatusChanged == null ? void 0 : onSubscriptionStatusChanged(!!isSubscribed);
    }, [isSubscribed, onSubscriptionStatusChanged]);
    React96.useEffect(() => {
      if (track === void 0 || volume === void 0) {
        return;
      }
      if (track instanceof import_livekit_client13.RemoteAudioTrack) {
        track.setVolume(volume);
      } else {
        import_components_core43.log.warn("Volume can only be set on remote audio tracks.");
      }
    }, [volume, track]);
    React96.useEffect(() => {
      if (pub === void 0 || muted === void 0) {
        return;
      }
      if (pub instanceof import_livekit_client13.RemoteTrackPublication) {
        pub.setEnabled(!muted);
      } else {
        import_components_core43.log.warn("Can only call setEnabled on remote track publications.");
      }
    }, [muted, pub, track]);
    return /* @__PURE__ */ React96.createElement("audio", __spreadValues({ ref: mediaEl }, elementProps));
  }
);

// src/prefabs/WhiteboardTrack.tsx
var React97 = __toESM(require("react"));
function WhiteboardTrack() {
  const { url } = useWhiteboard();
  return url ? /* @__PURE__ */ React97.createElement("iframe", { src: url, width: "100%", height: "100%" }) : /* @__PURE__ */ React97.createElement(React97.Fragment, null);
}

// src/components/participant/ParticipantTile.tsx
function ParticipantContextIfNeeded(props) {
  const hasContext = !!useMaybeParticipantContext();
  return props.participant && !hasContext ? /* @__PURE__ */ React98.createElement(ParticipantContext.Provider, { value: props.participant }, props.children) : /* @__PURE__ */ React98.createElement(React98.Fragment, null, props.children);
}
function TrackRefContextIfNeeded(props) {
  const hasContext = !!useMaybeTrackRefContext();
  return props.trackRef && !hasContext ? /* @__PURE__ */ React98.createElement(TrackRefContext.Provider, { value: props.trackRef }, props.children) : /* @__PURE__ */ React98.createElement(React98.Fragment, null, props.children);
}
var ParticipantTile = /* @__PURE__ */ React98.forwardRef(function ParticipantTile2(_a2, ref) {
  var _b = _a2, {
    trackRef,
    children,
    onParticipantClick,
    disableSpeakingIndicator
  } = _b, htmlProps = __objRest(_b, [
    "trackRef",
    "children",
    "onParticipantClick",
    "disableSpeakingIndicator"
  ]);
  var _a3, _b2, _c2, _d;
  const trackReference = useEnsureTrackRef(trackRef);
  const { elementProps } = useParticipantTile({
    htmlProps,
    disableSpeakingIndicator,
    onParticipantClick,
    trackRef: trackReference
  });
  const isEncrypted = useIsEncrypted(trackReference.participant);
  const layoutContext = useMaybeLayoutContext();
  const autoManageSubscription = (_a3 = useFeatureContext()) == null ? void 0 : _a3.autoSubscription;
  const handleSubscribe = React98.useCallback(
    (subscribed) => {
      if (trackReference.source && !subscribed && layoutContext && layoutContext.pin.dispatch && (0, import_components_core44.isTrackReferencePinned)(trackReference, layoutContext.pin.state)) {
        layoutContext.pin.dispatch({ msg: "clear_pin" });
      }
    },
    [trackReference, layoutContext]
  );
  const [imageUrl, setImageUrl] = React98.useState(null);
  React98.useEffect(() => {
    if (trackReference.participant.name)
      setImageUrl(`https://ui-avatars.com/api/?name=${trackReference.participant.name}&background=111111&color=fff&size=156&rounded=true`);
  }, [trackReference]);
  return /* @__PURE__ */ React98.createElement("div", __spreadValues({ ref, style: { position: "relative" } }, elementProps), /* @__PURE__ */ React98.createElement(TrackRefContextIfNeeded, { trackRef: trackReference }, /* @__PURE__ */ React98.createElement(ParticipantContextIfNeeded, { participant: trackReference.participant }, children != null ? children : /* @__PURE__ */ React98.createElement(React98.Fragment, null, ((_b2 = trackReference.publication) == null ? void 0 : _b2.trackName) == "whiteboard" ? /* @__PURE__ */ React98.createElement(WhiteboardTrack, null) : (0, import_components_core44.isTrackReference)(trackReference) && (((_c2 = trackReference.publication) == null ? void 0 : _c2.kind) === "video" || trackReference.source === import_livekit_client14.Track.Source.Camera || trackReference.source === import_livekit_client14.Track.Source.ScreenShare) ? /* @__PURE__ */ React98.createElement(
    VideoTrack,
    {
      trackRef: trackReference,
      onSubscriptionStatusChanged: handleSubscribe,
      manageSubscription: autoManageSubscription
    }
  ) : (0, import_components_core44.isTrackReference)(trackReference) && /* @__PURE__ */ React98.createElement(
    AudioTrack,
    {
      trackRef: trackReference,
      onSubscriptionStatusChanged: handleSubscribe
    }
  ), /* @__PURE__ */ React98.createElement("div", { className: "lk-participant-placeholder" }, imageUrl ? /* @__PURE__ */ React98.createElement("img", { src: imageUrl, alt: "" }) : /* @__PURE__ */ React98.createElement(ParticipantPlaceholder_default, null)), /* @__PURE__ */ React98.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React98.createElement("div", { className: "lk-participant-metadata-item" }, trackReference.source === import_livekit_client14.Track.Source.Camera ? /* @__PURE__ */ React98.createElement(React98.Fragment, null, isEncrypted && /* @__PURE__ */ React98.createElement(LockLockedIcon_default, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ React98.createElement(
    TrackMutedIndicator,
    {
      trackRef: {
        participant: trackReference.participant,
        source: import_livekit_client14.Track.Source.Microphone
      },
      show: "muted"
    }
  ), /* @__PURE__ */ React98.createElement(ParticipantName, null)) : /* @__PURE__ */ React98.createElement(React98.Fragment, null, /* @__PURE__ */ React98.createElement(ScreenShareIcon_default, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ React98.createElement(ParticipantName, null, "'s screen"))), /* @__PURE__ */ React98.createElement(ConnectionQualityIndicator, { className: "lk-participant-metadata-item" }))), ((_d = trackReference.publication) == null ? void 0 : _d.trackName) !== "whiteboard" ? /* @__PURE__ */ React98.createElement(FocusToggle, { trackRef: trackReference }) : /* @__PURE__ */ React98.createElement(React98.Fragment, null))));
});

// src/components/layout/FocusLayout.tsx
function FocusLayoutContainer(props) {
  const elementProps = mergeProps2(props, { className: "lk-focus-layout" });
  return /* @__PURE__ */ React99.createElement("div", __spreadValues({}, elementProps), props.children);
}
function FocusLayout(_a2) {
  var _b = _a2, { trackRef } = _b, htmlProps = __objRest(_b, ["trackRef"]);
  return /* @__PURE__ */ React99.createElement(ParticipantTile, __spreadValues({ trackRef }, htmlProps));
}

// src/components/layout/GridLayout.tsx
var React103 = __toESM(require("react"));

// src/components/TrackLoop.tsx
var React100 = __toESM(require("react"));
var import_components_core45 = require("@livekit/components-core");
function TrackLoop(_a2) {
  var _b = _a2, { tracks } = _b, props = __objRest(_b, ["tracks"]);
  return /* @__PURE__ */ React100.createElement(React100.Fragment, null, tracks.map((trackReference) => {
    return /* @__PURE__ */ React100.createElement(
      TrackRefContext.Provider,
      {
        value: trackReference,
        key: (0, import_components_core45.getTrackReferenceId)(trackReference)
      },
      cloneSingleChild(props.children)
    );
  }));
}

// src/components/controls/PaginationControl.tsx
var React101 = __toESM(require("react"));
var import_components_core46 = require("@livekit/components-core");
function PaginationControl({
  totalPageCount,
  nextPage,
  prevPage,
  currentPage,
  pagesContainer: connectedElement
}) {
  const [interactive, setInteractive] = React101.useState(false);
  React101.useEffect(() => {
    let subscription;
    if (connectedElement) {
      subscription = (0, import_components_core46.createInteractingObservable)(connectedElement.current, 2e3).subscribe(
        setInteractive
      );
    }
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [connectedElement]);
  return /* @__PURE__ */ React101.createElement("div", { className: "lk-pagination-control", "data-lk-user-interaction": interactive }, /* @__PURE__ */ React101.createElement("button", { className: "lk-button", onClick: prevPage }, /* @__PURE__ */ React101.createElement(Chevron_default, null)), /* @__PURE__ */ React101.createElement("span", { className: "lk-pagination-count" }, `${currentPage} of ${totalPageCount}`), /* @__PURE__ */ React101.createElement("button", { className: "lk-button", onClick: nextPage }, /* @__PURE__ */ React101.createElement(Chevron_default, null)));
}

// src/components/controls/PaginationIndicator.tsx
var React102 = __toESM(require("react"));
var PaginationIndicator = /* @__PURE__ */ React102.forwardRef(function PaginationIndicator2({ totalPageCount, currentPage }, ref) {
  const bubbles = new Array(totalPageCount).fill("").map((_2, index) => {
    if (index + 1 === currentPage) {
      return /* @__PURE__ */ React102.createElement("span", { "data-lk-active": true, key: index });
    } else {
      return /* @__PURE__ */ React102.createElement("span", { key: index });
    }
  });
  return /* @__PURE__ */ React102.createElement("div", { ref, className: "lk-pagination-indicator" }, bubbles);
});

// src/components/layout/GridLayout.tsx
function GridLayout(_a2) {
  var _b = _a2, { tracks } = _b, props = __objRest(_b, ["tracks"]);
  const gridEl = React103.createRef();
  const elementProps = React103.useMemo(
    () => mergeProps2(props, { className: "lk-grid-layout" }),
    [props]
  );
  const { layout } = useGridLayout(gridEl, tracks.length);
  const pagination = usePagination(layout.maxTiles, tracks);
  useSwipe(gridEl, {
    onLeftSwipe: pagination.nextPage,
    onRightSwipe: pagination.prevPage
  });
  return /* @__PURE__ */ React103.createElement("div", __spreadValues({ ref: gridEl, "data-lk-pagination": pagination.totalPageCount > 1 }, elementProps), /* @__PURE__ */ React103.createElement(TrackLoop, { tracks: pagination.tracks }, props.children), tracks.length > layout.maxTiles && /* @__PURE__ */ React103.createElement(React103.Fragment, null, /* @__PURE__ */ React103.createElement(
    PaginationIndicator,
    {
      totalPageCount: pagination.totalPageCount,
      currentPage: pagination.currentPage
    }
  ), /* @__PURE__ */ React103.createElement(PaginationControl, __spreadValues({ pagesContainer: gridEl }, pagination))));
}

// src/components/layout/CarouselLayout.tsx
var import_components_core47 = require("@livekit/components-core");
var React104 = __toESM(require("react"));
var MIN_HEIGHT = 130;
var MIN_WIDTH = 140;
var MIN_VISIBLE_TILES = 1;
var ASPECT_RATIO = 16 / 10;
var ASPECT_RATIO_INVERT = (1 - ASPECT_RATIO) * -1;
function CarouselLayout(_a2) {
  var _b = _a2, { tracks, orientation } = _b, props = __objRest(_b, ["tracks", "orientation"]);
  const asideEl = React104.useRef(null);
  const [prevTiles, setPrevTiles] = React104.useState(0);
  const { width, height } = useSize(asideEl);
  const carouselOrientation = orientation ? orientation : height >= width ? "vertical" : "horizontal";
  const tileSpan = carouselOrientation === "vertical" ? Math.max(width * ASPECT_RATIO_INVERT, MIN_HEIGHT) : Math.max(height * ASPECT_RATIO, MIN_WIDTH);
  const scrollBarWidth = (0, import_components_core47.getScrollBarWidth)();
  const tilesThatFit = carouselOrientation === "vertical" ? Math.max((height - scrollBarWidth) / tileSpan, MIN_VISIBLE_TILES) : Math.max((width - scrollBarWidth) / tileSpan, MIN_VISIBLE_TILES);
  let maxVisibleTiles = Math.round(tilesThatFit);
  if (Math.abs(tilesThatFit - prevTiles) < 0.5) {
    maxVisibleTiles = Math.round(prevTiles);
  } else if (prevTiles !== tilesThatFit) {
    setPrevTiles(tilesThatFit);
  }
  const sortedTiles = useVisualStableUpdate(tracks, maxVisibleTiles);
  React104.useLayoutEffect(() => {
    if (asideEl.current) {
      asideEl.current.dataset.lkOrientation = carouselOrientation;
      asideEl.current.style.setProperty("--lk-max-visible-tiles", maxVisibleTiles.toString());
    }
  }, [maxVisibleTiles, carouselOrientation]);
  return /* @__PURE__ */ React104.createElement("aside", __spreadValues({ key: carouselOrientation, className: "lk-carousel", ref: asideEl }, props), /* @__PURE__ */ React104.createElement(TrackLoop, { tracks: sortedTiles }, props.children));
}

// src/components/layout/LayoutContextProvider.tsx
var import_components_core48 = require("@livekit/components-core");
var React105 = __toESM(require("react"));
function LayoutContextProvider({
  value,
  onPinChange,
  onWidgetChange,
  onWhiteboardChange,
  children
}) {
  const layoutContextValue = useEnsureCreateLayoutContext(value);
  React105.useEffect(() => {
    import_components_core48.log.debug("PinState Updated", { state: layoutContextValue.pin.state });
    if (onPinChange && layoutContextValue.pin.state) onPinChange(layoutContextValue.pin.state);
  }, [layoutContextValue.pin.state, onPinChange]);
  React105.useEffect(() => {
    import_components_core48.log.debug("Chat Widget Updated", { widgetState: layoutContextValue.widget.state });
    if (onWidgetChange && layoutContextValue.widget.state) {
      onWidgetChange(layoutContextValue.widget.state);
    }
  }, [onWidgetChange, layoutContextValue.widget.state]);
  React105.useEffect(() => {
    import_components_core48.log.debug("Whiteboard Updated", { state: layoutContextValue.whiteboard.state });
    if (onWhiteboardChange && layoutContextValue.whiteboard.state) {
      onWhiteboardChange(layoutContextValue.whiteboard.state);
    }
  }, [layoutContextValue.whiteboard.state]);
  return /* @__PURE__ */ React105.createElement(LayoutContext.Provider, { value: layoutContextValue }, children);
}

// src/components/LiveKitRoom.tsx
var React106 = __toESM(require("react"));
var LiveKitRoom = /* @__PURE__ */ React106.forwardRef(function LiveKitRoom2(props, ref) {
  const { room, htmlProps } = useLiveKitRoom(props);
  return /* @__PURE__ */ React106.createElement("div", __spreadValues({ ref }, htmlProps), room && /* @__PURE__ */ React106.createElement(RoomContext.Provider, { value: room }, /* @__PURE__ */ React106.createElement(LKFeatureContext.Provider, { value: props.featureFlags }, props.children)));
});

// src/components/participant/AudioVisualizer.tsx
var React107 = __toESM(require("react"));
var AudioVisualizer = /* @__PURE__ */ React107.forwardRef(function AudioVisualizer2(_a2, ref) {
  var _b = _a2, { trackRef } = _b, props = __objRest(_b, ["trackRef"]);
  const svgWidth = 200;
  const svgHeight = 90;
  const barWidth = 6;
  const barSpacing = 4;
  const volMultiplier = 50;
  const barCount = 7;
  const trackReference = useEnsureTrackRef(trackRef);
  const volumes = useMultibandTrackVolume(trackReference, { bands: 7, loPass: 300 });
  return /* @__PURE__ */ React107.createElement(
    "svg",
    __spreadProps(__spreadValues({
      ref,
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${svgWidth} ${svgHeight}`
    }, props), {
      className: "lk-audio-visualizer"
    }),
    /* @__PURE__ */ React107.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%" }),
    /* @__PURE__ */ React107.createElement(
      "g",
      {
        style: {
          transform: `translate(${(svgWidth - barCount * (barWidth + barSpacing)) / 2}px, 0)`
        }
      },
      volumes.map((vol, idx) => /* @__PURE__ */ React107.createElement(
        "rect",
        {
          key: idx,
          x: idx * (barWidth + barSpacing),
          y: svgHeight / 2 - vol * volMultiplier / 2,
          width: barWidth,
          height: vol * volMultiplier
        }
      ))
    )
  );
});

// src/components/ParticipantLoop.tsx
var React108 = __toESM(require("react"));
function ParticipantLoop(_a2) {
  var _b = _a2, { participants } = _b, props = __objRest(_b, ["participants"]);
  return /* @__PURE__ */ React108.createElement(React108.Fragment, null, participants.map((participant) => /* @__PURE__ */ React108.createElement(ParticipantContext.Provider, { value: participant, key: participant.identity }, cloneSingleChild(props.children))));
}

// src/components/RoomAudioRenderer.tsx
var import_components_core49 = require("@livekit/components-core");
var import_livekit_client15 = require("livekit-client");
var React109 = __toESM(require("react"));
function RoomAudioRenderer({ volume, muted }) {
  const tracks = useTracks(
    [import_livekit_client15.Track.Source.Microphone, import_livekit_client15.Track.Source.ScreenShareAudio, import_livekit_client15.Track.Source.Unknown],
    {
      updateOnlyOn: [],
      onlySubscribed: true
    }
  ).filter((ref) => !(0, import_components_core49.isLocal)(ref.participant) && ref.publication.kind === import_livekit_client15.Track.Kind.Audio);
  return /* @__PURE__ */ React109.createElement("div", { style: { display: "none" } }, tracks.map((trackRef) => /* @__PURE__ */ React109.createElement(
    AudioTrack,
    {
      key: (0, import_components_core49.getTrackReferenceId)(trackRef),
      trackRef,
      volume,
      muted
    }
  )));
}

// src/components/RoomName.tsx
var React110 = __toESM(require("react"));
var RoomName = /* @__PURE__ */ React110.forwardRef(
  function RoomName2(_a2, ref) {
    var _b = _a2, { childrenPosition = "before", children } = _b, htmlAttributes = __objRest(_b, ["childrenPosition", "children"]);
    const { name } = useRoomInfo();
    return /* @__PURE__ */ React110.createElement("span", __spreadValues({ ref }, htmlAttributes), childrenPosition === "before" && children, name, childrenPosition === "after" && children);
  }
);

// src/components/Toast.tsx
var React111 = __toESM(require("react"));
function Toast(props) {
  const htmlProps = React111.useMemo(() => mergeProps2(props, { className: "lk-toast" }), [props]);
  return /* @__PURE__ */ React111.createElement("div", __spreadValues({}, htmlProps), props.children);
}

// src/components/participant/ParticipantAudioTile.tsx
var React112 = __toESM(require("react"));
var import_components_core50 = require("@livekit/components-core");
var ParticipantAudioTile = /* @__PURE__ */ React112.forwardRef(function ParticipantAudioTile2(_a2, ref) {
  var _b = _a2, {
    children,
    disableSpeakingIndicator,
    onParticipantClick,
    trackRef
  } = _b, htmlProps = __objRest(_b, [
    "children",
    "disableSpeakingIndicator",
    "onParticipantClick",
    "trackRef"
  ]);
  const trackReference = useEnsureTrackRef(trackRef);
  const { elementProps } = useParticipantTile({
    trackRef: trackReference,
    htmlProps,
    disableSpeakingIndicator,
    onParticipantClick
  });
  return /* @__PURE__ */ React112.createElement("div", __spreadValues({ ref, style: { position: "relative" } }, elementProps), /* @__PURE__ */ React112.createElement(TrackRefContext.Provider, { value: trackReference }, children != null ? children : /* @__PURE__ */ React112.createElement(React112.Fragment, null, (0, import_components_core50.isTrackReference)(trackReference) && /* @__PURE__ */ React112.createElement(AudioTrack, { trackRef: trackReference }), /* @__PURE__ */ React112.createElement(AudioVisualizer, null), /* @__PURE__ */ React112.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React112.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ React112.createElement(TrackMutedIndicator, { trackRef: trackReference }), /* @__PURE__ */ React112.createElement(ParticipantName, null)), /* @__PURE__ */ React112.createElement(ConnectionQualityIndicator, { className: "lk-participant-metadata-item" })))));
});

// src/components/ConnectionStateToast.tsx
var import_livekit_client16 = require("livekit-client");
var React113 = __toESM(require("react"));
function ConnectionStateToast(props) {
  const [notification, setNotification] = React113.useState(void 0);
  const state = useConnectionState(props.room);
  React113.useEffect(() => {
    switch (state) {
      case import_livekit_client16.ConnectionState.Reconnecting:
        setNotification(
          /* @__PURE__ */ React113.createElement(React113.Fragment, null, /* @__PURE__ */ React113.createElement(SpinnerIcon_default, { className: "lk-spinner" }), " Reconnecting")
        );
        break;
      case import_livekit_client16.ConnectionState.Connecting:
        setNotification(
          /* @__PURE__ */ React113.createElement(React113.Fragment, null, /* @__PURE__ */ React113.createElement(SpinnerIcon_default, { className: "lk-spinner" }), " Connecting")
        );
        break;
      case import_livekit_client16.ConnectionState.Disconnected:
        setNotification(/* @__PURE__ */ React113.createElement(React113.Fragment, null, "Disconnected"));
        break;
      default:
        setNotification(void 0);
        break;
    }
  }, [state]);
  return notification ? /* @__PURE__ */ React113.createElement(Toast, { className: "lk-toast-connection-state" }, notification) : /* @__PURE__ */ React113.createElement(React113.Fragment, null);
}

// src/components/ChatEntry.tsx
var import_components_core51 = require("@livekit/components-core");
var React114 = __toESM(require("react"));
var ChatEntry = /* @__PURE__ */ React114.forwardRef(
  function ChatEntry2(_a2, ref) {
    var _b = _a2, { entry, hideName = false, hideTimestamp = false, messageFormatter } = _b, props = __objRest(_b, ["entry", "hideName", "hideTimestamp", "messageFormatter"]);
    var _a3, _b2, _c2, _d;
    const formattedMessage = React114.useMemo(() => {
      return messageFormatter ? messageFormatter(entry.message) : entry.message;
    }, [entry.message, messageFormatter]);
    const hasBeenEdited = !!entry.editTimestamp;
    const time = new Date(entry.timestamp);
    const locale = navigator ? navigator.language : "en-US";
    return /* @__PURE__ */ React114.createElement(
      "li",
      __spreadValues({
        ref,
        className: "lk-chat-entry",
        title: time.toLocaleTimeString(locale, { timeStyle: "full" }),
        "data-lk-message-origin": ((_a3 = entry.from) == null ? void 0 : _a3.isLocal) ? "local" : "remote"
      }, props),
      (!hideTimestamp || !hideName || hasBeenEdited) && /* @__PURE__ */ React114.createElement("span", { className: "lk-meta-data" }, !hideName && /* @__PURE__ */ React114.createElement("strong", { className: "lk-participant-name" }, (_d = (_b2 = entry.from) == null ? void 0 : _b2.name) != null ? _d : (_c2 = entry.from) == null ? void 0 : _c2.identity), (!hideTimestamp || hasBeenEdited) && /* @__PURE__ */ React114.createElement("span", { className: "lk-timestamp" }, hasBeenEdited && "edited ", time.toLocaleTimeString(locale, { timeStyle: "short" }))),
      /* @__PURE__ */ React114.createElement("span", { className: "lk-message-body" }, formattedMessage)
    );
  }
);
function nl2br(str, is_xhtml) {
  if (typeof str === "undefined" || str === null) {
    return "";
  }
  var breakTag = is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";
  return (str + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + breakTag + "$2");
}
function formatChatMessageLinks(message) {
  return (0, import_components_core51.tokenize)(message, (0, import_components_core51.createDefaultGrammar)()).map((tok, i2) => {
    if (typeof tok === `string`) {
      const html = nl2br(tok, false);
      return /* @__PURE__ */ React114.createElement("span", { key: i2, dangerouslySetInnerHTML: { __html: html } });
    } else {
      const content = tok.content.toString();
      const href = tok.type === `url` ? /^http(s?):\/\//.test(content) ? content : `https://${content}` : `mailto:${content}`;
      return /* @__PURE__ */ React114.createElement("a", { className: "lk-chat-link", key: i2, href, target: "_blank", rel: "noreferrer" }, content);
    }
  });
}

// src/prefabs/Chat.tsx
var React116 = __toESM(require("react"));

// src/prefabs/UserChat.tsx
var React115 = __toESM(require("react"));
function UserChat(_a2) {
  var _b = _a2, {
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
  var _a3, _b2, _c2, _d, _e2;
  const formattedMessage = React115.useMemo(() => {
    return messageFormatter ? messageFormatter(entry.message) : entry.message;
  }, [entry.message, messageFormatter]);
  const time = new Date(entry.timestamp);
  const locale = navigator ? navigator.language : "en-US";
  return /* @__PURE__ */ React115.createElement(
    "li",
    __spreadValues({
      className: "tl-chat-entry",
      title: time.toLocaleTimeString(locale, { timeStyle: "full" }),
      "data-lk-message-origin": ((_a3 = entry.from) == null ? void 0 : _a3.isLocal) ? "local" : "remote"
    }, props),
    /* @__PURE__ */ React115.createElement("div", { className: "chat_box" }, !((_b2 = entry.from) == null ? void 0 : _b2.isLocal) ? /* @__PURE__ */ React115.createElement("span", { className: "lk-meta-data" }, /* @__PURE__ */ React115.createElement("strong", { className: "lk-participant-name tl-participant-name" }, (_e2 = (_c2 = entry.from) == null ? void 0 : _c2.name) != null ? _e2 : (_d = entry.from) == null ? void 0 : _d.identity)) : /* @__PURE__ */ React115.createElement(React115.Fragment, null), /* @__PURE__ */ React115.createElement("span", { className: "lk-message-body" }, formattedMessage))
  );
}

// src/prefabs/Chat.tsx
function Chat(_a2) {
  var _b = _a2, { messageFormatter, messageDecoder, messageEncoder, channelTopic } = _b, props = __objRest(_b, ["messageFormatter", "messageDecoder", "messageEncoder", "channelTopic"]);
  const inputRef = React116.useRef(null);
  const chatForm = React116.useRef(null);
  const ulRef = React116.useRef(null);
  const chatOptions = React116.useMemo(() => {
    return { messageDecoder, messageEncoder, channelTopic };
  }, [messageDecoder, messageEncoder, channelTopic]);
  const { send, chatMessages, isSending } = useChat(chatOptions);
  const layoutContext = useMaybeLayoutContext();
  const lastReadMsgAt = React116.useRef(0);
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
  function onEnterPress(e2) {
    return __async(this, null, function* () {
      if (e2.code == "Enter" && e2.shiftKey == false) {
        e2.stopPropagation();
        yield handleSubmit(e2);
      }
    });
  }
  React116.useEffect(() => {
    var _a3;
    if (ulRef) {
      (_a3 = ulRef.current) == null ? void 0 : _a3.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef, chatMessages]);
  React116.useEffect(() => {
    var _a3, _b2, _c2;
    if (!layoutContext || chatMessages.length === 0) {
      return;
    }
    if (((_a3 = layoutContext.widget.state) == null ? void 0 : _a3.showChat) == "show_chat" && chatMessages.length > 0 && // lastReadMsgAt.current !== chatMessages[chatMessages.length - 1]?.timestamp
    lastReadMsgAt.current < chatMessages.length) {
      lastReadMsgAt.current = chatMessages.length;
      return;
    }
    const unreadMessageCount = chatMessages.length - lastReadMsgAt.current;
    const { widget } = layoutContext;
    if (unreadMessageCount > 0 && ((_b2 = widget.state) == null ? void 0 : _b2.unreadMessages) !== unreadMessageCount) {
      (_c2 = widget.dispatch) == null ? void 0 : _c2.call(widget, { msg: "unread_msg", count: unreadMessageCount });
    }
  }, [chatMessages, layoutContext == null ? void 0 : layoutContext.widget]);
  return /* @__PURE__ */ React116.createElement("div", __spreadProps(__spreadValues({}, props), { className: "lk-chat tl-chat" }), /* @__PURE__ */ React116.createElement("ul", { className: "tl-list lk-chat-messages", ref: ulRef }, props.children ? chatMessages.map(
    (msg, idx) => cloneSingleChild(props.children, {
      entry: msg,
      key: idx,
      messageFormatter
    })
  ) : chatMessages.map((msg, idx, allMsg) => {
    const hideName = idx >= 1 && allMsg[idx - 1].from === msg.from;
    const hideTimestamp = idx >= 1 && msg.timestamp - allMsg[idx - 1].timestamp < 6e4;
    return /* @__PURE__ */ React116.createElement(
      UserChat,
      {
        key: idx,
        hideName,
        hideTimestamp: hideName === false ? false : hideTimestamp,
        entry: msg,
        messageFormatter
      }
    );
  })), /* @__PURE__ */ React116.createElement("form", { className: "lk-chat-form", ref: chatForm, onSubmit: handleSubmit }, /* @__PURE__ */ React116.createElement(
    "textarea",
    {
      className: "lk-form-control lk-chat-form-input overflow-hidden",
      ref: inputRef,
      onKeyDown: onEnterPress,
      rows: 1,
      placeholder: "Enter a message...",
      onInput: (ev) => ev.stopPropagation(),
      onKeyUp: (ev) => ev.stopPropagation()
    }
  ), /* @__PURE__ */ React116.createElement("button", { type: "submit", className: "lk-button lk-chat-form-button tl-submit", disabled: isSending }, /* @__PURE__ */ React116.createElement(SendMessage_default, null))));
}

// src/prefabs/PreJoin.tsx
var import_livekit_client17 = require("livekit-client");
var React119 = __toESM(require("react"));

// src/prefabs/MediaDeviceMenu.tsx
var import_components_core52 = require("@livekit/components-core");
var React117 = __toESM(require("react"));
var import_components_core53 = require("@livekit/components-core");
function MediaDeviceMenu(_a2) {
  var _b = _a2, {
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
  const [isOpen, setIsOpen] = React117.useState(false);
  const [devices, setDevices] = React117.useState([]);
  const [updateRequired, setUpdateRequired] = React117.useState(true);
  const [needPermissions, setNeedPermissions] = React117.useState(requestPermissions);
  const handleActiveDeviceChange = (kind2, deviceId) => {
    import_components_core53.log.debug("handle device change");
    setIsOpen(false);
    onActiveDeviceChange == null ? void 0 : onActiveDeviceChange(kind2, deviceId);
  };
  const button = React117.useRef(null);
  const tooltip = React117.useRef(null);
  React117.useLayoutEffect(() => {
    if (isOpen) {
      setNeedPermissions(true);
    }
  }, [isOpen]);
  React117.useLayoutEffect(() => {
    if (button.current && tooltip.current && (devices || updateRequired)) {
      (0, import_components_core52.computeMenuPosition)(button.current, tooltip.current).then(({ x: x2, y: y2 }) => {
        if (tooltip.current) {
          Object.assign(tooltip.current.style, { left: `${x2}px`, top: `${y2}px` });
        }
      });
    }
    setUpdateRequired(false);
  }, [button, tooltip, devices, updateRequired]);
  const handleClickOutside = React117.useCallback(
    (event) => {
      if (!tooltip.current) {
        return;
      }
      if (event.target === button.current) {
        return;
      }
      if (isOpen && (0, import_components_core52.wasClickOutside)(tooltip.current, event)) {
        setIsOpen(false);
      }
    },
    [isOpen, tooltip, button]
  );
  React117.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", () => setUpdateRequired(true));
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", () => setUpdateRequired(true));
    };
  }, [handleClickOutside, setUpdateRequired]);
  return /* @__PURE__ */ React117.createElement(React117.Fragment, null, /* @__PURE__ */ React117.createElement(
    "button",
    __spreadProps(__spreadValues({
      className: "lk-button lk-button-menu",
      "aria-pressed": isOpen
    }, props), {
      onClick: () => setIsOpen(!isOpen),
      ref: button
    }),
    props.children
  ), !props.disabled && /* @__PURE__ */ React117.createElement(
    "div",
    {
      className: "lk-device-menu",
      ref: tooltip,
      style: { visibility: isOpen ? "visible" : "hidden" }
    },
    kind ? /* @__PURE__ */ React117.createElement(React117.Fragment, null, kind === "audioinput" && /* @__PURE__ */ React117.createElement("span", { className: "tl-device-action-type" }, "INPUT"), /* @__PURE__ */ React117.createElement(
      MediaDeviceSelect,
      {
        initialSelection,
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange(kind, deviceId),
        onDeviceListChange: setDevices,
        kind,
        track: tracks == null ? void 0 : tracks[kind],
        requestPermissions: needPermissions
      }
    ), kind === "audioinput" && /* @__PURE__ */ React117.createElement(React117.Fragment, null, /* @__PURE__ */ React117.createElement("span", { className: "tl-device-action-type" }, "OUTPUT"), /* @__PURE__ */ React117.createElement(
      MediaDeviceSelect,
      {
        initialSelection,
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange("audiooutput", deviceId),
        onDeviceListChange: setDevices,
        kind: "audiooutput",
        track: tracks == null ? void 0 : tracks["audiooutput"],
        requestPermissions: needPermissions
      }
    ))) : /* @__PURE__ */ React117.createElement(React117.Fragment, null, /* @__PURE__ */ React117.createElement("div", { className: "lk-device-menu-heading" }, "Audio inputs"), /* @__PURE__ */ React117.createElement(
      MediaDeviceSelect,
      {
        kind: "audioinput",
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange("audioinput", deviceId),
        onDeviceListChange: setDevices,
        track: tracks == null ? void 0 : tracks.audioinput,
        requestPermissions: needPermissions
      }
    ), /* @__PURE__ */ React117.createElement("div", { className: "lk-device-menu-heading" }, "Video inputs"), /* @__PURE__ */ React117.createElement(
      MediaDeviceSelect,
      {
        kind: "videoinput",
        onActiveDeviceChange: (deviceId) => handleActiveDeviceChange("videoinput", deviceId),
        onDeviceListChange: setDevices,
        track: tracks == null ? void 0 : tracks.videoinput,
        requestPermissions: needPermissions
      }
    ))
  ));
}

// src/prefabs/PreJoin.tsx
var import_components_core54 = require("@livekit/components-core");

// src/hooks/useWarnAboutMissingStyles.ts
var React118 = __toESM(require("react"));
function useWarnAboutMissingStyles() {
  React118.useEffect(() => {
    warnAboutMissingStyles();
  }, []);
}

// src/prefabs/PreJoin.tsx
var defaultUserChoices = {
  videoEnabled: true,
  audioEnabled: true,
  videoDeviceId: "",
  audioDeviceId: "",
  username: ""
};
function usePreviewTracks(options, onError) {
  const [tracks, setTracks] = React119.useState();
  const trackLock = React119.useMemo(() => new import_livekit_client17.Mutex(), []);
  React119.useEffect(() => {
    let needsCleanup = false;
    let localTracks = [];
    trackLock.lock().then((unlock) => __async(this, null, function* () {
      try {
        if (options.audio || options.video) {
          localTracks = yield (0, import_livekit_client17.createLocalTracks)(options);
          if (needsCleanup) {
            localTracks.forEach((tr2) => tr2.stop());
          } else {
            setTracks(localTracks);
          }
        }
      } catch (e2) {
        if (onError && e2 instanceof Error) {
          onError(e2);
        } else {
          import_components_core54.log.error(e2);
        }
      } finally {
        unlock();
      }
    }));
    return () => {
      needsCleanup = true;
      localTracks.forEach((track) => {
        track.stop();
      });
    };
  }, [JSON.stringify(options), onError, trackLock]);
  return tracks;
}
function usePreviewDevice(enabled, deviceId, kind) {
  const [deviceError, setDeviceError] = React119.useState(null);
  const [isCreatingTrack, setIsCreatingTrack] = React119.useState(false);
  const devices = useMediaDevices({ kind });
  const [selectedDevice, setSelectedDevice] = React119.useState(
    void 0
  );
  const [localTrack, setLocalTrack] = React119.useState();
  const [localDeviceId, setLocalDeviceId] = React119.useState(deviceId);
  React119.useEffect(() => {
    setLocalDeviceId(deviceId);
  }, [deviceId]);
  const createTrack = (deviceId2, kind2) => __async(this, null, function* () {
    try {
      const track = kind2 === "videoinput" ? yield (0, import_livekit_client17.createLocalVideoTrack)({
        deviceId: deviceId2,
        resolution: import_livekit_client17.VideoPresets.h720.resolution
      }) : yield (0, import_livekit_client17.createLocalAudioTrack)({ deviceId: deviceId2 });
      const newDeviceId = yield track.getDeviceId();
      if (newDeviceId && deviceId2 !== newDeviceId) {
        prevDeviceId.current = newDeviceId;
        setLocalDeviceId(newDeviceId);
      }
      setLocalTrack(track);
    } catch (e2) {
      if (e2 instanceof Error) {
        setDeviceError(e2);
      }
    }
  });
  const switchDevice = (track, id) => __async(this, null, function* () {
    yield track.setDeviceId(id);
    prevDeviceId.current = id;
  });
  const prevDeviceId = React119.useRef(localDeviceId);
  React119.useEffect(() => {
    if (enabled && !localTrack && !deviceError && !isCreatingTrack) {
      import_components_core54.log.debug("creating track", kind);
      setIsCreatingTrack(true);
      createTrack(localDeviceId, kind).finally(() => {
        setIsCreatingTrack(false);
      });
    }
  }, [enabled, localTrack, deviceError, isCreatingTrack]);
  React119.useEffect(() => {
    if (!localTrack) {
      return;
    }
    if (!enabled) {
      import_components_core54.log.debug(`muting ${kind} track`);
      localTrack.mute().then(() => import_components_core54.log.debug(localTrack.mediaStreamTrack));
    } else if ((selectedDevice == null ? void 0 : selectedDevice.deviceId) && prevDeviceId.current !== (selectedDevice == null ? void 0 : selectedDevice.deviceId)) {
      import_components_core54.log.debug(`switching ${kind} device from`, prevDeviceId.current, selectedDevice.deviceId);
      switchDevice(localTrack, selectedDevice.deviceId);
    } else {
      import_components_core54.log.debug(`unmuting local ${kind} track`);
      localTrack.unmute();
    }
  }, [localTrack, selectedDevice, enabled, kind]);
  React119.useEffect(() => {
    return () => {
      if (localTrack) {
        import_components_core54.log.debug(`stopping local ${kind} track`);
        localTrack.stop();
        localTrack.mute();
      }
    };
  }, []);
  React119.useEffect(() => {
    setSelectedDevice(devices == null ? void 0 : devices.find((dev) => dev.deviceId === localDeviceId));
  }, [localDeviceId, devices]);
  return {
    selectedDevice,
    localTrack,
    deviceError
  };
}
function PreJoin(_a2) {
  var _b = _a2, {
    defaults = {},
    onValidate,
    onSubmit,
    onError,
    debug,
    joinLabel = "Join Room",
    micLabel = "Microphone",
    camLabel = "Camera",
    userLabel = "Username",
    persistUserChoices = true
  } = _b, htmlProps = __objRest(_b, [
    "defaults",
    "onValidate",
    "onSubmit",
    "onError",
    "debug",
    "joinLabel",
    "micLabel",
    "camLabel",
    "userLabel",
    "persistUserChoices"
  ]);
  const [userChoices, setUserChoices] = React119.useState(defaultUserChoices);
  const partialDefaults = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, defaults.audioDeviceId !== void 0 && { audioDeviceId: defaults.audioDeviceId }), defaults.videoDeviceId !== void 0 && { videoDeviceId: defaults.videoDeviceId }), defaults.audioEnabled !== void 0 && { audioEnabled: defaults.audioEnabled }), defaults.videoEnabled !== void 0 && { videoEnabled: defaults.videoEnabled }), defaults.username !== void 0 && { username: defaults.username });
  const {
    userChoices: initialUserChoices,
    saveAudioInputDeviceId,
    saveAudioInputEnabled,
    saveVideoInputDeviceId,
    saveVideoInputEnabled,
    saveUsername
  } = usePersistentUserChoices({
    defaults: partialDefaults,
    preventSave: !persistUserChoices,
    preventLoad: !persistUserChoices
  });
  const [audioEnabled, setAudioEnabled] = React119.useState(initialUserChoices.audioEnabled);
  const [videoEnabled, setVideoEnabled] = React119.useState(initialUserChoices.videoEnabled);
  const [audioDeviceId, setAudioDeviceId] = React119.useState(
    initialUserChoices.audioDeviceId
  );
  const [videoDeviceId, setVideoDeviceId] = React119.useState(
    initialUserChoices.videoDeviceId
  );
  const [username, setUsername] = React119.useState(initialUserChoices.username);
  React119.useEffect(() => {
    saveAudioInputEnabled(audioEnabled);
  }, [audioEnabled, saveAudioInputEnabled]);
  React119.useEffect(() => {
    saveVideoInputEnabled(videoEnabled);
  }, [videoEnabled, saveVideoInputEnabled]);
  React119.useEffect(() => {
    saveAudioInputDeviceId(audioDeviceId);
  }, [audioDeviceId, saveAudioInputDeviceId]);
  React119.useEffect(() => {
    saveVideoInputDeviceId(videoDeviceId);
  }, [videoDeviceId, saveVideoInputDeviceId]);
  React119.useEffect(() => {
    saveUsername(username);
  }, [username, saveUsername]);
  const tracks = usePreviewTracks(
    {
      audio: audioEnabled ? { deviceId: initialUserChoices.audioDeviceId } : false,
      video: videoEnabled ? { deviceId: initialUserChoices.videoDeviceId } : false
    },
    onError
  );
  const videoEl = React119.useRef(null);
  const videoTrack = React119.useMemo(
    () => tracks == null ? void 0 : tracks.filter((track) => track.kind === import_livekit_client17.Track.Kind.Video)[0],
    [tracks]
  );
  const facingMode = React119.useMemo(() => {
    if (videoTrack) {
      const { facingMode: facingMode2 } = (0, import_livekit_client17.facingModeFromLocalTrack)(videoTrack);
      return facingMode2;
    } else {
      return "undefined";
    }
  }, [videoTrack]);
  const audioTrack = React119.useMemo(
    () => tracks == null ? void 0 : tracks.filter((track) => track.kind === import_livekit_client17.Track.Kind.Audio)[0],
    [tracks]
  );
  React119.useEffect(() => {
    if (videoEl.current && videoTrack) {
      videoTrack.unmute();
      videoTrack.attach(videoEl.current);
    }
    return () => {
      videoTrack == null ? void 0 : videoTrack.detach();
    };
  }, [videoTrack]);
  const [isValid, setIsValid] = React119.useState();
  const handleValidation = React119.useCallback(
    (values) => {
      if (typeof onValidate === "function") {
        return onValidate(values);
      } else {
        return values.username !== "";
      }
    },
    [onValidate]
  );
  React119.useEffect(() => {
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
      import_components_core54.log.warn("Validation failed with: ", userChoices);
    }
  }
  useWarnAboutMissingStyles();
  return /* @__PURE__ */ React119.createElement("div", __spreadValues({ className: "lk-prejoin" }, htmlProps), /* @__PURE__ */ React119.createElement("div", { className: "lk-video-container" }, videoTrack && /* @__PURE__ */ React119.createElement("video", { ref: videoEl, width: "1280", height: "720", "data-lk-facing-mode": facingMode }), (!videoTrack || !videoEnabled) && /* @__PURE__ */ React119.createElement("div", { className: "lk-camera-off-note" }, /* @__PURE__ */ React119.createElement(ParticipantPlaceholder_default, null))), /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group-container" }, /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group audio" }, /* @__PURE__ */ React119.createElement(
    TrackToggle,
    {
      id: "microphoneButton",
      initialState: audioEnabled,
      source: import_livekit_client17.Track.Source.Microphone,
      onChange: (enabled) => setAudioEnabled(enabled)
    },
    micLabel
  ), /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React119.createElement(
    MediaDeviceMenu,
    {
      initialSelection: audioDeviceId,
      kind: "audioinput",
      disabled: !audioTrack,
      tracks: { audioinput: audioTrack },
      onActiveDeviceChange: (_2, id) => setAudioDeviceId(id)
    }
  ))), /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group video" }, /* @__PURE__ */ React119.createElement(
    TrackToggle,
    {
      id: "cameraButton",
      initialState: videoEnabled,
      source: import_livekit_client17.Track.Source.Camera,
      onChange: (enabled) => setVideoEnabled(enabled)
    },
    camLabel
  ), /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React119.createElement(
    MediaDeviceMenu,
    {
      initialSelection: videoDeviceId,
      kind: "videoinput",
      disabled: !videoTrack,
      tracks: { videoinput: videoTrack },
      onActiveDeviceChange: (_2, id) => setVideoDeviceId(id)
    }
  )))), /* @__PURE__ */ React119.createElement("form", { className: "lk-username-container" }, /* @__PURE__ */ React119.createElement(
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
  ), /* @__PURE__ */ React119.createElement(
    "button",
    {
      className: "lk-button lk-join-button",
      type: "submit",
      id: "submitButton",
      onClick: handleSubmit,
      disabled: !isValid
    },
    joinLabel
  )), debug && /* @__PURE__ */ React119.createElement(React119.Fragment, null, /* @__PURE__ */ React119.createElement("strong", null, "User Choices:"), /* @__PURE__ */ React119.createElement("ul", { className: "lk-list", style: { overflow: "hidden", maxWidth: "15rem" } }, /* @__PURE__ */ React119.createElement("li", null, "Username: ", `${userChoices.username}`), /* @__PURE__ */ React119.createElement("li", null, "Video Enabled: ", `${userChoices.videoEnabled}`), /* @__PURE__ */ React119.createElement("li", null, "Audio Enabled: ", `${userChoices.audioEnabled}`), /* @__PURE__ */ React119.createElement("li", null, "Video Device: ", `${userChoices.videoDeviceId}`), /* @__PURE__ */ React119.createElement("li", null, "Audio Device: ", `${userChoices.audioDeviceId}`))));
}

// src/prefabs/VideoConference.tsx
var import_components_core60 = require("@livekit/components-core");
var import_livekit_client21 = require("livekit-client");
var React136 = __toESM(require("react"));

// src/prefabs/ControlBar.tsx
var import_livekit_client19 = require("livekit-client");
var React131 = __toESM(require("react"));

// src/prefabs/HostEndMeetingMenu.tsx
var import_components_core56 = require("@livekit/components-core");
var React123 = __toESM(require("react"));

// src/prefabs/ShareLink.tsx
var React122 = __toESM(require("react"));
var import_components_core55 = require("@livekit/components-core");

// src/prefabs/InviteViaPhone.tsx
var React120 = __toESM(require("react"));
function InviteViaPhone(_a2) {
  var _b = _a2, { link, room_name, participant, isCallScreen } = _b, props = __objRest(_b, ["link", "room_name", "participant", "isCallScreen"]);
  const selectRef = React120.useRef(null);
  const [defaultValue, setDefaultValue] = React120.useState("+1");
  const inputRef = React120.useRef(null);
  const [showToast, setShowToast] = React120.useState(false);
  const [countries, setCountries] = React120.useState([]);
  React120.useEffect(() => {
    fetch(`/country-list.json`).then((res) => __async(this, null, function* () {
      setCountries(yield res.json());
    }));
  }, []);
  function setEmpty() {
    if (inputRef.current && selectRef.current) {
      inputRef.current.value = "";
      selectRef.current.value = "";
      setDefaultValue("+1");
    }
  }
  function handleSubmit(event) {
    return __async(this, null, function* () {
      var _a3;
      event.preventDefault();
      if (inputRef.current && inputRef.current.value.trim() !== "") {
        const number = ((_a3 = selectRef.current) == null ? void 0 : _a3.value) + inputRef.current.value;
        setEmpty();
        if (isCallScreen) {
          const queryParams = new URLSearchParams(window.location.search);
          const token = queryParams.get("token");
          const authKey = queryParams.get("authKey");
          const data = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "number": number,
              // body data type must match "Content-Type" header
              "token": token,
              "authkey": authKey,
              "meeting_id": room_name
            })
          };
          fetch(`/api/invite-call-email-phone`, data).then((res) => __async(this, null, function* () {
            if (res.ok) {
              setShowToast(true);
            } else {
              throw Error("Error fetching server url, check server logs");
            }
          }));
        } else {
          const data = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "number": number,
              // body data type must match "Content-Type" header
              "link": link,
              "meeting_id": room_name,
              "participant": participant
            })
          };
          fetch(`/api/invite-phone`, data).then((res) => __async(this, null, function* () {
            if (res.ok) {
              setShowToast(true);
            } else {
              throw Error("Error fetching server url, check server logs");
            }
          }));
        }
      }
    });
  }
  React120.useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3e3);
    }
  }, [showToast]);
  function changeValue() {
    if (selectRef.current) {
      setDefaultValue(selectRef.current.value);
    }
  }
  return /* @__PURE__ */ React120.createElement("div", __spreadValues({}, props), showToast ? /* @__PURE__ */ React120.createElement(Toast, { className: "lk-toast-connection-state" }, "Invitation Sent") : /* @__PURE__ */ React120.createElement(React120.Fragment, null), /* @__PURE__ */ React120.createElement("form", { className: "lk-chat-form", onSubmit: handleSubmit }, /* @__PURE__ */ React120.createElement("select", { className: "lk-form-control lk-chat-form-input tl-select", ref: selectRef, value: defaultValue, onChange: changeValue }, countries.map((country) => /* @__PURE__ */ React120.createElement("option", { value: country.dial_code }, country.dial_code, " - ", country.name))), /* @__PURE__ */ React120.createElement("input", { className: "lk-form-control lk-chat-form-input", type: "tel", ref: inputRef, placeholder: "Enter Mobile Number", pattern: "[0-9]+", title: "Enter valid mobile number", maxLength: 10, minLength: 10 }), /* @__PURE__ */ React120.createElement("button", { type: "submit", className: "lk-button lk-chat-form-button tl-invite-button" }, "Invite")));
}

// src/prefabs/InviteViaEmail.tsx
var React121 = __toESM(require("react"));
function InviteViaEmail(_a2) {
  var _b = _a2, { link, room_name, participant, isCallScreen } = _b, props = __objRest(_b, ["link", "room_name", "participant", "isCallScreen"]);
  const inputRef = React121.useRef(null);
  const [showToast, setShowToast] = React121.useState(false);
  function setEmpty() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
  function handleSubmit(event) {
    return __async(this, null, function* () {
      event.preventDefault();
      if (inputRef.current && inputRef.current.value.trim() !== "") {
        const email = inputRef.current.value;
        setEmpty();
        if (isCallScreen) {
          const queryParams = new URLSearchParams(window.location.search);
          const token = queryParams.get("token");
          const authKey = queryParams.get("authKey");
          const data = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "email": email,
              // body data type must match "Content-Type" header
              "token": token,
              "authkey": authKey,
              "meeting_id": room_name
            })
          };
          fetch(`/api/invite-call-email-phone`, data).then((res) => __async(this, null, function* () {
            if (res.ok) {
              setShowToast(true);
            } else {
              throw Error("Error fetching server url, check server logs");
            }
          }));
        } else {
          const data = {
            method: "POST",
            // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "email": email,
              // body data type must match "Content-Type" header
              "link": link,
              "meeting_id": room_name,
              "participant": participant
            })
          };
          fetch(`/api/invite-email`, data).then((res) => __async(this, null, function* () {
            if (res.ok) {
              setShowToast(true);
            } else {
              throw Error("Error fetching server url, check server logs");
            }
          }));
        }
      }
    });
  }
  React121.useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3e3);
    }
  }, [showToast]);
  return /* @__PURE__ */ React121.createElement("div", __spreadValues({}, props), showToast ? /* @__PURE__ */ React121.createElement(Toast, { className: "lk-toast-connection-state" }, "Invitation Sent") : /* @__PURE__ */ React121.createElement(React121.Fragment, null), /* @__PURE__ */ React121.createElement("form", { className: "lk-chat-form", onSubmit: handleSubmit }, /* @__PURE__ */ React121.createElement("input", { className: "lk-form-control lk-chat-form-input", type: "email", ref: inputRef, placeholder: "Enter Email" }), /* @__PURE__ */ React121.createElement("button", { type: "submit", className: "lk-button lk-chat-form-button tl-invite-button" }, "Invite")));
}

// src/prefabs/ShareLink.tsx
function useGetLink() {
  const host = getHostUrl();
  const link = `${host}/${getDomainIdentifier()}/meeting/${useGetRoom().name}`;
  return { link };
}
function useGetRoom() {
  const room = useRoomContext();
  return room;
}
function getHostUrl() {
  return typeof window ? window.location.origin : "";
}
function getDomainIdentifier() {
  return typeof window ? window.location.href.split("/")[3] : "";
}
function getToken() {
  var _a2;
  const urlParams = new URLSearchParams(window.location.search);
  return (_a2 = localStorage.getItem("host")) != null ? _a2 : urlParams.get("token");
}
function ShareLink(_a2) {
  var _b = _a2, { isCallScreen } = _b, props = __objRest(_b, ["isCallScreen"]);
  const inputRef = React122.useRef(null);
  const ulRef = React122.useRef(null);
  const { link } = useGetLink();
  const [users, setUsers] = React122.useState([]);
  const [searched, setSearched] = React122.useState([]);
  const [showToast, setShowToast] = React122.useState(false);
  const [inviteVia, setInviteVia] = React122.useState("chat");
  function showInviteVia(type) {
    setInviteVia(type);
  }
  const room = useGetRoom();
  const participantName = room.localParticipant.name;
  function searchUsers(key) {
    return __async(this, null, function* () {
      if (key) {
        const filteredData = users.filter(function(item) {
          return item.full_name.toLocaleLowerCase().includes(key.trim().toLocaleLowerCase());
        });
        setSearched(filteredData);
      } else {
        setSearched(users);
      }
    });
  }
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const authKey = queryParams.get("authKey");
  let postRequest = {
    meeting_id: room.name,
    token: getToken(),
    authKey: null,
    domain: getDomainIdentifier()
  };
  if (token && authKey) {
    postRequest.token = token;
    postRequest.authKey = authKey;
  }
  function getUsers() {
    return __async(this, null, function* () {
      const data = {
        method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postRequest)
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
  React122.useEffect(() => {
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
      setInvitedFirst(user, true);
      let data = {
        method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: ""
      };
      if (isCallScreen) {
        data.body = JSON.stringify({
          "invite_user_id": user.user_id,
          "meeting_id": room.name,
          "authKey": authKey
        });
      } else {
        data.body = JSON.stringify({
          "userId": user.user_id,
          // body data type must match "Content-Type" header
          "userName": user.full_name,
          // body data type must match "Content-Type" header
          "message": link,
          "meeting_id": room.name,
          "token": getToken(),
          "domain": getDomainIdentifier()
        });
      }
      fetch(`/api/invite-user`, data).then((res) => __async(this, null, function* () {
        if (res.ok) {
          setInvitedFirst(user, false);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  const { localParticipant } = useLocalParticipant();
  const p2 = useEnsureParticipant(localParticipant);
  const { infoObserver } = React122.useMemo(() => {
    return (0, import_components_core55.setupParticipantName)(p2);
  }, [p2]);
  const { metadata } = useObservableState(infoObserver, {
    name: p2.name,
    identity: p2.identity,
    metadata: p2.metadata
  });
  const meta = metadata ? JSON.parse(metadata) : {};
  const [showInviteUser, setShowInviteUser] = React122.useState(true);
  React122.useEffect(() => {
    if (meta && meta.host && meta.limited) {
      setShowInviteUser(false);
    }
  }, [meta]);
  React122.useEffect(() => {
    const pmeta = p2.metadata ? JSON.parse(p2.metadata) : {};
    if (pmeta && pmeta.host && meta.limited) {
      setShowInviteUser(false);
    }
  }, [p2]);
  function setInvitedFirst(user, valueToSet = true) {
    return __async(this, null, function* () {
      user.invited = valueToSet;
      const newUsers = users.map(
        (item) => item.user_id === user.user_id ? __spreadProps(__spreadValues({}, item), { invited: valueToSet }) : item
      );
      setUsers(newUsers);
      const newSearched = searched.map(
        (item) => item.user_id === user.user_id ? __spreadProps(__spreadValues({}, item), { invited: valueToSet }) : item
      );
      setSearched(newSearched);
    });
  }
  function handleCopy() {
    return __async(this, null, function* () {
      navigator.clipboard.writeText(link);
      setShowToast(true);
    });
  }
  React122.useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3e3);
    }
  }, [showToast]);
  React122.useEffect(() => {
    var _a3;
    if (ulRef) {
      (_a3 = ulRef.current) == null ? void 0 : _a3.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef, users]);
  React122.useEffect(() => {
    setSearched(users);
  }, [inviteVia]);
  return /* @__PURE__ */ React122.createElement("div", __spreadProps(__spreadValues({}, props), { className: "lk-chat lk-sharelink" }), !isCallScreen ? /* @__PURE__ */ React122.createElement("form", { className: "lk-chat-form" }, /* @__PURE__ */ React122.createElement("input", { className: "lk-form-control lk-chat-form-input", type: "text", value: link, readOnly: true }), /* @__PURE__ */ React122.createElement("button", { type: "button", className: "lk-button lk-chat-form-button", onClick: handleCopy }, "Copy")) : /* @__PURE__ */ React122.createElement(React122.Fragment, null), showToast ? /* @__PURE__ */ React122.createElement(Toast, { className: "lk-toast-connection-state" }, "Copied") : /* @__PURE__ */ React122.createElement(React122.Fragment, null), /* @__PURE__ */ React122.createElement("div", { className: "tl-invite-buttons" }, /* @__PURE__ */ React122.createElement("button", { type: "button", className: "lk-button lk-chat-form-button", "aria-pressed": inviteVia === "chat", onClick: () => showInviteVia("chat") }, "Contact"), /* @__PURE__ */ React122.createElement("button", { type: "button", className: "lk-button lk-chat-form-button", "aria-pressed": inviteVia === "phone", onClick: () => showInviteVia("phone") }, "Phone"), /* @__PURE__ */ React122.createElement("button", { type: "button", className: "lk-button lk-chat-form-button", "aria-pressed": inviteVia === "email", onClick: () => showInviteVia("email") }, "Email")), inviteVia === "phone" ? /* @__PURE__ */ React122.createElement(InviteViaPhone, { link, room_name: room.name, participant: participantName, isCallScreen }) : /* @__PURE__ */ React122.createElement(React122.Fragment, null), inviteVia === "email" ? /* @__PURE__ */ React122.createElement(InviteViaEmail, { link, room_name: room.name, participant: participantName, isCallScreen }) : /* @__PURE__ */ React122.createElement(React122.Fragment, null), inviteVia === "chat" ? /* @__PURE__ */ React122.createElement(React122.Fragment, null, showInviteUser ? /* @__PURE__ */ React122.createElement("form", { className: "lk-chat-form", onSubmit: handleSubmit }, /* @__PURE__ */ React122.createElement(
    "input",
    {
      className: "lk-form-control lk-chat-form-input",
      ref: inputRef,
      type: "text",
      placeholder: "Search User...",
      onChange: handleSubmit
    }
  )) : /* @__PURE__ */ React122.createElement(React122.Fragment, null), showInviteUser && searched.length > 0 ? /* @__PURE__ */ React122.createElement("ul", { className: "lk-list lk-chat-messages", ref: ulRef }, searched.map((user, index) => {
    return /* @__PURE__ */ React122.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React122.createElement("div", null, /* @__PURE__ */ React122.createElement("span", { className: "lk-message-body" }, user.full_name), /* @__PURE__ */ React122.createElement("span", { className: "lk-message-body lk-message-text" }, user.user_name)), /* @__PURE__ */ React122.createElement("button", { type: "button", onClick: () => handleInvite(user), className: "lk-button lk-chat-form-button" + (user.invited ? " invited" : "") }, user.invited ? "Invited" : "Invite"));
  })) : "") : /* @__PURE__ */ React122.createElement(React122.Fragment, null));
}

// src/prefabs/HostEndMeetingMenu.tsx
function HostEndMeetingMenu(_a2) {
  var _b = _a2, {
    leave,
    leaveButton,
    endForAll,
    showIcon,
    showText
  } = _b, props = __objRest(_b, [
    "leave",
    "leaveButton",
    "endForAll",
    "showIcon",
    "showText"
  ]);
  const [isOpen, setIsOpen] = React123.useState(false);
  const [updateRequired, setUpdateRequired] = React123.useState(true);
  const room = useRoomContext();
  const button = React123.useRef(null);
  const leaveButtonRef = React123.useRef(null);
  const tooltip = React123.useRef(null);
  const { disconnect } = (0, import_components_core56.setupDisconnectButton)(room);
  const [showDropdown, setShowDropdown] = React123.useState(false);
  const [value, setValue] = React123.useState("");
  const participants = useParticipants();
  const { localParticipant } = useLocalParticipant();
  const remoteParticipants = participants.filter((participant) => participant.identity !== localParticipant.identity);
  const meta = localParticipant.metadata ? JSON.parse(localParticipant.metadata) : {};
  React123.useLayoutEffect(() => {
    if (button.current && tooltip.current && updateRequired) {
      (0, import_components_core56.computeMenuPosition)(button.current, tooltip.current).then(({ x: x2, y: y2 }) => {
        if (tooltip.current) {
          console.log({ x: x2, y: y2 });
          Object.assign(tooltip.current.style, { left: `${x2}px`, top: `${y2 - 5}px` });
        }
      });
      setUpdateRequired(false);
    }
  }, [button, tooltip, updateRequired]);
  const handleClickOutside = React123.useCallback(
    (event) => {
      if (!tooltip.current) {
        return;
      }
      if (event.target === leaveButtonRef.current) {
        return;
      }
      if (event.target === button.current) {
        return;
      }
      if (isOpen && (0, import_components_core56.wasClickOutside)(tooltip.current, event)) {
        setIsOpen(false);
        setShowDropdown(false);
      }
    },
    [isOpen, tooltip, button]
  );
  React123.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", () => setUpdateRequired(true));
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", () => setUpdateRequired(true));
    };
  }, [handleClickOutside]);
  function endMeeting() {
    return __async(this, null, function* () {
      const postData = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          room: room.name,
          token: meta.host,
          domain: getDomainIdentifier()
        })
      };
      fetch(`/api/end-meeting`, postData).then((res) => __async(this, null, function* () {
        if (res.ok) {
          localStorage.removeItem("host");
          localStorage.removeItem("limited");
          console.log("Meeting ended");
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  function makeNewHost(identity) {
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
          token: meta.host,
          domain: getDomainIdentifier()
        })
      };
      yield fetch(`/api/make-host`, postData).then((res) => __async(this, null, function* () {
        if (res.ok) {
          console.log("Host leave and new host assigned");
          disconnect(true);
          setIsOpen(false);
          setShowDropdown(false);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
  const [hostError, setHostError] = React123.useState(false);
  const handleChange = () => {
    if (value !== "") {
      setIsOpen(false);
      setValue(value);
      makeNewHost(value);
    } else {
      console.log("Must have to select participant");
      setHostError(true);
    }
  };
  React123.useEffect(() => {
    let timer;
    if (hostError) {
      timer = setTimeout(() => {
        setHostError(false);
      }, 5e3);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [hostError]);
  const handleLeave = () => {
    if (remoteParticipants.length) {
      console.log("Openning dropdown");
      setShowDropdown(true);
      setIsOpen(true);
    } else {
      console.log("No Participant present to leaving meeting");
      disconnect(true);
    }
  };
  const handleCancel = () => {
    setShowDropdown(false);
  };
  const handleChangeValue = (e2) => {
    setValue(e2.target.value);
  };
  return /* @__PURE__ */ React123.createElement(React123.Fragment, null, /* @__PURE__ */ React123.createElement(
    "button",
    __spreadProps(__spreadValues({
      className: "lk-button lk-button-menu",
      "aria-pressed": isOpen
    }, props), {
      onClick: () => setIsOpen(!isOpen),
      ref: button
    }),
    props.children,
    showIcon && /* @__PURE__ */ React123.createElement(LeaveIcon_default, null),
    showText && "Leave"
  ), /* @__PURE__ */ React123.createElement(
    "div",
    {
      className: "lk-device-menu",
      ref: tooltip,
      style: { visibility: isOpen ? "visible" : "hidden" }
    },
    /* @__PURE__ */ React123.createElement("ul", { className: "lk-media-device-select lk-list", style: { display: !showDropdown ? "unset" : "none" } }, endForAll && /* @__PURE__ */ React123.createElement("li", null, /* @__PURE__ */ React123.createElement(DisconnectButton, { onClick: endMeeting }, endForAll)), leave && /* @__PURE__ */ React123.createElement("li", null, /* @__PURE__ */ React123.createElement("button", { ref: leaveButtonRef, className: "lk-disconnect-button", onClick: handleLeave }, "Leave Meeting"))),
    showDropdown && /* @__PURE__ */ React123.createElement("div", { className: "assign-menu" }, hostError && /* @__PURE__ */ React123.createElement("span", { className: "text-invalid" }, "Must have to select participant"), /* @__PURE__ */ React123.createElement("select", { value, onChange: handleChangeValue }, /* @__PURE__ */ React123.createElement("option", { value: "" }, "Select meeting host"), remoteParticipants.map((participant) => /* @__PURE__ */ React123.createElement("option", { value: participant.identity, key: participant.identity }, participant == null ? void 0 : participant.name))), /* @__PURE__ */ React123.createElement("div", { className: "button-container" }, /* @__PURE__ */ React123.createElement("button", { className: "lk-button tl-cancel", onClick: handleCancel }, "Cancel"), /* @__PURE__ */ React123.createElement("button", { className: "lk-button tl-ok", onClick: handleChange }, "Ok"))),
    /* @__PURE__ */ React123.createElement("div", { className: "arrow" }, /* @__PURE__ */ React123.createElement("div", { className: "arrow-shape" }))
  ));
}

// src/components/controls/UserToggle.tsx
var React124 = __toESM(require("react"));
var import_components_core57 = require("@livekit/components-core");
function useToggleUserLink({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const { className } = React124.useMemo(() => (0, import_components_core57.setupUserToggle)(), []);
  const mergedProps = React124.useMemo(
    () => mergeProps2(props, {
      className,
      onClick: () => {
        if (dispatch) dispatch({ msg: "show_users" });
      },
      "aria-pressed": (state == null ? void 0 : state.showChat) == "show_users" ? "true" : "false"
    }),
    [props, className, dispatch]
  );
  return { mergedProps };
}
function UserToggle(props) {
  const { mergedProps } = useToggleUserLink({ props });
  return /* @__PURE__ */ React124.createElement("button", __spreadValues({}, mergedProps), props.children);
}

// src/prefabs/ControlBar.tsx
var import_components_core59 = require("@livekit/components-core");

// src/prefabs/ExtraOptionMenu.tsx
var import_components_core58 = require("@livekit/components-core");
var React127 = __toESM(require("react"));

// ../../node_modules/.pnpm/@mediapipe+tasks-vision@0.10.9/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs
var t = "undefined" != typeof self ? self : {};
function e(e2, n2) {
  t: {
    for (var r2 = ["CLOSURE_FLAGS"], i2 = t, s2 = 0; s2 < r2.length; s2++) if (null == (i2 = i2[r2[s2]])) {
      r2 = null;
      break t;
    }
    r2 = i2;
  }
  return null != (e2 = r2 && r2[e2]) ? e2 : n2;
}
function n() {
  throw Error("Invalid UTF8");
}
function r(t2, e2) {
  return e2 = String.fromCharCode.apply(null, e2), null == t2 ? e2 : t2 + e2;
}
var i;
var s;
var o = "undefined" != typeof TextDecoder;
var a;
var c = "undefined" != typeof TextEncoder;
function h(t2) {
  if (c) t2 = (a || (a = new TextEncoder())).encode(t2);
  else {
    let n2 = 0;
    const r2 = new Uint8Array(3 * t2.length);
    for (let i2 = 0; i2 < t2.length; i2++) {
      var e2 = t2.charCodeAt(i2);
      if (128 > e2) r2[n2++] = e2;
      else {
        if (2048 > e2) r2[n2++] = e2 >> 6 | 192;
        else {
          if (55296 <= e2 && 57343 >= e2) {
            if (56319 >= e2 && i2 < t2.length) {
              const s2 = t2.charCodeAt(++i2);
              if (56320 <= s2 && 57343 >= s2) {
                e2 = 1024 * (e2 - 55296) + s2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                continue;
              }
              i2--;
            }
            e2 = 65533;
          }
          r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
        }
        r2[n2++] = 63 & e2 | 128;
      }
    }
    t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
  }
  return t2;
}
var u;
var l = e(610401301, false);
var f = e(572417392, true);
var d = t.navigator;
function p(t2) {
  return !!l && (!!u && u.brands.some(({ brand: e2 }) => e2 && -1 != e2.indexOf(t2)));
}
function g(e2) {
  var n2;
  return (n2 = t.navigator) && (n2 = n2.userAgent) || (n2 = ""), -1 != n2.indexOf(e2);
}
function m() {
  return !!l && (!!u && 0 < u.brands.length);
}
function y() {
  return m() ? p("Chromium") : (g("Chrome") || g("CriOS")) && !(!m() && g("Edge")) || g("Silk");
}
u = d && d.userAgentData || null;
var v = !m() && (g("Trident") || g("MSIE"));
!g("Android") || y(), y(), g("Safari") && (y() || !m() && g("Coast") || !m() && g("Opera") || !m() && g("Edge") || (m() ? p("Microsoft Edge") : g("Edg/")) || m() && p("Opera"));
var _ = {};
var w = null;
function T(t2) {
  var e2 = t2.length, n2 = 3 * e2 / 4;
  n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
  var r2 = new Uint8Array(n2), i2 = 0;
  return function(t3, e3) {
    function n3(e4) {
      for (; r3 < t3.length; ) {
        var n4 = t3.charAt(r3++), i4 = w[n4];
        if (null != i4) return i4;
        if (!/^[\s\xa0]*$/.test(n4)) throw Error("Unknown base64 encoding at char: " + n4);
      }
      return e4;
    }
    E();
    for (var r3 = 0; ; ) {
      var i3 = n3(-1), s2 = n3(0), o2 = n3(64), a2 = n3(64);
      if (64 === a2 && -1 === i3) break;
      e3(i3 << 2 | s2 >> 4), 64 != o2 && (e3(s2 << 4 & 240 | o2 >> 2), 64 != a2 && e3(o2 << 6 & 192 | a2));
    }
  }(t2, function(t3) {
    r2[i2++] = t3;
  }), i2 !== n2 ? r2.subarray(0, i2) : r2;
}
function E() {
  if (!w) {
    w = {};
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"], n2 = 0; 5 > n2; n2++) {
      var r2 = t2.concat(e2[n2].split(""));
      _[n2] = r2;
      for (var i2 = 0; i2 < r2.length; i2++) {
        var s2 = r2[i2];
        void 0 === w[s2] && (w[s2] = i2);
      }
    }
  }
}
var b = "undefined" != typeof Uint8Array;
var A = !v && "function" == typeof btoa;
function x(t2) {
  if (!A) {
    var e2;
    void 0 === e2 && (e2 = 0), E(), e2 = _[e2];
    var n2 = Array(Math.floor(t2.length / 3)), r2 = e2[64] || "";
    let c2 = 0, h2 = 0;
    for (; c2 < t2.length - 2; c2 += 3) {
      var i2 = t2[c2], s2 = t2[c2 + 1], o2 = t2[c2 + 2], a2 = e2[i2 >> 2];
      i2 = e2[(3 & i2) << 4 | s2 >> 4], s2 = e2[(15 & s2) << 2 | o2 >> 6], o2 = e2[63 & o2], n2[h2++] = a2 + i2 + s2 + o2;
    }
    switch (a2 = 0, o2 = r2, t2.length - c2) {
      case 2:
        o2 = e2[(15 & (a2 = t2[c2 + 1])) << 2] || r2;
      case 1:
        t2 = t2[c2], n2[h2] = e2[t2 >> 2] + e2[(3 & t2) << 4 | a2 >> 4] + o2 + r2;
    }
    return n2.join("");
  }
  for (e2 = "", n2 = 0, r2 = t2.length - 10240; n2 < r2; ) e2 += String.fromCharCode.apply(null, t2.subarray(n2, n2 += 10240));
  return e2 += String.fromCharCode.apply(null, n2 ? t2.subarray(n2) : t2), btoa(e2);
}
var k = /[-_.]/g;
var S = { "-": "+", _: "/", ".": "=" };
function L(t2) {
  return S[t2] || "";
}
function R(t2) {
  if (!A) return T(t2);
  k.test(t2) && (t2 = t2.replace(k, L)), t2 = atob(t2);
  const e2 = new Uint8Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
  return e2;
}
function F(t2) {
  return b && null != t2 && t2 instanceof Uint8Array;
}
var M;
function O() {
  return M || (M = new Uint8Array(0));
}
var I = {};
var C;
function P(t2) {
  if (t2 !== I) throw Error("illegal external caller");
}
function U() {
  return C || (C = new B(null, I));
}
function D(t2) {
  P(I);
  var e2 = t2.Z;
  return null == (e2 = null == e2 || F(e2) ? e2 : "string" == typeof e2 ? R(e2) : null) ? e2 : t2.Z = e2;
}
var B = class {
  constructor(t2, e2) {
    if (P(e2), this.Z = t2, null != t2 && 0 === t2.length) throw Error("ByteString should be constructed with non-empty values");
  }
  wa() {
    const t2 = D(this);
    return t2 ? new Uint8Array(t2) : O();
  }
};
function N(t2, e2) {
  return Error(`Invalid wire type: ${t2} (at position ${e2})`);
}
function G() {
  return Error("Failed to read varint, encoding is invalid.");
}
function j(t2, e2) {
  return Error(`Tried to read past the end of the data ${e2} > ${t2}`);
}
function V(t2) {
  return 0 == t2.length ? U() : new B(t2, I);
}
function X(t2) {
  if ("string" == typeof t2) return { buffer: R(t2), L: false };
  if (Array.isArray(t2)) return { buffer: new Uint8Array(t2), L: false };
  if (t2.constructor === Uint8Array) return { buffer: t2, L: false };
  if (t2.constructor === ArrayBuffer) return { buffer: new Uint8Array(t2), L: false };
  if (t2.constructor === B) return { buffer: D(t2) || O(), L: true };
  if (t2 instanceof Uint8Array) return { buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), L: false };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function z() {
  return "function" == typeof BigInt;
}
var W = !f;
var H = !f;
var Y = "function" == typeof Uint8Array.prototype.slice;
var K;
var $ = 0;
var q = 0;
function J(t2) {
  const e2 = 0 > t2;
  let n2 = (t2 = Math.abs(t2)) >>> 0;
  if (t2 = Math.floor((t2 - n2) / 4294967296), e2) {
    const [e3, r2] = st(n2, t2);
    t2 = r2, n2 = e3;
  }
  $ = n2 >>> 0, q = t2 >>> 0;
}
function Z(t2) {
  const e2 = K || (K = new DataView(new ArrayBuffer(8)));
  e2.setFloat32(0, +t2, true), q = 0, $ = e2.getUint32(0, true);
}
function Q(t2, e2) {
  return 4294967296 * e2 + (t2 >>> 0);
}
function tt(t2, e2) {
  const n2 = 2147483648 & e2;
  return n2 && (e2 = ~e2 >>> 0, 0 == (t2 = 1 + ~t2 >>> 0) && (e2 = e2 + 1 >>> 0)), t2 = Q(t2, e2), n2 ? -t2 : t2;
}
function et(t2, e2) {
  if (t2 >>>= 0, 2097151 >= (e2 >>>= 0)) var n2 = "" + (4294967296 * e2 + t2);
  else z() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, 1e7 <= t2 && (n2 += Math.floor(t2 / 1e7), t2 %= 1e7), 1e7 <= n2 && (e2 += Math.floor(n2 / 1e7), n2 %= 1e7), n2 = e2 + nt(n2) + nt(t2));
  return n2;
}
function nt(t2) {
  return t2 = String(t2), "0000000".slice(t2.length) + t2;
}
function rt() {
  var t2 = $, e2 = q;
  if (2147483648 & e2) if (z()) t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
  else {
    const [n2, r2] = st(t2, e2);
    t2 = "-" + et(n2, r2);
  }
  else t2 = et(t2, e2);
  return t2;
}
function it(t2) {
  if (16 > t2.length) J(Number(t2));
  else if (z()) t2 = BigInt(t2), $ = Number(t2 & BigInt(4294967295)) >>> 0, q = Number(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const e2 = +("-" === t2[0]);
    q = $ = 0;
    const n2 = t2.length;
    for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
      const e3 = Number(t2.slice(r2, i2));
      q *= 1e6, $ = 1e6 * $ + e3, 4294967296 <= $ && (q += Math.trunc($ / 4294967296), q >>>= 0, $ >>>= 0);
    }
    if (e2) {
      const [t3, e3] = st($, q);
      $ = t3, q = e3;
    }
  }
}
function st(t2, e2) {
  return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
}
function ot(t2, e2) {
  let n2, r2 = 0, i2 = 0, s2 = 0;
  const o2 = t2.h;
  let a2 = t2.g;
  do {
    n2 = o2[a2++], r2 |= (127 & n2) << s2, s2 += 7;
  } while (32 > s2 && 128 & n2);
  for (32 < s2 && (i2 |= (127 & n2) >> 4), s2 = 3; 32 > s2 && 128 & n2; s2 += 7) n2 = o2[a2++], i2 |= (127 & n2) << s2;
  if (pt(t2, a2), 128 > n2) return e2(r2 >>> 0, i2 >>> 0);
  throw G();
}
function at(t2) {
  let e2 = 0, n2 = t2.g;
  const r2 = n2 + 10, i2 = t2.h;
  for (; n2 < r2; ) {
    const r3 = i2[n2++];
    if (e2 |= r3, 0 == (128 & r3)) return pt(t2, n2), !!(127 & e2);
  }
  throw G();
}
function ct(t2) {
  const e2 = t2.h;
  let n2 = t2.g, r2 = e2[n2++], i2 = 127 & r2;
  if (128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 7, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 14, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 21, 128 & r2 && (r2 = e2[n2++], i2 |= r2 << 28, 128 & r2 && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++]))))) throw G();
  return pt(t2, n2), i2;
}
function ht(t2) {
  return ct(t2) >>> 0;
}
function ut(t2) {
  var e2 = t2.h;
  const n2 = t2.g, r2 = e2[n2], i2 = e2[n2 + 1], s2 = e2[n2 + 2];
  return e2 = e2[n2 + 3], pt(t2, t2.g + 4), (r2 << 0 | i2 << 8 | s2 << 16 | e2 << 24) >>> 0;
}
function lt(t2) {
  var e2 = ut(t2);
  t2 = 2 * (e2 >> 31) + 1;
  const n2 = e2 >>> 23 & 255;
  return e2 &= 8388607, 255 == n2 ? e2 ? NaN : 1 / 0 * t2 : 0 == n2 ? t2 * Math.pow(2, -149) * e2 : t2 * Math.pow(2, n2 - 150) * (e2 + Math.pow(2, 23));
}
function ft(t2) {
  return ct(t2);
}
function dt(t2, e2, { aa: n2 = false } = {}) {
  t2.aa = n2, e2 && (e2 = X(e2), t2.h = e2.buffer, t2.m = e2.L, t2.j = 0, t2.l = t2.h.length, t2.g = t2.j);
}
function pt(t2, e2) {
  if (t2.g = e2, e2 > t2.l) throw j(t2.l, e2);
}
function gt(t2, e2) {
  if (0 > e2) throw Error(`Tried to read a negative byte length: ${e2}`);
  const n2 = t2.g, r2 = n2 + e2;
  if (r2 > t2.l) throw j(e2, t2.l - n2);
  return t2.g = r2, n2;
}
function mt(t2, e2) {
  if (0 == e2) return U();
  var n2 = gt(t2, e2);
  return t2.aa && t2.m ? n2 = t2.h.subarray(n2, n2 + e2) : (t2 = t2.h, n2 = n2 === (e2 = n2 + e2) ? O() : Y ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), V(n2);
}
var yt = [];
function vt(t2) {
  var e2 = t2.g;
  if (e2.g == e2.l) return false;
  t2.l = t2.g.g;
  var n2 = ht(t2.g);
  if (e2 = n2 >>> 3, !(0 <= (n2 &= 7) && 5 >= n2)) throw N(n2, t2.l);
  if (1 > e2) throw Error(`Invalid field number: ${e2} (at position ${t2.l})`);
  return t2.m = e2, t2.h = n2, true;
}
function _t(t2) {
  switch (t2.h) {
    case 0:
      0 != t2.h ? _t(t2) : at(t2.g);
      break;
    case 1:
      pt(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (2 != t2.h) _t(t2);
      else {
        var e2 = ht(t2.g);
        pt(t2 = t2.g, t2.g + e2);
      }
      break;
    case 5:
      pt(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (e2 = t2.m; ; ) {
        if (!vt(t2)) throw Error("Unmatched start-group tag: stream EOF");
        if (4 == t2.h) {
          if (t2.m != e2) throw Error("Unmatched end-group tag");
          break;
        }
        _t(t2);
      }
      break;
    default:
      throw N(t2.h, t2.l);
  }
}
function wt(t2, e2, n2) {
  const r2 = t2.g.l, i2 = ht(t2.g), s2 = t2.g.g + i2;
  let o2 = s2 - r2;
  if (0 >= o2 && (t2.g.l = s2, n2(e2, t2, void 0, void 0, void 0), o2 = s2 - t2.g.g), o2) throw Error(`Message parsing ended unexpectedly. Expected to read ${i2} bytes, instead read ${i2 - o2} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return t2.g.g = s2, t2.g.l = r2, e2;
}
function Tt(t2) {
  var e2 = ht(t2.g), a2 = gt(t2 = t2.g, e2);
  if (t2 = t2.h, o) {
    var c2, h2 = t2;
    (c2 = s) || (c2 = s = new TextDecoder("utf-8", { fatal: true })), e2 = a2 + e2, h2 = 0 === a2 && e2 === h2.length ? h2 : h2.subarray(a2, e2);
    try {
      var u2 = c2.decode(h2);
    } catch (t3) {
      if (void 0 === i) {
        try {
          c2.decode(new Uint8Array([128]));
        } catch (t4) {
        }
        try {
          c2.decode(new Uint8Array([97])), i = true;
        } catch (t4) {
          i = false;
        }
      }
      throw !i && (s = void 0), t3;
    }
  } else {
    e2 = (u2 = a2) + e2, a2 = [];
    let i2, s2 = null;
    for (; u2 < e2; ) {
      var l2 = t2[u2++];
      128 > l2 ? a2.push(l2) : 224 > l2 ? u2 >= e2 ? n() : (i2 = t2[u2++], 194 > l2 || 128 != (192 & i2) ? (u2--, n()) : a2.push((31 & l2) << 6 | 63 & i2)) : 240 > l2 ? u2 >= e2 - 1 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 224 === l2 && 160 > i2 || 237 === l2 && 160 <= i2 || 128 != (192 & (c2 = t2[u2++])) ? (u2--, n()) : a2.push((15 & l2) << 12 | (63 & i2) << 6 | 63 & c2)) : 244 >= l2 ? u2 >= e2 - 2 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 0 != i2 - 144 + (l2 << 28) >> 30 || 128 != (192 & (c2 = t2[u2++])) || 128 != (192 & (h2 = t2[u2++])) ? (u2--, n()) : (l2 = (7 & l2) << 18 | (63 & i2) << 12 | (63 & c2) << 6 | 63 & h2, l2 -= 65536, a2.push(55296 + (l2 >> 10 & 1023), 56320 + (1023 & l2)))) : n(), 8192 <= a2.length && (s2 = r(s2, a2), a2.length = 0);
    }
    u2 = r(s2, a2);
  }
  return u2;
}
function Et(t2) {
  const e2 = ht(t2.g);
  return mt(t2.g, e2);
}
function bt(t2, e2, n2) {
  var r2 = ht(t2.g);
  for (r2 = t2.g.g + r2; t2.g.g < r2; ) n2.push(e2(t2.g));
}
var At = [];
function xt(t2) {
  return t2 ? /^\d+$/.test(t2) ? (it(t2), new kt($, q)) : null : St || (St = new kt(0, 0));
}
var kt = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var St;
function Lt(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (it(t2), new Rt($, q)) : null : Ft || (Ft = new Rt(0, 0));
}
var Rt = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var Ft;
function Mt(t2, e2, n2) {
  for (; 0 < n2 || 127 < e2; ) t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
  t2.g.push(e2);
}
function Ot(t2, e2) {
  for (; 127 < e2; ) t2.g.push(127 & e2 | 128), e2 >>>= 7;
  t2.g.push(e2);
}
function It(t2, e2) {
  if (0 <= e2) Ot(t2, e2);
  else {
    for (let n2 = 0; 9 > n2; n2++) t2.g.push(127 & e2 | 128), e2 >>= 7;
    t2.g.push(1);
  }
}
function Ct(t2, e2) {
  t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
}
function Pt(t2, e2) {
  0 !== e2.length && (t2.l.push(e2), t2.h += e2.length);
}
function Ut(t2, e2, n2) {
  Ot(t2.g, 8 * e2 + n2);
}
function Dt(t2, e2) {
  return Ut(t2, e2, 2), e2 = t2.g.end(), Pt(t2, e2), e2.push(t2.h), e2;
}
function Bt(t2, e2) {
  var n2 = e2.pop();
  for (n2 = t2.h + t2.g.length() - n2; 127 < n2; ) e2.push(127 & n2 | 128), n2 >>>= 7, t2.h++;
  e2.push(n2), t2.h++;
}
function Nt(t2, e2, n2) {
  Ut(t2, e2, 2), Ot(t2.g, n2.length), Pt(t2, t2.g.end()), Pt(t2, n2);
}
function Gt(t2, e2, n2, r2) {
  null != n2 && (e2 = Dt(t2, e2), r2(n2, t2), Bt(t2, e2));
}
var jt = class {
  constructor(t2, e2, n2, r2) {
    this.g = t2, this.h = e2, this.l = n2, this.qa = r2;
  }
};
function Vt(t2) {
  return Array.prototype.slice.call(t2);
}
function Xt(t2) {
  return "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : t2;
}
var zt = Xt();
var Wt = Xt("0di");
var Ht = zt ? (t2, e2) => {
  t2[zt] |= e2;
} : (t2, e2) => {
  void 0 !== t2.D ? t2.D |= e2 : Object.defineProperties(t2, { D: { value: e2, configurable: true, writable: true, enumerable: false } });
};
function Yt(t2) {
  const e2 = qt(t2);
  1 != (1 & e2) && (Object.isFrozen(t2) && (t2 = Vt(t2)), Zt(t2, 1 | e2));
}
var Kt = zt ? (t2, e2) => {
  t2[zt] &= ~e2;
} : (t2, e2) => {
  void 0 !== t2.D && (t2.D &= ~e2);
};
function $t(t2, e2, n2) {
  return n2 ? t2 | e2 : t2 & ~e2;
}
var qt = zt ? (t2) => 0 | t2[zt] : (t2) => 0 | t2.D;
var Jt = zt ? (t2) => t2[zt] : (t2) => t2.D;
var Zt = zt ? (t2, e2) => {
  t2[zt] = e2;
} : (t2, e2) => {
  void 0 !== t2.D ? t2.D = e2 : Object.defineProperties(t2, { D: { value: e2, configurable: true, writable: true, enumerable: false } });
};
function Qt() {
  var t2 = [];
  return Ht(t2, 1), t2;
}
function te(t2) {
  return Ht(t2, 34), t2;
}
function ee(t2, e2) {
  Zt(e2, -14591 & (0 | t2));
}
function ne(t2, e2) {
  Zt(e2, -14557 & (34 | t2));
}
function re(t2) {
  return 0 === (t2 = t2 >> 14 & 1023) ? 536870912 : t2;
}
var ie = {};
var se = {};
function oe(t2) {
  return !(!t2 || "object" != typeof t2 || t2.Na !== se);
}
function ae(t2) {
  return null !== t2 && "object" == typeof t2 && !Array.isArray(t2) && t2.constructor === Object;
}
var ce = !f;
function he(t2, e2, n2) {
  if (null != t2) {
    if ("string" == typeof t2) t2 = t2 ? new B(t2, I) : U();
    else if (t2.constructor !== B) if (F(t2)) t2 = n2 ? V(t2) : t2.length ? new B(new Uint8Array(t2), I) : U();
    else {
      if (!e2) throw Error();
      t2 = void 0;
    }
  }
  return t2;
}
function ue(t2, e2, n2) {
  if (!Array.isArray(t2) || t2.length) return false;
  const r2 = qt(t2);
  return !!(1 & r2) || !(!e2 || !(Array.isArray(e2) ? e2.includes(n2) : e2.has(n2))) && (Zt(t2, 1 | r2), true);
}
var le;
var fe = [];
function de(t2) {
  if (2 & t2) throw Error();
}
Zt(fe, 55), le = Object.freeze(fe);
var pe = class _pe {
  constructor(t2, e2, n2) {
    this.l = 0, this.g = t2, this.h = e2, this.m = n2;
  }
  next() {
    if (this.l < this.g.length) {
      const t2 = this.g[this.l++];
      return { done: false, value: this.h ? this.h.call(this.m, t2) : t2 };
    }
    return { done: true, value: void 0 };
  }
  [Symbol.iterator]() {
    return new _pe(this.g, this.h, this.m);
  }
};
var ge = {};
var me;
var ye;
function ve(t2, e2) {
  (e2 = me ? e2[me] : void 0) && (t2[me] = Vt(e2));
}
function _e(t2) {
  return (t2 = Error(t2)).__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = "warning", t2;
}
function we(t2) {
  return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
}
function Te(t2) {
  return null == t2 || "boolean" == typeof t2 ? t2 : "number" == typeof t2 ? !!t2 : void 0;
}
Object.freeze(new class {
}()), Object.freeze(new class {
}());
var Ee = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function be(t2) {
  const e2 = typeof t2;
  return "number" === e2 ? Number.isFinite(t2) : "string" === e2 && Ee.test(t2);
}
function Ae(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2) {
    if (!t2) return;
    t2 = +t2;
  }
  return "number" == typeof t2 && Number.isFinite(t2) ? 0 | t2 : void 0;
}
function xe(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2) {
    if (!t2) return;
    t2 = +t2;
  }
  return "number" == typeof t2 && Number.isFinite(t2) ? t2 >>> 0 : void 0;
}
function ke(t2) {
  return "-" !== t2[0] && (20 > t2.length || 20 === t2.length && 184467 > Number(t2.substring(0, 6)));
}
function Se(t2) {
  return "-" === t2[0] ? 20 > t2.length || 20 === t2.length && -922337 < Number(t2.substring(0, 7)) : 19 > t2.length || 19 === t2.length && 922337 > Number(t2.substring(0, 6));
}
function Le(t2) {
  return t2 = Math.trunc(t2), Number.isSafeInteger(t2) || (J(t2), t2 = tt($, q)), t2;
}
function Re(t2) {
  var e2 = Math.trunc(Number(t2));
  return Number.isSafeInteger(e2) ? String(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), Se(t2) || (it(t2), t2 = rt()), t2);
}
function Fe(t2) {
  return null == t2 ? t2 : be(t2) ? "number" == typeof t2 ? Le(t2) : Re(t2) : void 0;
}
function Me(t2) {
  if ("string" != typeof t2) throw Error();
  return t2;
}
function Oe(t2) {
  if (null != t2 && "string" != typeof t2) throw Error();
  return t2;
}
function Ie(t2) {
  return null == t2 || "string" == typeof t2 ? t2 : void 0;
}
function Ce(t2, e2, n2, r2) {
  if (null != t2 && "object" == typeof t2 && t2.W === ie) return t2;
  if (!Array.isArray(t2)) return n2 ? 2 & r2 ? (t2 = e2[Wt]) ? e2 = t2 : (te((t2 = new e2()).s), e2 = e2[Wt] = t2) : e2 = new e2() : e2 = void 0, e2;
  let i2 = n2 = qt(t2);
  return 0 === i2 && (i2 |= 32 & r2), i2 |= 2 & r2, i2 !== n2 && Zt(t2, i2), new e2(t2);
}
function Pe(t2, e2, n2) {
  if (e2) {
    var r2 = !!r2;
    if (!be(e2 = t2)) throw _e("int64");
    "string" == typeof e2 ? r2 = Re(e2) : r2 ? (r2 = Math.trunc(e2), Number.isSafeInteger(r2) ? r2 = String(r2) : Se(e2 = String(r2)) ? r2 = e2 : (J(r2), r2 = rt())) : r2 = Le(e2);
  } else r2 = Fe(t2);
  return "string" == typeof (n2 = null == (t2 = r2) ? n2 ? 0 : void 0 : t2) && (r2 = +n2, Number.isSafeInteger(r2)) ? r2 : n2;
}
var Ue;
var De;
var Be;
function Ne(t2) {
  switch (typeof t2) {
    case "boolean":
      return De || (De = [0, void 0, true]);
    case "number":
      return 0 < t2 ? void 0 : 0 === t2 ? Be || (Be = [0, void 0]) : [-t2, void 0];
    case "string":
      return [0, t2];
    case "object":
      return t2;
  }
}
function Ge(t2, e2) {
  return je(t2, e2[0], e2[1]);
}
function je(t2, e2, n2) {
  if (null == t2 && (t2 = Ue), Ue = void 0, null == t2) {
    var r2 = 96;
    n2 ? (t2 = [n2], r2 |= 512) : t2 = [], e2 && (r2 = -16760833 & r2 | (1023 & e2) << 14);
  } else {
    if (!Array.isArray(t2)) throw Error();
    if (64 & (r2 = qt(t2))) return ye && delete t2[ye], t2;
    if (r2 |= 64, n2 && (r2 |= 512, n2 !== t2[0])) throw Error();
    t: {
      const i2 = (n2 = t2).length;
      if (i2) {
        const t3 = i2 - 1;
        if (ae(n2[t3])) {
          if (1024 <= (e2 = t3 - (+!!(512 & (r2 |= 256)) - 1))) throw Error();
          r2 = -16760833 & r2 | (1023 & e2) << 14;
          break t;
        }
      }
      if (e2) {
        if (1024 < (e2 = Math.max(e2, i2 - (+!!(512 & r2) - 1)))) throw Error();
        r2 = -16760833 & r2 | (1023 & e2) << 14;
      }
    }
  }
  return Zt(t2, r2), t2;
}
var Ve = function() {
  try {
    return new class extends Map {
      constructor() {
        super();
      }
    }(), false;
  } catch (e2) {
    return true;
  }
}();
var Xe = class {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t2) {
    return this.g.get(t2);
  }
  set(t2, e2) {
    return this.g.set(t2, e2), this.size = this.g.size, this;
  }
  delete(t2) {
    return t2 = this.g.delete(t2), this.size = this.g.size, t2;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t2) {
    return this.g.has(t2);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t2, e2) {
    return this.g.forEach(t2, e2);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var ze = Ve ? (Object.setPrototypeOf(Xe.prototype, Map.prototype), Object.defineProperties(Xe.prototype, { size: { value: 0, configurable: true, enumerable: true, writable: true } }), Xe) : class extends Map {
  constructor() {
    super();
  }
};
function We(t2) {
  return t2;
}
function He(t2) {
  if (2 & t2.O) throw Error("Cannot mutate an immutable Map");
}
var Ye = class extends ze {
  constructor(t2, e2, n2 = We, r2 = We) {
    super();
    let i2 = qt(t2);
    i2 |= 64, Zt(t2, i2), this.O = i2, this.V = e2, this.R = n2 || We, this.Y = this.V ? Ke : r2 || We;
    for (let s2 = 0; s2 < t2.length; s2++) {
      const o2 = t2[s2], a2 = n2(o2[0], false, true);
      let c2 = o2[1];
      e2 ? void 0 === c2 && (c2 = null) : c2 = r2(o2[1], false, true, void 0, void 0, i2), super.set(a2, c2);
    }
  }
  pa(t2 = $e) {
    return this.X(t2);
  }
  X(t2 = $e) {
    const e2 = [], n2 = super.entries();
    for (var r2; !(r2 = n2.next()).done; ) (r2 = r2.value)[0] = t2(r2[0]), r2[1] = t2(r2[1]), e2.push(r2);
    return e2;
  }
  clear() {
    He(this), super.clear();
  }
  delete(t2) {
    return He(this), super.delete(this.R(t2, true, false));
  }
  entries() {
    var t2 = this.ma();
    return new pe(t2, qe, this);
  }
  keys() {
    return this.Ma();
  }
  values() {
    var t2 = this.ma();
    return new pe(t2, Ye.prototype.get, this);
  }
  forEach(t2, e2) {
    super.forEach((n2, r2) => {
      t2.call(e2, this.get(r2), r2, this);
    });
  }
  set(t2, e2) {
    return He(this), null == (t2 = this.R(t2, true, false)) ? this : null == e2 ? (super.delete(t2), this) : super.set(t2, this.Y(e2, true, true, this.V, false, this.O));
  }
  Ta(t2) {
    const e2 = this.R(t2[0], false, true);
    t2 = t2[1], t2 = this.V ? void 0 === t2 ? null : t2 : this.Y(t2, false, true, void 0, false, this.O), super.set(e2, t2);
  }
  has(t2) {
    return super.has(this.R(t2, false, false));
  }
  get(t2) {
    t2 = this.R(t2, false, false);
    const e2 = super.get(t2);
    if (void 0 !== e2) {
      var n2 = this.V;
      return n2 ? ((n2 = this.Y(e2, false, true, n2, this.xa, this.O)) !== e2 && super.set(t2, n2), n2) : e2;
    }
  }
  ma() {
    return Array.from(super.keys());
  }
  Ma() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Ke(t2, e2, n2, r2, i2, s2) {
  return t2 = Ce(t2, r2, n2, s2), i2 && (t2 = sn(t2)), t2;
}
function $e(t2) {
  return t2;
}
function qe(t2) {
  return [t2, this.get(t2)];
}
function Je(t2, e2, n2, r2, i2, s2) {
  if (null != t2) {
    if (Array.isArray(t2)) t2 = i2 && 0 == t2.length && 1 & qt(t2) ? void 0 : s2 && 2 & qt(t2) ? t2 : Ze(t2, e2, n2, void 0 !== r2, i2, s2);
    else if (ae(t2)) {
      const o2 = {};
      for (let a2 in t2) o2[a2] = Je(t2[a2], e2, n2, r2, i2, s2);
      t2 = o2;
    } else t2 = e2(t2, r2);
    return t2;
  }
}
function Ze(t2, e2, n2, r2, i2, s2) {
  const o2 = r2 || n2 ? qt(t2) : 0;
  r2 = r2 ? !!(32 & o2) : void 0;
  const a2 = Vt(t2);
  for (let t3 = 0; t3 < a2.length; t3++) a2[t3] = Je(a2[t3], e2, n2, r2, i2, s2);
  return n2 && (ve(a2, t2), n2(o2, a2)), a2;
}
function Qe(t2) {
  return Je(t2, tn, void 0, void 0, false, false);
}
function tn(t2) {
  return t2.W === ie ? t2.toJSON() : t2 instanceof Ye ? t2.pa(Qe) : function(t3) {
    switch (typeof t3) {
      case "number":
        return isFinite(t3) ? t3 : String(t3);
      case "boolean":
        return t3 ? 1 : 0;
      case "object":
        if (t3) {
          if (Array.isArray(t3)) return ce || !ue(t3, void 0, 9999) ? t3 : void 0;
          if (F(t3)) return x(t3);
          if (t3 instanceof B) {
            const e2 = t3.Z;
            return null == e2 ? "" : "string" == typeof e2 ? e2 : t3.Z = x(e2);
          }
          if (t3 instanceof Ye) return t3 = t3.pa(), W || 0 !== t3.length ? t3 : void 0;
        }
    }
    return t3;
  }(t2);
}
function en(t2, e2, n2 = ne) {
  if (null != t2) {
    if (b && t2 instanceof Uint8Array) return e2 ? t2 : new Uint8Array(t2);
    if (Array.isArray(t2)) {
      var r2 = qt(t2);
      return 2 & r2 ? t2 : (e2 && (e2 = 0 === r2 || !!(32 & r2) && !(64 & r2 || !(16 & r2))), e2 ? (Zt(t2, -12293 & (34 | r2)), t2) : Ze(t2, en, 4 & r2 ? ne : n2, true, false, true));
    }
    return t2.W === ie ? (n2 = t2.s, t2 = 2 & (r2 = Jt(n2)) ? t2 : nn(t2, n2, r2, true)) : t2 instanceof Ye && (n2 = te(t2.X(en)), t2 = new Ye(n2, t2.V, t2.R, t2.Y)), t2;
  }
}
function nn(t2, e2, n2, r2) {
  return t2 = t2.constructor, Ue = e2 = rn(e2, n2, r2), e2 = new t2(e2), Ue = void 0, e2;
}
function rn(t2, e2, n2) {
  const r2 = n2 || 2 & e2 ? ne : ee, i2 = !!(32 & e2);
  return t2 = function(t3, e3, n3) {
    const r3 = Vt(t3);
    var i3 = r3.length;
    const s2 = 256 & e3 ? r3[i3 - 1] : void 0;
    for (i3 += s2 ? -1 : 0, e3 = 512 & e3 ? 1 : 0; e3 < i3; e3++) r3[e3] = n3(r3[e3]);
    if (s2) {
      e3 = r3[e3] = {};
      for (const t4 in s2) e3[t4] = n3(s2[t4]);
    }
    return ve(r3, t3), r3;
  }(t2, e2, (t3) => en(t3, i2, r2)), Ht(t2, 32 | (n2 ? 2 : 0)), t2;
}
function sn(t2) {
  const e2 = t2.s, n2 = Jt(e2);
  return 2 & n2 ? nn(t2, e2, n2, false) : t2;
}
function on(t2, e2) {
  return an(t2 = t2.s, Jt(t2), e2);
}
function an(t2, e2, n2, r2) {
  if (-1 === n2) return null;
  if (n2 >= re(e2)) {
    if (256 & e2) return t2[t2.length - 1][n2];
  } else {
    var i2 = t2.length;
    if (r2 && 256 & e2 && null != (r2 = t2[i2 - 1][n2])) return r2;
    if ((e2 = n2 + (+!!(512 & e2) - 1)) < i2) return t2[e2];
  }
}
function cn(t2, e2, n2, r2) {
  const i2 = t2.s;
  let s2 = Jt(i2);
  return de(s2), hn(i2, s2, e2, n2, r2), t2;
}
function hn(t2, e2, n2, r2, i2) {
  var s2 = re(e2);
  if (n2 >= s2 || i2) {
    if (i2 = e2, 256 & e2) s2 = t2[t2.length - 1];
    else {
      if (null == r2) return i2;
      s2 = t2[s2 + (+!!(512 & e2) - 1)] = {}, i2 |= 256;
    }
    return s2[n2] = r2, i2 !== e2 && Zt(t2, i2), i2;
  }
  return t2[n2 + (+!!(512 & e2) - 1)] = r2, 256 & e2 && (n2 in (t2 = t2[t2.length - 1]) && delete t2[n2]), e2;
}
function un(t2, e2, n2, r2, i2) {
  var s2 = 2 & e2;
  let o2 = an(t2, e2, n2, i2);
  Array.isArray(o2) || (o2 = le);
  const a2 = !(2 & r2);
  r2 = !(1 & r2);
  const c2 = !!(32 & e2);
  let h2 = qt(o2);
  return 0 !== h2 || !c2 || s2 || a2 ? 1 & h2 || (h2 |= 1, Zt(o2, h2)) : (h2 |= 33, Zt(o2, h2)), s2 ? (t2 = false, 2 & h2 || (te(o2), t2 = !!(4 & h2)), (r2 || t2) && Object.freeze(o2)) : (s2 = !!(2 & h2) || !!(2048 & h2), r2 && s2 ? (o2 = Vt(o2), r2 = 1, c2 && !a2 && (r2 |= 32), Zt(o2, r2), hn(t2, e2, n2, o2, i2)) : a2 && 32 & h2 && !s2 && Kt(o2, 32)), o2;
}
function ln(t2, e2) {
  t2 = t2.s;
  let n2 = Jt(t2);
  const r2 = an(t2, n2, e2), i2 = we(r2);
  return null != i2 && i2 !== r2 && hn(t2, n2, e2, i2), i2;
}
function fn(t2) {
  t2 = t2.s;
  let e2 = Jt(t2);
  const n2 = an(t2, e2, 1), r2 = he(n2, true, !!(34 & e2));
  return null != r2 && r2 !== n2 && hn(t2, e2, 1, r2), r2;
}
function dn(t2, e2, n2) {
  t2 = t2.s;
  let r2 = Jt(t2);
  const i2 = 2 & r2 ? 1 : 2;
  let s2 = pn(t2, r2, e2);
  var o2 = qt(s2);
  if (!(4 & o2)) {
    (4 & o2 || Object.isFrozen(s2)) && (s2 = Vt(s2), o2 = On(o2, r2, false), r2 = hn(t2, r2, e2, s2));
    var a2 = 0;
    let i3 = 0;
    for (; a2 < s2.length; a2++) {
      const t3 = n2(s2[a2]);
      null != t3 && (s2[i3++] = t3);
    }
    i3 < a2 && (s2.length = i3), o2 = $t(o2 = gn(o2, r2, false), 20, true), o2 = $t(o2, 4096, false), o2 = $t(o2, 8192, false), Zt(s2, o2), 2 & o2 && Object.freeze(s2);
  }
  return mn(o2) || (n2 = o2, (o2 = (a2 = 1 === i2) ? $t(o2, 2, true) : $t(o2, 32, false)) !== n2 && Zt(s2, o2), a2 && Object.freeze(s2)), 2 === i2 && mn(o2) && (s2 = Vt(s2), o2 = On(o2, r2, false), Zt(s2, o2), hn(t2, r2, e2, s2)), s2;
}
function pn(t2, e2, n2) {
  return t2 = an(t2, e2, n2), Array.isArray(t2) ? t2 : le;
}
function gn(t2, e2, n2) {
  return 0 === t2 && (t2 = On(t2, e2, n2)), $t(t2, 1, true);
}
function mn(t2) {
  return !!(2 & t2) && !!(4 & t2) || !!(2048 & t2);
}
var yn;
function vn() {
  return yn != null ? yn : yn = new Ye(te([]), void 0, void 0, void 0, ge);
}
function _n(t2) {
  t2 = Vt(t2);
  for (let e2 = 0; e2 < t2.length; e2++) {
    const n2 = t2[e2] = Vt(t2[e2]);
    Array.isArray(n2[1]) && (n2[1] = te(n2[1]));
  }
  return t2;
}
function wn(t2, e2, n2) {
  {
    const o2 = t2.s;
    let a2 = Jt(o2);
    if (de(a2), null == n2) hn(o2, a2, e2);
    else {
      var r2, i2 = t2 = qt(n2), s2 = !!(2 & t2) || Object.isFrozen(n2);
      if ((r2 = !s2) && (r2 = false), !(4 & t2)) for (t2 = 21, s2 && (n2 = Vt(n2), i2 = 0, t2 = On(t2, a2, true)), s2 = 0; s2 < n2.length; s2++) n2[s2] = Me(n2[s2]);
      r2 && (n2 = Vt(n2), i2 = 0, t2 = On(t2, a2, true)), t2 !== i2 && Zt(n2, t2), hn(o2, a2, e2, n2);
    }
  }
}
function Tn(t2, e2, n2, r2) {
  const i2 = Jt(t2);
  de(i2), t2 = un(t2, i2, e2, 2), r2 = n2(r2, !!(4 & (e2 = qt(t2))) && !!(4096 & e2)), t2.push(r2);
}
function En(t2) {
  return t2;
}
function bn(t2, e2) {
  return An(t2 = t2.s, Jt(t2), ps) === e2 ? e2 : -1;
}
function An(t2, e2, n2) {
  let r2 = 0;
  for (let i2 = 0; i2 < n2.length; i2++) {
    const s2 = n2[i2];
    null != an(t2, e2, s2) && (0 !== r2 && (e2 = hn(t2, e2, r2)), r2 = s2);
  }
  return r2;
}
function xn(t2, e2, n2, r2) {
  let i2 = Jt(t2);
  de(i2);
  const s2 = an(t2, i2, n2, r2);
  let o2;
  if (null != s2 && s2.W === ie) return (e2 = sn(s2)) !== s2 && hn(t2, i2, n2, e2, r2), e2.s;
  if (Array.isArray(s2)) {
    const t3 = qt(s2);
    o2 = 2 & t3 ? rn(s2, t3, false) : s2, o2 = Ge(o2, e2);
  } else o2 = Ge(void 0, e2);
  return o2 !== s2 && hn(t2, i2, n2, o2, r2), o2;
}
function kn(t2, e2, n2, r2) {
  t2 = t2.s;
  let i2 = Jt(t2);
  const s2 = an(t2, i2, n2, r2);
  return (e2 = Ce(s2, e2, false, i2)) !== s2 && null != e2 && hn(t2, i2, n2, e2, r2), e2;
}
function Sn(t2, e2, n2, r2 = false) {
  if (null == (e2 = kn(t2, e2, n2, r2))) return e2;
  t2 = t2.s;
  let i2 = Jt(t2);
  if (!(2 & i2)) {
    const s2 = sn(e2);
    s2 !== e2 && hn(t2, i2, n2, e2 = s2, r2);
  }
  return e2;
}
function Ln(t2, e2, n2, r2, i2, s2) {
  var o2 = !!(2 & e2), a2 = o2 ? 1 : 2;
  const c2 = 1 === a2;
  a2 = 2 === a2, i2 = !!i2, s2 && (s2 = !o2), o2 = pn(t2, e2, r2);
  var h2 = qt(o2);
  const u2 = !!(4 & h2);
  if (!u2) {
    var l2 = o2, f2 = e2;
    const t3 = !!(2 & (h2 = gn(h2, e2, i2)));
    t3 && (f2 = $t(f2, 2, true));
    let r3 = !t3, s3 = true, a3 = 0, c3 = 0;
    for (; a3 < l2.length; a3++) {
      const e3 = Ce(l2[a3], n2, false, f2);
      if (e3 instanceof n2) {
        if (!t3) {
          const t4 = !!(2 & qt(e3.s));
          r3 && (r3 = !t4), s3 && (s3 = t4);
        }
        l2[c3++] = e3;
      }
    }
    c3 < a3 && (l2.length = c3), h2 = $t(h2, 4, true), h2 = $t(h2, 16, s3), h2 = $t(h2, 8, r3), Zt(l2, h2), t3 && Object.freeze(l2);
  }
  if (n2 = !!(8 & h2) || c2 && !o2.length, s2 && !n2) {
    for (mn(h2) && (o2 = Vt(o2), h2 = On(h2, e2, i2), e2 = hn(t2, e2, r2, o2)), s2 = o2, n2 = h2, l2 = 0; l2 < s2.length; l2++) (h2 = s2[l2]) !== (f2 = sn(h2)) && (s2[l2] = f2);
    n2 = $t(n2, 8, true), n2 = $t(n2, 16, !s2.length), Zt(s2, n2), h2 = n2;
  }
  return mn(h2) || (s2 = h2, c2 ? h2 = $t(h2, !o2.length || 16 & h2 && (!u2 || 32 & h2) ? 2 : 2048, true) : i2 || (h2 = $t(h2, 32, false)), h2 !== s2 && Zt(o2, h2), c2 && Object.freeze(o2)), a2 && mn(h2) && (o2 = Vt(o2), h2 = On(h2, e2, i2), Zt(o2, h2), hn(t2, e2, r2, o2)), o2;
}
function Rn(t2, e2, n2) {
  t2 = t2.s;
  const r2 = Jt(t2);
  return Ln(t2, r2, e2, n2, false, !(2 & r2));
}
function Fn(t2, e2, n2, r2, i2) {
  return null == r2 && (r2 = void 0), cn(t2, n2, r2, i2);
}
function Mn(t2, e2, n2, r2) {
  null == r2 && (r2 = void 0), t2 = t2.s;
  let i2 = Jt(t2);
  de(i2), (n2 = An(t2, i2, n2)) && n2 !== e2 && null != r2 && (i2 = hn(t2, i2, n2)), hn(t2, i2, e2, r2);
}
function On(t2, e2, n2) {
  return t2 = $t(t2, 2, !!(2 & e2)), t2 = $t(t2, 32, !!(32 & e2) && n2), $t(t2, 2048, false);
}
function In(t2, e2, n2) {
  t2 = t2.s;
  const r2 = Jt(t2);
  de(r2), t2 = Ln(t2, r2, e2, 1, true), e2 = null != n2 ? n2 : new e2(), t2.push(e2), 2 & qt(e2.s) ? Kt(t2, 8) : Kt(t2, 16);
}
function Cn(t2, e2) {
  return Ae(on(t2, e2));
}
function Pn(t2, e2) {
  return Ie(on(t2, e2));
}
function Un(t2) {
  return t2 != null ? t2 : 0;
}
function Dn(t2, e2) {
  return Un(ln(t2, e2));
}
function Bn(t2, e2, n2) {
  if (null != n2 && "boolean" != typeof n2) throw t2 = typeof n2, Error(`Expected boolean but got ${"object" != t2 ? t2 : n2 ? Array.isArray(n2) ? "array" : t2 : "null"}: ${n2}`);
  cn(t2, e2, n2);
}
function Nn(t2, e2, n2) {
  if (null != n2) {
    if ("number" != typeof n2) throw _e("int32");
    if (!Number.isFinite(n2)) throw _e("int32");
    n2 |= 0;
  }
  cn(t2, e2, n2);
}
function Gn(t2, e2, n2) {
  if (null != n2 && "number" != typeof n2) throw Error(`Value of float/double field must be a number, found ${typeof n2}: ${n2}`);
  cn(t2, e2, n2);
}
function jn(t2, e2, n2) {
  e2.g ? e2.m(t2, e2.g, e2.h, n2, true) : e2.m(t2, e2.h, n2, true);
}
Ye.prototype.toJSON = void 0, Ye.prototype.Na = se;
var Vn = class {
  constructor(t2, e2) {
    this.s = je(t2, e2);
  }
  toJSON() {
    return Xn(this, Ze(this.s, tn, void 0, void 0, false, false), true);
  }
  l() {
    var t2 = uo;
    return t2.g ? t2.l(this, t2.g, t2.h, true) : t2.l(this, t2.h, t2.defaultValue, true);
  }
  clone() {
    const t2 = this.s;
    return nn(this, t2, Jt(t2), false);
  }
  L() {
    return !!(2 & qt(this.s));
  }
};
function Xn(t2, e2, n2) {
  const r2 = t2.constructor.A;
  var i2 = Jt(n2 ? t2.s : e2), s2 = re(i2), o2 = false;
  if (r2 && ce) {
    if (!n2) {
      var a2;
      if ((e2 = Vt(e2)).length && ae(a2 = e2[e2.length - 1])) {
        for (o2 = 0; o2 < r2.length; o2++) if (r2[o2] >= s2) {
          Object.assign(e2[e2.length - 1] = {}, a2);
          break;
        }
      }
      o2 = true;
    }
    var c2;
    s2 = e2, n2 = !n2, t2 = re(a2 = Jt(t2.s)), a2 = +!!(512 & a2) - 1;
    for (let e3 = 0; e3 < r2.length; e3++) {
      var h2 = r2[e3];
      if (h2 < t2) {
        var u2 = s2[h2 += a2];
        null == u2 ? s2[h2] = n2 ? le : Qt() : n2 && u2 !== le && Yt(u2);
      } else {
        if (!c2) {
          var l2 = void 0;
          s2.length && ae(l2 = s2[s2.length - 1]) ? c2 = l2 : s2.push(c2 = {});
        }
        u2 = c2[h2], null == c2[h2] ? c2[h2] = n2 ? le : Qt() : n2 && u2 !== le && Yt(u2);
      }
    }
  }
  if (!(c2 = e2.length)) return e2;
  let f2, d2;
  if (ae(l2 = e2[c2 - 1])) {
    t: {
      var p2 = l2;
      for (var g2 in s2 = {}, n2 = false, p2) t2 = p2[g2], Array.isArray(t2) && (a2 = t2, (!H && ue(t2, r2, +g2) || !W && oe(t2) && 0 === t2.size) && (t2 = null), t2 != a2 && (n2 = true)), null != t2 ? s2[g2] = t2 : n2 = true;
      if (n2) {
        for (let t3 in s2) {
          p2 = s2;
          break t;
        }
        p2 = null;
      }
    }
    p2 != l2 && (f2 = true), c2--;
  }
  for (i2 = +!!(512 & i2) - 1; 0 < c2 && (null == (l2 = e2[g2 = c2 - 1]) || !H && ue(l2, r2, g2 - i2) || !W && oe(l2) && 0 === l2.size); c2--) d2 = true;
  return f2 || d2 ? (e2 = o2 ? e2 : Array.prototype.slice.call(e2, 0, c2), o2 && (e2.length = c2), p2 && e2.push(p2), e2) : e2;
}
function zn(t2) {
  return Array.isArray(t2) ? t2[0] instanceof jt ? t2 : [Xr, t2] : [t2, void 0];
}
function Wn(t2, e2) {
  if (Array.isArray(e2)) {
    var n2 = qt(e2);
    if (4 & n2) return e2;
    for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
      const n3 = t2(e2[r2]);
      null != n3 && (e2[i2++] = n3);
    }
    return i2 < r2 && (e2.length = i2), Zt(e2, -12289 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
  }
}
Vn.prototype.W = ie, Vn.prototype.toString = function() {
  return Xn(this, this.s, false).toString();
};
var Hn = Symbol();
function Yn(t2) {
  let e2 = t2[Hn];
  if (!e2) {
    const n2 = tr(t2), r2 = fr(t2), i2 = r2.g;
    e2 = i2 ? (t3, e3) => i2(t3, e3, r2) : (t3, e3) => {
      for (; vt(e3) && 4 != e3.h; ) {
        var i3 = e3.m, s2 = r2[i3];
        if (!s2) {
          var o2 = r2.ha;
          o2 && (o2 = o2[i3]) && (s2 = r2[i3] = Kn(o2));
        }
        s2 && s2(e3, t3, i3) || (i3 = (s2 = e3).l, _t(s2), s2.ga ? s2 = void 0 : (o2 = s2.g.g - i3, s2.g.g = i3, s2 = mt(s2.g, o2)), i3 = t3, s2 && (me || (me = Symbol()), (o2 = i3[me]) ? o2.push(s2) : i3[me] = [s2]));
      }
      n2 === $n || n2 === qn || n2.Oa || (t3[ye || (ye = Symbol())] = n2);
    }, t2[Hn] = e2;
  }
  return e2;
}
function Kn(t2) {
  const e2 = (t2 = zn(t2))[0].g;
  if (t2 = t2[1]) {
    const n2 = Yn(t2), r2 = fr(t2).S;
    return (t3, i2, s2) => e2(t3, i2, s2, r2, n2);
  }
  return e2;
}
var $n;
var qn;
var Jn = Symbol();
function Zn(t2, e2, n2) {
  const r2 = n2[1];
  let i2;
  if (r2) {
    const n3 = r2[Jn];
    i2 = n3 ? n3.S : Ne(r2[0]), t2[e2] = n3 != null ? n3 : r2;
  }
  i2 && i2 === De ? (t2.na || (t2.na = [])).push(e2) : n2[0] && (t2.oa || (t2.oa = [])).push(e2);
}
function Qn(t2, e2) {
  return [t2.l, !e2 || 0 < e2[0] ? void 0 : e2];
}
function tr(t2) {
  var e2 = t2[Jn];
  if (e2) return e2;
  if (!(e2 = nr(t2, t2[Jn] = {}, Qn, Qn, Zn)).oa && !e2.na) {
    let n2 = true;
    for (let t3 in e2) {
      isNaN(t3) || (n2 = false);
      break;
    }
    n2 ? (e2 = Ne(t2[0]) === De, e2 = t2[Jn] = e2 ? qn || (qn = { S: Ne(true) }) : $n || ($n = {})) : e2.Oa = true;
  }
  return e2;
}
function er(t2, e2, n2) {
  t2[e2] = n2;
}
function nr(t2, e2, n2, r2, i2 = er) {
  e2.S = Ne(t2[0]);
  let s2 = 0;
  var o2 = t2[++s2];
  o2 && o2.constructor === Object && (e2.ha = o2, "function" == typeof (o2 = t2[++s2]) && (e2.g = o2, e2.h = t2[++s2], o2 = t2[++s2]));
  const a2 = {};
  for (; Array.isArray(o2) && "number" == typeof o2[0] && 0 < o2[0]; ) {
    for (var c2 = 0; c2 < o2.length; c2++) a2[o2[c2]] = o2;
    o2 = t2[++s2];
  }
  for (c2 = 1; void 0 !== o2; ) {
    let l2;
    "number" == typeof o2 && (c2 += o2, o2 = t2[++s2]);
    var h2 = void 0;
    if (o2 instanceof jt ? l2 = o2 : (l2 = zr, s2--), l2.qa) {
      o2 = t2[++s2], h2 = t2;
      var u2 = s2;
      "function" == typeof o2 && (o2 = o2(), h2[u2] = o2), h2 = o2;
    }
    for (u2 = c2 + 1, "number" == typeof (o2 = t2[++s2]) && 0 > o2 && (u2 -= o2, o2 = t2[++s2]); c2 < u2; c2++) {
      const t3 = a2[c2];
      i2(e2, c2, h2 ? r2(l2, h2, t3) : n2(l2, t3));
    }
  }
  return e2;
}
var rr = Symbol();
function ir(t2) {
  let e2 = t2[rr];
  if (!e2) {
    const n2 = cr(t2);
    e2 = (t3, e3) => pr(t3, e3, n2), t2[rr] = e2;
  }
  return e2;
}
var sr = Symbol();
function or(t2) {
  return t2.h;
}
function ar(t2, e2) {
  let n2, r2;
  const i2 = t2.h;
  return (t3, s2, o2) => i2(t3, s2, o2, r2 || (r2 = cr(e2).S), n2 || (n2 = ir(e2)));
}
function cr(t2) {
  let e2 = t2[sr];
  return e2 || (e2 = nr(t2, t2[sr] = {}, or, ar), hr in t2 && sr in t2 && (t2.length = 0), e2);
}
var hr = Symbol();
function ur(t2, e2) {
  const n2 = t2.g;
  return e2 ? (t3, r2, i2) => n2(t3, r2, i2, e2) : n2;
}
function lr(t2, e2, n2) {
  const r2 = t2.g;
  let i2, s2;
  return (t3, o2, a2) => r2(t3, o2, a2, s2 || (s2 = fr(e2).S), i2 || (i2 = Yn(e2)), n2);
}
function fr(t2) {
  let e2 = t2[hr];
  return e2 || (tr(t2), e2 = nr(t2, t2[hr] = {}, ur, lr), hr in t2 && sr in t2 && (t2.length = 0), e2);
}
function dr(t2, e2) {
  var n2 = t2[e2];
  if (n2) return n2;
  if ((n2 = t2.ha) && (n2 = n2[e2])) {
    var r2 = (n2 = zn(n2))[0].h;
    if (n2 = n2[1]) {
      const e3 = ir(n2), i2 = cr(n2).S;
      n2 = (n2 = t2.h) ? n2(i2, e3) : (t3, n3, s2) => r2(t3, n3, s2, i2, e3);
    } else n2 = r2;
    return t2[e2] = n2;
  }
}
function pr(t2, e2, n2) {
  for (var r2 = Jt(t2), i2 = +!!(512 & r2) - 1, s2 = t2.length, o2 = 512 & r2 ? 1 : 0, a2 = s2 + (256 & r2 ? -1 : 0); o2 < a2; o2++) {
    const r3 = t2[o2];
    if (null == r3) continue;
    const s3 = o2 - i2, a3 = dr(n2, s3);
    a3 && a3(e2, r3, s3);
  }
  if (256 & r2) {
    r2 = t2[s2 - 1];
    for (let t3 in r2) i2 = +t3, Number.isNaN(i2) || null != (s2 = r2[t3]) && (a2 = dr(n2, i2)) && a2(e2, s2, i2);
  }
  if (t2 = me ? t2[me] : void 0) for (Pt(e2, e2.g.end()), n2 = 0; n2 < t2.length; n2++) Pt(e2, D(t2[n2]) || O());
}
function gr(t2, e2) {
  return new jt(t2, e2, false, false);
}
function mr(t2, e2) {
  return new jt(t2, e2, true, false);
}
function yr(t2, e2) {
  return new jt(t2, e2, false, true);
}
function vr(t2, e2, n2) {
  hn(t2, Jt(t2), e2, n2);
}
var _r = yr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (t2 = wt(t2, Ge([void 0, void 0], r2), i2), de(r2 = Jt(e2)), (i2 = an(e2, r2, n2)) instanceof Ye ? 0 != (2 & i2.O) ? ((i2 = i2.X()).push(t2), hn(e2, r2, n2, i2)) : i2.Ta(t2) : Array.isArray(i2) ? (2 & qt(i2) && hn(e2, r2, n2, i2 = _n(i2)), i2.push(t2)) : hn(e2, r2, n2, [t2]), true);
}, function(t2, e2, n2, r2, i2) {
  if (e2 instanceof Ye) e2.forEach((e3, s2) => {
    Gt(t2, n2, Ge([s2, e3], r2), i2);
  });
  else if (Array.isArray(e2)) for (let s2 = 0; s2 < e2.length; s2++) {
    const o2 = e2[s2];
    Array.isArray(o2) && Gt(t2, n2, Ge(o2, r2), i2);
  }
});
function wr(t2, e2, n2) {
  t: if (null != e2) {
    if (be(e2)) {
      if ("string" == typeof e2) {
        e2 = Re(e2);
        break t;
      }
      if ("number" == typeof e2) {
        e2 = Le(e2);
        break t;
      }
    }
    e2 = void 0;
  }
  null != e2 && ("string" == typeof e2 && Lt(e2), null != e2 && (Ut(t2, n2, 0), "number" == typeof e2 ? (t2 = t2.g, J(e2), Mt(t2, $, q)) : (n2 = Lt(e2), Mt(t2.g, n2.h, n2.g))));
}
function Tr(t2, e2, n2) {
  null != (e2 = Ae(e2)) && null != e2 && (Ut(t2, n2, 0), It(t2.g, e2));
}
function Er(t2, e2, n2) {
  null != (e2 = Te(e2)) && (Ut(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
}
function br(t2, e2, n2) {
  null != (e2 = Ie(e2)) && Nt(t2, n2, h(e2));
}
function Ar(t2, e2, n2, r2, i2) {
  Gt(t2, n2, e2 instanceof Vn ? e2.s : Array.isArray(e2) ? Ge(e2, r2) : void 0, i2);
}
function xr(t2, e2, n2) {
  null != (e2 = null == e2 || "string" == typeof e2 || F(e2) || e2 instanceof B ? e2 : void 0) && Nt(t2, n2, X(e2).buffer);
}
function kr(t2, e2, n2) {
  return (5 === t2.h || 2 === t2.h) && (e2 = un(e2, Jt(e2), n2, 2, false), 2 == t2.h ? bt(t2, lt, e2) : e2.push(lt(t2.g)), true);
}
var Sr;
var Lr = gr(function(t2, e2, n2) {
  if (1 !== t2.h) return false;
  var r2 = t2.g;
  t2 = ut(r2);
  const i2 = ut(r2);
  r2 = 2 * (i2 >> 31) + 1;
  const s2 = i2 >>> 20 & 2047;
  return t2 = 4294967296 * (1048575 & i2) + t2, vr(e2, n2, 2047 == s2 ? t2 ? NaN : 1 / 0 * r2 : 0 == s2 ? r2 * Math.pow(2, -1074) * t2 : r2 * Math.pow(2, s2 - 1075) * (t2 + 4503599627370496)), true;
}, function(t2, e2, n2) {
  null != (e2 = we(e2)) && (Ut(t2, n2, 1), t2 = t2.g, (n2 = K || (K = new DataView(new ArrayBuffer(8)))).setFloat64(0, +e2, true), $ = n2.getUint32(0, true), q = n2.getUint32(4, true), Ct(t2, $), Ct(t2, q));
});
var Rr = gr(function(t2, e2, n2) {
  return 5 === t2.h && (vr(e2, n2, lt(t2.g)), true);
}, function(t2, e2, n2) {
  null != (e2 = we(e2)) && (Ut(t2, n2, 5), t2 = t2.g, Z(e2), Ct(t2, $));
});
var Fr = mr(kr, function(t2, e2, n2) {
  if (null != (e2 = Wn(we, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
    var r2 = t2, i2 = n2, s2 = e2[o2];
    null != s2 && (Ut(r2, i2, 5), r2 = r2.g, Z(s2), Ct(r2, $));
  }
});
var Mr = mr(kr, function(t2, e2, n2) {
  if (null != (e2 = Wn(we, e2)) && e2.length) {
    Ut(t2, n2, 2), Ot(t2.g, 4 * e2.length);
    for (let r2 = 0; r2 < e2.length; r2++) n2 = t2.g, Z(e2[r2]), Ct(n2, $);
  }
});
var Or = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, ot(t2.g, tt)), true);
}, wr);
var Ir = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, 0 === (t2 = ot(t2.g, tt)) ? void 0 : t2), true);
}, wr);
var Cr = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, ot(t2.g, Q)), true);
}, function(t2, e2, n2) {
  t: if (null != e2) {
    if (be(e2)) {
      if ("string" == typeof e2) {
        var r2 = Math.trunc(Number(e2));
        Number.isSafeInteger(r2) && 0 <= r2 ? e2 = String(r2) : (-1 !== (r2 = e2.indexOf(".")) && (e2 = e2.substring(0, r2)), ke(e2) || (it(e2), e2 = et($, q)));
        break t;
      }
      if ("number" == typeof e2) {
        e2 = 0 <= (e2 = Math.trunc(e2)) && Number.isSafeInteger(e2) ? e2 : function(t3) {
          if (0 > t3) {
            J(t3);
            const e3 = et($, q);
            return t3 = Number(e3), Number.isSafeInteger(t3) ? t3 : e3;
          }
          return ke(String(t3)) ? t3 : (J(t3), Q($, q));
        }(e2);
        break t;
      }
    }
    e2 = void 0;
  }
  null != e2 && ("string" == typeof e2 && xt(e2), null != e2 && (Ut(t2, n2, 0), "number" == typeof e2 ? (t2 = t2.g, J(e2), Mt(t2, $, q)) : (n2 = xt(e2), Mt(t2.g, n2.h, n2.g))));
});
var Pr = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, ct(t2.g)), true);
}, Tr);
var Ur = mr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = un(e2, Jt(e2), n2, 2, false), 2 == t2.h ? bt(t2, ct, e2) : e2.push(ct(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Wn(Ae, e2)) && e2.length) {
    n2 = Dt(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++) It(t2.g, e2[n3]);
    Bt(t2, n2);
  }
});
var Dr = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, 0 === (t2 = ct(t2.g)) ? void 0 : t2), true);
}, Tr);
var Br = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, at(t2.g)), true);
}, Er);
var Nr = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, false === (t2 = at(t2.g)) ? void 0 : t2), true);
}, Er);
var Gr = mr(function(t2, e2, n2) {
  return 2 === t2.h && (Tn(e2, n2, En, t2 = Tt(t2)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Wn(Ie, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
    var r2 = t2, i2 = n2, s2 = e2[o2];
    null != s2 && Nt(r2, i2, h(s2));
  }
});
var jr = gr(function(t2, e2, n2) {
  return 2 === t2.h && (vr(e2, n2, "" === (t2 = Tt(t2)) ? void 0 : t2), true);
}, br);
var Vr = gr(function(t2, e2, n2) {
  return 2 === t2.h && (vr(e2, n2, Tt(t2)), true);
}, br);
var Xr = yr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (wt(t2, xn(e2, r2, n2, true), i2), true);
}, Ar);
var zr = yr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (wt(t2, xn(e2, r2, n2), i2), true);
}, Ar);
Sr = new jt(function(t2, e2, n2, r2, i2) {
  if (2 !== t2.h) return false;
  r2 = Ge(void 0, r2);
  let s2 = Jt(e2);
  de(s2);
  let o2 = un(e2, s2, n2, 3);
  return s2 = Jt(e2), 4 & qt(o2) && (o2 = Vt(o2), Zt(o2, -2079 & (1 | qt(o2))), hn(e2, s2, n2, o2)), o2.push(r2), wt(t2, r2, i2), true;
}, function(t2, e2, n2, r2, i2) {
  if (Array.isArray(e2)) for (let s2 = 0; s2 < e2.length; s2++) Ar(t2, e2[s2], n2, r2, i2);
}, true, true);
var Wr = yr(function(t2, e2, n2, r2, i2, s2) {
  if (2 !== t2.h) return false;
  let o2 = Jt(e2);
  return de(o2), (s2 = An(e2, o2, s2)) && n2 !== s2 && hn(e2, o2, s2), wt(t2, e2 = xn(e2, r2, n2), i2), true;
}, Ar);
var Hr = gr(function(t2, e2, n2) {
  return 2 === t2.h && (vr(e2, n2, Et(t2)), true);
}, xr);
var Yr = mr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = un(e2, Jt(e2), n2, 2, false), 2 == t2.h ? bt(t2, ht, e2) : e2.push(ht(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Wn(xe, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
    var r2 = t2, i2 = n2, s2 = e2[o2];
    null != s2 && (Ut(r2, i2, 0), Ot(r2.g, s2));
  }
});
var Kr = gr(function(t2, e2, n2) {
  return 0 === t2.h && (vr(e2, n2, ct(t2.g)), true);
}, function(t2, e2, n2) {
  null != (e2 = Ae(e2)) && (e2 = parseInt(e2, 10), Ut(t2, n2, 0), It(t2.g, e2));
});
var $r = mr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = un(e2, Jt(e2), n2, 2, false), 2 == t2.h ? bt(t2, ft, e2) : e2.push(ct(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Wn(Ae, e2)) && e2.length) {
    n2 = Dt(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++) It(t2.g, e2[n3]);
    Bt(t2, n2);
  }
});
var qr = class {
  constructor(t2, e2) {
    this.h = t2, this.g = e2, this.l = Sn, this.m = Fn, this.defaultValue = void 0;
  }
};
function Jr(t2, e2) {
  return new qr(t2, e2);
}
function Zr(t2, e2) {
  return (n2, r2) => {
    t: {
      if (At.length) {
        const t3 = At.pop();
        t3.o(r2), dt(t3.g, n2, r2), n2 = t3;
      } else n2 = new class {
        constructor(t3, e3) {
          if (yt.length) {
            const n3 = yt.pop();
            dt(n3, t3, e3), t3 = n3;
          } else t3 = new class {
            constructor(t4, e4) {
              this.h = null, this.m = false, this.g = this.l = this.j = 0, dt(this, t4, e4);
            }
            clear() {
              this.h = null, this.m = false, this.g = this.l = this.j = 0, this.aa = false;
            }
          }(t3, e3);
          this.g = t3, this.l = this.g.g, this.h = this.m = -1, this.o(e3);
        }
        o({ ga: t3 = false } = {}) {
          this.ga = t3;
        }
      }(n2, r2);
      try {
        const r3 = new t2(), s2 = r3.s;
        Yn(e2)(s2, n2), ye && delete s2[ye];
        var i2 = r3;
        break t;
      } finally {
        n2.g.clear(), n2.m = -1, n2.h = -1, 100 > At.length && At.push(n2);
      }
      i2 = void 0;
    }
    return i2;
  };
}
function Qr(t2) {
  return function() {
    const e2 = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const t3 = this.g;
            return this.g = [], t3;
          }
        }();
      }
    }();
    pr(this.s, e2, cr(t2)), Pt(e2, e2.g.end());
    const n2 = new Uint8Array(e2.h), r2 = e2.l, i2 = r2.length;
    let s2 = 0;
    for (let t3 = 0; t3 < i2; t3++) {
      const e3 = r2[t3];
      n2.set(e3, s2), s2 += e3.length;
    }
    return e2.l = [n2], n2;
  };
}
var ti = [0, jr, gr(function(t2, e2, n2) {
  return 2 === t2.h && (vr(e2, n2, (t2 = Et(t2)) === U() ? void 0 : t2), true);
}, function(t2, e2, n2) {
  if (null != e2) {
    if (e2 instanceof Vn) {
      const r2 = e2.Va;
      return void (r2 && (e2 = r2(e2), null != e2 && Nt(t2, n2, X(e2).buffer)));
    }
    if (Array.isArray(e2)) return;
  }
  xr(t2, e2, n2);
})];
var ei = [0, Vr];
var ni = [0, Pr, Kr, Br, -1, Ur, Kr, -1];
var ri = [0, Br, -1];
var ii = class extends Vn {
  constructor() {
    super();
  }
};
ii.A = [6];
var si = [0, Br, Vr, Br, Kr, -1, $r, Vr, -1, ri, Kr];
var oi = [0, Vr, -2];
var ai = class extends Vn {
  constructor() {
    super();
  }
};
var ci = [0];
var hi = [0, Pr, Br, -2];
var ui = class extends Vn {
  constructor(t2) {
    super(t2, 2);
  }
};
var li = {};
var fi = [-2, li, Br];
li[336783863] = [0, Vr, Br, -1, Pr, [0, [1, 2, 3, 4, 5], Wr, ci, Wr, si, Wr, oi, Wr, hi, Wr, ni], ei];
var di = [0, jr, Nr];
var pi = [0, Ir, -1, Nr, -3, Ir, Ur, jr, Dr, Ir, -1, Nr, Dr, Nr, -2, jr];
var gi = [-1, {}];
var mi = [0, Vr, 1, gi];
var yi = [0, Vr, Gr, gi];
function vi(t2, e2) {
  e2 = Oe(e2), t2 = t2.s;
  let n2 = Jt(t2);
  de(n2), hn(t2, n2, 2, "" === e2 ? void 0 : e2);
}
function _i(t2, e2) {
  Tn(t2.s, 3, Me, e2);
}
function wi(t2, e2) {
  Tn(t2.s, 4, Me, e2);
}
var Ti = class extends Vn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return Fn(this, 0, 7, t2);
  }
};
Ti.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var Ei = [-500, jr, -1, Gr, -3, fi, Sr, ti, Dr, -1, mi, yi, Sr, di, jr, pi, Dr, Gr, 987, Gr];
var bi = [0, jr, -1, gi];
var Ai = [-500, Vr, -1, [-1, {}], 998, Vr];
var xi = [-500, Vr, Gr, -1, [-2, {}, Br], 997, Gr, -1];
var ki = [-500, Vr, Gr, gi, 998, Gr];
function Si(t2, e2) {
  In(t2, Ti, e2);
}
function Li(t2, e2) {
  Tn(t2.s, 10, Me, e2);
}
function Ri(t2, e2) {
  Tn(t2.s, 15, Me, e2);
}
var Fi = class extends Vn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return Fn(this, 0, 1001, t2);
  }
};
Fi.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var Mi = [-500, Sr, Ei, 4, Sr, Ai, Sr, xi, Dr, Sr, ki, Gr, Dr, mi, yi, Sr, bi, Gr, -2, pi, jr, -1, Nr, 979, gi, Sr, ti];
var Oi = Zr(Fi, Mi);
Fi.prototype.g = Qr(Mi);
var Ii = [0, Sr, [0, Pr, -2]];
var Ci = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Pi = [0, Pr, Rr, Vr, -1];
var Ui = class extends Vn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return Rn(this, Ci, 1);
  }
};
Ui.A = [1];
var Di = [0, Sr, Pi];
var Bi = Zr(Ui, Di);
var Ni = [0, Pr, Rr];
var Gi = [0, Pr, -1, Ii];
var ji = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Vi = [0, Pr, -3];
var Xi = [0, Rr, -3];
var zi = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Wi = [0, Rr, -1, Vr, Rr];
var Hi = class extends Vn {
  constructor(t2) {
    super(t2);
  }
  h() {
    return Sn(this, ji, 2);
  }
  g() {
    return Rn(this, zi, 5);
  }
};
Hi.A = [5];
var Yi = [0, Kr, Vi, Xi, Gi, Sr, Wi];
var Ki = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
Ki.A = [1, 2, 3, 8, 9];
var $i = Zr(Ki, [0, Gr, Ur, Mr, Yi, Vr, -1, Or, Sr, Ni, Gr, Or]);
var qi = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Ji = [0, Rr, -4];
var Zi = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
Zi.A = [1];
var Qi = Zr(Zi, [0, Sr, Ji]);
var ts = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var es = [0, Rr, -4];
var ns = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
ns.A = [1];
var rs = Zr(ns, [0, Sr, es]);
var is = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
is.A = [3];
var ss = [0, Pr, -1, Mr, Kr];
var os = class extends Vn {
  constructor() {
    super();
  }
};
os.prototype.g = Qr([0, Rr, -4, Or]);
var as = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var cs = [0, 1, Pr, Vr, Di];
var hs = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
hs.A = [1];
var us = Zr(hs, [0, Sr, cs, Or]);
var ls = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
ls.A = [1];
var fs = class extends Vn {
  constructor(t2) {
    super(t2);
  }
  ua() {
    const t2 = fn(this);
    return null == t2 ? U() : t2;
  }
};
var ds = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var ps = [1, 2];
var gs = [0, ps, Wr, [0, Mr], Wr, [0, Hr], Pr, Vr];
var ms = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
ms.A = [1];
var ys = Zr(ms, [0, Sr, gs, Or]);
var vs = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
vs.A = [4, 5];
var _s = [0, Vr, Pr, Rr, Gr, -1];
var ws = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Ts = [0, Br, -1];
var Es = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var bs = [1, 2, 3, 4, 5];
var As = class extends Vn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return null != fn(this);
  }
  h() {
    return null != Pn(this, 2);
  }
};
var xs = [0, Hr, Vr, [0, Pr, Or, -1], [0, Cr, Or]];
var ks = class extends Vn {
  constructor(t2) {
    super(t2);
  }
  g() {
    var _a2;
    return (_a2 = Te(on(this, 2))) != null ? _a2 : false;
  }
};
var Ss = [0, xs, Br, [0, bs, Wr, hi, Wr, si, Wr, ni, Wr, ci, Wr, oi], Kr];
var Ls = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Rs = [0, Ss, Rr, -1, Pr];
var Fs = Jr(502141897, Ls);
li[502141897] = Rs;
var Ms = [0, xs];
li[512499200] = Ms;
var Os = [0, Ms];
li[515723506] = Os;
var Is = Zr(class extends Vn {
  constructor(t2) {
    super(t2);
  }
}, [0, [0, Kr, -1, Fr, Yr], ss]);
var Cs = [0, Ss];
li[508981768] = Cs;
var Ps = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Us = [0, Ss, Rr, Cs, Br];
var Ds = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Bs = [0, Ss, Rs, Us, Rr, Os];
li[508968149] = Us;
var Ns = Jr(508968150, Ds);
li[508968150] = Bs;
var Gs = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var js = Jr(513916220, Gs);
li[513916220] = [0, Ss, Bs, Pr];
var Vs = class extends Vn {
  constructor(t2) {
    super(t2);
  }
  h() {
    return Sn(this, vs, 2);
  }
  g() {
    cn(this, 2);
  }
};
var Xs = [0, Ss, _s];
li[478825465] = Xs;
var zs = [0, Ss];
li[478825422] = zs;
var Ws = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Hs = [0, Ss, zs, Xs, -1];
var Ys = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Ks = [0, Ss, Rr, Pr];
var $s = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var qs = [0, Ss, Rr];
var Js = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Zs = [0, Ss, Ks, qs, Rr];
var Qs = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var to = [0, Ss, Zs, Hs];
li[463370452] = Hs, li[464864288] = Ks, li[474472470] = qs;
var eo = Jr(462713202, Js);
li[462713202] = Zs;
var no = Jr(479097054, Qs);
li[479097054] = to;
var ro = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var io = Jr(456383383, ro);
li[456383383] = [0, Ss, _s];
var so = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var oo = Jr(476348187, so);
li[476348187] = [0, Ss, Ts];
var ao = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var co = [0, Kr, -1];
var ho = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
ho.A = [3];
var uo = Jr(458105876, class extends Vn {
  constructor(t2) {
    super(t2);
  }
  g() {
    var t2 = this.s;
    const e2 = Jt(t2);
    var n2 = 2 & e2;
    return t2 = function(t3, e3, n3) {
      var r2 = ho;
      const i2 = 2 & e3;
      let s2 = false;
      if (null == n3) {
        if (i2) return vn();
        n3 = [];
      } else if (n3.constructor === Ye) {
        if (0 == (2 & n3.O) || i2) return n3;
        n3 = n3.X();
      } else Array.isArray(n3) ? s2 = !!(2 & qt(n3)) : n3 = [];
      if (i2) {
        if (!n3.length) return vn();
        s2 || (s2 = true, te(n3));
      } else s2 && (s2 = false, n3 = _n(n3));
      return s2 || (64 & qt(n3) ? Kt(n3, 32) : 32 & e3 && Ht(n3, 32)), hn(t3, e3, 2, r2 = new Ye(n3, r2, Pe, void 0), false), r2;
    }(t2, e2, an(t2, e2, 2)), null == t2 || !n2 && ho && (t2.xa = true), n2 = t2;
  }
});
li[458105876] = [0, co, _r, [true, Or, [0, Vr, -1, Gr]]];
var lo = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var fo = Jr(458105758, lo);
li[458105758] = [0, Ss, Vr, co];
var po = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
po.A = [5, 6];
var go = Jr(443442058, po);
li[443442058] = [0, Ss, Vr, Pr, Rr, Gr, -1];
var mo = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var yo = [0, Ss, Rr, -1, Pr];
li[514774813] = yo;
var vo = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var _o = [0, Ss, Rr, Br];
var wo = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var To = [0, Ss, yo, _o, Rr];
li[518928384] = _o;
var Eo = Jr(516587230, wo);
function bo(t2, e2) {
  return e2 = e2 ? e2.clone() : new vs(), void 0 !== t2.displayNamesLocale ? cn(e2, 1, Oe(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && cn(e2, 1), void 0 !== t2.maxResults ? Nn(e2, 2, t2.maxResults) : "maxResults" in t2 && cn(e2, 2), void 0 !== t2.scoreThreshold ? Gn(e2, 3, t2.scoreThreshold) : "scoreThreshold" in t2 && cn(e2, 3), void 0 !== t2.categoryAllowlist ? wn(e2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && cn(e2, 4), void 0 !== t2.categoryDenylist ? wn(e2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && cn(e2, 5), e2;
}
function Ao(t2, e2 = -1, n2 = "") {
  return { categories: t2.map((t3) => {
    var _a2, _b, _c2, _d, _e2, _f;
    return { index: (_a2 = Un(Cn(t3, 1))) != null ? _a2 : -1, score: (_b = Dn(t3, 2)) != null ? _b : 0, categoryName: (_d = (_c2 = Pn(t3, 3)) != null ? _c2 : "") != null ? _d : "", displayName: (_f = (_e2 = Pn(t3, 4)) != null ? _e2 : "") != null ? _f : "" };
  }), headIndex: e2, headName: n2 };
}
function xo(t2) {
  var _a2, _b, _c2, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m;
  var e2 = dn(t2, 3, we), n2 = dn(t2, 2, Ae), r2 = dn(t2, 1, Ie), i2 = dn(t2, 9, Ie);
  const s2 = { categories: [], keypoints: [] };
  for (let t3 = 0; t3 < e2.length; t3++) s2.categories.push({ score: e2[t3], index: (_a2 = n2[t3]) != null ? _a2 : -1, categoryName: (_b = r2[t3]) != null ? _b : "", displayName: (_c2 = i2[t3]) != null ? _c2 : "" });
  if ((e2 = (_d = Sn(t2, Hi, 4)) == null ? void 0 : _d.h()) && (s2.boundingBox = { originX: (_e2 = Cn(e2, 1)) != null ? _e2 : 0, originY: (_f = Cn(e2, 2)) != null ? _f : 0, width: (_g = Cn(e2, 3)) != null ? _g : 0, height: (_h = Cn(e2, 4)) != null ? _h : 0, angle: 0 }), (_i2 = Sn(t2, Hi, 4)) == null ? void 0 : _i2.g().length) for (const e3 of Sn(t2, Hi, 4).g()) s2.keypoints.push({ x: (_j = ln(e3, 1)) != null ? _j : 0, y: (_k = ln(e3, 2)) != null ? _k : 0, score: (_l = ln(e3, 4)) != null ? _l : 0, label: (_m = Pn(e3, 3)) != null ? _m : "" });
  return s2;
}
function ko(t2) {
  var _a2, _b, _c2;
  const e2 = [];
  for (const n2 of Rn(t2, ts, 1)) e2.push({ x: (_a2 = Dn(n2, 1)) != null ? _a2 : 0, y: (_b = Dn(n2, 2)) != null ? _b : 0, z: (_c2 = Dn(n2, 3)) != null ? _c2 : 0 });
  return e2;
}
function So(t2) {
  var _a2, _b, _c2;
  const e2 = [];
  for (const n2 of Rn(t2, qi, 1)) e2.push({ x: (_a2 = Dn(n2, 1)) != null ? _a2 : 0, y: (_b = Dn(n2, 2)) != null ? _b : 0, z: (_c2 = Dn(n2, 3)) != null ? _c2 : 0 });
  return e2;
}
function Lo(t2) {
  return Array.from(t2, (t3) => 127 < t3 ? t3 - 256 : t3);
}
function Ro(t2, e2) {
  if (t2.length !== e2.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${e2.length}).`);
  let n2 = 0, r2 = 0, i2 = 0;
  for (let s2 = 0; s2 < t2.length; s2++) n2 += t2[s2] * e2[s2], r2 += t2[s2] * t2[s2], i2 += e2[s2] * e2[s2];
  if (0 >= r2 || 0 >= i2) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return n2 / Math.sqrt(r2 * i2);
}
var Fo;
li[516587230] = To;
var Mo = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
function Oo() {
  return __async(this, null, function* () {
    if (void 0 === Fo) try {
      yield WebAssembly.instantiate(Mo), Fo = true;
    } catch (e2) {
      Fo = false;
    }
    return Fo;
  });
}
function Io(t2, e2 = "") {
  return __async(this, null, function* () {
    const n2 = (yield Oo()) ? "wasm_internal" : "wasm_nosimd_internal";
    return { wasmLoaderPath: `${e2}/${t2}_${n2}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm` };
  });
}
var Co = class {
};
function Po() {
  const t2 = navigator.userAgent;
  return t2.includes("Safari") && !t2.includes("Chrome");
}
function Uo(t2) {
  return __async(this, null, function* () {
    if ("function" != typeof importScripts) {
      const e2 = document.createElement("script");
      return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
        e2.addEventListener("load", () => {
          t3();
        }, false), e2.addEventListener("error", (t4) => {
          n2(t4);
        }, false), document.body.appendChild(e2);
      });
    }
    importScripts(t2.toString());
  });
}
function Do(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.i.stringToNewUTF8(e2)), t2.i._free(e2);
}
function Bo(t2, e2, n2) {
  if (!t2.i.canvas) throw Error("No OpenGL canvas configured.");
  if (n2 ? t2.i._bindTextureToStream(n2) : t2.i._bindTextureToCanvas(), !(n2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  return t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, e2), t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, false), e2.videoWidth ? (n2 = e2.videoWidth, e2 = e2.videoHeight) : e2.naturalWidth ? (n2 = e2.naturalWidth, e2 = e2.naturalHeight) : (n2 = e2.width, e2 = e2.height), !t2.l || n2 === t2.i.canvas.width && e2 === t2.i.canvas.height || (t2.i.canvas.width = n2, t2.i.canvas.height = e2), [n2, e2];
}
function No(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const r2 = new Uint32Array(e2.length);
  for (let n3 = 0; n3 < e2.length; n3++) r2[n3] = t2.i.stringToNewUTF8(e2[n3]);
  e2 = t2.i._malloc(4 * r2.length), t2.i.HEAPU32.set(r2, e2 >> 2), n2(e2);
  for (const e3 of r2) t2.i._free(e3);
  t2.i._free(e2);
}
function Go(t2, e2, n2) {
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = n2;
}
function jo(t2, e2, n2) {
  let r2 = [];
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = (t3, e3, i2) => {
    e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
  };
}
Co.forVisionTasks = function(t2) {
  return Io("vision", t2);
}, Co.forTextTasks = function(t2) {
  return Io("text", t2);
}, Co.forAudioTasks = function(t2) {
  return Io("audio", t2);
}, Co.isSimdSupported = function() {
  return Oo();
};
function Vo(t2, e2, n2, r2) {
  return __async(this, null, function* () {
    return t2 = yield ((t3, e3, n3, r3, i2) => __async(this, null, function* () {
      if (e3 && (yield Uo(e3)), !self.ModuleFactory) throw Error("ModuleFactory not set.");
      if (n3 && (yield Uo(n3), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
      return self.Module && i2 && ((e3 = self.Module).locateFile = i2.locateFile, i2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = i2.mainScriptUrlOrBlob)), i2 = yield self.ModuleFactory(self.Module || i2), self.ModuleFactory = self.Module = void 0, new t3(i2, r3);
    }))(t2, n2.wasmLoaderPath, n2.assetLoaderPath, e2, { locateFile: (t3) => t3.endsWith(".wasm") ? n2.wasmBinaryPath.toString() : n2.assetBinaryPath && t3.endsWith(".data") ? n2.assetBinaryPath.toString() : t3 }), yield t2.o(r2), t2;
  });
}
function Xo(t2, e2) {
  const n2 = Sn(t2.baseOptions, As, 1) || new As();
  "string" == typeof e2 ? (cn(n2, 2, Oe(e2)), cn(n2, 1)) : e2 instanceof Uint8Array && (cn(n2, 1, he(e2, false, false)), cn(n2, 2)), Fn(t2.baseOptions, 0, 1, n2);
}
function zo(t2) {
  try {
    const e2 = t2.F.length;
    if (1 === e2) throw Error(t2.F[0].message);
    if (1 < e2) throw Error("Encountered multiple errors: " + t2.F.map((t3) => t3.message).join(", "));
  } finally {
    t2.F = [];
  }
}
function Wo(t2, e2) {
  t2.I = Math.max(t2.I, e2);
}
function Ho(t2, e2) {
  t2.C = new Ti(), vi(t2.C, "PassThroughCalculator"), _i(t2.C, "free_memory"), wi(t2.C, "free_memory_unused_out"), Li(e2, "free_memory"), Si(e2, t2.C);
}
function Yo(t2, e2) {
  _i(t2.C, e2), wi(t2.C, e2 + "_unused_out");
}
function Ko(t2) {
  t2.g.addBoolToStream(true, "free_memory", t2.I);
}
var $o = class {
  constructor(t2) {
    this.g = t2, this.F = [], this.I = 0, this.g.setAutoRenderToScreen(false);
  }
  l(t2, e2 = true) {
    var _a2, _b, _c2, _d, _e2, _f;
    if (e2) {
      const e3 = t2.baseOptions || {};
      if (((_a2 = t2.baseOptions) == null ? void 0 : _a2.modelAssetBuffer) && ((_b = t2.baseOptions) == null ? void 0 : _b.modelAssetPath)) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(((_c2 = Sn(this.baseOptions, As, 1)) == null ? void 0 : _c2.g()) || ((_d = Sn(this.baseOptions, As, 1)) == null ? void 0 : _d.h()) || ((_e2 = t2.baseOptions) == null ? void 0 : _e2.modelAssetBuffer) || ((_f = t2.baseOptions) == null ? void 0 : _f.modelAssetPath))) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (function(t3, e4) {
        let n2 = Sn(t3.baseOptions, Es, 3);
        if (!n2) {
          var r2 = n2 = new Es(), i2 = new ai();
          Mn(r2, 4, bs, i2);
        }
        "delegate" in e4 && ("GPU" === e4.delegate ? (e4 = n2, r2 = new ii(), Mn(e4, 2, bs, r2)) : (e4 = n2, r2 = new ai(), Mn(e4, 4, bs, r2))), Fn(t3.baseOptions, 0, 3, n2);
      }(this, e3), e3.modelAssetPath) return fetch(e3.modelAssetPath.toString()).then((t3) => {
        if (t3.ok) return t3.arrayBuffer();
        throw Error(`Failed to fetch model: ${e3.modelAssetPath} (${t3.status})`);
      }).then((t3) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch (e4) {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), Xo(this, "/model.dat"), this.m(), this.N();
      });
      Xo(this, e3.modelAssetBuffer);
    }
    return this.m(), this.N(), Promise.resolve();
  }
  N() {
  }
  da() {
    let t2;
    if (this.g.da((e2) => {
      t2 = Oi(e2);
    }), !t2) throw Error("Failed to retrieve CalculatorGraphConfig");
    return t2;
  }
  setGraph(t2, e2) {
    this.g.attachErrorListener((t3, e3) => {
      this.F.push(Error(e3));
    }), this.g.Ra(), this.g.setGraph(t2, e2), this.C = void 0, zo(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), zo(this);
  }
  close() {
    this.C = void 0, this.g.closeGraph();
  }
};
function qo(t2, e2) {
  if (null === t2) throw Error(`Unable to obtain required WebGL resource: ${e2}`);
  return t2;
}
$o.prototype.close = $o.prototype.close;
var Jo = class {
  constructor(t2, e2, n2, r2) {
    this.g = t2, this.h = e2, this.m = n2, this.l = r2;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
};
function Zo(t2, e2, n2) {
  const r2 = t2.g;
  if (n2 = qo(r2.createShader(n2), "Failed to create WebGL shader"), r2.shaderSource(n2, e2), r2.compileShader(n2), !r2.getShaderParameter(n2, r2.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r2.getShaderInfoLog(n2)}`);
  return r2.attachShader(t2.h, n2), n2;
}
function Qo(t2, e2) {
  const n2 = t2.g, r2 = qo(n2.createVertexArray(), "Failed to create vertex array");
  n2.bindVertexArray(r2);
  const i2 = qo(n2.createBuffer(), "Failed to create buffer");
  n2.bindBuffer(n2.ARRAY_BUFFER, i2), n2.enableVertexAttribArray(t2.N), n2.vertexAttribPointer(t2.N, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), n2.STATIC_DRAW);
  const s2 = qo(n2.createBuffer(), "Failed to create buffer");
  return n2.bindBuffer(n2.ARRAY_BUFFER, s2), n2.enableVertexAttribArray(t2.M), n2.vertexAttribPointer(t2.M, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array(e2 ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), n2.STATIC_DRAW), n2.bindBuffer(n2.ARRAY_BUFFER, null), n2.bindVertexArray(null), new Jo(n2, r2, i2, s2);
}
function ta(t2, e2) {
  if (t2.g) {
    if (e2 !== t2.g) throw Error("Cannot change GL context once initialized");
  } else t2.g = e2;
}
function ea(t2, e2, n2, r2) {
  return ta(t2, e2), t2.h || (t2.m(), t2.F()), n2 ? (t2.u || (t2.u = Qo(t2, true)), n2 = t2.u) : (t2.v || (t2.v = Qo(t2, false)), n2 = t2.v), e2.useProgram(t2.h), n2.bind(), t2.l(), t2 = r2(), n2.g.bindVertexArray(null), t2;
}
function na(t2, e2, n2) {
  return ta(t2, e2), t2 = qo(e2.createTexture(), "Failed to create texture"), e2.bindTexture(e2.TEXTURE_2D, t2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, n2 != null ? n2 : e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, n2 != null ? n2 : e2.LINEAR), e2.bindTexture(e2.TEXTURE_2D, null), t2;
}
function ra(t2, e2, n2) {
  ta(t2, e2), t2.C || (t2.C = qo(e2.createFramebuffer(), "Failed to create framebuffe.")), e2.bindFramebuffer(e2.FRAMEBUFFER, t2.C), e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, n2, 0);
}
function ia(t2) {
  var _a2;
  (_a2 = t2.g) == null ? void 0 : _a2.bindFramebuffer(t2.g.FRAMEBUFFER, null);
}
var sa = class {
  I() {
    return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
  }
  m() {
    const t2 = this.g;
    if (this.h = qo(t2.createProgram(), "Failed to create WebGL program"), this.ta = Zo(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t2.VERTEX_SHADER), this.sa = Zo(this, this.I(), t2.FRAGMENT_SHADER), t2.linkProgram(this.h), !t2.getProgramParameter(this.h, t2.LINK_STATUS)) throw Error(`Error during program linking: ${t2.getProgramInfoLog(this.h)}`);
    this.N = t2.getAttribLocation(this.h, "aVertex"), this.M = t2.getAttribLocation(this.h, "aTex");
  }
  F() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const t2 = this.g;
      t2.deleteProgram(this.h), t2.deleteShader(this.ta), t2.deleteShader(this.sa);
    }
    this.C && this.g.deleteFramebuffer(this.C), this.v && this.v.close(), this.u && this.u.close();
  }
};
var oa = class extends sa {
  I() {
    return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
  }
  F() {
    const t2 = this.g;
    t2.activeTexture(t2.TEXTURE1), this.B = na(this, t2, t2.LINEAR), t2.activeTexture(t2.TEXTURE2), this.j = na(this, t2, t2.NEAREST);
  }
  m() {
    super.m();
    const t2 = this.g;
    this.U = qo(t2.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.ra = qo(t2.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.T = qo(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const t2 = this.g;
    t2.uniform1i(this.T, 0), t2.uniform1i(this.U, 1), t2.uniform1i(this.ra, 2);
  }
  close() {
    this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
  }
};
var aa = class extends sa {
  I() {
    return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
  }
  F() {
    const t2 = this.g;
    t2.activeTexture(t2.TEXTURE1), this.j = na(this, t2), t2.activeTexture(t2.TEXTURE2), this.B = na(this, t2);
  }
  m() {
    super.m();
    const t2 = this.g;
    this.T = qo(t2.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.U = qo(t2.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.J = qo(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const t2 = this.g;
    t2.uniform1i(this.J, 0), t2.uniform1i(this.T, 1), t2.uniform1i(this.U, 2);
  }
  close() {
    this.j && this.g.deleteTexture(this.j), this.B && this.g.deleteTexture(this.B), super.close();
  }
};
function ca(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof Uint8Array);
    case 1:
      return t2.g.find((t3) => t3 instanceof Float32Array);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function ha(t2) {
  var e2 = ca(t2, 1);
  if (!e2) {
    if (e2 = ca(t2, 0)) e2 = new Float32Array(e2).map((t3) => t3 / 255);
    else {
      e2 = new Float32Array(t2.width * t2.height);
      const r2 = la(t2);
      var n2 = da(t2);
      if (ra(n2, r2, ua(t2)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        n2 = new Float32Array(t2.width * t2.height * 4), r2.readPixels(0, 0, t2.width, t2.height, r2.RGBA, r2.FLOAT, n2);
        for (let t3 = 0, r3 = 0; t3 < e2.length; ++t3, r3 += 4) e2[t3] = n2[r3];
      } else r2.readPixels(0, 0, t2.width, t2.height, r2.RED, r2.FLOAT, e2);
    }
    t2.g.push(e2);
  }
  return e2;
}
function ua(t2) {
  let e2 = ca(t2, 2);
  if (!e2) {
    const n2 = la(t2);
    e2 = pa(t2);
    const r2 = ha(t2), i2 = fa(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, i2, t2.width, t2.height, 0, n2.RED, n2.FLOAT, r2), ga(t2);
  }
  return e2;
}
function la(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t2.h || (t2.h = qo(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function fa(t2) {
  if (t2 = la(t2), !ma) if (t2.getExtension("EXT_color_buffer_float") && t2.getExtension("OES_texture_float_linear") && t2.getExtension("EXT_float_blend")) ma = t2.R32F;
  else {
    if (!t2.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    ma = t2.R16F;
  }
  return ma;
}
function da(t2) {
  return t2.l || (t2.l = new sa()), t2.l;
}
function pa(t2) {
  const e2 = la(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = ca(t2, 2);
  return n2 || (n2 = na(da(t2), e2, t2.m ? e2.LINEAR : e2.NEAREST), t2.g.push(n2), t2.j = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
}
function ga(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
var ma;
var ya = class {
  constructor(t2, e2, n2, r2, i2, s2, o2) {
    this.g = t2, this.m = e2, this.j = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, this.j && (0 === --va && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."));
  }
  La() {
    return !!ca(this, 0);
  }
  ka() {
    return !!ca(this, 1);
  }
  P() {
    return !!ca(this, 2);
  }
  ja() {
    return (e2 = ca(t2 = this, 0)) || (e2 = ha(t2), e2 = new Uint8Array(e2.map((t3) => 255 * t3)), t2.g.push(e2)), e2;
    var t2, e2;
  }
  ia() {
    return ha(this);
  }
  K() {
    return ua(this);
  }
  clone() {
    const t2 = [];
    for (const e2 of this.g) {
      let n2;
      if (e2 instanceof Uint8Array) n2 = new Uint8Array(e2);
      else if (e2 instanceof Float32Array) n2 = new Float32Array(e2);
      else {
        if (!(e2 instanceof WebGLTexture)) throw Error(`Type is not supported: ${e2}`);
        {
          const t3 = la(this), e3 = da(this);
          t3.activeTexture(t3.TEXTURE1), n2 = na(e3, t3, this.m ? t3.LINEAR : t3.NEAREST), t3.bindTexture(t3.TEXTURE_2D, n2);
          const r2 = fa(this);
          t3.texImage2D(t3.TEXTURE_2D, 0, r2, this.width, this.height, 0, t3.RED, t3.FLOAT, null), t3.bindTexture(t3.TEXTURE_2D, null), ra(e3, t3, n2), ea(e3, t3, false, () => {
            pa(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), ga(this);
          }), ia(e3), ga(this);
        }
      }
      t2.push(n2);
    }
    return new ya(t2, this.m, this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && la(this).deleteTexture(ca(this, 2)), va = -1;
  }
};
ya.prototype.close = ya.prototype.close, ya.prototype.clone = ya.prototype.clone, ya.prototype.getAsWebGLTexture = ya.prototype.K, ya.prototype.getAsFloat32Array = ya.prototype.ia, ya.prototype.getAsUint8Array = ya.prototype.ja, ya.prototype.hasWebGLTexture = ya.prototype.P, ya.prototype.hasFloat32Array = ya.prototype.ka, ya.prototype.hasUint8Array = ya.prototype.La;
var va = 250;
var _a = { color: "white", lineWidth: 4, radius: 6 };
function wa(t2) {
  return __spreadValues(__spreadProps(__spreadValues({}, _a), { fillColor: (t2 = t2 || {}).color }), t2);
}
function Ta(t2, e2) {
  return t2 instanceof Function ? t2(e2) : t2;
}
function Ea(t2, e2, n2) {
  return Math.max(Math.min(e2, n2), Math.min(Math.max(e2, n2), t2));
}
function ba(t2) {
  if (!t2.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return t2.l;
}
function Aa(t2) {
  if (!t2.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
  return t2.j;
}
function xa(t2, e2, n2) {
  var _a2;
  if (e2.P()) n2(e2.K());
  else {
    const r2 = e2.ka() ? e2.ia() : e2.ja();
    t2.m = (_a2 = t2.m) != null ? _a2 : new sa();
    const i2 = Aa(t2);
    n2((t2 = new ya([r2], e2.m, false, i2.canvas, t2.m, e2.width, e2.height)).K()), t2.close();
  }
}
function ka(t2, e2, n2, r2) {
  const i2 = function(t3) {
    return t3.g || (t3.g = new oa()), t3.g;
  }(t2), s2 = Aa(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2;
  ea(i2, s2, true, () => {
    !function(t4, e3, n3, r3) {
      const i3 = t4.g;
      if (i3.activeTexture(i3.TEXTURE0), i3.bindTexture(i3.TEXTURE_2D, e3), i3.activeTexture(i3.TEXTURE1), i3.bindTexture(i3.TEXTURE_2D, t4.B), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, i3.RGBA, i3.UNSIGNED_BYTE, n3), t4.J && function(t5, e4) {
        if (t5 !== e4) return false;
        t5 = t5.entries(), e4 = e4.entries();
        for (const [r4, i4] of t5) {
          t5 = r4;
          const s3 = i4;
          var n4 = e4.next();
          if (n4.done) return false;
          const [o3, a2] = n4.value;
          if (n4 = a2, t5 !== o3 || s3[0] !== n4[0] || s3[1] !== n4[1] || s3[2] !== n4[2] || s3[3] !== n4[3]) return false;
        }
        return !!e4.next().done;
      }(t4.J, r3)) i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j);
      else {
        t4.J = r3;
        const e4 = Array(1024).fill(0);
        r3.forEach((t5, n4) => {
          if (4 !== t5.length) throw Error(`Color at index ${n4} is not a four-channel value.`);
          e4[4 * n4] = t5[0], e4[4 * n4 + 1] = t5[1], e4[4 * n4 + 2] = t5[2], e4[4 * n4 + 3] = t5[3];
        }), i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, 256, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, new Uint8Array(e4));
      }
    }(i2, e2, o2, r2), s2.clearColor(0, 0, 0, 0), s2.clear(s2.COLOR_BUFFER_BIT), s2.drawArrays(s2.TRIANGLE_FAN, 0, 4);
    const t3 = i2.g;
    t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
  });
}
function Sa(t2, e2, n2, r2) {
  const i2 = Aa(t2), s2 = function(t3) {
    return t3.h || (t3.h = new aa()), t3.h;
  }(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2, a2 = Array.isArray(r2) ? new ImageData(new Uint8ClampedArray(r2), 1, 1) : r2;
  ea(s2, i2, true, () => {
    var t3 = s2.g;
    t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, e2), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, s2.j), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, o2), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, s2.B), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, a2), i2.clearColor(0, 0, 0, 0), i2.clear(i2.COLOR_BUFFER_BIT), i2.drawArrays(i2.TRIANGLE_FAN, 0, 4), i2.bindTexture(i2.TEXTURE_2D, null), (t3 = s2.g).activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
  });
}
var La = class {
  constructor(t2, e2) {
    t2 instanceof CanvasRenderingContext2D || t2 instanceof OffscreenCanvasRenderingContext2D ? (this.l = t2, this.j = e2) : this.j = t2;
  }
  Ea(t2, e2) {
    if (t2) {
      var n2 = ba(this);
      e2 = wa(e2), n2.save();
      var r2 = n2.canvas, i2 = 0;
      for (const s2 of t2) n2.fillStyle = Ta(e2.fillColor, { index: i2, from: s2 }), n2.strokeStyle = Ta(e2.color, { index: i2, from: s2 }), n2.lineWidth = Ta(e2.lineWidth, { index: i2, from: s2 }), (t2 = new Path2D()).arc(s2.x * r2.width, s2.y * r2.height, Ta(e2.radius, { index: i2, from: s2 }), 0, 2 * Math.PI), n2.fill(t2), n2.stroke(t2), ++i2;
      n2.restore();
    }
  }
  Da(t2, e2, n2) {
    if (t2 && e2) {
      var r2 = ba(this);
      n2 = wa(n2), r2.save();
      var i2 = r2.canvas, s2 = 0;
      for (const o2 of e2) {
        r2.beginPath(), e2 = t2[o2.start];
        const a2 = t2[o2.end];
        e2 && a2 && (r2.strokeStyle = Ta(n2.color, { index: s2, from: e2, to: a2 }), r2.lineWidth = Ta(n2.lineWidth, { index: s2, from: e2, to: a2 }), r2.moveTo(e2.x * i2.width, e2.y * i2.height), r2.lineTo(a2.x * i2.width, a2.y * i2.height)), ++s2, r2.stroke();
      }
      r2.restore();
    }
  }
  Aa(t2, e2) {
    const n2 = ba(this);
    e2 = wa(e2), n2.save(), n2.beginPath(), n2.lineWidth = Ta(e2.lineWidth, {}), n2.strokeStyle = Ta(e2.color, {}), n2.fillStyle = Ta(e2.fillColor, {}), n2.moveTo(t2.originX, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY), n2.stroke(), n2.fill(), n2.restore();
  }
  Ba(t2, e2, n2 = [0, 0, 0, 255]) {
    this.l ? function(t3, e3, n3, r2) {
      const i2 = Aa(t3);
      xa(t3, e3, (e4) => {
        ka(t3, e4, n3, r2), (e4 = ba(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
      });
    }(this, t2, n2, e2) : ka(this, t2.K(), n2, e2);
  }
  Ca(t2, e2, n2) {
    this.l ? function(t3, e3, n3, r2) {
      const i2 = Aa(t3);
      xa(t3, e3, (e4) => {
        Sa(t3, e4, n3, r2), (e4 = ba(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
      });
    }(this, t2, e2, n2) : Sa(this, t2.K(), e2, n2);
  }
  close() {
    var _a2, _b, _c2;
    (_a2 = this.g) == null ? void 0 : _a2.close(), this.g = void 0, (_b = this.h) == null ? void 0 : _b.close(), this.h = void 0, (_c2 = this.m) == null ? void 0 : _c2.close(), this.m = void 0;
  }
};
function Ra(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof ImageData);
    case 1:
      return t2.g.find((t3) => "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function Fa(t2) {
  var e2 = Ra(t2, 0);
  if (!e2) {
    e2 = Oa(t2);
    const n2 = Ia(t2), r2 = new Uint8Array(t2.width * t2.height * 4);
    ra(n2, e2, Ma(t2)), e2.readPixels(0, 0, t2.width, t2.height, e2.RGBA, e2.UNSIGNED_BYTE, r2), ia(n2), e2 = new ImageData(new Uint8ClampedArray(r2.buffer), t2.width, t2.height), t2.g.push(e2);
  }
  return e2;
}
function Ma(t2) {
  let e2 = Ra(t2, 2);
  if (!e2) {
    const n2 = Oa(t2);
    e2 = Ca(t2);
    const r2 = Ra(t2, 1) || Fa(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, r2), Pa(t2);
  }
  return e2;
}
function Oa(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return t2.h || (t2.h = qo(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function Ia(t2) {
  return t2.l || (t2.l = new sa()), t2.l;
}
function Ca(t2) {
  const e2 = Oa(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = Ra(t2, 2);
  return n2 || (n2 = na(Ia(t2), e2), t2.g.push(n2), t2.m = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
}
function Pa(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
function Ua(t2) {
  const e2 = Oa(t2);
  return ea(Ia(t2), e2, true, () => function(t3, e3) {
    const n2 = t3.canvas;
    if (n2.width === t3.width && n2.height === t3.height) return e3();
    const r2 = n2.width, i2 = n2.height;
    return n2.width = t3.width, n2.height = t3.height, t3 = e3(), n2.width = r2, n2.height = i2, t3;
  }(t2, () => {
    if (e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.clearColor(0, 0, 0, 0), e2.clear(e2.COLOR_BUFFER_BIT), e2.drawArrays(e2.TRIANGLE_FAN, 0, 4), !(t2.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return t2.canvas.transferToImageBitmap();
  }));
}
La.prototype.close = La.prototype.close, La.prototype.drawConfidenceMask = La.prototype.Ca, La.prototype.drawCategoryMask = La.prototype.Ba, La.prototype.drawBoundingBox = La.prototype.Aa, La.prototype.drawConnectors = La.prototype.Da, La.prototype.drawLandmarks = La.prototype.Ea, La.lerp = function(t2, e2, n2, r2, i2) {
  return Ea(r2 * (1 - (t2 - e2) / (n2 - e2)) + i2 * (1 - (n2 - t2) / (n2 - e2)), r2, i2);
}, La.clamp = Ea;
var Da = class {
  constructor(t2, e2, n2, r2, i2, s2, o2) {
    this.g = t2, this.j = e2, this.m = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, (this.j || this.m) && (0 === --Ba && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."));
  }
  Ka() {
    return !!Ra(this, 0);
  }
  la() {
    return !!Ra(this, 1);
  }
  P() {
    return !!Ra(this, 2);
  }
  Ia() {
    return Fa(this);
  }
  Ha() {
    var t2 = Ra(this, 1);
    return t2 || (Ma(this), Ca(this), t2 = Ua(this), Pa(this), this.g.push(t2), this.j = true), t2;
  }
  K() {
    return Ma(this);
  }
  clone() {
    const t2 = [];
    for (const e2 of this.g) {
      let n2;
      if (e2 instanceof ImageData) n2 = new ImageData(e2.data, this.width, this.height);
      else if (e2 instanceof WebGLTexture) {
        const t3 = Oa(this), e3 = Ia(this);
        t3.activeTexture(t3.TEXTURE1), n2 = na(e3, t3), t3.bindTexture(t3.TEXTURE_2D, n2), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, this.width, this.height, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.bindTexture(t3.TEXTURE_2D, null), ra(e3, t3, n2), ea(e3, t3, false, () => {
          Ca(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Pa(this);
        }), ia(e3), Pa(this);
      } else {
        if (!(e2 instanceof ImageBitmap)) throw Error(`Type is not supported: ${e2}`);
        Ma(this), Ca(this), n2 = Ua(this), Pa(this);
      }
      t2.push(n2);
    }
    return new Da(t2, this.la(), this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Ra(this, 1).close(), this.m && Oa(this).deleteTexture(Ra(this, 2)), Ba = -1;
  }
};
Da.prototype.close = Da.prototype.close, Da.prototype.clone = Da.prototype.clone, Da.prototype.getAsWebGLTexture = Da.prototype.K, Da.prototype.getAsImageBitmap = Da.prototype.Ha, Da.prototype.getAsImageData = Da.prototype.Ia, Da.prototype.hasWebGLTexture = Da.prototype.P, Da.prototype.hasImageBitmap = Da.prototype.la, Da.prototype.hasImageData = Da.prototype.Ka;
var Ba = 250;
function Na(...t2) {
  return t2.map(([t3, e2]) => ({ start: t3, end: e2 }));
}
var Ga = /* @__PURE__ */ function(t2) {
  return class extends t2 {
    Ra() {
      this.i._registerModelResourcesGraphService();
    }
  };
}((ja = class {
  constructor(t2, e2) {
    this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e2 ? this.i.canvas = e2 : "undefined" == typeof OffscreenCanvas || Po() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
  }
  initializeGraph(t2) {
    return __async(this, null, function* () {
      const e2 = yield (yield fetch(t2)).arrayBuffer();
      t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
    });
  }
  setGraphFromString(t2) {
    this.setGraph(new TextEncoder().encode(t2), false);
  }
  setGraph(t2, e2) {
    const n2 = t2.length, r2 = this.i._malloc(n2);
    this.i.HEAPU8.set(t2, r2), e2 ? this.i._changeBinaryGraph(n2, r2) : this.i._changeTextGraph(n2, r2), this.i._free(r2);
  }
  configureAudio(t2, e2, n2, r2, i2) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Do(this, r2 || "input_audio", (r3) => {
      Do(this, i2 = i2 || "audio_header", (i3) => {
        this.i._configureAudio(r3, i3, t2, e2, n2);
      });
    });
  }
  setAutoResizeCanvas(t2) {
    this.l = t2;
  }
  setAutoRenderToScreen(t2) {
    this.i._setAutoRenderToScreen(t2);
  }
  setGpuBufferVerticalFlip(t2) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
  }
  da(t2) {
    Go(this, "__graph_config__", (e2) => {
      t2(e2);
    }), Do(this, "__graph_config__", (t3) => {
      this.i._getGraphConfig(t3, void 0);
    }), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(t2) {
    this.i.errorListener = t2;
  }
  attachEmptyPacketListener(t2, e2) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = e2;
  }
  addAudioToStream(t2, e2, n2) {
    this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
  }
  addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
    const s2 = 4 * t2.length;
    this.h !== s2 && (this.g && this.i._free(this.g), this.g = this.i._malloc(s2), this.h = s2), this.i.HEAPF32.set(t2, this.g / 4), Do(this, r2, (t3) => {
      this.i._addAudioToInputStream(this.g, e2, n2, t3, i2);
    });
  }
  addGpuBufferToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const [r2, i2] = Bo(this, t2, e3);
      this.i._addBoundTextureToStream(e3, r2, i2, n2);
    });
  }
  addBoolToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      this.i._addBoolToInputStream(t2, e3, n2);
    });
  }
  addDoubleToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      this.i._addDoubleToInputStream(t2, e3, n2);
    });
  }
  addFloatToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      this.i._addFloatToInputStream(t2, e3, n2);
    });
  }
  addIntToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      this.i._addIntToInputStream(t2, e3, n2);
    });
  }
  addStringToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      Do(this, t2, (t3) => {
        this.i._addStringToInputStream(t3, e3, n2);
      });
    });
  }
  addStringRecordToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      No(this, Object.keys(t2), (r2) => {
        No(this, Object.values(t2), (i2) => {
          this.i._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
        });
      });
    });
  }
  addProtoToStream(t2, e2, n2, r2) {
    Do(this, n2, (n3) => {
      Do(this, e2, (e3) => {
        const i2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, i2), this.i._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.i._free(i2);
      });
    });
  }
  addEmptyPacketToStream(t2, e2) {
    Do(this, t2, (t3) => {
      this.i._addEmptyPacketToInputStream(t3, e2);
    });
  }
  addBoolVectorToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const r2 = this.i._allocateBoolVector(t2.length);
      if (!r2) throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2) this.i._addBoolVectorEntry(r2, e4);
      this.i._addBoolVectorToInputStream(r2, e3, n2);
    });
  }
  addDoubleVectorToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const r2 = this.i._allocateDoubleVector(t2.length);
      if (!r2) throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2) this.i._addDoubleVectorEntry(r2, e4);
      this.i._addDoubleVectorToInputStream(r2, e3, n2);
    });
  }
  addFloatVectorToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const r2 = this.i._allocateFloatVector(t2.length);
      if (!r2) throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2) this.i._addFloatVectorEntry(r2, e4);
      this.i._addFloatVectorToInputStream(r2, e3, n2);
    });
  }
  addIntVectorToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const r2 = this.i._allocateIntVector(t2.length);
      if (!r2) throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2) this.i._addIntVectorEntry(r2, e4);
      this.i._addIntVectorToInputStream(r2, e3, n2);
    });
  }
  addStringVectorToStream(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const r2 = this.i._allocateStringVector(t2.length);
      if (!r2) throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2) Do(this, e4, (t3) => {
        this.i._addStringVectorEntry(r2, t3);
      });
      this.i._addStringVectorToInputStream(r2, e3, n2);
    });
  }
  addBoolToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      this.i._addBoolToInputSidePacket(t2, e3);
    });
  }
  addDoubleToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      this.i._addDoubleToInputSidePacket(t2, e3);
    });
  }
  addFloatToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      this.i._addFloatToInputSidePacket(t2, e3);
    });
  }
  addIntToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      this.i._addIntToInputSidePacket(t2, e3);
    });
  }
  addStringToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      Do(this, t2, (t3) => {
        this.i._addStringToInputSidePacket(t3, e3);
      });
    });
  }
  addProtoToInputSidePacket(t2, e2, n2) {
    Do(this, n2, (n3) => {
      Do(this, e2, (e3) => {
        const r2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, r2), this.i._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.i._free(r2);
      });
    });
  }
  addBoolVectorToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      const n2 = this.i._allocateBoolVector(t2.length);
      if (!n2) throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2) this.i._addBoolVectorEntry(n2, e4);
      this.i._addBoolVectorToInputSidePacket(n2, e3);
    });
  }
  addDoubleVectorToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      const n2 = this.i._allocateDoubleVector(t2.length);
      if (!n2) throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2) this.i._addDoubleVectorEntry(n2, e4);
      this.i._addDoubleVectorToInputSidePacket(n2, e3);
    });
  }
  addFloatVectorToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      const n2 = this.i._allocateFloatVector(t2.length);
      if (!n2) throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2) this.i._addFloatVectorEntry(n2, e4);
      this.i._addFloatVectorToInputSidePacket(n2, e3);
    });
  }
  addIntVectorToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      const n2 = this.i._allocateIntVector(t2.length);
      if (!n2) throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2) this.i._addIntVectorEntry(n2, e4);
      this.i._addIntVectorToInputSidePacket(n2, e3);
    });
  }
  addStringVectorToInputSidePacket(t2, e2) {
    Do(this, e2, (e3) => {
      const n2 = this.i._allocateStringVector(t2.length);
      if (!n2) throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2) Do(this, e4, (t3) => {
        this.i._addStringVectorEntry(n2, t3);
      });
      this.i._addStringVectorToInputSidePacket(n2, e3);
    });
  }
  attachBoolListener(t2, e2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachBoolListener(t3);
    });
  }
  attachBoolVectorListener(t2, e2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachBoolVectorListener(t3);
    });
  }
  attachIntListener(t2, e2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachIntListener(t3);
    });
  }
  attachIntVectorListener(t2, e2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachIntVectorListener(t3);
    });
  }
  attachDoubleListener(t2, e2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachDoubleListener(t3);
    });
  }
  attachDoubleVectorListener(t2, e2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachDoubleVectorListener(t3);
    });
  }
  attachFloatListener(t2, e2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachFloatListener(t3);
    });
  }
  attachFloatVectorListener(t2, e2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachFloatVectorListener(t3);
    });
  }
  attachStringListener(t2, e2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachStringListener(t3);
    });
  }
  attachStringVectorListener(t2, e2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachStringVectorListener(t3);
    });
  }
  attachProtoListener(t2, e2, n2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachProtoListener(t3, n2 || false);
    });
  }
  attachProtoVectorListener(t2, e2, n2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.i._attachProtoVectorListener(t3, n2 || false);
    });
  }
  attachAudioListener(t2, e2, n2) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Go(this, t2, (t3, n3) => {
      t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
    }), Do(this, t2, (t3) => {
      this.i._attachAudioListener(t3, n2 || false);
    });
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends ja {
  get fa() {
    return this.i;
  }
  va(t2, e2, n2) {
    Do(this, e2, (e3) => {
      const [r2, i2] = Bo(this, t2, e3);
      this.fa._addBoundTextureAsImageToStream(e3, r2, i2, n2);
    });
  }
  ba(t2, e2) {
    Go(this, t2, e2), Do(this, t2, (t3) => {
      this.fa._attachImageListener(t3);
    });
  }
  ca(t2, e2) {
    jo(this, t2, e2), Do(this, t2, (t3) => {
      this.fa._attachImageVectorListener(t3);
    });
  }
}));
var ja;
var Va = class extends Ga {
};
function Xa(t2, e2, n2) {
  return __async(this, null, function* () {
    var _a2;
    return function(t3, e3, n3, r2) {
      return __async(this, null, function* () {
        return Vo(t3, e3, n3, r2);
      });
    }(t2, (_a2 = n2.canvas) != null ? _a2 : "undefined" == typeof OffscreenCanvas || Po() ? document.createElement("canvas") : void 0, e2, n2);
  });
}
function za(t2, e2, n2, r2) {
  if (t2.J) {
    const s2 = new os();
    if (n2 == null ? void 0 : n2.regionOfInterest) {
      if (!t2.U) throw Error("This task doesn't support region-of-interest.");
      var i2 = n2.regionOfInterest;
      if (i2.left >= i2.right || i2.top >= i2.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > i2.left || 0 > i2.top || 1 < i2.right || 1 < i2.bottom) throw Error("Expected RectF values to be in [0,1].");
      Gn(s2, 1, (i2.left + i2.right) / 2), Gn(s2, 2, (i2.top + i2.bottom) / 2), Gn(s2, 4, i2.right - i2.left), Gn(s2, 3, i2.bottom - i2.top);
    } else Gn(s2, 1, 0.5), Gn(s2, 2, 0.5), Gn(s2, 4, 1), Gn(s2, 3, 1);
    if (n2 == null ? void 0 : n2.rotationDegrees) {
      if (0 != (n2 == null ? void 0 : n2.rotationDegrees) % 90) throw Error("Expected rotation to be a multiple of 90\xB0.");
      if (Gn(s2, 5, -Math.PI * n2.rotationDegrees / 180), 0 != (n2 == null ? void 0 : n2.rotationDegrees) % 180) {
        const [t3, r3] = void 0 !== e2.videoWidth ? [e2.videoWidth, e2.videoHeight] : void 0 !== e2.naturalWidth ? [e2.naturalWidth, e2.naturalHeight] : [e2.width, e2.height];
        n2 = Dn(s2, 3) * r3 / t3, i2 = Dn(s2, 4) * t3 / r3, Gn(s2, 4, n2), Gn(s2, 3, i2);
      }
    }
    t2.g.addProtoToStream(s2.g(), "mediapipe.NormalizedRect", t2.J, r2);
  }
  t2.g.va(e2, t2.T, r2 != null ? r2 : performance.now()), t2.finishProcessing();
}
function Wa(t2, e2, n2) {
  var _a2;
  if ((_a2 = t2.baseOptions) == null ? void 0 : _a2.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  za(t2, e2, n2, t2.I + 1);
}
function Ha(t2, e2, n2, r2) {
  var _a2;
  if (!((_a2 = t2.baseOptions) == null ? void 0 : _a2.g())) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  za(t2, e2, n2, r2);
}
function Ya(t2, e2, n2, r2) {
  var i2 = e2.data;
  const s2 = e2.width, o2 = s2 * (e2 = e2.height);
  if ((i2 instanceof Uint8Array || i2 instanceof Float32Array) && i2.length !== o2) throw Error("Unsupported channel count: " + i2.length / o2);
  return t2 = new ya([i2], n2, false, t2.g.i.canvas, t2.M, s2, e2), r2 ? t2.clone() : t2;
}
var Ka = class extends $o {
  constructor(t2, e2, n2, r2) {
    super(t2), this.g = t2, this.T = e2, this.J = n2, this.U = r2, this.M = new sa();
  }
  l(t2, e2 = true) {
    if ("runningMode" in t2 && Bn(this.baseOptions, 2, !!t2.runningMode && "IMAGE" !== t2.runningMode), void 0 !== t2.canvas && this.g.i.canvas !== t2.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(t2, e2);
  }
  close() {
    this.M.close(), super.close();
  }
};
Ka.prototype.close = Ka.prototype.close;
var $a = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect_in", false), this.j = { detections: [] }, Fn(t2 = this.h = new Ls(), 0, 1, e2 = new ks()), Gn(this.h, 2, 0.5), Gn(this.h, 3, 0.3);
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b;
    return "minDetectionConfidence" in t2 && Gn(this.h, 2, (_a2 = t2.minDetectionConfidence) != null ? _a2 : 0.5), "minSuppressionThreshold" in t2 && Gn(this.h, 3, (_b = t2.minSuppressionThreshold) != null ? _b : 0.3), this.l(t2);
  }
  G(t2, e2) {
    return this.j = { detections: [] }, Wa(this, t2, e2), this.j;
  }
  H(t2, e2, n2) {
    return this.j = { detections: [] }, Ha(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect_in"), Ri(t2, "detections");
    const e2 = new ui();
    jn(e2, Fs, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect_in"), wi(n2, "DETECTIONS:detections"), n2.o(e2), Si(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3) t3 = $i(e4), this.j.detections.push(xo(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
$a.prototype.detectForVideo = $a.prototype.H, $a.prototype.detect = $a.prototype.G, $a.prototype.setOptions = $a.prototype.o, $a.createFromModelPath = function(t2, e2) {
  return __async(this, null, function* () {
    return Xa($a, t2, { baseOptions: { modelAssetPath: e2 } });
  });
}, $a.createFromModelBuffer = function(t2, e2) {
  return Xa($a, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, $a.createFromOptions = function(t2, e2) {
  return Xa($a, t2, e2);
};
var qa = Na([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
var Ja = Na([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
var Za = Na([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
var Qa = Na([474, 475], [475, 476], [476, 477], [477, 474]);
var tc = Na([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
var ec = Na([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
var nc = Na([469, 470], [470, 471], [471, 472], [472, 469]);
var rc = Na([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
var ic = [...qa, ...Ja, ...Za, ...tc, ...ec, ...rc];
var sc = Na([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function oc(t2) {
  t2.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var ac = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", false), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = false, Fn(t2 = this.h = new Ds(), 0, 1, e2 = new ks()), this.v = new Ps(), Fn(this.h, 0, 3, this.v), this.u = new Ls(), Fn(this.h, 0, 2, this.u), Nn(this.u, 4, 1), Gn(this.u, 2, 0.5), Gn(this.v, 2, 0.5), Gn(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c2, _d;
    return "numFaces" in t2 && Nn(this.u, 4, (_a2 = t2.numFaces) != null ? _a2 : 1), "minFaceDetectionConfidence" in t2 && Gn(this.u, 2, (_b = t2.minFaceDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Gn(this.h, 4, (_c2 = t2.minTrackingConfidence) != null ? _c2 : 0.5), "minFacePresenceConfidence" in t2 && Gn(this.v, 2, (_d = t2.minFacePresenceConfidence) != null ? _d : 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t2 && (this.outputFacialTransformationMatrixes = !!t2.outputFacialTransformationMatrixes), this.l(t2);
  }
  G(t2, e2) {
    return oc(this), Wa(this, t2, e2), this.j;
  }
  H(t2, e2, n2) {
    return oc(this), Ha(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect"), Ri(t2, "face_landmarks");
    const e2 = new ui();
    jn(e2, Ns, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "NORM_LANDMARKS:face_landmarks"), n2.o(e2), Si(t2, n2), this.g.attachProtoVectorListener("face_landmarks", (t3, e3) => {
      for (const e4 of t3) t3 = rs(e4), this.j.faceLandmarks.push(ko(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
      Wo(this, t3);
    }), this.outputFaceBlendshapes && (Ri(t2, "blendshapes"), wi(n2, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t3, e3) => {
      var _a2;
      if (this.outputFaceBlendshapes) for (const e4 of t3) t3 = Bi(e4), this.j.faceBlendshapes.push(Ao((_a2 = t3.g()) != null ? _a2 : []));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("blendshapes", (t3) => {
      Wo(this, t3);
    })), this.outputFacialTransformationMatrixes && (Ri(t2, "face_geometry"), wi(n2, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t3, e3) => {
      var _a2, _b, _c2;
      if (this.outputFacialTransformationMatrixes) for (const e4 of t3) (t3 = Sn(Is(e4), is, 2)) && this.j.facialTransformationMatrixes.push({ rows: (_a2 = Un(Cn(t3, 1))) != null ? _a2 : 0, columns: (_b = Un(Cn(t3, 2))) != null ? _b : 0, data: (_c2 = dn(t3, 3, we)) != null ? _c2 : [] });
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("face_geometry", (t3) => {
      Wo(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
ac.prototype.detectForVideo = ac.prototype.H, ac.prototype.detect = ac.prototype.G, ac.prototype.setOptions = ac.prototype.o, ac.createFromModelPath = function(t2, e2) {
  return Xa(ac, t2, { baseOptions: { modelAssetPath: e2 } });
}, ac.createFromModelBuffer = function(t2, e2) {
  return Xa(ac, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, ac.createFromOptions = function(t2, e2) {
  return Xa(ac, t2, e2);
}, ac.FACE_LANDMARKS_LIPS = qa, ac.FACE_LANDMARKS_LEFT_EYE = Ja, ac.FACE_LANDMARKS_LEFT_EYEBROW = Za, ac.FACE_LANDMARKS_LEFT_IRIS = Qa, ac.FACE_LANDMARKS_RIGHT_EYE = tc, ac.FACE_LANDMARKS_RIGHT_EYEBROW = ec, ac.FACE_LANDMARKS_RIGHT_IRIS = nc, ac.FACE_LANDMARKS_FACE_OVAL = rc, ac.FACE_LANDMARKS_CONTOURS = ic, ac.FACE_LANDMARKS_TESSELATION = sc;
var cc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", true), Fn(t2 = this.j = new Gs(), 0, 1, e2 = new ks());
  }
  get baseOptions() {
    return Sn(this.j, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.j, 0, 1, t2);
  }
  o(t2) {
    return super.l(t2);
  }
  Ua(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    if (this.h = "function" == typeof e2 ? e2 : n2, Wa(this, t2, r2 != null ? r2 : {}), !this.h) return this.u;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect"), Ri(t2, "stylized_image");
    const e2 = new ui();
    jn(e2, js, this.j);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "STYLIZED_IMAGE:stylized_image"), n2.o(e2), Si(t2, n2), this.g.ba("stylized_image", (t3, e3) => {
      var n3 = !this.h, r2 = t3.data, i2 = t3.width;
      const s2 = i2 * (t3 = t3.height);
      if (r2 instanceof Uint8Array) if (r2.length === 3 * s2) {
        const e4 = new Uint8ClampedArray(4 * s2);
        for (let t4 = 0; t4 < s2; ++t4) e4[4 * t4] = r2[3 * t4], e4[4 * t4 + 1] = r2[3 * t4 + 1], e4[4 * t4 + 2] = r2[3 * t4 + 2], e4[4 * t4 + 3] = 255;
        r2 = new ImageData(e4, i2, t3);
      } else {
        if (r2.length !== 4 * s2) throw Error("Unsupported channel count: " + r2.length / s2);
        r2 = new ImageData(new Uint8ClampedArray(r2.buffer, r2.byteOffset, r2.length), i2, t3);
      }
      else if (!(r2 instanceof WebGLTexture)) throw Error(`Unsupported format: ${r2.constructor.name}`);
      i2 = new Da([r2], false, false, this.g.i.canvas, this.M, i2, t3), this.u = n3 = n3 ? i2.clone() : i2, this.h && this.h(n3), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("stylized_image", (t3) => {
      this.u = null, this.h && this.h(null), Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
cc.prototype.stylize = cc.prototype.Ua, cc.prototype.setOptions = cc.prototype.o, cc.createFromModelPath = function(t2, e2) {
  return Xa(cc, t2, { baseOptions: { modelAssetPath: e2 } });
}, cc.createFromModelBuffer = function(t2, e2) {
  return Xa(cc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, cc.createFromOptions = function(t2, e2) {
  return Xa(cc, t2, e2);
};
var hc = Na([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function uc(t2) {
  t2.gestures = [], t2.landmarks = [], t2.worldLandmarks = [], t2.handedness = [];
}
function lc(t2) {
  return 0 === t2.gestures.length ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t2.gestures, landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handedness: t2.handedness, handednesses: t2.handedness };
}
function fc(t2, e2 = true) {
  var _a2, _b, _c2, _d, _e2;
  const n2 = [];
  for (const i2 of t2) {
    var r2 = Bi(i2);
    t2 = [];
    for (const n3 of r2.g()) r2 = e2 && null != Cn(n3, 1) ? Un(Cn(n3, 1)) : -1, t2.push({ score: (_a2 = Dn(n3, 2)) != null ? _a2 : 0, index: r2, categoryName: (_c2 = (_b = Pn(n3, 3)) != null ? _b : "") != null ? _c2 : "", displayName: (_e2 = (_d = Pn(n3, 4)) != null ? _d : "") != null ? _e2 : "" });
    n2.push(t2);
  }
  return n2;
}
var dc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", false), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Fn(t2 = this.v = new Qs(), 0, 1, e2 = new ks()), this.B = new Js(), Fn(this.v, 0, 2, this.B), this.u = new $s(), Fn(this.B, 0, 3, this.u), this.h = new Ys(), Fn(this.B, 0, 2, this.h), this.j = new Ws(), Fn(this.v, 0, 3, this.j), Gn(this.h, 2, 0.5), Gn(this.B, 4, 0.5), Gn(this.u, 2, 0.5);
  }
  get baseOptions() {
    return Sn(this.v, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.v, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c2, _d, _e2, _f, _g, _h;
    if (Nn(this.h, 3, (_a2 = t2.numHands) != null ? _a2 : 1), "minHandDetectionConfidence" in t2 && Gn(this.h, 2, (_b = t2.minHandDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Gn(this.B, 4, (_c2 = t2.minTrackingConfidence) != null ? _c2 : 0.5), "minHandPresenceConfidence" in t2 && Gn(this.u, 2, (_d = t2.minHandPresenceConfidence) != null ? _d : 0.5), t2.cannedGesturesClassifierOptions) {
      var e2 = new Vs(), n2 = e2, r2 = bo(t2.cannedGesturesClassifierOptions, (_e2 = Sn(this.j, Vs, 3)) == null ? void 0 : _e2.h());
      Fn(n2, 0, 2, r2), Fn(this.j, 0, 3, e2);
    } else void 0 === t2.cannedGesturesClassifierOptions && ((_f = Sn(this.j, Vs, 3)) == null ? void 0 : _f.g());
    return t2.customGesturesClassifierOptions ? (Fn(n2 = e2 = new Vs(), 0, 2, r2 = bo(t2.customGesturesClassifierOptions, (_g = Sn(this.j, Vs, 4)) == null ? void 0 : _g.h())), Fn(this.j, 0, 4, e2)) : void 0 === t2.customGesturesClassifierOptions && ((_h = Sn(this.j, Vs, 4)) == null ? void 0 : _h.g()), this.l(t2);
  }
  Pa(t2, e2) {
    return uc(this), Wa(this, t2, e2), lc(this);
  }
  Qa(t2, e2, n2) {
    return uc(this), Ha(this, t2, n2, e2), lc(this);
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect"), Ri(t2, "hand_gestures"), Ri(t2, "hand_landmarks"), Ri(t2, "world_hand_landmarks"), Ri(t2, "handedness");
    const e2 = new ui();
    jn(e2, no, this.v);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "HAND_GESTURES:hand_gestures"), wi(n2, "LANDMARKS:hand_landmarks"), wi(n2, "WORLD_LANDMARKS:world_hand_landmarks"), wi(n2, "HANDEDNESS:handedness"), n2.o(e2), Si(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
      var _a2, _b, _c2;
      for (const e4 of t3) {
        t3 = rs(e4);
        const n3 = [];
        for (const e5 of Rn(t3, ts, 1)) n3.push({ x: (_a2 = Dn(e5, 1)) != null ? _a2 : 0, y: (_b = Dn(e5, 2)) != null ? _b : 0, z: (_c2 = Dn(e5, 3)) != null ? _c2 : 0 });
        this.landmarks.push(n3);
      }
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      Wo(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
      var _a2, _b, _c2;
      for (const e4 of t3) {
        t3 = Qi(e4);
        const n3 = [];
        for (const e5 of Rn(t3, qi, 1)) n3.push({ x: (_a2 = Dn(e5, 1)) != null ? _a2 : 0, y: (_b = Dn(e5, 2)) != null ? _b : 0, z: (_c2 = Dn(e5, 3)) != null ? _c2 : 0 });
        this.worldLandmarks.push(n3);
      }
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      Wo(this, t3);
    }), this.g.attachProtoVectorListener("hand_gestures", (t3, e3) => {
      this.gestures.push(...fc(t3, false)), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("hand_gestures", (t3) => {
      Wo(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
      this.handedness.push(...fc(t3)), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
function pc(t2) {
  return { landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handednesses: t2.handedness, handedness: t2.handedness };
}
dc.prototype.recognizeForVideo = dc.prototype.Qa, dc.prototype.recognize = dc.prototype.Pa, dc.prototype.setOptions = dc.prototype.o, dc.createFromModelPath = function(t2, e2) {
  return Xa(dc, t2, { baseOptions: { modelAssetPath: e2 } });
}, dc.createFromModelBuffer = function(t2, e2) {
  return Xa(dc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, dc.createFromOptions = function(t2, e2) {
  return Xa(dc, t2, e2);
}, dc.HAND_CONNECTIONS = hc;
var gc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Fn(t2 = this.j = new Js(), 0, 1, e2 = new ks()), this.u = new $s(), Fn(this.j, 0, 3, this.u), this.h = new Ys(), Fn(this.j, 0, 2, this.h), Nn(this.h, 3, 1), Gn(this.h, 2, 0.5), Gn(this.u, 2, 0.5), Gn(this.j, 4, 0.5);
  }
  get baseOptions() {
    return Sn(this.j, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.j, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c2, _d;
    return "numHands" in t2 && Nn(this.h, 3, (_a2 = t2.numHands) != null ? _a2 : 1), "minHandDetectionConfidence" in t2 && Gn(this.h, 2, (_b = t2.minHandDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Gn(this.j, 4, (_c2 = t2.minTrackingConfidence) != null ? _c2 : 0.5), "minHandPresenceConfidence" in t2 && Gn(this.u, 2, (_d = t2.minHandPresenceConfidence) != null ? _d : 0.5), this.l(t2);
  }
  G(t2, e2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Wa(this, t2, e2), pc(this);
  }
  H(t2, e2, n2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ha(this, t2, n2, e2), pc(this);
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect"), Ri(t2, "hand_landmarks"), Ri(t2, "world_hand_landmarks"), Ri(t2, "handedness");
    const e2 = new ui();
    jn(e2, eo, this.j);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "LANDMARKS:hand_landmarks"), wi(n2, "WORLD_LANDMARKS:world_hand_landmarks"), wi(n2, "HANDEDNESS:handedness"), n2.o(e2), Si(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
      for (const e4 of t3) t3 = rs(e4), this.landmarks.push(ko(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      Wo(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
      for (const e4 of t3) t3 = Qi(e4), this.worldLandmarks.push(So(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      Wo(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
      var _a2, _b, _c2, _d, _e2, _f;
      var n3 = this.handedness, r2 = n3.push;
      const i2 = [];
      for (const e4 of t3) {
        t3 = Bi(e4);
        const n4 = [];
        for (const e5 of t3.g()) n4.push({ score: (_a2 = Dn(e5, 2)) != null ? _a2 : 0, index: (_b = Un(Cn(e5, 1))) != null ? _b : -1, categoryName: (_d = (_c2 = Pn(e5, 3)) != null ? _c2 : "") != null ? _d : "", displayName: (_f = (_e2 = Pn(e5, 4)) != null ? _e2 : "") != null ? _f : "" });
        i2.push(n4);
      }
      r2.call(n3, ...i2), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
gc.prototype.detectForVideo = gc.prototype.H, gc.prototype.detect = gc.prototype.G, gc.prototype.setOptions = gc.prototype.o, gc.createFromModelPath = function(t2, e2) {
  return Xa(gc, t2, { baseOptions: { modelAssetPath: e2 } });
}, gc.createFromModelBuffer = function(t2, e2) {
  return Xa(gc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, gc.createFromOptions = function(t2, e2) {
  return Xa(gc, t2, e2);
}, gc.HAND_CONNECTIONS = hc;
var mc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "input_image", "norm_rect", true), this.j = { classifications: [] }, Fn(t2 = this.h = new ro(), 0, 1, e2 = new ks());
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    return Fn(this.h, 0, 2, bo(t2, Sn(this.h, vs, 2))), this.l(t2);
  }
  ya(t2, e2) {
    return this.j = { classifications: [] }, Wa(this, t2, e2), this.j;
  }
  za(t2, e2, n2) {
    return this.j = { classifications: [] }, Ha(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "input_image"), Li(t2, "norm_rect"), Ri(t2, "classifications");
    const e2 = new ui();
    jn(e2, io, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), _i(n2, "IMAGE:input_image"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "CLASSIFICATIONS:classifications"), n2.o(e2), Si(t2, n2), this.g.attachProtoListener("classifications", (t3, e3) => {
      this.j = function(t4) {
        const e4 = { classifications: Rn(t4, as, 1).map((t5) => {
          var _a2, _b, _c2;
          return Ao((_b = (_a2 = Sn(t5, Ui, 4)) == null ? void 0 : _a2.g()) != null ? _b : [], Un(Cn(t5, 2)), (_c2 = Pn(t5, 3)) != null ? _c2 : "");
        }) };
        return null != Fe(on(t4, 2)) && (e4.timestampMs = Un(Fe(on(t4, 2)))), e4;
      }(us(t3)), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("classifications", (t3) => {
      Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
mc.prototype.classifyForVideo = mc.prototype.za, mc.prototype.classify = mc.prototype.ya, mc.prototype.setOptions = mc.prototype.o, mc.createFromModelPath = function(t2, e2) {
  return Xa(mc, t2, { baseOptions: { modelAssetPath: e2 } });
}, mc.createFromModelBuffer = function(t2, e2) {
  return Xa(mc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, mc.createFromOptions = function(t2, e2) {
  return Xa(mc, t2, e2);
};
var yc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", true), this.h = new so(), this.embeddings = { embeddings: [] }, Fn(t2 = this.h, 0, 1, e2 = new ks());
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    var e2 = this.h, n2 = Sn(this.h, ws, 2);
    return n2 = n2 ? n2.clone() : new ws(), void 0 !== t2.l2Normalize ? Bn(n2, 1, t2.l2Normalize) : "l2Normalize" in t2 && cn(n2, 1), void 0 !== t2.quantize ? Bn(n2, 2, t2.quantize) : "quantize" in t2 && cn(n2, 2), Fn(e2, 0, 2, n2), this.l(t2);
  }
  Fa(t2, e2) {
    return Wa(this, t2, e2), this.embeddings;
  }
  Ga(t2, e2, n2) {
    return Ha(this, t2, n2, e2), this.embeddings;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect"), Ri(t2, "embeddings_out");
    const e2 = new ui();
    jn(e2, oo, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "EMBEDDINGS:embeddings_out"), n2.o(e2), Si(t2, n2), this.g.attachProtoListener("embeddings_out", (t3, e3) => {
      t3 = ys(t3), this.embeddings = function(t4) {
        return { embeddings: Rn(t4, ds, 1).map((t5) => {
          var _a2, _b, _c2, _d, _e2, _f;
          const e4 = { headIndex: (_a2 = Un(Cn(t5, 3))) != null ? _a2 : -1, headName: (_c2 = (_b = Pn(t5, 4)) != null ? _b : "") != null ? _c2 : "" };
          if (void 0 !== kn(t5, ls, bn(t5, 1))) t5 = dn(t5 = Sn(t5, ls, bn(t5, 1)), 1, we), e4.floatEmbedding = t5;
          else {
            const n3 = new Uint8Array(0);
            e4.quantizedEmbedding = (_f = (_e2 = (_d = Sn(t5, fs, bn(t5, 2))) == null ? void 0 : _d.ua()) == null ? void 0 : _e2.wa()) != null ? _f : n3;
          }
          return e4;
        }), timestampMs: Un(Fe(on(t4, 2))) };
      }(t3), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("embeddings_out", (t3) => {
      Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
yc.cosineSimilarity = function(t2, e2) {
  if (t2.floatEmbedding && e2.floatEmbedding) t2 = Ro(t2.floatEmbedding, e2.floatEmbedding);
  else {
    if (!t2.quantizedEmbedding || !e2.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    t2 = Ro(Lo(t2.quantizedEmbedding), Lo(e2.quantizedEmbedding));
  }
  return t2;
}, yc.prototype.embedForVideo = yc.prototype.Ga, yc.prototype.embed = yc.prototype.Fa, yc.prototype.setOptions = yc.prototype.o, yc.createFromModelPath = function(t2, e2) {
  return Xa(yc, t2, { baseOptions: { modelAssetPath: e2 } });
}, yc.createFromModelBuffer = function(t2, e2) {
  return Xa(yc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, yc.createFromOptions = function(t2, e2) {
  return Xa(yc, t2, e2);
};
var vc = class {
  constructor(t2, e2, n2) {
    this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
  }
  close() {
    var _a2, _b;
    (_a2 = this.confidenceMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    }), (_b = this.categoryMask) == null ? void 0 : _b.close();
  }
};
function _c(t2) {
  t2.categoryMask = void 0, t2.confidenceMasks = void 0, t2.qualityScores = void 0;
}
function wc(t2) {
  try {
    const e2 = new vc(t2.confidenceMasks, t2.categoryMask, t2.qualityScores);
    if (!t2.j) return e2;
    t2.j(e2);
  } finally {
    Ko(t2);
  }
}
vc.prototype.close = vc.prototype.close;
var Tc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", false), this.u = [], this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new lo(), this.v = new ao(), Fn(this.h, 0, 3, this.v), Fn(t2 = this.h, 0, 1, e2 = new ks());
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b;
    return void 0 !== t2.displayNamesLocale ? cn(this.h, 2, Oe(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && cn(this.h, 2), "outputCategoryMask" in t2 && (this.outputCategoryMask = (_a2 = t2.outputCategoryMask) != null ? _a2 : false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = (_b = t2.outputConfidenceMasks) != null ? _b : true), super.l(t2);
  }
  N() {
    !function(t2) {
      var _a2, _b, _c2;
      const e2 = Rn(t2.da(), Ti, 1).filter((t3) => {
        var _a3;
        return ((_a3 = Pn(t3, 1)) != null ? _a3 : "").includes("mediapipe.tasks.TensorsToSegmentationCalculator");
      });
      if (t2.u = [], 1 < e2.length) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      1 === e2.length && ((_c2 = (_b = (_a2 = Sn(e2[0], ui, 7)) == null ? void 0 : _a2.l()) == null ? void 0 : _b.g()) != null ? _c2 : /* @__PURE__ */ new Map()).forEach((e3, n2) => {
        var _a3;
        t2.u[Number(n2)] = (_a3 = Pn(e3, 1)) != null ? _a3 : "";
      });
    }(this);
  }
  ea(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.j = "function" == typeof e2 ? e2 : n2, _c(this), Wa(this, t2, r2), wc(this);
  }
  Sa(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.j = "function" == typeof n2 ? n2 : r2, _c(this), Ha(this, t2, i2, e2), wc(this);
  }
  Ja() {
    return this.u;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect");
    const e2 = new ui();
    jn(e2, fo, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), n2.o(e2), Si(t2, n2), Ho(this, t2), this.outputConfidenceMasks && (Ri(t2, "confidence_masks"), wi(n2, "CONFIDENCE_MASKS:confidence_masks"), Yo(this, "confidence_masks"), this.g.ca("confidence_masks", (t3, e3) => {
      this.confidenceMasks = t3.map((t4) => Ya(this, t4, true, !this.j)), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], Wo(this, t3);
    })), this.outputCategoryMask && (Ri(t2, "category_mask"), wi(n2, "CATEGORY_MASK:category_mask"), Yo(this, "category_mask"), this.g.ba("category_mask", (t3, e3) => {
      this.categoryMask = Ya(this, t3, false, !this.j), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, Wo(this, t3);
    })), Ri(t2, "quality_scores"), wi(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
      this.qualityScores = t3, Wo(this, e3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Tc.prototype.getLabels = Tc.prototype.Ja, Tc.prototype.segmentForVideo = Tc.prototype.Sa, Tc.prototype.segment = Tc.prototype.ea, Tc.prototype.setOptions = Tc.prototype.o, Tc.createFromModelPath = function(t2, e2) {
  return Xa(Tc, t2, { baseOptions: { modelAssetPath: e2 } });
}, Tc.createFromModelBuffer = function(t2, e2) {
  return Xa(Tc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Tc.createFromOptions = function(t2, e2) {
  return Xa(Tc, t2, e2);
};
var Ec = class {
  constructor(t2, e2, n2) {
    this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
  }
  close() {
    var _a2, _b;
    (_a2 = this.confidenceMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    }), (_b = this.categoryMask) == null ? void 0 : _b.close();
  }
};
Ec.prototype.close = Ec.prototype.close;
var bc = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Ac = [0, Pr, -2];
var xc = [0, Lr, -3, Br];
var kc = [0, Lr, -3, Br, Lr, -1];
var Sc = [0, kc];
var Lc = [0, Sc, Ac];
var Rc = [0, kc, Ac];
var Fc = [0, kc, Pr, -1];
var Mc = [0, Fc, Ac];
var Oc = [0, Lr, -3, Br, Ac, -1];
var Ic = [0, Lr, -3, Br, Kr];
var Cc = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Pc = [0, Lr, -1, Br];
var Uc = class extends Vn {
  constructor() {
    super();
  }
};
Uc.A = [1];
var Dc = class extends Vn {
  constructor(t2) {
    super(t2);
  }
};
var Bc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15];
var Nc = [0, Bc, Wr, kc, Wr, Rc, Wr, Sc, Wr, Lc, Wr, Pc, Wr, Ic, Wr, xc, Wr, [0, Vr, Lr, -2, Br, Pr, Br, -1, 2, Lr, Ac], Wr, Fc, Wr, Mc, Lr, Ac, Vr, Wr, Oc, Wr, [0, Sr, Pc]];
var Gc = [0, Vr, Pr, -1, Br];
var jc = class extends Vn {
  constructor() {
    super();
  }
};
jc.A = [1], jc.prototype.g = Qr([0, Sr, Nc, Vr, Gc]);
var Vc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect_in", false), this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new lo(), this.v = new ao(), Fn(this.h, 0, 3, this.v), Fn(t2 = this.h, 0, 1, e2 = new ks());
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b;
    return "outputCategoryMask" in t2 && (this.outputCategoryMask = (_a2 = t2.outputCategoryMask) != null ? _a2 : false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = (_b = t2.outputConfidenceMasks) != null ? _b : true), super.l(t2);
  }
  ea(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    this.j = "function" == typeof n2 ? n2 : r2, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n2 = this.I + 1, r2 = new jc();
    const s2 = new Dc();
    var o2 = new bc();
    if (Nn(o2, 1, 255), Fn(s2, 0, 12, o2), e2.keypoint && e2.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (e2.keypoint) {
      var a2 = new Cc();
      Bn(a2, 3, true), Gn(a2, 1, e2.keypoint.x), Gn(a2, 2, e2.keypoint.y), Mn(s2, 5, Bc, a2);
    } else {
      if (!e2.scribble) throw Error("Must provide either a keypoint or a scribble.");
      for (a2 of (o2 = new Uc(), e2.scribble)) Bn(e2 = new Cc(), 3, true), Gn(e2, 1, a2.x), Gn(e2, 2, a2.y), In(o2, Cc, e2);
      Mn(s2, 15, Bc, o2);
    }
    In(r2, Dc, s2), this.g.addProtoToStream(r2.g(), "drishti.RenderData", "roi_in", n2), Wa(this, t2, i2);
    t: {
      try {
        const t3 = new Ec(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var c2 = t3;
          break t;
        }
        this.j(t3);
      } finally {
        Ko(this);
      }
      c2 = void 0;
    }
    return c2;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "roi_in"), Li(t2, "norm_rect_in");
    const e2 = new ui();
    jn(e2, fo, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "ROI:roi_in"), _i(n2, "NORM_RECT:norm_rect_in"), n2.o(e2), Si(t2, n2), Ho(this, t2), this.outputConfidenceMasks && (Ri(t2, "confidence_masks"), wi(n2, "CONFIDENCE_MASKS:confidence_masks"), Yo(this, "confidence_masks"), this.g.ca("confidence_masks", (t3, e3) => {
      this.confidenceMasks = t3.map((t4) => Ya(this, t4, true, !this.j)), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], Wo(this, t3);
    })), this.outputCategoryMask && (Ri(t2, "category_mask"), wi(n2, "CATEGORY_MASK:category_mask"), Yo(this, "category_mask"), this.g.ba("category_mask", (t3, e3) => {
      this.categoryMask = Ya(this, t3, false, !this.j), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, Wo(this, t3);
    })), Ri(t2, "quality_scores"), wi(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
      this.qualityScores = t3, Wo(this, e3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Vc.prototype.segment = Vc.prototype.ea, Vc.prototype.setOptions = Vc.prototype.o, Vc.createFromModelPath = function(t2, e2) {
  return Xa(Vc, t2, { baseOptions: { modelAssetPath: e2 } });
}, Vc.createFromModelBuffer = function(t2, e2) {
  return Xa(Vc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Vc.createFromOptions = function(t2, e2) {
  return Xa(Vc, t2, e2);
};
var Xc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "input_frame_gpu", "norm_rect", false), this.j = { detections: [] }, Fn(t2 = this.h = new po(), 0, 1, e2 = new ks());
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    return void 0 !== t2.displayNamesLocale ? cn(this.h, 2, Oe(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && cn(this.h, 2), void 0 !== t2.maxResults ? Nn(this.h, 3, t2.maxResults) : "maxResults" in t2 && cn(this.h, 3), void 0 !== t2.scoreThreshold ? Gn(this.h, 4, t2.scoreThreshold) : "scoreThreshold" in t2 && cn(this.h, 4), void 0 !== t2.categoryAllowlist ? wn(this.h, 5, t2.categoryAllowlist) : "categoryAllowlist" in t2 && cn(this.h, 5), void 0 !== t2.categoryDenylist ? wn(this.h, 6, t2.categoryDenylist) : "categoryDenylist" in t2 && cn(this.h, 6), this.l(t2);
  }
  G(t2, e2) {
    return this.j = { detections: [] }, Wa(this, t2, e2), this.j;
  }
  H(t2, e2, n2) {
    return this.j = { detections: [] }, Ha(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Fi();
    Li(t2, "input_frame_gpu"), Li(t2, "norm_rect"), Ri(t2, "detections");
    const e2 = new ui();
    jn(e2, go, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.ObjectDetectorGraph"), _i(n2, "IMAGE:input_frame_gpu"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "DETECTIONS:detections"), n2.o(e2), Si(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3) t3 = $i(e4), this.j.detections.push(xo(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      Wo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Xc.prototype.detectForVideo = Xc.prototype.H, Xc.prototype.detect = Xc.prototype.G, Xc.prototype.setOptions = Xc.prototype.o, Xc.createFromModelPath = function(t2, e2) {
  return __async(this, null, function* () {
    return Xa(Xc, t2, { baseOptions: { modelAssetPath: e2 } });
  });
}, Xc.createFromModelBuffer = function(t2, e2) {
  return Xa(Xc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Xc.createFromOptions = function(t2, e2) {
  return Xa(Xc, t2, e2);
};
function zc(t2) {
  t2.landmarks = [], t2.worldLandmarks = [], t2.v = void 0;
}
function Wc(t2) {
  try {
    const e2 = new class {
      constructor(t3, e3, n2) {
        this.landmarks = t3, this.worldLandmarks = e3, this.g = n2;
      }
      close() {
        var _a2;
        (_a2 = this.g) == null ? void 0 : _a2.forEach((t3) => {
          t3.close();
        });
      }
    }(t2.landmarks, t2.worldLandmarks, t2.v);
    if (!t2.u) return e2;
    t2.u(e2);
  } finally {
    Ko(t2);
  }
}
var Hc = class extends Ka {
  constructor(t2, e2) {
    super(new Va(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = false, Fn(t2 = this.h = new wo(), 0, 1, e2 = new ks()), this.B = new vo(), Fn(this.h, 0, 3, this.B), this.j = new mo(), Fn(this.h, 0, 2, this.j), Nn(this.j, 4, 1), Gn(this.j, 2, 0.5), Gn(this.B, 2, 0.5), Gn(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Sn(this.h, ks, 1);
  }
  set baseOptions(t2) {
    Fn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c2, _d, _e2;
    return "numPoses" in t2 && Nn(this.j, 4, (_a2 = t2.numPoses) != null ? _a2 : 1), "minPoseDetectionConfidence" in t2 && Gn(this.j, 2, (_b = t2.minPoseDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Gn(this.h, 4, (_c2 = t2.minTrackingConfidence) != null ? _c2 : 0.5), "minPosePresenceConfidence" in t2 && Gn(this.B, 2, (_d = t2.minPosePresenceConfidence) != null ? _d : 0.5), "outputSegmentationMasks" in t2 && (this.outputSegmentationMasks = (_e2 = t2.outputSegmentationMasks) != null ? _e2 : false), this.l(t2);
  }
  G(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.u = "function" == typeof e2 ? e2 : n2, zc(this), Wa(this, t2, r2), Wc(this);
  }
  H(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.u = "function" == typeof n2 ? n2 : r2, zc(this), Ha(this, t2, i2, e2), Wc(this);
  }
  m() {
    var t2 = new Fi();
    Li(t2, "image_in"), Li(t2, "norm_rect"), Ri(t2, "normalized_landmarks"), Ri(t2, "world_landmarks"), Ri(t2, "segmentation_masks");
    const e2 = new ui();
    jn(e2, Eo, this.h);
    const n2 = new Ti();
    vi(n2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), _i(n2, "IMAGE:image_in"), _i(n2, "NORM_RECT:norm_rect"), wi(n2, "NORM_LANDMARKS:normalized_landmarks"), wi(n2, "WORLD_LANDMARKS:world_landmarks"), n2.o(e2), Si(t2, n2), Ho(this, t2), this.g.attachProtoVectorListener("normalized_landmarks", (t3, e3) => {
      this.landmarks = [];
      for (const e4 of t3) t3 = rs(e4), this.landmarks.push(ko(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("normalized_landmarks", (t3) => {
      this.landmarks = [], Wo(this, t3);
    }), this.g.attachProtoVectorListener("world_landmarks", (t3, e3) => {
      this.worldLandmarks = [];
      for (const e4 of t3) t3 = Qi(e4), this.worldLandmarks.push(So(t3));
      Wo(this, e3);
    }), this.g.attachEmptyPacketListener("world_landmarks", (t3) => {
      this.worldLandmarks = [], Wo(this, t3);
    }), this.outputSegmentationMasks && (wi(n2, "SEGMENTATION_MASK:segmentation_masks"), Yo(this, "segmentation_masks"), this.g.ca("segmentation_masks", (t3, e3) => {
      this.v = t3.map((t4) => Ya(this, t4, true, !this.u)), Wo(this, e3);
    }), this.g.attachEmptyPacketListener("segmentation_masks", (t3) => {
      this.v = [], Wo(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Hc.prototype.detectForVideo = Hc.prototype.H, Hc.prototype.detect = Hc.prototype.G, Hc.prototype.setOptions = Hc.prototype.o, Hc.createFromModelPath = function(t2, e2) {
  return Xa(Hc, t2, { baseOptions: { modelAssetPath: e2 } });
}, Hc.createFromModelBuffer = function(t2, e2) {
  return Xa(Hc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Hc.createFromOptions = function(t2, e2) {
  return Xa(Hc, t2, e2);
}, Hc.POSE_CONNECTIONS = Na([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);

// ../../node_modules/.pnpm/@livekit+track-processors@0.3.2_livekit-client@2.1.0/node_modules/@livekit/track-processors/dist/index.mjs
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps2 = (a2, b2) => __defProps2(a2, __getOwnPropDescs2(b2));
var ProcessorWrapper = class {
  static get isSupported() {
    return typeof MediaStreamTrackGenerator !== "undefined" && typeof MediaStreamTrackProcessor !== "undefined";
  }
  constructor(transformer, name) {
    this.name = name;
    this.transformer = transformer;
    this.transformer.restart;
  }
  setup(opts) {
    return __async(this, null, function* () {
      var _a2, _b, _c2, _d;
      this.source = opts.track;
      const origConstraints = this.source.getConstraints();
      yield this.source.applyConstraints(__spreadProps2(__spreadValues2({}, origConstraints), {
        // @ts-expect-error when a mediastream track is resized and/or cropped, the `VideoFrame` will have a coded height/width of the original video size
        // this leads to a shift of the underlying video as the frame itself is being rendered with the coded size
        // but image segmentation is based on the display dimensions (-> the cropped version)
        // in order to prevent this, we force the resize mode to "none"
        resizeMode: "none"
      }));
      this.sourceSettings = this.source.getSettings();
      this.sourceDummy = opts.element;
      if (this.sourceDummy instanceof HTMLVideoElement) {
        this.sourceDummy.height = (_a2 = this.sourceSettings.height) != null ? _a2 : 300;
        this.sourceDummy.width = (_b = this.sourceSettings.width) != null ? _b : 300;
      }
      if (!(this.sourceDummy instanceof HTMLVideoElement)) {
        throw TypeError("Currently only video transformers are supported");
      }
      this.processor = new MediaStreamTrackProcessor({ track: this.source });
      this.trackGenerator = new MediaStreamTrackGenerator({
        kind: "video",
        signalTarget: this.source
      });
      this.canvas = new OffscreenCanvas(
        (_c2 = this.sourceSettings.width) != null ? _c2 : 300,
        (_d = this.sourceSettings.height) != null ? _d : 300
      );
    });
  }
  init(opts) {
    return __async(this, null, function* () {
      yield this.setup(opts);
      if (!this.canvas || !this.processor || !this.trackGenerator) {
        throw new TypeError("Expected both canvas and processor to be defined after setup");
      }
      let readableStream = this.processor.readable;
      yield this.transformer.init({
        outputCanvas: this.canvas,
        inputElement: this.sourceDummy
      });
      readableStream = readableStream.pipeThrough(this.transformer.transformer);
      readableStream.pipeTo(this.trackGenerator.writable).catch((e2) => console.error("error when trying to pipe", e2)).finally(() => this.destroy());
      this.processedTrack = this.trackGenerator;
    });
  }
  restart(opts) {
    return __async(this, null, function* () {
      yield this.destroy();
      return this.init(opts);
    });
  }
  restartTransformer(...options) {
    return __async(this, null, function* () {
      this.transformer.restart(options[0]);
    });
  }
  updateTransformerOptions(...options) {
    return __async(this, null, function* () {
      this.transformer.update(options[0]);
    });
  }
  destroy() {
    return __async(this, null, function* () {
      var _a2;
      yield this.transformer.destroy();
      (_a2 = this.trackGenerator) == null ? void 0 : _a2.stop();
    });
  }
};
var dependencies = {
  "@mediapipe/holistic": "0.5.1675471629",
  "@mediapipe/tasks-vision": "0.10.9"
};
var VideoTransformer = class {
  constructor() {
    this.isDisabled = false;
  }
  init(_0) {
    return __async(this, arguments, function* ({
      outputCanvas,
      inputElement: inputVideo
    }) {
      var _a2;
      if (!(inputVideo instanceof HTMLVideoElement)) {
        throw TypeError("Video transformer needs a HTMLVideoElement as input");
      }
      this.transformer = new TransformStream({
        transform: (frame, controller) => this.transform(frame, controller)
      });
      this.canvas = outputCanvas || null;
      if (outputCanvas) {
        this.ctx = ((_a2 = this.canvas) == null ? void 0 : _a2.getContext("2d")) || void 0;
      }
      this.inputVideo = inputVideo;
      this.isDisabled = false;
    });
  }
  restart(_0) {
    return __async(this, arguments, function* ({ outputCanvas, inputElement: inputVideo }) {
      this.canvas = outputCanvas || null;
      this.ctx = this.canvas.getContext("2d") || void 0;
      this.inputVideo = inputVideo;
      this.isDisabled = false;
    });
  }
  destroy() {
    return __async(this, null, function* () {
      this.isDisabled = true;
      this.canvas = void 0;
      this.ctx = void 0;
    });
  }
};
var BackgroundProcessor = class _this extends VideoTransformer {
  constructor(opts) {
    super();
    this.backgroundImage = null;
    this.options = opts;
    this.update(opts);
  }
  static get isSupported() {
    return typeof OffscreenCanvas !== "undefined";
  }
  init(_0) {
    return __async(this, arguments, function* ({ outputCanvas, inputElement: inputVideo }) {
      var _a2, _b, _c2, _d, _e2;
      yield __superGet(_this.prototype, this, "init").call(this, { outputCanvas, inputElement: inputVideo });
      const fileSet = yield Co.forVisionTasks(
        (_b = (_a2 = this.options.assetPaths) == null ? void 0 : _a2.tasksVisionFileSet) != null ? _b : `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${dependencies["@mediapipe/tasks-vision"]}/wasm`
      );
      this.imageSegmenter = yield Tc.createFromOptions(fileSet, {
        baseOptions: __spreadValues2({
          modelAssetPath: (_d = (_c2 = this.options.assetPaths) == null ? void 0 : _c2.modelAssetPath) != null ? _d : "https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite",
          delegate: "GPU"
        }, this.options.segmenterOptions),
        runningMode: "VIDEO",
        outputCategoryMask: true,
        outputConfidenceMasks: false
      });
      if (((_e2 = this.options) == null ? void 0 : _e2.imagePath) && !this.backgroundImage) {
        yield this.loadBackground(this.options.imagePath).catch((err) => console.error("Error while loading processor background image: ", err));
      }
    });
  }
  destroy() {
    return __async(this, null, function* () {
      var _a2;
      yield __superGet(_this.prototype, this, "destroy").call(this);
      yield (_a2 = this.imageSegmenter) == null ? void 0 : _a2.close();
      this.backgroundImage = null;
    });
  }
  loadBackground(path) {
    return __async(this, null, function* () {
      const img = new Image();
      yield new Promise((resolve, reject) => {
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = path;
      });
      const imageData = yield createImageBitmap(img);
      this.backgroundImage = imageData;
    });
  }
  transform(frame, controller) {
    return __async(this, null, function* () {
      var _a2;
      try {
        if (this.isDisabled) {
          controller.enqueue(frame);
          return;
        }
        if (!this.canvas) {
          throw TypeError("Canvas needs to be initialized first");
        }
        let startTimeMs = performance.now();
        (_a2 = this.imageSegmenter) == null ? void 0 : _a2.segmentForVideo(
          this.inputVideo,
          startTimeMs,
          (result) => this.segmentationResults = result
        );
        if (this.blurRadius) {
          yield this.blurBackground(frame);
        } else {
          yield this.drawVirtualBackground(frame);
        }
        const newFrame = new VideoFrame(this.canvas, {
          timestamp: frame.timestamp || Date.now()
        });
        controller.enqueue(newFrame);
      } finally {
        frame.close();
      }
    });
  }
  update(opts) {
    return __async(this, null, function* () {
      this.options = opts;
      if (opts.blurRadius) {
        this.blurRadius = opts.blurRadius;
      } else if (opts.imagePath) {
        yield this.loadBackground(opts.imagePath);
      }
    });
  }
  drawVirtualBackground(frame) {
    return __async(this, null, function* () {
      var _a2;
      if (!this.canvas || !this.ctx || !this.segmentationResults || !this.inputVideo)
        return;
      if ((_a2 = this.segmentationResults) == null ? void 0 : _a2.categoryMask) {
        this.ctx.filter = "blur(10px)";
        this.ctx.globalCompositeOperation = "copy";
        const bitmap = yield maskToBitmap(
          this.segmentationResults.categoryMask,
          this.segmentationResults.categoryMask.width,
          this.segmentationResults.categoryMask.height
        );
        this.ctx.drawImage(bitmap, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.filter = "none";
        this.ctx.globalCompositeOperation = "source-in";
        if (this.backgroundImage) {
          this.ctx.drawImage(
            this.backgroundImage,
            0,
            0,
            this.backgroundImage.width,
            this.backgroundImage.height,
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
        } else {
          this.ctx.fillStyle = "#00FF00";
          this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.ctx.globalCompositeOperation = "destination-over";
      }
      this.ctx.drawImage(frame, 0, 0, this.canvas.width, this.canvas.height);
    });
  }
  blurBackground(frame) {
    return __async(this, null, function* () {
      var _a2, _b;
      if (!this.ctx || !this.canvas || !((_b = (_a2 = this.segmentationResults) == null ? void 0 : _a2.categoryMask) == null ? void 0 : _b.canvas) || !this.inputVideo) {
        return;
      }
      this.ctx.save();
      this.ctx.globalCompositeOperation = "copy";
      const bitmap = yield maskToBitmap(
        this.segmentationResults.categoryMask,
        this.segmentationResults.categoryMask.width,
        this.segmentationResults.categoryMask.height
      );
      this.ctx.filter = "blur(3px)";
      this.ctx.globalCompositeOperation = "copy";
      this.ctx.drawImage(bitmap, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.filter = "none";
      this.ctx.globalCompositeOperation = "source-out";
      this.ctx.drawImage(frame, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.globalCompositeOperation = "destination-over";
      this.ctx.filter = `blur(${this.blurRadius}px)`;
      this.ctx.drawImage(frame, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
    });
  }
};
function maskToBitmap(mask, videoWidth, videoHeight) {
  const dataArray = new Uint8ClampedArray(videoWidth * videoHeight * 4);
  const result = mask.getAsUint8Array();
  for (let i2 = 0; i2 < result.length; i2 += 1) {
    dataArray[i2 * 4] = result[i2];
    dataArray[i2 * 4 + 1] = result[i2];
    dataArray[i2 * 4 + 2] = result[i2];
    dataArray[i2 * 4 + 3] = result[i2];
  }
  const dataNew = new ImageData(dataArray, videoWidth, videoHeight);
  return createImageBitmap(dataNew);
}
var BackgroundBlur = (blurRadius = 10, segmenterOptions) => {
  return BackgroundProcessor2({ blurRadius, segmenterOptions }, "background-blur");
};
var BackgroundProcessor2 = (options, name = "background-processor") => {
  const isProcessorSupported = ProcessorWrapper.isSupported && BackgroundProcessor.isSupported;
  if (!isProcessorSupported) {
    throw new Error("processor is not supported in this browser");
  }
  const processor = new ProcessorWrapper(new BackgroundProcessor(options), name);
  return processor;
};

// src/prefabs/BlurIndicater.tsx
var import_react2 = __toESM(require("react"));
function BlurIndicater({ source, parentCallback }) {
  const state = {
    defaultDevices: /* @__PURE__ */ new Map(),
    bitrateInterval: void 0,
    blur: BackgroundBlur(10, { delegate: "GPU" })
  };
  const room = useRoomContext();
  const [isBlur, setIsBlur] = import_react2.default.useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = import_react2.default.useState(false);
  const track = room == null ? void 0 : room.localParticipant.getTrackPublication(source);
  import_react2.default.useEffect(() => {
    if (track == null ? void 0 : track.isMuted) {
      setIsCameraEnabled(false);
    } else {
      setIsCameraEnabled(true);
    }
  }, [track]);
  const toggleBlur = () => __async(this, null, function* () {
    var _a2;
    if (!room) return;
    try {
      const camTrack = room.localParticipant.getTrackPublication(source).track;
      if (((_a2 = camTrack.getProcessor()) == null ? void 0 : _a2.name) !== "background-blur") {
        yield camTrack.setProcessor(state.blur);
        setIsBlur(true);
      } else {
        yield camTrack.stopProcessor();
        setIsBlur(false);
      }
    } catch (e2) {
      console.log(`ERROR: ${e2.message}`);
    } finally {
      parentCallback();
    }
  });
  return /* @__PURE__ */ import_react2.default.createElement("button", { className: "tl-blur lk-button", onClick: toggleBlur, disabled: isCameraEnabled }, isBlur ? "Remove Blur" : "Blur Background");
}

// src/prefabs/ExtraOptionMenu.tsx
var import_livekit_client18 = require("livekit-client");

// src/prefabs/WhiteboardIndicater.tsx
var import_react3 = __toESM(require("react"));
function WhiteboardIndicater({
  shareScreenTracks,
  parentCallback
}) {
  const room = useRoomContext();
  const { dispatch, state } = useLayoutContext().whiteboard;
  const participant = room.localParticipant;
  const encoder = new TextEncoder();
  const { isWhiteboardHost, isWhiteboardShared } = useWhiteboard();
  const [disableWhiteboard, setDisableWhiteboard] = import_react3.default.useState(false);
  const [title, setTitle] = import_react3.default.useState("Whiteboard");
  import_react3.default.useEffect(() => {
    if (shareScreenTracks !== 0) {
      setDisableWhiteboard(true);
      setTitle("Whiteboard");
    } else if (isWhiteboardShared) {
      if (isWhiteboardHost) {
        setDisableWhiteboard(false);
        setTitle("Close Whiteboard");
      } else {
        setDisableWhiteboard(true);
        setTitle("Whiteboard");
      }
    } else {
      setDisableWhiteboard(false);
      setTitle("Whiteboard");
    }
  }, [isWhiteboardHost, isWhiteboardShared, shareScreenTracks]);
  const toggleWhiteboard = () => __async(this, null, function* () {
    if (!room) return;
    try {
      if (state == null ? void 0 : state.show_whiteboard) {
        if (dispatch) {
          dispatch({ msg: "hide_whiteboard" });
        }
        const strData = JSON.stringify({ openWhiteboard: false });
        const data = encoder.encode(strData);
        room.localParticipant.publishData(data, { reliable: false });
        updateMeta(false);
      } else {
        if (dispatch) {
          dispatch({ msg: "show_whiteboard" });
        }
        const strData = JSON.stringify({ openWhiteboard: true });
        const data = encoder.encode(strData);
        room.localParticipant.publishData(data, { reliable: false });
        updateMeta(true);
      }
    } catch (e2) {
      console.log(`ERROR: ${e2.message}`);
    } finally {
      parentCallback();
    }
  });
  const updateMeta = (data) => {
    const postData = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ room: room.name, whiteboard: data, identity: participant.identity })
    };
    fetch(`/api/update-room-meta`, postData).then((res) => __async(this, null, function* () {
      if (res.status) {
      } else {
        throw Error("Error fetching server url, check server logs");
      }
    }));
  };
  return /* @__PURE__ */ import_react3.default.createElement("button", { disabled: disableWhiteboard, className: "tl-blur lk-button", onClick: toggleWhiteboard }, title);
}

// src/prefabs/ExtraOptionMenu.tsx
function ExtraOptionMenu(_a2) {
  var _b = _a2, {
    blurEnabled,
    shareScreenTracks
  } = _b, props = __objRest(_b, [
    "blurEnabled",
    "shareScreenTracks"
  ]);
  const [isOpen, setIsOpen] = React127.useState(false);
  const [updateRequired, setUpdateRequired] = React127.useState(true);
  const button = React127.useRef(null);
  const blurButtonRef = React127.useRef(null);
  const tooltip = React127.useRef(null);
  const [showDropdown, setShowDropdown] = React127.useState(false);
  React127.useLayoutEffect(() => {
    if (button.current && tooltip.current && updateRequired) {
      (0, import_components_core58.computeMenuPosition)(button.current, tooltip.current).then(({ x: x2, y: y2 }) => {
        if (tooltip.current) {
          Object.assign(tooltip.current.style, { left: `${x2}px`, top: `${y2 + 5}px` });
        }
      });
      setUpdateRequired(false);
    }
  }, [button, tooltip, updateRequired]);
  const handleClickOutside = React127.useCallback(
    (event) => {
      if (!tooltip.current) {
        return;
      }
      if (event.target === blurButtonRef.current) {
        return;
      }
      if (event.target === button.current) {
        return;
      }
      if (isOpen && (0, import_components_core58.wasClickOutside)(tooltip.current, event)) {
        setIsOpen(false);
        setShowDropdown(false);
      }
    },
    [isOpen, tooltip, button]
  );
  function changeState() {
    setIsOpen(false);
    setShowDropdown(false);
  }
  React127.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", () => setUpdateRequired(true));
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", () => setUpdateRequired(true));
    };
  }, [handleClickOutside]);
  return /* @__PURE__ */ React127.createElement(React127.Fragment, null, /* @__PURE__ */ React127.createElement(
    "button",
    __spreadProps(__spreadValues({
      className: "lk-button tl-extra-menu",
      "aria-pressed": isOpen
    }, props), {
      onClick: () => setIsOpen(!isOpen),
      ref: button
    })
  ), /* @__PURE__ */ React127.createElement(
    "div",
    {
      className: "lk-device-menu tl-extra-menu-list",
      ref: tooltip,
      style: { visibility: isOpen ? "visible" : "hidden" }
    },
    /* @__PURE__ */ React127.createElement("ul", { className: "lk-media-device-select lk-list", style: { display: !showDropdown ? "unset" : "none" } }, /* @__PURE__ */ React127.createElement("li", null, /* @__PURE__ */ React127.createElement(WhiteboardIndicater, { shareScreenTracks, parentCallback: changeState })), blurEnabled && /* @__PURE__ */ React127.createElement("li", null, /* @__PURE__ */ React127.createElement(BlurIndicater, { source: import_livekit_client18.Track.Source.Camera, parentCallback: changeState }))),
    /* @__PURE__ */ React127.createElement("div", { className: "arrow" }, /* @__PURE__ */ React127.createElement("div", { className: "arrow-shape" }))
  ));
}

// src/components/controls/StartMediaButton.tsx
var React128 = __toESM(require("react"));
var StartMediaButton = /* @__PURE__ */ React128.forwardRef(function StartMediaButton2(_a2, ref) {
  var _b = _a2, { label } = _b, props = __objRest(_b, ["label"]);
  const room = useRoomContext();
  const { mergedProps: audioProps, canPlayAudio } = useStartAudio({ room, props });
  const { mergedProps, canPlayVideo } = useStartVideo({ room, props: audioProps });
  const _a3 = mergedProps, { style } = _a3, restProps = __objRest(_a3, ["style"]);
  style.display = canPlayAudio && canPlayVideo ? "none" : "block";
  return /* @__PURE__ */ React128.createElement("button", __spreadValues({ ref, style }, restProps), label != null ? label : `Start ${!canPlayAudio ? "Audio" : "Video"}`);
});

// src/components/controls/SettingsMenuToggle.tsx
var React130 = __toESM(require("react"));

// src/hooks/useSettingsToggle.ts
var React129 = __toESM(require("react"));
function useSettingsToggle({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const className = "lk-button lk-settings-toggle";
  const mergedProps = React129.useMemo(() => {
    return mergeProps(props, {
      className,
      onClick: () => {
        if (dispatch) dispatch({ msg: "toggle_settings" });
      },
      "aria-pressed": (state == null ? void 0 : state.showSettings) ? "true" : "false"
    });
  }, [props, className, dispatch, state]);
  return { mergedProps };
}

// src/components/controls/SettingsMenuToggle.tsx
var SettingsMenuToggle = /* @__PURE__ */ React130.forwardRef(function SettingsMenuToggle2(props, ref) {
  const { mergedProps } = useSettingsToggle({ props });
  return /* @__PURE__ */ React130.createElement("button", __spreadValues({ ref }, mergedProps), props.children);
});

// src/prefabs/ControlBar.tsx
function ControlBar(_a2) {
  var _b = _a2, {
    variation,
    controls,
    waitingRoomCount,
    screenShareTracks,
    isWhiteboard,
    saveUserChoices: saveUserChoices2 = true,
    showExtraSettingMenu
  } = _b, props = __objRest(_b, [
    "variation",
    "controls",
    "waitingRoomCount",
    "screenShareTracks",
    "isWhiteboard",
    "saveUserChoices",
    "showExtraSettingMenu"
  ]);
  var _a3, _b2, _c2, _d, _e2, _f, _g;
  const layoutContext = useMaybeLayoutContext();
  const [isChatOpen, setIsChatOpen] = React131.useState(false);
  const [isShareLinkOpen, setIsShareLinkOpen] = React131.useState(false);
  const [isUserOpen, setIsUserOpen] = React131.useState(false);
  const { state } = useLayoutContext().widget;
  React131.useEffect(() => {
    var _a4, _b3, _c3, _d2, _e3, _f2;
    if (((_a4 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _a4.showChat) == "show_chat") {
      setIsChatOpen(((_b3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _b3.showChat) == "show_chat");
    } else if (((_c3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _c3.showChat) == "show_invite") {
      setIsShareLinkOpen(((_d2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _d2.showChat) == "show_invite");
    } else if (((_e3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _e3.showChat) == "show_users") {
      setIsUserOpen(((_f2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _f2.showChat) == "show_users");
    }
  }, [(_a3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _a3.showChat]);
  const { isWhiteboardShared } = useWhiteboard();
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
    (_c2 = visibleControls.microphone) != null ? _c2 : visibleControls.microphone = localPermissions.canPublish;
    (_d = visibleControls.screenShare) != null ? _d : visibleControls.screenShare = localPermissions.canPublish;
    (_e2 = visibleControls.chat) != null ? _e2 : visibleControls.chat = localPermissions.canPublishData && (controls == null ? void 0 : controls.chat);
    (_f = visibleControls.sharelink) != null ? _f : visibleControls.sharelink = localPermissions.canPublishData && (controls == null ? void 0 : controls.sharelink);
    (_g = visibleControls.users) != null ? _g : visibleControls.users = localPermissions.canPublishData && (controls == null ? void 0 : controls.users);
  }
  const showIcon = React131.useMemo(
    () => variation === "minimal" || variation === "verbose",
    [variation]
  );
  const showText = React131.useMemo(
    () => variation === "textOnly" || variation === "verbose",
    [variation]
  );
  const browserSupportsScreenSharing = (0, import_components_core59.supportsScreenSharing)();
  const [isScreenShareEnabled, setIsScreenShareEnabled] = React131.useState(false);
  const onScreenShareChange = React131.useCallback(
    (enabled) => {
      setIsScreenShareEnabled(enabled);
    },
    [setIsScreenShareEnabled]
  );
  const htmlProps = mergeProps2({ className: "lk-control-bar" }, props);
  React131.useEffect(() => {
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
  React131.useEffect(() => {
    const buttons = document.querySelectorAll("[data-lk-source]");
    if (isWhiteboardShared) {
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
  }, [isWhiteboardShared]);
  const [sharescreenTitle, setSharescreenTitle] = React131.useState("You can share your screen");
  React131.useEffect(() => {
    if (!isScreenShareEnabled && screenShareTracks !== 0) {
      setSharescreenTitle("Someone has shared screen");
    } else if (isWhiteboardShared) {
      setSharescreenTitle("Whiteboard is shared");
    } else if (isScreenShareEnabled) {
      setSharescreenTitle("You're sharing your screen");
    } else {
      setSharescreenTitle("You can share your screen");
    }
  }, [isScreenShareEnabled, screenShareTracks, isWhiteboardShared]);
  const {
    saveAudioInputEnabled,
    saveVideoInputEnabled,
    saveAudioInputDeviceId,
    saveVideoInputDeviceId
  } = usePersistentUserChoices({ preventSave: !saveUserChoices2 });
  const microphoneOnChange = React131.useCallback(
    (enabled, isUserInitiated) => isUserInitiated ? saveAudioInputEnabled(enabled) : null,
    [saveAudioInputEnabled]
  );
  const cameraOnChange = React131.useCallback(
    (enabled, isUserInitiated) => isUserInitiated ? saveVideoInputEnabled(enabled) : null,
    [saveVideoInputEnabled]
  );
  return /* @__PURE__ */ React131.createElement("div", __spreadValues({}, htmlProps), visibleControls.microphone && /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ React131.createElement(
    TrackToggle,
    {
      source: import_livekit_client19.Track.Source.Microphone,
      showIcon,
      onChange: microphoneOnChange
    },
    showText && "Microphone"
  ), /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React131.createElement(
    MediaDeviceMenu,
    {
      initialSelection: "default",
      kind: "audioinput",
      onActiveDeviceChange: (_kind, deviceId) => saveAudioInputDeviceId(deviceId != null ? deviceId : "")
    }
  ))), visibleControls.camera && /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ React131.createElement(TrackToggle, { source: import_livekit_client19.Track.Source.Camera, showIcon, onChange: cameraOnChange }, showText && "Camera"), /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React131.createElement(
    MediaDeviceMenu,
    {
      kind: "videoinput",
      onActiveDeviceChange: (_kind, deviceId) => saveVideoInputDeviceId(deviceId != null ? deviceId : "")
    }
  ))), visibleControls.screenShare && browserSupportsScreenSharing && /* @__PURE__ */ React131.createElement(
    TrackToggle,
    {
      source: import_livekit_client19.Track.Source.ScreenShare,
      captureOptions: { audio: true, selfBrowserSurface: "include" },
      showIcon,
      onChange: onScreenShareChange,
      disabled: !isScreenShareEnabled && screenShareTracks !== 0 && isWhiteboardShared,
      title: sharescreenTitle
    },
    showText && (isScreenShareEnabled ? "Stop screen share" : "Share screen")
  ), visibleControls.chat && /* @__PURE__ */ React131.createElement(ChatToggle, null, showIcon && /* @__PURE__ */ React131.createElement(ChatIcon_default, null), showText && "Chat", state && state.unreadMessages !== 0 && /* @__PURE__ */ React131.createElement("span", { className: "waiting-count" }, state.unreadMessages < 10 ? state.unreadMessages.toFixed(0) : "9+")), visibleControls.sharelink && /* @__PURE__ */ React131.createElement(ShareLinkToggle, null, showIcon && /* @__PURE__ */ React131.createElement(InviteIcon_default, null), showText && "Invite"), visibleControls.users && /* @__PURE__ */ React131.createElement(UserToggle, null, showIcon && /* @__PURE__ */ React131.createElement(UsersIcon_default, null), showText && "Participants", waitingRoomCount !== 0 && /* @__PURE__ */ React131.createElement("span", { className: "waiting-count" }, waitingRoomCount)), showExtraSettingMenu && /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React131.createElement(ExtraOptionMenu, { blurEnabled: false, shareScreenTracks: screenShareTracks }))), visibleControls.endForAll ? /* @__PURE__ */ React131.createElement("div", { className: "tl-leave lk-button-group" }, /* @__PURE__ */ React131.createElement("div", { className: "tl-leave-btn lk-button-group-menu" }, /* @__PURE__ */ React131.createElement(
    HostEndMeetingMenu,
    {
      leave: visibleControls.leave,
      leaveButton: visibleControls.leaveButton,
      endForAll: visibleControls.endForAll,
      showIcon,
      showText
    }
  ))) : /* @__PURE__ */ React131.createElement(DisconnectButton, null, showIcon && /* @__PURE__ */ React131.createElement(LeaveIcon_default, null), showText && visibleControls.leaveButton), visibleControls.settings && /* @__PURE__ */ React131.createElement(SettingsMenuToggle, null, showIcon && /* @__PURE__ */ React131.createElement(GearIcon_default, null), showText && "Settings"), /* @__PURE__ */ React131.createElement(StartMediaButton, null));
}

// src/prefabs/Users.tsx
var React134 = __toESM(require("react"));

// src/components/participant/ParticipantList.tsx
var React132 = __toESM(require("react"));
var import_livekit_client20 = require("livekit-client");
var ParticipantList = (_a2) => {
  var _b = _a2, {
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
  const p2 = useEnsureParticipant(participant);
  const trackReference = {
    participant: p2,
    source: import_livekit_client20.Track.Source.Camera
  };
  const { elementProps } = useParticipantTile({
    htmlProps,
    disableSpeakingIndicator,
    onParticipantClick,
    trackRef: trackReference
  });
  return /* @__PURE__ */ React132.createElement("div", __spreadValues({ style: { position: "relative" } }, elementProps), /* @__PURE__ */ React132.createElement(ParticipantContextIfNeeded, { participant: p2 }, children != null ? children : /* @__PURE__ */ React132.createElement(React132.Fragment, null, /* @__PURE__ */ React132.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React132.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ React132.createElement(ParticipantName, null)), /* @__PURE__ */ React132.createElement("div", { className: "display-flex" }, /* @__PURE__ */ React132.createElement(
    TrackMutedIndicator,
    {
      trackRef: {
        participant: p2,
        source: import_livekit_client20.Track.Source.Microphone
      },
      show: "always"
    }
  ), /* @__PURE__ */ React132.createElement(
    TrackMutedIndicator,
    {
      trackRef: {
        participant: p2,
        source: import_livekit_client20.Track.Source.Camera
      },
      show: "always"
    }
  ))))));
};

// src/components/ToggleSwitch.tsx
var import_react4 = __toESM(require("react"));
var ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled
}) => {
  function handleKeyPress(e2) {
    if (e2.keyCode !== 32) return;
    e2.preventDefault();
    onChange(!checked);
  }
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "toggle-switch" + (small ? " small-switch" : "") }, /* @__PURE__ */ import_react4.default.createElement(
    "input",
    {
      type: "checkbox",
      name,
      className: "toggle-switch-checkbox",
      id,
      checked,
      onChange: (e2) => onChange(e2.target.checked),
      disabled
    }
  ), id ? /* @__PURE__ */ import_react4.default.createElement(
    "label",
    {
      className: "toggle-switch-label",
      tabIndex: disabled ? -1 : 1,
      onKeyDown: (e2) => handleKeyPress(e2),
      htmlFor: id
    },
    /* @__PURE__ */ import_react4.default.createElement(
      "span",
      {
        className: disabled ? "toggle-switch-inner toggle-switch-disabled" : "toggle-switch-inner",
        "data-yes": optionLabels[0],
        "data-no": optionLabels[1],
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ import_react4.default.createElement(
      "span",
      {
        className: disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch",
        tabIndex: -1
      }
    )
  ) : null);
};

// src/prefabs/Users.tsx
function Users(_a2) {
  var _b = _a2, { onWaitingRoomChange } = _b, props = __objRest(_b, ["onWaitingRoomChange"]);
  const ulRef = React134.useRef(null);
  const participants = useParticipants();
  const [waitingRoom, setWaitingRoom] = React134.useState([]);
  const [toggleWaiting, setToggleWaiting] = React134.useState(true);
  const room = useRoomContext();
  function getWaitingRoomState() {
    return __async(this, null, function* () {
      const postData = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          meeting_id: room.name,
          domain: getDomainIdentifier()
        })
      };
      fetch(`/api/get-waitingroom-state`, postData).then((res) => __async(this, null, function* () {
        if (res.ok) {
          const body = yield res.json();
          setToggleWaiting(body.waiting_room);
        } else {
          throw Error("Error fetching server url, check server logs");
        }
      }));
    });
  }
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
          token: getToken(),
          domain: getDomainIdentifier()
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
  React134.useEffect(() => {
    if (room.name) {
      usersList();
    }
  }, [room.name]);
  React134.useEffect(() => {
    const interval = setInterval(() => {
      usersList();
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  React134.useEffect(() => {
    getWaitingRoomState();
  }, []);
  React134.useEffect(() => {
    onWaitingRoomChange(waitingRoom.length);
  }, [onWaitingRoomChange, waitingRoom]);
  React134.useEffect(() => {
    var _a3;
    if (ulRef) {
      (_a3 = ulRef.current) == null ? void 0 : _a3.scrollTo({ top: ulRef.current.scrollHeight });
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
          token: getToken(),
          domain: getDomainIdentifier()
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
          token: getToken(),
          domain: getDomainIdentifier()
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
        token: getToken(),
        domain: getDomainIdentifier()
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
  return /* @__PURE__ */ React134.createElement("div", __spreadProps(__spreadValues({}, props), { className: "lk-chat lk-users" }), /* @__PURE__ */ React134.createElement("div", { className: "lk-waitinroom" }, /* @__PURE__ */ React134.createElement("div", { className: "tl-waitingroom-heading" }, /* @__PURE__ */ React134.createElement("h3", null, "Waiting Room"), /* @__PURE__ */ React134.createElement("div", { className: "tl-toggle-switch" }, /* @__PURE__ */ React134.createElement(
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
  )), toggleWaiting && waitingRoom.length ? /* @__PURE__ */ React134.createElement(
    "button",
    {
      className: "lk-button tl-info tl-approve",
      onClick: () => approveAll()
    },
    "Approve All"
  ) : ""), waitingRoom.map((item) => /* @__PURE__ */ React134.createElement("div", { className: "tl-participant-li", key: item.username }, /* @__PURE__ */ React134.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React134.createElement("div", { className: "lk-participant-metadata-item" }, item.username), /* @__PURE__ */ React134.createElement("div", { className: "display-flex" }, /* @__PURE__ */ React134.createElement(
    "button",
    {
      className: "lk-button lk-waiting-room lk-success",
      onClick: () => admitUser(item.identity, "accepted")
    },
    /* @__PURE__ */ React134.createElement(ApproveIcon_default, null)
  ), /* @__PURE__ */ React134.createElement(
    "button",
    {
      className: "lk-button lk-waiting-room lk-danger",
      onClick: () => admitUser(item.identity, "rejected")
    },
    /* @__PURE__ */ React134.createElement(RejectIcon_default, null)
  )))))), /* @__PURE__ */ React134.createElement("div", { className: "lk-participants" }, /* @__PURE__ */ React134.createElement("div", { className: "tl-participants-heading" }, /* @__PURE__ */ React134.createElement("h3", null, "Participants  ", /* @__PURE__ */ React134.createElement("span", null, "(", participants.length, ")"))), (participants == null ? void 0 : participants.length) ? /* @__PURE__ */ React134.createElement(ParticipantLoop, { participants }, /* @__PURE__ */ React134.createElement(ParticipantList, null)) : /* @__PURE__ */ React134.createElement("div", null, /* @__PURE__ */ React134.createElement("h5", null, "No Participants"))));
}

// src/prefabs/CallUser.tsx
var React135 = __toESM(require("react"));
var import_react_select = __toESM(require("react-select"));
function CallUser(_a2) {
  var _b = _a2, {
    socket,
    onWaitingRoomChange,
    onMemberButtonClick,
    contactsList
  } = _b, props = __objRest(_b, [
    "socket",
    "onWaitingRoomChange",
    "onMemberButtonClick",
    "contactsList"
  ]);
  var _a3;
  const participants = useParticipants();
  let [contacts, setContacts] = React135.useState([]);
  let [allcontacts, setAllContacts] = React135.useState([]);
  const inputRef = React135.useRef(null);
  const [selectedOption, setSelectedOption] = React135.useState("phone");
  const [mobile, setMobile] = React135.useState("");
  const [email, setEmail] = React135.useState("");
  const [disableButton, setdisableButton] = React135.useState(false);
  const room = useRoomContext();
  let CHAT_SERVER_URL = room.metadata ? JSON.parse(room.metadata).app_url : "";
  const [activeTab, setActiveTab] = React135.useState("contacts");
  const [invitedUsers, setInvitedUsers] = React135.useState(contactsList);
  const [timeoutIds, setTimeoutIds] = React135.useState([]);
  const [countries, setCountries] = React135.useState([]);
  const [selectedValue, setSelectedValue] = React135.useState({
    value: "",
    label: ""
  });
  React135.useEffect(() => {
    fetch(`/country-list.json`).then((res) => __async(this, null, function* () {
      setCountries(yield res.json());
    }));
  }, []);
  React135.useEffect(() => {
    if (socket) {
      socket.on("meeting:update", (meetingData) => {
        setInvitedUsers(
          meetingData.users.filter(
            (userId) => !meetingData.cancelled_by.includes(userId) && !meetingData.ended_by.includes(userId)
          )
        );
      });
    }
  }, [socket]);
  const handleChange = (event) => {
    console.log(event);
    setSelectedValue(event);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setContacts(allcontacts);
  };
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const authKey = queryParams.get("authKey");
  function calling(id) {
    return __async(this, null, function* () {
      const response = yield fetch(
        `${CHAT_SERVER_URL}/api/jisti/invite-user-call`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authKey ? authKey : ""
          },
          body: JSON.stringify({
            meeting_id: room.name,
            invite_user_id: id
          })
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      setInvitedUsers((prevUsers) => [...prevUsers, id]);
      const timeoutId = setTimeout(() => {
        setInvitedUsers(
          (prevUsers) => prevUsers.filter((userId) => userId !== id)
        );
      }, 3e4);
      setTimeoutIds((prevTimeoutIds) => [...prevTimeoutIds, timeoutId]);
    });
  }
  React135.useEffect(() => {
    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);
  function usersList2() {
    return __async(this, null, function* () {
      const response = yield fetch(`${CHAT_SERVER_URL}/api/user/all-contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authKey ? authKey : "",
          token: token ? token : ""
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = yield response.json();
      const originalContacts = [...data.response.users];
      const sortedContacts = originalContacts.sort((a2, b2) => {
        const nameA = a2.full_name.toLowerCase();
        const nameB = b2.full_name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setContacts(sortedContacts);
      setAllContacts(sortedContacts);
    });
  }
  const handleSearch = (e2) => {
    var _a4;
    e2.preventDefault();
    const searchTerm2 = (((_a4 = inputRef.current) == null ? void 0 : _a4.value) || "").toLowerCase().trim();
    if (searchTerm2) {
      const filteredContacts2 = allcontacts.filter((item) => {
        const userMatch = item.user_name.toLowerCase().includes(searchTerm2);
        const fullNameMatch = item.full_name.toLowerCase().includes(searchTerm2);
        return userMatch || fullNameMatch;
      });
      setContacts(filteredContacts2);
    } else {
      setContacts(allcontacts);
    }
  };
  React135.useEffect(() => {
    usersList2();
  }, []);
  const ulRef = React135.useRef(null);
  const ulRef2 = React135.useRef(null);
  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    if (!/^\d+$/.test(event.key) && ![37, 38, 39, 40, 8].includes(keyCode)) {
      event.preventDefault();
    }
  };
  const filteredContacts = contacts.filter((contact) => {
    const isInParticipants = participants.some(
      (participant) => participant.identity === contact.user_id || participant.participantInfo && participant.participantInfo.identity === contact.user_id
    );
    return !isInParticipants;
  });
  const ParticipatedContacts = participants.map((participant) => {
    const matchingContact = contacts.find(
      (contact) => contact.user_id === participant.participantInfo.identity
    );
    if (matchingContact) {
      return __spreadProps(__spreadValues({}, matchingContact), {
        full_name: matchingContact ? matchingContact.full_name : participant.participantInfo.name
      });
    } else {
      return __spreadProps(__spreadValues({}, matchingContact), {
        full_name: matchingContact ? matchingContact.full_name : participant.participantInfo.name
      });
    }
  });
  const searchTerm = (((_a3 = inputRef.current) == null ? void 0 : _a3.value) || "").toLowerCase().trim();
  const filteredParticipants = searchTerm ? ParticipatedContacts.filter(
    (item) => item.full_name.toLowerCase().includes(searchTerm) || item.designation && item.designation.toLowerCase().includes(searchTerm)
  ) : ParticipatedContacts;
  const sendInvite = (e2) => __async(this, null, function* () {
    e2.preventDefault();
    setdisableButton(true);
    let roomName = room == null ? void 0 : room.name;
    if (selectedOption === "phone" && selectedValue.value && mobile || selectedOption === "email" && email && roomName) {
      const response = yield fetch(
        `${CHAT_SERVER_URL}/api/jisti/invite-by-phone-email`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authKey ? authKey : "",
            token: token ? token : ""
          },
          body: JSON.stringify({
            meeting_id: roomName,
            [selectedOption === "phone" ? "phone_no" : "email"]: selectedOption === "phone" ? String(selectedValue.value) + String(mobile) : email
          })
        }
      );
      if (!response.ok) {
        throw new Error("Failed to invite");
      } else {
        setdisableButton(false);
        setMobile("");
        setSelectedValue({
          value: "",
          label: ""
        });
        setEmail("");
        const jsonResponse = yield response.json();
        alert(jsonResponse.message);
      }
    }
  });
  const customStyles = {
    control: (provided) => __spreadProps(__spreadValues({}, provided), {
      backgroundColor: "#2b2b2b",
      borderColor: "hsl(0deg 0% 11.76%)",
      color: "white"
    }),
    singleValue: (provided) => __spreadProps(__spreadValues({}, provided), {
      color: "white"
    }),
    option: (provided) => __spreadProps(__spreadValues({}, provided), {
      color: "black"
    }),
    menu: (provided) => __spreadProps(__spreadValues({}, provided), {
      backgroundColor: "white"
    })
  };
  const renderInputField = () => {
    if (selectedOption === "phone") {
      return /* @__PURE__ */ React135.createElement(React135.Fragment, null, /* @__PURE__ */ React135.createElement("div", { style: { minWidth: "100px" } }, /* @__PURE__ */ React135.createElement(
        import_react_select.default,
        {
          value: selectedValue,
          onChange: handleChange,
          options: countries.map((country) => ({
            value: country.dial_code,
            label: `${country.dial_code}`
          })),
          styles: customStyles,
          placeholder: "Select your country"
        }
      )), /* @__PURE__ */ React135.createElement(
        "input",
        {
          className: "lk-form-control lk-chat-form-input",
          value: mobile,
          onChange: (e2) => setMobile(e2.target.value),
          type: "text",
          placeholder: "Mobile No",
          onKeyDown: handleKeyPress,
          maxLength: 10
        }
      ));
    } else if (selectedOption === "email") {
      return /* @__PURE__ */ React135.createElement(
        "input",
        {
          className: "lk-form-control lk-chat-form-input",
          value: email,
          onChange: (e2) => setEmail(e2.target.value),
          type: "email",
          placeholder: "Email Address"
        }
      );
    }
  };
  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };
  const isValidEmail = (email2) => {
    const re2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re2.test(String(email2).toLowerCase());
  };
  return /* @__PURE__ */ React135.createElement(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: "lk-chat lk-users"
    }),
    /* @__PURE__ */ React135.createElement("div", { style: { height: "-webkit-fill-available" } }, /* @__PURE__ */ React135.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React135.createElement("div", { style: { position: "sticky", top: 0, zIndex: 1 } }, /* @__PURE__ */ React135.createElement(
      "div",
      {
        style: {
          display: "flex",
          marginBottom: "inherit",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky"
        }
      },
      /* @__PURE__ */ React135.createElement(
        "div",
        {
          style: {
            display: "flex",
            marginRight: "12%",
            marginBottom: "inherit",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ React135.createElement(
          "button",
          {
            type: "button",
            style: {
              borderBottom: activeTab === "callParticipants" ? "2px solid gold" : "none ",
              backgroundColor: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              cursor: "pointer",
              padding: "10px"
            },
            onClick: () => handleTabChange("callParticipants")
          },
          "Participants"
        ),
        /* @__PURE__ */ React135.createElement(
          "button",
          {
            type: "button",
            className: "outline-none",
            style: {
              borderBottom: activeTab === "contacts" ? "2px solid gold" : "none",
              backgroundColor: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              cursor: "pointer",
              padding: "10px"
            },
            onClick: () => handleTabChange("contacts")
          },
          "Contacts"
        ),
        /* @__PURE__ */ React135.createElement(
          "button",
          {
            type: "button",
            style: {
              borderBottom: activeTab === "invite" ? "2px solid gold" : "none ",
              backgroundColor: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              cursor: "pointer",
              padding: "10px"
            },
            onClick: () => handleTabChange("invite")
          },
          "Invite"
        )
      )
    ), activeTab != "invite" && /* @__PURE__ */ React135.createElement(
      "form",
      {
        className: "lk-chat-form",
        onSubmit: (e2) => e2.preventDefault()
      },
      /* @__PURE__ */ React135.createElement(
        "input",
        {
          className: "lk-form-control lk-chat-form-input",
          ref: inputRef,
          onChange: handleSearch,
          type: "text",
          placeholder: "Search..."
        }
      )
    ), activeTab === "invite" && /* @__PURE__ */ React135.createElement(React135.Fragment, null, /* @__PURE__ */ React135.createElement("form", null, /* @__PURE__ */ React135.createElement("div", { className: "lk-chat-form" }, "Invitation type:", /* @__PURE__ */ React135.createElement("div", null, /* @__PURE__ */ React135.createElement(
      "input",
      {
        type: "radio",
        id: "phone",
        name: "contactOption",
        value: "phone",
        style: { cursor: "pointer" },
        checked: selectedOption === "phone",
        onChange: () => handleRadioChange("phone")
      }
    ), /* @__PURE__ */ React135.createElement(
      "label",
      {
        style: { cursor: "pointer", marginLeft: "5px" },
        htmlFor: "phone"
      },
      "Phone"
    )), /* @__PURE__ */ React135.createElement("div", null, /* @__PURE__ */ React135.createElement(
      "input",
      {
        type: "radio",
        id: "email",
        style: { cursor: "pointer" },
        name: "contactOption",
        value: "email",
        checked: selectedOption === "email",
        onChange: () => handleRadioChange("email")
      }
    ), /* @__PURE__ */ React135.createElement(
      "label",
      {
        style: { cursor: "pointer", marginLeft: "5px" },
        htmlFor: "email"
      },
      "Email"
    ))), /* @__PURE__ */ React135.createElement("div", { className: "lk-chat-form" }, renderInputField(), /* @__PURE__ */ React135.createElement(
      "button",
      {
        disabled: !(selectedOption === "phone" && mobile && selectedValue.value || selectedOption === "email" && isValidEmail(email) && email) || disableButton,
        className: `lk-button lk-success`,
        style: {
          marginRight: "13px",
          marginBottom: "3px",
          cursor: "pointer",
          float: "right"
        },
        onClick: sendInvite
      },
      "Invite"
    )))))), activeTab == "contacts" && /* @__PURE__ */ React135.createElement("ul", { style: { height: "80vh" }, className: "lk-list lk-chat-messages", ref: ulRef }, filteredContacts.map((user, index) => {
      return /* @__PURE__ */ React135.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React135.createElement("div", null, /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body" }, user.full_name), /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body lk-message-text" }, user.user_name), /* @__PURE__ */ React135.createElement(
        "button",
        {
          disabled: invitedUsers.includes(user.user_id),
          className: `lk-button   ${invitedUsers.includes(user.user_id) ? "lk-secondary" : "lk-success"}`,
          style: {
            marginRight: "3px",
            marginBottom: "3px",
            cursor: `${invitedUsers.includes(user.user_id) ? "inherit" : "pointer"}`
          },
          onClick: () => calling(user.user_id)
        },
        invitedUsers.includes(user.user_id) ? "Invited" : "Call"
      )));
    })), activeTab == "callParticipants" && /* @__PURE__ */ React135.createElement("ul", { style: { height: "80vh" }, className: "lk-list lk-chat-messages", ref: ulRef2 }, filteredParticipants.map((user, index) => {
      return /* @__PURE__ */ React135.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React135.createElement("div", null, /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body" }, user.full_name, " ", room.localParticipant.identity == user.user_id ? " (me)" : ""), /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body lk-message-text" }, user.designation ? user.designation : "-"), /* @__PURE__ */ React135.createElement("div", null, "\xA0")));
    })))
  );
}

// src/prefabs/VideoConference.tsx
function VideoConference(_a2) {
  var _b = _a2, {
    chatMessageFormatter,
    chatMessageDecoder,
    chatMessageEncoder,
    SettingsComponent,
    showChatButton,
    showShareLink,
    showParticipant,
    isCallScreen,
    showExtraSettingMenu,
    socket
  } = _b, props = __objRest(_b, [
    "chatMessageFormatter",
    "chatMessageDecoder",
    "chatMessageEncoder",
    "SettingsComponent",
    "showChatButton",
    "showShareLink",
    "showParticipant",
    "isCallScreen",
    "showExtraSettingMenu",
    "socket"
  ]);
  var _a3, _b2;
  const [widgetState, setWidgetState] = React136.useState({
    showChat: null,
    unreadMessages: 0,
    showSettings: false
  });
  const lastAutoFocusedScreenShareTrack = React136.useRef(null);
  const { localParticipant } = useLocalParticipant();
  const p2 = useEnsureParticipant(localParticipant);
  const { infoObserver } = React136.useMemo(() => {
    return (0, import_components_core60.setupParticipantName)(p2);
  }, [p2]);
  const { metadata } = useObservableState(infoObserver, {
    name: p2.name,
    identity: p2.identity,
    metadata: p2.metadata
  });
  const [showShareButton, setShowShareButton] = React136.useState(showShareLink);
  const [showParticipantButton, setShowParticipantButton] = React136.useState(showParticipant);
  const [leaveButton, setLeaveButton] = React136.useState("Leave");
  const [endForAll, setEndForAll] = React136.useState(false);
  const meta = metadata ? JSON.parse(metadata) : {};
  const [waitingRoomCount, setWaitingRoomCount] = React136.useState(0);
  const tracks = useTracks(
    [
      { source: import_livekit_client21.Track.Source.Camera, withPlaceholder: true },
      { source: import_livekit_client21.Track.Source.ScreenShare, withPlaceholder: false }
    ],
    { updateOnlyOn: [import_livekit_client21.RoomEvent.ActiveSpeakersChanged], onlySubscribed: false }
  );
  const widgetUpdate = (state) => {
    import_components_core60.log.debug("updating widget state", state);
    setWidgetState(state);
    console.log(widgetState);
  };
  const updateCount = (count) => {
    import_components_core60.log.debug("count ", count);
    setWaitingRoomCount(count);
  };
  const layoutContext = useCreateLayoutContext();
  const screenShareTracks = tracks.filter(import_components_core60.isTrackReference).filter((track) => track.publication.source === import_livekit_client21.Track.Source.ScreenShare);
  const whitePub = new import_livekit_client21.TrackPublication(import_livekit_client21.Track.Kind.Unknown, "whiteboard", "whiteboard");
  const whiteboardTrack = {
    participant: p2,
    publication: whitePub,
    source: import_livekit_client21.Track.Source.Unknown
  };
  const focusTrack = (_a3 = usePinnedTracks(layoutContext)) == null ? void 0 : _a3[0];
  const carouselTracks = tracks.filter((track) => !(0, import_components_core60.isEqualTrackRef)(track, focusTrack));
  React136.useEffect(() => {
    if (meta && meta.host) {
      localStorage.setItem("host", meta.host);
      if (meta.limited) {
        localStorage.setItem("limited", meta.limited);
      }
      setShowShareButton(true);
      setShowParticipantButton(true);
      setLeaveButton("Leave Meeting");
      setEndForAll("End Meeting for All");
    }
  }, [meta]);
  React136.useEffect(() => {
    const pmeta = p2.metadata ? JSON.parse(p2.metadata) : {};
    if (pmeta && pmeta.host) {
      localStorage.setItem("host", meta.host);
      if (meta.limited) {
        localStorage.setItem("limited", meta.limited);
      }
      setShowShareButton(true);
      setShowParticipantButton(true);
      setLeaveButton("Leave Meeting");
      setEndForAll("End Meeting for All");
    }
  }, [p2]);
  React136.useEffect(() => {
    var _a4, _b3, _c2, _d;
    if (screenShareTracks.some((track) => track.publication.isSubscribed) && lastAutoFocusedScreenShareTrack.current === null) {
      import_components_core60.log.debug("Auto set screen share focus:", { newScreenShareTrack: screenShareTracks[0] });
      (_b3 = (_a4 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a4, { msg: "set_pin", trackReference: screenShareTracks[0] });
      lastAutoFocusedScreenShareTrack.current = screenShareTracks[0];
    } else if (lastAutoFocusedScreenShareTrack.current && !screenShareTracks.some(
      (track) => {
        var _a5, _b4;
        return track.publication.trackSid === ((_b4 = (_a5 = lastAutoFocusedScreenShareTrack.current) == null ? void 0 : _a5.publication) == null ? void 0 : _b4.trackSid);
      }
    )) {
      import_components_core60.log.debug("Auto clearing screen share focus.");
      (_d = (_c2 = layoutContext.pin).dispatch) == null ? void 0 : _d.call(_c2, { msg: "clear_pin" });
      lastAutoFocusedScreenShareTrack.current = null;
    }
  }, [
    screenShareTracks.map((ref) => `${ref.publication.trackSid}_${ref.publication.isSubscribed}`).join(),
    (_b2 = focusTrack == null ? void 0 : focusTrack.publication) == null ? void 0 : _b2.trackSid
  ]);
  const room = useRoomContext();
  const decoder = new TextDecoder();
  const { isWhiteboardShared } = useWhiteboard();
  const whiteboardUpdate = (state) => {
    var _a4, _b3, _c2, _d;
    import_components_core60.log.debug("updating widget state", state);
    if (state.show_whiteboard) {
      (_b3 = (_a4 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a4, { msg: "set_pin", trackReference: whiteboardTrack });
    } else {
      (_d = (_c2 = layoutContext.pin).dispatch) == null ? void 0 : _d.call(_c2, { msg: "clear_pin" });
    }
  };
  React136.useEffect(() => {
    var _a4, _b3, _c2, _d, _e2, _f, _g, _h;
    if (isWhiteboardShared) {
      (_b3 = (_a4 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a4, { msg: "set_pin", trackReference: whiteboardTrack });
      (_d = (_c2 = layoutContext.whiteboard).dispatch) == null ? void 0 : _d.call(_c2, { msg: "show_whiteboard" });
    } else {
      (_f = (_e2 = layoutContext.pin).dispatch) == null ? void 0 : _f.call(_e2, { msg: "clear_pin" });
      (_h = (_g = layoutContext.whiteboard).dispatch) == null ? void 0 : _h.call(_g, { msg: "hide_whiteboard" });
    }
  }, [isWhiteboardShared]);
  const [isWhiteboard, setIsWhiteboard] = React136.useState(false);
  room.on(import_livekit_client21.RoomEvent.DataReceived, (payload) => {
    const strData = decoder.decode(payload);
    const str = JSON.parse(strData);
    if (str.openWhiteboard) {
      setIsWhiteboard(true);
    } else {
      setIsWhiteboard(false);
    }
  });
  useWarnAboutMissingStyles();
  const [invitedUsers, setInvitedUsers] = React136.useState([]);
  React136.useEffect(() => {
    if (socket) {
      socket.on("meeting:update", (meetingData) => {
        setInvitedUsers(meetingData.users.filter(
          (userId) => !meetingData.cancelled_by.includes(userId) && !meetingData.ended_by.includes(userId)
        ));
      });
    }
  }, [socket]);
  return /* @__PURE__ */ React136.createElement("div", __spreadValues({ className: "lk-video-conference" }, props), (0, import_components_core60.isWeb)() && /* @__PURE__ */ React136.createElement(
    LayoutContextProvider,
    {
      value: layoutContext,
      onWidgetChange: widgetUpdate,
      onWhiteboardChange: whiteboardUpdate
    },
    /* @__PURE__ */ React136.createElement("div", { className: "lk-video-conference-inner" }, !focusTrack ? /* @__PURE__ */ React136.createElement("div", { className: "lk-grid-layout-wrapper" }, /* @__PURE__ */ React136.createElement(GridLayout, { tracks }, /* @__PURE__ */ React136.createElement(ParticipantTile, null))) : /* @__PURE__ */ React136.createElement("div", { className: "lk-focus-layout-wrapper" }, /* @__PURE__ */ React136.createElement(FocusLayoutContainer, null, /* @__PURE__ */ React136.createElement(CarouselLayout, { tracks: carouselTracks }, /* @__PURE__ */ React136.createElement(ParticipantTile, null)), focusTrack && /* @__PURE__ */ React136.createElement(FocusLayout, { trackRef: focusTrack }))), /* @__PURE__ */ React136.createElement(
      ControlBar,
      {
        controls: {
          chat: showChatButton,
          sharelink: showShareButton,
          users: showParticipantButton,
          leaveButton,
          endForAll,
          settings: !!SettingsComponent
        },
        waitingRoomCount,
        screenShareTracks: screenShareTracks.length,
        isWhiteboard,
        showExtraSettingMenu
      }
    )),
    showShareButton && isCallScreen ? /* @__PURE__ */ React136.createElement(
      CallUser,
      {
        style: {
          display: widgetState.showChat == "show_invite" ? "block" : "none"
        },
        socket,
        contactsList: invitedUsers
      }
    ) : /* @__PURE__ */ React136.createElement(React136.Fragment, null),
    showShareButton && !isCallScreen ? /* @__PURE__ */ React136.createElement(
      ShareLink,
      {
        style: {
          display: widgetState.showChat == "show_invite" ? "block" : "none"
        },
        isCallScreen
      }
    ) : /* @__PURE__ */ React136.createElement(React136.Fragment, null),
    showParticipantButton ? /* @__PURE__ */ React136.createElement(
      Users,
      {
        style: { display: widgetState.showChat == "show_users" ? "block" : "none" },
        onWaitingRoomChange: updateCount
      }
    ) : /* @__PURE__ */ React136.createElement(React136.Fragment, null),
    showChatButton ? /* @__PURE__ */ React136.createElement(
      Chat,
      {
        style: { display: widgetState.showChat == "show_chat" ? "flex" : "none" },
        messageFormatter: formatChatMessageLinks,
        messageEncoder: chatMessageEncoder,
        messageDecoder: chatMessageDecoder
      }
    ) : /* @__PURE__ */ React136.createElement(React136.Fragment, null),
    SettingsComponent && /* @__PURE__ */ React136.createElement(
      "div",
      {
        className: "lk-settings-menu-modal",
        style: { display: widgetState.showSettings ? "block" : "none" }
      },
      /* @__PURE__ */ React136.createElement(SettingsComponent, null)
    )
  ), /* @__PURE__ */ React136.createElement(RoomAudioRenderer, null), /* @__PURE__ */ React136.createElement(ConnectionStateToast, null));
}

// src/prefabs/AudioConference.tsx
var React137 = __toESM(require("react"));
var import_livekit_client22 = require("livekit-client");
function AudioConference(_a2) {
  var props = __objRest(_a2, []);
  const [widgetState, setWidgetState] = React137.useState({
    showChat: null,
    unreadMessages: 0
  });
  const audioTracks = useTracks([import_livekit_client22.Track.Source.Microphone]);
  useWarnAboutMissingStyles();
  return /* @__PURE__ */ React137.createElement(LayoutContextProvider, { onWidgetChange: setWidgetState }, /* @__PURE__ */ React137.createElement("div", __spreadValues({ className: "lk-audio-conference" }, props), /* @__PURE__ */ React137.createElement("div", { className: "lk-audio-conference-stage" }, /* @__PURE__ */ React137.createElement(TrackLoop, { tracks: audioTracks }, /* @__PURE__ */ React137.createElement(ParticipantAudioTile, null))), /* @__PURE__ */ React137.createElement(
    ControlBar,
    {
      controls: { microphone: true, screenShare: false, camera: false, chat: true },
      waitingRoomCount: 0
    }
  ), widgetState.showChat == "show_chat" && /* @__PURE__ */ React137.createElement(Chat, null)));
}

// src/index.ts
var import_components_core61 = require("@livekit/components-core");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioConference,
  AudioTrack,
  AudioVisualizer,
  CameraDisabledIcon,
  CameraIcon,
  CarouselLayout,
  Chat,
  ChatCloseIcon,
  ChatEntry,
  ChatIcon,
  ChatToggle,
  Chevron,
  ClearPinButton,
  ConnectionQualityIndicator,
  ConnectionState,
  ConnectionStateToast,
  ControlBar,
  DisconnectButton,
  FocusLayout,
  FocusLayoutContainer,
  FocusToggle,
  FocusToggleIcon,
  GearIcon,
  GridLayout,
  LKFeatureContext,
  LayoutContext,
  LayoutContextProvider,
  LeaveIcon,
  LiveKitRoom,
  LockLockedIcon,
  MediaDeviceMenu,
  MediaDeviceSelect,
  MicDisabledIcon,
  MicIcon,
  ParticipantAudioTile,
  ParticipantContext,
  ParticipantContextIfNeeded,
  ParticipantLoop,
  ParticipantName,
  ParticipantPlaceholder,
  ParticipantTile,
  PreJoin,
  QualityExcellentIcon,
  QualityGoodIcon,
  QualityPoorIcon,
  QualityUnknownIcon,
  RoomAudioRenderer,
  RoomContext,
  RoomName,
  ScreenShareIcon,
  ScreenShareStopIcon,
  ShareLinkToggle,
  SpinnerIcon,
  StartAudio,
  Toast,
  TrackLoop,
  TrackMutedIndicator,
  TrackRefContext,
  TrackToggle,
  UnfocusToggleIcon,
  VideoConference,
  VideoTrack,
  formatChatMessageLinks,
  isTrackReference,
  setLogExtension,
  setLogLevel,
  useAudioPlayback,
  useChat,
  useChatToggle,
  useClearPinButton,
  useConnectionQualityIndicator,
  useConnectionState,
  useCreateLayoutContext,
  useDataChannel,
  useDisconnectButton,
  useEnsureCreateLayoutContext,
  useEnsureLayoutContext,
  useEnsureParticipant,
  useEnsureRoom,
  useEnsureTrackRef,
  useFacingMode,
  useFeatureContext,
  useFocusToggle,
  useGridLayout,
  useIsEncrypted,
  useIsMuted,
  useIsSpeaking,
  useLayoutContext,
  useLiveKitRoom,
  useLocalParticipant,
  useLocalParticipantPermissions,
  useMaybeLayoutContext,
  useMaybeParticipantContext,
  useMaybeRoomContext,
  useMaybeTrackRefContext,
  useMediaDeviceSelect,
  useMediaDevices,
  useMultibandTrackVolume,
  usePagination,
  useParticipantContext,
  useParticipantInfo,
  useParticipantPermissions,
  useParticipantTile,
  useParticipantTracks,
  useParticipants,
  usePersistentUserChoices,
  usePinnedTracks,
  usePreviewDevice,
  usePreviewTracks,
  useRemoteParticipant,
  useRemoteParticipants,
  useRoomContext,
  useRoomInfo,
  useSortedParticipants,
  useSpeakingParticipants,
  useStartAudio,
  useStartVideo,
  useSwipe,
  useToken,
  useTrackByName,
  useTrackMutedIndicator,
  useTrackRefContext,
  useTrackToggle,
  useTrackVolume,
  useTracks,
  useVisualStableUpdate,
  useWhiteboard
});
//# sourceMappingURL=index.js.map