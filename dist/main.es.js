import { jsxs as k, jsx as t, Fragment as Me } from "react/jsx-runtime";
import { forwardRef as Ke, useId as Ve, isValidElement as zn, cloneElement as Cr, useState as Y, useRef as le, useCallback as K, useMemo as ve, useContext as Mr, createContext as Or, useEffect as Ne, Children as qr, useImperativeHandle as nr } from "react";
const Fr = "_button_1uim6_1", Kr = "_filled_1uim6_29", Hr = "_flat_1uim6_30", Wr = "_outlined_1uim6_31", Vr = "_text_1uim6_32", Ur = "_primary_1uim6_108", Xr = "_secondary_1uim6_110", Gr = "_ghost_1uim6_112", Yr = "_danger_1uim6_114", Zr = "_success_1uim6_116", Jr = "_info_1uim6_118", Qr = "_loading_1uim6_122", eo = "_spinner_1uim6_125", to = "_xs_1uim6_137", no = "_sm_1uim6_143", ro = "_md_1uim6_149", oo = "_lg_1uim6_155", so = "_xl_1uim6_161", ao = "_iconOnly_1uim6_167", lo = "_fullWidth_1uim6_193", kt = {
  button: Fr,
  filled: Kr,
  flat: Hr,
  outlined: Wr,
  text: Vr,
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
  primary: Ur,
  secondary: Xr,
  ghost: Gr,
  danger: Yr,
  success: Zr,
  info: Jr,
  loading: Qr,
  spinner: eo,
  "dx-spin": "_dx-spin_1uim6_1",
  xs: to,
  sm: no,
  md: ro,
  lg: oo,
  xl: so,
  iconOnly: ao,
  fullWidth: lo
}, io = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function co(e, n) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", o = n;
  if (r) {
    const u = io[e];
    return { variant: u.variant, style: o ?? u.style };
  }
  const s = e ?? "filled";
  return { variant: s === "filled" || s === "flat" || s === "outlined" || s === "text" ? s : "filled", style: o ?? "primary" };
}
const f0 = Ke(function({
  variant: n = "filled",
  severity: r,
  shade: o = "default",
  size: s = "md",
  fullWidth: l = !1,
  iconOnly: u = !1,
  loading: a = !1,
  className: c,
  type: m = "button",
  disabled: b,
  children: f,
  ...D
}, v) {
  const C = co(n, r), z = o !== "default" ? `shade-${o}` : null, h = [
    kt.button,
    kt[C.variant],
    kt[`style-${C.style}`],
    // backwards-compat: tone-* still emitted
    kt[`tone-${C.style}`],
    z ? kt[z] : null,
    kt[s],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    n && kt[n] ? kt[n] : null,
    l ? kt.fullWidth : null,
    u ? kt.iconOnly : null,
    a ? kt.loading : null,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ k(
    "button",
    {
      ref: v,
      type: m,
      className: h,
      disabled: b || a,
      "aria-busy": a || void 0,
      ...D,
      children: [
        a ? /* @__PURE__ */ t("span", { "aria-hidden": "true", className: kt.spinner }) : null,
        f
      ]
    }
  );
}), uo = "_card_1qkae_1", _o = "_elevated_1qkae_8", fo = "_filled_1qkae_13", po = "_outlined_1qkae_18", ho = "_interactive_1qkae_22", mo = "_text_1qkae_30", go = "_header_1qkae_46", yo = "_body_1qkae_53", bo = "_footer_1qkae_63", dn = {
  card: uo,
  elevated: _o,
  filled: fo,
  outlined: po,
  interactive: ho,
  text: mo,
  header: go,
  body: yo,
  footer: bo
}, p0 = Ke(function({ variant: n = "elevated", header: r, footer: o, className: s, children: l, onKeyDown: u, ...a }, c) {
  const m = n === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ k(
      "div",
      {
        ref: c,
        role: m ? "button" : void 0,
        tabIndex: m ? 0 : void 0,
        onKeyDown: (b) => {
          u?.(b), !(!m || b.key !== "Enter" && b.key !== " ") && (b.preventDefault(), b.currentTarget.click());
        },
        className: [dn.card, dn[n], s].filter(Boolean).join(" "),
        ...a,
        children: [
          r != null && /* @__PURE__ */ t("div", { className: dn.header, children: r }),
          /* @__PURE__ */ t("div", { className: dn.body, children: l }),
          o != null && /* @__PURE__ */ t("div", { className: dn.footer, children: o })
        ]
      }
    )
  );
});
function rr(e, n = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : n;
}
const xo = "_badge_7agrm_1", vo = "_xs_7agrm_14", ko = "_sm_7agrm_19", wo = "_md_7agrm_24", $o = "_lg_7agrm_29", No = "_xl_7agrm_34", So = "_neutral_7agrm_40", Do = "_primary_7agrm_45", zo = "_secondary_7agrm_50", Co = "_light_7agrm_55", Mo = "_base_7agrm_60", Oo = "_dark_7agrm_65", jo = "_info_7agrm_70", Io = "_success_7agrm_75", Eo = "_warning_7agrm_80", To = "_danger_7agrm_85", Ao = "_filled_7agrm_92", Lo = "_outlined_7agrm_142", Bo = "_text_7agrm_194", un = {
  badge: xo,
  xs: vo,
  sm: ko,
  md: wo,
  lg: $o,
  xl: No,
  neutral: So,
  primary: Do,
  secondary: zo,
  light: Co,
  base: Mo,
  dark: Oo,
  info: jo,
  success: Io,
  warning: Eo,
  danger: To,
  filled: Ao,
  outlined: Lo,
  text: Bo,
  "shade-lighter": "_shade-lighter_7agrm_238",
  "shade-light": "_shade-light_7agrm_238",
  "shade-dark": "_shade-dark_7agrm_244",
  "shade-darker": "_shade-darker_7agrm_247"
}, h0 = Ke(function({ severity: n = "primary", variant: r = "filled", shade: o, size: s = "md", className: l, children: u, ...a }, c) {
  const m = n, b = rr(r, "filled"), f = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ t(
    "span",
    {
      ref: c,
      className: [un.badge, un[s], un[m], un[b], f ? un[f] : null, l].filter(Boolean).join(" "),
      ...a,
      children: u
    }
  );
}), Po = "_xs_1t3wj_2", Ro = "_sm_1t3wj_7", qo = "_md_1t3wj_1", Fo = "_lg_1t3wj_17", Ko = "_xl_1t3wj_22", Ho = {
  xs: Po,
  sm: Ro,
  md: qo,
  lg: Fo,
  xl: Ko
}, m0 = [
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
], Wo = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ k(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ge = Ke(function({ name: n, size: r = "md", strokeWidth: o = 2, className: s, ...l }, u) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: u,
      className: [a ? Ho[r] : null, s].filter(Boolean).join(" "),
      width: a ? void 0 : r,
      height: a ? void 0 : r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: Wo[n]
    }
  );
}), Vo = "_stat_e3lee_1", Uo = "_label_e3lee_8", Xo = "_row_e3lee_16", Go = "_value_e3lee_22", Yo = "_delta_e3lee_28", Zo = "_success_e3lee_33", Jo = "_danger_e3lee_37", Qo = "_neutral_e3lee_41", es = "_hint_e3lee_45", Wt = {
  stat: Vo,
  label: Uo,
  row: Xo,
  value: Go,
  delta: Yo,
  success: Zo,
  danger: Jo,
  neutral: Qo,
  hint: es
}, g0 = Ke(function({ label: n, value: r, delta: o, deltaTone: s = "neutral", hint: l, className: u, ...a }, c) {
  return /* @__PURE__ */ k("div", { ref: c, className: [Wt.stat, u].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Wt.label, children: n }),
    /* @__PURE__ */ k("div", { className: Wt.row, children: [
      /* @__PURE__ */ t("div", { className: Wt.value, children: r }),
      o != null && /* @__PURE__ */ t("div", { className: [Wt.delta, Wt[s]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ t("div", { className: Wt.hint, children: l })
  ] });
}), ts = "_wrap_1n4bf_1", ns = "_table_1n4bf_8", rs = "_caption_1n4bf_14", os = "_none_1n4bf_51", ss = "_horizontal_1n4bf_57", as = "_vertical_1n4bf_67", ls = "_alternating_1n4bf_85", is = "_start_1n4bf_89", cs = "_center_1n4bf_93", ds = "_end_1n4bf_97", us = "_empty_1n4bf_101", Rt = {
  wrap: ts,
  table: ns,
  caption: rs,
  none: os,
  horizontal: ss,
  vertical: as,
  alternating: ls,
  start: is,
  center: cs,
  end: ds,
  empty: us
};
function y0({
  columns: e,
  rows: n,
  rowKey: r,
  empty: o,
  caption: s,
  gridLines: l = "default",
  allowAlternatingRows: u = !0,
  className: a
}) {
  const c = l === "default" || l === "both" ? "" : Rt[l];
  return /* @__PURE__ */ k("div", { className: [Rt.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k(
      "table",
      {
        className: [
          Rt.table,
          c,
          u ? Rt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ t("caption", { className: Rt.caption, children: s }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((m) => /* @__PURE__ */ t(
            "th",
            {
              className: m.align != null ? Rt[m.align] : void 0,
              scope: "col",
              children: m.header
            },
            m.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((m) => /* @__PURE__ */ t("tr", { children: e.map((b) => /* @__PURE__ */ t(
            "td",
            {
              className: b.align != null ? Rt[b.align] : void 0,
              children: b.render != null ? b.render(m) : m[b.key]
            },
            b.key
          )) }, r(m))) })
        ]
      }
    ),
    n.length === 0 && o != null && /* @__PURE__ */ t("div", { className: Rt.empty, children: o })
  ] });
}
const _s = "_emptyState_7sl2y_1", fs = "_icon_7sl2y_13", ps = "_title_7sl2y_18", hs = "_description_7sl2y_24", ms = "_action_7sl2y_30", _n = {
  emptyState: _s,
  icon: fs,
  title: ps,
  description: hs,
  action: ms
};
function b0({ icon: e, title: n, description: r, action: o, className: s }) {
  return /* @__PURE__ */ k("div", { className: [_n.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: _n.icon, children: e }),
    /* @__PURE__ */ t("div", { className: _n.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: _n.description, children: r }),
    o != null && /* @__PURE__ */ t("div", { className: _n.action, children: o })
  ] });
}
const gs = "_field_3cvvz_1", ys = "_label_3cvvz_8", bs = "_required_3cvvz_14", xs = "_hint_3cvvz_19", vs = "_error_3cvvz_24", fn = {
  field: gs,
  label: ys,
  required: bs,
  hint: xs,
  error: vs
};
function x0({ label: e, htmlFor: n, required: r, hint: o, supporting: s, error: l, children: u, className: a }) {
  const c = o ?? s, m = Ve(), b = Ve(), f = Ve(), D = l != null ? b : c != null ? f : null, v = typeof u == "function" ? u({ inputId: m, hintId: f, errorId: b }) : u, C = zn(v) && typeof v.props.id == "string" ? v.props.id : void 0, z = C ?? n ?? m, h = zn(v) && (D != null || C == null && typeof v.type == "string"), d = C != null || n != null || h, g = h && zn(v) ? Cr(
    v,
    {
      id: z,
      "aria-describedby": D != null ? [
        v.props["aria-describedby"],
        D
      ].filter((p) => typeof p == "string").join(" ") || void 0 : v.props["aria-describedby"],
      "aria-invalid": l != null ? !0 : v.props["aria-invalid"]
    }
  ) : v;
  return /* @__PURE__ */ k("div", { className: [fn.field, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ k("label", { className: fn.label, htmlFor: d ? z : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: fn.required, "aria-hidden": "true", children: "*" })
    ] }),
    g,
    l != null ? /* @__PURE__ */ t("div", { id: b, className: fn.error, "aria-live": "polite", children: l }) : c != null ? /* @__PURE__ */ t("div", { id: f, className: fn.hint, children: c }) : null
  ] });
}
const ks = "_form_fwqyn_1", ws = {
  form: ks
}, jr = Or(null);
function $s() {
  const e = Mr(jr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function v0({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: o,
  method: s,
  children: l,
  className: u
}) {
  const [a, c] = Y({}), [m, b] = Y(0), f = le(a);
  f.current = a;
  const D = K((p) => {
    c(($) => $[p.name] === p ? $ : { ...$, [p.name]: p });
  }, []), v = K((p) => {
    c(($) => {
      if (!(p in $)) return $;
      const y = { ...$ };
      return delete y[p], y;
    });
  }, []), C = K(() => {
    const p = {};
    for (const $ of Object.values(f.current)) {
      const y = $.validate();
      y.length > 0 && (p[$.name] = y);
    }
    return p;
  }, []), z = K(() => {
    const p = C();
    b(($) => $ + 1), Object.keys(p).length === 0 ? n?.(e) : r?.(p);
  }, [C, e, n, r]), h = (p) => {
    o != null && s != null || (p.preventDefault(), z());
  }, d = ve(
    () => ({ registerField: D, unregisterField: v, submit: z, submitCount: m }),
    [D, v, z, m]
  ), g = [ws.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(jr.Provider, { value: d, children: /* @__PURE__ */ t("form", { className: g, onSubmit: h, action: o, method: s, noValidate: !0, children: l }) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", k0 = (e = "Required") => (n) => an(n) ? e : null, w0 = (e = "Invalid email") => (n) => an(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, $0 = (e, n = "Invalid format") => (r) => an(r) || e.test(String(r)) ? null : n, N0 = (e, n = `Minimum ${e} characters`) => (r) => an(r) || String(r).length >= e ? null : n, S0 = (e, n = `Maximum ${e} characters`) => (r) => an(r) || String(r).length <= e ? null : n, D0 = (e, n, r = `Between ${e} and ${n}`) => (o) => {
  if (an(o)) return null;
  const s = Number(o);
  return !Number.isNaN(s) && s >= e && s <= n ? null : r;
};
function Ns(e, n, r) {
  return e.map((o) => o(n, r)).filter((o) => o != null);
}
function z0(e, n) {
  const { registerField: r, unregisterField: o, submitCount: s } = $s(), [l, u] = Y(n?.initialValue), [a, c] = Y(!1), [m, b] = Y(!1), f = le(() => []);
  f.current = () => Ns(n?.validate ?? [], l), Ne(() => (r({ name: e, validate: () => f.current() }), () => o(e)), [e, r, o]), Ne(() => {
    s > 0 && (c(!0), b(!1));
  }, [s]);
  const D = a && !m ? f.current() : [];
  return { value: l, setValue: (C) => {
    u(C), b(!0);
  }, errors: D };
}
const Ss = "_select_1j23s_1", Ds = "_invalid_1j23s_33", zs = "_xs_1j23s_39", Cs = "_sm_1j23s_45", Ms = "_md_1j23s_51", Os = "_lg_1j23s_57", js = "_xl_1j23s_63", Kn = {
  select: Ss,
  invalid: Ds,
  xs: zs,
  sm: Cs,
  md: Ms,
  lg: Os,
  xl: js
}, qn = Ke(function({ size: n = "md", invalid: r = !1, options: o, children: s, className: l, ...u }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [Kn.select, Kn[n], r ? Kn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...u,
      children: o != null ? o.map((c) => /* @__PURE__ */ t("option", { value: c.value, disabled: c.disabled, children: c.label }, c.value)) : s
    }
  );
}), Ir = [
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
], On = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
};
function Fn(e, n) {
  return n.split(".").reduce((r, o) => {
    if (r != null)
      return r[o];
  }, e);
}
function sr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Sn(e, n) {
  const r = sr(e), o = sr(n);
  if (typeof r == "number" && typeof o == "number") return r - o;
  const s = String(r ?? ""), l = String(o ?? "");
  return s < l ? -1 : s > l ? 1 : 0;
}
function ar(e, n, r) {
  const o = Fn(n, e.property), s = lr(o, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return s;
  const l = lr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? s && l : s || l;
}
function lr(e, n, r, o) {
  const s = o === "CaseInsensitive", l = (c) => s && typeof c == "string" ? c.toLowerCase() : c, u = l(e), a = l(n);
  switch (r) {
    case "Equals":
      return u === a || Array.isArray(u) && u.some((c) => l(c) === a);
    case "NotEquals":
      return u !== a && !(Array.isArray(u) && u.some((c) => l(c) === a));
    case "LessThan":
      return Sn(u, a) < 0;
    case "LessThanOrEquals":
      return Sn(u, a) <= 0;
    case "GreaterThan":
      return Sn(u, a) > 0;
    case "GreaterThanOrEquals":
      return Sn(u, a) >= 0;
    case "Contains":
      return typeof u == "string" && typeof a == "string" && u.includes(a);
    case "StartsWith":
      return typeof u == "string" && typeof a == "string" && u.startsWith(a);
    case "EndsWith":
      return typeof u == "string" && typeof a == "string" && u.endsWith(a);
    case "DoesNotContain":
      return typeof u == "string" && typeof a == "string" && !u.includes(a);
    case "In":
      return Array.isArray(a) && a.some((c) => l(c) === u);
    case "NotIn":
      return Array.isArray(a) && !a.some((c) => l(c) === u);
    case "IsNull":
      return e == null;
    case "IsNotNull":
      return e != null;
    case "IsEmpty":
      return e == null || e === "";
    case "IsNotEmpty":
      return e != null && e !== "";
    case "Custom":
      return typeof n == "function" ? !!n(e) : !0;
    default:
      return !1;
  }
}
function or(e) {
  return "filters" in e;
}
function Er(e, n, r = {}) {
  const o = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (or(n)) {
    if (n.filters.length === 0) return !0;
    const l = n.operator ?? o;
    return n.filters[l === "Or" ? "some" : "every"](
      (u) => Er(e, u, { logicalOperator: l, caseSensitivity: s })
    );
  }
  return n.operator === "Custom", ar(n, e, s);
}
function Tr(e, n, r = {}) {
  return e.filter((o) => Er(o, n, r));
}
function Is(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function yt(e) {
  return typeof e == "string" ? `"${Is(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(yt).join(", ")}]` : `"${String(e)}"`;
}
function Es(e) {
  const n = (o, s) => {
    switch (o) {
      case "Equals":
        return `${e.property}.Equals(${yt(s)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${yt(s)})`;
      case "LessThan":
        return `${e.property}.LessThan(${yt(s)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${yt(s)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${yt(s)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${yt(s)})`;
      case "Contains":
        return `${e.property}.Contains(${yt(s)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${yt(s)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${yt(s)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${yt(s)})`;
      case "In":
        return `${e.property}.In(${yt(s)})`;
      case "NotIn":
        return `!${e.property}.In(${yt(s)})`;
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
  if (e.secondOperator == null || e.secondValue === void 0)
    return n(e.operator, e.value);
  const r = e.logicalOperator ?? "And";
  return `(${n(e.operator, e.value)} ${r} ${n(
    e.secondOperator,
    e.secondValue
  )})`;
}
function Ts(e) {
  return or(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Ts).filter(Boolean).join(` ${e.operator} `)})` : Es(e);
}
function As(e) {
  return e.replace(/'/g, "''");
}
const Ls = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Bs(e, n) {
  const r = e.property, o = n === "CaseInsensitive", s = (c) => o ? `tolower(${c})` : c, l = (c) => typeof c == "string" ? `'${As(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), u = (c, m) => {
    const b = typeof m == "string", f = b && o ? s(r) : r;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${f} ${Ls[c]} ${b && o ? s(l(m)) : l(m)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(l(m))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(l(m))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(l(m))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(l(m))}))`;
      case "In":
        return Array.isArray(m) ? `${f} in (${m.map((D) => l(D)).join(", ")})` : `${f} in (${l(m)})`;
      case "NotIn":
        return Array.isArray(m) ? `not(${f} in (${m.map((D) => l(D)).join(", ")}))` : `not(${f} in (${l(m)}))`;
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
  if (e.secondOperator == null || e.secondValue === void 0)
    return u(e.operator, e.value);
  const a = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${u(e.operator, e.value)} ${a} ${u(
    e.secondOperator,
    e.secondValue
  )})`;
}
function Ps(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (or(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => Ps(s, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return Bs(e, r);
}
function Rs(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const s of n) {
      const l = s.sortOrder === "Ascending" ? 1 : -1, u = Sn(Fn(r, s.property), Fn(o, s.property));
      if (u !== 0) return u * l;
    }
    return 0;
  });
}
const qs = "_filter_vjru8_1", Fs = "_rows_vjru8_9", Ks = "_row_vjru8_9", Hs = "_join_vjru8_21", Ws = "_property_vjru8_30", Vs = "_operator_vjru8_34", Us = "_value_vjru8_38", Xs = "_remove_vjru8_42", Gs = "_bar_vjru8_58", Ys = "_add_vjru8_64", Zs = "_custom_vjru8_78", Js = "_summary_vjru8_82", ft = {
  filter: qs,
  rows: Fs,
  row: Ks,
  join: Hs,
  property: Ws,
  operator: Vs,
  value: Us,
  remove: Xs,
  bar: Gs,
  add: Ys,
  custom: Zs,
  summary: Js
}, Qs = {
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
function ea({
  property: e,
  value: n,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(Me, { children: e.editor({ value: n, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      qn,
      {
        "aria-label": e.title ?? e.name,
        className: ft.value,
        options: e.values,
        value: String(n ?? ""),
        onChange: (l) => r(l.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ t(
      qn,
      {
        "aria-label": e.title ?? e.name,
        className: ft.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: n == null ? "" : String(n),
        onChange: (l) => {
          l.target.value === "" ? r(void 0) : r(l.target.value === "true");
        }
      }
    );
  const s = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ t(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: ft.value,
      ...s,
      value: n == null ? "" : String(n),
      onChange: (l) => r(o === "number" && l.target.value !== "" ? Number(l.target.value) : l.target.value)
    }
  );
}
function C0({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: s = !1,
  className: l,
  viewChanged: u,
  items: a,
  children: c
}) {
  const [m, b] = Y(
    () => o != null && o.length > 0 ? o.map((d, g) => ({ id: g, ...d })) : [{ id: 0, property: e[0]?.name ?? "", operator: On[e[0]?.type ?? "string"], value: void 0 }]
  ), f = (d, g) => {
    b((p) => p.map(($) => $.id === d ? { ...$, ...g } : $));
  }, D = () => {
    const d = m[m.length - 1], g = Math.max(0, ...m.map(($) => $.id)) + 1, p = e[0];
    b(($) => [
      ...$,
      {
        id: g,
        property: d?.property ?? p?.name ?? "",
        operator: On[e.find((y) => y.name === (d?.property ?? p?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (d) => {
    b((g) => g.length > 1 ? g.filter((p) => p.id !== d) : g);
  }, C = ve(() => {
    const d = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], g = [];
    for (const p of m) {
      if (p.property === "" || (p.value == null || p.value === "") && !d.includes(p.operator)) continue;
      const y = {
        property: p.property,
        operator: p.operator,
        value: p.value
      };
      p.secondOperator != null && p.secondValue !== void 0 && (y.secondOperator = p.secondOperator, y.secondValue = p.secondValue, y.logicalOperator = p.logicalOperator ?? "And"), g.push(y);
    }
    return g;
  }, [m]), z = ve(() => a == null || C.length === 0 ? a : Tr(a, { operator: n, filters: C }, { caseSensitivity: r }), [a, C, n, r]);
  Ne(() => {
    u != null && a != null && u(z ?? []);
  }, [z]);
  const h = (d) => e.find((g) => g.name === d) ?? { name: d, type: "string" };
  return /* @__PURE__ */ k("div", { className: [ft.filter, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: ft.rows, role: "group", "aria-label": "Filter conditions", children: m.map((d, g) => {
      const p = h(d.property), $ = s ? [On[p.type ?? "string"]] : Ir;
      return /* @__PURE__ */ k("div", { className: ft.row, children: [
        g > 0 ? /* @__PURE__ */ t("span", { className: ft.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          qn,
          {
            "aria-label": `Condition ${g + 1} property`,
            className: ft.property,
            value: d.property,
            onChange: (y) => {
              const w = e.find((i) => i.name === y.target.value);
              f(d.id, {
                property: y.target.value,
                operator: On[w?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((y) => ({ value: y.name, label: y.title ?? y.name }))
          }
        ),
        /* @__PURE__ */ t(
          qn,
          {
            "aria-label": `Condition ${g + 1} operator`,
            className: ft.operator,
            value: d.operator,
            onChange: (y) => f(d.id, { operator: y.target.value }),
            options: $.map((y) => ({ value: y, label: Qs[y] }))
          }
        ),
        /* @__PURE__ */ t(ea, { property: p, value: d.value, onChange: (y) => f(d.id, { value: y }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ft.remove,
            "aria-label": `Remove condition ${g + 1}`,
            onClick: () => v(d.id),
            children: "×"
          }
        )
      ] }, d.id);
    }) }),
    /* @__PURE__ */ k("div", { className: ft.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ft.add, onClick: D, children: "Add filter" }),
      c != null ? /* @__PURE__ */ t("div", { className: ft.custom, children: c }) : null,
      a != null ? /* @__PURE__ */ k("span", { className: ft.summary, "aria-live": "polite", children: [
        z?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const ta = "_pager_ps38y_1", na = "_alignLeft_ps38y_10", ra = "_alignCenter_ps38y_14", oa = "_alignRight_ps38y_18", sa = "_alignJustify_ps38y_22", aa = "_summary_ps38y_26", la = "_controls_ps38y_31", ia = "_button_ps38y_37", ca = "_active_ps38y_73", da = "_ellipsis_ps38y_85", ua = "_size_ps38y_91", st = {
  pager: ta,
  alignLeft: na,
  alignCenter: ra,
  alignRight: oa,
  alignJustify: sa,
  summary: aa,
  controls: la,
  button: ia,
  active: ca,
  ellipsis: da,
  size: ua
};
function _a(e, n, r, o) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(o));
}
function ir(e, n) {
  return e.replace("{0}", String(n));
}
function fa(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (a, c) => c + 1);
  const o = Math.floor(r / 2);
  let s = Math.max(1, e - o);
  const l = Math.min(n, s + r - 1);
  s = Math.max(1, l - r + 1);
  const u = [];
  for (let a = s; a <= l; a++) u.push(a);
  return s > 2 && u.unshift("ellipsis"), s > 1 && u.unshift(1), l < n - 1 && u.push("ellipsis"), l < n && u.push(n), u;
}
function pa({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: o,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: u = 5,
  alwaysVisible: a = !1,
  horizontalAlign: c = "left",
  showPagingSummary: m,
  showSummary: b,
  showPageSizeSelector: f = !0,
  pagingSummaryFormat: D = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: v,
  summaryTemplate: C,
  pageSizeText: z = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: d = "Previous page",
  nextPageTitle: g = "Next page",
  lastPageTitle: p = "Last page",
  pageTitleFormat: $ = "Page {0}",
  pageAriaLabelFormat: y = "Page {0}",
  onPageChange: w,
  onPageSizeChange: i,
  ariaLabel: x = "Pagination",
  className: O
}) {
  const I = r ?? o ?? s, [j, S] = Y(I), _ = r !== void 0 || o !== void 0, M = _ ? I : j, T = Math.max(1, Math.ceil(e / n)), E = Math.min(Math.max(1, M), T), A = m ?? b ?? !0, X = a || T > 1, H = fa(E, T, u), re = K(
    (G) => {
      const F = Math.min(Math.max(1, G), T);
      _ || S(F);
      const L = (F - 1) * n;
      w?.({ page: F, skip: L, top: n, pageCount: T, pageSize: n });
    },
    [_, w, T, n]
  ), Z = c === "center" ? st.alignCenter : c === "right" ? st.alignRight : c === "justify" ? st.alignJustify : st.alignLeft, J = { count: e, pageNumber: E, pageSize: n, pageCount: T }, Q = (G) => {
    const F = Array.from(G.currentTarget.querySelectorAll("button[data-pager-page]")), L = F.indexOf(document.activeElement);
    L !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (F[L + 1] ?? F[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (F[L - 1] ?? F[F.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), F[0]?.focus()) : G.key === "End" && (G.preventDefault(), F[F.length - 1]?.focus()));
  };
  return X ? /* @__PURE__ */ k("nav", { className: [st.pager, Z, O].filter(Boolean).join(" "), "aria-label": x, children: [
    A && /* @__PURE__ */ t("span", { className: st.summary, "aria-live": "polite", children: v ? v(J) : C ? C({ count: e, pageNumber: E, pageSize: n }) : _a(D, E, T, e) }),
    /* @__PURE__ */ k("div", { className: st.controls, role: "group", "aria-label": x, onKeyDown: Q, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: E <= 1,
          onClick: () => re(1),
          "aria-label": h,
          title: h,
          children: "«"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: E <= 1,
          onClick: () => re(E - 1),
          "aria-label": d,
          title: d,
          children: "‹"
        }
      ),
      H.map(
        (G, F) => G === "ellipsis" ? /* @__PURE__ */ t("span", { className: st.ellipsis, "aria-hidden": "true", children: "…" }, `e${F}`) : /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "data-pager-page": G,
            className: [st.button, G === E ? st.active : ""].filter(Boolean).join(" "),
            "aria-current": G === E ? "page" : void 0,
            "aria-label": ir(y, G),
            title: ir($, G),
            onClick: () => re(G),
            children: G
          },
          G
        )
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: E >= T,
          onClick: () => re(E + 1),
          "aria-label": g,
          title: g,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: E >= T,
          onClick: () => re(T),
          "aria-label": p,
          title: p,
          children: "»"
        }
      )
    ] }),
    f && l && l.length > 0 && /* @__PURE__ */ k("label", { className: st.size, children: [
      /* @__PURE__ */ t("span", { children: z }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (G) => i?.(Number(G.target.value)),
          "aria-label": z,
          children: l.map((G) => /* @__PURE__ */ t("option", { value: G, children: G }, G))
        }
      )
    ] })
  ] }) : null;
}
function Zn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: o, showSummary: s, ...l } = e;
  return /* @__PURE__ */ t(
    pa,
    {
      page: n,
      showPagingSummary: s,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: o ? (a) => o({ count: a.count, pageNumber: a.pageNumber, pageSize: a.pageSize }) : void 0,
      onPageChange: r ? (a) => r(a.page) : void 0,
      ...l
    }
  );
}
function ha(e, n, r, o, s, l) {
  if (!n || !r) return e.map((c) => ({ type: "row", row: c }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((c) => {
    const m = String(s(c, n) ?? ""), b = u.get(m);
    b ? b.push(c) : u.set(m, [c]);
  });
  const a = [];
  return u.forEach((c, m) => {
    const b = c[0], f = b != null ? s(b, n) : void 0;
    a.push({
      type: "group",
      group: { key: m, display: l(f), property: n, title: r.title ?? n, count: c.length }
    }), o.has(m) && c.forEach((D) => a.push({ type: "row", row: D }));
  }), a;
}
function jn(e, n) {
  return e.property ?? `col-${n}`;
}
function ma(e, n) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: s, column: l }) => {
    if (!l.frozen) return;
    r[s] = o === 0 ? "0px" : `${o}px`;
    const u = n[s] ?? l.width ?? "8rem";
    o += parseFloat(u);
  }), r;
}
function ga(e, n) {
  if (e !== void 0)
    switch (n) {
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
function pn(e, n) {
  if (n != null)
    return Fn(e, n);
}
function cr(e, n) {
  if (n == null || n === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(n);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (n === "d" || n === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const dr = ["Ascending", "Descending", null];
function ya(e, n, r = {}) {
  const o = e.find((l) => l.property === n), s = dr[(o ? dr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((l) => l.property !== n) : r.multi ? [...e.filter((l) => l.property !== n), { property: n, sortOrder: s }] : [{ property: n, sortOrder: s }];
}
function ba(e, n) {
  return Rs(e, n);
}
function xa(e, n, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, n), o), l = (s - 1) * r;
  return { items: e.slice(l, l + r), pageCount: o, pageNumber: s, total: e.length };
}
function va(e, n, r = {}) {
  const o = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, c]) => ({
    property: a,
    operator: c.operator ?? "Contains",
    value: ga(c.value, r.types?.[a] ?? "string")
  })), s = o.length > 0 ? Tr(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = ba(s, n.sorts);
  return { ...xa(l, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function ka(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const wa = "_grid_1my0o_1", $a = "_toolbar_1my0o_8", Na = "_picker_1my0o_13", Sa = "_pickerButton_1my0o_17", Da = "_pickerPanel_1my0o_31", za = "_pickerItem_1my0o_46", Ca = "_groupPanel_1my0o_55", Ma = "_groupPanelActive_1my0o_66", Oa = "_groupPanelText_1my0o_70", ja = "_groupChip_1my0o_74", Ia = "_groupRemove_1my0o_85", Ea = "_groupRow_1my0o_94", Ta = "_groupCell_1my0o_98", Aa = "_groupToggle_1my0o_103", La = "_editRow_1my0o_116", Ba = "_editCell_1my0o_120", Pa = "_editInput_1my0o_125", Ra = "_commandCell_1my0o_135", qa = "_commandButton_1my0o_141", Fa = "_data_1my0o_156", Ka = "_table_1my0o_163", Ha = "_header_1my0o_169", Wa = "_center_1my0o_181", Va = "_right_1my0o_185", Ua = "_sortButton_1my0o_189", Xa = "_sortIndicator_1my0o_207", Ga = "_sortIndex_1my0o_211", Ya = "_cell_1my0o_222", Za = "_clickable_1my0o_236", Ja = "_frozen_1my0o_244", Qa = "_selected_1my0o_250", el = "_resizeHandle_1my0o_254", tl = "_filterCell_1my0o_272", nl = "_filterSelect_1my0o_280", rl = "_filterInput_1my0o_290", ol = "_empty_1my0o_301", sl = "_loading_1my0o_307", al = "_visuallyHidden_1my0o_317", ge = {
  grid: wa,
  toolbar: $a,
  picker: Na,
  pickerButton: Sa,
  pickerPanel: Da,
  pickerItem: za,
  groupPanel: Ca,
  groupPanelActive: Ma,
  groupPanelText: Oa,
  groupChip: ja,
  groupRemove: Ia,
  groupRow: Ea,
  groupCell: Ta,
  groupToggle: Aa,
  editRow: La,
  editCell: Ba,
  editInput: Pa,
  commandCell: Ra,
  commandButton: qa,
  data: Fa,
  table: Ka,
  header: Ha,
  center: Wa,
  right: Va,
  sortButton: Ua,
  sortIndicator: Xa,
  sortIndex: Ga,
  cell: Ya,
  clickable: Za,
  frozen: Ja,
  selected: Qa,
  resizeHandle: el,
  filterCell: tl,
  filterSelect: nl,
  filterInput: rl,
  empty: ol,
  loading: sl,
  visuallyHidden: al
}, ll = {
  Ascending: "ascending",
  Descending: "descending"
};
function ur(e, n) {
  return e.filterable ?? n;
}
function il(e, n) {
  return e.sortable ?? n;
}
function cl(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function M0({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: l = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: c = "And",
  allowPaging: m = !1,
  pageSize: b = 10,
  pageSizeOptions: f,
  pageNumbersCount: D = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: C = !0,
  showPageSizeSelector: z = !0,
  selectionMode: h = "None",
  selectedKeys: d,
  onSelectionChange: g,
  showColumnPicker: p = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: y = !1,
  allowColumnReorder: w = !1,
  allowGrouping: i = !1,
  groupPanelText: x = "Drag a column header here to group",
  groupExpanded: O = !0,
  editMode: I = "None",
  allowRowCreate: j = !1,
  onRowUpdate: S,
  onRowCreate: _,
  onRowDelete: M,
  isLoading: T = !1,
  empty: E = "No records found",
  ariaLabel: A,
  className: X,
  onRowClick: H
}) {
  const [re, Z] = Y([]), [J, Q] = Y(/* @__PURE__ */ new Map()), [G, F] = Y(1), [L, oe] = Y(b), [ce, ee] = Y(
    () => e.map((R, q) => jn(R, q))
  ), [ue, me] = Y(
    () => new Set(e.map((R, q) => R.visible !== !1 ? jn(R, q) : "").filter(Boolean))
  ), [ke, Be] = Y({}), [je, Ue] = Y(!1), [be, Xe] = Y(null), [Ze, Re] = Y(null), [Ye, qe] = Y(null), [Je, U] = Y({}), N = le(null), P = le(null), V = ve(() => {
    const R = /* @__PURE__ */ new Map();
    return e.forEach((q, fe) => R.set(jn(q, fe), q)), R;
  }, [e]), se = ve(
    () => ce.filter((R) => ue.has(R)).map((R) => ({ key: R, column: V.get(R) })).filter((R) => R.column != null),
    [ce, ue, V]
  ), te = ve(
    () => ma(se, ke),
    [se, ke]
  ), pe = I !== "None" || M != null || j, $e = ve(
    () => va(n, { sorts: re, filters: J, pageNumber: G, pageSize: L }, {
      logicalOperator: c,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((R) => R.type != null && R.property != null).map((R) => [R.property, R.type])
      )
    }),
    [n, re, J, G, L, c, a, e]
  ), Pe = ve(
    () => be ? e.find((R) => R.property === be) : void 0,
    [be, e]
  ), Ie = ve(
    () => Ze ?? new Set(O ? $e.items.map((R) => String(pn(R, be ?? "") ?? "")) : []),
    [Ze, O, $e.items, be]
  ), rt = ve(
    () => ha(
      $e.items,
      be ?? void 0,
      Pe,
      Ie,
      pn,
      (R) => cr(R, Pe?.format)
    ),
    [$e.items, be, Pe, Ie]
  ), vt = ve(
    () => be ? se.filter((R) => R.column.property !== be) : se,
    [se, be]
  ), ne = (R) => {
    R !== "" && Z(ya(re, R, { multi: s }));
  }, De = (R, q) => {
    Q((fe) => {
      const xe = new Map(fe);
      return xe.set(R, q), xe;
    }), F(1);
  }, W = (R) => {
    oe(R), F(1);
  }, ae = (R) => {
    if (h === "None") return;
    const q = r(R), fe = d ?? [];
    let xe;
    h === "Single" ? xe = fe.length === 1 && fe[0] === q ? [] : [q] : xe = fe.includes(q) ? fe.filter((ot) => ot !== q) : [...fe, q], g?.(xe);
  }, _e = (R) => {
    H?.(R);
  }, he = (R, q, fe) => {
    N.current = { key: R, startX: q, startWidth: fe };
  }, de = (R) => {
    const q = N.current;
    if (!q) return;
    const fe = R - q.startX, xe = Math.max(48, q.startWidth + fe);
    Be((ot) => ({ ...ot, [q.key]: `${xe}px` }));
  }, ye = () => {
    N.current = null;
  }, Ae = (R) => {
    P.current = R;
  }, Fe = (R) => {
    const q = P.current;
    P.current = null, !(!q || q === R) && ee((fe) => {
      const xe = [...fe], ot = xe.indexOf(q), ht = xe.indexOf(R);
      return ot < 0 || ht < 0 ? fe : (xe.splice(ot, 1), xe.splice(ht, 0, q), xe);
    });
  }, B = (R) => {
    me((q) => {
      const fe = new Set(q);
      return fe.has(R) ? fe.delete(R) : fe.add(R), fe;
    });
  }, ie = () => {
    const R = P.current;
    if (P.current = null, !R || !i) return;
    const fe = V.get(R)?.property;
    fe && (Xe(fe), Re(null));
  }, ze = () => {
    Xe(null), Re(null);
  }, Se = (R) => {
    Re((q) => {
      const fe = q ?? new Set(O ? $e.items.map((ot) => String(pn(ot, be ?? "") ?? "")) : []), xe = new Set(fe);
      return xe.has(R) ? xe.delete(R) : xe.add(R), xe;
    });
  }, Ee = (R) => {
    const q = {};
    e.forEach((fe) => {
      fe.property && (q[fe.property] = pn(R, fe.property));
    }), U(q), qe(String(r(R)));
  }, et = () => {
    const R = {};
    e.forEach((q) => {
      q.property && q.type === "boolean" && (R[q.property] = !1);
    }), U(R), qe("__new__");
  }, ct = () => {
    qe(null), U({});
  }, It = (R) => {
    if (Ye === "__new__") {
      const q = Object.fromEntries(
        e.filter((fe) => fe.property).map((fe) => [fe.property, Je[fe.property]])
      );
      _?.(q);
    } else if (R != null) {
      const q = { ...R, ...Je };
      S?.(R, q);
    }
    ct();
  }, Cn = m && (v === "Top" || v === "TopAndBottom"), ln = m && (v === "Bottom" || v === "TopAndBottom"), Br = u && e.some((R) => ur(R, u)), Pr = (R, q, fe) => R.render ? R.render(q, { index: 0 }) : cr(pn(q, R.property), R.format), Rr = (R) => {
    const q = [ge.cell];
    return R.align === "center" && q.push(ge.center), R.align === "right" && q.push(ge.right), R.frozen && q.push(ge.frozen), q.join(" ");
  };
  return /* @__PURE__ */ k("div", { className: [ge.grid, X].filter(Boolean).join(" "), children: [
    Cn && /* @__PURE__ */ t(
      Zn,
      {
        pageNumber: $e.pageNumber,
        pageSize: $e.pageSize,
        count: $e.total,
        pageSizeOptions: f,
        pageNumbersCount: D,
        showSummary: C,
        showPageSizeSelector: z,
        ariaLabel: ln ? "Pagination (top)" : "Pagination",
        onPageChange: F,
        onPageSizeChange: W
      }
    ),
    (i || j || p) && /* @__PURE__ */ k("div", { className: ge.toolbar, children: [
      i && /* @__PURE__ */ t(
        "div",
        {
          className: [ge.groupPanel, be ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: i ? (R) => R.preventDefault() : void 0,
          onDrop: i ? ie : void 0,
          children: be ? /* @__PURE__ */ k("span", { className: ge.groupChip, children: [
            Pe?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: ge.groupRemove, onClick: ze, "aria-label": `Remove group by ${Pe?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: ge.groupPanelText, children: x })
        }
      ),
      j && /* @__PURE__ */ t("button", { type: "button", className: ge.pickerButton, onClick: et, children: "Add row" }),
      p && /* @__PURE__ */ k("div", { className: ge.picker, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": je,
            onClick: () => Ue((R) => !R),
            children: $
          }
        ),
        je && /* @__PURE__ */ t("div", { className: ge.pickerPanel, role: "menu", "aria-label": $, children: e.map((R, q) => {
          const fe = jn(R, q);
          return /* @__PURE__ */ k("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                checked: ue.has(fe),
                onChange: () => B(fe)
              }
            ),
            R.title ?? R.property
          ] }, fe);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ k("div", { className: ge.data, children: [
      /* @__PURE__ */ k(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": $e.total + 1,
          "aria-label": A,
          "aria-busy": T || void 0,
          children: [
            /* @__PURE__ */ k("colgroup", { children: [
              vt.map(({ key: R, column: q }) => /* @__PURE__ */ t(
                "col",
                {
                  style: {
                    width: ke[R] ?? q.width,
                    minWidth: q.minWidth,
                    maxWidth: q.maxWidth
                  }
                },
                R
              )),
              pe && /* @__PURE__ */ t("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ k("thead", { children: [
              /* @__PURE__ */ k("tr", { children: [
                vt.map(({ key: R, column: q }) => {
                  const fe = il(q, o), xe = re.find((Te) => Te.property === q.property), ot = xe ? re.indexOf(xe) + 1 : 0, ht = q.align ?? "left";
                  return /* @__PURE__ */ k(
                    "th",
                    {
                      "aria-sort": fe && xe ? ll[xe.sortOrder] : "none",
                      className: [
                        ge.header,
                        ht === "center" ? ge.center : "",
                        ht === "right" ? ge.right : "",
                        q.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: q.frozen ? { left: te[R] } : void 0,
                      scope: "col",
                      draggable: w || i || void 0,
                      onDragStart: w || i ? (Te) => {
                        Te.dataTransfer && (Te.dataTransfer.effectAllowed = "move"), Ae(R);
                      } : void 0,
                      onDragOver: w ? (Te) => Te.preventDefault() : void 0,
                      onDrop: w ? () => Fe(R) : void 0,
                      children: [
                        fe ? /* @__PURE__ */ k(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => q.property != null && ne(q.property),
                            "aria-label": xe ? xe.sortOrder === "Ascending" ? `Sort ${q.title ?? q.property} descending` : `Sort ${q.title ?? q.property} ascending` : `Sort ${q.title ?? q.property} ascending`,
                            children: [
                              q.title ?? q.property,
                              xe && /* @__PURE__ */ t("span", { className: ge.sortIndicator, "aria-hidden": "true", children: xe.sortOrder === "Ascending" ? "▲" : "▼" }),
                              ot > 1 && l && /* @__PURE__ */ t("span", { className: ge.sortIndex, children: ot })
                            ]
                          }
                        ) : q.title ?? q.property,
                        y && /* @__PURE__ */ t(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${q.title ?? q.property}`,
                            onMouseDown: (Te) => {
                              Te.preventDefault(), Te.stopPropagation();
                              const cn = ke[R] ?? q.width, Mn = cn ? parseFloat(cn) : 96;
                              he(R, Te.clientX, Number.isFinite(Mn) ? Mn : 96);
                            },
                            onMouseMove: (Te) => {
                              N.current?.key === R && de(Te.clientX);
                            },
                            onMouseUp: ye,
                            onMouseLeave: () => {
                              N.current?.key === R && ye();
                            }
                          }
                        )
                      ]
                    },
                    R
                  );
                }),
                pe && /* @__PURE__ */ t("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              Br && /* @__PURE__ */ t("tr", { children: vt.map(({ key: R, column: q }) => {
                if (!ur(q, u)) return /* @__PURE__ */ t("td", { className: ge.filterCell }, R);
                const fe = J.get(q.property ?? "");
                return /* @__PURE__ */ k("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ k("label", { className: ge.visuallyHidden, htmlFor: `df-${q.property}`, children: [
                    "Filter ",
                    q.title ?? q.property
                  ] }),
                  /* @__PURE__ */ t(
                    "select",
                    {
                      id: `df-${q.property}`,
                      className: ge.filterSelect,
                      value: fe?.operator ?? ka(q.type ?? "string"),
                      onChange: (xe) => De(q.property ?? "", { ...fe, operator: xe.target.value }),
                      "aria-label": `${q.title ?? q.property} operator`,
                      children: Ir.filter((xe) => xe !== "Custom").map((xe) => /* @__PURE__ */ t("option", { value: xe, children: xe }, xe))
                    }
                  ),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      className: ge.filterInput,
                      value: fe?.value ?? "",
                      onChange: (xe) => De(q.property ?? "", { ...fe, value: xe.target.value }),
                      placeholder: `Filter ${q.title ?? q.property}`,
                      "aria-label": `${q.title ?? q.property} value`
                    }
                  )
                ] }, R);
              }) })
            ] }),
            /* @__PURE__ */ k("tbody", { children: [
              Ye === "__new__" && /* @__PURE__ */ k("tr", { className: ge.editRow, children: [
                vt.map(({ key: R, column: q }) => /* @__PURE__ */ t("td", { className: ge.editCell, children: q.property && /* @__PURE__ */ t(
                  "input",
                  {
                    className: ge.editInput,
                    type: q.type === "number" ? "number" : q.type === "boolean" ? "checkbox" : "text",
                    checked: q.type === "boolean" ? !!Je[q.property] : void 0,
                    value: q.type === "boolean" ? void 0 : String(Je[q.property] ?? ""),
                    onChange: (fe) => U((xe) => ({
                      ...xe,
                      [q.property]: q.type === "boolean" ? fe.target.checked : fe.target.value
                    })),
                    "aria-label": `${q.title ?? q.property} (new)`
                  }
                ) }, R)),
                pe && /* @__PURE__ */ k("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => It(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: ct, children: "Cancel" })
                ] })
              ] }),
              rt.map((R) => {
                if (R.type === "group" && R.group) {
                  const ht = Ie.has(R.group.key);
                  return /* @__PURE__ */ t("tr", { className: ge.groupRow, children: /* @__PURE__ */ t("td", { colSpan: vt.length + (pe ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ k(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": ht,
                      onClick: () => Se(R.group.key),
                      children: [
                        /* @__PURE__ */ t("span", { "aria-hidden": "true", children: ht ? "▼" : "▶" }),
                        R.group.title,
                        ": ",
                        R.group.display,
                        " (",
                        R.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${R.group.key}`);
                }
                const q = R.row, fe = r(q), xe = (d ?? []).includes(fe), ot = Ye != null && Ye === String(fe);
                return /* @__PURE__ */ k(
                  "tr",
                  {
                    className: [
                      H || h !== "None" ? ge.clickable : "",
                      xe ? ge.selected : "",
                      ot ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": h !== "None" ? xe : void 0,
                    onClick: H || h !== "None" ? (ht) => {
                      cl(ht.target) || (_e(q), ae(q));
                    } : void 0,
                    children: [
                      vt.map(({ key: ht, column: Te }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Rr(Te),
                          style: Te.frozen ? { left: te[ht] } : void 0,
                          children: ot && Te.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: ge.editInput,
                              type: Te.type === "number" ? "number" : Te.type === "boolean" ? "checkbox" : "text",
                              checked: Te.type === "boolean" ? !!Je[Te.property] : void 0,
                              value: Te.type === "boolean" ? void 0 : String(Je[Te.property] ?? ""),
                              onChange: (cn) => U((Mn) => ({
                                ...Mn,
                                [Te.property]: Te.type === "boolean" ? cn.target.checked : cn.target.value
                              })),
                              "aria-label": `${Te.title ?? Te.property} (edit)`
                            }
                          ) : Pr(Te, q)
                        },
                        ht
                      )),
                      pe && /* @__PURE__ */ t("td", { className: ge.commandCell, children: ot ? /* @__PURE__ */ k(Me, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => It(q), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: ct, children: "Cancel" })
                      ] }) : /* @__PURE__ */ k(Me, { children: [
                        I !== "None" && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Ee(q), children: "Edit" }),
                        M && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => M(q), children: "Delete" })
                      ] }) })
                    ]
                  },
                  fe
                );
              })
            ] })
          ]
        }
      ),
      $e.items.length === 0 && !T && /* @__PURE__ */ t("div", { className: ge.empty, children: E }),
      T && /* @__PURE__ */ t("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    ln && /* @__PURE__ */ t(
      Zn,
      {
        pageNumber: $e.pageNumber,
        pageSize: $e.pageSize,
        count: $e.total,
        pageSizeOptions: f,
        pageNumbersCount: D,
        showSummary: C,
        showPageSizeSelector: z,
        ariaLabel: Cn ? "Pagination (bottom)" : "Pagination",
        onPageChange: F,
        onPageSizeChange: W
      }
    )
  ] });
}
const dl = "_wrap_1pzu9_1", ul = "_grid_1pzu9_7", _l = "_stacked_1pzu9_13", fl = "_item_1pzu9_19", pl = "_empty_1pzu9_25", hn = {
  wrap: dl,
  grid: ul,
  stacked: _l,
  item: fl,
  empty: pl
};
function O0({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: s,
  emptyMessage: l = "No records found",
  emptyTemplate: u,
  loadingTemplate: a,
  isLoading: c = !1,
  showPageSizeSelector: m = !0,
  className: b,
  ariaLabel: f = "Data list"
}) {
  const [D, v] = Y(1), [C, z] = Y(n), h = e.length, d = Math.max(1, Math.ceil(h / C)), g = Math.min(Math.max(1, D), d), p = ve(() => {
    const y = (g - 1) * C;
    return e.slice(y, y + C);
  }, [e, g, C]), $ = o ? hn.grid : hn.stacked;
  return /* @__PURE__ */ k("div", { className: [hn.wrap, b].filter(Boolean).join(" "), "aria-label": f, children: [
    c && a != null ? a : h === 0 ? u ?? /* @__PURE__ */ t("div", { className: hn.empty, children: l }) : /* @__PURE__ */ t("div", { className: $, children: p.map((y, w) => /* @__PURE__ */ t("div", { className: hn.item, children: s ? s(y, w) : String(y) }, w)) }),
    /* @__PURE__ */ t(
      Zn,
      {
        pageNumber: g,
        pageSize: C,
        count: h,
        pageSizeOptions: r,
        showPageSizeSelector: m,
        onPageChange: v,
        onPageSizeChange: (y) => {
          z(y), v(1);
        }
      }
    )
  ] });
}
const hl = "_label_idsiv_1", ml = {
  label: hl
}, j0 = Ke(
  function({ className: n, children: r, ...o }, s) {
    return /* @__PURE__ */ t("label", { ref: s, className: [ml.label, n].filter(Boolean).join(" "), ...o, children: r });
  }
), gl = "_input_gelpf_1", yl = "_invalid_gelpf_31", bl = "_xs_gelpf_37", xl = "_sm_gelpf_43", vl = "_md_gelpf_49", kl = "_lg_gelpf_55", wl = "_xl_gelpf_61", Hn = {
  input: gl,
  invalid: yl,
  xs: bl,
  sm: xl,
  md: vl,
  lg: kl,
  xl: wl
}, I0 = Ke(function({ size: n = "md", invalid: r = !1, className: o, ...s }, l) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: l,
      className: [Hn.input, Hn[n], r ? Hn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...s
    }
  );
}), $l = "_checkbox_s7nxo_1", Nl = {
  checkbox: $l
}, E0 = Ke(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Nl.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Sl = {
  switch: "_switch_1nmgf_1"
}, Dl = Ke(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [Sl.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), zl = "_trigger_1prbw_1", Cl = "_tooltip_1prbw_7", Ml = "_top_1prbw_34", Ol = "_right_1prbw_40", jl = "_bottom_1prbw_46", Il = "_left_1prbw_52", El = "_arrow_1prbw_58", In = {
  trigger: zl,
  tooltip: Cl,
  "se-tooltip-in": "_se-tooltip-in_1prbw_1",
  top: Ml,
  right: Ol,
  bottom: jl,
  left: Il,
  arrow: El
};
function T0({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: o = 300,
  className: s
}) {
  const l = Ve(), u = le(null), [a, c] = Y(!1), m = () => {
    u.current = window.setTimeout(() => c(!0), o);
  }, b = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), c(!1);
  };
  Ne(() => {
    if (!a) return;
    const D = (v) => {
      v.key === "Escape" && b();
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [a]);
  const f = zn(n) ? Cr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        a ? l : null
      ].filter((D) => typeof D == "string").join(" ") || void 0
    }
  ) : n;
  return /* @__PURE__ */ k(
    "span",
    {
      className: [In.trigger, s].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: b,
      onFocus: m,
      onBlur: b,
      children: [
        f,
        a && /* @__PURE__ */ k(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [In.tooltip, In[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: In.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Tl = "_dialog_kr2ur_1", Al = "_sm_kr2ur_30", Ll = "_md_kr2ur_34", Bl = "_lg_kr2ur_38", Pl = "_header_kr2ur_42", Rl = "_title_kr2ur_51", ql = "_description_kr2ur_58", Fl = "_close_kr2ur_65", Kl = "_body_kr2ur_84", Hl = "_footer_kr2ur_90", qt = {
  dialog: Tl,
  "se-dialog-in": "_se-dialog-in_kr2ur_1",
  sm: Al,
  md: Ll,
  lg: Bl,
  header: Pl,
  title: Rl,
  description: ql,
  close: Fl,
  body: Kl,
  footer: Hl
};
function A0({
  open: e,
  onClose: n,
  title: r,
  description: o,
  children: s,
  footer: l,
  size: u = "md",
  className: a
}) {
  const c = le(null), m = Ve(), b = Ve(), f = le(n);
  Ne(() => {
    f.current = n;
  });
  const D = le(!1), v = le(!1), C = K(() => {
    D.current || (D.current = !0, f.current());
  }, []), z = K(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    f.current();
  }, []);
  return Ne(() => {
    const h = c.current;
    if (h)
      if (e && !h.open) {
        const d = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        h.showModal(), (h.querySelector('button[aria-label="Close dialog"]') ?? h.querySelector("button"))?.focus();
        const p = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const $ = (y) => {
          y.preventDefault(), C();
        };
        return h.addEventListener("cancel", $), () => {
          h.removeEventListener("cancel", $), document.body.style.overflow = p, d?.focus({ preventScroll: !0 });
        };
      } else !e && h.open && (v.current = D.current, D.current = !1, h.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ k(
    "dialog",
    {
      ref: c,
      className: [qt.dialog, qt[u], a].filter(Boolean).join(" "),
      onClose: z,
      onClick: (h) => {
        h.target === c.current && C();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? m : void 0,
      "aria-describedby": o ? b : void 0,
      children: [
        r && /* @__PURE__ */ k("header", { className: qt.header, children: [
          /* @__PURE__ */ k("div", { children: [
            /* @__PURE__ */ t("h2", { id: m, className: qt.title, children: r }),
            o && /* @__PURE__ */ t("p", { id: b, className: qt.description, children: o })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: qt.close,
              onClick: C,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        s && /* @__PURE__ */ t("div", { className: qt.body, children: s }),
        l && /* @__PURE__ */ t("footer", { className: qt.footer, children: l })
      ]
    }
  );
}
const Wl = "_viewport_1h8v8_1", Vl = "_topLeft_1h8v8_13", Ul = "_topRight_1h8v8_20", Xl = "_bottomLeft_1h8v8_25", Gl = "_toast_1h8v8_30", Yl = "_leaving_1h8v8_61", Zl = "_info_1h8v8_77", Jl = "_success_1h8v8_82", Ql = "_warning_1h8v8_87", ei = "_danger_1h8v8_92", ti = "_content_1h8v8_97", ni = "_title_1h8v8_102", ri = "_description_1h8v8_125", oi = "_dismiss_1h8v8_132", si = "_actions_1h8v8_151", ai = "_action_1h8v8_151", li = "_cancel_1h8v8_159", ii = "_progress_1h8v8_195", mt = {
  viewport: Wl,
  topLeft: Vl,
  topRight: Ul,
  bottomLeft: Xl,
  toast: Gl,
  "se-toast-in": "_se-toast-in_1h8v8_1",
  leaving: Yl,
  "se-toast-out": "_se-toast-out_1h8v8_1",
  info: Zl,
  success: Jl,
  warning: Ql,
  danger: ei,
  content: ti,
  title: ni,
  description: ri,
  dismiss: oi,
  actions: si,
  action: ai,
  cancel: li,
  progress: ii,
  "se-toast-progress": "_se-toast-progress_1h8v8_1"
}, Ar = Or(null);
function L0() {
  const e = Mr(Ar);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const ci = 200, di = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function B0({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: s
}) {
  const [l, u] = Y([]), [a, c] = Y(!1), m = le([]), b = le(/* @__PURE__ */ new Map()), f = le(!1), D = le(0), v = (S) => {
    f.current = S, c(S);
  }, C = K((S) => {
    const _ = b.current.get(S);
    _ && (window.clearTimeout(_.timeoutId), _.remaining = Math.max(0, _.remaining - (Date.now() - _.startedAt)));
  }, []), z = K((S) => {
    const _ = b.current.get(S);
    _ && (window.clearTimeout(_.timeoutId), b.current.delete(S));
  }, []), h = K(
    (S) => {
      z(S), u((_) => {
        const M = _.filter((T) => T.id !== S);
        return m.current = M, M;
      });
    },
    [z]
  ), d = K(
    (S) => {
      const _ = m.current.find((M) => M.id === S);
      !_ || _.leaving || (_.onAutoClose?.(), h(S));
    },
    [h]
  ), g = K(
    (S) => {
      const _ = b.current.get(S);
      !_ || _.remaining <= 0 || (_.startedAt = Date.now(), _.timeoutId = window.setTimeout(() => d(S), _.remaining));
    },
    [d]
  ), p = K(() => {
    f.current || b.current.forEach((S, _) => C(_)), v(!0);
  }, [C]), $ = K(() => {
    b.current.forEach((S, _) => g(_)), v(!1);
  }, [g]);
  Ne(() => {
    if (!o) return;
    const S = () => {
      document.hidden ? p() : $();
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, [o, p, $]);
  const y = K(
    (S) => {
      const _ = m.current.find((M) => M.id === S);
      !_ || _.leaving || (_.onDismiss?.(), u((M) => {
        const T = M.map((E) => E.id === S ? { ...E, leaving: !0 } : E);
        return m.current = T, T;
      }), window.setTimeout(() => h(S), ci));
    },
    [h]
  ), w = K(
    (S) => {
      if (S.durationMs <= 0) return;
      const _ = {
        remaining: S.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      b.current.set(S.id, _), f.current || g(S.id);
    },
    [g]
  ), i = K(
    (S) => {
      const _ = m.current.find((T) => T.id === S.id), M = {
        id: S.id ?? ++D.current,
        title: S.title,
        description: S.description,
        severity: S.severity ?? "info",
        durationMs: S.durationMs ?? n,
        action: S.action,
        cancel: S.cancel,
        dismissible: S.dismissible ?? !0,
        closeOnClick: S.closeOnClick ?? !1,
        showProgress: S.showProgress ?? !1,
        position: S.position ?? r,
        onDismiss: S.onDismiss,
        onAutoClose: S.onAutoClose
      };
      u((T) => {
        const E = _ ? T.map((A) => A.id === M.id ? { ...M, leaving: !1 } : A) : [...T, M];
        return m.current = E, E;
      }), _ && z(M.id), w(M);
    },
    [n, r, w, z]
  ), x = ve(() => ({ toast: i }), [i]), O = ve(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((S) => S.position)])),
    [r, l]
  ), I = o ? p : void 0, j = o ? $ : void 0;
  return /* @__PURE__ */ k(Ar.Provider, { value: x, children: [
    e,
    O.map((S) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          mt.viewport,
          mt[di[S]],
          s
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: j,
        children: l.filter((_) => _.position === S).map((_) => /* @__PURE__ */ k(
          "div",
          {
            role: _.severity === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": _.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[_.severity],
              _.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: _.closeOnClick ? () => y(_.id) : void 0,
            children: [
              /* @__PURE__ */ k("div", { className: mt.content, children: [
                /* @__PURE__ */ t("div", { className: mt.title, children: _.title }),
                _.description && /* @__PURE__ */ t("div", { className: mt.description, children: _.description }),
                (_.action || _.cancel) && /* @__PURE__ */ k("div", { className: mt.actions, children: [
                  _.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        _.action?.onClick?.(), y(_.id);
                      },
                      children: _.action.label
                    }
                  ),
                  _.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        _.cancel?.onClick?.(), y(_.id);
                      },
                      children: _.cancel.label
                    }
                  )
                ] })
              ] }),
              _.dismissible && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => y(_.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              _.showProgress && _.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${_.durationMs}ms` }
                }
              )
            ]
          },
          _.id
        ))
      },
      S
    ))
  ] });
}
const ui = "_alert_16x95_1", _i = "_xs_16x95_22", fi = "_sm_16x95_32", pi = "_lg_16x95_42", hi = "_xl_16x95_52", mi = "_primary_16x95_63", gi = "_secondary_16x95_68", yi = "_light_16x95_73", bi = "_base_16x95_78", xi = "_dark_16x95_83", vi = "_info_16x95_88", ki = "_success_16x95_93", wi = "_warning_16x95_98", $i = "_danger_16x95_103", Ni = "_flat_16x95_110", Si = "_outlined_16x95_117", Di = "_filled_16x95_125", zi = "_text_16x95_132", Ci = "_icon_16x95_175", Mi = "_content_16x95_181", Oi = "_title_16x95_186", ji = "_body_16x95_192", Ii = "_dismiss_16x95_198", zt = {
  alert: ui,
  xs: _i,
  sm: fi,
  lg: pi,
  xl: hi,
  primary: mi,
  secondary: gi,
  light: yi,
  base: bi,
  dark: xi,
  info: vi,
  success: ki,
  warning: wi,
  danger: $i,
  flat: Ni,
  outlined: Si,
  filled: Di,
  text: zi,
  icon: Ci,
  content: Mi,
  title: Oi,
  body: ji,
  dismiss: Ii,
  "shade-lighter": "_shade-lighter_16x95_234",
  "shade-light": "_shade-light_16x95_234",
  "shade-dark": "_shade-dark_16x95_240",
  "shade-darker": "_shade-darker_16x95_243"
}, Ei = {
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
function P0({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: n = "filled",
  shade: r,
  size: o = "md",
  title: s,
  icon: l,
  showIcon: u = !0,
  children: a,
  dismissible: c = !0,
  onDismiss: m,
  className: b,
  ...f
}) {
  const [D, v] = Y(!1);
  if (D)
    return null;
  const C = () => {
    v(!0), m?.();
  }, z = e, h = rr(n, "filled"), d = r && r !== "default" ? `shade-${r}` : null, g = l ?? (u ? /* @__PURE__ */ t(Ge, { name: Ei[e] }) : null);
  return /* @__PURE__ */ k(
    "div",
    {
      role: "alert",
      ...f,
      className: [zt.alert, zt[z], zt[h], d ? zt[d] : null, zt[o], b].filter(Boolean).join(" "),
      children: [
        g != null && /* @__PURE__ */ t("span", { className: zt.icon, "aria-hidden": "true", children: g }),
        /* @__PURE__ */ k("div", { className: zt.content, children: [
          s && /* @__PURE__ */ t("div", { className: zt.title, children: s }),
          a && /* @__PURE__ */ t("div", { className: zt.body, children: a })
        ] }),
        c && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: zt.dismiss,
            onClick: C,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Ti = "_skeleton_lvzyc_1", Ai = "_text_lvzyc_35", Li = "_circle_lvzyc_40", Bi = "_rect_lvzyc_44", _r = {
  skeleton: Ti,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_lvzyc_1",
  text: Ai,
  circle: Li,
  rect: Bi
};
function R0({
  variant: e = "text",
  width: n,
  height: r,
  className: o
}) {
  const s = {};
  return n !== void 0 && (s.width = typeof n == "number" ? `${n}px` : n), r !== void 0 && (s.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ t(
    "span",
    {
      "aria-hidden": "true",
      className: [_r.skeleton, _r[e], o].filter(Boolean).join(" "),
      style: s
    }
  );
}
const Pi = "_row_plfwb_1", Ri = "_gapXs_plfwb_7", qi = "_gapSm_plfwb_11", Fi = "_gapMd_plfwb_15", Ki = "_gapLg_plfwb_19", Hi = "_gapXl_plfwb_23", Wi = "_start_plfwb_27", Vi = "_center_plfwb_31", Ui = "_end_plfwb_35", Xi = "_stretch_plfwb_39", Gi = "_baseline_plfwb_43", Yi = "_noWrap_plfwb_99", Zi = "_wrapReverse_plfwb_103", Ji = "_gapRowXs_plfwb_107", Qi = "_gapRowSm_plfwb_111", ec = "_gapRowMd_plfwb_115", tc = "_gapRowLg_plfwb_119", nc = "_gapRowXl_plfwb_123", Jt = {
  row: Pi,
  gapXs: Ri,
  gapSm: qi,
  gapMd: Fi,
  gapLg: Ki,
  gapXl: Hi,
  start: Wi,
  center: Vi,
  end: Ui,
  stretch: Xi,
  baseline: Gi,
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
  noWrap: Yi,
  wrapReverse: Zi,
  gapRowXs: Ji,
  gapRowSm: Qi,
  gapRowMd: ec,
  gapRowLg: tc,
  gapRowXl: nc
}, rc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, oc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function sc(e) {
  return typeof e != "string" ? null : rc[e] ?? null;
}
function ac(e) {
  return typeof e != "string" ? null : oc[e] ?? null;
}
function fr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function q0({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: o = "start",
  wrap: s = !0,
  className: l,
  style: u,
  ...a
}) {
  const c = sc(e), m = ac(n), b = {
    ...e != null && !c ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !m ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ...u
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Jt.row,
        Jt[r],
        Jt[`justify-${o}`],
        fr(s) != null ? Jt[fr(s)] : null,
        c ? Jt[c] : null,
        m ? Jt[m] : null,
        l
      ].filter(Boolean).join(" "),
      style: b,
      ...a
    }
  );
}
const lc = "_column_2ch3a_1", ic = "_Size1_2ch3a_6", cc = "_Size2_2ch3a_7", dc = "_Size3_2ch3a_8", uc = "_Size4_2ch3a_9", _c = "_Size5_2ch3a_10", fc = "_Size6_2ch3a_11", pc = "_Size7_2ch3a_12", hc = "_Size8_2ch3a_13", mc = "_Size9_2ch3a_14", gc = "_Size10_2ch3a_15", yc = "_Size11_2ch3a_16", bc = "_Size12_2ch3a_17", xc = "_Offset1_2ch3a_18", vc = "_Offset2_2ch3a_19", kc = "_Offset3_2ch3a_20", wc = "_Offset4_2ch3a_21", $c = "_Offset5_2ch3a_22", Nc = "_Offset6_2ch3a_23", Sc = "_Offset7_2ch3a_24", Dc = "_Offset8_2ch3a_25", zc = "_Offset9_2ch3a_26", Cc = "_Offset10_2ch3a_27", Mc = "_Offset11_2ch3a_28", Oc = "_smSize1_2ch3a_31", jc = "_smSize2_2ch3a_32", Ic = "_smSize3_2ch3a_33", Ec = "_smSize4_2ch3a_34", Tc = "_smSize5_2ch3a_35", Ac = "_smSize6_2ch3a_36", Lc = "_smSize7_2ch3a_37", Bc = "_smSize8_2ch3a_38", Pc = "_smSize9_2ch3a_39", Rc = "_smSize10_2ch3a_40", qc = "_smSize11_2ch3a_41", Fc = "_smSize12_2ch3a_42", Kc = "_smOffset1_2ch3a_43", Hc = "_smOffset2_2ch3a_44", Wc = "_smOffset3_2ch3a_45", Vc = "_smOffset4_2ch3a_46", Uc = "_smOffset5_2ch3a_47", Xc = "_smOffset6_2ch3a_48", Gc = "_smOffset7_2ch3a_49", Yc = "_smOffset8_2ch3a_50", Zc = "_smOffset9_2ch3a_51", Jc = "_smOffset10_2ch3a_52", Qc = "_smOffset11_2ch3a_53", ed = "_mdSize1_2ch3a_57", td = "_mdSize2_2ch3a_58", nd = "_mdSize3_2ch3a_59", rd = "_mdSize4_2ch3a_60", od = "_mdSize5_2ch3a_61", sd = "_mdSize6_2ch3a_62", ad = "_mdSize7_2ch3a_63", ld = "_mdSize8_2ch3a_64", id = "_mdSize9_2ch3a_65", cd = "_mdSize10_2ch3a_66", dd = "_mdSize11_2ch3a_67", ud = "_mdSize12_2ch3a_68", _d = "_mdOffset1_2ch3a_69", fd = "_mdOffset2_2ch3a_70", pd = "_mdOffset3_2ch3a_71", hd = "_mdOffset4_2ch3a_72", md = "_mdOffset5_2ch3a_73", gd = "_mdOffset6_2ch3a_74", yd = "_mdOffset7_2ch3a_75", bd = "_mdOffset8_2ch3a_76", xd = "_mdOffset9_2ch3a_77", vd = "_mdOffset10_2ch3a_78", kd = "_mdOffset11_2ch3a_79", wd = "_lgSize1_2ch3a_83", $d = "_lgSize2_2ch3a_84", Nd = "_lgSize3_2ch3a_85", Sd = "_lgSize4_2ch3a_86", Dd = "_lgSize5_2ch3a_87", zd = "_lgSize6_2ch3a_88", Cd = "_lgSize7_2ch3a_89", Md = "_lgSize8_2ch3a_90", Od = "_lgSize9_2ch3a_91", jd = "_lgSize10_2ch3a_92", Id = "_lgSize11_2ch3a_93", Ed = "_lgSize12_2ch3a_94", Td = "_lgOffset1_2ch3a_95", Ad = "_lgOffset2_2ch3a_96", Ld = "_lgOffset3_2ch3a_97", Bd = "_lgOffset4_2ch3a_98", Pd = "_lgOffset5_2ch3a_99", Rd = "_lgOffset6_2ch3a_100", qd = "_lgOffset7_2ch3a_101", Fd = "_lgOffset8_2ch3a_102", Kd = "_lgOffset9_2ch3a_103", Hd = "_lgOffset10_2ch3a_104", Wd = "_lgOffset11_2ch3a_105", Vd = "_xlSize1_2ch3a_109", Ud = "_xlSize2_2ch3a_110", Xd = "_xlSize3_2ch3a_111", Gd = "_xlSize4_2ch3a_112", Yd = "_xlSize5_2ch3a_113", Zd = "_xlSize6_2ch3a_114", Jd = "_xlSize7_2ch3a_115", Qd = "_xlSize8_2ch3a_116", eu = "_xlSize9_2ch3a_117", tu = "_xlSize10_2ch3a_118", nu = "_xlSize11_2ch3a_119", ru = "_xlSize12_2ch3a_120", ou = "_xlOffset1_2ch3a_121", su = "_xlOffset2_2ch3a_122", au = "_xlOffset3_2ch3a_123", lu = "_xlOffset4_2ch3a_124", iu = "_xlOffset5_2ch3a_125", cu = "_xlOffset6_2ch3a_126", du = "_xlOffset7_2ch3a_127", uu = "_xlOffset8_2ch3a_128", _u = "_xlOffset9_2ch3a_129", fu = "_xlOffset10_2ch3a_130", pu = "_xlOffset11_2ch3a_131", hu = "_xxlSize1_2ch3a_136", mu = "_xxlSize2_2ch3a_137", gu = "_xxlSize3_2ch3a_138", yu = "_xxlSize4_2ch3a_139", bu = "_xxlSize5_2ch3a_140", xu = "_xxlSize6_2ch3a_141", vu = "_xxlSize7_2ch3a_142", ku = "_xxlSize8_2ch3a_143", wu = "_xxlSize9_2ch3a_144", $u = "_xxlSize10_2ch3a_145", Nu = "_xxlSize11_2ch3a_146", Su = "_xxlSize12_2ch3a_147", Du = "_xxlOffset1_2ch3a_148", zu = "_xxlOffset2_2ch3a_149", Cu = "_xxlOffset3_2ch3a_150", Mu = "_xxlOffset4_2ch3a_151", Ou = "_xxlOffset5_2ch3a_152", ju = "_xxlOffset6_2ch3a_153", Iu = "_xxlOffset7_2ch3a_154", Eu = "_xxlOffset8_2ch3a_155", Tu = "_xxlOffset9_2ch3a_156", Au = "_xxlOffset10_2ch3a_157", Lu = "_xxlOffset11_2ch3a_158", Bu = "_xxlOrderFirst_2ch3a_159", Pu = "_xxlOrderLast_2ch3a_160", Ru = "_orderFirst_2ch3a_163", qu = "_orderLast_2ch3a_164", Fu = "_smOrderFirst_2ch3a_167", Ku = "_smOrderLast_2ch3a_168", Hu = "_mdOrderFirst_2ch3a_172", Wu = "_mdOrderLast_2ch3a_173", Vu = "_lgOrderFirst_2ch3a_177", Uu = "_lgOrderLast_2ch3a_178", Xu = "_xlOrderFirst_2ch3a_182", Gu = "_xlOrderLast_2ch3a_183", mn = {
  column: lc,
  Size1: ic,
  Size2: cc,
  Size3: dc,
  Size4: uc,
  Size5: _c,
  Size6: fc,
  Size7: pc,
  Size8: hc,
  Size9: mc,
  Size10: gc,
  Size11: yc,
  Size12: bc,
  Offset1: xc,
  Offset2: vc,
  Offset3: kc,
  Offset4: wc,
  Offset5: $c,
  Offset6: Nc,
  Offset7: Sc,
  Offset8: Dc,
  Offset9: zc,
  Offset10: Cc,
  Offset11: Mc,
  smSize1: Oc,
  smSize2: jc,
  smSize3: Ic,
  smSize4: Ec,
  smSize5: Tc,
  smSize6: Ac,
  smSize7: Lc,
  smSize8: Bc,
  smSize9: Pc,
  smSize10: Rc,
  smSize11: qc,
  smSize12: Fc,
  smOffset1: Kc,
  smOffset2: Hc,
  smOffset3: Wc,
  smOffset4: Vc,
  smOffset5: Uc,
  smOffset6: Xc,
  smOffset7: Gc,
  smOffset8: Yc,
  smOffset9: Zc,
  smOffset10: Jc,
  smOffset11: Qc,
  mdSize1: ed,
  mdSize2: td,
  mdSize3: nd,
  mdSize4: rd,
  mdSize5: od,
  mdSize6: sd,
  mdSize7: ad,
  mdSize8: ld,
  mdSize9: id,
  mdSize10: cd,
  mdSize11: dd,
  mdSize12: ud,
  mdOffset1: _d,
  mdOffset2: fd,
  mdOffset3: pd,
  mdOffset4: hd,
  mdOffset5: md,
  mdOffset6: gd,
  mdOffset7: yd,
  mdOffset8: bd,
  mdOffset9: xd,
  mdOffset10: vd,
  mdOffset11: kd,
  lgSize1: wd,
  lgSize2: $d,
  lgSize3: Nd,
  lgSize4: Sd,
  lgSize5: Dd,
  lgSize6: zd,
  lgSize7: Cd,
  lgSize8: Md,
  lgSize9: Od,
  lgSize10: jd,
  lgSize11: Id,
  lgSize12: Ed,
  lgOffset1: Td,
  lgOffset2: Ad,
  lgOffset3: Ld,
  lgOffset4: Bd,
  lgOffset5: Pd,
  lgOffset6: Rd,
  lgOffset7: qd,
  lgOffset8: Fd,
  lgOffset9: Kd,
  lgOffset10: Hd,
  lgOffset11: Wd,
  xlSize1: Vd,
  xlSize2: Ud,
  xlSize3: Xd,
  xlSize4: Gd,
  xlSize5: Yd,
  xlSize6: Zd,
  xlSize7: Jd,
  xlSize8: Qd,
  xlSize9: eu,
  xlSize10: tu,
  xlSize11: nu,
  xlSize12: ru,
  xlOffset1: ou,
  xlOffset2: su,
  xlOffset3: au,
  xlOffset4: lu,
  xlOffset5: iu,
  xlOffset6: cu,
  xlOffset7: du,
  xlOffset8: uu,
  xlOffset9: _u,
  xlOffset10: fu,
  xlOffset11: pu,
  xxlSize1: hu,
  xxlSize2: mu,
  xxlSize3: gu,
  xxlSize4: yu,
  xxlSize5: bu,
  xxlSize6: xu,
  xxlSize7: vu,
  xxlSize8: ku,
  xxlSize9: wu,
  xxlSize10: $u,
  xxlSize11: Nu,
  xxlSize12: Su,
  xxlOffset1: Du,
  xxlOffset2: zu,
  xxlOffset3: Cu,
  xxlOffset4: Mu,
  xxlOffset5: Ou,
  xxlOffset6: ju,
  xxlOffset7: Iu,
  xxlOffset8: Eu,
  xxlOffset9: Tu,
  xxlOffset10: Au,
  xxlOffset11: Lu,
  xxlOrderFirst: Bu,
  xxlOrderLast: Pu,
  orderFirst: Ru,
  orderLast: qu,
  smOrderFirst: Fu,
  smOrderLast: Ku,
  mdOrderFirst: Hu,
  mdOrderLast: Wu,
  lgOrderFirst: Vu,
  lgOrderLast: Uu,
  xlOrderFirst: Xu,
  xlOrderLast: Gu
}, Yu = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], Zu = {
  first: "orderFirst",
  last: "orderLast"
};
function Ju(e) {
  return typeof e == "number" ? { order: e } : {};
}
function F0({ className: e, style: n, ...r }) {
  const o = [mn.column], s = { ...n };
  for (const [x, O, I, j] of Yu) {
    const S = r[O], _ = r[I], M = r[j];
    if (S != null && o.push(mn[`${x}Size${S}`]), _ != null && _ > 0 && o.push(mn[`${x}Offset${_}`]), M === "first" || M === "last") {
      const T = `${x}${Zu[M]}`;
      mn[T] && o.push(mn[T]);
    } else M != null && Object.assign(s, Ju(M));
  }
  const {
    size: l,
    offset: u,
    sizeSm: a,
    offsetSm: c,
    sizeMd: m,
    offsetMd: b,
    sizeLg: f,
    offsetLg: D,
    sizeXl: v,
    offsetXl: C,
    sizeXxl: z,
    offsetXxl: h,
    order: d,
    orderSm: g,
    orderMd: p,
    orderLg: $,
    orderXl: y,
    orderXxl: w,
    ...i
  } = r;
  return /* @__PURE__ */ t("div", { className: [...o, e].filter(Boolean).join(" "), style: s, ...i });
}
const Qu = "_stack_1yc1g_1", e_ = "_gapXs_1yc1g_29", t_ = "_gapSm_1yc1g_33", n_ = "_gapMd_1yc1g_37", r_ = "_gapLg_1yc1g_41", o_ = "_gapXl_1yc1g_45", Qt = {
  stack: Qu,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: e_,
  gapSm: t_,
  gapMd: n_,
  gapLg: r_,
  gapXl: o_,
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
}, s_ = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function a_(e) {
  return typeof e != "string" ? null : s_[e] ?? null;
}
function pr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function K0({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: s,
  justify: l,
  className: u,
  style: a,
  ...c
}) {
  const m = a_(o), b = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", f = {
    ...o != null && !m ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...a
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Qt.stack,
        Qt[`dir-${b}`],
        pr(r) !== "wrap" ? Qt[`wrap-${pr(r)}`] : null,
        s != null ? Qt[`align-${s}`] : null,
        l != null ? Qt[`justify-${l}`] : null,
        m ? Qt[m] : null,
        u
      ].filter(Boolean).join(" "),
      style: f,
      ...c
    }
  );
}
const l_ = "_layout_1pcye_1", i_ = "_row_1pcye_7", hr = {
  layout: l_,
  row: i_
}, c_ = "_footer_jia9j_1", d_ = {
  footer: c_
};
function u_({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [d_.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const __ = "_header_1n6yq_1", f_ = {
  header: __
};
function p_({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [f_.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const h_ = "_sidebar_1i0sn_1", m_ = "_left_1i0sn_9", g_ = "_right_1i0sn_13", y_ = "_collapsed_1i0sn_17", b_ = "_responsive_1i0sn_25", x_ = "_overlay_1i0sn_33", v_ = "_mask_1i0sn_53", Vt = {
  sidebar: h_,
  left: m_,
  right: g_,
  collapsed: y_,
  responsive: b_,
  overlay: x_,
  mask: v_
};
function k_({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: o = !1,
  onClose: s,
  className: l,
  children: u,
  ...a
}) {
  return Ne(() => {
    if (!o || !n || s == null) return;
    const c = (m) => {
      m.key === "Escape" && s();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [o, n, s]), /* @__PURE__ */ k(Me, { children: [
    o && n ? /* @__PURE__ */ t("div", { className: `${Vt.mask} se-layout-mask`, "aria-hidden": "true", onClick: s }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          Vt.sidebar,
          e === "right" ? Vt.right : Vt.left,
          n ? null : Vt.collapsed,
          r ? Vt.responsive : null,
          o ? [Vt.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: u
      }
    )
  ] });
}
function H0({ className: e, children: n, ...r }) {
  const o = [], s = [], l = [], u = [], a = [];
  return qr.forEach(n, (c) => {
    if (!zn(c)) {
      l.push(c);
      return;
    }
    c.type === p_ ? o.push(c) : c.type === u_ ? s.push(c) : c.type === k_ ? (c.props.position === "right" ? a : u).push(c) : l.push(c);
  }), /* @__PURE__ */ k("div", { className: [hr.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ k("div", { className: hr.row, children: [
      u,
      l,
      a
    ] }),
    s
  ] });
}
const w_ = "_body_10zdy_1", $_ = {
  body: w_
};
function W0({ as: e = "main", className: n, children: r, ...o }) {
  return /* @__PURE__ */ t(e, { className: [$_.body, n].filter(Boolean).join(" "), ...o, children: r });
}
const N_ = "_track_hx8uy_1", S_ = "_bar_hx8uy_31", D_ = "_primary_hx8uy_39", z_ = "_success_hx8uy_43", C_ = "_warning_hx8uy_47", M_ = "_danger_hx8uy_51", O_ = "_indeterminate_hx8uy_71", j_ = "_circular_hx8uy_85", I_ = "_fill_hx8uy_125", gt = {
  track: N_,
  "linear-xs": "_linear-xs_hx8uy_11",
  "linear-sm": "_linear-sm_hx8uy_15",
  "linear-md": "_linear-md_hx8uy_19",
  "linear-lg": "_linear-lg_hx8uy_23",
  "linear-xl": "_linear-xl_hx8uy_27",
  bar: S_,
  primary: D_,
  success: z_,
  warning: C_,
  danger: M_,
  "shade-lighter": "_shade-lighter_hx8uy_55",
  "shade-light": "_shade-light_hx8uy_55",
  "shade-dark": "_shade-dark_hx8uy_63",
  "shade-darker": "_shade-darker_hx8uy_67",
  indeterminate: O_,
  "se-progress-slide": "_se-progress-slide_hx8uy_1",
  circular: j_,
  "circular-xs": "_circular-xs_hx8uy_91",
  "circular-sm": "_circular-sm_hx8uy_96",
  "circular-md": "_circular-md_hx8uy_101",
  "circular-lg": "_circular-lg_hx8uy_106",
  "circular-xl": "_circular-xl_hx8uy_111",
  fill: I_,
  "se-progress-spin": "_se-progress-spin_hx8uy_1"
};
function V0({
  value: e = 0,
  max: n = 100,
  severity: r = "primary",
  shade: o,
  indeterminate: s = !1,
  variant: l = "linear",
  size: u = "md",
  className: a,
  ...c
}) {
  const m = n > 0 ? Math.min(n, Math.max(0, e)) : 0, b = n > 0 ? m / n * 100 : 0;
  if (l === "circular") {
    const D = typeof u == "string", v = 2, C = 10.5, z = 2 * Math.PI * C, h = z * (s ? 0.75 : 1), d = s ? 0 : z * (1 - b / 100);
    return /* @__PURE__ */ k(
      "svg",
      {
        width: D ? void 0 : u,
        height: D ? void 0 : u,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(m),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        id: c.id,
        style: c.style,
        className: [
          gt.circular,
          gt[r],
          o && o !== "default" ? gt[`shade-${o}`] : null,
          D ? gt[`circular-${u}`] : null,
          s ? gt.indeterminate : null,
          a
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: gt.track, cx: 12, cy: 12, r: C, strokeWidth: v }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: gt.fill,
              cx: 12,
              cy: 12,
              r: C,
              strokeWidth: v,
              strokeDasharray: `${h} ${z}`,
              strokeDashoffset: d
            }
          )
        ]
      }
    );
  }
  const f = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(m),
      "aria-valuemin": 0,
      "aria-valuemax": n,
      className: [
        gt.track,
        gt[r],
        f ? gt[f] : null,
        typeof u == "string" ? gt[`linear-${u}`] : null,
        s ? gt.indeterminate : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: gt.bar,
          style: s ? void 0 : { width: `${b}%` }
        }
      )
    }
  );
}
function U0(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
const E_ = "_wrapper_fv8kg_1", T_ = {
  wrapper: E_
};
function X0({
  defaultTheme: e = "light",
  onChange: n,
  label: r = "Dark mode",
  className: o
}) {
  const [s, l] = Y(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  Ne(() => {
    document.documentElement.dataset.theme = s ? "dark" : "light";
  }, []);
  const u = (a) => {
    const c = a.target.checked;
    l(c), document.documentElement.dataset.theme = c ? "dark" : "light", n?.(c ? "dark" : "light");
  };
  return /* @__PURE__ */ k("label", { className: [T_.wrapper, o].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ t(Dl, { checked: s, onChange: u })
  ] });
}
const A_ = "_avatar_1ow1c_1", L_ = "_xs_1ow1c_12", B_ = "_sm_1ow1c_18", P_ = "_md_1ow1c_24", R_ = "_lg_1ow1c_30", q_ = "_xl_1ow1c_36", F_ = "_initials_1ow1c_42", K_ = "_image_1ow1c_57", H_ = "_status_1ow1c_64", W_ = "_online_1ow1c_84", V_ = "_offline_1ow1c_88", U_ = "_away_1ow1c_92", en = {
  avatar: A_,
  xs: L_,
  sm: B_,
  md: P_,
  lg: R_,
  xl: q_,
  initials: F_,
  image: K_,
  status: H_,
  online: W_,
  offline: V_,
  away: U_
}, Rn = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function X_(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function G_(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return Rn[n % Rn.length] ?? Rn[0];
}
function G0({
  name: e,
  src: n,
  alt: r,
  size: o = "md",
  status: s,
  className: l
}) {
  const u = ve(() => e ? X_(e) : "?", [e]), a = ve(() => e ? G_(e) : Rn[0], [e]), c = n != null && r === "", m = r ?? e ?? "avatar", b = s ? `${m}, ${s}` : m, f = n ? /* @__PURE__ */ t(
    "img",
    {
      className: en.image,
      src: n,
      alt: c ? "" : s ? b : m
    }
  ) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: en.initials, style: { background: a }, children: u });
  return /* @__PURE__ */ k(
    "span",
    {
      className: [
        en.avatar,
        en[o],
        s ? en[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: n ? void 0 : "img",
      "aria-label": n ? void 0 : b,
      children: [
        f,
        s && /* @__PURE__ */ t("span", { className: en.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Y_ = "_root_13xku_1", Z_ = "_left_13xku_6", J_ = "_right_13xku_7", Q_ = "_panel_13xku_12", ef = "_bottom_13xku_20", tf = "_tabList_13xku_24", nf = "_underline_13xku_53", rf = "_pills_13xku_72", of = "_tab_13xku_24", sf = "_active_13xku_113", af = "_disabled_13xku_139", Et = {
  root: Y_,
  left: Z_,
  right: J_,
  panel: Q_,
  bottom: ef,
  tabList: tf,
  underline: nf,
  pills: rf,
  tab: of,
  active: sf,
  disabled: af
};
function Y0({
  items: e,
  value: n,
  defaultValue: r,
  onChange: o,
  variant: s = "underline",
  position: l = "top",
  className: u
}) {
  const a = Ve(), c = le(null), [m, b] = Y(r ?? e[0]?.key ?? ""), f = n ?? m, D = l === "left" || l === "right", v = (h) => {
    b(h), o?.(h);
  }, C = (h) => {
    const d = e.filter(($) => !$.disabled), g = d.findIndex(($) => $.key === f);
    let p = -1;
    h.key === "ArrowRight" || D && h.key === "ArrowDown" ? p = (g + 1) % d.length : h.key === "ArrowLeft" || D && h.key === "ArrowUp" ? p = (g - 1 + d.length) % d.length : h.key === "Home" ? p = 0 : h.key === "End" && (p = d.length - 1), p >= 0 && (h.preventDefault(), c.current?.querySelector(
      `[data-tab-key="${CSS.escape(d[p]?.key ?? "")}"]`
    )?.focus(), v(d[p]?.key ?? ""));
  }, z = e.find((h) => h.key === f);
  return /* @__PURE__ */ k("div", { className: [Et.root, Et[l], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: c,
        role: "tablist",
        className: [Et.tabList, Et[s], Et[l]].filter(Boolean).join(" "),
        onKeyDown: C,
        children: e.map((h) => {
          const d = h.key === f;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": d,
              "aria-controls": `${a}-panel-${h.key}`,
              tabIndex: d ? 0 : -1,
              disabled: h.disabled,
              className: [
                Et.tab,
                d ? Et.active : null,
                h.disabled ? Et.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => v(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    z && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${z.key}`,
        "aria-labelledby": `${a}-tab-${z.key}`,
        className: Et.panel,
        children: z.content
      }
    )
  ] });
}
const lf = "_root_11jj0_1", cf = "_item_11jj0_9", df = "_heading_11jj0_13", uf = "_trigger_11jj0_17", _f = "_disabled_11jj0_34", ff = "_title_11jj0_48", pf = "_chevron_11jj0_52", hf = "_open_11jj0_59", mf = "_content_11jj0_63", Tt = {
  root: lf,
  item: cf,
  heading: df,
  trigger: uf,
  disabled: _f,
  title: ff,
  chevron: pf,
  open: hf,
  content: mf
};
function Z0({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: o,
  onChange: s,
  className: l
}) {
  const u = Ve(), [a, c] = Y(o ?? []), m = r ?? a, b = (f) => {
    const D = m.includes(f) ? m.filter((v) => v !== f) : n ? [...m, f] : [f];
    c(D), s?.(D);
  };
  return /* @__PURE__ */ t("div", { className: [Tt.root, l].filter(Boolean).join(" "), children: e.map((f) => {
    const D = m.includes(f.key), v = `${u}-panel-${f.key}`, C = `${u}-trigger-${f.key}`;
    return /* @__PURE__ */ k("div", { className: Tt.item, children: [
      /* @__PURE__ */ t("h3", { className: Tt.heading, children: /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          id: C,
          "aria-expanded": D,
          "aria-controls": v,
          disabled: f.disabled,
          className: [
            Tt.trigger,
            f.disabled ? Tt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => b(f.key),
          children: [
            /* @__PURE__ */ t("span", { className: Tt.title, children: f.title }),
            /* @__PURE__ */ t("span", { className: [Tt.chevron, D ? Tt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: v,
          role: "region",
          "aria-labelledby": C,
          hidden: !D,
          className: Tt.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const gf = "_textarea_yfr3j_1", yf = "_xs_yfr3j_25", bf = "_sm_yfr3j_30", xf = "_md_yfr3j_35", vf = "_lg_yfr3j_40", kf = "_xl_yfr3j_45", Wn = {
  textarea: gf,
  xs: yf,
  sm: bf,
  md: xf,
  lg: vf,
  xl: kf,
  "resize-none": "_resize-none_yfr3j_50",
  "resize-vertical": "_resize-vertical_yfr3j_54",
  "resize-horizontal": "_resize-horizontal_yfr3j_58",
  "resize-both": "_resize-both_yfr3j_62"
}, J0 = Ke(function({ size: n = "md", resize: r = "none", className: o, ...s }, l) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: l,
      className: [
        Wn.textarea,
        Wn[n],
        Wn[`resize-${r}`],
        o
      ].filter(Boolean).join(" "),
      ...s
    }
  );
}), wf = "_typography_1p5im_1", $f = "_h1_1p5im_36", Nf = "_h2_1p5im_42", Sf = "_h3_1p5im_48", Df = "_h4_1p5im_54", zf = "_h5_1p5im_60", Cf = "_h6_1p5im_66", Mf = "_caption_1p5im_94", Of = "_overline_1p5im_100", Vn = {
  typography: wf,
  "display-1": "_display-1_1p5im_5",
  "display-2": "_display-2_1p5im_10",
  "display-3": "_display-3_1p5im_15",
  "display-4": "_display-4_1p5im_20",
  "display-5": "_display-5_1p5im_25",
  "display-6": "_display-6_1p5im_30",
  h1: $f,
  h2: Nf,
  h3: Sf,
  h4: Df,
  h5: zf,
  h6: Cf,
  "subtitle-1": "_subtitle-1_1p5im_72",
  "subtitle-2": "_subtitle-2_1p5im_78",
  "body-1": "_body-1_1p5im_84",
  "body-2": "_body-2_1p5im_89",
  caption: Mf,
  overline: Of,
  "align-left": "_align-left_1p5im_109",
  "align-center": "_align-center_1p5im_113",
  "align-right": "_align-right_1p5im_117",
  "align-justify": "_align-justify_1p5im_121"
}, jf = {
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
}, Q0 = Ke(function({ variant: n = "body-1", as: r, align: o, className: s, children: l, ...u }, a) {
  const c = r ?? jf[n];
  return /* @__PURE__ */ t(
    c,
    {
      ref: a,
      className: [Vn.typography, Vn[n], o ? Vn[`align-${o}`] : null, s].filter(Boolean).join(" "),
      ...u,
      children: l
    }
  );
}), If = "_root_1l16s_1", Ef = "_trigger_1l16s_9", Tf = "_invalid_1l16s_40", Af = "_placeholder_1l16s_46", Lf = "_label_1l16s_53", Bf = "_chevron_1l16s_59", Pf = "_chevronOpen_1l16s_69", Rf = "_menu_1l16s_73", qf = "_option_1l16s_88", Ff = "_disabled_1l16s_99", Kf = "_active_1l16s_103", Hf = "_selected_1l16s_104", Wf = "_header_1l16s_114", Vf = "_xs_1l16s_121", Uf = "_sm_1l16s_127", Xf = "_md_1l16s_133", Gf = "_lg_1l16s_139", Yf = "_xl_1l16s_145", at = {
  root: If,
  trigger: Ef,
  invalid: Tf,
  placeholder: Af,
  label: Lf,
  chevron: Bf,
  chevronOpen: Pf,
  menu: Rf,
  option: qf,
  disabled: Ff,
  active: Kf,
  selected: Hf,
  header: Wf,
  xs: Vf,
  sm: Uf,
  md: Xf,
  lg: Gf,
  xl: Yf
}, Zf = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function eb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  placeholder: s = "Select…",
  size: l = "md",
  invalid: u = !1,
  disabled: a = !1,
  className: c,
  ...m
}) {
  const b = Ve(), f = `${b}-listbox`, D = le(null), v = le(null), [C, z] = Y(r), [h, d] = Y(!1), g = n ?? C, p = e.map((_, M) => _.label === "" || _.disabled ? -1 : M).filter((_) => _ >= 0), $ = e.findIndex((_) => _.value === g), [y, w] = Y(
    () => p.includes(0) ? 0 : p[0] ?? -1
  ), i = K(() => {
    if (a) return;
    const _ = $ >= 0 && p.includes($) ? $ : p[0];
    w(_ ?? -1), d(!0);
  }, [a, $, p]), x = K(() => {
    d(!1), v.current?.focus();
  }, []);
  Ne(() => {
    if (!h) return;
    const _ = (M) => {
      D.current && !D.current.contains(M.target) && d(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [h]);
  const O = (_) => {
    z(_), o?.(_), d(!1), v.current?.focus();
  }, I = (_) => {
    if (p.length === 0) return;
    const M = p.includes(y) ? p.indexOf(y) : 0, T = p[(M + _ + p.length) % p.length];
    T != null && w(T);
  }, j = (_) => {
    if (!h) {
      _.key === "ArrowDown" && (_.preventDefault(), i());
      return;
    }
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), I(1);
        break;
      case "ArrowUp":
        _.preventDefault(), I(-1);
        break;
      case "Home":
        _.preventDefault(), p[0] != null && w(p[0]);
        break;
      case "End":
        _.preventDefault(), p[p.length - 1] != null && w(p[p.length - 1]);
        break;
      case "Enter":
      case " ":
        _.preventDefault(), y >= 0 && e[y] && p.includes(y) && O(e[y]?.value ?? "");
        break;
      case "Escape":
        _.preventDefault(), x();
        break;
      case "Tab":
        d(!1);
        break;
    }
  }, S = e.find((_) => _.value === g);
  return /* @__PURE__ */ k("div", { ref: D, className: [at.root, c].filter(Boolean).join(" "), onKeyDown: j, children: [
    /* @__PURE__ */ k(
      "button",
      {
        ref: v,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": h,
        "aria-controls": f,
        "aria-invalid": u || void 0,
        disabled: a,
        className: [
          at.trigger,
          at[l],
          h ? at.open : null,
          u ? at.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => h ? d(!1) : i(),
        ...m,
        children: [
          /* @__PURE__ */ t("span", { className: S ? at.label : at.placeholder, children: S ? S.label : s }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [at.chevron, h ? at.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: Zf },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    h && /* @__PURE__ */ t(
      "div",
      {
        id: f,
        role: "listbox",
        "aria-activedescendant": y >= 0 ? `${b}-option-${y}` : void 0,
        className: at.menu,
        children: e.map(
          (_, M) => _.label === "" ? /* @__PURE__ */ t("div", { className: at.header, role: "presentation", children: _.value }, _.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${b}-option-${M}`,
              role: "option",
              "aria-selected": _.value === g,
              "aria-disabled": _.disabled || void 0,
              className: [
                at.option,
                M === y ? at.active : null,
                _.value === g ? at.selected : null,
                _.disabled ? at.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                _.disabled || O(_.value);
              },
              onMouseEnter: () => {
                !_.disabled && _.label !== "" && w(M);
              },
              children: _.label
            },
            _.value
          )
        )
      }
    )
  ] });
}
const Jf = "_root_z9312_1", Qf = "_wrap_z9312_9", ep = "_input_z9312_26", tp = "_invalid_z9312_31", np = "_clear_z9312_57", rp = "_menu_z9312_82", op = "_option_z9312_97", sp = "_disabled_z9312_108", ap = "_active_z9312_112", lp = "_empty_z9312_122", ip = "_xs_z9312_128", cp = "_sm_z9312_135", dp = "_md_z9312_142", up = "_lg_z9312_149", _p = "_xl_z9312_156", St = {
  root: Jf,
  wrap: Qf,
  input: ep,
  invalid: tp,
  clear: np,
  menu: rp,
  option: op,
  disabled: sp,
  active: ap,
  empty: lp,
  xs: ip,
  sm: cp,
  md: dp,
  lg: up,
  xl: _p
}, fp = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function tb({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: o,
  onSelect: s,
  placeholder: l = "",
  size: u = "md",
  invalid: a = !1,
  disabled: c = !1,
  filter: m = fp,
  className: b,
  ...f
}) {
  const D = Ve(), v = `${D}-listbox`, C = le(null), z = le(null), [h, d] = Y(r), [g, p] = Y(!1), $ = n ?? h, y = ve(
    () => $.trim() === "" ? [...e] : e.filter((A) => m(A, $)),
    [e, $, m]
  ), w = y.map((A, X) => A.disabled ? -1 : X).filter((A) => A >= 0), [i, x] = Y(-1), O = (A) => {
    d(A), o?.(A);
  }, I = (A) => {
    O(A.label), s?.(A.value, A), p(!1);
  }, j = (A) => {
    if (w.length === 0) return;
    const X = w.includes(i) ? w.indexOf(i) : A === 1 ? -1 : 0, H = w[(X + A + w.length) % w.length];
    H != null && x(H);
  }, S = (A) => {
    c || (O(A.target.value), p(!0), x(-1));
  }, _ = () => {
    c || $ !== "" && p(!0);
  }, M = (A) => {
    C.current && !C.current.contains(A.relatedTarget) && p(!1);
  }, T = (A) => {
    if (!c)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), g ? j(1) : (p(!0), x(w[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), g && j(-1);
          break;
        case "Enter":
          A.preventDefault(), g && i >= 0 && y[i] && I(y[i]);
          break;
        case "Escape":
          A.preventDefault(), p(!1);
          break;
        case "Tab":
          g && i >= 0 && y[i] && I(y[i]), p(!1);
          break;
      }
  }, E = () => {
    O(""), x(-1), p(!0), z.current?.focus();
  };
  return /* @__PURE__ */ k("div", { ref: C, className: [St.root, b].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k("div", { className: [St.wrap, St[u], a ? St.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: z,
          type: "text",
          role: "combobox",
          "aria-expanded": g,
          "aria-controls": v,
          "aria-autocomplete": "list",
          "aria-activedescendant": g && i >= 0 ? `${D}-option-${i}` : void 0,
          "aria-invalid": a || void 0,
          disabled: c,
          value: $,
          placeholder: l,
          className: St.input,
          onChange: S,
          onFocus: _,
          onBlur: M,
          onKeyDown: T,
          ...f
        }
      ),
      $ !== "" && !c && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: St.clear,
          "aria-label": "Clear",
          onClick: E,
          children: "×"
        }
      )
    ] }),
    g && /* @__PURE__ */ t("div", { id: v, role: "listbox", className: St.menu, children: y.length === 0 ? /* @__PURE__ */ t("div", { className: St.empty, children: "No matches" }) : y.map((A, X) => /* @__PURE__ */ t(
      "div",
      {
        id: `${D}-option-${X}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": A.disabled || void 0,
        className: [
          St.option,
          X === i ? St.active : null,
          A.disabled ? St.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          A.disabled || I(A);
        },
        onMouseDown: (H) => {
          H.preventDefault(), A.disabled || I(A);
        },
        onMouseEnter: () => {
          A.disabled || x(X);
        },
        children: A.label
      },
      A.value
    )) })
  ] });
}
const pp = "_box_yzqzf_1", hp = "_option_yzqzf_12", mp = "_disabled_yzqzf_23", gp = "_selected_yzqzf_27", yp = "_active_yzqzf_33", gn = {
  box: pp,
  option: hp,
  disabled: mp,
  selected: gp,
  active: yp
};
function nb({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: o = !1,
  onChange: s,
  className: l,
  style: u,
  ...a
}) {
  const c = Ve(), [m, b] = Y(() => {
    const y = r;
    return y == null ? [] : Array.isArray(y) ? [...y] : [y];
  }), f = n == null ? m : Array.isArray(n) ? n : [n], D = e.findIndex((y) => !y.disabled), [v, C] = Y(() => D >= 0 ? D : 0), z = le(""), h = le(null), d = (y) => {
    b(y), s?.(o ? y : y[0] ?? "");
  }, g = e.map((y, w) => y.disabled ? -1 : w).filter((y) => y >= 0), p = (y) => {
    const w = e[y];
    if (!(!w || w.disabled))
      if (C(y), o) {
        const i = f.includes(w.value) ? f.filter((x) => x !== w.value) : [...f, w.value];
        d(i);
      } else
        d([w.value]);
  }, $ = (y) => {
    if (g.length === 0) return;
    const w = g.includes(v) ? v : g[0];
    let i = -1;
    if (y.key === "ArrowDown")
      i = g[(g.indexOf(w) + 1) % g.length];
    else if (y.key === "ArrowUp")
      i = g[(g.indexOf(w) - 1 + g.length) % g.length];
    else if (y.key === "Home")
      i = g[0];
    else if (y.key === "End")
      i = g[g.length - 1];
    else if (y.key === "Enter" || y.key === " ") {
      y.preventDefault(), p(w);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(y.key)) {
      y.preventDefault();
      const x = (z.current + y.key).toLowerCase();
      z.current = x, h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        z.current = "";
      }, 500);
      const O = [...g, ...g], I = g.indexOf(w) + 1, j = O.slice(I).find(
        (S) => e[S]?.label.toLowerCase().startsWith(x)
      );
      j != null && C(j);
      return;
    }
    i >= 0 && (y.preventDefault(), C(i), o || d([e[i]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[v] ? `${c}-option-${v}` : void 0,
      style: u,
      className: [gn.box, l].filter(Boolean).join(" "),
      onKeyDown: $,
      ...a,
      children: e.map((y, w) => {
        const i = f.includes(y.value), x = w === v;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${c}-option-${w}`,
            role: "option",
            "aria-selected": i,
            "aria-disabled": y.disabled || void 0,
            className: [
              gn.option,
              i ? gn.selected : null,
              x ? gn.active : null,
              y.disabled ? gn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => p(w),
            children: y.label
          },
          y.value
        );
      })
    }
  );
}
const bp = "_group_1lmpf_1", xp = "_legend_1lmpf_8", vp = "_list_1lmpf_16", kp = "_item_1lmpf_25", wp = "_disabled_1lmpf_32", $p = "_label_1lmpf_37", Np = "_checkbox_1lmpf_48", Ut = {
  group: bp,
  legend: xp,
  list: vp,
  item: kp,
  disabled: wp,
  label: $p,
  checkbox: Np
};
function rb({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: o,
  legend: s,
  name: l,
  className: u
}) {
  const [a, c] = Y(() => [...r]), m = n ?? a, b = (f, D) => {
    const v = D ? [...m, f] : m.filter((C) => C !== f);
    c(v), o?.(v);
  };
  return /* @__PURE__ */ k("fieldset", { className: [Ut.group, u].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Ut.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Ut.list, children: e.map((f) => {
      const D = m.includes(f.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Ut.item, f.disabled ? Ut.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ k("label", { className: Ut.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Ut.checkbox,
                name: l,
                value: f.value,
                checked: D,
                disabled: f.disabled,
                onChange: (v) => b(f.value, v.target.checked)
              }
            ),
            /* @__PURE__ */ t("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const Sp = "_group_1fnri_1", Dp = "_legend_1fnri_8", zp = "_list_1fnri_16", Cp = "_item_1fnri_25", Mp = "_disabled_1fnri_32", Op = "_label_1fnri_37", jp = "_radio_1fnri_48", Xt = {
  group: Sp,
  legend: Dp,
  list: zp,
  item: Cp,
  disabled: Mp,
  label: Op,
  radio: jp
};
function ob({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  legend: s,
  name: l,
  className: u
}) {
  const [a, c] = Y(r), m = n ?? a, b = (f) => {
    c(f), o?.(f);
  };
  return /* @__PURE__ */ k("fieldset", { className: [Xt.group, u].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Xt.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Xt.list, children: e.map((f) => {
      const D = f.value === m;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Xt.item, f.disabled ? Xt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ k("label", { className: Xt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Xt.radio,
                name: l,
                value: f.value,
                checked: D,
                disabled: f.disabled,
                onChange: (v) => b(v.target.value)
              }
            ),
            /* @__PURE__ */ t("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const Ip = "_bar_107ts_1", Ep = "_option_107ts_12", Tp = "_selected_107ts_33", Ap = "_sm_107ts_49", Lp = "_md_107ts_55", Bp = "_lg_107ts_61", yn = {
  bar: Ip,
  option: Ep,
  selected: Tp,
  sm: Ap,
  md: Lp,
  lg: Bp
};
function sb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  size: s = "md",
  className: l,
  ...u
}) {
  const [a, c] = Y(
    r ?? e[0]?.value
  ), m = n ?? a, b = (f) => {
    c(f), o?.(f);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [yn.bar, yn[s], l].filter(Boolean).join(" "),
      ...u,
      children: e.map((f) => {
        const D = f.value === m;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": D,
            disabled: f.disabled,
            className: [
              yn.option,
              D ? yn.selected : null,
              f.disabled ? yn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const Pp = "_toggle_1d0zk_1", Rp = "_pressed_1d0zk_29", qp = "_sm_1d0zk_41", Fp = "_md_1d0zk_47", Kp = "_lg_1d0zk_53", Hp = "_fullWidth_1d0zk_59", En = {
  toggle: Pp,
  pressed: Rp,
  sm: qp,
  md: Fp,
  lg: Kp,
  fullWidth: Hp
}, ab = Ke(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: o,
    size: s = "md",
    fullWidth: l = !1,
    className: u,
    type: a = "button",
    ...c
  }, m) {
    const [b, f] = Y(r), D = n ?? b, v = () => {
      const C = !D;
      f(C), o?.(C);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: m,
        type: a,
        "aria-pressed": D,
        className: [
          En.toggle,
          En[s],
          D ? En.pressed : null,
          l ? En.fullWidth : null,
          u
        ].filter(Boolean).join(" "),
        onClick: v,
        ...c
      }
    );
  }
), Wp = "_root_1qdj1_1", Vp = "_action_1qdj1_102", Up = "_filled_1qdj1_122", Xp = "_caret_1qdj1_126", Gp = "_flat_1qdj1_147", Yp = "_outlined_1qdj1_155", Zp = "_text_1qdj1_163", Jp = "_sm_1qdj1_201", Qp = "_md_1qdj1_213", e1 = "_lg_1qdj1_225", t1 = "_menu_1qdj1_237", n1 = "_item_1qdj1_250", r1 = "_disabled_1qdj1_271", o1 = "_active_1qdj1_275", s1 = "_danger_1qdj1_284", wt = {
  root: Wp,
  "style-primary": "_style-primary_1qdj1_11",
  "style-secondary": "_style-secondary_1qdj1_21",
  "style-base": "_style-base_1qdj1_31",
  "style-light": "_style-light_1qdj1_41",
  "style-dark": "_style-dark_1qdj1_51",
  "style-info": "_style-info_1qdj1_61",
  "style-success": "_style-success_1qdj1_71",
  "style-warning": "_style-warning_1qdj1_81",
  "style-danger": "_style-danger_1qdj1_91",
  action: Vp,
  filled: Up,
  caret: Xp,
  flat: Gp,
  outlined: Yp,
  text: Zp,
  "shade-lighter": "_shade-lighter_1qdj1_178",
  "shade-light": "_shade-light_1qdj1_178",
  "shade-dark": "_shade-dark_1qdj1_186",
  "shade-darker": "_shade-darker_1qdj1_190",
  sm: Jp,
  md: Qp,
  lg: e1,
  menu: t1,
  item: n1,
  disabled: r1,
  active: o1,
  danger: s1
};
function lb({
  label: e,
  onClick: n,
  items: r = [],
  severity: o = "primary",
  variant: s = "filled",
  shade: l = "default",
  size: u = "md",
  disabled: a = !1,
  className: c,
  ...m
}) {
  const f = `${Ve()}-menu`, D = le(null), v = le(null), C = le([]), [z, h] = Y(!1), [d, g] = Y(-1), p = ve(
    () => r.map((j, S) => j.disabled ? -1 : S).filter((j) => j >= 0),
    [r]
  ), $ = K(() => {
    a || (g(p[0] ?? -1), h(!0));
  }, [a, p]), y = K(() => {
    h(!1), v.current?.focus();
  }, []);
  Ne(() => {
    if (!z) return;
    const j = (S) => {
      D.current && !D.current.contains(S.target) && h(!1);
    };
    return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [z]);
  const w = le(z);
  Ne(() => {
    const j = w.current;
    if (w.current = z, !z || j) return;
    const S = p.includes(d) ? d : p[0] ?? -1;
    S >= 0 && C.current[S]?.focus();
  }, [z, d, p]);
  const i = (j) => {
    const S = r[j];
    !S || S.disabled || (S.onClick?.(), h(!1), v.current?.focus());
  }, x = (j) => {
    if (p.length === 0) return;
    const S = p.includes(d) ? p.indexOf(d) : j === 1 ? -1 : 0, _ = p[(S + j + p.length) % p.length];
    _ != null && (g(_), C.current[_]?.focus());
  }, O = (j) => {
    const S = j === "first" ? p[0] : p[p.length - 1];
    S != null && (g(S), C.current[S]?.focus());
  }, I = (j) => {
    switch (j.key) {
      case "ArrowDown":
        j.preventDefault(), x(1);
        break;
      case "ArrowUp":
        j.preventDefault(), x(-1);
        break;
      case "Home":
        j.preventDefault(), O("first");
        break;
      case "End":
        j.preventDefault(), O("last");
        break;
      case "Escape":
        j.preventDefault(), y();
        break;
      case "Tab":
        h(!1);
        break;
    }
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: D,
      className: [
        wt.root,
        wt[u],
        wt[`style-${o}`],
        wt[rr(s, "filled")],
        l !== "default" ? wt[`shade-${l}`] : null,
        c
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: wt.action,
            disabled: a,
            onClick: n,
            children: e
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            ref: v,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": z,
            "aria-controls": f,
            "aria-label": "More actions",
            disabled: a,
            onClick: () => z ? h(!1) : $(),
            onKeyDown: (j) => {
              !z && j.key === "ArrowDown" && (j.preventDefault(), $());
            },
            children: "▾"
          }
        ),
        z && /* @__PURE__ */ t(
          "div",
          {
            id: f,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: I,
            ...m,
            children: r.map((j, S) => /* @__PURE__ */ t(
              "button",
              {
                ref: (_) => {
                  C.current[S] = _;
                },
                type: "button",
                role: "menuitem",
                tabIndex: S === d ? 0 : -1,
                disabled: j.disabled,
                className: [
                  wt.item,
                  S === d ? wt.active : null,
                  j.danger ? wt.danger : null,
                  j.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => i(S),
                onMouseEnter: () => {
                  j.disabled || g(S);
                },
                children: j.label
              },
              j.key
            ))
          }
        )
      ]
    }
  );
}
const a1 = "_textbox_1uz2c_1", l1 = "_invalid_1uz2c_31", i1 = "_xs_1uz2c_37", c1 = "_sm_1uz2c_43", d1 = "_md_1uz2c_49", u1 = "_lg_1uz2c_55", _1 = "_xl_1uz2c_61", Un = {
  textbox: a1,
  invalid: l1,
  xs: i1,
  sm: c1,
  md: d1,
  lg: u1,
  xl: _1
}, ib = Ke(function({ size: n = "md", invalid: r = !1, className: o, type: s = "text", ...l }, u) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: u,
      type: s,
      className: [Un.textbox, Un[n], r ? Un.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), f1 = "_wrapper_13x89_1", p1 = "_input_13x89_8", h1 = "_invalid_13x89_38", m1 = "_toggle_13x89_44", g1 = "_xs_13x89_79", y1 = "_sm_13x89_85", b1 = "_md_13x89_91", x1 = "_lg_13x89_97", v1 = "_xl_13x89_103", bn = {
  wrapper: f1,
  input: p1,
  invalid: h1,
  toggle: m1,
  xs: g1,
  sm: y1,
  md: b1,
  lg: x1,
  xl: v1
}, cb = Ke(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  showLabel: l = "Show password",
  hideLabel: u = "Hide password",
  ...a
}, c) {
  const [m, b] = Y(!1);
  return /* @__PURE__ */ k("div", { className: bn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: c,
        type: m ? "text" : "password",
        disabled: s,
        className: [bn.input, bn[n], r ? bn.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: bn.toggle,
        "aria-pressed": m,
        "aria-label": m ? u : l,
        disabled: s,
        onClick: () => b((f) => !f),
        children: /* @__PURE__ */ t(Ge, { name: m ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), k1 = "_mask_145m8_1", w1 = "_invalid_145m8_31", $1 = "_xs_145m8_37", N1 = "_sm_145m8_43", S1 = "_md_145m8_49", D1 = "_lg_145m8_55", z1 = "_xl_145m8_61", Xn = {
  mask: k1,
  invalid: w1,
  xs: $1,
  sm: N1,
  md: S1,
  lg: D1,
  xl: z1
};
function mr(e, n) {
  let r = e.replace(/\D/g, ""), o = "";
  for (const s of n)
    if (s === "#") {
      if (r.length === 0) break;
      o += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      o += s;
    else
      break;
  return o;
}
const db = Ke(function({
  size: n = "md",
  invalid: r = !1,
  mask: o,
  value: s,
  defaultValue: l = "",
  onChange: u,
  className: a,
  onKeyDown: c,
  ...m
}, b) {
  const [f, D] = Y(l ?? ""), v = s !== void 0, C = v ? s ?? "" : f, z = (g) => {
    const p = mr(g, o);
    return v || D(p), u?.(p), p;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: b,
      type: "text",
      value: C,
      onChange: (g) => {
        z(g.target.value);
      },
      onKeyDown: (g) => {
        if (g.key === "Backspace") {
          const p = g.currentTarget.selectionStart ?? C.length, $ = C[p - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            g.preventDefault();
            const y = C.replace(/\D/g, "");
            z(mr(y.slice(0, -1), o));
          }
        }
        c?.(g);
      },
      className: [Xn.mask, Xn[n], r ? Xn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...m
    }
  );
}), C1 = "_wrapper_mr2in_1", M1 = "_input_mr2in_8", O1 = "_invalid_mr2in_38", j1 = "_button_mr2in_44", I1 = "_up_mr2in_76", E1 = "_down_mr2in_81", T1 = "_xs_mr2in_86", A1 = "_sm_mr2in_92", L1 = "_md_mr2in_98", B1 = "_lg_mr2in_104", P1 = "_xl_mr2in_110", Ft = {
  wrapper: C1,
  input: M1,
  invalid: O1,
  button: j1,
  up: I1,
  down: E1,
  xs: T1,
  sm: A1,
  md: L1,
  lg: B1,
  xl: P1
};
function Jn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function R1(e) {
  let n = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? n += o : o === "." && !r ? (r = !0, n += o) : o === "-" && n.length === 0 && (n += o);
  return n;
}
function Lr(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function q1(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function F1(e, n, r, o, s) {
  const u = Jn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = u + n * s : n > 0 ? a = r + Math.ceil((u - r + 1e-9) / s) * s : a = r + Math.floor((u - r - 1e-9) / s) * s, Lr(a, r, o);
}
const ub = Ke(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  value: l,
  defaultValue: u,
  onChange: a,
  min: c,
  max: m,
  step: b = 1,
  incrementLabel: f = "Increment",
  decrementLabel: D = "Decrement",
  onBlur: v,
  onKeyDown: C,
  ...z
}, h) {
  const [d, g] = Y(u != null ? String(u) : ""), p = l !== void 0, $ = p ? l == null ? "" : String(l) : d, y = (j) => {
    p || g(j), a?.(Jn(j));
  }, w = (j) => {
    p || g(String(j)), a?.(j);
  }, i = (j) => {
    s || w(F1($, j, c, m, b));
  }, x = (j) => {
    y(R1(j.target.value));
  }, O = (j) => {
    j.key === "ArrowUp" ? (j.preventDefault(), i(1)) : j.key === "ArrowDown" && (j.preventDefault(), i(-1)), C?.(j);
  }, I = (j) => {
    const S = Jn($);
    S === null ? (p || g(""), a?.(null)) : w(Lr(q1(S, c, b), c, m)), v?.(j);
  };
  return /* @__PURE__ */ k("div", { className: Ft.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: h,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: $,
        disabled: s,
        onChange: x,
        onKeyDown: O,
        onBlur: I,
        className: [Ft.input, Ft[n], r ? Ft.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...z
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Ft.button, Ft.up].join(" "),
        "aria-label": f,
        disabled: s,
        onClick: () => i(1),
        children: /* @__PURE__ */ t(Ge, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Ft.button, Ft.down].join(" "),
        "aria-label": D,
        disabled: s,
        onClick: () => i(-1),
        children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), we = {
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
}, K1 = [
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
function bt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Qn(e) {
  const n = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!n) return null;
  let r = n[1];
  return r.length === 3 && (r = r.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function H1({ r: e, g: n, b: r }) {
  const o = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${o(e)}${o(n)}${o(r)}`;
}
function W1({ r: e, g: n, b: r }) {
  const o = e / 255, s = n / 255, l = r / 255, u = Math.max(o, s, l), a = Math.min(o, s, l), c = u - a;
  let m = 0;
  return c !== 0 && (u === o ? m = (s - l) / c % 6 : u === s ? m = (l - o) / c + 2 : m = (o - s) / c + 4, m *= 60, m < 0 && (m += 360)), {
    h: m,
    s: u === 0 ? 0 : c / u,
    v: u
  };
}
function tn({ h: e, s: n, v: r }) {
  const o = r * n, s = e / 60, l = o * (1 - Math.abs(s % 2 - 1));
  let u = 0, a = 0, c = 0;
  s < 1 ? (u = o, a = l) : s < 2 ? (u = l, a = o) : s < 3 ? (a = o, c = l) : s < 4 ? (a = l, c = o) : s < 5 ? (u = l, c = o) : (u = o, c = l);
  const m = r - o;
  return {
    r: Math.round((u + m) * 255),
    g: Math.round((a + m) * 255),
    b: Math.round((c + m) * 255),
    a: 1
  };
}
function V1(e) {
  const n = Qn(e);
  if (n) return n;
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
function gr({ r: e, g: n, b: r, a: o }) {
  return o >= 1 ? `rgb(${e}, ${n}, ${r})` : `rgba(${e}, ${n}, ${r}, ${Math.round(o * 100) / 100})`;
}
const _b = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: s = K1,
  showButton: l = !1,
  showArrow: u = !0,
  disabled: a = !1,
  invalid: c = !1,
  placeholder: m = "",
  size: b = "md",
  tabIndex: f = 0,
  className: D,
  onChange: v,
  onValueChange: C,
  onOpen: z,
  onClose: h
}) => {
  const d = le(null), g = le(null), p = le(null), $ = le(null), y = le(null), w = Ve(), i = le(null), x = ve(
    () => V1(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [O, I] = Y(!1), [j, S] = Y(null), _ = j ?? x, M = ve(() => W1(_), [_]), T = K(
    (U) => {
      const N = gr(U);
      v?.(N), C?.(N);
    },
    [v, C]
  ), E = K(
    (U, N) => {
      S(U), N && !l && T(U);
    },
    [l, T]
  ), A = K(() => {
    I(!1), S(null), h?.(), g.current?.focus();
  }, [h]), X = K(() => {
    a || (S(x), I(!0), z?.());
  }, [a, x, z]), H = K(() => {
    O ? A() : X();
  }, [O, A, X]), re = K(
    (U, N) => {
      const P = p.current;
      if (!P) return M;
      const V = P.getBoundingClientRect(), se = bt((U - V.left) / V.width, 0, 1), te = bt(1 - (N - V.top) / V.height, 0, 1);
      return { h: M.h, s: se, v: te };
    },
    [M]
  ), Z = K(
    (U, N) => {
      if (!N) return 0;
      const P = N.getBoundingClientRect();
      return bt((U - P.left) / P.width, 0, 1);
    },
    []
  ), J = (U) => {
    if (a) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), i.current = "sat";
    const N = re(U.clientX, U.clientY);
    E({ ...tn(N), a: _.a }, !0);
  }, Q = (U) => {
    if (i.current !== "sat") return;
    U.preventDefault();
    const N = re(U.clientX, U.clientY);
    E({ ...tn(N), a: _.a }, !0);
  }, G = (U) => {
    if (a) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), i.current = "hue";
    const N = Z(U.clientX, $.current);
    E({ ...tn({ ...M, h: N * 360 }), a: _.a }, !0);
  }, F = (U) => {
    if (i.current !== "hue") return;
    U.preventDefault();
    const N = Z(U.clientX, $.current);
    E({ ...tn({ ...M, h: N * 360 }), a: _.a }, !0);
  }, L = (U) => {
    if (a) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), i.current = "alpha";
    const N = Z(U.clientX, y.current);
    E({ ..._, a: N }, !0);
  }, oe = (U) => {
    if (i.current !== "alpha") return;
    U.preventDefault();
    const N = Z(U.clientX, y.current);
    E({ ..._, a: N }, !0);
  }, ce = () => {
    i.current = null;
  }, ee = K(
    (U, N) => {
      const P = { h: M.h, s: bt(M.s + U, 0, 1), v: bt(M.v + N, 0, 1) };
      E({ ...tn(P), a: _.a }, !0);
    },
    [M, _.a, E]
  ), ue = K(
    (U) => {
      const N = (M.h + U + 360) % 360;
      E({ ...tn({ ...M, h: N }), a: _.a }, !0);
    },
    [M, _.a, E]
  ), me = K(
    (U) => {
      E({ ..._, a: bt(_.a + U, 0, 1) }, !0);
    },
    [_, E]
  ), ke = (U) => {
    switch (U.key) {
      case "ArrowLeft":
        U.preventDefault(), ee(-0.05, 0);
        break;
      case "ArrowRight":
        U.preventDefault(), ee(0.05, 0);
        break;
      case "ArrowUp":
        U.preventDefault(), ee(0, 0.05);
        break;
      case "ArrowDown":
        U.preventDefault(), ee(0, -0.05);
        break;
      case "Escape":
        U.preventDefault(), A();
        break;
    }
  }, Be = (U, N) => {
    switch (U.key) {
      case "ArrowLeft":
        U.preventDefault(), N === "hue" ? ue(-6) : me(-0.05);
        break;
      case "ArrowRight":
        U.preventDefault(), N === "hue" ? ue(6) : me(0.05);
        break;
      case "Escape":
        U.preventDefault(), A();
        break;
    }
  }, je = (U, N) => {
    if (U === "hex") {
      const te = Qn(N);
      te && E({ ...te, a: _.a }, !0);
      return;
    }
    const P = N.replace(/[^\d.]/g, ""), V = Number.parseFloat(P);
    if (Number.isNaN(V)) return;
    if (U === "a") {
      const te = P.includes(".") ? bt(V, 0, 1) : bt(V / 100, 0, 1);
      E({ ..._, a: te }, !0);
      return;
    }
    const se = { r: 255, g: 255, b: 255 };
    E({ ..._, [U]: bt(V, 0, se[U]) }, !0);
  }, Ue = () => {
    j && (T(j), S(null), I(!1), h?.(), g.current?.focus());
  };
  Ne(() => {
    if (!O) return;
    const U = (N) => {
      d.current && !d.current.contains(N.target) && A();
    };
    return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
  }, [O, A]), Ne(() => {
    if (!O) return;
    const U = (N) => {
      N.key === "Escape" && A();
    };
    return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
  }, [O, A]);
  const be = b === "xs" ? we["dx-colorpicker-trigger-xs"] : b === "sm" ? we["dx-colorpicker-trigger-sm"] : b === "lg" ? we["dx-colorpicker-trigger-lg"] : b === "xl" ? we["dx-colorpicker-trigger-xl"] : we["dx-colorpicker-trigger"], Xe = gr(_), Ze = H1(_), Re = { x: M.s * 100, y: (1 - M.v) * 100 }, Ye = M.h / 360 * 100, qe = _.a * 100, Je = /* @__PURE__ */ k("div", { className: we["dx-colorpicker-panel"], children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: p,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(M.s * 100),
        "aria-valuetext": `Saturation ${Math.round(M.s * 100)}%, value ${Math.round(M.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: we["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${M.h}, 100%, 50%)`
        },
        onKeyDown: ke,
        onPointerDown: J,
        onPointerMove: Q,
        onPointerUp: ce,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we["dx-saturation-indicator"],
            style: { left: `${Re.x}%`, top: `${Re.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: $,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(M.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: we["dx-hue-picker"],
        onKeyDown: (U) => Be(U, "hue"),
        onPointerDown: G,
        onPointerMove: F,
        onPointerUp: ce,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we["dx-hue-indicator"],
            style: { left: `${Ye}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(qe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: we["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-color-border) 0% 25%, var(--dx-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${M.h}, 100%, 50%))`
        },
        onKeyDown: (U) => Be(U, "alpha"),
        onPointerDown: L,
        onPointerMove: oe,
        onPointerUp: ce,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we["dx-alpha-indicator"],
            style: { left: `${qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    r && /* @__PURE__ */ k("div", { className: we["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ k("label", { className: we["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ t("span", { className: we["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: we["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ze,
            onChange: (U) => je("hex", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ k("label", { className: we["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ t("span", { className: we["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: _.r,
            onChange: (U) => je("r", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ k("label", { className: we["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ t("span", { className: we["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: _.g,
            onChange: (U) => je("g", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ k("label", { className: we["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ t("span", { className: we["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: _.b,
            onChange: (U) => je("b", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ k("label", { className: we["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ t("span", { className: we["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: we["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(_.a * 100),
            onChange: (U) => je("a", U.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ t("div", { className: we["dx-colorpicker-palette"], children: s.map((U) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: we["dx-colorpicker-swatch"],
        "aria-label": U,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        style: { backgroundColor: U },
        onClick: () => {
          const N = Qn(U);
          l ? E({ ...N, a: _.a }, !1) : (S(null), T({ ...N, a: _.a }), I(!1), h?.(), g.current?.focus());
        }
      },
      U
    )) }),
    l && /* @__PURE__ */ t("div", { className: we["dx-colorpicker-footer"], children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: we["dx-colorpicker-ok"],
        onClick: Ue,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ k(
    "div",
    {
      ref: d,
      className: [
        we["dx-colorpicker"],
        O ? we["dx-colorpicker-open"] : null,
        c ? we["dx-colorpicker-invalid"] : null,
        D
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ k(
          "button",
          {
            ref: g,
            type: "button",
            className: [we["dx-colorpicker-trigger"], be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": O,
            "aria-controls": w,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: f,
            onClick: H,
            onKeyDown: (U) => {
              U.key === "Escape" && O && (U.preventDefault(), A());
            },
            children: [
              /* @__PURE__ */ t(
                "span",
                {
                  className: we["dx-colorpicker-value"],
                  style: { backgroundColor: Xe },
                  "aria-hidden": "true"
                }
              ),
              m && /* @__PURE__ */ t("span", { className: we["dx-colorpicker-text"], children: m }),
              u && /* @__PURE__ */ t("span", { className: we["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        O && /* @__PURE__ */ t(
          "div",
          {
            id: w,
            role: "dialog",
            "aria-label": "Choose color",
            className: we["dx-colorpicker-popup"],
            children: Je
          }
        )
      ]
    }
  );
}, Ce = {
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
}, U1 = 42;
function xt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${xt(e.month)}-${xt(e.day)}`;
}
function X1(e, n) {
  const r = pt(e);
  return n ? `${r} ${xt(e.hour)}:${xt(e.minute)}:${xt(e.second)}` : r;
}
function er(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), o = Number(n[2]), s = Number(n[3]), l = n[4] != null ? Number(n[4]) : 0, u = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (o < 1 || o > 12 || s < 1 || s > 31) return null;
  const c = new Date(r, o - 1, s, l, u, a);
  return c.getFullYear() !== r || c.getMonth() !== o - 1 || c.getDate() !== s ? null : { year: r, month: o, day: s, hour: l, minute: u, second: a };
}
function Kt() {
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
function At(e, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day + n,
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
function Tn(e, n) {
  const r = new Date(e.year, e.month - 1 + n, 1), o = r.getFullYear(), s = r.getMonth() + 1, l = new Date(o, s, 0).getDate();
  return {
    year: o,
    month: s,
    day: Math.min(e.day, l),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function yr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const br = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => xt(e.year % 100),
  MM: (e) => xt(e.month),
  M: (e) => String(e.month),
  dd: (e) => xt(e.day),
  d: (e) => String(e.day),
  HH: (e) => xt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => xt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => xt(e.second),
  s: (e) => String(e.second),
  tt: (e, n, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(n).find((s) => s.type === "dayPeriod")?.value ?? ""
}, G1 = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], Y1 = ["y", "M", "d", "H", "m", "s"];
function An(e, n, r) {
  const o = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let s = "", l = 0;
  for (; l < n.length; ) {
    let u = !1;
    for (const c of G1)
      if (n.startsWith(c, l)) {
        s += br[c](e, o, r), l += c.length, u = !0;
        break;
      }
    if (u) continue;
    const a = n[l];
    if (Y1.includes(a)) {
      s += br[a](e, o, r), l += 1;
      continue;
    }
    s += a, l += 1;
  }
  return s;
}
const Z1 = [
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
function J1(e, n) {
  const r = {};
  let o = 0, s = 0;
  for (; s < n.length; ) {
    let a = null;
    for (const c of Z1)
      if (n.startsWith(c, s)) {
        a = c;
        break;
      }
    if (a) {
      const c = e.slice(o, o + a.length);
      if (!/^\d+$/.test(c)) return null;
      const m = Number(c);
      switch (a) {
        case "yyyy":
          r.year = m;
          break;
        case "yy":
        case "y":
          r.year = 2e3 + m;
          break;
        case "MM":
        case "M":
          r.month = m;
          break;
        case "dd":
        case "d":
          r.day = m;
          break;
        case "HH":
        case "H":
          r.hour = m;
          break;
        case "mm":
        case "m":
          r.minute = m;
          break;
        case "ss":
        case "s":
          r.second = m;
          break;
      }
      o += a.length, s += a.length;
      continue;
    }
    if (e[o] !== n[s]) return null;
    o += 1, s += 1;
  }
  const l = {
    year: r.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: r.month ?? 1,
    day: r.day ?? 1,
    hour: r.hour ?? 0,
    minute: r.minute ?? 0,
    second: r.second ?? 0
  };
  if (l.month < 1 || l.month > 12 || l.day < 1 || l.day > 31)
    return null;
  const u = new Date(
    l.year,
    l.month - 1,
    l.day,
    l.hour,
    l.minute,
    l.second
  );
  return u.getFullYear() !== l.year || u.getMonth() !== l.month - 1 || u.getDate() !== l.day ? null : l;
}
function xn(e, n) {
  const r = er(e);
  return r || J1(e, n);
}
function Q1(e, n, r) {
  return n && pt(e) < pt(n) ? n : r && pt(e) > pt(r) ? r : e;
}
const eh = ["hour", "minute", "second"];
function Ln(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const fb = Ke(function({
  size: n = "md",
  invalid: r = !1,
  value: o,
  defaultValue: s,
  format: l = "yyyy-MM-dd",
  min: u,
  max: a,
  showTime: c = !1,
  showButton: m = !0,
  allowClear: b = !1,
  inline: f = !1,
  disabledDates: D,
  locale: v = "en-US",
  onChange: C,
  onValueChange: z,
  onOpen: h,
  onClose: d,
  disabled: g,
  readOnly: p,
  placeholder: $,
  ariaLabel: y,
  triggerLabel: w,
  clearLabel: i,
  tabIndex: x,
  className: O,
  onBlur: I,
  onKeyDown: j,
  ...S
}, _) {
  const M = le(null), T = le(null), E = le(null), A = le(null), X = Ve(), H = o !== void 0, [re, Z] = Y(
    () => s != null ? An(xn(s, l) ?? Kt(), l, v) : ""
  ), [J, Q] = Y(!1), [G, F] = Y(null), [L, oe] = Y(() => {
    const B = o !== void 0 ? o ?? "" : s ?? "";
    if (B) {
      const ie = xn(B, l);
      if (ie) return ie;
    }
    return Kt();
  }), ce = ve(() => u ? er(u) : null, [u]), ee = ve(() => a ? er(a) : null, [a]), ue = ve(
    () => new Set(D ?? []),
    [D]
  ), me = ve(() => {
    const B = H ? o ?? "" : re;
    return B ? xn(B, l) : null;
  }, [o, re, H, l]), ke = K(
    (B) => {
      const ie = pt(B);
      return !!(ue.has(ie) || ce && ie < pt(ce) || ee && ie > pt(ee));
    },
    [ue, ce, ee]
  ), Be = K(
    (B) => {
      if (!ke(B)) return B;
      for (let ie = 1; ie <= 366; ie += 1) {
        const ze = At(B, ie);
        if (!ke(ze)) return ze;
        const Se = At(B, -ie);
        if (!ke(Se)) return Se;
      }
      return B;
    },
    [ke]
  ), je = K(
    (B) => {
      H || Z(B ? An(B, l, v) : "");
      const ie = B ? X1(B, c) : "";
      C?.(ie), z?.(ie);
    },
    [H, l, v, c, C, z]
  ), Ue = K(
    (B) => {
      T.current = B, typeof _ == "function" ? _(B) : _ && (_.current = B);
    },
    [_]
  ), be = K(() => {
    Q(!1), F(null), d?.(), f || E.current?.focus();
  }, [f, d]), Xe = K(() => {
    if (g) return;
    const B = me ?? Kt();
    F(B), oe(Be(B)), Q(!0), h?.();
  }, [g, me, Be, h]), Ze = K(() => {
    J ? be() : Xe();
  }, [J, be, Xe]), Re = K((B) => {
    A.current?.querySelector(
      `[data-date="${pt(B)}"]`
    )?.focus();
  }, []), Ye = K(
    (B) => {
      if (ke(B)) return;
      const ie = G ?? me, Se = {
        ...c ? {
          hour: ie?.hour ?? 0,
          minute: ie?.minute ?? 0,
          second: ie?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: B.year,
        month: B.month,
        day: B.day
      };
      F(Se), c || (je(Se), be());
    },
    [ke, G, me, c, je, be]
  ), qe = K(
    (B, ie) => {
      F((ze) => {
        const Se = ze ?? me ?? Kt(), et = Math.min(B === "hour" ? 23 : 59, Math.max(0, Se[B] + ie));
        return { ...Se, [B]: et };
      });
    },
    [me]
  ), Je = K(
    (B, ie) => {
      const ze = ie.replace(/\D/g, ""), Se = ze === "" ? 0 : Number(ze), Ee = B === "hour" ? 23 : 59;
      F((et) => ({ ...et ?? me ?? Kt(), [B]: Math.min(Ee, Se) }));
    },
    [me]
  ), U = K(() => {
    G && (je(G), be());
  }, [G, je, be]), N = K(() => {
    if (J) return;
    const B = xn(re, l);
    je(B ? Q1(B, ce, ee) : null);
  }, [J, re, l, ce, ee, je]), P = (B) => {
    const ie = B.target.value;
    H || Z(ie), J && F(null);
  }, V = (B) => {
    B.key === "Enter" ? (B.preventDefault(), J ? G && (je(G), be()) : N()) : B.key === "Escape" ? J && (B.preventDefault(), be()) : B.key === "ArrowDown" && !J ? (B.preventDefault(), Xe()) : B.key === "Tab" && J && Q(!1), j?.(B);
  }, se = (B) => {
    N(), I?.(B);
  }, te = (B) => {
    let ie = null;
    switch (B.key) {
      case "ArrowLeft":
        ie = At(L, -1), B.preventDefault();
        break;
      case "ArrowRight":
        ie = At(L, 1), B.preventDefault();
        break;
      case "ArrowUp":
        ie = At(L, -7), B.preventDefault();
        break;
      case "ArrowDown":
        ie = At(L, 7), B.preventDefault();
        break;
      case "Home":
        ie = At(L, -yr(L)), B.preventDefault();
        break;
      case "End":
        ie = At(L, 6 - yr(L)), B.preventDefault();
        break;
      case "PageUp":
        ie = Tn(L, B.shiftKey ? -12 : -1), B.preventDefault();
        break;
      case "PageDown":
        ie = Tn(L, B.shiftKey ? 12 : 1), B.preventDefault();
        break;
      case "Enter":
      case " ":
        B.preventDefault(), Ye(L);
        break;
      case "Escape":
        B.preventDefault(), be();
        break;
      case "Tab":
        Q(!1);
        break;
    }
    if (ie) {
      const ze = Be(ie);
      oe(ze), setTimeout(() => Re(ze), 0);
    }
  };
  Ne(() => {
    if (!J) return;
    const B = (ie) => {
      M.current && !M.current.contains(ie.target) && be();
    };
    return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, [J, be]), Ne(() => {
    if (!J) return;
    const B = (ie) => {
      ie.key === "Escape" && be();
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [J, be]);
  const pe = () => {
    H || Z(""), C?.(""), z?.(""), T.current?.focus();
  }, $e = J && G ? An(G, l, v) : H ? o ? An(xn(o, l) ?? Kt(), l, v) : "" : re, Pe = H ? !!o : re.length > 0, Ie = f || J, rt = { year: L.year, month: L.month }, vt = new Date(rt.year, rt.month - 1, 1).getDay(), ne = {
    year: rt.year,
    month: rt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let B = 0; B < U1; B += 1)
    De.push(At(ne, B - vt));
  const W = G ? pt(G) : me ? pt(me) : null, ae = pt(Kt()), _e = `${rt.year}-${xt(rt.month)}`, he = ve(
    () => new Intl.DateTimeFormat(v, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [v]
  ), de = new Intl.DateTimeFormat(v, {
    month: "long",
    year: "numeric"
  }).format(new Date(rt.year, rt.month - 1, 1)), ye = Array.from(
    { length: 7 },
    (B, ie) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
      new Date(2021, 0, 3 + ie)
    )
  ), Ae = n === "xs" ? Ce["dx-datepicker-input--xs"] : n === "sm" ? Ce["dx-datepicker-input--sm"] : n === "lg" ? Ce["dx-datepicker-input--lg"] : n === "xl" ? Ce["dx-datepicker-input--xl"] : Ce["dx-datepicker-input--md"], Fe = /* @__PURE__ */ k(
    "div",
    {
      className: Ce["dx-datepicker-calendar"],
      "aria-label": y ?? "Date picker",
      children: [
        /* @__PURE__ */ k("div", { className: Ce["dx-datepicker-header"], children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce["dx-datepicker-nav"],
              "aria-label": "Previous month",
              onClick: () => {
                const B = Be(Tn(L, -1));
                oe(B), setTimeout(() => Re(B), 0);
              },
              children: /* @__PURE__ */ t(Ge, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ t("span", { className: Ce["dx-datepicker-title"], children: de }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce["dx-datepicker-nav"],
              "aria-label": "Next month",
              onClick: () => {
                const B = Be(Tn(L, 1));
                oe(B), setTimeout(() => Re(B), 0);
              },
              children: /* @__PURE__ */ t(Ge, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ k(
          "div",
          {
            ref: A,
            role: "grid",
            className: Ce["dx-datepicker-grid"],
            onKeyDown: te,
            children: [
              /* @__PURE__ */ t("div", { role: "row", className: Ce["dx-datepicker-week-row"], children: ye.map((B) => /* @__PURE__ */ t(
                "div",
                {
                  role: "columnheader",
                  className: Ce["dx-datepicker-weekday"],
                  children: B
                },
                B
              )) }),
              Array.from({ length: 6 }, (B, ie) => /* @__PURE__ */ t("div", { role: "row", className: Ce["dx-datepicker-row"], children: De.slice(ie * 7, ie * 7 + 7).map((ze) => {
                const Se = pt(ze), Ee = ke(ze), et = Se.startsWith(_e);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Se,
                    tabIndex: Se === pt(L) ? 0 : -1,
                    "aria-selected": Se === W || void 0,
                    "aria-disabled": Ee || void 0,
                    "aria-label": he.format(
                      new Date(ze.year, ze.month - 1, ze.day)
                    ),
                    className: [
                      Ce["dx-datepicker-day"],
                      et ? null : Ce["dx-datepicker-day--outside"],
                      Se === ae ? Ce["dx-datepicker-day--today"] : null,
                      Se === W ? Ce["dx-datepicker-day--selected"] : null,
                      Ee ? Ce["dx-datepicker-day--disabled"] : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Ye(ze),
                    onFocus: () => oe(ze),
                    children: ze.day
                  },
                  Se
                );
              }) }, ie))
            ]
          }
        ),
        c && /* @__PURE__ */ k("div", { className: Ce["dx-datepicker-time"], children: [
          eh.map((B) => /* @__PURE__ */ k("label", { className: Ce["dx-datepicker-time-field"], children: [
            /* @__PURE__ */ t("span", { className: Ce["dx-datepicker-time-label"], children: Ln(B) }),
            /* @__PURE__ */ k("div", { className: Ce["dx-datepicker-time-control"], children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: Ce["dx-datepicker-time-input"],
                  inputMode: "numeric",
                  "aria-label": Ln(B),
                  value: xt((G ?? me ?? Kt())[B]),
                  onChange: (ie) => Je(B, ie.target.value),
                  onKeyDown: (ie) => {
                    ie.key === "ArrowUp" ? (ie.preventDefault(), qe(B, 1)) : ie.key === "ArrowDown" ? (ie.preventDefault(), qe(B, -1)) : ie.key === "Enter" && (ie.preventDefault(), U());
                  }
                }
              ),
              /* @__PURE__ */ k("span", { className: Ce["dx-datepicker-time-buttons"], children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${Ln(B).toLowerCase()}`,
                    onClick: () => qe(B, 1),
                    children: /* @__PURE__ */ t(Ge, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${Ln(B).toLowerCase()}`,
                    onClick: () => qe(B, -1),
                    children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, B)),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce["dx-datepicker-ok"],
              onClick: U,
              children: "OK"
            }
          )
        ] })
      ]
    }
  );
  return /* @__PURE__ */ k(
    "div",
    {
      ref: M,
      className: [
        Ce["dx-datepicker"],
        f ? Ce["dx-datepicker-inline"] : null,
        O
      ].filter(Boolean).join(" "),
      children: [
        !f && /* @__PURE__ */ k(Me, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Ue,
              type: "text",
              autoComplete: "off",
              value: $e,
              disabled: g,
              readOnly: p,
              placeholder: $,
              tabIndex: x,
              role: m ? void 0 : "combobox",
              "aria-label": y ?? "Date",
              "aria-haspopup": m ? void 0 : "dialog",
              "aria-expanded": m ? void 0 : Ie,
              "aria-controls": m ? void 0 : X,
              "aria-invalid": r || void 0,
              className: [
                Ce["dx-datepicker-input"],
                Ae,
                r ? Ce["dx-datepicker-input-invalid"] : null
              ].filter(Boolean).join(" "),
              onChange: P,
              onKeyDown: V,
              onBlur: se,
              onClick: () => {
                m || Ze();
              },
              ...S
            }
          ),
          b && !g && Pe && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                Ce["dx-datepicker-clear"],
                m ? Ce["dx-datepicker-clear--inset"] : null
              ].filter(Boolean).join(" "),
              "aria-label": i ?? "Clear",
              onClick: pe,
              children: /* @__PURE__ */ t(Ge, { name: "close", size: 14 })
            }
          ),
          m && /* @__PURE__ */ t(
            "button",
            {
              ref: E,
              type: "button",
              className: [
                Ce["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": w ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": J,
              "aria-controls": X,
              disabled: g,
              onClick: Ze,
              children: /* @__PURE__ */ t(Ge, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Ie && /* @__PURE__ */ t(
          "div",
          {
            id: X,
            role: f ? void 0 : "dialog",
            className: f ? void 0 : Ce["dx-datepicker-popup"],
            children: Fe
          }
        )
      ]
    }
  );
}), Ht = {
  "dx-rating": "_dx-rating_3v4s5_1",
  "dx-rating-item": "_dx-rating-item_3v4s5_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_3v4s5_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_3v4s5_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_3v4s5_51",
  "dx-rating-clear": "_dx-rating-clear_3v4s5_55",
  "dx-rating-readonly": "_dx-rating-readonly_3v4s5_87",
  "dx-rating-disabled": "_dx-rating-disabled_3v4s5_96"
}, pb = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: s = "Rating",
  clearLabel: l = "Clear",
  rateLabel: u = "Rate",
  tabIndex: a = 0,
  className: c,
  onChange: m,
  onValueChange: b
}) => {
  const [f, D] = Y(e), v = K(
    (g) => Math.min(n, Math.max(1, g)),
    [n]
  ), C = K(
    (g) => {
      m?.(g), b?.(g);
    },
    [m, b]
  ), z = K(
    (g) => {
      r || o || (C(g), D(g));
    },
    [r, o, C]
  ), h = (g) => {
    if (r || o) return;
    const p = f > 0 ? f : 1;
    switch (g.key) {
      case "ArrowRight":
      case "ArrowUp":
        g.preventDefault(), z(v(p + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        g.preventDefault(), z(v(p - 1));
        break;
      case "Home":
        g.preventDefault(), z(1);
        break;
      case "End":
        g.preventDefault(), z(n);
        break;
    }
  }, d = Array.from({ length: n }, (g, p) => p + 1);
  return /* @__PURE__ */ k(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": r || void 0,
      className: [
        Ht["dx-rating"],
        r ? Ht["dx-rating-readonly"] : null,
        o ? Ht["dx-rating-disabled"] : null,
        c
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      children: [
        !r && !o && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ht["dx-rating-clear"],
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: o,
            onClick: () => z(0),
            children: /* @__PURE__ */ t(Ge, { name: "ban", size: 16 })
          }
        ),
        d.map((g) => {
          const p = g <= e, $ = g === (e > 0 ? e : f);
          return /* @__PURE__ */ k(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": p,
              "aria-posinset": g,
              "aria-setsize": n,
              "aria-label": `${u} ${g}`,
              tabIndex: $ ? a : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Ht["dx-rating-item"],
                p ? Ht["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => z(g),
              onFocus: () => D(g),
              children: [
                /* @__PURE__ */ t("span", { className: Ht["dx-rating-icon-filled"], "aria-hidden": "true", children: /* @__PURE__ */ t(Ge, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Ht["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ t(Ge, { name: "star-outline", size: 20 }) })
              ]
            },
            g
          );
        })
      ]
    }
  );
}, Gt = {
  "dx-slider": "_dx-slider_xfmgi_1",
  "dx-slider-track": "_dx-slider-track_xfmgi_9",
  "dx-slider-range": "_dx-slider-range_xfmgi_17",
  "dx-slider-handle": "_dx-slider-handle_xfmgi_26",
  "dx-slider-vertical": "_dx-slider-vertical_xfmgi_58",
  "dx-slider-disabled": "_dx-slider-disabled_xfmgi_84"
};
function Ct(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const hb = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: o = 0,
  max: s = 100,
  step: l = 1,
  range: u = !1,
  orientation: a = "horizontal",
  disabled: c = !1,
  label: m = "Value",
  minLabel: b = "Min",
  maxLabel: f = "Max",
  tabIndex: D = 0,
  className: v,
  onChange: C,
  onInput: z,
  onValueChange: h,
  onInputChange: d
}) => {
  const g = le(null), p = le(null), [$, y] = Y(null), w = $ ?? e, i = ve(() => Ct(w, o, s), [w, o, s]), x = ve(
    () => Ct(u ? n : i, o, s),
    [u, n, i, o, s]
  ), O = ve(
    () => Ct(u ? Math.max(r, x) : i, o, s),
    [u, r, x, i, o, s]
  ), I = K(
    (L) => {
      const oe = s - o;
      return oe <= 0 ? 0 : (Ct(L, o, s) - o) / oe * 100;
    },
    [o, s]
  ), j = K(
    (L, oe) => {
      const ce = g.current;
      if (!ce) return o;
      const ee = ce.getBoundingClientRect();
      let ue;
      a === "vertical" ? ue = 1 - (oe - ee.top) / ee.height : ue = (L - ee.left) / ee.width;
      const me = o + Ct(ue, 0, 1) * (s - o);
      return l > 0 ? Ct(Math.round(me / l) * l, o, s) : Ct(me, o, s);
    },
    [o, s, l, a]
  ), S = K(
    (L) => {
      typeof L == "number" && y(L), C?.(L), h?.(L);
    },
    [C, h]
  ), _ = K(
    (L) => {
      typeof L == "number" && y(L), z?.(L), d?.(L);
    },
    [z, d]
  ), M = K(
    (L, oe, ce) => {
      const ee = j(oe, ce);
      let ue;
      u ? L === "min" ? ue = { min: Math.min(ee, O), max: O } : ue = { min: x, max: Math.max(ee, x) } : ue = ee, _(ue), p.current === null && S(ue);
    },
    [u, j, x, O, _, S]
  ), T = K(
    (L, oe) => {
      const ce = (l > 0 ? l : 1) * oe;
      let ee;
      u ? L === "min" ? ee = {
        min: Ct(x + ce, o, O),
        max: O
      } : ee = {
        min: x,
        max: Ct(O + ce, x, s)
      } : ee = Ct(i + ce, o, s), S(ee);
    },
    [u, l, o, s, x, O, i, S]
  ), E = (L, oe) => {
    if (!c)
      switch (oe.key) {
        case "ArrowLeft":
        case "ArrowDown":
          oe.preventDefault(), T(L, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          oe.preventDefault(), T(L, 1);
          break;
        case "Home":
          oe.preventDefault(), S(u ? L === "min" ? { min: o, max: O } : { min: x, max: x } : o);
          break;
        case "End":
          oe.preventDefault(), S(u ? L === "min" ? { min: O, max: O } : { min: x, max: s } : s);
          break;
      }
  }, A = (L, oe) => {
    c || (oe.preventDefault(), oe.currentTarget.focus(), typeof oe.currentTarget.setPointerCapture == "function" && oe.currentTarget.setPointerCapture(oe.pointerId), p.current = { key: L, pointerId: oe.pointerId }, M(L, oe.clientX, oe.clientY));
  }, X = (L) => {
    !p.current || p.current.pointerId !== L.pointerId || (L.preventDefault(), M(p.current.key, L.clientX, L.clientY));
  }, H = (L) => {
    !p.current || p.current.pointerId !== L.pointerId || (p.current = null, L.preventDefault(), S(u ? { min: x, max: O } : i));
  }, [re, Z] = Y(null), J = I(x), Q = I(O), G = u ? J : 0, F = Q;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Gt["dx-slider"],
        a === "vertical" ? Gt["dx-slider-vertical"] : null,
        c ? Gt["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ k("div", { ref: g, className: Gt["dx-slider-track"], children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Gt["dx-slider-range"],
            style: a === "vertical" ? { bottom: `${G}%`, height: `${F - G}%` } : { left: `${G}%`, width: `${F - G}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(x),
            "aria-orientation": a,
            "aria-label": u ? b : m,
            "aria-disabled": c || void 0,
            tabIndex: c || u && re === "max" ? -1 : D,
            className: Gt["dx-slider-handle"],
            style: a === "vertical" ? { bottom: `calc(${J}% - 8px)` } : { left: `calc(${J}% - 8px)` },
            onKeyDown: (L) => E("min", L),
            onPointerDown: (L) => A("min", L),
            onPointerMove: X,
            onPointerUp: H,
            onFocus: () => Z("min")
          }
        ),
        u && /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(O),
            "aria-orientation": a,
            "aria-label": f,
            "aria-disabled": c || void 0,
            tabIndex: c || re === "min" ? -1 : D,
            className: Gt["dx-slider-handle"],
            style: a === "vertical" ? { bottom: `calc(${Q}% - 8px)` } : { left: `calc(${Q}% - 8px)` },
            onKeyDown: (L) => E("max", L),
            onPointerDown: (L) => A("max", L),
            onPointerMove: X,
            onPointerUp: H,
            onFocus: () => Z("max")
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
}, th = "-10675199.02:48:05.4775808", nh = "10675199.02:48:05.4775808", Bt = 86400, Pt = 3600, Dt = 60, Gn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, xr = {
  days: Bt,
  hours: Pt,
  minutes: Dt,
  seconds: 1
}, rh = {
  day: Bt,
  hour: Pt,
  minute: Dt,
  second: 1
};
function nn(e) {
  return String(e).padStart(2, "0");
}
function Dn(e) {
  const n = e.trim();
  if (!n) return null;
  let r = 1, o = n;
  o.startsWith("-") ? (r = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const s = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (s) {
    if (!s.slice(1).some((f) => f != null)) return null;
    const a = s[1] != null ? Number(s[1]) : 0, c = s[2] != null ? Number(s[2]) : 0, m = s[3] != null ? Number(s[3]) : 0, b = s[4] != null ? Number(s[4]) : 0;
    return r * (a * Bt + c * Pt + m * Dt + b);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (l) {
    const u = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), c = Number(l[3]), m = l[4] != null ? Number(l[4]) : 0, b = l[5] != null ? +`0.${l[5]}` : 0;
    return a > 23 || c > 59 || m > 59 ? null : r * (u * Bt + a * Pt + c * Dt + m + b);
  }
  return null;
}
function oh(e) {
  return e.days * Bt + e.hours * Pt + e.minutes * Dt + e.seconds;
}
function vr(e) {
  let n = Math.abs(e);
  const r = Math.floor(n / Bt);
  n %= Bt;
  const o = Math.floor(n / Pt);
  n %= Pt;
  const s = Math.floor(n / Dt), l = Math.round(n % Dt * 1e9) / 1e9;
  return { days: r, hours: o, minutes: s, seconds: l };
}
function tr(e, n) {
  const r = e < 0;
  let o = Math.abs(e);
  n === "minute" ? o = Math.round(o / Dt) * Dt : n === "hour" ? o = Math.round(o / Pt) * Pt : n === "day" && (o = Math.round(o / Bt) * Bt);
  let s = Math.round(o % Dt);
  const l = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const u = Math.floor(o / Dt) + l, a = u % 60, c = Math.floor(u / 60), m = c % 24, b = Math.floor(c / 24), f = r ? "-" : "", D = b > 0 ? `${b}.` : "";
  switch (n) {
    case "day":
      return `${f}${b} day${b === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${D}${nn(m)}`;
    case "minute":
      return `${f}${D}${nn(m)}:${nn(a)}`;
    default:
      return `${f}${D}${nn(m)}:${nn(a)}:${nn(s)}`;
  }
}
function kr(e, n = "second") {
  const r = Dn(e);
  return r === null ? "" : tr(r, n);
}
function Yn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const mb = Ke(
  function({
    size: n = "md",
    invalid: r = !1,
    value: o,
    defaultValue: s,
    min: l = th,
    max: u = nh,
    step: a = "1",
    precision: c = "second",
    showDays: m = !0,
    showHours: b = !0,
    showMinutes: f = !0,
    showSeconds: D = !0,
    allowClear: v = !1,
    inline: C = !1,
    onChange: z,
    onValueChange: h,
    onOpen: d,
    onClose: g,
    disabled: p,
    placeholder: $,
    ariaLabel: y,
    triggerLabel: w,
    clearLabel: i,
    tabIndex: x,
    className: O,
    onBlur: I,
    onKeyDown: j,
    ...S
  }, _) {
    const M = le(null), T = le(null), E = le(null), A = Ve(), X = o !== void 0, [H, re] = Y(
      () => s != null ? kr(s, c) : ""
    ), [Z, J] = Y(!1), [Q, G] = Y(null), [F, L] = Y(null), oe = ve(
      () => Dn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), ce = ve(
      () => Dn(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), ee = ve(() => {
      const ne = Number.parseFloat(a);
      return Number.isNaN(ne) || ne <= 0 ? 1 : ne;
    }, [a]), ue = ve(() => {
      const ne = X ? o ?? "" : H;
      return ne ? Dn(ne) : null;
    }, [o, H, X]), me = K(
      (ne) => {
        const De = ne === null ? "" : tr(ne, c);
        X || re(De), z?.(De), h?.(De);
      },
      [X, c, z, h]
    ), ke = K(
      (ne) => {
        ne && Q !== null && me(Q), J(!1), G(null), L(null), g?.(), C || E.current?.focus();
      },
      [C, Q, me, g]
    ), Be = K(() => {
      p || (G(ue ?? 0), J(!0), d?.());
    }, [p, ue, d]), je = K(() => {
      Z ? ke(!1) : Be();
    }, [Z, ke, Be]), Ue = K(
      (ne, De) => {
        G((W) => {
          const _e = (W ?? ue ?? 0) + De * ee * xr[ne];
          return Yn(_e, oe, ce);
        });
      },
      [ue, ee, oe, ce]
    ), be = K(
      (ne) => {
        const De = F?.[ne];
        if (De == null) return;
        const W = Number.parseFloat(De), ae = Number.isNaN(W) ? 0 : W;
        G((_e) => {
          const he = _e ?? ue ?? 0, de = vr(he);
          de[ne] = ae;
          const Ae = (he < 0 ? -1 : 1) * oh(de);
          return Yn(Ae, oe, ce);
        }), L(null);
      },
      [F, ue, oe, ce]
    ), Xe = (ne, De) => {
      L((W) => ({ ...W ?? {}, [ne]: De }));
    }, Ze = (ne, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), be(ne), Ue(ne, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), be(ne), Ue(ne, -1);
          break;
        case "Home":
          De.preventDefault(), be(ne), G(oe);
          break;
        case "End":
          De.preventDefault(), be(ne), G(ce);
          break;
        case "Enter":
          De.preventDefault(), be(ne), ke(!0);
          break;
      }
    }, Re = K(() => {
      if (Z) return;
      const ne = Dn(H);
      me(ne !== null ? Yn(ne, oe, ce) : null);
    }, [Z, H, oe, ce, me]), Ye = (ne) => {
      X || re(ne.target.value);
    }, qe = (ne) => {
      ne.key === "Enter" ? (ne.preventDefault(), Z ? ke(!0) : Re()) : ne.key === "Escape" && Z ? (ne.preventDefault(), ke(!1)) : ne.key === "ArrowDown" && !Z ? (ne.preventDefault(), Be()) : ne.key === "Tab" && Z && J(!1), j?.(ne);
    }, Je = (ne) => {
      Re(), I?.(ne);
    }, U = () => {
      X || re(""), z?.(""), h?.(""), T.current?.focus();
    };
    Ne(() => {
      if (!Z) return;
      const ne = (De) => {
        M.current && !M.current.contains(De.target) && ke(!1);
      };
      return document.addEventListener("mousedown", ne), () => document.removeEventListener("mousedown", ne);
    }, [Z, ke]), Ne(() => {
      if (!Z) return;
      const ne = (De) => {
        De.key === "Escape" && ke(!1);
      };
      return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
    }, [Z, ke]), Ne(() => {
      if (C && Q !== null) {
        const ne = ue;
        (ne === null || Math.abs(Q - ne) > 1e-9) && me(Q);
      }
    }, [C, Q, ue, me]);
    const N = K(
      (ne) => {
        T.current = ne, typeof _ == "function" ? _(ne) : _ && (_.current = ne);
      },
      [_]
    ), P = X ? o ? kr(o, c) : "" : H, V = X ? !!o : H.length > 0, se = C || Z, te = Q ?? ue ?? 0, pe = vr(te), $e = rh[c], Ie = ["days", "hours", "minutes", "seconds"].filter(
      (ne) => xr[ne] >= $e && (ne === "days" ? m : ne === "hours" ? b : ne === "minutes" ? f : D)
    ), rt = n === "xs" ? He["dx-timespanpicker-input--xs"] : n === "sm" ? He["dx-timespanpicker-input--sm"] : n === "lg" ? He["dx-timespanpicker-input--lg"] : n === "xl" ? He["dx-timespanpicker-input--xl"] : He["dx-timespanpicker-input--md"], vt = /* @__PURE__ */ k("div", { className: He["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ t("div", { className: He["dx-timespanpicker-preview"], "aria-live": "polite", children: tr(te, c) }),
      /* @__PURE__ */ t("div", { className: He["dx-timespanpicker-units"], children: Ie.map((ne) => /* @__PURE__ */ k("label", { className: He["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ t("span", { className: He["dx-timespanpicker-unit-label"], children: Gn[ne] }),
        /* @__PURE__ */ k("span", { className: He["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: He["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: F?.[ne] ?? String(pe[ne]),
              onChange: (De) => Xe(ne, De.target.value),
              onKeyDown: (De) => Ze(ne, De),
              onBlur: () => be(ne)
            }
          ),
          /* @__PURE__ */ k("span", { className: He["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Gn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Ue(ne, 1);
                },
                children: /* @__PURE__ */ t(Ge, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Gn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Ue(ne, -1);
                },
                children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, ne)) }),
      /* @__PURE__ */ t("div", { className: He["dx-timespanpicker-footer"], children: /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: He["dx-timespanpicker-ok"],
          onClick: () => ke(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ k(
      "div",
      {
        ref: M,
        className: [
          He["dx-timespanpicker"],
          C ? He["dx-timespanpicker-inline"] : null,
          O
        ].filter(Boolean).join(" "),
        children: [
          !C && /* @__PURE__ */ k(Me, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: N,
                type: "text",
                autoComplete: "off",
                value: P,
                disabled: p,
                placeholder: $,
                tabIndex: x,
                role: "combobox",
                "aria-label": y ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                "aria-invalid": r || void 0,
                className: [
                  He["dx-timespanpicker-input"],
                  rt,
                  r ? He["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Ye,
                onKeyDown: qe,
                onBlur: Je,
                ...S
              }
            ),
            v && !p && V && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: He["dx-timespanpicker-clear"],
                "aria-label": i ?? "Clear",
                onClick: U,
                children: /* @__PURE__ */ t(Ge, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: E,
                type: "button",
                className: [
                  He["dx-timespanpicker-trigger"]
                ].filter(Boolean).join(" "),
                "aria-label": w ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                disabled: p,
                onClick: je,
                children: /* @__PURE__ */ t(Ge, { name: "clock", size: 16 })
              }
            )
          ] }),
          se && /* @__PURE__ */ t(
            "div",
            {
              id: A,
              role: C ? void 0 : "dialog",
              "aria-label": y ?? "Time span picker",
              className: C ? void 0 : He["dx-timespanpicker-popup"],
              children: vt
            }
          )
        ]
      }
    );
  }
), sh = "_wrapper_t1zvh_1", ah = "_cells_t1zvh_8", lh = "_cell_t1zvh_8", ih = "_invalid_t1zvh_63", ch = "_live_t1zvh_72", Yt = {
  wrapper: sh,
  cells: ah,
  cell: lh,
  "cell-sm": "_cell-sm_t1zvh_45",
  "cell-md": "_cell-md_t1zvh_51",
  "cell-lg": "_cell-lg_t1zvh_57",
  invalid: ih,
  live: ch
};
function wr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const gb = Ke(
  function({
    length: n = 6,
    value: r,
    defaultValue: o,
    onChange: s,
    invalid: l = !1,
    size: u = "md",
    autoFocus: a = !1,
    disabled: c = !1,
    label: m = "Security code",
    liveAnnounce: b = !0,
    className: f,
    "aria-label": D
  }, v) {
    const C = Ve(), z = r !== void 0, [h, d] = Y(wr(o).join("")), g = z ? wr(r).join("") : h, p = Array.from({ length: n }, (S, _) => g[_] ?? ""), $ = le([]), [y, w] = Y(""), i = (S) => {
      z || d(S), s?.(S);
    }, x = (S) => {
      const _ = $.current[S];
      _ && !_.disabled && (_.focus(), _.select());
    }, O = (S, _) => {
      const M = _.replace(/\D/g, "").slice(-1), T = g.split("");
      if (M) {
        T[S] = M;
        const E = T.join("").slice(0, n);
        i(E), E.length < n ? x(S + 1) : b && w("Code complete");
      }
    }, I = (S, _) => {
      if (_.key === "Backspace") {
        if (_.preventDefault(), g[S]) {
          const M = g.split("");
          M[S] = "", i(M.join(""));
        } else if (S > 0) {
          const M = g.split("");
          M[S - 1] = "", i(M.join("")), x(S - 1);
        }
      } else _.key === "ArrowLeft" && S > 0 ? (_.preventDefault(), x(S - 1)) : _.key === "ArrowRight" && S < n - 1 ? (_.preventDefault(), x(S + 1)) : _.key === "Home" ? (_.preventDefault(), x(0)) : _.key === "End" && (_.preventDefault(), x(n - 1));
    }, j = (S, _) => {
      _.preventDefault();
      const M = _.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!M) return;
      const T = g.split("");
      let E = 0;
      for (let X = 0; X < M.length && S + X < n; X++)
        T[S + X] = M[X] ?? "", E++;
      const A = T.join("");
      i(A), A.length >= n ? b && w("Code complete") : x(S + E);
    };
    return /* @__PURE__ */ k(
      "div",
      {
        className: [Yt.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": D ?? m,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Yt.cells, Yt[u]].join(" "), children: p.map((S, _) => /* @__PURE__ */ t(
            "input",
            {
              ref: (M) => {
                $.current[_] = M, _ === 0 && v && (typeof v == "function" ? v(M) : v.current = M);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: S,
              disabled: c,
              "aria-label": `Digit ${_ + 1} of ${n}`,
              "aria-invalid": l && S !== "" ? !0 : void 0,
              autoFocus: a && _ === 0,
              className: [Yt.cell, Yt[`cell-${u}`], l ? Yt.invalid : null].filter(Boolean).join(" "),
              onChange: (M) => O(_, M.target.value),
              onKeyDown: (M) => I(_, M),
              onPaste: (M) => j(_, M),
              onFocus: (M) => M.target.select(),
              onBlur: () => {
                b && w("");
              }
            },
            _
          )) }),
          b && /* @__PURE__ */ t("span", { id: `${C}-live`, role: "status", "aria-live": "polite", className: Yt.live, children: y })
        ]
      }
    );
  }
), dh = "_wrapper_itqsj_1", uh = "_header_itqsj_7", _h = "_label_itqsj_15", fh = "_clear_itqsj_22", ph = "_canvas_itqsj_53", hh = "_disabled_itqsj_69", rn = {
  wrapper: dh,
  header: uh,
  label: _h,
  clear: fh,
  canvas: ph,
  disabled: hh
}, yb = Ke(
  function({
    value: n,
    defaultValue: r,
    onChange: o,
    penColor: s = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: a = "Signature",
    width: c,
    height: m = 140,
    disabled: b = !1,
    className: f
  }, D) {
    const v = le(null), C = le(!1), z = le(!1), h = le({ x: 0, y: 0 });
    Ne(() => {
      const i = v.current;
      if (!i) return;
      const x = window.devicePixelRatio || 1, O = Math.round((c ?? i.clientWidth) * x), I = Math.round(m * x);
      (i.width !== O || i.height !== I) && (i.width = O, i.height = I);
      const j = i.getContext("2d");
      if (!j) return;
      j.setTransform(x, 0, 0, x, 0, 0), j.lineWidth = l, j.strokeStyle = s, j.lineCap = "round", j.lineJoin = "round";
      const S = n ?? r;
      if (S) {
        const _ = new Image();
        _.onload = () => {
          j.drawImage(_, 0, 0, i.clientWidth, m);
        }, _.src = S;
      }
    }, [n, r, s, l, c, m]);
    const d = () => {
      const i = v.current;
      if (!i) return;
      const x = i.toDataURL("image/png");
      o?.(x);
    }, g = () => {
      const i = v.current;
      if (!i) return;
      const x = i.getContext("2d");
      x && x.clearRect(0, 0, i.width, i.height), o?.("");
    };
    nr(D, () => ({
      clear: g,
      toDataURL: (i = "image/png", x) => v.current?.toDataURL(i, x) ?? ""
    }));
    const p = (i) => {
      const x = i.currentTarget.getBoundingClientRect();
      return { x: i.clientX - x.left, y: i.clientY - x.top };
    }, $ = (i) => {
      b || (i.preventDefault(), typeof i.currentTarget.setPointerCapture == "function" && i.currentTarget.setPointerCapture(i.pointerId), C.current = !0, z.current = !1, h.current = p(i));
    }, y = (i) => {
      if (!C.current) return;
      i.preventDefault();
      const x = i.currentTarget.getContext("2d");
      if (!x) return;
      const O = p(i);
      x.beginPath(), x.moveTo(h.current.x, h.current.y), x.lineTo(O.x, O.y), x.stroke(), h.current = O, z.current = !0;
    }, w = (i) => {
      C.current && (i.preventDefault(), C.current = !1, z.current && d());
    };
    return /* @__PURE__ */ k("div", { className: [rn.wrapper, f, b ? rn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ k("div", { className: rn.header, children: [
        /* @__PURE__ */ t("span", { className: rn.label, children: a }),
        /* @__PURE__ */ t("button", { type: "button", className: rn.clear, onClick: g, disabled: b, children: u })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: v,
          role: "img",
          "aria-label": a,
          "aria-disabled": b || void 0,
          style: { width: c ? `${c}px` : void 0, height: `${m}px` },
          className: rn.canvas,
          onPointerDown: $,
          onPointerMove: y,
          onPointerUp: w,
          onPointerCancel: w
        }
      )
    ] });
  }
), mh = "_wrapper_1v23y_1", gh = "_trigger_1v23y_7", yh = "_list_1v23y_35", bh = "_row_1v23y_44", xh = "_name_1v23y_59", vh = "_size_1v23y_68", kh = "_progress_1v23y_74", wh = "_fill_1v23y_82", $h = "_status_1v23y_99", Nh = "_remove_1v23y_106", Mt = {
  wrapper: mh,
  trigger: gh,
  list: yh,
  row: bh,
  name: xh,
  size: vh,
  progress: kh,
  fill: wh,
  status: $h,
  remove: Nh
};
function Sh(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const bb = Ke(function({
  url: n,
  multiple: r = !1,
  parameterName: o = "files",
  auto: s = !0,
  headers: l,
  accept: u,
  chooseText: a = "Upload",
  children: c,
  onProgress: m,
  onComplete: b,
  onError: f
}, D) {
  const v = le(null), [C, z] = Y([]), h = le(/* @__PURE__ */ new Map()), d = (w, i) => {
    z((x) => x.map((O) => O.file.name === w ? { ...O, ...i } : O));
  }, g = (w) => {
    if (!n) return;
    const i = new XMLHttpRequest();
    h.current.set(w.file.name, i);
    const x = new FormData();
    if (x.append(o, w.file), i.upload.addEventListener("progress", (O) => {
      if (!O.lengthComputable) return;
      const I = Math.round(O.loaded / O.total * 100);
      d(w.file.name, { state: "uploading", progress: I }), m?.(w.file.name, I);
    }), i.addEventListener("load", () => {
      i.status >= 200 && i.status < 300 ? (d(w.file.name, { state: "complete", progress: 100 }), b?.(w.file.name)) : (d(w.file.name, { state: "error", message: `HTTP ${i.status}` }), f?.(w.file.name, `HTTP ${i.status}`));
    }), i.addEventListener("error", () => {
      d(w.file.name, { state: "error", message: "Network error" }), f?.(w.file.name, "Network error");
    }), l)
      for (const [O, I] of Object.entries(l))
        i.setRequestHeader(O, I);
    i.open("POST", n), i.send(x), d(w.file.name, { state: "uploading", progress: 0 });
  }, p = (w) => {
    if (!w) return;
    const i = [...w].map((x) => ({
      file: x,
      state: "pending",
      progress: 0
    }));
    z((x) => [...x, ...i]), v.current && (v.current.value = ""), s && i.forEach(g);
  }, $ = (w) => {
    h.current.get(w)?.abort(), h.current.delete(w), z((x) => x.filter((O) => O.file.name !== w));
  }, y = c ?? /* @__PURE__ */ k("button", { type: "button", className: Mt.trigger, onClick: () => v.current?.click(), children: [
    /* @__PURE__ */ t(Ge, { name: "upload", size: 14 }),
    a
  ] });
  return nr(D, () => ({
    open: () => v.current?.click(),
    upload: () => C.forEach((w) => w.state === "pending" ? g(w) : null)
  })), /* @__PURE__ */ k("div", { className: Mt.wrapper, children: [
    y,
    /* @__PURE__ */ t(
      "input",
      {
        ref: v,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: u,
        "data-testid": "upload-input",
        onChange: (w) => p(w.target.files)
      }
    ),
    !c && C.length > 0 && /* @__PURE__ */ t("ul", { className: Mt.list, children: C.map(({ file: w, state: i, progress: x, message: O }) => /* @__PURE__ */ k("li", { className: Mt.row, "data-state": i, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: Mt.name, children: w.name }),
      /* @__PURE__ */ t("span", { className: Mt.size, children: Sh(w.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: Mt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": x,
          children: /* @__PURE__ */ t("span", { className: Mt.fill, style: { width: `${x}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: Mt.status, role: "status", children: i === "uploading" ? "Uploading" : i === "complete" ? "Complete" : i === "error" ? O ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Mt.remove,
          "aria-label": `Remove ${w.name}`,
          onClick: () => $(w.name),
          children: /* @__PURE__ */ t(Ge, { name: "close", size: 14 })
        }
      )
    ] }, w.name)) })
  ] });
}), Dh = "_zone_14tvz_1", zh = "_dragging_14tvz_23", Ch = "_caption_14tvz_28", Mh = "_browse_14tvz_40", Oh = "_disabled_14tvz_67", vn = {
  zone: Dh,
  dragging: zh,
  caption: Ch,
  browse: Mh,
  disabled: Oh
};
function jh(e, n) {
  return n ? n.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const o = r.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === r;
  }) : !0;
}
const xb = Ke(function({
  accept: n,
  multiple: r = !1,
  onDrop: o,
  label: s = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: u = "Browse",
  disabled: a = !1,
  className: c
}, m) {
  const b = le(null), [f, D] = Y(!1), v = (g) => {
    if (!g || g.length === 0) return;
    const p = [...g].filter(($) => jh($, n ?? ""));
    p.length !== 0 && o?.(p);
  }, C = (g) => {
    a || (g.preventDefault(), D(!0));
  }, z = (g) => {
    a || (g.preventDefault(), g.dataTransfer.dropEffect = "copy", D(!0));
  }, h = (g) => {
    a || g.currentTarget.contains(g.relatedTarget) || D(!1);
  }, d = (g) => {
    a || (g.preventDefault(), D(!1), v(g.dataTransfer.files));
  };
  return nr(m, () => ({
    open: () => b.current?.click()
  })), /* @__PURE__ */ k(
    "div",
    {
      role: "region",
      "aria-label": s,
      className: [vn.zone, f ? vn.dragging : null, a ? vn.disabled : null, c].filter(Boolean).join(" "),
      onDragEnter: C,
      onDragOver: z,
      onDragLeave: h,
      onDrop: d,
      children: [
        /* @__PURE__ */ t("p", { className: vn.caption, children: f ? l : s }),
        !a && /* @__PURE__ */ t("button", { type: "button", className: vn.browse, onClick: () => b.current?.click(), children: u }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: b,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (g) => {
              v(g.target.files), g.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Ih = "_root_1dfo5_1", Eh = "_menubar_1dfo5_5", Th = "_horizontal_1dfo5_15", Ah = "_vertical_1dfo5_20", Lh = "_itemWrapper_1dfo5_25", Bh = "_item_1dfo5_25", Ph = "_disabled_1dfo5_61", Rh = "_icon_1dfo5_68", qh = "_text_1dfo5_75", Fh = "_caret_1dfo5_79", Kh = "_hasChildren_1dfo5_85", Hh = "_submenu_1dfo5_94", Wh = "_submenuItem_1dfo5_118", lt = {
  root: Ih,
  menubar: Eh,
  horizontal: Th,
  vertical: Ah,
  itemWrapper: Lh,
  item: Bh,
  disabled: Ph,
  icon: Rh,
  text: qh,
  caret: Fh,
  hasChildren: Kh,
  submenu: Hh,
  submenuItem: Wh
};
function kn(e) {
  return !!e.disabled;
}
function vb({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: s = "Menu",
  className: l
}) {
  const u = Ve(), a = le(null), c = le(null), [m, b] = Y(null), f = le(0), D = le(null), v = K(
    (d) => {
      const g = { text: d.text, value: d.value, path: d.path };
      (r ?? o)?.(g);
    },
    [r, o]
  ), C = (d, g) => {
    if (!kn(d)) {
      if (d.children && d.children.length > 0) {
        const p = m === g, $ = Date.now() - f.current < 600;
        if (p && $) {
          f.current = 0;
          return;
        }
        b((y) => y === g ? null : g);
        return;
      }
      v(d), b(null);
    }
  }, z = (d) => {
    kn(d) || d.children && d.children.length > 0 || (v(d), b(null));
  };
  Ne(() => {
    if (m == null) return;
    const d = (g) => {
      a.current && !a.current.contains(g.target) && b(null);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [m]), Ne(() => {
    if (D.current != null && m === D.current) {
      const d = `${u}-submenu-${m}`;
      document.getElementById(d)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), D.current = null;
    }
  }, [m, u]);
  const h = (d) => {
    const g = c.current;
    if (!g) return;
    const p = Array.from(
      g.querySelectorAll('[data-top="true"]')
    ).filter((w) => !w.hasAttribute("disabled") && w.getAttribute("aria-disabled") !== "true");
    if (m != null) {
      const w = `${u}-submenu-${m}`, i = document.getElementById(w);
      if (i) {
        const x = Array.from(i.querySelectorAll('[role="menuitem"]')).filter(
          (j) => j.getAttribute("aria-disabled") !== "true"
        ), O = document.activeElement, I = O ? x.indexOf(O) : -1;
        if (d.key === "ArrowDown") {
          d.preventDefault(), I === -1 ? x[0]?.focus() : x[(I + 1) % x.length]?.focus();
          return;
        }
        if (d.key === "ArrowUp") {
          d.preventDefault(), I === -1 ? x[x.length - 1]?.focus() : x[(I - 1 + x.length) % x.length]?.focus();
          return;
        }
        if (d.key === "Escape") {
          d.preventDefault(), b(null), g.querySelector(`[data-top="true"][data-index="${m}"]`)?.focus();
          return;
        }
        if (d.key === "Enter" || d.key === " ")
          return;
      }
      if (d.key === "Escape") {
        d.preventDefault(), b(null);
        return;
      }
    }
    const $ = document.activeElement, y = $ ? p.indexOf($) : -1;
    if (d.key === "ArrowRight" || n === "vertical" && d.key === "ArrowDown") {
      if (d.preventDefault(), p.length === 0) return;
      const w = y === -1 ? 0 : (y + 1) % p.length;
      p[w]?.focus();
      return;
    }
    if (d.key === "ArrowLeft" || n === "vertical" && d.key === "ArrowUp") {
      if (d.preventDefault(), p.length === 0) return;
      const w = y === -1 ? p.length - 1 : (y - 1 + p.length) % p.length;
      p[w]?.focus();
      return;
    }
    if (d.key === "ArrowDown") {
      if (y >= 0) {
        const w = $?.getAttribute("data-index"), i = w != null ? Number(w) : -1, x = i >= 0 ? e[i] : void 0;
        x?.children && x.children.length > 0 && !kn(x) && (d.preventDefault(), D.current = i, b(i));
      }
      return;
    }
    if (d.key === "Home") {
      d.preventDefault(), p[0]?.focus();
      return;
    }
    if (d.key === "End") {
      d.preventDefault(), p[p.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: a,
      "aria-label": s,
      className: [lt.root, lt[n], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t(
        "div",
        {
          ref: c,
          role: "menubar",
          "aria-label": s,
          className: lt.menubar,
          onKeyDown: h,
          children: e.map((d, g) => {
            const p = !!d.children && d.children.length > 0, $ = m === g, y = kn(d), w = `${u}-submenu-${g}`;
            return /* @__PURE__ */ k(
              "div",
              {
                className: lt.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && p && !y && (f.current = Date.now(), b(g));
                },
                onMouseLeave: () => {
                  n === "horizontal" && p && b((i) => i === g ? null : i);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ k(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": g,
                      "data-dx-menu-item": "",
                      "aria-disabled": y || void 0,
                      "aria-haspopup": p ? "menu" : void 0,
                      "aria-expanded": p ? $ : void 0,
                      "aria-controls": p ? w : void 0,
                      tabIndex: y ? -1 : 0,
                      disabled: y,
                      className: [lt.item, y ? lt.disabled : null, p ? lt.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => C(d, g),
                      children: [
                        d.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: d.icon }) : null,
                        /* @__PURE__ */ t("span", { className: lt.text, children: d.text }),
                        p ? /* @__PURE__ */ t("span", { className: lt.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  p && $ ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: w,
                      role: "menu",
                      className: lt.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": d.text,
                      children: d.children?.map((i, x) => {
                        const O = kn(i), I = !!i.children && i.children.length > 0;
                        return /* @__PURE__ */ k(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": O || void 0,
                            "aria-haspopup": I ? "menu" : void 0,
                            tabIndex: O ? -1 : 0,
                            disabled: O,
                            className: [lt.submenuItem, O ? lt.disabled : null].filter(Boolean).join(" "),
                            onClick: () => z(i),
                            children: [
                              i.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: i.icon }) : null,
                              /* @__PURE__ */ t("span", { className: lt.text, children: i.text })
                            ]
                          },
                          `${i.text}-${x}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${d.text}-${g}`
            );
          })
        }
      )
    }
  );
}
const Vh = "_root_1hs3b_1", Uh = "_list_1hs3b_9", Xh = "_item_1hs3b_14", Gh = "_trigger_1hs3b_18", Yh = "_disabled_1hs3b_44", Zh = "_expanded_1hs3b_51", Jh = "_icon_1hs3b_55", Qh = "_text_1hs3b_66", em = "_caret_1hs3b_73", tm = "_open_1hs3b_80", nm = "_submenu_1hs3b_84", rm = "_submenuItem_1hs3b_93", om = "_nestedWrapper_1hs3b_122", sm = "_nestedTrigger_1hs3b_127", am = "_nestedMenu_1hs3b_152", lm = "_iconOnly_1hs3b_160", Oe = {
  root: Vh,
  list: Uh,
  item: Xh,
  trigger: Gh,
  disabled: Yh,
  expanded: Zh,
  icon: Jh,
  text: Qh,
  caret: em,
  open: tm,
  submenu: nm,
  submenuItem: rm,
  nestedWrapper: om,
  nestedTrigger: sm,
  nestedMenu: am,
  iconOnly: lm
};
function im({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: o
}) {
  const s = !!e.children && e.children.length > 0, [l, u] = Y(!1), a = `${n}-nested-${r}`, c = !!e.disabled, m = () => {
    if (!c) {
      if (s) {
        u((f) => !f);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, b = (f) => {
    f.key === "Enter" || f.key === " " ? (f.preventDefault(), m()) : f.key === "Escape" && l && (f.preventDefault(), u(!1));
  };
  return s ? /* @__PURE__ */ k("div", { className: Oe.nestedWrapper, children: [
    /* @__PURE__ */ k(
      "button",
      {
        type: "button",
        "aria-expanded": l,
        "aria-controls": a,
        "aria-disabled": c || void 0,
        disabled: c,
        tabIndex: c ? -1 : 0,
        className: [Oe.nestedTrigger, c ? Oe.disabled : null].filter(Boolean).join(" "),
        onClick: m,
        onKeyDown: b,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: Oe.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [Oe.caret, l ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    l ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: Oe.nestedMenu, children: e.children?.map((f, D) => {
      const v = !!f.disabled;
      return /* @__PURE__ */ k(
        "div",
        {
          role: "menuitem",
          "aria-disabled": v || void 0,
          tabIndex: v ? -1 : 0,
          className: [Oe.submenuItem, v ? Oe.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            v || f.children && f.children.length > 0 || o({ text: f.text, value: f.value, path: f.path });
          },
          onKeyDown: (C) => {
            if (C.key === "Enter" || C.key === " ") {
              if (C.preventDefault(), v) return;
              o({ text: f.text, value: f.value, path: f.path });
            }
          },
          children: [
            f.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: f.icon }) : null,
            /* @__PURE__ */ t("span", { className: Oe.text, children: f.text })
          ]
        },
        `${f.text}-${D}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ k(
    "div",
    {
      role: "menuitem",
      "aria-disabled": c || void 0,
      tabIndex: c ? -1 : 0,
      className: [Oe.submenuItem, c ? Oe.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        c || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (f) => {
        if (f.key === "Enter" || f.key === " ") {
          if (f.preventDefault(), c) return;
          o({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ t("span", { className: Oe.text, children: e.text })
      ]
    }
  );
}
function kb({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: o,
  ShowArrow: s,
  displayStyle: l,
  DisplayStyle: u,
  onClick: a,
  Click: c,
  ariaLabel: m = "Panel menu",
  className: b
}) {
  const f = Ve(), D = n ?? r ?? !1, v = o ?? s ?? !0, C = l ?? u ?? "iconAndText", [z, h] = Y([]), d = K(
    ($) => {
      const y = { text: $.text, value: $.value, path: $.path };
      (a ?? c)?.(y);
    },
    [a, c]
  ), g = ($, y, w) => {
    if (!w.disabled) {
      if (y) {
        h((i) => i.includes($) ? i.filter((O) => O !== $) : D ? [...i, $] : [$]);
        return;
      }
      d(w);
    }
  }, p = ($) => {
    const y = $.target;
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "Escape") {
        const w = y.getAttribute("aria-controls");
        if (w) {
          const i = w.match(/-panel-(\d+)$/);
          if (i) {
            const x = Number(i[1]);
            h((O) => O.filter((I) => I !== x));
          }
        } else {
          const i = y.closest('[role="menu"]');
          if (i) {
            const O = i.id.match(/-panel-(\d+)$/);
            if (O) {
              const I = Number(O[1]);
              h((S) => S.filter((_) => _ !== I)), document.getElementById(`${f}-trigger-${I}`)?.focus();
            }
          }
        }
        $.preventDefault();
        return;
      }
      if ($.key === "ArrowDown" || $.key === "ArrowUp") {
        const w = Array.from(
          $.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((I) => !I.hasAttribute("disabled") && I.getAttribute("aria-disabled") !== "true"), i = w.indexOf(y);
        if (i === -1) return;
        $.preventDefault();
        const x = $.key === "ArrowDown" ? 1 : -1;
        w[(i + x + w.length) % w.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": m,
      className: [
        Oe.root,
        C === "icon" ? Oe.iconOnly : Oe.iconAndText,
        b
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("div", { className: Oe.list, role: "presentation", children: e.map(($, y) => {
        const w = !!$.children && $.children.length > 0, i = z.includes(y), x = !!$.disabled, O = `${f}-panel-${y}`, I = `${f}-trigger-${y}`;
        return /* @__PURE__ */ k("div", { className: Oe.item, children: [
          /* @__PURE__ */ k(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": w ? i : void 0,
              "aria-controls": w ? O : void 0,
              "aria-disabled": x || void 0,
              disabled: x,
              tabIndex: x ? -1 : 0,
              className: [
                Oe.trigger,
                x ? Oe.disabled : null,
                i ? Oe.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => g(y, w, $),
              children: [
                $.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: $.icon }) : null,
                C === "iconAndText" ? /* @__PURE__ */ t("span", { className: Oe.text, children: $.text }) : /* @__PURE__ */ t("span", { className: Oe.text, "aria-label": $.text, children: $.icon ? null : $.text.slice(0, 1) }),
                w && v ? /* @__PURE__ */ t("span", { className: [Oe.caret, i ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          w && i ? /* @__PURE__ */ t("div", { id: O, role: "menu", className: Oe.submenu, "aria-labelledby": I, children: $.children?.map((j, S) => /* @__PURE__ */ t(
            im,
            {
              item: j,
              baseId: f,
              parentKey: `${y}-${S}`,
              onEmit: d
            },
            `${j.text}-${S}`
          )) }) : null
        ] }, `${$.text}-${y}`);
      }) })
    }
  );
}
const cm = "_root_pjwno_1", dm = "_trigger_pjwno_7", um = "_defaultTrigger_pjwno_40", _m = "_avatar_pjwno_46", fm = "_menu_pjwno_58", pm = "_item_pjwno_74", hm = "_disabled_pjwno_88", mm = "_active_pjwno_97", gm = "_icon_pjwno_107", ym = "_text_pjwno_114", Ot = {
  root: cm,
  trigger: dm,
  defaultTrigger: um,
  avatar: _m,
  menu: fm,
  item: pm,
  disabled: hm,
  active: mm,
  icon: gm,
  text: ym
};
function wb({
  items: e,
  trigger: n,
  Template: r,
  onClick: o,
  Click: s,
  ariaLabel: l = "Profile menu",
  className: u
}) {
  const a = Ve(), c = `${a}-menu`, m = le(null), b = le(null), [f, D] = Y(!1), [v, C] = Y(-1), z = n ?? r, h = e.map((i, x) => i.disabled ? -1 : x).filter((i) => i >= 0), d = K(
    (i) => {
      if (i.disabled) return;
      const x = { text: i.text, path: i.path };
      (o ?? s)?.(x), D(!1), b.current?.focus();
    },
    [o, s]
  ), g = K(() => {
    C(h[0] ?? -1), D(!0);
  }, [h]), p = K(() => {
    D(!1), C(-1), b.current?.focus();
  }, []);
  Ne(() => {
    if (!f) return;
    const i = (x) => {
      m.current && !m.current.contains(x.target) && (D(!1), C(-1));
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [f]), Ne(() => {
    if (!f) return;
    const i = (x) => {
      x.key === "Escape" && (x.preventDefault(), p());
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [f, p]);
  const $ = (i) => {
    if (h.length === 0) return;
    const x = h.indexOf(v), O = x === -1 ? 0 : (x + i + h.length) % h.length, I = h[O];
    I != null && C(I);
  }, y = (i) => {
    if (!f) {
      (i.key === "ArrowDown" || i.key === "Enter" || i.key === " ") && (i.preventDefault(), g());
      return;
    }
    switch (i.key) {
      case "Escape":
        i.preventDefault(), p();
        break;
      case "ArrowDown":
        i.preventDefault(), $(1);
        break;
      case "ArrowUp":
        i.preventDefault(), $(-1);
        break;
      case "Home":
        i.preventDefault(), h[0] != null && C(h[0]);
        break;
      case "End":
        i.preventDefault(), h[h.length - 1] != null && C(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        if (i.preventDefault(), v >= 0) {
          const x = e[v];
          x && !x.disabled && d(x);
        }
        break;
      case "Tab":
        D(!1), C(-1);
        break;
    }
  }, w = (i) => {
    switch (i.key) {
      case "ArrowDown":
        i.preventDefault(), $(1);
        break;
      case "ArrowUp":
        i.preventDefault(), $(-1);
        break;
      case "Home":
        i.preventDefault(), h[0] != null && C(h[0]);
        break;
      case "End":
        i.preventDefault(), h[h.length - 1] != null && C(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        if (i.preventDefault(), v >= 0) {
          const x = e[v];
          x && !x.disabled && d(x);
        }
        break;
      case "Escape":
        i.preventDefault(), p();
        break;
      case "Tab":
        D(!1), C(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: m,
      className: [Ot.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ k("nav", { "aria-label": l, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: b,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": c,
            "aria-label": l,
            className: Ot.trigger,
            onClick: () => f ? p() : g(),
            onKeyDown: y,
            children: z ?? /* @__PURE__ */ k("span", { className: Ot.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: Ot.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        f ? /* @__PURE__ */ t(
          "div",
          {
            id: c,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": v >= 0 ? `${a}-item-${v}` : void 0,
            className: Ot.menu,
            onKeyDown: w,
            tabIndex: -1,
            children: e.map((i, x) => {
              const O = !!i.disabled, I = x === v;
              return /* @__PURE__ */ k(
                "div",
                {
                  id: `${a}-item-${x}`,
                  role: "menuitem",
                  "aria-disabled": O || void 0,
                  tabIndex: O ? -1 : 0,
                  className: [Ot.item, I ? Ot.active : null, O ? Ot.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    O || d(i);
                  },
                  onMouseEnter: () => {
                    O || C(x);
                  },
                  children: [
                    i.icon ? /* @__PURE__ */ t("span", { className: Ot.icon, "aria-hidden": "true", children: i.icon }) : null,
                    /* @__PURE__ */ t("span", { className: Ot.text, children: i.text })
                  ]
                },
                `${i.text}-${x}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const bm = "_root_5fmpv_1", xm = "_bottomRight_5fmpv_11", vm = "_bottomLeft_5fmpv_16", km = "_topRight_5fmpv_21", wm = "_topLeft_5fmpv_26", $m = "_menu_5fmpv_31", Nm = "_itemWrapper_5fmpv_48", Sm = "_tooltip_5fmpv_54", Dm = "_main_5fmpv_76", zm = "_mainIcon_5fmpv_104", Cm = "_mainOpen_5fmpv_109", Mm = "_item_5fmpv_48", Om = "_disabled_5fmpv_141", jm = "_itemIcon_5fmpv_148", dt = {
  root: bm,
  bottomRight: xm,
  bottomLeft: vm,
  topRight: km,
  topLeft: wm,
  menu: $m,
  itemWrapper: Nm,
  tooltip: Sm,
  main: Dm,
  mainIcon: zm,
  mainOpen: Cm,
  item: Mm,
  disabled: Om,
  itemIcon: jm
};
function $b({
  items: e,
  position: n,
  Position: r,
  icon: o = "+",
  onClick: s,
  Click: l,
  ariaLabel: u = "Open menu",
  className: a
}) {
  const c = n ?? r ?? "bottom-right", b = `${Ve()}-menu`, f = le(null), D = le(null), [v, C] = Y(!1), z = K(
    (p) => {
      if (p.disabled) return;
      const $ = { text: p.text, value: p.value };
      (s ?? l)?.($), C(!1), D.current?.focus();
    },
    [s, l]
  );
  Ne(() => {
    if (!v) return;
    const p = ($) => {
      f.current && !f.current.contains($.target) && C(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [v]), Ne(() => {
    if (!v) return;
    const p = ($) => {
      $.key === "Escape" && (C(!1), D.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [v]);
  const h = c === "bottom-right" ? dt.bottomRight : c === "bottom-left" ? dt.bottomLeft : c === "top-right" ? dt.topRight : dt.topLeft, d = (p) => {
    !v && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), C(!0)) : v && p.key === "Escape" && (p.preventDefault(), C(!1));
  }, g = (p) => {
    p.key === "Escape" && (p.preventDefault(), C(!1), D.current?.focus());
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: f,
      className: [dt.root, h, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        v ? /* @__PURE__ */ t(
          "div",
          {
            id: b,
            role: "menu",
            "aria-label": u,
            className: dt.menu,
            onKeyDown: g,
            children: e.map((p, $) => {
              const y = !!p.disabled;
              return /* @__PURE__ */ k("div", { className: dt.itemWrapper, children: [
                /* @__PURE__ */ t("span", { className: dt.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": y || void 0,
                    title: p.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [dt.item, y ? dt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => z(p),
                    children: /* @__PURE__ */ t("span", { className: dt.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${$}`);
            })
          }
        ) : null,
        /* @__PURE__ */ t(
          "button",
          {
            ref: D,
            type: "button",
            className: dt.main,
            "aria-haspopup": "menu",
            "aria-expanded": v,
            "aria-controls": b,
            "aria-label": u,
            onClick: () => C((p) => !p),
            onKeyDown: d,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [dt.mainIcon, v ? dt.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const Im = "_root_1qf28_1", Em = "_list_1qf28_5", Tm = "_item_1qf28_15", Am = "_link_1qf28_22", Lm = "_linkButton_1qf28_23", Bm = "_current_1qf28_24", Pm = "_disabled_1qf28_68", Rm = "_icon_1qf28_74", qm = "_text_1qf28_81", Fm = "_separator_1qf28_85", We = {
  root: Im,
  list: Em,
  item: Tm,
  link: Am,
  linkButton: Lm,
  current: Bm,
  disabled: Pm,
  icon: Rm,
  text: qm,
  separator: Fm
};
function Nb({ items: e, onClick: n, Click: r, ariaLabel: o = "Breadcrumb", className: s }) {
  const l = n ?? r, u = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": o, className: [We.root, s].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: We.list, children: e.map((a, c) => {
    const m = c === e.length - 1, b = !!a.disabled;
    return /* @__PURE__ */ k("li", { className: We.item, children: [
      m ? b ? /* @__PURE__ */ k(
        "span",
        {
          className: [We.current, We.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : a.path ? /* @__PURE__ */ k(
        "a",
        {
          href: a.path,
          className: We.link,
          "aria-current": "page",
          onClick: (f) => {
            f.preventDefault(), u(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ k(
        "span",
        {
          className: We.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : b ? /* @__PURE__ */ k(
        "span",
        {
          className: [We.link, We.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : a.path ? /* @__PURE__ */ k(
        "a",
        {
          href: a.path,
          className: We.link,
          onClick: (f) => {
            f.preventDefault(), u(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: We.linkButton,
          tabIndex: 0,
          onClick: () => u(a),
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ),
      m ? null : /* @__PURE__ */ t("span", { className: We.separator, "aria-hidden": "true", children: "/" })
    ] }, `${a.text}-${c}`);
  }) }) });
}
const Km = "_root_yiemy_1", Hm = "_list_yiemy_5", Wm = "_item_yiemy_15", Vm = "_connector_yiemy_21", Um = "_connectorCompleted_yiemy_30", Xm = "_step_yiemy_34", Gm = "_active_yiemy_69", Ym = "_completed_yiemy_75", Zm = "_circle_yiemy_79", Jm = "_check_yiemy_109", Qm = "_icon_yiemy_114", eg = "_number_yiemy_119", tg = "_text_yiemy_124", ut = {
  root: Km,
  list: Hm,
  item: Wm,
  connector: Vm,
  connectorCompleted: Um,
  step: Xm,
  active: Gm,
  completed: Ym,
  circle: Zm,
  check: Jm,
  icon: Qm,
  number: eg,
  text: tg
};
function Sb({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: s,
  Linear: l,
  onChange: u,
  Change: a,
  onSelectedIndexChange: c,
  ariaLabel: m = "Steps",
  className: b
}) {
  const f = s ?? l ?? !1, D = n ?? r, v = D !== void 0, [C, z] = Y(() => Math.min(Math.max(0, D ?? o), Math.max(0, e.length - 1))), d = Math.min(Math.max(0, v ? D : C), Math.max(0, e.length - 1)), g = le(null), p = K(
    (w) => {
      const i = Math.min(Math.max(0, w), Math.max(0, e.length - 1));
      v || z(i), (u ?? a ?? c)?.(i);
    },
    [v, u, a, c, e.length]
  ), $ = K(
    (w, i) => !!(i.disabled || f && w > d + 1),
    [f, d]
  ), y = (w) => {
    const i = Array.from(
      w.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), x = document.activeElement, O = x ? i.indexOf(x) : -1;
    if (w.key === "ArrowRight" || w.key === "ArrowDown") {
      if (w.preventDefault(), i.length === 0) return;
      const I = O === -1 ? 0 : (O + 1) % i.length, j = i[I];
      j && j.focus();
    } else if (w.key === "ArrowLeft" || w.key === "ArrowUp") {
      if (w.preventDefault(), i.length === 0) return;
      const I = O === -1 ? i.length - 1 : (O - 1 + i.length) % i.length, j = i[I];
      j && j.focus();
    } else w.key === "Home" ? (w.preventDefault(), i[0]?.focus()) : w.key === "End" && (w.preventDefault(), i[i.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": m,
      className: [ut.root, b].filter(Boolean).join(" "),
      onKeyDown: y,
      children: /* @__PURE__ */ t("ol", { ref: g, role: "list", className: ut.list, children: e.map((w, i) => {
        const x = i === d, O = i < d, I = $(i, w);
        return /* @__PURE__ */ k("li", { role: "listitem", className: ut.item, children: [
          i > 0 ? /* @__PURE__ */ t("span", { className: [ut.connector, O ? ut.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ k(
            "button",
            {
              type: "button",
              "data-step": i,
              "aria-current": x ? "step" : void 0,
              "aria-disabled": I ? "true" : void 0,
              disabled: I,
              tabIndex: I ? -1 : 0,
              className: [
                ut.step,
                x ? ut.active : null,
                O ? ut.completed : null,
                I ? ut.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                I || p(i);
              },
              children: [
                /* @__PURE__ */ t("span", { className: ut.circle, "aria-hidden": "true", children: O ? /* @__PURE__ */ t("span", { className: ut.check, "aria-hidden": "true", children: "✓" }) : w.icon ? /* @__PURE__ */ t("span", { className: ut.icon, children: w.icon }) : /* @__PURE__ */ t("span", { className: ut.number, children: i + 1 }) }),
                /* @__PURE__ */ t("span", { className: ut.text, children: w.text })
              ]
            }
          )
        ] }, `${w.text}-${i}`);
      }) })
    }
  );
}
const ng = "_root_1fegn_1", rg = "_horizontal_1fegn_13", og = "_vertical_1fegn_17", sg = "_pane_1fegn_21", ag = "_handle_1fegn_31", lg = "_handleHorizontal_1fegn_51", ig = "_handleVertical_1fegn_57", cg = "_handleGrip_1fegn_63", dg = "_handleCollapseHint_1fegn_75", ug = "_collapseBtn_1fegn_79", _g = "_collapseBtnCollapsed_1fegn_109", $t = {
  root: ng,
  horizontal: rg,
  vertical: og,
  pane: sg,
  handle: ag,
  handleHorizontal: lg,
  handleVertical: ig,
  handleGrip: cg,
  handleCollapseHint: dg,
  collapseBtn: ug,
  collapseBtnCollapsed: _g
};
function wn(e, n) {
  if (!e) return n;
  const r = e.trim();
  if (r.endsWith("%")) {
    const s = parseFloat(r.slice(0, -1));
    return Number.isNaN(s) ? n : s;
  }
  if (r.endsWith("px")) {
    const s = parseFloat(r.slice(0, -2));
    return Number.isNaN(s) ? n : s;
  }
  const o = parseFloat(r);
  return Number.isNaN(o) ? n : o;
}
function Lt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Db({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: o,
  Resize: s,
  onCollapse: l,
  Collapse: u,
  ariaLabel: a = "Splitter",
  className: c
}) {
  const m = e ?? n ?? "horizontal", b = m === "horizontal", f = le(null), D = K(() => {
    const _ = r.length;
    if (_ === 0) return [];
    const M = r.map((E) => E.size ? wn(E.size, 100 / _) : 100 / _), T = M.reduce((E, A) => E + A, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? M.map((E) => E / T * 100) : M;
  }, [r]), [v, C] = Y(() => D()), [z, h] = Y(() => r.map((_) => !!_.collapsed)), d = le(v);
  Ne(() => {
    h(r.map((_) => !!_.collapsed));
  }, [r]);
  const g = K(() => r.map((_) => wn(_.min, 0)), [r]), p = K(() => r.map((_) => wn(_.max, 100)), [r]), $ = K(
    (_, M) => {
      const T = { paneIndex: _, newSize: M, cancel: !1 };
      return (o ?? s)?.(T), !T.cancel;
    },
    [o, s]
  ), y = K(
    (_, M) => {
      const T = { paneIndex: _, collapse: M, cancel: !1 };
      return (l ?? u)?.(T), !T.cancel;
    },
    [l, u]
  ), w = K(
    (_) => {
      const M = !z[_];
      y(_, M) && (M ? (d.current = [...v], h((T) => {
        const E = [...T];
        return E[_] !== void 0 && (E[_] = !0), E;
      }), C((T) => {
        const E = [...T], A = E[_] ?? 0, X = _ < E.length - 1 ? _ + 1 : _ - 1;
        if (X >= 0 && X < E.length) {
          const H = E[X] ?? 0;
          E[X] = H + A, E[_] = 0;
        } else
          E[_] = 0;
        return E;
      })) : (h((T) => {
        const E = [...T];
        return E[_] !== void 0 && (E[_] = !1), E;
      }), C(() => {
        const T = [...d.current];
        return T.length !== r.length ? r.map(() => 100 / r.length) : T;
      })));
    },
    [z, v, r.length, y]
  ), i = le(null), x = K(
    (_, M, T) => {
      const E = f.current;
      if (!E) return null;
      const A = E.getBoundingClientRect();
      let X;
      if (b) {
        if (A.width === 0) return null;
        X = (M - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        X = (T - A.top) / A.height * 100;
      }
      let H = 0;
      for (let Z = 0; Z < _; Z++) {
        const J = v[Z];
        J !== void 0 && (H += J);
      }
      return X - H;
    },
    [b, v]
  ), O = (_, M) => {
    M.preventDefault();
    const T = M.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(M.pointerId), i.current = { handleIndex: _, pointerId: M.pointerId };
  }, I = (_) => {
    if (!i.current || i.current.pointerId !== _.pointerId) return;
    _.preventDefault();
    const M = i.current.handleIndex, T = x(M, _.clientX, _.clientY);
    if (T == null) return;
    const E = g(), A = p(), X = E[M] ?? 0, H = A[M] ?? 100, re = M + 1, Z = E[re] ?? 0, J = A[re] ?? 100, Q = v[M] ?? 0, G = v[re] ?? 0, F = Q + G;
    if (F <= 0) return;
    let L = Lt(T, X, H), oe = F - L;
    if (oe < Z) {
      if (oe = Z, L = F - oe, L < X || L > H) return;
    } else if (oe > J && (oe = J, L = F - oe, L < X || L > H))
      return;
    L = Lt(L, X, H), oe = F - L, $(M, L) && C((ce) => {
      const ee = [...ce];
      return ee[M] = L, ee[re] = oe, ee;
    });
  }, j = (_) => {
    !i.current || i.current.pointerId !== _.pointerId || (i.current = null);
  }, S = (_, M) => {
    const T = g(), E = p(), A = _, X = _ + 1, H = v[A] ?? 0, re = v[X] ?? 0, Z = H + re;
    let J = 0;
    const Q = !!r[A]?.collapsible, G = !!r[X]?.collapsible;
    if (b ? M.key === "ArrowLeft" ? J = -5 : M.key === "ArrowRight" && (J = 5) : M.key === "ArrowUp" ? J = -5 : M.key === "ArrowDown" && (J = 5), M.key === "Home") {
      M.preventDefault();
      let F = T[A] ?? 0, L = Z - F;
      if (L = Lt(L, T[X] ?? 0, E[X] ?? 100), F = Z - L, F = Lt(F, T[A] ?? 0, E[A] ?? 100), !$(A, F)) return;
      C((oe) => {
        const ce = [...oe];
        return ce[A] = F, ce[X] = L, ce;
      });
      return;
    }
    if (M.key === "End") {
      M.preventDefault();
      let F = E[A] ?? 100;
      F = Math.min(F, Z - (T[X] ?? 0));
      let L = Z - F;
      if (L = Lt(L, T[X] ?? 0, E[X] ?? 100), F = Z - L, F = Lt(F, T[A] ?? 0, E[A] ?? 100), !$(A, F)) return;
      C((oe) => {
        const ce = [...oe];
        return ce[A] = F, ce[X] = L, ce;
      });
      return;
    }
    if ((M.key === "Enter" || M.key === " ") && (Q || G)) {
      M.preventDefault(), w(Q ? A : X);
      return;
    }
    if (J !== 0) {
      M.preventDefault();
      let F = H + J, L = Z - F;
      const oe = T[A] ?? 0, ce = E[A] ?? 100, ee = T[X] ?? 0, ue = E[X] ?? 100;
      if (F = Lt(F, oe, ce), L = Z - F, (L < ee || L > ue) && (L = Lt(L, ee, ue), F = Z - L, F = Lt(F, oe, ce), L = Z - F), !$(A, F)) return;
      C((me) => {
        const ke = [...me];
        return ke[A] = F, ke[X] = L, ke;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: f,
      className: [$t.root, b ? $t.horizontal : $t.vertical, c].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((_, M) => {
        const T = !!z[M], E = T ? 0 : v[M] ?? 100 / r.length, A = T ? { display: "none" } : b ? { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, X = wn(_.min, 0), H = wn(_.max, 100), re = M < r.length - 1, Z = !!r[M + 1]?.collapsible;
        return /* @__PURE__ */ k("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ k(
            "div",
            {
              role: "group",
              "aria-label": _.label ?? `Pane ${M + 1}`,
              className: $t.pane,
              style: A,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : _.children,
                _.collapsible && !T ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${M + 1}`,
                    "aria-expanded": !T,
                    onClick: () => w(M),
                    children: b ? "◀" : "▲"
                  }
                ) : null,
                _.collapsible && T ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${M + 1}`,
                    "aria-expanded": !T,
                    onClick: () => w(M),
                    children: b ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && _.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: $t.collapseBtnCollapsed,
                "aria-label": `Expand pane ${M + 1}`,
                "aria-expanded": "false",
                onClick: () => w(M),
                children: b ? "▶" : "▼"
              }
            )
          ) : null,
          re ? /* @__PURE__ */ k(
            "div",
            {
              role: "separator",
              "aria-orientation": m,
              "aria-valuemin": X,
              "aria-valuemax": H,
              "aria-valuenow": Math.round(E),
              "aria-label": `Resize handle ${M + 1}`,
              tabIndex: T || z[M + 1] ? -1 : 0,
              className: [$t.handle, b ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (J) => O(M, J),
              onPointerMove: I,
              onPointerUp: j,
              onKeyDown: (J) => S(M, J),
              children: [
                /* @__PURE__ */ t("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (_.collapsible || Z) && /* @__PURE__ */ t("span", { className: $t.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, M);
      })
    }
  );
}
const fg = "_root_h36xh_1", pg = "_list_h36xh_5", hg = "_vertical_h36xh_14", mg = "_horizontal_h36xh_20", gg = "_item_h36xh_28", yg = "_link_h36xh_32", bg = "_active_h36xh_57", on = {
  root: fg,
  list: pg,
  vertical: hg,
  horizontal: mg,
  item: gg,
  link: yg,
  active: bg
};
function zb({
  items: e,
  selector: n,
  Selector: r,
  orientation: o,
  Orientation: s,
  onClick: l,
  Click: u,
  ariaLabel: a = "Table of contents",
  className: c
}) {
  const m = n ?? r, b = o ?? s ?? "vertical", [f, D] = Y(() => e[0]?.selector ?? null), v = le(f);
  v.current = f;
  const C = K(
    (z, h) => {
      if (D(z.selector), (l ?? u)?.({ text: z.text, selector: z.selector }), h) {
        try {
          h.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          h.scrollIntoView();
        }
        const g = h;
        g.getAttribute("tabindex") == null && g.tabIndex === -1 || g.tabIndex < 0 ? (g.getAttribute("tabindex"), g.setAttribute("tabindex", "-1"), g.focus({ preventScroll: !0 })) : g.focus({ preventScroll: !0 });
      }
    },
    [l, u]
  );
  return Ne(() => {
    if (e.length === 0) return;
    const h = (() => {
      if (m) {
        const y = document.querySelector(m);
        if (y) return y;
      }
      return window;
    })();
    let d = null;
    const g = /* @__PURE__ */ new Map(), p = () => {
      let y = null, w = null;
      for (const x of e) {
        const O = document.querySelector(x.selector);
        if (!O) continue;
        g.set(x.selector, O);
        const I = O.getBoundingClientRect();
        let j = I.top;
        if (h !== window) {
          const S = h.getBoundingClientRect();
          j = I.top - S.top;
        }
        j <= 80 ? (!w || j > w.el.getBoundingClientRect().top - (h !== window ? h.getBoundingClientRect().top : 0)) && (w = { sel: x.selector, el: O }) : (!y || j < y.top) && (y = { sel: x.selector, top: j });
      }
      const i = w?.sel ?? y?.sel ?? e[0]?.selector ?? null;
      i && i !== v.current && D(i);
    }, $ = () => {
      p();
    };
    if (typeof IntersectionObserver < "u") {
      const y = h === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: h, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      d = new IntersectionObserver((w) => {
        const i = w.filter((x) => x.isIntersecting).sort((x, O) => x.boundingClientRect.top - O.boundingClientRect.top);
        if (i[0]) {
          const x = i[0].target;
          for (const O of e) {
            if (document.querySelector(O.selector) === x) {
              D(O.selector);
              break;
            }
            if (O.selector.startsWith("#") && x.id === O.selector.slice(1)) {
              D(O.selector);
              break;
            }
          }
        } else
          p();
      }, y);
      for (const w of e) {
        const i = document.querySelector(w.selector);
        i && (d.observe(i), g.set(w.selector, i));
      }
    }
    return h === window ? (window.addEventListener("scroll", $, { passive: !0 }), p(), () => {
      window.removeEventListener("scroll", $), d?.disconnect();
    }) : (h.addEventListener("scroll", $, { passive: !0 }), p(), () => {
      h.removeEventListener("scroll", $), d?.disconnect();
    });
  }, [e, m]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [on.root, on[b], c].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: on.list, children: e.map((z) => {
    const h = z.selector === f;
    return /* @__PURE__ */ t("li", { className: on.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: z.selector.startsWith("#") || z.selector.startsWith(".") ? z.selector : `#${z.selector}`,
        className: [on.link, h ? on.active : null].filter(Boolean).join(" "),
        "aria-current": h ? "location" : void 0,
        onClick: (d) => {
          d.preventDefault();
          const g = document.querySelector(z.selector);
          C(z, g);
        },
        children: z.text
      }
    ) }, `${z.text}-${z.selector}`);
  }) }) });
}
const xg = "_root_c923v_1", vg = "_viewport_c923v_17", kg = "_slide_c923v_24", wg = "_active_c923v_33", $g = "_arrow_c923v_37", Ng = "_prev_c923v_71", Sg = "_next_c923v_75", Dg = "_pauseBtn_c923v_79", zg = "_indicators_c923v_110", Cg = "_indicator_c923v_110", Mg = "_indicatorActive_c923v_145", Nt = {
  root: xg,
  viewport: vg,
  slide: kg,
  active: wg,
  arrow: $g,
  prev: Ng,
  next: Sg,
  pauseBtn: Dg,
  indicators: zg,
  indicator: Cg,
  indicatorActive: Mg
};
function Cb({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: s,
  Auto: l,
  interval: u,
  Interval: a,
  pauseOnHover: c,
  PauseOnHover: m,
  showArrows: b,
  ShowArrows: f,
  showIndicators: D,
  ShowIndicators: v,
  onChange: C,
  Change: z,
  ariaLabel: h = "Carousel",
  className: d
}) {
  const g = n ?? r, p = g !== void 0, [$, y] = Y(() => Math.min(Math.max(0, g ?? o), Math.max(0, e.length - 1))), w = p ? g : $, i = e.length === 0 ? 0 : Math.min(Math.max(0, w), e.length - 1), x = s ?? l ?? !1, O = u ?? a ?? 3e3, I = c ?? m ?? !0, j = b ?? f ?? !0, S = D ?? v ?? !0, [_, M] = Y(!1), [T, E] = Y(!1), A = _ || T, X = le(null), H = Ve(), re = K(
    (ee) => {
      const ue = e.length === 0 ? 0 : (ee % e.length + e.length) % e.length;
      p || y(ue), (C ?? z)?.(ue);
    },
    [p, C, z, e.length]
  ), Z = K(() => {
    re(i - 1);
  }, [re, i]), J = K(() => {
    re(i + 1);
  }, [re, i]), Q = K(
    (ee) => {
      re(ee);
    },
    [re]
  );
  Ne(() => {
    if (!x || A || e.length <= 1) return;
    const ee = setInterval(() => {
      re(i + 1);
    }, O);
    return () => clearInterval(ee);
  }, [x, A, O, i, re, e.length]);
  const G = (ee) => {
    e.length !== 0 && (ee.key === "ArrowLeft" ? (ee.preventDefault(), Z()) : ee.key === "ArrowRight" ? (ee.preventDefault(), J()) : ee.key === "Home" ? (ee.preventDefault(), Q(0)) : ee.key === "End" && (ee.preventDefault(), Q(e.length - 1)));
  }, F = () => {
    I && x && E(!0);
  }, L = () => {
    I && x && E(!1);
  }, oe = () => {
    I && x && E(!0);
  }, ce = () => {
    I && x && E(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ k(
    "div",
    {
      ref: X,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": h,
      tabIndex: 0,
      className: [Nt.root, d].filter(Boolean).join(" "),
      onKeyDown: G,
      onMouseEnter: F,
      onMouseLeave: L,
      onFocusCapture: oe,
      onBlurCapture: ce,
      children: [
        /* @__PURE__ */ t("div", { id: H, className: Nt.viewport, children: e.map((ee, ue) => {
          const me = ue === i;
          return /* @__PURE__ */ t(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ue + 1} of ${e.length}`,
              "aria-hidden": me ? void 0 : !0,
              hidden: !me,
              className: [Nt.slide, me ? Nt.active : null].filter(Boolean).join(" "),
              children: ee
            },
            ue
          );
        }) }),
        j && e.length > 1 ? /* @__PURE__ */ k(Me, { children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [Nt.arrow, Nt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": H,
              onClick: Z,
              children: "‹"
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [Nt.arrow, Nt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": H,
              onClick: J,
              children: "›"
            }
          )
        ] }) : null,
        x ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": _ ? "Resume" : "Pause",
            "aria-pressed": _,
            onClick: () => M((ee) => !ee),
            children: _ ? "▶" : "⏸"
          }
        ) : null,
        S && e.length > 1 ? /* @__PURE__ */ t("div", { className: Nt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ee, ue) => {
          const me = ue === i;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [Nt.indicator, me ? Nt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${ue + 1}`,
              "aria-current": me ? "true" : void 0,
              "aria-controls": H,
              onClick: () => Q(ue)
            },
            ue
          );
        }) }) : null
      ]
    }
  );
}
const Og = "_root_yo0cc_1", jg = "_group_yo0cc_20", Ig = "_itemWrapper_yo0cc_30", Eg = "_treeitem_yo0cc_34", Tg = "_disabled_yo0cc_50", Ag = "_selected_yo0cc_60", Lg = "_caret_yo0cc_66", Bg = "_caretIcon_yo0cc_113", Pg = "_caretOpen_yo0cc_120", Rg = "_caretPlaceholder_yo0cc_124", qg = "_label_yo0cc_130", Fg = "_loading_yo0cc_137", Kg = "_loadingRow_yo0cc_143", Hg = "_empty_yo0cc_149", it = {
  root: Og,
  group: jg,
  itemWrapper: Ig,
  treeitem: Eg,
  disabled: Tg,
  selected: Ag,
  caret: Lg,
  caretIcon: Bg,
  caretOpen: Pg,
  caretPlaceholder: Rg,
  label: qg,
  loading: Fg,
  loadingRow: Kg,
  empty: Hg
};
function Mb({
  data: e,
  Data: n,
  children: r,
  Children: o,
  textProperty: s,
  TextProperty: l,
  keyProperty: u,
  KeyProperty: a,
  selectionMode: c,
  SelectionMode: m,
  selectedItem: b,
  SelectedItem: f,
  selectedItems: D,
  SelectedItems: v,
  defaultSelectedItem: C,
  defaultSelectedItems: z,
  onChange: h,
  Change: d,
  onExpand: g,
  Expand: p,
  onCollapse: $,
  Collapse: y,
  loadChildData: w,
  LoadChildData: i,
  template: x,
  Template: O,
  itemTemplate: I,
  ItemTemplate: j,
  ariaLabel: S,
  AriaLabel: _,
  className: M
}) {
  const T = e ?? n ?? [], E = r ?? o, A = s ?? l ?? "text", X = u ?? a ?? "id", H = c ?? m ?? "single", re = S ?? _ ?? "Tree", Z = w ?? i, J = x ?? O ?? I ?? j, Q = K(
    (W) => {
      const ae = W[X];
      return ae != null ? String(ae) : String(W.id ?? "");
    },
    [X]
  ), G = K(
    (W) => {
      const ae = W[A];
      if (ae != null) return String(ae);
      const _e = W.text;
      return _e != null ? String(_e) : "";
    },
    [A]
  ), F = K(
    (W) => {
      if (E) {
        const _e = E(W);
        if (_e !== void 0) return _e;
      }
      const ae = W.children;
      if (Array.isArray(ae)) return ae;
    },
    [E]
  ), L = K(
    (W) => {
      const ae = /* @__PURE__ */ new Set(), _e = (he) => {
        for (const de of he) {
          const ye = Q(de);
          de.expanded && ae.add(ye);
          const Ae = F(de);
          Ae && Ae.length > 0 && _e(Ae);
        }
      };
      return _e(W), ae;
    },
    [Q, F]
  ), [oe, ce] = Y(() => L(T)), [ee, ue] = Y(() => /* @__PURE__ */ new Map()), [me, ke] = Y(() => /* @__PURE__ */ new Set()), Be = b ?? f, je = D ?? v, Xe = H === "multiple" ? je !== void 0 : Be !== void 0, Ze = K(() => {
    if (H === "multiple") {
      if (z && z.length > 0)
        return new Set(z.map((_e) => Q(_e)));
      const W = /* @__PURE__ */ new Set(), ae = (_e) => {
        for (const he of _e) {
          he.selected && W.add(Q(he));
          const de = F(he);
          de && ae(de);
        }
      };
      return ae(T), W;
    } else {
      if (C) return /* @__PURE__ */ new Set([Q(C)]);
      let W = null;
      const ae = (_e) => {
        for (const he of _e) {
          if (he.selected)
            return W = Q(he), !0;
          const de = F(he);
          if (de && ae(de)) return !0;
        }
        return !1;
      };
      return ae(T), W ? /* @__PURE__ */ new Set([W]) : /* @__PURE__ */ new Set();
    }
  }, [H, C, z, Q, F, T]), [Re, Ye] = Y(() => Ze()), qe = ve(() => {
    if (H === "multiple") {
      if (je !== void 0) {
        const W = je;
        return W ? new Set(W.map((ae) => Q(ae))) : /* @__PURE__ */ new Set();
      }
      return Re;
    } else {
      if (Be !== void 0) {
        const W = Be;
        return W ? /* @__PURE__ */ new Set([Q(W)]) : /* @__PURE__ */ new Set();
      }
      return Re;
    }
  }, [H, je, Be, Re, Q]), Je = K(
    (W) => {
      let ae;
      const _e = (he) => {
        for (const de of he) {
          if (Q(de) === W)
            return ae = de, !0;
          const Ae = ee.get(Q(de)) ?? F(de);
          if (Ae && _e(Ae)) return !0;
        }
        return !1;
      };
      if (_e(T), !ae) {
        for (const he of ee.values())
          if (_e(he)) break;
      }
      return ae;
    },
    [T, ee, Q, F]
  ), U = K(() => {
    const W = /* @__PURE__ */ new Map(), ae = (_e) => {
      for (const he of _e) {
        const de = Q(he);
        W.set(de, he);
        const Ae = ee.get(de) ?? F(he);
        Ae && ae(Ae);
      }
    };
    return ae(T), W;
  }, [T, ee, Q, F]), N = K(
    (W) => {
      const ae = Q(W);
      if (!W.disabled)
        if (H === "multiple") {
          const he = new Set(qe);
          he.has(ae) ? he.delete(ae) : he.add(ae), Xe || Ye(he);
          const de = h ?? d;
          if (de) {
            const ye = U(), Ae = [];
            for (const Fe of he) {
              const B = ye.get(Fe) ?? Je(Fe);
              B && Ae.push(B);
            }
            de({ item: W, selectedItems: Ae });
          }
        } else if (!qe.has(ae) || qe.size !== 1 || !qe.has(ae)) {
          Xe || Ye(/* @__PURE__ */ new Set([ae]));
          const de = h ?? d;
          de && de({ item: W, selectedItem: W });
        } else {
          const de = h ?? d;
          de && de({ item: W, selectedItem: W });
        }
    },
    [Q, H, qe, Xe, h, d, U, Je]
  ), P = K(
    async (W) => {
      const ae = Q(W);
      if (!!W.disabled) return;
      const he = oe.has(ae), de = g ?? p, ye = $ ?? y, Ae = F(W), B = ee.get(ae) ?? Ae, ze = !(B !== void 0 && B.length > 0) && Z != null;
      if (he) {
        ce((Se) => {
          const Ee = new Set(Se);
          return Ee.delete(ae), Ee;
        }), ye?.({ item: W });
        return;
      }
      if (ze) {
        if (me.has(ae)) return;
        ke((Se) => {
          const Ee = new Set(Se);
          return Ee.add(ae), Ee;
        });
        try {
          const Ee = await Z(W);
          ue((et) => {
            const ct = new Map(et);
            return ct.set(ae, Ee), ct;
          }), ce((et) => {
            const ct = new Set(et);
            return ct.add(ae), ct;
          }), de?.({ item: W });
        } catch {
        } finally {
          ke((Se) => {
            const Ee = new Set(Se);
            return Ee.delete(ae), Ee;
          });
        }
        return;
      }
      ce((Se) => {
        const Ee = new Set(Se);
        return Ee.add(ae), Ee;
      }), de?.({ item: W });
    },
    [Q, oe, F, ee, Z, me, g, p, $, y]
  ), V = ve(() => {
    const W = [], ae = (_e, he, de) => {
      _e.forEach((ye, Ae) => {
        const Fe = Q(ye), B = G(ye), ie = ee.get(Fe) ?? F(ye);
        let ze;
        ee.has(Fe) ? ze = ee.get(Fe).length > 0 : ie !== void 0 ? ze = ie.length > 0 : Z ? ze = !0 : ze = !1;
        const Se = oe.has(Fe), Ee = !!ye.disabled, et = _e.length, ct = Ae + 1;
        if (W.push({
          item: ye,
          key: Fe,
          text: B,
          level: he,
          posInSet: ct,
          setSize: et,
          hasChildren: ze,
          expanded: Se,
          parentKey: de,
          disabled: Ee
        }), ze && Se) {
          const It = ee.get(Fe) ?? ie;
          It && It.length > 0 && ae(It, he + 1, Fe);
        }
      });
    };
    return ae(T, 1, null), W;
  }, [T, Q, G, F, ee, oe, Z, me]), [se, te] = Y(() => V[0]?.key ?? null), pe = le(""), $e = le(null), Pe = le(null);
  Ne(() => {
    if (!se && V.length > 0) {
      const W = V[0];
      W && te(W.key);
    } else if (se && !V.some((W) => W.key === se)) {
      const W = V[0];
      te(W ? W.key : null);
    }
  }, [V, se]), Ne(() => {
    if (se) {
      const W = Pe.current?.querySelector(`[data-key="${CSS.escape(se)}"]`);
      let ae = null;
      W || (ae = Pe.current?.querySelector(`[data-key="${se}"]`) ?? null);
      const _e = W ?? ae;
      _e && document.activeElement !== _e && Pe.current?.contains(document.activeElement) && _e.focus();
    }
  }, [se]);
  const Ie = K(
    (W) => {
      te(W), requestAnimationFrame(() => {
        const ae = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(W) : W;
        let _e = Pe.current?.querySelector(`[data-key="${ae}"]`);
        _e || (_e = Pe.current?.querySelector(`[data-key="${W}"]`) ?? null), _e?.focus();
      });
    },
    []
  ), rt = K(
    (W) => V.find((_e) => _e.key === W)?.parentKey ?? null,
    [V]
  ), vt = K(
    (W) => {
      if (V.length === 0) return;
      const ae = se ? V.findIndex((de) => de.key === se) : -1, _e = ae >= 0 ? V[ae] : void 0;
      let he = null;
      if (W.key === "ArrowDown") {
        if (W.preventDefault(), ae === -1)
          he = V[0]?.key ?? null;
        else {
          const de = (ae + 1) % V.length, ye = V[de];
          ye && (he = ye.key);
        }
        he && Ie(he);
        return;
      }
      if (W.key === "ArrowUp") {
        if (W.preventDefault(), ae === -1) {
          const de = V[V.length - 1];
          de && (he = de.key);
        } else {
          const de = (ae - 1 + V.length) % V.length, ye = V[de];
          ye && (he = ye.key);
        }
        he && Ie(he);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !_e) return;
        if (_e.hasChildren && !_e.expanded)
          P(_e.item);
        else if (_e.hasChildren && _e.expanded) {
          const de = ae + 1, ye = V[de];
          ye && ye.parentKey === _e.key && Ie(ye.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !_e) return;
        if (_e.hasChildren && _e.expanded)
          P(_e.item);
        else {
          const de = rt(_e.key);
          de && Ie(de);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const de = V[0];
        de && Ie(de.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const de = V[V.length - 1];
        de && Ie(de.key);
        return;
      }
      if (W.key === "Enter" || W.key === " ") {
        W.preventDefault(), _e && N(_e.item);
        return;
      }
      if (W.key.length === 1 && /^[a-zA-Z0-9]$/.test(W.key)) {
        W.preventDefault();
        const de = (pe.current + W.key).toLowerCase();
        pe.current = de, $e.current && clearTimeout($e.current), $e.current = setTimeout(() => {
          pe.current = "";
        }, 500);
        const ye = ae >= 0 ? ae + 1 : 0, B = [...V, ...V].slice(ye, ye + V.length).find((ie) => ie.text.toLowerCase().startsWith(de));
        B && Ie(B.key);
        return;
      }
    },
    [V, se, Ie, P, N, rt]
  ), ne = K(() => {
    if (!se && V.length > 0) {
      const W = V[0];
      W && te(W.key);
    }
  }, [se, V]), De = (W, ae, _e) => /* @__PURE__ */ t("ul", { role: "group", className: it.group, children: W.map((he, de) => {
    const ye = Q(he), Ae = G(he), Fe = ee.get(ye) ?? F(he);
    let B;
    ee.has(ye) ? B = ee.get(ye).length > 0 : Fe !== void 0 ? B = Fe.length > 0 : Z ? B = !0 : B = !1;
    const ie = oe.has(ye), ze = qe.has(ye), Se = !!he.disabled, Ee = me.has(ye), et = se === ye, ct = W.length, It = de + 1, Cn = J ? J(he) : Ae;
    return /* @__PURE__ */ k("li", { role: "none", className: it.itemWrapper, children: [
      /* @__PURE__ */ k(
        "div",
        {
          role: "treeitem",
          "data-key": ye,
          tabIndex: et ? 0 : -1,
          "aria-expanded": B ? ie : void 0,
          "aria-selected": ze,
          "aria-level": ae,
          "aria-setsize": ct,
          "aria-posinset": It,
          "aria-disabled": Se || void 0,
          "aria-busy": Ee || void 0,
          className: [
            it.treeitem,
            ze ? it.selected : null,
            Se ? it.disabled : null,
            et ? it.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            Ie(ye), Se || N(he);
          },
          onFocus: () => te(ye),
          children: [
            B ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: it.caret,
                "aria-label": `${ie ? "Collapse" : "Expand"} ${Ae}`,
                "aria-expanded": ie,
                tabIndex: -1,
                disabled: Se,
                onClick: (ln) => {
                  ln.stopPropagation(), Ie(ye), P(he);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [it.caretIcon, ie ? it.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: it.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: it.label, children: Cn }),
            Ee ? /* @__PURE__ */ t("span", { className: it.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      B && ie ? Ee ? /* @__PURE__ */ t("div", { className: it.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? De(Fe, ae + 1) : ee.has(ye) && ee.get(ye).length > 0 ? De(ee.get(ye), ae + 1) : (Fe && Fe.length === 0, null) : null
    ] }, ye);
  }) });
  return /* @__PURE__ */ t(
    "div",
    {
      ref: Pe,
      role: "tree",
      "aria-label": re,
      "aria-multiselectable": H === "multiple" || void 0,
      tabIndex: 0,
      className: [it.root, M].filter(Boolean).join(" "),
      onKeyDown: vt,
      onFocus: ne,
      children: T.length === 0 ? /* @__PURE__ */ t("div", { className: it.empty, children: "No items" }) : De(T, 1)
    }
  );
}
const Wg = "_root_u0yr1_1", Vg = "_panel_u0yr1_8", Ug = "_header_u0yr1_19", Xg = "_listbox_u0yr1_28", Gg = "_option_u0yr1_42", Yg = "_disabled_u0yr1_57", Zg = "_active_u0yr1_66", Jg = "_selected_u0yr1_70", Qg = "_empty_u0yr1_86", ey = "_controls_u0yr1_93", ty = "_reorder_u0yr1_102", ny = "_btn_u0yr1_110", Le = {
  root: Wg,
  panel: Vg,
  header: Ug,
  listbox: Xg,
  option: Gg,
  disabled: Yg,
  active: Zg,
  selected: Jg,
  empty: Qg,
  controls: ey,
  reorder: ty,
  btn: ny
};
function tt(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function Bn(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function Ob({
  source: e,
  Source: n,
  target: r,
  Target: o,
  value: s,
  Value: l,
  targetValue: u,
  TargetValue: a,
  data: c,
  Data: m,
  onSourceChange: b,
  SourceChange: f,
  onTargetChange: D,
  TargetChange: v,
  keyProperty: C,
  KeyProperty: z,
  onMove: h,
  Move: d,
  ariaLabel: g,
  AriaLabel: p,
  className: $
}) {
  const y = C ?? z ?? "id", w = g ?? p ?? "PickList", i = e ?? n ?? s ?? l ?? c ?? m ?? [], x = r ?? o ?? u ?? a ?? [], [O, I] = Y(() => [...i]), [j, S] = Y(() => [...x]);
  Ne(() => {
    const N = e ?? n ?? s ?? l ?? c ?? m;
    N !== void 0 && I([...N]);
  }, [e, n, s, l, c, m]), Ne(() => {
    const N = r ?? o ?? u ?? a;
    N !== void 0 && S([...N]);
  }, [r, o, u, a]);
  const [_, M] = Y(() => /* @__PURE__ */ new Set()), [T, E] = Y(() => /* @__PURE__ */ new Set()), [A, X] = Y(() => {
    const N = i.findIndex((P) => !P.disabled);
    return N >= 0 ? N : 0;
  }), [H, re] = Y(() => {
    const N = x.findIndex((P) => !P.disabled);
    return N >= 0 ? N : 0;
  }), Z = ve(() => O.map((N, P) => N.disabled ? -1 : P).filter((N) => N >= 0), [O]), J = ve(() => j.map((N, P) => N.disabled ? -1 : P).filter((N) => N >= 0), [j]);
  Ne(() => {
    if (A >= O.length) {
      const N = Z[Z.length - 1];
      X(N ?? 0);
    } else if (O.length > 0 && Z.length > 0 && !Z.includes(A)) {
      const N = Z[0];
      N !== void 0 && X(N);
    }
  }, [A, O.length, Z]), Ne(() => {
    if (H >= j.length) {
      const N = J[J.length - 1];
      re(N ?? 0);
    } else if (j.length > 0 && J.length > 0 && !J.includes(H)) {
      const N = J[0];
      N !== void 0 && re(N);
    }
  }, [H, j.length, J]), Ne(() => {
    M((N) => {
      const P = /* @__PURE__ */ new Set();
      for (const V of N)
        O.some((te) => tt(te, y) === V && !te.disabled) && P.add(V);
      return P;
    });
  }, [O, y]), Ne(() => {
    E((N) => {
      const P = /* @__PURE__ */ new Set();
      for (const V of N)
        j.some((te) => tt(te, y) === V && !te.disabled) && P.add(V);
      return P;
    });
  }, [j, y]);
  const Q = K(
    (N) => {
      (b ?? f)?.(N);
    },
    [b, f]
  ), G = K(
    (N) => {
      (D ?? v)?.(N);
    },
    [D, v]
  ), F = K(
    (N) => {
      (h ?? d)?.(N);
    },
    [h, d]
  ), L = K(
    (N) => {
      const P = O[N];
      if (!P || P.disabled) return;
      const V = tt(P, y);
      M((se) => {
        const te = new Set(se);
        return te.has(V) ? te.delete(V) : te.add(V), te;
      }), X(N);
    },
    [O, y]
  ), oe = K(
    (N) => {
      const P = j[N];
      if (!P || P.disabled) return;
      const V = tt(P, y);
      E((se) => {
        const te = new Set(se);
        return te.has(V) ? te.delete(V) : te.add(V), te;
      }), re(N);
    },
    [j, y]
  ), ce = K(() => {
    const N = [], P = [];
    for (const pe of O) {
      const $e = tt(pe, y);
      _.has($e) && !pe.disabled ? N.push(pe) : P.push(pe);
    }
    if (N.length === 0) return;
    const V = P, se = [...j, ...N];
    I(V), S(se), M(/* @__PURE__ */ new Set());
    const te = new Set(N.map((pe) => tt(pe, y)));
    E(te), Q(V), G(se), F({ source: V, target: se, moved: N, direction: "toTarget" });
  }, [O, j, _, y, Q, G, F]), ee = K(() => {
    const N = [], P = [];
    for (const pe of j) {
      const $e = tt(pe, y);
      T.has($e) && !pe.disabled ? N.push(pe) : P.push(pe);
    }
    if (N.length === 0) return;
    const V = P, se = [...O, ...N];
    S(V), I(se), E(/* @__PURE__ */ new Set());
    const te = new Set(N.map((pe) => tt(pe, y)));
    M(te), Q(se), G(V), F({ source: se, target: V, moved: N, direction: "toSource" });
  }, [O, j, T, y, Q, G, F]), ue = K(() => {
    const N = O.filter((se) => !se.disabled);
    if (N.length === 0) return;
    const P = O.filter((se) => !!se.disabled), V = [...j, ...N];
    I(P), S(V), M(/* @__PURE__ */ new Set()), Q(P), G(V), F({ source: P, target: V, moved: N, direction: "allToTarget" });
  }, [O, j, y, Q, G, F]), me = K(() => {
    const N = j.filter((se) => !se.disabled);
    if (N.length === 0) return;
    const P = j.filter((se) => !!se.disabled), V = [...O, ...N];
    S(P), I(V), E(/* @__PURE__ */ new Set()), Q(V), G(P), F({ source: V, target: P, moved: N, direction: "allToSource" });
  }, [O, j, Q, G, F]), ke = K(() => {
    if (T.size === 0) return;
    const N = [...j], P = T, V = [];
    for (let te = 1; te < N.length; te++) {
      const pe = N[te], $e = N[te - 1];
      if (!pe || !$e) continue;
      const Pe = tt(pe, y), Ie = tt($e, y);
      P.has(Pe) && !P.has(Ie) && !pe.disabled && !$e.disabled && (N[te - 1] = pe, N[te] = $e, V.push(pe));
    }
    if (V.length === 0) return;
    S(N), G(N), F({ source: O, target: N, moved: V, direction: "up" });
    const se = Array.from(P)[0];
    if (se) {
      const te = N.findIndex((pe) => tt(pe, y) === se);
      te >= 0 && re(te);
    }
  }, [j, T, y, O, G, F]), Be = K(() => {
    if (T.size === 0) return;
    const N = [...j], P = T, V = [];
    for (let te = N.length - 2; te >= 0; te--) {
      const pe = N[te], $e = N[te + 1];
      if (!pe || !$e) continue;
      const Pe = tt(pe, y), Ie = tt($e, y);
      P.has(Pe) && !P.has(Ie) && !pe.disabled && !$e.disabled && (N[te] = $e, N[te + 1] = pe, V.push(pe));
    }
    if (V.length === 0) return;
    S(N), G(N), F({ source: O, target: N, moved: V, direction: "down" });
    const se = Array.from(P)[0];
    if (se) {
      const te = N.findIndex((pe) => tt(pe, y) === se);
      te >= 0 && re(te);
    }
  }, [j, T, y, O, G, F]), je = _.size > 0, Ue = T.size > 0, be = le(""), Xe = le(null), Ze = le(""), Re = le(null), Ye = K(
    (N) => {
      if (O.length === 0) return;
      const P = Z;
      if (P.length === 0) return;
      const V = P.includes(A) ? A : P[0] ?? 0;
      let se = -1;
      if (N.key === "ArrowDown") {
        N.preventDefault();
        const te = P.indexOf(V);
        se = P[(te + 1) % P.length] ?? P[0] ?? 0;
      } else if (N.key === "ArrowUp") {
        N.preventDefault();
        const te = P.indexOf(V);
        se = P[(te - 1 + P.length) % P.length] ?? P[0] ?? 0;
      } else if (N.key === "Home")
        N.preventDefault(), se = P[0] ?? 0;
      else if (N.key === "End")
        N.preventDefault(), se = P[P.length - 1] ?? 0;
      else if (N.key === "Enter" || N.key === " ") {
        N.preventDefault(), L(V);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(N.key)) {
        N.preventDefault();
        const te = (be.current + N.key).toLowerCase();
        be.current = te, Xe.current && clearTimeout(Xe.current), Xe.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const pe = [...P, ...P], $e = P.indexOf(V) + 1, Pe = pe.slice($e).find((Ie) => Bn(O[Ie]).toLowerCase().startsWith(te));
        Pe != null && X(Pe);
        return;
      }
      se >= 0 && X(se);
    },
    [O, Z, A, L]
  ), qe = K(
    (N) => {
      if (j.length === 0) return;
      const P = J;
      if (P.length === 0) return;
      const V = P.includes(H) ? H : P[0] ?? 0;
      let se = -1;
      if (N.key === "ArrowDown") {
        N.preventDefault();
        const te = P.indexOf(V);
        se = P[(te + 1) % P.length] ?? P[0] ?? 0;
      } else if (N.key === "ArrowUp") {
        N.preventDefault();
        const te = P.indexOf(V);
        se = P[(te - 1 + P.length) % P.length] ?? P[0] ?? 0;
      } else if (N.key === "Home")
        N.preventDefault(), se = P[0] ?? 0;
      else if (N.key === "End")
        N.preventDefault(), se = P[P.length - 1] ?? 0;
      else if (N.key === "Enter" || N.key === " ") {
        N.preventDefault(), oe(V);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(N.key)) {
        N.preventDefault();
        const te = (Ze.current + N.key).toLowerCase();
        Ze.current = te, Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => {
          Ze.current = "";
        }, 500);
        const pe = [...P, ...P], $e = P.indexOf(V) + 1, Pe = pe.slice($e).find((Ie) => Bn(j[Ie]).toLowerCase().startsWith(te));
        Pe != null && re(Pe);
        return;
      }
      se >= 0 && re(se);
    },
    [j, J, H, oe]
  ), Je = le(null), U = le(null);
  return /* @__PURE__ */ k("div", { className: [Le.root, $].filter(Boolean).join(" "), "aria-label": w, children: [
    /* @__PURE__ */ k("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Source" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: Je,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Ye,
          children: O.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : O.map((N, P) => {
            const V = tt(N, y), se = _.has(V), te = P === A, pe = !!N.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": se,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Le.option,
                  se ? Le.selected : null,
                  te ? Le.active : null,
                  pe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => L(P),
                children: Bn(N)
              },
              V
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ k("div", { className: Le.controls, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to target",
          "aria-disabled": !je || void 0,
          disabled: !je,
          onClick: ce,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to target",
          "aria-disabled": O.filter((N) => !N.disabled).length === 0 || void 0,
          disabled: O.filter((N) => !N.disabled).length === 0,
          onClick: ue,
          children: "»"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all",
          "aria-disabled": O.filter((N) => !N.disabled).length === 0 || void 0,
          disabled: O.filter((N) => !N.disabled).length === 0,
          onClick: ue,
          children: "»"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to source",
          "aria-disabled": !Ue || void 0,
          disabled: !Ue,
          onClick: ee,
          children: "‹"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to source",
          "aria-disabled": j.filter((N) => !N.disabled).length === 0 || void 0,
          disabled: j.filter((N) => !N.disabled).length === 0,
          onClick: me,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ k("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Target" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: U,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: qe,
          children: j.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : j.map((N, P) => {
            const V = tt(N, y), se = T.has(V), te = P === H, pe = !!N.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": se,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Le.option,
                  se ? Le.selected : null,
                  te ? Le.active : null,
                  pe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => oe(P),
                children: Bn(N)
              },
              V
            );
          })
        }
      ),
      /* @__PURE__ */ k("div", { className: Le.reorder, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move up",
            "aria-disabled": !Ue || void 0,
            disabled: !Ue,
            onClick: ke,
            children: "↑"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move down",
            "aria-disabled": !Ue || void 0,
            disabled: !Ue,
            onClick: Be,
            children: "↓"
          }
        )
      ] })
    ] })
  ] });
}
const ry = "_root_1isbb_1", oy = "_header_1isbb_8", sy = "_title_1isbb_15", ay = "_navBtn_1isbb_20", ly = "_resources_1isbb_39", iy = "_resource_1isbb_39", cy = "_grid_1isbb_50", dy = "_timeCol_1isbb_55", uy = "_timeCell_1isbb_61", _y = "_dayCol_1isbb_66", fy = "_dayHeader_1isbb_73", py = "_slot_1isbb_81", hy = "_event_1isbb_91", _t = {
  root: ry,
  header: oy,
  title: sy,
  navBtn: ay,
  resources: ly,
  resource: iy,
  grid: cy,
  timeCol: dy,
  timeCell: uy,
  dayCol: _y,
  dayHeader: fy,
  slot: py,
  event: hy
};
function $r(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function jb({
  data: e,
  view: n = "week",
  date: r,
  onDateChange: o,
  resources: s,
  onEventClick: l,
  onSlotClick: u,
  ariaLabel: a = "Scheduler",
  className: c
}) {
  const [m, b] = Y(r ?? /* @__PURE__ */ new Date()), f = r ?? m, D = (z) => {
    r || b(z), o?.(z);
  }, v = n === "day" ? [f] : n === "week" ? Array.from({ length: 7 }, (z, h) => {
    const d = new Date(f);
    return d.setDate(f.getDate() - f.getDay() + h), d;
  }) : Array.from({ length: 30 }, (z, h) => {
    const d = new Date(f);
    return d.setDate(1 + h), d;
  }), C = Array.from({ length: 12 }, (z, h) => 8 + h);
  return /* @__PURE__ */ k("div", { className: [_t.root, c].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ k("div", { className: _t.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: _t.navBtn, "aria-label": "Previous", onClick: () => {
        const z = new Date(f);
        z.setDate(z.getDate() - 7), D(z);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: _t.title, children: f.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: _t.navBtn, "aria-label": "Next", onClick: () => {
        const z = new Date(f);
        z.setDate(z.getDate() + 7), D(z);
      }, children: "›" })
    ] }),
    s && /* @__PURE__ */ t("div", { className: _t.resources, children: s.map((z) => /* @__PURE__ */ t("div", { className: _t.resource, role: "presentation", "aria-label": z.name, children: z.name }, z.id)) }),
    /* @__PURE__ */ k("div", { className: _t.grid, role: "presentation", children: [
      /* @__PURE__ */ t("div", { className: _t.timeCol, role: "presentation", children: C.map((z) => /* @__PURE__ */ k("div", { className: _t.timeCell, children: [
        z,
        ":00"
      ] }, z)) }),
      v.map((z) => /* @__PURE__ */ k("div", { className: _t.dayCol, role: "presentation", title: z.toLocaleDateString(), onClick: () => u?.({ date: z }), tabIndex: 0, "aria-label": z.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: _t.dayHeader, children: z.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        C.map((h) => /* @__PURE__ */ t("div", { className: _t.slot, tabIndex: -1, onClick: () => {
          const d = new Date(z);
          d.setHours(h), u?.({ date: d });
        } }, h)),
        e.filter((h) => h.start.toDateString() === z.toDateString()).map((h) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: _t.event,
            "aria-label": `${h.title} ${$r(h.start)} - ${$r(h.end)}`,
            "aria-pressed": !1,
            onClick: () => l?.({ event: h }),
            children: h.title
          },
          h.id
        ))
      ] }, z.toISOString()))
    ] })
  ] });
}
const my = "_root_uw4jr_1", gy = "_header_uw4jr_8", yy = "_headerCell_uw4jr_15", by = "_timeline_uw4jr_21", xy = "_row_uw4jr_26", vy = "_taskName_uw4jr_32", ky = "_timelineCell_uw4jr_37", wy = "_bar_uw4jr_43", $y = "_progress_uw4jr_56", Ny = "_dep_uw4jr_61", jt = {
  root: my,
  header: gy,
  headerCell: yy,
  timeline: by,
  row: xy,
  taskName: vy,
  timelineCell: ky,
  bar: wy,
  progress: $y,
  dep: Ny
};
function Ib({ tasks: e, view: n = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: s }) {
  const [l, u] = Y(null);
  return /* @__PURE__ */ k("div", { className: [jt.root, s].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ k("div", { className: jt.header, role: "row", children: [
      /* @__PURE__ */ t("div", { className: jt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ k("div", { className: jt.timeline, role: "columnheader", children: [
        "Timeline (",
        n,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ k("div", { className: jt.row, role: "row", "aria-selected": l === a.id, children: [
      /* @__PURE__ */ t("div", { className: jt.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ k("div", { className: jt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: jt.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}${a.progress !== void 0 ? `, ${a.progress}% complete` : ""}`,
            "aria-pressed": l === a.id,
            tabIndex: 0,
            onClick: () => {
              u(a.id), r?.({ task: a });
            },
            onKeyDown: (c) => {
              (c.key === "Enter" || c.key === " ") && (c.preventDefault(), u(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: jt.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((c) => /* @__PURE__ */ t("svg", { className: jt.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-color-border)" }) }, c))
      ] })
    ] }, a.id))
  ] });
}
const Sy = "_root_iswin_1", Dy = "_fields_iswin_6", zy = "_chip_iswin_13", Cy = "_table_iswin_35", My = "_totalRow_iswin_55", Oy = "_total_iswin_55", sn = {
  root: Sy,
  fields: Dy,
  chip: zy,
  table: Cy,
  totalRow: My,
  total: Oy
}, Pn = {
  Sum: (e) => e.reduce((n, r) => n + r, 0),
  Average: (e) => e.length ? e.reduce((n, r) => n + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function $n(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Eb({ data: e, rowFields: n = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: s, ariaLabel: l = "Pivot table", className: u }) {
  const a = n, c = r, m = o, b = (h, d, g) => {
    const p = h === "row" ? a.filter((w) => w.property !== d) : a, $ = h === "col" ? c.filter((w) => w.property !== d) : c, y = h === "agg" ? m.filter((w) => !(w.property === d && w.aggregate === g)) : m;
    s?.({ rowFields: p, columnFields: $, aggregateFields: y });
  }, f = (h, d) => d.map((g) => String(h[g.property])).join(""), D = [...new Set(a.length ? e.map((h) => f(h, a)) : [""])].sort(), v = [...new Set(c.length ? e.map((h) => f(h, c)) : [""])].sort(), C = (h, d, g) => {
    const p = e.filter((y) => f(y, a) === h && f(y, c) === d), $ = p.map((y) => Number(y[g.property])).filter((y) => !Number.isNaN(y));
    return !$.length && g.aggregate !== "Count" ? 0 : Pn[g.aggregate](g.aggregate === "Count" ? p.map(() => 1) : $);
  }, z = (h, d, g, p) => /* @__PURE__ */ k(
    "button",
    {
      type: "button",
      className: sn.chip,
      "aria-label": `Remove ${h} field ${g}`,
      onClick: () => b(h, d, p),
      children: [
        g,
        p ? ` (${p})` : ""
      ]
    },
    `${h}-${g}-${p ?? ""}`
  );
  return /* @__PURE__ */ k("div", { className: [sn.root, u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k("div", { className: sn.fields, children: [
      a.map((h) => z("row", h.property, h.title ?? h.property)),
      c.map((h) => z("col", h.property, h.title ?? h.property)),
      m.map((h) => z("agg", h.property, h.title ?? h.property, h.aggregate))
    ] }),
    /* @__PURE__ */ k("table", { className: sn.table, role: "grid", "aria-label": l, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ k("tr", { children: [
        /* @__PURE__ */ t("th", { scope: "col", children: a.map((h) => h.title ?? h.property).join(" / ") || "Total" }),
        v.map((h) => /* @__PURE__ */ t("th", { scope: "col", children: h || "—" }, h)),
        /* @__PURE__ */ t("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ k("tbody", { children: [
        D.map((h) => /* @__PURE__ */ k("tr", { children: [
          /* @__PURE__ */ t("th", { scope: "row", children: h || "—" }),
          v.map((d) => /* @__PURE__ */ t("td", { title: $n(C(h, d, m[0] ?? { property: "", aggregate: "Count" })), children: m.length ? $n(C(h, d, m[0])) : "" }, d)),
          /* @__PURE__ */ t("td", { className: sn.total, children: m.length ? $n(
            Pn[m[0].aggregate](
              v.flatMap((d) => e.filter((g) => f(g, a) === h && f(g, c) === d).map((g) => Number(g[m[0].property]))).filter((d) => !Number.isNaN(d))
            )
          ) : "" })
        ] }, h)),
        /* @__PURE__ */ k("tr", { className: sn.totalRow, children: [
          /* @__PURE__ */ t("th", { scope: "row", children: "Total" }),
          v.map((h) => /* @__PURE__ */ t("td", { children: m.length ? $n(
            Pn[m[0].aggregate](
              e.filter((d) => f(d, c) === h).map((d) => Number(d[m[0].property])).filter((d) => !Number.isNaN(d))
            )
          ) : "" }, h)),
          /* @__PURE__ */ t("td", { children: m.length ? $n(Pn[m[0].aggregate](e.map((h) => Number(h[m[0].property])).filter((h) => !Number.isNaN(h)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const jy = "_root_mkz78_1", Iy = "_reverse_mkz78_10", Ey = "_item_mkz78_14", Ty = "_marker_mkz78_35", Ay = "_body_mkz78_46", Ly = "_label_mkz78_50", By = "_content_mkz78_56", Zt = {
  root: jy,
  reverse: Iy,
  item: Ey,
  marker: Ty,
  body: Ay,
  label: Ly,
  content: By
};
function Tb({ items: e, reverse: n = !1, ariaLabel: r = "Timeline", className: o }) {
  const s = n ? [...e].reverse() : e;
  return /* @__PURE__ */ t(
    "ol",
    {
      className: [Zt.root, n ? Zt.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: s.map((l, u) => /* @__PURE__ */ k("li", { className: Zt.item, children: [
        /* @__PURE__ */ t("span", { className: Zt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ k("div", { className: Zt.body, children: [
          /* @__PURE__ */ t("div", { className: Zt.label, children: l.label }),
          l.content !== void 0 && /* @__PURE__ */ t("div", { className: Zt.content, children: l.content })
        ] })
      ] }, u))
    }
  );
}
const Py = "_root_12pfj_1", Ry = "_header_12pfj_13", qy = "_headCell_12pfj_22", Fy = "_row_12pfj_32", Ky = "_cell_12pfj_37", Nn = {
  root: Py,
  header: Ry,
  headCell: qy,
  row: Fy,
  cell: Ky
};
function Ab({ count: e, rowHeight: n = 40, height: r = 320, loadData: o, columns: s = [], ariaLabel: l = "Virtual grid", className: u }) {
  const [a, c] = Y(/* @__PURE__ */ new Map()), [m, b] = Y(0), f = le(/* @__PURE__ */ new Set()), D = Math.ceil(r / n), v = Math.max(0, Math.floor(m / n) - 3), C = Math.min(e, v + D + 6), z = K(
    (d, g) => {
      let p = !1;
      for (let $ = d; $ < g; $++)
        !a.has($) && !f.current.has($) && (p = !0);
      if (p) {
        for (let $ = d; $ < g; $++) f.current.add($);
        o({ skip: d, top: g }).then(($) => {
          c((y) => {
            const w = new Map(y);
            return $.forEach((i, x) => w.set(d + x, i)), w;
          });
          for (let y = d; y < g; y++) f.current.delete(y);
        });
      }
    },
    [a, o]
  );
  Ne(() => {
    z(v, C);
  }, [v, C]);
  const h = [];
  for (let d = v; d < C; d++) {
    const g = a.get(d) ?? {};
    h.push(
      /* @__PURE__ */ t("div", { className: Nn.row, role: "row", style: { height: n }, children: s.map((p) => /* @__PURE__ */ t("div", { role: "gridcell", className: Nn.cell, style: p.width ? { width: p.width } : void 0, children: String(g[p.property] ?? "") }, p.property)) }, d)
    );
  }
  return /* @__PURE__ */ k(
    "div",
    {
      className: [Nn.root, u].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (d) => b(d.target.scrollTop),
      onKeyDown: (d) => {
        const g = d.currentTarget;
        d.key === "ArrowDown" ? (d.preventDefault(), g.scrollTop += n) : d.key === "ArrowUp" ? (d.preventDefault(), g.scrollTop -= n) : d.key === "PageDown" ? (d.preventDefault(), g.scrollTop += r) : d.key === "PageUp" && (d.preventDefault(), g.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ t("div", { style: { height: v * n }, "aria-hidden": "true" }),
        /* @__PURE__ */ t("div", { className: Nn.header, role: "row", children: s.map((d) => /* @__PURE__ */ t("div", { role: "columnheader", className: Nn.headCell, style: { height: n, ...d.width ? { width: d.width } : {} }, children: d.title ?? d.property }, d.property)) }),
        h,
        /* @__PURE__ */ t("div", { style: { height: Math.max(0, (e - C) * n) }, "aria-hidden": "true" })
      ]
    }
  );
}
const Hy = "_root_1leml_1", Wy = {
  root: Hy
}, Qe = 25;
function Vy(e) {
  const n = [];
  let r = 2166136261;
  for (let o = 0; o < e.length; o++)
    r ^= e.charCodeAt(o), r = Math.imul(r, 16777619) >>> 0, n.push(r & 255);
  for (; n.length < Qe * Qe; )
    r = Math.imul(r ^ n.length + 1, 16777619) >>> 0, n.push(r & 255);
  return n;
}
function Uy(e, n) {
  const r = (o, s) => e >= o && e < o + 7 && n >= s && n < s + 7;
  return !!(r(0, 0) || r(Qe - 7, 0) || r(0, Qe - 7) || e === 6 || n === 6 || e === 8 && n === 8 || e === 8 && (n < 9 || n > Qe - 9) || n === 8 && (e < 9 || e > Qe - 9));
}
function Xy(e, n) {
  const r = (o, s) => {
    const l = e - o, u = n - s, a = Math.max(Math.abs(l - 3), Math.abs(u - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && n < 7 ? r(0, 0) : e >= Qe - 7 && n < 7 ? r(Qe - 7, 0) : e < 7 && n >= Qe - 7 ? r(0, Qe - 7) : null;
}
function Lb({ value: e, size: n = 128, render: r = "svg", ariaLabel: o, className: s }) {
  const l = o ?? `QR code for ${e}`, u = ve(() => {
    const m = Vy(e), b = [];
    for (let f = 0; f < Qe; f++)
      for (let D = 0; D < Qe; D++) {
        const v = Xy(D, f);
        if (v !== null) {
          b.push(v);
          continue;
        }
        if (Uy(D, f)) {
          b.push(D === 6 || f === 6 ? (D + f) % 2 === 0 : !1);
          continue;
        }
        b.push(m[f * Qe + D] % 2 === 1);
      }
    return b;
  }, [e]), a = n / Qe, c = [];
  for (let m = 0; m < Qe; m++)
    for (let b = 0; b < Qe; b++)
      u[m * Qe + b] && c.push(/* @__PURE__ */ t("rect", { x: b * a, y: m * a, width: a, height: a }, `${b}-${m}`));
  return /* @__PURE__ */ k(
    "svg",
    {
      className: [Wy.root, s].filter(Boolean).join(" "),
      width: n,
      height: n,
      viewBox: `0 0 ${n} ${n}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ t("rect", { width: n, height: n, fill: "var(--dx-color-surface)" }),
        /* @__PURE__ */ t("g", { fill: "var(--dx-color-text)", children: c })
      ]
    }
  );
}
const Gy = "_root_xfffn_1", Yy = "_value_xfffn_9", Nr = {
  root: Gy,
  value: Yy
}, Sr = [
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
], Dr = 104, Zy = 106;
function Jy(e) {
  const n = [Dr];
  for (let o = 0; o < e.length; o++) {
    const s = e.charCodeAt(o);
    n.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let r = Dr;
  for (let o = 1; o < n.length; o++) r += o * n[o];
  return n.push(r % 103, Zy), n;
}
function Bb({ value: e, format: n = "Code128", height: r = 60, showValue: o = !1, ariaLabel: s, className: l }) {
  const u = s ?? `Barcode ${e}`, a = ve(() => {
    const c = [];
    let m = 0;
    for (const b of Jy(e)) {
      const f = Sr[b] ?? Sr[0];
      for (let D = 0; D < f.length; D++) {
        const v = Number(f[D]);
        D % 2 === 0 && c.push({ x: m, w: v }), m += v;
      }
    }
    return { modules: c, total: m };
  }, [e]);
  return /* @__PURE__ */ k("span", { className: [Nr.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${a.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": u,
        "data-value": e,
        children: [
          /* @__PURE__ */ t("rect", { width: a.total, height: r, fill: "var(--dx-color-surface)" }),
          a.modules.map((c, m) => /* @__PURE__ */ t("rect", { x: c.x, y: 0, width: c.w, height: r, fill: "var(--dx-color-text)" }, m))
        ]
      }
    ),
    o && /* @__PURE__ */ t("span", { className: Nr.value, children: e })
  ] });
}
const Qy = "_root_x813o_1", e0 = "_svg_x813o_10", t0 = "_gridline_x813o_15", n0 = "_tickLabel_x813o_21", r0 = "_axisTitle_x813o_27", o0 = "_dataLabel_x813o_34", s0 = "_legend_x813o_40", a0 = "_legendItem_x813o_48", l0 = "_swatch_x813o_56", i0 = "_tooltip_x813o_63", c0 = "_visuallyHidden_x813o_77", nt = {
  root: Qy,
  svg: e0,
  gridline: t0,
  tickLabel: n0,
  axisTitle: r0,
  dataLabel: o0,
  legend: s0,
  legendItem: a0,
  swatch: l0,
  tooltip: i0,
  visuallyHidden: c0
}, zr = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function d0(e, n, r) {
  const o = n - e || 1, s = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), l = Math.floor(e / s) * s, u = Math.ceil(n / s) * s, a = [];
  for (let c = l; c <= u + 1e-9; c += s) a.push(Number(c.toFixed(6)));
  return { min: l, max: u, step: s, ticks: a };
}
function Pb({
  series: e,
  width: n = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: s,
  showLegend: l = !0,
  tooltipVisible: u = !0,
  onSeriesClick: a,
  ariaLabel: c = "Chart",
  className: m
}) {
  const [b, f] = Y(null), D = ve(() => {
    const i = /* @__PURE__ */ new Set();
    for (const x of e) for (const O of x.data) i.add(String(O[x.categoryProperty] ?? ""));
    return [...i];
  }, [e]), v = ve(() => e.flatMap((i) => i.data.map((x) => Number(x[i.valueProperty]))).filter((i) => !Number.isNaN(i)), [e]), C = o?.min ?? (v.length ? Math.min(0, ...v) : 0), z = o?.max ?? (v.length ? Math.max(...v) : 10), h = ve(() => d0(C, z, o?.step), [C, z, o?.step]), d = { t: 16, r: 16, b: 40, l: 56 }, g = n - d.l - d.r, p = r - d.t - d.b, $ = (i) => d.l + i / Math.max(1, D.length - 1) * g, y = (i) => d.t + (1 - (i - h.min) / (h.max - h.min || 1)) * p, w = (i, x) => x.color ?? zr[i % zr.length];
  return /* @__PURE__ */ k("figure", { className: [nt.root, m].filter(Boolean).join(" "), role: "img", "aria-label": c, "aria-describedby": `${c.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ k("svg", { width: n, height: r, className: nt.svg, role: "presentation", children: [
      o?.gridlines !== !1 && h.ticks.map((i) => /* @__PURE__ */ t("line", { x1: d.l, x2: d.l + g, y1: y(i), y2: y(i), className: nt.gridline }, i)),
      s?.gridlines && D.map((i, x) => /* @__PURE__ */ t("line", { x1: $(x), x2: $(x), y1: d.t, y2: d.t + p, className: nt.gridline }, x)),
      h.ticks.map((i) => /* @__PURE__ */ t("text", { x: d.l - 8, y: y(i) + 4, textAnchor: "end", className: nt.tickLabel, children: i }, i)),
      D.map((i, x) => /* @__PURE__ */ t("text", { x: $(x), y: d.t + p + 16, textAnchor: "middle", className: nt.tickLabel, children: i }, i)),
      o?.title && /* @__PURE__ */ t("text", { x: 12, y: d.t + p / 2, textAnchor: "middle", transform: `rotate(-90,12,${d.t + p / 2})`, className: nt.axisTitle, children: o.title }),
      s?.title && /* @__PURE__ */ t("text", { x: d.l + g / 2, y: r - 4, textAnchor: "middle", className: nt.axisTitle, children: s.title }),
      (() => {
        const i = /* @__PURE__ */ new Map();
        for (const I of e)
          if (I.stack)
            for (const j of I.data) {
              const S = String(j[I.categoryProperty] ?? ""), _ = Number(j[I.valueProperty]);
              if (Number.isNaN(_)) continue;
              i.has(I.stack) || i.set(I.stack, /* @__PURE__ */ new Map());
              const M = i.get(I.stack);
              M.set(S, (M.get(S) ?? 0) + _);
            }
        const x = e.filter((I) => I.type === "pie" || I.type === "donut"), O = /* @__PURE__ */ new Map();
        for (const I of x) {
          const j = I.data.reduce((S, _) => S + (Number(_[I.valueProperty]) || 0), 0);
          O.set(I, j);
        }
        return e.map((I, j) => {
          const S = I.data.map((E) => ({
            cat: String(E[I.categoryProperty] ?? ""),
            val: Number(E[I.valueProperty]),
            size: I.sizeProperty ? Number(E[I.sizeProperty]) : void 0,
            item: E
          })), _ = new Map(D.map((E, A) => [E, A])), M = w(j, I);
          if (I.type === "pie" || I.type === "donut") {
            const E = d.l + g / 2, A = d.t + p / 2, X = Math.min(g, p) / 3, H = I.type === "donut" ? I.innerRadius ?? X * 0.5 : 0, re = O.get(I) ?? S.reduce((J, Q) => J + Q.val, 0);
            let Z = -90;
            return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
              S.map((J, Q) => {
                const G = re ? J.val / re * 360 : 0, F = Z, L = Z + G;
                Z = L;
                const oe = G > 180 ? 1 : 0, ce = (qe) => qe * Math.PI / 180, ee = E + X * Math.cos(ce(F)), ue = A + X * Math.sin(ce(F)), me = E + X * Math.cos(ce(L)), ke = A + X * Math.sin(ce(L)), Be = E + H * Math.cos(ce(L)), je = A + H * Math.sin(ce(L)), Ue = E + H * Math.cos(ce(F)), be = A + H * Math.sin(ce(F)), Xe = H ? `M ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${ke} L ${Be} ${je} A ${H} ${H} 0 ${oe} 0 ${Ue} ${be} Z` : `M ${E} ${A} L ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${ke} Z`, Ze = (F + L) / 2, Re = E + (X + 12) * Math.cos(ce(Ze)), Ye = A + (X + 12) * Math.sin(ce(Ze));
                return /* @__PURE__ */ k("g", { role: "listitem", children: [
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: Xe,
                      fill: M,
                      stroke: "var(--dx-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => u && f({ x: Re, y: Ye, text: `${I.title ?? J.cat}: ${J.val}` }),
                      onMouseLeave: () => f(null),
                      onClick: () => a?.({ seriesTitle: I.title ?? "", category: J.cat, value: J.val, item: J.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ t("text", { x: Re, y: Ye, textAnchor: "middle", className: nt.dataLabel, children: J.val })
                ] }, Q);
              })
            ] }, j);
          }
          if (I.type === "scatter" || I.type === "bubble")
            return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
              S.map((E, A) => {
                const X = _.get(E.cat) ?? 0, H = Number(S[A].cat), re = Number.isNaN(H) ? $(X) : d.l + (H - h.min) / (h.max - h.min || 1) * g, Z = y(E.val), J = I.type === "bubble" && E.size !== void 0 ? Math.max(4, Math.min(12, E.size / 10)) : 4;
                return /* @__PURE__ */ k("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: re, cy: Z, r: J, fill: M, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: re,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => u && f({ x: re, y: Z, text: `${I.title ?? E.cat}: ${E.val}` }),
                      onMouseLeave: () => f(null),
                      onClick: () => a?.({ seriesTitle: I.title ?? "", category: E.cat, value: E.val, item: E.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, A);
              })
            ] }, j);
          if (I.type === "line" || I.type === "area") {
            const E = (H) => {
              if (!I.stack) return h.min;
              let re = 0;
              for (let Z = 0; Z < j; Z++) {
                const J = e[Z];
                if (J?.stack !== I.stack) continue;
                const Q = J.data.find((G) => String(G[J.categoryProperty] ?? "") === H);
                Q && (re += Number(Q[J.valueProperty]) || 0);
              }
              return re;
            }, A = S.map((H) => {
              const re = _.get(H.cat) ?? 0, Z = E(H.cat);
              return `${re === 0 ? "M" : "L"} ${$(re)} ${y(Z + H.val)}`;
            }).join(" "), X = S.map((H) => {
              const re = _.get(H.cat) ?? 0, Z = E(H.cat);
              return `${re === 0 ? "M" : "L"} ${$(re)} ${y(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
              I.type === "area" && /* @__PURE__ */ t("path", { d: `${A} L ${$(S.length - 1)} ${y(E(S[S.length - 1].cat))} L ${$(0)} ${y(E(S[0].cat))} Z`, fill: M, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ t("path", { d: A, fill: "none", stroke: M, strokeWidth: 2 }),
              I.stack && /* @__PURE__ */ t("path", { d: X, fill: "none", stroke: "transparent" }),
              S.map((H, re) => {
                const Z = _.get(H.cat) ?? 0, J = E(H.cat), Q = $(Z), G = y(J + H.val);
                return /* @__PURE__ */ k("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: Q, cy: G, r: 4, fill: M, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "rect",
                    {
                      x: Q - 12,
                      y: G - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => u && f({ x: Q, y: G, text: `${I.title ?? H.cat}: ${H.val}` }),
                      onMouseLeave: () => f(null),
                      onFocus: () => u && f({ x: Q, y: G, text: `${I.title ?? H.cat}: ${H.val}` }),
                      onBlur: () => f(null),
                      onClick: () => a?.({ seriesTitle: I.title ?? "", category: H.cat, value: H.val, item: H.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ t("text", { x: Q, y: G - 8, textAnchor: "middle", className: nt.dataLabel, children: H.val })
                ] }, re);
              })
            ] }, j);
          }
          const T = I.type === "bar";
          return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
            /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
            S.map((E, A) => {
              const X = _.get(E.cat) ?? 0;
              let H = 0;
              if (I.stack)
                for (let ue = 0; ue < j; ue++) {
                  const me = e[ue];
                  if (me?.stack !== I.stack) continue;
                  const ke = me.data.find((Be) => String(Be[me.categoryProperty] ?? "") === E.cat);
                  ke && (H += Number(ke[me.valueProperty]) || 0);
                }
              const re = H + E.val, Z = e.filter((ue) => !ue.stack || ue.stack === I.stack).length, J = g / D.length, Q = T ? 18 : Math.max(12, J / (I.stack ? 1 : e.length) - 4), G = T ? d.l + H / (h.max - h.min || 1) * g : $(X) - Q / 2 + (I.stack ? 0 : j % Z * Q), F = T ? d.t + X * p / D.length + 4 : y(re), L = T ? E.val / (h.max - h.min || 1) * g : Q - 4, oe = T ? 16 : y(H) - y(re), ce = T ? d.l + H / (h.max - h.min || 1) * g : G, ee = T ? d.t + X * p / D.length + 4 : F;
              return /* @__PURE__ */ k("g", { role: "listitem", children: [
                /* @__PURE__ */ t(
                  "rect",
                  {
                    x: ce,
                    y: ee,
                    width: T ? L : Q - 4,
                    height: oe,
                    fill: M,
                    rx: 2,
                    onMouseEnter: () => u && f({ x: ce + (T ? L : Q) / 2, y: ee, text: `${I.title ?? E.cat}: ${E.val}` }),
                    onMouseLeave: () => f(null),
                    onClick: () => a?.({ seriesTitle: I.title ?? "", category: E.cat, value: E.val, item: E.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                I.labels?.visible && /* @__PURE__ */ t("text", { x: ce + (T ? L : Q) / 2, y: ee - 4, textAnchor: "middle", className: nt.dataLabel, children: E.val })
              ] }, A);
            })
          ] }, j);
        });
      })()
    ] }),
    b && /* @__PURE__ */ t("div", { className: nt.tooltip, style: { left: b.x, top: b.y - 28 }, children: b.text }),
    l && /* @__PURE__ */ t("div", { className: nt.legend, children: e.map((i, x) => /* @__PURE__ */ k("span", { className: nt.legendItem, children: [
      /* @__PURE__ */ t("span", { className: nt.swatch, style: { backgroundColor: w(x, i) }, "aria-hidden": "true" }),
      i.title ?? `Series ${x + 1}`
    ] }, x)) }),
    /* @__PURE__ */ k("table", { className: nt.visuallyHidden, id: `${c.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ t("caption", { children: c }),
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ k("tr", { children: [
        /* @__PURE__ */ t("th", { children: "Series" }),
        /* @__PURE__ */ t("th", { children: "Category" }),
        /* @__PURE__ */ t("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: e.map(
        (i) => i.data.map((x, O) => /* @__PURE__ */ k("tr", { children: [
          /* @__PURE__ */ t("td", { children: i.title ?? "" }),
          /* @__PURE__ */ t("td", { children: String(x[i.categoryProperty] ?? "") }),
          /* @__PURE__ */ t("td", { children: String(x[i.valueProperty] ?? "") })
        ] }, `${i.title}-${O}`))
      ) })
    ] })
  ] });
}
export {
  Ei as ALERT_ICON,
  Z0 as Accordion,
  P0 as Alert,
  tb as Autocomplete,
  G0 as Avatar,
  h0 as Badge,
  Bb as Barcode,
  W0 as Body,
  Nb as Breadcrumb,
  f0 as Button,
  p0 as Card,
  Cb as Carousel,
  Pb as Chart,
  E0 as Checkbox,
  rb as Checkboxlist,
  _b as Colorpicker,
  F0 as Column,
  On as DEFAULT_OPERATOR_BY_TYPE,
  K1 as DEFAULT_PALETTE,
  C0 as DataFilter,
  M0 as DataGrid,
  O0 as DataList,
  fb as Datepicker,
  A0 as Dialog,
  xb as DropZone,
  eb as Dropdown,
  b0 as EmptyState,
  Ir as FILTER_OPERATORS,
  $b as FabMenu,
  x0 as Field,
  u_ as Footer,
  v0 as Form,
  Ib as Gantt,
  p_ as Header,
  Ge as Icon,
  I0 as Input,
  j0 as Label,
  H0 as Layout,
  nb as Listbox,
  db as Mask,
  vb as Menu,
  ub as Numeric,
  pa as Pager,
  kb as PanelMenu,
  cb as Password,
  Ob as PickList,
  Eb as Pivot,
  wb as ProfileMenu,
  V0 as Progress,
  Lb as QRCode,
  ob as Radiobuttonlist,
  pb as Rating,
  q0 as Row,
  jb as Scheduler,
  gb as SecurityCode,
  qn as Select,
  sb as Selectbar,
  k_ as Sidebar,
  yb as SignaturePad,
  R0 as Skeleton,
  hb as Slider,
  lb as Splitbutton,
  Db as Splitter,
  K0 as Stack,
  g0 as Stat,
  Sb as Steps,
  Dl as Switch,
  y0 as Table,
  Y0 as Tabs,
  J0 as Textarea,
  ib as Textbox,
  X0 as ThemeSwitcher,
  Tb as Timeline,
  mb as Timespanpicker,
  B0 as ToastProvider,
  zb as Toc,
  ab as Togglebutton,
  T0 as Tooltip,
  Mb as Tree,
  Q0 as Typography,
  bb as Upload,
  Ab as VirtualGrid,
  Tr as applyFilters,
  va as applyGridState,
  pn as columnValue,
  ya as cycleSort,
  ka as defaultOperatorForType,
  w0 as email,
  mr as formatMasked,
  cr as formatValue,
  Fn as getByPath,
  m0 as iconNames,
  Er as matchesFilters,
  S0 as maxLength,
  N0 as minLength,
  xa as paginate,
  $0 as pattern,
  D0 as range,
  k0 as required,
  rr as resolveVariant,
  Ns as runValidators,
  U0 as shadeClass,
  Rs as sortItems,
  ba as sortedItems,
  Ts as toFilterString,
  Ps as toODataFilterString,
  $s as useFormContext,
  z0 as useFormField,
  L0 as useToast
};
