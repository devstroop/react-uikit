import { jsxs as $, jsx as t, Fragment as Me } from "react/jsx-runtime";
import { forwardRef as He, useId as Ue, isValidElement as Cn, cloneElement as Cr, useState as Y, useRef as ce, useCallback as q, useMemo as $e, useContext as zr, createContext as Mr, useEffect as Se, Children as Fr, useImperativeHandle as tr } from "react";
const Kr = "_button_5wv4n_1", qr = "_filled_5wv4n_29", Hr = "_flat_5wv4n_30", Wr = "_outlined_5wv4n_31", Ur = "_text_5wv4n_32", Vr = "_primary_5wv4n_100", Xr = "_secondary_5wv4n_102", Gr = "_ghost_5wv4n_104", Yr = "_danger_5wv4n_106", Zr = "_success_5wv4n_108", Jr = "_info_5wv4n_110", Qr = "_loading_5wv4n_114", eo = "_spinner_5wv4n_117", to = "_xs_5wv4n_129", no = "_sm_5wv4n_135", ro = "_md_5wv4n_141", oo = "_lg_5wv4n_147", so = "_xl_5wv4n_153", ao = "_iconOnly_5wv4n_159", lo = "_fullWidth_5wv4n_185", wt = {
  button: Kr,
  filled: qr,
  flat: Hr,
  outlined: Wr,
  text: Ur,
  "style-primary": "_style-primary_5wv4n_35",
  "tone-primary": "_tone-primary_5wv4n_35",
  "style-secondary": "_style-secondary_5wv4n_41",
  "tone-secondary": "_tone-secondary_5wv4n_41",
  "style-base": "_style-base_5wv4n_47",
  "style-light": "_style-light_5wv4n_50",
  "style-dark": "_style-dark_5wv4n_53",
  "style-danger": "_style-danger_5wv4n_57",
  "tone-danger": "_tone-danger_5wv4n_57",
  "style-success": "_style-success_5wv4n_63",
  "tone-success": "_tone-success_5wv4n_63",
  "style-warning": "_style-warning_5wv4n_69",
  "tone-warning": "_tone-warning_5wv4n_69",
  "style-info": "_style-info_5wv4n_75",
  "tone-info": "_tone-info_5wv4n_75",
  "shade-lighter": "_shade-lighter_5wv4n_83",
  "shade-light": "_shade-light_5wv4n_83",
  "shade-dark": "_shade-dark_5wv4n_85",
  "shade-darker": "_shade-darker_5wv4n_86",
  primary: Vr,
  secondary: Xr,
  ghost: Gr,
  danger: Yr,
  success: Zr,
  info: Jr,
  loading: Qr,
  spinner: eo,
  "dx-spin": "_dx-spin_5wv4n_1",
  xs: to,
  sm: no,
  md: ro,
  lg: oo,
  xl: so,
  iconOnly: ao,
  fullWidth: lo
}, co = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function io(e, n) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", o = n;
  if (r) {
    const d = co[e];
    return { variant: d.variant, style: o ?? d.style };
  }
  const s = e ?? "filled";
  return { variant: s === "filled" || s === "flat" || s === "outlined" || s === "text" ? s : "filled", style: o ?? "primary" };
}
const Uy = He(function({
  variant: n = "filled",
  severity: r,
  shade: o = "default",
  size: s = "md",
  fullWidth: l = !1,
  iconOnly: d = !1,
  loading: a = !1,
  className: i,
  type: m = "button",
  disabled: b,
  children: u,
  ...S
}, v) {
  const C = io(n, r), D = o !== "default" ? `shade-${o}` : null, h = [
    wt.button,
    wt[C.variant],
    wt[`style-${C.style}`],
    // backwards-compat: tone-* still emitted
    wt[`tone-${C.style}`],
    D ? wt[D] : null,
    wt[s],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    n && wt[n] ? wt[n] : null,
    l ? wt.fullWidth : null,
    d ? wt.iconOnly : null,
    a ? wt.loading : null,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ $(
    "button",
    {
      ref: v,
      type: m,
      className: h,
      disabled: b || a,
      "aria-busy": a || void 0,
      ...S,
      children: [
        a ? /* @__PURE__ */ t("span", { "aria-hidden": "true", className: wt.spinner }) : null,
        u
      ]
    }
  );
}), uo = "_card_1qkae_1", fo = "_elevated_1qkae_8", _o = "_filled_1qkae_13", po = "_outlined_1qkae_18", ho = "_interactive_1qkae_22", mo = "_text_1qkae_30", go = "_header_1qkae_46", yo = "_body_1qkae_53", bo = "_footer_1qkae_63", dn = {
  card: uo,
  elevated: fo,
  filled: _o,
  outlined: po,
  interactive: ho,
  text: mo,
  header: go,
  body: yo,
  footer: bo
}, Vy = He(function({ variant: n = "elevated", header: r, footer: o, className: s, children: l, onKeyDown: d, ...a }, i) {
  const m = n === "interactive";
  return /* @__PURE__ */ $(
    "div",
    {
      ref: i,
      tabIndex: m ? 0 : void 0,
      onKeyDown: (b) => {
        d?.(b), !(!m || b.key !== "Enter" && b.key !== " ") && (b.preventDefault(), b.currentTarget.click());
      },
      className: [dn.card, dn[n], s].filter(Boolean).join(" "),
      ...a,
      children: [
        r != null && /* @__PURE__ */ t("div", { className: dn.header, children: r }),
        /* @__PURE__ */ t("div", { className: dn.body, children: l }),
        o != null && /* @__PURE__ */ t("div", { className: dn.footer, children: o })
      ]
    }
  );
});
function Or(e, n = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : n;
}
const vo = "_badge_12bwj_1", xo = "_xs_12bwj_14", wo = "_sm_12bwj_19", $o = "_md_12bwj_24", ko = "_lg_12bwj_29", No = "_xl_12bwj_34", So = "_neutral_12bwj_40", Do = "_primary_12bwj_45", Co = "_success_12bwj_50", zo = "_warning_12bwj_55", Mo = "_danger_12bwj_60", Oo = "_filled_12bwj_67", Io = "_outlined_12bwj_92", jo = "_text_12bwj_119", un = {
  badge: vo,
  xs: xo,
  sm: wo,
  md: $o,
  lg: ko,
  xl: No,
  neutral: So,
  primary: Do,
  success: Co,
  warning: zo,
  danger: Mo,
  filled: Oo,
  outlined: Io,
  text: jo,
  "shade-lighter": "_shade-lighter_12bwj_143",
  "shade-light": "_shade-light_12bwj_143",
  "shade-dark": "_shade-dark_12bwj_149",
  "shade-darker": "_shade-darker_12bwj_152"
}, Xy = He(function({ severity: n = "neutral", variant: r = "flat", shade: o, size: s = "md", className: l, children: d, ...a }, i) {
  const m = n, b = Or(r, "flat"), u = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ t(
    "span",
    {
      ref: i,
      className: [un.badge, un[s], un[m], un[b], u ? un[u] : null, l].filter(Boolean).join(" "),
      ...a,
      children: d
    }
  );
}), To = "_xs_1t3wj_2", Eo = "_sm_1t3wj_7", Ao = "_md_1t3wj_1", Lo = "_lg_1t3wj_17", Ro = "_xl_1t3wj_22", Bo = {
  xs: To,
  sm: Eo,
  md: Ao,
  lg: Lo,
  xl: Ro
}, Gy = [
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
], Po = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ $(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ye = He(function({ name: n, size: r = "md", strokeWidth: o = 2, className: s, ...l }, d) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: d,
      className: [a ? Bo[r] : null, s].filter(Boolean).join(" "),
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
      children: Po[n]
    }
  );
}), Fo = "_stat_e3lee_1", Ko = "_label_e3lee_8", qo = "_row_e3lee_16", Ho = "_value_e3lee_22", Wo = "_delta_e3lee_28", Uo = "_success_e3lee_33", Vo = "_danger_e3lee_37", Xo = "_neutral_e3lee_41", Go = "_hint_e3lee_45", Wt = {
  stat: Fo,
  label: Ko,
  row: qo,
  value: Ho,
  delta: Wo,
  success: Uo,
  danger: Vo,
  neutral: Xo,
  hint: Go
}, Yy = He(function({ label: n, value: r, delta: o, deltaTone: s = "neutral", hint: l, className: d, ...a }, i) {
  return /* @__PURE__ */ $("div", { ref: i, className: [Wt.stat, d].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Wt.label, children: n }),
    /* @__PURE__ */ $("div", { className: Wt.row, children: [
      /* @__PURE__ */ t("div", { className: Wt.value, children: r }),
      o != null && /* @__PURE__ */ t("div", { className: [Wt.delta, Wt[s]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ t("div", { className: Wt.hint, children: l })
  ] });
}), Yo = "_wrap_1n4bf_1", Zo = "_table_1n4bf_8", Jo = "_caption_1n4bf_14", Qo = "_none_1n4bf_51", es = "_horizontal_1n4bf_57", ts = "_vertical_1n4bf_67", ns = "_alternating_1n4bf_85", rs = "_start_1n4bf_89", os = "_center_1n4bf_93", ss = "_end_1n4bf_97", as = "_empty_1n4bf_101", Pt = {
  wrap: Yo,
  table: Zo,
  caption: Jo,
  none: Qo,
  horizontal: es,
  vertical: ts,
  alternating: ns,
  start: rs,
  center: os,
  end: ss,
  empty: as
};
function Zy({
  columns: e,
  rows: n,
  rowKey: r,
  empty: o,
  caption: s,
  gridLines: l = "default",
  allowAlternatingRows: d = !0,
  className: a
}) {
  const i = l === "default" || l === "both" ? "" : Pt[l];
  return /* @__PURE__ */ $("div", { className: [Pt.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
      "table",
      {
        className: [
          Pt.table,
          i,
          d ? Pt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ t("caption", { className: Pt.caption, children: s }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((m) => /* @__PURE__ */ t(
            "th",
            {
              className: m.align != null ? Pt[m.align] : void 0,
              scope: "col",
              children: m.header
            },
            m.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((m) => /* @__PURE__ */ t("tr", { children: e.map((b) => /* @__PURE__ */ t(
            "td",
            {
              className: b.align != null ? Pt[b.align] : void 0,
              children: b.render != null ? b.render(m) : m[b.key]
            },
            b.key
          )) }, r(m))) })
        ]
      }
    ),
    n.length === 0 && o != null && /* @__PURE__ */ t("div", { className: Pt.empty, children: o })
  ] });
}
const ls = "_emptyState_7sl2y_1", cs = "_icon_7sl2y_13", is = "_title_7sl2y_18", ds = "_description_7sl2y_24", us = "_action_7sl2y_30", fn = {
  emptyState: ls,
  icon: cs,
  title: is,
  description: ds,
  action: us
};
function Jy({ icon: e, title: n, description: r, action: o, className: s }) {
  return /* @__PURE__ */ $("div", { className: [fn.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: fn.icon, children: e }),
    /* @__PURE__ */ t("div", { className: fn.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: fn.description, children: r }),
    o != null && /* @__PURE__ */ t("div", { className: fn.action, children: o })
  ] });
}
const fs = "_field_3cvvz_1", _s = "_label_3cvvz_8", ps = "_required_3cvvz_14", hs = "_hint_3cvvz_19", ms = "_error_3cvvz_24", _n = {
  field: fs,
  label: _s,
  required: ps,
  hint: hs,
  error: ms
};
function Qy({ label: e, htmlFor: n, required: r, hint: o, supporting: s, error: l, children: d, className: a }) {
  const i = o ?? s, m = Ue(), b = Ue(), u = Ue(), S = l != null ? b : i != null ? u : null, v = typeof d == "function" ? d({ inputId: m, hintId: u, errorId: b }) : d, C = Cn(v) && typeof v.props.id == "string" ? v.props.id : void 0, D = C ?? n ?? m, h = Cn(v) && (S != null || C == null && typeof v.type == "string"), f = C != null || n != null || h, y = h && Cn(v) ? Cr(
    v,
    {
      id: D,
      "aria-describedby": S != null ? [
        v.props["aria-describedby"],
        S
      ].filter((g) => typeof g == "string").join(" ") || void 0 : v.props["aria-describedby"],
      "aria-invalid": l != null ? !0 : v.props["aria-invalid"]
    }
  ) : v;
  return /* @__PURE__ */ $("div", { className: [_n.field, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ $("label", { className: _n.label, htmlFor: f ? D : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: _n.required, "aria-hidden": "true", children: "*" })
    ] }),
    y,
    l != null ? /* @__PURE__ */ t("div", { id: b, className: _n.error, "aria-live": "polite", children: l }) : i != null ? /* @__PURE__ */ t("div", { id: u, className: _n.hint, children: i }) : null
  ] });
}
const gs = "_form_fwqyn_1", ys = {
  form: gs
}, Ir = Mr(null);
function bs() {
  const e = zr(Ir);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function eb({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: o,
  method: s,
  children: l,
  className: d
}) {
  const [a, i] = Y({}), [m, b] = Y(0), u = ce(a);
  u.current = a;
  const S = q((g) => {
    i((N) => N[g.name] === g ? N : { ...N, [g.name]: g });
  }, []), v = q((g) => {
    i((N) => {
      if (!(g in N)) return N;
      const p = { ...N };
      return delete p[g], p;
    });
  }, []), C = q(() => {
    const g = {};
    for (const N of Object.values(u.current)) {
      const p = N.validate();
      p.length > 0 && (g[N.name] = p);
    }
    return g;
  }, []), D = q(() => {
    const g = C();
    b((N) => N + 1), Object.keys(g).length === 0 ? n?.(e) : r?.(g);
  }, [C, e, n, r]), h = (g) => {
    o != null && s != null || (g.preventDefault(), D());
  }, f = $e(
    () => ({ registerField: S, unregisterField: v, submit: D, submitCount: m }),
    [S, v, D, m]
  ), y = [ys.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(Ir.Provider, { value: f, children: /* @__PURE__ */ t("form", { className: y, onSubmit: h, action: o, method: s, noValidate: !0, children: l }) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", tb = (e = "Required") => (n) => an(n) ? e : null, nb = (e = "Invalid email") => (n) => an(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, rb = (e, n = "Invalid format") => (r) => an(r) || e.test(String(r)) ? null : n, ob = (e, n = `Minimum ${e} characters`) => (r) => an(r) || String(r).length >= e ? null : n, sb = (e, n = `Maximum ${e} characters`) => (r) => an(r) || String(r).length <= e ? null : n, ab = (e, n, r = `Between ${e} and ${n}`) => (o) => {
  if (an(o)) return null;
  const s = Number(o);
  return !Number.isNaN(s) && s >= e && s <= n ? null : r;
};
function vs(e, n, r) {
  return e.map((o) => o(n, r)).filter((o) => o != null);
}
function lb(e, n) {
  const { registerField: r, unregisterField: o, submitCount: s } = bs(), [l, d] = Y(n?.initialValue), [a, i] = Y(!1), [m, b] = Y(!1), u = ce(() => []);
  u.current = () => vs(n?.validate ?? [], l), Se(() => (r({ name: e, validate: () => u.current() }), () => o(e)), [e, r, o]), Se(() => {
    s > 0 && (i(!0), b(!1));
  }, [s]);
  const S = a && !m ? u.current() : [];
  return { value: l, setValue: (C) => {
    d(C), b(!0);
  }, errors: S };
}
const xs = "_select_1j23s_1", ws = "_invalid_1j23s_33", $s = "_xs_1j23s_39", ks = "_sm_1j23s_45", Ns = "_md_1j23s_51", Ss = "_lg_1j23s_57", Ds = "_xl_1j23s_63", qn = {
  select: xs,
  invalid: ws,
  xs: $s,
  sm: ks,
  md: Ns,
  lg: Ss,
  xl: Ds
}, Fn = He(function({ size: n = "md", invalid: r = !1, options: o, children: s, className: l, ...d }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [qn.select, qn[n], r ? qn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...d,
      children: o != null ? o.map((i) => /* @__PURE__ */ t("option", { value: i.value, disabled: i.disabled, children: i.label }, i.value)) : s
    }
  );
}), jr = [
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
function rr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Sn(e, n) {
  const r = rr(e), o = rr(n);
  if (typeof r == "number" && typeof o == "number") return r - o;
  const s = String(r ?? ""), l = String(o ?? "");
  return s < l ? -1 : s > l ? 1 : 0;
}
function or(e, n, r) {
  const o = Kn(n, e.property), s = sr(o, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return s;
  const l = sr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? s && l : s || l;
}
function sr(e, n, r, o) {
  const s = o === "CaseInsensitive", l = (i) => s && typeof i == "string" ? i.toLowerCase() : i, d = l(e), a = l(n);
  switch (r) {
    case "Equals":
      return d === a || Array.isArray(d) && d.some((i) => l(i) === a);
    case "NotEquals":
      return d !== a && !(Array.isArray(d) && d.some((i) => l(i) === a));
    case "LessThan":
      return Sn(d, a) < 0;
    case "LessThanOrEquals":
      return Sn(d, a) <= 0;
    case "GreaterThan":
      return Sn(d, a) > 0;
    case "GreaterThanOrEquals":
      return Sn(d, a) >= 0;
    case "Contains":
      return typeof d == "string" && typeof a == "string" && d.includes(a);
    case "StartsWith":
      return typeof d == "string" && typeof a == "string" && d.startsWith(a);
    case "EndsWith":
      return typeof d == "string" && typeof a == "string" && d.endsWith(a);
    case "DoesNotContain":
      return typeof d == "string" && typeof a == "string" && !d.includes(a);
    case "In":
      return Array.isArray(a) && a.some((i) => l(i) === d);
    case "NotIn":
      return Array.isArray(a) && !a.some((i) => l(i) === d);
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
function nr(e) {
  return "filters" in e;
}
function Tr(e, n, r = {}) {
  const o = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (nr(n)) {
    if (n.filters.length === 0) return !0;
    const l = n.operator ?? o;
    return n.filters[l === "Or" ? "some" : "every"](
      (d) => Tr(e, d, { logicalOperator: l, caseSensitivity: s })
    );
  }
  return n.operator === "Custom", or(n, e, s);
}
function Er(e, n, r = {}) {
  return e.filter((o) => Tr(o, n, r));
}
function Cs(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function yt(e) {
  return typeof e == "string" ? `"${Cs(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(yt).join(", ")}]` : `"${String(e)}"`;
}
function zs(e) {
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
function Ms(e) {
  return nr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Ms).filter(Boolean).join(` ${e.operator} `)})` : zs(e);
}
function Os(e) {
  return e.replace(/'/g, "''");
}
const Is = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function js(e, n) {
  const r = e.property, o = n === "CaseInsensitive", s = (i) => o ? `tolower(${i})` : i, l = (i) => typeof i == "string" ? `'${Os(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), d = (i, m) => {
    const b = typeof m == "string", u = b && o ? s(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${u} ${Is[i]} ${b && o ? s(l(m)) : l(m)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(l(m))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(l(m))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(l(m))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(l(m))}))`;
      case "In":
        return Array.isArray(m) ? `${u} in (${m.map((S) => l(S)).join(", ")})` : `${u} in (${l(m)})`;
      case "NotIn":
        return Array.isArray(m) ? `not(${u} in (${m.map((S) => l(S)).join(", ")}))` : `not(${u} in (${l(m)}))`;
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
    return d(e.operator, e.value);
  const a = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${d(e.operator, e.value)} ${a} ${d(
    e.secondOperator,
    e.secondValue
  )})`;
}
function Ts(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (nr(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => Ts(s, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return js(e, r);
}
function Es(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const s of n) {
      const l = s.sortOrder === "Ascending" ? 1 : -1, d = Sn(Kn(r, s.property), Kn(o, s.property));
      if (d !== 0) return d * l;
    }
    return 0;
  });
}
const As = "_filter_1chbh_1", Ls = "_rows_1chbh_9", Rs = "_row_1chbh_9", Bs = "_join_1chbh_21", Ps = "_property_1chbh_30", Fs = "_operator_1chbh_34", Ks = "_value_1chbh_38", qs = "_remove_1chbh_42", Hs = "_bar_1chbh_58", Ws = "_add_1chbh_64", Us = "_custom_1chbh_78", Vs = "_summary_1chbh_82", _t = {
  filter: As,
  rows: Ls,
  row: Rs,
  join: Bs,
  property: Ps,
  operator: Fs,
  value: Ks,
  remove: qs,
  bar: Hs,
  add: Ws,
  custom: Us,
  summary: Vs
}, Xs = {
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
function Gs({
  property: e,
  value: n,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(Me, { children: e.editor({ value: n, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      Fn,
      {
        "aria-label": e.title ?? e.name,
        className: _t.value,
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
        className: _t.value,
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
      className: _t.value,
      ...s,
      value: n == null ? "" : String(n),
      onChange: (l) => r(o === "number" && l.target.value !== "" ? Number(l.target.value) : l.target.value)
    }
  );
}
function cb({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: s = !1,
  className: l,
  viewChanged: d,
  items: a,
  children: i
}) {
  const [m, b] = Y(
    () => o != null && o.length > 0 ? o.map((f, y) => ({ id: y, ...f })) : [{ id: 0, property: e[0]?.name ?? "", operator: On[e[0]?.type ?? "string"], value: void 0 }]
  ), u = (f, y) => {
    b((g) => g.map((N) => N.id === f ? { ...N, ...y } : N));
  }, S = () => {
    const f = m[m.length - 1], y = Math.max(0, ...m.map((N) => N.id)) + 1, g = e[0];
    b((N) => [
      ...N,
      {
        id: y,
        property: f?.property ?? g?.name ?? "",
        operator: On[e.find((p) => p.name === (f?.property ?? g?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (f) => {
    b((y) => y.length > 1 ? y.filter((g) => g.id !== f) : y);
  }, C = $e(() => {
    const f = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], y = [];
    for (const g of m) {
      if (g.property === "" || (g.value == null || g.value === "") && !f.includes(g.operator)) continue;
      const p = {
        property: g.property,
        operator: g.operator,
        value: g.value
      };
      g.secondOperator != null && g.secondValue !== void 0 && (p.secondOperator = g.secondOperator, p.secondValue = g.secondValue, p.logicalOperator = g.logicalOperator ?? "And"), y.push(p);
    }
    return y;
  }, [m]), D = $e(() => a == null || C.length === 0 ? a : Er(a, { operator: n, filters: C }, { caseSensitivity: r }), [a, C, n, r]);
  Se(() => {
    d != null && a != null && d(D ?? []);
  }, [D]);
  const h = (f) => e.find((y) => y.name === f) ?? { name: f, type: "string" };
  return /* @__PURE__ */ $("div", { className: [_t.filter, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: _t.rows, role: "group", "aria-label": "Filter conditions", children: m.map((f, y) => {
      const g = h(f.property), N = s ? [On[g.type ?? "string"]] : jr;
      return /* @__PURE__ */ $("div", { className: _t.row, children: [
        y > 0 ? /* @__PURE__ */ t("span", { className: _t.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          Fn,
          {
            "aria-label": `Condition ${y + 1} property`,
            className: _t.property,
            value: f.property,
            onChange: (p) => {
              const x = e.find((c) => c.name === p.target.value);
              u(f.id, {
                property: p.target.value,
                operator: On[x?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((p) => ({ value: p.name, label: p.title ?? p.name }))
          }
        ),
        /* @__PURE__ */ t(
          Fn,
          {
            "aria-label": `Condition ${y + 1} operator`,
            className: _t.operator,
            value: f.operator,
            onChange: (p) => u(f.id, { operator: p.target.value }),
            options: N.map((p) => ({ value: p, label: Xs[p] }))
          }
        ),
        /* @__PURE__ */ t(Gs, { property: g, value: f.value, onChange: (p) => u(f.id, { value: p }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: _t.remove,
            "aria-label": `Remove condition ${y + 1}`,
            onClick: () => v(f.id),
            children: "×"
          }
        )
      ] }, f.id);
    }) }),
    /* @__PURE__ */ $("div", { className: _t.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: _t.add, onClick: S, children: "Add filter" }),
      i != null ? /* @__PURE__ */ t("div", { className: _t.custom, children: i }) : null,
      a != null ? /* @__PURE__ */ $("span", { className: _t.summary, "aria-live": "polite", children: [
        D?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const Ys = "_pager_ps38y_1", Zs = "_alignLeft_ps38y_10", Js = "_alignCenter_ps38y_14", Qs = "_alignRight_ps38y_18", ea = "_alignJustify_ps38y_22", ta = "_summary_ps38y_26", na = "_controls_ps38y_31", ra = "_button_ps38y_37", oa = "_active_ps38y_73", sa = "_ellipsis_ps38y_85", aa = "_size_ps38y_91", st = {
  pager: Ys,
  alignLeft: Zs,
  alignCenter: Js,
  alignRight: Qs,
  alignJustify: ea,
  summary: ta,
  controls: na,
  button: ra,
  active: oa,
  ellipsis: sa,
  size: aa
};
function la(e, n, r, o) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(o));
}
function ar(e, n) {
  return e.replace("{0}", String(n));
}
function ca(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (a, i) => i + 1);
  const o = Math.floor(r / 2);
  let s = Math.max(1, e - o);
  const l = Math.min(n, s + r - 1);
  s = Math.max(1, l - r + 1);
  const d = [];
  for (let a = s; a <= l; a++) d.push(a);
  return s > 2 && d.unshift("ellipsis"), s > 1 && d.unshift(1), l < n - 1 && d.push("ellipsis"), l < n && d.push(n), d;
}
function ia({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: o,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: d = 5,
  alwaysVisible: a = !1,
  horizontalAlign: i = "left",
  showPagingSummary: m,
  showSummary: b,
  showPageSizeSelector: u = !0,
  pagingSummaryFormat: S = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: v,
  summaryTemplate: C,
  pageSizeText: D = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: f = "Previous page",
  nextPageTitle: y = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: N = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: x,
  onPageSizeChange: c,
  ariaLabel: w = "Pagination",
  className: M
}) {
  const O = r ?? o ?? s, [E, I] = Y(O), _ = r !== void 0 || o !== void 0, z = _ ? O : E, T = Math.max(1, Math.ceil(e / n)), j = Math.min(Math.max(1, z), T), A = m ?? b ?? !0, X = a || T > 1, H = ca(j, T, d), re = q(
    (G) => {
      const K = Math.min(Math.max(1, G), T);
      _ || I(K);
      const L = (K - 1) * n;
      x?.({ page: K, skip: L, top: n, pageCount: T, pageSize: n });
    },
    [_, x, T, n]
  ), Z = i === "center" ? st.alignCenter : i === "right" ? st.alignRight : i === "justify" ? st.alignJustify : st.alignLeft, J = { count: e, pageNumber: j, pageSize: n, pageCount: T }, Q = (G) => {
    const K = Array.from(G.currentTarget.querySelectorAll("button[data-pager-page]")), L = K.indexOf(document.activeElement);
    L !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (K[L + 1] ?? K[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (K[L - 1] ?? K[K.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), K[0]?.focus()) : G.key === "End" && (G.preventDefault(), K[K.length - 1]?.focus()));
  };
  return X ? /* @__PURE__ */ $("nav", { className: [st.pager, Z, M].filter(Boolean).join(" "), "aria-label": w, children: [
    A && /* @__PURE__ */ t("span", { className: st.summary, "aria-live": "polite", children: v ? v(J) : C ? C({ count: e, pageNumber: j, pageSize: n }) : la(S, j, T, e) }),
    /* @__PURE__ */ $("div", { className: st.controls, role: "group", "aria-label": w, onKeyDown: Q, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: j <= 1,
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
          disabled: j <= 1,
          onClick: () => re(j - 1),
          "aria-label": f,
          title: f,
          children: "‹"
        }
      ),
      H.map(
        (G, K) => G === "ellipsis" ? /* @__PURE__ */ t("span", { className: st.ellipsis, "aria-hidden": "true", children: "…" }, `e${K}`) : /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "data-pager-page": G,
            className: [st.button, G === j ? st.active : ""].filter(Boolean).join(" "),
            "aria-current": G === j ? "page" : void 0,
            "aria-label": ar(p, G),
            title: ar(N, G),
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
          disabled: j >= T,
          onClick: () => re(j + 1),
          "aria-label": y,
          title: y,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: j >= T,
          onClick: () => re(T),
          "aria-label": g,
          title: g,
          children: "»"
        }
      )
    ] }),
    u && l && l.length > 0 && /* @__PURE__ */ $("label", { className: st.size, children: [
      /* @__PURE__ */ t("span", { children: D }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (G) => c?.(Number(G.target.value)),
          "aria-label": D,
          children: l.map((G) => /* @__PURE__ */ t("option", { value: G, children: G }, G))
        }
      )
    ] })
  ] }) : null;
}
function Yn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: o, showSummary: s, ...l } = e;
  return /* @__PURE__ */ t(
    ia,
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
function da(e, n, r, o, s, l) {
  if (!n || !r) return e.map((i) => ({ type: "row", row: i }));
  const d = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const m = String(s(i, n) ?? ""), b = d.get(m);
    b ? b.push(i) : d.set(m, [i]);
  });
  const a = [];
  return d.forEach((i, m) => {
    const b = i[0], u = b != null ? s(b, n) : void 0;
    a.push({
      type: "group",
      group: { key: m, display: l(u), property: n, title: r.title ?? n, count: i.length }
    }), o.has(m) && i.forEach((S) => a.push({ type: "row", row: S }));
  }), a;
}
function In(e, n) {
  return e.property ?? `col-${n}`;
}
function ua(e, n) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: s, column: l }) => {
    if (!l.frozen) return;
    r[s] = o === 0 ? "0px" : `${o}px`;
    const d = n[s] ?? l.width ?? "8rem";
    o += parseFloat(d);
  }), r;
}
function fa(e, n) {
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
function lr(e, n) {
  if (n == null || n === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(n);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (n === "d" || n === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const cr = ["Ascending", "Descending", null];
function _a(e, n, r = {}) {
  const o = e.find((l) => l.property === n), s = cr[(o ? cr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((l) => l.property !== n) : r.multi ? [...e.filter((l) => l.property !== n), { property: n, sortOrder: s }] : [{ property: n, sortOrder: s }];
}
function pa(e, n) {
  return Es(e, n);
}
function ha(e, n, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, n), o), l = (s - 1) * r;
  return { items: e.slice(l, l + r), pageCount: o, pageNumber: s, total: e.length };
}
function ma(e, n, r = {}) {
  const o = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, i]) => ({
    property: a,
    operator: i.operator ?? "Contains",
    value: fa(i.value, r.types?.[a] ?? "string")
  })), s = o.length > 0 ? Er(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = pa(s, n.sorts);
  return { ...ha(l, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function ga(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const ya = "_grid_1783z_1", ba = "_toolbar_1783z_8", va = "_picker_1783z_13", xa = "_pickerButton_1783z_17", wa = "_pickerPanel_1783z_31", $a = "_pickerItem_1783z_46", ka = "_groupPanel_1783z_55", Na = "_groupPanelActive_1783z_66", Sa = "_groupPanelText_1783z_70", Da = "_groupChip_1783z_74", Ca = "_groupRemove_1783z_85", za = "_groupRow_1783z_94", Ma = "_groupCell_1783z_98", Oa = "_groupToggle_1783z_103", Ia = "_editRow_1783z_116", ja = "_editCell_1783z_120", Ta = "_editInput_1783z_125", Ea = "_commandCell_1783z_135", Aa = "_commandButton_1783z_141", La = "_data_1783z_156", Ra = "_table_1783z_163", Ba = "_header_1783z_169", Pa = "_center_1783z_181", Fa = "_right_1783z_185", Ka = "_sortButton_1783z_189", qa = "_sortIndicator_1783z_207", Ha = "_sortIndex_1783z_211", Wa = "_cell_1783z_222", Ua = "_clickable_1783z_236", Va = "_frozen_1783z_244", Xa = "_selected_1783z_250", Ga = "_resizeHandle_1783z_254", Ya = "_filterCell_1783z_272", Za = "_filterSelect_1783z_280", Ja = "_filterInput_1783z_290", Qa = "_empty_1783z_301", el = "_loading_1783z_307", tl = "_visuallyHidden_1783z_317", ge = {
  grid: ya,
  toolbar: ba,
  picker: va,
  pickerButton: xa,
  pickerPanel: wa,
  pickerItem: $a,
  groupPanel: ka,
  groupPanelActive: Na,
  groupPanelText: Sa,
  groupChip: Da,
  groupRemove: Ca,
  groupRow: za,
  groupCell: Ma,
  groupToggle: Oa,
  editRow: Ia,
  editCell: ja,
  editInput: Ta,
  commandCell: Ea,
  commandButton: Aa,
  data: La,
  table: Ra,
  header: Ba,
  center: Pa,
  right: Fa,
  sortButton: Ka,
  sortIndicator: qa,
  sortIndex: Ha,
  cell: Wa,
  clickable: Ua,
  frozen: Va,
  selected: Xa,
  resizeHandle: Ga,
  filterCell: Ya,
  filterSelect: Za,
  filterInput: Ja,
  empty: Qa,
  loading: el,
  visuallyHidden: tl
}, nl = {
  Ascending: "ascending",
  Descending: "descending"
};
function ir(e, n) {
  return e.filterable ?? n;
}
function rl(e, n) {
  return e.sortable ?? n;
}
function ol(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function ib({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: l = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: m = !1,
  pageSize: b = 10,
  pageSizeOptions: u,
  pageNumbersCount: S = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: C = !0,
  showPageSizeSelector: D = !0,
  selectionMode: h = "None",
  selectedKeys: f,
  onSelectionChange: y,
  showColumnPicker: g = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: p = !1,
  allowColumnReorder: x = !1,
  allowGrouping: c = !1,
  groupPanelText: w = "Drag a column header here to group",
  groupExpanded: M = !0,
  editMode: O = "None",
  allowRowCreate: E = !1,
  onRowUpdate: I,
  onRowCreate: _,
  onRowDelete: z,
  isLoading: T = !1,
  empty: j = "No records found",
  ariaLabel: A,
  className: X,
  onRowClick: H
}) {
  const [re, Z] = Y([]), [J, Q] = Y(/* @__PURE__ */ new Map()), [G, K] = Y(1), [L, oe] = Y(b), [ie, ee] = Y(
    () => e.map((P, F) => In(P, F))
  ), [ue, me] = Y(
    () => new Set(e.map((P, F) => P.visible !== !1 ? In(P, F) : "").filter(Boolean))
  ), [xe, Re] = Y({}), [Ie, Ve] = Y(!1), [be, Xe] = Y(null), [Ze, Pe] = Y(null), [Ge, Fe] = Y(null), [Je, V] = Y({}), k = ce(null), B = ce(null), U = $e(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((F, _e) => P.set(In(F, _e), F)), P;
  }, [e]), se = $e(
    () => ie.filter((P) => ue.has(P)).map((P) => ({ key: P, column: U.get(P) })).filter((P) => P.column != null),
    [ie, ue, U]
  ), te = $e(
    () => ua(se, xe),
    [se, xe]
  ), pe = O !== "None" || z != null || E, ke = $e(
    () => ma(n, { sorts: re, filters: J, pageNumber: G, pageSize: L }, {
      logicalOperator: i,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((P) => P.type != null && P.property != null).map((P) => [P.property, P.type])
      )
    }),
    [n, re, J, G, L, i, a, e]
  ), Be = $e(
    () => be ? e.find((P) => P.property === be) : void 0,
    [be, e]
  ), je = $e(
    () => Ze ?? new Set(M ? ke.items.map((P) => String(pn(P, be ?? "") ?? "")) : []),
    [Ze, M, ke.items, be]
  ), rt = $e(
    () => da(
      ke.items,
      be ?? void 0,
      Be,
      je,
      pn,
      (P) => lr(P, Be?.format)
    ),
    [ke.items, be, Be, je]
  ), xt = $e(
    () => be ? se.filter((P) => P.column.property !== be) : se,
    [se, be]
  ), ne = (P) => {
    P !== "" && Z(_a(re, P, { multi: s }));
  }, De = (P, F) => {
    Q((_e) => {
      const ve = new Map(_e);
      return ve.set(P, F), ve;
    }), K(1);
  }, W = (P) => {
    oe(P), K(1);
  }, ae = (P) => {
    if (h === "None") return;
    const F = r(P), _e = f ?? [];
    let ve;
    h === "Single" ? ve = _e.length === 1 && _e[0] === F ? [] : [F] : ve = _e.includes(F) ? _e.filter((ot) => ot !== F) : [..._e, F], y?.(ve);
  }, fe = (P) => {
    H?.(P);
  }, he = (P, F, _e) => {
    k.current = { key: P, startX: F, startWidth: _e };
  }, de = (P) => {
    const F = k.current;
    if (!F) return;
    const _e = P - F.startX, ve = Math.max(48, F.startWidth + _e);
    Re((ot) => ({ ...ot, [F.key]: `${ve}px` }));
  }, ye = () => {
    k.current = null;
  }, Ae = (P) => {
    B.current = P;
  }, Ke = (P) => {
    const F = B.current;
    B.current = null, !(!F || F === P) && ee((_e) => {
      const ve = [..._e], ot = ve.indexOf(F), ht = ve.indexOf(P);
      return ot < 0 || ht < 0 ? _e : (ve.splice(ot, 1), ve.splice(ht, 0, F), ve);
    });
  }, R = (P) => {
    me((F) => {
      const _e = new Set(F);
      return _e.has(P) ? _e.delete(P) : _e.add(P), _e;
    });
  }, le = () => {
    const P = B.current;
    if (B.current = null, !P || !c) return;
    const _e = U.get(P)?.property;
    _e && (Xe(_e), Pe(null));
  }, ze = () => {
    Xe(null), Pe(null);
  }, Ne = (P) => {
    Pe((F) => {
      const _e = F ?? new Set(M ? ke.items.map((ot) => String(pn(ot, be ?? "") ?? "")) : []), ve = new Set(_e);
      return ve.has(P) ? ve.delete(P) : ve.add(P), ve;
    });
  }, Te = (P) => {
    const F = {};
    e.forEach((_e) => {
      _e.property && (F[_e.property] = pn(P, _e.property));
    }), V(F), Fe(String(r(P)));
  }, et = () => {
    const P = {};
    e.forEach((F) => {
      F.property && F.type === "boolean" && (P[F.property] = !1);
    }), V(P), Fe("__new__");
  }, it = () => {
    Fe(null), V({});
  }, It = (P) => {
    if (Ge === "__new__") {
      const F = Object.fromEntries(
        e.filter((_e) => _e.property).map((_e) => [_e.property, Je[_e.property]])
      );
      _?.(F);
    } else if (P != null) {
      const F = { ...P, ...Je };
      I?.(P, F);
    }
    it();
  }, zn = m && (v === "Top" || v === "TopAndBottom"), ln = m && (v === "Bottom" || v === "TopAndBottom"), Rr = d && e.some((P) => ir(P, d)), Br = (P, F, _e) => P.render ? P.render(F, { index: 0 }) : lr(pn(F, P.property), P.format), Pr = (P) => {
    const F = [ge.cell];
    return P.align === "center" && F.push(ge.center), P.align === "right" && F.push(ge.right), P.frozen && F.push(ge.frozen), F.join(" ");
  };
  return /* @__PURE__ */ $("div", { className: [ge.grid, X].filter(Boolean).join(" "), children: [
    zn && /* @__PURE__ */ t(
      Yn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: u,
        pageNumbersCount: S,
        showSummary: C,
        showPageSizeSelector: D,
        ariaLabel: ln ? "Pagination (top)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: W
      }
    ),
    (c || E || g) && /* @__PURE__ */ $("div", { className: ge.toolbar, children: [
      c && /* @__PURE__ */ t(
        "div",
        {
          className: [ge.groupPanel, be ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: c ? (P) => P.preventDefault() : void 0,
          onDrop: c ? le : void 0,
          children: be ? /* @__PURE__ */ $("span", { className: ge.groupChip, children: [
            Be?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: ge.groupRemove, onClick: ze, "aria-label": `Remove group by ${Be?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: ge.groupPanelText, children: w })
        }
      ),
      E && /* @__PURE__ */ t("button", { type: "button", className: ge.pickerButton, onClick: et, children: "Add row" }),
      g && /* @__PURE__ */ $("div", { className: ge.picker, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Ie,
            onClick: () => Ve((P) => !P),
            children: N
          }
        ),
        Ie && /* @__PURE__ */ t("div", { className: ge.pickerPanel, role: "menu", "aria-label": N, children: e.map((P, F) => {
          const _e = In(P, F);
          return /* @__PURE__ */ $("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                checked: ue.has(_e),
                onChange: () => R(_e)
              }
            ),
            P.title ?? P.property
          ] }, _e);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ $("div", { className: ge.data, children: [
      /* @__PURE__ */ $(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": ke.total + 1,
          "aria-label": A,
          "aria-busy": T || void 0,
          children: [
            /* @__PURE__ */ $("colgroup", { children: [
              xt.map(({ key: P, column: F }) => /* @__PURE__ */ t(
                "col",
                {
                  style: {
                    width: xe[P] ?? F.width,
                    minWidth: F.minWidth,
                    maxWidth: F.maxWidth
                  }
                },
                P
              )),
              pe && /* @__PURE__ */ t("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ $("thead", { children: [
              /* @__PURE__ */ $("tr", { children: [
                xt.map(({ key: P, column: F }) => {
                  const _e = rl(F, o), ve = re.find((Ee) => Ee.property === F.property), ot = ve ? re.indexOf(ve) + 1 : 0, ht = F.align ?? "left";
                  return /* @__PURE__ */ $(
                    "th",
                    {
                      "aria-sort": _e && ve ? nl[ve.sortOrder] : "none",
                      className: [
                        ge.header,
                        ht === "center" ? ge.center : "",
                        ht === "right" ? ge.right : "",
                        F.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: F.frozen ? { left: te[P] } : void 0,
                      scope: "col",
                      draggable: x || c || void 0,
                      onDragStart: x || c ? (Ee) => {
                        Ee.dataTransfer && (Ee.dataTransfer.effectAllowed = "move"), Ae(P);
                      } : void 0,
                      onDragOver: x ? (Ee) => Ee.preventDefault() : void 0,
                      onDrop: x ? () => Ke(P) : void 0,
                      children: [
                        _e ? /* @__PURE__ */ $(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => F.property != null && ne(F.property),
                            "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${F.title ?? F.property} descending` : `Sort ${F.title ?? F.property} ascending` : `Sort ${F.title ?? F.property} ascending`,
                            children: [
                              F.title ?? F.property,
                              ve && /* @__PURE__ */ t("span", { className: ge.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              ot > 1 && l && /* @__PURE__ */ t("span", { className: ge.sortIndex, children: ot })
                            ]
                          }
                        ) : F.title ?? F.property,
                        p && /* @__PURE__ */ t(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${F.title ?? F.property}`,
                            onMouseDown: (Ee) => {
                              Ee.preventDefault(), Ee.stopPropagation();
                              const cn = xe[P] ?? F.width, Mn = cn ? parseFloat(cn) : 96;
                              he(P, Ee.clientX, Number.isFinite(Mn) ? Mn : 96);
                            },
                            onMouseMove: (Ee) => {
                              k.current?.key === P && de(Ee.clientX);
                            },
                            onMouseUp: ye,
                            onMouseLeave: () => {
                              k.current?.key === P && ye();
                            }
                          }
                        )
                      ]
                    },
                    P
                  );
                }),
                pe && /* @__PURE__ */ t("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              Rr && /* @__PURE__ */ t("tr", { children: xt.map(({ key: P, column: F }) => {
                if (!ir(F, d)) return /* @__PURE__ */ t("td", { className: ge.filterCell }, P);
                const _e = J.get(F.property ?? "");
                return /* @__PURE__ */ $("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ $("label", { className: ge.visuallyHidden, htmlFor: `df-${F.property}`, children: [
                    "Filter ",
                    F.title ?? F.property
                  ] }),
                  /* @__PURE__ */ t(
                    "select",
                    {
                      id: `df-${F.property}`,
                      className: ge.filterSelect,
                      value: _e?.operator ?? ga(F.type ?? "string"),
                      onChange: (ve) => De(F.property ?? "", { ..._e, operator: ve.target.value }),
                      "aria-label": `${F.title ?? F.property} operator`,
                      children: jr.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ t("option", { value: ve, children: ve }, ve))
                    }
                  ),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      className: ge.filterInput,
                      value: _e?.value ?? "",
                      onChange: (ve) => De(F.property ?? "", { ..._e, value: ve.target.value }),
                      placeholder: `Filter ${F.title ?? F.property}`,
                      "aria-label": `${F.title ?? F.property} value`
                    }
                  )
                ] }, P);
              }) })
            ] }),
            /* @__PURE__ */ $("tbody", { children: [
              Ge === "__new__" && /* @__PURE__ */ $("tr", { className: ge.editRow, children: [
                xt.map(({ key: P, column: F }) => /* @__PURE__ */ t("td", { className: ge.editCell, children: F.property && /* @__PURE__ */ t(
                  "input",
                  {
                    className: ge.editInput,
                    type: F.type === "number" ? "number" : F.type === "boolean" ? "checkbox" : "text",
                    checked: F.type === "boolean" ? !!Je[F.property] : void 0,
                    value: F.type === "boolean" ? void 0 : String(Je[F.property] ?? ""),
                    onChange: (_e) => V((ve) => ({
                      ...ve,
                      [F.property]: F.type === "boolean" ? _e.target.checked : _e.target.value
                    })),
                    "aria-label": `${F.title ?? F.property} (new)`
                  }
                ) }, P)),
                pe && /* @__PURE__ */ $("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => It(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: it, children: "Cancel" })
                ] })
              ] }),
              rt.map((P) => {
                if (P.type === "group" && P.group) {
                  const ht = je.has(P.group.key);
                  return /* @__PURE__ */ t("tr", { className: ge.groupRow, children: /* @__PURE__ */ t("td", { colSpan: xt.length + (pe ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ $(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": ht,
                      onClick: () => Ne(P.group.key),
                      children: [
                        /* @__PURE__ */ t("span", { "aria-hidden": "true", children: ht ? "▼" : "▶" }),
                        P.group.title,
                        ": ",
                        P.group.display,
                        " (",
                        P.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${P.group.key}`);
                }
                const F = P.row, _e = r(F), ve = (f ?? []).includes(_e), ot = Ge != null && Ge === String(_e);
                return /* @__PURE__ */ $(
                  "tr",
                  {
                    className: [
                      H || h !== "None" ? ge.clickable : "",
                      ve ? ge.selected : "",
                      ot ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": h !== "None" ? ve : void 0,
                    onClick: H || h !== "None" ? (ht) => {
                      ol(ht.target) || (fe(F), ae(F));
                    } : void 0,
                    children: [
                      xt.map(({ key: ht, column: Ee }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Pr(Ee),
                          style: Ee.frozen ? { left: te[ht] } : void 0,
                          children: ot && Ee.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: ge.editInput,
                              type: Ee.type === "number" ? "number" : Ee.type === "boolean" ? "checkbox" : "text",
                              checked: Ee.type === "boolean" ? !!Je[Ee.property] : void 0,
                              value: Ee.type === "boolean" ? void 0 : String(Je[Ee.property] ?? ""),
                              onChange: (cn) => V((Mn) => ({
                                ...Mn,
                                [Ee.property]: Ee.type === "boolean" ? cn.target.checked : cn.target.value
                              })),
                              "aria-label": `${Ee.title ?? Ee.property} (edit)`
                            }
                          ) : Br(Ee, F)
                        },
                        ht
                      )),
                      pe && /* @__PURE__ */ t("td", { className: ge.commandCell, children: ot ? /* @__PURE__ */ $(Me, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => It(F), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: it, children: "Cancel" })
                      ] }) : /* @__PURE__ */ $(Me, { children: [
                        O !== "None" && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Te(F), children: "Edit" }),
                        z && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => z(F), children: "Delete" })
                      ] }) })
                    ]
                  },
                  _e
                );
              })
            ] })
          ]
        }
      ),
      ke.items.length === 0 && !T && /* @__PURE__ */ t("div", { className: ge.empty, children: j }),
      T && /* @__PURE__ */ t("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    ln && /* @__PURE__ */ t(
      Yn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: u,
        pageNumbersCount: S,
        showSummary: C,
        showPageSizeSelector: D,
        ariaLabel: zn ? "Pagination (bottom)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: W
      }
    )
  ] });
}
const sl = "_wrap_1pzu9_1", al = "_grid_1pzu9_7", ll = "_stacked_1pzu9_13", cl = "_item_1pzu9_19", il = "_empty_1pzu9_25", hn = {
  wrap: sl,
  grid: al,
  stacked: ll,
  item: cl,
  empty: il
};
function db({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: s,
  emptyMessage: l = "No records found",
  emptyTemplate: d,
  loadingTemplate: a,
  isLoading: i = !1,
  showPageSizeSelector: m = !0,
  className: b,
  ariaLabel: u = "Data list"
}) {
  const [S, v] = Y(1), [C, D] = Y(n), h = e.length, f = Math.max(1, Math.ceil(h / C)), y = Math.min(Math.max(1, S), f), g = $e(() => {
    const p = (y - 1) * C;
    return e.slice(p, p + C);
  }, [e, y, C]), N = o ? hn.grid : hn.stacked;
  return /* @__PURE__ */ $("div", { className: [hn.wrap, b].filter(Boolean).join(" "), "aria-label": u, children: [
    i && a != null ? a : h === 0 ? d ?? /* @__PURE__ */ t("div", { className: hn.empty, children: l }) : /* @__PURE__ */ t("div", { className: N, children: g.map((p, x) => /* @__PURE__ */ t("div", { className: hn.item, children: s ? s(p, x) : String(p) }, x)) }),
    /* @__PURE__ */ t(
      Yn,
      {
        pageNumber: y,
        pageSize: C,
        count: h,
        pageSizeOptions: r,
        showPageSizeSelector: m,
        onPageChange: v,
        onPageSizeChange: (p) => {
          D(p), v(1);
        }
      }
    )
  ] });
}
const dl = "_label_idsiv_1", ul = {
  label: dl
}, ub = He(
  function({ className: n, children: r, ...o }, s) {
    return /* @__PURE__ */ t("label", { ref: s, className: [ul.label, n].filter(Boolean).join(" "), ...o, children: r });
  }
), fl = "_input_gelpf_1", _l = "_invalid_gelpf_31", pl = "_xs_gelpf_37", hl = "_sm_gelpf_43", ml = "_md_gelpf_49", gl = "_lg_gelpf_55", yl = "_xl_gelpf_61", Hn = {
  input: fl,
  invalid: _l,
  xs: pl,
  sm: hl,
  md: ml,
  lg: gl,
  xl: yl
}, fb = He(function({ size: n = "md", invalid: r = !1, className: o, ...s }, l) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: l,
      className: [Hn.input, Hn[n], r ? Hn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...s
    }
  );
}), bl = "_checkbox_s7nxo_1", vl = {
  checkbox: bl
}, _b = He(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [vl.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), xl = {
  switch: "_switch_1nmgf_1"
}, wl = He(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [xl.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), $l = "_trigger_1prbw_1", kl = "_tooltip_1prbw_7", Nl = "_top_1prbw_34", Sl = "_right_1prbw_40", Dl = "_bottom_1prbw_46", Cl = "_left_1prbw_52", zl = "_arrow_1prbw_58", jn = {
  trigger: $l,
  tooltip: kl,
  "se-tooltip-in": "_se-tooltip-in_1prbw_1",
  top: Nl,
  right: Sl,
  bottom: Dl,
  left: Cl,
  arrow: zl
};
function pb({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: o = 300,
  className: s
}) {
  const l = Ue(), d = ce(null), [a, i] = Y(!1), m = () => {
    d.current = window.setTimeout(() => i(!0), o);
  }, b = () => {
    d.current !== null && (window.clearTimeout(d.current), d.current = null), i(!1);
  };
  Se(() => {
    if (!a) return;
    const S = (v) => {
      v.key === "Escape" && b();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [a]);
  const u = Cn(n) ? Cr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        a ? l : null
      ].filter((S) => typeof S == "string").join(" ") || void 0
    }
  ) : n;
  return /* @__PURE__ */ $(
    "span",
    {
      className: [jn.trigger, s].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: b,
      onFocus: m,
      onBlur: b,
      children: [
        u,
        a && /* @__PURE__ */ $(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [jn.tooltip, jn[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: jn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Ml = "_dialog_kr2ur_1", Ol = "_sm_kr2ur_30", Il = "_md_kr2ur_34", jl = "_lg_kr2ur_38", Tl = "_header_kr2ur_42", El = "_title_kr2ur_51", Al = "_description_kr2ur_58", Ll = "_close_kr2ur_65", Rl = "_body_kr2ur_84", Bl = "_footer_kr2ur_90", Ft = {
  dialog: Ml,
  "se-dialog-in": "_se-dialog-in_kr2ur_1",
  sm: Ol,
  md: Il,
  lg: jl,
  header: Tl,
  title: El,
  description: Al,
  close: Ll,
  body: Rl,
  footer: Bl
};
function hb({
  open: e,
  onClose: n,
  title: r,
  description: o,
  children: s,
  footer: l,
  size: d = "md",
  className: a
}) {
  const i = ce(null), m = Ue(), b = Ue(), u = ce(n);
  u.current = n;
  const S = ce(!1), v = ce(!1), C = q(() => {
    S.current || (S.current = !0, u.current());
  }, []), D = q(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    u.current();
  }, []);
  return Se(() => {
    const h = i.current;
    if (h)
      if (e && !h.open) {
        h.showModal();
        const f = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const y = (g) => {
          g.preventDefault(), C();
        };
        return h.addEventListener("cancel", y), () => {
          h.removeEventListener("cancel", y), document.body.style.overflow = f;
        };
      } else !e && h.open && (v.current = S.current, S.current = !1, h.close());
  }, [e, C]), /* @__PURE__ */ $(
    "dialog",
    {
      ref: i,
      className: [Ft.dialog, Ft[d], a].filter(Boolean).join(" "),
      onClose: D,
      onClick: (h) => {
        h.target === i.current && C();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? m : void 0,
      "aria-describedby": o ? b : void 0,
      children: [
        r && /* @__PURE__ */ $("header", { className: Ft.header, children: [
          /* @__PURE__ */ $("div", { children: [
            /* @__PURE__ */ t("h2", { id: m, className: Ft.title, children: r }),
            o && /* @__PURE__ */ t("p", { id: b, className: Ft.description, children: o })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ft.close,
              onClick: C,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        s && /* @__PURE__ */ t("div", { className: Ft.body, children: s }),
        l && /* @__PURE__ */ t("footer", { className: Ft.footer, children: l })
      ]
    }
  );
}
const Pl = "_viewport_1h8v8_1", Fl = "_topLeft_1h8v8_13", Kl = "_topRight_1h8v8_20", ql = "_bottomLeft_1h8v8_25", Hl = "_toast_1h8v8_30", Wl = "_leaving_1h8v8_61", Ul = "_info_1h8v8_77", Vl = "_success_1h8v8_82", Xl = "_warning_1h8v8_87", Gl = "_danger_1h8v8_92", Yl = "_content_1h8v8_97", Zl = "_title_1h8v8_102", Jl = "_description_1h8v8_125", Ql = "_dismiss_1h8v8_132", ec = "_actions_1h8v8_151", tc = "_action_1h8v8_151", nc = "_cancel_1h8v8_159", rc = "_progress_1h8v8_195", mt = {
  viewport: Pl,
  topLeft: Fl,
  topRight: Kl,
  bottomLeft: ql,
  toast: Hl,
  "se-toast-in": "_se-toast-in_1h8v8_1",
  leaving: Wl,
  "se-toast-out": "_se-toast-out_1h8v8_1",
  info: Ul,
  success: Vl,
  warning: Xl,
  danger: Gl,
  content: Yl,
  title: Zl,
  description: Jl,
  dismiss: Ql,
  actions: ec,
  action: tc,
  cancel: nc,
  progress: rc,
  "se-toast-progress": "_se-toast-progress_1h8v8_1"
}, Ar = Mr(null);
function mb() {
  const e = zr(Ar);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const oc = 200, sc = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function gb({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: s
}) {
  const [l, d] = Y([]), [a, i] = Y(!1), m = ce([]), b = ce(/* @__PURE__ */ new Map()), u = ce(!1), S = ce(0), v = (I) => {
    u.current = I, i(I);
  }, C = q((I) => {
    const _ = b.current.get(I);
    _ && (window.clearTimeout(_.timeoutId), _.remaining = Math.max(0, _.remaining - (Date.now() - _.startedAt)));
  }, []), D = q((I) => {
    const _ = b.current.get(I);
    _ && (window.clearTimeout(_.timeoutId), b.current.delete(I));
  }, []), h = q(
    (I) => {
      D(I), d((_) => {
        const z = _.filter((T) => T.id !== I);
        return m.current = z, z;
      });
    },
    [D]
  ), f = q(
    (I) => {
      const _ = m.current.find((z) => z.id === I);
      !_ || _.leaving || (_.onAutoClose?.(), h(I));
    },
    [h]
  ), y = q(
    (I) => {
      const _ = b.current.get(I);
      !_ || _.remaining <= 0 || (_.startedAt = Date.now(), _.timeoutId = window.setTimeout(() => f(I), _.remaining));
    },
    [f]
  ), g = q(() => {
    u.current || b.current.forEach((I, _) => C(_)), v(!0);
  }, [C]), N = q(() => {
    b.current.forEach((I, _) => y(_)), v(!1);
  }, [y]);
  Se(() => {
    if (!o) return;
    const I = () => {
      document.hidden ? g() : N();
    };
    return document.addEventListener("visibilitychange", I), () => document.removeEventListener("visibilitychange", I);
  }, [o, g, N]);
  const p = q(
    (I) => {
      const _ = m.current.find((z) => z.id === I);
      !_ || _.leaving || (_.onDismiss?.(), d((z) => {
        const T = z.map((j) => j.id === I ? { ...j, leaving: !0 } : j);
        return m.current = T, T;
      }), window.setTimeout(() => h(I), oc));
    },
    [h]
  ), x = q(
    (I) => {
      if (I.durationMs <= 0) return;
      const _ = {
        remaining: I.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      b.current.set(I.id, _), u.current || y(I.id);
    },
    [y]
  ), c = q(
    (I) => {
      const _ = m.current.find((T) => T.id === I.id), z = {
        id: I.id ?? ++S.current,
        title: I.title,
        description: I.description,
        severity: I.severity ?? "info",
        durationMs: I.durationMs ?? n,
        action: I.action,
        cancel: I.cancel,
        dismissible: I.dismissible ?? !0,
        closeOnClick: I.closeOnClick ?? !1,
        showProgress: I.showProgress ?? !1,
        position: I.position ?? r,
        onDismiss: I.onDismiss,
        onAutoClose: I.onAutoClose
      };
      d((T) => {
        const j = _ ? T.map((A) => A.id === z.id ? { ...z, leaving: !1 } : A) : [...T, z];
        return m.current = j, j;
      }), _ && D(z.id), x(z);
    },
    [n, r, x, D]
  ), w = $e(() => ({ toast: c }), [c]), M = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((I) => I.position)])),
    [r, l]
  ), O = o ? g : void 0, E = o ? N : void 0;
  return /* @__PURE__ */ $(Ar.Provider, { value: w, children: [
    e,
    M.map((I) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          mt.viewport,
          mt[sc[I]],
          s
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: O,
        onMouseLeave: E,
        children: l.filter((_) => _.position === I).map((_) => /* @__PURE__ */ $(
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
            onClick: _.closeOnClick ? () => p(_.id) : void 0,
            children: [
              /* @__PURE__ */ $("div", { className: mt.content, children: [
                /* @__PURE__ */ t("div", { className: mt.title, children: _.title }),
                _.description && /* @__PURE__ */ t("div", { className: mt.description, children: _.description }),
                (_.action || _.cancel) && /* @__PURE__ */ $("div", { className: mt.actions, children: [
                  _.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        _.action?.onClick?.(), p(_.id);
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
                        _.cancel?.onClick?.(), p(_.id);
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
                  onClick: () => p(_.id),
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
      I
    ))
  ] });
}
const ac = "_alert_3nsvj_1", lc = "_xs_3nsvj_22", cc = "_sm_3nsvj_32", ic = "_lg_3nsvj_42", dc = "_xl_3nsvj_52", uc = "_info_3nsvj_63", fc = "_success_3nsvj_68", _c = "_warning_3nsvj_73", pc = "_danger_3nsvj_78", hc = "_flat_3nsvj_85", mc = "_outlined_3nsvj_92", gc = "_filled_3nsvj_100", yc = "_text_3nsvj_107", bc = "_icon_3nsvj_122", vc = "_content_3nsvj_128", xc = "_title_3nsvj_133", wc = "_body_3nsvj_139", $c = "_dismiss_3nsvj_145", Dt = {
  alert: ac,
  xs: lc,
  sm: cc,
  lg: ic,
  xl: dc,
  info: uc,
  success: fc,
  warning: _c,
  danger: pc,
  flat: hc,
  outlined: mc,
  filled: gc,
  text: yc,
  icon: bc,
  content: vc,
  title: xc,
  body: wc,
  dismiss: $c,
  "shade-lighter": "_shade-lighter_3nsvj_181",
  "shade-light": "_shade-light_3nsvj_181",
  "shade-dark": "_shade-dark_3nsvj_187",
  "shade-darker": "_shade-darker_3nsvj_190"
};
function yb({
  severity: e = "info",
  variant: n = "flat",
  shade: r,
  size: o = "md",
  title: s,
  icon: l,
  children: d,
  dismissible: a = !1,
  onDismiss: i,
  className: m,
  ...b
}) {
  const [u, S] = Y(!1);
  if (u)
    return null;
  const v = () => {
    S(!0), i?.();
  }, C = e, D = Or(n, "flat"), h = r && r !== "default" ? `shade-${r}` : null;
  return /* @__PURE__ */ $(
    "div",
    {
      role: "alert",
      ...b,
      className: [Dt.alert, Dt[C], Dt[D], h ? Dt[h] : null, Dt[o], m].filter(Boolean).join(" "),
      children: [
        l != null && /* @__PURE__ */ t("span", { className: Dt.icon, "aria-hidden": "true", children: l }),
        /* @__PURE__ */ $("div", { className: Dt.content, children: [
          s && /* @__PURE__ */ t("div", { className: Dt.title, children: s }),
          d && /* @__PURE__ */ t("div", { className: Dt.body, children: d })
        ] }),
        a && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Dt.dismiss,
            onClick: v,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const kc = "_skeleton_lvzyc_1", Nc = "_text_lvzyc_35", Sc = "_circle_lvzyc_40", Dc = "_rect_lvzyc_44", dr = {
  skeleton: kc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_lvzyc_1",
  text: Nc,
  circle: Sc,
  rect: Dc
};
function bb({
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
      className: [dr.skeleton, dr[e], o].filter(Boolean).join(" "),
      style: s
    }
  );
}
const Cc = "_row_plfwb_1", zc = "_gapXs_plfwb_7", Mc = "_gapSm_plfwb_11", Oc = "_gapMd_plfwb_15", Ic = "_gapLg_plfwb_19", jc = "_gapXl_plfwb_23", Tc = "_start_plfwb_27", Ec = "_center_plfwb_31", Ac = "_end_plfwb_35", Lc = "_stretch_plfwb_39", Rc = "_baseline_plfwb_43", Bc = "_noWrap_plfwb_99", Pc = "_wrapReverse_plfwb_103", Fc = "_gapRowXs_plfwb_107", Kc = "_gapRowSm_plfwb_111", qc = "_gapRowMd_plfwb_115", Hc = "_gapRowLg_plfwb_119", Wc = "_gapRowXl_plfwb_123", Jt = {
  row: Cc,
  gapXs: zc,
  gapSm: Mc,
  gapMd: Oc,
  gapLg: Ic,
  gapXl: jc,
  start: Tc,
  center: Ec,
  end: Ac,
  stretch: Lc,
  baseline: Rc,
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
  noWrap: Bc,
  wrapReverse: Pc,
  gapRowXs: Fc,
  gapRowSm: Kc,
  gapRowMd: qc,
  gapRowLg: Hc,
  gapRowXl: Wc
}, Uc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Vc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Xc(e) {
  return typeof e != "string" ? null : Uc[e] ?? null;
}
function Gc(e) {
  return typeof e != "string" ? null : Vc[e] ?? null;
}
function ur(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function vb({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: o = "start",
  wrap: s = !0,
  className: l,
  style: d,
  ...a
}) {
  const i = Xc(e), m = Gc(n), b = {
    ...e != null && !i ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !m ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ...d
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Jt.row,
        Jt[r],
        Jt[`justify-${o}`],
        ur(s) != null ? Jt[ur(s)] : null,
        i ? Jt[i] : null,
        m ? Jt[m] : null,
        l
      ].filter(Boolean).join(" "),
      style: b,
      ...a
    }
  );
}
const Yc = "_column_2ch3a_1", Zc = "_Size1_2ch3a_6", Jc = "_Size2_2ch3a_7", Qc = "_Size3_2ch3a_8", ei = "_Size4_2ch3a_9", ti = "_Size5_2ch3a_10", ni = "_Size6_2ch3a_11", ri = "_Size7_2ch3a_12", oi = "_Size8_2ch3a_13", si = "_Size9_2ch3a_14", ai = "_Size10_2ch3a_15", li = "_Size11_2ch3a_16", ci = "_Size12_2ch3a_17", ii = "_Offset1_2ch3a_18", di = "_Offset2_2ch3a_19", ui = "_Offset3_2ch3a_20", fi = "_Offset4_2ch3a_21", _i = "_Offset5_2ch3a_22", pi = "_Offset6_2ch3a_23", hi = "_Offset7_2ch3a_24", mi = "_Offset8_2ch3a_25", gi = "_Offset9_2ch3a_26", yi = "_Offset10_2ch3a_27", bi = "_Offset11_2ch3a_28", vi = "_smSize1_2ch3a_31", xi = "_smSize2_2ch3a_32", wi = "_smSize3_2ch3a_33", $i = "_smSize4_2ch3a_34", ki = "_smSize5_2ch3a_35", Ni = "_smSize6_2ch3a_36", Si = "_smSize7_2ch3a_37", Di = "_smSize8_2ch3a_38", Ci = "_smSize9_2ch3a_39", zi = "_smSize10_2ch3a_40", Mi = "_smSize11_2ch3a_41", Oi = "_smSize12_2ch3a_42", Ii = "_smOffset1_2ch3a_43", ji = "_smOffset2_2ch3a_44", Ti = "_smOffset3_2ch3a_45", Ei = "_smOffset4_2ch3a_46", Ai = "_smOffset5_2ch3a_47", Li = "_smOffset6_2ch3a_48", Ri = "_smOffset7_2ch3a_49", Bi = "_smOffset8_2ch3a_50", Pi = "_smOffset9_2ch3a_51", Fi = "_smOffset10_2ch3a_52", Ki = "_smOffset11_2ch3a_53", qi = "_mdSize1_2ch3a_57", Hi = "_mdSize2_2ch3a_58", Wi = "_mdSize3_2ch3a_59", Ui = "_mdSize4_2ch3a_60", Vi = "_mdSize5_2ch3a_61", Xi = "_mdSize6_2ch3a_62", Gi = "_mdSize7_2ch3a_63", Yi = "_mdSize8_2ch3a_64", Zi = "_mdSize9_2ch3a_65", Ji = "_mdSize10_2ch3a_66", Qi = "_mdSize11_2ch3a_67", ed = "_mdSize12_2ch3a_68", td = "_mdOffset1_2ch3a_69", nd = "_mdOffset2_2ch3a_70", rd = "_mdOffset3_2ch3a_71", od = "_mdOffset4_2ch3a_72", sd = "_mdOffset5_2ch3a_73", ad = "_mdOffset6_2ch3a_74", ld = "_mdOffset7_2ch3a_75", cd = "_mdOffset8_2ch3a_76", id = "_mdOffset9_2ch3a_77", dd = "_mdOffset10_2ch3a_78", ud = "_mdOffset11_2ch3a_79", fd = "_lgSize1_2ch3a_83", _d = "_lgSize2_2ch3a_84", pd = "_lgSize3_2ch3a_85", hd = "_lgSize4_2ch3a_86", md = "_lgSize5_2ch3a_87", gd = "_lgSize6_2ch3a_88", yd = "_lgSize7_2ch3a_89", bd = "_lgSize8_2ch3a_90", vd = "_lgSize9_2ch3a_91", xd = "_lgSize10_2ch3a_92", wd = "_lgSize11_2ch3a_93", $d = "_lgSize12_2ch3a_94", kd = "_lgOffset1_2ch3a_95", Nd = "_lgOffset2_2ch3a_96", Sd = "_lgOffset3_2ch3a_97", Dd = "_lgOffset4_2ch3a_98", Cd = "_lgOffset5_2ch3a_99", zd = "_lgOffset6_2ch3a_100", Md = "_lgOffset7_2ch3a_101", Od = "_lgOffset8_2ch3a_102", Id = "_lgOffset9_2ch3a_103", jd = "_lgOffset10_2ch3a_104", Td = "_lgOffset11_2ch3a_105", Ed = "_xlSize1_2ch3a_109", Ad = "_xlSize2_2ch3a_110", Ld = "_xlSize3_2ch3a_111", Rd = "_xlSize4_2ch3a_112", Bd = "_xlSize5_2ch3a_113", Pd = "_xlSize6_2ch3a_114", Fd = "_xlSize7_2ch3a_115", Kd = "_xlSize8_2ch3a_116", qd = "_xlSize9_2ch3a_117", Hd = "_xlSize10_2ch3a_118", Wd = "_xlSize11_2ch3a_119", Ud = "_xlSize12_2ch3a_120", Vd = "_xlOffset1_2ch3a_121", Xd = "_xlOffset2_2ch3a_122", Gd = "_xlOffset3_2ch3a_123", Yd = "_xlOffset4_2ch3a_124", Zd = "_xlOffset5_2ch3a_125", Jd = "_xlOffset6_2ch3a_126", Qd = "_xlOffset7_2ch3a_127", eu = "_xlOffset8_2ch3a_128", tu = "_xlOffset9_2ch3a_129", nu = "_xlOffset10_2ch3a_130", ru = "_xlOffset11_2ch3a_131", ou = "_xxlSize1_2ch3a_136", su = "_xxlSize2_2ch3a_137", au = "_xxlSize3_2ch3a_138", lu = "_xxlSize4_2ch3a_139", cu = "_xxlSize5_2ch3a_140", iu = "_xxlSize6_2ch3a_141", du = "_xxlSize7_2ch3a_142", uu = "_xxlSize8_2ch3a_143", fu = "_xxlSize9_2ch3a_144", _u = "_xxlSize10_2ch3a_145", pu = "_xxlSize11_2ch3a_146", hu = "_xxlSize12_2ch3a_147", mu = "_xxlOffset1_2ch3a_148", gu = "_xxlOffset2_2ch3a_149", yu = "_xxlOffset3_2ch3a_150", bu = "_xxlOffset4_2ch3a_151", vu = "_xxlOffset5_2ch3a_152", xu = "_xxlOffset6_2ch3a_153", wu = "_xxlOffset7_2ch3a_154", $u = "_xxlOffset8_2ch3a_155", ku = "_xxlOffset9_2ch3a_156", Nu = "_xxlOffset10_2ch3a_157", Su = "_xxlOffset11_2ch3a_158", Du = "_xxlOrderFirst_2ch3a_159", Cu = "_xxlOrderLast_2ch3a_160", zu = "_orderFirst_2ch3a_163", Mu = "_orderLast_2ch3a_164", Ou = "_smOrderFirst_2ch3a_167", Iu = "_smOrderLast_2ch3a_168", ju = "_mdOrderFirst_2ch3a_172", Tu = "_mdOrderLast_2ch3a_173", Eu = "_lgOrderFirst_2ch3a_177", Au = "_lgOrderLast_2ch3a_178", Lu = "_xlOrderFirst_2ch3a_182", Ru = "_xlOrderLast_2ch3a_183", mn = {
  column: Yc,
  Size1: Zc,
  Size2: Jc,
  Size3: Qc,
  Size4: ei,
  Size5: ti,
  Size6: ni,
  Size7: ri,
  Size8: oi,
  Size9: si,
  Size10: ai,
  Size11: li,
  Size12: ci,
  Offset1: ii,
  Offset2: di,
  Offset3: ui,
  Offset4: fi,
  Offset5: _i,
  Offset6: pi,
  Offset7: hi,
  Offset8: mi,
  Offset9: gi,
  Offset10: yi,
  Offset11: bi,
  smSize1: vi,
  smSize2: xi,
  smSize3: wi,
  smSize4: $i,
  smSize5: ki,
  smSize6: Ni,
  smSize7: Si,
  smSize8: Di,
  smSize9: Ci,
  smSize10: zi,
  smSize11: Mi,
  smSize12: Oi,
  smOffset1: Ii,
  smOffset2: ji,
  smOffset3: Ti,
  smOffset4: Ei,
  smOffset5: Ai,
  smOffset6: Li,
  smOffset7: Ri,
  smOffset8: Bi,
  smOffset9: Pi,
  smOffset10: Fi,
  smOffset11: Ki,
  mdSize1: qi,
  mdSize2: Hi,
  mdSize3: Wi,
  mdSize4: Ui,
  mdSize5: Vi,
  mdSize6: Xi,
  mdSize7: Gi,
  mdSize8: Yi,
  mdSize9: Zi,
  mdSize10: Ji,
  mdSize11: Qi,
  mdSize12: ed,
  mdOffset1: td,
  mdOffset2: nd,
  mdOffset3: rd,
  mdOffset4: od,
  mdOffset5: sd,
  mdOffset6: ad,
  mdOffset7: ld,
  mdOffset8: cd,
  mdOffset9: id,
  mdOffset10: dd,
  mdOffset11: ud,
  lgSize1: fd,
  lgSize2: _d,
  lgSize3: pd,
  lgSize4: hd,
  lgSize5: md,
  lgSize6: gd,
  lgSize7: yd,
  lgSize8: bd,
  lgSize9: vd,
  lgSize10: xd,
  lgSize11: wd,
  lgSize12: $d,
  lgOffset1: kd,
  lgOffset2: Nd,
  lgOffset3: Sd,
  lgOffset4: Dd,
  lgOffset5: Cd,
  lgOffset6: zd,
  lgOffset7: Md,
  lgOffset8: Od,
  lgOffset9: Id,
  lgOffset10: jd,
  lgOffset11: Td,
  xlSize1: Ed,
  xlSize2: Ad,
  xlSize3: Ld,
  xlSize4: Rd,
  xlSize5: Bd,
  xlSize6: Pd,
  xlSize7: Fd,
  xlSize8: Kd,
  xlSize9: qd,
  xlSize10: Hd,
  xlSize11: Wd,
  xlSize12: Ud,
  xlOffset1: Vd,
  xlOffset2: Xd,
  xlOffset3: Gd,
  xlOffset4: Yd,
  xlOffset5: Zd,
  xlOffset6: Jd,
  xlOffset7: Qd,
  xlOffset8: eu,
  xlOffset9: tu,
  xlOffset10: nu,
  xlOffset11: ru,
  xxlSize1: ou,
  xxlSize2: su,
  xxlSize3: au,
  xxlSize4: lu,
  xxlSize5: cu,
  xxlSize6: iu,
  xxlSize7: du,
  xxlSize8: uu,
  xxlSize9: fu,
  xxlSize10: _u,
  xxlSize11: pu,
  xxlSize12: hu,
  xxlOffset1: mu,
  xxlOffset2: gu,
  xxlOffset3: yu,
  xxlOffset4: bu,
  xxlOffset5: vu,
  xxlOffset6: xu,
  xxlOffset7: wu,
  xxlOffset8: $u,
  xxlOffset9: ku,
  xxlOffset10: Nu,
  xxlOffset11: Su,
  xxlOrderFirst: Du,
  xxlOrderLast: Cu,
  orderFirst: zu,
  orderLast: Mu,
  smOrderFirst: Ou,
  smOrderLast: Iu,
  mdOrderFirst: ju,
  mdOrderLast: Tu,
  lgOrderFirst: Eu,
  lgOrderLast: Au,
  xlOrderFirst: Lu,
  xlOrderLast: Ru
}, Bu = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], Pu = {
  first: "orderFirst",
  last: "orderLast"
};
function Fu(e) {
  return typeof e == "number" ? { order: e } : {};
}
function xb({ className: e, style: n, ...r }) {
  const o = [mn.column], s = { ...n };
  for (const [w, M, O, E] of Bu) {
    const I = r[M], _ = r[O], z = r[E];
    if (I != null && o.push(mn[`${w}Size${I}`]), _ != null && _ > 0 && o.push(mn[`${w}Offset${_}`]), z === "first" || z === "last") {
      const T = `${w}${Pu[z]}`;
      mn[T] && o.push(mn[T]);
    } else z != null && Object.assign(s, Fu(z));
  }
  const {
    size: l,
    offset: d,
    sizeSm: a,
    offsetSm: i,
    sizeMd: m,
    offsetMd: b,
    sizeLg: u,
    offsetLg: S,
    sizeXl: v,
    offsetXl: C,
    sizeXxl: D,
    offsetXxl: h,
    order: f,
    orderSm: y,
    orderMd: g,
    orderLg: N,
    orderXl: p,
    orderXxl: x,
    ...c
  } = r;
  return /* @__PURE__ */ t("div", { className: [...o, e].filter(Boolean).join(" "), style: s, ...c });
}
const Ku = "_stack_1yc1g_1", qu = "_gapXs_1yc1g_29", Hu = "_gapSm_1yc1g_33", Wu = "_gapMd_1yc1g_37", Uu = "_gapLg_1yc1g_41", Vu = "_gapXl_1yc1g_45", Qt = {
  stack: Ku,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: qu,
  gapSm: Hu,
  gapMd: Wu,
  gapLg: Uu,
  gapXl: Vu,
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
}, Xu = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Gu(e) {
  return typeof e != "string" ? null : Xu[e] ?? null;
}
function fr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function wb({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: s,
  justify: l,
  className: d,
  style: a,
  ...i
}) {
  const m = Gu(o), b = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", u = {
    ...o != null && !m ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...a
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Qt.stack,
        Qt[`dir-${b}`],
        fr(r) !== "wrap" ? Qt[`wrap-${fr(r)}`] : null,
        s != null ? Qt[`align-${s}`] : null,
        l != null ? Qt[`justify-${l}`] : null,
        m ? Qt[m] : null,
        d
      ].filter(Boolean).join(" "),
      style: u,
      ...i
    }
  );
}
const Yu = "_layout_1pcye_1", Zu = "_row_1pcye_7", _r = {
  layout: Yu,
  row: Zu
}, Ju = "_footer_jia9j_1", Qu = {
  footer: Ju
};
function ef({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [Qu.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const tf = "_header_1n6yq_1", nf = {
  header: tf
};
function rf({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [nf.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const of = "_sidebar_1i0sn_1", sf = "_left_1i0sn_9", af = "_right_1i0sn_13", lf = "_collapsed_1i0sn_17", cf = "_responsive_1i0sn_25", df = "_overlay_1i0sn_33", uf = "_mask_1i0sn_53", Ut = {
  sidebar: of,
  left: sf,
  right: af,
  collapsed: lf,
  responsive: cf,
  overlay: df,
  mask: uf
};
function ff({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: o = !1,
  onClose: s,
  className: l,
  children: d,
  ...a
}) {
  return Se(() => {
    if (!o || !n || s == null) return;
    const i = (m) => {
      m.key === "Escape" && s();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [o, n, s]), /* @__PURE__ */ $(Me, { children: [
    o && n ? /* @__PURE__ */ t("div", { className: `${Ut.mask} se-layout-mask`, "aria-hidden": "true", onClick: s }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          Ut.sidebar,
          e === "right" ? Ut.right : Ut.left,
          n ? null : Ut.collapsed,
          r ? Ut.responsive : null,
          o ? [Ut.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: d
      }
    )
  ] });
}
function $b({ className: e, children: n, ...r }) {
  const o = [], s = [], l = [], d = [], a = [];
  return Fr.forEach(n, (i) => {
    if (!Cn(i)) {
      l.push(i);
      return;
    }
    i.type === rf ? o.push(i) : i.type === ef ? s.push(i) : i.type === ff ? (i.props.position === "right" ? a : d).push(i) : l.push(i);
  }), /* @__PURE__ */ $("div", { className: [_r.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ $("div", { className: _r.row, children: [
      d,
      l,
      a
    ] }),
    s
  ] });
}
const _f = "_body_10zdy_1", pf = {
  body: _f
};
function kb({ as: e = "main", className: n, children: r, ...o }) {
  return /* @__PURE__ */ t(e, { className: [pf.body, n].filter(Boolean).join(" "), ...o, children: r });
}
const hf = "_track_hx8uy_1", mf = "_bar_hx8uy_31", gf = "_primary_hx8uy_39", yf = "_success_hx8uy_43", bf = "_warning_hx8uy_47", vf = "_danger_hx8uy_51", xf = "_indeterminate_hx8uy_71", wf = "_circular_hx8uy_85", $f = "_fill_hx8uy_125", gt = {
  track: hf,
  "linear-xs": "_linear-xs_hx8uy_11",
  "linear-sm": "_linear-sm_hx8uy_15",
  "linear-md": "_linear-md_hx8uy_19",
  "linear-lg": "_linear-lg_hx8uy_23",
  "linear-xl": "_linear-xl_hx8uy_27",
  bar: mf,
  primary: gf,
  success: yf,
  warning: bf,
  danger: vf,
  "shade-lighter": "_shade-lighter_hx8uy_55",
  "shade-light": "_shade-light_hx8uy_55",
  "shade-dark": "_shade-dark_hx8uy_63",
  "shade-darker": "_shade-darker_hx8uy_67",
  indeterminate: xf,
  "se-progress-slide": "_se-progress-slide_hx8uy_1",
  circular: wf,
  "circular-xs": "_circular-xs_hx8uy_91",
  "circular-sm": "_circular-sm_hx8uy_96",
  "circular-md": "_circular-md_hx8uy_101",
  "circular-lg": "_circular-lg_hx8uy_106",
  "circular-xl": "_circular-xl_hx8uy_111",
  fill: $f,
  "se-progress-spin": "_se-progress-spin_hx8uy_1"
};
function Nb({
  value: e = 0,
  max: n = 100,
  severity: r = "primary",
  shade: o,
  indeterminate: s = !1,
  variant: l = "linear",
  size: d = "md",
  className: a,
  ...i
}) {
  const m = n > 0 ? Math.min(n, Math.max(0, e)) : 0, b = n > 0 ? m / n * 100 : 0;
  if (l === "circular") {
    const S = typeof d == "string", v = 2, C = 10.5, D = 2 * Math.PI * C, h = D * (s ? 0.75 : 1), f = s ? 0 : D * (1 - b / 100);
    return /* @__PURE__ */ $(
      "svg",
      {
        width: S ? void 0 : d,
        height: S ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(m),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        id: i.id,
        style: i.style,
        className: [
          gt.circular,
          gt[r],
          o && o !== "default" ? gt[`shade-${o}`] : null,
          S ? gt[`circular-${d}`] : null,
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
              strokeDasharray: `${h} ${D}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const u = o && o !== "default" ? `shade-${o}` : null;
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
        u ? gt[u] : null,
        typeof d == "string" ? gt[`linear-${d}`] : null,
        s ? gt.indeterminate : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
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
const kf = "_wrapper_fv8kg_1", Nf = {
  wrapper: kf
};
function Sb({
  defaultTheme: e = "light",
  onChange: n,
  label: r = "Dark mode",
  className: o
}) {
  const [s, l] = Y(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  Se(() => {
    document.documentElement.dataset.theme = s ? "dark" : "light";
  }, []);
  const d = (a) => {
    const i = a.target.checked;
    l(i), document.documentElement.dataset.theme = i ? "dark" : "light", n?.(i ? "dark" : "light");
  };
  return /* @__PURE__ */ $("label", { className: [Nf.wrapper, o].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ t(wl, { checked: s, onChange: d })
  ] });
}
const Sf = "_avatar_1ow1c_1", Df = "_xs_1ow1c_12", Cf = "_sm_1ow1c_18", zf = "_md_1ow1c_24", Mf = "_lg_1ow1c_30", Of = "_xl_1ow1c_36", If = "_initials_1ow1c_42", jf = "_image_1ow1c_57", Tf = "_status_1ow1c_64", Ef = "_online_1ow1c_84", Af = "_offline_1ow1c_88", Lf = "_away_1ow1c_92", en = {
  avatar: Sf,
  xs: Df,
  sm: Cf,
  md: zf,
  lg: Mf,
  xl: Of,
  initials: If,
  image: jf,
  status: Tf,
  online: Ef,
  offline: Af,
  away: Lf
}, Pn = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function Rf(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function Bf(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return Pn[n % Pn.length] ?? Pn[0];
}
function Db({
  name: e,
  src: n,
  alt: r,
  size: o = "md",
  status: s,
  className: l
}) {
  const d = $e(() => e ? Rf(e) : "?", [e]), a = $e(() => e ? Bf(e) : Pn[0], [e]), i = n ? /* @__PURE__ */ t("img", { className: en.image, src: n, alt: r ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: en.initials, style: { background: a }, children: d });
  return /* @__PURE__ */ $(
    "span",
    {
      className: [
        en.avatar,
        en[o],
        s ? en[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": r ?? e ?? "avatar",
      children: [
        i,
        s && /* @__PURE__ */ t("span", { className: en.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Pf = "_root_13xku_1", Ff = "_left_13xku_6", Kf = "_right_13xku_7", qf = "_panel_13xku_12", Hf = "_bottom_13xku_20", Wf = "_tabList_13xku_24", Uf = "_underline_13xku_53", Vf = "_pills_13xku_72", Xf = "_tab_13xku_24", Gf = "_active_13xku_113", Yf = "_disabled_13xku_139", jt = {
  root: Pf,
  left: Ff,
  right: Kf,
  panel: qf,
  bottom: Hf,
  tabList: Wf,
  underline: Uf,
  pills: Vf,
  tab: Xf,
  active: Gf,
  disabled: Yf
};
function Cb({
  items: e,
  value: n,
  defaultValue: r,
  onChange: o,
  variant: s = "underline",
  position: l = "top",
  className: d
}) {
  const a = Ue(), i = ce(null), [m, b] = Y(r ?? e[0]?.key ?? ""), u = n ?? m, S = l === "left" || l === "right", v = (h) => {
    b(h), o?.(h);
  }, C = (h) => {
    const f = e.filter((N) => !N.disabled), y = f.findIndex((N) => N.key === u);
    let g = -1;
    h.key === "ArrowRight" || S && h.key === "ArrowDown" ? g = (y + 1) % f.length : h.key === "ArrowLeft" || S && h.key === "ArrowUp" ? g = (y - 1 + f.length) % f.length : h.key === "Home" ? g = 0 : h.key === "End" && (g = f.length - 1), g >= 0 && (h.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[g]?.key ?? "")}"]`
    )?.focus(), v(f[g]?.key ?? ""));
  }, D = e.find((h) => h.key === u);
  return /* @__PURE__ */ $("div", { className: [jt.root, jt[l], d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [jt.tabList, jt[s], jt[l]].filter(Boolean).join(" "),
        onKeyDown: C,
        children: e.map((h) => {
          const f = h.key === u;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": f,
              "aria-controls": `${a}-panel-${h.key}`,
              tabIndex: f ? 0 : -1,
              disabled: h.disabled,
              className: [
                jt.tab,
                f ? jt.active : null,
                h.disabled ? jt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => v(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    D && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${D.key}`,
        "aria-labelledby": `${a}-tab-${D.key}`,
        className: jt.panel,
        children: D.content
      }
    )
  ] });
}
const Zf = "_root_11jj0_1", Jf = "_item_11jj0_9", Qf = "_heading_11jj0_13", e_ = "_trigger_11jj0_17", t_ = "_disabled_11jj0_34", n_ = "_title_11jj0_48", r_ = "_chevron_11jj0_52", o_ = "_open_11jj0_59", s_ = "_content_11jj0_63", Tt = {
  root: Zf,
  item: Jf,
  heading: Qf,
  trigger: e_,
  disabled: t_,
  title: n_,
  chevron: r_,
  open: o_,
  content: s_
};
function zb({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: o,
  onChange: s,
  className: l
}) {
  const d = Ue(), [a, i] = Y(o ?? []), m = r ?? a, b = (u) => {
    const S = m.includes(u) ? m.filter((v) => v !== u) : n ? [...m, u] : [u];
    i(S), s?.(S);
  };
  return /* @__PURE__ */ t("div", { className: [Tt.root, l].filter(Boolean).join(" "), children: e.map((u) => {
    const S = m.includes(u.key), v = `${d}-panel-${u.key}`, C = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ $("div", { className: Tt.item, children: [
      /* @__PURE__ */ t("h3", { className: Tt.heading, children: /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          id: C,
          "aria-expanded": S,
          "aria-controls": v,
          disabled: u.disabled,
          className: [
            Tt.trigger,
            u.disabled ? Tt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => b(u.key),
          children: [
            /* @__PURE__ */ t("span", { className: Tt.title, children: u.title }),
            /* @__PURE__ */ t("span", { className: [Tt.chevron, S ? Tt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: v,
          role: "region",
          "aria-labelledby": C,
          hidden: !S,
          className: Tt.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const a_ = "_textarea_yfr3j_1", l_ = "_xs_yfr3j_25", c_ = "_sm_yfr3j_30", i_ = "_md_yfr3j_35", d_ = "_lg_yfr3j_40", u_ = "_xl_yfr3j_45", Wn = {
  textarea: a_,
  xs: l_,
  sm: c_,
  md: i_,
  lg: d_,
  xl: u_,
  "resize-none": "_resize-none_yfr3j_50",
  "resize-vertical": "_resize-vertical_yfr3j_54",
  "resize-horizontal": "_resize-horizontal_yfr3j_58",
  "resize-both": "_resize-both_yfr3j_62"
}, Mb = He(function({ size: n = "md", resize: r = "none", className: o, ...s }, l) {
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
}), f_ = "_typography_1vbya_1", __ = "_caption_1vbya_45", p_ = "_overline_1vbya_51", pr = {
  typography: f_,
  "display-1": "_display-1_1vbya_5",
  "display-2": "_display-2_1vbya_10",
  "display-3": "_display-3_1vbya_15",
  "display-4": "_display-4_1vbya_20",
  "display-5": "_display-5_1vbya_25",
  "display-6": "_display-6_1vbya_30",
  "body-1": "_body-1_1vbya_35",
  "body-2": "_body-2_1vbya_40",
  caption: __,
  overline: p_
}, h_ = {
  "display-1": "h1",
  "display-2": "h2",
  "display-3": "h3",
  "display-4": "h4",
  "display-5": "h5",
  "display-6": "h6",
  "body-1": "p",
  "body-2": "p",
  caption: "span",
  overline: "span"
}, Ob = He(function({ variant: n = "body-1", as: r, className: o, children: s, ...l }, d) {
  const a = r ?? h_[n];
  return /* @__PURE__ */ t(
    a,
    {
      ref: d,
      className: [pr.typography, pr[n], o].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), m_ = "_root_1l16s_1", g_ = "_trigger_1l16s_9", y_ = "_invalid_1l16s_40", b_ = "_placeholder_1l16s_46", v_ = "_label_1l16s_53", x_ = "_chevron_1l16s_59", w_ = "_chevronOpen_1l16s_69", $_ = "_menu_1l16s_73", k_ = "_option_1l16s_88", N_ = "_disabled_1l16s_99", S_ = "_active_1l16s_103", D_ = "_selected_1l16s_104", C_ = "_header_1l16s_114", z_ = "_xs_1l16s_121", M_ = "_sm_1l16s_127", O_ = "_md_1l16s_133", I_ = "_lg_1l16s_139", j_ = "_xl_1l16s_145", at = {
  root: m_,
  trigger: g_,
  invalid: y_,
  placeholder: b_,
  label: v_,
  chevron: x_,
  chevronOpen: w_,
  menu: $_,
  option: k_,
  disabled: N_,
  active: S_,
  selected: D_,
  header: C_,
  xs: z_,
  sm: M_,
  md: O_,
  lg: I_,
  xl: j_
}, T_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Ib({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  placeholder: s = "Select…",
  size: l = "md",
  invalid: d = !1,
  disabled: a = !1,
  className: i,
  ...m
}) {
  const b = Ue(), u = `${b}-listbox`, S = ce(null), v = ce(null), [C, D] = Y(r), [h, f] = Y(!1), y = n ?? C, g = e.map((_, z) => _.label === "" || _.disabled ? -1 : z).filter((_) => _ >= 0), N = e.findIndex((_) => _.value === y), [p, x] = Y(
    () => g.includes(0) ? 0 : g[0] ?? -1
  ), c = q(() => {
    if (a) return;
    const _ = N >= 0 && g.includes(N) ? N : g[0];
    x(_ ?? -1), f(!0);
  }, [a, N, g]), w = q(() => {
    f(!1), v.current?.focus();
  }, []);
  Se(() => {
    if (!h) return;
    const _ = (z) => {
      S.current && !S.current.contains(z.target) && f(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [h]);
  const M = (_) => {
    D(_), o?.(_), f(!1), v.current?.focus();
  }, O = (_) => {
    if (g.length === 0) return;
    const z = g.includes(p) ? g.indexOf(p) : 0, T = g[(z + _ + g.length) % g.length];
    T != null && x(T);
  }, E = (_) => {
    if (!h) {
      _.key === "ArrowDown" && (_.preventDefault(), c());
      return;
    }
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), O(1);
        break;
      case "ArrowUp":
        _.preventDefault(), O(-1);
        break;
      case "Home":
        _.preventDefault(), g[0] != null && x(g[0]);
        break;
      case "End":
        _.preventDefault(), g[g.length - 1] != null && x(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        _.preventDefault(), p >= 0 && e[p] && g.includes(p) && M(e[p]?.value ?? "");
        break;
      case "Escape":
        _.preventDefault(), w();
        break;
      case "Tab":
        f(!1);
        break;
    }
  }, I = e.find((_) => _.value === y);
  return /* @__PURE__ */ $("div", { ref: S, className: [at.root, i].filter(Boolean).join(" "), onKeyDown: E, children: [
    /* @__PURE__ */ $(
      "button",
      {
        ref: v,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": h,
        "aria-controls": u,
        "aria-invalid": d || void 0,
        disabled: a,
        className: [
          at.trigger,
          at[l],
          h ? at.open : null,
          d ? at.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => h ? f(!1) : c(),
        ...m,
        children: [
          /* @__PURE__ */ t("span", { className: I ? at.label : at.placeholder, children: I ? I.label : s }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [at.chevron, h ? at.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: T_ },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    h && /* @__PURE__ */ t(
      "div",
      {
        id: u,
        role: "listbox",
        "aria-activedescendant": p >= 0 ? `${b}-option-${p}` : void 0,
        className: at.menu,
        children: e.map(
          (_, z) => _.label === "" ? /* @__PURE__ */ t("div", { className: at.header, role: "presentation", children: _.value }, _.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${b}-option-${z}`,
              role: "option",
              "aria-selected": _.value === y,
              "aria-disabled": _.disabled || void 0,
              className: [
                at.option,
                z === p ? at.active : null,
                _.value === y ? at.selected : null,
                _.disabled ? at.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                _.disabled || M(_.value);
              },
              onMouseEnter: () => {
                !_.disabled && _.label !== "" && x(z);
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
const E_ = "_root_z9312_1", A_ = "_wrap_z9312_9", L_ = "_input_z9312_26", R_ = "_invalid_z9312_31", B_ = "_clear_z9312_57", P_ = "_menu_z9312_82", F_ = "_option_z9312_97", K_ = "_disabled_z9312_108", q_ = "_active_z9312_112", H_ = "_empty_z9312_122", W_ = "_xs_z9312_128", U_ = "_sm_z9312_135", V_ = "_md_z9312_142", X_ = "_lg_z9312_149", G_ = "_xl_z9312_156", Nt = {
  root: E_,
  wrap: A_,
  input: L_,
  invalid: R_,
  clear: B_,
  menu: P_,
  option: F_,
  disabled: K_,
  active: q_,
  empty: H_,
  xs: W_,
  sm: U_,
  md: V_,
  lg: X_,
  xl: G_
}, Y_ = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function jb({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: o,
  onSelect: s,
  placeholder: l = "",
  size: d = "md",
  invalid: a = !1,
  disabled: i = !1,
  filter: m = Y_,
  className: b,
  ...u
}) {
  const S = Ue(), v = `${S}-listbox`, C = ce(null), D = ce(null), [h, f] = Y(r), [y, g] = Y(!1), N = n ?? h, p = $e(
    () => N.trim() === "" ? [...e] : e.filter((A) => m(A, N)),
    [e, N, m]
  ), x = p.map((A, X) => A.disabled ? -1 : X).filter((A) => A >= 0), [c, w] = Y(-1), M = (A) => {
    f(A), o?.(A);
  }, O = (A) => {
    M(A.label), s?.(A.value, A), g(!1);
  }, E = (A) => {
    if (x.length === 0) return;
    const X = x.includes(c) ? x.indexOf(c) : A === 1 ? -1 : 0, H = x[(X + A + x.length) % x.length];
    H != null && w(H);
  }, I = (A) => {
    i || (M(A.target.value), g(!0), w(-1));
  }, _ = () => {
    i || N !== "" && g(!0);
  }, z = (A) => {
    C.current && !C.current.contains(A.relatedTarget) && g(!1);
  }, T = (A) => {
    if (!i)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), y ? E(1) : (g(!0), w(x[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), y && E(-1);
          break;
        case "Enter":
          A.preventDefault(), y && c >= 0 && p[c] && O(p[c]);
          break;
        case "Escape":
          A.preventDefault(), g(!1);
          break;
        case "Tab":
          y && c >= 0 && p[c] && O(p[c]), g(!1);
          break;
      }
  }, j = () => {
    M(""), w(-1), g(!0), D.current?.focus();
  };
  return /* @__PURE__ */ $("div", { ref: C, className: [Nt.root, b].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $("div", { className: [Nt.wrap, Nt[d], a ? Nt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: D,
          type: "text",
          role: "combobox",
          "aria-expanded": y,
          "aria-controls": v,
          "aria-autocomplete": "list",
          "aria-activedescendant": y && c >= 0 ? `${S}-option-${c}` : void 0,
          "aria-invalid": a || void 0,
          disabled: i,
          value: N,
          placeholder: l,
          className: Nt.input,
          onChange: I,
          onFocus: _,
          onBlur: z,
          onKeyDown: T,
          ...u
        }
      ),
      N !== "" && !i && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Nt.clear,
          "aria-label": "Clear",
          onClick: j,
          children: "×"
        }
      )
    ] }),
    y && /* @__PURE__ */ t("div", { id: v, role: "listbox", className: Nt.menu, children: p.length === 0 ? /* @__PURE__ */ t("div", { className: Nt.empty, children: "No matches" }) : p.map((A, X) => /* @__PURE__ */ t(
      "div",
      {
        id: `${S}-option-${X}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": A.disabled || void 0,
        className: [
          Nt.option,
          X === c ? Nt.active : null,
          A.disabled ? Nt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          A.disabled || O(A);
        },
        onMouseDown: (H) => {
          H.preventDefault(), A.disabled || O(A);
        },
        onMouseEnter: () => {
          A.disabled || w(X);
        },
        children: A.label
      },
      A.value
    )) })
  ] });
}
const Z_ = "_box_yzqzf_1", J_ = "_option_yzqzf_12", Q_ = "_disabled_yzqzf_23", e1 = "_selected_yzqzf_27", t1 = "_active_yzqzf_33", gn = {
  box: Z_,
  option: J_,
  disabled: Q_,
  selected: e1,
  active: t1
};
function Tb({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: o = !1,
  onChange: s,
  className: l,
  style: d,
  ...a
}) {
  const i = Ue(), [m, b] = Y(() => {
    const p = r;
    return p == null ? [] : Array.isArray(p) ? [...p] : [p];
  }), u = n == null ? m : Array.isArray(n) ? n : [n], S = e.findIndex((p) => !p.disabled), [v, C] = Y(() => S >= 0 ? S : 0), D = ce(""), h = ce(null), f = (p) => {
    b(p), s?.(o ? p : p[0] ?? "");
  }, y = e.map((p, x) => p.disabled ? -1 : x).filter((p) => p >= 0), g = (p) => {
    const x = e[p];
    if (!(!x || x.disabled))
      if (C(p), o) {
        const c = u.includes(x.value) ? u.filter((w) => w !== x.value) : [...u, x.value];
        f(c);
      } else
        f([x.value]);
  }, N = (p) => {
    if (y.length === 0) return;
    const x = y.includes(v) ? v : y[0];
    let c = -1;
    if (p.key === "ArrowDown")
      c = y[(y.indexOf(x) + 1) % y.length];
    else if (p.key === "ArrowUp")
      c = y[(y.indexOf(x) - 1 + y.length) % y.length];
    else if (p.key === "Home")
      c = y[0];
    else if (p.key === "End")
      c = y[y.length - 1];
    else if (p.key === "Enter" || p.key === " ") {
      p.preventDefault(), g(x);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(p.key)) {
      p.preventDefault();
      const w = (D.current + p.key).toLowerCase();
      D.current = w, h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        D.current = "";
      }, 500);
      const M = [...y, ...y], O = y.indexOf(x) + 1, E = M.slice(O).find(
        (I) => e[I]?.label.toLowerCase().startsWith(w)
      );
      E != null && C(E);
      return;
    }
    c >= 0 && (p.preventDefault(), C(c), o || f([e[c]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[v] ? `${i}-option-${v}` : void 0,
      style: d,
      className: [gn.box, l].filter(Boolean).join(" "),
      onKeyDown: N,
      ...a,
      children: e.map((p, x) => {
        const c = u.includes(p.value), w = x === v;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${i}-option-${x}`,
            role: "option",
            "aria-selected": c,
            "aria-disabled": p.disabled || void 0,
            className: [
              gn.option,
              c ? gn.selected : null,
              w ? gn.active : null,
              p.disabled ? gn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => g(x),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const n1 = "_group_1lmpf_1", r1 = "_legend_1lmpf_8", o1 = "_list_1lmpf_16", s1 = "_item_1lmpf_25", a1 = "_disabled_1lmpf_32", l1 = "_label_1lmpf_37", c1 = "_checkbox_1lmpf_48", Vt = {
  group: n1,
  legend: r1,
  list: o1,
  item: s1,
  disabled: a1,
  label: l1,
  checkbox: c1
};
function Eb({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: o,
  legend: s,
  name: l,
  className: d
}) {
  const [a, i] = Y(() => [...r]), m = n ?? a, b = (u, S) => {
    const v = S ? [...m, u] : m.filter((C) => C !== u);
    i(v), o?.(v);
  };
  return /* @__PURE__ */ $("fieldset", { className: [Vt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Vt.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Vt.list, children: e.map((u) => {
      const S = m.includes(u.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Vt.item, u.disabled ? Vt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: Vt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Vt.checkbox,
                name: l,
                value: u.value,
                checked: S,
                disabled: u.disabled,
                onChange: (v) => b(u.value, v.target.checked)
              }
            ),
            /* @__PURE__ */ t("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const i1 = "_group_1fnri_1", d1 = "_legend_1fnri_8", u1 = "_list_1fnri_16", f1 = "_item_1fnri_25", _1 = "_disabled_1fnri_32", p1 = "_label_1fnri_37", h1 = "_radio_1fnri_48", Xt = {
  group: i1,
  legend: d1,
  list: u1,
  item: f1,
  disabled: _1,
  label: p1,
  radio: h1
};
function Ab({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  legend: s,
  name: l,
  className: d
}) {
  const [a, i] = Y(r), m = n ?? a, b = (u) => {
    i(u), o?.(u);
  };
  return /* @__PURE__ */ $("fieldset", { className: [Xt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Xt.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Xt.list, children: e.map((u) => {
      const S = u.value === m;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Xt.item, u.disabled ? Xt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: Xt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Xt.radio,
                name: l,
                value: u.value,
                checked: S,
                disabled: u.disabled,
                onChange: (v) => b(v.target.value)
              }
            ),
            /* @__PURE__ */ t("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const m1 = "_bar_107ts_1", g1 = "_option_107ts_12", y1 = "_selected_107ts_33", b1 = "_sm_107ts_49", v1 = "_md_107ts_55", x1 = "_lg_107ts_61", yn = {
  bar: m1,
  option: g1,
  selected: y1,
  sm: b1,
  md: v1,
  lg: x1
};
function Lb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  size: s = "md",
  className: l,
  ...d
}) {
  const [a, i] = Y(
    r ?? e[0]?.value
  ), m = n ?? a, b = (u) => {
    i(u), o?.(u);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [yn.bar, yn[s], l].filter(Boolean).join(" "),
      ...d,
      children: e.map((u) => {
        const S = u.value === m;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": S,
            disabled: u.disabled,
            className: [
              yn.option,
              S ? yn.selected : null,
              u.disabled ? yn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const w1 = "_toggle_1d0zk_1", $1 = "_pressed_1d0zk_29", k1 = "_sm_1d0zk_41", N1 = "_md_1d0zk_47", S1 = "_lg_1d0zk_53", D1 = "_fullWidth_1d0zk_59", Tn = {
  toggle: w1,
  pressed: $1,
  sm: k1,
  md: N1,
  lg: S1,
  fullWidth: D1
}, Rb = He(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: o,
    size: s = "md",
    fullWidth: l = !1,
    className: d,
    type: a = "button",
    ...i
  }, m) {
    const [b, u] = Y(r), S = n ?? b, v = () => {
      const C = !S;
      u(C), o?.(C);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: m,
        type: a,
        "aria-pressed": S,
        className: [
          Tn.toggle,
          Tn[s],
          S ? Tn.pressed : null,
          l ? Tn.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: v,
        ...i
      }
    );
  }
), C1 = "_root_1cfui_1", z1 = "_action_1cfui_8", M1 = "_caret_1cfui_32", O1 = "_sm_1cfui_65", I1 = "_md_1cfui_77", j1 = "_lg_1cfui_89", T1 = "_menu_1cfui_101", E1 = "_item_1cfui_114", A1 = "_disabled_1cfui_126", L1 = "_active_1cfui_130", R1 = "_danger_1cfui_139", Et = {
  root: C1,
  action: z1,
  caret: M1,
  sm: O1,
  md: I1,
  lg: j1,
  menu: T1,
  item: E1,
  disabled: A1,
  active: L1,
  danger: R1
};
function Bb({
  label: e,
  onClick: n,
  items: r = [],
  size: o = "md",
  disabled: s = !1,
  className: l,
  ...d
}) {
  const a = Ue(), i = `${a}-menu`, m = ce(null), b = ce(null), [u, S] = Y(!1), [v, C] = Y(-1), D = r.map((p, x) => p.disabled ? -1 : x).filter((p) => p >= 0), h = q(() => {
    s || (C(D[0] ?? -1), S(!0));
  }, [s, D]), f = q(() => {
    S(!1), b.current?.focus();
  }, []);
  Se(() => {
    if (!u) return;
    const p = (x) => {
      m.current && !m.current.contains(x.target) && S(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]);
  const y = (p) => {
    const x = r[p];
    !x || x.disabled || (x.onClick?.(), S(!1), b.current?.focus());
  }, g = (p) => {
    if (D.length === 0) return;
    const x = D.includes(v) ? D.indexOf(v) : p === 1 ? -1 : 0, c = D[(x + p + D.length) % D.length];
    c != null && C(c);
  }, N = (p) => {
    if (!u) {
      (p.key === "ArrowDown" || p.key === "Enter" || p.key === " ") && (p.preventDefault(), h());
      return;
    }
    switch (p.key) {
      case "ArrowDown":
        p.preventDefault(), g(1);
        break;
      case "ArrowUp":
        p.preventDefault(), g(-1);
        break;
      case "Home":
        p.preventDefault(), D[0] != null && C(D[0]);
        break;
      case "End":
        p.preventDefault(), D[D.length - 1] != null && C(D[D.length - 1]);
        break;
      case "Enter":
      case " ":
        p.preventDefault(), v >= 0 && y(v);
        break;
      case "Escape":
        p.preventDefault(), f();
        break;
      case "Tab":
        S(!1);
        break;
    }
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: m,
      className: [Et.root, Et[o], l].filter(Boolean).join(" "),
      onKeyDown: N,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Et.action,
            disabled: s,
            onClick: n,
            children: e
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            ref: b,
            type: "button",
            className: Et.caret,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": i,
            "aria-label": "More actions",
            disabled: s,
            onClick: () => u ? S(!1) : h(),
            children: "▾"
          }
        ),
        u && /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-activedescendant": v >= 0 ? `${a}-item-${v}` : void 0,
            className: Et.menu,
            ...d,
            children: r.map((p, x) => /* @__PURE__ */ t(
              "div",
              {
                id: `${a}-item-${x}`,
                role: "menuitem",
                "aria-disabled": p.disabled || void 0,
                className: [
                  Et.item,
                  x === v ? Et.active : null,
                  p.danger ? Et.danger : null,
                  p.disabled ? Et.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => y(x),
                onMouseEnter: () => {
                  p.disabled || C(x);
                },
                children: p.label
              },
              p.key
            ))
          }
        )
      ]
    }
  );
}
const B1 = "_textbox_1uz2c_1", P1 = "_invalid_1uz2c_31", F1 = "_xs_1uz2c_37", K1 = "_sm_1uz2c_43", q1 = "_md_1uz2c_49", H1 = "_lg_1uz2c_55", W1 = "_xl_1uz2c_61", Un = {
  textbox: B1,
  invalid: P1,
  xs: F1,
  sm: K1,
  md: q1,
  lg: H1,
  xl: W1
}, Pb = He(function({ size: n = "md", invalid: r = !1, className: o, type: s = "text", ...l }, d) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: d,
      type: s,
      className: [Un.textbox, Un[n], r ? Un.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), U1 = "_wrapper_13x89_1", V1 = "_input_13x89_8", X1 = "_invalid_13x89_38", G1 = "_toggle_13x89_44", Y1 = "_xs_13x89_79", Z1 = "_sm_13x89_85", J1 = "_md_13x89_91", Q1 = "_lg_13x89_97", ep = "_xl_13x89_103", bn = {
  wrapper: U1,
  input: V1,
  invalid: X1,
  toggle: G1,
  xs: Y1,
  sm: Z1,
  md: J1,
  lg: Q1,
  xl: ep
}, Fb = He(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  showLabel: l = "Show password",
  hideLabel: d = "Hide password",
  ...a
}, i) {
  const [m, b] = Y(!1);
  return /* @__PURE__ */ $("div", { className: bn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: i,
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
        "aria-label": m ? d : l,
        disabled: s,
        onClick: () => b((u) => !u),
        children: /* @__PURE__ */ t(Ye, { name: m ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), tp = "_mask_145m8_1", np = "_invalid_145m8_31", rp = "_xs_145m8_37", op = "_sm_145m8_43", sp = "_md_145m8_49", ap = "_lg_145m8_55", lp = "_xl_145m8_61", Vn = {
  mask: tp,
  invalid: np,
  xs: rp,
  sm: op,
  md: sp,
  lg: ap,
  xl: lp
};
function hr(e, n) {
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
const Kb = He(function({
  size: n = "md",
  invalid: r = !1,
  mask: o,
  value: s,
  defaultValue: l = "",
  onChange: d,
  className: a,
  onKeyDown: i,
  ...m
}, b) {
  const [u, S] = Y(l ?? ""), v = s !== void 0, C = v ? s ?? "" : u, D = (y) => {
    const g = hr(y, o);
    return v || S(g), d?.(g), g;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: b,
      type: "text",
      value: C,
      onChange: (y) => {
        D(y.target.value);
      },
      onKeyDown: (y) => {
        if (y.key === "Backspace") {
          const g = y.currentTarget.selectionStart ?? C.length, N = C[g - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            y.preventDefault();
            const p = C.replace(/\D/g, "");
            D(hr(p.slice(0, -1), o));
          }
        }
        i?.(y);
      },
      className: [Vn.mask, Vn[n], r ? Vn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...m
    }
  );
}), cp = "_wrapper_mr2in_1", ip = "_input_mr2in_8", dp = "_invalid_mr2in_38", up = "_button_mr2in_44", fp = "_up_mr2in_76", _p = "_down_mr2in_81", pp = "_xs_mr2in_86", hp = "_sm_mr2in_92", mp = "_md_mr2in_98", gp = "_lg_mr2in_104", yp = "_xl_mr2in_110", Kt = {
  wrapper: cp,
  input: ip,
  invalid: dp,
  button: up,
  up: fp,
  down: _p,
  xs: pp,
  sm: hp,
  md: mp,
  lg: gp,
  xl: yp
};
function Zn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function bp(e) {
  let n = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? n += o : o === "." && !r ? (r = !0, n += o) : o === "-" && n.length === 0 && (n += o);
  return n;
}
function Lr(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function vp(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function xp(e, n, r, o, s) {
  const d = Zn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = d + n * s : n > 0 ? a = r + Math.ceil((d - r + 1e-9) / s) * s : a = r + Math.floor((d - r - 1e-9) / s) * s, Lr(a, r, o);
}
const qb = He(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  value: l,
  defaultValue: d,
  onChange: a,
  min: i,
  max: m,
  step: b = 1,
  incrementLabel: u = "Increment",
  decrementLabel: S = "Decrement",
  onBlur: v,
  onKeyDown: C,
  ...D
}, h) {
  const [f, y] = Y(d != null ? String(d) : ""), g = l !== void 0, N = g ? l == null ? "" : String(l) : f, p = (E) => {
    g || y(E), a?.(Zn(E));
  }, x = (E) => {
    g || y(String(E)), a?.(E);
  }, c = (E) => {
    s || x(xp(N, E, i, m, b));
  }, w = (E) => {
    p(bp(E.target.value));
  }, M = (E) => {
    E.key === "ArrowUp" ? (E.preventDefault(), c(1)) : E.key === "ArrowDown" && (E.preventDefault(), c(-1)), C?.(E);
  }, O = (E) => {
    const I = Zn(N);
    I === null ? (g || y(""), a?.(null)) : x(Lr(vp(I, i, b), i, m)), v?.(E);
  };
  return /* @__PURE__ */ $("div", { className: Kt.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: h,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: N,
        disabled: s,
        onChange: w,
        onKeyDown: M,
        onBlur: O,
        className: [Kt.input, Kt[n], r ? Kt.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...D
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Kt.button, Kt.up].join(" "),
        "aria-label": u,
        disabled: s,
        onClick: () => c(1),
        children: /* @__PURE__ */ t(Ye, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Kt.button, Kt.down].join(" "),
        "aria-label": S,
        disabled: s,
        onClick: () => c(-1),
        children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), we = {}, wp = [
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
function Jn(e) {
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
function $p({ r: e, g: n, b: r }) {
  const o = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${o(e)}${o(n)}${o(r)}`;
}
function kp({ r: e, g: n, b: r }) {
  const o = e / 255, s = n / 255, l = r / 255, d = Math.max(o, s, l), a = Math.min(o, s, l), i = d - a;
  let m = 0;
  return i !== 0 && (d === o ? m = (s - l) / i % 6 : d === s ? m = (l - o) / i + 2 : m = (o - s) / i + 4, m *= 60, m < 0 && (m += 360)), {
    h: m,
    s: d === 0 ? 0 : i / d,
    v: d
  };
}
function tn({ h: e, s: n, v: r }) {
  const o = r * n, s = e / 60, l = o * (1 - Math.abs(s % 2 - 1));
  let d = 0, a = 0, i = 0;
  s < 1 ? (d = o, a = l) : s < 2 ? (d = l, a = o) : s < 3 ? (a = o, i = l) : s < 4 ? (a = l, i = o) : s < 5 ? (d = l, i = o) : (d = o, i = l);
  const m = r - o;
  return {
    r: Math.round((d + m) * 255),
    g: Math.round((a + m) * 255),
    b: Math.round((i + m) * 255),
    a: 1
  };
}
function Np(e) {
  const n = Jn(e);
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
function mr({ r: e, g: n, b: r, a: o }) {
  return o >= 1 ? `rgb(${e}, ${n}, ${r})` : `rgba(${e}, ${n}, ${r}, ${Math.round(o * 100) / 100})`;
}
const Hb = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: s = wp,
  showButton: l = !1,
  showArrow: d = !0,
  disabled: a = !1,
  invalid: i = !1,
  placeholder: m = "",
  size: b = "md",
  tabIndex: u = 0,
  className: S,
  onChange: v,
  onValueChange: C,
  onOpen: D,
  onClose: h
}) => {
  const f = ce(null), y = ce(null), g = ce(null), N = ce(null), p = ce(null), x = Ue(), c = ce(null), w = $e(
    () => Np(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, O] = Y(!1), [E, I] = Y(null), _ = E ?? w, z = $e(() => kp(_), [_]), T = q(
    (V) => {
      const k = mr(V);
      v?.(k), C?.(k);
    },
    [v, C]
  ), j = q(
    (V, k) => {
      I(V), k && !l && T(V);
    },
    [l, T]
  ), A = q(() => {
    O(!1), I(null), h?.(), y.current?.focus();
  }, [h]), X = q(() => {
    a || (I(w), O(!0), D?.());
  }, [a, w, D]), H = q(() => {
    M ? A() : X();
  }, [M, A, X]), re = q(
    (V, k) => {
      const B = g.current;
      if (!B) return z;
      const U = B.getBoundingClientRect(), se = bt((V - U.left) / U.width, 0, 1), te = bt(1 - (k - U.top) / U.height, 0, 1);
      return { h: z.h, s: se, v: te };
    },
    [z]
  ), Z = q(
    (V, k) => {
      if (!k) return 0;
      const B = k.getBoundingClientRect();
      return bt((V - B.left) / B.width, 0, 1);
    },
    []
  ), J = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "sat";
    const k = re(V.clientX, V.clientY);
    j({ ...tn(k), a: _.a }, !0);
  }, Q = (V) => {
    if (c.current !== "sat") return;
    V.preventDefault();
    const k = re(V.clientX, V.clientY);
    j({ ...tn(k), a: _.a }, !0);
  }, G = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "hue";
    const k = Z(V.clientX, N.current);
    j({ ...tn({ ...z, h: k * 360 }), a: _.a }, !0);
  }, K = (V) => {
    if (c.current !== "hue") return;
    V.preventDefault();
    const k = Z(V.clientX, N.current);
    j({ ...tn({ ...z, h: k * 360 }), a: _.a }, !0);
  }, L = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "alpha";
    const k = Z(V.clientX, p.current);
    j({ ..._, a: k }, !0);
  }, oe = (V) => {
    if (c.current !== "alpha") return;
    V.preventDefault();
    const k = Z(V.clientX, p.current);
    j({ ..._, a: k }, !0);
  }, ie = () => {
    c.current = null;
  }, ee = q(
    (V, k) => {
      const B = { h: z.h, s: bt(z.s + V, 0, 1), v: bt(z.v + k, 0, 1) };
      j({ ...tn(B), a: _.a }, !0);
    },
    [z, _.a, j]
  ), ue = q(
    (V) => {
      const k = (z.h + V + 360) % 360;
      j({ ...tn({ ...z, h: k }), a: _.a }, !0);
    },
    [z, _.a, j]
  ), me = q(
    (V) => {
      j({ ..._, a: bt(_.a + V, 0, 1) }, !0);
    },
    [_, j]
  ), xe = (V) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), ee(-0.05, 0);
        break;
      case "ArrowRight":
        V.preventDefault(), ee(0.05, 0);
        break;
      case "ArrowUp":
        V.preventDefault(), ee(0, 0.05);
        break;
      case "ArrowDown":
        V.preventDefault(), ee(0, -0.05);
        break;
      case "Escape":
        V.preventDefault(), A();
        break;
    }
  }, Re = (V, k) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), k === "hue" ? ue(-6) : me(-0.05);
        break;
      case "ArrowRight":
        V.preventDefault(), k === "hue" ? ue(6) : me(0.05);
        break;
      case "Escape":
        V.preventDefault(), A();
        break;
    }
  }, Ie = (V, k) => {
    if (V === "hex") {
      const te = Jn(k);
      te && j({ ...te, a: _.a }, !0);
      return;
    }
    const B = k.replace(/[^\d.]/g, ""), U = Number.parseFloat(B);
    if (Number.isNaN(U)) return;
    if (V === "a") {
      const te = B.includes(".") ? bt(U, 0, 1) : bt(U / 100, 0, 1);
      j({ ..._, a: te }, !0);
      return;
    }
    const se = { r: 255, g: 255, b: 255 };
    j({ ..._, [V]: bt(U, 0, se[V]) }, !0);
  }, Ve = () => {
    E && (T(E), I(null), O(!1), h?.(), y.current?.focus());
  };
  Se(() => {
    if (!M) return;
    const V = (k) => {
      f.current && !f.current.contains(k.target) && A();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [M, A]), Se(() => {
    if (!M) return;
    const V = (k) => {
      k.key === "Escape" && A();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [M, A]);
  const be = b === "xs" ? we.dtColorpickerTriggerXs : b === "sm" ? we.dtColorpickerTriggerSm : b === "lg" ? we.dtColorpickerTriggerLg : b === "xl" ? we.dtColorpickerTriggerXl : we.dtColorpickerTriggerMd, Xe = mr(_), Ze = $p(_), Pe = { x: z.s * 100, y: (1 - z.v) * 100 }, Ge = z.h / 360 * 100, Fe = _.a * 100, Je = /* @__PURE__ */ $("div", { className: we.dtColorpickerPanel, children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: g,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(z.s * 100),
        "aria-valuetext": `Saturation ${Math.round(z.s * 100)}%, value ${Math.round(z.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        className: we.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${z.h}, 100%, 50%)`
        },
        onKeyDown: xe,
        onPointerDown: J,
        onPointerMove: Q,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtSaturationIndicator,
            style: { left: `${Pe.x}%`, top: `${Pe.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: N,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(z.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        className: we.dtHuePicker,
        onKeyDown: (V) => Re(V, "hue"),
        onPointerDown: G,
        onPointerMove: K,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtHueIndicator,
            style: { left: `${Ge}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: p,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        className: we.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dx-color-border) 0% 25%, var(--dx-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${z.h}, 100%, 50%))`
        },
        onKeyDown: (V) => Re(V, "alpha"),
        onPointerDown: L,
        onPointerMove: oe,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtAlphaIndicator,
            style: { left: `${Fe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    r && /* @__PURE__ */ $("div", { className: we.dtColorpickerRgba, children: [
      /* @__PURE__ */ $("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "Hex" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Hex",
            value: Ze,
            onChange: (V) => Ie("hex", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "R" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Red",
            value: _.r,
            onChange: (V) => Ie("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "G" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Green",
            value: _.g,
            onChange: (V) => Ie("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "B" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Blue",
            value: _.b,
            onChange: (V) => Ie("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "A" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Alpha",
            value: Math.round(_.a * 100),
            onChange: (V) => Ie("a", V.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ t("div", { className: we.dtColorpickerPalette, children: s.map((V) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        role: "button",
        className: we.dtColorpickerSwatch,
        "aria-label": V,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        style: { backgroundColor: V },
        onClick: () => {
          const k = Jn(V);
          l ? j({ ...k, a: _.a }, !1) : (I(null), T({ ...k, a: _.a }), O(!1), h?.(), y.current?.focus());
        }
      },
      V
    )) }),
    l && /* @__PURE__ */ t("div", { className: we.dtColorpickerFooter, children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: we.dtColorpickerOk,
        onClick: Ve,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ $(
    "div",
    {
      ref: f,
      className: [
        we.dtColorpicker,
        M ? we.dtColorpickerOpen : null,
        i ? we.dtColorpickerInvalid : null,
        S
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            ref: y,
            type: "button",
            role: "button",
            className: [we.dtColorpickerTrigger, be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": M,
            "aria-controls": x,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: u,
            onClick: H,
            onKeyDown: (V) => {
              V.key === "Escape" && M && (V.preventDefault(), A());
            },
            children: [
              /* @__PURE__ */ t(
                "span",
                {
                  className: we.dtColorpickerValue,
                  style: { backgroundColor: Xe },
                  "aria-hidden": "true"
                }
              ),
              m && /* @__PURE__ */ t("span", { className: we.dtColorpickerText, children: m }),
              d && /* @__PURE__ */ t("span", { className: we.dtColorpickerChevron, "aria-hidden": "true", children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        M && /* @__PURE__ */ t(
          "div",
          {
            id: x,
            role: "dialog",
            "aria-label": "Choose color",
            className: we.dtColorpickerPopup,
            children: Je
          }
        )
      ]
    }
  );
}, Ce = {}, Sp = 42;
function vt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${vt(e.month)}-${vt(e.day)}`;
}
function Dp(e, n) {
  const r = pt(e);
  return n ? `${r} ${vt(e.hour)}:${vt(e.minute)}:${vt(e.second)}` : r;
}
function Qn(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), o = Number(n[2]), s = Number(n[3]), l = n[4] != null ? Number(n[4]) : 0, d = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (o < 1 || o > 12 || s < 1 || s > 31) return null;
  const i = new Date(r, o - 1, s, l, d, a);
  return i.getFullYear() !== r || i.getMonth() !== o - 1 || i.getDate() !== s ? null : { year: r, month: o, day: s, hour: l, minute: d, second: a };
}
function qt() {
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
function En(e, n) {
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
function gr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const yr = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => vt(e.year % 100),
  MM: (e) => vt(e.month),
  M: (e) => String(e.month),
  dd: (e) => vt(e.day),
  d: (e) => String(e.day),
  HH: (e) => vt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => vt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => vt(e.second),
  s: (e) => String(e.second),
  tt: (e, n, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(n).find((s) => s.type === "dayPeriod")?.value ?? ""
}, Cp = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], zp = ["y", "M", "d", "H", "m", "s"];
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
    let d = !1;
    for (const i of Cp)
      if (n.startsWith(i, l)) {
        s += yr[i](e, o, r), l += i.length, d = !0;
        break;
      }
    if (d) continue;
    const a = n[l];
    if (zp.includes(a)) {
      s += yr[a](e, o, r), l += 1;
      continue;
    }
    s += a, l += 1;
  }
  return s;
}
const Mp = [
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
function Op(e, n) {
  const r = {};
  let o = 0, s = 0;
  for (; s < n.length; ) {
    let a = null;
    for (const i of Mp)
      if (n.startsWith(i, s)) {
        a = i;
        break;
      }
    if (a) {
      const i = e.slice(o, o + a.length);
      if (!/^\d+$/.test(i)) return null;
      const m = Number(i);
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
  const d = new Date(
    l.year,
    l.month - 1,
    l.day,
    l.hour,
    l.minute,
    l.second
  );
  return d.getFullYear() !== l.year || d.getMonth() !== l.month - 1 || d.getDate() !== l.day ? null : l;
}
function vn(e, n) {
  const r = Qn(e);
  return r || Op(e, n);
}
function Ip(e, n, r) {
  return n && pt(e) < pt(n) ? n : r && pt(e) > pt(r) ? r : e;
}
const jp = ["hour", "minute", "second"];
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
const Wb = He(function({
  size: n = "md",
  invalid: r = !1,
  value: o,
  defaultValue: s,
  format: l = "yyyy-MM-dd",
  min: d,
  max: a,
  showTime: i = !1,
  showButton: m = !0,
  allowClear: b = !1,
  inline: u = !1,
  disabledDates: S,
  locale: v = "en-US",
  onChange: C,
  onValueChange: D,
  onOpen: h,
  onClose: f,
  disabled: y,
  readOnly: g,
  placeholder: N,
  ariaLabel: p,
  triggerLabel: x,
  clearLabel: c,
  tabIndex: w,
  className: M,
  onBlur: O,
  onKeyDown: E,
  ...I
}, _) {
  const z = ce(null), T = ce(null), j = ce(null), A = ce(null), X = Ue(), H = o !== void 0, [re, Z] = Y(
    () => s != null ? An(vn(s, l) ?? qt(), l, v) : ""
  ), [J, Q] = Y(!1), [G, K] = Y(null), [L, oe] = Y(() => {
    const R = o !== void 0 ? o ?? "" : s ?? "";
    if (R) {
      const le = vn(R, l);
      if (le) return le;
    }
    return qt();
  }), ie = $e(() => d ? Qn(d) : null, [d]), ee = $e(() => a ? Qn(a) : null, [a]), ue = $e(
    () => new Set(S ?? []),
    [S]
  ), me = $e(() => {
    const R = H ? o ?? "" : re;
    return R ? vn(R, l) : null;
  }, [o, re, H, l]), xe = q(
    (R) => {
      const le = pt(R);
      return !!(ue.has(le) || ie && le < pt(ie) || ee && le > pt(ee));
    },
    [ue, ie, ee]
  ), Re = q(
    (R) => {
      if (!xe(R)) return R;
      for (let le = 1; le <= 366; le += 1) {
        const ze = At(R, le);
        if (!xe(ze)) return ze;
        const Ne = At(R, -le);
        if (!xe(Ne)) return Ne;
      }
      return R;
    },
    [xe]
  ), Ie = q(
    (R) => {
      H || Z(R ? An(R, l, v) : "");
      const le = R ? Dp(R, i) : "";
      C?.(le), D?.(le);
    },
    [H, l, v, i, C, D]
  ), Ve = q(
    (R) => {
      T.current = R, typeof _ == "function" ? _(R) : _ && (_.current = R);
    },
    [_]
  ), be = q(() => {
    Q(!1), K(null), f?.(), u || j.current?.focus();
  }, [u, f]), Xe = q(() => {
    if (y) return;
    const R = me ?? qt();
    K(R), oe(Re(R)), Q(!0), h?.();
  }, [y, me, Re, h]), Ze = q(() => {
    J ? be() : Xe();
  }, [J, be, Xe]), Pe = q((R) => {
    A.current?.querySelector(
      `[data-date="${pt(R)}"]`
    )?.focus();
  }, []), Ge = q(
    (R) => {
      if (xe(R)) return;
      const le = G ?? me, Ne = {
        ...i ? {
          hour: le?.hour ?? 0,
          minute: le?.minute ?? 0,
          second: le?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: R.year,
        month: R.month,
        day: R.day
      };
      K(Ne), i || (Ie(Ne), be());
    },
    [xe, G, me, i, Ie, be]
  ), Fe = q(
    (R, le) => {
      K((ze) => {
        const Ne = ze ?? me ?? qt(), et = Math.min(R === "hour" ? 23 : 59, Math.max(0, Ne[R] + le));
        return { ...Ne, [R]: et };
      });
    },
    [me]
  ), Je = q(
    (R, le) => {
      const ze = le.replace(/\D/g, ""), Ne = ze === "" ? 0 : Number(ze), Te = R === "hour" ? 23 : 59;
      K((et) => ({ ...et ?? me ?? qt(), [R]: Math.min(Te, Ne) }));
    },
    [me]
  ), V = q(() => {
    G && (Ie(G), be());
  }, [G, Ie, be]), k = q(() => {
    if (J) return;
    const R = vn(re, l);
    Ie(R ? Ip(R, ie, ee) : null);
  }, [J, re, l, ie, ee, Ie]), B = (R) => {
    const le = R.target.value;
    H || Z(le), J && K(null);
  }, U = (R) => {
    R.key === "Enter" ? (R.preventDefault(), J ? G && (Ie(G), be()) : k()) : R.key === "Escape" ? J && (R.preventDefault(), be()) : R.key === "ArrowDown" && !J ? (R.preventDefault(), Xe()) : R.key === "Tab" && J && Q(!1), E?.(R);
  }, se = (R) => {
    k(), O?.(R);
  }, te = (R) => {
    let le = null;
    switch (R.key) {
      case "ArrowLeft":
        le = At(L, -1), R.preventDefault();
        break;
      case "ArrowRight":
        le = At(L, 1), R.preventDefault();
        break;
      case "ArrowUp":
        le = At(L, -7), R.preventDefault();
        break;
      case "ArrowDown":
        le = At(L, 7), R.preventDefault();
        break;
      case "Home":
        le = At(L, -gr(L)), R.preventDefault();
        break;
      case "End":
        le = At(L, 6 - gr(L)), R.preventDefault();
        break;
      case "PageUp":
        le = En(L, R.shiftKey ? -12 : -1), R.preventDefault();
        break;
      case "PageDown":
        le = En(L, R.shiftKey ? 12 : 1), R.preventDefault();
        break;
      case "Enter":
      case " ":
        R.preventDefault(), Ge(L);
        break;
      case "Escape":
        R.preventDefault(), be();
        break;
      case "Tab":
        Q(!1);
        break;
    }
    if (le) {
      const ze = Re(le);
      oe(ze), setTimeout(() => Pe(ze), 0);
    }
  };
  Se(() => {
    if (!J) return;
    const R = (le) => {
      z.current && !z.current.contains(le.target) && be();
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [J, be]), Se(() => {
    if (!J) return;
    const R = (le) => {
      le.key === "Escape" && be();
    };
    return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R);
  }, [J, be]);
  const pe = () => {
    H || Z(""), C?.(""), D?.(""), T.current?.focus();
  }, ke = J && G ? An(G, l, v) : H ? o ? An(vn(o, l) ?? qt(), l, v) : "" : re, Be = H ? !!o : re.length > 0, je = u || J, rt = { year: L.year, month: L.month }, xt = new Date(rt.year, rt.month - 1, 1).getDay(), ne = {
    year: rt.year,
    month: rt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let R = 0; R < Sp; R += 1)
    De.push(At(ne, R - xt));
  const W = G ? pt(G) : me ? pt(me) : null, ae = pt(qt()), fe = `${rt.year}-${vt(rt.month)}`, he = $e(
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
    (R, le) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
      new Date(2021, 0, 3 + le)
    )
  ), Ae = n === "xs" ? Ce.dtDatepickerInputXs : n === "sm" ? Ce.dtDatepickerInputSm : n === "lg" ? Ce.dtDatepickerInputLg : n === "xl" ? Ce.dtDatepickerInputXl : Ce.dtDatepickerInputMd, Ke = /* @__PURE__ */ $(
    "div",
    {
      className: Ce.dtDatepickerCalendar,
      "aria-label": p ?? "Date picker",
      children: [
        /* @__PURE__ */ $("div", { className: Ce.dtDatepickerHeader, children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const R = Re(En(L, -1));
                oe(R), setTimeout(() => Pe(R), 0);
              },
              children: /* @__PURE__ */ t(Ye, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ t("span", { className: Ce.dtDatepickerTitle, children: de }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce.dtDatepickerNav,
              "aria-label": "Next month",
              onClick: () => {
                const R = Re(En(L, 1));
                oe(R), setTimeout(() => Pe(R), 0);
              },
              children: /* @__PURE__ */ t(Ye, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ $(
          "div",
          {
            ref: A,
            role: "grid",
            className: Ce.dtDatepickerGrid,
            onKeyDown: te,
            children: [
              /* @__PURE__ */ t("div", { role: "row", className: Ce.dtDatepickerWeekRow, children: ye.map((R) => /* @__PURE__ */ t(
                "div",
                {
                  role: "columnheader",
                  className: Ce.dtDatepickerWeekday,
                  children: R
                },
                R
              )) }),
              Array.from({ length: 6 }, (R, le) => /* @__PURE__ */ t("div", { role: "row", className: Ce.dtDatepickerRow, children: De.slice(le * 7, le * 7 + 7).map((ze) => {
                const Ne = pt(ze), Te = xe(ze), et = Ne.startsWith(fe);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Ne,
                    tabIndex: Ne === pt(L) ? 0 : -1,
                    "aria-selected": Ne === W || void 0,
                    "aria-disabled": Te || void 0,
                    "aria-label": he.format(
                      new Date(ze.year, ze.month - 1, ze.day)
                    ),
                    className: [
                      Ce.dtDatepickerDay,
                      et ? null : Ce.dtDatepickerDayOutside,
                      Ne === ae ? Ce.dtDatepickerDayToday : null,
                      Ne === W ? Ce.dtDatepickerDaySelected : null,
                      Te ? Ce.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Ge(ze),
                    onFocus: () => oe(ze),
                    children: ze.day
                  },
                  Ne
                );
              }) }, le))
            ]
          }
        ),
        i && /* @__PURE__ */ $("div", { className: Ce.dtDatepickerTime, children: [
          jp.map((R) => /* @__PURE__ */ $("label", { className: Ce.dtDatepickerTimeField, children: [
            /* @__PURE__ */ t("span", { className: Ce.dtDatepickerTimeLabel, children: Ln(R) }),
            /* @__PURE__ */ $("div", { className: Ce.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: Ce.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": Ln(R),
                  value: vt((G ?? me ?? qt())[R]),
                  onChange: (le) => Je(R, le.target.value),
                  onKeyDown: (le) => {
                    le.key === "ArrowUp" ? (le.preventDefault(), Fe(R, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), Fe(R, -1)) : le.key === "Enter" && (le.preventDefault(), V());
                  }
                }
              ),
              /* @__PURE__ */ $("span", { className: Ce.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${Ln(R).toLowerCase()}`,
                    onClick: () => Fe(R, 1),
                    children: /* @__PURE__ */ t(Ye, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${Ln(R).toLowerCase()}`,
                    onClick: () => Fe(R, -1),
                    children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, R)),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce.dtDatepickerOk,
              onClick: V,
              children: "OK"
            }
          )
        ] })
      ]
    }
  );
  return /* @__PURE__ */ $(
    "div",
    {
      ref: z,
      className: [
        Ce.dtDatepicker,
        u ? Ce.dtDatepickerInline : null,
        M
      ].filter(Boolean).join(" "),
      children: [
        !u && /* @__PURE__ */ $(Me, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Ve,
              type: "text",
              autoComplete: "off",
              value: ke,
              disabled: y,
              readOnly: g,
              placeholder: N,
              tabIndex: w,
              role: m ? void 0 : "combobox",
              "aria-label": p ?? "Date",
              "aria-haspopup": m ? void 0 : "dialog",
              "aria-expanded": m ? void 0 : je,
              "aria-controls": m ? void 0 : X,
              "aria-invalid": r || void 0,
              className: [
                Ce.dtDatepickerInput,
                Ae,
                r ? Ce.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: B,
              onKeyDown: U,
              onBlur: se,
              onClick: () => {
                m || Ze();
              },
              ...I
            }
          ),
          b && !y && Be && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                Ce.dtDatepickerClear,
                m ? Ce.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": c ?? "Clear",
              onClick: pe,
              children: /* @__PURE__ */ t(Ye, { name: "close", size: 14 })
            }
          ),
          m && /* @__PURE__ */ t(
            "button",
            {
              ref: j,
              type: "button",
              className: [
                Ce.dtDatepickerTrigger,
                J ? Ce.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": x ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": J,
              "aria-controls": X,
              disabled: y,
              onClick: Ze,
              children: /* @__PURE__ */ t(Ye, { name: "calendar", size: 16 })
            }
          )
        ] }),
        je && /* @__PURE__ */ t(
          "div",
          {
            id: X,
            role: u ? void 0 : "dialog",
            className: u ? void 0 : Ce.dtDatepickerPopup,
            children: Ke
          }
        )
      ]
    }
  );
}), Ht = {}, Ub = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: s = "Rating",
  clearLabel: l = "Clear",
  rateLabel: d = "Rate",
  tabIndex: a = 0,
  className: i,
  onChange: m,
  onValueChange: b
}) => {
  const [u, S] = Y(e), v = q(
    (y) => Math.min(n, Math.max(1, y)),
    [n]
  ), C = q(
    (y) => {
      m?.(y), b?.(y);
    },
    [m, b]
  ), D = q(
    (y) => {
      r || o || (C(y), S(y));
    },
    [r, o, C]
  ), h = (y) => {
    if (r || o) return;
    const g = u > 0 ? u : 1;
    switch (y.key) {
      case "ArrowRight":
      case "ArrowUp":
        y.preventDefault(), D(v(g + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        y.preventDefault(), D(v(g - 1));
        break;
      case "Home":
        y.preventDefault(), D(1);
        break;
      case "End":
        y.preventDefault(), D(n);
        break;
    }
  }, f = Array.from({ length: n }, (y, g) => g + 1);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": r || void 0,
      className: [
        Ht.dtRating,
        r ? Ht.dtRatingReadonly : null,
        o ? Ht.dtRatingDisabled : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      children: [
        !r && !o && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ht.dtRatingClear,
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: o,
            onClick: () => D(0),
            children: /* @__PURE__ */ t(Ye, { name: "ban", size: 16 })
          }
        ),
        f.map((y) => {
          const g = y <= e, N = y === (e > 0 ? e : u);
          return /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g,
              "aria-posinset": y,
              "aria-setsize": n,
              "aria-label": `${d} ${y}`,
              tabIndex: N ? a : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Ht.dtRatingItem,
                g ? Ht.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => D(y),
              onFocus: () => S(y),
              children: [
                /* @__PURE__ */ t("span", { className: Ht.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ t(Ye, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Ht.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ t(Ye, { name: "star-outline", size: 20 }) })
              ]
            },
            y
          );
        })
      ]
    }
  );
}, Gt = {};
function Ct(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const Vb = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: o = 0,
  max: s = 100,
  step: l = 1,
  range: d = !1,
  orientation: a = "horizontal",
  disabled: i = !1,
  label: m = "Value",
  minLabel: b = "Min",
  maxLabel: u = "Max",
  tabIndex: S = 0,
  className: v,
  onChange: C,
  onInput: D,
  onValueChange: h,
  onInputChange: f
}) => {
  const y = ce(null), g = ce(null), [N, p] = Y(null), x = N ?? e, c = $e(() => Ct(x, o, s), [x, o, s]), w = $e(
    () => Ct(d ? n : c, o, s),
    [d, n, c, o, s]
  ), M = $e(
    () => Ct(d ? Math.max(r, w) : c, o, s),
    [d, r, w, c, o, s]
  ), O = q(
    (L) => {
      const oe = s - o;
      return oe <= 0 ? 0 : (Ct(L, o, s) - o) / oe * 100;
    },
    [o, s]
  ), E = q(
    (L, oe) => {
      const ie = y.current;
      if (!ie) return o;
      const ee = ie.getBoundingClientRect();
      let ue;
      a === "vertical" ? ue = 1 - (oe - ee.top) / ee.height : ue = (L - ee.left) / ee.width;
      const me = o + Ct(ue, 0, 1) * (s - o);
      return l > 0 ? Ct(Math.round(me / l) * l, o, s) : Ct(me, o, s);
    },
    [o, s, l, a]
  ), I = q(
    (L) => {
      typeof L == "number" && p(L), C?.(L), h?.(L);
    },
    [C, h]
  ), _ = q(
    (L) => {
      typeof L == "number" && p(L), D?.(L), f?.(L);
    },
    [D, f]
  ), z = q(
    (L, oe, ie) => {
      const ee = E(oe, ie);
      let ue;
      d ? L === "min" ? ue = { min: Math.min(ee, M), max: M } : ue = { min: w, max: Math.max(ee, w) } : ue = ee, _(ue), g.current === null && I(ue);
    },
    [d, E, w, M, _, I]
  ), T = q(
    (L, oe) => {
      const ie = (l > 0 ? l : 1) * oe;
      let ee;
      d ? L === "min" ? ee = {
        min: Ct(w + ie, o, M),
        max: M
      } : ee = {
        min: w,
        max: Ct(M + ie, w, s)
      } : ee = Ct(c + ie, o, s), I(ee);
    },
    [d, l, o, s, w, M, c, I]
  ), j = (L, oe) => {
    if (!i)
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
          oe.preventDefault(), I(d ? L === "min" ? { min: o, max: M } : { min: w, max: w } : o);
          break;
        case "End":
          oe.preventDefault(), I(d ? L === "min" ? { min: M, max: M } : { min: w, max: s } : s);
          break;
      }
  }, A = (L, oe) => {
    i || (oe.preventDefault(), oe.currentTarget.focus(), typeof oe.currentTarget.setPointerCapture == "function" && oe.currentTarget.setPointerCapture(oe.pointerId), g.current = { key: L, pointerId: oe.pointerId }, z(L, oe.clientX, oe.clientY));
  }, X = (L) => {
    !g.current || g.current.pointerId !== L.pointerId || (L.preventDefault(), z(g.current.key, L.clientX, L.clientY));
  }, H = (L) => {
    !g.current || g.current.pointerId !== L.pointerId || (g.current = null, L.preventDefault(), I(d ? { min: w, max: M } : c));
  }, [re, Z] = Y(null), J = O(w), Q = O(M), G = d ? J : 0, K = Q;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Gt.dtSlider,
        a === "vertical" ? Gt.dtSliderVertical : null,
        i ? Gt.dtSliderDisabled : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ $("div", { ref: y, className: Gt.dtSliderTrack, children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Gt.dtSliderRange,
            style: a === "vertical" ? { bottom: `${G}%`, height: `${K - G}%` } : { left: `${G}%`, width: `${K - G}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(w),
            "aria-orientation": a,
            "aria-label": d ? b : m,
            "aria-disabled": i || void 0,
            tabIndex: i || d && re === "max" ? -1 : S,
            className: Gt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${J}% - 8px)` } : { left: `calc(${J}% - 8px)` },
            onKeyDown: (L) => j("min", L),
            onPointerDown: (L) => A("min", L),
            onPointerMove: X,
            onPointerUp: H,
            onFocus: () => Z("min")
          }
        ),
        d && /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(M),
            "aria-orientation": a,
            "aria-label": u,
            "aria-disabled": i || void 0,
            tabIndex: i || re === "min" ? -1 : S,
            className: Gt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${Q}% - 8px)` } : { left: `calc(${Q}% - 8px)` },
            onKeyDown: (L) => j("max", L),
            onPointerDown: (L) => A("max", L),
            onPointerMove: X,
            onPointerUp: H,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, qe = {}, Tp = "-10675199.02:48:05.4775808", Ep = "10675199.02:48:05.4775808", Rt = 86400, Bt = 3600, St = 60, Xn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, br = {
  days: Rt,
  hours: Bt,
  minutes: St,
  seconds: 1
}, Ap = {
  day: Rt,
  hour: Bt,
  minute: St,
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
    if (!s.slice(1).some((u) => u != null)) return null;
    const a = s[1] != null ? Number(s[1]) : 0, i = s[2] != null ? Number(s[2]) : 0, m = s[3] != null ? Number(s[3]) : 0, b = s[4] != null ? Number(s[4]) : 0;
    return r * (a * Rt + i * Bt + m * St + b);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (l) {
    const d = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), i = Number(l[3]), m = l[4] != null ? Number(l[4]) : 0, b = l[5] != null ? +`0.${l[5]}` : 0;
    return a > 23 || i > 59 || m > 59 ? null : r * (d * Rt + a * Bt + i * St + m + b);
  }
  return null;
}
function Lp(e) {
  return e.days * Rt + e.hours * Bt + e.minutes * St + e.seconds;
}
function vr(e) {
  let n = Math.abs(e);
  const r = Math.floor(n / Rt);
  n %= Rt;
  const o = Math.floor(n / Bt);
  n %= Bt;
  const s = Math.floor(n / St), l = Math.round(n % St * 1e9) / 1e9;
  return { days: r, hours: o, minutes: s, seconds: l };
}
function er(e, n) {
  const r = e < 0;
  let o = Math.abs(e);
  n === "minute" ? o = Math.round(o / St) * St : n === "hour" ? o = Math.round(o / Bt) * Bt : n === "day" && (o = Math.round(o / Rt) * Rt);
  let s = Math.round(o % St);
  const l = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const d = Math.floor(o / St) + l, a = d % 60, i = Math.floor(d / 60), m = i % 24, b = Math.floor(i / 24), u = r ? "-" : "", S = b > 0 ? `${b}.` : "";
  switch (n) {
    case "day":
      return `${u}${b} day${b === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${S}${nn(m)}`;
    case "minute":
      return `${u}${S}${nn(m)}:${nn(a)}`;
    default:
      return `${u}${S}${nn(m)}:${nn(a)}:${nn(s)}`;
  }
}
function xr(e, n = "second") {
  const r = Dn(e);
  return r === null ? "" : er(r, n);
}
function Gn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const Xb = He(
  function({
    size: n = "md",
    invalid: r = !1,
    value: o,
    defaultValue: s,
    min: l = Tp,
    max: d = Ep,
    step: a = "1",
    precision: i = "second",
    showDays: m = !0,
    showHours: b = !0,
    showMinutes: u = !0,
    showSeconds: S = !0,
    allowClear: v = !1,
    inline: C = !1,
    onChange: D,
    onValueChange: h,
    onOpen: f,
    onClose: y,
    disabled: g,
    placeholder: N,
    ariaLabel: p,
    triggerLabel: x,
    clearLabel: c,
    tabIndex: w,
    className: M,
    onBlur: O,
    onKeyDown: E,
    ...I
  }, _) {
    const z = ce(null), T = ce(null), j = ce(null), A = Ue(), X = o !== void 0, [H, re] = Y(
      () => s != null ? xr(s, i) : ""
    ), [Z, J] = Y(!1), [Q, G] = Y(null), [K, L] = Y(null), oe = $e(
      () => Dn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), ie = $e(
      () => Dn(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ee = $e(() => {
      const ne = Number.parseFloat(a);
      return Number.isNaN(ne) || ne <= 0 ? 1 : ne;
    }, [a]), ue = $e(() => {
      const ne = X ? o ?? "" : H;
      return ne ? Dn(ne) : null;
    }, [o, H, X]), me = q(
      (ne) => {
        const De = ne === null ? "" : er(ne, i);
        X || re(De), D?.(De), h?.(De);
      },
      [X, i, D, h]
    ), xe = q(
      (ne) => {
        ne && Q !== null && me(Q), J(!1), G(null), L(null), y?.(), C || j.current?.focus();
      },
      [C, Q, me, y]
    ), Re = q(() => {
      g || (G(ue ?? 0), J(!0), f?.());
    }, [g, ue, f]), Ie = q(() => {
      Z ? xe(!1) : Re();
    }, [Z, xe, Re]), Ve = q(
      (ne, De) => {
        G((W) => {
          const fe = (W ?? ue ?? 0) + De * ee * br[ne];
          return Gn(fe, oe, ie);
        });
      },
      [ue, ee, oe, ie]
    ), be = q(
      (ne) => {
        const De = K?.[ne];
        if (De == null) return;
        const W = Number.parseFloat(De), ae = Number.isNaN(W) ? 0 : W;
        G((fe) => {
          const he = fe ?? ue ?? 0, de = vr(he);
          de[ne] = ae;
          const Ae = (he < 0 ? -1 : 1) * Lp(de);
          return Gn(Ae, oe, ie);
        }), L(null);
      },
      [K, ue, oe, ie]
    ), Xe = (ne, De) => {
      L((W) => ({ ...W ?? {}, [ne]: De }));
    }, Ze = (ne, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), be(ne), Ve(ne, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), be(ne), Ve(ne, -1);
          break;
        case "Home":
          De.preventDefault(), be(ne), G(oe);
          break;
        case "End":
          De.preventDefault(), be(ne), G(ie);
          break;
        case "Enter":
          De.preventDefault(), be(ne), xe(!0);
          break;
      }
    }, Pe = q(() => {
      if (Z) return;
      const ne = Dn(H);
      me(ne !== null ? Gn(ne, oe, ie) : null);
    }, [Z, H, oe, ie, me]), Ge = (ne) => {
      X || re(ne.target.value);
    }, Fe = (ne) => {
      ne.key === "Enter" ? (ne.preventDefault(), Z ? xe(!0) : Pe()) : ne.key === "Escape" && Z ? (ne.preventDefault(), xe(!1)) : ne.key === "ArrowDown" && !Z ? (ne.preventDefault(), Re()) : ne.key === "Tab" && Z && J(!1), E?.(ne);
    }, Je = (ne) => {
      Pe(), O?.(ne);
    }, V = () => {
      X || re(""), D?.(""), h?.(""), T.current?.focus();
    };
    Se(() => {
      if (!Z) return;
      const ne = (De) => {
        z.current && !z.current.contains(De.target) && xe(!1);
      };
      return document.addEventListener("mousedown", ne), () => document.removeEventListener("mousedown", ne);
    }, [Z, xe]), Se(() => {
      if (!Z) return;
      const ne = (De) => {
        De.key === "Escape" && xe(!1);
      };
      return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
    }, [Z, xe]), Se(() => {
      if (C && Q !== null) {
        const ne = ue;
        (ne === null || Math.abs(Q - ne) > 1e-9) && me(Q);
      }
    }, [C, Q, ue, me]);
    const k = q(
      (ne) => {
        T.current = ne, typeof _ == "function" ? _(ne) : _ && (_.current = ne);
      },
      [_]
    ), B = X ? o ? xr(o, i) : "" : H, U = X ? !!o : H.length > 0, se = C || Z, te = Q ?? ue ?? 0, pe = vr(te), ke = Ap[i], je = ["days", "hours", "minutes", "seconds"].filter(
      (ne) => br[ne] >= ke && (ne === "days" ? m : ne === "hours" ? b : ne === "minutes" ? u : S)
    ), rt = n === "xs" ? qe.dtTimespanpickerInputXs : n === "sm" ? qe.dtTimespanpickerInputSm : n === "lg" ? qe.dtTimespanpickerInputLg : n === "xl" ? qe.dtTimespanpickerInputXl : qe.dtTimespanpickerInputMd, xt = /* @__PURE__ */ $("div", { className: qe.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ t("div", { className: qe.dtTimespanpickerPreview, "aria-live": "polite", children: er(te, i) }),
      /* @__PURE__ */ t("div", { className: qe.dtTimespanpickerUnits, children: je.map((ne) => /* @__PURE__ */ $("label", { className: qe.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ t("span", { className: qe.dtTimespanpickerUnitLabel, children: Xn[ne] }),
        /* @__PURE__ */ $("span", { className: qe.dtTimespanpickerUnitControl, children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: qe.dtTimespanpickerUnitInput,
              inputMode: "decimal",
              value: K?.[ne] ?? String(pe[ne]),
              onChange: (De) => Xe(ne, De.target.value),
              onKeyDown: (De) => Ze(ne, De),
              onBlur: () => be(ne)
            }
          ),
          /* @__PURE__ */ $("span", { className: qe.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Xn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Ve(ne, 1);
                },
                children: /* @__PURE__ */ t(Ye, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Xn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Ve(ne, -1);
                },
                children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, ne)) }),
      /* @__PURE__ */ t("div", { className: qe.dtTimespanpickerFooter, children: /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: qe.dtTimespanpickerOk,
          onClick: () => xe(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ $(
      "div",
      {
        ref: z,
        className: [
          qe.dtTimespanpicker,
          C ? qe.dtTimespanpickerInline : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !C && /* @__PURE__ */ $(Me, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: k,
                type: "text",
                autoComplete: "off",
                value: B,
                disabled: g,
                placeholder: N,
                tabIndex: w,
                role: "combobox",
                "aria-label": p ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                "aria-invalid": r || void 0,
                className: [
                  qe.dtTimespanpickerInput,
                  rt,
                  r ? qe.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Ge,
                onKeyDown: Fe,
                onBlur: Je,
                ...I
              }
            ),
            v && !g && U && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: qe.dtTimespanpickerClear,
                "aria-label": c ?? "Clear",
                onClick: V,
                children: /* @__PURE__ */ t(Ye, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: j,
                type: "button",
                className: [
                  qe.dtTimespanpickerTrigger,
                  Z ? qe.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": x ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                disabled: g,
                onClick: Ie,
                children: /* @__PURE__ */ t(Ye, { name: "clock", size: 16 })
              }
            )
          ] }),
          se && /* @__PURE__ */ t(
            "div",
            {
              id: A,
              role: C ? void 0 : "dialog",
              "aria-label": p ?? "Time span picker",
              className: C ? void 0 : qe.dtTimespanpickerPopup,
              children: xt
            }
          )
        ]
      }
    );
  }
), Rp = "_wrapper_t1zvh_1", Bp = "_cells_t1zvh_8", Pp = "_cell_t1zvh_8", Fp = "_invalid_t1zvh_63", Kp = "_live_t1zvh_72", Yt = {
  wrapper: Rp,
  cells: Bp,
  cell: Pp,
  "cell-sm": "_cell-sm_t1zvh_45",
  "cell-md": "_cell-md_t1zvh_51",
  "cell-lg": "_cell-lg_t1zvh_57",
  invalid: Fp,
  live: Kp
};
function wr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Gb = He(
  function({
    length: n = 6,
    value: r,
    defaultValue: o,
    onChange: s,
    invalid: l = !1,
    size: d = "md",
    autoFocus: a = !1,
    disabled: i = !1,
    label: m = "Security code",
    liveAnnounce: b = !0,
    className: u,
    "aria-label": S
  }, v) {
    const C = Ue(), D = r !== void 0, [h, f] = Y(wr(o).join("")), y = D ? wr(r).join("") : h, g = Array.from({ length: n }, (I, _) => y[_] ?? ""), N = ce([]), [p, x] = Y(""), c = (I) => {
      D || f(I), s?.(I);
    }, w = (I) => {
      const _ = N.current[I];
      _ && !_.disabled && (_.focus(), _.select());
    }, M = (I, _) => {
      const z = _.replace(/\D/g, "").slice(-1), T = y.split("");
      if (z) {
        T[I] = z;
        const j = T.join("").slice(0, n);
        c(j), j.length < n ? w(I + 1) : b && x("Code complete");
      }
    }, O = (I, _) => {
      if (_.key === "Backspace") {
        if (_.preventDefault(), y[I]) {
          const z = y.split("");
          z[I] = "", c(z.join(""));
        } else if (I > 0) {
          const z = y.split("");
          z[I - 1] = "", c(z.join("")), w(I - 1);
        }
      } else _.key === "ArrowLeft" && I > 0 ? (_.preventDefault(), w(I - 1)) : _.key === "ArrowRight" && I < n - 1 ? (_.preventDefault(), w(I + 1)) : _.key === "Home" ? (_.preventDefault(), w(0)) : _.key === "End" && (_.preventDefault(), w(n - 1));
    }, E = (I, _) => {
      _.preventDefault();
      const z = _.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!z) return;
      const T = y.split("");
      let j = 0;
      for (let X = 0; X < z.length && I + X < n; X++)
        T[I + X] = z[X] ?? "", j++;
      const A = T.join("");
      c(A), A.length >= n ? b && x("Code complete") : w(I + j);
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: [Yt.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": S ?? m,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Yt.cells, Yt[d]].join(" "), children: g.map((I, _) => /* @__PURE__ */ t(
            "input",
            {
              ref: (z) => {
                N.current[_] = z, _ === 0 && v && (typeof v == "function" ? v(z) : v.current = z);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: i,
              "aria-label": `Digit ${_ + 1} of ${n}`,
              "aria-invalid": l && I !== "" ? !0 : void 0,
              autoFocus: a && _ === 0,
              className: [Yt.cell, Yt[`cell-${d}`], l ? Yt.invalid : null].filter(Boolean).join(" "),
              onChange: (z) => M(_, z.target.value),
              onKeyDown: (z) => O(_, z),
              onPaste: (z) => E(_, z),
              onFocus: (z) => z.target.select(),
              onBlur: () => {
                b && x("");
              }
            },
            _
          )) }),
          b && /* @__PURE__ */ t("span", { id: `${C}-live`, role: "status", "aria-live": "polite", className: Yt.live, children: p })
        ]
      }
    );
  }
), qp = "_wrapper_itqsj_1", Hp = "_header_itqsj_7", Wp = "_label_itqsj_15", Up = "_clear_itqsj_22", Vp = "_canvas_itqsj_53", Xp = "_disabled_itqsj_69", rn = {
  wrapper: qp,
  header: Hp,
  label: Wp,
  clear: Up,
  canvas: Vp,
  disabled: Xp
}, Yb = He(
  function({
    value: n,
    defaultValue: r,
    onChange: o,
    penColor: s = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: a = "Signature",
    width: i,
    height: m = 140,
    disabled: b = !1,
    className: u
  }, S) {
    const v = ce(null), C = ce(!1), D = ce(!1), h = ce({ x: 0, y: 0 });
    Se(() => {
      const c = v.current;
      if (!c) return;
      const w = window.devicePixelRatio || 1, M = Math.round((i ?? c.clientWidth) * w), O = Math.round(m * w);
      (c.width !== M || c.height !== O) && (c.width = M, c.height = O);
      const E = c.getContext("2d");
      if (!E) return;
      E.setTransform(w, 0, 0, w, 0, 0), E.lineWidth = l, E.strokeStyle = s, E.lineCap = "round", E.lineJoin = "round";
      const I = n ?? r;
      if (I) {
        const _ = new Image();
        _.onload = () => {
          E.drawImage(_, 0, 0, c.clientWidth, m);
        }, _.src = I;
      }
    }, [n, r, s, l, i, m]);
    const f = () => {
      const c = v.current;
      if (!c) return;
      const w = c.toDataURL("image/png");
      o?.(w);
    }, y = () => {
      const c = v.current;
      if (!c) return;
      const w = c.getContext("2d");
      w && w.clearRect(0, 0, c.width, c.height), o?.("");
    };
    tr(S, () => ({
      clear: y,
      toDataURL: (c = "image/png", w) => v.current?.toDataURL(c, w) ?? ""
    }));
    const g = (c) => {
      const w = c.currentTarget.getBoundingClientRect();
      return { x: c.clientX - w.left, y: c.clientY - w.top };
    }, N = (c) => {
      b || (c.preventDefault(), typeof c.currentTarget.setPointerCapture == "function" && c.currentTarget.setPointerCapture(c.pointerId), C.current = !0, D.current = !1, h.current = g(c));
    }, p = (c) => {
      if (!C.current) return;
      c.preventDefault();
      const w = c.currentTarget.getContext("2d");
      if (!w) return;
      const M = g(c);
      w.beginPath(), w.moveTo(h.current.x, h.current.y), w.lineTo(M.x, M.y), w.stroke(), h.current = M, D.current = !0;
    }, x = (c) => {
      C.current && (c.preventDefault(), C.current = !1, D.current && f());
    };
    return /* @__PURE__ */ $("div", { className: [rn.wrapper, u, b ? rn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ $("div", { className: rn.header, children: [
        /* @__PURE__ */ t("span", { className: rn.label, children: a }),
        /* @__PURE__ */ t("button", { type: "button", className: rn.clear, onClick: y, disabled: b, children: d })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: v,
          role: "img",
          "aria-label": a,
          "aria-disabled": b || void 0,
          style: { width: i ? `${i}px` : void 0, height: `${m}px` },
          className: rn.canvas,
          onPointerDown: N,
          onPointerMove: p,
          onPointerUp: x,
          onPointerCancel: x
        }
      )
    ] });
  }
), Gp = "_wrapper_1v23y_1", Yp = "_trigger_1v23y_7", Zp = "_list_1v23y_35", Jp = "_row_1v23y_44", Qp = "_name_1v23y_59", eh = "_size_1v23y_68", th = "_progress_1v23y_74", nh = "_fill_1v23y_82", rh = "_status_1v23y_99", oh = "_remove_1v23y_106", zt = {
  wrapper: Gp,
  trigger: Yp,
  list: Zp,
  row: Jp,
  name: Qp,
  size: eh,
  progress: th,
  fill: nh,
  status: rh,
  remove: oh
};
function sh(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const Zb = He(function({
  url: n,
  multiple: r = !1,
  parameterName: o = "files",
  auto: s = !0,
  headers: l,
  accept: d,
  chooseText: a = "Upload",
  children: i,
  onProgress: m,
  onComplete: b,
  onError: u
}, S) {
  const v = ce(null), [C, D] = Y([]), h = ce(/* @__PURE__ */ new Map()), f = (x, c) => {
    D((w) => w.map((M) => M.file.name === x ? { ...M, ...c } : M));
  }, y = (x) => {
    if (!n) return;
    const c = new XMLHttpRequest();
    h.current.set(x.file.name, c);
    const w = new FormData();
    if (w.append(o, x.file), c.upload.addEventListener("progress", (M) => {
      if (!M.lengthComputable) return;
      const O = Math.round(M.loaded / M.total * 100);
      f(x.file.name, { state: "uploading", progress: O }), m?.(x.file.name, O);
    }), c.addEventListener("load", () => {
      c.status >= 200 && c.status < 300 ? (f(x.file.name, { state: "complete", progress: 100 }), b?.(x.file.name)) : (f(x.file.name, { state: "error", message: `HTTP ${c.status}` }), u?.(x.file.name, `HTTP ${c.status}`));
    }), c.addEventListener("error", () => {
      f(x.file.name, { state: "error", message: "Network error" }), u?.(x.file.name, "Network error");
    }), l)
      for (const [M, O] of Object.entries(l))
        c.setRequestHeader(M, O);
    c.open("POST", n), c.send(w), f(x.file.name, { state: "uploading", progress: 0 });
  }, g = (x) => {
    if (!x) return;
    const c = [...x].map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    D((w) => [...w, ...c]), v.current && (v.current.value = ""), s && c.forEach(y);
  }, N = (x) => {
    h.current.get(x)?.abort(), h.current.delete(x), D((w) => w.filter((M) => M.file.name !== x));
  }, p = i ?? /* @__PURE__ */ $("button", { type: "button", className: zt.trigger, onClick: () => v.current?.click(), children: [
    /* @__PURE__ */ t(Ye, { name: "upload", size: 14 }),
    a
  ] });
  return tr(S, () => ({
    open: () => v.current?.click(),
    upload: () => C.forEach((x) => x.state === "pending" ? y(x) : null)
  })), /* @__PURE__ */ $("div", { className: zt.wrapper, children: [
    p,
    /* @__PURE__ */ t(
      "input",
      {
        ref: v,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: d,
        "data-testid": "upload-input",
        onChange: (x) => g(x.target.files)
      }
    ),
    !i && C.length > 0 && /* @__PURE__ */ t("ul", { className: zt.list, children: C.map(({ file: x, state: c, progress: w, message: M }) => /* @__PURE__ */ $("li", { className: zt.row, "data-state": c, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: zt.name, children: x.name }),
      /* @__PURE__ */ t("span", { className: zt.size, children: sh(x.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: zt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": w,
          children: /* @__PURE__ */ t("span", { className: zt.fill, style: { width: `${w}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: zt.status, role: "status", children: c === "uploading" ? "Uploading" : c === "complete" ? "Complete" : c === "error" ? M ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: zt.remove,
          "aria-label": `Remove ${x.name}`,
          onClick: () => N(x.name),
          children: /* @__PURE__ */ t(Ye, { name: "close", size: 14 })
        }
      )
    ] }, x.name)) })
  ] });
}), ah = "_zone_14tvz_1", lh = "_dragging_14tvz_23", ch = "_caption_14tvz_28", ih = "_browse_14tvz_40", dh = "_disabled_14tvz_67", xn = {
  zone: ah,
  dragging: lh,
  caption: ch,
  browse: ih,
  disabled: dh
};
function uh(e, n) {
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
const Jb = He(function({
  accept: n,
  multiple: r = !1,
  onDrop: o,
  label: s = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: d = "Browse",
  disabled: a = !1,
  className: i
}, m) {
  const b = ce(null), [u, S] = Y(!1), v = (y) => {
    if (!y || y.length === 0) return;
    const g = [...y].filter((N) => uh(N, n ?? ""));
    g.length !== 0 && o?.(g);
  }, C = (y) => {
    a || (y.preventDefault(), S(!0));
  }, D = (y) => {
    a || (y.preventDefault(), y.dataTransfer.dropEffect = "copy", S(!0));
  }, h = (y) => {
    a || y.currentTarget.contains(y.relatedTarget) || S(!1);
  }, f = (y) => {
    a || (y.preventDefault(), S(!1), v(y.dataTransfer.files));
  };
  return tr(m, () => ({
    open: () => b.current?.click()
  })), /* @__PURE__ */ $(
    "div",
    {
      role: "region",
      "aria-label": s,
      className: [xn.zone, u ? xn.dragging : null, a ? xn.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: C,
      onDragOver: D,
      onDragLeave: h,
      onDrop: f,
      children: [
        /* @__PURE__ */ t("p", { className: xn.caption, children: u ? l : s }),
        !a && /* @__PURE__ */ t("button", { type: "button", className: xn.browse, onClick: () => b.current?.click(), children: d }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: b,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (y) => {
              v(y.target.files), y.target.value = "";
            }
          }
        )
      ]
    }
  );
}), fh = "_root_1dfo5_1", _h = "_menubar_1dfo5_5", ph = "_horizontal_1dfo5_15", hh = "_vertical_1dfo5_20", mh = "_itemWrapper_1dfo5_25", gh = "_item_1dfo5_25", yh = "_disabled_1dfo5_61", bh = "_icon_1dfo5_68", vh = "_text_1dfo5_75", xh = "_caret_1dfo5_79", wh = "_hasChildren_1dfo5_85", $h = "_submenu_1dfo5_94", kh = "_submenuItem_1dfo5_118", lt = {
  root: fh,
  menubar: _h,
  horizontal: ph,
  vertical: hh,
  itemWrapper: mh,
  item: gh,
  disabled: yh,
  icon: bh,
  text: vh,
  caret: xh,
  hasChildren: wh,
  submenu: $h,
  submenuItem: kh
};
function wn(e) {
  return !!e.disabled;
}
function Qb({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: s = "Menu",
  className: l
}) {
  const d = Ue(), a = ce(null), i = ce(null), [m, b] = Y(null), u = ce(0), S = ce(null), v = q(
    (f) => {
      const y = { text: f.text, value: f.value, path: f.path };
      (r ?? o)?.(y);
    },
    [r, o]
  ), C = (f, y) => {
    if (!wn(f)) {
      if (f.children && f.children.length > 0) {
        const g = m === y, N = Date.now() - u.current < 600;
        if (g && N) {
          u.current = 0;
          return;
        }
        b((p) => p === y ? null : y);
        return;
      }
      v(f), b(null);
    }
  }, D = (f) => {
    wn(f) || f.children && f.children.length > 0 || (v(f), b(null));
  };
  Se(() => {
    if (m == null) return;
    const f = (y) => {
      a.current && !a.current.contains(y.target) && b(null);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]), Se(() => {
    if (S.current != null && m === S.current) {
      const f = `${d}-submenu-${m}`;
      document.getElementById(f)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), S.current = null;
    }
  }, [m, d]);
  const h = (f) => {
    const y = i.current;
    if (!y) return;
    const g = Array.from(
      y.querySelectorAll('[data-top="true"]')
    ).filter((x) => !x.hasAttribute("disabled") && x.getAttribute("aria-disabled") !== "true");
    if (m != null) {
      const x = `${d}-submenu-${m}`, c = document.getElementById(x);
      if (c) {
        const w = Array.from(c.querySelectorAll('[role="menuitem"]')).filter(
          (E) => E.getAttribute("aria-disabled") !== "true"
        ), M = document.activeElement, O = M ? w.indexOf(M) : -1;
        if (f.key === "ArrowDown") {
          f.preventDefault(), O === -1 ? w[0]?.focus() : w[(O + 1) % w.length]?.focus();
          return;
        }
        if (f.key === "ArrowUp") {
          f.preventDefault(), O === -1 ? w[w.length - 1]?.focus() : w[(O - 1 + w.length) % w.length]?.focus();
          return;
        }
        if (f.key === "Escape") {
          f.preventDefault(), b(null), y.querySelector(`[data-top="true"][data-index="${m}"]`)?.focus();
          return;
        }
        if (f.key === "Enter" || f.key === " ")
          return;
      }
      if (f.key === "Escape") {
        f.preventDefault(), b(null);
        return;
      }
    }
    const N = document.activeElement, p = N ? g.indexOf(N) : -1;
    if (f.key === "ArrowRight" || n === "vertical" && f.key === "ArrowDown") {
      if (f.preventDefault(), g.length === 0) return;
      const x = p === -1 ? 0 : (p + 1) % g.length;
      g[x]?.focus();
      return;
    }
    if (f.key === "ArrowLeft" || n === "vertical" && f.key === "ArrowUp") {
      if (f.preventDefault(), g.length === 0) return;
      const x = p === -1 ? g.length - 1 : (p - 1 + g.length) % g.length;
      g[x]?.focus();
      return;
    }
    if (f.key === "ArrowDown") {
      if (p >= 0) {
        const x = N?.getAttribute("data-index"), c = x != null ? Number(x) : -1, w = c >= 0 ? e[c] : void 0;
        w?.children && w.children.length > 0 && !wn(w) && (f.preventDefault(), S.current = c, b(c));
      }
      return;
    }
    if (f.key === "Home") {
      f.preventDefault(), g[0]?.focus();
      return;
    }
    if (f.key === "End") {
      f.preventDefault(), g[g.length - 1]?.focus();
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
          ref: i,
          role: "menubar",
          "aria-label": s,
          className: lt.menubar,
          onKeyDown: h,
          children: e.map((f, y) => {
            const g = !!f.children && f.children.length > 0, N = m === y, p = wn(f), x = `${d}-submenu-${y}`;
            return /* @__PURE__ */ $(
              "div",
              {
                className: lt.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && g && !p && (u.current = Date.now(), b(y));
                },
                onMouseLeave: () => {
                  n === "horizontal" && g && b((c) => c === y ? null : c);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ $(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": y,
                      "data-dx-menu-item": "",
                      "aria-disabled": p || void 0,
                      "aria-haspopup": g ? "menu" : void 0,
                      "aria-expanded": g ? N : void 0,
                      "aria-controls": g ? x : void 0,
                      "aria-current": (f.path && !g, void 0),
                      tabIndex: p ? -1 : 0,
                      disabled: p,
                      className: [lt.item, p ? lt.disabled : null, g ? lt.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => C(f, y),
                      children: [
                        f.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: f.icon }) : null,
                        /* @__PURE__ */ t("span", { className: lt.text, children: f.text }),
                        g ? /* @__PURE__ */ t("span", { className: lt.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  g && N ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: x,
                      role: "menu",
                      className: lt.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": f.text,
                      children: f.children?.map((c, w) => {
                        const M = wn(c), O = !!c.children && c.children.length > 0;
                        return /* @__PURE__ */ $(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": M || void 0,
                            "aria-haspopup": O ? "menu" : void 0,
                            tabIndex: M ? -1 : 0,
                            disabled: M,
                            className: [lt.submenuItem, M ? lt.disabled : null].filter(Boolean).join(" "),
                            onClick: () => D(c),
                            children: [
                              c.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: c.icon }) : null,
                              /* @__PURE__ */ t("span", { className: lt.text, children: c.text })
                            ]
                          },
                          `${c.text}-${w}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${f.text}-${y}`
            );
          })
        }
      )
    }
  );
}
const Nh = "_root_1hs3b_1", Sh = "_list_1hs3b_9", Dh = "_item_1hs3b_14", Ch = "_trigger_1hs3b_18", zh = "_disabled_1hs3b_44", Mh = "_expanded_1hs3b_51", Oh = "_icon_1hs3b_55", Ih = "_text_1hs3b_66", jh = "_caret_1hs3b_73", Th = "_open_1hs3b_80", Eh = "_submenu_1hs3b_84", Ah = "_submenuItem_1hs3b_93", Lh = "_nestedWrapper_1hs3b_122", Rh = "_nestedTrigger_1hs3b_127", Bh = "_nestedMenu_1hs3b_152", Ph = "_iconOnly_1hs3b_160", Oe = {
  root: Nh,
  list: Sh,
  item: Dh,
  trigger: Ch,
  disabled: zh,
  expanded: Mh,
  icon: Oh,
  text: Ih,
  caret: jh,
  open: Th,
  submenu: Eh,
  submenuItem: Ah,
  nestedWrapper: Lh,
  nestedTrigger: Rh,
  nestedMenu: Bh,
  iconOnly: Ph
};
function Fh({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: o
}) {
  const s = !!e.children && e.children.length > 0, [l, d] = Y(!1), a = `${n}-nested-${r}`, i = !!e.disabled, m = () => {
    if (!i) {
      if (s) {
        d((u) => !u);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, b = (u) => {
    u.key === "Enter" || u.key === " " ? (u.preventDefault(), m()) : u.key === "Escape" && l && (u.preventDefault(), d(!1));
  };
  return s ? /* @__PURE__ */ $("div", { className: Oe.nestedWrapper, children: [
    /* @__PURE__ */ $(
      "button",
      {
        type: "button",
        "aria-expanded": l,
        "aria-controls": a,
        "aria-disabled": i || void 0,
        disabled: i,
        tabIndex: i ? -1 : 0,
        className: [Oe.nestedTrigger, i ? Oe.disabled : null].filter(Boolean).join(" "),
        onClick: m,
        onKeyDown: b,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: Oe.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [Oe.caret, l ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    l ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: Oe.nestedMenu, children: e.children?.map((u, S) => {
      const v = !!u.disabled;
      return /* @__PURE__ */ $(
        "div",
        {
          role: "menuitem",
          "aria-disabled": v || void 0,
          tabIndex: v ? -1 : 0,
          className: [Oe.submenuItem, v ? Oe.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            v || u.children && u.children.length > 0 || o({ text: u.text, value: u.value, path: u.path });
          },
          onKeyDown: (C) => {
            if (C.key === "Enter" || C.key === " ") {
              if (C.preventDefault(), v) return;
              o({ text: u.text, value: u.value, path: u.path });
            }
          },
          children: [
            u.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: u.icon }) : null,
            /* @__PURE__ */ t("span", { className: Oe.text, children: u.text })
          ]
        },
        `${u.text}-${S}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ $(
    "div",
    {
      role: "menuitem",
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : 0,
      className: [Oe.submenuItem, i ? Oe.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        i || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (u) => {
        if (u.key === "Enter" || u.key === " ") {
          if (u.preventDefault(), i) return;
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
function e0({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: o,
  ShowArrow: s,
  displayStyle: l,
  DisplayStyle: d,
  onClick: a,
  Click: i,
  ariaLabel: m = "Panel menu",
  className: b
}) {
  const u = Ue(), S = n ?? r ?? !1, v = o ?? s ?? !0, C = l ?? d ?? "iconAndText", [D, h] = Y([]), f = q(
    (N) => {
      const p = { text: N.text, value: N.value, path: N.path };
      (a ?? i)?.(p);
    },
    [a, i]
  ), y = (N, p, x) => {
    if (!x.disabled) {
      if (p) {
        h((c) => c.includes(N) ? c.filter((M) => M !== N) : S ? [...c, N] : [N]);
        return;
      }
      f(x);
    }
  }, g = (N) => {
    const p = N.target;
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "Escape") {
        const x = p.getAttribute("aria-controls");
        if (x) {
          const c = x.match(/-panel-(\d+)$/);
          if (c) {
            const w = Number(c[1]);
            h((M) => M.filter((O) => O !== w));
          }
        } else {
          const c = p.closest('[role="menu"]');
          if (c) {
            const M = c.id.match(/-panel-(\d+)$/);
            if (M) {
              const O = Number(M[1]);
              h((I) => I.filter((_) => _ !== O)), document.getElementById(`${u}-trigger-${O}`)?.focus();
            }
          }
        }
        N.preventDefault();
        return;
      }
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const x = Array.from(
          N.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((O) => !O.hasAttribute("disabled") && O.getAttribute("aria-disabled") !== "true"), c = x.indexOf(p);
        if (c === -1) return;
        N.preventDefault();
        const w = N.key === "ArrowDown" ? 1 : -1;
        x[(c + w + x.length) % x.length]?.focus();
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
      onKeyDown: g,
      children: /* @__PURE__ */ t("div", { className: Oe.list, role: "presentation", children: e.map((N, p) => {
        const x = !!N.children && N.children.length > 0, c = D.includes(p), w = !!N.disabled, M = `${u}-panel-${p}`, O = `${u}-trigger-${p}`;
        return /* @__PURE__ */ $("div", { className: Oe.item, children: [
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              id: O,
              "aria-expanded": x ? c : void 0,
              "aria-controls": x ? M : void 0,
              "aria-disabled": w || void 0,
              disabled: w,
              tabIndex: w ? -1 : 0,
              className: [
                Oe.trigger,
                w ? Oe.disabled : null,
                c ? Oe.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => y(p, x, N),
              children: [
                N.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: N.icon }) : null,
                C === "iconAndText" ? /* @__PURE__ */ t("span", { className: Oe.text, children: N.text }) : /* @__PURE__ */ t("span", { className: Oe.text, "aria-label": N.text, children: N.icon ? null : N.text.slice(0, 1) }),
                x && v ? /* @__PURE__ */ t("span", { className: [Oe.caret, c ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          x && c ? /* @__PURE__ */ t("div", { id: M, role: "menu", className: Oe.submenu, "aria-labelledby": O, children: N.children?.map((E, I) => /* @__PURE__ */ t(
            Fh,
            {
              item: E,
              baseId: u,
              parentKey: `${p}-${I}`,
              onEmit: f
            },
            `${E.text}-${I}`
          )) }) : null
        ] }, `${N.text}-${p}`);
      }) })
    }
  );
}
const Kh = "_root_pjwno_1", qh = "_trigger_pjwno_7", Hh = "_defaultTrigger_pjwno_40", Wh = "_avatar_pjwno_46", Uh = "_menu_pjwno_58", Vh = "_item_pjwno_74", Xh = "_disabled_pjwno_88", Gh = "_active_pjwno_97", Yh = "_icon_pjwno_107", Zh = "_text_pjwno_114", Mt = {
  root: Kh,
  trigger: qh,
  defaultTrigger: Hh,
  avatar: Wh,
  menu: Uh,
  item: Vh,
  disabled: Xh,
  active: Gh,
  icon: Yh,
  text: Zh
};
function t0({
  items: e,
  trigger: n,
  Template: r,
  onClick: o,
  Click: s,
  ariaLabel: l = "Profile menu",
  className: d
}) {
  const a = Ue(), i = `${a}-menu`, m = ce(null), b = ce(null), [u, S] = Y(!1), [v, C] = Y(-1), D = n ?? r, h = e.map((c, w) => c.disabled ? -1 : w).filter((c) => c >= 0), f = q(
    (c) => {
      if (c.disabled) return;
      const w = { text: c.text, path: c.path };
      (o ?? s)?.(w), S(!1), b.current?.focus();
    },
    [o, s]
  ), y = q(() => {
    C(h[0] ?? -1), S(!0);
  }, [h]), g = q(() => {
    S(!1), C(-1), b.current?.focus();
  }, []);
  Se(() => {
    if (!u) return;
    const c = (w) => {
      m.current && !m.current.contains(w.target) && (S(!1), C(-1));
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, [u]), Se(() => {
    if (!u) return;
    const c = (w) => {
      w.key === "Escape" && (w.preventDefault(), g());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [u, g]);
  const N = (c) => {
    if (h.length === 0) return;
    const w = h.indexOf(v), M = w === -1 ? 0 : (w + c + h.length) % h.length, O = h[M];
    O != null && C(O);
  }, p = (c) => {
    if (!u) {
      (c.key === "ArrowDown" || c.key === "Enter" || c.key === " ") && (c.preventDefault(), y());
      return;
    }
    switch (c.key) {
      case "Escape":
        c.preventDefault(), g();
        break;
      case "ArrowDown":
        c.preventDefault(), N(1);
        break;
      case "ArrowUp":
        c.preventDefault(), N(-1);
        break;
      case "Home":
        c.preventDefault(), h[0] != null && C(h[0]);
        break;
      case "End":
        c.preventDefault(), h[h.length - 1] != null && C(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), v >= 0) {
          const w = e[v];
          w && !w.disabled && f(w);
        }
        break;
      case "Tab":
        S(!1), C(-1);
        break;
    }
  }, x = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), N(1);
        break;
      case "ArrowUp":
        c.preventDefault(), N(-1);
        break;
      case "Home":
        c.preventDefault(), h[0] != null && C(h[0]);
        break;
      case "End":
        c.preventDefault(), h[h.length - 1] != null && C(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), v >= 0) {
          const w = e[v];
          w && !w.disabled && f(w);
        }
        break;
      case "Escape":
        c.preventDefault(), g();
        break;
      case "Tab":
        S(!1), C(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: m,
      className: [Mt.root, d].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ $("nav", { "aria-label": l, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: b,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": i,
            "aria-label": l,
            className: Mt.trigger,
            onClick: () => u ? g() : y(),
            onKeyDown: p,
            children: D ?? /* @__PURE__ */ $("span", { className: Mt.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: Mt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        u ? /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": v >= 0 ? `${a}-item-${v}` : void 0,
            className: Mt.menu,
            onKeyDown: x,
            tabIndex: -1,
            children: e.map((c, w) => {
              const M = !!c.disabled, O = w === v;
              return /* @__PURE__ */ $(
                "div",
                {
                  id: `${a}-item-${w}`,
                  role: "menuitem",
                  "aria-disabled": M || void 0,
                  tabIndex: M ? -1 : 0,
                  className: [Mt.item, O ? Mt.active : null, M ? Mt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    M || f(c);
                  },
                  onMouseEnter: () => {
                    M || C(w);
                  },
                  children: [
                    c.icon ? /* @__PURE__ */ t("span", { className: Mt.icon, "aria-hidden": "true", children: c.icon }) : null,
                    /* @__PURE__ */ t("span", { className: Mt.text, children: c.text })
                  ]
                },
                `${c.text}-${w}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Jh = "_root_5fmpv_1", Qh = "_bottomRight_5fmpv_11", em = "_bottomLeft_5fmpv_16", tm = "_topRight_5fmpv_21", nm = "_topLeft_5fmpv_26", rm = "_menu_5fmpv_31", om = "_itemWrapper_5fmpv_48", sm = "_tooltip_5fmpv_54", am = "_main_5fmpv_76", lm = "_mainIcon_5fmpv_104", cm = "_mainOpen_5fmpv_109", im = "_item_5fmpv_48", dm = "_disabled_5fmpv_141", um = "_itemIcon_5fmpv_148", dt = {
  root: Jh,
  bottomRight: Qh,
  bottomLeft: em,
  topRight: tm,
  topLeft: nm,
  menu: rm,
  itemWrapper: om,
  tooltip: sm,
  main: am,
  mainIcon: lm,
  mainOpen: cm,
  item: im,
  disabled: dm,
  itemIcon: um
};
function n0({
  items: e,
  position: n,
  Position: r,
  icon: o = "+",
  onClick: s,
  Click: l,
  ariaLabel: d = "Open menu",
  className: a
}) {
  const i = n ?? r ?? "bottom-right", b = `${Ue()}-menu`, u = ce(null), S = ce(null), [v, C] = Y(!1), D = q(
    (g) => {
      if (g.disabled) return;
      const N = { text: g.text, value: g.value };
      (s ?? l)?.(N), C(!1), S.current?.focus();
    },
    [s, l]
  );
  Se(() => {
    if (!v) return;
    const g = (N) => {
      u.current && !u.current.contains(N.target) && C(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [v]), Se(() => {
    if (!v) return;
    const g = (N) => {
      N.key === "Escape" && (C(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [v]);
  const h = i === "bottom-right" ? dt.bottomRight : i === "bottom-left" ? dt.bottomLeft : i === "top-right" ? dt.topRight : dt.topLeft, f = (g) => {
    !v && (g.key === "Enter" || g.key === " " || g.key === "ArrowDown" || g.key === "ArrowUp") ? (g.preventDefault(), C(!0)) : v && g.key === "Escape" && (g.preventDefault(), C(!1));
  }, y = (g) => {
    g.key === "Escape" && (g.preventDefault(), C(!1), S.current?.focus());
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: u,
      className: [dt.root, h, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        v ? /* @__PURE__ */ t(
          "div",
          {
            id: b,
            role: "menu",
            "aria-label": d,
            className: dt.menu,
            onKeyDown: y,
            children: e.map((g, N) => {
              const p = !!g.disabled;
              return /* @__PURE__ */ $("div", { className: dt.itemWrapper, children: [
                /* @__PURE__ */ t("span", { className: dt.tooltip, "aria-hidden": "true", children: g.text }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": g.text,
                    "aria-disabled": p || void 0,
                    title: g.text,
                    disabled: p,
                    tabIndex: p ? -1 : 0,
                    className: [dt.item, p ? dt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => D(g),
                    children: /* @__PURE__ */ t("span", { className: dt.itemIcon, "aria-hidden": "true", children: g.icon ?? "•" })
                  }
                )
              ] }, `${g.text}-${N}`);
            })
          }
        ) : null,
        /* @__PURE__ */ t(
          "button",
          {
            ref: S,
            type: "button",
            className: dt.main,
            "aria-haspopup": "menu",
            "aria-expanded": v,
            "aria-controls": b,
            "aria-label": d,
            onClick: () => C((g) => !g),
            onKeyDown: f,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [dt.mainIcon, v ? dt.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const fm = "_root_1qf28_1", _m = "_list_1qf28_5", pm = "_item_1qf28_15", hm = "_link_1qf28_22", mm = "_linkButton_1qf28_23", gm = "_current_1qf28_24", ym = "_disabled_1qf28_68", bm = "_icon_1qf28_74", vm = "_text_1qf28_81", xm = "_separator_1qf28_85", We = {
  root: fm,
  list: _m,
  item: pm,
  link: hm,
  linkButton: mm,
  current: gm,
  disabled: ym,
  icon: bm,
  text: vm,
  separator: xm
};
function r0({ items: e, onClick: n, Click: r, ariaLabel: o = "Breadcrumb", className: s }) {
  const l = n ?? r, d = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": o, className: [We.root, s].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: We.list, children: e.map((a, i) => {
    const m = i === e.length - 1, b = !!a.disabled;
    return /* @__PURE__ */ $("li", { className: We.item, children: [
      m ? b ? /* @__PURE__ */ $(
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
      ) : a.path ? /* @__PURE__ */ $(
        "a",
        {
          href: a.path,
          className: We.link,
          "aria-current": "page",
          onClick: (u) => {
            u.preventDefault(), d(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ $(
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
      ) : b ? /* @__PURE__ */ $(
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
      ) : a.path ? /* @__PURE__ */ $(
        "a",
        {
          href: a.path,
          className: We.link,
          onClick: (u) => {
            u.preventDefault(), d(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          className: We.linkButton,
          tabIndex: 0,
          onClick: () => d(a),
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ),
      m ? null : /* @__PURE__ */ t("span", { className: We.separator, "aria-hidden": "true", children: "/" })
    ] }, `${a.text}-${i}`);
  }) }) });
}
const wm = "_root_yiemy_1", $m = "_list_yiemy_5", km = "_item_yiemy_15", Nm = "_connector_yiemy_21", Sm = "_connectorCompleted_yiemy_30", Dm = "_step_yiemy_34", Cm = "_active_yiemy_69", zm = "_completed_yiemy_75", Mm = "_circle_yiemy_79", Om = "_check_yiemy_109", Im = "_icon_yiemy_114", jm = "_number_yiemy_119", Tm = "_text_yiemy_124", ut = {
  root: wm,
  list: $m,
  item: km,
  connector: Nm,
  connectorCompleted: Sm,
  step: Dm,
  active: Cm,
  completed: zm,
  circle: Mm,
  check: Om,
  icon: Im,
  number: jm,
  text: Tm
};
function o0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: s,
  Linear: l,
  onChange: d,
  Change: a,
  onSelectedIndexChange: i,
  ariaLabel: m = "Steps",
  className: b
}) {
  const u = s ?? l ?? !1, S = n ?? r, v = S !== void 0, [C, D] = Y(() => Math.min(Math.max(0, S ?? o), Math.max(0, e.length - 1))), f = Math.min(Math.max(0, v ? S : C), Math.max(0, e.length - 1)), y = ce(null), g = q(
    (x) => {
      const c = Math.min(Math.max(0, x), Math.max(0, e.length - 1));
      v || D(c), (d ?? a ?? i)?.(c);
    },
    [v, d, a, i, e.length]
  ), N = q(
    (x, c) => !!(c.disabled || u && x > f + 1),
    [u, f]
  ), p = (x) => {
    const c = Array.from(
      x.currentTarget.querySelectorAll("button[data-step]")
    ).filter((O) => O.getAttribute("aria-disabled") !== "true" && !O.disabled), w = document.activeElement, M = w ? c.indexOf(w) : -1;
    if (x.key === "ArrowRight" || x.key === "ArrowDown") {
      if (x.preventDefault(), c.length === 0) return;
      const O = M === -1 ? 0 : (M + 1) % c.length, E = c[O];
      E && E.focus();
    } else if (x.key === "ArrowLeft" || x.key === "ArrowUp") {
      if (x.preventDefault(), c.length === 0) return;
      const O = M === -1 ? c.length - 1 : (M - 1 + c.length) % c.length, E = c[O];
      E && E.focus();
    } else x.key === "Home" ? (x.preventDefault(), c[0]?.focus()) : x.key === "End" && (x.preventDefault(), c[c.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": m,
      className: [ut.root, b].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("ol", { ref: y, role: "list", className: ut.list, children: e.map((x, c) => {
        const w = c === f, M = c < f, O = N(c, x);
        return /* @__PURE__ */ $("li", { role: "listitem", className: ut.item, children: [
          c > 0 ? /* @__PURE__ */ t("span", { className: [ut.connector, M ? ut.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              "data-step": c,
              "aria-current": w ? "step" : void 0,
              "aria-disabled": O ? "true" : void 0,
              disabled: O,
              tabIndex: O ? -1 : 0,
              className: [
                ut.step,
                w ? ut.active : null,
                M ? ut.completed : null,
                O ? ut.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                O || g(c);
              },
              children: [
                /* @__PURE__ */ t("span", { className: ut.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ t("span", { className: ut.check, "aria-hidden": "true", children: "✓" }) : x.icon ? /* @__PURE__ */ t("span", { className: ut.icon, children: x.icon }) : /* @__PURE__ */ t("span", { className: ut.number, children: c + 1 }) }),
                /* @__PURE__ */ t("span", { className: ut.text, children: x.text })
              ]
            }
          )
        ] }, `${x.text}-${c}`);
      }) })
    }
  );
}
const Em = "_root_1fegn_1", Am = "_horizontal_1fegn_13", Lm = "_vertical_1fegn_17", Rm = "_pane_1fegn_21", Bm = "_handle_1fegn_31", Pm = "_handleHorizontal_1fegn_51", Fm = "_handleVertical_1fegn_57", Km = "_handleGrip_1fegn_63", qm = "_handleCollapseHint_1fegn_75", Hm = "_collapseBtn_1fegn_79", Wm = "_collapseBtnCollapsed_1fegn_109", $t = {
  root: Em,
  horizontal: Am,
  vertical: Lm,
  pane: Rm,
  handle: Bm,
  handleHorizontal: Pm,
  handleVertical: Fm,
  handleGrip: Km,
  handleCollapseHint: qm,
  collapseBtn: Hm,
  collapseBtnCollapsed: Wm
};
function $n(e, n) {
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
function s0({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: o,
  Resize: s,
  onCollapse: l,
  Collapse: d,
  ariaLabel: a = "Splitter",
  className: i
}) {
  const m = e ?? n ?? "horizontal", b = m === "horizontal", u = ce(null), S = q(() => {
    const _ = r.length;
    if (_ === 0) return [];
    const z = r.map((j) => j.size ? $n(j.size, 100 / _) : 100 / _), T = z.reduce((j, A) => j + A, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? z.map((j) => j / T * 100) : z;
  }, [r]), [v, C] = Y(() => S()), [D, h] = Y(() => r.map((_) => !!_.collapsed)), f = ce(v);
  Se(() => {
    h(r.map((_) => !!_.collapsed));
  }, [r]);
  const y = q(() => r.map((_) => $n(_.min, 0)), [r]), g = q(() => r.map((_) => $n(_.max, 100)), [r]), N = q(
    (_, z) => {
      const T = { paneIndex: _, newSize: z, cancel: !1 };
      return (o ?? s)?.(T), !T.cancel;
    },
    [o, s]
  ), p = q(
    (_, z) => {
      const T = { paneIndex: _, collapse: z, cancel: !1 };
      return (l ?? d)?.(T), !T.cancel;
    },
    [l, d]
  ), x = q(
    (_) => {
      const z = !D[_];
      p(_, z) && (z ? (f.current = [...v], h((T) => {
        const j = [...T];
        return j[_] !== void 0 && (j[_] = !0), j;
      }), C((T) => {
        const j = [...T], A = j[_] ?? 0, X = _ < j.length - 1 ? _ + 1 : _ - 1;
        if (X >= 0 && X < j.length) {
          const H = j[X] ?? 0;
          j[X] = H + A, j[_] = 0;
        } else
          j[_] = 0;
        return j;
      })) : (h((T) => {
        const j = [...T];
        return j[_] !== void 0 && (j[_] = !1), j;
      }), C(() => {
        const T = [...f.current];
        return T.length !== r.length ? r.map(() => 100 / r.length) : T;
      })));
    },
    [D, v, r.length, p]
  ), c = ce(null), w = q(
    (_, z, T) => {
      const j = u.current;
      if (!j) return null;
      const A = j.getBoundingClientRect();
      let X;
      if (b) {
        if (A.width === 0) return null;
        X = (z - A.left) / A.width * 100;
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
  ), M = (_, z) => {
    z.preventDefault();
    const T = z.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(z.pointerId), c.current = { handleIndex: _, pointerId: z.pointerId };
  }, O = (_) => {
    if (!c.current || c.current.pointerId !== _.pointerId) return;
    _.preventDefault();
    const z = c.current.handleIndex, T = w(z, _.clientX, _.clientY);
    if (T == null) return;
    const j = y(), A = g(), X = j[z] ?? 0, H = A[z] ?? 100, re = z + 1, Z = j[re] ?? 0, J = A[re] ?? 100, Q = v[z] ?? 0, G = v[re] ?? 0, K = Q + G;
    if (K <= 0) return;
    let L = Lt(T, X, H), oe = K - L;
    if (oe < Z) {
      if (oe = Z, L = K - oe, L < X || L > H) return;
    } else if (oe > J && (oe = J, L = K - oe, L < X || L > H))
      return;
    L = Lt(L, X, H), oe = K - L, N(z, L) && C((ie) => {
      const ee = [...ie];
      return ee[z] = L, ee[re] = oe, ee;
    });
  }, E = (_) => {
    !c.current || c.current.pointerId !== _.pointerId || (c.current = null);
  }, I = (_, z) => {
    const T = y(), j = g(), A = _, X = _ + 1, H = v[A] ?? 0, re = v[X] ?? 0, Z = H + re;
    let J = 0;
    const Q = !!r[A]?.collapsible, G = !!r[X]?.collapsible;
    if (b ? z.key === "ArrowLeft" ? J = -5 : z.key === "ArrowRight" && (J = 5) : z.key === "ArrowUp" ? J = -5 : z.key === "ArrowDown" && (J = 5), z.key === "Home") {
      z.preventDefault();
      let K = T[A] ?? 0, L = Z - K;
      if (L = Lt(L, T[X] ?? 0, j[X] ?? 100), K = Z - L, K = Lt(K, T[A] ?? 0, j[A] ?? 100), !N(A, K)) return;
      C((oe) => {
        const ie = [...oe];
        return ie[A] = K, ie[X] = L, ie;
      });
      return;
    }
    if (z.key === "End") {
      z.preventDefault();
      let K = j[A] ?? 100;
      K = Math.min(K, Z - (T[X] ?? 0));
      let L = Z - K;
      if (L = Lt(L, T[X] ?? 0, j[X] ?? 100), K = Z - L, K = Lt(K, T[A] ?? 0, j[A] ?? 100), !N(A, K)) return;
      C((oe) => {
        const ie = [...oe];
        return ie[A] = K, ie[X] = L, ie;
      });
      return;
    }
    if ((z.key === "Enter" || z.key === " ") && (Q || G)) {
      z.preventDefault(), x(Q ? A : X);
      return;
    }
    if (J !== 0) {
      z.preventDefault();
      let K = H + J, L = Z - K;
      const oe = T[A] ?? 0, ie = j[A] ?? 100, ee = T[X] ?? 0, ue = j[X] ?? 100;
      if (K = Lt(K, oe, ie), L = Z - K, (L < ee || L > ue) && (L = Lt(L, ee, ue), K = Z - L, K = Lt(K, oe, ie), L = Z - K), !N(A, K)) return;
      C((me) => {
        const xe = [...me];
        return xe[A] = K, xe[X] = L, xe;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: u,
      className: [$t.root, b ? $t.horizontal : $t.vertical, i].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((_, z) => {
        const T = !!D[z], j = T ? 0 : v[z] ?? 100 / r.length, A = T ? { display: "none" } : b ? { flexBasis: `${j}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${j}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, X = $n(_.min, 0), H = $n(_.max, 100), re = z < r.length - 1, Z = !!r[z + 1]?.collapsible;
        return /* @__PURE__ */ $("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ $(
            "div",
            {
              role: "group",
              "aria-label": _.label ?? `Pane ${z + 1}`,
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
                    "aria-label": `Collapse pane ${z + 1}`,
                    "aria-expanded": !T,
                    onClick: () => x(z),
                    children: b ? "◀" : "▲"
                  }
                ) : null,
                _.collapsible && T ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${z + 1}`,
                    "aria-expanded": !T,
                    onClick: () => x(z),
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
                "aria-label": `Expand pane ${z + 1}`,
                "aria-expanded": "false",
                onClick: () => x(z),
                children: b ? "▶" : "▼"
              }
            )
          ) : null,
          re ? /* @__PURE__ */ $(
            "div",
            {
              role: "separator",
              "aria-orientation": m,
              "aria-valuemin": X,
              "aria-valuemax": H,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${z + 1}`,
              tabIndex: T || D[z + 1] ? -1 : 0,
              className: [$t.handle, b ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (J) => M(z, J),
              onPointerMove: O,
              onPointerUp: E,
              onKeyDown: (J) => I(z, J),
              children: [
                /* @__PURE__ */ t("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (_.collapsible || Z) && /* @__PURE__ */ t("span", { className: $t.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, z);
      })
    }
  );
}
const Um = "_root_h36xh_1", Vm = "_list_h36xh_5", Xm = "_vertical_h36xh_14", Gm = "_horizontal_h36xh_20", Ym = "_item_h36xh_28", Zm = "_link_h36xh_32", Jm = "_active_h36xh_57", on = {
  root: Um,
  list: Vm,
  vertical: Xm,
  horizontal: Gm,
  item: Ym,
  link: Zm,
  active: Jm
};
function a0({
  items: e,
  selector: n,
  Selector: r,
  orientation: o,
  Orientation: s,
  onClick: l,
  Click: d,
  ariaLabel: a = "Table of contents",
  className: i
}) {
  const m = n ?? r, b = o ?? s ?? "vertical", [u, S] = Y(() => e[0]?.selector ?? null), v = ce(u);
  v.current = u;
  const C = q(
    (D, h) => {
      if (S(D.selector), (l ?? d)?.({ text: D.text, selector: D.selector }), h) {
        try {
          h.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          h.scrollIntoView();
        }
        const y = h;
        y.getAttribute("tabindex") == null && y.tabIndex === -1 || y.tabIndex < 0 ? (y.getAttribute("tabindex"), y.setAttribute("tabindex", "-1"), y.focus({ preventScroll: !0 })) : y.focus({ preventScroll: !0 });
      }
    },
    [l, d]
  );
  return Se(() => {
    if (e.length === 0) return;
    const h = (() => {
      if (m) {
        const p = document.querySelector(m);
        if (p) return p;
      }
      return window;
    })();
    let f = null;
    const y = /* @__PURE__ */ new Map(), g = () => {
      let p = null, x = null;
      for (const w of e) {
        const M = document.querySelector(w.selector);
        if (!M) continue;
        y.set(w.selector, M);
        const O = M.getBoundingClientRect();
        let E = O.top;
        if (h !== window) {
          const I = h.getBoundingClientRect();
          E = O.top - I.top;
        }
        E <= 80 ? (!x || E > x.el.getBoundingClientRect().top - (h !== window ? h.getBoundingClientRect().top : 0)) && (x = { sel: w.selector, el: M }) : (!p || E < p.top) && (p = { sel: w.selector, top: E });
      }
      const c = x?.sel ?? p?.sel ?? e[0]?.selector ?? null;
      c && c !== v.current && S(c);
    }, N = () => {
      g();
    };
    if (typeof IntersectionObserver < "u") {
      const p = h === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: h, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      f = new IntersectionObserver((x) => {
        const c = x.filter((w) => w.isIntersecting).sort((w, M) => w.boundingClientRect.top - M.boundingClientRect.top);
        if (c[0]) {
          const w = c[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === w) {
              S(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && w.id === M.selector.slice(1)) {
              S(M.selector);
              break;
            }
          }
        } else
          g();
      }, p);
      for (const x of e) {
        const c = document.querySelector(x.selector);
        c && (f.observe(c), y.set(x.selector, c));
      }
    }
    return h === window ? (window.addEventListener("scroll", N, { passive: !0 }), g(), () => {
      window.removeEventListener("scroll", N), f?.disconnect();
    }) : (h.addEventListener("scroll", N, { passive: !0 }), g(), () => {
      h.removeEventListener("scroll", N), f?.disconnect();
    });
  }, [e, m]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [on.root, on[b], i].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: on.list, children: e.map((D) => {
    const h = D.selector === u;
    return /* @__PURE__ */ t("li", { className: on.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: D.selector.startsWith("#") || D.selector.startsWith(".") ? D.selector : `#${D.selector}`,
        className: [on.link, h ? on.active : null].filter(Boolean).join(" "),
        "aria-current": h ? "location" : void 0,
        onClick: (f) => {
          f.preventDefault();
          const y = document.querySelector(D.selector);
          C(D, y);
        },
        children: D.text
      }
    ) }, `${D.text}-${D.selector}`);
  }) }) });
}
const Qm = "_root_c923v_1", eg = "_viewport_c923v_17", tg = "_slide_c923v_24", ng = "_active_c923v_33", rg = "_arrow_c923v_37", og = "_prev_c923v_71", sg = "_next_c923v_75", ag = "_pauseBtn_c923v_79", lg = "_indicators_c923v_110", cg = "_indicator_c923v_110", ig = "_indicatorActive_c923v_145", kt = {
  root: Qm,
  viewport: eg,
  slide: tg,
  active: ng,
  arrow: rg,
  prev: og,
  next: sg,
  pauseBtn: ag,
  indicators: lg,
  indicator: cg,
  indicatorActive: ig
};
function l0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: s,
  Auto: l,
  interval: d,
  Interval: a,
  pauseOnHover: i,
  PauseOnHover: m,
  showArrows: b,
  ShowArrows: u,
  showIndicators: S,
  ShowIndicators: v,
  onChange: C,
  Change: D,
  ariaLabel: h = "Carousel",
  className: f
}) {
  const y = n ?? r, g = y !== void 0, [N, p] = Y(() => Math.min(Math.max(0, y ?? o), Math.max(0, e.length - 1))), x = g ? y : N, c = e.length === 0 ? 0 : Math.min(Math.max(0, x), e.length - 1), w = s ?? l ?? !1, M = d ?? a ?? 3e3, O = i ?? m ?? !0, E = b ?? u ?? !0, I = S ?? v ?? !0, [_, z] = Y(!1), [T, j] = Y(!1), A = _ || T, X = ce(null), H = Ue(), re = q(
    (ee) => {
      const ue = e.length === 0 ? 0 : (ee % e.length + e.length) % e.length;
      g || p(ue), (C ?? D)?.(ue);
    },
    [g, C, D, e.length]
  ), Z = q(() => {
    re(c - 1);
  }, [re, c]), J = q(() => {
    re(c + 1);
  }, [re, c]), Q = q(
    (ee) => {
      re(ee);
    },
    [re]
  );
  Se(() => {
    if (!w || A || e.length <= 1) return;
    const ee = setInterval(() => {
      re(c + 1);
    }, M);
    return () => clearInterval(ee);
  }, [w, A, M, c, re, e.length]);
  const G = (ee) => {
    e.length !== 0 && (ee.key === "ArrowLeft" ? (ee.preventDefault(), Z()) : ee.key === "ArrowRight" ? (ee.preventDefault(), J()) : ee.key === "Home" ? (ee.preventDefault(), Q(0)) : ee.key === "End" && (ee.preventDefault(), Q(e.length - 1)));
  }, K = () => {
    O && w && j(!0);
  }, L = () => {
    O && w && j(!1);
  }, oe = () => {
    O && w && j(!0);
  }, ie = () => {
    O && w && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ $(
    "div",
    {
      ref: X,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": h,
      tabIndex: 0,
      className: [kt.root, f].filter(Boolean).join(" "),
      onKeyDown: G,
      onMouseEnter: K,
      onMouseLeave: L,
      onFocusCapture: oe,
      onBlurCapture: ie,
      children: [
        /* @__PURE__ */ t("div", { id: H, className: kt.viewport, children: e.map((ee, ue) => {
          const me = ue === c;
          return /* @__PURE__ */ t(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ue + 1} of ${e.length}`,
              "aria-hidden": me ? void 0 : !0,
              hidden: !me,
              className: [kt.slide, me ? kt.active : null].filter(Boolean).join(" "),
              children: ee
            },
            ue
          );
        }) }),
        E && e.length > 1 ? /* @__PURE__ */ $(Me, { children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [kt.arrow, kt.prev].filter(Boolean).join(" "),
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
              className: [kt.arrow, kt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": H,
              onClick: J,
              children: "›"
            }
          )
        ] }) : null,
        w ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: kt.pauseBtn,
            "aria-label": _ ? "Resume" : "Pause",
            "aria-pressed": _,
            onClick: () => z((ee) => !ee),
            children: _ ? "▶" : "⏸"
          }
        ) : null,
        I && e.length > 1 ? /* @__PURE__ */ t("div", { className: kt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ee, ue) => {
          const me = ue === c;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [kt.indicator, me ? kt.indicatorActive : null].filter(Boolean).join(" "),
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
const dg = "_root_yo0cc_1", ug = "_group_yo0cc_20", fg = "_itemWrapper_yo0cc_30", _g = "_treeitem_yo0cc_34", pg = "_disabled_yo0cc_50", hg = "_selected_yo0cc_60", mg = "_caret_yo0cc_66", gg = "_caretIcon_yo0cc_113", yg = "_caretOpen_yo0cc_120", bg = "_caretPlaceholder_yo0cc_124", vg = "_label_yo0cc_130", xg = "_loading_yo0cc_137", wg = "_loadingRow_yo0cc_143", $g = "_empty_yo0cc_149", ct = {
  root: dg,
  group: ug,
  itemWrapper: fg,
  treeitem: _g,
  disabled: pg,
  selected: hg,
  caret: mg,
  caretIcon: gg,
  caretOpen: yg,
  caretPlaceholder: bg,
  label: vg,
  loading: xg,
  loadingRow: wg,
  empty: $g
};
function c0({
  data: e,
  Data: n,
  children: r,
  Children: o,
  textProperty: s,
  TextProperty: l,
  keyProperty: d,
  KeyProperty: a,
  selectionMode: i,
  SelectionMode: m,
  selectedItem: b,
  SelectedItem: u,
  selectedItems: S,
  SelectedItems: v,
  defaultSelectedItem: C,
  defaultSelectedItems: D,
  onChange: h,
  Change: f,
  onExpand: y,
  Expand: g,
  onCollapse: N,
  Collapse: p,
  loadChildData: x,
  LoadChildData: c,
  template: w,
  Template: M,
  itemTemplate: O,
  ItemTemplate: E,
  ariaLabel: I,
  AriaLabel: _,
  className: z
}) {
  const T = e ?? n ?? [], j = r ?? o, A = s ?? l ?? "text", X = d ?? a ?? "id", H = i ?? m ?? "single", re = I ?? _ ?? "Tree", Z = x ?? c, J = w ?? M ?? O ?? E, Q = q(
    (W) => {
      const ae = W[X];
      return ae != null ? String(ae) : String(W.id ?? "");
    },
    [X]
  ), G = q(
    (W) => {
      const ae = W[A];
      if (ae != null) return String(ae);
      const fe = W.text;
      return fe != null ? String(fe) : "";
    },
    [A]
  ), K = q(
    (W) => {
      if (j) {
        const fe = j(W);
        if (fe !== void 0) return fe;
      }
      const ae = W.children;
      if (Array.isArray(ae)) return ae;
    },
    [j]
  ), L = q(
    (W) => {
      const ae = /* @__PURE__ */ new Set(), fe = (he) => {
        for (const de of he) {
          const ye = Q(de);
          de.expanded && ae.add(ye);
          const Ae = K(de);
          Ae && Ae.length > 0 && fe(Ae);
        }
      };
      return fe(W), ae;
    },
    [Q, K]
  ), [oe, ie] = Y(() => L(T)), [ee, ue] = Y(() => /* @__PURE__ */ new Map()), [me, xe] = Y(() => /* @__PURE__ */ new Set()), Re = b ?? u, Ie = S ?? v, Xe = H === "multiple" ? Ie !== void 0 : Re !== void 0, Ze = q(() => {
    if (H === "multiple") {
      if (D && D.length > 0)
        return new Set(D.map((fe) => Q(fe)));
      const W = /* @__PURE__ */ new Set(), ae = (fe) => {
        for (const he of fe) {
          he.selected && W.add(Q(he));
          const de = K(he);
          de && ae(de);
        }
      };
      return ae(T), W;
    } else {
      if (C) return /* @__PURE__ */ new Set([Q(C)]);
      let W = null;
      const ae = (fe) => {
        for (const he of fe) {
          if (he.selected)
            return W = Q(he), !0;
          const de = K(he);
          if (de && ae(de)) return !0;
        }
        return !1;
      };
      return ae(T), W ? /* @__PURE__ */ new Set([W]) : /* @__PURE__ */ new Set();
    }
  }, [H, C, D, Q, K, T]), [Pe, Ge] = Y(() => Ze()), Fe = $e(() => {
    if (H === "multiple") {
      if (Ie !== void 0) {
        const W = Ie;
        return W ? new Set(W.map((ae) => Q(ae))) : /* @__PURE__ */ new Set();
      }
      return Pe;
    } else {
      if (Re !== void 0) {
        const W = Re;
        return W ? /* @__PURE__ */ new Set([Q(W)]) : /* @__PURE__ */ new Set();
      }
      return Pe;
    }
  }, [H, Ie, Re, Pe, Q]), Je = q(
    (W) => {
      let ae;
      const fe = (he) => {
        for (const de of he) {
          if (Q(de) === W)
            return ae = de, !0;
          const Ae = ee.get(Q(de)) ?? K(de);
          if (Ae && fe(Ae)) return !0;
        }
        return !1;
      };
      if (fe(T), !ae) {
        for (const he of ee.values())
          if (fe(he)) break;
      }
      return ae;
    },
    [T, ee, Q, K]
  ), V = q(() => {
    const W = /* @__PURE__ */ new Map(), ae = (fe) => {
      for (const he of fe) {
        const de = Q(he);
        W.set(de, he);
        const Ae = ee.get(de) ?? K(he);
        Ae && ae(Ae);
      }
    };
    return ae(T), W;
  }, [T, ee, Q, K]), k = q(
    (W) => {
      const ae = Q(W);
      if (!W.disabled)
        if (H === "multiple") {
          const he = new Set(Fe);
          he.has(ae) ? he.delete(ae) : he.add(ae), Xe || Ge(he);
          const de = h ?? f;
          if (de) {
            const ye = V(), Ae = [];
            for (const Ke of he) {
              const R = ye.get(Ke) ?? Je(Ke);
              R && Ae.push(R);
            }
            de({ item: W, selectedItems: Ae });
          }
        } else if (!Fe.has(ae) || Fe.size !== 1 || !Fe.has(ae)) {
          Xe || Ge(/* @__PURE__ */ new Set([ae]));
          const de = h ?? f;
          de && de({ item: W, selectedItem: W });
        } else {
          const de = h ?? f;
          de && de({ item: W, selectedItem: W });
        }
    },
    [Q, H, Fe, Xe, h, f, V, Je]
  ), B = q(
    async (W) => {
      const ae = Q(W);
      if (!!W.disabled) return;
      const he = oe.has(ae), de = y ?? g, ye = N ?? p, Ae = K(W), R = ee.get(ae) ?? Ae, ze = !(R !== void 0 && R.length > 0) && Z != null;
      if (he) {
        ie((Ne) => {
          const Te = new Set(Ne);
          return Te.delete(ae), Te;
        }), ye?.({ item: W });
        return;
      }
      if (ze) {
        if (me.has(ae)) return;
        xe((Ne) => {
          const Te = new Set(Ne);
          return Te.add(ae), Te;
        });
        try {
          const Te = await Z(W);
          ue((et) => {
            const it = new Map(et);
            return it.set(ae, Te), it;
          }), ie((et) => {
            const it = new Set(et);
            return it.add(ae), it;
          }), de?.({ item: W });
        } catch {
        } finally {
          xe((Ne) => {
            const Te = new Set(Ne);
            return Te.delete(ae), Te;
          });
        }
        return;
      }
      ie((Ne) => {
        const Te = new Set(Ne);
        return Te.add(ae), Te;
      }), de?.({ item: W });
    },
    [Q, oe, K, ee, Z, me, y, g, N, p]
  ), U = $e(() => {
    const W = [], ae = (fe, he, de) => {
      fe.forEach((ye, Ae) => {
        const Ke = Q(ye), R = G(ye), le = ee.get(Ke) ?? K(ye);
        let ze;
        ee.has(Ke) ? ze = ee.get(Ke).length > 0 : le !== void 0 ? ze = le.length > 0 : Z ? ze = !0 : ze = !1;
        const Ne = oe.has(Ke), Te = !!ye.disabled, et = fe.length, it = Ae + 1;
        if (W.push({
          item: ye,
          key: Ke,
          text: R,
          level: he,
          posInSet: it,
          setSize: et,
          hasChildren: ze,
          expanded: Ne,
          parentKey: de,
          disabled: Te
        }), ze && Ne) {
          const It = ee.get(Ke) ?? le;
          It && It.length > 0 && ae(It, he + 1, Ke);
        }
      });
    };
    return ae(T, 1, null), W;
  }, [T, Q, G, K, ee, oe, Z, me]), [se, te] = Y(() => U[0]?.key ?? null), pe = ce(""), ke = ce(null), Be = ce(null);
  Se(() => {
    if (!se && U.length > 0) {
      const W = U[0];
      W && te(W.key);
    } else if (se && !U.some((W) => W.key === se)) {
      const W = U[0];
      te(W ? W.key : null);
    }
  }, [U, se]), Se(() => {
    if (se) {
      const W = Be.current?.querySelector(`[data-key="${CSS.escape(se)}"]`);
      let ae = null;
      W || (ae = Be.current?.querySelector(`[data-key="${se}"]`) ?? null);
      const fe = W ?? ae;
      fe && document.activeElement !== fe && Be.current?.contains(document.activeElement) && fe.focus();
    }
  }, [se]);
  const je = q(
    (W) => {
      te(W), requestAnimationFrame(() => {
        const ae = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(W) : W;
        let fe = Be.current?.querySelector(`[data-key="${ae}"]`);
        fe || (fe = Be.current?.querySelector(`[data-key="${W}"]`) ?? null), fe?.focus();
      });
    },
    []
  ), rt = q(
    (W) => U.find((fe) => fe.key === W)?.parentKey ?? null,
    [U]
  ), xt = q(
    (W) => {
      if (U.length === 0) return;
      const ae = se ? U.findIndex((de) => de.key === se) : -1, fe = ae >= 0 ? U[ae] : void 0;
      let he = null;
      if (W.key === "ArrowDown") {
        if (W.preventDefault(), ae === -1)
          he = U[0]?.key ?? null;
        else {
          const de = (ae + 1) % U.length, ye = U[de];
          ye && (he = ye.key);
        }
        he && je(he);
        return;
      }
      if (W.key === "ArrowUp") {
        if (W.preventDefault(), ae === -1) {
          const de = U[U.length - 1];
          de && (he = de.key);
        } else {
          const de = (ae - 1 + U.length) % U.length, ye = U[de];
          ye && (he = ye.key);
        }
        he && je(he);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !fe) return;
        if (fe.hasChildren && !fe.expanded)
          B(fe.item);
        else if (fe.hasChildren && fe.expanded) {
          const de = ae + 1, ye = U[de];
          ye && ye.parentKey === fe.key && je(ye.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !fe) return;
        if (fe.hasChildren && fe.expanded)
          B(fe.item);
        else {
          const de = rt(fe.key);
          de && je(de);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const de = U[0];
        de && je(de.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const de = U[U.length - 1];
        de && je(de.key);
        return;
      }
      if (W.key === "Enter" || W.key === " ") {
        W.preventDefault(), fe && k(fe.item);
        return;
      }
      if (W.key.length === 1 && /^[a-zA-Z0-9]$/.test(W.key)) {
        W.preventDefault();
        const de = (pe.current + W.key).toLowerCase();
        pe.current = de, ke.current && clearTimeout(ke.current), ke.current = setTimeout(() => {
          pe.current = "";
        }, 500);
        const ye = ae >= 0 ? ae + 1 : 0, R = [...U, ...U].slice(ye, ye + U.length).find((le) => le.text.toLowerCase().startsWith(de));
        R && je(R.key);
        return;
      }
    },
    [U, se, je, B, k, rt]
  ), ne = q(() => {
    if (!se && U.length > 0) {
      const W = U[0];
      W && te(W.key);
    }
  }, [se, U]), De = (W, ae, fe) => /* @__PURE__ */ t("ul", { role: "group", className: ct.group, children: W.map((he, de) => {
    const ye = Q(he), Ae = G(he), Ke = ee.get(ye) ?? K(he);
    let R;
    ee.has(ye) ? R = ee.get(ye).length > 0 : Ke !== void 0 ? R = Ke.length > 0 : Z ? R = !0 : R = !1;
    const le = oe.has(ye), ze = Fe.has(ye), Ne = !!he.disabled, Te = me.has(ye), et = se === ye, it = W.length, It = de + 1, zn = J ? J(he) : Ae;
    return /* @__PURE__ */ $("li", { role: "none", className: ct.itemWrapper, children: [
      /* @__PURE__ */ $(
        "div",
        {
          role: "treeitem",
          "data-key": ye,
          tabIndex: et ? 0 : -1,
          "aria-expanded": R ? le : void 0,
          "aria-selected": ze,
          "aria-level": ae,
          "aria-setsize": it,
          "aria-posinset": It,
          "aria-disabled": Ne || void 0,
          "aria-busy": Te || void 0,
          className: [
            ct.treeitem,
            ze ? ct.selected : null,
            Ne ? ct.disabled : null,
            et ? ct.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            je(ye), Ne || k(he);
          },
          onFocus: () => te(ye),
          children: [
            R ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: ct.caret,
                "aria-label": `${le ? "Collapse" : "Expand"} ${Ae}`,
                "aria-expanded": le,
                tabIndex: -1,
                disabled: Ne,
                onClick: (ln) => {
                  ln.stopPropagation(), je(ye), B(he);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [ct.caretIcon, le ? ct.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: ct.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: ct.label, children: zn }),
            Te ? /* @__PURE__ */ t("span", { className: ct.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && le ? Te ? /* @__PURE__ */ t("div", { className: ct.loadingRow, "aria-busy": "true", children: "Loading…" }) : Ke && Ke.length > 0 ? De(Ke, ae + 1) : ee.has(ye) && ee.get(ye).length > 0 ? De(ee.get(ye), ae + 1) : (Ke && Ke.length === 0, null) : null
    ] }, ye);
  }) });
  return /* @__PURE__ */ t(
    "div",
    {
      ref: Be,
      role: "tree",
      "aria-label": re,
      "aria-multiselectable": H === "multiple" || void 0,
      tabIndex: 0,
      className: [ct.root, z].filter(Boolean).join(" "),
      onKeyDown: xt,
      onFocus: ne,
      children: T.length === 0 ? /* @__PURE__ */ t("div", { className: ct.empty, children: "No items" }) : De(T, 1)
    }
  );
}
const kg = "_root_u0yr1_1", Ng = "_panel_u0yr1_8", Sg = "_header_u0yr1_19", Dg = "_listbox_u0yr1_28", Cg = "_option_u0yr1_42", zg = "_disabled_u0yr1_57", Mg = "_active_u0yr1_66", Og = "_selected_u0yr1_70", Ig = "_empty_u0yr1_86", jg = "_controls_u0yr1_93", Tg = "_reorder_u0yr1_102", Eg = "_btn_u0yr1_110", Le = {
  root: kg,
  panel: Ng,
  header: Sg,
  listbox: Dg,
  option: Cg,
  disabled: zg,
  active: Mg,
  selected: Og,
  empty: Ig,
  controls: jg,
  reorder: Tg,
  btn: Eg
};
function tt(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function Rn(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function i0({
  source: e,
  Source: n,
  target: r,
  Target: o,
  value: s,
  Value: l,
  targetValue: d,
  TargetValue: a,
  data: i,
  Data: m,
  onSourceChange: b,
  SourceChange: u,
  onTargetChange: S,
  TargetChange: v,
  keyProperty: C,
  KeyProperty: D,
  onMove: h,
  Move: f,
  ariaLabel: y,
  AriaLabel: g,
  className: N
}) {
  const p = C ?? D ?? "id", x = y ?? g ?? "PickList", c = e ?? n ?? s ?? l ?? i ?? m ?? [], w = r ?? o ?? d ?? a ?? [], [M, O] = Y(() => [...c]), [E, I] = Y(() => [...w]);
  Se(() => {
    const k = e ?? n ?? s ?? l ?? i ?? m;
    k !== void 0 && O([...k]);
  }, [e, n, s, l, i, m]), Se(() => {
    const k = r ?? o ?? d ?? a;
    k !== void 0 && I([...k]);
  }, [r, o, d, a]);
  const [_, z] = Y(() => /* @__PURE__ */ new Set()), [T, j] = Y(() => /* @__PURE__ */ new Set()), [A, X] = Y(() => {
    const k = c.findIndex((B) => !B.disabled);
    return k >= 0 ? k : 0;
  }), [H, re] = Y(() => {
    const k = w.findIndex((B) => !B.disabled);
    return k >= 0 ? k : 0;
  }), Z = $e(() => M.map((k, B) => k.disabled ? -1 : B).filter((k) => k >= 0), [M]), J = $e(() => E.map((k, B) => k.disabled ? -1 : B).filter((k) => k >= 0), [E]);
  Se(() => {
    if (A >= M.length) {
      const k = Z[Z.length - 1];
      X(k ?? 0);
    } else if (M.length > 0 && Z.length > 0 && !Z.includes(A)) {
      const k = Z[0];
      k !== void 0 && X(k);
    }
  }, [A, M.length, Z]), Se(() => {
    if (H >= E.length) {
      const k = J[J.length - 1];
      re(k ?? 0);
    } else if (E.length > 0 && J.length > 0 && !J.includes(H)) {
      const k = J[0];
      k !== void 0 && re(k);
    }
  }, [H, E.length, J]), Se(() => {
    z((k) => {
      const B = /* @__PURE__ */ new Set();
      for (const U of k)
        M.some((te) => tt(te, p) === U && !te.disabled) && B.add(U);
      return B;
    });
  }, [M, p]), Se(() => {
    j((k) => {
      const B = /* @__PURE__ */ new Set();
      for (const U of k)
        E.some((te) => tt(te, p) === U && !te.disabled) && B.add(U);
      return B;
    });
  }, [E, p]);
  const Q = q(
    (k) => {
      (b ?? u)?.(k);
    },
    [b, u]
  ), G = q(
    (k) => {
      (S ?? v)?.(k);
    },
    [S, v]
  ), K = q(
    (k) => {
      (h ?? f)?.(k);
    },
    [h, f]
  ), L = q(
    (k) => {
      const B = M[k];
      if (!B || B.disabled) return;
      const U = tt(B, p);
      z((se) => {
        const te = new Set(se);
        return te.has(U) ? te.delete(U) : te.add(U), te;
      }), X(k);
    },
    [M, p]
  ), oe = q(
    (k) => {
      const B = E[k];
      if (!B || B.disabled) return;
      const U = tt(B, p);
      j((se) => {
        const te = new Set(se);
        return te.has(U) ? te.delete(U) : te.add(U), te;
      }), re(k);
    },
    [E, p]
  ), ie = q(() => {
    const k = [], B = [];
    for (const pe of M) {
      const ke = tt(pe, p);
      _.has(ke) && !pe.disabled ? k.push(pe) : B.push(pe);
    }
    if (k.length === 0) return;
    const U = B, se = [...E, ...k];
    O(U), I(se), z(/* @__PURE__ */ new Set());
    const te = new Set(k.map((pe) => tt(pe, p)));
    j(te), Q(U), G(se), K({ source: U, target: se, moved: k, direction: "toTarget" });
  }, [M, E, _, p, Q, G, K]), ee = q(() => {
    const k = [], B = [];
    for (const pe of E) {
      const ke = tt(pe, p);
      T.has(ke) && !pe.disabled ? k.push(pe) : B.push(pe);
    }
    if (k.length === 0) return;
    const U = B, se = [...M, ...k];
    I(U), O(se), j(/* @__PURE__ */ new Set());
    const te = new Set(k.map((pe) => tt(pe, p)));
    z(te), Q(se), G(U), K({ source: se, target: U, moved: k, direction: "toSource" });
  }, [M, E, T, p, Q, G, K]), ue = q(() => {
    const k = M.filter((se) => !se.disabled);
    if (k.length === 0) return;
    const B = M.filter((se) => !!se.disabled), U = [...E, ...k];
    O(B), I(U), z(/* @__PURE__ */ new Set()), Q(B), G(U), K({ source: B, target: U, moved: k, direction: "allToTarget" });
  }, [M, E, p, Q, G, K]), me = q(() => {
    const k = E.filter((se) => !se.disabled);
    if (k.length === 0) return;
    const B = E.filter((se) => !!se.disabled), U = [...M, ...k];
    I(B), O(U), j(/* @__PURE__ */ new Set()), Q(U), G(B), K({ source: U, target: B, moved: k, direction: "allToSource" });
  }, [M, E, Q, G, K]), xe = q(() => {
    if (T.size === 0) return;
    const k = [...E], B = T, U = [];
    for (let te = 1; te < k.length; te++) {
      const pe = k[te], ke = k[te - 1];
      if (!pe || !ke) continue;
      const Be = tt(pe, p), je = tt(ke, p);
      B.has(Be) && !B.has(je) && !pe.disabled && !ke.disabled && (k[te - 1] = pe, k[te] = ke, U.push(pe));
    }
    if (U.length === 0) return;
    I(k), G(k), K({ source: M, target: k, moved: U, direction: "up" });
    const se = Array.from(B)[0];
    if (se) {
      const te = k.findIndex((pe) => tt(pe, p) === se);
      te >= 0 && re(te);
    }
  }, [E, T, p, M, G, K]), Re = q(() => {
    if (T.size === 0) return;
    const k = [...E], B = T, U = [];
    for (let te = k.length - 2; te >= 0; te--) {
      const pe = k[te], ke = k[te + 1];
      if (!pe || !ke) continue;
      const Be = tt(pe, p), je = tt(ke, p);
      B.has(Be) && !B.has(je) && !pe.disabled && !ke.disabled && (k[te] = ke, k[te + 1] = pe, U.push(pe));
    }
    if (U.length === 0) return;
    I(k), G(k), K({ source: M, target: k, moved: U, direction: "down" });
    const se = Array.from(B)[0];
    if (se) {
      const te = k.findIndex((pe) => tt(pe, p) === se);
      te >= 0 && re(te);
    }
  }, [E, T, p, M, G, K]), Ie = _.size > 0, Ve = T.size > 0, be = ce(""), Xe = ce(null), Ze = ce(""), Pe = ce(null), Ge = q(
    (k) => {
      if (M.length === 0) return;
      const B = Z;
      if (B.length === 0) return;
      const U = B.includes(A) ? A : B[0] ?? 0;
      let se = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te + 1) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te - 1 + B.length) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), se = B[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), se = B[B.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), L(U);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const te = (be.current + k.key).toLowerCase();
        be.current = te, Xe.current && clearTimeout(Xe.current), Xe.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const pe = [...B, ...B], ke = B.indexOf(U) + 1, Be = pe.slice(ke).find((je) => Rn(M[je]).toLowerCase().startsWith(te));
        Be != null && X(Be);
        return;
      }
      se >= 0 && X(se);
    },
    [M, Z, A, L]
  ), Fe = q(
    (k) => {
      if (E.length === 0) return;
      const B = J;
      if (B.length === 0) return;
      const U = B.includes(H) ? H : B[0] ?? 0;
      let se = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te + 1) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te - 1 + B.length) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), se = B[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), se = B[B.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), oe(U);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const te = (Ze.current + k.key).toLowerCase();
        Ze.current = te, Pe.current && clearTimeout(Pe.current), Pe.current = setTimeout(() => {
          Ze.current = "";
        }, 500);
        const pe = [...B, ...B], ke = B.indexOf(U) + 1, Be = pe.slice(ke).find((je) => Rn(E[je]).toLowerCase().startsWith(te));
        Be != null && re(Be);
        return;
      }
      se >= 0 && re(se);
    },
    [E, J, H, oe]
  ), Je = ce(null), V = ce(null);
  return /* @__PURE__ */ $("div", { className: [Le.root, N].filter(Boolean).join(" "), "aria-label": x, children: [
    /* @__PURE__ */ $("div", { className: Le.panel, children: [
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
          onKeyDown: Ge,
          children: M.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : M.map((k, B) => {
            const U = tt(k, p), se = _.has(U), te = B === A, pe = !!k.disabled;
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
                onClick: () => L(B),
                children: Rn(k)
              },
              U
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: Le.controls, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to target",
          "aria-disabled": !Ie || void 0,
          disabled: !Ie,
          onClick: ie,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to target",
          "aria-disabled": M.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: M.filter((k) => !k.disabled).length === 0,
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
          "aria-disabled": M.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: M.filter((k) => !k.disabled).length === 0,
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
          "aria-disabled": !Ve || void 0,
          disabled: !Ve,
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
          "aria-disabled": E.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: E.filter((k) => !k.disabled).length === 0,
          onClick: me,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ $("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Target" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: V,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Fe,
          children: E.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : E.map((k, B) => {
            const U = tt(k, p), se = T.has(U), te = B === H, pe = !!k.disabled;
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
                onClick: () => oe(B),
                children: Rn(k)
              },
              U
            );
          })
        }
      ),
      /* @__PURE__ */ $("div", { className: Le.reorder, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move up",
            "aria-disabled": !Ve || void 0,
            disabled: !Ve,
            onClick: xe,
            children: "↑"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move down",
            "aria-disabled": !Ve || void 0,
            disabled: !Ve,
            onClick: Re,
            children: "↓"
          }
        )
      ] })
    ] })
  ] });
}
const Ag = "_root_1isbb_1", Lg = "_header_1isbb_8", Rg = "_title_1isbb_15", Bg = "_navBtn_1isbb_20", Pg = "_resources_1isbb_39", Fg = "_resource_1isbb_39", Kg = "_grid_1isbb_50", qg = "_timeCol_1isbb_55", Hg = "_timeCell_1isbb_61", Wg = "_dayCol_1isbb_66", Ug = "_dayHeader_1isbb_73", Vg = "_slot_1isbb_81", Xg = "_event_1isbb_91", ft = {
  root: Ag,
  header: Lg,
  title: Rg,
  navBtn: Bg,
  resources: Pg,
  resource: Fg,
  grid: Kg,
  timeCol: qg,
  timeCell: Hg,
  dayCol: Wg,
  dayHeader: Ug,
  slot: Vg,
  event: Xg
};
function $r(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function d0({
  data: e,
  view: n = "week",
  date: r,
  onDateChange: o,
  resources: s,
  onEventClick: l,
  onSlotClick: d,
  ariaLabel: a = "Scheduler",
  className: i
}) {
  const [m, b] = Y(r ?? /* @__PURE__ */ new Date()), u = r ?? m, S = (D) => {
    r || b(D), o?.(D);
  }, v = n === "day" ? [u] : n === "week" ? Array.from({ length: 7 }, (D, h) => {
    const f = new Date(u);
    return f.setDate(u.getDate() - u.getDay() + h), f;
  }) : Array.from({ length: 30 }, (D, h) => {
    const f = new Date(u);
    return f.setDate(1 + h), f;
  }), C = Array.from({ length: 12 }, (D, h) => 8 + h);
  return /* @__PURE__ */ $("div", { className: [ft.root, i].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ $("div", { className: ft.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Previous", onClick: () => {
        const D = new Date(u);
        D.setDate(D.getDate() - 7), S(D);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: ft.title, children: u.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Next", onClick: () => {
        const D = new Date(u);
        D.setDate(D.getDate() + 7), S(D);
      }, children: "›" })
    ] }),
    s && /* @__PURE__ */ t("div", { className: ft.resources, children: s.map((D) => /* @__PURE__ */ t("div", { className: ft.resource, role: "presentation", "aria-label": D.name, children: D.name }, D.id)) }),
    /* @__PURE__ */ $("div", { className: ft.grid, role: "presentation", children: [
      /* @__PURE__ */ t("div", { className: ft.timeCol, role: "presentation", children: C.map((D) => /* @__PURE__ */ $("div", { className: ft.timeCell, children: [
        D,
        ":00"
      ] }, D)) }),
      v.map((D) => /* @__PURE__ */ $("div", { className: ft.dayCol, role: "presentation", title: D.toLocaleDateString(), onClick: () => d?.({ date: D }), tabIndex: 0, "aria-label": D.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: ft.dayHeader, children: D.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        C.map((h) => /* @__PURE__ */ t("div", { className: ft.slot, tabIndex: -1, onClick: () => {
          const f = new Date(D);
          f.setHours(h), d?.({ date: f });
        } }, h)),
        e.filter((h) => h.start.toDateString() === D.toDateString()).map((h) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ft.event,
            "aria-label": `${h.title} ${$r(h.start)} - ${$r(h.end)}`,
            "aria-pressed": !1,
            onClick: () => l?.({ event: h }),
            children: h.title
          },
          h.id
        ))
      ] }, D.toISOString()))
    ] })
  ] });
}
const Gg = "_root_uw4jr_1", Yg = "_header_uw4jr_8", Zg = "_headerCell_uw4jr_15", Jg = "_timeline_uw4jr_21", Qg = "_row_uw4jr_26", ey = "_taskName_uw4jr_32", ty = "_timelineCell_uw4jr_37", ny = "_bar_uw4jr_43", ry = "_progress_uw4jr_56", oy = "_dep_uw4jr_61", Ot = {
  root: Gg,
  header: Yg,
  headerCell: Zg,
  timeline: Jg,
  row: Qg,
  taskName: ey,
  timelineCell: ty,
  bar: ny,
  progress: ry,
  dep: oy
};
function u0({ tasks: e, view: n = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: s }) {
  const [l, d] = Y(null);
  return /* @__PURE__ */ $("div", { className: [Ot.root, s].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ $("div", { className: Ot.header, role: "row", children: [
      /* @__PURE__ */ t("div", { className: Ot.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ $("div", { className: Ot.timeline, role: "columnheader", children: [
        "Timeline (",
        n,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ $("div", { className: Ot.row, role: "row", "aria-selected": l === a.id, children: [
      /* @__PURE__ */ t("div", { className: Ot.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ $("div", { className: Ot.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Ot.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}${a.progress !== void 0 ? `, ${a.progress}% complete` : ""}`,
            "aria-pressed": l === a.id,
            tabIndex: 0,
            onClick: () => {
              d(a.id), r?.({ task: a });
            },
            onKeyDown: (i) => {
              (i.key === "Enter" || i.key === " ") && (i.preventDefault(), d(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: Ot.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((i) => /* @__PURE__ */ t("svg", { className: Ot.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-color-border)" }) }, i))
      ] })
    ] }, a.id))
  ] });
}
const sy = "_root_iswin_1", ay = "_fields_iswin_6", ly = "_chip_iswin_13", cy = "_table_iswin_35", iy = "_totalRow_iswin_55", dy = "_total_iswin_55", sn = {
  root: sy,
  fields: ay,
  chip: ly,
  table: cy,
  totalRow: iy,
  total: dy
}, Bn = {
  Sum: (e) => e.reduce((n, r) => n + r, 0),
  Average: (e) => e.length ? e.reduce((n, r) => n + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function kn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function f0({ data: e, rowFields: n = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: s, ariaLabel: l = "Pivot table", className: d }) {
  const a = n, i = r, m = o, b = (h, f, y) => {
    const g = h === "row" ? a.filter((x) => x.property !== f) : a, N = h === "col" ? i.filter((x) => x.property !== f) : i, p = h === "agg" ? m.filter((x) => !(x.property === f && x.aggregate === y)) : m;
    s?.({ rowFields: g, columnFields: N, aggregateFields: p });
  }, u = (h, f) => f.map((y) => String(h[y.property])).join(""), S = [...new Set(a.length ? e.map((h) => u(h, a)) : [""])].sort(), v = [...new Set(i.length ? e.map((h) => u(h, i)) : [""])].sort(), C = (h, f, y) => {
    const g = e.filter((p) => u(p, a) === h && u(p, i) === f), N = g.map((p) => Number(p[y.property])).filter((p) => !Number.isNaN(p));
    return !N.length && y.aggregate !== "Count" ? 0 : Bn[y.aggregate](y.aggregate === "Count" ? g.map(() => 1) : N);
  }, D = (h, f, y, g) => /* @__PURE__ */ $(
    "button",
    {
      type: "button",
      className: sn.chip,
      "aria-label": `Remove ${h} field ${y}`,
      onClick: () => b(h, f, g),
      children: [
        y,
        g ? ` (${g})` : ""
      ]
    },
    `${h}-${y}-${g ?? ""}`
  );
  return /* @__PURE__ */ $("div", { className: [sn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $("div", { className: sn.fields, children: [
      a.map((h) => D("row", h.property, h.title ?? h.property)),
      i.map((h) => D("col", h.property, h.title ?? h.property)),
      m.map((h) => D("agg", h.property, h.title ?? h.property, h.aggregate))
    ] }),
    /* @__PURE__ */ $("table", { className: sn.table, role: "grid", "aria-label": l, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ $("tr", { children: [
        /* @__PURE__ */ t("th", { scope: "col", children: a.map((h) => h.title ?? h.property).join(" / ") || "Total" }),
        v.map((h) => /* @__PURE__ */ t("th", { scope: "col", children: h || "—" }, h)),
        /* @__PURE__ */ t("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ $("tbody", { children: [
        S.map((h) => /* @__PURE__ */ $("tr", { children: [
          /* @__PURE__ */ t("th", { scope: "row", children: h || "—" }),
          v.map((f) => /* @__PURE__ */ t("td", { title: kn(C(h, f, m[0] ?? { property: "", aggregate: "Count" })), children: m.length ? kn(C(h, f, m[0])) : "" }, f)),
          /* @__PURE__ */ t("td", { className: sn.total, children: m.length ? kn(
            Bn[m[0].aggregate](
              v.flatMap((f) => e.filter((y) => u(y, a) === h && u(y, i) === f).map((y) => Number(y[m[0].property]))).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] }, h)),
        /* @__PURE__ */ $("tr", { className: sn.totalRow, children: [
          /* @__PURE__ */ t("th", { scope: "row", children: "Total" }),
          v.map((h) => /* @__PURE__ */ t("td", { children: m.length ? kn(
            Bn[m[0].aggregate](
              e.filter((f) => u(f, i) === h).map((f) => Number(f[m[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" }, h)),
          /* @__PURE__ */ t("td", { children: m.length ? kn(Bn[m[0].aggregate](e.map((h) => Number(h[m[0].property])).filter((h) => !Number.isNaN(h)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const uy = "_root_mkz78_1", fy = "_reverse_mkz78_10", _y = "_item_mkz78_14", py = "_marker_mkz78_35", hy = "_body_mkz78_46", my = "_label_mkz78_50", gy = "_content_mkz78_56", Zt = {
  root: uy,
  reverse: fy,
  item: _y,
  marker: py,
  body: hy,
  label: my,
  content: gy
};
function _0({ items: e, reverse: n = !1, ariaLabel: r = "Timeline", className: o }) {
  const s = n ? [...e].reverse() : e;
  return /* @__PURE__ */ t(
    "ol",
    {
      className: [Zt.root, n ? Zt.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: s.map((l, d) => /* @__PURE__ */ $("li", { className: Zt.item, children: [
        /* @__PURE__ */ t("span", { className: Zt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ $("div", { className: Zt.body, children: [
          /* @__PURE__ */ t("div", { className: Zt.label, children: l.label }),
          l.content !== void 0 && /* @__PURE__ */ t("div", { className: Zt.content, children: l.content })
        ] })
      ] }, d))
    }
  );
}
const yy = "_root_12pfj_1", by = "_header_12pfj_13", vy = "_headCell_12pfj_22", xy = "_row_12pfj_32", wy = "_cell_12pfj_37", Nn = {
  root: yy,
  header: by,
  headCell: vy,
  row: xy,
  cell: wy
};
function p0({ count: e, rowHeight: n = 40, height: r = 320, loadData: o, columns: s = [], ariaLabel: l = "Virtual grid", className: d }) {
  const [a, i] = Y(/* @__PURE__ */ new Map()), [m, b] = Y(0), u = ce(/* @__PURE__ */ new Set()), S = Math.ceil(r / n), v = Math.max(0, Math.floor(m / n) - 3), C = Math.min(e, v + S + 6), D = q(
    (f, y) => {
      let g = !1;
      for (let N = f; N < y; N++)
        !a.has(N) && !u.current.has(N) && (g = !0);
      if (g) {
        for (let N = f; N < y; N++) u.current.add(N);
        o({ skip: f, top: y }).then((N) => {
          i((p) => {
            const x = new Map(p);
            return N.forEach((c, w) => x.set(f + w, c)), x;
          });
          for (let p = f; p < y; p++) u.current.delete(p);
        });
      }
    },
    [a, o]
  );
  Se(() => {
    D(v, C);
  }, [v, C]);
  const h = [];
  for (let f = v; f < C; f++) {
    const y = a.get(f) ?? {};
    h.push(
      /* @__PURE__ */ t("div", { className: Nn.row, role: "row", style: { height: n }, children: s.map((g) => /* @__PURE__ */ t("div", { role: "gridcell", className: Nn.cell, style: g.width ? { width: g.width } : void 0, children: String(y[g.property] ?? "") }, g.property)) }, f)
    );
  }
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Nn.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (f) => b(f.target.scrollTop),
      onKeyDown: (f) => {
        const y = f.currentTarget;
        f.key === "ArrowDown" ? (f.preventDefault(), y.scrollTop += n) : f.key === "ArrowUp" ? (f.preventDefault(), y.scrollTop -= n) : f.key === "PageDown" ? (f.preventDefault(), y.scrollTop += r) : f.key === "PageUp" && (f.preventDefault(), y.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ t("div", { style: { height: v * n }, "aria-hidden": "true" }),
        /* @__PURE__ */ t("div", { className: Nn.header, role: "row", children: s.map((f) => /* @__PURE__ */ t("div", { role: "columnheader", className: Nn.headCell, style: { height: n, ...f.width ? { width: f.width } : {} }, children: f.title ?? f.property }, f.property)) }),
        h,
        /* @__PURE__ */ t("div", { style: { height: Math.max(0, (e - C) * n) }, "aria-hidden": "true" })
      ]
    }
  );
}
const $y = "_root_1leml_1", ky = {
  root: $y
}, Qe = 25;
function Ny(e) {
  const n = [];
  let r = 2166136261;
  for (let o = 0; o < e.length; o++)
    r ^= e.charCodeAt(o), r = Math.imul(r, 16777619) >>> 0, n.push(r & 255);
  for (; n.length < Qe * Qe; )
    r = Math.imul(r ^ n.length + 1, 16777619) >>> 0, n.push(r & 255);
  return n;
}
function Sy(e, n) {
  const r = (o, s) => e >= o && e < o + 7 && n >= s && n < s + 7;
  return !!(r(0, 0) || r(Qe - 7, 0) || r(0, Qe - 7) || e === 6 || n === 6 || e === 8 && n === 8 || e === 8 && (n < 9 || n > Qe - 9) || n === 8 && (e < 9 || e > Qe - 9));
}
function Dy(e, n) {
  const r = (o, s) => {
    const l = e - o, d = n - s, a = Math.max(Math.abs(l - 3), Math.abs(d - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && n < 7 ? r(0, 0) : e >= Qe - 7 && n < 7 ? r(Qe - 7, 0) : e < 7 && n >= Qe - 7 ? r(0, Qe - 7) : null;
}
function h0({ value: e, size: n = 128, render: r = "svg", ariaLabel: o, className: s }) {
  const l = o ?? `QR code for ${e}`, d = $e(() => {
    const m = Ny(e), b = [];
    for (let u = 0; u < Qe; u++)
      for (let S = 0; S < Qe; S++) {
        const v = Dy(S, u);
        if (v !== null) {
          b.push(v);
          continue;
        }
        if (Sy(S, u)) {
          b.push(S === 6 || u === 6 ? (S + u) % 2 === 0 : !1);
          continue;
        }
        b.push(m[u * Qe + S] % 2 === 1);
      }
    return b;
  }, [e]), a = n / Qe, i = [];
  for (let m = 0; m < Qe; m++)
    for (let b = 0; b < Qe; b++)
      d[m * Qe + b] && i.push(/* @__PURE__ */ t("rect", { x: b * a, y: m * a, width: a, height: a }, `${b}-${m}`));
  return /* @__PURE__ */ $(
    "svg",
    {
      className: [ky.root, s].filter(Boolean).join(" "),
      width: n,
      height: n,
      viewBox: `0 0 ${n} ${n}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ t("rect", { width: n, height: n, fill: "var(--dx-color-surface)" }),
        /* @__PURE__ */ t("g", { fill: "var(--dx-color-text)", children: i })
      ]
    }
  );
}
const Cy = "_root_xfffn_1", zy = "_value_xfffn_9", kr = {
  root: Cy,
  value: zy
}, Nr = [
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
], Sr = 104, My = 106;
function Oy(e) {
  const n = [Sr];
  for (let o = 0; o < e.length; o++) {
    const s = e.charCodeAt(o);
    n.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let r = Sr;
  for (let o = 1; o < n.length; o++) r += o * n[o];
  return n.push(r % 103, My), n;
}
function m0({ value: e, format: n = "Code128", height: r = 60, showValue: o = !1, ariaLabel: s, className: l }) {
  const d = s ?? `Barcode ${e}`, a = $e(() => {
    const i = [];
    let m = 0;
    for (const b of Oy(e)) {
      const u = Nr[b] ?? Nr[0];
      for (let S = 0; S < u.length; S++) {
        const v = Number(u[S]);
        S % 2 === 0 && i.push({ x: m, w: v }), m += v;
      }
    }
    return { modules: i, total: m };
  }, [e]);
  return /* @__PURE__ */ $("span", { className: [kr.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${a.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ t("rect", { width: a.total, height: r, fill: "var(--dx-color-surface)" }),
          a.modules.map((i, m) => /* @__PURE__ */ t("rect", { x: i.x, y: 0, width: i.w, height: r, fill: "var(--dx-color-text)" }, m))
        ]
      }
    ),
    o && /* @__PURE__ */ t("span", { className: kr.value, children: e })
  ] });
}
const Iy = "_root_x813o_1", jy = "_svg_x813o_10", Ty = "_gridline_x813o_15", Ey = "_tickLabel_x813o_21", Ay = "_axisTitle_x813o_27", Ly = "_dataLabel_x813o_34", Ry = "_legend_x813o_40", By = "_legendItem_x813o_48", Py = "_swatch_x813o_56", Fy = "_tooltip_x813o_63", Ky = "_visuallyHidden_x813o_77", nt = {
  root: Iy,
  svg: jy,
  gridline: Ty,
  tickLabel: Ey,
  axisTitle: Ay,
  dataLabel: Ly,
  legend: Ry,
  legendItem: By,
  swatch: Py,
  tooltip: Fy,
  visuallyHidden: Ky
}, Dr = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function qy(e, n, r) {
  const o = n - e || 1, s = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), l = Math.floor(e / s) * s, d = Math.ceil(n / s) * s, a = [];
  for (let i = l; i <= d + 1e-9; i += s) a.push(Number(i.toFixed(6)));
  return { min: l, max: d, step: s, ticks: a };
}
function g0({
  series: e,
  width: n = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: s,
  showLegend: l = !0,
  tooltipVisible: d = !0,
  onSeriesClick: a,
  ariaLabel: i = "Chart",
  className: m
}) {
  const [b, u] = Y(null), S = $e(() => {
    const c = /* @__PURE__ */ new Set();
    for (const w of e) for (const M of w.data) c.add(String(M[w.categoryProperty] ?? ""));
    return [...c];
  }, [e]), v = $e(() => e.flatMap((c) => c.data.map((w) => Number(w[c.valueProperty]))).filter((c) => !Number.isNaN(c)), [e]), C = o?.min ?? (v.length ? Math.min(0, ...v) : 0), D = o?.max ?? (v.length ? Math.max(...v) : 10), h = $e(() => qy(C, D, o?.step), [C, D, o?.step]), f = { t: 16, r: 16, b: 40, l: 56 }, y = n - f.l - f.r, g = r - f.t - f.b, N = (c) => f.l + c / Math.max(1, S.length - 1) * y, p = (c) => f.t + (1 - (c - h.min) / (h.max - h.min || 1)) * g, x = (c, w) => w.color ?? Dr[c % Dr.length];
  return /* @__PURE__ */ $("figure", { className: [nt.root, m].filter(Boolean).join(" "), role: "img", "aria-label": i, "aria-describedby": `${i.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ $("svg", { width: n, height: r, className: nt.svg, role: "presentation", children: [
      o?.gridlines !== !1 && h.ticks.map((c) => /* @__PURE__ */ t("line", { x1: f.l, x2: f.l + y, y1: p(c), y2: p(c), className: nt.gridline }, c)),
      s?.gridlines && S.map((c, w) => /* @__PURE__ */ t("line", { x1: N(w), x2: N(w), y1: f.t, y2: f.t + g, className: nt.gridline }, w)),
      h.ticks.map((c) => /* @__PURE__ */ t("text", { x: f.l - 8, y: p(c) + 4, textAnchor: "end", className: nt.tickLabel, children: c }, c)),
      S.map((c, w) => /* @__PURE__ */ t("text", { x: N(w), y: f.t + g + 16, textAnchor: "middle", className: nt.tickLabel, children: c }, c)),
      o?.title && /* @__PURE__ */ t("text", { x: 12, y: f.t + g / 2, textAnchor: "middle", transform: `rotate(-90,12,${f.t + g / 2})`, className: nt.axisTitle, children: o.title }),
      s?.title && /* @__PURE__ */ t("text", { x: f.l + y / 2, y: r - 4, textAnchor: "middle", className: nt.axisTitle, children: s.title }),
      (() => {
        const c = /* @__PURE__ */ new Map();
        for (const O of e)
          if (O.stack)
            for (const E of O.data) {
              const I = String(E[O.categoryProperty] ?? ""), _ = Number(E[O.valueProperty]);
              if (Number.isNaN(_)) continue;
              c.has(O.stack) || c.set(O.stack, /* @__PURE__ */ new Map());
              const z = c.get(O.stack);
              z.set(I, (z.get(I) ?? 0) + _);
            }
        const w = e.filter((O) => O.type === "pie" || O.type === "donut"), M = /* @__PURE__ */ new Map();
        for (const O of w) {
          const E = O.data.reduce((I, _) => I + (Number(_[O.valueProperty]) || 0), 0);
          M.set(O.title ?? String(w.indexOf(O)), E);
        }
        return e.map((O, E) => {
          const I = O.data.map((j) => ({
            cat: String(j[O.categoryProperty] ?? ""),
            val: Number(j[O.valueProperty]),
            size: O.sizeProperty ? Number(j[O.sizeProperty]) : void 0,
            item: j
          })), _ = new Map(S.map((j, A) => [j, A])), z = x(E, O);
          if (O.type === "pie" || O.type === "donut") {
            const j = f.l + y / 2, A = f.t + g / 2, X = Math.min(y, g) / 3, H = O.type === "donut" ? O.innerRadius ?? X * 0.5 : 0, re = M.get(O.title ?? String(E)) ?? I.reduce((J, Q) => J + Q.val, 0);
            let Z = -90;
            return /* @__PURE__ */ $("g", { role: "list", "aria-label": O.title ?? `Series ${E + 1}`, children: [
              /* @__PURE__ */ t("title", { children: O.title ?? `Series ${E + 1}` }),
              I.map((J, Q) => {
                const G = re ? J.val / re * 360 : 0, K = Z, L = Z + G;
                Z = L;
                const oe = G > 180 ? 1 : 0, ie = (Fe) => Fe * Math.PI / 180, ee = j + X * Math.cos(ie(K)), ue = A + X * Math.sin(ie(K)), me = j + X * Math.cos(ie(L)), xe = A + X * Math.sin(ie(L)), Re = j + H * Math.cos(ie(L)), Ie = A + H * Math.sin(ie(L)), Ve = j + H * Math.cos(ie(K)), be = A + H * Math.sin(ie(K)), Xe = H ? `M ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${xe} L ${Re} ${Ie} A ${H} ${H} 0 ${oe} 0 ${Ve} ${be} Z` : `M ${j} ${A} L ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${xe} Z`, Ze = (K + L) / 2, Pe = j + (X + 12) * Math.cos(ie(Ze)), Ge = A + (X + 12) * Math.sin(ie(Ze));
                return /* @__PURE__ */ $("g", { role: "listitem", children: [
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: Xe,
                      fill: z,
                      stroke: "var(--dx-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => d && u({ x: Pe, y: Ge, text: `${O.title ?? J.cat}: ${J.val}` }),
                      onMouseLeave: () => u(null),
                      onClick: () => a?.({ seriesTitle: O.title ?? "", category: J.cat, value: J.val, item: J.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  O.labels?.visible && /* @__PURE__ */ t("text", { x: Pe, y: Ge, textAnchor: "middle", className: nt.dataLabel, children: J.val })
                ] }, Q);
              })
            ] }, E);
          }
          if (O.type === "scatter" || O.type === "bubble")
            return /* @__PURE__ */ $("g", { role: "list", "aria-label": O.title ?? `Series ${E + 1}`, children: [
              /* @__PURE__ */ t("title", { children: O.title ?? `Series ${E + 1}` }),
              I.map((j, A) => {
                const X = _.get(j.cat) ?? 0, H = Number(I[A].cat), re = Number.isNaN(H) ? N(X) : f.l + (H - h.min) / (h.max - h.min || 1) * y, Z = p(j.val), J = O.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                return /* @__PURE__ */ $("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: re, cy: Z, r: J, fill: z, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: re,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => d && u({ x: re, y: Z, text: `${O.title ?? j.cat}: ${j.val}` }),
                      onMouseLeave: () => u(null),
                      onClick: () => a?.({ seriesTitle: O.title ?? "", category: j.cat, value: j.val, item: j.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, A);
              })
            ] }, E);
          if (O.type === "line" || O.type === "area") {
            const j = (H) => {
              if (!O.stack) return h.min;
              let re = 0;
              for (let Z = 0; Z < E; Z++) {
                const J = e[Z];
                if (J?.stack !== O.stack) continue;
                const Q = J.data.find((G) => String(G[J.categoryProperty] ?? "") === H);
                Q && (re += Number(Q[J.valueProperty]) || 0);
              }
              return re;
            }, A = I.map((H) => {
              const re = _.get(H.cat) ?? 0, Z = j(H.cat);
              return `${re === 0 ? "M" : "L"} ${N(re)} ${p(Z + H.val)}`;
            }).join(" "), X = I.map((H) => {
              const re = _.get(H.cat) ?? 0, Z = j(H.cat);
              return `${re === 0 ? "M" : "L"} ${N(re)} ${p(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ $("g", { role: "list", "aria-label": O.title ?? `Series ${E + 1}`, children: [
              /* @__PURE__ */ t("title", { children: O.title ?? `Series ${E + 1}` }),
              O.type === "area" && /* @__PURE__ */ t("path", { d: `${A} L ${N(I.length - 1)} ${p(j(I[I.length - 1].cat))} L ${N(0)} ${p(j(I[0].cat))} Z`, fill: z, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ t("path", { d: A, fill: "none", stroke: z, strokeWidth: 2 }),
              O.stack && /* @__PURE__ */ t("path", { d: X, fill: "none", stroke: "transparent" }),
              I.map((H, re) => {
                const Z = _.get(H.cat) ?? 0, J = j(H.cat), Q = N(Z), G = p(J + H.val);
                return /* @__PURE__ */ $("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: Q, cy: G, r: 4, fill: z, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "rect",
                    {
                      x: Q - 12,
                      y: G - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => d && u({ x: Q, y: G, text: `${O.title ?? H.cat}: ${H.val}` }),
                      onMouseLeave: () => u(null),
                      onFocus: () => d && u({ x: Q, y: G, text: `${O.title ?? H.cat}: ${H.val}` }),
                      onBlur: () => u(null),
                      onClick: () => a?.({ seriesTitle: O.title ?? "", category: H.cat, value: H.val, item: H.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  O.labels?.visible && /* @__PURE__ */ t("text", { x: Q, y: G - 8, textAnchor: "middle", className: nt.dataLabel, children: H.val })
                ] }, re);
              })
            ] }, E);
          }
          const T = O.type === "bar";
          return /* @__PURE__ */ $("g", { role: "list", "aria-label": O.title ?? `Series ${E + 1}`, children: [
            /* @__PURE__ */ t("title", { children: O.title ?? `Series ${E + 1}` }),
            I.map((j, A) => {
              const X = _.get(j.cat) ?? 0;
              let H = 0;
              if (O.stack)
                for (let ue = 0; ue < E; ue++) {
                  const me = e[ue];
                  if (me?.stack !== O.stack) continue;
                  const xe = me.data.find((Re) => String(Re[me.categoryProperty] ?? "") === j.cat);
                  xe && (H += Number(xe[me.valueProperty]) || 0);
                }
              const re = H + j.val, Z = e.filter((ue) => !ue.stack || ue.stack === O.stack).length, J = y / S.length, Q = T ? 18 : Math.max(12, J / (O.stack ? 1 : e.length) - 4), G = T ? f.l + H / (h.max - h.min || 1) * y : N(X) - Q / 2 + (O.stack ? 0 : E % Z * Q), K = T ? f.t + X * g / S.length + 4 : p(re), L = T ? j.val / (h.max - h.min || 1) * y : Q - 4, oe = T ? 16 : p(H) - p(re), ie = T ? f.l + H / (h.max - h.min || 1) * y : G, ee = T ? f.t + X * g / S.length + 4 : K;
              return /* @__PURE__ */ $("g", { role: "listitem", children: [
                /* @__PURE__ */ t(
                  "rect",
                  {
                    x: ie,
                    y: ee,
                    width: T ? L : Q - 4,
                    height: oe,
                    fill: z,
                    rx: 2,
                    onMouseEnter: () => d && u({ x: ie + (T ? L : Q) / 2, y: ee, text: `${O.title ?? j.cat}: ${j.val}` }),
                    onMouseLeave: () => u(null),
                    onClick: () => a?.({ seriesTitle: O.title ?? "", category: j.cat, value: j.val, item: j.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                O.labels?.visible && /* @__PURE__ */ t("text", { x: ie + (T ? L : Q) / 2, y: ee - 4, textAnchor: "middle", className: nt.dataLabel, children: j.val })
              ] }, A);
            })
          ] }, E);
        });
      })()
    ] }),
    b && /* @__PURE__ */ t("div", { className: nt.tooltip, style: { left: b.x, top: b.y - 28 }, children: b.text }),
    l && /* @__PURE__ */ t("div", { className: nt.legend, children: e.map((c, w) => /* @__PURE__ */ $("span", { className: nt.legendItem, children: [
      /* @__PURE__ */ t("span", { className: nt.swatch, style: { backgroundColor: x(w, c) }, "aria-hidden": "true" }),
      c.title ?? `Series ${w + 1}`
    ] }, w)) }),
    /* @__PURE__ */ $("table", { className: nt.visuallyHidden, id: `${i.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ t("caption", { children: i }),
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ $("tr", { children: [
        /* @__PURE__ */ t("th", { children: "Series" }),
        /* @__PURE__ */ t("th", { children: "Category" }),
        /* @__PURE__ */ t("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: e.map(
        (c) => c.data.map((w, M) => /* @__PURE__ */ $("tr", { children: [
          /* @__PURE__ */ t("td", { children: c.title ?? "" }),
          /* @__PURE__ */ t("td", { children: String(w[c.categoryProperty] ?? "") }),
          /* @__PURE__ */ t("td", { children: String(w[c.valueProperty] ?? "") })
        ] }, `${c.title}-${M}`))
      ) })
    ] })
  ] });
}
export {
  zb as Accordion,
  yb as Alert,
  jb as Autocomplete,
  Db as Avatar,
  Xy as Badge,
  m0 as Barcode,
  kb as Body,
  r0 as Breadcrumb,
  Uy as Button,
  Vy as Card,
  l0 as Carousel,
  g0 as Chart,
  _b as Checkbox,
  Eb as Checkboxlist,
  Hb as Colorpicker,
  xb as Column,
  On as DEFAULT_OPERATOR_BY_TYPE,
  wp as DEFAULT_PALETTE,
  cb as DataFilter,
  ib as DataGrid,
  db as DataList,
  Wb as Datepicker,
  hb as Dialog,
  Jb as DropZone,
  Ib as Dropdown,
  Jy as EmptyState,
  jr as FILTER_OPERATORS,
  n0 as FabMenu,
  Qy as Field,
  ef as Footer,
  eb as Form,
  u0 as Gantt,
  rf as Header,
  Ye as Icon,
  fb as Input,
  ub as Label,
  $b as Layout,
  Tb as Listbox,
  Kb as Mask,
  Qb as Menu,
  qb as Numeric,
  ia as Pager,
  e0 as PanelMenu,
  Fb as Password,
  i0 as PickList,
  f0 as Pivot,
  t0 as ProfileMenu,
  Nb as Progress,
  h0 as QRCode,
  Ab as Radiobuttonlist,
  Ub as Rating,
  vb as Row,
  d0 as Scheduler,
  Gb as SecurityCode,
  Fn as Select,
  Lb as Selectbar,
  ff as Sidebar,
  Yb as SignaturePad,
  bb as Skeleton,
  Vb as Slider,
  Bb as Splitbutton,
  s0 as Splitter,
  wb as Stack,
  Yy as Stat,
  o0 as Steps,
  wl as Switch,
  Zy as Table,
  Cb as Tabs,
  Mb as Textarea,
  Pb as Textbox,
  Sb as ThemeSwitcher,
  _0 as Timeline,
  Xb as Timespanpicker,
  gb as ToastProvider,
  a0 as Toc,
  Rb as Togglebutton,
  pb as Tooltip,
  c0 as Tree,
  Ob as Typography,
  Zb as Upload,
  p0 as VirtualGrid,
  Er as applyFilters,
  ma as applyGridState,
  pn as columnValue,
  _a as cycleSort,
  ga as defaultOperatorForType,
  nb as email,
  hr as formatMasked,
  lr as formatValue,
  Kn as getByPath,
  Gy as iconNames,
  Tr as matchesFilters,
  sb as maxLength,
  ob as minLength,
  ha as paginate,
  rb as pattern,
  ab as range,
  tb as required,
  vs as runValidators,
  Es as sortItems,
  pa as sortedItems,
  Ms as toFilterString,
  Ts as toODataFilterString,
  bs as useFormContext,
  lb as useFormField,
  mb as useToast
};
