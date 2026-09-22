import { jsxs as S, jsx as n, Fragment as Ee } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ye, isValidElement as Tn, cloneElement as Br, useState as G, useRef as le, useCallback as q, useMemo as $e, useContext as Fr, createContext as qr, useEffect as we, Fragment as Jr, Children as Qr, useImperativeHandle as lr } from "react";
const eo = "_button_1uim6_1", to = "_filled_1uim6_29", no = "_flat_1uim6_30", ro = "_outlined_1uim6_31", oo = "_text_1uim6_32", so = "_primary_1uim6_108", ao = "_secondary_1uim6_110", lo = "_ghost_1uim6_112", io = "_danger_1uim6_114", co = "_success_1uim6_116", uo = "_info_1uim6_118", fo = "_loading_1uim6_122", _o = "_spinner_1uim6_125", po = "_xs_1uim6_137", ho = "_sm_1uim6_143", mo = "_md_1uim6_149", go = "_lg_1uim6_155", yo = "_xl_1uim6_161", bo = "_iconOnly_1uim6_167", xo = "_fullWidth_1uim6_193", kt = {
  button: eo,
  filled: to,
  flat: no,
  outlined: ro,
  text: oo,
  "style-primary": "_style-primary_1uim6_35",
  "tone-primary": "_tone-primary_1uim6_35",
  "style-secondary": "_style-secondary_1uim6_41",
  "tone-secondary": "_tone-secondary_1uim6_41",
  "style-base": "_style-base_1uim6_47",
  "style-light": "_style-light_1uim6_52",
  "style-dark": "_style-dark_1uim6_57",
  "style-danger": "_style-danger_1uim6_63",
  "tone-danger": "_tone-danger_1uim6_63",
  "style-success": "_style-success_1uim6_69",
  "tone-success": "_tone-success_1uim6_69",
  "style-warning": "_style-warning_1uim6_75",
  "tone-warning": "_tone-warning_1uim6_75",
  "style-info": "_style-info_1uim6_81",
  "tone-info": "_tone-info_1uim6_81",
  "shade-lighter": "_shade-lighter_1uim6_89",
  "shade-light": "_shade-light_1uim6_89",
  "shade-dark": "_shade-dark_1uim6_91",
  "shade-darker": "_shade-darker_1uim6_92",
  primary: so,
  secondary: ao,
  ghost: lo,
  danger: io,
  success: co,
  info: uo,
  loading: fo,
  spinner: _o,
  "dx-spin": "_dx-spin_1uim6_1",
  xs: po,
  sm: ho,
  md: mo,
  lg: go,
  xl: yo,
  iconOnly: bo,
  fullWidth: xo
}, vo = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function ko(e, t) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", a = t;
  if (r) {
    const h = vo[e];
    return { variant: h.variant, style: a ?? h.style };
  }
  const l = e ?? "filled";
  return { variant: l === "filled" || l === "flat" || l === "outlined" || l === "text" ? l : "filled", style: a ?? "primary" };
}
const Iy = qe(function({
  variant: t = "filled",
  severity: r,
  shade: a = "default",
  size: l = "md",
  fullWidth: c = !1,
  iconOnly: h = !1,
  loading: o = !1,
  className: s,
  type: i = "button",
  disabled: p,
  children: d,
  ...$
}, b) {
  const N = ko(t, r), k = a !== "default" ? `shade-${a}` : null, m = [
    kt.button,
    kt[N.variant],
    kt[`style-${N.style}`],
    // backwards-compat: tone-* still emitted
    kt[`tone-${N.style}`],
    k ? kt[k] : null,
    kt[l],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    t && kt[t] ? kt[t] : null,
    c ? kt.fullWidth : null,
    h ? kt.iconOnly : null,
    o ? kt.loading : null,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ S(
    "button",
    {
      ref: b,
      type: i,
      className: m,
      disabled: p || o,
      "aria-busy": o || void 0,
      ...$,
      children: [
        o ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: kt.spinner }) : null,
        d
      ]
    }
  );
}), wo = "_card_1qkae_1", $o = "_elevated_1qkae_8", No = "_filled_1qkae_13", So = "_outlined_1qkae_18", Do = "_interactive_1qkae_22", Mo = "_text_1qkae_30", zo = "_header_1qkae_46", Co = "_body_1qkae_53", Oo = "_footer_1qkae_63", yn = {
  card: wo,
  elevated: $o,
  filled: No,
  outlined: So,
  interactive: Do,
  text: Mo,
  header: zo,
  body: Co,
  footer: Oo
}, jy = qe(function({ variant: t = "elevated", header: r, footer: a, className: l, children: c, onKeyDown: h, ...o }, s) {
  const i = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ S(
      "div",
      {
        ref: s,
        role: i ? "button" : void 0,
        tabIndex: i ? 0 : void 0,
        onKeyDown: (p) => {
          h?.(p), !(!i || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
        },
        className: [yn.card, yn[t], l].filter(Boolean).join(" "),
        ...o,
        children: [
          r != null && /* @__PURE__ */ n("div", { className: yn.header, children: r }),
          /* @__PURE__ */ n("div", { className: yn.body, children: c }),
          a != null && /* @__PURE__ */ n("div", { className: yn.footer, children: a })
        ]
      }
    )
  );
});
function ir(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Eo = "_badge_7agrm_1", Io = "_xs_7agrm_14", jo = "_sm_7agrm_19", Ao = "_md_7agrm_24", To = "_lg_7agrm_29", Ro = "_xl_7agrm_34", Lo = "_neutral_7agrm_40", Po = "_primary_7agrm_45", Bo = "_secondary_7agrm_50", Fo = "_light_7agrm_55", qo = "_base_7agrm_60", Ko = "_dark_7agrm_65", Ho = "_info_7agrm_70", Uo = "_success_7agrm_75", Wo = "_warning_7agrm_80", Vo = "_danger_7agrm_85", Xo = "_filled_7agrm_92", Go = "_outlined_7agrm_142", Yo = "_text_7agrm_194", bn = {
  badge: Eo,
  xs: Io,
  sm: jo,
  md: Ao,
  lg: To,
  xl: Ro,
  neutral: Lo,
  primary: Po,
  secondary: Bo,
  light: Fo,
  base: qo,
  dark: Ko,
  info: Ho,
  success: Uo,
  warning: Wo,
  danger: Vo,
  filled: Xo,
  outlined: Go,
  text: Yo,
  "shade-lighter": "_shade-lighter_7agrm_238",
  "shade-light": "_shade-light_7agrm_238",
  "shade-dark": "_shade-dark_7agrm_244",
  "shade-darker": "_shade-darker_7agrm_247"
}, Ay = qe(function({ severity: t = "primary", variant: r = "filled", shade: a, size: l = "md", className: c, children: h, ...o }, s) {
  const i = t, p = ir(r, "filled"), d = a && a !== "default" ? `shade-${a}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: s,
      className: [bn.badge, bn[l], bn[i], bn[p], d ? bn[d] : null, c].filter(Boolean).join(" "),
      ...o,
      children: h
    }
  );
}), Zo = "_xs_1t3wj_2", Jo = "_sm_1t3wj_7", Qo = "_md_1t3wj_1", es = "_lg_1t3wj_17", ts = "_xl_1t3wj_22", ns = {
  xs: Zo,
  sm: Jo,
  md: Qo,
  lg: es,
  xl: ts
}, Ty = [
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
], rs = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(Ee, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(Ee, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(Ee, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ n("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ n("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ce = qe(function({ name: t, size: r = "md", strokeWidth: a = 2, className: l, ...c }, h) {
  const o = typeof r == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: h,
      className: [o ? ns[r] : null, l].filter(Boolean).join(" "),
      width: o ? void 0 : r,
      height: o ? void 0 : r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: a,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: rs[t]
    }
  );
}), os = "_stat_e3lee_1", ss = "_label_e3lee_8", as = "_row_e3lee_16", ls = "_value_e3lee_22", is = "_delta_e3lee_28", cs = "_success_e3lee_33", ds = "_danger_e3lee_37", us = "_neutral_e3lee_41", fs = "_hint_e3lee_45", Jt = {
  stat: os,
  label: ss,
  row: as,
  value: ls,
  delta: is,
  success: cs,
  danger: ds,
  neutral: us,
  hint: fs
}, Ry = qe(function({ label: t, value: r, delta: a, deltaTone: l = "neutral", hint: c, className: h, ...o }, s) {
  return /* @__PURE__ */ S("div", { ref: s, className: [Jt.stat, h].filter(Boolean).join(" "), ...o, children: [
    /* @__PURE__ */ n("div", { className: Jt.label, children: t }),
    /* @__PURE__ */ S("div", { className: Jt.row, children: [
      /* @__PURE__ */ n("div", { className: Jt.value, children: r }),
      a != null && /* @__PURE__ */ n("div", { className: [Jt.delta, Jt[l]].join(" "), children: a })
    ] }),
    c != null && /* @__PURE__ */ n("div", { className: Jt.hint, children: c })
  ] });
}), _s = "_wrap_1n4bf_1", ps = "_table_1n4bf_8", hs = "_caption_1n4bf_14", ms = "_none_1n4bf_51", gs = "_horizontal_1n4bf_57", ys = "_vertical_1n4bf_67", bs = "_alternating_1n4bf_85", xs = "_start_1n4bf_89", vs = "_center_1n4bf_93", ks = "_end_1n4bf_97", ws = "_empty_1n4bf_101", Wt = {
  wrap: _s,
  table: ps,
  caption: hs,
  none: ms,
  horizontal: gs,
  vertical: ys,
  alternating: bs,
  start: xs,
  center: vs,
  end: ks,
  empty: ws
};
function Ly({
  columns: e,
  rows: t,
  rowKey: r,
  empty: a,
  caption: l,
  gridLines: c = "default",
  allowAlternatingRows: h = !0,
  className: o
}) {
  const s = c === "default" || c === "both" ? "" : Wt[c];
  return /* @__PURE__ */ S("div", { className: [Wt.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S(
      "table",
      {
        className: [
          Wt.table,
          s,
          h ? Wt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ n("caption", { className: Wt.caption, children: l }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((i) => /* @__PURE__ */ n(
            "th",
            {
              className: i.align != null ? Wt[i.align] : void 0,
              scope: "col",
              children: i.header
            },
            i.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((i) => /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "td",
            {
              className: p.align != null ? Wt[p.align] : void 0,
              children: p.render != null ? p.render(i) : i[p.key]
            },
            p.key
          )) }, r(i))) })
        ]
      }
    ),
    t.length === 0 && a != null && /* @__PURE__ */ n("div", { className: Wt.empty, children: a })
  ] });
}
const $s = "_emptyState_7sl2y_1", Ns = "_icon_7sl2y_13", Ss = "_title_7sl2y_18", Ds = "_description_7sl2y_24", Ms = "_action_7sl2y_30", xn = {
  emptyState: $s,
  icon: Ns,
  title: Ss,
  description: Ds,
  action: Ms
};
function Py({ icon: e, title: t, description: r, action: a, className: l }) {
  return /* @__PURE__ */ S("div", { className: [xn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: xn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: xn.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: xn.description, children: r }),
    a != null && /* @__PURE__ */ n("div", { className: xn.action, children: a })
  ] });
}
const zs = "_field_3cvvz_1", Cs = "_label_3cvvz_8", Os = "_required_3cvvz_14", Es = "_hint_3cvvz_19", Is = "_error_3cvvz_24", vn = {
  field: zs,
  label: Cs,
  required: Os,
  hint: Es,
  error: Is
};
function By({ label: e, htmlFor: t, required: r, hint: a, supporting: l, error: c, children: h, className: o }) {
  const s = a ?? l, i = Ye(), p = Ye(), d = Ye(), $ = c != null ? p : s != null ? d : null, b = typeof h == "function" ? h({ inputId: i, hintId: d, errorId: p }) : h, N = Tn(b) && typeof b.props.id == "string" ? b.props.id : void 0, k = N ?? t ?? i, m = Tn(b) && ($ != null || N == null && typeof b.type == "string"), _ = N != null || t != null || m, f = m && Tn(b) ? Br(
    b,
    {
      id: k,
      "aria-describedby": $ != null ? [
        b.props["aria-describedby"],
        $
      ].filter((g) => typeof g == "string").join(" ") || void 0 : b.props["aria-describedby"],
      "aria-invalid": c != null ? !0 : b.props["aria-invalid"]
    }
  ) : b;
  return /* @__PURE__ */ S("div", { className: [vn.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ S("label", { className: vn.label, htmlFor: _ ? k : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ n("span", { className: vn.required, "aria-hidden": "true", children: "*" })
    ] }),
    f,
    c != null ? /* @__PURE__ */ n("div", { id: p, className: vn.error, "aria-live": "polite", children: c }) : s != null ? /* @__PURE__ */ n("div", { id: d, className: vn.hint, children: s }) : null
  ] });
}
const js = "_form_fwqyn_1", As = {
  form: js
}, Kr = qr(null);
function Ts() {
  const e = Fr(Kr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Fy({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: a,
  method: l,
  children: c,
  className: h
}) {
  const [o, s] = G({}), [i, p] = G(0), d = le(o);
  d.current = o;
  const $ = q((g) => {
    s((w) => w[g.name] === g ? w : { ...w, [g.name]: g });
  }, []), b = q((g) => {
    s((w) => {
      if (!(g in w)) return w;
      const v = { ...w };
      return delete v[g], v;
    });
  }, []), N = q(() => {
    const g = {};
    for (const w of Object.values(d.current)) {
      const v = w.validate();
      v.length > 0 && (g[w.name] = v);
    }
    return g;
  }, []), k = q(() => {
    const g = N();
    p((w) => w + 1), Object.keys(g).length === 0 ? t?.(e) : r?.(g);
  }, [N, e, t, r]), m = (g) => {
    a != null && l != null || (g.preventDefault(), k());
  }, _ = $e(
    () => ({ registerField: $, unregisterField: b, submit: k, submitCount: i }),
    [$, b, k, i]
  ), f = [As.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Kr.Provider, { value: _, children: /* @__PURE__ */ n("form", { className: f, onSubmit: m, action: a, method: l, noValidate: !0, children: c }) });
}
const sn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", qy = (e = "Required") => (t) => sn(t) ? e : null, Ky = (e = "Invalid email") => (t) => sn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Hy = (e, t = "Invalid format") => (r) => sn(r) || e.test(String(r)) ? null : t, Uy = (e, t = `Minimum ${e} characters`) => (r) => sn(r) || String(r).length >= e ? null : t, Wy = (e, t = `Maximum ${e} characters`) => (r) => sn(r) || String(r).length <= e ? null : t, Vy = (e, t, r = `Between ${e} and ${t}`) => (a) => {
  if (sn(a)) return null;
  const l = Number(a);
  return !Number.isNaN(l) && l >= e && l <= t ? null : r;
}, Xy = (e, t = "Values do not match") => (r, a) => {
  if (sn(r)) return null;
  const l = typeof e == "function" ? e(a) : e;
  return r === l ? null : t;
}, Gy = (e = "Required") => (t) => t === !0 ? null : e, Yy = (e) => (t, r) => e(t, r);
function Rs(e, t, r) {
  return e.map((a) => a(t, r)).filter((a) => a != null);
}
function Zy(e, t) {
  const { registerField: r, unregisterField: a, submitCount: l } = Ts(), [c, h] = G(t?.initialValue), [o, s] = G(!1), [i, p] = G(!1), d = le(() => []);
  d.current = () => Rs(t?.validate ?? [], c), we(() => (r({ name: e, validate: () => d.current() }), () => a(e)), [e, r, a]), we(() => {
    l > 0 && (s(!0), p(!1));
  }, [l]);
  const $ = o && !i ? d.current() : [];
  return { value: c, setValue: (N) => {
    h(N), p(!0);
  }, errors: $ };
}
const Ls = "_select_6ntdq_1", Ps = "_invalid_6ntdq_33", Bs = "_xs_6ntdq_40", Fs = "_sm_6ntdq_48", qs = "_md_6ntdq_56", Ks = "_lg_6ntdq_62", Hs = "_xl_6ntdq_68", Gn = {
  select: Ls,
  invalid: Ps,
  xs: Bs,
  sm: Fs,
  md: qs,
  lg: Ks,
  xl: Hs
}, gn = qe(function({ size: t = "md", invalid: r = !1, options: a, children: l, className: c, ...h }, o) {
  return /* @__PURE__ */ n(
    "select",
    {
      ref: o,
      className: [Gn.select, Gn[t], r ? Gn.invalid : null, c].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...h,
      children: a != null ? a.map((s) => /* @__PURE__ */ n("option", { value: s.value, disabled: s.disabled, children: s.label }, s.value)) : l
    }
  );
}), Hr = [
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
], kn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Us = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"];
function cr(e) {
  return Us.includes(e);
}
function Xn(e, t) {
  return t.split(".").reduce((r, a) => {
    if (r != null)
      return r[a];
  }, e);
}
function fr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function jn(e, t) {
  const r = fr(e), a = fr(t);
  if (typeof r == "number" && typeof a == "number") return r - a;
  const l = String(r ?? ""), c = String(a ?? "");
  return l < c ? -1 : l > c ? 1 : 0;
}
function _r(e, t, r) {
  const a = Xn(t, e.property), l = pr(a, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0 && !cr(e.secondOperator)) return l;
  const c = pr(a, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? l && c : l || c;
}
function pr(e, t, r, a) {
  const l = a === "CaseInsensitive", c = (s) => l && typeof s == "string" ? s.toLowerCase() : s, h = c(e), o = c(t);
  switch (r) {
    case "Equals":
      return h === o || Array.isArray(h) && h.some((s) => c(s) === o);
    case "NotEquals":
      return h !== o && !(Array.isArray(h) && h.some((s) => c(s) === o));
    case "LessThan":
      return jn(h, o) < 0;
    case "LessThanOrEquals":
      return jn(h, o) <= 0;
    case "GreaterThan":
      return jn(h, o) > 0;
    case "GreaterThanOrEquals":
      return jn(h, o) >= 0;
    case "Contains":
      return typeof h == "string" && typeof o == "string" && h.includes(o);
    case "StartsWith":
      return typeof h == "string" && typeof o == "string" && h.startsWith(o);
    case "EndsWith":
      return typeof h == "string" && typeof o == "string" && h.endsWith(o);
    case "DoesNotContain":
      return typeof h == "string" && typeof o == "string" && !h.includes(o);
    case "In":
      return Array.isArray(o) && o.some((s) => c(s) === h);
    case "NotIn":
      return Array.isArray(o) && !o.some((s) => c(s) === h);
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
function dr(e) {
  return "filters" in e;
}
function Ur(e, t, r = {}) {
  const a = r.logicalOperator ?? "And", l = r.caseSensitivity ?? "CaseInsensitive";
  if (dr(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? a;
    return t.filters[c === "Or" ? "some" : "every"](
      (h) => Ur(e, h, { logicalOperator: c, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", _r(t, e, l);
}
function Wr(e, t, r = {}) {
  return e.filter((a) => Ur(a, t, r));
}
function Ws(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${Ws(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function Vs(e) {
  const t = (a, l) => {
    switch (a) {
      case "Equals":
        return `${e.property}.Equals(${gt(l)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${gt(l)})`;
      case "LessThan":
        return `${e.property}.LessThan(${gt(l)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${gt(l)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${gt(l)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${gt(l)})`;
      case "Contains":
        return `${e.property}.Contains(${gt(l)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${gt(l)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${gt(l)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${gt(l)})`;
      case "In":
        return `${e.property}.In(${gt(l)})`;
      case "NotIn":
        return `!${e.property}.In(${gt(l)})`;
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
  if (e.secondOperator == null || e.secondValue === void 0 && !cr(e.secondOperator))
    return t(e.operator, e.value);
  const r = e.logicalOperator ?? "And";
  return `(${t(e.operator, e.value)} ${r} ${t(
    e.secondOperator,
    e.secondValue
  )})`;
}
function Xs(e) {
  return dr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Xs).filter(Boolean).join(` ${e.operator} `)})` : Vs(e);
}
function Gs(e) {
  return e.replace(/'/g, "''");
}
const Ys = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Zs(e, t) {
  const r = e.property, a = t === "CaseInsensitive", l = (s) => a ? `tolower(${s})` : s, c = (s) => typeof s == "string" ? `'${Gs(s)}'` : s instanceof Date ? `'${s.toISOString()}'` : String(s ?? ""), h = (s, i) => {
    const p = typeof i == "string", d = p && a ? l(r) : r;
    switch (s) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${d} ${Ys[s]} ${p && a ? l(c(i)) : c(i)}`;
      case "Contains":
        return `contains(${l(r)}, ${l(c(i))})`;
      case "StartsWith":
        return `startswith(${l(r)}, ${l(c(i))})`;
      case "EndsWith":
        return `endswith(${l(r)}, ${l(c(i))})`;
      case "DoesNotContain":
        return `not(contains(${l(r)}, ${l(c(i))}))`;
      case "In":
        return Array.isArray(i) ? `${d} in (${i.map(($) => c($)).join(", ")})` : `${d} in (${c(i)})`;
      case "NotIn":
        return Array.isArray(i) ? `not(${d} in (${i.map(($) => c($)).join(", ")}))` : `not(${d} in (${c(i)}))`;
      case "IsNull":
        return `${r} eq null`;
      case "IsNotNull":
        return `${r} ne null`;
      case "IsEmpty":
        return `${r} eq ''`;
      case "IsNotEmpty":
        return `${r} ne ''`;
      case "Custom":
        return `${r} custom`;
      default:
        return "";
    }
  };
  if (e.secondOperator == null || e.secondValue === void 0 && !cr(e.secondOperator))
    return h(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${h(e.operator, e.value)} ${o} ${h(
    e.secondOperator,
    e.secondValue
  )})`;
}
function Js(e, t = {}) {
  const r = t.caseSensitivity ?? "CaseInsensitive";
  if (dr(e)) {
    if (e.filters.length === 0) return "";
    const a = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Js(l, { caseSensitivity: r })).filter(Boolean).join(` ${a} `)})`;
  }
  return Zs(e, r);
}
function Qs(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, a) => {
    for (const l of t) {
      const c = l.sortOrder === "Ascending" ? 1 : -1, h = jn(Xn(r, l.property), Xn(a, l.property));
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const ea = "_filter_m5ukp_1", ta = "_rows_m5ukp_9", na = "_row_m5ukp_9", ra = "_join_m5ukp_21", oa = "_property_m5ukp_30", sa = "_operator_m5ukp_34", aa = "_value_m5ukp_38", la = "_remove_m5ukp_42", ia = "_bar_m5ukp_58", ca = "_add_m5ukp_64", da = "_custom_m5ukp_78", ua = "_summary_m5ukp_82", fa = "_second_m5ukp_87", _a = "_secondAdd_m5ukp_91", pa = "_addSecond_m5ukp_95", ha = "_joinSelect_m5ukp_109", Ge = {
  filter: ea,
  rows: ta,
  row: na,
  join: ra,
  property: oa,
  operator: sa,
  value: aa,
  remove: la,
  bar: ia,
  add: ca,
  custom: da,
  summary: ua,
  second: fa,
  secondAdd: _a,
  addSecond: pa,
  joinSelect: ha
}, an = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], hr = {
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
function mr({
  property: e,
  value: t,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(Ee, { children: e.editor({ value: t, onChange: r }) });
  const a = e.type ?? "string";
  if (a === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      gn,
      {
        "aria-label": e.title ?? e.name,
        className: Ge.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => r(c.target.value)
      }
    );
  if (a === "boolean")
    return /* @__PURE__ */ n(
      gn,
      {
        "aria-label": e.title ?? e.name,
        className: Ge.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (c) => {
          c.target.value === "" ? r(void 0) : r(c.target.value === "true");
        }
      }
    );
  const l = a === "number" ? { type: "number" } : a === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ge.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (c) => r(a === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value)
    }
  );
}
function Jy({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: a,
  uniqueFilters: l = !1,
  className: c,
  viewChanged: h,
  items: o,
  children: s
}) {
  const [i, p] = G(
    () => a != null && a.length > 0 ? a.map((_, f) => ({ id: f, ..._ })) : [{ id: 0, property: e[0]?.name ?? "", operator: kn[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (_, f) => {
    p((g) => g.map((w) => w.id === _ ? { ...w, ...f } : w));
  }, $ = () => {
    const _ = i[i.length - 1], f = Math.max(0, ...i.map((w) => w.id)) + 1, g = e[0];
    p((w) => [
      ...w,
      {
        id: f,
        property: _?.property ?? g?.name ?? "",
        operator: kn[e.find((v) => v.name === (_?.property ?? g?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (_) => {
    p((f) => f.length > 1 ? f.filter((g) => g.id !== _) : f);
  }, N = $e(() => {
    const _ = [];
    for (const f of i) {
      if (f.property === "" || (f.value == null || f.value === "") && !an.includes(f.operator)) continue;
      const w = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, v = f.secondValue == null || f.secondValue === "";
      f.secondOperator != null && (!v || an.includes(f.secondOperator)) && (w.secondOperator = f.secondOperator, w.secondValue = f.secondValue, w.logicalOperator = f.logicalOperator ?? "And"), _.push(w);
    }
    return _;
  }, [i]), k = $e(() => o == null || N.length === 0 ? o : Wr(o, { operator: t, filters: N }, { caseSensitivity: r }), [o, N, t, r]);
  we(() => {
    h != null && o != null && h(k ?? []);
  }, [k]);
  const m = (_) => e.find((f) => f.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ S("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: i.map((_, f) => {
      const g = m(_.property), w = l ? [kn[g.type ?? "string"]] : Hr, v = !an.includes(_.operator), E = _.secondOperator != null;
      return /* @__PURE__ */ S(Jr, { children: [
        /* @__PURE__ */ S("div", { className: Ge.row, children: [
          f > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: Ge.property,
              value: _.property,
              onChange: (u) => {
                const x = e.find((C) => C.name === u.target.value);
                d(_.id, {
                  property: u.target.value,
                  operator: kn[x?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((u) => ({ value: u.name, label: u.title ?? u.name }))
            }
          ),
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: Ge.operator,
              value: _.operator,
              onChange: (u) => {
                const x = u.target.value;
                d(
                  _.id,
                  an.includes(x) ? {
                    operator: x,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: x }
                );
              },
              options: w.map((u) => ({ value: u, label: hr[u] }))
            }
          ),
          v ? /* @__PURE__ */ n(mr, { property: g, value: _.value, onChange: (u) => d(_.id, { value: u }) }) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => b(_.id),
              children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
            }
          )
        ] }),
        v ? E ? /* @__PURE__ */ S("div", { className: [Ge.row, Ge.second].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} second-operator logic`,
              className: Ge.joinSelect,
              value: _.logicalOperator ?? "And",
              onChange: (u) => d(_.id, { logicalOperator: u.target.value }),
              options: [
                { value: "And", label: "And" },
                { value: "Or", label: "Or" }
              ]
            }
          ),
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} second operator`,
              className: Ge.operator,
              value: _.secondOperator,
              onChange: (u) => {
                const x = u.target.value;
                d(
                  _.id,
                  an.includes(x) ? { secondOperator: x, secondValue: void 0 } : { secondOperator: x }
                );
              },
              options: w.map((u) => ({
                value: u,
                label: hr[u]
              }))
            }
          ),
          _.secondOperator == null || !an.includes(_.secondOperator) ? /* @__PURE__ */ n(
            mr,
            {
              property: g,
              value: _.secondValue,
              onChange: (u) => d(_.id, { secondValue: u })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove second condition ${f + 1}`,
              onClick: () => d(_.id, {
                secondOperator: void 0,
                secondValue: void 0,
                logicalOperator: void 0
              }),
              children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
            }
          )
        ] }) : /* @__PURE__ */ n("div", { className: Ge.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ge.addSecond,
            onClick: () => d(_.id, {
              secondOperator: kn[g.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ S("div", { className: Ge.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ge.add, onClick: $, children: "Add filter" }),
      s != null ? /* @__PURE__ */ n("div", { className: Ge.custom, children: s }) : null,
      o != null ? /* @__PURE__ */ S("span", { className: Ge.summary, "aria-live": "polite", children: [
        k?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const ma = "_pager_ps38y_1", ga = "_alignLeft_ps38y_10", ya = "_alignCenter_ps38y_14", ba = "_alignRight_ps38y_18", xa = "_alignJustify_ps38y_22", va = "_summary_ps38y_26", ka = "_controls_ps38y_31", wa = "_button_ps38y_37", $a = "_active_ps38y_73", Na = "_ellipsis_ps38y_85", Sa = "_size_ps38y_91", lt = {
  pager: ma,
  alignLeft: ga,
  alignCenter: ya,
  alignRight: ba,
  alignJustify: xa,
  summary: va,
  controls: ka,
  button: wa,
  active: $a,
  ellipsis: Na,
  size: Sa
};
function Da(e, t, r, a) {
  return e.replace("{0}", String(t)).replace("{1}", String(r)).replace("{2}", String(a));
}
function gr(e, t) {
  return e.replace("{0}", String(t));
}
function Ma(e, t, r) {
  if (t <= r) return Array.from({ length: t }, (o, s) => s + 1);
  const a = Math.floor(r / 2);
  let l = Math.max(1, e - a);
  const c = Math.min(t, l + r - 1);
  l = Math.max(1, c - r + 1);
  const h = [];
  for (let o = l; o <= c; o++) h.push(o);
  return l > 2 && h.unshift("ellipsis"), l > 1 && h.unshift(1), c < t - 1 && h.push("ellipsis"), c < t && h.push(t), h;
}
function za({
  count: e,
  pageSize: t,
  page: r,
  pageNumber: a,
  defaultPage: l = 1,
  pageSizeOptions: c,
  pageNumbersCount: h = 5,
  alwaysVisible: o = !1,
  horizontalAlign: s = "left",
  showPagingSummary: i,
  showSummary: p,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: $ = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: b,
  summaryTemplate: N,
  pageSizeText: k = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: _ = "Previous page",
  nextPageTitle: f = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: w = "Page {0}",
  pageAriaLabelFormat: v = "Page {0}",
  onPageChange: E,
  onPageSizeChange: u,
  ariaLabel: x = "Pagination",
  className: C
}) {
  const I = r ?? a ?? l, [z, D] = G(I), y = r !== void 0 || a !== void 0, O = y ? I : z, L = Math.max(1, Math.ceil(e / t)), j = Math.min(Math.max(1, O), L), R = i ?? p ?? !0, H = o || L > 1, V = Ma(j, L, h), Y = q(
    (U) => {
      const X = Math.min(Math.max(1, U), L);
      y || D(X);
      const P = (X - 1) * t;
      E?.({ page: X, skip: P, top: t, pageCount: L, pageSize: t });
    },
    [y, E, L, t]
  ), ee = s === "center" ? lt.alignCenter : s === "right" ? lt.alignRight : s === "justify" ? lt.alignJustify : lt.alignLeft, te = { count: e, pageNumber: j, pageSize: t, pageCount: L }, ue = (U) => {
    const X = Array.from(U.currentTarget.querySelectorAll("button[data-pager-page]")), P = X.indexOf(document.activeElement);
    P !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (X[P + 1] ?? X[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (X[P - 1] ?? X[X.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), X[0]?.focus()) : U.key === "End" && (U.preventDefault(), X[X.length - 1]?.focus()));
  };
  return H ? /* @__PURE__ */ S("nav", { className: [lt.pager, ee, C].filter(Boolean).join(" "), "aria-label": x, children: [
    R && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: b ? b(te) : N ? N({ count: e, pageNumber: j, pageSize: t }) : Da($, j, L, e) }),
    /* @__PURE__ */ S("div", { className: lt.controls, role: "group", "aria-label": x, onKeyDown: ue, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j <= 1,
          onClick: () => Y(1),
          "aria-label": m,
          title: m,
          children: "«"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j <= 1,
          onClick: () => Y(j - 1),
          "aria-label": _,
          title: _,
          children: "‹"
        }
      ),
      V.map(
        (U, X) => U === "ellipsis" ? /* @__PURE__ */ n("span", { className: lt.ellipsis, "aria-hidden": "true", children: "…" }, `e${X}`) : /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "data-pager-page": U,
            className: [lt.button, U === j ? lt.active : ""].filter(Boolean).join(" "),
            "aria-current": U === j ? "page" : void 0,
            "aria-label": gr(v, U),
            title: gr(w, U),
            onClick: () => Y(U),
            children: U
          },
          U
        )
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j >= L,
          onClick: () => Y(j + 1),
          "aria-label": f,
          title: f,
          children: "›"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j >= L,
          onClick: () => Y(L),
          "aria-label": g,
          title: g,
          children: "»"
        }
      )
    ] }),
    d && c && c.length > 0 && /* @__PURE__ */ S("label", { className: lt.size, children: [
      /* @__PURE__ */ n("span", { children: k }),
      /* @__PURE__ */ n(
        "select",
        {
          value: t,
          onChange: (U) => u?.(Number(U.target.value)),
          "aria-label": k,
          children: c.map((U) => /* @__PURE__ */ n("option", { value: U, children: U }, U))
        }
      )
    ] })
  ] }) : null;
}
function nr(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: a, showSummary: l, ...c } = e;
  return /* @__PURE__ */ n(
    za,
    {
      page: t,
      showPagingSummary: l,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: a ? (o) => a({ count: o.count, pageNumber: o.pageNumber, pageSize: o.pageSize }) : void 0,
      onPageChange: r ? (o) => r(o.page) : void 0,
      ...c
    }
  );
}
function Ca(e, t, r, a, l, c) {
  if (!t || !r) return e.map((s) => ({ type: "row", row: s }));
  const h = /* @__PURE__ */ new Map();
  e.forEach((s) => {
    const i = String(l(s, t) ?? ""), p = h.get(i);
    p ? p.push(s) : h.set(i, [s]);
  });
  const o = [];
  return h.forEach((s, i) => {
    const p = s[0], d = p != null ? l(p, t) : void 0;
    o.push({
      type: "group",
      group: { key: i, display: c(d), property: t, title: r.title ?? t, count: s.length }
    }), a.has(i) && s.forEach(($) => o.push({ type: "row", row: $ }));
  }), o;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function Oa(e, t) {
  const r = {};
  let a = 0;
  return e.forEach(({ key: l, column: c }) => {
    if (!c.frozen) return;
    r[l] = a === 0 ? "0px" : `${a}px`;
    const h = t[l] ?? c.width ?? "8rem";
    a += parseFloat(h);
  }), r;
}
function Ea(e, t) {
  if (e !== void 0)
    switch (t) {
      case "number": {
        const r = Number(e);
        return Number.isNaN(r) ? e : r;
      }
      case "date": {
        const r = new Date(e);
        return Number.isNaN(r.getTime()) ? e : r;
      }
      case "boolean":
        return e === "true" ? !0 : e === "false" ? !1 : e;
      default:
        return e;
    }
}
function wn(e, t) {
  if (t != null)
    return Xn(e, t);
}
function yr(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(t);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (t === "d" || t === "D") {
    const a = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return a != null && !Number.isNaN(a.getTime()) ? a.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const br = ["Ascending", "Descending", null];
function Ia(e, t, r = {}) {
  const a = e.find((c) => c.property === t), l = br[(a ? br.indexOf(a.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((c) => c.property !== t) : r.multi ? [...e.filter((c) => c.property !== t), { property: t, sortOrder: l }] : [{ property: t, sortOrder: l }];
}
function ja(e, t) {
  return Qs(e, t);
}
function Aa(e, t, r) {
  const a = Math.max(1, Math.ceil(e.length / r)), l = Math.min(Math.max(1, t), a), c = (l - 1) * r;
  return { items: e.slice(c, c + r), pageCount: a, pageNumber: l, total: e.length };
}
function Ta(e, t, r = {}) {
  const a = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(([o, s]) => ({
    property: o,
    operator: s.operator ?? "Contains",
    value: Ea(s.value, r.types?.[o] ?? "string")
  })), l = a.length > 0 ? Wr(e, { operator: r.logicalOperator ?? "And", filters: a }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, c = ja(l, t.sorts);
  return { ...Aa(c, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function Ra(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const La = "_grid_1my0o_1", Pa = "_toolbar_1my0o_8", Ba = "_picker_1my0o_13", Fa = "_pickerButton_1my0o_17", qa = "_pickerPanel_1my0o_31", Ka = "_pickerItem_1my0o_46", Ha = "_groupPanel_1my0o_55", Ua = "_groupPanelActive_1my0o_66", Wa = "_groupPanelText_1my0o_70", Va = "_groupChip_1my0o_74", Xa = "_groupRemove_1my0o_85", Ga = "_groupRow_1my0o_94", Ya = "_groupCell_1my0o_98", Za = "_groupToggle_1my0o_103", Ja = "_editRow_1my0o_116", Qa = "_editCell_1my0o_120", el = "_editInput_1my0o_125", tl = "_commandCell_1my0o_135", nl = "_commandButton_1my0o_141", rl = "_data_1my0o_156", ol = "_table_1my0o_163", sl = "_header_1my0o_169", al = "_center_1my0o_181", ll = "_right_1my0o_185", il = "_sortButton_1my0o_189", cl = "_sortIndicator_1my0o_207", dl = "_sortIndex_1my0o_211", ul = "_cell_1my0o_222", fl = "_clickable_1my0o_236", _l = "_frozen_1my0o_244", pl = "_selected_1my0o_250", hl = "_resizeHandle_1my0o_254", ml = "_filterCell_1my0o_272", gl = "_filterSelect_1my0o_280", yl = "_filterInput_1my0o_290", bl = "_empty_1my0o_301", xl = "_loading_1my0o_307", vl = "_visuallyHidden_1my0o_317", ge = {
  grid: La,
  toolbar: Pa,
  picker: Ba,
  pickerButton: Fa,
  pickerPanel: qa,
  pickerItem: Ka,
  groupPanel: Ha,
  groupPanelActive: Ua,
  groupPanelText: Wa,
  groupChip: Va,
  groupRemove: Xa,
  groupRow: Ga,
  groupCell: Ya,
  groupToggle: Za,
  editRow: Ja,
  editCell: Qa,
  editInput: el,
  commandCell: tl,
  commandButton: nl,
  data: rl,
  table: ol,
  header: sl,
  center: al,
  right: ll,
  sortButton: il,
  sortIndicator: cl,
  sortIndex: dl,
  cell: ul,
  clickable: fl,
  frozen: _l,
  selected: pl,
  resizeHandle: hl,
  filterCell: ml,
  filterSelect: gl,
  filterInput: yl,
  empty: bl,
  loading: xl,
  visuallyHidden: vl
}, kl = {
  Ascending: "ascending",
  Descending: "descending"
};
function xr(e, t) {
  return e.filterable ?? t;
}
function wl(e, t) {
  return e.sortable ?? t;
}
function $l(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Qy({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: a = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: c = !1,
  allowFiltering: h = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: s = "And",
  allowPaging: i = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: $ = 5,
  pagerPosition: b = "Bottom",
  showPagingSummary: N = !0,
  showPageSizeSelector: k = !0,
  selectionMode: m = "None",
  selectedKeys: _,
  onSelectionChange: f,
  showColumnPicker: g = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: E = !1,
  allowGrouping: u = !1,
  groupPanelText: x = "Drag a column header here to group",
  groupExpanded: C = !0,
  editMode: I = "None",
  allowRowCreate: z = !1,
  onRowUpdate: D,
  onRowCreate: y,
  onRowDelete: O,
  isLoading: L = !1,
  empty: j = "No records found",
  ariaLabel: R,
  className: H,
  onRowClick: V
}) {
  const [Y, ee] = G([]), [te, ue] = G(/* @__PURE__ */ new Map()), [U, X] = G(1), [P, se] = G(p), [J, ce] = G(
    () => e.map((A, T) => Ln(A, T))
  ), [ae, be] = G(
    () => new Set(e.map((A, T) => A.visible !== !1 ? Ln(A, T) : "").filter(Boolean))
  ), [ke, Be] = G({}), [ve, We] = G(!1), [ye, Ze] = G(null), [Ve, Le] = G(null), [tt, Qe] = G(null), [et, W] = G({}), M = le(null), F = le(null), ne = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((T, ie) => A.set(Ln(T, ie), T)), A;
  }, [e]), fe = $e(
    () => J.filter((A) => ae.has(A)).map((A) => ({ key: A, column: ne.get(A) })).filter((A) => A.column != null),
    [J, ae, ne]
  ), re = $e(
    () => Oa(fe, ke),
    [fe, ke]
  ), me = I !== "None" || O != null || z, Ne = $e(
    () => Ta(t, { sorts: Y, filters: te, pageNumber: U, pageSize: P }, {
      logicalOperator: s,
      caseSensitivity: o,
      types: Object.fromEntries(
        e.filter((A) => A.type != null && A.property != null).map((A) => [A.property, A.type])
      )
    }),
    [t, Y, te, U, P, s, o, e]
  ), Fe = $e(
    () => ye ? e.find((A) => A.property === ye) : void 0,
    [ye, e]
  ), Je = $e(
    () => Ve ?? new Set(C ? Ne.items.map((A) => String(wn(A, ye ?? "") ?? "")) : []),
    [Ve, C, Ne.items, ye]
  ), dt = $e(
    () => Ca(
      Ne.items,
      ye ?? void 0,
      Fe,
      Je,
      wn,
      (A) => yr(A, Fe?.format)
    ),
    [Ne.items, ye, Fe, Je]
  ), xt = $e(
    () => ye ? fe.filter((A) => A.column.property !== ye) : fe,
    [fe, ye]
  ), Q = (A) => {
    A !== "" && ee(Ia(Y, A, { multi: l }));
  }, De = (A, T) => {
    ue((ie) => {
      const he = new Map(ie);
      return he.set(A, T), he;
    }), X(1);
  }, nt = (A) => {
    se(A), X(1);
  }, Ut = (A) => {
    if (m === "None") return;
    const T = r(A), ie = _ ?? [];
    let he;
    m === "Single" ? he = ie.length === 1 && ie[0] === T ? [] : [T] : he = ie.includes(T) ? ie.filter((Ie) => Ie !== T) : [...ie, T], f?.(he);
  }, St = (A) => {
    V?.(A);
  }, Me = (A, T, ie) => {
    M.current = { key: A, startX: T, startWidth: ie };
  }, Xe = (A) => {
    const T = M.current;
    if (!T) return;
    const ie = A - T.startX, he = Math.max(48, T.startWidth + ie);
    Be((Ie) => ({ ...Ie, [T.key]: `${he}px` }));
  }, vt = () => {
    M.current = null;
  }, Rt = (A) => {
    F.current = A;
  }, Zt = (A) => {
    const T = F.current;
    F.current = null, !(!T || T === A) && ce((ie) => {
      const he = [...ie], Ie = he.indexOf(T), je = he.indexOf(A);
      return Ie < 0 || je < 0 ? ie : (he.splice(Ie, 1), he.splice(je, 0, T), he);
    });
  }, K = (A) => {
    be((T) => {
      const ie = new Set(T);
      return ie.has(A) ? ie.delete(A) : ie.add(A), ie;
    });
  }, de = () => {
    const A = F.current;
    if (F.current = null, !A || !u) return;
    const ie = ne.get(A)?.property;
    ie && (Ze(ie), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, Ke = (A) => {
    Le((T) => {
      const ie = T ?? new Set(C ? Ne.items.map((Ie) => String(wn(Ie, ye ?? "") ?? "")) : []), he = new Set(ie);
      return he.has(A) ? he.delete(A) : he.add(A), he;
    });
  }, Lt = (A) => {
    const T = {};
    e.forEach((ie) => {
      ie.property && (T[ie.property] = wn(A, ie.property));
    }), W(T), Qe(String(r(A)));
  }, Dt = () => {
    const A = {};
    e.forEach((T) => {
      T.property && T.type === "boolean" && (A[T.property] = !1);
    }), W(A), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, Z = (A) => {
    if (tt === "__new__") {
      const T = Object.fromEntries(
        e.filter((ie) => ie.property).map((ie) => [ie.property, et[ie.property]])
      );
      y?.(T);
    } else if (A != null) {
      const T = { ...A, ...et };
      D?.(A, T);
    }
    B();
  }, oe = i && (b === "Top" || b === "TopAndBottom"), pe = i && (b === "Bottom" || b === "TopAndBottom"), _e = h && e.some((A) => xr(A, h)), xe = (A, T, ie) => A.render ? A.render(T, { index: 0 }) : yr(wn(T, A.property), A.format), Te = (A) => {
    const T = [ge.cell];
    return A.align === "center" && T.push(ge.center), A.align === "right" && T.push(ge.right), A.frozen && T.push(ge.frozen), T.join(" ");
  };
  return /* @__PURE__ */ S("div", { className: [ge.grid, H].filter(Boolean).join(" "), children: [
    oe && /* @__PURE__ */ n(
      nr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: $,
        showSummary: N,
        showPageSizeSelector: k,
        ariaLabel: pe ? "Pagination (top)" : "Pagination",
        onPageChange: X,
        onPageSizeChange: nt
      }
    ),
    (u || z || g) && /* @__PURE__ */ S("div", { className: ge.toolbar, children: [
      u && /* @__PURE__ */ n(
        "div",
        {
          className: [ge.groupPanel, ye ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: u ? (A) => A.preventDefault() : void 0,
          onDrop: u ? de : void 0,
          children: ye ? /* @__PURE__ */ S("span", { className: ge.groupChip, children: [
            Fe?.title ?? ye,
            ":",
            " ",
            /* @__PURE__ */ n("button", { type: "button", className: ge.groupRemove, onClick: Pe, "aria-label": `Remove group by ${Fe?.title ?? ye}`, children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" }) })
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: x })
        }
      ),
      z && /* @__PURE__ */ n("button", { type: "button", className: ge.pickerButton, onClick: Dt, children: "Add row" }),
      g && /* @__PURE__ */ S("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => We((A) => !A),
            children: w
          }
        ),
        ve && /* @__PURE__ */ n("div", { className: ge.pickerPanel, role: "menu", "aria-label": w, children: e.map((A, T) => {
          const ie = Ln(A, T);
          return /* @__PURE__ */ S("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                checked: ae.has(ie),
                onChange: () => K(ie)
              }
            ),
            A.title ?? A.property
          ] }, ie);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { className: ge.data, children: [
      /* @__PURE__ */ S(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": Ne.total + 1,
          "aria-label": R,
          "aria-busy": L || void 0,
          children: [
            /* @__PURE__ */ S("colgroup", { children: [
              xt.map(({ key: A, column: T }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: ke[A] ?? T.width,
                    minWidth: T.minWidth,
                    maxWidth: T.maxWidth
                  }
                },
                A
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ S("thead", { children: [
              /* @__PURE__ */ S("tr", { children: [
                xt.map(({ key: A, column: T }) => {
                  const ie = wl(T, a), he = Y.find((ze) => ze.property === T.property), Ie = he ? Y.indexOf(he) + 1 : 0, je = T.align ?? "left";
                  return /* @__PURE__ */ S(
                    "th",
                    {
                      "aria-sort": ie && he ? kl[he.sortOrder] : "none",
                      className: [
                        ge.header,
                        je === "center" ? ge.center : "",
                        je === "right" ? ge.right : "",
                        T.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: T.frozen ? { left: re[A] } : void 0,
                      scope: "col",
                      draggable: E || u || void 0,
                      onDragStart: E || u ? (ze) => {
                        ze.dataTransfer && (ze.dataTransfer.effectAllowed = "move"), Rt(A);
                      } : void 0,
                      onDragOver: E ? (ze) => ze.preventDefault() : void 0,
                      onDrop: E ? () => Zt(A) : void 0,
                      children: [
                        ie ? /* @__PURE__ */ S(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => T.property != null && Q(T.property),
                            "aria-label": he ? he.sortOrder === "Ascending" ? `Sort ${T.title ?? T.property} descending` : `Sort ${T.title ?? T.property} ascending` : `Sort ${T.title ?? T.property} ascending`,
                            children: [
                              T.title ?? T.property,
                              he && /* @__PURE__ */ n("span", { className: ge.sortIndicator, "aria-hidden": "true", children: he.sortOrder === "Ascending" ? "▲" : "▼" }),
                              Ie > 1 && c && /* @__PURE__ */ n("span", { className: ge.sortIndex, children: Ie })
                            ]
                          }
                        ) : T.title ?? T.property,
                        v && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${T.title ?? T.property}`,
                            onMouseDown: (ze) => {
                              ze.preventDefault(), ze.stopPropagation();
                              const at = ke[A] ?? T.width, Mt = at ? parseFloat(at) : 96;
                              Me(A, ze.clientX, Number.isFinite(Mt) ? Mt : 96);
                            },
                            onMouseMove: (ze) => {
                              M.current?.key === A && Xe(ze.clientX);
                            },
                            onMouseUp: vt,
                            onMouseLeave: () => {
                              M.current?.key === A && vt();
                            }
                          }
                        )
                      ]
                    },
                    A
                  );
                }),
                me && /* @__PURE__ */ n("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              _e && /* @__PURE__ */ n("tr", { children: xt.map(({ key: A, column: T }) => {
                if (!xr(T, h)) return /* @__PURE__ */ n("td", { className: ge.filterCell }, A);
                const ie = te.get(T.property ?? "");
                return /* @__PURE__ */ S("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ S("label", { className: ge.visuallyHidden, htmlFor: `df-${T.property}`, children: [
                    "Filter ",
                    T.title ?? T.property
                  ] }),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${T.property}`,
                      className: ge.filterSelect,
                      value: ie?.operator ?? Ra(T.type ?? "string"),
                      onChange: (he) => De(T.property ?? "", { ...ie, operator: he.target.value }),
                      "aria-label": `${T.title ?? T.property} operator`,
                      children: Hr.filter((he) => he !== "Custom").map((he) => /* @__PURE__ */ n("option", { value: he, children: he }, he))
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: ie?.value ?? "",
                      onChange: (he) => De(T.property ?? "", { ...ie, value: he.target.value }),
                      placeholder: `Filter ${T.title ?? T.property}`,
                      "aria-label": `${T.title ?? T.property} value`
                    }
                  )
                ] }, A);
              }) })
            ] }),
            /* @__PURE__ */ S("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ S("tr", { className: ge.editRow, children: [
                xt.map(({ key: A, column: T }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: T.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: T.type === "number" ? "number" : T.type === "boolean" ? "checkbox" : "text",
                    checked: T.type === "boolean" ? !!et[T.property] : void 0,
                    value: T.type === "boolean" ? void 0 : String(et[T.property] ?? ""),
                    onChange: (ie) => W((he) => ({
                      ...he,
                      [T.property]: T.type === "boolean" ? ie.target.checked : ie.target.value
                    })),
                    "aria-label": `${T.title ?? T.property} (new)`
                  }
                ) }, A)),
                me && /* @__PURE__ */ S("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Z(), children: "Save" }),
                  /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                ] })
              ] }),
              dt.map((A) => {
                if (A.type === "group" && A.group) {
                  const je = Je.has(A.group.key);
                  return /* @__PURE__ */ n("tr", { className: ge.groupRow, children: /* @__PURE__ */ n("td", { colSpan: xt.length + (me ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ S(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": je,
                      onClick: () => Ke(A.group.key),
                      children: [
                        /* @__PURE__ */ n("span", { "aria-hidden": "true", children: je ? "▼" : "▶" }),
                        A.group.title,
                        ": ",
                        A.group.display,
                        " (",
                        A.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${A.group.key}`);
                }
                const T = A.row, ie = r(T), he = (_ ?? []).includes(ie), Ie = tt != null && tt === String(ie);
                return /* @__PURE__ */ S(
                  "tr",
                  {
                    className: [
                      V || m !== "None" ? ge.clickable : "",
                      he ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": m !== "None" ? he : void 0,
                    onClick: V || m !== "None" ? (je) => {
                      $l(je.target) || (St(T), Ut(T));
                    } : void 0,
                    children: [
                      xt.map(({ key: je, column: ze }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: Te(ze),
                          style: ze.frozen ? { left: re[je] } : void 0,
                          children: Ie && ze.property ? /* @__PURE__ */ n(
                            "input",
                            {
                              className: ge.editInput,
                              type: ze.type === "number" ? "number" : ze.type === "boolean" ? "checkbox" : "text",
                              checked: ze.type === "boolean" ? !!et[ze.property] : void 0,
                              value: ze.type === "boolean" ? void 0 : String(et[ze.property] ?? ""),
                              onChange: (at) => W((Mt) => ({
                                ...Mt,
                                [ze.property]: ze.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${ze.title ?? ze.property} (edit)`
                            }
                          ) : xe(ze, T)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ S(Ee, { children: [
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Z(T), children: "Save" }),
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                      ] }) : /* @__PURE__ */ S(Ee, { children: [
                        I !== "None" && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Lt(T), children: "Edit" }),
                        O && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => O(T), children: "Delete" })
                      ] }) })
                    ]
                  },
                  ie
                );
              })
            ] })
          ]
        }
      ),
      Ne.items.length === 0 && !L && /* @__PURE__ */ n("div", { className: ge.empty, children: j }),
      L && /* @__PURE__ */ n("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    pe && /* @__PURE__ */ n(
      nr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: $,
        showSummary: N,
        showPageSizeSelector: k,
        ariaLabel: oe ? "Pagination (bottom)" : "Pagination",
        onPageChange: X,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Nl = "_wrap_1pzu9_1", Sl = "_grid_1pzu9_7", Dl = "_stacked_1pzu9_13", Ml = "_item_1pzu9_19", zl = "_empty_1pzu9_25", $n = {
  wrap: Nl,
  grid: Sl,
  stacked: Dl,
  item: Ml,
  empty: zl
};
function eb({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
  wrapItems: a = !1,
  itemTemplate: l,
  emptyMessage: c = "No records found",
  emptyTemplate: h,
  loadingTemplate: o,
  isLoading: s = !1,
  showPageSizeSelector: i = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [$, b] = G(1), [N, k] = G(t), m = e.length, _ = Math.max(1, Math.ceil(m / N)), f = Math.min(Math.max(1, $), _), g = $e(() => {
    const v = (f - 1) * N;
    return e.slice(v, v + N);
  }, [e, f, N]), w = a ? $n.grid : $n.stacked;
  return /* @__PURE__ */ S("div", { className: [$n.wrap, p].filter(Boolean).join(" "), "aria-label": d, children: [
    s && o != null ? o : m === 0 ? h ?? /* @__PURE__ */ n("div", { className: $n.empty, children: c }) : /* @__PURE__ */ n("div", { className: w, children: g.map((v, E) => /* @__PURE__ */ n("div", { className: $n.item, children: l ? l(v, E) : String(v) }, E)) }),
    /* @__PURE__ */ n(
      nr,
      {
        pageNumber: f,
        pageSize: N,
        count: m,
        pageSizeOptions: r,
        showPageSizeSelector: i,
        onPageChange: b,
        onPageSizeChange: (v) => {
          k(v), b(1);
        }
      }
    )
  ] });
}
const Cl = "_label_idsiv_1", Ol = {
  label: Cl
}, tb = qe(
  function({ className: t, children: r, ...a }, l) {
    return /* @__PURE__ */ n("label", { ref: l, className: [Ol.label, t].filter(Boolean).join(" "), ...a, children: r });
  }
), El = "_input_gelpf_1", Il = "_invalid_gelpf_31", jl = "_xs_gelpf_37", Al = "_sm_gelpf_43", Tl = "_md_gelpf_49", Rl = "_lg_gelpf_55", Ll = "_xl_gelpf_61", Yn = {
  input: El,
  invalid: Il,
  xs: jl,
  sm: Al,
  md: Tl,
  lg: Rl,
  xl: Ll
}, nb = qe(function({ size: t = "md", invalid: r = !1, className: a, ...l }, c) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: c,
      className: [Yn.input, Yn[t], r ? Yn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), Pl = "_checkbox_s7nxo_1", Bl = {
  checkbox: Pl
}, rb = qe(function({ className: t, ...r }, a) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: a,
      type: "checkbox",
      className: [Bl.checkbox, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Fl = {
  switch: "_switch_1nmgf_1"
}, ql = qe(function({ className: t, ...r }, a) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: a,
      type: "checkbox",
      role: "switch",
      className: [Fl.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Kl = "_trigger_1prbw_1", Hl = "_tooltip_1prbw_7", Ul = "_top_1prbw_34", Wl = "_right_1prbw_40", Vl = "_bottom_1prbw_46", Xl = "_left_1prbw_52", Gl = "_arrow_1prbw_58", Pn = {
  trigger: Kl,
  tooltip: Hl,
  "se-tooltip-in": "_se-tooltip-in_1prbw_1",
  top: Ul,
  right: Wl,
  bottom: Vl,
  left: Xl,
  arrow: Gl
};
function ob({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: a = 300,
  className: l
}) {
  const c = Ye(), h = le(null), [o, s] = G(!1), i = () => {
    h.current = window.setTimeout(() => s(!0), a);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), s(!1);
  };
  we(() => {
    if (!o) return;
    const $ = (b) => {
      b.key === "Escape" && p();
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [o]);
  const d = Tn(t) ? Br(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        o ? c : null
      ].filter(($) => typeof $ == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ S(
    "span",
    {
      className: [Pn.trigger, l].filter(Boolean).join(" "),
      onMouseEnter: i,
      onMouseLeave: p,
      onFocus: i,
      onBlur: p,
      children: [
        d,
        o && /* @__PURE__ */ S(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [Pn.tooltip, Pn[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ n("span", { className: Pn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Yl = "_dialog_kr2ur_1", Zl = "_sm_kr2ur_30", Jl = "_md_kr2ur_34", Ql = "_lg_kr2ur_38", ei = "_header_kr2ur_42", ti = "_title_kr2ur_51", ni = "_description_kr2ur_58", ri = "_close_kr2ur_65", oi = "_body_kr2ur_84", si = "_footer_kr2ur_90", Vt = {
  dialog: Yl,
  "se-dialog-in": "_se-dialog-in_kr2ur_1",
  sm: Zl,
  md: Jl,
  lg: Ql,
  header: ei,
  title: ti,
  description: ni,
  close: ri,
  body: oi,
  footer: si
};
function sb({
  open: e,
  onClose: t,
  title: r,
  description: a,
  children: l,
  footer: c,
  size: h = "md",
  width: o,
  height: s,
  className: i
}) {
  const p = le(null), d = Ye(), $ = Ye(), b = le(t);
  we(() => {
    b.current = t;
  });
  const N = le(!1), k = le(!1), m = q(() => {
    N.current || (N.current = !0, b.current());
  }, []), _ = q(() => {
    if (k.current) {
      k.current = !1;
      return;
    }
    b.current();
  }, []);
  return we(() => {
    const f = p.current;
    if (f)
      if (e && !f.open) {
        const g = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        f.showModal(), (f.querySelector('button[aria-label="Close dialog"]') ?? f.querySelector("button"))?.focus();
        const v = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const E = (u) => {
          u.preventDefault(), m();
        };
        return f.addEventListener("cancel", E), () => {
          f.removeEventListener("cancel", E), document.body.style.overflow = v, g?.focus({ preventScroll: !0 });
        };
      } else !e && f.open && (k.current = N.current, N.current = !1, f.close());
  }, [e, m]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ S(
    "dialog",
    {
      ref: p,
      className: [Vt.dialog, Vt[h], i].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: s ?? void 0
      },
      onClose: _,
      onClick: (f) => {
        f.target === p.current && m();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? d : void 0,
      "aria-describedby": a ? $ : void 0,
      children: [
        r && /* @__PURE__ */ S("header", { className: Vt.header, children: [
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ n("h2", { id: d, className: Vt.title, children: r }),
            a && /* @__PURE__ */ n("p", { id: $, className: Vt.description, children: a })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Vt.close,
              onClick: m,
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ n("div", { className: Vt.body, children: l }),
        c && /* @__PURE__ */ n("footer", { className: Vt.footer, children: c })
      ]
    }
  );
}
const ai = "_viewport_1h8v8_1", li = "_topLeft_1h8v8_13", ii = "_topRight_1h8v8_20", ci = "_bottomLeft_1h8v8_25", di = "_toast_1h8v8_30", ui = "_leaving_1h8v8_61", fi = "_info_1h8v8_77", _i = "_success_1h8v8_82", pi = "_warning_1h8v8_87", hi = "_danger_1h8v8_92", mi = "_content_1h8v8_97", gi = "_title_1h8v8_102", yi = "_description_1h8v8_125", bi = "_dismiss_1h8v8_132", xi = "_actions_1h8v8_151", vi = "_action_1h8v8_151", ki = "_cancel_1h8v8_159", wi = "_progress_1h8v8_195", ht = {
  viewport: ai,
  topLeft: li,
  topRight: ii,
  bottomLeft: ci,
  toast: di,
  "se-toast-in": "_se-toast-in_1h8v8_1",
  leaving: ui,
  "se-toast-out": "_se-toast-out_1h8v8_1",
  info: fi,
  success: _i,
  warning: pi,
  danger: hi,
  content: mi,
  title: gi,
  description: yi,
  dismiss: bi,
  actions: xi,
  action: vi,
  cancel: ki,
  progress: wi,
  "se-toast-progress": "_se-toast-progress_1h8v8_1"
}, Vr = qr(null);
function ab() {
  const e = Fr(Vr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const $i = 200, Ni = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function lb({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: a = !0,
  className: l
}) {
  const [c, h] = G([]), [o, s] = G(!1), i = le([]), p = le(/* @__PURE__ */ new Map()), d = le(!1), $ = le(0), b = (D) => {
    d.current = D, s(D);
  }, N = q((D) => {
    const y = p.current.get(D);
    y && (window.clearTimeout(y.timeoutId), y.remaining = Math.max(0, y.remaining - (Date.now() - y.startedAt)));
  }, []), k = q((D) => {
    const y = p.current.get(D);
    y && (window.clearTimeout(y.timeoutId), p.current.delete(D));
  }, []), m = q(
    (D) => {
      k(D), h((y) => {
        const O = y.filter((L) => L.id !== D);
        return i.current = O, O;
      });
    },
    [k]
  ), _ = q(
    (D) => {
      const y = i.current.find((O) => O.id === D);
      !y || y.leaving || (y.onAutoClose?.(), m(D));
    },
    [m]
  ), f = q(
    (D) => {
      const y = p.current.get(D);
      !y || y.remaining <= 0 || (y.startedAt = Date.now(), y.timeoutId = window.setTimeout(() => _(D), y.remaining));
    },
    [_]
  ), g = q(() => {
    d.current || p.current.forEach((D, y) => N(y)), b(!0);
  }, [N]), w = q(() => {
    p.current.forEach((D, y) => f(y)), b(!1);
  }, [f]);
  we(() => {
    if (!a) return;
    const D = () => {
      document.hidden ? g() : w();
    };
    return document.addEventListener("visibilitychange", D), () => document.removeEventListener("visibilitychange", D);
  }, [a, g, w]);
  const v = q(
    (D) => {
      const y = i.current.find((O) => O.id === D);
      !y || y.leaving || (y.onDismiss?.(), h((O) => {
        const L = O.map((j) => j.id === D ? { ...j, leaving: !0 } : j);
        return i.current = L, L;
      }), window.setTimeout(() => m(D), $i));
    },
    [m]
  ), E = q(
    (D) => {
      if (D.durationMs <= 0) return;
      const y = {
        remaining: D.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(D.id, y), d.current || f(D.id);
    },
    [f]
  ), u = q(
    (D) => {
      const y = i.current.find((L) => L.id === D.id), O = {
        id: D.id ?? ++$.current,
        title: D.title,
        description: D.description,
        severity: D.severity ?? "info",
        durationMs: D.durationMs ?? t,
        action: D.action,
        cancel: D.cancel,
        dismissible: D.dismissible ?? !0,
        closeOnClick: D.closeOnClick ?? !1,
        showProgress: D.showProgress ?? !1,
        position: D.position ?? r,
        onDismiss: D.onDismiss,
        onAutoClose: D.onAutoClose
      };
      h((L) => {
        const j = y ? L.map((R) => R.id === O.id ? { ...O, leaving: !1 } : R) : [...L, O];
        return i.current = j, j;
      }), y && k(O.id), E(O);
    },
    [t, r, E, k]
  ), x = $e(() => ({ toast: u }), [u]), C = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map((D) => D.position)])),
    [r, c]
  ), I = a ? g : void 0, z = a ? w : void 0;
  return /* @__PURE__ */ S(Vr.Provider, { value: x, children: [
    e,
    C.map((D) => /* @__PURE__ */ n(
      "div",
      {
        className: [
          ht.viewport,
          ht[Ni[D]],
          l
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: z,
        children: c.filter((y) => y.position === D).map((y) => /* @__PURE__ */ S(
          "div",
          {
            role: y.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": y.closeOnClick ? "true" : "false",
            className: [
              ht.toast,
              ht[y.severity],
              y.leaving ? ht.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: y.closeOnClick ? () => v(y.id) : void 0,
            children: [
              /* @__PURE__ */ S("div", { className: ht.content, children: [
                /* @__PURE__ */ n("div", { className: ht.title, children: y.title }),
                y.description && /* @__PURE__ */ n("div", { className: ht.description, children: y.description }),
                (y.action || y.cancel) && /* @__PURE__ */ S("div", { className: ht.actions, children: [
                  y.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ht.action,
                      onClick: () => {
                        y.action?.onClick?.(), v(y.id);
                      },
                      children: y.action.label
                    }
                  ),
                  y.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ht.cancel,
                      onClick: () => {
                        y.cancel?.onClick?.(), v(y.id);
                      },
                      children: y.cancel.label
                    }
                  )
                ] })
              ] }),
              y.dismissible && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: ht.dismiss,
                  onClick: () => v(y.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
                }
              ),
              y.showProgress && y.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: ht.progress,
                  style: { animationDuration: `${y.durationMs}ms` }
                }
              )
            ]
          },
          y.id
        ))
      },
      D
    ))
  ] });
}
const Si = "_alert_16x95_1", Di = "_xs_16x95_22", Mi = "_sm_16x95_32", zi = "_lg_16x95_42", Ci = "_xl_16x95_52", Oi = "_primary_16x95_63", Ei = "_secondary_16x95_68", Ii = "_light_16x95_73", ji = "_base_16x95_78", Ai = "_dark_16x95_83", Ti = "_info_16x95_88", Ri = "_success_16x95_93", Li = "_warning_16x95_98", Pi = "_danger_16x95_103", Bi = "_flat_16x95_110", Fi = "_outlined_16x95_117", qi = "_filled_16x95_125", Ki = "_text_16x95_132", Hi = "_icon_16x95_175", Ui = "_content_16x95_181", Wi = "_title_16x95_186", Vi = "_body_16x95_192", Xi = "_dismiss_16x95_198", Et = {
  alert: Si,
  xs: Di,
  sm: Mi,
  lg: zi,
  xl: Ci,
  primary: Oi,
  secondary: Ei,
  light: Ii,
  base: ji,
  dark: Ai,
  info: Ti,
  success: Ri,
  warning: Li,
  danger: Pi,
  flat: Bi,
  outlined: Fi,
  filled: qi,
  text: Ki,
  icon: Hi,
  content: Ui,
  title: Wi,
  body: Vi,
  dismiss: Xi,
  "shade-lighter": "_shade-lighter_16x95_234",
  "shade-light": "_shade-light_16x95_234",
  "shade-dark": "_shade-dark_16x95_240",
  "shade-darker": "_shade-darker_16x95_243"
}, Gi = {
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
function ib({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: r,
  size: a = "md",
  title: l,
  icon: c,
  showIcon: h = !0,
  children: o,
  dismissible: s = !0,
  onDismiss: i,
  visible: p,
  onVisibleChange: d,
  className: $,
  ...b
}) {
  const [N, k] = G(!1);
  if (p === !1 || p === void 0 && N)
    return null;
  const m = () => {
    p === void 0 && k(!0), i?.(), d?.(!1);
  }, _ = e, f = ir(t, "filled"), g = r && r !== "default" ? `shade-${r}` : null, w = c ?? (h ? /* @__PURE__ */ n(Ce, { name: Gi[e] }) : null);
  return /* @__PURE__ */ S(
    "div",
    {
      role: "alert",
      ...b,
      className: [Et.alert, Et[_], Et[f], g ? Et[g] : null, Et[a], $].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ S("div", { className: Et.content, children: [
          l && /* @__PURE__ */ n("div", { className: Et.title, children: l }),
          o && /* @__PURE__ */ n("div", { className: Et.body, children: o })
        ] }),
        s && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: m,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Yi = "_skeleton_lvzyc_1", Zi = "_text_lvzyc_35", Ji = "_circle_lvzyc_40", Qi = "_rect_lvzyc_44", vr = {
  skeleton: Yi,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_lvzyc_1",
  text: Zi,
  circle: Ji,
  rect: Qi
};
function cb({
  variant: e = "text",
  width: t,
  height: r,
  className: a
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (l.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [vr.skeleton, vr[e], a].filter(Boolean).join(" "),
      style: l
    }
  );
}
const ec = "_row_plfwb_1", tc = "_gapXs_plfwb_7", nc = "_gapSm_plfwb_11", rc = "_gapMd_plfwb_15", oc = "_gapLg_plfwb_19", sc = "_gapXl_plfwb_23", ac = "_start_plfwb_27", lc = "_center_plfwb_31", ic = "_end_plfwb_35", cc = "_stretch_plfwb_39", dc = "_baseline_plfwb_43", uc = "_noWrap_plfwb_99", fc = "_wrapReverse_plfwb_103", _c = "_gapRowXs_plfwb_107", pc = "_gapRowSm_plfwb_111", hc = "_gapRowMd_plfwb_115", mc = "_gapRowLg_plfwb_119", gc = "_gapRowXl_plfwb_123", ln = {
  row: ec,
  gapXs: tc,
  gapSm: nc,
  gapMd: rc,
  gapLg: oc,
  gapXl: sc,
  start: ac,
  center: lc,
  end: ic,
  stretch: cc,
  baseline: dc,
  "justify-start": "_justify-start_plfwb_47",
  "justify-center": "_justify-center_plfwb_51",
  "justify-end": "_justify-end_plfwb_55",
  "justify-between": "_justify-between_plfwb_59",
  "justify-around": "_justify-around_plfwb_63",
  "justify-evenly": "_justify-evenly_plfwb_67",
  "justify-normal": "_justify-normal_plfwb_71",
  "justify-left": "_justify-left_plfwb_75",
  "justify-right": "_justify-right_plfwb_79",
  "justify-stretch": "_justify-stretch_plfwb_83",
  "justify-space-between": "_justify-space-between_plfwb_87",
  "justify-space-around": "_justify-space-around_plfwb_91",
  "justify-space-evenly": "_justify-space-evenly_plfwb_95",
  noWrap: uc,
  wrapReverse: fc,
  gapRowXs: _c,
  gapRowSm: pc,
  gapRowMd: hc,
  gapRowLg: mc,
  gapRowXl: gc
}, yc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, bc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function xc(e) {
  return typeof e != "string" ? null : yc[e] ?? null;
}
function vc(e) {
  return typeof e != "string" ? null : bc[e] ?? null;
}
function kr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function db({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: a = "start",
  wrap: l = !0,
  className: c,
  style: h,
  ...o
}) {
  const s = xc(e), i = vc(t), p = {
    ...e != null && !s ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...t != null && !i ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...h
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln.row,
        ln[r],
        ln[`justify-${a}`],
        kr(l) != null ? ln[kr(l)] : null,
        s ? ln[s] : null,
        i ? ln[i] : null,
        c
      ].filter(Boolean).join(" "),
      style: p,
      ...o
    }
  );
}
const kc = "_column_2ch3a_1", wc = "_Size1_2ch3a_6", $c = "_Size2_2ch3a_7", Nc = "_Size3_2ch3a_8", Sc = "_Size4_2ch3a_9", Dc = "_Size5_2ch3a_10", Mc = "_Size6_2ch3a_11", zc = "_Size7_2ch3a_12", Cc = "_Size8_2ch3a_13", Oc = "_Size9_2ch3a_14", Ec = "_Size10_2ch3a_15", Ic = "_Size11_2ch3a_16", jc = "_Size12_2ch3a_17", Ac = "_Offset1_2ch3a_18", Tc = "_Offset2_2ch3a_19", Rc = "_Offset3_2ch3a_20", Lc = "_Offset4_2ch3a_21", Pc = "_Offset5_2ch3a_22", Bc = "_Offset6_2ch3a_23", Fc = "_Offset7_2ch3a_24", qc = "_Offset8_2ch3a_25", Kc = "_Offset9_2ch3a_26", Hc = "_Offset10_2ch3a_27", Uc = "_Offset11_2ch3a_28", Wc = "_smSize1_2ch3a_31", Vc = "_smSize2_2ch3a_32", Xc = "_smSize3_2ch3a_33", Gc = "_smSize4_2ch3a_34", Yc = "_smSize5_2ch3a_35", Zc = "_smSize6_2ch3a_36", Jc = "_smSize7_2ch3a_37", Qc = "_smSize8_2ch3a_38", ed = "_smSize9_2ch3a_39", td = "_smSize10_2ch3a_40", nd = "_smSize11_2ch3a_41", rd = "_smSize12_2ch3a_42", od = "_smOffset1_2ch3a_43", sd = "_smOffset2_2ch3a_44", ad = "_smOffset3_2ch3a_45", ld = "_smOffset4_2ch3a_46", id = "_smOffset5_2ch3a_47", cd = "_smOffset6_2ch3a_48", dd = "_smOffset7_2ch3a_49", ud = "_smOffset8_2ch3a_50", fd = "_smOffset9_2ch3a_51", _d = "_smOffset10_2ch3a_52", pd = "_smOffset11_2ch3a_53", hd = "_mdSize1_2ch3a_57", md = "_mdSize2_2ch3a_58", gd = "_mdSize3_2ch3a_59", yd = "_mdSize4_2ch3a_60", bd = "_mdSize5_2ch3a_61", xd = "_mdSize6_2ch3a_62", vd = "_mdSize7_2ch3a_63", kd = "_mdSize8_2ch3a_64", wd = "_mdSize9_2ch3a_65", $d = "_mdSize10_2ch3a_66", Nd = "_mdSize11_2ch3a_67", Sd = "_mdSize12_2ch3a_68", Dd = "_mdOffset1_2ch3a_69", Md = "_mdOffset2_2ch3a_70", zd = "_mdOffset3_2ch3a_71", Cd = "_mdOffset4_2ch3a_72", Od = "_mdOffset5_2ch3a_73", Ed = "_mdOffset6_2ch3a_74", Id = "_mdOffset7_2ch3a_75", jd = "_mdOffset8_2ch3a_76", Ad = "_mdOffset9_2ch3a_77", Td = "_mdOffset10_2ch3a_78", Rd = "_mdOffset11_2ch3a_79", Ld = "_lgSize1_2ch3a_83", Pd = "_lgSize2_2ch3a_84", Bd = "_lgSize3_2ch3a_85", Fd = "_lgSize4_2ch3a_86", qd = "_lgSize5_2ch3a_87", Kd = "_lgSize6_2ch3a_88", Hd = "_lgSize7_2ch3a_89", Ud = "_lgSize8_2ch3a_90", Wd = "_lgSize9_2ch3a_91", Vd = "_lgSize10_2ch3a_92", Xd = "_lgSize11_2ch3a_93", Gd = "_lgSize12_2ch3a_94", Yd = "_lgOffset1_2ch3a_95", Zd = "_lgOffset2_2ch3a_96", Jd = "_lgOffset3_2ch3a_97", Qd = "_lgOffset4_2ch3a_98", eu = "_lgOffset5_2ch3a_99", tu = "_lgOffset6_2ch3a_100", nu = "_lgOffset7_2ch3a_101", ru = "_lgOffset8_2ch3a_102", ou = "_lgOffset9_2ch3a_103", su = "_lgOffset10_2ch3a_104", au = "_lgOffset11_2ch3a_105", lu = "_xlSize1_2ch3a_109", iu = "_xlSize2_2ch3a_110", cu = "_xlSize3_2ch3a_111", du = "_xlSize4_2ch3a_112", uu = "_xlSize5_2ch3a_113", fu = "_xlSize6_2ch3a_114", _u = "_xlSize7_2ch3a_115", pu = "_xlSize8_2ch3a_116", hu = "_xlSize9_2ch3a_117", mu = "_xlSize10_2ch3a_118", gu = "_xlSize11_2ch3a_119", yu = "_xlSize12_2ch3a_120", bu = "_xlOffset1_2ch3a_121", xu = "_xlOffset2_2ch3a_122", vu = "_xlOffset3_2ch3a_123", ku = "_xlOffset4_2ch3a_124", wu = "_xlOffset5_2ch3a_125", $u = "_xlOffset6_2ch3a_126", Nu = "_xlOffset7_2ch3a_127", Su = "_xlOffset8_2ch3a_128", Du = "_xlOffset9_2ch3a_129", Mu = "_xlOffset10_2ch3a_130", zu = "_xlOffset11_2ch3a_131", Cu = "_xxlSize1_2ch3a_136", Ou = "_xxlSize2_2ch3a_137", Eu = "_xxlSize3_2ch3a_138", Iu = "_xxlSize4_2ch3a_139", ju = "_xxlSize5_2ch3a_140", Au = "_xxlSize6_2ch3a_141", Tu = "_xxlSize7_2ch3a_142", Ru = "_xxlSize8_2ch3a_143", Lu = "_xxlSize9_2ch3a_144", Pu = "_xxlSize10_2ch3a_145", Bu = "_xxlSize11_2ch3a_146", Fu = "_xxlSize12_2ch3a_147", qu = "_xxlOffset1_2ch3a_148", Ku = "_xxlOffset2_2ch3a_149", Hu = "_xxlOffset3_2ch3a_150", Uu = "_xxlOffset4_2ch3a_151", Wu = "_xxlOffset5_2ch3a_152", Vu = "_xxlOffset6_2ch3a_153", Xu = "_xxlOffset7_2ch3a_154", Gu = "_xxlOffset8_2ch3a_155", Yu = "_xxlOffset9_2ch3a_156", Zu = "_xxlOffset10_2ch3a_157", Ju = "_xxlOffset11_2ch3a_158", Qu = "_xxlOrderFirst_2ch3a_159", ef = "_xxlOrderLast_2ch3a_160", tf = "_orderFirst_2ch3a_163", nf = "_orderLast_2ch3a_164", rf = "_smOrderFirst_2ch3a_167", of = "_smOrderLast_2ch3a_168", sf = "_mdOrderFirst_2ch3a_172", af = "_mdOrderLast_2ch3a_173", lf = "_lgOrderFirst_2ch3a_177", cf = "_lgOrderLast_2ch3a_178", df = "_xlOrderFirst_2ch3a_182", uf = "_xlOrderLast_2ch3a_183", Nn = {
  column: kc,
  Size1: wc,
  Size2: $c,
  Size3: Nc,
  Size4: Sc,
  Size5: Dc,
  Size6: Mc,
  Size7: zc,
  Size8: Cc,
  Size9: Oc,
  Size10: Ec,
  Size11: Ic,
  Size12: jc,
  Offset1: Ac,
  Offset2: Tc,
  Offset3: Rc,
  Offset4: Lc,
  Offset5: Pc,
  Offset6: Bc,
  Offset7: Fc,
  Offset8: qc,
  Offset9: Kc,
  Offset10: Hc,
  Offset11: Uc,
  smSize1: Wc,
  smSize2: Vc,
  smSize3: Xc,
  smSize4: Gc,
  smSize5: Yc,
  smSize6: Zc,
  smSize7: Jc,
  smSize8: Qc,
  smSize9: ed,
  smSize10: td,
  smSize11: nd,
  smSize12: rd,
  smOffset1: od,
  smOffset2: sd,
  smOffset3: ad,
  smOffset4: ld,
  smOffset5: id,
  smOffset6: cd,
  smOffset7: dd,
  smOffset8: ud,
  smOffset9: fd,
  smOffset10: _d,
  smOffset11: pd,
  mdSize1: hd,
  mdSize2: md,
  mdSize3: gd,
  mdSize4: yd,
  mdSize5: bd,
  mdSize6: xd,
  mdSize7: vd,
  mdSize8: kd,
  mdSize9: wd,
  mdSize10: $d,
  mdSize11: Nd,
  mdSize12: Sd,
  mdOffset1: Dd,
  mdOffset2: Md,
  mdOffset3: zd,
  mdOffset4: Cd,
  mdOffset5: Od,
  mdOffset6: Ed,
  mdOffset7: Id,
  mdOffset8: jd,
  mdOffset9: Ad,
  mdOffset10: Td,
  mdOffset11: Rd,
  lgSize1: Ld,
  lgSize2: Pd,
  lgSize3: Bd,
  lgSize4: Fd,
  lgSize5: qd,
  lgSize6: Kd,
  lgSize7: Hd,
  lgSize8: Ud,
  lgSize9: Wd,
  lgSize10: Vd,
  lgSize11: Xd,
  lgSize12: Gd,
  lgOffset1: Yd,
  lgOffset2: Zd,
  lgOffset3: Jd,
  lgOffset4: Qd,
  lgOffset5: eu,
  lgOffset6: tu,
  lgOffset7: nu,
  lgOffset8: ru,
  lgOffset9: ou,
  lgOffset10: su,
  lgOffset11: au,
  xlSize1: lu,
  xlSize2: iu,
  xlSize3: cu,
  xlSize4: du,
  xlSize5: uu,
  xlSize6: fu,
  xlSize7: _u,
  xlSize8: pu,
  xlSize9: hu,
  xlSize10: mu,
  xlSize11: gu,
  xlSize12: yu,
  xlOffset1: bu,
  xlOffset2: xu,
  xlOffset3: vu,
  xlOffset4: ku,
  xlOffset5: wu,
  xlOffset6: $u,
  xlOffset7: Nu,
  xlOffset8: Su,
  xlOffset9: Du,
  xlOffset10: Mu,
  xlOffset11: zu,
  xxlSize1: Cu,
  xxlSize2: Ou,
  xxlSize3: Eu,
  xxlSize4: Iu,
  xxlSize5: ju,
  xxlSize6: Au,
  xxlSize7: Tu,
  xxlSize8: Ru,
  xxlSize9: Lu,
  xxlSize10: Pu,
  xxlSize11: Bu,
  xxlSize12: Fu,
  xxlOffset1: qu,
  xxlOffset2: Ku,
  xxlOffset3: Hu,
  xxlOffset4: Uu,
  xxlOffset5: Wu,
  xxlOffset6: Vu,
  xxlOffset7: Xu,
  xxlOffset8: Gu,
  xxlOffset9: Yu,
  xxlOffset10: Zu,
  xxlOffset11: Ju,
  xxlOrderFirst: Qu,
  xxlOrderLast: ef,
  orderFirst: tf,
  orderLast: nf,
  smOrderFirst: rf,
  smOrderLast: of,
  mdOrderFirst: sf,
  mdOrderLast: af,
  lgOrderFirst: lf,
  lgOrderLast: cf,
  xlOrderFirst: df,
  xlOrderLast: uf
}, ff = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], _f = {
  first: "orderFirst",
  last: "orderLast"
};
function pf(e) {
  return typeof e == "number" ? { order: e } : {};
}
function ub({ className: e, style: t, ...r }) {
  const a = [Nn.column], l = { ...t };
  for (const [x, C, I, z] of ff) {
    const D = r[C], y = r[I], O = r[z];
    if (D != null && a.push(Nn[`${x}Size${D}`]), y != null && y > 0 && a.push(Nn[`${x}Offset${y}`]), O === "first" || O === "last") {
      const L = `${x}${_f[O]}`;
      Nn[L] && a.push(Nn[L]);
    } else O != null && Object.assign(l, pf(O));
  }
  const {
    size: c,
    offset: h,
    sizeSm: o,
    offsetSm: s,
    sizeMd: i,
    offsetMd: p,
    sizeLg: d,
    offsetLg: $,
    sizeXl: b,
    offsetXl: N,
    sizeXxl: k,
    offsetXxl: m,
    order: _,
    orderSm: f,
    orderMd: g,
    orderLg: w,
    orderXl: v,
    orderXxl: E,
    ...u
  } = r;
  return /* @__PURE__ */ n("div", { className: [...a, e].filter(Boolean).join(" "), style: l, ...u });
}
const hf = "_stack_1yc1g_1", mf = "_gapXs_1yc1g_29", gf = "_gapSm_1yc1g_33", yf = "_gapMd_1yc1g_37", bf = "_gapLg_1yc1g_41", xf = "_gapXl_1yc1g_45", cn = {
  stack: hf,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: mf,
  gapSm: gf,
  gapMd: yf,
  gapLg: bf,
  gapXl: xf,
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
}, vf = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function kf(e) {
  return typeof e != "string" ? null : vf[e] ?? null;
}
function wr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function fb({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: a = "sm",
  align: l,
  justify: c,
  className: h,
  style: o,
  ...s
}) {
  const i = kf(a), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...a != null && !i ? { gap: typeof a == "number" ? `${a}px` : a } : {},
    ...o
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        cn.stack,
        cn[`dir-${p}`],
        wr(r) !== "wrap" ? cn[`wrap-${wr(r)}`] : null,
        l != null ? cn[`align-${l}`] : null,
        c != null ? cn[`justify-${c}`] : null,
        i ? cn[i] : null,
        h
      ].filter(Boolean).join(" "),
      style: d,
      ...s
    }
  );
}
const wf = "_layout_1pcye_1", $f = "_row_1pcye_7", $r = {
  layout: wf,
  row: $f
}, Nf = "_footer_jia9j_1", Sf = {
  footer: Nf
};
function Df({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("footer", { className: [Sf.footer, e].filter(Boolean).join(" "), ...r, children: t });
}
const Mf = "_header_1n6yq_1", zf = {
  header: Mf
};
function Cf({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("header", { className: [zf.header, e].filter(Boolean).join(" "), ...r, children: t });
}
const Of = "_sidebar_1i0sn_1", Ef = "_left_1i0sn_9", If = "_right_1i0sn_13", jf = "_collapsed_1i0sn_17", Af = "_responsive_1i0sn_25", Tf = "_overlay_1i0sn_33", Rf = "_mask_1i0sn_53", Qt = {
  sidebar: Of,
  left: Ef,
  right: If,
  collapsed: jf,
  responsive: Af,
  overlay: Tf,
  mask: Rf
};
function Lf({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
  overlay: a = !1,
  onClose: l,
  className: c,
  children: h,
  ...o
}) {
  return we(() => {
    if (!a || !t || l == null) return;
    const s = (i) => {
      i.key === "Escape" && l();
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [a, t, l]), /* @__PURE__ */ S(Ee, { children: [
    a && t ? /* @__PURE__ */ n("div", { className: `${Qt.mask} se-layout-mask`, "aria-hidden": "true", onClick: l }) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          Qt.sidebar,
          e === "right" ? Qt.right : Qt.left,
          t ? null : Qt.collapsed,
          r ? Qt.responsive : null,
          a ? [Qt.overlay, "se-sidebar--overlay"] : null,
          c
        ].flat().filter(Boolean).join(" "),
        ...o,
        children: h
      }
    )
  ] });
}
function _b({ className: e, children: t, ...r }) {
  const a = [], l = [], c = [], h = [], o = [];
  return Qr.forEach(t, (s) => {
    if (!Tn(s)) {
      c.push(s);
      return;
    }
    s.type === Cf ? a.push(s) : s.type === Df ? l.push(s) : s.type === Lf ? (s.props.position === "right" ? o : h).push(s) : c.push(s);
  }), /* @__PURE__ */ S("div", { className: [$r.layout, e].filter(Boolean).join(" "), ...r, children: [
    a,
    /* @__PURE__ */ S("div", { className: $r.row, children: [
      h,
      c,
      o
    ] }),
    l
  ] });
}
const Pf = "_body_10zdy_1", Bf = {
  body: Pf
};
function pb({ as: e = "main", className: t, children: r, ...a }) {
  return /* @__PURE__ */ n(e, { className: [Bf.body, t].filter(Boolean).join(" "), ...a, children: r });
}
const Ff = "_track_hx8uy_1", qf = "_bar_hx8uy_31", Kf = "_primary_hx8uy_39", Hf = "_success_hx8uy_43", Uf = "_warning_hx8uy_47", Wf = "_danger_hx8uy_51", Vf = "_indeterminate_hx8uy_71", Xf = "_circular_hx8uy_85", Gf = "_fill_hx8uy_125", mt = {
  track: Ff,
  "linear-xs": "_linear-xs_hx8uy_11",
  "linear-sm": "_linear-sm_hx8uy_15",
  "linear-md": "_linear-md_hx8uy_19",
  "linear-lg": "_linear-lg_hx8uy_23",
  "linear-xl": "_linear-xl_hx8uy_27",
  bar: qf,
  primary: Kf,
  success: Hf,
  warning: Uf,
  danger: Wf,
  "shade-lighter": "_shade-lighter_hx8uy_55",
  "shade-light": "_shade-light_hx8uy_55",
  "shade-dark": "_shade-dark_hx8uy_63",
  "shade-darker": "_shade-darker_hx8uy_67",
  indeterminate: Vf,
  "se-progress-slide": "_se-progress-slide_hx8uy_1",
  circular: Xf,
  "circular-xs": "_circular-xs_hx8uy_91",
  "circular-sm": "_circular-sm_hx8uy_96",
  "circular-md": "_circular-md_hx8uy_101",
  "circular-lg": "_circular-lg_hx8uy_106",
  "circular-xl": "_circular-xl_hx8uy_111",
  fill: Gf,
  "se-progress-spin": "_se-progress-spin_hx8uy_1"
};
function hb({
  value: e = 0,
  max: t = 100,
  severity: r = "primary",
  shade: a,
  indeterminate: l = !1,
  variant: c = "linear",
  size: h = "md",
  className: o,
  ...s
}) {
  const i = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? i / t * 100 : 0;
  if (c === "circular") {
    const $ = typeof h == "string", b = 2, N = 10.5, k = 2 * Math.PI * N, m = k * (l ? 0.75 : 1), _ = l ? 0 : k * (1 - p / 100);
    return /* @__PURE__ */ S(
      "svg",
      {
        width: $ ? void 0 : h,
        height: $ ? void 0 : h,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": s["aria-label"],
        "aria-labelledby": s["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(i),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...s,
        className: [
          mt.circular,
          mt[r],
          a && a !== "default" ? mt[`shade-${a}`] : null,
          $ ? mt[`circular-${h}`] : null,
          l ? mt.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n("circle", { className: mt.track, cx: 12, cy: 12, r: N, strokeWidth: b }),
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.fill,
              cx: 12,
              cy: 12,
              r: N,
              strokeWidth: b,
              strokeDasharray: `${m} ${k}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const d = a && a !== "default" ? `shade-${a}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(i),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        mt.track,
        mt[r],
        d ? mt[d] : null,
        typeof h == "string" ? mt[`linear-${h}`] : null,
        l ? mt.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...s,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: mt.bar,
          style: l ? void 0 : { width: `${p}%` }
        }
      )
    }
  );
}
function mb(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Yf(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Xr(e) {
  const [t, r] = G(() => Yf(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const a = window.matchMedia(e);
    r(a.matches);
    const l = (c) => r(c.matches);
    return typeof a.addEventListener == "function" ? (a.addEventListener("change", l), () => a.removeEventListener("change", l)) : (a.addListener(l), () => a.removeListener(l));
  }, [e]), t;
}
const Zf = "_wrapper_fv8kg_1", Jf = {
  wrapper: Zf
}, Gr = "dx-theme";
function Qf(e) {
  const t = e === void 0 ? Gr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(t);
      return r === "light" || r === "dark" || r === "system" ? r : void 0;
    } catch {
      return;
    }
}
function e_(e, t) {
  const r = e === void 0 ? Gr : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, t);
    } catch {
    }
}
function gb({
  value: e,
  defaultValue: t,
  defaultTheme: r,
  storageKey: a,
  onChange: l,
  label: c = "Dark mode",
  className: h
}) {
  const o = Xr("(prefers-color-scheme: dark)"), [s, i] = G(void 0), p = e ?? s ?? Qf(a) ?? t ?? r ?? "system", d = p === "system" ? o ? "dark" : "light" : p;
  we(() => {
    if (p === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = p;
  }, [p]);
  const $ = (b) => {
    const N = b.target.checked ? "dark" : "light";
    e === void 0 && i(N), e_(a, N), l?.(N);
  };
  return /* @__PURE__ */ S("label", { className: [Jf.wrapper, h].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ n(ql, { checked: d === "dark", onChange: $ })
  ] });
}
const t_ = "_avatar_1ow1c_1", n_ = "_xs_1ow1c_12", r_ = "_sm_1ow1c_18", o_ = "_md_1ow1c_24", s_ = "_lg_1ow1c_30", a_ = "_xl_1ow1c_36", l_ = "_initials_1ow1c_42", i_ = "_image_1ow1c_57", c_ = "_status_1ow1c_64", d_ = "_online_1ow1c_84", u_ = "_offline_1ow1c_88", f_ = "_away_1ow1c_92", dn = {
  avatar: t_,
  xs: n_,
  sm: r_,
  md: o_,
  lg: s_,
  xl: a_,
  initials: l_,
  image: i_,
  status: c_,
  online: d_,
  offline: u_,
  away: f_
}, Vn = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function __(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function p_(e) {
  let t = 0;
  for (let r = 0; r < e.length; r += 1)
    t = t * 31 + e.charCodeAt(r) >>> 0;
  return Vn[t % Vn.length] ?? Vn[0];
}
function yb({
  name: e,
  src: t,
  alt: r,
  size: a = "md",
  status: l,
  className: c
}) {
  const h = $e(() => e ? __(e) : "?", [e]), o = $e(() => e ? p_(e) : Vn[0], [e]), s = t != null && r === "", i = r ?? e ?? "avatar", p = l ? `${i}, ${l}` : i, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: dn.image,
      src: t,
      alt: s ? "" : l ? p : i
    }
  ) : /* @__PURE__ */ n("span", { "aria-hidden": "true", className: dn.initials, style: { background: o }, children: h });
  return /* @__PURE__ */ S(
    "span",
    {
      className: [
        dn.avatar,
        dn[a],
        l ? dn[l] : null,
        c
      ].filter(Boolean).join(" "),
      role: t ? void 0 : "img",
      "aria-label": t ? void 0 : p,
      children: [
        d,
        l && /* @__PURE__ */ n("span", { className: dn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const h_ = "_root_13xku_1", m_ = "_left_13xku_6", g_ = "_right_13xku_7", y_ = "_panel_13xku_12", b_ = "_bottom_13xku_20", x_ = "_tabList_13xku_24", v_ = "_underline_13xku_53", k_ = "_pills_13xku_72", w_ = "_tab_13xku_24", $_ = "_active_13xku_113", N_ = "_disabled_13xku_139", Pt = {
  root: h_,
  left: m_,
  right: g_,
  panel: y_,
  bottom: b_,
  tabList: x_,
  underline: v_,
  pills: k_,
  tab: w_,
  active: $_,
  disabled: N_
};
function bb({
  items: e,
  value: t,
  defaultValue: r,
  onChange: a,
  variant: l = "underline",
  position: c = "top",
  className: h
}) {
  const o = Ye(), s = le(null), [i, p] = G(r ?? e[0]?.key ?? ""), d = t ?? i, $ = c === "left" || c === "right", b = (m) => {
    p(m), a?.(m);
  }, N = (m) => {
    const _ = e.filter((w) => !w.disabled), f = _.findIndex((w) => w.key === d);
    let g = -1;
    m.key === "ArrowRight" || $ && m.key === "ArrowDown" ? g = (f + 1) % _.length : m.key === "ArrowLeft" || $ && m.key === "ArrowUp" ? g = (f - 1 + _.length) % _.length : m.key === "Home" ? g = 0 : m.key === "End" && (g = _.length - 1), g >= 0 && (m.preventDefault(), s.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[g]?.key ?? "")}"]`
    )?.focus(), b(_[g]?.key ?? ""));
  }, k = e.find((m) => m.key === d);
  return /* @__PURE__ */ S("div", { className: [Pt.root, Pt[c], h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n(
      "div",
      {
        ref: s,
        role: "tablist",
        className: [Pt.tabList, Pt[l], Pt[c]].filter(Boolean).join(" "),
        onKeyDown: N,
        children: e.map((m) => {
          const _ = m.key === d;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${o}-tab-${m.key}`,
              "data-tab-key": m.key,
              "aria-selected": _,
              "aria-controls": `${o}-panel-${m.key}`,
              tabIndex: _ ? 0 : -1,
              disabled: m.disabled,
              className: [
                Pt.tab,
                _ ? Pt.active : null,
                m.disabled ? Pt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => b(m.key),
              children: m.label
            },
            m.key
          );
        })
      }
    ),
    k && /* @__PURE__ */ n(
      "div",
      {
        role: "tabpanel",
        id: `${o}-panel-${k.key}`,
        "aria-labelledby": `${o}-tab-${k.key}`,
        className: Pt.panel,
        children: k.content
      }
    )
  ] });
}
const S_ = "_root_11jj0_1", D_ = "_item_11jj0_9", M_ = "_heading_11jj0_13", z_ = "_trigger_11jj0_17", C_ = "_disabled_11jj0_34", O_ = "_title_11jj0_48", E_ = "_chevron_11jj0_52", I_ = "_open_11jj0_59", j_ = "_content_11jj0_63", Bt = {
  root: S_,
  item: D_,
  heading: M_,
  trigger: z_,
  disabled: C_,
  title: O_,
  chevron: E_,
  open: I_,
  content: j_
};
function xb({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: l,
  className: c
}) {
  const h = Ye(), [o, s] = G(a ?? []), i = r ?? o, p = (d) => {
    const $ = i.includes(d) ? i.filter((b) => b !== d) : t ? [...i, d] : [d];
    s($), l?.($);
  };
  return /* @__PURE__ */ n("div", { className: [Bt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const $ = i.includes(d.key), b = `${h}-panel-${d.key}`, N = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ S("div", { className: Bt.item, children: [
      /* @__PURE__ */ n("h3", { className: Bt.heading, children: /* @__PURE__ */ S(
        "button",
        {
          type: "button",
          id: N,
          "aria-expanded": $,
          "aria-controls": b,
          disabled: d.disabled,
          className: [
            Bt.trigger,
            d.disabled ? Bt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: Bt.title, children: d.title }),
            /* @__PURE__ */ n("span", { className: [Bt.chevron, $ ? Bt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 12 }) })
          ]
        }
      ) }),
      /* @__PURE__ */ n(
        "div",
        {
          id: b,
          role: "region",
          "aria-labelledby": N,
          hidden: !$,
          className: Bt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const A_ = "_textarea_1hnju_1", T_ = "_invalid_1hnju_25", R_ = "_xs_1hnju_31", L_ = "_sm_1hnju_36", P_ = "_md_1hnju_41", B_ = "_lg_1hnju_46", F_ = "_xl_1hnju_51", Bn = {
  textarea: A_,
  invalid: T_,
  xs: R_,
  sm: L_,
  md: P_,
  lg: B_,
  xl: F_,
  "resize-none": "_resize-none_1hnju_56",
  "resize-vertical": "_resize-vertical_1hnju_60",
  "resize-horizontal": "_resize-horizontal_1hnju_64",
  "resize-both": "_resize-both_1hnju_68"
}, vb = qe(function({ size: t = "md", resize: r = "none", invalid: a = !1, className: l, ...c }, h) {
  return /* @__PURE__ */ n(
    "textarea",
    {
      ref: h,
      className: [
        Bn.textarea,
        Bn[t],
        Bn[`resize-${r}`],
        a ? Bn.invalid : null,
        l
      ].filter(Boolean).join(" "),
      "aria-invalid": a || void 0,
      ...c
    }
  );
}), q_ = "_typography_1p5im_1", K_ = "_h1_1p5im_36", H_ = "_h2_1p5im_42", U_ = "_h3_1p5im_48", W_ = "_h4_1p5im_54", V_ = "_h5_1p5im_60", X_ = "_h6_1p5im_66", G_ = "_caption_1p5im_94", Y_ = "_overline_1p5im_100", Zn = {
  typography: q_,
  "display-1": "_display-1_1p5im_5",
  "display-2": "_display-2_1p5im_10",
  "display-3": "_display-3_1p5im_15",
  "display-4": "_display-4_1p5im_20",
  "display-5": "_display-5_1p5im_25",
  "display-6": "_display-6_1p5im_30",
  h1: K_,
  h2: H_,
  h3: U_,
  h4: W_,
  h5: V_,
  h6: X_,
  "subtitle-1": "_subtitle-1_1p5im_72",
  "subtitle-2": "_subtitle-2_1p5im_78",
  "body-1": "_body-1_1p5im_84",
  "body-2": "_body-2_1p5im_89",
  caption: G_,
  overline: Y_,
  "align-left": "_align-left_1p5im_109",
  "align-center": "_align-center_1p5im_113",
  "align-right": "_align-right_1p5im_117",
  "align-justify": "_align-justify_1p5im_121"
}, Z_ = {
  "display-1": "h1",
  "display-2": "h2",
  "display-3": "h3",
  "display-4": "h4",
  "display-5": "h5",
  "display-6": "h6",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  // Radzen parity: subtitles render as h6.
  "subtitle-1": "h6",
  "subtitle-2": "h6",
  "body-1": "p",
  "body-2": "p",
  caption: "span",
  overline: "span"
}, kb = qe(function({ variant: t = "body-1", as: r, align: a, className: l, children: c, ...h }, o) {
  const s = r ?? Z_[t];
  return /* @__PURE__ */ n(
    s,
    {
      ref: o,
      className: [Zn.typography, Zn[t], a ? Zn[`align-${a}`] : null, l].filter(Boolean).join(" "),
      ...h,
      children: c
    }
  );
}), J_ = "_root_1l16s_1", Q_ = "_trigger_1l16s_9", ep = "_invalid_1l16s_40", tp = "_placeholder_1l16s_46", np = "_label_1l16s_53", rp = "_chevron_1l16s_59", op = "_chevronOpen_1l16s_69", sp = "_menu_1l16s_73", ap = "_option_1l16s_88", lp = "_disabled_1l16s_99", ip = "_active_1l16s_103", cp = "_selected_1l16s_104", dp = "_header_1l16s_114", up = "_xs_1l16s_121", fp = "_sm_1l16s_127", _p = "_md_1l16s_133", pp = "_lg_1l16s_139", hp = "_xl_1l16s_145", it = {
  root: J_,
  trigger: Q_,
  invalid: ep,
  placeholder: tp,
  label: np,
  chevron: rp,
  chevronOpen: op,
  menu: sp,
  option: ap,
  disabled: lp,
  active: ip,
  selected: cp,
  header: dp,
  xs: up,
  sm: fp,
  md: _p,
  lg: pp,
  xl: hp
}, mp = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function wb({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: a,
  placeholder: l = "Select…",
  size: c = "md",
  invalid: h = !1,
  disabled: o = !1,
  className: s,
  ...i
}) {
  const p = Ye(), d = `${p}-listbox`, $ = le(null), b = le(null), [N, k] = G(r), [m, _] = G(!1), f = t ?? N, g = e.map((y, O) => y.label === "" || y.disabled ? -1 : O).filter((y) => y >= 0), w = e.findIndex((y) => y.value === f), [v, E] = G(
    () => g.includes(0) ? 0 : g[0] ?? -1
  ), u = q(() => {
    if (o) return;
    const y = w >= 0 && g.includes(w) ? w : g[0];
    E(y ?? -1), _(!0);
  }, [o, w, g]), x = q(() => {
    _(!1), b.current?.focus();
  }, []);
  we(() => {
    if (!m) return;
    const y = (O) => {
      $.current && !$.current.contains(O.target) && _(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [m]);
  const C = (y) => {
    k(y), a?.(y), _(!1), b.current?.focus();
  }, I = (y) => {
    if (g.length === 0) return;
    const O = g.includes(v) ? g.indexOf(v) : 0, L = g[(O + y + g.length) % g.length];
    L != null && E(L);
  }, z = (y) => {
    if (!m) {
      y.key === "ArrowDown" && (y.preventDefault(), u());
      return;
    }
    switch (y.key) {
      case "ArrowDown":
        y.preventDefault(), I(1);
        break;
      case "ArrowUp":
        y.preventDefault(), I(-1);
        break;
      case "Home":
        y.preventDefault(), g[0] != null && E(g[0]);
        break;
      case "End":
        y.preventDefault(), g[g.length - 1] != null && E(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        y.preventDefault(), v >= 0 && e[v] && g.includes(v) && C(e[v]?.value ?? "");
        break;
      case "Escape":
        y.preventDefault(), x();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, D = e.find((y) => y.value === f);
  return /* @__PURE__ */ S("div", { ref: $, className: [it.root, s].filter(Boolean).join(" "), onKeyDown: z, children: [
    /* @__PURE__ */ S(
      "button",
      {
        ref: b,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": m,
        "aria-controls": d,
        "aria-invalid": h || void 0,
        disabled: o,
        className: [
          it.trigger,
          it[c],
          m ? it.open : null,
          h ? it.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => m ? _(!1) : u(),
        ...i,
        children: [
          /* @__PURE__ */ n("span", { className: D ? it.label : it.placeholder, children: D ? D.label : l }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [it.chevron, m ? it.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: mp },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    m && /* @__PURE__ */ n(
      "div",
      {
        id: d,
        role: "listbox",
        "aria-activedescendant": v >= 0 ? `${p}-option-${v}` : void 0,
        className: it.menu,
        children: e.map(
          (y, O) => y.label === "" ? /* @__PURE__ */ n("div", { className: it.header, role: "presentation", children: y.value }, y.value) : /* @__PURE__ */ n(
            "div",
            {
              id: `${p}-option-${O}`,
              role: "option",
              "aria-selected": y.value === f,
              "aria-disabled": y.disabled || void 0,
              className: [
                it.option,
                O === v ? it.active : null,
                y.value === f ? it.selected : null,
                y.disabled ? it.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                y.disabled || C(y.value);
              },
              onMouseEnter: () => {
                !y.disabled && y.label !== "" && E(O);
              },
              children: y.label
            },
            y.value
          )
        )
      }
    )
  ] });
}
const gp = "_root_z9312_1", yp = "_wrap_z9312_9", bp = "_input_z9312_26", xp = "_invalid_z9312_31", vp = "_clear_z9312_57", kp = "_menu_z9312_82", wp = "_option_z9312_97", $p = "_disabled_z9312_108", Np = "_active_z9312_112", Sp = "_empty_z9312_122", Dp = "_xs_z9312_128", Mp = "_sm_z9312_135", zp = "_md_z9312_142", Cp = "_lg_z9312_149", Op = "_xl_z9312_156", zt = {
  root: gp,
  wrap: yp,
  input: bp,
  invalid: xp,
  clear: vp,
  menu: kp,
  option: wp,
  disabled: $p,
  active: Np,
  empty: Sp,
  xs: Dp,
  sm: Mp,
  md: zp,
  lg: Cp,
  xl: Op
}, Ep = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function $b({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: a,
  onSelect: l,
  placeholder: c = "",
  size: h = "md",
  invalid: o = !1,
  disabled: s = !1,
  filter: i = Ep,
  className: p,
  ...d
}) {
  const $ = Ye(), b = `${$}-listbox`, N = le(null), k = le(null), [m, _] = G(r), [f, g] = G(!1), w = t ?? m, v = $e(
    () => w.trim() === "" ? [...e] : e.filter((R) => i(R, w)),
    [e, w, i]
  ), E = v.map((R, H) => R.disabled ? -1 : H).filter((R) => R >= 0), [u, x] = G(-1), C = (R) => {
    _(R), a?.(R);
  }, I = (R) => {
    C(R.label), l?.(R.value, R), g(!1);
  }, z = (R) => {
    if (E.length === 0) return;
    const H = E.includes(u) ? E.indexOf(u) : R === 1 ? -1 : 0, V = E[(H + R + E.length) % E.length];
    V != null && x(V);
  }, D = (R) => {
    s || (C(R.target.value), g(!0), x(-1));
  }, y = () => {
    s || w !== "" && g(!0);
  }, O = (R) => {
    N.current && !N.current.contains(R.relatedTarget) && g(!1);
  }, L = (R) => {
    if (!s)
      switch (R.key) {
        case "ArrowDown":
          R.preventDefault(), f ? z(1) : (g(!0), x(E[0] ?? -1));
          break;
        case "ArrowUp":
          R.preventDefault(), f && z(-1);
          break;
        case "Enter":
          R.preventDefault(), f && u >= 0 && v[u] && I(v[u]);
          break;
        case "Escape":
          R.preventDefault(), g(!1);
          break;
        case "Tab":
          f && u >= 0 && v[u] && I(v[u]), g(!1);
          break;
      }
  }, j = () => {
    C(""), x(-1), g(!0), k.current?.focus();
  };
  return /* @__PURE__ */ S("div", { ref: N, className: [zt.root, p].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S("div", { className: [zt.wrap, zt[h], o ? zt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: k,
          type: "text",
          role: "combobox",
          "aria-expanded": f,
          "aria-controls": b,
          "aria-autocomplete": "list",
          "aria-activedescendant": f && u >= 0 ? `${$}-option-${u}` : void 0,
          "aria-invalid": o || void 0,
          disabled: s,
          value: w,
          placeholder: c,
          className: zt.input,
          onChange: D,
          onFocus: y,
          onBlur: O,
          onKeyDown: L,
          ...d
        }
      ),
      w !== "" && !s && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: zt.clear,
          "aria-label": "Clear",
          onClick: j,
          children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
        }
      )
    ] }),
    f && /* @__PURE__ */ n("div", { id: b, role: "listbox", className: zt.menu, children: v.length === 0 ? /* @__PURE__ */ n("div", { className: zt.empty, children: "No matches" }) : v.map((R, H) => /* @__PURE__ */ n(
      "div",
      {
        id: `${$}-option-${H}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": R.disabled || void 0,
        className: [
          zt.option,
          H === u ? zt.active : null,
          R.disabled ? zt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          R.disabled || I(R);
        },
        onMouseDown: (V) => {
          V.preventDefault(), R.disabled || I(R);
        },
        onMouseEnter: () => {
          R.disabled || x(H);
        },
        children: R.label
      },
      R.value
    )) })
  ] });
}
const Ip = "_box_yzqzf_1", jp = "_option_yzqzf_12", Ap = "_disabled_yzqzf_23", Tp = "_selected_yzqzf_27", Rp = "_active_yzqzf_33", Sn = {
  box: Ip,
  option: jp,
  disabled: Ap,
  selected: Tp,
  active: Rp
};
function Nb({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: a = !1,
  onChange: l,
  className: c,
  style: h,
  ...o
}) {
  const s = Ye(), [i, p] = G(() => {
    const v = r;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), d = t == null ? i : Array.isArray(t) ? t : [t], $ = e.findIndex((v) => !v.disabled), [b, N] = G(() => $ >= 0 ? $ : 0), k = le(""), m = le(null), _ = (v) => {
    p(v), l?.(a ? v : v[0] ?? "");
  }, f = e.map((v, E) => v.disabled ? -1 : E).filter((v) => v >= 0), g = (v) => {
    const E = e[v];
    if (!(!E || E.disabled))
      if (N(v), a) {
        const u = d.includes(E.value) ? d.filter((x) => x !== E.value) : [...d, E.value];
        _(u);
      } else
        _([E.value]);
  }, w = (v) => {
    if (f.length === 0) return;
    const E = f.includes(b) ? b : f[0];
    let u = -1;
    if (v.key === "ArrowDown")
      u = f[(f.indexOf(E) + 1) % f.length];
    else if (v.key === "ArrowUp")
      u = f[(f.indexOf(E) - 1 + f.length) % f.length];
    else if (v.key === "Home")
      u = f[0];
    else if (v.key === "End")
      u = f[f.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), g(E);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const x = (k.current + v.key).toLowerCase();
      k.current = x, m.current && clearTimeout(m.current), m.current = setTimeout(() => {
        k.current = "";
      }, 500);
      const C = [...f, ...f], I = f.indexOf(E) + 1, z = C.slice(I).find(
        (D) => e[D]?.label.toLowerCase().startsWith(x)
      );
      z != null && N(z);
      return;
    }
    u >= 0 && (v.preventDefault(), N(u), a || _([e[u]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": a || void 0,
      "aria-activedescendant": e[b] ? `${s}-option-${b}` : void 0,
      style: h,
      className: [Sn.box, c].filter(Boolean).join(" "),
      onKeyDown: w,
      ...o,
      children: e.map((v, E) => {
        const u = d.includes(v.value), x = E === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${s}-option-${E}`,
            role: "option",
            "aria-selected": u,
            "aria-disabled": v.disabled || void 0,
            className: [
              Sn.option,
              u ? Sn.selected : null,
              x ? Sn.active : null,
              v.disabled ? Sn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => g(E),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const Lp = "_group_1lmpf_1", Pp = "_legend_1lmpf_8", Bp = "_list_1lmpf_16", Fp = "_item_1lmpf_25", qp = "_disabled_1lmpf_32", Kp = "_label_1lmpf_37", Hp = "_checkbox_1lmpf_48", en = {
  group: Lp,
  legend: Pp,
  list: Bp,
  item: Fp,
  disabled: qp,
  label: Kp,
  checkbox: Hp
};
function Sb({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: a,
  legend: l,
  name: c,
  className: h
}) {
  const [o, s] = G(() => [...r]), i = t ?? o, p = (d, $) => {
    const b = $ ? [...i, d] : i.filter((N) => N !== d);
    s(b), a?.(b);
  };
  return /* @__PURE__ */ S("fieldset", { className: [en.group, h].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ n("legend", { className: en.legend, children: l }),
    /* @__PURE__ */ n("ul", { className: en.list, children: e.map((d) => {
      const $ = i.includes(d.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [en.item, d.disabled ? en.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ S("label", { className: en.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: en.checkbox,
                name: c,
                value: d.value,
                checked: $,
                disabled: d.disabled,
                onChange: (b) => p(d.value, b.target.checked)
              }
            ),
            /* @__PURE__ */ n("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const Up = "_group_1fnri_1", Wp = "_legend_1fnri_8", Vp = "_list_1fnri_16", Xp = "_item_1fnri_25", Gp = "_disabled_1fnri_32", Yp = "_label_1fnri_37", Zp = "_radio_1fnri_48", tn = {
  group: Up,
  legend: Wp,
  list: Vp,
  item: Xp,
  disabled: Gp,
  label: Yp,
  radio: Zp
};
function Db({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: a,
  legend: l,
  name: c,
  className: h
}) {
  const [o, s] = G(r), i = t ?? o, p = (d) => {
    s(d), a?.(d);
  };
  return /* @__PURE__ */ S("fieldset", { className: [tn.group, h].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ n("legend", { className: tn.legend, children: l }),
    /* @__PURE__ */ n("ul", { className: tn.list, children: e.map((d) => {
      const $ = d.value === i;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [tn.item, d.disabled ? tn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ S("label", { className: tn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: tn.radio,
                name: c,
                value: d.value,
                checked: $,
                disabled: d.disabled,
                onChange: (b) => p(b.target.value)
              }
            ),
            /* @__PURE__ */ n("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const Jp = "_bar_1bgl1_1", Qp = "_vertical_1bgl1_12", e1 = "_option_1bgl1_17", t1 = "_selected_1bgl1_38", n1 = "_sm_1bgl1_55", r1 = "_md_1bgl1_61", o1 = "_lg_1bgl1_67", un = {
  bar: Jp,
  vertical: Qp,
  option: e1,
  selected: t1,
  sm: n1,
  md: r1,
  lg: o1
};
function Nr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Mb(e) {
  const {
    options: t = [],
    value: r,
    defaultValue: a,
    multiple: l = !1,
    orientation: c = "horizontal",
    onChange: h,
    size: o = "md",
    className: s,
    ...i
  } = e, [p, d] = G(
    a ?? (l ? [] : t[0]?.value)
  ), $ = r ?? p, b = l === !0, N = (m) => {
    if (!b) {
      d(m), h?.(m);
      return;
    }
    const _ = Nr($), f = _.includes(m) ? _.filter((g) => g !== m) : [..._, m];
    d(f), h?.(f);
  }, k = (m) => b ? Nr($).includes(m) : $ === m;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        un.bar,
        un[o],
        c === "vertical" ? un.vertical : null,
        s
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((m) => {
        const _ = k(m.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: m.disabled,
            className: [
              un.option,
              _ ? un.selected : null,
              m.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => N(m.value),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const s1 = "_toggle_1d0zk_1", a1 = "_pressed_1d0zk_29", l1 = "_sm_1d0zk_41", i1 = "_md_1d0zk_47", c1 = "_lg_1d0zk_53", d1 = "_fullWidth_1d0zk_59", Fn = {
  toggle: s1,
  pressed: a1,
  sm: l1,
  md: i1,
  lg: c1,
  fullWidth: d1
}, zb = qe(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: a,
    size: l = "md",
    fullWidth: c = !1,
    className: h,
    type: o = "button",
    ...s
  }, i) {
    const [p, d] = G(r), $ = t ?? p, b = () => {
      const N = !$;
      d(N), a?.(N);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: i,
        type: o,
        "aria-pressed": $,
        className: [
          Fn.toggle,
          Fn[l],
          $ ? Fn.pressed : null,
          c ? Fn.fullWidth : null,
          h
        ].filter(Boolean).join(" "),
        onClick: b,
        ...s
      }
    );
  }
), u1 = "_root_1qdj1_1", f1 = "_action_1qdj1_102", _1 = "_filled_1qdj1_122", p1 = "_caret_1qdj1_126", h1 = "_flat_1qdj1_147", m1 = "_outlined_1qdj1_155", g1 = "_text_1qdj1_163", y1 = "_sm_1qdj1_201", b1 = "_md_1qdj1_213", x1 = "_lg_1qdj1_225", v1 = "_menu_1qdj1_237", k1 = "_item_1qdj1_250", w1 = "_disabled_1qdj1_271", $1 = "_active_1qdj1_275", N1 = "_danger_1qdj1_284", wt = {
  root: u1,
  "style-primary": "_style-primary_1qdj1_11",
  "style-secondary": "_style-secondary_1qdj1_21",
  "style-base": "_style-base_1qdj1_31",
  "style-light": "_style-light_1qdj1_41",
  "style-dark": "_style-dark_1qdj1_51",
  "style-info": "_style-info_1qdj1_61",
  "style-success": "_style-success_1qdj1_71",
  "style-warning": "_style-warning_1qdj1_81",
  "style-danger": "_style-danger_1qdj1_91",
  action: f1,
  filled: _1,
  caret: p1,
  flat: h1,
  outlined: m1,
  text: g1,
  "shade-lighter": "_shade-lighter_1qdj1_178",
  "shade-light": "_shade-light_1qdj1_178",
  "shade-dark": "_shade-dark_1qdj1_186",
  "shade-darker": "_shade-darker_1qdj1_190",
  sm: y1,
  md: b1,
  lg: x1,
  menu: v1,
  item: k1,
  disabled: w1,
  active: $1,
  danger: N1
};
function Cb({
  label: e,
  onClick: t,
  items: r = [],
  severity: a = "primary",
  variant: l = "filled",
  shade: c = "default",
  size: h = "md",
  disabled: o = !1,
  className: s,
  ...i
}) {
  const d = `${Ye()}-menu`, $ = le(null), b = le(null), N = le([]), [k, m] = G(!1), [_, f] = G(-1), g = $e(
    () => r.map((z, D) => z.disabled ? -1 : D).filter((z) => z >= 0),
    [r]
  ), w = q(() => {
    o || (f(g[0] ?? -1), m(!0));
  }, [o, g]), v = q(() => {
    m(!1), b.current?.focus();
  }, []);
  we(() => {
    if (!k) return;
    const z = (D) => {
      $.current && !$.current.contains(D.target) && m(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [k]);
  const E = le(k);
  we(() => {
    const z = E.current;
    if (E.current = k, !k || z) return;
    const D = g.includes(_) ? _ : g[0] ?? -1;
    D >= 0 && N.current[D]?.focus();
  }, [k, _, g]);
  const u = (z) => {
    const D = r[z];
    !D || D.disabled || (D.onClick?.(), m(!1), b.current?.focus());
  }, x = (z) => {
    if (g.length === 0) return;
    const D = g.includes(_) ? g.indexOf(_) : z === 1 ? -1 : 0, y = g[(D + z + g.length) % g.length];
    y != null && (f(y), N.current[y]?.focus());
  }, C = (z) => {
    const D = z === "first" ? g[0] : g[g.length - 1];
    D != null && (f(D), N.current[D]?.focus());
  }, I = (z) => {
    switch (z.key) {
      case "ArrowDown":
        z.preventDefault(), x(1);
        break;
      case "ArrowUp":
        z.preventDefault(), x(-1);
        break;
      case "Home":
        z.preventDefault(), C("first");
        break;
      case "End":
        z.preventDefault(), C("last");
        break;
      case "Escape":
        z.preventDefault(), v();
        break;
      case "Tab":
        m(!1);
        break;
    }
  };
  return /* @__PURE__ */ S(
    "div",
    {
      ref: $,
      className: [
        wt.root,
        wt[h],
        wt[`style-${a}`],
        wt[ir(l, "filled")],
        c !== "default" ? wt[`shade-${c}`] : null,
        s
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: wt.action,
            disabled: o,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            ref: b,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => k ? m(!1) : w(),
            onKeyDown: (z) => {
              !k && z.key === "ArrowDown" && (z.preventDefault(), w());
            },
            children: /* @__PURE__ */ n(Ce, { name: "chevron-down" })
          }
        ),
        k && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: I,
            ...i,
            children: r.map((z, D) => /* @__PURE__ */ n(
              "button",
              {
                ref: (y) => {
                  N.current[D] = y;
                },
                type: "button",
                role: "menuitem",
                tabIndex: D === _ ? 0 : -1,
                disabled: z.disabled,
                className: [
                  wt.item,
                  D === _ ? wt.active : null,
                  z.danger ? wt.danger : null,
                  z.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => u(D),
                onMouseEnter: () => {
                  z.disabled || f(D);
                },
                children: z.label
              },
              z.key
            ))
          }
        )
      ]
    }
  );
}
const S1 = "_textbox_1uz2c_1", D1 = "_invalid_1uz2c_31", M1 = "_xs_1uz2c_37", z1 = "_sm_1uz2c_43", C1 = "_md_1uz2c_49", O1 = "_lg_1uz2c_55", E1 = "_xl_1uz2c_61", Jn = {
  textbox: S1,
  invalid: D1,
  xs: M1,
  sm: z1,
  md: C1,
  lg: O1,
  xl: E1
}, Ob = qe(function({ size: t = "md", invalid: r = !1, className: a, type: l = "text", ...c }, h) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: h,
      type: l,
      className: [Jn.textbox, Jn[t], r ? Jn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), I1 = "_wrapper_13x89_1", j1 = "_input_13x89_8", A1 = "_invalid_13x89_38", T1 = "_toggle_13x89_44", R1 = "_xs_13x89_79", L1 = "_sm_13x89_85", P1 = "_md_13x89_91", B1 = "_lg_13x89_97", F1 = "_xl_13x89_103", Dn = {
  wrapper: I1,
  input: j1,
  invalid: A1,
  toggle: T1,
  xs: R1,
  sm: L1,
  md: P1,
  lg: B1,
  xl: F1
}, Eb = qe(function({
  size: t = "md",
  invalid: r = !1,
  className: a,
  disabled: l,
  showLabel: c = "Show password",
  hideLabel: h = "Hide password",
  ...o
}, s) {
  const [i, p] = G(!1);
  return /* @__PURE__ */ S("div", { className: Dn.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: s,
        type: i ? "text" : "password",
        disabled: l,
        className: [Dn.input, Dn[t], r ? Dn.invalid : null, a].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...o
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Dn.toggle,
        "aria-pressed": i,
        "aria-label": i ? h : c,
        disabled: l,
        onClick: () => p((d) => !d),
        children: /* @__PURE__ */ n(Ce, { name: i ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), q1 = "_mask_145m8_1", K1 = "_invalid_145m8_31", H1 = "_xs_145m8_37", U1 = "_sm_145m8_43", W1 = "_md_145m8_49", V1 = "_lg_145m8_55", X1 = "_xl_145m8_61", Qn = {
  mask: q1,
  invalid: K1,
  xs: H1,
  sm: U1,
  md: W1,
  lg: V1,
  xl: X1
};
function Sr(e, t) {
  let r = e.replace(/\D/g, ""), a = "";
  for (const l of t)
    if (l === "#") {
      if (r.length === 0) break;
      a += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      a += l;
    else
      break;
  return a;
}
const Ib = qe(function({
  size: t = "md",
  invalid: r = !1,
  mask: a,
  value: l,
  defaultValue: c = "",
  onChange: h,
  className: o,
  onKeyDown: s,
  ...i
}, p) {
  const [d, $] = G(c ?? ""), b = l !== void 0, N = b ? l ?? "" : d, k = (f) => {
    const g = Sr(f, a);
    return b || $(g), h?.(g), g;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      value: N,
      onChange: (f) => {
        k(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const g = f.currentTarget.selectionStart ?? N.length, w = N[g - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            f.preventDefault();
            const v = N.replace(/\D/g, "");
            k(Sr(v.slice(0, -1), a));
          }
        }
        s?.(f);
      },
      className: [Qn.mask, Qn[t], r ? Qn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...i
    }
  );
}), G1 = "_wrapper_mr2in_1", Y1 = "_input_mr2in_8", Z1 = "_invalid_mr2in_38", J1 = "_button_mr2in_44", Q1 = "_up_mr2in_76", eh = "_down_mr2in_81", th = "_xs_mr2in_86", nh = "_sm_mr2in_92", rh = "_md_mr2in_98", oh = "_lg_mr2in_104", sh = "_xl_mr2in_110", Xt = {
  wrapper: G1,
  input: Y1,
  invalid: Z1,
  button: J1,
  up: Q1,
  down: eh,
  xs: th,
  sm: nh,
  md: rh,
  lg: oh,
  xl: sh
};
function rr(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function ah(e) {
  let t = "", r = !1;
  for (const a of e)
    a >= "0" && a <= "9" ? t += a : a === "." && !r ? (r = !0, t += a) : a === "-" && t.length === 0 && (t += a);
  return t;
}
function Yr(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function lh(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function ih(e, t, r, a, l) {
  const h = rr(e) ?? r ?? 0;
  let o;
  return r === void 0 ? o = h + t * l : t > 0 ? o = r + Math.ceil((h - r + 1e-9) / l) * l : o = r + Math.floor((h - r - 1e-9) / l) * l, Yr(o, r, a);
}
const jb = qe(function({
  size: t = "md",
  invalid: r = !1,
  className: a,
  disabled: l,
  value: c,
  defaultValue: h,
  onChange: o,
  min: s,
  max: i,
  step: p = 1,
  incrementLabel: d = "Increment",
  decrementLabel: $ = "Decrement",
  onBlur: b,
  onKeyDown: N,
  ...k
}, m) {
  const [_, f] = G(h != null ? String(h) : ""), g = c !== void 0, w = g ? c == null ? "" : String(c) : _, v = (z) => {
    g || f(z), o?.(rr(z));
  }, E = (z) => {
    g || f(String(z)), o?.(z);
  }, u = (z) => {
    l || E(ih(w, z, s, i, p));
  }, x = (z) => {
    v(ah(z.target.value));
  }, C = (z) => {
    z.key === "ArrowUp" ? (z.preventDefault(), u(1)) : z.key === "ArrowDown" && (z.preventDefault(), u(-1)), N?.(z);
  }, I = (z) => {
    const D = rr(w);
    D === null ? (g || f(""), o?.(null)) : E(Yr(lh(D, s, p), s, i)), b?.(z);
  };
  return /* @__PURE__ */ S("div", { className: Xt.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: m,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: w,
        disabled: l,
        onChange: x,
        onKeyDown: C,
        onBlur: I,
        className: [Xt.input, Xt[t], r ? Xt.invalid : null, a].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...k
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Xt.button, Xt.up].join(" "),
        "aria-label": d,
        disabled: l,
        onClick: () => u(1),
        children: /* @__PURE__ */ n(Ce, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Xt.button, Xt.down].join(" "),
        "aria-label": $,
        disabled: l,
        onClick: () => u(-1),
        children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), Se = {
  "dx-colorpicker": "_dx-colorpicker_ljyzw_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_ljyzw_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_ljyzw_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_ljyzw_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_ljyzw_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_ljyzw_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_ljyzw_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_ljyzw_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_ljyzw_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_ljyzw_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_ljyzw_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_ljyzw_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_ljyzw_133",
  "dx-saturation-picker": "_dx-saturation-picker_ljyzw_138",
  "dx-hue-picker": "_dx-hue-picker_ljyzw_149",
  "dx-alpha-picker": "_dx-alpha-picker_ljyzw_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_ljyzw_155",
  "dx-hue-indicator": "_dx-hue-indicator_ljyzw_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_ljyzw_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_ljyzw_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_ljyzw_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_ljyzw_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_ljyzw_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_ljyzw_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_ljyzw_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_ljyzw_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_ljyzw_300"
}, ch = [
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
function yt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function or(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let r = t[1];
  return r.length === 3 && (r = r.split("").map((a) => a + a).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function dh({ r: e, g: t, b: r }) {
  const a = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${a(e)}${a(t)}${a(r)}`;
}
function uh({ r: e, g: t, b: r }) {
  const a = e / 255, l = t / 255, c = r / 255, h = Math.max(a, l, c), o = Math.min(a, l, c), s = h - o;
  let i = 0;
  return s !== 0 && (h === a ? i = (l - c) / s % 6 : h === l ? i = (c - a) / s + 2 : i = (a - l) / s + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: h === 0 ? 0 : s / h,
    v: h
  };
}
function fn({ h: e, s: t, v: r }) {
  const a = r * t, l = e / 60, c = a * (1 - Math.abs(l % 2 - 1));
  let h = 0, o = 0, s = 0;
  l < 1 ? (h = a, o = c) : l < 2 ? (h = c, o = a) : l < 3 ? (o = a, s = c) : l < 4 ? (o = c, s = a) : l < 5 ? (h = c, s = a) : (h = a, s = c);
  const i = r - a;
  return {
    r: Math.round((h + i) * 255),
    g: Math.round((o + i) * 255),
    b: Math.round((s + i) * 255),
    a: 1
  };
}
function fh(e) {
  const t = or(e);
  if (t) return t;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: yt(Number(r[1]), 0, 255),
    g: yt(Number(r[2]), 0, 255),
    b: yt(Number(r[3]), 0, 255),
    a: r[4] != null ? yt(Number(r[4]), 0, 1) : 1
  } : null;
}
function Dr({ r: e, g: t, b: r, a }) {
  return a >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(a * 100) / 100})`;
}
const Ab = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: a = !0,
  palette: l = ch,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: o = !1,
  invalid: s = !1,
  placeholder: i = "",
  size: p = "md",
  tabIndex: d = 0,
  className: $,
  onChange: b,
  onValueChange: N,
  onOpen: k,
  onClose: m
}) => {
  const _ = le(null), f = le(null), g = le(null), w = le(null), v = le(null), E = Ye(), u = le(null), x = $e(
    () => fh(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, I] = G(!1), [z, D] = G(null), y = z ?? x, O = $e(() => uh(y), [y]), L = q(
    (W) => {
      const M = Dr(W);
      b?.(M), N?.(M);
    },
    [b, N]
  ), j = q(
    (W, M) => {
      D(W), M && !c && L(W);
    },
    [c, L]
  ), R = q(() => {
    I(!1), D(null), m?.(), f.current?.focus();
  }, [m]), H = q(() => {
    o || (D(x), I(!0), k?.());
  }, [o, x, k]), V = q(() => {
    C ? R() : H();
  }, [C, R, H]), Y = q(
    (W, M) => {
      const F = g.current;
      if (!F) return O;
      const ne = F.getBoundingClientRect(), fe = yt((W - ne.left) / ne.width, 0, 1), re = yt(1 - (M - ne.top) / ne.height, 0, 1);
      return { h: O.h, s: fe, v: re };
    },
    [O]
  ), ee = q(
    (W, M) => {
      if (!M) return 0;
      const F = M.getBoundingClientRect();
      return yt((W - F.left) / F.width, 0, 1);
    },
    []
  ), te = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), u.current = "sat";
    const M = Y(W.clientX, W.clientY);
    j({ ...fn(M), a: y.a }, !0);
  }, ue = (W) => {
    if (u.current !== "sat") return;
    W.preventDefault();
    const M = Y(W.clientX, W.clientY);
    j({ ...fn(M), a: y.a }, !0);
  }, U = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), u.current = "hue";
    const M = ee(W.clientX, w.current);
    j({ ...fn({ ...O, h: M * 360 }), a: y.a }, !0);
  }, X = (W) => {
    if (u.current !== "hue") return;
    W.preventDefault();
    const M = ee(W.clientX, w.current);
    j({ ...fn({ ...O, h: M * 360 }), a: y.a }, !0);
  }, P = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), u.current = "alpha";
    const M = ee(W.clientX, v.current);
    j({ ...y, a: M }, !0);
  }, se = (W) => {
    if (u.current !== "alpha") return;
    W.preventDefault();
    const M = ee(W.clientX, v.current);
    j({ ...y, a: M }, !0);
  }, J = () => {
    u.current = null;
  }, ce = q(
    (W, M) => {
      const F = { h: O.h, s: yt(O.s + W, 0, 1), v: yt(O.v + M, 0, 1) };
      j({ ...fn(F), a: y.a }, !0);
    },
    [O, y.a, j]
  ), ae = q(
    (W) => {
      const M = (O.h + W + 360) % 360;
      j({ ...fn({ ...O, h: M }), a: y.a }, !0);
    },
    [O, y.a, j]
  ), be = q(
    (W) => {
      j({ ...y, a: yt(y.a + W, 0, 1) }, !0);
    },
    [y, j]
  ), ke = (W) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), ce(-0.05, 0);
        break;
      case "ArrowRight":
        W.preventDefault(), ce(0.05, 0);
        break;
      case "ArrowUp":
        W.preventDefault(), ce(0, 0.05);
        break;
      case "ArrowDown":
        W.preventDefault(), ce(0, -0.05);
        break;
      case "Escape":
        W.preventDefault(), R();
        break;
    }
  }, Be = (W, M) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), M === "hue" ? ae(-6) : be(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), M === "hue" ? ae(6) : be(0.05);
        break;
      case "Escape":
        W.preventDefault(), R();
        break;
    }
  }, ve = (W, M) => {
    if (W === "hex") {
      const re = or(M);
      re && j({ ...re, a: y.a }, !0);
      return;
    }
    const F = M.replace(/[^\d.]/g, ""), ne = Number.parseFloat(F);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const re = F.includes(".") ? yt(ne, 0, 1) : yt(ne / 100, 0, 1);
      j({ ...y, a: re }, !0);
      return;
    }
    const fe = { r: 255, g: 255, b: 255 };
    j({ ...y, [W]: yt(ne, 0, fe[W]) }, !0);
  }, We = () => {
    z && (L(z), D(null), I(!1), m?.(), f.current?.focus());
  };
  we(() => {
    if (!C) return;
    const W = (M) => {
      _.current && !_.current.contains(M.target) && R();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [C, R]), we(() => {
    if (!C) return;
    const W = (M) => {
      M.key === "Escape" && R();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [C, R]);
  const ye = p === "xs" ? Se["dx-colorpicker-trigger-xs"] : p === "sm" ? Se["dx-colorpicker-trigger-sm"] : p === "lg" ? Se["dx-colorpicker-trigger-lg"] : p === "xl" ? Se["dx-colorpicker-trigger-xl"] : Se["dx-colorpicker-trigger"], Ze = Dr(y), Ve = dh(y), Le = { x: O.s * 100, y: (1 - O.v) * 100 }, tt = O.h / 360 * 100, Qe = y.a * 100, et = /* @__PURE__ */ S("div", { className: Se["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: g,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(O.s * 100),
        "aria-valuetext": `Saturation ${Math.round(O.s * 100)}%, value ${Math.round(O.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        className: Se["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${O.h}, 100%, 50%)`
        },
        onKeyDown: ke,
        onPointerDown: te,
        onPointerMove: ue,
        onPointerUp: J,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-saturation-indicator"],
            style: { left: `${Le.x}%`, top: `${Le.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: w,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(O.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        className: Se["dx-hue-picker"],
        onKeyDown: (W) => Be(W, "hue"),
        onPointerDown: U,
        onPointerMove: X,
        onPointerUp: J,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-hue-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        className: Se["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-color-border) 0% 25%, var(--dx-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${O.h}, 100%, 50%))`
        },
        onKeyDown: (W) => Be(W, "alpha"),
        onPointerDown: P,
        onPointerMove: se,
        onPointerUp: J,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    r && /* @__PURE__ */ S("div", { className: Se["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ S("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (W) => ve("hex", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ S("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: y.r,
            onChange: (W) => ve("r", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ S("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: y.g,
            onChange: (W) => ve("g", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ S("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: y.b,
            onChange: (W) => ve("b", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ S("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(y.a * 100),
            onChange: (W) => ve("a", W.target.value)
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-palette"], children: l.map((W) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const M = or(W);
          c ? j({ ...M, a: y.a }, !1) : (D(null), L({ ...M, a: y.a }), I(!1), m?.(), f.current?.focus());
        }
      },
      W
    )) }),
    c && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-footer"], children: /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-ok"],
        onClick: We,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ S(
    "div",
    {
      ref: _,
      className: [
        Se["dx-colorpicker"],
        C ? Se["dx-colorpicker-open"] : null,
        s ? Se["dx-colorpicker-invalid"] : null,
        $
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ S(
          "button",
          {
            ref: f,
            type: "button",
            className: [Se["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": C,
            "aria-controls": E,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: d,
            onClick: V,
            onKeyDown: (W) => {
              W.key === "Escape" && C && (W.preventDefault(), R());
            },
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: Se["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              i && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-text"], children: i }),
              h && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        C && /* @__PURE__ */ n(
          "div",
          {
            id: E,
            role: "dialog",
            "aria-label": "Choose color",
            className: Se["dx-colorpicker-popup"],
            children: et
          }
        )
      ]
    }
  );
}, Oe = {
  "dx-datepicker": "_dx-datepicker_q0vtt_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_q0vtt_9",
  "dx-datepicker-input": "_dx-datepicker-input_q0vtt_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_q0vtt_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_q0vtt_49",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_q0vtt_55",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_q0vtt_61",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_q0vtt_67",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_q0vtt_73",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_q0vtt_79",
  "dx-datepicker-clear": "_dx-datepicker-clear_q0vtt_114",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_q0vtt_144",
  "dx-datepicker-popup": "_dx-datepicker-popup_q0vtt_148",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_q0vtt_160",
  "dx-datepicker-header": "_dx-datepicker-header_q0vtt_166",
  "dx-datepicker-nav": "_dx-datepicker-nav_q0vtt_174",
  "dx-datepicker-title": "_dx-datepicker-title_q0vtt_200",
  "dx-datepicker-grid": "_dx-datepicker-grid_q0vtt_208",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_q0vtt_213",
  "dx-datepicker-row": "_dx-datepicker-row_q0vtt_214",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_q0vtt_219",
  "dx-datepicker-day": "_dx-datepicker-day_q0vtt_229",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_q0vtt_257",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_q0vtt_261",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_q0vtt_271",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_q0vtt_276",
  "dx-datepicker-time": "_dx-datepicker-time_q0vtt_282",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_q0vtt_291",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_q0vtt_297",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_q0vtt_302",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_q0vtt_306",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_q0vtt_326",
  "dx-datepicker-ok": "_dx-datepicker-ok_q0vtt_354"
}, _h = 42;
function bt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${bt(e.month)}-${bt(e.day)}`;
}
function ph(e, t) {
  const r = pt(e);
  return t ? `${r} ${bt(e.hour)}:${bt(e.minute)}:${bt(e.second)}` : r;
}
function sr(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), a = Number(t[2]), l = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (a < 1 || a > 12 || l < 1 || l > 31) return null;
  const s = new Date(r, a - 1, l, c, h, o);
  return s.getFullYear() !== r || s.getMonth() !== a - 1 || s.getDate() !== l ? null : { year: r, month: a, day: l, hour: c, minute: h, second: o };
}
function Gt() {
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
function Ft(e, t) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day + t,
    e.hour,
    e.minute,
    e.second
  );
  return {
    year: r.getFullYear(),
    month: r.getMonth() + 1,
    day: r.getDate(),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function qn(e, t) {
  const r = new Date(e.year, e.month - 1 + t, 1), a = r.getFullYear(), l = r.getMonth() + 1, c = new Date(a, l, 0).getDate();
  return {
    year: a,
    month: l,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Mr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const zr = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => bt(e.year % 100),
  MM: (e) => bt(e.month),
  M: (e) => String(e.month),
  dd: (e) => bt(e.day),
  d: (e) => String(e.day),
  HH: (e) => bt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => bt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => bt(e.second),
  s: (e) => String(e.second),
  tt: (e, t, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, hh = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], mh = ["y", "M", "d", "H", "m", "s"];
function Kn(e, t, r) {
  const a = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", c = 0;
  for (; c < t.length; ) {
    let h = !1;
    for (const s of hh)
      if (t.startsWith(s, c)) {
        l += zr[s](e, a, r), c += s.length, h = !0;
        break;
      }
    if (h) continue;
    const o = t[c];
    if (mh.includes(o)) {
      l += zr[o](e, a, r), c += 1;
      continue;
    }
    l += o, c += 1;
  }
  return l;
}
const gh = [
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
function yh(e, t) {
  const r = {};
  let a = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const s of gh)
      if (t.startsWith(s, l)) {
        o = s;
        break;
      }
    if (o) {
      const s = e.slice(a, a + o.length);
      if (!/^\d+$/.test(s)) return null;
      const i = Number(s);
      switch (o) {
        case "yyyy":
          r.year = i;
          break;
        case "yy":
        case "y":
          r.year = 2e3 + i;
          break;
        case "MM":
        case "M":
          r.month = i;
          break;
        case "dd":
        case "d":
          r.day = i;
          break;
        case "HH":
        case "H":
          r.hour = i;
          break;
        case "mm":
        case "m":
          r.minute = i;
          break;
        case "ss":
        case "s":
          r.second = i;
          break;
      }
      a += o.length, l += o.length;
      continue;
    }
    if (e[a] !== t[l]) return null;
    a += 1, l += 1;
  }
  const c = {
    year: r.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: r.month ?? 1,
    day: r.day ?? 1,
    hour: r.hour ?? 0,
    minute: r.minute ?? 0,
    second: r.second ?? 0
  };
  if (c.month < 1 || c.month > 12 || c.day < 1 || c.day > 31)
    return null;
  const h = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return h.getFullYear() !== c.year || h.getMonth() !== c.month - 1 || h.getDate() !== c.day ? null : c;
}
function Mn(e, t) {
  const r = sr(e);
  return r || yh(e, t);
}
function bh(e, t, r) {
  return t && pt(e) < pt(t) ? t : r && pt(e) > pt(r) ? r : e;
}
const xh = ["hour", "minute", "second"];
function Hn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Tb = qe(function({
  size: t = "md",
  invalid: r = !1,
  value: a,
  defaultValue: l,
  format: c = "yyyy-MM-dd",
  min: h,
  max: o,
  showTime: s = !1,
  showButton: i = !0,
  allowClear: p = !1,
  inline: d = !1,
  disabledDates: $,
  locale: b = "en-US",
  onChange: N,
  onValueChange: k,
  onOpen: m,
  onClose: _,
  disabled: f,
  readOnly: g,
  placeholder: w,
  ariaLabel: v,
  triggerLabel: E,
  clearLabel: u,
  tabIndex: x,
  className: C,
  onBlur: I,
  onKeyDown: z,
  ...D
}, y) {
  const O = le(null), L = le(null), j = le(null), R = le(null), H = Ye(), V = a !== void 0, [Y, ee] = G(
    () => l != null ? Kn(Mn(l, c) ?? Gt(), c, b) : ""
  ), [te, ue] = G(!1), [U, X] = G(null), [P, se] = G(() => {
    const K = a !== void 0 ? a ?? "" : l ?? "";
    if (K) {
      const de = Mn(K, c);
      if (de) return de;
    }
    return Gt();
  }), J = $e(() => h ? sr(h) : null, [h]), ce = $e(() => o ? sr(o) : null, [o]), ae = $e(
    () => new Set($ ?? []),
    [$]
  ), be = $e(() => {
    const K = V ? a ?? "" : Y;
    return K ? Mn(K, c) : null;
  }, [a, Y, V, c]), ke = q(
    (K) => {
      const de = pt(K);
      return !!(ae.has(de) || J && de < pt(J) || ce && de > pt(ce));
    },
    [ae, J, ce]
  ), Be = q(
    (K) => {
      if (!ke(K)) return K;
      for (let de = 1; de <= 366; de += 1) {
        const Pe = Ft(K, de);
        if (!ke(Pe)) return Pe;
        const Ke = Ft(K, -de);
        if (!ke(Ke)) return Ke;
      }
      return K;
    },
    [ke]
  ), ve = q(
    (K) => {
      V || ee(K ? Kn(K, c, b) : "");
      const de = K ? ph(K, s) : "";
      N?.(de), k?.(de);
    },
    [V, c, b, s, N, k]
  ), We = q(
    (K) => {
      L.current = K, typeof y == "function" ? y(K) : y && (y.current = K);
    },
    [y]
  ), ye = q(() => {
    ue(!1), X(null), _?.(), d || j.current?.focus();
  }, [d, _]), Ze = q(() => {
    if (f) return;
    const K = be ?? Gt();
    X(K), se(Be(K)), ue(!0), m?.();
  }, [f, be, Be, m]), Ve = q(() => {
    te ? ye() : Ze();
  }, [te, ye, Ze]), Le = q((K) => {
    R.current?.querySelector(
      `[data-date="${pt(K)}"]`
    )?.focus();
  }, []), tt = q(
    (K) => {
      if (ke(K)) return;
      const de = U ?? be, Ke = {
        ...s ? {
          hour: de?.hour ?? 0,
          minute: de?.minute ?? 0,
          second: de?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: K.year,
        month: K.month,
        day: K.day
      };
      X(Ke), s || (ve(Ke), ye());
    },
    [ke, U, be, s, ve, ye]
  ), Qe = q(
    (K, de) => {
      X((Pe) => {
        const Ke = Pe ?? be ?? Gt(), Dt = Math.min(K === "hour" ? 23 : 59, Math.max(0, Ke[K] + de));
        return { ...Ke, [K]: Dt };
      });
    },
    [be]
  ), et = q(
    (K, de) => {
      const Pe = de.replace(/\D/g, ""), Ke = Pe === "" ? 0 : Number(Pe), Lt = K === "hour" ? 23 : 59;
      X((Dt) => ({ ...Dt ?? be ?? Gt(), [K]: Math.min(Lt, Ke) }));
    },
    [be]
  ), W = q(() => {
    U && (ve(U), ye());
  }, [U, ve, ye]), M = q(() => {
    if (te) return;
    const K = Mn(Y, c);
    ve(K ? bh(K, J, ce) : null);
  }, [te, Y, c, J, ce, ve]), F = (K) => {
    const de = K.target.value;
    V || ee(de), te && X(null);
  }, ne = (K) => {
    K.key === "Enter" ? (K.preventDefault(), te ? U && (ve(U), ye()) : M()) : K.key === "Escape" ? te && (K.preventDefault(), ye()) : K.key === "ArrowDown" && !te ? (K.preventDefault(), Ze()) : K.key === "Tab" && te && ue(!1), z?.(K);
  }, fe = (K) => {
    M(), I?.(K);
  }, re = (K) => {
    let de = null;
    switch (K.key) {
      case "ArrowLeft":
        de = Ft(P, -1), K.preventDefault();
        break;
      case "ArrowRight":
        de = Ft(P, 1), K.preventDefault();
        break;
      case "ArrowUp":
        de = Ft(P, -7), K.preventDefault();
        break;
      case "ArrowDown":
        de = Ft(P, 7), K.preventDefault();
        break;
      case "Home":
        de = Ft(P, -Mr(P)), K.preventDefault();
        break;
      case "End":
        de = Ft(P, 6 - Mr(P)), K.preventDefault();
        break;
      case "PageUp":
        de = qn(P, K.shiftKey ? -12 : -1), K.preventDefault();
        break;
      case "PageDown":
        de = qn(P, K.shiftKey ? 12 : 1), K.preventDefault();
        break;
      case "Enter":
      case " ":
        K.preventDefault(), tt(P);
        break;
      case "Escape":
        K.preventDefault(), ye();
        break;
      case "Tab":
        ue(!1);
        break;
    }
    if (de) {
      const Pe = Be(de);
      se(Pe), setTimeout(() => Le(Pe), 0);
    }
  };
  we(() => {
    if (!te) return;
    const K = (de) => {
      O.current && !O.current.contains(de.target) && ye();
    };
    return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
  }, [te, ye]), we(() => {
    if (!te) return;
    const K = (de) => {
      de.key === "Escape" && ye();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [te, ye]);
  const me = () => {
    V || ee(""), N?.(""), k?.(""), L.current?.focus();
  }, Ne = te && U ? Kn(U, c, b) : V ? a ? Kn(Mn(a, c) ?? Gt(), c, b) : "" : Y, Fe = V ? !!a : Y.length > 0, Je = d || te, dt = { year: P.year, month: P.month }, xt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
    year: dt.year,
    month: dt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let K = 0; K < _h; K += 1)
    De.push(Ft(Q, K - xt));
  const nt = U ? pt(U) : be ? pt(be) : null, Ut = pt(Gt()), St = `${dt.year}-${bt(dt.month)}`, Me = $e(
    () => new Intl.DateTimeFormat(b, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [b]
  ), Xe = new Intl.DateTimeFormat(b, {
    month: "long",
    year: "numeric"
  }).format(new Date(dt.year, dt.month - 1, 1)), vt = Array.from(
    { length: 7 },
    (K, de) => new Intl.DateTimeFormat(b, { weekday: "short" }).format(
      new Date(2021, 0, 3 + de)
    )
  ), Rt = t === "xs" ? Oe["dx-datepicker-input--xs"] : t === "sm" ? Oe["dx-datepicker-input--sm"] : t === "lg" ? Oe["dx-datepicker-input--lg"] : t === "xl" ? Oe["dx-datepicker-input--xl"] : Oe["dx-datepicker-input--md"], Zt = /* @__PURE__ */ S(
    "div",
    {
      className: Oe["dx-datepicker-calendar"],
      "aria-label": v ?? "Date picker",
      children: [
        /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-header"], children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Oe["dx-datepicker-nav"],
              "aria-label": "Previous month",
              onClick: () => {
                const K = Be(qn(P, -1));
                se(K), setTimeout(() => Le(K), 0);
              },
              children: /* @__PURE__ */ n(Ce, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ n("span", { className: Oe["dx-datepicker-title"], children: Xe }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Oe["dx-datepicker-nav"],
              "aria-label": "Next month",
              onClick: () => {
                const K = Be(qn(P, 1));
                se(K), setTimeout(() => Le(K), 0);
              },
              children: /* @__PURE__ */ n(Ce, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ S(
          "div",
          {
            ref: R,
            role: "grid",
            className: Oe["dx-datepicker-grid"],
            onKeyDown: re,
            children: [
              /* @__PURE__ */ n("div", { role: "row", className: Oe["dx-datepicker-week-row"], children: vt.map((K) => /* @__PURE__ */ n(
                "div",
                {
                  role: "columnheader",
                  className: Oe["dx-datepicker-weekday"],
                  children: K
                },
                K
              )) }),
              Array.from({ length: 6 }, (K, de) => /* @__PURE__ */ n("div", { role: "row", className: Oe["dx-datepicker-row"], children: De.slice(de * 7, de * 7 + 7).map((Pe) => {
                const Ke = pt(Pe), Lt = ke(Pe), Dt = Ke.startsWith(St);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Ke,
                    tabIndex: Ke === pt(P) ? 0 : -1,
                    "aria-selected": Ke === nt || void 0,
                    "aria-disabled": Lt || void 0,
                    "aria-label": Me.format(
                      new Date(Pe.year, Pe.month - 1, Pe.day)
                    ),
                    className: [
                      Oe["dx-datepicker-day"],
                      Dt ? null : Oe["dx-datepicker-day--outside"],
                      Ke === Ut ? Oe["dx-datepicker-day--today"] : null,
                      Ke === nt ? Oe["dx-datepicker-day--selected"] : null,
                      Lt ? Oe["dx-datepicker-day--disabled"] : null
                    ].filter(Boolean).join(" "),
                    onClick: () => tt(Pe),
                    onFocus: () => se(Pe),
                    children: Pe.day
                  },
                  Ke
                );
              }) }, de))
            ]
          }
        ),
        s && /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-time"], children: [
          xh.map((K) => /* @__PURE__ */ S("label", { className: Oe["dx-datepicker-time-field"], children: [
            /* @__PURE__ */ n("span", { className: Oe["dx-datepicker-time-label"], children: Hn(K) }),
            /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-time-control"], children: [
              /* @__PURE__ */ n(
                "input",
                {
                  className: Oe["dx-datepicker-time-input"],
                  inputMode: "numeric",
                  "aria-label": Hn(K),
                  value: bt((U ?? be ?? Gt())[K]),
                  onChange: (de) => et(K, de.target.value),
                  onKeyDown: (de) => {
                    de.key === "ArrowUp" ? (de.preventDefault(), Qe(K, 1)) : de.key === "ArrowDown" ? (de.preventDefault(), Qe(K, -1)) : de.key === "Enter" && (de.preventDefault(), W());
                  }
                }
              ),
              /* @__PURE__ */ S("span", { className: Oe["dx-datepicker-time-buttons"], children: [
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${Hn(K).toLowerCase()}`,
                    onClick: () => Qe(K, 1),
                    children: /* @__PURE__ */ n(Ce, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${Hn(K).toLowerCase()}`,
                    onClick: () => Qe(K, -1),
                    children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, K)),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Oe["dx-datepicker-ok"],
              onClick: W,
              children: "OK"
            }
          )
        ] })
      ]
    }
  );
  return /* @__PURE__ */ S(
    "div",
    {
      ref: O,
      className: [
        Oe["dx-datepicker"],
        d ? Oe["dx-datepicker-inline"] : null,
        C
      ].filter(Boolean).join(" "),
      children: [
        !d && /* @__PURE__ */ S(Ee, { children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: We,
              type: "text",
              autoComplete: "off",
              value: Ne,
              disabled: f,
              readOnly: g,
              placeholder: w,
              tabIndex: x,
              role: i ? void 0 : "combobox",
              "aria-label": v ?? "Date",
              "aria-haspopup": i ? void 0 : "dialog",
              "aria-expanded": i ? void 0 : Je,
              "aria-controls": i ? void 0 : H,
              "aria-invalid": r || void 0,
              className: [
                Oe["dx-datepicker-input"],
                Rt,
                r ? Oe["dx-datepicker-input-invalid"] : null
              ].filter(Boolean).join(" "),
              onChange: F,
              onKeyDown: ne,
              onBlur: fe,
              onClick: () => {
                i || Ve();
              },
              ...D
            }
          ),
          p && !f && Fe && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [
                Oe["dx-datepicker-clear"],
                i ? Oe["dx-datepicker-clear--inset"] : null
              ].filter(Boolean).join(" "),
              "aria-label": u ?? "Clear",
              onClick: me,
              children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
            }
          ),
          i && /* @__PURE__ */ n(
            "button",
            {
              ref: j,
              type: "button",
              className: [
                Oe["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": E ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": te,
              "aria-controls": H,
              disabled: f,
              onClick: Ve,
              children: /* @__PURE__ */ n(Ce, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Je && /* @__PURE__ */ n(
          "div",
          {
            id: H,
            role: d ? void 0 : "dialog",
            className: d ? void 0 : Oe["dx-datepicker-popup"],
            children: Zt
          }
        )
      ]
    }
  );
}), Yt = {
  "dx-rating": "_dx-rating_3v4s5_1",
  "dx-rating-item": "_dx-rating-item_3v4s5_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_3v4s5_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_3v4s5_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_3v4s5_51",
  "dx-rating-clear": "_dx-rating-clear_3v4s5_55",
  "dx-rating-readonly": "_dx-rating-readonly_3v4s5_87",
  "dx-rating-disabled": "_dx-rating-disabled_3v4s5_96"
}, Rb = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: a = !1,
  ariaLabel: l = "Rating",
  clearLabel: c = "Clear",
  rateLabel: h = "Rate",
  tabIndex: o = 0,
  className: s,
  onChange: i,
  onValueChange: p
}) => {
  const [d, $] = G(e), b = q(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), N = q(
    (f) => {
      i?.(f), p?.(f);
    },
    [i, p]
  ), k = q(
    (f) => {
      r || a || (N(f), $(f));
    },
    [r, a, N]
  ), m = (f) => {
    if (r || a) return;
    const g = d > 0 ? d : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), k(b(g + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), k(b(g - 1));
        break;
      case "Home":
        f.preventDefault(), k(1);
        break;
      case "End":
        f.preventDefault(), k(t);
        break;
    }
  }, _ = Array.from({ length: t }, (f, g) => g + 1);
  return /* @__PURE__ */ S(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": r || void 0,
      className: [
        Yt["dx-rating"],
        r ? Yt["dx-rating-readonly"] : null,
        a ? Yt["dx-rating-disabled"] : null,
        s
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: [
        !r && !a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Yt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: a,
            onClick: () => k(0),
            children: /* @__PURE__ */ n(Ce, { name: "ban", size: 16 })
          }
        ),
        _.map((f) => {
          const g = f <= e, w = f === (e > 0 ? e : d);
          return /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${h} ${f}`,
              tabIndex: w ? o : -1,
              "aria-disabled": a || r || void 0,
              disabled: a || r,
              className: [
                Yt["dx-rating-item"],
                g ? Yt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => k(f),
              onFocus: () => $(f),
              children: [
                /* @__PURE__ */ n("span", { className: Yt["dx-rating-icon-filled"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "star", size: 20 }) }),
                /* @__PURE__ */ n("span", { className: Yt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "star-outline", size: 20 }) })
              ]
            },
            f
          );
        })
      ]
    }
  );
}, nn = {
  "dx-slider": "_dx-slider_xfmgi_1",
  "dx-slider-track": "_dx-slider-track_xfmgi_9",
  "dx-slider-range": "_dx-slider-range_xfmgi_17",
  "dx-slider-handle": "_dx-slider-handle_xfmgi_26",
  "dx-slider-vertical": "_dx-slider-vertical_xfmgi_58",
  "dx-slider-disabled": "_dx-slider-disabled_xfmgi_84"
};
function It(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const Lb = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: a = 0,
  max: l = 100,
  step: c = 1,
  range: h = !1,
  orientation: o = "horizontal",
  disabled: s = !1,
  label: i = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: $ = 0,
  className: b,
  onChange: N,
  onInput: k,
  onValueChange: m,
  onInputChange: _
}) => {
  const f = le(null), g = le(null), [w, v] = G(null), E = w ?? e, u = $e(() => It(E, a, l), [E, a, l]), x = $e(
    () => It(h ? t : u, a, l),
    [h, t, u, a, l]
  ), C = $e(
    () => It(h ? Math.max(r, x) : u, a, l),
    [h, r, x, u, a, l]
  ), I = q(
    (P) => {
      const se = l - a;
      return se <= 0 ? 0 : (It(P, a, l) - a) / se * 100;
    },
    [a, l]
  ), z = q(
    (P, se) => {
      const J = f.current;
      if (!J) return a;
      const ce = J.getBoundingClientRect();
      let ae;
      o === "vertical" ? ae = 1 - (se - ce.top) / ce.height : ae = (P - ce.left) / ce.width;
      const be = a + It(ae, 0, 1) * (l - a);
      return c > 0 ? It(Math.round(be / c) * c, a, l) : It(be, a, l);
    },
    [a, l, c, o]
  ), D = q(
    (P) => {
      typeof P == "number" && v(P), N?.(P), m?.(P);
    },
    [N, m]
  ), y = q(
    (P) => {
      typeof P == "number" && v(P), k?.(P), _?.(P);
    },
    [k, _]
  ), O = q(
    (P, se, J) => {
      const ce = z(se, J);
      let ae;
      h ? P === "min" ? ae = { min: Math.min(ce, C), max: C } : ae = { min: x, max: Math.max(ce, x) } : ae = ce, y(ae), g.current === null && D(ae);
    },
    [h, z, x, C, y, D]
  ), L = q(
    (P, se) => {
      const J = (c > 0 ? c : 1) * se;
      let ce;
      h ? P === "min" ? ce = {
        min: It(x + J, a, C),
        max: C
      } : ce = {
        min: x,
        max: It(C + J, x, l)
      } : ce = It(u + J, a, l), D(ce);
    },
    [h, c, a, l, x, C, u, D]
  ), j = (P, se) => {
    if (!s)
      switch (se.key) {
        case "ArrowLeft":
        case "ArrowDown":
          se.preventDefault(), L(P, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          se.preventDefault(), L(P, 1);
          break;
        case "Home":
          se.preventDefault(), D(h ? P === "min" ? { min: a, max: C } : { min: x, max: x } : a);
          break;
        case "End":
          se.preventDefault(), D(h ? P === "min" ? { min: C, max: C } : { min: x, max: l } : l);
          break;
      }
  }, R = (P, se) => {
    s || (se.preventDefault(), se.currentTarget.focus(), typeof se.currentTarget.setPointerCapture == "function" && se.currentTarget.setPointerCapture(se.pointerId), g.current = { key: P, pointerId: se.pointerId }, O(P, se.clientX, se.clientY));
  }, H = (P) => {
    !g.current || g.current.pointerId !== P.pointerId || (P.preventDefault(), O(g.current.key, P.clientX, P.clientY));
  }, V = (P) => {
    !g.current || g.current.pointerId !== P.pointerId || (g.current = null, P.preventDefault(), D(h ? { min: x, max: C } : u));
  }, [Y, ee] = G(null), te = I(x), ue = I(C), U = h ? te : 0, X = ue;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        nn["dx-slider"],
        o === "vertical" ? nn["dx-slider-vertical"] : null,
        s ? nn["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ S("div", { ref: f, className: nn["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: nn["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${U}%`, height: `${X - U}%` } : { left: `${U}%`, width: `${X - U}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": a,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(x),
            "aria-orientation": o,
            "aria-label": h ? p : i,
            "aria-disabled": s || void 0,
            tabIndex: s || h && Y === "max" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (P) => j("min", P),
            onPointerDown: (P) => R("min", P),
            onPointerMove: H,
            onPointerUp: V,
            onFocus: () => ee("min")
          }
        ),
        h && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": a,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(C),
            "aria-orientation": o,
            "aria-label": d,
            "aria-disabled": s || void 0,
            tabIndex: s || Y === "min" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${ue}% - 8px)` } : { left: `calc(${ue}% - 8px)` },
            onKeyDown: (P) => j("max", P),
            onPointerDown: (P) => R("max", P),
            onPointerMove: H,
            onPointerUp: V,
            onFocus: () => ee("max")
          }
        )
      ] })
    }
  );
}, He = {
  "dx-timespanpicker": "_dx-timespanpicker_10x2i_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_10x2i_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_10x2i_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_10x2i_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_10x2i_49",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_10x2i_55",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_10x2i_61",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_10x2i_67",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_10x2i_73",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_10x2i_79",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_10x2i_114",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_10x2i_144",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_10x2i_156",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_10x2i_163",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_10x2i_172",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_10x2i_172",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_10x2i_184",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_10x2i_189",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_10x2i_193",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_10x2i_213",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_10x2i_241",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_10x2i_249"
}, vh = "-10675199.02:48:05.4775808", kh = "10675199.02:48:05.4775808", Kt = 86400, Ht = 3600, Ct = 60, er = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Cr = {
  days: Kt,
  hours: Ht,
  minutes: Ct,
  seconds: 1
}, wh = {
  day: Kt,
  hour: Ht,
  minute: Ct,
  second: 1
};
function _n(e) {
  return String(e).padStart(2, "0");
}
function An(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, a = t;
  a.startsWith("-") ? (r = -1, a = a.slice(1)) : a.startsWith("+") && (a = a.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    a
  );
  if (l) {
    if (!l.slice(1).some((d) => d != null)) return null;
    const o = l[1] != null ? Number(l[1]) : 0, s = l[2] != null ? Number(l[2]) : 0, i = l[3] != null ? Number(l[3]) : 0, p = l[4] != null ? Number(l[4]) : 0;
    return r * (o * Kt + s * Ht + i * Ct + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(a);
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), s = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || s > 59 || i > 59 ? null : r * (h * Kt + o * Ht + s * Ct + i + p);
  }
  return null;
}
function $h(e) {
  return e.days * Kt + e.hours * Ht + e.minutes * Ct + e.seconds;
}
function Or(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / Kt);
  t %= Kt;
  const a = Math.floor(t / Ht);
  t %= Ht;
  const l = Math.floor(t / Ct), c = Math.round(t % Ct * 1e9) / 1e9;
  return { days: r, hours: a, minutes: l, seconds: c };
}
function ar(e, t) {
  const r = e < 0;
  let a = Math.abs(e);
  t === "minute" ? a = Math.round(a / Ct) * Ct : t === "hour" ? a = Math.round(a / Ht) * Ht : t === "day" && (a = Math.round(a / Kt) * Kt);
  let l = Math.round(a % Ct);
  const c = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const h = Math.floor(a / Ct) + c, o = h % 60, s = Math.floor(h / 60), i = s % 24, p = Math.floor(s / 24), d = r ? "-" : "", $ = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${$}${_n(i)}`;
    case "minute":
      return `${d}${$}${_n(i)}:${_n(o)}`;
    default:
      return `${d}${$}${_n(i)}:${_n(o)}:${_n(l)}`;
  }
}
function Er(e, t = "second") {
  const r = An(e);
  return r === null ? "" : ar(r, t);
}
function tr(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const Pb = qe(
  function({
    size: t = "md",
    invalid: r = !1,
    value: a,
    defaultValue: l,
    min: c = vh,
    max: h = kh,
    step: o = "1",
    precision: s = "second",
    showDays: i = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: $ = !0,
    allowClear: b = !1,
    inline: N = !1,
    onChange: k,
    onValueChange: m,
    onOpen: _,
    onClose: f,
    disabled: g,
    placeholder: w,
    ariaLabel: v,
    triggerLabel: E,
    clearLabel: u,
    tabIndex: x,
    className: C,
    onBlur: I,
    onKeyDown: z,
    ...D
  }, y) {
    const O = le(null), L = le(null), j = le(null), R = Ye(), H = a !== void 0, [V, Y] = G(
      () => l != null ? Er(l, s) : ""
    ), [ee, te] = G(!1), [ue, U] = G(null), [X, P] = G(null), se = $e(
      () => An(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), J = $e(
      () => An(h) ?? Number.MAX_SAFE_INTEGER,
      [h]
    ), ce = $e(() => {
      const Q = Number.parseFloat(o);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [o]), ae = $e(() => {
      const Q = H ? a ?? "" : V;
      return Q ? An(Q) : null;
    }, [a, V, H]), be = q(
      (Q) => {
        const De = Q === null ? "" : ar(Q, s);
        H || Y(De), k?.(De), m?.(De);
      },
      [H, s, k, m]
    ), ke = q(
      (Q) => {
        Q && ue !== null && be(ue), te(!1), U(null), P(null), f?.(), N || j.current?.focus();
      },
      [N, ue, be, f]
    ), Be = q(() => {
      g || (U(ae ?? 0), te(!0), _?.());
    }, [g, ae, _]), ve = q(() => {
      ee ? ke(!1) : Be();
    }, [ee, ke, Be]), We = q(
      (Q, De) => {
        U((nt) => {
          const St = (nt ?? ae ?? 0) + De * ce * Cr[Q];
          return tr(St, se, J);
        });
      },
      [ae, ce, se, J]
    ), ye = q(
      (Q) => {
        const De = X?.[Q];
        if (De == null) return;
        const nt = Number.parseFloat(De), Ut = Number.isNaN(nt) ? 0 : nt;
        U((St) => {
          const Me = St ?? ae ?? 0, Xe = Or(Me);
          Xe[Q] = Ut;
          const Rt = (Me < 0 ? -1 : 1) * $h(Xe);
          return tr(Rt, se, J);
        }), P(null);
      },
      [X, ae, se, J]
    ), Ze = (Q, De) => {
      P((nt) => ({ ...nt ?? {}, [Q]: De }));
    }, Ve = (Q, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), ye(Q), We(Q, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), ye(Q), We(Q, -1);
          break;
        case "Home":
          De.preventDefault(), ye(Q), U(se);
          break;
        case "End":
          De.preventDefault(), ye(Q), U(J);
          break;
        case "Enter":
          De.preventDefault(), ye(Q), ke(!0);
          break;
      }
    }, Le = q(() => {
      if (ee) return;
      const Q = An(V);
      be(Q !== null ? tr(Q, se, J) : null);
    }, [ee, V, se, J, be]), tt = (Q) => {
      H || Y(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), ee ? ke(!0) : Le()) : Q.key === "Escape" && ee ? (Q.preventDefault(), ke(!1)) : Q.key === "ArrowDown" && !ee ? (Q.preventDefault(), Be()) : Q.key === "Tab" && ee && te(!1), z?.(Q);
    }, et = (Q) => {
      Le(), I?.(Q);
    }, W = () => {
      H || Y(""), k?.(""), m?.(""), L.current?.focus();
    };
    we(() => {
      if (!ee) return;
      const Q = (De) => {
        O.current && !O.current.contains(De.target) && ke(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [ee, ke]), we(() => {
      if (!ee) return;
      const Q = (De) => {
        De.key === "Escape" && ke(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [ee, ke]), we(() => {
      if (N && ue !== null) {
        const Q = ae;
        (Q === null || Math.abs(ue - Q) > 1e-9) && be(ue);
      }
    }, [N, ue, ae, be]);
    const M = q(
      (Q) => {
        L.current = Q, typeof y == "function" ? y(Q) : y && (y.current = Q);
      },
      [y]
    ), F = H ? a ? Er(a, s) : "" : V, ne = H ? !!a : V.length > 0, fe = N || ee, re = ue ?? ae ?? 0, me = Or(re), Ne = wh[s], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Cr[Q] >= Ne && (Q === "days" ? i : Q === "hours" ? p : Q === "minutes" ? d : $)
    ), dt = t === "xs" ? He["dx-timespanpicker-input--xs"] : t === "sm" ? He["dx-timespanpicker-input--sm"] : t === "lg" ? He["dx-timespanpicker-input--lg"] : t === "xl" ? He["dx-timespanpicker-input--xl"] : He["dx-timespanpicker-input--md"], xt = /* @__PURE__ */ S("div", { className: He["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: He["dx-timespanpicker-preview"], "aria-live": "polite", children: ar(re, s) }),
      /* @__PURE__ */ n("div", { className: He["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ S("label", { className: He["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: He["dx-timespanpicker-unit-label"], children: er[Q] }),
        /* @__PURE__ */ S("span", { className: He["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: He["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: X?.[Q] ?? String(me[Q]),
              onChange: (De) => Ze(Q, De.target.value),
              onKeyDown: (De) => Ve(Q, De),
              onBlur: () => ye(Q)
            }
          ),
          /* @__PURE__ */ S("span", { className: He["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${er[Q].toLowerCase()}`,
                onClick: () => {
                  ye(Q), We(Q, 1);
                },
                children: /* @__PURE__ */ n(Ce, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${er[Q].toLowerCase()}`,
                onClick: () => {
                  ye(Q), We(Q, -1);
                },
                children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ n("div", { className: He["dx-timespanpicker-footer"], children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: He["dx-timespanpicker-ok"],
          onClick: () => ke(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ S(
      "div",
      {
        ref: O,
        className: [
          He["dx-timespanpicker"],
          N ? He["dx-timespanpicker-inline"] : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !N && /* @__PURE__ */ S(Ee, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: M,
                type: "text",
                autoComplete: "off",
                value: F,
                disabled: g,
                placeholder: w,
                tabIndex: x,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": R,
                "aria-invalid": r || void 0,
                className: [
                  He["dx-timespanpicker-input"],
                  dt,
                  r ? He["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...D
              }
            ),
            b && !g && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: He["dx-timespanpicker-clear"],
                "aria-label": u ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [
                  He["dx-timespanpicker-trigger"]
                ].filter(Boolean).join(" "),
                "aria-label": E ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": R,
                disabled: g,
                onClick: ve,
                children: /* @__PURE__ */ n(Ce, { name: "clock", size: 16 })
              }
            )
          ] }),
          fe && /* @__PURE__ */ n(
            "div",
            {
              id: R,
              role: N ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: N ? void 0 : He["dx-timespanpicker-popup"],
              children: xt
            }
          )
        ]
      }
    );
  }
), Nh = "_wrapper_t1zvh_1", Sh = "_cells_t1zvh_8", Dh = "_cell_t1zvh_8", Mh = "_invalid_t1zvh_63", zh = "_live_t1zvh_72", rn = {
  wrapper: Nh,
  cells: Sh,
  cell: Dh,
  "cell-sm": "_cell-sm_t1zvh_45",
  "cell-md": "_cell-md_t1zvh_51",
  "cell-lg": "_cell-lg_t1zvh_57",
  invalid: Mh,
  live: zh
};
function Ir(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Bb = qe(
  function({
    length: t = 6,
    value: r,
    defaultValue: a,
    onChange: l,
    invalid: c = !1,
    size: h = "md",
    autoFocus: o = !1,
    disabled: s = !1,
    label: i = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": $
  }, b) {
    const N = Ye(), k = r !== void 0, [m, _] = G(Ir(a).join("")), f = k ? Ir(r).join("") : m, g = Array.from({ length: t }, (D, y) => f[y] ?? ""), w = le([]), [v, E] = G(""), u = (D) => {
      k || _(D), l?.(D);
    }, x = (D) => {
      const y = w.current[D];
      y && !y.disabled && (y.focus(), y.select());
    }, C = (D, y) => {
      const O = y.replace(/\D/g, "").slice(-1), L = f.split("");
      if (O) {
        L[D] = O;
        const j = L.join("").slice(0, t);
        u(j), j.length < t ? x(D + 1) : p && E("Code complete");
      }
    }, I = (D, y) => {
      if (y.key === "Backspace") {
        if (y.preventDefault(), f[D]) {
          const O = f.split("");
          O[D] = "", u(O.join(""));
        } else if (D > 0) {
          const O = f.split("");
          O[D - 1] = "", u(O.join("")), x(D - 1);
        }
      } else y.key === "ArrowLeft" && D > 0 ? (y.preventDefault(), x(D - 1)) : y.key === "ArrowRight" && D < t - 1 ? (y.preventDefault(), x(D + 1)) : y.key === "Home" ? (y.preventDefault(), x(0)) : y.key === "End" && (y.preventDefault(), x(t - 1));
    }, z = (D, y) => {
      y.preventDefault();
      const O = y.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!O) return;
      const L = f.split("");
      let j = 0;
      for (let H = 0; H < O.length && D + H < t; H++)
        L[D + H] = O[H] ?? "", j++;
      const R = L.join("");
      u(R), R.length >= t ? p && E("Code complete") : x(D + j);
    };
    return /* @__PURE__ */ S(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": $ ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[h]].join(" "), children: g.map((D, y) => /* @__PURE__ */ n(
            "input",
            {
              ref: (O) => {
                w.current[y] = O, y === 0 && b && (typeof b == "function" ? b(O) : b.current = O);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: D,
              disabled: s,
              "aria-label": `Digit ${y + 1} of ${t}`,
              "aria-invalid": c && D !== "" ? !0 : void 0,
              autoFocus: o && y === 0,
              className: [rn.cell, rn[`cell-${h}`], c ? rn.invalid : null].filter(Boolean).join(" "),
              onChange: (O) => C(y, O.target.value),
              onKeyDown: (O) => I(y, O),
              onPaste: (O) => z(y, O),
              onFocus: (O) => O.target.select(),
              onBlur: () => {
                p && E("");
              }
            },
            y
          )) }),
          p && /* @__PURE__ */ n("span", { id: `${N}-live`, role: "status", "aria-live": "polite", className: rn.live, children: v })
        ]
      }
    );
  }
), Ch = "_wrapper_itqsj_1", Oh = "_header_itqsj_7", Eh = "_label_itqsj_15", Ih = "_clear_itqsj_22", jh = "_canvas_itqsj_53", Ah = "_disabled_itqsj_69", pn = {
  wrapper: Ch,
  header: Oh,
  label: Eh,
  clear: Ih,
  canvas: jh,
  disabled: Ah
}, Fb = qe(
  function({
    value: t,
    defaultValue: r,
    onChange: a,
    penColor: l = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: h = "Clear",
    ariaLabel: o = "Signature",
    width: s,
    height: i = 140,
    disabled: p = !1,
    className: d
  }, $) {
    const b = le(null), N = le(!1), k = le(!1), m = le({ x: 0, y: 0 });
    we(() => {
      const u = b.current;
      if (!u) return;
      const x = window.devicePixelRatio || 1, C = Math.round((s ?? u.clientWidth) * x), I = Math.round(i * x);
      (u.width !== C || u.height !== I) && (u.width = C, u.height = I);
      const z = u.getContext("2d");
      if (!z) return;
      z.setTransform(x, 0, 0, x, 0, 0), z.lineWidth = c, z.strokeStyle = l, z.lineCap = "round", z.lineJoin = "round";
      const D = t ?? r;
      if (D) {
        const y = new Image();
        y.onload = () => {
          z.drawImage(y, 0, 0, u.clientWidth, i);
        }, y.src = D;
      }
    }, [t, r, l, c, s, i]);
    const _ = () => {
      const u = b.current;
      if (!u) return;
      const x = u.toDataURL("image/png");
      a?.(x);
    }, f = () => {
      const u = b.current;
      if (!u) return;
      const x = u.getContext("2d");
      x && x.clearRect(0, 0, u.width, u.height), a?.("");
    };
    lr($, () => ({
      clear: f,
      toDataURL: (u = "image/png", x) => b.current?.toDataURL(u, x) ?? ""
    }));
    const g = (u) => {
      const x = u.currentTarget.getBoundingClientRect();
      return { x: u.clientX - x.left, y: u.clientY - x.top };
    }, w = (u) => {
      p || (u.preventDefault(), typeof u.currentTarget.setPointerCapture == "function" && u.currentTarget.setPointerCapture(u.pointerId), N.current = !0, k.current = !1, m.current = g(u));
    }, v = (u) => {
      if (!N.current) return;
      u.preventDefault();
      const x = u.currentTarget.getContext("2d");
      if (!x) return;
      const C = g(u);
      x.beginPath(), x.moveTo(m.current.x, m.current.y), x.lineTo(C.x, C.y), x.stroke(), m.current = C, k.current = !0;
    }, E = (u) => {
      N.current && (u.preventDefault(), N.current = !1, k.current && _());
    };
    return /* @__PURE__ */ S("div", { className: [pn.wrapper, d, p ? pn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ S("div", { className: pn.header, children: [
        /* @__PURE__ */ n("span", { className: pn.label, children: o }),
        /* @__PURE__ */ n("button", { type: "button", className: pn.clear, onClick: f, disabled: p, children: h })
      ] }),
      /* @__PURE__ */ n(
        "canvas",
        {
          ref: b,
          role: "img",
          "aria-label": o,
          "aria-disabled": p || void 0,
          style: { width: s ? `${s}px` : void 0, height: `${i}px` },
          className: pn.canvas,
          onPointerDown: w,
          onPointerMove: v,
          onPointerUp: E,
          onPointerCancel: E
        }
      )
    ] });
  }
), Th = "_wrapper_1v23y_1", Rh = "_trigger_1v23y_7", Lh = "_list_1v23y_35", Ph = "_row_1v23y_44", Bh = "_name_1v23y_59", Fh = "_size_1v23y_68", qh = "_progress_1v23y_74", Kh = "_fill_1v23y_82", Hh = "_status_1v23y_99", Uh = "_remove_1v23y_106", jt = {
  wrapper: Th,
  trigger: Rh,
  list: Lh,
  row: Ph,
  name: Bh,
  size: Fh,
  progress: qh,
  fill: Kh,
  status: Hh,
  remove: Uh
};
function jr(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const qb = qe(function({
  url: t,
  multiple: r = !1,
  parameterName: a = "files",
  auto: l = !0,
  headers: c,
  accept: h,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: s,
  chooseText: i = "Upload",
  children: p,
  onProgress: d,
  onComplete: $,
  onError: b
}, N) {
  const k = le(null), [m, _] = G([]), f = le(/* @__PURE__ */ new Map()), g = (x, C) => {
    _((I) => I.map((z) => z.file.name === x ? { ...z, ...C } : z));
  }, w = (x) => {
    if (!t) return;
    const C = new XMLHttpRequest();
    f.current.set(x.file.name, C);
    const I = new FormData();
    if (I.append(a, x.file), C.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const D = Math.round(z.loaded / z.total * 100);
      g(x.file.name, { state: "uploading", progress: D }), d?.(x.file.name, D);
    }), C.addEventListener("load", () => {
      C.status >= 200 && C.status < 300 ? (g(x.file.name, { state: "complete", progress: 100 }), $?.(x.file.name)) : (g(x.file.name, { state: "error", message: `HTTP ${C.status}` }), b?.(x.file.name, `HTTP ${C.status}`));
    }), C.addEventListener("error", () => {
      g(x.file.name, { state: "error", message: "Network error" }), b?.(x.file.name, "Network error");
    }), c)
      for (const [z, D] of Object.entries(c))
        C.setRequestHeader(z, D);
    C.open("POST", t), C.send(I), g(x.file.name, { state: "uploading", progress: 0 });
  }, v = (x) => {
    if (!x) return;
    const C = [...x], I = [];
    let z = Math.max(0, o - m.length);
    for (const y of C) {
      if (s != null && y.size > s) {
        b?.(y.name, `File too large (maximum ${jr(s)})`);
        continue;
      }
      if (z <= 0) {
        b?.(y.name, `Too many files (maximum ${o})`);
        continue;
      }
      z -= 1, I.push(y);
    }
    const D = I.map((y) => ({
      file: y,
      state: "pending",
      progress: 0
    }));
    _((y) => [...y, ...D]), k.current && (k.current.value = ""), l && D.forEach(w);
  }, E = (x) => {
    f.current.get(x)?.abort(), f.current.delete(x), _((I) => I.filter((z) => z.file.name !== x));
  }, u = p ?? /* @__PURE__ */ S("button", { type: "button", className: jt.trigger, onClick: () => k.current?.click(), children: [
    /* @__PURE__ */ n(Ce, { name: "upload", size: 14 }),
    i
  ] });
  return lr(N, () => ({
    open: () => k.current?.click(),
    upload: () => m.forEach((x) => x.state === "pending" ? w(x) : null)
  })), /* @__PURE__ */ S("div", { className: jt.wrapper, children: [
    u,
    /* @__PURE__ */ n(
      "input",
      {
        ref: k,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: h,
        "data-testid": "upload-input",
        onChange: (x) => v(x.target.files)
      }
    ),
    !p && m.length > 0 && /* @__PURE__ */ n("ul", { className: jt.list, children: m.map(({ file: x, state: C, progress: I, message: z }) => /* @__PURE__ */ S("li", { className: jt.row, "data-state": C, "data-testid": "upload-row", children: [
      /* @__PURE__ */ n("span", { className: jt.name, children: x.name }),
      /* @__PURE__ */ n("span", { className: jt.size, children: jr(x.size) }),
      /* @__PURE__ */ n(
        "span",
        {
          className: jt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": I,
          children: /* @__PURE__ */ n("span", { className: jt.fill, style: { width: `${I}%` } })
        }
      ),
      /* @__PURE__ */ n("span", { className: jt.status, role: "status", children: C === "uploading" ? "Uploading" : C === "complete" ? "Complete" : C === "error" ? z ?? "Failed" : "Pending" }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: jt.remove,
          "aria-label": `Remove ${x.name}`,
          onClick: () => E(x.name),
          children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
        }
      )
    ] }, x.name)) })
  ] });
}), Wh = "_zone_14tvz_1", Vh = "_dragging_14tvz_23", Xh = "_caption_14tvz_28", Gh = "_browse_14tvz_40", Yh = "_disabled_14tvz_67", zn = {
  zone: Wh,
  dragging: Vh,
  caption: Xh,
  browse: Gh,
  disabled: Yh
};
function Zh(e, t) {
  return t ? t.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const a = r.slice(0, -1);
      return e.type.startsWith(a);
    }
    return e.type === r;
  }) : !0;
}
const Kb = qe(function({
  accept: t,
  multiple: r = !1,
  onDrop: a,
  label: l = "Drop files here or browse",
  dragLabel: c = "Drop to attach",
  browseText: h = "Browse",
  disabled: o = !1,
  className: s
}, i) {
  const p = le(null), [d, $] = G(!1), b = (f) => {
    if (!f || f.length === 0) return;
    const g = [...f].filter((w) => Zh(w, t ?? ""));
    g.length !== 0 && a?.(g);
  }, N = (f) => {
    o || (f.preventDefault(), $(!0));
  }, k = (f) => {
    o || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", $(!0));
  }, m = (f) => {
    o || f.currentTarget.contains(f.relatedTarget) || $(!1);
  }, _ = (f) => {
    o || (f.preventDefault(), $(!1), b(f.dataTransfer.files));
  };
  return lr(i, () => ({
    open: () => p.current?.click()
  })), /* @__PURE__ */ S(
    "div",
    {
      role: "region",
      "aria-label": l,
      className: [zn.zone, d ? zn.dragging : null, o ? zn.disabled : null, s].filter(Boolean).join(" "),
      onDragEnter: N,
      onDragOver: k,
      onDragLeave: m,
      onDrop: _,
      children: [
        /* @__PURE__ */ n("p", { className: zn.caption, children: d ? c : l }),
        !o && /* @__PURE__ */ n("button", { type: "button", className: zn.browse, onClick: () => p.current?.click(), children: h }),
        /* @__PURE__ */ n(
          "input",
          {
            ref: p,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: t,
            "data-testid": "dropzone-input",
            onChange: (f) => {
              b(f.target.files), f.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Jh = "_root_1dfo5_1", Qh = "_menubar_1dfo5_5", em = "_horizontal_1dfo5_15", tm = "_vertical_1dfo5_20", nm = "_itemWrapper_1dfo5_25", rm = "_item_1dfo5_25", om = "_disabled_1dfo5_61", sm = "_icon_1dfo5_68", am = "_text_1dfo5_75", lm = "_caret_1dfo5_79", im = "_hasChildren_1dfo5_85", cm = "_submenu_1dfo5_94", dm = "_submenuItem_1dfo5_118", ct = {
  root: Jh,
  menubar: Qh,
  horizontal: em,
  vertical: tm,
  itemWrapper: nm,
  item: rm,
  disabled: om,
  icon: sm,
  text: am,
  caret: lm,
  hasChildren: im,
  submenu: cm,
  submenuItem: dm
};
function Cn(e) {
  return !!e.disabled;
}
function Hb({
  items: e,
  orientation: t = "horizontal",
  onClick: r,
  Click: a,
  ariaLabel: l = "Menu",
  className: c
}) {
  const h = Ye(), o = le(null), s = le(null), [i, p] = G(null), d = le(0), $ = le(null), b = q(
    (_) => {
      const f = { text: _.text, value: _.value, path: _.path };
      (r ?? a)?.(f);
    },
    [r, a]
  ), N = q(
    (_, f) => {
      if (!Cn(_)) {
        if (_.children && _.children.length > 0) {
          const g = i === f, w = Date.now() - d.current < 600;
          if (g && w) {
            d.current = 0;
            return;
          }
          p((v) => v === f ? null : f);
          return;
        }
        b(_), p(null);
      }
    },
    [b, i]
  ), k = (_) => {
    Cn(_) || _.children && _.children.length > 0 || (b(_), p(null));
  };
  we(() => {
    if (i == null) return;
    const _ = (f) => {
      o.current && !o.current.contains(f.target) && p(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [i]), we(() => {
    if ($.current != null && i === $.current) {
      const _ = `${h}-submenu-${i}`;
      document.getElementById(_)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), $.current = null;
    }
  }, [i, h]);
  const m = (_) => {
    const f = s.current;
    if (!f) return;
    const g = Array.from(
      f.querySelectorAll('[data-top="true"]')
    ).filter((E) => !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true");
    if (i != null) {
      const E = `${h}-submenu-${i}`, u = document.getElementById(E);
      if (u) {
        const x = Array.from(u.querySelectorAll('[role="menuitem"]')).filter(
          (z) => z.getAttribute("aria-disabled") !== "true"
        ), C = document.activeElement, I = C ? x.indexOf(C) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), I === -1 ? x[0]?.focus() : x[(I + 1) % x.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), I === -1 ? x[x.length - 1]?.focus() : x[(I - 1 + x.length) % x.length]?.focus();
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), p(null), f.querySelector(`[data-top="true"][data-index="${i}"]`)?.focus();
          return;
        }
        if (_.key === "Enter" || _.key === " ")
          return;
      }
      if (_.key === "Escape") {
        _.preventDefault(), p(null);
        return;
      }
    }
    const w = document.activeElement, v = w ? g.indexOf(w) : -1;
    if (_.key === "ArrowRight" || t === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), g.length === 0) return;
      const E = v === -1 ? 0 : (v + 1) % g.length;
      g[E]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || t === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), g.length === 0) return;
      const E = v === -1 ? g.length - 1 : (v - 1 + g.length) % g.length;
      g[E]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if (v >= 0) {
        const E = w?.getAttribute("data-index"), u = E != null ? Number(E) : -1, x = u >= 0 ? e[u] : void 0;
        x?.children && x.children.length > 0 && !Cn(x) && (_.preventDefault(), $.current = u, p(u));
      }
      return;
    }
    if (_.key === "Home") {
      _.preventDefault(), g[0]?.focus();
      return;
    }
    if (_.key === "End") {
      _.preventDefault(), g[g.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: o,
      "aria-label": l,
      className: [ct.root, ct[t], c].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: s,
          role: "menubar",
          "aria-label": l,
          className: ct.menubar,
          onKeyDown: m,
          children: e.map((_, f) => {
            const g = !!_.children && _.children.length > 0, w = i === f, v = Cn(_), E = `${h}-submenu-${f}`;
            return /* @__PURE__ */ S(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && g && !v && (d.current = Date.now(), p(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && g && p((u) => u === f ? null : u);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ S(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": f,
                      "data-dx-menu-item": "",
                      "aria-disabled": v || void 0,
                      "aria-haspopup": g ? "menu" : void 0,
                      "aria-expanded": g ? w : void 0,
                      "aria-controls": g ? E : void 0,
                      tabIndex: v ? -1 : 0,
                      disabled: v,
                      className: [ct.item, v ? ct.disabled : null, g ? ct.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => N(_, f),
                      children: [
                        _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: _.text }),
                        g ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  g && w ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: E,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((u, x) => {
                        const C = Cn(u), I = !!u.children && u.children.length > 0;
                        return /* @__PURE__ */ S(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": C || void 0,
                            "aria-haspopup": I ? "menu" : void 0,
                            tabIndex: C ? -1 : 0,
                            disabled: C,
                            className: [ct.submenuItem, C ? ct.disabled : null].filter(Boolean).join(" "),
                            onClick: () => k(u),
                            children: [
                              u.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: u.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: u.text })
                            ]
                          },
                          `${u.text}-${x}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${_.text}-${f}`
            );
          })
        }
      )
    }
  );
}
const um = "_root_1hs3b_1", fm = "_list_1hs3b_9", _m = "_item_1hs3b_14", pm = "_trigger_1hs3b_18", hm = "_disabled_1hs3b_44", mm = "_expanded_1hs3b_51", gm = "_icon_1hs3b_55", ym = "_text_1hs3b_66", bm = "_caret_1hs3b_73", xm = "_open_1hs3b_80", vm = "_submenu_1hs3b_84", km = "_submenuItem_1hs3b_93", wm = "_nestedWrapper_1hs3b_122", $m = "_nestedTrigger_1hs3b_127", Nm = "_nestedMenu_1hs3b_152", Sm = "_iconOnly_1hs3b_160", Ae = {
  root: um,
  list: fm,
  item: _m,
  trigger: pm,
  disabled: hm,
  expanded: mm,
  icon: gm,
  text: ym,
  caret: bm,
  open: xm,
  submenu: vm,
  submenuItem: km,
  nestedWrapper: wm,
  nestedTrigger: $m,
  nestedMenu: Nm,
  iconOnly: Sm
};
function Dm({
  item: e,
  baseId: t,
  parentKey: r,
  onEmit: a
}) {
  const l = !!e.children && e.children.length > 0, [c, h] = G(!1), o = `${t}-nested-${r}`, s = !!e.disabled, i = () => {
    if (!s) {
      if (l) {
        h((d) => !d);
        return;
      }
      a({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), i()) : d.key === "Escape" && c && (d.preventDefault(), h(!1));
  };
  return l ? /* @__PURE__ */ S("div", { className: Ae.nestedWrapper, children: [
    /* @__PURE__ */ S(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": o,
        "aria-disabled": s || void 0,
        disabled: s,
        tabIndex: s ? -1 : 0,
        className: [Ae.nestedTrigger, s ? Ae.disabled : null].filter(Boolean).join(" "),
        onClick: i,
        onKeyDown: p,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Ae.text, children: e.text }),
          /* @__PURE__ */ n("span", { className: [Ae.caret, c ? Ae.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) })
        ]
      }
    ),
    c ? /* @__PURE__ */ n("div", { id: o, role: "menu", className: Ae.nestedMenu, children: e.children?.map((d, $) => {
      const b = !!d.disabled;
      return /* @__PURE__ */ S(
        "div",
        {
          role: "menuitem",
          "aria-disabled": b || void 0,
          tabIndex: b ? -1 : 0,
          className: [Ae.submenuItem, b ? Ae.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            b || d.children && d.children.length > 0 || a({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (N) => {
            if (N.key === "Enter" || N.key === " ") {
              if (N.preventDefault(), b) return;
              a({ text: d.text, value: d.value, path: d.path });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ae.text, children: d.text })
          ]
        },
        `${d.text}-${$}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ S(
    "div",
    {
      role: "menuitem",
      "aria-disabled": s || void 0,
      tabIndex: s ? -1 : 0,
      className: [Ae.submenuItem, s ? Ae.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        s || a({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), s) return;
          a({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Ae.text, children: e.text })
      ]
    }
  );
}
function Ub({
  items: e,
  multiple: t,
  Multiple: r,
  showArrow: a,
  ShowArrow: l,
  displayStyle: c,
  DisplayStyle: h,
  onClick: o,
  Click: s,
  ariaLabel: i = "Panel menu",
  className: p
}) {
  const d = Ye(), $ = t ?? r ?? !1, b = a ?? l ?? !0, N = c ?? h ?? "iconAndText", [k, m] = G([]), _ = q(
    (w) => {
      const v = { text: w.text, value: w.value, path: w.path };
      (o ?? s)?.(v);
    },
    [o, s]
  ), f = (w, v, E) => {
    if (!E.disabled) {
      if (v) {
        m((u) => u.includes(w) ? u.filter((C) => C !== w) : $ ? [...u, w] : [w]);
        return;
      }
      _(E);
    }
  }, g = (w) => {
    const v = w.target;
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "Escape") {
        const E = v.getAttribute("aria-controls");
        if (E) {
          const u = E.match(/-panel-(\d+)$/);
          if (u) {
            const x = Number(u[1]);
            m((C) => C.filter((I) => I !== x));
          }
        } else {
          const u = v.closest('[role="menu"]');
          if (u) {
            const C = u.id.match(/-panel-(\d+)$/);
            if (C) {
              const I = Number(C[1]);
              m((D) => D.filter((y) => y !== I)), document.getElementById(`${d}-trigger-${I}`)?.focus();
            }
          }
        }
        w.preventDefault();
        return;
      }
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const E = Array.from(
          w.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((I) => !I.hasAttribute("disabled") && I.getAttribute("aria-disabled") !== "true"), u = E.indexOf(v);
        if (u === -1) return;
        w.preventDefault();
        const x = w.key === "ArrowDown" ? 1 : -1;
        E[(u + x + E.length) % E.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": i,
      className: [
        Ae.root,
        N === "icon" ? Ae.iconOnly : Ae.iconAndText,
        p
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: /* @__PURE__ */ n("div", { className: Ae.list, role: "presentation", children: e.map((w, v) => {
        const E = !!w.children && w.children.length > 0, u = k.includes(v), x = !!w.disabled, C = `${d}-panel-${v}`, I = `${d}-trigger-${v}`;
        return /* @__PURE__ */ S("div", { className: Ae.item, children: [
          /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": E ? u : void 0,
              "aria-controls": E ? C : void 0,
              "aria-disabled": x || void 0,
              disabled: x,
              tabIndex: x ? -1 : 0,
              className: [
                Ae.trigger,
                x ? Ae.disabled : null,
                u ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => f(v, E, w),
              children: [
                w.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: w.icon }) : null,
                N === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: w.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": w.text, children: w.icon ? null : w.text.slice(0, 1) }),
                E && b ? /* @__PURE__ */ n("span", { className: [Ae.caret, u ? Ae.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) }) : null
              ]
            }
          ),
          E && u ? /* @__PURE__ */ n("div", { id: C, role: "menu", className: Ae.submenu, "aria-labelledby": I, children: w.children?.map((z, D) => /* @__PURE__ */ n(
            Dm,
            {
              item: z,
              baseId: d,
              parentKey: `${v}-${D}`,
              onEmit: _
            },
            `${z.text}-${D}`
          )) }) : null
        ] }, `${w.text}-${v}`);
      }) })
    }
  );
}
const Mm = "_root_pjwno_1", zm = "_trigger_pjwno_7", Cm = "_defaultTrigger_pjwno_40", Om = "_avatar_pjwno_46", Em = "_menu_pjwno_58", Im = "_item_pjwno_74", jm = "_disabled_pjwno_88", Am = "_active_pjwno_97", Tm = "_icon_pjwno_107", Rm = "_text_pjwno_114", At = {
  root: Mm,
  trigger: zm,
  defaultTrigger: Cm,
  avatar: Om,
  menu: Em,
  item: Im,
  disabled: jm,
  active: Am,
  icon: Tm,
  text: Rm
};
function Wb({
  items: e,
  trigger: t,
  Template: r,
  onClick: a,
  Click: l,
  ariaLabel: c = "Profile menu",
  className: h
}) {
  const o = Ye(), s = `${o}-menu`, i = le(null), p = le(null), [d, $] = G(!1), [b, N] = G(-1), k = t ?? r, m = e.map((u, x) => u.disabled ? -1 : x).filter((u) => u >= 0), _ = q(
    (u) => {
      if (u.disabled) return;
      const x = { text: u.text, path: u.path };
      (a ?? l)?.(x), $(!1), p.current?.focus();
    },
    [a, l]
  ), f = q(() => {
    N(m[0] ?? -1), $(!0);
  }, [m]), g = q(() => {
    $(!1), N(-1), p.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const u = (x) => {
      i.current && !i.current.contains(x.target) && ($(!1), N(-1));
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [d]), we(() => {
    if (!d) return;
    const u = (x) => {
      x.key === "Escape" && (x.preventDefault(), g());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [d, g]);
  const w = (u) => {
    if (m.length === 0) return;
    const x = m.indexOf(b), C = x === -1 ? 0 : (x + u + m.length) % m.length, I = m[C];
    I != null && N(I);
  }, v = (u) => {
    if (!d) {
      (u.key === "ArrowDown" || u.key === "Enter" || u.key === " ") && (u.preventDefault(), f());
      return;
    }
    switch (u.key) {
      case "Escape":
        u.preventDefault(), g();
        break;
      case "ArrowDown":
        u.preventDefault(), w(1);
        break;
      case "ArrowUp":
        u.preventDefault(), w(-1);
        break;
      case "Home":
        u.preventDefault(), m[0] != null && N(m[0]);
        break;
      case "End":
        u.preventDefault(), m[m.length - 1] != null && N(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        if (u.preventDefault(), b >= 0) {
          const x = e[b];
          x && !x.disabled && _(x);
        }
        break;
      case "Tab":
        $(!1), N(-1);
        break;
    }
  }, E = (u) => {
    switch (u.key) {
      case "ArrowDown":
        u.preventDefault(), w(1);
        break;
      case "ArrowUp":
        u.preventDefault(), w(-1);
        break;
      case "Home":
        u.preventDefault(), m[0] != null && N(m[0]);
        break;
      case "End":
        u.preventDefault(), m[m.length - 1] != null && N(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        if (u.preventDefault(), b >= 0) {
          const x = e[b];
          x && !x.disabled && _(x);
        }
        break;
      case "Escape":
        u.preventDefault(), g();
        break;
      case "Tab":
        $(!1), N(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      className: [At.root, h].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ S("nav", { "aria-label": c, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: p,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": s,
            "aria-label": c,
            className: At.trigger,
            onClick: () => d ? g() : f(),
            onKeyDown: v,
            children: k ?? /* @__PURE__ */ S("span", { className: At.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: At.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        d ? /* @__PURE__ */ n(
          "div",
          {
            id: s,
            role: "menu",
            "aria-label": c,
            "aria-activedescendant": b >= 0 ? `${o}-item-${b}` : void 0,
            className: At.menu,
            onKeyDown: E,
            tabIndex: -1,
            children: e.map((u, x) => {
              const C = !!u.disabled, I = x === b;
              return /* @__PURE__ */ S(
                "div",
                {
                  id: `${o}-item-${x}`,
                  role: "menuitem",
                  "aria-disabled": C || void 0,
                  tabIndex: C ? -1 : 0,
                  className: [At.item, I ? At.active : null, C ? At.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    C || _(u);
                  },
                  onMouseEnter: () => {
                    C || N(x);
                  },
                  children: [
                    u.icon ? /* @__PURE__ */ n("span", { className: At.icon, "aria-hidden": "true", children: u.icon }) : null,
                    /* @__PURE__ */ n("span", { className: At.text, children: u.text })
                  ]
                },
                `${u.text}-${x}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Lm = "_root_5fmpv_1", Pm = "_bottomRight_5fmpv_11", Bm = "_bottomLeft_5fmpv_16", Fm = "_topRight_5fmpv_21", qm = "_topLeft_5fmpv_26", Km = "_menu_5fmpv_31", Hm = "_itemWrapper_5fmpv_48", Um = "_tooltip_5fmpv_54", Wm = "_main_5fmpv_76", Vm = "_mainIcon_5fmpv_104", Xm = "_mainOpen_5fmpv_109", Gm = "_item_5fmpv_48", Ym = "_disabled_5fmpv_141", Zm = "_itemIcon_5fmpv_148", ut = {
  root: Lm,
  bottomRight: Pm,
  bottomLeft: Bm,
  topRight: Fm,
  topLeft: qm,
  menu: Km,
  itemWrapper: Hm,
  tooltip: Um,
  main: Wm,
  mainIcon: Vm,
  mainOpen: Xm,
  item: Gm,
  disabled: Ym,
  itemIcon: Zm
};
function Vb({
  items: e,
  position: t,
  Position: r,
  icon: a = "+",
  onClick: l,
  Click: c,
  ariaLabel: h = "Open menu",
  className: o
}) {
  const s = t ?? r ?? "bottom-right", p = `${Ye()}-menu`, d = le(null), $ = le(null), [b, N] = G(!1), k = q(
    (g) => {
      if (g.disabled) return;
      const w = { text: g.text, value: g.value };
      (l ?? c)?.(w), N(!1), $.current?.focus();
    },
    [l, c]
  );
  we(() => {
    if (!b) return;
    const g = (w) => {
      d.current && !d.current.contains(w.target) && N(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [b]), we(() => {
    if (!b) return;
    const g = (w) => {
      w.key === "Escape" && (N(!1), $.current?.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [b]);
  const m = s === "bottom-right" ? ut.bottomRight : s === "bottom-left" ? ut.bottomLeft : s === "top-right" ? ut.topRight : ut.topLeft, _ = (g) => {
    !b && (g.key === "Enter" || g.key === " " || g.key === "ArrowDown" || g.key === "ArrowUp") ? (g.preventDefault(), N(!0)) : b && g.key === "Escape" && (g.preventDefault(), N(!1));
  }, f = (g) => {
    g.key === "Escape" && (g.preventDefault(), N(!1), $.current?.focus());
  };
  return /* @__PURE__ */ S(
    "div",
    {
      ref: d,
      className: [ut.root, m, o].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        b ? /* @__PURE__ */ n(
          "div",
          {
            id: p,
            role: "menu",
            "aria-label": h,
            className: ut.menu,
            onKeyDown: f,
            children: e.map((g, w) => {
              const v = !!g.disabled;
              return /* @__PURE__ */ S("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: g.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": g.text,
                    "aria-disabled": v || void 0,
                    title: g.text,
                    disabled: v,
                    tabIndex: v ? -1 : 0,
                    className: [ut.item, v ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => k(g),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: g.icon ?? "•" })
                  }
                )
              ] }, `${g.text}-${w}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: $,
            type: "button",
            className: ut.main,
            "aria-haspopup": "menu",
            "aria-expanded": b,
            "aria-controls": p,
            "aria-label": h,
            onClick: () => N((g) => !g),
            onKeyDown: _,
            children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [ut.mainIcon, b ? ut.mainOpen : null].filter(Boolean).join(" "), children: a })
          }
        )
      ]
    }
  );
}
const Jm = "_root_1qf28_1", Qm = "_list_1qf28_5", eg = "_item_1qf28_15", tg = "_link_1qf28_22", ng = "_linkButton_1qf28_23", rg = "_current_1qf28_24", og = "_disabled_1qf28_68", sg = "_icon_1qf28_74", ag = "_text_1qf28_81", lg = "_separator_1qf28_85", Ue = {
  root: Jm,
  list: Qm,
  item: eg,
  link: tg,
  linkButton: ng,
  current: rg,
  disabled: og,
  icon: sg,
  text: ag,
  separator: lg
};
function Xb({ items: e, onClick: t, Click: r, ariaLabel: a = "Breadcrumb", className: l }) {
  const c = t ?? r, h = (o) => {
    o.disabled || c?.({ text: o.text, path: o.path });
  };
  return /* @__PURE__ */ n("nav", { "aria-label": a, className: [Ue.root, l].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((o, s) => {
    const i = s === e.length - 1, p = !!o.disabled;
    return /* @__PURE__ */ S("li", { className: Ue.item, children: [
      i ? p ? /* @__PURE__ */ S(
        "span",
        {
          className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            o.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: o.icon }) : null,
            o.text
          ]
        }
      ) : o.path ? /* @__PURE__ */ S(
        "a",
        {
          href: o.path,
          className: Ue.link,
          "aria-current": "page",
          onClick: (d) => {
            d.preventDefault(), h(o);
          },
          children: [
            o.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: o.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: o.text })
          ]
        }
      ) : /* @__PURE__ */ S(
        "span",
        {
          className: Ue.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            o.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: o.icon }) : null,
            o.text
          ]
        }
      ) : p ? /* @__PURE__ */ S(
        "span",
        {
          className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            o.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: o.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: o.text })
          ]
        }
      ) : o.path ? /* @__PURE__ */ S(
        "a",
        {
          href: o.path,
          className: Ue.link,
          onClick: (d) => {
            d.preventDefault(), h(o);
          },
          children: [
            o.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: o.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: o.text })
          ]
        }
      ) : /* @__PURE__ */ S(
        "button",
        {
          type: "button",
          className: Ue.linkButton,
          tabIndex: 0,
          onClick: () => h(o),
          children: [
            o.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: o.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: o.text })
          ]
        }
      ),
      i ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
    ] }, `${o.text}-${s}`);
  }) }) });
}
const ig = "_root_yiemy_1", cg = "_list_yiemy_5", dg = "_item_yiemy_15", ug = "_connector_yiemy_21", fg = "_connectorCompleted_yiemy_30", _g = "_step_yiemy_34", pg = "_active_yiemy_69", hg = "_completed_yiemy_75", mg = "_circle_yiemy_79", gg = "_check_yiemy_109", yg = "_icon_yiemy_114", bg = "_number_yiemy_119", xg = "_text_yiemy_124", ft = {
  root: ig,
  list: cg,
  item: dg,
  connector: ug,
  connectorCompleted: fg,
  step: _g,
  active: pg,
  completed: hg,
  circle: mg,
  check: gg,
  icon: yg,
  number: bg,
  text: xg
};
function Gb({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: a = 0,
  linear: l,
  Linear: c,
  onChange: h,
  Change: o,
  onSelectedIndexChange: s,
  ariaLabel: i = "Steps",
  className: p
}) {
  const d = l ?? c ?? !1, $ = t ?? r, b = $ !== void 0, [N, k] = G(() => Math.min(Math.max(0, $ ?? a), Math.max(0, e.length - 1))), _ = Math.min(Math.max(0, b ? $ : N), Math.max(0, e.length - 1)), f = le(null), g = q(
    (E) => {
      const u = Math.min(Math.max(0, E), Math.max(0, e.length - 1));
      b || k(u), (h ?? o ?? s)?.(u);
    },
    [b, h, o, s, e.length]
  ), w = q(
    (E, u) => !!(u.disabled || d && E > _ + 1),
    [d, _]
  ), v = (E) => {
    const u = Array.from(
      E.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), x = document.activeElement, C = x ? u.indexOf(x) : -1;
    if (E.key === "ArrowRight" || E.key === "ArrowDown") {
      if (E.preventDefault(), u.length === 0) return;
      const I = C === -1 ? 0 : (C + 1) % u.length, z = u[I];
      z && z.focus();
    } else if (E.key === "ArrowLeft" || E.key === "ArrowUp") {
      if (E.preventDefault(), u.length === 0) return;
      const I = C === -1 ? u.length - 1 : (C - 1 + u.length) % u.length, z = u[I];
      z && z.focus();
    } else E.key === "Home" ? (E.preventDefault(), u[0]?.focus()) : E.key === "End" && (E.preventDefault(), u[u.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": i,
      className: [ft.root, p].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ n("ol", { ref: f, role: "list", className: ft.list, children: e.map((E, u) => {
        const x = u === _, C = u < _, I = w(u, E);
        return /* @__PURE__ */ S("li", { role: "listitem", className: ft.item, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: [ft.connector, C ? ft.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              "data-step": u,
              "aria-current": x ? "step" : void 0,
              "aria-disabled": I ? "true" : void 0,
              disabled: I,
              tabIndex: I ? -1 : 0,
              className: [
                ft.step,
                x ? ft.active : null,
                C ? ft.completed : null,
                I ? ft.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                I || g(u);
              },
              children: [
                /* @__PURE__ */ n("span", { className: ft.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ n("span", { className: ft.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "check", size: "sm" }) }) : E.icon ? /* @__PURE__ */ n("span", { className: ft.icon, children: E.icon }) : /* @__PURE__ */ n("span", { className: ft.number, children: u + 1 }) }),
                /* @__PURE__ */ n("span", { className: ft.text, children: E.text })
              ]
            }
          )
        ] }, `${E.text}-${u}`);
      }) })
    }
  );
}
const vg = "_root_1fegn_1", kg = "_horizontal_1fegn_13", wg = "_vertical_1fegn_17", $g = "_pane_1fegn_21", Ng = "_handle_1fegn_31", Sg = "_handleHorizontal_1fegn_51", Dg = "_handleVertical_1fegn_57", Mg = "_handleGrip_1fegn_63", zg = "_handleCollapseHint_1fegn_75", Cg = "_collapseBtn_1fegn_79", Og = "_collapseBtnCollapsed_1fegn_109", $t = {
  root: vg,
  horizontal: kg,
  vertical: wg,
  pane: $g,
  handle: Ng,
  handleHorizontal: Sg,
  handleVertical: Dg,
  handleGrip: Mg,
  handleCollapseHint: zg,
  collapseBtn: Cg,
  collapseBtnCollapsed: Og
};
function On(e, t) {
  if (!e) return t;
  const r = e.trim();
  if (r.endsWith("%")) {
    const l = parseFloat(r.slice(0, -1));
    return Number.isNaN(l) ? t : l;
  }
  if (r.endsWith("px")) {
    const l = parseFloat(r.slice(0, -2));
    return Number.isNaN(l) ? t : l;
  }
  const a = parseFloat(r);
  return Number.isNaN(a) ? t : a;
}
function qt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Yb({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: a,
  Resize: l,
  onCollapse: c,
  Collapse: h,
  ariaLabel: o = "Splitter",
  className: s
}) {
  const i = e ?? t ?? "horizontal", p = i === "horizontal", d = le(null), $ = q(() => {
    const y = r.length;
    if (y === 0) return [];
    const O = r.map((j) => j.size ? On(j.size, 100 / y) : 100 / y), L = O.reduce((j, R) => j + R, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? O.map((j) => j / L * 100) : O;
  }, [r]), [b, N] = G(() => $()), [k, m] = G(() => r.map((y) => !!y.collapsed)), _ = le(b);
  we(() => {
    m(r.map((y) => !!y.collapsed));
  }, [r]);
  const f = q(() => r.map((y) => On(y.min, 0)), [r]), g = q(() => r.map((y) => On(y.max, 100)), [r]), w = q(
    (y, O) => {
      const L = { paneIndex: y, newSize: O, cancel: !1 };
      return (a ?? l)?.(L), !L.cancel;
    },
    [a, l]
  ), v = q(
    (y, O) => {
      const L = { paneIndex: y, collapse: O, cancel: !1 };
      return (c ?? h)?.(L), !L.cancel;
    },
    [c, h]
  ), E = q(
    (y) => {
      const O = !k[y];
      v(y, O) && (O ? (_.current = [...b], m((L) => {
        const j = [...L];
        return j[y] !== void 0 && (j[y] = !0), j;
      }), N((L) => {
        const j = [...L], R = j[y] ?? 0, H = y < j.length - 1 ? y + 1 : y - 1;
        if (H >= 0 && H < j.length) {
          const V = j[H] ?? 0;
          j[H] = V + R, j[y] = 0;
        } else
          j[y] = 0;
        return j;
      })) : (m((L) => {
        const j = [...L];
        return j[y] !== void 0 && (j[y] = !1), j;
      }), N(() => {
        const L = [..._.current];
        return L.length !== r.length ? r.map(() => 100 / r.length) : L;
      })));
    },
    [k, b, r.length, v]
  ), u = le(null), x = q(
    (y, O, L) => {
      const j = d.current;
      if (!j) return null;
      const R = j.getBoundingClientRect();
      let H;
      if (p) {
        if (R.width === 0) return null;
        H = (O - R.left) / R.width * 100;
      } else {
        if (R.height === 0) return null;
        H = (L - R.top) / R.height * 100;
      }
      let V = 0;
      for (let ee = 0; ee < y; ee++) {
        const te = b[ee];
        te !== void 0 && (V += te);
      }
      return H - V;
    },
    [p, b]
  ), C = (y, O) => {
    O.preventDefault();
    const L = O.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(O.pointerId), u.current = { handleIndex: y, pointerId: O.pointerId };
  }, I = (y) => {
    if (!u.current || u.current.pointerId !== y.pointerId) return;
    y.preventDefault();
    const O = u.current.handleIndex, L = x(O, y.clientX, y.clientY);
    if (L == null) return;
    const j = f(), R = g(), H = j[O] ?? 0, V = R[O] ?? 100, Y = O + 1, ee = j[Y] ?? 0, te = R[Y] ?? 100, ue = b[O] ?? 0, U = b[Y] ?? 0, X = ue + U;
    if (X <= 0) return;
    let P = qt(L, H, V), se = X - P;
    if (se < ee) {
      if (se = ee, P = X - se, P < H || P > V) return;
    } else if (se > te && (se = te, P = X - se, P < H || P > V))
      return;
    P = qt(P, H, V), se = X - P, w(O, P) && N((J) => {
      const ce = [...J];
      return ce[O] = P, ce[Y] = se, ce;
    });
  }, z = (y) => {
    !u.current || u.current.pointerId !== y.pointerId || (u.current = null);
  }, D = (y, O) => {
    const L = f(), j = g(), R = y, H = y + 1, V = b[R] ?? 0, Y = b[H] ?? 0, ee = V + Y;
    let te = 0;
    const ue = !!r[R]?.collapsible, U = !!r[H]?.collapsible;
    if (p ? O.key === "ArrowLeft" ? te = -5 : O.key === "ArrowRight" && (te = 5) : O.key === "ArrowUp" ? te = -5 : O.key === "ArrowDown" && (te = 5), O.key === "Home") {
      O.preventDefault();
      let X = L[R] ?? 0, P = ee - X;
      if (P = qt(P, L[H] ?? 0, j[H] ?? 100), X = ee - P, X = qt(X, L[R] ?? 0, j[R] ?? 100), !w(R, X)) return;
      N((se) => {
        const J = [...se];
        return J[R] = X, J[H] = P, J;
      });
      return;
    }
    if (O.key === "End") {
      O.preventDefault();
      let X = j[R] ?? 100;
      X = Math.min(X, ee - (L[H] ?? 0));
      let P = ee - X;
      if (P = qt(P, L[H] ?? 0, j[H] ?? 100), X = ee - P, X = qt(X, L[R] ?? 0, j[R] ?? 100), !w(R, X)) return;
      N((se) => {
        const J = [...se];
        return J[R] = X, J[H] = P, J;
      });
      return;
    }
    if ((O.key === "Enter" || O.key === " ") && (ue || U)) {
      O.preventDefault(), E(ue ? R : H);
      return;
    }
    if (te !== 0) {
      O.preventDefault();
      let X = V + te, P = ee - X;
      const se = L[R] ?? 0, J = j[R] ?? 100, ce = L[H] ?? 0, ae = j[H] ?? 100;
      if (X = qt(X, se, J), P = ee - X, (P < ce || P > ae) && (P = qt(P, ce, ae), X = ee - P, X = qt(X, se, J), P = ee - X), !w(R, X)) return;
      N((be) => {
        const ke = [...be];
        return ke[R] = X, ke[H] = P, ke;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [$t.root, p ? $t.horizontal : $t.vertical, s].filter(Boolean).join(" "),
      "aria-label": o,
      children: r.map((y, O) => {
        const L = !!k[O], j = L ? 0 : b[O] ?? 100 / r.length, R = L ? { display: "none" } : p ? { flexBasis: `${j}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${j}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, H = On(y.min, 0), V = On(y.max, 100), Y = O < r.length - 1, ee = !!r[O + 1]?.collapsible;
        return /* @__PURE__ */ S("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ S(
            "div",
            {
              role: "group",
              "aria-label": y.label ?? `Pane ${O + 1}`,
              className: $t.pane,
              style: R,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : y.children,
                y.collapsible && !L ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${O + 1}`,
                    "aria-expanded": !L,
                    onClick: () => E(O),
                    children: p ? "◀" : "▲"
                  }
                ) : null,
                y.collapsible && L ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${O + 1}`,
                    "aria-expanded": !L,
                    onClick: () => E(O),
                    children: p ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && y.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: $t.collapseBtnCollapsed,
                "aria-label": `Expand pane ${O + 1}`,
                "aria-expanded": "false",
                onClick: () => E(O),
                children: p ? "▶" : "▼"
              }
            )
          ) : null,
          Y ? /* @__PURE__ */ S(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": H,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${O + 1}`,
              tabIndex: L || k[O + 1] ? -1 : 0,
              className: [$t.handle, p ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (te) => C(O, te),
              onPointerMove: I,
              onPointerUp: z,
              onKeyDown: (te) => D(O, te),
              children: [
                /* @__PURE__ */ n("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (y.collapsible || ee) && /* @__PURE__ */ n("span", { className: $t.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, O);
      })
    }
  );
}
const Eg = "_root_h36xh_1", Ig = "_list_h36xh_5", jg = "_vertical_h36xh_14", Ag = "_horizontal_h36xh_20", Tg = "_item_h36xh_28", Rg = "_link_h36xh_32", Lg = "_active_h36xh_57", hn = {
  root: Eg,
  list: Ig,
  vertical: jg,
  horizontal: Ag,
  item: Tg,
  link: Rg,
  active: Lg
};
function Zb({
  items: e,
  selector: t,
  Selector: r,
  orientation: a,
  Orientation: l,
  onClick: c,
  Click: h,
  ariaLabel: o = "Table of contents",
  className: s
}) {
  const i = t ?? r, p = a ?? l ?? "vertical", [d, $] = G(() => e[0]?.selector ?? null), b = le(d);
  b.current = d;
  const N = q(
    (k, m) => {
      if ($(k.selector), (c ?? h)?.({ text: k.text, selector: k.selector }), m) {
        try {
          m.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          m.scrollIntoView();
        }
        const f = m;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, h]
  );
  return we(() => {
    if (e.length === 0) return;
    const m = (() => {
      if (i) {
        const v = document.querySelector(i);
        if (v) return v;
      }
      return window;
    })();
    let _ = null;
    const f = /* @__PURE__ */ new Map(), g = () => {
      let v = null, E = null;
      for (const x of e) {
        const C = document.querySelector(x.selector);
        if (!C) continue;
        f.set(x.selector, C);
        const I = C.getBoundingClientRect();
        let z = I.top;
        if (m !== window) {
          const D = m.getBoundingClientRect();
          z = I.top - D.top;
        }
        z <= 80 ? (!E || z > E.el.getBoundingClientRect().top - (m !== window ? m.getBoundingClientRect().top : 0)) && (E = { sel: x.selector, el: C }) : (!v || z < v.top) && (v = { sel: x.selector, top: z });
      }
      const u = E?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      u && u !== b.current && $(u);
    }, w = () => {
      g();
    };
    if (typeof IntersectionObserver < "u") {
      const v = m === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: m, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      _ = new IntersectionObserver((E) => {
        const u = E.filter((x) => x.isIntersecting).sort((x, C) => x.boundingClientRect.top - C.boundingClientRect.top);
        if (u[0]) {
          const x = u[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === x) {
              $(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && x.id === C.selector.slice(1)) {
              $(C.selector);
              break;
            }
          }
        } else
          g();
      }, v);
      for (const E of e) {
        const u = document.querySelector(E.selector);
        u && (_.observe(u), f.set(E.selector, u));
      }
    }
    return m === window ? (window.addEventListener("scroll", w, { passive: !0 }), g(), () => {
      window.removeEventListener("scroll", w), _?.disconnect();
    }) : (m.addEventListener("scroll", w, { passive: !0 }), g(), () => {
      m.removeEventListener("scroll", w), _?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ n("nav", { "aria-label": o, className: [hn.root, hn[p], s].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: hn.list, children: e.map((k) => {
    const m = k.selector === d;
    return /* @__PURE__ */ n("li", { className: hn.item, children: /* @__PURE__ */ n(
      "a",
      {
        href: k.selector.startsWith("#") || k.selector.startsWith(".") ? k.selector : `#${k.selector}`,
        className: [hn.link, m ? hn.active : null].filter(Boolean).join(" "),
        "aria-current": m ? "location" : void 0,
        onClick: (_) => {
          _.preventDefault();
          const f = document.querySelector(k.selector);
          N(k, f);
        },
        children: k.text
      }
    ) }, `${k.text}-${k.selector}`);
  }) }) });
}
const Pg = "_root_c923v_1", Bg = "_viewport_c923v_17", Fg = "_slide_c923v_24", qg = "_active_c923v_33", Kg = "_arrow_c923v_37", Hg = "_prev_c923v_71", Ug = "_next_c923v_75", Wg = "_pauseBtn_c923v_79", Vg = "_indicators_c923v_110", Xg = "_indicator_c923v_110", Gg = "_indicatorActive_c923v_145", Nt = {
  root: Pg,
  viewport: Bg,
  slide: Fg,
  active: qg,
  arrow: Kg,
  prev: Hg,
  next: Ug,
  pauseBtn: Wg,
  indicators: Vg,
  indicator: Xg,
  indicatorActive: Gg
};
function Jb({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: a = 0,
  auto: l,
  Auto: c,
  interval: h,
  Interval: o,
  pauseOnHover: s,
  PauseOnHover: i,
  showArrows: p,
  ShowArrows: d,
  showIndicators: $,
  ShowIndicators: b,
  onChange: N,
  Change: k,
  ariaLabel: m = "Carousel",
  className: _
}) {
  const f = t ?? r, g = f !== void 0, [w, v] = G(() => Math.min(Math.max(0, f ?? a), Math.max(0, e.length - 1))), E = g ? f : w, u = e.length === 0 ? 0 : Math.min(Math.max(0, E), e.length - 1), x = l ?? c ?? !1, C = h ?? o ?? 3e3, I = s ?? i ?? !0, z = p ?? d ?? !0, D = $ ?? b ?? !0, [y, O] = G(!1), [L, j] = G(!1), R = y || L, H = le(null), V = Ye(), Y = q(
    (ce) => {
      const ae = e.length === 0 ? 0 : (ce % e.length + e.length) % e.length;
      g || v(ae), (N ?? k)?.(ae);
    },
    [g, N, k, e.length]
  ), ee = q(() => {
    Y(u - 1);
  }, [Y, u]), te = q(() => {
    Y(u + 1);
  }, [Y, u]), ue = q(
    (ce) => {
      Y(ce);
    },
    [Y]
  );
  we(() => {
    if (!x || R || e.length <= 1) return;
    const ce = setInterval(() => {
      Y(u + 1);
    }, C);
    return () => clearInterval(ce);
  }, [x, R, C, u, Y, e.length]);
  const U = (ce) => {
    e.length !== 0 && (ce.key === "ArrowLeft" ? (ce.preventDefault(), ee()) : ce.key === "ArrowRight" ? (ce.preventDefault(), te()) : ce.key === "Home" ? (ce.preventDefault(), ue(0)) : ce.key === "End" && (ce.preventDefault(), ue(e.length - 1)));
  }, X = () => {
    I && x && j(!0);
  }, P = () => {
    I && x && j(!1);
  }, se = () => {
    I && x && j(!0);
  }, J = () => {
    I && x && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ S(
    "div",
    {
      ref: H,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": m,
      tabIndex: 0,
      className: [Nt.root, _].filter(Boolean).join(" "),
      onKeyDown: U,
      onMouseEnter: X,
      onMouseLeave: P,
      onFocusCapture: se,
      onBlurCapture: J,
      children: [
        /* @__PURE__ */ n("div", { id: V, className: Nt.viewport, children: e.map((ce, ae) => {
          const be = ae === u;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ae + 1} of ${e.length}`,
              "aria-hidden": be ? void 0 : !0,
              hidden: !be,
              className: [Nt.slide, be ? Nt.active : null].filter(Boolean).join(" "),
              children: ce
            },
            ae
          );
        }) }),
        z && e.length > 1 ? /* @__PURE__ */ S(Ee, { children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Nt.arrow, Nt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": V,
              onClick: ee,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Nt.arrow, Nt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": V,
              onClick: te,
              children: "›"
            }
          )
        ] }) : null,
        x ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": y ? "Resume" : "Pause",
            "aria-pressed": y,
            onClick: () => O((ce) => !ce),
            children: y ? "▶" : "⏸"
          }
        ) : null,
        D && e.length > 1 ? /* @__PURE__ */ n("div", { className: Nt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ce, ae) => {
          const be = ae === u;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Nt.indicator, be ? Nt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${ae + 1}`,
              "aria-current": be ? "true" : void 0,
              "aria-controls": V,
              onClick: () => ue(ae)
            },
            ae
          );
        }) }) : null
      ]
    }
  );
}
const Yg = "_root_1ej0p_1", Zg = "_group_1ej0p_20", Jg = "_itemWrapper_1ej0p_30", Qg = "_treeitem_1ej0p_34", e0 = "_disabled_1ej0p_50", t0 = "_selected_1ej0p_60", n0 = "_caret_1ej0p_66", r0 = "_caretIcon_1ej0p_113", o0 = "_caretOpen_1ej0p_120", s0 = "_caretPlaceholder_1ej0p_124", a0 = "_label_1ej0p_130", l0 = "_loading_1ej0p_137", i0 = "_loadingRow_1ej0p_143", c0 = "_empty_1ej0p_149", d0 = "_checkbox_1ej0p_155", rt = {
  root: Yg,
  group: Zg,
  itemWrapper: Jg,
  treeitem: Qg,
  disabled: e0,
  selected: t0,
  caret: n0,
  caretIcon: r0,
  caretOpen: o0,
  caretPlaceholder: s0,
  label: a0,
  loading: l0,
  loadingRow: i0,
  empty: c0,
  checkbox: d0
};
function u0({
  indeterminate: e,
  ...t
}) {
  const r = le(null);
  return we(() => {
    r.current && (r.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: r, type: "checkbox", ...t });
}
function Qb({
  data: e,
  Data: t,
  children: r,
  Children: a,
  textProperty: l,
  TextProperty: c,
  keyProperty: h,
  KeyProperty: o,
  selectionMode: s,
  SelectionMode: i,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: $,
  SelectedItems: b,
  defaultSelectedItem: N,
  defaultSelectedItems: k,
  onChange: m,
  Change: _,
  onExpand: f,
  Expand: g,
  onCollapse: w,
  Collapse: v,
  loadChildData: E,
  LoadChildData: u,
  template: x,
  Template: C,
  itemTemplate: I,
  ItemTemplate: z,
  ariaLabel: D,
  AriaLabel: y,
  allowCheckBoxes: O = !1,
  checkedKeys: L,
  defaultCheckedKeys: j,
  onCheckedChange: R,
  allowCheckChildren: H = !0,
  className: V
}) {
  const Y = e ?? t ?? [], ee = r ?? a, te = l ?? c ?? "text", ue = h ?? o ?? "id", U = s ?? i ?? "single", X = D ?? y ?? "Tree", P = E ?? u, se = x ?? C ?? I ?? z, J = q(
    (B) => {
      const Z = B[ue];
      return Z != null ? String(Z) : String(B.id ?? "");
    },
    [ue]
  ), ce = q(
    (B) => {
      const Z = B[te];
      if (Z != null) return String(Z);
      const oe = B.text;
      return oe != null ? String(oe) : "";
    },
    [te]
  ), ae = q(
    (B) => {
      if (ee) {
        const oe = ee(B);
        if (oe !== void 0) return oe;
      }
      const Z = B.children;
      if (Array.isArray(Z)) return Z;
    },
    [ee]
  ), be = q(
    (B) => {
      const Z = /* @__PURE__ */ new Set(), oe = (pe) => {
        for (const _e of pe) {
          const xe = J(_e);
          _e.expanded && Z.add(xe);
          const Te = ae(_e);
          Te && Te.length > 0 && oe(Te);
        }
      };
      return oe(B), Z;
    },
    [J, ae]
  ), [ke, Be] = G(() => be(Y)), [ve, We] = G(() => /* @__PURE__ */ new Map()), [ye, Ze] = G(() => /* @__PURE__ */ new Set()), Ve = p ?? d, Le = $ ?? b, et = U === "multiple" ? Le !== void 0 : Ve !== void 0, W = q(() => {
    if (U === "multiple") {
      if (k && k.length > 0)
        return new Set(k.map((oe) => J(oe)));
      const B = /* @__PURE__ */ new Set(), Z = (oe) => {
        for (const pe of oe) {
          pe.selected && B.add(J(pe));
          const _e = ae(pe);
          _e && Z(_e);
        }
      };
      return Z(Y), B;
    } else {
      if (N) return /* @__PURE__ */ new Set([J(N)]);
      let B = null;
      const Z = (oe) => {
        for (const pe of oe) {
          if (pe.selected)
            return B = J(pe), !0;
          const _e = ae(pe);
          if (_e && Z(_e)) return !0;
        }
        return !1;
      };
      return Z(Y), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [U, N, k, J, ae, Y]), [M, F] = G(() => W()), ne = $e(() => {
    if (U === "multiple") {
      if (Le !== void 0) {
        const B = Le;
        return B ? new Set(B.map((Z) => J(Z))) : /* @__PURE__ */ new Set();
      }
      return M;
    } else {
      if (Ve !== void 0) {
        const B = Ve;
        return B ? /* @__PURE__ */ new Set([J(B)]) : /* @__PURE__ */ new Set();
      }
      return M;
    }
  }, [U, Le, Ve, M, J]), fe = q(
    (B) => {
      let Z;
      const oe = (pe) => {
        for (const _e of pe) {
          if (J(_e) === B)
            return Z = _e, !0;
          const Te = ve.get(J(_e)) ?? ae(_e);
          if (Te && oe(Te)) return !0;
        }
        return !1;
      };
      if (oe(Y), !Z) {
        for (const pe of ve.values())
          if (oe(pe)) break;
      }
      return Z;
    },
    [Y, ve, J, ae]
  ), re = q(() => {
    const B = /* @__PURE__ */ new Map(), Z = (oe) => {
      for (const pe of oe) {
        const _e = J(pe);
        B.set(_e, pe);
        const Te = ve.get(_e) ?? ae(pe);
        Te && Z(Te);
      }
    };
    return Z(Y), B;
  }, [Y, ve, J, ae]), me = q(
    (B) => {
      const Z = J(B);
      if (!B.disabled)
        if (U === "multiple") {
          const pe = new Set(ne);
          pe.has(Z) ? pe.delete(Z) : pe.add(Z), et || F(pe);
          const _e = m ?? _;
          if (_e) {
            const xe = re(), Te = [];
            for (const A of pe) {
              const T = xe.get(A) ?? fe(A);
              T && Te.push(T);
            }
            _e({ item: B, selectedItems: Te });
          }
        } else if (!ne.has(Z) || ne.size !== 1 || !ne.has(Z)) {
          et || F(/* @__PURE__ */ new Set([Z]));
          const _e = m ?? _;
          _e && _e({ item: B, selectedItem: B });
        } else {
          const _e = m ?? _;
          _e && _e({ item: B, selectedItem: B });
        }
    },
    [J, U, ne, et, m, _, re, fe]
  ), Ne = q(
    async (B) => {
      const Z = J(B);
      if (!!B.disabled) return;
      const pe = ke.has(Z), _e = f ?? g, xe = w ?? v, Te = ae(B), T = ve.get(Z) ?? Te, he = !(T !== void 0 && T.length > 0) && P != null;
      if (pe) {
        Be((Ie) => {
          const je = new Set(Ie);
          return je.delete(Z), je;
        }), xe?.({ item: B });
        return;
      }
      if (he) {
        if (ye.has(Z)) return;
        Ze((Ie) => {
          const je = new Set(Ie);
          return je.add(Z), je;
        });
        try {
          const je = await P(B);
          We((ze) => {
            const at = new Map(ze);
            return at.set(Z, je), at;
          }), Be((ze) => {
            const at = new Set(ze);
            return at.add(Z), at;
          }), _e?.({ item: B });
        } catch {
        } finally {
          Ze((Ie) => {
            const je = new Set(Ie);
            return je.delete(Z), je;
          });
        }
        return;
      }
      Be((Ie) => {
        const je = new Set(Ie);
        return je.add(Z), je;
      }), _e?.({ item: B });
    },
    [J, ke, ae, ve, P, ye, f, g, w, v]
  ), Fe = $e(() => {
    const B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), pe = (_e, xe) => {
      for (const Te of _e) {
        const A = J(Te);
        B.has(A) || B.set(A, []), Z.set(A, xe), Te.disabled && oe.add(A);
        const ie = ve.get(A) ?? ae(Te);
        ie && ie.length > 0 && (B.set(A, ie.map((he) => J(he))), pe(ie, A));
      }
    };
    return pe(Y, null), { childrenOf: B, parentOf: Z, disabledKeys: oe };
  }, [Y, ve, J, ae]), Je = q(
    (B) => {
      const Z = [], oe = [...Fe.childrenOf.get(B) ?? []];
      for (; oe.length > 0; ) {
        const pe = oe.pop();
        Z.push(pe), oe.push(...Fe.childrenOf.get(pe) ?? []);
      }
      return Z;
    },
    [Fe]
  ), [dt, xt] = G(
    () => new Set(j ?? [])
  ), Q = L !== void 0 ? new Set(L) : dt, De = q(
    (B) => {
      const Z = Fe.disabledKeys;
      return Je(B).filter((oe) => !Z.has(oe));
    },
    [Je, Fe]
  ), nt = q(
    (B) => {
      if (Q.has(B)) return !0;
      if (!O || !H) return !1;
      const Z = De(B);
      return Z.length > 0 && Z.every((oe) => Q.has(oe));
    },
    [Q, O, H, De]
  ), Ut = q(
    (B) => {
      if (!O || !H || Q.has(B)) return !1;
      const Z = De(B);
      if (Z.length === 0) return !1;
      const oe = Z.filter((pe) => Q.has(pe)).length;
      return oe > 0 && oe < Z.length;
    },
    [Q, O, H, De]
  ), St = q(
    (B) => {
      if (!O || B.disabled) return;
      const Z = J(B), oe = new Set(Q);
      if (oe.has(Z) || nt(Z)) {
        if (oe.delete(Z), H)
          for (const pe of De(Z)) oe.delete(pe);
      } else if (oe.add(Z), H)
        for (const pe of De(Z)) oe.add(pe);
      L === void 0 && xt(oe), R?.([...oe]);
    },
    [
      O,
      H,
      L,
      Q,
      De,
      J,
      nt,
      R
    ]
  ), Me = $e(() => {
    const B = [], Z = (oe, pe, _e) => {
      oe.forEach((xe, Te) => {
        const A = J(xe), T = ce(xe), ie = ve.get(A) ?? ae(xe);
        let he;
        ve.has(A) ? he = ve.get(A).length > 0 : ie !== void 0 ? he = ie.length > 0 : P ? he = !0 : he = !1;
        const Ie = ke.has(A), je = !!xe.disabled, ze = oe.length, at = Te + 1;
        if (B.push({
          item: xe,
          key: A,
          text: T,
          level: pe,
          posInSet: at,
          setSize: ze,
          hasChildren: he,
          expanded: Ie,
          parentKey: _e,
          disabled: je
        }), he && Ie) {
          const Mt = ve.get(A) ?? ie;
          Mt && Mt.length > 0 && Z(Mt, pe + 1, A);
        }
      });
    };
    return Z(Y, 1, null), B;
  }, [Y, J, ce, ae, ve, ke, P, ye]), [Xe, vt] = G(() => Me[0]?.key ?? null), Rt = le(""), Zt = le(null), K = le(null);
  we(() => {
    if (!Xe && Me.length > 0) {
      const B = Me[0];
      B && vt(B.key);
    } else if (Xe && !Me.some((B) => B.key === Xe)) {
      const B = Me[0];
      vt(B ? B.key : null);
    }
  }, [Me, Xe]), we(() => {
    if (Xe) {
      const B = K.current?.querySelector(`[data-key="${CSS.escape(Xe)}"]`);
      let Z = null;
      B || (Z = K.current?.querySelector(`[data-key="${Xe}"]`) ?? null);
      const oe = B ?? Z;
      oe && document.activeElement !== oe && K.current?.contains(document.activeElement) && oe.focus();
    }
  }, [Xe]);
  const de = q(
    (B) => {
      vt(B), requestAnimationFrame(() => {
        const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
        let oe = K.current?.querySelector(`[data-key="${Z}"]`);
        oe || (oe = K.current?.querySelector(`[data-key="${B}"]`) ?? null), oe?.focus();
      });
    },
    []
  ), Pe = q(
    (B) => Me.find((oe) => oe.key === B)?.parentKey ?? null,
    [Me]
  ), Ke = q(
    (B) => {
      if (Me.length === 0) return;
      const Z = Xe ? Me.findIndex((_e) => _e.key === Xe) : -1, oe = Z >= 0 ? Me[Z] : void 0;
      let pe = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), Z === -1)
          pe = Me[0]?.key ?? null;
        else {
          const _e = (Z + 1) % Me.length, xe = Me[_e];
          xe && (pe = xe.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), Z === -1) {
          const _e = Me[Me.length - 1];
          _e && (pe = _e.key);
        } else {
          const _e = (Z - 1 + Me.length) % Me.length, xe = Me[_e];
          xe && (pe = xe.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !oe) return;
        if (oe.hasChildren && !oe.expanded)
          Ne(oe.item);
        else if (oe.hasChildren && oe.expanded) {
          const _e = Z + 1, xe = Me[_e];
          xe && xe.parentKey === oe.key && de(xe.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !oe) return;
        if (oe.hasChildren && oe.expanded)
          Ne(oe.item);
        else {
          const _e = Pe(oe.key);
          _e && de(_e);
        }
        return;
      }
      if (B.key === "Home") {
        B.preventDefault();
        const _e = Me[0];
        _e && de(_e.key);
        return;
      }
      if (B.key === "End") {
        B.preventDefault();
        const _e = Me[Me.length - 1];
        _e && de(_e.key);
        return;
      }
      if (B.key === "Enter" || B.key === " ") {
        if (B.preventDefault(), !oe || B.key === " " && B.target?.tagName === "INPUT") return;
        if (B.key === " " && O) {
          const _e = fe(oe.key);
          _e && St(_e);
          return;
        }
        me(oe.item);
        return;
      }
      if (B.key.length === 1 && /^[a-zA-Z0-9]$/.test(B.key)) {
        B.preventDefault();
        const _e = (Rt.current + B.key).toLowerCase();
        Rt.current = _e, Zt.current && clearTimeout(Zt.current), Zt.current = setTimeout(() => {
          Rt.current = "";
        }, 500);
        const xe = Z >= 0 ? Z + 1 : 0, T = [...Me, ...Me].slice(xe, xe + Me.length).find((ie) => ie.text.toLowerCase().startsWith(_e));
        T && de(T.key);
        return;
      }
    },
    [Me, Xe, de, Ne, me, Pe, O, St]
  ), Lt = q(() => {
    if (!Xe && Me.length > 0) {
      const B = Me[0];
      B && vt(B.key);
    }
  }, [Xe, Me]), Dt = (B, Z, oe) => /* @__PURE__ */ n("ul", { role: "group", className: rt.group, children: B.map((pe, _e) => {
    const xe = J(pe), Te = ce(pe), A = ve.get(xe) ?? ae(pe);
    let T;
    ve.has(xe) ? T = ve.get(xe).length > 0 : A !== void 0 ? T = A.length > 0 : P ? T = !0 : T = !1;
    const ie = ke.has(xe), he = ne.has(xe), Ie = !!pe.disabled, je = ye.has(xe), ze = Xe === xe, at = B.length, Mt = _e + 1, Zr = se ? se(pe) : Te, ur = O ? {
      checked: nt(xe),
      indeterminate: Ut(xe)
    } : null;
    return /* @__PURE__ */ S("li", { role: "none", className: rt.itemWrapper, children: [
      /* @__PURE__ */ S(
        "div",
        {
          role: "treeitem",
          "data-key": xe,
          tabIndex: ze ? 0 : -1,
          "aria-expanded": T ? ie : void 0,
          "aria-selected": he,
          "aria-level": Z,
          "aria-setsize": at,
          "aria-posinset": Mt,
          "aria-disabled": Ie || void 0,
          "aria-busy": je || void 0,
          className: [
            rt.treeitem,
            he ? rt.selected : null,
            Ie ? rt.disabled : null,
            ze ? rt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            de(xe), Ie || me(pe);
          },
          onFocus: () => vt(xe),
          children: [
            O ? /* @__PURE__ */ n(
              u0,
              {
                className: rt.checkbox,
                checked: ur?.checked ?? !1,
                indeterminate: ur?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${Te}`,
                onClick: (Rn) => Rn.stopPropagation(),
                onChange: () => St(pe)
              }
            ) : null,
            T ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: rt.caret,
                "aria-label": `${ie ? "Collapse" : "Expand"} ${Te}`,
                "aria-expanded": ie,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Rn) => {
                  Rn.stopPropagation(), de(xe), Ne(pe);
                },
                children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [rt.caretIcon, ie ? rt.caretOpen : null].filter(Boolean).join(" "), children: /* @__PURE__ */ n(Ce, { name: "chevron-right", size: 10 }) })
              }
            ) : /* @__PURE__ */ n("span", { className: rt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ n("span", { className: rt.label, children: Zr }),
            je ? /* @__PURE__ */ n("span", { className: rt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      T && ie ? je ? /* @__PURE__ */ n("div", { className: rt.loadingRow, "aria-busy": "true", children: "Loading…" }) : A && A.length > 0 ? Dt(A, Z + 1) : ve.has(xe) && ve.get(xe).length > 0 ? Dt(ve.get(xe), Z + 1) : (A && A.length === 0, null) : null
    ] }, xe);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: K,
      role: "tree",
      "aria-label": X,
      "aria-multiselectable": U === "multiple" || void 0,
      tabIndex: 0,
      className: [rt.root, V].filter(Boolean).join(" "),
      onKeyDown: Ke,
      onFocus: Lt,
      children: Y.length === 0 ? /* @__PURE__ */ n("div", { className: rt.empty, children: "No items" }) : Dt(Y, 1)
    }
  );
}
const f0 = "_root_u0yr1_1", _0 = "_panel_u0yr1_8", p0 = "_header_u0yr1_19", h0 = "_listbox_u0yr1_28", m0 = "_option_u0yr1_42", g0 = "_disabled_u0yr1_57", y0 = "_active_u0yr1_66", b0 = "_selected_u0yr1_70", x0 = "_empty_u0yr1_86", v0 = "_controls_u0yr1_93", k0 = "_reorder_u0yr1_102", w0 = "_btn_u0yr1_110", Re = {
  root: f0,
  panel: _0,
  header: p0,
  listbox: h0,
  option: m0,
  disabled: g0,
  active: y0,
  selected: b0,
  empty: x0,
  controls: v0,
  reorder: k0,
  btn: w0
};
function ot(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function Un(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function e2({
  source: e,
  Source: t,
  target: r,
  Target: a,
  value: l,
  Value: c,
  targetValue: h,
  TargetValue: o,
  data: s,
  Data: i,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: $,
  TargetChange: b,
  keyProperty: N,
  KeyProperty: k,
  onMove: m,
  Move: _,
  ariaLabel: f,
  AriaLabel: g,
  className: w
}) {
  const v = N ?? k ?? "id", E = f ?? g ?? "PickList", u = e ?? t ?? l ?? c ?? s ?? i ?? [], x = r ?? a ?? h ?? o ?? [], [C, I] = G(() => [...u]), [z, D] = G(() => [...x]);
  we(() => {
    const M = e ?? t ?? l ?? c ?? s ?? i;
    M !== void 0 && I([...M]);
  }, [e, t, l, c, s, i]), we(() => {
    const M = r ?? a ?? h ?? o;
    M !== void 0 && D([...M]);
  }, [r, a, h, o]);
  const [y, O] = G(() => /* @__PURE__ */ new Set()), [L, j] = G(() => /* @__PURE__ */ new Set()), [R, H] = G(() => {
    const M = u.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), [V, Y] = G(() => {
    const M = x.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), ee = $e(() => C.map((M, F) => M.disabled ? -1 : F).filter((M) => M >= 0), [C]), te = $e(() => z.map((M, F) => M.disabled ? -1 : F).filter((M) => M >= 0), [z]);
  we(() => {
    if (R >= C.length) {
      const M = ee[ee.length - 1];
      H(M ?? 0);
    } else if (C.length > 0 && ee.length > 0 && !ee.includes(R)) {
      const M = ee[0];
      M !== void 0 && H(M);
    }
  }, [R, C.length, ee]), we(() => {
    if (V >= z.length) {
      const M = te[te.length - 1];
      Y(M ?? 0);
    } else if (z.length > 0 && te.length > 0 && !te.includes(V)) {
      const M = te[0];
      M !== void 0 && Y(M);
    }
  }, [V, z.length, te]), we(() => {
    O((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        C.some((re) => ot(re, v) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [C, v]), we(() => {
    j((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        z.some((re) => ot(re, v) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [z, v]);
  const ue = q(
    (M) => {
      (p ?? d)?.(M);
    },
    [p, d]
  ), U = q(
    (M) => {
      ($ ?? b)?.(M);
    },
    [$, b]
  ), X = q(
    (M) => {
      (m ?? _)?.(M);
    },
    [m, _]
  ), P = q(
    (M) => {
      const F = C[M];
      if (!F || F.disabled) return;
      const ne = ot(F, v);
      O((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), H(M);
    },
    [C, v]
  ), se = q(
    (M) => {
      const F = z[M];
      if (!F || F.disabled) return;
      const ne = ot(F, v);
      j((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), Y(M);
    },
    [z, v]
  ), J = q(() => {
    const M = [], F = [];
    for (const me of C) {
      const Ne = ot(me, v);
      y.has(Ne) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, fe = [...z, ...M];
    I(ne), D(fe), O(/* @__PURE__ */ new Set());
    const re = new Set(M.map((me) => ot(me, v)));
    j(re), ue(ne), U(fe), X({ source: ne, target: fe, moved: M, direction: "toTarget" });
  }, [C, z, y, v, ue, U, X]), ce = q(() => {
    const M = [], F = [];
    for (const me of z) {
      const Ne = ot(me, v);
      L.has(Ne) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, fe = [...C, ...M];
    D(ne), I(fe), j(/* @__PURE__ */ new Set());
    const re = new Set(M.map((me) => ot(me, v)));
    O(re), ue(fe), U(ne), X({ source: fe, target: ne, moved: M, direction: "toSource" });
  }, [C, z, L, v, ue, U, X]), ae = q(() => {
    const M = C.filter((fe) => !fe.disabled);
    if (M.length === 0) return;
    const F = C.filter((fe) => !!fe.disabled), ne = [...z, ...M];
    I(F), D(ne), O(/* @__PURE__ */ new Set()), ue(F), U(ne), X({ source: F, target: ne, moved: M, direction: "allToTarget" });
  }, [C, z, v, ue, U, X]), be = q(() => {
    const M = z.filter((fe) => !fe.disabled);
    if (M.length === 0) return;
    const F = z.filter((fe) => !!fe.disabled), ne = [...C, ...M];
    D(F), I(ne), j(/* @__PURE__ */ new Set()), ue(ne), U(F), X({ source: ne, target: F, moved: M, direction: "allToSource" });
  }, [C, z, ue, U, X]), ke = q(() => {
    if (L.size === 0) return;
    const M = [...z], F = L, ne = [];
    for (let re = 1; re < M.length; re++) {
      const me = M[re], Ne = M[re - 1];
      if (!me || !Ne) continue;
      const Fe = ot(me, v), Je = ot(Ne, v);
      F.has(Fe) && !F.has(Je) && !me.disabled && !Ne.disabled && (M[re - 1] = me, M[re] = Ne, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), U(M), X({ source: C, target: M, moved: ne, direction: "up" });
    const fe = Array.from(F)[0];
    if (fe) {
      const re = M.findIndex((me) => ot(me, v) === fe);
      re >= 0 && Y(re);
    }
  }, [z, L, v, C, U, X]), Be = q(() => {
    if (L.size === 0) return;
    const M = [...z], F = L, ne = [];
    for (let re = M.length - 2; re >= 0; re--) {
      const me = M[re], Ne = M[re + 1];
      if (!me || !Ne) continue;
      const Fe = ot(me, v), Je = ot(Ne, v);
      F.has(Fe) && !F.has(Je) && !me.disabled && !Ne.disabled && (M[re] = Ne, M[re + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), U(M), X({ source: C, target: M, moved: ne, direction: "down" });
    const fe = Array.from(F)[0];
    if (fe) {
      const re = M.findIndex((me) => ot(me, v) === fe);
      re >= 0 && Y(re);
    }
  }, [z, L, v, C, U, X]), ve = y.size > 0, We = L.size > 0, ye = le(""), Ze = le(null), Ve = le(""), Le = le(null), tt = q(
    (M) => {
      if (C.length === 0) return;
      const F = ee;
      if (F.length === 0) return;
      const ne = F.includes(R) ? R : F[0] ?? 0;
      let fe = -1;
      if (M.key === "ArrowDown") {
        M.preventDefault();
        const re = F.indexOf(ne);
        fe = F[(re + 1) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "ArrowUp") {
        M.preventDefault();
        const re = F.indexOf(ne);
        fe = F[(re - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "Home")
        M.preventDefault(), fe = F[0] ?? 0;
      else if (M.key === "End")
        M.preventDefault(), fe = F[F.length - 1] ?? 0;
      else if (M.key === "Enter" || M.key === " ") {
        M.preventDefault(), P(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const re = (ye.current + M.key).toLowerCase();
        ye.current = re, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const me = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = me.slice(Ne).find((Je) => Un(C[Je]).toLowerCase().startsWith(re));
        Fe != null && H(Fe);
        return;
      }
      fe >= 0 && H(fe);
    },
    [C, ee, R, P]
  ), Qe = q(
    (M) => {
      if (z.length === 0) return;
      const F = te;
      if (F.length === 0) return;
      const ne = F.includes(V) ? V : F[0] ?? 0;
      let fe = -1;
      if (M.key === "ArrowDown") {
        M.preventDefault();
        const re = F.indexOf(ne);
        fe = F[(re + 1) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "ArrowUp") {
        M.preventDefault();
        const re = F.indexOf(ne);
        fe = F[(re - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "Home")
        M.preventDefault(), fe = F[0] ?? 0;
      else if (M.key === "End")
        M.preventDefault(), fe = F[F.length - 1] ?? 0;
      else if (M.key === "Enter" || M.key === " ") {
        M.preventDefault(), se(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const re = (Ve.current + M.key).toLowerCase();
        Ve.current = re, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = me.slice(Ne).find((Je) => Un(z[Je]).toLowerCase().startsWith(re));
        Fe != null && Y(Fe);
        return;
      }
      fe >= 0 && Y(fe);
    },
    [z, te, V, se]
  ), et = le(null), W = le(null);
  return /* @__PURE__ */ S("div", { className: [Re.root, w].filter(Boolean).join(" "), "aria-label": E, children: [
    /* @__PURE__ */ S("div", { className: Re.panel, children: [
      /* @__PURE__ */ n("div", { className: Re.header, children: "Source" }),
      /* @__PURE__ */ n(
        "div",
        {
          ref: et,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Re.listbox,
          onKeyDown: tt,
          children: C.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : C.map((M, F) => {
            const ne = ot(M, v), fe = y.has(ne), re = F === R, me = !!M.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": fe,
                "aria-disabled": me || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Re.option,
                  fe ? Re.selected : null,
                  re ? Re.active : null,
                  me ? Re.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => P(F),
                children: Un(M)
              },
              ne
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: Re.controls, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Re.btn,
          "aria-label": "Move selected to target",
          "aria-disabled": !ve || void 0,
          disabled: !ve,
          onClick: J,
          children: "›"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Re.btn,
          "aria-label": "Move all to target",
          "aria-disabled": C.filter((M) => !M.disabled).length === 0 || void 0,
          disabled: C.filter((M) => !M.disabled).length === 0,
          onClick: ae,
          children: "»"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Re.btn,
          "aria-label": "Move all",
          "aria-disabled": C.filter((M) => !M.disabled).length === 0 || void 0,
          disabled: C.filter((M) => !M.disabled).length === 0,
          onClick: ae,
          children: "»"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Re.btn,
          "aria-label": "Move selected to source",
          "aria-disabled": !We || void 0,
          disabled: !We,
          onClick: ce,
          children: "‹"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Re.btn,
          "aria-label": "Move all to source",
          "aria-disabled": z.filter((M) => !M.disabled).length === 0 || void 0,
          disabled: z.filter((M) => !M.disabled).length === 0,
          onClick: be,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: Re.panel, children: [
      /* @__PURE__ */ n("div", { className: Re.header, children: "Target" }),
      /* @__PURE__ */ n(
        "div",
        {
          ref: W,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Re.listbox,
          onKeyDown: Qe,
          children: z.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : z.map((M, F) => {
            const ne = ot(M, v), fe = L.has(ne), re = F === V, me = !!M.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": fe,
                "aria-disabled": me || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Re.option,
                  fe ? Re.selected : null,
                  re ? Re.active : null,
                  me ? Re.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => se(F),
                children: Un(M)
              },
              ne
            );
          })
        }
      ),
      /* @__PURE__ */ S("div", { className: Re.reorder, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Re.btn,
            "aria-label": "Move up",
            "aria-disabled": !We || void 0,
            disabled: !We,
            onClick: ke,
            children: /* @__PURE__ */ n(Ce, { name: "chevron-up", size: "sm" })
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Re.btn,
            "aria-label": "Move down",
            "aria-disabled": !We || void 0,
            disabled: !We,
            onClick: Be,
            children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: "sm" })
          }
        )
      ] })
    ] })
  ] });
}
const $0 = "_root_1isbb_1", N0 = "_header_1isbb_8", S0 = "_title_1isbb_15", D0 = "_navBtn_1isbb_20", M0 = "_resources_1isbb_39", z0 = "_resource_1isbb_39", C0 = "_grid_1isbb_50", O0 = "_timeCol_1isbb_55", E0 = "_timeCell_1isbb_61", I0 = "_dayCol_1isbb_66", j0 = "_dayHeader_1isbb_73", A0 = "_slot_1isbb_81", T0 = "_event_1isbb_91", _t = {
  root: $0,
  header: N0,
  title: S0,
  navBtn: D0,
  resources: M0,
  resource: z0,
  grid: C0,
  timeCol: O0,
  timeCell: E0,
  dayCol: I0,
  dayHeader: j0,
  slot: A0,
  event: T0
};
function Ar(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function t2({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: a,
  resources: l,
  onEventClick: c,
  onSlotClick: h,
  ariaLabel: o = "Scheduler",
  className: s
}) {
  const [i, p] = G(r ?? /* @__PURE__ */ new Date()), d = r ?? i, $ = (k) => {
    r || p(k), a?.(k);
  }, b = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (k, m) => {
    const _ = new Date(d);
    return _.setDate(d.getDate() - d.getDay() + m), _;
  }) : Array.from({ length: 30 }, (k, m) => {
    const _ = new Date(d);
    return _.setDate(1 + m), _;
  }), N = Array.from({ length: 12 }, (k, m) => 8 + m);
  return /* @__PURE__ */ S("div", { className: [_t.root, s].filter(Boolean).join(" "), role: "group", "aria-label": o, children: [
    /* @__PURE__ */ S("div", { className: _t.header, children: [
      /* @__PURE__ */ n("button", { type: "button", className: _t.navBtn, "aria-label": "Previous", onClick: () => {
        const k = new Date(d);
        k.setDate(k.getDate() - 7), $(k);
      }, children: "‹" }),
      /* @__PURE__ */ n("span", { className: _t.title, children: d.toLocaleDateString() }),
      /* @__PURE__ */ n("button", { type: "button", className: _t.navBtn, "aria-label": "Next", onClick: () => {
        const k = new Date(d);
        k.setDate(k.getDate() + 7), $(k);
      }, children: "›" })
    ] }),
    l && /* @__PURE__ */ n("div", { className: _t.resources, children: l.map((k) => /* @__PURE__ */ n("div", { className: _t.resource, role: "presentation", "aria-label": k.name, children: k.name }, k.id)) }),
    /* @__PURE__ */ S("div", { className: _t.grid, role: "presentation", children: [
      /* @__PURE__ */ n("div", { className: _t.timeCol, role: "presentation", children: N.map((k) => /* @__PURE__ */ S("div", { className: _t.timeCell, children: [
        k,
        ":00"
      ] }, k)) }),
      b.map((k) => /* @__PURE__ */ S("div", { className: _t.dayCol, role: "presentation", title: k.toLocaleDateString(), onClick: () => h?.({ date: k }), tabIndex: 0, "aria-label": k.toLocaleDateString(), children: [
        /* @__PURE__ */ n("div", { className: _t.dayHeader, children: k.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        N.map((m) => /* @__PURE__ */ n("div", { className: _t.slot, tabIndex: -1, onClick: () => {
          const _ = new Date(k);
          _.setHours(m), h?.({ date: _ });
        } }, m)),
        e.filter((m) => m.start.toDateString() === k.toDateString()).map((m) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: _t.event,
            "aria-label": `${m.title} ${Ar(m.start)} - ${Ar(m.end)}`,
            "aria-pressed": !1,
            onClick: () => c?.({ event: m }),
            children: m.title
          },
          m.id
        ))
      ] }, k.toISOString()))
    ] })
  ] });
}
const R0 = "_root_uw4jr_1", L0 = "_header_uw4jr_8", P0 = "_headerCell_uw4jr_15", B0 = "_timeline_uw4jr_21", F0 = "_row_uw4jr_26", q0 = "_taskName_uw4jr_32", K0 = "_timelineCell_uw4jr_37", H0 = "_bar_uw4jr_43", U0 = "_progress_uw4jr_56", W0 = "_dep_uw4jr_61", Tt = {
  root: R0,
  header: L0,
  headerCell: P0,
  timeline: B0,
  row: F0,
  taskName: q0,
  timelineCell: K0,
  bar: H0,
  progress: U0,
  dep: W0
};
function n2({ tasks: e, view: t = "week", onTaskClick: r, ariaLabel: a = "Gantt", className: l }) {
  const [c, h] = G(null);
  return /* @__PURE__ */ S("div", { className: [Tt.root, l].filter(Boolean).join(" "), role: "grid", "aria-label": a, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ S("div", { className: Tt.header, role: "row", children: [
      /* @__PURE__ */ n("div", { className: Tt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ S("div", { className: Tt.timeline, role: "columnheader", children: [
        "Timeline (",
        t,
        ")"
      ] })
    ] }),
    e.map((o) => /* @__PURE__ */ S("div", { className: Tt.row, role: "row", "aria-selected": c === o.id, children: [
      /* @__PURE__ */ n("div", { className: Tt.taskName, role: "gridcell", children: o.name }),
      /* @__PURE__ */ S("div", { className: Tt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: Tt.bar,
            role: "button",
            "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
            "aria-pressed": c === o.id,
            tabIndex: 0,
            onClick: () => {
              h(o.id), r?.({ task: o });
            },
            onKeyDown: (s) => {
              (s.key === "Enter" || s.key === " ") && (s.preventDefault(), h(o.id), r?.({ task: o }));
            },
            children: /* @__PURE__ */ n("div", { className: Tt.progress, style: { width: `${o.progress ?? 0}%` } })
          }
        ),
        o.dependencies?.map((s) => /* @__PURE__ */ n("svg", { className: Tt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-color-border)" }) }, s))
      ] })
    ] }, o.id))
  ] });
}
const V0 = "_root_iswin_1", X0 = "_fields_iswin_6", G0 = "_chip_iswin_13", Y0 = "_table_iswin_35", Z0 = "_totalRow_iswin_55", J0 = "_total_iswin_55", mn = {
  root: V0,
  fields: X0,
  chip: G0,
  table: Y0,
  totalRow: Z0,
  total: J0
}, Wn = {
  Sum: (e) => e.reduce((t, r) => t + r, 0),
  Average: (e) => e.length ? e.reduce((t, r) => t + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function En(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function r2({ data: e, rowFields: t = [], columnFields: r = [], aggregateFields: a = [], onFieldsChange: l, ariaLabel: c = "Pivot table", className: h }) {
  const o = t, s = r, i = a, p = (m, _, f) => {
    const g = m === "row" ? o.filter((E) => E.property !== _) : o, w = m === "col" ? s.filter((E) => E.property !== _) : s, v = m === "agg" ? i.filter((E) => !(E.property === _ && E.aggregate === f)) : i;
    l?.({ rowFields: g, columnFields: w, aggregateFields: v });
  }, d = (m, _) => _.map((f) => String(m[f.property])).join(""), $ = [...new Set(o.length ? e.map((m) => d(m, o)) : [""])].sort(), b = [...new Set(s.length ? e.map((m) => d(m, s)) : [""])].sort(), N = (m, _, f) => {
    const g = e.filter((v) => d(v, o) === m && d(v, s) === _), w = g.map((v) => Number(v[f.property])).filter((v) => !Number.isNaN(v));
    return !w.length && f.aggregate !== "Count" ? 0 : Wn[f.aggregate](f.aggregate === "Count" ? g.map(() => 1) : w);
  }, k = (m, _, f, g) => /* @__PURE__ */ S(
    "button",
    {
      type: "button",
      className: mn.chip,
      "aria-label": `Remove ${m} field ${f}`,
      onClick: () => p(m, _, g),
      children: [
        f,
        g ? ` (${g})` : ""
      ]
    },
    `${m}-${f}-${g ?? ""}`
  );
  return /* @__PURE__ */ S("div", { className: [mn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S("div", { className: mn.fields, children: [
      o.map((m) => k("row", m.property, m.title ?? m.property)),
      s.map((m) => k("col", m.property, m.title ?? m.property)),
      i.map((m) => k("agg", m.property, m.title ?? m.property, m.aggregate))
    ] }),
    /* @__PURE__ */ S("table", { className: mn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ S("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: o.map((m) => m.title ?? m.property).join(" / ") || "Total" }),
        b.map((m) => /* @__PURE__ */ n("th", { scope: "col", children: m || "—" }, m)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ S("tbody", { children: [
        $.map((m) => /* @__PURE__ */ S("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: m || "—" }),
          b.map((_) => /* @__PURE__ */ n("td", { title: En(N(m, _, i[0] ?? { property: "", aggregate: "Count" })), children: i.length ? En(N(m, _, i[0])) : "" }, _)),
          /* @__PURE__ */ n("td", { className: mn.total, children: i.length ? En(
            Wn[i[0].aggregate](
              b.flatMap((_) => e.filter((f) => d(f, o) === m && d(f, s) === _).map((f) => Number(f[i[0].property]))).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, m)),
        /* @__PURE__ */ S("tr", { className: mn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((m) => /* @__PURE__ */ n("td", { children: i.length ? En(
            Wn[i[0].aggregate](
              e.filter((_) => d(_, s) === m).map((_) => Number(_[i[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, m)),
          /* @__PURE__ */ n("td", { children: i.length ? En(Wn[i[0].aggregate](e.map((m) => Number(m[i[0].property])).filter((m) => !Number.isNaN(m)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Q0 = "_root_mkz78_1", ey = "_reverse_mkz78_10", ty = "_item_mkz78_14", ny = "_marker_mkz78_35", ry = "_body_mkz78_46", oy = "_label_mkz78_50", sy = "_content_mkz78_56", on = {
  root: Q0,
  reverse: ey,
  item: ty,
  marker: ny,
  body: ry,
  label: oy,
  content: sy
};
function o2({ items: e, reverse: t = !1, ariaLabel: r = "Timeline", className: a }) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [on.root, t ? on.reverse : "", a].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: l.map((c, h) => /* @__PURE__ */ S("li", { className: on.item, children: [
        /* @__PURE__ */ n("span", { className: on.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ S("div", { className: on.body, children: [
          /* @__PURE__ */ n("div", { className: on.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: on.content, children: c.content })
        ] })
      ] }, h))
    }
  );
}
const ay = "_root_12pfj_1", ly = "_header_12pfj_13", iy = "_headCell_12pfj_22", cy = "_row_12pfj_32", dy = "_cell_12pfj_37", In = {
  root: ay,
  header: ly,
  headCell: iy,
  row: cy,
  cell: dy
};
function s2({ count: e, rowHeight: t = 40, height: r = 320, loadData: a, columns: l = [], ariaLabel: c = "Virtual grid", className: h }) {
  const [o, s] = G(/* @__PURE__ */ new Map()), [i, p] = G(0), d = le(/* @__PURE__ */ new Set()), $ = Math.ceil(r / t), b = Math.max(0, Math.floor(i / t) - 3), N = Math.min(e, b + $ + 6), k = q(
    (_, f) => {
      let g = !1;
      for (let w = _; w < f; w++)
        !o.has(w) && !d.current.has(w) && (g = !0);
      if (g) {
        for (let w = _; w < f; w++) d.current.add(w);
        a({ skip: _, top: f }).then((w) => {
          s((v) => {
            const E = new Map(v);
            return w.forEach((u, x) => E.set(_ + x, u)), E;
          });
          for (let v = _; v < f; v++) d.current.delete(v);
        });
      }
    },
    [o, a]
  );
  we(() => {
    k(b, N);
  }, [b, N]);
  const m = [];
  for (let _ = b; _ < N; _++) {
    const f = o.get(_) ?? {};
    m.push(
      /* @__PURE__ */ n("div", { className: In.row, role: "row", style: { height: t }, children: l.map((g) => /* @__PURE__ */ n("div", { role: "gridcell", className: In.cell, style: g.width ? { width: g.width } : void 0, children: String(f[g.property] ?? "") }, g.property)) }, _)
    );
  }
  return /* @__PURE__ */ S(
    "div",
    {
      className: [In.root, h].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (_) => p(_.target.scrollTop),
      onKeyDown: (_) => {
        const f = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), f.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), f.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), f.scrollTop += r) : _.key === "PageUp" && (_.preventDefault(), f.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: b * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: In.header, role: "row", children: l.map((_) => /* @__PURE__ */ n("div", { role: "columnheader", className: In.headCell, style: { height: t, ..._.width ? { width: _.width } : {} }, children: _.title ?? _.property }, _.property)) }),
        m,
        /* @__PURE__ */ n("div", { style: { height: Math.max(0, (e - N) * t) }, "aria-hidden": "true" })
      ]
    }
  );
}
var Ot;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(o, s, i, p) {
      if (this.version = o, this.errorCorrectionLevel = s, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7)
        throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let d = [];
      for (let b = 0; b < this.size; b++)
        d.push(!1);
      for (let b = 0; b < this.size; b++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const $ = this.addEccAndInterleave(i);
      if (this.drawCodewords($), p == -1) {
        let b = 1e9;
        for (let N = 0; N < 8; N++) {
          this.applyMask(N), this.drawFormatBits(N);
          const k = this.getPenaltyScore();
          k < b && (p = N, b = k), this.applyMask(N);
        }
      }
      l(0 <= p && p <= 7), this.mask = p, this.applyMask(p), this.drawFormatBits(p), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(o, s) {
      const i = e.QrSegment.makeSegments(o);
      return t.encodeSegments(i, s);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, s) {
      const i = e.QrSegment.makeBytes(o);
      return t.encodeSegments([i], s);
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
    static encodeSegments(o, s, i = 1, p = 40, d = -1, $ = !0) {
      if (!(t.MIN_VERSION <= i && i <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let b, N;
      for (b = i; ; b++) {
        const f = t.getNumDataCodewords(b, s) * 8, g = c.getTotalBits(o, b);
        if (g <= f) {
          N = g;
          break;
        }
        if (b >= p)
          throw new RangeError("Data too long");
      }
      for (const f of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        $ && N <= t.getNumDataCodewords(b, f) * 8 && (s = f);
      let k = [];
      for (const f of o) {
        r(f.mode.modeBits, 4, k), r(f.numChars, f.mode.numCharCountBits(b), k);
        for (const g of f.getData())
          k.push(g);
      }
      l(k.length == N);
      const m = t.getNumDataCodewords(b, s) * 8;
      l(k.length <= m), r(0, Math.min(4, m - k.length), k), r(0, (8 - k.length % 8) % 8, k), l(k.length % 8 == 0);
      for (let f = 236; k.length < m; f ^= 253)
        r(f, 8, k);
      let _ = [];
      for (; _.length * 8 < k.length; )
        _.push(0);
      return k.forEach((f, g) => _[g >>> 3] |= f << 7 - (g & 7)), new t(b, s, _, d);
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
    getModule(o, s) {
      return 0 <= o && o < this.size && 0 <= s && s < this.size && this.modules[s][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++)
        this.setFunctionModule(6, i, i % 2 == 0), this.setFunctionModule(i, 6, i % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), s = o.length;
      for (let i = 0; i < s; i++)
        for (let p = 0; p < s; p++)
          i == 0 && p == 0 || i == 0 && p == s - 1 || i == s - 1 && p == 0 || this.drawAlignmentPattern(o[i], o[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const s = this.errorCorrectionLevel.formatBits << 3 | o;
      let i = s;
      for (let d = 0; d < 10; d++)
        i = i << 1 ^ (i >>> 9) * 1335;
      const p = (s << 10 | i) ^ 21522;
      l(p >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, a(p, d));
      this.setFunctionModule(8, 7, a(p, 6)), this.setFunctionModule(8, 8, a(p, 7)), this.setFunctionModule(7, 8, a(p, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, a(p, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, a(p, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, a(p, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let o = this.version;
      for (let i = 0; i < 12; i++)
        o = o << 1 ^ (o >>> 11) * 7973;
      const s = this.version << 12 | o;
      l(s >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const p = a(s, i), d = this.size - 11 + i % 3, $ = Math.floor(i / 3);
        this.setFunctionModule(d, $, p), this.setFunctionModule($, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, s) {
      for (let i = -4; i <= 4; i++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(i)), $ = o + p, b = s + i;
          0 <= $ && $ < this.size && 0 <= b && b < this.size && this.setFunctionModule($, b, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, s) {
      for (let i = -2; i <= 2; i++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(o + p, s + i, Math.max(Math.abs(p), Math.abs(i)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, s, i) {
      this.modules[s][o] = i, this.isFunction[s][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const s = this.version, i = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(s, i))
        throw new RangeError("Invalid argument");
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][s], d = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][s], $ = Math.floor(t.getNumRawDataModules(s) / 8), b = p - $ % p, N = Math.floor($ / p);
      let k = [];
      const m = t.reedSolomonComputeDivisor(d);
      for (let f = 0, g = 0; f < p; f++) {
        let w = o.slice(g, g + N - d + (f < b ? 0 : 1));
        g += w.length;
        const v = t.reedSolomonComputeRemainder(w, m);
        f < b && w.push(0), k.push(w.concat(v));
      }
      let _ = [];
      for (let f = 0; f < k[0].length; f++)
        k.forEach((g, w) => {
          (f != N - d || w >= b) && _.push(g[f]);
        });
      return l(_.length == $), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let s = 0;
      for (let i = this.size - 1; i >= 1; i -= 2) {
        i == 6 && (i = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const $ = i - d, N = (i + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[N][$] && s < o.length * 8 && (this.modules[N][$] = a(o[s >>> 3], 7 - (s & 7)), s++);
          }
      }
      l(s == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7)
        throw new RangeError("Mask value out of range");
      for (let s = 0; s < this.size; s++)
        for (let i = 0; i < this.size; i++) {
          let p;
          switch (o) {
            case 0:
              p = (i + s) % 2 == 0;
              break;
            case 1:
              p = s % 2 == 0;
              break;
            case 2:
              p = i % 3 == 0;
              break;
            case 3:
              p = (i + s) % 3 == 0;
              break;
            case 4:
              p = (Math.floor(i / 3) + Math.floor(s / 2)) % 2 == 0;
              break;
            case 5:
              p = i * s % 2 + i * s % 3 == 0;
              break;
            case 6:
              p = (i * s % 2 + i * s % 3) % 2 == 0;
              break;
            case 7:
              p = ((i + s) % 2 + i * s % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[s][i] && p && (this.modules[s][i] = !this.modules[s][i]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let d = 0; d < this.size; d++) {
        let $ = !1, b = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[d][k] == $ ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, N), $ || (o += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[d][k], b = 1);
        o += this.finderPenaltyTerminateAndCount($, b, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let $ = !1, b = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[k][d] == $ ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, N), $ || (o += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[k][d], b = 1);
        o += this.finderPenaltyTerminateAndCount($, b, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let $ = 0; $ < this.size - 1; $++) {
          const b = this.modules[d][$];
          b == this.modules[d][$ + 1] && b == this.modules[d + 1][$] && b == this.modules[d + 1][$ + 1] && (o += t.PENALTY_N2);
        }
      let s = 0;
      for (const d of this.modules)
        s = d.reduce(($, b) => $ + (b ? 1 : 0), s);
      const i = this.size * this.size, p = Math.ceil(Math.abs(s * 20 - i * 10) / i) - 1;
      return l(0 <= p && p <= 9), o += p * t.PENALTY_N4, l(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const o = Math.floor(this.version / 7) + 2, s = Math.floor((this.version * 8 + o * 3 + 5) / (o * 4 - 4)) * 2;
        let i = [6];
        for (let p = this.size - 7; i.length < o; p -= s)
          i.splice(1, 0, p);
        return i;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let s = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const i = Math.floor(o / 7) + 2;
        s -= (25 * i - 10) * i - 55, o >= 7 && (s -= 36);
      }
      return l(208 <= s && s <= 29648), s;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, s) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[s.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let s = [];
      for (let p = 0; p < o - 1; p++)
        s.push(0);
      s.push(1);
      let i = 1;
      for (let p = 0; p < o; p++) {
        for (let d = 0; d < s.length; d++)
          s[d] = t.reedSolomonMultiply(s[d], i), d + 1 < s.length && (s[d] ^= s[d + 1]);
        i = t.reedSolomonMultiply(i, 2);
      }
      return s;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, s) {
      let i = s.map((p) => 0);
      for (const p of o) {
        const d = p ^ i.shift();
        i.push(0), s.forEach(($, b) => i[b] ^= t.reedSolomonMultiply($, d));
      }
      return i;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, s) {
      if (o >>> 8 || s >>> 8)
        throw new RangeError("Byte out of range");
      let i = 0;
      for (let p = 7; p >= 0; p--)
        i = i << 1 ^ (i >>> 7) * 285, i ^= (s >>> p & 1) * o;
      return l(i >>> 8 == 0), i;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const s = o[1];
      l(s <= this.size * 3);
      const i = s > 0 && o[2] == s && o[3] == s * 3 && o[4] == s && o[5] == s;
      return (i && o[0] >= s * 4 && o[6] >= s ? 1 : 0) + (i && o[6] >= s * 4 && o[0] >= s ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, s, i) {
      return o && (this.finderPenaltyAddHistory(s, i), s = 0), s += this.size, this.finderPenaltyAddHistory(s, i), this.finderPenaltyCountPatterns(i);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, s) {
      s[0] == 0 && (o += this.size), s.pop(), s.unshift(o);
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
      [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
      // Low
      [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
      // Medium
      [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
      // Quartile
      [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
      // High
    ];
    static NUM_ERROR_CORRECTION_BLOCKS = [
      // Version: (note that index 0 is for padding, and is set to an illegal value)
      //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
      [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
      // Low
      [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
      // Medium
      [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
      // Quartile
      [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
      // High
    ];
  }
  e.QrCode = t;
  function r(h, o, s) {
    if (o < 0 || o > 31 || h >>> o)
      throw new RangeError("Value out of range");
    for (let i = o - 1; i >= 0; i--)
      s.push(h >>> i & 1);
  }
  function a(h, o) {
    return (h >>> o & 1) != 0;
  }
  function l(h) {
    if (!h)
      throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, s, i) {
      if (this.mode = o, this.numChars = s, this.bitData = i, s < 0)
        throw new RangeError("Invalid argument");
      this.bitData = i.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let s = [];
      for (const i of o)
        r(i, 8, s);
      return new c(c.Mode.BYTE, o.length, s);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let s = [];
      for (let i = 0; i < o.length; ) {
        const p = Math.min(o.length - i, 3);
        r(parseInt(o.substring(i, i + p), 10), p * 3 + 1, s), i += p;
      }
      return new c(c.Mode.NUMERIC, o.length, s);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!c.isAlphanumeric(o))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let s = [], i;
      for (i = 0; i + 2 <= o.length; i += 2) {
        let p = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i + 1)), r(p, 11, s);
      }
      return i < o.length && r(c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)), 6, s), new c(c.Mode.ALPHANUMERIC, o.length, s);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : c.isNumeric(o) ? [c.makeNumeric(o)] : c.isAlphanumeric(o) ? [c.makeAlphanumeric(o)] : [c.makeBytes(c.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let s = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128)
        r(o, 8, s);
      else if (o < 16384)
        r(2, 2, s), r(o, 14, s);
      else if (o < 1e6)
        r(6, 3, s), r(o, 21, s);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, s);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(o) {
      return c.NUMERIC_REGEX.test(o);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(o) {
      return c.ALPHANUMERIC_REGEX.test(o);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(o, s) {
      let i = 0;
      for (const p of o) {
        const d = p.mode.numCharCountBits(s);
        if (p.numChars >= 1 << d)
          return 1 / 0;
        i += 4 + d + p.bitData.length;
      }
      return i;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let s = [];
      for (let i = 0; i < o.length; i++)
        o.charAt(i) != "%" ? s.push(o.charCodeAt(i)) : (s.push(parseInt(o.substring(i + 1, i + 3), 16)), i += 2);
      return s;
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
  e.QrSegment = c;
})(Ot || (Ot = {}));
((e) => {
  ((t) => {
    class r {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, c) {
        this.ordinal = l, this.formatBits = c;
      }
      ordinal;
      formatBits;
      /*-- Constants --*/
      static LOW = new r(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new r(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new r(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new r(3, 2);
    }
    t.Ecc = r;
  })(e.QrCode || (e.QrCode = {}));
})(Ot || (Ot = {}));
((e) => {
  ((t) => {
    class r {
      /*-- Constructor and fields --*/
      constructor(l, c) {
        this.modeBits = l, this.numBitsCharCount = c;
      }
      modeBits;
      numBitsCharCount;
      /*-- Constants --*/
      static NUMERIC = new r(1, [10, 12, 14]);
      static ALPHANUMERIC = new r(2, [9, 11, 13]);
      static BYTE = new r(4, [8, 16, 16]);
      static KANJI = new r(8, [8, 10, 12]);
      static ECI = new r(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(l) {
        return this.numBitsCharCount[Math.floor((l + 7) / 17)];
      }
    }
    t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(Ot || (Ot = {}));
const uy = "_root_1leml_1", fy = {
  root: uy
}, _y = {
  low: Ot.QrCode.Ecc.LOW,
  medium: Ot.QrCode.Ecc.MEDIUM,
  quartile: Ot.QrCode.Ecc.QUARTILE,
  high: Ot.QrCode.Ecc.HIGH
};
function a2({
  value: e,
  size: t = 128,
  render: r = "svg",
  errorCorrection: a = "medium",
  margin: l = 4,
  ariaLabel: c,
  className: h,
  onError: o
}) {
  const s = c ?? `QR code for ${e}`, i = le(null), p = Xr("(prefers-color-scheme: dark)"), [d, $] = G(null);
  we(() => {
    const w = document.documentElement;
    $(w.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      $(w.dataset.theme ?? null);
    });
    return v.observe(w, { attributes: !0, attributeFilter: ["data-theme"] }), () => v.disconnect();
  }, []);
  const b = $e(() => {
    try {
      return Ot.QrCode.encodeText(e, _y[a]);
    } catch {
      return null;
    }
  }, [e, a]), N = le(null);
  we(() => {
    if (b !== null) return;
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), N.current !== e && (N.current = e, o?.(w));
  }, [b, e, o]);
  const k = Math.max(0, Math.floor(l)), m = [fy.root, h].filter(Boolean).join(" ");
  if (we(() => {
    if (r !== "canvas" || b === null) return;
    const w = i.current, v = w?.getContext("2d");
    if (!w || !v) return;
    const E = getComputedStyle(w), u = E.getPropertyValue("--dx-color-text").trim() || "#000", x = E.getPropertyValue("--dx-color-surface").trim() || "#fff";
    py(v, b, t, k, u, x);
  }, [r, b, t, k, p, d]), b === null)
    return /* @__PURE__ */ n("div", { className: m, role: "img", "aria-label": s, "data-qr-error": "true" });
  const _ = b.size + k * 2, f = t / _;
  if (r === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: i,
        className: m,
        width: t,
        height: t,
        role: "img",
        "aria-label": s,
        "data-value": e
      }
    );
  const g = [];
  for (let w = 0; w < b.size; w++)
    for (let v = 0; v < b.size; v++)
      b.getModule(v, w) && g.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (v + k) * f,
            y: (w + k) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${v}-${w}`
        )
      );
  return /* @__PURE__ */ S(
    "svg",
    {
      className: m,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": s,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-color-surface)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-color-text)", children: g })
      ]
    }
  );
}
function py(e, t, r, a, l, c) {
  const h = r / (t.size + a * 2);
  e.fillStyle = c, e.fillRect(0, 0, r, r), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let s = 0; s < t.size; s++)
      t.getModule(s, o) && e.fillRect((s + a) * h, (o + a) * h, h + 0.5, h + 0.5);
}
const hy = "_root_xfffn_1", my = "_value_xfffn_9", Tr = {
  root: hy,
  value: my
}, Rr = [
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
], Lr = 104, gy = 106;
function yy(e) {
  const t = [Lr];
  for (let a = 0; a < e.length; a++) {
    const l = e.charCodeAt(a);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let r = Lr;
  for (let a = 1; a < t.length; a++) r += a * t[a];
  return t.push(r % 103, gy), t;
}
function l2({ value: e, format: t = "Code128", height: r = 60, showValue: a = !1, ariaLabel: l, className: c }) {
  const h = l ?? `Barcode ${e}`, o = $e(() => {
    const s = [];
    let i = 0;
    for (const p of yy(e)) {
      const d = Rr[p] ?? Rr[0];
      for (let $ = 0; $ < d.length; $++) {
        const b = Number(d[$]);
        $ % 2 === 0 && s.push({ x: i, w: b }), i += b;
      }
    }
    return { modules: s, total: i };
  }, [e]);
  return /* @__PURE__ */ S("span", { className: [Tr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${o.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": h,
        "data-value": e,
        children: [
          /* @__PURE__ */ n("rect", { width: o.total, height: r, fill: "var(--dx-color-surface)" }),
          o.modules.map((s, i) => /* @__PURE__ */ n("rect", { x: s.x, y: 0, width: s.w, height: r, fill: "var(--dx-color-text)" }, i))
        ]
      }
    ),
    a && /* @__PURE__ */ n("span", { className: Tr.value, children: e })
  ] });
}
const by = "_root_x813o_1", xy = "_svg_x813o_10", vy = "_gridline_x813o_15", ky = "_tickLabel_x813o_21", wy = "_axisTitle_x813o_27", $y = "_dataLabel_x813o_34", Ny = "_legend_x813o_40", Sy = "_legendItem_x813o_48", Dy = "_swatch_x813o_56", My = "_tooltip_x813o_63", zy = "_visuallyHidden_x813o_77", st = {
  root: by,
  svg: xy,
  gridline: vy,
  tickLabel: ky,
  axisTitle: wy,
  dataLabel: $y,
  legend: Ny,
  legendItem: Sy,
  swatch: Dy,
  tooltip: My,
  visuallyHidden: zy
}, Pr = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function Cy(e, t, r) {
  const a = t - e || 1, l = r ?? Math.pow(10, Math.floor(Math.log10(a / 4))), c = Math.floor(e / l) * l, h = Math.ceil(t / l) * l, o = [];
  for (let s = c; s <= h + 1e-9; s += l) o.push(Number(s.toFixed(6)));
  return { min: c, max: h, step: l, ticks: o };
}
function i2({
  series: e,
  width: t = 600,
  height: r = 400,
  valueAxis: a,
  categoryAxis: l,
  showLegend: c = !0,
  tooltipVisible: h = !0,
  onSeriesClick: o,
  ariaLabel: s = "Chart",
  className: i
}) {
  const [p, d] = G(null), $ = $e(() => {
    const u = /* @__PURE__ */ new Set();
    for (const x of e) for (const C of x.data) u.add(String(C[x.categoryProperty] ?? ""));
    return [...u];
  }, [e]), b = $e(() => e.flatMap((u) => u.data.map((x) => Number(x[u.valueProperty]))).filter((u) => !Number.isNaN(u)), [e]), N = a?.min ?? (b.length ? Math.min(0, ...b) : 0), k = a?.max ?? (b.length ? Math.max(...b) : 10), m = $e(() => Cy(N, k, a?.step), [N, k, a?.step]), _ = { t: 16, r: 16, b: 40, l: 56 }, f = t - _.l - _.r, g = r - _.t - _.b, w = (u) => _.l + u / Math.max(1, $.length - 1) * f, v = (u) => _.t + (1 - (u - m.min) / (m.max - m.min || 1)) * g, E = (u, x) => x.color ?? Pr[u % Pr.length];
  return /* @__PURE__ */ S("figure", { className: [st.root, i].filter(Boolean).join(" "), role: "img", "aria-label": s, "aria-describedby": `${s.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ S("svg", { width: t, height: r, className: st.svg, role: "presentation", children: [
      a?.gridlines !== !1 && m.ticks.map((u) => /* @__PURE__ */ n("line", { x1: _.l, x2: _.l + f, y1: v(u), y2: v(u), className: st.gridline }, u)),
      l?.gridlines && $.map((u, x) => /* @__PURE__ */ n("line", { x1: w(x), x2: w(x), y1: _.t, y2: _.t + g, className: st.gridline }, x)),
      m.ticks.map((u) => /* @__PURE__ */ n("text", { x: _.l - 8, y: v(u) + 4, textAnchor: "end", className: st.tickLabel, children: u }, u)),
      $.map((u, x) => /* @__PURE__ */ n("text", { x: w(x), y: _.t + g + 16, textAnchor: "middle", className: st.tickLabel, children: u }, u)),
      a?.title && /* @__PURE__ */ n("text", { x: 12, y: _.t + g / 2, textAnchor: "middle", transform: `rotate(-90,12,${_.t + g / 2})`, className: st.axisTitle, children: a.title }),
      l?.title && /* @__PURE__ */ n("text", { x: _.l + f / 2, y: r - 4, textAnchor: "middle", className: st.axisTitle, children: l.title }),
      (() => {
        const u = /* @__PURE__ */ new Map();
        for (const I of e)
          if (I.stack)
            for (const z of I.data) {
              const D = String(z[I.categoryProperty] ?? ""), y = Number(z[I.valueProperty]);
              if (Number.isNaN(y)) continue;
              u.has(I.stack) || u.set(I.stack, /* @__PURE__ */ new Map());
              const O = u.get(I.stack);
              O.set(D, (O.get(D) ?? 0) + y);
            }
        const x = e.filter((I) => I.type === "pie" || I.type === "donut"), C = /* @__PURE__ */ new Map();
        for (const I of x) {
          const z = I.data.reduce((D, y) => D + (Number(y[I.valueProperty]) || 0), 0);
          C.set(I, z);
        }
        return e.map((I, z) => {
          const D = I.data.map((j) => ({
            cat: String(j[I.categoryProperty] ?? ""),
            val: Number(j[I.valueProperty]),
            size: I.sizeProperty ? Number(j[I.sizeProperty]) : void 0,
            item: j
          })), y = new Map($.map((j, R) => [j, R])), O = E(z, I);
          if (I.type === "pie" || I.type === "donut") {
            const j = _.l + f / 2, R = _.t + g / 2, H = Math.min(f, g) / 3, V = I.type === "donut" ? I.innerRadius ?? H * 0.5 : 0, Y = C.get(I) ?? D.reduce((te, ue) => te + ue.val, 0);
            let ee = -90;
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
              D.map((te, ue) => {
                const U = Y ? te.val / Y * 360 : 0, X = ee, P = ee + U;
                ee = P;
                const se = U > 180 ? 1 : 0, J = (Qe) => Qe * Math.PI / 180, ce = j + H * Math.cos(J(X)), ae = R + H * Math.sin(J(X)), be = j + H * Math.cos(J(P)), ke = R + H * Math.sin(J(P)), Be = j + V * Math.cos(J(P)), ve = R + V * Math.sin(J(P)), We = j + V * Math.cos(J(X)), ye = R + V * Math.sin(J(X)), Ze = V ? `M ${ce} ${ae} A ${H} ${H} 0 ${se} 1 ${be} ${ke} L ${Be} ${ve} A ${V} ${V} 0 ${se} 0 ${We} ${ye} Z` : `M ${j} ${R} L ${ce} ${ae} A ${H} ${H} 0 ${se} 1 ${be} ${ke} Z`, Ve = (X + P) / 2, Le = j + (H + 12) * Math.cos(J(Ve)), tt = R + (H + 12) * Math.sin(J(Ve));
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n(
                    "path",
                    {
                      d: Ze,
                      fill: O,
                      stroke: "var(--dx-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => h && d({ x: Le, y: tt, text: `${I.title ?? te.cat}: ${te.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => o?.({ seriesTitle: I.title ?? "", category: te.cat, value: te.val, item: te.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: Le, y: tt, textAnchor: "middle", className: st.dataLabel, children: te.val })
                ] }, ue);
              })
            ] }, z);
          }
          if (I.type === "scatter" || I.type === "bubble")
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
              D.map((j, R) => {
                const H = y.get(j.cat) ?? 0, V = Number(D[R].cat), Y = Number.isNaN(V) ? w(H) : _.l + (V - m.min) / (m.max - m.min || 1) * f, ee = v(j.val), te = I.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: Y, cy: ee, r: te, fill: O, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      cx: Y,
                      cy: ee,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => h && d({ x: Y, y: ee, text: `${I.title ?? j.cat}: ${j.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => o?.({ seriesTitle: I.title ?? "", category: j.cat, value: j.val, item: j.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, R);
              })
            ] }, z);
          if (I.type === "line" || I.type === "area") {
            const j = (V) => {
              if (!I.stack) return m.min;
              let Y = 0;
              for (let ee = 0; ee < z; ee++) {
                const te = e[ee];
                if (te?.stack !== I.stack) continue;
                const ue = te.data.find((U) => String(U[te.categoryProperty] ?? "") === V);
                ue && (Y += Number(ue[te.valueProperty]) || 0);
              }
              return Y;
            }, R = D.map((V) => {
              const Y = y.get(V.cat) ?? 0, ee = j(V.cat);
              return `${Y === 0 ? "M" : "L"} ${w(Y)} ${v(ee + V.val)}`;
            }).join(" "), H = D.map((V) => {
              const Y = y.get(V.cat) ?? 0, ee = j(V.cat);
              return `${Y === 0 ? "M" : "L"} ${w(Y)} ${v(ee)}`;
            }).join(" ");
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
              I.type === "area" && /* @__PURE__ */ n("path", { d: `${R} L ${w(D.length - 1)} ${v(j(D[D.length - 1].cat))} L ${w(0)} ${v(j(D[0].cat))} Z`, fill: O, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ n("path", { d: R, fill: "none", stroke: O, strokeWidth: 2 }),
              I.stack && /* @__PURE__ */ n("path", { d: H, fill: "none", stroke: "transparent" }),
              D.map((V, Y) => {
                const ee = y.get(V.cat) ?? 0, te = j(V.cat), ue = w(ee), U = v(te + V.val);
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: ue, cy: U, r: 4, fill: O, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "rect",
                    {
                      x: ue - 12,
                      y: U - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => h && d({ x: ue, y: U, text: `${I.title ?? V.cat}: ${V.val}` }),
                      onMouseLeave: () => d(null),
                      onFocus: () => h && d({ x: ue, y: U, text: `${I.title ?? V.cat}: ${V.val}` }),
                      onBlur: () => d(null),
                      onClick: () => o?.({ seriesTitle: I.title ?? "", category: V.cat, value: V.val, item: V.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: ue, y: U - 8, textAnchor: "middle", className: st.dataLabel, children: V.val })
                ] }, Y);
              })
            ] }, z);
          }
          const L = I.type === "bar";
          return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
            /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
            D.map((j, R) => {
              const H = y.get(j.cat) ?? 0;
              let V = 0;
              if (I.stack)
                for (let ae = 0; ae < z; ae++) {
                  const be = e[ae];
                  if (be?.stack !== I.stack) continue;
                  const ke = be.data.find((Be) => String(Be[be.categoryProperty] ?? "") === j.cat);
                  ke && (V += Number(ke[be.valueProperty]) || 0);
                }
              const Y = V + j.val, ee = e.filter((ae) => !ae.stack || ae.stack === I.stack).length, te = f / $.length, ue = L ? 18 : Math.max(12, te / (I.stack ? 1 : e.length) - 4), U = L ? _.l + V / (m.max - m.min || 1) * f : w(H) - ue / 2 + (I.stack ? 0 : z % ee * ue), X = L ? _.t + H * g / $.length + 4 : v(Y), P = L ? j.val / (m.max - m.min || 1) * f : ue - 4, se = L ? 16 : v(V) - v(Y), J = L ? _.l + V / (m.max - m.min || 1) * f : U, ce = L ? _.t + H * g / $.length + 4 : X;
              return /* @__PURE__ */ S("g", { role: "listitem", children: [
                /* @__PURE__ */ n(
                  "rect",
                  {
                    x: J,
                    y: ce,
                    width: L ? P : ue - 4,
                    height: se,
                    fill: O,
                    rx: 2,
                    onMouseEnter: () => h && d({ x: J + (L ? P : ue) / 2, y: ce, text: `${I.title ?? j.cat}: ${j.val}` }),
                    onMouseLeave: () => d(null),
                    onClick: () => o?.({ seriesTitle: I.title ?? "", category: j.cat, value: j.val, item: j.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                I.labels?.visible && /* @__PURE__ */ n("text", { x: J + (L ? P : ue) / 2, y: ce - 4, textAnchor: "middle", className: st.dataLabel, children: j.val })
              ] }, R);
            })
          ] }, z);
        });
      })()
    ] }),
    p && /* @__PURE__ */ n("div", { className: st.tooltip, style: { left: p.x, top: p.y - 28 }, children: p.text }),
    c && /* @__PURE__ */ n("div", { className: st.legend, children: e.map((u, x) => /* @__PURE__ */ S("span", { className: st.legendItem, children: [
      /* @__PURE__ */ n("span", { className: st.swatch, style: { backgroundColor: E(x, u) }, "aria-hidden": "true" }),
      u.title ?? `Series ${x + 1}`
    ] }, x)) }),
    /* @__PURE__ */ S("table", { className: st.visuallyHidden, id: `${s.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ n("caption", { children: s }),
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ S("tr", { children: [
        /* @__PURE__ */ n("th", { children: "Series" }),
        /* @__PURE__ */ n("th", { children: "Category" }),
        /* @__PURE__ */ n("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ n("tbody", { children: e.map(
        (u) => u.data.map((x, C) => /* @__PURE__ */ S("tr", { children: [
          /* @__PURE__ */ n("td", { children: u.title ?? "" }),
          /* @__PURE__ */ n("td", { children: String(x[u.categoryProperty] ?? "") }),
          /* @__PURE__ */ n("td", { children: String(x[u.valueProperty] ?? "") })
        ] }, `${u.title}-${C}`))
      ) })
    ] })
  ] });
}
export {
  Gi as ALERT_ICON,
  xb as Accordion,
  ib as Alert,
  $b as Autocomplete,
  yb as Avatar,
  Ay as Badge,
  l2 as Barcode,
  pb as Body,
  Xb as Breadcrumb,
  Iy as Button,
  jy as Card,
  Jb as Carousel,
  i2 as Chart,
  rb as Checkbox,
  Sb as Checkboxlist,
  Ab as Colorpicker,
  ub as Column,
  kn as DEFAULT_OPERATOR_BY_TYPE,
  ch as DEFAULT_PALETTE,
  Jy as DataFilter,
  Qy as DataGrid,
  eb as DataList,
  Tb as Datepicker,
  sb as Dialog,
  Kb as DropZone,
  wb as Dropdown,
  Py as EmptyState,
  Hr as FILTER_OPERATORS,
  Vb as FabMenu,
  By as Field,
  Df as Footer,
  Fy as Form,
  n2 as Gantt,
  Cf as Header,
  Ce as Icon,
  nb as Input,
  tb as Label,
  _b as Layout,
  Nb as Listbox,
  Ib as Mask,
  Hb as Menu,
  jb as Numeric,
  za as Pager,
  Ub as PanelMenu,
  Eb as Password,
  e2 as PickList,
  r2 as Pivot,
  Wb as ProfileMenu,
  hb as Progress,
  a2 as QRCode,
  Db as Radiobuttonlist,
  Rb as Rating,
  db as Row,
  t2 as Scheduler,
  Bb as SecurityCode,
  gn as Select,
  Mb as Selectbar,
  Lf as Sidebar,
  Fb as SignaturePad,
  cb as Skeleton,
  Lb as Slider,
  Cb as Splitbutton,
  Yb as Splitter,
  fb as Stack,
  Ry as Stat,
  Gb as Steps,
  ql as Switch,
  Ly as Table,
  bb as Tabs,
  vb as Textarea,
  Ob as Textbox,
  gb as ThemeSwitcher,
  o2 as Timeline,
  Pb as Timespanpicker,
  lb as ToastProvider,
  Zb as Toc,
  zb as Togglebutton,
  ob as Tooltip,
  Qb as Tree,
  kb as Typography,
  qb as Upload,
  s2 as VirtualGrid,
  Wr as applyFilters,
  Ta as applyGridState,
  wn as columnValue,
  Xy as compare,
  Yy as custom,
  Ia as cycleSort,
  Ra as defaultOperatorForType,
  Ky as email,
  Sr as formatMasked,
  yr as formatValue,
  Xn as getByPath,
  Ty as iconNames,
  Ur as matchesFilters,
  Wy as maxLength,
  Uy as minLength,
  Aa as paginate,
  Hy as pattern,
  Vy as range,
  qy as required,
  Gy as requiredTrue,
  ir as resolveVariant,
  Rs as runValidators,
  mb as shadeClass,
  Qs as sortItems,
  ja as sortedItems,
  Xs as toFilterString,
  Js as toODataFilterString,
  Ts as useFormContext,
  Zy as useFormField,
  Xr as useMediaQuery,
  ab as useToast
};
