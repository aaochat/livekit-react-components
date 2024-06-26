var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/components/controls/ClearPinButton.tsx
import * as React51 from "react";

// src/hooks/useAudioPlayback.ts
import * as React9 from "react";

// src/hooks/internal/useResizeObserver.ts
import * as React from "react";
import useLatest from "@react-hook/latest";
function useResizeObserver(target, callback) {
  const resizeObserver = getResizeObserver();
  const storedCallback = useLatest(callback);
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
        for (let i = 0; i < allEntries.length; i++) {
          if (triggered.has(allEntries[i].target)) continue;
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
import * as React2 from "react";
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
import * as React3 from "react";
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
import { roomAudioPlaybackAllowedObservable } from "@livekit/components-core";

// src/context/layout-context.ts
import { PIN_DEFAULT_STATE, WIDGET_DEFAULT_STATE } from "@livekit/components-core";
import * as React4 from "react";

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
  const [pinState, pinDispatch] = React4.useReducer(pinReducer, PIN_DEFAULT_STATE);
  const [widgetState, widgetDispatch] = React4.useReducer(chatReducer, WIDGET_DEFAULT_STATE);
  const [whiteboardState, whiteboardDispatch] = React4.useReducer(whiteboardReducer, WHITEBOARD_DEFAULT_STATE);
  return {
    pin: { dispatch: pinDispatch, state: pinState },
    widget: { dispatch: widgetDispatch, state: widgetState },
    whiteboard: { dispatch: whiteboardDispatch, state: whiteboardState }
  };
}
function useEnsureCreateLayoutContext(layoutContext) {
  const [pinState, pinDispatch] = React4.useReducer(pinReducer, PIN_DEFAULT_STATE);
  const [widgetState, widgetDispatch] = React4.useReducer(chatReducer, WIDGET_DEFAULT_STATE);
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
import * as React6 from "react";

// src/context/track-reference-context.ts
import * as React5 from "react";
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
  var _a;
  const context = useMaybeParticipantContext();
  const trackContext = useMaybeTrackRefContext();
  const p = (_a = participant != null ? participant : context) != null ? _a : trackContext == null ? void 0 : trackContext.participant;
  if (!p) {
    throw new Error(
      "No participant provided, make sure you are inside a participant context or pass the participant explicitly"
    );
  }
  return p;
}

// src/context/room-context.ts
import * as React7 from "react";
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
  const r = room != null ? room : context;
  if (!r) {
    throw new Error(
      "No room provided, make sure you are inside a Room context or pass the room explicitly"
    );
  }
  return r;
}

// src/context/feature-context.ts
import * as React8 from "react";
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
    () => roomAudioPlaybackAllowedObservable(roomEnsured),
    [roomEnsured]
  );
  const { canPlayAudio } = useObservableState(observable, {
    canPlayAudio: roomEnsured.canPlaybackAudio
  });
  return { canPlayAudio, startAudio };
}

// src/hooks/useClearPinButton.ts
import { setupClearPinButton } from "@livekit/components-core";
import * as React10 from "react";

// src/mergeProps.ts
import clsx from "clsx";
function chain(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        try {
          callback(...args);
        } catch (e) {
          console.error(e);
        }
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
        result[key] = clsx(a, b);
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
  const buttonProps = React10.useMemo(() => {
    const { className } = setupClearPinButton();
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
import { setupConnectionQualityIndicator } from "@livekit/components-core";
import { ConnectionQuality } from "livekit-client";
import * as React11 from "react";
function useConnectionQualityIndicator(options = {}) {
  const p = useEnsureParticipant(options.participant);
  const { className, connectionQualityObserver } = React11.useMemo(
    () => setupConnectionQualityIndicator(p),
    [p]
  );
  const quality = useObservableState(connectionQualityObserver, ConnectionQuality.Unknown);
  return { className, quality };
}

// src/hooks/useConnectionStatus.ts
import { connectionStateObserver } from "@livekit/components-core";
import * as React12 from "react";
function useConnectionState(room) {
  const r = useEnsureRoom(room);
  const observable = React12.useMemo(() => connectionStateObserver(r), [r]);
  const connectionState = useObservableState(observable, r.state);
  return connectionState;
}

// src/hooks/useDataChannel.ts
import { setupDataMessageHandler } from "@livekit/components-core";
import * as React13 from "react";
function useDataChannel(topicOrCallback, callback) {
  const onMessage = typeof topicOrCallback === "function" ? topicOrCallback : callback;
  const topic = typeof topicOrCallback === "string" ? topicOrCallback : void 0;
  const room = useRoomContext();
  const { send, messageObservable, isSendingObservable } = React13.useMemo(
    () => setupDataMessageHandler(room, topic, onMessage),
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
import { setupDisconnectButton } from "@livekit/components-core";
import { ConnectionState } from "livekit-client";
import * as React14 from "react";
function useDisconnectButton(props) {
  const room = useRoomContext();
  const connectionState = useConnectionState(room);
  const buttonProps = React14.useMemo(() => {
    const { className, disconnect } = setupDisconnectButton(room);
    const mergedProps = mergeProps(props, {
      className,
      onClick: () => {
        var _a;
        return disconnect((_a = props.stopTracks) != null ? _a : true);
      },
      disabled: connectionState === ConnectionState.Disconnected
    });
    return mergedProps;
  }, [room, props, connectionState]);
  return { buttonProps };
}

// src/hooks/useFacingMode.ts
import { LocalTrackPublication, facingModeFromLocalTrack } from "livekit-client";
function useFacingMode(trackReference) {
  if (trackReference.publication instanceof LocalTrackPublication) {
    const localTrack = trackReference.publication.track;
    if (localTrack) {
      const { facingMode } = facingModeFromLocalTrack(localTrack);
      return facingMode;
    }
  }
  return "undefined";
}

// src/hooks/useFocusToggle.ts
import { setupFocusToggle, isTrackReferencePinned } from "@livekit/components-core";
import * as React15 from "react";
function useFocusToggle({ trackRef, props }) {
  const trackReference = useEnsureTrackRef(trackRef);
  const layoutContext = useMaybeLayoutContext();
  const { className } = React15.useMemo(() => setupFocusToggle(), []);
  const inFocus = React15.useMemo(() => {
    return isTrackReferencePinned(trackReference, layoutContext == null ? void 0 : layoutContext.pin.state);
  }, [trackRef, layoutContext == null ? void 0 : layoutContext.pin.state]);
  const mergedProps = React15.useMemo(
    () => mergeProps(props, {
      className,
      onClick: (event) => {
        var _a, _b, _c, _d, _e;
        (_a = props.onClick) == null ? void 0 : _a.call(props, event);
        if (inFocus) {
          (_c = layoutContext == null ? void 0 : (_b = layoutContext.pin).dispatch) == null ? void 0 : _c.call(_b, {
            msg: "clear_pin"
          });
        } else {
          (_e = layoutContext == null ? void 0 : (_d = layoutContext.pin).dispatch) == null ? void 0 : _e.call(_d, {
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
import { GRID_LAYOUTS, selectGridLayout } from "@livekit/components-core";
import * as React16 from "react";
function useGridLayout(gridElement, trackCount) {
  const { width, height } = useSize(gridElement);
  const layout = width > 0 && height > 0 ? selectGridLayout(GRID_LAYOUTS, trackCount, width, height) : GRID_LAYOUTS[0];
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
import {
  getTrackReferenceId,
  mutedObserver
} from "@livekit/components-core";
import * as React17 from "react";
function useIsMuted(sourceOrTrackRef, options = {}) {
  var _a, _b;
  const passedParticipant = typeof sourceOrTrackRef === "string" ? options.participant : sourceOrTrackRef.participant;
  const p = useEnsureParticipant(passedParticipant);
  const ref = typeof sourceOrTrackRef === "string" ? { participant: p, source: sourceOrTrackRef } : sourceOrTrackRef;
  const [isMuted, setIsMuted] = React17.useState(
    !!(((_a = ref.publication) == null ? void 0 : _a.isMuted) || ((_b = p.getTrackPublication(ref.source)) == null ? void 0 : _b.isMuted))
  );
  React17.useEffect(() => {
    const listener = mutedObserver(ref).subscribe(setIsMuted);
    return () => listener.unsubscribe();
  }, [getTrackReferenceId(ref)]);
  return isMuted;
}

// src/hooks/useIsSpeaking.ts
import { createIsSpeakingObserver } from "@livekit/components-core";
import * as React18 from "react";
function useIsSpeaking(participant) {
  const p = useEnsureParticipant(participant);
  const observable = React18.useMemo(() => createIsSpeakingObserver(p), [p]);
  const isSpeaking = useObservableState(observable, p.isSpeaking);
  return isSpeaking;
}

// src/hooks/useLiveKitRoom.ts
import { log, setupLiveKitRoom } from "@livekit/components-core";
import { Room, MediaDeviceFailure, RoomEvent, ConnectionState as ConnectionState2 } from "livekit-client";
import * as React19 from "react";
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
    onEncryptionError,
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
    "onEncryptionError",
    "simulateParticipants"
  ]);
  if (options && passedRoom) {
    log.warn(
      "when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead."
    );
  }
  const [room, setRoom] = React19.useState();
  React19.useEffect(() => {
    setRoom(passedRoom != null ? passedRoom : new Room(options));
  }, [passedRoom]);
  const htmlProps = React19.useMemo(() => {
    const { className } = setupLiveKitRoom();
    return mergeProps(rest, { className });
  }, [rest]);
  React19.useEffect(() => {
    if (!room) return;
    const onSignalConnected = () => {
      const localP = room.localParticipant;
      log.debug("trying to publish local tracks");
      Promise.all([
        localP.setMicrophoneEnabled(!!audio, typeof audio !== "boolean" ? audio : void 0),
        localP.setCameraEnabled(!!video, typeof video !== "boolean" ? video : void 0),
        localP.setScreenShareEnabled(!!screen, typeof screen !== "boolean" ? screen : void 0)
      ]).catch((e) => {
        log.warn(e);
        onError == null ? void 0 : onError(e);
      });
    };
    const handleMediaDeviceError = (e) => {
      const mediaDeviceFailure = MediaDeviceFailure.getFailure(e);
      onMediaDeviceFailure == null ? void 0 : onMediaDeviceFailure(mediaDeviceFailure);
    };
    const handleEncryptionError = (e) => {
      onEncryptionError == null ? void 0 : onEncryptionError(e);
    };
    room.on(RoomEvent.SignalConnected, onSignalConnected).on(RoomEvent.MediaDevicesError, handleMediaDeviceError).on(RoomEvent.EncryptionError, handleEncryptionError);
    return () => {
      room.off(RoomEvent.SignalConnected, onSignalConnected).off(RoomEvent.MediaDevicesError, handleMediaDeviceError).off(RoomEvent.EncryptionError, handleEncryptionError);
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
      log.debug("no token yet");
      return;
    }
    if (!serverUrl) {
      log.warn("no livekit url provided");
      onError == null ? void 0 : onError(Error("no livekit url provided"));
      return;
    }
    if (connect) {
      log.debug("connecting");
      room.connect(serverUrl, token, connectOptions).catch((e) => {
        log.warn(e);
        onError == null ? void 0 : onError(e);
      });
    } else {
      log.debug("disconnecting because connect is false");
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
        case ConnectionState2.Disconnected:
          if (onDisconnected) onDisconnected();
          break;
        case ConnectionState2.Connected:
          if (onConnected) onConnected();
          break;
        default:
          break;
      }
    };
    room.on(RoomEvent.ConnectionStateChanged, connectionStateChangeListener);
    return () => {
      room.off(RoomEvent.ConnectionStateChanged, connectionStateChangeListener);
    };
  }, [token, onConnected, onDisconnected, room]);
  React19.useEffect(() => {
    if (!room) return;
    return () => {
      log.info("disconnecting on onmount");
      room.disconnect();
    };
  }, [room]);
  return { room, htmlProps };
}

// src/hooks/useLocalParticipant.ts
import { observeParticipantMedia } from "@livekit/components-core";
import * as React20 from "react";
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
    const listener = observeParticipantMedia(room.localParticipant).subscribe(handleUpdate);
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
import { participantPermissionObserver } from "@livekit/components-core";
import * as React21 from "react";
function useLocalParticipantPermissions() {
  const room = useRoomContext();
  const permissionObserver = React21.useMemo(
    () => participantPermissionObserver(room.localParticipant),
    [room]
  );
  const permissions = useObservableState(permissionObserver, room.localParticipant.permissions);
  return permissions;
}

// src/hooks/useMediaDeviceSelect.ts
import { createMediaDeviceObserver, setupDeviceSelector, log as log2 } from "@livekit/components-core";
import * as React22 from "react";
function useMediaDeviceSelect({
  kind,
  room,
  track,
  requestPermissions,
  onError
}) {
  const roomContext = useMaybeRoomContext();
  const deviceObserver = React22.useMemo(
    () => createMediaDeviceObserver(kind, onError, requestPermissions),
    [kind, requestPermissions, onError]
  );
  const devices = useObservableState(deviceObserver, []);
  const [currentDeviceId, setCurrentDeviceId] = React22.useState("");
  const { className, activeDeviceObservable, setActiveMediaDevice } = React22.useMemo(
    () => setupDeviceSelector(kind, room != null ? room : roomContext, track),
    [kind, room, roomContext, track]
  );
  React22.useEffect(() => {
    const listener = activeDeviceObservable.subscribe((deviceId) => {
      log2.info("setCurrentDeviceId", deviceId);
      if (deviceId) setCurrentDeviceId(deviceId);
    });
    return () => {
      listener == null ? void 0 : listener.unsubscribe();
    };
  }, [activeDeviceObservable]);
  return { devices, className, activeDeviceId: currentDeviceId, setActiveMediaDevice };
}

// src/hooks/useMediaDevices.ts
import * as React23 from "react";
import { createMediaDeviceObserver as createMediaDeviceObserver2 } from "@livekit/components-core";
function useMediaDevices({
  kind,
  onError
}) {
  const deviceObserver = React23.useMemo(
    () => createMediaDeviceObserver2(kind, onError),
    [kind, onError]
  );
  const devices = useObservableState(deviceObserver, []);
  return devices;
}

// src/hooks/usePagination.ts
import * as React25 from "react";

// src/hooks/useVisualStableUpdate.ts
import { log as log3, sortTrackReferences, updatePages } from "@livekit/components-core";
import * as React24 from "react";
function useVisualStableUpdate(trackReferences, maxItemsOnPage, options = {}) {
  const lastTrackRefs = React24.useRef([]);
  const lastMaxItemsOnPage = React24.useRef(-1);
  const layoutChanged = maxItemsOnPage !== lastMaxItemsOnPage.current;
  const sortedTrackRefs = typeof options.customSortFunction === "function" ? options.customSortFunction(trackReferences) : sortTrackReferences(trackReferences);
  let updatedTrackRefs = [...sortedTrackRefs];
  if (layoutChanged === false) {
    try {
      updatedTrackRefs = updatePages(lastTrackRefs.current, sortedTrackRefs, maxItemsOnPage);
    } catch (error) {
      log3.error("Error while running updatePages(): ", error);
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
import { participantInfoObserver } from "@livekit/components-core";
import * as React26 from "react";
function useParticipantInfo(props = {}) {
  const p = useEnsureParticipant(props.participant);
  const infoObserver = React26.useMemo(() => participantInfoObserver(p), [p]);
  const { identity, name, metadata } = useObservableState(infoObserver, {
    name: p.name,
    identity: p.identity,
    metadata: p.metadata
  });
  return { identity, name, metadata };
}

// src/hooks/useParticipantPermissions.ts
import { participantPermissionObserver as participantPermissionObserver2 } from "@livekit/components-core";
import * as React27 from "react";
function useParticipantPermissions(options = {}) {
  const p = useEnsureParticipant(options.participant);
  const permissionObserver = React27.useMemo(() => participantPermissionObserver2(p), [p]);
  const permissions = useObservableState(permissionObserver, p.permissions);
  return permissions;
}

// src/hooks/useParticipantTile.ts
import { setupParticipantTile } from "@livekit/components-core";
import * as React28 from "react";
import { Track } from "livekit-client";
function useParticipantTile({
  trackRef,
  onParticipantClick,
  disableSpeakingIndicator,
  htmlProps
}) {
  const trackReference = useEnsureTrackRef(trackRef);
  const mergedProps = React28.useMemo(() => {
    const { className } = setupParticipantTile();
    return mergeProps(htmlProps, {
      className,
      onClick: (event) => {
        var _a, _b;
        (_a = htmlProps.onClick) == null ? void 0 : _a.call(htmlProps, event);
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
  const micTrack = trackReference.participant.getTrackPublication(Track.Source.Microphone);
  const micRef = React28.useMemo(() => {
    return {
      participant: trackReference.participant,
      source: Track.Source.Microphone,
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
import { connectedParticipantsObserver } from "@livekit/components-core";
import * as React29 from "react";
function useRemoteParticipants(options = {}) {
  const room = useEnsureRoom(options.room);
  const [participants, setParticipants] = React29.useState([]);
  React29.useEffect(() => {
    const listener = connectedParticipantsObserver(room, {
      additionalRoomEvents: options.updateOnlyOn
    }).subscribe(setParticipants);
    return () => listener.unsubscribe();
  }, [room, JSON.stringify(options.updateOnlyOn)]);
  return participants;
}

// src/hooks/useParticipants.ts
import * as React30 from "react";
function useParticipants(options = {}) {
  const remoteParticipants = useRemoteParticipants(options);
  const { localParticipant } = useLocalParticipant(options);
  return React30.useMemo(
    () => [localParticipant, ...remoteParticipants],
    [localParticipant, remoteParticipants]
  );
}

// src/hooks/usePinnedTracks.ts
import * as React31 from "react";
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
import { connectedParticipantObserver } from "@livekit/components-core";
import * as React32 from "react";
function useRemoteParticipant(identity, options = {}) {
  const room = useRoomContext();
  const [updateOnlyOn] = React32.useState(options.updateOnlyOn);
  const observable = React32.useMemo(
    () => connectedParticipantObserver(room, identity, { additionalEvents: updateOnlyOn }),
    [room, identity, updateOnlyOn]
  );
  const participant = useObservableState(
    observable,
    room.getParticipantByIdentity(identity)
  );
  return participant;
}

// src/hooks/useRoomInfo.ts
import { roomInfoObserver } from "@livekit/components-core";
import * as React33 from "react";
function useRoomInfo(options = {}) {
  const room = useEnsureRoom(options.room);
  const infoObserver = React33.useMemo(() => roomInfoObserver(room), [room]);
  const { name, metadata } = useObservableState(infoObserver, {
    name: room.name,
    metadata: room.metadata
  });
  return { name, metadata };
}

// src/hooks/useSortedParticipants.ts
import { sortParticipants } from "@livekit/components-core";
import * as React35 from "react";

// src/hooks/useSpeakingParticipants.ts
import { activeSpeakerObserver } from "@livekit/components-core";
import * as React34 from "react";
function useSpeakingParticipants() {
  const room = useRoomContext();
  const speakerObserver = React34.useMemo(() => activeSpeakerObserver(room), [room]);
  const activeSpeakers = useObservableState(speakerObserver, room.activeSpeakers);
  return activeSpeakers;
}

// src/hooks/useSortedParticipants.ts
function useSortedParticipants(participants) {
  const [sortedParticipants, setSortedParticipants] = React35.useState(
    sortParticipants(participants)
  );
  const activeSpeakers = useSpeakingParticipants();
  React35.useEffect(() => {
    setSortedParticipants(sortParticipants(participants));
  }, [activeSpeakers, participants]);
  return sortedParticipants;
}

// src/hooks/useStartAudio.ts
import { setupStartAudio } from "@livekit/components-core";
import * as React36 from "react";
function useStartAudio({ room, props }) {
  const roomEnsured = useEnsureRoom(room);
  const { className, roomAudioPlaybackAllowedObservable: roomAudioPlaybackAllowedObservable2, handleStartAudioPlayback } = React36.useMemo(
    () => setupStartAudio(),
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
import { setupStartVideo } from "@livekit/components-core";
import * as React37 from "react";
function useStartVideo({ room, props }) {
  const roomEnsured = useEnsureRoom(room);
  const { className, roomVideoPlaybackAllowedObservable, handleStartVideoPlayback } = React37.useMemo(
    () => setupStartVideo(),
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
import * as React38 from "react";
function useSwipe(element, options = {}) {
  var _a;
  const touchStart = React38.useRef(null);
  const touchEnd = React38.useRef(null);
  const minSwipeDistance = (_a = options.minSwipeDistance) != null ? _a : 50;
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
import { setupChatToggle } from "@livekit/components-core";
import * as React39 from "react";
function useChatToggle({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const { className } = React39.useMemo(() => setupChatToggle(), []);
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
import { log as log4 } from "@livekit/components-core";
import * as React40 from "react";
function useToken(tokenEndpoint, roomName, options = {}) {
  const [token, setToken] = React40.useState(void 0);
  React40.useEffect(() => {
    var _a;
    if (tokenEndpoint === void 0) {
      throw Error("token endpoint needs to be defined");
    }
    if (((_a = options.userInfo) == null ? void 0 : _a.identity) === void 0) {
      return;
    }
    const tokenFetcher = () => __async(this, null, function* () {
      log4.debug("fetching token");
      const params = new URLSearchParams(__spreadProps(__spreadValues({}, options.userInfo), { roomName }));
      const res = yield fetch(`${tokenEndpoint}?${params.toString()}`);
      if (!res.ok) {
        log4.error(
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
import {
  setupTrackMutedIndicator,
  getTrackReferenceId as getTrackReferenceId2
} from "@livekit/components-core";
import * as React41 from "react";
function useTrackMutedIndicator(trackRef) {
  var _a, _b;
  const trackReference = useEnsureTrackRef(trackRef);
  const { className, mediaMutedObserver } = React41.useMemo(
    () => setupTrackMutedIndicator(trackReference),
    [getTrackReferenceId2(trackReference)]
  );
  const isMuted = useObservableState(
    mediaMutedObserver,
    !!(((_a = trackReference.publication) == null ? void 0 : _a.isMuted) || ((_b = trackReference.participant.getTrackPublication(trackReference.source)) == null ? void 0 : _b.isMuted))
  );
  return { isMuted, className };
}

// src/hooks/useTrackToggle.ts
import { setupMediaToggle, setupManualToggle, log as log5 } from "@livekit/components-core";
import * as React42 from "react";
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
  const track = (_a2 = room == null ? void 0 : room.localParticipant) == null ? void 0 : _a2.getTrackPublication(source);
  const userInteractionRef = React42.useRef(false);
  const { toggle, className, pendingObserver, enabledObserver } = React42.useMemo(
    () => room ? setupMediaToggle(source, room, captureOptions) : setupManualToggle(),
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
      log5.debug("forcing initial toggle state", source, initialState);
      toggle(initialState);
    }
  }, []);
  const newProps = React42.useMemo(() => mergeProps(rest, { className }), [rest, className]);
  const clickHandler = React42.useCallback(
    (evt) => {
      var _a3;
      userInteractionRef.current = true;
      toggle().finally(() => userInteractionRef.current = false);
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
import {
  isSourcesWithOptions,
  isSourceWitOptions,
  log as log6,
  trackReferencesObservable
} from "@livekit/components-core";
import { Track as Track2 } from "livekit-client";
import * as React43 from "react";
function useTracks(sources = [
  Track2.Source.Camera,
  Track2.Source.Microphone,
  Track2.Source.ScreenShare,
  Track2.Source.ScreenShareAudio,
  Track2.Source.Unknown
], options = {}) {
  const room = useEnsureRoom(options.room);
  const [trackReferences, setTrackReferences] = React43.useState([]);
  const [participants, setParticipants] = React43.useState([]);
  const sources_ = React43.useMemo(() => {
    return sources.map((s) => isSourceWitOptions(s) ? s.source : s);
  }, [JSON.stringify(sources)]);
  React43.useEffect(() => {
    const subscription = trackReferencesObservable(room, sources_, {
      additionalRoomEvents: options.updateOnlyOn,
      onlySubscribed: options.onlySubscribed
    }).subscribe(({ trackReferences: trackReferences2, participants: participants2 }) => {
      log6.debug("setting track bundles", trackReferences2, participants2);
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
    if (isSourcesWithOptions(sources)) {
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
            log6.debug(
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
  if (isSourcesWithOptions(sources)) {
    const sourcesThatNeedPlaceholder = sources.filter((sourceWithOption) => sourceWithOption.withPlaceholder).map((sourceWithOption) => sourceWithOption.source);
    participants.forEach((participant) => {
      const sourcesOfSubscribedTracks = participant.getTrackPublications().map((pub) => {
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

// src/hooks/useTrackRefBySourceOrName.ts
import { setupMediaTrack, getTrackByIdentifier } from "@livekit/components-core";
import * as React44 from "react";
import { Track as Track3 } from "livekit-client";
function useTrackRefBySourceOrName(source) {
  var _a, _b;
  const [publication, setPublication] = React44.useState(getTrackByIdentifier(source));
  const { trackObserver } = React44.useMemo(() => {
    return setupMediaTrack(source);
  }, [(_a = source.participant.sid) != null ? _a : source.participant.identity, source.source]);
  React44.useEffect(() => {
    const subscription = trackObserver.subscribe((publication2) => {
      setPublication(publication2);
    });
    return () => subscription == null ? void 0 : subscription.unsubscribe();
  }, [trackObserver]);
  return {
    participant: source.participant,
    source: (_b = source.source) != null ? _b : Track3.Source.Unknown,
    publication
  };
}

// src/hooks/useTrackByName.ts
function useTrackByName(name, participant) {
  const p = useEnsureParticipant(participant);
  return useTrackRefBySourceOrName({ name, participant: p });
}

// src/hooks/useChat.ts
import { setupChat } from "@livekit/components-core";
import * as React45 from "react";
function useChat(options) {
  const room = useRoomContext();
  const [setup, setSetup] = React45.useState();
  const isSending = useObservableState(setup == null ? void 0 : setup.isSendingObservable, false);
  const chatMessages = useObservableState(setup == null ? void 0 : setup.messageObservable, []);
  React45.useEffect(() => {
    const setupChatReturn = setupChat(room, options);
    setSetup(setupChatReturn);
  }, [room, options]);
  return { send: setup == null ? void 0 : setup.send, update: setup == null ? void 0 : setup.update, chatMessages, isSending };
}

// src/hooks/useWhiteboard.ts
import React46 from "react";
function useWhiteboard() {
  const { metadata } = useRoomInfo();
  const room = useRoomContext();
  const [isWhiteboardShared, setIsWhiteboardShared] = React46.useState(false);
  const [isWhiteboardHost, setIsWhiteboardHost] = React46.useState(true);
  const [url, setUrl] = React46.useState(null);
  React46.useEffect(() => {
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
import { loadUserChoices, saveUserChoices } from "@livekit/components-core";
import * as React47 from "react";
function usePersistentUserChoices(options = {}) {
  var _a;
  const [userChoices, setSettings] = React47.useState(
    loadUserChoices(options.defaults, (_a = options.preventLoad) != null ? _a : false)
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
    var _a2;
    saveUserChoices(userChoices, (_a2 = options.preventSave) != null ? _a2 : false);
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
import * as React48 from "react";
import { LocalParticipant } from "livekit-client";
import { encryptionStatusObservable } from "@livekit/components-core";
function useIsEncrypted(participant) {
  const p = useEnsureParticipant(participant);
  const room = useEnsureRoom();
  const observer = React48.useMemo(() => encryptionStatusObservable(room, p), [room, p]);
  const isEncrypted = useObservableState(
    observer,
    p instanceof LocalParticipant ? p.isE2EEEnabled : p.isEncrypted
  );
  return isEncrypted;
}

// src/hooks/useTrackVolume.ts
import * as React49 from "react";
import { Track as Track4, createAudioAnalyser } from "livekit-client";
import {
  isTrackReference
} from "@livekit/components-core";
var useTrackVolume = (trackOrTrackReference, options = { fftSize: 32, smoothingTimeConstant: 0 }) => {
  const track = isTrackReference(trackOrTrackReference) ? trackOrTrackReference.publication.track : trackOrTrackReference;
  const [volume, setVolume] = React49.useState(0);
  React49.useEffect(() => {
    if (!track || !track.mediaStream) {
      return;
    }
    const { cleanup, analyser } = createAudioAnalyser(track, options);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const updateVolume = () => {
      analyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const a = dataArray[i];
        sum += a * a;
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
  var _a;
  const track = trackOrTrackReference instanceof Track4 ? trackOrTrackReference : (_a = trackOrTrackReference == null ? void 0 : trackOrTrackReference.publication) == null ? void 0 : _a.track;
  const [frequencyBands, setFrequencyBands] = React49.useState([]);
  const opts = __spreadValues(__spreadValues({}, multibandDefaults), options);
  React49.useEffect(() => {
    if (!track || !(track == null ? void 0 : track.mediaStream)) {
      return;
    }
    const { analyser, cleanup } = createAudioAnalyser(track, opts.analyserOptions);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);
    const updateVolume = () => {
      analyser.getFloatFrequencyData(dataArray);
      let frequencies = new Float32Array(dataArray.length);
      for (let i = 0; i < dataArray.length; i++) {
        frequencies[i] = dataArray[i];
      }
      frequencies = frequencies.slice(options.loPass, options.hiPass);
      const normalizedFrequencies = normalizeFrequencies(frequencies);
      const chunkSize = Math.ceil(normalizedFrequencies.length / opts.bands);
      const chunks = [];
      for (let i = 0; i < opts.bands; i++) {
        const summedVolumes = normalizedFrequencies.slice(i * chunkSize, (i + 1) * chunkSize).reduce((acc, val) => acc += val, 0);
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
import * as React50 from "react";
import { participantTracksObservable } from "@livekit/components-core";
function useParticipantTracks(sources, participantIdentity) {
  const room = useRoomContext();
  const participantContext = useMaybeParticipantContext();
  const p = participantIdentity ? room.getParticipantByIdentity(participantIdentity) : participantContext;
  const observable = React50.useMemo(
    () => p ? participantTracksObservable(p, { sources }) : void 0,
    [p == null ? void 0 : p.sid, p == null ? void 0 : p.identity, JSON.stringify(sources)]
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
import * as React52 from "react";
var ConnectionState3 = /* @__PURE__ */ React52.forwardRef(function ConnectionState4(_a, ref) {
  var _b = _a, { room } = _b, props = __objRest(_b, ["room"]);
  const connectionState = useConnectionState(room);
  return /* @__PURE__ */ React52.createElement("div", __spreadValues({ ref }, props), connectionState);
});

// src/components/controls/ChatToggle.tsx
import * as React53 from "react";
var ChatToggle = /* @__PURE__ */ React53.forwardRef(
  function ChatToggle2(props, ref) {
    const { mergedProps } = useChatToggle({ props });
    return /* @__PURE__ */ React53.createElement("button", __spreadValues({ ref }, mergedProps), props.children);
  }
);

// src/utils.ts
import * as React54 from "react";
import { log as log7 } from "@livekit/components-core";
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
  var _a, _b;
  if (typeof window !== "undefined" && typeof process !== "undefined" && // eslint-disable-next-line turbo/no-undeclared-env-vars
  (((_a = process == null ? void 0 : process.env) == null ? void 0 : _a.NODE_ENV) === "dev" || // eslint-disable-next-line turbo/no-undeclared-env-vars
  ((_b = process == null ? void 0 : process.env) == null ? void 0 : _b.NODE_ENV) === "development")) {
    const target = el != null ? el : document.querySelector(".lk-room-container");
    if (target && !getComputedStyle(target).getPropertyValue("--lk-has-imported-styles")) {
      log7.warn(
        "It looks like you're not using the `@livekit/components-styles package`. To render the UI with the default styling, please import it in your layout or page."
      );
    }
  }
}

// src/components/controls/ShareLinkToggle.tsx
import * as React55 from "react";
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
import * as React56 from "react";
var DisconnectButton = /* @__PURE__ */ React56.forwardRef(function DisconnectButton2(props, ref) {
  const { buttonProps } = useDisconnectButton(props);
  return /* @__PURE__ */ React56.createElement("button", __spreadValues({ ref }, buttonProps), props.children);
});

// src/components/controls/FocusToggle.tsx
import * as React76 from "react";

// src/assets/icons/CameraDisabledIcon.tsx
import * as React57 from "react";
var SvgCameraDisabledIcon = (props) => /* @__PURE__ */ React57.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React57.createElement("path", { d: "M1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708L11 10.293V4.5A1.5 1.5 0 0 0 9.5 3H3.707zM0 4.5a1.5 1.5 0 0 1 .943-1.393l9.532 9.533c-.262.224-.603.36-.975.36h-8A1.5 1.5 0 0 1 0 11.5z" }), /* @__PURE__ */ React57.createElement("path", { d: "m15.2 3.6-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4" }));
var CameraDisabledIcon_default = SvgCameraDisabledIcon;

// src/assets/icons/CameraIcon.tsx
import * as React58 from "react";
var SvgCameraIcon = (props) => /* @__PURE__ */ React58.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React58.createElement("path", { d: "M0 4.5A1.5 1.5 0 0 1 1.5 3h8A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-8A1.5 1.5 0 0 1 0 11.5zM15.2 3.6l-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4" }));
var CameraIcon_default = SvgCameraIcon;

// src/assets/icons/ChatCloseIcon.tsx
import * as React59 from "react";
var SvgChatCloseIcon = (props) => /* @__PURE__ */ React59.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 24 24" }, props), /* @__PURE__ */ React59.createElement(
  "path",
  {
    fill: "#FFF",
    d: "M4.99 3.99a1 1 0 0 0-.697 1.717L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 1 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-.727-1.717 1 1 0 0 0-.687.303L12 10.586 5.707 4.293a1 1 0 0 0-.717-.303"
  }
));
var ChatCloseIcon_default = SvgChatCloseIcon;

// src/assets/icons/ChatIcon.tsx
import * as React60 from "react";
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
import * as React61 from "react";
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
import * as React62 from "react";
var SvgFocusToggleIcon = (props) => /* @__PURE__ */ React62.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React62.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ React62.createElement("path", { d: "M10 1.75h4.25m0 0V6m0-4.25L9 7M6 14.25H1.75m0 0V10m0 4.25L7 9" })));
var FocusToggleIcon_default = SvgFocusToggleIcon;

// src/assets/icons/GearIcon.tsx
import * as React63 from "react";
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
import * as React64 from "react";
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
import * as React65 from "react";
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
import * as React66 from "react";
var SvgMicDisabledIcon = (props) => /* @__PURE__ */ React66.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React66.createElement("path", { d: "M12.227 11.52a5.48 5.48 0 0 0 1.246-2.97.5.5 0 0 0-.995-.1 4.5 4.5 0 0 1-.962 2.359l-1.07-1.07C10.794 9.247 11 8.647 11 8V3a3 3 0 0 0-6 0v1.293L1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708zM8 12.5c.683 0 1.33-.152 1.911-.425l.743.743c-.649.359-1.378.59-2.154.66V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.5 5.5 0 0 1-4.973-4.929.5.5 0 0 1 .995-.098A4.5 4.5 0 0 0 8 12.5" }), /* @__PURE__ */ React66.createElement("path", { d: "M8.743 10.907 5 7.164V8a3 3 0 0 0 3.743 2.907" }));
var MicDisabledIcon_default = SvgMicDisabledIcon;

// src/assets/icons/MicIcon.tsx
import * as React67 from "react";
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
import * as React68 from "react";
var SvgQualityExcellentIcon = (props) => /* @__PURE__ */ React68.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React68.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React68.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }));
var QualityExcellentIcon_default = SvgQualityExcellentIcon;

// src/assets/icons/QualityGoodIcon.tsx
import * as React69 from "react";
var SvgQualityGoodIcon = (props) => /* @__PURE__ */ React69.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React69.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React69.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React69.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React69.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React69.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityGoodIcon_default = SvgQualityGoodIcon;

// src/assets/icons/QualityPoorIcon.tsx
import * as React70 from "react";
var SvgQualityPoorIcon = (props) => /* @__PURE__ */ React70.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor" }, props), /* @__PURE__ */ React70.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React70.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React70.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityPoorIcon_default = SvgQualityPoorIcon;

// src/assets/icons/QualityUnknownIcon.tsx
import * as React71 from "react";
var SvgQualityUnknownIcon = (props) => /* @__PURE__ */ React71.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor" }, props), /* @__PURE__ */ React71.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ React71.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ React71.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })));
var QualityUnknownIcon_default = SvgQualityUnknownIcon;

// src/assets/icons/ScreenShareIcon.tsx
import * as React72 from "react";
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
import * as React73 from "react";
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
import * as React74 from "react";
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
import * as React75 from "react";
var SvgUnfocusToggleIcon = (props) => /* @__PURE__ */ React75.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props), /* @__PURE__ */ React75.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ React75.createElement("path", { d: "M13.25 7H9m0 0V2.75M9 7l5.25-5.25M2.75 9H7m0 0v4.25M7 9l-5.25 5.25" })));
var UnfocusToggleIcon_default = SvgUnfocusToggleIcon;

// src/components/controls/FocusToggle.tsx
var FocusToggle = /* @__PURE__ */ React76.forwardRef(
  function FocusToggle2(_a, ref) {
    var _b = _a, { trackRef } = _b, props = __objRest(_b, ["trackRef"]);
    const trackRefFromContext = useMaybeTrackRefContext();
    const { mergedProps, inFocus } = useFocusToggle({
      trackRef: trackRef != null ? trackRef : trackRefFromContext,
      props
    });
    return /* @__PURE__ */ React76.createElement(LayoutContext.Consumer, null, (layoutContext) => layoutContext !== void 0 && /* @__PURE__ */ React76.createElement("button", __spreadValues({ ref }, mergedProps), props.children ? props.children : inFocus ? /* @__PURE__ */ React76.createElement(UnfocusToggleIcon_default, null) : /* @__PURE__ */ React76.createElement(FocusToggleIcon_default, null)));
  }
);

// src/components/controls/MediaDeviceSelect.tsx
import * as React77 from "react";
import { RoomEvent as RoomEvent2 } from "livekit-client";
var MediaDeviceSelect = /* @__PURE__ */ React77.forwardRef(function MediaDeviceSelect2(_a, ref) {
  var _b = _a, {
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
    (e) => {
      if (room) {
        room.emit(RoomEvent2.MediaDevicesError, e);
      }
      onError == null ? void 0 : onError(e);
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
    } catch (e) {
      if (e instanceof Error) {
        onDeviceSelectError == null ? void 0 : onDeviceSelectError(e);
      } else {
        throw e;
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
import * as React78 from "react";
var StartAudio = /* @__PURE__ */ React78.forwardRef(function StartAudio2(_a, ref) {
  var _b = _a, { label = "Allow Audio" } = _b, props = __objRest(_b, ["label"]);
  const room = useRoomContext();
  const { mergedProps } = useStartAudio({ room, props });
  return /* @__PURE__ */ React78.createElement("button", __spreadValues({ ref }, mergedProps), label);
});

// src/components/controls/TrackToggle.tsx
import * as React89 from "react";

// src/assets/icons/util.tsx
import * as React88 from "react";
import { ConnectionQuality as ConnectionQuality2, Track as Track5 } from "livekit-client";

// src/assets/icons/tl/CameraDisabledIcon.tsx
import * as React79 from "react";
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
import * as React80 from "react";
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
import * as React81 from "react";
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
import * as React82 from "react";
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
import * as React83 from "react";
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
import * as React84 from "react";
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
import * as React85 from "react";
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
import * as React86 from "react";
var SvgInviteIcon = (props) => /* @__PURE__ */ React86.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", width: 25, height: 20, fill: "none" }, props), /* @__PURE__ */ React86.createElement(
  "path",
  {
    d: "M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z",
    fill: "#ffffff"
  }
));
var InviteIcon_default = SvgInviteIcon;

// src/assets/icons/tl/UsersIcon.tsx
import * as React87 from "react";
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
    case Track5.Source.Microphone:
      return enabled ? /* @__PURE__ */ React88.createElement(MicIcon_default2, null) : /* @__PURE__ */ React88.createElement(MicDisabledIcon_default2, null);
    case Track5.Source.Camera:
      return enabled ? /* @__PURE__ */ React88.createElement(CameraIcon_default2, null) : /* @__PURE__ */ React88.createElement(CameraDisabledIcon_default2, null);
    case Track5.Source.ScreenShare:
      return enabled ? /* @__PURE__ */ React88.createElement(ScreenShareStopIcon_default, null) : /* @__PURE__ */ React88.createElement(ScreenShareIcon_default, null);
    default:
      return void 0;
  }
}
function getConnectionQualityIcon(quality) {
  switch (quality) {
    case ConnectionQuality2.Excellent:
      return /* @__PURE__ */ React88.createElement(QualityExcellentIcon_default, null);
    case ConnectionQuality2.Good:
      return /* @__PURE__ */ React88.createElement(QualityGoodIcon_default, null);
    case ConnectionQuality2.Poor:
      return /* @__PURE__ */ React88.createElement(QualityPoorIcon_default, null);
    default:
      return /* @__PURE__ */ React88.createElement(QualityUnknownIcon_default, null);
  }
}

// src/components/controls/TrackToggle.tsx
var TrackToggle = /* @__PURE__ */ React89.forwardRef(function TrackToggle2(_a, ref) {
  var _b = _a, { showIcon } = _b, props = __objRest(_b, ["showIcon"]);
  const { buttonProps, enabled } = useTrackToggle(props);
  return /* @__PURE__ */ React89.createElement("button", __spreadValues({ ref }, buttonProps), (showIcon != null ? showIcon : true) && getSourceIcon(props.source, enabled), props.children);
});

// src/components/layout/FocusLayout.tsx
import * as React99 from "react";

// src/components/participant/ParticipantTile.tsx
import * as React98 from "react";
import { Track as Track6 } from "livekit-client";
import { isTrackReference as isTrackReference3, isTrackReferencePinned as isTrackReferencePinned2 } from "@livekit/components-core";

// src/components/participant/ConnectionQualityIndicator.tsx
import * as React90 from "react";
var ConnectionQualityIndicator = /* @__PURE__ */ React90.forwardRef(function ConnectionQualityIndicator2(props, ref) {
  var _a;
  const { className, quality } = useConnectionQualityIndicator(props);
  const elementProps = React90.useMemo(() => {
    return __spreadProps(__spreadValues({}, mergeProps2(props, { className })), { "data-lk-quality": quality });
  }, [quality, props, className]);
  return /* @__PURE__ */ React90.createElement("div", __spreadValues({ ref }, elementProps), (_a = props.children) != null ? _a : getConnectionQualityIcon(quality));
});

// src/components/participant/ParticipantName.tsx
import { setupParticipantName } from "@livekit/components-core";
import * as React91 from "react";
var ParticipantName = /* @__PURE__ */ React91.forwardRef(function ParticipantName2(_a, ref) {
  var _b = _a, { participant } = _b, props = __objRest(_b, ["participant"]);
  const p = useEnsureParticipant(participant);
  const { className, infoObserver } = React91.useMemo(() => {
    return setupParticipantName(p);
  }, [p]);
  const { identity, name } = useObservableState(infoObserver, {
    name: p.name,
    identity: p.identity,
    metadata: p.metadata
  });
  const mergedProps = React91.useMemo(() => {
    return mergeProps2(props, { className, "data-lk-participant-name": name });
  }, [props, className, name]);
  return /* @__PURE__ */ React91.createElement("span", __spreadValues({ ref }, mergedProps), name !== "" ? name : identity, props.children);
});

// src/components/participant/TrackMutedIndicator.tsx
import * as React92 from "react";
var TrackMutedIndicator = /* @__PURE__ */ React92.forwardRef(function TrackMutedIndicator2(_a, ref) {
  var _b = _a, { trackRef, show = "always" } = _b, props = __objRest(_b, ["trackRef", "show"]);
  var _a2;
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
  return /* @__PURE__ */ React92.createElement("div", __spreadProps(__spreadValues({ ref }, htmlProps), { "data-lk-muted": isMuted }), (_a2 = props.children) != null ? _a2 : getSourceIcon(trackRef.source, !isMuted));
});

// src/assets/images/ParticipantPlaceholder.tsx
import * as React93 from "react";
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
import { RemoteTrackPublication } from "livekit-client";
import * as React95 from "react";

// src/hooks/useMediaTrackBySourceOrName.ts
import { isTrackReference as isTrackReference2 } from "@livekit/components-core";
import { setupMediaTrack as setupMediaTrack2, log as log8, isLocal, getTrackByIdentifier as getTrackByIdentifier2 } from "@livekit/components-core";
import * as React94 from "react";
function useMediaTrackBySourceOrName(observerOptions, options = {}) {
  var _a;
  const [publication, setPublication] = React94.useState(getTrackByIdentifier2(observerOptions));
  const [isMuted, setMuted] = React94.useState(publication == null ? void 0 : publication.isMuted);
  const [isSubscribed, setSubscribed] = React94.useState(publication == null ? void 0 : publication.isSubscribed);
  const [track, setTrack] = React94.useState(publication == null ? void 0 : publication.track);
  const [orientation, setOrientation] = React94.useState("landscape");
  const previousElement = React94.useRef();
  const { className, trackObserver } = React94.useMemo(() => {
    return setupMediaTrack2(observerOptions);
  }, [
    (_a = observerOptions.participant.sid) != null ? _a : observerOptions.participant.identity,
    observerOptions.source,
    isTrackReference2(observerOptions) && observerOptions.publication.trackSid
  ]);
  React94.useEffect(() => {
    const subscription = trackObserver.subscribe((publication2) => {
      log8.debug("update track", publication2);
      setPublication(publication2);
      setMuted(publication2 == null ? void 0 : publication2.isMuted);
      setSubscribed(publication2 == null ? void 0 : publication2.isSubscribed);
      setTrack(publication2 == null ? void 0 : publication2.track);
    });
    return () => subscription == null ? void 0 : subscription.unsubscribe();
  }, [trackObserver]);
  React94.useEffect(() => {
    var _a2, _b;
    if (track) {
      if (previousElement.current) {
        track.detach(previousElement.current);
      }
      if (((_a2 = options.element) == null ? void 0 : _a2.current) && !(isLocal(observerOptions.participant) && (track == null ? void 0 : track.kind) === "audio")) {
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
    var _a2, _b;
    if (typeof ((_a2 = publication == null ? void 0 : publication.dimensions) == null ? void 0 : _a2.width) === "number" && typeof ((_b = publication == null ? void 0 : publication.dimensions) == null ? void 0 : _b.height) === "number") {
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
import * as useHooks from "usehooks-ts";
var VideoTrack = /* @__PURE__ */ React95.forwardRef(
  function VideoTrack2(_a, ref) {
    var _b = _a, {
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
      if (manageSubscription && trackReference.publication instanceof RemoteTrackPublication && (debouncedIntersectionEntry == null ? void 0 : debouncedIntersectionEntry.isIntersecting) === false && (intersectionEntry == null ? void 0 : intersectionEntry.isIntersecting) === false) {
        trackReference.publication.setSubscribed(false);
      }
    }, [debouncedIntersectionEntry, trackReference, manageSubscription]);
    React95.useEffect(() => {
      if (manageSubscription && trackReference.publication instanceof RemoteTrackPublication && (intersectionEntry == null ? void 0 : intersectionEntry.isIntersecting) === true) {
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
import * as React96 from "react";
import { log as log9 } from "@livekit/components-core";
import { RemoteAudioTrack, RemoteTrackPublication as RemoteTrackPublication2 } from "livekit-client";
var AudioTrack = /* @__PURE__ */ React96.forwardRef(
  function AudioTrack2(_a, ref) {
    var _b = _a, { trackRef, onSubscriptionStatusChanged, volume, muted } = _b, props = __objRest(_b, ["trackRef", "onSubscriptionStatusChanged", "volume", "muted"]);
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
      if (track instanceof RemoteAudioTrack) {
        track.setVolume(volume);
      } else {
        log9.warn("Volume can only be set on remote audio tracks.");
      }
    }, [volume, track]);
    React96.useEffect(() => {
      if (pub === void 0 || muted === void 0) {
        return;
      }
      if (pub instanceof RemoteTrackPublication2) {
        pub.setEnabled(!muted);
      } else {
        log9.warn("Can only call setEnabled on remote track publications.");
      }
    }, [muted, pub, track]);
    return /* @__PURE__ */ React96.createElement("audio", __spreadValues({ ref: mediaEl }, elementProps));
  }
);

// src/prefabs/WhiteboardTrack.tsx
import * as React97 from "react";
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
var ParticipantTile = /* @__PURE__ */ React98.forwardRef(function ParticipantTile2(_a, ref) {
  var _b = _a, {
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
  var _a2, _b2, _c, _d;
  const trackReference = useEnsureTrackRef(trackRef);
  const { elementProps } = useParticipantTile({
    htmlProps,
    disableSpeakingIndicator,
    onParticipantClick,
    trackRef: trackReference
  });
  const isEncrypted = useIsEncrypted(trackReference.participant);
  const layoutContext = useMaybeLayoutContext();
  const autoManageSubscription = (_a2 = useFeatureContext()) == null ? void 0 : _a2.autoSubscription;
  const handleSubscribe = React98.useCallback(
    (subscribed) => {
      if (trackReference.source && !subscribed && layoutContext && layoutContext.pin.dispatch && isTrackReferencePinned2(trackReference, layoutContext.pin.state)) {
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
  return /* @__PURE__ */ React98.createElement("div", __spreadValues({ ref, style: { position: "relative" } }, elementProps), /* @__PURE__ */ React98.createElement(TrackRefContextIfNeeded, { trackRef: trackReference }, /* @__PURE__ */ React98.createElement(ParticipantContextIfNeeded, { participant: trackReference.participant }, children != null ? children : /* @__PURE__ */ React98.createElement(React98.Fragment, null, ((_b2 = trackReference.publication) == null ? void 0 : _b2.trackName) == "whiteboard" ? /* @__PURE__ */ React98.createElement(WhiteboardTrack, null) : isTrackReference3(trackReference) && (((_c = trackReference.publication) == null ? void 0 : _c.kind) === "video" || trackReference.source === Track6.Source.Camera || trackReference.source === Track6.Source.ScreenShare) ? /* @__PURE__ */ React98.createElement(
    VideoTrack,
    {
      trackRef: trackReference,
      onSubscriptionStatusChanged: handleSubscribe,
      manageSubscription: autoManageSubscription
    }
  ) : isTrackReference3(trackReference) && /* @__PURE__ */ React98.createElement(
    AudioTrack,
    {
      trackRef: trackReference,
      onSubscriptionStatusChanged: handleSubscribe
    }
  ), /* @__PURE__ */ React98.createElement("div", { className: "lk-participant-placeholder" }, imageUrl ? /* @__PURE__ */ React98.createElement("img", { src: imageUrl, alt: "" }) : /* @__PURE__ */ React98.createElement(ParticipantPlaceholder_default, null)), /* @__PURE__ */ React98.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React98.createElement("div", { className: "lk-participant-metadata-item" }, trackReference.source === Track6.Source.Camera ? /* @__PURE__ */ React98.createElement(React98.Fragment, null, isEncrypted && /* @__PURE__ */ React98.createElement(LockLockedIcon_default, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ React98.createElement(
    TrackMutedIndicator,
    {
      trackRef: {
        participant: trackReference.participant,
        source: Track6.Source.Microphone
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
function FocusLayout(_a) {
  var _b = _a, { trackRef } = _b, htmlProps = __objRest(_b, ["trackRef"]);
  return /* @__PURE__ */ React99.createElement(ParticipantTile, __spreadValues({ trackRef }, htmlProps));
}

// src/components/layout/GridLayout.tsx
import * as React103 from "react";

// src/components/TrackLoop.tsx
import * as React100 from "react";
import { getTrackReferenceId as getTrackReferenceId3 } from "@livekit/components-core";
function TrackLoop(_a) {
  var _b = _a, { tracks } = _b, props = __objRest(_b, ["tracks"]);
  return /* @__PURE__ */ React100.createElement(React100.Fragment, null, tracks.map((trackReference) => {
    return /* @__PURE__ */ React100.createElement(
      TrackRefContext.Provider,
      {
        value: trackReference,
        key: getTrackReferenceId3(trackReference)
      },
      cloneSingleChild(props.children)
    );
  }));
}

// src/components/controls/PaginationControl.tsx
import * as React101 from "react";
import { createInteractingObservable } from "@livekit/components-core";
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
      subscription = createInteractingObservable(connectedElement.current, 2e3).subscribe(
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
import * as React102 from "react";
var PaginationIndicator = /* @__PURE__ */ React102.forwardRef(function PaginationIndicator2({ totalPageCount, currentPage }, ref) {
  const bubbles = new Array(totalPageCount).fill("").map((_, index) => {
    if (index + 1 === currentPage) {
      return /* @__PURE__ */ React102.createElement("span", { "data-lk-active": true, key: index });
    } else {
      return /* @__PURE__ */ React102.createElement("span", { key: index });
    }
  });
  return /* @__PURE__ */ React102.createElement("div", { ref, className: "lk-pagination-indicator" }, bubbles);
});

// src/components/layout/GridLayout.tsx
function GridLayout(_a) {
  var _b = _a, { tracks } = _b, props = __objRest(_b, ["tracks"]);
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
import { getScrollBarWidth } from "@livekit/components-core";
import * as React104 from "react";
var MIN_HEIGHT = 130;
var MIN_WIDTH = 140;
var MIN_VISIBLE_TILES = 1;
var ASPECT_RATIO = 16 / 10;
var ASPECT_RATIO_INVERT = (1 - ASPECT_RATIO) * -1;
function CarouselLayout(_a) {
  var _b = _a, { tracks, orientation } = _b, props = __objRest(_b, ["tracks", "orientation"]);
  const asideEl = React104.useRef(null);
  const [prevTiles, setPrevTiles] = React104.useState(0);
  const { width, height } = useSize(asideEl);
  const carouselOrientation = orientation ? orientation : height >= width ? "vertical" : "horizontal";
  const tileSpan = carouselOrientation === "vertical" ? Math.max(width * ASPECT_RATIO_INVERT, MIN_HEIGHT) : Math.max(height * ASPECT_RATIO, MIN_WIDTH);
  const scrollBarWidth = getScrollBarWidth();
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
import { log as log10 } from "@livekit/components-core";
import * as React105 from "react";
function LayoutContextProvider({
  value,
  onPinChange,
  onWidgetChange,
  onWhiteboardChange,
  children
}) {
  const layoutContextValue = useEnsureCreateLayoutContext(value);
  React105.useEffect(() => {
    log10.debug("PinState Updated", { state: layoutContextValue.pin.state });
    if (onPinChange && layoutContextValue.pin.state) onPinChange(layoutContextValue.pin.state);
  }, [layoutContextValue.pin.state, onPinChange]);
  React105.useEffect(() => {
    log10.debug("Chat Widget Updated", { widgetState: layoutContextValue.widget.state });
    if (onWidgetChange && layoutContextValue.widget.state) {
      onWidgetChange(layoutContextValue.widget.state);
    }
  }, [onWidgetChange, layoutContextValue.widget.state]);
  React105.useEffect(() => {
    log10.debug("Whiteboard Updated", { state: layoutContextValue.whiteboard.state });
    if (onWhiteboardChange && layoutContextValue.whiteboard.state) {
      onWhiteboardChange(layoutContextValue.whiteboard.state);
    }
  }, [layoutContextValue.whiteboard.state]);
  return /* @__PURE__ */ React105.createElement(LayoutContext.Provider, { value: layoutContextValue }, children);
}

// src/components/LiveKitRoom.tsx
import * as React106 from "react";
var LiveKitRoom = /* @__PURE__ */ React106.forwardRef(function LiveKitRoom2(props, ref) {
  const { room, htmlProps } = useLiveKitRoom(props);
  return /* @__PURE__ */ React106.createElement("div", __spreadValues({ ref }, htmlProps), room && /* @__PURE__ */ React106.createElement(RoomContext.Provider, { value: room }, /* @__PURE__ */ React106.createElement(LKFeatureContext.Provider, { value: props.featureFlags }, props.children)));
});

// src/components/participant/AudioVisualizer.tsx
import * as React107 from "react";
var AudioVisualizer = /* @__PURE__ */ React107.forwardRef(function AudioVisualizer2(_a, ref) {
  var _b = _a, { trackRef } = _b, props = __objRest(_b, ["trackRef"]);
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
import * as React108 from "react";
function ParticipantLoop(_a) {
  var _b = _a, { participants } = _b, props = __objRest(_b, ["participants"]);
  return /* @__PURE__ */ React108.createElement(React108.Fragment, null, participants.map((participant) => /* @__PURE__ */ React108.createElement(ParticipantContext.Provider, { value: participant, key: participant.identity }, cloneSingleChild(props.children))));
}

// src/components/RoomAudioRenderer.tsx
import { getTrackReferenceId as getTrackReferenceId4, isLocal as isLocal2 } from "@livekit/components-core";
import { Track as Track7 } from "livekit-client";
import * as React109 from "react";
function RoomAudioRenderer({ volume, muted }) {
  const tracks = useTracks(
    [Track7.Source.Microphone, Track7.Source.ScreenShareAudio, Track7.Source.Unknown],
    {
      updateOnlyOn: [],
      onlySubscribed: true
    }
  ).filter((ref) => !isLocal2(ref.participant) && ref.publication.kind === Track7.Kind.Audio);
  return /* @__PURE__ */ React109.createElement("div", { style: { display: "none" } }, tracks.map((trackRef) => /* @__PURE__ */ React109.createElement(
    AudioTrack,
    {
      key: getTrackReferenceId4(trackRef),
      trackRef,
      volume,
      muted
    }
  )));
}

// src/components/RoomName.tsx
import * as React110 from "react";
var RoomName = /* @__PURE__ */ React110.forwardRef(
  function RoomName2(_a, ref) {
    var _b = _a, { childrenPosition = "before", children } = _b, htmlAttributes = __objRest(_b, ["childrenPosition", "children"]);
    const { name } = useRoomInfo();
    return /* @__PURE__ */ React110.createElement("span", __spreadValues({ ref }, htmlAttributes), childrenPosition === "before" && children, name, childrenPosition === "after" && children);
  }
);

// src/components/Toast.tsx
import * as React111 from "react";
function Toast(props) {
  const htmlProps = React111.useMemo(() => mergeProps2(props, { className: "lk-toast" }), [props]);
  return /* @__PURE__ */ React111.createElement("div", __spreadValues({}, htmlProps), props.children);
}

// src/components/participant/ParticipantAudioTile.tsx
import * as React112 from "react";
import { isTrackReference as isTrackReference4 } from "@livekit/components-core";
var ParticipantAudioTile = /* @__PURE__ */ React112.forwardRef(function ParticipantAudioTile2(_a, ref) {
  var _b = _a, {
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
  return /* @__PURE__ */ React112.createElement("div", __spreadValues({ ref, style: { position: "relative" } }, elementProps), /* @__PURE__ */ React112.createElement(TrackRefContext.Provider, { value: trackReference }, children != null ? children : /* @__PURE__ */ React112.createElement(React112.Fragment, null, isTrackReference4(trackReference) && /* @__PURE__ */ React112.createElement(AudioTrack, { trackRef: trackReference }), /* @__PURE__ */ React112.createElement(AudioVisualizer, null), /* @__PURE__ */ React112.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React112.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ React112.createElement(TrackMutedIndicator, { trackRef: trackReference }), /* @__PURE__ */ React112.createElement(ParticipantName, null)), /* @__PURE__ */ React112.createElement(ConnectionQualityIndicator, { className: "lk-participant-metadata-item" })))));
});

// src/components/ConnectionStateToast.tsx
import { ConnectionState as ConnectionState5 } from "livekit-client";
import * as React113 from "react";
function ConnectionStateToast(props) {
  const [notification, setNotification] = React113.useState(void 0);
  const state = useConnectionState(props.room);
  React113.useEffect(() => {
    switch (state) {
      case ConnectionState5.Reconnecting:
        setNotification(
          /* @__PURE__ */ React113.createElement(React113.Fragment, null, /* @__PURE__ */ React113.createElement(SpinnerIcon_default, { className: "lk-spinner" }), " Reconnecting")
        );
        break;
      case ConnectionState5.Connecting:
        setNotification(
          /* @__PURE__ */ React113.createElement(React113.Fragment, null, /* @__PURE__ */ React113.createElement(SpinnerIcon_default, { className: "lk-spinner" }), " Connecting")
        );
        break;
      case ConnectionState5.Disconnected:
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
import { tokenize, createDefaultGrammar } from "@livekit/components-core";
import * as React114 from "react";
var ChatEntry = /* @__PURE__ */ React114.forwardRef(
  function ChatEntry2(_a, ref) {
    var _b = _a, { entry, hideName = false, hideTimestamp = false, messageFormatter } = _b, props = __objRest(_b, ["entry", "hideName", "hideTimestamp", "messageFormatter"]);
    var _a2, _b2, _c, _d;
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
        "data-lk-message-origin": ((_a2 = entry.from) == null ? void 0 : _a2.isLocal) ? "local" : "remote"
      }, props),
      (!hideTimestamp || !hideName || hasBeenEdited) && /* @__PURE__ */ React114.createElement("span", { className: "lk-meta-data" }, !hideName && /* @__PURE__ */ React114.createElement("strong", { className: "lk-participant-name" }, (_d = (_b2 = entry.from) == null ? void 0 : _b2.name) != null ? _d : (_c = entry.from) == null ? void 0 : _c.identity), (!hideTimestamp || hasBeenEdited) && /* @__PURE__ */ React114.createElement("span", { className: "lk-timestamp" }, hasBeenEdited && "edited ", time.toLocaleTimeString(locale, { timeStyle: "short" }))),
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
  return tokenize(message, createDefaultGrammar()).map((tok, i) => {
    if (typeof tok === `string`) {
      const html = nl2br(tok, false);
      return /* @__PURE__ */ React114.createElement("span", { key: i, dangerouslySetInnerHTML: { __html: html } });
    } else {
      const content = tok.content.toString();
      const href = tok.type === `url` ? /^http(s?):\/\//.test(content) ? content : `https://${content}` : `mailto:${content}`;
      return /* @__PURE__ */ React114.createElement("a", { className: "lk-chat-link", key: i, href, target: "_blank", rel: "noreferrer" }, content);
    }
  });
}

// src/prefabs/Chat.tsx
import * as React116 from "react";

// src/prefabs/UserChat.tsx
import * as React115 from "react";
function UserChat(_a) {
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
  var _a2, _b2, _c, _d, _e;
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
      "data-lk-message-origin": ((_a2 = entry.from) == null ? void 0 : _a2.isLocal) ? "local" : "remote"
    }, props),
    /* @__PURE__ */ React115.createElement("div", { className: "chat_box" }, !((_b2 = entry.from) == null ? void 0 : _b2.isLocal) ? /* @__PURE__ */ React115.createElement("span", { className: "lk-meta-data" }, /* @__PURE__ */ React115.createElement("strong", { className: "lk-participant-name tl-participant-name" }, (_e = (_c = entry.from) == null ? void 0 : _c.name) != null ? _e : (_d = entry.from) == null ? void 0 : _d.identity)) : /* @__PURE__ */ React115.createElement(React115.Fragment, null), /* @__PURE__ */ React115.createElement("span", { className: "lk-message-body" }, formattedMessage))
  );
}

// src/prefabs/Chat.tsx
function Chat(_a) {
  var _b = _a, { messageFormatter, messageDecoder, messageEncoder, channelTopic } = _b, props = __objRest(_b, ["messageFormatter", "messageDecoder", "messageEncoder", "channelTopic"]);
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
  function onEnterPress(e) {
    return __async(this, null, function* () {
      if (e.code == "Enter" && e.shiftKey == false) {
        e.stopPropagation();
        yield handleSubmit(e);
      }
    });
  }
  React116.useEffect(() => {
    var _a2;
    if (ulRef) {
      (_a2 = ulRef.current) == null ? void 0 : _a2.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef, chatMessages]);
  React116.useEffect(() => {
    var _a2, _b2, _c;
    if (!layoutContext || chatMessages.length === 0) {
      return;
    }
    if (((_a2 = layoutContext.widget.state) == null ? void 0 : _a2.showChat) == "show_chat" && chatMessages.length > 0 && // lastReadMsgAt.current !== chatMessages[chatMessages.length - 1]?.timestamp
    lastReadMsgAt.current < chatMessages.length) {
      lastReadMsgAt.current = chatMessages.length;
      return;
    }
    const unreadMessageCount = chatMessages.length - lastReadMsgAt.current;
    const { widget } = layoutContext;
    if (unreadMessageCount > 0 && ((_b2 = widget.state) == null ? void 0 : _b2.unreadMessages) !== unreadMessageCount) {
      (_c = widget.dispatch) == null ? void 0 : _c.call(widget, { msg: "unread_msg", count: unreadMessageCount });
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
import {
  createLocalAudioTrack,
  createLocalTracks,
  createLocalVideoTrack,
  facingModeFromLocalTrack as facingModeFromLocalTrack2,
  Track as Track8,
  VideoPresets,
  Mutex
} from "livekit-client";
import * as React119 from "react";

// src/prefabs/MediaDeviceMenu.tsx
import { computeMenuPosition, wasClickOutside } from "@livekit/components-core";
import * as React117 from "react";
import { log as log11 } from "@livekit/components-core";
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
  const [isOpen, setIsOpen] = React117.useState(false);
  const [devices, setDevices] = React117.useState([]);
  const [updateRequired, setUpdateRequired] = React117.useState(true);
  const [needPermissions, setNeedPermissions] = React117.useState(requestPermissions);
  const handleActiveDeviceChange = (kind2, deviceId) => {
    log11.debug("handle device change");
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
      computeMenuPosition(button.current, tooltip.current).then(({ x, y }) => {
        if (tooltip.current) {
          Object.assign(tooltip.current.style, { left: `${x}px`, top: `${y}px` });
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
      if (isOpen && wasClickOutside(tooltip.current, event)) {
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
import { log as log12 } from "@livekit/components-core";

// src/hooks/useWarnAboutMissingStyles.ts
import * as React118 from "react";
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
  const trackLock = React119.useMemo(() => new Mutex(), []);
  React119.useEffect(() => {
    let needsCleanup = false;
    let localTracks = [];
    trackLock.lock().then((unlock) => __async(this, null, function* () {
      try {
        if (options.audio || options.video) {
          localTracks = yield createLocalTracks(options);
          if (needsCleanup) {
            localTracks.forEach((tr) => tr.stop());
          } else {
            setTracks(localTracks);
          }
        }
      } catch (e) {
        if (onError && e instanceof Error) {
          onError(e);
        } else {
          log12.error(e);
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
      const track = kind2 === "videoinput" ? yield createLocalVideoTrack({
        deviceId: deviceId2,
        resolution: VideoPresets.h720.resolution
      }) : yield createLocalAudioTrack({ deviceId: deviceId2 });
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
  const prevDeviceId = React119.useRef(localDeviceId);
  React119.useEffect(() => {
    if (enabled && !localTrack && !deviceError && !isCreatingTrack) {
      log12.debug("creating track", kind);
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
      log12.debug(`muting ${kind} track`);
      localTrack.mute().then(() => log12.debug(localTrack.mediaStreamTrack));
    } else if ((selectedDevice == null ? void 0 : selectedDevice.deviceId) && prevDeviceId.current !== (selectedDevice == null ? void 0 : selectedDevice.deviceId)) {
      log12.debug(`switching ${kind} device from`, prevDeviceId.current, selectedDevice.deviceId);
      switchDevice(localTrack, selectedDevice.deviceId);
    } else {
      log12.debug(`unmuting local ${kind} track`);
      localTrack.unmute();
    }
  }, [localTrack, selectedDevice, enabled, kind]);
  React119.useEffect(() => {
    return () => {
      if (localTrack) {
        log12.debug(`stopping local ${kind} track`);
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
    () => tracks == null ? void 0 : tracks.filter((track) => track.kind === Track8.Kind.Video)[0],
    [tracks]
  );
  const facingMode = React119.useMemo(() => {
    if (videoTrack) {
      const { facingMode: facingMode2 } = facingModeFromLocalTrack2(videoTrack);
      return facingMode2;
    } else {
      return "undefined";
    }
  }, [videoTrack]);
  const audioTrack = React119.useMemo(
    () => tracks == null ? void 0 : tracks.filter((track) => track.kind === Track8.Kind.Audio)[0],
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
      log12.warn("Validation failed with: ", userChoices);
    }
  }
  useWarnAboutMissingStyles();
  return /* @__PURE__ */ React119.createElement("div", __spreadValues({ className: "lk-prejoin" }, htmlProps), /* @__PURE__ */ React119.createElement("div", { className: "lk-video-container" }, videoTrack && /* @__PURE__ */ React119.createElement("video", { ref: videoEl, width: "1280", height: "720", "data-lk-facing-mode": facingMode }), (!videoTrack || !videoEnabled) && /* @__PURE__ */ React119.createElement("div", { className: "lk-camera-off-note" }, /* @__PURE__ */ React119.createElement(ParticipantPlaceholder_default, null))), /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group-container" }, /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group audio" }, /* @__PURE__ */ React119.createElement(
    TrackToggle,
    {
      id: "microphoneButton",
      initialState: audioEnabled,
      source: Track8.Source.Microphone,
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
      onActiveDeviceChange: (_, id) => setAudioDeviceId(id)
    }
  ))), /* @__PURE__ */ React119.createElement("div", { className: "lk-button-group video" }, /* @__PURE__ */ React119.createElement(
    TrackToggle,
    {
      id: "cameraButton",
      initialState: videoEnabled,
      source: Track8.Source.Camera,
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
      onActiveDeviceChange: (_, id) => setVideoDeviceId(id)
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
import { isEqualTrackRef, isTrackReference as isTrackReference5, isWeb, log as log13, setupParticipantName as setupParticipantName3 } from "@livekit/components-core";
import { RoomEvent as RoomEvent3, Track as Track12, TrackPublication } from "livekit-client";
import * as React136 from "react";

// src/prefabs/ControlBar.tsx
import { Track as Track10 } from "livekit-client";
import * as React131 from "react";

// src/prefabs/HostEndMeetingMenu.tsx
import { computeMenuPosition as computeMenuPosition2, setupDisconnectButton as setupDisconnectButton2, wasClickOutside as wasClickOutside2 } from "@livekit/components-core";
import * as React123 from "react";

// src/prefabs/ShareLink.tsx
import * as React122 from "react";
import { setupParticipantName as setupParticipantName2 } from "@livekit/components-core";

// src/prefabs/InviteViaPhone.tsx
import * as React120 from "react";
import Select from "react-select";
function InviteViaPhone(_a) {
  var _b = _a, { link, room_name, participant, isCallScreen } = _b, props = __objRest(_b, ["link", "room_name", "participant", "isCallScreen"]);
  const selectRef = React120.useRef(null);
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
      setSelectedValue({
        value: "+1",
        label: "+1"
      });
    }
  }
  function handleSubmit(event) {
    return __async(this, null, function* () {
      event.preventDefault();
      if (inputRef.current && inputRef.current.value.trim() !== "") {
        const number = selectedValue.value + inputRef.current.value;
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
  const [selectedValue, setSelectedValue] = React120.useState({
    value: "+1",
    label: "+1"
  });
  const handleChange = (event) => {
    setSelectedValue(event);
  };
  const customStyles = {
    container: (provided) => __spreadProps(__spreadValues({}, provided), {
      width: "100%"
    }),
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
  return /* @__PURE__ */ React120.createElement("div", __spreadValues({}, props), showToast ? /* @__PURE__ */ React120.createElement(Toast, { className: "lk-toast-connection-state" }, "Invitation Sent") : /* @__PURE__ */ React120.createElement(React120.Fragment, null), /* @__PURE__ */ React120.createElement("form", { className: "lk-chat-form", style: { display: "flex", alignItems: "center" }, onSubmit: handleSubmit }, /* @__PURE__ */ React120.createElement(
    Select,
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
  ), /* @__PURE__ */ React120.createElement("input", { className: "lk-form-control lk-chat-form-input", type: "tel", ref: inputRef, placeholder: "Enter Mobile Number", pattern: "[0-9]+", title: "Enter valid mobile number", maxLength: 10, minLength: 10 }), /* @__PURE__ */ React120.createElement("button", { type: "submit", className: "lk-button lk-chat-form-button tl-invite-button" }, "Invite")));
}

// src/prefabs/InviteViaEmail.tsx
import * as React121 from "react";
function InviteViaEmail(_a) {
  var _b = _a, { link, room_name, participant, isCallScreen } = _b, props = __objRest(_b, ["link", "room_name", "participant", "isCallScreen"]);
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
  var _a;
  const urlParams = new URLSearchParams(window.location.search);
  return (_a = localStorage.getItem("host")) != null ? _a : urlParams.get("token");
}
function ShareLink(_a) {
  var _b = _a, { isCallScreen } = _b, props = __objRest(_b, ["isCallScreen"]);
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
  const p = useEnsureParticipant(localParticipant);
  const { infoObserver } = React122.useMemo(() => {
    return setupParticipantName2(p);
  }, [p]);
  const { metadata } = useObservableState(infoObserver, {
    name: p.name,
    identity: p.identity,
    metadata: p.metadata
  });
  const meta = metadata ? JSON.parse(metadata) : {};
  const [showInviteUser, setShowInviteUser] = React122.useState(true);
  React122.useEffect(() => {
    if (meta && meta.host && meta.limited) {
      setShowInviteUser(false);
    }
  }, [meta]);
  React122.useEffect(() => {
    const pmeta = p.metadata ? JSON.parse(p.metadata) : {};
    if (pmeta && pmeta.host && meta.limited) {
      setShowInviteUser(false);
    }
  }, [p]);
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
    var _a2;
    if (ulRef) {
      (_a2 = ulRef.current) == null ? void 0 : _a2.scrollTo({ top: ulRef.current.scrollHeight });
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
  )) : /* @__PURE__ */ React122.createElement(React122.Fragment, null), showInviteUser && searched.length > 0 ? /* @__PURE__ */ React122.createElement("ul", { style: { height: "77vh", overflow: "scroll", display: "block" }, className: "lk-list lk-chat-messages", ref: ulRef }, searched.map((user, index) => {
    return /* @__PURE__ */ React122.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React122.createElement("div", { style: { width: "100%" } }, /* @__PURE__ */ React122.createElement("span", { className: "lk-message-body" }, user.full_name), /* @__PURE__ */ React122.createElement("span", { className: "lk-message-body lk-message-text" }, user.designation)), /* @__PURE__ */ React122.createElement("button", { type: "button", onClick: () => handleInvite(user), className: "lk-button lk-chat-form-button" + (user.invited ? " invited" : "") }, user.invited ? "Invited" : "Invite"));
  })) : "") : /* @__PURE__ */ React122.createElement(React122.Fragment, null));
}

// src/prefabs/HostEndMeetingMenu.tsx
function HostEndMeetingMenu(_a) {
  var _b = _a, {
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
  const { disconnect } = setupDisconnectButton2(room);
  const [showDropdown, setShowDropdown] = React123.useState(false);
  const [value, setValue] = React123.useState("");
  const participants = useParticipants();
  const { localParticipant } = useLocalParticipant();
  const remoteParticipants = participants.filter((participant) => participant.identity !== localParticipant.identity);
  const meta = localParticipant.metadata ? JSON.parse(localParticipant.metadata) : {};
  React123.useLayoutEffect(() => {
    if (button.current && tooltip.current && updateRequired) {
      computeMenuPosition2(button.current, tooltip.current).then(({ x, y }) => {
        if (tooltip.current) {
          console.log({ x, y });
          Object.assign(tooltip.current.style, { left: `${x}px`, top: `${y - 5}px` });
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
      if (isOpen && wasClickOutside2(tooltip.current, event)) {
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
  const handleChangeValue = (e) => {
    setValue(e.target.value);
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
import * as React124 from "react";
import { setupUserToggle } from "@livekit/components-core";
function useToggleUserLink({ props }) {
  const { dispatch, state } = useLayoutContext().widget;
  const { className } = React124.useMemo(() => setupUserToggle(), []);
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
import { supportsScreenSharing } from "@livekit/components-core";

// src/prefabs/ExtraOptionMenu.tsx
import { computeMenuPosition as computeMenuPosition3, wasClickOutside as wasClickOutside3 } from "@livekit/components-core";
import * as React127 from "react";

// src/prefabs/BlurIndicater.tsx
import { BackgroundBlur } from "@livekit/track-processors";
import React125 from "react";
function BlurIndicater({ source, parentCallback }) {
  const state = {
    defaultDevices: /* @__PURE__ */ new Map(),
    bitrateInterval: void 0,
    blur: BackgroundBlur(10, { delegate: "GPU" })
  };
  const room = useRoomContext();
  const [isBlur, setIsBlur] = React125.useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = React125.useState(false);
  const track = room == null ? void 0 : room.localParticipant.getTrackPublication(source);
  React125.useEffect(() => {
    if (track == null ? void 0 : track.isMuted) {
      setIsCameraEnabled(false);
    } else {
      setIsCameraEnabled(true);
    }
  }, [track]);
  const toggleBlur = () => __async(this, null, function* () {
    var _a;
    if (!room) return;
    try {
      const camTrack = room.localParticipant.getTrackPublication(source).track;
      if (((_a = camTrack.getProcessor()) == null ? void 0 : _a.name) !== "background-blur") {
        yield camTrack.setProcessor(state.blur);
        setIsBlur(true);
      } else {
        yield camTrack.stopProcessor();
        setIsBlur(false);
      }
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
    } finally {
      parentCallback();
    }
  });
  return /* @__PURE__ */ React125.createElement("button", { className: "tl-blur lk-button", onClick: toggleBlur, disabled: isCameraEnabled }, isBlur ? "Remove Blur" : "Blur Background");
}

// src/prefabs/ExtraOptionMenu.tsx
import { Track as Track9 } from "livekit-client";

// src/prefabs/WhiteboardIndicater.tsx
import React126 from "react";
function WhiteboardIndicater({
  shareScreenTracks,
  parentCallback
}) {
  const room = useRoomContext();
  const { dispatch, state } = useLayoutContext().whiteboard;
  const participant = room.localParticipant;
  const encoder = new TextEncoder();
  const { isWhiteboardHost, isWhiteboardShared } = useWhiteboard();
  const [disableWhiteboard, setDisableWhiteboard] = React126.useState(false);
  const [title, setTitle] = React126.useState("Whiteboard");
  React126.useEffect(() => {
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
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
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
  return /* @__PURE__ */ React126.createElement("button", { disabled: disableWhiteboard, className: "tl-blur lk-button", onClick: toggleWhiteboard }, title);
}

// src/prefabs/ExtraOptionMenu.tsx
function ExtraOptionMenu(_a) {
  var _b = _a, {
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
      computeMenuPosition3(button.current, tooltip.current).then(({ x, y }) => {
        if (tooltip.current) {
          Object.assign(tooltip.current.style, { left: `${x}px`, top: `${y + 5}px` });
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
      if (isOpen && wasClickOutside3(tooltip.current, event)) {
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
    /* @__PURE__ */ React127.createElement("ul", { className: "lk-media-device-select lk-list", style: { display: !showDropdown ? "unset" : "none" } }, /* @__PURE__ */ React127.createElement("li", null, /* @__PURE__ */ React127.createElement(WhiteboardIndicater, { shareScreenTracks, parentCallback: changeState })), blurEnabled && /* @__PURE__ */ React127.createElement("li", null, /* @__PURE__ */ React127.createElement(BlurIndicater, { source: Track9.Source.Camera, parentCallback: changeState }))),
    /* @__PURE__ */ React127.createElement("div", { className: "arrow" }, /* @__PURE__ */ React127.createElement("div", { className: "arrow-shape" }))
  ));
}

// src/components/controls/StartMediaButton.tsx
import * as React128 from "react";
var StartMediaButton = /* @__PURE__ */ React128.forwardRef(function StartMediaButton2(_a, ref) {
  var _b = _a, { label } = _b, props = __objRest(_b, ["label"]);
  const room = useRoomContext();
  const { mergedProps: audioProps, canPlayAudio } = useStartAudio({ room, props });
  const { mergedProps, canPlayVideo } = useStartVideo({ room, props: audioProps });
  const _a2 = mergedProps, { style } = _a2, restProps = __objRest(_a2, ["style"]);
  style.display = canPlayAudio && canPlayVideo ? "none" : "block";
  return /* @__PURE__ */ React128.createElement("button", __spreadValues({ ref, style }, restProps), label != null ? label : `Start ${!canPlayAudio ? "Audio" : "Video"}`);
});

// src/components/controls/SettingsMenuToggle.tsx
import * as React130 from "react";

// src/hooks/useSettingsToggle.ts
import * as React129 from "react";
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
function ControlBar(_a) {
  var _b = _a, {
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
  var _a2, _b2, _c, _d, _e, _f, _g;
  const layoutContext = useMaybeLayoutContext();
  const [isChatOpen, setIsChatOpen] = React131.useState(false);
  const [isShareLinkOpen, setIsShareLinkOpen] = React131.useState(false);
  const [isUserOpen, setIsUserOpen] = React131.useState(false);
  const { state } = useLayoutContext().widget;
  React131.useEffect(() => {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    if (((_a3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _a3.showChat) == "show_chat") {
      setIsChatOpen(((_b3 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _b3.showChat) == "show_chat");
    } else if (((_c2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _c2.showChat) == "show_invite") {
      setIsShareLinkOpen(((_d2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _d2.showChat) == "show_invite");
    } else if (((_e2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _e2.showChat) == "show_users") {
      setIsUserOpen(((_f2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _f2.showChat) == "show_users");
    }
  }, [(_a2 = layoutContext == null ? void 0 : layoutContext.widget.state) == null ? void 0 : _a2.showChat]);
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
    (_c = visibleControls.microphone) != null ? _c : visibleControls.microphone = localPermissions.canPublish;
    (_d = visibleControls.screenShare) != null ? _d : visibleControls.screenShare = localPermissions.canPublish;
    (_e = visibleControls.chat) != null ? _e : visibleControls.chat = localPermissions.canPublishData && (controls == null ? void 0 : controls.chat);
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
  const browserSupportsScreenSharing = supportsScreenSharing();
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
      source: Track10.Source.Microphone,
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
  ))), visibleControls.camera && /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ React131.createElement(TrackToggle, { source: Track10.Source.Camera, showIcon, onChange: cameraOnChange }, showText && "Camera"), /* @__PURE__ */ React131.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ React131.createElement(
    MediaDeviceMenu,
    {
      kind: "videoinput",
      onActiveDeviceChange: (_kind, deviceId) => saveVideoInputDeviceId(deviceId != null ? deviceId : "")
    }
  ))), visibleControls.screenShare && browserSupportsScreenSharing && /* @__PURE__ */ React131.createElement(
    TrackToggle,
    {
      source: Track10.Source.ScreenShare,
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
import * as React134 from "react";

// src/components/participant/ParticipantList.tsx
import * as React132 from "react";
import { Track as Track11 } from "livekit-client";
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
  const trackReference = {
    participant: p,
    source: Track11.Source.Camera
  };
  const { elementProps } = useParticipantTile({
    htmlProps,
    disableSpeakingIndicator,
    onParticipantClick,
    trackRef: trackReference
  });
  return /* @__PURE__ */ React132.createElement("div", __spreadValues({ style: { position: "relative" } }, elementProps), /* @__PURE__ */ React132.createElement(ParticipantContextIfNeeded, { participant: p }, children != null ? children : /* @__PURE__ */ React132.createElement(React132.Fragment, null, /* @__PURE__ */ React132.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ React132.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ React132.createElement(ParticipantName, null)), /* @__PURE__ */ React132.createElement("div", { className: "display-flex" }, /* @__PURE__ */ React132.createElement(
    TrackMutedIndicator,
    {
      trackRef: {
        participant: p,
        source: Track11.Source.Microphone
      },
      show: "always"
    }
  ), /* @__PURE__ */ React132.createElement(
    TrackMutedIndicator,
    {
      trackRef: {
        participant: p,
        source: Track11.Source.Camera
      },
      show: "always"
    }
  ))))));
};

// src/components/ToggleSwitch.tsx
import React133 from "react";
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
    if (e.keyCode !== 32) return;
    e.preventDefault();
    onChange(!checked);
  }
  return /* @__PURE__ */ React133.createElement("div", { className: "toggle-switch" + (small ? " small-switch" : "") }, /* @__PURE__ */ React133.createElement(
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
  ), id ? /* @__PURE__ */ React133.createElement(
    "label",
    {
      className: "toggle-switch-label",
      tabIndex: disabled ? -1 : 1,
      onKeyDown: (e) => handleKeyPress(e),
      htmlFor: id
    },
    /* @__PURE__ */ React133.createElement(
      "span",
      {
        className: disabled ? "toggle-switch-inner toggle-switch-disabled" : "toggle-switch-inner",
        "data-yes": optionLabels[0],
        "data-no": optionLabels[1],
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ React133.createElement(
      "span",
      {
        className: disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch",
        tabIndex: -1
      }
    )
  ) : null);
};

// src/prefabs/Users.tsx
function Users(_a) {
  var _b = _a, { onWaitingRoomChange } = _b, props = __objRest(_b, ["onWaitingRoomChange"]);
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
import * as React135 from "react";
import Select2 from "react-select";
function CallUser(_a) {
  var _b = _a, {
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
  var _a2;
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
    value: "+1",
    label: "+1"
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
  const invitedOnCall = queryParams.get("invited");
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
      const sortedContacts = originalContacts.sort((a, b) => {
        const nameA = a.full_name.toLowerCase();
        const nameB = b.full_name.toLowerCase();
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
  const handleSearch = (e) => {
    var _a3;
    e.preventDefault();
    const searchTerm2 = (((_a3 = inputRef.current) == null ? void 0 : _a3.value) || "").toLowerCase().trim();
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
  }, [CHAT_SERVER_URL]);
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
  const searchTerm = (((_a2 = inputRef.current) == null ? void 0 : _a2.value) || "").toLowerCase().trim();
  const filteredParticipants = searchTerm ? ParticipatedContacts.filter(
    (item) => item.full_name.toLowerCase().includes(searchTerm) || item.designation && item.designation.toLowerCase().includes(searchTerm)
  ) : ParticipatedContacts;
  const sendInvite = (e) => __async(this, null, function* () {
    e.preventDefault();
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
        Select2,
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
          onChange: (e) => setMobile(e.target.value),
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
          onChange: (e) => setEmail(e.target.value),
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
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email2).toLowerCase());
  };
  return /* @__PURE__ */ React135.createElement(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: "lk-chat lk-users"
    }),
    /* @__PURE__ */ React135.createElement("div", { style: { height: "-webkit-fill-available" } }, /* @__PURE__ */ React135.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React135.createElement("div", { style: { position: "sticky", top: 0, zIndex: 1 } }, /* @__PURE__ */ React135.createElement(
      "div",
      {
        className: "tl-invite-buttons"
      },
      /* @__PURE__ */ React135.createElement(
        "button",
        {
          type: "button",
          className: "lk-button lk-chat-form-button",
          "aria-pressed": activeTab === "callParticipants",
          onClick: () => handleTabChange("callParticipants")
        },
        "Participants"
      ),
      !invitedOnCall && /* @__PURE__ */ React135.createElement(
        "button",
        {
          type: "button",
          className: "lk-button lk-chat-form-button",
          "aria-pressed": activeTab === "contacts",
          onClick: () => handleTabChange("contacts")
        },
        "Contacts"
      ),
      /* @__PURE__ */ React135.createElement(
        "button",
        {
          type: "button",
          className: "lk-button lk-chat-form-button",
          "aria-pressed": activeTab === "invite",
          onClick: () => handleTabChange("invite")
        },
        "Invite"
      )
    ), activeTab != "invite" && /* @__PURE__ */ React135.createElement(
      "form",
      {
        className: "lk-chat-form",
        onSubmit: (e) => e.preventDefault()
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
    ))), /* @__PURE__ */ React135.createElement("div", { className: "lk-chat-form", style: { display: "flex", alignItems: "center" } }, renderInputField(), /* @__PURE__ */ React135.createElement(
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
    )))))), activeTab == "contacts" && /* @__PURE__ */ React135.createElement("ul", { style: { height: "77vh", overflow: "scroll", display: "block" }, className: "lk-list lk-chat-messages", ref: ulRef }, filteredContacts.map((user, index) => {
      return /* @__PURE__ */ React135.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React135.createElement("div", { style: { width: "100%" } }, /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body text-ellipsis" }, user.full_name), /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body lk-message-text text-ellipsis" }, user.designation), /* @__PURE__ */ React135.createElement(
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
    })), activeTab == "callParticipants" && /* @__PURE__ */ React135.createElement("ul", { style: { height: "77vh", overflow: "scroll", display: "block" }, className: "lk-list lk-chat-messages", ref: ulRef2 }, filteredParticipants.map((user, index) => {
      return /* @__PURE__ */ React135.createElement("li", { key: index, className: "lk-chat-entry" }, /* @__PURE__ */ React135.createElement("div", { style: { width: "100%", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body text-ellipsis" }, user.full_name, " ", room.localParticipant.identity == user.user_id ? " (me)" : ""), /* @__PURE__ */ React135.createElement("span", { className: "lk-message-body lk-message-text text-ellipsis" }, user.designation ? user.designation : "-")));
    })))
  );
}

// src/prefabs/VideoConference.tsx
function VideoConference(_a) {
  var _b = _a, {
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
  var _a2, _b2;
  const [widgetState, setWidgetState] = React136.useState({
    showChat: null,
    unreadMessages: 0,
    showSettings: false
  });
  const lastAutoFocusedScreenShareTrack = React136.useRef(null);
  const { localParticipant } = useLocalParticipant();
  const p = useEnsureParticipant(localParticipant);
  const { infoObserver } = React136.useMemo(() => {
    return setupParticipantName3(p);
  }, [p]);
  const { metadata } = useObservableState(infoObserver, {
    name: p.name,
    identity: p.identity,
    metadata: p.metadata
  });
  const [showShareButton, setShowShareButton] = React136.useState(showShareLink);
  const [showParticipantButton, setShowParticipantButton] = React136.useState(showParticipant);
  const [leaveButton, setLeaveButton] = React136.useState("Leave");
  const [endForAll, setEndForAll] = React136.useState(false);
  const meta = metadata ? JSON.parse(metadata) : {};
  const [waitingRoomCount, setWaitingRoomCount] = React136.useState(0);
  const tracks = useTracks(
    [
      { source: Track12.Source.Camera, withPlaceholder: true },
      { source: Track12.Source.ScreenShare, withPlaceholder: false }
    ],
    { updateOnlyOn: [RoomEvent3.ActiveSpeakersChanged], onlySubscribed: false }
  );
  const widgetUpdate = (state) => {
    log13.debug("updating widget state", state);
    setWidgetState(state);
    console.log(widgetState);
  };
  const updateCount = (count) => {
    log13.debug("count ", count);
    setWaitingRoomCount(count);
  };
  const layoutContext = useCreateLayoutContext();
  const screenShareTracks = tracks.filter(isTrackReference5).filter((track) => track.publication.source === Track12.Source.ScreenShare);
  const whitePub = new TrackPublication(Track12.Kind.Unknown, "whiteboard", "whiteboard");
  const whiteboardTrack = {
    participant: p,
    publication: whitePub,
    source: Track12.Source.Unknown
  };
  const focusTrack = (_a2 = usePinnedTracks(layoutContext)) == null ? void 0 : _a2[0];
  const carouselTracks = tracks.filter((track) => !isEqualTrackRef(track, focusTrack));
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
    const pmeta = p.metadata ? JSON.parse(p.metadata) : {};
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
  }, [p]);
  React136.useEffect(() => {
    var _a3, _b3, _c, _d;
    if (screenShareTracks.some((track) => track.publication.isSubscribed) && lastAutoFocusedScreenShareTrack.current === null) {
      log13.debug("Auto set screen share focus:", { newScreenShareTrack: screenShareTracks[0] });
      (_b3 = (_a3 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a3, { msg: "set_pin", trackReference: screenShareTracks[0] });
      lastAutoFocusedScreenShareTrack.current = screenShareTracks[0];
    } else if (lastAutoFocusedScreenShareTrack.current && !screenShareTracks.some(
      (track) => {
        var _a4, _b4;
        return track.publication.trackSid === ((_b4 = (_a4 = lastAutoFocusedScreenShareTrack.current) == null ? void 0 : _a4.publication) == null ? void 0 : _b4.trackSid);
      }
    )) {
      log13.debug("Auto clearing screen share focus.");
      (_d = (_c = layoutContext.pin).dispatch) == null ? void 0 : _d.call(_c, { msg: "clear_pin" });
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
    var _a3, _b3, _c, _d;
    log13.debug("updating widget state", state);
    if (state.show_whiteboard) {
      (_b3 = (_a3 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a3, { msg: "set_pin", trackReference: whiteboardTrack });
    } else {
      (_d = (_c = layoutContext.pin).dispatch) == null ? void 0 : _d.call(_c, { msg: "clear_pin" });
    }
  };
  React136.useEffect(() => {
    var _a3, _b3, _c, _d, _e, _f, _g, _h;
    if (isWhiteboardShared) {
      (_b3 = (_a3 = layoutContext.pin).dispatch) == null ? void 0 : _b3.call(_a3, { msg: "set_pin", trackReference: whiteboardTrack });
      (_d = (_c = layoutContext.whiteboard).dispatch) == null ? void 0 : _d.call(_c, { msg: "show_whiteboard" });
    } else {
      (_f = (_e = layoutContext.pin).dispatch) == null ? void 0 : _f.call(_e, { msg: "clear_pin" });
      (_h = (_g = layoutContext.whiteboard).dispatch) == null ? void 0 : _h.call(_g, { msg: "hide_whiteboard" });
    }
  }, [isWhiteboardShared]);
  const [isWhiteboard, setIsWhiteboard] = React136.useState(false);
  room.on(RoomEvent3.DataReceived, (payload) => {
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
  return /* @__PURE__ */ React136.createElement("div", __spreadValues({ className: "lk-video-conference" }, props), isWeb() && /* @__PURE__ */ React136.createElement(
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
import * as React137 from "react";
import { Track as Track13 } from "livekit-client";
function AudioConference(_a) {
  var props = __objRest(_a, []);
  const [widgetState, setWidgetState] = React137.useState({
    showChat: null,
    unreadMessages: 0
  });
  const audioTracks = useTracks([Track13.Source.Microphone]);
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
import { setLogLevel, setLogExtension, isTrackReference as isTrackReference6 } from "@livekit/components-core";
export {
  AudioConference,
  AudioTrack,
  AudioVisualizer,
  CameraDisabledIcon_default as CameraDisabledIcon,
  CameraIcon_default as CameraIcon,
  CarouselLayout,
  Chat,
  ChatCloseIcon_default as ChatCloseIcon,
  ChatEntry,
  ChatIcon_default as ChatIcon,
  ChatToggle,
  Chevron_default as Chevron,
  ClearPinButton,
  ConnectionQualityIndicator,
  ConnectionState3 as ConnectionState,
  ConnectionStateToast,
  ControlBar,
  DisconnectButton,
  FocusLayout,
  FocusLayoutContainer,
  FocusToggle,
  FocusToggleIcon_default as FocusToggleIcon,
  GearIcon_default as GearIcon,
  GridLayout,
  LKFeatureContext,
  LayoutContext,
  LayoutContextProvider,
  LeaveIcon_default as LeaveIcon,
  LiveKitRoom,
  LockLockedIcon_default as LockLockedIcon,
  MediaDeviceMenu,
  MediaDeviceSelect,
  MicDisabledIcon_default as MicDisabledIcon,
  MicIcon_default as MicIcon,
  ParticipantAudioTile,
  ParticipantContext,
  ParticipantContextIfNeeded,
  ParticipantLoop,
  ParticipantName,
  ParticipantPlaceholder_default as ParticipantPlaceholder,
  ParticipantTile,
  PreJoin,
  QualityExcellentIcon_default as QualityExcellentIcon,
  QualityGoodIcon_default as QualityGoodIcon,
  QualityPoorIcon_default as QualityPoorIcon,
  QualityUnknownIcon_default as QualityUnknownIcon,
  RoomAudioRenderer,
  RoomContext,
  RoomName,
  ScreenShareIcon_default as ScreenShareIcon,
  ScreenShareStopIcon_default as ScreenShareStopIcon,
  ShareLinkToggle,
  SpinnerIcon_default as SpinnerIcon,
  StartAudio,
  Toast,
  TrackLoop,
  TrackMutedIndicator,
  TrackRefContext,
  TrackToggle,
  UnfocusToggleIcon_default as UnfocusToggleIcon,
  VideoConference,
  VideoTrack,
  formatChatMessageLinks,
  isTrackReference6 as isTrackReference,
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
};
//# sourceMappingURL=index.mjs.map