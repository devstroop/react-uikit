import { jsxs as k, jsx as t, Fragment as Oe } from "react/jsx-runtime";
import { forwardRef as He, useId as Ue, isValidElement as zn, cloneElement as Mr, useState as Y, useRef as le, useCallback as F, useMemo as ve, useContext as Or, createContext as jr, useEffect as $e, Children as Kr, useImperativeHandle as nr } from "react";
const Hr = "_button_1uim6_1", Wr = "_filled_1uim6_29", Vr = "_flat_1uim6_30", Ur = "_outlined_1uim6_31", Xr = "_text_1uim6_32", Gr = "_primary_1uim6_108", Yr = "_secondary_1uim6_110", Zr = "_ghost_1uim6_112", Jr = "_danger_1uim6_114", Qr = "_success_1uim6_116", eo = "_info_1uim6_118", to = "_loading_1uim6_122", no = "_spinner_1uim6_125", ro = "_xs_1uim6_137", oo = "_sm_1uim6_143", so = "_md_1uim6_149", ao = "_lg_1uim6_155", lo = "_xl_1uim6_161", io = "_iconOnly_1uim6_167", co = "_fullWidth_1uim6_193", kt = {
  button: Hr,
  filled: Wr,
  flat: Vr,
  outlined: Ur,
  text: Xr,
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
  primary: Gr,
  secondary: Yr,
  ghost: Zr,
  danger: Jr,
  success: Qr,
  info: eo,
  loading: to,
  spinner: no,
  "dx-spin": "_dx-spin_1uim6_1",
  xs: ro,
  sm: oo,
  md: so,
  lg: ao,
  xl: lo,
  iconOnly: io,
  fullWidth: co
}, uo = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function _o(e, n) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", o = n;
  if (r) {
    const _ = uo[e];
    return { variant: _.variant, style: o ?? _.style };
  }
  const s = e ?? "filled";
  return { variant: s === "filled" || s === "flat" || s === "outlined" || s === "text" ? s : "filled", style: o ?? "primary" };
}
const g0 = He(function({
  variant: n = "filled",
  severity: r,
  shade: o = "default",
  size: s = "md",
  fullWidth: l = !1,
  iconOnly: _ = !1,
  loading: a = !1,
  className: c,
  type: g = "button",
  disabled: b,
  children: d,
  ...D
}, x) {
  const z = _o(n, r), S = o !== "default" ? `shade-${o}` : null, m = [
    kt.button,
    kt[z.variant],
    kt[`style-${z.style}`],
    // backwards-compat: tone-* still emitted
    kt[`tone-${z.style}`],
    S ? kt[S] : null,
    kt[s],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    n && kt[n] ? kt[n] : null,
    l ? kt.fullWidth : null,
    _ ? kt.iconOnly : null,
    a ? kt.loading : null,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ k(
    "button",
    {
      ref: x,
      type: g,
      className: m,
      disabled: b || a,
      "aria-busy": a || void 0,
      ...D,
      children: [
        a ? /* @__PURE__ */ t("span", { "aria-hidden": "true", className: kt.spinner }) : null,
        d
      ]
    }
  );
}), fo = "_card_1qkae_1", po = "_elevated_1qkae_8", ho = "_filled_1qkae_13", mo = "_outlined_1qkae_18", go = "_interactive_1qkae_22", yo = "_text_1qkae_30", bo = "_header_1qkae_46", xo = "_body_1qkae_53", vo = "_footer_1qkae_63", dn = {
  card: fo,
  elevated: po,
  filled: ho,
  outlined: mo,
  interactive: go,
  text: yo,
  header: bo,
  body: xo,
  footer: vo
}, y0 = He(function({ variant: n = "elevated", header: r, footer: o, className: s, children: l, onKeyDown: _, ...a }, c) {
  const g = n === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ k(
      "div",
      {
        ref: c,
        role: g ? "button" : void 0,
        tabIndex: g ? 0 : void 0,
        onKeyDown: (b) => {
          _?.(b), !(!g || b.key !== "Enter" && b.key !== " ") && (b.preventDefault(), b.currentTarget.click());
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
const ko = "_badge_7agrm_1", wo = "_xs_7agrm_14", $o = "_sm_7agrm_19", No = "_md_7agrm_24", So = "_lg_7agrm_29", Do = "_xl_7agrm_34", zo = "_neutral_7agrm_40", Co = "_primary_7agrm_45", Mo = "_secondary_7agrm_50", Oo = "_light_7agrm_55", jo = "_base_7agrm_60", Io = "_dark_7agrm_65", Eo = "_info_7agrm_70", To = "_success_7agrm_75", Ao = "_warning_7agrm_80", Lo = "_danger_7agrm_85", Bo = "_filled_7agrm_92", Po = "_outlined_7agrm_142", Ro = "_text_7agrm_194", un = {
  badge: ko,
  xs: wo,
  sm: $o,
  md: No,
  lg: So,
  xl: Do,
  neutral: zo,
  primary: Co,
  secondary: Mo,
  light: Oo,
  base: jo,
  dark: Io,
  info: Eo,
  success: To,
  warning: Ao,
  danger: Lo,
  filled: Bo,
  outlined: Po,
  text: Ro,
  "shade-lighter": "_shade-lighter_7agrm_238",
  "shade-light": "_shade-light_7agrm_238",
  "shade-dark": "_shade-dark_7agrm_244",
  "shade-darker": "_shade-darker_7agrm_247"
}, b0 = He(function({ severity: n = "primary", variant: r = "filled", shade: o, size: s = "md", className: l, children: _, ...a }, c) {
  const g = n, b = rr(r, "filled"), d = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ t(
    "span",
    {
      ref: c,
      className: [un.badge, un[s], un[g], un[b], d ? un[d] : null, l].filter(Boolean).join(" "),
      ...a,
      children: _
    }
  );
}), qo = "_xs_1t3wj_2", Fo = "_sm_1t3wj_7", Ko = "_md_1t3wj_1", Ho = "_lg_1t3wj_17", Wo = "_xl_1t3wj_22", Vo = {
  xs: qo,
  sm: Fo,
  md: Ko,
  lg: Ho,
  xl: Wo
}, x0 = [
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
], Uo = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ k(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, ze = He(function({ name: n, size: r = "md", strokeWidth: o = 2, className: s, ...l }, _) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: _,
      className: [a ? Vo[r] : null, s].filter(Boolean).join(" "),
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
      children: Uo[n]
    }
  );
}), Xo = "_stat_e3lee_1", Go = "_label_e3lee_8", Yo = "_row_e3lee_16", Zo = "_value_e3lee_22", Jo = "_delta_e3lee_28", Qo = "_success_e3lee_33", es = "_danger_e3lee_37", ts = "_neutral_e3lee_41", ns = "_hint_e3lee_45", Wt = {
  stat: Xo,
  label: Go,
  row: Yo,
  value: Zo,
  delta: Jo,
  success: Qo,
  danger: es,
  neutral: ts,
  hint: ns
}, v0 = He(function({ label: n, value: r, delta: o, deltaTone: s = "neutral", hint: l, className: _, ...a }, c) {
  return /* @__PURE__ */ k("div", { ref: c, className: [Wt.stat, _].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Wt.label, children: n }),
    /* @__PURE__ */ k("div", { className: Wt.row, children: [
      /* @__PURE__ */ t("div", { className: Wt.value, children: r }),
      o != null && /* @__PURE__ */ t("div", { className: [Wt.delta, Wt[s]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ t("div", { className: Wt.hint, children: l })
  ] });
}), rs = "_wrap_1n4bf_1", os = "_table_1n4bf_8", ss = "_caption_1n4bf_14", as = "_none_1n4bf_51", ls = "_horizontal_1n4bf_57", is = "_vertical_1n4bf_67", cs = "_alternating_1n4bf_85", ds = "_start_1n4bf_89", us = "_center_1n4bf_93", _s = "_end_1n4bf_97", fs = "_empty_1n4bf_101", Rt = {
  wrap: rs,
  table: os,
  caption: ss,
  none: as,
  horizontal: ls,
  vertical: is,
  alternating: cs,
  start: ds,
  center: us,
  end: _s,
  empty: fs
};
function k0({
  columns: e,
  rows: n,
  rowKey: r,
  empty: o,
  caption: s,
  gridLines: l = "default",
  allowAlternatingRows: _ = !0,
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
          _ ? Rt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ t("caption", { className: Rt.caption, children: s }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((g) => /* @__PURE__ */ t(
            "th",
            {
              className: g.align != null ? Rt[g.align] : void 0,
              scope: "col",
              children: g.header
            },
            g.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((g) => /* @__PURE__ */ t("tr", { children: e.map((b) => /* @__PURE__ */ t(
            "td",
            {
              className: b.align != null ? Rt[b.align] : void 0,
              children: b.render != null ? b.render(g) : g[b.key]
            },
            b.key
          )) }, r(g))) })
        ]
      }
    ),
    n.length === 0 && o != null && /* @__PURE__ */ t("div", { className: Rt.empty, children: o })
  ] });
}
const ps = "_emptyState_7sl2y_1", hs = "_icon_7sl2y_13", ms = "_title_7sl2y_18", gs = "_description_7sl2y_24", ys = "_action_7sl2y_30", _n = {
  emptyState: ps,
  icon: hs,
  title: ms,
  description: gs,
  action: ys
};
function w0({ icon: e, title: n, description: r, action: o, className: s }) {
  return /* @__PURE__ */ k("div", { className: [_n.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: _n.icon, children: e }),
    /* @__PURE__ */ t("div", { className: _n.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: _n.description, children: r }),
    o != null && /* @__PURE__ */ t("div", { className: _n.action, children: o })
  ] });
}
const bs = "_field_3cvvz_1", xs = "_label_3cvvz_8", vs = "_required_3cvvz_14", ks = "_hint_3cvvz_19", ws = "_error_3cvvz_24", fn = {
  field: bs,
  label: xs,
  required: vs,
  hint: ks,
  error: ws
};
function $0({ label: e, htmlFor: n, required: r, hint: o, supporting: s, error: l, children: _, className: a }) {
  const c = o ?? s, g = Ue(), b = Ue(), d = Ue(), D = l != null ? b : c != null ? d : null, x = typeof _ == "function" ? _({ inputId: g, hintId: d, errorId: b }) : _, z = zn(x) && typeof x.props.id == "string" ? x.props.id : void 0, S = z ?? n ?? g, m = zn(x) && (D != null || z == null && typeof x.type == "string"), u = z != null || n != null || m, h = m && zn(x) ? Mr(
    x,
    {
      id: S,
      "aria-describedby": D != null ? [
        x.props["aria-describedby"],
        D
      ].filter((p) => typeof p == "string").join(" ") || void 0 : x.props["aria-describedby"],
      "aria-invalid": l != null ? !0 : x.props["aria-invalid"]
    }
  ) : x;
  return /* @__PURE__ */ k("div", { className: [fn.field, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ k("label", { className: fn.label, htmlFor: u ? S : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: fn.required, "aria-hidden": "true", children: "*" })
    ] }),
    h,
    l != null ? /* @__PURE__ */ t("div", { id: b, className: fn.error, "aria-live": "polite", children: l }) : c != null ? /* @__PURE__ */ t("div", { id: d, className: fn.hint, children: c }) : null
  ] });
}
const $s = "_form_fwqyn_1", Ns = {
  form: $s
}, Ir = jr(null);
function Ss() {
  const e = Or(Ir);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function N0({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: o,
  method: s,
  children: l,
  className: _
}) {
  const [a, c] = Y({}), [g, b] = Y(0), d = le(a);
  d.current = a;
  const D = F((p) => {
    c(($) => $[p.name] === p ? $ : { ...$, [p.name]: p });
  }, []), x = F((p) => {
    c(($) => {
      if (!(p in $)) return $;
      const y = { ...$ };
      return delete y[p], y;
    });
  }, []), z = F(() => {
    const p = {};
    for (const $ of Object.values(d.current)) {
      const y = $.validate();
      y.length > 0 && (p[$.name] = y);
    }
    return p;
  }, []), S = F(() => {
    const p = z();
    b(($) => $ + 1), Object.keys(p).length === 0 ? n?.(e) : r?.(p);
  }, [z, e, n, r]), m = (p) => {
    o != null && s != null || (p.preventDefault(), S());
  }, u = ve(
    () => ({ registerField: D, unregisterField: x, submit: S, submitCount: g }),
    [D, x, S, g]
  ), h = [Ns.form, _].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(Ir.Provider, { value: u, children: /* @__PURE__ */ t("form", { className: h, onSubmit: m, action: o, method: s, noValidate: !0, children: l }) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", S0 = (e = "Required") => (n) => an(n) ? e : null, D0 = (e = "Invalid email") => (n) => an(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, z0 = (e, n = "Invalid format") => (r) => an(r) || e.test(String(r)) ? null : n, C0 = (e, n = `Minimum ${e} characters`) => (r) => an(r) || String(r).length >= e ? null : n, M0 = (e, n = `Maximum ${e} characters`) => (r) => an(r) || String(r).length <= e ? null : n, O0 = (e, n, r = `Between ${e} and ${n}`) => (o) => {
  if (an(o)) return null;
  const s = Number(o);
  return !Number.isNaN(s) && s >= e && s <= n ? null : r;
};
function Ds(e, n, r) {
  return e.map((o) => o(n, r)).filter((o) => o != null);
}
function j0(e, n) {
  const { registerField: r, unregisterField: o, submitCount: s } = Ss(), [l, _] = Y(n?.initialValue), [a, c] = Y(!1), [g, b] = Y(!1), d = le(() => []);
  d.current = () => Ds(n?.validate ?? [], l), $e(() => (r({ name: e, validate: () => d.current() }), () => o(e)), [e, r, o]), $e(() => {
    s > 0 && (c(!0), b(!1));
  }, [s]);
  const D = a && !g ? d.current() : [];
  return { value: l, setValue: (z) => {
    _(z), b(!0);
  }, errors: D };
}
const zs = "_select_6ntdq_1", Cs = "_invalid_6ntdq_33", Ms = "_xs_6ntdq_40", Os = "_sm_6ntdq_48", js = "_md_6ntdq_56", Is = "_lg_6ntdq_62", Es = "_xl_6ntdq_68", Hn = {
  select: zs,
  invalid: Cs,
  xs: Ms,
  sm: Os,
  md: js,
  lg: Is,
  xl: Es
}, Fn = He(function({ size: n = "md", invalid: r = !1, options: o, children: s, className: l, ..._ }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [Hn.select, Hn[n], r ? Hn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ..._,
      children: o != null ? o.map((c) => /* @__PURE__ */ t("option", { value: c.value, disabled: c.disabled, children: c.label }, c.value)) : s
    }
  );
}), Er = [
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
function Kn(e, n) {
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
  const o = Kn(n, e.property), s = lr(o, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return s;
  const l = lr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? s && l : s || l;
}
function lr(e, n, r, o) {
  const s = o === "CaseInsensitive", l = (c) => s && typeof c == "string" ? c.toLowerCase() : c, _ = l(e), a = l(n);
  switch (r) {
    case "Equals":
      return _ === a || Array.isArray(_) && _.some((c) => l(c) === a);
    case "NotEquals":
      return _ !== a && !(Array.isArray(_) && _.some((c) => l(c) === a));
    case "LessThan":
      return Sn(_, a) < 0;
    case "LessThanOrEquals":
      return Sn(_, a) <= 0;
    case "GreaterThan":
      return Sn(_, a) > 0;
    case "GreaterThanOrEquals":
      return Sn(_, a) >= 0;
    case "Contains":
      return typeof _ == "string" && typeof a == "string" && _.includes(a);
    case "StartsWith":
      return typeof _ == "string" && typeof a == "string" && _.startsWith(a);
    case "EndsWith":
      return typeof _ == "string" && typeof a == "string" && _.endsWith(a);
    case "DoesNotContain":
      return typeof _ == "string" && typeof a == "string" && !_.includes(a);
    case "In":
      return Array.isArray(a) && a.some((c) => l(c) === _);
    case "NotIn":
      return Array.isArray(a) && !a.some((c) => l(c) === _);
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
function Tr(e, n, r = {}) {
  const o = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (or(n)) {
    if (n.filters.length === 0) return !0;
    const l = n.operator ?? o;
    return n.filters[l === "Or" ? "some" : "every"](
      (_) => Tr(e, _, { logicalOperator: l, caseSensitivity: s })
    );
  }
  return n.operator === "Custom", ar(n, e, s);
}
function Ar(e, n, r = {}) {
  return e.filter((o) => Tr(o, n, r));
}
function Ts(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function yt(e) {
  return typeof e == "string" ? `"${Ts(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(yt).join(", ")}]` : `"${String(e)}"`;
}
function As(e) {
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
function Ls(e) {
  return or(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Ls).filter(Boolean).join(` ${e.operator} `)})` : As(e);
}
function Bs(e) {
  return e.replace(/'/g, "''");
}
const Ps = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Rs(e, n) {
  const r = e.property, o = n === "CaseInsensitive", s = (c) => o ? `tolower(${c})` : c, l = (c) => typeof c == "string" ? `'${Bs(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), _ = (c, g) => {
    const b = typeof g == "string", d = b && o ? s(r) : r;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${d} ${Ps[c]} ${b && o ? s(l(g)) : l(g)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(l(g))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(l(g))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(l(g))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(l(g))}))`;
      case "In":
        return Array.isArray(g) ? `${d} in (${g.map((D) => l(D)).join(", ")})` : `${d} in (${l(g)})`;
      case "NotIn":
        return Array.isArray(g) ? `not(${d} in (${g.map((D) => l(D)).join(", ")}))` : `not(${d} in (${l(g)}))`;
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
    return _(e.operator, e.value);
  const a = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${_(e.operator, e.value)} ${a} ${_(
    e.secondOperator,
    e.secondValue
  )})`;
}
function qs(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (or(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => qs(s, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return Rs(e, r);
}
function Fs(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const s of n) {
      const l = s.sortOrder === "Ascending" ? 1 : -1, _ = Sn(Kn(r, s.property), Kn(o, s.property));
      if (_ !== 0) return _ * l;
    }
    return 0;
  });
}
const Ks = "_filter_vjru8_1", Hs = "_rows_vjru8_9", Ws = "_row_vjru8_9", Vs = "_join_vjru8_21", Us = "_property_vjru8_30", Xs = "_operator_vjru8_34", Gs = "_value_vjru8_38", Ys = "_remove_vjru8_42", Zs = "_bar_vjru8_58", Js = "_add_vjru8_64", Qs = "_custom_vjru8_78", ea = "_summary_vjru8_82", ft = {
  filter: Ks,
  rows: Hs,
  row: Ws,
  join: Vs,
  property: Us,
  operator: Xs,
  value: Gs,
  remove: Ys,
  bar: Zs,
  add: Js,
  custom: Qs,
  summary: ea
}, ta = {
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
function na({
  property: e,
  value: n,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(Oe, { children: e.editor({ value: n, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      Fn,
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
      Fn,
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
function I0({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: s = !1,
  className: l,
  viewChanged: _,
  items: a,
  children: c
}) {
  const [g, b] = Y(
    () => o != null && o.length > 0 ? o.map((u, h) => ({ id: h, ...u })) : [{ id: 0, property: e[0]?.name ?? "", operator: On[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (u, h) => {
    b((p) => p.map(($) => $.id === u ? { ...$, ...h } : $));
  }, D = () => {
    const u = g[g.length - 1], h = Math.max(0, ...g.map(($) => $.id)) + 1, p = e[0];
    b(($) => [
      ...$,
      {
        id: h,
        property: u?.property ?? p?.name ?? "",
        operator: On[e.find((y) => y.name === (u?.property ?? p?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, x = (u) => {
    b((h) => h.length > 1 ? h.filter((p) => p.id !== u) : h);
  }, z = ve(() => {
    const u = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], h = [];
    for (const p of g) {
      if (p.property === "" || (p.value == null || p.value === "") && !u.includes(p.operator)) continue;
      const y = {
        property: p.property,
        operator: p.operator,
        value: p.value
      };
      p.secondOperator != null && p.secondValue !== void 0 && (y.secondOperator = p.secondOperator, y.secondValue = p.secondValue, y.logicalOperator = p.logicalOperator ?? "And"), h.push(y);
    }
    return h;
  }, [g]), S = ve(() => a == null || z.length === 0 ? a : Ar(a, { operator: n, filters: z }, { caseSensitivity: r }), [a, z, n, r]);
  $e(() => {
    _ != null && a != null && _(S ?? []);
  }, [S]);
  const m = (u) => e.find((h) => h.name === u) ?? { name: u, type: "string" };
  return /* @__PURE__ */ k("div", { className: [ft.filter, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: ft.rows, role: "group", "aria-label": "Filter conditions", children: g.map((u, h) => {
      const p = m(u.property), $ = s ? [On[p.type ?? "string"]] : Er;
      return /* @__PURE__ */ k("div", { className: ft.row, children: [
        h > 0 ? /* @__PURE__ */ t("span", { className: ft.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          Fn,
          {
            "aria-label": `Condition ${h + 1} property`,
            className: ft.property,
            value: u.property,
            onChange: (y) => {
              const w = e.find((i) => i.name === y.target.value);
              d(u.id, {
                property: y.target.value,
                operator: On[w?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((y) => ({ value: y.name, label: y.title ?? y.name }))
          }
        ),
        /* @__PURE__ */ t(
          Fn,
          {
            "aria-label": `Condition ${h + 1} operator`,
            className: ft.operator,
            value: u.operator,
            onChange: (y) => d(u.id, { operator: y.target.value }),
            options: $.map((y) => ({ value: y, label: ta[y] }))
          }
        ),
        /* @__PURE__ */ t(na, { property: p, value: u.value, onChange: (y) => d(u.id, { value: y }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ft.remove,
            "aria-label": `Remove condition ${h + 1}`,
            onClick: () => x(u.id),
            children: /* @__PURE__ */ t(ze, { name: "close", size: "sm" })
          }
        )
      ] }, u.id);
    }) }),
    /* @__PURE__ */ k("div", { className: ft.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ft.add, onClick: D, children: "Add filter" }),
      c != null ? /* @__PURE__ */ t("div", { className: ft.custom, children: c }) : null,
      a != null ? /* @__PURE__ */ k("span", { className: ft.summary, "aria-live": "polite", children: [
        S?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const ra = "_pager_ps38y_1", oa = "_alignLeft_ps38y_10", sa = "_alignCenter_ps38y_14", aa = "_alignRight_ps38y_18", la = "_alignJustify_ps38y_22", ia = "_summary_ps38y_26", ca = "_controls_ps38y_31", da = "_button_ps38y_37", ua = "_active_ps38y_73", _a = "_ellipsis_ps38y_85", fa = "_size_ps38y_91", st = {
  pager: ra,
  alignLeft: oa,
  alignCenter: sa,
  alignRight: aa,
  alignJustify: la,
  summary: ia,
  controls: ca,
  button: da,
  active: ua,
  ellipsis: _a,
  size: fa
};
function pa(e, n, r, o) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(o));
}
function ir(e, n) {
  return e.replace("{0}", String(n));
}
function ha(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (a, c) => c + 1);
  const o = Math.floor(r / 2);
  let s = Math.max(1, e - o);
  const l = Math.min(n, s + r - 1);
  s = Math.max(1, l - r + 1);
  const _ = [];
  for (let a = s; a <= l; a++) _.push(a);
  return s > 2 && _.unshift("ellipsis"), s > 1 && _.unshift(1), l < n - 1 && _.push("ellipsis"), l < n && _.push(n), _;
}
function ma({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: o,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: _ = 5,
  alwaysVisible: a = !1,
  horizontalAlign: c = "left",
  showPagingSummary: g,
  showSummary: b,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: D = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: x,
  summaryTemplate: z,
  pageSizeText: S = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: u = "Previous page",
  nextPageTitle: h = "Next page",
  lastPageTitle: p = "Last page",
  pageTitleFormat: $ = "Page {0}",
  pageAriaLabelFormat: y = "Page {0}",
  onPageChange: w,
  onPageSizeChange: i,
  ariaLabel: v = "Pagination",
  className: O
}) {
  const I = r ?? o ?? s, [j, C] = Y(I), f = r !== void 0 || o !== void 0, M = f ? I : j, T = Math.max(1, Math.ceil(e / n)), E = Math.min(Math.max(1, M), T), A = g ?? b ?? !0, X = a || T > 1, H = ha(E, T, _), re = F(
    (G) => {
      const K = Math.min(Math.max(1, G), T);
      f || C(K);
      const L = (K - 1) * n;
      w?.({ page: K, skip: L, top: n, pageCount: T, pageSize: n });
    },
    [f, w, T, n]
  ), Z = c === "center" ? st.alignCenter : c === "right" ? st.alignRight : c === "justify" ? st.alignJustify : st.alignLeft, J = { count: e, pageNumber: E, pageSize: n, pageCount: T }, Q = (G) => {
    const K = Array.from(G.currentTarget.querySelectorAll("button[data-pager-page]")), L = K.indexOf(document.activeElement);
    L !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (K[L + 1] ?? K[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (K[L - 1] ?? K[K.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), K[0]?.focus()) : G.key === "End" && (G.preventDefault(), K[K.length - 1]?.focus()));
  };
  return X ? /* @__PURE__ */ k("nav", { className: [st.pager, Z, O].filter(Boolean).join(" "), "aria-label": v, children: [
    A && /* @__PURE__ */ t("span", { className: st.summary, "aria-live": "polite", children: x ? x(J) : z ? z({ count: e, pageNumber: E, pageSize: n }) : pa(D, E, T, e) }),
    /* @__PURE__ */ k("div", { className: st.controls, role: "group", "aria-label": v, onKeyDown: Q, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: E <= 1,
          onClick: () => re(1),
          "aria-label": m,
          title: m,
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
          "aria-label": u,
          title: u,
          children: "‹"
        }
      ),
      H.map(
        (G, K) => G === "ellipsis" ? /* @__PURE__ */ t("span", { className: st.ellipsis, "aria-hidden": "true", children: "…" }, `e${K}`) : /* @__PURE__ */ t(
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
          "aria-label": h,
          title: h,
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
    d && l && l.length > 0 && /* @__PURE__ */ k("label", { className: st.size, children: [
      /* @__PURE__ */ t("span", { children: S }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (G) => i?.(Number(G.target.value)),
          "aria-label": S,
          children: l.map((G) => /* @__PURE__ */ t("option", { value: G, children: G }, G))
        }
      )
    ] })
  ] }) : null;
}
function Zn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: o, showSummary: s, ...l } = e;
  return /* @__PURE__ */ t(
    ma,
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
function ga(e, n, r, o, s, l) {
  if (!n || !r) return e.map((c) => ({ type: "row", row: c }));
  const _ = /* @__PURE__ */ new Map();
  e.forEach((c) => {
    const g = String(s(c, n) ?? ""), b = _.get(g);
    b ? b.push(c) : _.set(g, [c]);
  });
  const a = [];
  return _.forEach((c, g) => {
    const b = c[0], d = b != null ? s(b, n) : void 0;
    a.push({
      type: "group",
      group: { key: g, display: l(d), property: n, title: r.title ?? n, count: c.length }
    }), o.has(g) && c.forEach((D) => a.push({ type: "row", row: D }));
  }), a;
}
function jn(e, n) {
  return e.property ?? `col-${n}`;
}
function ya(e, n) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: s, column: l }) => {
    if (!l.frozen) return;
    r[s] = o === 0 ? "0px" : `${o}px`;
    const _ = n[s] ?? l.width ?? "8rem";
    o += parseFloat(_);
  }), r;
}
function ba(e, n) {
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
    return Kn(e, n);
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
function xa(e, n, r = {}) {
  const o = e.find((l) => l.property === n), s = dr[(o ? dr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((l) => l.property !== n) : r.multi ? [...e.filter((l) => l.property !== n), { property: n, sortOrder: s }] : [{ property: n, sortOrder: s }];
}
function va(e, n) {
  return Fs(e, n);
}
function ka(e, n, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, n), o), l = (s - 1) * r;
  return { items: e.slice(l, l + r), pageCount: o, pageNumber: s, total: e.length };
}
function wa(e, n, r = {}) {
  const o = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, c]) => ({
    property: a,
    operator: c.operator ?? "Contains",
    value: ba(c.value, r.types?.[a] ?? "string")
  })), s = o.length > 0 ? Ar(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = va(s, n.sorts);
  return { ...ka(l, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function $a(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Na = "_grid_1my0o_1", Sa = "_toolbar_1my0o_8", Da = "_picker_1my0o_13", za = "_pickerButton_1my0o_17", Ca = "_pickerPanel_1my0o_31", Ma = "_pickerItem_1my0o_46", Oa = "_groupPanel_1my0o_55", ja = "_groupPanelActive_1my0o_66", Ia = "_groupPanelText_1my0o_70", Ea = "_groupChip_1my0o_74", Ta = "_groupRemove_1my0o_85", Aa = "_groupRow_1my0o_94", La = "_groupCell_1my0o_98", Ba = "_groupToggle_1my0o_103", Pa = "_editRow_1my0o_116", Ra = "_editCell_1my0o_120", qa = "_editInput_1my0o_125", Fa = "_commandCell_1my0o_135", Ka = "_commandButton_1my0o_141", Ha = "_data_1my0o_156", Wa = "_table_1my0o_163", Va = "_header_1my0o_169", Ua = "_center_1my0o_181", Xa = "_right_1my0o_185", Ga = "_sortButton_1my0o_189", Ya = "_sortIndicator_1my0o_207", Za = "_sortIndex_1my0o_211", Ja = "_cell_1my0o_222", Qa = "_clickable_1my0o_236", el = "_frozen_1my0o_244", tl = "_selected_1my0o_250", nl = "_resizeHandle_1my0o_254", rl = "_filterCell_1my0o_272", ol = "_filterSelect_1my0o_280", sl = "_filterInput_1my0o_290", al = "_empty_1my0o_301", ll = "_loading_1my0o_307", il = "_visuallyHidden_1my0o_317", ge = {
  grid: Na,
  toolbar: Sa,
  picker: Da,
  pickerButton: za,
  pickerPanel: Ca,
  pickerItem: Ma,
  groupPanel: Oa,
  groupPanelActive: ja,
  groupPanelText: Ia,
  groupChip: Ea,
  groupRemove: Ta,
  groupRow: Aa,
  groupCell: La,
  groupToggle: Ba,
  editRow: Pa,
  editCell: Ra,
  editInput: qa,
  commandCell: Fa,
  commandButton: Ka,
  data: Ha,
  table: Wa,
  header: Va,
  center: Ua,
  right: Xa,
  sortButton: Ga,
  sortIndicator: Ya,
  sortIndex: Za,
  cell: Ja,
  clickable: Qa,
  frozen: el,
  selected: tl,
  resizeHandle: nl,
  filterCell: rl,
  filterSelect: ol,
  filterInput: sl,
  empty: al,
  loading: ll,
  visuallyHidden: il
}, cl = {
  Ascending: "ascending",
  Descending: "descending"
};
function ur(e, n) {
  return e.filterable ?? n;
}
function dl(e, n) {
  return e.sortable ?? n;
}
function ul(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function E0({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: l = !1,
  allowFiltering: _ = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: c = "And",
  allowPaging: g = !1,
  pageSize: b = 10,
  pageSizeOptions: d,
  pageNumbersCount: D = 5,
  pagerPosition: x = "Bottom",
  showPagingSummary: z = !0,
  showPageSizeSelector: S = !0,
  selectionMode: m = "None",
  selectedKeys: u,
  onSelectionChange: h,
  showColumnPicker: p = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: y = !1,
  allowColumnReorder: w = !1,
  allowGrouping: i = !1,
  groupPanelText: v = "Drag a column header here to group",
  groupExpanded: O = !0,
  editMode: I = "None",
  allowRowCreate: j = !1,
  onRowUpdate: C,
  onRowCreate: f,
  onRowDelete: M,
  isLoading: T = !1,
  empty: E = "No records found",
  ariaLabel: A,
  className: X,
  onRowClick: H
}) {
  const [re, Z] = Y([]), [J, Q] = Y(/* @__PURE__ */ new Map()), [G, K] = Y(1), [L, oe] = Y(b), [ce, ee] = Y(
    () => e.map((R, q) => jn(R, q))
  ), [ue, me] = Y(
    () => new Set(e.map((R, q) => R.visible !== !1 ? jn(R, q) : "").filter(Boolean))
  ), [ke, Pe] = Y({}), [Ie, Xe] = Y(!1), [be, Ge] = Y(null), [Je, qe] = Y(null), [Ze, Fe] = Y(null), [Qe, U] = Y({}), N = le(null), P = le(null), V = ve(() => {
    const R = /* @__PURE__ */ new Map();
    return e.forEach((q, fe) => R.set(jn(q, fe), q)), R;
  }, [e]), se = ve(
    () => ce.filter((R) => ue.has(R)).map((R) => ({ key: R, column: V.get(R) })).filter((R) => R.column != null),
    [ce, ue, V]
  ), te = ve(
    () => ya(se, ke),
    [se, ke]
  ), pe = I !== "None" || M != null || j, Ne = ve(
    () => wa(n, { sorts: re, filters: J, pageNumber: G, pageSize: L }, {
      logicalOperator: c,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((R) => R.type != null && R.property != null).map((R) => [R.property, R.type])
      )
    }),
    [n, re, J, G, L, c, a, e]
  ), Re = ve(
    () => be ? e.find((R) => R.property === be) : void 0,
    [be, e]
  ), Ee = ve(
    () => Je ?? new Set(O ? Ne.items.map((R) => String(pn(R, be ?? "") ?? "")) : []),
    [Je, O, Ne.items, be]
  ), rt = ve(
    () => ga(
      Ne.items,
      be ?? void 0,
      Re,
      Ee,
      pn,
      (R) => cr(R, Re?.format)
    ),
    [Ne.items, be, Re, Ee]
  ), vt = ve(
    () => be ? se.filter((R) => R.column.property !== be) : se,
    [se, be]
  ), ne = (R) => {
    R !== "" && Z(xa(re, R, { multi: s }));
  }, De = (R, q) => {
    Q((fe) => {
      const xe = new Map(fe);
      return xe.set(R, q), xe;
    }), K(1);
  }, W = (R) => {
    oe(R), K(1);
  }, ae = (R) => {
    if (m === "None") return;
    const q = r(R), fe = u ?? [];
    let xe;
    m === "Single" ? xe = fe.length === 1 && fe[0] === q ? [] : [q] : xe = fe.includes(q) ? fe.filter((ot) => ot !== q) : [...fe, q], h?.(xe);
  }, _e = (R) => {
    H?.(R);
  }, he = (R, q, fe) => {
    N.current = { key: R, startX: q, startWidth: fe };
  }, de = (R) => {
    const q = N.current;
    if (!q) return;
    const fe = R - q.startX, xe = Math.max(48, q.startWidth + fe);
    Pe((ot) => ({ ...ot, [q.key]: `${xe}px` }));
  }, ye = () => {
    N.current = null;
  }, Le = (R) => {
    P.current = R;
  }, Ke = (R) => {
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
    fe && (Ge(fe), qe(null));
  }, Ce = () => {
    Ge(null), qe(null);
  }, Se = (R) => {
    qe((q) => {
      const fe = q ?? new Set(O ? Ne.items.map((ot) => String(pn(ot, be ?? "") ?? "")) : []), xe = new Set(fe);
      return xe.has(R) ? xe.delete(R) : xe.add(R), xe;
    });
  }, Te = (R) => {
    const q = {};
    e.forEach((fe) => {
      fe.property && (q[fe.property] = pn(R, fe.property));
    }), U(q), Fe(String(r(R)));
  }, et = () => {
    const R = {};
    e.forEach((q) => {
      q.property && q.type === "boolean" && (R[q.property] = !1);
    }), U(R), Fe("__new__");
  }, ct = () => {
    Fe(null), U({});
  }, It = (R) => {
    if (Ze === "__new__") {
      const q = Object.fromEntries(
        e.filter((fe) => fe.property).map((fe) => [fe.property, Qe[fe.property]])
      );
      f?.(q);
    } else if (R != null) {
      const q = { ...R, ...Qe };
      C?.(R, q);
    }
    ct();
  }, Cn = g && (x === "Top" || x === "TopAndBottom"), ln = g && (x === "Bottom" || x === "TopAndBottom"), Rr = _ && e.some((R) => ur(R, _)), qr = (R, q, fe) => R.render ? R.render(q, { index: 0 }) : cr(pn(q, R.property), R.format), Fr = (R) => {
    const q = [ge.cell];
    return R.align === "center" && q.push(ge.center), R.align === "right" && q.push(ge.right), R.frozen && q.push(ge.frozen), q.join(" ");
  };
  return /* @__PURE__ */ k("div", { className: [ge.grid, X].filter(Boolean).join(" "), children: [
    Cn && /* @__PURE__ */ t(
      Zn,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: D,
        showSummary: z,
        showPageSizeSelector: S,
        ariaLabel: ln ? "Pagination (top)" : "Pagination",
        onPageChange: K,
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
            Re?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: ge.groupRemove, onClick: Ce, "aria-label": `Remove group by ${Re?.title ?? be}`, children: /* @__PURE__ */ t(ze, { name: "close", size: "sm" }) })
          ] }) : /* @__PURE__ */ t("span", { className: ge.groupPanelText, children: v })
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
            "aria-expanded": Ie,
            onClick: () => Xe((R) => !R),
            children: $
          }
        ),
        Ie && /* @__PURE__ */ t("div", { className: ge.pickerPanel, role: "menu", "aria-label": $, children: e.map((R, q) => {
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
          "aria-rowcount": Ne.total + 1,
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
                  const fe = dl(q, o), xe = re.find((Ae) => Ae.property === q.property), ot = xe ? re.indexOf(xe) + 1 : 0, ht = q.align ?? "left";
                  return /* @__PURE__ */ k(
                    "th",
                    {
                      "aria-sort": fe && xe ? cl[xe.sortOrder] : "none",
                      className: [
                        ge.header,
                        ht === "center" ? ge.center : "",
                        ht === "right" ? ge.right : "",
                        q.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: q.frozen ? { left: te[R] } : void 0,
                      scope: "col",
                      draggable: w || i || void 0,
                      onDragStart: w || i ? (Ae) => {
                        Ae.dataTransfer && (Ae.dataTransfer.effectAllowed = "move"), Le(R);
                      } : void 0,
                      onDragOver: w ? (Ae) => Ae.preventDefault() : void 0,
                      onDrop: w ? () => Ke(R) : void 0,
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
                            onMouseDown: (Ae) => {
                              Ae.preventDefault(), Ae.stopPropagation();
                              const cn = ke[R] ?? q.width, Mn = cn ? parseFloat(cn) : 96;
                              he(R, Ae.clientX, Number.isFinite(Mn) ? Mn : 96);
                            },
                            onMouseMove: (Ae) => {
                              N.current?.key === R && de(Ae.clientX);
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
              Rr && /* @__PURE__ */ t("tr", { children: vt.map(({ key: R, column: q }) => {
                if (!ur(q, _)) return /* @__PURE__ */ t("td", { className: ge.filterCell }, R);
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
                      value: fe?.operator ?? $a(q.type ?? "string"),
                      onChange: (xe) => De(q.property ?? "", { ...fe, operator: xe.target.value }),
                      "aria-label": `${q.title ?? q.property} operator`,
                      children: Er.filter((xe) => xe !== "Custom").map((xe) => /* @__PURE__ */ t("option", { value: xe, children: xe }, xe))
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
              Ze === "__new__" && /* @__PURE__ */ k("tr", { className: ge.editRow, children: [
                vt.map(({ key: R, column: q }) => /* @__PURE__ */ t("td", { className: ge.editCell, children: q.property && /* @__PURE__ */ t(
                  "input",
                  {
                    className: ge.editInput,
                    type: q.type === "number" ? "number" : q.type === "boolean" ? "checkbox" : "text",
                    checked: q.type === "boolean" ? !!Qe[q.property] : void 0,
                    value: q.type === "boolean" ? void 0 : String(Qe[q.property] ?? ""),
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
                  const ht = Ee.has(R.group.key);
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
                const q = R.row, fe = r(q), xe = (u ?? []).includes(fe), ot = Ze != null && Ze === String(fe);
                return /* @__PURE__ */ k(
                  "tr",
                  {
                    className: [
                      H || m !== "None" ? ge.clickable : "",
                      xe ? ge.selected : "",
                      ot ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": m !== "None" ? xe : void 0,
                    onClick: H || m !== "None" ? (ht) => {
                      ul(ht.target) || (_e(q), ae(q));
                    } : void 0,
                    children: [
                      vt.map(({ key: ht, column: Ae }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Fr(Ae),
                          style: Ae.frozen ? { left: te[ht] } : void 0,
                          children: ot && Ae.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: ge.editInput,
                              type: Ae.type === "number" ? "number" : Ae.type === "boolean" ? "checkbox" : "text",
                              checked: Ae.type === "boolean" ? !!Qe[Ae.property] : void 0,
                              value: Ae.type === "boolean" ? void 0 : String(Qe[Ae.property] ?? ""),
                              onChange: (cn) => U((Mn) => ({
                                ...Mn,
                                [Ae.property]: Ae.type === "boolean" ? cn.target.checked : cn.target.value
                              })),
                              "aria-label": `${Ae.title ?? Ae.property} (edit)`
                            }
                          ) : qr(Ae, q)
                        },
                        ht
                      )),
                      pe && /* @__PURE__ */ t("td", { className: ge.commandCell, children: ot ? /* @__PURE__ */ k(Oe, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => It(q), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: ct, children: "Cancel" })
                      ] }) : /* @__PURE__ */ k(Oe, { children: [
                        I !== "None" && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Te(q), children: "Edit" }),
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
      Ne.items.length === 0 && !T && /* @__PURE__ */ t("div", { className: ge.empty, children: E }),
      T && /* @__PURE__ */ t("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    ln && /* @__PURE__ */ t(
      Zn,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: D,
        showSummary: z,
        showPageSizeSelector: S,
        ariaLabel: Cn ? "Pagination (bottom)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: W
      }
    )
  ] });
}
const _l = "_wrap_1pzu9_1", fl = "_grid_1pzu9_7", pl = "_stacked_1pzu9_13", hl = "_item_1pzu9_19", ml = "_empty_1pzu9_25", hn = {
  wrap: _l,
  grid: fl,
  stacked: pl,
  item: hl,
  empty: ml
};
function T0({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: s,
  emptyMessage: l = "No records found",
  emptyTemplate: _,
  loadingTemplate: a,
  isLoading: c = !1,
  showPageSizeSelector: g = !0,
  className: b,
  ariaLabel: d = "Data list"
}) {
  const [D, x] = Y(1), [z, S] = Y(n), m = e.length, u = Math.max(1, Math.ceil(m / z)), h = Math.min(Math.max(1, D), u), p = ve(() => {
    const y = (h - 1) * z;
    return e.slice(y, y + z);
  }, [e, h, z]), $ = o ? hn.grid : hn.stacked;
  return /* @__PURE__ */ k("div", { className: [hn.wrap, b].filter(Boolean).join(" "), "aria-label": d, children: [
    c && a != null ? a : m === 0 ? _ ?? /* @__PURE__ */ t("div", { className: hn.empty, children: l }) : /* @__PURE__ */ t("div", { className: $, children: p.map((y, w) => /* @__PURE__ */ t("div", { className: hn.item, children: s ? s(y, w) : String(y) }, w)) }),
    /* @__PURE__ */ t(
      Zn,
      {
        pageNumber: h,
        pageSize: z,
        count: m,
        pageSizeOptions: r,
        showPageSizeSelector: g,
        onPageChange: x,
        onPageSizeChange: (y) => {
          S(y), x(1);
        }
      }
    )
  ] });
}
const gl = "_label_idsiv_1", yl = {
  label: gl
}, A0 = He(
  function({ className: n, children: r, ...o }, s) {
    return /* @__PURE__ */ t("label", { ref: s, className: [yl.label, n].filter(Boolean).join(" "), ...o, children: r });
  }
), bl = "_input_gelpf_1", xl = "_invalid_gelpf_31", vl = "_xs_gelpf_37", kl = "_sm_gelpf_43", wl = "_md_gelpf_49", $l = "_lg_gelpf_55", Nl = "_xl_gelpf_61", Wn = {
  input: bl,
  invalid: xl,
  xs: vl,
  sm: kl,
  md: wl,
  lg: $l,
  xl: Nl
}, L0 = He(function({ size: n = "md", invalid: r = !1, className: o, ...s }, l) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: l,
      className: [Wn.input, Wn[n], r ? Wn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...s
    }
  );
}), Sl = "_checkbox_s7nxo_1", Dl = {
  checkbox: Sl
}, B0 = He(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Dl.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), zl = {
  switch: "_switch_1nmgf_1"
}, Cl = He(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [zl.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Ml = "_trigger_1prbw_1", Ol = "_tooltip_1prbw_7", jl = "_top_1prbw_34", Il = "_right_1prbw_40", El = "_bottom_1prbw_46", Tl = "_left_1prbw_52", Al = "_arrow_1prbw_58", In = {
  trigger: Ml,
  tooltip: Ol,
  "se-tooltip-in": "_se-tooltip-in_1prbw_1",
  top: jl,
  right: Il,
  bottom: El,
  left: Tl,
  arrow: Al
};
function P0({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: o = 300,
  className: s
}) {
  const l = Ue(), _ = le(null), [a, c] = Y(!1), g = () => {
    _.current = window.setTimeout(() => c(!0), o);
  }, b = () => {
    _.current !== null && (window.clearTimeout(_.current), _.current = null), c(!1);
  };
  $e(() => {
    if (!a) return;
    const D = (x) => {
      x.key === "Escape" && b();
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [a]);
  const d = zn(n) ? Mr(
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
      onMouseEnter: g,
      onMouseLeave: b,
      onFocus: g,
      onBlur: b,
      children: [
        d,
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
const Ll = "_dialog_kr2ur_1", Bl = "_sm_kr2ur_30", Pl = "_md_kr2ur_34", Rl = "_lg_kr2ur_38", ql = "_header_kr2ur_42", Fl = "_title_kr2ur_51", Kl = "_description_kr2ur_58", Hl = "_close_kr2ur_65", Wl = "_body_kr2ur_84", Vl = "_footer_kr2ur_90", qt = {
  dialog: Ll,
  "se-dialog-in": "_se-dialog-in_kr2ur_1",
  sm: Bl,
  md: Pl,
  lg: Rl,
  header: ql,
  title: Fl,
  description: Kl,
  close: Hl,
  body: Wl,
  footer: Vl
};
function R0({
  open: e,
  onClose: n,
  title: r,
  description: o,
  children: s,
  footer: l,
  size: _ = "md",
  width: a,
  height: c,
  className: g
}) {
  const b = le(null), d = Ue(), D = Ue(), x = le(n);
  $e(() => {
    x.current = n;
  });
  const z = le(!1), S = le(!1), m = F(() => {
    z.current || (z.current = !0, x.current());
  }, []), u = F(() => {
    if (S.current) {
      S.current = !1;
      return;
    }
    x.current();
  }, []);
  return $e(() => {
    const h = b.current;
    if (h)
      if (e && !h.open) {
        const p = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        h.showModal(), (h.querySelector('button[aria-label="Close dialog"]') ?? h.querySelector("button"))?.focus();
        const y = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const w = (i) => {
          i.preventDefault(), m();
        };
        return h.addEventListener("cancel", w), () => {
          h.removeEventListener("cancel", w), document.body.style.overflow = y, p?.focus({ preventScroll: !0 });
        };
      } else !e && h.open && (S.current = z.current, z.current = !1, h.close());
  }, [e, m]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ k(
    "dialog",
    {
      ref: b,
      className: [qt.dialog, qt[_], g].filter(Boolean).join(" "),
      style: {
        width: a ?? void 0,
        height: c ?? void 0
      },
      onClose: u,
      onClick: (h) => {
        h.target === b.current && m();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? d : void 0,
      "aria-describedby": o ? D : void 0,
      children: [
        r && /* @__PURE__ */ k("header", { className: qt.header, children: [
          /* @__PURE__ */ k("div", { children: [
            /* @__PURE__ */ t("h2", { id: d, className: qt.title, children: r }),
            o && /* @__PURE__ */ t("p", { id: D, className: qt.description, children: o })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: qt.close,
              onClick: m,
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ t(ze, { name: "close", size: "sm" })
            }
          )
        ] }),
        s && /* @__PURE__ */ t("div", { className: qt.body, children: s }),
        l && /* @__PURE__ */ t("footer", { className: qt.footer, children: l })
      ]
    }
  );
}
const Ul = "_viewport_1h8v8_1", Xl = "_topLeft_1h8v8_13", Gl = "_topRight_1h8v8_20", Yl = "_bottomLeft_1h8v8_25", Zl = "_toast_1h8v8_30", Jl = "_leaving_1h8v8_61", Ql = "_info_1h8v8_77", ei = "_success_1h8v8_82", ti = "_warning_1h8v8_87", ni = "_danger_1h8v8_92", ri = "_content_1h8v8_97", oi = "_title_1h8v8_102", si = "_description_1h8v8_125", ai = "_dismiss_1h8v8_132", li = "_actions_1h8v8_151", ii = "_action_1h8v8_151", ci = "_cancel_1h8v8_159", di = "_progress_1h8v8_195", mt = {
  viewport: Ul,
  topLeft: Xl,
  topRight: Gl,
  bottomLeft: Yl,
  toast: Zl,
  "se-toast-in": "_se-toast-in_1h8v8_1",
  leaving: Jl,
  "se-toast-out": "_se-toast-out_1h8v8_1",
  info: Ql,
  success: ei,
  warning: ti,
  danger: ni,
  content: ri,
  title: oi,
  description: si,
  dismiss: ai,
  actions: li,
  action: ii,
  cancel: ci,
  progress: di,
  "se-toast-progress": "_se-toast-progress_1h8v8_1"
}, Lr = jr(null);
function q0() {
  const e = Or(Lr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const ui = 200, _i = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function F0({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: s
}) {
  const [l, _] = Y([]), [a, c] = Y(!1), g = le([]), b = le(/* @__PURE__ */ new Map()), d = le(!1), D = le(0), x = (C) => {
    d.current = C, c(C);
  }, z = F((C) => {
    const f = b.current.get(C);
    f && (window.clearTimeout(f.timeoutId), f.remaining = Math.max(0, f.remaining - (Date.now() - f.startedAt)));
  }, []), S = F((C) => {
    const f = b.current.get(C);
    f && (window.clearTimeout(f.timeoutId), b.current.delete(C));
  }, []), m = F(
    (C) => {
      S(C), _((f) => {
        const M = f.filter((T) => T.id !== C);
        return g.current = M, M;
      });
    },
    [S]
  ), u = F(
    (C) => {
      const f = g.current.find((M) => M.id === C);
      !f || f.leaving || (f.onAutoClose?.(), m(C));
    },
    [m]
  ), h = F(
    (C) => {
      const f = b.current.get(C);
      !f || f.remaining <= 0 || (f.startedAt = Date.now(), f.timeoutId = window.setTimeout(() => u(C), f.remaining));
    },
    [u]
  ), p = F(() => {
    d.current || b.current.forEach((C, f) => z(f)), x(!0);
  }, [z]), $ = F(() => {
    b.current.forEach((C, f) => h(f)), x(!1);
  }, [h]);
  $e(() => {
    if (!o) return;
    const C = () => {
      document.hidden ? p() : $();
    };
    return document.addEventListener("visibilitychange", C), () => document.removeEventListener("visibilitychange", C);
  }, [o, p, $]);
  const y = F(
    (C) => {
      const f = g.current.find((M) => M.id === C);
      !f || f.leaving || (f.onDismiss?.(), _((M) => {
        const T = M.map((E) => E.id === C ? { ...E, leaving: !0 } : E);
        return g.current = T, T;
      }), window.setTimeout(() => m(C), ui));
    },
    [m]
  ), w = F(
    (C) => {
      if (C.durationMs <= 0) return;
      const f = {
        remaining: C.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      b.current.set(C.id, f), d.current || h(C.id);
    },
    [h]
  ), i = F(
    (C) => {
      const f = g.current.find((T) => T.id === C.id), M = {
        id: C.id ?? ++D.current,
        title: C.title,
        description: C.description,
        severity: C.severity ?? "info",
        durationMs: C.durationMs ?? n,
        action: C.action,
        cancel: C.cancel,
        dismissible: C.dismissible ?? !0,
        closeOnClick: C.closeOnClick ?? !1,
        showProgress: C.showProgress ?? !1,
        position: C.position ?? r,
        onDismiss: C.onDismiss,
        onAutoClose: C.onAutoClose
      };
      _((T) => {
        const E = f ? T.map((A) => A.id === M.id ? { ...M, leaving: !1 } : A) : [...T, M];
        return g.current = E, E;
      }), f && S(M.id), w(M);
    },
    [n, r, w, S]
  ), v = ve(() => ({ toast: i }), [i]), O = ve(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((C) => C.position)])),
    [r, l]
  ), I = o ? p : void 0, j = o ? $ : void 0;
  return /* @__PURE__ */ k(Lr.Provider, { value: v, children: [
    e,
    O.map((C) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          mt.viewport,
          mt[_i[C]],
          s
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: j,
        children: l.filter((f) => f.position === C).map((f) => /* @__PURE__ */ k(
          "div",
          {
            role: f.severity === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": f.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[f.severity],
              f.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: f.closeOnClick ? () => y(f.id) : void 0,
            children: [
              /* @__PURE__ */ k("div", { className: mt.content, children: [
                /* @__PURE__ */ t("div", { className: mt.title, children: f.title }),
                f.description && /* @__PURE__ */ t("div", { className: mt.description, children: f.description }),
                (f.action || f.cancel) && /* @__PURE__ */ k("div", { className: mt.actions, children: [
                  f.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        f.action?.onClick?.(), y(f.id);
                      },
                      children: f.action.label
                    }
                  ),
                  f.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        f.cancel?.onClick?.(), y(f.id);
                      },
                      children: f.cancel.label
                    }
                  )
                ] })
              ] }),
              f.dismissible && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => y(f.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ t(ze, { name: "close", size: "sm" })
                }
              ),
              f.showProgress && f.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${f.durationMs}ms` }
                }
              )
            ]
          },
          f.id
        ))
      },
      C
    ))
  ] });
}
const fi = "_alert_16x95_1", pi = "_xs_16x95_22", hi = "_sm_16x95_32", mi = "_lg_16x95_42", gi = "_xl_16x95_52", yi = "_primary_16x95_63", bi = "_secondary_16x95_68", xi = "_light_16x95_73", vi = "_base_16x95_78", ki = "_dark_16x95_83", wi = "_info_16x95_88", $i = "_success_16x95_93", Ni = "_warning_16x95_98", Si = "_danger_16x95_103", Di = "_flat_16x95_110", zi = "_outlined_16x95_117", Ci = "_filled_16x95_125", Mi = "_text_16x95_132", Oi = "_icon_16x95_175", ji = "_content_16x95_181", Ii = "_title_16x95_186", Ei = "_body_16x95_192", Ti = "_dismiss_16x95_198", zt = {
  alert: fi,
  xs: pi,
  sm: hi,
  lg: mi,
  xl: gi,
  primary: yi,
  secondary: bi,
  light: xi,
  base: vi,
  dark: ki,
  info: wi,
  success: $i,
  warning: Ni,
  danger: Si,
  flat: Di,
  outlined: zi,
  filled: Ci,
  text: Mi,
  icon: Oi,
  content: ji,
  title: Ii,
  body: Ei,
  dismiss: Ti,
  "shade-lighter": "_shade-lighter_16x95_234",
  "shade-light": "_shade-light_16x95_234",
  "shade-dark": "_shade-dark_16x95_240",
  "shade-darker": "_shade-darker_16x95_243"
}, Ai = {
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
function K0({
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
  showIcon: _ = !0,
  children: a,
  dismissible: c = !0,
  onDismiss: g,
  visible: b,
  onVisibleChange: d,
  className: D,
  ...x
}) {
  const [z, S] = Y(!1);
  if (b === !1 || z)
    return null;
  const m = () => {
    b === void 0 && S(!0), g?.(), d?.(!1);
  }, u = e, h = rr(n, "filled"), p = r && r !== "default" ? `shade-${r}` : null, $ = l ?? (_ ? /* @__PURE__ */ t(ze, { name: Ai[e] }) : null);
  return /* @__PURE__ */ k(
    "div",
    {
      role: "alert",
      ...x,
      className: [zt.alert, zt[u], zt[h], p ? zt[p] : null, zt[o], D].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ t("span", { className: zt.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ k("div", { className: zt.content, children: [
          s && /* @__PURE__ */ t("div", { className: zt.title, children: s }),
          a && /* @__PURE__ */ t("div", { className: zt.body, children: a })
        ] }),
        c && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: zt.dismiss,
            onClick: m,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ t(ze, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Li = "_skeleton_lvzyc_1", Bi = "_text_lvzyc_35", Pi = "_circle_lvzyc_40", Ri = "_rect_lvzyc_44", _r = {
  skeleton: Li,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_lvzyc_1",
  text: Bi,
  circle: Pi,
  rect: Ri
};
function H0({
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
const qi = "_row_plfwb_1", Fi = "_gapXs_plfwb_7", Ki = "_gapSm_plfwb_11", Hi = "_gapMd_plfwb_15", Wi = "_gapLg_plfwb_19", Vi = "_gapXl_plfwb_23", Ui = "_start_plfwb_27", Xi = "_center_plfwb_31", Gi = "_end_plfwb_35", Yi = "_stretch_plfwb_39", Zi = "_baseline_plfwb_43", Ji = "_noWrap_plfwb_99", Qi = "_wrapReverse_plfwb_103", ec = "_gapRowXs_plfwb_107", tc = "_gapRowSm_plfwb_111", nc = "_gapRowMd_plfwb_115", rc = "_gapRowLg_plfwb_119", oc = "_gapRowXl_plfwb_123", Jt = {
  row: qi,
  gapXs: Fi,
  gapSm: Ki,
  gapMd: Hi,
  gapLg: Wi,
  gapXl: Vi,
  start: Ui,
  center: Xi,
  end: Gi,
  stretch: Yi,
  baseline: Zi,
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
  noWrap: Ji,
  wrapReverse: Qi,
  gapRowXs: ec,
  gapRowSm: tc,
  gapRowMd: nc,
  gapRowLg: rc,
  gapRowXl: oc
}, sc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, ac = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function lc(e) {
  return typeof e != "string" ? null : sc[e] ?? null;
}
function ic(e) {
  return typeof e != "string" ? null : ac[e] ?? null;
}
function fr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function W0({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: o = "start",
  wrap: s = !0,
  className: l,
  style: _,
  ...a
}) {
  const c = lc(e), g = ic(n), b = {
    ...e != null && !c ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !g ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ..._
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
        g ? Jt[g] : null,
        l
      ].filter(Boolean).join(" "),
      style: b,
      ...a
    }
  );
}
const cc = "_column_2ch3a_1", dc = "_Size1_2ch3a_6", uc = "_Size2_2ch3a_7", _c = "_Size3_2ch3a_8", fc = "_Size4_2ch3a_9", pc = "_Size5_2ch3a_10", hc = "_Size6_2ch3a_11", mc = "_Size7_2ch3a_12", gc = "_Size8_2ch3a_13", yc = "_Size9_2ch3a_14", bc = "_Size10_2ch3a_15", xc = "_Size11_2ch3a_16", vc = "_Size12_2ch3a_17", kc = "_Offset1_2ch3a_18", wc = "_Offset2_2ch3a_19", $c = "_Offset3_2ch3a_20", Nc = "_Offset4_2ch3a_21", Sc = "_Offset5_2ch3a_22", Dc = "_Offset6_2ch3a_23", zc = "_Offset7_2ch3a_24", Cc = "_Offset8_2ch3a_25", Mc = "_Offset9_2ch3a_26", Oc = "_Offset10_2ch3a_27", jc = "_Offset11_2ch3a_28", Ic = "_smSize1_2ch3a_31", Ec = "_smSize2_2ch3a_32", Tc = "_smSize3_2ch3a_33", Ac = "_smSize4_2ch3a_34", Lc = "_smSize5_2ch3a_35", Bc = "_smSize6_2ch3a_36", Pc = "_smSize7_2ch3a_37", Rc = "_smSize8_2ch3a_38", qc = "_smSize9_2ch3a_39", Fc = "_smSize10_2ch3a_40", Kc = "_smSize11_2ch3a_41", Hc = "_smSize12_2ch3a_42", Wc = "_smOffset1_2ch3a_43", Vc = "_smOffset2_2ch3a_44", Uc = "_smOffset3_2ch3a_45", Xc = "_smOffset4_2ch3a_46", Gc = "_smOffset5_2ch3a_47", Yc = "_smOffset6_2ch3a_48", Zc = "_smOffset7_2ch3a_49", Jc = "_smOffset8_2ch3a_50", Qc = "_smOffset9_2ch3a_51", ed = "_smOffset10_2ch3a_52", td = "_smOffset11_2ch3a_53", nd = "_mdSize1_2ch3a_57", rd = "_mdSize2_2ch3a_58", od = "_mdSize3_2ch3a_59", sd = "_mdSize4_2ch3a_60", ad = "_mdSize5_2ch3a_61", ld = "_mdSize6_2ch3a_62", id = "_mdSize7_2ch3a_63", cd = "_mdSize8_2ch3a_64", dd = "_mdSize9_2ch3a_65", ud = "_mdSize10_2ch3a_66", _d = "_mdSize11_2ch3a_67", fd = "_mdSize12_2ch3a_68", pd = "_mdOffset1_2ch3a_69", hd = "_mdOffset2_2ch3a_70", md = "_mdOffset3_2ch3a_71", gd = "_mdOffset4_2ch3a_72", yd = "_mdOffset5_2ch3a_73", bd = "_mdOffset6_2ch3a_74", xd = "_mdOffset7_2ch3a_75", vd = "_mdOffset8_2ch3a_76", kd = "_mdOffset9_2ch3a_77", wd = "_mdOffset10_2ch3a_78", $d = "_mdOffset11_2ch3a_79", Nd = "_lgSize1_2ch3a_83", Sd = "_lgSize2_2ch3a_84", Dd = "_lgSize3_2ch3a_85", zd = "_lgSize4_2ch3a_86", Cd = "_lgSize5_2ch3a_87", Md = "_lgSize6_2ch3a_88", Od = "_lgSize7_2ch3a_89", jd = "_lgSize8_2ch3a_90", Id = "_lgSize9_2ch3a_91", Ed = "_lgSize10_2ch3a_92", Td = "_lgSize11_2ch3a_93", Ad = "_lgSize12_2ch3a_94", Ld = "_lgOffset1_2ch3a_95", Bd = "_lgOffset2_2ch3a_96", Pd = "_lgOffset3_2ch3a_97", Rd = "_lgOffset4_2ch3a_98", qd = "_lgOffset5_2ch3a_99", Fd = "_lgOffset6_2ch3a_100", Kd = "_lgOffset7_2ch3a_101", Hd = "_lgOffset8_2ch3a_102", Wd = "_lgOffset9_2ch3a_103", Vd = "_lgOffset10_2ch3a_104", Ud = "_lgOffset11_2ch3a_105", Xd = "_xlSize1_2ch3a_109", Gd = "_xlSize2_2ch3a_110", Yd = "_xlSize3_2ch3a_111", Zd = "_xlSize4_2ch3a_112", Jd = "_xlSize5_2ch3a_113", Qd = "_xlSize6_2ch3a_114", eu = "_xlSize7_2ch3a_115", tu = "_xlSize8_2ch3a_116", nu = "_xlSize9_2ch3a_117", ru = "_xlSize10_2ch3a_118", ou = "_xlSize11_2ch3a_119", su = "_xlSize12_2ch3a_120", au = "_xlOffset1_2ch3a_121", lu = "_xlOffset2_2ch3a_122", iu = "_xlOffset3_2ch3a_123", cu = "_xlOffset4_2ch3a_124", du = "_xlOffset5_2ch3a_125", uu = "_xlOffset6_2ch3a_126", _u = "_xlOffset7_2ch3a_127", fu = "_xlOffset8_2ch3a_128", pu = "_xlOffset9_2ch3a_129", hu = "_xlOffset10_2ch3a_130", mu = "_xlOffset11_2ch3a_131", gu = "_xxlSize1_2ch3a_136", yu = "_xxlSize2_2ch3a_137", bu = "_xxlSize3_2ch3a_138", xu = "_xxlSize4_2ch3a_139", vu = "_xxlSize5_2ch3a_140", ku = "_xxlSize6_2ch3a_141", wu = "_xxlSize7_2ch3a_142", $u = "_xxlSize8_2ch3a_143", Nu = "_xxlSize9_2ch3a_144", Su = "_xxlSize10_2ch3a_145", Du = "_xxlSize11_2ch3a_146", zu = "_xxlSize12_2ch3a_147", Cu = "_xxlOffset1_2ch3a_148", Mu = "_xxlOffset2_2ch3a_149", Ou = "_xxlOffset3_2ch3a_150", ju = "_xxlOffset4_2ch3a_151", Iu = "_xxlOffset5_2ch3a_152", Eu = "_xxlOffset6_2ch3a_153", Tu = "_xxlOffset7_2ch3a_154", Au = "_xxlOffset8_2ch3a_155", Lu = "_xxlOffset9_2ch3a_156", Bu = "_xxlOffset10_2ch3a_157", Pu = "_xxlOffset11_2ch3a_158", Ru = "_xxlOrderFirst_2ch3a_159", qu = "_xxlOrderLast_2ch3a_160", Fu = "_orderFirst_2ch3a_163", Ku = "_orderLast_2ch3a_164", Hu = "_smOrderFirst_2ch3a_167", Wu = "_smOrderLast_2ch3a_168", Vu = "_mdOrderFirst_2ch3a_172", Uu = "_mdOrderLast_2ch3a_173", Xu = "_lgOrderFirst_2ch3a_177", Gu = "_lgOrderLast_2ch3a_178", Yu = "_xlOrderFirst_2ch3a_182", Zu = "_xlOrderLast_2ch3a_183", mn = {
  column: cc,
  Size1: dc,
  Size2: uc,
  Size3: _c,
  Size4: fc,
  Size5: pc,
  Size6: hc,
  Size7: mc,
  Size8: gc,
  Size9: yc,
  Size10: bc,
  Size11: xc,
  Size12: vc,
  Offset1: kc,
  Offset2: wc,
  Offset3: $c,
  Offset4: Nc,
  Offset5: Sc,
  Offset6: Dc,
  Offset7: zc,
  Offset8: Cc,
  Offset9: Mc,
  Offset10: Oc,
  Offset11: jc,
  smSize1: Ic,
  smSize2: Ec,
  smSize3: Tc,
  smSize4: Ac,
  smSize5: Lc,
  smSize6: Bc,
  smSize7: Pc,
  smSize8: Rc,
  smSize9: qc,
  smSize10: Fc,
  smSize11: Kc,
  smSize12: Hc,
  smOffset1: Wc,
  smOffset2: Vc,
  smOffset3: Uc,
  smOffset4: Xc,
  smOffset5: Gc,
  smOffset6: Yc,
  smOffset7: Zc,
  smOffset8: Jc,
  smOffset9: Qc,
  smOffset10: ed,
  smOffset11: td,
  mdSize1: nd,
  mdSize2: rd,
  mdSize3: od,
  mdSize4: sd,
  mdSize5: ad,
  mdSize6: ld,
  mdSize7: id,
  mdSize8: cd,
  mdSize9: dd,
  mdSize10: ud,
  mdSize11: _d,
  mdSize12: fd,
  mdOffset1: pd,
  mdOffset2: hd,
  mdOffset3: md,
  mdOffset4: gd,
  mdOffset5: yd,
  mdOffset6: bd,
  mdOffset7: xd,
  mdOffset8: vd,
  mdOffset9: kd,
  mdOffset10: wd,
  mdOffset11: $d,
  lgSize1: Nd,
  lgSize2: Sd,
  lgSize3: Dd,
  lgSize4: zd,
  lgSize5: Cd,
  lgSize6: Md,
  lgSize7: Od,
  lgSize8: jd,
  lgSize9: Id,
  lgSize10: Ed,
  lgSize11: Td,
  lgSize12: Ad,
  lgOffset1: Ld,
  lgOffset2: Bd,
  lgOffset3: Pd,
  lgOffset4: Rd,
  lgOffset5: qd,
  lgOffset6: Fd,
  lgOffset7: Kd,
  lgOffset8: Hd,
  lgOffset9: Wd,
  lgOffset10: Vd,
  lgOffset11: Ud,
  xlSize1: Xd,
  xlSize2: Gd,
  xlSize3: Yd,
  xlSize4: Zd,
  xlSize5: Jd,
  xlSize6: Qd,
  xlSize7: eu,
  xlSize8: tu,
  xlSize9: nu,
  xlSize10: ru,
  xlSize11: ou,
  xlSize12: su,
  xlOffset1: au,
  xlOffset2: lu,
  xlOffset3: iu,
  xlOffset4: cu,
  xlOffset5: du,
  xlOffset6: uu,
  xlOffset7: _u,
  xlOffset8: fu,
  xlOffset9: pu,
  xlOffset10: hu,
  xlOffset11: mu,
  xxlSize1: gu,
  xxlSize2: yu,
  xxlSize3: bu,
  xxlSize4: xu,
  xxlSize5: vu,
  xxlSize6: ku,
  xxlSize7: wu,
  xxlSize8: $u,
  xxlSize9: Nu,
  xxlSize10: Su,
  xxlSize11: Du,
  xxlSize12: zu,
  xxlOffset1: Cu,
  xxlOffset2: Mu,
  xxlOffset3: Ou,
  xxlOffset4: ju,
  xxlOffset5: Iu,
  xxlOffset6: Eu,
  xxlOffset7: Tu,
  xxlOffset8: Au,
  xxlOffset9: Lu,
  xxlOffset10: Bu,
  xxlOffset11: Pu,
  xxlOrderFirst: Ru,
  xxlOrderLast: qu,
  orderFirst: Fu,
  orderLast: Ku,
  smOrderFirst: Hu,
  smOrderLast: Wu,
  mdOrderFirst: Vu,
  mdOrderLast: Uu,
  lgOrderFirst: Xu,
  lgOrderLast: Gu,
  xlOrderFirst: Yu,
  xlOrderLast: Zu
}, Ju = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], Qu = {
  first: "orderFirst",
  last: "orderLast"
};
function e_(e) {
  return typeof e == "number" ? { order: e } : {};
}
function V0({ className: e, style: n, ...r }) {
  const o = [mn.column], s = { ...n };
  for (const [v, O, I, j] of Ju) {
    const C = r[O], f = r[I], M = r[j];
    if (C != null && o.push(mn[`${v}Size${C}`]), f != null && f > 0 && o.push(mn[`${v}Offset${f}`]), M === "first" || M === "last") {
      const T = `${v}${Qu[M]}`;
      mn[T] && o.push(mn[T]);
    } else M != null && Object.assign(s, e_(M));
  }
  const {
    size: l,
    offset: _,
    sizeSm: a,
    offsetSm: c,
    sizeMd: g,
    offsetMd: b,
    sizeLg: d,
    offsetLg: D,
    sizeXl: x,
    offsetXl: z,
    sizeXxl: S,
    offsetXxl: m,
    order: u,
    orderSm: h,
    orderMd: p,
    orderLg: $,
    orderXl: y,
    orderXxl: w,
    ...i
  } = r;
  return /* @__PURE__ */ t("div", { className: [...o, e].filter(Boolean).join(" "), style: s, ...i });
}
const t_ = "_stack_1yc1g_1", n_ = "_gapXs_1yc1g_29", r_ = "_gapSm_1yc1g_33", o_ = "_gapMd_1yc1g_37", s_ = "_gapLg_1yc1g_41", a_ = "_gapXl_1yc1g_45", Qt = {
  stack: t_,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: n_,
  gapSm: r_,
  gapMd: o_,
  gapLg: s_,
  gapXl: a_,
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
}, l_ = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function i_(e) {
  return typeof e != "string" ? null : l_[e] ?? null;
}
function pr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function U0({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: s,
  justify: l,
  className: _,
  style: a,
  ...c
}) {
  const g = i_(o), b = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", d = {
    ...o != null && !g ? { gap: typeof o == "number" ? `${o}px` : o } : {},
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
        g ? Qt[g] : null,
        _
      ].filter(Boolean).join(" "),
      style: d,
      ...c
    }
  );
}
const c_ = "_layout_1pcye_1", d_ = "_row_1pcye_7", hr = {
  layout: c_,
  row: d_
}, u_ = "_footer_jia9j_1", __ = {
  footer: u_
};
function f_({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [__.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const p_ = "_header_1n6yq_1", h_ = {
  header: p_
};
function m_({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [h_.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const g_ = "_sidebar_1i0sn_1", y_ = "_left_1i0sn_9", b_ = "_right_1i0sn_13", x_ = "_collapsed_1i0sn_17", v_ = "_responsive_1i0sn_25", k_ = "_overlay_1i0sn_33", w_ = "_mask_1i0sn_53", Vt = {
  sidebar: g_,
  left: y_,
  right: b_,
  collapsed: x_,
  responsive: v_,
  overlay: k_,
  mask: w_
};
function $_({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: o = !1,
  onClose: s,
  className: l,
  children: _,
  ...a
}) {
  return $e(() => {
    if (!o || !n || s == null) return;
    const c = (g) => {
      g.key === "Escape" && s();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [o, n, s]), /* @__PURE__ */ k(Oe, { children: [
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
        children: _
      }
    )
  ] });
}
function X0({ className: e, children: n, ...r }) {
  const o = [], s = [], l = [], _ = [], a = [];
  return Kr.forEach(n, (c) => {
    if (!zn(c)) {
      l.push(c);
      return;
    }
    c.type === m_ ? o.push(c) : c.type === f_ ? s.push(c) : c.type === $_ ? (c.props.position === "right" ? a : _).push(c) : l.push(c);
  }), /* @__PURE__ */ k("div", { className: [hr.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ k("div", { className: hr.row, children: [
      _,
      l,
      a
    ] }),
    s
  ] });
}
const N_ = "_body_10zdy_1", S_ = {
  body: N_
};
function G0({ as: e = "main", className: n, children: r, ...o }) {
  return /* @__PURE__ */ t(e, { className: [S_.body, n].filter(Boolean).join(" "), ...o, children: r });
}
const D_ = "_track_hx8uy_1", z_ = "_bar_hx8uy_31", C_ = "_primary_hx8uy_39", M_ = "_success_hx8uy_43", O_ = "_warning_hx8uy_47", j_ = "_danger_hx8uy_51", I_ = "_indeterminate_hx8uy_71", E_ = "_circular_hx8uy_85", T_ = "_fill_hx8uy_125", gt = {
  track: D_,
  "linear-xs": "_linear-xs_hx8uy_11",
  "linear-sm": "_linear-sm_hx8uy_15",
  "linear-md": "_linear-md_hx8uy_19",
  "linear-lg": "_linear-lg_hx8uy_23",
  "linear-xl": "_linear-xl_hx8uy_27",
  bar: z_,
  primary: C_,
  success: M_,
  warning: O_,
  danger: j_,
  "shade-lighter": "_shade-lighter_hx8uy_55",
  "shade-light": "_shade-light_hx8uy_55",
  "shade-dark": "_shade-dark_hx8uy_63",
  "shade-darker": "_shade-darker_hx8uy_67",
  indeterminate: I_,
  "se-progress-slide": "_se-progress-slide_hx8uy_1",
  circular: E_,
  "circular-xs": "_circular-xs_hx8uy_91",
  "circular-sm": "_circular-sm_hx8uy_96",
  "circular-md": "_circular-md_hx8uy_101",
  "circular-lg": "_circular-lg_hx8uy_106",
  "circular-xl": "_circular-xl_hx8uy_111",
  fill: T_,
  "se-progress-spin": "_se-progress-spin_hx8uy_1"
};
function Y0({
  value: e = 0,
  max: n = 100,
  severity: r = "primary",
  shade: o,
  indeterminate: s = !1,
  variant: l = "linear",
  size: _ = "md",
  className: a,
  ...c
}) {
  const g = n > 0 ? Math.min(n, Math.max(0, e)) : 0, b = n > 0 ? g / n * 100 : 0;
  if (l === "circular") {
    const D = typeof _ == "string", x = 2, z = 10.5, S = 2 * Math.PI * z, m = S * (s ? 0.75 : 1), u = s ? 0 : S * (1 - b / 100);
    return /* @__PURE__ */ k(
      "svg",
      {
        width: D ? void 0 : _,
        height: D ? void 0 : _,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(g),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        ...c,
        className: [
          gt.circular,
          gt[r],
          o && o !== "default" ? gt[`shade-${o}`] : null,
          D ? gt[`circular-${_}`] : null,
          s ? gt.indeterminate : null,
          a
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: gt.track, cx: 12, cy: 12, r: z, strokeWidth: x }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: gt.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: x,
              strokeDasharray: `${m} ${S}`,
              strokeDashoffset: u
            }
          )
        ]
      }
    );
  }
  const d = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(g),
      "aria-valuemin": 0,
      "aria-valuemax": n,
      className: [
        gt.track,
        gt[r],
        d ? gt[d] : null,
        typeof _ == "string" ? gt[`linear-${_}`] : null,
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
function Z0(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function A_(e) {
  const [n, r] = Y(!1);
  return $e(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    r(o.matches);
    const s = (l) => r(l.matches);
    return o.addEventListener("change", s), () => o.removeEventListener("change", s);
  }, [e]), n;
}
const L_ = "_wrapper_fv8kg_1", B_ = {
  wrapper: L_
}, Br = "dx-theme";
function P_(e) {
  const n = e === void 0 ? Br : e;
  if (n === null || typeof localStorage > "u") return;
  const r = localStorage.getItem(n);
  return r === "light" || r === "dark" || r === "system" ? r : void 0;
}
function J0({
  value: e,
  defaultValue: n,
  defaultTheme: r,
  storageKey: o,
  onChange: s,
  label: l = "Dark mode",
  className: _
}) {
  const a = A_("(prefers-color-scheme: dark)"), [c, g] = Y(void 0), b = e ?? c ?? P_(o) ?? n ?? r ?? "system", d = b === "system" ? a ? "dark" : "light" : b;
  $e(() => {
    if (b === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = b;
  }, [b]);
  const D = (x) => {
    const z = x.target.checked ? "dark" : "light";
    e === void 0 && g(z);
    const S = o === void 0 ? Br : o;
    S !== null && typeof localStorage < "u" && localStorage.setItem(S, z), s?.(z);
  };
  return /* @__PURE__ */ k("label", { className: [B_.wrapper, _].filter(Boolean).join(" "), children: [
    l,
    /* @__PURE__ */ t(Cl, { checked: d === "dark", onChange: D })
  ] });
}
const R_ = "_avatar_1ow1c_1", q_ = "_xs_1ow1c_12", F_ = "_sm_1ow1c_18", K_ = "_md_1ow1c_24", H_ = "_lg_1ow1c_30", W_ = "_xl_1ow1c_36", V_ = "_initials_1ow1c_42", U_ = "_image_1ow1c_57", X_ = "_status_1ow1c_64", G_ = "_online_1ow1c_84", Y_ = "_offline_1ow1c_88", Z_ = "_away_1ow1c_92", en = {
  avatar: R_,
  xs: q_,
  sm: F_,
  md: K_,
  lg: H_,
  xl: W_,
  initials: V_,
  image: U_,
  status: X_,
  online: G_,
  offline: Y_,
  away: Z_
}, qn = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function J_(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function Q_(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return qn[n % qn.length] ?? qn[0];
}
function Q0({
  name: e,
  src: n,
  alt: r,
  size: o = "md",
  status: s,
  className: l
}) {
  const _ = ve(() => e ? J_(e) : "?", [e]), a = ve(() => e ? Q_(e) : qn[0], [e]), c = n != null && r === "", g = r ?? e ?? "avatar", b = s ? `${g}, ${s}` : g, d = n ? /* @__PURE__ */ t(
    "img",
    {
      className: en.image,
      src: n,
      alt: c ? "" : s ? b : g
    }
  ) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: en.initials, style: { background: a }, children: _ });
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
        d,
        s && /* @__PURE__ */ t("span", { className: en.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ef = "_root_13xku_1", tf = "_left_13xku_6", nf = "_right_13xku_7", rf = "_panel_13xku_12", of = "_bottom_13xku_20", sf = "_tabList_13xku_24", af = "_underline_13xku_53", lf = "_pills_13xku_72", cf = "_tab_13xku_24", df = "_active_13xku_113", uf = "_disabled_13xku_139", Et = {
  root: ef,
  left: tf,
  right: nf,
  panel: rf,
  bottom: of,
  tabList: sf,
  underline: af,
  pills: lf,
  tab: cf,
  active: df,
  disabled: uf
};
function eb({
  items: e,
  value: n,
  defaultValue: r,
  onChange: o,
  variant: s = "underline",
  position: l = "top",
  className: _
}) {
  const a = Ue(), c = le(null), [g, b] = Y(r ?? e[0]?.key ?? ""), d = n ?? g, D = l === "left" || l === "right", x = (m) => {
    b(m), o?.(m);
  }, z = (m) => {
    const u = e.filter(($) => !$.disabled), h = u.findIndex(($) => $.key === d);
    let p = -1;
    m.key === "ArrowRight" || D && m.key === "ArrowDown" ? p = (h + 1) % u.length : m.key === "ArrowLeft" || D && m.key === "ArrowUp" ? p = (h - 1 + u.length) % u.length : m.key === "Home" ? p = 0 : m.key === "End" && (p = u.length - 1), p >= 0 && (m.preventDefault(), c.current?.querySelector(
      `[data-tab-key="${CSS.escape(u[p]?.key ?? "")}"]`
    )?.focus(), x(u[p]?.key ?? ""));
  }, S = e.find((m) => m.key === d);
  return /* @__PURE__ */ k("div", { className: [Et.root, Et[l], _].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: c,
        role: "tablist",
        className: [Et.tabList, Et[s], Et[l]].filter(Boolean).join(" "),
        onKeyDown: z,
        children: e.map((m) => {
          const u = m.key === d;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${m.key}`,
              "data-tab-key": m.key,
              "aria-selected": u,
              "aria-controls": `${a}-panel-${m.key}`,
              tabIndex: u ? 0 : -1,
              disabled: m.disabled,
              className: [
                Et.tab,
                u ? Et.active : null,
                m.disabled ? Et.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => x(m.key),
              children: m.label
            },
            m.key
          );
        })
      }
    ),
    S && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${S.key}`,
        "aria-labelledby": `${a}-tab-${S.key}`,
        className: Et.panel,
        children: S.content
      }
    )
  ] });
}
const _f = "_root_11jj0_1", ff = "_item_11jj0_9", pf = "_heading_11jj0_13", hf = "_trigger_11jj0_17", mf = "_disabled_11jj0_34", gf = "_title_11jj0_48", yf = "_chevron_11jj0_52", bf = "_open_11jj0_59", xf = "_content_11jj0_63", Tt = {
  root: _f,
  item: ff,
  heading: pf,
  trigger: hf,
  disabled: mf,
  title: gf,
  chevron: yf,
  open: bf,
  content: xf
};
function tb({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: o,
  onChange: s,
  className: l
}) {
  const _ = Ue(), [a, c] = Y(o ?? []), g = r ?? a, b = (d) => {
    const D = g.includes(d) ? g.filter((x) => x !== d) : n ? [...g, d] : [d];
    c(D), s?.(D);
  };
  return /* @__PURE__ */ t("div", { className: [Tt.root, l].filter(Boolean).join(" "), children: e.map((d) => {
    const D = g.includes(d.key), x = `${_}-panel-${d.key}`, z = `${_}-trigger-${d.key}`;
    return /* @__PURE__ */ k("div", { className: Tt.item, children: [
      /* @__PURE__ */ t("h3", { className: Tt.heading, children: /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          id: z,
          "aria-expanded": D,
          "aria-controls": x,
          disabled: d.disabled,
          className: [
            Tt.trigger,
            d.disabled ? Tt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => b(d.key),
          children: [
            /* @__PURE__ */ t("span", { className: Tt.title, children: d.title }),
            /* @__PURE__ */ t("span", { className: [Tt.chevron, D ? Tt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 12 }) })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": z,
          hidden: !D,
          className: Tt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const vf = "_textarea_1hnju_1", kf = "_invalid_1hnju_25", wf = "_xs_1hnju_31", $f = "_sm_1hnju_36", Nf = "_md_1hnju_41", Sf = "_lg_1hnju_46", Df = "_xl_1hnju_51", En = {
  textarea: vf,
  invalid: kf,
  xs: wf,
  sm: $f,
  md: Nf,
  lg: Sf,
  xl: Df,
  "resize-none": "_resize-none_1hnju_56",
  "resize-vertical": "_resize-vertical_1hnju_60",
  "resize-horizontal": "_resize-horizontal_1hnju_64",
  "resize-both": "_resize-both_1hnju_68"
}, nb = He(function({ size: n = "md", resize: r = "none", invalid: o = !1, className: s, ...l }, _) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: _,
      className: [
        En.textarea,
        En[n],
        En[`resize-${r}`],
        o ? En.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": o || void 0,
      ...l
    }
  );
}), zf = "_typography_1p5im_1", Cf = "_h1_1p5im_36", Mf = "_h2_1p5im_42", Of = "_h3_1p5im_48", jf = "_h4_1p5im_54", If = "_h5_1p5im_60", Ef = "_h6_1p5im_66", Tf = "_caption_1p5im_94", Af = "_overline_1p5im_100", Vn = {
  typography: zf,
  "display-1": "_display-1_1p5im_5",
  "display-2": "_display-2_1p5im_10",
  "display-3": "_display-3_1p5im_15",
  "display-4": "_display-4_1p5im_20",
  "display-5": "_display-5_1p5im_25",
  "display-6": "_display-6_1p5im_30",
  h1: Cf,
  h2: Mf,
  h3: Of,
  h4: jf,
  h5: If,
  h6: Ef,
  "subtitle-1": "_subtitle-1_1p5im_72",
  "subtitle-2": "_subtitle-2_1p5im_78",
  "body-1": "_body-1_1p5im_84",
  "body-2": "_body-2_1p5im_89",
  caption: Tf,
  overline: Af,
  "align-left": "_align-left_1p5im_109",
  "align-center": "_align-center_1p5im_113",
  "align-right": "_align-right_1p5im_117",
  "align-justify": "_align-justify_1p5im_121"
}, Lf = {
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
}, rb = He(function({ variant: n = "body-1", as: r, align: o, className: s, children: l, ..._ }, a) {
  const c = r ?? Lf[n];
  return /* @__PURE__ */ t(
    c,
    {
      ref: a,
      className: [Vn.typography, Vn[n], o ? Vn[`align-${o}`] : null, s].filter(Boolean).join(" "),
      ..._,
      children: l
    }
  );
}), Bf = "_root_1l16s_1", Pf = "_trigger_1l16s_9", Rf = "_invalid_1l16s_40", qf = "_placeholder_1l16s_46", Ff = "_label_1l16s_53", Kf = "_chevron_1l16s_59", Hf = "_chevronOpen_1l16s_69", Wf = "_menu_1l16s_73", Vf = "_option_1l16s_88", Uf = "_disabled_1l16s_99", Xf = "_active_1l16s_103", Gf = "_selected_1l16s_104", Yf = "_header_1l16s_114", Zf = "_xs_1l16s_121", Jf = "_sm_1l16s_127", Qf = "_md_1l16s_133", ep = "_lg_1l16s_139", tp = "_xl_1l16s_145", at = {
  root: Bf,
  trigger: Pf,
  invalid: Rf,
  placeholder: qf,
  label: Ff,
  chevron: Kf,
  chevronOpen: Hf,
  menu: Wf,
  option: Vf,
  disabled: Uf,
  active: Xf,
  selected: Gf,
  header: Yf,
  xs: Zf,
  sm: Jf,
  md: Qf,
  lg: ep,
  xl: tp
}, np = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function ob({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  placeholder: s = "Select…",
  size: l = "md",
  invalid: _ = !1,
  disabled: a = !1,
  className: c,
  ...g
}) {
  const b = Ue(), d = `${b}-listbox`, D = le(null), x = le(null), [z, S] = Y(r), [m, u] = Y(!1), h = n ?? z, p = e.map((f, M) => f.label === "" || f.disabled ? -1 : M).filter((f) => f >= 0), $ = e.findIndex((f) => f.value === h), [y, w] = Y(
    () => p.includes(0) ? 0 : p[0] ?? -1
  ), i = F(() => {
    if (a) return;
    const f = $ >= 0 && p.includes($) ? $ : p[0];
    w(f ?? -1), u(!0);
  }, [a, $, p]), v = F(() => {
    u(!1), x.current?.focus();
  }, []);
  $e(() => {
    if (!m) return;
    const f = (M) => {
      D.current && !D.current.contains(M.target) && u(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]);
  const O = (f) => {
    S(f), o?.(f), u(!1), x.current?.focus();
  }, I = (f) => {
    if (p.length === 0) return;
    const M = p.includes(y) ? p.indexOf(y) : 0, T = p[(M + f + p.length) % p.length];
    T != null && w(T);
  }, j = (f) => {
    if (!m) {
      f.key === "ArrowDown" && (f.preventDefault(), i());
      return;
    }
    switch (f.key) {
      case "ArrowDown":
        f.preventDefault(), I(1);
        break;
      case "ArrowUp":
        f.preventDefault(), I(-1);
        break;
      case "Home":
        f.preventDefault(), p[0] != null && w(p[0]);
        break;
      case "End":
        f.preventDefault(), p[p.length - 1] != null && w(p[p.length - 1]);
        break;
      case "Enter":
      case " ":
        f.preventDefault(), y >= 0 && e[y] && p.includes(y) && O(e[y]?.value ?? "");
        break;
      case "Escape":
        f.preventDefault(), v();
        break;
      case "Tab":
        u(!1);
        break;
    }
  }, C = e.find((f) => f.value === h);
  return /* @__PURE__ */ k("div", { ref: D, className: [at.root, c].filter(Boolean).join(" "), onKeyDown: j, children: [
    /* @__PURE__ */ k(
      "button",
      {
        ref: x,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": m,
        "aria-controls": d,
        "aria-invalid": _ || void 0,
        disabled: a,
        className: [
          at.trigger,
          at[l],
          m ? at.open : null,
          _ ? at.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => m ? u(!1) : i(),
        ...g,
        children: [
          /* @__PURE__ */ t("span", { className: C ? at.label : at.placeholder, children: C ? C.label : s }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [at.chevron, m ? at.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: np },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    m && /* @__PURE__ */ t(
      "div",
      {
        id: d,
        role: "listbox",
        "aria-activedescendant": y >= 0 ? `${b}-option-${y}` : void 0,
        className: at.menu,
        children: e.map(
          (f, M) => f.label === "" ? /* @__PURE__ */ t("div", { className: at.header, role: "presentation", children: f.value }, f.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${b}-option-${M}`,
              role: "option",
              "aria-selected": f.value === h,
              "aria-disabled": f.disabled || void 0,
              className: [
                at.option,
                M === y ? at.active : null,
                f.value === h ? at.selected : null,
                f.disabled ? at.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                f.disabled || O(f.value);
              },
              onMouseEnter: () => {
                !f.disabled && f.label !== "" && w(M);
              },
              children: f.label
            },
            f.value
          )
        )
      }
    )
  ] });
}
const rp = "_root_z9312_1", op = "_wrap_z9312_9", sp = "_input_z9312_26", ap = "_invalid_z9312_31", lp = "_clear_z9312_57", ip = "_menu_z9312_82", cp = "_option_z9312_97", dp = "_disabled_z9312_108", up = "_active_z9312_112", _p = "_empty_z9312_122", fp = "_xs_z9312_128", pp = "_sm_z9312_135", hp = "_md_z9312_142", mp = "_lg_z9312_149", gp = "_xl_z9312_156", St = {
  root: rp,
  wrap: op,
  input: sp,
  invalid: ap,
  clear: lp,
  menu: ip,
  option: cp,
  disabled: dp,
  active: up,
  empty: _p,
  xs: fp,
  sm: pp,
  md: hp,
  lg: mp,
  xl: gp
}, yp = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function sb({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: o,
  onSelect: s,
  placeholder: l = "",
  size: _ = "md",
  invalid: a = !1,
  disabled: c = !1,
  filter: g = yp,
  className: b,
  ...d
}) {
  const D = Ue(), x = `${D}-listbox`, z = le(null), S = le(null), [m, u] = Y(r), [h, p] = Y(!1), $ = n ?? m, y = ve(
    () => $.trim() === "" ? [...e] : e.filter((A) => g(A, $)),
    [e, $, g]
  ), w = y.map((A, X) => A.disabled ? -1 : X).filter((A) => A >= 0), [i, v] = Y(-1), O = (A) => {
    u(A), o?.(A);
  }, I = (A) => {
    O(A.label), s?.(A.value, A), p(!1);
  }, j = (A) => {
    if (w.length === 0) return;
    const X = w.includes(i) ? w.indexOf(i) : A === 1 ? -1 : 0, H = w[(X + A + w.length) % w.length];
    H != null && v(H);
  }, C = (A) => {
    c || (O(A.target.value), p(!0), v(-1));
  }, f = () => {
    c || $ !== "" && p(!0);
  }, M = (A) => {
    z.current && !z.current.contains(A.relatedTarget) && p(!1);
  }, T = (A) => {
    if (!c)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), h ? j(1) : (p(!0), v(w[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), h && j(-1);
          break;
        case "Enter":
          A.preventDefault(), h && i >= 0 && y[i] && I(y[i]);
          break;
        case "Escape":
          A.preventDefault(), p(!1);
          break;
        case "Tab":
          h && i >= 0 && y[i] && I(y[i]), p(!1);
          break;
      }
  }, E = () => {
    O(""), v(-1), p(!0), S.current?.focus();
  };
  return /* @__PURE__ */ k("div", { ref: z, className: [St.root, b].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k("div", { className: [St.wrap, St[_], a ? St.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: S,
          type: "text",
          role: "combobox",
          "aria-expanded": h,
          "aria-controls": x,
          "aria-autocomplete": "list",
          "aria-activedescendant": h && i >= 0 ? `${D}-option-${i}` : void 0,
          "aria-invalid": a || void 0,
          disabled: c,
          value: $,
          placeholder: l,
          className: St.input,
          onChange: C,
          onFocus: f,
          onBlur: M,
          onKeyDown: T,
          ...d
        }
      ),
      $ !== "" && !c && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: St.clear,
          "aria-label": "Clear",
          onClick: E,
          children: /* @__PURE__ */ t(ze, { name: "close", size: "sm" })
        }
      )
    ] }),
    h && /* @__PURE__ */ t("div", { id: x, role: "listbox", className: St.menu, children: y.length === 0 ? /* @__PURE__ */ t("div", { className: St.empty, children: "No matches" }) : y.map((A, X) => /* @__PURE__ */ t(
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
          A.disabled || v(X);
        },
        children: A.label
      },
      A.value
    )) })
  ] });
}
const bp = "_box_yzqzf_1", xp = "_option_yzqzf_12", vp = "_disabled_yzqzf_23", kp = "_selected_yzqzf_27", wp = "_active_yzqzf_33", gn = {
  box: bp,
  option: xp,
  disabled: vp,
  selected: kp,
  active: wp
};
function ab({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: o = !1,
  onChange: s,
  className: l,
  style: _,
  ...a
}) {
  const c = Ue(), [g, b] = Y(() => {
    const y = r;
    return y == null ? [] : Array.isArray(y) ? [...y] : [y];
  }), d = n == null ? g : Array.isArray(n) ? n : [n], D = e.findIndex((y) => !y.disabled), [x, z] = Y(() => D >= 0 ? D : 0), S = le(""), m = le(null), u = (y) => {
    b(y), s?.(o ? y : y[0] ?? "");
  }, h = e.map((y, w) => y.disabled ? -1 : w).filter((y) => y >= 0), p = (y) => {
    const w = e[y];
    if (!(!w || w.disabled))
      if (z(y), o) {
        const i = d.includes(w.value) ? d.filter((v) => v !== w.value) : [...d, w.value];
        u(i);
      } else
        u([w.value]);
  }, $ = (y) => {
    if (h.length === 0) return;
    const w = h.includes(x) ? x : h[0];
    let i = -1;
    if (y.key === "ArrowDown")
      i = h[(h.indexOf(w) + 1) % h.length];
    else if (y.key === "ArrowUp")
      i = h[(h.indexOf(w) - 1 + h.length) % h.length];
    else if (y.key === "Home")
      i = h[0];
    else if (y.key === "End")
      i = h[h.length - 1];
    else if (y.key === "Enter" || y.key === " ") {
      y.preventDefault(), p(w);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(y.key)) {
      y.preventDefault();
      const v = (S.current + y.key).toLowerCase();
      S.current = v, m.current && clearTimeout(m.current), m.current = setTimeout(() => {
        S.current = "";
      }, 500);
      const O = [...h, ...h], I = h.indexOf(w) + 1, j = O.slice(I).find(
        (C) => e[C]?.label.toLowerCase().startsWith(v)
      );
      j != null && z(j);
      return;
    }
    i >= 0 && (y.preventDefault(), z(i), o || u([e[i]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[x] ? `${c}-option-${x}` : void 0,
      style: _,
      className: [gn.box, l].filter(Boolean).join(" "),
      onKeyDown: $,
      ...a,
      children: e.map((y, w) => {
        const i = d.includes(y.value), v = w === x;
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
              v ? gn.active : null,
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
const $p = "_group_1lmpf_1", Np = "_legend_1lmpf_8", Sp = "_list_1lmpf_16", Dp = "_item_1lmpf_25", zp = "_disabled_1lmpf_32", Cp = "_label_1lmpf_37", Mp = "_checkbox_1lmpf_48", Ut = {
  group: $p,
  legend: Np,
  list: Sp,
  item: Dp,
  disabled: zp,
  label: Cp,
  checkbox: Mp
};
function lb({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: o,
  legend: s,
  name: l,
  className: _
}) {
  const [a, c] = Y(() => [...r]), g = n ?? a, b = (d, D) => {
    const x = D ? [...g, d] : g.filter((z) => z !== d);
    c(x), o?.(x);
  };
  return /* @__PURE__ */ k("fieldset", { className: [Ut.group, _].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Ut.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Ut.list, children: e.map((d) => {
      const D = g.includes(d.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Ut.item, d.disabled ? Ut.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ k("label", { className: Ut.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Ut.checkbox,
                name: l,
                value: d.value,
                checked: D,
                disabled: d.disabled,
                onChange: (x) => b(d.value, x.target.checked)
              }
            ),
            /* @__PURE__ */ t("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const Op = "_group_1fnri_1", jp = "_legend_1fnri_8", Ip = "_list_1fnri_16", Ep = "_item_1fnri_25", Tp = "_disabled_1fnri_32", Ap = "_label_1fnri_37", Lp = "_radio_1fnri_48", Xt = {
  group: Op,
  legend: jp,
  list: Ip,
  item: Ep,
  disabled: Tp,
  label: Ap,
  radio: Lp
};
function ib({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  legend: s,
  name: l,
  className: _
}) {
  const [a, c] = Y(r), g = n ?? a, b = (d) => {
    c(d), o?.(d);
  };
  return /* @__PURE__ */ k("fieldset", { className: [Xt.group, _].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Xt.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Xt.list, children: e.map((d) => {
      const D = d.value === g;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Xt.item, d.disabled ? Xt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ k("label", { className: Xt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Xt.radio,
                name: l,
                value: d.value,
                checked: D,
                disabled: d.disabled,
                onChange: (x) => b(x.target.value)
              }
            ),
            /* @__PURE__ */ t("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const Bp = "_bar_1d4x7_1", Pp = "_option_1d4x7_12", Rp = "_selected_1d4x7_33", qp = "_sm_1d4x7_50", Fp = "_md_1d4x7_56", Kp = "_lg_1d4x7_62", yn = {
  bar: Bp,
  option: Pp,
  selected: Rp,
  sm: qp,
  md: Fp,
  lg: Kp
};
function cb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  size: s = "md",
  className: l,
  ..._
}) {
  const [a, c] = Y(
    r ?? e[0]?.value
  ), g = n ?? a, b = (d) => {
    c(d), o?.(d);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [yn.bar, yn[s], l].filter(Boolean).join(" "),
      ..._,
      children: e.map((d) => {
        const D = d.value === g;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": D,
            disabled: d.disabled,
            className: [
              yn.option,
              D ? yn.selected : null,
              d.disabled ? yn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b(d.value),
            children: d.label
          },
          d.value
        );
      })
    }
  );
}
const Hp = "_toggle_1d0zk_1", Wp = "_pressed_1d0zk_29", Vp = "_sm_1d0zk_41", Up = "_md_1d0zk_47", Xp = "_lg_1d0zk_53", Gp = "_fullWidth_1d0zk_59", Tn = {
  toggle: Hp,
  pressed: Wp,
  sm: Vp,
  md: Up,
  lg: Xp,
  fullWidth: Gp
}, db = He(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: o,
    size: s = "md",
    fullWidth: l = !1,
    className: _,
    type: a = "button",
    ...c
  }, g) {
    const [b, d] = Y(r), D = n ?? b, x = () => {
      const z = !D;
      d(z), o?.(z);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: g,
        type: a,
        "aria-pressed": D,
        className: [
          Tn.toggle,
          Tn[s],
          D ? Tn.pressed : null,
          l ? Tn.fullWidth : null,
          _
        ].filter(Boolean).join(" "),
        onClick: x,
        ...c
      }
    );
  }
), Yp = "_root_1qdj1_1", Zp = "_action_1qdj1_102", Jp = "_filled_1qdj1_122", Qp = "_caret_1qdj1_126", e1 = "_flat_1qdj1_147", t1 = "_outlined_1qdj1_155", n1 = "_text_1qdj1_163", r1 = "_sm_1qdj1_201", o1 = "_md_1qdj1_213", s1 = "_lg_1qdj1_225", a1 = "_menu_1qdj1_237", l1 = "_item_1qdj1_250", i1 = "_disabled_1qdj1_271", c1 = "_active_1qdj1_275", d1 = "_danger_1qdj1_284", wt = {
  root: Yp,
  "style-primary": "_style-primary_1qdj1_11",
  "style-secondary": "_style-secondary_1qdj1_21",
  "style-base": "_style-base_1qdj1_31",
  "style-light": "_style-light_1qdj1_41",
  "style-dark": "_style-dark_1qdj1_51",
  "style-info": "_style-info_1qdj1_61",
  "style-success": "_style-success_1qdj1_71",
  "style-warning": "_style-warning_1qdj1_81",
  "style-danger": "_style-danger_1qdj1_91",
  action: Zp,
  filled: Jp,
  caret: Qp,
  flat: e1,
  outlined: t1,
  text: n1,
  "shade-lighter": "_shade-lighter_1qdj1_178",
  "shade-light": "_shade-light_1qdj1_178",
  "shade-dark": "_shade-dark_1qdj1_186",
  "shade-darker": "_shade-darker_1qdj1_190",
  sm: r1,
  md: o1,
  lg: s1,
  menu: a1,
  item: l1,
  disabled: i1,
  active: c1,
  danger: d1
};
function ub({
  label: e,
  onClick: n,
  items: r = [],
  severity: o = "primary",
  variant: s = "filled",
  shade: l = "default",
  size: _ = "md",
  disabled: a = !1,
  className: c,
  ...g
}) {
  const d = `${Ue()}-menu`, D = le(null), x = le(null), z = le([]), [S, m] = Y(!1), [u, h] = Y(-1), p = ve(
    () => r.map((j, C) => j.disabled ? -1 : C).filter((j) => j >= 0),
    [r]
  ), $ = F(() => {
    a || (h(p[0] ?? -1), m(!0));
  }, [a, p]), y = F(() => {
    m(!1), x.current?.focus();
  }, []);
  $e(() => {
    if (!S) return;
    const j = (C) => {
      D.current && !D.current.contains(C.target) && m(!1);
    };
    return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [S]);
  const w = le(S);
  $e(() => {
    const j = w.current;
    if (w.current = S, !S || j) return;
    const C = p.includes(u) ? u : p[0] ?? -1;
    C >= 0 && z.current[C]?.focus();
  }, [S, u, p]);
  const i = (j) => {
    const C = r[j];
    !C || C.disabled || (C.onClick?.(), m(!1), x.current?.focus());
  }, v = (j) => {
    if (p.length === 0) return;
    const C = p.includes(u) ? p.indexOf(u) : j === 1 ? -1 : 0, f = p[(C + j + p.length) % p.length];
    f != null && (h(f), z.current[f]?.focus());
  }, O = (j) => {
    const C = j === "first" ? p[0] : p[p.length - 1];
    C != null && (h(C), z.current[C]?.focus());
  }, I = (j) => {
    switch (j.key) {
      case "ArrowDown":
        j.preventDefault(), v(1);
        break;
      case "ArrowUp":
        j.preventDefault(), v(-1);
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
        m(!1);
        break;
    }
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: D,
      className: [
        wt.root,
        wt[_],
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
            ref: x,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": S,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: a,
            onClick: () => S ? m(!1) : $(),
            onKeyDown: (j) => {
              !S && j.key === "ArrowDown" && (j.preventDefault(), $());
            },
            children: /* @__PURE__ */ t(ze, { name: "chevron-down" })
          }
        ),
        S && /* @__PURE__ */ t(
          "div",
          {
            id: d,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: I,
            ...g,
            children: r.map((j, C) => /* @__PURE__ */ t(
              "button",
              {
                ref: (f) => {
                  z.current[C] = f;
                },
                type: "button",
                role: "menuitem",
                tabIndex: C === u ? 0 : -1,
                disabled: j.disabled,
                className: [
                  wt.item,
                  C === u ? wt.active : null,
                  j.danger ? wt.danger : null,
                  j.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => i(C),
                onMouseEnter: () => {
                  j.disabled || h(C);
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
const u1 = "_textbox_1uz2c_1", _1 = "_invalid_1uz2c_31", f1 = "_xs_1uz2c_37", p1 = "_sm_1uz2c_43", h1 = "_md_1uz2c_49", m1 = "_lg_1uz2c_55", g1 = "_xl_1uz2c_61", Un = {
  textbox: u1,
  invalid: _1,
  xs: f1,
  sm: p1,
  md: h1,
  lg: m1,
  xl: g1
}, _b = He(function({ size: n = "md", invalid: r = !1, className: o, type: s = "text", ...l }, _) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: _,
      type: s,
      className: [Un.textbox, Un[n], r ? Un.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), y1 = "_wrapper_13x89_1", b1 = "_input_13x89_8", x1 = "_invalid_13x89_38", v1 = "_toggle_13x89_44", k1 = "_xs_13x89_79", w1 = "_sm_13x89_85", $1 = "_md_13x89_91", N1 = "_lg_13x89_97", S1 = "_xl_13x89_103", bn = {
  wrapper: y1,
  input: b1,
  invalid: x1,
  toggle: v1,
  xs: k1,
  sm: w1,
  md: $1,
  lg: N1,
  xl: S1
}, fb = He(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  showLabel: l = "Show password",
  hideLabel: _ = "Hide password",
  ...a
}, c) {
  const [g, b] = Y(!1);
  return /* @__PURE__ */ k("div", { className: bn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: c,
        type: g ? "text" : "password",
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
        "aria-pressed": g,
        "aria-label": g ? _ : l,
        disabled: s,
        onClick: () => b((d) => !d),
        children: /* @__PURE__ */ t(ze, { name: g ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), D1 = "_mask_145m8_1", z1 = "_invalid_145m8_31", C1 = "_xs_145m8_37", M1 = "_sm_145m8_43", O1 = "_md_145m8_49", j1 = "_lg_145m8_55", I1 = "_xl_145m8_61", Xn = {
  mask: D1,
  invalid: z1,
  xs: C1,
  sm: M1,
  md: O1,
  lg: j1,
  xl: I1
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
const pb = He(function({
  size: n = "md",
  invalid: r = !1,
  mask: o,
  value: s,
  defaultValue: l = "",
  onChange: _,
  className: a,
  onKeyDown: c,
  ...g
}, b) {
  const [d, D] = Y(l ?? ""), x = s !== void 0, z = x ? s ?? "" : d, S = (h) => {
    const p = mr(h, o);
    return x || D(p), _?.(p), p;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: b,
      type: "text",
      value: z,
      onChange: (h) => {
        S(h.target.value);
      },
      onKeyDown: (h) => {
        if (h.key === "Backspace") {
          const p = h.currentTarget.selectionStart ?? z.length, $ = z[p - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            h.preventDefault();
            const y = z.replace(/\D/g, "");
            S(mr(y.slice(0, -1), o));
          }
        }
        c?.(h);
      },
      className: [Xn.mask, Xn[n], r ? Xn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...g
    }
  );
}), E1 = "_wrapper_mr2in_1", T1 = "_input_mr2in_8", A1 = "_invalid_mr2in_38", L1 = "_button_mr2in_44", B1 = "_up_mr2in_76", P1 = "_down_mr2in_81", R1 = "_xs_mr2in_86", q1 = "_sm_mr2in_92", F1 = "_md_mr2in_98", K1 = "_lg_mr2in_104", H1 = "_xl_mr2in_110", Ft = {
  wrapper: E1,
  input: T1,
  invalid: A1,
  button: L1,
  up: B1,
  down: P1,
  xs: R1,
  sm: q1,
  md: F1,
  lg: K1,
  xl: H1
};
function Jn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function W1(e) {
  let n = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? n += o : o === "." && !r ? (r = !0, n += o) : o === "-" && n.length === 0 && (n += o);
  return n;
}
function Pr(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function V1(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function U1(e, n, r, o, s) {
  const _ = Jn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = _ + n * s : n > 0 ? a = r + Math.ceil((_ - r + 1e-9) / s) * s : a = r + Math.floor((_ - r - 1e-9) / s) * s, Pr(a, r, o);
}
const hb = He(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  value: l,
  defaultValue: _,
  onChange: a,
  min: c,
  max: g,
  step: b = 1,
  incrementLabel: d = "Increment",
  decrementLabel: D = "Decrement",
  onBlur: x,
  onKeyDown: z,
  ...S
}, m) {
  const [u, h] = Y(_ != null ? String(_) : ""), p = l !== void 0, $ = p ? l == null ? "" : String(l) : u, y = (j) => {
    p || h(j), a?.(Jn(j));
  }, w = (j) => {
    p || h(String(j)), a?.(j);
  }, i = (j) => {
    s || w(U1($, j, c, g, b));
  }, v = (j) => {
    y(W1(j.target.value));
  }, O = (j) => {
    j.key === "ArrowUp" ? (j.preventDefault(), i(1)) : j.key === "ArrowDown" && (j.preventDefault(), i(-1)), z?.(j);
  }, I = (j) => {
    const C = Jn($);
    C === null ? (p || h(""), a?.(null)) : w(Pr(V1(C, c, b), c, g)), x?.(j);
  };
  return /* @__PURE__ */ k("div", { className: Ft.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: m,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: $,
        disabled: s,
        onChange: v,
        onKeyDown: O,
        onBlur: I,
        className: [Ft.input, Ft[n], r ? Ft.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...S
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Ft.button, Ft.up].join(" "),
        "aria-label": d,
        disabled: s,
        onClick: () => i(1),
        children: /* @__PURE__ */ t(ze, { name: "chevron-up", size: 14 })
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
        children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 14 })
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
}, X1 = [
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
function G1({ r: e, g: n, b: r }) {
  const o = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${o(e)}${o(n)}${o(r)}`;
}
function Y1({ r: e, g: n, b: r }) {
  const o = e / 255, s = n / 255, l = r / 255, _ = Math.max(o, s, l), a = Math.min(o, s, l), c = _ - a;
  let g = 0;
  return c !== 0 && (_ === o ? g = (s - l) / c % 6 : _ === s ? g = (l - o) / c + 2 : g = (o - s) / c + 4, g *= 60, g < 0 && (g += 360)), {
    h: g,
    s: _ === 0 ? 0 : c / _,
    v: _
  };
}
function tn({ h: e, s: n, v: r }) {
  const o = r * n, s = e / 60, l = o * (1 - Math.abs(s % 2 - 1));
  let _ = 0, a = 0, c = 0;
  s < 1 ? (_ = o, a = l) : s < 2 ? (_ = l, a = o) : s < 3 ? (a = o, c = l) : s < 4 ? (a = l, c = o) : s < 5 ? (_ = l, c = o) : (_ = o, c = l);
  const g = r - o;
  return {
    r: Math.round((_ + g) * 255),
    g: Math.round((a + g) * 255),
    b: Math.round((c + g) * 255),
    a: 1
  };
}
function Z1(e) {
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
const mb = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: s = X1,
  showButton: l = !1,
  showArrow: _ = !0,
  disabled: a = !1,
  invalid: c = !1,
  placeholder: g = "",
  size: b = "md",
  tabIndex: d = 0,
  className: D,
  onChange: x,
  onValueChange: z,
  onOpen: S,
  onClose: m
}) => {
  const u = le(null), h = le(null), p = le(null), $ = le(null), y = le(null), w = Ue(), i = le(null), v = ve(
    () => Z1(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [O, I] = Y(!1), [j, C] = Y(null), f = j ?? v, M = ve(() => Y1(f), [f]), T = F(
    (U) => {
      const N = gr(U);
      x?.(N), z?.(N);
    },
    [x, z]
  ), E = F(
    (U, N) => {
      C(U), N && !l && T(U);
    },
    [l, T]
  ), A = F(() => {
    I(!1), C(null), m?.(), h.current?.focus();
  }, [m]), X = F(() => {
    a || (C(v), I(!0), S?.());
  }, [a, v, S]), H = F(() => {
    O ? A() : X();
  }, [O, A, X]), re = F(
    (U, N) => {
      const P = p.current;
      if (!P) return M;
      const V = P.getBoundingClientRect(), se = bt((U - V.left) / V.width, 0, 1), te = bt(1 - (N - V.top) / V.height, 0, 1);
      return { h: M.h, s: se, v: te };
    },
    [M]
  ), Z = F(
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
    E({ ...tn(N), a: f.a }, !0);
  }, Q = (U) => {
    if (i.current !== "sat") return;
    U.preventDefault();
    const N = re(U.clientX, U.clientY);
    E({ ...tn(N), a: f.a }, !0);
  }, G = (U) => {
    if (a) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), i.current = "hue";
    const N = Z(U.clientX, $.current);
    E({ ...tn({ ...M, h: N * 360 }), a: f.a }, !0);
  }, K = (U) => {
    if (i.current !== "hue") return;
    U.preventDefault();
    const N = Z(U.clientX, $.current);
    E({ ...tn({ ...M, h: N * 360 }), a: f.a }, !0);
  }, L = (U) => {
    if (a) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), i.current = "alpha";
    const N = Z(U.clientX, y.current);
    E({ ...f, a: N }, !0);
  }, oe = (U) => {
    if (i.current !== "alpha") return;
    U.preventDefault();
    const N = Z(U.clientX, y.current);
    E({ ...f, a: N }, !0);
  }, ce = () => {
    i.current = null;
  }, ee = F(
    (U, N) => {
      const P = { h: M.h, s: bt(M.s + U, 0, 1), v: bt(M.v + N, 0, 1) };
      E({ ...tn(P), a: f.a }, !0);
    },
    [M, f.a, E]
  ), ue = F(
    (U) => {
      const N = (M.h + U + 360) % 360;
      E({ ...tn({ ...M, h: N }), a: f.a }, !0);
    },
    [M, f.a, E]
  ), me = F(
    (U) => {
      E({ ...f, a: bt(f.a + U, 0, 1) }, !0);
    },
    [f, E]
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
  }, Pe = (U, N) => {
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
  }, Ie = (U, N) => {
    if (U === "hex") {
      const te = Qn(N);
      te && E({ ...te, a: f.a }, !0);
      return;
    }
    const P = N.replace(/[^\d.]/g, ""), V = Number.parseFloat(P);
    if (Number.isNaN(V)) return;
    if (U === "a") {
      const te = P.includes(".") ? bt(V, 0, 1) : bt(V / 100, 0, 1);
      E({ ...f, a: te }, !0);
      return;
    }
    const se = { r: 255, g: 255, b: 255 };
    E({ ...f, [U]: bt(V, 0, se[U]) }, !0);
  }, Xe = () => {
    j && (T(j), C(null), I(!1), m?.(), h.current?.focus());
  };
  $e(() => {
    if (!O) return;
    const U = (N) => {
      u.current && !u.current.contains(N.target) && A();
    };
    return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
  }, [O, A]), $e(() => {
    if (!O) return;
    const U = (N) => {
      N.key === "Escape" && A();
    };
    return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
  }, [O, A]);
  const be = b === "xs" ? we["dx-colorpicker-trigger-xs"] : b === "sm" ? we["dx-colorpicker-trigger-sm"] : b === "lg" ? we["dx-colorpicker-trigger-lg"] : b === "xl" ? we["dx-colorpicker-trigger-xl"] : we["dx-colorpicker-trigger"], Ge = gr(f), Je = G1(f), qe = { x: M.s * 100, y: (1 - M.v) * 100 }, Ze = M.h / 360 * 100, Fe = f.a * 100, Qe = /* @__PURE__ */ k("div", { className: we["dx-colorpicker-panel"], children: [
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
        tabIndex: a ? -1 : d,
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
            style: { left: `${qe.x}%`, top: `${qe.y}%` },
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
        tabIndex: a ? -1 : d,
        className: we["dx-hue-picker"],
        onKeyDown: (U) => Pe(U, "hue"),
        onPointerDown: G,
        onPointerMove: K,
        onPointerUp: ce,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we["dx-hue-indicator"],
            style: { left: `${Ze}%` },
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
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : d,
        className: we["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-color-border) 0% 25%, var(--dx-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${M.h}, 100%, 50%))`
        },
        onKeyDown: (U) => Pe(U, "alpha"),
        onPointerDown: L,
        onPointerMove: oe,
        onPointerUp: ce,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we["dx-alpha-indicator"],
            style: { left: `${Fe}%` },
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
            value: Je,
            onChange: (U) => Ie("hex", U.target.value)
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
            value: f.r,
            onChange: (U) => Ie("r", U.target.value)
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
            value: f.g,
            onChange: (U) => Ie("g", U.target.value)
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
            value: f.b,
            onChange: (U) => Ie("b", U.target.value)
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
            value: Math.round(f.a * 100),
            onChange: (U) => Ie("a", U.target.value)
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
        tabIndex: a ? -1 : d,
        style: { backgroundColor: U },
        onClick: () => {
          const N = Qn(U);
          l ? E({ ...N, a: f.a }, !1) : (C(null), T({ ...N, a: f.a }), I(!1), m?.(), h.current?.focus());
        }
      },
      U
    )) }),
    l && /* @__PURE__ */ t("div", { className: we["dx-colorpicker-footer"], children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: we["dx-colorpicker-ok"],
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ k(
    "div",
    {
      ref: u,
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
            ref: h,
            type: "button",
            className: [we["dx-colorpicker-trigger"], be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": O,
            "aria-controls": w,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: d,
            onClick: H,
            onKeyDown: (U) => {
              U.key === "Escape" && O && (U.preventDefault(), A());
            },
            children: [
              /* @__PURE__ */ t(
                "span",
                {
                  className: we["dx-colorpicker-value"],
                  style: { backgroundColor: Ge },
                  "aria-hidden": "true"
                }
              ),
              g && /* @__PURE__ */ t("span", { className: we["dx-colorpicker-text"], children: g }),
              _ && /* @__PURE__ */ t("span", { className: we["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 14 }) })
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
            children: Qe
          }
        )
      ]
    }
  );
}, Me = {
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
}, J1 = 42;
function xt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${xt(e.month)}-${xt(e.day)}`;
}
function Q1(e, n) {
  const r = pt(e);
  return n ? `${r} ${xt(e.hour)}:${xt(e.minute)}:${xt(e.second)}` : r;
}
function er(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), o = Number(n[2]), s = Number(n[3]), l = n[4] != null ? Number(n[4]) : 0, _ = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (o < 1 || o > 12 || s < 1 || s > 31) return null;
  const c = new Date(r, o - 1, s, l, _, a);
  return c.getFullYear() !== r || c.getMonth() !== o - 1 || c.getDate() !== s ? null : { year: r, month: o, day: s, hour: l, minute: _, second: a };
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
function An(e, n) {
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
}, eh = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], th = ["y", "M", "d", "H", "m", "s"];
function Ln(e, n, r) {
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
    let _ = !1;
    for (const c of eh)
      if (n.startsWith(c, l)) {
        s += br[c](e, o, r), l += c.length, _ = !0;
        break;
      }
    if (_) continue;
    const a = n[l];
    if (th.includes(a)) {
      s += br[a](e, o, r), l += 1;
      continue;
    }
    s += a, l += 1;
  }
  return s;
}
const nh = [
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
function rh(e, n) {
  const r = {};
  let o = 0, s = 0;
  for (; s < n.length; ) {
    let a = null;
    for (const c of nh)
      if (n.startsWith(c, s)) {
        a = c;
        break;
      }
    if (a) {
      const c = e.slice(o, o + a.length);
      if (!/^\d+$/.test(c)) return null;
      const g = Number(c);
      switch (a) {
        case "yyyy":
          r.year = g;
          break;
        case "yy":
        case "y":
          r.year = 2e3 + g;
          break;
        case "MM":
        case "M":
          r.month = g;
          break;
        case "dd":
        case "d":
          r.day = g;
          break;
        case "HH":
        case "H":
          r.hour = g;
          break;
        case "mm":
        case "m":
          r.minute = g;
          break;
        case "ss":
        case "s":
          r.second = g;
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
  const _ = new Date(
    l.year,
    l.month - 1,
    l.day,
    l.hour,
    l.minute,
    l.second
  );
  return _.getFullYear() !== l.year || _.getMonth() !== l.month - 1 || _.getDate() !== l.day ? null : l;
}
function xn(e, n) {
  const r = er(e);
  return r || rh(e, n);
}
function oh(e, n, r) {
  return n && pt(e) < pt(n) ? n : r && pt(e) > pt(r) ? r : e;
}
const sh = ["hour", "minute", "second"];
function Bn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const gb = He(function({
  size: n = "md",
  invalid: r = !1,
  value: o,
  defaultValue: s,
  format: l = "yyyy-MM-dd",
  min: _,
  max: a,
  showTime: c = !1,
  showButton: g = !0,
  allowClear: b = !1,
  inline: d = !1,
  disabledDates: D,
  locale: x = "en-US",
  onChange: z,
  onValueChange: S,
  onOpen: m,
  onClose: u,
  disabled: h,
  readOnly: p,
  placeholder: $,
  ariaLabel: y,
  triggerLabel: w,
  clearLabel: i,
  tabIndex: v,
  className: O,
  onBlur: I,
  onKeyDown: j,
  ...C
}, f) {
  const M = le(null), T = le(null), E = le(null), A = le(null), X = Ue(), H = o !== void 0, [re, Z] = Y(
    () => s != null ? Ln(xn(s, l) ?? Kt(), l, x) : ""
  ), [J, Q] = Y(!1), [G, K] = Y(null), [L, oe] = Y(() => {
    const B = o !== void 0 ? o ?? "" : s ?? "";
    if (B) {
      const ie = xn(B, l);
      if (ie) return ie;
    }
    return Kt();
  }), ce = ve(() => _ ? er(_) : null, [_]), ee = ve(() => a ? er(a) : null, [a]), ue = ve(
    () => new Set(D ?? []),
    [D]
  ), me = ve(() => {
    const B = H ? o ?? "" : re;
    return B ? xn(B, l) : null;
  }, [o, re, H, l]), ke = F(
    (B) => {
      const ie = pt(B);
      return !!(ue.has(ie) || ce && ie < pt(ce) || ee && ie > pt(ee));
    },
    [ue, ce, ee]
  ), Pe = F(
    (B) => {
      if (!ke(B)) return B;
      for (let ie = 1; ie <= 366; ie += 1) {
        const Ce = At(B, ie);
        if (!ke(Ce)) return Ce;
        const Se = At(B, -ie);
        if (!ke(Se)) return Se;
      }
      return B;
    },
    [ke]
  ), Ie = F(
    (B) => {
      H || Z(B ? Ln(B, l, x) : "");
      const ie = B ? Q1(B, c) : "";
      z?.(ie), S?.(ie);
    },
    [H, l, x, c, z, S]
  ), Xe = F(
    (B) => {
      T.current = B, typeof f == "function" ? f(B) : f && (f.current = B);
    },
    [f]
  ), be = F(() => {
    Q(!1), K(null), u?.(), d || E.current?.focus();
  }, [d, u]), Ge = F(() => {
    if (h) return;
    const B = me ?? Kt();
    K(B), oe(Pe(B)), Q(!0), m?.();
  }, [h, me, Pe, m]), Je = F(() => {
    J ? be() : Ge();
  }, [J, be, Ge]), qe = F((B) => {
    A.current?.querySelector(
      `[data-date="${pt(B)}"]`
    )?.focus();
  }, []), Ze = F(
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
      K(Se), c || (Ie(Se), be());
    },
    [ke, G, me, c, Ie, be]
  ), Fe = F(
    (B, ie) => {
      K((Ce) => {
        const Se = Ce ?? me ?? Kt(), et = Math.min(B === "hour" ? 23 : 59, Math.max(0, Se[B] + ie));
        return { ...Se, [B]: et };
      });
    },
    [me]
  ), Qe = F(
    (B, ie) => {
      const Ce = ie.replace(/\D/g, ""), Se = Ce === "" ? 0 : Number(Ce), Te = B === "hour" ? 23 : 59;
      K((et) => ({ ...et ?? me ?? Kt(), [B]: Math.min(Te, Se) }));
    },
    [me]
  ), U = F(() => {
    G && (Ie(G), be());
  }, [G, Ie, be]), N = F(() => {
    if (J) return;
    const B = xn(re, l);
    Ie(B ? oh(B, ce, ee) : null);
  }, [J, re, l, ce, ee, Ie]), P = (B) => {
    const ie = B.target.value;
    H || Z(ie), J && K(null);
  }, V = (B) => {
    B.key === "Enter" ? (B.preventDefault(), J ? G && (Ie(G), be()) : N()) : B.key === "Escape" ? J && (B.preventDefault(), be()) : B.key === "ArrowDown" && !J ? (B.preventDefault(), Ge()) : B.key === "Tab" && J && Q(!1), j?.(B);
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
        ie = An(L, B.shiftKey ? -12 : -1), B.preventDefault();
        break;
      case "PageDown":
        ie = An(L, B.shiftKey ? 12 : 1), B.preventDefault();
        break;
      case "Enter":
      case " ":
        B.preventDefault(), Ze(L);
        break;
      case "Escape":
        B.preventDefault(), be();
        break;
      case "Tab":
        Q(!1);
        break;
    }
    if (ie) {
      const Ce = Pe(ie);
      oe(Ce), setTimeout(() => qe(Ce), 0);
    }
  };
  $e(() => {
    if (!J) return;
    const B = (ie) => {
      M.current && !M.current.contains(ie.target) && be();
    };
    return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, [J, be]), $e(() => {
    if (!J) return;
    const B = (ie) => {
      ie.key === "Escape" && be();
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [J, be]);
  const pe = () => {
    H || Z(""), z?.(""), S?.(""), T.current?.focus();
  }, Ne = J && G ? Ln(G, l, x) : H ? o ? Ln(xn(o, l) ?? Kt(), l, x) : "" : re, Re = H ? !!o : re.length > 0, Ee = d || J, rt = { year: L.year, month: L.month }, vt = new Date(rt.year, rt.month - 1, 1).getDay(), ne = {
    year: rt.year,
    month: rt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let B = 0; B < J1; B += 1)
    De.push(At(ne, B - vt));
  const W = G ? pt(G) : me ? pt(me) : null, ae = pt(Kt()), _e = `${rt.year}-${xt(rt.month)}`, he = ve(
    () => new Intl.DateTimeFormat(x, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [x]
  ), de = new Intl.DateTimeFormat(x, {
    month: "long",
    year: "numeric"
  }).format(new Date(rt.year, rt.month - 1, 1)), ye = Array.from(
    { length: 7 },
    (B, ie) => new Intl.DateTimeFormat(x, { weekday: "short" }).format(
      new Date(2021, 0, 3 + ie)
    )
  ), Le = n === "xs" ? Me["dx-datepicker-input--xs"] : n === "sm" ? Me["dx-datepicker-input--sm"] : n === "lg" ? Me["dx-datepicker-input--lg"] : n === "xl" ? Me["dx-datepicker-input--xl"] : Me["dx-datepicker-input--md"], Ke = /* @__PURE__ */ k(
    "div",
    {
      className: Me["dx-datepicker-calendar"],
      "aria-label": y ?? "Date picker",
      children: [
        /* @__PURE__ */ k("div", { className: Me["dx-datepicker-header"], children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Me["dx-datepicker-nav"],
              "aria-label": "Previous month",
              onClick: () => {
                const B = Pe(An(L, -1));
                oe(B), setTimeout(() => qe(B), 0);
              },
              children: /* @__PURE__ */ t(ze, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ t("span", { className: Me["dx-datepicker-title"], children: de }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Me["dx-datepicker-nav"],
              "aria-label": "Next month",
              onClick: () => {
                const B = Pe(An(L, 1));
                oe(B), setTimeout(() => qe(B), 0);
              },
              children: /* @__PURE__ */ t(ze, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ k(
          "div",
          {
            ref: A,
            role: "grid",
            className: Me["dx-datepicker-grid"],
            onKeyDown: te,
            children: [
              /* @__PURE__ */ t("div", { role: "row", className: Me["dx-datepicker-week-row"], children: ye.map((B) => /* @__PURE__ */ t(
                "div",
                {
                  role: "columnheader",
                  className: Me["dx-datepicker-weekday"],
                  children: B
                },
                B
              )) }),
              Array.from({ length: 6 }, (B, ie) => /* @__PURE__ */ t("div", { role: "row", className: Me["dx-datepicker-row"], children: De.slice(ie * 7, ie * 7 + 7).map((Ce) => {
                const Se = pt(Ce), Te = ke(Ce), et = Se.startsWith(_e);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Se,
                    tabIndex: Se === pt(L) ? 0 : -1,
                    "aria-selected": Se === W || void 0,
                    "aria-disabled": Te || void 0,
                    "aria-label": he.format(
                      new Date(Ce.year, Ce.month - 1, Ce.day)
                    ),
                    className: [
                      Me["dx-datepicker-day"],
                      et ? null : Me["dx-datepicker-day--outside"],
                      Se === ae ? Me["dx-datepicker-day--today"] : null,
                      Se === W ? Me["dx-datepicker-day--selected"] : null,
                      Te ? Me["dx-datepicker-day--disabled"] : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Ze(Ce),
                    onFocus: () => oe(Ce),
                    children: Ce.day
                  },
                  Se
                );
              }) }, ie))
            ]
          }
        ),
        c && /* @__PURE__ */ k("div", { className: Me["dx-datepicker-time"], children: [
          sh.map((B) => /* @__PURE__ */ k("label", { className: Me["dx-datepicker-time-field"], children: [
            /* @__PURE__ */ t("span", { className: Me["dx-datepicker-time-label"], children: Bn(B) }),
            /* @__PURE__ */ k("div", { className: Me["dx-datepicker-time-control"], children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: Me["dx-datepicker-time-input"],
                  inputMode: "numeric",
                  "aria-label": Bn(B),
                  value: xt((G ?? me ?? Kt())[B]),
                  onChange: (ie) => Qe(B, ie.target.value),
                  onKeyDown: (ie) => {
                    ie.key === "ArrowUp" ? (ie.preventDefault(), Fe(B, 1)) : ie.key === "ArrowDown" ? (ie.preventDefault(), Fe(B, -1)) : ie.key === "Enter" && (ie.preventDefault(), U());
                  }
                }
              ),
              /* @__PURE__ */ k("span", { className: Me["dx-datepicker-time-buttons"], children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${Bn(B).toLowerCase()}`,
                    onClick: () => Fe(B, 1),
                    children: /* @__PURE__ */ t(ze, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${Bn(B).toLowerCase()}`,
                    onClick: () => Fe(B, -1),
                    children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, B)),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Me["dx-datepicker-ok"],
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
        Me["dx-datepicker"],
        d ? Me["dx-datepicker-inline"] : null,
        O
      ].filter(Boolean).join(" "),
      children: [
        !d && /* @__PURE__ */ k(Oe, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Xe,
              type: "text",
              autoComplete: "off",
              value: Ne,
              disabled: h,
              readOnly: p,
              placeholder: $,
              tabIndex: v,
              role: g ? void 0 : "combobox",
              "aria-label": y ?? "Date",
              "aria-haspopup": g ? void 0 : "dialog",
              "aria-expanded": g ? void 0 : Ee,
              "aria-controls": g ? void 0 : X,
              "aria-invalid": r || void 0,
              className: [
                Me["dx-datepicker-input"],
                Le,
                r ? Me["dx-datepicker-input-invalid"] : null
              ].filter(Boolean).join(" "),
              onChange: P,
              onKeyDown: V,
              onBlur: se,
              onClick: () => {
                g || Je();
              },
              ...C
            }
          ),
          b && !h && Re && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                Me["dx-datepicker-clear"],
                g ? Me["dx-datepicker-clear--inset"] : null
              ].filter(Boolean).join(" "),
              "aria-label": i ?? "Clear",
              onClick: pe,
              children: /* @__PURE__ */ t(ze, { name: "close", size: 14 })
            }
          ),
          g && /* @__PURE__ */ t(
            "button",
            {
              ref: E,
              type: "button",
              className: [
                Me["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": w ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": J,
              "aria-controls": X,
              disabled: h,
              onClick: Je,
              children: /* @__PURE__ */ t(ze, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Ee && /* @__PURE__ */ t(
          "div",
          {
            id: X,
            role: d ? void 0 : "dialog",
            className: d ? void 0 : Me["dx-datepicker-popup"],
            children: Ke
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
}, yb = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: s = "Rating",
  clearLabel: l = "Clear",
  rateLabel: _ = "Rate",
  tabIndex: a = 0,
  className: c,
  onChange: g,
  onValueChange: b
}) => {
  const [d, D] = Y(e), x = F(
    (h) => Math.min(n, Math.max(1, h)),
    [n]
  ), z = F(
    (h) => {
      g?.(h), b?.(h);
    },
    [g, b]
  ), S = F(
    (h) => {
      r || o || (z(h), D(h));
    },
    [r, o, z]
  ), m = (h) => {
    if (r || o) return;
    const p = d > 0 ? d : 1;
    switch (h.key) {
      case "ArrowRight":
      case "ArrowUp":
        h.preventDefault(), S(x(p + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        h.preventDefault(), S(x(p - 1));
        break;
      case "Home":
        h.preventDefault(), S(1);
        break;
      case "End":
        h.preventDefault(), S(n);
        break;
    }
  }, u = Array.from({ length: n }, (h, p) => p + 1);
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
      onKeyDown: m,
      children: [
        !r && !o && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ht["dx-rating-clear"],
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: o,
            onClick: () => S(0),
            children: /* @__PURE__ */ t(ze, { name: "ban", size: 16 })
          }
        ),
        u.map((h) => {
          const p = h <= e, $ = h === (e > 0 ? e : d);
          return /* @__PURE__ */ k(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": p,
              "aria-posinset": h,
              "aria-setsize": n,
              "aria-label": `${_} ${h}`,
              tabIndex: $ ? a : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Ht["dx-rating-item"],
                p ? Ht["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => S(h),
              onFocus: () => D(h),
              children: [
                /* @__PURE__ */ t("span", { className: Ht["dx-rating-icon-filled"], "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Ht["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "star-outline", size: 20 }) })
              ]
            },
            h
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
const bb = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: o = 0,
  max: s = 100,
  step: l = 1,
  range: _ = !1,
  orientation: a = "horizontal",
  disabled: c = !1,
  label: g = "Value",
  minLabel: b = "Min",
  maxLabel: d = "Max",
  tabIndex: D = 0,
  className: x,
  onChange: z,
  onInput: S,
  onValueChange: m,
  onInputChange: u
}) => {
  const h = le(null), p = le(null), [$, y] = Y(null), w = $ ?? e, i = ve(() => Ct(w, o, s), [w, o, s]), v = ve(
    () => Ct(_ ? n : i, o, s),
    [_, n, i, o, s]
  ), O = ve(
    () => Ct(_ ? Math.max(r, v) : i, o, s),
    [_, r, v, i, o, s]
  ), I = F(
    (L) => {
      const oe = s - o;
      return oe <= 0 ? 0 : (Ct(L, o, s) - o) / oe * 100;
    },
    [o, s]
  ), j = F(
    (L, oe) => {
      const ce = h.current;
      if (!ce) return o;
      const ee = ce.getBoundingClientRect();
      let ue;
      a === "vertical" ? ue = 1 - (oe - ee.top) / ee.height : ue = (L - ee.left) / ee.width;
      const me = o + Ct(ue, 0, 1) * (s - o);
      return l > 0 ? Ct(Math.round(me / l) * l, o, s) : Ct(me, o, s);
    },
    [o, s, l, a]
  ), C = F(
    (L) => {
      typeof L == "number" && y(L), z?.(L), m?.(L);
    },
    [z, m]
  ), f = F(
    (L) => {
      typeof L == "number" && y(L), S?.(L), u?.(L);
    },
    [S, u]
  ), M = F(
    (L, oe, ce) => {
      const ee = j(oe, ce);
      let ue;
      _ ? L === "min" ? ue = { min: Math.min(ee, O), max: O } : ue = { min: v, max: Math.max(ee, v) } : ue = ee, f(ue), p.current === null && C(ue);
    },
    [_, j, v, O, f, C]
  ), T = F(
    (L, oe) => {
      const ce = (l > 0 ? l : 1) * oe;
      let ee;
      _ ? L === "min" ? ee = {
        min: Ct(v + ce, o, O),
        max: O
      } : ee = {
        min: v,
        max: Ct(O + ce, v, s)
      } : ee = Ct(i + ce, o, s), C(ee);
    },
    [_, l, o, s, v, O, i, C]
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
          oe.preventDefault(), C(_ ? L === "min" ? { min: o, max: O } : { min: v, max: v } : o);
          break;
        case "End":
          oe.preventDefault(), C(_ ? L === "min" ? { min: O, max: O } : { min: v, max: s } : s);
          break;
      }
  }, A = (L, oe) => {
    c || (oe.preventDefault(), oe.currentTarget.focus(), typeof oe.currentTarget.setPointerCapture == "function" && oe.currentTarget.setPointerCapture(oe.pointerId), p.current = { key: L, pointerId: oe.pointerId }, M(L, oe.clientX, oe.clientY));
  }, X = (L) => {
    !p.current || p.current.pointerId !== L.pointerId || (L.preventDefault(), M(p.current.key, L.clientX, L.clientY));
  }, H = (L) => {
    !p.current || p.current.pointerId !== L.pointerId || (p.current = null, L.preventDefault(), C(_ ? { min: v, max: O } : i));
  }, [re, Z] = Y(null), J = I(v), Q = I(O), G = _ ? J : 0, K = Q;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Gt["dx-slider"],
        a === "vertical" ? Gt["dx-slider-vertical"] : null,
        c ? Gt["dx-slider-disabled"] : null,
        x
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ k("div", { ref: h, className: Gt["dx-slider-track"], children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Gt["dx-slider-range"],
            style: a === "vertical" ? { bottom: `${G}%`, height: `${K - G}%` } : { left: `${G}%`, width: `${K - G}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(v),
            "aria-orientation": a,
            "aria-label": _ ? b : g,
            "aria-disabled": c || void 0,
            tabIndex: c || _ && re === "max" ? -1 : D,
            className: Gt["dx-slider-handle"],
            style: a === "vertical" ? { bottom: `calc(${J}% - 8px)` } : { left: `calc(${J}% - 8px)` },
            onKeyDown: (L) => E("min", L),
            onPointerDown: (L) => A("min", L),
            onPointerMove: X,
            onPointerUp: H,
            onFocus: () => Z("min")
          }
        ),
        _ && /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(O),
            "aria-orientation": a,
            "aria-label": d,
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
}, We = {
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
}, ah = "-10675199.02:48:05.4775808", lh = "10675199.02:48:05.4775808", Bt = 86400, Pt = 3600, Dt = 60, Gn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, xr = {
  days: Bt,
  hours: Pt,
  minutes: Dt,
  seconds: 1
}, ih = {
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
    if (!s.slice(1).some((d) => d != null)) return null;
    const a = s[1] != null ? Number(s[1]) : 0, c = s[2] != null ? Number(s[2]) : 0, g = s[3] != null ? Number(s[3]) : 0, b = s[4] != null ? Number(s[4]) : 0;
    return r * (a * Bt + c * Pt + g * Dt + b);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (l) {
    const _ = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), c = Number(l[3]), g = l[4] != null ? Number(l[4]) : 0, b = l[5] != null ? +`0.${l[5]}` : 0;
    return a > 23 || c > 59 || g > 59 ? null : r * (_ * Bt + a * Pt + c * Dt + g + b);
  }
  return null;
}
function ch(e) {
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
  const _ = Math.floor(o / Dt) + l, a = _ % 60, c = Math.floor(_ / 60), g = c % 24, b = Math.floor(c / 24), d = r ? "-" : "", D = b > 0 ? `${b}.` : "";
  switch (n) {
    case "day":
      return `${d}${b} day${b === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${D}${nn(g)}`;
    case "minute":
      return `${d}${D}${nn(g)}:${nn(a)}`;
    default:
      return `${d}${D}${nn(g)}:${nn(a)}:${nn(s)}`;
  }
}
function kr(e, n = "second") {
  const r = Dn(e);
  return r === null ? "" : tr(r, n);
}
function Yn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const xb = He(
  function({
    size: n = "md",
    invalid: r = !1,
    value: o,
    defaultValue: s,
    min: l = ah,
    max: _ = lh,
    step: a = "1",
    precision: c = "second",
    showDays: g = !0,
    showHours: b = !0,
    showMinutes: d = !0,
    showSeconds: D = !0,
    allowClear: x = !1,
    inline: z = !1,
    onChange: S,
    onValueChange: m,
    onOpen: u,
    onClose: h,
    disabled: p,
    placeholder: $,
    ariaLabel: y,
    triggerLabel: w,
    clearLabel: i,
    tabIndex: v,
    className: O,
    onBlur: I,
    onKeyDown: j,
    ...C
  }, f) {
    const M = le(null), T = le(null), E = le(null), A = Ue(), X = o !== void 0, [H, re] = Y(
      () => s != null ? kr(s, c) : ""
    ), [Z, J] = Y(!1), [Q, G] = Y(null), [K, L] = Y(null), oe = ve(
      () => Dn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), ce = ve(
      () => Dn(_) ?? Number.MAX_SAFE_INTEGER,
      [_]
    ), ee = ve(() => {
      const ne = Number.parseFloat(a);
      return Number.isNaN(ne) || ne <= 0 ? 1 : ne;
    }, [a]), ue = ve(() => {
      const ne = X ? o ?? "" : H;
      return ne ? Dn(ne) : null;
    }, [o, H, X]), me = F(
      (ne) => {
        const De = ne === null ? "" : tr(ne, c);
        X || re(De), S?.(De), m?.(De);
      },
      [X, c, S, m]
    ), ke = F(
      (ne) => {
        ne && Q !== null && me(Q), J(!1), G(null), L(null), h?.(), z || E.current?.focus();
      },
      [z, Q, me, h]
    ), Pe = F(() => {
      p || (G(ue ?? 0), J(!0), u?.());
    }, [p, ue, u]), Ie = F(() => {
      Z ? ke(!1) : Pe();
    }, [Z, ke, Pe]), Xe = F(
      (ne, De) => {
        G((W) => {
          const _e = (W ?? ue ?? 0) + De * ee * xr[ne];
          return Yn(_e, oe, ce);
        });
      },
      [ue, ee, oe, ce]
    ), be = F(
      (ne) => {
        const De = K?.[ne];
        if (De == null) return;
        const W = Number.parseFloat(De), ae = Number.isNaN(W) ? 0 : W;
        G((_e) => {
          const he = _e ?? ue ?? 0, de = vr(he);
          de[ne] = ae;
          const Le = (he < 0 ? -1 : 1) * ch(de);
          return Yn(Le, oe, ce);
        }), L(null);
      },
      [K, ue, oe, ce]
    ), Ge = (ne, De) => {
      L((W) => ({ ...W ?? {}, [ne]: De }));
    }, Je = (ne, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), be(ne), Xe(ne, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), be(ne), Xe(ne, -1);
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
    }, qe = F(() => {
      if (Z) return;
      const ne = Dn(H);
      me(ne !== null ? Yn(ne, oe, ce) : null);
    }, [Z, H, oe, ce, me]), Ze = (ne) => {
      X || re(ne.target.value);
    }, Fe = (ne) => {
      ne.key === "Enter" ? (ne.preventDefault(), Z ? ke(!0) : qe()) : ne.key === "Escape" && Z ? (ne.preventDefault(), ke(!1)) : ne.key === "ArrowDown" && !Z ? (ne.preventDefault(), Pe()) : ne.key === "Tab" && Z && J(!1), j?.(ne);
    }, Qe = (ne) => {
      qe(), I?.(ne);
    }, U = () => {
      X || re(""), S?.(""), m?.(""), T.current?.focus();
    };
    $e(() => {
      if (!Z) return;
      const ne = (De) => {
        M.current && !M.current.contains(De.target) && ke(!1);
      };
      return document.addEventListener("mousedown", ne), () => document.removeEventListener("mousedown", ne);
    }, [Z, ke]), $e(() => {
      if (!Z) return;
      const ne = (De) => {
        De.key === "Escape" && ke(!1);
      };
      return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
    }, [Z, ke]), $e(() => {
      if (z && Q !== null) {
        const ne = ue;
        (ne === null || Math.abs(Q - ne) > 1e-9) && me(Q);
      }
    }, [z, Q, ue, me]);
    const N = F(
      (ne) => {
        T.current = ne, typeof f == "function" ? f(ne) : f && (f.current = ne);
      },
      [f]
    ), P = X ? o ? kr(o, c) : "" : H, V = X ? !!o : H.length > 0, se = z || Z, te = Q ?? ue ?? 0, pe = vr(te), Ne = ih[c], Ee = ["days", "hours", "minutes", "seconds"].filter(
      (ne) => xr[ne] >= Ne && (ne === "days" ? g : ne === "hours" ? b : ne === "minutes" ? d : D)
    ), rt = n === "xs" ? We["dx-timespanpicker-input--xs"] : n === "sm" ? We["dx-timespanpicker-input--sm"] : n === "lg" ? We["dx-timespanpicker-input--lg"] : n === "xl" ? We["dx-timespanpicker-input--xl"] : We["dx-timespanpicker-input--md"], vt = /* @__PURE__ */ k("div", { className: We["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ t("div", { className: We["dx-timespanpicker-preview"], "aria-live": "polite", children: tr(te, c) }),
      /* @__PURE__ */ t("div", { className: We["dx-timespanpicker-units"], children: Ee.map((ne) => /* @__PURE__ */ k("label", { className: We["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ t("span", { className: We["dx-timespanpicker-unit-label"], children: Gn[ne] }),
        /* @__PURE__ */ k("span", { className: We["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: We["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: K?.[ne] ?? String(pe[ne]),
              onChange: (De) => Ge(ne, De.target.value),
              onKeyDown: (De) => Je(ne, De),
              onBlur: () => be(ne)
            }
          ),
          /* @__PURE__ */ k("span", { className: We["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Gn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Xe(ne, 1);
                },
                children: /* @__PURE__ */ t(ze, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Gn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Xe(ne, -1);
                },
                children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, ne)) }),
      /* @__PURE__ */ t("div", { className: We["dx-timespanpicker-footer"], children: /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: We["dx-timespanpicker-ok"],
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
          We["dx-timespanpicker"],
          z ? We["dx-timespanpicker-inline"] : null,
          O
        ].filter(Boolean).join(" "),
        children: [
          !z && /* @__PURE__ */ k(Oe, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: N,
                type: "text",
                autoComplete: "off",
                value: P,
                disabled: p,
                placeholder: $,
                tabIndex: v,
                role: "combobox",
                "aria-label": y ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                "aria-invalid": r || void 0,
                className: [
                  We["dx-timespanpicker-input"],
                  rt,
                  r ? We["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Ze,
                onKeyDown: Fe,
                onBlur: Qe,
                ...C
              }
            ),
            x && !p && V && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: We["dx-timespanpicker-clear"],
                "aria-label": i ?? "Clear",
                onClick: U,
                children: /* @__PURE__ */ t(ze, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: E,
                type: "button",
                className: [
                  We["dx-timespanpicker-trigger"]
                ].filter(Boolean).join(" "),
                "aria-label": w ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                disabled: p,
                onClick: Ie,
                children: /* @__PURE__ */ t(ze, { name: "clock", size: 16 })
              }
            )
          ] }),
          se && /* @__PURE__ */ t(
            "div",
            {
              id: A,
              role: z ? void 0 : "dialog",
              "aria-label": y ?? "Time span picker",
              className: z ? void 0 : We["dx-timespanpicker-popup"],
              children: vt
            }
          )
        ]
      }
    );
  }
), dh = "_wrapper_t1zvh_1", uh = "_cells_t1zvh_8", _h = "_cell_t1zvh_8", fh = "_invalid_t1zvh_63", ph = "_live_t1zvh_72", Yt = {
  wrapper: dh,
  cells: uh,
  cell: _h,
  "cell-sm": "_cell-sm_t1zvh_45",
  "cell-md": "_cell-md_t1zvh_51",
  "cell-lg": "_cell-lg_t1zvh_57",
  invalid: fh,
  live: ph
};
function wr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const vb = He(
  function({
    length: n = 6,
    value: r,
    defaultValue: o,
    onChange: s,
    invalid: l = !1,
    size: _ = "md",
    autoFocus: a = !1,
    disabled: c = !1,
    label: g = "Security code",
    liveAnnounce: b = !0,
    className: d,
    "aria-label": D
  }, x) {
    const z = Ue(), S = r !== void 0, [m, u] = Y(wr(o).join("")), h = S ? wr(r).join("") : m, p = Array.from({ length: n }, (C, f) => h[f] ?? ""), $ = le([]), [y, w] = Y(""), i = (C) => {
      S || u(C), s?.(C);
    }, v = (C) => {
      const f = $.current[C];
      f && !f.disabled && (f.focus(), f.select());
    }, O = (C, f) => {
      const M = f.replace(/\D/g, "").slice(-1), T = h.split("");
      if (M) {
        T[C] = M;
        const E = T.join("").slice(0, n);
        i(E), E.length < n ? v(C + 1) : b && w("Code complete");
      }
    }, I = (C, f) => {
      if (f.key === "Backspace") {
        if (f.preventDefault(), h[C]) {
          const M = h.split("");
          M[C] = "", i(M.join(""));
        } else if (C > 0) {
          const M = h.split("");
          M[C - 1] = "", i(M.join("")), v(C - 1);
        }
      } else f.key === "ArrowLeft" && C > 0 ? (f.preventDefault(), v(C - 1)) : f.key === "ArrowRight" && C < n - 1 ? (f.preventDefault(), v(C + 1)) : f.key === "Home" ? (f.preventDefault(), v(0)) : f.key === "End" && (f.preventDefault(), v(n - 1));
    }, j = (C, f) => {
      f.preventDefault();
      const M = f.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!M) return;
      const T = h.split("");
      let E = 0;
      for (let X = 0; X < M.length && C + X < n; X++)
        T[C + X] = M[X] ?? "", E++;
      const A = T.join("");
      i(A), A.length >= n ? b && w("Code complete") : v(C + E);
    };
    return /* @__PURE__ */ k(
      "div",
      {
        className: [Yt.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": D ?? g,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Yt.cells, Yt[_]].join(" "), children: p.map((C, f) => /* @__PURE__ */ t(
            "input",
            {
              ref: (M) => {
                $.current[f] = M, f === 0 && x && (typeof x == "function" ? x(M) : x.current = M);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: C,
              disabled: c,
              "aria-label": `Digit ${f + 1} of ${n}`,
              "aria-invalid": l && C !== "" ? !0 : void 0,
              autoFocus: a && f === 0,
              className: [Yt.cell, Yt[`cell-${_}`], l ? Yt.invalid : null].filter(Boolean).join(" "),
              onChange: (M) => O(f, M.target.value),
              onKeyDown: (M) => I(f, M),
              onPaste: (M) => j(f, M),
              onFocus: (M) => M.target.select(),
              onBlur: () => {
                b && w("");
              }
            },
            f
          )) }),
          b && /* @__PURE__ */ t("span", { id: `${z}-live`, role: "status", "aria-live": "polite", className: Yt.live, children: y })
        ]
      }
    );
  }
), hh = "_wrapper_itqsj_1", mh = "_header_itqsj_7", gh = "_label_itqsj_15", yh = "_clear_itqsj_22", bh = "_canvas_itqsj_53", xh = "_disabled_itqsj_69", rn = {
  wrapper: hh,
  header: mh,
  label: gh,
  clear: yh,
  canvas: bh,
  disabled: xh
}, kb = He(
  function({
    value: n,
    defaultValue: r,
    onChange: o,
    penColor: s = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: _ = "Clear",
    ariaLabel: a = "Signature",
    width: c,
    height: g = 140,
    disabled: b = !1,
    className: d
  }, D) {
    const x = le(null), z = le(!1), S = le(!1), m = le({ x: 0, y: 0 });
    $e(() => {
      const i = x.current;
      if (!i) return;
      const v = window.devicePixelRatio || 1, O = Math.round((c ?? i.clientWidth) * v), I = Math.round(g * v);
      (i.width !== O || i.height !== I) && (i.width = O, i.height = I);
      const j = i.getContext("2d");
      if (!j) return;
      j.setTransform(v, 0, 0, v, 0, 0), j.lineWidth = l, j.strokeStyle = s, j.lineCap = "round", j.lineJoin = "round";
      const C = n ?? r;
      if (C) {
        const f = new Image();
        f.onload = () => {
          j.drawImage(f, 0, 0, i.clientWidth, g);
        }, f.src = C;
      }
    }, [n, r, s, l, c, g]);
    const u = () => {
      const i = x.current;
      if (!i) return;
      const v = i.toDataURL("image/png");
      o?.(v);
    }, h = () => {
      const i = x.current;
      if (!i) return;
      const v = i.getContext("2d");
      v && v.clearRect(0, 0, i.width, i.height), o?.("");
    };
    nr(D, () => ({
      clear: h,
      toDataURL: (i = "image/png", v) => x.current?.toDataURL(i, v) ?? ""
    }));
    const p = (i) => {
      const v = i.currentTarget.getBoundingClientRect();
      return { x: i.clientX - v.left, y: i.clientY - v.top };
    }, $ = (i) => {
      b || (i.preventDefault(), typeof i.currentTarget.setPointerCapture == "function" && i.currentTarget.setPointerCapture(i.pointerId), z.current = !0, S.current = !1, m.current = p(i));
    }, y = (i) => {
      if (!z.current) return;
      i.preventDefault();
      const v = i.currentTarget.getContext("2d");
      if (!v) return;
      const O = p(i);
      v.beginPath(), v.moveTo(m.current.x, m.current.y), v.lineTo(O.x, O.y), v.stroke(), m.current = O, S.current = !0;
    }, w = (i) => {
      z.current && (i.preventDefault(), z.current = !1, S.current && u());
    };
    return /* @__PURE__ */ k("div", { className: [rn.wrapper, d, b ? rn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ k("div", { className: rn.header, children: [
        /* @__PURE__ */ t("span", { className: rn.label, children: a }),
        /* @__PURE__ */ t("button", { type: "button", className: rn.clear, onClick: h, disabled: b, children: _ })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: x,
          role: "img",
          "aria-label": a,
          "aria-disabled": b || void 0,
          style: { width: c ? `${c}px` : void 0, height: `${g}px` },
          className: rn.canvas,
          onPointerDown: $,
          onPointerMove: y,
          onPointerUp: w,
          onPointerCancel: w
        }
      )
    ] });
  }
), vh = "_wrapper_1v23y_1", kh = "_trigger_1v23y_7", wh = "_list_1v23y_35", $h = "_row_1v23y_44", Nh = "_name_1v23y_59", Sh = "_size_1v23y_68", Dh = "_progress_1v23y_74", zh = "_fill_1v23y_82", Ch = "_status_1v23y_99", Mh = "_remove_1v23y_106", Mt = {
  wrapper: vh,
  trigger: kh,
  list: wh,
  row: $h,
  name: Nh,
  size: Sh,
  progress: Dh,
  fill: zh,
  status: Ch,
  remove: Mh
};
function Oh(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const wb = He(function({
  url: n,
  multiple: r = !1,
  parameterName: o = "files",
  auto: s = !0,
  headers: l,
  accept: _,
  chooseText: a = "Upload",
  children: c,
  onProgress: g,
  onComplete: b,
  onError: d
}, D) {
  const x = le(null), [z, S] = Y([]), m = le(/* @__PURE__ */ new Map()), u = (w, i) => {
    S((v) => v.map((O) => O.file.name === w ? { ...O, ...i } : O));
  }, h = (w) => {
    if (!n) return;
    const i = new XMLHttpRequest();
    m.current.set(w.file.name, i);
    const v = new FormData();
    if (v.append(o, w.file), i.upload.addEventListener("progress", (O) => {
      if (!O.lengthComputable) return;
      const I = Math.round(O.loaded / O.total * 100);
      u(w.file.name, { state: "uploading", progress: I }), g?.(w.file.name, I);
    }), i.addEventListener("load", () => {
      i.status >= 200 && i.status < 300 ? (u(w.file.name, { state: "complete", progress: 100 }), b?.(w.file.name)) : (u(w.file.name, { state: "error", message: `HTTP ${i.status}` }), d?.(w.file.name, `HTTP ${i.status}`));
    }), i.addEventListener("error", () => {
      u(w.file.name, { state: "error", message: "Network error" }), d?.(w.file.name, "Network error");
    }), l)
      for (const [O, I] of Object.entries(l))
        i.setRequestHeader(O, I);
    i.open("POST", n), i.send(v), u(w.file.name, { state: "uploading", progress: 0 });
  }, p = (w) => {
    if (!w) return;
    const i = [...w].map((v) => ({
      file: v,
      state: "pending",
      progress: 0
    }));
    S((v) => [...v, ...i]), x.current && (x.current.value = ""), s && i.forEach(h);
  }, $ = (w) => {
    m.current.get(w)?.abort(), m.current.delete(w), S((v) => v.filter((O) => O.file.name !== w));
  }, y = c ?? /* @__PURE__ */ k("button", { type: "button", className: Mt.trigger, onClick: () => x.current?.click(), children: [
    /* @__PURE__ */ t(ze, { name: "upload", size: 14 }),
    a
  ] });
  return nr(D, () => ({
    open: () => x.current?.click(),
    upload: () => z.forEach((w) => w.state === "pending" ? h(w) : null)
  })), /* @__PURE__ */ k("div", { className: Mt.wrapper, children: [
    y,
    /* @__PURE__ */ t(
      "input",
      {
        ref: x,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: _,
        "data-testid": "upload-input",
        onChange: (w) => p(w.target.files)
      }
    ),
    !c && z.length > 0 && /* @__PURE__ */ t("ul", { className: Mt.list, children: z.map(({ file: w, state: i, progress: v, message: O }) => /* @__PURE__ */ k("li", { className: Mt.row, "data-state": i, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: Mt.name, children: w.name }),
      /* @__PURE__ */ t("span", { className: Mt.size, children: Oh(w.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: Mt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": v,
          children: /* @__PURE__ */ t("span", { className: Mt.fill, style: { width: `${v}%` } })
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
          children: /* @__PURE__ */ t(ze, { name: "close", size: 14 })
        }
      )
    ] }, w.name)) })
  ] });
}), jh = "_zone_14tvz_1", Ih = "_dragging_14tvz_23", Eh = "_caption_14tvz_28", Th = "_browse_14tvz_40", Ah = "_disabled_14tvz_67", vn = {
  zone: jh,
  dragging: Ih,
  caption: Eh,
  browse: Th,
  disabled: Ah
};
function Lh(e, n) {
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
const $b = He(function({
  accept: n,
  multiple: r = !1,
  onDrop: o,
  label: s = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: _ = "Browse",
  disabled: a = !1,
  className: c
}, g) {
  const b = le(null), [d, D] = Y(!1), x = (h) => {
    if (!h || h.length === 0) return;
    const p = [...h].filter(($) => Lh($, n ?? ""));
    p.length !== 0 && o?.(p);
  }, z = (h) => {
    a || (h.preventDefault(), D(!0));
  }, S = (h) => {
    a || (h.preventDefault(), h.dataTransfer.dropEffect = "copy", D(!0));
  }, m = (h) => {
    a || h.currentTarget.contains(h.relatedTarget) || D(!1);
  }, u = (h) => {
    a || (h.preventDefault(), D(!1), x(h.dataTransfer.files));
  };
  return nr(g, () => ({
    open: () => b.current?.click()
  })), /* @__PURE__ */ k(
    "div",
    {
      role: "region",
      "aria-label": s,
      className: [vn.zone, d ? vn.dragging : null, a ? vn.disabled : null, c].filter(Boolean).join(" "),
      onDragEnter: z,
      onDragOver: S,
      onDragLeave: m,
      onDrop: u,
      children: [
        /* @__PURE__ */ t("p", { className: vn.caption, children: d ? l : s }),
        !a && /* @__PURE__ */ t("button", { type: "button", className: vn.browse, onClick: () => b.current?.click(), children: _ }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: b,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (h) => {
              x(h.target.files), h.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Bh = "_root_1dfo5_1", Ph = "_menubar_1dfo5_5", Rh = "_horizontal_1dfo5_15", qh = "_vertical_1dfo5_20", Fh = "_itemWrapper_1dfo5_25", Kh = "_item_1dfo5_25", Hh = "_disabled_1dfo5_61", Wh = "_icon_1dfo5_68", Vh = "_text_1dfo5_75", Uh = "_caret_1dfo5_79", Xh = "_hasChildren_1dfo5_85", Gh = "_submenu_1dfo5_94", Yh = "_submenuItem_1dfo5_118", lt = {
  root: Bh,
  menubar: Ph,
  horizontal: Rh,
  vertical: qh,
  itemWrapper: Fh,
  item: Kh,
  disabled: Hh,
  icon: Wh,
  text: Vh,
  caret: Uh,
  hasChildren: Xh,
  submenu: Gh,
  submenuItem: Yh
};
function kn(e) {
  return !!e.disabled;
}
function Nb({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: s = "Menu",
  className: l
}) {
  const _ = Ue(), a = le(null), c = le(null), [g, b] = Y(null), d = le(0), D = le(null), x = F(
    (u) => {
      const h = { text: u.text, value: u.value, path: u.path };
      (r ?? o)?.(h);
    },
    [r, o]
  ), z = F(
    (u, h) => {
      if (!kn(u)) {
        if (u.children && u.children.length > 0) {
          const p = g === h, $ = Date.now() - d.current < 600;
          if (p && $) {
            d.current = 0;
            return;
          }
          b((y) => y === h ? null : h);
          return;
        }
        x(u), b(null);
      }
    },
    [x, g]
  ), S = (u) => {
    kn(u) || u.children && u.children.length > 0 || (x(u), b(null));
  };
  $e(() => {
    if (g == null) return;
    const u = (h) => {
      a.current && !a.current.contains(h.target) && b(null);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [g]), $e(() => {
    if (D.current != null && g === D.current) {
      const u = `${_}-submenu-${g}`;
      document.getElementById(u)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), D.current = null;
    }
  }, [g, _]);
  const m = (u) => {
    const h = c.current;
    if (!h) return;
    const p = Array.from(
      h.querySelectorAll('[data-top="true"]')
    ).filter((w) => !w.hasAttribute("disabled") && w.getAttribute("aria-disabled") !== "true");
    if (g != null) {
      const w = `${_}-submenu-${g}`, i = document.getElementById(w);
      if (i) {
        const v = Array.from(i.querySelectorAll('[role="menuitem"]')).filter(
          (j) => j.getAttribute("aria-disabled") !== "true"
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
          u.preventDefault(), b(null), h.querySelector(`[data-top="true"][data-index="${g}"]`)?.focus();
          return;
        }
        if (u.key === "Enter" || u.key === " ")
          return;
      }
      if (u.key === "Escape") {
        u.preventDefault(), b(null);
        return;
      }
    }
    const $ = document.activeElement, y = $ ? p.indexOf($) : -1;
    if (u.key === "ArrowRight" || n === "vertical" && u.key === "ArrowDown") {
      if (u.preventDefault(), p.length === 0) return;
      const w = y === -1 ? 0 : (y + 1) % p.length;
      p[w]?.focus();
      return;
    }
    if (u.key === "ArrowLeft" || n === "vertical" && u.key === "ArrowUp") {
      if (u.preventDefault(), p.length === 0) return;
      const w = y === -1 ? p.length - 1 : (y - 1 + p.length) % p.length;
      p[w]?.focus();
      return;
    }
    if (u.key === "ArrowDown") {
      if (y >= 0) {
        const w = $?.getAttribute("data-index"), i = w != null ? Number(w) : -1, v = i >= 0 ? e[i] : void 0;
        v?.children && v.children.length > 0 && !kn(v) && (u.preventDefault(), D.current = i, b(i));
      }
      return;
    }
    if (u.key === "Home") {
      u.preventDefault(), p[0]?.focus();
      return;
    }
    if (u.key === "End") {
      u.preventDefault(), p[p.length - 1]?.focus();
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
          onKeyDown: m,
          children: e.map((u, h) => {
            const p = !!u.children && u.children.length > 0, $ = g === h, y = kn(u), w = `${_}-submenu-${h}`;
            return /* @__PURE__ */ k(
              "div",
              {
                className: lt.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && p && !y && (d.current = Date.now(), b(h));
                },
                onMouseLeave: () => {
                  n === "horizontal" && p && b((i) => i === h ? null : i);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ k(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": h,
                      "data-dx-menu-item": "",
                      "aria-disabled": y || void 0,
                      "aria-haspopup": p ? "menu" : void 0,
                      "aria-expanded": p ? $ : void 0,
                      "aria-controls": p ? w : void 0,
                      tabIndex: y ? -1 : 0,
                      disabled: y,
                      className: [lt.item, y ? lt.disabled : null, p ? lt.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => z(u, h),
                      children: [
                        u.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: u.icon }) : null,
                        /* @__PURE__ */ t("span", { className: lt.text, children: u.text }),
                        p ? /* @__PURE__ */ t("span", { className: lt.caret, "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 10 }) }) : null
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
                      "aria-label": u.text,
                      children: u.children?.map((i, v) => {
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
                            onClick: () => S(i),
                            children: [
                              i.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: i.icon }) : null,
                              /* @__PURE__ */ t("span", { className: lt.text, children: i.text })
                            ]
                          },
                          `${i.text}-${v}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${u.text}-${h}`
            );
          })
        }
      )
    }
  );
}
const Zh = "_root_1hs3b_1", Jh = "_list_1hs3b_9", Qh = "_item_1hs3b_14", em = "_trigger_1hs3b_18", tm = "_disabled_1hs3b_44", nm = "_expanded_1hs3b_51", rm = "_icon_1hs3b_55", om = "_text_1hs3b_66", sm = "_caret_1hs3b_73", am = "_open_1hs3b_80", lm = "_submenu_1hs3b_84", im = "_submenuItem_1hs3b_93", cm = "_nestedWrapper_1hs3b_122", dm = "_nestedTrigger_1hs3b_127", um = "_nestedMenu_1hs3b_152", _m = "_iconOnly_1hs3b_160", je = {
  root: Zh,
  list: Jh,
  item: Qh,
  trigger: em,
  disabled: tm,
  expanded: nm,
  icon: rm,
  text: om,
  caret: sm,
  open: am,
  submenu: lm,
  submenuItem: im,
  nestedWrapper: cm,
  nestedTrigger: dm,
  nestedMenu: um,
  iconOnly: _m
};
function fm({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: o
}) {
  const s = !!e.children && e.children.length > 0, [l, _] = Y(!1), a = `${n}-nested-${r}`, c = !!e.disabled, g = () => {
    if (!c) {
      if (s) {
        _((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, b = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), g()) : d.key === "Escape" && l && (d.preventDefault(), _(!1));
  };
  return s ? /* @__PURE__ */ k("div", { className: je.nestedWrapper, children: [
    /* @__PURE__ */ k(
      "button",
      {
        type: "button",
        "aria-expanded": l,
        "aria-controls": a,
        "aria-disabled": c || void 0,
        disabled: c,
        tabIndex: c ? -1 : 0,
        className: [je.nestedTrigger, c ? je.disabled : null].filter(Boolean).join(" "),
        onClick: g,
        onKeyDown: b,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: je.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: je.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [je.caret, l ? je.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 10 }) })
        ]
      }
    ),
    l ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: je.nestedMenu, children: e.children?.map((d, D) => {
      const x = !!d.disabled;
      return /* @__PURE__ */ k(
        "div",
        {
          role: "menuitem",
          "aria-disabled": x || void 0,
          tabIndex: x ? -1 : 0,
          className: [je.submenuItem, x ? je.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            x || d.children && d.children.length > 0 || o({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (z) => {
            if (z.key === "Enter" || z.key === " ") {
              if (z.preventDefault(), x) return;
              o({ text: d.text, value: d.value, path: d.path });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ t("span", { className: je.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ t("span", { className: je.text, children: d.text })
          ]
        },
        `${d.text}-${D}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ k(
    "div",
    {
      role: "menuitem",
      "aria-disabled": c || void 0,
      tabIndex: c ? -1 : 0,
      className: [je.submenuItem, c ? je.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        c || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), c) return;
          o({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ t("span", { className: je.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ t("span", { className: je.text, children: e.text })
      ]
    }
  );
}
function Sb({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: o,
  ShowArrow: s,
  displayStyle: l,
  DisplayStyle: _,
  onClick: a,
  Click: c,
  ariaLabel: g = "Panel menu",
  className: b
}) {
  const d = Ue(), D = n ?? r ?? !1, x = o ?? s ?? !0, z = l ?? _ ?? "iconAndText", [S, m] = Y([]), u = F(
    ($) => {
      const y = { text: $.text, value: $.value, path: $.path };
      (a ?? c)?.(y);
    },
    [a, c]
  ), h = ($, y, w) => {
    if (!w.disabled) {
      if (y) {
        m((i) => i.includes($) ? i.filter((O) => O !== $) : D ? [...i, $] : [$]);
        return;
      }
      u(w);
    }
  }, p = ($) => {
    const y = $.target;
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "Escape") {
        const w = y.getAttribute("aria-controls");
        if (w) {
          const i = w.match(/-panel-(\d+)$/);
          if (i) {
            const v = Number(i[1]);
            m((O) => O.filter((I) => I !== v));
          }
        } else {
          const i = y.closest('[role="menu"]');
          if (i) {
            const O = i.id.match(/-panel-(\d+)$/);
            if (O) {
              const I = Number(O[1]);
              m((C) => C.filter((f) => f !== I)), document.getElementById(`${d}-trigger-${I}`)?.focus();
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
        const v = $.key === "ArrowDown" ? 1 : -1;
        w[(i + v + w.length) % w.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": g,
      className: [
        je.root,
        z === "icon" ? je.iconOnly : je.iconAndText,
        b
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("div", { className: je.list, role: "presentation", children: e.map(($, y) => {
        const w = !!$.children && $.children.length > 0, i = S.includes(y), v = !!$.disabled, O = `${d}-panel-${y}`, I = `${d}-trigger-${y}`;
        return /* @__PURE__ */ k("div", { className: je.item, children: [
          /* @__PURE__ */ k(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": w ? i : void 0,
              "aria-controls": w ? O : void 0,
              "aria-disabled": v || void 0,
              disabled: v,
              tabIndex: v ? -1 : 0,
              className: [
                je.trigger,
                v ? je.disabled : null,
                i ? je.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => h(y, w, $),
              children: [
                $.icon ? /* @__PURE__ */ t("span", { className: je.icon, "aria-hidden": "true", children: $.icon }) : null,
                z === "iconAndText" ? /* @__PURE__ */ t("span", { className: je.text, children: $.text }) : /* @__PURE__ */ t("span", { className: je.text, "aria-label": $.text, children: $.icon ? null : $.text.slice(0, 1) }),
                w && x ? /* @__PURE__ */ t("span", { className: [je.caret, i ? je.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: 10 }) }) : null
              ]
            }
          ),
          w && i ? /* @__PURE__ */ t("div", { id: O, role: "menu", className: je.submenu, "aria-labelledby": I, children: $.children?.map((j, C) => /* @__PURE__ */ t(
            fm,
            {
              item: j,
              baseId: d,
              parentKey: `${y}-${C}`,
              onEmit: u
            },
            `${j.text}-${C}`
          )) }) : null
        ] }, `${$.text}-${y}`);
      }) })
    }
  );
}
const pm = "_root_pjwno_1", hm = "_trigger_pjwno_7", mm = "_defaultTrigger_pjwno_40", gm = "_avatar_pjwno_46", ym = "_menu_pjwno_58", bm = "_item_pjwno_74", xm = "_disabled_pjwno_88", vm = "_active_pjwno_97", km = "_icon_pjwno_107", wm = "_text_pjwno_114", Ot = {
  root: pm,
  trigger: hm,
  defaultTrigger: mm,
  avatar: gm,
  menu: ym,
  item: bm,
  disabled: xm,
  active: vm,
  icon: km,
  text: wm
};
function Db({
  items: e,
  trigger: n,
  Template: r,
  onClick: o,
  Click: s,
  ariaLabel: l = "Profile menu",
  className: _
}) {
  const a = Ue(), c = `${a}-menu`, g = le(null), b = le(null), [d, D] = Y(!1), [x, z] = Y(-1), S = n ?? r, m = e.map((i, v) => i.disabled ? -1 : v).filter((i) => i >= 0), u = F(
    (i) => {
      if (i.disabled) return;
      const v = { text: i.text, path: i.path };
      (o ?? s)?.(v), D(!1), b.current?.focus();
    },
    [o, s]
  ), h = F(() => {
    z(m[0] ?? -1), D(!0);
  }, [m]), p = F(() => {
    D(!1), z(-1), b.current?.focus();
  }, []);
  $e(() => {
    if (!d) return;
    const i = (v) => {
      g.current && !g.current.contains(v.target) && (D(!1), z(-1));
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [d]), $e(() => {
    if (!d) return;
    const i = (v) => {
      v.key === "Escape" && (v.preventDefault(), p());
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [d, p]);
  const $ = (i) => {
    if (m.length === 0) return;
    const v = m.indexOf(x), O = v === -1 ? 0 : (v + i + m.length) % m.length, I = m[O];
    I != null && z(I);
  }, y = (i) => {
    if (!d) {
      (i.key === "ArrowDown" || i.key === "Enter" || i.key === " ") && (i.preventDefault(), h());
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
        i.preventDefault(), m[0] != null && z(m[0]);
        break;
      case "End":
        i.preventDefault(), m[m.length - 1] != null && z(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        if (i.preventDefault(), x >= 0) {
          const v = e[x];
          v && !v.disabled && u(v);
        }
        break;
      case "Tab":
        D(!1), z(-1);
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
        i.preventDefault(), m[0] != null && z(m[0]);
        break;
      case "End":
        i.preventDefault(), m[m.length - 1] != null && z(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        if (i.preventDefault(), x >= 0) {
          const v = e[x];
          v && !v.disabled && u(v);
        }
        break;
      case "Escape":
        i.preventDefault(), p();
        break;
      case "Tab":
        D(!1), z(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: g,
      className: [Ot.root, _].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ k("nav", { "aria-label": l, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: b,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": c,
            "aria-label": l,
            className: Ot.trigger,
            onClick: () => d ? p() : h(),
            onKeyDown: y,
            children: S ?? /* @__PURE__ */ k("span", { className: Ot.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: Ot.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        d ? /* @__PURE__ */ t(
          "div",
          {
            id: c,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": x >= 0 ? `${a}-item-${x}` : void 0,
            className: Ot.menu,
            onKeyDown: w,
            tabIndex: -1,
            children: e.map((i, v) => {
              const O = !!i.disabled, I = v === x;
              return /* @__PURE__ */ k(
                "div",
                {
                  id: `${a}-item-${v}`,
                  role: "menuitem",
                  "aria-disabled": O || void 0,
                  tabIndex: O ? -1 : 0,
                  className: [Ot.item, I ? Ot.active : null, O ? Ot.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    O || u(i);
                  },
                  onMouseEnter: () => {
                    O || z(v);
                  },
                  children: [
                    i.icon ? /* @__PURE__ */ t("span", { className: Ot.icon, "aria-hidden": "true", children: i.icon }) : null,
                    /* @__PURE__ */ t("span", { className: Ot.text, children: i.text })
                  ]
                },
                `${i.text}-${v}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const $m = "_root_5fmpv_1", Nm = "_bottomRight_5fmpv_11", Sm = "_bottomLeft_5fmpv_16", Dm = "_topRight_5fmpv_21", zm = "_topLeft_5fmpv_26", Cm = "_menu_5fmpv_31", Mm = "_itemWrapper_5fmpv_48", Om = "_tooltip_5fmpv_54", jm = "_main_5fmpv_76", Im = "_mainIcon_5fmpv_104", Em = "_mainOpen_5fmpv_109", Tm = "_item_5fmpv_48", Am = "_disabled_5fmpv_141", Lm = "_itemIcon_5fmpv_148", dt = {
  root: $m,
  bottomRight: Nm,
  bottomLeft: Sm,
  topRight: Dm,
  topLeft: zm,
  menu: Cm,
  itemWrapper: Mm,
  tooltip: Om,
  main: jm,
  mainIcon: Im,
  mainOpen: Em,
  item: Tm,
  disabled: Am,
  itemIcon: Lm
};
function zb({
  items: e,
  position: n,
  Position: r,
  icon: o = "+",
  onClick: s,
  Click: l,
  ariaLabel: _ = "Open menu",
  className: a
}) {
  const c = n ?? r ?? "bottom-right", b = `${Ue()}-menu`, d = le(null), D = le(null), [x, z] = Y(!1), S = F(
    (p) => {
      if (p.disabled) return;
      const $ = { text: p.text, value: p.value };
      (s ?? l)?.($), z(!1), D.current?.focus();
    },
    [s, l]
  );
  $e(() => {
    if (!x) return;
    const p = ($) => {
      d.current && !d.current.contains($.target) && z(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [x]), $e(() => {
    if (!x) return;
    const p = ($) => {
      $.key === "Escape" && (z(!1), D.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [x]);
  const m = c === "bottom-right" ? dt.bottomRight : c === "bottom-left" ? dt.bottomLeft : c === "top-right" ? dt.topRight : dt.topLeft, u = (p) => {
    !x && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), z(!0)) : x && p.key === "Escape" && (p.preventDefault(), z(!1));
  }, h = (p) => {
    p.key === "Escape" && (p.preventDefault(), z(!1), D.current?.focus());
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: d,
      className: [dt.root, m, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        x ? /* @__PURE__ */ t(
          "div",
          {
            id: b,
            role: "menu",
            "aria-label": _,
            className: dt.menu,
            onKeyDown: h,
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
                    onClick: () => S(p),
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
            "aria-expanded": x,
            "aria-controls": b,
            "aria-label": _,
            onClick: () => z((p) => !p),
            onKeyDown: u,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [dt.mainIcon, x ? dt.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const Bm = "_root_1qf28_1", Pm = "_list_1qf28_5", Rm = "_item_1qf28_15", qm = "_link_1qf28_22", Fm = "_linkButton_1qf28_23", Km = "_current_1qf28_24", Hm = "_disabled_1qf28_68", Wm = "_icon_1qf28_74", Vm = "_text_1qf28_81", Um = "_separator_1qf28_85", Ve = {
  root: Bm,
  list: Pm,
  item: Rm,
  link: qm,
  linkButton: Fm,
  current: Km,
  disabled: Hm,
  icon: Wm,
  text: Vm,
  separator: Um
};
function Cb({ items: e, onClick: n, Click: r, ariaLabel: o = "Breadcrumb", className: s }) {
  const l = n ?? r, _ = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": o, className: [Ve.root, s].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: Ve.list, children: e.map((a, c) => {
    const g = c === e.length - 1, b = !!a.disabled;
    return /* @__PURE__ */ k("li", { className: Ve.item, children: [
      g ? b ? /* @__PURE__ */ k(
        "span",
        {
          className: [Ve.current, Ve.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ve.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : a.path ? /* @__PURE__ */ k(
        "a",
        {
          href: a.path,
          className: Ve.link,
          "aria-current": "page",
          onClick: (d) => {
            d.preventDefault(), _(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ve.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ve.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ k(
        "span",
        {
          className: Ve.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ve.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : b ? /* @__PURE__ */ k(
        "span",
        {
          className: [Ve.link, Ve.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ve.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ve.text, children: a.text })
          ]
        }
      ) : a.path ? /* @__PURE__ */ k(
        "a",
        {
          href: a.path,
          className: Ve.link,
          onClick: (d) => {
            d.preventDefault(), _(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ve.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ve.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ k(
        "button",
        {
          type: "button",
          className: Ve.linkButton,
          tabIndex: 0,
          onClick: () => _(a),
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ve.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ve.text, children: a.text })
          ]
        }
      ),
      g ? null : /* @__PURE__ */ t("span", { className: Ve.separator, "aria-hidden": "true", children: "/" })
    ] }, `${a.text}-${c}`);
  }) }) });
}
const Xm = "_root_yiemy_1", Gm = "_list_yiemy_5", Ym = "_item_yiemy_15", Zm = "_connector_yiemy_21", Jm = "_connectorCompleted_yiemy_30", Qm = "_step_yiemy_34", eg = "_active_yiemy_69", tg = "_completed_yiemy_75", ng = "_circle_yiemy_79", rg = "_check_yiemy_109", og = "_icon_yiemy_114", sg = "_number_yiemy_119", ag = "_text_yiemy_124", ut = {
  root: Xm,
  list: Gm,
  item: Ym,
  connector: Zm,
  connectorCompleted: Jm,
  step: Qm,
  active: eg,
  completed: tg,
  circle: ng,
  check: rg,
  icon: og,
  number: sg,
  text: ag
};
function Mb({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: s,
  Linear: l,
  onChange: _,
  Change: a,
  onSelectedIndexChange: c,
  ariaLabel: g = "Steps",
  className: b
}) {
  const d = s ?? l ?? !1, D = n ?? r, x = D !== void 0, [z, S] = Y(() => Math.min(Math.max(0, D ?? o), Math.max(0, e.length - 1))), u = Math.min(Math.max(0, x ? D : z), Math.max(0, e.length - 1)), h = le(null), p = F(
    (w) => {
      const i = Math.min(Math.max(0, w), Math.max(0, e.length - 1));
      x || S(i), (_ ?? a ?? c)?.(i);
    },
    [x, _, a, c, e.length]
  ), $ = F(
    (w, i) => !!(i.disabled || d && w > u + 1),
    [d, u]
  ), y = (w) => {
    const i = Array.from(
      w.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), v = document.activeElement, O = v ? i.indexOf(v) : -1;
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
      "aria-label": g,
      className: [ut.root, b].filter(Boolean).join(" "),
      onKeyDown: y,
      children: /* @__PURE__ */ t("ol", { ref: h, role: "list", className: ut.list, children: e.map((w, i) => {
        const v = i === u, O = i < u, I = $(i, w);
        return /* @__PURE__ */ k("li", { role: "listitem", className: ut.item, children: [
          i > 0 ? /* @__PURE__ */ t("span", { className: [ut.connector, O ? ut.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ k(
            "button",
            {
              type: "button",
              "data-step": i,
              "aria-current": v ? "step" : void 0,
              "aria-disabled": I ? "true" : void 0,
              disabled: I,
              tabIndex: I ? -1 : 0,
              className: [
                ut.step,
                v ? ut.active : null,
                O ? ut.completed : null,
                I ? ut.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                I || p(i);
              },
              children: [
                /* @__PURE__ */ t("span", { className: ut.circle, "aria-hidden": "true", children: O ? /* @__PURE__ */ t("span", { className: ut.check, "aria-hidden": "true", children: /* @__PURE__ */ t(ze, { name: "check", size: "sm" }) }) : w.icon ? /* @__PURE__ */ t("span", { className: ut.icon, children: w.icon }) : /* @__PURE__ */ t("span", { className: ut.number, children: i + 1 }) }),
                /* @__PURE__ */ t("span", { className: ut.text, children: w.text })
              ]
            }
          )
        ] }, `${w.text}-${i}`);
      }) })
    }
  );
}
const lg = "_root_1fegn_1", ig = "_horizontal_1fegn_13", cg = "_vertical_1fegn_17", dg = "_pane_1fegn_21", ug = "_handle_1fegn_31", _g = "_handleHorizontal_1fegn_51", fg = "_handleVertical_1fegn_57", pg = "_handleGrip_1fegn_63", hg = "_handleCollapseHint_1fegn_75", mg = "_collapseBtn_1fegn_79", gg = "_collapseBtnCollapsed_1fegn_109", $t = {
  root: lg,
  horizontal: ig,
  vertical: cg,
  pane: dg,
  handle: ug,
  handleHorizontal: _g,
  handleVertical: fg,
  handleGrip: pg,
  handleCollapseHint: hg,
  collapseBtn: mg,
  collapseBtnCollapsed: gg
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
function Ob({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: o,
  Resize: s,
  onCollapse: l,
  Collapse: _,
  ariaLabel: a = "Splitter",
  className: c
}) {
  const g = e ?? n ?? "horizontal", b = g === "horizontal", d = le(null), D = F(() => {
    const f = r.length;
    if (f === 0) return [];
    const M = r.map((E) => E.size ? wn(E.size, 100 / f) : 100 / f), T = M.reduce((E, A) => E + A, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? M.map((E) => E / T * 100) : M;
  }, [r]), [x, z] = Y(() => D()), [S, m] = Y(() => r.map((f) => !!f.collapsed)), u = le(x);
  $e(() => {
    m(r.map((f) => !!f.collapsed));
  }, [r]);
  const h = F(() => r.map((f) => wn(f.min, 0)), [r]), p = F(() => r.map((f) => wn(f.max, 100)), [r]), $ = F(
    (f, M) => {
      const T = { paneIndex: f, newSize: M, cancel: !1 };
      return (o ?? s)?.(T), !T.cancel;
    },
    [o, s]
  ), y = F(
    (f, M) => {
      const T = { paneIndex: f, collapse: M, cancel: !1 };
      return (l ?? _)?.(T), !T.cancel;
    },
    [l, _]
  ), w = F(
    (f) => {
      const M = !S[f];
      y(f, M) && (M ? (u.current = [...x], m((T) => {
        const E = [...T];
        return E[f] !== void 0 && (E[f] = !0), E;
      }), z((T) => {
        const E = [...T], A = E[f] ?? 0, X = f < E.length - 1 ? f + 1 : f - 1;
        if (X >= 0 && X < E.length) {
          const H = E[X] ?? 0;
          E[X] = H + A, E[f] = 0;
        } else
          E[f] = 0;
        return E;
      })) : (m((T) => {
        const E = [...T];
        return E[f] !== void 0 && (E[f] = !1), E;
      }), z(() => {
        const T = [...u.current];
        return T.length !== r.length ? r.map(() => 100 / r.length) : T;
      })));
    },
    [S, x, r.length, y]
  ), i = le(null), v = F(
    (f, M, T) => {
      const E = d.current;
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
      for (let Z = 0; Z < f; Z++) {
        const J = x[Z];
        J !== void 0 && (H += J);
      }
      return X - H;
    },
    [b, x]
  ), O = (f, M) => {
    M.preventDefault();
    const T = M.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(M.pointerId), i.current = { handleIndex: f, pointerId: M.pointerId };
  }, I = (f) => {
    if (!i.current || i.current.pointerId !== f.pointerId) return;
    f.preventDefault();
    const M = i.current.handleIndex, T = v(M, f.clientX, f.clientY);
    if (T == null) return;
    const E = h(), A = p(), X = E[M] ?? 0, H = A[M] ?? 100, re = M + 1, Z = E[re] ?? 0, J = A[re] ?? 100, Q = x[M] ?? 0, G = x[re] ?? 0, K = Q + G;
    if (K <= 0) return;
    let L = Lt(T, X, H), oe = K - L;
    if (oe < Z) {
      if (oe = Z, L = K - oe, L < X || L > H) return;
    } else if (oe > J && (oe = J, L = K - oe, L < X || L > H))
      return;
    L = Lt(L, X, H), oe = K - L, $(M, L) && z((ce) => {
      const ee = [...ce];
      return ee[M] = L, ee[re] = oe, ee;
    });
  }, j = (f) => {
    !i.current || i.current.pointerId !== f.pointerId || (i.current = null);
  }, C = (f, M) => {
    const T = h(), E = p(), A = f, X = f + 1, H = x[A] ?? 0, re = x[X] ?? 0, Z = H + re;
    let J = 0;
    const Q = !!r[A]?.collapsible, G = !!r[X]?.collapsible;
    if (b ? M.key === "ArrowLeft" ? J = -5 : M.key === "ArrowRight" && (J = 5) : M.key === "ArrowUp" ? J = -5 : M.key === "ArrowDown" && (J = 5), M.key === "Home") {
      M.preventDefault();
      let K = T[A] ?? 0, L = Z - K;
      if (L = Lt(L, T[X] ?? 0, E[X] ?? 100), K = Z - L, K = Lt(K, T[A] ?? 0, E[A] ?? 100), !$(A, K)) return;
      z((oe) => {
        const ce = [...oe];
        return ce[A] = K, ce[X] = L, ce;
      });
      return;
    }
    if (M.key === "End") {
      M.preventDefault();
      let K = E[A] ?? 100;
      K = Math.min(K, Z - (T[X] ?? 0));
      let L = Z - K;
      if (L = Lt(L, T[X] ?? 0, E[X] ?? 100), K = Z - L, K = Lt(K, T[A] ?? 0, E[A] ?? 100), !$(A, K)) return;
      z((oe) => {
        const ce = [...oe];
        return ce[A] = K, ce[X] = L, ce;
      });
      return;
    }
    if ((M.key === "Enter" || M.key === " ") && (Q || G)) {
      M.preventDefault(), w(Q ? A : X);
      return;
    }
    if (J !== 0) {
      M.preventDefault();
      let K = H + J, L = Z - K;
      const oe = T[A] ?? 0, ce = E[A] ?? 100, ee = T[X] ?? 0, ue = E[X] ?? 100;
      if (K = Lt(K, oe, ce), L = Z - K, (L < ee || L > ue) && (L = Lt(L, ee, ue), K = Z - L, K = Lt(K, oe, ce), L = Z - K), !$(A, K)) return;
      z((me) => {
        const ke = [...me];
        return ke[A] = K, ke[X] = L, ke;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: d,
      className: [$t.root, b ? $t.horizontal : $t.vertical, c].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((f, M) => {
        const T = !!S[M], E = T ? 0 : x[M] ?? 100 / r.length, A = T ? { display: "none" } : b ? { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, X = wn(f.min, 0), H = wn(f.max, 100), re = M < r.length - 1, Z = !!r[M + 1]?.collapsible;
        return /* @__PURE__ */ k("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ k(
            "div",
            {
              role: "group",
              "aria-label": f.label ?? `Pane ${M + 1}`,
              className: $t.pane,
              style: A,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : f.children,
                f.collapsible && !T ? /* @__PURE__ */ t(
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
                f.collapsible && T ? /* @__PURE__ */ t(
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
          T && f.collapsible ? (
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
              "aria-orientation": g,
              "aria-valuemin": X,
              "aria-valuemax": H,
              "aria-valuenow": Math.round(E),
              "aria-label": `Resize handle ${M + 1}`,
              tabIndex: T || S[M + 1] ? -1 : 0,
              className: [$t.handle, b ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (J) => O(M, J),
              onPointerMove: I,
              onPointerUp: j,
              onKeyDown: (J) => C(M, J),
              children: [
                /* @__PURE__ */ t("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (f.collapsible || Z) && /* @__PURE__ */ t("span", { className: $t.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, M);
      })
    }
  );
}
const yg = "_root_h36xh_1", bg = "_list_h36xh_5", xg = "_vertical_h36xh_14", vg = "_horizontal_h36xh_20", kg = "_item_h36xh_28", wg = "_link_h36xh_32", $g = "_active_h36xh_57", on = {
  root: yg,
  list: bg,
  vertical: xg,
  horizontal: vg,
  item: kg,
  link: wg,
  active: $g
};
function jb({
  items: e,
  selector: n,
  Selector: r,
  orientation: o,
  Orientation: s,
  onClick: l,
  Click: _,
  ariaLabel: a = "Table of contents",
  className: c
}) {
  const g = n ?? r, b = o ?? s ?? "vertical", [d, D] = Y(() => e[0]?.selector ?? null), x = le(d);
  x.current = d;
  const z = F(
    (S, m) => {
      if (D(S.selector), (l ?? _)?.({ text: S.text, selector: S.selector }), m) {
        try {
          m.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          m.scrollIntoView();
        }
        const h = m;
        h.getAttribute("tabindex") == null && h.tabIndex === -1 || h.tabIndex < 0 ? (h.getAttribute("tabindex"), h.setAttribute("tabindex", "-1"), h.focus({ preventScroll: !0 })) : h.focus({ preventScroll: !0 });
      }
    },
    [l, _]
  );
  return $e(() => {
    if (e.length === 0) return;
    const m = (() => {
      if (g) {
        const y = document.querySelector(g);
        if (y) return y;
      }
      return window;
    })();
    let u = null;
    const h = /* @__PURE__ */ new Map(), p = () => {
      let y = null, w = null;
      for (const v of e) {
        const O = document.querySelector(v.selector);
        if (!O) continue;
        h.set(v.selector, O);
        const I = O.getBoundingClientRect();
        let j = I.top;
        if (m !== window) {
          const C = m.getBoundingClientRect();
          j = I.top - C.top;
        }
        j <= 80 ? (!w || j > w.el.getBoundingClientRect().top - (m !== window ? m.getBoundingClientRect().top : 0)) && (w = { sel: v.selector, el: O }) : (!y || j < y.top) && (y = { sel: v.selector, top: j });
      }
      const i = w?.sel ?? y?.sel ?? e[0]?.selector ?? null;
      i && i !== x.current && D(i);
    }, $ = () => {
      p();
    };
    if (typeof IntersectionObserver < "u") {
      const y = m === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: m, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      u = new IntersectionObserver((w) => {
        const i = w.filter((v) => v.isIntersecting).sort((v, O) => v.boundingClientRect.top - O.boundingClientRect.top);
        if (i[0]) {
          const v = i[0].target;
          for (const O of e) {
            if (document.querySelector(O.selector) === v) {
              D(O.selector);
              break;
            }
            if (O.selector.startsWith("#") && v.id === O.selector.slice(1)) {
              D(O.selector);
              break;
            }
          }
        } else
          p();
      }, y);
      for (const w of e) {
        const i = document.querySelector(w.selector);
        i && (u.observe(i), h.set(w.selector, i));
      }
    }
    return m === window ? (window.addEventListener("scroll", $, { passive: !0 }), p(), () => {
      window.removeEventListener("scroll", $), u?.disconnect();
    }) : (m.addEventListener("scroll", $, { passive: !0 }), p(), () => {
      m.removeEventListener("scroll", $), u?.disconnect();
    });
  }, [e, g]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [on.root, on[b], c].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: on.list, children: e.map((S) => {
    const m = S.selector === d;
    return /* @__PURE__ */ t("li", { className: on.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: S.selector.startsWith("#") || S.selector.startsWith(".") ? S.selector : `#${S.selector}`,
        className: [on.link, m ? on.active : null].filter(Boolean).join(" "),
        "aria-current": m ? "location" : void 0,
        onClick: (u) => {
          u.preventDefault();
          const h = document.querySelector(S.selector);
          z(S, h);
        },
        children: S.text
      }
    ) }, `${S.text}-${S.selector}`);
  }) }) });
}
const Ng = "_root_c923v_1", Sg = "_viewport_c923v_17", Dg = "_slide_c923v_24", zg = "_active_c923v_33", Cg = "_arrow_c923v_37", Mg = "_prev_c923v_71", Og = "_next_c923v_75", jg = "_pauseBtn_c923v_79", Ig = "_indicators_c923v_110", Eg = "_indicator_c923v_110", Tg = "_indicatorActive_c923v_145", Nt = {
  root: Ng,
  viewport: Sg,
  slide: Dg,
  active: zg,
  arrow: Cg,
  prev: Mg,
  next: Og,
  pauseBtn: jg,
  indicators: Ig,
  indicator: Eg,
  indicatorActive: Tg
};
function Ib({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: s,
  Auto: l,
  interval: _,
  Interval: a,
  pauseOnHover: c,
  PauseOnHover: g,
  showArrows: b,
  ShowArrows: d,
  showIndicators: D,
  ShowIndicators: x,
  onChange: z,
  Change: S,
  ariaLabel: m = "Carousel",
  className: u
}) {
  const h = n ?? r, p = h !== void 0, [$, y] = Y(() => Math.min(Math.max(0, h ?? o), Math.max(0, e.length - 1))), w = p ? h : $, i = e.length === 0 ? 0 : Math.min(Math.max(0, w), e.length - 1), v = s ?? l ?? !1, O = _ ?? a ?? 3e3, I = c ?? g ?? !0, j = b ?? d ?? !0, C = D ?? x ?? !0, [f, M] = Y(!1), [T, E] = Y(!1), A = f || T, X = le(null), H = Ue(), re = F(
    (ee) => {
      const ue = e.length === 0 ? 0 : (ee % e.length + e.length) % e.length;
      p || y(ue), (z ?? S)?.(ue);
    },
    [p, z, S, e.length]
  ), Z = F(() => {
    re(i - 1);
  }, [re, i]), J = F(() => {
    re(i + 1);
  }, [re, i]), Q = F(
    (ee) => {
      re(ee);
    },
    [re]
  );
  $e(() => {
    if (!v || A || e.length <= 1) return;
    const ee = setInterval(() => {
      re(i + 1);
    }, O);
    return () => clearInterval(ee);
  }, [v, A, O, i, re, e.length]);
  const G = (ee) => {
    e.length !== 0 && (ee.key === "ArrowLeft" ? (ee.preventDefault(), Z()) : ee.key === "ArrowRight" ? (ee.preventDefault(), J()) : ee.key === "Home" ? (ee.preventDefault(), Q(0)) : ee.key === "End" && (ee.preventDefault(), Q(e.length - 1)));
  }, K = () => {
    I && v && E(!0);
  }, L = () => {
    I && v && E(!1);
  }, oe = () => {
    I && v && E(!0);
  }, ce = () => {
    I && v && E(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ k(
    "div",
    {
      ref: X,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": m,
      tabIndex: 0,
      className: [Nt.root, u].filter(Boolean).join(" "),
      onKeyDown: G,
      onMouseEnter: K,
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
        j && e.length > 1 ? /* @__PURE__ */ k(Oe, { children: [
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
        v ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": f ? "Resume" : "Pause",
            "aria-pressed": f,
            onClick: () => M((ee) => !ee),
            children: f ? "▶" : "⏸"
          }
        ) : null,
        C && e.length > 1 ? /* @__PURE__ */ t("div", { className: Nt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ee, ue) => {
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
const Ag = "_root_yo0cc_1", Lg = "_group_yo0cc_20", Bg = "_itemWrapper_yo0cc_30", Pg = "_treeitem_yo0cc_34", Rg = "_disabled_yo0cc_50", qg = "_selected_yo0cc_60", Fg = "_caret_yo0cc_66", Kg = "_caretIcon_yo0cc_113", Hg = "_caretOpen_yo0cc_120", Wg = "_caretPlaceholder_yo0cc_124", Vg = "_label_yo0cc_130", Ug = "_loading_yo0cc_137", Xg = "_loadingRow_yo0cc_143", Gg = "_empty_yo0cc_149", it = {
  root: Ag,
  group: Lg,
  itemWrapper: Bg,
  treeitem: Pg,
  disabled: Rg,
  selected: qg,
  caret: Fg,
  caretIcon: Kg,
  caretOpen: Hg,
  caretPlaceholder: Wg,
  label: Vg,
  loading: Ug,
  loadingRow: Xg,
  empty: Gg
};
function Eb({
  data: e,
  Data: n,
  children: r,
  Children: o,
  textProperty: s,
  TextProperty: l,
  keyProperty: _,
  KeyProperty: a,
  selectionMode: c,
  SelectionMode: g,
  selectedItem: b,
  SelectedItem: d,
  selectedItems: D,
  SelectedItems: x,
  defaultSelectedItem: z,
  defaultSelectedItems: S,
  onChange: m,
  Change: u,
  onExpand: h,
  Expand: p,
  onCollapse: $,
  Collapse: y,
  loadChildData: w,
  LoadChildData: i,
  template: v,
  Template: O,
  itemTemplate: I,
  ItemTemplate: j,
  ariaLabel: C,
  AriaLabel: f,
  className: M
}) {
  const T = e ?? n ?? [], E = r ?? o, A = s ?? l ?? "text", X = _ ?? a ?? "id", H = c ?? g ?? "single", re = C ?? f ?? "Tree", Z = w ?? i, J = v ?? O ?? I ?? j, Q = F(
    (W) => {
      const ae = W[X];
      return ae != null ? String(ae) : String(W.id ?? "");
    },
    [X]
  ), G = F(
    (W) => {
      const ae = W[A];
      if (ae != null) return String(ae);
      const _e = W.text;
      return _e != null ? String(_e) : "";
    },
    [A]
  ), K = F(
    (W) => {
      if (E) {
        const _e = E(W);
        if (_e !== void 0) return _e;
      }
      const ae = W.children;
      if (Array.isArray(ae)) return ae;
    },
    [E]
  ), L = F(
    (W) => {
      const ae = /* @__PURE__ */ new Set(), _e = (he) => {
        for (const de of he) {
          const ye = Q(de);
          de.expanded && ae.add(ye);
          const Le = K(de);
          Le && Le.length > 0 && _e(Le);
        }
      };
      return _e(W), ae;
    },
    [Q, K]
  ), [oe, ce] = Y(() => L(T)), [ee, ue] = Y(() => /* @__PURE__ */ new Map()), [me, ke] = Y(() => /* @__PURE__ */ new Set()), Pe = b ?? d, Ie = D ?? x, Ge = H === "multiple" ? Ie !== void 0 : Pe !== void 0, Je = F(() => {
    if (H === "multiple") {
      if (S && S.length > 0)
        return new Set(S.map((_e) => Q(_e)));
      const W = /* @__PURE__ */ new Set(), ae = (_e) => {
        for (const he of _e) {
          he.selected && W.add(Q(he));
          const de = K(he);
          de && ae(de);
        }
      };
      return ae(T), W;
    } else {
      if (z) return /* @__PURE__ */ new Set([Q(z)]);
      let W = null;
      const ae = (_e) => {
        for (const he of _e) {
          if (he.selected)
            return W = Q(he), !0;
          const de = K(he);
          if (de && ae(de)) return !0;
        }
        return !1;
      };
      return ae(T), W ? /* @__PURE__ */ new Set([W]) : /* @__PURE__ */ new Set();
    }
  }, [H, z, S, Q, K, T]), [qe, Ze] = Y(() => Je()), Fe = ve(() => {
    if (H === "multiple") {
      if (Ie !== void 0) {
        const W = Ie;
        return W ? new Set(W.map((ae) => Q(ae))) : /* @__PURE__ */ new Set();
      }
      return qe;
    } else {
      if (Pe !== void 0) {
        const W = Pe;
        return W ? /* @__PURE__ */ new Set([Q(W)]) : /* @__PURE__ */ new Set();
      }
      return qe;
    }
  }, [H, Ie, Pe, qe, Q]), Qe = F(
    (W) => {
      let ae;
      const _e = (he) => {
        for (const de of he) {
          if (Q(de) === W)
            return ae = de, !0;
          const Le = ee.get(Q(de)) ?? K(de);
          if (Le && _e(Le)) return !0;
        }
        return !1;
      };
      if (_e(T), !ae) {
        for (const he of ee.values())
          if (_e(he)) break;
      }
      return ae;
    },
    [T, ee, Q, K]
  ), U = F(() => {
    const W = /* @__PURE__ */ new Map(), ae = (_e) => {
      for (const he of _e) {
        const de = Q(he);
        W.set(de, he);
        const Le = ee.get(de) ?? K(he);
        Le && ae(Le);
      }
    };
    return ae(T), W;
  }, [T, ee, Q, K]), N = F(
    (W) => {
      const ae = Q(W);
      if (!W.disabled)
        if (H === "multiple") {
          const he = new Set(Fe);
          he.has(ae) ? he.delete(ae) : he.add(ae), Ge || Ze(he);
          const de = m ?? u;
          if (de) {
            const ye = U(), Le = [];
            for (const Ke of he) {
              const B = ye.get(Ke) ?? Qe(Ke);
              B && Le.push(B);
            }
            de({ item: W, selectedItems: Le });
          }
        } else if (!Fe.has(ae) || Fe.size !== 1 || !Fe.has(ae)) {
          Ge || Ze(/* @__PURE__ */ new Set([ae]));
          const de = m ?? u;
          de && de({ item: W, selectedItem: W });
        } else {
          const de = m ?? u;
          de && de({ item: W, selectedItem: W });
        }
    },
    [Q, H, Fe, Ge, m, u, U, Qe]
  ), P = F(
    async (W) => {
      const ae = Q(W);
      if (!!W.disabled) return;
      const he = oe.has(ae), de = h ?? p, ye = $ ?? y, Le = K(W), B = ee.get(ae) ?? Le, Ce = !(B !== void 0 && B.length > 0) && Z != null;
      if (he) {
        ce((Se) => {
          const Te = new Set(Se);
          return Te.delete(ae), Te;
        }), ye?.({ item: W });
        return;
      }
      if (Ce) {
        if (me.has(ae)) return;
        ke((Se) => {
          const Te = new Set(Se);
          return Te.add(ae), Te;
        });
        try {
          const Te = await Z(W);
          ue((et) => {
            const ct = new Map(et);
            return ct.set(ae, Te), ct;
          }), ce((et) => {
            const ct = new Set(et);
            return ct.add(ae), ct;
          }), de?.({ item: W });
        } catch {
        } finally {
          ke((Se) => {
            const Te = new Set(Se);
            return Te.delete(ae), Te;
          });
        }
        return;
      }
      ce((Se) => {
        const Te = new Set(Se);
        return Te.add(ae), Te;
      }), de?.({ item: W });
    },
    [Q, oe, K, ee, Z, me, h, p, $, y]
  ), V = ve(() => {
    const W = [], ae = (_e, he, de) => {
      _e.forEach((ye, Le) => {
        const Ke = Q(ye), B = G(ye), ie = ee.get(Ke) ?? K(ye);
        let Ce;
        ee.has(Ke) ? Ce = ee.get(Ke).length > 0 : ie !== void 0 ? Ce = ie.length > 0 : Z ? Ce = !0 : Ce = !1;
        const Se = oe.has(Ke), Te = !!ye.disabled, et = _e.length, ct = Le + 1;
        if (W.push({
          item: ye,
          key: Ke,
          text: B,
          level: he,
          posInSet: ct,
          setSize: et,
          hasChildren: Ce,
          expanded: Se,
          parentKey: de,
          disabled: Te
        }), Ce && Se) {
          const It = ee.get(Ke) ?? ie;
          It && It.length > 0 && ae(It, he + 1, Ke);
        }
      });
    };
    return ae(T, 1, null), W;
  }, [T, Q, G, K, ee, oe, Z, me]), [se, te] = Y(() => V[0]?.key ?? null), pe = le(""), Ne = le(null), Re = le(null);
  $e(() => {
    if (!se && V.length > 0) {
      const W = V[0];
      W && te(W.key);
    } else if (se && !V.some((W) => W.key === se)) {
      const W = V[0];
      te(W ? W.key : null);
    }
  }, [V, se]), $e(() => {
    if (se) {
      const W = Re.current?.querySelector(`[data-key="${CSS.escape(se)}"]`);
      let ae = null;
      W || (ae = Re.current?.querySelector(`[data-key="${se}"]`) ?? null);
      const _e = W ?? ae;
      _e && document.activeElement !== _e && Re.current?.contains(document.activeElement) && _e.focus();
    }
  }, [se]);
  const Ee = F(
    (W) => {
      te(W), requestAnimationFrame(() => {
        const ae = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(W) : W;
        let _e = Re.current?.querySelector(`[data-key="${ae}"]`);
        _e || (_e = Re.current?.querySelector(`[data-key="${W}"]`) ?? null), _e?.focus();
      });
    },
    []
  ), rt = F(
    (W) => V.find((_e) => _e.key === W)?.parentKey ?? null,
    [V]
  ), vt = F(
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
        he && Ee(he);
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
        he && Ee(he);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !_e) return;
        if (_e.hasChildren && !_e.expanded)
          P(_e.item);
        else if (_e.hasChildren && _e.expanded) {
          const de = ae + 1, ye = V[de];
          ye && ye.parentKey === _e.key && Ee(ye.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !_e) return;
        if (_e.hasChildren && _e.expanded)
          P(_e.item);
        else {
          const de = rt(_e.key);
          de && Ee(de);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const de = V[0];
        de && Ee(de.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const de = V[V.length - 1];
        de && Ee(de.key);
        return;
      }
      if (W.key === "Enter" || W.key === " ") {
        W.preventDefault(), _e && N(_e.item);
        return;
      }
      if (W.key.length === 1 && /^[a-zA-Z0-9]$/.test(W.key)) {
        W.preventDefault();
        const de = (pe.current + W.key).toLowerCase();
        pe.current = de, Ne.current && clearTimeout(Ne.current), Ne.current = setTimeout(() => {
          pe.current = "";
        }, 500);
        const ye = ae >= 0 ? ae + 1 : 0, B = [...V, ...V].slice(ye, ye + V.length).find((ie) => ie.text.toLowerCase().startsWith(de));
        B && Ee(B.key);
        return;
      }
    },
    [V, se, Ee, P, N, rt]
  ), ne = F(() => {
    if (!se && V.length > 0) {
      const W = V[0];
      W && te(W.key);
    }
  }, [se, V]), De = (W, ae, _e) => /* @__PURE__ */ t("ul", { role: "group", className: it.group, children: W.map((he, de) => {
    const ye = Q(he), Le = G(he), Ke = ee.get(ye) ?? K(he);
    let B;
    ee.has(ye) ? B = ee.get(ye).length > 0 : Ke !== void 0 ? B = Ke.length > 0 : Z ? B = !0 : B = !1;
    const ie = oe.has(ye), Ce = Fe.has(ye), Se = !!he.disabled, Te = me.has(ye), et = se === ye, ct = W.length, It = de + 1, Cn = J ? J(he) : Le;
    return /* @__PURE__ */ k("li", { role: "none", className: it.itemWrapper, children: [
      /* @__PURE__ */ k(
        "div",
        {
          role: "treeitem",
          "data-key": ye,
          tabIndex: et ? 0 : -1,
          "aria-expanded": B ? ie : void 0,
          "aria-selected": Ce,
          "aria-level": ae,
          "aria-setsize": ct,
          "aria-posinset": It,
          "aria-disabled": Se || void 0,
          "aria-busy": Te || void 0,
          className: [
            it.treeitem,
            Ce ? it.selected : null,
            Se ? it.disabled : null,
            et ? it.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            Ee(ye), Se || N(he);
          },
          onFocus: () => te(ye),
          children: [
            B ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: it.caret,
                "aria-label": `${ie ? "Collapse" : "Expand"} ${Le}`,
                "aria-expanded": ie,
                tabIndex: -1,
                disabled: Se,
                onClick: (ln) => {
                  ln.stopPropagation(), Ee(ye), P(he);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [it.caretIcon, ie ? it.caretOpen : null].filter(Boolean).join(" "), children: /* @__PURE__ */ t(ze, { name: "chevron-right", size: 10 }) })
              }
            ) : /* @__PURE__ */ t("span", { className: it.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: it.label, children: Cn }),
            Te ? /* @__PURE__ */ t("span", { className: it.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      B && ie ? Te ? /* @__PURE__ */ t("div", { className: it.loadingRow, "aria-busy": "true", children: "Loading…" }) : Ke && Ke.length > 0 ? De(Ke, ae + 1) : ee.has(ye) && ee.get(ye).length > 0 ? De(ee.get(ye), ae + 1) : (Ke && Ke.length === 0, null) : null
    ] }, ye);
  }) });
  return /* @__PURE__ */ t(
    "div",
    {
      ref: Re,
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
const Yg = "_root_u0yr1_1", Zg = "_panel_u0yr1_8", Jg = "_header_u0yr1_19", Qg = "_listbox_u0yr1_28", ey = "_option_u0yr1_42", ty = "_disabled_u0yr1_57", ny = "_active_u0yr1_66", ry = "_selected_u0yr1_70", oy = "_empty_u0yr1_86", sy = "_controls_u0yr1_93", ay = "_reorder_u0yr1_102", ly = "_btn_u0yr1_110", Be = {
  root: Yg,
  panel: Zg,
  header: Jg,
  listbox: Qg,
  option: ey,
  disabled: ty,
  active: ny,
  selected: ry,
  empty: oy,
  controls: sy,
  reorder: ay,
  btn: ly
};
function tt(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function Pn(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function Tb({
  source: e,
  Source: n,
  target: r,
  Target: o,
  value: s,
  Value: l,
  targetValue: _,
  TargetValue: a,
  data: c,
  Data: g,
  onSourceChange: b,
  SourceChange: d,
  onTargetChange: D,
  TargetChange: x,
  keyProperty: z,
  KeyProperty: S,
  onMove: m,
  Move: u,
  ariaLabel: h,
  AriaLabel: p,
  className: $
}) {
  const y = z ?? S ?? "id", w = h ?? p ?? "PickList", i = e ?? n ?? s ?? l ?? c ?? g ?? [], v = r ?? o ?? _ ?? a ?? [], [O, I] = Y(() => [...i]), [j, C] = Y(() => [...v]);
  $e(() => {
    const N = e ?? n ?? s ?? l ?? c ?? g;
    N !== void 0 && I([...N]);
  }, [e, n, s, l, c, g]), $e(() => {
    const N = r ?? o ?? _ ?? a;
    N !== void 0 && C([...N]);
  }, [r, o, _, a]);
  const [f, M] = Y(() => /* @__PURE__ */ new Set()), [T, E] = Y(() => /* @__PURE__ */ new Set()), [A, X] = Y(() => {
    const N = i.findIndex((P) => !P.disabled);
    return N >= 0 ? N : 0;
  }), [H, re] = Y(() => {
    const N = v.findIndex((P) => !P.disabled);
    return N >= 0 ? N : 0;
  }), Z = ve(() => O.map((N, P) => N.disabled ? -1 : P).filter((N) => N >= 0), [O]), J = ve(() => j.map((N, P) => N.disabled ? -1 : P).filter((N) => N >= 0), [j]);
  $e(() => {
    if (A >= O.length) {
      const N = Z[Z.length - 1];
      X(N ?? 0);
    } else if (O.length > 0 && Z.length > 0 && !Z.includes(A)) {
      const N = Z[0];
      N !== void 0 && X(N);
    }
  }, [A, O.length, Z]), $e(() => {
    if (H >= j.length) {
      const N = J[J.length - 1];
      re(N ?? 0);
    } else if (j.length > 0 && J.length > 0 && !J.includes(H)) {
      const N = J[0];
      N !== void 0 && re(N);
    }
  }, [H, j.length, J]), $e(() => {
    M((N) => {
      const P = /* @__PURE__ */ new Set();
      for (const V of N)
        O.some((te) => tt(te, y) === V && !te.disabled) && P.add(V);
      return P;
    });
  }, [O, y]), $e(() => {
    E((N) => {
      const P = /* @__PURE__ */ new Set();
      for (const V of N)
        j.some((te) => tt(te, y) === V && !te.disabled) && P.add(V);
      return P;
    });
  }, [j, y]);
  const Q = F(
    (N) => {
      (b ?? d)?.(N);
    },
    [b, d]
  ), G = F(
    (N) => {
      (D ?? x)?.(N);
    },
    [D, x]
  ), K = F(
    (N) => {
      (m ?? u)?.(N);
    },
    [m, u]
  ), L = F(
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
  ), oe = F(
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
  ), ce = F(() => {
    const N = [], P = [];
    for (const pe of O) {
      const Ne = tt(pe, y);
      f.has(Ne) && !pe.disabled ? N.push(pe) : P.push(pe);
    }
    if (N.length === 0) return;
    const V = P, se = [...j, ...N];
    I(V), C(se), M(/* @__PURE__ */ new Set());
    const te = new Set(N.map((pe) => tt(pe, y)));
    E(te), Q(V), G(se), K({ source: V, target: se, moved: N, direction: "toTarget" });
  }, [O, j, f, y, Q, G, K]), ee = F(() => {
    const N = [], P = [];
    for (const pe of j) {
      const Ne = tt(pe, y);
      T.has(Ne) && !pe.disabled ? N.push(pe) : P.push(pe);
    }
    if (N.length === 0) return;
    const V = P, se = [...O, ...N];
    C(V), I(se), E(/* @__PURE__ */ new Set());
    const te = new Set(N.map((pe) => tt(pe, y)));
    M(te), Q(se), G(V), K({ source: se, target: V, moved: N, direction: "toSource" });
  }, [O, j, T, y, Q, G, K]), ue = F(() => {
    const N = O.filter((se) => !se.disabled);
    if (N.length === 0) return;
    const P = O.filter((se) => !!se.disabled), V = [...j, ...N];
    I(P), C(V), M(/* @__PURE__ */ new Set()), Q(P), G(V), K({ source: P, target: V, moved: N, direction: "allToTarget" });
  }, [O, j, y, Q, G, K]), me = F(() => {
    const N = j.filter((se) => !se.disabled);
    if (N.length === 0) return;
    const P = j.filter((se) => !!se.disabled), V = [...O, ...N];
    C(P), I(V), E(/* @__PURE__ */ new Set()), Q(V), G(P), K({ source: V, target: P, moved: N, direction: "allToSource" });
  }, [O, j, Q, G, K]), ke = F(() => {
    if (T.size === 0) return;
    const N = [...j], P = T, V = [];
    for (let te = 1; te < N.length; te++) {
      const pe = N[te], Ne = N[te - 1];
      if (!pe || !Ne) continue;
      const Re = tt(pe, y), Ee = tt(Ne, y);
      P.has(Re) && !P.has(Ee) && !pe.disabled && !Ne.disabled && (N[te - 1] = pe, N[te] = Ne, V.push(pe));
    }
    if (V.length === 0) return;
    C(N), G(N), K({ source: O, target: N, moved: V, direction: "up" });
    const se = Array.from(P)[0];
    if (se) {
      const te = N.findIndex((pe) => tt(pe, y) === se);
      te >= 0 && re(te);
    }
  }, [j, T, y, O, G, K]), Pe = F(() => {
    if (T.size === 0) return;
    const N = [...j], P = T, V = [];
    for (let te = N.length - 2; te >= 0; te--) {
      const pe = N[te], Ne = N[te + 1];
      if (!pe || !Ne) continue;
      const Re = tt(pe, y), Ee = tt(Ne, y);
      P.has(Re) && !P.has(Ee) && !pe.disabled && !Ne.disabled && (N[te] = Ne, N[te + 1] = pe, V.push(pe));
    }
    if (V.length === 0) return;
    C(N), G(N), K({ source: O, target: N, moved: V, direction: "down" });
    const se = Array.from(P)[0];
    if (se) {
      const te = N.findIndex((pe) => tt(pe, y) === se);
      te >= 0 && re(te);
    }
  }, [j, T, y, O, G, K]), Ie = f.size > 0, Xe = T.size > 0, be = le(""), Ge = le(null), Je = le(""), qe = le(null), Ze = F(
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
        be.current = te, Ge.current && clearTimeout(Ge.current), Ge.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const pe = [...P, ...P], Ne = P.indexOf(V) + 1, Re = pe.slice(Ne).find((Ee) => Pn(O[Ee]).toLowerCase().startsWith(te));
        Re != null && X(Re);
        return;
      }
      se >= 0 && X(se);
    },
    [O, Z, A, L]
  ), Fe = F(
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
        const te = (Je.current + N.key).toLowerCase();
        Je.current = te, qe.current && clearTimeout(qe.current), qe.current = setTimeout(() => {
          Je.current = "";
        }, 500);
        const pe = [...P, ...P], Ne = P.indexOf(V) + 1, Re = pe.slice(Ne).find((Ee) => Pn(j[Ee]).toLowerCase().startsWith(te));
        Re != null && re(Re);
        return;
      }
      se >= 0 && re(se);
    },
    [j, J, H, oe]
  ), Qe = le(null), U = le(null);
  return /* @__PURE__ */ k("div", { className: [Be.root, $].filter(Boolean).join(" "), "aria-label": w, children: [
    /* @__PURE__ */ k("div", { className: Be.panel, children: [
      /* @__PURE__ */ t("div", { className: Be.header, children: "Source" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: Qe,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Be.listbox,
          onKeyDown: Ze,
          children: O.length === 0 ? /* @__PURE__ */ t("div", { className: Be.empty, children: "No items" }) : O.map((N, P) => {
            const V = tt(N, y), se = f.has(V), te = P === A, pe = !!N.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": se,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Be.option,
                  se ? Be.selected : null,
                  te ? Be.active : null,
                  pe ? Be.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => L(P),
                children: Pn(N)
              },
              V
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ k("div", { className: Be.controls, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Be.btn,
          "aria-label": "Move selected to target",
          "aria-disabled": !Ie || void 0,
          disabled: !Ie,
          onClick: ce,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Be.btn,
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
          className: Be.btn,
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
          className: Be.btn,
          "aria-label": "Move selected to source",
          "aria-disabled": !Xe || void 0,
          disabled: !Xe,
          onClick: ee,
          children: "‹"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Be.btn,
          "aria-label": "Move all to source",
          "aria-disabled": j.filter((N) => !N.disabled).length === 0 || void 0,
          disabled: j.filter((N) => !N.disabled).length === 0,
          onClick: me,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ k("div", { className: Be.panel, children: [
      /* @__PURE__ */ t("div", { className: Be.header, children: "Target" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: U,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Be.listbox,
          onKeyDown: Fe,
          children: j.length === 0 ? /* @__PURE__ */ t("div", { className: Be.empty, children: "No items" }) : j.map((N, P) => {
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
                  Be.option,
                  se ? Be.selected : null,
                  te ? Be.active : null,
                  pe ? Be.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => oe(P),
                children: Pn(N)
              },
              V
            );
          })
        }
      ),
      /* @__PURE__ */ k("div", { className: Be.reorder, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Be.btn,
            "aria-label": "Move up",
            "aria-disabled": !Xe || void 0,
            disabled: !Xe,
            onClick: ke,
            children: /* @__PURE__ */ t(ze, { name: "chevron-up", size: "sm" })
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Be.btn,
            "aria-label": "Move down",
            "aria-disabled": !Xe || void 0,
            disabled: !Xe,
            onClick: Pe,
            children: /* @__PURE__ */ t(ze, { name: "chevron-down", size: "sm" })
          }
        )
      ] })
    ] })
  ] });
}
const iy = "_root_1isbb_1", cy = "_header_1isbb_8", dy = "_title_1isbb_15", uy = "_navBtn_1isbb_20", _y = "_resources_1isbb_39", fy = "_resource_1isbb_39", py = "_grid_1isbb_50", hy = "_timeCol_1isbb_55", my = "_timeCell_1isbb_61", gy = "_dayCol_1isbb_66", yy = "_dayHeader_1isbb_73", by = "_slot_1isbb_81", xy = "_event_1isbb_91", _t = {
  root: iy,
  header: cy,
  title: dy,
  navBtn: uy,
  resources: _y,
  resource: fy,
  grid: py,
  timeCol: hy,
  timeCell: my,
  dayCol: gy,
  dayHeader: yy,
  slot: by,
  event: xy
};
function $r(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ab({
  data: e,
  view: n = "week",
  date: r,
  onDateChange: o,
  resources: s,
  onEventClick: l,
  onSlotClick: _,
  ariaLabel: a = "Scheduler",
  className: c
}) {
  const [g, b] = Y(r ?? /* @__PURE__ */ new Date()), d = r ?? g, D = (S) => {
    r || b(S), o?.(S);
  }, x = n === "day" ? [d] : n === "week" ? Array.from({ length: 7 }, (S, m) => {
    const u = new Date(d);
    return u.setDate(d.getDate() - d.getDay() + m), u;
  }) : Array.from({ length: 30 }, (S, m) => {
    const u = new Date(d);
    return u.setDate(1 + m), u;
  }), z = Array.from({ length: 12 }, (S, m) => 8 + m);
  return /* @__PURE__ */ k("div", { className: [_t.root, c].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ k("div", { className: _t.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: _t.navBtn, "aria-label": "Previous", onClick: () => {
        const S = new Date(d);
        S.setDate(S.getDate() - 7), D(S);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: _t.title, children: d.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: _t.navBtn, "aria-label": "Next", onClick: () => {
        const S = new Date(d);
        S.setDate(S.getDate() + 7), D(S);
      }, children: "›" })
    ] }),
    s && /* @__PURE__ */ t("div", { className: _t.resources, children: s.map((S) => /* @__PURE__ */ t("div", { className: _t.resource, role: "presentation", "aria-label": S.name, children: S.name }, S.id)) }),
    /* @__PURE__ */ k("div", { className: _t.grid, role: "presentation", children: [
      /* @__PURE__ */ t("div", { className: _t.timeCol, role: "presentation", children: z.map((S) => /* @__PURE__ */ k("div", { className: _t.timeCell, children: [
        S,
        ":00"
      ] }, S)) }),
      x.map((S) => /* @__PURE__ */ k("div", { className: _t.dayCol, role: "presentation", title: S.toLocaleDateString(), onClick: () => _?.({ date: S }), tabIndex: 0, "aria-label": S.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: _t.dayHeader, children: S.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        z.map((m) => /* @__PURE__ */ t("div", { className: _t.slot, tabIndex: -1, onClick: () => {
          const u = new Date(S);
          u.setHours(m), _?.({ date: u });
        } }, m)),
        e.filter((m) => m.start.toDateString() === S.toDateString()).map((m) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: _t.event,
            "aria-label": `${m.title} ${$r(m.start)} - ${$r(m.end)}`,
            "aria-pressed": !1,
            onClick: () => l?.({ event: m }),
            children: m.title
          },
          m.id
        ))
      ] }, S.toISOString()))
    ] })
  ] });
}
const vy = "_root_uw4jr_1", ky = "_header_uw4jr_8", wy = "_headerCell_uw4jr_15", $y = "_timeline_uw4jr_21", Ny = "_row_uw4jr_26", Sy = "_taskName_uw4jr_32", Dy = "_timelineCell_uw4jr_37", zy = "_bar_uw4jr_43", Cy = "_progress_uw4jr_56", My = "_dep_uw4jr_61", jt = {
  root: vy,
  header: ky,
  headerCell: wy,
  timeline: $y,
  row: Ny,
  taskName: Sy,
  timelineCell: Dy,
  bar: zy,
  progress: Cy,
  dep: My
};
function Lb({ tasks: e, view: n = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: s }) {
  const [l, _] = Y(null);
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
              _(a.id), r?.({ task: a });
            },
            onKeyDown: (c) => {
              (c.key === "Enter" || c.key === " ") && (c.preventDefault(), _(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: jt.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((c) => /* @__PURE__ */ t("svg", { className: jt.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-color-border)" }) }, c))
      ] })
    ] }, a.id))
  ] });
}
const Oy = "_root_iswin_1", jy = "_fields_iswin_6", Iy = "_chip_iswin_13", Ey = "_table_iswin_35", Ty = "_totalRow_iswin_55", Ay = "_total_iswin_55", sn = {
  root: Oy,
  fields: jy,
  chip: Iy,
  table: Ey,
  totalRow: Ty,
  total: Ay
}, Rn = {
  Sum: (e) => e.reduce((n, r) => n + r, 0),
  Average: (e) => e.length ? e.reduce((n, r) => n + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function $n(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Bb({ data: e, rowFields: n = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: s, ariaLabel: l = "Pivot table", className: _ }) {
  const a = n, c = r, g = o, b = (m, u, h) => {
    const p = m === "row" ? a.filter((w) => w.property !== u) : a, $ = m === "col" ? c.filter((w) => w.property !== u) : c, y = m === "agg" ? g.filter((w) => !(w.property === u && w.aggregate === h)) : g;
    s?.({ rowFields: p, columnFields: $, aggregateFields: y });
  }, d = (m, u) => u.map((h) => String(m[h.property])).join(""), D = [...new Set(a.length ? e.map((m) => d(m, a)) : [""])].sort(), x = [...new Set(c.length ? e.map((m) => d(m, c)) : [""])].sort(), z = (m, u, h) => {
    const p = e.filter((y) => d(y, a) === m && d(y, c) === u), $ = p.map((y) => Number(y[h.property])).filter((y) => !Number.isNaN(y));
    return !$.length && h.aggregate !== "Count" ? 0 : Rn[h.aggregate](h.aggregate === "Count" ? p.map(() => 1) : $);
  }, S = (m, u, h, p) => /* @__PURE__ */ k(
    "button",
    {
      type: "button",
      className: sn.chip,
      "aria-label": `Remove ${m} field ${h}`,
      onClick: () => b(m, u, p),
      children: [
        h,
        p ? ` (${p})` : ""
      ]
    },
    `${m}-${h}-${p ?? ""}`
  );
  return /* @__PURE__ */ k("div", { className: [sn.root, _].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k("div", { className: sn.fields, children: [
      a.map((m) => S("row", m.property, m.title ?? m.property)),
      c.map((m) => S("col", m.property, m.title ?? m.property)),
      g.map((m) => S("agg", m.property, m.title ?? m.property, m.aggregate))
    ] }),
    /* @__PURE__ */ k("table", { className: sn.table, role: "grid", "aria-label": l, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ k("tr", { children: [
        /* @__PURE__ */ t("th", { scope: "col", children: a.map((m) => m.title ?? m.property).join(" / ") || "Total" }),
        x.map((m) => /* @__PURE__ */ t("th", { scope: "col", children: m || "—" }, m)),
        /* @__PURE__ */ t("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ k("tbody", { children: [
        D.map((m) => /* @__PURE__ */ k("tr", { children: [
          /* @__PURE__ */ t("th", { scope: "row", children: m || "—" }),
          x.map((u) => /* @__PURE__ */ t("td", { title: $n(z(m, u, g[0] ?? { property: "", aggregate: "Count" })), children: g.length ? $n(z(m, u, g[0])) : "" }, u)),
          /* @__PURE__ */ t("td", { className: sn.total, children: g.length ? $n(
            Rn[g[0].aggregate](
              x.flatMap((u) => e.filter((h) => d(h, a) === m && d(h, c) === u).map((h) => Number(h[g[0].property]))).filter((u) => !Number.isNaN(u))
            )
          ) : "" })
        ] }, m)),
        /* @__PURE__ */ k("tr", { className: sn.totalRow, children: [
          /* @__PURE__ */ t("th", { scope: "row", children: "Total" }),
          x.map((m) => /* @__PURE__ */ t("td", { children: g.length ? $n(
            Rn[g[0].aggregate](
              e.filter((u) => d(u, c) === m).map((u) => Number(u[g[0].property])).filter((u) => !Number.isNaN(u))
            )
          ) : "" }, m)),
          /* @__PURE__ */ t("td", { children: g.length ? $n(Rn[g[0].aggregate](e.map((m) => Number(m[g[0].property])).filter((m) => !Number.isNaN(m)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Ly = "_root_mkz78_1", By = "_reverse_mkz78_10", Py = "_item_mkz78_14", Ry = "_marker_mkz78_35", qy = "_body_mkz78_46", Fy = "_label_mkz78_50", Ky = "_content_mkz78_56", Zt = {
  root: Ly,
  reverse: By,
  item: Py,
  marker: Ry,
  body: qy,
  label: Fy,
  content: Ky
};
function Pb({ items: e, reverse: n = !1, ariaLabel: r = "Timeline", className: o }) {
  const s = n ? [...e].reverse() : e;
  return /* @__PURE__ */ t(
    "ol",
    {
      className: [Zt.root, n ? Zt.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: s.map((l, _) => /* @__PURE__ */ k("li", { className: Zt.item, children: [
        /* @__PURE__ */ t("span", { className: Zt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ k("div", { className: Zt.body, children: [
          /* @__PURE__ */ t("div", { className: Zt.label, children: l.label }),
          l.content !== void 0 && /* @__PURE__ */ t("div", { className: Zt.content, children: l.content })
        ] })
      ] }, _))
    }
  );
}
const Hy = "_root_12pfj_1", Wy = "_header_12pfj_13", Vy = "_headCell_12pfj_22", Uy = "_row_12pfj_32", Xy = "_cell_12pfj_37", Nn = {
  root: Hy,
  header: Wy,
  headCell: Vy,
  row: Uy,
  cell: Xy
};
function Rb({ count: e, rowHeight: n = 40, height: r = 320, loadData: o, columns: s = [], ariaLabel: l = "Virtual grid", className: _ }) {
  const [a, c] = Y(/* @__PURE__ */ new Map()), [g, b] = Y(0), d = le(/* @__PURE__ */ new Set()), D = Math.ceil(r / n), x = Math.max(0, Math.floor(g / n) - 3), z = Math.min(e, x + D + 6), S = F(
    (u, h) => {
      let p = !1;
      for (let $ = u; $ < h; $++)
        !a.has($) && !d.current.has($) && (p = !0);
      if (p) {
        for (let $ = u; $ < h; $++) d.current.add($);
        o({ skip: u, top: h }).then(($) => {
          c((y) => {
            const w = new Map(y);
            return $.forEach((i, v) => w.set(u + v, i)), w;
          });
          for (let y = u; y < h; y++) d.current.delete(y);
        });
      }
    },
    [a, o]
  );
  $e(() => {
    S(x, z);
  }, [x, z]);
  const m = [];
  for (let u = x; u < z; u++) {
    const h = a.get(u) ?? {};
    m.push(
      /* @__PURE__ */ t("div", { className: Nn.row, role: "row", style: { height: n }, children: s.map((p) => /* @__PURE__ */ t("div", { role: "gridcell", className: Nn.cell, style: p.width ? { width: p.width } : void 0, children: String(h[p.property] ?? "") }, p.property)) }, u)
    );
  }
  return /* @__PURE__ */ k(
    "div",
    {
      className: [Nn.root, _].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (u) => b(u.target.scrollTop),
      onKeyDown: (u) => {
        const h = u.currentTarget;
        u.key === "ArrowDown" ? (u.preventDefault(), h.scrollTop += n) : u.key === "ArrowUp" ? (u.preventDefault(), h.scrollTop -= n) : u.key === "PageDown" ? (u.preventDefault(), h.scrollTop += r) : u.key === "PageUp" && (u.preventDefault(), h.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ t("div", { style: { height: x * n }, "aria-hidden": "true" }),
        /* @__PURE__ */ t("div", { className: Nn.header, role: "row", children: s.map((u) => /* @__PURE__ */ t("div", { role: "columnheader", className: Nn.headCell, style: { height: n, ...u.width ? { width: u.width } : {} }, children: u.title ?? u.property }, u.property)) }),
        m,
        /* @__PURE__ */ t("div", { style: { height: Math.max(0, (e - z) * n) }, "aria-hidden": "true" })
      ]
    }
  );
}
const Gy = "_root_1leml_1", Nr = {
  root: Gy
}, Ye = 25;
function Yy(e) {
  const n = [];
  let r = 2166136261;
  for (let o = 0; o < e.length; o++)
    r ^= e.charCodeAt(o), r = Math.imul(r, 16777619) >>> 0, n.push(r & 255);
  for (; n.length < Ye * Ye; )
    r = Math.imul(r ^ n.length + 1, 16777619) >>> 0, n.push(r & 255);
  return n;
}
function Zy(e, n) {
  const r = (o, s) => e >= o && e < o + 7 && n >= s && n < s + 7;
  return !!(r(0, 0) || r(Ye - 7, 0) || r(0, Ye - 7) || e === 6 || n === 6 || e === 8 && n === 8 || e === 8 && (n < 9 || n > Ye - 9) || n === 8 && (e < 9 || e > Ye - 9));
}
function Jy(e, n) {
  const r = (o, s) => {
    const l = e - o, _ = n - s, a = Math.max(Math.abs(l - 3), Math.abs(_ - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && n < 7 ? r(0, 0) : e >= Ye - 7 && n < 7 ? r(Ye - 7, 0) : e < 7 && n >= Ye - 7 ? r(0, Ye - 7) : null;
}
function qb({ value: e, size: n = 128, render: r = "svg", ariaLabel: o, className: s }) {
  const l = o ?? `QR code for ${e}`, _ = le(null), a = ve(() => {
    const b = Yy(e), d = [];
    for (let D = 0; D < Ye; D++)
      for (let x = 0; x < Ye; x++) {
        const z = Jy(x, D);
        if (z !== null) {
          d.push(z);
          continue;
        }
        if (Zy(x, D)) {
          d.push(x === 6 || D === 6 ? (x + D) % 2 === 0 : !1);
          continue;
        }
        d.push(b[D * Ye + x] % 2 === 1);
      }
    return d;
  }, [e]);
  if ($e(() => {
    if (r !== "canvas") return;
    const b = _.current, d = b?.getContext("2d");
    if (!b || !d) return;
    const D = getComputedStyle(b), x = D.getPropertyValue("--dx-color-text").trim() || "#000", z = D.getPropertyValue("--dx-color-surface").trim() || "#fff", S = n / Ye;
    d.fillStyle = z, d.fillRect(0, 0, n, n), d.fillStyle = x, a.forEach((m, u) => {
      m && d.fillRect(u % Ye * S, Math.floor(u / Ye) * S, S + 0.5, S + 0.5);
    });
  }, [r, a, n]), r === "canvas")
    return /* @__PURE__ */ t(
      "canvas",
      {
        ref: _,
        className: [Nr.root, s].filter(Boolean).join(" "),
        width: n,
        height: n,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const c = n / Ye, g = [];
  for (let b = 0; b < Ye; b++)
    for (let d = 0; d < Ye; d++)
      a[b * Ye + d] && g.push(/* @__PURE__ */ t("rect", { x: d * c, y: b * c, width: c, height: c }, `${d}-${b}`));
  return /* @__PURE__ */ k(
    "svg",
    {
      className: [Nr.root, s].filter(Boolean).join(" "),
      width: n,
      height: n,
      viewBox: `0 0 ${n} ${n}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ t("rect", { width: n, height: n, fill: "var(--dx-color-surface)" }),
        /* @__PURE__ */ t("g", { fill: "var(--dx-color-text)", children: g })
      ]
    }
  );
}
const Qy = "_root_xfffn_1", e0 = "_value_xfffn_9", Sr = {
  root: Qy,
  value: e0
}, Dr = [
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
], zr = 104, t0 = 106;
function n0(e) {
  const n = [zr];
  for (let o = 0; o < e.length; o++) {
    const s = e.charCodeAt(o);
    n.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let r = zr;
  for (let o = 1; o < n.length; o++) r += o * n[o];
  return n.push(r % 103, t0), n;
}
function Fb({ value: e, format: n = "Code128", height: r = 60, showValue: o = !1, ariaLabel: s, className: l }) {
  const _ = s ?? `Barcode ${e}`, a = ve(() => {
    const c = [];
    let g = 0;
    for (const b of n0(e)) {
      const d = Dr[b] ?? Dr[0];
      for (let D = 0; D < d.length; D++) {
        const x = Number(d[D]);
        D % 2 === 0 && c.push({ x: g, w: x }), g += x;
      }
    }
    return { modules: c, total: g };
  }, [e]);
  return /* @__PURE__ */ k("span", { className: [Sr.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ k(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${a.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": _,
        "data-value": e,
        children: [
          /* @__PURE__ */ t("rect", { width: a.total, height: r, fill: "var(--dx-color-surface)" }),
          a.modules.map((c, g) => /* @__PURE__ */ t("rect", { x: c.x, y: 0, width: c.w, height: r, fill: "var(--dx-color-text)" }, g))
        ]
      }
    ),
    o && /* @__PURE__ */ t("span", { className: Sr.value, children: e })
  ] });
}
const r0 = "_root_x813o_1", o0 = "_svg_x813o_10", s0 = "_gridline_x813o_15", a0 = "_tickLabel_x813o_21", l0 = "_axisTitle_x813o_27", i0 = "_dataLabel_x813o_34", c0 = "_legend_x813o_40", d0 = "_legendItem_x813o_48", u0 = "_swatch_x813o_56", _0 = "_tooltip_x813o_63", f0 = "_visuallyHidden_x813o_77", nt = {
  root: r0,
  svg: o0,
  gridline: s0,
  tickLabel: a0,
  axisTitle: l0,
  dataLabel: i0,
  legend: c0,
  legendItem: d0,
  swatch: u0,
  tooltip: _0,
  visuallyHidden: f0
}, Cr = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function p0(e, n, r) {
  const o = n - e || 1, s = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), l = Math.floor(e / s) * s, _ = Math.ceil(n / s) * s, a = [];
  for (let c = l; c <= _ + 1e-9; c += s) a.push(Number(c.toFixed(6)));
  return { min: l, max: _, step: s, ticks: a };
}
function Kb({
  series: e,
  width: n = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: s,
  showLegend: l = !0,
  tooltipVisible: _ = !0,
  onSeriesClick: a,
  ariaLabel: c = "Chart",
  className: g
}) {
  const [b, d] = Y(null), D = ve(() => {
    const i = /* @__PURE__ */ new Set();
    for (const v of e) for (const O of v.data) i.add(String(O[v.categoryProperty] ?? ""));
    return [...i];
  }, [e]), x = ve(() => e.flatMap((i) => i.data.map((v) => Number(v[i.valueProperty]))).filter((i) => !Number.isNaN(i)), [e]), z = o?.min ?? (x.length ? Math.min(0, ...x) : 0), S = o?.max ?? (x.length ? Math.max(...x) : 10), m = ve(() => p0(z, S, o?.step), [z, S, o?.step]), u = { t: 16, r: 16, b: 40, l: 56 }, h = n - u.l - u.r, p = r - u.t - u.b, $ = (i) => u.l + i / Math.max(1, D.length - 1) * h, y = (i) => u.t + (1 - (i - m.min) / (m.max - m.min || 1)) * p, w = (i, v) => v.color ?? Cr[i % Cr.length];
  return /* @__PURE__ */ k("figure", { className: [nt.root, g].filter(Boolean).join(" "), role: "img", "aria-label": c, "aria-describedby": `${c.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ k("svg", { width: n, height: r, className: nt.svg, role: "presentation", children: [
      o?.gridlines !== !1 && m.ticks.map((i) => /* @__PURE__ */ t("line", { x1: u.l, x2: u.l + h, y1: y(i), y2: y(i), className: nt.gridline }, i)),
      s?.gridlines && D.map((i, v) => /* @__PURE__ */ t("line", { x1: $(v), x2: $(v), y1: u.t, y2: u.t + p, className: nt.gridline }, v)),
      m.ticks.map((i) => /* @__PURE__ */ t("text", { x: u.l - 8, y: y(i) + 4, textAnchor: "end", className: nt.tickLabel, children: i }, i)),
      D.map((i, v) => /* @__PURE__ */ t("text", { x: $(v), y: u.t + p + 16, textAnchor: "middle", className: nt.tickLabel, children: i }, i)),
      o?.title && /* @__PURE__ */ t("text", { x: 12, y: u.t + p / 2, textAnchor: "middle", transform: `rotate(-90,12,${u.t + p / 2})`, className: nt.axisTitle, children: o.title }),
      s?.title && /* @__PURE__ */ t("text", { x: u.l + h / 2, y: r - 4, textAnchor: "middle", className: nt.axisTitle, children: s.title }),
      (() => {
        const i = /* @__PURE__ */ new Map();
        for (const I of e)
          if (I.stack)
            for (const j of I.data) {
              const C = String(j[I.categoryProperty] ?? ""), f = Number(j[I.valueProperty]);
              if (Number.isNaN(f)) continue;
              i.has(I.stack) || i.set(I.stack, /* @__PURE__ */ new Map());
              const M = i.get(I.stack);
              M.set(C, (M.get(C) ?? 0) + f);
            }
        const v = e.filter((I) => I.type === "pie" || I.type === "donut"), O = /* @__PURE__ */ new Map();
        for (const I of v) {
          const j = I.data.reduce((C, f) => C + (Number(f[I.valueProperty]) || 0), 0);
          O.set(I, j);
        }
        return e.map((I, j) => {
          const C = I.data.map((E) => ({
            cat: String(E[I.categoryProperty] ?? ""),
            val: Number(E[I.valueProperty]),
            size: I.sizeProperty ? Number(E[I.sizeProperty]) : void 0,
            item: E
          })), f = new Map(D.map((E, A) => [E, A])), M = w(j, I);
          if (I.type === "pie" || I.type === "donut") {
            const E = u.l + h / 2, A = u.t + p / 2, X = Math.min(h, p) / 3, H = I.type === "donut" ? I.innerRadius ?? X * 0.5 : 0, re = O.get(I) ?? C.reduce((J, Q) => J + Q.val, 0);
            let Z = -90;
            return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
              C.map((J, Q) => {
                const G = re ? J.val / re * 360 : 0, K = Z, L = Z + G;
                Z = L;
                const oe = G > 180 ? 1 : 0, ce = (Fe) => Fe * Math.PI / 180, ee = E + X * Math.cos(ce(K)), ue = A + X * Math.sin(ce(K)), me = E + X * Math.cos(ce(L)), ke = A + X * Math.sin(ce(L)), Pe = E + H * Math.cos(ce(L)), Ie = A + H * Math.sin(ce(L)), Xe = E + H * Math.cos(ce(K)), be = A + H * Math.sin(ce(K)), Ge = H ? `M ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${ke} L ${Pe} ${Ie} A ${H} ${H} 0 ${oe} 0 ${Xe} ${be} Z` : `M ${E} ${A} L ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${ke} Z`, Je = (K + L) / 2, qe = E + (X + 12) * Math.cos(ce(Je)), Ze = A + (X + 12) * Math.sin(ce(Je));
                return /* @__PURE__ */ k("g", { role: "listitem", children: [
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: Ge,
                      fill: M,
                      stroke: "var(--dx-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => _ && d({ x: qe, y: Ze, text: `${I.title ?? J.cat}: ${J.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => a?.({ seriesTitle: I.title ?? "", category: J.cat, value: J.val, item: J.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ t("text", { x: qe, y: Ze, textAnchor: "middle", className: nt.dataLabel, children: J.val })
                ] }, Q);
              })
            ] }, j);
          }
          if (I.type === "scatter" || I.type === "bubble")
            return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
              C.map((E, A) => {
                const X = f.get(E.cat) ?? 0, H = Number(C[A].cat), re = Number.isNaN(H) ? $(X) : u.l + (H - m.min) / (m.max - m.min || 1) * h, Z = y(E.val), J = I.type === "bubble" && E.size !== void 0 ? Math.max(4, Math.min(12, E.size / 10)) : 4;
                return /* @__PURE__ */ k("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: re, cy: Z, r: J, fill: M, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: re,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => _ && d({ x: re, y: Z, text: `${I.title ?? E.cat}: ${E.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => a?.({ seriesTitle: I.title ?? "", category: E.cat, value: E.val, item: E.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, A);
              })
            ] }, j);
          if (I.type === "line" || I.type === "area") {
            const E = (H) => {
              if (!I.stack) return m.min;
              let re = 0;
              for (let Z = 0; Z < j; Z++) {
                const J = e[Z];
                if (J?.stack !== I.stack) continue;
                const Q = J.data.find((G) => String(G[J.categoryProperty] ?? "") === H);
                Q && (re += Number(Q[J.valueProperty]) || 0);
              }
              return re;
            }, A = C.map((H) => {
              const re = f.get(H.cat) ?? 0, Z = E(H.cat);
              return `${re === 0 ? "M" : "L"} ${$(re)} ${y(Z + H.val)}`;
            }).join(" "), X = C.map((H) => {
              const re = f.get(H.cat) ?? 0, Z = E(H.cat);
              return `${re === 0 ? "M" : "L"} ${$(re)} ${y(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ k("g", { role: "list", "aria-label": I.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: I.title ?? `Series ${j + 1}` }),
              I.type === "area" && /* @__PURE__ */ t("path", { d: `${A} L ${$(C.length - 1)} ${y(E(C[C.length - 1].cat))} L ${$(0)} ${y(E(C[0].cat))} Z`, fill: M, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ t("path", { d: A, fill: "none", stroke: M, strokeWidth: 2 }),
              I.stack && /* @__PURE__ */ t("path", { d: X, fill: "none", stroke: "transparent" }),
              C.map((H, re) => {
                const Z = f.get(H.cat) ?? 0, J = E(H.cat), Q = $(Z), G = y(J + H.val);
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
                      onMouseEnter: () => _ && d({ x: Q, y: G, text: `${I.title ?? H.cat}: ${H.val}` }),
                      onMouseLeave: () => d(null),
                      onFocus: () => _ && d({ x: Q, y: G, text: `${I.title ?? H.cat}: ${H.val}` }),
                      onBlur: () => d(null),
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
            C.map((E, A) => {
              const X = f.get(E.cat) ?? 0;
              let H = 0;
              if (I.stack)
                for (let ue = 0; ue < j; ue++) {
                  const me = e[ue];
                  if (me?.stack !== I.stack) continue;
                  const ke = me.data.find((Pe) => String(Pe[me.categoryProperty] ?? "") === E.cat);
                  ke && (H += Number(ke[me.valueProperty]) || 0);
                }
              const re = H + E.val, Z = e.filter((ue) => !ue.stack || ue.stack === I.stack).length, J = h / D.length, Q = T ? 18 : Math.max(12, J / (I.stack ? 1 : e.length) - 4), G = T ? u.l + H / (m.max - m.min || 1) * h : $(X) - Q / 2 + (I.stack ? 0 : j % Z * Q), K = T ? u.t + X * p / D.length + 4 : y(re), L = T ? E.val / (m.max - m.min || 1) * h : Q - 4, oe = T ? 16 : y(H) - y(re), ce = T ? u.l + H / (m.max - m.min || 1) * h : G, ee = T ? u.t + X * p / D.length + 4 : K;
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
                    onMouseEnter: () => _ && d({ x: ce + (T ? L : Q) / 2, y: ee, text: `${I.title ?? E.cat}: ${E.val}` }),
                    onMouseLeave: () => d(null),
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
    l && /* @__PURE__ */ t("div", { className: nt.legend, children: e.map((i, v) => /* @__PURE__ */ k("span", { className: nt.legendItem, children: [
      /* @__PURE__ */ t("span", { className: nt.swatch, style: { backgroundColor: w(v, i) }, "aria-hidden": "true" }),
      i.title ?? `Series ${v + 1}`
    ] }, v)) }),
    /* @__PURE__ */ k("table", { className: nt.visuallyHidden, id: `${c.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ t("caption", { children: c }),
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ k("tr", { children: [
        /* @__PURE__ */ t("th", { children: "Series" }),
        /* @__PURE__ */ t("th", { children: "Category" }),
        /* @__PURE__ */ t("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: e.map(
        (i) => i.data.map((v, O) => /* @__PURE__ */ k("tr", { children: [
          /* @__PURE__ */ t("td", { children: i.title ?? "" }),
          /* @__PURE__ */ t("td", { children: String(v[i.categoryProperty] ?? "") }),
          /* @__PURE__ */ t("td", { children: String(v[i.valueProperty] ?? "") })
        ] }, `${i.title}-${O}`))
      ) })
    ] })
  ] });
}
export {
  Ai as ALERT_ICON,
  tb as Accordion,
  K0 as Alert,
  sb as Autocomplete,
  Q0 as Avatar,
  b0 as Badge,
  Fb as Barcode,
  G0 as Body,
  Cb as Breadcrumb,
  g0 as Button,
  y0 as Card,
  Ib as Carousel,
  Kb as Chart,
  B0 as Checkbox,
  lb as Checkboxlist,
  mb as Colorpicker,
  V0 as Column,
  On as DEFAULT_OPERATOR_BY_TYPE,
  X1 as DEFAULT_PALETTE,
  I0 as DataFilter,
  E0 as DataGrid,
  T0 as DataList,
  gb as Datepicker,
  R0 as Dialog,
  $b as DropZone,
  ob as Dropdown,
  w0 as EmptyState,
  Er as FILTER_OPERATORS,
  zb as FabMenu,
  $0 as Field,
  f_ as Footer,
  N0 as Form,
  Lb as Gantt,
  m_ as Header,
  ze as Icon,
  L0 as Input,
  A0 as Label,
  X0 as Layout,
  ab as Listbox,
  pb as Mask,
  Nb as Menu,
  hb as Numeric,
  ma as Pager,
  Sb as PanelMenu,
  fb as Password,
  Tb as PickList,
  Bb as Pivot,
  Db as ProfileMenu,
  Y0 as Progress,
  qb as QRCode,
  ib as Radiobuttonlist,
  yb as Rating,
  W0 as Row,
  Ab as Scheduler,
  vb as SecurityCode,
  Fn as Select,
  cb as Selectbar,
  $_ as Sidebar,
  kb as SignaturePad,
  H0 as Skeleton,
  bb as Slider,
  ub as Splitbutton,
  Ob as Splitter,
  U0 as Stack,
  v0 as Stat,
  Mb as Steps,
  Cl as Switch,
  k0 as Table,
  eb as Tabs,
  nb as Textarea,
  _b as Textbox,
  J0 as ThemeSwitcher,
  Pb as Timeline,
  xb as Timespanpicker,
  F0 as ToastProvider,
  jb as Toc,
  db as Togglebutton,
  P0 as Tooltip,
  Eb as Tree,
  rb as Typography,
  wb as Upload,
  Rb as VirtualGrid,
  Ar as applyFilters,
  wa as applyGridState,
  pn as columnValue,
  xa as cycleSort,
  $a as defaultOperatorForType,
  D0 as email,
  mr as formatMasked,
  cr as formatValue,
  Kn as getByPath,
  x0 as iconNames,
  Tr as matchesFilters,
  M0 as maxLength,
  C0 as minLength,
  ka as paginate,
  z0 as pattern,
  O0 as range,
  S0 as required,
  rr as resolveVariant,
  Ds as runValidators,
  Z0 as shadeClass,
  Fs as sortItems,
  va as sortedItems,
  Ls as toFilterString,
  qs as toODataFilterString,
  Ss as useFormContext,
  j0 as useFormField,
  A_ as useMediaQuery,
  q0 as useToast
};
