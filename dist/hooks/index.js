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

// src/hooks/index.ts
var hooks_exports = {};
__export(hooks_exports, {
  useAudioPlayback: () => useAudioPlayback,
  useChatToggle: () => useChatToggle,
  useClearPinButton: () => useClearPinButton,
  useConnectionQualityIndicator: () => useConnectionQualityIndicator,
  useConnectionState: () => useConnectionState,
  useDataChannel: () => useDataChannel,
  useDisconnectButton: () => useDisconnectButton,
  useFacingMode: () => useFacingMode,
  useFocusToggle: () => useFocusToggle,
  useGridLayout: () => useGridLayout,
  useIsMuted: () => useIsMuted,
  useIsSpeaking: () => useIsSpeaking,
  useLiveKitRoom: () => useLiveKitRoom,
  useLocalParticipant: () => useLocalParticipant,
  useLocalParticipantPermissions: () => useLocalParticipantPermissions,
  useMediaDeviceSelect: () => useMediaDeviceSelect,
  useMediaDevices: () => useMediaDevices,
  useMediaTrack: () => useMediaTrack,
  useMediaTrackByName: () => useMediaTrackByName,
  usePagination: () => usePagination,
  useParticipantInfo: () => useParticipantInfo,
  useParticipantPermissions: () => useParticipantPermissions,
  useParticipantTile: () => useParticipantTile,
  useParticipants: () => useParticipants,
  usePinnedTracks: () => usePinnedTracks,
  useRemoteParticipant: () => useRemoteParticipant,
  useRemoteParticipants: () => useRemoteParticipants,
  useRoomInfo: () => useRoomInfo,
  useSortedParticipants: () => useSortedParticipants,
  useSpeakingParticipants: () => useSpeakingParticipants,
  useStartAudio: () => useStartAudio,
  useSwipe: () => useSwipe,
  useToken: () => useToken,
  useTrackMutedIndicator: () => useTrackMutedIndicator,
  useTrackToggle: () => useTrackToggle,
  useTracks: () => useTracks,
  useVisualStableUpdate: () => useVisualStableUpdate
});
module.exports = __toCommonJS(hooks_exports);

// src/hooks/useAudioPlayback.ts
var React7 = __toESM(require("react"));

// src/hooks/internal/useResizeObserver.ts
var React = __toESM(require("react"));
var import_latest = __toESM(require("@react-hook/latest"));
function useResizeObserver(target, callback) {
  const resizeObserver = getResizeObserver();
  const storedCallback = (0, import_latest.default)(callback);
  React.useLayoutEffect(() => {
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
    if (typeof window === "undefined" || !observable)
      return;
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);
  return state;
}

// src/hooks/useAudioPlayback.ts
var import_components_core2 = require("@livekit/components-core");

// src/context/layout-context.ts
var import_components_core = require("@livekit/components-core");
var React3 = __toESM(require("react"));
var LayoutContext = React3.createContext(void 0);
function useLayoutContext() {
  const layoutContext = React3.useContext(LayoutContext);
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
function useMaybeLayoutContext() {
  return React3.useContext(LayoutContext);
}

// src/context/participant-context.ts
var React5 = __toESM(require("react"));

// src/context/track-context.ts
var React4 = __toESM(require("react"));
var TrackContext = React4.createContext(void 0);
function useMaybeTrackContext() {
  return React4.useContext(TrackContext);
}

// src/context/participant-context.ts
var ParticipantContext = React5.createContext(void 0);
function useMaybeParticipantContext() {
  return React5.useContext(ParticipantContext);
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
var React6 = __toESM(require("react"));
var RoomContext = React6.createContext(void 0);
function useRoomContext() {
  const ctx = React6.useContext(RoomContext);
  if (!ctx) {
    throw Error("tried to access room context outside of livekit room component");
  }
  return ctx;
}
function useMaybeRoomContext() {
  return React6.useContext(RoomContext);
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

// src/hooks/useAudioPlayback.ts
function useAudioPlayback(room) {
  const roomEnsured = useEnsureRoom(room);
  const startAudio = React7.useCallback(() => __async(this, null, function* () {
    yield roomEnsured.startAudio();
  }), [roomEnsured]);
  const observable = React7.useMemo(
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
var React8 = __toESM(require("react"));

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

// src/hooks/useClearPinButton.ts
function useClearPinButton(props) {
  const { state, dispatch } = useLayoutContext().pin;
  const buttonProps = React8.useMemo(() => {
    const { className } = (0, import_components_core3.setupClearPinButton)();
    const mergedProps = mergeProps(props, {
      className,
      disabled: !(state == null ? void 0 : state.length),
      onClick: () => {
        if (dispatch)
          dispatch({ msg: "clear_pin" });
      }
    });
    return mergedProps;
  }, [props, dispatch, state]);
  return { buttonProps };
}

// src/hooks/useConnectionQualityIndicator.ts
var import_components_core4 = require("@livekit/components-core");
var import_livekit_client = require("livekit-client");
var React9 = __toESM(require("react"));
function useConnectionQualityIndicator(options = {}) {
  const p = useEnsureParticipant(options.participant);
  const { className, connectionQualityObserver } = React9.useMemo(
    () => (0, import_components_core4.setupConnectionQualityIndicator)(p),
    [p]
  );
  const quality = useObservableState(connectionQualityObserver, import_livekit_client.ConnectionQuality.Unknown);
  return { className, quality };
}

// src/hooks/useConnectionStatus.ts
var import_components_core5 = require("@livekit/components-core");
var React10 = __toESM(require("react"));
function useConnectionState(room) {
  const r = useEnsureRoom(room);
  const observable = React10.useMemo(() => (0, import_components_core5.connectionStateObserver)(r), [r]);
  const connectionState = useObservableState(observable, r.state);
  return connectionState;
}

// src/hooks/useDataChannel.ts
var import_components_core6 = require("@livekit/components-core");
var React11 = __toESM(require("react"));
function useDataChannel(topicOrCallback, callback) {
  const onMessage = typeof topicOrCallback === "function" ? topicOrCallback : callback;
  const topic = typeof topicOrCallback === "string" ? topicOrCallback : void 0;
  const room = useRoomContext();
  const { send, messageObservable, isSendingObservable } = React11.useMemo(
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
var React12 = __toESM(require("react"));
function useDisconnectButton(props) {
  const room = useRoomContext();
  const connectionState = useConnectionState(room);
  const buttonProps = React12.useMemo(() => {
    const { className, disconnect } = (0, import_components_core7.setupDisconnectButton)(room);
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
var import_components_core8 = require("@livekit/components-core");
var React13 = __toESM(require("react"));
function useFocusToggle({ trackSource, participant, props }) {
  const p = useEnsureParticipant(participant);
  const layoutContext = useMaybeLayoutContext();
  const { className } = React13.useMemo(() => (0, import_components_core8.setupFocusToggle)(), []);
  const inFocus = React13.useMemo(() => {
    const track = p.getTrack(trackSource);
    if ((layoutContext == null ? void 0 : layoutContext.pin.state) && track) {
      return (0, import_components_core8.isTrackReferencePinned)(
        { participant: p, source: trackSource, publication: track },
        layoutContext.pin.state
      );
    } else {
      return false;
    }
  }, [p, trackSource, layoutContext]);
  const mergedProps = React13.useMemo(
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
var import_components_core9 = require("@livekit/components-core");
var React14 = __toESM(require("react"));
function useGridLayout(gridElement, trackCount) {
  const { width, height } = useSize(gridElement);
  const layout = width > 0 && height > 0 ? (0, import_components_core9.selectGridLayout)(import_components_core9.GRID_LAYOUTS, trackCount, width, height) : import_components_core9.GRID_LAYOUTS[0];
  React14.useEffect(() => {
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
var React15 = __toESM(require("react"));
function useIsMuted(source, options = {}) {
  var _a;
  const p = useEnsureParticipant(options.participant);
  const [isMuted, setIsMuted] = React15.useState(!!((_a = p.getTrack(source)) == null ? void 0 : _a.isMuted));
  React15.useEffect(() => {
    const listener = (0, import_components_core10.mutedObserver)(p, source).subscribe(setIsMuted);
    return () => listener.unsubscribe();
  }, [p, source]);
  return isMuted;
}

// src/hooks/useIsSpeaking.ts
var import_components_core11 = require("@livekit/components-core");
var React16 = __toESM(require("react"));
function useIsSpeaking(participant) {
  const p = useEnsureParticipant(participant);
  const observable = React16.useMemo(() => (0, import_components_core11.createIsSpeakingObserver)(p), [p]);
  const isSpeaking = useObservableState(observable, p.isSpeaking);
  return isSpeaking;
}

// src/hooks/useLiveKitRoom.ts
var import_components_core12 = require("@livekit/components-core");
var import_livekit_client4 = require("livekit-client");
var React17 = __toESM(require("react"));
var defaultRoomProps = {
  connect: true,
  audio: false,
  video: false
};
function useLiveKitRoom(props) {
  const _a = __spreadValues(__spreadValues({}, defaultRoomProps), props), {
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
    simulateParticipants
  } = _a, rest = __objRest(_a, [
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
    "simulateParticipants"
  ]);
  if (options && passedRoom) {
    import_components_core12.log.warn(
      "when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead."
    );
  }
  const [room, setRoom] = React17.useState();
  React17.useEffect(() => {
    setRoom(passedRoom != null ? passedRoom : new import_livekit_client4.Room(options));
  }, [JSON.stringify(options), passedRoom]);
  const htmlProps = React17.useMemo(() => {
    const { className } = (0, import_components_core12.setupLiveKitRoom)();
    return mergeProps(rest, { className });
  }, [rest]);
  React17.useEffect(() => {
    if (!room)
      return;
    const onSignalConnected = () => {
      const localP = room.localParticipant;
      import_components_core12.log.debug("trying to publish local tracks");
      Promise.all([
        localP.setMicrophoneEnabled(!!audio, typeof audio !== "boolean" ? audio : void 0),
        localP.setCameraEnabled(!!video, typeof video !== "boolean" ? video : void 0),
        localP.setScreenShareEnabled(!!screen, typeof screen !== "boolean" ? screen : void 0)
      ]).catch((e) => {
        import_components_core12.log.warn(e);
        onError == null ? void 0 : onError(e);
      });
    };
    const onMediaDeviceError = (e) => {
      const mediaDeviceFailure = import_livekit_client4.MediaDeviceFailure.getFailure(e);
      onMediaDeviceFailure == null ? void 0 : onMediaDeviceFailure(mediaDeviceFailure);
    };
    room.on(import_livekit_client4.RoomEvent.SignalConnected, onSignalConnected);
    room.on(import_livekit_client4.RoomEvent.MediaDevicesError, onMediaDeviceError);
    return () => {
      room.off(import_livekit_client4.RoomEvent.SignalConnected, onSignalConnected);
      room.off(import_livekit_client4.RoomEvent.MediaDevicesError, onMediaDeviceError);
    };
  }, [room, audio, video, screen, onError]);
  React17.useEffect(() => {
    if (!room)
      return;
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
      room.connect(serverUrl, token, connectOptions).catch((e) => {
        import_components_core12.log.warn(e);
        onError == null ? void 0 : onError(e);
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
  React17.useEffect(() => {
    if (!room)
      return;
    const connectionStateChangeListener = (state) => {
      switch (state) {
        case import_livekit_client4.ConnectionState.Disconnected:
          if (onDisconnected)
            onDisconnected();
          break;
        case import_livekit_client4.ConnectionState.Connected:
          if (onConnected)
            onConnected();
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
  React17.useEffect(() => {
    if (!room)
      return;
    return () => {
      import_components_core12.log.info("disconnecting on onmount");
      room.disconnect();
    };
  }, [room]);
  return { room, htmlProps };
}

// src/hooks/useLocalParticipant.ts
var import_components_core13 = require("@livekit/components-core");
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
    const listener = (0, import_components_core13.observeParticipantMedia)(localParticipant).subscribe(handleUpdate);
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
var import_components_core14 = require("@livekit/components-core");
var React19 = __toESM(require("react"));
function useLocalParticipantPermissions() {
  const room = useRoomContext();
  const permissionObserver = React19.useMemo(
    () => (0, import_components_core14.participantPermissionObserver)(room.localParticipant),
    [room]
  );
  const permissions = useObservableState(permissionObserver, room.localParticipant.permissions);
  return permissions;
}

// src/hooks/useMediaDeviceSelect.ts
var import_components_core15 = require("@livekit/components-core");
var React20 = __toESM(require("react"));
function useMediaDeviceSelect({
  kind,
  room,
  track,
  requestPermissions
}) {
  const roomContext = useMaybeRoomContext();
  const deviceObserver = React20.useMemo(
    () => (0, import_components_core15.createMediaDeviceObserver)(kind, requestPermissions),
    [kind, requestPermissions]
  );
  const devices = useObservableState(deviceObserver, []);
  const [currentDeviceId, setCurrentDeviceId] = React20.useState("");
  const { className, activeDeviceObservable, setActiveMediaDevice } = React20.useMemo(
    () => (0, import_components_core15.setupDeviceSelector)(kind, room != null ? room : roomContext, track),
    [kind, room, roomContext, track]
  );
  React20.useEffect(() => {
    const listener = activeDeviceObservable.subscribe((deviceId) => {
      import_components_core15.log.info("setCurrentDeviceId", deviceId);
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
var import_components_core16 = require("@livekit/components-core");
function useMediaDevices({ kind }) {
  const deviceObserver = React21.useMemo(() => (0, import_components_core16.createMediaDeviceObserver)(kind), [kind]);
  const devices = useObservableState(deviceObserver, []);
  return devices;
}

// src/hooks/useMediaTrackBySourceOrName.ts
var import_components_core17 = require("@livekit/components-core");
var import_components_core18 = require("@livekit/components-core");
var React23 = __toESM(require("react"));

// src/utils.ts
var React22 = __toESM(require("react"));
function isProp(prop) {
  return prop !== void 0;
}
function mergeProps2(...props) {
  return mergeProps(...props.filter(isProp));
}

// src/hooks/useMediaTrackBySourceOrName.ts
function useMediaTrackBySourceOrName(observerOptions, options = {}) {
  const [publication, setPublication] = React23.useState((0, import_components_core18.getTrackByIdentifier)(observerOptions));
  const [isMuted, setMuted] = React23.useState(publication == null ? void 0 : publication.isMuted);
  const [isSubscribed, setSubscribed] = React23.useState(publication == null ? void 0 : publication.isSubscribed);
  const [track, setTrack] = React23.useState(publication == null ? void 0 : publication.track);
  const [orientation, setOrientation] = React23.useState("landscape");
  const previousElement = React23.useRef();
  const { className, trackObserver } = React23.useMemo(() => {
    return (0, import_components_core18.setupMediaTrack)(observerOptions);
  }, [
    observerOptions.participant.identity,
    observerOptions.source,
    (0, import_components_core17.isTrackReference)(observerOptions) && observerOptions.publication.trackSid
  ]);
  React23.useEffect(() => {
    const subscription = trackObserver.subscribe((publication2) => {
      import_components_core18.log.debug("update track", publication2);
      setPublication(publication2);
      setMuted(publication2 == null ? void 0 : publication2.isMuted);
      setSubscribed(publication2 == null ? void 0 : publication2.isSubscribed);
      setTrack(publication2 == null ? void 0 : publication2.track);
    });
    return () => subscription == null ? void 0 : subscription.unsubscribe();
  }, [trackObserver]);
  React23.useEffect(() => {
    var _a, _b;
    if (track) {
      if (previousElement.current) {
        track.detach(previousElement.current);
      }
      if (((_a = options.element) == null ? void 0 : _a.current) && !((0, import_components_core18.isLocal)(observerOptions.participant) && (track == null ? void 0 : track.kind) === "audio")) {
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
  React23.useEffect(() => {
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

// src/hooks/useMediaTrackByName.ts
function useMediaTrackByName(name, participant, options = {}) {
  const p = useEnsureParticipant(participant);
  return useMediaTrackBySourceOrName({ name, participant: p }, options);
}

// src/hooks/usePagination.ts
var React25 = __toESM(require("react"));

// src/hooks/useVisualStableUpdate.ts
var import_components_core19 = require("@livekit/components-core");
var React24 = __toESM(require("react"));
function useVisualStableUpdate(trackReferences, maxItemsOnPage, options = {}) {
  const lastTrackRefs = React24.useRef([]);
  const lastMaxItemsOnPage = React24.useRef(-1);
  const layoutChanged = maxItemsOnPage !== lastMaxItemsOnPage.current;
  const sortedTrackRefs = typeof options.customSortFunction === "function" ? options.customSortFunction(trackReferences) : (0, import_components_core19.sortTrackReferences)(trackReferences);
  let updatedTrackRefs = [...sortedTrackRefs];
  if (layoutChanged === false) {
    try {
      updatedTrackRefs = (0, import_components_core19.updatePages)(lastTrackRefs.current, sortedTrackRefs, maxItemsOnPage);
    } catch (error) {
      import_components_core19.log.error("Error while running updatePages(): ", error);
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
var import_components_core20 = require("@livekit/components-core");
var React26 = __toESM(require("react"));
function useParticipantInfo(props = {}) {
  const p = useEnsureParticipant(props.participant);
  const infoObserver = React26.useMemo(() => (0, import_components_core20.participantInfoObserver)(p), [p]);
  const { identity, name, metadata } = useObservableState(infoObserver, {
    name: p.name,
    identity: p.identity,
    metadata: p.metadata
  });
  return { identity, name, metadata };
}

// src/hooks/useParticipantPermissions.ts
var React27 = __toESM(require("react"));
var import_components_core21 = require("@livekit/components-core");
function useParticipantPermissions(options = {}) {
  const p = useEnsureParticipant(options.participant);
  const permissionObserver = React27.useMemo(() => (0, import_components_core21.participantPermissionObserver)(p), [p]);
  const permissions = useObservableState(permissionObserver, p.permissions);
  return permissions;
}

// src/hooks/useParticipantTile.ts
var import_components_core22 = require("@livekit/components-core");
var import_livekit_client5 = require("livekit-client");
var React28 = __toESM(require("react"));
function useParticipantTile({
  participant,
  source,
  publication,
  onParticipantClick,
  disableSpeakingIndicator,
  htmlProps
}) {
  const p = useEnsureParticipant(participant);
  const mergedProps = React28.useMemo(() => {
    const { className } = (0, import_components_core22.setupParticipantTile)();
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
  const isVideoMuted = useIsMuted(import_livekit_client5.Track.Source.Camera, { participant });
  const isAudioMuted = useIsMuted(import_livekit_client5.Track.Source.Microphone, { participant });
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
var import_components_core23 = require("@livekit/components-core");
var React29 = __toESM(require("react"));
function useRemoteParticipants(options = {}) {
  const room = useEnsureRoom(options.room);
  const [participants, setParticipants] = React29.useState([]);
  React29.useEffect(() => {
    const listener = (0, import_components_core23.connectedParticipantsObserver)(room, {
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
var React30 = __toESM(require("react"));
function usePinnedTracks(layoutContext) {
  layoutContext = useEnsureLayoutContext(layoutContext);
  return React30.useMemo(() => {
    if ((layoutContext == null ? void 0 : layoutContext.pin.state) !== void 0 && layoutContext.pin.state.length >= 1) {
      return layoutContext.pin.state;
    }
    return [];
  }, [layoutContext.pin.state]);
}

// src/hooks/useRemoteParticipant.ts
var import_components_core24 = require("@livekit/components-core");
var React31 = __toESM(require("react"));
function useRemoteParticipant(identity, options = {}) {
  const room = useRoomContext();
  const [updateOnlyOn] = React31.useState(options.updateOnlyOn);
  const observable = React31.useMemo(
    () => (0, import_components_core24.connectedParticipantObserver)(room, identity, { additionalEvents: updateOnlyOn }),
    [room, identity, updateOnlyOn]
  );
  const participant = useObservableState(
    observable,
    room.getParticipantByIdentity(identity)
  );
  return participant;
}

// src/hooks/useRoomInfo.ts
var import_components_core25 = require("@livekit/components-core");
var React32 = __toESM(require("react"));
function useRoomInfo(options = {}) {
  const room = useEnsureRoom(options.room);
  const infoObserver = React32.useMemo(() => (0, import_components_core25.roomInfoObserver)(room), [room]);
  const { name, metadata } = useObservableState(infoObserver, {
    name: room.name,
    metadata: room.metadata
  });
  return { name, metadata };
}

// src/hooks/useSortedParticipants.ts
var import_components_core27 = require("@livekit/components-core");
var React34 = __toESM(require("react"));

// src/hooks/useSpeakingParticipants.ts
var import_components_core26 = require("@livekit/components-core");
var React33 = __toESM(require("react"));
function useSpeakingParticipants() {
  const room = useRoomContext();
  const speakerObserver = React33.useMemo(() => (0, import_components_core26.activeSpeakerObserver)(room), [room]);
  const activeSpeakers = useObservableState(speakerObserver, room.activeSpeakers);
  return activeSpeakers;
}

// src/hooks/useSortedParticipants.ts
function useSortedParticipants(participants) {
  const [sortedParticipants, setSortedParticipants] = React34.useState(
    (0, import_components_core27.sortParticipants)(participants)
  );
  const activeSpeakers = useSpeakingParticipants();
  React34.useEffect(() => {
    setSortedParticipants((0, import_components_core27.sortParticipants)(participants));
  }, [activeSpeakers, participants]);
  return sortedParticipants;
}

// src/hooks/useStartAudio.ts
var import_components_core28 = require("@livekit/components-core");
var React35 = __toESM(require("react"));
function useStartAudio({ room, props }) {
  const roomEnsured = useEnsureRoom(room);
  const { className, roomAudioPlaybackAllowedObservable: roomAudioPlaybackAllowedObservable2, handleStartAudioPlayback } = React35.useMemo(
    () => (0, import_components_core28.setupStartAudio)(),
    []
  );
  const observable = React35.useMemo(
    () => roomAudioPlaybackAllowedObservable2(roomEnsured),
    [roomEnsured, roomAudioPlaybackAllowedObservable2]
  );
  const { canPlayAudio } = useObservableState(observable, { canPlayAudio: false });
  const mergedProps = React35.useMemo(
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
var React36 = __toESM(require("react"));
function useSwipe(element, options = {}) {
  var _a;
  const touchStart = React36.useRef(null);
  const touchEnd = React36.useRef(null);
  const minSwipeDistance = (_a = options.minSwipeDistance) != null ? _a : 50;
  const onTouchStart = (event) => {
    touchEnd.current = null;
    touchStart.current = event.targetTouches[0].clientX;
  };
  const onTouchMove = (event) => {
    touchEnd.current = event.targetTouches[0].clientX;
  };
  const onTouchEnd = React36.useCallback(() => {
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
  React36.useEffect(() => {
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
var import_components_core29 = require("@livekit/components-core");
var React37 = __toESM(require("react"));
function useChatToggle({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const { className } = React37.useMemo(() => (0, import_components_core29.setupChatToggle)(), []);
  const mergedProps = React37.useMemo(() => {
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

// src/hooks/useToken.ts
var import_components_core30 = require("@livekit/components-core");
var React38 = __toESM(require("react"));
function useToken(tokenEndpoint, roomName, options = {}) {
  const [token, setToken] = React38.useState(void 0);
  React38.useEffect(() => {
    var _a;
    if (tokenEndpoint === void 0) {
      throw Error("token endpoint needs to be defined");
    }
    if (((_a = options.userInfo) == null ? void 0 : _a.identity) === void 0) {
      return;
    }
    const tokenFetcher = () => __async(this, null, function* () {
      import_components_core30.log.debug("fetching token");
      const params = new URLSearchParams(__spreadProps(__spreadValues({}, options.userInfo), { roomName }));
      const res = yield fetch(`${tokenEndpoint}?${params.toString()}`);
      const { accessToken } = yield res.json();
      setToken(accessToken);
    });
    tokenFetcher();
  }, [tokenEndpoint, roomName, options]);
  return token;
}

// src/hooks/useTrackMutedIndicator.ts
var import_components_core31 = require("@livekit/components-core");
var React39 = __toESM(require("react"));
function useTrackMutedIndicator(source, options = {}) {
  var _a;
  const p = useEnsureParticipant(options.participant);
  const { className, mediaMutedObserver } = React39.useMemo(
    () => (0, import_components_core31.setupTrackMutedIndicator)(p, source),
    [p, source]
  );
  const isMuted = useObservableState(mediaMutedObserver, !!((_a = p.getTrack(source)) == null ? void 0 : _a.isMuted));
  return { isMuted, className };
}

// src/hooks/useTrackToggle.ts
var import_components_core32 = require("@livekit/components-core");
var React40 = __toESM(require("react"));
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
  const { toggle, className, pendingObserver, enabledObserver } = React40.useMemo(
    () => room ? (0, import_components_core32.setupMediaToggle)(source, room, captureOptions) : (0, import_components_core32.setupManualToggle)(),
    [room, source, JSON.stringify(captureOptions)]
  );
  const pending = useObservableState(pendingObserver, false);
  const enabled = useObservableState(enabledObserver, initialState != null ? initialState : !!(track == null ? void 0 : track.isEnabled));
  React40.useEffect(() => {
    onChange == null ? void 0 : onChange(enabled);
  }, [enabled, onChange]);
  React40.useEffect(() => {
    if (initialState !== void 0) {
      import_components_core32.log.debug("forcing initial toggle state", source, initialState);
      toggle(initialState);
    }
  }, []);
  const newProps = React40.useMemo(() => mergeProps(rest, { className }), [rest, className]);
  const clickHandler = React40.useCallback(
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
var import_components_core33 = require("@livekit/components-core");
var import_livekit_client6 = require("livekit-client");
var React41 = __toESM(require("react"));
function useTracks(sources = [
  import_livekit_client6.Track.Source.Camera,
  import_livekit_client6.Track.Source.Microphone,
  import_livekit_client6.Track.Source.ScreenShare,
  import_livekit_client6.Track.Source.ScreenShareAudio,
  import_livekit_client6.Track.Source.Unknown
], options = {}) {
  const room = useEnsureRoom(options.room);
  const [trackReferences, setTrackReferences] = React41.useState([]);
  const [participants, setParticipants] = React41.useState([]);
  const sources_ = React41.useMemo(() => {
    return sources.map((s) => (0, import_components_core33.isSourceWitOptions)(s) ? s.source : s);
  }, [JSON.stringify(sources)]);
  React41.useEffect(() => {
    const subscription = (0, import_components_core33.trackReferencesObservable)(room, sources_, {
      additionalRoomEvents: options.updateOnlyOn,
      onlySubscribed: options.onlySubscribed
    }).subscribe(({ trackReferences: trackReferences2, participants: participants2 }) => {
      import_components_core33.log.debug("setting track bundles", trackReferences2, participants2);
      setTrackReferences(trackReferences2);
      setParticipants(participants2);
    });
    return () => subscription.unsubscribe();
  }, [room, JSON.stringify(options.updateOnlyOn), JSON.stringify(sources)]);
  const maybeTrackReferences = React41.useMemo(() => {
    if ((0, import_components_core33.isSourcesWithOptions)(sources)) {
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
            import_components_core33.log.debug(
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
  if ((0, import_components_core33.isSourcesWithOptions)(sources)) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useAudioPlayback,
  useChatToggle,
  useClearPinButton,
  useConnectionQualityIndicator,
  useConnectionState,
  useDataChannel,
  useDisconnectButton,
  useFacingMode,
  useFocusToggle,
  useGridLayout,
  useIsMuted,
  useIsSpeaking,
  useLiveKitRoom,
  useLocalParticipant,
  useLocalParticipantPermissions,
  useMediaDeviceSelect,
  useMediaDevices,
  useMediaTrack,
  useMediaTrackByName,
  usePagination,
  useParticipantInfo,
  useParticipantPermissions,
  useParticipantTile,
  useParticipants,
  usePinnedTracks,
  useRemoteParticipant,
  useRemoteParticipants,
  useRoomInfo,
  useSortedParticipants,
  useSpeakingParticipants,
  useStartAudio,
  useSwipe,
  useToken,
  useTrackMutedIndicator,
  useTrackToggle,
  useTracks,
  useVisualStableUpdate
});
//# sourceMappingURL=index.js.map