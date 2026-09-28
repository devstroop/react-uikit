import { jsx as s, jsxs as C, Fragment as $e } from "react/jsx-runtime";
import { forwardRef as He, useId as Be, isValidElement as mt, cloneElement as js, useState as X, useRef as ee, useCallback as R, useMemo as xe, useContext as fn, createContext as Pn, useEffect as ge, Fragment as Ts, useLayoutEffect as Cs, Children as ns, useImperativeHandle as Ls } from "react";
function Ln(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const qr = "_button_1anap_1", Fr = "_filled_1anap_36", Hr = "_flat_1anap_55", Kr = "_outlined_1anap_58", Ur = "_text_1anap_63", Wr = "_loading_1anap_504", Xr = "_spinner_1anap_507", Vr = "_xs_1anap_523", Gr = "_sm_1anap_529", Yr = "_md_1anap_535", Zr = "_lg_1anap_541", Jr = "_xl_1anap_547", Qr = "_iconOnly_1anap_553", eo = "_fullWidth_1anap_583", Yt = {
  button: qr,
  filled: Fr,
  flat: Hr,
  outlined: Kr,
  text: Ur,
  "style-primary": "_style-primary_1anap_82",
  "style-secondary": "_style-secondary_1anap_101",
  "style-base": "_style-base_1anap_119",
  "style-light": "_style-light_1anap_139",
  "style-dark": "_style-dark_1anap_157",
  "style-danger": "_style-danger_1anap_176",
  "style-success": "_style-success_1anap_195",
  "style-warning": "_style-warning_1anap_214",
  "style-info": "_style-info_1anap_233",
  "shade-lighter": "_shade-lighter_1anap_416",
  "shade-light": "_shade-light_1anap_416",
  "shade-dark": "_shade-dark_1anap_426",
  "shade-darker": "_shade-darker_1anap_430",
  loading: Wr,
  spinner: Xr,
  "dx-spin": "_dx-spin_1anap_1",
  xs: Vr,
  sm: Gr,
  md: Yr,
  lg: Zr,
  xl: Jr,
  iconOnly: Qr,
  fullWidth: eo
};
function to(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const vs = He(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: a = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: i = !1,
      loading: c = !1,
      visible: u = !0,
      className: f,
      disabled: k,
      children: b,
      ...w
    } = t;
    if (u === !1) return null;
    const x = to(r, l), _ = x.style === "light" || x.style === "dark" ? null : Ln(a), p = [
      Yt.button,
      Yt[x.variant],
      Yt[`style-${x.style}`],
      _ ? Yt[_] : null,
      Yt[d],
      o ? Yt.fullWidth : null,
      i ? Yt.iconOnly : null,
      c ? Yt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ C($e, { children: [
      c ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Yt.spinner }) : null,
      b
    ] }), $ = t.href;
    if ($ != null) {
      const { onClick: v, ...O } = w, j = k || c;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: $,
          className: p,
          "aria-disabled": j || void 0,
          "aria-busy": c || void 0,
          onClick: (D) => {
            if (j) {
              D.preventDefault();
              return;
            }
            v?.(D);
          },
          ...O,
          children: y
        }
      );
    }
    const { type: m = "button", ...M } = w;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: m,
        className: p,
        disabled: k || c,
        "aria-busy": c || void 0,
        ...M,
        children: y
      }
    );
  }
), no = "_card_16nyh_1", so = "_elevated_16nyh_8", ro = "_filled_16nyh_13", oo = "_outlined_16nyh_18", lo = "_interactive_16nyh_22", ao = "_text_16nyh_30", io = "_header_16nyh_46", co = "_body_16nyh_53", uo = "_footer_16nyh_63", Bn = {
  card: no,
  elevated: so,
  filled: ro,
  outlined: oo,
  interactive: lo,
  text: ao,
  header: io,
  body: co,
  footer: uo
}, Uv = He(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: a = !0,
  children: d,
  onKeyDown: o,
  ...i
}, c) {
  if (a === !1) return null;
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ C(
      "div",
      {
        ref: c,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          o?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
        },
        className: [Bn.card, Bn[t], l].filter(Boolean).join(" "),
        ...i,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: Bn.header, children: n }),
          /* @__PURE__ */ s("div", { className: Bn.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: Bn.footer, children: r })
        ]
      }
    )
  );
});
function Ps(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const fo = "_badge_154mm_1", _o = "_xs_154mm_21", po = "_sm_154mm_26", ho = "_md_154mm_31", mo = "_lg_154mm_36", go = "_xl_154mm_41", xo = "_neutral_154mm_47", yo = "_primary_154mm_52", bo = "_secondary_154mm_61", vo = "_light_154mm_66", ko = "_base_154mm_71", wo = "_dark_154mm_76", $o = "_info_154mm_81", No = "_success_154mm_86", Oo = "_warning_154mm_95", So = "_danger_154mm_104", Co = "_filled_154mm_111", Do = "_outlined_154mm_161", Mo = "_text_154mm_213", qn = {
  badge: fo,
  xs: _o,
  sm: po,
  md: ho,
  lg: mo,
  xl: go,
  neutral: xo,
  primary: yo,
  secondary: bo,
  light: vo,
  base: ko,
  dark: wo,
  info: $o,
  success: No,
  warning: Oo,
  danger: So,
  filled: Co,
  outlined: Do,
  text: Mo,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, Wv = He(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: a,
  visible: d = !0,
  children: o,
  ...i
}, c) {
  if (d === !1) return null;
  const u = t, f = Ps(n, "filled"), k = Ln(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: [
        qn.badge,
        qn[l],
        qn[u],
        qn[f],
        k ? qn[k] : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}), zo = "_xs_2a6lm_2", Eo = "_sm_2a6lm_7", Io = "_md_2a6lm_1", Ao = "_lg_2a6lm_17", jo = "_xl_2a6lm_22", To = {
  xs: zo,
  sm: Eo,
  md: Io,
  lg: Ao,
  xl: jo
}, Xv = [
  "check",
  "close",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "search",
  "plus",
  "minus",
  "alert",
  "info",
  "arrow-right",
  "arrow-left",
  "external-link",
  "copy",
  "trash",
  "edit",
  "settings",
  "user",
  "users",
  "download",
  "upload",
  "menu",
  "more-horizontal",
  "mail",
  "lock",
  "eye",
  "eye-off",
  "refresh",
  "calendar",
  "clock",
  "check-circle",
  "x-circle",
  "shield",
  "globe",
  "file",
  "folder",
  "home",
  "key",
  "link",
  "star",
  "star-outline",
  "ban"
], Lo = {
  check: /* @__PURE__ */ s("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ s("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ s("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ s("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ s("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ s("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ s("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ s("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ s("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ s("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ s("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ s("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ s("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ s("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ s("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ s("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ s("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ s("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ s("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ s("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ s("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ s("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ s(
    "path",
    {
      fill: "currentColor",
      stroke: "none",
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
    }
  ),
  "star-outline": /* @__PURE__ */ s("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, we = He(function({ name: t, size: n = "md", strokeWidth: r = 2, className: l, ...a }, d) {
  const o = typeof n == "string";
  return /* @__PURE__ */ s(
    "svg",
    {
      ref: d,
      className: [o ? To[n] : null, l].filter(Boolean).join(" "),
      width: o ? void 0 : n,
      height: o ? void 0 : n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: r,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...a,
      children: Lo[t]
    }
  );
}), Po = "_stat_sjin9_1", Ro = "_label_sjin9_8", Bo = "_row_sjin9_16", qo = "_value_sjin9_22", Fo = "_delta_sjin9_28", Ho = "_success_sjin9_33", Ko = "_danger_sjin9_37", Uo = "_neutral_sjin9_41", Wo = "_hint_sjin9_45", mn = {
  stat: Po,
  label: Ro,
  row: Bo,
  value: qo,
  delta: Fo,
  success: Ho,
  danger: Ko,
  neutral: Uo,
  hint: Wo
}, Vv = He(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: a, className: d, ...o }, i) {
  return /* @__PURE__ */ C(
    "div",
    {
      ref: i,
      className: [mn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: mn.label, children: t }),
        /* @__PURE__ */ C("div", { className: mn.row, children: [
          /* @__PURE__ */ s("div", { className: mn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [mn.delta, mn[l]].join(" "), children: r })
        ] }),
        a != null && /* @__PURE__ */ s("div", { className: mn.hint, children: a })
      ]
    }
  );
}), Xo = "_wrap_1nflq_1", Vo = "_table_1nflq_8", Go = "_caption_1nflq_14", Yo = "_none_1nflq_51", Zo = "_horizontal_1nflq_57", Jo = "_vertical_1nflq_67", Qo = "_alternating_1nflq_85", el = "_start_1nflq_89", tl = "_center_1nflq_93", nl = "_end_1nflq_97", sl = "_empty_1nflq_101", on = {
  wrap: Xo,
  table: Vo,
  caption: Go,
  none: Yo,
  horizontal: Zo,
  vertical: Jo,
  alternating: Qo,
  start: el,
  center: tl,
  end: nl,
  empty: sl
};
function Gv({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: a = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: i = !0
}) {
  if (i === !1) return null;
  const c = a === "default" || a === "both" ? "" : on[a];
  return /* @__PURE__ */ C("div", { className: [on.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C(
      "table",
      {
        className: [
          on.table,
          c,
          d ? on.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ s("caption", { className: on.caption, children: l }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
            "th",
            {
              className: u.align != null ? on[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((u) => /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "td",
            {
              className: f.align != null ? on[f.align] : void 0,
              children: f.render != null ? f.render(u) : u[f.key]
            },
            f.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: on.empty, children: r })
  ] });
}
const rl = "_emptyState_1swxw_1", ol = "_icon_1swxw_13", ll = "_title_1swxw_18", al = "_description_1swxw_24", il = "_action_1swxw_30", Fn = {
  emptyState: rl,
  icon: ol,
  title: ll,
  description: al,
  action: il
};
function Yv({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: a = !0
}) {
  return a === !1 ? null : /* @__PURE__ */ C("div", { className: [Fn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Fn.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Fn.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Fn.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Fn.action, children: r })
  ] });
}
const cl = "_field_149oz_1", dl = "_label_149oz_8", ul = "_required_149oz_14", fl = "_hint_149oz_19", _l = "_error_149oz_24", Hn = {
  field: cl,
  label: dl,
  required: ul,
  hint: fl,
  error: _l
};
function Zv({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: a,
  children: d,
  className: o,
  visible: i = !0
}) {
  const c = r ?? l, u = Be(), f = Be(), k = Be();
  if (i === !1) return null;
  const b = a != null ? f : c != null ? k : null, w = typeof d == "function" ? d({ inputId: u, hintId: k, errorId: f }) : d, x = mt(w) && typeof w.props.id == "string" ? w.props.id : void 0, g = x ?? t ?? u, _ = mt(w) && (b != null || x == null && typeof w.type == "string"), p = x != null || t != null || _, y = _ && mt(w) ? js(w, {
    id: g,
    "aria-describedby": b != null ? [
      w.props["aria-describedby"],
      b
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : w.props["aria-describedby"],
    "aria-invalid": a != null ? !0 : w.props["aria-invalid"]
  }) : w;
  return /* @__PURE__ */ C("div", { className: [Hn.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ C(
      "label",
      {
        className: Hn.label,
        htmlFor: p ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: Hn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    a != null ? /* @__PURE__ */ s("div", { id: f, className: Hn.error, "aria-live": "polite", children: a }) : c != null ? /* @__PURE__ */ s("div", { id: k, className: Hn.hint, children: c }) : null
  ] });
}
const pl = "_formfield_1kmwl_1", hl = "_content_1kmwl_8", ml = "_floating_1kmwl_43", gl = "_label_1kmwl_111", xl = "_start_1kmwl_132", yl = "_required_1kmwl_169", bl = "_end_1kmwl_175", vl = "_filled_1kmwl_192", kl = "_flat_1kmwl_199", wl = "_helper_1kmwl_206", $l = "_invalid_1kmwl_211", Ht = {
  formfield: pl,
  content: hl,
  floating: ml,
  label: gl,
  start: xl,
  required: yl,
  end: bl,
  filled: vl,
  flat: kl,
  helper: wl,
  invalid: $l
};
function Jv({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: a = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: i = !1,
  children: c,
  className: u,
  visible: f = !0
}) {
  const k = Be(), b = Be();
  if (f === !1) return null;
  const w = l ?? k, x = typeof c == "function" ? c({
    inputId: w
  }) : c, g = mt(x) ? x.type : null, _ = typeof g == "string", p = mt(x) && typeof g != "symbol", y = mt(x) ? x.props : null, $ = typeof y?.id == "string" ? y.id : void 0, m = _ && mt(x) ? x.type.toLowerCase() : null, M = m != null && (m === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : m === "button" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea"), v = p && (r != null || o || $ == null && M), O = $ != null || l != null || v, j = m === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, D = m === "textarea" || m === "input" && (j == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(j)), A = v && mt(x) ? js(
    x,
    {
      id: $ ?? w,
      ...a && D && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          b
        ].filter((h) => typeof h == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : x, N = e != null ? /* @__PURE__ */ C(
    "label",
    {
      className: Ht.label,
      htmlFor: O ? $ ?? w : void 0,
      children: [
        e,
        i === !0 && /* @__PURE__ */ s("span", { className: Ht.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        Ht.formfield,
        Ht[d],
        a ? Ht.floating : null,
        o ? Ht.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        a ? null : N,
        /* @__PURE__ */ C("div", { className: Ht.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: Ht.start, children: t }),
          A,
          a ? N : null,
          n != null && /* @__PURE__ */ s("div", { className: Ht.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: b, className: Ht.helper, children: r })
      ]
    }
  );
}
const Nl = "_fieldset_18z6t_1", Ol = "_legend_18z6t_11", Sl = "_legendText_18z6t_20", Cl = "_toggle_18z6t_24", Dl = "_content_18z6t_45", Ml = "_summary_18z6t_49", gn = {
  fieldset: Nl,
  legend: Ol,
  legendText: Sl,
  toggle: Cl,
  content: Dl,
  summary: Ml
};
function Qv({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: a,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: i,
  collapseTitle: c,
  expandAriaLabel: u,
  collapseAriaLabel: f,
  onExpand: k,
  onCollapse: b,
  children: w,
  className: x,
  visible: g = !0
}) {
  const _ = Be(), [p, y] = X(d);
  if (g === !1) return null;
  const $ = a ?? p, m = l ? `${_}-content` : void 0, M = () => {
    const N = !$;
    a === void 0 && y(N), N ? b?.() : k?.();
  }, v = l || e != null || n != null || t != null, O = l ? $ : !1, j = l && $ && o != null, D = O ? i ?? "Expand" : c ?? "Collapse", A = O ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ C(
    "fieldset",
    {
      className: [gn.fieldset, x].filter(Boolean).join(" "),
      children: [
        v ? /* @__PURE__ */ s("legend", { className: gn.legend, children: l ? /* @__PURE__ */ C($e, { children: [
          /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              className: gn.toggle,
              title: D,
              "aria-label": e == null ? A : void 0,
              "aria-expanded": !O,
              "aria-controls": m,
              onClick: M,
              children: [
                /* @__PURE__ */ s(
                  we,
                  {
                    name: O ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(
                  we,
                  {
                    name: n,
                    "aria-hidden": "true",
                    ...r != null ? { style: { color: r } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ s("span", { className: gn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ C($e, { children: [
          n != null && /* @__PURE__ */ s(
            we,
            {
              name: n,
              "aria-hidden": "true",
              ...r != null ? { style: { color: r } } : {}
            }
          ),
          e != null && /* @__PURE__ */ s("span", { className: gn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: gn.content,
            id: m,
            hidden: O,
            children: w
          }
        ),
        j ? /* @__PURE__ */ s("div", { className: gn.summary, children: o }) : null
      ]
    }
  );
}
const zl = "_form_19k3s_1", El = {
  form: zl
}, kr = Pn(null);
function Il() {
  const e = fn(kr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function ek({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: a,
  className: d
}) {
  const [o, i] = X({}), [c, u] = X(0), f = ee(o);
  f.current = o;
  const k = R((y) => {
    i(
      ($) => $[y.name] === y ? $ : { ...$, [y.name]: y }
    );
  }, []), b = R((y) => {
    i(($) => {
      if (!(y in $)) return $;
      const m = { ...$ };
      return delete m[y], m;
    });
  }, []), w = R(() => {
    const y = {};
    for (const $ of Object.values(f.current)) {
      const m = $.validate();
      m.length > 0 && (y[$.name] = m);
    }
    return y;
  }, []), x = R(() => {
    const y = w();
    u(($) => $ + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [w, e, t, n]), g = (y) => {
    r != null && l != null || (y.preventDefault(), x());
  }, _ = xe(
    () => ({ registerField: k, unregisterField: b, submit: x, submitCount: c }),
    [k, b, x, c]
  ), p = [El.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(kr.Provider, { value: _, children: /* @__PURE__ */ s(
    "form",
    {
      className: p,
      onSubmit: g,
      action: r,
      method: l,
      noValidate: !0,
      children: a
    }
  ) });
}
const $n = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", tk = (e = "Required") => (t) => $n(t) ? e : null, nk = (e = "Invalid email") => (t) => $n(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, sk = (e, t = "Invalid format") => (n) => $n(n) || e.test(String(n)) ? null : t, rk = (e, t = `Minimum ${e} characters`) => (n) => $n(n) || String(n).length >= e ? null : t, ok = (e, t = `Maximum ${e} characters`) => (n) => $n(n) || String(n).length <= e ? null : t, lk = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if ($n(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, ak = (e, t = "Values do not match") => (n, r) => {
  if ($n(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, ik = (e = "Required") => (t) => t === !0 ? null : e, ck = (e) => (t, n) => e(t, n);
function Al(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function dk(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Il(), [a, d] = X(t?.initialValue), [o, i] = X(!1), [c, u] = X(!1), f = ee(() => []);
  f.current = () => Al(t?.validate ?? [], a), ge(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]), ge(() => {
    l > 0 && (i(!0), u(!1));
  }, [l]);
  const k = o && !c ? f.current() : [];
  return { value: a, setValue: (w) => {
    d(w), u(!0);
  }, errors: k };
}
const jl = "_select_1vjst_1", Tl = "_invalid_1vjst_33", Ll = "_xs_1vjst_40", Pl = "_sm_1vjst_48", Rl = "_md_1vjst_56", Bl = "_lg_1vjst_62", ql = "_xl_1vjst_68", ks = {
  select: jl,
  invalid: Tl,
  xs: Ll,
  sm: Pl,
  md: Rl,
  lg: Bl,
  xl: ql
}, Tn = He(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: a, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          ks.select,
          ks[t],
          n ? ks.invalid : null,
          a
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((i) => /* @__PURE__ */ s(
          "option",
          {
            value: i.value,
            disabled: i.disabled,
            children: i.label
          },
          i.value
        )) : l
      }
    );
  }
), wr = [
  "Equals",
  "NotEquals",
  "LessThan",
  "LessThanOrEquals",
  "GreaterThan",
  "GreaterThanOrEquals",
  "Contains",
  "StartsWith",
  "EndsWith",
  "DoesNotContain",
  "In",
  "NotIn",
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty",
  "Custom"
], Kn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Fl = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Hl(e) {
  return Fl.includes(e);
}
function hs(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function Ks(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function es(e, t) {
  const n = Ks(e), r = Ks(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), a = String(r ?? "");
  return l < a ? -1 : l > a ? 1 : 0;
}
function ys(e) {
  if (e.secondOperator == null) return !1;
  if (Hl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Us(e, t, n) {
  const r = hs(t, e.property), l = Ws(
    r,
    e.value,
    e.operator,
    n
  );
  if (!ys(e)) return l;
  const a = Ws(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && a : l || a;
}
function Ws(e, t, n, r) {
  const l = r === "CaseInsensitive", a = (i) => l && typeof i == "string" ? i.toLowerCase() : i, d = a(e), o = a(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((i) => a(i) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((i) => a(i) === o));
    case "LessThan":
      return es(d, o) < 0;
    case "LessThanOrEquals":
      return es(d, o) <= 0;
    case "GreaterThan":
      return es(d, o) > 0;
    case "GreaterThanOrEquals":
      return es(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((i) => a(i) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((i) => a(i) === d);
    case "IsNull":
      return e == null;
    case "IsNotNull":
      return e != null;
    case "IsEmpty":
      return e == null || e === "";
    case "IsNotEmpty":
      return e != null && e !== "";
    case "Custom":
      return typeof t == "function" ? !!t(e) : !0;
    default:
      return !1;
  }
}
function Rs(e) {
  return "filters" in e;
}
function $r(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Rs(t)) {
    if (t.filters.length === 0) return !0;
    const a = t.operator ?? r;
    return t.filters[a === "Or" ? "some" : "every"](
      (d) => $r(e, d, { logicalOperator: a, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", Us(t, e, l);
}
function Nr(e, t, n = {}) {
  return e.filter((r) => $r(r, t, n));
}
function Kl(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function St(e) {
  return typeof e == "string" ? `"${Kl(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(St).join(", ")}]` : `"${String(e)}"`;
}
function Ul(e) {
  const t = (l, a) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${St(a)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${St(a)})`;
      case "LessThan":
        return `${e.property}.LessThan(${St(a)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${St(a)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${St(a)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${St(a)})`;
      case "Contains":
        return `${e.property}.Contains(${St(a)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${St(a)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${St(a)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${St(a)})`;
      case "In":
        return `${e.property}.In(${St(a)})`;
      case "NotIn":
        return `!${e.property}.In(${St(a)})`;
      case "IsNull":
        return `${e.property} == null`;
      case "IsNotNull":
        return `${e.property} != null`;
      case "IsEmpty":
        return `${e.property} == ""`;
      case "IsNotEmpty":
        return `${e.property} != ""`;
      case "Custom":
        return `${e.property}.Custom()`;
      default:
        return "";
    }
  };
  if (!ys(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function Wl(e) {
  return Rs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Wl).filter(Boolean).join(` ${e.operator} `)})` : Ul(e);
}
function Xl(e) {
  return e.replace(/'/g, "''");
}
const Vl = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Gl(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, a = (c) => typeof c == "string" ? `'${Xl(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, u) => {
    const f = typeof u == "string", k = f && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${Vl[c]} ${f && r ? l(a(u)) : a(u)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(a(u))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(a(u))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(a(u))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(a(u))}))`;
      case "In":
        return Array.isArray(u) ? `${k} in (${u.map((b) => a(b)).join(", ")})` : `${k} in (${a(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${k} in (${u.map((b) => a(b)).join(", ")}))` : `not(${k} in (${a(u)}))`;
      case "IsNull":
        return `${n} eq null`;
      case "IsNotNull":
        return `${n} ne null`;
      case "IsEmpty":
        return `${n} eq ''`;
      case "IsNotEmpty":
        return `${n} ne ''`;
      case "Custom":
        return `${n} custom`;
      default:
        return "";
    }
  };
  if (!ys(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", i = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    i,
    e.secondValue
  )})`;
}
function Yl(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Rs(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Yl(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Gl(e, n);
}
function Zl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const a = l.sortOrder === "Ascending" ? 1 : -1, d = es(
        hs(n, l.property),
        hs(r, l.property)
      );
      if (d !== 0) return d * a;
    }
    return 0;
  });
}
const Jl = "_filter_1h8zc_1", Ql = "_rows_1h8zc_9", ea = "_row_1h8zc_9", ta = "_join_1h8zc_21", na = "_property_1h8zc_30", sa = "_operator_1h8zc_34", ra = "_value_1h8zc_38", oa = "_remove_1h8zc_42", la = "_bar_1h8zc_58", aa = "_add_1h8zc_64", ia = "_custom_1h8zc_78", ca = "_summary_1h8zc_82", da = "_second_1h8zc_87", ua = "_secondAdd_1h8zc_91", fa = "_addSecond_1h8zc_95", _a = "_joinSelect_1h8zc_109", Je = {
  filter: Jl,
  rows: Ql,
  row: ea,
  join: ta,
  property: na,
  operator: sa,
  value: ra,
  remove: oa,
  bar: la,
  add: aa,
  custom: ia,
  summary: ca,
  second: da,
  secondAdd: ua,
  addSecond: fa,
  joinSelect: _a
}, Un = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Xs = {
  Equals: "Equals",
  NotEquals: "Not equals",
  LessThan: "Less than",
  LessThanOrEquals: "Less than or equals",
  GreaterThan: "Greater than",
  GreaterThanOrEquals: "Greater than or equals",
  Contains: "Contains",
  StartsWith: "Starts with",
  EndsWith: "Ends with",
  DoesNotContain: "Does not contain",
  In: "In",
  NotIn: "Not in",
  IsNull: "Is null",
  IsEmpty: "Is empty",
  IsNotNull: "Is not null",
  IsNotEmpty: "Is not empty",
  Custom: "Custom"
};
function Vs({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s($e, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      Tn,
      {
        "aria-label": e.title ?? e.name,
        className: Je.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (a) => n(a.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ s(
      Tn,
      {
        "aria-label": e.title ?? e.name,
        className: Je.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (a) => {
          a.target.value === "" ? n(void 0) : n(a.target.value === "true");
        }
      }
    );
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Je.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (a) => n(
        r === "number" && a.target.value !== "" ? Number(a.target.value) : a.target.value
      )
    }
  );
}
function uk({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: a,
  viewChanged: d,
  items: o,
  children: i
}) {
  const [c, u] = X(
    () => r != null && r.length > 0 ? r.map((_, p) => ({ id: p, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Kn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (_, p) => {
    u(
      (y) => y.map(($) => $.id === _ ? { ...$, ...p } : $)
    );
  }, k = () => {
    const _ = c[c.length - 1], p = Math.max(0, ...c.map(($) => $.id)) + 1, y = e[0];
    u(($) => [
      ...$,
      {
        id: p,
        property: _?.property ?? y?.name ?? "",
        operator: Kn[e.find(
          (m) => m.name === (_?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (_) => {
    u(
      (p) => p.length > 1 ? p.filter((y) => y.id !== _) : p
    );
  }, w = xe(() => {
    const _ = [];
    for (const p of c) {
      if (p.property === "" || (p.value == null || p.value === "") && !Un.includes(p.operator)) continue;
      const $ = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: m } = p;
      m != null && ys(p) && ($.secondOperator = m, $.secondValue = p.secondValue, $.logicalOperator = p.logicalOperator ?? "And"), _.push($);
    }
    return _;
  }, [c]), x = xe(() => o == null || w.length === 0 ? o : Nr(o, {
    operator: t,
    filters: w
  }, {
    caseSensitivity: n
  }), [o, w, t, n]);
  ge(() => {
    d != null && o != null && d(x ?? []);
  }, [x]);
  const g = (_) => e.find((p) => p.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ C("div", { className: [Je.filter, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: Je.rows, role: "group", "aria-label": "Filter conditions", children: c.map((_, p) => {
      const y = g(_.property), $ = l ? [Kn[y.type ?? "string"]] : wr, m = !Un.includes(_.operator), M = _.secondOperator != null;
      return /* @__PURE__ */ C(Ts, { children: [
        /* @__PURE__ */ C("div", { className: Je.row, children: [
          p > 0 ? /* @__PURE__ */ s("span", { className: Je.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            Tn,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: Je.property,
              value: _.property,
              onChange: (v) => {
                const O = e.find(
                  (j) => j.name === v.target.value
                );
                f(_.id, {
                  property: v.target.value,
                  operator: Kn[O?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((v) => ({
                value: v.name,
                label: v.title ?? v.name
              }))
            }
          ),
          /* @__PURE__ */ s(
            Tn,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: Je.operator,
              value: _.operator,
              onChange: (v) => {
                const O = v.target.value;
                f(
                  _.id,
                  Un.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: $.map((v) => ({
                value: v,
                label: Xs[v]
              }))
            }
          ),
          m ? /* @__PURE__ */ s(
            Vs,
            {
              property: y,
              value: _.value,
              onChange: (v) => f(_.id, { value: v })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Je.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => b(_.id),
              children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
            }
          )
        ] }),
        m ? M ? /* @__PURE__ */ C(
          "div",
          {
            className: [Je.row, Je.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                Tn,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: Je.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (v) => f(_.id, {
                    logicalOperator: v.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                Tn,
                {
                  "aria-label": `Condition ${p + 1} second operator`,
                  className: Je.operator,
                  value: _.secondOperator,
                  onChange: (v) => {
                    const O = v.target.value;
                    f(
                      _.id,
                      Un.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: $.map((v) => ({
                    value: v,
                    label: Xs[v]
                  }))
                }
              ),
              _.secondOperator == null || !Un.includes(_.secondOperator) ? /* @__PURE__ */ s(
                Vs,
                {
                  property: y,
                  value: _.secondValue,
                  onChange: (v) => f(_.id, { secondValue: v })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Je.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => f(_.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ s("div", { className: Je.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Je.addSecond,
            onClick: () => f(_.id, {
              secondOperator: Kn[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ C("div", { className: Je.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: Je.add, onClick: k, children: "Add filter" }),
      i != null ? /* @__PURE__ */ s("div", { className: Je.custom, children: i }) : null,
      o != null ? /* @__PURE__ */ C("span", { className: Je.summary, "aria-live": "polite", children: [
        x?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const pa = "_pager_4cpp0_1", ha = "_alignLeft_4cpp0_10", ma = "_alignCenter_4cpp0_14", ga = "_alignRight_4cpp0_18", xa = "_alignJustify_4cpp0_22", ya = "_summary_4cpp0_26", ba = "_controls_4cpp0_31", va = "_button_4cpp0_37", ka = "_active_4cpp0_73", wa = "_ellipsis_4cpp0_85", $a = "_size_4cpp0_91", pt = {
  pager: pa,
  alignLeft: ha,
  alignCenter: ma,
  alignRight: ga,
  alignJustify: xa,
  summary: ya,
  controls: ba,
  button: va,
  active: ka,
  ellipsis: wa,
  size: $a
};
function Na(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Gs(e, t) {
  return e.replace("{0}", String(t));
}
function Oa(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, i) => i + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const a = Math.min(t, l + n - 1);
  l = Math.max(1, a - n + 1);
  const d = [];
  for (let o = l; o <= a; o++) d.push(o);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), a < t - 1 && d.push("ellipsis"), a < t && d.push(t), d;
}
function Sa({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: a = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: i,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: f,
  pageSizeText: k = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: w = "Previous page",
  nextPageTitle: x = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: y,
  onPageSizeChange: $,
  ariaLabel: m = "Pagination",
  className: M,
  visible: v = !0
}) {
  const O = n ?? r, [j, D] = X(O), A = n !== void 0, N = A ? O : j, h = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, N), h), L = i ?? !0, z = d || h > 1, I = Oa(S, h, a), T = R(
    (W) => {
      const te = Math.min(Math.max(1, W), h);
      A || D(te);
      const re = (te - 1) * t;
      y?.({
        page: te,
        skip: re,
        top: t,
        pageCount: h,
        pageSize: t
      });
    },
    [A, y, h, t]
  ), H = o === "center" ? pt.alignCenter : o === "right" ? pt.alignRight : o === "justify" ? pt.alignJustify : pt.alignLeft, Y = {
    count: e,
    pageNumber: S,
    pageSize: t,
    pageCount: h
  }, G = (W) => {
    const te = Array.from(
      W.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), re = te.indexOf(document.activeElement);
    re !== -1 && (W.key === "ArrowRight" || W.key === "ArrowDown" ? (W.preventDefault(), (te[re + 1] ?? te[0])?.focus()) : W.key === "ArrowLeft" || W.key === "ArrowUp" ? (W.preventDefault(), (te[re - 1] ?? te[te.length - 1])?.focus()) : W.key === "Home" ? (W.preventDefault(), te[0]?.focus()) : W.key === "End" && (W.preventDefault(), te[te.length - 1]?.focus()));
  };
  return v === !1 || !z ? null : /* @__PURE__ */ C(
    "nav",
    {
      className: [pt.pager, H, M].filter(Boolean).join(" "),
      "aria-label": m,
      children: [
        L && /* @__PURE__ */ s("span", { className: pt.summary, "aria-live": "polite", children: f ? f(Y) : Na(u, S, h, e) }),
        /* @__PURE__ */ C(
          "div",
          {
            className: pt.controls,
            role: "group",
            "aria-label": m,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: pt.button,
                  disabled: S <= 1,
                  onClick: () => T(1),
                  "aria-label": b,
                  title: b,
                  children: "«"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: pt.button,
                  disabled: S <= 1,
                  onClick: () => T(S - 1),
                  "aria-label": w,
                  title: w,
                  children: "‹"
                }
              ),
              I.map(
                (W, te) => W === "ellipsis" ? /* @__PURE__ */ s("span", { className: pt.ellipsis, "aria-hidden": "true", children: "…" }, `e${te}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": W,
                    className: [pt.button, W === S ? pt.active : ""].filter(Boolean).join(" "),
                    "aria-current": W === S ? "page" : void 0,
                    "aria-label": Gs(p, W),
                    title: Gs(_, W),
                    onClick: () => T(W),
                    children: W
                  },
                  W
                )
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: pt.button,
                  disabled: S >= h,
                  onClick: () => T(S + 1),
                  "aria-label": x,
                  title: x,
                  children: "›"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: pt.button,
                  disabled: S >= h,
                  onClick: () => T(h),
                  "aria-label": g,
                  title: g,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ C("label", { className: pt.size, children: [
          /* @__PURE__ */ s("span", { children: k }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (W) => $?.(Number(W.target.value)),
              "aria-label": k,
              children: l.map((W) => /* @__PURE__ */ s("option", { value: W, children: W }, W))
            }
          )
        ] })
      ]
    }
  );
}
function Ds(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...a } = e;
  return /* @__PURE__ */ s(
    Sa,
    {
      page: t,
      showPagingSummary: l,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: r ? (o) => r({
        count: o.count,
        pageNumber: o.pageNumber,
        pageSize: o.pageSize
      }) : void 0,
      onPageChange: n ? (o) => n(o.page) : void 0,
      ...a
    }
  );
}
const Or = "";
function Ca(e, t, n, r, l) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const a = (o) => n.find((i) => i.property === o), d = (o, i, c) => {
    const u = t[i];
    if (u === void 0)
      return o.map((x) => ({ type: "row", row: x }));
    const f = a(u), k = /* @__PURE__ */ new Map(), b = [];
    o.forEach((x) => {
      const g = String(l(x, u) ?? ""), _ = k.get(g);
      _ ? _.push(x) : (k.set(g, [x]), b.push(g));
    });
    const w = [];
    return b.forEach((x) => {
      const g = k.get(x), _ = [...c, x].join(Or), p = g[0], y = p !== void 0 ? l(p, u) : void 0;
      w.push({
        type: "group",
        group: {
          key: _,
          display: ms(y, f?.format),
          property: u,
          title: f?.title ?? u,
          count: g.length,
          level: i
        }
      }), r.has(_) && w.push(...d(g, i + 1, [...c, x]));
    }), w;
  };
  return d(e, 0, []);
}
function Ys(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (a, d, o) => {
    const i = t[d];
    if (i === void 0 || a.length === 0) return;
    const c = /* @__PURE__ */ new Map(), u = [];
    a.forEach((f) => {
      const k = String(n(f, i) ?? ""), b = c.get(k);
      b ? b.push(f) : (c.set(k, [f]), u.push(k));
    }), u.forEach((f) => {
      const k = [...o, f].join(Or);
      r.add(k), l(c.get(f), d + 1, [...o, f]);
    });
  };
  return l(e, 0, []), r;
}
function rs(e, t) {
  return e.property ?? `col-${t}`;
}
function Da(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: a }) => {
    if (!a.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? a.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Ma(e, t) {
  if (e !== void 0)
    switch (t) {
      case "number": {
        const n = Number(e);
        return Number.isNaN(n) ? e : n;
      }
      case "date": {
        const n = new Date(e);
        return Number.isNaN(n.getTime()) ? e : n;
      }
      case "boolean":
        return e === "true" ? !0 : e === "false" ? !1 : e;
      default:
        return e;
    }
}
function wn(e, t) {
  if (t != null)
    return hs(e, t);
}
function ms(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Zs = [
  "Ascending",
  "Descending",
  null
];
function za(e, t, n = {}) {
  const r = e.find((a) => a.property === t), l = Zs[(r ? Zs.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((a) => a.property !== t) : n.multi ? [
    ...e.filter((a) => a.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Ea(e, t) {
  return Zl(e, t);
}
function Ia(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), a = (l - 1) * n;
  return {
    items: e.slice(a, a + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Aa(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, i]) => ({
      property: o,
      operator: i.operator ?? "Contains",
      value: Ma(
        i.value,
        n.types?.[o] ?? "string"
      )
    })
  ), l = r.length > 0 ? Nr(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, a = Ea(l, t.sorts);
  return {
    ...Ia(a, t.pageNumber, t.pageSize),
    filtered: a,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Js(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function ja(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const a = n(l, t.property);
    if (a == null || a === "") return;
    const d = Number(a);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, a) => l + a, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, a) => l + a, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Ta(e, t, n = wn) {
  const r = (a) => /["\r\n,]/.test(a) ? `"${a.replace(/"/g, '""')}"` : a, l = [
    t.map((a) => r(a.title ?? a.property ?? "")).join(",")
  ];
  return e.forEach((a) => {
    l.push(
      t.map((d) => r(ms(n(a, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const La = "_grid_gf8ma_1", Pa = "_toolbar_gf8ma_8", Ra = "_picker_gf8ma_13", Ba = "_pickerButton_gf8ma_17", qa = "_pickerPanel_gf8ma_31", Fa = "_pickerItem_gf8ma_46", Ha = "_groupPanel_gf8ma_55", Ka = "_groupPanelActive_gf8ma_66", Ua = "_groupPanelText_gf8ma_70", Wa = "_groupChip_gf8ma_74", Xa = "_groupRemove_gf8ma_85", Va = "_groupRow_gf8ma_94", Ga = "_groupCell_gf8ma_98", Ya = "_groupToggle_gf8ma_103", Za = "_editRow_gf8ma_116", Ja = "_editCell_gf8ma_120", Qa = "_editInput_gf8ma_125", ei = "_commandCell_gf8ma_135", ti = "_commandButton_gf8ma_141", ni = "_data_gf8ma_156", si = "_table_gf8ma_163", ri = "_header_gf8ma_169", oi = "_center_gf8ma_181", li = "_right_gf8ma_185", ai = "_sortButton_gf8ma_189", ii = "_sortIndicator_gf8ma_207", ci = "_sortIndex_gf8ma_211", di = "_cell_gf8ma_222", ui = "_clickable_gf8ma_236", fi = "_frozen_gf8ma_244", _i = "_selected_gf8ma_250", pi = "_resizeHandle_gf8ma_258", hi = "_filterCell_gf8ma_276", mi = "_filterSelect_gf8ma_284", gi = "_filterInput_gf8ma_294", xi = "_empty_gf8ma_305", yi = "_loading_gf8ma_311", bi = "_visuallyHidden_gf8ma_325", vi = "_virtualScroller_gf8ma_334", ki = "_spacerRow_gf8ma_339", wi = "_footerRow_gf8ma_344", $i = "_footerCell_gf8ma_348", Ni = "_footerValue_gf8ma_355", he = {
  grid: La,
  toolbar: Pa,
  picker: Ra,
  pickerButton: Ba,
  pickerPanel: qa,
  pickerItem: Fa,
  groupPanel: Ha,
  groupPanelActive: Ka,
  groupPanelText: Ua,
  groupChip: Wa,
  groupRemove: Xa,
  groupRow: Va,
  groupCell: Ga,
  groupToggle: Ya,
  editRow: Za,
  editCell: Ja,
  editInput: Qa,
  commandCell: ei,
  commandButton: ti,
  data: ni,
  table: si,
  header: ri,
  center: oi,
  right: li,
  sortButton: ai,
  sortIndicator: ii,
  sortIndex: ci,
  cell: di,
  clickable: ui,
  frozen: fi,
  selected: _i,
  resizeHandle: pi,
  filterCell: hi,
  filterSelect: mi,
  filterInput: gi,
  empty: xi,
  loading: yi,
  visuallyHidden: bi,
  virtualScroller: vi,
  spacerRow: ki,
  footerRow: wi,
  footerCell: $i,
  footerValue: Ni
}, Oi = {
  Ascending: "ascending",
  Descending: "descending"
};
function Qs(e, t) {
  return e.filterable ?? t;
}
function Si(e, t) {
  return e.sortable ?? t;
}
function Ci(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function fk({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: a = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: c = !1,
  pageSize: u = 10,
  pageSizeOptions: f,
  pageNumbersCount: k = 5,
  pagerPosition: b = "Bottom",
  showPagingSummary: w = !0,
  showPageSizeSelector: x = !0,
  selectionMode: g = "None",
  selectedKeys: _,
  onSelectionChange: p,
  showColumnPicker: y = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: M = !1,
  allowGrouping: v = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: j = !0,
  aggregates: D,
  showExportButton: A = !1,
  exportFileName: N = "grid-data",
  serverMode: h = !1,
  totalCount: S,
  onRangeChange: L,
  virtualize: z = !1,
  virtualRowHeight: I = 40,
  virtualHeight: T = 480,
  editMode: H = "None",
  allowRowCreate: Y = !1,
  onRowUpdate: G,
  onRowCreate: W,
  onRowDelete: te,
  isLoading: re = !1,
  empty: ne = "No records found",
  ariaLabel: q,
  className: ie,
  onRowClick: J
}) {
  const [oe, ce] = X([]), [ye, Oe] = X(
    /* @__PURE__ */ new Map()
  ), [Ie, ke] = X(1), [Ae, De] = X(u), [et, Qe] = X(
    () => e.map((P, B) => rs(P, B))
  ), [Pe, gt] = X(
    () => new Set(
      e.map((P, B) => P.visible !== !1 ? rs(P, B) : "").filter(Boolean)
    )
  ), [tt, wt] = X({}), [V, E] = X(!1), [F, le] = X([]), [_e, se] = X(
    null
  ), [be, ze] = X(null), [Re, Ge] = X({}), [ut, _n] = X(0), [Q, Ce] = X(T), nt = ee(null), Mt = ee(null), $t = xe(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((B, ue) => P.set(rs(B, ue), B)), P;
  }, [e]), Ne = xe(
    () => et.filter((P) => Pe.has(P)).map((P) => ({ key: P, column: $t.get(P) })).filter(
      (P) => P.column != null
    ),
    [et, Pe, $t]
  ), Ke = xe(
    () => Da(Ne, tt),
    [Ne, tt]
  ), ot = H !== "None" || te != null || Y, Ue = xe(() => {
    if (h) {
      const P = S ?? t.length, B = Math.max(1, Math.ceil(P / Ae));
      return {
        items: [...t],
        filtered: [...t],
        total: P,
        pageCount: B,
        pageNumber: Ie,
        pageSize: Ae,
        sorts: oe,
        filters: ye
      };
    }
    return Aa(
      t,
      {
        sorts: oe,
        filters: ye,
        pageNumber: Ie,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? Ae : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: i,
        caseSensitivity: o,
        types: Object.fromEntries(
          e.filter((P) => P.type != null && P.property != null).map((P) => [
            P.property,
            P.type
          ])
        )
      }
    );
  }, [
    t,
    oe,
    ye,
    Ie,
    Ae,
    i,
    o,
    e,
    h,
    S,
    c
  ]), Gt = ee(L);
  ge(() => {
    Gt.current = L;
  });
  const U = xe(
    () => [...ye.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, B]) => ({
      property: P,
      operator: B.operator ?? Js(
        e.find((ue) => ue.property === P)?.type ?? "string"
      ),
      value: B.value ?? ""
    })),
    [ye, e]
  );
  ge(() => {
    !h || Gt.current == null || Gt.current({
      start: (Ie - 1) * Ae,
      count: Ae,
      pageNumber: Ie,
      pageSize: Ae,
      sorts: oe,
      filters: U,
      logicalOperator: i
    });
  }, [
    h,
    Ie,
    Ae,
    oe,
    U,
    i
  ]);
  const de = xe(() => new Set(F), [F]), Te = xe(() => _e || (j ? Ys(Ue.items, F, wn) : /* @__PURE__ */ new Set()), [_e, j, Ue.items, F]), qe = xe(
    () => Ca(Ue.items, F, e, Te, wn),
    [Ue.items, F, e, Te]
  ), lt = xe(
    () => F.length > 0 ? Ne.filter(
      (P) => P.column.property == null || !de.has(P.column.property)
    ) : Ne,
    [Ne, F, de]
  ), At = (P) => {
    P !== "" && ce(za(oe, P, { multi: l }));
  }, K = (P, B) => {
    Oe((ue) => {
      const fe = new Map(ue);
      return fe.set(P, B), fe;
    }), ke(1);
  }, Z = (P) => {
    De(P), ke(1);
  }, ae = (P) => {
    if (g === "None") return;
    const B = n(P), ue = _ ?? [];
    let fe;
    g === "Single" ? fe = ue.length === 1 && ue[0] === B ? [] : [B] : fe = ue.includes(B) ? ue.filter((Fe) => Fe !== B) : [...ue, B], p?.(fe);
  }, me = (P) => {
    J?.(P);
  }, pe = (P, B, ue) => {
    nt.current = { key: P, startX: B, startWidth: ue };
  }, ve = (P) => {
    const B = nt.current;
    if (!B) return;
    const ue = P - B.startX, fe = Math.max(48, B.startWidth + ue);
    wt((Fe) => ({ ...Fe, [B.key]: `${fe}px` }));
  }, je = () => {
    nt.current = null;
  }, Ee = (P) => {
    Mt.current = P;
  }, Ye = (P) => {
    const B = Mt.current;
    Mt.current = null, !(!B || B === P) && Qe((ue) => {
      const fe = [...ue], Fe = fe.indexOf(B), Tt = fe.indexOf(P);
      return Fe < 0 || Tt < 0 ? ue : (fe.splice(Fe, 1), fe.splice(Tt, 0, B), fe);
    });
  }, st = (P) => {
    gt((B) => {
      const ue = new Set(B);
      return ue.has(P) ? ue.delete(P) : ue.add(P), ue;
    });
  }, ft = () => {
    const P = Mt.current;
    if (Mt.current = null, !P || !v) return;
    const ue = $t.get(P)?.property;
    ue && (le(
      (fe) => fe.includes(ue) ? fe : [...fe, ue]
    ), se(null));
  }, rt = (P) => {
    le((B) => B.filter((ue) => ue !== P)), se(null);
  }, Ze = (P) => {
    se((B) => {
      const ue = B ?? (j ? Ys(Ue.items, F, wn) : /* @__PURE__ */ new Set()), fe = new Set(ue);
      return fe.has(P) ? fe.delete(P) : fe.add(P), fe;
    });
  }, Bt = (P) => {
    const B = {};
    e.forEach((ue) => {
      ue.property && (B[ue.property] = wn(P, ue.property));
    }), Ge(B), ze(String(n(P)));
  }, jt = () => {
    const P = {};
    e.forEach((B) => {
      B.property && B.type === "boolean" && (P[B.property] = !1);
    }), Ge(P), ze("__new__");
  }, qt = () => {
    ze(null), Ge({});
  }, ss = (P) => {
    if (be === "__new__") {
      const B = Object.fromEntries(
        e.filter((ue) => ue.property).map((ue) => [ue.property, Re[ue.property]])
      );
      W?.(B);
    } else if (P != null) {
      const B = { ...P, ...Re };
      G?.(P, B);
    }
    qt();
  }, Rn = c && (b === "Top" || b === "TopAndBottom"), pn = c && (b === "Bottom" || b === "TopAndBottom"), Tr = d && e.some((P) => Qs(P, d)), Lr = (P, B, ue) => P.render ? P.render(B, { index: 0 }) : ms(wn(B, P.property), P.format), Pr = (P) => {
    const B = [he.cell];
    return P.align === "center" && B.push(he.center), P.align === "right" && B.push(he.right), P.frozen && B.push(he.frozen), B.join(" ");
  }, Fs = h ? t : Ue.filtered, Rr = () => {
    const P = Ta(
      Fs,
      lt.map((Fe) => Fe.column)
    ), B = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ue = URL.createObjectURL(B), fe = document.createElement("a");
    fe.href = ue, fe.download = `${N}.csv`, document.body.appendChild(fe), fe.click(), fe.remove(), URL.revokeObjectURL(ue);
  }, Nn = qe.length, hn = xe(() => {
    if (!z || Nn === 0)
      return { start: 0, end: Nn, top: 0, bottom: 0 };
    const P = 5, B = Math.max(
      0,
      Math.floor(ut / I) - P
    ), ue = Math.ceil(Q / I) + P * 2, fe = Math.min(Nn, B + ue), Fe = B * I, Tt = Math.max(0, (Nn - fe) * I);
    return { start: B, end: fe, top: Fe, bottom: Tt };
  }, [z, Nn, ut, I, Q]), bs = lt.length + (ot ? 1 : 0);
  return /* @__PURE__ */ C("div", { className: [he.grid, ie].filter(Boolean).join(" "), children: [
    Rn && /* @__PURE__ */ s(
      Ds,
      {
        pageNumber: Ue.pageNumber,
        pageSize: Ue.pageSize,
        count: Ue.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: w,
        showPageSizeSelector: x,
        ariaLabel: pn ? "Pagination (top)" : "Pagination",
        onPageChange: ke,
        onPageSizeChange: Z
      }
    ),
    (v || Y || y || A) && /* @__PURE__ */ C("div", { className: he.toolbar, children: [
      v && /* @__PURE__ */ s(
        "div",
        {
          className: [
            he.groupPanel,
            F.length > 0 ? he.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: v ? (P) => P.preventDefault() : void 0,
          onDrop: v ? ft : void 0,
          children: F.length > 0 ? F.map((P) => {
            const B = e.find((ue) => ue.property === P)?.title ?? P;
            return /* @__PURE__ */ C("span", { className: he.groupChip, children: [
              B,
              ":",
              " ",
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: he.groupRemove,
                  onClick: () => rt(P),
                  "aria-label": `Remove group by ${B}`,
                  children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
                }
              )
            ] }, P);
          }) : /* @__PURE__ */ s("span", { className: he.groupPanelText, children: O })
        }
      ),
      Y && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: he.pickerButton,
          onClick: jt,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ C("div", { className: he.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: he.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": V,
            onClick: () => E((P) => !P),
            children: $
          }
        ),
        V && /* @__PURE__ */ s(
          "div",
          {
            className: he.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((P, B) => {
              const ue = rs(P, B);
              return /* @__PURE__ */ C("label", { className: he.pickerItem, children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: Pe.has(ue),
                    onChange: () => st(ue)
                  }
                ),
                P.title ?? P.property
              ] }, ue);
            })
          }
        )
      ] }),
      A && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: he.pickerButton,
          onClick: Rr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ C(
      "div",
      {
        className: [he.data, z ? he.virtualScroller : ""].filter(Boolean).join(" "),
        style: z ? { maxHeight: T } : void 0,
        onScroll: z ? (P) => {
          _n(P.currentTarget.scrollTop), Ce(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ C(
            "table",
            {
              className: he.table,
              role: "grid",
              "aria-rowcount": (z ? Nn : Ue.total) + 1,
              "aria-label": q,
              "aria-busy": re || void 0,
              children: [
                /* @__PURE__ */ C("colgroup", { children: [
                  lt.map(({ key: P, column: B }) => /* @__PURE__ */ s(
                    "col",
                    {
                      style: {
                        width: tt[P] ?? B.width,
                        minWidth: B.minWidth,
                        maxWidth: B.maxWidth
                      }
                    },
                    P
                  )),
                  ot && /* @__PURE__ */ s("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ C("thead", { children: [
                  /* @__PURE__ */ C("tr", { children: [
                    lt.map(({ key: P, column: B }) => {
                      const ue = Si(B, r), fe = oe.find((_t) => _t.property === B.property), Fe = fe ? oe.indexOf(fe) + 1 : 0, Tt = B.align ?? "left";
                      return /* @__PURE__ */ C(
                        "th",
                        {
                          "aria-sort": ue && fe ? Oi[fe.sortOrder] : "none",
                          className: [
                            he.header,
                            Tt === "center" ? he.center : "",
                            Tt === "right" ? he.right : "",
                            B.frozen ? he.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: B.frozen ? { left: Ke[P] } : void 0,
                          scope: "col",
                          draggable: M || v || void 0,
                          onDragStart: M || v ? (_t) => {
                            _t.dataTransfer && (_t.dataTransfer.effectAllowed = "move"), Ee(P);
                          } : void 0,
                          onDragOver: M ? (_t) => _t.preventDefault() : void 0,
                          onDrop: M ? () => Ye(P) : void 0,
                          children: [
                            ue ? /* @__PURE__ */ C(
                              "button",
                              {
                                type: "button",
                                className: he.sortButton,
                                onClick: () => B.property != null && At(B.property),
                                "aria-label": fe ? fe.sortOrder === "Ascending" ? `Sort ${B.title ?? B.property} descending` : `Sort ${B.title ?? B.property} ascending` : `Sort ${B.title ?? B.property} ascending`,
                                children: [
                                  B.title ?? B.property,
                                  fe && /* @__PURE__ */ s(
                                    "span",
                                    {
                                      className: he.sortIndicator,
                                      "aria-hidden": "true",
                                      children: fe.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  Fe > 1 && a && /* @__PURE__ */ s("span", { className: he.sortIndex, children: Fe })
                                ]
                              }
                            ) : B.title ?? B.property,
                            m && /* @__PURE__ */ s(
                              "span",
                              {
                                className: he.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${B.title ?? B.property}`,
                                onMouseDown: (_t) => {
                                  _t.preventDefault(), _t.stopPropagation();
                                  const On = tt[P] ?? B.width, Ft = On ? parseFloat(On) : 96;
                                  pe(
                                    P,
                                    _t.clientX,
                                    Number.isFinite(Ft) ? Ft : 96
                                  );
                                },
                                onMouseMove: (_t) => {
                                  nt.current?.key === P && ve(_t.clientX);
                                },
                                onMouseUp: je,
                                onMouseLeave: () => {
                                  nt.current?.key === P && je();
                                }
                              }
                            )
                          ]
                        },
                        P
                      );
                    }),
                    ot && /* @__PURE__ */ s("th", { className: he.header, scope: "col", children: "Actions" })
                  ] }),
                  Tr && /* @__PURE__ */ s("tr", { children: lt.map(({ key: P, column: B }) => {
                    if (!Qs(B, d))
                      return /* @__PURE__ */ s("td", { className: he.filterCell }, P);
                    const ue = ye.get(B.property ?? "");
                    return /* @__PURE__ */ C("td", { className: he.filterCell, children: [
                      /* @__PURE__ */ C(
                        "label",
                        {
                          className: he.visuallyHidden,
                          htmlFor: `df-${B.property}`,
                          children: [
                            "Filter ",
                            B.title ?? B.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "select",
                        {
                          id: `df-${B.property}`,
                          className: he.filterSelect,
                          value: ue?.operator ?? Js(B.type ?? "string"),
                          onChange: (fe) => K(B.property ?? "", {
                            ...ue,
                            operator: fe.target.value
                          }),
                          "aria-label": `${B.title ?? B.property} operator`,
                          children: wr.filter((fe) => fe !== "Custom").map(
                            (fe) => /* @__PURE__ */ s("option", { value: fe, children: fe }, fe)
                          )
                        }
                      ),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          className: he.filterInput,
                          value: ue?.value ?? "",
                          onChange: (fe) => K(B.property ?? "", {
                            ...ue,
                            value: fe.target.value
                          }),
                          placeholder: `Filter ${B.title ?? B.property}`,
                          "aria-label": `${B.title ?? B.property} value`
                        }
                      )
                    ] }, P);
                  }) })
                ] }),
                /* @__PURE__ */ C("tbody", { children: [
                  be === "__new__" && /* @__PURE__ */ C("tr", { className: he.editRow, children: [
                    lt.map(({ key: P, column: B }) => /* @__PURE__ */ s("td", { className: he.editCell, children: B.property && /* @__PURE__ */ s(
                      "input",
                      {
                        className: he.editInput,
                        type: B.type === "number" ? "number" : B.type === "boolean" ? "checkbox" : "text",
                        checked: B.type === "boolean" ? !!Re[B.property] : void 0,
                        value: B.type === "boolean" ? void 0 : String(Re[B.property] ?? ""),
                        onChange: (ue) => Ge((fe) => ({
                          ...fe,
                          [B.property]: B.type === "boolean" ? ue.target.checked : ue.target.value
                        })),
                        "aria-label": `${B.title ?? B.property} (new)`
                      }
                    ) }, P)),
                    ot && /* @__PURE__ */ C("td", { className: he.editCell, children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: he.commandButton,
                          onClick: () => ss(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: he.commandButton,
                          onClick: qt,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  hn.top > 0 && /* @__PURE__ */ s("tr", { className: he.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ s(
                    "td",
                    {
                      colSpan: bs,
                      style: { height: hn.top }
                    }
                  ) }),
                  qe.slice(hn.start, hn.end).map((P, B) => {
                    const ue = hn.start + B, fe = z ? ue + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const Ft = Te.has(P.group.key);
                      return /* @__PURE__ */ s(
                        "tr",
                        {
                          className: he.groupRow,
                          "aria-rowindex": fe,
                          children: /* @__PURE__ */ s("td", { colSpan: bs, className: he.groupCell, children: /* @__PURE__ */ C(
                            "button",
                            {
                              type: "button",
                              className: he.groupToggle,
                              "aria-expanded": Ft,
                              style: {
                                paddingInlineStart: `${P.group.level * 16}px`
                              },
                              onClick: () => Ze(P.group.key),
                              children: [
                                /* @__PURE__ */ s("span", { "aria-hidden": "true", children: Ft ? "▼" : "▶" }),
                                P.group.title,
                                ": ",
                                P.group.display,
                                " (",
                                P.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${P.group.key}`
                      );
                    }
                    const Fe = P.row, Tt = n(Fe), _t = (_ ?? []).includes(Tt), On = be != null && be === String(Tt);
                    return /* @__PURE__ */ C(
                      "tr",
                      {
                        "aria-rowindex": fe,
                        className: [
                          J || g !== "None" ? he.clickable : "",
                          _t ? he.selected : "",
                          On ? he.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": g !== "None" ? _t : void 0,
                        onClick: J || g !== "None" ? (Ft) => {
                          Ci(Ft.target) || (me(Fe), ae(Fe));
                        } : void 0,
                        children: [
                          lt.map(({ key: Ft, column: xt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: Pr(xt),
                              style: xt.frozen ? { left: Ke[Ft] } : void 0,
                              children: On && xt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: he.editInput,
                                  type: xt.type === "number" ? "number" : xt.type === "boolean" ? "checkbox" : "text",
                                  checked: xt.type === "boolean" ? !!Re[xt.property] : void 0,
                                  value: xt.type === "boolean" ? void 0 : String(Re[xt.property] ?? ""),
                                  onChange: (Hs) => Ge((Br) => ({
                                    ...Br,
                                    [xt.property]: xt.type === "boolean" ? Hs.target.checked : Hs.target.value
                                  })),
                                  "aria-label": `${xt.title ?? xt.property} (edit)`
                                }
                              ) : Lr(xt, Fe)
                            },
                            Ft
                          )),
                          ot && /* @__PURE__ */ s("td", { className: he.commandCell, children: On ? /* @__PURE__ */ C($e, { children: [
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => ss(Fe),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: qt,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ C($e, { children: [
                            H !== "None" && /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => Bt(Fe),
                                children: "Edit"
                              }
                            ),
                            te && /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => te(Fe),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Tt
                    );
                  }),
                  hn.bottom > 0 && /* @__PURE__ */ s("tr", { className: he.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ s(
                    "td",
                    {
                      colSpan: bs,
                      style: { height: hn.bottom }
                    }
                  ) })
                ] }),
                D && D.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ C("tr", { className: he.footerRow, children: [
                  lt.map(({ key: P, column: B }) => {
                    const ue = D.filter(
                      (fe) => fe.property === B.property
                    );
                    return /* @__PURE__ */ s(
                      "td",
                      {
                        className: [
                          he.footerCell,
                          B.align === "right" ? he.right : "",
                          B.align === "center" ? he.center : ""
                        ].filter(Boolean).join(" "),
                        children: ue.map((fe, Fe) => /* @__PURE__ */ C(
                          "div",
                          {
                            className: he.footerValue,
                            children: [
                              fe.title ? `${fe.title}: ` : "",
                              ms(
                                ja(Fs, fe, wn),
                                fe.format
                              )
                            ]
                          },
                          `${fe.property}-${fe.type}-${Fe}`
                        ))
                      },
                      P
                    );
                  }),
                  ot && /* @__PURE__ */ s("td", { className: he.footerCell })
                ] }) })
              ]
            }
          ),
          Ue.items.length === 0 && !re && /* @__PURE__ */ s("div", { className: he.empty, children: ne }),
          re && /* @__PURE__ */ s("div", { className: he.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    pn && /* @__PURE__ */ s(
      Ds,
      {
        pageNumber: Ue.pageNumber,
        pageSize: Ue.pageSize,
        count: Ue.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: w,
        showPageSizeSelector: x,
        ariaLabel: Rn ? "Pagination (bottom)" : "Pagination",
        onPageChange: ke,
        onPageSizeChange: Z
      }
    )
  ] });
}
const Di = "_wrap_1e4xo_1", Mi = "_grid_1e4xo_7", zi = "_stacked_1e4xo_13", Ei = "_item_1e4xo_19", Ii = "_empty_1e4xo_25", Wn = {
  wrap: Di,
  grid: Mi,
  stacked: zi,
  item: Ei,
  empty: Ii
};
function _k({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: a = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: i = !1,
  showPageSizeSelector: c = !0,
  className: u,
  ariaLabel: f = "Data list"
}) {
  const [k, b] = X(1), [w, x] = X(t), g = e.length, _ = Math.max(1, Math.ceil(g / w)), p = Math.min(Math.max(1, k), _), y = xe(() => {
    const m = (p - 1) * w;
    return e.slice(m, m + w);
  }, [e, p, w]), $ = r ? Wn.grid : Wn.stacked;
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Wn.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        i && o != null ? o : g === 0 ? d ?? /* @__PURE__ */ s("div", { className: Wn.empty, children: a }) : /* @__PURE__ */ s("div", { className: $, children: y.map((m, M) => /* @__PURE__ */ s("div", { className: Wn.item, children: l ? l(m, M) : String(m) }, M)) }),
        /* @__PURE__ */ s(
          Ds,
          {
            pageNumber: p,
            pageSize: w,
            count: g,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: b,
            onPageSizeChange: (m) => {
              x(m), b(1);
            }
          }
        )
      ]
    }
  );
}
const Ai = "_label_1qfpw_1", ji = {
  label: Ai
}, pk = He(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: l,
      className: [ji.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Ti = "_textbox_1wq7t_1", Li = "_invalid_1wq7t_37", Pi = "_xs_1wq7t_44", Ri = "_sm_1wq7t_50", Bi = "_md_1wq7t_56", qi = "_lg_1wq7t_62", Fi = "_xl_1wq7t_68", ws = {
  textbox: Ti,
  invalid: Li,
  xs: Pi,
  sm: Ri,
  md: Bi,
  lg: qi,
  xl: Fi
}, Hi = He(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: a = "text",
    ...d
  }, o) {
    return l === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: a,
        "data-size": t,
        className: [
          ws.textbox,
          ws[t],
          n ? ws.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), hk = Hi, Ki = "_checkbox_e1een_1", Ui = {
  checkbox: Ki
}, mk = He(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const a = ee(null);
    return ge(() => {
      a.current && (a.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ s(
      "input",
      {
        ref: (d) => {
          a.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Ui.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), Wi = {
  switch: "_switch_1y0ld_1"
}, Xi = He(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      className: [Wi.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Vi = "_trigger_18hdv_1", Gi = "_tooltip_18hdv_7", Yi = "_top_18hdv_34", Zi = "_right_18hdv_40", Ji = "_bottom_18hdv_46", Qi = "_left_18hdv_52", ec = "_arrow_18hdv_58", tc = "_floating_18hdv_70", ln = {
  trigger: Vi,
  tooltip: Gi,
  "se-tooltip-in": "_se-tooltip-in_18hdv_1",
  top: Yi,
  right: Zi,
  bottom: Ji,
  left: Qi,
  arrow: ec,
  floating: tc,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_18hdv_1"
}, os = 8;
function nc(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + os,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - os,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + os,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - os,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function gk({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: a,
  className: d
}) {
  const o = Be(), i = ee(null), c = ee(null), u = ee(null), [f, k] = X(!1), [b, w] = X(null), x = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null), c.current !== null && (window.clearTimeout(c.current), c.current = null);
  }, g = () => {
    i.current = window.setTimeout(() => {
      k(!0), l != null && (c.current = window.setTimeout(() => k(!1), l));
    }, r);
  }, _ = () => {
    x(), k(!1);
  };
  if (ge(() => () => x(), []), ge(() => {
    if (a || !f) return;
    const y = ($) => {
      $.key === "Escape" && _();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [a, f]), ge(() => {
    if (!a) return;
    let y = null, $ = null, m = null;
    const M = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, v = () => {
      $ !== null && (window.clearTimeout($), $ = null);
    }, O = () => {
      M(), v(), m = null, w(null);
    }, j = (L) => {
      M(), v(), m = L, y = window.setTimeout(() => {
        y = null, w(L), l != null && ($ = window.setTimeout(O, l));
      }, r);
    }, D = (L) => L instanceof Element ? L.closest(a) : null, A = (L) => {
      const z = D(L.target);
      !z || z === m || j(z);
    }, N = (L) => {
      const z = D(L.target);
      if (!z || z !== m) return;
      const I = L.relatedTarget;
      I instanceof Element && z.contains(I) || O();
    }, h = (L) => {
      L.key === "Escape" && O();
    }, S = () => O();
    return document.addEventListener("mouseover", A), document.addEventListener("mouseout", N), document.addEventListener("focusin", A), document.addEventListener("focusout", N), document.addEventListener("keydown", h), document.addEventListener("scroll", S, !0), window.addEventListener("resize", S), () => {
      M(), v(), document.removeEventListener("mouseover", A), document.removeEventListener("mouseout", N), document.removeEventListener("focusin", A), document.removeEventListener("focusout", N), document.removeEventListener("keydown", h), document.removeEventListener("scroll", S, !0), window.removeEventListener("resize", S), m = null, w(null);
    };
  }, [a, r, l]), Cs(() => {
    const y = b;
    if (!y) return;
    const $ = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [$, o].filter(Boolean).join(" ")
    ), () => {
      $ == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", $);
    };
  }, [b, o]), Cs(() => {
    const y = u.current, $ = b;
    !y || !$ || Object.assign(
      y.style,
      nc($.getBoundingClientRect(), n)
    );
  }, [b, n]), a)
    return b ? /* @__PURE__ */ C(
      "span",
      {
        ref: u,
        role: "tooltip",
        id: o,
        className: [
          ln.tooltip,
          ln[n],
          ln.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ s("span", { className: ln.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const p = mt(t) ? js(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      f ? o : null
    ].filter((y) => typeof y == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ C(
      "span",
      {
        className: [ln.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: g,
        onMouseLeave: _,
        onFocus: g,
        onBlur: _,
        children: [
          p,
          f && /* @__PURE__ */ C(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [ln.tooltip, ln[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ s("span", { className: ln.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const sc = "_dialog_18an3_1", rc = "_sm_18an3_72", oc = "_resizable_18an3_78", lc = "_md_18an3_81", ac = "_lg_18an3_85", ic = "_header_18an3_89", cc = "_title_18an3_100", dc = "_description_18an3_107", uc = "_close_18an3_114", fc = "_body_18an3_144", _c = "_footer_18an3_156", Zt = {
  dialog: sc,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: rc,
  resizable: oc,
  md: lc,
  lg: ac,
  header: ic,
  title: cc,
  description: dc,
  close: uc,
  body: fc,
  footer: _c
};
function pc({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: a,
  size: d = "md",
  width: o,
  height: i,
  closeOnOverlayClick: c = !0,
  closeOnEsc: u = !0,
  resizable: f = !1,
  canClose: k,
  className: b
}) {
  const w = ee(null), x = Be(), g = Be(), _ = ee(t);
  ge(() => {
    _.current = t;
  });
  const p = ee(k);
  ge(() => {
    p.current = k;
  });
  const y = ee(u);
  ge(() => {
    y.current = u;
  });
  const $ = ee(!1), m = ee(!1), M = R(() => {
    if ($.current) return;
    const O = p.current?.();
    if (O instanceof Promise) {
      O.then((j) => {
        j && !$.current && ($.current = !0, _.current());
      });
      return;
    }
    O !== !1 && ($.current = !0, _.current());
  }, []), v = R(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    _.current();
  }, []);
  return ge(() => {
    const O = w.current;
    if (O)
      if (e && !O.open) {
        const j = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        O.showModal(), (O.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? O.querySelector("button"))?.focus();
        const A = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const N = (h) => {
          h.preventDefault(), y.current && M();
        };
        return O.addEventListener("cancel", N), () => {
          O.removeEventListener("cancel", N), document.body.style.overflow = A, j?.focus({ preventScroll: !0 });
        };
      } else !e && O.open && (m.current = $.current, $.current = !1, O.close());
  }, [e, M]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ C(
    "dialog",
    {
      ref: w,
      className: [
        Zt.dialog,
        Zt[d],
        f ? Zt.resizable : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: i ?? void 0
      },
      onClose: v,
      onClick: (O) => {
        O.target === w.current && c && M();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? x : void 0,
      "aria-describedby": r ? g : void 0,
      children: [
        n && /* @__PURE__ */ C("header", { className: Zt.header, children: [
          /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ s("h2", { id: x, className: Zt.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: g, className: Zt.description, children: r })
          ] }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Zt.close,
              onClick: () => {
                M();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: Zt.body, children: l }),
        a && /* @__PURE__ */ s("footer", { className: Zt.footer, children: a })
      ]
    }
  );
}
const hc = "_typography_1jy8x_1", mc = "_h1_1jy8x_39", gc = "_h2_1jy8x_45", xc = "_h3_1jy8x_51", yc = "_h4_1jy8x_57", bc = "_h5_1jy8x_63", vc = "_h6_1jy8x_69", kc = "_button_1jy8x_99", wc = "_caption_1jy8x_106", $c = "_overline_1jy8x_112", $s = {
  typography: hc,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: mc,
  h2: gc,
  h3: xc,
  h4: yc,
  h5: bc,
  h6: vc,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: kc,
  caption: wc,
  overline: $c,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Nc = {
  DisplayH1: "h1",
  DisplayH2: "h2",
  DisplayH3: "h3",
  DisplayH4: "h4",
  DisplayH5: "h5",
  DisplayH6: "h6",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  // Radzen parity: subtitles render as h6.
  Subtitle1: "h6",
  Subtitle2: "h6",
  Body1: "p",
  Body2: "p",
  Button: "span",
  Caption: "span",
  Overline: "span"
}, Oc = {
  DisplayH1: "display-1",
  DisplayH2: "display-2",
  DisplayH3: "display-3",
  DisplayH4: "display-4",
  DisplayH5: "display-5",
  DisplayH6: "display-6",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  Subtitle1: "subtitle-1",
  Subtitle2: "subtitle-2",
  Body1: "body-1",
  Body2: "body-2",
  Button: "button",
  Caption: "caption",
  Overline: "overline"
}, Sc = {
  Div: "div",
  Span: "span",
  P: "p",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  A: "a",
  Button: "button",
  Pre: "pre",
  Strong: "strong"
}, Cc = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Dc = He(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: a = !0,
  className: d,
  children: o,
  ...i
}, c) {
  if (a === !1) return null;
  const u = n === "Auto" ? Nc[t] : Sc[n];
  return /* @__PURE__ */ s(
    u,
    {
      ref: c,
      className: [
        $s.typography,
        $s[Oc[t]],
        r ? $s[Cc[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...i,
      children: l ?? o
    }
  );
}), Sr = Pn(null);
function xk() {
  const e = fn(Sr);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function yk({ children: e }) {
  const [t, n] = X([]), r = ee(0), l = xe(
    () => ({
      confirm: (o = {}) => new Promise((i) => {
        r.current += 1;
        const c = r.current;
        n((u) => [...u, { seq: c, kind: "confirm", options: o, resolve: i }]);
      }),
      alert: (o = {}) => new Promise((i) => {
        r.current += 1;
        const c = r.current;
        n((u) => [...u, { seq: c, kind: "alert", options: o, resolve: i }]);
      })
    }),
    []
  ), a = t[0], d = (o) => {
    a && (a.kind === "confirm" ? a.resolve(o) : a.resolve(), n((i) => i.slice(1)));
  };
  return /* @__PURE__ */ C(Sr.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ s(
      pc,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: a?.options.title ?? (a?.kind === "confirm" ? "Confirm" : "Alert"),
        size: a?.options.size,
        footer: a?.kind === "confirm" ? /* @__PURE__ */ C($e, { children: [
          /* @__PURE__ */ s(vs, { variant: "text", onClick: () => d(!1), children: a.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            vs,
            {
              severity: a.options.tone ?? "primary",
              onClick: () => d(!0),
              children: a.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ s(vs, { onClick: () => d(!0), children: a?.kind === "alert" ? a.options.okText ?? "OK" : "OK" }),
        children: a?.options.message != null && /* @__PURE__ */ s(Dc, { textStyle: "Body1", children: a.options.message })
      },
      a?.seq ?? 0
    )
  ] });
}
const Mc = "_viewport_lo2x9_1", zc = "_topLeft_lo2x9_13", Ec = "_topRight_lo2x9_20", Ic = "_bottomLeft_lo2x9_25", Ac = "_toast_lo2x9_30", jc = "_leaving_lo2x9_61", Tc = "_info_lo2x9_77", Lc = "_success_lo2x9_86", Pc = "_warning_lo2x9_95", Rc = "_danger_lo2x9_104", Bc = "_content_lo2x9_113", qc = "_title_lo2x9_118", Fc = "_description_lo2x9_141", Hc = "_dismiss_lo2x9_148", Kc = "_actions_lo2x9_169", Uc = "_action_lo2x9_169", Wc = "_cancel_lo2x9_177", Xc = "_progress_lo2x9_215", Nt = {
  viewport: Mc,
  topLeft: zc,
  topRight: Ec,
  bottomLeft: Ic,
  toast: Ac,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: jc,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: Tc,
  success: Lc,
  warning: Pc,
  danger: Rc,
  content: Bc,
  title: qc,
  description: Fc,
  dismiss: Hc,
  actions: Kc,
  action: Uc,
  cancel: Wc,
  progress: Xc,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, Cr = Pn(null);
function bk() {
  const e = fn(Cr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Vc = 200, Gc = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function vk({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [a, d] = X([]), [o, i] = X(!1), c = ee([]), u = ee(/* @__PURE__ */ new Map()), f = ee(!1), k = ee(0), b = (N) => {
    f.current = N, i(N);
  }, w = R((N) => {
    const h = u.current.get(N);
    h && (window.clearTimeout(h.timeoutId), h.remaining = Math.max(
      0,
      h.remaining - (Date.now() - h.startedAt)
    ));
  }, []), x = R((N) => {
    const h = u.current.get(N);
    h && (window.clearTimeout(h.timeoutId), u.current.delete(N));
  }, []), g = R(
    (N) => {
      x(N), d((h) => {
        const S = h.filter((L) => L.id !== N);
        return c.current = S, S;
      });
    },
    [x]
  ), _ = R(
    (N) => {
      const h = c.current.find((S) => S.id === N);
      !h || h.leaving || (h.onAutoClose?.(), g(N));
    },
    [g]
  ), p = R(
    (N) => {
      const h = u.current.get(N);
      !h || h.remaining <= 0 || (h.startedAt = Date.now(), h.timeoutId = window.setTimeout(() => _(N), h.remaining));
    },
    [_]
  ), y = R(() => {
    f.current || u.current.forEach((N, h) => w(h)), b(!0);
  }, [w]), $ = R(() => {
    u.current.forEach((N, h) => p(h)), b(!1);
  }, [p]);
  ge(() => {
    if (!r) return;
    const N = () => {
      document.hidden ? y() : $();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [r, y, $]);
  const m = R(
    (N) => {
      const h = c.current.find((S) => S.id === N);
      !h || h.leaving || (h.onDismiss?.(), d((S) => {
        const L = S.map(
          (z) => z.id === N ? { ...z, leaving: !0 } : z
        );
        return c.current = L, L;
      }), window.setTimeout(() => g(N), Vc));
    },
    [g]
  ), M = R(
    (N) => {
      if (N.durationMs <= 0) return;
      const h = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(N.id, h), f.current || p(N.id);
    },
    [p]
  ), v = R(
    (N) => {
      const h = c.current.find((L) => L.id === N.id), S = {
        id: N.id ?? ++k.current,
        title: N.title,
        description: N.description,
        severity: N.severity ?? "info",
        durationMs: N.durationMs ?? t,
        action: N.action,
        cancel: N.cancel,
        dismissible: N.dismissible ?? !0,
        closeOnClick: N.closeOnClick ?? !1,
        showProgress: N.showProgress ?? !1,
        position: N.position ?? n,
        onDismiss: N.onDismiss,
        onAutoClose: N.onAutoClose
      };
      d((L) => {
        const z = h ? L.map(
          (I) => I.id === S.id ? { ...S, leaving: !1 } : I
        ) : [...L, S];
        return c.current = z, z;
      }), h && x(S.id), M(S);
    },
    [t, n, M, x]
  ), O = xe(() => ({ toast: v }), [v]), j = xe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...a.map((N) => N.position)])),
    [n, a]
  ), D = r ? y : void 0, A = r ? $ : void 0;
  return /* @__PURE__ */ C(Cr.Provider, { value: O, children: [
    e,
    j.map((N) => /* @__PURE__ */ s(
      "div",
      {
        className: [Nt.viewport, Nt[Gc[N]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: D,
        onMouseLeave: A,
        children: a.filter((h) => h.position === N).map((h) => /* @__PURE__ */ C(
          "div",
          {
            role: h.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": h.closeOnClick ? "true" : "false",
            className: [
              Nt.toast,
              Nt[h.severity],
              h.leaving ? Nt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: h.closeOnClick ? () => m(h.id) : void 0,
            children: [
              /* @__PURE__ */ C("div", { className: Nt.content, children: [
                /* @__PURE__ */ s("div", { className: Nt.title, children: h.title }),
                h.description && /* @__PURE__ */ s("div", { className: Nt.description, children: h.description }),
                (h.action || h.cancel) && /* @__PURE__ */ C("div", { className: Nt.actions, children: [
                  h.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: Nt.action,
                      onClick: () => {
                        h.action?.onClick?.(), m(h.id);
                      },
                      children: h.action.label
                    }
                  ),
                  h.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: Nt.cancel,
                      onClick: () => {
                        h.cancel?.onClick?.(), m(h.id);
                      },
                      children: h.cancel.label
                    }
                  )
                ] })
              ] }),
              h.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Nt.dismiss,
                  onClick: () => m(h.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
                }
              ),
              h.showProgress && h.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: Nt.progress,
                  style: { animationDuration: `${h.durationMs}ms` }
                }
              )
            ]
          },
          h.id
        ))
      },
      N
    ))
  ] });
}
const Yc = "_alert_1ktjq_1", Zc = "_xs_1ktjq_28", Jc = "_sm_1ktjq_38", Qc = "_lg_1ktjq_48", ed = "_xl_1ktjq_58", td = "_primary_1ktjq_69", nd = "_secondary_1ktjq_74", sd = "_light_1ktjq_79", rd = "_base_1ktjq_84", od = "_dark_1ktjq_89", ld = "_info_1ktjq_94", ad = "_success_1ktjq_99", id = "_warning_1ktjq_104", cd = "_danger_1ktjq_109", dd = "_flat_1ktjq_116", ud = "_outlined_1ktjq_123", fd = "_filled_1ktjq_132", _d = "_text_1ktjq_139", pd = "_icon_1ktjq_181", hd = "_content_1ktjq_192", md = "_title_1ktjq_197", gd = "_body_1ktjq_203", xd = "_dismiss_1ktjq_209", Kt = {
  alert: Yc,
  xs: Zc,
  sm: Jc,
  lg: Qc,
  xl: ed,
  primary: td,
  secondary: nd,
  light: sd,
  base: rd,
  dark: od,
  info: ld,
  success: ad,
  warning: id,
  danger: cd,
  flat: dd,
  outlined: ud,
  filled: fd,
  text: _d,
  icon: pd,
  content: hd,
  title: md,
  body: gd,
  dismiss: xd,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, yd = {
  primary: "info",
  secondary: "info",
  light: "info",
  base: "info",
  dark: "info",
  info: "info",
  success: "check-circle",
  warning: "alert",
  danger: "x-circle"
};
function kk({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: a,
  showIcon: d = !0,
  children: o,
  dismissible: i = !0,
  onDismiss: c,
  visible: u,
  onVisibleChange: f,
  className: k,
  ...b
}) {
  const [w, x] = X(!1);
  if (u === !1 || u === void 0 && w)
    return null;
  const g = () => {
    u === void 0 && x(!0), c?.(), f?.(!1);
  }, _ = e, p = Ps(t, "filled"), y = Ln(n), $ = a ?? (d ? /* @__PURE__ */ s(we, { name: yd[e] }) : null);
  return /* @__PURE__ */ C(
    "div",
    {
      role: "alert",
      ...b,
      className: [
        Kt.alert,
        Kt[_],
        Kt[p],
        y ? Kt[y] : null,
        Kt[r],
        k
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ s("span", { className: Kt.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ C("div", { className: Kt.content, children: [
          l && /* @__PURE__ */ s("div", { className: Kt.title, children: l }),
          o && /* @__PURE__ */ s("div", { className: Kt.body, children: o })
        ] }),
        i && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Kt.dismiss,
            onClick: g,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const bd = "_skeleton_14cft_1", vd = "_text_14cft_35", kd = "_circle_14cft_40", wd = "_rect_14cft_44", er = {
  skeleton: bd,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: vd,
  circle: kd,
  rect: wd
};
function wk({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [er.skeleton, er[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
const $d = "_row_tkkv2_1", Nd = "_gapXs_tkkv2_12", Od = "_gapSm_tkkv2_17", Sd = "_gapMd_tkkv2_22", Cd = "_gapLg_tkkv2_27", Dd = "_gapXl_tkkv2_32", Md = "_start_tkkv2_37", zd = "_center_tkkv2_41", Ed = "_end_tkkv2_45", Id = "_stretch_tkkv2_49", Ad = "_baseline_tkkv2_53", jd = "_noWrap_tkkv2_109", Td = "_wrapReverse_tkkv2_113", Ld = "_gapRowXs_tkkv2_117", Pd = "_gapRowSm_tkkv2_121", Rd = "_gapRowMd_tkkv2_125", Bd = "_gapRowLg_tkkv2_129", qd = "_gapRowXl_tkkv2_133", Sn = {
  row: $d,
  gapXs: Nd,
  gapSm: Od,
  gapMd: Sd,
  gapLg: Cd,
  gapXl: Dd,
  start: Md,
  center: zd,
  end: Ed,
  stretch: Id,
  baseline: Ad,
  "justify-start": "_justify-start_tkkv2_57",
  "justify-center": "_justify-center_tkkv2_61",
  "justify-end": "_justify-end_tkkv2_65",
  "justify-between": "_justify-between_tkkv2_69",
  "justify-around": "_justify-around_tkkv2_73",
  "justify-evenly": "_justify-evenly_tkkv2_77",
  "justify-normal": "_justify-normal_tkkv2_81",
  "justify-left": "_justify-left_tkkv2_85",
  "justify-right": "_justify-right_tkkv2_89",
  "justify-stretch": "_justify-stretch_tkkv2_93",
  "justify-space-between": "_justify-space-between_tkkv2_97",
  "justify-space-around": "_justify-space-around_tkkv2_101",
  "justify-space-evenly": "_justify-space-evenly_tkkv2_105",
  noWrap: jd,
  wrapReverse: Td,
  gapRowXs: Ld,
  gapRowSm: Pd,
  gapRowMd: Rd,
  gapRowLg: Bd,
  gapRowXl: qd
}, Fd = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Hd = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Kd(e) {
  return typeof e != "string" ? null : Fd[e] ?? null;
}
function Ud(e) {
  return typeof e != "string" ? null : Hd[e] ?? null;
}
function tr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function $k({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: a,
  style: d,
  ...o
}) {
  const i = Kd(e), c = Ud(t), u = e != null && !i ? typeof e == "number" ? `${e}px` : e : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...u ? { gap: u, "--dx-col-gap": u } : {},
    ...t != null && !c ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Sn.row,
        Sn[n],
        Sn[`justify-${r}`],
        tr(l) != null ? Sn[tr(l)] : null,
        i ? Sn[i] : null,
        c ? Sn[c] : null,
        a
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const Wd = "_column_sh0ss_1", Xd = "_Size1_sh0ss_15", Vd = "_Size2_sh0ss_24", Gd = "_Size3_sh0ss_33", Yd = "_Size4_sh0ss_42", Zd = "_Size5_sh0ss_51", Jd = "_Size6_sh0ss_60", Qd = "_Size7_sh0ss_69", eu = "_Size8_sh0ss_78", tu = "_Size9_sh0ss_87", nu = "_Size10_sh0ss_96", su = "_Size11_sh0ss_105", ru = "_Size12_sh0ss_114", ou = "_Offset0_sh0ss_119", lu = "_Offset1_sh0ss_122", au = "_Offset2_sh0ss_127", iu = "_Offset3_sh0ss_132", cu = "_Offset4_sh0ss_137", du = "_Offset5_sh0ss_142", uu = "_Offset6_sh0ss_147", fu = "_Offset7_sh0ss_152", _u = "_Offset8_sh0ss_157", pu = "_Offset9_sh0ss_162", hu = "_Offset10_sh0ss_167", mu = "_Offset11_sh0ss_172", gu = "_Offset12_sh0ss_177", xu = "_OrderFirst_sh0ss_182", yu = "_OrderLast_sh0ss_185", bu = "_Order0_sh0ss_188", vu = "_Order1_sh0ss_191", ku = "_Order2_sh0ss_194", wu = "_Order3_sh0ss_197", $u = "_Order4_sh0ss_200", Nu = "_Order5_sh0ss_203", Ou = "_Order6_sh0ss_206", Su = "_Order7_sh0ss_209", Cu = "_Order8_sh0ss_212", Du = "_Order9_sh0ss_215", Mu = "_Order10_sh0ss_218", zu = "_Order11_sh0ss_221", Eu = "_Order12_sh0ss_224", Iu = "_xsSize1_sh0ss_229", Au = "_xsSize2_sh0ss_238", ju = "_xsSize3_sh0ss_247", Tu = "_xsSize4_sh0ss_256", Lu = "_xsSize5_sh0ss_265", Pu = "_xsSize6_sh0ss_274", Ru = "_xsSize7_sh0ss_283", Bu = "_xsSize8_sh0ss_292", qu = "_xsSize9_sh0ss_301", Fu = "_xsSize10_sh0ss_310", Hu = "_xsSize11_sh0ss_321", Ku = "_xsSize12_sh0ss_332", Uu = "_xsOffset0_sh0ss_337", Wu = "_xsOffset1_sh0ss_340", Xu = "_xsOffset2_sh0ss_345", Vu = "_xsOffset3_sh0ss_350", Gu = "_xsOffset4_sh0ss_355", Yu = "_xsOffset5_sh0ss_360", Zu = "_xsOffset6_sh0ss_365", Ju = "_xsOffset7_sh0ss_370", Qu = "_xsOffset8_sh0ss_375", ef = "_xsOffset9_sh0ss_380", tf = "_xsOffset10_sh0ss_385", nf = "_xsOffset11_sh0ss_391", sf = "_xsOffset12_sh0ss_397", rf = "_xsOrderFirst_sh0ss_403", of = "_xsOrderLast_sh0ss_406", lf = "_xsOrder0_sh0ss_409", af = "_xsOrder1_sh0ss_412", cf = "_xsOrder2_sh0ss_415", df = "_xsOrder3_sh0ss_418", uf = "_xsOrder4_sh0ss_421", ff = "_xsOrder5_sh0ss_424", _f = "_xsOrder6_sh0ss_427", pf = "_xsOrder7_sh0ss_430", hf = "_xsOrder8_sh0ss_433", mf = "_xsOrder9_sh0ss_436", gf = "_xsOrder10_sh0ss_439", xf = "_xsOrder11_sh0ss_442", yf = "_xsOrder12_sh0ss_445", bf = "_smSize1_sh0ss_451", vf = "_smSize2_sh0ss_460", kf = "_smSize3_sh0ss_469", wf = "_smSize4_sh0ss_478", $f = "_smSize5_sh0ss_487", Nf = "_smSize6_sh0ss_496", Of = "_smSize7_sh0ss_505", Sf = "_smSize8_sh0ss_514", Cf = "_smSize9_sh0ss_523", Df = "_smSize10_sh0ss_532", Mf = "_smSize11_sh0ss_543", zf = "_smSize12_sh0ss_554", Ef = "_smOffset0_sh0ss_559", If = "_smOffset1_sh0ss_562", Af = "_smOffset2_sh0ss_567", jf = "_smOffset3_sh0ss_572", Tf = "_smOffset4_sh0ss_577", Lf = "_smOffset5_sh0ss_582", Pf = "_smOffset6_sh0ss_587", Rf = "_smOffset7_sh0ss_592", Bf = "_smOffset8_sh0ss_597", qf = "_smOffset9_sh0ss_602", Ff = "_smOffset10_sh0ss_607", Hf = "_smOffset11_sh0ss_613", Kf = "_smOffset12_sh0ss_619", Uf = "_smOrderFirst_sh0ss_625", Wf = "_smOrderLast_sh0ss_628", Xf = "_smOrder0_sh0ss_631", Vf = "_smOrder1_sh0ss_634", Gf = "_smOrder2_sh0ss_637", Yf = "_smOrder3_sh0ss_640", Zf = "_smOrder4_sh0ss_643", Jf = "_smOrder5_sh0ss_646", Qf = "_smOrder6_sh0ss_649", e_ = "_smOrder7_sh0ss_652", t_ = "_smOrder8_sh0ss_655", n_ = "_smOrder9_sh0ss_658", s_ = "_smOrder10_sh0ss_661", r_ = "_smOrder11_sh0ss_664", o_ = "_smOrder12_sh0ss_667", l_ = "_mdSize1_sh0ss_673", a_ = "_mdSize2_sh0ss_682", i_ = "_mdSize3_sh0ss_691", c_ = "_mdSize4_sh0ss_700", d_ = "_mdSize5_sh0ss_709", u_ = "_mdSize6_sh0ss_718", f_ = "_mdSize7_sh0ss_727", __ = "_mdSize8_sh0ss_736", p_ = "_mdSize9_sh0ss_745", h_ = "_mdSize10_sh0ss_754", m_ = "_mdSize11_sh0ss_765", g_ = "_mdSize12_sh0ss_776", x_ = "_mdOffset0_sh0ss_781", y_ = "_mdOffset1_sh0ss_784", b_ = "_mdOffset2_sh0ss_789", v_ = "_mdOffset3_sh0ss_794", k_ = "_mdOffset4_sh0ss_799", w_ = "_mdOffset5_sh0ss_804", $_ = "_mdOffset6_sh0ss_809", N_ = "_mdOffset7_sh0ss_814", O_ = "_mdOffset8_sh0ss_819", S_ = "_mdOffset9_sh0ss_824", C_ = "_mdOffset10_sh0ss_829", D_ = "_mdOffset11_sh0ss_835", M_ = "_mdOffset12_sh0ss_841", z_ = "_mdOrderFirst_sh0ss_847", E_ = "_mdOrderLast_sh0ss_850", I_ = "_mdOrder0_sh0ss_853", A_ = "_mdOrder1_sh0ss_856", j_ = "_mdOrder2_sh0ss_859", T_ = "_mdOrder3_sh0ss_862", L_ = "_mdOrder4_sh0ss_865", P_ = "_mdOrder5_sh0ss_868", R_ = "_mdOrder6_sh0ss_871", B_ = "_mdOrder7_sh0ss_874", q_ = "_mdOrder8_sh0ss_877", F_ = "_mdOrder9_sh0ss_880", H_ = "_mdOrder10_sh0ss_883", K_ = "_mdOrder11_sh0ss_886", U_ = "_mdOrder12_sh0ss_889", W_ = "_lgSize1_sh0ss_895", X_ = "_lgSize2_sh0ss_904", V_ = "_lgSize3_sh0ss_913", G_ = "_lgSize4_sh0ss_922", Y_ = "_lgSize5_sh0ss_931", Z_ = "_lgSize6_sh0ss_940", J_ = "_lgSize7_sh0ss_949", Q_ = "_lgSize8_sh0ss_958", e1 = "_lgSize9_sh0ss_967", t1 = "_lgSize10_sh0ss_976", n1 = "_lgSize11_sh0ss_987", s1 = "_lgSize12_sh0ss_998", r1 = "_lgOffset0_sh0ss_1003", o1 = "_lgOffset1_sh0ss_1006", l1 = "_lgOffset2_sh0ss_1011", a1 = "_lgOffset3_sh0ss_1016", i1 = "_lgOffset4_sh0ss_1021", c1 = "_lgOffset5_sh0ss_1026", d1 = "_lgOffset6_sh0ss_1031", u1 = "_lgOffset7_sh0ss_1036", f1 = "_lgOffset8_sh0ss_1041", _1 = "_lgOffset9_sh0ss_1046", p1 = "_lgOffset10_sh0ss_1051", h1 = "_lgOffset11_sh0ss_1057", m1 = "_lgOffset12_sh0ss_1063", g1 = "_lgOrderFirst_sh0ss_1069", x1 = "_lgOrderLast_sh0ss_1072", y1 = "_lgOrder0_sh0ss_1075", b1 = "_lgOrder1_sh0ss_1078", v1 = "_lgOrder2_sh0ss_1081", k1 = "_lgOrder3_sh0ss_1084", w1 = "_lgOrder4_sh0ss_1087", $1 = "_lgOrder5_sh0ss_1090", N1 = "_lgOrder6_sh0ss_1093", O1 = "_lgOrder7_sh0ss_1096", S1 = "_lgOrder8_sh0ss_1099", C1 = "_lgOrder9_sh0ss_1102", D1 = "_lgOrder10_sh0ss_1105", M1 = "_lgOrder11_sh0ss_1108", z1 = "_lgOrder12_sh0ss_1111", E1 = "_xlSize1_sh0ss_1117", I1 = "_xlSize2_sh0ss_1126", A1 = "_xlSize3_sh0ss_1135", j1 = "_xlSize4_sh0ss_1144", T1 = "_xlSize5_sh0ss_1153", L1 = "_xlSize6_sh0ss_1162", P1 = "_xlSize7_sh0ss_1171", R1 = "_xlSize8_sh0ss_1180", B1 = "_xlSize9_sh0ss_1189", q1 = "_xlSize10_sh0ss_1198", F1 = "_xlSize11_sh0ss_1209", H1 = "_xlSize12_sh0ss_1220", K1 = "_xlOffset0_sh0ss_1225", U1 = "_xlOffset1_sh0ss_1228", W1 = "_xlOffset2_sh0ss_1233", X1 = "_xlOffset3_sh0ss_1238", V1 = "_xlOffset4_sh0ss_1243", G1 = "_xlOffset5_sh0ss_1248", Y1 = "_xlOffset6_sh0ss_1253", Z1 = "_xlOffset7_sh0ss_1258", J1 = "_xlOffset8_sh0ss_1263", Q1 = "_xlOffset9_sh0ss_1268", ep = "_xlOffset10_sh0ss_1273", tp = "_xlOffset11_sh0ss_1279", np = "_xlOffset12_sh0ss_1285", sp = "_xlOrderFirst_sh0ss_1291", rp = "_xlOrderLast_sh0ss_1294", op = "_xlOrder0_sh0ss_1297", lp = "_xlOrder1_sh0ss_1300", ap = "_xlOrder2_sh0ss_1303", ip = "_xlOrder3_sh0ss_1306", cp = "_xlOrder4_sh0ss_1309", dp = "_xlOrder5_sh0ss_1312", up = "_xlOrder6_sh0ss_1315", fp = "_xlOrder7_sh0ss_1318", _p = "_xlOrder8_sh0ss_1321", pp = "_xlOrder9_sh0ss_1324", hp = "_xlOrder10_sh0ss_1327", mp = "_xlOrder11_sh0ss_1330", gp = "_xlOrder12_sh0ss_1333", xp = "_xxSize1_sh0ss_1339", yp = "_xxSize2_sh0ss_1348", bp = "_xxSize3_sh0ss_1357", vp = "_xxSize4_sh0ss_1366", kp = "_xxSize5_sh0ss_1375", wp = "_xxSize6_sh0ss_1384", $p = "_xxSize7_sh0ss_1393", Np = "_xxSize8_sh0ss_1402", Op = "_xxSize9_sh0ss_1411", Sp = "_xxSize10_sh0ss_1420", Cp = "_xxSize11_sh0ss_1431", Dp = "_xxSize12_sh0ss_1442", Mp = "_xxOffset0_sh0ss_1447", zp = "_xxOffset1_sh0ss_1450", Ep = "_xxOffset2_sh0ss_1455", Ip = "_xxOffset3_sh0ss_1460", Ap = "_xxOffset4_sh0ss_1465", jp = "_xxOffset5_sh0ss_1470", Tp = "_xxOffset6_sh0ss_1475", Lp = "_xxOffset7_sh0ss_1480", Pp = "_xxOffset8_sh0ss_1485", Rp = "_xxOffset9_sh0ss_1490", Bp = "_xxOffset10_sh0ss_1495", qp = "_xxOffset11_sh0ss_1501", Fp = "_xxOffset12_sh0ss_1507", Hp = "_xxOrderFirst_sh0ss_1513", Kp = "_xxOrderLast_sh0ss_1516", Up = "_xxOrder0_sh0ss_1519", Wp = "_xxOrder1_sh0ss_1522", Xp = "_xxOrder2_sh0ss_1525", Vp = "_xxOrder3_sh0ss_1528", Gp = "_xxOrder4_sh0ss_1531", Yp = "_xxOrder5_sh0ss_1534", Zp = "_xxOrder6_sh0ss_1537", Jp = "_xxOrder7_sh0ss_1540", Qp = "_xxOrder8_sh0ss_1543", eh = "_xxOrder9_sh0ss_1546", th = "_xxOrder10_sh0ss_1549", nh = "_xxOrder11_sh0ss_1552", sh = "_xxOrder12_sh0ss_1555", ls = {
  column: Wd,
  Size1: Xd,
  Size2: Vd,
  Size3: Gd,
  Size4: Yd,
  Size5: Zd,
  Size6: Jd,
  Size7: Qd,
  Size8: eu,
  Size9: tu,
  Size10: nu,
  Size11: su,
  Size12: ru,
  Offset0: ou,
  Offset1: lu,
  Offset2: au,
  Offset3: iu,
  Offset4: cu,
  Offset5: du,
  Offset6: uu,
  Offset7: fu,
  Offset8: _u,
  Offset9: pu,
  Offset10: hu,
  Offset11: mu,
  Offset12: gu,
  OrderFirst: xu,
  OrderLast: yu,
  Order0: bu,
  Order1: vu,
  Order2: ku,
  Order3: wu,
  Order4: $u,
  Order5: Nu,
  Order6: Ou,
  Order7: Su,
  Order8: Cu,
  Order9: Du,
  Order10: Mu,
  Order11: zu,
  Order12: Eu,
  xsSize1: Iu,
  xsSize2: Au,
  xsSize3: ju,
  xsSize4: Tu,
  xsSize5: Lu,
  xsSize6: Pu,
  xsSize7: Ru,
  xsSize8: Bu,
  xsSize9: qu,
  xsSize10: Fu,
  xsSize11: Hu,
  xsSize12: Ku,
  xsOffset0: Uu,
  xsOffset1: Wu,
  xsOffset2: Xu,
  xsOffset3: Vu,
  xsOffset4: Gu,
  xsOffset5: Yu,
  xsOffset6: Zu,
  xsOffset7: Ju,
  xsOffset8: Qu,
  xsOffset9: ef,
  xsOffset10: tf,
  xsOffset11: nf,
  xsOffset12: sf,
  xsOrderFirst: rf,
  xsOrderLast: of,
  xsOrder0: lf,
  xsOrder1: af,
  xsOrder2: cf,
  xsOrder3: df,
  xsOrder4: uf,
  xsOrder5: ff,
  xsOrder6: _f,
  xsOrder7: pf,
  xsOrder8: hf,
  xsOrder9: mf,
  xsOrder10: gf,
  xsOrder11: xf,
  xsOrder12: yf,
  smSize1: bf,
  smSize2: vf,
  smSize3: kf,
  smSize4: wf,
  smSize5: $f,
  smSize6: Nf,
  smSize7: Of,
  smSize8: Sf,
  smSize9: Cf,
  smSize10: Df,
  smSize11: Mf,
  smSize12: zf,
  smOffset0: Ef,
  smOffset1: If,
  smOffset2: Af,
  smOffset3: jf,
  smOffset4: Tf,
  smOffset5: Lf,
  smOffset6: Pf,
  smOffset7: Rf,
  smOffset8: Bf,
  smOffset9: qf,
  smOffset10: Ff,
  smOffset11: Hf,
  smOffset12: Kf,
  smOrderFirst: Uf,
  smOrderLast: Wf,
  smOrder0: Xf,
  smOrder1: Vf,
  smOrder2: Gf,
  smOrder3: Yf,
  smOrder4: Zf,
  smOrder5: Jf,
  smOrder6: Qf,
  smOrder7: e_,
  smOrder8: t_,
  smOrder9: n_,
  smOrder10: s_,
  smOrder11: r_,
  smOrder12: o_,
  mdSize1: l_,
  mdSize2: a_,
  mdSize3: i_,
  mdSize4: c_,
  mdSize5: d_,
  mdSize6: u_,
  mdSize7: f_,
  mdSize8: __,
  mdSize9: p_,
  mdSize10: h_,
  mdSize11: m_,
  mdSize12: g_,
  mdOffset0: x_,
  mdOffset1: y_,
  mdOffset2: b_,
  mdOffset3: v_,
  mdOffset4: k_,
  mdOffset5: w_,
  mdOffset6: $_,
  mdOffset7: N_,
  mdOffset8: O_,
  mdOffset9: S_,
  mdOffset10: C_,
  mdOffset11: D_,
  mdOffset12: M_,
  mdOrderFirst: z_,
  mdOrderLast: E_,
  mdOrder0: I_,
  mdOrder1: A_,
  mdOrder2: j_,
  mdOrder3: T_,
  mdOrder4: L_,
  mdOrder5: P_,
  mdOrder6: R_,
  mdOrder7: B_,
  mdOrder8: q_,
  mdOrder9: F_,
  mdOrder10: H_,
  mdOrder11: K_,
  mdOrder12: U_,
  lgSize1: W_,
  lgSize2: X_,
  lgSize3: V_,
  lgSize4: G_,
  lgSize5: Y_,
  lgSize6: Z_,
  lgSize7: J_,
  lgSize8: Q_,
  lgSize9: e1,
  lgSize10: t1,
  lgSize11: n1,
  lgSize12: s1,
  lgOffset0: r1,
  lgOffset1: o1,
  lgOffset2: l1,
  lgOffset3: a1,
  lgOffset4: i1,
  lgOffset5: c1,
  lgOffset6: d1,
  lgOffset7: u1,
  lgOffset8: f1,
  lgOffset9: _1,
  lgOffset10: p1,
  lgOffset11: h1,
  lgOffset12: m1,
  lgOrderFirst: g1,
  lgOrderLast: x1,
  lgOrder0: y1,
  lgOrder1: b1,
  lgOrder2: v1,
  lgOrder3: k1,
  lgOrder4: w1,
  lgOrder5: $1,
  lgOrder6: N1,
  lgOrder7: O1,
  lgOrder8: S1,
  lgOrder9: C1,
  lgOrder10: D1,
  lgOrder11: M1,
  lgOrder12: z1,
  xlSize1: E1,
  xlSize2: I1,
  xlSize3: A1,
  xlSize4: j1,
  xlSize5: T1,
  xlSize6: L1,
  xlSize7: P1,
  xlSize8: R1,
  xlSize9: B1,
  xlSize10: q1,
  xlSize11: F1,
  xlSize12: H1,
  xlOffset0: K1,
  xlOffset1: U1,
  xlOffset2: W1,
  xlOffset3: X1,
  xlOffset4: V1,
  xlOffset5: G1,
  xlOffset6: Y1,
  xlOffset7: Z1,
  xlOffset8: J1,
  xlOffset9: Q1,
  xlOffset10: ep,
  xlOffset11: tp,
  xlOffset12: np,
  xlOrderFirst: sp,
  xlOrderLast: rp,
  xlOrder0: op,
  xlOrder1: lp,
  xlOrder2: ap,
  xlOrder3: ip,
  xlOrder4: cp,
  xlOrder5: dp,
  xlOrder6: up,
  xlOrder7: fp,
  xlOrder8: _p,
  xlOrder9: pp,
  xlOrder10: hp,
  xlOrder11: mp,
  xlOrder12: gp,
  xxSize1: xp,
  xxSize2: yp,
  xxSize3: bp,
  xxSize4: vp,
  xxSize5: kp,
  xxSize6: wp,
  xxSize7: $p,
  xxSize8: Np,
  xxSize9: Op,
  xxSize10: Sp,
  xxSize11: Cp,
  xxSize12: Dp,
  xxOffset0: Mp,
  xxOffset1: zp,
  xxOffset2: Ep,
  xxOffset3: Ip,
  xxOffset4: Ap,
  xxOffset5: jp,
  xxOffset6: Tp,
  xxOffset7: Lp,
  xxOffset8: Pp,
  xxOffset9: Rp,
  xxOffset10: Bp,
  xxOffset11: qp,
  xxOffset12: Fp,
  xxOrderFirst: Hp,
  xxOrderLast: Kp,
  xxOrder0: Up,
  xxOrder1: Wp,
  xxOrder2: Xp,
  xxOrder3: Vp,
  xxOrder4: Gp,
  xxOrder5: Yp,
  xxOrder6: Zp,
  xxOrder7: Jp,
  xxOrder8: Qp,
  xxOrder9: eh,
  xxOrder10: th,
  xxOrder11: nh,
  xxOrder12: sh
}, rh = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function oh(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function lh(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function ah(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function ih(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (ah(n, t), `${e}Order${t}`);
}
function Nk({ className: e, style: t, ...n }) {
  const r = [ls.column], l = { ...t };
  for (const [A, N, h, S] of rh) {
    const L = n[N], z = n[h], I = n[S];
    if (L != null) {
      oh(N, L);
      const T = ls[`${A}Size${L}`];
      T && r.push(T);
    }
    if (z != null) {
      lh(h, z);
      const T = ls[`${A}Offset${z}`];
      T && r.push(T);
    }
    if (I != null) {
      const T = ls[ih(A, I, S)];
      T && r.push(T);
    }
  }
  const {
    size: a,
    offset: d,
    sizeXs: o,
    offsetXs: i,
    sizeSm: c,
    offsetSm: u,
    sizeMd: f,
    offsetMd: k,
    sizeLg: b,
    offsetLg: w,
    sizeXl: x,
    offsetXl: g,
    sizeXx: _,
    offsetXx: p,
    order: y,
    orderXs: $,
    orderSm: m,
    orderMd: M,
    orderLg: v,
    orderXl: O,
    orderXx: j,
    ...D
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...D
    }
  );
}
const ch = "_stack_1yc1g_1", dh = "_gapXs_1yc1g_29", uh = "_gapSm_1yc1g_33", fh = "_gapMd_1yc1g_37", _h = "_gapLg_1yc1g_41", ph = "_gapXl_1yc1g_45", Cn = {
  stack: ch,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: dh,
  gapSm: uh,
  gapMd: fh,
  gapLg: _h,
  gapXl: ph,
  "align-start": "_align-start_1yc1g_49",
  "align-center": "_align-center_1yc1g_53",
  "align-end": "_align-end_1yc1g_57",
  "align-stretch": "_align-stretch_1yc1g_61",
  "align-baseline": "_align-baseline_1yc1g_65",
  "align-normal": "_align-normal_1yc1g_69",
  "justify-start": "_justify-start_1yc1g_73",
  "justify-center": "_justify-center_1yc1g_77",
  "justify-end": "_justify-end_1yc1g_81",
  "justify-between": "_justify-between_1yc1g_85",
  "justify-around": "_justify-around_1yc1g_89",
  "justify-evenly": "_justify-evenly_1yc1g_93",
  "justify-normal": "_justify-normal_1yc1g_97",
  "justify-space-between": "_justify-space-between_1yc1g_104",
  "justify-space-around": "_justify-space-around_1yc1g_108",
  "justify-space-evenly": "_justify-space-evenly_1yc1g_112"
}, hh = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function mh(e) {
  return typeof e != "string" ? null : hh[e] ?? null;
}
function nr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Ok({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = "sm",
  align: l,
  justify: a,
  className: d,
  style: o,
  ...i
}) {
  const c = mh(r), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null && !c ? { gap: typeof r == "number" ? `${r}px` : r } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Cn.stack,
        Cn[`dir-${u}`],
        nr(n) !== "wrap" ? Cn[`wrap-${nr(n)}`] : null,
        l != null ? Cn[`align-${l}`] : null,
        a != null ? Cn[`justify-${a}`] : null,
        c ? Cn[c] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const gh = "_autogrid_1fz7w_1", xh = "_gapXs_1fz7w_10", yh = "_gapSm_1fz7w_14", bh = "_gapMd_1fz7w_18", vh = "_gapLg_1fz7w_22", kh = "_gapXl_1fz7w_26", sr = {
  autogrid: gh,
  gapXs: xh,
  gapSm: yh,
  gapMd: bh,
  gapLg: vh,
  gapXl: kh
}, wh = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function $h(e) {
  return typeof e != "string" ? null : wh[e] ?? null;
}
function Sk({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: r,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const d = $h(t), o = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !d ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [sr.autogrid, d ? sr[d] : null, n].filter(Boolean).join(" "),
      style: o,
      ...a
    }
  );
}
const Nh = "_layout_fxvw1_1", Oh = "_row_fxvw1_7", Sh = "_grid_fxvw1_21", Ch = "_gridRight_fxvw1_27", Dh = "_gridHeader_fxvw1_31", Mh = "_gridFooter_fxvw1_36", zh = "_gridContents_fxvw1_41", Eh = "_gridBody_fxvw1_45", Jt = {
  layout: Nh,
  row: Oh,
  grid: Sh,
  gridRight: Ch,
  gridHeader: Dh,
  gridFooter: Mh,
  gridContents: zh,
  gridBody: Eh
}, Ih = "_footer_1thaw_1", Ah = "_sticky_1thaw_9", rr = {
  footer: Ih,
  sticky: Ah
};
function jh({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [rr.footer, e ? rr.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Th = "_header_wh9gi_1", Lh = "_sticky_wh9gi_9", or = {
  header: Th,
  sticky: Lh
};
function Ph({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [or.header, e ? or.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Rh = "_sidebar_1a2mp_1", Bh = "_sticky_1a2mp_23", qh = "_left_1a2mp_41", Fh = "_right_1a2mp_45", Hh = "_start_1a2mp_50", Kh = "_end_1a2mp_54", Uh = "_fullHeight_1a2mp_60", Wh = "_collapsed_1a2mp_64", Xh = "_responsive_1a2mp_72", Vh = "_overlay_1a2mp_80", Gh = "_mask_1a2mp_108", an = {
  sidebar: Rh,
  sticky: Bh,
  left: qh,
  right: Fh,
  start: Hh,
  end: Kh,
  fullHeight: Uh,
  collapsed: Wh,
  responsive: Xh,
  overlay: Vh,
  mask: Gh
};
function Yh({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: a = !1,
  onClose: d,
  className: o,
  children: i,
  ...c
}) {
  return ge(() => {
    if (!r || !t || d == null) return;
    const u = (f) => {
      f.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, d]), /* @__PURE__ */ C($e, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${an.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ s(
      "aside",
      {
        className: [
          an.sidebar,
          an[e],
          t ? null : an.collapsed,
          n ? an.responsive : null,
          r ? [an.overlay, "se-sidebar--overlay"] : null,
          l ? an.fullHeight : null,
          a && !r && !l ? an.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: i
      }
    )
  ] });
}
function Ck(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s($e, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], a = [], d = [], o = [], i = [], c = [];
  ns.forEach(n, (k) => {
    if (!mt(k)) {
      d.push(k);
      return;
    }
    if (k.type === Ph)
      l.push(k);
    else if (k.type === jh)
      a.push(k);
    else if (k.type === Yh) {
      const b = k, w = b.props.position;
      c.push(b), (w === "right" || w === "end" ? i : o).push(b);
    } else
      d.push(k);
  });
  const u = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const k = f ? i : o;
    return /* @__PURE__ */ C(
      "div",
      {
        className: [
          Jt.layout,
          Jt.grid,
          f ? Jt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          l.length > 0 && /* @__PURE__ */ s("div", { className: Jt.gridHeader, children: l }),
          /* @__PURE__ */ C("div", { className: Jt.gridContents, children: [
            k,
            /* @__PURE__ */ s("div", { className: Jt.gridBody, children: d })
          ] }),
          a.length > 0 && /* @__PURE__ */ s("div", { className: Jt.gridFooter, children: a })
        ]
      }
    );
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Jt.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        l,
        /* @__PURE__ */ C("div", { className: Jt.row, children: [
          o,
          d,
          i
        ] }),
        a
      ]
    }
  );
}
const Zh = "_body_akga4_1", Jh = "_bare_akga4_10", lr = {
  body: Zh,
  bare: Jh
};
function Dk({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [lr.body, t ? null : lr.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const Qh = "_toggle_lxnk5_1", em = {
  toggle: Qh
};
function Mk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...a
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [em.toggle, n].filter(Boolean).join(" "),
      ...a,
      children: l ?? /* @__PURE__ */ s(we, { name: e, size: 20 })
    }
  );
}
const tm = "_track_1itxd_1", nm = "_bar_1itxd_31", sm = "_primary_1itxd_39", rm = "_success_1itxd_43", om = "_warning_1itxd_47", lm = "_danger_1itxd_51", am = "_indeterminate_1itxd_149", im = "_circular_1itxd_163", cm = "_fill_1itxd_203", Ot = {
  track: tm,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: nm,
  primary: sm,
  success: rm,
  warning: om,
  danger: lm,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: am,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: im,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: cm,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function zk({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: a = "linear",
  size: d = "md",
  className: o,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, f = t > 0 ? u / t * 100 : 0;
  if (a === "circular") {
    const b = typeof d == "string", w = 2, x = 10.5, g = 2 * Math.PI * x, _ = g * (l ? 0.75 : 1), p = l ? 0 : g * (1 - f / 100), y = Ln(r);
    return /* @__PURE__ */ C(
      "svg",
      {
        width: b ? void 0 : d,
        height: b ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          Ot.circular,
          Ot[n],
          y ? Ot[y] : null,
          b ? Ot[`circular-${d}`] : null,
          l ? Ot.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: Ot.track,
              cx: 12,
              cy: 12,
              r: x,
              strokeWidth: w
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: Ot.fill,
              cx: 12,
              cy: 12,
              r: x,
              strokeWidth: w,
              strokeDasharray: `${_} ${g}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const k = Ln(r);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        Ot.track,
        Ot[n],
        k ? Ot[k] : null,
        typeof d == "string" ? Ot[`linear-${d}`] : null,
        l ? Ot.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: Ot.bar,
          style: l ? void 0 : { width: `${f}%` }
        }
      )
    }
  );
}
function dm(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Dr(e) {
  const [t, n] = X(() => dm(e));
  return ge(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (a) => n(a.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const um = "_wrapper_1qmsj_1", fm = {
  wrapper: um
}, Mr = "dx-theme";
function _m(e) {
  const t = e === void 0 ? Mr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function pm(e, t) {
  const n = e === void 0 ? Mr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Ek({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  className: a
}) {
  const d = Dr("(prefers-color-scheme: dark)"), [o, i] = X(void 0), c = e ?? o ?? _m(n) ?? t ?? "system", u = c === "system" ? d ? "dark" : "light" : c;
  ge(() => {
    if (c === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = c;
  }, [c]);
  const f = (k) => {
    const b = k.target.checked ? "dark" : "light";
    e === void 0 && i(b), pm(n, b), r?.(b);
  };
  return /* @__PURE__ */ C("label", { className: [fm.wrapper, a].filter(Boolean).join(" "), children: [
    l,
    /* @__PURE__ */ s(Xi, { checked: u === "dark", onChange: f })
  ] });
}
function hm(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const a = new DataView(l.buffer);
  a.setUint32(r - 8, n >>> 0, !0), a.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (x, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), i = (x, g) => x + g | 0, c = (x, g) => x << g | x >>> 32 - g;
  let u = 1732584193, f = 4023233417, k = 2562383102, b = 271733878;
  for (let x = 0; x < r; x += 64) {
    const g = [];
    for (let m = 0; m < 16; m += 1)
      g.push(a.getUint32(x + m * 4, !0));
    let _ = u, p = f, y = k, $ = b;
    for (let m = 0; m < 64; m += 1) {
      let M, v;
      m < 16 ? (M = p & y | ~p & $, v = m) : m < 32 ? (M = $ & p | ~$ & y, v = (5 * m + 1) % 16) : m < 48 ? (M = p ^ y ^ $, v = (3 * m + 5) % 16) : (M = y ^ (p | ~$), v = 7 * m % 16), M = i(i(i(M, _), o[m]), g[v]), _ = $, $ = y, y = p, p = i(p, c(M, d[Math.floor(m / 16) * 4 + m % 4]));
    }
    u = i(u, _), f = i(f, p), k = i(k, y), b = i(b, $);
  }
  const w = (x) => {
    let g = "";
    for (let _ = 0; _ < 4; _ += 1)
      g += `0${(x >>> _ * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return w(u) + w(f) + w(k) + w(b);
}
const mm = "_avatar_yj2hz_1", gm = "_xs_yj2hz_12", xm = "_sm_yj2hz_18", ym = "_md_yj2hz_24", bm = "_lg_yj2hz_30", vm = "_xl_yj2hz_36", km = "_initials_yj2hz_42", wm = "_image_yj2hz_57", $m = "_status_yj2hz_64", Nm = "_online_yj2hz_84", Om = "_offline_yj2hz_88", Sm = "_away_yj2hz_92", Dn = {
  avatar: mm,
  xs: gm,
  sm: xm,
  md: ym,
  lg: bm,
  xl: vm,
  initials: km,
  image: wm,
  status: $m,
  online: Nm,
  offline: Om,
  away: Sm
}, Cm = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, ps = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Dm(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Mm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ps[t % ps.length] ?? ps[0];
}
function Ik({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: a,
  size: d = "md",
  status: o,
  className: i
}) {
  const c = xe(() => e ? Dm(e) : "?", [e]), u = xe(() => e ? Mm(e) : ps[0], [e]), f = xe(() => {
    if (t != null || n == null) return;
    const $ = n.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${hm($)}?d=${r}&s=${Cm[d]}&r=${l}`;
  }, [t, n, r, l, d]), k = t ?? f, [b, w] = X(null), x = k != null && b !== k, g = x && a === "", _ = a ?? e ?? "avatar", p = o ? `${_}, ${o}` : _, y = x ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: Dn.image,
        src: k,
        alt: g ? "" : o ? p : _,
        onError: () => w(k ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: Dn.initials,
      style: { background: u },
      children: c
    }
  );
  return /* @__PURE__ */ C(
    "span",
    {
      className: [
        Dn.avatar,
        Dn[d],
        o ? Dn[o] : null,
        i
      ].filter(Boolean).join(" "),
      role: x ? void 0 : "img",
      "aria-label": x ? void 0 : p,
      children: [
        y,
        o && /* @__PURE__ */ s("span", { className: Dn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const zm = "_root_iy2gv_1", Em = "_left_iy2gv_6", Im = "_right_iy2gv_7", Am = "_panel_iy2gv_12", jm = "_bottom_iy2gv_20", Tm = "_tabList_iy2gv_24", Lm = "_underline_iy2gv_53", Pm = "_pills_iy2gv_72", Rm = "_tab_iy2gv_24", Bm = "_active_iy2gv_113", qm = "_disabled_iy2gv_139", Qt = {
  root: zm,
  left: Em,
  right: Im,
  panel: Am,
  bottom: jm,
  tabList: Tm,
  underline: Lm,
  pills: Pm,
  tab: Rm,
  active: Bm,
  disabled: qm
};
function Ak({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: a = "top",
  className: d
}) {
  const o = Be(), i = ee(null), [c, u] = X(
    n ?? e[0]?.key ?? ""
  ), f = t ?? c, k = a === "left" || a === "right", b = (g) => {
    u(g), r?.(g);
  }, w = (g) => {
    const _ = e.filter(($) => !$.disabled), p = _.findIndex(($) => $.key === f);
    let y = -1;
    g.key === "ArrowRight" || k && g.key === "ArrowDown" ? y = (p + 1) % _.length : g.key === "ArrowLeft" || k && g.key === "ArrowUp" ? y = (p - 1 + _.length) % _.length : g.key === "Home" ? y = 0 : g.key === "End" && (y = _.length - 1), y >= 0 && (g.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[y]?.key ?? "")}"]`
    )?.focus(), b(_[y]?.key ?? ""));
  }, x = e.find((g) => g.key === f);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Qt.root, Qt[a], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: i,
            role: "tablist",
            className: [Qt.tabList, Qt[l], Qt[a]].filter(Boolean).join(" "),
            onKeyDown: w,
            children: e.map((g) => {
              const _ = g.key === f;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": _,
                  "aria-controls": `${o}-panel-${g.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Qt.tab,
                    _ ? Qt.active : null,
                    g.disabled ? Qt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => b(g.key),
                  children: g.label
                },
                g.key
              );
            })
          }
        ),
        x && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${x.key}`,
            "aria-labelledby": `${o}-tab-${x.key}`,
            className: Qt.panel,
            children: x.content
          }
        )
      ]
    }
  );
}
const Fm = "_root_1qkv8_1", Hm = "_item_1qkv8_9", Km = "_heading_1qkv8_13", Um = "_trigger_1qkv8_17", Wm = "_disabled_1qkv8_34", Xm = "_title_1qkv8_48", Vm = "_chevron_1qkv8_52", Gm = "_open_1qkv8_59", Ym = "_content_1qkv8_63", en = {
  root: Fm,
  item: Hm,
  heading: Km,
  trigger: Um,
  disabled: Wm,
  title: Xm,
  chevron: Vm,
  open: Gm,
  content: Ym
};
function jk({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: a
}) {
  const d = Be(), [o, i] = X(
    r ?? []
  ), c = n ?? o, u = (f) => {
    const k = c.includes(f) ? c.filter((b) => b !== f) : t ? [...c, f] : [f];
    i(k), l?.(k);
  };
  return /* @__PURE__ */ s("div", { className: [en.root, a].filter(Boolean).join(" "), children: e.map((f) => {
    const k = c.includes(f.key), b = `${d}-panel-${f.key}`, w = `${d}-trigger-${f.key}`;
    return /* @__PURE__ */ C("div", { className: en.item, children: [
      /* @__PURE__ */ s("h3", { className: en.heading, children: /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          id: w,
          "aria-expanded": k,
          "aria-controls": b,
          disabled: f.disabled,
          className: [
            en.trigger,
            f.disabled ? en.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(f.key),
          children: [
            /* @__PURE__ */ s("span", { className: en.title, children: f.title }),
            /* @__PURE__ */ s(
              "span",
              {
                className: [en.chevron, k ? en.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ s(we, { name: "chevron-down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ s(
        "div",
        {
          id: b,
          role: "region",
          "aria-labelledby": w,
          hidden: !k,
          className: en.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Zm = "_textarea_1uei3_1", Jm = "_invalid_1uei3_27", Qm = "_xs_1uei3_34", eg = "_sm_1uei3_39", tg = "_md_1uei3_44", ng = "_lg_1uei3_49", sg = "_xl_1uei3_54", as = {
  textarea: Zm,
  invalid: Jm,
  xs: Qm,
  sm: eg,
  md: tg,
  lg: ng,
  xl: sg,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, Tk = He(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...a }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          as.textarea,
          as[t],
          as[`resize-${n}`],
          r ? as.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    );
  }
), rg = "_root_jtes6_1", og = "_trigger_jtes6_9", lg = "_invalid_jtes6_40", ag = "_placeholder_jtes6_47", ig = "_label_jtes6_54", cg = "_chevron_jtes6_60", dg = "_chevronOpen_jtes6_70", ug = "_menu_jtes6_74", fg = "_option_jtes6_89", _g = "_disabled_jtes6_100", pg = "_active_jtes6_104", hg = "_selected_jtes6_105", mg = "_header_jtes6_115", gg = "_xs_jtes6_122", xg = "_sm_jtes6_128", yg = "_md_jtes6_134", bg = "_lg_jtes6_140", vg = "_xl_jtes6_146", ht = {
  root: rg,
  trigger: og,
  invalid: lg,
  placeholder: ag,
  label: ig,
  chevron: cg,
  chevronOpen: dg,
  menu: ug,
  option: fg,
  disabled: _g,
  active: pg,
  selected: hg,
  header: mg,
  xs: gg,
  sm: xg,
  md: yg,
  lg: bg,
  xl: vg
}, kg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Lk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: a = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: i,
  ...c
}) {
  const u = Be(), f = `${u}-listbox`, k = ee(null), b = ee(null), [w, x] = X(
    n
  ), [g, _] = X(!1), p = t ?? w, y = e.map(
    (h, S) => h.label === "" || h.disabled ? -1 : S
  ).filter((h) => h >= 0), $ = e.findIndex(
    (h) => h.value === p
  ), [m, M] = X(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), v = R(() => {
    if (o) return;
    const h = $ >= 0 && y.includes($) ? $ : y[0];
    M(h ?? -1), _(!0);
  }, [o, $, y]), O = R(() => {
    _(!1), b.current?.focus();
  }, []);
  ge(() => {
    if (!g) return;
    const h = (S) => {
      k.current && !k.current.contains(S.target) && _(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [g]);
  const j = (h) => {
    x(h), r?.(h), _(!1), b.current?.focus();
  }, D = (h) => {
    if (y.length === 0) return;
    const S = y.includes(m) ? y.indexOf(m) : 0, L = y[(S + h + y.length) % y.length];
    L != null && M(L);
  }, A = (h) => {
    if (!g) {
      h.key === "ArrowDown" && (h.preventDefault(), v());
      return;
    }
    switch (h.key) {
      case "ArrowDown":
        h.preventDefault(), D(1);
        break;
      case "ArrowUp":
        h.preventDefault(), D(-1);
        break;
      case "Home":
        h.preventDefault(), y[0] != null && M(y[0]);
        break;
      case "End":
        h.preventDefault(), y[y.length - 1] != null && M(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        h.preventDefault(), m >= 0 && e[m] && y.includes(m) && j(e[m]?.value ?? "");
        break;
      case "Escape":
        h.preventDefault(), O();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, N = e.find(
    (h) => h.value === p
  );
  return /* @__PURE__ */ C(
    "div",
    {
      ref: k,
      className: [ht.root, i].filter(Boolean).join(" "),
      onKeyDown: A,
      children: [
        /* @__PURE__ */ C(
          "button",
          {
            ref: b,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": g,
            "aria-controls": f,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              ht.trigger,
              ht[a],
              g ? ht.open : null,
              d ? ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? _(!1) : v(),
            ...c,
            children: [
              /* @__PURE__ */ s("span", { className: N ? ht.label : ht.placeholder, children: N ? N.label : l }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [ht.chevron, g ? ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: kg },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "listbox",
            "aria-activedescendant": m >= 0 ? `${u}-option-${m}` : void 0,
            className: ht.menu,
            children: e.map(
              (h, S) => h.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: ht.header,
                  role: "presentation",
                  children: h.value
                },
                h.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${u}-option-${S}`,
                  role: "option",
                  "aria-selected": h.value === p,
                  "aria-disabled": h.disabled || void 0,
                  className: [
                    ht.option,
                    S === m ? ht.active : null,
                    h.value === p ? ht.selected : null,
                    h.disabled ? ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    h.disabled || j(h.value);
                  },
                  onMouseEnter: () => {
                    !h.disabled && h.label !== "" && M(S);
                  },
                  children: h.label
                },
                h.value
              )
            )
          }
        )
      ]
    }
  );
}
const wg = "_root_5j58f_1", $g = "_wrap_5j58f_9", Ng = "_input_5j58f_26", Og = "_invalid_5j58f_31", Sg = "_clear_5j58f_58", Cg = "_menu_5j58f_83", Dg = "_option_5j58f_98", Mg = "_disabled_5j58f_109", zg = "_active_5j58f_113", Eg = "_empty_5j58f_123", Ig = "_xs_5j58f_129", Ag = "_sm_5j58f_136", jg = "_md_5j58f_143", Tg = "_lg_5j58f_150", Lg = "_xl_5j58f_157", Lt = {
  root: wg,
  wrap: $g,
  input: Ng,
  invalid: Og,
  clear: Sg,
  menu: Cg,
  option: Dg,
  disabled: Mg,
  active: zg,
  empty: Eg,
  xs: Ig,
  sm: Ag,
  md: jg,
  lg: Tg,
  xl: Lg
}, Pg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Pk({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: a = "",
  size: d = "md",
  invalid: o = !1,
  disabled: i = !1,
  filter: c = Pg,
  className: u,
  ...f
}) {
  const k = Be(), b = `${k}-listbox`, w = ee(null), x = ee(null), [g, _] = X(n), [p, y] = X(!1), $ = t ?? g, m = xe(
    () => $.trim() === "" ? [...e] : e.filter((I) => c(I, $)),
    [e, $, c]
  ), M = m.map((I, T) => I.disabled ? -1 : T).filter((I) => I >= 0), [v, O] = X(-1), j = (I) => {
    _(I), r?.(I);
  }, D = (I) => {
    j(I.label), l?.(I.value, I), y(!1);
  }, A = (I) => {
    if (M.length === 0) return;
    const T = M.includes(v) ? M.indexOf(v) : I === 1 ? -1 : 0, H = M[(T + I + M.length) % M.length];
    H != null && O(H);
  }, N = (I) => {
    i || (j(I.target.value), y(!0), O(-1));
  }, h = () => {
    i || $ !== "" && y(!0);
  }, S = (I) => {
    w.current && !w.current.contains(I.relatedTarget) && y(!1);
  }, L = (I) => {
    if (!i)
      switch (I.key) {
        case "ArrowDown":
          I.preventDefault(), p ? A(1) : (y(!0), O(M[0] ?? -1));
          break;
        case "ArrowUp":
          I.preventDefault(), p && A(-1);
          break;
        case "Enter":
          I.preventDefault(), p && v >= 0 && m[v] && D(m[v]);
          break;
        case "Escape":
          I.preventDefault(), y(!1);
          break;
        case "Tab":
          p && v >= 0 && m[v] && D(m[v]), y(!1);
          break;
      }
  }, z = () => {
    j(""), O(-1), y(!0), x.current?.focus();
  };
  return /* @__PURE__ */ C(
    "div",
    {
      ref: w,
      className: [Lt.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ C(
          "div",
          {
            className: [Lt.wrap, Lt[d], o ? Lt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: x,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": p,
                  "aria-controls": b,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && v >= 0 ? `${k}-option-${v}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: i,
                  value: $,
                  placeholder: a,
                  className: Lt.input,
                  onChange: N,
                  onFocus: h,
                  onBlur: S,
                  onKeyDown: L,
                  ...f
                }
              ),
              $ !== "" && !i && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Lt.clear,
                  "aria-label": "Clear",
                  onClick: z,
                  children: /* @__PURE__ */ s(we, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && /* @__PURE__ */ s("div", { id: b, role: "listbox", className: Lt.menu, children: m.length === 0 ? /* @__PURE__ */ s("div", { className: Lt.empty, children: "No matches" }) : m.map((I, T) => /* @__PURE__ */ s(
          "div",
          {
            id: `${k}-option-${T}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": I.disabled || void 0,
            className: [
              Lt.option,
              T === v ? Lt.active : null,
              I.disabled ? Lt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              I.disabled || D(I);
            },
            onMouseDown: (H) => {
              H.preventDefault(), I.disabled || D(I);
            },
            onMouseEnter: () => {
              I.disabled || O(T);
            },
            children: I.label
          },
          I.value
        )) })
      ]
    }
  );
}
const Rg = "_box_txdu6_1", Bg = "_option_txdu6_12", qg = "_disabled_txdu6_23", Fg = "_selected_txdu6_27", Hg = "_active_txdu6_33", Xn = {
  box: Rg,
  option: Bg,
  disabled: qg,
  selected: Fg,
  active: Hg
};
function Rk({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: a,
  style: d,
  ...o
}) {
  const i = Be(), [c, u] = X(() => {
    const m = n;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), f = t == null ? c : Array.isArray(t) ? t : [t], k = e.findIndex((m) => !m.disabled), [b, w] = X(
    () => k >= 0 ? k : 0
  ), x = ee(""), g = ee(null), _ = (m) => {
    u(m), l?.(r ? m : m[0] ?? "");
  }, p = e.map((m, M) => m.disabled ? -1 : M).filter((m) => m >= 0), y = (m) => {
    const M = e[m];
    if (!(!M || M.disabled))
      if (w(m), r) {
        const v = f.includes(M.value) ? f.filter((O) => O !== M.value) : [...f, M.value];
        _(v);
      } else
        _([M.value]);
  }, $ = (m) => {
    if (p.length === 0) return;
    const M = p.includes(b) ? b : p[0];
    let v = -1;
    if (m.key === "ArrowDown")
      v = p[(p.indexOf(M) + 1) % p.length];
    else if (m.key === "ArrowUp")
      v = p[(p.indexOf(M) - 1 + p.length) % p.length];
    else if (m.key === "Home")
      v = p[0];
    else if (m.key === "End")
      v = p[p.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), y(M);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const O = (x.current + m.key).toLowerCase();
      x.current = O, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        x.current = "";
      }, 500);
      const j = [...p, ...p], D = p.indexOf(M) + 1, A = j.slice(D).find((N) => e[N]?.label.toLowerCase().startsWith(O));
      A != null && w(A);
      return;
    }
    v >= 0 && (m.preventDefault(), w(v), r || _([e[v]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[b] ? `${i}-option-${b}` : void 0,
      style: d,
      className: [Xn.box, a].filter(Boolean).join(" "),
      onKeyDown: $,
      ...o,
      children: e.map((m, M) => {
        const v = f.includes(m.value), O = M === b;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${i}-option-${M}`,
            role: "option",
            "aria-selected": v,
            "aria-disabled": m.disabled || void 0,
            className: [
              Xn.option,
              v ? Xn.selected : null,
              O ? Xn.active : null,
              m.disabled ? Xn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y(M),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const Kg = "_group_1gpkr_1", Ug = "_legend_1gpkr_8", Wg = "_list_1gpkr_16", Xg = "_item_1gpkr_25", Vg = "_disabled_1gpkr_32", Gg = "_label_1gpkr_37", Yg = "_checkbox_1gpkr_48", xn = {
  group: Kg,
  legend: Ug,
  list: Wg,
  item: Xg,
  disabled: Vg,
  label: Gg,
  checkbox: Yg
};
function Bk({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: a,
  className: d
}) {
  const [o, i] = X(() => [
    ...n
  ]), c = t ?? o, u = (f, k) => {
    const b = k ? [...c, f] : c.filter((w) => w !== f);
    i(b), r?.(b);
  };
  return /* @__PURE__ */ C("fieldset", { className: [xn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: xn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: xn.list, children: e.map((f) => {
      const k = c.includes(f.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [xn.item, f.disabled ? xn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ C("label", { className: xn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: xn.checkbox,
                name: a,
                value: f.value,
                checked: k,
                disabled: f.disabled,
                onChange: (b) => u(f.value, b.target.checked)
              }
            ),
            /* @__PURE__ */ s("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const Zg = "_group_wb5fo_1", Jg = "_legend_wb5fo_8", Qg = "_list_wb5fo_16", e0 = "_item_wb5fo_25", t0 = "_disabled_wb5fo_32", n0 = "_label_wb5fo_37", s0 = "_radio_wb5fo_48", yn = {
  group: Zg,
  legend: Jg,
  list: Qg,
  item: e0,
  disabled: t0,
  label: n0,
  radio: s0
};
function qk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: a,
  className: d
}) {
  const [o, i] = X(
    n
  ), c = t ?? o, u = (f) => {
    i(f), r?.(f);
  };
  return /* @__PURE__ */ C("fieldset", { className: [yn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: yn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: yn.list, children: e.map((f) => {
      const k = f.value === c;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [yn.item, f.disabled ? yn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ C("label", { className: yn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: yn.radio,
                name: a,
                value: f.value,
                checked: k,
                disabled: f.disabled,
                onChange: (b) => u(b.target.value)
              }
            ),
            /* @__PURE__ */ s("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const r0 = "_bar_44vcf_1", o0 = "_vertical_44vcf_12", l0 = "_option_44vcf_17", a0 = "_selected_44vcf_40", i0 = "_sm_44vcf_56", c0 = "_md_44vcf_62", d0 = "_lg_44vcf_68", Mn = {
  bar: r0,
  vertical: o0,
  option: l0,
  selected: a0,
  sm: i0,
  md: c0,
  lg: d0
};
function ar(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Fk(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: a = "horizontal",
    onChange: d,
    size: o = "md",
    className: i,
    ...c
  } = e, u = l ?? !1, [f, k] = X(r ?? (u ? [] : t[0]?.value)), b = n ?? f, w = l === !0 || l === void 0 && Array.isArray(b), x = (_) => {
    if (!w) {
      k(_), d?.(_);
      return;
    }
    const p = ar(b), y = p.includes(_) ? p.filter(($) => $ !== _) : [...p, _];
    k(y), d?.(y);
  }, g = (_) => w ? ar(b).includes(_) : b === _;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        Mn.bar,
        Mn[o],
        a === "vertical" ? Mn.vertical : null,
        i
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((_) => {
        const p = g(_.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: _.disabled,
            className: [
              Mn.option,
              p ? Mn.selected : null,
              _.disabled ? Mn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const u0 = "_toggle_bc517_1", f0 = "_pressed_bc517_29", _0 = "_sm_bc517_41", p0 = "_md_bc517_47", h0 = "_lg_bc517_53", m0 = "_fullWidth_bc517_59", is = {
  toggle: u0,
  pressed: f0,
  sm: _0,
  md: p0,
  lg: h0,
  fullWidth: m0
}, Hk = He(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    size: l = "md",
    fullWidth: a = !1,
    className: d,
    type: o = "button",
    ...i
  }, c) {
    const [u, f] = X(n), k = t ?? u, b = () => {
      const w = !k;
      f(w), r?.(w);
    };
    return /* @__PURE__ */ s(
      "button",
      {
        ref: c,
        type: o,
        "aria-pressed": k,
        className: [
          is.toggle,
          is[l],
          k ? is.pressed : null,
          a ? is.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: b,
        ...i
      }
    );
  }
), g0 = "_root_pn7s6_1", x0 = "_action_pn7s6_285", y0 = "_filled_pn7s6_305", b0 = "_caret_pn7s6_309", v0 = "_flat_pn7s6_331", k0 = "_outlined_pn7s6_343", w0 = "_text_pn7s6_352", $0 = "_sm_pn7s6_451", N0 = "_md_pn7s6_463", O0 = "_lg_pn7s6_475", S0 = "_menu_pn7s6_487", C0 = "_item_pn7s6_500", D0 = "_disabled_pn7s6_521", M0 = "_active_pn7s6_525", z0 = "_danger_pn7s6_534", zt = {
  root: g0,
  "style-primary": "_style-primary_pn7s6_10",
  "style-secondary": "_style-secondary_pn7s6_18",
  "style-base": "_style-base_pn7s6_26",
  "style-light": "_style-light_pn7s6_34",
  "style-dark": "_style-dark_pn7s6_42",
  "style-info": "_style-info_pn7s6_50",
  "style-success": "_style-success_pn7s6_58",
  "style-warning": "_style-warning_pn7s6_66",
  "style-danger": "_style-danger_pn7s6_74",
  action: x0,
  filled: y0,
  caret: b0,
  flat: v0,
  outlined: k0,
  text: w0,
  "shade-lighter": "_shade-lighter_pn7s6_370",
  "shade-light": "_shade-light_pn7s6_370",
  "shade-dark": "_shade-dark_pn7s6_380",
  "shade-darker": "_shade-darker_pn7s6_384",
  sm: $0,
  md: N0,
  lg: O0,
  menu: S0,
  item: C0,
  disabled: D0,
  active: M0,
  danger: z0
};
function Kk({
  label: e,
  onClick: t,
  items: n = [],
  severity: r = "primary",
  variant: l = "filled",
  shade: a = "default",
  size: d = "md",
  disabled: o = !1,
  className: i,
  ...c
}) {
  const f = `${Be()}-menu`, k = ee(null), b = ee(null), w = ee([]), [x, g] = X(!1), [_, p] = X(-1), y = xe(
    () => n.map((N, h) => N.disabled ? -1 : h).filter((N) => N >= 0),
    [n]
  ), $ = R(() => {
    o || (p(y[0] ?? -1), g(!0));
  }, [o, y]), m = R(() => {
    g(!1), b.current?.focus();
  }, []);
  ge(() => {
    if (!x) return;
    const N = (h) => {
      k.current && !k.current.contains(h.target) && g(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [x]);
  const M = ee(x);
  ge(() => {
    const N = M.current;
    if (M.current = x, !x || N) return;
    const h = y.includes(_) ? _ : y[0] ?? -1;
    h >= 0 && w.current[h]?.focus();
  }, [x, _, y]);
  const v = (N) => {
    const h = n[N];
    !h || h.disabled || (h.onClick?.(), g(!1), b.current?.focus());
  }, O = (N) => {
    if (y.length === 0) return;
    const h = y.includes(_) ? y.indexOf(_) : N === 1 ? -1 : 0, S = y[(h + N + y.length) % y.length];
    S != null && (p(S), w.current[S]?.focus());
  }, j = (N) => {
    const h = N === "first" ? y[0] : y[y.length - 1];
    h != null && (p(h), w.current[h]?.focus());
  }, D = (N) => {
    switch (N.key) {
      case "ArrowDown":
        N.preventDefault(), O(1);
        break;
      case "ArrowUp":
        N.preventDefault(), O(-1);
        break;
      case "Home":
        N.preventDefault(), j("first");
        break;
      case "End":
        N.preventDefault(), j("last");
        break;
      case "Escape":
        N.preventDefault(), m();
        break;
      case "Tab":
        g(!1);
        break;
    }
  }, A = Ln(a);
  return /* @__PURE__ */ C(
    "div",
    {
      ref: k,
      className: [
        zt.root,
        zt[d],
        zt[`style-${r}`],
        zt[Ps(l, "filled")],
        A ? zt[A] : null,
        i
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: zt.action,
            disabled: o,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            ref: b,
            type: "button",
            className: zt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": x,
            "aria-controls": f,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => x ? g(!1) : $(),
            onKeyDown: (N) => {
              !x && N.key === "ArrowDown" && (N.preventDefault(), $());
            },
            children: /* @__PURE__ */ s(we, { name: "chevron-down" })
          }
        ),
        x && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "menu",
            tabIndex: -1,
            className: zt.menu,
            onKeyDown: D,
            ...c,
            children: n.map((N, h) => /* @__PURE__ */ s(
              "button",
              {
                ref: (S) => {
                  w.current[h] = S;
                },
                type: "button",
                role: "menuitem",
                tabIndex: h === _ ? 0 : -1,
                disabled: N.disabled,
                className: [
                  zt.item,
                  h === _ ? zt.active : null,
                  N.danger ? zt.danger : null,
                  N.disabled ? zt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => v(h),
                onMouseEnter: () => {
                  N.disabled || p(h);
                },
                children: N.label
              },
              N.key
            ))
          }
        )
      ]
    }
  );
}
const E0 = "_wrapper_eg26m_1", I0 = "_input_eg26m_8", A0 = "_invalid_eg26m_38", j0 = "_toggle_eg26m_45", T0 = "_xs_eg26m_80", L0 = "_sm_eg26m_86", P0 = "_md_eg26m_92", R0 = "_lg_eg26m_98", B0 = "_xl_eg26m_104", Vn = {
  wrapper: E0,
  input: I0,
  invalid: A0,
  toggle: j0,
  xs: T0,
  sm: L0,
  md: P0,
  lg: R0,
  xl: B0
}, Uk = He(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: a = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, i) {
    const [c, u] = X(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ C("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: i,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Vn.input,
              Vn[t],
              n ? Vn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...o
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Vn.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : a,
            disabled: l,
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ s(we, { name: c ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), q0 = "_mask_1pv7j_1", F0 = "_invalid_1pv7j_31", H0 = "_xs_1pv7j_38", K0 = "_sm_1pv7j_44", U0 = "_md_1pv7j_50", W0 = "_lg_1pv7j_56", X0 = "_xl_1pv7j_62", Ns = {
  mask: q0,
  invalid: F0,
  xs: H0,
  sm: K0,
  md: U0,
  lg: W0,
  xl: X0
};
function ir(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const l of t)
    if (l === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += l;
    else
      break;
  return r;
}
const Wk = He(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: a = "",
  onChange: d,
  className: o,
  onKeyDown: i,
  ...c
}, u) {
  const [f, k] = X(a ?? ""), b = l !== void 0, w = b ? l ?? "" : f, x = (p) => {
    const y = ir(p, r);
    return b || k(y), d?.(y), y;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: w,
      onChange: (p) => {
        x(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const y = p.currentTarget.selectionStart ?? w.length, $ = w[y - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            p.preventDefault();
            const m = w.replace(/\D/g, "");
            x(ir(m.slice(0, -1), r));
          }
        }
        i?.(p);
      },
      className: [
        Ns.mask,
        Ns[t],
        n ? Ns.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), V0 = "_wrapper_b3q45_1", G0 = "_input_b3q45_8", Y0 = "_invalid_b3q45_38", Z0 = "_button_b3q45_45", J0 = "_up_b3q45_77", Q0 = "_down_b3q45_82", ex = "_xs_b3q45_87", tx = "_sm_b3q45_93", nx = "_md_b3q45_99", sx = "_lg_b3q45_105", rx = "_xl_b3q45_111", cn = {
  wrapper: V0,
  input: G0,
  invalid: Y0,
  button: Z0,
  up: J0,
  down: Q0,
  xs: ex,
  sm: tx,
  md: nx,
  lg: sx,
  xl: rx
};
function Ms(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function ox(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function zr(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function lx(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function ax(e, t, n, r, l) {
  const d = Ms(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * l : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / l) * l : o = n + Math.floor((d - n - 1e-9) / l) * l, zr(o, n, r);
}
const Xk = He(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: a,
    defaultValue: d,
    onChange: o,
    min: i,
    max: c,
    step: u = 1,
    incrementLabel: f = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: b,
    onKeyDown: w,
    ...x
  }, g) {
    const [_, p] = X(
      d != null ? String(d) : ""
    ), y = a !== void 0, $ = y ? a == null ? "" : String(a) : _, m = (A) => {
      y || p(A), o?.(Ms(A));
    }, M = (A) => {
      y || p(String(A)), o?.(A);
    }, v = (A) => {
      l || M(ax($, A, i, c, u));
    }, O = (A) => {
      m(ox(A.target.value));
    }, j = (A) => {
      A.key === "ArrowUp" ? (A.preventDefault(), v(1)) : A.key === "ArrowDown" && (A.preventDefault(), v(-1)), w?.(A);
    }, D = (A) => {
      const N = Ms($);
      N === null ? (y || p(""), o?.(null)) : M(zr(lx(N, i, u), i, c)), b?.(A);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ C("div", { className: cn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: g,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: $,
            disabled: l,
            onChange: O,
            onKeyDown: j,
            onBlur: D,
            className: [
              cn.input,
              cn[t],
              n ? cn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...x
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [cn.button, cn.up].join(" "),
            "aria-label": f,
            disabled: l,
            onClick: () => v(1),
            children: /* @__PURE__ */ s(we, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [cn.button, cn.down].join(" "),
            "aria-label": k,
            disabled: l,
            onClick: () => v(-1),
            children: /* @__PURE__ */ s(we, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), Se = {
  "dx-colorpicker": "_dx-colorpicker_23q7s_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_23q7s_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_23q7s_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_23q7s_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_23q7s_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_23q7s_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_23q7s_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_23q7s_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_23q7s_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_23q7s_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_23q7s_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_23q7s_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_23q7s_133",
  "dx-saturation-picker": "_dx-saturation-picker_23q7s_138",
  "dx-hue-picker": "_dx-hue-picker_23q7s_149",
  "dx-alpha-picker": "_dx-alpha-picker_23q7s_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_23q7s_155",
  "dx-hue-indicator": "_dx-hue-indicator_23q7s_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_23q7s_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_23q7s_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_23q7s_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_23q7s_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_23q7s_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_23q7s_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_23q7s_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_23q7s_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_23q7s_300"
}, ix = [
  "#ff2800",
  "#fe9300",
  "#fefb00",
  "#02f900",
  "#00fdff",
  "#0433ff",
  "#ff40ff",
  "#942292",
  "#aa7942",
  "#ffffff",
  "#000000",
  "#53d5fd",
  "#73a7fe",
  "#874efe",
  "#d357fe",
  "#ed719e",
  "#ff8c82",
  "#ffa57d",
  "#ffc677",
  "#fff995",
  "#ebf38f",
  "#b1dd8c"
];
function Ct(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function zs(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((r) => r + r).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function cx({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function dx({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, a = n / 255, d = Math.max(r, l, a), o = Math.min(r, l, a), i = d - o;
  let c = 0;
  return i !== 0 && (d === r ? c = (l - a) / i % 6 : d === l ? c = (a - r) / i + 2 : c = (r - l) / i + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : i / d,
    v: d
  };
}
function zn({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, a = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, o = 0, i = 0;
  l < 1 ? (d = r, o = a) : l < 2 ? (d = a, o = r) : l < 3 ? (o = r, i = a) : l < 4 ? (o = a, i = r) : l < 5 ? (d = a, i = r) : (d = r, i = a);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((o + c) * 255),
    b: Math.round((i + c) * 255),
    a: 1
  };
}
function ux(e) {
  const t = zs(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: Ct(Number(n[1]), 0, 255),
    g: Ct(Number(n[2]), 0, 255),
    b: Ct(Number(n[3]), 0, 255),
    a: n[4] != null ? Ct(Number(n[4]), 0, 1) : 1
  } : null;
}
function cr({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const Vk = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = ix,
  showButton: a = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: i = !1,
  placeholder: c = "",
  size: u = "md",
  tabIndex: f = 0,
  className: k,
  onChange: b,
  onValueChange: w,
  onOpen: x,
  onClose: g
}) => {
  const _ = ee(null), p = ee(null), y = ee(null), $ = ee(null), m = ee(null), M = Be(), v = ee(null), O = xe(
    () => ux(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [j, D] = X(!1), [A, N] = X(null), h = A ?? O, S = xe(() => dx(h), [h]), L = R(
    (V) => {
      const E = cr(V);
      b?.(E), w?.(E);
    },
    [b, w]
  ), z = R(
    (V, E) => {
      N(V), E && !a && L(V);
    },
    [a, L]
  ), I = R(() => {
    D(!1), N(null), g?.(), p.current?.focus();
  }, [g]), T = R(() => {
    o || (N(O), D(!0), x?.());
  }, [o, O, x]), H = R(() => {
    j ? I() : T();
  }, [j, I, T]), Y = R(
    (V, E) => {
      const F = y.current;
      if (!F) return S;
      const le = F.getBoundingClientRect(), _e = Ct((V - le.left) / le.width, 0, 1), se = Ct(1 - (E - le.top) / le.height, 0, 1);
      return { h: S.h, s: _e, v: se };
    },
    [S]
  ), G = R(
    (V, E) => {
      if (!E) return 0;
      const F = E.getBoundingClientRect();
      return Ct((V - F.left) / F.width, 0, 1);
    },
    []
  ), W = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), v.current = "sat";
    const E = Y(V.clientX, V.clientY);
    z({ ...zn(E), a: h.a }, !0);
  }, te = (V) => {
    if (v.current !== "sat") return;
    V.preventDefault();
    const E = Y(V.clientX, V.clientY);
    z({ ...zn(E), a: h.a }, !0);
  }, re = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), v.current = "hue";
    const E = G(V.clientX, $.current);
    z(
      { ...zn({ ...S, h: E * 360 }), a: h.a },
      !0
    );
  }, ne = (V) => {
    if (v.current !== "hue") return;
    V.preventDefault();
    const E = G(V.clientX, $.current);
    z(
      { ...zn({ ...S, h: E * 360 }), a: h.a },
      !0
    );
  }, q = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), v.current = "alpha";
    const E = G(V.clientX, m.current);
    z({ ...h, a: E }, !0);
  }, ie = (V) => {
    if (v.current !== "alpha") return;
    V.preventDefault();
    const E = G(V.clientX, m.current);
    z({ ...h, a: E }, !0);
  }, J = () => {
    v.current = null;
  }, oe = R(
    (V, E) => {
      const F = {
        h: S.h,
        s: Ct(S.s + V, 0, 1),
        v: Ct(S.v + E, 0, 1)
      };
      z({ ...zn(F), a: h.a }, !0);
    },
    [S, h.a, z]
  ), ce = R(
    (V) => {
      const E = (S.h + V + 360) % 360;
      z({ ...zn({ ...S, h: E }), a: h.a }, !0);
    },
    [S, h.a, z]
  ), ye = R(
    (V) => {
      z({ ...h, a: Ct(h.a + V, 0, 1) }, !0);
    },
    [h, z]
  ), Oe = (V) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), oe(-0.05, 0);
        break;
      case "ArrowRight":
        V.preventDefault(), oe(0.05, 0);
        break;
      case "ArrowUp":
        V.preventDefault(), oe(0, 0.05);
        break;
      case "ArrowDown":
        V.preventDefault(), oe(0, -0.05);
        break;
      case "Escape":
        V.preventDefault(), I();
        break;
    }
  }, Ie = (V, E) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), E === "hue" ? ce(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        V.preventDefault(), E === "hue" ? ce(6) : ye(0.05);
        break;
      case "Escape":
        V.preventDefault(), I();
        break;
    }
  }, ke = (V, E) => {
    if (V === "hex") {
      const se = zs(E);
      se && z({ ...se, a: h.a }, !0);
      return;
    }
    const F = E.replace(/[^\d.]/g, ""), le = Number.parseFloat(F);
    if (Number.isNaN(le)) return;
    if (V === "a") {
      const se = F.includes(".") ? Ct(le, 0, 1) : Ct(le / 100, 0, 1);
      z({ ...h, a: se }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    z(
      { ...h, [V]: Ct(le, 0, _e[V]) },
      !0
    );
  }, Ae = () => {
    A && (L(A), N(null), D(!1), g?.(), p.current?.focus());
  };
  ge(() => {
    if (!j) return;
    const V = (E) => {
      _.current && !_.current.contains(E.target) && I();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [j, I]), ge(() => {
    if (!j) return;
    const V = (E) => {
      E.key === "Escape" && I();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [j, I]);
  const De = u === "xs" ? Se["dx-colorpicker-trigger-xs"] : u === "sm" ? Se["dx-colorpicker-trigger-sm"] : u === "lg" ? Se["dx-colorpicker-trigger-lg"] : u === "xl" ? Se["dx-colorpicker-trigger-xl"] : Se["dx-colorpicker-trigger"], et = cr(h), Qe = cx(h), Pe = { x: S.s * 100, y: (1 - S.v) * 100 }, gt = S.h / 360 * 100, tt = h.a * 100, wt = /* @__PURE__ */ C("div", { className: Se["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Se["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
        },
        onKeyDown: Oe,
        onPointerDown: W,
        onPointerMove: te,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Se["dx-saturation-indicator"],
            style: { left: `${Pe.x}%`, top: `${Pe.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: $,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Se["dx-hue-picker"],
        onKeyDown: (V) => Ie(V, "hue"),
        onPointerDown: re,
        onPointerMove: ne,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Se["dx-hue-indicator"],
            style: { left: `${gt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(tt),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Se["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (V) => Ie(V, "alpha"),
        onPointerDown: q,
        onPointerMove: ie,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Se["dx-alpha-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ C("div", { className: Se["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ C("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Qe,
            onChange: (V) => ke("hex", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: h.r,
            onChange: (V) => ke("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: h.g,
            onChange: (V) => ke("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: h.b,
            onChange: (V) => ke("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(h.a * 100),
            onChange: (V) => ke("a", V.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ s("div", { className: Se["dx-colorpicker-palette"], children: l.map((V) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-swatch"],
        "aria-label": V,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        style: { backgroundColor: V },
        onClick: () => {
          const E = zs(V);
          a ? z({ ...E, a: h.a }, !1) : (N(null), L({ ...E, a: h.a }), D(!1), g?.(), p.current?.focus());
        }
      },
      V
    )) }),
    a && /* @__PURE__ */ s("div", { className: Se["dx-colorpicker-footer"], children: /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-ok"],
        onClick: Ae,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ C(
    "div",
    {
      ref: _,
      className: [
        Se["dx-colorpicker"],
        j ? Se["dx-colorpicker-open"] : null,
        i ? Se["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ C(
          "button",
          {
            ref: p,
            type: "button",
            className: [Se["dx-colorpicker-trigger"], De].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": j,
            "aria-controls": M,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: f,
            onClick: H,
            onKeyDown: (V) => {
              V.key === "Escape" && j && (V.preventDefault(), I());
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: Se["dx-colorpicker-value"],
                  style: { backgroundColor: et },
                  "aria-hidden": "true"
                }
              ),
              c && /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ s("span", { className: Se["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(we, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        j && /* @__PURE__ */ s(
          "div",
          {
            id: M,
            role: "dialog",
            "aria-label": "Choose color",
            className: Se["dx-colorpicker-popup"],
            children: wt
          }
        )
      ]
    }
  );
}, Me = {
  "dx-datepicker": "_dx-datepicker_1ateg_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_1ateg_9",
  "dx-datepicker-input": "_dx-datepicker-input_1ateg_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_1ateg_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_1ateg_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_1ateg_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_1ateg_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_1ateg_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_1ateg_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_1ateg_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_1ateg_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_1ateg_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_1ateg_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_1ateg_161",
  "dx-datepicker-header": "_dx-datepicker-header_1ateg_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_1ateg_175",
  "dx-datepicker-title": "_dx-datepicker-title_1ateg_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_1ateg_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_1ateg_214",
  "dx-datepicker-row": "_dx-datepicker-row_1ateg_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_1ateg_220",
  "dx-datepicker-day": "_dx-datepicker-day_1ateg_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_1ateg_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_1ateg_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_1ateg_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_1ateg_277",
  "dx-datepicker-time": "_dx-datepicker-time_1ateg_283",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_1ateg_292",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_1ateg_298",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_1ateg_303",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_1ateg_307",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_1ateg_327",
  "dx-datepicker-ok": "_dx-datepicker-ok_1ateg_355"
}, fx = 42;
function Dt(e) {
  return String(e).padStart(2, "0");
}
function kt(e) {
  return `${e.year}-${Dt(e.month)}-${Dt(e.day)}`;
}
function _x(e, t) {
  const n = kt(e);
  return t ? `${n} ${Dt(e.hour)}:${Dt(e.minute)}:${Dt(e.second)}` : n;
}
function Es(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), a = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const i = new Date(n, r - 1, l, a, d, o);
  return i.getFullYear() !== n || i.getMonth() !== r - 1 || i.getDate() !== l ? null : { year: n, month: r, day: l, hour: a, minute: d, second: o };
}
function dn() {
  const e = /* @__PURE__ */ new Date();
  return {
    year: e.getFullYear(),
    month: e.getMonth() + 1,
    day: e.getDate(),
    hour: 0,
    minute: 0,
    second: 0
  };
}
function tn(e, t) {
  const n = new Date(
    e.year,
    e.month - 1,
    e.day + t,
    e.hour,
    e.minute,
    e.second
  );
  return {
    year: n.getFullYear(),
    month: n.getMonth() + 1,
    day: n.getDate(),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function cs(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, a = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, a),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function dr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ur = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => Dt(e.year % 100),
  MM: (e) => Dt(e.month),
  M: (e) => String(e.month),
  dd: (e) => Dt(e.day),
  d: (e) => String(e.day),
  HH: (e) => Dt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Dt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Dt(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, px = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], hx = ["y", "M", "d", "H", "m", "s"];
function ds(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", a = 0;
  for (; a < t.length; ) {
    let d = !1;
    for (const i of px)
      if (t.startsWith(i, a)) {
        l += ur[i](e, r, n), a += i.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[a];
    if (hx.includes(o)) {
      l += ur[o](e, r, n), a += 1;
      continue;
    }
    l += o, a += 1;
  }
  return l;
}
const mx = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "y",
  "M",
  "d",
  "H",
  "m",
  "s"
];
function gx(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const i of mx)
      if (t.startsWith(i, l)) {
        o = i;
        break;
      }
    if (o) {
      const i = e.slice(r, r + o.length);
      if (!/^\d+$/.test(i)) return null;
      const c = Number(i);
      switch (o) {
        case "yyyy":
          n.year = c;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + c;
          break;
        case "MM":
        case "M":
          n.month = c;
          break;
        case "dd":
        case "d":
          n.day = c;
          break;
        case "HH":
        case "H":
          n.hour = c;
          break;
        case "mm":
        case "m":
          n.minute = c;
          break;
        case "ss":
        case "s":
          n.second = c;
          break;
      }
      r += o.length, l += o.length;
      continue;
    }
    if (e[r] !== t[l]) return null;
    r += 1, l += 1;
  }
  const a = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (a.month < 1 || a.month > 12 || a.day < 1 || a.day > 31)
    return null;
  const d = new Date(
    a.year,
    a.month - 1,
    a.day,
    a.hour,
    a.minute,
    a.second
  );
  return d.getFullYear() !== a.year || d.getMonth() !== a.month - 1 || d.getDate() !== a.day ? null : a;
}
function Gn(e, t) {
  const n = Es(e);
  return n || gx(e, t);
}
function xx(e, t, n) {
  return t && kt(e) < kt(t) ? t : n && kt(e) > kt(n) ? n : e;
}
const yx = ["hour", "minute", "second"];
function us(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Gk = He(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: a = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: i = !1,
    showButton: c = !0,
    allowClear: u = !1,
    inline: f = !1,
    disabledDates: k,
    locale: b = "en-US",
    onChange: w,
    onValueChange: x,
    onOpen: g,
    onClose: _,
    disabled: p,
    readOnly: y,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: M,
    clearLabel: v,
    tabIndex: O,
    className: j,
    onBlur: D,
    onKeyDown: A,
    ...N
  }, h) {
    const S = ee(null), L = ee(null), z = ee(null), I = ee(null), T = Be(), H = r !== void 0, [Y, G] = X(
      () => l != null ? ds(
        Gn(l, a) ?? dn(),
        a,
        b
      ) : ""
    ), [W, te] = X(!1), [re, ne] = X(null), [q, ie] = X(() => {
      const U = r !== void 0 ? r ?? "" : l ?? "";
      if (U) {
        const de = Gn(U, a);
        if (de) return de;
      }
      return dn();
    }), J = xe(() => d ? Es(d) : null, [d]), oe = xe(() => o ? Es(o) : null, [o]), ce = xe(
      () => new Set(k ?? []),
      [k]
    ), ye = xe(() => {
      const U = H ? r ?? "" : Y;
      return U ? Gn(U, a) : null;
    }, [r, Y, H, a]), Oe = R(
      (U) => {
        const de = kt(U);
        return !!(ce.has(de) || J && de < kt(J) || oe && de > kt(oe));
      },
      [ce, J, oe]
    ), Ie = R(
      (U) => {
        if (!Oe(U)) return U;
        for (let de = 1; de <= 366; de += 1) {
          const Te = tn(U, de);
          if (!Oe(Te)) return Te;
          const qe = tn(U, -de);
          if (!Oe(qe)) return qe;
        }
        return U;
      },
      [Oe]
    ), ke = R(
      (U) => {
        H || G(U ? ds(U, a, b) : "");
        const de = U ? _x(U, i) : "";
        w?.(de), x?.(de);
      },
      [H, a, b, i, w, x]
    ), Ae = R(
      (U) => {
        L.current = U, typeof h == "function" ? h(U) : h && (h.current = U);
      },
      [h]
    ), De = R(() => {
      te(!1), ne(null), _?.(), f || z.current?.focus();
    }, [f, _]), et = R(() => {
      if (p) return;
      const U = ye ?? dn();
      ne(U), ie(Ie(U)), te(!0), g?.();
    }, [p, ye, Ie, g]), Qe = R(() => {
      W ? De() : et();
    }, [W, De, et]), Pe = R((U) => {
      I.current?.querySelector(
        `[data-date="${kt(U)}"]`
      )?.focus();
    }, []), gt = R(
      (U) => {
        if (Oe(U)) return;
        const de = re ?? ye, qe = {
          ...i ? {
            hour: de?.hour ?? 0,
            minute: de?.minute ?? 0,
            second: de?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ne(qe), i || (ke(qe), De());
      },
      [Oe, re, ye, i, ke, De]
    ), tt = R(
      (U, de) => {
        ne((Te) => {
          const qe = Te ?? ye ?? dn(), At = Math.min(U === "hour" ? 23 : 59, Math.max(0, qe[U] + de));
          return { ...qe, [U]: At };
        });
      },
      [ye]
    ), wt = R(
      (U, de) => {
        const Te = de.replace(/\D/g, ""), qe = Te === "" ? 0 : Number(Te), lt = U === "hour" ? 23 : 59;
        ne((At) => ({ ...At ?? ye ?? dn(), [U]: Math.min(lt, qe) }));
      },
      [ye]
    ), V = R(() => {
      re && (ke(re), De());
    }, [re, ke, De]), E = R(() => {
      if (W) return;
      const U = Gn(Y, a);
      ke(U ? xx(U, J, oe) : null);
    }, [W, Y, a, J, oe, ke]), F = (U) => {
      const de = U.target.value;
      H || G(de), W && ne(null);
    }, le = (U) => {
      U.key === "Enter" ? (U.preventDefault(), W ? re && (ke(re), De()) : E()) : U.key === "Escape" ? W && (U.preventDefault(), De()) : U.key === "ArrowDown" && !W ? (U.preventDefault(), et()) : U.key === "Tab" && W && te(!1), A?.(U);
    }, _e = (U) => {
      E(), D?.(U);
    }, se = (U) => {
      let de = null;
      switch (U.key) {
        case "ArrowLeft":
          de = tn(q, -1), U.preventDefault();
          break;
        case "ArrowRight":
          de = tn(q, 1), U.preventDefault();
          break;
        case "ArrowUp":
          de = tn(q, -7), U.preventDefault();
          break;
        case "ArrowDown":
          de = tn(q, 7), U.preventDefault();
          break;
        case "Home":
          de = tn(q, -dr(q)), U.preventDefault();
          break;
        case "End":
          de = tn(q, 6 - dr(q)), U.preventDefault();
          break;
        case "PageUp":
          de = cs(q, U.shiftKey ? -12 : -1), U.preventDefault();
          break;
        case "PageDown":
          de = cs(q, U.shiftKey ? 12 : 1), U.preventDefault();
          break;
        case "Enter":
        case " ":
          U.preventDefault(), gt(q);
          break;
        case "Escape":
          U.preventDefault(), De();
          break;
        case "Tab":
          te(!1);
          break;
      }
      if (de) {
        const Te = Ie(de);
        ie(Te), setTimeout(() => Pe(Te), 0);
      }
    };
    ge(() => {
      if (!W) return;
      const U = (de) => {
        S.current && !S.current.contains(de.target) && De();
      };
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
    }, [W, De]), ge(() => {
      if (!W) return;
      const U = (de) => {
        de.key === "Escape" && De();
      };
      return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
    }, [W, De]);
    const be = () => {
      H || G(""), w?.(""), x?.(""), L.current?.focus();
    }, ze = W && re ? ds(re, a, b) : H ? r ? ds(
      Gn(r, a) ?? dn(),
      a,
      b
    ) : "" : Y, Re = H ? !!r : Y.length > 0, Ge = f || W, ut = { year: q.year, month: q.month }, _n = new Date(ut.year, ut.month - 1, 1).getDay(), Q = {
      year: ut.year,
      month: ut.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Ce = [];
    for (let U = 0; U < fx; U += 1)
      Ce.push(tn(Q, U - _n));
    const nt = re ? kt(re) : ye ? kt(ye) : null, Mt = kt(dn()), $t = `${ut.year}-${Dt(ut.month)}`, Ne = xe(
      () => new Intl.DateTimeFormat(b, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [b]
    ), Ke = new Intl.DateTimeFormat(b, {
      month: "long",
      year: "numeric"
    }).format(new Date(ut.year, ut.month - 1, 1)), ot = Array.from(
      { length: 7 },
      (U, de) => new Intl.DateTimeFormat(b, { weekday: "short" }).format(
        new Date(2021, 0, 3 + de)
      )
    ), Ue = t === "xs" ? Me["dx-datepicker-input--xs"] : t === "sm" ? Me["dx-datepicker-input--sm"] : t === "lg" ? Me["dx-datepicker-input--lg"] : t === "xl" ? Me["dx-datepicker-input--xl"] : Me["dx-datepicker-input--md"], Gt = /* @__PURE__ */ C(
      "div",
      {
        className: Me["dx-datepicker-calendar"],
        "aria-label": m ?? "Date picker",
        children: [
          /* @__PURE__ */ C("div", { className: Me["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Me["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const U = Ie(cs(q, -1));
                  ie(U), setTimeout(() => Pe(U), 0);
                },
                children: /* @__PURE__ */ s(we, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ s("span", { className: Me["dx-datepicker-title"], children: Ke }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Me["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const U = Ie(cs(q, 1));
                  ie(U), setTimeout(() => Pe(U), 0);
                },
                children: /* @__PURE__ */ s(we, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ C(
            "div",
            {
              ref: I,
              role: "grid",
              className: Me["dx-datepicker-grid"],
              onKeyDown: se,
              children: [
                /* @__PURE__ */ s("div", { role: "row", className: Me["dx-datepicker-week-row"], children: ot.map((U) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "columnheader",
                    className: Me["dx-datepicker-weekday"],
                    children: U
                  },
                  U
                )) }),
                Array.from({ length: 6 }, (U, de) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: Me["dx-datepicker-row"],
                    children: Ce.slice(de * 7, de * 7 + 7).map((Te) => {
                      const qe = kt(Te), lt = Oe(Te), At = qe.startsWith($t);
                      return /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": qe,
                          tabIndex: qe === kt(q) ? 0 : -1,
                          "aria-selected": qe === nt || void 0,
                          "aria-disabled": lt || void 0,
                          "aria-label": Ne.format(
                            new Date(Te.year, Te.month - 1, Te.day)
                          ),
                          className: [
                            Me["dx-datepicker-day"],
                            At ? null : Me["dx-datepicker-day--outside"],
                            qe === Mt ? Me["dx-datepicker-day--today"] : null,
                            qe === nt ? Me["dx-datepicker-day--selected"] : null,
                            lt ? Me["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => gt(Te),
                          onFocus: () => ie(Te),
                          children: Te.day
                        },
                        qe
                      );
                    })
                  },
                  de
                ))
              ]
            }
          ),
          i && /* @__PURE__ */ C("div", { className: Me["dx-datepicker-time"], children: [
            yx.map((U) => /* @__PURE__ */ C("label", { className: Me["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Me["dx-datepicker-time-label"], children: us(U) }),
              /* @__PURE__ */ C("div", { className: Me["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Me["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": us(U),
                    value: Dt(
                      (re ?? ye ?? dn())[U]
                    ),
                    onChange: (de) => wt(U, de.target.value),
                    onKeyDown: (de) => {
                      de.key === "ArrowUp" ? (de.preventDefault(), tt(U, 1)) : de.key === "ArrowDown" ? (de.preventDefault(), tt(U, -1)) : de.key === "Enter" && (de.preventDefault(), V());
                    }
                  }
                ),
                /* @__PURE__ */ C("span", { className: Me["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${us(U).toLowerCase()}`,
                      onClick: () => tt(U, 1),
                      children: /* @__PURE__ */ s(we, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${us(U).toLowerCase()}`,
                      onClick: () => tt(U, -1),
                      children: /* @__PURE__ */ s(we, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, U)),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Me["dx-datepicker-ok"],
                onClick: V,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ C(
      "div",
      {
        ref: S,
        className: [
          Me["dx-datepicker"],
          f ? Me["dx-datepicker-inline"] : null,
          j
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ C($e, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: ze,
                disabled: p,
                readOnly: y,
                placeholder: $,
                tabIndex: O,
                role: c ? void 0 : "combobox",
                "aria-label": m ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : Ge,
                "aria-controls": c ? void 0 : T,
                "aria-invalid": n || void 0,
                className: [
                  Me["dx-datepicker-input"],
                  Ue,
                  n ? Me["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: F,
                onKeyDown: le,
                onBlur: _e,
                onClick: () => {
                  c || Qe();
                },
                ...N
              }
            ),
            u && !p && Re && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Me["dx-datepicker-clear"],
                  c ? Me["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": v ?? "Clear",
                onClick: be,
                children: /* @__PURE__ */ s(we, { name: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ s(
              "button",
              {
                ref: z,
                type: "button",
                className: [Me["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": M ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": W,
                "aria-controls": T,
                disabled: p,
                onClick: Qe,
                children: /* @__PURE__ */ s(we, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Ge && /* @__PURE__ */ s(
            "div",
            {
              id: T,
              role: f ? void 0 : "dialog",
              className: f ? void 0 : Me["dx-datepicker-popup"],
              children: Gt
            }
          )
        ]
      }
    );
  }
), un = {
  "dx-rating": "_dx-rating_yg52p_1",
  "dx-rating-item": "_dx-rating-item_yg52p_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_yg52p_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_yg52p_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_yg52p_51",
  "dx-rating-clear": "_dx-rating-clear_yg52p_55",
  "dx-rating-readonly": "_dx-rating-readonly_yg52p_87",
  "dx-rating-disabled": "_dx-rating-disabled_yg52p_96"
}, Yk = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: a = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: i,
  onChange: c,
  onValueChange: u
}) => {
  const [f, k] = X(e), b = R(
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), w = R(
    (p) => {
      c?.(p), u?.(p);
    },
    [c, u]
  ), x = R(
    (p) => {
      n || r || (w(p), k(p));
    },
    [n, r, w]
  ), g = (p) => {
    if (n || r) return;
    const y = f > 0 ? f : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), x(b(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), x(b(y - 1));
        break;
      case "Home":
        p.preventDefault(), x(1);
        break;
      case "End":
        p.preventDefault(), x(t);
        break;
    }
  }, _ = Array.from({ length: t }, (p, y) => y + 1);
  return /* @__PURE__ */ C(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        un["dx-rating"],
        n ? un["dx-rating-readonly"] : null,
        r ? un["dx-rating-disabled"] : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: un["dx-rating-clear"],
            "aria-label": a,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => x(0),
            children: /* @__PURE__ */ s(we, { name: "ban", size: 16 })
          }
        ),
        _.map((p) => {
          const y = p <= e, $ = p === (e > 0 ? e : f);
          return /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${d} ${p}`,
              tabIndex: $ ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                un["dx-rating-item"],
                y ? un["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => x(p),
              onFocus: () => k(p),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: un["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s(we, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: un["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s(we, { name: "star-outline", size: 20 }) })
              ]
            },
            p
          );
        })
      ]
    }
  );
}, bn = {
  "dx-slider": "_dx-slider_x6ptv_1",
  "dx-slider-track": "_dx-slider-track_x6ptv_9",
  "dx-slider-range": "_dx-slider-range_x6ptv_17",
  "dx-slider-handle": "_dx-slider-handle_x6ptv_26",
  "dx-slider-vertical": "_dx-slider-vertical_x6ptv_58",
  "dx-slider-disabled": "_dx-slider-disabled_x6ptv_84"
};
function Ut(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const Zk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: a = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: i = !1,
  label: c = "Value",
  minLabel: u = "Min",
  maxLabel: f = "Max",
  tabIndex: k = 0,
  className: b,
  onChange: w,
  onInput: x,
  onValueChange: g,
  onInputChange: _
}) => {
  const p = ee(null), y = ee(
    null
  ), [$, m] = X(null), M = $ ?? e, v = xe(
    () => Ut(M, r, l),
    [M, r, l]
  ), O = xe(
    () => Ut(d ? t : v, r, l),
    [d, t, v, r, l]
  ), j = xe(
    () => Ut(d ? Math.max(n, O) : v, r, l),
    [d, n, O, v, r, l]
  ), D = R(
    (q) => {
      const ie = l - r;
      return ie <= 0 ? 0 : (Ut(q, r, l) - r) / ie * 100;
    },
    [r, l]
  ), A = R(
    (q, ie) => {
      const J = p.current;
      if (!J) return r;
      const oe = J.getBoundingClientRect();
      let ce;
      o === "vertical" ? ce = 1 - (ie - oe.top) / oe.height : ce = (q - oe.left) / oe.width;
      const ye = r + Ut(ce, 0, 1) * (l - r);
      return a > 0 ? Ut(Math.round(ye / a) * a, r, l) : Ut(ye, r, l);
    },
    [r, l, a, o]
  ), N = R(
    (q) => {
      typeof q == "number" && m(q), w?.(q), g?.(q);
    },
    [w, g]
  ), h = R(
    (q) => {
      typeof q == "number" && m(q), x?.(q), _?.(q);
    },
    [x, _]
  ), S = R(
    (q, ie, J) => {
      const oe = A(ie, J);
      let ce;
      d ? q === "min" ? ce = { min: Math.min(oe, j), max: j } : ce = { min: O, max: Math.max(oe, O) } : ce = oe, h(ce), y.current === null && N(ce);
    },
    [d, A, O, j, h, N]
  ), L = R(
    (q, ie) => {
      const J = (a > 0 ? a : 1) * ie;
      let oe;
      d ? q === "min" ? oe = {
        min: Ut(O + J, r, j),
        max: j
      } : oe = {
        min: O,
        max: Ut(j + J, O, l)
      } : oe = Ut(v + J, r, l), N(oe);
    },
    [d, a, r, l, O, j, v, N]
  ), z = (q, ie) => {
    if (!i)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), L(q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), L(q, 1);
          break;
        case "Home":
          ie.preventDefault(), N(d ? q === "min" ? { min: r, max: j } : { min: O, max: O } : r);
          break;
        case "End":
          ie.preventDefault(), N(d ? q === "min" ? { min: j, max: j } : { min: O, max: l } : l);
          break;
      }
  }, I = (q, ie) => {
    i || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, T = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (q.preventDefault(), S(y.current.key, q.clientX, q.clientY));
  }, H = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (y.current = null, q.preventDefault(), N(d ? { min: O, max: j } : v));
  }, [Y, G] = X(null), W = D(O), te = D(j), re = d ? W : 0, ne = te;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        bn["dx-slider"],
        o === "vertical" ? bn["dx-slider-vertical"] : null,
        i ? bn["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ C("div", { ref: p, className: bn["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: bn["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${re}%`, height: `${ne - re}%` } : { left: `${re}%`, width: `${ne - re}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(O),
            "aria-orientation": o,
            "aria-label": d ? u : c,
            "aria-disabled": i || void 0,
            tabIndex: i || d && Y === "max" ? -1 : k,
            className: bn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${W}% - 8px)` } : { left: `calc(${W}% - 8px)` },
            onKeyDown: (q) => z("min", q),
            onPointerDown: (q) => I("min", q),
            onPointerMove: T,
            onPointerUp: H,
            onFocus: () => G("min")
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(j),
            "aria-orientation": o,
            "aria-label": f,
            "aria-disabled": i || void 0,
            tabIndex: i || Y === "min" ? -1 : k,
            className: bn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (q) => z("max", q),
            onPointerDown: (q) => I("max", q),
            onPointerMove: T,
            onPointerUp: H,
            onFocus: () => G("max")
          }
        )
      ] })
    }
  );
}, We = {
  "dx-timespanpicker": "_dx-timespanpicker_155vn_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_155vn_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_155vn_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_155vn_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_155vn_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_155vn_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_155vn_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_155vn_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_155vn_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_155vn_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_155vn_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_155vn_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_155vn_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_155vn_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_155vn_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_155vn_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_155vn_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_155vn_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_155vn_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_155vn_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_155vn_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_155vn_250"
}, bx = "-10675199.02:48:05.4775808", vx = "10675199.02:48:05.4775808", sn = 86400, rn = 3600, Pt = 60, Os = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, fr = {
  days: sn,
  hours: rn,
  minutes: Pt,
  seconds: 1
}, kx = {
  day: sn,
  hour: rn,
  minute: Pt,
  second: 1
};
function En(e) {
  return String(e).padStart(2, "0");
}
function ts(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((f) => f != null)) return null;
    const o = l[1] != null ? Number(l[1]) : 0, i = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, u = l[4] != null ? Number(l[4]) : 0;
    return n * (o * sn + i * rn + c * Pt + u);
  }
  const a = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (a) {
    const d = a[1] != null ? Number(a[1]) : 0, o = Number(a[2]), i = Number(a[3]), c = a[4] != null ? Number(a[4]) : 0, u = a[5] != null ? +`0.${a[5]}` : 0;
    return o > 23 || i > 59 || c > 59 ? null : n * (d * sn + o * rn + i * Pt + c + u);
  }
  return null;
}
function wx(e) {
  return e.days * sn + e.hours * rn + e.minutes * Pt + e.seconds;
}
function _r(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / sn);
  t %= sn;
  const r = Math.floor(t / rn);
  t %= rn;
  const l = Math.floor(t / Pt), a = Math.round(t % Pt * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: a };
}
function Is(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / Pt) * Pt : t === "hour" ? r = Math.round(r / rn) * rn : t === "day" && (r = Math.round(r / sn) * sn);
  let l = Math.round(r % Pt);
  const a = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / Pt) + a, o = d % 60, i = Math.floor(d / 60), c = i % 24, u = Math.floor(i / 24), f = n ? "-" : "", k = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${k}${En(c)}`;
    case "minute":
      return `${f}${k}${En(c)}:${En(o)}`;
    default:
      return `${f}${k}${En(c)}:${En(o)}:${En(l)}`;
  }
}
function pr(e, t = "second") {
  const n = ts(e);
  return n === null ? "" : Is(n, t);
}
function Ss(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const Jk = He(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: a = bx,
    max: d = vx,
    step: o = "1",
    precision: i = "second",
    showDays: c = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: k = !0,
    allowClear: b = !1,
    inline: w = !1,
    onChange: x,
    onValueChange: g,
    onOpen: _,
    onClose: p,
    disabled: y,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: M,
    clearLabel: v,
    tabIndex: O,
    className: j,
    onBlur: D,
    onKeyDown: A,
    ...N
  }, h) {
    const S = ee(null), L = ee(null), z = ee(null), I = Be(), T = r !== void 0, [H, Y] = X(
      () => l != null ? pr(l, i) : ""
    ), [G, W] = X(!1), [te, re] = X(null), [ne, q] = X(null), ie = xe(
      () => ts(a) ?? -Number.MAX_SAFE_INTEGER,
      [a]
    ), J = xe(
      () => ts(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), oe = xe(() => {
      const Q = Number.parseFloat(o);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [o]), ce = xe(() => {
      const Q = T ? r ?? "" : H;
      return Q ? ts(Q) : null;
    }, [r, H, T]), ye = R(
      (Q) => {
        const Ce = Q === null ? "" : Is(Q, i);
        T || Y(Ce), x?.(Ce), g?.(Ce);
      },
      [T, i, x, g]
    ), Oe = R(
      (Q) => {
        Q && te !== null && ye(te), W(!1), re(null), q(null), p?.(), w || z.current?.focus();
      },
      [w, te, ye, p]
    ), Ie = R(() => {
      y || (re(ce ?? 0), W(!0), _?.());
    }, [y, ce, _]), ke = R(() => {
      G ? Oe(!1) : Ie();
    }, [G, Oe, Ie]), Ae = R(
      (Q, Ce) => {
        re((nt) => {
          const $t = (nt ?? ce ?? 0) + Ce * oe * fr[Q];
          return Ss($t, ie, J);
        });
      },
      [ce, oe, ie, J]
    ), De = R(
      (Q) => {
        const Ce = ne?.[Q];
        if (Ce == null) return;
        const nt = Number.parseFloat(Ce), Mt = Number.isNaN(nt) ? 0 : nt;
        re(($t) => {
          const Ne = $t ?? ce ?? 0, Ke = _r(Ne);
          Ke[Q] = Mt;
          const Ue = (Ne < 0 ? -1 : 1) * wx(Ke);
          return Ss(Ue, ie, J);
        }), q(null);
      },
      [ne, ce, ie, J]
    ), et = (Q, Ce) => {
      q((nt) => ({ ...nt ?? {}, [Q]: Ce }));
    }, Qe = (Q, Ce) => {
      switch (Ce.key) {
        case "ArrowUp":
          Ce.preventDefault(), De(Q), Ae(Q, 1);
          break;
        case "ArrowDown":
          Ce.preventDefault(), De(Q), Ae(Q, -1);
          break;
        case "Home":
          Ce.preventDefault(), De(Q), re(ie);
          break;
        case "End":
          Ce.preventDefault(), De(Q), re(J);
          break;
        case "Enter":
          Ce.preventDefault(), De(Q), Oe(!0);
          break;
      }
    }, Pe = R(() => {
      if (G) return;
      const Q = ts(H);
      ye(Q !== null ? Ss(Q, ie, J) : null);
    }, [G, H, ie, J, ye]), gt = (Q) => {
      T || Y(Q.target.value);
    }, tt = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), G ? Oe(!0) : Pe()) : Q.key === "Escape" && G ? (Q.preventDefault(), Oe(!1)) : Q.key === "ArrowDown" && !G ? (Q.preventDefault(), Ie()) : Q.key === "Tab" && G && W(!1), A?.(Q);
    }, wt = (Q) => {
      Pe(), D?.(Q);
    }, V = () => {
      T || Y(""), x?.(""), g?.(""), L.current?.focus();
    };
    ge(() => {
      if (!G) return;
      const Q = (Ce) => {
        S.current && !S.current.contains(Ce.target) && Oe(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [G, Oe]), ge(() => {
      if (!G) return;
      const Q = (Ce) => {
        Ce.key === "Escape" && Oe(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [G, Oe]), ge(() => {
      if (w && te !== null) {
        const Q = ce;
        (Q === null || Math.abs(te - Q) > 1e-9) && ye(te);
      }
    }, [w, te, ce, ye]);
    const E = R(
      (Q) => {
        L.current = Q, typeof h == "function" ? h(Q) : h && (h.current = Q);
      },
      [h]
    ), F = T ? r ? pr(r, i) : "" : H, le = T ? !!r : H.length > 0, _e = w || G, se = te ?? ce ?? 0, be = _r(se), ze = kx[i], Ge = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => fr[Q] >= ze && (Q === "days" ? c : Q === "hours" ? u : Q === "minutes" ? f : k)
    ), ut = t === "xs" ? We["dx-timespanpicker-input--xs"] : t === "sm" ? We["dx-timespanpicker-input--sm"] : t === "lg" ? We["dx-timespanpicker-input--lg"] : t === "xl" ? We["dx-timespanpicker-input--xl"] : We["dx-timespanpicker-input--md"], _n = /* @__PURE__ */ C("div", { className: We["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: We["dx-timespanpicker-preview"], "aria-live": "polite", children: Is(se, i) }),
      /* @__PURE__ */ s("div", { className: We["dx-timespanpicker-units"], children: Ge.map((Q) => /* @__PURE__ */ C("label", { className: We["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: We["dx-timespanpicker-unit-label"], children: Os[Q] }),
        /* @__PURE__ */ C("span", { className: We["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: We["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ne?.[Q] ?? String(be[Q]),
              onChange: (Ce) => et(Q, Ce.target.value),
              onKeyDown: (Ce) => Qe(Q, Ce),
              onBlur: () => De(Q)
            }
          ),
          /* @__PURE__ */ C("span", { className: We["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Os[Q].toLowerCase()}`,
                onClick: () => {
                  De(Q), Ae(Q, 1);
                },
                children: /* @__PURE__ */ s(we, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Os[Q].toLowerCase()}`,
                onClick: () => {
                  De(Q), Ae(Q, -1);
                },
                children: /* @__PURE__ */ s(we, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ s("div", { className: We["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: We["dx-timespanpicker-ok"],
          onClick: () => Oe(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ C(
      "div",
      {
        ref: S,
        className: [
          We["dx-timespanpicker"],
          w ? We["dx-timespanpicker-inline"] : null,
          j
        ].filter(Boolean).join(" "),
        children: [
          !w && /* @__PURE__ */ C($e, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: E,
                type: "text",
                autoComplete: "off",
                value: F,
                disabled: y,
                placeholder: $,
                tabIndex: O,
                role: "combobox",
                "aria-label": m ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": G,
                "aria-controls": I,
                "aria-invalid": n || void 0,
                className: [
                  We["dx-timespanpicker-input"],
                  ut,
                  n ? We["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: gt,
                onKeyDown: tt,
                onBlur: wt,
                ...N
              }
            ),
            b && !y && le && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: We["dx-timespanpicker-clear"],
                "aria-label": v ?? "Clear",
                onClick: V,
                children: /* @__PURE__ */ s(we, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                ref: z,
                type: "button",
                className: [We["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": M ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": G,
                "aria-controls": I,
                disabled: y,
                onClick: ke,
                children: /* @__PURE__ */ s(we, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ s(
            "div",
            {
              id: I,
              role: w ? void 0 : "dialog",
              "aria-label": m ?? "Time span picker",
              className: w ? void 0 : We["dx-timespanpicker-popup"],
              children: _n
            }
          )
        ]
      }
    );
  }
), $x = "_wrapper_1rhh5_1", Nx = "_cells_1rhh5_8", Ox = "_cell_1rhh5_8", Sx = "_invalid_1rhh5_63", Cx = "_live_1rhh5_73", vn = {
  wrapper: $x,
  cells: Nx,
  cell: Ox,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: Sx,
  live: Cx
};
function hr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Qk = He(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: a = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: i = !1,
    label: c = "Security code",
    liveAnnounce: u = !0,
    className: f,
    "aria-label": k
  }, b) {
    const w = Be(), x = n !== void 0, [g, _] = X(hr(r).join("")), p = x ? hr(n).join("") : g, y = Array.from({ length: t }, (N, h) => p[h] ?? ""), $ = ee([]), [m, M] = X(""), v = (N) => {
      x || _(N), l?.(N);
    }, O = (N) => {
      const h = $.current[N];
      h && !h.disabled && (h.focus(), h.select());
    }, j = (N, h) => {
      const S = h.replace(/\D/g, "").slice(-1), L = p.split("");
      if (S) {
        L[N] = S;
        const z = L.join("").slice(0, t);
        v(z), z.length < t ? O(N + 1) : u && M("Code complete");
      }
    }, D = (N, h) => {
      if (h.key === "Backspace") {
        if (h.preventDefault(), p[N]) {
          const S = p.split("");
          S[N] = "", v(S.join(""));
        } else if (N > 0) {
          const S = p.split("");
          S[N - 1] = "", v(S.join("")), O(N - 1);
        }
      } else h.key === "ArrowLeft" && N > 0 ? (h.preventDefault(), O(N - 1)) : h.key === "ArrowRight" && N < t - 1 ? (h.preventDefault(), O(N + 1)) : h.key === "Home" ? (h.preventDefault(), O(0)) : h.key === "End" && (h.preventDefault(), O(t - 1));
    }, A = (N, h) => {
      h.preventDefault();
      const S = h.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const L = p.split("");
      let z = 0;
      for (let T = 0; T < S.length && N + T < t; T++)
        L[N + T] = S[T] ?? "", z++;
      const I = L.join("");
      v(I), I.length >= t ? u && M("Code complete") : O(N + z);
    };
    return /* @__PURE__ */ C(
      "div",
      {
        className: [vn.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? c,
        "data-invalid": a || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [vn.cells, vn[d]].join(" "), children: y.map((N, h) => /* @__PURE__ */ s(
            "input",
            {
              ref: (S) => {
                $.current[h] = S, h === 0 && b && (typeof b == "function" ? b(S) : b.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: N,
              disabled: i,
              "aria-label": `Digit ${h + 1} of ${t}`,
              "aria-invalid": a && N !== "" ? !0 : void 0,
              autoFocus: o && h === 0,
              className: [
                vn.cell,
                vn[`cell-${d}`],
                a ? vn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => j(h, S.target.value),
              onKeyDown: (S) => D(h, S),
              onPaste: (S) => A(h, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                u && M("");
              }
            },
            h
          )) }),
          u && /* @__PURE__ */ s(
            "span",
            {
              id: `${w}-live`,
              role: "status",
              "aria-live": "polite",
              className: vn.live,
              children: m
            }
          )
        ]
      }
    );
  }
), Dx = "_wrapper_1p09k_1", Mx = "_header_1p09k_7", zx = "_label_1p09k_15", Ex = "_clear_1p09k_22", Ix = "_canvas_1p09k_53", Ax = "_disabled_1p09k_69", In = {
  wrapper: Dx,
  header: Mx,
  label: zx,
  clear: Ex,
  canvas: Ix,
  disabled: Ax
}, ew = He(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: a = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: i,
    height: c = 140,
    disabled: u = !1,
    className: f
  }, k) {
    const b = ee(null), w = ee(!1), x = ee(!1), g = ee({ x: 0, y: 0 });
    ge(() => {
      const v = b.current;
      if (!v) return;
      const O = window.devicePixelRatio || 1, j = Math.round((i ?? v.clientWidth) * O), D = Math.round(c * O);
      (v.width !== j || v.height !== D) && (v.width = j, v.height = D);
      const A = v.getContext("2d");
      if (!A) return;
      A.setTransform(O, 0, 0, O, 0, 0), A.lineWidth = a, A.strokeStyle = l, A.lineCap = "round", A.lineJoin = "round";
      const N = t ?? n;
      if (N) {
        const h = new Image();
        h.onload = () => {
          A.drawImage(h, 0, 0, v.clientWidth, c);
        }, h.src = N;
      }
    }, [t, n, l, a, i, c]);
    const _ = () => {
      const v = b.current;
      if (!v) return;
      const O = v.toDataURL("image/png");
      r?.(O);
    }, p = () => {
      const v = b.current;
      if (!v) return;
      const O = v.getContext("2d");
      O && O.clearRect(0, 0, v.width, v.height), r?.("");
    };
    Ls(k, () => ({
      clear: p,
      toDataURL: (v = "image/png", O) => b.current?.toDataURL(v, O) ?? ""
    }));
    const y = (v) => {
      const O = v.currentTarget.getBoundingClientRect();
      return { x: v.clientX - O.left, y: v.clientY - O.top };
    }, $ = (v) => {
      u || (v.preventDefault(), typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId), w.current = !0, x.current = !1, g.current = y(v));
    }, m = (v) => {
      if (!w.current) return;
      v.preventDefault();
      const O = v.currentTarget.getContext("2d");
      if (!O) return;
      const j = y(v);
      O.beginPath(), O.moveTo(g.current.x, g.current.y), O.lineTo(j.x, j.y), O.stroke(), g.current = j, x.current = !0;
    }, M = (v) => {
      w.current && (v.preventDefault(), w.current = !1, x.current && _());
    };
    return /* @__PURE__ */ C(
      "div",
      {
        className: [
          In.wrapper,
          f,
          u ? In.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ C("div", { className: In.header, children: [
            /* @__PURE__ */ s("span", { className: In.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: In.clear,
                onClick: p,
                disabled: u,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: b,
              role: "img",
              "aria-label": o,
              "aria-disabled": u || void 0,
              style: {
                width: i ? `${i}px` : void 0,
                height: `${c}px`
              },
              className: In.canvas,
              onPointerDown: $,
              onPointerMove: m,
              onPointerUp: M,
              onPointerCancel: M
            }
          )
        ]
      }
    );
  }
), jx = "_wrapper_cdx3b_1", Tx = "_trigger_cdx3b_7", Lx = "_list_cdx3b_35", Px = "_row_cdx3b_44", Rx = "_name_cdx3b_59", Bx = "_size_cdx3b_68", qx = "_progress_cdx3b_74", Fx = "_fill_cdx3b_82", Hx = "_status_cdx3b_99", Kx = "_remove_cdx3b_106", Wt = {
  wrapper: jx,
  trigger: Tx,
  list: Lx,
  row: Px,
  name: Rx,
  size: Bx,
  progress: qx,
  fill: Fx,
  status: Hx,
  remove: Kx
};
function mr(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const tw = He(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: a,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: i,
  chooseText: c = "Upload",
  children: u,
  onProgress: f,
  onComplete: k,
  onError: b
}, w) {
  const x = ee(null), [g, _] = X([]), p = ee(/* @__PURE__ */ new Map()), y = (O, j) => {
    _(
      (D) => D.map((A) => A.file.name === O ? { ...A, ...j } : A)
    );
  }, $ = (O) => {
    if (!t) return;
    const j = new XMLHttpRequest();
    p.current.set(O.file.name, j);
    const D = new FormData();
    if (D.append(r, O.file), j.upload.addEventListener("progress", (A) => {
      if (!A.lengthComputable) return;
      const N = Math.round(A.loaded / A.total * 100);
      y(O.file.name, { state: "uploading", progress: N }), f?.(O.file.name, N);
    }), j.addEventListener("load", () => {
      j.status >= 200 && j.status < 300 ? (y(O.file.name, { state: "complete", progress: 100 }), k?.(O.file.name)) : (y(O.file.name, {
        state: "error",
        message: `HTTP ${j.status}`
      }), b?.(O.file.name, `HTTP ${j.status}`));
    }), j.addEventListener("error", () => {
      y(O.file.name, { state: "error", message: "Network error" }), b?.(O.file.name, "Network error");
    }), a)
      for (const [A, N] of Object.entries(a))
        j.setRequestHeader(A, N);
    j.open("POST", t), j.send(D), y(O.file.name, { state: "uploading", progress: 0 });
  }, m = (O) => {
    if (!O) return;
    const j = [...O], D = [];
    let A = Math.max(0, o - g.length);
    for (const h of j) {
      if (i != null && h.size > i) {
        b?.(
          h.name,
          `File too large (maximum ${mr(i)})`
        );
        continue;
      }
      if (A <= 0) {
        b?.(h.name, `Too many files (maximum ${o})`);
        continue;
      }
      A -= 1, D.push(h);
    }
    const N = D.map((h) => ({
      file: h,
      state: "pending",
      progress: 0
    }));
    _((h) => [...h, ...N]), x.current && (x.current.value = ""), l && N.forEach($);
  }, M = (O) => {
    p.current.get(O)?.abort(), p.current.delete(O), _((D) => D.filter((A) => A.file.name !== O));
  }, v = u ?? /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: Wt.trigger,
      onClick: () => x.current?.click(),
      children: [
        /* @__PURE__ */ s(we, { name: "upload", size: 14 }),
        c
      ]
    }
  );
  return Ls(w, () => ({
    open: () => x.current?.click(),
    upload: () => g.forEach((O) => O.state === "pending" ? $(O) : null)
  })), /* @__PURE__ */ C("div", { className: Wt.wrapper, children: [
    v,
    /* @__PURE__ */ s(
      "input",
      {
        ref: x,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (O) => m(O.target.files)
      }
    ),
    !u && g.length > 0 && /* @__PURE__ */ s("ul", { className: Wt.list, children: g.map(({ file: O, state: j, progress: D, message: A }) => /* @__PURE__ */ C(
      "li",
      {
        className: Wt.row,
        "data-state": j,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: Wt.name, children: O.name }),
          /* @__PURE__ */ s("span", { className: Wt.size, children: mr(O.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: Wt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": D,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: Wt.fill,
                  style: { width: `${D}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: Wt.status, role: "status", children: j === "uploading" ? "Uploading" : j === "complete" ? "Complete" : j === "error" ? A ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Wt.remove,
              "aria-label": `Remove ${O.name}`,
              onClick: () => M(O.name),
              children: /* @__PURE__ */ s(we, { name: "close", size: 14 })
            }
          )
        ]
      },
      O.name
    )) })
  ] });
}), Ux = "_zone_e481w_1", Wx = "_dragging_e481w_23", Xx = "_caption_e481w_28", Vx = "_browse_e481w_40", Gx = "_disabled_e481w_67", Yn = {
  zone: Ux,
  dragging: Wx,
  caption: Xx,
  browse: Vx,
  disabled: Gx
};
function Yx(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith("."))
      return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const r = n.slice(0, -1);
      return e.type.startsWith(r);
    }
    return e.type === n;
  }) : !0;
}
const nw = He(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: a = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: i
  }, c) {
    const u = ee(null), [f, k] = X(!1), b = (p) => {
      if (!p || p.length === 0) return;
      const y = [...p].filter(($) => Yx($, t ?? ""));
      y.length !== 0 && r?.(y);
    }, w = (p) => {
      o || (p.preventDefault(), k(!0));
    }, x = (p) => {
      o || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", k(!0));
    }, g = (p) => {
      o || p.currentTarget.contains(p.relatedTarget) || k(!1);
    }, _ = (p) => {
      o || (p.preventDefault(), k(!1), b(p.dataTransfer.files));
    };
    return Ls(c, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ C(
      "div",
      {
        role: "region",
        "aria-label": l,
        className: [
          Yn.zone,
          f ? Yn.dragging : null,
          o ? Yn.disabled : null,
          i
        ].filter(Boolean).join(" "),
        onDragEnter: w,
        onDragOver: x,
        onDragLeave: g,
        onDrop: _,
        children: [
          /* @__PURE__ */ s("p", { className: Yn.caption, children: f ? a : l }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Yn.browse,
              onClick: () => u.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ s(
            "input",
            {
              ref: u,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (p) => {
                b(p.target.files), p.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), Zx = "_root_mq6fh_1", Jx = "_menubar_mq6fh_5", Qx = "_horizontal_mq6fh_15", ey = "_vertical_mq6fh_20", ty = "_itemWrapper_mq6fh_25", ny = "_item_mq6fh_25", sy = "_disabled_mq6fh_61", ry = "_icon_mq6fh_68", oy = "_text_mq6fh_75", ly = "_caret_mq6fh_79", ay = "_hasChildren_mq6fh_85", iy = "_submenu_mq6fh_94", cy = "_submenuItem_mq6fh_118", dy = "_flyout_mq6fh_155", uy = "_hamburger_mq6fh_175", fy = "_responsive_mq6fh_198", _y = "_mobileOpen_mq6fh_207", Ve = {
  root: Zx,
  menubar: Jx,
  horizontal: Qx,
  vertical: ey,
  itemWrapper: ty,
  item: ny,
  disabled: sy,
  icon: ry,
  text: oy,
  caret: ly,
  hasChildren: ay,
  submenu: iy,
  submenuItem: cy,
  flyout: dy,
  hamburger: uy,
  responsive: fy,
  mobileOpen: _y
}, gs = Pn(null);
function py(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function hy(e, t, n, r, l) {
  const [a, d] = X(n), o = e ? t ?? !1 : a, i = R(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return ge(() => {
    l > 0 && i(!1);
  }, [l]), [o, i];
}
function my({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: Ve.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(we, { name: e, size: 16 })
    }
  ) : null;
}
function Er(e) {
  return mt(e) && e.type === Ir;
}
function Bs({
  itemKey: e,
  props: t
}) {
  const n = fn(gs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: a, disabled: d, template: o } = t, i = xe(
    () => ns.toArray(t.children).filter(mt),
    [t.children]
  ), c = i.length > 0, u = !!d, f = t.open !== void 0, [k, b] = hy(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), w = n.level === 0, x = ee(0), _ = (w && !f ? n.openKey === e : null) ?? k, p = R(
    (z) => {
      w && !f ? n.setOpenKey(z ? e : null) : (b(z), w && n.setOpenKey(null));
    },
    [w, f, n, e, b]
  ), [, y] = X(0);
  ge(() => {
    if (!a) return;
    const z = () => y((I) => I + 1);
    return window.addEventListener("hashchange", z), () => window.removeEventListener("hashchange", z);
  }, [a]);
  const $ = a && !c ? py(a, t.match) : !1, m = R(
    (z) => {
      if (u) {
        z.preventDefault();
        return;
      }
      const I = { text: r, value: l, path: a };
      [n.emit(I), t.onClick?.(I)].includes(!1) && z.preventDefault(), n.closeAll();
    },
    [u, r, l, a, n, t]
  ), M = R(() => {
    if (!u) {
      if (_ && (Date.now() - x.current < 600 || !n.clickToOpen)) {
        x.current = 0;
        return;
      }
      p(!_);
    }
  }, [u, _, p, n.clickToOpen]), v = R(() => {
    !c || u || n.clickToOpen || (x.current = Date.now(), p(!0));
  }, [c, u, n.clickToOpen, p]), O = R(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), j = `${n.baseId}-submenu-${e}`, [D, A] = X(null);
  ge(() => {
    n.closeSignal > 0 && A(null);
  }, [n.closeSignal]);
  const N = xe(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: D,
      setOpenKey: A
    }),
    [n, D]
  ), h = c ? /* @__PURE__ */ s("span", { className: Ve.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    we,
    {
      name: n.flyout && !w ? "chevron-right" : "chevron-down",
      size: 10
    }
  ) }) : null, S = o ?? /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s(
      my,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: Ve.text, children: r }),
    h
  ] });
  if (c) {
    let z = function(I) {
      const T = Array.from(I.currentTarget.children).map((G) => G.querySelector('[role="menuitem"]')).filter(
        (G) => G != null && G.getAttribute("aria-disabled") !== "true" && !G.hasAttribute("disabled")
      ), H = document.activeElement, Y = H ? T.indexOf(H) : -1;
      I.key === "ArrowDown" ? (I.preventDefault(), I.stopPropagation(), (Y === -1 ? T[0] : T[(Y + 1) % T.length])?.focus()) : I.key === "ArrowUp" ? (I.preventDefault(), I.stopPropagation(), (Y === -1 ? T[T.length - 1] : T[(Y - 1 + T.length) % T.length])?.focus()) : I.key === "ArrowRight" ? H?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), I.stopPropagation(), H.getAttribute("aria-expanded") !== "true" && H.click(), document.getElementById(
        H.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (I.key === "ArrowLeft" || I.key === "Escape") && (I.preventDefault(), I.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ C(
      "div",
      {
        className: Ve.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : v,
        onMouseLeave: n.clickToOpen ? void 0 : O,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": w ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": _,
              "aria-controls": j,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                Ve.item,
                u ? Ve.disabled : null,
                Ve.hasChildren
              ].filter(Boolean).join(" "),
              onClick: M,
              children: S
            }
          ),
          _ ? /* @__PURE__ */ s(
            "div",
            {
              id: j,
              role: "menu",
              "aria-label": r,
              className: [
                Ve.submenu,
                n.flyout && !w ? Ve.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: z,
              children: /* @__PURE__ */ s(gs.Provider, { value: N, children: i.map(
                (I, T) => Er(I) ? /* @__PURE__ */ s(
                  Bs,
                  {
                    itemKey: `${e}-${T}`,
                    props: I.props
                  },
                  `${e}-${T}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(Ts, { children: I }, `${e}-custom-${T}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const L = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": $ ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Ve.submenuItem, u ? Ve.disabled : null].filter(Boolean).join(" "),
    onClick: m
  };
  return a && !u ? /* @__PURE__ */ s("div", { className: Ve.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: a, target: t.target, ...L, children: S }) }) : /* @__PURE__ */ s("div", { className: Ve.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: u, ...L, children: S }) });
}
function Ir(e) {
  if (!fn(gs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(Bs, { itemKey: e.text, props: e });
}
function gy({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: a,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: i = "Toggle menu",
  className: c,
  ...u
}) {
  const f = Be(), k = ee(null), b = ee(null), [w, x] = X(null), [g, _] = X(0), [p, y] = X(!1), $ = ee(null), m = R(
    (D) => a?.(D),
    [a]
  ), M = R(() => {
    x(null), _((D) => D + 1);
  }, []);
  ge(() => {
    if (w == null) return;
    const D = (A) => {
      k.current && !k.current.contains(A.target) && M();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [w, M]), ge(() => {
    $.current != null && w === $.current && (document.getElementById(`${f}-submenu-${w}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), $.current = null);
  }, [w, f]);
  const v = xe(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: g,
      emit: m,
      closeAll: M,
      openKey: w,
      setOpenKey: x
    }),
    [f, n, t, g, m, M, w]
  ), O = xe(
    () => ns.toArray(e).filter(mt),
    [e]
  ), j = (D) => {
    const A = b.current;
    if (!A) return;
    const N = Array.from(A.children).map((L) => L.querySelector('[role="menuitem"]')).filter(
      (L) => L != null && !L.hasAttribute("disabled") && L.getAttribute("aria-disabled") !== "true"
    );
    if (w != null) {
      const L = document.getElementById(`${f}-submenu-${w}`);
      if (L) {
        const z = Array.from(
          L.querySelectorAll('[role="menuitem"]')
        ).filter(
          (H) => H.getAttribute("aria-disabled") !== "true" && !H.hasAttribute("disabled")
        ), I = document.activeElement, T = I ? z.indexOf(I) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (T === -1 ? z[0] : z[(T + 1) % z.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (T === -1 ? z[z.length - 1] : z[(T - 1 + z.length) % z.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), M(), d?.(), A.querySelector(`[data-index="${w}"]`)?.focus();
          return;
        }
        if (D.key === "Enter" || D.key === " ") return;
      }
      if (D.key === "Escape") {
        D.preventDefault(), M(), d?.();
        return;
      }
    }
    const h = document.activeElement, S = h ? N.indexOf(h) : -1;
    if (D.key === "ArrowRight") {
      if (D.preventDefault(), N.length === 0) return;
      N[S === -1 ? 0 : (S + 1) % N.length]?.focus();
      return;
    }
    if (D.key === "ArrowLeft") {
      if (D.preventDefault(), N.length === 0) return;
      N[S === -1 ? N.length - 1 : (S - 1 + N.length) % N.length]?.focus();
      return;
    }
    if (D.key === "ArrowDown") {
      if (S >= 0) {
        const L = h?.getAttribute("data-index");
        if (L == null) return;
        A.querySelector(
          `[data-index="${L}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (D.preventDefault(), $.current = L, x(L));
      }
      return;
    }
    if (D.key === "Home") {
      D.preventDefault(), N[0]?.focus();
      return;
    }
    if (D.key === "End") {
      D.preventDefault(), N[N.length - 1]?.focus();
      return;
    }
    if (D.key.length === 1 && !D.ctrlKey && !D.metaKey) {
      const L = N.map((I) => I.textContent ?? ""), z = S === -1 ? 0 : (S + 1) % N.length;
      for (let I = 0; I < N.length; I++) {
        const T = (z + I) % N.length;
        if (L[T]?.toLowerCase().startsWith(D.key.toLowerCase())) {
          D.preventDefault(), N[T]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ C(
    "nav",
    {
      ref: k,
      "aria-label": o,
      className: [
        Ve.root,
        l ? Ve.vertical : Ve.horizontal,
        r ? Ve.responsive : null,
        r && p ? Ve.mobileOpen : null,
        n ? Ve.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": i,
            "aria-expanded": p,
            className: Ve.hamburger,
            onClick: () => y((D) => !D),
            children: /* @__PURE__ */ s(we, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: b,
            role: l ? "menu" : "menubar",
            "aria-label": o,
            className: Ve.menubar,
            onKeyDown: j,
            children: /* @__PURE__ */ s(gs.Provider, { value: v, children: O.map(
              (D, A) => Er(D) ? /* @__PURE__ */ s(
                Bs,
                {
                  itemKey: String(A),
                  props: D.props
                },
                `top-${A}`
              ) : /* @__PURE__ */ s(Ts, { children: D }, `top-custom-${A}`)
            ) })
          }
        )
      ]
    }
  );
}
const xy = "_popup_y9hdw_1", yy = "_menu_y9hdw_22", As = {
  popup: xy,
  menu: yy
}, Ar = Pn(null);
function sw() {
  const e = fn(Ar);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function jr(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ s(Ir, { ...l, children: r ? jr(r) : void 0 }, `${t.text}-${n}`);
  });
}
function by({ state: e, onClose: t }) {
  const n = ee(null), [r, l] = X({ left: e.x, top: e.y });
  Cs(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), ge(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const a = R(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: As.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: As.menu, children: e.options.content ?? /* @__PURE__ */ s(
        gy,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: a,
          onClose: t,
          children: jr(e.options.items ?? [])
        }
      ) })
    }
  );
}
function rw({ children: e }) {
  const [t, n] = X(null), r = R(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (d, o) => {
      d.preventDefault();
      const i = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: i, options: o });
    },
    []
  );
  ge(() => {
    if (!t) return;
    const d = (u) => {
      const f = document.querySelector(`.${As.popup}`);
      f && !f.contains(u.target) && r();
    }, o = (u) => {
      u.key === "Escape" && (u.preventDefault(), r());
    }, i = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", i), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", i), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const a = xe(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ C(Ar.Provider, { value: a, children: [
    e,
    t ? /* @__PURE__ */ s(by, { state: t, onClose: r }) : null
  ] });
}
const vy = "_root_1ezv8_1", ky = "_list_1ezv8_9", wy = "_item_1ezv8_14", $y = "_trigger_1ezv8_18", Ny = "_disabled_1ezv8_45", Oy = "_expanded_1ezv8_52", Sy = "_selected_1ezv8_56", Cy = "_icon_1ezv8_61", Dy = "_text_1ezv8_72", My = "_caret_1ezv8_79", zy = "_open_1ezv8_86", Ey = "_submenu_1ezv8_90", Iy = "_iconOnly_1ezv8_172", Ay = "_stacked_1ezv8_201", dt = {
  root: vy,
  list: ky,
  item: wy,
  trigger: $y,
  disabled: Ny,
  expanded: Oy,
  selected: Sy,
  icon: Cy,
  text: Dy,
  caret: My,
  open: zy,
  submenu: Ey,
  iconOnly: Iy,
  stacked: Ay
}, xs = Pn(null);
function jy() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Ty(e, t) {
  const n = jy(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Ly({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ s("span", { className: dt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: dt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(we, { name: e, size: 16 })
    }
  ) : null;
}
function qs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = fn(xs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: a, path: d, disabled: o } = n, i = xe(
    () => ns.toArray(n.children).filter(mt),
    [n.children]
  ), c = i.length > 0, u = !!o, f = n.match ?? r.match, k = n.expanded !== void 0, [b, w] = X(
    n.defaultExpanded ?? !1
  ), x = k ? n.expanded ?? !1 : b, g = R(
    (T) => {
      k || w(T), n.onExpandedChange?.(T);
    },
    [k, n]
  );
  ge(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && g(!1);
  }, [r.collapseSignal]);
  const _ = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, y] = X(
    n.defaultSelected ?? !1
  ), $ = !_ && d ? Ty(d, f) : !1, m = n.selected ?? (_ ? p : $ || p), [, M] = X(0);
  ge(() => {
    if (!d) return;
    const T = () => M((H) => H + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [d]);
  const v = xe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        g(!0), r.openAncestors();
      }
    }),
    [r, g]
  );
  ge(() => {
    $ && t.length > 0 && v.openAncestors();
  }, []);
  const O = R(
    (T) => {
      if (u) {
        T.preventDefault();
        return;
      }
      const H = { text: l, value: a, path: d };
      [r.emit(H), n.onClick?.(H)].includes(!1) && T.preventDefault(), _ || y(!0), n.onSelectedChange?.(!0);
    },
    [u, l, a, d, r, n, _]
  ), j = R(() => {
    u || (x || r.notifyOpened(e, t), g(!x));
  }, [u, x, r, e, t, g]), D = R(
    (T) => {
      T.key === "Enter" || T.key === " " ? (T.preventDefault(), c ? j() : T.target.click()) : T.key === "Escape" && x ? (T.preventDefault(), g(!1)) : T.key === "ArrowRight" && c && !x ? (T.preventDefault(), r.notifyOpened(e, t), g(!0)) : T.key === "ArrowLeft" && x && (T.preventDefault(), g(!1));
    },
    [c, j, x, g, r, e, t]
  ), A = c && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [dt.caret, x ? dt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(we, { name: "chevron-down", size: 10 })
    }
  ) : null, N = n.template ?? /* @__PURE__ */ C($e, { children: [
    /* @__PURE__ */ s(
      Ly,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: dt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: dt.text, children: l }),
    A
  ] }), h = `${r.baseId}-panel-${e}`, S = `${r.baseId}-trigger-${e}`, L = [
    dt.trigger,
    u ? dt.disabled : null,
    x ? dt.expanded : null,
    m ? dt.selected : null
  ].filter(Boolean).join(" "), z = c ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-expanded": x,
      "aria-controls": h,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: L,
      onClick: j,
      onKeyDown: D,
      children: N
    }
  ) : d && !u ? /* @__PURE__ */ s(
    "a",
    {
      id: S,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": m ? "page" : void 0,
      tabIndex: 0,
      className: L,
      onClick: O,
      onKeyDown: D,
      children: N
    }
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-current": m ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: L,
      onClick: O,
      onKeyDown: D,
      children: N
    }
  ), I = c ? r.renderMode === "server" && !x ? null : /* @__PURE__ */ s(
    "div",
    {
      id: h,
      role: "menu",
      "aria-labelledby": S,
      className: dt.submenu,
      hidden: r.renderMode === "client" && !x ? !0 : void 0,
      children: /* @__PURE__ */ s(xs.Provider, { value: v, children: i.map((T, H) => /* @__PURE__ */ s(
        qs,
        {
          itemKey: `${e}-${H}`,
          ancestors: [...t, e],
          props: T.props
        },
        `${e}-${H}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ C(
    "div",
    {
      className: dt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        z,
        I
      ]
    }
  );
}
function ow(e) {
  if (!fn(xs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(qs, { itemKey: e.text, ancestors: [], props: e });
}
function lw({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: a = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: i,
  ...c
}) {
  const u = Be(), [f, k] = X(0), b = ee(/* @__PURE__ */ new Set()), w = R(
    ($) => d?.($),
    [d]
  ), x = R(
    ($, m) => {
      t || (b.current = /* @__PURE__ */ new Set([$, ...m]), k((M) => M + 1));
    },
    [t]
  ), g = ($) => Array.from(
    $.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (m) => !m.hasAttribute("disabled") && m.getAttribute("aria-disabled") !== "true" && m.closest("[hidden]") == null
  ), _ = ($) => {
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "ArrowDown" || $.key === "ArrowUp") {
        const m = $.target, M = g($.currentTarget), v = M.indexOf(m);
        if (v === -1) return;
        $.preventDefault();
        const O = $.key === "ArrowDown" ? 1 : -1;
        M[(v + O + M.length) % M.length]?.focus();
      } else if ($.key === "Home" || $.key === "End") {
        const m = g($.currentTarget);
        $.preventDefault(), ($.key === "Home" ? m[0] : m[m.length - 1])?.focus();
      }
    }
  }, p = xe(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: a,
      match: l,
      level: 0,
      collapseSignal: f,
      collapseSkipRef: b,
      emit: w,
      notifyOpened: x,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      n,
      r,
      a,
      l,
      f,
      w,
      x
    ]
  ), y = xe(
    () => ns.toArray(e).filter(mt),
    [e]
  );
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [
        dt.root,
        n === "icon" ? dt.iconOnly : null,
        n === "stacked" ? dt.stacked : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      ...c,
      children: /* @__PURE__ */ s("div", { className: dt.list, role: "presentation", children: /* @__PURE__ */ s(xs.Provider, { value: p, children: y.map(($, m) => /* @__PURE__ */ s(
        qs,
        {
          itemKey: String(m),
          ancestors: [],
          props: $.props
        },
        `top-${m}`
      )) }) })
    }
  );
}
const Py = "_root_1bbxp_1", Ry = "_trigger_1bbxp_7", By = "_defaultTrigger_1bbxp_40", qy = "_avatar_1bbxp_46", Fy = "_menu_1bbxp_58", Hy = "_item_1bbxp_74", Ky = "_disabled_1bbxp_88", Uy = "_active_1bbxp_97", Wy = "_icon_1bbxp_107", Xy = "_text_1bbxp_114", Xt = {
  root: Py,
  trigger: Ry,
  defaultTrigger: By,
  avatar: qy,
  menu: Fy,
  item: Hy,
  disabled: Ky,
  active: Uy,
  icon: Wy,
  text: Xy
};
function aw({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const a = Be(), d = `${a}-menu`, o = ee(null), i = ee(null), [c, u] = X(!1), [f, k] = X(-1), b = t, w = e.map((m, M) => m.disabled ? -1 : M).filter((m) => m >= 0), x = R(
    (m) => {
      if (m.disabled) return;
      const M = {
        text: m.text,
        path: m.path
      };
      n?.(M), u(!1), i.current?.focus();
    },
    [n]
  ), g = R(() => {
    k(w[0] ?? -1), u(!0);
  }, [w]), _ = R(() => {
    u(!1), k(-1), i.current?.focus();
  }, []);
  ge(() => {
    if (!c) return;
    const m = (M) => {
      o.current && !o.current.contains(M.target) && (u(!1), k(-1));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [c]), ge(() => {
    if (!c) return;
    const m = (M) => {
      M.key === "Escape" && (M.preventDefault(), _());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [c, _]);
  const p = (m) => {
    if (w.length === 0) return;
    const M = w.indexOf(f), v = M === -1 ? 0 : (M + m + w.length) % w.length, O = w[v];
    O != null && k(O);
  }, y = (m) => {
    if (!c) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), g());
      return;
    }
    switch (m.key) {
      case "Escape":
        m.preventDefault(), _();
        break;
      case "ArrowDown":
        m.preventDefault(), p(1);
        break;
      case "ArrowUp":
        m.preventDefault(), p(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && k(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && k(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), f >= 0) {
          const M = e[f];
          M && !M.disabled && x(M);
        }
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  }, $ = (m) => {
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), p(1);
        break;
      case "ArrowUp":
        m.preventDefault(), p(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && k(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && k(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), f >= 0) {
          const M = e[f];
          M && !M.disabled && x(M);
        }
        break;
      case "Escape":
        m.preventDefault(), _();
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: [Xt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ C("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: i,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: Xt.trigger,
            onClick: () => c ? _() : g(),
            onKeyDown: y,
            children: b ?? /* @__PURE__ */ C("span", { className: Xt.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: Xt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        c ? /* @__PURE__ */ s(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": f >= 0 ? `${a}-item-${f}` : void 0,
            className: Xt.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((m, M) => {
              const v = !!m.disabled, O = M === f;
              return /* @__PURE__ */ C(
                "div",
                {
                  id: `${a}-item-${M}`,
                  role: "menuitem",
                  "aria-disabled": v || void 0,
                  tabIndex: v ? -1 : 0,
                  className: [
                    Xt.item,
                    O ? Xt.active : null,
                    v ? Xt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    v || x(m);
                  },
                  onMouseEnter: () => {
                    v || k(M);
                  },
                  children: [
                    m.icon ? /* @__PURE__ */ s("span", { className: Xt.icon, "aria-hidden": "true", children: m.icon }) : null,
                    /* @__PURE__ */ s("span", { className: Xt.text, children: m.text })
                  ]
                },
                `${m.text}-${M}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Vy = "_root_1dgrt_1", Gy = "_bottomRight_1dgrt_11", Yy = "_bottomLeft_1dgrt_16", Zy = "_topRight_1dgrt_21", Jy = "_topLeft_1dgrt_26", Qy = "_menu_1dgrt_31", eb = "_itemWrapper_1dgrt_48", tb = "_tooltip_1dgrt_54", nb = "_main_1dgrt_76", sb = "_mainIcon_1dgrt_104", rb = "_mainOpen_1dgrt_109", ob = "_item_1dgrt_48", lb = "_disabled_1dgrt_141", ab = "_itemIcon_1dgrt_148", yt = {
  root: Vy,
  bottomRight: Gy,
  bottomLeft: Yy,
  topRight: Zy,
  topLeft: Jy,
  menu: Qy,
  itemWrapper: eb,
  tooltip: tb,
  main: nb,
  mainIcon: sb,
  mainOpen: rb,
  item: ob,
  disabled: lb,
  itemIcon: ab
};
function iw({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: a
}) {
  const d = t ?? "bottom-right", i = `${Be()}-menu`, c = ee(null), u = ee(null), [f, k] = X(!1), b = R(
    (_) => {
      if (_.disabled) return;
      const p = { text: _.text, value: _.value };
      r?.(p), k(!1), u.current?.focus();
    },
    [r]
  );
  ge(() => {
    if (!f) return;
    const _ = (p) => {
      c.current && !c.current.contains(p.target) && k(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [f]), ge(() => {
    if (!f) return;
    const _ = (p) => {
      p.key === "Escape" && (k(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [f]);
  const w = d === "bottom-right" ? yt.bottomRight : d === "bottom-left" ? yt.bottomLeft : d === "top-right" ? yt.topRight : yt.topLeft, x = (_) => {
    !f && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), k(!0)) : f && _.key === "Escape" && (_.preventDefault(), k(!1));
  }, g = (_) => {
    _.key === "Escape" && (_.preventDefault(), k(!1), u.current?.focus());
  };
  return /* @__PURE__ */ C(
    "div",
    {
      ref: c,
      className: [yt.root, w, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ s(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            className: yt.menu,
            onKeyDown: g,
            children: e.map((_, p) => {
              const y = !!_.disabled;
              return /* @__PURE__ */ C("div", { className: yt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: yt.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": y || void 0,
                    title: _.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [yt.item, y ? yt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => b(_),
                    children: /* @__PURE__ */ s("span", { className: yt.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${p}`);
            })
          }
        ) : null,
        /* @__PURE__ */ s(
          "button",
          {
            ref: u,
            type: "button",
            className: yt.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": l,
            onClick: () => k((_) => !_),
            onKeyDown: x,
            children: /* @__PURE__ */ s(
              "span",
              {
                "aria-hidden": "true",
                className: [yt.mainIcon, f ? yt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const ib = "_root_1nu0o_1", cb = "_list_1nu0o_5", db = "_item_1nu0o_15", ub = "_link_1nu0o_22", fb = "_linkButton_1nu0o_23", _b = "_current_1nu0o_24", pb = "_disabled_1nu0o_68", hb = "_icon_1nu0o_74", mb = "_text_1nu0o_81", gb = "_separator_1nu0o_85", Xe = {
  root: ib,
  list: cb,
  item: db,
  link: ub,
  linkButton: fb,
  current: _b,
  disabled: pb,
  icon: hb,
  text: mb,
  separator: gb
};
function cw({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, a = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [Xe.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: Xe.list, children: e.map((d, o) => {
        const i = o === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ C("li", { className: Xe.item, children: [
          i ? c ? /* @__PURE__ */ C(
            "span",
            {
              className: [Xe.current, Xe.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Xe.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ C(
            "a",
            {
              href: d.path,
              className: Xe.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), a(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Xe.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Xe.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ C(
            "span",
            {
              className: Xe.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Xe.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : c ? /* @__PURE__ */ C(
            "span",
            {
              className: [Xe.link, Xe.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Xe.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Xe.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ C(
            "a",
            {
              href: d.path,
              className: Xe.link,
              onClick: (u) => {
                u.preventDefault(), a(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Xe.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Xe.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              className: Xe.linkButton,
              tabIndex: 0,
              onClick: () => a(d),
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Xe.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Xe.text, children: d.text })
              ]
            }
          ),
          i ? null : /* @__PURE__ */ s("span", { className: Xe.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const xb = "_link_6vrgp_1", yb = {
  link: xb
}, dw = He(function({ children: t, icon: n, visible: r = !0, className: l, ...a }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ C($e, { children: [
    n != null && /* @__PURE__ */ s(we, { name: n, "aria-hidden": "true" }),
    t
  ] }), i = [yb.link, l].filter(Boolean).join(" ");
  if (a.href != null) {
    const { href: u, ...f } = a;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: d,
        className: i,
        href: u,
        ...f,
        children: o
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: d,
      type: "button",
      className: i,
      ...a,
      children: o
    }
  );
}), bb = "_root_1w5vx_1", vb = "_list_1w5vx_5", kb = "_item_1w5vx_15", wb = "_connector_1w5vx_21", $b = "_connectorCompleted_1w5vx_30", Nb = "_step_1w5vx_34", Ob = "_active_1w5vx_69", Sb = "_completed_1w5vx_75", Cb = "_circle_1w5vx_79", Db = "_check_1w5vx_109", Mb = "_icon_1w5vx_114", zb = "_number_1w5vx_119", Eb = "_text_1w5vx_124", bt = {
  root: bb,
  list: vb,
  item: kb,
  connector: wb,
  connectorCompleted: $b,
  step: Nb,
  active: Ob,
  completed: Sb,
  circle: Cb,
  check: Db,
  icon: Mb,
  number: zb,
  text: Eb
};
function uw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: a,
  onChange: d,
  Change: o,
  onSelectedIndexChange: i,
  ariaLabel: c = "Steps",
  className: u
}) {
  const f = l ?? a ?? !1, k = t ?? n, b = k !== void 0, [w, x] = X(() => Math.min(Math.max(0, k ?? r), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, b ? k : w),
    Math.max(0, e.length - 1)
  ), p = ee(null), y = R(
    (M) => {
      const v = Math.min(
        Math.max(0, M),
        Math.max(0, e.length - 1)
      );
      b || x(v), (d ?? o ?? i)?.(v);
    },
    [b, d, o, i, e.length]
  ), $ = R(
    (M, v) => !!(v.disabled || f && M > _ + 1),
    [f, _]
  ), m = (M) => {
    const v = Array.from(
      M.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), O = document.activeElement, j = O ? v.indexOf(O) : -1;
    if (M.key === "ArrowRight" || M.key === "ArrowDown") {
      if (M.preventDefault(), v.length === 0) return;
      const D = j === -1 ? 0 : (j + 1) % v.length, A = v[D];
      A && A.focus();
    } else if (M.key === "ArrowLeft" || M.key === "ArrowUp") {
      if (M.preventDefault(), v.length === 0) return;
      const D = j === -1 ? v.length - 1 : (j - 1 + v.length) % v.length, A = v[D];
      A && A.focus();
    } else M.key === "Home" ? (M.preventDefault(), v[0]?.focus()) : M.key === "End" && (M.preventDefault(), v[v.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": c,
      className: [bt.root, u].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ s("ol", { ref: p, role: "list", className: bt.list, children: e.map((M, v) => {
        const O = v === _, j = v < _, D = $(v, M);
        return /* @__PURE__ */ C(
          "li",
          {
            role: "listitem",
            className: bt.item,
            children: [
              v > 0 ? /* @__PURE__ */ s(
                "span",
                {
                  className: [
                    bt.connector,
                    j ? bt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ C(
                "button",
                {
                  type: "button",
                  "data-step": v,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": D ? "true" : void 0,
                  disabled: D,
                  tabIndex: D ? -1 : 0,
                  className: [
                    bt.step,
                    O ? bt.active : null,
                    j ? bt.completed : null,
                    D ? bt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || y(v);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: bt.circle, "aria-hidden": "true", children: j ? /* @__PURE__ */ s("span", { className: bt.check, "aria-hidden": "true", children: /* @__PURE__ */ s(we, { name: "check", size: "sm" }) }) : M.icon ? /* @__PURE__ */ s("span", { className: bt.icon, children: M.icon }) : /* @__PURE__ */ s("span", { className: bt.number, children: v + 1 }) }),
                    /* @__PURE__ */ s("span", { className: bt.text, children: M.text })
                  ]
                }
              )
            ]
          },
          `${M.text}-${v}`
        );
      }) })
    }
  );
}
const Ib = "_root_1np74_1", Ab = "_horizontal_1np74_13", jb = "_vertical_1np74_17", Tb = "_pane_1np74_21", Lb = "_handle_1np74_31", Pb = "_handleHorizontal_1np74_51", Rb = "_handleVertical_1np74_57", Bb = "_handleGrip_1np74_63", qb = "_handleCollapseHint_1np74_75", Fb = "_collapseBtn_1np74_79", Hb = "_collapseBtnCollapsed_1np74_109", Et = {
  root: Ib,
  horizontal: Ab,
  vertical: jb,
  pane: Tb,
  handle: Lb,
  handleHorizontal: Pb,
  handleVertical: Rb,
  handleGrip: Bb,
  handleCollapseHint: qb,
  collapseBtn: Fb,
  collapseBtnCollapsed: Hb
};
function Zn(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const l = parseFloat(n.slice(0, -1));
    return Number.isNaN(l) ? t : l;
  }
  if (n.endsWith("px")) {
    const l = parseFloat(n.slice(0, -2));
    return Number.isNaN(l) ? t : l;
  }
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function nn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function fw({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: a,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: i
}) {
  const c = e ?? t ?? "horizontal", u = c === "horizontal", f = ee(null), k = R(() => {
    const h = n.length;
    if (h === 0) return [];
    const S = n.map((z) => z.size ? Zn(z.size, 100 / h) : 100 / h), L = S.reduce((z, I) => z + I, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? S.map((z) => z / L * 100) : S;
  }, [n]), [b, w] = X(() => k()), [x, g] = X(
    () => n.map((h) => !!h.collapsed)
  ), _ = ee(b);
  ge(() => {
    g(n.map((h) => !!h.collapsed));
  }, [n]);
  const p = R(
    () => n.map((h) => Zn(h.min, 0)),
    [n]
  ), y = R(
    () => n.map((h) => Zn(h.max, 100)),
    [n]
  ), $ = R(
    (h, S) => {
      const L = { paneIndex: h, newSize: S, cancel: !1 };
      return (r ?? l)?.(L), !L.cancel;
    },
    [r, l]
  ), m = R(
    (h, S) => {
      const L = { paneIndex: h, collapse: S, cancel: !1 };
      return (a ?? d)?.(L), !L.cancel;
    },
    [a, d]
  ), M = R(
    (h) => {
      const S = !x[h];
      m(h, S) && (S ? (_.current = [...b], g((L) => {
        const z = [...L];
        return z[h] !== void 0 && (z[h] = !0), z;
      }), w((L) => {
        const z = [...L], I = z[h] ?? 0, T = h < z.length - 1 ? h + 1 : h - 1;
        if (T >= 0 && T < z.length) {
          const H = z[T] ?? 0;
          z[T] = H + I, z[h] = 0;
        } else
          z[h] = 0;
        return z;
      })) : (g((L) => {
        const z = [...L];
        return z[h] !== void 0 && (z[h] = !1), z;
      }), w(() => {
        const L = [..._.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [x, b, n.length, m]
  ), v = ee(
    null
  ), O = R(
    (h, S, L) => {
      const z = f.current;
      if (!z) return null;
      const I = z.getBoundingClientRect();
      let T;
      if (u) {
        if (I.width === 0) return null;
        T = (S - I.left) / I.width * 100;
      } else {
        if (I.height === 0) return null;
        T = (L - I.top) / I.height * 100;
      }
      let H = 0;
      for (let G = 0; G < h; G++) {
        const W = b[G];
        W !== void 0 && (H += W);
      }
      return T - H;
    },
    [u, b]
  ), j = (h, S) => {
    S.preventDefault();
    const L = S.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(S.pointerId), v.current = { handleIndex: h, pointerId: S.pointerId };
  }, D = (h) => {
    if (!v.current || v.current.pointerId !== h.pointerId)
      return;
    h.preventDefault();
    const S = v.current.handleIndex, L = O(S, h.clientX, h.clientY);
    if (L == null) return;
    const z = p(), I = y(), T = z[S] ?? 0, H = I[S] ?? 100, Y = S + 1, G = z[Y] ?? 0, W = I[Y] ?? 100, te = b[S] ?? 0, re = b[Y] ?? 0, ne = te + re;
    if (ne <= 0) return;
    let q = nn(L, T, H), ie = ne - q;
    if (ie < G) {
      if (ie = G, q = ne - ie, q < T || q > H) return;
    } else if (ie > W && (ie = W, q = ne - ie, q < T || q > H))
      return;
    q = nn(q, T, H), ie = ne - q, $(S, q) && w((J) => {
      const oe = [...J];
      return oe[S] = q, oe[Y] = ie, oe;
    });
  }, A = (h) => {
    !v.current || v.current.pointerId !== h.pointerId || (v.current = null);
  }, N = (h, S) => {
    const L = p(), z = y(), I = h, T = h + 1, H = b[I] ?? 0, Y = b[T] ?? 0, G = H + Y;
    let W = 0;
    const te = !!n[I]?.collapsible, re = !!n[T]?.collapsible;
    if (u ? S.key === "ArrowLeft" ? W = -5 : S.key === "ArrowRight" && (W = 5) : S.key === "ArrowUp" ? W = -5 : S.key === "ArrowDown" && (W = 5), S.key === "Home") {
      S.preventDefault();
      let ne = L[I] ?? 0, q = G - ne;
      if (q = nn(
        q,
        L[T] ?? 0,
        z[T] ?? 100
      ), ne = G - q, ne = nn(ne, L[I] ?? 0, z[I] ?? 100), !$(I, ne)) return;
      w((ie) => {
        const J = [...ie];
        return J[I] = ne, J[T] = q, J;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let ne = z[I] ?? 100;
      ne = Math.min(ne, G - (L[T] ?? 0));
      let q = G - ne;
      if (q = nn(
        q,
        L[T] ?? 0,
        z[T] ?? 100
      ), ne = G - q, ne = nn(ne, L[I] ?? 0, z[I] ?? 100), !$(I, ne)) return;
      w((ie) => {
        const J = [...ie];
        return J[I] = ne, J[T] = q, J;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (te || re)) {
      S.preventDefault(), M(te ? I : T);
      return;
    }
    if (W !== 0) {
      S.preventDefault();
      let ne = H + W, q = G - ne;
      const ie = L[I] ?? 0, J = z[I] ?? 100, oe = L[T] ?? 0, ce = z[T] ?? 100;
      if (ne = nn(ne, ie, J), q = G - ne, (q < oe || q > ce) && (q = nn(q, oe, ce), ne = G - q, ne = nn(ne, ie, J), q = G - ne), !$(I, ne)) return;
      w((ye) => {
        const Oe = [...ye];
        return Oe[I] = ne, Oe[T] = q, Oe;
      });
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: f,
      className: [
        Et.root,
        u ? Et.horizontal : Et.vertical,
        i
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((h, S) => {
        const L = !!x[S], z = L ? 0 : b[S] ?? 100 / n.length, I = L ? { display: "none" } : u ? {
          flexBasis: `${z}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${z}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, T = Zn(h.min, 0), H = Zn(h.max, 100), Y = S < n.length - 1, G = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ C("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ C(
            "div",
            {
              role: "group",
              "aria-label": h.label ?? `Pane ${S + 1}`,
              className: Et.pane,
              style: I,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : h.children,
                h.collapsible && !L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Et.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => M(S),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                h.collapsible && L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Et.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => M(S),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && h.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Et.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => M(S),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          Y ? /* @__PURE__ */ C(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": T,
              "aria-valuemax": H,
              "aria-valuenow": Math.round(z),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: L || x[S + 1] ? -1 : 0,
              className: [
                Et.handle,
                u ? Et.handleHorizontal : Et.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (W) => j(S, W),
              onPointerMove: D,
              onPointerUp: A,
              onKeyDown: (W) => N(S, W),
              children: [
                /* @__PURE__ */ s("span", { className: Et.handleGrip, "aria-hidden": "true" }),
                (h.collapsible || G) && /* @__PURE__ */ s(
                  "span",
                  {
                    className: Et.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, S);
      })
    }
  );
}
const Kb = "_root_wurjl_1", Ub = "_list_wurjl_5", Wb = "_vertical_wurjl_14", Xb = "_horizontal_wurjl_20", Vb = "_item_wurjl_28", Gb = "_link_wurjl_32", Yb = "_active_wurjl_57", An = {
  root: Kb,
  list: Ub,
  vertical: Wb,
  horizontal: Xb,
  item: Vb,
  link: Gb,
  active: Yb
};
function _w({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: a,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: i
}) {
  const c = t ?? n, u = r ?? l ?? "vertical", [f, k] = X(
    () => e[0]?.selector ?? null
  ), b = ee(f);
  b.current = f;
  const w = R(
    (x, g) => {
      if (k(x.selector), (a ?? d)?.({ text: x.text, selector: x.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const p = g;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [a, d]
  );
  return ge(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (c) {
        const m = document.querySelector(c);
        if (m) return m;
      }
      return window;
    })();
    let _ = null;
    const p = /* @__PURE__ */ new Map(), y = () => {
      let m = null, M = null;
      for (const O of e) {
        const j = document.querySelector(O.selector);
        if (!j) continue;
        p.set(O.selector, j);
        const D = j.getBoundingClientRect();
        let A = D.top;
        if (g !== window) {
          const N = g.getBoundingClientRect();
          A = D.top - N.top;
        }
        A <= 80 ? (!M || A > M.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (M = { sel: O.selector, el: j }) : (!m || A < m.top) && (m = { sel: O.selector, top: A });
      }
      const v = M?.sel ?? m?.sel ?? e[0]?.selector ?? null;
      v && v !== b.current && k(v);
    }, $ = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const m = g === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: g,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver((M) => {
        const v = M.filter((O) => O.isIntersecting).sort((O, j) => O.boundingClientRect.top - j.boundingClientRect.top);
        if (v[0]) {
          const O = v[0].target;
          for (const j of e) {
            if (document.querySelector(j.selector) === O) {
              k(j.selector);
              break;
            }
            if (j.selector.startsWith("#") && O.id === j.selector.slice(1)) {
              k(j.selector);
              break;
            }
          }
        } else
          y();
      }, m);
      for (const M of e) {
        const v = document.querySelector(M.selector);
        v && (_.observe(v), p.set(M.selector, v));
      }
    }
    return g === window ? (window.addEventListener("scroll", $, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", $), _?.disconnect();
    }) : (g.addEventListener("scroll", $, {
      passive: !0
    }), y(), () => {
      g.removeEventListener("scroll", $), _?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [An.root, An[u], i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: An.list, children: e.map((x) => {
        const g = x.selector === f;
        return /* @__PURE__ */ s("li", { className: An.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: x.selector.startsWith("#") || x.selector.startsWith(".") ? x.selector : `#${x.selector}`,
            className: [An.link, g ? An.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const p = document.querySelector(x.selector);
              w(x, p);
            },
            children: x.text
          }
        ) }, `${x.text}-${x.selector}`);
      }) })
    }
  );
}
const Zb = "_root_u1med_1", Jb = "_viewport_u1med_17", Qb = "_slide_u1med_24", e2 = "_active_u1med_33", t2 = "_arrow_u1med_37", n2 = "_prev_u1med_71", s2 = "_next_u1med_75", r2 = "_pauseBtn_u1med_79", o2 = "_indicators_u1med_110", l2 = "_indicator_u1med_110", a2 = "_indicatorActive_u1med_145", It = {
  root: Zb,
  viewport: Jb,
  slide: Qb,
  active: e2,
  arrow: t2,
  prev: n2,
  next: s2,
  pauseBtn: r2,
  indicators: o2,
  indicator: l2,
  indicatorActive: a2
};
function pw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: a,
  interval: d,
  Interval: o,
  pauseOnHover: i,
  PauseOnHover: c,
  showArrows: u,
  ShowArrows: f,
  showIndicators: k,
  ShowIndicators: b,
  onChange: w,
  Change: x,
  ariaLabel: g = "Carousel",
  className: _
}) {
  const p = t ?? n, y = p !== void 0, [$, m] = X(() => Math.min(Math.max(0, p ?? r), Math.max(0, e.length - 1))), M = y ? p : $, v = e.length === 0 ? 0 : Math.min(Math.max(0, M), e.length - 1), O = l ?? a ?? !1, j = d ?? o ?? 3e3, D = i ?? c ?? !0, A = u ?? f ?? !0, N = k ?? b ?? !0, [h, S] = X(!1), [L, z] = X(!1), I = h || L, T = ee(null), H = Be(), Y = R(
    (oe) => {
      const ce = e.length === 0 ? 0 : (oe % e.length + e.length) % e.length;
      y || m(ce), (w ?? x)?.(ce);
    },
    [y, w, x, e.length]
  ), G = R(() => {
    Y(v - 1);
  }, [Y, v]), W = R(() => {
    Y(v + 1);
  }, [Y, v]), te = R(
    (oe) => {
      Y(oe);
    },
    [Y]
  );
  ge(() => {
    if (!O || I || e.length <= 1) return;
    const oe = setInterval(() => {
      Y(v + 1);
    }, j);
    return () => clearInterval(oe);
  }, [O, I, j, v, Y, e.length]);
  const re = (oe) => {
    e.length !== 0 && (oe.key === "ArrowLeft" ? (oe.preventDefault(), G()) : oe.key === "ArrowRight" ? (oe.preventDefault(), W()) : oe.key === "Home" ? (oe.preventDefault(), te(0)) : oe.key === "End" && (oe.preventDefault(), te(e.length - 1)));
  }, ne = () => {
    D && O && z(!0);
  }, q = () => {
    D && O && z(!1);
  }, ie = () => {
    D && O && z(!0);
  }, J = () => {
    D && O && z(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ C(
    "div",
    {
      ref: T,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [It.root, _].filter(Boolean).join(" "),
      onKeyDown: re,
      onMouseEnter: ne,
      onMouseLeave: q,
      onFocusCapture: ie,
      onBlurCapture: J,
      children: [
        /* @__PURE__ */ s("div", { id: H, className: It.viewport, children: e.map((oe, ce) => {
          const ye = ce === v;
          return /* @__PURE__ */ s(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ce + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [It.slide, ye ? It.active : null].filter(Boolean).join(" "),
              children: oe
            },
            ce
          );
        }) }),
        A && e.length > 1 ? /* @__PURE__ */ C($e, { children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [It.arrow, It.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": H,
              onClick: G,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [It.arrow, It.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": H,
              onClick: W,
              children: "›"
            }
          )
        ] }) : null,
        O ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: It.pauseBtn,
            "aria-label": h ? "Resume" : "Pause",
            "aria-pressed": h,
            onClick: () => S((oe) => !oe),
            children: h ? "▶" : "⏸"
          }
        ) : null,
        N && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: It.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((oe, ce) => {
              const ye = ce === v;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: [
                    It.indicator,
                    ye ? It.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${ce + 1}`,
                  "aria-current": ye ? "true" : void 0,
                  "aria-controls": H,
                  onClick: () => te(ce)
                },
                ce
              );
            })
          }
        ) : null
      ]
    }
  );
}
const i2 = "_root_xvqqt_1", c2 = "_group_xvqqt_20", d2 = "_itemWrapper_xvqqt_30", u2 = "_treeitem_xvqqt_34", f2 = "_disabled_xvqqt_50", _2 = "_selected_xvqqt_60", p2 = "_caret_xvqqt_66", h2 = "_caretIcon_xvqqt_113", m2 = "_caretOpen_xvqqt_120", g2 = "_caretPlaceholder_xvqqt_124", x2 = "_label_xvqqt_130", y2 = "_loading_xvqqt_137", b2 = "_loadingRow_xvqqt_143", v2 = "_empty_xvqqt_149", k2 = "_checkbox_xvqqt_155", at = {
  root: i2,
  group: c2,
  itemWrapper: d2,
  treeitem: u2,
  disabled: f2,
  selected: _2,
  caret: p2,
  caretIcon: h2,
  caretOpen: m2,
  caretPlaceholder: g2,
  label: x2,
  loading: y2,
  loadingRow: b2,
  empty: v2,
  checkbox: k2
};
function w2({
  indeterminate: e,
  ...t
}) {
  const n = ee(null);
  return ge(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function hw({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: a,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: i,
  SelectionMode: c,
  selectedItem: u,
  SelectedItem: f,
  selectedItems: k,
  SelectedItems: b,
  defaultSelectedItem: w,
  defaultSelectedItems: x,
  onChange: g,
  Change: _,
  onExpand: p,
  Expand: y,
  onCollapse: $,
  Collapse: m,
  loadChildData: M,
  LoadChildData: v,
  template: O,
  Template: j,
  itemTemplate: D,
  ItemTemplate: A,
  ariaLabel: N,
  AriaLabel: h,
  allowCheckBoxes: S = !1,
  checkedKeys: L,
  defaultCheckedKeys: z,
  onCheckedChange: I,
  allowCheckChildren: T = !0,
  className: H
}) {
  const Y = e ?? t ?? [], G = n ?? r, W = l ?? a ?? "text", te = d ?? o ?? "id", re = i ?? c ?? "single", ne = N ?? h ?? "Tree", q = M ?? v, ie = O ?? j ?? D ?? A, J = R(
    (K) => {
      const Z = K[te];
      return Z != null ? String(Z) : String(K.id ?? "");
    },
    [te]
  ), oe = R(
    (K) => {
      const Z = K[W];
      if (Z != null) return String(Z);
      const ae = K.text;
      return ae != null ? String(ae) : "";
    },
    [W]
  ), ce = R(
    (K) => {
      if (G) {
        const ae = G(K);
        if (ae !== void 0) return ae;
      }
      const Z = K.children;
      if (Array.isArray(Z)) return Z;
    },
    [G]
  ), ye = R(
    (K) => {
      const Z = /* @__PURE__ */ new Set(), ae = (me) => {
        for (const pe of me) {
          const ve = J(pe);
          pe.expanded && Z.add(ve);
          const je = ce(pe);
          je && je.length > 0 && ae(je);
        }
      };
      return ae(K), Z;
    },
    [J, ce]
  ), [Oe, Ie] = X(
    () => ye(Y)
  ), [ke, Ae] = X(
    () => /* @__PURE__ */ new Map()
  ), [De, et] = X(() => /* @__PURE__ */ new Set()), Qe = u ?? f, Pe = k ?? b, wt = re === "multiple" ? Pe !== void 0 : Qe !== void 0, V = R(() => {
    if (re === "multiple") {
      if (x && x.length > 0)
        return new Set(x.map((ae) => J(ae)));
      const K = /* @__PURE__ */ new Set(), Z = (ae) => {
        for (const me of ae) {
          me.selected && K.add(J(me));
          const pe = ce(me);
          pe && Z(pe);
        }
      };
      return Z(Y), K;
    } else {
      if (w) return /* @__PURE__ */ new Set([J(w)]);
      let K = null;
      const Z = (ae) => {
        for (const me of ae) {
          if (me.selected)
            return K = J(me), !0;
          const pe = ce(me);
          if (pe && Z(pe)) return !0;
        }
        return !1;
      };
      return Z(Y), K ? /* @__PURE__ */ new Set([K]) : /* @__PURE__ */ new Set();
    }
  }, [
    re,
    w,
    x,
    J,
    ce,
    Y
  ]), [E, F] = X(
    () => V()
  ), le = xe(() => {
    if (re === "multiple") {
      if (Pe !== void 0) {
        const K = Pe;
        return K ? new Set(K.map((Z) => J(Z))) : /* @__PURE__ */ new Set();
      }
      return E;
    } else {
      if (Qe !== void 0) {
        const K = Qe;
        return K ? /* @__PURE__ */ new Set([J(K)]) : /* @__PURE__ */ new Set();
      }
      return E;
    }
  }, [
    re,
    Pe,
    Qe,
    E,
    J
  ]), _e = R(
    (K) => {
      let Z;
      const ae = (me) => {
        for (const pe of me) {
          if (J(pe) === K)
            return Z = pe, !0;
          const je = ke.get(J(pe)) ?? ce(pe);
          if (je && ae(je)) return !0;
        }
        return !1;
      };
      if (ae(Y), !Z) {
        for (const me of ke.values())
          if (ae(me)) break;
      }
      return Z;
    },
    [Y, ke, J, ce]
  ), se = R(() => {
    const K = /* @__PURE__ */ new Map(), Z = (ae) => {
      for (const me of ae) {
        const pe = J(me);
        K.set(pe, me);
        const je = ke.get(pe) ?? ce(me);
        je && Z(je);
      }
    };
    return Z(Y), K;
  }, [Y, ke, J, ce]), be = R(
    (K) => {
      const Z = J(K);
      if (!K.disabled)
        if (re === "multiple") {
          const me = new Set(le);
          me.has(Z) ? me.delete(Z) : me.add(Z), wt || F(me);
          const pe = g ?? _;
          if (pe) {
            const ve = se(), je = [];
            for (const Ee of me) {
              const Ye = ve.get(Ee) ?? _e(Ee);
              Ye && je.push(Ye);
            }
            pe({ item: K, selectedItems: je });
          }
        } else if (!le.has(Z) || le.size !== 1 || !le.has(Z)) {
          wt || F(/* @__PURE__ */ new Set([Z]));
          const pe = g ?? _;
          pe && pe({ item: K, selectedItem: K });
        } else {
          const pe = g ?? _;
          pe && pe({ item: K, selectedItem: K });
        }
    },
    [
      J,
      re,
      le,
      wt,
      g,
      _,
      se,
      _e
    ]
  ), ze = R(
    async (K) => {
      const Z = J(K);
      if (!!K.disabled) return;
      const me = Oe.has(Z), pe = p ?? y, ve = $ ?? m, je = ce(K), Ye = ke.get(Z) ?? je, ft = !(Ye !== void 0 && Ye.length > 0) && q != null;
      if (me) {
        Ie((rt) => {
          const Ze = new Set(rt);
          return Ze.delete(Z), Ze;
        }), ve?.({ item: K });
        return;
      }
      if (ft) {
        if (De.has(Z)) return;
        et((rt) => {
          const Ze = new Set(rt);
          return Ze.add(Z), Ze;
        });
        try {
          const Ze = await q(K);
          Ae((Bt) => {
            const jt = new Map(Bt);
            return jt.set(Z, Ze), jt;
          }), Ie((Bt) => {
            const jt = new Set(Bt);
            return jt.add(Z), jt;
          }), pe?.({ item: K });
        } catch {
        } finally {
          et((rt) => {
            const Ze = new Set(rt);
            return Ze.delete(Z), Ze;
          });
        }
        return;
      }
      Ie((rt) => {
        const Ze = new Set(rt);
        return Ze.add(Z), Ze;
      }), pe?.({ item: K });
    },
    [
      J,
      Oe,
      ce,
      ke,
      q,
      De,
      p,
      y,
      $,
      m
    ]
  ), Re = xe(() => {
    const K = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Set(), me = (pe, ve) => {
      for (const je of pe) {
        const Ee = J(je);
        K.has(Ee) || K.set(Ee, []), Z.set(Ee, ve), je.disabled && ae.add(Ee);
        const st = ke.get(Ee) ?? ce(je);
        st && st.length > 0 && (K.set(
          Ee,
          st.map((ft) => J(ft))
        ), me(st, Ee));
      }
    };
    return me(Y, null), { childrenOf: K, parentOf: Z, disabledKeys: ae };
  }, [Y, ke, J, ce]), Ge = R(
    (K) => {
      const Z = [], ae = [...Re.childrenOf.get(K) ?? []];
      for (; ae.length > 0; ) {
        const me = ae.pop();
        Z.push(me), ae.push(...Re.childrenOf.get(me) ?? []);
      }
      return Z;
    },
    [Re]
  ), [ut, _n] = X(
    () => new Set(z ?? [])
  ), Q = L !== void 0 ? new Set(L) : ut, Ce = R(
    (K) => {
      const Z = Re.disabledKeys;
      return Ge(K).filter((ae) => !Z.has(ae));
    },
    [Ge, Re]
  ), nt = R(
    (K) => {
      if (Q.has(K)) return !0;
      if (!S || !T) return !1;
      const Z = Ce(K);
      return Z.length > 0 && Z.every((ae) => Q.has(ae));
    },
    [Q, S, T, Ce]
  ), Mt = R(
    (K) => {
      if (!S || !T || Q.has(K))
        return !1;
      const Z = Ce(K);
      if (Z.length === 0) return !1;
      const ae = Z.filter((me) => Q.has(me)).length;
      return ae > 0 && ae < Z.length;
    },
    [Q, S, T, Ce]
  ), $t = R(
    (K) => {
      if (!S || K.disabled) return;
      const Z = J(K), ae = new Set(Q);
      if (ae.has(Z) || nt(Z)) {
        if (ae.delete(Z), T)
          for (const me of Ce(Z)) ae.delete(me);
      } else if (ae.add(Z), T)
        for (const me of Ce(Z)) ae.add(me);
      L === void 0 && _n(ae), I?.([...ae]);
    },
    [
      S,
      T,
      L,
      Q,
      Ce,
      J,
      nt,
      I
    ]
  ), Ne = xe(() => {
    const K = [], Z = (ae, me, pe) => {
      ae.forEach((ve, je) => {
        const Ee = J(ve), Ye = oe(ve), st = ke.get(Ee) ?? ce(ve);
        let ft;
        ke.has(Ee) ? ft = ke.get(Ee).length > 0 : st !== void 0 ? ft = st.length > 0 : q ? ft = !0 : ft = !1;
        const rt = Oe.has(Ee), Ze = !!ve.disabled, Bt = ae.length, jt = je + 1;
        if (K.push({
          item: ve,
          key: Ee,
          text: Ye,
          level: me,
          posInSet: jt,
          setSize: Bt,
          hasChildren: ft,
          expanded: rt,
          parentKey: pe,
          disabled: Ze
        }), ft && rt) {
          const qt = ke.get(Ee) ?? st;
          qt && qt.length > 0 && Z(qt, me + 1, Ee);
        }
      });
    };
    return Z(Y, 1, null), K;
  }, [
    Y,
    J,
    oe,
    ce,
    ke,
    Oe,
    q,
    De
  ]), [Ke, ot] = X(
    () => Ne[0]?.key ?? null
  ), Ue = ee(""), Gt = ee(null), U = ee(null);
  ge(() => {
    if (!Ke && Ne.length > 0) {
      const K = Ne[0];
      K && ot(K.key);
    } else if (Ke && !Ne.some((K) => K.key === Ke)) {
      const K = Ne[0];
      ot(K ? K.key : null);
    }
  }, [Ne, Ke]), ge(() => {
    if (Ke) {
      const K = U.current?.querySelector(
        `[data-key="${CSS.escape(Ke)}"]`
      );
      let Z = null;
      K || (Z = U.current?.querySelector(
        `[data-key="${Ke}"]`
      ) ?? null);
      const ae = K ?? Z;
      ae && document.activeElement !== ae && U.current?.contains(document.activeElement) && ae.focus();
    }
  }, [Ke]);
  const de = R((K) => {
    ot(K), requestAnimationFrame(() => {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(K) : K;
      let ae = U.current?.querySelector(
        `[data-key="${Z}"]`
      );
      ae || (ae = U.current?.querySelector(`[data-key="${K}"]`) ?? null), ae?.focus();
    });
  }, []), Te = R(
    (K) => Ne.find((ae) => ae.key === K)?.parentKey ?? null,
    [Ne]
  ), qe = R(
    (K) => {
      if (Ne.length === 0) return;
      const Z = Ke ? Ne.findIndex((pe) => pe.key === Ke) : -1, ae = Z >= 0 ? Ne[Z] : void 0;
      let me = null;
      if (K.key === "ArrowDown") {
        if (K.preventDefault(), Z === -1)
          me = Ne[0]?.key ?? null;
        else {
          const pe = (Z + 1) % Ne.length, ve = Ne[pe];
          ve && (me = ve.key);
        }
        me && de(me);
        return;
      }
      if (K.key === "ArrowUp") {
        if (K.preventDefault(), Z === -1) {
          const pe = Ne[Ne.length - 1];
          pe && (me = pe.key);
        } else {
          const pe = (Z - 1 + Ne.length) % Ne.length, ve = Ne[pe];
          ve && (me = ve.key);
        }
        me && de(me);
        return;
      }
      if (K.key === "ArrowRight") {
        if (K.preventDefault(), !ae) return;
        if (ae.hasChildren && !ae.expanded)
          ze(ae.item);
        else if (ae.hasChildren && ae.expanded) {
          const pe = Z + 1, ve = Ne[pe];
          ve && ve.parentKey === ae.key && de(ve.key);
        }
        return;
      }
      if (K.key === "ArrowLeft") {
        if (K.preventDefault(), !ae) return;
        if (ae.hasChildren && ae.expanded)
          ze(ae.item);
        else {
          const pe = Te(ae.key);
          pe && de(pe);
        }
        return;
      }
      if (K.key === "Home") {
        K.preventDefault();
        const pe = Ne[0];
        pe && de(pe.key);
        return;
      }
      if (K.key === "End") {
        K.preventDefault();
        const pe = Ne[Ne.length - 1];
        pe && de(pe.key);
        return;
      }
      if (K.key === "Enter" || K.key === " ") {
        if (K.key === " " && K.target?.tagName === "INPUT" || (K.preventDefault(), !ae)) return;
        if (K.key === " " && S) {
          const pe = _e(ae.key);
          pe && $t(pe);
          return;
        }
        be(ae.item);
        return;
      }
      if (K.key.length === 1 && /^[a-zA-Z0-9]$/.test(K.key)) {
        K.preventDefault();
        const pe = (Ue.current + K.key).toLowerCase();
        Ue.current = pe, Gt.current && clearTimeout(Gt.current), Gt.current = setTimeout(() => {
          Ue.current = "";
        }, 500);
        const ve = Z >= 0 ? Z + 1 : 0, Ye = [...Ne, ...Ne].slice(ve, ve + Ne.length).find((st) => st.text.toLowerCase().startsWith(pe));
        Ye && de(Ye.key);
        return;
      }
    },
    [
      Ne,
      Ke,
      de,
      ze,
      be,
      Te,
      S,
      $t
    ]
  ), lt = R(() => {
    if (!Ke && Ne.length > 0) {
      const K = Ne[0];
      K && ot(K.key);
    }
  }, [Ke, Ne]), At = (K, Z, ae) => /* @__PURE__ */ s("ul", { role: "group", className: at.group, children: K.map((me, pe) => {
    const ve = J(me), je = oe(me), Ee = ke.get(ve) ?? ce(me);
    let Ye;
    ke.has(ve) ? Ye = ke.get(ve).length > 0 : Ee !== void 0 ? Ye = Ee.length > 0 : q ? Ye = !0 : Ye = !1;
    const st = Oe.has(ve), ft = le.has(ve), rt = !!me.disabled, Ze = De.has(ve), Bt = Ke === ve, jt = K.length, qt = pe + 1, ss = ie ? ie(me) : je, Rn = S ? {
      checked: nt(ve),
      indeterminate: Mt(ve)
    } : null;
    return /* @__PURE__ */ C("li", { role: "none", className: at.itemWrapper, children: [
      /* @__PURE__ */ C(
        "div",
        {
          role: "treeitem",
          "data-key": ve,
          tabIndex: Bt ? 0 : -1,
          "aria-expanded": Ye ? st : void 0,
          "aria-selected": ft,
          "aria-level": Z,
          "aria-setsize": jt,
          "aria-posinset": qt,
          "aria-disabled": rt || void 0,
          "aria-busy": Ze || void 0,
          className: [
            at.treeitem,
            ft ? at.selected : null,
            rt ? at.disabled : null,
            Bt ? at.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            de(ve), rt || be(me);
          },
          onFocus: () => ot(ve),
          children: [
            S ? /* @__PURE__ */ s(
              w2,
              {
                className: at.checkbox,
                checked: Rn?.checked ?? !1,
                indeterminate: Rn?.indeterminate ?? !1,
                disabled: rt,
                "aria-label": `Select ${je}`,
                onClick: (pn) => pn.stopPropagation(),
                onChange: () => $t(me)
              }
            ) : null,
            Ye ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: at.caret,
                "aria-label": `${st ? "Collapse" : "Expand"} ${je}`,
                "aria-expanded": st,
                tabIndex: -1,
                disabled: rt,
                onClick: (pn) => {
                  pn.stopPropagation(), de(ve), ze(me);
                },
                children: /* @__PURE__ */ s(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      at.caretIcon,
                      st ? at.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ s(we, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ s(
              "span",
              {
                className: at.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ s("span", { className: at.label, children: ss }),
            Ze ? /* @__PURE__ */ s("span", { className: at.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      Ye && st ? Ze ? /* @__PURE__ */ s("div", { className: at.loadingRow, "aria-busy": "true", children: "Loading…" }) : Ee && Ee.length > 0 ? At(Ee, Z + 1) : ke.has(ve) && ke.get(ve).length > 0 ? At(
        ke.get(ve),
        Z + 1
      ) : (Ee && Ee.length === 0, null) : null
    ] }, ve);
  }) });
  return /* @__PURE__ */ s(
    "div",
    {
      ref: U,
      role: "tree",
      "aria-label": ne,
      "aria-multiselectable": re === "multiple" || void 0,
      tabIndex: 0,
      className: [at.root, H].filter(Boolean).join(" "),
      onKeyDown: qe,
      onFocus: lt,
      children: Y.length === 0 ? /* @__PURE__ */ s("div", { className: at.empty, children: "No items" }) : At(Y, 1)
    }
  );
}
const $2 = "_root_1plfv_1", N2 = "_panel_1plfv_8", O2 = "_header_1plfv_19", S2 = "_listbox_1plfv_28", C2 = "_option_1plfv_42", D2 = "_disabled_1plfv_57", M2 = "_active_1plfv_66", z2 = "_selected_1plfv_70", E2 = "_empty_1plfv_86", I2 = "_controls_1plfv_93", A2 = "_reorder_1plfv_102", j2 = "_btn_1plfv_110", Le = {
  root: $2,
  panel: N2,
  header: O2,
  listbox: S2,
  option: C2,
  disabled: D2,
  active: M2,
  selected: z2,
  empty: E2,
  controls: I2,
  reorder: A2,
  btn: j2
};
function it(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function fs(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function mw({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: a,
  targetValue: d,
  TargetValue: o,
  data: i,
  Data: c,
  onSourceChange: u,
  SourceChange: f,
  onTargetChange: k,
  TargetChange: b,
  keyProperty: w,
  KeyProperty: x,
  onMove: g,
  Move: _,
  ariaLabel: p,
  AriaLabel: y,
  className: $
}) {
  const m = w ?? x ?? "id", M = p ?? y ?? "PickList", v = e ?? t ?? l ?? a ?? i ?? c ?? [], O = n ?? r ?? d ?? o ?? [], [j, D] = X(() => [
    ...v
  ]), [A, N] = X(() => [
    ...O
  ]);
  ge(() => {
    const E = e ?? t ?? l ?? a ?? i ?? c;
    E !== void 0 && D([...E]);
  }, [e, t, l, a, i, c]), ge(() => {
    const E = n ?? r ?? d ?? o;
    E !== void 0 && N([...E]);
  }, [n, r, d, o]);
  const [h, S] = X(
    () => /* @__PURE__ */ new Set()
  ), [L, z] = X(
    () => /* @__PURE__ */ new Set()
  ), [I, T] = X(() => {
    const E = v.findIndex((F) => !F.disabled);
    return E >= 0 ? E : 0;
  }), [H, Y] = X(() => {
    const E = O.findIndex((F) => !F.disabled);
    return E >= 0 ? E : 0;
  }), G = xe(
    () => j.map((E, F) => E.disabled ? -1 : F).filter((E) => E >= 0),
    [j]
  ), W = xe(
    () => A.map((E, F) => E.disabled ? -1 : F).filter((E) => E >= 0),
    [A]
  );
  ge(() => {
    if (I >= j.length) {
      const E = G[G.length - 1];
      T(E ?? 0);
    } else if (j.length > 0 && G.length > 0 && !G.includes(I)) {
      const E = G[0];
      E !== void 0 && T(E);
    }
  }, [I, j.length, G]), ge(() => {
    if (H >= A.length) {
      const E = W[W.length - 1];
      Y(E ?? 0);
    } else if (A.length > 0 && W.length > 0 && !W.includes(H)) {
      const E = W[0];
      E !== void 0 && Y(E);
    }
  }, [H, A.length, W]), ge(() => {
    S((E) => {
      const F = /* @__PURE__ */ new Set();
      for (const le of E)
        j.some(
          (se) => it(se, m) === le && !se.disabled
        ) && F.add(le);
      return F;
    });
  }, [j, m]), ge(() => {
    z((E) => {
      const F = /* @__PURE__ */ new Set();
      for (const le of E)
        A.some(
          (se) => it(se, m) === le && !se.disabled
        ) && F.add(le);
      return F;
    });
  }, [A, m]);
  const te = R(
    (E) => {
      (u ?? f)?.(E);
    },
    [u, f]
  ), re = R(
    (E) => {
      (k ?? b)?.(E);
    },
    [k, b]
  ), ne = R(
    (E) => {
      (g ?? _)?.(E);
    },
    [g, _]
  ), q = R(
    (E) => {
      const F = j[E];
      if (!F || F.disabled) return;
      const le = it(F, m);
      S((_e) => {
        const se = new Set(_e);
        return se.has(le) ? se.delete(le) : se.add(le), se;
      }), T(E);
    },
    [j, m]
  ), ie = R(
    (E) => {
      const F = A[E];
      if (!F || F.disabled) return;
      const le = it(F, m);
      z((_e) => {
        const se = new Set(_e);
        return se.has(le) ? se.delete(le) : se.add(le), se;
      }), Y(E);
    },
    [A, m]
  ), J = R(() => {
    const E = [], F = [];
    for (const be of j) {
      const ze = it(be, m);
      h.has(ze) && !be.disabled ? E.push(be) : F.push(be);
    }
    if (E.length === 0) return;
    const le = F, _e = [...A, ...E];
    D(le), N(_e), S(/* @__PURE__ */ new Set());
    const se = new Set(E.map((be) => it(be, m)));
    z(se), te(le), re(_e), ne({
      source: le,
      target: _e,
      moved: E,
      direction: "toTarget"
    });
  }, [
    j,
    A,
    h,
    m,
    te,
    re,
    ne
  ]), oe = R(() => {
    const E = [], F = [];
    for (const be of A) {
      const ze = it(be, m);
      L.has(ze) && !be.disabled ? E.push(be) : F.push(be);
    }
    if (E.length === 0) return;
    const le = F, _e = [...j, ...E];
    N(le), D(_e), z(/* @__PURE__ */ new Set());
    const se = new Set(E.map((be) => it(be, m)));
    S(se), te(_e), re(le), ne({
      source: _e,
      target: le,
      moved: E,
      direction: "toSource"
    });
  }, [
    j,
    A,
    L,
    m,
    te,
    re,
    ne
  ]), ce = R(() => {
    const E = j.filter((_e) => !_e.disabled);
    if (E.length === 0) return;
    const F = j.filter((_e) => !!_e.disabled), le = [...A, ...E];
    D(F), N(le), S(/* @__PURE__ */ new Set()), te(F), re(le), ne({
      source: F,
      target: le,
      moved: E,
      direction: "allToTarget"
    });
  }, [
    j,
    A,
    m,
    te,
    re,
    ne
  ]), ye = R(() => {
    const E = A.filter((_e) => !_e.disabled);
    if (E.length === 0) return;
    const F = A.filter((_e) => !!_e.disabled), le = [...j, ...E];
    N(F), D(le), z(/* @__PURE__ */ new Set()), te(le), re(F), ne({
      source: le,
      target: F,
      moved: E,
      direction: "allToSource"
    });
  }, [j, A, te, re, ne]), Oe = R(() => {
    if (L.size === 0) return;
    const E = [...A], F = L, le = [];
    for (let se = 1; se < E.length; se++) {
      const be = E[se], ze = E[se - 1];
      if (!be || !ze) continue;
      const Re = it(be, m), Ge = it(ze, m);
      F.has(Re) && !F.has(Ge) && !be.disabled && !ze.disabled && (E[se - 1] = be, E[se] = ze, le.push(be));
    }
    if (le.length === 0) return;
    N(E), re(E), ne({ source: j, target: E, moved: le, direction: "up" });
    const _e = Array.from(F)[0];
    if (_e) {
      const se = E.findIndex(
        (be) => it(be, m) === _e
      );
      se >= 0 && Y(se);
    }
  }, [
    A,
    L,
    m,
    j,
    re,
    ne
  ]), Ie = R(() => {
    if (L.size === 0) return;
    const E = [...A], F = L, le = [];
    for (let se = E.length - 2; se >= 0; se--) {
      const be = E[se], ze = E[se + 1];
      if (!be || !ze) continue;
      const Re = it(be, m), Ge = it(ze, m);
      F.has(Re) && !F.has(Ge) && !be.disabled && !ze.disabled && (E[se] = ze, E[se + 1] = be, le.push(be));
    }
    if (le.length === 0) return;
    N(E), re(E), ne({ source: j, target: E, moved: le, direction: "down" });
    const _e = Array.from(F)[0];
    if (_e) {
      const se = E.findIndex(
        (be) => it(be, m) === _e
      );
      se >= 0 && Y(se);
    }
  }, [
    A,
    L,
    m,
    j,
    re,
    ne
  ]), ke = h.size > 0, Ae = L.size > 0, De = ee(""), et = ee(
    null
  ), Qe = ee(""), Pe = ee(
    null
  ), gt = R(
    (E) => {
      if (j.length === 0) return;
      const F = G;
      if (F.length === 0) return;
      const le = F.includes(I) ? I : F[0] ?? 0;
      let _e = -1;
      if (E.key === "ArrowDown") {
        E.preventDefault();
        const se = F.indexOf(le);
        _e = F[(se + 1) % F.length] ?? F[0] ?? 0;
      } else if (E.key === "ArrowUp") {
        E.preventDefault();
        const se = F.indexOf(le);
        _e = F[(se - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (E.key === "Home")
        E.preventDefault(), _e = F[0] ?? 0;
      else if (E.key === "End")
        E.preventDefault(), _e = F[F.length - 1] ?? 0;
      else if (E.key === "Enter" || E.key === " ") {
        E.preventDefault(), q(le);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(E.key)) {
        E.preventDefault();
        const se = (De.current + E.key).toLowerCase();
        De.current = se, et.current && clearTimeout(et.current), et.current = setTimeout(() => {
          De.current = "";
        }, 500);
        const be = [...F, ...F], ze = F.indexOf(le) + 1, Re = be.slice(ze).find(
          (Ge) => fs(j[Ge]).toLowerCase().startsWith(se)
        );
        Re != null && T(Re);
        return;
      }
      _e >= 0 && T(_e);
    },
    [j, G, I, q]
  ), tt = R(
    (E) => {
      if (A.length === 0) return;
      const F = W;
      if (F.length === 0) return;
      const le = F.includes(H) ? H : F[0] ?? 0;
      let _e = -1;
      if (E.key === "ArrowDown") {
        E.preventDefault();
        const se = F.indexOf(le);
        _e = F[(se + 1) % F.length] ?? F[0] ?? 0;
      } else if (E.key === "ArrowUp") {
        E.preventDefault();
        const se = F.indexOf(le);
        _e = F[(se - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (E.key === "Home")
        E.preventDefault(), _e = F[0] ?? 0;
      else if (E.key === "End")
        E.preventDefault(), _e = F[F.length - 1] ?? 0;
      else if (E.key === "Enter" || E.key === " ") {
        E.preventDefault(), ie(le);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(E.key)) {
        E.preventDefault();
        const se = (Qe.current + E.key).toLowerCase();
        Qe.current = se, Pe.current && clearTimeout(Pe.current), Pe.current = setTimeout(() => {
          Qe.current = "";
        }, 500);
        const be = [...F, ...F], ze = F.indexOf(le) + 1, Re = be.slice(ze).find(
          (Ge) => fs(A[Ge]).toLowerCase().startsWith(se)
        );
        Re != null && Y(Re);
        return;
      }
      _e >= 0 && Y(_e);
    },
    [A, W, H, ie]
  ), wt = ee(null), V = ee(null);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Le.root, $].filter(Boolean).join(" "),
      "aria-label": M,
      children: [
        /* @__PURE__ */ C("div", { className: Le.panel, children: [
          /* @__PURE__ */ s("div", { className: Le.header, children: "Source" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: wt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Le.listbox,
              onKeyDown: gt,
              children: j.length === 0 ? /* @__PURE__ */ s("div", { className: Le.empty, children: "No items" }) : j.map((E, F) => {
                const le = it(E, m), _e = h.has(le), se = F === I, be = !!E.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": be || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Le.option,
                      _e ? Le.selected : null,
                      se ? Le.active : null,
                      be ? Le.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => q(F),
                    children: fs(E)
                  },
                  le
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ C("div", { className: Le.controls, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !ke || void 0,
              disabled: !ke,
              onClick: J,
              children: "›"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all to target",
              "aria-disabled": j.filter((E) => !E.disabled).length === 0 || void 0,
              disabled: j.filter((E) => !E.disabled).length === 0,
              onClick: ce,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all",
              "aria-disabled": j.filter((E) => !E.disabled).length === 0 || void 0,
              disabled: j.filter((E) => !E.disabled).length === 0,
              onClick: ce,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Ae || void 0,
              disabled: !Ae,
              onClick: oe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all to source",
              "aria-disabled": A.filter((E) => !E.disabled).length === 0 || void 0,
              disabled: A.filter((E) => !E.disabled).length === 0,
              onClick: ye,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ C("div", { className: Le.panel, children: [
          /* @__PURE__ */ s("div", { className: Le.header, children: "Target" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: V,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Le.listbox,
              onKeyDown: tt,
              children: A.length === 0 ? /* @__PURE__ */ s("div", { className: Le.empty, children: "No items" }) : A.map((E, F) => {
                const le = it(E, m), _e = L.has(le), se = F === H, be = !!E.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": be || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Le.option,
                      _e ? Le.selected : null,
                      se ? Le.active : null,
                      be ? Le.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(F),
                    children: fs(E)
                  },
                  le
                );
              })
            }
          ),
          /* @__PURE__ */ C("div", { className: Le.reorder, children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Le.btn,
                "aria-label": "Move up",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: Oe,
                children: /* @__PURE__ */ s(we, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Le.btn,
                "aria-label": "Move down",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: Ie,
                children: /* @__PURE__ */ s(we, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const T2 = "_root_16u8q_1", L2 = "_header_16u8q_8", P2 = "_title_16u8q_15", R2 = "_navBtn_16u8q_20", B2 = "_resources_16u8q_39", q2 = "_resource_16u8q_39", F2 = "_grid_16u8q_50", H2 = "_timeCol_16u8q_55", K2 = "_timeCell_16u8q_61", U2 = "_dayCol_16u8q_66", W2 = "_dayHeader_16u8q_73", X2 = "_slot_16u8q_81", V2 = "_event_16u8q_91", vt = {
  root: T2,
  header: L2,
  title: P2,
  navBtn: R2,
  resources: B2,
  resource: q2,
  grid: F2,
  timeCol: H2,
  timeCell: K2,
  dayCol: U2,
  dayHeader: W2,
  slot: X2,
  event: V2
};
function gr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function gw({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: a,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: i
}) {
  const [c, u] = X(
    n ?? /* @__PURE__ */ new Date()
  ), f = n ?? c, k = (x) => {
    n || u(x), r?.(x);
  }, b = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (x, g) => {
    const _ = new Date(f);
    return _.setDate(f.getDate() - f.getDay() + g), _;
  }) : Array.from({ length: 30 }, (x, g) => {
    const _ = new Date(f);
    return _.setDate(1 + g), _;
  }), w = Array.from({ length: 12 }, (x, g) => 8 + g);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [vt.root, i].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ C("div", { className: vt.header, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: vt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const x = new Date(f);
                x.setDate(x.getDate() - 7), k(x);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ s("span", { className: vt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: vt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const x = new Date(f);
                x.setDate(x.getDate() + 7), k(x);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: vt.resources, children: l.map((x) => /* @__PURE__ */ s(
          "div",
          {
            className: vt.resource,
            role: "presentation",
            "aria-label": x.name,
            children: x.name
          },
          x.id
        )) }),
        /* @__PURE__ */ C("div", { className: vt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: vt.timeCol, role: "presentation", children: w.map((x) => /* @__PURE__ */ C("div", { className: vt.timeCell, children: [
            x,
            ":00"
          ] }, x)) }),
          b.map((x) => /* @__PURE__ */ C(
            "div",
            {
              className: vt.dayCol,
              role: "presentation",
              title: x.toLocaleDateString(),
              onClick: () => d?.({ date: x }),
              tabIndex: 0,
              "aria-label": x.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: vt.dayHeader, children: x.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                w.map((g) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: vt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(x);
                      _.setHours(g), d?.({ date: _ });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === x.toDateString()).map((g) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: vt.event,
                    "aria-label": `${g.title} ${gr(g.start)} - ${gr(g.end)}`,
                    "aria-pressed": !1,
                    onClick: () => a?.({ event: g }),
                    children: g.title
                  },
                  g.id
                ))
              ]
            },
            x.toISOString()
          ))
        ] })
      ]
    }
  );
}
const G2 = "_root_caexi_1", Y2 = "_header_caexi_8", Z2 = "_headerCell_caexi_15", J2 = "_timeline_caexi_21", Q2 = "_row_caexi_26", ev = "_taskName_caexi_32", tv = "_timelineCell_caexi_37", nv = "_bar_caexi_43", sv = "_progress_caexi_56", rv = "_dep_caexi_61", Vt = {
  root: G2,
  header: Y2,
  headerCell: Z2,
  timeline: J2,
  row: Q2,
  taskName: ev,
  timelineCell: tv,
  bar: nv,
  progress: sv,
  dep: rv
};
function xw({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [a, d] = X(null);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Vt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ C("div", { className: Vt.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: Vt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ C("div", { className: Vt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ C(
          "div",
          {
            className: Vt.row,
            role: "row",
            "aria-selected": a === o.id,
            children: [
              /* @__PURE__ */ s("div", { className: Vt.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ C("div", { className: Vt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: Vt.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": a === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (i) => {
                      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), d(o.id), n?.({ task: o }));
                    },
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: Vt.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((i) => /* @__PURE__ */ s("svg", { className: Vt.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, i))
              ] })
            ]
          },
          o.id
        ))
      ]
    }
  );
}
const ov = "_root_reqz6_1", lv = "_fields_reqz6_6", av = "_chip_reqz6_13", iv = "_table_reqz6_35", cv = "_totalRow_reqz6_55", dv = "_total_reqz6_55", jn = {
  root: ov,
  fields: lv,
  chip: av,
  table: iv,
  totalRow: cv,
  total: dv
}, _s = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Jn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function yw({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: a = "Pivot table",
  className: d
}) {
  const o = t, i = n, c = r, u = (g, _, p) => {
    const y = g === "row" ? o.filter((M) => M.property !== _) : o, $ = g === "col" ? i.filter((M) => M.property !== _) : i, m = g === "agg" ? c.filter((M) => !(M.property === _ && M.aggregate === p)) : c;
    l?.({
      rowFields: y,
      columnFields: $,
      aggregateFields: m
    });
  }, f = (g, _) => _.map((p) => String(g[p.property])).join(""), k = [
    ...new Set(o.length ? e.map((g) => f(g, o)) : [""])
  ].sort(), b = [
    ...new Set(i.length ? e.map((g) => f(g, i)) : [""])
  ].sort(), w = (g, _, p) => {
    const y = e.filter(
      (m) => f(m, o) === g && f(m, i) === _
    ), $ = y.map((m) => Number(m[p.property])).filter((m) => !Number.isNaN(m));
    return !$.length && p.aggregate !== "Count" ? 0 : _s[p.aggregate](
      p.aggregate === "Count" ? y.map(() => 1) : $
    );
  }, x = (g, _, p, y) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: jn.chip,
      "aria-label": `Remove ${g} field ${p}`,
      onClick: () => u(g, _, y),
      children: [
        p,
        y ? ` (${y})` : ""
      ]
    },
    `${g}-${p}-${y ?? ""}`
  );
  return /* @__PURE__ */ C("div", { className: [jn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C("div", { className: jn.fields, children: [
      o.map((g) => x("row", g.property, g.title ?? g.property)),
      i.map((g) => x("col", g.property, g.title ?? g.property)),
      c.map(
        (g) => x("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ C("table", { className: jn.table, role: "grid", "aria-label": a, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ C("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        b.map((g) => /* @__PURE__ */ s("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ C("tbody", { children: [
        k.map((g) => /* @__PURE__ */ C("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: g || "—" }),
          b.map((_) => /* @__PURE__ */ s(
            "td",
            {
              title: Jn(
                w(
                  g,
                  _,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? Jn(w(g, _, c[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ s("td", { className: jn.total, children: c.length ? Jn(
            _s[c[0].aggregate](
              b.flatMap(
                (_) => e.filter(
                  (p) => f(p, o) === g && f(p, i) === _
                ).map((p) => Number(p[c[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ C("tr", { className: jn.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          b.map((g) => /* @__PURE__ */ s("td", { children: c.length ? Jn(
            _s[c[0].aggregate](
              e.filter((_) => f(_, i) === g).map((_) => Number(_[c[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, g)),
          /* @__PURE__ */ s("td", { children: c.length ? Jn(
            _s[c[0].aggregate](
              e.map((g) => Number(g[c[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const uv = "_root_48ysw_1", fv = "_reverse_48ysw_10", _v = "_item_48ysw_14", pv = "_marker_48ysw_35", hv = "_body_48ysw_46", mv = "_label_48ysw_50", gv = "_content_48ysw_56", kn = {
  root: uv,
  reverse: fv,
  item: _v,
  marker: pv,
  body: hv,
  label: mv,
  content: gv
};
function bw({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [kn.root, t ? kn.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((a, d) => /* @__PURE__ */ C("li", { className: kn.item, children: [
        /* @__PURE__ */ s("span", { className: kn.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: kn.body, children: [
          /* @__PURE__ */ s("div", { className: kn.label, children: a.label }),
          a.content !== void 0 && /* @__PURE__ */ s("div", { className: kn.content, children: a.content })
        ] })
      ] }, d))
    }
  );
}
const xv = "_root_4ls7q_1", yv = "_header_4ls7q_13", bv = "_headCell_4ls7q_22", vv = "_row_4ls7q_32", kv = "_cell_4ls7q_37", Qn = {
  root: xv,
  header: yv,
  headCell: bv,
  row: vv,
  cell: kv
};
function vw({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: a = "Virtual grid",
  className: d
}) {
  const [o, i] = X(
    /* @__PURE__ */ new Map()
  ), [c, u] = X(0), f = ee(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), b = Math.max(0, Math.floor(c / t) - 3), w = Math.min(e, b + k + 6), x = R(
    (_, p) => {
      let y = !1;
      for (let $ = _; $ < p; $++)
        !o.has($) && !f.current.has($) && (y = !0);
      if (y) {
        for (let $ = _; $ < p; $++) f.current.add($);
        r({ skip: _, top: p }).then(($) => {
          i((m) => {
            const M = new Map(m);
            return $.forEach((v, O) => M.set(_ + O, v)), M;
          });
          for (let m = _; m < p; m++) f.current.delete(m);
        });
      }
    },
    [o, r]
  );
  ge(() => {
    x(b, w);
  }, [b, w]);
  const g = [];
  for (let _ = b; _ < w; _++) {
    const p = o.get(_) ?? {};
    g.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Qn.row,
          role: "row",
          style: { height: t },
          children: l.map((y) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Qn.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(p[y.property] ?? "")
            },
            y.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Qn.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": a,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (_) => u(_.target.scrollTop),
      onKeyDown: (_) => {
        const p = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), p.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), p.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), p.scrollTop += n) : _.key === "PageUp" && (_.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: b * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Qn.header, role: "row", children: l.map((_) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Qn.headCell,
            style: {
              height: t,
              ..._.width ? { width: _.width } : {}
            },
            children: _.title ?? _.property
          },
          _.property
        )) }),
        g,
        /* @__PURE__ */ s(
          "div",
          {
            style: { height: Math.max(0, (e - w) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var Rt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(o, i, c, u) {
      if (this.version = o, this.errorCorrectionLevel = i, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let f = [];
      for (let b = 0; b < this.size; b++) f.push(!1);
      for (let b = 0; b < this.size; b++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(c);
      if (this.drawCodewords(k), u == -1) {
        let b = 1e9;
        for (let w = 0; w < 8; w++) {
          this.applyMask(w), this.drawFormatBits(w);
          const x = this.getPenaltyScore();
          x < b && (u = w, b = x), this.applyMask(w);
        }
      }
      l(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(o, i) {
      const c = e.QrSegment.makeSegments(o);
      return t.encodeSegments(c, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, i) {
      const c = e.QrSegment.makeBytes(o);
      return t.encodeSegments([c], i);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(o, i, c = 1, u = 40, f = -1, k = !0) {
      if (!(t.MIN_VERSION <= c && c <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let b, w;
      for (b = c; ; b++) {
        const p = t.getNumDataCodewords(b, i) * 8, y = a.getTotalBits(o, b);
        if (y <= p) {
          w = y;
          break;
        }
        if (b >= u)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && w <= t.getNumDataCodewords(b, p) * 8 && (i = p);
      let x = [];
      for (const p of o) {
        n(p.mode.modeBits, 4, x), n(p.numChars, p.mode.numCharCountBits(b), x);
        for (const y of p.getData()) x.push(y);
      }
      l(x.length == w);
      const g = t.getNumDataCodewords(b, i) * 8;
      l(x.length <= g), n(0, Math.min(4, g - x.length), x), n(0, (8 - x.length % 8) % 8, x), l(x.length % 8 == 0);
      for (let p = 236; x.length < g; p ^= 253)
        n(p, 8, x);
      let _ = [];
      for (; _.length * 8 < x.length; ) _.push(0);
      return x.forEach(
        (p, y) => _[y >>> 3] |= p << 7 - (y & 7)
      ), new t(b, i, _, f);
    }
    /*-- Fields --*/
    // The width and height of this QR Code, measured in modules, between
    // 21 and 177 (inclusive). This is equal to version * 4 + 17.
    size;
    // The index of the mask pattern used in this QR Code, which is between 0 and 7 (inclusive).
    // Even if a QR Code is created with automatic masking requested (mask = -1),
    // the resulting object still has a mask value between 0 and 7.
    mask;
    // The modules of this QR Code (false = light, true = dark).
    // Immutable after constructor finishes. Accessed through getModule().
    modules = [];
    // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
    isFunction = [];
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(o, i) {
      return 0 <= o && o < this.size && 0 <= i && i < this.size && this.modules[i][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), i = o.length;
      for (let c = 0; c < i; c++)
        for (let u = 0; u < i; u++)
          c == 0 && u == 0 || c == 0 && u == i - 1 || c == i - 1 && u == 0 || this.drawAlignmentPattern(o[c], o[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const i = this.errorCorrectionLevel.formatBits << 3 | o;
      let c = i;
      for (let f = 0; f < 10; f++) c = c << 1 ^ (c >>> 9) * 1335;
      const u = (i << 10 | c) ^ 21522;
      l(u >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, r(u, f));
      this.setFunctionModule(8, 7, r(u, 6)), this.setFunctionModule(8, 8, r(u, 7)), this.setFunctionModule(7, 8, r(u, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, r(u, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, r(u, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, r(u, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let o = this.version;
      for (let c = 0; c < 12; c++) o = o << 1 ^ (o >>> 11) * 7973;
      const i = this.version << 12 | o;
      l(i >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const u = r(i, c), f = this.size - 11 + c % 3, k = Math.floor(c / 3);
        this.setFunctionModule(f, k, u), this.setFunctionModule(k, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, i) {
      for (let c = -4; c <= 4; c++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(c)), k = o + u, b = i + c;
          0 <= k && k < this.size && 0 <= b && b < this.size && this.setFunctionModule(k, b, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, i) {
      for (let c = -2; c <= 2; c++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            o + u,
            i + c,
            Math.max(Math.abs(u), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, i, c) {
      this.modules[i][o] = c, this.isFunction[i][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const i = this.version, c = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(i, c))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][i], f = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][i], k = Math.floor(
        t.getNumRawDataModules(i) / 8
      ), b = u - k % u, w = Math.floor(k / u);
      let x = [];
      const g = t.reedSolomonComputeDivisor(f);
      for (let p = 0, y = 0; p < u; p++) {
        let $ = o.slice(
          y,
          y + w - f + (p < b ? 0 : 1)
        );
        y += $.length;
        const m = t.reedSolomonComputeRemainder($, g);
        p < b && $.push(0), x.push($.concat(m));
      }
      let _ = [];
      for (let p = 0; p < x[0].length; p++)
        x.forEach((y, $) => {
          (p != w - f || $ >= b) && _.push(y[p]);
        });
      return l(_.length == k), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let u = 0; u < this.size; u++)
          for (let f = 0; f < 2; f++) {
            const k = c - f, w = (c + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[w][k] && i < o.length * 8 && (this.modules[w][k] = r(o[i >>> 3], 7 - (i & 7)), i++);
          }
      }
      l(i == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let i = 0; i < this.size; i++)
        for (let c = 0; c < this.size; c++) {
          let u;
          switch (o) {
            case 0:
              u = (c + i) % 2 == 0;
              break;
            case 1:
              u = i % 2 == 0;
              break;
            case 2:
              u = c % 3 == 0;
              break;
            case 3:
              u = (c + i) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(c / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              u = c * i % 2 + c * i % 3 == 0;
              break;
            case 6:
              u = (c * i % 2 + c * i % 3) % 2 == 0;
              break;
            case 7:
              u = ((c + i) % 2 + c * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][c] && u && (this.modules[i][c] = !this.modules[i][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let f = 0; f < this.size; f++) {
        let k = !1, b = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[f][x] == k ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, w), k || (o += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), k = this.modules[f][x], b = 1);
        o += this.finderPenaltyTerminateAndCount(k, b, w) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let k = !1, b = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[x][f] == k ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, w), k || (o += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), k = this.modules[x][f], b = 1);
        o += this.finderPenaltyTerminateAndCount(k, b, w) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let k = 0; k < this.size - 1; k++) {
          const b = this.modules[f][k];
          b == this.modules[f][k + 1] && b == this.modules[f + 1][k] && b == this.modules[f + 1][k + 1] && (o += t.PENALTY_N2);
        }
      let i = 0;
      for (const f of this.modules)
        i = f.reduce((k, b) => k + (b ? 1 : 0), i);
      const c = this.size * this.size, u = Math.ceil(Math.abs(i * 20 - c * 10) / c) - 1;
      return l(0 <= u && u <= 9), o += u * t.PENALTY_N4, l(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, i = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let c = [6];
        for (let u = this.size - 7; c.length < o; u -= i)
          c.splice(1, 0, u);
        return c;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let i = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const c = Math.floor(o / 7) + 2;
        i -= (25 * c - 10) * c - 55, o >= 7 && (i -= 36);
      }
      return l(208 <= i && i <= 29648), i;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, i) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let i = [];
      for (let u = 0; u < o - 1; u++) i.push(0);
      i.push(1);
      let c = 1;
      for (let u = 0; u < o; u++) {
        for (let f = 0; f < i.length; f++)
          i[f] = t.reedSolomonMultiply(i[f], c), f + 1 < i.length && (i[f] ^= i[f + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, i) {
      let c = i.map((u) => 0);
      for (const u of o) {
        const f = u ^ c.shift();
        c.push(0), i.forEach(
          (k, b) => c[b] ^= t.reedSolomonMultiply(k, f)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, i) {
      if (o >>> 8 || i >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let u = 7; u >= 0; u--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (i >>> u & 1) * o;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const i = o[1];
      l(i <= this.size * 3);
      const c = i > 0 && o[2] == i && o[3] == i * 3 && o[4] == i && o[5] == i;
      return (c && o[0] >= i * 4 && o[6] >= i ? 1 : 0) + (c && o[6] >= i * 4 && o[0] >= i ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, i, c) {
      return o && (this.finderPenaltyAddHistory(i, c), i = 0), i += this.size, this.finderPenaltyAddHistory(i, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, i) {
      i[0] == 0 && (o += this.size), i.pop(), i.unshift(o);
    }
    /*-- Constants and tables --*/
    // The minimum version number supported in the QR Code Model 2 standard.
    static MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    static MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    static PENALTY_N1 = 3;
    static PENALTY_N2 = 3;
    static PENALTY_N3 = 40;
    static PENALTY_N4 = 10;
    static ECC_CODEWORDS_PER_BLOCK = [
      // Version: (note that index 0 is for padding, and is set to an illegal value)
      //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
      [
        -1,
        7,
        10,
        15,
        20,
        26,
        18,
        20,
        24,
        30,
        18,
        20,
        24,
        26,
        30,
        22,
        24,
        28,
        30,
        28,
        28,
        28,
        28,
        30,
        30,
        26,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
      ],
      // Low
      [
        -1,
        10,
        16,
        26,
        18,
        24,
        16,
        18,
        22,
        22,
        26,
        30,
        22,
        22,
        24,
        24,
        28,
        28,
        26,
        26,
        26,
        26,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28
      ],
      // Medium
      [
        -1,
        13,
        22,
        18,
        26,
        18,
        24,
        18,
        22,
        20,
        24,
        28,
        26,
        24,
        20,
        30,
        24,
        28,
        28,
        26,
        30,
        28,
        30,
        30,
        30,
        30,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
      ],
      // Quartile
      [
        -1,
        17,
        28,
        22,
        16,
        22,
        28,
        26,
        26,
        24,
        28,
        24,
        28,
        22,
        24,
        24,
        30,
        28,
        28,
        26,
        28,
        30,
        24,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
      ]
      // High
    ];
    static NUM_ERROR_CORRECTION_BLOCKS = [
      // Version: (note that index 0 is for padding, and is set to an illegal value)
      //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
      [
        -1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        4,
        4,
        4,
        4,
        4,
        6,
        6,
        6,
        6,
        7,
        8,
        8,
        9,
        9,
        10,
        12,
        12,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        19,
        20,
        21,
        22,
        24,
        25
      ],
      // Low
      [
        -1,
        1,
        1,
        1,
        2,
        2,
        4,
        4,
        4,
        5,
        5,
        5,
        8,
        9,
        9,
        10,
        10,
        11,
        13,
        14,
        16,
        17,
        17,
        18,
        20,
        21,
        23,
        25,
        26,
        28,
        29,
        31,
        33,
        35,
        37,
        38,
        40,
        43,
        45,
        47,
        49
      ],
      // Medium
      [
        -1,
        1,
        1,
        2,
        2,
        4,
        4,
        6,
        6,
        8,
        8,
        8,
        10,
        12,
        16,
        12,
        17,
        16,
        18,
        21,
        20,
        23,
        23,
        25,
        27,
        29,
        34,
        34,
        35,
        38,
        40,
        43,
        45,
        48,
        51,
        53,
        56,
        59,
        62,
        65,
        68
      ],
      // Quartile
      [
        -1,
        1,
        1,
        2,
        4,
        4,
        4,
        5,
        6,
        8,
        8,
        11,
        11,
        16,
        16,
        18,
        16,
        19,
        21,
        25,
        25,
        25,
        34,
        30,
        32,
        35,
        37,
        40,
        42,
        45,
        48,
        51,
        54,
        57,
        60,
        63,
        66,
        70,
        74,
        77,
        81
      ]
      // High
    ];
  }
  e.QrCode = t;
  function n(d, o, i) {
    if (o < 0 || o > 31 || d >>> o)
      throw new RangeError("Value out of range");
    for (let c = o - 1; c >= 0; c--)
      i.push(d >>> c & 1);
  }
  function r(d, o) {
    return (d >>> o & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class a {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, i, c) {
      if (this.mode = o, this.numChars = i, this.bitData = c, i < 0) throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let i = [];
      for (const c of o) n(c, 8, i);
      return new a(a.Mode.BYTE, o.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!a.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let c = 0; c < o.length; ) {
        const u = Math.min(o.length - c, 3);
        n(parseInt(o.substring(c, c + u), 10), u * 3 + 1, i), c += u;
      }
      return new a(a.Mode.NUMERIC, o.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!a.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let i = [], c;
      for (c = 0; c + 2 <= o.length; c += 2) {
        let u = a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)) * 45;
        u += a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c + 1)), n(u, 11, i);
      }
      return c < o.length && n(
        a.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)),
        6,
        i
      ), new a(a.Mode.ALPHANUMERIC, o.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : a.isNumeric(o) ? [a.makeNumeric(o)] : a.isAlphanumeric(o) ? [a.makeAlphanumeric(o)] : [a.makeBytes(a.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let i = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, i);
      else if (o < 16384)
        n(2, 2, i), n(o, 14, i);
      else if (o < 1e6)
        n(6, 3, i), n(o, 21, i);
      else throw new RangeError("ECI assignment value out of range");
      return new a(a.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(o) {
      return a.NUMERIC_REGEX.test(o);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(o) {
      return a.ALPHANUMERIC_REGEX.test(o);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(o, i) {
      let c = 0;
      for (const u of o) {
        const f = u.mode.numCharCountBits(i);
        if (u.numChars >= 1 << f) return 1 / 0;
        c += 4 + f + u.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let i = [];
      for (let c = 0; c < o.length; c++)
        o.charAt(c) != "%" ? i.push(o.charCodeAt(c)) : (i.push(parseInt(o.substring(c + 1, c + 3), 16)), c += 2);
      return i;
    }
    /*-- Constants --*/
    // Describes precisely all strings that are encodable in numeric mode.
    static NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    static ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    static ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  }
  e.QrSegment = a;
})(Rt || (Rt = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, a) {
        this.ordinal = l, this.formatBits = a;
      }
      ordinal;
      formatBits;
      /*-- Constants --*/
      static LOW = new n(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new n(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new n(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new n(3, 2);
    }
    t.Ecc = n;
  })(e.QrCode || (e.QrCode = {}));
})(Rt || (Rt = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(l, a) {
        this.modeBits = l, this.numBitsCharCount = a;
      }
      modeBits;
      numBitsCharCount;
      /*-- Constants --*/
      static NUMERIC = new n(1, [10, 12, 14]);
      static ALPHANUMERIC = new n(2, [9, 11, 13]);
      static BYTE = new n(4, [8, 16, 16]);
      static KANJI = new n(8, [8, 10, 12]);
      static ECI = new n(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(l) {
        return this.numBitsCharCount[Math.floor((l + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(Rt || (Rt = {}));
const wv = "_root_1leml_1", $v = {
  root: wv
}, Nv = {
  low: Rt.QrCode.Ecc.LOW,
  medium: Rt.QrCode.Ecc.MEDIUM,
  quartile: Rt.QrCode.Ecc.QUARTILE,
  high: Rt.QrCode.Ecc.HIGH
};
function kw({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: a,
  className: d,
  onError: o
}) {
  const i = a ?? `QR code for ${e}`, c = ee(null), u = Dr("(prefers-color-scheme: dark)"), [f, k] = X(null);
  ge(() => {
    const $ = document.documentElement;
    k($.dataset.theme ?? null);
    const m = new MutationObserver(() => {
      k($.dataset.theme ?? null);
    });
    return m.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => m.disconnect();
  }, []);
  const b = xe(() => {
    try {
      return Rt.QrCode.encodeText(e, Nv[r]);
    } catch {
      return null;
    }
  }, [e, r]), w = ee(null);
  ge(() => {
    if (b !== null) {
      w.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (w.current?.value !== e || w.current?.onError !== o) && (w.current = { value: e, onError: o }, o?.($));
  }, [b, e, o]);
  const x = Math.max(0, Math.floor(l)), g = [$v.root, d].filter(Boolean).join(" ");
  if (ge(() => {
    if (n !== "canvas" || b === null) return;
    const $ = c.current, m = $?.getContext("2d");
    if (!$ || !m) return;
    const M = getComputedStyle($), v = M.getPropertyValue("--dx-text-color").trim() || "#000", O = M.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Ov(m, b, t, x, v, O);
  }, [n, b, t, x, u, f]), b === null)
    return /* @__PURE__ */ s("div", { className: g, role: "img", "aria-label": i, "data-qr-error": "true" });
  const _ = b.size + x * 2, p = t / _;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: c,
        className: g,
        width: t,
        height: t,
        role: "img",
        "aria-label": i,
        "data-value": e
      }
    );
  const y = [];
  for (let $ = 0; $ < b.size; $++)
    for (let m = 0; m < b.size; m++)
      b.getModule(m, $) && y.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (m + x) * p,
            y: ($ + x) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${m}-${$}`
        )
      );
  return /* @__PURE__ */ C(
    "svg",
    {
      className: g,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": i,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function Ov(e, t, n, r, l, a) {
  const d = n / (t.size + r * 2);
  e.fillStyle = a, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let i = 0; i < t.size; i++)
      t.getModule(i, o) && e.fillRect((i + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const Sv = "_root_1v9la_1", Cv = "_value_1v9la_9", xr = {
  root: Sv,
  value: Cv
}, yr = [
  "212222",
  "222122",
  "222221",
  "121223",
  "121322",
  "131222",
  "122213",
  "122312",
  "132212",
  "221213",
  "221312",
  "231212",
  "112232",
  "122132",
  "122231",
  "113222",
  "123122",
  "123221",
  "223211",
  "221132",
  "221231",
  "213212",
  "223112",
  "312131",
  "311222",
  "321122",
  "321221",
  "312212",
  "322112",
  "322211",
  "212123",
  "212321",
  "232121",
  "111323",
  "131123",
  "131321",
  "112313",
  "132113",
  "132311",
  "211313",
  "231113",
  "231311",
  "112133",
  "112331",
  "132131",
  "113123",
  "113321",
  "133121",
  "313121",
  "211331",
  "231131",
  "213113",
  "213311",
  "213131",
  "311123",
  "311321",
  "331121",
  "312113",
  "312311",
  "332111",
  "314111",
  "221411",
  "431111",
  "111224",
  "111422",
  "121124",
  "121421",
  "141122",
  "141221",
  "112214",
  "112412",
  "122114",
  "122411",
  "142112",
  "142211",
  "241211",
  "221114",
  "413111",
  "241112",
  "134111",
  "111242",
  "121142",
  "121241",
  "114212",
  "124112",
  "124211",
  "411212",
  "421112",
  "421211",
  "212141",
  "214121",
  "412121",
  "111143",
  "111341",
  "131141",
  "114113",
  "114311",
  "411113",
  "411311",
  "113141",
  "114131",
  "311141",
  "411131",
  "211412",
  "211214",
  "211232",
  "2331112"
], br = 104, Dv = 106;
function Mv(e) {
  const t = [br];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = br;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, Dv), t;
}
function ww({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: a
}) {
  const d = l ?? `Barcode ${e}`, o = xe(() => {
    const i = [];
    let c = 0;
    for (const u of Mv(e)) {
      const f = yr[u] ?? yr[0];
      for (let k = 0; k < f.length; k++) {
        const b = Number(f[k]);
        k % 2 === 0 && i.push({ x: c, w: b }), c += b;
      }
    }
    return { modules: i, total: c };
  }, [e]);
  return /* @__PURE__ */ C("span", { className: [xr.root, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${o.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ s(
            "rect",
            {
              width: o.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          o.modules.map((i, c) => /* @__PURE__ */ s(
            "rect",
            {
              x: i.x,
              y: 0,
              width: i.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ s("span", { className: xr.value, children: e })
  ] });
}
const zv = "_root_1bgqt_1", Ev = "_svg_1bgqt_10", Iv = "_gridline_1bgqt_15", Av = "_tickLabel_1bgqt_21", jv = "_axisTitle_1bgqt_27", Tv = "_dataLabel_1bgqt_34", Lv = "_legend_1bgqt_40", Pv = "_legendItem_1bgqt_48", Rv = "_swatch_1bgqt_56", Bv = "_tooltip_1bgqt_63", qv = "_visuallyHidden_1bgqt_77", ct = {
  root: zv,
  svg: Ev,
  gridline: Iv,
  tickLabel: Av,
  axisTitle: jv,
  dataLabel: Tv,
  legend: Lv,
  legendItem: Pv,
  swatch: Rv,
  tooltip: Bv,
  visuallyHidden: qv
}, vr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Fv(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), a = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, o = [];
  for (let i = a; i <= d + 1e-9; i += l)
    o.push(Number(i.toFixed(6)));
  return { min: a, max: d, step: l, ticks: o };
}
function $w({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: a = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: i = "Chart",
  className: c
}) {
  const [u, f] = X(
    null
  ), k = xe(() => {
    const v = /* @__PURE__ */ new Set();
    for (const O of e)
      for (const j of O.data) v.add(String(j[O.categoryProperty] ?? ""));
    return [...v];
  }, [e]), b = xe(
    () => e.flatMap((v) => v.data.map((O) => Number(O[v.valueProperty]))).filter((v) => !Number.isNaN(v)),
    [e]
  ), w = r?.min ?? (b.length ? Math.min(0, ...b) : 0), x = r?.max ?? (b.length ? Math.max(...b) : 10), g = xe(
    () => Fv(w, x, r?.step),
    [w, x, r?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, p = t - _.l - _.r, y = n - _.t - _.b, $ = (v) => _.l + v / Math.max(1, k.length - 1) * p, m = (v) => _.t + (1 - (v - g.min) / (g.max - g.min || 1)) * y, M = (v, O) => O.color ?? vr[v % vr.length];
  return /* @__PURE__ */ C(
    "figure",
    {
      className: [ct.root, c].filter(Boolean).join(" "),
      role: "img",
      "aria-label": i,
      "aria-describedby": `${i.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ C(
          "svg",
          {
            width: t,
            height: n,
            className: ct.svg,
            role: "presentation",
            children: [
              r?.gridlines !== !1 && g.ticks.map((v) => /* @__PURE__ */ s(
                "line",
                {
                  x1: _.l,
                  x2: _.l + p,
                  y1: m(v),
                  y2: m(v),
                  className: ct.gridline
                },
                v
              )),
              l?.gridlines && k.map((v, O) => /* @__PURE__ */ s(
                "line",
                {
                  x1: $(O),
                  x2: $(O),
                  y1: _.t,
                  y2: _.t + y,
                  className: ct.gridline
                },
                O
              )),
              g.ticks.map((v) => /* @__PURE__ */ s(
                "text",
                {
                  x: _.l - 8,
                  y: m(v) + 4,
                  textAnchor: "end",
                  className: ct.tickLabel,
                  children: v
                },
                v
              )),
              k.map((v, O) => /* @__PURE__ */ s(
                "text",
                {
                  x: $(O),
                  y: _.t + y + 16,
                  textAnchor: "middle",
                  className: ct.tickLabel,
                  children: v
                },
                v
              )),
              r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: _.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + y / 2})`,
                  className: ct.axisTitle,
                  children: r.title
                }
              ),
              l?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: _.l + p / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ct.axisTitle,
                  children: l.title
                }
              ),
              (() => {
                const v = /* @__PURE__ */ new Map();
                for (const D of e)
                  if (D.stack)
                    for (const A of D.data) {
                      const N = String(A[D.categoryProperty] ?? ""), h = Number(A[D.valueProperty]);
                      if (Number.isNaN(h)) continue;
                      v.has(D.stack) || v.set(D.stack, /* @__PURE__ */ new Map());
                      const S = v.get(D.stack);
                      S.set(N, (S.get(N) ?? 0) + h);
                    }
                const O = e.filter(
                  (D) => D.type === "pie" || D.type === "donut"
                ), j = /* @__PURE__ */ new Map();
                for (const D of O) {
                  const A = D.data.reduce(
                    (N, h) => N + (Number(h[D.valueProperty]) || 0),
                    0
                  );
                  j.set(D, A);
                }
                return e.map((D, A) => {
                  const N = D.data.map((z) => ({
                    cat: String(z[D.categoryProperty] ?? ""),
                    val: Number(z[D.valueProperty]),
                    size: D.sizeProperty ? Number(z[D.sizeProperty]) : void 0,
                    item: z
                  })), h = new Map(k.map((z, I) => [z, I])), S = M(A, D);
                  if (D.type === "pie" || D.type === "donut") {
                    const z = _.l + p / 2, I = _.t + y / 2, T = Math.min(p, y) / 3, H = D.type === "donut" ? D.innerRadius ?? T * 0.5 : 0, Y = j.get(D) ?? N.reduce((W, te) => W + te.val, 0);
                    let G = -90;
                    return /* @__PURE__ */ C(
                      "g",
                      {
                        role: "list",
                        "aria-label": D.title ?? `Series ${A + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: D.title ?? `Series ${A + 1}` }),
                          N.map((W, te) => {
                            const re = Y ? W.val / Y * 360 : 0, ne = G, q = G + re;
                            G = q;
                            const ie = re > 180 ? 1 : 0, J = (tt) => tt * Math.PI / 180, oe = z + T * Math.cos(J(ne)), ce = I + T * Math.sin(J(ne)), ye = z + T * Math.cos(J(q)), Oe = I + T * Math.sin(J(q)), Ie = z + H * Math.cos(J(q)), ke = I + H * Math.sin(J(q)), Ae = z + H * Math.cos(J(ne)), De = I + H * Math.sin(J(ne)), et = H ? `M ${oe} ${ce} A ${T} ${T} 0 ${ie} 1 ${ye} ${Oe} L ${Ie} ${ke} A ${H} ${H} 0 ${ie} 0 ${Ae} ${De} Z` : `M ${z} ${I} L ${oe} ${ce} A ${T} ${T} 0 ${ie} 1 ${ye} ${Oe} Z`, Qe = (ne + q) / 2, Pe = z + (T + 12) * Math.cos(J(Qe)), gt = I + (T + 12) * Math.sin(J(Qe));
                            return /* @__PURE__ */ C("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "path",
                                {
                                  d: et,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => d && f({
                                    x: Pe,
                                    y: gt,
                                    text: `${D.title ?? W.cat}: ${W.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: D.title ?? "",
                                    category: W.cat,
                                    value: W.val,
                                    item: W.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              D.labels?.visible && /* @__PURE__ */ s(
                                "text",
                                {
                                  x: Pe,
                                  y: gt,
                                  textAnchor: "middle",
                                  className: ct.dataLabel,
                                  children: W.val
                                }
                              )
                            ] }, te);
                          })
                        ]
                      },
                      A
                    );
                  }
                  if (D.type === "scatter" || D.type === "bubble")
                    return /* @__PURE__ */ C(
                      "g",
                      {
                        role: "list",
                        "aria-label": D.title ?? `Series ${A + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: D.title ?? `Series ${A + 1}` }),
                          N.map((z, I) => {
                            const T = h.get(z.cat) ?? 0, H = Number(N[I].cat), Y = Number.isNaN(H) ? $(T) : _.l + (H - g.min) / (g.max - g.min || 1) * p, G = m(z.val), W = D.type === "bubble" && z.size !== void 0 ? Math.max(4, Math.min(12, z.size / 10)) : 4;
                            return /* @__PURE__ */ C("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: Y,
                                  cy: G,
                                  r: W,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: Y,
                                  cy: G,
                                  r: 12,
                                  fill: "transparent",
                                  onMouseEnter: () => d && f({
                                    x: Y,
                                    y: G,
                                    text: `${D.title ?? z.cat}: ${z.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: D.title ?? "",
                                    category: z.cat,
                                    value: z.val,
                                    item: z.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              )
                            ] }, I);
                          })
                        ]
                      },
                      A
                    );
                  if (D.type === "line" || D.type === "area") {
                    const z = (H) => {
                      if (!D.stack) return g.min;
                      let Y = 0;
                      for (let G = 0; G < A; G++) {
                        const W = e[G];
                        if (W?.stack !== D.stack) continue;
                        const te = W.data.find(
                          (re) => String(re[W.categoryProperty] ?? "") === H
                        );
                        te && (Y += Number(te[W.valueProperty]) || 0);
                      }
                      return Y;
                    }, I = N.map((H) => {
                      const Y = h.get(H.cat) ?? 0, G = z(H.cat);
                      return `${Y === 0 ? "M" : "L"} ${$(Y)} ${m(G + H.val)}`;
                    }).join(" "), T = N.map((H) => {
                      const Y = h.get(H.cat) ?? 0, G = z(H.cat);
                      return `${Y === 0 ? "M" : "L"} ${$(Y)} ${m(G)}`;
                    }).join(" ");
                    return /* @__PURE__ */ C(
                      "g",
                      {
                        role: "list",
                        "aria-label": D.title ?? `Series ${A + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: D.title ?? `Series ${A + 1}` }),
                          D.type === "area" && /* @__PURE__ */ s(
                            "path",
                            {
                              d: `${I} L ${$(N.length - 1)} ${m(z(N[N.length - 1].cat))} L ${$(0)} ${m(z(N[0].cat))} Z`,
                              fill: S,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ s("path", { d: I, fill: "none", stroke: S, strokeWidth: 2 }),
                          D.stack && /* @__PURE__ */ s("path", { d: T, fill: "none", stroke: "transparent" }),
                          N.map((H, Y) => {
                            const G = h.get(H.cat) ?? 0, W = z(H.cat), te = $(G), re = m(W + H.val);
                            return /* @__PURE__ */ C("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: te,
                                  cy: re,
                                  r: 4,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ s(
                                "rect",
                                {
                                  x: te - 12,
                                  y: re - 12,
                                  width: 24,
                                  height: 24,
                                  fill: "transparent",
                                  onMouseEnter: () => d && f({
                                    x: te,
                                    y: re,
                                    text: `${D.title ?? H.cat}: ${H.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onFocus: () => d && f({
                                    x: te,
                                    y: re,
                                    text: `${D.title ?? H.cat}: ${H.val}`
                                  }),
                                  onBlur: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: D.title ?? "",
                                    category: H.cat,
                                    value: H.val,
                                    item: H.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              D.labels?.visible && /* @__PURE__ */ s(
                                "text",
                                {
                                  x: te,
                                  y: re - 8,
                                  textAnchor: "middle",
                                  className: ct.dataLabel,
                                  children: H.val
                                }
                              )
                            ] }, Y);
                          })
                        ]
                      },
                      A
                    );
                  }
                  const L = D.type === "bar";
                  return /* @__PURE__ */ C(
                    "g",
                    {
                      role: "list",
                      "aria-label": D.title ?? `Series ${A + 1}`,
                      children: [
                        /* @__PURE__ */ s("title", { children: D.title ?? `Series ${A + 1}` }),
                        N.map((z, I) => {
                          const T = h.get(z.cat) ?? 0;
                          let H = 0;
                          if (D.stack)
                            for (let ce = 0; ce < A; ce++) {
                              const ye = e[ce];
                              if (ye?.stack !== D.stack) continue;
                              const Oe = ye.data.find(
                                (Ie) => String(Ie[ye.categoryProperty] ?? "") === z.cat
                              );
                              Oe && (H += Number(Oe[ye.valueProperty]) || 0);
                            }
                          const Y = H + z.val, G = e.filter(
                            (ce) => !ce.stack || ce.stack === D.stack
                          ).length, W = p / k.length, te = L ? 18 : Math.max(
                            12,
                            W / (D.stack ? 1 : e.length) - 4
                          ), re = L ? _.l + H / (g.max - g.min || 1) * p : $(T) - te / 2 + (D.stack ? 0 : A % G * te), ne = L ? _.t + T * y / k.length + 4 : m(Y), q = L ? z.val / (g.max - g.min || 1) * p : te - 4, ie = L ? 16 : m(H) - m(Y), J = L ? _.l + H / (g.max - g.min || 1) * p : re, oe = L ? _.t + T * y / k.length + 4 : ne;
                          return /* @__PURE__ */ C("g", { role: "listitem", children: [
                            /* @__PURE__ */ s(
                              "rect",
                              {
                                x: J,
                                y: oe,
                                width: L ? q : te - 4,
                                height: ie,
                                fill: S,
                                rx: 2,
                                onMouseEnter: () => d && f({
                                  x: J + (L ? q : te) / 2,
                                  y: oe,
                                  text: `${D.title ?? z.cat}: ${z.val}`
                                }),
                                onMouseLeave: () => f(null),
                                onClick: () => o?.({
                                  seriesTitle: D.title ?? "",
                                  category: z.cat,
                                  value: z.val,
                                  item: z.item
                                }),
                                style: { cursor: "pointer" }
                              }
                            ),
                            D.labels?.visible && /* @__PURE__ */ s(
                              "text",
                              {
                                x: J + (L ? q : te) / 2,
                                y: oe - 4,
                                textAnchor: "middle",
                                className: ct.dataLabel,
                                children: z.val
                              }
                            )
                          ] }, I);
                        })
                      ]
                    },
                    A
                  );
                });
              })()
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: ct.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        a && /* @__PURE__ */ s("div", { className: ct.legend, children: e.map((v, O) => /* @__PURE__ */ C("span", { className: ct.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: ct.swatch,
              style: { backgroundColor: M(O, v) },
              "aria-hidden": "true"
            }
          ),
          v.title ?? `Series ${O + 1}`
        ] }, O)) }),
        /* @__PURE__ */ C(
          "table",
          {
            className: ct.visuallyHidden,
            id: `${i.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: i }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ C("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (v) => v.data.map((O, j) => /* @__PURE__ */ C("tr", { children: [
                  /* @__PURE__ */ s("td", { children: v.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: String(O[v.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(O[v.valueProperty] ?? "") })
                ] }, `${v.title}-${j}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  yd as ALERT_ICON,
  jk as Accordion,
  kk as Alert,
  Sk as AutoGrid,
  Pk as Autocomplete,
  Ik as Avatar,
  Wv as Badge,
  ww as Barcode,
  Dk as Body,
  cw as Breadcrumb,
  vs as Button,
  Uv as Card,
  pw as Carousel,
  $w as Chart,
  mk as Checkbox,
  Bk as Checkboxlist,
  Vk as Colorpicker,
  Nk as Column,
  rw as ContextMenuProvider,
  Kn as DEFAULT_OPERATOR_BY_TYPE,
  ix as DEFAULT_PALETTE,
  uk as DataFilter,
  fk as DataGrid,
  _k as DataList,
  Gk as Datepicker,
  pc as Dialog,
  yk as DialogProvider,
  nw as DropZone,
  Lk as Dropdown,
  Yv as EmptyState,
  wr as FILTER_OPERATORS,
  iw as FabMenu,
  Zv as Field,
  Qv as Fieldset,
  jh as Footer,
  ek as Form,
  Jv as FormField,
  xw as Gantt,
  Ph as Header,
  we as Icon,
  hk as Input,
  pk as Label,
  Ck as Layout,
  dw as Link,
  Rk as Listbox,
  Wk as Mask,
  gy as Menu,
  Ir as MenuItem,
  Xk as Numeric,
  Sa as Pager,
  lw as PanelMenu,
  ow as PanelMenuItem,
  Uk as Password,
  mw as PickList,
  yw as Pivot,
  aw as ProfileMenu,
  zk as Progress,
  kw as QRCode,
  qk as Radiobuttonlist,
  Yk as Rating,
  $k as Row,
  gw as Scheduler,
  Qk as SecurityCode,
  Tn as Select,
  Fk as Selectbar,
  Yh as Sidebar,
  Mk as SidebarToggle,
  ew as SignaturePad,
  wk as Skeleton,
  Zk as Slider,
  Kk as Splitbutton,
  fw as Splitter,
  Ok as Stack,
  Vv as Stat,
  uw as Steps,
  Xi as Switch,
  Gv as Table,
  Ak as Tabs,
  Dc as Text,
  Tk as Textarea,
  Hi as Textbox,
  Ek as ThemeSwitcher,
  bw as Timeline,
  Jk as Timespanpicker,
  vk as ToastProvider,
  _w as Toc,
  Hk as Togglebutton,
  gk as Tooltip,
  hw as Tree,
  tw as Upload,
  vw as VirtualGrid,
  ja as aggregateValue,
  Nr as applyFilters,
  Aa as applyGridState,
  Ys as collectGroupKeys,
  wn as columnValue,
  ak as compare,
  ck as custom,
  za as cycleSort,
  Js as defaultOperatorForType,
  nk as email,
  ir as formatMasked,
  ms as formatValue,
  hs as getByPath,
  Ca as groupItems,
  Xv as iconNames,
  $r as matchesFilters,
  ok as maxLength,
  rk as minLength,
  Ia as paginate,
  sk as pattern,
  lk as range,
  tk as required,
  ik as requiredTrue,
  Ps as resolveVariant,
  Al as runValidators,
  Ln as shadeClass,
  Zl as sortItems,
  Ea as sortedItems,
  Ta as toCsv,
  Wl as toFilterString,
  Yl as toODataFilterString,
  sw as useContextMenu,
  xk as useDialog,
  Il as useFormContext,
  dk as useFormField,
  Dr as useMediaQuery,
  bk as useToast
};
