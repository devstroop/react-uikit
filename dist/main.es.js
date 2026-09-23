import { jsxs as S, jsx as n, Fragment as je } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ye, isValidElement as Tn, cloneElement as Br, useState as G, useRef as le, useCallback as q, useMemo as $e, useContext as Fr, createContext as qr, useEffect as we, Fragment as Jr, Children as Qr, useImperativeHandle as ir } from "react";
const eo = "_button_18ay0_1", to = "_filled_18ay0_29", no = "_flat_18ay0_30", ro = "_outlined_18ay0_31", oo = "_text_18ay0_32", so = "_primary_18ay0_175", ao = "_secondary_18ay0_177", lo = "_ghost_18ay0_179", io = "_danger_18ay0_181", co = "_success_18ay0_183", uo = "_info_18ay0_185", fo = "_loading_18ay0_189", _o = "_spinner_18ay0_192", po = "_xs_18ay0_204", ho = "_sm_18ay0_210", mo = "_md_18ay0_216", go = "_lg_18ay0_222", yo = "_xl_18ay0_228", bo = "_iconOnly_18ay0_234", xo = "_fullWidth_18ay0_260", kt = {
  button: eo,
  filled: to,
  flat: no,
  outlined: ro,
  text: oo,
  "style-primary": "_style-primary_18ay0_35",
  "tone-primary": "_tone-primary_18ay0_35",
  "style-secondary": "_style-secondary_18ay0_41",
  "tone-secondary": "_tone-secondary_18ay0_41",
  "style-base": "_style-base_18ay0_47",
  "style-light": "_style-light_18ay0_52",
  "style-dark": "_style-dark_18ay0_57",
  "style-danger": "_style-danger_18ay0_63",
  "tone-danger": "_tone-danger_18ay0_63",
  "style-success": "_style-success_18ay0_69",
  "tone-success": "_tone-success_18ay0_69",
  "style-warning": "_style-warning_18ay0_75",
  "tone-warning": "_tone-warning_18ay0_75",
  "style-info": "_style-info_18ay0_81",
  "tone-info": "_tone-info_18ay0_81",
  "shade-lighter": "_shade-lighter_18ay0_149",
  "shade-light": "_shade-light_18ay0_149",
  "shade-dark": "_shade-dark_18ay0_151",
  "shade-darker": "_shade-darker_18ay0_152",
  primary: so,
  secondary: ao,
  ghost: lo,
  danger: io,
  success: co,
  info: uo,
  loading: fo,
  spinner: _o,
  "dx-spin": "_dx-spin_18ay0_1",
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
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", s = t;
  if (r) {
    const h = vo[e];
    return { variant: h.variant, style: s ?? h.style };
  }
  const i = e ?? "filled";
  return { variant: i === "filled" || i === "flat" || i === "outlined" || i === "text" ? i : "filled", style: s ?? "primary" };
}
const Iy = qe(function({
  variant: t = "filled",
  severity: r,
  shade: s = "default",
  size: i = "md",
  fullWidth: c = !1,
  iconOnly: h = !1,
  loading: o = !1,
  className: a,
  type: l = "button",
  disabled: p,
  children: d,
  ...$
}, b) {
  const N = ko(t, r), w = s !== "default" ? `shade-${s}` : null, y = [
    kt.button,
    kt[N.variant],
    kt[`style-${N.style}`],
    // backwards-compat: tone-* still emitted
    kt[`tone-${N.style}`],
    w ? kt[w] : null,
    kt[i],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    t && kt[t] ? kt[t] : null,
    c ? kt.fullWidth : null,
    h ? kt.iconOnly : null,
    o ? kt.loading : null,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ S(
    "button",
    {
      ref: b,
      type: l,
      className: y,
      disabled: p || o,
      "aria-busy": o || void 0,
      ...$,
      children: [
        o ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: kt.spinner }) : null,
        d
      ]
    }
  );
}), wo = "_card_1qkae_1", $o = "_elevated_1qkae_8", No = "_filled_1qkae_13", So = "_outlined_1qkae_18", Do = "_interactive_1qkae_22", Mo = "_text_1qkae_30", zo = "_header_1qkae_46", Co = "_body_1qkae_53", Oo = "_footer_1qkae_63", gn = {
  card: wo,
  elevated: $o,
  filled: No,
  outlined: So,
  interactive: Do,
  text: Mo,
  header: zo,
  body: Co,
  footer: Oo
}, Ay = qe(function({ variant: t = "elevated", header: r, footer: s, className: i, children: c, onKeyDown: h, ...o }, a) {
  const l = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ S(
      "div",
      {
        ref: a,
        role: l ? "button" : void 0,
        tabIndex: l ? 0 : void 0,
        onKeyDown: (p) => {
          h?.(p), !(!l || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
        },
        className: [gn.card, gn[t], i].filter(Boolean).join(" "),
        ...o,
        children: [
          r != null && /* @__PURE__ */ n("div", { className: gn.header, children: r }),
          /* @__PURE__ */ n("div", { className: gn.body, children: c }),
          s != null && /* @__PURE__ */ n("div", { className: gn.footer, children: s })
        ]
      }
    )
  );
});
function cr(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const jo = "_badge_4a2jp_1", Eo = "_xs_4a2jp_14", Io = "_sm_4a2jp_19", Ao = "_md_4a2jp_24", To = "_lg_4a2jp_29", Ro = "_xl_4a2jp_34", Lo = "_neutral_4a2jp_40", Po = "_primary_4a2jp_45", Bo = "_secondary_4a2jp_50", Fo = "_light_4a2jp_55", qo = "_base_4a2jp_60", Ko = "_dark_4a2jp_65", Ho = "_info_4a2jp_70", Uo = "_success_4a2jp_75", Wo = "_warning_4a2jp_80", Vo = "_danger_4a2jp_85", Xo = "_filled_4a2jp_92", Go = "_outlined_4a2jp_142", Yo = "_text_4a2jp_194", yn = {
  badge: jo,
  xs: Eo,
  sm: Io,
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
  "shade-lighter": "_shade-lighter_4a2jp_306",
  "shade-light": "_shade-light_4a2jp_306",
  "shade-dark": "_shade-dark_4a2jp_308",
  "shade-darker": "_shade-darker_4a2jp_309"
}, Ty = qe(function({ severity: t = "primary", variant: r = "filled", shade: s, size: i = "md", className: c, children: h, ...o }, a) {
  const l = t, p = cr(r, "filled"), d = s && s !== "default" ? `shade-${s}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: a,
      className: [yn.badge, yn[i], yn[l], yn[p], d ? yn[d] : null, c].filter(Boolean).join(" "),
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
}, Ry = [
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
  search: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(je, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(je, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(je, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ n("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ n("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ S(je, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ce = qe(function({ name: t, size: r = "md", strokeWidth: s = 2, className: i, ...c }, h) {
  const o = typeof r == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: h,
      className: [o ? ns[r] : null, i].filter(Boolean).join(" "),
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
}, Ly = qe(function({ label: t, value: r, delta: s, deltaTone: i = "neutral", hint: c, className: h, ...o }, a) {
  return /* @__PURE__ */ S("div", { ref: a, className: [Jt.stat, h].filter(Boolean).join(" "), ...o, children: [
    /* @__PURE__ */ n("div", { className: Jt.label, children: t }),
    /* @__PURE__ */ S("div", { className: Jt.row, children: [
      /* @__PURE__ */ n("div", { className: Jt.value, children: r }),
      s != null && /* @__PURE__ */ n("div", { className: [Jt.delta, Jt[i]].join(" "), children: s })
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
function Py({
  columns: e,
  rows: t,
  rowKey: r,
  empty: s,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: h = !0,
  className: o
}) {
  const a = c === "default" || c === "both" ? "" : Wt[c];
  return /* @__PURE__ */ S("div", { className: [Wt.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S(
      "table",
      {
        className: [
          Wt.table,
          a,
          h ? Wt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ n("caption", { className: Wt.caption, children: i }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((l) => /* @__PURE__ */ n(
            "th",
            {
              className: l.align != null ? Wt[l.align] : void 0,
              scope: "col",
              children: l.header
            },
            l.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((l) => /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "td",
            {
              className: p.align != null ? Wt[p.align] : void 0,
              children: p.render != null ? p.render(l) : l[p.key]
            },
            p.key
          )) }, r(l))) })
        ]
      }
    ),
    t.length === 0 && s != null && /* @__PURE__ */ n("div", { className: Wt.empty, children: s })
  ] });
}
const $s = "_emptyState_7sl2y_1", Ns = "_icon_7sl2y_13", Ss = "_title_7sl2y_18", Ds = "_description_7sl2y_24", Ms = "_action_7sl2y_30", bn = {
  emptyState: $s,
  icon: Ns,
  title: Ss,
  description: Ds,
  action: Ms
};
function By({ icon: e, title: t, description: r, action: s, className: i }) {
  return /* @__PURE__ */ S("div", { className: [bn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: bn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: bn.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: bn.description, children: r }),
    s != null && /* @__PURE__ */ n("div", { className: bn.action, children: s })
  ] });
}
const zs = "_field_3cvvz_1", Cs = "_label_3cvvz_8", Os = "_required_3cvvz_14", js = "_hint_3cvvz_19", Es = "_error_3cvvz_24", xn = {
  field: zs,
  label: Cs,
  required: Os,
  hint: js,
  error: Es
};
function Fy({ label: e, htmlFor: t, required: r, hint: s, supporting: i, error: c, children: h, className: o }) {
  const a = s ?? i, l = Ye(), p = Ye(), d = Ye(), $ = c != null ? p : a != null ? d : null, b = typeof h == "function" ? h({ inputId: l, hintId: d, errorId: p }) : h, N = Tn(b) && typeof b.props.id == "string" ? b.props.id : void 0, w = N ?? t ?? l, y = Tn(b) && ($ != null || N == null && typeof b.type == "string"), f = N != null || t != null || y, _ = y && Tn(b) ? Br(
    b,
    {
      id: w,
      "aria-describedby": $ != null ? [
        b.props["aria-describedby"],
        $
      ].filter((m) => typeof m == "string").join(" ") || void 0 : b.props["aria-describedby"],
      "aria-invalid": c != null ? !0 : b.props["aria-invalid"]
    }
  ) : b;
  return /* @__PURE__ */ S("div", { className: [xn.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ S("label", { className: xn.label, htmlFor: f ? w : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ n("span", { className: xn.required, "aria-hidden": "true", children: "*" })
    ] }),
    _,
    c != null ? /* @__PURE__ */ n("div", { id: p, className: xn.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ n("div", { id: d, className: xn.hint, children: a }) : null
  ] });
}
const Is = "_form_fwqyn_1", As = {
  form: Is
}, Kr = qr(null);
function Ts() {
  const e = Fr(Kr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function qy({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: s,
  method: i,
  children: c,
  className: h
}) {
  const [o, a] = G({}), [l, p] = G(0), d = le(o);
  d.current = o;
  const $ = q((m) => {
    a((k) => k[m.name] === m ? k : { ...k, [m.name]: m });
  }, []), b = q((m) => {
    a((k) => {
      if (!(m in k)) return k;
      const x = { ...k };
      return delete x[m], x;
    });
  }, []), N = q(() => {
    const m = {};
    for (const k of Object.values(d.current)) {
      const x = k.validate();
      x.length > 0 && (m[k.name] = x);
    }
    return m;
  }, []), w = q(() => {
    const m = N();
    p((k) => k + 1), Object.keys(m).length === 0 ? t?.(e) : r?.(m);
  }, [N, e, t, r]), y = (m) => {
    s != null && i != null || (m.preventDefault(), w());
  }, f = $e(
    () => ({ registerField: $, unregisterField: b, submit: w, submitCount: l }),
    [$, b, w, l]
  ), _ = [As.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Kr.Provider, { value: f, children: /* @__PURE__ */ n("form", { className: _, onSubmit: y, action: s, method: i, noValidate: !0, children: c }) });
}
const sn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Ky = (e = "Required") => (t) => sn(t) ? e : null, Hy = (e = "Invalid email") => (t) => sn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Uy = (e, t = "Invalid format") => (r) => sn(r) || e.test(String(r)) ? null : t, Wy = (e, t = `Minimum ${e} characters`) => (r) => sn(r) || String(r).length >= e ? null : t, Vy = (e, t = `Maximum ${e} characters`) => (r) => sn(r) || String(r).length <= e ? null : t, Xy = (e, t, r = `Between ${e} and ${t}`) => (s) => {
  if (sn(s)) return null;
  const i = Number(s);
  return !Number.isNaN(i) && i >= e && i <= t ? null : r;
}, Gy = (e, t = "Values do not match") => (r, s) => {
  if (sn(r)) return null;
  const i = typeof e == "function" ? e(s) : e;
  return r === i ? null : t;
}, Yy = (e = "Required") => (t) => t === !0 ? null : e, Zy = (e) => (t, r) => e(t, r);
function Rs(e, t, r) {
  return e.map((s) => s(t, r)).filter((s) => s != null);
}
function Jy(e, t) {
  const { registerField: r, unregisterField: s, submitCount: i } = Ts(), [c, h] = G(t?.initialValue), [o, a] = G(!1), [l, p] = G(!1), d = le(() => []);
  d.current = () => Rs(t?.validate ?? [], c), we(() => (r({ name: e, validate: () => d.current() }), () => s(e)), [e, r, s]), we(() => {
    i > 0 && (a(!0), p(!1));
  }, [i]);
  const $ = o && !l ? d.current() : [];
  return { value: c, setValue: (N) => {
    h(N), p(!0);
  }, errors: $ };
}
const Ls = "_select_6ntdq_1", Ps = "_invalid_6ntdq_33", Bs = "_xs_6ntdq_40", Fs = "_sm_6ntdq_48", qs = "_md_6ntdq_56", Ks = "_lg_6ntdq_62", Hs = "_xl_6ntdq_68", Yn = {
  select: Ls,
  invalid: Ps,
  xs: Bs,
  sm: Fs,
  md: qs,
  lg: Ks,
  xl: Hs
}, mn = qe(function({ size: t = "md", invalid: r = !1, options: s, children: i, className: c, ...h }, o) {
  return /* @__PURE__ */ n(
    "select",
    {
      ref: o,
      className: [Yn.select, Yn[t], r ? Yn.invalid : null, c].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...h,
      children: s != null ? s.map((a) => /* @__PURE__ */ n("option", { value: a.value, disabled: a.disabled, children: a.label }, a.value)) : i
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
function In(e, t) {
  const r = fr(e), s = fr(t);
  if (typeof r == "number" && typeof s == "number") return r - s;
  const i = String(r ?? ""), c = String(s ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function Gn(e) {
  if (e.secondOperator == null) return !1;
  if (Ws(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function _r(e, t, r) {
  const s = Xn(t, e.property), i = pr(s, e.value, e.operator, r);
  if (!Gn(e)) return i;
  const c = pr(s, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function pr(e, t, r, s) {
  const i = s === "CaseInsensitive", c = (a) => i && typeof a == "string" ? a.toLowerCase() : a, h = c(e), o = c(t);
  switch (r) {
    case "Equals":
      return h === o || Array.isArray(h) && h.some((a) => c(a) === o);
    case "NotEquals":
      return h !== o && !(Array.isArray(h) && h.some((a) => c(a) === o));
    case "LessThan":
      return In(h, o) < 0;
    case "LessThanOrEquals":
      return In(h, o) <= 0;
    case "GreaterThan":
      return In(h, o) > 0;
    case "GreaterThanOrEquals":
      return In(h, o) >= 0;
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
  const s = r.logicalOperator ?? "And", i = r.caseSensitivity ?? "CaseInsensitive";
  if (dr(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? s;
    return t.filters[c === "Or" ? "some" : "every"](
      (h) => Ur(e, h, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", _r(t, e, i);
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
  const t = (i, c) => {
    switch (i) {
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
  const r = e.property, s = t === "CaseInsensitive", i = (l) => s ? `tolower(${l})` : l, c = (l) => typeof l == "string" ? `'${Ys(l)}'` : l instanceof Date ? `'${l.toISOString()}'` : String(l ?? ""), h = (l, p) => {
    const d = typeof p == "string", $ = d && s ? i(r) : r;
    switch (l) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${$} ${Zs[l]} ${d && s ? i(c(p)) : c(p)}`;
      case "Contains":
        return `contains(${i(r)}, ${i(c(p))})`;
      case "StartsWith":
        return `startswith(${i(r)}, ${i(c(p))})`;
      case "EndsWith":
        return `endswith(${i(r)}, ${i(c(p))})`;
      case "DoesNotContain":
        return `not(contains(${i(r)}, ${i(c(p))}))`;
      case "In":
        return Array.isArray(p) ? `${$} in (${p.map((b) => c(b)).join(", ")})` : `${$} in (${c(p)})`;
      case "NotIn":
        return Array.isArray(p) ? `not(${$} in (${p.map((b) => c(b)).join(", ")}))` : `not(${$} in (${c(p)}))`;
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
    return `(${e.filters.map((i) => Qs(i, { caseSensitivity: r })).filter(Boolean).join(` ${s} `)})`;
  }
  return Js(e, r);
}
function ea(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, s) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, h = In(Xn(r, i.property), Xn(s, i.property));
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const ta = "_filter_m5ukp_1", na = "_rows_m5ukp_9", ra = "_row_m5ukp_9", oa = "_join_m5ukp_21", sa = "_property_m5ukp_30", aa = "_operator_m5ukp_34", la = "_value_m5ukp_38", ia = "_remove_m5ukp_42", ca = "_bar_m5ukp_58", da = "_add_m5ukp_64", ua = "_custom_m5ukp_78", fa = "_summary_m5ukp_82", _a = "_second_m5ukp_87", pa = "_secondAdd_m5ukp_91", ha = "_addSecond_m5ukp_95", ma = "_joinSelect_m5ukp_109", Ge = {
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
    return /* @__PURE__ */ n(je, { children: e.editor({ value: t, onChange: r }) });
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
  const i = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ge.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => r(s === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value)
    }
  );
}
function Qy({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: h,
  items: o,
  children: a
}) {
  const [l, p] = G(
    () => s != null && s.length > 0 ? s.map((f, _) => ({ id: _, ...f })) : [{ id: 0, property: e[0]?.name ?? "", operator: vn[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (f, _) => {
    p((m) => m.map((k) => k.id === f ? { ...k, ..._ } : k));
  }, $ = () => {
    const f = l[l.length - 1], _ = Math.max(0, ...l.map((k) => k.id)) + 1, m = e[0];
    p((k) => [
      ...k,
      {
        id: _,
        property: f?.property ?? m?.name ?? "",
        operator: vn[e.find((x) => x.name === (f?.property ?? m?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (f) => {
    p((_) => _.length > 1 ? _.filter((m) => m.id !== f) : _);
  }, N = $e(() => {
    const f = [];
    for (const _ of l) {
      if (_.property === "" || (_.value == null || _.value === "") && !kn.includes(_.operator)) continue;
      const k = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: x } = _;
      x != null && Gn(_) && (k.secondOperator = x, k.secondValue = _.secondValue, k.logicalOperator = _.logicalOperator ?? "And"), f.push(k);
    }
    return f;
  }, [l]), w = $e(() => o == null || N.length === 0 ? o : Wr(o, { operator: t, filters: N }, { caseSensitivity: r }), [o, N, t, r]);
  we(() => {
    h != null && o != null && h(w ?? []);
  }, [w]);
  const y = (f) => e.find((_) => _.name === f) ?? { name: f, type: "string" };
  return /* @__PURE__ */ S("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: l.map((f, _) => {
      const m = y(f.property), k = i ? [vn[m.type ?? "string"]] : Hr, x = !kn.includes(f.operator), j = f.secondOperator != null;
      return /* @__PURE__ */ S(Jr, { children: [
        /* @__PURE__ */ S("div", { className: Ge.row, children: [
          _ > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Ge.property,
              value: f.property,
              onChange: (u) => {
                const v = e.find((C) => C.name === u.target.value);
                d(f.id, {
                  property: u.target.value,
                  operator: vn[v?.type ?? "string"],
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
            mn,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: Ge.operator,
              value: f.operator,
              onChange: (u) => {
                const v = u.target.value;
                d(
                  f.id,
                  kn.includes(v) ? {
                    operator: v,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: v }
                );
              },
              options: k.map((u) => ({ value: u, label: hr[u] }))
            }
          ),
          x ? /* @__PURE__ */ n(mr, { property: m, value: f.value, onChange: (u) => d(f.id, { value: u }) }) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => b(f.id),
              children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
            }
          )
        ] }),
        x ? j ? /* @__PURE__ */ S("div", { className: [Ge.row, Ge.second].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${_ + 1} second-operator logic`,
              className: Ge.joinSelect,
              value: f.logicalOperator ?? "And",
              onChange: (u) => d(f.id, { logicalOperator: u.target.value }),
              options: [
                { value: "And", label: "And" },
                { value: "Or", label: "Or" }
              ]
            }
          ),
          /* @__PURE__ */ n(
            mn,
            {
              "aria-label": `Condition ${_ + 1} second operator`,
              className: Ge.operator,
              value: f.secondOperator,
              onChange: (u) => {
                const v = u.target.value;
                d(
                  f.id,
                  kn.includes(v) ? { secondOperator: v, secondValue: void 0 } : { secondOperator: v }
                );
              },
              options: k.map((u) => ({
                value: u,
                label: hr[u]
              }))
            }
          ),
          f.secondOperator == null || !kn.includes(f.secondOperator) ? /* @__PURE__ */ n(
            mr,
            {
              property: m,
              value: f.secondValue,
              onChange: (u) => d(f.id, { secondValue: u })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove second condition ${_ + 1}`,
              onClick: () => d(f.id, {
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
            onClick: () => d(f.id, {
              secondOperator: vn[m.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, f.id);
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
const ga = "_pager_ps38y_1", ya = "_alignLeft_ps38y_10", ba = "_alignCenter_ps38y_14", xa = "_alignRight_ps38y_18", va = "_alignJustify_ps38y_22", ka = "_summary_ps38y_26", wa = "_controls_ps38y_31", $a = "_button_ps38y_37", Na = "_active_ps38y_73", Sa = "_ellipsis_ps38y_85", Da = "_size_ps38y_91", lt = {
  pager: ga,
  alignLeft: ya,
  alignCenter: ba,
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
  let i = Math.max(1, e - s);
  const c = Math.min(t, i + r - 1);
  i = Math.max(1, c - r + 1);
  const h = [];
  for (let o = i; o <= c; o++) h.push(o);
  return i > 2 && h.unshift("ellipsis"), i > 1 && h.unshift(1), c < t - 1 && h.push("ellipsis"), c < t && h.push(t), h;
}
function Ca({
  count: e,
  pageSize: t,
  page: r,
  pageNumber: s,
  defaultPage: i = 1,
  pageSizeOptions: c,
  pageNumbersCount: h = 5,
  alwaysVisible: o = !1,
  horizontalAlign: a = "left",
  showPagingSummary: l,
  showSummary: p,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: $ = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: b,
  summaryTemplate: N,
  pageSizeText: w = "Items per page",
  firstPageTitle: y = "First page",
  prevPageTitle: f = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: k = "Page {0}",
  pageAriaLabelFormat: x = "Page {0}",
  onPageChange: j,
  onPageSizeChange: u,
  ariaLabel: v = "Pagination",
  className: C
}) {
  const E = r ?? s ?? i, [z, D] = G(E), g = r !== void 0 || s !== void 0, O = g ? E : z, L = Math.max(1, Math.ceil(e / t)), I = Math.min(Math.max(1, O), L), R = l ?? p ?? !0, H = o || L > 1, V = za(I, L, h), Y = q(
    (U) => {
      const X = Math.min(Math.max(1, U), L);
      g || D(X);
      const P = (X - 1) * t;
      j?.({ page: X, skip: P, top: t, pageCount: L, pageSize: t });
    },
    [g, j, L, t]
  ), ee = a === "center" ? lt.alignCenter : a === "right" ? lt.alignRight : a === "justify" ? lt.alignJustify : lt.alignLeft, te = { count: e, pageNumber: I, pageSize: t, pageCount: L }, ue = (U) => {
    const X = Array.from(U.currentTarget.querySelectorAll("button[data-pager-page]")), P = X.indexOf(document.activeElement);
    P !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (X[P + 1] ?? X[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (X[P - 1] ?? X[X.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), X[0]?.focus()) : U.key === "End" && (U.preventDefault(), X[X.length - 1]?.focus()));
  };
  return H ? /* @__PURE__ */ S("nav", { className: [lt.pager, ee, C].filter(Boolean).join(" "), "aria-label": v, children: [
    R && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: b ? b(te) : N ? N({ count: e, pageNumber: I, pageSize: t }) : Ma($, I, L, e) }),
    /* @__PURE__ */ S("div", { className: lt.controls, role: "group", "aria-label": v, onKeyDown: ue, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: I <= 1,
          onClick: () => Y(1),
          "aria-label": y,
          title: y,
          children: "«"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: I <= 1,
          onClick: () => Y(I - 1),
          "aria-label": f,
          title: f,
          children: "‹"
        }
      ),
      V.map(
        (U, X) => U === "ellipsis" ? /* @__PURE__ */ n("span", { className: lt.ellipsis, "aria-hidden": "true", children: "…" }, `e${X}`) : /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "data-pager-page": U,
            className: [lt.button, U === I ? lt.active : ""].filter(Boolean).join(" "),
            "aria-current": U === I ? "page" : void 0,
            "aria-label": gr(x, U),
            title: gr(k, U),
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
          disabled: I >= L,
          onClick: () => Y(I + 1),
          "aria-label": _,
          title: _,
          children: "›"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: I >= L,
          onClick: () => Y(L),
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
          onChange: (U) => u?.(Number(U.target.value)),
          "aria-label": w,
          children: c.map((U) => /* @__PURE__ */ n("option", { value: U, children: U }, U))
        }
      )
    ] })
  ] }) : null;
}
function rr(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: s, showSummary: i, ...c } = e;
  return /* @__PURE__ */ n(
    Ca,
    {
      page: t,
      showPagingSummary: i,
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
function Oa(e, t, r, s, i, c) {
  if (!t || !r) return e.map((a) => ({ type: "row", row: a }));
  const h = /* @__PURE__ */ new Map();
  e.forEach((a) => {
    const l = String(i(a, t) ?? ""), p = h.get(l);
    p ? p.push(a) : h.set(l, [a]);
  });
  const o = [];
  return h.forEach((a, l) => {
    const p = a[0], d = p != null ? i(p, t) : void 0;
    o.push({
      type: "group",
      group: { key: l, display: c(d), property: t, title: r.title ?? t, count: a.length }
    }), s.has(l) && a.forEach(($) => o.push({ type: "row", row: $ }));
  }), o;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function ja(e, t) {
  const r = {};
  let s = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    r[i] = s === 0 ? "0px" : `${s}px`;
    const h = t[i] ?? c.width ?? "8rem";
    s += parseFloat(h);
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
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const br = ["Ascending", "Descending", null];
function Ia(e, t, r = {}) {
  const s = e.find((c) => c.property === t), i = br[(s ? br.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : r.multi ? [...e.filter((c) => c.property !== t), { property: t, sortOrder: i }] : [{ property: t, sortOrder: i }];
}
function Aa(e, t) {
  return ea(e, t);
}
function Ta(e, t, r) {
  const s = Math.max(1, Math.ceil(e.length / r)), i = Math.min(Math.max(1, t), s), c = (i - 1) * r;
  return { items: e.slice(c, c + r), pageCount: s, pageNumber: i, total: e.length };
}
function Ra(e, t, r = {}) {
  const s = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(([o, a]) => ({
    property: o,
    operator: a.operator ?? "Contains",
    value: Ea(a.value, r.types?.[o] ?? "string")
  })), i = s.length > 0 ? Wr(e, { operator: r.logicalOperator ?? "And", filters: s }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, c = Aa(i, t.sorts);
  return { ...Ta(c, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function La(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Pa = "_grid_1my0o_1", Ba = "_toolbar_1my0o_8", Fa = "_picker_1my0o_13", qa = "_pickerButton_1my0o_17", Ka = "_pickerPanel_1my0o_31", Ha = "_pickerItem_1my0o_46", Ua = "_groupPanel_1my0o_55", Wa = "_groupPanelActive_1my0o_66", Va = "_groupPanelText_1my0o_70", Xa = "_groupChip_1my0o_74", Ga = "_groupRemove_1my0o_85", Ya = "_groupRow_1my0o_94", Za = "_groupCell_1my0o_98", Ja = "_groupToggle_1my0o_103", Qa = "_editRow_1my0o_116", el = "_editCell_1my0o_120", tl = "_editInput_1my0o_125", nl = "_commandCell_1my0o_135", rl = "_commandButton_1my0o_141", ol = "_data_1my0o_156", sl = "_table_1my0o_163", al = "_header_1my0o_169", ll = "_center_1my0o_181", il = "_right_1my0o_185", cl = "_sortButton_1my0o_189", dl = "_sortIndicator_1my0o_207", ul = "_sortIndex_1my0o_211", fl = "_cell_1my0o_222", _l = "_clickable_1my0o_236", pl = "_frozen_1my0o_244", hl = "_selected_1my0o_250", ml = "_resizeHandle_1my0o_254", gl = "_filterCell_1my0o_272", yl = "_filterSelect_1my0o_280", bl = "_filterInput_1my0o_290", xl = "_empty_1my0o_301", vl = "_loading_1my0o_307", kl = "_visuallyHidden_1my0o_317", ge = {
  grid: Pa,
  toolbar: Ba,
  picker: Fa,
  pickerButton: qa,
  pickerPanel: Ka,
  pickerItem: Ha,
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
  filterSelect: yl,
  filterInput: bl,
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
function eb({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: s = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: h = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: l = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: $ = 5,
  pagerPosition: b = "Bottom",
  showPagingSummary: N = !0,
  showPageSizeSelector: w = !0,
  selectionMode: y = "None",
  selectedKeys: f,
  onSelectionChange: _,
  showColumnPicker: m = !1,
  columnPickerText: k = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: j = !1,
  allowGrouping: u = !1,
  groupPanelText: v = "Drag a column header here to group",
  groupExpanded: C = !0,
  editMode: E = "None",
  allowRowCreate: z = !1,
  onRowUpdate: D,
  onRowCreate: g,
  onRowDelete: O,
  isLoading: L = !1,
  empty: I = "No records found",
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
    () => ja(fe, ke),
    [fe, ke]
  ), me = E !== "None" || O != null || z, Ne = $e(
    () => Ra(t, { sorts: Y, filters: te, pageNumber: U, pageSize: P }, {
      logicalOperator: a,
      caseSensitivity: o,
      types: Object.fromEntries(
        e.filter((A) => A.type != null && A.property != null).map((A) => [A.property, A.type])
      )
    }),
    [t, Y, te, U, P, a, o, e]
  ), Fe = $e(
    () => ye ? e.find((A) => A.property === ye) : void 0,
    [ye, e]
  ), Je = $e(
    () => Ve ?? new Set(C ? Ne.items.map((A) => String(wn(A, ye ?? "") ?? "")) : []),
    [Ve, C, Ne.items, ye]
  ), dt = $e(
    () => Oa(
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
    A !== "" && ee(Ia(Y, A, { multi: i }));
  }, De = (A, T) => {
    ue((ie) => {
      const he = new Map(ie);
      return he.set(A, T), he;
    }), X(1);
  }, nt = (A) => {
    se(A), X(1);
  }, Ut = (A) => {
    if (y === "None") return;
    const T = r(A), ie = f ?? [];
    let he;
    y === "Single" ? he = ie.length === 1 && ie[0] === T ? [] : [T] : he = ie.includes(T) ? ie.filter((Ee) => Ee !== T) : [...ie, T], _?.(he);
  }, St = (A) => {
    V?.(A);
  }, Me = (A, T, ie) => {
    M.current = { key: A, startX: T, startWidth: ie };
  }, Xe = (A) => {
    const T = M.current;
    if (!T) return;
    const ie = A - T.startX, he = Math.max(48, T.startWidth + ie);
    Be((Ee) => ({ ...Ee, [T.key]: `${he}px` }));
  }, vt = () => {
    M.current = null;
  }, Rt = (A) => {
    F.current = A;
  }, Zt = (A) => {
    const T = F.current;
    F.current = null, !(!T || T === A) && ce((ie) => {
      const he = [...ie], Ee = he.indexOf(T), Ie = he.indexOf(A);
      return Ee < 0 || Ie < 0 ? ie : (he.splice(Ee, 1), he.splice(Ie, 0, T), he);
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
      const ie = T ?? new Set(C ? Ne.items.map((Ee) => String(wn(Ee, ye ?? "") ?? "")) : []), he = new Set(ie);
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
      g?.(T);
    } else if (A != null) {
      const T = { ...A, ...et };
      D?.(A, T);
    }
    B();
  }, oe = l && (b === "Top" || b === "TopAndBottom"), pe = l && (b === "Bottom" || b === "TopAndBottom"), _e = h && e.some((A) => xr(A, h)), xe = (A, T, ie) => A.render ? A.render(T, { index: 0 }) : yr(wn(T, A.property), A.format), Te = (A) => {
    const T = [ge.cell];
    return A.align === "center" && T.push(ge.center), A.align === "right" && T.push(ge.right), A.frozen && T.push(ge.frozen), T.join(" ");
  };
  return /* @__PURE__ */ S("div", { className: [ge.grid, H].filter(Boolean).join(" "), children: [
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
        onPageChange: X,
        onPageSizeChange: nt
      }
    ),
    (u || z || m) && /* @__PURE__ */ S("div", { className: ge.toolbar, children: [
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
            onClick: () => We((A) => !A),
            children: k
          }
        ),
        ve && /* @__PURE__ */ n("div", { className: ge.pickerPanel, role: "menu", "aria-label": k, children: e.map((A, T) => {
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
                  const ie = $l(T, s), he = Y.find((ze) => ze.property === T.property), Ee = he ? Y.indexOf(he) + 1 : 0, Ie = T.align ?? "left";
                  return /* @__PURE__ */ S(
                    "th",
                    {
                      "aria-sort": ie && he ? wl[he.sortOrder] : "none",
                      className: [
                        ge.header,
                        Ie === "center" ? ge.center : "",
                        Ie === "right" ? ge.right : "",
                        T.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: T.frozen ? { left: re[A] } : void 0,
                      scope: "col",
                      draggable: j || u || void 0,
                      onDragStart: j || u ? (ze) => {
                        ze.dataTransfer && (ze.dataTransfer.effectAllowed = "move"), Rt(A);
                      } : void 0,
                      onDragOver: j ? (ze) => ze.preventDefault() : void 0,
                      onDrop: j ? () => Zt(A) : void 0,
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
                              Ee > 1 && c && /* @__PURE__ */ n("span", { className: ge.sortIndex, children: Ee })
                            ]
                          }
                        ) : T.title ?? T.property,
                        x && /* @__PURE__ */ n(
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
                      value: ie?.operator ?? La(T.type ?? "string"),
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
                  const Ie = Je.has(A.group.key);
                  return /* @__PURE__ */ n("tr", { className: ge.groupRow, children: /* @__PURE__ */ n("td", { colSpan: xt.length + (me ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ S(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": Ie,
                      onClick: () => Ke(A.group.key),
                      children: [
                        /* @__PURE__ */ n("span", { "aria-hidden": "true", children: Ie ? "▼" : "▶" }),
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
                const T = A.row, ie = r(T), he = (f ?? []).includes(ie), Ee = tt != null && tt === String(ie);
                return /* @__PURE__ */ S(
                  "tr",
                  {
                    className: [
                      V || y !== "None" ? ge.clickable : "",
                      he ? ge.selected : "",
                      Ee ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": y !== "None" ? he : void 0,
                    onClick: V || y !== "None" ? (Ie) => {
                      Nl(Ie.target) || (St(T), Ut(T));
                    } : void 0,
                    children: [
                      xt.map(({ key: Ie, column: ze }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: Te(ze),
                          style: ze.frozen ? { left: re[Ie] } : void 0,
                          children: Ee && ze.property ? /* @__PURE__ */ n(
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
                        Ie
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ee ? /* @__PURE__ */ S(je, { children: [
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Z(T), children: "Save" }),
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                      ] }) : /* @__PURE__ */ S(je, { children: [
                        E !== "None" && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Lt(T), children: "Edit" }),
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
      Ne.items.length === 0 && !L && /* @__PURE__ */ n("div", { className: ge.empty, children: I }),
      L && /* @__PURE__ */ n("div", { className: ge.loading, role: "status", children: "Loading…" })
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
        onPageChange: X,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Sl = "_wrap_1pzu9_1", Dl = "_grid_1pzu9_7", Ml = "_stacked_1pzu9_13", zl = "_item_1pzu9_19", Cl = "_empty_1pzu9_25", $n = {
  wrap: Sl,
  grid: Dl,
  stacked: Ml,
  item: zl,
  empty: Cl
};
function tb({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
  wrapItems: s = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: h,
  loadingTemplate: o,
  isLoading: a = !1,
  showPageSizeSelector: l = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [$, b] = G(1), [N, w] = G(t), y = e.length, f = Math.max(1, Math.ceil(y / N)), _ = Math.min(Math.max(1, $), f), m = $e(() => {
    const x = (_ - 1) * N;
    return e.slice(x, x + N);
  }, [e, _, N]), k = s ? $n.grid : $n.stacked;
  return /* @__PURE__ */ S("div", { className: [$n.wrap, p].filter(Boolean).join(" "), "aria-label": d, children: [
    a && o != null ? o : y === 0 ? h ?? /* @__PURE__ */ n("div", { className: $n.empty, children: c }) : /* @__PURE__ */ n("div", { className: k, children: m.map((x, j) => /* @__PURE__ */ n("div", { className: $n.item, children: i ? i(x, j) : String(x) }, j)) }),
    /* @__PURE__ */ n(
      rr,
      {
        pageNumber: _,
        pageSize: N,
        count: y,
        pageSizeOptions: r,
        showPageSizeSelector: l,
        onPageChange: b,
        onPageSizeChange: (x) => {
          w(x), b(1);
        }
      }
    )
  ] });
}
const Ol = "_label_idsiv_1", jl = {
  label: Ol
}, nb = qe(
  function({ className: t, children: r, ...s }, i) {
    return /* @__PURE__ */ n("label", { ref: i, className: [jl.label, t].filter(Boolean).join(" "), ...s, children: r });
  }
), El = "_input_gelpf_1", Il = "_invalid_gelpf_31", Al = "_xs_gelpf_37", Tl = "_sm_gelpf_43", Rl = "_md_gelpf_49", Ll = "_lg_gelpf_55", Pl = "_xl_gelpf_61", Zn = {
  input: El,
  invalid: Il,
  xs: Al,
  sm: Tl,
  md: Rl,
  lg: Ll,
  xl: Pl
}, rb = qe(function({ size: t = "md", invalid: r = !1, className: s, ...i }, c) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: c,
      className: [Zn.input, Zn[t], r ? Zn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...i
    }
  );
}), Bl = "_checkbox_s7nxo_1", Fl = {
  checkbox: Bl
}, ob = qe(function({ className: t, ...r }, s) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [Fl.checkbox, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), ql = {
  switch: "_switch_1nmgf_1"
}, Kl = qe(function({ className: t, ...r }, s) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [ql.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Hl = "_trigger_1prbw_1", Ul = "_tooltip_1prbw_7", Wl = "_top_1prbw_34", Vl = "_right_1prbw_40", Xl = "_bottom_1prbw_46", Gl = "_left_1prbw_52", Yl = "_arrow_1prbw_58", Pn = {
  trigger: Hl,
  tooltip: Ul,
  "se-tooltip-in": "_se-tooltip-in_1prbw_1",
  top: Wl,
  right: Vl,
  bottom: Xl,
  left: Gl,
  arrow: Yl
};
function sb({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: s = 300,
  className: i
}) {
  const c = Ye(), h = le(null), [o, a] = G(!1), l = () => {
    h.current = window.setTimeout(() => a(!0), s);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), a(!1);
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
      className: [Pn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: l,
      onMouseLeave: p,
      onFocus: l,
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
const Zl = "_dialog_kr2ur_1", Jl = "_sm_kr2ur_30", Ql = "_md_kr2ur_34", ei = "_lg_kr2ur_38", ti = "_header_kr2ur_42", ni = "_title_kr2ur_51", ri = "_description_kr2ur_58", oi = "_close_kr2ur_65", si = "_body_kr2ur_84", ai = "_footer_kr2ur_90", Vt = {
  dialog: Zl,
  "se-dialog-in": "_se-dialog-in_kr2ur_1",
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
function ab({
  open: e,
  onClose: t,
  title: r,
  description: s,
  children: i,
  footer: c,
  size: h = "md",
  width: o,
  height: a,
  className: l
}) {
  const p = le(null), d = Ye(), $ = Ye(), b = le(t);
  we(() => {
    b.current = t;
  });
  const N = le(!1), w = le(!1), y = q(() => {
    N.current || (N.current = !0, b.current());
  }, []), f = q(() => {
    if (w.current) {
      w.current = !1;
      return;
    }
    b.current();
  }, []);
  return we(() => {
    const _ = p.current;
    if (_)
      if (e && !_.open) {
        const m = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        _.showModal(), (_.querySelector('button[aria-label="Close dialog"]') ?? _.querySelector("button"))?.focus();
        const x = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const j = (u) => {
          u.preventDefault(), y();
        };
        return _.addEventListener("cancel", j), () => {
          _.removeEventListener("cancel", j), document.body.style.overflow = x, m?.focus({ preventScroll: !0 });
        };
      } else !e && _.open && (w.current = N.current, N.current = !1, _.close());
  }, [e, y]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ S(
    "dialog",
    {
      ref: p,
      className: [Vt.dialog, Vt[h], l].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: f,
      onClick: (_) => {
        _.target === p.current && y();
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
              onClick: y,
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: Vt.body, children: i }),
        c && /* @__PURE__ */ n("footer", { className: Vt.footer, children: c })
      ]
    }
  );
}
const li = "_viewport_1h8v8_1", ii = "_topLeft_1h8v8_13", ci = "_topRight_1h8v8_20", di = "_bottomLeft_1h8v8_25", ui = "_toast_1h8v8_30", fi = "_leaving_1h8v8_61", _i = "_info_1h8v8_77", pi = "_success_1h8v8_82", hi = "_warning_1h8v8_87", mi = "_danger_1h8v8_92", gi = "_content_1h8v8_97", yi = "_title_1h8v8_102", bi = "_description_1h8v8_125", xi = "_dismiss_1h8v8_132", vi = "_actions_1h8v8_151", ki = "_action_1h8v8_151", wi = "_cancel_1h8v8_159", $i = "_progress_1h8v8_195", ht = {
  viewport: li,
  topLeft: ii,
  topRight: ci,
  bottomLeft: di,
  toast: ui,
  "se-toast-in": "_se-toast-in_1h8v8_1",
  leaving: fi,
  "se-toast-out": "_se-toast-out_1h8v8_1",
  info: _i,
  success: pi,
  warning: hi,
  danger: mi,
  content: gi,
  title: yi,
  description: bi,
  dismiss: xi,
  actions: vi,
  action: ki,
  cancel: wi,
  progress: $i,
  "se-toast-progress": "_se-toast-progress_1h8v8_1"
}, Vr = qr(null);
function lb() {
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
function ib({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: s = !0,
  className: i
}) {
  const [c, h] = G([]), [o, a] = G(!1), l = le([]), p = le(/* @__PURE__ */ new Map()), d = le(!1), $ = le(0), b = (D) => {
    d.current = D, a(D);
  }, N = q((D) => {
    const g = p.current.get(D);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(0, g.remaining - (Date.now() - g.startedAt)));
  }, []), w = q((D) => {
    const g = p.current.get(D);
    g && (window.clearTimeout(g.timeoutId), p.current.delete(D));
  }, []), y = q(
    (D) => {
      w(D), h((g) => {
        const O = g.filter((L) => L.id !== D);
        return l.current = O, O;
      });
    },
    [w]
  ), f = q(
    (D) => {
      const g = l.current.find((O) => O.id === D);
      !g || g.leaving || (g.onAutoClose?.(), y(D));
    },
    [y]
  ), _ = q(
    (D) => {
      const g = p.current.get(D);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => f(D), g.remaining));
    },
    [f]
  ), m = q(() => {
    d.current || p.current.forEach((D, g) => N(g)), b(!0);
  }, [N]), k = q(() => {
    p.current.forEach((D, g) => _(g)), b(!1);
  }, [_]);
  we(() => {
    if (!s) return;
    const D = () => {
      document.hidden ? m() : k();
    };
    return document.addEventListener("visibilitychange", D), () => document.removeEventListener("visibilitychange", D);
  }, [s, m, k]);
  const x = q(
    (D) => {
      const g = l.current.find((O) => O.id === D);
      !g || g.leaving || (g.onDismiss?.(), h((O) => {
        const L = O.map((I) => I.id === D ? { ...I, leaving: !0 } : I);
        return l.current = L, L;
      }), window.setTimeout(() => y(D), Ni));
    },
    [y]
  ), j = q(
    (D) => {
      if (D.durationMs <= 0) return;
      const g = {
        remaining: D.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(D.id, g), d.current || _(D.id);
    },
    [_]
  ), u = q(
    (D) => {
      const g = l.current.find((L) => L.id === D.id), O = {
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
        const I = g ? L.map((R) => R.id === O.id ? { ...O, leaving: !1 } : R) : [...L, O];
        return l.current = I, I;
      }), g && w(O.id), j(O);
    },
    [t, r, j, w]
  ), v = $e(() => ({ toast: u }), [u]), C = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map((D) => D.position)])),
    [r, c]
  ), E = s ? m : void 0, z = s ? k : void 0;
  return /* @__PURE__ */ S(Vr.Provider, { value: v, children: [
    e,
    C.map((D) => /* @__PURE__ */ n(
      "div",
      {
        className: [
          ht.viewport,
          ht[Si[D]],
          i
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: E,
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
const Di = "_alert_g89nw_1", Mi = "_xs_g89nw_22", zi = "_sm_g89nw_32", Ci = "_lg_g89nw_42", Oi = "_xl_g89nw_52", ji = "_primary_g89nw_63", Ei = "_secondary_g89nw_68", Ii = "_light_g89nw_73", Ai = "_base_g89nw_78", Ti = "_dark_g89nw_83", Ri = "_info_g89nw_88", Li = "_success_g89nw_93", Pi = "_warning_g89nw_98", Bi = "_danger_g89nw_103", Fi = "_flat_g89nw_110", qi = "_outlined_g89nw_117", Ki = "_filled_g89nw_125", Hi = "_text_g89nw_132", Ui = "_icon_g89nw_175", Wi = "_content_g89nw_181", Vi = "_title_g89nw_186", Xi = "_body_g89nw_192", Gi = "_dismiss_g89nw_198", jt = {
  alert: Di,
  xs: Mi,
  sm: zi,
  lg: Ci,
  xl: Oi,
  primary: ji,
  secondary: Ei,
  light: Ii,
  base: Ai,
  dark: Ti,
  info: Ri,
  success: Li,
  warning: Pi,
  danger: Bi,
  flat: Fi,
  outlined: qi,
  filled: Ki,
  text: Hi,
  icon: Ui,
  content: Wi,
  title: Vi,
  body: Xi,
  dismiss: Gi,
  "shade-lighter": "_shade-lighter_g89nw_294",
  "shade-light": "_shade-light_g89nw_294",
  "shade-dark": "_shade-dark_g89nw_296",
  "shade-darker": "_shade-darker_g89nw_297"
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
function cb({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: r,
  size: s = "md",
  title: i,
  icon: c,
  showIcon: h = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: l,
  visible: p,
  onVisibleChange: d,
  className: $,
  ...b
}) {
  const [N, w] = G(!1);
  if (p === !1 || p === void 0 && N)
    return null;
  const y = () => {
    p === void 0 && w(!0), l?.(), d?.(!1);
  }, f = e, _ = cr(t, "filled"), m = r && r !== "default" ? `shade-${r}` : null, k = c ?? (h ? /* @__PURE__ */ n(Ce, { name: Yi[e] }) : null);
  return /* @__PURE__ */ S(
    "div",
    {
      role: "alert",
      ...b,
      className: [jt.alert, jt[f], jt[_], m ? jt[m] : null, jt[s], $].filter(Boolean).join(" "),
      children: [
        k != null && /* @__PURE__ */ n("span", { className: jt.icon, "aria-hidden": "true", children: k }),
        /* @__PURE__ */ S("div", { className: jt.content, children: [
          i && /* @__PURE__ */ n("div", { className: jt.title, children: i }),
          o && /* @__PURE__ */ n("div", { className: jt.body, children: o })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: jt.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Zi = "_skeleton_lvzyc_1", Ji = "_text_lvzyc_35", Qi = "_circle_lvzyc_40", ec = "_rect_lvzyc_44", vr = {
  skeleton: Zi,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_lvzyc_1",
  text: Ji,
  circle: Qi,
  rect: ec
};
function db({
  variant: e = "text",
  width: t,
  height: r,
  className: s
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (i.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [vr.skeleton, vr[e], s].filter(Boolean).join(" "),
      style: i
    }
  );
}
const tc = "_row_plfwb_1", nc = "_gapXs_plfwb_7", rc = "_gapSm_plfwb_11", oc = "_gapMd_plfwb_15", sc = "_gapLg_plfwb_19", ac = "_gapXl_plfwb_23", lc = "_start_plfwb_27", ic = "_center_plfwb_31", cc = "_end_plfwb_35", dc = "_stretch_plfwb_39", uc = "_baseline_plfwb_43", fc = "_noWrap_plfwb_99", _c = "_wrapReverse_plfwb_103", pc = "_gapRowXs_plfwb_107", hc = "_gapRowSm_plfwb_111", mc = "_gapRowMd_plfwb_115", gc = "_gapRowLg_plfwb_119", yc = "_gapRowXl_plfwb_123", an = {
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
  gapRowXl: yc
}, bc = {
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
  return typeof e != "string" ? null : bc[e] ?? null;
}
function kc(e) {
  return typeof e != "string" ? null : xc[e] ?? null;
}
function kr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function ub({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: s = "start",
  wrap: i = !0,
  className: c,
  style: h,
  ...o
}) {
  const a = vc(e), l = kc(t), p = {
    ...e != null && !a ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...t != null && !l ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...h
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        an.row,
        an[r],
        an[`justify-${s}`],
        kr(i) != null ? an[kr(i)] : null,
        a ? an[a] : null,
        l ? an[l] : null,
        c
      ].filter(Boolean).join(" "),
      style: p,
      ...o
    }
  );
}
const wc = "_column_2ch3a_1", $c = "_Size1_2ch3a_6", Nc = "_Size2_2ch3a_7", Sc = "_Size3_2ch3a_8", Dc = "_Size4_2ch3a_9", Mc = "_Size5_2ch3a_10", zc = "_Size6_2ch3a_11", Cc = "_Size7_2ch3a_12", Oc = "_Size8_2ch3a_13", jc = "_Size9_2ch3a_14", Ec = "_Size10_2ch3a_15", Ic = "_Size11_2ch3a_16", Ac = "_Size12_2ch3a_17", Tc = "_Offset1_2ch3a_18", Rc = "_Offset2_2ch3a_19", Lc = "_Offset3_2ch3a_20", Pc = "_Offset4_2ch3a_21", Bc = "_Offset5_2ch3a_22", Fc = "_Offset6_2ch3a_23", qc = "_Offset7_2ch3a_24", Kc = "_Offset8_2ch3a_25", Hc = "_Offset9_2ch3a_26", Uc = "_Offset10_2ch3a_27", Wc = "_Offset11_2ch3a_28", Vc = "_smSize1_2ch3a_31", Xc = "_smSize2_2ch3a_32", Gc = "_smSize3_2ch3a_33", Yc = "_smSize4_2ch3a_34", Zc = "_smSize5_2ch3a_35", Jc = "_smSize6_2ch3a_36", Qc = "_smSize7_2ch3a_37", ed = "_smSize8_2ch3a_38", td = "_smSize9_2ch3a_39", nd = "_smSize10_2ch3a_40", rd = "_smSize11_2ch3a_41", od = "_smSize12_2ch3a_42", sd = "_smOffset1_2ch3a_43", ad = "_smOffset2_2ch3a_44", ld = "_smOffset3_2ch3a_45", id = "_smOffset4_2ch3a_46", cd = "_smOffset5_2ch3a_47", dd = "_smOffset6_2ch3a_48", ud = "_smOffset7_2ch3a_49", fd = "_smOffset8_2ch3a_50", _d = "_smOffset9_2ch3a_51", pd = "_smOffset10_2ch3a_52", hd = "_smOffset11_2ch3a_53", md = "_mdSize1_2ch3a_57", gd = "_mdSize2_2ch3a_58", yd = "_mdSize3_2ch3a_59", bd = "_mdSize4_2ch3a_60", xd = "_mdSize5_2ch3a_61", vd = "_mdSize6_2ch3a_62", kd = "_mdSize7_2ch3a_63", wd = "_mdSize8_2ch3a_64", $d = "_mdSize9_2ch3a_65", Nd = "_mdSize10_2ch3a_66", Sd = "_mdSize11_2ch3a_67", Dd = "_mdSize12_2ch3a_68", Md = "_mdOffset1_2ch3a_69", zd = "_mdOffset2_2ch3a_70", Cd = "_mdOffset3_2ch3a_71", Od = "_mdOffset4_2ch3a_72", jd = "_mdOffset5_2ch3a_73", Ed = "_mdOffset6_2ch3a_74", Id = "_mdOffset7_2ch3a_75", Ad = "_mdOffset8_2ch3a_76", Td = "_mdOffset9_2ch3a_77", Rd = "_mdOffset10_2ch3a_78", Ld = "_mdOffset11_2ch3a_79", Pd = "_lgSize1_2ch3a_83", Bd = "_lgSize2_2ch3a_84", Fd = "_lgSize3_2ch3a_85", qd = "_lgSize4_2ch3a_86", Kd = "_lgSize5_2ch3a_87", Hd = "_lgSize6_2ch3a_88", Ud = "_lgSize7_2ch3a_89", Wd = "_lgSize8_2ch3a_90", Vd = "_lgSize9_2ch3a_91", Xd = "_lgSize10_2ch3a_92", Gd = "_lgSize11_2ch3a_93", Yd = "_lgSize12_2ch3a_94", Zd = "_lgOffset1_2ch3a_95", Jd = "_lgOffset2_2ch3a_96", Qd = "_lgOffset3_2ch3a_97", eu = "_lgOffset4_2ch3a_98", tu = "_lgOffset5_2ch3a_99", nu = "_lgOffset6_2ch3a_100", ru = "_lgOffset7_2ch3a_101", ou = "_lgOffset8_2ch3a_102", su = "_lgOffset9_2ch3a_103", au = "_lgOffset10_2ch3a_104", lu = "_lgOffset11_2ch3a_105", iu = "_xlSize1_2ch3a_109", cu = "_xlSize2_2ch3a_110", du = "_xlSize3_2ch3a_111", uu = "_xlSize4_2ch3a_112", fu = "_xlSize5_2ch3a_113", _u = "_xlSize6_2ch3a_114", pu = "_xlSize7_2ch3a_115", hu = "_xlSize8_2ch3a_116", mu = "_xlSize9_2ch3a_117", gu = "_xlSize10_2ch3a_118", yu = "_xlSize11_2ch3a_119", bu = "_xlSize12_2ch3a_120", xu = "_xlOffset1_2ch3a_121", vu = "_xlOffset2_2ch3a_122", ku = "_xlOffset3_2ch3a_123", wu = "_xlOffset4_2ch3a_124", $u = "_xlOffset5_2ch3a_125", Nu = "_xlOffset6_2ch3a_126", Su = "_xlOffset7_2ch3a_127", Du = "_xlOffset8_2ch3a_128", Mu = "_xlOffset9_2ch3a_129", zu = "_xlOffset10_2ch3a_130", Cu = "_xlOffset11_2ch3a_131", Ou = "_xxlSize1_2ch3a_136", ju = "_xxlSize2_2ch3a_137", Eu = "_xxlSize3_2ch3a_138", Iu = "_xxlSize4_2ch3a_139", Au = "_xxlSize5_2ch3a_140", Tu = "_xxlSize6_2ch3a_141", Ru = "_xxlSize7_2ch3a_142", Lu = "_xxlSize8_2ch3a_143", Pu = "_xxlSize9_2ch3a_144", Bu = "_xxlSize10_2ch3a_145", Fu = "_xxlSize11_2ch3a_146", qu = "_xxlSize12_2ch3a_147", Ku = "_xxlOffset1_2ch3a_148", Hu = "_xxlOffset2_2ch3a_149", Uu = "_xxlOffset3_2ch3a_150", Wu = "_xxlOffset4_2ch3a_151", Vu = "_xxlOffset5_2ch3a_152", Xu = "_xxlOffset6_2ch3a_153", Gu = "_xxlOffset7_2ch3a_154", Yu = "_xxlOffset8_2ch3a_155", Zu = "_xxlOffset9_2ch3a_156", Ju = "_xxlOffset10_2ch3a_157", Qu = "_xxlOffset11_2ch3a_158", ef = "_xxlOrderFirst_2ch3a_159", tf = "_xxlOrderLast_2ch3a_160", nf = "_orderFirst_2ch3a_163", rf = "_orderLast_2ch3a_164", of = "_smOrderFirst_2ch3a_167", sf = "_smOrderLast_2ch3a_168", af = "_mdOrderFirst_2ch3a_172", lf = "_mdOrderLast_2ch3a_173", cf = "_lgOrderFirst_2ch3a_177", df = "_lgOrderLast_2ch3a_178", uf = "_xlOrderFirst_2ch3a_182", ff = "_xlOrderLast_2ch3a_183", Nn = {
  column: wc,
  Size1: $c,
  Size2: Nc,
  Size3: Sc,
  Size4: Dc,
  Size5: Mc,
  Size6: zc,
  Size7: Cc,
  Size8: Oc,
  Size9: jc,
  Size10: Ec,
  Size11: Ic,
  Size12: Ac,
  Offset1: Tc,
  Offset2: Rc,
  Offset3: Lc,
  Offset4: Pc,
  Offset5: Bc,
  Offset6: Fc,
  Offset7: qc,
  Offset8: Kc,
  Offset9: Hc,
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
  mdSize3: yd,
  mdSize4: bd,
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
  mdOffset5: jd,
  mdOffset6: Ed,
  mdOffset7: Id,
  mdOffset8: Ad,
  mdOffset9: Td,
  mdOffset10: Rd,
  mdOffset11: Ld,
  lgSize1: Pd,
  lgSize2: Bd,
  lgSize3: Fd,
  lgSize4: qd,
  lgSize5: Kd,
  lgSize6: Hd,
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
  xlSize11: yu,
  xlSize12: bu,
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
  xxlSize2: ju,
  xxlSize3: Eu,
  xxlSize4: Iu,
  xxlSize5: Au,
  xxlSize6: Tu,
  xxlSize7: Ru,
  xxlSize8: Lu,
  xxlSize9: Pu,
  xxlSize10: Bu,
  xxlSize11: Fu,
  xxlSize12: qu,
  xxlOffset1: Ku,
  xxlOffset2: Hu,
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
function fb({ className: e, style: t, ...r }) {
  const s = [Nn.column], i = { ...t };
  for (const [v, C, E, z] of _f) {
    const D = r[C], g = r[E], O = r[z];
    if (D != null && s.push(Nn[`${v}Size${D}`]), g != null && g > 0 && s.push(Nn[`${v}Offset${g}`]), O === "first" || O === "last") {
      const L = `${v}${pf[O]}`;
      Nn[L] && s.push(Nn[L]);
    } else O != null && Object.assign(i, hf(O));
  }
  const {
    size: c,
    offset: h,
    sizeSm: o,
    offsetSm: a,
    sizeMd: l,
    offsetMd: p,
    sizeLg: d,
    offsetLg: $,
    sizeXl: b,
    offsetXl: N,
    sizeXxl: w,
    offsetXxl: y,
    order: f,
    orderSm: _,
    orderMd: m,
    orderLg: k,
    orderXl: x,
    orderXxl: j,
    ...u
  } = r;
  return /* @__PURE__ */ n("div", { className: [...s, e].filter(Boolean).join(" "), style: i, ...u });
}
const mf = "_stack_1yc1g_1", gf = "_gapXs_1yc1g_29", yf = "_gapSm_1yc1g_33", bf = "_gapMd_1yc1g_37", xf = "_gapLg_1yc1g_41", vf = "_gapXl_1yc1g_45", ln = {
  stack: mf,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: gf,
  gapSm: yf,
  gapMd: bf,
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
function _b({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: s = "sm",
  align: i,
  justify: c,
  className: h,
  style: o,
  ...a
}) {
  const l = wf(s), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...s != null && !l ? { gap: typeof s == "number" ? `${s}px` : s } : {},
    ...o
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln.stack,
        ln[`dir-${p}`],
        wr(r) !== "wrap" ? ln[`wrap-${wr(r)}`] : null,
        i != null ? ln[`align-${i}`] : null,
        c != null ? ln[`justify-${c}`] : null,
        l ? ln[l] : null,
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
}, Sf = "_footer_jia9j_1", Df = {
  footer: Sf
};
function Mf({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("footer", { className: [Df.footer, e].filter(Boolean).join(" "), ...r, children: t });
}
const zf = "_header_1n6yq_1", Cf = {
  header: zf
};
function Of({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("header", { className: [Cf.header, e].filter(Boolean).join(" "), ...r, children: t });
}
const jf = "_sidebar_1i0sn_1", Ef = "_left_1i0sn_9", If = "_right_1i0sn_13", Af = "_collapsed_1i0sn_17", Tf = "_responsive_1i0sn_25", Rf = "_overlay_1i0sn_33", Lf = "_mask_1i0sn_53", Qt = {
  sidebar: jf,
  left: Ef,
  right: If,
  collapsed: Af,
  responsive: Tf,
  overlay: Rf,
  mask: Lf
};
function Pf({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
  overlay: s = !1,
  onClose: i,
  className: c,
  children: h,
  ...o
}) {
  return we(() => {
    if (!s || !t || i == null) return;
    const a = (l) => {
      l.key === "Escape" && i();
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [s, t, i]), /* @__PURE__ */ S(je, { children: [
    s && t ? /* @__PURE__ */ n("div", { className: `${Qt.mask} se-layout-mask`, "aria-hidden": "true", onClick: i }) : null,
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
function pb({ className: e, children: t, ...r }) {
  const s = [], i = [], c = [], h = [], o = [];
  return Qr.forEach(t, (a) => {
    if (!Tn(a)) {
      c.push(a);
      return;
    }
    a.type === Of ? s.push(a) : a.type === Mf ? i.push(a) : a.type === Pf ? (a.props.position === "right" ? o : h).push(a) : c.push(a);
  }), /* @__PURE__ */ S("div", { className: [$r.layout, e].filter(Boolean).join(" "), ...r, children: [
    s,
    /* @__PURE__ */ S("div", { className: $r.row, children: [
      h,
      c,
      o
    ] }),
    i
  ] });
}
const Bf = "_body_10zdy_1", Ff = {
  body: Bf
};
function hb({ as: e = "main", className: t, children: r, ...s }) {
  return /* @__PURE__ */ n(e, { className: [Ff.body, t].filter(Boolean).join(" "), ...s, children: r });
}
const qf = "_track_1nt7v_1", Kf = "_bar_1nt7v_31", Hf = "_primary_1nt7v_39", Uf = "_success_1nt7v_43", Wf = "_warning_1nt7v_47", Vf = "_danger_1nt7v_51", Xf = "_indeterminate_1nt7v_101", Gf = "_circular_1nt7v_115", Yf = "_fill_1nt7v_155", mt = {
  track: qf,
  "linear-xs": "_linear-xs_1nt7v_11",
  "linear-sm": "_linear-sm_1nt7v_15",
  "linear-md": "_linear-md_1nt7v_19",
  "linear-lg": "_linear-lg_1nt7v_23",
  "linear-xl": "_linear-xl_1nt7v_27",
  bar: Kf,
  primary: Hf,
  success: Uf,
  warning: Wf,
  danger: Vf,
  "shade-lighter": "_shade-lighter_1nt7v_85",
  "shade-light": "_shade-light_1nt7v_85",
  "shade-dark": "_shade-dark_1nt7v_93",
  "shade-darker": "_shade-darker_1nt7v_97",
  indeterminate: Xf,
  "se-progress-slide": "_se-progress-slide_1nt7v_1",
  circular: Gf,
  "circular-xs": "_circular-xs_1nt7v_121",
  "circular-sm": "_circular-sm_1nt7v_126",
  "circular-md": "_circular-md_1nt7v_131",
  "circular-lg": "_circular-lg_1nt7v_136",
  "circular-xl": "_circular-xl_1nt7v_141",
  fill: Yf,
  "se-progress-spin": "_se-progress-spin_1nt7v_1"
};
function mb({
  value: e = 0,
  max: t = 100,
  severity: r = "primary",
  shade: s,
  indeterminate: i = !1,
  variant: c = "linear",
  size: h = "md",
  className: o,
  ...a
}) {
  const l = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? l / t * 100 : 0;
  if (c === "circular") {
    const $ = typeof h == "string", b = 2, N = 10.5, w = 2 * Math.PI * N, y = w * (i ? 0.75 : 1), f = i ? 0 : w * (1 - p / 100);
    return /* @__PURE__ */ S(
      "svg",
      {
        width: $ ? void 0 : h,
        height: $ ? void 0 : h,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(l),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          mt.circular,
          mt[r],
          s && s !== "default" ? mt[`shade-${s}`] : null,
          $ ? mt[`circular-${h}`] : null,
          i ? mt.indeterminate : null,
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
              strokeDasharray: `${y} ${w}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const d = s && s !== "default" ? `shade-${s}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(l),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        mt.track,
        mt[r],
        d ? mt[d] : null,
        typeof h == "string" ? mt[`linear-${h}`] : null,
        i ? mt.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: mt.bar,
          style: i ? void 0 : { width: `${p}%` }
        }
      )
    }
  );
}
function gb(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Zf(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Xr(e) {
  const [t, r] = G(() => Zf(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const s = window.matchMedia(e);
    r(s.matches);
    const i = (c) => r(c.matches);
    return typeof s.addEventListener == "function" ? (s.addEventListener("change", i), () => s.removeEventListener("change", i)) : (s.addListener(i), () => s.removeListener(i));
  }, [e]), t;
}
const Jf = "_wrapper_fv8kg_1", Qf = {
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
function yb({
  value: e,
  defaultValue: t,
  defaultTheme: r,
  storageKey: s,
  onChange: i,
  label: c = "Dark mode",
  className: h
}) {
  const o = Xr("(prefers-color-scheme: dark)"), [a, l] = G(void 0), p = e ?? a ?? e_(s) ?? t ?? r ?? "system", d = p === "system" ? o ? "dark" : "light" : p;
  we(() => {
    if (p === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = p;
  }, [p]);
  const $ = (b) => {
    const N = b.target.checked ? "dark" : "light";
    e === void 0 && l(N), t_(s, N), i?.(N);
  };
  return /* @__PURE__ */ S("label", { className: [Qf.wrapper, h].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ n(Kl, { checked: d === "dark", onChange: $ })
  ] });
}
const n_ = "_avatar_1ow1c_1", r_ = "_xs_1ow1c_12", o_ = "_sm_1ow1c_18", s_ = "_md_1ow1c_24", a_ = "_lg_1ow1c_30", l_ = "_xl_1ow1c_36", i_ = "_initials_1ow1c_42", c_ = "_image_1ow1c_57", d_ = "_status_1ow1c_64", u_ = "_online_1ow1c_84", f_ = "_offline_1ow1c_88", __ = "_away_1ow1c_92", cn = {
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
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
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
function bb({
  name: e,
  src: t,
  alt: r,
  size: s = "md",
  status: i,
  className: c
}) {
  const h = $e(() => e ? p_(e) : "?", [e]), o = $e(() => e ? h_(e) : Vn[0], [e]), a = t != null && r === "", l = r ?? e ?? "avatar", p = i ? `${l}, ${i}` : l, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: cn.image,
      src: t,
      alt: a ? "" : i ? p : l
    }
  ) : /* @__PURE__ */ n("span", { "aria-hidden": "true", className: cn.initials, style: { background: o }, children: h });
  return /* @__PURE__ */ S(
    "span",
    {
      className: [
        cn.avatar,
        cn[s],
        i ? cn[i] : null,
        c
      ].filter(Boolean).join(" "),
      role: t ? void 0 : "img",
      "aria-label": t ? void 0 : p,
      children: [
        d,
        i && /* @__PURE__ */ n("span", { className: cn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const m_ = "_root_13xku_1", g_ = "_left_13xku_6", y_ = "_right_13xku_7", b_ = "_panel_13xku_12", x_ = "_bottom_13xku_20", v_ = "_tabList_13xku_24", k_ = "_underline_13xku_53", w_ = "_pills_13xku_72", $_ = "_tab_13xku_24", N_ = "_active_13xku_113", S_ = "_disabled_13xku_139", Pt = {
  root: m_,
  left: g_,
  right: y_,
  panel: b_,
  bottom: x_,
  tabList: v_,
  underline: k_,
  pills: w_,
  tab: $_,
  active: N_,
  disabled: S_
};
function xb({
  items: e,
  value: t,
  defaultValue: r,
  onChange: s,
  variant: i = "underline",
  position: c = "top",
  className: h
}) {
  const o = Ye(), a = le(null), [l, p] = G(r ?? e[0]?.key ?? ""), d = t ?? l, $ = c === "left" || c === "right", b = (y) => {
    p(y), s?.(y);
  }, N = (y) => {
    const f = e.filter((k) => !k.disabled), _ = f.findIndex((k) => k.key === d);
    let m = -1;
    y.key === "ArrowRight" || $ && y.key === "ArrowDown" ? m = (_ + 1) % f.length : y.key === "ArrowLeft" || $ && y.key === "ArrowUp" ? m = (_ - 1 + f.length) % f.length : y.key === "Home" ? m = 0 : y.key === "End" && (m = f.length - 1), m >= 0 && (y.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[m]?.key ?? "")}"]`
    )?.focus(), b(f[m]?.key ?? ""));
  }, w = e.find((y) => y.key === d);
  return /* @__PURE__ */ S("div", { className: [Pt.root, Pt[c], h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n(
      "div",
      {
        ref: a,
        role: "tablist",
        className: [Pt.tabList, Pt[i], Pt[c]].filter(Boolean).join(" "),
        onKeyDown: N,
        children: e.map((y) => {
          const f = y.key === d;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${o}-tab-${y.key}`,
              "data-tab-key": y.key,
              "aria-selected": f,
              "aria-controls": `${o}-panel-${y.key}`,
              tabIndex: f ? 0 : -1,
              disabled: y.disabled,
              className: [
                Pt.tab,
                f ? Pt.active : null,
                y.disabled ? Pt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => b(y.key),
              children: y.label
            },
            y.key
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
const D_ = "_root_11jj0_1", M_ = "_item_11jj0_9", z_ = "_heading_11jj0_13", C_ = "_trigger_11jj0_17", O_ = "_disabled_11jj0_34", j_ = "_title_11jj0_48", E_ = "_chevron_11jj0_52", I_ = "_open_11jj0_59", A_ = "_content_11jj0_63", Bt = {
  root: D_,
  item: M_,
  heading: z_,
  trigger: C_,
  disabled: O_,
  title: j_,
  chevron: E_,
  open: I_,
  content: A_
};
function vb({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: s,
  onChange: i,
  className: c
}) {
  const h = Ye(), [o, a] = G(s ?? []), l = r ?? o, p = (d) => {
    const $ = l.includes(d) ? l.filter((b) => b !== d) : t ? [...l, d] : [d];
    a($), i?.($);
  };
  return /* @__PURE__ */ n("div", { className: [Bt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const $ = l.includes(d.key), b = `${h}-panel-${d.key}`, N = `${h}-trigger-${d.key}`;
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
const T_ = "_textarea_1hnju_1", R_ = "_invalid_1hnju_25", L_ = "_xs_1hnju_31", P_ = "_sm_1hnju_36", B_ = "_md_1hnju_41", F_ = "_lg_1hnju_46", q_ = "_xl_1hnju_51", Bn = {
  textarea: T_,
  invalid: R_,
  xs: L_,
  sm: P_,
  md: B_,
  lg: F_,
  xl: q_,
  "resize-none": "_resize-none_1hnju_56",
  "resize-vertical": "_resize-vertical_1hnju_60",
  "resize-horizontal": "_resize-horizontal_1hnju_64",
  "resize-both": "_resize-both_1hnju_68"
}, kb = qe(function({ size: t = "md", resize: r = "none", invalid: s = !1, className: i, ...c }, h) {
  return /* @__PURE__ */ n(
    "textarea",
    {
      ref: h,
      className: [
        Bn.textarea,
        Bn[t],
        Bn[`resize-${r}`],
        s ? Bn.invalid : null,
        i
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c
    }
  );
}), K_ = "_typography_1p5im_1", H_ = "_h1_1p5im_36", U_ = "_h2_1p5im_42", W_ = "_h3_1p5im_48", V_ = "_h4_1p5im_54", X_ = "_h5_1p5im_60", G_ = "_h6_1p5im_66", Y_ = "_caption_1p5im_94", Z_ = "_overline_1p5im_100", Jn = {
  typography: K_,
  "display-1": "_display-1_1p5im_5",
  "display-2": "_display-2_1p5im_10",
  "display-3": "_display-3_1p5im_15",
  "display-4": "_display-4_1p5im_20",
  "display-5": "_display-5_1p5im_25",
  "display-6": "_display-6_1p5im_30",
  h1: H_,
  h2: U_,
  h3: W_,
  h4: V_,
  h5: X_,
  h6: G_,
  "subtitle-1": "_subtitle-1_1p5im_72",
  "subtitle-2": "_subtitle-2_1p5im_78",
  "body-1": "_body-1_1p5im_84",
  "body-2": "_body-2_1p5im_89",
  caption: Y_,
  overline: Z_,
  "align-left": "_align-left_1p5im_109",
  "align-center": "_align-center_1p5im_113",
  "align-right": "_align-right_1p5im_117",
  "align-justify": "_align-justify_1p5im_121"
}, J_ = {
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
}, wb = qe(function({ variant: t = "body-1", as: r, align: s, className: i, children: c, ...h }, o) {
  const a = r ?? J_[t];
  return /* @__PURE__ */ n(
    a,
    {
      ref: o,
      className: [Jn.typography, Jn[t], s ? Jn[`align-${s}`] : null, i].filter(Boolean).join(" "),
      ...h,
      children: c
    }
  );
}), Q_ = "_root_1l16s_1", ep = "_trigger_1l16s_9", tp = "_invalid_1l16s_40", np = "_placeholder_1l16s_46", rp = "_label_1l16s_53", op = "_chevron_1l16s_59", sp = "_chevronOpen_1l16s_69", ap = "_menu_1l16s_73", lp = "_option_1l16s_88", ip = "_disabled_1l16s_99", cp = "_active_1l16s_103", dp = "_selected_1l16s_104", up = "_header_1l16s_114", fp = "_xs_1l16s_121", _p = "_sm_1l16s_127", pp = "_md_1l16s_133", hp = "_lg_1l16s_139", mp = "_xl_1l16s_145", it = {
  root: Q_,
  trigger: ep,
  invalid: tp,
  placeholder: np,
  label: rp,
  chevron: op,
  chevronOpen: sp,
  menu: ap,
  option: lp,
  disabled: ip,
  active: cp,
  selected: dp,
  header: up,
  xs: fp,
  sm: _p,
  md: pp,
  lg: hp,
  xl: mp
}, gp = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function $b({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: s,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: h = !1,
  disabled: o = !1,
  className: a,
  ...l
}) {
  const p = Ye(), d = `${p}-listbox`, $ = le(null), b = le(null), [N, w] = G(r), [y, f] = G(!1), _ = t ?? N, m = e.map((g, O) => g.label === "" || g.disabled ? -1 : O).filter((g) => g >= 0), k = e.findIndex((g) => g.value === _), [x, j] = G(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), u = q(() => {
    if (o) return;
    const g = k >= 0 && m.includes(k) ? k : m[0];
    j(g ?? -1), f(!0);
  }, [o, k, m]), v = q(() => {
    f(!1), b.current?.focus();
  }, []);
  we(() => {
    if (!y) return;
    const g = (O) => {
      $.current && !$.current.contains(O.target) && f(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [y]);
  const C = (g) => {
    w(g), s?.(g), f(!1), b.current?.focus();
  }, E = (g) => {
    if (m.length === 0) return;
    const O = m.includes(x) ? m.indexOf(x) : 0, L = m[(O + g + m.length) % m.length];
    L != null && j(L);
  }, z = (g) => {
    if (!y) {
      g.key === "ArrowDown" && (g.preventDefault(), u());
      return;
    }
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), E(1);
        break;
      case "ArrowUp":
        g.preventDefault(), E(-1);
        break;
      case "Home":
        g.preventDefault(), m[0] != null && j(m[0]);
        break;
      case "End":
        g.preventDefault(), m[m.length - 1] != null && j(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), x >= 0 && e[x] && m.includes(x) && C(e[x]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), v();
        break;
      case "Tab":
        f(!1);
        break;
    }
  }, D = e.find((g) => g.value === _);
  return /* @__PURE__ */ S("div", { ref: $, className: [it.root, a].filter(Boolean).join(" "), onKeyDown: z, children: [
    /* @__PURE__ */ S(
      "button",
      {
        ref: b,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": y,
        "aria-controls": d,
        "aria-invalid": h || void 0,
        disabled: o,
        className: [
          it.trigger,
          it[c],
          y ? it.open : null,
          h ? it.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => y ? f(!1) : u(),
        ...l,
        children: [
          /* @__PURE__ */ n("span", { className: D ? it.label : it.placeholder, children: D ? D.label : i }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [it.chevron, y ? it.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: gp },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    y && /* @__PURE__ */ n(
      "div",
      {
        id: d,
        role: "listbox",
        "aria-activedescendant": x >= 0 ? `${p}-option-${x}` : void 0,
        className: it.menu,
        children: e.map(
          (g, O) => g.label === "" ? /* @__PURE__ */ n("div", { className: it.header, role: "presentation", children: g.value }, g.value) : /* @__PURE__ */ n(
            "div",
            {
              id: `${p}-option-${O}`,
              role: "option",
              "aria-selected": g.value === _,
              "aria-disabled": g.disabled || void 0,
              className: [
                it.option,
                O === x ? it.active : null,
                g.value === _ ? it.selected : null,
                g.disabled ? it.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                g.disabled || C(g.value);
              },
              onMouseEnter: () => {
                !g.disabled && g.label !== "" && j(O);
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
const yp = "_root_z9312_1", bp = "_wrap_z9312_9", xp = "_input_z9312_26", vp = "_invalid_z9312_31", kp = "_clear_z9312_57", wp = "_menu_z9312_82", $p = "_option_z9312_97", Np = "_disabled_z9312_108", Sp = "_active_z9312_112", Dp = "_empty_z9312_122", Mp = "_xs_z9312_128", zp = "_sm_z9312_135", Cp = "_md_z9312_142", Op = "_lg_z9312_149", jp = "_xl_z9312_156", zt = {
  root: yp,
  wrap: bp,
  input: xp,
  invalid: vp,
  clear: kp,
  menu: wp,
  option: $p,
  disabled: Np,
  active: Sp,
  empty: Dp,
  xs: Mp,
  sm: zp,
  md: Cp,
  lg: Op,
  xl: jp
}, Ep = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Nb({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: s,
  onSelect: i,
  placeholder: c = "",
  size: h = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: l = Ep,
  className: p,
  ...d
}) {
  const $ = Ye(), b = `${$}-listbox`, N = le(null), w = le(null), [y, f] = G(r), [_, m] = G(!1), k = t ?? y, x = $e(
    () => k.trim() === "" ? [...e] : e.filter((R) => l(R, k)),
    [e, k, l]
  ), j = x.map((R, H) => R.disabled ? -1 : H).filter((R) => R >= 0), [u, v] = G(-1), C = (R) => {
    f(R), s?.(R);
  }, E = (R) => {
    C(R.label), i?.(R.value, R), m(!1);
  }, z = (R) => {
    if (j.length === 0) return;
    const H = j.includes(u) ? j.indexOf(u) : R === 1 ? -1 : 0, V = j[(H + R + j.length) % j.length];
    V != null && v(V);
  }, D = (R) => {
    a || (C(R.target.value), m(!0), v(-1));
  }, g = () => {
    a || k !== "" && m(!0);
  }, O = (R) => {
    N.current && !N.current.contains(R.relatedTarget) && m(!1);
  }, L = (R) => {
    if (!a)
      switch (R.key) {
        case "ArrowDown":
          R.preventDefault(), _ ? z(1) : (m(!0), v(j[0] ?? -1));
          break;
        case "ArrowUp":
          R.preventDefault(), _ && z(-1);
          break;
        case "Enter":
          R.preventDefault(), _ && u >= 0 && x[u] && E(x[u]);
          break;
        case "Escape":
          R.preventDefault(), m(!1);
          break;
        case "Tab":
          _ && u >= 0 && x[u] && E(x[u]), m(!1);
          break;
      }
  }, I = () => {
    C(""), v(-1), m(!0), w.current?.focus();
  };
  return /* @__PURE__ */ S("div", { ref: N, className: [zt.root, p].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S("div", { className: [zt.wrap, zt[h], o ? zt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: w,
          type: "text",
          role: "combobox",
          "aria-expanded": _,
          "aria-controls": b,
          "aria-autocomplete": "list",
          "aria-activedescendant": _ && u >= 0 ? `${$}-option-${u}` : void 0,
          "aria-invalid": o || void 0,
          disabled: a,
          value: k,
          placeholder: c,
          className: zt.input,
          onChange: D,
          onFocus: g,
          onBlur: O,
          onKeyDown: L,
          ...d
        }
      ),
      k !== "" && !a && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: zt.clear,
          "aria-label": "Clear",
          onClick: I,
          children: /* @__PURE__ */ n(Ce, { name: "close", size: "sm" })
        }
      )
    ] }),
    _ && /* @__PURE__ */ n("div", { id: b, role: "listbox", className: zt.menu, children: x.length === 0 ? /* @__PURE__ */ n("div", { className: zt.empty, children: "No matches" }) : x.map((R, H) => /* @__PURE__ */ n(
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
          R.disabled || E(R);
        },
        onMouseDown: (V) => {
          V.preventDefault(), R.disabled || E(R);
        },
        onMouseEnter: () => {
          R.disabled || v(H);
        },
        children: R.label
      },
      R.value
    )) })
  ] });
}
const Ip = "_box_yzqzf_1", Ap = "_option_yzqzf_12", Tp = "_disabled_yzqzf_23", Rp = "_selected_yzqzf_27", Lp = "_active_yzqzf_33", Sn = {
  box: Ip,
  option: Ap,
  disabled: Tp,
  selected: Rp,
  active: Lp
};
function Sb({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: s = !1,
  onChange: i,
  className: c,
  style: h,
  ...o
}) {
  const a = Ye(), [l, p] = G(() => {
    const x = r;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), d = t == null ? l : Array.isArray(t) ? t : [t], $ = e.findIndex((x) => !x.disabled), [b, N] = G(() => $ >= 0 ? $ : 0), w = le(""), y = le(null), f = (x) => {
    p(x), i?.(s ? x : x[0] ?? "");
  }, _ = e.map((x, j) => x.disabled ? -1 : j).filter((x) => x >= 0), m = (x) => {
    const j = e[x];
    if (!(!j || j.disabled))
      if (N(x), s) {
        const u = d.includes(j.value) ? d.filter((v) => v !== j.value) : [...d, j.value];
        f(u);
      } else
        f([j.value]);
  }, k = (x) => {
    if (_.length === 0) return;
    const j = _.includes(b) ? b : _[0];
    let u = -1;
    if (x.key === "ArrowDown")
      u = _[(_.indexOf(j) + 1) % _.length];
    else if (x.key === "ArrowUp")
      u = _[(_.indexOf(j) - 1 + _.length) % _.length];
    else if (x.key === "Home")
      u = _[0];
    else if (x.key === "End")
      u = _[_.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), m(j);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const v = (w.current + x.key).toLowerCase();
      w.current = v, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        w.current = "";
      }, 500);
      const C = [..._, ..._], E = _.indexOf(j) + 1, z = C.slice(E).find(
        (D) => e[D]?.label.toLowerCase().startsWith(v)
      );
      z != null && N(z);
      return;
    }
    u >= 0 && (x.preventDefault(), N(u), s || f([e[u]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[b] ? `${a}-option-${b}` : void 0,
      style: h,
      className: [Sn.box, c].filter(Boolean).join(" "),
      onKeyDown: k,
      ...o,
      children: e.map((x, j) => {
        const u = d.includes(x.value), v = j === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${j}`,
            role: "option",
            "aria-selected": u,
            "aria-disabled": x.disabled || void 0,
            className: [
              Sn.option,
              u ? Sn.selected : null,
              v ? Sn.active : null,
              x.disabled ? Sn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(j),
            children: x.label
          },
          x.value
        );
      })
    }
  );
}
const Pp = "_group_1lmpf_1", Bp = "_legend_1lmpf_8", Fp = "_list_1lmpf_16", qp = "_item_1lmpf_25", Kp = "_disabled_1lmpf_32", Hp = "_label_1lmpf_37", Up = "_checkbox_1lmpf_48", en = {
  group: Pp,
  legend: Bp,
  list: Fp,
  item: qp,
  disabled: Kp,
  label: Hp,
  checkbox: Up
};
function Db({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: s,
  legend: i,
  name: c,
  className: h
}) {
  const [o, a] = G(() => [...r]), l = t ?? o, p = (d, $) => {
    const b = $ ? [...l, d] : l.filter((N) => N !== d);
    a(b), s?.(b);
  };
  return /* @__PURE__ */ S("fieldset", { className: [en.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: en.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: en.list, children: e.map((d) => {
      const $ = l.includes(d.value);
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
const Wp = "_group_1fnri_1", Vp = "_legend_1fnri_8", Xp = "_list_1fnri_16", Gp = "_item_1fnri_25", Yp = "_disabled_1fnri_32", Zp = "_label_1fnri_37", Jp = "_radio_1fnri_48", tn = {
  group: Wp,
  legend: Vp,
  list: Xp,
  item: Gp,
  disabled: Yp,
  label: Zp,
  radio: Jp
};
function Mb({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: s,
  legend: i,
  name: c,
  className: h
}) {
  const [o, a] = G(r), l = t ?? o, p = (d) => {
    a(d), s?.(d);
  };
  return /* @__PURE__ */ S("fieldset", { className: [tn.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: tn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: tn.list, children: e.map((d) => {
      const $ = d.value === l;
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
const Qp = "_bar_1bgl1_1", e1 = "_vertical_1bgl1_12", t1 = "_option_1bgl1_17", n1 = "_selected_1bgl1_38", r1 = "_sm_1bgl1_55", o1 = "_md_1bgl1_61", s1 = "_lg_1bgl1_67", dn = {
  bar: Qp,
  vertical: e1,
  option: t1,
  selected: n1,
  sm: r1,
  md: o1,
  lg: s1
};
function Nr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function zb(e) {
  const {
    options: t = [],
    value: r,
    defaultValue: s,
    multiple: i,
    orientation: c = "horizontal",
    onChange: h,
    size: o = "md",
    className: a,
    ...l
  } = e, p = i ?? !1, [d, $] = G(
    s ?? (p ? [] : t[0]?.value)
  ), b = r ?? d, N = i === !0 || i === void 0 && Array.isArray(b), w = (f) => {
    if (!N) {
      $(f), h?.(f);
      return;
    }
    const _ = Nr(b), m = _.includes(f) ? _.filter((k) => k !== f) : [..._, f];
    $(m), h?.(m);
  }, y = (f) => N ? Nr(b).includes(f) : b === f;
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
      ...l,
      children: t.map((f) => {
        const _ = y(f.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: f.disabled,
            className: [
              dn.option,
              _ ? dn.selected : null,
              f.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => w(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const a1 = "_toggle_1d0zk_1", l1 = "_pressed_1d0zk_29", i1 = "_sm_1d0zk_41", c1 = "_md_1d0zk_47", d1 = "_lg_1d0zk_53", u1 = "_fullWidth_1d0zk_59", Fn = {
  toggle: a1,
  pressed: l1,
  sm: i1,
  md: c1,
  lg: d1,
  fullWidth: u1
}, Cb = qe(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: s,
    size: i = "md",
    fullWidth: c = !1,
    className: h,
    type: o = "button",
    ...a
  }, l) {
    const [p, d] = G(r), $ = t ?? p, b = () => {
      const N = !$;
      d(N), s?.(N);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: l,
        type: o,
        "aria-pressed": $,
        className: [
          Fn.toggle,
          Fn[i],
          $ ? Fn.pressed : null,
          c ? Fn.fullWidth : null,
          h
        ].filter(Boolean).join(" "),
        onClick: b,
        ...a
      }
    );
  }
), f1 = "_root_ijjcl_1", _1 = "_action_ijjcl_160", p1 = "_filled_ijjcl_180", h1 = "_caret_ijjcl_184", m1 = "_flat_ijjcl_205", g1 = "_outlined_ijjcl_213", y1 = "_text_ijjcl_221", b1 = "_sm_ijjcl_311", x1 = "_md_ijjcl_323", v1 = "_lg_ijjcl_335", k1 = "_menu_ijjcl_347", w1 = "_item_ijjcl_360", $1 = "_disabled_ijjcl_381", N1 = "_active_ijjcl_385", S1 = "_danger_ijjcl_394", wt = {
  root: f1,
  "style-primary": "_style-primary_ijjcl_11",
  "style-secondary": "_style-secondary_ijjcl_21",
  "style-base": "_style-base_ijjcl_31",
  "style-light": "_style-light_ijjcl_41",
  "style-dark": "_style-dark_ijjcl_51",
  "style-info": "_style-info_ijjcl_61",
  "style-success": "_style-success_ijjcl_71",
  "style-warning": "_style-warning_ijjcl_81",
  "style-danger": "_style-danger_ijjcl_91",
  action: _1,
  filled: p1,
  caret: h1,
  flat: m1,
  outlined: g1,
  text: y1,
  "shade-lighter": "_shade-lighter_ijjcl_238",
  "shade-light": "_shade-light_ijjcl_238",
  "shade-dark": "_shade-dark_ijjcl_248",
  "shade-darker": "_shade-darker_ijjcl_252",
  sm: b1,
  md: x1,
  lg: v1,
  menu: k1,
  item: w1,
  disabled: $1,
  active: N1,
  danger: S1
};
function Ob({
  label: e,
  onClick: t,
  items: r = [],
  severity: s = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: h = "md",
  disabled: o = !1,
  className: a,
  ...l
}) {
  const d = `${Ye()}-menu`, $ = le(null), b = le(null), N = le([]), [w, y] = G(!1), [f, _] = G(-1), m = $e(
    () => r.map((z, D) => z.disabled ? -1 : D).filter((z) => z >= 0),
    [r]
  ), k = q(() => {
    o || (_(m[0] ?? -1), y(!0));
  }, [o, m]), x = q(() => {
    y(!1), b.current?.focus();
  }, []);
  we(() => {
    if (!w) return;
    const z = (D) => {
      $.current && !$.current.contains(D.target) && y(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [w]);
  const j = le(w);
  we(() => {
    const z = j.current;
    if (j.current = w, !w || z) return;
    const D = m.includes(f) ? f : m[0] ?? -1;
    D >= 0 && N.current[D]?.focus();
  }, [w, f, m]);
  const u = (z) => {
    const D = r[z];
    !D || D.disabled || (D.onClick?.(), y(!1), b.current?.focus());
  }, v = (z) => {
    if (m.length === 0) return;
    const D = m.includes(f) ? m.indexOf(f) : z === 1 ? -1 : 0, g = m[(D + z + m.length) % m.length];
    g != null && (_(g), N.current[g]?.focus());
  }, C = (z) => {
    const D = z === "first" ? m[0] : m[m.length - 1];
    D != null && (_(D), N.current[D]?.focus());
  }, E = (z) => {
    switch (z.key) {
      case "ArrowDown":
        z.preventDefault(), v(1);
        break;
      case "ArrowUp":
        z.preventDefault(), v(-1);
        break;
      case "Home":
        z.preventDefault(), C("first");
        break;
      case "End":
        z.preventDefault(), C("last");
        break;
      case "Escape":
        z.preventDefault(), x();
        break;
      case "Tab":
        y(!1);
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
        wt[cr(i, "filled")],
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
            ref: b,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": w,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => w ? y(!1) : k(),
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
            onKeyDown: E,
            ...l,
            children: r.map((z, D) => /* @__PURE__ */ n(
              "button",
              {
                ref: (g) => {
                  N.current[D] = g;
                },
                type: "button",
                role: "menuitem",
                tabIndex: D === f ? 0 : -1,
                disabled: z.disabled,
                className: [
                  wt.item,
                  D === f ? wt.active : null,
                  z.danger ? wt.danger : null,
                  z.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => u(D),
                onMouseEnter: () => {
                  z.disabled || _(D);
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
const D1 = "_textbox_1uz2c_1", M1 = "_invalid_1uz2c_31", z1 = "_xs_1uz2c_37", C1 = "_sm_1uz2c_43", O1 = "_md_1uz2c_49", j1 = "_lg_1uz2c_55", E1 = "_xl_1uz2c_61", Qn = {
  textbox: D1,
  invalid: M1,
  xs: z1,
  sm: C1,
  md: O1,
  lg: j1,
  xl: E1
}, jb = qe(function({ size: t = "md", invalid: r = !1, className: s, type: i = "text", ...c }, h) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: h,
      type: i,
      className: [Qn.textbox, Qn[t], r ? Qn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), I1 = "_wrapper_13x89_1", A1 = "_input_13x89_8", T1 = "_invalid_13x89_38", R1 = "_toggle_13x89_44", L1 = "_xs_13x89_79", P1 = "_sm_13x89_85", B1 = "_md_13x89_91", F1 = "_lg_13x89_97", q1 = "_xl_13x89_103", Dn = {
  wrapper: I1,
  input: A1,
  invalid: T1,
  toggle: R1,
  xs: L1,
  sm: P1,
  md: B1,
  lg: F1,
  xl: q1
}, Eb = qe(function({
  size: t = "md",
  invalid: r = !1,
  className: s,
  disabled: i,
  showLabel: c = "Show password",
  hideLabel: h = "Hide password",
  ...o
}, a) {
  const [l, p] = G(!1);
  return /* @__PURE__ */ S("div", { className: Dn.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: a,
        type: l ? "text" : "password",
        disabled: i,
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
        "aria-pressed": l,
        "aria-label": l ? h : c,
        disabled: i,
        onClick: () => p((d) => !d),
        children: /* @__PURE__ */ n(Ce, { name: l ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), K1 = "_mask_145m8_1", H1 = "_invalid_145m8_31", U1 = "_xs_145m8_37", W1 = "_sm_145m8_43", V1 = "_md_145m8_49", X1 = "_lg_145m8_55", G1 = "_xl_145m8_61", er = {
  mask: K1,
  invalid: H1,
  xs: U1,
  sm: W1,
  md: V1,
  lg: X1,
  xl: G1
};
function Sr(e, t) {
  let r = e.replace(/\D/g, ""), s = "";
  for (const i of t)
    if (i === "#") {
      if (r.length === 0) break;
      s += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      s += i;
    else
      break;
  return s;
}
const Ib = qe(function({
  size: t = "md",
  invalid: r = !1,
  mask: s,
  value: i,
  defaultValue: c = "",
  onChange: h,
  className: o,
  onKeyDown: a,
  ...l
}, p) {
  const [d, $] = G(c ?? ""), b = i !== void 0, N = b ? i ?? "" : d, w = (_) => {
    const m = Sr(_, s);
    return b || $(m), h?.(m), m;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      value: N,
      onChange: (_) => {
        w(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const m = _.currentTarget.selectionStart ?? N.length, k = N[m - 1];
          if (k !== void 0 && !/\d/.test(k)) {
            _.preventDefault();
            const x = N.replace(/\D/g, "");
            w(Sr(x.slice(0, -1), s));
          }
        }
        a?.(_);
      },
      className: [er.mask, er[t], r ? er.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), Y1 = "_wrapper_mr2in_1", Z1 = "_input_mr2in_8", J1 = "_invalid_mr2in_38", Q1 = "_button_mr2in_44", eh = "_up_mr2in_76", th = "_down_mr2in_81", nh = "_xs_mr2in_86", rh = "_sm_mr2in_92", oh = "_md_mr2in_98", sh = "_lg_mr2in_104", ah = "_xl_mr2in_110", Xt = {
  wrapper: Y1,
  input: Z1,
  invalid: J1,
  button: Q1,
  up: eh,
  down: th,
  xs: nh,
  sm: rh,
  md: oh,
  lg: sh,
  xl: ah
};
function or(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function lh(e) {
  let t = "", r = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? t += s : s === "." && !r ? (r = !0, t += s) : s === "-" && t.length === 0 && (t += s);
  return t;
}
function Yr(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function ih(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function ch(e, t, r, s, i) {
  const h = or(e) ?? r ?? 0;
  let o;
  return r === void 0 ? o = h + t * i : t > 0 ? o = r + Math.ceil((h - r + 1e-9) / i) * i : o = r + Math.floor((h - r - 1e-9) / i) * i, Yr(o, r, s);
}
const Ab = qe(function({
  size: t = "md",
  invalid: r = !1,
  className: s,
  disabled: i,
  value: c,
  defaultValue: h,
  onChange: o,
  min: a,
  max: l,
  step: p = 1,
  incrementLabel: d = "Increment",
  decrementLabel: $ = "Decrement",
  onBlur: b,
  onKeyDown: N,
  ...w
}, y) {
  const [f, _] = G(h != null ? String(h) : ""), m = c !== void 0, k = m ? c == null ? "" : String(c) : f, x = (z) => {
    m || _(z), o?.(or(z));
  }, j = (z) => {
    m || _(String(z)), o?.(z);
  }, u = (z) => {
    i || j(ch(k, z, a, l, p));
  }, v = (z) => {
    x(lh(z.target.value));
  }, C = (z) => {
    z.key === "ArrowUp" ? (z.preventDefault(), u(1)) : z.key === "ArrowDown" && (z.preventDefault(), u(-1)), N?.(z);
  }, E = (z) => {
    const D = or(k);
    D === null ? (m || _(""), o?.(null)) : j(Yr(ih(D, a, p), a, l)), b?.(z);
  };
  return /* @__PURE__ */ S("div", { className: Xt.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: y,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: k,
        disabled: i,
        onChange: v,
        onKeyDown: C,
        onBlur: E,
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
        disabled: i,
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
        disabled: i,
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
}, dh = [
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
function uh({ r: e, g: t, b: r }) {
  const s = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${s(e)}${s(t)}${s(r)}`;
}
function fh({ r: e, g: t, b: r }) {
  const s = e / 255, i = t / 255, c = r / 255, h = Math.max(s, i, c), o = Math.min(s, i, c), a = h - o;
  let l = 0;
  return a !== 0 && (h === s ? l = (i - c) / a % 6 : h === i ? l = (c - s) / a + 2 : l = (s - i) / a + 4, l *= 60, l < 0 && (l += 360)), {
    h: l,
    s: h === 0 ? 0 : a / h,
    v: h
  };
}
function un({ h: e, s: t, v: r }) {
  const s = r * t, i = e / 60, c = s * (1 - Math.abs(i % 2 - 1));
  let h = 0, o = 0, a = 0;
  i < 1 ? (h = s, o = c) : i < 2 ? (h = c, o = s) : i < 3 ? (o = s, a = c) : i < 4 ? (o = c, a = s) : i < 5 ? (h = c, a = s) : (h = s, a = c);
  const l = r - s;
  return {
    r: Math.round((h + l) * 255),
    g: Math.round((o + l) * 255),
    b: Math.round((a + l) * 255),
    a: 1
  };
}
function _h(e) {
  const t = sr(e);
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
function Dr({ r: e, g: t, b: r, a: s }) {
  return s >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(s * 100) / 100})`;
}
const Tb = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: s = !0,
  palette: i = dh,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: l = "",
  size: p = "md",
  tabIndex: d = 0,
  className: $,
  onChange: b,
  onValueChange: N,
  onOpen: w,
  onClose: y
}) => {
  const f = le(null), _ = le(null), m = le(null), k = le(null), x = le(null), j = Ye(), u = le(null), v = $e(
    () => _h(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, E] = G(!1), [z, D] = G(null), g = z ?? v, O = $e(() => fh(g), [g]), L = q(
    (W) => {
      const M = Dr(W);
      b?.(M), N?.(M);
    },
    [b, N]
  ), I = q(
    (W, M) => {
      D(W), M && !c && L(W);
    },
    [c, L]
  ), R = q(() => {
    E(!1), D(null), y?.(), _.current?.focus();
  }, [y]), H = q(() => {
    o || (D(v), E(!0), w?.());
  }, [o, v, w]), V = q(() => {
    C ? R() : H();
  }, [C, R, H]), Y = q(
    (W, M) => {
      const F = m.current;
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
    I({ ...un(M), a: g.a }, !0);
  }, ue = (W) => {
    if (u.current !== "sat") return;
    W.preventDefault();
    const M = Y(W.clientX, W.clientY);
    I({ ...un(M), a: g.a }, !0);
  }, U = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), u.current = "hue";
    const M = ee(W.clientX, k.current);
    I({ ...un({ ...O, h: M * 360 }), a: g.a }, !0);
  }, X = (W) => {
    if (u.current !== "hue") return;
    W.preventDefault();
    const M = ee(W.clientX, k.current);
    I({ ...un({ ...O, h: M * 360 }), a: g.a }, !0);
  }, P = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), u.current = "alpha";
    const M = ee(W.clientX, x.current);
    I({ ...g, a: M }, !0);
  }, se = (W) => {
    if (u.current !== "alpha") return;
    W.preventDefault();
    const M = ee(W.clientX, x.current);
    I({ ...g, a: M }, !0);
  }, J = () => {
    u.current = null;
  }, ce = q(
    (W, M) => {
      const F = { h: O.h, s: yt(O.s + W, 0, 1), v: yt(O.v + M, 0, 1) };
      I({ ...un(F), a: g.a }, !0);
    },
    [O, g.a, I]
  ), ae = q(
    (W) => {
      const M = (O.h + W + 360) % 360;
      I({ ...un({ ...O, h: M }), a: g.a }, !0);
    },
    [O, g.a, I]
  ), be = q(
    (W) => {
      I({ ...g, a: yt(g.a + W, 0, 1) }, !0);
    },
    [g, I]
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
      const re = sr(M);
      re && I({ ...re, a: g.a }, !0);
      return;
    }
    const F = M.replace(/[^\d.]/g, ""), ne = Number.parseFloat(F);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const re = F.includes(".") ? yt(ne, 0, 1) : yt(ne / 100, 0, 1);
      I({ ...g, a: re }, !0);
      return;
    }
    const fe = { r: 255, g: 255, b: 255 };
    I({ ...g, [W]: yt(ne, 0, fe[W]) }, !0);
  }, We = () => {
    z && (L(z), D(null), E(!1), y?.(), _.current?.focus());
  };
  we(() => {
    if (!C) return;
    const W = (M) => {
      f.current && !f.current.contains(M.target) && R();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [C, R]), we(() => {
    if (!C) return;
    const W = (M) => {
      M.key === "Escape" && R();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [C, R]);
  const ye = p === "xs" ? Se["dx-colorpicker-trigger-xs"] : p === "sm" ? Se["dx-colorpicker-trigger-sm"] : p === "lg" ? Se["dx-colorpicker-trigger-lg"] : p === "xl" ? Se["dx-colorpicker-trigger-xl"] : Se["dx-colorpicker-trigger"], Ze = Dr(g), Ve = uh(g), Le = { x: O.s * 100, y: (1 - O.v) * 100 }, tt = O.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ S("div", { className: Se["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: m,
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
        ref: k,
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
    s && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-palette"], children: i.map((W) => /* @__PURE__ */ n(
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
          c ? I({ ...M, a: g.a }, !1) : (D(null), L({ ...M, a: g.a }), E(!1), y?.(), _.current?.focus());
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
      ref: f,
      className: [
        Se["dx-colorpicker"],
        C ? Se["dx-colorpicker-open"] : null,
        a ? Se["dx-colorpicker-invalid"] : null,
        $
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ S(
          "button",
          {
            ref: _,
            type: "button",
            className: [Se["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": C,
            "aria-controls": j,
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
              l && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-text"], children: l }),
              h && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        C && /* @__PURE__ */ n(
          "div",
          {
            id: j,
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
}, ph = 42;
function bt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${bt(e.month)}-${bt(e.day)}`;
}
function hh(e, t) {
  const r = pt(e);
  return t ? `${r} ${bt(e.hour)}:${bt(e.minute)}:${bt(e.second)}` : r;
}
function ar(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), s = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (s < 1 || s > 12 || i < 1 || i > 31) return null;
  const a = new Date(r, s - 1, i, c, h, o);
  return a.getFullYear() !== r || a.getMonth() !== s - 1 || a.getDate() !== i ? null : { year: r, month: s, day: i, hour: c, minute: h, second: o };
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
  const r = new Date(e.year, e.month - 1 + t, 1), s = r.getFullYear(), i = r.getMonth() + 1, c = new Date(s, i, 0).getDate();
  return {
    year: s,
    month: i,
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
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, mh = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], gh = ["y", "M", "d", "H", "m", "s"];
function Kn(e, t, r) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let i = "", c = 0;
  for (; c < t.length; ) {
    let h = !1;
    for (const a of mh)
      if (t.startsWith(a, c)) {
        i += zr[a](e, s, r), c += a.length, h = !0;
        break;
      }
    if (h) continue;
    const o = t[c];
    if (gh.includes(o)) {
      i += zr[o](e, s, r), c += 1;
      continue;
    }
    i += o, c += 1;
  }
  return i;
}
const yh = [
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
function bh(e, t) {
  const r = {};
  let s = 0, i = 0;
  for (; i < t.length; ) {
    let o = null;
    for (const a of yh)
      if (t.startsWith(a, i)) {
        o = a;
        break;
      }
    if (o) {
      const a = e.slice(s, s + o.length);
      if (!/^\d+$/.test(a)) return null;
      const l = Number(a);
      switch (o) {
        case "yyyy":
          r.year = l;
          break;
        case "yy":
        case "y":
          r.year = 2e3 + l;
          break;
        case "MM":
        case "M":
          r.month = l;
          break;
        case "dd":
        case "d":
          r.day = l;
          break;
        case "HH":
        case "H":
          r.hour = l;
          break;
        case "mm":
        case "m":
          r.minute = l;
          break;
        case "ss":
        case "s":
          r.second = l;
          break;
      }
      s += o.length, i += o.length;
      continue;
    }
    if (e[s] !== t[i]) return null;
    s += 1, i += 1;
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
  return r || bh(e, t);
}
function xh(e, t, r) {
  return t && pt(e) < pt(t) ? t : r && pt(e) > pt(r) ? r : e;
}
const vh = ["hour", "minute", "second"];
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
const Rb = qe(function({
  size: t = "md",
  invalid: r = !1,
  value: s,
  defaultValue: i,
  format: c = "yyyy-MM-dd",
  min: h,
  max: o,
  showTime: a = !1,
  showButton: l = !0,
  allowClear: p = !1,
  inline: d = !1,
  disabledDates: $,
  locale: b = "en-US",
  onChange: N,
  onValueChange: w,
  onOpen: y,
  onClose: f,
  disabled: _,
  readOnly: m,
  placeholder: k,
  ariaLabel: x,
  triggerLabel: j,
  clearLabel: u,
  tabIndex: v,
  className: C,
  onBlur: E,
  onKeyDown: z,
  ...D
}, g) {
  const O = le(null), L = le(null), I = le(null), R = le(null), H = Ye(), V = s !== void 0, [Y, ee] = G(
    () => i != null ? Kn(Mn(i, c) ?? Gt(), c, b) : ""
  ), [te, ue] = G(!1), [U, X] = G(null), [P, se] = G(() => {
    const K = s !== void 0 ? s ?? "" : i ?? "";
    if (K) {
      const de = Mn(K, c);
      if (de) return de;
    }
    return Gt();
  }), J = $e(() => h ? ar(h) : null, [h]), ce = $e(() => o ? ar(o) : null, [o]), ae = $e(
    () => new Set($ ?? []),
    [$]
  ), be = $e(() => {
    const K = V ? s ?? "" : Y;
    return K ? Mn(K, c) : null;
  }, [s, Y, V, c]), ke = q(
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
      const de = K ? hh(K, a) : "";
      N?.(de), w?.(de);
    },
    [V, c, b, a, N, w]
  ), We = q(
    (K) => {
      L.current = K, typeof g == "function" ? g(K) : g && (g.current = K);
    },
    [g]
  ), ye = q(() => {
    ue(!1), X(null), f?.(), d || I.current?.focus();
  }, [d, f]), Ze = q(() => {
    if (_) return;
    const K = be ?? Gt();
    X(K), se(Be(K)), ue(!0), y?.();
  }, [_, be, Be, y]), Ve = q(() => {
    te ? ye() : Ze();
  }, [te, ye, Ze]), Le = q((K) => {
    R.current?.querySelector(
      `[data-date="${pt(K)}"]`
    )?.focus();
  }, []), tt = q(
    (K) => {
      if (ke(K)) return;
      const de = U ?? be, Ke = {
        ...a ? {
          hour: de?.hour ?? 0,
          minute: de?.minute ?? 0,
          second: de?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: K.year,
        month: K.month,
        day: K.day
      };
      X(Ke), a || (ve(Ke), ye());
    },
    [ke, U, be, a, ve, ye]
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
    ve(K ? xh(K, J, ce) : null);
  }, [te, Y, c, J, ce, ve]), F = (K) => {
    const de = K.target.value;
    V || ee(de), te && X(null);
  }, ne = (K) => {
    K.key === "Enter" ? (K.preventDefault(), te ? U && (ve(U), ye()) : M()) : K.key === "Escape" ? te && (K.preventDefault(), ye()) : K.key === "ArrowDown" && !te ? (K.preventDefault(), Ze()) : K.key === "Tab" && te && ue(!1), z?.(K);
  }, fe = (K) => {
    M(), E?.(K);
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
    V || ee(""), N?.(""), w?.(""), L.current?.focus();
  }, Ne = te && U ? Kn(U, c, b) : V ? s ? Kn(Mn(s, c) ?? Gt(), c, b) : "" : Y, Fe = V ? !!s : Y.length > 0, Je = d || te, dt = { year: P.year, month: P.month }, xt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
    year: dt.year,
    month: dt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let K = 0; K < ph; K += 1)
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
        a && /* @__PURE__ */ S("div", { className: Oe["dx-datepicker-time"], children: [
          vh.map((K) => /* @__PURE__ */ S("label", { className: Oe["dx-datepicker-time-field"], children: [
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
        !d && /* @__PURE__ */ S(je, { children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: We,
              type: "text",
              autoComplete: "off",
              value: Ne,
              disabled: _,
              readOnly: m,
              placeholder: k,
              tabIndex: v,
              role: l ? void 0 : "combobox",
              "aria-label": x ?? "Date",
              "aria-haspopup": l ? void 0 : "dialog",
              "aria-expanded": l ? void 0 : Je,
              "aria-controls": l ? void 0 : H,
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
                l || Ve();
              },
              ...D
            }
          ),
          p && !_ && Fe && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [
                Oe["dx-datepicker-clear"],
                l ? Oe["dx-datepicker-clear--inset"] : null
              ].filter(Boolean).join(" "),
              "aria-label": u ?? "Clear",
              onClick: me,
              children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
            }
          ),
          l && /* @__PURE__ */ n(
            "button",
            {
              ref: I,
              type: "button",
              className: [
                Oe["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": j ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": te,
              "aria-controls": H,
              disabled: _,
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
}, Lb = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: s = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: h = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: l,
  onValueChange: p
}) => {
  const [d, $] = G(e), b = q(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), N = q(
    (_) => {
      l?.(_), p?.(_);
    },
    [l, p]
  ), w = q(
    (_) => {
      r || s || (N(_), $(_));
    },
    [r, s, N]
  ), y = (_) => {
    if (r || s) return;
    const m = d > 0 ? d : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), w(b(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), w(b(m - 1));
        break;
      case "Home":
        _.preventDefault(), w(1);
        break;
      case "End":
        _.preventDefault(), w(t);
        break;
    }
  }, f = Array.from({ length: t }, (_, m) => m + 1);
  return /* @__PURE__ */ S(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": r || void 0,
      className: [
        Yt["dx-rating"],
        r ? Yt["dx-rating-readonly"] : null,
        s ? Yt["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: y,
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
        f.map((_) => {
          const m = _ <= e, k = _ === (e > 0 ? e : d);
          return /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${h} ${_}`,
              tabIndex: k ? o : -1,
              "aria-disabled": s || r || void 0,
              disabled: s || r,
              className: [
                Yt["dx-rating-item"],
                m ? Yt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => w(_),
              onFocus: () => $(_),
              children: [
                /* @__PURE__ */ n("span", { className: Yt["dx-rating-icon-filled"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "star", size: 20 }) }),
                /* @__PURE__ */ n("span", { className: Yt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "star-outline", size: 20 }) })
              ]
            },
            _
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
function Et(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const Pb = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: s = 0,
  max: i = 100,
  step: c = 1,
  range: h = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: l = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: $ = 0,
  className: b,
  onChange: N,
  onInput: w,
  onValueChange: y,
  onInputChange: f
}) => {
  const _ = le(null), m = le(null), [k, x] = G(null), j = k ?? e, u = $e(() => Et(j, s, i), [j, s, i]), v = $e(
    () => Et(h ? t : u, s, i),
    [h, t, u, s, i]
  ), C = $e(
    () => Et(h ? Math.max(r, v) : u, s, i),
    [h, r, v, u, s, i]
  ), E = q(
    (P) => {
      const se = i - s;
      return se <= 0 ? 0 : (Et(P, s, i) - s) / se * 100;
    },
    [s, i]
  ), z = q(
    (P, se) => {
      const J = _.current;
      if (!J) return s;
      const ce = J.getBoundingClientRect();
      let ae;
      o === "vertical" ? ae = 1 - (se - ce.top) / ce.height : ae = (P - ce.left) / ce.width;
      const be = s + Et(ae, 0, 1) * (i - s);
      return c > 0 ? Et(Math.round(be / c) * c, s, i) : Et(be, s, i);
    },
    [s, i, c, o]
  ), D = q(
    (P) => {
      typeof P == "number" && x(P), N?.(P), y?.(P);
    },
    [N, y]
  ), g = q(
    (P) => {
      typeof P == "number" && x(P), w?.(P), f?.(P);
    },
    [w, f]
  ), O = q(
    (P, se, J) => {
      const ce = z(se, J);
      let ae;
      h ? P === "min" ? ae = { min: Math.min(ce, C), max: C } : ae = { min: v, max: Math.max(ce, v) } : ae = ce, g(ae), m.current === null && D(ae);
    },
    [h, z, v, C, g, D]
  ), L = q(
    (P, se) => {
      const J = (c > 0 ? c : 1) * se;
      let ce;
      h ? P === "min" ? ce = {
        min: Et(v + J, s, C),
        max: C
      } : ce = {
        min: v,
        max: Et(C + J, v, i)
      } : ce = Et(u + J, s, i), D(ce);
    },
    [h, c, s, i, v, C, u, D]
  ), I = (P, se) => {
    if (!a)
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
          se.preventDefault(), D(h ? P === "min" ? { min: s, max: C } : { min: v, max: v } : s);
          break;
        case "End":
          se.preventDefault(), D(h ? P === "min" ? { min: C, max: C } : { min: v, max: i } : i);
          break;
      }
  }, R = (P, se) => {
    a || (se.preventDefault(), se.currentTarget.focus(), typeof se.currentTarget.setPointerCapture == "function" && se.currentTarget.setPointerCapture(se.pointerId), m.current = { key: P, pointerId: se.pointerId }, O(P, se.clientX, se.clientY));
  }, H = (P) => {
    !m.current || m.current.pointerId !== P.pointerId || (P.preventDefault(), O(m.current.key, P.clientX, P.clientY));
  }, V = (P) => {
    !m.current || m.current.pointerId !== P.pointerId || (m.current = null, P.preventDefault(), D(h ? { min: v, max: C } : u));
  }, [Y, ee] = G(null), te = E(v), ue = E(C), U = h ? te : 0, X = ue;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        nn["dx-slider"],
        o === "vertical" ? nn["dx-slider-vertical"] : null,
        a ? nn["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ S("div", { ref: _, className: nn["dx-slider-track"], children: [
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
            "aria-valuemin": s,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(v),
            "aria-orientation": o,
            "aria-label": h ? p : l,
            "aria-disabled": a || void 0,
            tabIndex: a || h && Y === "max" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (P) => I("min", P),
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
            "aria-valuemin": s,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(C),
            "aria-orientation": o,
            "aria-label": d,
            "aria-disabled": a || void 0,
            tabIndex: a || Y === "min" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${ue}% - 8px)` } : { left: `calc(${ue}% - 8px)` },
            onKeyDown: (P) => I("max", P),
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
}, kh = "-10675199.02:48:05.4775808", wh = "10675199.02:48:05.4775808", Kt = 86400, Ht = 3600, Ct = 60, tr = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Cr = {
  days: Kt,
  hours: Ht,
  minutes: Ct,
  seconds: 1
}, $h = {
  day: Kt,
  hour: Ht,
  minute: Ct,
  second: 1
};
function fn(e) {
  return String(e).padStart(2, "0");
}
function An(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, s = t;
  s.startsWith("-") ? (r = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (i) {
    if (!i.slice(1).some((d) => d != null)) return null;
    const o = i[1] != null ? Number(i[1]) : 0, a = i[2] != null ? Number(i[2]) : 0, l = i[3] != null ? Number(i[3]) : 0, p = i[4] != null ? Number(i[4]) : 0;
    return r * (o * Kt + a * Ht + l * Ct + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(s);
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), a = Number(c[3]), l = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || a > 59 || l > 59 ? null : r * (h * Kt + o * Ht + a * Ct + l + p);
  }
  return null;
}
function Nh(e) {
  return e.days * Kt + e.hours * Ht + e.minutes * Ct + e.seconds;
}
function Or(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / Kt);
  t %= Kt;
  const s = Math.floor(t / Ht);
  t %= Ht;
  const i = Math.floor(t / Ct), c = Math.round(t % Ct * 1e9) / 1e9;
  return { days: r, hours: s, minutes: i, seconds: c };
}
function lr(e, t) {
  const r = e < 0;
  let s = Math.abs(e);
  t === "minute" ? s = Math.round(s / Ct) * Ct : t === "hour" ? s = Math.round(s / Ht) * Ht : t === "day" && (s = Math.round(s / Kt) * Kt);
  let i = Math.round(s % Ct);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const h = Math.floor(s / Ct) + c, o = h % 60, a = Math.floor(h / 60), l = a % 24, p = Math.floor(a / 24), d = r ? "-" : "", $ = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${$}${fn(l)}`;
    case "minute":
      return `${d}${$}${fn(l)}:${fn(o)}`;
    default:
      return `${d}${$}${fn(l)}:${fn(o)}:${fn(i)}`;
  }
}
function jr(e, t = "second") {
  const r = An(e);
  return r === null ? "" : lr(r, t);
}
function nr(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const Bb = qe(
  function({
    size: t = "md",
    invalid: r = !1,
    value: s,
    defaultValue: i,
    min: c = kh,
    max: h = wh,
    step: o = "1",
    precision: a = "second",
    showDays: l = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: $ = !0,
    allowClear: b = !1,
    inline: N = !1,
    onChange: w,
    onValueChange: y,
    onOpen: f,
    onClose: _,
    disabled: m,
    placeholder: k,
    ariaLabel: x,
    triggerLabel: j,
    clearLabel: u,
    tabIndex: v,
    className: C,
    onBlur: E,
    onKeyDown: z,
    ...D
  }, g) {
    const O = le(null), L = le(null), I = le(null), R = Ye(), H = s !== void 0, [V, Y] = G(
      () => i != null ? jr(i, a) : ""
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
      const Q = H ? s ?? "" : V;
      return Q ? An(Q) : null;
    }, [s, V, H]), be = q(
      (Q) => {
        const De = Q === null ? "" : lr(Q, a);
        H || Y(De), w?.(De), y?.(De);
      },
      [H, a, w, y]
    ), ke = q(
      (Q) => {
        Q && ue !== null && be(ue), te(!1), U(null), P(null), _?.(), N || I.current?.focus();
      },
      [N, ue, be, _]
    ), Be = q(() => {
      m || (U(ae ?? 0), te(!0), f?.());
    }, [m, ae, f]), ve = q(() => {
      ee ? ke(!1) : Be();
    }, [ee, ke, Be]), We = q(
      (Q, De) => {
        U((nt) => {
          const St = (nt ?? ae ?? 0) + De * ce * Cr[Q];
          return nr(St, se, J);
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
          const Rt = (Me < 0 ? -1 : 1) * Nh(Xe);
          return nr(Rt, se, J);
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
      be(Q !== null ? nr(Q, se, J) : null);
    }, [ee, V, se, J, be]), tt = (Q) => {
      H || Y(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), ee ? ke(!0) : Le()) : Q.key === "Escape" && ee ? (Q.preventDefault(), ke(!1)) : Q.key === "ArrowDown" && !ee ? (Q.preventDefault(), Be()) : Q.key === "Tab" && ee && te(!1), z?.(Q);
    }, et = (Q) => {
      Le(), E?.(Q);
    }, W = () => {
      H || Y(""), w?.(""), y?.(""), L.current?.focus();
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
        L.current = Q, typeof g == "function" ? g(Q) : g && (g.current = Q);
      },
      [g]
    ), F = H ? s ? jr(s, a) : "" : V, ne = H ? !!s : V.length > 0, fe = N || ee, re = ue ?? ae ?? 0, me = Or(re), Ne = $h[a], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Cr[Q] >= Ne && (Q === "days" ? l : Q === "hours" ? p : Q === "minutes" ? d : $)
    ), dt = t === "xs" ? He["dx-timespanpicker-input--xs"] : t === "sm" ? He["dx-timespanpicker-input--sm"] : t === "lg" ? He["dx-timespanpicker-input--lg"] : t === "xl" ? He["dx-timespanpicker-input--xl"] : He["dx-timespanpicker-input--md"], xt = /* @__PURE__ */ S("div", { className: He["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: He["dx-timespanpicker-preview"], "aria-live": "polite", children: lr(re, a) }),
      /* @__PURE__ */ n("div", { className: He["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ S("label", { className: He["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: He["dx-timespanpicker-unit-label"], children: tr[Q] }),
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
                "aria-label": `Increase ${tr[Q].toLowerCase()}`,
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
                "aria-label": `Decrease ${tr[Q].toLowerCase()}`,
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
          !N && /* @__PURE__ */ S(je, { children: [
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
            b && !m && ne && /* @__PURE__ */ n(
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
                ref: I,
                type: "button",
                className: [
                  He["dx-timespanpicker-trigger"]
                ].filter(Boolean).join(" "),
                "aria-label": j ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": R,
                disabled: m,
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
              "aria-label": x ?? "Time span picker",
              className: N ? void 0 : He["dx-timespanpicker-popup"],
              children: xt
            }
          )
        ]
      }
    );
  }
), Sh = "_wrapper_t1zvh_1", Dh = "_cells_t1zvh_8", Mh = "_cell_t1zvh_8", zh = "_invalid_t1zvh_63", Ch = "_live_t1zvh_72", rn = {
  wrapper: Sh,
  cells: Dh,
  cell: Mh,
  "cell-sm": "_cell-sm_t1zvh_45",
  "cell-md": "_cell-md_t1zvh_51",
  "cell-lg": "_cell-lg_t1zvh_57",
  invalid: zh,
  live: Ch
};
function Er(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Fb = qe(
  function({
    length: t = 6,
    value: r,
    defaultValue: s,
    onChange: i,
    invalid: c = !1,
    size: h = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: l = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": $
  }, b) {
    const N = Ye(), w = r !== void 0, [y, f] = G(Er(s).join("")), _ = w ? Er(r).join("") : y, m = Array.from({ length: t }, (D, g) => _[g] ?? ""), k = le([]), [x, j] = G(""), u = (D) => {
      w || f(D), i?.(D);
    }, v = (D) => {
      const g = k.current[D];
      g && !g.disabled && (g.focus(), g.select());
    }, C = (D, g) => {
      const O = g.replace(/\D/g, "").slice(-1), L = _.split("");
      if (O) {
        L[D] = O;
        const I = L.join("").slice(0, t);
        u(I), I.length < t ? v(D + 1) : p && j("Code complete");
      }
    }, E = (D, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), _[D]) {
          const O = _.split("");
          O[D] = "", u(O.join(""));
        } else if (D > 0) {
          const O = _.split("");
          O[D - 1] = "", u(O.join("")), v(D - 1);
        }
      } else g.key === "ArrowLeft" && D > 0 ? (g.preventDefault(), v(D - 1)) : g.key === "ArrowRight" && D < t - 1 ? (g.preventDefault(), v(D + 1)) : g.key === "Home" ? (g.preventDefault(), v(0)) : g.key === "End" && (g.preventDefault(), v(t - 1));
    }, z = (D, g) => {
      g.preventDefault();
      const O = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!O) return;
      const L = _.split("");
      let I = 0;
      for (let H = 0; H < O.length && D + H < t; H++)
        L[D + H] = O[H] ?? "", I++;
      const R = L.join("");
      u(R), R.length >= t ? p && j("Code complete") : v(D + I);
    };
    return /* @__PURE__ */ S(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": $ ?? l,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[h]].join(" "), children: m.map((D, g) => /* @__PURE__ */ n(
            "input",
            {
              ref: (O) => {
                k.current[g] = O, g === 0 && b && (typeof b == "function" ? b(O) : b.current = O);
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
              onChange: (O) => C(g, O.target.value),
              onKeyDown: (O) => E(g, O),
              onPaste: (O) => z(g, O),
              onFocus: (O) => O.target.select(),
              onBlur: () => {
                p && j("");
              }
            },
            g
          )) }),
          p && /* @__PURE__ */ n("span", { id: `${N}-live`, role: "status", "aria-live": "polite", className: rn.live, children: x })
        ]
      }
    );
  }
), Oh = "_wrapper_itqsj_1", jh = "_header_itqsj_7", Eh = "_label_itqsj_15", Ih = "_clear_itqsj_22", Ah = "_canvas_itqsj_53", Th = "_disabled_itqsj_69", _n = {
  wrapper: Oh,
  header: jh,
  label: Eh,
  clear: Ih,
  canvas: Ah,
  disabled: Th
}, qb = qe(
  function({
    value: t,
    defaultValue: r,
    onChange: s,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: h = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: l = 140,
    disabled: p = !1,
    className: d
  }, $) {
    const b = le(null), N = le(!1), w = le(!1), y = le({ x: 0, y: 0 });
    we(() => {
      const u = b.current;
      if (!u) return;
      const v = window.devicePixelRatio || 1, C = Math.round((a ?? u.clientWidth) * v), E = Math.round(l * v);
      (u.width !== C || u.height !== E) && (u.width = C, u.height = E);
      const z = u.getContext("2d");
      if (!z) return;
      z.setTransform(v, 0, 0, v, 0, 0), z.lineWidth = c, z.strokeStyle = i, z.lineCap = "round", z.lineJoin = "round";
      const D = t ?? r;
      if (D) {
        const g = new Image();
        g.onload = () => {
          z.drawImage(g, 0, 0, u.clientWidth, l);
        }, g.src = D;
      }
    }, [t, r, i, c, a, l]);
    const f = () => {
      const u = b.current;
      if (!u) return;
      const v = u.toDataURL("image/png");
      s?.(v);
    }, _ = () => {
      const u = b.current;
      if (!u) return;
      const v = u.getContext("2d");
      v && v.clearRect(0, 0, u.width, u.height), s?.("");
    };
    ir($, () => ({
      clear: _,
      toDataURL: (u = "image/png", v) => b.current?.toDataURL(u, v) ?? ""
    }));
    const m = (u) => {
      const v = u.currentTarget.getBoundingClientRect();
      return { x: u.clientX - v.left, y: u.clientY - v.top };
    }, k = (u) => {
      p || (u.preventDefault(), typeof u.currentTarget.setPointerCapture == "function" && u.currentTarget.setPointerCapture(u.pointerId), N.current = !0, w.current = !1, y.current = m(u));
    }, x = (u) => {
      if (!N.current) return;
      u.preventDefault();
      const v = u.currentTarget.getContext("2d");
      if (!v) return;
      const C = m(u);
      v.beginPath(), v.moveTo(y.current.x, y.current.y), v.lineTo(C.x, C.y), v.stroke(), y.current = C, w.current = !0;
    }, j = (u) => {
      N.current && (u.preventDefault(), N.current = !1, w.current && f());
    };
    return /* @__PURE__ */ S("div", { className: [_n.wrapper, d, p ? _n.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ S("div", { className: _n.header, children: [
        /* @__PURE__ */ n("span", { className: _n.label, children: o }),
        /* @__PURE__ */ n("button", { type: "button", className: _n.clear, onClick: _, disabled: p, children: h })
      ] }),
      /* @__PURE__ */ n(
        "canvas",
        {
          ref: b,
          role: "img",
          "aria-label": o,
          "aria-disabled": p || void 0,
          style: { width: a ? `${a}px` : void 0, height: `${l}px` },
          className: _n.canvas,
          onPointerDown: k,
          onPointerMove: x,
          onPointerUp: j,
          onPointerCancel: j
        }
      )
    ] });
  }
), Rh = "_wrapper_1v23y_1", Lh = "_trigger_1v23y_7", Ph = "_list_1v23y_35", Bh = "_row_1v23y_44", Fh = "_name_1v23y_59", qh = "_size_1v23y_68", Kh = "_progress_1v23y_74", Hh = "_fill_1v23y_82", Uh = "_status_1v23y_99", Wh = "_remove_1v23y_106", It = {
  wrapper: Rh,
  trigger: Lh,
  list: Ph,
  row: Bh,
  name: Fh,
  size: qh,
  progress: Kh,
  fill: Hh,
  status: Uh,
  remove: Wh
};
function Ir(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Kb = qe(function({
  url: t,
  multiple: r = !1,
  parameterName: s = "files",
  auto: i = !0,
  headers: c,
  accept: h,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: l = "Upload",
  children: p,
  onProgress: d,
  onComplete: $,
  onError: b
}, N) {
  const w = le(null), [y, f] = G([]), _ = le(/* @__PURE__ */ new Map()), m = (v, C) => {
    f((E) => E.map((z) => z.file.name === v ? { ...z, ...C } : z));
  }, k = (v) => {
    if (!t) return;
    const C = new XMLHttpRequest();
    _.current.set(v.file.name, C);
    const E = new FormData();
    if (E.append(s, v.file), C.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const D = Math.round(z.loaded / z.total * 100);
      m(v.file.name, { state: "uploading", progress: D }), d?.(v.file.name, D);
    }), C.addEventListener("load", () => {
      C.status >= 200 && C.status < 300 ? (m(v.file.name, { state: "complete", progress: 100 }), $?.(v.file.name)) : (m(v.file.name, { state: "error", message: `HTTP ${C.status}` }), b?.(v.file.name, `HTTP ${C.status}`));
    }), C.addEventListener("error", () => {
      m(v.file.name, { state: "error", message: "Network error" }), b?.(v.file.name, "Network error");
    }), c)
      for (const [z, D] of Object.entries(c))
        C.setRequestHeader(z, D);
    C.open("POST", t), C.send(E), m(v.file.name, { state: "uploading", progress: 0 });
  }, x = (v) => {
    if (!v) return;
    const C = [...v], E = [];
    let z = Math.max(0, o - y.length);
    for (const g of C) {
      if (a != null && g.size > a) {
        b?.(g.name, `File too large (maximum ${Ir(a)})`);
        continue;
      }
      if (z <= 0) {
        b?.(g.name, `Too many files (maximum ${o})`);
        continue;
      }
      z -= 1, E.push(g);
    }
    const D = E.map((g) => ({
      file: g,
      state: "pending",
      progress: 0
    }));
    f((g) => [...g, ...D]), w.current && (w.current.value = ""), i && D.forEach(k);
  }, j = (v) => {
    _.current.get(v)?.abort(), _.current.delete(v), f((E) => E.filter((z) => z.file.name !== v));
  }, u = p ?? /* @__PURE__ */ S("button", { type: "button", className: It.trigger, onClick: () => w.current?.click(), children: [
    /* @__PURE__ */ n(Ce, { name: "upload", size: 14 }),
    l
  ] });
  return ir(N, () => ({
    open: () => w.current?.click(),
    upload: () => y.forEach((v) => v.state === "pending" ? k(v) : null)
  })), /* @__PURE__ */ S("div", { className: It.wrapper, children: [
    u,
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
    !p && y.length > 0 && /* @__PURE__ */ n("ul", { className: It.list, children: y.map(({ file: v, state: C, progress: E, message: z }) => /* @__PURE__ */ S("li", { className: It.row, "data-state": C, "data-testid": "upload-row", children: [
      /* @__PURE__ */ n("span", { className: It.name, children: v.name }),
      /* @__PURE__ */ n("span", { className: It.size, children: Ir(v.size) }),
      /* @__PURE__ */ n(
        "span",
        {
          className: It.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": E,
          children: /* @__PURE__ */ n("span", { className: It.fill, style: { width: `${E}%` } })
        }
      ),
      /* @__PURE__ */ n("span", { className: It.status, role: "status", children: C === "uploading" ? "Uploading" : C === "complete" ? "Complete" : C === "error" ? z ?? "Failed" : "Pending" }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: It.remove,
          "aria-label": `Remove ${v.name}`,
          onClick: () => j(v.name),
          children: /* @__PURE__ */ n(Ce, { name: "close", size: 14 })
        }
      )
    ] }, v.name)) })
  ] });
}), Vh = "_zone_14tvz_1", Xh = "_dragging_14tvz_23", Gh = "_caption_14tvz_28", Yh = "_browse_14tvz_40", Zh = "_disabled_14tvz_67", zn = {
  zone: Vh,
  dragging: Xh,
  caption: Gh,
  browse: Yh,
  disabled: Zh
};
function Jh(e, t) {
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
const Hb = qe(function({
  accept: t,
  multiple: r = !1,
  onDrop: s,
  label: i = "Drop files here or browse",
  dragLabel: c = "Drop to attach",
  browseText: h = "Browse",
  disabled: o = !1,
  className: a
}, l) {
  const p = le(null), [d, $] = G(!1), b = (_) => {
    if (!_ || _.length === 0) return;
    const m = [..._].filter((k) => Jh(k, t ?? ""));
    m.length !== 0 && s?.(m);
  }, N = (_) => {
    o || (_.preventDefault(), $(!0));
  }, w = (_) => {
    o || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", $(!0));
  }, y = (_) => {
    o || _.currentTarget.contains(_.relatedTarget) || $(!1);
  }, f = (_) => {
    o || (_.preventDefault(), $(!1), b(_.dataTransfer.files));
  };
  return ir(l, () => ({
    open: () => p.current?.click()
  })), /* @__PURE__ */ S(
    "div",
    {
      role: "region",
      "aria-label": i,
      className: [zn.zone, d ? zn.dragging : null, o ? zn.disabled : null, a].filter(Boolean).join(" "),
      onDragEnter: N,
      onDragOver: w,
      onDragLeave: y,
      onDrop: f,
      children: [
        /* @__PURE__ */ n("p", { className: zn.caption, children: d ? c : i }),
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
            onChange: (_) => {
              b(_.target.files), _.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Qh = "_root_1dfo5_1", em = "_menubar_1dfo5_5", tm = "_horizontal_1dfo5_15", nm = "_vertical_1dfo5_20", rm = "_itemWrapper_1dfo5_25", om = "_item_1dfo5_25", sm = "_disabled_1dfo5_61", am = "_icon_1dfo5_68", lm = "_text_1dfo5_75", im = "_caret_1dfo5_79", cm = "_hasChildren_1dfo5_85", dm = "_submenu_1dfo5_94", um = "_submenuItem_1dfo5_118", ct = {
  root: Qh,
  menubar: em,
  horizontal: tm,
  vertical: nm,
  itemWrapper: rm,
  item: om,
  disabled: sm,
  icon: am,
  text: lm,
  caret: im,
  hasChildren: cm,
  submenu: dm,
  submenuItem: um
};
function Cn(e) {
  return !!e.disabled;
}
function Ub({
  items: e,
  orientation: t = "horizontal",
  onClick: r,
  Click: s,
  ariaLabel: i = "Menu",
  className: c
}) {
  const h = Ye(), o = le(null), a = le(null), [l, p] = G(null), d = le(0), $ = le(null), b = q(
    (f) => {
      const _ = { text: f.text, value: f.value, path: f.path };
      (r ?? s)?.(_);
    },
    [r, s]
  ), N = q(
    (f, _) => {
      if (!Cn(f)) {
        if (f.children && f.children.length > 0) {
          const m = l === _, k = Date.now() - d.current < 600;
          if (m && k) {
            d.current = 0;
            return;
          }
          p((x) => x === _ ? null : _);
          return;
        }
        b(f), p(null);
      }
    },
    [b, l]
  ), w = (f) => {
    Cn(f) || f.children && f.children.length > 0 || (b(f), p(null));
  };
  we(() => {
    if (l == null) return;
    const f = (_) => {
      o.current && !o.current.contains(_.target) && p(null);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [l]), we(() => {
    if ($.current != null && l === $.current) {
      const f = `${h}-submenu-${l}`;
      document.getElementById(f)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), $.current = null;
    }
  }, [l, h]);
  const y = (f) => {
    const _ = a.current;
    if (!_) return;
    const m = Array.from(
      _.querySelectorAll('[data-top="true"]')
    ).filter((j) => !j.hasAttribute("disabled") && j.getAttribute("aria-disabled") !== "true");
    if (l != null) {
      const j = `${h}-submenu-${l}`, u = document.getElementById(j);
      if (u) {
        const v = Array.from(u.querySelectorAll('[role="menuitem"]')).filter(
          (z) => z.getAttribute("aria-disabled") !== "true"
        ), C = document.activeElement, E = C ? v.indexOf(C) : -1;
        if (f.key === "ArrowDown") {
          f.preventDefault(), E === -1 ? v[0]?.focus() : v[(E + 1) % v.length]?.focus();
          return;
        }
        if (f.key === "ArrowUp") {
          f.preventDefault(), E === -1 ? v[v.length - 1]?.focus() : v[(E - 1 + v.length) % v.length]?.focus();
          return;
        }
        if (f.key === "Escape") {
          f.preventDefault(), p(null), _.querySelector(`[data-top="true"][data-index="${l}"]`)?.focus();
          return;
        }
        if (f.key === "Enter" || f.key === " ")
          return;
      }
      if (f.key === "Escape") {
        f.preventDefault(), p(null);
        return;
      }
    }
    const k = document.activeElement, x = k ? m.indexOf(k) : -1;
    if (f.key === "ArrowRight" || t === "vertical" && f.key === "ArrowDown") {
      if (f.preventDefault(), m.length === 0) return;
      const j = x === -1 ? 0 : (x + 1) % m.length;
      m[j]?.focus();
      return;
    }
    if (f.key === "ArrowLeft" || t === "vertical" && f.key === "ArrowUp") {
      if (f.preventDefault(), m.length === 0) return;
      const j = x === -1 ? m.length - 1 : (x - 1 + m.length) % m.length;
      m[j]?.focus();
      return;
    }
    if (f.key === "ArrowDown") {
      if (x >= 0) {
        const j = k?.getAttribute("data-index"), u = j != null ? Number(j) : -1, v = u >= 0 ? e[u] : void 0;
        v?.children && v.children.length > 0 && !Cn(v) && (f.preventDefault(), $.current = u, p(u));
      }
      return;
    }
    if (f.key === "Home") {
      f.preventDefault(), m[0]?.focus();
      return;
    }
    if (f.key === "End") {
      f.preventDefault(), m[m.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: o,
      "aria-label": i,
      className: [ct.root, ct[t], c].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: a,
          role: "menubar",
          "aria-label": i,
          className: ct.menubar,
          onKeyDown: y,
          children: e.map((f, _) => {
            const m = !!f.children && f.children.length > 0, k = l === _, x = Cn(f), j = `${h}-submenu-${_}`;
            return /* @__PURE__ */ S(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && m && !x && (d.current = Date.now(), p(_));
                },
                onMouseLeave: () => {
                  t === "horizontal" && m && p((u) => u === _ ? null : u);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ S(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": _,
                      "data-dx-menu-item": "",
                      "aria-disabled": x || void 0,
                      "aria-haspopup": m ? "menu" : void 0,
                      "aria-expanded": m ? k : void 0,
                      "aria-controls": m ? j : void 0,
                      tabIndex: x ? -1 : 0,
                      disabled: x,
                      className: [ct.item, x ? ct.disabled : null, m ? ct.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => N(f, _),
                      children: [
                        f.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: f.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: f.text }),
                        m ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  m && k ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: j,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": f.text,
                      children: f.children?.map((u, v) => {
                        const C = Cn(u), E = !!u.children && u.children.length > 0;
                        return /* @__PURE__ */ S(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": C || void 0,
                            "aria-haspopup": E ? "menu" : void 0,
                            tabIndex: C ? -1 : 0,
                            disabled: C,
                            className: [ct.submenuItem, C ? ct.disabled : null].filter(Boolean).join(" "),
                            onClick: () => w(u),
                            children: [
                              u.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: u.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: u.text })
                            ]
                          },
                          `${u.text}-${v}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${f.text}-${_}`
            );
          })
        }
      )
    }
  );
}
const fm = "_root_1hs3b_1", _m = "_list_1hs3b_9", pm = "_item_1hs3b_14", hm = "_trigger_1hs3b_18", mm = "_disabled_1hs3b_44", gm = "_expanded_1hs3b_51", ym = "_icon_1hs3b_55", bm = "_text_1hs3b_66", xm = "_caret_1hs3b_73", vm = "_open_1hs3b_80", km = "_submenu_1hs3b_84", wm = "_submenuItem_1hs3b_93", $m = "_nestedWrapper_1hs3b_122", Nm = "_nestedTrigger_1hs3b_127", Sm = "_nestedMenu_1hs3b_152", Dm = "_iconOnly_1hs3b_160", Ae = {
  root: fm,
  list: _m,
  item: pm,
  trigger: hm,
  disabled: mm,
  expanded: gm,
  icon: ym,
  text: bm,
  caret: xm,
  open: vm,
  submenu: km,
  submenuItem: wm,
  nestedWrapper: $m,
  nestedTrigger: Nm,
  nestedMenu: Sm,
  iconOnly: Dm
};
function Mm({
  item: e,
  baseId: t,
  parentKey: r,
  onEmit: s
}) {
  const i = !!e.children && e.children.length > 0, [c, h] = G(!1), o = `${t}-nested-${r}`, a = !!e.disabled, l = () => {
    if (!a) {
      if (i) {
        h((d) => !d);
        return;
      }
      s({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), l()) : d.key === "Escape" && c && (d.preventDefault(), h(!1));
  };
  return i ? /* @__PURE__ */ S("div", { className: Ae.nestedWrapper, children: [
    /* @__PURE__ */ S(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": o,
        "aria-disabled": a || void 0,
        disabled: a,
        tabIndex: a ? -1 : 0,
        className: [Ae.nestedTrigger, a ? Ae.disabled : null].filter(Boolean).join(" "),
        onClick: l,
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
            b || d.children && d.children.length > 0 || s({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (N) => {
            if (N.key === "Enter" || N.key === " ") {
              if (N.preventDefault(), b) return;
              s({ text: d.text, value: d.value, path: d.path });
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
      "aria-disabled": a || void 0,
      tabIndex: a ? -1 : 0,
      className: [Ae.submenuItem, a ? Ae.disabled : null].filter(Boolean).join(" "),
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
        e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Ae.text, children: e.text })
      ]
    }
  );
}
function Wb({
  items: e,
  multiple: t,
  Multiple: r,
  showArrow: s,
  ShowArrow: i,
  displayStyle: c,
  DisplayStyle: h,
  onClick: o,
  Click: a,
  ariaLabel: l = "Panel menu",
  className: p
}) {
  const d = Ye(), $ = t ?? r ?? !1, b = s ?? i ?? !0, N = c ?? h ?? "iconAndText", [w, y] = G([]), f = q(
    (k) => {
      const x = { text: k.text, value: k.value, path: k.path };
      (o ?? a)?.(x);
    },
    [o, a]
  ), _ = (k, x, j) => {
    if (!j.disabled) {
      if (x) {
        y((u) => u.includes(k) ? u.filter((C) => C !== k) : $ ? [...u, k] : [k]);
        return;
      }
      f(j);
    }
  }, m = (k) => {
    const x = k.target;
    if (!(k.key === "Enter" || k.key === " ")) {
      if (k.key === "Escape") {
        const j = x.getAttribute("aria-controls");
        if (j) {
          const u = j.match(/-panel-(\d+)$/);
          if (u) {
            const v = Number(u[1]);
            y((C) => C.filter((E) => E !== v));
          }
        } else {
          const u = x.closest('[role="menu"]');
          if (u) {
            const C = u.id.match(/-panel-(\d+)$/);
            if (C) {
              const E = Number(C[1]);
              y((D) => D.filter((g) => g !== E)), document.getElementById(`${d}-trigger-${E}`)?.focus();
            }
          }
        }
        k.preventDefault();
        return;
      }
      if (k.key === "ArrowDown" || k.key === "ArrowUp") {
        const j = Array.from(
          k.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((E) => !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true"), u = j.indexOf(x);
        if (u === -1) return;
        k.preventDefault();
        const v = k.key === "ArrowDown" ? 1 : -1;
        j[(u + v + j.length) % j.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": l,
      className: [
        Ae.root,
        N === "icon" ? Ae.iconOnly : Ae.iconAndText,
        p
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ n("div", { className: Ae.list, role: "presentation", children: e.map((k, x) => {
        const j = !!k.children && k.children.length > 0, u = w.includes(x), v = !!k.disabled, C = `${d}-panel-${x}`, E = `${d}-trigger-${x}`;
        return /* @__PURE__ */ S("div", { className: Ae.item, children: [
          /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              id: E,
              "aria-expanded": j ? u : void 0,
              "aria-controls": j ? C : void 0,
              "aria-disabled": v || void 0,
              disabled: v,
              tabIndex: v ? -1 : 0,
              className: [
                Ae.trigger,
                v ? Ae.disabled : null,
                u ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => _(x, j, k),
              children: [
                k.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: k.icon }) : null,
                N === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: k.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": k.text, children: k.icon ? null : k.text.slice(0, 1) }),
                j && b ? /* @__PURE__ */ n("span", { className: [Ae.caret, u ? Ae.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "chevron-down", size: 10 }) }) : null
              ]
            }
          ),
          j && u ? /* @__PURE__ */ n("div", { id: C, role: "menu", className: Ae.submenu, "aria-labelledby": E, children: k.children?.map((z, D) => /* @__PURE__ */ n(
            Mm,
            {
              item: z,
              baseId: d,
              parentKey: `${x}-${D}`,
              onEmit: f
            },
            `${z.text}-${D}`
          )) }) : null
        ] }, `${k.text}-${x}`);
      }) })
    }
  );
}
const zm = "_root_pjwno_1", Cm = "_trigger_pjwno_7", Om = "_defaultTrigger_pjwno_40", jm = "_avatar_pjwno_46", Em = "_menu_pjwno_58", Im = "_item_pjwno_74", Am = "_disabled_pjwno_88", Tm = "_active_pjwno_97", Rm = "_icon_pjwno_107", Lm = "_text_pjwno_114", At = {
  root: zm,
  trigger: Cm,
  defaultTrigger: Om,
  avatar: jm,
  menu: Em,
  item: Im,
  disabled: Am,
  active: Tm,
  icon: Rm,
  text: Lm
};
function Vb({
  items: e,
  trigger: t,
  Template: r,
  onClick: s,
  Click: i,
  ariaLabel: c = "Profile menu",
  className: h
}) {
  const o = Ye(), a = `${o}-menu`, l = le(null), p = le(null), [d, $] = G(!1), [b, N] = G(-1), w = t ?? r, y = e.map((u, v) => u.disabled ? -1 : v).filter((u) => u >= 0), f = q(
    (u) => {
      if (u.disabled) return;
      const v = { text: u.text, path: u.path };
      (s ?? i)?.(v), $(!1), p.current?.focus();
    },
    [s, i]
  ), _ = q(() => {
    N(y[0] ?? -1), $(!0);
  }, [y]), m = q(() => {
    $(!1), N(-1), p.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const u = (v) => {
      l.current && !l.current.contains(v.target) && ($(!1), N(-1));
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [d]), we(() => {
    if (!d) return;
    const u = (v) => {
      v.key === "Escape" && (v.preventDefault(), m());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [d, m]);
  const k = (u) => {
    if (y.length === 0) return;
    const v = y.indexOf(b), C = v === -1 ? 0 : (v + u + y.length) % y.length, E = y[C];
    E != null && N(E);
  }, x = (u) => {
    if (!d) {
      (u.key === "ArrowDown" || u.key === "Enter" || u.key === " ") && (u.preventDefault(), _());
      return;
    }
    switch (u.key) {
      case "Escape":
        u.preventDefault(), m();
        break;
      case "ArrowDown":
        u.preventDefault(), k(1);
        break;
      case "ArrowUp":
        u.preventDefault(), k(-1);
        break;
      case "Home":
        u.preventDefault(), y[0] != null && N(y[0]);
        break;
      case "End":
        u.preventDefault(), y[y.length - 1] != null && N(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (u.preventDefault(), b >= 0) {
          const v = e[b];
          v && !v.disabled && f(v);
        }
        break;
      case "Tab":
        $(!1), N(-1);
        break;
    }
  }, j = (u) => {
    switch (u.key) {
      case "ArrowDown":
        u.preventDefault(), k(1);
        break;
      case "ArrowUp":
        u.preventDefault(), k(-1);
        break;
      case "Home":
        u.preventDefault(), y[0] != null && N(y[0]);
        break;
      case "End":
        u.preventDefault(), y[y.length - 1] != null && N(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (u.preventDefault(), b >= 0) {
          const v = e[b];
          v && !v.disabled && f(v);
        }
        break;
      case "Escape":
        u.preventDefault(), m();
        break;
      case "Tab":
        $(!1), N(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: l,
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
            "aria-controls": a,
            "aria-label": c,
            className: At.trigger,
            onClick: () => d ? m() : _(),
            onKeyDown: x,
            children: w ?? /* @__PURE__ */ S("span", { className: At.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: At.avatar, "aria-hidden": "true", children: "●" }),
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
            "aria-activedescendant": b >= 0 ? `${o}-item-${b}` : void 0,
            className: At.menu,
            onKeyDown: j,
            tabIndex: -1,
            children: e.map((u, v) => {
              const C = !!u.disabled, E = v === b;
              return /* @__PURE__ */ S(
                "div",
                {
                  id: `${o}-item-${v}`,
                  role: "menuitem",
                  "aria-disabled": C || void 0,
                  tabIndex: C ? -1 : 0,
                  className: [At.item, E ? At.active : null, C ? At.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    C || f(u);
                  },
                  onMouseEnter: () => {
                    C || N(v);
                  },
                  children: [
                    u.icon ? /* @__PURE__ */ n("span", { className: At.icon, "aria-hidden": "true", children: u.icon }) : null,
                    /* @__PURE__ */ n("span", { className: At.text, children: u.text })
                  ]
                },
                `${u.text}-${v}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Pm = "_root_5fmpv_1", Bm = "_bottomRight_5fmpv_11", Fm = "_bottomLeft_5fmpv_16", qm = "_topRight_5fmpv_21", Km = "_topLeft_5fmpv_26", Hm = "_menu_5fmpv_31", Um = "_itemWrapper_5fmpv_48", Wm = "_tooltip_5fmpv_54", Vm = "_main_5fmpv_76", Xm = "_mainIcon_5fmpv_104", Gm = "_mainOpen_5fmpv_109", Ym = "_item_5fmpv_48", Zm = "_disabled_5fmpv_141", Jm = "_itemIcon_5fmpv_148", ut = {
  root: Pm,
  bottomRight: Bm,
  bottomLeft: Fm,
  topRight: qm,
  topLeft: Km,
  menu: Hm,
  itemWrapper: Um,
  tooltip: Wm,
  main: Vm,
  mainIcon: Xm,
  mainOpen: Gm,
  item: Ym,
  disabled: Zm,
  itemIcon: Jm
};
function Xb({
  items: e,
  position: t,
  Position: r,
  icon: s = "+",
  onClick: i,
  Click: c,
  ariaLabel: h = "Open menu",
  className: o
}) {
  const a = t ?? r ?? "bottom-right", p = `${Ye()}-menu`, d = le(null), $ = le(null), [b, N] = G(!1), w = q(
    (m) => {
      if (m.disabled) return;
      const k = { text: m.text, value: m.value };
      (i ?? c)?.(k), N(!1), $.current?.focus();
    },
    [i, c]
  );
  we(() => {
    if (!b) return;
    const m = (k) => {
      d.current && !d.current.contains(k.target) && N(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [b]), we(() => {
    if (!b) return;
    const m = (k) => {
      k.key === "Escape" && (N(!1), $.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [b]);
  const y = a === "bottom-right" ? ut.bottomRight : a === "bottom-left" ? ut.bottomLeft : a === "top-right" ? ut.topRight : ut.topLeft, f = (m) => {
    !b && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), N(!0)) : b && m.key === "Escape" && (m.preventDefault(), N(!1));
  }, _ = (m) => {
    m.key === "Escape" && (m.preventDefault(), N(!1), $.current?.focus());
  };
  return /* @__PURE__ */ S(
    "div",
    {
      ref: d,
      className: [ut.root, y, o].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        b ? /* @__PURE__ */ n(
          "div",
          {
            id: p,
            role: "menu",
            "aria-label": h,
            className: ut.menu,
            onKeyDown: _,
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
            "aria-expanded": b,
            "aria-controls": p,
            "aria-label": h,
            onClick: () => N((m) => !m),
            onKeyDown: f,
            children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [ut.mainIcon, b ? ut.mainOpen : null].filter(Boolean).join(" "), children: s })
          }
        )
      ]
    }
  );
}
const Qm = "_root_1qf28_1", eg = "_list_1qf28_5", tg = "_item_1qf28_15", ng = "_link_1qf28_22", rg = "_linkButton_1qf28_23", og = "_current_1qf28_24", sg = "_disabled_1qf28_68", ag = "_icon_1qf28_74", lg = "_text_1qf28_81", ig = "_separator_1qf28_85", Ue = {
  root: Qm,
  list: eg,
  item: tg,
  link: ng,
  linkButton: rg,
  current: og,
  disabled: sg,
  icon: ag,
  text: lg,
  separator: ig
};
function Gb({ items: e, onClick: t, Click: r, ariaLabel: s = "Breadcrumb", className: i }) {
  const c = t ?? r, h = (o) => {
    o.disabled || c?.({ text: o.text, path: o.path });
  };
  return /* @__PURE__ */ n("nav", { "aria-label": s, className: [Ue.root, i].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((o, a) => {
    const l = a === e.length - 1, p = !!o.disabled;
    return /* @__PURE__ */ S("li", { className: Ue.item, children: [
      l ? p ? /* @__PURE__ */ S(
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
      l ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
    ] }, `${o.text}-${a}`);
  }) }) });
}
const cg = "_root_yiemy_1", dg = "_list_yiemy_5", ug = "_item_yiemy_15", fg = "_connector_yiemy_21", _g = "_connectorCompleted_yiemy_30", pg = "_step_yiemy_34", hg = "_active_yiemy_69", mg = "_completed_yiemy_75", gg = "_circle_yiemy_79", yg = "_check_yiemy_109", bg = "_icon_yiemy_114", xg = "_number_yiemy_119", vg = "_text_yiemy_124", ft = {
  root: cg,
  list: dg,
  item: ug,
  connector: fg,
  connectorCompleted: _g,
  step: pg,
  active: hg,
  completed: mg,
  circle: gg,
  check: yg,
  icon: bg,
  number: xg,
  text: vg
};
function Yb({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: s = 0,
  linear: i,
  Linear: c,
  onChange: h,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: l = "Steps",
  className: p
}) {
  const d = i ?? c ?? !1, $ = t ?? r, b = $ !== void 0, [N, w] = G(() => Math.min(Math.max(0, $ ?? s), Math.max(0, e.length - 1))), f = Math.min(Math.max(0, b ? $ : N), Math.max(0, e.length - 1)), _ = le(null), m = q(
    (j) => {
      const u = Math.min(Math.max(0, j), Math.max(0, e.length - 1));
      b || w(u), (h ?? o ?? a)?.(u);
    },
    [b, h, o, a, e.length]
  ), k = q(
    (j, u) => !!(u.disabled || d && j > f + 1),
    [d, f]
  ), x = (j) => {
    const u = Array.from(
      j.currentTarget.querySelectorAll("button[data-step]")
    ).filter((E) => E.getAttribute("aria-disabled") !== "true" && !E.disabled), v = document.activeElement, C = v ? u.indexOf(v) : -1;
    if (j.key === "ArrowRight" || j.key === "ArrowDown") {
      if (j.preventDefault(), u.length === 0) return;
      const E = C === -1 ? 0 : (C + 1) % u.length, z = u[E];
      z && z.focus();
    } else if (j.key === "ArrowLeft" || j.key === "ArrowUp") {
      if (j.preventDefault(), u.length === 0) return;
      const E = C === -1 ? u.length - 1 : (C - 1 + u.length) % u.length, z = u[E];
      z && z.focus();
    } else j.key === "Home" ? (j.preventDefault(), u[0]?.focus()) : j.key === "End" && (j.preventDefault(), u[u.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": l,
      className: [ft.root, p].filter(Boolean).join(" "),
      onKeyDown: x,
      children: /* @__PURE__ */ n("ol", { ref: _, role: "list", className: ft.list, children: e.map((j, u) => {
        const v = u === f, C = u < f, E = k(u, j);
        return /* @__PURE__ */ S("li", { role: "listitem", className: ft.item, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: [ft.connector, C ? ft.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              "data-step": u,
              "aria-current": v ? "step" : void 0,
              "aria-disabled": E ? "true" : void 0,
              disabled: E,
              tabIndex: E ? -1 : 0,
              className: [
                ft.step,
                v ? ft.active : null,
                C ? ft.completed : null,
                E ? ft.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                E || m(u);
              },
              children: [
                /* @__PURE__ */ n("span", { className: ft.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ n("span", { className: ft.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Ce, { name: "check", size: "sm" }) }) : j.icon ? /* @__PURE__ */ n("span", { className: ft.icon, children: j.icon }) : /* @__PURE__ */ n("span", { className: ft.number, children: u + 1 }) }),
                /* @__PURE__ */ n("span", { className: ft.text, children: j.text })
              ]
            }
          )
        ] }, `${j.text}-${u}`);
      }) })
    }
  );
}
const kg = "_root_1fegn_1", wg = "_horizontal_1fegn_13", $g = "_vertical_1fegn_17", Ng = "_pane_1fegn_21", Sg = "_handle_1fegn_31", Dg = "_handleHorizontal_1fegn_51", Mg = "_handleVertical_1fegn_57", zg = "_handleGrip_1fegn_63", Cg = "_handleCollapseHint_1fegn_75", Og = "_collapseBtn_1fegn_79", jg = "_collapseBtnCollapsed_1fegn_109", $t = {
  root: kg,
  horizontal: wg,
  vertical: $g,
  pane: Ng,
  handle: Sg,
  handleHorizontal: Dg,
  handleVertical: Mg,
  handleGrip: zg,
  handleCollapseHint: Cg,
  collapseBtn: Og,
  collapseBtnCollapsed: jg
};
function On(e, t) {
  if (!e) return t;
  const r = e.trim();
  if (r.endsWith("%")) {
    const i = parseFloat(r.slice(0, -1));
    return Number.isNaN(i) ? t : i;
  }
  if (r.endsWith("px")) {
    const i = parseFloat(r.slice(0, -2));
    return Number.isNaN(i) ? t : i;
  }
  const s = parseFloat(r);
  return Number.isNaN(s) ? t : s;
}
function qt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Zb({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: s,
  Resize: i,
  onCollapse: c,
  Collapse: h,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const l = e ?? t ?? "horizontal", p = l === "horizontal", d = le(null), $ = q(() => {
    const g = r.length;
    if (g === 0) return [];
    const O = r.map((I) => I.size ? On(I.size, 100 / g) : 100 / g), L = O.reduce((I, R) => I + R, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? O.map((I) => I / L * 100) : O;
  }, [r]), [b, N] = G(() => $()), [w, y] = G(() => r.map((g) => !!g.collapsed)), f = le(b);
  we(() => {
    y(r.map((g) => !!g.collapsed));
  }, [r]);
  const _ = q(() => r.map((g) => On(g.min, 0)), [r]), m = q(() => r.map((g) => On(g.max, 100)), [r]), k = q(
    (g, O) => {
      const L = { paneIndex: g, newSize: O, cancel: !1 };
      return (s ?? i)?.(L), !L.cancel;
    },
    [s, i]
  ), x = q(
    (g, O) => {
      const L = { paneIndex: g, collapse: O, cancel: !1 };
      return (c ?? h)?.(L), !L.cancel;
    },
    [c, h]
  ), j = q(
    (g) => {
      const O = !w[g];
      x(g, O) && (O ? (f.current = [...b], y((L) => {
        const I = [...L];
        return I[g] !== void 0 && (I[g] = !0), I;
      }), N((L) => {
        const I = [...L], R = I[g] ?? 0, H = g < I.length - 1 ? g + 1 : g - 1;
        if (H >= 0 && H < I.length) {
          const V = I[H] ?? 0;
          I[H] = V + R, I[g] = 0;
        } else
          I[g] = 0;
        return I;
      })) : (y((L) => {
        const I = [...L];
        return I[g] !== void 0 && (I[g] = !1), I;
      }), N(() => {
        const L = [...f.current];
        return L.length !== r.length ? r.map(() => 100 / r.length) : L;
      })));
    },
    [w, b, r.length, x]
  ), u = le(null), v = q(
    (g, O, L) => {
      const I = d.current;
      if (!I) return null;
      const R = I.getBoundingClientRect();
      let H;
      if (p) {
        if (R.width === 0) return null;
        H = (O - R.left) / R.width * 100;
      } else {
        if (R.height === 0) return null;
        H = (L - R.top) / R.height * 100;
      }
      let V = 0;
      for (let ee = 0; ee < g; ee++) {
        const te = b[ee];
        te !== void 0 && (V += te);
      }
      return H - V;
    },
    [p, b]
  ), C = (g, O) => {
    O.preventDefault();
    const L = O.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(O.pointerId), u.current = { handleIndex: g, pointerId: O.pointerId };
  }, E = (g) => {
    if (!u.current || u.current.pointerId !== g.pointerId) return;
    g.preventDefault();
    const O = u.current.handleIndex, L = v(O, g.clientX, g.clientY);
    if (L == null) return;
    const I = _(), R = m(), H = I[O] ?? 0, V = R[O] ?? 100, Y = O + 1, ee = I[Y] ?? 0, te = R[Y] ?? 100, ue = b[O] ?? 0, U = b[Y] ?? 0, X = ue + U;
    if (X <= 0) return;
    let P = qt(L, H, V), se = X - P;
    if (se < ee) {
      if (se = ee, P = X - se, P < H || P > V) return;
    } else if (se > te && (se = te, P = X - se, P < H || P > V))
      return;
    P = qt(P, H, V), se = X - P, k(O, P) && N((J) => {
      const ce = [...J];
      return ce[O] = P, ce[Y] = se, ce;
    });
  }, z = (g) => {
    !u.current || u.current.pointerId !== g.pointerId || (u.current = null);
  }, D = (g, O) => {
    const L = _(), I = m(), R = g, H = g + 1, V = b[R] ?? 0, Y = b[H] ?? 0, ee = V + Y;
    let te = 0;
    const ue = !!r[R]?.collapsible, U = !!r[H]?.collapsible;
    if (p ? O.key === "ArrowLeft" ? te = -5 : O.key === "ArrowRight" && (te = 5) : O.key === "ArrowUp" ? te = -5 : O.key === "ArrowDown" && (te = 5), O.key === "Home") {
      O.preventDefault();
      let X = L[R] ?? 0, P = ee - X;
      if (P = qt(P, L[H] ?? 0, I[H] ?? 100), X = ee - P, X = qt(X, L[R] ?? 0, I[R] ?? 100), !k(R, X)) return;
      N((se) => {
        const J = [...se];
        return J[R] = X, J[H] = P, J;
      });
      return;
    }
    if (O.key === "End") {
      O.preventDefault();
      let X = I[R] ?? 100;
      X = Math.min(X, ee - (L[H] ?? 0));
      let P = ee - X;
      if (P = qt(P, L[H] ?? 0, I[H] ?? 100), X = ee - P, X = qt(X, L[R] ?? 0, I[R] ?? 100), !k(R, X)) return;
      N((se) => {
        const J = [...se];
        return J[R] = X, J[H] = P, J;
      });
      return;
    }
    if ((O.key === "Enter" || O.key === " ") && (ue || U)) {
      O.preventDefault(), j(ue ? R : H);
      return;
    }
    if (te !== 0) {
      O.preventDefault();
      let X = V + te, P = ee - X;
      const se = L[R] ?? 0, J = I[R] ?? 100, ce = L[H] ?? 0, ae = I[H] ?? 100;
      if (X = qt(X, se, J), P = ee - X, (P < ce || P > ae) && (P = qt(P, ce, ae), X = ee - P, X = qt(X, se, J), P = ee - X), !k(R, X)) return;
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
      className: [$t.root, p ? $t.horizontal : $t.vertical, a].filter(Boolean).join(" "),
      "aria-label": o,
      children: r.map((g, O) => {
        const L = !!w[O], I = L ? 0 : b[O] ?? 100 / r.length, R = L ? { display: "none" } : p ? { flexBasis: `${I}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${I}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, H = On(g.min, 0), V = On(g.max, 100), Y = O < r.length - 1, ee = !!r[O + 1]?.collapsible;
        return /* @__PURE__ */ S("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ S(
            "div",
            {
              role: "group",
              "aria-label": g.label ?? `Pane ${O + 1}`,
              className: $t.pane,
              style: R,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : g.children,
                g.collapsible && !L ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${O + 1}`,
                    "aria-expanded": !L,
                    onClick: () => j(O),
                    children: p ? "◀" : "▲"
                  }
                ) : null,
                g.collapsible && L ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${O + 1}`,
                    "aria-expanded": !L,
                    onClick: () => j(O),
                    children: p ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && g.collapsible ? (
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
                onClick: () => j(O),
                children: p ? "▶" : "▼"
              }
            )
          ) : null,
          Y ? /* @__PURE__ */ S(
            "div",
            {
              role: "separator",
              "aria-orientation": l,
              "aria-valuemin": H,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(I),
              "aria-label": `Resize handle ${O + 1}`,
              tabIndex: L || w[O + 1] ? -1 : 0,
              className: [$t.handle, p ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (te) => C(O, te),
              onPointerMove: E,
              onPointerUp: z,
              onKeyDown: (te) => D(O, te),
              children: [
                /* @__PURE__ */ n("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (g.collapsible || ee) && /* @__PURE__ */ n("span", { className: $t.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, O);
      })
    }
  );
}
const Eg = "_root_h36xh_1", Ig = "_list_h36xh_5", Ag = "_vertical_h36xh_14", Tg = "_horizontal_h36xh_20", Rg = "_item_h36xh_28", Lg = "_link_h36xh_32", Pg = "_active_h36xh_57", pn = {
  root: Eg,
  list: Ig,
  vertical: Ag,
  horizontal: Tg,
  item: Rg,
  link: Lg,
  active: Pg
};
function Jb({
  items: e,
  selector: t,
  Selector: r,
  orientation: s,
  Orientation: i,
  onClick: c,
  Click: h,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const l = t ?? r, p = s ?? i ?? "vertical", [d, $] = G(() => e[0]?.selector ?? null), b = le(d);
  b.current = d;
  const N = q(
    (w, y) => {
      if ($(w.selector), (c ?? h)?.({ text: w.text, selector: w.selector }), y) {
        try {
          y.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          y.scrollIntoView();
        }
        const _ = y;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [c, h]
  );
  return we(() => {
    if (e.length === 0) return;
    const y = (() => {
      if (l) {
        const x = document.querySelector(l);
        if (x) return x;
      }
      return window;
    })();
    let f = null;
    const _ = /* @__PURE__ */ new Map(), m = () => {
      let x = null, j = null;
      for (const v of e) {
        const C = document.querySelector(v.selector);
        if (!C) continue;
        _.set(v.selector, C);
        const E = C.getBoundingClientRect();
        let z = E.top;
        if (y !== window) {
          const D = y.getBoundingClientRect();
          z = E.top - D.top;
        }
        z <= 80 ? (!j || z > j.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && (j = { sel: v.selector, el: C }) : (!x || z < x.top) && (x = { sel: v.selector, top: z });
      }
      const u = j?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      u && u !== b.current && $(u);
    }, k = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const x = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: y, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      f = new IntersectionObserver((j) => {
        const u = j.filter((v) => v.isIntersecting).sort((v, C) => v.boundingClientRect.top - C.boundingClientRect.top);
        if (u[0]) {
          const v = u[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === v) {
              $(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && v.id === C.selector.slice(1)) {
              $(C.selector);
              break;
            }
          }
        } else
          m();
      }, x);
      for (const j of e) {
        const u = document.querySelector(j.selector);
        u && (f.observe(u), _.set(j.selector, u));
      }
    }
    return y === window ? (window.addEventListener("scroll", k, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", k), f?.disconnect();
    }) : (y.addEventListener("scroll", k, { passive: !0 }), m(), () => {
      y.removeEventListener("scroll", k), f?.disconnect();
    });
  }, [e, l]), /* @__PURE__ */ n("nav", { "aria-label": o, className: [pn.root, pn[p], a].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: pn.list, children: e.map((w) => {
    const y = w.selector === d;
    return /* @__PURE__ */ n("li", { className: pn.item, children: /* @__PURE__ */ n(
      "a",
      {
        href: w.selector.startsWith("#") || w.selector.startsWith(".") ? w.selector : `#${w.selector}`,
        className: [pn.link, y ? pn.active : null].filter(Boolean).join(" "),
        "aria-current": y ? "location" : void 0,
        onClick: (f) => {
          f.preventDefault();
          const _ = document.querySelector(w.selector);
          N(w, _);
        },
        children: w.text
      }
    ) }, `${w.text}-${w.selector}`);
  }) }) });
}
const Bg = "_root_c923v_1", Fg = "_viewport_c923v_17", qg = "_slide_c923v_24", Kg = "_active_c923v_33", Hg = "_arrow_c923v_37", Ug = "_prev_c923v_71", Wg = "_next_c923v_75", Vg = "_pauseBtn_c923v_79", Xg = "_indicators_c923v_110", Gg = "_indicator_c923v_110", Yg = "_indicatorActive_c923v_145", Nt = {
  root: Bg,
  viewport: Fg,
  slide: qg,
  active: Kg,
  arrow: Hg,
  prev: Ug,
  next: Wg,
  pauseBtn: Vg,
  indicators: Xg,
  indicator: Gg,
  indicatorActive: Yg
};
function Qb({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: s = 0,
  auto: i,
  Auto: c,
  interval: h,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: l,
  showArrows: p,
  ShowArrows: d,
  showIndicators: $,
  ShowIndicators: b,
  onChange: N,
  Change: w,
  ariaLabel: y = "Carousel",
  className: f
}) {
  const _ = t ?? r, m = _ !== void 0, [k, x] = G(() => Math.min(Math.max(0, _ ?? s), Math.max(0, e.length - 1))), j = m ? _ : k, u = e.length === 0 ? 0 : Math.min(Math.max(0, j), e.length - 1), v = i ?? c ?? !1, C = h ?? o ?? 3e3, E = a ?? l ?? !0, z = p ?? d ?? !0, D = $ ?? b ?? !0, [g, O] = G(!1), [L, I] = G(!1), R = g || L, H = le(null), V = Ye(), Y = q(
    (ce) => {
      const ae = e.length === 0 ? 0 : (ce % e.length + e.length) % e.length;
      m || x(ae), (N ?? w)?.(ae);
    },
    [m, N, w, e.length]
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
    if (!v || R || e.length <= 1) return;
    const ce = setInterval(() => {
      Y(u + 1);
    }, C);
    return () => clearInterval(ce);
  }, [v, R, C, u, Y, e.length]);
  const U = (ce) => {
    e.length !== 0 && (ce.key === "ArrowLeft" ? (ce.preventDefault(), ee()) : ce.key === "ArrowRight" ? (ce.preventDefault(), te()) : ce.key === "Home" ? (ce.preventDefault(), ue(0)) : ce.key === "End" && (ce.preventDefault(), ue(e.length - 1)));
  }, X = () => {
    E && v && I(!0);
  }, P = () => {
    E && v && I(!1);
  }, se = () => {
    E && v && I(!0);
  }, J = () => {
    E && v && I(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ S(
    "div",
    {
      ref: H,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [Nt.root, f].filter(Boolean).join(" "),
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
        z && e.length > 1 ? /* @__PURE__ */ S(je, { children: [
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
        v ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": g ? "Resume" : "Pause",
            "aria-pressed": g,
            onClick: () => O((ce) => !ce),
            children: g ? "▶" : "⏸"
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
const Zg = "_root_1ej0p_1", Jg = "_group_1ej0p_20", Qg = "_itemWrapper_1ej0p_30", e0 = "_treeitem_1ej0p_34", t0 = "_disabled_1ej0p_50", n0 = "_selected_1ej0p_60", r0 = "_caret_1ej0p_66", o0 = "_caretIcon_1ej0p_113", s0 = "_caretOpen_1ej0p_120", a0 = "_caretPlaceholder_1ej0p_124", l0 = "_label_1ej0p_130", i0 = "_loading_1ej0p_137", c0 = "_loadingRow_1ej0p_143", d0 = "_empty_1ej0p_149", u0 = "_checkbox_1ej0p_155", rt = {
  root: Zg,
  group: Jg,
  itemWrapper: Qg,
  treeitem: e0,
  disabled: t0,
  selected: n0,
  caret: r0,
  caretIcon: o0,
  caretOpen: s0,
  caretPlaceholder: a0,
  label: l0,
  loading: i0,
  loadingRow: c0,
  empty: d0,
  checkbox: u0
};
function f0({
  indeterminate: e,
  ...t
}) {
  const r = le(null);
  return we(() => {
    r.current && (r.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: r, type: "checkbox", ...t });
}
function e2({
  data: e,
  Data: t,
  children: r,
  Children: s,
  textProperty: i,
  TextProperty: c,
  keyProperty: h,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: l,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: $,
  SelectedItems: b,
  defaultSelectedItem: N,
  defaultSelectedItems: w,
  onChange: y,
  Change: f,
  onExpand: _,
  Expand: m,
  onCollapse: k,
  Collapse: x,
  loadChildData: j,
  LoadChildData: u,
  template: v,
  Template: C,
  itemTemplate: E,
  ItemTemplate: z,
  ariaLabel: D,
  AriaLabel: g,
  allowCheckBoxes: O = !1,
  checkedKeys: L,
  defaultCheckedKeys: I,
  onCheckedChange: R,
  allowCheckChildren: H = !0,
  className: V
}) {
  const Y = e ?? t ?? [], ee = r ?? s, te = i ?? c ?? "text", ue = h ?? o ?? "id", U = a ?? l ?? "single", X = D ?? g ?? "Tree", P = j ?? u, se = v ?? C ?? E ?? z, J = q(
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
      if (w && w.length > 0)
        return new Set(w.map((oe) => J(oe)));
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
  }, [U, N, w, J, ae, Y]), [M, F] = G(() => W()), ne = $e(() => {
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
          const _e = y ?? f;
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
          const _e = y ?? f;
          _e && _e({ item: B, selectedItem: B });
        } else {
          const _e = y ?? f;
          _e && _e({ item: B, selectedItem: B });
        }
    },
    [J, U, ne, et, y, f, re, fe]
  ), Ne = q(
    async (B) => {
      const Z = J(B);
      if (!!B.disabled) return;
      const pe = ke.has(Z), _e = _ ?? m, xe = k ?? x, Te = ae(B), T = ve.get(Z) ?? Te, he = !(T !== void 0 && T.length > 0) && P != null;
      if (pe) {
        Be((Ee) => {
          const Ie = new Set(Ee);
          return Ie.delete(Z), Ie;
        }), xe?.({ item: B });
        return;
      }
      if (he) {
        if (ye.has(Z)) return;
        Ze((Ee) => {
          const Ie = new Set(Ee);
          return Ie.add(Z), Ie;
        });
        try {
          const Ie = await P(B);
          We((ze) => {
            const at = new Map(ze);
            return at.set(Z, Ie), at;
          }), Be((ze) => {
            const at = new Set(ze);
            return at.add(Z), at;
          }), _e?.({ item: B });
        } catch {
        } finally {
          Ze((Ee) => {
            const Ie = new Set(Ee);
            return Ie.delete(Z), Ie;
          });
        }
        return;
      }
      Be((Ee) => {
        const Ie = new Set(Ee);
        return Ie.add(Z), Ie;
      }), _e?.({ item: B });
    },
    [J, ke, ae, ve, P, ye, _, m, k, x]
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
    () => new Set(I ?? [])
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
        const Ee = ke.has(A), Ie = !!xe.disabled, ze = oe.length, at = Te + 1;
        if (B.push({
          item: xe,
          key: A,
          text: T,
          level: pe,
          posInSet: at,
          setSize: ze,
          hasChildren: he,
          expanded: Ee,
          parentKey: _e,
          disabled: Ie
        }), he && Ee) {
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
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !oe)) return;
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
    const ie = ke.has(xe), he = ne.has(xe), Ee = !!pe.disabled, Ie = ye.has(xe), ze = Xe === xe, at = B.length, Mt = _e + 1, Zr = se ? se(pe) : Te, ur = O ? {
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
          "aria-disabled": Ee || void 0,
          "aria-busy": Ie || void 0,
          className: [
            rt.treeitem,
            he ? rt.selected : null,
            Ee ? rt.disabled : null,
            ze ? rt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            de(xe), Ee || me(pe);
          },
          onFocus: () => vt(xe),
          children: [
            O ? /* @__PURE__ */ n(
              f0,
              {
                className: rt.checkbox,
                checked: ur?.checked ?? !1,
                indeterminate: ur?.indeterminate ?? !1,
                disabled: Ee,
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
                disabled: Ee,
                onClick: (Rn) => {
                  Rn.stopPropagation(), de(xe), Ne(pe);
                },
                children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [rt.caretIcon, ie ? rt.caretOpen : null].filter(Boolean).join(" "), children: /* @__PURE__ */ n(Ce, { name: "chevron-right", size: 10 }) })
              }
            ) : /* @__PURE__ */ n("span", { className: rt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ n("span", { className: rt.label, children: Zr }),
            Ie ? /* @__PURE__ */ n("span", { className: rt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      T && ie ? Ie ? /* @__PURE__ */ n("div", { className: rt.loadingRow, "aria-busy": "true", children: "Loading…" }) : A && A.length > 0 ? Dt(A, Z + 1) : ve.has(xe) && ve.get(xe).length > 0 ? Dt(ve.get(xe), Z + 1) : (A && A.length === 0, null) : null
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
const _0 = "_root_u0yr1_1", p0 = "_panel_u0yr1_8", h0 = "_header_u0yr1_19", m0 = "_listbox_u0yr1_28", g0 = "_option_u0yr1_42", y0 = "_disabled_u0yr1_57", b0 = "_active_u0yr1_66", x0 = "_selected_u0yr1_70", v0 = "_empty_u0yr1_86", k0 = "_controls_u0yr1_93", w0 = "_reorder_u0yr1_102", $0 = "_btn_u0yr1_110", Re = {
  root: _0,
  panel: p0,
  header: h0,
  listbox: m0,
  option: g0,
  disabled: y0,
  active: b0,
  selected: x0,
  empty: v0,
  controls: k0,
  reorder: w0,
  btn: $0
};
function ot(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function Un(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function t2({
  source: e,
  Source: t,
  target: r,
  Target: s,
  value: i,
  Value: c,
  targetValue: h,
  TargetValue: o,
  data: a,
  Data: l,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: $,
  TargetChange: b,
  keyProperty: N,
  KeyProperty: w,
  onMove: y,
  Move: f,
  ariaLabel: _,
  AriaLabel: m,
  className: k
}) {
  const x = N ?? w ?? "id", j = _ ?? m ?? "PickList", u = e ?? t ?? i ?? c ?? a ?? l ?? [], v = r ?? s ?? h ?? o ?? [], [C, E] = G(() => [...u]), [z, D] = G(() => [...v]);
  we(() => {
    const M = e ?? t ?? i ?? c ?? a ?? l;
    M !== void 0 && E([...M]);
  }, [e, t, i, c, a, l]), we(() => {
    const M = r ?? s ?? h ?? o;
    M !== void 0 && D([...M]);
  }, [r, s, h, o]);
  const [g, O] = G(() => /* @__PURE__ */ new Set()), [L, I] = G(() => /* @__PURE__ */ new Set()), [R, H] = G(() => {
    const M = u.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), [V, Y] = G(() => {
    const M = v.findIndex((F) => !F.disabled);
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
        C.some((re) => ot(re, x) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [C, x]), we(() => {
    I((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        z.some((re) => ot(re, x) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [z, x]);
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
      (y ?? f)?.(M);
    },
    [y, f]
  ), P = q(
    (M) => {
      const F = C[M];
      if (!F || F.disabled) return;
      const ne = ot(F, x);
      O((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), H(M);
    },
    [C, x]
  ), se = q(
    (M) => {
      const F = z[M];
      if (!F || F.disabled) return;
      const ne = ot(F, x);
      I((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), Y(M);
    },
    [z, x]
  ), J = q(() => {
    const M = [], F = [];
    for (const me of C) {
      const Ne = ot(me, x);
      g.has(Ne) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, fe = [...z, ...M];
    E(ne), D(fe), O(/* @__PURE__ */ new Set());
    const re = new Set(M.map((me) => ot(me, x)));
    I(re), ue(ne), U(fe), X({ source: ne, target: fe, moved: M, direction: "toTarget" });
  }, [C, z, g, x, ue, U, X]), ce = q(() => {
    const M = [], F = [];
    for (const me of z) {
      const Ne = ot(me, x);
      L.has(Ne) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, fe = [...C, ...M];
    D(ne), E(fe), I(/* @__PURE__ */ new Set());
    const re = new Set(M.map((me) => ot(me, x)));
    O(re), ue(fe), U(ne), X({ source: fe, target: ne, moved: M, direction: "toSource" });
  }, [C, z, L, x, ue, U, X]), ae = q(() => {
    const M = C.filter((fe) => !fe.disabled);
    if (M.length === 0) return;
    const F = C.filter((fe) => !!fe.disabled), ne = [...z, ...M];
    E(F), D(ne), O(/* @__PURE__ */ new Set()), ue(F), U(ne), X({ source: F, target: ne, moved: M, direction: "allToTarget" });
  }, [C, z, x, ue, U, X]), be = q(() => {
    const M = z.filter((fe) => !fe.disabled);
    if (M.length === 0) return;
    const F = z.filter((fe) => !!fe.disabled), ne = [...C, ...M];
    D(F), E(ne), I(/* @__PURE__ */ new Set()), ue(ne), U(F), X({ source: ne, target: F, moved: M, direction: "allToSource" });
  }, [C, z, ue, U, X]), ke = q(() => {
    if (L.size === 0) return;
    const M = [...z], F = L, ne = [];
    for (let re = 1; re < M.length; re++) {
      const me = M[re], Ne = M[re - 1];
      if (!me || !Ne) continue;
      const Fe = ot(me, x), Je = ot(Ne, x);
      F.has(Fe) && !F.has(Je) && !me.disabled && !Ne.disabled && (M[re - 1] = me, M[re] = Ne, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), U(M), X({ source: C, target: M, moved: ne, direction: "up" });
    const fe = Array.from(F)[0];
    if (fe) {
      const re = M.findIndex((me) => ot(me, x) === fe);
      re >= 0 && Y(re);
    }
  }, [z, L, x, C, U, X]), Be = q(() => {
    if (L.size === 0) return;
    const M = [...z], F = L, ne = [];
    for (let re = M.length - 2; re >= 0; re--) {
      const me = M[re], Ne = M[re + 1];
      if (!me || !Ne) continue;
      const Fe = ot(me, x), Je = ot(Ne, x);
      F.has(Fe) && !F.has(Je) && !me.disabled && !Ne.disabled && (M[re] = Ne, M[re + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), U(M), X({ source: C, target: M, moved: ne, direction: "down" });
    const fe = Array.from(F)[0];
    if (fe) {
      const re = M.findIndex((me) => ot(me, x) === fe);
      re >= 0 && Y(re);
    }
  }, [z, L, x, C, U, X]), ve = g.size > 0, We = L.size > 0, ye = le(""), Ze = le(null), Ve = le(""), Le = le(null), tt = q(
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
  return /* @__PURE__ */ S("div", { className: [Re.root, k].filter(Boolean).join(" "), "aria-label": j, children: [
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
            const ne = ot(M, x), fe = g.has(ne), re = F === R, me = !!M.disabled;
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
            const ne = ot(M, x), fe = L.has(ne), re = F === V, me = !!M.disabled;
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
const N0 = "_root_1isbb_1", S0 = "_header_1isbb_8", D0 = "_title_1isbb_15", M0 = "_navBtn_1isbb_20", z0 = "_resources_1isbb_39", C0 = "_resource_1isbb_39", O0 = "_grid_1isbb_50", j0 = "_timeCol_1isbb_55", E0 = "_timeCell_1isbb_61", I0 = "_dayCol_1isbb_66", A0 = "_dayHeader_1isbb_73", T0 = "_slot_1isbb_81", R0 = "_event_1isbb_91", _t = {
  root: N0,
  header: S0,
  title: D0,
  navBtn: M0,
  resources: z0,
  resource: C0,
  grid: O0,
  timeCol: j0,
  timeCell: E0,
  dayCol: I0,
  dayHeader: A0,
  slot: T0,
  event: R0
};
function Ar(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function n2({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: s,
  resources: i,
  onEventClick: c,
  onSlotClick: h,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [l, p] = G(r ?? /* @__PURE__ */ new Date()), d = r ?? l, $ = (w) => {
    r || p(w), s?.(w);
  }, b = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (w, y) => {
    const f = new Date(d);
    return f.setDate(d.getDate() - d.getDay() + y), f;
  }) : Array.from({ length: 30 }, (w, y) => {
    const f = new Date(d);
    return f.setDate(1 + y), f;
  }), N = Array.from({ length: 12 }, (w, y) => 8 + y);
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
    i && /* @__PURE__ */ n("div", { className: _t.resources, children: i.map((w) => /* @__PURE__ */ n("div", { className: _t.resource, role: "presentation", "aria-label": w.name, children: w.name }, w.id)) }),
    /* @__PURE__ */ S("div", { className: _t.grid, role: "presentation", children: [
      /* @__PURE__ */ n("div", { className: _t.timeCol, role: "presentation", children: N.map((w) => /* @__PURE__ */ S("div", { className: _t.timeCell, children: [
        w,
        ":00"
      ] }, w)) }),
      b.map((w) => /* @__PURE__ */ S("div", { className: _t.dayCol, role: "presentation", title: w.toLocaleDateString(), onClick: () => h?.({ date: w }), tabIndex: 0, "aria-label": w.toLocaleDateString(), children: [
        /* @__PURE__ */ n("div", { className: _t.dayHeader, children: w.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        N.map((y) => /* @__PURE__ */ n("div", { className: _t.slot, tabIndex: -1, onClick: () => {
          const f = new Date(w);
          f.setHours(y), h?.({ date: f });
        } }, y)),
        e.filter((y) => y.start.toDateString() === w.toDateString()).map((y) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: _t.event,
            "aria-label": `${y.title} ${Ar(y.start)} - ${Ar(y.end)}`,
            "aria-pressed": !1,
            onClick: () => c?.({ event: y }),
            children: y.title
          },
          y.id
        ))
      ] }, w.toISOString()))
    ] })
  ] });
}
const L0 = "_root_uw4jr_1", P0 = "_header_uw4jr_8", B0 = "_headerCell_uw4jr_15", F0 = "_timeline_uw4jr_21", q0 = "_row_uw4jr_26", K0 = "_taskName_uw4jr_32", H0 = "_timelineCell_uw4jr_37", U0 = "_bar_uw4jr_43", W0 = "_progress_uw4jr_56", V0 = "_dep_uw4jr_61", Tt = {
  root: L0,
  header: P0,
  headerCell: B0,
  timeline: F0,
  row: q0,
  taskName: K0,
  timelineCell: H0,
  bar: U0,
  progress: W0,
  dep: V0
};
function r2({ tasks: e, view: t = "week", onTaskClick: r, ariaLabel: s = "Gantt", className: i }) {
  const [c, h] = G(null);
  return /* @__PURE__ */ S("div", { className: [Tt.root, i].filter(Boolean).join(" "), role: "grid", "aria-label": s, "aria-rowcount": e.length, children: [
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
            onKeyDown: (a) => {
              (a.key === "Enter" || a.key === " ") && (a.preventDefault(), h(o.id), r?.({ task: o }));
            },
            children: /* @__PURE__ */ n("div", { className: Tt.progress, style: { width: `${o.progress ?? 0}%` } })
          }
        ),
        o.dependencies?.map((a) => /* @__PURE__ */ n("svg", { className: Tt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-color-border)" }) }, a))
      ] })
    ] }, o.id))
  ] });
}
const X0 = "_root_iswin_1", G0 = "_fields_iswin_6", Y0 = "_chip_iswin_13", Z0 = "_table_iswin_35", J0 = "_totalRow_iswin_55", Q0 = "_total_iswin_55", hn = {
  root: X0,
  fields: G0,
  chip: Y0,
  table: Z0,
  totalRow: J0,
  total: Q0
}, Wn = {
  Sum: (e) => e.reduce((t, r) => t + r, 0),
  Average: (e) => e.length ? e.reduce((t, r) => t + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function jn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function o2({ data: e, rowFields: t = [], columnFields: r = [], aggregateFields: s = [], onFieldsChange: i, ariaLabel: c = "Pivot table", className: h }) {
  const o = t, a = r, l = s, p = (y, f, _) => {
    const m = y === "row" ? o.filter((j) => j.property !== f) : o, k = y === "col" ? a.filter((j) => j.property !== f) : a, x = y === "agg" ? l.filter((j) => !(j.property === f && j.aggregate === _)) : l;
    i?.({ rowFields: m, columnFields: k, aggregateFields: x });
  }, d = (y, f) => f.map((_) => String(y[_.property])).join(""), $ = [...new Set(o.length ? e.map((y) => d(y, o)) : [""])].sort(), b = [...new Set(a.length ? e.map((y) => d(y, a)) : [""])].sort(), N = (y, f, _) => {
    const m = e.filter((x) => d(x, o) === y && d(x, a) === f), k = m.map((x) => Number(x[_.property])).filter((x) => !Number.isNaN(x));
    return !k.length && _.aggregate !== "Count" ? 0 : Wn[_.aggregate](_.aggregate === "Count" ? m.map(() => 1) : k);
  }, w = (y, f, _, m) => /* @__PURE__ */ S(
    "button",
    {
      type: "button",
      className: hn.chip,
      "aria-label": `Remove ${y} field ${_}`,
      onClick: () => p(y, f, m),
      children: [
        _,
        m ? ` (${m})` : ""
      ]
    },
    `${y}-${_}-${m ?? ""}`
  );
  return /* @__PURE__ */ S("div", { className: [hn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ S("div", { className: hn.fields, children: [
      o.map((y) => w("row", y.property, y.title ?? y.property)),
      a.map((y) => w("col", y.property, y.title ?? y.property)),
      l.map((y) => w("agg", y.property, y.title ?? y.property, y.aggregate))
    ] }),
    /* @__PURE__ */ S("table", { className: hn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ S("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: o.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        b.map((y) => /* @__PURE__ */ n("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ S("tbody", { children: [
        $.map((y) => /* @__PURE__ */ S("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: y || "—" }),
          b.map((f) => /* @__PURE__ */ n("td", { title: jn(N(y, f, l[0] ?? { property: "", aggregate: "Count" })), children: l.length ? jn(N(y, f, l[0])) : "" }, f)),
          /* @__PURE__ */ n("td", { className: hn.total, children: l.length ? jn(
            Wn[l[0].aggregate](
              b.flatMap((f) => e.filter((_) => d(_, o) === y && d(_, a) === f).map((_) => Number(_[l[0].property]))).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ S("tr", { className: hn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((y) => /* @__PURE__ */ n("td", { children: l.length ? jn(
            Wn[l[0].aggregate](
              e.filter((f) => d(f, a) === y).map((f) => Number(f[l[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" }, y)),
          /* @__PURE__ */ n("td", { children: l.length ? jn(Wn[l[0].aggregate](e.map((y) => Number(y[l[0].property])).filter((y) => !Number.isNaN(y)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const ey = "_root_mkz78_1", ty = "_reverse_mkz78_10", ny = "_item_mkz78_14", ry = "_marker_mkz78_35", oy = "_body_mkz78_46", sy = "_label_mkz78_50", ay = "_content_mkz78_56", on = {
  root: ey,
  reverse: ty,
  item: ny,
  marker: ry,
  body: oy,
  label: sy,
  content: ay
};
function s2({ items: e, reverse: t = !1, ariaLabel: r = "Timeline", className: s }) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [on.root, t ? on.reverse : "", s].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: i.map((c, h) => /* @__PURE__ */ S("li", { className: on.item, children: [
        /* @__PURE__ */ n("span", { className: on.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ S("div", { className: on.body, children: [
          /* @__PURE__ */ n("div", { className: on.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: on.content, children: c.content })
        ] })
      ] }, h))
    }
  );
}
const ly = "_root_12pfj_1", iy = "_header_12pfj_13", cy = "_headCell_12pfj_22", dy = "_row_12pfj_32", uy = "_cell_12pfj_37", En = {
  root: ly,
  header: iy,
  headCell: cy,
  row: dy,
  cell: uy
};
function a2({ count: e, rowHeight: t = 40, height: r = 320, loadData: s, columns: i = [], ariaLabel: c = "Virtual grid", className: h }) {
  const [o, a] = G(/* @__PURE__ */ new Map()), [l, p] = G(0), d = le(/* @__PURE__ */ new Set()), $ = Math.ceil(r / t), b = Math.max(0, Math.floor(l / t) - 3), N = Math.min(e, b + $ + 6), w = q(
    (f, _) => {
      let m = !1;
      for (let k = f; k < _; k++)
        !o.has(k) && !d.current.has(k) && (m = !0);
      if (m) {
        for (let k = f; k < _; k++) d.current.add(k);
        s({ skip: f, top: _ }).then((k) => {
          a((x) => {
            const j = new Map(x);
            return k.forEach((u, v) => j.set(f + v, u)), j;
          });
          for (let x = f; x < _; x++) d.current.delete(x);
        });
      }
    },
    [o, s]
  );
  we(() => {
    w(b, N);
  }, [b, N]);
  const y = [];
  for (let f = b; f < N; f++) {
    const _ = o.get(f) ?? {};
    y.push(
      /* @__PURE__ */ n("div", { className: En.row, role: "row", style: { height: t }, children: i.map((m) => /* @__PURE__ */ n("div", { role: "gridcell", className: En.cell, style: m.width ? { width: m.width } : void 0, children: String(_[m.property] ?? "") }, m.property)) }, f)
    );
  }
  return /* @__PURE__ */ S(
    "div",
    {
      className: [En.root, h].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (f) => p(f.target.scrollTop),
      onKeyDown: (f) => {
        const _ = f.currentTarget;
        f.key === "ArrowDown" ? (f.preventDefault(), _.scrollTop += t) : f.key === "ArrowUp" ? (f.preventDefault(), _.scrollTop -= t) : f.key === "PageDown" ? (f.preventDefault(), _.scrollTop += r) : f.key === "PageUp" && (f.preventDefault(), _.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: b * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: En.header, role: "row", children: i.map((f) => /* @__PURE__ */ n("div", { role: "columnheader", className: En.headCell, style: { height: t, ...f.width ? { width: f.width } : {} }, children: f.title ?? f.property }, f.property)) }),
        y,
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
    constructor(o, a, l, p) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
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
      const $ = this.addEccAndInterleave(l);
      if (this.drawCodewords($), p == -1) {
        let b = 1e9;
        for (let N = 0; N < 8; N++) {
          this.applyMask(N), this.drawFormatBits(N);
          const w = this.getPenaltyScore();
          w < b && (p = N, b = w), this.applyMask(N);
        }
      }
      i(0 <= p && p <= 7), this.mask = p, this.applyMask(p), this.drawFormatBits(p), this.isFunction = [];
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
      const l = e.QrSegment.makeSegments(o);
      return t.encodeSegments(l, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, a) {
      const l = e.QrSegment.makeBytes(o);
      return t.encodeSegments([l], a);
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
    static encodeSegments(o, a, l = 1, p = 40, d = -1, $ = !0) {
      if (!(t.MIN_VERSION <= l && l <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let b, N;
      for (b = l; ; b++) {
        const _ = t.getNumDataCodewords(b, a) * 8, m = c.getTotalBits(o, b);
        if (m <= _) {
          N = m;
          break;
        }
        if (b >= p)
          throw new RangeError("Data too long");
      }
      for (const _ of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        $ && N <= t.getNumDataCodewords(b, _) * 8 && (a = _);
      let w = [];
      for (const _ of o) {
        r(_.mode.modeBits, 4, w), r(_.numChars, _.mode.numCharCountBits(b), w);
        for (const m of _.getData())
          w.push(m);
      }
      i(w.length == N);
      const y = t.getNumDataCodewords(b, a) * 8;
      i(w.length <= y), r(0, Math.min(4, y - w.length), w), r(0, (8 - w.length % 8) % 8, w), i(w.length % 8 == 0);
      for (let _ = 236; w.length < y; _ ^= 253)
        r(_, 8, w);
      let f = [];
      for (; f.length * 8 < w.length; )
        f.push(0);
      return w.forEach((_, m) => f[m >>> 3] |= _ << 7 - (m & 7)), new t(b, a, f, d);
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
      for (let l = 0; l < this.size; l++)
        this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), a = o.length;
      for (let l = 0; l < a; l++)
        for (let p = 0; p < a; p++)
          l == 0 && p == 0 || l == 0 && p == a - 1 || l == a - 1 && p == 0 || this.drawAlignmentPattern(o[l], o[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let l = a;
      for (let d = 0; d < 10; d++)
        l = l << 1 ^ (l >>> 9) * 1335;
      const p = (a << 10 | l) ^ 21522;
      i(p >>> 15 == 0);
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
      for (let l = 0; l < 12; l++)
        o = o << 1 ^ (o >>> 11) * 7973;
      const a = this.version << 12 | o;
      i(a >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const p = s(a, l), d = this.size - 11 + l % 3, $ = Math.floor(l / 3);
        this.setFunctionModule(d, $, p), this.setFunctionModule($, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let l = -4; l <= 4; l++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(l)), $ = o + p, b = a + l;
          0 <= $ && $ < this.size && 0 <= b && b < this.size && this.setFunctionModule($, b, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let l = -2; l <= 2; l++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(o + p, a + l, Math.max(Math.abs(p), Math.abs(l)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, a, l) {
      this.modules[a][o] = l, this.isFunction[a][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const a = this.version, l = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(a, l))
        throw new RangeError("Invalid argument");
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][a], $ = Math.floor(t.getNumRawDataModules(a) / 8), b = p - $ % p, N = Math.floor($ / p);
      let w = [];
      const y = t.reedSolomonComputeDivisor(d);
      for (let _ = 0, m = 0; _ < p; _++) {
        let k = o.slice(m, m + N - d + (_ < b ? 0 : 1));
        m += k.length;
        const x = t.reedSolomonComputeRemainder(k, y);
        _ < b && k.push(0), w.push(k.concat(x));
      }
      let f = [];
      for (let _ = 0; _ < w[0].length; _++)
        w.forEach((m, k) => {
          (_ != N - d || k >= b) && f.push(m[_]);
        });
      return i(f.length == $), f;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const $ = l - d, N = (l + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[N][$] && a < o.length * 8 && (this.modules[N][$] = s(o[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      i(a == o.length * 8);
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
        for (let l = 0; l < this.size; l++) {
          let p;
          switch (o) {
            case 0:
              p = (l + a) % 2 == 0;
              break;
            case 1:
              p = a % 2 == 0;
              break;
            case 2:
              p = l % 3 == 0;
              break;
            case 3:
              p = (l + a) % 3 == 0;
              break;
            case 4:
              p = (Math.floor(l / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              p = l * a % 2 + l * a % 3 == 0;
              break;
            case 6:
              p = (l * a % 2 + l * a % 3) % 2 == 0;
              break;
            case 7:
              p = ((l + a) % 2 + l * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][l] && p && (this.modules[a][l] = !this.modules[a][l]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let d = 0; d < this.size; d++) {
        let $ = !1, b = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[d][w] == $ ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, N), $ || (o += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[d][w], b = 1);
        o += this.finderPenaltyTerminateAndCount($, b, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let $ = !1, b = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[w][d] == $ ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, N), $ || (o += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[w][d], b = 1);
        o += this.finderPenaltyTerminateAndCount($, b, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let $ = 0; $ < this.size - 1; $++) {
          const b = this.modules[d][$];
          b == this.modules[d][$ + 1] && b == this.modules[d + 1][$] && b == this.modules[d + 1][$ + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce(($, b) => $ + (b ? 1 : 0), a);
      const l = this.size * this.size, p = Math.ceil(Math.abs(a * 20 - l * 10) / l) - 1;
      return i(0 <= p && p <= 9), o += p * t.PENALTY_N4, i(0 <= o && o <= 2568888), o;
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
        let l = [6];
        for (let p = this.size - 7; l.length < o; p -= a)
          l.splice(1, 0, p);
        return l;
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
        const l = Math.floor(o / 7) + 2;
        a -= (25 * l - 10) * l - 55, o >= 7 && (a -= 36);
      }
      return i(208 <= a && a <= 29648), a;
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
      let l = 1;
      for (let p = 0; p < o; p++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], l), d + 1 < a.length && (a[d] ^= a[d + 1]);
        l = t.reedSolomonMultiply(l, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let l = a.map((p) => 0);
      for (const p of o) {
        const d = p ^ l.shift();
        l.push(0), a.forEach(($, b) => l[b] ^= t.reedSolomonMultiply($, d));
      }
      return l;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, a) {
      if (o >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let l = 0;
      for (let p = 7; p >= 0; p--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (a >>> p & 1) * o;
      return i(l >>> 8 == 0), l;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const a = o[1];
      i(a <= this.size * 3);
      const l = a > 0 && o[2] == a && o[3] == a * 3 && o[4] == a && o[5] == a;
      return (l && o[0] >= a * 4 && o[6] >= a ? 1 : 0) + (l && o[6] >= a * 4 && o[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, a, l) {
      return o && (this.finderPenaltyAddHistory(a, l), a = 0), a += this.size, this.finderPenaltyAddHistory(a, l), this.finderPenaltyCountPatterns(l);
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
    for (let l = o - 1; l >= 0; l--)
      a.push(h >>> l & 1);
  }
  function s(h, o) {
    return (h >>> o & 1) != 0;
  }
  function i(h) {
    if (!h)
      throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, a, l) {
      if (this.mode = o, this.numChars = a, this.bitData = l, a < 0)
        throw new RangeError("Invalid argument");
      this.bitData = l.slice();
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
      for (const l of o)
        r(l, 8, a);
      return new c(c.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let l = 0; l < o.length; ) {
        const p = Math.min(o.length - l, 3);
        r(parseInt(o.substring(l, l + p), 10), p * 3 + 1, a), l += p;
      }
      return new c(c.Mode.NUMERIC, o.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!c.isAlphanumeric(o))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let a = [], l;
      for (l = 0; l + 2 <= o.length; l += 2) {
        let p = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(l)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(l + 1)), r(p, 11, a);
      }
      return l < o.length && r(c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(l)), 6, a), new c(c.Mode.ALPHANUMERIC, o.length, a);
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
      let l = 0;
      for (const p of o) {
        const d = p.mode.numCharCountBits(a);
        if (p.numChars >= 1 << d)
          return 1 / 0;
        l += 4 + d + p.bitData.length;
      }
      return l;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let a = [];
      for (let l = 0; l < o.length; l++)
        o.charAt(l) != "%" ? a.push(o.charCodeAt(l)) : (a.push(parseInt(o.substring(l + 1, l + 3), 16)), l += 2);
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
      constructor(i, c) {
        this.ordinal = i, this.formatBits = c;
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
      constructor(i, c) {
        this.modeBits = i, this.numBitsCharCount = c;
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
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    }
    t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(Ot || (Ot = {}));
const fy = "_root_1leml_1", _y = {
  root: fy
}, py = {
  low: Ot.QrCode.Ecc.LOW,
  medium: Ot.QrCode.Ecc.MEDIUM,
  quartile: Ot.QrCode.Ecc.QUARTILE,
  high: Ot.QrCode.Ecc.HIGH
};
function l2({
  value: e,
  size: t = 128,
  render: r = "svg",
  errorCorrection: s = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: h,
  onError: o
}) {
  const a = c ?? `QR code for ${e}`, l = le(null), p = Xr("(prefers-color-scheme: dark)"), [d, $] = G(null);
  we(() => {
    const k = document.documentElement;
    $(k.dataset.theme ?? null);
    const x = new MutationObserver(() => {
      $(k.dataset.theme ?? null);
    });
    return x.observe(k, { attributes: !0, attributeFilter: ["data-theme"] }), () => x.disconnect();
  }, []);
  const b = $e(() => {
    try {
      return Ot.QrCode.encodeText(e, py[s]);
    } catch {
      return null;
    }
  }, [e, s]), N = le(null);
  we(() => {
    if (b !== null) {
      N.current = null;
      return;
    }
    const k = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(k), (N.current?.value !== e || N.current?.onError !== o) && (N.current = { value: e, onError: o }, o?.(k));
  }, [b, e, o]);
  const w = Math.max(0, Math.floor(i)), y = [_y.root, h].filter(Boolean).join(" ");
  if (we(() => {
    if (r !== "canvas" || b === null) return;
    const k = l.current, x = k?.getContext("2d");
    if (!k || !x) return;
    const j = getComputedStyle(k), u = j.getPropertyValue("--dx-color-text").trim() || "#000", v = j.getPropertyValue("--dx-color-surface").trim() || "#fff";
    hy(x, b, t, w, u, v);
  }, [r, b, t, w, p, d]), b === null)
    return /* @__PURE__ */ n("div", { className: y, role: "img", "aria-label": a, "data-qr-error": "true" });
  const f = b.size + w * 2, _ = t / f;
  if (r === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: l,
        className: y,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const m = [];
  for (let k = 0; k < b.size; k++)
    for (let x = 0; x < b.size; x++)
      b.getModule(x, k) && m.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (x + w) * _,
            y: (k + w) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${x}-${k}`
        )
      );
  return /* @__PURE__ */ S(
    "svg",
    {
      className: y,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-color-surface)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-color-text)", children: m })
      ]
    }
  );
}
function hy(e, t, r, s, i, c) {
  const h = r / (t.size + s * 2);
  e.fillStyle = c, e.fillRect(0, 0, r, r), e.fillStyle = i;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + s) * h, (o + s) * h, h + 0.5, h + 0.5);
}
const my = "_root_xfffn_1", gy = "_value_xfffn_9", Tr = {
  root: my,
  value: gy
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
], Lr = 104, yy = 106;
function by(e) {
  const t = [Lr];
  for (let s = 0; s < e.length; s++) {
    const i = e.charCodeAt(s);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let r = Lr;
  for (let s = 1; s < t.length; s++) r += s * t[s];
  return t.push(r % 103, yy), t;
}
function i2({ value: e, format: t = "Code128", height: r = 60, showValue: s = !1, ariaLabel: i, className: c }) {
  const h = i ?? `Barcode ${e}`, o = $e(() => {
    const a = [];
    let l = 0;
    for (const p of by(e)) {
      const d = Rr[p] ?? Rr[0];
      for (let $ = 0; $ < d.length; $++) {
        const b = Number(d[$]);
        $ % 2 === 0 && a.push({ x: l, w: b }), l += b;
      }
    }
    return { modules: a, total: l };
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
          o.modules.map((a, l) => /* @__PURE__ */ n("rect", { x: a.x, y: 0, width: a.w, height: r, fill: "var(--dx-color-text)" }, l))
        ]
      }
    ),
    s && /* @__PURE__ */ n("span", { className: Tr.value, children: e })
  ] });
}
const xy = "_root_x813o_1", vy = "_svg_x813o_10", ky = "_gridline_x813o_15", wy = "_tickLabel_x813o_21", $y = "_axisTitle_x813o_27", Ny = "_dataLabel_x813o_34", Sy = "_legend_x813o_40", Dy = "_legendItem_x813o_48", My = "_swatch_x813o_56", zy = "_tooltip_x813o_63", Cy = "_visuallyHidden_x813o_77", st = {
  root: xy,
  svg: vy,
  gridline: ky,
  tickLabel: wy,
  axisTitle: $y,
  dataLabel: Ny,
  legend: Sy,
  legendItem: Dy,
  swatch: My,
  tooltip: zy,
  visuallyHidden: Cy
}, Pr = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function Oy(e, t, r) {
  const s = t - e || 1, i = r ?? Math.pow(10, Math.floor(Math.log10(s / 4))), c = Math.floor(e / i) * i, h = Math.ceil(t / i) * i, o = [];
  for (let a = c; a <= h + 1e-9; a += i) o.push(Number(a.toFixed(6)));
  return { min: c, max: h, step: i, ticks: o };
}
function c2({
  series: e,
  width: t = 600,
  height: r = 400,
  valueAxis: s,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: h = !0,
  onSeriesClick: o,
  ariaLabel: a = "Chart",
  className: l
}) {
  const [p, d] = G(null), $ = $e(() => {
    const u = /* @__PURE__ */ new Set();
    for (const v of e) for (const C of v.data) u.add(String(C[v.categoryProperty] ?? ""));
    return [...u];
  }, [e]), b = $e(() => e.flatMap((u) => u.data.map((v) => Number(v[u.valueProperty]))).filter((u) => !Number.isNaN(u)), [e]), N = s?.min ?? (b.length ? Math.min(0, ...b) : 0), w = s?.max ?? (b.length ? Math.max(...b) : 10), y = $e(() => Oy(N, w, s?.step), [N, w, s?.step]), f = { t: 16, r: 16, b: 40, l: 56 }, _ = t - f.l - f.r, m = r - f.t - f.b, k = (u) => f.l + u / Math.max(1, $.length - 1) * _, x = (u) => f.t + (1 - (u - y.min) / (y.max - y.min || 1)) * m, j = (u, v) => v.color ?? Pr[u % Pr.length];
  return /* @__PURE__ */ S("figure", { className: [st.root, l].filter(Boolean).join(" "), role: "img", "aria-label": a, "aria-describedby": `${a.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ S("svg", { width: t, height: r, className: st.svg, role: "presentation", children: [
      s?.gridlines !== !1 && y.ticks.map((u) => /* @__PURE__ */ n("line", { x1: f.l, x2: f.l + _, y1: x(u), y2: x(u), className: st.gridline }, u)),
      i?.gridlines && $.map((u, v) => /* @__PURE__ */ n("line", { x1: k(v), x2: k(v), y1: f.t, y2: f.t + m, className: st.gridline }, v)),
      y.ticks.map((u) => /* @__PURE__ */ n("text", { x: f.l - 8, y: x(u) + 4, textAnchor: "end", className: st.tickLabel, children: u }, u)),
      $.map((u, v) => /* @__PURE__ */ n("text", { x: k(v), y: f.t + m + 16, textAnchor: "middle", className: st.tickLabel, children: u }, u)),
      s?.title && /* @__PURE__ */ n("text", { x: 12, y: f.t + m / 2, textAnchor: "middle", transform: `rotate(-90,12,${f.t + m / 2})`, className: st.axisTitle, children: s.title }),
      i?.title && /* @__PURE__ */ n("text", { x: f.l + _ / 2, y: r - 4, textAnchor: "middle", className: st.axisTitle, children: i.title }),
      (() => {
        const u = /* @__PURE__ */ new Map();
        for (const E of e)
          if (E.stack)
            for (const z of E.data) {
              const D = String(z[E.categoryProperty] ?? ""), g = Number(z[E.valueProperty]);
              if (Number.isNaN(g)) continue;
              u.has(E.stack) || u.set(E.stack, /* @__PURE__ */ new Map());
              const O = u.get(E.stack);
              O.set(D, (O.get(D) ?? 0) + g);
            }
        const v = e.filter((E) => E.type === "pie" || E.type === "donut"), C = /* @__PURE__ */ new Map();
        for (const E of v) {
          const z = E.data.reduce((D, g) => D + (Number(g[E.valueProperty]) || 0), 0);
          C.set(E, z);
        }
        return e.map((E, z) => {
          const D = E.data.map((I) => ({
            cat: String(I[E.categoryProperty] ?? ""),
            val: Number(I[E.valueProperty]),
            size: E.sizeProperty ? Number(I[E.sizeProperty]) : void 0,
            item: I
          })), g = new Map($.map((I, R) => [I, R])), O = j(z, E);
          if (E.type === "pie" || E.type === "donut") {
            const I = f.l + _ / 2, R = f.t + m / 2, H = Math.min(_, m) / 3, V = E.type === "donut" ? E.innerRadius ?? H * 0.5 : 0, Y = C.get(E) ?? D.reduce((te, ue) => te + ue.val, 0);
            let ee = -90;
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": E.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: E.title ?? `Series ${z + 1}` }),
              D.map((te, ue) => {
                const U = Y ? te.val / Y * 360 : 0, X = ee, P = ee + U;
                ee = P;
                const se = U > 180 ? 1 : 0, J = (Qe) => Qe * Math.PI / 180, ce = I + H * Math.cos(J(X)), ae = R + H * Math.sin(J(X)), be = I + H * Math.cos(J(P)), ke = R + H * Math.sin(J(P)), Be = I + V * Math.cos(J(P)), ve = R + V * Math.sin(J(P)), We = I + V * Math.cos(J(X)), ye = R + V * Math.sin(J(X)), Ze = V ? `M ${ce} ${ae} A ${H} ${H} 0 ${se} 1 ${be} ${ke} L ${Be} ${ve} A ${V} ${V} 0 ${se} 0 ${We} ${ye} Z` : `M ${I} ${R} L ${ce} ${ae} A ${H} ${H} 0 ${se} 1 ${be} ${ke} Z`, Ve = (X + P) / 2, Le = I + (H + 12) * Math.cos(J(Ve)), tt = R + (H + 12) * Math.sin(J(Ve));
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n(
                    "path",
                    {
                      d: Ze,
                      fill: O,
                      stroke: "var(--dx-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => h && d({ x: Le, y: tt, text: `${E.title ?? te.cat}: ${te.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => o?.({ seriesTitle: E.title ?? "", category: te.cat, value: te.val, item: te.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  E.labels?.visible && /* @__PURE__ */ n("text", { x: Le, y: tt, textAnchor: "middle", className: st.dataLabel, children: te.val })
                ] }, ue);
              })
            ] }, z);
          }
          if (E.type === "scatter" || E.type === "bubble")
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": E.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: E.title ?? `Series ${z + 1}` }),
              D.map((I, R) => {
                const H = g.get(I.cat) ?? 0, V = Number(D[R].cat), Y = Number.isNaN(V) ? k(H) : f.l + (V - y.min) / (y.max - y.min || 1) * _, ee = x(I.val), te = E.type === "bubble" && I.size !== void 0 ? Math.max(4, Math.min(12, I.size / 10)) : 4;
                return /* @__PURE__ */ S("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: Y, cy: ee, r: te, fill: O, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      cx: Y,
                      cy: ee,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => h && d({ x: Y, y: ee, text: `${E.title ?? I.cat}: ${I.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => o?.({ seriesTitle: E.title ?? "", category: I.cat, value: I.val, item: I.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, R);
              })
            ] }, z);
          if (E.type === "line" || E.type === "area") {
            const I = (V) => {
              if (!E.stack) return y.min;
              let Y = 0;
              for (let ee = 0; ee < z; ee++) {
                const te = e[ee];
                if (te?.stack !== E.stack) continue;
                const ue = te.data.find((U) => String(U[te.categoryProperty] ?? "") === V);
                ue && (Y += Number(ue[te.valueProperty]) || 0);
              }
              return Y;
            }, R = D.map((V) => {
              const Y = g.get(V.cat) ?? 0, ee = I(V.cat);
              return `${Y === 0 ? "M" : "L"} ${k(Y)} ${x(ee + V.val)}`;
            }).join(" "), H = D.map((V) => {
              const Y = g.get(V.cat) ?? 0, ee = I(V.cat);
              return `${Y === 0 ? "M" : "L"} ${k(Y)} ${x(ee)}`;
            }).join(" ");
            return /* @__PURE__ */ S("g", { role: "list", "aria-label": E.title ?? `Series ${z + 1}`, children: [
              /* @__PURE__ */ n("title", { children: E.title ?? `Series ${z + 1}` }),
              E.type === "area" && /* @__PURE__ */ n("path", { d: `${R} L ${k(D.length - 1)} ${x(I(D[D.length - 1].cat))} L ${k(0)} ${x(I(D[0].cat))} Z`, fill: O, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ n("path", { d: R, fill: "none", stroke: O, strokeWidth: 2 }),
              E.stack && /* @__PURE__ */ n("path", { d: H, fill: "none", stroke: "transparent" }),
              D.map((V, Y) => {
                const ee = g.get(V.cat) ?? 0, te = I(V.cat), ue = k(ee), U = x(te + V.val);
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
                      onMouseEnter: () => h && d({ x: ue, y: U, text: `${E.title ?? V.cat}: ${V.val}` }),
                      onMouseLeave: () => d(null),
                      onFocus: () => h && d({ x: ue, y: U, text: `${E.title ?? V.cat}: ${V.val}` }),
                      onBlur: () => d(null),
                      onClick: () => o?.({ seriesTitle: E.title ?? "", category: V.cat, value: V.val, item: V.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  E.labels?.visible && /* @__PURE__ */ n("text", { x: ue, y: U - 8, textAnchor: "middle", className: st.dataLabel, children: V.val })
                ] }, Y);
              })
            ] }, z);
          }
          const L = E.type === "bar";
          return /* @__PURE__ */ S("g", { role: "list", "aria-label": E.title ?? `Series ${z + 1}`, children: [
            /* @__PURE__ */ n("title", { children: E.title ?? `Series ${z + 1}` }),
            D.map((I, R) => {
              const H = g.get(I.cat) ?? 0;
              let V = 0;
              if (E.stack)
                for (let ae = 0; ae < z; ae++) {
                  const be = e[ae];
                  if (be?.stack !== E.stack) continue;
                  const ke = be.data.find((Be) => String(Be[be.categoryProperty] ?? "") === I.cat);
                  ke && (V += Number(ke[be.valueProperty]) || 0);
                }
              const Y = V + I.val, ee = e.filter((ae) => !ae.stack || ae.stack === E.stack).length, te = _ / $.length, ue = L ? 18 : Math.max(12, te / (E.stack ? 1 : e.length) - 4), U = L ? f.l + V / (y.max - y.min || 1) * _ : k(H) - ue / 2 + (E.stack ? 0 : z % ee * ue), X = L ? f.t + H * m / $.length + 4 : x(Y), P = L ? I.val / (y.max - y.min || 1) * _ : ue - 4, se = L ? 16 : x(V) - x(Y), J = L ? f.l + V / (y.max - y.min || 1) * _ : U, ce = L ? f.t + H * m / $.length + 4 : X;
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
                    onMouseEnter: () => h && d({ x: J + (L ? P : ue) / 2, y: ce, text: `${E.title ?? I.cat}: ${I.val}` }),
                    onMouseLeave: () => d(null),
                    onClick: () => o?.({ seriesTitle: E.title ?? "", category: I.cat, value: I.val, item: I.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                E.labels?.visible && /* @__PURE__ */ n("text", { x: J + (L ? P : ue) / 2, y: ce - 4, textAnchor: "middle", className: st.dataLabel, children: I.val })
              ] }, R);
            })
          ] }, z);
        });
      })()
    ] }),
    p && /* @__PURE__ */ n("div", { className: st.tooltip, style: { left: p.x, top: p.y - 28 }, children: p.text }),
    c && /* @__PURE__ */ n("div", { className: st.legend, children: e.map((u, v) => /* @__PURE__ */ S("span", { className: st.legendItem, children: [
      /* @__PURE__ */ n("span", { className: st.swatch, style: { backgroundColor: j(v, u) }, "aria-hidden": "true" }),
      u.title ?? `Series ${v + 1}`
    ] }, v)) }),
    /* @__PURE__ */ S("table", { className: st.visuallyHidden, id: `${a.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ n("caption", { children: a }),
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ S("tr", { children: [
        /* @__PURE__ */ n("th", { children: "Series" }),
        /* @__PURE__ */ n("th", { children: "Category" }),
        /* @__PURE__ */ n("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ n("tbody", { children: e.map(
        (u) => u.data.map((v, C) => /* @__PURE__ */ S("tr", { children: [
          /* @__PURE__ */ n("td", { children: u.title ?? "" }),
          /* @__PURE__ */ n("td", { children: String(v[u.categoryProperty] ?? "") }),
          /* @__PURE__ */ n("td", { children: String(v[u.valueProperty] ?? "") })
        ] }, `${u.title}-${C}`))
      ) })
    ] })
  ] });
}
export {
  Yi as ALERT_ICON,
  vb as Accordion,
  cb as Alert,
  Nb as Autocomplete,
  bb as Avatar,
  Ty as Badge,
  i2 as Barcode,
  hb as Body,
  Gb as Breadcrumb,
  Iy as Button,
  Ay as Card,
  Qb as Carousel,
  c2 as Chart,
  ob as Checkbox,
  Db as Checkboxlist,
  Tb as Colorpicker,
  fb as Column,
  vn as DEFAULT_OPERATOR_BY_TYPE,
  dh as DEFAULT_PALETTE,
  Qy as DataFilter,
  eb as DataGrid,
  tb as DataList,
  Rb as Datepicker,
  ab as Dialog,
  Hb as DropZone,
  $b as Dropdown,
  By as EmptyState,
  Hr as FILTER_OPERATORS,
  Xb as FabMenu,
  Fy as Field,
  Mf as Footer,
  qy as Form,
  r2 as Gantt,
  Of as Header,
  Ce as Icon,
  rb as Input,
  nb as Label,
  pb as Layout,
  Sb as Listbox,
  Ib as Mask,
  Ub as Menu,
  Ab as Numeric,
  Ca as Pager,
  Wb as PanelMenu,
  Eb as Password,
  t2 as PickList,
  o2 as Pivot,
  Vb as ProfileMenu,
  mb as Progress,
  l2 as QRCode,
  Mb as Radiobuttonlist,
  Lb as Rating,
  ub as Row,
  n2 as Scheduler,
  Fb as SecurityCode,
  mn as Select,
  zb as Selectbar,
  Pf as Sidebar,
  qb as SignaturePad,
  db as Skeleton,
  Pb as Slider,
  Ob as Splitbutton,
  Zb as Splitter,
  _b as Stack,
  Ly as Stat,
  Yb as Steps,
  Kl as Switch,
  Py as Table,
  xb as Tabs,
  kb as Textarea,
  jb as Textbox,
  yb as ThemeSwitcher,
  s2 as Timeline,
  Bb as Timespanpicker,
  ib as ToastProvider,
  Jb as Toc,
  Cb as Togglebutton,
  sb as Tooltip,
  e2 as Tree,
  wb as Typography,
  Kb as Upload,
  a2 as VirtualGrid,
  Wr as applyFilters,
  Ra as applyGridState,
  wn as columnValue,
  Gy as compare,
  Zy as custom,
  Ia as cycleSort,
  La as defaultOperatorForType,
  Hy as email,
  Sr as formatMasked,
  yr as formatValue,
  Xn as getByPath,
  Ry as iconNames,
  Ur as matchesFilters,
  Vy as maxLength,
  Wy as minLength,
  Ta as paginate,
  Uy as pattern,
  Xy as range,
  Ky as required,
  Yy as requiredTrue,
  cr as resolveVariant,
  Rs as runValidators,
  gb as shadeClass,
  ea as sortItems,
  Aa as sortedItems,
  Gs as toFilterString,
  Qs as toODataFilterString,
  Ts as useFormContext,
  Jy as useFormField,
  Xr as useMediaQuery,
  lb as useToast
};
