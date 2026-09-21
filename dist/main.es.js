import { jsxs as w, jsx as t, Fragment as Me } from "react/jsx-runtime";
import { forwardRef as He, useId as Ue, isValidElement as Cn, cloneElement as zr, useState as Y, useRef as ce, useCallback as q, useMemo as $e, useContext as Mr, createContext as Or, useEffect as Se, Children as Fr, useImperativeHandle as tr } from "react";
const Kr = "_button_5wv4n_1", qr = "_filled_5wv4n_29", Hr = "_flat_5wv4n_30", Wr = "_outlined_5wv4n_31", Ur = "_text_5wv4n_32", Vr = "_primary_5wv4n_100", Xr = "_secondary_5wv4n_102", Gr = "_ghost_5wv4n_104", Yr = "_danger_5wv4n_106", Zr = "_success_5wv4n_108", Jr = "_info_5wv4n_110", Qr = "_loading_5wv4n_114", es = "_spinner_5wv4n_117", ts = "_xs_5wv4n_129", ns = "_sm_5wv4n_135", rs = "_md_5wv4n_141", ss = "_lg_5wv4n_147", os = "_xl_5wv4n_153", as = "_iconOnly_5wv4n_159", ls = "_fullWidth_5wv4n_185", wt = {
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
  spinner: es,
  "dx-spin": "_dx-spin_5wv4n_1",
  xs: ts,
  sm: ns,
  md: rs,
  lg: ss,
  xl: os,
  iconOnly: as,
  fullWidth: ls
}, cs = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function is(e, n) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", s = n;
  if (r) {
    const u = cs[e];
    return { variant: u.variant, style: s ?? u.style };
  }
  const o = e ?? "filled";
  return { variant: o === "filled" || o === "flat" || o === "outlined" || o === "text" ? o : "filled", style: s ?? "primary" };
}
const lb = He(function({
  variant: n = "filled",
  severity: r,
  shade: s = "default",
  size: o = "md",
  fullWidth: l = !1,
  iconOnly: u = !1,
  loading: a = !1,
  className: i,
  type: g = "button",
  disabled: v,
  children: f,
  ...D
}, x) {
  const C = is(n, r), z = s !== "default" ? `shade-${s}` : null, h = [
    wt.button,
    wt[C.variant],
    wt[`style-${C.style}`],
    // backwards-compat: tone-* still emitted
    wt[`tone-${C.style}`],
    z ? wt[z] : null,
    wt[o],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    n && wt[n] ? wt[n] : null,
    l ? wt.fullWidth : null,
    u ? wt.iconOnly : null,
    a ? wt.loading : null,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w(
    "button",
    {
      ref: x,
      type: g,
      className: h,
      disabled: v || a,
      "aria-busy": a || void 0,
      ...D,
      children: [
        a ? /* @__PURE__ */ t("span", { "aria-hidden": "true", className: wt.spinner }) : null,
        f
      ]
    }
  );
}), ds = "_card_1qkae_1", us = "_elevated_1qkae_8", fs = "_filled_1qkae_13", _s = "_outlined_1qkae_18", ps = "_interactive_1qkae_22", hs = "_text_1qkae_30", ms = "_header_1qkae_46", gs = "_body_1qkae_53", ys = "_footer_1qkae_63", dn = {
  card: ds,
  elevated: us,
  filled: fs,
  outlined: _s,
  interactive: ps,
  text: hs,
  header: ms,
  body: gs,
  footer: ys
}, cb = He(function({ variant: n = "elevated", header: r, footer: s, className: o, children: l, onKeyDown: u, ...a }, i) {
  const g = n === "interactive";
  return /* @__PURE__ */ w(
    "div",
    {
      ref: i,
      tabIndex: g ? 0 : void 0,
      onKeyDown: (v) => {
        u?.(v), !(!g || v.key !== "Enter" && v.key !== " ") && (v.preventDefault(), v.currentTarget.click());
      },
      className: [dn.card, dn[n], o].filter(Boolean).join(" "),
      ...a,
      children: [
        r != null && /* @__PURE__ */ t("div", { className: dn.header, children: r }),
        /* @__PURE__ */ t("div", { className: dn.body, children: l }),
        s != null && /* @__PURE__ */ t("div", { className: dn.footer, children: s })
      ]
    }
  );
});
function nr(e, n = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : n;
}
const bs = "_badge_1s9e5_1", vs = "_xs_1s9e5_14", xs = "_sm_1s9e5_19", ws = "_md_1s9e5_24", $s = "_lg_1s9e5_29", ks = "_xl_1s9e5_34", Ns = "_neutral_1s9e5_40", Ss = "_primary_1s9e5_45", Ds = "_secondary_1s9e5_50", Cs = "_light_1s9e5_55", zs = "_base_1s9e5_60", Ms = "_dark_1s9e5_65", Os = "_info_1s9e5_70", Is = "_success_1s9e5_75", Ts = "_warning_1s9e5_80", Es = "_danger_1s9e5_85", js = "_filled_1s9e5_92", As = "_outlined_1s9e5_142", Ls = "_text_1s9e5_194", un = {
  badge: bs,
  xs: vs,
  sm: xs,
  md: ws,
  lg: $s,
  xl: ks,
  neutral: Ns,
  primary: Ss,
  secondary: Ds,
  light: Cs,
  base: zs,
  dark: Ms,
  info: Os,
  success: Is,
  warning: Ts,
  danger: Es,
  filled: js,
  outlined: As,
  text: Ls,
  "shade-lighter": "_shade-lighter_1s9e5_238",
  "shade-light": "_shade-light_1s9e5_238",
  "shade-dark": "_shade-dark_1s9e5_244",
  "shade-darker": "_shade-darker_1s9e5_247"
}, ib = He(function({ severity: n = "primary", variant: r = "filled", shade: s, size: o = "md", className: l, children: u, ...a }, i) {
  const g = n, v = nr(r, "filled"), f = s && s !== "default" ? `shade-${s}` : null;
  return /* @__PURE__ */ t(
    "span",
    {
      ref: i,
      className: [un.badge, un[o], un[g], un[v], f ? un[f] : null, l].filter(Boolean).join(" "),
      ...a,
      children: u
    }
  );
}), Rs = "_xs_1t3wj_2", Bs = "_sm_1t3wj_7", Ps = "_md_1t3wj_1", Fs = "_lg_1t3wj_17", Ks = "_xl_1t3wj_22", qs = {
  xs: Rs,
  sm: Bs,
  md: Ps,
  lg: Fs,
  xl: Ks
}, db = [
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
], Hs = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ge = He(function({ name: n, size: r = "md", strokeWidth: s = 2, className: o, ...l }, u) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: u,
      className: [a ? qs[r] : null, o].filter(Boolean).join(" "),
      width: a ? void 0 : r,
      height: a ? void 0 : r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: Hs[n]
    }
  );
}), Ws = "_stat_e3lee_1", Us = "_label_e3lee_8", Vs = "_row_e3lee_16", Xs = "_value_e3lee_22", Gs = "_delta_e3lee_28", Ys = "_success_e3lee_33", Zs = "_danger_e3lee_37", Js = "_neutral_e3lee_41", Qs = "_hint_e3lee_45", Wt = {
  stat: Ws,
  label: Us,
  row: Vs,
  value: Xs,
  delta: Gs,
  success: Ys,
  danger: Zs,
  neutral: Js,
  hint: Qs
}, ub = He(function({ label: n, value: r, delta: s, deltaTone: o = "neutral", hint: l, className: u, ...a }, i) {
  return /* @__PURE__ */ w("div", { ref: i, className: [Wt.stat, u].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Wt.label, children: n }),
    /* @__PURE__ */ w("div", { className: Wt.row, children: [
      /* @__PURE__ */ t("div", { className: Wt.value, children: r }),
      s != null && /* @__PURE__ */ t("div", { className: [Wt.delta, Wt[o]].join(" "), children: s })
    ] }),
    l != null && /* @__PURE__ */ t("div", { className: Wt.hint, children: l })
  ] });
}), eo = "_wrap_1n4bf_1", to = "_table_1n4bf_8", no = "_caption_1n4bf_14", ro = "_none_1n4bf_51", so = "_horizontal_1n4bf_57", oo = "_vertical_1n4bf_67", ao = "_alternating_1n4bf_85", lo = "_start_1n4bf_89", co = "_center_1n4bf_93", io = "_end_1n4bf_97", uo = "_empty_1n4bf_101", Pt = {
  wrap: eo,
  table: to,
  caption: no,
  none: ro,
  horizontal: so,
  vertical: oo,
  alternating: ao,
  start: lo,
  center: co,
  end: io,
  empty: uo
};
function fb({
  columns: e,
  rows: n,
  rowKey: r,
  empty: s,
  caption: o,
  gridLines: l = "default",
  allowAlternatingRows: u = !0,
  className: a
}) {
  const i = l === "default" || l === "both" ? "" : Pt[l];
  return /* @__PURE__ */ w("div", { className: [Pt.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
      "table",
      {
        className: [
          Pt.table,
          i,
          u ? Pt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          o != null && /* @__PURE__ */ t("caption", { className: Pt.caption, children: o }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((g) => /* @__PURE__ */ t(
            "th",
            {
              className: g.align != null ? Pt[g.align] : void 0,
              scope: "col",
              children: g.header
            },
            g.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((g) => /* @__PURE__ */ t("tr", { children: e.map((v) => /* @__PURE__ */ t(
            "td",
            {
              className: v.align != null ? Pt[v.align] : void 0,
              children: v.render != null ? v.render(g) : g[v.key]
            },
            v.key
          )) }, r(g))) })
        ]
      }
    ),
    n.length === 0 && s != null && /* @__PURE__ */ t("div", { className: Pt.empty, children: s })
  ] });
}
const fo = "_emptyState_7sl2y_1", _o = "_icon_7sl2y_13", po = "_title_7sl2y_18", ho = "_description_7sl2y_24", mo = "_action_7sl2y_30", fn = {
  emptyState: fo,
  icon: _o,
  title: po,
  description: ho,
  action: mo
};
function _b({ icon: e, title: n, description: r, action: s, className: o }) {
  return /* @__PURE__ */ w("div", { className: [fn.emptyState, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: fn.icon, children: e }),
    /* @__PURE__ */ t("div", { className: fn.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: fn.description, children: r }),
    s != null && /* @__PURE__ */ t("div", { className: fn.action, children: s })
  ] });
}
const go = "_field_3cvvz_1", yo = "_label_3cvvz_8", bo = "_required_3cvvz_14", vo = "_hint_3cvvz_19", xo = "_error_3cvvz_24", _n = {
  field: go,
  label: yo,
  required: bo,
  hint: vo,
  error: xo
};
function pb({ label: e, htmlFor: n, required: r, hint: s, supporting: o, error: l, children: u, className: a }) {
  const i = s ?? o, g = Ue(), v = Ue(), f = Ue(), D = l != null ? v : i != null ? f : null, x = typeof u == "function" ? u({ inputId: g, hintId: f, errorId: v }) : u, C = Cn(x) && typeof x.props.id == "string" ? x.props.id : void 0, z = C ?? n ?? g, h = Cn(x) && (D != null || C == null && typeof x.type == "string"), d = C != null || n != null || h, _ = h && Cn(x) ? zr(
    x,
    {
      id: z,
      "aria-describedby": D != null ? [
        x.props["aria-describedby"],
        D
      ].filter((m) => typeof m == "string").join(" ") || void 0 : x.props["aria-describedby"],
      "aria-invalid": l != null ? !0 : x.props["aria-invalid"]
    }
  ) : x;
  return /* @__PURE__ */ w("div", { className: [_n.field, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ w("label", { className: _n.label, htmlFor: d ? z : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: _n.required, "aria-hidden": "true", children: "*" })
    ] }),
    _,
    l != null ? /* @__PURE__ */ t("div", { id: v, className: _n.error, "aria-live": "polite", children: l }) : i != null ? /* @__PURE__ */ t("div", { id: f, className: _n.hint, children: i }) : null
  ] });
}
const wo = "_form_fwqyn_1", $o = {
  form: wo
}, Ir = Or(null);
function ko() {
  const e = Mr(Ir);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function hb({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: s,
  method: o,
  children: l,
  className: u
}) {
  const [a, i] = Y({}), [g, v] = Y(0), f = ce(a);
  f.current = a;
  const D = q((m) => {
    i((N) => N[m.name] === m ? N : { ...N, [m.name]: m });
  }, []), x = q((m) => {
    i((N) => {
      if (!(m in N)) return N;
      const b = { ...N };
      return delete b[m], b;
    });
  }, []), C = q(() => {
    const m = {};
    for (const N of Object.values(f.current)) {
      const b = N.validate();
      b.length > 0 && (m[N.name] = b);
    }
    return m;
  }, []), z = q(() => {
    const m = C();
    v((N) => N + 1), Object.keys(m).length === 0 ? n?.(e) : r?.(m);
  }, [C, e, n, r]), h = (m) => {
    s != null && o != null || (m.preventDefault(), z());
  }, d = $e(
    () => ({ registerField: D, unregisterField: x, submit: z, submitCount: g }),
    [D, x, z, g]
  ), _ = [$o.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(Ir.Provider, { value: d, children: /* @__PURE__ */ t("form", { className: _, onSubmit: h, action: s, method: o, noValidate: !0, children: l }) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", mb = (e = "Required") => (n) => an(n) ? e : null, gb = (e = "Invalid email") => (n) => an(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, yb = (e, n = "Invalid format") => (r) => an(r) || e.test(String(r)) ? null : n, bb = (e, n = `Minimum ${e} characters`) => (r) => an(r) || String(r).length >= e ? null : n, vb = (e, n = `Maximum ${e} characters`) => (r) => an(r) || String(r).length <= e ? null : n, xb = (e, n, r = `Between ${e} and ${n}`) => (s) => {
  if (an(s)) return null;
  const o = Number(s);
  return !Number.isNaN(o) && o >= e && o <= n ? null : r;
};
function No(e, n, r) {
  return e.map((s) => s(n, r)).filter((s) => s != null);
}
function wb(e, n) {
  const { registerField: r, unregisterField: s, submitCount: o } = ko(), [l, u] = Y(n?.initialValue), [a, i] = Y(!1), [g, v] = Y(!1), f = ce(() => []);
  f.current = () => No(n?.validate ?? [], l), Se(() => (r({ name: e, validate: () => f.current() }), () => s(e)), [e, r, s]), Se(() => {
    o > 0 && (i(!0), v(!1));
  }, [o]);
  const D = a && !g ? f.current() : [];
  return { value: l, setValue: (C) => {
    u(C), v(!0);
  }, errors: D };
}
const So = "_select_1j23s_1", Do = "_invalid_1j23s_33", Co = "_xs_1j23s_39", zo = "_sm_1j23s_45", Mo = "_md_1j23s_51", Oo = "_lg_1j23s_57", Io = "_xl_1j23s_63", qn = {
  select: So,
  invalid: Do,
  xs: Co,
  sm: zo,
  md: Mo,
  lg: Oo,
  xl: Io
}, Fn = He(function({ size: n = "md", invalid: r = !1, options: s, children: o, className: l, ...u }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [qn.select, qn[n], r ? qn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...u,
      children: s != null ? s.map((i) => /* @__PURE__ */ t("option", { value: i.value, disabled: i.disabled, children: i.label }, i.value)) : o
    }
  );
}), Tr = [
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
  return n.split(".").reduce((r, s) => {
    if (r != null)
      return r[s];
  }, e);
}
function sr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Sn(e, n) {
  const r = sr(e), s = sr(n);
  if (typeof r == "number" && typeof s == "number") return r - s;
  const o = String(r ?? ""), l = String(s ?? "");
  return o < l ? -1 : o > l ? 1 : 0;
}
function or(e, n, r) {
  const s = Kn(n, e.property), o = ar(s, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return o;
  const l = ar(s, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? o && l : o || l;
}
function ar(e, n, r, s) {
  const o = s === "CaseInsensitive", l = (i) => o && typeof i == "string" ? i.toLowerCase() : i, u = l(e), a = l(n);
  switch (r) {
    case "Equals":
      return u === a || Array.isArray(u) && u.some((i) => l(i) === a);
    case "NotEquals":
      return u !== a && !(Array.isArray(u) && u.some((i) => l(i) === a));
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
      return Array.isArray(a) && a.some((i) => l(i) === u);
    case "NotIn":
      return Array.isArray(a) && !a.some((i) => l(i) === u);
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
function rr(e) {
  return "filters" in e;
}
function Er(e, n, r = {}) {
  const s = r.logicalOperator ?? "And", o = r.caseSensitivity ?? "CaseInsensitive";
  if (rr(n)) {
    if (n.filters.length === 0) return !0;
    const l = n.operator ?? s;
    return n.filters[l === "Or" ? "some" : "every"](
      (u) => Er(e, u, { logicalOperator: l, caseSensitivity: o })
    );
  }
  return n.operator === "Custom", or(n, e, o);
}
function jr(e, n, r = {}) {
  return e.filter((s) => Er(s, n, r));
}
function To(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function yt(e) {
  return typeof e == "string" ? `"${To(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(yt).join(", ")}]` : `"${String(e)}"`;
}
function Eo(e) {
  const n = (s, o) => {
    switch (s) {
      case "Equals":
        return `${e.property}.Equals(${yt(o)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${yt(o)})`;
      case "LessThan":
        return `${e.property}.LessThan(${yt(o)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${yt(o)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${yt(o)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${yt(o)})`;
      case "Contains":
        return `${e.property}.Contains(${yt(o)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${yt(o)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${yt(o)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${yt(o)})`;
      case "In":
        return `${e.property}.In(${yt(o)})`;
      case "NotIn":
        return `!${e.property}.In(${yt(o)})`;
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
function jo(e) {
  return rr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(jo).filter(Boolean).join(` ${e.operator} `)})` : Eo(e);
}
function Ao(e) {
  return e.replace(/'/g, "''");
}
const Lo = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Ro(e, n) {
  const r = e.property, s = n === "CaseInsensitive", o = (i) => s ? `tolower(${i})` : i, l = (i) => typeof i == "string" ? `'${Ao(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, g) => {
    const v = typeof g == "string", f = v && s ? o(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${f} ${Lo[i]} ${v && s ? o(l(g)) : l(g)}`;
      case "Contains":
        return `contains(${o(r)}, ${o(l(g))})`;
      case "StartsWith":
        return `startswith(${o(r)}, ${o(l(g))})`;
      case "EndsWith":
        return `endswith(${o(r)}, ${o(l(g))})`;
      case "DoesNotContain":
        return `not(contains(${o(r)}, ${o(l(g))}))`;
      case "In":
        return Array.isArray(g) ? `${f} in (${g.map((D) => l(D)).join(", ")})` : `${f} in (${l(g)})`;
      case "NotIn":
        return Array.isArray(g) ? `not(${f} in (${g.map((D) => l(D)).join(", ")}))` : `not(${f} in (${l(g)}))`;
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
function Bo(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (rr(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((o) => Bo(o, { caseSensitivity: r })).filter(Boolean).join(` ${s} `)})`;
  }
  return Ro(e, r);
}
function Po(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, s) => {
    for (const o of n) {
      const l = o.sortOrder === "Ascending" ? 1 : -1, u = Sn(Kn(r, o.property), Kn(s, o.property));
      if (u !== 0) return u * l;
    }
    return 0;
  });
}
const Fo = "_filter_1chbh_1", Ko = "_rows_1chbh_9", qo = "_row_1chbh_9", Ho = "_join_1chbh_21", Wo = "_property_1chbh_30", Uo = "_operator_1chbh_34", Vo = "_value_1chbh_38", Xo = "_remove_1chbh_42", Go = "_bar_1chbh_58", Yo = "_add_1chbh_64", Zo = "_custom_1chbh_78", Jo = "_summary_1chbh_82", _t = {
  filter: Fo,
  rows: Ko,
  row: qo,
  join: Ho,
  property: Wo,
  operator: Uo,
  value: Vo,
  remove: Xo,
  bar: Go,
  add: Yo,
  custom: Zo,
  summary: Jo
}, Qo = {
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
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
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
  if (s === "boolean")
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
  const o = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ t(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: _t.value,
      ...o,
      value: n == null ? "" : String(n),
      onChange: (l) => r(s === "number" && l.target.value !== "" ? Number(l.target.value) : l.target.value)
    }
  );
}
function $b({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: o = !1,
  className: l,
  viewChanged: u,
  items: a,
  children: i
}) {
  const [g, v] = Y(
    () => s != null && s.length > 0 ? s.map((d, _) => ({ id: _, ...d })) : [{ id: 0, property: e[0]?.name ?? "", operator: On[e[0]?.type ?? "string"], value: void 0 }]
  ), f = (d, _) => {
    v((m) => m.map((N) => N.id === d ? { ...N, ..._ } : N));
  }, D = () => {
    const d = g[g.length - 1], _ = Math.max(0, ...g.map((N) => N.id)) + 1, m = e[0];
    v((N) => [
      ...N,
      {
        id: _,
        property: d?.property ?? m?.name ?? "",
        operator: On[e.find((b) => b.name === (d?.property ?? m?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, x = (d) => {
    v((_) => _.length > 1 ? _.filter((m) => m.id !== d) : _);
  }, C = $e(() => {
    const d = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], _ = [];
    for (const m of g) {
      if (m.property === "" || (m.value == null || m.value === "") && !d.includes(m.operator)) continue;
      const b = {
        property: m.property,
        operator: m.operator,
        value: m.value
      };
      m.secondOperator != null && m.secondValue !== void 0 && (b.secondOperator = m.secondOperator, b.secondValue = m.secondValue, b.logicalOperator = m.logicalOperator ?? "And"), _.push(b);
    }
    return _;
  }, [g]), z = $e(() => a == null || C.length === 0 ? a : jr(a, { operator: n, filters: C }, { caseSensitivity: r }), [a, C, n, r]);
  Se(() => {
    u != null && a != null && u(z ?? []);
  }, [z]);
  const h = (d) => e.find((_) => _.name === d) ?? { name: d, type: "string" };
  return /* @__PURE__ */ w("div", { className: [_t.filter, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: _t.rows, role: "group", "aria-label": "Filter conditions", children: g.map((d, _) => {
      const m = h(d.property), N = o ? [On[m.type ?? "string"]] : Tr;
      return /* @__PURE__ */ w("div", { className: _t.row, children: [
        _ > 0 ? /* @__PURE__ */ t("span", { className: _t.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          Fn,
          {
            "aria-label": `Condition ${_ + 1} property`,
            className: _t.property,
            value: d.property,
            onChange: (b) => {
              const $ = e.find((c) => c.name === b.target.value);
              f(d.id, {
                property: b.target.value,
                operator: On[$?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((b) => ({ value: b.name, label: b.title ?? b.name }))
          }
        ),
        /* @__PURE__ */ t(
          Fn,
          {
            "aria-label": `Condition ${_ + 1} operator`,
            className: _t.operator,
            value: d.operator,
            onChange: (b) => f(d.id, { operator: b.target.value }),
            options: N.map((b) => ({ value: b, label: Qo[b] }))
          }
        ),
        /* @__PURE__ */ t(ea, { property: m, value: d.value, onChange: (b) => f(d.id, { value: b }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: _t.remove,
            "aria-label": `Remove condition ${_ + 1}`,
            onClick: () => x(d.id),
            children: "×"
          }
        )
      ] }, d.id);
    }) }),
    /* @__PURE__ */ w("div", { className: _t.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: _t.add, onClick: D, children: "Add filter" }),
      i != null ? /* @__PURE__ */ t("div", { className: _t.custom, children: i }) : null,
      a != null ? /* @__PURE__ */ w("span", { className: _t.summary, "aria-live": "polite", children: [
        z?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const ta = "_pager_ps38y_1", na = "_alignLeft_ps38y_10", ra = "_alignCenter_ps38y_14", sa = "_alignRight_ps38y_18", oa = "_alignJustify_ps38y_22", aa = "_summary_ps38y_26", la = "_controls_ps38y_31", ca = "_button_ps38y_37", ia = "_active_ps38y_73", da = "_ellipsis_ps38y_85", ua = "_size_ps38y_91", ot = {
  pager: ta,
  alignLeft: na,
  alignCenter: ra,
  alignRight: sa,
  alignJustify: oa,
  summary: aa,
  controls: la,
  button: ca,
  active: ia,
  ellipsis: da,
  size: ua
};
function fa(e, n, r, s) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(s));
}
function lr(e, n) {
  return e.replace("{0}", String(n));
}
function _a(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (a, i) => i + 1);
  const s = Math.floor(r / 2);
  let o = Math.max(1, e - s);
  const l = Math.min(n, o + r - 1);
  o = Math.max(1, l - r + 1);
  const u = [];
  for (let a = o; a <= l; a++) u.push(a);
  return o > 2 && u.unshift("ellipsis"), o > 1 && u.unshift(1), l < n - 1 && u.push("ellipsis"), l < n && u.push(n), u;
}
function pa({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: s,
  defaultPage: o = 1,
  pageSizeOptions: l,
  pageNumbersCount: u = 5,
  alwaysVisible: a = !1,
  horizontalAlign: i = "left",
  showPagingSummary: g,
  showSummary: v,
  showPageSizeSelector: f = !0,
  pagingSummaryFormat: D = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: x,
  summaryTemplate: C,
  pageSizeText: z = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: d = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: N = "Page {0}",
  pageAriaLabelFormat: b = "Page {0}",
  onPageChange: $,
  onPageSizeChange: c,
  ariaLabel: y = "Pagination",
  className: S
}) {
  const O = r ?? s ?? o, [j, I] = Y(O), p = r !== void 0 || s !== void 0, M = p ? O : j, E = Math.max(1, Math.ceil(e / n)), T = Math.min(Math.max(1, M), E), A = g ?? v ?? !0, X = a || E > 1, H = _a(T, E, u), re = q(
    (G) => {
      const K = Math.min(Math.max(1, G), E);
      p || I(K);
      const L = (K - 1) * n;
      $?.({ page: K, skip: L, top: n, pageCount: E, pageSize: n });
    },
    [p, $, E, n]
  ), Z = i === "center" ? ot.alignCenter : i === "right" ? ot.alignRight : i === "justify" ? ot.alignJustify : ot.alignLeft, J = { count: e, pageNumber: T, pageSize: n, pageCount: E }, Q = (G) => {
    const K = Array.from(G.currentTarget.querySelectorAll("button[data-pager-page]")), L = K.indexOf(document.activeElement);
    L !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (K[L + 1] ?? K[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (K[L - 1] ?? K[K.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), K[0]?.focus()) : G.key === "End" && (G.preventDefault(), K[K.length - 1]?.focus()));
  };
  return X ? /* @__PURE__ */ w("nav", { className: [ot.pager, Z, S].filter(Boolean).join(" "), "aria-label": y, children: [
    A && /* @__PURE__ */ t("span", { className: ot.summary, "aria-live": "polite", children: x ? x(J) : C ? C({ count: e, pageNumber: T, pageSize: n }) : fa(D, T, E, e) }),
    /* @__PURE__ */ w("div", { className: ot.controls, role: "group", "aria-label": y, onKeyDown: Q, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: T <= 1,
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
          className: ot.button,
          disabled: T <= 1,
          onClick: () => re(T - 1),
          "aria-label": d,
          title: d,
          children: "‹"
        }
      ),
      H.map(
        (G, K) => G === "ellipsis" ? /* @__PURE__ */ t("span", { className: ot.ellipsis, "aria-hidden": "true", children: "…" }, `e${K}`) : /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "data-pager-page": G,
            className: [ot.button, G === T ? ot.active : ""].filter(Boolean).join(" "),
            "aria-current": G === T ? "page" : void 0,
            "aria-label": lr(b, G),
            title: lr(N, G),
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
          className: ot.button,
          disabled: T >= E,
          onClick: () => re(T + 1),
          "aria-label": _,
          title: _,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: T >= E,
          onClick: () => re(E),
          "aria-label": m,
          title: m,
          children: "»"
        }
      )
    ] }),
    f && l && l.length > 0 && /* @__PURE__ */ w("label", { className: ot.size, children: [
      /* @__PURE__ */ t("span", { children: z }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (G) => c?.(Number(G.target.value)),
          "aria-label": z,
          children: l.map((G) => /* @__PURE__ */ t("option", { value: G, children: G }, G))
        }
      )
    ] })
  ] }) : null;
}
function Yn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: s, showSummary: o, ...l } = e;
  return /* @__PURE__ */ t(
    pa,
    {
      page: n,
      showPagingSummary: o,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: s ? (a) => s({ count: a.count, pageNumber: a.pageNumber, pageSize: a.pageSize }) : void 0,
      onPageChange: r ? (a) => r(a.page) : void 0,
      ...l
    }
  );
}
function ha(e, n, r, s, o, l) {
  if (!n || !r) return e.map((i) => ({ type: "row", row: i }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const g = String(o(i, n) ?? ""), v = u.get(g);
    v ? v.push(i) : u.set(g, [i]);
  });
  const a = [];
  return u.forEach((i, g) => {
    const v = i[0], f = v != null ? o(v, n) : void 0;
    a.push({
      type: "group",
      group: { key: g, display: l(f), property: n, title: r.title ?? n, count: i.length }
    }), s.has(g) && i.forEach((D) => a.push({ type: "row", row: D }));
  }), a;
}
function In(e, n) {
  return e.property ?? `col-${n}`;
}
function ma(e, n) {
  const r = {};
  let s = 0;
  return e.forEach(({ key: o, column: l }) => {
    if (!l.frozen) return;
    r[o] = s === 0 ? "0px" : `${s}px`;
    const u = n[o] ?? l.width ?? "8rem";
    s += parseFloat(u);
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
    return Kn(e, n);
}
function cr(e, n) {
  if (n == null || n === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(n);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (n === "d" || n === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const ir = ["Ascending", "Descending", null];
function ya(e, n, r = {}) {
  const s = e.find((l) => l.property === n), o = ir[(s ? ir.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return o == null ? e.filter((l) => l.property !== n) : r.multi ? [...e.filter((l) => l.property !== n), { property: n, sortOrder: o }] : [{ property: n, sortOrder: o }];
}
function ba(e, n) {
  return Po(e, n);
}
function va(e, n, r) {
  const s = Math.max(1, Math.ceil(e.length / r)), o = Math.min(Math.max(1, n), s), l = (o - 1) * r;
  return { items: e.slice(l, l + r), pageCount: s, pageNumber: o, total: e.length };
}
function xa(e, n, r = {}) {
  const s = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, i]) => ({
    property: a,
    operator: i.operator ?? "Contains",
    value: ga(i.value, r.types?.[a] ?? "string")
  })), o = s.length > 0 ? jr(e, { operator: r.logicalOperator ?? "And", filters: s }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = ba(o, n.sorts);
  return { ...va(l, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function wa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const $a = "_grid_1783z_1", ka = "_toolbar_1783z_8", Na = "_picker_1783z_13", Sa = "_pickerButton_1783z_17", Da = "_pickerPanel_1783z_31", Ca = "_pickerItem_1783z_46", za = "_groupPanel_1783z_55", Ma = "_groupPanelActive_1783z_66", Oa = "_groupPanelText_1783z_70", Ia = "_groupChip_1783z_74", Ta = "_groupRemove_1783z_85", Ea = "_groupRow_1783z_94", ja = "_groupCell_1783z_98", Aa = "_groupToggle_1783z_103", La = "_editRow_1783z_116", Ra = "_editCell_1783z_120", Ba = "_editInput_1783z_125", Pa = "_commandCell_1783z_135", Fa = "_commandButton_1783z_141", Ka = "_data_1783z_156", qa = "_table_1783z_163", Ha = "_header_1783z_169", Wa = "_center_1783z_181", Ua = "_right_1783z_185", Va = "_sortButton_1783z_189", Xa = "_sortIndicator_1783z_207", Ga = "_sortIndex_1783z_211", Ya = "_cell_1783z_222", Za = "_clickable_1783z_236", Ja = "_frozen_1783z_244", Qa = "_selected_1783z_250", el = "_resizeHandle_1783z_254", tl = "_filterCell_1783z_272", nl = "_filterSelect_1783z_280", rl = "_filterInput_1783z_290", sl = "_empty_1783z_301", ol = "_loading_1783z_307", al = "_visuallyHidden_1783z_317", ge = {
  grid: $a,
  toolbar: ka,
  picker: Na,
  pickerButton: Sa,
  pickerPanel: Da,
  pickerItem: Ca,
  groupPanel: za,
  groupPanelActive: Ma,
  groupPanelText: Oa,
  groupChip: Ia,
  groupRemove: Ta,
  groupRow: Ea,
  groupCell: ja,
  groupToggle: Aa,
  editRow: La,
  editCell: Ra,
  editInput: Ba,
  commandCell: Pa,
  commandButton: Fa,
  data: Ka,
  table: qa,
  header: Ha,
  center: Wa,
  right: Ua,
  sortButton: Va,
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
  empty: sl,
  loading: ol,
  visuallyHidden: al
}, ll = {
  Ascending: "ascending",
  Descending: "descending"
};
function dr(e, n) {
  return e.filterable ?? n;
}
function cl(e, n) {
  return e.sortable ?? n;
}
function il(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function kb({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: s = !1,
  allowMultiColumnSorting: o = !1,
  showSortIndex: l = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: g = !1,
  pageSize: v = 10,
  pageSizeOptions: f,
  pageNumbersCount: D = 5,
  pagerPosition: x = "Bottom",
  showPagingSummary: C = !0,
  showPageSizeSelector: z = !0,
  selectionMode: h = "None",
  selectedKeys: d,
  onSelectionChange: _,
  showColumnPicker: m = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: b = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: c = !1,
  groupPanelText: y = "Drag a column header here to group",
  groupExpanded: S = !0,
  editMode: O = "None",
  allowRowCreate: j = !1,
  onRowUpdate: I,
  onRowCreate: p,
  onRowDelete: M,
  isLoading: E = !1,
  empty: T = "No records found",
  ariaLabel: A,
  className: X,
  onRowClick: H
}) {
  const [re, Z] = Y([]), [J, Q] = Y(/* @__PURE__ */ new Map()), [G, K] = Y(1), [L, se] = Y(v), [ie, ee] = Y(
    () => e.map((P, F) => In(P, F))
  ), [ue, me] = Y(
    () => new Set(e.map((P, F) => P.visible !== !1 ? In(P, F) : "").filter(Boolean))
  ), [xe, Re] = Y({}), [Ie, Ve] = Y(!1), [be, Xe] = Y(null), [Ze, Pe] = Y(null), [Ye, Fe] = Y(null), [Je, V] = Y({}), k = ce(null), B = ce(null), U = $e(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((F, _e) => P.set(In(F, _e), F)), P;
  }, [e]), oe = $e(
    () => ie.filter((P) => ue.has(P)).map((P) => ({ key: P, column: U.get(P) })).filter((P) => P.column != null),
    [ie, ue, U]
  ), te = $e(
    () => ma(oe, xe),
    [oe, xe]
  ), pe = O !== "None" || M != null || j, ke = $e(
    () => xa(n, { sorts: re, filters: J, pageNumber: G, pageSize: L }, {
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
  ), Te = $e(
    () => Ze ?? new Set(S ? ke.items.map((P) => String(pn(P, be ?? "") ?? "")) : []),
    [Ze, S, ke.items, be]
  ), rt = $e(
    () => ha(
      ke.items,
      be ?? void 0,
      Be,
      Te,
      pn,
      (P) => cr(P, Be?.format)
    ),
    [ke.items, be, Be, Te]
  ), xt = $e(
    () => be ? oe.filter((P) => P.column.property !== be) : oe,
    [oe, be]
  ), ne = (P) => {
    P !== "" && Z(ya(re, P, { multi: o }));
  }, De = (P, F) => {
    Q((_e) => {
      const ve = new Map(_e);
      return ve.set(P, F), ve;
    }), K(1);
  }, W = (P) => {
    se(P), K(1);
  }, ae = (P) => {
    if (h === "None") return;
    const F = r(P), _e = d ?? [];
    let ve;
    h === "Single" ? ve = _e.length === 1 && _e[0] === F ? [] : [F] : ve = _e.includes(F) ? _e.filter((st) => st !== F) : [..._e, F], _?.(ve);
  }, fe = (P) => {
    H?.(P);
  }, he = (P, F, _e) => {
    k.current = { key: P, startX: F, startWidth: _e };
  }, de = (P) => {
    const F = k.current;
    if (!F) return;
    const _e = P - F.startX, ve = Math.max(48, F.startWidth + _e);
    Re((st) => ({ ...st, [F.key]: `${ve}px` }));
  }, ye = () => {
    k.current = null;
  }, Ae = (P) => {
    B.current = P;
  }, Ke = (P) => {
    const F = B.current;
    B.current = null, !(!F || F === P) && ee((_e) => {
      const ve = [..._e], st = ve.indexOf(F), ht = ve.indexOf(P);
      return st < 0 || ht < 0 ? _e : (ve.splice(st, 1), ve.splice(ht, 0, F), ve);
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
      const _e = F ?? new Set(S ? ke.items.map((st) => String(pn(st, be ?? "") ?? "")) : []), ve = new Set(_e);
      return ve.has(P) ? ve.delete(P) : ve.add(P), ve;
    });
  }, Ee = (P) => {
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
  }, Tt = (P) => {
    if (Ye === "__new__") {
      const F = Object.fromEntries(
        e.filter((_e) => _e.property).map((_e) => [_e.property, Je[_e.property]])
      );
      p?.(F);
    } else if (P != null) {
      const F = { ...P, ...Je };
      I?.(P, F);
    }
    it();
  }, zn = g && (x === "Top" || x === "TopAndBottom"), ln = g && (x === "Bottom" || x === "TopAndBottom"), Rr = u && e.some((P) => dr(P, u)), Br = (P, F, _e) => P.render ? P.render(F, { index: 0 }) : cr(pn(F, P.property), P.format), Pr = (P) => {
    const F = [ge.cell];
    return P.align === "center" && F.push(ge.center), P.align === "right" && F.push(ge.right), P.frozen && F.push(ge.frozen), F.join(" ");
  };
  return /* @__PURE__ */ w("div", { className: [ge.grid, X].filter(Boolean).join(" "), children: [
    zn && /* @__PURE__ */ t(
      Yn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: f,
        pageNumbersCount: D,
        showSummary: C,
        showPageSizeSelector: z,
        ariaLabel: ln ? "Pagination (top)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: W
      }
    ),
    (c || j || m) && /* @__PURE__ */ w("div", { className: ge.toolbar, children: [
      c && /* @__PURE__ */ t(
        "div",
        {
          className: [ge.groupPanel, be ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: c ? (P) => P.preventDefault() : void 0,
          onDrop: c ? le : void 0,
          children: be ? /* @__PURE__ */ w("span", { className: ge.groupChip, children: [
            Be?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: ge.groupRemove, onClick: ze, "aria-label": `Remove group by ${Be?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: ge.groupPanelText, children: y })
        }
      ),
      j && /* @__PURE__ */ t("button", { type: "button", className: ge.pickerButton, onClick: et, children: "Add row" }),
      m && /* @__PURE__ */ w("div", { className: ge.picker, children: [
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
          return /* @__PURE__ */ w("label", { className: ge.pickerItem, children: [
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
    /* @__PURE__ */ w("div", { className: ge.data, children: [
      /* @__PURE__ */ w(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": ke.total + 1,
          "aria-label": A,
          "aria-busy": E || void 0,
          children: [
            /* @__PURE__ */ w("colgroup", { children: [
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
            /* @__PURE__ */ w("thead", { children: [
              /* @__PURE__ */ w("tr", { children: [
                xt.map(({ key: P, column: F }) => {
                  const _e = cl(F, s), ve = re.find((je) => je.property === F.property), st = ve ? re.indexOf(ve) + 1 : 0, ht = F.align ?? "left";
                  return /* @__PURE__ */ w(
                    "th",
                    {
                      "aria-sort": _e && ve ? ll[ve.sortOrder] : "none",
                      className: [
                        ge.header,
                        ht === "center" ? ge.center : "",
                        ht === "right" ? ge.right : "",
                        F.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: F.frozen ? { left: te[P] } : void 0,
                      scope: "col",
                      draggable: $ || c || void 0,
                      onDragStart: $ || c ? (je) => {
                        je.dataTransfer && (je.dataTransfer.effectAllowed = "move"), Ae(P);
                      } : void 0,
                      onDragOver: $ ? (je) => je.preventDefault() : void 0,
                      onDrop: $ ? () => Ke(P) : void 0,
                      children: [
                        _e ? /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => F.property != null && ne(F.property),
                            "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${F.title ?? F.property} descending` : `Sort ${F.title ?? F.property} ascending` : `Sort ${F.title ?? F.property} ascending`,
                            children: [
                              F.title ?? F.property,
                              ve && /* @__PURE__ */ t("span", { className: ge.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              st > 1 && l && /* @__PURE__ */ t("span", { className: ge.sortIndex, children: st })
                            ]
                          }
                        ) : F.title ?? F.property,
                        b && /* @__PURE__ */ t(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${F.title ?? F.property}`,
                            onMouseDown: (je) => {
                              je.preventDefault(), je.stopPropagation();
                              const cn = xe[P] ?? F.width, Mn = cn ? parseFloat(cn) : 96;
                              he(P, je.clientX, Number.isFinite(Mn) ? Mn : 96);
                            },
                            onMouseMove: (je) => {
                              k.current?.key === P && de(je.clientX);
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
                if (!dr(F, u)) return /* @__PURE__ */ t("td", { className: ge.filterCell }, P);
                const _e = J.get(F.property ?? "");
                return /* @__PURE__ */ w("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ w("label", { className: ge.visuallyHidden, htmlFor: `df-${F.property}`, children: [
                    "Filter ",
                    F.title ?? F.property
                  ] }),
                  /* @__PURE__ */ t(
                    "select",
                    {
                      id: `df-${F.property}`,
                      className: ge.filterSelect,
                      value: _e?.operator ?? wa(F.type ?? "string"),
                      onChange: (ve) => De(F.property ?? "", { ..._e, operator: ve.target.value }),
                      "aria-label": `${F.title ?? F.property} operator`,
                      children: Tr.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ t("option", { value: ve, children: ve }, ve))
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
            /* @__PURE__ */ w("tbody", { children: [
              Ye === "__new__" && /* @__PURE__ */ w("tr", { className: ge.editRow, children: [
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
                pe && /* @__PURE__ */ w("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Tt(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: it, children: "Cancel" })
                ] })
              ] }),
              rt.map((P) => {
                if (P.type === "group" && P.group) {
                  const ht = Te.has(P.group.key);
                  return /* @__PURE__ */ t("tr", { className: ge.groupRow, children: /* @__PURE__ */ t("td", { colSpan: xt.length + (pe ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ w(
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
                const F = P.row, _e = r(F), ve = (d ?? []).includes(_e), st = Ye != null && Ye === String(_e);
                return /* @__PURE__ */ w(
                  "tr",
                  {
                    className: [
                      H || h !== "None" ? ge.clickable : "",
                      ve ? ge.selected : "",
                      st ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": h !== "None" ? ve : void 0,
                    onClick: H || h !== "None" ? (ht) => {
                      il(ht.target) || (fe(F), ae(F));
                    } : void 0,
                    children: [
                      xt.map(({ key: ht, column: je }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Pr(je),
                          style: je.frozen ? { left: te[ht] } : void 0,
                          children: st && je.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: ge.editInput,
                              type: je.type === "number" ? "number" : je.type === "boolean" ? "checkbox" : "text",
                              checked: je.type === "boolean" ? !!Je[je.property] : void 0,
                              value: je.type === "boolean" ? void 0 : String(Je[je.property] ?? ""),
                              onChange: (cn) => V((Mn) => ({
                                ...Mn,
                                [je.property]: je.type === "boolean" ? cn.target.checked : cn.target.value
                              })),
                              "aria-label": `${je.title ?? je.property} (edit)`
                            }
                          ) : Br(je, F)
                        },
                        ht
                      )),
                      pe && /* @__PURE__ */ t("td", { className: ge.commandCell, children: st ? /* @__PURE__ */ w(Me, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Tt(F), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: it, children: "Cancel" })
                      ] }) : /* @__PURE__ */ w(Me, { children: [
                        O !== "None" && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Ee(F), children: "Edit" }),
                        M && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => M(F), children: "Delete" })
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
      ke.items.length === 0 && !E && /* @__PURE__ */ t("div", { className: ge.empty, children: T }),
      E && /* @__PURE__ */ t("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    ln && /* @__PURE__ */ t(
      Yn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: f,
        pageNumbersCount: D,
        showSummary: C,
        showPageSizeSelector: z,
        ariaLabel: zn ? "Pagination (bottom)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: W
      }
    )
  ] });
}
const dl = "_wrap_1pzu9_1", ul = "_grid_1pzu9_7", fl = "_stacked_1pzu9_13", _l = "_item_1pzu9_19", pl = "_empty_1pzu9_25", hn = {
  wrap: dl,
  grid: ul,
  stacked: fl,
  item: _l,
  empty: pl
};
function Nb({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: s = !1,
  itemTemplate: o,
  emptyMessage: l = "No records found",
  emptyTemplate: u,
  loadingTemplate: a,
  isLoading: i = !1,
  showPageSizeSelector: g = !0,
  className: v,
  ariaLabel: f = "Data list"
}) {
  const [D, x] = Y(1), [C, z] = Y(n), h = e.length, d = Math.max(1, Math.ceil(h / C)), _ = Math.min(Math.max(1, D), d), m = $e(() => {
    const b = (_ - 1) * C;
    return e.slice(b, b + C);
  }, [e, _, C]), N = s ? hn.grid : hn.stacked;
  return /* @__PURE__ */ w("div", { className: [hn.wrap, v].filter(Boolean).join(" "), "aria-label": f, children: [
    i && a != null ? a : h === 0 ? u ?? /* @__PURE__ */ t("div", { className: hn.empty, children: l }) : /* @__PURE__ */ t("div", { className: N, children: m.map((b, $) => /* @__PURE__ */ t("div", { className: hn.item, children: o ? o(b, $) : String(b) }, $)) }),
    /* @__PURE__ */ t(
      Yn,
      {
        pageNumber: _,
        pageSize: C,
        count: h,
        pageSizeOptions: r,
        showPageSizeSelector: g,
        onPageChange: x,
        onPageSizeChange: (b) => {
          z(b), x(1);
        }
      }
    )
  ] });
}
const hl = "_label_idsiv_1", ml = {
  label: hl
}, Sb = He(
  function({ className: n, children: r, ...s }, o) {
    return /* @__PURE__ */ t("label", { ref: o, className: [ml.label, n].filter(Boolean).join(" "), ...s, children: r });
  }
), gl = "_input_gelpf_1", yl = "_invalid_gelpf_31", bl = "_xs_gelpf_37", vl = "_sm_gelpf_43", xl = "_md_gelpf_49", wl = "_lg_gelpf_55", $l = "_xl_gelpf_61", Hn = {
  input: gl,
  invalid: yl,
  xs: bl,
  sm: vl,
  md: xl,
  lg: wl,
  xl: $l
}, Db = He(function({ size: n = "md", invalid: r = !1, className: s, ...o }, l) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: l,
      className: [Hn.input, Hn[n], r ? Hn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...o
    }
  );
}), kl = "_checkbox_s7nxo_1", Nl = {
  checkbox: kl
}, Cb = He(function({ className: n, ...r }, s) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [Nl.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Sl = {
  switch: "_switch_1nmgf_1"
}, Dl = He(function({ className: n, ...r }, s) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [Sl.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Cl = "_trigger_1prbw_1", zl = "_tooltip_1prbw_7", Ml = "_top_1prbw_34", Ol = "_right_1prbw_40", Il = "_bottom_1prbw_46", Tl = "_left_1prbw_52", El = "_arrow_1prbw_58", Tn = {
  trigger: Cl,
  tooltip: zl,
  "se-tooltip-in": "_se-tooltip-in_1prbw_1",
  top: Ml,
  right: Ol,
  bottom: Il,
  left: Tl,
  arrow: El
};
function zb({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: s = 300,
  className: o
}) {
  const l = Ue(), u = ce(null), [a, i] = Y(!1), g = () => {
    u.current = window.setTimeout(() => i(!0), s);
  }, v = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), i(!1);
  };
  Se(() => {
    if (!a) return;
    const D = (x) => {
      x.key === "Escape" && v();
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [a]);
  const f = Cn(n) ? zr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        a ? l : null
      ].filter((D) => typeof D == "string").join(" ") || void 0
    }
  ) : n;
  return /* @__PURE__ */ w(
    "span",
    {
      className: [Tn.trigger, o].filter(Boolean).join(" "),
      onMouseEnter: g,
      onMouseLeave: v,
      onFocus: g,
      onBlur: v,
      children: [
        f,
        a && /* @__PURE__ */ w(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [Tn.tooltip, Tn[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: Tn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const jl = "_dialog_kr2ur_1", Al = "_sm_kr2ur_30", Ll = "_md_kr2ur_34", Rl = "_lg_kr2ur_38", Bl = "_header_kr2ur_42", Pl = "_title_kr2ur_51", Fl = "_description_kr2ur_58", Kl = "_close_kr2ur_65", ql = "_body_kr2ur_84", Hl = "_footer_kr2ur_90", Ft = {
  dialog: jl,
  "se-dialog-in": "_se-dialog-in_kr2ur_1",
  sm: Al,
  md: Ll,
  lg: Rl,
  header: Bl,
  title: Pl,
  description: Fl,
  close: Kl,
  body: ql,
  footer: Hl
};
function Mb({
  open: e,
  onClose: n,
  title: r,
  description: s,
  children: o,
  footer: l,
  size: u = "md",
  className: a
}) {
  const i = ce(null), g = Ue(), v = Ue(), f = ce(n);
  f.current = n;
  const D = ce(!1), x = ce(!1), C = q(() => {
    D.current || (D.current = !0, f.current());
  }, []), z = q(() => {
    if (x.current) {
      x.current = !1;
      return;
    }
    f.current();
  }, []);
  return Se(() => {
    const h = i.current;
    if (h)
      if (e && !h.open) {
        h.showModal();
        const d = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const _ = (m) => {
          m.preventDefault(), C();
        };
        return h.addEventListener("cancel", _), () => {
          h.removeEventListener("cancel", _), document.body.style.overflow = d;
        };
      } else !e && h.open && (x.current = D.current, D.current = !1, h.close());
  }, [e, C]), /* @__PURE__ */ w(
    "dialog",
    {
      ref: i,
      className: [Ft.dialog, Ft[u], a].filter(Boolean).join(" "),
      onClose: z,
      onClick: (h) => {
        h.target === i.current && C();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? g : void 0,
      "aria-describedby": s ? v : void 0,
      children: [
        r && /* @__PURE__ */ w("header", { className: Ft.header, children: [
          /* @__PURE__ */ w("div", { children: [
            /* @__PURE__ */ t("h2", { id: g, className: Ft.title, children: r }),
            s && /* @__PURE__ */ t("p", { id: v, className: Ft.description, children: s })
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
        o && /* @__PURE__ */ t("div", { className: Ft.body, children: o }),
        l && /* @__PURE__ */ t("footer", { className: Ft.footer, children: l })
      ]
    }
  );
}
const Wl = "_viewport_1h8v8_1", Ul = "_topLeft_1h8v8_13", Vl = "_topRight_1h8v8_20", Xl = "_bottomLeft_1h8v8_25", Gl = "_toast_1h8v8_30", Yl = "_leaving_1h8v8_61", Zl = "_info_1h8v8_77", Jl = "_success_1h8v8_82", Ql = "_warning_1h8v8_87", ec = "_danger_1h8v8_92", tc = "_content_1h8v8_97", nc = "_title_1h8v8_102", rc = "_description_1h8v8_125", sc = "_dismiss_1h8v8_132", oc = "_actions_1h8v8_151", ac = "_action_1h8v8_151", lc = "_cancel_1h8v8_159", cc = "_progress_1h8v8_195", mt = {
  viewport: Wl,
  topLeft: Ul,
  topRight: Vl,
  bottomLeft: Xl,
  toast: Gl,
  "se-toast-in": "_se-toast-in_1h8v8_1",
  leaving: Yl,
  "se-toast-out": "_se-toast-out_1h8v8_1",
  info: Zl,
  success: Jl,
  warning: Ql,
  danger: ec,
  content: tc,
  title: nc,
  description: rc,
  dismiss: sc,
  actions: oc,
  action: ac,
  cancel: lc,
  progress: cc,
  "se-toast-progress": "_se-toast-progress_1h8v8_1"
}, Ar = Or(null);
function Ob() {
  const e = Mr(Ar);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const ic = 200, dc = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Ib({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: s = !0,
  className: o
}) {
  const [l, u] = Y([]), [a, i] = Y(!1), g = ce([]), v = ce(/* @__PURE__ */ new Map()), f = ce(!1), D = ce(0), x = (I) => {
    f.current = I, i(I);
  }, C = q((I) => {
    const p = v.current.get(I);
    p && (window.clearTimeout(p.timeoutId), p.remaining = Math.max(0, p.remaining - (Date.now() - p.startedAt)));
  }, []), z = q((I) => {
    const p = v.current.get(I);
    p && (window.clearTimeout(p.timeoutId), v.current.delete(I));
  }, []), h = q(
    (I) => {
      z(I), u((p) => {
        const M = p.filter((E) => E.id !== I);
        return g.current = M, M;
      });
    },
    [z]
  ), d = q(
    (I) => {
      const p = g.current.find((M) => M.id === I);
      !p || p.leaving || (p.onAutoClose?.(), h(I));
    },
    [h]
  ), _ = q(
    (I) => {
      const p = v.current.get(I);
      !p || p.remaining <= 0 || (p.startedAt = Date.now(), p.timeoutId = window.setTimeout(() => d(I), p.remaining));
    },
    [d]
  ), m = q(() => {
    f.current || v.current.forEach((I, p) => C(p)), x(!0);
  }, [C]), N = q(() => {
    v.current.forEach((I, p) => _(p)), x(!1);
  }, [_]);
  Se(() => {
    if (!s) return;
    const I = () => {
      document.hidden ? m() : N();
    };
    return document.addEventListener("visibilitychange", I), () => document.removeEventListener("visibilitychange", I);
  }, [s, m, N]);
  const b = q(
    (I) => {
      const p = g.current.find((M) => M.id === I);
      !p || p.leaving || (p.onDismiss?.(), u((M) => {
        const E = M.map((T) => T.id === I ? { ...T, leaving: !0 } : T);
        return g.current = E, E;
      }), window.setTimeout(() => h(I), ic));
    },
    [h]
  ), $ = q(
    (I) => {
      if (I.durationMs <= 0) return;
      const p = {
        remaining: I.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      v.current.set(I.id, p), f.current || _(I.id);
    },
    [_]
  ), c = q(
    (I) => {
      const p = g.current.find((E) => E.id === I.id), M = {
        id: I.id ?? ++D.current,
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
      u((E) => {
        const T = p ? E.map((A) => A.id === M.id ? { ...M, leaving: !1 } : A) : [...E, M];
        return g.current = T, T;
      }), p && z(M.id), $(M);
    },
    [n, r, $, z]
  ), y = $e(() => ({ toast: c }), [c]), S = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((I) => I.position)])),
    [r, l]
  ), O = s ? m : void 0, j = s ? N : void 0;
  return /* @__PURE__ */ w(Ar.Provider, { value: y, children: [
    e,
    S.map((I) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          mt.viewport,
          mt[dc[I]],
          o
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: O,
        onMouseLeave: j,
        children: l.filter((p) => p.position === I).map((p) => /* @__PURE__ */ w(
          "div",
          {
            role: p.severity === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": p.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[p.severity],
              p.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: p.closeOnClick ? () => b(p.id) : void 0,
            children: [
              /* @__PURE__ */ w("div", { className: mt.content, children: [
                /* @__PURE__ */ t("div", { className: mt.title, children: p.title }),
                p.description && /* @__PURE__ */ t("div", { className: mt.description, children: p.description }),
                (p.action || p.cancel) && /* @__PURE__ */ w("div", { className: mt.actions, children: [
                  p.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        p.action?.onClick?.(), b(p.id);
                      },
                      children: p.action.label
                    }
                  ),
                  p.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        p.cancel?.onClick?.(), b(p.id);
                      },
                      children: p.cancel.label
                    }
                  )
                ] })
              ] }),
              p.dismissible && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => b(p.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              p.showProgress && p.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${p.durationMs}ms` }
                }
              )
            ]
          },
          p.id
        ))
      },
      I
    ))
  ] });
}
const uc = "_alert_1tkd3_1", fc = "_xs_1tkd3_22", _c = "_sm_1tkd3_32", pc = "_lg_1tkd3_42", hc = "_xl_1tkd3_52", mc = "_primary_1tkd3_63", gc = "_secondary_1tkd3_68", yc = "_light_1tkd3_73", bc = "_base_1tkd3_78", vc = "_dark_1tkd3_83", xc = "_info_1tkd3_88", wc = "_success_1tkd3_93", $c = "_warning_1tkd3_98", kc = "_danger_1tkd3_103", Nc = "_flat_1tkd3_110", Sc = "_outlined_1tkd3_117", Dc = "_filled_1tkd3_125", Cc = "_text_1tkd3_132", zc = "_icon_1tkd3_163", Mc = "_content_1tkd3_169", Oc = "_title_1tkd3_174", Ic = "_body_1tkd3_180", Tc = "_dismiss_1tkd3_186", Ct = {
  alert: uc,
  xs: fc,
  sm: _c,
  lg: pc,
  xl: hc,
  primary: mc,
  secondary: gc,
  light: yc,
  base: bc,
  dark: vc,
  info: xc,
  success: wc,
  warning: $c,
  danger: kc,
  flat: Nc,
  outlined: Sc,
  filled: Dc,
  text: Cc,
  icon: zc,
  content: Mc,
  title: Oc,
  body: Ic,
  dismiss: Tc,
  "shade-lighter": "_shade-lighter_1tkd3_222",
  "shade-light": "_shade-light_1tkd3_222",
  "shade-dark": "_shade-dark_1tkd3_228",
  "shade-darker": "_shade-darker_1tkd3_231"
}, Ec = {
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
function Tb({
  severity: e = "base",
  variant: n = "filled",
  shade: r,
  size: s = "md",
  title: o,
  icon: l,
  showIcon: u = !0,
  children: a,
  dismissible: i = !0,
  onDismiss: g,
  className: v,
  ...f
}) {
  const [D, x] = Y(!1);
  if (D)
    return null;
  const C = () => {
    x(!0), g?.();
  }, z = e, h = nr(n, "filled"), d = r && r !== "default" ? `shade-${r}` : null, _ = l ?? (u ? /* @__PURE__ */ t(Ge, { name: Ec[e] }) : null);
  return /* @__PURE__ */ w(
    "div",
    {
      role: "alert",
      ...f,
      className: [Ct.alert, Ct[z], Ct[h], d ? Ct[d] : null, Ct[s], v].filter(Boolean).join(" "),
      children: [
        _ != null && /* @__PURE__ */ t("span", { className: Ct.icon, "aria-hidden": "true", children: _ }),
        /* @__PURE__ */ w("div", { className: Ct.content, children: [
          o && /* @__PURE__ */ t("div", { className: Ct.title, children: o }),
          a && /* @__PURE__ */ t("div", { className: Ct.body, children: a })
        ] }),
        i && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ct.dismiss,
            onClick: C,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const jc = "_skeleton_lvzyc_1", Ac = "_text_lvzyc_35", Lc = "_circle_lvzyc_40", Rc = "_rect_lvzyc_44", ur = {
  skeleton: jc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_lvzyc_1",
  text: Ac,
  circle: Lc,
  rect: Rc
};
function Eb({
  variant: e = "text",
  width: n,
  height: r,
  className: s
}) {
  const o = {};
  return n !== void 0 && (o.width = typeof n == "number" ? `${n}px` : n), r !== void 0 && (o.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ t(
    "span",
    {
      "aria-hidden": "true",
      className: [ur.skeleton, ur[e], s].filter(Boolean).join(" "),
      style: o
    }
  );
}
const Bc = "_row_plfwb_1", Pc = "_gapXs_plfwb_7", Fc = "_gapSm_plfwb_11", Kc = "_gapMd_plfwb_15", qc = "_gapLg_plfwb_19", Hc = "_gapXl_plfwb_23", Wc = "_start_plfwb_27", Uc = "_center_plfwb_31", Vc = "_end_plfwb_35", Xc = "_stretch_plfwb_39", Gc = "_baseline_plfwb_43", Yc = "_noWrap_plfwb_99", Zc = "_wrapReverse_plfwb_103", Jc = "_gapRowXs_plfwb_107", Qc = "_gapRowSm_plfwb_111", ei = "_gapRowMd_plfwb_115", ti = "_gapRowLg_plfwb_119", ni = "_gapRowXl_plfwb_123", Jt = {
  row: Bc,
  gapXs: Pc,
  gapSm: Fc,
  gapMd: Kc,
  gapLg: qc,
  gapXl: Hc,
  start: Wc,
  center: Uc,
  end: Vc,
  stretch: Xc,
  baseline: Gc,
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
  noWrap: Yc,
  wrapReverse: Zc,
  gapRowXs: Jc,
  gapRowSm: Qc,
  gapRowMd: ei,
  gapRowLg: ti,
  gapRowXl: ni
}, ri = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, si = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function oi(e) {
  return typeof e != "string" ? null : ri[e] ?? null;
}
function ai(e) {
  return typeof e != "string" ? null : si[e] ?? null;
}
function fr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function jb({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: l,
  style: u,
  ...a
}) {
  const i = oi(e), g = ai(n), v = {
    ...e != null && !i ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !g ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ...u
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Jt.row,
        Jt[r],
        Jt[`justify-${s}`],
        fr(o) != null ? Jt[fr(o)] : null,
        i ? Jt[i] : null,
        g ? Jt[g] : null,
        l
      ].filter(Boolean).join(" "),
      style: v,
      ...a
    }
  );
}
const li = "_column_2ch3a_1", ci = "_Size1_2ch3a_6", ii = "_Size2_2ch3a_7", di = "_Size3_2ch3a_8", ui = "_Size4_2ch3a_9", fi = "_Size5_2ch3a_10", _i = "_Size6_2ch3a_11", pi = "_Size7_2ch3a_12", hi = "_Size8_2ch3a_13", mi = "_Size9_2ch3a_14", gi = "_Size10_2ch3a_15", yi = "_Size11_2ch3a_16", bi = "_Size12_2ch3a_17", vi = "_Offset1_2ch3a_18", xi = "_Offset2_2ch3a_19", wi = "_Offset3_2ch3a_20", $i = "_Offset4_2ch3a_21", ki = "_Offset5_2ch3a_22", Ni = "_Offset6_2ch3a_23", Si = "_Offset7_2ch3a_24", Di = "_Offset8_2ch3a_25", Ci = "_Offset9_2ch3a_26", zi = "_Offset10_2ch3a_27", Mi = "_Offset11_2ch3a_28", Oi = "_smSize1_2ch3a_31", Ii = "_smSize2_2ch3a_32", Ti = "_smSize3_2ch3a_33", Ei = "_smSize4_2ch3a_34", ji = "_smSize5_2ch3a_35", Ai = "_smSize6_2ch3a_36", Li = "_smSize7_2ch3a_37", Ri = "_smSize8_2ch3a_38", Bi = "_smSize9_2ch3a_39", Pi = "_smSize10_2ch3a_40", Fi = "_smSize11_2ch3a_41", Ki = "_smSize12_2ch3a_42", qi = "_smOffset1_2ch3a_43", Hi = "_smOffset2_2ch3a_44", Wi = "_smOffset3_2ch3a_45", Ui = "_smOffset4_2ch3a_46", Vi = "_smOffset5_2ch3a_47", Xi = "_smOffset6_2ch3a_48", Gi = "_smOffset7_2ch3a_49", Yi = "_smOffset8_2ch3a_50", Zi = "_smOffset9_2ch3a_51", Ji = "_smOffset10_2ch3a_52", Qi = "_smOffset11_2ch3a_53", ed = "_mdSize1_2ch3a_57", td = "_mdSize2_2ch3a_58", nd = "_mdSize3_2ch3a_59", rd = "_mdSize4_2ch3a_60", sd = "_mdSize5_2ch3a_61", od = "_mdSize6_2ch3a_62", ad = "_mdSize7_2ch3a_63", ld = "_mdSize8_2ch3a_64", cd = "_mdSize9_2ch3a_65", id = "_mdSize10_2ch3a_66", dd = "_mdSize11_2ch3a_67", ud = "_mdSize12_2ch3a_68", fd = "_mdOffset1_2ch3a_69", _d = "_mdOffset2_2ch3a_70", pd = "_mdOffset3_2ch3a_71", hd = "_mdOffset4_2ch3a_72", md = "_mdOffset5_2ch3a_73", gd = "_mdOffset6_2ch3a_74", yd = "_mdOffset7_2ch3a_75", bd = "_mdOffset8_2ch3a_76", vd = "_mdOffset9_2ch3a_77", xd = "_mdOffset10_2ch3a_78", wd = "_mdOffset11_2ch3a_79", $d = "_lgSize1_2ch3a_83", kd = "_lgSize2_2ch3a_84", Nd = "_lgSize3_2ch3a_85", Sd = "_lgSize4_2ch3a_86", Dd = "_lgSize5_2ch3a_87", Cd = "_lgSize6_2ch3a_88", zd = "_lgSize7_2ch3a_89", Md = "_lgSize8_2ch3a_90", Od = "_lgSize9_2ch3a_91", Id = "_lgSize10_2ch3a_92", Td = "_lgSize11_2ch3a_93", Ed = "_lgSize12_2ch3a_94", jd = "_lgOffset1_2ch3a_95", Ad = "_lgOffset2_2ch3a_96", Ld = "_lgOffset3_2ch3a_97", Rd = "_lgOffset4_2ch3a_98", Bd = "_lgOffset5_2ch3a_99", Pd = "_lgOffset6_2ch3a_100", Fd = "_lgOffset7_2ch3a_101", Kd = "_lgOffset8_2ch3a_102", qd = "_lgOffset9_2ch3a_103", Hd = "_lgOffset10_2ch3a_104", Wd = "_lgOffset11_2ch3a_105", Ud = "_xlSize1_2ch3a_109", Vd = "_xlSize2_2ch3a_110", Xd = "_xlSize3_2ch3a_111", Gd = "_xlSize4_2ch3a_112", Yd = "_xlSize5_2ch3a_113", Zd = "_xlSize6_2ch3a_114", Jd = "_xlSize7_2ch3a_115", Qd = "_xlSize8_2ch3a_116", eu = "_xlSize9_2ch3a_117", tu = "_xlSize10_2ch3a_118", nu = "_xlSize11_2ch3a_119", ru = "_xlSize12_2ch3a_120", su = "_xlOffset1_2ch3a_121", ou = "_xlOffset2_2ch3a_122", au = "_xlOffset3_2ch3a_123", lu = "_xlOffset4_2ch3a_124", cu = "_xlOffset5_2ch3a_125", iu = "_xlOffset6_2ch3a_126", du = "_xlOffset7_2ch3a_127", uu = "_xlOffset8_2ch3a_128", fu = "_xlOffset9_2ch3a_129", _u = "_xlOffset10_2ch3a_130", pu = "_xlOffset11_2ch3a_131", hu = "_xxlSize1_2ch3a_136", mu = "_xxlSize2_2ch3a_137", gu = "_xxlSize3_2ch3a_138", yu = "_xxlSize4_2ch3a_139", bu = "_xxlSize5_2ch3a_140", vu = "_xxlSize6_2ch3a_141", xu = "_xxlSize7_2ch3a_142", wu = "_xxlSize8_2ch3a_143", $u = "_xxlSize9_2ch3a_144", ku = "_xxlSize10_2ch3a_145", Nu = "_xxlSize11_2ch3a_146", Su = "_xxlSize12_2ch3a_147", Du = "_xxlOffset1_2ch3a_148", Cu = "_xxlOffset2_2ch3a_149", zu = "_xxlOffset3_2ch3a_150", Mu = "_xxlOffset4_2ch3a_151", Ou = "_xxlOffset5_2ch3a_152", Iu = "_xxlOffset6_2ch3a_153", Tu = "_xxlOffset7_2ch3a_154", Eu = "_xxlOffset8_2ch3a_155", ju = "_xxlOffset9_2ch3a_156", Au = "_xxlOffset10_2ch3a_157", Lu = "_xxlOffset11_2ch3a_158", Ru = "_xxlOrderFirst_2ch3a_159", Bu = "_xxlOrderLast_2ch3a_160", Pu = "_orderFirst_2ch3a_163", Fu = "_orderLast_2ch3a_164", Ku = "_smOrderFirst_2ch3a_167", qu = "_smOrderLast_2ch3a_168", Hu = "_mdOrderFirst_2ch3a_172", Wu = "_mdOrderLast_2ch3a_173", Uu = "_lgOrderFirst_2ch3a_177", Vu = "_lgOrderLast_2ch3a_178", Xu = "_xlOrderFirst_2ch3a_182", Gu = "_xlOrderLast_2ch3a_183", mn = {
  column: li,
  Size1: ci,
  Size2: ii,
  Size3: di,
  Size4: ui,
  Size5: fi,
  Size6: _i,
  Size7: pi,
  Size8: hi,
  Size9: mi,
  Size10: gi,
  Size11: yi,
  Size12: bi,
  Offset1: vi,
  Offset2: xi,
  Offset3: wi,
  Offset4: $i,
  Offset5: ki,
  Offset6: Ni,
  Offset7: Si,
  Offset8: Di,
  Offset9: Ci,
  Offset10: zi,
  Offset11: Mi,
  smSize1: Oi,
  smSize2: Ii,
  smSize3: Ti,
  smSize4: Ei,
  smSize5: ji,
  smSize6: Ai,
  smSize7: Li,
  smSize8: Ri,
  smSize9: Bi,
  smSize10: Pi,
  smSize11: Fi,
  smSize12: Ki,
  smOffset1: qi,
  smOffset2: Hi,
  smOffset3: Wi,
  smOffset4: Ui,
  smOffset5: Vi,
  smOffset6: Xi,
  smOffset7: Gi,
  smOffset8: Yi,
  smOffset9: Zi,
  smOffset10: Ji,
  smOffset11: Qi,
  mdSize1: ed,
  mdSize2: td,
  mdSize3: nd,
  mdSize4: rd,
  mdSize5: sd,
  mdSize6: od,
  mdSize7: ad,
  mdSize8: ld,
  mdSize9: cd,
  mdSize10: id,
  mdSize11: dd,
  mdSize12: ud,
  mdOffset1: fd,
  mdOffset2: _d,
  mdOffset3: pd,
  mdOffset4: hd,
  mdOffset5: md,
  mdOffset6: gd,
  mdOffset7: yd,
  mdOffset8: bd,
  mdOffset9: vd,
  mdOffset10: xd,
  mdOffset11: wd,
  lgSize1: $d,
  lgSize2: kd,
  lgSize3: Nd,
  lgSize4: Sd,
  lgSize5: Dd,
  lgSize6: Cd,
  lgSize7: zd,
  lgSize8: Md,
  lgSize9: Od,
  lgSize10: Id,
  lgSize11: Td,
  lgSize12: Ed,
  lgOffset1: jd,
  lgOffset2: Ad,
  lgOffset3: Ld,
  lgOffset4: Rd,
  lgOffset5: Bd,
  lgOffset6: Pd,
  lgOffset7: Fd,
  lgOffset8: Kd,
  lgOffset9: qd,
  lgOffset10: Hd,
  lgOffset11: Wd,
  xlSize1: Ud,
  xlSize2: Vd,
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
  xlOffset1: su,
  xlOffset2: ou,
  xlOffset3: au,
  xlOffset4: lu,
  xlOffset5: cu,
  xlOffset6: iu,
  xlOffset7: du,
  xlOffset8: uu,
  xlOffset9: fu,
  xlOffset10: _u,
  xlOffset11: pu,
  xxlSize1: hu,
  xxlSize2: mu,
  xxlSize3: gu,
  xxlSize4: yu,
  xxlSize5: bu,
  xxlSize6: vu,
  xxlSize7: xu,
  xxlSize8: wu,
  xxlSize9: $u,
  xxlSize10: ku,
  xxlSize11: Nu,
  xxlSize12: Su,
  xxlOffset1: Du,
  xxlOffset2: Cu,
  xxlOffset3: zu,
  xxlOffset4: Mu,
  xxlOffset5: Ou,
  xxlOffset6: Iu,
  xxlOffset7: Tu,
  xxlOffset8: Eu,
  xxlOffset9: ju,
  xxlOffset10: Au,
  xxlOffset11: Lu,
  xxlOrderFirst: Ru,
  xxlOrderLast: Bu,
  orderFirst: Pu,
  orderLast: Fu,
  smOrderFirst: Ku,
  smOrderLast: qu,
  mdOrderFirst: Hu,
  mdOrderLast: Wu,
  lgOrderFirst: Uu,
  lgOrderLast: Vu,
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
function Ab({ className: e, style: n, ...r }) {
  const s = [mn.column], o = { ...n };
  for (const [y, S, O, j] of Yu) {
    const I = r[S], p = r[O], M = r[j];
    if (I != null && s.push(mn[`${y}Size${I}`]), p != null && p > 0 && s.push(mn[`${y}Offset${p}`]), M === "first" || M === "last") {
      const E = `${y}${Zu[M]}`;
      mn[E] && s.push(mn[E]);
    } else M != null && Object.assign(o, Ju(M));
  }
  const {
    size: l,
    offset: u,
    sizeSm: a,
    offsetSm: i,
    sizeMd: g,
    offsetMd: v,
    sizeLg: f,
    offsetLg: D,
    sizeXl: x,
    offsetXl: C,
    sizeXxl: z,
    offsetXxl: h,
    order: d,
    orderSm: _,
    orderMd: m,
    orderLg: N,
    orderXl: b,
    orderXxl: $,
    ...c
  } = r;
  return /* @__PURE__ */ t("div", { className: [...s, e].filter(Boolean).join(" "), style: o, ...c });
}
const Qu = "_stack_1yc1g_1", ef = "_gapXs_1yc1g_29", tf = "_gapSm_1yc1g_33", nf = "_gapMd_1yc1g_37", rf = "_gapLg_1yc1g_41", sf = "_gapXl_1yc1g_45", Qt = {
  stack: Qu,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: ef,
  gapSm: tf,
  gapMd: nf,
  gapLg: rf,
  gapXl: sf,
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
}, of = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function af(e) {
  return typeof e != "string" ? null : of[e] ?? null;
}
function _r(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Lb({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: s = "sm",
  align: o,
  justify: l,
  className: u,
  style: a,
  ...i
}) {
  const g = af(s), v = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", f = {
    ...s != null && !g ? { gap: typeof s == "number" ? `${s}px` : s } : {},
    ...a
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Qt.stack,
        Qt[`dir-${v}`],
        _r(r) !== "wrap" ? Qt[`wrap-${_r(r)}`] : null,
        o != null ? Qt[`align-${o}`] : null,
        l != null ? Qt[`justify-${l}`] : null,
        g ? Qt[g] : null,
        u
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const lf = "_layout_1pcye_1", cf = "_row_1pcye_7", pr = {
  layout: lf,
  row: cf
}, df = "_footer_jia9j_1", uf = {
  footer: df
};
function ff({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [uf.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const _f = "_header_1n6yq_1", pf = {
  header: _f
};
function hf({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [pf.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const mf = "_sidebar_1i0sn_1", gf = "_left_1i0sn_9", yf = "_right_1i0sn_13", bf = "_collapsed_1i0sn_17", vf = "_responsive_1i0sn_25", xf = "_overlay_1i0sn_33", wf = "_mask_1i0sn_53", Ut = {
  sidebar: mf,
  left: gf,
  right: yf,
  collapsed: bf,
  responsive: vf,
  overlay: xf,
  mask: wf
};
function $f({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: s = !1,
  onClose: o,
  className: l,
  children: u,
  ...a
}) {
  return Se(() => {
    if (!s || !n || o == null) return;
    const i = (g) => {
      g.key === "Escape" && o();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [s, n, o]), /* @__PURE__ */ w(Me, { children: [
    s && n ? /* @__PURE__ */ t("div", { className: `${Ut.mask} se-layout-mask`, "aria-hidden": "true", onClick: o }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          Ut.sidebar,
          e === "right" ? Ut.right : Ut.left,
          n ? null : Ut.collapsed,
          r ? Ut.responsive : null,
          s ? [Ut.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: u
      }
    )
  ] });
}
function Rb({ className: e, children: n, ...r }) {
  const s = [], o = [], l = [], u = [], a = [];
  return Fr.forEach(n, (i) => {
    if (!Cn(i)) {
      l.push(i);
      return;
    }
    i.type === hf ? s.push(i) : i.type === ff ? o.push(i) : i.type === $f ? (i.props.position === "right" ? a : u).push(i) : l.push(i);
  }), /* @__PURE__ */ w("div", { className: [pr.layout, e].filter(Boolean).join(" "), ...r, children: [
    s,
    /* @__PURE__ */ w("div", { className: pr.row, children: [
      u,
      l,
      a
    ] }),
    o
  ] });
}
const kf = "_body_10zdy_1", Nf = {
  body: kf
};
function Bb({ as: e = "main", className: n, children: r, ...s }) {
  return /* @__PURE__ */ t(e, { className: [Nf.body, n].filter(Boolean).join(" "), ...s, children: r });
}
const Sf = "_track_hx8uy_1", Df = "_bar_hx8uy_31", Cf = "_primary_hx8uy_39", zf = "_success_hx8uy_43", Mf = "_warning_hx8uy_47", Of = "_danger_hx8uy_51", If = "_indeterminate_hx8uy_71", Tf = "_circular_hx8uy_85", Ef = "_fill_hx8uy_125", gt = {
  track: Sf,
  "linear-xs": "_linear-xs_hx8uy_11",
  "linear-sm": "_linear-sm_hx8uy_15",
  "linear-md": "_linear-md_hx8uy_19",
  "linear-lg": "_linear-lg_hx8uy_23",
  "linear-xl": "_linear-xl_hx8uy_27",
  bar: Df,
  primary: Cf,
  success: zf,
  warning: Mf,
  danger: Of,
  "shade-lighter": "_shade-lighter_hx8uy_55",
  "shade-light": "_shade-light_hx8uy_55",
  "shade-dark": "_shade-dark_hx8uy_63",
  "shade-darker": "_shade-darker_hx8uy_67",
  indeterminate: If,
  "se-progress-slide": "_se-progress-slide_hx8uy_1",
  circular: Tf,
  "circular-xs": "_circular-xs_hx8uy_91",
  "circular-sm": "_circular-sm_hx8uy_96",
  "circular-md": "_circular-md_hx8uy_101",
  "circular-lg": "_circular-lg_hx8uy_106",
  "circular-xl": "_circular-xl_hx8uy_111",
  fill: Ef,
  "se-progress-spin": "_se-progress-spin_hx8uy_1"
};
function Pb({
  value: e = 0,
  max: n = 100,
  severity: r = "primary",
  shade: s,
  indeterminate: o = !1,
  variant: l = "linear",
  size: u = "md",
  className: a,
  ...i
}) {
  const g = n > 0 ? Math.min(n, Math.max(0, e)) : 0, v = n > 0 ? g / n * 100 : 0;
  if (l === "circular") {
    const D = typeof u == "string", x = 2, C = 10.5, z = 2 * Math.PI * C, h = z * (o ? 0.75 : 1), d = o ? 0 : z * (1 - v / 100);
    return /* @__PURE__ */ w(
      "svg",
      {
        width: D ? void 0 : u,
        height: D ? void 0 : u,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(g),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        id: i.id,
        style: i.style,
        className: [
          gt.circular,
          gt[r],
          s && s !== "default" ? gt[`shade-${s}`] : null,
          D ? gt[`circular-${u}`] : null,
          o ? gt.indeterminate : null,
          a
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: gt.track, cx: 12, cy: 12, r: C, strokeWidth: x }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: gt.fill,
              cx: 12,
              cy: 12,
              r: C,
              strokeWidth: x,
              strokeDasharray: `${h} ${z}`,
              strokeDashoffset: d
            }
          )
        ]
      }
    );
  }
  const f = s && s !== "default" ? `shade-${s}` : null;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": o ? void 0 : Math.round(g),
      "aria-valuemin": 0,
      "aria-valuemax": n,
      className: [
        gt.track,
        gt[r],
        f ? gt[f] : null,
        typeof u == "string" ? gt[`linear-${u}`] : null,
        o ? gt.indeterminate : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: gt.bar,
          style: o ? void 0 : { width: `${v}%` }
        }
      )
    }
  );
}
const jf = "_wrapper_fv8kg_1", Af = {
  wrapper: jf
};
function Fb({
  defaultTheme: e = "light",
  onChange: n,
  label: r = "Dark mode",
  className: s
}) {
  const [o, l] = Y(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  Se(() => {
    document.documentElement.dataset.theme = o ? "dark" : "light";
  }, []);
  const u = (a) => {
    const i = a.target.checked;
    l(i), document.documentElement.dataset.theme = i ? "dark" : "light", n?.(i ? "dark" : "light");
  };
  return /* @__PURE__ */ w("label", { className: [Af.wrapper, s].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ t(Dl, { checked: o, onChange: u })
  ] });
}
const Lf = "_avatar_1ow1c_1", Rf = "_xs_1ow1c_12", Bf = "_sm_1ow1c_18", Pf = "_md_1ow1c_24", Ff = "_lg_1ow1c_30", Kf = "_xl_1ow1c_36", qf = "_initials_1ow1c_42", Hf = "_image_1ow1c_57", Wf = "_status_1ow1c_64", Uf = "_online_1ow1c_84", Vf = "_offline_1ow1c_88", Xf = "_away_1ow1c_92", en = {
  avatar: Lf,
  xs: Rf,
  sm: Bf,
  md: Pf,
  lg: Ff,
  xl: Kf,
  initials: qf,
  image: Hf,
  status: Wf,
  online: Uf,
  offline: Vf,
  away: Xf
}, Pn = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function Gf(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function Yf(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return Pn[n % Pn.length] ?? Pn[0];
}
function Kb({
  name: e,
  src: n,
  alt: r,
  size: s = "md",
  status: o,
  className: l
}) {
  const u = $e(() => e ? Gf(e) : "?", [e]), a = $e(() => e ? Yf(e) : Pn[0], [e]), i = n ? /* @__PURE__ */ t("img", { className: en.image, src: n, alt: r ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: en.initials, style: { background: a }, children: u });
  return /* @__PURE__ */ w(
    "span",
    {
      className: [
        en.avatar,
        en[s],
        o ? en[o] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": r ?? e ?? "avatar",
      children: [
        i,
        o && /* @__PURE__ */ t("span", { className: en.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Zf = "_root_13xku_1", Jf = "_left_13xku_6", Qf = "_right_13xku_7", e_ = "_panel_13xku_12", t_ = "_bottom_13xku_20", n_ = "_tabList_13xku_24", r_ = "_underline_13xku_53", s_ = "_pills_13xku_72", o_ = "_tab_13xku_24", a_ = "_active_13xku_113", l_ = "_disabled_13xku_139", Et = {
  root: Zf,
  left: Jf,
  right: Qf,
  panel: e_,
  bottom: t_,
  tabList: n_,
  underline: r_,
  pills: s_,
  tab: o_,
  active: a_,
  disabled: l_
};
function qb({
  items: e,
  value: n,
  defaultValue: r,
  onChange: s,
  variant: o = "underline",
  position: l = "top",
  className: u
}) {
  const a = Ue(), i = ce(null), [g, v] = Y(r ?? e[0]?.key ?? ""), f = n ?? g, D = l === "left" || l === "right", x = (h) => {
    v(h), s?.(h);
  }, C = (h) => {
    const d = e.filter((N) => !N.disabled), _ = d.findIndex((N) => N.key === f);
    let m = -1;
    h.key === "ArrowRight" || D && h.key === "ArrowDown" ? m = (_ + 1) % d.length : h.key === "ArrowLeft" || D && h.key === "ArrowUp" ? m = (_ - 1 + d.length) % d.length : h.key === "Home" ? m = 0 : h.key === "End" && (m = d.length - 1), m >= 0 && (h.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(d[m]?.key ?? "")}"]`
    )?.focus(), x(d[m]?.key ?? ""));
  }, z = e.find((h) => h.key === f);
  return /* @__PURE__ */ w("div", { className: [Et.root, Et[l], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [Et.tabList, Et[o], Et[l]].filter(Boolean).join(" "),
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
              onClick: () => x(h.key),
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
const c_ = "_root_11jj0_1", i_ = "_item_11jj0_9", d_ = "_heading_11jj0_13", u_ = "_trigger_11jj0_17", f_ = "_disabled_11jj0_34", __ = "_title_11jj0_48", p_ = "_chevron_11jj0_52", h_ = "_open_11jj0_59", m_ = "_content_11jj0_63", jt = {
  root: c_,
  item: i_,
  heading: d_,
  trigger: u_,
  disabled: f_,
  title: __,
  chevron: p_,
  open: h_,
  content: m_
};
function Hb({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: s,
  onChange: o,
  className: l
}) {
  const u = Ue(), [a, i] = Y(s ?? []), g = r ?? a, v = (f) => {
    const D = g.includes(f) ? g.filter((x) => x !== f) : n ? [...g, f] : [f];
    i(D), o?.(D);
  };
  return /* @__PURE__ */ t("div", { className: [jt.root, l].filter(Boolean).join(" "), children: e.map((f) => {
    const D = g.includes(f.key), x = `${u}-panel-${f.key}`, C = `${u}-trigger-${f.key}`;
    return /* @__PURE__ */ w("div", { className: jt.item, children: [
      /* @__PURE__ */ t("h3", { className: jt.heading, children: /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          id: C,
          "aria-expanded": D,
          "aria-controls": x,
          disabled: f.disabled,
          className: [
            jt.trigger,
            f.disabled ? jt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => v(f.key),
          children: [
            /* @__PURE__ */ t("span", { className: jt.title, children: f.title }),
            /* @__PURE__ */ t("span", { className: [jt.chevron, D ? jt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": C,
          hidden: !D,
          className: jt.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const g_ = "_textarea_yfr3j_1", y_ = "_xs_yfr3j_25", b_ = "_sm_yfr3j_30", v_ = "_md_yfr3j_35", x_ = "_lg_yfr3j_40", w_ = "_xl_yfr3j_45", Wn = {
  textarea: g_,
  xs: y_,
  sm: b_,
  md: v_,
  lg: x_,
  xl: w_,
  "resize-none": "_resize-none_yfr3j_50",
  "resize-vertical": "_resize-vertical_yfr3j_54",
  "resize-horizontal": "_resize-horizontal_yfr3j_58",
  "resize-both": "_resize-both_yfr3j_62"
}, Wb = He(function({ size: n = "md", resize: r = "none", className: s, ...o }, l) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: l,
      className: [
        Wn.textarea,
        Wn[n],
        Wn[`resize-${r}`],
        s
      ].filter(Boolean).join(" "),
      ...o
    }
  );
}), $_ = "_typography_1vbya_1", k_ = "_caption_1vbya_45", N_ = "_overline_1vbya_51", hr = {
  typography: $_,
  "display-1": "_display-1_1vbya_5",
  "display-2": "_display-2_1vbya_10",
  "display-3": "_display-3_1vbya_15",
  "display-4": "_display-4_1vbya_20",
  "display-5": "_display-5_1vbya_25",
  "display-6": "_display-6_1vbya_30",
  "body-1": "_body-1_1vbya_35",
  "body-2": "_body-2_1vbya_40",
  caption: k_,
  overline: N_
}, S_ = {
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
}, Ub = He(function({ variant: n = "body-1", as: r, className: s, children: o, ...l }, u) {
  const a = r ?? S_[n];
  return /* @__PURE__ */ t(
    a,
    {
      ref: u,
      className: [hr.typography, hr[n], s].filter(Boolean).join(" "),
      ...l,
      children: o
    }
  );
}), D_ = "_root_1l16s_1", C_ = "_trigger_1l16s_9", z_ = "_invalid_1l16s_40", M_ = "_placeholder_1l16s_46", O_ = "_label_1l16s_53", I_ = "_chevron_1l16s_59", T_ = "_chevronOpen_1l16s_69", E_ = "_menu_1l16s_73", j_ = "_option_1l16s_88", A_ = "_disabled_1l16s_99", L_ = "_active_1l16s_103", R_ = "_selected_1l16s_104", B_ = "_header_1l16s_114", P_ = "_xs_1l16s_121", F_ = "_sm_1l16s_127", K_ = "_md_1l16s_133", q_ = "_lg_1l16s_139", H_ = "_xl_1l16s_145", at = {
  root: D_,
  trigger: C_,
  invalid: z_,
  placeholder: M_,
  label: O_,
  chevron: I_,
  chevronOpen: T_,
  menu: E_,
  option: j_,
  disabled: A_,
  active: L_,
  selected: R_,
  header: B_,
  xs: P_,
  sm: F_,
  md: K_,
  lg: q_,
  xl: H_
}, W_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Vb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  placeholder: o = "Select…",
  size: l = "md",
  invalid: u = !1,
  disabled: a = !1,
  className: i,
  ...g
}) {
  const v = Ue(), f = `${v}-listbox`, D = ce(null), x = ce(null), [C, z] = Y(r), [h, d] = Y(!1), _ = n ?? C, m = e.map((p, M) => p.label === "" || p.disabled ? -1 : M).filter((p) => p >= 0), N = e.findIndex((p) => p.value === _), [b, $] = Y(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), c = q(() => {
    if (a) return;
    const p = N >= 0 && m.includes(N) ? N : m[0];
    $(p ?? -1), d(!0);
  }, [a, N, m]), y = q(() => {
    d(!1), x.current?.focus();
  }, []);
  Se(() => {
    if (!h) return;
    const p = (M) => {
      D.current && !D.current.contains(M.target) && d(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [h]);
  const S = (p) => {
    z(p), s?.(p), d(!1), x.current?.focus();
  }, O = (p) => {
    if (m.length === 0) return;
    const M = m.includes(b) ? m.indexOf(b) : 0, E = m[(M + p + m.length) % m.length];
    E != null && $(E);
  }, j = (p) => {
    if (!h) {
      p.key === "ArrowDown" && (p.preventDefault(), c());
      return;
    }
    switch (p.key) {
      case "ArrowDown":
        p.preventDefault(), O(1);
        break;
      case "ArrowUp":
        p.preventDefault(), O(-1);
        break;
      case "Home":
        p.preventDefault(), m[0] != null && $(m[0]);
        break;
      case "End":
        p.preventDefault(), m[m.length - 1] != null && $(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        p.preventDefault(), b >= 0 && e[b] && m.includes(b) && S(e[b]?.value ?? "");
        break;
      case "Escape":
        p.preventDefault(), y();
        break;
      case "Tab":
        d(!1);
        break;
    }
  }, I = e.find((p) => p.value === _);
  return /* @__PURE__ */ w("div", { ref: D, className: [at.root, i].filter(Boolean).join(" "), onKeyDown: j, children: [
    /* @__PURE__ */ w(
      "button",
      {
        ref: x,
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
        onClick: () => h ? d(!1) : c(),
        ...g,
        children: [
          /* @__PURE__ */ t("span", { className: I ? at.label : at.placeholder, children: I ? I.label : o }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [at.chevron, h ? at.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: W_ },
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
        "aria-activedescendant": b >= 0 ? `${v}-option-${b}` : void 0,
        className: at.menu,
        children: e.map(
          (p, M) => p.label === "" ? /* @__PURE__ */ t("div", { className: at.header, role: "presentation", children: p.value }, p.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${v}-option-${M}`,
              role: "option",
              "aria-selected": p.value === _,
              "aria-disabled": p.disabled || void 0,
              className: [
                at.option,
                M === b ? at.active : null,
                p.value === _ ? at.selected : null,
                p.disabled ? at.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                p.disabled || S(p.value);
              },
              onMouseEnter: () => {
                !p.disabled && p.label !== "" && $(M);
              },
              children: p.label
            },
            p.value
          )
        )
      }
    )
  ] });
}
const U_ = "_root_z9312_1", V_ = "_wrap_z9312_9", X_ = "_input_z9312_26", G_ = "_invalid_z9312_31", Y_ = "_clear_z9312_57", Z_ = "_menu_z9312_82", J_ = "_option_z9312_97", Q_ = "_disabled_z9312_108", e1 = "_active_z9312_112", t1 = "_empty_z9312_122", n1 = "_xs_z9312_128", r1 = "_sm_z9312_135", s1 = "_md_z9312_142", o1 = "_lg_z9312_149", a1 = "_xl_z9312_156", St = {
  root: U_,
  wrap: V_,
  input: X_,
  invalid: G_,
  clear: Y_,
  menu: Z_,
  option: J_,
  disabled: Q_,
  active: e1,
  empty: t1,
  xs: n1,
  sm: r1,
  md: s1,
  lg: o1,
  xl: a1
}, l1 = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function Xb({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: s,
  onSelect: o,
  placeholder: l = "",
  size: u = "md",
  invalid: a = !1,
  disabled: i = !1,
  filter: g = l1,
  className: v,
  ...f
}) {
  const D = Ue(), x = `${D}-listbox`, C = ce(null), z = ce(null), [h, d] = Y(r), [_, m] = Y(!1), N = n ?? h, b = $e(
    () => N.trim() === "" ? [...e] : e.filter((A) => g(A, N)),
    [e, N, g]
  ), $ = b.map((A, X) => A.disabled ? -1 : X).filter((A) => A >= 0), [c, y] = Y(-1), S = (A) => {
    d(A), s?.(A);
  }, O = (A) => {
    S(A.label), o?.(A.value, A), m(!1);
  }, j = (A) => {
    if ($.length === 0) return;
    const X = $.includes(c) ? $.indexOf(c) : A === 1 ? -1 : 0, H = $[(X + A + $.length) % $.length];
    H != null && y(H);
  }, I = (A) => {
    i || (S(A.target.value), m(!0), y(-1));
  }, p = () => {
    i || N !== "" && m(!0);
  }, M = (A) => {
    C.current && !C.current.contains(A.relatedTarget) && m(!1);
  }, E = (A) => {
    if (!i)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), _ ? j(1) : (m(!0), y($[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), _ && j(-1);
          break;
        case "Enter":
          A.preventDefault(), _ && c >= 0 && b[c] && O(b[c]);
          break;
        case "Escape":
          A.preventDefault(), m(!1);
          break;
        case "Tab":
          _ && c >= 0 && b[c] && O(b[c]), m(!1);
          break;
      }
  }, T = () => {
    S(""), y(-1), m(!0), z.current?.focus();
  };
  return /* @__PURE__ */ w("div", { ref: C, className: [St.root, v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: [St.wrap, St[u], a ? St.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: z,
          type: "text",
          role: "combobox",
          "aria-expanded": _,
          "aria-controls": x,
          "aria-autocomplete": "list",
          "aria-activedescendant": _ && c >= 0 ? `${D}-option-${c}` : void 0,
          "aria-invalid": a || void 0,
          disabled: i,
          value: N,
          placeholder: l,
          className: St.input,
          onChange: I,
          onFocus: p,
          onBlur: M,
          onKeyDown: E,
          ...f
        }
      ),
      N !== "" && !i && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: St.clear,
          "aria-label": "Clear",
          onClick: T,
          children: "×"
        }
      )
    ] }),
    _ && /* @__PURE__ */ t("div", { id: x, role: "listbox", className: St.menu, children: b.length === 0 ? /* @__PURE__ */ t("div", { className: St.empty, children: "No matches" }) : b.map((A, X) => /* @__PURE__ */ t(
      "div",
      {
        id: `${D}-option-${X}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": A.disabled || void 0,
        className: [
          St.option,
          X === c ? St.active : null,
          A.disabled ? St.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          A.disabled || O(A);
        },
        onMouseDown: (H) => {
          H.preventDefault(), A.disabled || O(A);
        },
        onMouseEnter: () => {
          A.disabled || y(X);
        },
        children: A.label
      },
      A.value
    )) })
  ] });
}
const c1 = "_box_yzqzf_1", i1 = "_option_yzqzf_12", d1 = "_disabled_yzqzf_23", u1 = "_selected_yzqzf_27", f1 = "_active_yzqzf_33", gn = {
  box: c1,
  option: i1,
  disabled: d1,
  selected: u1,
  active: f1
};
function Gb({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: s = !1,
  onChange: o,
  className: l,
  style: u,
  ...a
}) {
  const i = Ue(), [g, v] = Y(() => {
    const b = r;
    return b == null ? [] : Array.isArray(b) ? [...b] : [b];
  }), f = n == null ? g : Array.isArray(n) ? n : [n], D = e.findIndex((b) => !b.disabled), [x, C] = Y(() => D >= 0 ? D : 0), z = ce(""), h = ce(null), d = (b) => {
    v(b), o?.(s ? b : b[0] ?? "");
  }, _ = e.map((b, $) => b.disabled ? -1 : $).filter((b) => b >= 0), m = (b) => {
    const $ = e[b];
    if (!(!$ || $.disabled))
      if (C(b), s) {
        const c = f.includes($.value) ? f.filter((y) => y !== $.value) : [...f, $.value];
        d(c);
      } else
        d([$.value]);
  }, N = (b) => {
    if (_.length === 0) return;
    const $ = _.includes(x) ? x : _[0];
    let c = -1;
    if (b.key === "ArrowDown")
      c = _[(_.indexOf($) + 1) % _.length];
    else if (b.key === "ArrowUp")
      c = _[(_.indexOf($) - 1 + _.length) % _.length];
    else if (b.key === "Home")
      c = _[0];
    else if (b.key === "End")
      c = _[_.length - 1];
    else if (b.key === "Enter" || b.key === " ") {
      b.preventDefault(), m($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(b.key)) {
      b.preventDefault();
      const y = (z.current + b.key).toLowerCase();
      z.current = y, h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        z.current = "";
      }, 500);
      const S = [..._, ..._], O = _.indexOf($) + 1, j = S.slice(O).find(
        (I) => e[I]?.label.toLowerCase().startsWith(y)
      );
      j != null && C(j);
      return;
    }
    c >= 0 && (b.preventDefault(), C(c), s || d([e[c]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[x] ? `${i}-option-${x}` : void 0,
      style: u,
      className: [gn.box, l].filter(Boolean).join(" "),
      onKeyDown: N,
      ...a,
      children: e.map((b, $) => {
        const c = f.includes(b.value), y = $ === x;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${i}-option-${$}`,
            role: "option",
            "aria-selected": c,
            "aria-disabled": b.disabled || void 0,
            className: [
              gn.option,
              c ? gn.selected : null,
              y ? gn.active : null,
              b.disabled ? gn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m($),
            children: b.label
          },
          b.value
        );
      })
    }
  );
}
const _1 = "_group_1lmpf_1", p1 = "_legend_1lmpf_8", h1 = "_list_1lmpf_16", m1 = "_item_1lmpf_25", g1 = "_disabled_1lmpf_32", y1 = "_label_1lmpf_37", b1 = "_checkbox_1lmpf_48", Vt = {
  group: _1,
  legend: p1,
  list: h1,
  item: m1,
  disabled: g1,
  label: y1,
  checkbox: b1
};
function Yb({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: s,
  legend: o,
  name: l,
  className: u
}) {
  const [a, i] = Y(() => [...r]), g = n ?? a, v = (f, D) => {
    const x = D ? [...g, f] : g.filter((C) => C !== f);
    i(x), s?.(x);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Vt.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ t("legend", { className: Vt.legend, children: o }),
    /* @__PURE__ */ t("ul", { className: Vt.list, children: e.map((f) => {
      const D = g.includes(f.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Vt.item, f.disabled ? Vt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Vt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Vt.checkbox,
                name: l,
                value: f.value,
                checked: D,
                disabled: f.disabled,
                onChange: (x) => v(f.value, x.target.checked)
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
const v1 = "_group_1fnri_1", x1 = "_legend_1fnri_8", w1 = "_list_1fnri_16", $1 = "_item_1fnri_25", k1 = "_disabled_1fnri_32", N1 = "_label_1fnri_37", S1 = "_radio_1fnri_48", Xt = {
  group: v1,
  legend: x1,
  list: w1,
  item: $1,
  disabled: k1,
  label: N1,
  radio: S1
};
function Zb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  legend: o,
  name: l,
  className: u
}) {
  const [a, i] = Y(r), g = n ?? a, v = (f) => {
    i(f), s?.(f);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Xt.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ t("legend", { className: Xt.legend, children: o }),
    /* @__PURE__ */ t("ul", { className: Xt.list, children: e.map((f) => {
      const D = f.value === g;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Xt.item, f.disabled ? Xt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Xt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Xt.radio,
                name: l,
                value: f.value,
                checked: D,
                disabled: f.disabled,
                onChange: (x) => v(x.target.value)
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
const D1 = "_bar_107ts_1", C1 = "_option_107ts_12", z1 = "_selected_107ts_33", M1 = "_sm_107ts_49", O1 = "_md_107ts_55", I1 = "_lg_107ts_61", yn = {
  bar: D1,
  option: C1,
  selected: z1,
  sm: M1,
  md: O1,
  lg: I1
};
function Jb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  size: o = "md",
  className: l,
  ...u
}) {
  const [a, i] = Y(
    r ?? e[0]?.value
  ), g = n ?? a, v = (f) => {
    i(f), s?.(f);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [yn.bar, yn[o], l].filter(Boolean).join(" "),
      ...u,
      children: e.map((f) => {
        const D = f.value === g;
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
            onClick: () => v(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const T1 = "_toggle_1d0zk_1", E1 = "_pressed_1d0zk_29", j1 = "_sm_1d0zk_41", A1 = "_md_1d0zk_47", L1 = "_lg_1d0zk_53", R1 = "_fullWidth_1d0zk_59", En = {
  toggle: T1,
  pressed: E1,
  sm: j1,
  md: A1,
  lg: L1,
  fullWidth: R1
}, Qb = He(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: s,
    size: o = "md",
    fullWidth: l = !1,
    className: u,
    type: a = "button",
    ...i
  }, g) {
    const [v, f] = Y(r), D = n ?? v, x = () => {
      const C = !D;
      f(C), s?.(C);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: g,
        type: a,
        "aria-pressed": D,
        className: [
          En.toggle,
          En[o],
          D ? En.pressed : null,
          l ? En.fullWidth : null,
          u
        ].filter(Boolean).join(" "),
        onClick: x,
        ...i
      }
    );
  }
), B1 = "_root_50hp4_1", P1 = "_action_50hp4_102", F1 = "_filled_50hp4_122", K1 = "_caret_50hp4_126", q1 = "_flat_50hp4_147", H1 = "_outlined_50hp4_155", W1 = "_text_50hp4_163", U1 = "_sm_50hp4_201", V1 = "_md_50hp4_213", X1 = "_lg_50hp4_225", G1 = "_menu_50hp4_237", Y1 = "_item_50hp4_250", Z1 = "_disabled_50hp4_262", J1 = "_active_50hp4_266", Q1 = "_danger_50hp4_275", $t = {
  root: B1,
  "style-primary": "_style-primary_50hp4_11",
  "style-secondary": "_style-secondary_50hp4_21",
  "style-base": "_style-base_50hp4_31",
  "style-light": "_style-light_50hp4_41",
  "style-dark": "_style-dark_50hp4_51",
  "style-info": "_style-info_50hp4_61",
  "style-success": "_style-success_50hp4_71",
  "style-warning": "_style-warning_50hp4_81",
  "style-danger": "_style-danger_50hp4_91",
  action: P1,
  filled: F1,
  caret: K1,
  flat: q1,
  outlined: H1,
  text: W1,
  "shade-lighter": "_shade-lighter_50hp4_178",
  "shade-light": "_shade-light_50hp4_178",
  "shade-dark": "_shade-dark_50hp4_186",
  "shade-darker": "_shade-darker_50hp4_190",
  sm: U1,
  md: V1,
  lg: X1,
  menu: G1,
  item: Y1,
  disabled: Z1,
  active: J1,
  danger: Q1
};
function e0({
  label: e,
  onClick: n,
  items: r = [],
  severity: s = "primary",
  variant: o = "filled",
  shade: l = "default",
  size: u = "md",
  disabled: a = !1,
  className: i,
  ...g
}) {
  const v = Ue(), f = `${v}-menu`, D = ce(null), x = ce(null), [C, z] = Y(!1), [h, d] = Y(-1), _ = r.map((y, S) => y.disabled ? -1 : S).filter((y) => y >= 0), m = q(() => {
    a || (d(_[0] ?? -1), z(!0));
  }, [a, _]), N = q(() => {
    z(!1), x.current?.focus();
  }, []);
  Se(() => {
    if (!C) return;
    const y = (S) => {
      D.current && !D.current.contains(S.target) && z(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [C]);
  const b = (y) => {
    const S = r[y];
    !S || S.disabled || (S.onClick?.(), z(!1), x.current?.focus());
  }, $ = (y) => {
    if (_.length === 0) return;
    const S = _.includes(h) ? _.indexOf(h) : y === 1 ? -1 : 0, O = _[(S + y + _.length) % _.length];
    O != null && d(O);
  }, c = (y) => {
    if (!C) {
      (y.key === "ArrowDown" || y.key === "Enter" || y.key === " ") && (y.preventDefault(), m());
      return;
    }
    switch (y.key) {
      case "ArrowDown":
        y.preventDefault(), $(1);
        break;
      case "ArrowUp":
        y.preventDefault(), $(-1);
        break;
      case "Home":
        y.preventDefault(), _[0] != null && d(_[0]);
        break;
      case "End":
        y.preventDefault(), _[_.length - 1] != null && d(_[_.length - 1]);
        break;
      case "Enter":
      case " ":
        y.preventDefault(), h >= 0 && b(h);
        break;
      case "Escape":
        y.preventDefault(), N();
        break;
      case "Tab":
        z(!1);
        break;
    }
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: D,
      className: [
        $t.root,
        $t[u],
        $t[`style-${s}`],
        $t[nr(o, "filled")],
        l !== "default" ? $t[`shade-${l}`] : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: c,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: $t.action,
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
            className: $t.caret,
            "aria-haspopup": "menu",
            "aria-expanded": C,
            "aria-controls": f,
            "aria-label": "More actions",
            disabled: a,
            onClick: () => C ? z(!1) : m(),
            children: "▾"
          }
        ),
        C && /* @__PURE__ */ t(
          "div",
          {
            id: f,
            role: "menu",
            "aria-activedescendant": h >= 0 ? `${v}-item-${h}` : void 0,
            className: $t.menu,
            ...g,
            children: r.map((y, S) => /* @__PURE__ */ t(
              "div",
              {
                id: `${v}-item-${S}`,
                role: "menuitem",
                "aria-disabled": y.disabled || void 0,
                className: [
                  $t.item,
                  S === h ? $t.active : null,
                  y.danger ? $t.danger : null,
                  y.disabled ? $t.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => b(S),
                onMouseEnter: () => {
                  y.disabled || d(S);
                },
                children: y.label
              },
              y.key
            ))
          }
        )
      ]
    }
  );
}
const ep = "_textbox_1uz2c_1", tp = "_invalid_1uz2c_31", np = "_xs_1uz2c_37", rp = "_sm_1uz2c_43", sp = "_md_1uz2c_49", op = "_lg_1uz2c_55", ap = "_xl_1uz2c_61", Un = {
  textbox: ep,
  invalid: tp,
  xs: np,
  sm: rp,
  md: sp,
  lg: op,
  xl: ap
}, t0 = He(function({ size: n = "md", invalid: r = !1, className: s, type: o = "text", ...l }, u) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: u,
      type: o,
      className: [Un.textbox, Un[n], r ? Un.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), lp = "_wrapper_13x89_1", cp = "_input_13x89_8", ip = "_invalid_13x89_38", dp = "_toggle_13x89_44", up = "_xs_13x89_79", fp = "_sm_13x89_85", _p = "_md_13x89_91", pp = "_lg_13x89_97", hp = "_xl_13x89_103", bn = {
  wrapper: lp,
  input: cp,
  invalid: ip,
  toggle: dp,
  xs: up,
  sm: fp,
  md: _p,
  lg: pp,
  xl: hp
}, n0 = He(function({
  size: n = "md",
  invalid: r = !1,
  className: s,
  disabled: o,
  showLabel: l = "Show password",
  hideLabel: u = "Hide password",
  ...a
}, i) {
  const [g, v] = Y(!1);
  return /* @__PURE__ */ w("div", { className: bn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: i,
        type: g ? "text" : "password",
        disabled: o,
        className: [bn.input, bn[n], r ? bn.invalid : null, s].filter(Boolean).join(" "),
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
        "aria-label": g ? u : l,
        disabled: o,
        onClick: () => v((f) => !f),
        children: /* @__PURE__ */ t(Ge, { name: g ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), mp = "_mask_145m8_1", gp = "_invalid_145m8_31", yp = "_xs_145m8_37", bp = "_sm_145m8_43", vp = "_md_145m8_49", xp = "_lg_145m8_55", wp = "_xl_145m8_61", Vn = {
  mask: mp,
  invalid: gp,
  xs: yp,
  sm: bp,
  md: vp,
  lg: xp,
  xl: wp
};
function mr(e, n) {
  let r = e.replace(/\D/g, ""), s = "";
  for (const o of n)
    if (o === "#") {
      if (r.length === 0) break;
      s += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      s += o;
    else
      break;
  return s;
}
const r0 = He(function({
  size: n = "md",
  invalid: r = !1,
  mask: s,
  value: o,
  defaultValue: l = "",
  onChange: u,
  className: a,
  onKeyDown: i,
  ...g
}, v) {
  const [f, D] = Y(l ?? ""), x = o !== void 0, C = x ? o ?? "" : f, z = (_) => {
    const m = mr(_, s);
    return x || D(m), u?.(m), m;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: v,
      type: "text",
      value: C,
      onChange: (_) => {
        z(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const m = _.currentTarget.selectionStart ?? C.length, N = C[m - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const b = C.replace(/\D/g, "");
            z(mr(b.slice(0, -1), s));
          }
        }
        i?.(_);
      },
      className: [Vn.mask, Vn[n], r ? Vn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...g
    }
  );
}), $p = "_wrapper_mr2in_1", kp = "_input_mr2in_8", Np = "_invalid_mr2in_38", Sp = "_button_mr2in_44", Dp = "_up_mr2in_76", Cp = "_down_mr2in_81", zp = "_xs_mr2in_86", Mp = "_sm_mr2in_92", Op = "_md_mr2in_98", Ip = "_lg_mr2in_104", Tp = "_xl_mr2in_110", Kt = {
  wrapper: $p,
  input: kp,
  invalid: Np,
  button: Sp,
  up: Dp,
  down: Cp,
  xs: zp,
  sm: Mp,
  md: Op,
  lg: Ip,
  xl: Tp
};
function Zn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function Ep(e) {
  let n = "", r = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? n += s : s === "." && !r ? (r = !0, n += s) : s === "-" && n.length === 0 && (n += s);
  return n;
}
function Lr(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function jp(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function Ap(e, n, r, s, o) {
  const u = Zn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = u + n * o : n > 0 ? a = r + Math.ceil((u - r + 1e-9) / o) * o : a = r + Math.floor((u - r - 1e-9) / o) * o, Lr(a, r, s);
}
const s0 = He(function({
  size: n = "md",
  invalid: r = !1,
  className: s,
  disabled: o,
  value: l,
  defaultValue: u,
  onChange: a,
  min: i,
  max: g,
  step: v = 1,
  incrementLabel: f = "Increment",
  decrementLabel: D = "Decrement",
  onBlur: x,
  onKeyDown: C,
  ...z
}, h) {
  const [d, _] = Y(u != null ? String(u) : ""), m = l !== void 0, N = m ? l == null ? "" : String(l) : d, b = (j) => {
    m || _(j), a?.(Zn(j));
  }, $ = (j) => {
    m || _(String(j)), a?.(j);
  }, c = (j) => {
    o || $(Ap(N, j, i, g, v));
  }, y = (j) => {
    b(Ep(j.target.value));
  }, S = (j) => {
    j.key === "ArrowUp" ? (j.preventDefault(), c(1)) : j.key === "ArrowDown" && (j.preventDefault(), c(-1)), C?.(j);
  }, O = (j) => {
    const I = Zn(N);
    I === null ? (m || _(""), a?.(null)) : $(Lr(jp(I, i, v), i, g)), x?.(j);
  };
  return /* @__PURE__ */ w("div", { className: Kt.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: h,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: N,
        disabled: o,
        onChange: y,
        onKeyDown: S,
        onBlur: O,
        className: [Kt.input, Kt[n], r ? Kt.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...z
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Kt.button, Kt.up].join(" "),
        "aria-label": f,
        disabled: o,
        onClick: () => c(1),
        children: /* @__PURE__ */ t(Ge, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Kt.button, Kt.down].join(" "),
        "aria-label": D,
        disabled: o,
        onClick: () => c(-1),
        children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), we = {}, Lp = [
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
  return r.length === 3 && (r = r.split("").map((s) => s + s).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function Rp({ r: e, g: n, b: r }) {
  const s = (o) => Math.round(o).toString(16).padStart(2, "0");
  return `#${s(e)}${s(n)}${s(r)}`;
}
function Bp({ r: e, g: n, b: r }) {
  const s = e / 255, o = n / 255, l = r / 255, u = Math.max(s, o, l), a = Math.min(s, o, l), i = u - a;
  let g = 0;
  return i !== 0 && (u === s ? g = (o - l) / i % 6 : u === o ? g = (l - s) / i + 2 : g = (s - o) / i + 4, g *= 60, g < 0 && (g += 360)), {
    h: g,
    s: u === 0 ? 0 : i / u,
    v: u
  };
}
function tn({ h: e, s: n, v: r }) {
  const s = r * n, o = e / 60, l = s * (1 - Math.abs(o % 2 - 1));
  let u = 0, a = 0, i = 0;
  o < 1 ? (u = s, a = l) : o < 2 ? (u = l, a = s) : o < 3 ? (a = s, i = l) : o < 4 ? (a = l, i = s) : o < 5 ? (u = l, i = s) : (u = s, i = l);
  const g = r - s;
  return {
    r: Math.round((u + g) * 255),
    g: Math.round((a + g) * 255),
    b: Math.round((i + g) * 255),
    a: 1
  };
}
function Pp(e) {
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
function gr({ r: e, g: n, b: r, a: s }) {
  return s >= 1 ? `rgb(${e}, ${n}, ${r})` : `rgba(${e}, ${n}, ${r}, ${Math.round(s * 100) / 100})`;
}
const o0 = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: s = !0,
  palette: o = Lp,
  showButton: l = !1,
  showArrow: u = !0,
  disabled: a = !1,
  invalid: i = !1,
  placeholder: g = "",
  size: v = "md",
  tabIndex: f = 0,
  className: D,
  onChange: x,
  onValueChange: C,
  onOpen: z,
  onClose: h
}) => {
  const d = ce(null), _ = ce(null), m = ce(null), N = ce(null), b = ce(null), $ = Ue(), c = ce(null), y = $e(
    () => Pp(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [S, O] = Y(!1), [j, I] = Y(null), p = j ?? y, M = $e(() => Bp(p), [p]), E = q(
    (V) => {
      const k = gr(V);
      x?.(k), C?.(k);
    },
    [x, C]
  ), T = q(
    (V, k) => {
      I(V), k && !l && E(V);
    },
    [l, E]
  ), A = q(() => {
    O(!1), I(null), h?.(), _.current?.focus();
  }, [h]), X = q(() => {
    a || (I(y), O(!0), z?.());
  }, [a, y, z]), H = q(() => {
    S ? A() : X();
  }, [S, A, X]), re = q(
    (V, k) => {
      const B = m.current;
      if (!B) return M;
      const U = B.getBoundingClientRect(), oe = bt((V - U.left) / U.width, 0, 1), te = bt(1 - (k - U.top) / U.height, 0, 1);
      return { h: M.h, s: oe, v: te };
    },
    [M]
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
    T({ ...tn(k), a: p.a }, !0);
  }, Q = (V) => {
    if (c.current !== "sat") return;
    V.preventDefault();
    const k = re(V.clientX, V.clientY);
    T({ ...tn(k), a: p.a }, !0);
  }, G = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "hue";
    const k = Z(V.clientX, N.current);
    T({ ...tn({ ...M, h: k * 360 }), a: p.a }, !0);
  }, K = (V) => {
    if (c.current !== "hue") return;
    V.preventDefault();
    const k = Z(V.clientX, N.current);
    T({ ...tn({ ...M, h: k * 360 }), a: p.a }, !0);
  }, L = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "alpha";
    const k = Z(V.clientX, b.current);
    T({ ...p, a: k }, !0);
  }, se = (V) => {
    if (c.current !== "alpha") return;
    V.preventDefault();
    const k = Z(V.clientX, b.current);
    T({ ...p, a: k }, !0);
  }, ie = () => {
    c.current = null;
  }, ee = q(
    (V, k) => {
      const B = { h: M.h, s: bt(M.s + V, 0, 1), v: bt(M.v + k, 0, 1) };
      T({ ...tn(B), a: p.a }, !0);
    },
    [M, p.a, T]
  ), ue = q(
    (V) => {
      const k = (M.h + V + 360) % 360;
      T({ ...tn({ ...M, h: k }), a: p.a }, !0);
    },
    [M, p.a, T]
  ), me = q(
    (V) => {
      T({ ...p, a: bt(p.a + V, 0, 1) }, !0);
    },
    [p, T]
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
      te && T({ ...te, a: p.a }, !0);
      return;
    }
    const B = k.replace(/[^\d.]/g, ""), U = Number.parseFloat(B);
    if (Number.isNaN(U)) return;
    if (V === "a") {
      const te = B.includes(".") ? bt(U, 0, 1) : bt(U / 100, 0, 1);
      T({ ...p, a: te }, !0);
      return;
    }
    const oe = { r: 255, g: 255, b: 255 };
    T({ ...p, [V]: bt(U, 0, oe[V]) }, !0);
  }, Ve = () => {
    j && (E(j), I(null), O(!1), h?.(), _.current?.focus());
  };
  Se(() => {
    if (!S) return;
    const V = (k) => {
      d.current && !d.current.contains(k.target) && A();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [S, A]), Se(() => {
    if (!S) return;
    const V = (k) => {
      k.key === "Escape" && A();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [S, A]);
  const be = v === "xs" ? we.dtColorpickerTriggerXs : v === "sm" ? we.dtColorpickerTriggerSm : v === "lg" ? we.dtColorpickerTriggerLg : v === "xl" ? we.dtColorpickerTriggerXl : we.dtColorpickerTriggerMd, Xe = gr(p), Ze = Rp(p), Pe = { x: M.s * 100, y: (1 - M.v) * 100 }, Ye = M.h / 360 * 100, Fe = p.a * 100, Je = /* @__PURE__ */ w("div", { className: we.dtColorpickerPanel, children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(M.s * 100),
        "aria-valuetext": `Saturation ${Math.round(M.s * 100)}%, value ${Math.round(M.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: we.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${M.h}, 100%, 50%)`
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
        "aria-valuenow": Math.round(M.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: we.dtHuePicker,
        onKeyDown: (V) => Re(V, "hue"),
        onPointerDown: G,
        onPointerMove: K,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtHueIndicator,
            style: { left: `${Ye}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: b,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: we.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dx-color-border) 0% 25%, var(--dx-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${M.h}, 100%, 50%))`
        },
        onKeyDown: (V) => Re(V, "alpha"),
        onPointerDown: L,
        onPointerMove: se,
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
    r && /* @__PURE__ */ w("div", { className: we.dtColorpickerRgba, children: [
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
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
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "R" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Red",
            value: p.r,
            onChange: (V) => Ie("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "G" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Green",
            value: p.g,
            onChange: (V) => Ie("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "B" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Blue",
            value: p.b,
            onChange: (V) => Ie("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "A" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Alpha",
            value: Math.round(p.a * 100),
            onChange: (V) => Ie("a", V.target.value)
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ t("div", { className: we.dtColorpickerPalette, children: o.map((V) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        role: "button",
        className: we.dtColorpickerSwatch,
        "aria-label": V,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        style: { backgroundColor: V },
        onClick: () => {
          const k = Jn(V);
          l ? T({ ...k, a: p.a }, !1) : (I(null), E({ ...k, a: p.a }), O(!1), h?.(), _.current?.focus());
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
  return /* @__PURE__ */ w(
    "div",
    {
      ref: d,
      className: [
        we.dtColorpicker,
        S ? we.dtColorpickerOpen : null,
        i ? we.dtColorpickerInvalid : null,
        D
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ w(
          "button",
          {
            ref: _,
            type: "button",
            role: "button",
            className: [we.dtColorpickerTrigger, be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": S,
            "aria-controls": $,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: f,
            onClick: H,
            onKeyDown: (V) => {
              V.key === "Escape" && S && (V.preventDefault(), A());
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
              g && /* @__PURE__ */ t("span", { className: we.dtColorpickerText, children: g }),
              u && /* @__PURE__ */ t("span", { className: we.dtColorpickerChevron, "aria-hidden": "true", children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        S && /* @__PURE__ */ t(
          "div",
          {
            id: $,
            role: "dialog",
            "aria-label": "Choose color",
            className: we.dtColorpickerPopup,
            children: Je
          }
        )
      ]
    }
  );
}, Ce = {}, Fp = 42;
function vt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${vt(e.month)}-${vt(e.day)}`;
}
function Kp(e, n) {
  const r = pt(e);
  return n ? `${r} ${vt(e.hour)}:${vt(e.minute)}:${vt(e.second)}` : r;
}
function Qn(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), s = Number(n[2]), o = Number(n[3]), l = n[4] != null ? Number(n[4]) : 0, u = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (s < 1 || s > 12 || o < 1 || o > 31) return null;
  const i = new Date(r, s - 1, o, l, u, a);
  return i.getFullYear() !== r || i.getMonth() !== s - 1 || i.getDate() !== o ? null : { year: r, month: s, day: o, hour: l, minute: u, second: a };
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
function jn(e, n) {
  const r = new Date(e.year, e.month - 1 + n, 1), s = r.getFullYear(), o = r.getMonth() + 1, l = new Date(s, o, 0).getDate();
  return {
    year: s,
    month: o,
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
  }).formatToParts(n).find((o) => o.type === "dayPeriod")?.value ?? ""
}, qp = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], Hp = ["y", "M", "d", "H", "m", "s"];
function An(e, n, r) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let o = "", l = 0;
  for (; l < n.length; ) {
    let u = !1;
    for (const i of qp)
      if (n.startsWith(i, l)) {
        o += br[i](e, s, r), l += i.length, u = !0;
        break;
      }
    if (u) continue;
    const a = n[l];
    if (Hp.includes(a)) {
      o += br[a](e, s, r), l += 1;
      continue;
    }
    o += a, l += 1;
  }
  return o;
}
const Wp = [
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
function Up(e, n) {
  const r = {};
  let s = 0, o = 0;
  for (; o < n.length; ) {
    let a = null;
    for (const i of Wp)
      if (n.startsWith(i, o)) {
        a = i;
        break;
      }
    if (a) {
      const i = e.slice(s, s + a.length);
      if (!/^\d+$/.test(i)) return null;
      const g = Number(i);
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
      s += a.length, o += a.length;
      continue;
    }
    if (e[s] !== n[o]) return null;
    s += 1, o += 1;
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
function vn(e, n) {
  const r = Qn(e);
  return r || Up(e, n);
}
function Vp(e, n, r) {
  return n && pt(e) < pt(n) ? n : r && pt(e) > pt(r) ? r : e;
}
const Xp = ["hour", "minute", "second"];
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
const a0 = He(function({
  size: n = "md",
  invalid: r = !1,
  value: s,
  defaultValue: o,
  format: l = "yyyy-MM-dd",
  min: u,
  max: a,
  showTime: i = !1,
  showButton: g = !0,
  allowClear: v = !1,
  inline: f = !1,
  disabledDates: D,
  locale: x = "en-US",
  onChange: C,
  onValueChange: z,
  onOpen: h,
  onClose: d,
  disabled: _,
  readOnly: m,
  placeholder: N,
  ariaLabel: b,
  triggerLabel: $,
  clearLabel: c,
  tabIndex: y,
  className: S,
  onBlur: O,
  onKeyDown: j,
  ...I
}, p) {
  const M = ce(null), E = ce(null), T = ce(null), A = ce(null), X = Ue(), H = s !== void 0, [re, Z] = Y(
    () => o != null ? An(vn(o, l) ?? qt(), l, x) : ""
  ), [J, Q] = Y(!1), [G, K] = Y(null), [L, se] = Y(() => {
    const R = s !== void 0 ? s ?? "" : o ?? "";
    if (R) {
      const le = vn(R, l);
      if (le) return le;
    }
    return qt();
  }), ie = $e(() => u ? Qn(u) : null, [u]), ee = $e(() => a ? Qn(a) : null, [a]), ue = $e(
    () => new Set(D ?? []),
    [D]
  ), me = $e(() => {
    const R = H ? s ?? "" : re;
    return R ? vn(R, l) : null;
  }, [s, re, H, l]), xe = q(
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
      H || Z(R ? An(R, l, x) : "");
      const le = R ? Kp(R, i) : "";
      C?.(le), z?.(le);
    },
    [H, l, x, i, C, z]
  ), Ve = q(
    (R) => {
      E.current = R, typeof p == "function" ? p(R) : p && (p.current = R);
    },
    [p]
  ), be = q(() => {
    Q(!1), K(null), d?.(), f || T.current?.focus();
  }, [f, d]), Xe = q(() => {
    if (_) return;
    const R = me ?? qt();
    K(R), se(Re(R)), Q(!0), h?.();
  }, [_, me, Re, h]), Ze = q(() => {
    J ? be() : Xe();
  }, [J, be, Xe]), Pe = q((R) => {
    A.current?.querySelector(
      `[data-date="${pt(R)}"]`
    )?.focus();
  }, []), Ye = q(
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
      const ze = le.replace(/\D/g, ""), Ne = ze === "" ? 0 : Number(ze), Ee = R === "hour" ? 23 : 59;
      K((et) => ({ ...et ?? me ?? qt(), [R]: Math.min(Ee, Ne) }));
    },
    [me]
  ), V = q(() => {
    G && (Ie(G), be());
  }, [G, Ie, be]), k = q(() => {
    if (J) return;
    const R = vn(re, l);
    Ie(R ? Vp(R, ie, ee) : null);
  }, [J, re, l, ie, ee, Ie]), B = (R) => {
    const le = R.target.value;
    H || Z(le), J && K(null);
  }, U = (R) => {
    R.key === "Enter" ? (R.preventDefault(), J ? G && (Ie(G), be()) : k()) : R.key === "Escape" ? J && (R.preventDefault(), be()) : R.key === "ArrowDown" && !J ? (R.preventDefault(), Xe()) : R.key === "Tab" && J && Q(!1), j?.(R);
  }, oe = (R) => {
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
        le = At(L, -yr(L)), R.preventDefault();
        break;
      case "End":
        le = At(L, 6 - yr(L)), R.preventDefault();
        break;
      case "PageUp":
        le = jn(L, R.shiftKey ? -12 : -1), R.preventDefault();
        break;
      case "PageDown":
        le = jn(L, R.shiftKey ? 12 : 1), R.preventDefault();
        break;
      case "Enter":
      case " ":
        R.preventDefault(), Ye(L);
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
      se(ze), setTimeout(() => Pe(ze), 0);
    }
  };
  Se(() => {
    if (!J) return;
    const R = (le) => {
      M.current && !M.current.contains(le.target) && be();
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
    H || Z(""), C?.(""), z?.(""), E.current?.focus();
  }, ke = J && G ? An(G, l, x) : H ? s ? An(vn(s, l) ?? qt(), l, x) : "" : re, Be = H ? !!s : re.length > 0, Te = f || J, rt = { year: L.year, month: L.month }, xt = new Date(rt.year, rt.month - 1, 1).getDay(), ne = {
    year: rt.year,
    month: rt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let R = 0; R < Fp; R += 1)
    De.push(At(ne, R - xt));
  const W = G ? pt(G) : me ? pt(me) : null, ae = pt(qt()), fe = `${rt.year}-${vt(rt.month)}`, he = $e(
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
    (R, le) => new Intl.DateTimeFormat(x, { weekday: "short" }).format(
      new Date(2021, 0, 3 + le)
    )
  ), Ae = n === "xs" ? Ce.dtDatepickerInputXs : n === "sm" ? Ce.dtDatepickerInputSm : n === "lg" ? Ce.dtDatepickerInputLg : n === "xl" ? Ce.dtDatepickerInputXl : Ce.dtDatepickerInputMd, Ke = /* @__PURE__ */ w(
    "div",
    {
      className: Ce.dtDatepickerCalendar,
      "aria-label": b ?? "Date picker",
      children: [
        /* @__PURE__ */ w("div", { className: Ce.dtDatepickerHeader, children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ce.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const R = Re(jn(L, -1));
                se(R), setTimeout(() => Pe(R), 0);
              },
              children: /* @__PURE__ */ t(Ge, { name: "chevron-left", size: 16 })
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
                const R = Re(jn(L, 1));
                se(R), setTimeout(() => Pe(R), 0);
              },
              children: /* @__PURE__ */ t(Ge, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ w(
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
                const Ne = pt(ze), Ee = xe(ze), et = Ne.startsWith(fe);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Ne,
                    tabIndex: Ne === pt(L) ? 0 : -1,
                    "aria-selected": Ne === W || void 0,
                    "aria-disabled": Ee || void 0,
                    "aria-label": he.format(
                      new Date(ze.year, ze.month - 1, ze.day)
                    ),
                    className: [
                      Ce.dtDatepickerDay,
                      et ? null : Ce.dtDatepickerDayOutside,
                      Ne === ae ? Ce.dtDatepickerDayToday : null,
                      Ne === W ? Ce.dtDatepickerDaySelected : null,
                      Ee ? Ce.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Ye(ze),
                    onFocus: () => se(ze),
                    children: ze.day
                  },
                  Ne
                );
              }) }, le))
            ]
          }
        ),
        i && /* @__PURE__ */ w("div", { className: Ce.dtDatepickerTime, children: [
          Xp.map((R) => /* @__PURE__ */ w("label", { className: Ce.dtDatepickerTimeField, children: [
            /* @__PURE__ */ t("span", { className: Ce.dtDatepickerTimeLabel, children: Ln(R) }),
            /* @__PURE__ */ w("div", { className: Ce.dtDatepickerTimeControl, children: [
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
              /* @__PURE__ */ w("span", { className: Ce.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${Ln(R).toLowerCase()}`,
                    onClick: () => Fe(R, 1),
                    children: /* @__PURE__ */ t(Ge, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${Ln(R).toLowerCase()}`,
                    onClick: () => Fe(R, -1),
                    children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 11 })
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
  return /* @__PURE__ */ w(
    "div",
    {
      ref: M,
      className: [
        Ce.dtDatepicker,
        f ? Ce.dtDatepickerInline : null,
        S
      ].filter(Boolean).join(" "),
      children: [
        !f && /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Ve,
              type: "text",
              autoComplete: "off",
              value: ke,
              disabled: _,
              readOnly: m,
              placeholder: N,
              tabIndex: y,
              role: g ? void 0 : "combobox",
              "aria-label": b ?? "Date",
              "aria-haspopup": g ? void 0 : "dialog",
              "aria-expanded": g ? void 0 : Te,
              "aria-controls": g ? void 0 : X,
              "aria-invalid": r || void 0,
              className: [
                Ce.dtDatepickerInput,
                Ae,
                r ? Ce.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: B,
              onKeyDown: U,
              onBlur: oe,
              onClick: () => {
                g || Ze();
              },
              ...I
            }
          ),
          v && !_ && Be && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                Ce.dtDatepickerClear,
                g ? Ce.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": c ?? "Clear",
              onClick: pe,
              children: /* @__PURE__ */ t(Ge, { name: "close", size: 14 })
            }
          ),
          g && /* @__PURE__ */ t(
            "button",
            {
              ref: T,
              type: "button",
              className: [
                Ce.dtDatepickerTrigger,
                J ? Ce.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": $ ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": J,
              "aria-controls": X,
              disabled: _,
              onClick: Ze,
              children: /* @__PURE__ */ t(Ge, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Te && /* @__PURE__ */ t(
          "div",
          {
            id: X,
            role: f ? void 0 : "dialog",
            className: f ? void 0 : Ce.dtDatepickerPopup,
            children: Ke
          }
        )
      ]
    }
  );
}), Ht = {}, l0 = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: s = !1,
  ariaLabel: o = "Rating",
  clearLabel: l = "Clear",
  rateLabel: u = "Rate",
  tabIndex: a = 0,
  className: i,
  onChange: g,
  onValueChange: v
}) => {
  const [f, D] = Y(e), x = q(
    (_) => Math.min(n, Math.max(1, _)),
    [n]
  ), C = q(
    (_) => {
      g?.(_), v?.(_);
    },
    [g, v]
  ), z = q(
    (_) => {
      r || s || (C(_), D(_));
    },
    [r, s, C]
  ), h = (_) => {
    if (r || s) return;
    const m = f > 0 ? f : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), z(x(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), z(x(m - 1));
        break;
      case "Home":
        _.preventDefault(), z(1);
        break;
      case "End":
        _.preventDefault(), z(n);
        break;
    }
  }, d = Array.from({ length: n }, (_, m) => m + 1);
  return /* @__PURE__ */ w(
    "div",
    {
      role: "radiogroup",
      "aria-label": o,
      "aria-readonly": r || void 0,
      className: [
        Ht.dtRating,
        r ? Ht.dtRatingReadonly : null,
        s ? Ht.dtRatingDisabled : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      children: [
        !r && !s && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ht.dtRatingClear,
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: s,
            onClick: () => z(0),
            children: /* @__PURE__ */ t(Ge, { name: "ban", size: 16 })
          }
        ),
        d.map((_) => {
          const m = _ <= e, N = _ === (e > 0 ? e : f);
          return /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": _,
              "aria-setsize": n,
              "aria-label": `${u} ${_}`,
              tabIndex: N ? a : -1,
              "aria-disabled": s || r || void 0,
              disabled: s || r,
              className: [
                Ht.dtRatingItem,
                m ? Ht.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => z(_),
              onFocus: () => D(_),
              children: [
                /* @__PURE__ */ t("span", { className: Ht.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ t(Ge, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Ht.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ t(Ge, { name: "star-outline", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, Gt = {};
function zt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const c0 = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: s = 0,
  max: o = 100,
  step: l = 1,
  range: u = !1,
  orientation: a = "horizontal",
  disabled: i = !1,
  label: g = "Value",
  minLabel: v = "Min",
  maxLabel: f = "Max",
  tabIndex: D = 0,
  className: x,
  onChange: C,
  onInput: z,
  onValueChange: h,
  onInputChange: d
}) => {
  const _ = ce(null), m = ce(null), [N, b] = Y(null), $ = N ?? e, c = $e(() => zt($, s, o), [$, s, o]), y = $e(
    () => zt(u ? n : c, s, o),
    [u, n, c, s, o]
  ), S = $e(
    () => zt(u ? Math.max(r, y) : c, s, o),
    [u, r, y, c, s, o]
  ), O = q(
    (L) => {
      const se = o - s;
      return se <= 0 ? 0 : (zt(L, s, o) - s) / se * 100;
    },
    [s, o]
  ), j = q(
    (L, se) => {
      const ie = _.current;
      if (!ie) return s;
      const ee = ie.getBoundingClientRect();
      let ue;
      a === "vertical" ? ue = 1 - (se - ee.top) / ee.height : ue = (L - ee.left) / ee.width;
      const me = s + zt(ue, 0, 1) * (o - s);
      return l > 0 ? zt(Math.round(me / l) * l, s, o) : zt(me, s, o);
    },
    [s, o, l, a]
  ), I = q(
    (L) => {
      typeof L == "number" && b(L), C?.(L), h?.(L);
    },
    [C, h]
  ), p = q(
    (L) => {
      typeof L == "number" && b(L), z?.(L), d?.(L);
    },
    [z, d]
  ), M = q(
    (L, se, ie) => {
      const ee = j(se, ie);
      let ue;
      u ? L === "min" ? ue = { min: Math.min(ee, S), max: S } : ue = { min: y, max: Math.max(ee, y) } : ue = ee, p(ue), m.current === null && I(ue);
    },
    [u, j, y, S, p, I]
  ), E = q(
    (L, se) => {
      const ie = (l > 0 ? l : 1) * se;
      let ee;
      u ? L === "min" ? ee = {
        min: zt(y + ie, s, S),
        max: S
      } : ee = {
        min: y,
        max: zt(S + ie, y, o)
      } : ee = zt(c + ie, s, o), I(ee);
    },
    [u, l, s, o, y, S, c, I]
  ), T = (L, se) => {
    if (!i)
      switch (se.key) {
        case "ArrowLeft":
        case "ArrowDown":
          se.preventDefault(), E(L, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          se.preventDefault(), E(L, 1);
          break;
        case "Home":
          se.preventDefault(), I(u ? L === "min" ? { min: s, max: S } : { min: y, max: y } : s);
          break;
        case "End":
          se.preventDefault(), I(u ? L === "min" ? { min: S, max: S } : { min: y, max: o } : o);
          break;
      }
  }, A = (L, se) => {
    i || (se.preventDefault(), se.currentTarget.focus(), typeof se.currentTarget.setPointerCapture == "function" && se.currentTarget.setPointerCapture(se.pointerId), m.current = { key: L, pointerId: se.pointerId }, M(L, se.clientX, se.clientY));
  }, X = (L) => {
    !m.current || m.current.pointerId !== L.pointerId || (L.preventDefault(), M(m.current.key, L.clientX, L.clientY));
  }, H = (L) => {
    !m.current || m.current.pointerId !== L.pointerId || (m.current = null, L.preventDefault(), I(u ? { min: y, max: S } : c));
  }, [re, Z] = Y(null), J = O(y), Q = O(S), G = u ? J : 0, K = Q;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Gt.dtSlider,
        a === "vertical" ? Gt.dtSliderVertical : null,
        i ? Gt.dtSliderDisabled : null,
        x
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ w("div", { ref: _, className: Gt.dtSliderTrack, children: [
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
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(y),
            "aria-orientation": a,
            "aria-label": u ? v : g,
            "aria-disabled": i || void 0,
            tabIndex: i || u && re === "max" ? -1 : D,
            className: Gt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${J}% - 8px)` } : { left: `calc(${J}% - 8px)` },
            onKeyDown: (L) => T("min", L),
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
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(S),
            "aria-orientation": a,
            "aria-label": f,
            "aria-disabled": i || void 0,
            tabIndex: i || re === "min" ? -1 : D,
            className: Gt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${Q}% - 8px)` } : { left: `calc(${Q}% - 8px)` },
            onKeyDown: (L) => T("max", L),
            onPointerDown: (L) => A("max", L),
            onPointerMove: X,
            onPointerUp: H,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, qe = {}, Gp = "-10675199.02:48:05.4775808", Yp = "10675199.02:48:05.4775808", Rt = 86400, Bt = 3600, Dt = 60, Xn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, vr = {
  days: Rt,
  hours: Bt,
  minutes: Dt,
  seconds: 1
}, Zp = {
  day: Rt,
  hour: Bt,
  minute: Dt,
  second: 1
};
function nn(e) {
  return String(e).padStart(2, "0");
}
function Dn(e) {
  const n = e.trim();
  if (!n) return null;
  let r = 1, s = n;
  s.startsWith("-") ? (r = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const o = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (o) {
    if (!o.slice(1).some((f) => f != null)) return null;
    const a = o[1] != null ? Number(o[1]) : 0, i = o[2] != null ? Number(o[2]) : 0, g = o[3] != null ? Number(o[3]) : 0, v = o[4] != null ? Number(o[4]) : 0;
    return r * (a * Rt + i * Bt + g * Dt + v);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(s);
  if (l) {
    const u = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), i = Number(l[3]), g = l[4] != null ? Number(l[4]) : 0, v = l[5] != null ? +`0.${l[5]}` : 0;
    return a > 23 || i > 59 || g > 59 ? null : r * (u * Rt + a * Bt + i * Dt + g + v);
  }
  return null;
}
function Jp(e) {
  return e.days * Rt + e.hours * Bt + e.minutes * Dt + e.seconds;
}
function xr(e) {
  let n = Math.abs(e);
  const r = Math.floor(n / Rt);
  n %= Rt;
  const s = Math.floor(n / Bt);
  n %= Bt;
  const o = Math.floor(n / Dt), l = Math.round(n % Dt * 1e9) / 1e9;
  return { days: r, hours: s, minutes: o, seconds: l };
}
function er(e, n) {
  const r = e < 0;
  let s = Math.abs(e);
  n === "minute" ? s = Math.round(s / Dt) * Dt : n === "hour" ? s = Math.round(s / Bt) * Bt : n === "day" && (s = Math.round(s / Rt) * Rt);
  let o = Math.round(s % Dt);
  const l = o === 60 ? 1 : 0;
  o = o === 60 ? 0 : o;
  const u = Math.floor(s / Dt) + l, a = u % 60, i = Math.floor(u / 60), g = i % 24, v = Math.floor(i / 24), f = r ? "-" : "", D = v > 0 ? `${v}.` : "";
  switch (n) {
    case "day":
      return `${f}${v} day${v === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${D}${nn(g)}`;
    case "minute":
      return `${f}${D}${nn(g)}:${nn(a)}`;
    default:
      return `${f}${D}${nn(g)}:${nn(a)}:${nn(o)}`;
  }
}
function wr(e, n = "second") {
  const r = Dn(e);
  return r === null ? "" : er(r, n);
}
function Gn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const i0 = He(
  function({
    size: n = "md",
    invalid: r = !1,
    value: s,
    defaultValue: o,
    min: l = Gp,
    max: u = Yp,
    step: a = "1",
    precision: i = "second",
    showDays: g = !0,
    showHours: v = !0,
    showMinutes: f = !0,
    showSeconds: D = !0,
    allowClear: x = !1,
    inline: C = !1,
    onChange: z,
    onValueChange: h,
    onOpen: d,
    onClose: _,
    disabled: m,
    placeholder: N,
    ariaLabel: b,
    triggerLabel: $,
    clearLabel: c,
    tabIndex: y,
    className: S,
    onBlur: O,
    onKeyDown: j,
    ...I
  }, p) {
    const M = ce(null), E = ce(null), T = ce(null), A = Ue(), X = s !== void 0, [H, re] = Y(
      () => o != null ? wr(o, i) : ""
    ), [Z, J] = Y(!1), [Q, G] = Y(null), [K, L] = Y(null), se = $e(
      () => Dn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), ie = $e(
      () => Dn(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), ee = $e(() => {
      const ne = Number.parseFloat(a);
      return Number.isNaN(ne) || ne <= 0 ? 1 : ne;
    }, [a]), ue = $e(() => {
      const ne = X ? s ?? "" : H;
      return ne ? Dn(ne) : null;
    }, [s, H, X]), me = q(
      (ne) => {
        const De = ne === null ? "" : er(ne, i);
        X || re(De), z?.(De), h?.(De);
      },
      [X, i, z, h]
    ), xe = q(
      (ne) => {
        ne && Q !== null && me(Q), J(!1), G(null), L(null), _?.(), C || T.current?.focus();
      },
      [C, Q, me, _]
    ), Re = q(() => {
      m || (G(ue ?? 0), J(!0), d?.());
    }, [m, ue, d]), Ie = q(() => {
      Z ? xe(!1) : Re();
    }, [Z, xe, Re]), Ve = q(
      (ne, De) => {
        G((W) => {
          const fe = (W ?? ue ?? 0) + De * ee * vr[ne];
          return Gn(fe, se, ie);
        });
      },
      [ue, ee, se, ie]
    ), be = q(
      (ne) => {
        const De = K?.[ne];
        if (De == null) return;
        const W = Number.parseFloat(De), ae = Number.isNaN(W) ? 0 : W;
        G((fe) => {
          const he = fe ?? ue ?? 0, de = xr(he);
          de[ne] = ae;
          const Ae = (he < 0 ? -1 : 1) * Jp(de);
          return Gn(Ae, se, ie);
        }), L(null);
      },
      [K, ue, se, ie]
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
          De.preventDefault(), be(ne), G(se);
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
      me(ne !== null ? Gn(ne, se, ie) : null);
    }, [Z, H, se, ie, me]), Ye = (ne) => {
      X || re(ne.target.value);
    }, Fe = (ne) => {
      ne.key === "Enter" ? (ne.preventDefault(), Z ? xe(!0) : Pe()) : ne.key === "Escape" && Z ? (ne.preventDefault(), xe(!1)) : ne.key === "ArrowDown" && !Z ? (ne.preventDefault(), Re()) : ne.key === "Tab" && Z && J(!1), j?.(ne);
    }, Je = (ne) => {
      Pe(), O?.(ne);
    }, V = () => {
      X || re(""), z?.(""), h?.(""), E.current?.focus();
    };
    Se(() => {
      if (!Z) return;
      const ne = (De) => {
        M.current && !M.current.contains(De.target) && xe(!1);
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
        E.current = ne, typeof p == "function" ? p(ne) : p && (p.current = ne);
      },
      [p]
    ), B = X ? s ? wr(s, i) : "" : H, U = X ? !!s : H.length > 0, oe = C || Z, te = Q ?? ue ?? 0, pe = xr(te), ke = Zp[i], Te = ["days", "hours", "minutes", "seconds"].filter(
      (ne) => vr[ne] >= ke && (ne === "days" ? g : ne === "hours" ? v : ne === "minutes" ? f : D)
    ), rt = n === "xs" ? qe.dtTimespanpickerInputXs : n === "sm" ? qe.dtTimespanpickerInputSm : n === "lg" ? qe.dtTimespanpickerInputLg : n === "xl" ? qe.dtTimespanpickerInputXl : qe.dtTimespanpickerInputMd, xt = /* @__PURE__ */ w("div", { className: qe.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ t("div", { className: qe.dtTimespanpickerPreview, "aria-live": "polite", children: er(te, i) }),
      /* @__PURE__ */ t("div", { className: qe.dtTimespanpickerUnits, children: Te.map((ne) => /* @__PURE__ */ w("label", { className: qe.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ t("span", { className: qe.dtTimespanpickerUnitLabel, children: Xn[ne] }),
        /* @__PURE__ */ w("span", { className: qe.dtTimespanpickerUnitControl, children: [
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
          /* @__PURE__ */ w("span", { className: qe.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Xn[ne].toLowerCase()}`,
                onClick: () => {
                  be(ne), Ve(ne, 1);
                },
                children: /* @__PURE__ */ t(Ge, { name: "chevron-up", size: 11 })
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
                children: /* @__PURE__ */ t(Ge, { name: "chevron-down", size: 11 })
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
    return /* @__PURE__ */ w(
      "div",
      {
        ref: M,
        className: [
          qe.dtTimespanpicker,
          C ? qe.dtTimespanpickerInline : null,
          S
        ].filter(Boolean).join(" "),
        children: [
          !C && /* @__PURE__ */ w(Me, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: k,
                type: "text",
                autoComplete: "off",
                value: B,
                disabled: m,
                placeholder: N,
                tabIndex: y,
                role: "combobox",
                "aria-label": b ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                "aria-invalid": r || void 0,
                className: [
                  qe.dtTimespanpickerInput,
                  rt,
                  r ? qe.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Ye,
                onKeyDown: Fe,
                onBlur: Je,
                ...I
              }
            ),
            x && !m && U && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: qe.dtTimespanpickerClear,
                "aria-label": c ?? "Clear",
                onClick: V,
                children: /* @__PURE__ */ t(Ge, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: T,
                type: "button",
                className: [
                  qe.dtTimespanpickerTrigger,
                  Z ? qe.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                disabled: m,
                onClick: Ie,
                children: /* @__PURE__ */ t(Ge, { name: "clock", size: 16 })
              }
            )
          ] }),
          oe && /* @__PURE__ */ t(
            "div",
            {
              id: A,
              role: C ? void 0 : "dialog",
              "aria-label": b ?? "Time span picker",
              className: C ? void 0 : qe.dtTimespanpickerPopup,
              children: xt
            }
          )
        ]
      }
    );
  }
), Qp = "_wrapper_t1zvh_1", eh = "_cells_t1zvh_8", th = "_cell_t1zvh_8", nh = "_invalid_t1zvh_63", rh = "_live_t1zvh_72", Yt = {
  wrapper: Qp,
  cells: eh,
  cell: th,
  "cell-sm": "_cell-sm_t1zvh_45",
  "cell-md": "_cell-md_t1zvh_51",
  "cell-lg": "_cell-lg_t1zvh_57",
  invalid: nh,
  live: rh
};
function $r(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const d0 = He(
  function({
    length: n = 6,
    value: r,
    defaultValue: s,
    onChange: o,
    invalid: l = !1,
    size: u = "md",
    autoFocus: a = !1,
    disabled: i = !1,
    label: g = "Security code",
    liveAnnounce: v = !0,
    className: f,
    "aria-label": D
  }, x) {
    const C = Ue(), z = r !== void 0, [h, d] = Y($r(s).join("")), _ = z ? $r(r).join("") : h, m = Array.from({ length: n }, (I, p) => _[p] ?? ""), N = ce([]), [b, $] = Y(""), c = (I) => {
      z || d(I), o?.(I);
    }, y = (I) => {
      const p = N.current[I];
      p && !p.disabled && (p.focus(), p.select());
    }, S = (I, p) => {
      const M = p.replace(/\D/g, "").slice(-1), E = _.split("");
      if (M) {
        E[I] = M;
        const T = E.join("").slice(0, n);
        c(T), T.length < n ? y(I + 1) : v && $("Code complete");
      }
    }, O = (I, p) => {
      if (p.key === "Backspace") {
        if (p.preventDefault(), _[I]) {
          const M = _.split("");
          M[I] = "", c(M.join(""));
        } else if (I > 0) {
          const M = _.split("");
          M[I - 1] = "", c(M.join("")), y(I - 1);
        }
      } else p.key === "ArrowLeft" && I > 0 ? (p.preventDefault(), y(I - 1)) : p.key === "ArrowRight" && I < n - 1 ? (p.preventDefault(), y(I + 1)) : p.key === "Home" ? (p.preventDefault(), y(0)) : p.key === "End" && (p.preventDefault(), y(n - 1));
    }, j = (I, p) => {
      p.preventDefault();
      const M = p.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!M) return;
      const E = _.split("");
      let T = 0;
      for (let X = 0; X < M.length && I + X < n; X++)
        E[I + X] = M[X] ?? "", T++;
      const A = E.join("");
      c(A), A.length >= n ? v && $("Code complete") : y(I + T);
    };
    return /* @__PURE__ */ w(
      "div",
      {
        className: [Yt.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": D ?? g,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Yt.cells, Yt[u]].join(" "), children: m.map((I, p) => /* @__PURE__ */ t(
            "input",
            {
              ref: (M) => {
                N.current[p] = M, p === 0 && x && (typeof x == "function" ? x(M) : x.current = M);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: i,
              "aria-label": `Digit ${p + 1} of ${n}`,
              "aria-invalid": l && I !== "" ? !0 : void 0,
              autoFocus: a && p === 0,
              className: [Yt.cell, Yt[`cell-${u}`], l ? Yt.invalid : null].filter(Boolean).join(" "),
              onChange: (M) => S(p, M.target.value),
              onKeyDown: (M) => O(p, M),
              onPaste: (M) => j(p, M),
              onFocus: (M) => M.target.select(),
              onBlur: () => {
                v && $("");
              }
            },
            p
          )) }),
          v && /* @__PURE__ */ t("span", { id: `${C}-live`, role: "status", "aria-live": "polite", className: Yt.live, children: b })
        ]
      }
    );
  }
), sh = "_wrapper_itqsj_1", oh = "_header_itqsj_7", ah = "_label_itqsj_15", lh = "_clear_itqsj_22", ch = "_canvas_itqsj_53", ih = "_disabled_itqsj_69", rn = {
  wrapper: sh,
  header: oh,
  label: ah,
  clear: lh,
  canvas: ch,
  disabled: ih
}, u0 = He(
  function({
    value: n,
    defaultValue: r,
    onChange: s,
    penColor: o = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: a = "Signature",
    width: i,
    height: g = 140,
    disabled: v = !1,
    className: f
  }, D) {
    const x = ce(null), C = ce(!1), z = ce(!1), h = ce({ x: 0, y: 0 });
    Se(() => {
      const c = x.current;
      if (!c) return;
      const y = window.devicePixelRatio || 1, S = Math.round((i ?? c.clientWidth) * y), O = Math.round(g * y);
      (c.width !== S || c.height !== O) && (c.width = S, c.height = O);
      const j = c.getContext("2d");
      if (!j) return;
      j.setTransform(y, 0, 0, y, 0, 0), j.lineWidth = l, j.strokeStyle = o, j.lineCap = "round", j.lineJoin = "round";
      const I = n ?? r;
      if (I) {
        const p = new Image();
        p.onload = () => {
          j.drawImage(p, 0, 0, c.clientWidth, g);
        }, p.src = I;
      }
    }, [n, r, o, l, i, g]);
    const d = () => {
      const c = x.current;
      if (!c) return;
      const y = c.toDataURL("image/png");
      s?.(y);
    }, _ = () => {
      const c = x.current;
      if (!c) return;
      const y = c.getContext("2d");
      y && y.clearRect(0, 0, c.width, c.height), s?.("");
    };
    tr(D, () => ({
      clear: _,
      toDataURL: (c = "image/png", y) => x.current?.toDataURL(c, y) ?? ""
    }));
    const m = (c) => {
      const y = c.currentTarget.getBoundingClientRect();
      return { x: c.clientX - y.left, y: c.clientY - y.top };
    }, N = (c) => {
      v || (c.preventDefault(), typeof c.currentTarget.setPointerCapture == "function" && c.currentTarget.setPointerCapture(c.pointerId), C.current = !0, z.current = !1, h.current = m(c));
    }, b = (c) => {
      if (!C.current) return;
      c.preventDefault();
      const y = c.currentTarget.getContext("2d");
      if (!y) return;
      const S = m(c);
      y.beginPath(), y.moveTo(h.current.x, h.current.y), y.lineTo(S.x, S.y), y.stroke(), h.current = S, z.current = !0;
    }, $ = (c) => {
      C.current && (c.preventDefault(), C.current = !1, z.current && d());
    };
    return /* @__PURE__ */ w("div", { className: [rn.wrapper, f, v ? rn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ w("div", { className: rn.header, children: [
        /* @__PURE__ */ t("span", { className: rn.label, children: a }),
        /* @__PURE__ */ t("button", { type: "button", className: rn.clear, onClick: _, disabled: v, children: u })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: x,
          role: "img",
          "aria-label": a,
          "aria-disabled": v || void 0,
          style: { width: i ? `${i}px` : void 0, height: `${g}px` },
          className: rn.canvas,
          onPointerDown: N,
          onPointerMove: b,
          onPointerUp: $,
          onPointerCancel: $
        }
      )
    ] });
  }
), dh = "_wrapper_1v23y_1", uh = "_trigger_1v23y_7", fh = "_list_1v23y_35", _h = "_row_1v23y_44", ph = "_name_1v23y_59", hh = "_size_1v23y_68", mh = "_progress_1v23y_74", gh = "_fill_1v23y_82", yh = "_status_1v23y_99", bh = "_remove_1v23y_106", Mt = {
  wrapper: dh,
  trigger: uh,
  list: fh,
  row: _h,
  name: ph,
  size: hh,
  progress: mh,
  fill: gh,
  status: yh,
  remove: bh
};
function vh(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const f0 = He(function({
  url: n,
  multiple: r = !1,
  parameterName: s = "files",
  auto: o = !0,
  headers: l,
  accept: u,
  chooseText: a = "Upload",
  children: i,
  onProgress: g,
  onComplete: v,
  onError: f
}, D) {
  const x = ce(null), [C, z] = Y([]), h = ce(/* @__PURE__ */ new Map()), d = ($, c) => {
    z((y) => y.map((S) => S.file.name === $ ? { ...S, ...c } : S));
  }, _ = ($) => {
    if (!n) return;
    const c = new XMLHttpRequest();
    h.current.set($.file.name, c);
    const y = new FormData();
    if (y.append(s, $.file), c.upload.addEventListener("progress", (S) => {
      if (!S.lengthComputable) return;
      const O = Math.round(S.loaded / S.total * 100);
      d($.file.name, { state: "uploading", progress: O }), g?.($.file.name, O);
    }), c.addEventListener("load", () => {
      c.status >= 200 && c.status < 300 ? (d($.file.name, { state: "complete", progress: 100 }), v?.($.file.name)) : (d($.file.name, { state: "error", message: `HTTP ${c.status}` }), f?.($.file.name, `HTTP ${c.status}`));
    }), c.addEventListener("error", () => {
      d($.file.name, { state: "error", message: "Network error" }), f?.($.file.name, "Network error");
    }), l)
      for (const [S, O] of Object.entries(l))
        c.setRequestHeader(S, O);
    c.open("POST", n), c.send(y), d($.file.name, { state: "uploading", progress: 0 });
  }, m = ($) => {
    if (!$) return;
    const c = [...$].map((y) => ({
      file: y,
      state: "pending",
      progress: 0
    }));
    z((y) => [...y, ...c]), x.current && (x.current.value = ""), o && c.forEach(_);
  }, N = ($) => {
    h.current.get($)?.abort(), h.current.delete($), z((y) => y.filter((S) => S.file.name !== $));
  }, b = i ?? /* @__PURE__ */ w("button", { type: "button", className: Mt.trigger, onClick: () => x.current?.click(), children: [
    /* @__PURE__ */ t(Ge, { name: "upload", size: 14 }),
    a
  ] });
  return tr(D, () => ({
    open: () => x.current?.click(),
    upload: () => C.forEach(($) => $.state === "pending" ? _($) : null)
  })), /* @__PURE__ */ w("div", { className: Mt.wrapper, children: [
    b,
    /* @__PURE__ */ t(
      "input",
      {
        ref: x,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: u,
        "data-testid": "upload-input",
        onChange: ($) => m($.target.files)
      }
    ),
    !i && C.length > 0 && /* @__PURE__ */ t("ul", { className: Mt.list, children: C.map(({ file: $, state: c, progress: y, message: S }) => /* @__PURE__ */ w("li", { className: Mt.row, "data-state": c, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: Mt.name, children: $.name }),
      /* @__PURE__ */ t("span", { className: Mt.size, children: vh($.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: Mt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": y,
          children: /* @__PURE__ */ t("span", { className: Mt.fill, style: { width: `${y}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: Mt.status, role: "status", children: c === "uploading" ? "Uploading" : c === "complete" ? "Complete" : c === "error" ? S ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Mt.remove,
          "aria-label": `Remove ${$.name}`,
          onClick: () => N($.name),
          children: /* @__PURE__ */ t(Ge, { name: "close", size: 14 })
        }
      )
    ] }, $.name)) })
  ] });
}), xh = "_zone_14tvz_1", wh = "_dragging_14tvz_23", $h = "_caption_14tvz_28", kh = "_browse_14tvz_40", Nh = "_disabled_14tvz_67", xn = {
  zone: xh,
  dragging: wh,
  caption: $h,
  browse: kh,
  disabled: Nh
};
function Sh(e, n) {
  return n ? n.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const s = r.slice(0, -1);
      return e.type.startsWith(s);
    }
    return e.type === r;
  }) : !0;
}
const _0 = He(function({
  accept: n,
  multiple: r = !1,
  onDrop: s,
  label: o = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: u = "Browse",
  disabled: a = !1,
  className: i
}, g) {
  const v = ce(null), [f, D] = Y(!1), x = (_) => {
    if (!_ || _.length === 0) return;
    const m = [..._].filter((N) => Sh(N, n ?? ""));
    m.length !== 0 && s?.(m);
  }, C = (_) => {
    a || (_.preventDefault(), D(!0));
  }, z = (_) => {
    a || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", D(!0));
  }, h = (_) => {
    a || _.currentTarget.contains(_.relatedTarget) || D(!1);
  }, d = (_) => {
    a || (_.preventDefault(), D(!1), x(_.dataTransfer.files));
  };
  return tr(g, () => ({
    open: () => v.current?.click()
  })), /* @__PURE__ */ w(
    "div",
    {
      role: "region",
      "aria-label": o,
      className: [xn.zone, f ? xn.dragging : null, a ? xn.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: C,
      onDragOver: z,
      onDragLeave: h,
      onDrop: d,
      children: [
        /* @__PURE__ */ t("p", { className: xn.caption, children: f ? l : o }),
        !a && /* @__PURE__ */ t("button", { type: "button", className: xn.browse, onClick: () => v.current?.click(), children: u }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: v,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (_) => {
              x(_.target.files), _.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Dh = "_root_1dfo5_1", Ch = "_menubar_1dfo5_5", zh = "_horizontal_1dfo5_15", Mh = "_vertical_1dfo5_20", Oh = "_itemWrapper_1dfo5_25", Ih = "_item_1dfo5_25", Th = "_disabled_1dfo5_61", Eh = "_icon_1dfo5_68", jh = "_text_1dfo5_75", Ah = "_caret_1dfo5_79", Lh = "_hasChildren_1dfo5_85", Rh = "_submenu_1dfo5_94", Bh = "_submenuItem_1dfo5_118", lt = {
  root: Dh,
  menubar: Ch,
  horizontal: zh,
  vertical: Mh,
  itemWrapper: Oh,
  item: Ih,
  disabled: Th,
  icon: Eh,
  text: jh,
  caret: Ah,
  hasChildren: Lh,
  submenu: Rh,
  submenuItem: Bh
};
function wn(e) {
  return !!e.disabled;
}
function p0({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: s,
  ariaLabel: o = "Menu",
  className: l
}) {
  const u = Ue(), a = ce(null), i = ce(null), [g, v] = Y(null), f = ce(0), D = ce(null), x = q(
    (d) => {
      const _ = { text: d.text, value: d.value, path: d.path };
      (r ?? s)?.(_);
    },
    [r, s]
  ), C = (d, _) => {
    if (!wn(d)) {
      if (d.children && d.children.length > 0) {
        const m = g === _, N = Date.now() - f.current < 600;
        if (m && N) {
          f.current = 0;
          return;
        }
        v((b) => b === _ ? null : _);
        return;
      }
      x(d), v(null);
    }
  }, z = (d) => {
    wn(d) || d.children && d.children.length > 0 || (x(d), v(null));
  };
  Se(() => {
    if (g == null) return;
    const d = (_) => {
      a.current && !a.current.contains(_.target) && v(null);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [g]), Se(() => {
    if (D.current != null && g === D.current) {
      const d = `${u}-submenu-${g}`;
      document.getElementById(d)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), D.current = null;
    }
  }, [g, u]);
  const h = (d) => {
    const _ = i.current;
    if (!_) return;
    const m = Array.from(
      _.querySelectorAll('[data-top="true"]')
    ).filter(($) => !$.hasAttribute("disabled") && $.getAttribute("aria-disabled") !== "true");
    if (g != null) {
      const $ = `${u}-submenu-${g}`, c = document.getElementById($);
      if (c) {
        const y = Array.from(c.querySelectorAll('[role="menuitem"]')).filter(
          (j) => j.getAttribute("aria-disabled") !== "true"
        ), S = document.activeElement, O = S ? y.indexOf(S) : -1;
        if (d.key === "ArrowDown") {
          d.preventDefault(), O === -1 ? y[0]?.focus() : y[(O + 1) % y.length]?.focus();
          return;
        }
        if (d.key === "ArrowUp") {
          d.preventDefault(), O === -1 ? y[y.length - 1]?.focus() : y[(O - 1 + y.length) % y.length]?.focus();
          return;
        }
        if (d.key === "Escape") {
          d.preventDefault(), v(null), _.querySelector(`[data-top="true"][data-index="${g}"]`)?.focus();
          return;
        }
        if (d.key === "Enter" || d.key === " ")
          return;
      }
      if (d.key === "Escape") {
        d.preventDefault(), v(null);
        return;
      }
    }
    const N = document.activeElement, b = N ? m.indexOf(N) : -1;
    if (d.key === "ArrowRight" || n === "vertical" && d.key === "ArrowDown") {
      if (d.preventDefault(), m.length === 0) return;
      const $ = b === -1 ? 0 : (b + 1) % m.length;
      m[$]?.focus();
      return;
    }
    if (d.key === "ArrowLeft" || n === "vertical" && d.key === "ArrowUp") {
      if (d.preventDefault(), m.length === 0) return;
      const $ = b === -1 ? m.length - 1 : (b - 1 + m.length) % m.length;
      m[$]?.focus();
      return;
    }
    if (d.key === "ArrowDown") {
      if (b >= 0) {
        const $ = N?.getAttribute("data-index"), c = $ != null ? Number($) : -1, y = c >= 0 ? e[c] : void 0;
        y?.children && y.children.length > 0 && !wn(y) && (d.preventDefault(), D.current = c, v(c));
      }
      return;
    }
    if (d.key === "Home") {
      d.preventDefault(), m[0]?.focus();
      return;
    }
    if (d.key === "End") {
      d.preventDefault(), m[m.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: a,
      "aria-label": o,
      className: [lt.root, lt[n], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t(
        "div",
        {
          ref: i,
          role: "menubar",
          "aria-label": o,
          className: lt.menubar,
          onKeyDown: h,
          children: e.map((d, _) => {
            const m = !!d.children && d.children.length > 0, N = g === _, b = wn(d), $ = `${u}-submenu-${_}`;
            return /* @__PURE__ */ w(
              "div",
              {
                className: lt.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && m && !b && (f.current = Date.now(), v(_));
                },
                onMouseLeave: () => {
                  n === "horizontal" && m && v((c) => c === _ ? null : c);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": _,
                      "data-dx-menu-item": "",
                      "aria-disabled": b || void 0,
                      "aria-haspopup": m ? "menu" : void 0,
                      "aria-expanded": m ? N : void 0,
                      "aria-controls": m ? $ : void 0,
                      "aria-current": (d.path && !m, void 0),
                      tabIndex: b ? -1 : 0,
                      disabled: b,
                      className: [lt.item, b ? lt.disabled : null, m ? lt.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => C(d, _),
                      children: [
                        d.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: d.icon }) : null,
                        /* @__PURE__ */ t("span", { className: lt.text, children: d.text }),
                        m ? /* @__PURE__ */ t("span", { className: lt.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  m && N ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: $,
                      role: "menu",
                      className: lt.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": d.text,
                      children: d.children?.map((c, y) => {
                        const S = wn(c), O = !!c.children && c.children.length > 0;
                        return /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": S || void 0,
                            "aria-haspopup": O ? "menu" : void 0,
                            tabIndex: S ? -1 : 0,
                            disabled: S,
                            className: [lt.submenuItem, S ? lt.disabled : null].filter(Boolean).join(" "),
                            onClick: () => z(c),
                            children: [
                              c.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: c.icon }) : null,
                              /* @__PURE__ */ t("span", { className: lt.text, children: c.text })
                            ]
                          },
                          `${c.text}-${y}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${d.text}-${_}`
            );
          })
        }
      )
    }
  );
}
const Ph = "_root_1hs3b_1", Fh = "_list_1hs3b_9", Kh = "_item_1hs3b_14", qh = "_trigger_1hs3b_18", Hh = "_disabled_1hs3b_44", Wh = "_expanded_1hs3b_51", Uh = "_icon_1hs3b_55", Vh = "_text_1hs3b_66", Xh = "_caret_1hs3b_73", Gh = "_open_1hs3b_80", Yh = "_submenu_1hs3b_84", Zh = "_submenuItem_1hs3b_93", Jh = "_nestedWrapper_1hs3b_122", Qh = "_nestedTrigger_1hs3b_127", em = "_nestedMenu_1hs3b_152", tm = "_iconOnly_1hs3b_160", Oe = {
  root: Ph,
  list: Fh,
  item: Kh,
  trigger: qh,
  disabled: Hh,
  expanded: Wh,
  icon: Uh,
  text: Vh,
  caret: Xh,
  open: Gh,
  submenu: Yh,
  submenuItem: Zh,
  nestedWrapper: Jh,
  nestedTrigger: Qh,
  nestedMenu: em,
  iconOnly: tm
};
function nm({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: s
}) {
  const o = !!e.children && e.children.length > 0, [l, u] = Y(!1), a = `${n}-nested-${r}`, i = !!e.disabled, g = () => {
    if (!i) {
      if (o) {
        u((f) => !f);
        return;
      }
      s({ text: e.text, value: e.value, path: e.path });
    }
  }, v = (f) => {
    f.key === "Enter" || f.key === " " ? (f.preventDefault(), g()) : f.key === "Escape" && l && (f.preventDefault(), u(!1));
  };
  return o ? /* @__PURE__ */ w("div", { className: Oe.nestedWrapper, children: [
    /* @__PURE__ */ w(
      "button",
      {
        type: "button",
        "aria-expanded": l,
        "aria-controls": a,
        "aria-disabled": i || void 0,
        disabled: i,
        tabIndex: i ? -1 : 0,
        className: [Oe.nestedTrigger, i ? Oe.disabled : null].filter(Boolean).join(" "),
        onClick: g,
        onKeyDown: v,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: Oe.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [Oe.caret, l ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    l ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: Oe.nestedMenu, children: e.children?.map((f, D) => {
      const x = !!f.disabled;
      return /* @__PURE__ */ w(
        "div",
        {
          role: "menuitem",
          "aria-disabled": x || void 0,
          tabIndex: x ? -1 : 0,
          className: [Oe.submenuItem, x ? Oe.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            x || f.children && f.children.length > 0 || s({ text: f.text, value: f.value, path: f.path });
          },
          onKeyDown: (C) => {
            if (C.key === "Enter" || C.key === " ") {
              if (C.preventDefault(), x) return;
              s({ text: f.text, value: f.value, path: f.path });
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
  ] }) : /* @__PURE__ */ w(
    "div",
    {
      role: "menuitem",
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : 0,
      className: [Oe.submenuItem, i ? Oe.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        i || s({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (f) => {
        if (f.key === "Enter" || f.key === " ") {
          if (f.preventDefault(), i) return;
          s({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ t("span", { className: Oe.text, children: e.text })
      ]
    }
  );
}
function h0({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: s,
  ShowArrow: o,
  displayStyle: l,
  DisplayStyle: u,
  onClick: a,
  Click: i,
  ariaLabel: g = "Panel menu",
  className: v
}) {
  const f = Ue(), D = n ?? r ?? !1, x = s ?? o ?? !0, C = l ?? u ?? "iconAndText", [z, h] = Y([]), d = q(
    (N) => {
      const b = { text: N.text, value: N.value, path: N.path };
      (a ?? i)?.(b);
    },
    [a, i]
  ), _ = (N, b, $) => {
    if (!$.disabled) {
      if (b) {
        h((c) => c.includes(N) ? c.filter((S) => S !== N) : D ? [...c, N] : [N]);
        return;
      }
      d($);
    }
  }, m = (N) => {
    const b = N.target;
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "Escape") {
        const $ = b.getAttribute("aria-controls");
        if ($) {
          const c = $.match(/-panel-(\d+)$/);
          if (c) {
            const y = Number(c[1]);
            h((S) => S.filter((O) => O !== y));
          }
        } else {
          const c = b.closest('[role="menu"]');
          if (c) {
            const S = c.id.match(/-panel-(\d+)$/);
            if (S) {
              const O = Number(S[1]);
              h((I) => I.filter((p) => p !== O)), document.getElementById(`${f}-trigger-${O}`)?.focus();
            }
          }
        }
        N.preventDefault();
        return;
      }
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const $ = Array.from(
          N.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((O) => !O.hasAttribute("disabled") && O.getAttribute("aria-disabled") !== "true"), c = $.indexOf(b);
        if (c === -1) return;
        N.preventDefault();
        const y = N.key === "ArrowDown" ? 1 : -1;
        $[(c + y + $.length) % $.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": g,
      className: [
        Oe.root,
        C === "icon" ? Oe.iconOnly : Oe.iconAndText,
        v
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ t("div", { className: Oe.list, role: "presentation", children: e.map((N, b) => {
        const $ = !!N.children && N.children.length > 0, c = z.includes(b), y = !!N.disabled, S = `${f}-panel-${b}`, O = `${f}-trigger-${b}`;
        return /* @__PURE__ */ w("div", { className: Oe.item, children: [
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              id: O,
              "aria-expanded": $ ? c : void 0,
              "aria-controls": $ ? S : void 0,
              "aria-disabled": y || void 0,
              disabled: y,
              tabIndex: y ? -1 : 0,
              className: [
                Oe.trigger,
                y ? Oe.disabled : null,
                c ? Oe.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => _(b, $, N),
              children: [
                N.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: N.icon }) : null,
                C === "iconAndText" ? /* @__PURE__ */ t("span", { className: Oe.text, children: N.text }) : /* @__PURE__ */ t("span", { className: Oe.text, "aria-label": N.text, children: N.icon ? null : N.text.slice(0, 1) }),
                $ && x ? /* @__PURE__ */ t("span", { className: [Oe.caret, c ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          $ && c ? /* @__PURE__ */ t("div", { id: S, role: "menu", className: Oe.submenu, "aria-labelledby": O, children: N.children?.map((j, I) => /* @__PURE__ */ t(
            nm,
            {
              item: j,
              baseId: f,
              parentKey: `${b}-${I}`,
              onEmit: d
            },
            `${j.text}-${I}`
          )) }) : null
        ] }, `${N.text}-${b}`);
      }) })
    }
  );
}
const rm = "_root_pjwno_1", sm = "_trigger_pjwno_7", om = "_defaultTrigger_pjwno_40", am = "_avatar_pjwno_46", lm = "_menu_pjwno_58", cm = "_item_pjwno_74", im = "_disabled_pjwno_88", dm = "_active_pjwno_97", um = "_icon_pjwno_107", fm = "_text_pjwno_114", Ot = {
  root: rm,
  trigger: sm,
  defaultTrigger: om,
  avatar: am,
  menu: lm,
  item: cm,
  disabled: im,
  active: dm,
  icon: um,
  text: fm
};
function m0({
  items: e,
  trigger: n,
  Template: r,
  onClick: s,
  Click: o,
  ariaLabel: l = "Profile menu",
  className: u
}) {
  const a = Ue(), i = `${a}-menu`, g = ce(null), v = ce(null), [f, D] = Y(!1), [x, C] = Y(-1), z = n ?? r, h = e.map((c, y) => c.disabled ? -1 : y).filter((c) => c >= 0), d = q(
    (c) => {
      if (c.disabled) return;
      const y = { text: c.text, path: c.path };
      (s ?? o)?.(y), D(!1), v.current?.focus();
    },
    [s, o]
  ), _ = q(() => {
    C(h[0] ?? -1), D(!0);
  }, [h]), m = q(() => {
    D(!1), C(-1), v.current?.focus();
  }, []);
  Se(() => {
    if (!f) return;
    const c = (y) => {
      g.current && !g.current.contains(y.target) && (D(!1), C(-1));
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, [f]), Se(() => {
    if (!f) return;
    const c = (y) => {
      y.key === "Escape" && (y.preventDefault(), m());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [f, m]);
  const N = (c) => {
    if (h.length === 0) return;
    const y = h.indexOf(x), S = y === -1 ? 0 : (y + c + h.length) % h.length, O = h[S];
    O != null && C(O);
  }, b = (c) => {
    if (!f) {
      (c.key === "ArrowDown" || c.key === "Enter" || c.key === " ") && (c.preventDefault(), _());
      return;
    }
    switch (c.key) {
      case "Escape":
        c.preventDefault(), m();
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
        if (c.preventDefault(), x >= 0) {
          const y = e[x];
          y && !y.disabled && d(y);
        }
        break;
      case "Tab":
        D(!1), C(-1);
        break;
    }
  }, $ = (c) => {
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
        if (c.preventDefault(), x >= 0) {
          const y = e[x];
          y && !y.disabled && d(y);
        }
        break;
      case "Escape":
        c.preventDefault(), m();
        break;
      case "Tab":
        D(!1), C(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: g,
      className: [Ot.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ w("nav", { "aria-label": l, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: v,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": l,
            className: Ot.trigger,
            onClick: () => f ? m() : _(),
            onKeyDown: b,
            children: z ?? /* @__PURE__ */ w("span", { className: Ot.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: Ot.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        f ? /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": x >= 0 ? `${a}-item-${x}` : void 0,
            className: Ot.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((c, y) => {
              const S = !!c.disabled, O = y === x;
              return /* @__PURE__ */ w(
                "div",
                {
                  id: `${a}-item-${y}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [Ot.item, O ? Ot.active : null, S ? Ot.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    S || d(c);
                  },
                  onMouseEnter: () => {
                    S || C(y);
                  },
                  children: [
                    c.icon ? /* @__PURE__ */ t("span", { className: Ot.icon, "aria-hidden": "true", children: c.icon }) : null,
                    /* @__PURE__ */ t("span", { className: Ot.text, children: c.text })
                  ]
                },
                `${c.text}-${y}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const _m = "_root_5fmpv_1", pm = "_bottomRight_5fmpv_11", hm = "_bottomLeft_5fmpv_16", mm = "_topRight_5fmpv_21", gm = "_topLeft_5fmpv_26", ym = "_menu_5fmpv_31", bm = "_itemWrapper_5fmpv_48", vm = "_tooltip_5fmpv_54", xm = "_main_5fmpv_76", wm = "_mainIcon_5fmpv_104", $m = "_mainOpen_5fmpv_109", km = "_item_5fmpv_48", Nm = "_disabled_5fmpv_141", Sm = "_itemIcon_5fmpv_148", dt = {
  root: _m,
  bottomRight: pm,
  bottomLeft: hm,
  topRight: mm,
  topLeft: gm,
  menu: ym,
  itemWrapper: bm,
  tooltip: vm,
  main: xm,
  mainIcon: wm,
  mainOpen: $m,
  item: km,
  disabled: Nm,
  itemIcon: Sm
};
function g0({
  items: e,
  position: n,
  Position: r,
  icon: s = "+",
  onClick: o,
  Click: l,
  ariaLabel: u = "Open menu",
  className: a
}) {
  const i = n ?? r ?? "bottom-right", v = `${Ue()}-menu`, f = ce(null), D = ce(null), [x, C] = Y(!1), z = q(
    (m) => {
      if (m.disabled) return;
      const N = { text: m.text, value: m.value };
      (o ?? l)?.(N), C(!1), D.current?.focus();
    },
    [o, l]
  );
  Se(() => {
    if (!x) return;
    const m = (N) => {
      f.current && !f.current.contains(N.target) && C(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [x]), Se(() => {
    if (!x) return;
    const m = (N) => {
      N.key === "Escape" && (C(!1), D.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [x]);
  const h = i === "bottom-right" ? dt.bottomRight : i === "bottom-left" ? dt.bottomLeft : i === "top-right" ? dt.topRight : dt.topLeft, d = (m) => {
    !x && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), C(!0)) : x && m.key === "Escape" && (m.preventDefault(), C(!1));
  }, _ = (m) => {
    m.key === "Escape" && (m.preventDefault(), C(!1), D.current?.focus());
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: f,
      className: [dt.root, h, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        x ? /* @__PURE__ */ t(
          "div",
          {
            id: v,
            role: "menu",
            "aria-label": u,
            className: dt.menu,
            onKeyDown: _,
            children: e.map((m, N) => {
              const b = !!m.disabled;
              return /* @__PURE__ */ w("div", { className: dt.itemWrapper, children: [
                /* @__PURE__ */ t("span", { className: dt.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": b || void 0,
                    title: m.text,
                    disabled: b,
                    tabIndex: b ? -1 : 0,
                    className: [dt.item, b ? dt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => z(m),
                    children: /* @__PURE__ */ t("span", { className: dt.itemIcon, "aria-hidden": "true", children: m.icon ?? "•" })
                  }
                )
              ] }, `${m.text}-${N}`);
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
            "aria-controls": v,
            "aria-label": u,
            onClick: () => C((m) => !m),
            onKeyDown: d,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [dt.mainIcon, x ? dt.mainOpen : null].filter(Boolean).join(" "), children: s })
          }
        )
      ]
    }
  );
}
const Dm = "_root_1qf28_1", Cm = "_list_1qf28_5", zm = "_item_1qf28_15", Mm = "_link_1qf28_22", Om = "_linkButton_1qf28_23", Im = "_current_1qf28_24", Tm = "_disabled_1qf28_68", Em = "_icon_1qf28_74", jm = "_text_1qf28_81", Am = "_separator_1qf28_85", We = {
  root: Dm,
  list: Cm,
  item: zm,
  link: Mm,
  linkButton: Om,
  current: Im,
  disabled: Tm,
  icon: Em,
  text: jm,
  separator: Am
};
function y0({ items: e, onClick: n, Click: r, ariaLabel: s = "Breadcrumb", className: o }) {
  const l = n ?? r, u = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": s, className: [We.root, o].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: We.list, children: e.map((a, i) => {
    const g = i === e.length - 1, v = !!a.disabled;
    return /* @__PURE__ */ w("li", { className: We.item, children: [
      g ? v ? /* @__PURE__ */ w(
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
      ) : a.path ? /* @__PURE__ */ w(
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
      ) : /* @__PURE__ */ w(
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
      ) : v ? /* @__PURE__ */ w(
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
      ) : a.path ? /* @__PURE__ */ w(
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
      ) : /* @__PURE__ */ w(
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
      g ? null : /* @__PURE__ */ t("span", { className: We.separator, "aria-hidden": "true", children: "/" })
    ] }, `${a.text}-${i}`);
  }) }) });
}
const Lm = "_root_yiemy_1", Rm = "_list_yiemy_5", Bm = "_item_yiemy_15", Pm = "_connector_yiemy_21", Fm = "_connectorCompleted_yiemy_30", Km = "_step_yiemy_34", qm = "_active_yiemy_69", Hm = "_completed_yiemy_75", Wm = "_circle_yiemy_79", Um = "_check_yiemy_109", Vm = "_icon_yiemy_114", Xm = "_number_yiemy_119", Gm = "_text_yiemy_124", ut = {
  root: Lm,
  list: Rm,
  item: Bm,
  connector: Pm,
  connectorCompleted: Fm,
  step: Km,
  active: qm,
  completed: Hm,
  circle: Wm,
  check: Um,
  icon: Vm,
  number: Xm,
  text: Gm
};
function b0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: s = 0,
  linear: o,
  Linear: l,
  onChange: u,
  Change: a,
  onSelectedIndexChange: i,
  ariaLabel: g = "Steps",
  className: v
}) {
  const f = o ?? l ?? !1, D = n ?? r, x = D !== void 0, [C, z] = Y(() => Math.min(Math.max(0, D ?? s), Math.max(0, e.length - 1))), d = Math.min(Math.max(0, x ? D : C), Math.max(0, e.length - 1)), _ = ce(null), m = q(
    ($) => {
      const c = Math.min(Math.max(0, $), Math.max(0, e.length - 1));
      x || z(c), (u ?? a ?? i)?.(c);
    },
    [x, u, a, i, e.length]
  ), N = q(
    ($, c) => !!(c.disabled || f && $ > d + 1),
    [f, d]
  ), b = ($) => {
    const c = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((O) => O.getAttribute("aria-disabled") !== "true" && !O.disabled), y = document.activeElement, S = y ? c.indexOf(y) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), c.length === 0) return;
      const O = S === -1 ? 0 : (S + 1) % c.length, j = c[O];
      j && j.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), c.length === 0) return;
      const O = S === -1 ? c.length - 1 : (S - 1 + c.length) % c.length, j = c[O];
      j && j.focus();
    } else $.key === "Home" ? ($.preventDefault(), c[0]?.focus()) : $.key === "End" && ($.preventDefault(), c[c.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": g,
      className: [ut.root, v].filter(Boolean).join(" "),
      onKeyDown: b,
      children: /* @__PURE__ */ t("ol", { ref: _, role: "list", className: ut.list, children: e.map(($, c) => {
        const y = c === d, S = c < d, O = N(c, $);
        return /* @__PURE__ */ w("li", { role: "listitem", className: ut.item, children: [
          c > 0 ? /* @__PURE__ */ t("span", { className: [ut.connector, S ? ut.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              "data-step": c,
              "aria-current": y ? "step" : void 0,
              "aria-disabled": O ? "true" : void 0,
              disabled: O,
              tabIndex: O ? -1 : 0,
              className: [
                ut.step,
                y ? ut.active : null,
                S ? ut.completed : null,
                O ? ut.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                O || m(c);
              },
              children: [
                /* @__PURE__ */ t("span", { className: ut.circle, "aria-hidden": "true", children: S ? /* @__PURE__ */ t("span", { className: ut.check, "aria-hidden": "true", children: "✓" }) : $.icon ? /* @__PURE__ */ t("span", { className: ut.icon, children: $.icon }) : /* @__PURE__ */ t("span", { className: ut.number, children: c + 1 }) }),
                /* @__PURE__ */ t("span", { className: ut.text, children: $.text })
              ]
            }
          )
        ] }, `${$.text}-${c}`);
      }) })
    }
  );
}
const Ym = "_root_1fegn_1", Zm = "_horizontal_1fegn_13", Jm = "_vertical_1fegn_17", Qm = "_pane_1fegn_21", eg = "_handle_1fegn_31", tg = "_handleHorizontal_1fegn_51", ng = "_handleVertical_1fegn_57", rg = "_handleGrip_1fegn_63", sg = "_handleCollapseHint_1fegn_75", og = "_collapseBtn_1fegn_79", ag = "_collapseBtnCollapsed_1fegn_109", kt = {
  root: Ym,
  horizontal: Zm,
  vertical: Jm,
  pane: Qm,
  handle: eg,
  handleHorizontal: tg,
  handleVertical: ng,
  handleGrip: rg,
  handleCollapseHint: sg,
  collapseBtn: og,
  collapseBtnCollapsed: ag
};
function $n(e, n) {
  if (!e) return n;
  const r = e.trim();
  if (r.endsWith("%")) {
    const o = parseFloat(r.slice(0, -1));
    return Number.isNaN(o) ? n : o;
  }
  if (r.endsWith("px")) {
    const o = parseFloat(r.slice(0, -2));
    return Number.isNaN(o) ? n : o;
  }
  const s = parseFloat(r);
  return Number.isNaN(s) ? n : s;
}
function Lt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function v0({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: s,
  Resize: o,
  onCollapse: l,
  Collapse: u,
  ariaLabel: a = "Splitter",
  className: i
}) {
  const g = e ?? n ?? "horizontal", v = g === "horizontal", f = ce(null), D = q(() => {
    const p = r.length;
    if (p === 0) return [];
    const M = r.map((T) => T.size ? $n(T.size, 100 / p) : 100 / p), E = M.reduce((T, A) => T + A, 0);
    return Math.abs(E - 100) > 0.01 && E > 0 ? M.map((T) => T / E * 100) : M;
  }, [r]), [x, C] = Y(() => D()), [z, h] = Y(() => r.map((p) => !!p.collapsed)), d = ce(x);
  Se(() => {
    h(r.map((p) => !!p.collapsed));
  }, [r]);
  const _ = q(() => r.map((p) => $n(p.min, 0)), [r]), m = q(() => r.map((p) => $n(p.max, 100)), [r]), N = q(
    (p, M) => {
      const E = { paneIndex: p, newSize: M, cancel: !1 };
      return (s ?? o)?.(E), !E.cancel;
    },
    [s, o]
  ), b = q(
    (p, M) => {
      const E = { paneIndex: p, collapse: M, cancel: !1 };
      return (l ?? u)?.(E), !E.cancel;
    },
    [l, u]
  ), $ = q(
    (p) => {
      const M = !z[p];
      b(p, M) && (M ? (d.current = [...x], h((E) => {
        const T = [...E];
        return T[p] !== void 0 && (T[p] = !0), T;
      }), C((E) => {
        const T = [...E], A = T[p] ?? 0, X = p < T.length - 1 ? p + 1 : p - 1;
        if (X >= 0 && X < T.length) {
          const H = T[X] ?? 0;
          T[X] = H + A, T[p] = 0;
        } else
          T[p] = 0;
        return T;
      })) : (h((E) => {
        const T = [...E];
        return T[p] !== void 0 && (T[p] = !1), T;
      }), C(() => {
        const E = [...d.current];
        return E.length !== r.length ? r.map(() => 100 / r.length) : E;
      })));
    },
    [z, x, r.length, b]
  ), c = ce(null), y = q(
    (p, M, E) => {
      const T = f.current;
      if (!T) return null;
      const A = T.getBoundingClientRect();
      let X;
      if (v) {
        if (A.width === 0) return null;
        X = (M - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        X = (E - A.top) / A.height * 100;
      }
      let H = 0;
      for (let Z = 0; Z < p; Z++) {
        const J = x[Z];
        J !== void 0 && (H += J);
      }
      return X - H;
    },
    [v, x]
  ), S = (p, M) => {
    M.preventDefault();
    const E = M.currentTarget;
    E.focus(), typeof E.setPointerCapture == "function" && E.setPointerCapture(M.pointerId), c.current = { handleIndex: p, pointerId: M.pointerId };
  }, O = (p) => {
    if (!c.current || c.current.pointerId !== p.pointerId) return;
    p.preventDefault();
    const M = c.current.handleIndex, E = y(M, p.clientX, p.clientY);
    if (E == null) return;
    const T = _(), A = m(), X = T[M] ?? 0, H = A[M] ?? 100, re = M + 1, Z = T[re] ?? 0, J = A[re] ?? 100, Q = x[M] ?? 0, G = x[re] ?? 0, K = Q + G;
    if (K <= 0) return;
    let L = Lt(E, X, H), se = K - L;
    if (se < Z) {
      if (se = Z, L = K - se, L < X || L > H) return;
    } else if (se > J && (se = J, L = K - se, L < X || L > H))
      return;
    L = Lt(L, X, H), se = K - L, N(M, L) && C((ie) => {
      const ee = [...ie];
      return ee[M] = L, ee[re] = se, ee;
    });
  }, j = (p) => {
    !c.current || c.current.pointerId !== p.pointerId || (c.current = null);
  }, I = (p, M) => {
    const E = _(), T = m(), A = p, X = p + 1, H = x[A] ?? 0, re = x[X] ?? 0, Z = H + re;
    let J = 0;
    const Q = !!r[A]?.collapsible, G = !!r[X]?.collapsible;
    if (v ? M.key === "ArrowLeft" ? J = -5 : M.key === "ArrowRight" && (J = 5) : M.key === "ArrowUp" ? J = -5 : M.key === "ArrowDown" && (J = 5), M.key === "Home") {
      M.preventDefault();
      let K = E[A] ?? 0, L = Z - K;
      if (L = Lt(L, E[X] ?? 0, T[X] ?? 100), K = Z - L, K = Lt(K, E[A] ?? 0, T[A] ?? 100), !N(A, K)) return;
      C((se) => {
        const ie = [...se];
        return ie[A] = K, ie[X] = L, ie;
      });
      return;
    }
    if (M.key === "End") {
      M.preventDefault();
      let K = T[A] ?? 100;
      K = Math.min(K, Z - (E[X] ?? 0));
      let L = Z - K;
      if (L = Lt(L, E[X] ?? 0, T[X] ?? 100), K = Z - L, K = Lt(K, E[A] ?? 0, T[A] ?? 100), !N(A, K)) return;
      C((se) => {
        const ie = [...se];
        return ie[A] = K, ie[X] = L, ie;
      });
      return;
    }
    if ((M.key === "Enter" || M.key === " ") && (Q || G)) {
      M.preventDefault(), $(Q ? A : X);
      return;
    }
    if (J !== 0) {
      M.preventDefault();
      let K = H + J, L = Z - K;
      const se = E[A] ?? 0, ie = T[A] ?? 100, ee = E[X] ?? 0, ue = T[X] ?? 100;
      if (K = Lt(K, se, ie), L = Z - K, (L < ee || L > ue) && (L = Lt(L, ee, ue), K = Z - L, K = Lt(K, se, ie), L = Z - K), !N(A, K)) return;
      C((me) => {
        const xe = [...me];
        return xe[A] = K, xe[X] = L, xe;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: f,
      className: [kt.root, v ? kt.horizontal : kt.vertical, i].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((p, M) => {
        const E = !!z[M], T = E ? 0 : x[M] ?? 100 / r.length, A = E ? { display: "none" } : v ? { flexBasis: `${T}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${T}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, X = $n(p.min, 0), H = $n(p.max, 100), re = M < r.length - 1, Z = !!r[M + 1]?.collapsible;
        return /* @__PURE__ */ w("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ w(
            "div",
            {
              role: "group",
              "aria-label": p.label ?? `Pane ${M + 1}`,
              className: kt.pane,
              style: A,
              "data-collapsed": E ? "true" : void 0,
              children: [
                E ? null : p.children,
                p.collapsible && !E ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: kt.collapseBtn,
                    "aria-label": `Collapse pane ${M + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(M),
                    children: v ? "◀" : "▲"
                  }
                ) : null,
                p.collapsible && E ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: kt.collapseBtn,
                    "aria-label": `Expand pane ${M + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(M),
                    children: v ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          E && p.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: kt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${M + 1}`,
                "aria-expanded": "false",
                onClick: () => $(M),
                children: v ? "▶" : "▼"
              }
            )
          ) : null,
          re ? /* @__PURE__ */ w(
            "div",
            {
              role: "separator",
              "aria-orientation": g,
              "aria-valuemin": X,
              "aria-valuemax": H,
              "aria-valuenow": Math.round(T),
              "aria-label": `Resize handle ${M + 1}`,
              tabIndex: E || z[M + 1] ? -1 : 0,
              className: [kt.handle, v ? kt.handleHorizontal : kt.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (J) => S(M, J),
              onPointerMove: O,
              onPointerUp: j,
              onKeyDown: (J) => I(M, J),
              children: [
                /* @__PURE__ */ t("span", { className: kt.handleGrip, "aria-hidden": "true" }),
                (p.collapsible || Z) && /* @__PURE__ */ t("span", { className: kt.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, M);
      })
    }
  );
}
const lg = "_root_h36xh_1", cg = "_list_h36xh_5", ig = "_vertical_h36xh_14", dg = "_horizontal_h36xh_20", ug = "_item_h36xh_28", fg = "_link_h36xh_32", _g = "_active_h36xh_57", sn = {
  root: lg,
  list: cg,
  vertical: ig,
  horizontal: dg,
  item: ug,
  link: fg,
  active: _g
};
function x0({
  items: e,
  selector: n,
  Selector: r,
  orientation: s,
  Orientation: o,
  onClick: l,
  Click: u,
  ariaLabel: a = "Table of contents",
  className: i
}) {
  const g = n ?? r, v = s ?? o ?? "vertical", [f, D] = Y(() => e[0]?.selector ?? null), x = ce(f);
  x.current = f;
  const C = q(
    (z, h) => {
      if (D(z.selector), (l ?? u)?.({ text: z.text, selector: z.selector }), h) {
        try {
          h.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          h.scrollIntoView();
        }
        const _ = h;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [l, u]
  );
  return Se(() => {
    if (e.length === 0) return;
    const h = (() => {
      if (g) {
        const b = document.querySelector(g);
        if (b) return b;
      }
      return window;
    })();
    let d = null;
    const _ = /* @__PURE__ */ new Map(), m = () => {
      let b = null, $ = null;
      for (const y of e) {
        const S = document.querySelector(y.selector);
        if (!S) continue;
        _.set(y.selector, S);
        const O = S.getBoundingClientRect();
        let j = O.top;
        if (h !== window) {
          const I = h.getBoundingClientRect();
          j = O.top - I.top;
        }
        j <= 80 ? (!$ || j > $.el.getBoundingClientRect().top - (h !== window ? h.getBoundingClientRect().top : 0)) && ($ = { sel: y.selector, el: S }) : (!b || j < b.top) && (b = { sel: y.selector, top: j });
      }
      const c = $?.sel ?? b?.sel ?? e[0]?.selector ?? null;
      c && c !== x.current && D(c);
    }, N = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const b = h === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: h, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      d = new IntersectionObserver(($) => {
        const c = $.filter((y) => y.isIntersecting).sort((y, S) => y.boundingClientRect.top - S.boundingClientRect.top);
        if (c[0]) {
          const y = c[0].target;
          for (const S of e) {
            if (document.querySelector(S.selector) === y) {
              D(S.selector);
              break;
            }
            if (S.selector.startsWith("#") && y.id === S.selector.slice(1)) {
              D(S.selector);
              break;
            }
          }
        } else
          m();
      }, b);
      for (const $ of e) {
        const c = document.querySelector($.selector);
        c && (d.observe(c), _.set($.selector, c));
      }
    }
    return h === window ? (window.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", N), d?.disconnect();
    }) : (h.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      h.removeEventListener("scroll", N), d?.disconnect();
    });
  }, [e, g]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [sn.root, sn[v], i].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: sn.list, children: e.map((z) => {
    const h = z.selector === f;
    return /* @__PURE__ */ t("li", { className: sn.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: z.selector.startsWith("#") || z.selector.startsWith(".") ? z.selector : `#${z.selector}`,
        className: [sn.link, h ? sn.active : null].filter(Boolean).join(" "),
        "aria-current": h ? "location" : void 0,
        onClick: (d) => {
          d.preventDefault();
          const _ = document.querySelector(z.selector);
          C(z, _);
        },
        children: z.text
      }
    ) }, `${z.text}-${z.selector}`);
  }) }) });
}
const pg = "_root_c923v_1", hg = "_viewport_c923v_17", mg = "_slide_c923v_24", gg = "_active_c923v_33", yg = "_arrow_c923v_37", bg = "_prev_c923v_71", vg = "_next_c923v_75", xg = "_pauseBtn_c923v_79", wg = "_indicators_c923v_110", $g = "_indicator_c923v_110", kg = "_indicatorActive_c923v_145", Nt = {
  root: pg,
  viewport: hg,
  slide: mg,
  active: gg,
  arrow: yg,
  prev: bg,
  next: vg,
  pauseBtn: xg,
  indicators: wg,
  indicator: $g,
  indicatorActive: kg
};
function w0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: s = 0,
  auto: o,
  Auto: l,
  interval: u,
  Interval: a,
  pauseOnHover: i,
  PauseOnHover: g,
  showArrows: v,
  ShowArrows: f,
  showIndicators: D,
  ShowIndicators: x,
  onChange: C,
  Change: z,
  ariaLabel: h = "Carousel",
  className: d
}) {
  const _ = n ?? r, m = _ !== void 0, [N, b] = Y(() => Math.min(Math.max(0, _ ?? s), Math.max(0, e.length - 1))), $ = m ? _ : N, c = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), y = o ?? l ?? !1, S = u ?? a ?? 3e3, O = i ?? g ?? !0, j = v ?? f ?? !0, I = D ?? x ?? !0, [p, M] = Y(!1), [E, T] = Y(!1), A = p || E, X = ce(null), H = Ue(), re = q(
    (ee) => {
      const ue = e.length === 0 ? 0 : (ee % e.length + e.length) % e.length;
      m || b(ue), (C ?? z)?.(ue);
    },
    [m, C, z, e.length]
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
    if (!y || A || e.length <= 1) return;
    const ee = setInterval(() => {
      re(c + 1);
    }, S);
    return () => clearInterval(ee);
  }, [y, A, S, c, re, e.length]);
  const G = (ee) => {
    e.length !== 0 && (ee.key === "ArrowLeft" ? (ee.preventDefault(), Z()) : ee.key === "ArrowRight" ? (ee.preventDefault(), J()) : ee.key === "Home" ? (ee.preventDefault(), Q(0)) : ee.key === "End" && (ee.preventDefault(), Q(e.length - 1)));
  }, K = () => {
    O && y && T(!0);
  }, L = () => {
    O && y && T(!1);
  }, se = () => {
    O && y && T(!0);
  }, ie = () => {
    O && y && T(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ w(
    "div",
    {
      ref: X,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": h,
      tabIndex: 0,
      className: [Nt.root, d].filter(Boolean).join(" "),
      onKeyDown: G,
      onMouseEnter: K,
      onMouseLeave: L,
      onFocusCapture: se,
      onBlurCapture: ie,
      children: [
        /* @__PURE__ */ t("div", { id: H, className: Nt.viewport, children: e.map((ee, ue) => {
          const me = ue === c;
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
        j && e.length > 1 ? /* @__PURE__ */ w(Me, { children: [
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
        y ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": p ? "Resume" : "Pause",
            "aria-pressed": p,
            onClick: () => M((ee) => !ee),
            children: p ? "▶" : "⏸"
          }
        ) : null,
        I && e.length > 1 ? /* @__PURE__ */ t("div", { className: Nt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ee, ue) => {
          const me = ue === c;
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
const Ng = "_root_yo0cc_1", Sg = "_group_yo0cc_20", Dg = "_itemWrapper_yo0cc_30", Cg = "_treeitem_yo0cc_34", zg = "_disabled_yo0cc_50", Mg = "_selected_yo0cc_60", Og = "_caret_yo0cc_66", Ig = "_caretIcon_yo0cc_113", Tg = "_caretOpen_yo0cc_120", Eg = "_caretPlaceholder_yo0cc_124", jg = "_label_yo0cc_130", Ag = "_loading_yo0cc_137", Lg = "_loadingRow_yo0cc_143", Rg = "_empty_yo0cc_149", ct = {
  root: Ng,
  group: Sg,
  itemWrapper: Dg,
  treeitem: Cg,
  disabled: zg,
  selected: Mg,
  caret: Og,
  caretIcon: Ig,
  caretOpen: Tg,
  caretPlaceholder: Eg,
  label: jg,
  loading: Ag,
  loadingRow: Lg,
  empty: Rg
};
function $0({
  data: e,
  Data: n,
  children: r,
  Children: s,
  textProperty: o,
  TextProperty: l,
  keyProperty: u,
  KeyProperty: a,
  selectionMode: i,
  SelectionMode: g,
  selectedItem: v,
  SelectedItem: f,
  selectedItems: D,
  SelectedItems: x,
  defaultSelectedItem: C,
  defaultSelectedItems: z,
  onChange: h,
  Change: d,
  onExpand: _,
  Expand: m,
  onCollapse: N,
  Collapse: b,
  loadChildData: $,
  LoadChildData: c,
  template: y,
  Template: S,
  itemTemplate: O,
  ItemTemplate: j,
  ariaLabel: I,
  AriaLabel: p,
  className: M
}) {
  const E = e ?? n ?? [], T = r ?? s, A = o ?? l ?? "text", X = u ?? a ?? "id", H = i ?? g ?? "single", re = I ?? p ?? "Tree", Z = $ ?? c, J = y ?? S ?? O ?? j, Q = q(
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
      if (T) {
        const fe = T(W);
        if (fe !== void 0) return fe;
      }
      const ae = W.children;
      if (Array.isArray(ae)) return ae;
    },
    [T]
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
  ), [se, ie] = Y(() => L(E)), [ee, ue] = Y(() => /* @__PURE__ */ new Map()), [me, xe] = Y(() => /* @__PURE__ */ new Set()), Re = v ?? f, Ie = D ?? x, Xe = H === "multiple" ? Ie !== void 0 : Re !== void 0, Ze = q(() => {
    if (H === "multiple") {
      if (z && z.length > 0)
        return new Set(z.map((fe) => Q(fe)));
      const W = /* @__PURE__ */ new Set(), ae = (fe) => {
        for (const he of fe) {
          he.selected && W.add(Q(he));
          const de = K(he);
          de && ae(de);
        }
      };
      return ae(E), W;
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
      return ae(E), W ? /* @__PURE__ */ new Set([W]) : /* @__PURE__ */ new Set();
    }
  }, [H, C, z, Q, K, E]), [Pe, Ye] = Y(() => Ze()), Fe = $e(() => {
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
      if (fe(E), !ae) {
        for (const he of ee.values())
          if (fe(he)) break;
      }
      return ae;
    },
    [E, ee, Q, K]
  ), V = q(() => {
    const W = /* @__PURE__ */ new Map(), ae = (fe) => {
      for (const he of fe) {
        const de = Q(he);
        W.set(de, he);
        const Ae = ee.get(de) ?? K(he);
        Ae && ae(Ae);
      }
    };
    return ae(E), W;
  }, [E, ee, Q, K]), k = q(
    (W) => {
      const ae = Q(W);
      if (!W.disabled)
        if (H === "multiple") {
          const he = new Set(Fe);
          he.has(ae) ? he.delete(ae) : he.add(ae), Xe || Ye(he);
          const de = h ?? d;
          if (de) {
            const ye = V(), Ae = [];
            for (const Ke of he) {
              const R = ye.get(Ke) ?? Je(Ke);
              R && Ae.push(R);
            }
            de({ item: W, selectedItems: Ae });
          }
        } else if (!Fe.has(ae) || Fe.size !== 1 || !Fe.has(ae)) {
          Xe || Ye(/* @__PURE__ */ new Set([ae]));
          const de = h ?? d;
          de && de({ item: W, selectedItem: W });
        } else {
          const de = h ?? d;
          de && de({ item: W, selectedItem: W });
        }
    },
    [Q, H, Fe, Xe, h, d, V, Je]
  ), B = q(
    async (W) => {
      const ae = Q(W);
      if (!!W.disabled) return;
      const he = se.has(ae), de = _ ?? m, ye = N ?? b, Ae = K(W), R = ee.get(ae) ?? Ae, ze = !(R !== void 0 && R.length > 0) && Z != null;
      if (he) {
        ie((Ne) => {
          const Ee = new Set(Ne);
          return Ee.delete(ae), Ee;
        }), ye?.({ item: W });
        return;
      }
      if (ze) {
        if (me.has(ae)) return;
        xe((Ne) => {
          const Ee = new Set(Ne);
          return Ee.add(ae), Ee;
        });
        try {
          const Ee = await Z(W);
          ue((et) => {
            const it = new Map(et);
            return it.set(ae, Ee), it;
          }), ie((et) => {
            const it = new Set(et);
            return it.add(ae), it;
          }), de?.({ item: W });
        } catch {
        } finally {
          xe((Ne) => {
            const Ee = new Set(Ne);
            return Ee.delete(ae), Ee;
          });
        }
        return;
      }
      ie((Ne) => {
        const Ee = new Set(Ne);
        return Ee.add(ae), Ee;
      }), de?.({ item: W });
    },
    [Q, se, K, ee, Z, me, _, m, N, b]
  ), U = $e(() => {
    const W = [], ae = (fe, he, de) => {
      fe.forEach((ye, Ae) => {
        const Ke = Q(ye), R = G(ye), le = ee.get(Ke) ?? K(ye);
        let ze;
        ee.has(Ke) ? ze = ee.get(Ke).length > 0 : le !== void 0 ? ze = le.length > 0 : Z ? ze = !0 : ze = !1;
        const Ne = se.has(Ke), Ee = !!ye.disabled, et = fe.length, it = Ae + 1;
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
          disabled: Ee
        }), ze && Ne) {
          const Tt = ee.get(Ke) ?? le;
          Tt && Tt.length > 0 && ae(Tt, he + 1, Ke);
        }
      });
    };
    return ae(E, 1, null), W;
  }, [E, Q, G, K, ee, se, Z, me]), [oe, te] = Y(() => U[0]?.key ?? null), pe = ce(""), ke = ce(null), Be = ce(null);
  Se(() => {
    if (!oe && U.length > 0) {
      const W = U[0];
      W && te(W.key);
    } else if (oe && !U.some((W) => W.key === oe)) {
      const W = U[0];
      te(W ? W.key : null);
    }
  }, [U, oe]), Se(() => {
    if (oe) {
      const W = Be.current?.querySelector(`[data-key="${CSS.escape(oe)}"]`);
      let ae = null;
      W || (ae = Be.current?.querySelector(`[data-key="${oe}"]`) ?? null);
      const fe = W ?? ae;
      fe && document.activeElement !== fe && Be.current?.contains(document.activeElement) && fe.focus();
    }
  }, [oe]);
  const Te = q(
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
      const ae = oe ? U.findIndex((de) => de.key === oe) : -1, fe = ae >= 0 ? U[ae] : void 0;
      let he = null;
      if (W.key === "ArrowDown") {
        if (W.preventDefault(), ae === -1)
          he = U[0]?.key ?? null;
        else {
          const de = (ae + 1) % U.length, ye = U[de];
          ye && (he = ye.key);
        }
        he && Te(he);
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
        he && Te(he);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !fe) return;
        if (fe.hasChildren && !fe.expanded)
          B(fe.item);
        else if (fe.hasChildren && fe.expanded) {
          const de = ae + 1, ye = U[de];
          ye && ye.parentKey === fe.key && Te(ye.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !fe) return;
        if (fe.hasChildren && fe.expanded)
          B(fe.item);
        else {
          const de = rt(fe.key);
          de && Te(de);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const de = U[0];
        de && Te(de.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const de = U[U.length - 1];
        de && Te(de.key);
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
        R && Te(R.key);
        return;
      }
    },
    [U, oe, Te, B, k, rt]
  ), ne = q(() => {
    if (!oe && U.length > 0) {
      const W = U[0];
      W && te(W.key);
    }
  }, [oe, U]), De = (W, ae, fe) => /* @__PURE__ */ t("ul", { role: "group", className: ct.group, children: W.map((he, de) => {
    const ye = Q(he), Ae = G(he), Ke = ee.get(ye) ?? K(he);
    let R;
    ee.has(ye) ? R = ee.get(ye).length > 0 : Ke !== void 0 ? R = Ke.length > 0 : Z ? R = !0 : R = !1;
    const le = se.has(ye), ze = Fe.has(ye), Ne = !!he.disabled, Ee = me.has(ye), et = oe === ye, it = W.length, Tt = de + 1, zn = J ? J(he) : Ae;
    return /* @__PURE__ */ w("li", { role: "none", className: ct.itemWrapper, children: [
      /* @__PURE__ */ w(
        "div",
        {
          role: "treeitem",
          "data-key": ye,
          tabIndex: et ? 0 : -1,
          "aria-expanded": R ? le : void 0,
          "aria-selected": ze,
          "aria-level": ae,
          "aria-setsize": it,
          "aria-posinset": Tt,
          "aria-disabled": Ne || void 0,
          "aria-busy": Ee || void 0,
          className: [
            ct.treeitem,
            ze ? ct.selected : null,
            Ne ? ct.disabled : null,
            et ? ct.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            Te(ye), Ne || k(he);
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
                  ln.stopPropagation(), Te(ye), B(he);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [ct.caretIcon, le ? ct.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: ct.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: ct.label, children: zn }),
            Ee ? /* @__PURE__ */ t("span", { className: ct.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && le ? Ee ? /* @__PURE__ */ t("div", { className: ct.loadingRow, "aria-busy": "true", children: "Loading…" }) : Ke && Ke.length > 0 ? De(Ke, ae + 1) : ee.has(ye) && ee.get(ye).length > 0 ? De(ee.get(ye), ae + 1) : (Ke && Ke.length === 0, null) : null
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
      className: [ct.root, M].filter(Boolean).join(" "),
      onKeyDown: xt,
      onFocus: ne,
      children: E.length === 0 ? /* @__PURE__ */ t("div", { className: ct.empty, children: "No items" }) : De(E, 1)
    }
  );
}
const Bg = "_root_u0yr1_1", Pg = "_panel_u0yr1_8", Fg = "_header_u0yr1_19", Kg = "_listbox_u0yr1_28", qg = "_option_u0yr1_42", Hg = "_disabled_u0yr1_57", Wg = "_active_u0yr1_66", Ug = "_selected_u0yr1_70", Vg = "_empty_u0yr1_86", Xg = "_controls_u0yr1_93", Gg = "_reorder_u0yr1_102", Yg = "_btn_u0yr1_110", Le = {
  root: Bg,
  panel: Pg,
  header: Fg,
  listbox: Kg,
  option: qg,
  disabled: Hg,
  active: Wg,
  selected: Ug,
  empty: Vg,
  controls: Xg,
  reorder: Gg,
  btn: Yg
};
function tt(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function Rn(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function k0({
  source: e,
  Source: n,
  target: r,
  Target: s,
  value: o,
  Value: l,
  targetValue: u,
  TargetValue: a,
  data: i,
  Data: g,
  onSourceChange: v,
  SourceChange: f,
  onTargetChange: D,
  TargetChange: x,
  keyProperty: C,
  KeyProperty: z,
  onMove: h,
  Move: d,
  ariaLabel: _,
  AriaLabel: m,
  className: N
}) {
  const b = C ?? z ?? "id", $ = _ ?? m ?? "PickList", c = e ?? n ?? o ?? l ?? i ?? g ?? [], y = r ?? s ?? u ?? a ?? [], [S, O] = Y(() => [...c]), [j, I] = Y(() => [...y]);
  Se(() => {
    const k = e ?? n ?? o ?? l ?? i ?? g;
    k !== void 0 && O([...k]);
  }, [e, n, o, l, i, g]), Se(() => {
    const k = r ?? s ?? u ?? a;
    k !== void 0 && I([...k]);
  }, [r, s, u, a]);
  const [p, M] = Y(() => /* @__PURE__ */ new Set()), [E, T] = Y(() => /* @__PURE__ */ new Set()), [A, X] = Y(() => {
    const k = c.findIndex((B) => !B.disabled);
    return k >= 0 ? k : 0;
  }), [H, re] = Y(() => {
    const k = y.findIndex((B) => !B.disabled);
    return k >= 0 ? k : 0;
  }), Z = $e(() => S.map((k, B) => k.disabled ? -1 : B).filter((k) => k >= 0), [S]), J = $e(() => j.map((k, B) => k.disabled ? -1 : B).filter((k) => k >= 0), [j]);
  Se(() => {
    if (A >= S.length) {
      const k = Z[Z.length - 1];
      X(k ?? 0);
    } else if (S.length > 0 && Z.length > 0 && !Z.includes(A)) {
      const k = Z[0];
      k !== void 0 && X(k);
    }
  }, [A, S.length, Z]), Se(() => {
    if (H >= j.length) {
      const k = J[J.length - 1];
      re(k ?? 0);
    } else if (j.length > 0 && J.length > 0 && !J.includes(H)) {
      const k = J[0];
      k !== void 0 && re(k);
    }
  }, [H, j.length, J]), Se(() => {
    M((k) => {
      const B = /* @__PURE__ */ new Set();
      for (const U of k)
        S.some((te) => tt(te, b) === U && !te.disabled) && B.add(U);
      return B;
    });
  }, [S, b]), Se(() => {
    T((k) => {
      const B = /* @__PURE__ */ new Set();
      for (const U of k)
        j.some((te) => tt(te, b) === U && !te.disabled) && B.add(U);
      return B;
    });
  }, [j, b]);
  const Q = q(
    (k) => {
      (v ?? f)?.(k);
    },
    [v, f]
  ), G = q(
    (k) => {
      (D ?? x)?.(k);
    },
    [D, x]
  ), K = q(
    (k) => {
      (h ?? d)?.(k);
    },
    [h, d]
  ), L = q(
    (k) => {
      const B = S[k];
      if (!B || B.disabled) return;
      const U = tt(B, b);
      M((oe) => {
        const te = new Set(oe);
        return te.has(U) ? te.delete(U) : te.add(U), te;
      }), X(k);
    },
    [S, b]
  ), se = q(
    (k) => {
      const B = j[k];
      if (!B || B.disabled) return;
      const U = tt(B, b);
      T((oe) => {
        const te = new Set(oe);
        return te.has(U) ? te.delete(U) : te.add(U), te;
      }), re(k);
    },
    [j, b]
  ), ie = q(() => {
    const k = [], B = [];
    for (const pe of S) {
      const ke = tt(pe, b);
      p.has(ke) && !pe.disabled ? k.push(pe) : B.push(pe);
    }
    if (k.length === 0) return;
    const U = B, oe = [...j, ...k];
    O(U), I(oe), M(/* @__PURE__ */ new Set());
    const te = new Set(k.map((pe) => tt(pe, b)));
    T(te), Q(U), G(oe), K({ source: U, target: oe, moved: k, direction: "toTarget" });
  }, [S, j, p, b, Q, G, K]), ee = q(() => {
    const k = [], B = [];
    for (const pe of j) {
      const ke = tt(pe, b);
      E.has(ke) && !pe.disabled ? k.push(pe) : B.push(pe);
    }
    if (k.length === 0) return;
    const U = B, oe = [...S, ...k];
    I(U), O(oe), T(/* @__PURE__ */ new Set());
    const te = new Set(k.map((pe) => tt(pe, b)));
    M(te), Q(oe), G(U), K({ source: oe, target: U, moved: k, direction: "toSource" });
  }, [S, j, E, b, Q, G, K]), ue = q(() => {
    const k = S.filter((oe) => !oe.disabled);
    if (k.length === 0) return;
    const B = S.filter((oe) => !!oe.disabled), U = [...j, ...k];
    O(B), I(U), M(/* @__PURE__ */ new Set()), Q(B), G(U), K({ source: B, target: U, moved: k, direction: "allToTarget" });
  }, [S, j, b, Q, G, K]), me = q(() => {
    const k = j.filter((oe) => !oe.disabled);
    if (k.length === 0) return;
    const B = j.filter((oe) => !!oe.disabled), U = [...S, ...k];
    I(B), O(U), T(/* @__PURE__ */ new Set()), Q(U), G(B), K({ source: U, target: B, moved: k, direction: "allToSource" });
  }, [S, j, Q, G, K]), xe = q(() => {
    if (E.size === 0) return;
    const k = [...j], B = E, U = [];
    for (let te = 1; te < k.length; te++) {
      const pe = k[te], ke = k[te - 1];
      if (!pe || !ke) continue;
      const Be = tt(pe, b), Te = tt(ke, b);
      B.has(Be) && !B.has(Te) && !pe.disabled && !ke.disabled && (k[te - 1] = pe, k[te] = ke, U.push(pe));
    }
    if (U.length === 0) return;
    I(k), G(k), K({ source: S, target: k, moved: U, direction: "up" });
    const oe = Array.from(B)[0];
    if (oe) {
      const te = k.findIndex((pe) => tt(pe, b) === oe);
      te >= 0 && re(te);
    }
  }, [j, E, b, S, G, K]), Re = q(() => {
    if (E.size === 0) return;
    const k = [...j], B = E, U = [];
    for (let te = k.length - 2; te >= 0; te--) {
      const pe = k[te], ke = k[te + 1];
      if (!pe || !ke) continue;
      const Be = tt(pe, b), Te = tt(ke, b);
      B.has(Be) && !B.has(Te) && !pe.disabled && !ke.disabled && (k[te] = ke, k[te + 1] = pe, U.push(pe));
    }
    if (U.length === 0) return;
    I(k), G(k), K({ source: S, target: k, moved: U, direction: "down" });
    const oe = Array.from(B)[0];
    if (oe) {
      const te = k.findIndex((pe) => tt(pe, b) === oe);
      te >= 0 && re(te);
    }
  }, [j, E, b, S, G, K]), Ie = p.size > 0, Ve = E.size > 0, be = ce(""), Xe = ce(null), Ze = ce(""), Pe = ce(null), Ye = q(
    (k) => {
      if (S.length === 0) return;
      const B = Z;
      if (B.length === 0) return;
      const U = B.includes(A) ? A : B[0] ?? 0;
      let oe = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const te = B.indexOf(U);
        oe = B[(te + 1) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const te = B.indexOf(U);
        oe = B[(te - 1 + B.length) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), oe = B[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), oe = B[B.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), L(U);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const te = (be.current + k.key).toLowerCase();
        be.current = te, Xe.current && clearTimeout(Xe.current), Xe.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const pe = [...B, ...B], ke = B.indexOf(U) + 1, Be = pe.slice(ke).find((Te) => Rn(S[Te]).toLowerCase().startsWith(te));
        Be != null && X(Be);
        return;
      }
      oe >= 0 && X(oe);
    },
    [S, Z, A, L]
  ), Fe = q(
    (k) => {
      if (j.length === 0) return;
      const B = J;
      if (B.length === 0) return;
      const U = B.includes(H) ? H : B[0] ?? 0;
      let oe = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const te = B.indexOf(U);
        oe = B[(te + 1) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const te = B.indexOf(U);
        oe = B[(te - 1 + B.length) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), oe = B[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), oe = B[B.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), se(U);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const te = (Ze.current + k.key).toLowerCase();
        Ze.current = te, Pe.current && clearTimeout(Pe.current), Pe.current = setTimeout(() => {
          Ze.current = "";
        }, 500);
        const pe = [...B, ...B], ke = B.indexOf(U) + 1, Be = pe.slice(ke).find((Te) => Rn(j[Te]).toLowerCase().startsWith(te));
        Be != null && re(Be);
        return;
      }
      oe >= 0 && re(oe);
    },
    [j, J, H, se]
  ), Je = ce(null), V = ce(null);
  return /* @__PURE__ */ w("div", { className: [Le.root, N].filter(Boolean).join(" "), "aria-label": $, children: [
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
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
          children: S.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : S.map((k, B) => {
            const U = tt(k, b), oe = p.has(U), te = B === A, pe = !!k.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": oe,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Le.option,
                  oe ? Le.selected : null,
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
    /* @__PURE__ */ w("div", { className: Le.controls, children: [
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
          "aria-disabled": S.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: S.filter((k) => !k.disabled).length === 0,
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
          "aria-disabled": S.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: S.filter((k) => !k.disabled).length === 0,
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
          "aria-disabled": j.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: j.filter((k) => !k.disabled).length === 0,
          onClick: me,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
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
          children: j.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : j.map((k, B) => {
            const U = tt(k, b), oe = E.has(U), te = B === H, pe = !!k.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": oe,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Le.option,
                  oe ? Le.selected : null,
                  te ? Le.active : null,
                  pe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => se(B),
                children: Rn(k)
              },
              U
            );
          })
        }
      ),
      /* @__PURE__ */ w("div", { className: Le.reorder, children: [
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
const Zg = "_root_1isbb_1", Jg = "_header_1isbb_8", Qg = "_title_1isbb_15", ey = "_navBtn_1isbb_20", ty = "_resources_1isbb_39", ny = "_resource_1isbb_39", ry = "_grid_1isbb_50", sy = "_timeCol_1isbb_55", oy = "_timeCell_1isbb_61", ay = "_dayCol_1isbb_66", ly = "_dayHeader_1isbb_73", cy = "_slot_1isbb_81", iy = "_event_1isbb_91", ft = {
  root: Zg,
  header: Jg,
  title: Qg,
  navBtn: ey,
  resources: ty,
  resource: ny,
  grid: ry,
  timeCol: sy,
  timeCell: oy,
  dayCol: ay,
  dayHeader: ly,
  slot: cy,
  event: iy
};
function kr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function N0({
  data: e,
  view: n = "week",
  date: r,
  onDateChange: s,
  resources: o,
  onEventClick: l,
  onSlotClick: u,
  ariaLabel: a = "Scheduler",
  className: i
}) {
  const [g, v] = Y(r ?? /* @__PURE__ */ new Date()), f = r ?? g, D = (z) => {
    r || v(z), s?.(z);
  }, x = n === "day" ? [f] : n === "week" ? Array.from({ length: 7 }, (z, h) => {
    const d = new Date(f);
    return d.setDate(f.getDate() - f.getDay() + h), d;
  }) : Array.from({ length: 30 }, (z, h) => {
    const d = new Date(f);
    return d.setDate(1 + h), d;
  }), C = Array.from({ length: 12 }, (z, h) => 8 + h);
  return /* @__PURE__ */ w("div", { className: [ft.root, i].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ w("div", { className: ft.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Previous", onClick: () => {
        const z = new Date(f);
        z.setDate(z.getDate() - 7), D(z);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: ft.title, children: f.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Next", onClick: () => {
        const z = new Date(f);
        z.setDate(z.getDate() + 7), D(z);
      }, children: "›" })
    ] }),
    o && /* @__PURE__ */ t("div", { className: ft.resources, children: o.map((z) => /* @__PURE__ */ t("div", { className: ft.resource, role: "presentation", "aria-label": z.name, children: z.name }, z.id)) }),
    /* @__PURE__ */ w("div", { className: ft.grid, role: "presentation", children: [
      /* @__PURE__ */ t("div", { className: ft.timeCol, role: "presentation", children: C.map((z) => /* @__PURE__ */ w("div", { className: ft.timeCell, children: [
        z,
        ":00"
      ] }, z)) }),
      x.map((z) => /* @__PURE__ */ w("div", { className: ft.dayCol, role: "presentation", title: z.toLocaleDateString(), onClick: () => u?.({ date: z }), tabIndex: 0, "aria-label": z.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: ft.dayHeader, children: z.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        C.map((h) => /* @__PURE__ */ t("div", { className: ft.slot, tabIndex: -1, onClick: () => {
          const d = new Date(z);
          d.setHours(h), u?.({ date: d });
        } }, h)),
        e.filter((h) => h.start.toDateString() === z.toDateString()).map((h) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ft.event,
            "aria-label": `${h.title} ${kr(h.start)} - ${kr(h.end)}`,
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
const dy = "_root_uw4jr_1", uy = "_header_uw4jr_8", fy = "_headerCell_uw4jr_15", _y = "_timeline_uw4jr_21", py = "_row_uw4jr_26", hy = "_taskName_uw4jr_32", my = "_timelineCell_uw4jr_37", gy = "_bar_uw4jr_43", yy = "_progress_uw4jr_56", by = "_dep_uw4jr_61", It = {
  root: dy,
  header: uy,
  headerCell: fy,
  timeline: _y,
  row: py,
  taskName: hy,
  timelineCell: my,
  bar: gy,
  progress: yy,
  dep: by
};
function S0({ tasks: e, view: n = "week", onTaskClick: r, ariaLabel: s = "Gantt", className: o }) {
  const [l, u] = Y(null);
  return /* @__PURE__ */ w("div", { className: [It.root, o].filter(Boolean).join(" "), role: "grid", "aria-label": s, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ w("div", { className: It.header, role: "row", children: [
      /* @__PURE__ */ t("div", { className: It.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ w("div", { className: It.timeline, role: "columnheader", children: [
        "Timeline (",
        n,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ w("div", { className: It.row, role: "row", "aria-selected": l === a.id, children: [
      /* @__PURE__ */ t("div", { className: It.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ w("div", { className: It.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: It.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}${a.progress !== void 0 ? `, ${a.progress}% complete` : ""}`,
            "aria-pressed": l === a.id,
            tabIndex: 0,
            onClick: () => {
              u(a.id), r?.({ task: a });
            },
            onKeyDown: (i) => {
              (i.key === "Enter" || i.key === " ") && (i.preventDefault(), u(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: It.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((i) => /* @__PURE__ */ t("svg", { className: It.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-color-border)" }) }, i))
      ] })
    ] }, a.id))
  ] });
}
const vy = "_root_iswin_1", xy = "_fields_iswin_6", wy = "_chip_iswin_13", $y = "_table_iswin_35", ky = "_totalRow_iswin_55", Ny = "_total_iswin_55", on = {
  root: vy,
  fields: xy,
  chip: wy,
  table: $y,
  totalRow: ky,
  total: Ny
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
function D0({ data: e, rowFields: n = [], columnFields: r = [], aggregateFields: s = [], onFieldsChange: o, ariaLabel: l = "Pivot table", className: u }) {
  const a = n, i = r, g = s, v = (h, d, _) => {
    const m = h === "row" ? a.filter(($) => $.property !== d) : a, N = h === "col" ? i.filter(($) => $.property !== d) : i, b = h === "agg" ? g.filter(($) => !($.property === d && $.aggregate === _)) : g;
    o?.({ rowFields: m, columnFields: N, aggregateFields: b });
  }, f = (h, d) => d.map((_) => String(h[_.property])).join(""), D = [...new Set(a.length ? e.map((h) => f(h, a)) : [""])].sort(), x = [...new Set(i.length ? e.map((h) => f(h, i)) : [""])].sort(), C = (h, d, _) => {
    const m = e.filter((b) => f(b, a) === h && f(b, i) === d), N = m.map((b) => Number(b[_.property])).filter((b) => !Number.isNaN(b));
    return !N.length && _.aggregate !== "Count" ? 0 : Bn[_.aggregate](_.aggregate === "Count" ? m.map(() => 1) : N);
  }, z = (h, d, _, m) => /* @__PURE__ */ w(
    "button",
    {
      type: "button",
      className: on.chip,
      "aria-label": `Remove ${h} field ${_}`,
      onClick: () => v(h, d, m),
      children: [
        _,
        m ? ` (${m})` : ""
      ]
    },
    `${h}-${_}-${m ?? ""}`
  );
  return /* @__PURE__ */ w("div", { className: [on.root, u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: on.fields, children: [
      a.map((h) => z("row", h.property, h.title ?? h.property)),
      i.map((h) => z("col", h.property, h.title ?? h.property)),
      g.map((h) => z("agg", h.property, h.title ?? h.property, h.aggregate))
    ] }),
    /* @__PURE__ */ w("table", { className: on.table, role: "grid", "aria-label": l, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ t("th", { scope: "col", children: a.map((h) => h.title ?? h.property).join(" / ") || "Total" }),
        x.map((h) => /* @__PURE__ */ t("th", { scope: "col", children: h || "—" }, h)),
        /* @__PURE__ */ t("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ w("tbody", { children: [
        D.map((h) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ t("th", { scope: "row", children: h || "—" }),
          x.map((d) => /* @__PURE__ */ t("td", { title: kn(C(h, d, g[0] ?? { property: "", aggregate: "Count" })), children: g.length ? kn(C(h, d, g[0])) : "" }, d)),
          /* @__PURE__ */ t("td", { className: on.total, children: g.length ? kn(
            Bn[g[0].aggregate](
              x.flatMap((d) => e.filter((_) => f(_, a) === h && f(_, i) === d).map((_) => Number(_[g[0].property]))).filter((d) => !Number.isNaN(d))
            )
          ) : "" })
        ] }, h)),
        /* @__PURE__ */ w("tr", { className: on.totalRow, children: [
          /* @__PURE__ */ t("th", { scope: "row", children: "Total" }),
          x.map((h) => /* @__PURE__ */ t("td", { children: g.length ? kn(
            Bn[g[0].aggregate](
              e.filter((d) => f(d, i) === h).map((d) => Number(d[g[0].property])).filter((d) => !Number.isNaN(d))
            )
          ) : "" }, h)),
          /* @__PURE__ */ t("td", { children: g.length ? kn(Bn[g[0].aggregate](e.map((h) => Number(h[g[0].property])).filter((h) => !Number.isNaN(h)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Sy = "_root_mkz78_1", Dy = "_reverse_mkz78_10", Cy = "_item_mkz78_14", zy = "_marker_mkz78_35", My = "_body_mkz78_46", Oy = "_label_mkz78_50", Iy = "_content_mkz78_56", Zt = {
  root: Sy,
  reverse: Dy,
  item: Cy,
  marker: zy,
  body: My,
  label: Oy,
  content: Iy
};
function C0({ items: e, reverse: n = !1, ariaLabel: r = "Timeline", className: s }) {
  const o = n ? [...e].reverse() : e;
  return /* @__PURE__ */ t(
    "ol",
    {
      className: [Zt.root, n ? Zt.reverse : "", s].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: o.map((l, u) => /* @__PURE__ */ w("li", { className: Zt.item, children: [
        /* @__PURE__ */ t("span", { className: Zt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ w("div", { className: Zt.body, children: [
          /* @__PURE__ */ t("div", { className: Zt.label, children: l.label }),
          l.content !== void 0 && /* @__PURE__ */ t("div", { className: Zt.content, children: l.content })
        ] })
      ] }, u))
    }
  );
}
const Ty = "_root_12pfj_1", Ey = "_header_12pfj_13", jy = "_headCell_12pfj_22", Ay = "_row_12pfj_32", Ly = "_cell_12pfj_37", Nn = {
  root: Ty,
  header: Ey,
  headCell: jy,
  row: Ay,
  cell: Ly
};
function z0({ count: e, rowHeight: n = 40, height: r = 320, loadData: s, columns: o = [], ariaLabel: l = "Virtual grid", className: u }) {
  const [a, i] = Y(/* @__PURE__ */ new Map()), [g, v] = Y(0), f = ce(/* @__PURE__ */ new Set()), D = Math.ceil(r / n), x = Math.max(0, Math.floor(g / n) - 3), C = Math.min(e, x + D + 6), z = q(
    (d, _) => {
      let m = !1;
      for (let N = d; N < _; N++)
        !a.has(N) && !f.current.has(N) && (m = !0);
      if (m) {
        for (let N = d; N < _; N++) f.current.add(N);
        s({ skip: d, top: _ }).then((N) => {
          i((b) => {
            const $ = new Map(b);
            return N.forEach((c, y) => $.set(d + y, c)), $;
          });
          for (let b = d; b < _; b++) f.current.delete(b);
        });
      }
    },
    [a, s]
  );
  Se(() => {
    z(x, C);
  }, [x, C]);
  const h = [];
  for (let d = x; d < C; d++) {
    const _ = a.get(d) ?? {};
    h.push(
      /* @__PURE__ */ t("div", { className: Nn.row, role: "row", style: { height: n }, children: o.map((m) => /* @__PURE__ */ t("div", { role: "gridcell", className: Nn.cell, style: m.width ? { width: m.width } : void 0, children: String(_[m.property] ?? "") }, m.property)) }, d)
    );
  }
  return /* @__PURE__ */ w(
    "div",
    {
      className: [Nn.root, u].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (d) => v(d.target.scrollTop),
      onKeyDown: (d) => {
        const _ = d.currentTarget;
        d.key === "ArrowDown" ? (d.preventDefault(), _.scrollTop += n) : d.key === "ArrowUp" ? (d.preventDefault(), _.scrollTop -= n) : d.key === "PageDown" ? (d.preventDefault(), _.scrollTop += r) : d.key === "PageUp" && (d.preventDefault(), _.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ t("div", { style: { height: x * n }, "aria-hidden": "true" }),
        /* @__PURE__ */ t("div", { className: Nn.header, role: "row", children: o.map((d) => /* @__PURE__ */ t("div", { role: "columnheader", className: Nn.headCell, style: { height: n, ...d.width ? { width: d.width } : {} }, children: d.title ?? d.property }, d.property)) }),
        h,
        /* @__PURE__ */ t("div", { style: { height: Math.max(0, (e - C) * n) }, "aria-hidden": "true" })
      ]
    }
  );
}
const Ry = "_root_1leml_1", By = {
  root: Ry
}, Qe = 25;
function Py(e) {
  const n = [];
  let r = 2166136261;
  for (let s = 0; s < e.length; s++)
    r ^= e.charCodeAt(s), r = Math.imul(r, 16777619) >>> 0, n.push(r & 255);
  for (; n.length < Qe * Qe; )
    r = Math.imul(r ^ n.length + 1, 16777619) >>> 0, n.push(r & 255);
  return n;
}
function Fy(e, n) {
  const r = (s, o) => e >= s && e < s + 7 && n >= o && n < o + 7;
  return !!(r(0, 0) || r(Qe - 7, 0) || r(0, Qe - 7) || e === 6 || n === 6 || e === 8 && n === 8 || e === 8 && (n < 9 || n > Qe - 9) || n === 8 && (e < 9 || e > Qe - 9));
}
function Ky(e, n) {
  const r = (s, o) => {
    const l = e - s, u = n - o, a = Math.max(Math.abs(l - 3), Math.abs(u - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && n < 7 ? r(0, 0) : e >= Qe - 7 && n < 7 ? r(Qe - 7, 0) : e < 7 && n >= Qe - 7 ? r(0, Qe - 7) : null;
}
function M0({ value: e, size: n = 128, render: r = "svg", ariaLabel: s, className: o }) {
  const l = s ?? `QR code for ${e}`, u = $e(() => {
    const g = Py(e), v = [];
    for (let f = 0; f < Qe; f++)
      for (let D = 0; D < Qe; D++) {
        const x = Ky(D, f);
        if (x !== null) {
          v.push(x);
          continue;
        }
        if (Fy(D, f)) {
          v.push(D === 6 || f === 6 ? (D + f) % 2 === 0 : !1);
          continue;
        }
        v.push(g[f * Qe + D] % 2 === 1);
      }
    return v;
  }, [e]), a = n / Qe, i = [];
  for (let g = 0; g < Qe; g++)
    for (let v = 0; v < Qe; v++)
      u[g * Qe + v] && i.push(/* @__PURE__ */ t("rect", { x: v * a, y: g * a, width: a, height: a }, `${v}-${g}`));
  return /* @__PURE__ */ w(
    "svg",
    {
      className: [By.root, o].filter(Boolean).join(" "),
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
const qy = "_root_xfffn_1", Hy = "_value_xfffn_9", Nr = {
  root: qy,
  value: Hy
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
], Dr = 104, Wy = 106;
function Uy(e) {
  const n = [Dr];
  for (let s = 0; s < e.length; s++) {
    const o = e.charCodeAt(s);
    n.push(o >= 32 && o <= 126 ? o - 32 : 0);
  }
  let r = Dr;
  for (let s = 1; s < n.length; s++) r += s * n[s];
  return n.push(r % 103, Wy), n;
}
function O0({ value: e, format: n = "Code128", height: r = 60, showValue: s = !1, ariaLabel: o, className: l }) {
  const u = o ?? `Barcode ${e}`, a = $e(() => {
    const i = [];
    let g = 0;
    for (const v of Uy(e)) {
      const f = Sr[v] ?? Sr[0];
      for (let D = 0; D < f.length; D++) {
        const x = Number(f[D]);
        D % 2 === 0 && i.push({ x: g, w: x }), g += x;
      }
    }
    return { modules: i, total: g };
  }, [e]);
  return /* @__PURE__ */ w("span", { className: [Nr.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
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
          a.modules.map((i, g) => /* @__PURE__ */ t("rect", { x: i.x, y: 0, width: i.w, height: r, fill: "var(--dx-color-text)" }, g))
        ]
      }
    ),
    s && /* @__PURE__ */ t("span", { className: Nr.value, children: e })
  ] });
}
const Vy = "_root_x813o_1", Xy = "_svg_x813o_10", Gy = "_gridline_x813o_15", Yy = "_tickLabel_x813o_21", Zy = "_axisTitle_x813o_27", Jy = "_dataLabel_x813o_34", Qy = "_legend_x813o_40", eb = "_legendItem_x813o_48", tb = "_swatch_x813o_56", nb = "_tooltip_x813o_63", rb = "_visuallyHidden_x813o_77", nt = {
  root: Vy,
  svg: Xy,
  gridline: Gy,
  tickLabel: Yy,
  axisTitle: Zy,
  dataLabel: Jy,
  legend: Qy,
  legendItem: eb,
  swatch: tb,
  tooltip: nb,
  visuallyHidden: rb
}, Cr = [
  "var(--dx-color-palette-0)",
  "var(--dx-color-palette-1)",
  "var(--dx-color-palette-2)",
  "var(--dx-color-palette-3)",
  "var(--dx-color-palette-4)",
  "var(--dx-color-palette-5)"
];
function sb(e, n, r) {
  const s = n - e || 1, o = r ?? Math.pow(10, Math.floor(Math.log10(s / 4))), l = Math.floor(e / o) * o, u = Math.ceil(n / o) * o, a = [];
  for (let i = l; i <= u + 1e-9; i += o) a.push(Number(i.toFixed(6)));
  return { min: l, max: u, step: o, ticks: a };
}
function I0({
  series: e,
  width: n = 600,
  height: r = 400,
  valueAxis: s,
  categoryAxis: o,
  showLegend: l = !0,
  tooltipVisible: u = !0,
  onSeriesClick: a,
  ariaLabel: i = "Chart",
  className: g
}) {
  const [v, f] = Y(null), D = $e(() => {
    const c = /* @__PURE__ */ new Set();
    for (const y of e) for (const S of y.data) c.add(String(S[y.categoryProperty] ?? ""));
    return [...c];
  }, [e]), x = $e(() => e.flatMap((c) => c.data.map((y) => Number(y[c.valueProperty]))).filter((c) => !Number.isNaN(c)), [e]), C = s?.min ?? (x.length ? Math.min(0, ...x) : 0), z = s?.max ?? (x.length ? Math.max(...x) : 10), h = $e(() => sb(C, z, s?.step), [C, z, s?.step]), d = { t: 16, r: 16, b: 40, l: 56 }, _ = n - d.l - d.r, m = r - d.t - d.b, N = (c) => d.l + c / Math.max(1, D.length - 1) * _, b = (c) => d.t + (1 - (c - h.min) / (h.max - h.min || 1)) * m, $ = (c, y) => y.color ?? Cr[c % Cr.length];
  return /* @__PURE__ */ w("figure", { className: [nt.root, g].filter(Boolean).join(" "), role: "img", "aria-label": i, "aria-describedby": `${i.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ w("svg", { width: n, height: r, className: nt.svg, role: "presentation", children: [
      s?.gridlines !== !1 && h.ticks.map((c) => /* @__PURE__ */ t("line", { x1: d.l, x2: d.l + _, y1: b(c), y2: b(c), className: nt.gridline }, c)),
      o?.gridlines && D.map((c, y) => /* @__PURE__ */ t("line", { x1: N(y), x2: N(y), y1: d.t, y2: d.t + m, className: nt.gridline }, y)),
      h.ticks.map((c) => /* @__PURE__ */ t("text", { x: d.l - 8, y: b(c) + 4, textAnchor: "end", className: nt.tickLabel, children: c }, c)),
      D.map((c, y) => /* @__PURE__ */ t("text", { x: N(y), y: d.t + m + 16, textAnchor: "middle", className: nt.tickLabel, children: c }, c)),
      s?.title && /* @__PURE__ */ t("text", { x: 12, y: d.t + m / 2, textAnchor: "middle", transform: `rotate(-90,12,${d.t + m / 2})`, className: nt.axisTitle, children: s.title }),
      o?.title && /* @__PURE__ */ t("text", { x: d.l + _ / 2, y: r - 4, textAnchor: "middle", className: nt.axisTitle, children: o.title }),
      (() => {
        const c = /* @__PURE__ */ new Map();
        for (const O of e)
          if (O.stack)
            for (const j of O.data) {
              const I = String(j[O.categoryProperty] ?? ""), p = Number(j[O.valueProperty]);
              if (Number.isNaN(p)) continue;
              c.has(O.stack) || c.set(O.stack, /* @__PURE__ */ new Map());
              const M = c.get(O.stack);
              M.set(I, (M.get(I) ?? 0) + p);
            }
        const y = e.filter((O) => O.type === "pie" || O.type === "donut"), S = /* @__PURE__ */ new Map();
        for (const O of y) {
          const j = O.data.reduce((I, p) => I + (Number(p[O.valueProperty]) || 0), 0);
          S.set(O.title ?? String(y.indexOf(O)), j);
        }
        return e.map((O, j) => {
          const I = O.data.map((T) => ({
            cat: String(T[O.categoryProperty] ?? ""),
            val: Number(T[O.valueProperty]),
            size: O.sizeProperty ? Number(T[O.sizeProperty]) : void 0,
            item: T
          })), p = new Map(D.map((T, A) => [T, A])), M = $(j, O);
          if (O.type === "pie" || O.type === "donut") {
            const T = d.l + _ / 2, A = d.t + m / 2, X = Math.min(_, m) / 3, H = O.type === "donut" ? O.innerRadius ?? X * 0.5 : 0, re = S.get(O.title ?? String(j)) ?? I.reduce((J, Q) => J + Q.val, 0);
            let Z = -90;
            return /* @__PURE__ */ w("g", { role: "list", "aria-label": O.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: O.title ?? `Series ${j + 1}` }),
              I.map((J, Q) => {
                const G = re ? J.val / re * 360 : 0, K = Z, L = Z + G;
                Z = L;
                const se = G > 180 ? 1 : 0, ie = (Fe) => Fe * Math.PI / 180, ee = T + X * Math.cos(ie(K)), ue = A + X * Math.sin(ie(K)), me = T + X * Math.cos(ie(L)), xe = A + X * Math.sin(ie(L)), Re = T + H * Math.cos(ie(L)), Ie = A + H * Math.sin(ie(L)), Ve = T + H * Math.cos(ie(K)), be = A + H * Math.sin(ie(K)), Xe = H ? `M ${ee} ${ue} A ${X} ${X} 0 ${se} 1 ${me} ${xe} L ${Re} ${Ie} A ${H} ${H} 0 ${se} 0 ${Ve} ${be} Z` : `M ${T} ${A} L ${ee} ${ue} A ${X} ${X} 0 ${se} 1 ${me} ${xe} Z`, Ze = (K + L) / 2, Pe = T + (X + 12) * Math.cos(ie(Ze)), Ye = A + (X + 12) * Math.sin(ie(Ze));
                return /* @__PURE__ */ w("g", { role: "listitem", children: [
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: Xe,
                      fill: M,
                      stroke: "var(--dx-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => u && f({ x: Pe, y: Ye, text: `${O.title ?? J.cat}: ${J.val}` }),
                      onMouseLeave: () => f(null),
                      onClick: () => a?.({ seriesTitle: O.title ?? "", category: J.cat, value: J.val, item: J.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  O.labels?.visible && /* @__PURE__ */ t("text", { x: Pe, y: Ye, textAnchor: "middle", className: nt.dataLabel, children: J.val })
                ] }, Q);
              })
            ] }, j);
          }
          if (O.type === "scatter" || O.type === "bubble")
            return /* @__PURE__ */ w("g", { role: "list", "aria-label": O.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: O.title ?? `Series ${j + 1}` }),
              I.map((T, A) => {
                const X = p.get(T.cat) ?? 0, H = Number(I[A].cat), re = Number.isNaN(H) ? N(X) : d.l + (H - h.min) / (h.max - h.min || 1) * _, Z = b(T.val), J = O.type === "bubble" && T.size !== void 0 ? Math.max(4, Math.min(12, T.size / 10)) : 4;
                return /* @__PURE__ */ w("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: re, cy: Z, r: J, fill: M, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: re,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => u && f({ x: re, y: Z, text: `${O.title ?? T.cat}: ${T.val}` }),
                      onMouseLeave: () => f(null),
                      onClick: () => a?.({ seriesTitle: O.title ?? "", category: T.cat, value: T.val, item: T.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, A);
              })
            ] }, j);
          if (O.type === "line" || O.type === "area") {
            const T = (H) => {
              if (!O.stack) return h.min;
              let re = 0;
              for (let Z = 0; Z < j; Z++) {
                const J = e[Z];
                if (J?.stack !== O.stack) continue;
                const Q = J.data.find((G) => String(G[J.categoryProperty] ?? "") === H);
                Q && (re += Number(Q[J.valueProperty]) || 0);
              }
              return re;
            }, A = I.map((H) => {
              const re = p.get(H.cat) ?? 0, Z = T(H.cat);
              return `${re === 0 ? "M" : "L"} ${N(re)} ${b(Z + H.val)}`;
            }).join(" "), X = I.map((H) => {
              const re = p.get(H.cat) ?? 0, Z = T(H.cat);
              return `${re === 0 ? "M" : "L"} ${N(re)} ${b(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ w("g", { role: "list", "aria-label": O.title ?? `Series ${j + 1}`, children: [
              /* @__PURE__ */ t("title", { children: O.title ?? `Series ${j + 1}` }),
              O.type === "area" && /* @__PURE__ */ t("path", { d: `${A} L ${N(I.length - 1)} ${b(T(I[I.length - 1].cat))} L ${N(0)} ${b(T(I[0].cat))} Z`, fill: M, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ t("path", { d: A, fill: "none", stroke: M, strokeWidth: 2 }),
              O.stack && /* @__PURE__ */ t("path", { d: X, fill: "none", stroke: "transparent" }),
              I.map((H, re) => {
                const Z = p.get(H.cat) ?? 0, J = T(H.cat), Q = N(Z), G = b(J + H.val);
                return /* @__PURE__ */ w("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: Q, cy: G, r: 4, fill: M, stroke: "var(--dx-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "rect",
                    {
                      x: Q - 12,
                      y: G - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => u && f({ x: Q, y: G, text: `${O.title ?? H.cat}: ${H.val}` }),
                      onMouseLeave: () => f(null),
                      onFocus: () => u && f({ x: Q, y: G, text: `${O.title ?? H.cat}: ${H.val}` }),
                      onBlur: () => f(null),
                      onClick: () => a?.({ seriesTitle: O.title ?? "", category: H.cat, value: H.val, item: H.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  O.labels?.visible && /* @__PURE__ */ t("text", { x: Q, y: G - 8, textAnchor: "middle", className: nt.dataLabel, children: H.val })
                ] }, re);
              })
            ] }, j);
          }
          const E = O.type === "bar";
          return /* @__PURE__ */ w("g", { role: "list", "aria-label": O.title ?? `Series ${j + 1}`, children: [
            /* @__PURE__ */ t("title", { children: O.title ?? `Series ${j + 1}` }),
            I.map((T, A) => {
              const X = p.get(T.cat) ?? 0;
              let H = 0;
              if (O.stack)
                for (let ue = 0; ue < j; ue++) {
                  const me = e[ue];
                  if (me?.stack !== O.stack) continue;
                  const xe = me.data.find((Re) => String(Re[me.categoryProperty] ?? "") === T.cat);
                  xe && (H += Number(xe[me.valueProperty]) || 0);
                }
              const re = H + T.val, Z = e.filter((ue) => !ue.stack || ue.stack === O.stack).length, J = _ / D.length, Q = E ? 18 : Math.max(12, J / (O.stack ? 1 : e.length) - 4), G = E ? d.l + H / (h.max - h.min || 1) * _ : N(X) - Q / 2 + (O.stack ? 0 : j % Z * Q), K = E ? d.t + X * m / D.length + 4 : b(re), L = E ? T.val / (h.max - h.min || 1) * _ : Q - 4, se = E ? 16 : b(H) - b(re), ie = E ? d.l + H / (h.max - h.min || 1) * _ : G, ee = E ? d.t + X * m / D.length + 4 : K;
              return /* @__PURE__ */ w("g", { role: "listitem", children: [
                /* @__PURE__ */ t(
                  "rect",
                  {
                    x: ie,
                    y: ee,
                    width: E ? L : Q - 4,
                    height: se,
                    fill: M,
                    rx: 2,
                    onMouseEnter: () => u && f({ x: ie + (E ? L : Q) / 2, y: ee, text: `${O.title ?? T.cat}: ${T.val}` }),
                    onMouseLeave: () => f(null),
                    onClick: () => a?.({ seriesTitle: O.title ?? "", category: T.cat, value: T.val, item: T.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                O.labels?.visible && /* @__PURE__ */ t("text", { x: ie + (E ? L : Q) / 2, y: ee - 4, textAnchor: "middle", className: nt.dataLabel, children: T.val })
              ] }, A);
            })
          ] }, j);
        });
      })()
    ] }),
    v && /* @__PURE__ */ t("div", { className: nt.tooltip, style: { left: v.x, top: v.y - 28 }, children: v.text }),
    l && /* @__PURE__ */ t("div", { className: nt.legend, children: e.map((c, y) => /* @__PURE__ */ w("span", { className: nt.legendItem, children: [
      /* @__PURE__ */ t("span", { className: nt.swatch, style: { backgroundColor: $(y, c) }, "aria-hidden": "true" }),
      c.title ?? `Series ${y + 1}`
    ] }, y)) }),
    /* @__PURE__ */ w("table", { className: nt.visuallyHidden, id: `${i.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ t("caption", { children: i }),
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ t("th", { children: "Series" }),
        /* @__PURE__ */ t("th", { children: "Category" }),
        /* @__PURE__ */ t("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: e.map(
        (c) => c.data.map((y, S) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ t("td", { children: c.title ?? "" }),
          /* @__PURE__ */ t("td", { children: String(y[c.categoryProperty] ?? "") }),
          /* @__PURE__ */ t("td", { children: String(y[c.valueProperty] ?? "") })
        ] }, `${c.title}-${S}`))
      ) })
    ] })
  ] });
}
export {
  Ec as ALERT_ICON,
  Hb as Accordion,
  Tb as Alert,
  Xb as Autocomplete,
  Kb as Avatar,
  ib as Badge,
  O0 as Barcode,
  Bb as Body,
  y0 as Breadcrumb,
  lb as Button,
  cb as Card,
  w0 as Carousel,
  I0 as Chart,
  Cb as Checkbox,
  Yb as Checkboxlist,
  o0 as Colorpicker,
  Ab as Column,
  On as DEFAULT_OPERATOR_BY_TYPE,
  Lp as DEFAULT_PALETTE,
  $b as DataFilter,
  kb as DataGrid,
  Nb as DataList,
  a0 as Datepicker,
  Mb as Dialog,
  _0 as DropZone,
  Vb as Dropdown,
  _b as EmptyState,
  Tr as FILTER_OPERATORS,
  g0 as FabMenu,
  pb as Field,
  ff as Footer,
  hb as Form,
  S0 as Gantt,
  hf as Header,
  Ge as Icon,
  Db as Input,
  Sb as Label,
  Rb as Layout,
  Gb as Listbox,
  r0 as Mask,
  p0 as Menu,
  s0 as Numeric,
  pa as Pager,
  h0 as PanelMenu,
  n0 as Password,
  k0 as PickList,
  D0 as Pivot,
  m0 as ProfileMenu,
  Pb as Progress,
  M0 as QRCode,
  Zb as Radiobuttonlist,
  l0 as Rating,
  jb as Row,
  N0 as Scheduler,
  d0 as SecurityCode,
  Fn as Select,
  Jb as Selectbar,
  $f as Sidebar,
  u0 as SignaturePad,
  Eb as Skeleton,
  c0 as Slider,
  e0 as Splitbutton,
  v0 as Splitter,
  Lb as Stack,
  ub as Stat,
  b0 as Steps,
  Dl as Switch,
  fb as Table,
  qb as Tabs,
  Wb as Textarea,
  t0 as Textbox,
  Fb as ThemeSwitcher,
  C0 as Timeline,
  i0 as Timespanpicker,
  Ib as ToastProvider,
  x0 as Toc,
  Qb as Togglebutton,
  zb as Tooltip,
  $0 as Tree,
  Ub as Typography,
  f0 as Upload,
  z0 as VirtualGrid,
  jr as applyFilters,
  xa as applyGridState,
  pn as columnValue,
  ya as cycleSort,
  wa as defaultOperatorForType,
  gb as email,
  mr as formatMasked,
  cr as formatValue,
  Kn as getByPath,
  db as iconNames,
  Er as matchesFilters,
  vb as maxLength,
  bb as minLength,
  va as paginate,
  yb as pattern,
  xb as range,
  mb as required,
  No as runValidators,
  Po as sortItems,
  ba as sortedItems,
  jo as toFilterString,
  Bo as toODataFilterString,
  ko as useFormContext,
  wb as useFormField,
  Ob as useToast
};
