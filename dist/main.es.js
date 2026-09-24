import { jsxs as S, jsx as n, Fragment as Ee } from "react/jsx-runtime";
import { forwardRef as He, useId as Ye, isValidElement as jn, cloneElement as Br, useState as X, useRef as ae, useCallback as H, useMemo as $e, useContext as Fr, createContext as Hr, useEffect as we, Fragment as Jr, Children as Qr, useImperativeHandle as ir } from "react";
const eo = "_button_s0xs9_1", to = "_filled_s0xs9_29", no = "_flat_s0xs9_30", ro = "_outlined_s0xs9_31", oo = "_text_s0xs9_32", so = "_primary_s0xs9_211", ao = "_secondary_s0xs9_213", lo = "_ghost_s0xs9_215", io = "_danger_s0xs9_217", co = "_success_s0xs9_219", uo = "_info_s0xs9_221", fo = "_loading_s0xs9_225", _o = "_spinner_s0xs9_228", po = "_xs_s0xs9_240", ho = "_sm_s0xs9_246", mo = "_md_s0xs9_252", go = "_lg_s0xs9_258", bo = "_xl_s0xs9_264", yo = "_iconOnly_s0xs9_270", xo = "_fullWidth_s0xs9_296", kt = {
  button: eo,
  filled: to,
  flat: no,
  outlined: ro,
  text: oo,
  "style-primary": "_style-primary_s0xs9_35",
  "tone-primary": "_tone-primary_s0xs9_35",
  "style-secondary": "_style-secondary_s0xs9_41",
  "tone-secondary": "_tone-secondary_s0xs9_41",
  "style-base": "_style-base_s0xs9_47",
  "style-light": "_style-light_s0xs9_52",
  "style-dark": "_style-dark_s0xs9_57",
  "style-danger": "_style-danger_s0xs9_63",
  "tone-danger": "_tone-danger_s0xs9_63",
  "style-success": "_style-success_s0xs9_69",
  "tone-success": "_tone-success_s0xs9_69",
  "style-warning": "_style-warning_s0xs9_75",
  "tone-warning": "_tone-warning_s0xs9_75",
  "style-info": "_style-info_s0xs9_81",
  "tone-info": "_tone-info_s0xs9_81",
  "shade-lighter": "_shade-lighter_s0xs9_185",
  "shade-light": "_shade-light_s0xs9_185",
  "shade-dark": "_shade-dark_s0xs9_187",
  "shade-darker": "_shade-darker_s0xs9_188",
  primary: so,
  secondary: ao,
  ghost: lo,
  danger: io,
  success: co,
  info: uo,
  loading: fo,
  spinner: _o,
  "dx-spin": "_dx-spin_s0xs9_1",
  xs: po,
  sm: ho,
  md: mo,
  lg: go,
  xl: bo,
  iconOnly: yo,
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
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", s = t;
  if (r) {
    const h = vo[e];
    return { variant: h.variant, style: s ?? h.style };
  }
  const l = e ?? "filled";
  return { variant: l === "filled" || l === "flat" || l === "outlined" || l === "text" ? l : "filled", style: s ?? "primary" };
}
const Rb = He(function({
  variant: t = "filled",
  severity: r,
  shade: s = "default",
  size: l = "md",
  fullWidth: c = !1,
  iconOnly: h = !1,
  loading: o = !1,
  visible: a = !0,
  className: i,
  type: p = "button",
  disabled: d,
  children: $,
  ...y
}, N) {
  if (a === !1) return null;
  const w = ko(t, r), b = s !== "default" ? `shade-${s}` : null, u = [
    kt.button,
    kt[w.variant],
    kt[`style-${w.style}`],
    // backwards-compat: tone-* still emitted
    kt[`tone-${w.style}`],
    b ? kt[b] : null,
    kt[l],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    t && kt[t] ? kt[t] : null,
    c ? kt.fullWidth : null,
    h ? kt.iconOnly : null,
    o ? kt.loading : null,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ S(
    "button",
    {
      ref: N,
      type: p,
      className: u,
      disabled: d || o,
      "aria-busy": o || void 0,
      ...y,
      children: [
        o ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: kt.spinner }) : null,
        $
      ]
    }
  );
}), wo = "_card_nz90o_1", $o = "_elevated_nz90o_8", No = "_filled_nz90o_13", So = "_outlined_nz90o_18", Do = "_interactive_nz90o_22", Mo = "_text_nz90o_30", zo = "_header_nz90o_46", Co = "_body_nz90o_53", Oo = "_footer_nz90o_63", gn = {
  card: wo,
  elevated: $o,
  filled: No,
  outlined: So,
  interactive: Do,
  text: Mo,
  header: zo,
  body: Co,
  footer: Oo
}, Pb = He(function({ variant: t = "elevated", header: r, footer: s, className: l, visible: c = !0, children: h, onKeyDown: o, ...a }, i) {
  if (c === !1) return null;
  const p = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ S(
      "div",
      {
        ref: i,
        role: p ? "button" : void 0,
        tabIndex: p ? 0 : void 0,
        onKeyDown: (d) => {
          o?.(d), !(!p || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [gn.card, gn[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          r != null && /* @__PURE__ */ n("div", { className: gn.header, children: r }),
          /* @__PURE__ */ n("div", { className: gn.body, children: h }),
          s != null && /* @__PURE__ */ n("div", { className: gn.footer, children: s })
        ]
      }
    )
  );
});
function cr(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Eo = "_badge_fbxod_1", Io = "_xs_fbxod_14", Ao = "_sm_fbxod_19", To = "_md_fbxod_24", jo = "_lg_fbxod_29", Lo = "_xl_fbxod_34", Ro = "_neutral_fbxod_40", Po = "_primary_fbxod_45", Bo = "_secondary_fbxod_50", Fo = "_light_fbxod_55", Ho = "_base_fbxod_60", Ko = "_dark_fbxod_65", qo = "_info_fbxod_70", Uo = "_success_fbxod_75", Wo = "_warning_fbxod_80", Vo = "_danger_fbxod_85", Xo = "_filled_fbxod_92", Go = "_outlined_fbxod_142", Yo = "_text_fbxod_194", bn = {
  badge: Eo,
  xs: Io,
  sm: Ao,
  md: To,
  lg: jo,
  xl: Lo,
  neutral: Ro,
  primary: Po,
  secondary: Bo,
  light: Fo,
  base: Ho,
  dark: Ko,
  info: qo,
  success: Uo,
  warning: Wo,
  danger: Vo,
  filled: Xo,
  outlined: Go,
  text: Yo,
  "shade-lighter": "_shade-lighter_fbxod_346",
  "shade-light": "_shade-light_fbxod_346",
  "shade-dark": "_shade-dark_fbxod_348",
  "shade-darker": "_shade-darker_fbxod_349"
}, Bb = He(function({ severity: t = "primary", variant: r = "filled", shade: s, size: l = "md", className: c, visible: h = !0, children: o, ...a }, i) {
  if (h === !1) return null;
  const p = t, d = cr(r, "filled"), $ = s && s !== "default" ? `shade-${s}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: i,
      className: [bn.badge, bn[l], bn[p], bn[d], $ ? bn[$] : null, c].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Zo = "_xs_1t3wj_2", Jo = "_sm_1t3wj_7", Qo = "_md_1t3wj_1", es = "_lg_1t3wj_17", ts = "_xl_1t3wj_22", ns = {
  xs: Zo,
  sm: Jo,
  md: Qo,
  lg: es,
  xl: ts
}, Fb = [
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
}, Ce = He(function({ name: t, size: r = "md", strokeWidth: s = 2, className: l, ...c }, h) {
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
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: rs[t]
    }
  );
}), os = "_stat_lffej_1", ss = "_label_lffej_8", as = "_row_lffej_16", ls = "_value_lffej_22", is = "_delta_lffej_28", cs = "_success_lffej_33", ds = "_danger_lffej_37", us = "_neutral_lffej_41", fs = "_hint_lffej_45", Jt = {
  stat: os,
  label: ss,
  row: as,
  value: ls,
  delta: is,
  success: cs,
  danger: ds,
  neutral: us,
  hint: fs
}, Hb = He(function({ label: t, value: r, delta: s, deltaTone: l = "neutral", hint: c, className: h, ...o }, a) {
  return /* @__PURE__ */ S("div", { ref: a, className: [Jt.stat, h].filter(Boolean).join(" "), ...o, children: [
    /* @__PURE__ */ n("div", { className: Jt.label, children: t }),
    /* @__PURE__ */ S("div", { className: Jt.row, children: [
      /* @__PURE__ */ n("div", { className: Jt.value, children: r }),
      s != null && /* @__PURE__ */ n("div", { className: [Jt.delta, Jt[l]].join(" "), children: s })
    ] }),
    c != null && /* @__PURE__ */ n("div", { className: Jt.hint, children: c })
  ] });
}), _s = "_wrap_1v2ev_1", ps = "_table_1v2ev_8", hs = "_caption_1v2ev_14", ms = "_none_1v2ev_51", gs = "_horizontal_1v2ev_57", bs = "_vertical_1v2ev_67", ys = "_alternating_1v2ev_85", xs = "_start_1v2ev_89", vs = "_center_1v2ev_93", ks = "_end_1v2ev_97", ws = "_empty_1v2ev_101", Wt = {
  wrap: _s,
  table: ps,
  caption: hs,
  none: ms,
  horizontal: gs,
  vertical: bs,
  alternating: ys,
  start: xs,
  center: vs,
  end: ks,
  empty: ws
};
function Kb({
  columns: e,
  rows: t,
  rowKey: r,
  empty: s,
  caption: l,
  gridLines: c = "default",
  allowAlternatingRows: h = !0,
  className: o,
  visible: a = !0
}) {
  if (a === !1) return null;
  const i = c === "default" || c === "both" ? "" : Wt[c];
  return /* @__PURE__ */ S("div", { className: [Wt.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S(
      "table",
      {
        className: [
          Wt.table,
          i,
          h ? Wt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ n("caption", { className: Wt.caption, children: l }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "th",
            {
              className: p.align != null ? Wt[p.align] : void 0,
              scope: "col",
              children: p.header
            },
            p.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((p) => /* @__PURE__ */ n("tr", { children: e.map((d) => /* @__PURE__ */ n(
            "td",
            {
              className: d.align != null ? Wt[d.align] : void 0,
              children: d.render != null ? d.render(p) : p[d.key]
            },
            d.key
          )) }, r(p))) })
        ]
      }
    ),
    t.length === 0 && s != null && /* @__PURE__ */ n("div", { className: Wt.empty, children: s })
  ] });
}
const $s = "_emptyState_uurdd_1", Ns = "_icon_uurdd_13", Ss = "_title_uurdd_18", Ds = "_description_uurdd_24", Ms = "_action_uurdd_30", yn = {
  emptyState: $s,
  icon: Ns,
  title: Ss,
  description: Ds,
  action: Ms
};
function qb({ icon: e, title: t, description: r, action: s, className: l, visible: c = !0 }) {
  return c === !1 ? null : /* @__PURE__ */ S("div", { className: [yn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: yn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: yn.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: yn.description, children: r }),
    s != null && /* @__PURE__ */ n("div", { className: yn.action, children: s })
  ] });
}
const zs = "_field_2mpbc_1", Cs = "_label_2mpbc_8", Os = "_required_2mpbc_14", Es = "_hint_2mpbc_19", Is = "_error_2mpbc_24", xn = {
  field: zs,
  label: Cs,
  required: Os,
  hint: Es,
  error: Is
};
function Ub({ label: e, htmlFor: t, required: r, hint: s, supporting: l, error: c, children: h, className: o, visible: a = !0 }) {
  const i = s ?? l, p = Ye(), d = Ye(), $ = Ye();
  if (a === !1) return null;
  const y = c != null ? d : i != null ? $ : null, N = typeof h == "function" ? h({ inputId: p, hintId: $, errorId: d }) : h, w = jn(N) && typeof N.props.id == "string" ? N.props.id : void 0, b = w ?? t ?? p, u = jn(N) && (y != null || w == null && typeof N.type == "string"), f = w != null || t != null || u, m = u && jn(N) ? Br(
    N,
    {
      id: b,
      "aria-describedby": y != null ? [
        N.props["aria-describedby"],
        y
      ].filter((k) => typeof k == "string").join(" ") || void 0 : N.props["aria-describedby"],
      "aria-invalid": c != null ? !0 : N.props["aria-invalid"]
    }
  ) : N;
  return /* @__PURE__ */ S("div", { className: [xn.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ S("label", { className: xn.label, htmlFor: f ? b : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ n("span", { className: xn.required, "aria-hidden": "true", children: "*" })
    ] }),
    m,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: xn.error, "aria-live": "polite", children: c }) : i != null ? /* @__PURE__ */ n("div", { id: $, className: xn.hint, children: i }) : null
  ] });
}
const As = "_form_fwqyn_1", Ts = {
  form: As
}, Kr = Hr(null);
function js() {
  const e = Fr(Kr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Wb({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: s,
  method: l,
  children: c,
  className: h
}) {
  const [o, a] = X({}), [i, p] = X(0), d = ae(o);
  d.current = o;
  const $ = H((m) => {
    a((k) => k[m.name] === m ? k : { ...k, [m.name]: m });
  }, []), y = H((m) => {
    a((k) => {
      if (!(m in k)) return k;
      const x = { ...k };
      return delete x[m], x;
    });
  }, []), N = H(() => {
    const m = {};
    for (const k of Object.values(d.current)) {
      const x = k.validate();
      x.length > 0 && (m[k.name] = x);
    }
    return m;
  }, []), w = H(() => {
    const m = N();
    p((k) => k + 1), Object.keys(m).length === 0 ? t?.(e) : r?.(m);
  }, [N, e, t, r]), b = (m) => {
    s != null && l != null || (m.preventDefault(), w());
  }, u = $e(
    () => ({ registerField: $, unregisterField: y, submit: w, submitCount: i }),
    [$, y, w, i]
  ), f = [Ts.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Kr.Provider, { value: u, children: /* @__PURE__ */ n("form", { className: f, onSubmit: b, action: s, method: l, noValidate: !0, children: c }) });
}
const sn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Vb = (e = "Required") => (t) => sn(t) ? e : null, Xb = (e = "Invalid email") => (t) => sn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Gb = (e, t = "Invalid format") => (r) => sn(r) || e.test(String(r)) ? null : t, Yb = (e, t = `Minimum ${e} characters`) => (r) => sn(r) || String(r).length >= e ? null : t, Zb = (e, t = `Maximum ${e} characters`) => (r) => sn(r) || String(r).length <= e ? null : t, Jb = (e, t, r = `Between ${e} and ${t}`) => (s) => {
  if (sn(s)) return null;
  const l = Number(s);
  return !Number.isNaN(l) && l >= e && l <= t ? null : r;
}, Qb = (e, t = "Values do not match") => (r, s) => {
  if (sn(r)) return null;
  const l = typeof e == "function" ? e(s) : e;
  return r === l ? null : t;
}, ey = (e = "Required") => (t) => t === !0 ? null : e, ty = (e) => (t, r) => e(t, r);
function Ls(e, t, r) {
  return e.map((s) => s(t, r)).filter((s) => s != null);
}
function ny(e, t) {
  const { registerField: r, unregisterField: s, submitCount: l } = js(), [c, h] = X(t?.initialValue), [o, a] = X(!1), [i, p] = X(!1), d = ae(() => []);
  d.current = () => Ls(t?.validate ?? [], c), we(() => (r({ name: e, validate: () => d.current() }), () => s(e)), [e, r, s]), we(() => {
    l > 0 && (a(!0), p(!1));
  }, [l]);
  const $ = o && !i ? d.current() : [];
  return { value: c, setValue: (N) => {
    h(N), p(!0);
  }, errors: $ };
}
const Rs = "_select_1j4dh_1", Ps = "_invalid_1j4dh_33", Bs = "_xs_1j4dh_40", Fs = "_sm_1j4dh_48", Hs = "_md_1j4dh_56", Ks = "_lg_1j4dh_62", qs = "_xl_1j4dh_68", Yn = {
  select: Rs,
  invalid: Ps,
  xs: Bs,
  sm: Fs,
  md: Hs,
  lg: Ks,
  xl: qs
}, mn = He(function({ size: t = "md", invalid: r = !1, options: s, children: l, className: c, ...h }, o) {
  return /* @__PURE__ */ n(
    "select",
    {
      ref: o,
      className: [Yn.select, Yn[t], r ? Yn.invalid : null, c].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...h,
      children: s != null ? s.map((a) => /* @__PURE__ */ n("option", { value: a.value, disabled: a.disabled, children: a.label }, a.value)) : l
    }
  );
}), qr = [
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
], vn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Us = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"];
function Ws(e) {
  return Us.includes(e);
}
function Xn(e, t) {
  return t.split(".").reduce((r, s) => {
    if (r != null)
      return r[s];
  }, e);
}
function fr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function An(e, t) {
  const r = fr(e), s = fr(t);
  if (typeof r == "number" && typeof s == "number") return r - s;
  const l = String(r ?? ""), c = String(s ?? "");
  return l < c ? -1 : l > c ? 1 : 0;
}
function Gn(e) {
  if (e.secondOperator == null) return !1;
  if (Ws(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function _r(e, t, r) {
  const s = Xn(t, e.property), l = pr(s, e.value, e.operator, r);
  if (!Gn(e)) return l;
  const c = pr(s, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? l && c : l || c;
}
function pr(e, t, r, s) {
  const l = s === "CaseInsensitive", c = (a) => l && typeof a == "string" ? a.toLowerCase() : a, h = c(e), o = c(t);
  switch (r) {
    case "Equals":
      return h === o || Array.isArray(h) && h.some((a) => c(a) === o);
    case "NotEquals":
      return h !== o && !(Array.isArray(h) && h.some((a) => c(a) === o));
    case "LessThan":
      return An(h, o) < 0;
    case "LessThanOrEquals":
      return An(h, o) <= 0;
    case "GreaterThan":
      return An(h, o) > 0;
    case "GreaterThanOrEquals":
      return An(h, o) >= 0;
    case "Contains":
      return typeof h == "string" && typeof o == "string" && h.includes(o);
    case "StartsWith":
      return typeof h == "string" && typeof o == "string" && h.startsWith(o);
    case "EndsWith":
      return typeof h == "string" && typeof o == "string" && h.endsWith(o);
    case "DoesNotContain":
      return typeof h == "string" && typeof o == "string" && !h.includes(o);
    case "In":
      return Array.isArray(o) && o.some((a) => c(a) === h);
    case "NotIn":
      return Array.isArray(o) && !o.some((a) => c(a) === h);
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
  const s = r.logicalOperator ?? "And", l = r.caseSensitivity ?? "CaseInsensitive";
  if (dr(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? s;
    return t.filters[c === "Or" ? "some" : "every"](
      (h) => Ur(e, h, { logicalOperator: c, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", _r(t, e, l);
}
function Wr(e, t, r = {}) {
  return e.filter((s) => Ur(s, t, r));
}
function Vs(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${Vs(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function Xs(e) {
  const t = (l, c) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${gt(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${gt(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${gt(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${gt(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${gt(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${gt(c)})`;
      case "Contains":
        return `${e.property}.Contains(${gt(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${gt(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${gt(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${gt(c)})`;
      case "In":
        return `${e.property}.In(${gt(c)})`;
      case "NotIn":
        return `!${e.property}.In(${gt(c)})`;
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
  if (!Gn(e))
    return t(e.operator, e.value);
  const r = e.logicalOperator ?? "And", s = e.secondOperator;
  return `(${t(e.operator, e.value)} ${r} ${t(
    s,
    e.secondValue
  )})`;
}
function Gs(e) {
  return dr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Gs).filter(Boolean).join(` ${e.operator} `)})` : Xs(e);
}
function Ys(e) {
  return e.replace(/'/g, "''");
}
const Zs = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Js(e, t) {
  const r = e.property, s = t === "CaseInsensitive", l = (i) => s ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${Ys(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), h = (i, p) => {
    const d = typeof p == "string", $ = d && s ? l(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${$} ${Zs[i]} ${d && s ? l(c(p)) : c(p)}`;
      case "Contains":
        return `contains(${l(r)}, ${l(c(p))})`;
      case "StartsWith":
        return `startswith(${l(r)}, ${l(c(p))})`;
      case "EndsWith":
        return `endswith(${l(r)}, ${l(c(p))})`;
      case "DoesNotContain":
        return `not(contains(${l(r)}, ${l(c(p))}))`;
      case "In":
        return Array.isArray(p) ? `${$} in (${p.map((y) => c(y)).join(", ")})` : `${$} in (${c(p)})`;
      case "NotIn":
        return Array.isArray(p) ? `not(${$} in (${p.map((y) => c(y)).join(", ")}))` : `not(${$} in (${c(p)}))`;
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
  if (!Gn(e))
    return h(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${h(e.operator, e.value)} ${o} ${h(
    a,
    e.secondValue
  )})`;
}
function Qs(e, t = {}) {
  const r = t.caseSensitivity ?? "CaseInsensitive";
  if (dr(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Qs(l, { caseSensitivity: r })).filter(Boolean).join(` ${s} `)})`;
  }
  return Js(e, r);
}
function ea(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, s) => {
    for (const l of t) {
      const c = l.sortOrder === "Ascending" ? 1 : -1, h = An(Xn(r, l.property), Xn(s, l.property));
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const ta = "_filter_1nhm8_1", na = "_rows_1nhm8_9", ra = "_row_1nhm8_9", oa = "_join_1nhm8_21", sa = "_property_1nhm8_30", aa = "_operator_1nhm8_34", la = "_value_1nhm8_38", ia = "_remove_1nhm8_42", ca = "_bar_1nhm8_58", da = "_add_1nhm8_64", ua = "_custom_1nhm8_78", fa = "_summary_1nhm8_82", _a = "_second_1nhm8_87", pa = "_secondAdd_1nhm8_91", ha = "_addSecond_1nhm8_95", ma = "_joinSelect_1nhm8_109", Ge = {
  filter: ta,
  rows: na,
  row: ra,
  join: oa,
  property: sa,
  operator: aa,
  value: la,
  remove: ia,
  bar: ca,
  add: da,
  custom: ua,
  summary: fa,
  second: _a,
  secondAdd: pa,
  addSecond: ha,
  joinSelect: ma
}, kn = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], hr = {
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
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      mn,
      {
        "aria-label": e.title ?? e.name,
        className: Ge.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => r(c.target.value)
      }
    );
  if (s === "boolean")
    return /* @__PURE__ */ n(
      mn,
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
  const l = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ge.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (c) => r(s === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value)
    }
  );
}
function ry({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: l = !1,
  className: c,
  viewChanged: h,
  items: o,
  children: a
}) {
  const [i, p] = X(
    () => s != null && s.length > 0 ? s.map((u, f) => ({ id: f, ...u })) : [{ id: 0, property: e[0]?.name ?? "", operator: vn[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (u, f) => {
    p((m) => m.map((k) => k.id === u ? { ...k, ...f } : k));
  }, $ = () => {
    const u = i[i.length - 1], f = Math.max(0, ...i.map((k) => k.id)) + 1, m = e[0];
    p((k) => [
      ...k,
      {
        id: f,
        property: u?.property ?? m?.name ?? "",
        operator: vn[e.find((x) => x.name === (u?.property ?? m?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, y = (u) => {
    p((f) => f.length > 1 ? f.filter((m) => m.id !== u) : f);
  }, N = $e(() => {
    const u = [];
    for (const f of i) {
      if (f.property === "" || (f.value == null || f.value === "") && !kn.includes(f.operator)) continue;
      const k = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: x } = f;
      x != null && Gn(f) && (k.secondOperator = x, k.secondValue = f.secondValue, k.logicalOperator = f.logicalOperator ?? "And"), u.push(k);
    }
    return u;
  }, [i]), w = $e(() => o == null || N.length === 0 ? o : Wr(o, { operator: t, filters: N }, { caseSensitivity: r }), [o, N, t, r]);
  we(() => {
    h != null && o != null && h(w ?? []);
  }, [w]);
  const b = (u) => e.find((f) => f.name === u) ?? { name: u, type: "string" };
  return /* @__PURE__ */ S("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: i.map((u, f) => {
      const m = b(u.property), k = l ? [vn[m.type ?? "string"]] : qr, x = !kn.includes(u.operator), E = u.secondOperator != null;
      return /* @__PURE__ */ S(Jr, { children: [
        /* @__PURE__ */ S("div", { className: Ge.row, children: [
          f > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: Ge.property,
              value: u.property,
              onChange: (_) => {
                const v = e.find((O) => O.name === _.target.value);
                d(u.id, {
                  property: _.target.value,
                  operator: vn[v?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((_) => ({ value: _.name, label: _.title ?? _.name }))
            }
          ),
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: Ge.operator,
              value: u.operator,
              onChange: (_) => {
                const v = _.target.value;
                d(
                  u.id,
                  kn.includes(v) ? {
                    operator: v,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: v }
                );
              },
              options: k.map((_) => ({ value: _, label: hr[_] }))
            }
          ),
          x ? /* @__PURE__ */ n(mr, { property: m, value: u.value, onChange: (_) => d(u.id, { value: _ }) }) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => y(u.id),
              children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
            }
          )
        ] }),
        x ? E ? /* @__PURE__ */ S("div", { className: [Ge.row, Ge.second].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${f + 1} second-operator logic`,
              className: Ge.joinSelect,
              value: u.logicalOperator ?? "And",
              onChange: (_) => d(u.id, { logicalOperator: _.target.value }),
              options: [
                { value: "And", label: "And" },
                { value: "Or", label: "Or" }
              ]
            }
          ),
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${f + 1} second operator`,
              className: Ge.operator,
              value: u.secondOperator,
              onChange: (_) => {
                const v = _.target.value;
                d(
                  u.id,
                  kn.includes(v) ? { secondOperator: v, secondValue: void 0 } : { secondOperator: v }
                );
              },
              options: k.map((_) => ({
                value: _,
                label: hr[_]
              }))
            }
          ),
          u.secondOperator == null || !kn.includes(u.secondOperator) ? /* @__PURE__ */ n(
            mr,
            {
              property: m,
              value: u.secondValue,
              onChange: (_) => d(u.id, { secondValue: _ })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove second condition ${f + 1}`,
              onClick: () => d(u.id, {
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
            onClick: () => d(u.id, {
              secondOperator: vn[m.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, u.id);
    }) }),
    /* @__PURE__ */ S("div", { className: Ge.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ge.add, onClick: $, children: "Add filter" }),
      a != null ? /* @__PURE__ */ n("div", { className: Ge.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ S("span", { className: Ge.summary, "aria-live": "polite", children: [
        w?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const ga = "_pager_1smhm_1", ba = "_alignLeft_1smhm_10", ya = "_alignCenter_1smhm_14", xa = "_alignRight_1smhm_18", va = "_alignJustify_1smhm_22", ka = "_summary_1smhm_26", wa = "_controls_1smhm_31", $a = "_button_1smhm_37", Na = "_active_1smhm_73", Sa = "_ellipsis_1smhm_85", Da = "_size_1smhm_91", lt = {
  pager: ga,
  alignLeft: ba,
  alignCenter: ya,
  alignRight: xa,
  alignJustify: va,
  summary: ka,
  controls: wa,
  button: $a,
  active: Na,
  ellipsis: Sa,
  size: Da
};
function Ma(e, t, r, s) {
  return e.replace("{0}", String(t)).replace("{1}", String(r)).replace("{2}", String(s));
}
function gr(e, t) {
  return e.replace("{0}", String(t));
}
function za(e, t, r) {
  if (t <= r) return Array.from({ length: t }, (o, a) => a + 1);
  const s = Math.floor(r / 2);
  let l = Math.max(1, e - s);
  const c = Math.min(t, l + r - 1);
  l = Math.max(1, c - r + 1);
  const h = [];
  for (let o = l; o <= c; o++) h.push(o);
  return l > 2 && h.unshift("ellipsis"), l > 1 && h.unshift(1), c < t - 1 && h.push("ellipsis"), c < t && h.push(t), h;
}
function Ca({
  count: e,
  pageSize: t,
  page: r,
  pageNumber: s,
  defaultPage: l = 1,
  pageSizeOptions: c,
  pageNumbersCount: h = 5,
  alwaysVisible: o = !1,
  horizontalAlign: a = "left",
  showPagingSummary: i,
  showSummary: p,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: $ = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: y,
  summaryTemplate: N,
  pageSizeText: w = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: u = "Previous page",
  nextPageTitle: f = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: k = "Page {0}",
  pageAriaLabelFormat: x = "Page {0}",
  onPageChange: E,
  onPageSizeChange: _,
  ariaLabel: v = "Pagination",
  className: O,
  visible: I = !0
}) {
  const z = r ?? s ?? l, [D, g] = X(z), C = r !== void 0 || s !== void 0, P = C ? z : D, A = Math.max(1, Math.ceil(e / t)), j = Math.min(Math.max(1, P), A), U = i ?? p ?? !0, V = o || A > 1, J = za(j, A, h), Z = H(
    (q) => {
      const L = Math.min(Math.max(1, q), A);
      C || g(L);
      const te = (L - 1) * t;
      E?.({ page: L, skip: te, top: t, pageCount: A, pageSize: t });
    },
    [C, E, A, t]
  ), ee = a === "center" ? lt.alignCenter : a === "right" ? lt.alignRight : a === "justify" ? lt.alignJustify : lt.alignLeft, ue = { count: e, pageNumber: j, pageSize: t, pageCount: A }, ie = (q) => {
    const L = Array.from(q.currentTarget.querySelectorAll("button[data-pager-page]")), te = L.indexOf(document.activeElement);
    te !== -1 && (q.key === "ArrowRight" || q.key === "ArrowDown" ? (q.preventDefault(), (L[te + 1] ?? L[0])?.focus()) : q.key === "ArrowLeft" || q.key === "ArrowUp" ? (q.preventDefault(), (L[te - 1] ?? L[L.length - 1])?.focus()) : q.key === "Home" ? (q.preventDefault(), L[0]?.focus()) : q.key === "End" && (q.preventDefault(), L[L.length - 1]?.focus()));
  };
  return I === !1 || !V ? null : /* @__PURE__ */ S("nav", { className: [lt.pager, ee, O].filter(Boolean).join(" "), "aria-label": v, children: [
    U && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: y ? y(ue) : N ? N({ count: e, pageNumber: j, pageSize: t }) : Ma($, j, A, e) }),
    /* @__PURE__ */ S("div", { className: lt.controls, role: "group", "aria-label": v, onKeyDown: ie, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j <= 1,
          onClick: () => Z(1),
          "aria-label": b,
          title: b,
          children: "«"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j <= 1,
          onClick: () => Z(j - 1),
          "aria-label": u,
          title: u,
          children: "‹"
        }
      ),
      J.map(
        (q, L) => q === "ellipsis" ? /* @__PURE__ */ n("span", { className: lt.ellipsis, "aria-hidden": "true", children: "…" }, `e${L}`) : /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "data-pager-page": q,
            className: [lt.button, q === j ? lt.active : ""].filter(Boolean).join(" "),
            "aria-current": q === j ? "page" : void 0,
            "aria-label": gr(x, q),
            title: gr(k, q),
            onClick: () => Z(q),
            children: q
          },
          q
        )
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: j >= A,
          onClick: () => Z(j + 1),
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
          disabled: j >= A,
          onClick: () => Z(A),
          "aria-label": m,
          title: m,
          children: "»"
        }
      )
    ] }),
    d && c && c.length > 0 && /* @__PURE__ */ S("label", { className: lt.size, children: [
      /* @__PURE__ */ n("span", { children: w }),
      /* @__PURE__ */ n(
        "select",
        {
          value: t,
          onChange: (q) => _?.(Number(q.target.value)),
          "aria-label": w,
          children: c.map((q) => /* @__PURE__ */ n("option", { value: q, children: q }, q))
        }
      )
    ] })
  ] });
}
function rr(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: s, showSummary: l, ...c } = e;
  return /* @__PURE__ */ n(
    Ca,
    {
      page: t,
      showPagingSummary: l,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: s ? (o) => s({ count: o.count, pageNumber: o.pageNumber, pageSize: o.pageSize }) : void 0,
      onPageChange: r ? (o) => r(o.page) : void 0,
      ...c
    }
  );
}
function Oa(e, t, r, s, l, c) {
  if (!t || !r) return e.map((a) => ({ type: "row", row: a }));
  const h = /* @__PURE__ */ new Map();
  e.forEach((a) => {
    const i = String(l(a, t) ?? ""), p = h.get(i);
    p ? p.push(a) : h.set(i, [a]);
  });
  const o = [];
  return h.forEach((a, i) => {
    const p = a[0], d = p != null ? l(p, t) : void 0;
    o.push({
      type: "group",
      group: { key: i, display: c(d), property: t, title: r.title ?? t, count: a.length }
    }), s.has(i) && a.forEach(($) => o.push({ type: "row", row: $ }));
  }), o;
}
function Rn(e, t) {
  return e.property ?? `col-${t}`;
}
function Ea(e, t) {
  const r = {};
  let s = 0;
  return e.forEach(({ key: l, column: c }) => {
    if (!c.frozen) return;
    r[l] = s === 0 ? "0px" : `${s}px`;
    const h = t[l] ?? c.width ?? "8rem";
    s += parseFloat(h);
  }), r;
}
function Ia(e, t) {
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
function br(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(t);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (t === "d" || t === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const yr = ["Ascending", "Descending", null];
function Aa(e, t, r = {}) {
  const s = e.find((c) => c.property === t), l = yr[(s ? yr.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((c) => c.property !== t) : r.multi ? [...e.filter((c) => c.property !== t), { property: t, sortOrder: l }] : [{ property: t, sortOrder: l }];
}
function Ta(e, t) {
  return ea(e, t);
}
function ja(e, t, r) {
  const s = Math.max(1, Math.ceil(e.length / r)), l = Math.min(Math.max(1, t), s), c = (l - 1) * r;
  return { items: e.slice(c, c + r), pageCount: s, pageNumber: l, total: e.length };
}
function La(e, t, r = {}) {
  const s = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(([o, a]) => ({
    property: o,
    operator: a.operator ?? "Contains",
    value: Ia(a.value, r.types?.[o] ?? "string")
  })), l = s.length > 0 ? Wr(e, { operator: r.logicalOperator ?? "And", filters: s }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, c = Ta(l, t.sorts);
  return { ...ja(c, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function Ra(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Pa = "_grid_kz335_1", Ba = "_toolbar_kz335_8", Fa = "_picker_kz335_13", Ha = "_pickerButton_kz335_17", Ka = "_pickerPanel_kz335_31", qa = "_pickerItem_kz335_46", Ua = "_groupPanel_kz335_55", Wa = "_groupPanelActive_kz335_66", Va = "_groupPanelText_kz335_70", Xa = "_groupChip_kz335_74", Ga = "_groupRemove_kz335_85", Ya = "_groupRow_kz335_94", Za = "_groupCell_kz335_98", Ja = "_groupToggle_kz335_103", Qa = "_editRow_kz335_116", el = "_editCell_kz335_120", tl = "_editInput_kz335_125", nl = "_commandCell_kz335_135", rl = "_commandButton_kz335_141", ol = "_data_kz335_156", sl = "_table_kz335_163", al = "_header_kz335_169", ll = "_center_kz335_181", il = "_right_kz335_185", cl = "_sortButton_kz335_189", dl = "_sortIndicator_kz335_207", ul = "_sortIndex_kz335_211", fl = "_cell_kz335_222", _l = "_clickable_kz335_236", pl = "_frozen_kz335_244", hl = "_selected_kz335_250", ml = "_resizeHandle_kz335_254", gl = "_filterCell_kz335_272", bl = "_filterSelect_kz335_280", yl = "_filterInput_kz335_290", xl = "_empty_kz335_301", vl = "_loading_kz335_307", kl = "_visuallyHidden_kz335_317", ge = {
  grid: Pa,
  toolbar: Ba,
  picker: Fa,
  pickerButton: Ha,
  pickerPanel: Ka,
  pickerItem: qa,
  groupPanel: Ua,
  groupPanelActive: Wa,
  groupPanelText: Va,
  groupChip: Xa,
  groupRemove: Ga,
  groupRow: Ya,
  groupCell: Za,
  groupToggle: Ja,
  editRow: Qa,
  editCell: el,
  editInput: tl,
  commandCell: nl,
  commandButton: rl,
  data: ol,
  table: sl,
  header: al,
  center: ll,
  right: il,
  sortButton: cl,
  sortIndicator: dl,
  sortIndex: ul,
  cell: fl,
  clickable: _l,
  frozen: pl,
  selected: hl,
  resizeHandle: ml,
  filterCell: gl,
  filterSelect: bl,
  filterInput: yl,
  empty: xl,
  loading: vl,
  visuallyHidden: kl
}, wl = {
  Ascending: "ascending",
  Descending: "descending"
};
function xr(e, t) {
  return e.filterable ?? t;
}
function $l(e, t) {
  return e.sortable ?? t;
}
function Nl(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function oy({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: s = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: c = !1,
  allowFiltering: h = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: i = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: $ = 5,
  pagerPosition: y = "Bottom",
  showPagingSummary: N = !0,
  showPageSizeSelector: w = !0,
  selectionMode: b = "None",
  selectedKeys: u,
  onSelectionChange: f,
  showColumnPicker: m = !1,
  columnPickerText: k = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: E = !1,
  allowGrouping: _ = !1,
  groupPanelText: v = "Drag a column header here to group",
  groupExpanded: O = !0,
  editMode: I = "None",
  allowRowCreate: z = !1,
  onRowUpdate: D,
  onRowCreate: g,
  onRowDelete: C,
  isLoading: P = !1,
  empty: A = "No records found",
  ariaLabel: j,
  className: U,
  onRowClick: V
}) {
  const [J, Z] = X([]), [ee, ue] = X(/* @__PURE__ */ new Map()), [ie, q] = X(1), [L, te] = X(p), [G, ce] = X(
    () => e.map((T, R) => Rn(T, R))
  ), [se, ye] = X(
    () => new Set(e.map((T, R) => T.visible !== !1 ? Rn(T, R) : "").filter(Boolean))
  ), [ke, Be] = X({}), [ve, We] = X(!1), [be, Ze] = X(null), [Ve, Re] = X(null), [tt, Qe] = X(null), [et, W] = X({}), M = ae(null), F = ae(null), ne = $e(() => {
    const T = /* @__PURE__ */ new Map();
    return e.forEach((R, le) => T.set(Rn(R, le), R)), T;
  }, [e]), fe = $e(
    () => G.filter((T) => se.has(T)).map((T) => ({ key: T, column: ne.get(T) })).filter((T) => T.column != null),
    [G, se, ne]
  ), re = $e(
    () => Ea(fe, ke),
    [fe, ke]
  ), me = I !== "None" || C != null || z, Ne = $e(
    () => La(t, { sorts: J, filters: ee, pageNumber: ie, pageSize: L }, {
      logicalOperator: a,
      caseSensitivity: o,
      types: Object.fromEntries(
        e.filter((T) => T.type != null && T.property != null).map((T) => [T.property, T.type])
      )
    }),
    [t, J, ee, ie, L, a, o, e]
  ), Fe = $e(
    () => be ? e.find((T) => T.property === be) : void 0,
    [be, e]
  ), Je = $e(
    () => Ve ?? new Set(O ? Ne.items.map((T) => String(wn(T, be ?? "") ?? "")) : []),
    [Ve, O, Ne.items, be]
  ), dt = $e(
    () => Oa(
      Ne.items,
      be ?? void 0,
      Fe,
      Je,
      wn,
      (T) => br(T, Fe?.format)
    ),
    [Ne.items, be, Fe, Je]
  ), xt = $e(
    () => be ? fe.filter((T) => T.column.property !== be) : fe,
    [fe, be]
  ), Q = (T) => {
    T !== "" && Z(Aa(J, T, { multi: l }));
  }, De = (T, R) => {
    ue((le) => {
      const he = new Map(le);
      return he.set(T, R), he;
    }), q(1);
  }, nt = (T) => {
    te(T), q(1);
  }, Ut = (T) => {
    if (b === "None") return;
    const R = r(T), le = u ?? [];
    let he;
    b === "Single" ? he = le.length === 1 && le[0] === R ? [] : [R] : he = le.includes(R) ? le.filter((Ie) => Ie !== R) : [...le, R], f?.(he);
  }, St = (T) => {
    V?.(T);
  }, Me = (T, R, le) => {
    M.current = { key: T, startX: R, startWidth: le };
  }, Xe = (T) => {
    const R = M.current;
    if (!R) return;
    const le = T - R.startX, he = Math.max(48, R.startWidth + le);
    Be((Ie) => ({ ...Ie, [R.key]: `${he}px` }));
  }, vt = () => {
    M.current = null;
  }, Lt = (T) => {
    F.current = T;
  }, Zt = (T) => {
    const R = F.current;
    F.current = null, !(!R || R === T) && ce((le) => {
      const he = [...le], Ie = he.indexOf(R), Ae = he.indexOf(T);
      return Ie < 0 || Ae < 0 ? le : (he.splice(Ie, 1), he.splice(Ae, 0, R), he);
    });
  }, K = (T) => {
    ye((R) => {
      const le = new Set(R);
      return le.has(T) ? le.delete(T) : le.add(T), le;
    });
  }, de = () => {
    const T = F.current;
    if (F.current = null, !T || !_) return;
    const le = ne.get(T)?.property;
    le && (Ze(le), Re(null));
  }, Pe = () => {
    Ze(null), Re(null);
  }, Ke = (T) => {
    Re((R) => {
      const le = R ?? new Set(O ? Ne.items.map((Ie) => String(wn(Ie, be ?? "") ?? "")) : []), he = new Set(le);
      return he.has(T) ? he.delete(T) : he.add(T), he;
    });
  }, Rt = (T) => {
    const R = {};
    e.forEach((le) => {
      le.property && (R[le.property] = wn(T, le.property));
    }), W(R), Qe(String(r(T)));
  }, Dt = () => {
    const T = {};
    e.forEach((R) => {
      R.property && R.type === "boolean" && (T[R.property] = !1);
    }), W(T), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, Y = (T) => {
    if (tt === "__new__") {
      const R = Object.fromEntries(
        e.filter((le) => le.property).map((le) => [le.property, et[le.property]])
      );
      g?.(R);
    } else if (T != null) {
      const R = { ...T, ...et };
      D?.(T, R);
    }
    B();
  }, oe = i && (y === "Top" || y === "TopAndBottom"), pe = i && (y === "Bottom" || y === "TopAndBottom"), _e = h && e.some((T) => xr(T, h)), xe = (T, R, le) => T.render ? T.render(R, { index: 0 }) : br(wn(R, T.property), T.format), je = (T) => {
    const R = [ge.cell];
    return T.align === "center" && R.push(ge.center), T.align === "right" && R.push(ge.right), T.frozen && R.push(ge.frozen), R.join(" ");
  };
  return /* @__PURE__ */ S("div", { className: [ge.grid, U].filter(Boolean).join(" "), children: [
    oe && /* @__PURE__ */ n(
      rr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: $,
        showSummary: N,
        showPageSizeSelector: w,
        ariaLabel: pe ? "Pagination (top)" : "Pagination",
        onPageChange: q,
        onPageSizeChange: nt
      }
    ),
    (_ || z || m) && /* @__PURE__ */ S("div", { className: ge.toolbar, children: [
      _ && /* @__PURE__ */ n(
        "div",
        {
          className: [ge.groupPanel, be ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: _ ? (T) => T.preventDefault() : void 0,
          onDrop: _ ? de : void 0,
          children: be ? /* @__PURE__ */ S("span", { className: ge.groupChip, children: [
            Fe?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ n("button", { type: "button", className: ge.groupRemove, onClick: Pe, "aria-label": `Remove group by ${Fe?.title ?? be}`, children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" }) })
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: v })
        }
      ),
      z && /* @__PURE__ */ n("button", { type: "button", className: ge.pickerButton, onClick: Dt, children: "Add row" }),
      m && /* @__PURE__ */ S("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => We((T) => !T),
            children: k
          }
        ),
        ve && /* @__PURE__ */ n("div", { className: ge.pickerPanel, role: "menu", "aria-label": k, children: e.map((T, R) => {
          const le = Rn(T, R);
          return /* @__PURE__ */ S("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                checked: se.has(le),
                onChange: () => K(le)
              }
            ),
            T.title ?? T.property
          ] }, le);
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
          "aria-label": j,
          "aria-busy": P || void 0,
          children: [
            /* @__PURE__ */ S("colgroup", { children: [
              xt.map(({ key: T, column: R }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: ke[T] ?? R.width,
                    minWidth: R.minWidth,
                    maxWidth: R.maxWidth
                  }
                },
                T
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ S("thead", { children: [
              /* @__PURE__ */ S("tr", { children: [
                xt.map(({ key: T, column: R }) => {
                  const le = $l(R, s), he = J.find((ze) => ze.property === R.property), Ie = he ? J.indexOf(he) + 1 : 0, Ae = R.align ?? "left";
                  return /* @__PURE__ */ S(
                    "th",
                    {
                      "aria-sort": le && he ? wl[he.sortOrder] : "none",
                      className: [
                        ge.header,
                        Ae === "center" ? ge.center : "",
                        Ae === "right" ? ge.right : "",
                        R.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: re[T] } : void 0,
                      scope: "col",
                      draggable: E || _ || void 0,
                      onDragStart: E || _ ? (ze) => {
                        ze.dataTransfer && (ze.dataTransfer.effectAllowed = "move"), Lt(T);
                      } : void 0,
                      onDragOver: E ? (ze) => ze.preventDefault() : void 0,
                      onDrop: E ? () => Zt(T) : void 0,
                      children: [
                        le ? /* @__PURE__ */ S(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => R.property != null && Q(R.property),
                            "aria-label": he ? he.sortOrder === "Ascending" ? `Sort ${R.title ?? R.property} descending` : `Sort ${R.title ?? R.property} ascending` : `Sort ${R.title ?? R.property} ascending`,
                            children: [
                              R.title ?? R.property,
                              he && /* @__PURE__ */ n("span", { className: ge.sortIndicator, "aria-hidden": "true", children: he.sortOrder === "Ascending" ? "▲" : "▼" }),
                              Ie > 1 && c && /* @__PURE__ */ n("span", { className: ge.sortIndex, children: Ie })
                            ]
                          }
                        ) : R.title ?? R.property,
                        x && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${R.title ?? R.property}`,
                            onMouseDown: (ze) => {
                              ze.preventDefault(), ze.stopPropagation();
                              const at = ke[T] ?? R.width, Mt = at ? parseFloat(at) : 96;
                              Me(T, ze.clientX, Number.isFinite(Mt) ? Mt : 96);
                            },
                            onMouseMove: (ze) => {
                              M.current?.key === T && Xe(ze.clientX);
                            },
                            onMouseUp: vt,
                            onMouseLeave: () => {
                              M.current?.key === T && vt();
                            }
                          }
                        )
                      ]
                    },
                    T
                  );
                }),
                me && /* @__PURE__ */ n("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              _e && /* @__PURE__ */ n("tr", { children: xt.map(({ key: T, column: R }) => {
                if (!xr(R, h)) return /* @__PURE__ */ n("td", { className: ge.filterCell }, T);
                const le = ee.get(R.property ?? "");
                return /* @__PURE__ */ S("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ S("label", { className: ge.visuallyHidden, htmlFor: `df-${R.property}`, children: [
                    "Filter ",
                    R.title ?? R.property
                  ] }),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${R.property}`,
                      className: ge.filterSelect,
                      value: le?.operator ?? Ra(R.type ?? "string"),
                      onChange: (he) => De(R.property ?? "", { ...le, operator: he.target.value }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: qr.filter((he) => he !== "Custom").map((he) => /* @__PURE__ */ n("option", { value: he, children: he }, he))
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: le?.value ?? "",
                      onChange: (he) => De(R.property ?? "", { ...le, value: he.target.value }),
                      placeholder: `Filter ${R.title ?? R.property}`,
                      "aria-label": `${R.title ?? R.property} value`
                    }
                  )
                ] }, T);
              }) })
            ] }),
            /* @__PURE__ */ S("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ S("tr", { className: ge.editRow, children: [
                xt.map(({ key: T, column: R }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: R.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: R.type === "number" ? "number" : R.type === "boolean" ? "checkbox" : "text",
                    checked: R.type === "boolean" ? !!et[R.property] : void 0,
                    value: R.type === "boolean" ? void 0 : String(et[R.property] ?? ""),
                    onChange: (le) => W((he) => ({
                      ...he,
                      [R.property]: R.type === "boolean" ? le.target.checked : le.target.value
                    })),
                    "aria-label": `${R.title ?? R.property} (new)`
                  }
                ) }, T)),
                me && /* @__PURE__ */ S("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Y(), children: "Save" }),
                  /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                ] })
              ] }),
              dt.map((T) => {
                if (T.type === "group" && T.group) {
                  const Ae = Je.has(T.group.key);
                  return /* @__PURE__ */ n("tr", { className: ge.groupRow, children: /* @__PURE__ */ n("td", { colSpan: xt.length + (me ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ S(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": Ae,
                      onClick: () => Ke(T.group.key),
                      children: [
                        /* @__PURE__ */ n("span", { "aria-hidden": "true", children: Ae ? "▼" : "▶" }),
                        T.group.title,
                        ": ",
                        T.group.display,
                        " (",
                        T.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${T.group.key}`);
                }
                const R = T.row, le = r(R), he = (u ?? []).includes(le), Ie = tt != null && tt === String(le);
                return /* @__PURE__ */ S(
                  "tr",
                  {
                    className: [
                      V || b !== "None" ? ge.clickable : "",
                      he ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": b !== "None" ? he : void 0,
                    onClick: V || b !== "None" ? (Ae) => {
                      Nl(Ae.target) || (St(R), Ut(R));
                    } : void 0,
                    children: [
                      xt.map(({ key: Ae, column: ze }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: je(ze),
                          style: ze.frozen ? { left: re[Ae] } : void 0,
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
                          ) : xe(ze, R)
                        },
                        Ae
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ S(Ee, { children: [
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Y(R), children: "Save" }),
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                      ] }) : /* @__PURE__ */ S(Ee, { children: [
                        I !== "None" && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Rt(R), children: "Edit" }),
                        C && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => C(R), children: "Delete" })
                      ] }) })
                    ]
                  },
                  le
                );
              })
            ] })
          ]
        }
      ),
      Ne.items.length === 0 && !P && /* @__PURE__ */ n("div", { className: ge.empty, children: A }),
      P && /* @__PURE__ */ n("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    pe && /* @__PURE__ */ n(
      rr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: $,
        showSummary: N,
        showPageSizeSelector: w,
        ariaLabel: oe ? "Pagination (bottom)" : "Pagination",
        onPageChange: q,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Sl = "_wrap_2wcog_1", Dl = "_grid_2wcog_7", Ml = "_stacked_2wcog_13", zl = "_item_2wcog_19", Cl = "_empty_2wcog_25", $n = {
  wrap: Sl,
  grid: Dl,
  stacked: Ml,
  item: zl,
  empty: Cl
};
function sy({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
  wrapItems: s = !1,
  itemTemplate: l,
  emptyMessage: c = "No records found",
  emptyTemplate: h,
  loadingTemplate: o,
  isLoading: a = !1,
  showPageSizeSelector: i = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [$, y] = X(1), [N, w] = X(t), b = e.length, u = Math.max(1, Math.ceil(b / N)), f = Math.min(Math.max(1, $), u), m = $e(() => {
    const x = (f - 1) * N;
    return e.slice(x, x + N);
  }, [e, f, N]), k = s ? $n.grid : $n.stacked;
  return /* @__PURE__ */ S("div", { className: [$n.wrap, p].filter(Boolean).join(" "), "aria-label": d, children: [
    a && o != null ? o : b === 0 ? h ?? /* @__PURE__ */ n("div", { className: $n.empty, children: c }) : /* @__PURE__ */ n("div", { className: k, children: m.map((x, E) => /* @__PURE__ */ n("div", { className: $n.item, children: l ? l(x, E) : String(x) }, E)) }),
    /* @__PURE__ */ n(
      rr,
      {
        pageNumber: f,
        pageSize: N,
        count: b,
        pageSizeOptions: r,
        showPageSizeSelector: i,
        onPageChange: y,
        onPageSizeChange: (x) => {
          w(x), y(1);
        }
      }
    )
  ] });
}
const Ol = "_label_6jw3b_1", El = {
  label: Ol
}, ay = He(
  function({ className: t, children: r, ...s }, l) {
    return /* @__PURE__ */ n("label", { ref: l, className: [El.label, t].filter(Boolean).join(" "), ...s, children: r });
  }
), Il = "_input_rbtpc_1", Al = "_invalid_rbtpc_31", Tl = "_xs_rbtpc_37", jl = "_sm_rbtpc_43", Ll = "_md_rbtpc_49", Rl = "_lg_rbtpc_55", Pl = "_xl_rbtpc_61", Zn = {
  input: Il,
  invalid: Al,
  xs: Tl,
  sm: jl,
  md: Ll,
  lg: Rl,
  xl: Pl
}, ly = He(function({ size: t = "md", invalid: r = !1, className: s, visible: l = !0, ...c }, h) {
  return l === !1 ? null : /* @__PURE__ */ n(
    "input",
    {
      ref: h,
      className: [Zn.input, Zn[t], r ? Zn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), Bl = "_checkbox_1e35b_1", Fl = {
  checkbox: Bl
}, iy = He(function({ className: t, ...r }, s) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [Fl.checkbox, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Hl = {
  switch: "_switch_g0q9x_1"
}, Kl = He(function({ className: t, ...r }, s) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [Hl.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), ql = "_trigger_23nf5_1", Ul = "_tooltip_23nf5_7", Wl = "_top_23nf5_34", Vl = "_right_23nf5_40", Xl = "_bottom_23nf5_46", Gl = "_left_23nf5_52", Yl = "_arrow_23nf5_58", Pn = {
  trigger: ql,
  tooltip: Ul,
  "se-tooltip-in": "_se-tooltip-in_23nf5_1",
  top: Wl,
  right: Vl,
  bottom: Xl,
  left: Gl,
  arrow: Yl
};
function cy({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: s = 300,
  className: l
}) {
  const c = Ye(), h = ae(null), [o, a] = X(!1), i = () => {
    h.current = window.setTimeout(() => a(!0), s);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), a(!1);
  };
  we(() => {
    if (!o) return;
    const $ = (y) => {
      y.key === "Escape" && p();
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [o]);
  const d = jn(t) ? Br(
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
const Zl = "_dialog_s9bat_1", Jl = "_sm_s9bat_30", Ql = "_md_s9bat_34", ei = "_lg_s9bat_38", ti = "_header_s9bat_42", ni = "_title_s9bat_51", ri = "_description_s9bat_58", oi = "_close_s9bat_65", si = "_body_s9bat_84", ai = "_footer_s9bat_90", Vt = {
  dialog: Zl,
  "se-dialog-in": "_se-dialog-in_s9bat_1",
  sm: Jl,
  md: Ql,
  lg: ei,
  header: ti,
  title: ni,
  description: ri,
  close: oi,
  body: si,
  footer: ai
};
function dy({
  open: e,
  onClose: t,
  title: r,
  description: s,
  children: l,
  footer: c,
  size: h = "md",
  width: o,
  height: a,
  className: i
}) {
  const p = ae(null), d = Ye(), $ = Ye(), y = ae(t);
  we(() => {
    y.current = t;
  });
  const N = ae(!1), w = ae(!1), b = H(() => {
    N.current || (N.current = !0, y.current());
  }, []), u = H(() => {
    if (w.current) {
      w.current = !1;
      return;
    }
    y.current();
  }, []);
  return we(() => {
    const f = p.current;
    if (f)
      if (e && !f.open) {
        const m = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        f.showModal(), (f.querySelector('button[aria-label="Close dialog"]') ?? f.querySelector("button"))?.focus();
        const x = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const E = (_) => {
          _.preventDefault(), b();
        };
        return f.addEventListener("cancel", E), () => {
          f.removeEventListener("cancel", E), document.body.style.overflow = x, m?.focus({ preventScroll: !0 });
        };
      } else !e && f.open && (w.current = N.current, N.current = !1, f.close());
  }, [e, b]), // Backdrop dismissal is mouse-only by design; keyboard users close
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
        height: a ?? void 0
      },
      onClose: u,
      onClick: (f) => {
        f.target === p.current && b();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? d : void 0,
      "aria-describedby": s ? $ : void 0,
      children: [
        r && /* @__PURE__ */ S("header", { className: Vt.header, children: [
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ n("h2", { id: d, className: Vt.title, children: r }),
            s && /* @__PURE__ */ n("p", { id: $, className: Vt.description, children: s })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Vt.close,
              onClick: b,
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
const li = "_viewport_1dj88_1", ii = "_topLeft_1dj88_13", ci = "_topRight_1dj88_20", di = "_bottomLeft_1dj88_25", ui = "_toast_1dj88_30", fi = "_leaving_1dj88_61", _i = "_info_1dj88_77", pi = "_success_1dj88_82", hi = "_warning_1dj88_87", mi = "_danger_1dj88_92", gi = "_content_1dj88_97", bi = "_title_1dj88_102", yi = "_description_1dj88_125", xi = "_dismiss_1dj88_132", vi = "_actions_1dj88_151", ki = "_action_1dj88_151", wi = "_cancel_1dj88_159", $i = "_progress_1dj88_195", ht = {
  viewport: li,
  topLeft: ii,
  topRight: ci,
  bottomLeft: di,
  toast: ui,
  "se-toast-in": "_se-toast-in_1dj88_1",
  leaving: fi,
  "se-toast-out": "_se-toast-out_1dj88_1",
  info: _i,
  success: pi,
  warning: hi,
  danger: mi,
  content: gi,
  title: bi,
  description: yi,
  dismiss: xi,
  actions: vi,
  action: ki,
  cancel: wi,
  progress: $i,
  "se-toast-progress": "_se-toast-progress_1dj88_1"
}, Vr = Hr(null);
function uy() {
  const e = Fr(Vr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Ni = 200, Si = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function fy({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: s = !0,
  className: l
}) {
  const [c, h] = X([]), [o, a] = X(!1), i = ae([]), p = ae(/* @__PURE__ */ new Map()), d = ae(!1), $ = ae(0), y = (D) => {
    d.current = D, a(D);
  }, N = H((D) => {
    const g = p.current.get(D);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(0, g.remaining - (Date.now() - g.startedAt)));
  }, []), w = H((D) => {
    const g = p.current.get(D);
    g && (window.clearTimeout(g.timeoutId), p.current.delete(D));
  }, []), b = H(
    (D) => {
      w(D), h((g) => {
        const C = g.filter((P) => P.id !== D);
        return i.current = C, C;
      });
    },
    [w]
  ), u = H(
    (D) => {
      const g = i.current.find((C) => C.id === D);
      !g || g.leaving || (g.onAutoClose?.(), b(D));
    },
    [b]
  ), f = H(
    (D) => {
      const g = p.current.get(D);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => u(D), g.remaining));
    },
    [u]
  ), m = H(() => {
    d.current || p.current.forEach((D, g) => N(g)), y(!0);
  }, [N]), k = H(() => {
    p.current.forEach((D, g) => f(g)), y(!1);
  }, [f]);
  we(() => {
    if (!s) return;
    const D = () => {
      document.hidden ? m() : k();
    };
    return document.addEventListener("visibilitychange", D), () => document.removeEventListener("visibilitychange", D);
  }, [s, m, k]);
  const x = H(
    (D) => {
      const g = i.current.find((C) => C.id === D);
      !g || g.leaving || (g.onDismiss?.(), h((C) => {
        const P = C.map((A) => A.id === D ? { ...A, leaving: !0 } : A);
        return i.current = P, P;
      }), window.setTimeout(() => b(D), Ni));
    },
    [b]
  ), E = H(
    (D) => {
      if (D.durationMs <= 0) return;
      const g = {
        remaining: D.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(D.id, g), d.current || f(D.id);
    },
    [f]
  ), _ = H(
    (D) => {
      const g = i.current.find((P) => P.id === D.id), C = {
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
      h((P) => {
        const A = g ? P.map((j) => j.id === C.id ? { ...C, leaving: !1 } : j) : [...P, C];
        return i.current = A, A;
      }), g && w(C.id), E(C);
    },
    [t, r, E, w]
  ), v = $e(() => ({ toast: _ }), [_]), O = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map((D) => D.position)])),
    [r, c]
  ), I = s ? m : void 0, z = s ? k : void 0;
  return /* @__PURE__ */ S(Vr.Provider, { value: v, children: [
    e,
    O.map((D) => /* @__PURE__ */ n(
      "div",
      {
        className: [
          ht.viewport,
          ht[Si[D]],
          l
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: z,
        children: c.filter((g) => g.position === D).map((g) => /* @__PURE__ */ S(
          "div",
          {
            role: g.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": g.closeOnClick ? "true" : "false",
            className: [
              ht.toast,
              ht[g.severity],
              g.leaving ? ht.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: g.closeOnClick ? () => x(g.id) : void 0,
            children: [
              /* @__PURE__ */ S("div", { className: ht.content, children: [
                /* @__PURE__ */ n("div", { className: ht.title, children: g.title }),
                g.description && /* @__PURE__ */ n("div", { className: ht.description, children: g.description }),
                (g.action || g.cancel) && /* @__PURE__ */ S("div", { className: ht.actions, children: [
                  g.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ht.action,
                      onClick: () => {
                        g.action?.onClick?.(), x(g.id);
                      },
                      children: g.action.label
                    }
                  ),
                  g.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ht.cancel,
                      onClick: () => {
                        g.cancel?.onClick?.(), x(g.id);
                      },
                      children: g.cancel.label
                    }
                  )
                ] })
              ] }),
              g.dismissible && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: ht.dismiss,
                  onClick: () => x(g.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
                }
              ),
              g.showProgress && g.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: ht.progress,
                  style: { animationDuration: `${g.durationMs}ms` }
                }
              )
            ]
          },
          g.id
        ))
      },
      D
    ))
  ] });
}
const Di = "_alert_6bgt0_1", Mi = "_xs_6bgt0_22", zi = "_sm_6bgt0_32", Ci = "_lg_6bgt0_42", Oi = "_xl_6bgt0_52", Ei = "_primary_6bgt0_63", Ii = "_secondary_6bgt0_68", Ai = "_light_6bgt0_73", Ti = "_base_6bgt0_78", ji = "_dark_6bgt0_83", Li = "_info_6bgt0_88", Ri = "_success_6bgt0_93", Pi = "_warning_6bgt0_98", Bi = "_danger_6bgt0_103", Fi = "_flat_6bgt0_110", Hi = "_outlined_6bgt0_117", Ki = "_filled_6bgt0_125", qi = "_text_6bgt0_132", Ui = "_icon_6bgt0_175", Wi = "_content_6bgt0_186", Vi = "_title_6bgt0_191", Xi = "_body_6bgt0_197", Gi = "_dismiss_6bgt0_203", Et = {
  alert: Di,
  xs: Mi,
  sm: zi,
  lg: Ci,
  xl: Oi,
  primary: Ei,
  secondary: Ii,
  light: Ai,
  base: Ti,
  dark: ji,
  info: Li,
  success: Ri,
  warning: Pi,
  danger: Bi,
  flat: Fi,
  outlined: Hi,
  filled: Ki,
  text: qi,
  icon: Ui,
  content: Wi,
  title: Vi,
  body: Xi,
  dismiss: Gi,
  "shade-lighter": "_shade-lighter_6bgt0_335",
  "shade-light": "_shade-light_6bgt0_335",
  "shade-dark": "_shade-dark_6bgt0_337",
  "shade-darker": "_shade-darker_6bgt0_338"
}, Yi = {
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
function _y({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: r,
  size: s = "md",
  title: l,
  icon: c,
  showIcon: h = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: i,
  visible: p,
  onVisibleChange: d,
  className: $,
  ...y
}) {
  const [N, w] = X(!1);
  if (p === !1 || p === void 0 && N)
    return null;
  const b = () => {
    p === void 0 && w(!0), i?.(), d?.(!1);
  }, u = e, f = cr(t, "filled"), m = r && r !== "default" ? `shade-${r}` : null, k = c ?? (h ? /* @__PURE__ */ n(Ce, { name: Yi[e] }) : null);
  return /* @__PURE__ */ S(
    "div",
    {
      role: "alert",
      ...y,
      className: [Et.alert, Et[u], Et[f], m ? Et[m] : null, Et[s], $].filter(Boolean).join(" "),
      children: [
        k != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: k }),
        /* @__PURE__ */ S("div", { className: Et.content, children: [
          l && /* @__PURE__ */ n("div", { className: Et.title, children: l }),
          o && /* @__PURE__ */ n("div", { className: Et.body, children: o })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Zi = "_skeleton_1e8h1_1", Ji = "_text_1e8h1_35", Qi = "_circle_1e8h1_40", ec = "_rect_1e8h1_44", vr = {
  skeleton: Zi,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1e8h1_1",
  text: Ji,
  circle: Qi,
  rect: ec
};
function py({
  variant: e = "text",
  width: t,
  height: r,
  className: s
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (l.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [vr.skeleton, vr[e], s].filter(Boolean).join(" "),
      style: l
    }
  );
}
const tc = "_row_plfwb_1", nc = "_gapXs_plfwb_7", rc = "_gapSm_plfwb_11", oc = "_gapMd_plfwb_15", sc = "_gapLg_plfwb_19", ac = "_gapXl_plfwb_23", lc = "_start_plfwb_27", ic = "_center_plfwb_31", cc = "_end_plfwb_35", dc = "_stretch_plfwb_39", uc = "_baseline_plfwb_43", fc = "_noWrap_plfwb_99", _c = "_wrapReverse_plfwb_103", pc = "_gapRowXs_plfwb_107", hc = "_gapRowSm_plfwb_111", mc = "_gapRowMd_plfwb_115", gc = "_gapRowLg_plfwb_119", bc = "_gapRowXl_plfwb_123", an = {
  row: tc,
  gapXs: nc,
  gapSm: rc,
  gapMd: oc,
  gapLg: sc,
  gapXl: ac,
  start: lc,
  center: ic,
  end: cc,
  stretch: dc,
  baseline: uc,
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
  noWrap: fc,
  wrapReverse: _c,
  gapRowXs: pc,
  gapRowSm: hc,
  gapRowMd: mc,
  gapRowLg: gc,
  gapRowXl: bc
}, yc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, xc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function vc(e) {
  return typeof e != "string" ? null : yc[e] ?? null;
}
function kc(e) {
  return typeof e != "string" ? null : xc[e] ?? null;
}
function kr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function hy({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: s = "start",
  wrap: l = !0,
  className: c,
  style: h,
  ...o
}) {
  const a = vc(e), i = kc(t), p = {
    ...e != null && !a ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...t != null && !i ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...h
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        an.row,
        an[r],
        an[`justify-${s}`],
        kr(l) != null ? an[kr(l)] : null,
        a ? an[a] : null,
        i ? an[i] : null,
        c
      ].filter(Boolean).join(" "),
      style: p,
      ...o
    }
  );
}
const wc = "_column_2ch3a_1", $c = "_Size1_2ch3a_6", Nc = "_Size2_2ch3a_7", Sc = "_Size3_2ch3a_8", Dc = "_Size4_2ch3a_9", Mc = "_Size5_2ch3a_10", zc = "_Size6_2ch3a_11", Cc = "_Size7_2ch3a_12", Oc = "_Size8_2ch3a_13", Ec = "_Size9_2ch3a_14", Ic = "_Size10_2ch3a_15", Ac = "_Size11_2ch3a_16", Tc = "_Size12_2ch3a_17", jc = "_Offset1_2ch3a_18", Lc = "_Offset2_2ch3a_19", Rc = "_Offset3_2ch3a_20", Pc = "_Offset4_2ch3a_21", Bc = "_Offset5_2ch3a_22", Fc = "_Offset6_2ch3a_23", Hc = "_Offset7_2ch3a_24", Kc = "_Offset8_2ch3a_25", qc = "_Offset9_2ch3a_26", Uc = "_Offset10_2ch3a_27", Wc = "_Offset11_2ch3a_28", Vc = "_smSize1_2ch3a_31", Xc = "_smSize2_2ch3a_32", Gc = "_smSize3_2ch3a_33", Yc = "_smSize4_2ch3a_34", Zc = "_smSize5_2ch3a_35", Jc = "_smSize6_2ch3a_36", Qc = "_smSize7_2ch3a_37", ed = "_smSize8_2ch3a_38", td = "_smSize9_2ch3a_39", nd = "_smSize10_2ch3a_40", rd = "_smSize11_2ch3a_41", od = "_smSize12_2ch3a_42", sd = "_smOffset1_2ch3a_43", ad = "_smOffset2_2ch3a_44", ld = "_smOffset3_2ch3a_45", id = "_smOffset4_2ch3a_46", cd = "_smOffset5_2ch3a_47", dd = "_smOffset6_2ch3a_48", ud = "_smOffset7_2ch3a_49", fd = "_smOffset8_2ch3a_50", _d = "_smOffset9_2ch3a_51", pd = "_smOffset10_2ch3a_52", hd = "_smOffset11_2ch3a_53", md = "_mdSize1_2ch3a_57", gd = "_mdSize2_2ch3a_58", bd = "_mdSize3_2ch3a_59", yd = "_mdSize4_2ch3a_60", xd = "_mdSize5_2ch3a_61", vd = "_mdSize6_2ch3a_62", kd = "_mdSize7_2ch3a_63", wd = "_mdSize8_2ch3a_64", $d = "_mdSize9_2ch3a_65", Nd = "_mdSize10_2ch3a_66", Sd = "_mdSize11_2ch3a_67", Dd = "_mdSize12_2ch3a_68", Md = "_mdOffset1_2ch3a_69", zd = "_mdOffset2_2ch3a_70", Cd = "_mdOffset3_2ch3a_71", Od = "_mdOffset4_2ch3a_72", Ed = "_mdOffset5_2ch3a_73", Id = "_mdOffset6_2ch3a_74", Ad = "_mdOffset7_2ch3a_75", Td = "_mdOffset8_2ch3a_76", jd = "_mdOffset9_2ch3a_77", Ld = "_mdOffset10_2ch3a_78", Rd = "_mdOffset11_2ch3a_79", Pd = "_lgSize1_2ch3a_83", Bd = "_lgSize2_2ch3a_84", Fd = "_lgSize3_2ch3a_85", Hd = "_lgSize4_2ch3a_86", Kd = "_lgSize5_2ch3a_87", qd = "_lgSize6_2ch3a_88", Ud = "_lgSize7_2ch3a_89", Wd = "_lgSize8_2ch3a_90", Vd = "_lgSize9_2ch3a_91", Xd = "_lgSize10_2ch3a_92", Gd = "_lgSize11_2ch3a_93", Yd = "_lgSize12_2ch3a_94", Zd = "_lgOffset1_2ch3a_95", Jd = "_lgOffset2_2ch3a_96", Qd = "_lgOffset3_2ch3a_97", eu = "_lgOffset4_2ch3a_98", tu = "_lgOffset5_2ch3a_99", nu = "_lgOffset6_2ch3a_100", ru = "_lgOffset7_2ch3a_101", ou = "_lgOffset8_2ch3a_102", su = "_lgOffset9_2ch3a_103", au = "_lgOffset10_2ch3a_104", lu = "_lgOffset11_2ch3a_105", iu = "_xlSize1_2ch3a_109", cu = "_xlSize2_2ch3a_110", du = "_xlSize3_2ch3a_111", uu = "_xlSize4_2ch3a_112", fu = "_xlSize5_2ch3a_113", _u = "_xlSize6_2ch3a_114", pu = "_xlSize7_2ch3a_115", hu = "_xlSize8_2ch3a_116", mu = "_xlSize9_2ch3a_117", gu = "_xlSize10_2ch3a_118", bu = "_xlSize11_2ch3a_119", yu = "_xlSize12_2ch3a_120", xu = "_xlOffset1_2ch3a_121", vu = "_xlOffset2_2ch3a_122", ku = "_xlOffset3_2ch3a_123", wu = "_xlOffset4_2ch3a_124", $u = "_xlOffset5_2ch3a_125", Nu = "_xlOffset6_2ch3a_126", Su = "_xlOffset7_2ch3a_127", Du = "_xlOffset8_2ch3a_128", Mu = "_xlOffset9_2ch3a_129", zu = "_xlOffset10_2ch3a_130", Cu = "_xlOffset11_2ch3a_131", Ou = "_xxlSize1_2ch3a_136", Eu = "_xxlSize2_2ch3a_137", Iu = "_xxlSize3_2ch3a_138", Au = "_xxlSize4_2ch3a_139", Tu = "_xxlSize5_2ch3a_140", ju = "_xxlSize6_2ch3a_141", Lu = "_xxlSize7_2ch3a_142", Ru = "_xxlSize8_2ch3a_143", Pu = "_xxlSize9_2ch3a_144", Bu = "_xxlSize10_2ch3a_145", Fu = "_xxlSize11_2ch3a_146", Hu = "_xxlSize12_2ch3a_147", Ku = "_xxlOffset1_2ch3a_148", qu = "_xxlOffset2_2ch3a_149", Uu = "_xxlOffset3_2ch3a_150", Wu = "_xxlOffset4_2ch3a_151", Vu = "_xxlOffset5_2ch3a_152", Xu = "_xxlOffset6_2ch3a_153", Gu = "_xxlOffset7_2ch3a_154", Yu = "_xxlOffset8_2ch3a_155", Zu = "_xxlOffset9_2ch3a_156", Ju = "_xxlOffset10_2ch3a_157", Qu = "_xxlOffset11_2ch3a_158", ef = "_xxlOrderFirst_2ch3a_159", tf = "_xxlOrderLast_2ch3a_160", nf = "_orderFirst_2ch3a_163", rf = "_orderLast_2ch3a_164", of = "_smOrderFirst_2ch3a_167", sf = "_smOrderLast_2ch3a_168", af = "_mdOrderFirst_2ch3a_172", lf = "_mdOrderLast_2ch3a_173", cf = "_lgOrderFirst_2ch3a_177", df = "_lgOrderLast_2ch3a_178", uf = "_xlOrderFirst_2ch3a_182", ff = "_xlOrderLast_2ch3a_183", Nn = {
  column: wc,
  Size1: $c,
  Size2: Nc,
  Size3: Sc,
  Size4: Dc,
  Size5: Mc,
  Size6: zc,
  Size7: Cc,
  Size8: Oc,
  Size9: Ec,
  Size10: Ic,
  Size11: Ac,
  Size12: Tc,
  Offset1: jc,
  Offset2: Lc,
  Offset3: Rc,
  Offset4: Pc,
  Offset5: Bc,
  Offset6: Fc,
  Offset7: Hc,
  Offset8: Kc,
  Offset9: qc,
  Offset10: Uc,
  Offset11: Wc,
  smSize1: Vc,
  smSize2: Xc,
  smSize3: Gc,
  smSize4: Yc,
  smSize5: Zc,
  smSize6: Jc,
  smSize7: Qc,
  smSize8: ed,
  smSize9: td,
  smSize10: nd,
  smSize11: rd,
  smSize12: od,
  smOffset1: sd,
  smOffset2: ad,
  smOffset3: ld,
  smOffset4: id,
  smOffset5: cd,
  smOffset6: dd,
  smOffset7: ud,
  smOffset8: fd,
  smOffset9: _d,
  smOffset10: pd,
  smOffset11: hd,
  mdSize1: md,
  mdSize2: gd,
  mdSize3: bd,
  mdSize4: yd,
  mdSize5: xd,
  mdSize6: vd,
  mdSize7: kd,
  mdSize8: wd,
  mdSize9: $d,
  mdSize10: Nd,
  mdSize11: Sd,
  mdSize12: Dd,
  mdOffset1: Md,
  mdOffset2: zd,
  mdOffset3: Cd,
  mdOffset4: Od,
  mdOffset5: Ed,
  mdOffset6: Id,
  mdOffset7: Ad,
  mdOffset8: Td,
  mdOffset9: jd,
  mdOffset10: Ld,
  mdOffset11: Rd,
  lgSize1: Pd,
  lgSize2: Bd,
  lgSize3: Fd,
  lgSize4: Hd,
  lgSize5: Kd,
  lgSize6: qd,
  lgSize7: Ud,
  lgSize8: Wd,
  lgSize9: Vd,
  lgSize10: Xd,
  lgSize11: Gd,
  lgSize12: Yd,
  lgOffset1: Zd,
  lgOffset2: Jd,
  lgOffset3: Qd,
  lgOffset4: eu,
  lgOffset5: tu,
  lgOffset6: nu,
  lgOffset7: ru,
  lgOffset8: ou,
  lgOffset9: su,
  lgOffset10: au,
  lgOffset11: lu,
  xlSize1: iu,
  xlSize2: cu,
  xlSize3: du,
  xlSize4: uu,
  xlSize5: fu,
  xlSize6: _u,
  xlSize7: pu,
  xlSize8: hu,
  xlSize9: mu,
  xlSize10: gu,
  xlSize11: bu,
  xlSize12: yu,
  xlOffset1: xu,
  xlOffset2: vu,
  xlOffset3: ku,
  xlOffset4: wu,
  xlOffset5: $u,
  xlOffset6: Nu,
  xlOffset7: Su,
  xlOffset8: Du,
  xlOffset9: Mu,
  xlOffset10: zu,
  xlOffset11: Cu,
  xxlSize1: Ou,
  xxlSize2: Eu,
  xxlSize3: Iu,
  xxlSize4: Au,
  xxlSize5: Tu,
  xxlSize6: ju,
  xxlSize7: Lu,
  xxlSize8: Ru,
  xxlSize9: Pu,
  xxlSize10: Bu,
  xxlSize11: Fu,
  xxlSize12: Hu,
  xxlOffset1: Ku,
  xxlOffset2: qu,
  xxlOffset3: Uu,
  xxlOffset4: Wu,
  xxlOffset5: Vu,
  xxlOffset6: Xu,
  xxlOffset7: Gu,
  xxlOffset8: Yu,
  xxlOffset9: Zu,
  xxlOffset10: Ju,
  xxlOffset11: Qu,
  xxlOrderFirst: ef,
  xxlOrderLast: tf,
  orderFirst: nf,
  orderLast: rf,
  smOrderFirst: of,
  smOrderLast: sf,
  mdOrderFirst: af,
  mdOrderLast: lf,
  lgOrderFirst: cf,
  lgOrderLast: df,
  xlOrderFirst: uf,
  xlOrderLast: ff
}, _f = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], pf = {
  first: "orderFirst",
  last: "orderLast"
};
function hf(e) {
  return typeof e == "number" ? { order: e } : {};
}
function my({ className: e, style: t, ...r }) {
  const s = [Nn.column], l = { ...t };
  for (const [v, O, I, z] of _f) {
    const D = r[O], g = r[I], C = r[z];
    if (D != null && s.push(Nn[`${v}Size${D}`]), g != null && g > 0 && s.push(Nn[`${v}Offset${g}`]), C === "first" || C === "last") {
      const P = `${v}${pf[C]}`;
      Nn[P] && s.push(Nn[P]);
    } else C != null && Object.assign(l, hf(C));
  }
  const {
    size: c,
    offset: h,
    sizeSm: o,
    offsetSm: a,
    sizeMd: i,
    offsetMd: p,
    sizeLg: d,
    offsetLg: $,
    sizeXl: y,
    offsetXl: N,
    sizeXxl: w,
    offsetXxl: b,
    order: u,
    orderSm: f,
    orderMd: m,
    orderLg: k,
    orderXl: x,
    orderXxl: E,
    ..._
  } = r;
  return /* @__PURE__ */ n("div", { className: [...s, e].filter(Boolean).join(" "), style: l, ..._ });
}
const mf = "_stack_1yc1g_1", gf = "_gapXs_1yc1g_29", bf = "_gapSm_1yc1g_33", yf = "_gapMd_1yc1g_37", xf = "_gapLg_1yc1g_41", vf = "_gapXl_1yc1g_45", ln = {
  stack: mf,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: gf,
  gapSm: bf,
  gapMd: yf,
  gapLg: xf,
  gapXl: vf,
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
}, kf = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function wf(e) {
  return typeof e != "string" ? null : kf[e] ?? null;
}
function wr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function gy({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: s = "sm",
  align: l,
  justify: c,
  className: h,
  style: o,
  ...a
}) {
  const i = wf(s), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...s != null && !i ? { gap: typeof s == "number" ? `${s}px` : s } : {},
    ...o
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln.stack,
        ln[`dir-${p}`],
        wr(r) !== "wrap" ? ln[`wrap-${wr(r)}`] : null,
        l != null ? ln[`align-${l}`] : null,
        c != null ? ln[`justify-${c}`] : null,
        i ? ln[i] : null,
        h
      ].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const $f = "_layout_1pcye_1", Nf = "_row_1pcye_7", $r = {
  layout: $f,
  row: Nf
}, Sf = "_footer_1divs_1", Df = {
  footer: Sf
};
function Mf({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("footer", { className: [Df.footer, e].filter(Boolean).join(" "), ...r, children: t });
}
const zf = "_header_14i3s_1", Cf = {
  header: zf
};
function Of({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("header", { className: [Cf.header, e].filter(Boolean).join(" "), ...r, children: t });
}
const Ef = "_sidebar_1w0bm_1", If = "_left_1w0bm_9", Af = "_right_1w0bm_13", Tf = "_collapsed_1w0bm_17", jf = "_responsive_1w0bm_25", Lf = "_overlay_1w0bm_33", Rf = "_mask_1w0bm_53", Qt = {
  sidebar: Ef,
  left: If,
  right: Af,
  collapsed: Tf,
  responsive: jf,
  overlay: Lf,
  mask: Rf
};
function Pf({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
  overlay: s = !1,
  onClose: l,
  className: c,
  children: h,
  ...o
}) {
  return we(() => {
    if (!s || !t || l == null) return;
    const a = (i) => {
      i.key === "Escape" && l();
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [s, t, l]), /* @__PURE__ */ S(Ee, { children: [
    s && t ? /* @__PURE__ */ n("div", { className: `${Qt.mask} se-layout-mask`, "aria-hidden": "true", onClick: l }) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          Qt.sidebar,
          e === "right" ? Qt.right : Qt.left,
          t ? null : Qt.collapsed,
          r ? Qt.responsive : null,
          s ? [Qt.overlay, "se-sidebar--overlay"] : null,
          c
        ].flat().filter(Boolean).join(" "),
        ...o,
        children: h
      }
    )
  ] });
}
function by({ className: e, children: t, ...r }) {
  const s = [], l = [], c = [], h = [], o = [];
  return Qr.forEach(t, (a) => {
    if (!jn(a)) {
      c.push(a);
      return;
    }
    a.type === Of ? s.push(a) : a.type === Mf ? l.push(a) : a.type === Pf ? (a.props.position === "right" ? o : h).push(a) : c.push(a);
  }), /* @__PURE__ */ S("div", { className: [$r.layout, e].filter(Boolean).join(" "), ...r, children: [
    s,
    /* @__PURE__ */ S("div", { className: $r.row, children: [
      h,
      c,
      o
    ] }),
    l
  ] });
}
const Bf = "_body_10zdy_1", Ff = {
  body: Bf
};
function yy({ as: e = "main", className: t, children: r, ...s }) {
  return /* @__PURE__ */ n(e, { className: [Ff.body, t].filter(Boolean).join(" "), ...s, children: r });
}
const Hf = "_track_zebo1_1", Kf = "_bar_zebo1_31", qf = "_primary_zebo1_39", Uf = "_success_zebo1_43", Wf = "_warning_zebo1_47", Vf = "_danger_zebo1_51", Xf = "_indeterminate_zebo1_101", Gf = "_circular_zebo1_115", Yf = "_fill_zebo1_155", mt = {
  track: Hf,
  "linear-xs": "_linear-xs_zebo1_11",
  "linear-sm": "_linear-sm_zebo1_15",
  "linear-md": "_linear-md_zebo1_19",
  "linear-lg": "_linear-lg_zebo1_23",
  "linear-xl": "_linear-xl_zebo1_27",
  bar: Kf,
  primary: qf,
  success: Uf,
  warning: Wf,
  danger: Vf,
  "shade-lighter": "_shade-lighter_zebo1_85",
  "shade-light": "_shade-light_zebo1_85",
  "shade-dark": "_shade-dark_zebo1_93",
  "shade-darker": "_shade-darker_zebo1_97",
  indeterminate: Xf,
  "se-progress-slide": "_se-progress-slide_zebo1_1",
  circular: Gf,
  "circular-xs": "_circular-xs_zebo1_121",
  "circular-sm": "_circular-sm_zebo1_126",
  "circular-md": "_circular-md_zebo1_131",
  "circular-lg": "_circular-lg_zebo1_136",
  "circular-xl": "_circular-xl_zebo1_141",
  fill: Yf,
  "se-progress-spin": "_se-progress-spin_zebo1_1"
};
function xy({
  value: e = 0,
  max: t = 100,
  severity: r = "primary",
  shade: s,
  indeterminate: l = !1,
  variant: c = "linear",
  size: h = "md",
  className: o,
  visible: a = !0,
  ...i
}) {
  if (a === !1) return null;
  const p = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? p / t * 100 : 0;
  if (c === "circular") {
    const y = typeof h == "string", N = 2, w = 10.5, b = 2 * Math.PI * w, u = b * (l ? 0.75 : 1), f = l ? 0 : b * (1 - d / 100);
    return /* @__PURE__ */ S(
      "svg",
      {
        width: y ? void 0 : h,
        height: y ? void 0 : h,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(p),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...i,
        className: [
          mt.circular,
          mt[r],
          s && s !== "default" ? mt[`shade-${s}`] : null,
          y ? mt[`circular-${h}`] : null,
          l ? mt.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n("circle", { className: mt.track, cx: 12, cy: 12, r: w, strokeWidth: N }),
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.fill,
              cx: 12,
              cy: 12,
              r: w,
              strokeWidth: N,
              strokeDasharray: `${u} ${b}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const $ = s && s !== "default" ? `shade-${s}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(p),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        mt.track,
        mt[r],
        $ ? mt[$] : null,
        typeof h == "string" ? mt[`linear-${h}`] : null,
        l ? mt.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: mt.bar,
          style: l ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
function vy(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Zf(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Xr(e) {
  const [t, r] = X(() => Zf(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const s = window.matchMedia(e);
    r(s.matches);
    const l = (c) => r(c.matches);
    return typeof s.addEventListener == "function" ? (s.addEventListener("change", l), () => s.removeEventListener("change", l)) : (s.addListener(l), () => s.removeListener(l));
  }, [e]), t;
}
const Jf = "_wrapper_1x82r_1", Qf = {
  wrapper: Jf
}, Gr = "dx-theme";
function e_(e) {
  const t = e === void 0 ? Gr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(t);
      return r === "light" || r === "dark" || r === "system" ? r : void 0;
    } catch {
      return;
    }
}
function t_(e, t) {
  const r = e === void 0 ? Gr : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, t);
    } catch {
    }
}
function ky({
  value: e,
  defaultValue: t,
  defaultTheme: r,
  storageKey: s,
  onChange: l,
  label: c = "Dark mode",
  className: h
}) {
  const o = Xr("(prefers-color-scheme: dark)"), [a, i] = X(void 0), p = e ?? a ?? e_(s) ?? t ?? r ?? "system", d = p === "system" ? o ? "dark" : "light" : p;
  we(() => {
    if (p === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = p;
  }, [p]);
  const $ = (y) => {
    const N = y.target.checked ? "dark" : "light";
    e === void 0 && i(N), t_(s, N), l?.(N);
  };
  return /* @__PURE__ */ S("label", { className: [Qf.wrapper, h].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ n(Kl, { checked: d === "dark", onChange: $ })
  ] });
}
const n_ = "_avatar_14xlu_1", r_ = "_xs_14xlu_12", o_ = "_sm_14xlu_18", s_ = "_md_14xlu_24", a_ = "_lg_14xlu_30", l_ = "_xl_14xlu_36", i_ = "_initials_14xlu_42", c_ = "_image_14xlu_57", d_ = "_status_14xlu_64", u_ = "_online_14xlu_84", f_ = "_offline_14xlu_88", __ = "_away_14xlu_92", cn = {
  avatar: n_,
  xs: r_,
  sm: o_,
  md: s_,
  lg: a_,
  xl: l_,
  initials: i_,
  image: c_,
  status: d_,
  online: u_,
  offline: f_,
  away: __
}, Vn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function p_(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function h_(e) {
  let t = 0;
  for (let r = 0; r < e.length; r += 1)
    t = t * 31 + e.charCodeAt(r) >>> 0;
  return Vn[t % Vn.length] ?? Vn[0];
}
function wy({
  name: e,
  src: t,
  alt: r,
  size: s = "md",
  status: l,
  className: c
}) {
  const h = $e(() => e ? p_(e) : "?", [e]), o = $e(() => e ? h_(e) : Vn[0], [e]), a = t != null && r === "", i = r ?? e ?? "avatar", p = l ? `${i}, ${l}` : i, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: cn.image,
      src: t,
      alt: a ? "" : l ? p : i
    }
  ) : /* @__PURE__ */ n("span", { "aria-hidden": "true", className: cn.initials, style: { background: o }, children: h });
  return /* @__PURE__ */ S(
    "span",
    {
      className: [
        cn.avatar,
        cn[s],
        l ? cn[l] : null,
        c
      ].filter(Boolean).join(" "),
      role: t ? void 0 : "img",
      "aria-label": t ? void 0 : p,
      children: [
        d,
        l && /* @__PURE__ */ n("span", { className: cn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const m_ = "_root_1nhdv_1", g_ = "_left_1nhdv_6", b_ = "_right_1nhdv_7", y_ = "_panel_1nhdv_12", x_ = "_bottom_1nhdv_20", v_ = "_tabList_1nhdv_24", k_ = "_underline_1nhdv_53", w_ = "_pills_1nhdv_72", $_ = "_tab_1nhdv_24", N_ = "_active_1nhdv_113", S_ = "_disabled_1nhdv_139", Pt = {
  root: m_,
  left: g_,
  right: b_,
  panel: y_,
  bottom: x_,
  tabList: v_,
  underline: k_,
  pills: w_,
  tab: $_,
  active: N_,
  disabled: S_
};
function $y({
  items: e,
  value: t,
  defaultValue: r,
  onChange: s,
  variant: l = "underline",
  position: c = "top",
  className: h
}) {
  const o = Ye(), a = ae(null), [i, p] = X(r ?? e[0]?.key ?? ""), d = t ?? i, $ = c === "left" || c === "right", y = (b) => {
    p(b), s?.(b);
  }, N = (b) => {
    const u = e.filter((k) => !k.disabled), f = u.findIndex((k) => k.key === d);
    let m = -1;
    b.key === "ArrowRight" || $ && b.key === "ArrowDown" ? m = (f + 1) % u.length : b.key === "ArrowLeft" || $ && b.key === "ArrowUp" ? m = (f - 1 + u.length) % u.length : b.key === "Home" ? m = 0 : b.key === "End" && (m = u.length - 1), m >= 0 && (b.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(u[m]?.key ?? "")}"]`
    )?.focus(), y(u[m]?.key ?? ""));
  }, w = e.find((b) => b.key === d);
  return /* @__PURE__ */ S("div", { className: [Pt.root, Pt[c], h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n(
      "div",
      {
        ref: a,
        role: "tablist",
        className: [Pt.tabList, Pt[l], Pt[c]].filter(Boolean).join(" "),
        onKeyDown: N,
        children: e.map((b) => {
          const u = b.key === d;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${o}-tab-${b.key}`,
              "data-tab-key": b.key,
              "aria-selected": u,
              "aria-controls": `${o}-panel-${b.key}`,
              tabIndex: u ? 0 : -1,
              disabled: b.disabled,
              className: [
                Pt.tab,
                u ? Pt.active : null,
                b.disabled ? Pt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => y(b.key),
              children: b.label
            },
            b.key
          );
        })
      }
    ),
    w && /* @__PURE__ */ n(
      "div",
      {
        role: "tabpanel",
        id: `${o}-panel-${w.key}`,
        "aria-labelledby": `${o}-tab-${w.key}`,
        className: Pt.panel,
        children: w.content
      }
    )
  ] });
}
const D_ = "_root_ph7ff_1", M_ = "_item_ph7ff_9", z_ = "_heading_ph7ff_13", C_ = "_trigger_ph7ff_17", O_ = "_disabled_ph7ff_34", E_ = "_title_ph7ff_48", I_ = "_chevron_ph7ff_52", A_ = "_open_ph7ff_59", T_ = "_content_ph7ff_63", Bt = {
  root: D_,
  item: M_,
  heading: z_,
  trigger: C_,
  disabled: O_,
  title: E_,
  chevron: I_,
  open: A_,
  content: T_
};
function Ny({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: s,
  onChange: l,
  className: c
}) {
  const h = Ye(), [o, a] = X(s ?? []), i = r ?? o, p = (d) => {
    const $ = i.includes(d) ? i.filter((y) => y !== d) : t ? [...i, d] : [d];
    a($), l?.($);
  };
  return /* @__PURE__ */ n("div", { className: [Bt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const $ = i.includes(d.key), y = `${h}-panel-${d.key}`, N = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ S("div", { className: Bt.item, children: [
      /* @__PURE__ */ n("h3", { className: Bt.heading, children: /* @__PURE__ */ S(
        "button",
        {
          type: "button",
          id: N,
          "aria-expanded": $,
          "aria-controls": y,
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
          id: y,
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
const j_ = "_textarea_we46m_1", L_ = "_invalid_we46m_25", R_ = "_xs_we46m_31", P_ = "_sm_we46m_36", B_ = "_md_we46m_41", F_ = "_lg_we46m_46", H_ = "_xl_we46m_51", Bn = {
  textarea: j_,
  invalid: L_,
  xs: R_,
  sm: P_,
  md: B_,
  lg: F_,
  xl: H_,
  "resize-none": "_resize-none_we46m_56",
  "resize-vertical": "_resize-vertical_we46m_60",
  "resize-horizontal": "_resize-horizontal_we46m_64",
  "resize-both": "_resize-both_we46m_68"
}, Sy = He(function({ size: t = "md", resize: r = "none", invalid: s = !1, className: l, ...c }, h) {
  return /* @__PURE__ */ n(
    "textarea",
    {
      ref: h,
      className: [
        Bn.textarea,
        Bn[t],
        Bn[`resize-${r}`],
        s ? Bn.invalid : null,
        l
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c
    }
  );
}), K_ = "_typography_xg25x_1", q_ = "_h1_xg25x_36", U_ = "_h2_xg25x_42", W_ = "_h3_xg25x_48", V_ = "_h4_xg25x_54", X_ = "_h5_xg25x_60", G_ = "_h6_xg25x_66", Y_ = "_button_xg25x_96", Z_ = "_caption_xg25x_103", J_ = "_overline_xg25x_109", Jn = {
  typography: K_,
  "display-1": "_display-1_xg25x_5",
  "display-2": "_display-2_xg25x_10",
  "display-3": "_display-3_xg25x_15",
  "display-4": "_display-4_xg25x_20",
  "display-5": "_display-5_xg25x_25",
  "display-6": "_display-6_xg25x_30",
  h1: q_,
  h2: U_,
  h3: W_,
  h4: V_,
  h5: X_,
  h6: G_,
  "subtitle-1": "_subtitle-1_xg25x_72",
  "subtitle-2": "_subtitle-2_xg25x_78",
  "body-1": "_body-1_xg25x_84",
  "body-2": "_body-2_xg25x_89",
  button: Y_,
  caption: Z_,
  overline: J_,
  "align-left": "_align-left_xg25x_118",
  "align-center": "_align-center_xg25x_122",
  "align-right": "_align-right_xg25x_126",
  "align-justify": "_align-justify_xg25x_130"
}, Q_ = {
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
}, ep = {
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
}, tp = {
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
}, np = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Dy = He(function({
  textStyle: t = "Body1",
  tagName: r = "Auto",
  textAlign: s,
  text: l,
  visible: c = !0,
  className: h,
  children: o,
  ...a
}, i) {
  if (c === !1) return null;
  const p = r === "Auto" ? Q_[t] : tp[r];
  return /* @__PURE__ */ n(
    p,
    {
      ref: i,
      className: [
        Jn.typography,
        Jn[ep[t]],
        s ? Jn[np[s]] : null,
        h
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? o
    }
  );
}), rp = "_root_1n255_1", op = "_trigger_1n255_9", sp = "_invalid_1n255_40", ap = "_placeholder_1n255_46", lp = "_label_1n255_53", ip = "_chevron_1n255_59", cp = "_chevronOpen_1n255_69", dp = "_menu_1n255_73", up = "_option_1n255_88", fp = "_disabled_1n255_99", _p = "_active_1n255_103", pp = "_selected_1n255_104", hp = "_header_1n255_114", mp = "_xs_1n255_121", gp = "_sm_1n255_127", bp = "_md_1n255_133", yp = "_lg_1n255_139", xp = "_xl_1n255_145", it = {
  root: rp,
  trigger: op,
  invalid: sp,
  placeholder: ap,
  label: lp,
  chevron: ip,
  chevronOpen: cp,
  menu: dp,
  option: up,
  disabled: fp,
  active: _p,
  selected: pp,
  header: hp,
  xs: mp,
  sm: gp,
  md: bp,
  lg: yp,
  xl: xp
}, vp = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function My({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: s,
  placeholder: l = "Select…",
  size: c = "md",
  invalid: h = !1,
  disabled: o = !1,
  className: a,
  ...i
}) {
  const p = Ye(), d = `${p}-listbox`, $ = ae(null), y = ae(null), [N, w] = X(r), [b, u] = X(!1), f = t ?? N, m = e.map((g, C) => g.label === "" || g.disabled ? -1 : C).filter((g) => g >= 0), k = e.findIndex((g) => g.value === f), [x, E] = X(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), _ = H(() => {
    if (o) return;
    const g = k >= 0 && m.includes(k) ? k : m[0];
    E(g ?? -1), u(!0);
  }, [o, k, m]), v = H(() => {
    u(!1), y.current?.focus();
  }, []);
  we(() => {
    if (!b) return;
    const g = (C) => {
      $.current && !$.current.contains(C.target) && u(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [b]);
  const O = (g) => {
    w(g), s?.(g), u(!1), y.current?.focus();
  }, I = (g) => {
    if (m.length === 0) return;
    const C = m.includes(x) ? m.indexOf(x) : 0, P = m[(C + g + m.length) % m.length];
    P != null && E(P);
  }, z = (g) => {
    if (!b) {
      g.key === "ArrowDown" && (g.preventDefault(), _());
      return;
    }
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), I(1);
        break;
      case "ArrowUp":
        g.preventDefault(), I(-1);
        break;
      case "Home":
        g.preventDefault(), m[0] != null && E(m[0]);
        break;
      case "End":
        g.preventDefault(), m[m.length - 1] != null && E(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), x >= 0 && e[x] && m.includes(x) && O(e[x]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), v();
        break;
      case "Tab":
        u(!1);
        break;
    }
  }, D = e.find((g) => g.value === f);
  return /* @__PURE__ */ S("div", { ref: $, className: [it.root, a].filter(Boolean).join(" "), onKeyDown: z, children: [
    /* @__PURE__ */ S(
      "button",
      {
        ref: y,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": d,
        "aria-invalid": h || void 0,
        disabled: o,
        className: [
          it.trigger,
          it[c],
          b ? it.open : null,
          h ? it.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => b ? u(!1) : _(),
        ...i,
        children: [
          /* @__PURE__ */ n("span", { className: D ? it.label : it.placeholder, children: D ? D.label : l }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [it.chevron, b ? it.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: vp },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ n(
      "div",
      {
        id: d,
        role: "listbox",
        "aria-activedescendant": x >= 0 ? `${p}-option-${x}` : void 0,
        className: it.menu,
        children: e.map(
          (g, C) => g.label === "" ? /* @__PURE__ */ n("div", { className: it.header, role: "presentation", children: g.value }, g.value) : /* @__PURE__ */ n(
            "div",
            {
              id: `${p}-option-${C}`,
              role: "option",
              "aria-selected": g.value === f,
              "aria-disabled": g.disabled || void 0,
              className: [
                it.option,
                C === x ? it.active : null,
                g.value === f ? it.selected : null,
                g.disabled ? it.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                g.disabled || O(g.value);
              },
              onMouseEnter: () => {
                !g.disabled && g.label !== "" && E(C);
              },
              children: g.label
            },
            g.value
          )
        )
      }
    )
  ] });
}
const kp = "_root_1n38r_1", wp = "_wrap_1n38r_9", $p = "_input_1n38r_26", Np = "_invalid_1n38r_31", Sp = "_clear_1n38r_57", Dp = "_menu_1n38r_82", Mp = "_option_1n38r_97", zp = "_disabled_1n38r_108", Cp = "_active_1n38r_112", Op = "_empty_1n38r_122", Ep = "_xs_1n38r_128", Ip = "_sm_1n38r_135", Ap = "_md_1n38r_142", Tp = "_lg_1n38r_149", jp = "_xl_1n38r_156", zt = {
  root: kp,
  wrap: wp,
  input: $p,
  invalid: Np,
  clear: Sp,
  menu: Dp,
  option: Mp,
  disabled: zp,
  active: Cp,
  empty: Op,
  xs: Ep,
  sm: Ip,
  md: Ap,
  lg: Tp,
  xl: jp
}, Lp = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function zy({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: s,
  onSelect: l,
  placeholder: c = "",
  size: h = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: i = Lp,
  className: p,
  ...d
}) {
  const $ = Ye(), y = `${$}-listbox`, N = ae(null), w = ae(null), [b, u] = X(r), [f, m] = X(!1), k = t ?? b, x = $e(
    () => k.trim() === "" ? [...e] : e.filter((j) => i(j, k)),
    [e, k, i]
  ), E = x.map((j, U) => j.disabled ? -1 : U).filter((j) => j >= 0), [_, v] = X(-1), O = (j) => {
    u(j), s?.(j);
  }, I = (j) => {
    O(j.label), l?.(j.value, j), m(!1);
  }, z = (j) => {
    if (E.length === 0) return;
    const U = E.includes(_) ? E.indexOf(_) : j === 1 ? -1 : 0, V = E[(U + j + E.length) % E.length];
    V != null && v(V);
  }, D = (j) => {
    a || (O(j.target.value), m(!0), v(-1));
  }, g = () => {
    a || k !== "" && m(!0);
  }, C = (j) => {
    N.current && !N.current.contains(j.relatedTarget) && m(!1);
  }, P = (j) => {
    if (!a)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), f ? z(1) : (m(!0), v(E[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), f && z(-1);
          break;
        case "Enter":
          j.preventDefault(), f && _ >= 0 && x[_] && I(x[_]);
          break;
        case "Escape":
          j.preventDefault(), m(!1);
          break;
        case "Tab":
          f && _ >= 0 && x[_] && I(x[_]), m(!1);
          break;
      }
  }, A = () => {
    O(""), v(-1), m(!0), w.current?.focus();
  };
  return /* @__PURE__ */ S("div", { ref: N, className: [zt.root, p].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S("div", { className: [zt.wrap, zt[h], o ? zt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: w,
          type: "text",
          role: "combobox",
          "aria-expanded": f,
          "aria-controls": y,
          "aria-autocomplete": "list",
          "aria-activedescendant": f && _ >= 0 ? `${$}-option-${_}` : void 0,
          "aria-invalid": o || void 0,
          disabled: a,
          value: k,
          placeholder: c,
          className: zt.input,
          onChange: D,
          onFocus: g,
          onBlur: C,
          onKeyDown: P,
          ...d
        }
      ),
      k !== "" && !a && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: zt.clear,
          "aria-label": "Clear",
          onClick: A,
          children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
        }
      )
    ] }),
    f && /* @__PURE__ */ n("div", { id: y, role: "listbox", className: zt.menu, children: x.length === 0 ? /* @__PURE__ */ n("div", { className: zt.empty, children: "No matches" }) : x.map((j, U) => /* @__PURE__ */ n(
      "div",
      {
        id: `${$}-option-${U}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": j.disabled || void 0,
        className: [
          zt.option,
          U === _ ? zt.active : null,
          j.disabled ? zt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          j.disabled || I(j);
        },
        onMouseDown: (V) => {
          V.preventDefault(), j.disabled || I(j);
        },
        onMouseEnter: () => {
          j.disabled || v(U);
        },
        children: j.label
      },
      j.value
    )) })
  ] });
}
const Rp = "_box_1r6oj_1", Pp = "_option_1r6oj_12", Bp = "_disabled_1r6oj_23", Fp = "_selected_1r6oj_27", Hp = "_active_1r6oj_33", Sn = {
  box: Rp,
  option: Pp,
  disabled: Bp,
  selected: Fp,
  active: Hp
};
function Cy({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: s = !1,
  onChange: l,
  className: c,
  style: h,
  ...o
}) {
  const a = Ye(), [i, p] = X(() => {
    const x = r;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), d = t == null ? i : Array.isArray(t) ? t : [t], $ = e.findIndex((x) => !x.disabled), [y, N] = X(() => $ >= 0 ? $ : 0), w = ae(""), b = ae(null), u = (x) => {
    p(x), l?.(s ? x : x[0] ?? "");
  }, f = e.map((x, E) => x.disabled ? -1 : E).filter((x) => x >= 0), m = (x) => {
    const E = e[x];
    if (!(!E || E.disabled))
      if (N(x), s) {
        const _ = d.includes(E.value) ? d.filter((v) => v !== E.value) : [...d, E.value];
        u(_);
      } else
        u([E.value]);
  }, k = (x) => {
    if (f.length === 0) return;
    const E = f.includes(y) ? y : f[0];
    let _ = -1;
    if (x.key === "ArrowDown")
      _ = f[(f.indexOf(E) + 1) % f.length];
    else if (x.key === "ArrowUp")
      _ = f[(f.indexOf(E) - 1 + f.length) % f.length];
    else if (x.key === "Home")
      _ = f[0];
    else if (x.key === "End")
      _ = f[f.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), m(E);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const v = (w.current + x.key).toLowerCase();
      w.current = v, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        w.current = "";
      }, 500);
      const O = [...f, ...f], I = f.indexOf(E) + 1, z = O.slice(I).find(
        (D) => e[D]?.label.toLowerCase().startsWith(v)
      );
      z != null && N(z);
      return;
    }
    _ >= 0 && (x.preventDefault(), N(_), s || u([e[_]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[y] ? `${a}-option-${y}` : void 0,
      style: h,
      className: [Sn.box, c].filter(Boolean).join(" "),
      onKeyDown: k,
      ...o,
      children: e.map((x, E) => {
        const _ = d.includes(x.value), v = E === y;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${E}`,
            role: "option",
            "aria-selected": _,
            "aria-disabled": x.disabled || void 0,
            className: [
              Sn.option,
              _ ? Sn.selected : null,
              v ? Sn.active : null,
              x.disabled ? Sn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(E),
            children: x.label
          },
          x.value
        );
      })
    }
  );
}
const Kp = "_group_br8r4_1", qp = "_legend_br8r4_8", Up = "_list_br8r4_16", Wp = "_item_br8r4_25", Vp = "_disabled_br8r4_32", Xp = "_label_br8r4_37", Gp = "_checkbox_br8r4_48", en = {
  group: Kp,
  legend: qp,
  list: Up,
  item: Wp,
  disabled: Vp,
  label: Xp,
  checkbox: Gp
};
function Oy({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: s,
  legend: l,
  name: c,
  className: h
}) {
  const [o, a] = X(() => [...r]), i = t ?? o, p = (d, $) => {
    const y = $ ? [...i, d] : i.filter((N) => N !== d);
    a(y), s?.(y);
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
                onChange: (y) => p(d.value, y.target.checked)
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
const Yp = "_group_t2uos_1", Zp = "_legend_t2uos_8", Jp = "_list_t2uos_16", Qp = "_item_t2uos_25", e1 = "_disabled_t2uos_32", t1 = "_label_t2uos_37", n1 = "_radio_t2uos_48", tn = {
  group: Yp,
  legend: Zp,
  list: Jp,
  item: Qp,
  disabled: e1,
  label: t1,
  radio: n1
};
function Ey({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: s,
  legend: l,
  name: c,
  className: h
}) {
  const [o, a] = X(r), i = t ?? o, p = (d) => {
    a(d), s?.(d);
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
                onChange: (y) => p(y.target.value)
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
const r1 = "_bar_9r6ow_1", o1 = "_vertical_9r6ow_12", s1 = "_option_9r6ow_17", a1 = "_selected_9r6ow_38", l1 = "_sm_9r6ow_55", i1 = "_md_9r6ow_61", c1 = "_lg_9r6ow_67", dn = {
  bar: r1,
  vertical: o1,
  option: s1,
  selected: a1,
  sm: l1,
  md: i1,
  lg: c1
};
function Nr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Iy(e) {
  const {
    options: t = [],
    value: r,
    defaultValue: s,
    multiple: l,
    orientation: c = "horizontal",
    onChange: h,
    size: o = "md",
    className: a,
    ...i
  } = e, p = l ?? !1, [d, $] = X(
    s ?? (p ? [] : t[0]?.value)
  ), y = r ?? d, N = l === !0 || l === void 0 && Array.isArray(y), w = (u) => {
    if (!N) {
      $(u), h?.(u);
      return;
    }
    const f = Nr(y), m = f.includes(u) ? f.filter((k) => k !== u) : [...f, u];
    $(m), h?.(m);
  }, b = (u) => N ? Nr(y).includes(u) : y === u;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        dn.bar,
        dn[o],
        c === "vertical" ? dn.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((u) => {
        const f = b(u.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: u.disabled,
            className: [
              dn.option,
              f ? dn.selected : null,
              u.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => w(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const d1 = "_toggle_19izf_1", u1 = "_pressed_19izf_29", f1 = "_sm_19izf_41", _1 = "_md_19izf_47", p1 = "_lg_19izf_53", h1 = "_fullWidth_19izf_59", Fn = {
  toggle: d1,
  pressed: u1,
  sm: f1,
  md: _1,
  lg: p1,
  fullWidth: h1
}, Ay = He(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: s,
    size: l = "md",
    fullWidth: c = !1,
    className: h,
    type: o = "button",
    ...a
  }, i) {
    const [p, d] = X(r), $ = t ?? p, y = () => {
      const N = !$;
      d(N), s?.(N);
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
        onClick: y,
        ...a
      }
    );
  }
), m1 = "_root_1vkmu_1", g1 = "_action_1vkmu_196", b1 = "_filled_1vkmu_216", y1 = "_caret_1vkmu_220", x1 = "_flat_1vkmu_241", v1 = "_outlined_1vkmu_249", k1 = "_text_1vkmu_257", w1 = "_sm_1vkmu_347", $1 = "_md_1vkmu_359", N1 = "_lg_1vkmu_371", S1 = "_menu_1vkmu_383", D1 = "_item_1vkmu_396", M1 = "_disabled_1vkmu_417", z1 = "_active_1vkmu_421", C1 = "_danger_1vkmu_430", wt = {
  root: m1,
  "style-primary": "_style-primary_1vkmu_11",
  "style-secondary": "_style-secondary_1vkmu_21",
  "style-base": "_style-base_1vkmu_31",
  "style-light": "_style-light_1vkmu_41",
  "style-dark": "_style-dark_1vkmu_51",
  "style-info": "_style-info_1vkmu_61",
  "style-success": "_style-success_1vkmu_71",
  "style-warning": "_style-warning_1vkmu_81",
  "style-danger": "_style-danger_1vkmu_91",
  action: g1,
  filled: b1,
  caret: y1,
  flat: x1,
  outlined: v1,
  text: k1,
  "shade-lighter": "_shade-lighter_1vkmu_274",
  "shade-light": "_shade-light_1vkmu_274",
  "shade-dark": "_shade-dark_1vkmu_284",
  "shade-darker": "_shade-darker_1vkmu_288",
  sm: w1,
  md: $1,
  lg: N1,
  menu: S1,
  item: D1,
  disabled: M1,
  active: z1,
  danger: C1
};
function Ty({
  label: e,
  onClick: t,
  items: r = [],
  severity: s = "primary",
  variant: l = "filled",
  shade: c = "default",
  size: h = "md",
  disabled: o = !1,
  className: a,
  ...i
}) {
  const d = `${Ye()}-menu`, $ = ae(null), y = ae(null), N = ae([]), [w, b] = X(!1), [u, f] = X(-1), m = $e(
    () => r.map((z, D) => z.disabled ? -1 : D).filter((z) => z >= 0),
    [r]
  ), k = H(() => {
    o || (f(m[0] ?? -1), b(!0));
  }, [o, m]), x = H(() => {
    b(!1), y.current?.focus();
  }, []);
  we(() => {
    if (!w) return;
    const z = (D) => {
      $.current && !$.current.contains(D.target) && b(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [w]);
  const E = ae(w);
  we(() => {
    const z = E.current;
    if (E.current = w, !w || z) return;
    const D = m.includes(u) ? u : m[0] ?? -1;
    D >= 0 && N.current[D]?.focus();
  }, [w, u, m]);
  const _ = (z) => {
    const D = r[z];
    !D || D.disabled || (D.onClick?.(), b(!1), y.current?.focus());
  }, v = (z) => {
    if (m.length === 0) return;
    const D = m.includes(u) ? m.indexOf(u) : z === 1 ? -1 : 0, g = m[(D + z + m.length) % m.length];
    g != null && (f(g), N.current[g]?.focus());
  }, O = (z) => {
    const D = z === "first" ? m[0] : m[m.length - 1];
    D != null && (f(D), N.current[D]?.focus());
  }, I = (z) => {
    switch (z.key) {
      case "ArrowDown":
        z.preventDefault(), v(1);
        break;
      case "ArrowUp":
        z.preventDefault(), v(-1);
        break;
      case "Home":
        z.preventDefault(), O("first");
        break;
      case "End":
        z.preventDefault(), O("last");
        break;
      case "Escape":
        z.preventDefault(), x();
        break;
      case "Tab":
        b(!1);
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
        wt[`style-${s}`],
        wt[cr(l, "filled")],
        c !== "default" ? wt[`shade-${c}`] : null,
        a
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
            ref: y,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": w,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => w ? b(!1) : k(),
            onKeyDown: (z) => {
              !w && z.key === "ArrowDown" && (z.preventDefault(), k());
            },
            children: /* @__PURE__ */ n(Ce, { name: "chevron-down" })
          }
        ),
        w && /* @__PURE__ */ n(
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
                ref: (g) => {
                  N.current[D] = g;
                },
                type: "button",
                role: "menuitem",
                tabIndex: D === u ? 0 : -1,
                disabled: z.disabled,
                className: [
                  wt.item,
                  D === u ? wt.active : null,
                  z.danger ? wt.danger : null,
                  z.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => _(D),
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
const O1 = "_textbox_yfceg_1", E1 = "_invalid_yfceg_31", I1 = "_xs_yfceg_37", A1 = "_sm_yfceg_43", T1 = "_md_yfceg_49", j1 = "_lg_yfceg_55", L1 = "_xl_yfceg_61", Qn = {
  textbox: O1,
  invalid: E1,
  xs: I1,
  sm: A1,
  md: T1,
  lg: j1,
  xl: L1
}, jy = He(function({ size: t = "md", invalid: r = !1, className: s, type: l = "text", ...c }, h) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: h,
      type: l,
      className: [Qn.textbox, Qn[t], r ? Qn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), R1 = "_wrapper_1smbu_1", P1 = "_input_1smbu_8", B1 = "_invalid_1smbu_38", F1 = "_toggle_1smbu_44", H1 = "_xs_1smbu_79", K1 = "_sm_1smbu_85", q1 = "_md_1smbu_91", U1 = "_lg_1smbu_97", W1 = "_xl_1smbu_103", Dn = {
  wrapper: R1,
  input: P1,
  invalid: B1,
  toggle: F1,
  xs: H1,
  sm: K1,
  md: q1,
  lg: U1,
  xl: W1
}, Ly = He(function({
  size: t = "md",
  invalid: r = !1,
  className: s,
  disabled: l,
  showLabel: c = "Show password",
  hideLabel: h = "Hide password",
  ...o
}, a) {
  const [i, p] = X(!1);
  return /* @__PURE__ */ S("div", { className: Dn.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: a,
        type: i ? "text" : "password",
        disabled: l,
        className: [Dn.input, Dn[t], r ? Dn.invalid : null, s].filter(Boolean).join(" "),
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
}), V1 = "_mask_1acmv_1", X1 = "_invalid_1acmv_31", G1 = "_xs_1acmv_37", Y1 = "_sm_1acmv_43", Z1 = "_md_1acmv_49", J1 = "_lg_1acmv_55", Q1 = "_xl_1acmv_61", er = {
  mask: V1,
  invalid: X1,
  xs: G1,
  sm: Y1,
  md: Z1,
  lg: J1,
  xl: Q1
};
function Sr(e, t) {
  let r = e.replace(/\D/g, ""), s = "";
  for (const l of t)
    if (l === "#") {
      if (r.length === 0) break;
      s += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      s += l;
    else
      break;
  return s;
}
const Ry = He(function({
  size: t = "md",
  invalid: r = !1,
  mask: s,
  value: l,
  defaultValue: c = "",
  onChange: h,
  className: o,
  onKeyDown: a,
  ...i
}, p) {
  const [d, $] = X(c ?? ""), y = l !== void 0, N = y ? l ?? "" : d, w = (f) => {
    const m = Sr(f, s);
    return y || $(m), h?.(m), m;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      value: N,
      onChange: (f) => {
        w(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const m = f.currentTarget.selectionStart ?? N.length, k = N[m - 1];
          if (k !== void 0 && !/\d/.test(k)) {
            f.preventDefault();
            const x = N.replace(/\D/g, "");
            w(Sr(x.slice(0, -1), s));
          }
        }
        a?.(f);
      },
      className: [er.mask, er[t], r ? er.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...i
    }
  );
}), eh = "_wrapper_pn38o_1", th = "_input_pn38o_8", nh = "_invalid_pn38o_38", rh = "_button_pn38o_44", oh = "_up_pn38o_76", sh = "_down_pn38o_81", ah = "_xs_pn38o_86", lh = "_sm_pn38o_92", ih = "_md_pn38o_98", ch = "_lg_pn38o_104", dh = "_xl_pn38o_110", Xt = {
  wrapper: eh,
  input: th,
  invalid: nh,
  button: rh,
  up: oh,
  down: sh,
  xs: ah,
  sm: lh,
  md: ih,
  lg: ch,
  xl: dh
};
function or(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function uh(e) {
  let t = "", r = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? t += s : s === "." && !r ? (r = !0, t += s) : s === "-" && t.length === 0 && (t += s);
  return t;
}
function Yr(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function fh(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function _h(e, t, r, s, l) {
  const h = or(e) ?? r ?? 0;
  let o;
  return r === void 0 ? o = h + t * l : t > 0 ? o = r + Math.ceil((h - r + 1e-9) / l) * l : o = r + Math.floor((h - r - 1e-9) / l) * l, Yr(o, r, s);
}
const Py = He(function({
  size: t = "md",
  invalid: r = !1,
  className: s,
  disabled: l,
  value: c,
  defaultValue: h,
  onChange: o,
  min: a,
  max: i,
  step: p = 1,
  incrementLabel: d = "Increment",
  decrementLabel: $ = "Decrement",
  onBlur: y,
  onKeyDown: N,
  ...w
}, b) {
  const [u, f] = X(h != null ? String(h) : ""), m = c !== void 0, k = m ? c == null ? "" : String(c) : u, x = (z) => {
    m || f(z), o?.(or(z));
  }, E = (z) => {
    m || f(String(z)), o?.(z);
  }, _ = (z) => {
    l || E(_h(k, z, a, i, p));
  }, v = (z) => {
    x(uh(z.target.value));
  }, O = (z) => {
    z.key === "ArrowUp" ? (z.preventDefault(), _(1)) : z.key === "ArrowDown" && (z.preventDefault(), _(-1)), N?.(z);
  }, I = (z) => {
    const D = or(k);
    D === null ? (m || f(""), o?.(null)) : E(Yr(fh(D, a, p), a, i)), y?.(z);
  };
  return /* @__PURE__ */ S("div", { className: Xt.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: b,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: k,
        disabled: l,
        onChange: v,
        onKeyDown: O,
        onBlur: I,
        className: [Xt.input, Xt[t], r ? Xt.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...w
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Xt.button, Xt.up].join(" "),
        "aria-label": d,
        disabled: l,
        onClick: () => _(1),
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
        onClick: () => _(-1),
        children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), Se = {
  "dx-colorpicker": "_dx-colorpicker_w12u6_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_w12u6_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_w12u6_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_w12u6_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_w12u6_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_w12u6_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_w12u6_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_w12u6_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_w12u6_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_w12u6_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_w12u6_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_w12u6_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_w12u6_133",
  "dx-saturation-picker": "_dx-saturation-picker_w12u6_138",
  "dx-hue-picker": "_dx-hue-picker_w12u6_149",
  "dx-alpha-picker": "_dx-alpha-picker_w12u6_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_w12u6_155",
  "dx-hue-indicator": "_dx-hue-indicator_w12u6_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_w12u6_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_w12u6_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_w12u6_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_w12u6_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_w12u6_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_w12u6_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_w12u6_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_w12u6_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_w12u6_300"
}, ph = [
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
function bt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function sr(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let r = t[1];
  return r.length === 3 && (r = r.split("").map((s) => s + s).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function hh({ r: e, g: t, b: r }) {
  const s = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${s(e)}${s(t)}${s(r)}`;
}
function mh({ r: e, g: t, b: r }) {
  const s = e / 255, l = t / 255, c = r / 255, h = Math.max(s, l, c), o = Math.min(s, l, c), a = h - o;
  let i = 0;
  return a !== 0 && (h === s ? i = (l - c) / a % 6 : h === l ? i = (c - s) / a + 2 : i = (s - l) / a + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: h === 0 ? 0 : a / h,
    v: h
  };
}
function un({ h: e, s: t, v: r }) {
  const s = r * t, l = e / 60, c = s * (1 - Math.abs(l % 2 - 1));
  let h = 0, o = 0, a = 0;
  l < 1 ? (h = s, o = c) : l < 2 ? (h = c, o = s) : l < 3 ? (o = s, a = c) : l < 4 ? (o = c, a = s) : l < 5 ? (h = c, a = s) : (h = s, a = c);
  const i = r - s;
  return {
    r: Math.round((h + i) * 255),
    g: Math.round((o + i) * 255),
    b: Math.round((a + i) * 255),
    a: 1
  };
}
function gh(e) {
  const t = sr(e);
  if (t) return t;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: bt(Number(r[1]), 0, 255),
    g: bt(Number(r[2]), 0, 255),
    b: bt(Number(r[3]), 0, 255),
    a: r[4] != null ? bt(Number(r[4]), 0, 1) : 1
  } : null;
}
function Dr({ r: e, g: t, b: r, a: s }) {
  return s >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(s * 100) / 100})`;
}
const By = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: s = !0,
  palette: l = ph,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: i = "",
  size: p = "md",
  tabIndex: d = 0,
  className: $,
  onChange: y,
  onValueChange: N,
  onOpen: w,
  onClose: b
}) => {
  const u = ae(null), f = ae(null), m = ae(null), k = ae(null), x = ae(null), E = Ye(), _ = ae(null), v = $e(
    () => gh(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [O, I] = X(!1), [z, D] = X(null), g = z ?? v, C = $e(() => mh(g), [g]), P = H(
    (W) => {
      const M = Dr(W);
      y?.(M), N?.(M);
    },
    [y, N]
  ), A = H(
    (W, M) => {
      D(W), M && !c && P(W);
    },
    [c, P]
  ), j = H(() => {
    I(!1), D(null), b?.(), f.current?.focus();
  }, [b]), U = H(() => {
    o || (D(v), I(!0), w?.());
  }, [o, v, w]), V = H(() => {
    O ? j() : U();
  }, [O, j, U]), J = H(
    (W, M) => {
      const F = m.current;
      if (!F) return C;
      const ne = F.getBoundingClientRect(), fe = bt((W - ne.left) / ne.width, 0, 1), re = bt(1 - (M - ne.top) / ne.height, 0, 1);
      return { h: C.h, s: fe, v: re };
    },
    [C]
  ), Z = H(
    (W, M) => {
      if (!M) return 0;
      const F = M.getBoundingClientRect();
      return bt((W - F.left) / F.width, 0, 1);
    },
    []
  ), ee = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), _.current = "sat";
    const M = J(W.clientX, W.clientY);
    A({ ...un(M), a: g.a }, !0);
  }, ue = (W) => {
    if (_.current !== "sat") return;
    W.preventDefault();
    const M = J(W.clientX, W.clientY);
    A({ ...un(M), a: g.a }, !0);
  }, ie = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), _.current = "hue";
    const M = Z(W.clientX, k.current);
    A({ ...un({ ...C, h: M * 360 }), a: g.a }, !0);
  }, q = (W) => {
    if (_.current !== "hue") return;
    W.preventDefault();
    const M = Z(W.clientX, k.current);
    A({ ...un({ ...C, h: M * 360 }), a: g.a }, !0);
  }, L = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), _.current = "alpha";
    const M = Z(W.clientX, x.current);
    A({ ...g, a: M }, !0);
  }, te = (W) => {
    if (_.current !== "alpha") return;
    W.preventDefault();
    const M = Z(W.clientX, x.current);
    A({ ...g, a: M }, !0);
  }, G = () => {
    _.current = null;
  }, ce = H(
    (W, M) => {
      const F = { h: C.h, s: bt(C.s + W, 0, 1), v: bt(C.v + M, 0, 1) };
      A({ ...un(F), a: g.a }, !0);
    },
    [C, g.a, A]
  ), se = H(
    (W) => {
      const M = (C.h + W + 360) % 360;
      A({ ...un({ ...C, h: M }), a: g.a }, !0);
    },
    [C, g.a, A]
  ), ye = H(
    (W) => {
      A({ ...g, a: bt(g.a + W, 0, 1) }, !0);
    },
    [g, A]
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
        W.preventDefault(), j();
        break;
    }
  }, Be = (W, M) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), M === "hue" ? se(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), M === "hue" ? se(6) : ye(0.05);
        break;
      case "Escape":
        W.preventDefault(), j();
        break;
    }
  }, ve = (W, M) => {
    if (W === "hex") {
      const re = sr(M);
      re && A({ ...re, a: g.a }, !0);
      return;
    }
    const F = M.replace(/[^\d.]/g, ""), ne = Number.parseFloat(F);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const re = F.includes(".") ? bt(ne, 0, 1) : bt(ne / 100, 0, 1);
      A({ ...g, a: re }, !0);
      return;
    }
    const fe = { r: 255, g: 255, b: 255 };
    A({ ...g, [W]: bt(ne, 0, fe[W]) }, !0);
  }, We = () => {
    z && (P(z), D(null), I(!1), b?.(), f.current?.focus());
  };
  we(() => {
    if (!O) return;
    const W = (M) => {
      u.current && !u.current.contains(M.target) && j();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [O, j]), we(() => {
    if (!O) return;
    const W = (M) => {
      M.key === "Escape" && j();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [O, j]);
  const be = p === "xs" ? Se["dx-colorpicker-trigger-xs"] : p === "sm" ? Se["dx-colorpicker-trigger-sm"] : p === "lg" ? Se["dx-colorpicker-trigger-lg"] : p === "xl" ? Se["dx-colorpicker-trigger-xl"] : Se["dx-colorpicker-trigger"], Ze = Dr(g), Ve = hh(g), Re = { x: C.s * 100, y: (1 - C.v) * 100 }, tt = C.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ S("div", { className: Se["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(C.s * 100),
        "aria-valuetext": `Saturation ${Math.round(C.s * 100)}%, value ${Math.round(C.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        className: Se["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${C.h}, 100%, 50%)`
        },
        onKeyDown: ke,
        onPointerDown: ee,
        onPointerMove: ue,
        onPointerUp: G,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-saturation-indicator"],
            style: { left: `${Re.x}%`, top: `${Re.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: k,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(C.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        className: Se["dx-hue-picker"],
        onKeyDown: (W) => Be(W, "hue"),
        onPointerDown: ie,
        onPointerMove: q,
        onPointerUp: G,
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
        ref: x,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        className: Se["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${C.h}, 100%, 50%))`
        },
        onKeyDown: (W) => Be(W, "alpha"),
        onPointerDown: L,
        onPointerMove: te,
        onPointerUp: G,
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
            value: g.r,
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
            value: g.g,
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
            value: g.b,
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
            value: Math.round(g.a * 100),
            onChange: (W) => ve("a", W.target.value)
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-palette"], children: l.map((W) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const M = sr(W);
          c ? A({ ...M, a: g.a }, !1) : (D(null), P({ ...M, a: g.a }), I(!1), b?.(), f.current?.focus());
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
      ref: u,
      className: [
        Se["dx-colorpicker"],
        O ? Se["dx-colorpicker-open"] : null,
        a ? Se["dx-colorpicker-invalid"] : null,
        $
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ S(
          "button",
          {
            ref: f,
            type: "button",
            className: [Se["dx-colorpicker-trigger"], be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": O,
            "aria-controls": E,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: d,
            onClick: V,
            onKeyDown: (W) => {
              W.key === "Escape" && O && (W.preventDefault(), j());
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
        O && /* @__PURE__ */ n(
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
  "dx-datepicker": "_dx-datepicker_1m4y2_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_1m4y2_9",
  "dx-datepicker-input": "_dx-datepicker-input_1m4y2_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_1m4y2_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_1m4y2_49",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_1m4y2_55",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_1m4y2_61",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_1m4y2_67",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_1m4y2_73",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_1m4y2_79",
  "dx-datepicker-clear": "_dx-datepicker-clear_1m4y2_114",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_1m4y2_144",
  "dx-datepicker-popup": "_dx-datepicker-popup_1m4y2_148",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_1m4y2_160",
  "dx-datepicker-header": "_dx-datepicker-header_1m4y2_166",
  "dx-datepicker-nav": "_dx-datepicker-nav_1m4y2_174",
  "dx-datepicker-title": "_dx-datepicker-title_1m4y2_200",
  "dx-datepicker-grid": "_dx-datepicker-grid_1m4y2_208",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_1m4y2_213",
  "dx-datepicker-row": "_dx-datepicker-row_1m4y2_214",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_1m4y2_219",
  "dx-datepicker-day": "_dx-datepicker-day_1m4y2_229",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_1m4y2_257",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_1m4y2_261",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_1m4y2_271",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_1m4y2_276",
  "dx-datepicker-time": "_dx-datepicker-time_1m4y2_282",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_1m4y2_291",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_1m4y2_297",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_1m4y2_302",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_1m4y2_306",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_1m4y2_326",
  "dx-datepicker-ok": "_dx-datepicker-ok_1m4y2_354"
}, bh = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function yh(e, t) {
  const r = pt(e);
  return t ? `${r} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : r;
}
function ar(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), s = Number(t[2]), l = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (s < 1 || s > 12 || l < 1 || l > 31) return null;
  const a = new Date(r, s - 1, l, c, h, o);
  return a.getFullYear() !== r || a.getMonth() !== s - 1 || a.getDate() !== l ? null : { year: r, month: s, day: l, hour: c, minute: h, second: o };
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
function Hn(e, t) {
  const r = new Date(e.year, e.month - 1 + t, 1), s = r.getFullYear(), l = r.getMonth() + 1, c = new Date(s, l, 0).getDate();
  return {
    year: s,
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
  yy: (e) => yt(e.year % 100),
  MM: (e) => yt(e.month),
  M: (e) => String(e.month),
  dd: (e) => yt(e.day),
  d: (e) => String(e.day),
  HH: (e) => yt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => yt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => yt(e.second),
  s: (e) => String(e.second),
  tt: (e, t, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, xh = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], vh = ["y", "M", "d", "H", "m", "s"];
function Kn(e, t, r) {
  const s = new Date(
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
    for (const a of xh)
      if (t.startsWith(a, c)) {
        l += zr[a](e, s, r), c += a.length, h = !0;
        break;
      }
    if (h) continue;
    const o = t[c];
    if (vh.includes(o)) {
      l += zr[o](e, s, r), c += 1;
      continue;
    }
    l += o, c += 1;
  }
  return l;
}
const kh = [
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
function wh(e, t) {
  const r = {};
  let s = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const a of kh)
      if (t.startsWith(a, l)) {
        o = a;
        break;
      }
    if (o) {
      const a = e.slice(s, s + o.length);
      if (!/^\d+$/.test(a)) return null;
      const i = Number(a);
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
      s += o.length, l += o.length;
      continue;
    }
    if (e[s] !== t[l]) return null;
    s += 1, l += 1;
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
  const r = ar(e);
  return r || wh(e, t);
}
function $h(e, t, r) {
  return t && pt(e) < pt(t) ? t : r && pt(e) > pt(r) ? r : e;
}
const Nh = ["hour", "minute", "second"];
function qn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Fy = He(function({
  size: t = "md",
  invalid: r = !1,
  value: s,
  defaultValue: l,
  format: c = "yyyy-MM-dd",
  min: h,
  max: o,
  showTime: a = !1,
  showButton: i = !0,
  allowClear: p = !1,
  inline: d = !1,
  disabledDates: $,
  locale: y = "en-US",
  onChange: N,
  onValueChange: w,
  onOpen: b,
  onClose: u,
  disabled: f,
  readOnly: m,
  placeholder: k,
  ariaLabel: x,
  triggerLabel: E,
  clearLabel: _,
  tabIndex: v,
  className: O,
  onBlur: I,
  onKeyDown: z,
  ...D
}, g) {
  const C = ae(null), P = ae(null), A = ae(null), j = ae(null), U = Ye(), V = s !== void 0, [J, Z] = X(
    () => l != null ? Kn(Mn(l, c) ?? Gt(), c, y) : ""
  ), [ee, ue] = X(!1), [ie, q] = X(null), [L, te] = X(() => {
    const K = s !== void 0 ? s ?? "" : l ?? "";
    if (K) {
      const de = Mn(K, c);
      if (de) return de;
    }
    return Gt();
  }), G = $e(() => h ? ar(h) : null, [h]), ce = $e(() => o ? ar(o) : null, [o]), se = $e(
    () => new Set($ ?? []),
    [$]
  ), ye = $e(() => {
    const K = V ? s ?? "" : J;
    return K ? Mn(K, c) : null;
  }, [s, J, V, c]), ke = H(
    (K) => {
      const de = pt(K);
      return !!(se.has(de) || G && de < pt(G) || ce && de > pt(ce));
    },
    [se, G, ce]
  ), Be = H(
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
  ), ve = H(
    (K) => {
      V || Z(K ? Kn(K, c, y) : "");
      const de = K ? yh(K, a) : "";
      N?.(de), w?.(de);
    },
    [V, c, y, a, N, w]
  ), We = H(
    (K) => {
      P.current = K, typeof g == "function" ? g(K) : g && (g.current = K);
    },
    [g]
  ), be = H(() => {
    ue(!1), q(null), u?.(), d || A.current?.focus();
  }, [d, u]), Ze = H(() => {
    if (f) return;
    const K = ye ?? Gt();
    q(K), te(Be(K)), ue(!0), b?.();
  }, [f, ye, Be, b]), Ve = H(() => {
    ee ? be() : Ze();
  }, [ee, be, Ze]), Re = H((K) => {
    j.current?.querySelector(
      `[data-date="${pt(K)}"]`
    )?.focus();
  }, []), tt = H(
    (K) => {
      if (ke(K)) return;
      const de = ie ?? ye, Ke = {
        ...a ? {
          hour: de?.hour ?? 0,
          minute: de?.minute ?? 0,
          second: de?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: K.year,
        month: K.month,
        day: K.day
      };
      q(Ke), a || (ve(Ke), be());
    },
    [ke, ie, ye, a, ve, be]
  ), Qe = H(
    (K, de) => {
      q((Pe) => {
        const Ke = Pe ?? ye ?? Gt(), Dt = Math.min(K === "hour" ? 23 : 59, Math.max(0, Ke[K] + de));
        return { ...Ke, [K]: Dt };
      });
    },
    [ye]
  ), et = H(
    (K, de) => {
      const Pe = de.replace(/\D/g, ""), Ke = Pe === "" ? 0 : Number(Pe), Rt = K === "hour" ? 23 : 59;
      q((Dt) => ({ ...Dt ?? ye ?? Gt(), [K]: Math.min(Rt, Ke) }));
    },
    [ye]
  ), W = H(() => {
    ie && (ve(ie), be());
  }, [ie, ve, be]), M = H(() => {
    if (ee) return;
    const K = Mn(J, c);
    ve(K ? $h(K, G, ce) : null);
  }, [ee, J, c, G, ce, ve]), F = (K) => {
    const de = K.target.value;
    V || Z(de), ee && q(null);
  }, ne = (K) => {
    K.key === "Enter" ? (K.preventDefault(), ee ? ie && (ve(ie), be()) : M()) : K.key === "Escape" ? ee && (K.preventDefault(), be()) : K.key === "ArrowDown" && !ee ? (K.preventDefault(), Ze()) : K.key === "Tab" && ee && ue(!1), z?.(K);
  }, fe = (K) => {
    M(), I?.(K);
  }, re = (K) => {
    let de = null;
    switch (K.key) {
      case "ArrowLeft":
        de = Ft(L, -1), K.preventDefault();
        break;
      case "ArrowRight":
        de = Ft(L, 1), K.preventDefault();
        break;
      case "ArrowUp":
        de = Ft(L, -7), K.preventDefault();
        break;
      case "ArrowDown":
        de = Ft(L, 7), K.preventDefault();
        break;
      case "Home":
        de = Ft(L, -Mr(L)), K.preventDefault();
        break;
      case "End":
        de = Ft(L, 6 - Mr(L)), K.preventDefault();
        break;
      case "PageUp":
        de = Hn(L, K.shiftKey ? -12 : -1), K.preventDefault();
        break;
      case "PageDown":
        de = Hn(L, K.shiftKey ? 12 : 1), K.preventDefault();
        break;
      case "Enter":
      case " ":
        K.preventDefault(), tt(L);
        break;
      case "Escape":
        K.preventDefault(), be();
        break;
      case "Tab":
        ue(!1);
        break;
    }
    if (de) {
      const Pe = Be(de);
      te(Pe), setTimeout(() => Re(Pe), 0);
    }
  };
  we(() => {
    if (!ee) return;
    const K = (de) => {
      C.current && !C.current.contains(de.target) && be();
    };
    return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
  }, [ee, be]), we(() => {
    if (!ee) return;
    const K = (de) => {
      de.key === "Escape" && be();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [ee, be]);
  const me = () => {
    V || Z(""), N?.(""), w?.(""), P.current?.focus();
  }, Ne = ee && ie ? Kn(ie, c, y) : V ? s ? Kn(Mn(s, c) ?? Gt(), c, y) : "" : J, Fe = V ? !!s : J.length > 0, Je = d || ee, dt = { year: L.year, month: L.month }, xt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
    year: dt.year,
    month: dt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let K = 0; K < bh; K += 1)
    De.push(Ft(Q, K - xt));
  const nt = ie ? pt(ie) : ye ? pt(ye) : null, Ut = pt(Gt()), St = `${dt.year}-${yt(dt.month)}`, Me = $e(
    () => new Intl.DateTimeFormat(y, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [y]
  ), Xe = new Intl.DateTimeFormat(y, {
    month: "long",
    year: "numeric"
  }).format(new Date(dt.year, dt.month - 1, 1)), vt = Array.from(
    { length: 7 },
    (K, de) => new Intl.DateTimeFormat(y, { weekday: "short" }).format(
      new Date(2021, 0, 3 + de)
    )
  ), Lt = t === "xs" ? Oe["dx-datepicker-input--xs"] : t === "sm" ? Oe["dx-datepicker-input--sm"] : t === "lg" ? Oe["dx-datepicker-input--lg"] : t === "xl" ? Oe["dx-datepicker-input--xl"] : Oe["dx-datepicker-input--md"], Zt = /* @__PURE__ */ S(
    "div",
    {
      className: Oe["dx-datepicker-calendar"],
      "aria-label": x ?? "Date picker",
      children: [
        /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-header"], children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Oe["dx-datepicker-nav"],
              "aria-label": "Previous month",
              onClick: () => {
                const K = Be(Hn(L, -1));
                te(K), setTimeout(() => Re(K), 0);
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
                const K = Be(Hn(L, 1));
                te(K), setTimeout(() => Re(K), 0);
              },
              children: /* @__PURE__ */ n(Ce, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ S(
          "div",
          {
            ref: j,
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
                const Ke = pt(Pe), Rt = ke(Pe), Dt = Ke.startsWith(St);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Ke,
                    tabIndex: Ke === pt(L) ? 0 : -1,
                    "aria-selected": Ke === nt || void 0,
                    "aria-disabled": Rt || void 0,
                    "aria-label": Me.format(
                      new Date(Pe.year, Pe.month - 1, Pe.day)
                    ),
                    className: [
                      Oe["dx-datepicker-day"],
                      Dt ? null : Oe["dx-datepicker-day--outside"],
                      Ke === Ut ? Oe["dx-datepicker-day--today"] : null,
                      Ke === nt ? Oe["dx-datepicker-day--selected"] : null,
                      Rt ? Oe["dx-datepicker-day--disabled"] : null
                    ].filter(Boolean).join(" "),
                    onClick: () => tt(Pe),
                    onFocus: () => te(Pe),
                    children: Pe.day
                  },
                  Ke
                );
              }) }, de))
            ]
          }
        ),
        a && /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-time"], children: [
          Nh.map((K) => /* @__PURE__ */ S("label", { className: Oe["dx-datepicker-time-field"], children: [
            /* @__PURE__ */ n("span", { className: Oe["dx-datepicker-time-label"], children: qn(K) }),
            /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-time-control"], children: [
              /* @__PURE__ */ n(
                "input",
                {
                  className: Oe["dx-datepicker-time-input"],
                  inputMode: "numeric",
                  "aria-label": qn(K),
                  value: yt((ie ?? ye ?? Gt())[K]),
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
                    "aria-label": `Increase ${qn(K).toLowerCase()}`,
                    onClick: () => Qe(K, 1),
                    children: /* @__PURE__ */ n(Ce, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${qn(K).toLowerCase()}`,
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
      ref: C,
      className: [
        Oe["dx-datepicker"],
        d ? Oe["dx-datepicker-inline"] : null,
        O
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
              readOnly: m,
              placeholder: k,
              tabIndex: v,
              role: i ? void 0 : "combobox",
              "aria-label": x ?? "Date",
              "aria-haspopup": i ? void 0 : "dialog",
              "aria-expanded": i ? void 0 : Je,
              "aria-controls": i ? void 0 : U,
              "aria-invalid": r || void 0,
              className: [
                Oe["dx-datepicker-input"],
                Lt,
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
              "aria-label": _ ?? "Clear",
              onClick: me,
              children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
            }
          ),
          i && /* @__PURE__ */ n(
            "button",
            {
              ref: A,
              type: "button",
              className: [
                Oe["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": E ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": ee,
              "aria-controls": U,
              disabled: f,
              onClick: Ve,
              children: /* @__PURE__ */ n(Ce, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Je && /* @__PURE__ */ n(
          "div",
          {
            id: U,
            role: d ? void 0 : "dialog",
            className: d ? void 0 : Oe["dx-datepicker-popup"],
            children: Zt
          }
        )
      ]
    }
  );
}), Yt = {
  "dx-rating": "_dx-rating_kqu83_1",
  "dx-rating-item": "_dx-rating-item_kqu83_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_kqu83_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_kqu83_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_kqu83_51",
  "dx-rating-clear": "_dx-rating-clear_kqu83_55",
  "dx-rating-readonly": "_dx-rating-readonly_kqu83_87",
  "dx-rating-disabled": "_dx-rating-disabled_kqu83_96"
}, Hy = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: s = !1,
  ariaLabel: l = "Rating",
  clearLabel: c = "Clear",
  rateLabel: h = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: i,
  onValueChange: p
}) => {
  const [d, $] = X(e), y = H(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), N = H(
    (f) => {
      i?.(f), p?.(f);
    },
    [i, p]
  ), w = H(
    (f) => {
      r || s || (N(f), $(f));
    },
    [r, s, N]
  ), b = (f) => {
    if (r || s) return;
    const m = d > 0 ? d : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), w(y(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), w(y(m - 1));
        break;
      case "Home":
        f.preventDefault(), w(1);
        break;
      case "End":
        f.preventDefault(), w(t);
        break;
    }
  }, u = Array.from({ length: t }, (f, m) => m + 1);
  return /* @__PURE__ */ S(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": r || void 0,
      className: [
        Yt["dx-rating"],
        r ? Yt["dx-rating-readonly"] : null,
        s ? Yt["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !r && !s && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Yt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: s,
            onClick: () => w(0),
            children: /* @__PURE__ */ n(Ce, { name: "ban", size: 16 })
          }
        ),
        u.map((f) => {
          const m = f <= e, k = f === (e > 0 ? e : d);
          return /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${h} ${f}`,
              tabIndex: k ? o : -1,
              "aria-disabled": s || r || void 0,
              disabled: s || r,
              className: [
                Yt["dx-rating-item"],
                m ? Yt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => w(f),
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
  "dx-slider": "_dx-slider_15h1w_1",
  "dx-slider-track": "_dx-slider-track_15h1w_9",
  "dx-slider-range": "_dx-slider-range_15h1w_17",
  "dx-slider-handle": "_dx-slider-handle_15h1w_26",
  "dx-slider-vertical": "_dx-slider-vertical_15h1w_58",
  "dx-slider-disabled": "_dx-slider-disabled_15h1w_84"
};
function It(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const Ky = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: s = 0,
  max: l = 100,
  step: c = 1,
  range: h = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: i = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: $ = 0,
  className: y,
  onChange: N,
  onInput: w,
  onValueChange: b,
  onInputChange: u
}) => {
  const f = ae(null), m = ae(null), [k, x] = X(null), E = k ?? e, _ = $e(() => It(E, s, l), [E, s, l]), v = $e(
    () => It(h ? t : _, s, l),
    [h, t, _, s, l]
  ), O = $e(
    () => It(h ? Math.max(r, v) : _, s, l),
    [h, r, v, _, s, l]
  ), I = H(
    (L) => {
      const te = l - s;
      return te <= 0 ? 0 : (It(L, s, l) - s) / te * 100;
    },
    [s, l]
  ), z = H(
    (L, te) => {
      const G = f.current;
      if (!G) return s;
      const ce = G.getBoundingClientRect();
      let se;
      o === "vertical" ? se = 1 - (te - ce.top) / ce.height : se = (L - ce.left) / ce.width;
      const ye = s + It(se, 0, 1) * (l - s);
      return c > 0 ? It(Math.round(ye / c) * c, s, l) : It(ye, s, l);
    },
    [s, l, c, o]
  ), D = H(
    (L) => {
      typeof L == "number" && x(L), N?.(L), b?.(L);
    },
    [N, b]
  ), g = H(
    (L) => {
      typeof L == "number" && x(L), w?.(L), u?.(L);
    },
    [w, u]
  ), C = H(
    (L, te, G) => {
      const ce = z(te, G);
      let se;
      h ? L === "min" ? se = { min: Math.min(ce, O), max: O } : se = { min: v, max: Math.max(ce, v) } : se = ce, g(se), m.current === null && D(se);
    },
    [h, z, v, O, g, D]
  ), P = H(
    (L, te) => {
      const G = (c > 0 ? c : 1) * te;
      let ce;
      h ? L === "min" ? ce = {
        min: It(v + G, s, O),
        max: O
      } : ce = {
        min: v,
        max: It(O + G, v, l)
      } : ce = It(_ + G, s, l), D(ce);
    },
    [h, c, s, l, v, O, _, D]
  ), A = (L, te) => {
    if (!a)
      switch (te.key) {
        case "ArrowLeft":
        case "ArrowDown":
          te.preventDefault(), P(L, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          te.preventDefault(), P(L, 1);
          break;
        case "Home":
          te.preventDefault(), D(h ? L === "min" ? { min: s, max: O } : { min: v, max: v } : s);
          break;
        case "End":
          te.preventDefault(), D(h ? L === "min" ? { min: O, max: O } : { min: v, max: l } : l);
          break;
      }
  }, j = (L, te) => {
    a || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), m.current = { key: L, pointerId: te.pointerId }, C(L, te.clientX, te.clientY));
  }, U = (L) => {
    !m.current || m.current.pointerId !== L.pointerId || (L.preventDefault(), C(m.current.key, L.clientX, L.clientY));
  }, V = (L) => {
    !m.current || m.current.pointerId !== L.pointerId || (m.current = null, L.preventDefault(), D(h ? { min: v, max: O } : _));
  }, [J, Z] = X(null), ee = I(v), ue = I(O), ie = h ? ee : 0, q = ue;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        nn["dx-slider"],
        o === "vertical" ? nn["dx-slider-vertical"] : null,
        a ? nn["dx-slider-disabled"] : null,
        y
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ S("div", { ref: f, className: nn["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: nn["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${ie}%`, height: `${q - ie}%` } : { left: `${ie}%`, width: `${q - ie}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(v),
            "aria-orientation": o,
            "aria-label": h ? p : i,
            "aria-disabled": a || void 0,
            tabIndex: a || h && J === "max" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${ee}% - 8px)` } : { left: `calc(${ee}% - 8px)` },
            onKeyDown: (L) => A("min", L),
            onPointerDown: (L) => j("min", L),
            onPointerMove: U,
            onPointerUp: V,
            onFocus: () => Z("min")
          }
        ),
        h && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(O),
            "aria-orientation": o,
            "aria-label": d,
            "aria-disabled": a || void 0,
            tabIndex: a || J === "min" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${ue}% - 8px)` } : { left: `calc(${ue}% - 8px)` },
            onKeyDown: (L) => A("max", L),
            onPointerDown: (L) => j("max", L),
            onPointerMove: U,
            onPointerUp: V,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, qe = {
  "dx-timespanpicker": "_dx-timespanpicker_66gpb_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_66gpb_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_66gpb_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_66gpb_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_66gpb_49",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_66gpb_55",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_66gpb_61",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_66gpb_67",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_66gpb_73",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_66gpb_79",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_66gpb_114",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_66gpb_144",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_66gpb_156",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_66gpb_163",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_66gpb_172",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_66gpb_172",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_66gpb_184",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_66gpb_189",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_66gpb_193",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_66gpb_213",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_66gpb_241",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_66gpb_249"
}, Sh = "-10675199.02:48:05.4775808", Dh = "10675199.02:48:05.4775808", Kt = 86400, qt = 3600, Ct = 60, tr = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Cr = {
  days: Kt,
  hours: qt,
  minutes: Ct,
  seconds: 1
}, Mh = {
  day: Kt,
  hour: qt,
  minute: Ct,
  second: 1
};
function fn(e) {
  return String(e).padStart(2, "0");
}
function Tn(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, s = t;
  s.startsWith("-") ? (r = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (l) {
    if (!l.slice(1).some((d) => d != null)) return null;
    const o = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, i = l[3] != null ? Number(l[3]) : 0, p = l[4] != null ? Number(l[4]) : 0;
    return r * (o * Kt + a * qt + i * Ct + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(s);
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), a = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || a > 59 || i > 59 ? null : r * (h * Kt + o * qt + a * Ct + i + p);
  }
  return null;
}
function zh(e) {
  return e.days * Kt + e.hours * qt + e.minutes * Ct + e.seconds;
}
function Or(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / Kt);
  t %= Kt;
  const s = Math.floor(t / qt);
  t %= qt;
  const l = Math.floor(t / Ct), c = Math.round(t % Ct * 1e9) / 1e9;
  return { days: r, hours: s, minutes: l, seconds: c };
}
function lr(e, t) {
  const r = e < 0;
  let s = Math.abs(e);
  t === "minute" ? s = Math.round(s / Ct) * Ct : t === "hour" ? s = Math.round(s / qt) * qt : t === "day" && (s = Math.round(s / Kt) * Kt);
  let l = Math.round(s % Ct);
  const c = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const h = Math.floor(s / Ct) + c, o = h % 60, a = Math.floor(h / 60), i = a % 24, p = Math.floor(a / 24), d = r ? "-" : "", $ = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${$}${fn(i)}`;
    case "minute":
      return `${d}${$}${fn(i)}:${fn(o)}`;
    default:
      return `${d}${$}${fn(i)}:${fn(o)}:${fn(l)}`;
  }
}
function Er(e, t = "second") {
  const r = Tn(e);
  return r === null ? "" : lr(r, t);
}
function nr(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const qy = He(
  function({
    size: t = "md",
    invalid: r = !1,
    value: s,
    defaultValue: l,
    min: c = Sh,
    max: h = Dh,
    step: o = "1",
    precision: a = "second",
    showDays: i = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: $ = !0,
    allowClear: y = !1,
    inline: N = !1,
    onChange: w,
    onValueChange: b,
    onOpen: u,
    onClose: f,
    disabled: m,
    placeholder: k,
    ariaLabel: x,
    triggerLabel: E,
    clearLabel: _,
    tabIndex: v,
    className: O,
    onBlur: I,
    onKeyDown: z,
    ...D
  }, g) {
    const C = ae(null), P = ae(null), A = ae(null), j = Ye(), U = s !== void 0, [V, J] = X(
      () => l != null ? Er(l, a) : ""
    ), [Z, ee] = X(!1), [ue, ie] = X(null), [q, L] = X(null), te = $e(
      () => Tn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), G = $e(
      () => Tn(h) ?? Number.MAX_SAFE_INTEGER,
      [h]
    ), ce = $e(() => {
      const Q = Number.parseFloat(o);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [o]), se = $e(() => {
      const Q = U ? s ?? "" : V;
      return Q ? Tn(Q) : null;
    }, [s, V, U]), ye = H(
      (Q) => {
        const De = Q === null ? "" : lr(Q, a);
        U || J(De), w?.(De), b?.(De);
      },
      [U, a, w, b]
    ), ke = H(
      (Q) => {
        Q && ue !== null && ye(ue), ee(!1), ie(null), L(null), f?.(), N || A.current?.focus();
      },
      [N, ue, ye, f]
    ), Be = H(() => {
      m || (ie(se ?? 0), ee(!0), u?.());
    }, [m, se, u]), ve = H(() => {
      Z ? ke(!1) : Be();
    }, [Z, ke, Be]), We = H(
      (Q, De) => {
        ie((nt) => {
          const St = (nt ?? se ?? 0) + De * ce * Cr[Q];
          return nr(St, te, G);
        });
      },
      [se, ce, te, G]
    ), be = H(
      (Q) => {
        const De = q?.[Q];
        if (De == null) return;
        const nt = Number.parseFloat(De), Ut = Number.isNaN(nt) ? 0 : nt;
        ie((St) => {
          const Me = St ?? se ?? 0, Xe = Or(Me);
          Xe[Q] = Ut;
          const Lt = (Me < 0 ? -1 : 1) * zh(Xe);
          return nr(Lt, te, G);
        }), L(null);
      },
      [q, se, te, G]
    ), Ze = (Q, De) => {
      L((nt) => ({ ...nt ?? {}, [Q]: De }));
    }, Ve = (Q, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), be(Q), We(Q, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), be(Q), We(Q, -1);
          break;
        case "Home":
          De.preventDefault(), be(Q), ie(te);
          break;
        case "End":
          De.preventDefault(), be(Q), ie(G);
          break;
        case "Enter":
          De.preventDefault(), be(Q), ke(!0);
          break;
      }
    }, Re = H(() => {
      if (Z) return;
      const Q = Tn(V);
      ye(Q !== null ? nr(Q, te, G) : null);
    }, [Z, V, te, G, ye]), tt = (Q) => {
      U || J(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Z ? ke(!0) : Re()) : Q.key === "Escape" && Z ? (Q.preventDefault(), ke(!1)) : Q.key === "ArrowDown" && !Z ? (Q.preventDefault(), Be()) : Q.key === "Tab" && Z && ee(!1), z?.(Q);
    }, et = (Q) => {
      Re(), I?.(Q);
    }, W = () => {
      U || J(""), w?.(""), b?.(""), P.current?.focus();
    };
    we(() => {
      if (!Z) return;
      const Q = (De) => {
        C.current && !C.current.contains(De.target) && ke(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [Z, ke]), we(() => {
      if (!Z) return;
      const Q = (De) => {
        De.key === "Escape" && ke(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [Z, ke]), we(() => {
      if (N && ue !== null) {
        const Q = se;
        (Q === null || Math.abs(ue - Q) > 1e-9) && ye(ue);
      }
    }, [N, ue, se, ye]);
    const M = H(
      (Q) => {
        P.current = Q, typeof g == "function" ? g(Q) : g && (g.current = Q);
      },
      [g]
    ), F = U ? s ? Er(s, a) : "" : V, ne = U ? !!s : V.length > 0, fe = N || Z, re = ue ?? se ?? 0, me = Or(re), Ne = Mh[a], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Cr[Q] >= Ne && (Q === "days" ? i : Q === "hours" ? p : Q === "minutes" ? d : $)
    ), dt = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], xt = /* @__PURE__ */ S("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: lr(re, a) }),
      /* @__PURE__ */ n("div", { className: qe["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ S("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: qe["dx-timespanpicker-unit-label"], children: tr[Q] }),
        /* @__PURE__ */ S("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: q?.[Q] ?? String(me[Q]),
              onChange: (De) => Ze(Q, De.target.value),
              onKeyDown: (De) => Ve(Q, De),
              onBlur: () => be(Q)
            }
          ),
          /* @__PURE__ */ S("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${tr[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), We(Q, 1);
                },
                children: /* @__PURE__ */ n(Ce, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${tr[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), We(Q, -1);
                },
                children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ n("div", { className: qe["dx-timespanpicker-footer"], children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: qe["dx-timespanpicker-ok"],
          onClick: () => ke(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ S(
      "div",
      {
        ref: C,
        className: [
          qe["dx-timespanpicker"],
          N ? qe["dx-timespanpicker-inline"] : null,
          O
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
                disabled: m,
                placeholder: k,
                tabIndex: v,
                role: "combobox",
                "aria-label": x ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": j,
                "aria-invalid": r || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  dt,
                  r ? qe["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...D
              }
            ),
            y && !m && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: qe["dx-timespanpicker-clear"],
                "aria-label": _ ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: A,
                type: "button",
                className: [
                  qe["dx-timespanpicker-trigger"]
                ].filter(Boolean).join(" "),
                "aria-label": E ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": j,
                disabled: m,
                onClick: ve,
                children: /* @__PURE__ */ n(Ce, { name: "clock", size: 16 })
              }
            )
          ] }),
          fe && /* @__PURE__ */ n(
            "div",
            {
              id: j,
              role: N ? void 0 : "dialog",
              "aria-label": x ?? "Time span picker",
              className: N ? void 0 : qe["dx-timespanpicker-popup"],
              children: xt
            }
          )
        ]
      }
    );
  }
), Ch = "_wrapper_7payt_1", Oh = "_cells_7payt_8", Eh = "_cell_7payt_8", Ih = "_invalid_7payt_63", Ah = "_live_7payt_72", rn = {
  wrapper: Ch,
  cells: Oh,
  cell: Eh,
  "cell-sm": "_cell-sm_7payt_45",
  "cell-md": "_cell-md_7payt_51",
  "cell-lg": "_cell-lg_7payt_57",
  invalid: Ih,
  live: Ah
};
function Ir(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Uy = He(
  function({
    length: t = 6,
    value: r,
    defaultValue: s,
    onChange: l,
    invalid: c = !1,
    size: h = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: i = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": $
  }, y) {
    const N = Ye(), w = r !== void 0, [b, u] = X(Ir(s).join("")), f = w ? Ir(r).join("") : b, m = Array.from({ length: t }, (D, g) => f[g] ?? ""), k = ae([]), [x, E] = X(""), _ = (D) => {
      w || u(D), l?.(D);
    }, v = (D) => {
      const g = k.current[D];
      g && !g.disabled && (g.focus(), g.select());
    }, O = (D, g) => {
      const C = g.replace(/\D/g, "").slice(-1), P = f.split("");
      if (C) {
        P[D] = C;
        const A = P.join("").slice(0, t);
        _(A), A.length < t ? v(D + 1) : p && E("Code complete");
      }
    }, I = (D, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), f[D]) {
          const C = f.split("");
          C[D] = "", _(C.join(""));
        } else if (D > 0) {
          const C = f.split("");
          C[D - 1] = "", _(C.join("")), v(D - 1);
        }
      } else g.key === "ArrowLeft" && D > 0 ? (g.preventDefault(), v(D - 1)) : g.key === "ArrowRight" && D < t - 1 ? (g.preventDefault(), v(D + 1)) : g.key === "Home" ? (g.preventDefault(), v(0)) : g.key === "End" && (g.preventDefault(), v(t - 1));
    }, z = (D, g) => {
      g.preventDefault();
      const C = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!C) return;
      const P = f.split("");
      let A = 0;
      for (let U = 0; U < C.length && D + U < t; U++)
        P[D + U] = C[U] ?? "", A++;
      const j = P.join("");
      _(j), j.length >= t ? p && E("Code complete") : v(D + A);
    };
    return /* @__PURE__ */ S(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": $ ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[h]].join(" "), children: m.map((D, g) => /* @__PURE__ */ n(
            "input",
            {
              ref: (C) => {
                k.current[g] = C, g === 0 && y && (typeof y == "function" ? y(C) : y.current = C);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: D,
              disabled: a,
              "aria-label": `Digit ${g + 1} of ${t}`,
              "aria-invalid": c && D !== "" ? !0 : void 0,
              autoFocus: o && g === 0,
              className: [rn.cell, rn[`cell-${h}`], c ? rn.invalid : null].filter(Boolean).join(" "),
              onChange: (C) => O(g, C.target.value),
              onKeyDown: (C) => I(g, C),
              onPaste: (C) => z(g, C),
              onFocus: (C) => C.target.select(),
              onBlur: () => {
                p && E("");
              }
            },
            g
          )) }),
          p && /* @__PURE__ */ n("span", { id: `${N}-live`, role: "status", "aria-live": "polite", className: rn.live, children: x })
        ]
      }
    );
  }
), Th = "_wrapper_w4qo1_1", jh = "_header_w4qo1_7", Lh = "_label_w4qo1_15", Rh = "_clear_w4qo1_22", Ph = "_canvas_w4qo1_53", Bh = "_disabled_w4qo1_69", _n = {
  wrapper: Th,
  header: jh,
  label: Lh,
  clear: Rh,
  canvas: Ph,
  disabled: Bh
}, Wy = He(
  function({
    value: t,
    defaultValue: r,
    onChange: s,
    penColor: l = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: h = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: i = 140,
    disabled: p = !1,
    className: d
  }, $) {
    const y = ae(null), N = ae(!1), w = ae(!1), b = ae({ x: 0, y: 0 });
    we(() => {
      const _ = y.current;
      if (!_) return;
      const v = window.devicePixelRatio || 1, O = Math.round((a ?? _.clientWidth) * v), I = Math.round(i * v);
      (_.width !== O || _.height !== I) && (_.width = O, _.height = I);
      const z = _.getContext("2d");
      if (!z) return;
      z.setTransform(v, 0, 0, v, 0, 0), z.lineWidth = c, z.strokeStyle = l, z.lineCap = "round", z.lineJoin = "round";
      const D = t ?? r;
      if (D) {
        const g = new Image();
        g.onload = () => {
          z.drawImage(g, 0, 0, _.clientWidth, i);
        }, g.src = D;
      }
    }, [t, r, l, c, a, i]);
    const u = () => {
      const _ = y.current;
      if (!_) return;
      const v = _.toDataURL("image/png");
      s?.(v);
    }, f = () => {
      const _ = y.current;
      if (!_) return;
      const v = _.getContext("2d");
      v && v.clearRect(0, 0, _.width, _.height), s?.("");
    };
    ir($, () => ({
      clear: f,
      toDataURL: (_ = "image/png", v) => y.current?.toDataURL(_, v) ?? ""
    }));
    const m = (_) => {
      const v = _.currentTarget.getBoundingClientRect();
      return { x: _.clientX - v.left, y: _.clientY - v.top };
    }, k = (_) => {
      p || (_.preventDefault(), typeof _.currentTarget.setPointerCapture == "function" && _.currentTarget.setPointerCapture(_.pointerId), N.current = !0, w.current = !1, b.current = m(_));
    }, x = (_) => {
      if (!N.current) return;
      _.preventDefault();
      const v = _.currentTarget.getContext("2d");
      if (!v) return;
      const O = m(_);
      v.beginPath(), v.moveTo(b.current.x, b.current.y), v.lineTo(O.x, O.y), v.stroke(), b.current = O, w.current = !0;
    }, E = (_) => {
      N.current && (_.preventDefault(), N.current = !1, w.current && u());
    };
    return /* @__PURE__ */ S("div", { className: [_n.wrapper, d, p ? _n.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ S("div", { className: _n.header, children: [
        /* @__PURE__ */ n("span", { className: _n.label, children: o }),
        /* @__PURE__ */ n("button", { type: "button", className: _n.clear, onClick: f, disabled: p, children: h })
      ] }),
      /* @__PURE__ */ n(
        "canvas",
        {
          ref: y,
          role: "img",
          "aria-label": o,
          "aria-disabled": p || void 0,
          style: { width: a ? `${a}px` : void 0, height: `${i}px` },
          className: _n.canvas,
          onPointerDown: k,
          onPointerMove: x,
          onPointerUp: E,
          onPointerCancel: E
        }
      )
    ] });
  }
), Fh = "_wrapper_5g858_1", Hh = "_trigger_5g858_7", Kh = "_list_5g858_35", qh = "_row_5g858_44", Uh = "_name_5g858_59", Wh = "_size_5g858_68", Vh = "_progress_5g858_74", Xh = "_fill_5g858_82", Gh = "_status_5g858_99", Yh = "_remove_5g858_106", At = {
  wrapper: Fh,
  trigger: Hh,
  list: Kh,
  row: qh,
  name: Uh,
  size: Wh,
  progress: Vh,
  fill: Xh,
  status: Gh,
  remove: Yh
};
function Ar(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Vy = He(function({
  url: t,
  multiple: r = !1,
  parameterName: s = "files",
  auto: l = !0,
  headers: c,
  accept: h,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: i = "Upload",
  children: p,
  onProgress: d,
  onComplete: $,
  onError: y
}, N) {
  const w = ae(null), [b, u] = X([]), f = ae(/* @__PURE__ */ new Map()), m = (v, O) => {
    u((I) => I.map((z) => z.file.name === v ? { ...z, ...O } : z));
  }, k = (v) => {
    if (!t) return;
    const O = new XMLHttpRequest();
    f.current.set(v.file.name, O);
    const I = new FormData();
    if (I.append(s, v.file), O.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const D = Math.round(z.loaded / z.total * 100);
      m(v.file.name, { state: "uploading", progress: D }), d?.(v.file.name, D);
    }), O.addEventListener("load", () => {
      O.status >= 200 && O.status < 300 ? (m(v.file.name, { state: "complete", progress: 100 }), $?.(v.file.name)) : (m(v.file.name, { state: "error", message: `HTTP ${O.status}` }), y?.(v.file.name, `HTTP ${O.status}`));
    }), O.addEventListener("error", () => {
      m(v.file.name, { state: "error", message: "Network error" }), y?.(v.file.name, "Network error");
    }), c)
      for (const [z, D] of Object.entries(c))
        O.setRequestHeader(z, D);
    O.open("POST", t), O.send(I), m(v.file.name, { state: "uploading", progress: 0 });
  }, x = (v) => {
    if (!v) return;
    const O = [...v], I = [];
    let z = Math.max(0, o - b.length);
    for (const g of O) {
      if (a != null && g.size > a) {
        y?.(g.name, `File too large (maximum ${Ar(a)})`);
        continue;
      }
      if (z <= 0) {
        y?.(g.name, `Too many files (maximum ${o})`);
        continue;
      }
      z -= 1, I.push(g);
    }
    const D = I.map((g) => ({
      file: g,
      state: "pending",
      progress: 0
    }));
    u((g) => [...g, ...D]), w.current && (w.current.value = ""), l && D.forEach(k);
  }, E = (v) => {
    f.current.get(v)?.abort(), f.current.delete(v), u((I) => I.filter((z) => z.file.name !== v));
  }, _ = p ?? /* @__PURE__ */ S("button", { type: "button", className: At.trigger, onClick: () => w.current?.click(), children: [
    /* @__PURE__ */ n(Ce, { name: "upload", size: 14 }),
    i
  ] });
  return ir(N, () => ({
    open: () => w.current?.click(),
    upload: () => b.forEach((v) => v.state === "pending" ? k(v) : null)
  })), /* @__PURE__ */ S("div", { className: At.wrapper, children: [
    _,
    /* @__PURE__ */ n(
      "input",
      {
        ref: w,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: h,
        "data-testid": "upload-input",
        onChange: (v) => x(v.target.files)
      }
    ),
    !p && b.length > 0 && /* @__PURE__ */ n("ul", { className: At.list, children: b.map(({ file: v, state: O, progress: I, message: z }) => /* @__PURE__ */ S("li", { className: At.row, "data-state": O, "data-testid": "upload-row", children: [
      /* @__PURE__ */ n("span", { className: At.name, children: v.name }),
      /* @__PURE__ */ n("span", { className: At.size, children: Ar(v.size) }),
      /* @__PURE__ */ n(
        "span",
        {
          className: At.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": I,
          children: /* @__PURE__ */ n("span", { className: At.fill, style: { width: `${I}%` } })
        }
      ),
      /* @__PURE__ */ n("span", { className: At.status, role: "status", children: O === "uploading" ? "Uploading" : O === "complete" ? "Complete" : O === "error" ? z ?? "Failed" : "Pending" }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: At.remove,
          "aria-label": `Remove ${v.name}`,
          onClick: () => E(v.name),
          children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
        }
      )
    ] }, v.name)) })
  ] });
}), Zh = "_zone_1158o_1", Jh = "_dragging_1158o_23", Qh = "_caption_1158o_28", em = "_browse_1158o_40", tm = "_disabled_1158o_67", zn = {
  zone: Zh,
  dragging: Jh,
  caption: Qh,
  browse: em,
  disabled: tm
};
function nm(e, t) {
  return t ? t.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const s = r.slice(0, -1);
      return e.type.startsWith(s);
    }
    return e.type === r;
  }) : !0;
}
const Xy = He(function({
  accept: t,
  multiple: r = !1,
  onDrop: s,
  label: l = "Drop files here or browse",
  dragLabel: c = "Drop to attach",
  browseText: h = "Browse",
  disabled: o = !1,
  className: a
}, i) {
  const p = ae(null), [d, $] = X(!1), y = (f) => {
    if (!f || f.length === 0) return;
    const m = [...f].filter((k) => nm(k, t ?? ""));
    m.length !== 0 && s?.(m);
  }, N = (f) => {
    o || (f.preventDefault(), $(!0));
  }, w = (f) => {
    o || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", $(!0));
  }, b = (f) => {
    o || f.currentTarget.contains(f.relatedTarget) || $(!1);
  }, u = (f) => {
    o || (f.preventDefault(), $(!1), y(f.dataTransfer.files));
  };
  return ir(i, () => ({
    open: () => p.current?.click()
  })), /* @__PURE__ */ S(
    "div",
    {
      role: "region",
      "aria-label": l,
      className: [zn.zone, d ? zn.dragging : null, o ? zn.disabled : null, a].filter(Boolean).join(" "),
      onDragEnter: N,
      onDragOver: w,
      onDragLeave: b,
      onDrop: u,
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
              y(f.target.files), f.target.value = "";
            }
          }
        )
      ]
    }
  );
}), rm = "_root_y70dg_1", om = "_menubar_y70dg_5", sm = "_horizontal_y70dg_15", am = "_vertical_y70dg_20", lm = "_itemWrapper_y70dg_25", im = "_item_y70dg_25", cm = "_disabled_y70dg_61", dm = "_icon_y70dg_68", um = "_text_y70dg_75", fm = "_caret_y70dg_79", _m = "_hasChildren_y70dg_85", pm = "_submenu_y70dg_94", hm = "_submenuItem_y70dg_118", ct = {
  root: rm,
  menubar: om,
  horizontal: sm,
  vertical: am,
  itemWrapper: lm,
  item: im,
  disabled: cm,
  icon: dm,
  text: um,
  caret: fm,
  hasChildren: _m,
  submenu: pm,
  submenuItem: hm
};
function Cn(e) {
  return !!e.disabled;
}
function Gy({
  items: e,
  orientation: t = "horizontal",
  onClick: r,
  Click: s,
  ariaLabel: l = "Menu",
  className: c
}) {
  const h = Ye(), o = ae(null), a = ae(null), [i, p] = X(null), d = ae(0), $ = ae(null), y = H(
    (u) => {
      const f = { text: u.text, value: u.value, path: u.path };
      (r ?? s)?.(f);
    },
    [r, s]
  ), N = H(
    (u, f) => {
      if (!Cn(u)) {
        if (u.children && u.children.length > 0) {
          const m = i === f, k = Date.now() - d.current < 600;
          if (m && k) {
            d.current = 0;
            return;
          }
          p((x) => x === f ? null : f);
          return;
        }
        y(u), p(null);
      }
    },
    [y, i]
  ), w = (u) => {
    Cn(u) || u.children && u.children.length > 0 || (y(u), p(null));
  };
  we(() => {
    if (i == null) return;
    const u = (f) => {
      o.current && !o.current.contains(f.target) && p(null);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [i]), we(() => {
    if ($.current != null && i === $.current) {
      const u = `${h}-submenu-${i}`;
      document.getElementById(u)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), $.current = null;
    }
  }, [i, h]);
  const b = (u) => {
    const f = a.current;
    if (!f) return;
    const m = Array.from(
      f.querySelectorAll('[data-top="true"]')
    ).filter((E) => !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true");
    if (i != null) {
      const E = `${h}-submenu-${i}`, _ = document.getElementById(E);
      if (_) {
        const v = Array.from(_.querySelectorAll('[role="menuitem"]')).filter(
          (z) => z.getAttribute("aria-disabled") !== "true"
        ), O = document.activeElement, I = O ? v.indexOf(O) : -1;
        if (u.key === "ArrowDown") {
          u.preventDefault(), I === -1 ? v[0]?.focus() : v[(I + 1) % v.length]?.focus();
          return;
        }
        if (u.key === "ArrowUp") {
          u.preventDefault(), I === -1 ? v[v.length - 1]?.focus() : v[(I - 1 + v.length) % v.length]?.focus();
          return;
        }
        if (u.key === "Escape") {
          u.preventDefault(), p(null), f.querySelector(`[data-top="true"][data-index="${i}"]`)?.focus();
          return;
        }
        if (u.key === "Enter" || u.key === " ")
          return;
      }
      if (u.key === "Escape") {
        u.preventDefault(), p(null);
        return;
      }
    }
    const k = document.activeElement, x = k ? m.indexOf(k) : -1;
    if (u.key === "ArrowRight" || t === "vertical" && u.key === "ArrowDown") {
      if (u.preventDefault(), m.length === 0) return;
      const E = x === -1 ? 0 : (x + 1) % m.length;
      m[E]?.focus();
      return;
    }
    if (u.key === "ArrowLeft" || t === "vertical" && u.key === "ArrowUp") {
      if (u.preventDefault(), m.length === 0) return;
      const E = x === -1 ? m.length - 1 : (x - 1 + m.length) % m.length;
      m[E]?.focus();
      return;
    }
    if (u.key === "ArrowDown") {
      if (x >= 0) {
        const E = k?.getAttribute("data-index"), _ = E != null ? Number(E) : -1, v = _ >= 0 ? e[_] : void 0;
        v?.children && v.children.length > 0 && !Cn(v) && (u.preventDefault(), $.current = _, p(_));
      }
      return;
    }
    if (u.key === "Home") {
      u.preventDefault(), m[0]?.focus();
      return;
    }
    if (u.key === "End") {
      u.preventDefault(), m[m.length - 1]?.focus();
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
          ref: a,
          role: "menubar",
          "aria-label": l,
          className: ct.menubar,
          onKeyDown: b,
          children: e.map((u, f) => {
            const m = !!u.children && u.children.length > 0, k = i === f, x = Cn(u), E = `${h}-submenu-${f}`;
            return /* @__PURE__ */ S(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && m && !x && (d.current = Date.now(), p(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && m && p((_) => _ === f ? null : _);
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
                      "aria-disabled": x || void 0,
                      "aria-haspopup": m ? "menu" : void 0,
                      "aria-expanded": m ? k : void 0,
                      "aria-controls": m ? E : void 0,
                      tabIndex: x ? -1 : 0,
                      disabled: x,
                      className: [ct.item, x ? ct.disabled : null, m ? ct.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => N(u, f),
                      children: [
                        u.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: u.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: u.text }),
                        m ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  m && k ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: E,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": u.text,
                      children: u.children?.map((_, v) => {
                        const O = Cn(_), I = !!_.children && _.children.length > 0;
                        return /* @__PURE__ */ S(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": O || void 0,
                            "aria-haspopup": I ? "menu" : void 0,
                            tabIndex: O ? -1 : 0,
                            disabled: O,
                            className: [ct.submenuItem, O ? ct.disabled : null].filter(Boolean).join(" "),
                            onClick: () => w(_),
                            children: [
                              _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: _.text })
                            ]
                          },
                          `${_.text}-${v}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${u.text}-${f}`
            );
          })
        }
      )
    }
  );
}
const mm = "_root_1jwkg_1", gm = "_list_1jwkg_9", bm = "_item_1jwkg_14", ym = "_trigger_1jwkg_18", xm = "_disabled_1jwkg_44", vm = "_expanded_1jwkg_51", km = "_icon_1jwkg_55", wm = "_text_1jwkg_66", $m = "_caret_1jwkg_73", Nm = "_open_1jwkg_80", Sm = "_submenu_1jwkg_84", Dm = "_submenuItem_1jwkg_93", Mm = "_nestedWrapper_1jwkg_122", zm = "_nestedTrigger_1jwkg_127", Cm = "_nestedMenu_1jwkg_152", Om = "_iconOnly_1jwkg_160", Te = {
  root: mm,
  list: gm,
  item: bm,
  trigger: ym,
  disabled: xm,
  expanded: vm,
  icon: km,
  text: wm,
  caret: $m,
  open: Nm,
  submenu: Sm,
  submenuItem: Dm,
  nestedWrapper: Mm,
  nestedTrigger: zm,
  nestedMenu: Cm,
  iconOnly: Om
};
function Em({
  item: e,
  baseId: t,
  parentKey: r,
  onEmit: s
}) {
  const l = !!e.children && e.children.length > 0, [c, h] = X(!1), o = `${t}-nested-${r}`, a = !!e.disabled, i = () => {
    if (!a) {
      if (l) {
        h((d) => !d);
        return;
      }
      s({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), i()) : d.key === "Escape" && c && (d.preventDefault(), h(!1));
  };
  return l ? /* @__PURE__ */ S("div", { className: Te.nestedWrapper, children: [
    /* @__PURE__ */ S(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": o,
        "aria-disabled": a || void 0,
        disabled: a,
        tabIndex: a ? -1 : 0,
        className: [Te.nestedTrigger, a ? Te.disabled : null].filter(Boolean).join(" "),
        onClick: i,
        onKeyDown: p,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Te.text, children: e.text }),
          /* @__PURE__ */ n("span", { className: [Te.caret, c ? Te.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) })
        ]
      }
    ),
    c ? /* @__PURE__ */ n("div", { id: o, role: "menu", className: Te.nestedMenu, children: e.children?.map((d, $) => {
      const y = !!d.disabled;
      return /* @__PURE__ */ S(
        "div",
        {
          role: "menuitem",
          "aria-disabled": y || void 0,
          tabIndex: y ? -1 : 0,
          className: [Te.submenuItem, y ? Te.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            y || d.children && d.children.length > 0 || s({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (N) => {
            if (N.key === "Enter" || N.key === " ") {
              if (N.preventDefault(), y) return;
              s({ text: d.text, value: d.value, path: d.path });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ n("span", { className: Te.text, children: d.text })
          ]
        },
        `${d.text}-${$}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ S(
    "div",
    {
      role: "menuitem",
      "aria-disabled": a || void 0,
      tabIndex: a ? -1 : 0,
      className: [Te.submenuItem, a ? Te.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        a || s({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), a) return;
          s({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Te.text, children: e.text })
      ]
    }
  );
}
function Yy({
  items: e,
  multiple: t,
  Multiple: r,
  showArrow: s,
  ShowArrow: l,
  displayStyle: c,
  DisplayStyle: h,
  onClick: o,
  Click: a,
  ariaLabel: i = "Panel menu",
  className: p
}) {
  const d = Ye(), $ = t ?? r ?? !1, y = s ?? l ?? !0, N = c ?? h ?? "iconAndText", [w, b] = X([]), u = H(
    (k) => {
      const x = { text: k.text, value: k.value, path: k.path };
      (o ?? a)?.(x);
    },
    [o, a]
  ), f = (k, x, E) => {
    if (!E.disabled) {
      if (x) {
        b((_) => _.includes(k) ? _.filter((O) => O !== k) : $ ? [..._, k] : [k]);
        return;
      }
      u(E);
    }
  }, m = (k) => {
    const x = k.target;
    if (!(k.key === "Enter" || k.key === " ")) {
      if (k.key === "Escape") {
        const E = x.getAttribute("aria-controls");
        if (E) {
          const _ = E.match(/-panel-(\d+)$/);
          if (_) {
            const v = Number(_[1]);
            b((O) => O.filter((I) => I !== v));
          }
        } else {
          const _ = x.closest('[role="menu"]');
          if (_) {
            const O = _.id.match(/-panel-(\d+)$/);
            if (O) {
              const I = Number(O[1]);
              b((D) => D.filter((g) => g !== I)), document.getElementById(`${d}-trigger-${I}`)?.focus();
            }
          }
        }
        k.preventDefault();
        return;
      }
      if (k.key === "ArrowDown" || k.key === "ArrowUp") {
        const E = Array.from(
          k.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((I) => !I.hasAttribute("disabled") && I.getAttribute("aria-disabled") !== "true"), _ = E.indexOf(x);
        if (_ === -1) return;
        k.preventDefault();
        const v = k.key === "ArrowDown" ? 1 : -1;
        E[(_ + v + E.length) % E.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": i,
      className: [
        Te.root,
        N === "icon" ? Te.iconOnly : Te.iconAndText,
        p
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ n("div", { className: Te.list, role: "presentation", children: e.map((k, x) => {
        const E = !!k.children && k.children.length > 0, _ = w.includes(x), v = !!k.disabled, O = `${d}-panel-${x}`, I = `${d}-trigger-${x}`;
        return /* @__PURE__ */ S("div", { className: Te.item, children: [
          /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": E ? _ : void 0,
              "aria-controls": E ? O : void 0,
              "aria-disabled": v || void 0,
              disabled: v,
              tabIndex: v ? -1 : 0,
              className: [
                Te.trigger,
                v ? Te.disabled : null,
                _ ? Te.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => f(x, E, k),
              children: [
                k.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: k.icon }) : null,
                N === "iconAndText" ? /* @__PURE__ */ n("span", { className: Te.text, children: k.text }) : /* @__PURE__ */ n("span", { className: Te.text, "aria-label": k.text, children: k.icon ? null : k.text.slice(0, 1) }),
                E && y ? /* @__PURE__ */ n("span", { className: [Te.caret, _ ? Te.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) }) : null
              ]
            }
          ),
          E && _ ? /* @__PURE__ */ n("div", { id: O, role: "menu", className: Te.submenu, "aria-labelledby": I, children: k.children?.map((z, D) => /* @__PURE__ */ n(
            Em,
            {
              item: z,
              baseId: d,
              parentKey: `${x}-${D}`,
              onEmit: u
            },
            `${z.text}-${D}`
          )) }) : null
        ] }, `${k.text}-${x}`);
      }) })
    }
  );
}
const Im = "_root_8nui5_1", Am = "_trigger_8nui5_7", Tm = "_defaultTrigger_8nui5_40", jm = "_avatar_8nui5_46", Lm = "_menu_8nui5_58", Rm = "_item_8nui5_74", Pm = "_disabled_8nui5_88", Bm = "_active_8nui5_97", Fm = "_icon_8nui5_107", Hm = "_text_8nui5_114", Tt = {
  root: Im,
  trigger: Am,
  defaultTrigger: Tm,
  avatar: jm,
  menu: Lm,
  item: Rm,
  disabled: Pm,
  active: Bm,
  icon: Fm,
  text: Hm
};
function Zy({
  items: e,
  trigger: t,
  Template: r,
  onClick: s,
  Click: l,
  ariaLabel: c = "Profile menu",
  className: h
}) {
  const o = Ye(), a = `${o}-menu`, i = ae(null), p = ae(null), [d, $] = X(!1), [y, N] = X(-1), w = t ?? r, b = e.map((_, v) => _.disabled ? -1 : v).filter((_) => _ >= 0), u = H(
    (_) => {
      if (_.disabled) return;
      const v = { text: _.text, path: _.path };
      (s ?? l)?.(v), $(!1), p.current?.focus();
    },
    [s, l]
  ), f = H(() => {
    N(b[0] ?? -1), $(!0);
  }, [b]), m = H(() => {
    $(!1), N(-1), p.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const _ = (v) => {
      i.current && !i.current.contains(v.target) && ($(!1), N(-1));
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [d]), we(() => {
    if (!d) return;
    const _ = (v) => {
      v.key === "Escape" && (v.preventDefault(), m());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [d, m]);
  const k = (_) => {
    if (b.length === 0) return;
    const v = b.indexOf(y), O = v === -1 ? 0 : (v + _ + b.length) % b.length, I = b[O];
    I != null && N(I);
  }, x = (_) => {
    if (!d) {
      (_.key === "ArrowDown" || _.key === "Enter" || _.key === " ") && (_.preventDefault(), f());
      return;
    }
    switch (_.key) {
      case "Escape":
        _.preventDefault(), m();
        break;
      case "ArrowDown":
        _.preventDefault(), k(1);
        break;
      case "ArrowUp":
        _.preventDefault(), k(-1);
        break;
      case "Home":
        _.preventDefault(), b[0] != null && N(b[0]);
        break;
      case "End":
        _.preventDefault(), b[b.length - 1] != null && N(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (_.preventDefault(), y >= 0) {
          const v = e[y];
          v && !v.disabled && u(v);
        }
        break;
      case "Tab":
        $(!1), N(-1);
        break;
    }
  }, E = (_) => {
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), k(1);
        break;
      case "ArrowUp":
        _.preventDefault(), k(-1);
        break;
      case "Home":
        _.preventDefault(), b[0] != null && N(b[0]);
        break;
      case "End":
        _.preventDefault(), b[b.length - 1] != null && N(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (_.preventDefault(), y >= 0) {
          const v = e[y];
          v && !v.disabled && u(v);
        }
        break;
      case "Escape":
        _.preventDefault(), m();
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
      className: [Tt.root, h].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ S("nav", { "aria-label": c, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: p,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": a,
            "aria-label": c,
            className: Tt.trigger,
            onClick: () => d ? m() : f(),
            onKeyDown: x,
            children: w ?? /* @__PURE__ */ S("span", { className: Tt.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: Tt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        d ? /* @__PURE__ */ n(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": c,
            "aria-activedescendant": y >= 0 ? `${o}-item-${y}` : void 0,
            className: Tt.menu,
            onKeyDown: E,
            tabIndex: -1,
            children: e.map((_, v) => {
              const O = !!_.disabled, I = v === y;
              return /* @__PURE__ */ S(
                "div",
                {
                  id: `${o}-item-${v}`,
                  role: "menuitem",
                  "aria-disabled": O || void 0,
                  tabIndex: O ? -1 : 0,
                  className: [Tt.item, I ? Tt.active : null, O ? Tt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    O || u(_);
                  },
                  onMouseEnter: () => {
                    O || N(v);
                  },
                  children: [
                    _.icon ? /* @__PURE__ */ n("span", { className: Tt.icon, "aria-hidden": "true", children: _.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Tt.text, children: _.text })
                  ]
                },
                `${_.text}-${v}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Km = "_root_ci25s_1", qm = "_bottomRight_ci25s_11", Um = "_bottomLeft_ci25s_16", Wm = "_topRight_ci25s_21", Vm = "_topLeft_ci25s_26", Xm = "_menu_ci25s_31", Gm = "_itemWrapper_ci25s_48", Ym = "_tooltip_ci25s_54", Zm = "_main_ci25s_76", Jm = "_mainIcon_ci25s_104", Qm = "_mainOpen_ci25s_109", eg = "_item_ci25s_48", tg = "_disabled_ci25s_141", ng = "_itemIcon_ci25s_148", ut = {
  root: Km,
  bottomRight: qm,
  bottomLeft: Um,
  topRight: Wm,
  topLeft: Vm,
  menu: Xm,
  itemWrapper: Gm,
  tooltip: Ym,
  main: Zm,
  mainIcon: Jm,
  mainOpen: Qm,
  item: eg,
  disabled: tg,
  itemIcon: ng
};
function Jy({
  items: e,
  position: t,
  Position: r,
  icon: s = "+",
  onClick: l,
  Click: c,
  ariaLabel: h = "Open menu",
  className: o
}) {
  const a = t ?? r ?? "bottom-right", p = `${Ye()}-menu`, d = ae(null), $ = ae(null), [y, N] = X(!1), w = H(
    (m) => {
      if (m.disabled) return;
      const k = { text: m.text, value: m.value };
      (l ?? c)?.(k), N(!1), $.current?.focus();
    },
    [l, c]
  );
  we(() => {
    if (!y) return;
    const m = (k) => {
      d.current && !d.current.contains(k.target) && N(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [y]), we(() => {
    if (!y) return;
    const m = (k) => {
      k.key === "Escape" && (N(!1), $.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [y]);
  const b = a === "bottom-right" ? ut.bottomRight : a === "bottom-left" ? ut.bottomLeft : a === "top-right" ? ut.topRight : ut.topLeft, u = (m) => {
    !y && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), N(!0)) : y && m.key === "Escape" && (m.preventDefault(), N(!1));
  }, f = (m) => {
    m.key === "Escape" && (m.preventDefault(), N(!1), $.current?.focus());
  };
  return /* @__PURE__ */ S(
    "div",
    {
      ref: d,
      className: [ut.root, b, o].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        y ? /* @__PURE__ */ n(
          "div",
          {
            id: p,
            role: "menu",
            "aria-label": h,
            className: ut.menu,
            onKeyDown: f,
            children: e.map((m, k) => {
              const x = !!m.disabled;
              return /* @__PURE__ */ S("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": x || void 0,
                    title: m.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [ut.item, x ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => w(m),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: m.icon ?? "•" })
                  }
                )
              ] }, `${m.text}-${k}`);
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
            "aria-expanded": y,
            "aria-controls": p,
            "aria-label": h,
            onClick: () => N((m) => !m),
            onKeyDown: u,
            children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [ut.mainIcon, y ? ut.mainOpen : null].filter(Boolean).join(" "), children: s })
          }
        )
      ]
    }
  );
}
const rg = "_root_1wujt_1", og = "_list_1wujt_5", sg = "_item_1wujt_15", ag = "_link_1wujt_22", lg = "_linkButton_1wujt_23", ig = "_current_1wujt_24", cg = "_disabled_1wujt_68", dg = "_icon_1wujt_74", ug = "_text_1wujt_81", fg = "_separator_1wujt_85", Ue = {
  root: rg,
  list: og,
  item: sg,
  link: ag,
  linkButton: lg,
  current: ig,
  disabled: cg,
  icon: dg,
  text: ug,
  separator: fg
};
function Qy({ items: e, onClick: t, Click: r, ariaLabel: s = "Breadcrumb", className: l }) {
  const c = t ?? r, h = (o) => {
    o.disabled || c?.({ text: o.text, path: o.path });
  };
  return /* @__PURE__ */ n("nav", { "aria-label": s, className: [Ue.root, l].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((o, a) => {
    const i = a === e.length - 1, p = !!o.disabled;
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
    ] }, `${o.text}-${a}`);
  }) }) });
}
const _g = "_root_fkzb5_1", pg = "_list_fkzb5_5", hg = "_item_fkzb5_15", mg = "_connector_fkzb5_21", gg = "_connectorCompleted_fkzb5_30", bg = "_step_fkzb5_34", yg = "_active_fkzb5_69", xg = "_completed_fkzb5_75", vg = "_circle_fkzb5_79", kg = "_check_fkzb5_109", wg = "_icon_fkzb5_114", $g = "_number_fkzb5_119", Ng = "_text_fkzb5_124", ft = {
  root: _g,
  list: pg,
  item: hg,
  connector: mg,
  connectorCompleted: gg,
  step: bg,
  active: yg,
  completed: xg,
  circle: vg,
  check: kg,
  icon: wg,
  number: $g,
  text: Ng
};
function e2({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: s = 0,
  linear: l,
  Linear: c,
  onChange: h,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: i = "Steps",
  className: p
}) {
  const d = l ?? c ?? !1, $ = t ?? r, y = $ !== void 0, [N, w] = X(() => Math.min(Math.max(0, $ ?? s), Math.max(0, e.length - 1))), u = Math.min(Math.max(0, y ? $ : N), Math.max(0, e.length - 1)), f = ae(null), m = H(
    (E) => {
      const _ = Math.min(Math.max(0, E), Math.max(0, e.length - 1));
      y || w(_), (h ?? o ?? a)?.(_);
    },
    [y, h, o, a, e.length]
  ), k = H(
    (E, _) => !!(_.disabled || d && E > u + 1),
    [d, u]
  ), x = (E) => {
    const _ = Array.from(
      E.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), v = document.activeElement, O = v ? _.indexOf(v) : -1;
    if (E.key === "ArrowRight" || E.key === "ArrowDown") {
      if (E.preventDefault(), _.length === 0) return;
      const I = O === -1 ? 0 : (O + 1) % _.length, z = _[I];
      z && z.focus();
    } else if (E.key === "ArrowLeft" || E.key === "ArrowUp") {
      if (E.preventDefault(), _.length === 0) return;
      const I = O === -1 ? _.length - 1 : (O - 1 + _.length) % _.length, z = _[I];
      z && z.focus();
    } else E.key === "Home" ? (E.preventDefault(), _[0]?.focus()) : E.key === "End" && (E.preventDefault(), _[_.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": i,
      className: [ft.root, p].filter(Boolean).join(" "),
      onKeyDown: x,
      children: /* @__PURE__ */ n("ol", { ref: f, role: "list", className: ft.list, children: e.map((E, _) => {
        const v = _ === u, O = _ < u, I = k(_, E);
        return /* @__PURE__ */ S("li", { role: "listitem", className: ft.item, children: [
          _ > 0 ? /* @__PURE__ */ n("span", { className: [ft.connector, O ? ft.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              "data-step": _,
              "aria-current": v ? "step" : void 0,
              "aria-disabled": I ? "true" : void 0,
              disabled: I,
              tabIndex: I ? -1 : 0,
              className: [
                ft.step,
                v ? ft.active : null,
                O ? ft.completed : null,
                I ? ft.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                I || m(_);
              },
              children: [
                /* @__PURE__ */ n("span", { className: ft.circle, "aria-hidden": "true", children: O ? /* @__PURE__ */ n("span", { className: ft.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "check", size: "sm" }) }) : E.icon ? /* @__PURE__ */ n("span", { className: ft.icon, children: E.icon }) : /* @__PURE__ */ n("span", { className: ft.number, children: _ + 1 }) }),
                /* @__PURE__ */ n("span", { className: ft.text, children: E.text })
              ]
            }
          )
        ] }, `${E.text}-${_}`);
      }) })
    }
  );
}
const Sg = "_root_1axlw_1", Dg = "_horizontal_1axlw_13", Mg = "_vertical_1axlw_17", zg = "_pane_1axlw_21", Cg = "_handle_1axlw_31", Og = "_handleHorizontal_1axlw_51", Eg = "_handleVertical_1axlw_57", Ig = "_handleGrip_1axlw_63", Ag = "_handleCollapseHint_1axlw_75", Tg = "_collapseBtn_1axlw_79", jg = "_collapseBtnCollapsed_1axlw_109", $t = {
  root: Sg,
  horizontal: Dg,
  vertical: Mg,
  pane: zg,
  handle: Cg,
  handleHorizontal: Og,
  handleVertical: Eg,
  handleGrip: Ig,
  handleCollapseHint: Ag,
  collapseBtn: Tg,
  collapseBtnCollapsed: jg
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
  const s = parseFloat(r);
  return Number.isNaN(s) ? t : s;
}
function Ht(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function t2({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: s,
  Resize: l,
  onCollapse: c,
  Collapse: h,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const i = e ?? t ?? "horizontal", p = i === "horizontal", d = ae(null), $ = H(() => {
    const g = r.length;
    if (g === 0) return [];
    const C = r.map((A) => A.size ? On(A.size, 100 / g) : 100 / g), P = C.reduce((A, j) => A + j, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? C.map((A) => A / P * 100) : C;
  }, [r]), [y, N] = X(() => $()), [w, b] = X(() => r.map((g) => !!g.collapsed)), u = ae(y);
  we(() => {
    b(r.map((g) => !!g.collapsed));
  }, [r]);
  const f = H(() => r.map((g) => On(g.min, 0)), [r]), m = H(() => r.map((g) => On(g.max, 100)), [r]), k = H(
    (g, C) => {
      const P = { paneIndex: g, newSize: C, cancel: !1 };
      return (s ?? l)?.(P), !P.cancel;
    },
    [s, l]
  ), x = H(
    (g, C) => {
      const P = { paneIndex: g, collapse: C, cancel: !1 };
      return (c ?? h)?.(P), !P.cancel;
    },
    [c, h]
  ), E = H(
    (g) => {
      const C = !w[g];
      x(g, C) && (C ? (u.current = [...y], b((P) => {
        const A = [...P];
        return A[g] !== void 0 && (A[g] = !0), A;
      }), N((P) => {
        const A = [...P], j = A[g] ?? 0, U = g < A.length - 1 ? g + 1 : g - 1;
        if (U >= 0 && U < A.length) {
          const V = A[U] ?? 0;
          A[U] = V + j, A[g] = 0;
        } else
          A[g] = 0;
        return A;
      })) : (b((P) => {
        const A = [...P];
        return A[g] !== void 0 && (A[g] = !1), A;
      }), N(() => {
        const P = [...u.current];
        return P.length !== r.length ? r.map(() => 100 / r.length) : P;
      })));
    },
    [w, y, r.length, x]
  ), _ = ae(null), v = H(
    (g, C, P) => {
      const A = d.current;
      if (!A) return null;
      const j = A.getBoundingClientRect();
      let U;
      if (p) {
        if (j.width === 0) return null;
        U = (C - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        U = (P - j.top) / j.height * 100;
      }
      let V = 0;
      for (let Z = 0; Z < g; Z++) {
        const ee = y[Z];
        ee !== void 0 && (V += ee);
      }
      return U - V;
    },
    [p, y]
  ), O = (g, C) => {
    C.preventDefault();
    const P = C.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(C.pointerId), _.current = { handleIndex: g, pointerId: C.pointerId };
  }, I = (g) => {
    if (!_.current || _.current.pointerId !== g.pointerId) return;
    g.preventDefault();
    const C = _.current.handleIndex, P = v(C, g.clientX, g.clientY);
    if (P == null) return;
    const A = f(), j = m(), U = A[C] ?? 0, V = j[C] ?? 100, J = C + 1, Z = A[J] ?? 0, ee = j[J] ?? 100, ue = y[C] ?? 0, ie = y[J] ?? 0, q = ue + ie;
    if (q <= 0) return;
    let L = Ht(P, U, V), te = q - L;
    if (te < Z) {
      if (te = Z, L = q - te, L < U || L > V) return;
    } else if (te > ee && (te = ee, L = q - te, L < U || L > V))
      return;
    L = Ht(L, U, V), te = q - L, k(C, L) && N((G) => {
      const ce = [...G];
      return ce[C] = L, ce[J] = te, ce;
    });
  }, z = (g) => {
    !_.current || _.current.pointerId !== g.pointerId || (_.current = null);
  }, D = (g, C) => {
    const P = f(), A = m(), j = g, U = g + 1, V = y[j] ?? 0, J = y[U] ?? 0, Z = V + J;
    let ee = 0;
    const ue = !!r[j]?.collapsible, ie = !!r[U]?.collapsible;
    if (p ? C.key === "ArrowLeft" ? ee = -5 : C.key === "ArrowRight" && (ee = 5) : C.key === "ArrowUp" ? ee = -5 : C.key === "ArrowDown" && (ee = 5), C.key === "Home") {
      C.preventDefault();
      let q = P[j] ?? 0, L = Z - q;
      if (L = Ht(L, P[U] ?? 0, A[U] ?? 100), q = Z - L, q = Ht(q, P[j] ?? 0, A[j] ?? 100), !k(j, q)) return;
      N((te) => {
        const G = [...te];
        return G[j] = q, G[U] = L, G;
      });
      return;
    }
    if (C.key === "End") {
      C.preventDefault();
      let q = A[j] ?? 100;
      q = Math.min(q, Z - (P[U] ?? 0));
      let L = Z - q;
      if (L = Ht(L, P[U] ?? 0, A[U] ?? 100), q = Z - L, q = Ht(q, P[j] ?? 0, A[j] ?? 100), !k(j, q)) return;
      N((te) => {
        const G = [...te];
        return G[j] = q, G[U] = L, G;
      });
      return;
    }
    if ((C.key === "Enter" || C.key === " ") && (ue || ie)) {
      C.preventDefault(), E(ue ? j : U);
      return;
    }
    if (ee !== 0) {
      C.preventDefault();
      let q = V + ee, L = Z - q;
      const te = P[j] ?? 0, G = A[j] ?? 100, ce = P[U] ?? 0, se = A[U] ?? 100;
      if (q = Ht(q, te, G), L = Z - q, (L < ce || L > se) && (L = Ht(L, ce, se), q = Z - L, q = Ht(q, te, G), L = Z - q), !k(j, q)) return;
      N((ye) => {
        const ke = [...ye];
        return ke[j] = q, ke[U] = L, ke;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [$t.root, p ? $t.horizontal : $t.vertical, a].filter(Boolean).join(" "),
      "aria-label": o,
      children: r.map((g, C) => {
        const P = !!w[C], A = P ? 0 : y[C] ?? 100 / r.length, j = P ? { display: "none" } : p ? { flexBasis: `${A}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${A}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, U = On(g.min, 0), V = On(g.max, 100), J = C < r.length - 1, Z = !!r[C + 1]?.collapsible;
        return /* @__PURE__ */ S("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ S(
            "div",
            {
              role: "group",
              "aria-label": g.label ?? `Pane ${C + 1}`,
              className: $t.pane,
              style: j,
              "data-collapsed": P ? "true" : void 0,
              children: [
                P ? null : g.children,
                g.collapsible && !P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${C + 1}`,
                    "aria-expanded": !P,
                    onClick: () => E(C),
                    children: p ? "◀" : "▲"
                  }
                ) : null,
                g.collapsible && P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${C + 1}`,
                    "aria-expanded": !P,
                    onClick: () => E(C),
                    children: p ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          P && g.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: $t.collapseBtnCollapsed,
                "aria-label": `Expand pane ${C + 1}`,
                "aria-expanded": "false",
                onClick: () => E(C),
                children: p ? "▶" : "▼"
              }
            )
          ) : null,
          J ? /* @__PURE__ */ S(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": U,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(A),
              "aria-label": `Resize handle ${C + 1}`,
              tabIndex: P || w[C + 1] ? -1 : 0,
              className: [$t.handle, p ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (ee) => O(C, ee),
              onPointerMove: I,
              onPointerUp: z,
              onKeyDown: (ee) => D(C, ee),
              children: [
                /* @__PURE__ */ n("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (g.collapsible || Z) && /* @__PURE__ */ n("span", { className: $t.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, C);
      })
    }
  );
}
const Lg = "_root_exk72_1", Rg = "_list_exk72_5", Pg = "_vertical_exk72_14", Bg = "_horizontal_exk72_20", Fg = "_item_exk72_28", Hg = "_link_exk72_32", Kg = "_active_exk72_57", pn = {
  root: Lg,
  list: Rg,
  vertical: Pg,
  horizontal: Bg,
  item: Fg,
  link: Hg,
  active: Kg
};
function n2({
  items: e,
  selector: t,
  Selector: r,
  orientation: s,
  Orientation: l,
  onClick: c,
  Click: h,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const i = t ?? r, p = s ?? l ?? "vertical", [d, $] = X(() => e[0]?.selector ?? null), y = ae(d);
  y.current = d;
  const N = H(
    (w, b) => {
      if ($(w.selector), (c ?? h)?.({ text: w.text, selector: w.selector }), b) {
        try {
          b.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          b.scrollIntoView();
        }
        const f = b;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, h]
  );
  return we(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (i) {
        const x = document.querySelector(i);
        if (x) return x;
      }
      return window;
    })();
    let u = null;
    const f = /* @__PURE__ */ new Map(), m = () => {
      let x = null, E = null;
      for (const v of e) {
        const O = document.querySelector(v.selector);
        if (!O) continue;
        f.set(v.selector, O);
        const I = O.getBoundingClientRect();
        let z = I.top;
        if (b !== window) {
          const D = b.getBoundingClientRect();
          z = I.top - D.top;
        }
        z <= 80 ? (!E || z > E.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (E = { sel: v.selector, el: O }) : (!x || z < x.top) && (x = { sel: v.selector, top: z });
      }
      const _ = E?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      _ && _ !== y.current && $(_);
    }, k = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const x = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: b, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      u = new IntersectionObserver((E) => {
        const _ = E.filter((v) => v.isIntersecting).sort((v, O) => v.boundingClientRect.top - O.boundingClientRect.top);
        if (_[0]) {
          const v = _[0].target;
          for (const O of e) {
            if (document.querySelector(O.selector) === v) {
              $(O.selector);
              break;
            }
            if (O.selector.startsWith("#") && v.id === O.selector.slice(1)) {
              $(O.selector);
              break;
            }
          }
        } else
          m();
      }, x);
      for (const E of e) {
        const _ = document.querySelector(E.selector);
        _ && (u.observe(_), f.set(E.selector, _));
      }
    }
    return b === window ? (window.addEventListener("scroll", k, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", k), u?.disconnect();
    }) : (b.addEventListener("scroll", k, { passive: !0 }), m(), () => {
      b.removeEventListener("scroll", k), u?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ n("nav", { "aria-label": o, className: [pn.root, pn[p], a].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: pn.list, children: e.map((w) => {
    const b = w.selector === d;
    return /* @__PURE__ */ n("li", { className: pn.item, children: /* @__PURE__ */ n(
      "a",
      {
        href: w.selector.startsWith("#") || w.selector.startsWith(".") ? w.selector : `#${w.selector}`,
        className: [pn.link, b ? pn.active : null].filter(Boolean).join(" "),
        "aria-current": b ? "location" : void 0,
        onClick: (u) => {
          u.preventDefault();
          const f = document.querySelector(w.selector);
          N(w, f);
        },
        children: w.text
      }
    ) }, `${w.text}-${w.selector}`);
  }) }) });
}
const qg = "_root_1i6qn_1", Ug = "_viewport_1i6qn_17", Wg = "_slide_1i6qn_24", Vg = "_active_1i6qn_33", Xg = "_arrow_1i6qn_37", Gg = "_prev_1i6qn_71", Yg = "_next_1i6qn_75", Zg = "_pauseBtn_1i6qn_79", Jg = "_indicators_1i6qn_110", Qg = "_indicator_1i6qn_110", e0 = "_indicatorActive_1i6qn_145", Nt = {
  root: qg,
  viewport: Ug,
  slide: Wg,
  active: Vg,
  arrow: Xg,
  prev: Gg,
  next: Yg,
  pauseBtn: Zg,
  indicators: Jg,
  indicator: Qg,
  indicatorActive: e0
};
function r2({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: s = 0,
  auto: l,
  Auto: c,
  interval: h,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: i,
  showArrows: p,
  ShowArrows: d,
  showIndicators: $,
  ShowIndicators: y,
  onChange: N,
  Change: w,
  ariaLabel: b = "Carousel",
  className: u
}) {
  const f = t ?? r, m = f !== void 0, [k, x] = X(() => Math.min(Math.max(0, f ?? s), Math.max(0, e.length - 1))), E = m ? f : k, _ = e.length === 0 ? 0 : Math.min(Math.max(0, E), e.length - 1), v = l ?? c ?? !1, O = h ?? o ?? 3e3, I = a ?? i ?? !0, z = p ?? d ?? !0, D = $ ?? y ?? !0, [g, C] = X(!1), [P, A] = X(!1), j = g || P, U = ae(null), V = Ye(), J = H(
    (ce) => {
      const se = e.length === 0 ? 0 : (ce % e.length + e.length) % e.length;
      m || x(se), (N ?? w)?.(se);
    },
    [m, N, w, e.length]
  ), Z = H(() => {
    J(_ - 1);
  }, [J, _]), ee = H(() => {
    J(_ + 1);
  }, [J, _]), ue = H(
    (ce) => {
      J(ce);
    },
    [J]
  );
  we(() => {
    if (!v || j || e.length <= 1) return;
    const ce = setInterval(() => {
      J(_ + 1);
    }, O);
    return () => clearInterval(ce);
  }, [v, j, O, _, J, e.length]);
  const ie = (ce) => {
    e.length !== 0 && (ce.key === "ArrowLeft" ? (ce.preventDefault(), Z()) : ce.key === "ArrowRight" ? (ce.preventDefault(), ee()) : ce.key === "Home" ? (ce.preventDefault(), ue(0)) : ce.key === "End" && (ce.preventDefault(), ue(e.length - 1)));
  }, q = () => {
    I && v && A(!0);
  }, L = () => {
    I && v && A(!1);
  }, te = () => {
    I && v && A(!0);
  }, G = () => {
    I && v && A(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ S(
    "div",
    {
      ref: U,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [Nt.root, u].filter(Boolean).join(" "),
      onKeyDown: ie,
      onMouseEnter: q,
      onMouseLeave: L,
      onFocusCapture: te,
      onBlurCapture: G,
      children: [
        /* @__PURE__ */ n("div", { id: V, className: Nt.viewport, children: e.map((ce, se) => {
          const ye = se === _;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${se + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [Nt.slide, ye ? Nt.active : null].filter(Boolean).join(" "),
              children: ce
            },
            se
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
              onClick: Z,
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
              onClick: ee,
              children: "›"
            }
          )
        ] }) : null,
        v ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": g ? "Resume" : "Pause",
            "aria-pressed": g,
            onClick: () => C((ce) => !ce),
            children: g ? "▶" : "⏸"
          }
        ) : null,
        D && e.length > 1 ? /* @__PURE__ */ n("div", { className: Nt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ce, se) => {
          const ye = se === _;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Nt.indicator, ye ? Nt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${se + 1}`,
              "aria-current": ye ? "true" : void 0,
              "aria-controls": V,
              onClick: () => ue(se)
            },
            se
          );
        }) }) : null
      ]
    }
  );
}
const t0 = "_root_1arpg_1", n0 = "_group_1arpg_20", r0 = "_itemWrapper_1arpg_30", o0 = "_treeitem_1arpg_34", s0 = "_disabled_1arpg_50", a0 = "_selected_1arpg_60", l0 = "_caret_1arpg_66", i0 = "_caretIcon_1arpg_113", c0 = "_caretOpen_1arpg_120", d0 = "_caretPlaceholder_1arpg_124", u0 = "_label_1arpg_130", f0 = "_loading_1arpg_137", _0 = "_loadingRow_1arpg_143", p0 = "_empty_1arpg_149", h0 = "_checkbox_1arpg_155", rt = {
  root: t0,
  group: n0,
  itemWrapper: r0,
  treeitem: o0,
  disabled: s0,
  selected: a0,
  caret: l0,
  caretIcon: i0,
  caretOpen: c0,
  caretPlaceholder: d0,
  label: u0,
  loading: f0,
  loadingRow: _0,
  empty: p0,
  checkbox: h0
};
function m0({
  indeterminate: e,
  ...t
}) {
  const r = ae(null);
  return we(() => {
    r.current && (r.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: r, type: "checkbox", ...t });
}
function o2({
  data: e,
  Data: t,
  children: r,
  Children: s,
  textProperty: l,
  TextProperty: c,
  keyProperty: h,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: i,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: $,
  SelectedItems: y,
  defaultSelectedItem: N,
  defaultSelectedItems: w,
  onChange: b,
  Change: u,
  onExpand: f,
  Expand: m,
  onCollapse: k,
  Collapse: x,
  loadChildData: E,
  LoadChildData: _,
  template: v,
  Template: O,
  itemTemplate: I,
  ItemTemplate: z,
  ariaLabel: D,
  AriaLabel: g,
  allowCheckBoxes: C = !1,
  checkedKeys: P,
  defaultCheckedKeys: A,
  onCheckedChange: j,
  allowCheckChildren: U = !0,
  className: V
}) {
  const J = e ?? t ?? [], Z = r ?? s, ee = l ?? c ?? "text", ue = h ?? o ?? "id", ie = a ?? i ?? "single", q = D ?? g ?? "Tree", L = E ?? _, te = v ?? O ?? I ?? z, G = H(
    (B) => {
      const Y = B[ue];
      return Y != null ? String(Y) : String(B.id ?? "");
    },
    [ue]
  ), ce = H(
    (B) => {
      const Y = B[ee];
      if (Y != null) return String(Y);
      const oe = B.text;
      return oe != null ? String(oe) : "";
    },
    [ee]
  ), se = H(
    (B) => {
      if (Z) {
        const oe = Z(B);
        if (oe !== void 0) return oe;
      }
      const Y = B.children;
      if (Array.isArray(Y)) return Y;
    },
    [Z]
  ), ye = H(
    (B) => {
      const Y = /* @__PURE__ */ new Set(), oe = (pe) => {
        for (const _e of pe) {
          const xe = G(_e);
          _e.expanded && Y.add(xe);
          const je = se(_e);
          je && je.length > 0 && oe(je);
        }
      };
      return oe(B), Y;
    },
    [G, se]
  ), [ke, Be] = X(() => ye(J)), [ve, We] = X(() => /* @__PURE__ */ new Map()), [be, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = p ?? d, Re = $ ?? y, et = ie === "multiple" ? Re !== void 0 : Ve !== void 0, W = H(() => {
    if (ie === "multiple") {
      if (w && w.length > 0)
        return new Set(w.map((oe) => G(oe)));
      const B = /* @__PURE__ */ new Set(), Y = (oe) => {
        for (const pe of oe) {
          pe.selected && B.add(G(pe));
          const _e = se(pe);
          _e && Y(_e);
        }
      };
      return Y(J), B;
    } else {
      if (N) return /* @__PURE__ */ new Set([G(N)]);
      let B = null;
      const Y = (oe) => {
        for (const pe of oe) {
          if (pe.selected)
            return B = G(pe), !0;
          const _e = se(pe);
          if (_e && Y(_e)) return !0;
        }
        return !1;
      };
      return Y(J), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [ie, N, w, G, se, J]), [M, F] = X(() => W()), ne = $e(() => {
    if (ie === "multiple") {
      if (Re !== void 0) {
        const B = Re;
        return B ? new Set(B.map((Y) => G(Y))) : /* @__PURE__ */ new Set();
      }
      return M;
    } else {
      if (Ve !== void 0) {
        const B = Ve;
        return B ? /* @__PURE__ */ new Set([G(B)]) : /* @__PURE__ */ new Set();
      }
      return M;
    }
  }, [ie, Re, Ve, M, G]), fe = H(
    (B) => {
      let Y;
      const oe = (pe) => {
        for (const _e of pe) {
          if (G(_e) === B)
            return Y = _e, !0;
          const je = ve.get(G(_e)) ?? se(_e);
          if (je && oe(je)) return !0;
        }
        return !1;
      };
      if (oe(J), !Y) {
        for (const pe of ve.values())
          if (oe(pe)) break;
      }
      return Y;
    },
    [J, ve, G, se]
  ), re = H(() => {
    const B = /* @__PURE__ */ new Map(), Y = (oe) => {
      for (const pe of oe) {
        const _e = G(pe);
        B.set(_e, pe);
        const je = ve.get(_e) ?? se(pe);
        je && Y(je);
      }
    };
    return Y(J), B;
  }, [J, ve, G, se]), me = H(
    (B) => {
      const Y = G(B);
      if (!B.disabled)
        if (ie === "multiple") {
          const pe = new Set(ne);
          pe.has(Y) ? pe.delete(Y) : pe.add(Y), et || F(pe);
          const _e = b ?? u;
          if (_e) {
            const xe = re(), je = [];
            for (const T of pe) {
              const R = xe.get(T) ?? fe(T);
              R && je.push(R);
            }
            _e({ item: B, selectedItems: je });
          }
        } else if (!ne.has(Y) || ne.size !== 1 || !ne.has(Y)) {
          et || F(/* @__PURE__ */ new Set([Y]));
          const _e = b ?? u;
          _e && _e({ item: B, selectedItem: B });
        } else {
          const _e = b ?? u;
          _e && _e({ item: B, selectedItem: B });
        }
    },
    [G, ie, ne, et, b, u, re, fe]
  ), Ne = H(
    async (B) => {
      const Y = G(B);
      if (!!B.disabled) return;
      const pe = ke.has(Y), _e = f ?? m, xe = k ?? x, je = se(B), R = ve.get(Y) ?? je, he = !(R !== void 0 && R.length > 0) && L != null;
      if (pe) {
        Be((Ie) => {
          const Ae = new Set(Ie);
          return Ae.delete(Y), Ae;
        }), xe?.({ item: B });
        return;
      }
      if (he) {
        if (be.has(Y)) return;
        Ze((Ie) => {
          const Ae = new Set(Ie);
          return Ae.add(Y), Ae;
        });
        try {
          const Ae = await L(B);
          We((ze) => {
            const at = new Map(ze);
            return at.set(Y, Ae), at;
          }), Be((ze) => {
            const at = new Set(ze);
            return at.add(Y), at;
          }), _e?.({ item: B });
        } catch {
        } finally {
          Ze((Ie) => {
            const Ae = new Set(Ie);
            return Ae.delete(Y), Ae;
          });
        }
        return;
      }
      Be((Ie) => {
        const Ae = new Set(Ie);
        return Ae.add(Y), Ae;
      }), _e?.({ item: B });
    },
    [G, ke, se, ve, L, be, f, m, k, x]
  ), Fe = $e(() => {
    const B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), pe = (_e, xe) => {
      for (const je of _e) {
        const T = G(je);
        B.has(T) || B.set(T, []), Y.set(T, xe), je.disabled && oe.add(T);
        const le = ve.get(T) ?? se(je);
        le && le.length > 0 && (B.set(T, le.map((he) => G(he))), pe(le, T));
      }
    };
    return pe(J, null), { childrenOf: B, parentOf: Y, disabledKeys: oe };
  }, [J, ve, G, se]), Je = H(
    (B) => {
      const Y = [], oe = [...Fe.childrenOf.get(B) ?? []];
      for (; oe.length > 0; ) {
        const pe = oe.pop();
        Y.push(pe), oe.push(...Fe.childrenOf.get(pe) ?? []);
      }
      return Y;
    },
    [Fe]
  ), [dt, xt] = X(
    () => new Set(A ?? [])
  ), Q = P !== void 0 ? new Set(P) : dt, De = H(
    (B) => {
      const Y = Fe.disabledKeys;
      return Je(B).filter((oe) => !Y.has(oe));
    },
    [Je, Fe]
  ), nt = H(
    (B) => {
      if (Q.has(B)) return !0;
      if (!C || !U) return !1;
      const Y = De(B);
      return Y.length > 0 && Y.every((oe) => Q.has(oe));
    },
    [Q, C, U, De]
  ), Ut = H(
    (B) => {
      if (!C || !U || Q.has(B)) return !1;
      const Y = De(B);
      if (Y.length === 0) return !1;
      const oe = Y.filter((pe) => Q.has(pe)).length;
      return oe > 0 && oe < Y.length;
    },
    [Q, C, U, De]
  ), St = H(
    (B) => {
      if (!C || B.disabled) return;
      const Y = G(B), oe = new Set(Q);
      if (oe.has(Y) || nt(Y)) {
        if (oe.delete(Y), U)
          for (const pe of De(Y)) oe.delete(pe);
      } else if (oe.add(Y), U)
        for (const pe of De(Y)) oe.add(pe);
      P === void 0 && xt(oe), j?.([...oe]);
    },
    [
      C,
      U,
      P,
      Q,
      De,
      G,
      nt,
      j
    ]
  ), Me = $e(() => {
    const B = [], Y = (oe, pe, _e) => {
      oe.forEach((xe, je) => {
        const T = G(xe), R = ce(xe), le = ve.get(T) ?? se(xe);
        let he;
        ve.has(T) ? he = ve.get(T).length > 0 : le !== void 0 ? he = le.length > 0 : L ? he = !0 : he = !1;
        const Ie = ke.has(T), Ae = !!xe.disabled, ze = oe.length, at = je + 1;
        if (B.push({
          item: xe,
          key: T,
          text: R,
          level: pe,
          posInSet: at,
          setSize: ze,
          hasChildren: he,
          expanded: Ie,
          parentKey: _e,
          disabled: Ae
        }), he && Ie) {
          const Mt = ve.get(T) ?? le;
          Mt && Mt.length > 0 && Y(Mt, pe + 1, T);
        }
      });
    };
    return Y(J, 1, null), B;
  }, [J, G, ce, se, ve, ke, L, be]), [Xe, vt] = X(() => Me[0]?.key ?? null), Lt = ae(""), Zt = ae(null), K = ae(null);
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
      let Y = null;
      B || (Y = K.current?.querySelector(`[data-key="${Xe}"]`) ?? null);
      const oe = B ?? Y;
      oe && document.activeElement !== oe && K.current?.contains(document.activeElement) && oe.focus();
    }
  }, [Xe]);
  const de = H(
    (B) => {
      vt(B), requestAnimationFrame(() => {
        const Y = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
        let oe = K.current?.querySelector(`[data-key="${Y}"]`);
        oe || (oe = K.current?.querySelector(`[data-key="${B}"]`) ?? null), oe?.focus();
      });
    },
    []
  ), Pe = H(
    (B) => Me.find((oe) => oe.key === B)?.parentKey ?? null,
    [Me]
  ), Ke = H(
    (B) => {
      if (Me.length === 0) return;
      const Y = Xe ? Me.findIndex((_e) => _e.key === Xe) : -1, oe = Y >= 0 ? Me[Y] : void 0;
      let pe = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), Y === -1)
          pe = Me[0]?.key ?? null;
        else {
          const _e = (Y + 1) % Me.length, xe = Me[_e];
          xe && (pe = xe.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), Y === -1) {
          const _e = Me[Me.length - 1];
          _e && (pe = _e.key);
        } else {
          const _e = (Y - 1 + Me.length) % Me.length, xe = Me[_e];
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
          const _e = Y + 1, xe = Me[_e];
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
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !oe)) return;
        if (B.key === " " && C) {
          const _e = fe(oe.key);
          _e && St(_e);
          return;
        }
        me(oe.item);
        return;
      }
      if (B.key.length === 1 && /^[a-zA-Z0-9]$/.test(B.key)) {
        B.preventDefault();
        const _e = (Lt.current + B.key).toLowerCase();
        Lt.current = _e, Zt.current && clearTimeout(Zt.current), Zt.current = setTimeout(() => {
          Lt.current = "";
        }, 500);
        const xe = Y >= 0 ? Y + 1 : 0, R = [...Me, ...Me].slice(xe, xe + Me.length).find((le) => le.text.toLowerCase().startsWith(_e));
        R && de(R.key);
        return;
      }
    },
    [Me, Xe, de, Ne, me, Pe, C, St]
  ), Rt = H(() => {
    if (!Xe && Me.length > 0) {
      const B = Me[0];
      B && vt(B.key);
    }
  }, [Xe, Me]), Dt = (B, Y, oe) => /* @__PURE__ */ n("ul", { role: "group", className: rt.group, children: B.map((pe, _e) => {
    const xe = G(pe), je = ce(pe), T = ve.get(xe) ?? se(pe);
    let R;
    ve.has(xe) ? R = ve.get(xe).length > 0 : T !== void 0 ? R = T.length > 0 : L ? R = !0 : R = !1;
    const le = ke.has(xe), he = ne.has(xe), Ie = !!pe.disabled, Ae = be.has(xe), ze = Xe === xe, at = B.length, Mt = _e + 1, Zr = te ? te(pe) : je, ur = C ? {
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
          "aria-expanded": R ? le : void 0,
          "aria-selected": he,
          "aria-level": Y,
          "aria-setsize": at,
          "aria-posinset": Mt,
          "aria-disabled": Ie || void 0,
          "aria-busy": Ae || void 0,
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
            C ? /* @__PURE__ */ n(
              m0,
              {
                className: rt.checkbox,
                checked: ur?.checked ?? !1,
                indeterminate: ur?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${je}`,
                onClick: (Ln) => Ln.stopPropagation(),
                onChange: () => St(pe)
              }
            ) : null,
            R ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: rt.caret,
                "aria-label": `${le ? "Collapse" : "Expand"} ${je}`,
                "aria-expanded": le,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Ln) => {
                  Ln.stopPropagation(), de(xe), Ne(pe);
                },
                children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [rt.caretIcon, le ? rt.caretOpen : null].filter(Boolean).join(" "), children: /* @__PURE__ */ n(Ce, { name: "chevron-right", size: 10 }) })
              }
            ) : /* @__PURE__ */ n("span", { className: rt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ n("span", { className: rt.label, children: Zr }),
            Ae ? /* @__PURE__ */ n("span", { className: rt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && le ? Ae ? /* @__PURE__ */ n("div", { className: rt.loadingRow, "aria-busy": "true", children: "Loading…" }) : T && T.length > 0 ? Dt(T, Y + 1) : ve.has(xe) && ve.get(xe).length > 0 ? Dt(ve.get(xe), Y + 1) : (T && T.length === 0, null) : null
    ] }, xe);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: K,
      role: "tree",
      "aria-label": q,
      "aria-multiselectable": ie === "multiple" || void 0,
      tabIndex: 0,
      className: [rt.root, V].filter(Boolean).join(" "),
      onKeyDown: Ke,
      onFocus: Rt,
      children: J.length === 0 ? /* @__PURE__ */ n("div", { className: rt.empty, children: "No items" }) : Dt(J, 1)
    }
  );
}
const g0 = "_root_ky8zf_1", b0 = "_panel_ky8zf_8", y0 = "_header_ky8zf_19", x0 = "_listbox_ky8zf_28", v0 = "_option_ky8zf_42", k0 = "_disabled_ky8zf_57", w0 = "_active_ky8zf_66", $0 = "_selected_ky8zf_70", N0 = "_empty_ky8zf_86", S0 = "_controls_ky8zf_93", D0 = "_reorder_ky8zf_102", M0 = "_btn_ky8zf_110", Le = {
  root: g0,
  panel: b0,
  header: y0,
  listbox: x0,
  option: v0,
  disabled: k0,
  active: w0,
  selected: $0,
  empty: N0,
  controls: S0,
  reorder: D0,
  btn: M0
};
function ot(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function Un(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function s2({
  source: e,
  Source: t,
  target: r,
  Target: s,
  value: l,
  Value: c,
  targetValue: h,
  TargetValue: o,
  data: a,
  Data: i,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: $,
  TargetChange: y,
  keyProperty: N,
  KeyProperty: w,
  onMove: b,
  Move: u,
  ariaLabel: f,
  AriaLabel: m,
  className: k
}) {
  const x = N ?? w ?? "id", E = f ?? m ?? "PickList", _ = e ?? t ?? l ?? c ?? a ?? i ?? [], v = r ?? s ?? h ?? o ?? [], [O, I] = X(() => [..._]), [z, D] = X(() => [...v]);
  we(() => {
    const M = e ?? t ?? l ?? c ?? a ?? i;
    M !== void 0 && I([...M]);
  }, [e, t, l, c, a, i]), we(() => {
    const M = r ?? s ?? h ?? o;
    M !== void 0 && D([...M]);
  }, [r, s, h, o]);
  const [g, C] = X(() => /* @__PURE__ */ new Set()), [P, A] = X(() => /* @__PURE__ */ new Set()), [j, U] = X(() => {
    const M = _.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), [V, J] = X(() => {
    const M = v.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), Z = $e(() => O.map((M, F) => M.disabled ? -1 : F).filter((M) => M >= 0), [O]), ee = $e(() => z.map((M, F) => M.disabled ? -1 : F).filter((M) => M >= 0), [z]);
  we(() => {
    if (j >= O.length) {
      const M = Z[Z.length - 1];
      U(M ?? 0);
    } else if (O.length > 0 && Z.length > 0 && !Z.includes(j)) {
      const M = Z[0];
      M !== void 0 && U(M);
    }
  }, [j, O.length, Z]), we(() => {
    if (V >= z.length) {
      const M = ee[ee.length - 1];
      J(M ?? 0);
    } else if (z.length > 0 && ee.length > 0 && !ee.includes(V)) {
      const M = ee[0];
      M !== void 0 && J(M);
    }
  }, [V, z.length, ee]), we(() => {
    C((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        O.some((re) => ot(re, x) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [O, x]), we(() => {
    A((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        z.some((re) => ot(re, x) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [z, x]);
  const ue = H(
    (M) => {
      (p ?? d)?.(M);
    },
    [p, d]
  ), ie = H(
    (M) => {
      ($ ?? y)?.(M);
    },
    [$, y]
  ), q = H(
    (M) => {
      (b ?? u)?.(M);
    },
    [b, u]
  ), L = H(
    (M) => {
      const F = O[M];
      if (!F || F.disabled) return;
      const ne = ot(F, x);
      C((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), U(M);
    },
    [O, x]
  ), te = H(
    (M) => {
      const F = z[M];
      if (!F || F.disabled) return;
      const ne = ot(F, x);
      A((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), J(M);
    },
    [z, x]
  ), G = H(() => {
    const M = [], F = [];
    for (const me of O) {
      const Ne = ot(me, x);
      g.has(Ne) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, fe = [...z, ...M];
    I(ne), D(fe), C(/* @__PURE__ */ new Set());
    const re = new Set(M.map((me) => ot(me, x)));
    A(re), ue(ne), ie(fe), q({ source: ne, target: fe, moved: M, direction: "toTarget" });
  }, [O, z, g, x, ue, ie, q]), ce = H(() => {
    const M = [], F = [];
    for (const me of z) {
      const Ne = ot(me, x);
      P.has(Ne) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, fe = [...O, ...M];
    D(ne), I(fe), A(/* @__PURE__ */ new Set());
    const re = new Set(M.map((me) => ot(me, x)));
    C(re), ue(fe), ie(ne), q({ source: fe, target: ne, moved: M, direction: "toSource" });
  }, [O, z, P, x, ue, ie, q]), se = H(() => {
    const M = O.filter((fe) => !fe.disabled);
    if (M.length === 0) return;
    const F = O.filter((fe) => !!fe.disabled), ne = [...z, ...M];
    I(F), D(ne), C(/* @__PURE__ */ new Set()), ue(F), ie(ne), q({ source: F, target: ne, moved: M, direction: "allToTarget" });
  }, [O, z, x, ue, ie, q]), ye = H(() => {
    const M = z.filter((fe) => !fe.disabled);
    if (M.length === 0) return;
    const F = z.filter((fe) => !!fe.disabled), ne = [...O, ...M];
    D(F), I(ne), A(/* @__PURE__ */ new Set()), ue(ne), ie(F), q({ source: ne, target: F, moved: M, direction: "allToSource" });
  }, [O, z, ue, ie, q]), ke = H(() => {
    if (P.size === 0) return;
    const M = [...z], F = P, ne = [];
    for (let re = 1; re < M.length; re++) {
      const me = M[re], Ne = M[re - 1];
      if (!me || !Ne) continue;
      const Fe = ot(me, x), Je = ot(Ne, x);
      F.has(Fe) && !F.has(Je) && !me.disabled && !Ne.disabled && (M[re - 1] = me, M[re] = Ne, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), ie(M), q({ source: O, target: M, moved: ne, direction: "up" });
    const fe = Array.from(F)[0];
    if (fe) {
      const re = M.findIndex((me) => ot(me, x) === fe);
      re >= 0 && J(re);
    }
  }, [z, P, x, O, ie, q]), Be = H(() => {
    if (P.size === 0) return;
    const M = [...z], F = P, ne = [];
    for (let re = M.length - 2; re >= 0; re--) {
      const me = M[re], Ne = M[re + 1];
      if (!me || !Ne) continue;
      const Fe = ot(me, x), Je = ot(Ne, x);
      F.has(Fe) && !F.has(Je) && !me.disabled && !Ne.disabled && (M[re] = Ne, M[re + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), ie(M), q({ source: O, target: M, moved: ne, direction: "down" });
    const fe = Array.from(F)[0];
    if (fe) {
      const re = M.findIndex((me) => ot(me, x) === fe);
      re >= 0 && J(re);
    }
  }, [z, P, x, O, ie, q]), ve = g.size > 0, We = P.size > 0, be = ae(""), Ze = ae(null), Ve = ae(""), Re = ae(null), tt = H(
    (M) => {
      if (O.length === 0) return;
      const F = Z;
      if (F.length === 0) return;
      const ne = F.includes(j) ? j : F[0] ?? 0;
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
        M.preventDefault(), L(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const re = (be.current + M.key).toLowerCase();
        be.current = re, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const me = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = me.slice(Ne).find((Je) => Un(O[Je]).toLowerCase().startsWith(re));
        Fe != null && U(Fe);
        return;
      }
      fe >= 0 && U(fe);
    },
    [O, Z, j, L]
  ), Qe = H(
    (M) => {
      if (z.length === 0) return;
      const F = ee;
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
        M.preventDefault(), te(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const re = (Ve.current + M.key).toLowerCase();
        Ve.current = re, Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = me.slice(Ne).find((Je) => Un(z[Je]).toLowerCase().startsWith(re));
        Fe != null && J(Fe);
        return;
      }
      fe >= 0 && J(fe);
    },
    [z, ee, V, te]
  ), et = ae(null), W = ae(null);
  return /* @__PURE__ */ S("div", { className: [Le.root, k].filter(Boolean).join(" "), "aria-label": E, children: [
    /* @__PURE__ */ S("div", { className: Le.panel, children: [
      /* @__PURE__ */ n("div", { className: Le.header, children: "Source" }),
      /* @__PURE__ */ n(
        "div",
        {
          ref: et,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: tt,
          children: O.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : O.map((M, F) => {
            const ne = ot(M, x), fe = g.has(ne), re = F === j, me = !!M.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": fe,
                "aria-disabled": me || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Le.option,
                  fe ? Le.selected : null,
                  re ? Le.active : null,
                  me ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => L(F),
                children: Un(M)
              },
              ne
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: Le.controls, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to target",
          "aria-disabled": !ve || void 0,
          disabled: !ve,
          onClick: G,
          children: "›"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to target",
          "aria-disabled": O.filter((M) => !M.disabled).length === 0 || void 0,
          disabled: O.filter((M) => !M.disabled).length === 0,
          onClick: se,
          children: "»"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all",
          "aria-disabled": O.filter((M) => !M.disabled).length === 0 || void 0,
          disabled: O.filter((M) => !M.disabled).length === 0,
          onClick: se,
          children: "»"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
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
          className: Le.btn,
          "aria-label": "Move all to source",
          "aria-disabled": z.filter((M) => !M.disabled).length === 0 || void 0,
          disabled: z.filter((M) => !M.disabled).length === 0,
          onClick: ye,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: Le.panel, children: [
      /* @__PURE__ */ n("div", { className: Le.header, children: "Target" }),
      /* @__PURE__ */ n(
        "div",
        {
          ref: W,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Qe,
          children: z.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : z.map((M, F) => {
            const ne = ot(M, x), fe = P.has(ne), re = F === V, me = !!M.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": fe,
                "aria-disabled": me || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Le.option,
                  fe ? Le.selected : null,
                  re ? Le.active : null,
                  me ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => te(F),
                children: Un(M)
              },
              ne
            );
          })
        }
      ),
      /* @__PURE__ */ S("div", { className: Le.reorder, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Le.btn,
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
            className: Le.btn,
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
const z0 = "_root_928ty_1", C0 = "_header_928ty_8", O0 = "_title_928ty_15", E0 = "_navBtn_928ty_20", I0 = "_resources_928ty_39", A0 = "_resource_928ty_39", T0 = "_grid_928ty_50", j0 = "_timeCol_928ty_55", L0 = "_timeCell_928ty_61", R0 = "_dayCol_928ty_66", P0 = "_dayHeader_928ty_73", B0 = "_slot_928ty_81", F0 = "_event_928ty_91", _t = {
  root: z0,
  header: C0,
  title: O0,
  navBtn: E0,
  resources: I0,
  resource: A0,
  grid: T0,
  timeCol: j0,
  timeCell: L0,
  dayCol: R0,
  dayHeader: P0,
  slot: B0,
  event: F0
};
function Tr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function a2({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: s,
  resources: l,
  onEventClick: c,
  onSlotClick: h,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [i, p] = X(r ?? /* @__PURE__ */ new Date()), d = r ?? i, $ = (w) => {
    r || p(w), s?.(w);
  }, y = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (w, b) => {
    const u = new Date(d);
    return u.setDate(d.getDate() - d.getDay() + b), u;
  }) : Array.from({ length: 30 }, (w, b) => {
    const u = new Date(d);
    return u.setDate(1 + b), u;
  }), N = Array.from({ length: 12 }, (w, b) => 8 + b);
  return /* @__PURE__ */ S("div", { className: [_t.root, a].filter(Boolean).join(" "), role: "group", "aria-label": o, children: [
    /* @__PURE__ */ S("div", { className: _t.header, children: [
      /* @__PURE__ */ n("button", { type: "button", className: _t.navBtn, "aria-label": "Previous", onClick: () => {
        const w = new Date(d);
        w.setDate(w.getDate() - 7), $(w);
      }, children: "‹" }),
      /* @__PURE__ */ n("span", { className: _t.title, children: d.toLocaleDateString() }),
      /* @__PURE__ */ n("button", { type: "button", className: _t.navBtn, "aria-label": "Next", onClick: () => {
        const w = new Date(d);
        w.setDate(w.getDate() + 7), $(w);
      }, children: "›" })
    ] }),
    l && /* @__PURE__ */ n("div", { className: _t.resources, children: l.map((w) => /* @__PURE__ */ n("div", { className: _t.resource, role: "presentation", "aria-label": w.name, children: w.name }, w.id)) }),
    /* @__PURE__ */ S("div", { className: _t.grid, role: "presentation", children: [
      /* @__PURE__ */ n("div", { className: _t.timeCol, role: "presentation", children: N.map((w) => /* @__PURE__ */ S("div", { className: _t.timeCell, children: [
        w,
        ":00"
      ] }, w)) }),
      y.map((w) => /* @__PURE__ */ S("div", { className: _t.dayCol, role: "presentation", title: w.toLocaleDateString(), onClick: () => h?.({ date: w }), tabIndex: 0, "aria-label": w.toLocaleDateString(), children: [
        /* @__PURE__ */ n("div", { className: _t.dayHeader, children: w.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        N.map((b) => /* @__PURE__ */ n("div", { className: _t.slot, tabIndex: -1, onClick: () => {
          const u = new Date(w);
          u.setHours(b), h?.({ date: u });
        } }, b)),
        e.filter((b) => b.start.toDateString() === w.toDateString()).map((b) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: _t.event,
            "aria-label": `${b.title} ${Tr(b.start)} - ${Tr(b.end)}`,
            "aria-pressed": !1,
            onClick: () => c?.({ event: b }),
            children: b.title
          },
          b.id
        ))
      ] }, w.toISOString()))
    ] })
  ] });
}
const H0 = "_root_1n0oq_1", K0 = "_header_1n0oq_8", q0 = "_headerCell_1n0oq_15", U0 = "_timeline_1n0oq_21", W0 = "_row_1n0oq_26", V0 = "_taskName_1n0oq_32", X0 = "_timelineCell_1n0oq_37", G0 = "_bar_1n0oq_43", Y0 = "_progress_1n0oq_56", Z0 = "_dep_1n0oq_61", jt = {
  root: H0,
  header: K0,
  headerCell: q0,
  timeline: U0,
  row: W0,
  taskName: V0,
  timelineCell: X0,
  bar: G0,
  progress: Y0,
  dep: Z0
};
function l2({ tasks: e, view: t = "week", onTaskClick: r, ariaLabel: s = "Gantt", className: l }) {
  const [c, h] = X(null);
  return /* @__PURE__ */ S("div", { className: [jt.root, l].filter(Boolean).join(" "), role: "grid", "aria-label": s, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ S("div", { className: jt.header, role: "row", children: [
      /* @__PURE__ */ n("div", { className: jt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ S("div", { className: jt.timeline, role: "columnheader", children: [
        "Timeline (",
        t,
        ")"
      ] })
    ] }),
    e.map((o) => /* @__PURE__ */ S("div", { className: jt.row, role: "row", "aria-selected": c === o.id, children: [
      /* @__PURE__ */ n("div", { className: jt.taskName, role: "gridcell", children: o.name }),
      /* @__PURE__ */ S("div", { className: jt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: jt.bar,
            role: "button",
            "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
            "aria-pressed": c === o.id,
            tabIndex: 0,
            onClick: () => {
              h(o.id), r?.({ task: o });
            },
            onKeyDown: (a) => {
              (a.key === "Enter" || a.key === " ") && (a.preventDefault(), h(o.id), r?.({ task: o }));
            },
            children: /* @__PURE__ */ n("div", { className: jt.progress, style: { width: `${o.progress ?? 0}%` } })
          }
        ),
        o.dependencies?.map((a) => /* @__PURE__ */ n("svg", { className: jt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-border-color)" }) }, a))
      ] })
    ] }, o.id))
  ] });
}
const J0 = "_root_1p46p_1", Q0 = "_fields_1p46p_6", eb = "_chip_1p46p_13", tb = "_table_1p46p_35", nb = "_totalRow_1p46p_55", rb = "_total_1p46p_55", hn = {
  root: J0,
  fields: Q0,
  chip: eb,
  table: tb,
  totalRow: nb,
  total: rb
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
function i2({ data: e, rowFields: t = [], columnFields: r = [], aggregateFields: s = [], onFieldsChange: l, ariaLabel: c = "Pivot table", className: h }) {
  const o = t, a = r, i = s, p = (b, u, f) => {
    const m = b === "row" ? o.filter((E) => E.property !== u) : o, k = b === "col" ? a.filter((E) => E.property !== u) : a, x = b === "agg" ? i.filter((E) => !(E.property === u && E.aggregate === f)) : i;
    l?.({ rowFields: m, columnFields: k, aggregateFields: x });
  }, d = (b, u) => u.map((f) => String(b[f.property])).join(""), $ = [...new Set(o.length ? e.map((b) => d(b, o)) : [""])].sort(), y = [...new Set(a.length ? e.map((b) => d(b, a)) : [""])].sort(), N = (b, u, f) => {
    const m = e.filter((x) => d(x, o) === b && d(x, a) === u), k = m.map((x) => Number(x[f.property])).filter((x) => !Number.isNaN(x));
    return !k.length && f.aggregate !== "Count" ? 0 : Wn[f.aggregate](f.aggregate === "Count" ? m.map(() => 1) : k);
  }, w = (b, u, f, m) => /* @__PURE__ */ S(
    "button",
    {
      type: "button",
      className: hn.chip,
      "aria-label": `Remove ${b} field ${f}`,
      onClick: () => p(b, u, m),
      children: [
        f,
        m ? ` (${m})` : ""
      ]
    },
    `${b}-${f}-${m ?? ""}`
  );
  return /* @__PURE__ */ S("div", { className: [hn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S("div", { className: hn.fields, children: [
      o.map((b) => w("row", b.property, b.title ?? b.property)),
      a.map((b) => w("col", b.property, b.title ?? b.property)),
      i.map((b) => w("agg", b.property, b.title ?? b.property, b.aggregate))
    ] }),
    /* @__PURE__ */ S("table", { className: hn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ S("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: o.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        y.map((b) => /* @__PURE__ */ n("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ S("tbody", { children: [
        $.map((b) => /* @__PURE__ */ S("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: b || "—" }),
          y.map((u) => /* @__PURE__ */ n("td", { title: En(N(b, u, i[0] ?? { property: "", aggregate: "Count" })), children: i.length ? En(N(b, u, i[0])) : "" }, u)),
          /* @__PURE__ */ n("td", { className: hn.total, children: i.length ? En(
            Wn[i[0].aggregate](
              y.flatMap((u) => e.filter((f) => d(f, o) === b && d(f, a) === u).map((f) => Number(f[i[0].property]))).filter((u) => !Number.isNaN(u))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ S("tr", { className: hn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          y.map((b) => /* @__PURE__ */ n("td", { children: i.length ? En(
            Wn[i[0].aggregate](
              e.filter((u) => d(u, a) === b).map((u) => Number(u[i[0].property])).filter((u) => !Number.isNaN(u))
            )
          ) : "" }, b)),
          /* @__PURE__ */ n("td", { children: i.length ? En(Wn[i[0].aggregate](e.map((b) => Number(b[i[0].property])).filter((b) => !Number.isNaN(b)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const ob = "_root_1axvl_1", sb = "_reverse_1axvl_10", ab = "_item_1axvl_14", lb = "_marker_1axvl_35", ib = "_body_1axvl_46", cb = "_label_1axvl_50", db = "_content_1axvl_56", on = {
  root: ob,
  reverse: sb,
  item: ab,
  marker: lb,
  body: ib,
  label: cb,
  content: db
};
function c2({ items: e, reverse: t = !1, ariaLabel: r = "Timeline", className: s }) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [on.root, t ? on.reverse : "", s].filter(Boolean).join(" "),
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
const ub = "_root_4ls7q_1", fb = "_header_4ls7q_13", _b = "_headCell_4ls7q_22", pb = "_row_4ls7q_32", hb = "_cell_4ls7q_37", In = {
  root: ub,
  header: fb,
  headCell: _b,
  row: pb,
  cell: hb
};
function d2({ count: e, rowHeight: t = 40, height: r = 320, loadData: s, columns: l = [], ariaLabel: c = "Virtual grid", className: h }) {
  const [o, a] = X(/* @__PURE__ */ new Map()), [i, p] = X(0), d = ae(/* @__PURE__ */ new Set()), $ = Math.ceil(r / t), y = Math.max(0, Math.floor(i / t) - 3), N = Math.min(e, y + $ + 6), w = H(
    (u, f) => {
      let m = !1;
      for (let k = u; k < f; k++)
        !o.has(k) && !d.current.has(k) && (m = !0);
      if (m) {
        for (let k = u; k < f; k++) d.current.add(k);
        s({ skip: u, top: f }).then((k) => {
          a((x) => {
            const E = new Map(x);
            return k.forEach((_, v) => E.set(u + v, _)), E;
          });
          for (let x = u; x < f; x++) d.current.delete(x);
        });
      }
    },
    [o, s]
  );
  we(() => {
    w(y, N);
  }, [y, N]);
  const b = [];
  for (let u = y; u < N; u++) {
    const f = o.get(u) ?? {};
    b.push(
      /* @__PURE__ */ n("div", { className: In.row, role: "row", style: { height: t }, children: l.map((m) => /* @__PURE__ */ n("div", { role: "gridcell", className: In.cell, style: m.width ? { width: m.width } : void 0, children: String(f[m.property] ?? "") }, m.property)) }, u)
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
      onScroll: (u) => p(u.target.scrollTop),
      onKeyDown: (u) => {
        const f = u.currentTarget;
        u.key === "ArrowDown" ? (u.preventDefault(), f.scrollTop += t) : u.key === "ArrowUp" ? (u.preventDefault(), f.scrollTop -= t) : u.key === "PageDown" ? (u.preventDefault(), f.scrollTop += r) : u.key === "PageUp" && (u.preventDefault(), f.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: y * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: In.header, role: "row", children: l.map((u) => /* @__PURE__ */ n("div", { role: "columnheader", className: In.headCell, style: { height: t, ...u.width ? { width: u.width } : {} }, children: u.title ?? u.property }, u.property)) }),
        b,
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
    constructor(o, a, i, p) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7)
        throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let d = [];
      for (let y = 0; y < this.size; y++)
        d.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const $ = this.addEccAndInterleave(i);
      if (this.drawCodewords($), p == -1) {
        let y = 1e9;
        for (let N = 0; N < 8; N++) {
          this.applyMask(N), this.drawFormatBits(N);
          const w = this.getPenaltyScore();
          w < y && (p = N, y = w), this.applyMask(N);
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
    static encodeText(o, a) {
      const i = e.QrSegment.makeSegments(o);
      return t.encodeSegments(i, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, a) {
      const i = e.QrSegment.makeBytes(o);
      return t.encodeSegments([i], a);
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
    static encodeSegments(o, a, i = 1, p = 40, d = -1, $ = !0) {
      if (!(t.MIN_VERSION <= i && i <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let y, N;
      for (y = i; ; y++) {
        const f = t.getNumDataCodewords(y, a) * 8, m = c.getTotalBits(o, y);
        if (m <= f) {
          N = m;
          break;
        }
        if (y >= p)
          throw new RangeError("Data too long");
      }
      for (const f of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        $ && N <= t.getNumDataCodewords(y, f) * 8 && (a = f);
      let w = [];
      for (const f of o) {
        r(f.mode.modeBits, 4, w), r(f.numChars, f.mode.numCharCountBits(y), w);
        for (const m of f.getData())
          w.push(m);
      }
      l(w.length == N);
      const b = t.getNumDataCodewords(y, a) * 8;
      l(w.length <= b), r(0, Math.min(4, b - w.length), w), r(0, (8 - w.length % 8) % 8, w), l(w.length % 8 == 0);
      for (let f = 236; w.length < b; f ^= 253)
        r(f, 8, w);
      let u = [];
      for (; u.length * 8 < w.length; )
        u.push(0);
      return w.forEach((f, m) => u[m >>> 3] |= f << 7 - (m & 7)), new t(y, a, u, d);
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
    getModule(o, a) {
      return 0 <= o && o < this.size && 0 <= a && a < this.size && this.modules[a][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++)
        this.setFunctionModule(6, i, i % 2 == 0), this.setFunctionModule(i, 6, i % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), a = o.length;
      for (let i = 0; i < a; i++)
        for (let p = 0; p < a; p++)
          i == 0 && p == 0 || i == 0 && p == a - 1 || i == a - 1 && p == 0 || this.drawAlignmentPattern(o[i], o[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let i = a;
      for (let d = 0; d < 10; d++)
        i = i << 1 ^ (i >>> 9) * 1335;
      const p = (a << 10 | i) ^ 21522;
      l(p >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, s(p, d));
      this.setFunctionModule(8, 7, s(p, 6)), this.setFunctionModule(8, 8, s(p, 7)), this.setFunctionModule(7, 8, s(p, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, s(p, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, s(p, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, s(p, d));
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
      const a = this.version << 12 | o;
      l(a >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const p = s(a, i), d = this.size - 11 + i % 3, $ = Math.floor(i / 3);
        this.setFunctionModule(d, $, p), this.setFunctionModule($, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let i = -4; i <= 4; i++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(i)), $ = o + p, y = a + i;
          0 <= $ && $ < this.size && 0 <= y && y < this.size && this.setFunctionModule($, y, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let i = -2; i <= 2; i++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(o + p, a + i, Math.max(Math.abs(p), Math.abs(i)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, a, i) {
      this.modules[a][o] = i, this.isFunction[a][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const a = this.version, i = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(a, i))
        throw new RangeError("Invalid argument");
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a], $ = Math.floor(t.getNumRawDataModules(a) / 8), y = p - $ % p, N = Math.floor($ / p);
      let w = [];
      const b = t.reedSolomonComputeDivisor(d);
      for (let f = 0, m = 0; f < p; f++) {
        let k = o.slice(m, m + N - d + (f < y ? 0 : 1));
        m += k.length;
        const x = t.reedSolomonComputeRemainder(k, b);
        f < y && k.push(0), w.push(k.concat(x));
      }
      let u = [];
      for (let f = 0; f < w[0].length; f++)
        w.forEach((m, k) => {
          (f != N - d || k >= y) && u.push(m[f]);
        });
      return l(u.length == $), u;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let i = this.size - 1; i >= 1; i -= 2) {
        i == 6 && (i = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const $ = i - d, N = (i + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[N][$] && a < o.length * 8 && (this.modules[N][$] = s(o[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7)
        throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let i = 0; i < this.size; i++) {
          let p;
          switch (o) {
            case 0:
              p = (i + a) % 2 == 0;
              break;
            case 1:
              p = a % 2 == 0;
              break;
            case 2:
              p = i % 3 == 0;
              break;
            case 3:
              p = (i + a) % 3 == 0;
              break;
            case 4:
              p = (Math.floor(i / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              p = i * a % 2 + i * a % 3 == 0;
              break;
            case 6:
              p = (i * a % 2 + i * a % 3) % 2 == 0;
              break;
            case 7:
              p = ((i + a) % 2 + i * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][i] && p && (this.modules[a][i] = !this.modules[a][i]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let d = 0; d < this.size; d++) {
        let $ = !1, y = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[d][w] == $ ? (y++, y == 5 ? o += t.PENALTY_N1 : y > 5 && o++) : (this.finderPenaltyAddHistory(y, N), $ || (o += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[d][w], y = 1);
        o += this.finderPenaltyTerminateAndCount($, y, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let $ = !1, y = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[w][d] == $ ? (y++, y == 5 ? o += t.PENALTY_N1 : y > 5 && o++) : (this.finderPenaltyAddHistory(y, N), $ || (o += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[w][d], y = 1);
        o += this.finderPenaltyTerminateAndCount($, y, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let $ = 0; $ < this.size - 1; $++) {
          const y = this.modules[d][$];
          y == this.modules[d][$ + 1] && y == this.modules[d + 1][$] && y == this.modules[d + 1][$ + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce(($, y) => $ + (y ? 1 : 0), a);
      const i = this.size * this.size, p = Math.ceil(Math.abs(a * 20 - i * 10) / i) - 1;
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
        const o = Math.floor(this.version / 7) + 2, a = Math.floor((this.version * 8 + o * 3 + 5) / (o * 4 - 4)) * 2;
        let i = [6];
        for (let p = this.size - 7; i.length < o; p -= a)
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
      let a = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const i = Math.floor(o / 7) + 2;
        a -= (25 * i - 10) * i - 55, o >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, a) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let p = 0; p < o - 1; p++)
        a.push(0);
      a.push(1);
      let i = 1;
      for (let p = 0; p < o; p++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], i), d + 1 < a.length && (a[d] ^= a[d + 1]);
        i = t.reedSolomonMultiply(i, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let i = a.map((p) => 0);
      for (const p of o) {
        const d = p ^ i.shift();
        i.push(0), a.forEach(($, y) => i[y] ^= t.reedSolomonMultiply($, d));
      }
      return i;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, a) {
      if (o >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let i = 0;
      for (let p = 7; p >= 0; p--)
        i = i << 1 ^ (i >>> 7) * 285, i ^= (a >>> p & 1) * o;
      return l(i >>> 8 == 0), i;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const a = o[1];
      l(a <= this.size * 3);
      const i = a > 0 && o[2] == a && o[3] == a * 3 && o[4] == a && o[5] == a;
      return (i && o[0] >= a * 4 && o[6] >= a ? 1 : 0) + (i && o[6] >= a * 4 && o[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, a, i) {
      return o && (this.finderPenaltyAddHistory(a, i), a = 0), a += this.size, this.finderPenaltyAddHistory(a, i), this.finderPenaltyCountPatterns(i);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, a) {
      a[0] == 0 && (o += this.size), a.pop(), a.unshift(o);
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
  function r(h, o, a) {
    if (o < 0 || o > 31 || h >>> o)
      throw new RangeError("Value out of range");
    for (let i = o - 1; i >= 0; i--)
      a.push(h >>> i & 1);
  }
  function s(h, o) {
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
    constructor(o, a, i) {
      if (this.mode = o, this.numChars = a, this.bitData = i, a < 0)
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
      let a = [];
      for (const i of o)
        r(i, 8, a);
      return new c(c.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let i = 0; i < o.length; ) {
        const p = Math.min(o.length - i, 3);
        r(parseInt(o.substring(i, i + p), 10), p * 3 + 1, a), i += p;
      }
      return new c(c.Mode.NUMERIC, o.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!c.isAlphanumeric(o))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let a = [], i;
      for (i = 0; i + 2 <= o.length; i += 2) {
        let p = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i + 1)), r(p, 11, a);
      }
      return i < o.length && r(c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)), 6, a), new c(c.Mode.ALPHANUMERIC, o.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : c.isNumeric(o) ? [c.makeNumeric(o)] : c.isAlphanumeric(o) ? [c.makeAlphanumeric(o)] : [c.makeBytes(c.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let a = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128)
        r(o, 8, a);
      else if (o < 16384)
        r(2, 2, a), r(o, 14, a);
      else if (o < 1e6)
        r(6, 3, a), r(o, 21, a);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, a);
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
    static getTotalBits(o, a) {
      let i = 0;
      for (const p of o) {
        const d = p.mode.numCharCountBits(a);
        if (p.numChars >= 1 << d)
          return 1 / 0;
        i += 4 + d + p.bitData.length;
      }
      return i;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let a = [];
      for (let i = 0; i < o.length; i++)
        o.charAt(i) != "%" ? a.push(o.charCodeAt(i)) : (a.push(parseInt(o.substring(i + 1, i + 3), 16)), i += 2);
      return a;
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
const mb = "_root_1leml_1", gb = {
  root: mb
}, bb = {
  low: Ot.QrCode.Ecc.LOW,
  medium: Ot.QrCode.Ecc.MEDIUM,
  quartile: Ot.QrCode.Ecc.QUARTILE,
  high: Ot.QrCode.Ecc.HIGH
};
function u2({
  value: e,
  size: t = 128,
  render: r = "svg",
  errorCorrection: s = "medium",
  margin: l = 4,
  ariaLabel: c,
  className: h,
  onError: o
}) {
  const a = c ?? `QR code for ${e}`, i = ae(null), p = Xr("(prefers-color-scheme: dark)"), [d, $] = X(null);
  we(() => {
    const k = document.documentElement;
    $(k.dataset.theme ?? null);
    const x = new MutationObserver(() => {
      $(k.dataset.theme ?? null);
    });
    return x.observe(k, { attributes: !0, attributeFilter: ["data-theme"] }), () => x.disconnect();
  }, []);
  const y = $e(() => {
    try {
      return Ot.QrCode.encodeText(e, bb[s]);
    } catch {
      return null;
    }
  }, [e, s]), N = ae(null);
  we(() => {
    if (y !== null) {
      N.current = null;
      return;
    }
    const k = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(k), (N.current?.value !== e || N.current?.onError !== o) && (N.current = { value: e, onError: o }, o?.(k));
  }, [y, e, o]);
  const w = Math.max(0, Math.floor(l)), b = [gb.root, h].filter(Boolean).join(" ");
  if (we(() => {
    if (r !== "canvas" || y === null) return;
    const k = i.current, x = k?.getContext("2d");
    if (!k || !x) return;
    const E = getComputedStyle(k), _ = E.getPropertyValue("--dx-text-color").trim() || "#000", v = E.getPropertyValue("--dx-surface-color").trim() || "#fff";
    yb(x, y, t, w, _, v);
  }, [r, y, t, w, p, d]), y === null)
    return /* @__PURE__ */ n("div", { className: b, role: "img", "aria-label": a, "data-qr-error": "true" });
  const u = y.size + w * 2, f = t / u;
  if (r === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: i,
        className: b,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const m = [];
  for (let k = 0; k < y.size; k++)
    for (let x = 0; x < y.size; x++)
      y.getModule(x, k) && m.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (x + w) * f,
            y: (k + w) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${x}-${k}`
        )
      );
  return /* @__PURE__ */ S(
    "svg",
    {
      className: b,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: m })
      ]
    }
  );
}
function yb(e, t, r, s, l, c) {
  const h = r / (t.size + s * 2);
  e.fillStyle = c, e.fillRect(0, 0, r, r), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + s) * h, (o + s) * h, h + 0.5, h + 0.5);
}
const xb = "_root_1v9la_1", vb = "_value_1v9la_9", jr = {
  root: xb,
  value: vb
}, Lr = [
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
], Rr = 104, kb = 106;
function wb(e) {
  const t = [Rr];
  for (let s = 0; s < e.length; s++) {
    const l = e.charCodeAt(s);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let r = Rr;
  for (let s = 1; s < t.length; s++) r += s * t[s];
  return t.push(r % 103, kb), t;
}
function f2({ value: e, format: t = "Code128", height: r = 60, showValue: s = !1, ariaLabel: l, className: c }) {
  const h = l ?? `Barcode ${e}`, o = $e(() => {
    const a = [];
    let i = 0;
    for (const p of wb(e)) {
      const d = Lr[p] ?? Lr[0];
      for (let $ = 0; $ < d.length; $++) {
        const y = Number(d[$]);
        $ % 2 === 0 && a.push({ x: i, w: y }), i += y;
      }
    }
    return { modules: a, total: i };
  }, [e]);
  return /* @__PURE__ */ S("span", { className: [jr.root, c].filter(Boolean).join(" "), children: [
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
          /* @__PURE__ */ n("rect", { width: o.total, height: r, fill: "var(--dx-surface-color)" }),
          o.modules.map((a, i) => /* @__PURE__ */ n("rect", { x: a.x, y: 0, width: a.w, height: r, fill: "var(--dx-text-color)" }, i))
        ]
      }
    ),
    s && /* @__PURE__ */ n("span", { className: jr.value, children: e })
  ] });
}
const $b = "_root_gfdmk_1", Nb = "_svg_gfdmk_10", Sb = "_gridline_gfdmk_15", Db = "_tickLabel_gfdmk_21", Mb = "_axisTitle_gfdmk_27", zb = "_dataLabel_gfdmk_34", Cb = "_legend_gfdmk_40", Ob = "_legendItem_gfdmk_48", Eb = "_swatch_gfdmk_56", Ib = "_tooltip_gfdmk_63", Ab = "_visuallyHidden_gfdmk_77", st = {
  root: $b,
  svg: Nb,
  gridline: Sb,
  tickLabel: Db,
  axisTitle: Mb,
  dataLabel: zb,
  legend: Cb,
  legendItem: Ob,
  swatch: Eb,
  tooltip: Ib,
  visuallyHidden: Ab
}, Pr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Tb(e, t, r) {
  const s = t - e || 1, l = r ?? Math.pow(10, Math.floor(Math.log10(s / 4))), c = Math.floor(e / l) * l, h = Math.ceil(t / l) * l, o = [];
  for (let a = c; a <= h + 1e-9; a += l) o.push(Number(a.toFixed(6)));
  return { min: c, max: h, step: l, ticks: o };
}
function _2({
  series: e,
  width: t = 600,
  height: r = 400,
  valueAxis: s,
  categoryAxis: l,
  showLegend: c = !0,
  tooltipVisible: h = !0,
  onSeriesClick: o,
  ariaLabel: a = "Chart",
  className: i
}) {
  const [p, d] = X(null), $ = $e(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const v of e) for (const O of v.data) _.add(String(O[v.categoryProperty] ?? ""));
    return [..._];
  }, [e]), y = $e(() => e.flatMap((_) => _.data.map((v) => Number(v[_.valueProperty]))).filter((_) => !Number.isNaN(_)), [e]), N = s?.min ?? (y.length ? Math.min(0, ...y) : 0), w = s?.max ?? (y.length ? Math.max(...y) : 10), b = $e(() => Tb(N, w, s?.step), [N, w, s?.step]), u = { t: 16, r: 16, b: 40, l: 56 }, f = t - u.l - u.r, m = r - u.t - u.b, k = (_) => u.l + _ / Math.max(1, $.length - 1) * f, x = (_) => u.t + (1 - (_ - b.min) / (b.max - b.min || 1)) * m, E = (_, v) => v.color ?? Pr[_ % Pr.length];
  return /* @__PURE__ */ S("figure", { className: [st.root, i].filter(Boolean).join(" "), role: "img", "aria-label": a, "aria-describedby": `${a.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ S("svg", { width: t, height: r, className: st.svg, role: "presentation", children: [
      s?.gridlines !== !1 && b.ticks.map((_) => /* @__PURE__ */ n("line", { x1: u.l, x2: u.l + f, y1: x(_), y2: x(_), className: st.gridline }, _)),
      l?.gridlines && $.map((_, v) => /* @__PURE__ */ n("line", { x1: k(v), x2: k(v), y1: u.t, y2: u.t + m, className: st.gridline }, v)),
      b.ticks.map((_) => /* @__PURE__ */ n("text", { x: u.l - 8, y: x(_) + 4, textAnchor: "end", className: st.tickLabel, children: _ }, _)),
      $.map((_, v) => /* @__PURE__ */ n("text", { x: k(v), y: u.t + m + 16, textAnchor: "middle", className: st.tickLabel, children: _ }, _)),
      s?.title && /* @__PURE__ */ n("text", { x: 12, y: u.t + m / 2, textAnchor: "middle", transform: `rotate(-90,12,${u.t + m / 2})`, className: st.axisTitle, children: s.title }),
      l?.title && /* @__PURE__ */ n("text", { x: u.l + f / 2, y: r - 4, textAnchor: "middle", className: st.axisTitle, children: l.title }),
      (() => {
        const _ = /* @__PURE__ */ new Map();
        for (const I of e)
          if (I.stack)
            for (const z of I.data) {
              const D = String(z[I.categoryProperty] ?? ""), g = Number(z[I.valueProperty]);
              if (Number.isNaN(g)) continue;
              _.has(I.stack) || _.set(I.stack, /* @__PURE__ */ new Map());
              const C = _.get(I.stack);
              C.set(D, (C.get(D) ?? 0) + g);
            }
        const v = e.filter((I) => I.type === "pie" || I.type === "donut"), O = /* @__PURE__ */ new Map();
        for (const I of v) {
          const z = I.data.reduce((D, g) => D + (Number(g[I.valueProperty]) || 0), 0);
          O.set(I, z);
        }
        return e.map((I, z) => {
          const D = I.data.map((A) => ({
            cat: String(A[I.categoryProperty] ?? ""),
            val: Number(A[I.valueProperty]),
            size: I.sizeProperty ? Number(A[I.sizeProperty]) : void 0,
            item: A
          })), g = new Map($.map((A, j) => [A, j])), C = E(z, I);
          if (I.type === "pie" || I.type === "donut") {
            const A = u.l + f / 2, j = u.t + m / 2, U = Math.min(f, m) / 3, V = I.type === "donut" ? I.innerRadius ?? U * 0.5 : 0, J = O.get(I) ?? D.reduce((ee, ue) => ee + ue.val, 0);
            let Z = -90;
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
              D.map((ee, ue) => {
                const ie = J ? ee.val / J * 360 : 0, q = Z, L = Z + ie;
                Z = L;
                const te = ie > 180 ? 1 : 0, G = (Qe) => Qe * Math.PI / 180, ce = A + U * Math.cos(G(q)), se = j + U * Math.sin(G(q)), ye = A + U * Math.cos(G(L)), ke = j + U * Math.sin(G(L)), Be = A + V * Math.cos(G(L)), ve = j + V * Math.sin(G(L)), We = A + V * Math.cos(G(q)), be = j + V * Math.sin(G(q)), Ze = V ? `M ${ce} ${se} A ${U} ${U} 0 ${te} 1 ${ye} ${ke} L ${Be} ${ve} A ${V} ${V} 0 ${te} 0 ${We} ${be} Z` : `M ${A} ${j} L ${ce} ${se} A ${U} ${U} 0 ${te} 1 ${ye} ${ke} Z`, Ve = (q + L) / 2, Re = A + (U + 12) * Math.cos(G(Ve)), tt = j + (U + 12) * Math.sin(G(Ve));
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n(
                    "path",
                    {
                      d: Ze,
                      fill: C,
                      stroke: "var(--dx-surface-color)",
                      strokeWidth: 1,
                      onMouseEnter: () => h && d({ x: Re, y: tt, text: `${I.title ?? ee.cat}: ${ee.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => o?.({ seriesTitle: I.title ?? "", category: ee.cat, value: ee.val, item: ee.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: Re, y: tt, textAnchor: "middle", className: st.dataLabel, children: ee.val })
                ] }, ue);
              })
            ] }, z);
          }
          if (I.type === "scatter" || I.type === "bubble")
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
              D.map((A, j) => {
                const U = g.get(A.cat) ?? 0, V = Number(D[j].cat), J = Number.isNaN(V) ? k(U) : u.l + (V - b.min) / (b.max - b.min || 1) * f, Z = x(A.val), ee = I.type === "bubble" && A.size !== void 0 ? Math.max(4, Math.min(12, A.size / 10)) : 4;
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: J, cy: Z, r: ee, fill: C, stroke: "var(--dx-surface-color)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      cx: J,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => h && d({ x: J, y: Z, text: `${I.title ?? A.cat}: ${A.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => o?.({ seriesTitle: I.title ?? "", category: A.cat, value: A.val, item: A.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, j);
              })
            ] }, z);
          if (I.type === "line" || I.type === "area") {
            const A = (V) => {
              if (!I.stack) return b.min;
              let J = 0;
              for (let Z = 0; Z < z; Z++) {
                const ee = e[Z];
                if (ee?.stack !== I.stack) continue;
                const ue = ee.data.find((ie) => String(ie[ee.categoryProperty] ?? "") === V);
                ue && (J += Number(ue[ee.valueProperty]) || 0);
              }
              return J;
            }, j = D.map((V) => {
              const J = g.get(V.cat) ?? 0, Z = A(V.cat);
              return `${J === 0 ? "M" : "L"} ${k(J)} ${x(Z + V.val)}`;
            }).join(" "), U = D.map((V) => {
              const J = g.get(V.cat) ?? 0, Z = A(V.cat);
              return `${J === 0 ? "M" : "L"} ${k(J)} ${x(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
              I.type === "area" && /* @__PURE__ */ n("path", { d: `${j} L ${k(D.length - 1)} ${x(A(D[D.length - 1].cat))} L ${k(0)} ${x(A(D[0].cat))} Z`, fill: C, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ n("path", { d: j, fill: "none", stroke: C, strokeWidth: 2 }),
              I.stack && /* @__PURE__ */ n("path", { d: U, fill: "none", stroke: "transparent" }),
              D.map((V, J) => {
                const Z = g.get(V.cat) ?? 0, ee = A(V.cat), ue = k(Z), ie = x(ee + V.val);
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: ue, cy: ie, r: 4, fill: C, stroke: "var(--dx-surface-color)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "rect",
                    {
                      x: ue - 12,
                      y: ie - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => h && d({ x: ue, y: ie, text: `${I.title ?? V.cat}: ${V.val}` }),
                      onMouseLeave: () => d(null),
                      onFocus: () => h && d({ x: ue, y: ie, text: `${I.title ?? V.cat}: ${V.val}` }),
                      onBlur: () => d(null),
                      onClick: () => o?.({ seriesTitle: I.title ?? "", category: V.cat, value: V.val, item: V.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: ue, y: ie - 8, textAnchor: "middle", className: st.dataLabel, children: V.val })
                ] }, J);
              })
            ] }, z);
          }
          const P = I.type === "bar";
          return /* @__PURE__ */ S("g", { role: "list", "aria-label": I.title ?? `Series ${z + 1}`, children: [
            /* @__PURE__ */ n("title", { children: I.title ?? `Series ${z + 1}` }),
            D.map((A, j) => {
              const U = g.get(A.cat) ?? 0;
              let V = 0;
              if (I.stack)
                for (let se = 0; se < z; se++) {
                  const ye = e[se];
                  if (ye?.stack !== I.stack) continue;
                  const ke = ye.data.find((Be) => String(Be[ye.categoryProperty] ?? "") === A.cat);
                  ke && (V += Number(ke[ye.valueProperty]) || 0);
                }
              const J = V + A.val, Z = e.filter((se) => !se.stack || se.stack === I.stack).length, ee = f / $.length, ue = P ? 18 : Math.max(12, ee / (I.stack ? 1 : e.length) - 4), ie = P ? u.l + V / (b.max - b.min || 1) * f : k(U) - ue / 2 + (I.stack ? 0 : z % Z * ue), q = P ? u.t + U * m / $.length + 4 : x(J), L = P ? A.val / (b.max - b.min || 1) * f : ue - 4, te = P ? 16 : x(V) - x(J), G = P ? u.l + V / (b.max - b.min || 1) * f : ie, ce = P ? u.t + U * m / $.length + 4 : q;
              return /* @__PURE__ */ S("g", { role: "listitem", children: [
                /* @__PURE__ */ n(
                  "rect",
                  {
                    x: G,
                    y: ce,
                    width: P ? L : ue - 4,
                    height: te,
                    fill: C,
                    rx: 2,
                    onMouseEnter: () => h && d({ x: G + (P ? L : ue) / 2, y: ce, text: `${I.title ?? A.cat}: ${A.val}` }),
                    onMouseLeave: () => d(null),
                    onClick: () => o?.({ seriesTitle: I.title ?? "", category: A.cat, value: A.val, item: A.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                I.labels?.visible && /* @__PURE__ */ n("text", { x: G + (P ? L : ue) / 2, y: ce - 4, textAnchor: "middle", className: st.dataLabel, children: A.val })
              ] }, j);
            })
          ] }, z);
        });
      })()
    ] }),
    p && /* @__PURE__ */ n("div", { className: st.tooltip, style: { left: p.x, top: p.y - 28 }, children: p.text }),
    c && /* @__PURE__ */ n("div", { className: st.legend, children: e.map((_, v) => /* @__PURE__ */ S("span", { className: st.legendItem, children: [
      /* @__PURE__ */ n("span", { className: st.swatch, style: { backgroundColor: E(v, _) }, "aria-hidden": "true" }),
      _.title ?? `Series ${v + 1}`
    ] }, v)) }),
    /* @__PURE__ */ S("table", { className: st.visuallyHidden, id: `${a.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ n("caption", { children: a }),
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ S("tr", { children: [
        /* @__PURE__ */ n("th", { children: "Series" }),
        /* @__PURE__ */ n("th", { children: "Category" }),
        /* @__PURE__ */ n("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ n("tbody", { children: e.map(
        (_) => _.data.map((v, O) => /* @__PURE__ */ S("tr", { children: [
          /* @__PURE__ */ n("td", { children: _.title ?? "" }),
          /* @__PURE__ */ n("td", { children: String(v[_.categoryProperty] ?? "") }),
          /* @__PURE__ */ n("td", { children: String(v[_.valueProperty] ?? "") })
        ] }, `${_.title}-${O}`))
      ) })
    ] })
  ] });
}
export {
  Yi as ALERT_ICON,
  Ny as Accordion,
  _y as Alert,
  zy as Autocomplete,
  wy as Avatar,
  Bb as Badge,
  f2 as Barcode,
  yy as Body,
  Qy as Breadcrumb,
  Rb as Button,
  Pb as Card,
  r2 as Carousel,
  _2 as Chart,
  iy as Checkbox,
  Oy as Checkboxlist,
  By as Colorpicker,
  my as Column,
  vn as DEFAULT_OPERATOR_BY_TYPE,
  ph as DEFAULT_PALETTE,
  ry as DataFilter,
  oy as DataGrid,
  sy as DataList,
  Fy as Datepicker,
  dy as Dialog,
  Xy as DropZone,
  My as Dropdown,
  qb as EmptyState,
  qr as FILTER_OPERATORS,
  Jy as FabMenu,
  Ub as Field,
  Mf as Footer,
  Wb as Form,
  l2 as Gantt,
  Of as Header,
  Ce as Icon,
  ly as Input,
  ay as Label,
  by as Layout,
  Cy as Listbox,
  Ry as Mask,
  Gy as Menu,
  Py as Numeric,
  Ca as Pager,
  Yy as PanelMenu,
  Ly as Password,
  s2 as PickList,
  i2 as Pivot,
  Zy as ProfileMenu,
  xy as Progress,
  u2 as QRCode,
  Ey as Radiobuttonlist,
  Hy as Rating,
  hy as Row,
  a2 as Scheduler,
  Uy as SecurityCode,
  mn as Select,
  Iy as Selectbar,
  Pf as Sidebar,
  Wy as SignaturePad,
  py as Skeleton,
  Ky as Slider,
  Ty as Splitbutton,
  t2 as Splitter,
  gy as Stack,
  Hb as Stat,
  e2 as Steps,
  Kl as Switch,
  Kb as Table,
  $y as Tabs,
  Dy as Text,
  Sy as Textarea,
  jy as Textbox,
  ky as ThemeSwitcher,
  c2 as Timeline,
  qy as Timespanpicker,
  fy as ToastProvider,
  n2 as Toc,
  Ay as Togglebutton,
  cy as Tooltip,
  o2 as Tree,
  Vy as Upload,
  d2 as VirtualGrid,
  Wr as applyFilters,
  La as applyGridState,
  wn as columnValue,
  Qb as compare,
  ty as custom,
  Aa as cycleSort,
  Ra as defaultOperatorForType,
  Xb as email,
  Sr as formatMasked,
  br as formatValue,
  Xn as getByPath,
  Fb as iconNames,
  Ur as matchesFilters,
  Zb as maxLength,
  Yb as minLength,
  ja as paginate,
  Gb as pattern,
  Jb as range,
  Vb as required,
  ey as requiredTrue,
  cr as resolveVariant,
  Ls as runValidators,
  vy as shadeClass,
  ea as sortItems,
  Ta as sortedItems,
  Gs as toFilterString,
  Qs as toODataFilterString,
  js as useFormContext,
  ny as useFormField,
  Xr as useMediaQuery,
  uy as useToast
};
