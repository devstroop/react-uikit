import { jsxs as O, jsx as n, Fragment as Ce } from "react/jsx-runtime";
import { forwardRef as Fe, useId as Ye, isValidElement as Tn, cloneElement as Hs, useState as X, useRef as ae, useCallback as F, useMemo as $e, useContext as Ks, createContext as Us, useEffect as we, Fragment as tr, Children as nr, useImperativeHandle as cs } from "react";
const sr = "_button_1w4gc_1", rr = "_filled_1w4gc_36", or = "_flat_1w4gc_39", ar = "_outlined_1w4gc_42", lr = "_text_1w4gc_46", ir = "_primary_1w4gc_537", cr = "_secondary_1w4gc_544", dr = "_ghost_1w4gc_552", ur = "_danger_1w4gc_559", _r = "_success_1w4gc_566", fr = "_info_1w4gc_573", hr = "_loading_1w4gc_582", pr = "_spinner_1w4gc_585", mr = "_xs_1w4gc_601", gr = "_sm_1w4gc_607", yr = "_md_1w4gc_613", xr = "_lg_1w4gc_619", br = "_xl_1w4gc_625", vr = "_iconOnly_1w4gc_631", kr = "_fullWidth_1w4gc_657", kt = {
  button: sr,
  filled: rr,
  flat: or,
  outlined: ar,
  text: lr,
  "style-primary": "_style-primary_1w4gc_52",
  "tone-primary": "_tone-primary_1w4gc_53",
  "style-secondary": "_style-secondary_1w4gc_79",
  "tone-secondary": "_tone-secondary_1w4gc_80",
  "style-base": "_style-base_1w4gc_101",
  "style-light": "_style-light_1w4gc_120",
  "style-dark": "_style-dark_1w4gc_138",
  "style-danger": "_style-danger_1w4gc_161",
  "tone-danger": "_tone-danger_1w4gc_162",
  "style-success": "_style-success_1w4gc_188",
  "tone-success": "_tone-success_1w4gc_189",
  "style-warning": "_style-warning_1w4gc_215",
  "tone-warning": "_tone-warning_1w4gc_216",
  "style-info": "_style-info_1w4gc_242",
  "tone-info": "_tone-info_1w4gc_243",
  "shade-lighter": "_shade-lighter_1w4gc_439",
  "shade-light": "_shade-light_1w4gc_439",
  "shade-dark": "_shade-dark_1w4gc_449",
  "shade-darker": "_shade-darker_1w4gc_453",
  primary: ir,
  secondary: cr,
  ghost: dr,
  danger: ur,
  success: _r,
  info: fr,
  loading: hr,
  spinner: pr,
  "dx-spin": "_dx-spin_1w4gc_1",
  xs: mr,
  sm: gr,
  md: yr,
  lg: xr,
  xl: br,
  iconOnly: vr,
  fullWidth: kr
}, wr = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function $r(e, t) {
  const s = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", o = t;
  if (s) {
    const p = wr[e];
    return { variant: p.variant, style: o ?? p.style };
  }
  const i = e ?? "filled";
  return { variant: i === "filled" || i === "flat" || i === "outlined" || i === "text" ? i : "filled", style: o ?? "primary" };
}
const kb = Fe(
  function({
    variant: t = "filled",
    severity: s,
    shade: o = "default",
    size: i = "md",
    fullWidth: c = !1,
    iconOnly: p = !1,
    loading: r = !1,
    visible: a = !0,
    className: l,
    type: u = "button",
    disabled: d,
    children: k,
    ...x
  }, N) {
    if (a === !1) return null;
    const w = $r(t, s), _ = !(w.style === "light" || w.style === "dark") && o !== "default" ? `shade-${o}` : null, f = [
      kt.button,
      kt[w.variant],
      kt[`style-${w.style}`],
      // backwards-compat: tone-* still emitted
      kt[`tone-${w.style}`],
      _ ? kt[_] : null,
      kt[i],
      // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
      t && kt[t] ? kt[t] : null,
      c ? kt.fullWidth : null,
      p ? kt.iconOnly : null,
      r ? kt.loading : null,
      l
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ O(
      "button",
      {
        ref: N,
        type: u,
        className: f,
        disabled: d || r,
        "aria-busy": r || void 0,
        ...x,
        children: [
          r ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: kt.spinner }) : null,
          k
        ]
      }
    );
  }
), Nr = "_card_tbt2d_1", Or = "_elevated_tbt2d_8", Sr = "_filled_tbt2d_13", zr = "_outlined_tbt2d_18", Dr = "_interactive_tbt2d_22", Mr = "_text_tbt2d_30", Cr = "_header_tbt2d_46", Er = "_body_tbt2d_53", Ir = "_footer_tbt2d_63", yn = {
  card: Nr,
  elevated: Or,
  filled: Sr,
  outlined: zr,
  interactive: Dr,
  text: Mr,
  header: Cr,
  body: Er,
  footer: Ir
}, wb = Fe(function({
  variant: t = "elevated",
  header: s,
  footer: o,
  className: i,
  visible: c = !0,
  children: p,
  onKeyDown: r,
  ...a
}, l) {
  if (c === !1) return null;
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ O(
      "div",
      {
        ref: l,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (d) => {
          r?.(d), !(!u || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [yn.card, yn[t], i].filter(Boolean).join(" "),
        ...a,
        children: [
          s != null && /* @__PURE__ */ n("div", { className: yn.header, children: s }),
          /* @__PURE__ */ n("div", { className: yn.body, children: p }),
          o != null && /* @__PURE__ */ n("div", { className: yn.footer, children: o })
        ]
      }
    )
  );
});
function ds(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const jr = "_badge_82f1g_1", Ar = "_xs_82f1g_14", Tr = "_sm_82f1g_19", Rr = "_md_82f1g_24", Lr = "_lg_82f1g_29", Pr = "_xl_82f1g_34", Br = "_neutral_82f1g_40", qr = "_primary_82f1g_45", Fr = "_secondary_82f1g_54", Hr = "_light_82f1g_59", Kr = "_base_82f1g_64", Ur = "_dark_82f1g_69", Wr = "_info_82f1g_74", Vr = "_success_82f1g_79", Xr = "_warning_82f1g_88", Gr = "_danger_82f1g_97", Yr = "_filled_82f1g_104", Zr = "_outlined_82f1g_154", Jr = "_text_82f1g_206", xn = {
  badge: jr,
  xs: Ar,
  sm: Tr,
  md: Rr,
  lg: Lr,
  xl: Pr,
  neutral: Br,
  primary: qr,
  secondary: Fr,
  light: Hr,
  base: Kr,
  dark: Ur,
  info: Wr,
  success: Vr,
  warning: Xr,
  danger: Gr,
  filled: Yr,
  outlined: Zr,
  text: Jr,
  "shade-lighter": "_shade-lighter_82f1g_477",
  "shade-light": "_shade-light_82f1g_477",
  "shade-dark": "_shade-dark_82f1g_485",
  "shade-darker": "_shade-darker_82f1g_488"
}, $b = Fe(function({
  severity: t = "primary",
  variant: s = "filled",
  shade: o,
  size: i = "md",
  className: c,
  visible: p = !0,
  children: r,
  ...a
}, l) {
  if (p === !1) return null;
  const u = t, d = ds(s, "filled"), k = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: l,
      className: [
        xn.badge,
        xn[i],
        xn[u],
        xn[d],
        k ? xn[k] : null,
        c
      ].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}), Qr = "_xs_2a6lm_2", eo = "_sm_2a6lm_7", to = "_md_2a6lm_1", no = "_lg_2a6lm_17", so = "_xl_2a6lm_22", ro = {
  xs: Qr,
  sm: eo,
  md: to,
  lg: no,
  xl: so
}, Nb = [
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
], oo = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(Ce, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(Ce, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(Ce, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      stroke: "none",
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
    }
  ),
  "star-outline": /* @__PURE__ */ n("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, De = Fe(function({ name: t, size: s = "md", strokeWidth: o = 2, className: i, ...c }, p) {
  const r = typeof s == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: p,
      className: [r ? ro[s] : null, i].filter(Boolean).join(" "),
      width: r ? void 0 : s,
      height: r ? void 0 : s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: oo[t]
    }
  );
}), ao = "_stat_sjin9_1", lo = "_label_sjin9_8", io = "_row_sjin9_16", co = "_value_sjin9_22", uo = "_delta_sjin9_28", _o = "_success_sjin9_33", fo = "_danger_sjin9_37", ho = "_neutral_sjin9_41", po = "_hint_sjin9_45", Qt = {
  stat: ao,
  label: lo,
  row: io,
  value: co,
  delta: uo,
  success: _o,
  danger: fo,
  neutral: ho,
  hint: po
}, Ob = Fe(function({ label: t, value: s, delta: o, deltaTone: i = "neutral", hint: c, className: p, ...r }, a) {
  return /* @__PURE__ */ O(
    "div",
    {
      ref: a,
      className: [Qt.stat, p].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ n("div", { className: Qt.label, children: t }),
        /* @__PURE__ */ O("div", { className: Qt.row, children: [
          /* @__PURE__ */ n("div", { className: Qt.value, children: s }),
          o != null && /* @__PURE__ */ n("div", { className: [Qt.delta, Qt[i]].join(" "), children: o })
        ] }),
        c != null && /* @__PURE__ */ n("div", { className: Qt.hint, children: c })
      ]
    }
  );
}), mo = "_wrap_1jc7y_1", go = "_table_1jc7y_8", yo = "_caption_1jc7y_14", xo = "_none_1jc7y_51", bo = "_horizontal_1jc7y_57", vo = "_vertical_1jc7y_67", ko = "_alternating_1jc7y_85", wo = "_start_1jc7y_89", $o = "_center_1jc7y_93", No = "_end_1jc7y_97", Oo = "_empty_1jc7y_101", Vt = {
  wrap: mo,
  table: go,
  caption: yo,
  none: xo,
  horizontal: bo,
  vertical: vo,
  alternating: ko,
  start: wo,
  center: $o,
  end: No,
  empty: Oo
};
function Sb({
  columns: e,
  rows: t,
  rowKey: s,
  empty: o,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: p = !0,
  className: r,
  visible: a = !0
}) {
  if (a === !1) return null;
  const l = c === "default" || c === "both" ? "" : Vt[c];
  return /* @__PURE__ */ O("div", { className: [Vt.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "table",
      {
        className: [
          Vt.table,
          l,
          p ? Vt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ n("caption", { className: Vt.caption, children: i }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((u) => /* @__PURE__ */ n(
            "th",
            {
              className: u.align != null ? Vt[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((u) => /* @__PURE__ */ n("tr", { children: e.map((d) => /* @__PURE__ */ n(
            "td",
            {
              className: d.align != null ? Vt[d.align] : void 0,
              children: d.render != null ? d.render(u) : u[d.key]
            },
            d.key
          )) }, s(u))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Vt.empty, children: o })
  ] });
}
const So = "_emptyState_1swxw_1", zo = "_icon_1swxw_13", Do = "_title_1swxw_18", Mo = "_description_1swxw_24", Co = "_action_1swxw_30", bn = {
  emptyState: So,
  icon: zo,
  title: Do,
  description: Mo,
  action: Co
};
function zb({
  icon: e,
  title: t,
  description: s,
  action: o,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ O("div", { className: [bn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: bn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: bn.title, children: t }),
    s != null && /* @__PURE__ */ n("div", { className: bn.description, children: s }),
    o != null && /* @__PURE__ */ n("div", { className: bn.action, children: o })
  ] });
}
const Eo = "_field_149oz_1", Io = "_label_149oz_8", jo = "_required_149oz_14", Ao = "_hint_149oz_19", To = "_error_149oz_24", vn = {
  field: Eo,
  label: Io,
  required: jo,
  hint: Ao,
  error: To
};
function Db({
  label: e,
  htmlFor: t,
  required: s,
  hint: o,
  supporting: i,
  error: c,
  children: p,
  className: r,
  visible: a = !0
}) {
  const l = o ?? i, u = Ye(), d = Ye(), k = Ye();
  if (a === !1) return null;
  const x = c != null ? d : l != null ? k : null, N = typeof p == "function" ? p({ inputId: u, hintId: k, errorId: d }) : p, w = Tn(N) && typeof N.props.id == "string" ? N.props.id : void 0, y = w ?? t ?? u, _ = Tn(N) && (x != null || w == null && typeof N.type == "string"), f = w != null || t != null || _, m = _ && Tn(N) ? Hs(N, {
    id: y,
    "aria-describedby": x != null ? [
      N.props["aria-describedby"],
      x
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : N.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : N.props["aria-invalid"]
  }) : N;
  return /* @__PURE__ */ O("div", { className: [vn.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O(
      "label",
      {
        className: vn.label,
        htmlFor: f ? y : void 0,
        children: [
          e,
          s === !0 && /* @__PURE__ */ n("span", { className: vn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    m,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: vn.error, "aria-live": "polite", children: c }) : l != null ? /* @__PURE__ */ n("div", { id: k, className: vn.hint, children: l }) : null
  ] });
}
const Ro = "_form_19k3s_1", Lo = {
  form: Ro
}, Ws = Us(null);
function Po() {
  const e = Ks(Ws);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Mb({
  model: e,
  onSubmit: t,
  onInvalidSubmit: s,
  action: o,
  method: i,
  children: c,
  className: p
}) {
  const [r, a] = X({}), [l, u] = X(0), d = ae(r);
  d.current = r;
  const k = F((m) => {
    a(
      ($) => $[m.name] === m ? $ : { ...$, [m.name]: m }
    );
  }, []), x = F((m) => {
    a(($) => {
      if (!(m in $)) return $;
      const b = { ...$ };
      return delete b[m], b;
    });
  }, []), N = F(() => {
    const m = {};
    for (const $ of Object.values(d.current)) {
      const b = $.validate();
      b.length > 0 && (m[$.name] = b);
    }
    return m;
  }, []), w = F(() => {
    const m = N();
    u(($) => $ + 1), Object.keys(m).length === 0 ? t?.(e) : s?.(m);
  }, [N, e, t, s]), y = (m) => {
    o != null && i != null || (m.preventDefault(), w());
  }, _ = $e(
    () => ({ registerField: k, unregisterField: x, submit: w, submitCount: l }),
    [k, x, w, l]
  ), f = [Lo.form, p].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Ws.Provider, { value: _, children: /* @__PURE__ */ n(
    "form",
    {
      className: f,
      onSubmit: y,
      action: o,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Cb = (e = "Required") => (t) => an(t) ? e : null, Eb = (e = "Invalid email") => (t) => an(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Ib = (e, t = "Invalid format") => (s) => an(s) || e.test(String(s)) ? null : t, jb = (e, t = `Minimum ${e} characters`) => (s) => an(s) || String(s).length >= e ? null : t, Ab = (e, t = `Maximum ${e} characters`) => (s) => an(s) || String(s).length <= e ? null : t, Tb = (e, t, s = `Between ${e} and ${t}`) => (o) => {
  if (an(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : s;
}, Rb = (e, t = "Values do not match") => (s, o) => {
  if (an(s)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return s === i ? null : t;
}, Lb = (e = "Required") => (t) => t === !0 ? null : e, Pb = (e) => (t, s) => e(t, s);
function Bo(e, t, s) {
  return e.map((o) => o(t, s)).filter((o) => o != null);
}
function Bb(e, t) {
  const { registerField: s, unregisterField: o, submitCount: i } = Po(), [c, p] = X(t?.initialValue), [r, a] = X(!1), [l, u] = X(!1), d = ae(() => []);
  d.current = () => Bo(t?.validate ?? [], c), we(() => (s({ name: e, validate: () => d.current() }), () => o(e)), [e, s, o]), we(() => {
    i > 0 && (a(!0), u(!1));
  }, [i]);
  const k = r && !l ? d.current() : [];
  return { value: c, setValue: (N) => {
    p(N), u(!0);
  }, errors: k };
}
const qo = "_select_1j4dh_1", Fo = "_invalid_1j4dh_33", Ho = "_xs_1j4dh_40", Ko = "_sm_1j4dh_48", Uo = "_md_1j4dh_56", Wo = "_lg_1j4dh_62", Vo = "_xl_1j4dh_68", Zn = {
  select: qo,
  invalid: Fo,
  xs: Ho,
  sm: Ko,
  md: Uo,
  lg: Wo,
  xl: Vo
}, gn = Fe(
  function({ size: t = "md", invalid: s = !1, options: o, children: i, className: c, ...p }, r) {
    return /* @__PURE__ */ n(
      "select",
      {
        ref: r,
        className: [
          Zn.select,
          Zn[t],
          s ? Zn.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...p,
        children: o != null ? o.map((a) => /* @__PURE__ */ n(
          "option",
          {
            value: a.value,
            disabled: a.disabled,
            children: a.label
          },
          a.value
        )) : i
      }
    );
  }
), Vs = [
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
}, Xo = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Go(e) {
  return Xo.includes(e);
}
function Gn(e, t) {
  return t.split(".").reduce((s, o) => {
    if (s != null)
      return s[o];
  }, e);
}
function fs(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function jn(e, t) {
  const s = fs(e), o = fs(t);
  if (typeof s == "number" && typeof o == "number") return s - o;
  const i = String(s ?? ""), c = String(o ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function Yn(e) {
  if (e.secondOperator == null) return !1;
  if (Go(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function hs(e, t, s) {
  const o = Gn(t, e.property), i = ps(
    o,
    e.value,
    e.operator,
    s
  );
  if (!Yn(e)) return i;
  const c = ps(
    o,
    e.secondValue,
    e.secondOperator,
    s
  );
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function ps(e, t, s, o) {
  const i = o === "CaseInsensitive", c = (a) => i && typeof a == "string" ? a.toLowerCase() : a, p = c(e), r = c(t);
  switch (s) {
    case "Equals":
      return p === r || Array.isArray(p) && p.some((a) => c(a) === r);
    case "NotEquals":
      return p !== r && !(Array.isArray(p) && p.some((a) => c(a) === r));
    case "LessThan":
      return jn(p, r) < 0;
    case "LessThanOrEquals":
      return jn(p, r) <= 0;
    case "GreaterThan":
      return jn(p, r) > 0;
    case "GreaterThanOrEquals":
      return jn(p, r) >= 0;
    case "Contains":
      return typeof p == "string" && typeof r == "string" && p.includes(r);
    case "StartsWith":
      return typeof p == "string" && typeof r == "string" && p.startsWith(r);
    case "EndsWith":
      return typeof p == "string" && typeof r == "string" && p.endsWith(r);
    case "DoesNotContain":
      return typeof p == "string" && typeof r == "string" && !p.includes(r);
    case "In":
      return Array.isArray(r) && r.some((a) => c(a) === p);
    case "NotIn":
      return Array.isArray(r) && !r.some((a) => c(a) === p);
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
function us(e) {
  return "filters" in e;
}
function Xs(e, t, s = {}) {
  const o = s.logicalOperator ?? "And", i = s.caseSensitivity ?? "CaseInsensitive";
  if (us(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (p) => Xs(e, p, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", hs(t, e, i);
}
function Gs(e, t, s = {}) {
  return e.filter((o) => Xs(o, t, s));
}
function Yo(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${Yo(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function Zo(e) {
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
  if (!Yn(e))
    return t(e.operator, e.value);
  const s = e.logicalOperator ?? "And", o = e.secondOperator;
  return `(${t(e.operator, e.value)} ${s} ${t(
    o,
    e.secondValue
  )})`;
}
function Jo(e) {
  return us(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Jo).filter(Boolean).join(` ${e.operator} `)})` : Zo(e);
}
function Qo(e) {
  return e.replace(/'/g, "''");
}
const ea = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function ta(e, t) {
  const s = e.property, o = t === "CaseInsensitive", i = (l) => o ? `tolower(${l})` : l, c = (l) => typeof l == "string" ? `'${Qo(l)}'` : l instanceof Date ? `'${l.toISOString()}'` : String(l ?? ""), p = (l, u) => {
    const d = typeof u == "string", k = d && o ? i(s) : s;
    switch (l) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${ea[l]} ${d && o ? i(c(u)) : c(u)}`;
      case "Contains":
        return `contains(${i(s)}, ${i(c(u))})`;
      case "StartsWith":
        return `startswith(${i(s)}, ${i(c(u))})`;
      case "EndsWith":
        return `endswith(${i(s)}, ${i(c(u))})`;
      case "DoesNotContain":
        return `not(contains(${i(s)}, ${i(c(u))}))`;
      case "In":
        return Array.isArray(u) ? `${k} in (${u.map((x) => c(x)).join(", ")})` : `${k} in (${c(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${k} in (${u.map((x) => c(x)).join(", ")}))` : `not(${k} in (${c(u)}))`;
      case "IsNull":
        return `${s} eq null`;
      case "IsNotNull":
        return `${s} ne null`;
      case "IsEmpty":
        return `${s} eq ''`;
      case "IsNotEmpty":
        return `${s} ne ''`;
      case "Custom":
        return `${s} custom`;
      default:
        return "";
    }
  };
  if (!Yn(e))
    return p(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${p(e.operator, e.value)} ${r} ${p(
    a,
    e.secondValue
  )})`;
}
function na(e, t = {}) {
  const s = t.caseSensitivity ?? "CaseInsensitive";
  if (us(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => na(i, { caseSensitivity: s })).filter(Boolean).join(` ${o} `)})`;
  }
  return ta(e, s);
}
function sa(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((s, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, p = jn(
        Gn(s, i.property),
        Gn(o, i.property)
      );
      if (p !== 0) return p * c;
    }
    return 0;
  });
}
const ra = "_filter_1nhm8_1", oa = "_rows_1nhm8_9", aa = "_row_1nhm8_9", la = "_join_1nhm8_21", ia = "_property_1nhm8_30", ca = "_operator_1nhm8_34", da = "_value_1nhm8_38", ua = "_remove_1nhm8_42", _a = "_bar_1nhm8_58", fa = "_add_1nhm8_64", ha = "_custom_1nhm8_78", pa = "_summary_1nhm8_82", ma = "_second_1nhm8_87", ga = "_secondAdd_1nhm8_91", ya = "_addSecond_1nhm8_95", xa = "_joinSelect_1nhm8_109", Ge = {
  filter: ra,
  rows: oa,
  row: aa,
  join: la,
  property: ia,
  operator: ca,
  value: da,
  remove: ua,
  bar: _a,
  add: fa,
  custom: ha,
  summary: pa,
  second: ma,
  secondAdd: ga,
  addSecond: ya,
  joinSelect: xa
}, wn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], ms = {
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
function gs({
  property: e,
  value: t,
  onChange: s
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(Ce, { children: e.editor({ value: t, onChange: s }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      gn,
      {
        "aria-label": e.title ?? e.name,
        className: Ge.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => s(c.target.value)
      }
    );
  if (o === "boolean")
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
          c.target.value === "" ? s(void 0) : s(c.target.value === "true");
        }
      }
    );
  const i = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ge.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => s(
        o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function qb({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: s = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: p,
  items: r,
  children: a
}) {
  const [l, u] = X(
    () => o != null && o.length > 0 ? o.map((_, f) => ({ id: f, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: kn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (_, f) => {
    u(
      (m) => m.map(($) => $.id === _ ? { ...$, ...f } : $)
    );
  }, k = () => {
    const _ = l[l.length - 1], f = Math.max(0, ...l.map(($) => $.id)) + 1, m = e[0];
    u(($) => [
      ...$,
      {
        id: f,
        property: _?.property ?? m?.name ?? "",
        operator: kn[e.find(
          (b) => b.name === (_?.property ?? m?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, x = (_) => {
    u(
      (f) => f.length > 1 ? f.filter((m) => m.id !== _) : f
    );
  }, N = $e(() => {
    const _ = [];
    for (const f of l) {
      if (f.property === "" || (f.value == null || f.value === "") && !wn.includes(f.operator)) continue;
      const $ = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: b } = f;
      b != null && Yn(f) && ($.secondOperator = b, $.secondValue = f.secondValue, $.logicalOperator = f.logicalOperator ?? "And"), _.push($);
    }
    return _;
  }, [l]), w = $e(() => r == null || N.length === 0 ? r : Gs(r, {
    operator: t,
    filters: N
  }, {
    caseSensitivity: s
  }), [r, N, t, s]);
  we(() => {
    p != null && r != null && p(w ?? []);
  }, [w]);
  const y = (_) => e.find((f) => f.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: l.map((_, f) => {
      const m = y(_.property), $ = i ? [kn[m.type ?? "string"]] : Vs, b = !wn.includes(_.operator), E = _.secondOperator != null;
      return /* @__PURE__ */ O(tr, { children: [
        /* @__PURE__ */ O("div", { className: Ge.row, children: [
          f > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: Ge.property,
              value: _.property,
              onChange: (h) => {
                const v = e.find(
                  (M) => M.name === h.target.value
                );
                d(_.id, {
                  property: h.target.value,
                  operator: kn[v?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((h) => ({
                value: h.name,
                label: h.title ?? h.name
              }))
            }
          ),
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: Ge.operator,
              value: _.operator,
              onChange: (h) => {
                const v = h.target.value;
                d(
                  _.id,
                  wn.includes(v) ? {
                    operator: v,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: v }
                );
              },
              options: $.map((h) => ({
                value: h,
                label: ms[h]
              }))
            }
          ),
          b ? /* @__PURE__ */ n(
            gs,
            {
              property: m,
              value: _.value,
              onChange: (h) => d(_.id, { value: h })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => x(_.id),
              children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
            }
          )
        ] }),
        b ? E ? /* @__PURE__ */ O(
          "div",
          {
            className: [Ge.row, Ge.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                gn,
                {
                  "aria-label": `Condition ${f + 1} second-operator logic`,
                  className: Ge.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (h) => d(_.id, {
                    logicalOperator: h.target.value
                  }),
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
                  onChange: (h) => {
                    const v = h.target.value;
                    d(
                      _.id,
                      wn.includes(v) ? { secondOperator: v, secondValue: void 0 } : { secondOperator: v }
                    );
                  },
                  options: $.map((h) => ({
                    value: h,
                    label: ms[h]
                  }))
                }
              ),
              _.secondOperator == null || !wn.includes(_.secondOperator) ? /* @__PURE__ */ n(
                gs,
                {
                  property: m,
                  value: _.secondValue,
                  onChange: (h) => d(_.id, { secondValue: h })
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
                  children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ n("div", { className: Ge.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ge.addSecond,
            onClick: () => d(_.id, {
              secondOperator: kn[m.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ O("div", { className: Ge.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ge.add, onClick: k, children: "Add filter" }),
      a != null ? /* @__PURE__ */ n("div", { className: Ge.custom, children: a }) : null,
      r != null ? /* @__PURE__ */ O("span", { className: Ge.summary, "aria-live": "polite", children: [
        w?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const ba = "_pager_203q2_1", va = "_alignLeft_203q2_10", ka = "_alignCenter_203q2_14", wa = "_alignRight_203q2_18", $a = "_alignJustify_203q2_22", Na = "_summary_203q2_26", Oa = "_controls_203q2_31", Sa = "_button_203q2_37", za = "_active_203q2_73", Da = "_ellipsis_203q2_85", Ma = "_size_203q2_91", lt = {
  pager: ba,
  alignLeft: va,
  alignCenter: ka,
  alignRight: wa,
  alignJustify: $a,
  summary: Na,
  controls: Oa,
  button: Sa,
  active: za,
  ellipsis: Da,
  size: Ma
};
function Ca(e, t, s, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(s)).replace("{2}", String(o));
}
function ys(e, t) {
  return e.replace("{0}", String(t));
}
function Ea(e, t, s) {
  if (t <= s)
    return Array.from({ length: t }, (r, a) => a + 1);
  const o = Math.floor(s / 2);
  let i = Math.max(1, e - o);
  const c = Math.min(t, i + s - 1);
  i = Math.max(1, c - s + 1);
  const p = [];
  for (let r = i; r <= c; r++) p.push(r);
  return i > 2 && p.unshift("ellipsis"), i > 1 && p.unshift(1), c < t - 1 && p.push("ellipsis"), c < t && p.push(t), p;
}
function Ia({
  count: e,
  pageSize: t,
  page: s,
  pageNumber: o,
  defaultPage: i = 1,
  pageSizeOptions: c,
  pageNumbersCount: p = 5,
  alwaysVisible: r = !1,
  horizontalAlign: a = "left",
  showPagingSummary: l,
  showSummary: u,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: k = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: x,
  summaryTemplate: N,
  pageSizeText: w = "Items per page",
  firstPageTitle: y = "First page",
  prevPageTitle: _ = "Previous page",
  nextPageTitle: f = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: $ = "Page {0}",
  pageAriaLabelFormat: b = "Page {0}",
  onPageChange: E,
  onPageSizeChange: h,
  ariaLabel: v = "Pagination",
  className: M,
  visible: I = !0
}) {
  const D = s ?? o ?? i, [S, g] = X(D), C = s !== void 0 || o !== void 0, P = C ? D : S, j = Math.max(1, Math.ceil(e / t)), A = Math.min(Math.max(1, P), j), H = l ?? u ?? !0, V = r || j > 1, J = Ea(A, j, p), Z = F(
    (U) => {
      const R = Math.min(Math.max(1, U), j);
      C || g(R);
      const te = (R - 1) * t;
      E?.({
        page: R,
        skip: te,
        top: t,
        pageCount: j,
        pageSize: t
      });
    },
    [C, E, j, t]
  ), ee = a === "center" ? lt.alignCenter : a === "right" ? lt.alignRight : a === "justify" ? lt.alignJustify : lt.alignLeft, ue = {
    count: e,
    pageNumber: A,
    pageSize: t,
    pageCount: j
  }, ie = (U) => {
    const R = Array.from(
      U.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), te = R.indexOf(document.activeElement);
    te !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (R[te + 1] ?? R[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (R[te - 1] ?? R[R.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), R[0]?.focus()) : U.key === "End" && (U.preventDefault(), R[R.length - 1]?.focus()));
  };
  return I === !1 || !V ? null : /* @__PURE__ */ O(
    "nav",
    {
      className: [lt.pager, ee, M].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        H && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: x ? x(ue) : N ? N({ count: e, pageNumber: A, pageSize: t }) : Ca(k, A, j, e) }),
        /* @__PURE__ */ O(
          "div",
          {
            className: lt.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: ie,
            children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: lt.button,
                  disabled: A <= 1,
                  onClick: () => Z(1),
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
                  disabled: A <= 1,
                  onClick: () => Z(A - 1),
                  "aria-label": _,
                  title: _,
                  children: "‹"
                }
              ),
              J.map(
                (U, R) => U === "ellipsis" ? /* @__PURE__ */ n("span", { className: lt.ellipsis, "aria-hidden": "true", children: "…" }, `e${R}`) : /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": U,
                    className: [lt.button, U === A ? lt.active : ""].filter(Boolean).join(" "),
                    "aria-current": U === A ? "page" : void 0,
                    "aria-label": ys(b, U),
                    title: ys($, U),
                    onClick: () => Z(U),
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
                  disabled: A >= j,
                  onClick: () => Z(A + 1),
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
                  disabled: A >= j,
                  onClick: () => Z(j),
                  "aria-label": m,
                  title: m,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && c && c.length > 0 && /* @__PURE__ */ O("label", { className: lt.size, children: [
          /* @__PURE__ */ n("span", { children: w }),
          /* @__PURE__ */ n(
            "select",
            {
              value: t,
              onChange: (U) => h?.(Number(U.target.value)),
              "aria-label": w,
              children: c.map((U) => /* @__PURE__ */ n("option", { value: U, children: U }, U))
            }
          )
        ] })
      ]
    }
  );
}
function rs(e) {
  const { pageNumber: t, onPageChange: s, summaryTemplate: o, showSummary: i, ...c } = e;
  return /* @__PURE__ */ n(
    Ia,
    {
      page: t,
      showPagingSummary: i,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: o ? (r) => o({
        count: r.count,
        pageNumber: r.pageNumber,
        pageSize: r.pageSize
      }) : void 0,
      onPageChange: s ? (r) => s(r.page) : void 0,
      ...c
    }
  );
}
function ja(e, t, s, o, i, c) {
  if (!t || !s) return e.map((a) => ({ type: "row", row: a }));
  const p = /* @__PURE__ */ new Map();
  e.forEach((a) => {
    const l = String(i(a, t) ?? ""), u = p.get(l);
    u ? u.push(a) : p.set(l, [a]);
  });
  const r = [];
  return p.forEach((a, l) => {
    const u = a[0], d = u != null ? i(u, t) : void 0;
    r.push({
      type: "group",
      group: {
        key: l,
        display: c(d),
        property: t,
        title: s.title ?? t,
        count: a.length
      }
    }), o.has(l) && a.forEach((k) => r.push({ type: "row", row: k }));
  }), r;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function Aa(e, t) {
  const s = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    s[i] = o === 0 ? "0px" : `${o}px`;
    const p = t[i] ?? c.width ?? "8rem";
    o += parseFloat(p);
  }), s;
}
function Ta(e, t) {
  if (e !== void 0)
    switch (t) {
      case "number": {
        const s = Number(e);
        return Number.isNaN(s) ? e : s;
      }
      case "date": {
        const s = new Date(e);
        return Number.isNaN(s.getTime()) ? e : s;
      }
      case "boolean":
        return e === "true" ? !0 : e === "false" ? !1 : e;
      default:
        return e;
    }
}
function $n(e, t) {
  if (t != null)
    return Gn(e, t);
}
function xs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const s = /^N(\d+)$/i.exec(t);
  if (s && typeof e == "number") return e.toFixed(Number(s[1]));
  if (t === "d" || t === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const bs = [
  "Ascending",
  "Descending",
  null
];
function Ra(e, t, s = {}) {
  const o = e.find((c) => c.property === t), i = bs[(o ? bs.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : s.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function La(e, t) {
  return sa(e, t);
}
function Pa(e, t, s) {
  const o = Math.max(1, Math.ceil(e.length / s)), i = Math.min(Math.max(1, t), o), c = (i - 1) * s;
  return {
    items: e.slice(c, c + s),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function Ba(e, t, s = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, a]) => ({
      property: r,
      operator: a.operator ?? "Contains",
      value: Ta(
        a.value,
        s.types?.[r] ?? "string"
      )
    })
  ), i = o.length > 0 ? Gs(
    e,
    { operator: s.logicalOperator ?? "And", filters: o },
    {
      logicalOperator: s.logicalOperator ?? "And",
      caseSensitivity: s.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = La(i, t.sorts);
  return {
    ...Pa(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function qa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Fa = "_grid_3nk8j_1", Ha = "_toolbar_3nk8j_8", Ka = "_picker_3nk8j_13", Ua = "_pickerButton_3nk8j_17", Wa = "_pickerPanel_3nk8j_31", Va = "_pickerItem_3nk8j_46", Xa = "_groupPanel_3nk8j_55", Ga = "_groupPanelActive_3nk8j_66", Ya = "_groupPanelText_3nk8j_70", Za = "_groupChip_3nk8j_74", Ja = "_groupRemove_3nk8j_85", Qa = "_groupRow_3nk8j_94", el = "_groupCell_3nk8j_98", tl = "_groupToggle_3nk8j_103", nl = "_editRow_3nk8j_116", sl = "_editCell_3nk8j_120", rl = "_editInput_3nk8j_125", ol = "_commandCell_3nk8j_135", al = "_commandButton_3nk8j_141", ll = "_data_3nk8j_156", il = "_table_3nk8j_163", cl = "_header_3nk8j_169", dl = "_center_3nk8j_181", ul = "_right_3nk8j_185", _l = "_sortButton_3nk8j_189", fl = "_sortIndicator_3nk8j_207", hl = "_sortIndex_3nk8j_211", pl = "_cell_3nk8j_222", ml = "_clickable_3nk8j_236", gl = "_frozen_3nk8j_244", yl = "_selected_3nk8j_250", xl = "_resizeHandle_3nk8j_258", bl = "_filterCell_3nk8j_276", vl = "_filterSelect_3nk8j_284", kl = "_filterInput_3nk8j_294", wl = "_empty_3nk8j_305", $l = "_loading_3nk8j_311", Nl = "_visuallyHidden_3nk8j_321", ge = {
  grid: Fa,
  toolbar: Ha,
  picker: Ka,
  pickerButton: Ua,
  pickerPanel: Wa,
  pickerItem: Va,
  groupPanel: Xa,
  groupPanelActive: Ga,
  groupPanelText: Ya,
  groupChip: Za,
  groupRemove: Ja,
  groupRow: Qa,
  groupCell: el,
  groupToggle: tl,
  editRow: nl,
  editCell: sl,
  editInput: rl,
  commandCell: ol,
  commandButton: al,
  data: ll,
  table: il,
  header: cl,
  center: dl,
  right: ul,
  sortButton: _l,
  sortIndicator: fl,
  sortIndex: hl,
  cell: pl,
  clickable: ml,
  frozen: gl,
  selected: yl,
  resizeHandle: xl,
  filterCell: bl,
  filterSelect: vl,
  filterInput: kl,
  empty: wl,
  loading: $l,
  visuallyHidden: Nl
}, Ol = {
  Ascending: "ascending",
  Descending: "descending"
};
function vs(e, t) {
  return e.filterable ?? t;
}
function Sl(e, t) {
  return e.sortable ?? t;
}
function zl(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Fb({
  columns: e,
  rows: t,
  rowKey: s,
  allowSorting: o = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: p = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: l = !1,
  pageSize: u = 10,
  pageSizeOptions: d,
  pageNumbersCount: k = 5,
  pagerPosition: x = "Bottom",
  showPagingSummary: N = !0,
  showPageSizeSelector: w = !0,
  selectionMode: y = "None",
  selectedKeys: _,
  onSelectionChange: f,
  showColumnPicker: m = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: b = !1,
  allowColumnReorder: E = !1,
  allowGrouping: h = !1,
  groupPanelText: v = "Drag a column header here to group",
  groupExpanded: M = !0,
  editMode: I = "None",
  allowRowCreate: D = !1,
  onRowUpdate: S,
  onRowCreate: g,
  onRowDelete: C,
  isLoading: P = !1,
  empty: j = "No records found",
  ariaLabel: A,
  className: H,
  onRowClick: V
}) {
  const [J, Z] = X([]), [ee, ue] = X(
    /* @__PURE__ */ new Map()
  ), [ie, U] = X(1), [R, te] = X(u), [G, ce] = X(
    () => e.map((T, L) => Ln(T, L))
  ), [oe, xe] = X(
    () => new Set(
      e.map((T, L) => T.visible !== !1 ? Ln(T, L) : "").filter(Boolean)
    )
  ), [ke, Be] = X({}), [ve, We] = X(!1), [ye, Ze] = X(null), [Ve, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, W] = X({}), z = ae(null), q = ae(null), ne = $e(() => {
    const T = /* @__PURE__ */ new Map();
    return e.forEach((L, le) => T.set(Ln(L, le), L)), T;
  }, [e]), _e = $e(
    () => G.filter((T) => oe.has(T)).map((T) => ({ key: T, column: ne.get(T) })).filter(
      (T) => T.column != null
    ),
    [G, oe, ne]
  ), se = $e(
    () => Aa(_e, ke),
    [_e, ke]
  ), me = I !== "None" || C != null || D, Ne = $e(
    () => Ba(
      t,
      { sorts: J, filters: ee, pageNumber: ie, pageSize: R },
      {
        logicalOperator: a,
        caseSensitivity: r,
        types: Object.fromEntries(
          e.filter((T) => T.type != null && T.property != null).map((T) => [
            T.property,
            T.type
          ])
        )
      }
    ),
    [
      t,
      J,
      ee,
      ie,
      R,
      a,
      r,
      e
    ]
  ), qe = $e(
    () => ye ? e.find((T) => T.property === ye) : void 0,
    [ye, e]
  ), Je = $e(
    () => Ve ?? new Set(
      M ? Ne.items.map(
        (T) => String($n(T, ye ?? "") ?? "")
      ) : []
    ),
    [Ve, M, Ne.items, ye]
  ), dt = $e(
    () => ja(
      Ne.items,
      ye ?? void 0,
      qe,
      Je,
      $n,
      (T) => xs(T, qe?.format)
    ),
    [Ne.items, ye, qe, Je]
  ), bt = $e(
    () => ye ? _e.filter((T) => T.column.property !== ye) : _e,
    [_e, ye]
  ), Q = (T) => {
    T !== "" && Z(Ra(J, T, { multi: i }));
  }, Se = (T, L) => {
    ue((le) => {
      const pe = new Map(le);
      return pe.set(T, L), pe;
    }), U(1);
  }, nt = (T) => {
    te(T), U(1);
  }, Wt = (T) => {
    if (y === "None") return;
    const L = s(T), le = _ ?? [];
    let pe;
    y === "Single" ? pe = le.length === 1 && le[0] === L ? [] : [L] : pe = le.includes(L) ? le.filter((Ie) => Ie !== L) : [...le, L], f?.(pe);
  }, Ot = (T) => {
    V?.(T);
  }, ze = (T, L, le) => {
    z.current = { key: T, startX: L, startWidth: le };
  }, Xe = (T) => {
    const L = z.current;
    if (!L) return;
    const le = T - L.startX, pe = Math.max(48, L.startWidth + le);
    Be((Ie) => ({ ...Ie, [L.key]: `${pe}px` }));
  }, vt = () => {
    z.current = null;
  }, Rt = (T) => {
    q.current = T;
  }, Jt = (T) => {
    const L = q.current;
    q.current = null, !(!L || L === T) && ce((le) => {
      const pe = [...le], Ie = pe.indexOf(L), je = pe.indexOf(T);
      return Ie < 0 || je < 0 ? le : (pe.splice(Ie, 1), pe.splice(je, 0, L), pe);
    });
  }, K = (T) => {
    xe((L) => {
      const le = new Set(L);
      return le.has(T) ? le.delete(T) : le.add(T), le;
    });
  }, de = () => {
    const T = q.current;
    if (q.current = null, !T || !h) return;
    const le = ne.get(T)?.property;
    le && (Ze(le), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, He = (T) => {
    Le((L) => {
      const le = L ?? new Set(
        M ? Ne.items.map(
          (Ie) => String($n(Ie, ye ?? "") ?? "")
        ) : []
      ), pe = new Set(le);
      return pe.has(T) ? pe.delete(T) : pe.add(T), pe;
    });
  }, Lt = (T) => {
    const L = {};
    e.forEach((le) => {
      le.property && (L[le.property] = $n(T, le.property));
    }), W(L), Qe(String(s(T)));
  }, St = () => {
    const T = {};
    e.forEach((L) => {
      L.property && L.type === "boolean" && (T[L.property] = !1);
    }), W(T), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, Y = (T) => {
    if (tt === "__new__") {
      const L = Object.fromEntries(
        e.filter((le) => le.property).map((le) => [le.property, et[le.property]])
      );
      g?.(L);
    } else if (T != null) {
      const L = { ...T, ...et };
      S?.(T, L);
    }
    B();
  }, re = l && (x === "Top" || x === "TopAndBottom"), he = l && (x === "Bottom" || x === "TopAndBottom"), fe = p && e.some((T) => vs(T, p)), be = (T, L, le) => T.render ? T.render(L, { index: 0 }) : xs($n(L, T.property), T.format), Te = (T) => {
    const L = [ge.cell];
    return T.align === "center" && L.push(ge.center), T.align === "right" && L.push(ge.right), T.frozen && L.push(ge.frozen), L.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, H].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ n(
      rs,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: k,
        showSummary: N,
        showPageSizeSelector: w,
        ariaLabel: he ? "Pagination (top)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: nt
      }
    ),
    (h || D || m) && /* @__PURE__ */ O("div", { className: ge.toolbar, children: [
      h && /* @__PURE__ */ n(
        "div",
        {
          className: [
            ge.groupPanel,
            ye ? ge.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: h ? (T) => T.preventDefault() : void 0,
          onDrop: h ? de : void 0,
          children: ye ? /* @__PURE__ */ O("span", { className: ge.groupChip, children: [
            qe?.title ?? ye,
            ":",
            " ",
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: ge.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${qe?.title ?? ye}`,
                children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
              }
            )
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: v })
        }
      ),
      D && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ge.pickerButton,
          onClick: St,
          children: "Add row"
        }
      ),
      m && /* @__PURE__ */ O("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => We((T) => !T),
            children: $
          }
        ),
        ve && /* @__PURE__ */ n(
          "div",
          {
            className: ge.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((T, L) => {
              const le = Ln(T, L);
              return /* @__PURE__ */ O("label", { className: ge.pickerItem, children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    type: "checkbox",
                    checked: oe.has(le),
                    onChange: () => K(le)
                  }
                ),
                T.title ?? T.property
              ] }, le);
            })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ O("div", { className: ge.data, children: [
      /* @__PURE__ */ O(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": Ne.total + 1,
          "aria-label": A,
          "aria-busy": P || void 0,
          children: [
            /* @__PURE__ */ O("colgroup", { children: [
              bt.map(({ key: T, column: L }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: ke[T] ?? L.width,
                    minWidth: L.minWidth,
                    maxWidth: L.maxWidth
                  }
                },
                T
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ O("thead", { children: [
              /* @__PURE__ */ O("tr", { children: [
                bt.map(({ key: T, column: L }) => {
                  const le = Sl(L, o), pe = J.find((Me) => Me.property === L.property), Ie = pe ? J.indexOf(pe) + 1 : 0, je = L.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": le && pe ? Ol[pe.sortOrder] : "none",
                      className: [
                        ge.header,
                        je === "center" ? ge.center : "",
                        je === "right" ? ge.right : "",
                        L.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: L.frozen ? { left: se[T] } : void 0,
                      scope: "col",
                      draggable: E || h || void 0,
                      onDragStart: E || h ? (Me) => {
                        Me.dataTransfer && (Me.dataTransfer.effectAllowed = "move"), Rt(T);
                      } : void 0,
                      onDragOver: E ? (Me) => Me.preventDefault() : void 0,
                      onDrop: E ? () => Jt(T) : void 0,
                      children: [
                        le ? /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => L.property != null && Q(L.property),
                            "aria-label": pe ? pe.sortOrder === "Ascending" ? `Sort ${L.title ?? L.property} descending` : `Sort ${L.title ?? L.property} ascending` : `Sort ${L.title ?? L.property} ascending`,
                            children: [
                              L.title ?? L.property,
                              pe && /* @__PURE__ */ n(
                                "span",
                                {
                                  className: ge.sortIndicator,
                                  "aria-hidden": "true",
                                  children: pe.sortOrder === "Ascending" ? "▲" : "▼"
                                }
                              ),
                              Ie > 1 && c && /* @__PURE__ */ n("span", { className: ge.sortIndex, children: Ie })
                            ]
                          }
                        ) : L.title ?? L.property,
                        b && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${L.title ?? L.property}`,
                            onMouseDown: (Me) => {
                              Me.preventDefault(), Me.stopPropagation();
                              const at = ke[T] ?? L.width, zt = at ? parseFloat(at) : 96;
                              ze(
                                T,
                                Me.clientX,
                                Number.isFinite(zt) ? zt : 96
                              );
                            },
                            onMouseMove: (Me) => {
                              z.current?.key === T && Xe(Me.clientX);
                            },
                            onMouseUp: vt,
                            onMouseLeave: () => {
                              z.current?.key === T && vt();
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
              fe && /* @__PURE__ */ n("tr", { children: bt.map(({ key: T, column: L }) => {
                if (!vs(L, p))
                  return /* @__PURE__ */ n("td", { className: ge.filterCell }, T);
                const le = ee.get(L.property ?? "");
                return /* @__PURE__ */ O("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ O(
                    "label",
                    {
                      className: ge.visuallyHidden,
                      htmlFor: `df-${L.property}`,
                      children: [
                        "Filter ",
                        L.title ?? L.property
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${L.property}`,
                      className: ge.filterSelect,
                      value: le?.operator ?? qa(L.type ?? "string"),
                      onChange: (pe) => Se(L.property ?? "", {
                        ...le,
                        operator: pe.target.value
                      }),
                      "aria-label": `${L.title ?? L.property} operator`,
                      children: Vs.filter((pe) => pe !== "Custom").map(
                        (pe) => /* @__PURE__ */ n("option", { value: pe, children: pe }, pe)
                      )
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: le?.value ?? "",
                      onChange: (pe) => Se(L.property ?? "", {
                        ...le,
                        value: pe.target.value
                      }),
                      placeholder: `Filter ${L.title ?? L.property}`,
                      "aria-label": `${L.title ?? L.property} value`
                    }
                  )
                ] }, T);
              }) })
            ] }),
            /* @__PURE__ */ O("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ O("tr", { className: ge.editRow, children: [
                bt.map(({ key: T, column: L }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: L.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: L.type === "number" ? "number" : L.type === "boolean" ? "checkbox" : "text",
                    checked: L.type === "boolean" ? !!et[L.property] : void 0,
                    value: L.type === "boolean" ? void 0 : String(et[L.property] ?? ""),
                    onChange: (le) => W((pe) => ({
                      ...pe,
                      [L.property]: L.type === "boolean" ? le.target.checked : le.target.value
                    })),
                    "aria-label": `${L.title ?? L.property} (new)`
                  }
                ) }, T)),
                me && /* @__PURE__ */ O("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: () => Y(),
                      children: "Save"
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: B,
                      children: "Cancel"
                    }
                  )
                ] })
              ] }),
              dt.map((T) => {
                if (T.type === "group" && T.group) {
                  const je = Je.has(T.group.key);
                  return /* @__PURE__ */ n(
                    "tr",
                    {
                      className: ge.groupRow,
                      children: /* @__PURE__ */ n(
                        "td",
                        {
                          colSpan: bt.length + (me ? 1 : 0),
                          className: ge.groupCell,
                          children: /* @__PURE__ */ O(
                            "button",
                            {
                              type: "button",
                              className: ge.groupToggle,
                              "aria-expanded": je,
                              onClick: () => He(T.group.key),
                              children: [
                                /* @__PURE__ */ n("span", { "aria-hidden": "true", children: je ? "▼" : "▶" }),
                                T.group.title,
                                ": ",
                                T.group.display,
                                " (",
                                T.group.count,
                                ")"
                              ]
                            }
                          )
                        }
                      )
                    },
                    `group-${T.group.key}`
                  );
                }
                const L = T.row, le = s(L), pe = (_ ?? []).includes(le), Ie = tt != null && tt === String(le);
                return /* @__PURE__ */ O(
                  "tr",
                  {
                    className: [
                      V || y !== "None" ? ge.clickable : "",
                      pe ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": y !== "None" ? pe : void 0,
                    onClick: V || y !== "None" ? (je) => {
                      zl(je.target) || (Ot(L), Wt(L));
                    } : void 0,
                    children: [
                      bt.map(({ key: je, column: Me }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: Te(Me),
                          style: Me.frozen ? { left: se[je] } : void 0,
                          children: Ie && Me.property ? /* @__PURE__ */ n(
                            "input",
                            {
                              className: ge.editInput,
                              type: Me.type === "number" ? "number" : Me.type === "boolean" ? "checkbox" : "text",
                              checked: Me.type === "boolean" ? !!et[Me.property] : void 0,
                              value: Me.type === "boolean" ? void 0 : String(et[Me.property] ?? ""),
                              onChange: (at) => W((zt) => ({
                                ...zt,
                                [Me.property]: Me.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${Me.title ?? Me.property} (edit)`
                            }
                          ) : be(Me, L)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(Ce, { children: [
                        /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Y(L),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: B,
                            children: "Cancel"
                          }
                        )
                      ] }) : /* @__PURE__ */ O(Ce, { children: [
                        I !== "None" && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Lt(L),
                            children: "Edit"
                          }
                        ),
                        C && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => C(L),
                            children: "Delete"
                          }
                        )
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
      Ne.items.length === 0 && !P && /* @__PURE__ */ n("div", { className: ge.empty, children: j }),
      P && /* @__PURE__ */ n("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    he && /* @__PURE__ */ n(
      rs,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: k,
        showSummary: N,
        showPageSizeSelector: w,
        ariaLabel: re ? "Pagination (bottom)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Dl = "_wrap_1e4xo_1", Ml = "_grid_1e4xo_7", Cl = "_stacked_1e4xo_13", El = "_item_1e4xo_19", Il = "_empty_1e4xo_25", Nn = {
  wrap: Dl,
  grid: Ml,
  stacked: Cl,
  item: El,
  empty: Il
};
function Hb({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: s,
  wrapItems: o = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: p,
  loadingTemplate: r,
  isLoading: a = !1,
  showPageSizeSelector: l = !0,
  className: u,
  ariaLabel: d = "Data list"
}) {
  const [k, x] = X(1), [N, w] = X(t), y = e.length, _ = Math.max(1, Math.ceil(y / N)), f = Math.min(Math.max(1, k), _), m = $e(() => {
    const b = (f - 1) * N;
    return e.slice(b, b + N);
  }, [e, f, N]), $ = o ? Nn.grid : Nn.stacked;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Nn.wrap, u].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        a && r != null ? r : y === 0 ? p ?? /* @__PURE__ */ n("div", { className: Nn.empty, children: c }) : /* @__PURE__ */ n("div", { className: $, children: m.map((b, E) => /* @__PURE__ */ n("div", { className: Nn.item, children: i ? i(b, E) : String(b) }, E)) }),
        /* @__PURE__ */ n(
          rs,
          {
            pageNumber: f,
            pageSize: N,
            count: y,
            pageSizeOptions: s,
            showPageSizeSelector: l,
            onPageChange: x,
            onPageSizeChange: (b) => {
              w(b), x(1);
            }
          }
        )
      ]
    }
  );
}
const jl = "_label_1qfpw_1", Al = {
  label: jl
}, Kb = Fe(function({ className: t, children: s, ...o }, i) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: i,
      className: [Al.label, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}), Tl = "_input_1xwnr_1", Rl = "_invalid_1xwnr_37", Ll = "_xs_1xwnr_44", Pl = "_sm_1xwnr_50", Bl = "_md_1xwnr_56", ql = "_lg_1xwnr_62", Fl = "_xl_1xwnr_68", Jn = {
  input: Tl,
  invalid: Rl,
  xs: Ll,
  sm: Pl,
  md: Bl,
  lg: ql,
  xl: Fl
}, Ub = Fe(function({ size: t = "md", invalid: s = !1, className: o, visible: i = !0, ...c }, p) {
  return i === !1 ? null : /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      className: [
        Jn.input,
        Jn[t],
        s ? Jn.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c
    }
  );
}), Hl = "_checkbox_lq5s0_1", Kl = {
  checkbox: Hl
}, Wb = Fe(
  function({ className: t, ...s }, o) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [Kl.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), Ul = {
  switch: "_switch_luh7n_1"
}, Wl = Fe(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [Ul.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Vl = "_trigger_yuavp_1", Xl = "_tooltip_yuavp_7", Gl = "_top_yuavp_34", Yl = "_right_yuavp_40", Zl = "_bottom_yuavp_46", Jl = "_left_yuavp_52", Ql = "_arrow_yuavp_58", Pn = {
  trigger: Vl,
  tooltip: Xl,
  "se-tooltip-in": "_se-tooltip-in_yuavp_1",
  top: Gl,
  right: Yl,
  bottom: Zl,
  left: Jl,
  arrow: Ql
};
function Vb({
  content: e,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = Ye(), p = ae(null), [r, a] = X(!1), l = () => {
    p.current = window.setTimeout(() => a(!0), o);
  }, u = () => {
    p.current !== null && (window.clearTimeout(p.current), p.current = null), a(!1);
  };
  we(() => {
    if (!r) return;
    const k = (x) => {
      x.key === "Escape" && u();
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [r]);
  const d = Tn(t) ? Hs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      r ? c : null
    ].filter((k) => typeof k == "string").join(" ") || void 0
  }) : t;
  return /* @__PURE__ */ O(
    "span",
    {
      className: [Pn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: l,
      onMouseLeave: u,
      onFocus: l,
      onBlur: u,
      children: [
        d,
        r && /* @__PURE__ */ O(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [Pn.tooltip, Pn[s]].filter(Boolean).join(" "),
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
const ei = "_dialog_18lzl_1", ti = "_sm_18lzl_72", ni = "_md_18lzl_76", si = "_lg_18lzl_80", ri = "_header_18lzl_84", oi = "_title_18lzl_94", ai = "_description_18lzl_101", li = "_close_18lzl_108", ii = "_body_18lzl_138", ci = "_footer_18lzl_150", Xt = {
  dialog: ei,
  "se-dialog-in": "_se-dialog-in_18lzl_1",
  sm: ti,
  md: ni,
  lg: si,
  header: ri,
  title: oi,
  description: ai,
  close: li,
  body: ii,
  footer: ci
};
function Xb({
  open: e,
  onClose: t,
  title: s,
  description: o,
  children: i,
  footer: c,
  size: p = "md",
  width: r,
  height: a,
  className: l
}) {
  const u = ae(null), d = Ye(), k = Ye(), x = ae(t);
  we(() => {
    x.current = t;
  });
  const N = ae(!1), w = ae(!1), y = F(() => {
    N.current || (N.current = !0, x.current());
  }, []), _ = F(() => {
    if (w.current) {
      w.current = !1;
      return;
    }
    x.current();
  }, []);
  return we(() => {
    const f = u.current;
    if (f)
      if (e && !f.open) {
        const m = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        f.showModal(), (f.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? f.querySelector("button"))?.focus();
        const b = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const E = (h) => {
          h.preventDefault(), y();
        };
        return f.addEventListener("cancel", E), () => {
          f.removeEventListener("cancel", E), document.body.style.overflow = b, m?.focus({ preventScroll: !0 });
        };
      } else !e && f.open && (w.current = N.current, N.current = !1, f.close());
  }, [e, y]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ O(
    "dialog",
    {
      ref: u,
      className: [Xt.dialog, Xt[p], l].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: _,
      onClick: (f) => {
        f.target === u.current && y();
      },
      "aria-modal": "true",
      "aria-labelledby": s ? d : void 0,
      "aria-describedby": o ? k : void 0,
      children: [
        s && /* @__PURE__ */ O("header", { className: Xt.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: d, className: Xt.title, children: s }),
            o && /* @__PURE__ */ n("p", { id: k, className: Xt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Xt.close,
              onClick: y,
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: Xt.body, children: i }),
        c && /* @__PURE__ */ n("footer", { className: Xt.footer, children: c })
      ]
    }
  );
}
const di = "_viewport_o7kje_1", ui = "_topLeft_o7kje_13", _i = "_topRight_o7kje_20", fi = "_bottomLeft_o7kje_25", hi = "_toast_o7kje_30", pi = "_leaving_o7kje_61", mi = "_info_o7kje_77", gi = "_success_o7kje_86", yi = "_warning_o7kje_95", xi = "_danger_o7kje_104", bi = "_content_o7kje_113", vi = "_title_o7kje_118", ki = "_description_o7kje_141", wi = "_dismiss_o7kje_148", $i = "_actions_o7kje_169", Ni = "_action_o7kje_169", Oi = "_cancel_o7kje_177", Si = "_progress_o7kje_215", pt = {
  viewport: di,
  topLeft: ui,
  topRight: _i,
  bottomLeft: fi,
  toast: hi,
  "se-toast-in": "_se-toast-in_o7kje_1",
  leaving: pi,
  "se-toast-out": "_se-toast-out_o7kje_1",
  info: mi,
  success: gi,
  warning: yi,
  danger: xi,
  content: bi,
  title: vi,
  description: ki,
  dismiss: wi,
  actions: $i,
  action: Ni,
  cancel: Oi,
  progress: Si,
  "se-toast-progress": "_se-toast-progress_o7kje_1"
}, Ys = Us(null);
function Gb() {
  const e = Ks(Ys);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const zi = 200, Di = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Yb({
  children: e,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, p] = X([]), [r, a] = X(!1), l = ae([]), u = ae(/* @__PURE__ */ new Map()), d = ae(!1), k = ae(0), x = (S) => {
    d.current = S, a(S);
  }, N = F((S) => {
    const g = u.current.get(S);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(
      0,
      g.remaining - (Date.now() - g.startedAt)
    ));
  }, []), w = F((S) => {
    const g = u.current.get(S);
    g && (window.clearTimeout(g.timeoutId), u.current.delete(S));
  }, []), y = F(
    (S) => {
      w(S), p((g) => {
        const C = g.filter((P) => P.id !== S);
        return l.current = C, C;
      });
    },
    [w]
  ), _ = F(
    (S) => {
      const g = l.current.find((C) => C.id === S);
      !g || g.leaving || (g.onAutoClose?.(), y(S));
    },
    [y]
  ), f = F(
    (S) => {
      const g = u.current.get(S);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => _(S), g.remaining));
    },
    [_]
  ), m = F(() => {
    d.current || u.current.forEach((S, g) => N(g)), x(!0);
  }, [N]), $ = F(() => {
    u.current.forEach((S, g) => f(g)), x(!1);
  }, [f]);
  we(() => {
    if (!o) return;
    const S = () => {
      document.hidden ? m() : $();
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, [o, m, $]);
  const b = F(
    (S) => {
      const g = l.current.find((C) => C.id === S);
      !g || g.leaving || (g.onDismiss?.(), p((C) => {
        const P = C.map(
          (j) => j.id === S ? { ...j, leaving: !0 } : j
        );
        return l.current = P, P;
      }), window.setTimeout(() => y(S), zi));
    },
    [y]
  ), E = F(
    (S) => {
      if (S.durationMs <= 0) return;
      const g = {
        remaining: S.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(S.id, g), d.current || f(S.id);
    },
    [f]
  ), h = F(
    (S) => {
      const g = l.current.find((P) => P.id === S.id), C = {
        id: S.id ?? ++k.current,
        title: S.title,
        description: S.description,
        severity: S.severity ?? "info",
        durationMs: S.durationMs ?? t,
        action: S.action,
        cancel: S.cancel,
        dismissible: S.dismissible ?? !0,
        closeOnClick: S.closeOnClick ?? !1,
        showProgress: S.showProgress ?? !1,
        position: S.position ?? s,
        onDismiss: S.onDismiss,
        onAutoClose: S.onAutoClose
      };
      p((P) => {
        const j = g ? P.map(
          (A) => A.id === C.id ? { ...C, leaving: !1 } : A
        ) : [...P, C];
        return l.current = j, j;
      }), g && w(C.id), E(C);
    },
    [t, s, E, w]
  ), v = $e(() => ({ toast: h }), [h]), M = $e(
    () => Array.from(/* @__PURE__ */ new Set([s, ...c.map((S) => S.position)])),
    [s, c]
  ), I = o ? m : void 0, D = o ? $ : void 0;
  return /* @__PURE__ */ O(Ys.Provider, { value: v, children: [
    e,
    M.map((S) => /* @__PURE__ */ n(
      "div",
      {
        className: [pt.viewport, pt[Di[S]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: D,
        children: c.filter((g) => g.position === S).map((g) => /* @__PURE__ */ O(
          "div",
          {
            role: g.severity === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": g.closeOnClick ? "true" : "false",
            className: [
              pt.toast,
              pt[g.severity],
              g.leaving ? pt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: g.closeOnClick ? () => b(g.id) : void 0,
            children: [
              /* @__PURE__ */ O("div", { className: pt.content, children: [
                /* @__PURE__ */ n("div", { className: pt.title, children: g.title }),
                g.description && /* @__PURE__ */ n("div", { className: pt.description, children: g.description }),
                (g.action || g.cancel) && /* @__PURE__ */ O("div", { className: pt.actions, children: [
                  g.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: pt.action,
                      onClick: () => {
                        g.action?.onClick?.(), b(g.id);
                      },
                      children: g.action.label
                    }
                  ),
                  g.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: pt.cancel,
                      onClick: () => {
                        g.cancel?.onClick?.(), b(g.id);
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
                  className: pt.dismiss,
                  onClick: () => b(g.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
                }
              ),
              g.showProgress && g.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: pt.progress,
                  style: { animationDuration: `${g.durationMs}ms` }
                }
              )
            ]
          },
          g.id
        ))
      },
      S
    ))
  ] });
}
const Mi = "_alert_hqzdx_1", Ci = "_xs_hqzdx_28", Ei = "_sm_hqzdx_38", Ii = "_lg_hqzdx_48", ji = "_xl_hqzdx_58", Ai = "_primary_hqzdx_69", Ti = "_secondary_hqzdx_74", Ri = "_light_hqzdx_79", Li = "_base_hqzdx_84", Pi = "_dark_hqzdx_89", Bi = "_info_hqzdx_94", qi = "_success_hqzdx_99", Fi = "_warning_hqzdx_104", Hi = "_danger_hqzdx_109", Ki = "_flat_hqzdx_116", Ui = "_outlined_hqzdx_123", Wi = "_filled_hqzdx_131", Vi = "_text_hqzdx_138", Xi = "_icon_hqzdx_180", Gi = "_content_hqzdx_191", Yi = "_title_hqzdx_196", Zi = "_body_hqzdx_202", Ji = "_dismiss_hqzdx_208", Et = {
  alert: Mi,
  xs: Ci,
  sm: Ei,
  lg: Ii,
  xl: ji,
  primary: Ai,
  secondary: Ti,
  light: Ri,
  base: Li,
  dark: Pi,
  info: Bi,
  success: qi,
  warning: Fi,
  danger: Hi,
  flat: Ki,
  outlined: Ui,
  filled: Wi,
  text: Vi,
  icon: Xi,
  content: Gi,
  title: Yi,
  body: Zi,
  dismiss: Ji,
  "shade-lighter": "_shade-lighter_hqzdx_450",
  "shade-light": "_shade-light_hqzdx_450",
  "shade-dark": "_shade-dark_hqzdx_460",
  "shade-darker": "_shade-darker_hqzdx_464"
}, Qi = {
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
function Zb({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: s,
  size: o = "md",
  title: i,
  icon: c,
  showIcon: p = !0,
  children: r,
  dismissible: a = !0,
  onDismiss: l,
  visible: u,
  onVisibleChange: d,
  className: k,
  ...x
}) {
  const [N, w] = X(!1);
  if (u === !1 || u === void 0 && N)
    return null;
  const y = () => {
    u === void 0 && w(!0), l?.(), d?.(!1);
  }, _ = e, f = ds(t, "filled"), m = s && s !== "default" ? `shade-${s}` : null, $ = c ?? (p ? /* @__PURE__ */ n(De, { name: Qi[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...x,
      className: [
        Et.alert,
        Et[_],
        Et[f],
        m ? Et[m] : null,
        Et[o],
        k
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          i && /* @__PURE__ */ n("div", { className: Et.title, children: i }),
          r && /* @__PURE__ */ n("div", { className: Et.body, children: r })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const ec = "_skeleton_7ssmn_1", tc = "_text_7ssmn_35", nc = "_circle_7ssmn_40", sc = "_rect_7ssmn_44", ks = {
  skeleton: ec,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_7ssmn_1",
  text: tc,
  circle: nc,
  rect: sc
};
function Jb({
  variant: e = "text",
  width: t,
  height: s,
  className: o
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (i.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [ks.skeleton, ks[e], o].filter(Boolean).join(" "),
      style: i
    }
  );
}
const rc = "_row_tkkv2_1", oc = "_gapXs_tkkv2_12", ac = "_gapSm_tkkv2_17", lc = "_gapMd_tkkv2_22", ic = "_gapLg_tkkv2_27", cc = "_gapXl_tkkv2_32", dc = "_start_tkkv2_37", uc = "_center_tkkv2_41", _c = "_end_tkkv2_45", fc = "_stretch_tkkv2_49", hc = "_baseline_tkkv2_53", pc = "_noWrap_tkkv2_109", mc = "_wrapReverse_tkkv2_113", gc = "_gapRowXs_tkkv2_117", yc = "_gapRowSm_tkkv2_121", xc = "_gapRowMd_tkkv2_125", bc = "_gapRowLg_tkkv2_129", vc = "_gapRowXl_tkkv2_133", ln = {
  row: rc,
  gapXs: oc,
  gapSm: ac,
  gapMd: lc,
  gapLg: ic,
  gapXl: cc,
  start: dc,
  center: uc,
  end: _c,
  stretch: fc,
  baseline: hc,
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
  noWrap: pc,
  wrapReverse: mc,
  gapRowXs: gc,
  gapRowSm: yc,
  gapRowMd: xc,
  gapRowLg: bc,
  gapRowXl: vc
}, kc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, wc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function $c(e) {
  return typeof e != "string" ? null : kc[e] ?? null;
}
function Nc(e) {
  return typeof e != "string" ? null : wc[e] ?? null;
}
function ws(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Qb({
  gap: e,
  rowGap: t,
  align: s = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: p,
  ...r
}) {
  const a = $c(e), l = Nc(t), u = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, d = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...u ? { gap: u, "--dx-col-gap": u } : {},
    ...t != null && !l ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...p
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln.row,
        ln[s],
        ln[`justify-${o}`],
        ws(i) != null ? ln[ws(i)] : null,
        a ? ln[a] : null,
        l ? ln[l] : null,
        c
      ].filter(Boolean).join(" "),
      style: d,
      ...r
    }
  );
}
const Oc = "_column_sh0ss_1", Sc = "_Size1_sh0ss_15", zc = "_Size2_sh0ss_24", Dc = "_Size3_sh0ss_33", Mc = "_Size4_sh0ss_42", Cc = "_Size5_sh0ss_51", Ec = "_Size6_sh0ss_60", Ic = "_Size7_sh0ss_69", jc = "_Size8_sh0ss_78", Ac = "_Size9_sh0ss_87", Tc = "_Size10_sh0ss_96", Rc = "_Size11_sh0ss_105", Lc = "_Size12_sh0ss_114", Pc = "_Offset0_sh0ss_119", Bc = "_Offset1_sh0ss_122", qc = "_Offset2_sh0ss_127", Fc = "_Offset3_sh0ss_132", Hc = "_Offset4_sh0ss_137", Kc = "_Offset5_sh0ss_142", Uc = "_Offset6_sh0ss_147", Wc = "_Offset7_sh0ss_152", Vc = "_Offset8_sh0ss_157", Xc = "_Offset9_sh0ss_162", Gc = "_Offset10_sh0ss_167", Yc = "_Offset11_sh0ss_172", Zc = "_Offset12_sh0ss_177", Jc = "_OrderFirst_sh0ss_182", Qc = "_OrderLast_sh0ss_185", ed = "_Order0_sh0ss_188", td = "_Order1_sh0ss_191", nd = "_Order2_sh0ss_194", sd = "_Order3_sh0ss_197", rd = "_Order4_sh0ss_200", od = "_Order5_sh0ss_203", ad = "_Order6_sh0ss_206", ld = "_Order7_sh0ss_209", id = "_Order8_sh0ss_212", cd = "_Order9_sh0ss_215", dd = "_Order10_sh0ss_218", ud = "_Order11_sh0ss_221", _d = "_Order12_sh0ss_224", fd = "_xsSize1_sh0ss_229", hd = "_xsSize2_sh0ss_238", pd = "_xsSize3_sh0ss_247", md = "_xsSize4_sh0ss_256", gd = "_xsSize5_sh0ss_265", yd = "_xsSize6_sh0ss_274", xd = "_xsSize7_sh0ss_283", bd = "_xsSize8_sh0ss_292", vd = "_xsSize9_sh0ss_301", kd = "_xsSize10_sh0ss_310", wd = "_xsSize11_sh0ss_321", $d = "_xsSize12_sh0ss_332", Nd = "_xsOffset0_sh0ss_337", Od = "_xsOffset1_sh0ss_340", Sd = "_xsOffset2_sh0ss_345", zd = "_xsOffset3_sh0ss_350", Dd = "_xsOffset4_sh0ss_355", Md = "_xsOffset5_sh0ss_360", Cd = "_xsOffset6_sh0ss_365", Ed = "_xsOffset7_sh0ss_370", Id = "_xsOffset8_sh0ss_375", jd = "_xsOffset9_sh0ss_380", Ad = "_xsOffset10_sh0ss_385", Td = "_xsOffset11_sh0ss_391", Rd = "_xsOffset12_sh0ss_397", Ld = "_xsOrderFirst_sh0ss_403", Pd = "_xsOrderLast_sh0ss_406", Bd = "_xsOrder0_sh0ss_409", qd = "_xsOrder1_sh0ss_412", Fd = "_xsOrder2_sh0ss_415", Hd = "_xsOrder3_sh0ss_418", Kd = "_xsOrder4_sh0ss_421", Ud = "_xsOrder5_sh0ss_424", Wd = "_xsOrder6_sh0ss_427", Vd = "_xsOrder7_sh0ss_430", Xd = "_xsOrder8_sh0ss_433", Gd = "_xsOrder9_sh0ss_436", Yd = "_xsOrder10_sh0ss_439", Zd = "_xsOrder11_sh0ss_442", Jd = "_xsOrder12_sh0ss_445", Qd = "_smSize1_sh0ss_451", eu = "_smSize2_sh0ss_460", tu = "_smSize3_sh0ss_469", nu = "_smSize4_sh0ss_478", su = "_smSize5_sh0ss_487", ru = "_smSize6_sh0ss_496", ou = "_smSize7_sh0ss_505", au = "_smSize8_sh0ss_514", lu = "_smSize9_sh0ss_523", iu = "_smSize10_sh0ss_532", cu = "_smSize11_sh0ss_543", du = "_smSize12_sh0ss_554", uu = "_smOffset0_sh0ss_559", _u = "_smOffset1_sh0ss_562", fu = "_smOffset2_sh0ss_567", hu = "_smOffset3_sh0ss_572", pu = "_smOffset4_sh0ss_577", mu = "_smOffset5_sh0ss_582", gu = "_smOffset6_sh0ss_587", yu = "_smOffset7_sh0ss_592", xu = "_smOffset8_sh0ss_597", bu = "_smOffset9_sh0ss_602", vu = "_smOffset10_sh0ss_607", ku = "_smOffset11_sh0ss_613", wu = "_smOffset12_sh0ss_619", $u = "_smOrderFirst_sh0ss_625", Nu = "_smOrderLast_sh0ss_628", Ou = "_smOrder0_sh0ss_631", Su = "_smOrder1_sh0ss_634", zu = "_smOrder2_sh0ss_637", Du = "_smOrder3_sh0ss_640", Mu = "_smOrder4_sh0ss_643", Cu = "_smOrder5_sh0ss_646", Eu = "_smOrder6_sh0ss_649", Iu = "_smOrder7_sh0ss_652", ju = "_smOrder8_sh0ss_655", Au = "_smOrder9_sh0ss_658", Tu = "_smOrder10_sh0ss_661", Ru = "_smOrder11_sh0ss_664", Lu = "_smOrder12_sh0ss_667", Pu = "_mdSize1_sh0ss_673", Bu = "_mdSize2_sh0ss_682", qu = "_mdSize3_sh0ss_691", Fu = "_mdSize4_sh0ss_700", Hu = "_mdSize5_sh0ss_709", Ku = "_mdSize6_sh0ss_718", Uu = "_mdSize7_sh0ss_727", Wu = "_mdSize8_sh0ss_736", Vu = "_mdSize9_sh0ss_745", Xu = "_mdSize10_sh0ss_754", Gu = "_mdSize11_sh0ss_765", Yu = "_mdSize12_sh0ss_776", Zu = "_mdOffset0_sh0ss_781", Ju = "_mdOffset1_sh0ss_784", Qu = "_mdOffset2_sh0ss_789", e_ = "_mdOffset3_sh0ss_794", t_ = "_mdOffset4_sh0ss_799", n_ = "_mdOffset5_sh0ss_804", s_ = "_mdOffset6_sh0ss_809", r_ = "_mdOffset7_sh0ss_814", o_ = "_mdOffset8_sh0ss_819", a_ = "_mdOffset9_sh0ss_824", l_ = "_mdOffset10_sh0ss_829", i_ = "_mdOffset11_sh0ss_835", c_ = "_mdOffset12_sh0ss_841", d_ = "_mdOrderFirst_sh0ss_847", u_ = "_mdOrderLast_sh0ss_850", __ = "_mdOrder0_sh0ss_853", f_ = "_mdOrder1_sh0ss_856", h_ = "_mdOrder2_sh0ss_859", p_ = "_mdOrder3_sh0ss_862", m_ = "_mdOrder4_sh0ss_865", g_ = "_mdOrder5_sh0ss_868", y_ = "_mdOrder6_sh0ss_871", x_ = "_mdOrder7_sh0ss_874", b_ = "_mdOrder8_sh0ss_877", v_ = "_mdOrder9_sh0ss_880", k_ = "_mdOrder10_sh0ss_883", w_ = "_mdOrder11_sh0ss_886", $_ = "_mdOrder12_sh0ss_889", N_ = "_lgSize1_sh0ss_895", O_ = "_lgSize2_sh0ss_904", S_ = "_lgSize3_sh0ss_913", z_ = "_lgSize4_sh0ss_922", D_ = "_lgSize5_sh0ss_931", M_ = "_lgSize6_sh0ss_940", C_ = "_lgSize7_sh0ss_949", E_ = "_lgSize8_sh0ss_958", I_ = "_lgSize9_sh0ss_967", j_ = "_lgSize10_sh0ss_976", A_ = "_lgSize11_sh0ss_987", T_ = "_lgSize12_sh0ss_998", R_ = "_lgOffset0_sh0ss_1003", L_ = "_lgOffset1_sh0ss_1006", P_ = "_lgOffset2_sh0ss_1011", B_ = "_lgOffset3_sh0ss_1016", q_ = "_lgOffset4_sh0ss_1021", F_ = "_lgOffset5_sh0ss_1026", H_ = "_lgOffset6_sh0ss_1031", K_ = "_lgOffset7_sh0ss_1036", U_ = "_lgOffset8_sh0ss_1041", W_ = "_lgOffset9_sh0ss_1046", V_ = "_lgOffset10_sh0ss_1051", X_ = "_lgOffset11_sh0ss_1057", G_ = "_lgOffset12_sh0ss_1063", Y_ = "_lgOrderFirst_sh0ss_1069", Z_ = "_lgOrderLast_sh0ss_1072", J_ = "_lgOrder0_sh0ss_1075", Q_ = "_lgOrder1_sh0ss_1078", ef = "_lgOrder2_sh0ss_1081", tf = "_lgOrder3_sh0ss_1084", nf = "_lgOrder4_sh0ss_1087", sf = "_lgOrder5_sh0ss_1090", rf = "_lgOrder6_sh0ss_1093", of = "_lgOrder7_sh0ss_1096", af = "_lgOrder8_sh0ss_1099", lf = "_lgOrder9_sh0ss_1102", cf = "_lgOrder10_sh0ss_1105", df = "_lgOrder11_sh0ss_1108", uf = "_lgOrder12_sh0ss_1111", _f = "_xlSize1_sh0ss_1117", ff = "_xlSize2_sh0ss_1126", hf = "_xlSize3_sh0ss_1135", pf = "_xlSize4_sh0ss_1144", mf = "_xlSize5_sh0ss_1153", gf = "_xlSize6_sh0ss_1162", yf = "_xlSize7_sh0ss_1171", xf = "_xlSize8_sh0ss_1180", bf = "_xlSize9_sh0ss_1189", vf = "_xlSize10_sh0ss_1198", kf = "_xlSize11_sh0ss_1209", wf = "_xlSize12_sh0ss_1220", $f = "_xlOffset0_sh0ss_1225", Nf = "_xlOffset1_sh0ss_1228", Of = "_xlOffset2_sh0ss_1233", Sf = "_xlOffset3_sh0ss_1238", zf = "_xlOffset4_sh0ss_1243", Df = "_xlOffset5_sh0ss_1248", Mf = "_xlOffset6_sh0ss_1253", Cf = "_xlOffset7_sh0ss_1258", Ef = "_xlOffset8_sh0ss_1263", If = "_xlOffset9_sh0ss_1268", jf = "_xlOffset10_sh0ss_1273", Af = "_xlOffset11_sh0ss_1279", Tf = "_xlOffset12_sh0ss_1285", Rf = "_xlOrderFirst_sh0ss_1291", Lf = "_xlOrderLast_sh0ss_1294", Pf = "_xlOrder0_sh0ss_1297", Bf = "_xlOrder1_sh0ss_1300", qf = "_xlOrder2_sh0ss_1303", Ff = "_xlOrder3_sh0ss_1306", Hf = "_xlOrder4_sh0ss_1309", Kf = "_xlOrder5_sh0ss_1312", Uf = "_xlOrder6_sh0ss_1315", Wf = "_xlOrder7_sh0ss_1318", Vf = "_xlOrder8_sh0ss_1321", Xf = "_xlOrder9_sh0ss_1324", Gf = "_xlOrder10_sh0ss_1327", Yf = "_xlOrder11_sh0ss_1330", Zf = "_xlOrder12_sh0ss_1333", Jf = "_xxSize1_sh0ss_1339", Qf = "_xxSize2_sh0ss_1348", e1 = "_xxSize3_sh0ss_1357", t1 = "_xxSize4_sh0ss_1366", n1 = "_xxSize5_sh0ss_1375", s1 = "_xxSize6_sh0ss_1384", r1 = "_xxSize7_sh0ss_1393", o1 = "_xxSize8_sh0ss_1402", a1 = "_xxSize9_sh0ss_1411", l1 = "_xxSize10_sh0ss_1420", i1 = "_xxSize11_sh0ss_1431", c1 = "_xxSize12_sh0ss_1442", d1 = "_xxOffset0_sh0ss_1447", u1 = "_xxOffset1_sh0ss_1450", _1 = "_xxOffset2_sh0ss_1455", f1 = "_xxOffset3_sh0ss_1460", h1 = "_xxOffset4_sh0ss_1465", p1 = "_xxOffset5_sh0ss_1470", m1 = "_xxOffset6_sh0ss_1475", g1 = "_xxOffset7_sh0ss_1480", y1 = "_xxOffset8_sh0ss_1485", x1 = "_xxOffset9_sh0ss_1490", b1 = "_xxOffset10_sh0ss_1495", v1 = "_xxOffset11_sh0ss_1501", k1 = "_xxOffset12_sh0ss_1507", w1 = "_xxOrderFirst_sh0ss_1513", $1 = "_xxOrderLast_sh0ss_1516", N1 = "_xxOrder0_sh0ss_1519", O1 = "_xxOrder1_sh0ss_1522", S1 = "_xxOrder2_sh0ss_1525", z1 = "_xxOrder3_sh0ss_1528", D1 = "_xxOrder4_sh0ss_1531", M1 = "_xxOrder5_sh0ss_1534", C1 = "_xxOrder6_sh0ss_1537", E1 = "_xxOrder7_sh0ss_1540", I1 = "_xxOrder8_sh0ss_1543", j1 = "_xxOrder9_sh0ss_1546", A1 = "_xxOrder10_sh0ss_1549", T1 = "_xxOrder11_sh0ss_1552", R1 = "_xxOrder12_sh0ss_1555", Bn = {
  column: Oc,
  Size1: Sc,
  Size2: zc,
  Size3: Dc,
  Size4: Mc,
  Size5: Cc,
  Size6: Ec,
  Size7: Ic,
  Size8: jc,
  Size9: Ac,
  Size10: Tc,
  Size11: Rc,
  Size12: Lc,
  Offset0: Pc,
  Offset1: Bc,
  Offset2: qc,
  Offset3: Fc,
  Offset4: Hc,
  Offset5: Kc,
  Offset6: Uc,
  Offset7: Wc,
  Offset8: Vc,
  Offset9: Xc,
  Offset10: Gc,
  Offset11: Yc,
  Offset12: Zc,
  OrderFirst: Jc,
  OrderLast: Qc,
  Order0: ed,
  Order1: td,
  Order2: nd,
  Order3: sd,
  Order4: rd,
  Order5: od,
  Order6: ad,
  Order7: ld,
  Order8: id,
  Order9: cd,
  Order10: dd,
  Order11: ud,
  Order12: _d,
  xsSize1: fd,
  xsSize2: hd,
  xsSize3: pd,
  xsSize4: md,
  xsSize5: gd,
  xsSize6: yd,
  xsSize7: xd,
  xsSize8: bd,
  xsSize9: vd,
  xsSize10: kd,
  xsSize11: wd,
  xsSize12: $d,
  xsOffset0: Nd,
  xsOffset1: Od,
  xsOffset2: Sd,
  xsOffset3: zd,
  xsOffset4: Dd,
  xsOffset5: Md,
  xsOffset6: Cd,
  xsOffset7: Ed,
  xsOffset8: Id,
  xsOffset9: jd,
  xsOffset10: Ad,
  xsOffset11: Td,
  xsOffset12: Rd,
  xsOrderFirst: Ld,
  xsOrderLast: Pd,
  xsOrder0: Bd,
  xsOrder1: qd,
  xsOrder2: Fd,
  xsOrder3: Hd,
  xsOrder4: Kd,
  xsOrder5: Ud,
  xsOrder6: Wd,
  xsOrder7: Vd,
  xsOrder8: Xd,
  xsOrder9: Gd,
  xsOrder10: Yd,
  xsOrder11: Zd,
  xsOrder12: Jd,
  smSize1: Qd,
  smSize2: eu,
  smSize3: tu,
  smSize4: nu,
  smSize5: su,
  smSize6: ru,
  smSize7: ou,
  smSize8: au,
  smSize9: lu,
  smSize10: iu,
  smSize11: cu,
  smSize12: du,
  smOffset0: uu,
  smOffset1: _u,
  smOffset2: fu,
  smOffset3: hu,
  smOffset4: pu,
  smOffset5: mu,
  smOffset6: gu,
  smOffset7: yu,
  smOffset8: xu,
  smOffset9: bu,
  smOffset10: vu,
  smOffset11: ku,
  smOffset12: wu,
  smOrderFirst: $u,
  smOrderLast: Nu,
  smOrder0: Ou,
  smOrder1: Su,
  smOrder2: zu,
  smOrder3: Du,
  smOrder4: Mu,
  smOrder5: Cu,
  smOrder6: Eu,
  smOrder7: Iu,
  smOrder8: ju,
  smOrder9: Au,
  smOrder10: Tu,
  smOrder11: Ru,
  smOrder12: Lu,
  mdSize1: Pu,
  mdSize2: Bu,
  mdSize3: qu,
  mdSize4: Fu,
  mdSize5: Hu,
  mdSize6: Ku,
  mdSize7: Uu,
  mdSize8: Wu,
  mdSize9: Vu,
  mdSize10: Xu,
  mdSize11: Gu,
  mdSize12: Yu,
  mdOffset0: Zu,
  mdOffset1: Ju,
  mdOffset2: Qu,
  mdOffset3: e_,
  mdOffset4: t_,
  mdOffset5: n_,
  mdOffset6: s_,
  mdOffset7: r_,
  mdOffset8: o_,
  mdOffset9: a_,
  mdOffset10: l_,
  mdOffset11: i_,
  mdOffset12: c_,
  mdOrderFirst: d_,
  mdOrderLast: u_,
  mdOrder0: __,
  mdOrder1: f_,
  mdOrder2: h_,
  mdOrder3: p_,
  mdOrder4: m_,
  mdOrder5: g_,
  mdOrder6: y_,
  mdOrder7: x_,
  mdOrder8: b_,
  mdOrder9: v_,
  mdOrder10: k_,
  mdOrder11: w_,
  mdOrder12: $_,
  lgSize1: N_,
  lgSize2: O_,
  lgSize3: S_,
  lgSize4: z_,
  lgSize5: D_,
  lgSize6: M_,
  lgSize7: C_,
  lgSize8: E_,
  lgSize9: I_,
  lgSize10: j_,
  lgSize11: A_,
  lgSize12: T_,
  lgOffset0: R_,
  lgOffset1: L_,
  lgOffset2: P_,
  lgOffset3: B_,
  lgOffset4: q_,
  lgOffset5: F_,
  lgOffset6: H_,
  lgOffset7: K_,
  lgOffset8: U_,
  lgOffset9: W_,
  lgOffset10: V_,
  lgOffset11: X_,
  lgOffset12: G_,
  lgOrderFirst: Y_,
  lgOrderLast: Z_,
  lgOrder0: J_,
  lgOrder1: Q_,
  lgOrder2: ef,
  lgOrder3: tf,
  lgOrder4: nf,
  lgOrder5: sf,
  lgOrder6: rf,
  lgOrder7: of,
  lgOrder8: af,
  lgOrder9: lf,
  lgOrder10: cf,
  lgOrder11: df,
  lgOrder12: uf,
  xlSize1: _f,
  xlSize2: ff,
  xlSize3: hf,
  xlSize4: pf,
  xlSize5: mf,
  xlSize6: gf,
  xlSize7: yf,
  xlSize8: xf,
  xlSize9: bf,
  xlSize10: vf,
  xlSize11: kf,
  xlSize12: wf,
  xlOffset0: $f,
  xlOffset1: Nf,
  xlOffset2: Of,
  xlOffset3: Sf,
  xlOffset4: zf,
  xlOffset5: Df,
  xlOffset6: Mf,
  xlOffset7: Cf,
  xlOffset8: Ef,
  xlOffset9: If,
  xlOffset10: jf,
  xlOffset11: Af,
  xlOffset12: Tf,
  xlOrderFirst: Rf,
  xlOrderLast: Lf,
  xlOrder0: Pf,
  xlOrder1: Bf,
  xlOrder2: qf,
  xlOrder3: Ff,
  xlOrder4: Hf,
  xlOrder5: Kf,
  xlOrder6: Uf,
  xlOrder7: Wf,
  xlOrder8: Vf,
  xlOrder9: Xf,
  xlOrder10: Gf,
  xlOrder11: Yf,
  xlOrder12: Zf,
  xxSize1: Jf,
  xxSize2: Qf,
  xxSize3: e1,
  xxSize4: t1,
  xxSize5: n1,
  xxSize6: s1,
  xxSize7: r1,
  xxSize8: o1,
  xxSize9: a1,
  xxSize10: l1,
  xxSize11: i1,
  xxSize12: c1,
  xxOffset0: d1,
  xxOffset1: u1,
  xxOffset2: _1,
  xxOffset3: f1,
  xxOffset4: h1,
  xxOffset5: p1,
  xxOffset6: m1,
  xxOffset7: g1,
  xxOffset8: y1,
  xxOffset9: x1,
  xxOffset10: b1,
  xxOffset11: v1,
  xxOffset12: k1,
  xxOrderFirst: w1,
  xxOrderLast: $1,
  xxOrder0: N1,
  xxOrder1: O1,
  xxOrder2: S1,
  xxOrder3: z1,
  xxOrder4: D1,
  xxOrder5: M1,
  xxOrder6: C1,
  xxOrder7: E1,
  xxOrder8: I1,
  xxOrder9: j1,
  xxOrder10: A1,
  xxOrder11: T1,
  xxOrder12: R1
}, L1 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function P1(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function B1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function q1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function F1(e, t, s) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (q1(s, t), `${e}Order${t}`);
}
function ev({ className: e, style: t, ...s }) {
  const o = [Bn.column], i = { ...t };
  for (const [D, S, g, C] of L1) {
    const P = s[S], j = s[g], A = s[C];
    if (P != null) {
      P1(S, P);
      const H = Bn[`${D}Size${P}`];
      H && o.push(H);
    }
    if (j != null) {
      B1(g, j);
      const H = Bn[`${D}Offset${j}`];
      H && o.push(H);
    }
    if (A != null) {
      const H = Bn[F1(D, A, C)];
      H && o.push(H);
    }
  }
  const {
    size: c,
    offset: p,
    sizeXs: r,
    offsetXs: a,
    sizeSm: l,
    offsetSm: u,
    sizeMd: d,
    offsetMd: k,
    sizeLg: x,
    offsetLg: N,
    sizeXl: w,
    offsetXl: y,
    sizeXx: _,
    offsetXx: f,
    order: m,
    orderXs: $,
    orderSm: b,
    orderMd: E,
    orderLg: h,
    orderXl: v,
    orderXx: M,
    ...I
  } = s;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [...o, e].filter(Boolean).join(" "),
      style: i,
      ...I
    }
  );
}
const H1 = "_stack_1yc1g_1", K1 = "_gapXs_1yc1g_29", U1 = "_gapSm_1yc1g_33", W1 = "_gapMd_1yc1g_37", V1 = "_gapLg_1yc1g_41", X1 = "_gapXl_1yc1g_45", cn = {
  stack: H1,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: K1,
  gapSm: U1,
  gapMd: W1,
  gapLg: V1,
  gapXl: X1,
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
}, G1 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Y1(e) {
  return typeof e != "string" ? null : G1[e] ?? null;
}
function $s(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function tv({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: s = !0,
  gap: o = "sm",
  align: i,
  justify: c,
  className: p,
  style: r,
  ...a
}) {
  const l = Y1(o), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !l ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...r
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        cn.stack,
        cn[`dir-${u}`],
        $s(s) !== "wrap" ? cn[`wrap-${$s(s)}`] : null,
        i != null ? cn[`align-${i}`] : null,
        c != null ? cn[`justify-${c}`] : null,
        l ? cn[l] : null,
        p
      ].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const Z1 = "_layout_fxvw1_1", J1 = "_row_fxvw1_7", Q1 = "_grid_fxvw1_21", eh = "_gridRight_fxvw1_27", th = "_gridHeader_fxvw1_31", nh = "_gridFooter_fxvw1_36", sh = "_gridContents_fxvw1_41", rh = "_gridBody_fxvw1_45", Pt = {
  layout: Z1,
  row: J1,
  grid: Q1,
  gridRight: eh,
  gridHeader: th,
  gridFooter: nh,
  gridContents: sh,
  gridBody: rh
}, oh = "_footer_1thaw_1", ah = "_sticky_1thaw_9", Ns = {
  footer: oh,
  sticky: ah
};
function lh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "footer",
    {
      className: [Ns.footer, e ? Ns.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const ih = "_header_wh9gi_1", ch = "_sticky_wh9gi_9", Os = {
  header: ih,
  sticky: ch
};
function dh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "header",
    {
      className: [Os.header, e ? Os.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const uh = "_sidebar_12teb_1", _h = "_left_12teb_9", fh = "_right_12teb_13", hh = "_start_12teb_18", ph = "_end_12teb_22", mh = "_fullHeight_12teb_28", gh = "_collapsed_12teb_32", yh = "_responsive_12teb_40", xh = "_overlay_12teb_48", bh = "_mask_12teb_76", en = {
  sidebar: uh,
  left: _h,
  right: fh,
  start: hh,
  end: ph,
  fullHeight: mh,
  collapsed: gh,
  responsive: yh,
  overlay: xh,
  mask: bh
};
function vh({
  position: e = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  fullHeight: i = !1,
  onClose: c,
  className: p,
  children: r,
  ...a
}) {
  return we(() => {
    if (!o || !t || c == null) return;
    const l = (u) => {
      u.key === "Escape" && c();
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [o, t, c]), /* @__PURE__ */ O(Ce, { children: [
    o && t ? /* @__PURE__ */ n(
      "div",
      {
        className: `${en.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: c
      }
    ) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          en.sidebar,
          en[e],
          t ? null : en.collapsed,
          s ? en.responsive : null,
          o ? [en.overlay, "se-sidebar--overlay"] : null,
          i ? en.fullHeight : null,
          p
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: r
      }
    )
  ] });
}
function nv(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(Ce, { children: e.children });
  const { className: t, children: s, ...o } = e, i = [], c = [], p = [], r = [], a = [], l = [];
  nr.forEach(s, (k) => {
    if (!Tn(k)) {
      p.push(k);
      return;
    }
    if (k.type === dh)
      i.push(k);
    else if (k.type === lh)
      c.push(k);
    else if (k.type === vh) {
      const x = k, N = x.props.position;
      l.push(x), (N === "right" || N === "end" ? a : r).push(x);
    } else
      p.push(k);
  });
  const u = l.length === 1 && l[0]?.props.fullHeight === !0 ? l[0] : null, d = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const k = d ? a : r;
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          Pt.layout,
          Pt.grid,
          d ? Pt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...o,
        children: [
          i.length > 0 && /* @__PURE__ */ n("div", { className: Pt.gridHeader, children: i }),
          /* @__PURE__ */ O("div", { className: Pt.gridContents, children: [
            k,
            /* @__PURE__ */ n("div", { className: Pt.gridBody, children: p })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: Pt.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Pt.layout, t].filter(Boolean).join(" "),
      ...o,
      children: [
        i,
        /* @__PURE__ */ O("div", { className: Pt.row, children: [
          r,
          p,
          a
        ] }),
        c
      ]
    }
  );
}
const kh = "_body_akga4_1", wh = "_bare_akga4_10", Ss = {
  body: kh,
  bare: wh
};
function sv({
  as: e = "main",
  padded: t = !0,
  className: s,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ n(
    e,
    {
      className: [Ss.body, t ? null : Ss.bare, s].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}
const $h = "_toggle_1qjb4_1", Nh = {
  toggle: $h
};
function rv({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: s,
  type: o = "button",
  children: i,
  ...c
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: o,
      "aria-label": t,
      className: [Nh.toggle, s].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(De, { name: e, size: 20 })
    }
  );
}
const Oh = "_track_14127_1", Sh = "_bar_14127_31", zh = "_primary_14127_39", Dh = "_success_14127_43", Mh = "_warning_14127_47", Ch = "_danger_14127_51", Eh = "_indeterminate_14127_149", Ih = "_circular_14127_163", jh = "_fill_14127_203", mt = {
  track: Oh,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Sh,
  primary: zh,
  success: Dh,
  warning: Mh,
  danger: Ch,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Eh,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Ih,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: jh,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function ov({
  value: e = 0,
  max: t = 100,
  severity: s = "primary",
  shade: o,
  indeterminate: i = !1,
  variant: c = "linear",
  size: p = "md",
  className: r,
  visible: a = !0,
  ...l
}) {
  if (a === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? u / t * 100 : 0;
  if (c === "circular") {
    const x = typeof p == "string", N = 2, w = 10.5, y = 2 * Math.PI * w, _ = y * (i ? 0.75 : 1), f = i ? 0 : y * (1 - d / 100);
    return /* @__PURE__ */ O(
      "svg",
      {
        width: x ? void 0 : p,
        height: x ? void 0 : p,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": l["aria-label"],
        "aria-labelledby": l["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...l,
        className: [
          mt.circular,
          mt[s],
          o && o !== "default" ? mt[`shade-${o}`] : null,
          x ? mt[`circular-${p}`] : null,
          i ? mt.indeterminate : null,
          r
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.track,
              cx: 12,
              cy: 12,
              r: w,
              strokeWidth: N
            }
          ),
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.fill,
              cx: 12,
              cy: 12,
              r: w,
              strokeWidth: N,
              strokeDasharray: `${_} ${y}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const k = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        mt.track,
        mt[s],
        k ? mt[k] : null,
        typeof p == "string" ? mt[`linear-${p}`] : null,
        i ? mt.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: mt.bar,
          style: i ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
function av(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Ah(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Zs(e) {
  const [t, s] = X(() => Ah(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    s(o.matches);
    const i = (c) => s(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const Th = "_wrapper_1qmsj_1", Rh = {
  wrapper: Th
}, Js = "dx-theme";
function Lh(e) {
  const t = e === void 0 ? Js : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(t);
      return s === "light" || s === "dark" || s === "system" ? s : void 0;
    } catch {
      return;
    }
}
function Ph(e, t) {
  const s = e === void 0 ? Js : e;
  if (!(s === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(s, t);
    } catch {
    }
}
function lv({
  value: e,
  defaultValue: t,
  defaultTheme: s,
  storageKey: o,
  onChange: i,
  label: c = "Dark mode",
  className: p
}) {
  const r = Zs("(prefers-color-scheme: dark)"), [a, l] = X(void 0), u = e ?? a ?? Lh(o) ?? t ?? s ?? "system", d = u === "system" ? r ? "dark" : "light" : u;
  we(() => {
    if (u === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = u;
  }, [u]);
  const k = (x) => {
    const N = x.target.checked ? "dark" : "light";
    e === void 0 && l(N), Ph(o, N), i?.(N);
  };
  return /* @__PURE__ */ O("label", { className: [Rh.wrapper, p].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ n(Wl, { checked: d === "dark", onChange: k })
  ] });
}
const Bh = "_avatar_yj2hz_1", qh = "_xs_yj2hz_12", Fh = "_sm_yj2hz_18", Hh = "_md_yj2hz_24", Kh = "_lg_yj2hz_30", Uh = "_xl_yj2hz_36", Wh = "_initials_yj2hz_42", Vh = "_image_yj2hz_57", Xh = "_status_yj2hz_64", Gh = "_online_yj2hz_84", Yh = "_offline_yj2hz_88", Zh = "_away_yj2hz_92", dn = {
  avatar: Bh,
  xs: qh,
  sm: Fh,
  md: Hh,
  lg: Kh,
  xl: Uh,
  initials: Wh,
  image: Vh,
  status: Xh,
  online: Gh,
  offline: Yh,
  away: Zh
}, Xn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Jh(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Qh(e) {
  let t = 0;
  for (let s = 0; s < e.length; s += 1)
    t = t * 31 + e.charCodeAt(s) >>> 0;
  return Xn[t % Xn.length] ?? Xn[0];
}
function iv({
  name: e,
  src: t,
  alt: s,
  size: o = "md",
  status: i,
  className: c
}) {
  const p = $e(() => e ? Jh(e) : "?", [e]), r = $e(() => e ? Qh(e) : Xn[0], [e]), a = t != null && s === "", l = s ?? e ?? "avatar", u = i ? `${l}, ${i}` : l, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: dn.image,
      src: t,
      alt: a ? "" : i ? u : l
    }
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: dn.initials,
      style: { background: r },
      children: p
    }
  );
  return /* @__PURE__ */ O(
    "span",
    {
      className: [
        dn.avatar,
        dn[o],
        i ? dn[i] : null,
        c
      ].filter(Boolean).join(" "),
      role: t ? void 0 : "img",
      "aria-label": t ? void 0 : u,
      children: [
        d,
        i && /* @__PURE__ */ n("span", { className: dn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ep = "_root_1m1i8_1", tp = "_left_1m1i8_6", np = "_right_1m1i8_7", sp = "_panel_1m1i8_12", rp = "_bottom_1m1i8_20", op = "_tabList_1m1i8_24", ap = "_underline_1m1i8_53", lp = "_pills_1m1i8_72", ip = "_tab_1m1i8_24", cp = "_active_1m1i8_113", dp = "_disabled_1m1i8_139", Bt = {
  root: ep,
  left: tp,
  right: np,
  panel: sp,
  bottom: rp,
  tabList: op,
  underline: ap,
  pills: lp,
  tab: ip,
  active: cp,
  disabled: dp
};
function cv({
  items: e,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: p
}) {
  const r = Ye(), a = ae(null), [l, u] = X(
    s ?? e[0]?.key ?? ""
  ), d = t ?? l, k = c === "left" || c === "right", x = (y) => {
    u(y), o?.(y);
  }, N = (y) => {
    const _ = e.filter(($) => !$.disabled), f = _.findIndex(($) => $.key === d);
    let m = -1;
    y.key === "ArrowRight" || k && y.key === "ArrowDown" ? m = (f + 1) % _.length : y.key === "ArrowLeft" || k && y.key === "ArrowUp" ? m = (f - 1 + _.length) % _.length : y.key === "Home" ? m = 0 : y.key === "End" && (m = _.length - 1), m >= 0 && (y.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[m]?.key ?? "")}"]`
    )?.focus(), x(_[m]?.key ?? ""));
  }, w = e.find((y) => y.key === d);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Bt.root, Bt[c], p].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Bt.tabList, Bt[i], Bt[c]].filter(Boolean).join(" "),
            onKeyDown: N,
            children: e.map((y) => {
              const _ = y.key === d;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": _,
                  "aria-controls": `${r}-panel-${y.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    Bt.tab,
                    _ ? Bt.active : null,
                    y.disabled ? Bt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => x(y.key),
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
            id: `${r}-panel-${w.key}`,
            "aria-labelledby": `${r}-tab-${w.key}`,
            className: Bt.panel,
            children: w.content
          }
        )
      ]
    }
  );
}
const up = "_root_18dnp_1", _p = "_item_18dnp_9", fp = "_heading_18dnp_13", hp = "_trigger_18dnp_17", pp = "_disabled_18dnp_34", mp = "_title_18dnp_48", gp = "_chevron_18dnp_52", yp = "_open_18dnp_59", xp = "_content_18dnp_63", qt = {
  root: up,
  item: _p,
  heading: fp,
  trigger: hp,
  disabled: pp,
  title: mp,
  chevron: gp,
  open: yp,
  content: xp
};
function dv({
  items: e,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const p = Ye(), [r, a] = X(
    o ?? []
  ), l = s ?? r, u = (d) => {
    const k = l.includes(d) ? l.filter((x) => x !== d) : t ? [...l, d] : [d];
    a(k), i?.(k);
  };
  return /* @__PURE__ */ n("div", { className: [qt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const k = l.includes(d.key), x = `${p}-panel-${d.key}`, N = `${p}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: qt.item, children: [
      /* @__PURE__ */ n("h3", { className: qt.heading, children: /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          id: N,
          "aria-expanded": k,
          "aria-controls": x,
          disabled: d.disabled,
          className: [
            qt.trigger,
            d.disabled ? qt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: qt.title, children: d.title }),
            /* @__PURE__ */ n(
              "span",
              {
                className: [qt.chevron, k ? qt.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ n(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": N,
          hidden: !k,
          className: qt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const bp = "_textarea_1mu8y_1", vp = "_invalid_1mu8y_27", kp = "_xs_1mu8y_34", wp = "_sm_1mu8y_39", $p = "_md_1mu8y_44", Np = "_lg_1mu8y_49", Op = "_xl_1mu8y_54", qn = {
  textarea: bp,
  invalid: vp,
  xs: kp,
  sm: wp,
  md: $p,
  lg: Np,
  xl: Op,
  "resize-none": "_resize-none_1mu8y_59",
  "resize-vertical": "_resize-vertical_1mu8y_63",
  "resize-horizontal": "_resize-horizontal_1mu8y_67",
  "resize-both": "_resize-both_1mu8y_71"
}, uv = Fe(
  function({ size: t = "md", resize: s = "none", invalid: o = !1, className: i, ...c }, p) {
    return /* @__PURE__ */ n(
      "textarea",
      {
        ref: p,
        className: [
          qn.textarea,
          qn[t],
          qn[`resize-${s}`],
          o ? qn.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": o || void 0,
        ...c
      }
    );
  }
), Sp = "_typography_1ehxz_1", zp = "_h1_1ehxz_36", Dp = "_h2_1ehxz_42", Mp = "_h3_1ehxz_48", Cp = "_h4_1ehxz_54", Ep = "_h5_1ehxz_60", Ip = "_h6_1ehxz_66", jp = "_button_1ehxz_96", Ap = "_caption_1ehxz_103", Tp = "_overline_1ehxz_109", Qn = {
  typography: Sp,
  "display-1": "_display-1_1ehxz_5",
  "display-2": "_display-2_1ehxz_10",
  "display-3": "_display-3_1ehxz_15",
  "display-4": "_display-4_1ehxz_20",
  "display-5": "_display-5_1ehxz_25",
  "display-6": "_display-6_1ehxz_30",
  h1: zp,
  h2: Dp,
  h3: Mp,
  h4: Cp,
  h5: Ep,
  h6: Ip,
  "subtitle-1": "_subtitle-1_1ehxz_72",
  "subtitle-2": "_subtitle-2_1ehxz_78",
  "body-1": "_body-1_1ehxz_84",
  "body-2": "_body-2_1ehxz_89",
  button: jp,
  caption: Ap,
  overline: Tp,
  "align-left": "_align-left_1ehxz_118",
  "align-center": "_align-center_1ehxz_122",
  "align-right": "_align-right_1ehxz_126",
  "align-justify": "_align-justify_1ehxz_130"
}, Rp = {
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
}, Lp = {
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
}, Pp = {
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
}, Bp = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, _v = Fe(function({
  textStyle: t = "Body1",
  tagName: s = "Auto",
  textAlign: o,
  text: i,
  visible: c = !0,
  className: p,
  children: r,
  ...a
}, l) {
  if (c === !1) return null;
  const u = s === "Auto" ? Rp[t] : Pp[s];
  return /* @__PURE__ */ n(
    u,
    {
      ref: l,
      className: [
        Qn.typography,
        Qn[Lp[t]],
        o ? Qn[Bp[o]] : null,
        p
      ].filter(Boolean).join(" "),
      ...a,
      children: i ?? r
    }
  );
}), qp = "_root_1egts_1", Fp = "_trigger_1egts_9", Hp = "_invalid_1egts_40", Kp = "_placeholder_1egts_47", Up = "_label_1egts_54", Wp = "_chevron_1egts_60", Vp = "_chevronOpen_1egts_70", Xp = "_menu_1egts_74", Gp = "_option_1egts_89", Yp = "_disabled_1egts_100", Zp = "_active_1egts_104", Jp = "_selected_1egts_105", Qp = "_header_1egts_115", em = "_xs_1egts_122", tm = "_sm_1egts_128", nm = "_md_1egts_134", sm = "_lg_1egts_140", rm = "_xl_1egts_146", it = {
  root: qp,
  trigger: Fp,
  invalid: Hp,
  placeholder: Kp,
  label: Up,
  chevron: Wp,
  chevronOpen: Vp,
  menu: Xp,
  option: Gp,
  disabled: Yp,
  active: Zp,
  selected: Jp,
  header: Qp,
  xs: em,
  sm: tm,
  md: nm,
  lg: sm,
  xl: rm
}, om = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function fv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: p = !1,
  disabled: r = !1,
  className: a,
  ...l
}) {
  const u = Ye(), d = `${u}-listbox`, k = ae(null), x = ae(null), [N, w] = X(
    s
  ), [y, _] = X(!1), f = t ?? N, m = e.map(
    (g, C) => g.label === "" || g.disabled ? -1 : C
  ).filter((g) => g >= 0), $ = e.findIndex(
    (g) => g.value === f
  ), [b, E] = X(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), h = F(() => {
    if (r) return;
    const g = $ >= 0 && m.includes($) ? $ : m[0];
    E(g ?? -1), _(!0);
  }, [r, $, m]), v = F(() => {
    _(!1), x.current?.focus();
  }, []);
  we(() => {
    if (!y) return;
    const g = (C) => {
      k.current && !k.current.contains(C.target) && _(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [y]);
  const M = (g) => {
    w(g), o?.(g), _(!1), x.current?.focus();
  }, I = (g) => {
    if (m.length === 0) return;
    const C = m.includes(b) ? m.indexOf(b) : 0, P = m[(C + g + m.length) % m.length];
    P != null && E(P);
  }, D = (g) => {
    if (!y) {
      g.key === "ArrowDown" && (g.preventDefault(), h());
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
        g.preventDefault(), b >= 0 && e[b] && m.includes(b) && M(e[b]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), v();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, S = e.find(
    (g) => g.value === f
  );
  return /* @__PURE__ */ O(
    "div",
    {
      ref: k,
      className: [it.root, a].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: x,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": d,
            "aria-invalid": p || void 0,
            disabled: r,
            className: [
              it.trigger,
              it[c],
              y ? it.open : null,
              p ? it.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? _(!1) : h(),
            ...l,
            children: [
              /* @__PURE__ */ n("span", { className: S ? it.label : it.placeholder, children: S ? S.label : i }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [it.chevron, y ? it.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: om },
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
            "aria-activedescendant": b >= 0 ? `${u}-option-${b}` : void 0,
            className: it.menu,
            children: e.map(
              (g, C) => g.label === "" ? /* @__PURE__ */ n(
                "div",
                {
                  className: it.header,
                  role: "presentation",
                  children: g.value
                },
                g.value
              ) : /* @__PURE__ */ n(
                "div",
                {
                  id: `${u}-option-${C}`,
                  role: "option",
                  "aria-selected": g.value === f,
                  "aria-disabled": g.disabled || void 0,
                  className: [
                    it.option,
                    C === b ? it.active : null,
                    g.value === f ? it.selected : null,
                    g.disabled ? it.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    g.disabled || M(g.value);
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
      ]
    }
  );
}
const am = "_root_api3u_1", lm = "_wrap_api3u_9", im = "_input_api3u_26", cm = "_invalid_api3u_31", dm = "_clear_api3u_58", um = "_menu_api3u_83", _m = "_option_api3u_98", fm = "_disabled_api3u_109", hm = "_active_api3u_113", pm = "_empty_api3u_123", mm = "_xs_api3u_129", gm = "_sm_api3u_136", ym = "_md_api3u_143", xm = "_lg_api3u_150", bm = "_xl_api3u_157", Dt = {
  root: am,
  wrap: lm,
  input: im,
  invalid: cm,
  clear: dm,
  menu: um,
  option: _m,
  disabled: fm,
  active: hm,
  empty: pm,
  xs: mm,
  sm: gm,
  md: ym,
  lg: xm,
  xl: bm
}, vm = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function hv({
  options: e = [],
  value: t,
  defaultValue: s = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: p = "md",
  invalid: r = !1,
  disabled: a = !1,
  filter: l = vm,
  className: u,
  ...d
}) {
  const k = Ye(), x = `${k}-listbox`, N = ae(null), w = ae(null), [y, _] = X(s), [f, m] = X(!1), $ = t ?? y, b = $e(
    () => $.trim() === "" ? [...e] : e.filter((A) => l(A, $)),
    [e, $, l]
  ), E = b.map((A, H) => A.disabled ? -1 : H).filter((A) => A >= 0), [h, v] = X(-1), M = (A) => {
    _(A), o?.(A);
  }, I = (A) => {
    M(A.label), i?.(A.value, A), m(!1);
  }, D = (A) => {
    if (E.length === 0) return;
    const H = E.includes(h) ? E.indexOf(h) : A === 1 ? -1 : 0, V = E[(H + A + E.length) % E.length];
    V != null && v(V);
  }, S = (A) => {
    a || (M(A.target.value), m(!0), v(-1));
  }, g = () => {
    a || $ !== "" && m(!0);
  }, C = (A) => {
    N.current && !N.current.contains(A.relatedTarget) && m(!1);
  }, P = (A) => {
    if (!a)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), f ? D(1) : (m(!0), v(E[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), f && D(-1);
          break;
        case "Enter":
          A.preventDefault(), f && h >= 0 && b[h] && I(b[h]);
          break;
        case "Escape":
          A.preventDefault(), m(!1);
          break;
        case "Tab":
          f && h >= 0 && b[h] && I(b[h]), m(!1);
          break;
      }
  }, j = () => {
    M(""), v(-1), m(!0), w.current?.focus();
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: N,
      className: [Dt.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "div",
          {
            className: [Dt.wrap, Dt[p], r ? Dt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  ref: w,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": f,
                  "aria-controls": x,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": f && h >= 0 ? `${k}-option-${h}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: a,
                  value: $,
                  placeholder: c,
                  className: Dt.input,
                  onChange: S,
                  onFocus: g,
                  onBlur: C,
                  onKeyDown: P,
                  ...d
                }
              ),
              $ !== "" && !a && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: Dt.clear,
                  "aria-label": "Clear",
                  onClick: j,
                  children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ n("div", { id: x, role: "listbox", className: Dt.menu, children: b.length === 0 ? /* @__PURE__ */ n("div", { className: Dt.empty, children: "No matches" }) : b.map((A, H) => /* @__PURE__ */ n(
          "div",
          {
            id: `${k}-option-${H}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": A.disabled || void 0,
            className: [
              Dt.option,
              H === h ? Dt.active : null,
              A.disabled ? Dt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              A.disabled || I(A);
            },
            onMouseDown: (V) => {
              V.preventDefault(), A.disabled || I(A);
            },
            onMouseEnter: () => {
              A.disabled || v(H);
            },
            children: A.label
          },
          A.value
        )) })
      ]
    }
  );
}
const km = "_box_yvzwz_1", wm = "_option_yvzwz_12", $m = "_disabled_yvzwz_23", Nm = "_selected_yvzwz_27", Om = "_active_yvzwz_33", On = {
  box: km,
  option: wm,
  disabled: $m,
  selected: Nm,
  active: Om
};
function pv({
  options: e = [],
  value: t,
  defaultValue: s,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: p,
  ...r
}) {
  const a = Ye(), [l, u] = X(() => {
    const b = s;
    return b == null ? [] : Array.isArray(b) ? [...b] : [b];
  }), d = t == null ? l : Array.isArray(t) ? t : [t], k = e.findIndex((b) => !b.disabled), [x, N] = X(
    () => k >= 0 ? k : 0
  ), w = ae(""), y = ae(null), _ = (b) => {
    u(b), i?.(o ? b : b[0] ?? "");
  }, f = e.map((b, E) => b.disabled ? -1 : E).filter((b) => b >= 0), m = (b) => {
    const E = e[b];
    if (!(!E || E.disabled))
      if (N(b), o) {
        const h = d.includes(E.value) ? d.filter((v) => v !== E.value) : [...d, E.value];
        _(h);
      } else
        _([E.value]);
  }, $ = (b) => {
    if (f.length === 0) return;
    const E = f.includes(x) ? x : f[0];
    let h = -1;
    if (b.key === "ArrowDown")
      h = f[(f.indexOf(E) + 1) % f.length];
    else if (b.key === "ArrowUp")
      h = f[(f.indexOf(E) - 1 + f.length) % f.length];
    else if (b.key === "Home")
      h = f[0];
    else if (b.key === "End")
      h = f[f.length - 1];
    else if (b.key === "Enter" || b.key === " ") {
      b.preventDefault(), m(E);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(b.key)) {
      b.preventDefault();
      const v = (w.current + b.key).toLowerCase();
      w.current = v, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        w.current = "";
      }, 500);
      const M = [...f, ...f], I = f.indexOf(E) + 1, D = M.slice(I).find((S) => e[S]?.label.toLowerCase().startsWith(v));
      D != null && N(D);
      return;
    }
    h >= 0 && (b.preventDefault(), N(h), o || _([e[h]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[x] ? `${a}-option-${x}` : void 0,
      style: p,
      className: [On.box, c].filter(Boolean).join(" "),
      onKeyDown: $,
      ...r,
      children: e.map((b, E) => {
        const h = d.includes(b.value), v = E === x;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${E}`,
            role: "option",
            "aria-selected": h,
            "aria-disabled": b.disabled || void 0,
            className: [
              On.option,
              h ? On.selected : null,
              v ? On.active : null,
              b.disabled ? On.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(E),
            children: b.label
          },
          b.value
        );
      })
    }
  );
}
const Sm = "_group_id8e2_1", zm = "_legend_id8e2_8", Dm = "_list_id8e2_16", Mm = "_item_id8e2_25", Cm = "_disabled_id8e2_32", Em = "_label_id8e2_37", Im = "_checkbox_id8e2_48", tn = {
  group: Sm,
  legend: zm,
  list: Dm,
  item: Mm,
  disabled: Cm,
  label: Em,
  checkbox: Im
};
function mv({
  options: e = [],
  value: t,
  defaultValue: s = [],
  onChange: o,
  legend: i,
  name: c,
  className: p
}) {
  const [r, a] = X(() => [
    ...s
  ]), l = t ?? r, u = (d, k) => {
    const x = k ? [...l, d] : l.filter((N) => N !== d);
    a(x), o?.(x);
  };
  return /* @__PURE__ */ O("fieldset", { className: [tn.group, p].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: tn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: tn.list, children: e.map((d) => {
      const k = l.includes(d.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [tn.item, d.disabled ? tn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: tn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: tn.checkbox,
                name: c,
                value: d.value,
                checked: k,
                disabled: d.disabled,
                onChange: (x) => u(d.value, x.target.checked)
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
const jm = "_group_5r4ch_1", Am = "_legend_5r4ch_8", Tm = "_list_5r4ch_16", Rm = "_item_5r4ch_25", Lm = "_disabled_5r4ch_32", Pm = "_label_5r4ch_37", Bm = "_radio_5r4ch_48", nn = {
  group: jm,
  legend: Am,
  list: Tm,
  item: Rm,
  disabled: Lm,
  label: Pm,
  radio: Bm
};
function gv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  legend: i,
  name: c,
  className: p
}) {
  const [r, a] = X(
    s
  ), l = t ?? r, u = (d) => {
    a(d), o?.(d);
  };
  return /* @__PURE__ */ O("fieldset", { className: [nn.group, p].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: nn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: nn.list, children: e.map((d) => {
      const k = d.value === l;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [nn.item, d.disabled ? nn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: nn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: nn.radio,
                name: c,
                value: d.value,
                checked: k,
                disabled: d.disabled,
                onChange: (x) => u(x.target.value)
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
const qm = "_bar_9r6ow_1", Fm = "_vertical_9r6ow_12", Hm = "_option_9r6ow_17", Km = "_selected_9r6ow_38", Um = "_sm_9r6ow_55", Wm = "_md_9r6ow_61", Vm = "_lg_9r6ow_67", un = {
  bar: qm,
  vertical: Fm,
  option: Hm,
  selected: Km,
  sm: Um,
  md: Wm,
  lg: Vm
};
function zs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function yv(e) {
  const {
    options: t = [],
    value: s,
    defaultValue: o,
    multiple: i,
    orientation: c = "horizontal",
    onChange: p,
    size: r = "md",
    className: a,
    ...l
  } = e, u = i ?? !1, [d, k] = X(o ?? (u ? [] : t[0]?.value)), x = s ?? d, N = i === !0 || i === void 0 && Array.isArray(x), w = (_) => {
    if (!N) {
      k(_), p?.(_);
      return;
    }
    const f = zs(x), m = f.includes(_) ? f.filter(($) => $ !== _) : [...f, _];
    k(m), p?.(m);
  }, y = (_) => N ? zs(x).includes(_) : x === _;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        un.bar,
        un[r],
        c === "vertical" ? un.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...l,
      children: t.map((_) => {
        const f = y(_.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: _.disabled,
            className: [
              un.option,
              f ? un.selected : null,
              _.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => w(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const Xm = "_toggle_1yw7j_1", Gm = "_pressed_1yw7j_29", Ym = "_sm_1yw7j_41", Zm = "_md_1yw7j_47", Jm = "_lg_1yw7j_53", Qm = "_fullWidth_1yw7j_59", Fn = {
  toggle: Xm,
  pressed: Gm,
  sm: Ym,
  md: Zm,
  lg: Jm,
  fullWidth: Qm
}, xv = Fe(
  function({
    pressed: t,
    defaultPressed: s = !1,
    onChange: o,
    size: i = "md",
    fullWidth: c = !1,
    className: p,
    type: r = "button",
    ...a
  }, l) {
    const [u, d] = X(s), k = t ?? u, x = () => {
      const N = !k;
      d(N), o?.(N);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: l,
        type: r,
        "aria-pressed": k,
        className: [
          Fn.toggle,
          Fn[i],
          k ? Fn.pressed : null,
          c ? Fn.fullWidth : null,
          p
        ].filter(Boolean).join(" "),
        onClick: x,
        ...a
      }
    );
  }
), eg = "_root_1k9lc_1", tg = "_action_1k9lc_328", ng = "_filled_1k9lc_348", sg = "_caret_1k9lc_352", rg = "_flat_1k9lc_373", og = "_outlined_1k9lc_381", ag = "_text_1k9lc_389", lg = "_sm_1k9lc_495", ig = "_md_1k9lc_507", cg = "_lg_1k9lc_519", dg = "_menu_1k9lc_531", ug = "_item_1k9lc_544", _g = "_disabled_1k9lc_565", fg = "_active_1k9lc_569", hg = "_danger_1k9lc_578", wt = {
  root: eg,
  "style-primary": "_style-primary_1k9lc_11",
  "style-secondary": "_style-secondary_1k9lc_25",
  "style-base": "_style-base_1k9lc_35",
  "style-light": "_style-light_1k9lc_45",
  "style-dark": "_style-dark_1k9lc_55",
  "style-info": "_style-info_1k9lc_69",
  "style-success": "_style-success_1k9lc_83",
  "style-warning": "_style-warning_1k9lc_97",
  "style-danger": "_style-danger_1k9lc_111",
  action: tg,
  filled: ng,
  caret: sg,
  flat: rg,
  outlined: og,
  text: ag,
  "shade-lighter": "_shade-lighter_1k9lc_406",
  "shade-light": "_shade-light_1k9lc_406",
  "shade-dark": "_shade-dark_1k9lc_416",
  "shade-darker": "_shade-darker_1k9lc_420",
  sm: lg,
  md: ig,
  lg: cg,
  menu: dg,
  item: ug,
  disabled: _g,
  active: fg,
  danger: hg
};
function bv({
  label: e,
  onClick: t,
  items: s = [],
  severity: o = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: p = "md",
  disabled: r = !1,
  className: a,
  ...l
}) {
  const d = `${Ye()}-menu`, k = ae(null), x = ae(null), N = ae([]), [w, y] = X(!1), [_, f] = X(-1), m = $e(
    () => s.map((D, S) => D.disabled ? -1 : S).filter((D) => D >= 0),
    [s]
  ), $ = F(() => {
    r || (f(m[0] ?? -1), y(!0));
  }, [r, m]), b = F(() => {
    y(!1), x.current?.focus();
  }, []);
  we(() => {
    if (!w) return;
    const D = (S) => {
      k.current && !k.current.contains(S.target) && y(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [w]);
  const E = ae(w);
  we(() => {
    const D = E.current;
    if (E.current = w, !w || D) return;
    const S = m.includes(_) ? _ : m[0] ?? -1;
    S >= 0 && N.current[S]?.focus();
  }, [w, _, m]);
  const h = (D) => {
    const S = s[D];
    !S || S.disabled || (S.onClick?.(), y(!1), x.current?.focus());
  }, v = (D) => {
    if (m.length === 0) return;
    const S = m.includes(_) ? m.indexOf(_) : D === 1 ? -1 : 0, g = m[(S + D + m.length) % m.length];
    g != null && (f(g), N.current[g]?.focus());
  }, M = (D) => {
    const S = D === "first" ? m[0] : m[m.length - 1];
    S != null && (f(S), N.current[S]?.focus());
  }, I = (D) => {
    switch (D.key) {
      case "ArrowDown":
        D.preventDefault(), v(1);
        break;
      case "ArrowUp":
        D.preventDefault(), v(-1);
        break;
      case "Home":
        D.preventDefault(), M("first");
        break;
      case "End":
        D.preventDefault(), M("last");
        break;
      case "Escape":
        D.preventDefault(), b();
        break;
      case "Tab":
        y(!1);
        break;
    }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: k,
      className: [
        wt.root,
        wt[p],
        wt[`style-${o}`],
        wt[ds(i, "filled")],
        c !== "default" ? wt[`shade-${c}`] : null,
        a
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: wt.action,
            disabled: r,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            ref: x,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": w,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: r,
            onClick: () => w ? y(!1) : $(),
            onKeyDown: (D) => {
              !w && D.key === "ArrowDown" && (D.preventDefault(), $());
            },
            children: /* @__PURE__ */ n(De, { name: "chevron-down" })
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
            ...l,
            children: s.map((D, S) => /* @__PURE__ */ n(
              "button",
              {
                ref: (g) => {
                  N.current[S] = g;
                },
                type: "button",
                role: "menuitem",
                tabIndex: S === _ ? 0 : -1,
                disabled: D.disabled,
                className: [
                  wt.item,
                  S === _ ? wt.active : null,
                  D.danger ? wt.danger : null,
                  D.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => h(S),
                onMouseEnter: () => {
                  D.disabled || f(S);
                },
                children: D.label
              },
              D.key
            ))
          }
        )
      ]
    }
  );
}
const pg = "_textbox_dh04j_1", mg = "_invalid_dh04j_31", gg = "_xs_dh04j_38", yg = "_sm_dh04j_44", xg = "_md_dh04j_50", bg = "_lg_dh04j_56", vg = "_xl_dh04j_62", es = {
  textbox: pg,
  invalid: mg,
  xs: gg,
  sm: yg,
  md: xg,
  lg: bg,
  xl: vg
}, vv = Fe(
  function({ size: t = "md", invalid: s = !1, className: o, type: i = "text", ...c }, p) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: p,
        type: i,
        className: [
          es.textbox,
          es[t],
          s ? es.invalid : null,
          o
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...c
      }
    );
  }
), kg = "_wrapper_o4h13_1", wg = "_input_o4h13_8", $g = "_invalid_o4h13_38", Ng = "_toggle_o4h13_45", Og = "_xs_o4h13_80", Sg = "_sm_o4h13_86", zg = "_md_o4h13_92", Dg = "_lg_o4h13_98", Mg = "_xl_o4h13_104", Sn = {
  wrapper: kg,
  input: wg,
  invalid: $g,
  toggle: Ng,
  xs: Og,
  sm: Sg,
  md: zg,
  lg: Dg,
  xl: Mg
}, kv = Fe(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: p = "Hide password",
    ...r
  }, a) {
    const [l, u] = X(!1);
    return /* @__PURE__ */ O("div", { className: Sn.wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: a,
          type: l ? "text" : "password",
          disabled: i,
          className: [
            Sn.input,
            Sn[t],
            s ? Sn.invalid : null,
            o
          ].filter(Boolean).join(" "),
          "aria-invalid": s || void 0,
          ...r
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Sn.toggle,
          "aria-pressed": l,
          "aria-label": l ? p : c,
          disabled: i,
          onClick: () => u((d) => !d),
          children: /* @__PURE__ */ n(De, { name: l ? "eye-off" : "eye", size: 16 })
        }
      )
    ] });
  }
), Cg = "_mask_1tyy7_1", Eg = "_invalid_1tyy7_31", Ig = "_xs_1tyy7_38", jg = "_sm_1tyy7_44", Ag = "_md_1tyy7_50", Tg = "_lg_1tyy7_56", Rg = "_xl_1tyy7_62", ts = {
  mask: Cg,
  invalid: Eg,
  xs: Ig,
  sm: jg,
  md: Ag,
  lg: Tg,
  xl: Rg
};
function Ds(e, t) {
  let s = e.replace(/\D/g, ""), o = "";
  for (const i of t)
    if (i === "#") {
      if (s.length === 0) break;
      o += s[0] ?? "", s = s.slice(1);
    } else if (s.length > 0)
      o += i;
    else
      break;
  return o;
}
const wv = Fe(function({
  size: t = "md",
  invalid: s = !1,
  mask: o,
  value: i,
  defaultValue: c = "",
  onChange: p,
  className: r,
  onKeyDown: a,
  ...l
}, u) {
  const [d, k] = X(c ?? ""), x = i !== void 0, N = x ? i ?? "" : d, w = (f) => {
    const m = Ds(f, o);
    return x || k(m), p?.(m), m;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: u,
      type: "text",
      value: N,
      onChange: (f) => {
        w(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const m = f.currentTarget.selectionStart ?? N.length, $ = N[m - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            f.preventDefault();
            const b = N.replace(/\D/g, "");
            w(Ds(b.slice(0, -1), o));
          }
        }
        a?.(f);
      },
      className: [
        ts.mask,
        ts[t],
        s ? ts.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...l
    }
  );
}), Lg = "_wrapper_1kqw7_1", Pg = "_input_1kqw7_8", Bg = "_invalid_1kqw7_38", qg = "_button_1kqw7_45", Fg = "_up_1kqw7_77", Hg = "_down_1kqw7_82", Kg = "_xs_1kqw7_87", Ug = "_sm_1kqw7_93", Wg = "_md_1kqw7_99", Vg = "_lg_1kqw7_105", Xg = "_xl_1kqw7_111", Gt = {
  wrapper: Lg,
  input: Pg,
  invalid: Bg,
  button: qg,
  up: Fg,
  down: Hg,
  xs: Kg,
  sm: Ug,
  md: Wg,
  lg: Vg,
  xl: Xg
};
function os(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Gg(e) {
  let t = "", s = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !s ? (s = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function Qs(e, t, s) {
  return Math.min(s ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Yg(e, t, s) {
  return t === void 0 ? e : t + Math.round((e - t) / s) * s;
}
function Zg(e, t, s, o, i) {
  const p = os(e) ?? s ?? 0;
  let r;
  return s === void 0 ? r = p + t * i : t > 0 ? r = s + Math.ceil((p - s + 1e-9) / i) * i : r = s + Math.floor((p - s - 1e-9) / i) * i, Qs(r, s, o);
}
const $v = Fe(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    value: c,
    defaultValue: p,
    onChange: r,
    min: a,
    max: l,
    step: u = 1,
    incrementLabel: d = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: x,
    onKeyDown: N,
    ...w
  }, y) {
    const [_, f] = X(
      p != null ? String(p) : ""
    ), m = c !== void 0, $ = m ? c == null ? "" : String(c) : _, b = (D) => {
      m || f(D), r?.(os(D));
    }, E = (D) => {
      m || f(String(D)), r?.(D);
    }, h = (D) => {
      i || E(Zg($, D, a, l, u));
    }, v = (D) => {
      b(Gg(D.target.value));
    }, M = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), h(1)) : D.key === "ArrowDown" && (D.preventDefault(), h(-1)), N?.(D);
    }, I = (D) => {
      const S = os($);
      S === null ? (m || f(""), r?.(null)) : E(Qs(Yg(S, a, u), a, l)), x?.(D);
    };
    return /* @__PURE__ */ O("div", { className: Gt.wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: y,
          type: "text",
          inputMode: "decimal",
          autoComplete: "off",
          value: $,
          disabled: i,
          onChange: v,
          onKeyDown: M,
          onBlur: I,
          className: [
            Gt.input,
            Gt[t],
            s ? Gt.invalid : null,
            o
          ].filter(Boolean).join(" "),
          "aria-invalid": s || void 0,
          ...w
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: [Gt.button, Gt.up].join(" "),
          "aria-label": d,
          disabled: i,
          onClick: () => h(1),
          children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 14 })
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: [Gt.button, Gt.down].join(" "),
          "aria-label": k,
          disabled: i,
          onClick: () => h(-1),
          children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 14 })
        }
      )
    ] });
  }
), Oe = {
  "dx-colorpicker": "_dx-colorpicker_1yy7f_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_1yy7f_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_1yy7f_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_1yy7f_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_1yy7f_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_1yy7f_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_1yy7f_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_1yy7f_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_1yy7f_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_1yy7f_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_1yy7f_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_1yy7f_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_1yy7f_133",
  "dx-saturation-picker": "_dx-saturation-picker_1yy7f_138",
  "dx-hue-picker": "_dx-hue-picker_1yy7f_149",
  "dx-alpha-picker": "_dx-alpha-picker_1yy7f_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_1yy7f_155",
  "dx-hue-indicator": "_dx-hue-indicator_1yy7f_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_1yy7f_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_1yy7f_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_1yy7f_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_1yy7f_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_1yy7f_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_1yy7f_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_1yy7f_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_1yy7f_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_1yy7f_300"
}, Jg = [
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
function yt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function as(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let s = t[1];
  return s.length === 3 && (s = s.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(s.slice(0, 2), 16),
    g: Number.parseInt(s.slice(2, 4), 16),
    b: Number.parseInt(s.slice(4, 6), 16),
    a: 1
  };
}
function Qg({ r: e, g: t, b: s }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(s)}`;
}
function e0({ r: e, g: t, b: s }) {
  const o = e / 255, i = t / 255, c = s / 255, p = Math.max(o, i, c), r = Math.min(o, i, c), a = p - r;
  let l = 0;
  return a !== 0 && (p === o ? l = (i - c) / a % 6 : p === i ? l = (c - o) / a + 2 : l = (o - i) / a + 4, l *= 60, l < 0 && (l += 360)), {
    h: l,
    s: p === 0 ? 0 : a / p,
    v: p
  };
}
function _n({ h: e, s: t, v: s }) {
  const o = s * t, i = e / 60, c = o * (1 - Math.abs(i % 2 - 1));
  let p = 0, r = 0, a = 0;
  i < 1 ? (p = o, r = c) : i < 2 ? (p = c, r = o) : i < 3 ? (r = o, a = c) : i < 4 ? (r = c, a = o) : i < 5 ? (p = c, a = o) : (p = o, a = c);
  const l = s - o;
  return {
    r: Math.round((p + l) * 255),
    g: Math.round((r + l) * 255),
    b: Math.round((a + l) * 255),
    a: 1
  };
}
function t0(e) {
  const t = as(e);
  if (t) return t;
  const s = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return s ? {
    r: yt(Number(s[1]), 0, 255),
    g: yt(Number(s[2]), 0, 255),
    b: yt(Number(s[3]), 0, 255),
    a: s[4] != null ? yt(Number(s[4]), 0, 1) : 1
  } : null;
}
function Ms({ r: e, g: t, b: s, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${s})` : `rgba(${e}, ${t}, ${s}, ${Math.round(o * 100) / 100})`;
}
const Nv = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: s = !0,
  showPalette: o = !0,
  palette: i = Jg,
  showButton: c = !1,
  showArrow: p = !0,
  disabled: r = !1,
  invalid: a = !1,
  placeholder: l = "",
  size: u = "md",
  tabIndex: d = 0,
  className: k,
  onChange: x,
  onValueChange: N,
  onOpen: w,
  onClose: y
}) => {
  const _ = ae(null), f = ae(null), m = ae(null), $ = ae(null), b = ae(null), E = Ye(), h = ae(null), v = $e(
    () => t0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, I] = X(!1), [D, S] = X(null), g = D ?? v, C = $e(() => e0(g), [g]), P = F(
    (W) => {
      const z = Ms(W);
      x?.(z), N?.(z);
    },
    [x, N]
  ), j = F(
    (W, z) => {
      S(W), z && !c && P(W);
    },
    [c, P]
  ), A = F(() => {
    I(!1), S(null), y?.(), f.current?.focus();
  }, [y]), H = F(() => {
    r || (S(v), I(!0), w?.());
  }, [r, v, w]), V = F(() => {
    M ? A() : H();
  }, [M, A, H]), J = F(
    (W, z) => {
      const q = m.current;
      if (!q) return C;
      const ne = q.getBoundingClientRect(), _e = yt((W - ne.left) / ne.width, 0, 1), se = yt(1 - (z - ne.top) / ne.height, 0, 1);
      return { h: C.h, s: _e, v: se };
    },
    [C]
  ), Z = F(
    (W, z) => {
      if (!z) return 0;
      const q = z.getBoundingClientRect();
      return yt((W - q.left) / q.width, 0, 1);
    },
    []
  ), ee = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), h.current = "sat";
    const z = J(W.clientX, W.clientY);
    j({ ..._n(z), a: g.a }, !0);
  }, ue = (W) => {
    if (h.current !== "sat") return;
    W.preventDefault();
    const z = J(W.clientX, W.clientY);
    j({ ..._n(z), a: g.a }, !0);
  }, ie = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), h.current = "hue";
    const z = Z(W.clientX, $.current);
    j(
      { ..._n({ ...C, h: z * 360 }), a: g.a },
      !0
    );
  }, U = (W) => {
    if (h.current !== "hue") return;
    W.preventDefault();
    const z = Z(W.clientX, $.current);
    j(
      { ..._n({ ...C, h: z * 360 }), a: g.a },
      !0
    );
  }, R = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), h.current = "alpha";
    const z = Z(W.clientX, b.current);
    j({ ...g, a: z }, !0);
  }, te = (W) => {
    if (h.current !== "alpha") return;
    W.preventDefault();
    const z = Z(W.clientX, b.current);
    j({ ...g, a: z }, !0);
  }, G = () => {
    h.current = null;
  }, ce = F(
    (W, z) => {
      const q = {
        h: C.h,
        s: yt(C.s + W, 0, 1),
        v: yt(C.v + z, 0, 1)
      };
      j({ ..._n(q), a: g.a }, !0);
    },
    [C, g.a, j]
  ), oe = F(
    (W) => {
      const z = (C.h + W + 360) % 360;
      j({ ..._n({ ...C, h: z }), a: g.a }, !0);
    },
    [C, g.a, j]
  ), xe = F(
    (W) => {
      j({ ...g, a: yt(g.a + W, 0, 1) }, !0);
    },
    [g, j]
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
        W.preventDefault(), A();
        break;
    }
  }, Be = (W, z) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), z === "hue" ? oe(-6) : xe(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), z === "hue" ? oe(6) : xe(0.05);
        break;
      case "Escape":
        W.preventDefault(), A();
        break;
    }
  }, ve = (W, z) => {
    if (W === "hex") {
      const se = as(z);
      se && j({ ...se, a: g.a }, !0);
      return;
    }
    const q = z.replace(/[^\d.]/g, ""), ne = Number.parseFloat(q);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const se = q.includes(".") ? yt(ne, 0, 1) : yt(ne / 100, 0, 1);
      j({ ...g, a: se }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    j(
      { ...g, [W]: yt(ne, 0, _e[W]) },
      !0
    );
  }, We = () => {
    D && (P(D), S(null), I(!1), y?.(), f.current?.focus());
  };
  we(() => {
    if (!M) return;
    const W = (z) => {
      _.current && !_.current.contains(z.target) && A();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [M, A]), we(() => {
    if (!M) return;
    const W = (z) => {
      z.key === "Escape" && A();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [M, A]);
  const ye = u === "xs" ? Oe["dx-colorpicker-trigger-xs"] : u === "sm" ? Oe["dx-colorpicker-trigger-sm"] : u === "lg" ? Oe["dx-colorpicker-trigger-lg"] : u === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], Ze = Ms(g), Ve = Qg(g), Le = { x: C.s * 100, y: (1 - C.v) * 100 }, tt = C.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-panel"], children: [
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
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-saturation-picker"],
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
            className: Oe["dx-saturation-indicator"],
            style: { left: `${Le.x}%`, top: `${Le.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: $,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(C.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-hue-picker"],
        onKeyDown: (W) => Be(W, "hue"),
        onPointerDown: ie,
        onPointerMove: U,
        onPointerUp: G,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Oe["dx-hue-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: b,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${C.h}, 100%, 50%))`
        },
        onKeyDown: (W) => Be(W, "alpha"),
        onPointerDown: R,
        onPointerMove: te,
        onPointerUp: G,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Oe["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    s && /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ O("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (W) => ve("hex", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: g.r,
            onChange: (W) => ve("r", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: g.g,
            onChange: (W) => ve("g", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: g.b,
            onChange: (W) => ve("b", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(g.a * 100),
            onChange: (W) => ve("a", W.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ n("div", { className: Oe["dx-colorpicker-palette"], children: i.map((W) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Oe["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const z = as(W);
          c ? j({ ...z, a: g.a }, !1) : (S(null), P({ ...z, a: g.a }), I(!1), y?.(), f.current?.focus());
        }
      },
      W
    )) }),
    c && /* @__PURE__ */ n("div", { className: Oe["dx-colorpicker-footer"], children: /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Oe["dx-colorpicker-ok"],
        onClick: We,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ O(
    "div",
    {
      ref: _,
      className: [
        Oe["dx-colorpicker"],
        M ? Oe["dx-colorpicker-open"] : null,
        a ? Oe["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: f,
            type: "button",
            className: [Oe["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": M,
            "aria-controls": E,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: d,
            onClick: V,
            onKeyDown: (W) => {
              W.key === "Escape" && M && (W.preventDefault(), A());
            },
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: Oe["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              l && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-text"], children: l }),
              p && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        M && /* @__PURE__ */ n(
          "div",
          {
            id: E,
            role: "dialog",
            "aria-label": "Choose color",
            className: Oe["dx-colorpicker-popup"],
            children: et
          }
        )
      ]
    }
  );
}, Ee = {
  "dx-datepicker": "_dx-datepicker_h4rkz_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_h4rkz_9",
  "dx-datepicker-input": "_dx-datepicker-input_h4rkz_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_h4rkz_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_h4rkz_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_h4rkz_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_h4rkz_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_h4rkz_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_h4rkz_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_h4rkz_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_h4rkz_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_h4rkz_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_h4rkz_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_h4rkz_161",
  "dx-datepicker-header": "_dx-datepicker-header_h4rkz_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_h4rkz_175",
  "dx-datepicker-title": "_dx-datepicker-title_h4rkz_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_h4rkz_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_h4rkz_214",
  "dx-datepicker-row": "_dx-datepicker-row_h4rkz_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_h4rkz_220",
  "dx-datepicker-day": "_dx-datepicker-day_h4rkz_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_h4rkz_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_h4rkz_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_h4rkz_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_h4rkz_277",
  "dx-datepicker-time": "_dx-datepicker-time_h4rkz_283",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_h4rkz_292",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_h4rkz_298",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_h4rkz_303",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_h4rkz_307",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_h4rkz_327",
  "dx-datepicker-ok": "_dx-datepicker-ok_h4rkz_355"
}, n0 = 42;
function xt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${xt(e.month)}-${xt(e.day)}`;
}
function s0(e, t) {
  const s = ht(e);
  return t ? `${s} ${xt(e.hour)}:${xt(e.minute)}:${xt(e.second)}` : s;
}
function ls(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const s = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, p = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const a = new Date(s, o - 1, i, c, p, r);
  return a.getFullYear() !== s || a.getMonth() !== o - 1 || a.getDate() !== i ? null : { year: s, month: o, day: i, hour: c, minute: p, second: r };
}
function Yt() {
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
  const s = new Date(
    e.year,
    e.month - 1,
    e.day + t,
    e.hour,
    e.minute,
    e.second
  );
  return {
    year: s.getFullYear(),
    month: s.getMonth() + 1,
    day: s.getDate(),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Hn(e, t) {
  const s = new Date(e.year, e.month - 1 + t, 1), o = s.getFullYear(), i = s.getMonth() + 1, c = new Date(o, i, 0).getDate();
  return {
    year: o,
    month: i,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Cs(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Es = {
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
  tt: (e, t, s) => new Intl.DateTimeFormat(s, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, r0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], o0 = ["y", "M", "d", "H", "m", "s"];
function Kn(e, t, s) {
  const o = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let i = "", c = 0;
  for (; c < t.length; ) {
    let p = !1;
    for (const a of r0)
      if (t.startsWith(a, c)) {
        i += Es[a](e, o, s), c += a.length, p = !0;
        break;
      }
    if (p) continue;
    const r = t[c];
    if (o0.includes(r)) {
      i += Es[r](e, o, s), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const a0 = [
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
function l0(e, t) {
  const s = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const a of a0)
      if (t.startsWith(a, i)) {
        r = a;
        break;
      }
    if (r) {
      const a = e.slice(o, o + r.length);
      if (!/^\d+$/.test(a)) return null;
      const l = Number(a);
      switch (r) {
        case "yyyy":
          s.year = l;
          break;
        case "yy":
        case "y":
          s.year = 2e3 + l;
          break;
        case "MM":
        case "M":
          s.month = l;
          break;
        case "dd":
        case "d":
          s.day = l;
          break;
        case "HH":
        case "H":
          s.hour = l;
          break;
        case "mm":
        case "m":
          s.minute = l;
          break;
        case "ss":
        case "s":
          s.second = l;
          break;
      }
      o += r.length, i += r.length;
      continue;
    }
    if (e[o] !== t[i]) return null;
    o += 1, i += 1;
  }
  const c = {
    year: s.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: s.month ?? 1,
    day: s.day ?? 1,
    hour: s.hour ?? 0,
    minute: s.minute ?? 0,
    second: s.second ?? 0
  };
  if (c.month < 1 || c.month > 12 || c.day < 1 || c.day > 31)
    return null;
  const p = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return p.getFullYear() !== c.year || p.getMonth() !== c.month - 1 || p.getDate() !== c.day ? null : c;
}
function zn(e, t) {
  const s = ls(e);
  return s || l0(e, t);
}
function i0(e, t, s) {
  return t && ht(e) < ht(t) ? t : s && ht(e) > ht(s) ? s : e;
}
const c0 = ["hour", "minute", "second"];
function Un(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Ov = Fe(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: p,
    max: r,
    showTime: a = !1,
    showButton: l = !0,
    allowClear: u = !1,
    inline: d = !1,
    disabledDates: k,
    locale: x = "en-US",
    onChange: N,
    onValueChange: w,
    onOpen: y,
    onClose: _,
    disabled: f,
    readOnly: m,
    placeholder: $,
    ariaLabel: b,
    triggerLabel: E,
    clearLabel: h,
    tabIndex: v,
    className: M,
    onBlur: I,
    onKeyDown: D,
    ...S
  }, g) {
    const C = ae(null), P = ae(null), j = ae(null), A = ae(null), H = Ye(), V = o !== void 0, [J, Z] = X(
      () => i != null ? Kn(
        zn(i, c) ?? Yt(),
        c,
        x
      ) : ""
    ), [ee, ue] = X(!1), [ie, U] = X(null), [R, te] = X(() => {
      const K = o !== void 0 ? o ?? "" : i ?? "";
      if (K) {
        const de = zn(K, c);
        if (de) return de;
      }
      return Yt();
    }), G = $e(() => p ? ls(p) : null, [p]), ce = $e(() => r ? ls(r) : null, [r]), oe = $e(
      () => new Set(k ?? []),
      [k]
    ), xe = $e(() => {
      const K = V ? o ?? "" : J;
      return K ? zn(K, c) : null;
    }, [o, J, V, c]), ke = F(
      (K) => {
        const de = ht(K);
        return !!(oe.has(de) || G && de < ht(G) || ce && de > ht(ce));
      },
      [oe, G, ce]
    ), Be = F(
      (K) => {
        if (!ke(K)) return K;
        for (let de = 1; de <= 366; de += 1) {
          const Pe = Ft(K, de);
          if (!ke(Pe)) return Pe;
          const He = Ft(K, -de);
          if (!ke(He)) return He;
        }
        return K;
      },
      [ke]
    ), ve = F(
      (K) => {
        V || Z(K ? Kn(K, c, x) : "");
        const de = K ? s0(K, a) : "";
        N?.(de), w?.(de);
      },
      [V, c, x, a, N, w]
    ), We = F(
      (K) => {
        P.current = K, typeof g == "function" ? g(K) : g && (g.current = K);
      },
      [g]
    ), ye = F(() => {
      ue(!1), U(null), _?.(), d || j.current?.focus();
    }, [d, _]), Ze = F(() => {
      if (f) return;
      const K = xe ?? Yt();
      U(K), te(Be(K)), ue(!0), y?.();
    }, [f, xe, Be, y]), Ve = F(() => {
      ee ? ye() : Ze();
    }, [ee, ye, Ze]), Le = F((K) => {
      A.current?.querySelector(
        `[data-date="${ht(K)}"]`
      )?.focus();
    }, []), tt = F(
      (K) => {
        if (ke(K)) return;
        const de = ie ?? xe, He = {
          ...a ? {
            hour: de?.hour ?? 0,
            minute: de?.minute ?? 0,
            second: de?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: K.year,
          month: K.month,
          day: K.day
        };
        U(He), a || (ve(He), ye());
      },
      [ke, ie, xe, a, ve, ye]
    ), Qe = F(
      (K, de) => {
        U((Pe) => {
          const He = Pe ?? xe ?? Yt(), St = Math.min(K === "hour" ? 23 : 59, Math.max(0, He[K] + de));
          return { ...He, [K]: St };
        });
      },
      [xe]
    ), et = F(
      (K, de) => {
        const Pe = de.replace(/\D/g, ""), He = Pe === "" ? 0 : Number(Pe), Lt = K === "hour" ? 23 : 59;
        U((St) => ({ ...St ?? xe ?? Yt(), [K]: Math.min(Lt, He) }));
      },
      [xe]
    ), W = F(() => {
      ie && (ve(ie), ye());
    }, [ie, ve, ye]), z = F(() => {
      if (ee) return;
      const K = zn(J, c);
      ve(K ? i0(K, G, ce) : null);
    }, [ee, J, c, G, ce, ve]), q = (K) => {
      const de = K.target.value;
      V || Z(de), ee && U(null);
    }, ne = (K) => {
      K.key === "Enter" ? (K.preventDefault(), ee ? ie && (ve(ie), ye()) : z()) : K.key === "Escape" ? ee && (K.preventDefault(), ye()) : K.key === "ArrowDown" && !ee ? (K.preventDefault(), Ze()) : K.key === "Tab" && ee && ue(!1), D?.(K);
    }, _e = (K) => {
      z(), I?.(K);
    }, se = (K) => {
      let de = null;
      switch (K.key) {
        case "ArrowLeft":
          de = Ft(R, -1), K.preventDefault();
          break;
        case "ArrowRight":
          de = Ft(R, 1), K.preventDefault();
          break;
        case "ArrowUp":
          de = Ft(R, -7), K.preventDefault();
          break;
        case "ArrowDown":
          de = Ft(R, 7), K.preventDefault();
          break;
        case "Home":
          de = Ft(R, -Cs(R)), K.preventDefault();
          break;
        case "End":
          de = Ft(R, 6 - Cs(R)), K.preventDefault();
          break;
        case "PageUp":
          de = Hn(R, K.shiftKey ? -12 : -1), K.preventDefault();
          break;
        case "PageDown":
          de = Hn(R, K.shiftKey ? 12 : 1), K.preventDefault();
          break;
        case "Enter":
        case " ":
          K.preventDefault(), tt(R);
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
        te(Pe), setTimeout(() => Le(Pe), 0);
      }
    };
    we(() => {
      if (!ee) return;
      const K = (de) => {
        C.current && !C.current.contains(de.target) && ye();
      };
      return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
    }, [ee, ye]), we(() => {
      if (!ee) return;
      const K = (de) => {
        de.key === "Escape" && ye();
      };
      return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
    }, [ee, ye]);
    const me = () => {
      V || Z(""), N?.(""), w?.(""), P.current?.focus();
    }, Ne = ee && ie ? Kn(ie, c, x) : V ? o ? Kn(
      zn(o, c) ?? Yt(),
      c,
      x
    ) : "" : J, qe = V ? !!o : J.length > 0, Je = d || ee, dt = { year: R.year, month: R.month }, bt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
      year: dt.year,
      month: dt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let K = 0; K < n0; K += 1)
      Se.push(Ft(Q, K - bt));
    const nt = ie ? ht(ie) : xe ? ht(xe) : null, Wt = ht(Yt()), Ot = `${dt.year}-${xt(dt.month)}`, ze = $e(
      () => new Intl.DateTimeFormat(x, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [x]
    ), Xe = new Intl.DateTimeFormat(x, {
      month: "long",
      year: "numeric"
    }).format(new Date(dt.year, dt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (K, de) => new Intl.DateTimeFormat(x, { weekday: "short" }).format(
        new Date(2021, 0, 3 + de)
      )
    ), Rt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], Jt = /* @__PURE__ */ O(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": b ?? "Date picker",
        children: [
          /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const K = Be(Hn(R, -1));
                  te(K), setTimeout(() => Le(K), 0);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-title"], children: Xe }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const K = Be(Hn(R, 1));
                  te(K), setTimeout(() => Le(K), 0);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ O(
            "div",
            {
              ref: A,
              role: "grid",
              className: Ee["dx-datepicker-grid"],
              onKeyDown: se,
              children: [
                /* @__PURE__ */ n("div", { role: "row", className: Ee["dx-datepicker-week-row"], children: vt.map((K) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "columnheader",
                    className: Ee["dx-datepicker-weekday"],
                    children: K
                  },
                  K
                )) }),
                Array.from({ length: 6 }, (K, de) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "row",
                    className: Ee["dx-datepicker-row"],
                    children: Se.slice(de * 7, de * 7 + 7).map((Pe) => {
                      const He = ht(Pe), Lt = ke(Pe), St = He.startsWith(Ot);
                      return /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": He,
                          tabIndex: He === ht(R) ? 0 : -1,
                          "aria-selected": He === nt || void 0,
                          "aria-disabled": Lt || void 0,
                          "aria-label": ze.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            St ? null : Ee["dx-datepicker-day--outside"],
                            He === Wt ? Ee["dx-datepicker-day--today"] : null,
                            He === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Lt ? Ee["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => tt(Pe),
                          onFocus: () => te(Pe),
                          children: Pe.day
                        },
                        He
                      );
                    })
                  },
                  de
                ))
              ]
            }
          ),
          a && /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time"], children: [
            c0.map((K) => /* @__PURE__ */ O("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-time-label"], children: Un(K) }),
              /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Un(K),
                    value: xt(
                      (ie ?? xe ?? Yt())[K]
                    ),
                    onChange: (de) => et(K, de.target.value),
                    onKeyDown: (de) => {
                      de.key === "ArrowUp" ? (de.preventDefault(), Qe(K, 1)) : de.key === "ArrowDown" ? (de.preventDefault(), Qe(K, -1)) : de.key === "Enter" && (de.preventDefault(), W());
                    }
                  }
                ),
                /* @__PURE__ */ O("span", { className: Ee["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${Un(K).toLowerCase()}`,
                      onClick: () => Qe(K, 1),
                      children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Un(K).toLowerCase()}`,
                      onClick: () => Qe(K, -1),
                      children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, K)),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-ok"],
                onClick: W,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ O(
      "div",
      {
        ref: C,
        className: [
          Ee["dx-datepicker"],
          d ? Ee["dx-datepicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !d && /* @__PURE__ */ O(Ce, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: We,
                type: "text",
                autoComplete: "off",
                value: Ne,
                disabled: f,
                readOnly: m,
                placeholder: $,
                tabIndex: v,
                role: l ? void 0 : "combobox",
                "aria-label": b ?? "Date",
                "aria-haspopup": l ? void 0 : "dialog",
                "aria-expanded": l ? void 0 : Je,
                "aria-controls": l ? void 0 : H,
                "aria-invalid": s || void 0,
                className: [
                  Ee["dx-datepicker-input"],
                  Rt,
                  s ? Ee["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: q,
                onKeyDown: ne,
                onBlur: _e,
                onClick: () => {
                  l || Ve();
                },
                ...S
              }
            ),
            u && !f && qe && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: [
                  Ee["dx-datepicker-clear"],
                  l ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": h ?? "Clear",
                onClick: me,
                children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
              }
            ),
            l && /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ee["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": E ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": H,
                disabled: f,
                onClick: Ve,
                children: /* @__PURE__ */ n(De, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ n(
            "div",
            {
              id: H,
              role: d ? void 0 : "dialog",
              className: d ? void 0 : Ee["dx-datepicker-popup"],
              children: Jt
            }
          )
        ]
      }
    );
  }
), Zt = {
  "dx-rating": "_dx-rating_1q2pj_1",
  "dx-rating-item": "_dx-rating-item_1q2pj_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_1q2pj_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_1q2pj_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_1q2pj_51",
  "dx-rating-clear": "_dx-rating-clear_1q2pj_55",
  "dx-rating-readonly": "_dx-rating-readonly_1q2pj_87",
  "dx-rating-disabled": "_dx-rating-disabled_1q2pj_96"
}, Sv = ({
  value: e = 0,
  stars: t = 5,
  readOnly: s = !1,
  disabled: o = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: p = "Rate",
  tabIndex: r = 0,
  className: a,
  onChange: l,
  onValueChange: u
}) => {
  const [d, k] = X(e), x = F(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), N = F(
    (f) => {
      l?.(f), u?.(f);
    },
    [l, u]
  ), w = F(
    (f) => {
      s || o || (N(f), k(f));
    },
    [s, o, N]
  ), y = (f) => {
    if (s || o) return;
    const m = d > 0 ? d : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), w(x(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), w(x(m - 1));
        break;
      case "Home":
        f.preventDefault(), w(1);
        break;
      case "End":
        f.preventDefault(), w(t);
        break;
    }
  }, _ = Array.from({ length: t }, (f, m) => m + 1);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": s || void 0,
      className: [
        Zt["dx-rating"],
        s ? Zt["dx-rating-readonly"] : null,
        o ? Zt["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: y,
      children: [
        !s && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Zt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? r : -1,
            disabled: o,
            onClick: () => w(0),
            children: /* @__PURE__ */ n(De, { name: "ban", size: 16 })
          }
        ),
        _.map((f) => {
          const m = f <= e, $ = f === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${p} ${f}`,
              tabIndex: $ ? r : -1,
              "aria-disabled": o || s || void 0,
              disabled: o || s,
              className: [
                Zt["dx-rating-item"],
                m ? Zt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => w(f),
              onFocus: () => k(f),
              children: [
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: Zt["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(De, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ n("span", { className: Zt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "star-outline", size: 20 }) })
              ]
            },
            f
          );
        })
      ]
    }
  );
}, sn = {
  "dx-slider": "_dx-slider_1jrpw_1",
  "dx-slider-track": "_dx-slider-track_1jrpw_9",
  "dx-slider-range": "_dx-slider-range_1jrpw_17",
  "dx-slider-handle": "_dx-slider-handle_1jrpw_26",
  "dx-slider-vertical": "_dx-slider-vertical_1jrpw_58",
  "dx-slider-disabled": "_dx-slider-disabled_1jrpw_84"
};
function It(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const zv = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: s = 100,
  min: o = 0,
  max: i = 100,
  step: c = 1,
  range: p = !1,
  orientation: r = "horizontal",
  disabled: a = !1,
  label: l = "Value",
  minLabel: u = "Min",
  maxLabel: d = "Max",
  tabIndex: k = 0,
  className: x,
  onChange: N,
  onInput: w,
  onValueChange: y,
  onInputChange: _
}) => {
  const f = ae(null), m = ae(
    null
  ), [$, b] = X(null), E = $ ?? e, h = $e(
    () => It(E, o, i),
    [E, o, i]
  ), v = $e(
    () => It(p ? t : h, o, i),
    [p, t, h, o, i]
  ), M = $e(
    () => It(p ? Math.max(s, v) : h, o, i),
    [p, s, v, h, o, i]
  ), I = F(
    (R) => {
      const te = i - o;
      return te <= 0 ? 0 : (It(R, o, i) - o) / te * 100;
    },
    [o, i]
  ), D = F(
    (R, te) => {
      const G = f.current;
      if (!G) return o;
      const ce = G.getBoundingClientRect();
      let oe;
      r === "vertical" ? oe = 1 - (te - ce.top) / ce.height : oe = (R - ce.left) / ce.width;
      const xe = o + It(oe, 0, 1) * (i - o);
      return c > 0 ? It(Math.round(xe / c) * c, o, i) : It(xe, o, i);
    },
    [o, i, c, r]
  ), S = F(
    (R) => {
      typeof R == "number" && b(R), N?.(R), y?.(R);
    },
    [N, y]
  ), g = F(
    (R) => {
      typeof R == "number" && b(R), w?.(R), _?.(R);
    },
    [w, _]
  ), C = F(
    (R, te, G) => {
      const ce = D(te, G);
      let oe;
      p ? R === "min" ? oe = { min: Math.min(ce, M), max: M } : oe = { min: v, max: Math.max(ce, v) } : oe = ce, g(oe), m.current === null && S(oe);
    },
    [p, D, v, M, g, S]
  ), P = F(
    (R, te) => {
      const G = (c > 0 ? c : 1) * te;
      let ce;
      p ? R === "min" ? ce = {
        min: It(v + G, o, M),
        max: M
      } : ce = {
        min: v,
        max: It(M + G, v, i)
      } : ce = It(h + G, o, i), S(ce);
    },
    [p, c, o, i, v, M, h, S]
  ), j = (R, te) => {
    if (!a)
      switch (te.key) {
        case "ArrowLeft":
        case "ArrowDown":
          te.preventDefault(), P(R, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          te.preventDefault(), P(R, 1);
          break;
        case "Home":
          te.preventDefault(), S(p ? R === "min" ? { min: o, max: M } : { min: v, max: v } : o);
          break;
        case "End":
          te.preventDefault(), S(p ? R === "min" ? { min: M, max: M } : { min: v, max: i } : i);
          break;
      }
  }, A = (R, te) => {
    a || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), m.current = { key: R, pointerId: te.pointerId }, C(R, te.clientX, te.clientY));
  }, H = (R) => {
    !m.current || m.current.pointerId !== R.pointerId || (R.preventDefault(), C(m.current.key, R.clientX, R.clientY));
  }, V = (R) => {
    !m.current || m.current.pointerId !== R.pointerId || (m.current = null, R.preventDefault(), S(p ? { min: v, max: M } : h));
  }, [J, Z] = X(null), ee = I(v), ue = I(M), ie = p ? ee : 0, U = ue;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        sn["dx-slider"],
        r === "vertical" ? sn["dx-slider-vertical"] : null,
        a ? sn["dx-slider-disabled"] : null,
        x
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ O("div", { ref: f, className: sn["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: sn["dx-slider-range"],
            style: r === "vertical" ? { bottom: `${ie}%`, height: `${U - ie}%` } : { left: `${ie}%`, width: `${U - ie}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(v),
            "aria-orientation": r,
            "aria-label": p ? u : l,
            "aria-disabled": a || void 0,
            tabIndex: a || p && J === "max" ? -1 : k,
            className: sn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${ee}% - 8px)` } : { left: `calc(${ee}% - 8px)` },
            onKeyDown: (R) => j("min", R),
            onPointerDown: (R) => A("min", R),
            onPointerMove: H,
            onPointerUp: V,
            onFocus: () => Z("min")
          }
        ),
        p && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(M),
            "aria-orientation": r,
            "aria-label": d,
            "aria-disabled": a || void 0,
            tabIndex: a || J === "min" ? -1 : k,
            className: sn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${ue}% - 8px)` } : { left: `calc(${ue}% - 8px)` },
            onKeyDown: (R) => j("max", R),
            onPointerDown: (R) => A("max", R),
            onPointerMove: H,
            onPointerUp: V,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, Ke = {
  "dx-timespanpicker": "_dx-timespanpicker_1wkv1_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_1wkv1_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_1wkv1_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_1wkv1_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_1wkv1_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_1wkv1_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_1wkv1_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_1wkv1_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_1wkv1_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_1wkv1_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_1wkv1_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_1wkv1_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_1wkv1_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_1wkv1_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_1wkv1_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_1wkv1_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_1wkv1_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_1wkv1_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_1wkv1_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_1wkv1_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_1wkv1_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_1wkv1_250"
}, d0 = "-10675199.02:48:05.4775808", u0 = "10675199.02:48:05.4775808", Kt = 86400, Ut = 3600, Mt = 60, ns = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Is = {
  days: Kt,
  hours: Ut,
  minutes: Mt,
  seconds: 1
}, _0 = {
  day: Kt,
  hour: Ut,
  minute: Mt,
  second: 1
};
function fn(e) {
  return String(e).padStart(2, "0");
}
function An(e) {
  const t = e.trim();
  if (!t) return null;
  let s = 1, o = t;
  o.startsWith("-") ? (s = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (i) {
    if (!i.slice(1).some((d) => d != null)) return null;
    const r = i[1] != null ? Number(i[1]) : 0, a = i[2] != null ? Number(i[2]) : 0, l = i[3] != null ? Number(i[3]) : 0, u = i[4] != null ? Number(i[4]) : 0;
    return s * (r * Kt + a * Ut + l * Mt + u);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const p = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), a = Number(c[3]), l = c[4] != null ? Number(c[4]) : 0, u = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || a > 59 || l > 59 ? null : s * (p * Kt + r * Ut + a * Mt + l + u);
  }
  return null;
}
function f0(e) {
  return e.days * Kt + e.hours * Ut + e.minutes * Mt + e.seconds;
}
function js(e) {
  let t = Math.abs(e);
  const s = Math.floor(t / Kt);
  t %= Kt;
  const o = Math.floor(t / Ut);
  t %= Ut;
  const i = Math.floor(t / Mt), c = Math.round(t % Mt * 1e9) / 1e9;
  return { days: s, hours: o, minutes: i, seconds: c };
}
function is(e, t) {
  const s = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Mt) * Mt : t === "hour" ? o = Math.round(o / Ut) * Ut : t === "day" && (o = Math.round(o / Kt) * Kt);
  let i = Math.round(o % Mt);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const p = Math.floor(o / Mt) + c, r = p % 60, a = Math.floor(p / 60), l = a % 24, u = Math.floor(a / 24), d = s ? "-" : "", k = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${d}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${k}${fn(l)}`;
    case "minute":
      return `${d}${k}${fn(l)}:${fn(r)}`;
    default:
      return `${d}${k}${fn(l)}:${fn(r)}:${fn(i)}`;
  }
}
function As(e, t = "second") {
  const s = An(e);
  return s === null ? "" : is(s, t);
}
function ss(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const Dv = Fe(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    min: c = d0,
    max: p = u0,
    step: r = "1",
    precision: a = "second",
    showDays: l = !0,
    showHours: u = !0,
    showMinutes: d = !0,
    showSeconds: k = !0,
    allowClear: x = !1,
    inline: N = !1,
    onChange: w,
    onValueChange: y,
    onOpen: _,
    onClose: f,
    disabled: m,
    placeholder: $,
    ariaLabel: b,
    triggerLabel: E,
    clearLabel: h,
    tabIndex: v,
    className: M,
    onBlur: I,
    onKeyDown: D,
    ...S
  }, g) {
    const C = ae(null), P = ae(null), j = ae(null), A = Ye(), H = o !== void 0, [V, J] = X(
      () => i != null ? As(i, a) : ""
    ), [Z, ee] = X(!1), [ue, ie] = X(null), [U, R] = X(null), te = $e(
      () => An(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), G = $e(
      () => An(p) ?? Number.MAX_SAFE_INTEGER,
      [p]
    ), ce = $e(() => {
      const Q = Number.parseFloat(r);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [r]), oe = $e(() => {
      const Q = H ? o ?? "" : V;
      return Q ? An(Q) : null;
    }, [o, V, H]), xe = F(
      (Q) => {
        const Se = Q === null ? "" : is(Q, a);
        H || J(Se), w?.(Se), y?.(Se);
      },
      [H, a, w, y]
    ), ke = F(
      (Q) => {
        Q && ue !== null && xe(ue), ee(!1), ie(null), R(null), f?.(), N || j.current?.focus();
      },
      [N, ue, xe, f]
    ), Be = F(() => {
      m || (ie(oe ?? 0), ee(!0), _?.());
    }, [m, oe, _]), ve = F(() => {
      Z ? ke(!1) : Be();
    }, [Z, ke, Be]), We = F(
      (Q, Se) => {
        ie((nt) => {
          const Ot = (nt ?? oe ?? 0) + Se * ce * Is[Q];
          return ss(Ot, te, G);
        });
      },
      [oe, ce, te, G]
    ), ye = F(
      (Q) => {
        const Se = U?.[Q];
        if (Se == null) return;
        const nt = Number.parseFloat(Se), Wt = Number.isNaN(nt) ? 0 : nt;
        ie((Ot) => {
          const ze = Ot ?? oe ?? 0, Xe = js(ze);
          Xe[Q] = Wt;
          const Rt = (ze < 0 ? -1 : 1) * f0(Xe);
          return ss(Rt, te, G);
        }), R(null);
      },
      [U, oe, te, G]
    ), Ze = (Q, Se) => {
      R((nt) => ({ ...nt ?? {}, [Q]: Se }));
    }, Ve = (Q, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), ye(Q), We(Q, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), ye(Q), We(Q, -1);
          break;
        case "Home":
          Se.preventDefault(), ye(Q), ie(te);
          break;
        case "End":
          Se.preventDefault(), ye(Q), ie(G);
          break;
        case "Enter":
          Se.preventDefault(), ye(Q), ke(!0);
          break;
      }
    }, Le = F(() => {
      if (Z) return;
      const Q = An(V);
      xe(Q !== null ? ss(Q, te, G) : null);
    }, [Z, V, te, G, xe]), tt = (Q) => {
      H || J(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Z ? ke(!0) : Le()) : Q.key === "Escape" && Z ? (Q.preventDefault(), ke(!1)) : Q.key === "ArrowDown" && !Z ? (Q.preventDefault(), Be()) : Q.key === "Tab" && Z && ee(!1), D?.(Q);
    }, et = (Q) => {
      Le(), I?.(Q);
    }, W = () => {
      H || J(""), w?.(""), y?.(""), P.current?.focus();
    };
    we(() => {
      if (!Z) return;
      const Q = (Se) => {
        C.current && !C.current.contains(Se.target) && ke(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [Z, ke]), we(() => {
      if (!Z) return;
      const Q = (Se) => {
        Se.key === "Escape" && ke(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [Z, ke]), we(() => {
      if (N && ue !== null) {
        const Q = oe;
        (Q === null || Math.abs(ue - Q) > 1e-9) && xe(ue);
      }
    }, [N, ue, oe, xe]);
    const z = F(
      (Q) => {
        P.current = Q, typeof g == "function" ? g(Q) : g && (g.current = Q);
      },
      [g]
    ), q = H ? o ? As(o, a) : "" : V, ne = H ? !!o : V.length > 0, _e = N || Z, se = ue ?? oe ?? 0, me = js(se), Ne = _0[a], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Is[Q] >= Ne && (Q === "days" ? l : Q === "hours" ? u : Q === "minutes" ? d : k)
    ), dt = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], bt = /* @__PURE__ */ O("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: is(se, a) }),
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ O("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ke["dx-timespanpicker-unit-label"], children: ns[Q] }),
        /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: U?.[Q] ?? String(me[Q]),
              onChange: (Se) => Ze(Q, Se.target.value),
              onKeyDown: (Se) => Ve(Q, Se),
              onBlur: () => ye(Q)
            }
          ),
          /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${ns[Q].toLowerCase()}`,
                onClick: () => {
                  ye(Q), We(Q, 1);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${ns[Q].toLowerCase()}`,
                onClick: () => {
                  ye(Q), We(Q, -1);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-footer"], children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Ke["dx-timespanpicker-ok"],
          onClick: () => ke(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ O(
      "div",
      {
        ref: C,
        className: [
          Ke["dx-timespanpicker"],
          N ? Ke["dx-timespanpicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !N && /* @__PURE__ */ O(Ce, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: q,
                disabled: m,
                placeholder: $,
                tabIndex: v,
                role: "combobox",
                "aria-label": b ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                "aria-invalid": s || void 0,
                className: [
                  Ke["dx-timespanpicker-input"],
                  dt,
                  s ? Ke["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...S
              }
            ),
            x && !m && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ke["dx-timespanpicker-clear"],
                "aria-label": h ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ke["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": E ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                disabled: m,
                onClick: ve,
                children: /* @__PURE__ */ n(De, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ n(
            "div",
            {
              id: A,
              role: N ? void 0 : "dialog",
              "aria-label": b ?? "Time span picker",
              className: N ? void 0 : Ke["dx-timespanpicker-popup"],
              children: bt
            }
          )
        ]
      }
    );
  }
), h0 = "_wrapper_1c8sy_1", p0 = "_cells_1c8sy_8", m0 = "_cell_1c8sy_8", g0 = "_invalid_1c8sy_63", y0 = "_live_1c8sy_73", rn = {
  wrapper: h0,
  cells: p0,
  cell: m0,
  "cell-sm": "_cell-sm_1c8sy_45",
  "cell-md": "_cell-md_1c8sy_51",
  "cell-lg": "_cell-lg_1c8sy_57",
  invalid: g0,
  live: y0
};
function Ts(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Mv = Fe(
  function({
    length: t = 6,
    value: s,
    defaultValue: o,
    onChange: i,
    invalid: c = !1,
    size: p = "md",
    autoFocus: r = !1,
    disabled: a = !1,
    label: l = "Security code",
    liveAnnounce: u = !0,
    className: d,
    "aria-label": k
  }, x) {
    const N = Ye(), w = s !== void 0, [y, _] = X(Ts(o).join("")), f = w ? Ts(s).join("") : y, m = Array.from({ length: t }, (S, g) => f[g] ?? ""), $ = ae([]), [b, E] = X(""), h = (S) => {
      w || _(S), i?.(S);
    }, v = (S) => {
      const g = $.current[S];
      g && !g.disabled && (g.focus(), g.select());
    }, M = (S, g) => {
      const C = g.replace(/\D/g, "").slice(-1), P = f.split("");
      if (C) {
        P[S] = C;
        const j = P.join("").slice(0, t);
        h(j), j.length < t ? v(S + 1) : u && E("Code complete");
      }
    }, I = (S, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), f[S]) {
          const C = f.split("");
          C[S] = "", h(C.join(""));
        } else if (S > 0) {
          const C = f.split("");
          C[S - 1] = "", h(C.join("")), v(S - 1);
        }
      } else g.key === "ArrowLeft" && S > 0 ? (g.preventDefault(), v(S - 1)) : g.key === "ArrowRight" && S < t - 1 ? (g.preventDefault(), v(S + 1)) : g.key === "Home" ? (g.preventDefault(), v(0)) : g.key === "End" && (g.preventDefault(), v(t - 1));
    }, D = (S, g) => {
      g.preventDefault();
      const C = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!C) return;
      const P = f.split("");
      let j = 0;
      for (let H = 0; H < C.length && S + H < t; H++)
        P[S + H] = C[H] ?? "", j++;
      const A = P.join("");
      h(A), A.length >= t ? u && E("Code complete") : v(S + j);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? l,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[p]].join(" "), children: m.map((S, g) => /* @__PURE__ */ n(
            "input",
            {
              ref: (C) => {
                $.current[g] = C, g === 0 && x && (typeof x == "function" ? x(C) : x.current = C);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: S,
              disabled: a,
              "aria-label": `Digit ${g + 1} of ${t}`,
              "aria-invalid": c && S !== "" ? !0 : void 0,
              autoFocus: r && g === 0,
              className: [
                rn.cell,
                rn[`cell-${p}`],
                c ? rn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (C) => M(g, C.target.value),
              onKeyDown: (C) => I(g, C),
              onPaste: (C) => D(g, C),
              onFocus: (C) => C.target.select(),
              onBlur: () => {
                u && E("");
              }
            },
            g
          )) }),
          u && /* @__PURE__ */ n(
            "span",
            {
              id: `${N}-live`,
              role: "status",
              "aria-live": "polite",
              className: rn.live,
              children: b
            }
          )
        ]
      }
    );
  }
), x0 = "_wrapper_1mvcz_1", b0 = "_header_1mvcz_7", v0 = "_label_1mvcz_15", k0 = "_clear_1mvcz_22", w0 = "_canvas_1mvcz_53", $0 = "_disabled_1mvcz_69", hn = {
  wrapper: x0,
  header: b0,
  label: v0,
  clear: k0,
  canvas: w0,
  disabled: $0
}, Cv = Fe(
  function({
    value: t,
    defaultValue: s,
    onChange: o,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: p = "Clear",
    ariaLabel: r = "Signature",
    width: a,
    height: l = 140,
    disabled: u = !1,
    className: d
  }, k) {
    const x = ae(null), N = ae(!1), w = ae(!1), y = ae({ x: 0, y: 0 });
    we(() => {
      const h = x.current;
      if (!h) return;
      const v = window.devicePixelRatio || 1, M = Math.round((a ?? h.clientWidth) * v), I = Math.round(l * v);
      (h.width !== M || h.height !== I) && (h.width = M, h.height = I);
      const D = h.getContext("2d");
      if (!D) return;
      D.setTransform(v, 0, 0, v, 0, 0), D.lineWidth = c, D.strokeStyle = i, D.lineCap = "round", D.lineJoin = "round";
      const S = t ?? s;
      if (S) {
        const g = new Image();
        g.onload = () => {
          D.drawImage(g, 0, 0, h.clientWidth, l);
        }, g.src = S;
      }
    }, [t, s, i, c, a, l]);
    const _ = () => {
      const h = x.current;
      if (!h) return;
      const v = h.toDataURL("image/png");
      o?.(v);
    }, f = () => {
      const h = x.current;
      if (!h) return;
      const v = h.getContext("2d");
      v && v.clearRect(0, 0, h.width, h.height), o?.("");
    };
    cs(k, () => ({
      clear: f,
      toDataURL: (h = "image/png", v) => x.current?.toDataURL(h, v) ?? ""
    }));
    const m = (h) => {
      const v = h.currentTarget.getBoundingClientRect();
      return { x: h.clientX - v.left, y: h.clientY - v.top };
    }, $ = (h) => {
      u || (h.preventDefault(), typeof h.currentTarget.setPointerCapture == "function" && h.currentTarget.setPointerCapture(h.pointerId), N.current = !0, w.current = !1, y.current = m(h));
    }, b = (h) => {
      if (!N.current) return;
      h.preventDefault();
      const v = h.currentTarget.getContext("2d");
      if (!v) return;
      const M = m(h);
      v.beginPath(), v.moveTo(y.current.x, y.current.y), v.lineTo(M.x, M.y), v.stroke(), y.current = M, w.current = !0;
    }, E = (h) => {
      N.current && (h.preventDefault(), N.current = !1, w.current && _());
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          hn.wrapper,
          d,
          u ? hn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ O("div", { className: hn.header, children: [
            /* @__PURE__ */ n("span", { className: hn.label, children: r }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: hn.clear,
                onClick: f,
                disabled: u,
                children: p
              }
            )
          ] }),
          /* @__PURE__ */ n(
            "canvas",
            {
              ref: x,
              role: "img",
              "aria-label": r,
              "aria-disabled": u || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${l}px`
              },
              className: hn.canvas,
              onPointerDown: $,
              onPointerMove: b,
              onPointerUp: E,
              onPointerCancel: E
            }
          )
        ]
      }
    );
  }
), N0 = "_wrapper_17azb_1", O0 = "_trigger_17azb_7", S0 = "_list_17azb_35", z0 = "_row_17azb_44", D0 = "_name_17azb_59", M0 = "_size_17azb_68", C0 = "_progress_17azb_74", E0 = "_fill_17azb_82", I0 = "_status_17azb_99", j0 = "_remove_17azb_106", jt = {
  wrapper: N0,
  trigger: O0,
  list: S0,
  row: z0,
  name: D0,
  size: M0,
  progress: C0,
  fill: E0,
  status: I0,
  remove: j0
};
function Rs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Ev = Fe(function({
  url: t,
  multiple: s = !1,
  parameterName: o = "files",
  auto: i = !0,
  headers: c,
  accept: p,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: l = "Upload",
  children: u,
  onProgress: d,
  onComplete: k,
  onError: x
}, N) {
  const w = ae(null), [y, _] = X([]), f = ae(/* @__PURE__ */ new Map()), m = (v, M) => {
    _(
      (I) => I.map((D) => D.file.name === v ? { ...D, ...M } : D)
    );
  }, $ = (v) => {
    if (!t) return;
    const M = new XMLHttpRequest();
    f.current.set(v.file.name, M);
    const I = new FormData();
    if (I.append(o, v.file), M.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const S = Math.round(D.loaded / D.total * 100);
      m(v.file.name, { state: "uploading", progress: S }), d?.(v.file.name, S);
    }), M.addEventListener("load", () => {
      M.status >= 200 && M.status < 300 ? (m(v.file.name, { state: "complete", progress: 100 }), k?.(v.file.name)) : (m(v.file.name, {
        state: "error",
        message: `HTTP ${M.status}`
      }), x?.(v.file.name, `HTTP ${M.status}`));
    }), M.addEventListener("error", () => {
      m(v.file.name, { state: "error", message: "Network error" }), x?.(v.file.name, "Network error");
    }), c)
      for (const [D, S] of Object.entries(c))
        M.setRequestHeader(D, S);
    M.open("POST", t), M.send(I), m(v.file.name, { state: "uploading", progress: 0 });
  }, b = (v) => {
    if (!v) return;
    const M = [...v], I = [];
    let D = Math.max(0, r - y.length);
    for (const g of M) {
      if (a != null && g.size > a) {
        x?.(
          g.name,
          `File too large (maximum ${Rs(a)})`
        );
        continue;
      }
      if (D <= 0) {
        x?.(g.name, `Too many files (maximum ${r})`);
        continue;
      }
      D -= 1, I.push(g);
    }
    const S = I.map((g) => ({
      file: g,
      state: "pending",
      progress: 0
    }));
    _((g) => [...g, ...S]), w.current && (w.current.value = ""), i && S.forEach($);
  }, E = (v) => {
    f.current.get(v)?.abort(), f.current.delete(v), _((I) => I.filter((D) => D.file.name !== v));
  }, h = u ?? /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: jt.trigger,
      onClick: () => w.current?.click(),
      children: [
        /* @__PURE__ */ n(De, { name: "upload", size: 14 }),
        l
      ]
    }
  );
  return cs(N, () => ({
    open: () => w.current?.click(),
    upload: () => y.forEach((v) => v.state === "pending" ? $(v) : null)
  })), /* @__PURE__ */ O("div", { className: jt.wrapper, children: [
    h,
    /* @__PURE__ */ n(
      "input",
      {
        ref: w,
        type: "file",
        hidden: !0,
        multiple: s,
        accept: p,
        "data-testid": "upload-input",
        onChange: (v) => b(v.target.files)
      }
    ),
    !u && y.length > 0 && /* @__PURE__ */ n("ul", { className: jt.list, children: y.map(({ file: v, state: M, progress: I, message: D }) => /* @__PURE__ */ O(
      "li",
      {
        className: jt.row,
        "data-state": M,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: jt.name, children: v.name }),
          /* @__PURE__ */ n("span", { className: jt.size, children: Rs(v.size) }),
          /* @__PURE__ */ n(
            "span",
            {
              className: jt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": I,
              children: /* @__PURE__ */ n(
                "span",
                {
                  className: jt.fill,
                  style: { width: `${I}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ n("span", { className: jt.status, role: "status", children: M === "uploading" ? "Uploading" : M === "complete" ? "Complete" : M === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: jt.remove,
              "aria-label": `Remove ${v.name}`,
              onClick: () => E(v.name),
              children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
            }
          )
        ]
      },
      v.name
    )) })
  ] });
}), A0 = "_zone_1cstd_1", T0 = "_dragging_1cstd_23", R0 = "_caption_1cstd_28", L0 = "_browse_1cstd_40", P0 = "_disabled_1cstd_67", Dn = {
  zone: A0,
  dragging: T0,
  caption: R0,
  browse: L0,
  disabled: P0
};
function B0(e, t) {
  return t ? t.split(",").some((s) => {
    if (s = s.trim(), !s) return !1;
    if (s.startsWith("."))
      return e.name.toLowerCase().endsWith(s.toLowerCase());
    if (s.endsWith("/*")) {
      const o = s.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === s;
  }) : !0;
}
const Iv = Fe(
  function({
    accept: t,
    multiple: s = !1,
    onDrop: o,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: p = "Browse",
    disabled: r = !1,
    className: a
  }, l) {
    const u = ae(null), [d, k] = X(!1), x = (f) => {
      if (!f || f.length === 0) return;
      const m = [...f].filter(($) => B0($, t ?? ""));
      m.length !== 0 && o?.(m);
    }, N = (f) => {
      r || (f.preventDefault(), k(!0));
    }, w = (f) => {
      r || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", k(!0));
    }, y = (f) => {
      r || f.currentTarget.contains(f.relatedTarget) || k(!1);
    }, _ = (f) => {
      r || (f.preventDefault(), k(!1), x(f.dataTransfer.files));
    };
    return cs(l, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ O(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          Dn.zone,
          d ? Dn.dragging : null,
          r ? Dn.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: N,
        onDragOver: w,
        onDragLeave: y,
        onDrop: _,
        children: [
          /* @__PURE__ */ n("p", { className: Dn.caption, children: d ? c : i }),
          !r && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Dn.browse,
              onClick: () => u.current?.click(),
              children: p
            }
          ),
          /* @__PURE__ */ n(
            "input",
            {
              ref: u,
              type: "file",
              hidden: !0,
              multiple: s,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (f) => {
                x(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), q0 = "_root_2n1we_1", F0 = "_menubar_2n1we_5", H0 = "_horizontal_2n1we_15", K0 = "_vertical_2n1we_20", U0 = "_itemWrapper_2n1we_25", W0 = "_item_2n1we_25", V0 = "_disabled_2n1we_61", X0 = "_icon_2n1we_68", G0 = "_text_2n1we_75", Y0 = "_caret_2n1we_79", Z0 = "_hasChildren_2n1we_85", J0 = "_submenu_2n1we_94", Q0 = "_submenuItem_2n1we_118", ct = {
  root: q0,
  menubar: F0,
  horizontal: H0,
  vertical: K0,
  itemWrapper: U0,
  item: W0,
  disabled: V0,
  icon: X0,
  text: G0,
  caret: Y0,
  hasChildren: Z0,
  submenu: J0,
  submenuItem: Q0
};
function Mn(e) {
  return !!e.disabled;
}
function jv({
  items: e,
  orientation: t = "horizontal",
  onClick: s,
  Click: o,
  ariaLabel: i = "Menu",
  className: c
}) {
  const p = Ye(), r = ae(null), a = ae(null), [l, u] = X(null), d = ae(0), k = ae(null), x = F(
    (_) => {
      const f = {
        text: _.text,
        value: _.value,
        path: _.path
      };
      (s ?? o)?.(f);
    },
    [s, o]
  ), N = F(
    (_, f) => {
      if (!Mn(_)) {
        if (_.children && _.children.length > 0) {
          const m = l === f, $ = Date.now() - d.current < 600;
          if (m && $) {
            d.current = 0;
            return;
          }
          u((b) => b === f ? null : f);
          return;
        }
        x(_), u(null);
      }
    },
    [x, l]
  ), w = (_) => {
    Mn(_) || _.children && _.children.length > 0 || (x(_), u(null));
  };
  we(() => {
    if (l == null) return;
    const _ = (f) => {
      r.current && !r.current.contains(f.target) && u(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [l]), we(() => {
    if (k.current != null && l === k.current) {
      const _ = `${p}-submenu-${l}`;
      document.getElementById(_)?.querySelector(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )?.focus(), k.current = null;
    }
  }, [l, p]);
  const y = (_) => {
    const f = a.current;
    if (!f) return;
    const m = Array.from(
      f.querySelectorAll('[data-top="true"]')
    ).filter(
      (E) => !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true"
    );
    if (l != null) {
      const E = `${p}-submenu-${l}`, h = document.getElementById(E);
      if (h) {
        const v = Array.from(
          h.querySelectorAll('[role="menuitem"]')
        ).filter((D) => D.getAttribute("aria-disabled") !== "true"), M = document.activeElement, I = M ? v.indexOf(M) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), I === -1 ? v[0]?.focus() : v[(I + 1) % v.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), I === -1 ? v[v.length - 1]?.focus() : v[(I - 1 + v.length) % v.length]?.focus();
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), u(null), f.querySelector(
            `[data-top="true"][data-index="${l}"]`
          )?.focus();
          return;
        }
        if (_.key === "Enter" || _.key === " ")
          return;
      }
      if (_.key === "Escape") {
        _.preventDefault(), u(null);
        return;
      }
    }
    const $ = document.activeElement, b = $ ? m.indexOf($) : -1;
    if (_.key === "ArrowRight" || t === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), m.length === 0) return;
      const E = b === -1 ? 0 : (b + 1) % m.length;
      m[E]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || t === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), m.length === 0) return;
      const E = b === -1 ? m.length - 1 : (b - 1 + m.length) % m.length;
      m[E]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if (b >= 0) {
        const E = $?.getAttribute("data-index"), h = E != null ? Number(E) : -1, v = h >= 0 ? e[h] : void 0;
        v?.children && v.children.length > 0 && !Mn(v) && (_.preventDefault(), k.current = h, u(h));
      }
      return;
    }
    if (_.key === "Home") {
      _.preventDefault(), m[0]?.focus();
      return;
    }
    if (_.key === "End") {
      _.preventDefault(), m[m.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: r,
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
          children: e.map((_, f) => {
            const m = !!_.children && _.children.length > 0, $ = l === f, b = Mn(_), E = `${p}-submenu-${f}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && m && !b && (d.current = Date.now(), u(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && m && u((h) => h === f ? null : h);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ O(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": f,
                      "data-dx-menu-item": "",
                      "aria-disabled": b || void 0,
                      "aria-haspopup": m ? "menu" : void 0,
                      "aria-expanded": m ? $ : void 0,
                      "aria-controls": m ? E : void 0,
                      tabIndex: b ? -1 : 0,
                      disabled: b,
                      className: [
                        ct.item,
                        b ? ct.disabled : null,
                        m ? ct.hasChildren : null
                      ].filter(Boolean).join(" "),
                      onClick: () => N(_, f),
                      children: [
                        _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: _.text }),
                        m ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  m && $ ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: E,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((h, v) => {
                        const M = Mn(h), I = !!h.children && h.children.length > 0;
                        return /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": M || void 0,
                            "aria-haspopup": I ? "menu" : void 0,
                            tabIndex: M ? -1 : 0,
                            disabled: M,
                            className: [
                              ct.submenuItem,
                              M ? ct.disabled : null
                            ].filter(Boolean).join(" "),
                            onClick: () => w(h),
                            children: [
                              h.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: h.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: h.text })
                            ]
                          },
                          `${h.text}-${v}`
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
const ey = "_root_12bqn_1", ty = "_list_12bqn_9", ny = "_item_12bqn_14", sy = "_trigger_12bqn_18", ry = "_disabled_12bqn_44", oy = "_expanded_12bqn_51", ay = "_icon_12bqn_55", ly = "_text_12bqn_66", iy = "_caret_12bqn_73", cy = "_open_12bqn_80", dy = "_submenu_12bqn_84", uy = "_submenuItem_12bqn_93", _y = "_nestedWrapper_12bqn_122", fy = "_nestedTrigger_12bqn_127", hy = "_nestedMenu_12bqn_152", py = "_iconOnly_12bqn_160", Ae = {
  root: ey,
  list: ty,
  item: ny,
  trigger: sy,
  disabled: ry,
  expanded: oy,
  icon: ay,
  text: ly,
  caret: iy,
  open: cy,
  submenu: dy,
  submenuItem: uy,
  nestedWrapper: _y,
  nestedTrigger: fy,
  nestedMenu: hy,
  iconOnly: py
};
function my({
  item: e,
  baseId: t,
  parentKey: s,
  onEmit: o
}) {
  const i = !!e.children && e.children.length > 0, [c, p] = X(!1), r = `${t}-nested-${s}`, a = !!e.disabled, l = () => {
    if (!a) {
      if (i) {
        p((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, u = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), l()) : d.key === "Escape" && c && (d.preventDefault(), p(!1));
  };
  return i ? /* @__PURE__ */ O("div", { className: Ae.nestedWrapper, children: [
    /* @__PURE__ */ O(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": r,
        "aria-disabled": a || void 0,
        disabled: a,
        tabIndex: a ? -1 : 0,
        className: [Ae.nestedTrigger, a ? Ae.disabled : null].filter(Boolean).join(" "),
        onClick: l,
        onKeyDown: u,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Ae.text, children: e.text }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [Ae.caret, c ? Ae.open : null].filter(Boolean).join(" "),
              "aria-hidden": "true",
              children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 })
            }
          )
        ]
      }
    ),
    c ? /* @__PURE__ */ n("div", { id: r, role: "menu", className: Ae.nestedMenu, children: e.children?.map((d, k) => {
      const x = !!d.disabled;
      return /* @__PURE__ */ O(
        "div",
        {
          role: "menuitem",
          "aria-disabled": x || void 0,
          tabIndex: x ? -1 : 0,
          className: [
            Ae.submenuItem,
            x ? Ae.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            x || d.children && d.children.length > 0 || o({
              text: d.text,
              value: d.value,
              path: d.path
            });
          },
          onKeyDown: (N) => {
            if (N.key === "Enter" || N.key === " ") {
              if (N.preventDefault(), x) return;
              o({
                text: d.text,
                value: d.value,
                path: d.path
              });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ae.text, children: d.text })
          ]
        },
        `${d.text}-${k}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ O(
    "div",
    {
      role: "menuitem",
      "aria-disabled": a || void 0,
      tabIndex: a ? -1 : 0,
      className: [Ae.submenuItem, a ? Ae.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        a || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), a) return;
          o({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Ae.text, children: e.text })
      ]
    }
  );
}
function Av({
  items: e,
  multiple: t,
  Multiple: s,
  showArrow: o,
  ShowArrow: i,
  displayStyle: c,
  DisplayStyle: p,
  onClick: r,
  Click: a,
  ariaLabel: l = "Panel menu",
  className: u
}) {
  const d = Ye(), k = t ?? s ?? !1, x = o ?? i ?? !0, N = c ?? p ?? "iconAndText", [w, y] = X([]), _ = F(
    ($) => {
      const b = {
        text: $.text,
        value: $.value,
        path: $.path
      };
      (r ?? a)?.(b);
    },
    [r, a]
  ), f = ($, b, E) => {
    if (!E.disabled) {
      if (b) {
        y((h) => h.includes($) ? h.filter((M) => M !== $) : k ? [...h, $] : [$]);
        return;
      }
      _(E);
    }
  }, m = ($) => {
    const b = $.target;
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "Escape") {
        const E = b.getAttribute("aria-controls");
        if (E) {
          const h = E.match(/-panel-(\d+)$/);
          if (h) {
            const v = Number(h[1]);
            y((M) => M.filter((I) => I !== v));
          }
        } else {
          const h = b.closest('[role="menu"]');
          if (h) {
            const M = h.id.match(/-panel-(\d+)$/);
            if (M) {
              const I = Number(M[1]);
              y((S) => S.filter((g) => g !== I)), document.getElementById(`${d}-trigger-${I}`)?.focus();
            }
          }
        }
        $.preventDefault();
        return;
      }
      if ($.key === "ArrowDown" || $.key === "ArrowUp") {
        const E = Array.from(
          $.currentTarget.querySelectorAll(
            'button, [role="menuitem"]'
          )
        ).filter(
          (I) => !I.hasAttribute("disabled") && I.getAttribute("aria-disabled") !== "true"
        ), h = E.indexOf(b);
        if (h === -1) return;
        $.preventDefault();
        const v = $.key === "ArrowDown" ? 1 : -1;
        E[(h + v + E.length) % E.length]?.focus();
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
        u
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ n("div", { className: Ae.list, role: "presentation", children: e.map(($, b) => {
        const E = !!$.children && $.children.length > 0, h = w.includes(b), v = !!$.disabled, M = `${d}-panel-${b}`, I = `${d}-trigger-${b}`;
        return /* @__PURE__ */ O("div", { className: Ae.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": E ? h : void 0,
              "aria-controls": E ? M : void 0,
              "aria-disabled": v || void 0,
              disabled: v,
              tabIndex: v ? -1 : 0,
              className: [
                Ae.trigger,
                v ? Ae.disabled : null,
                h ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => f(b, E, $),
              children: [
                $.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: $.icon }) : null,
                N === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: $.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": $.text, children: $.icon ? null : $.text.slice(0, 1) }),
                E && x ? /* @__PURE__ */ n(
                  "span",
                  {
                    className: [Ae.caret, h ? Ae.open : null].filter(Boolean).join(" "),
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 })
                  }
                ) : null
              ]
            }
          ),
          E && h ? /* @__PURE__ */ n(
            "div",
            {
              id: M,
              role: "menu",
              className: Ae.submenu,
              "aria-labelledby": I,
              children: $.children?.map((D, S) => /* @__PURE__ */ n(
                my,
                {
                  item: D,
                  baseId: d,
                  parentKey: `${b}-${S}`,
                  onEmit: _
                },
                `${D.text}-${S}`
              ))
            }
          ) : null
        ] }, `${$.text}-${b}`);
      }) })
    }
  );
}
const gy = "_root_1xgo5_1", yy = "_trigger_1xgo5_7", xy = "_defaultTrigger_1xgo5_40", by = "_avatar_1xgo5_46", vy = "_menu_1xgo5_58", ky = "_item_1xgo5_74", wy = "_disabled_1xgo5_88", $y = "_active_1xgo5_97", Ny = "_icon_1xgo5_107", Oy = "_text_1xgo5_114", At = {
  root: gy,
  trigger: yy,
  defaultTrigger: xy,
  avatar: by,
  menu: vy,
  item: ky,
  disabled: wy,
  active: $y,
  icon: Ny,
  text: Oy
};
function Tv({
  items: e,
  trigger: t,
  Template: s,
  onClick: o,
  Click: i,
  ariaLabel: c = "Profile menu",
  className: p
}) {
  const r = Ye(), a = `${r}-menu`, l = ae(null), u = ae(null), [d, k] = X(!1), [x, N] = X(-1), w = t ?? s, y = e.map((h, v) => h.disabled ? -1 : v).filter((h) => h >= 0), _ = F(
    (h) => {
      if (h.disabled) return;
      const v = {
        text: h.text,
        path: h.path
      };
      (o ?? i)?.(v), k(!1), u.current?.focus();
    },
    [o, i]
  ), f = F(() => {
    N(y[0] ?? -1), k(!0);
  }, [y]), m = F(() => {
    k(!1), N(-1), u.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const h = (v) => {
      l.current && !l.current.contains(v.target) && (k(!1), N(-1));
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [d]), we(() => {
    if (!d) return;
    const h = (v) => {
      v.key === "Escape" && (v.preventDefault(), m());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [d, m]);
  const $ = (h) => {
    if (y.length === 0) return;
    const v = y.indexOf(x), M = v === -1 ? 0 : (v + h + y.length) % y.length, I = y[M];
    I != null && N(I);
  }, b = (h) => {
    if (!d) {
      (h.key === "ArrowDown" || h.key === "Enter" || h.key === " ") && (h.preventDefault(), f());
      return;
    }
    switch (h.key) {
      case "Escape":
        h.preventDefault(), m();
        break;
      case "ArrowDown":
        h.preventDefault(), $(1);
        break;
      case "ArrowUp":
        h.preventDefault(), $(-1);
        break;
      case "Home":
        h.preventDefault(), y[0] != null && N(y[0]);
        break;
      case "End":
        h.preventDefault(), y[y.length - 1] != null && N(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (h.preventDefault(), x >= 0) {
          const v = e[x];
          v && !v.disabled && _(v);
        }
        break;
      case "Tab":
        k(!1), N(-1);
        break;
    }
  }, E = (h) => {
    switch (h.key) {
      case "ArrowDown":
        h.preventDefault(), $(1);
        break;
      case "ArrowUp":
        h.preventDefault(), $(-1);
        break;
      case "Home":
        h.preventDefault(), y[0] != null && N(y[0]);
        break;
      case "End":
        h.preventDefault(), y[y.length - 1] != null && N(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (h.preventDefault(), x >= 0) {
          const v = e[x];
          v && !v.disabled && _(v);
        }
        break;
      case "Escape":
        h.preventDefault(), m();
        break;
      case "Tab":
        k(!1), N(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: l,
      className: [At.root, p].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ O("nav", { "aria-label": c, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: u,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": a,
            "aria-label": c,
            className: At.trigger,
            onClick: () => d ? m() : f(),
            onKeyDown: b,
            children: w ?? /* @__PURE__ */ O("span", { className: At.defaultTrigger, children: [
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
            "aria-activedescendant": x >= 0 ? `${r}-item-${x}` : void 0,
            className: At.menu,
            onKeyDown: E,
            tabIndex: -1,
            children: e.map((h, v) => {
              const M = !!h.disabled, I = v === x;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${r}-item-${v}`,
                  role: "menuitem",
                  "aria-disabled": M || void 0,
                  tabIndex: M ? -1 : 0,
                  className: [
                    At.item,
                    I ? At.active : null,
                    M ? At.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    M || _(h);
                  },
                  onMouseEnter: () => {
                    M || N(v);
                  },
                  children: [
                    h.icon ? /* @__PURE__ */ n("span", { className: At.icon, "aria-hidden": "true", children: h.icon }) : null,
                    /* @__PURE__ */ n("span", { className: At.text, children: h.text })
                  ]
                },
                `${h.text}-${v}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Sy = "_root_1dakq_1", zy = "_bottomRight_1dakq_11", Dy = "_bottomLeft_1dakq_16", My = "_topRight_1dakq_21", Cy = "_topLeft_1dakq_26", Ey = "_menu_1dakq_31", Iy = "_itemWrapper_1dakq_48", jy = "_tooltip_1dakq_54", Ay = "_main_1dakq_76", Ty = "_mainIcon_1dakq_104", Ry = "_mainOpen_1dakq_109", Ly = "_item_1dakq_48", Py = "_disabled_1dakq_141", By = "_itemIcon_1dakq_148", ut = {
  root: Sy,
  bottomRight: zy,
  bottomLeft: Dy,
  topRight: My,
  topLeft: Cy,
  menu: Ey,
  itemWrapper: Iy,
  tooltip: jy,
  main: Ay,
  mainIcon: Ty,
  mainOpen: Ry,
  item: Ly,
  disabled: Py,
  itemIcon: By
};
function Rv({
  items: e,
  position: t,
  Position: s,
  icon: o = "+",
  onClick: i,
  Click: c,
  ariaLabel: p = "Open menu",
  className: r
}) {
  const a = t ?? s ?? "bottom-right", u = `${Ye()}-menu`, d = ae(null), k = ae(null), [x, N] = X(!1), w = F(
    (m) => {
      if (m.disabled) return;
      const $ = { text: m.text, value: m.value };
      (i ?? c)?.($), N(!1), k.current?.focus();
    },
    [i, c]
  );
  we(() => {
    if (!x) return;
    const m = ($) => {
      d.current && !d.current.contains($.target) && N(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [x]), we(() => {
    if (!x) return;
    const m = ($) => {
      $.key === "Escape" && (N(!1), k.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [x]);
  const y = a === "bottom-right" ? ut.bottomRight : a === "bottom-left" ? ut.bottomLeft : a === "top-right" ? ut.topRight : ut.topLeft, _ = (m) => {
    !x && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), N(!0)) : x && m.key === "Escape" && (m.preventDefault(), N(!1));
  }, f = (m) => {
    m.key === "Escape" && (m.preventDefault(), N(!1), k.current?.focus());
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: d,
      className: [ut.root, y, r].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        x ? /* @__PURE__ */ n(
          "div",
          {
            id: u,
            role: "menu",
            "aria-label": p,
            className: ut.menu,
            onKeyDown: f,
            children: e.map((m, $) => {
              const b = !!m.disabled;
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": b || void 0,
                    title: m.text,
                    disabled: b,
                    tabIndex: b ? -1 : 0,
                    className: [ut.item, b ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => w(m),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: m.icon ?? "•" })
                  }
                )
              ] }, `${m.text}-${$}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: k,
            type: "button",
            className: ut.main,
            "aria-haspopup": "menu",
            "aria-expanded": x,
            "aria-controls": u,
            "aria-label": p,
            onClick: () => N((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ n(
              "span",
              {
                "aria-hidden": "true",
                className: [ut.mainIcon, x ? ut.mainOpen : null].filter(Boolean).join(" "),
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
const qy = "_root_17721_1", Fy = "_list_17721_5", Hy = "_item_17721_15", Ky = "_link_17721_22", Uy = "_linkButton_17721_23", Wy = "_current_17721_24", Vy = "_disabled_17721_68", Xy = "_icon_17721_74", Gy = "_text_17721_81", Yy = "_separator_17721_85", Ue = {
  root: qy,
  list: Fy,
  item: Hy,
  link: Ky,
  linkButton: Uy,
  current: Wy,
  disabled: Vy,
  icon: Xy,
  text: Gy,
  separator: Yy
};
function Lv({
  items: e,
  onClick: t,
  Click: s,
  ariaLabel: o = "Breadcrumb",
  className: i
}) {
  const c = t ?? s, p = (r) => {
    r.disabled || c?.({ text: r.text, path: r.path });
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": o,
      className: [Ue.root, i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((r, a) => {
        const l = a === e.length - 1, u = !!r.disabled;
        return /* @__PURE__ */ O("li", { className: Ue.item, children: [
          l ? u ? /* @__PURE__ */ O(
            "span",
            {
              className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                r.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: r.icon }) : null,
                r.text
              ]
            }
          ) : r.path ? /* @__PURE__ */ O(
            "a",
            {
              href: r.path,
              className: Ue.link,
              "aria-current": "page",
              onClick: (d) => {
                d.preventDefault(), p(r);
              },
              children: [
                r.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: r.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: r.text })
              ]
            }
          ) : /* @__PURE__ */ O(
            "span",
            {
              className: Ue.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                r.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: r.icon }) : null,
                r.text
              ]
            }
          ) : u ? /* @__PURE__ */ O(
            "span",
            {
              className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                r.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: r.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: r.text })
              ]
            }
          ) : r.path ? /* @__PURE__ */ O(
            "a",
            {
              href: r.path,
              className: Ue.link,
              onClick: (d) => {
                d.preventDefault(), p(r);
              },
              children: [
                r.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: r.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: r.text })
              ]
            }
          ) : /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              className: Ue.linkButton,
              tabIndex: 0,
              onClick: () => p(r),
              children: [
                r.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: r.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: r.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${r.text}-${a}`);
      }) })
    }
  );
}
const Zy = "_root_r4po5_1", Jy = "_list_r4po5_5", Qy = "_item_r4po5_15", ex = "_connector_r4po5_21", tx = "_connectorCompleted_r4po5_30", nx = "_step_r4po5_34", sx = "_active_r4po5_69", rx = "_completed_r4po5_75", ox = "_circle_r4po5_79", ax = "_check_r4po5_109", lx = "_icon_r4po5_114", ix = "_number_r4po5_119", cx = "_text_r4po5_124", _t = {
  root: Zy,
  list: Jy,
  item: Qy,
  connector: ex,
  connectorCompleted: tx,
  step: nx,
  active: sx,
  completed: rx,
  circle: ox,
  check: ax,
  icon: lx,
  number: ix,
  text: cx
};
function Pv({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  linear: i,
  Linear: c,
  onChange: p,
  Change: r,
  onSelectedIndexChange: a,
  ariaLabel: l = "Steps",
  className: u
}) {
  const d = i ?? c ?? !1, k = t ?? s, x = k !== void 0, [N, w] = X(() => Math.min(Math.max(0, k ?? o), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, x ? k : N),
    Math.max(0, e.length - 1)
  ), f = ae(null), m = F(
    (E) => {
      const h = Math.min(
        Math.max(0, E),
        Math.max(0, e.length - 1)
      );
      x || w(h), (p ?? r ?? a)?.(h);
    },
    [x, p, r, a, e.length]
  ), $ = F(
    (E, h) => !!(h.disabled || d && E > _ + 1),
    [d, _]
  ), b = (E) => {
    const h = Array.from(
      E.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), v = document.activeElement, M = v ? h.indexOf(v) : -1;
    if (E.key === "ArrowRight" || E.key === "ArrowDown") {
      if (E.preventDefault(), h.length === 0) return;
      const I = M === -1 ? 0 : (M + 1) % h.length, D = h[I];
      D && D.focus();
    } else if (E.key === "ArrowLeft" || E.key === "ArrowUp") {
      if (E.preventDefault(), h.length === 0) return;
      const I = M === -1 ? h.length - 1 : (M - 1 + h.length) % h.length, D = h[I];
      D && D.focus();
    } else E.key === "Home" ? (E.preventDefault(), h[0]?.focus()) : E.key === "End" && (E.preventDefault(), h[h.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": l,
      className: [_t.root, u].filter(Boolean).join(" "),
      onKeyDown: b,
      children: /* @__PURE__ */ n("ol", { ref: f, role: "list", className: _t.list, children: e.map((E, h) => {
        const v = h === _, M = h < _, I = $(h, E);
        return /* @__PURE__ */ O(
          "li",
          {
            role: "listitem",
            className: _t.item,
            children: [
              h > 0 ? /* @__PURE__ */ n(
                "span",
                {
                  className: [
                    _t.connector,
                    M ? _t.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ O(
                "button",
                {
                  type: "button",
                  "data-step": h,
                  "aria-current": v ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    _t.step,
                    v ? _t.active : null,
                    M ? _t.completed : null,
                    I ? _t.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || m(h);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "check", size: "sm" }) }) : E.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: E.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: h + 1 }) }),
                    /* @__PURE__ */ n("span", { className: _t.text, children: E.text })
                  ]
                }
              )
            ]
          },
          `${E.text}-${h}`
        );
      }) })
    }
  );
}
const dx = "_root_1axlw_1", ux = "_horizontal_1axlw_13", _x = "_vertical_1axlw_17", fx = "_pane_1axlw_21", hx = "_handle_1axlw_31", px = "_handleHorizontal_1axlw_51", mx = "_handleVertical_1axlw_57", gx = "_handleGrip_1axlw_63", yx = "_handleCollapseHint_1axlw_75", xx = "_collapseBtn_1axlw_79", bx = "_collapseBtnCollapsed_1axlw_109", $t = {
  root: dx,
  horizontal: ux,
  vertical: _x,
  pane: fx,
  handle: hx,
  handleHorizontal: px,
  handleVertical: mx,
  handleGrip: gx,
  handleCollapseHint: yx,
  collapseBtn: xx,
  collapseBtnCollapsed: bx
};
function Cn(e, t) {
  if (!e) return t;
  const s = e.trim();
  if (s.endsWith("%")) {
    const i = parseFloat(s.slice(0, -1));
    return Number.isNaN(i) ? t : i;
  }
  if (s.endsWith("px")) {
    const i = parseFloat(s.slice(0, -2));
    return Number.isNaN(i) ? t : i;
  }
  const o = parseFloat(s);
  return Number.isNaN(o) ? t : o;
}
function Ht(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function Bv({
  orientation: e,
  Orientation: t,
  panes: s,
  onResize: o,
  Resize: i,
  onCollapse: c,
  Collapse: p,
  ariaLabel: r = "Splitter",
  className: a
}) {
  const l = e ?? t ?? "horizontal", u = l === "horizontal", d = ae(null), k = F(() => {
    const g = s.length;
    if (g === 0) return [];
    const C = s.map((j) => j.size ? Cn(j.size, 100 / g) : 100 / g), P = C.reduce((j, A) => j + A, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? C.map((j) => j / P * 100) : C;
  }, [s]), [x, N] = X(() => k()), [w, y] = X(
    () => s.map((g) => !!g.collapsed)
  ), _ = ae(x);
  we(() => {
    y(s.map((g) => !!g.collapsed));
  }, [s]);
  const f = F(
    () => s.map((g) => Cn(g.min, 0)),
    [s]
  ), m = F(
    () => s.map((g) => Cn(g.max, 100)),
    [s]
  ), $ = F(
    (g, C) => {
      const P = { paneIndex: g, newSize: C, cancel: !1 };
      return (o ?? i)?.(P), !P.cancel;
    },
    [o, i]
  ), b = F(
    (g, C) => {
      const P = { paneIndex: g, collapse: C, cancel: !1 };
      return (c ?? p)?.(P), !P.cancel;
    },
    [c, p]
  ), E = F(
    (g) => {
      const C = !w[g];
      b(g, C) && (C ? (_.current = [...x], y((P) => {
        const j = [...P];
        return j[g] !== void 0 && (j[g] = !0), j;
      }), N((P) => {
        const j = [...P], A = j[g] ?? 0, H = g < j.length - 1 ? g + 1 : g - 1;
        if (H >= 0 && H < j.length) {
          const V = j[H] ?? 0;
          j[H] = V + A, j[g] = 0;
        } else
          j[g] = 0;
        return j;
      })) : (y((P) => {
        const j = [...P];
        return j[g] !== void 0 && (j[g] = !1), j;
      }), N(() => {
        const P = [..._.current];
        return P.length !== s.length ? s.map(() => 100 / s.length) : P;
      })));
    },
    [w, x, s.length, b]
  ), h = ae(
    null
  ), v = F(
    (g, C, P) => {
      const j = d.current;
      if (!j) return null;
      const A = j.getBoundingClientRect();
      let H;
      if (u) {
        if (A.width === 0) return null;
        H = (C - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        H = (P - A.top) / A.height * 100;
      }
      let V = 0;
      for (let Z = 0; Z < g; Z++) {
        const ee = x[Z];
        ee !== void 0 && (V += ee);
      }
      return H - V;
    },
    [u, x]
  ), M = (g, C) => {
    C.preventDefault();
    const P = C.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(C.pointerId), h.current = { handleIndex: g, pointerId: C.pointerId };
  }, I = (g) => {
    if (!h.current || h.current.pointerId !== g.pointerId)
      return;
    g.preventDefault();
    const C = h.current.handleIndex, P = v(C, g.clientX, g.clientY);
    if (P == null) return;
    const j = f(), A = m(), H = j[C] ?? 0, V = A[C] ?? 100, J = C + 1, Z = j[J] ?? 0, ee = A[J] ?? 100, ue = x[C] ?? 0, ie = x[J] ?? 0, U = ue + ie;
    if (U <= 0) return;
    let R = Ht(P, H, V), te = U - R;
    if (te < Z) {
      if (te = Z, R = U - te, R < H || R > V) return;
    } else if (te > ee && (te = ee, R = U - te, R < H || R > V))
      return;
    R = Ht(R, H, V), te = U - R, $(C, R) && N((G) => {
      const ce = [...G];
      return ce[C] = R, ce[J] = te, ce;
    });
  }, D = (g) => {
    !h.current || h.current.pointerId !== g.pointerId || (h.current = null);
  }, S = (g, C) => {
    const P = f(), j = m(), A = g, H = g + 1, V = x[A] ?? 0, J = x[H] ?? 0, Z = V + J;
    let ee = 0;
    const ue = !!s[A]?.collapsible, ie = !!s[H]?.collapsible;
    if (u ? C.key === "ArrowLeft" ? ee = -5 : C.key === "ArrowRight" && (ee = 5) : C.key === "ArrowUp" ? ee = -5 : C.key === "ArrowDown" && (ee = 5), C.key === "Home") {
      C.preventDefault();
      let U = P[A] ?? 0, R = Z - U;
      if (R = Ht(
        R,
        P[H] ?? 0,
        j[H] ?? 100
      ), U = Z - R, U = Ht(U, P[A] ?? 0, j[A] ?? 100), !$(A, U)) return;
      N((te) => {
        const G = [...te];
        return G[A] = U, G[H] = R, G;
      });
      return;
    }
    if (C.key === "End") {
      C.preventDefault();
      let U = j[A] ?? 100;
      U = Math.min(U, Z - (P[H] ?? 0));
      let R = Z - U;
      if (R = Ht(
        R,
        P[H] ?? 0,
        j[H] ?? 100
      ), U = Z - R, U = Ht(U, P[A] ?? 0, j[A] ?? 100), !$(A, U)) return;
      N((te) => {
        const G = [...te];
        return G[A] = U, G[H] = R, G;
      });
      return;
    }
    if ((C.key === "Enter" || C.key === " ") && (ue || ie)) {
      C.preventDefault(), E(ue ? A : H);
      return;
    }
    if (ee !== 0) {
      C.preventDefault();
      let U = V + ee, R = Z - U;
      const te = P[A] ?? 0, G = j[A] ?? 100, ce = P[H] ?? 0, oe = j[H] ?? 100;
      if (U = Ht(U, te, G), R = Z - U, (R < ce || R > oe) && (R = Ht(R, ce, oe), U = Z - R, U = Ht(U, te, G), R = Z - U), !$(A, U)) return;
      N((xe) => {
        const ke = [...xe];
        return ke[A] = U, ke[H] = R, ke;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [
        $t.root,
        u ? $t.horizontal : $t.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: s.map((g, C) => {
        const P = !!w[C], j = P ? 0 : x[C] ?? 100 / s.length, A = P ? { display: "none" } : u ? {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, H = Cn(g.min, 0), V = Cn(g.max, 100), J = C < s.length - 1, Z = !!s[C + 1]?.collapsible;
        return /* @__PURE__ */ O("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ O(
            "div",
            {
              role: "group",
              "aria-label": g.label ?? `Pane ${C + 1}`,
              className: $t.pane,
              style: A,
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
                    children: u ? "◀" : "▲"
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
                    children: u ? "▶" : "▼"
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
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          J ? /* @__PURE__ */ O(
            "div",
            {
              role: "separator",
              "aria-orientation": l,
              "aria-valuemin": H,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${C + 1}`,
              tabIndex: P || w[C + 1] ? -1 : 0,
              className: [
                $t.handle,
                u ? $t.handleHorizontal : $t.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (ee) => M(C, ee),
              onPointerMove: I,
              onPointerUp: D,
              onKeyDown: (ee) => S(C, ee),
              children: [
                /* @__PURE__ */ n("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (g.collapsible || Z) && /* @__PURE__ */ n(
                  "span",
                  {
                    className: $t.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, C);
      })
    }
  );
}
const vx = "_root_exk72_1", kx = "_list_exk72_5", wx = "_vertical_exk72_14", $x = "_horizontal_exk72_20", Nx = "_item_exk72_28", Ox = "_link_exk72_32", Sx = "_active_exk72_57", pn = {
  root: vx,
  list: kx,
  vertical: wx,
  horizontal: $x,
  item: Nx,
  link: Ox,
  active: Sx
};
function qv({
  items: e,
  selector: t,
  Selector: s,
  orientation: o,
  Orientation: i,
  onClick: c,
  Click: p,
  ariaLabel: r = "Table of contents",
  className: a
}) {
  const l = t ?? s, u = o ?? i ?? "vertical", [d, k] = X(
    () => e[0]?.selector ?? null
  ), x = ae(d);
  x.current = d;
  const N = F(
    (w, y) => {
      if (k(w.selector), (c ?? p)?.({ text: w.text, selector: w.selector }), y) {
        try {
          y.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          y.scrollIntoView();
        }
        const f = y;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, p]
  );
  return we(() => {
    if (e.length === 0) return;
    const y = (() => {
      if (l) {
        const b = document.querySelector(l);
        if (b) return b;
      }
      return window;
    })();
    let _ = null;
    const f = /* @__PURE__ */ new Map(), m = () => {
      let b = null, E = null;
      for (const v of e) {
        const M = document.querySelector(v.selector);
        if (!M) continue;
        f.set(v.selector, M);
        const I = M.getBoundingClientRect();
        let D = I.top;
        if (y !== window) {
          const S = y.getBoundingClientRect();
          D = I.top - S.top;
        }
        D <= 80 ? (!E || D > E.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && (E = { sel: v.selector, el: M }) : (!b || D < b.top) && (b = { sel: v.selector, top: D });
      }
      const h = E?.sel ?? b?.sel ?? e[0]?.selector ?? null;
      h && h !== x.current && k(h);
    }, $ = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const b = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver((E) => {
        const h = E.filter((v) => v.isIntersecting).sort((v, M) => v.boundingClientRect.top - M.boundingClientRect.top);
        if (h[0]) {
          const v = h[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === v) {
              k(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && v.id === M.selector.slice(1)) {
              k(M.selector);
              break;
            }
          }
        } else
          m();
      }, b);
      for (const E of e) {
        const h = document.querySelector(E.selector);
        h && (_.observe(h), f.set(E.selector, h));
      }
    }
    return y === window ? (window.addEventListener("scroll", $, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", $), _?.disconnect();
    }) : (y.addEventListener("scroll", $, {
      passive: !0
    }), m(), () => {
      y.removeEventListener("scroll", $), _?.disconnect();
    });
  }, [e, l]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [pn.root, pn[u], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: pn.list, children: e.map((w) => {
        const y = w.selector === d;
        return /* @__PURE__ */ n("li", { className: pn.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: w.selector.startsWith("#") || w.selector.startsWith(".") ? w.selector : `#${w.selector}`,
            className: [pn.link, y ? pn.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const f = document.querySelector(w.selector);
              N(w, f);
            },
            children: w.text
          }
        ) }, `${w.text}-${w.selector}`);
      }) })
    }
  );
}
const zx = "_root_1i6qn_1", Dx = "_viewport_1i6qn_17", Mx = "_slide_1i6qn_24", Cx = "_active_1i6qn_33", Ex = "_arrow_1i6qn_37", Ix = "_prev_1i6qn_71", jx = "_next_1i6qn_75", Ax = "_pauseBtn_1i6qn_79", Tx = "_indicators_1i6qn_110", Rx = "_indicator_1i6qn_110", Lx = "_indicatorActive_1i6qn_145", Nt = {
  root: zx,
  viewport: Dx,
  slide: Mx,
  active: Cx,
  arrow: Ex,
  prev: Ix,
  next: jx,
  pauseBtn: Ax,
  indicators: Tx,
  indicator: Rx,
  indicatorActive: Lx
};
function Fv({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  auto: i,
  Auto: c,
  interval: p,
  Interval: r,
  pauseOnHover: a,
  PauseOnHover: l,
  showArrows: u,
  ShowArrows: d,
  showIndicators: k,
  ShowIndicators: x,
  onChange: N,
  Change: w,
  ariaLabel: y = "Carousel",
  className: _
}) {
  const f = t ?? s, m = f !== void 0, [$, b] = X(() => Math.min(Math.max(0, f ?? o), Math.max(0, e.length - 1))), E = m ? f : $, h = e.length === 0 ? 0 : Math.min(Math.max(0, E), e.length - 1), v = i ?? c ?? !1, M = p ?? r ?? 3e3, I = a ?? l ?? !0, D = u ?? d ?? !0, S = k ?? x ?? !0, [g, C] = X(!1), [P, j] = X(!1), A = g || P, H = ae(null), V = Ye(), J = F(
    (ce) => {
      const oe = e.length === 0 ? 0 : (ce % e.length + e.length) % e.length;
      m || b(oe), (N ?? w)?.(oe);
    },
    [m, N, w, e.length]
  ), Z = F(() => {
    J(h - 1);
  }, [J, h]), ee = F(() => {
    J(h + 1);
  }, [J, h]), ue = F(
    (ce) => {
      J(ce);
    },
    [J]
  );
  we(() => {
    if (!v || A || e.length <= 1) return;
    const ce = setInterval(() => {
      J(h + 1);
    }, M);
    return () => clearInterval(ce);
  }, [v, A, M, h, J, e.length]);
  const ie = (ce) => {
    e.length !== 0 && (ce.key === "ArrowLeft" ? (ce.preventDefault(), Z()) : ce.key === "ArrowRight" ? (ce.preventDefault(), ee()) : ce.key === "Home" ? (ce.preventDefault(), ue(0)) : ce.key === "End" && (ce.preventDefault(), ue(e.length - 1)));
  }, U = () => {
    I && v && j(!0);
  }, R = () => {
    I && v && j(!1);
  }, te = () => {
    I && v && j(!0);
  }, G = () => {
    I && v && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ O(
    "div",
    {
      ref: H,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [Nt.root, _].filter(Boolean).join(" "),
      onKeyDown: ie,
      onMouseEnter: U,
      onMouseLeave: R,
      onFocusCapture: te,
      onBlurCapture: G,
      children: [
        /* @__PURE__ */ n("div", { id: V, className: Nt.viewport, children: e.map((ce, oe) => {
          const xe = oe === h;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${oe + 1} of ${e.length}`,
              "aria-hidden": xe ? void 0 : !0,
              hidden: !xe,
              className: [Nt.slide, xe ? Nt.active : null].filter(Boolean).join(" "),
              children: ce
            },
            oe
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ O(Ce, { children: [
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
        S && e.length > 1 ? /* @__PURE__ */ n(
          "div",
          {
            className: Nt.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ce, oe) => {
              const xe = oe === h;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: [
                    Nt.indicator,
                    xe ? Nt.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${oe + 1}`,
                  "aria-current": xe ? "true" : void 0,
                  "aria-controls": V,
                  onClick: () => ue(oe)
                },
                oe
              );
            })
          }
        ) : null
      ]
    }
  );
}
const Px = "_root_10ix0_1", Bx = "_group_10ix0_20", qx = "_itemWrapper_10ix0_30", Fx = "_treeitem_10ix0_34", Hx = "_disabled_10ix0_50", Kx = "_selected_10ix0_60", Ux = "_caret_10ix0_66", Wx = "_caretIcon_10ix0_113", Vx = "_caretOpen_10ix0_120", Xx = "_caretPlaceholder_10ix0_124", Gx = "_label_10ix0_130", Yx = "_loading_10ix0_137", Zx = "_loadingRow_10ix0_143", Jx = "_empty_10ix0_149", Qx = "_checkbox_10ix0_155", st = {
  root: Px,
  group: Bx,
  itemWrapper: qx,
  treeitem: Fx,
  disabled: Hx,
  selected: Kx,
  caret: Ux,
  caretIcon: Wx,
  caretOpen: Vx,
  caretPlaceholder: Xx,
  label: Gx,
  loading: Yx,
  loadingRow: Zx,
  empty: Jx,
  checkbox: Qx
};
function e2({
  indeterminate: e,
  ...t
}) {
  const s = ae(null);
  return we(() => {
    s.current && (s.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: s, type: "checkbox", ...t });
}
function Hv({
  data: e,
  Data: t,
  children: s,
  Children: o,
  textProperty: i,
  TextProperty: c,
  keyProperty: p,
  KeyProperty: r,
  selectionMode: a,
  SelectionMode: l,
  selectedItem: u,
  SelectedItem: d,
  selectedItems: k,
  SelectedItems: x,
  defaultSelectedItem: N,
  defaultSelectedItems: w,
  onChange: y,
  Change: _,
  onExpand: f,
  Expand: m,
  onCollapse: $,
  Collapse: b,
  loadChildData: E,
  LoadChildData: h,
  template: v,
  Template: M,
  itemTemplate: I,
  ItemTemplate: D,
  ariaLabel: S,
  AriaLabel: g,
  allowCheckBoxes: C = !1,
  checkedKeys: P,
  defaultCheckedKeys: j,
  onCheckedChange: A,
  allowCheckChildren: H = !0,
  className: V
}) {
  const J = e ?? t ?? [], Z = s ?? o, ee = i ?? c ?? "text", ue = p ?? r ?? "id", ie = a ?? l ?? "single", U = S ?? g ?? "Tree", R = E ?? h, te = v ?? M ?? I ?? D, G = F(
    (B) => {
      const Y = B[ue];
      return Y != null ? String(Y) : String(B.id ?? "");
    },
    [ue]
  ), ce = F(
    (B) => {
      const Y = B[ee];
      if (Y != null) return String(Y);
      const re = B.text;
      return re != null ? String(re) : "";
    },
    [ee]
  ), oe = F(
    (B) => {
      if (Z) {
        const re = Z(B);
        if (re !== void 0) return re;
      }
      const Y = B.children;
      if (Array.isArray(Y)) return Y;
    },
    [Z]
  ), xe = F(
    (B) => {
      const Y = /* @__PURE__ */ new Set(), re = (he) => {
        for (const fe of he) {
          const be = G(fe);
          fe.expanded && Y.add(be);
          const Te = oe(fe);
          Te && Te.length > 0 && re(Te);
        }
      };
      return re(B), Y;
    },
    [G, oe]
  ), [ke, Be] = X(
    () => xe(J)
  ), [ve, We] = X(
    () => /* @__PURE__ */ new Map()
  ), [ye, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = u ?? d, Le = k ?? x, et = ie === "multiple" ? Le !== void 0 : Ve !== void 0, W = F(() => {
    if (ie === "multiple") {
      if (w && w.length > 0)
        return new Set(w.map((re) => G(re)));
      const B = /* @__PURE__ */ new Set(), Y = (re) => {
        for (const he of re) {
          he.selected && B.add(G(he));
          const fe = oe(he);
          fe && Y(fe);
        }
      };
      return Y(J), B;
    } else {
      if (N) return /* @__PURE__ */ new Set([G(N)]);
      let B = null;
      const Y = (re) => {
        for (const he of re) {
          if (he.selected)
            return B = G(he), !0;
          const fe = oe(he);
          if (fe && Y(fe)) return !0;
        }
        return !1;
      };
      return Y(J), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [
    ie,
    N,
    w,
    G,
    oe,
    J
  ]), [z, q] = X(
    () => W()
  ), ne = $e(() => {
    if (ie === "multiple") {
      if (Le !== void 0) {
        const B = Le;
        return B ? new Set(B.map((Y) => G(Y))) : /* @__PURE__ */ new Set();
      }
      return z;
    } else {
      if (Ve !== void 0) {
        const B = Ve;
        return B ? /* @__PURE__ */ new Set([G(B)]) : /* @__PURE__ */ new Set();
      }
      return z;
    }
  }, [
    ie,
    Le,
    Ve,
    z,
    G
  ]), _e = F(
    (B) => {
      let Y;
      const re = (he) => {
        for (const fe of he) {
          if (G(fe) === B)
            return Y = fe, !0;
          const Te = ve.get(G(fe)) ?? oe(fe);
          if (Te && re(Te)) return !0;
        }
        return !1;
      };
      if (re(J), !Y) {
        for (const he of ve.values())
          if (re(he)) break;
      }
      return Y;
    },
    [J, ve, G, oe]
  ), se = F(() => {
    const B = /* @__PURE__ */ new Map(), Y = (re) => {
      for (const he of re) {
        const fe = G(he);
        B.set(fe, he);
        const Te = ve.get(fe) ?? oe(he);
        Te && Y(Te);
      }
    };
    return Y(J), B;
  }, [J, ve, G, oe]), me = F(
    (B) => {
      const Y = G(B);
      if (!B.disabled)
        if (ie === "multiple") {
          const he = new Set(ne);
          he.has(Y) ? he.delete(Y) : he.add(Y), et || q(he);
          const fe = y ?? _;
          if (fe) {
            const be = se(), Te = [];
            for (const T of he) {
              const L = be.get(T) ?? _e(T);
              L && Te.push(L);
            }
            fe({ item: B, selectedItems: Te });
          }
        } else if (!ne.has(Y) || ne.size !== 1 || !ne.has(Y)) {
          et || q(/* @__PURE__ */ new Set([Y]));
          const fe = y ?? _;
          fe && fe({ item: B, selectedItem: B });
        } else {
          const fe = y ?? _;
          fe && fe({ item: B, selectedItem: B });
        }
    },
    [
      G,
      ie,
      ne,
      et,
      y,
      _,
      se,
      _e
    ]
  ), Ne = F(
    async (B) => {
      const Y = G(B);
      if (!!B.disabled) return;
      const he = ke.has(Y), fe = f ?? m, be = $ ?? b, Te = oe(B), L = ve.get(Y) ?? Te, pe = !(L !== void 0 && L.length > 0) && R != null;
      if (he) {
        Be((Ie) => {
          const je = new Set(Ie);
          return je.delete(Y), je;
        }), be?.({ item: B });
        return;
      }
      if (pe) {
        if (ye.has(Y)) return;
        Ze((Ie) => {
          const je = new Set(Ie);
          return je.add(Y), je;
        });
        try {
          const je = await R(B);
          We((Me) => {
            const at = new Map(Me);
            return at.set(Y, je), at;
          }), Be((Me) => {
            const at = new Set(Me);
            return at.add(Y), at;
          }), fe?.({ item: B });
        } catch {
        } finally {
          Ze((Ie) => {
            const je = new Set(Ie);
            return je.delete(Y), je;
          });
        }
        return;
      }
      Be((Ie) => {
        const je = new Set(Ie);
        return je.add(Y), je;
      }), fe?.({ item: B });
    },
    [
      G,
      ke,
      oe,
      ve,
      R,
      ye,
      f,
      m,
      $,
      b
    ]
  ), qe = $e(() => {
    const B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), he = (fe, be) => {
      for (const Te of fe) {
        const T = G(Te);
        B.has(T) || B.set(T, []), Y.set(T, be), Te.disabled && re.add(T);
        const le = ve.get(T) ?? oe(Te);
        le && le.length > 0 && (B.set(
          T,
          le.map((pe) => G(pe))
        ), he(le, T));
      }
    };
    return he(J, null), { childrenOf: B, parentOf: Y, disabledKeys: re };
  }, [J, ve, G, oe]), Je = F(
    (B) => {
      const Y = [], re = [...qe.childrenOf.get(B) ?? []];
      for (; re.length > 0; ) {
        const he = re.pop();
        Y.push(he), re.push(...qe.childrenOf.get(he) ?? []);
      }
      return Y;
    },
    [qe]
  ), [dt, bt] = X(
    () => new Set(j ?? [])
  ), Q = P !== void 0 ? new Set(P) : dt, Se = F(
    (B) => {
      const Y = qe.disabledKeys;
      return Je(B).filter((re) => !Y.has(re));
    },
    [Je, qe]
  ), nt = F(
    (B) => {
      if (Q.has(B)) return !0;
      if (!C || !H) return !1;
      const Y = Se(B);
      return Y.length > 0 && Y.every((re) => Q.has(re));
    },
    [Q, C, H, Se]
  ), Wt = F(
    (B) => {
      if (!C || !H || Q.has(B))
        return !1;
      const Y = Se(B);
      if (Y.length === 0) return !1;
      const re = Y.filter((he) => Q.has(he)).length;
      return re > 0 && re < Y.length;
    },
    [Q, C, H, Se]
  ), Ot = F(
    (B) => {
      if (!C || B.disabled) return;
      const Y = G(B), re = new Set(Q);
      if (re.has(Y) || nt(Y)) {
        if (re.delete(Y), H)
          for (const he of Se(Y)) re.delete(he);
      } else if (re.add(Y), H)
        for (const he of Se(Y)) re.add(he);
      P === void 0 && bt(re), A?.([...re]);
    },
    [
      C,
      H,
      P,
      Q,
      Se,
      G,
      nt,
      A
    ]
  ), ze = $e(() => {
    const B = [], Y = (re, he, fe) => {
      re.forEach((be, Te) => {
        const T = G(be), L = ce(be), le = ve.get(T) ?? oe(be);
        let pe;
        ve.has(T) ? pe = ve.get(T).length > 0 : le !== void 0 ? pe = le.length > 0 : R ? pe = !0 : pe = !1;
        const Ie = ke.has(T), je = !!be.disabled, Me = re.length, at = Te + 1;
        if (B.push({
          item: be,
          key: T,
          text: L,
          level: he,
          posInSet: at,
          setSize: Me,
          hasChildren: pe,
          expanded: Ie,
          parentKey: fe,
          disabled: je
        }), pe && Ie) {
          const zt = ve.get(T) ?? le;
          zt && zt.length > 0 && Y(zt, he + 1, T);
        }
      });
    };
    return Y(J, 1, null), B;
  }, [
    J,
    G,
    ce,
    oe,
    ve,
    ke,
    R,
    ye
  ]), [Xe, vt] = X(
    () => ze[0]?.key ?? null
  ), Rt = ae(""), Jt = ae(null), K = ae(null);
  we(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && vt(B.key);
    } else if (Xe && !ze.some((B) => B.key === Xe)) {
      const B = ze[0];
      vt(B ? B.key : null);
    }
  }, [ze, Xe]), we(() => {
    if (Xe) {
      const B = K.current?.querySelector(
        `[data-key="${CSS.escape(Xe)}"]`
      );
      let Y = null;
      B || (Y = K.current?.querySelector(
        `[data-key="${Xe}"]`
      ) ?? null);
      const re = B ?? Y;
      re && document.activeElement !== re && K.current?.contains(document.activeElement) && re.focus();
    }
  }, [Xe]);
  const de = F((B) => {
    vt(B), requestAnimationFrame(() => {
      const Y = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
      let re = K.current?.querySelector(
        `[data-key="${Y}"]`
      );
      re || (re = K.current?.querySelector(`[data-key="${B}"]`) ?? null), re?.focus();
    });
  }, []), Pe = F(
    (B) => ze.find((re) => re.key === B)?.parentKey ?? null,
    [ze]
  ), He = F(
    (B) => {
      if (ze.length === 0) return;
      const Y = Xe ? ze.findIndex((fe) => fe.key === Xe) : -1, re = Y >= 0 ? ze[Y] : void 0;
      let he = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), Y === -1)
          he = ze[0]?.key ?? null;
        else {
          const fe = (Y + 1) % ze.length, be = ze[fe];
          be && (he = be.key);
        }
        he && de(he);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), Y === -1) {
          const fe = ze[ze.length - 1];
          fe && (he = fe.key);
        } else {
          const fe = (Y - 1 + ze.length) % ze.length, be = ze[fe];
          be && (he = be.key);
        }
        he && de(he);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && !re.expanded)
          Ne(re.item);
        else if (re.hasChildren && re.expanded) {
          const fe = Y + 1, be = ze[fe];
          be && be.parentKey === re.key && de(be.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && re.expanded)
          Ne(re.item);
        else {
          const fe = Pe(re.key);
          fe && de(fe);
        }
        return;
      }
      if (B.key === "Home") {
        B.preventDefault();
        const fe = ze[0];
        fe && de(fe.key);
        return;
      }
      if (B.key === "End") {
        B.preventDefault();
        const fe = ze[ze.length - 1];
        fe && de(fe.key);
        return;
      }
      if (B.key === "Enter" || B.key === " ") {
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !re)) return;
        if (B.key === " " && C) {
          const fe = _e(re.key);
          fe && Ot(fe);
          return;
        }
        me(re.item);
        return;
      }
      if (B.key.length === 1 && /^[a-zA-Z0-9]$/.test(B.key)) {
        B.preventDefault();
        const fe = (Rt.current + B.key).toLowerCase();
        Rt.current = fe, Jt.current && clearTimeout(Jt.current), Jt.current = setTimeout(() => {
          Rt.current = "";
        }, 500);
        const be = Y >= 0 ? Y + 1 : 0, L = [...ze, ...ze].slice(be, be + ze.length).find((le) => le.text.toLowerCase().startsWith(fe));
        L && de(L.key);
        return;
      }
    },
    [
      ze,
      Xe,
      de,
      Ne,
      me,
      Pe,
      C,
      Ot
    ]
  ), Lt = F(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && vt(B.key);
    }
  }, [Xe, ze]), St = (B, Y, re) => /* @__PURE__ */ n("ul", { role: "group", className: st.group, children: B.map((he, fe) => {
    const be = G(he), Te = ce(he), T = ve.get(be) ?? oe(he);
    let L;
    ve.has(be) ? L = ve.get(be).length > 0 : T !== void 0 ? L = T.length > 0 : R ? L = !0 : L = !1;
    const le = ke.has(be), pe = ne.has(be), Ie = !!he.disabled, je = ye.has(be), Me = Xe === be, at = B.length, zt = fe + 1, er = te ? te(he) : Te, _s = C ? {
      checked: nt(be),
      indeterminate: Wt(be)
    } : null;
    return /* @__PURE__ */ O("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ O(
        "div",
        {
          role: "treeitem",
          "data-key": be,
          tabIndex: Me ? 0 : -1,
          "aria-expanded": L ? le : void 0,
          "aria-selected": pe,
          "aria-level": Y,
          "aria-setsize": at,
          "aria-posinset": zt,
          "aria-disabled": Ie || void 0,
          "aria-busy": je || void 0,
          className: [
            st.treeitem,
            pe ? st.selected : null,
            Ie ? st.disabled : null,
            Me ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            de(be), Ie || me(he);
          },
          onFocus: () => vt(be),
          children: [
            C ? /* @__PURE__ */ n(
              e2,
              {
                className: st.checkbox,
                checked: _s?.checked ?? !1,
                indeterminate: _s?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${Te}`,
                onClick: (Rn) => Rn.stopPropagation(),
                onChange: () => Ot(he)
              }
            ) : null,
            L ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: st.caret,
                "aria-label": `${le ? "Collapse" : "Expand"} ${Te}`,
                "aria-expanded": le,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Rn) => {
                  Rn.stopPropagation(), de(be), Ne(he);
                },
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      le ? st.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ n(De, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ n(
              "span",
              {
                className: st.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ n("span", { className: st.label, children: er }),
            je ? /* @__PURE__ */ n("span", { className: st.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      L && le ? je ? /* @__PURE__ */ n("div", { className: st.loadingRow, "aria-busy": "true", children: "Loading…" }) : T && T.length > 0 ? St(T, Y + 1) : ve.has(be) && ve.get(be).length > 0 ? St(
        ve.get(be),
        Y + 1
      ) : (T && T.length === 0, null) : null
    ] }, be);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: K,
      role: "tree",
      "aria-label": U,
      "aria-multiselectable": ie === "multiple" || void 0,
      tabIndex: 0,
      className: [st.root, V].filter(Boolean).join(" "),
      onKeyDown: He,
      onFocus: Lt,
      children: J.length === 0 ? /* @__PURE__ */ n("div", { className: st.empty, children: "No items" }) : St(J, 1)
    }
  );
}
const t2 = "_root_nmtll_1", n2 = "_panel_nmtll_8", s2 = "_header_nmtll_19", r2 = "_listbox_nmtll_28", o2 = "_option_nmtll_42", a2 = "_disabled_nmtll_57", l2 = "_active_nmtll_66", i2 = "_selected_nmtll_70", c2 = "_empty_nmtll_86", d2 = "_controls_nmtll_93", u2 = "_reorder_nmtll_102", _2 = "_btn_nmtll_110", Re = {
  root: t2,
  panel: n2,
  header: s2,
  listbox: r2,
  option: o2,
  disabled: a2,
  active: l2,
  selected: i2,
  empty: c2,
  controls: d2,
  reorder: u2,
  btn: _2
};
function rt(e, t) {
  const s = e[t];
  return s != null ? String(s) : String(e.id ?? "");
}
function Wn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Kv({
  source: e,
  Source: t,
  target: s,
  Target: o,
  value: i,
  Value: c,
  targetValue: p,
  TargetValue: r,
  data: a,
  Data: l,
  onSourceChange: u,
  SourceChange: d,
  onTargetChange: k,
  TargetChange: x,
  keyProperty: N,
  KeyProperty: w,
  onMove: y,
  Move: _,
  ariaLabel: f,
  AriaLabel: m,
  className: $
}) {
  const b = N ?? w ?? "id", E = f ?? m ?? "PickList", h = e ?? t ?? i ?? c ?? a ?? l ?? [], v = s ?? o ?? p ?? r ?? [], [M, I] = X(() => [
    ...h
  ]), [D, S] = X(() => [
    ...v
  ]);
  we(() => {
    const z = e ?? t ?? i ?? c ?? a ?? l;
    z !== void 0 && I([...z]);
  }, [e, t, i, c, a, l]), we(() => {
    const z = s ?? o ?? p ?? r;
    z !== void 0 && S([...z]);
  }, [s, o, p, r]);
  const [g, C] = X(
    () => /* @__PURE__ */ new Set()
  ), [P, j] = X(
    () => /* @__PURE__ */ new Set()
  ), [A, H] = X(() => {
    const z = h.findIndex((q) => !q.disabled);
    return z >= 0 ? z : 0;
  }), [V, J] = X(() => {
    const z = v.findIndex((q) => !q.disabled);
    return z >= 0 ? z : 0;
  }), Z = $e(
    () => M.map((z, q) => z.disabled ? -1 : q).filter((z) => z >= 0),
    [M]
  ), ee = $e(
    () => D.map((z, q) => z.disabled ? -1 : q).filter((z) => z >= 0),
    [D]
  );
  we(() => {
    if (A >= M.length) {
      const z = Z[Z.length - 1];
      H(z ?? 0);
    } else if (M.length > 0 && Z.length > 0 && !Z.includes(A)) {
      const z = Z[0];
      z !== void 0 && H(z);
    }
  }, [A, M.length, Z]), we(() => {
    if (V >= D.length) {
      const z = ee[ee.length - 1];
      J(z ?? 0);
    } else if (D.length > 0 && ee.length > 0 && !ee.includes(V)) {
      const z = ee[0];
      z !== void 0 && J(z);
    }
  }, [V, D.length, ee]), we(() => {
    C((z) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of z)
        M.some(
          (se) => rt(se, b) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [M, b]), we(() => {
    j((z) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of z)
        D.some(
          (se) => rt(se, b) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [D, b]);
  const ue = F(
    (z) => {
      (u ?? d)?.(z);
    },
    [u, d]
  ), ie = F(
    (z) => {
      (k ?? x)?.(z);
    },
    [k, x]
  ), U = F(
    (z) => {
      (y ?? _)?.(z);
    },
    [y, _]
  ), R = F(
    (z) => {
      const q = M[z];
      if (!q || q.disabled) return;
      const ne = rt(q, b);
      C((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), H(z);
    },
    [M, b]
  ), te = F(
    (z) => {
      const q = D[z];
      if (!q || q.disabled) return;
      const ne = rt(q, b);
      j((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), J(z);
    },
    [D, b]
  ), G = F(() => {
    const z = [], q = [];
    for (const me of M) {
      const Ne = rt(me, b);
      g.has(Ne) && !me.disabled ? z.push(me) : q.push(me);
    }
    if (z.length === 0) return;
    const ne = q, _e = [...D, ...z];
    I(ne), S(_e), C(/* @__PURE__ */ new Set());
    const se = new Set(z.map((me) => rt(me, b)));
    j(se), ue(ne), ie(_e), U({
      source: ne,
      target: _e,
      moved: z,
      direction: "toTarget"
    });
  }, [
    M,
    D,
    g,
    b,
    ue,
    ie,
    U
  ]), ce = F(() => {
    const z = [], q = [];
    for (const me of D) {
      const Ne = rt(me, b);
      P.has(Ne) && !me.disabled ? z.push(me) : q.push(me);
    }
    if (z.length === 0) return;
    const ne = q, _e = [...M, ...z];
    S(ne), I(_e), j(/* @__PURE__ */ new Set());
    const se = new Set(z.map((me) => rt(me, b)));
    C(se), ue(_e), ie(ne), U({
      source: _e,
      target: ne,
      moved: z,
      direction: "toSource"
    });
  }, [
    M,
    D,
    P,
    b,
    ue,
    ie,
    U
  ]), oe = F(() => {
    const z = M.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const q = M.filter((_e) => !!_e.disabled), ne = [...D, ...z];
    I(q), S(ne), C(/* @__PURE__ */ new Set()), ue(q), ie(ne), U({
      source: q,
      target: ne,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    M,
    D,
    b,
    ue,
    ie,
    U
  ]), xe = F(() => {
    const z = D.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const q = D.filter((_e) => !!_e.disabled), ne = [...M, ...z];
    S(q), I(ne), j(/* @__PURE__ */ new Set()), ue(ne), ie(q), U({
      source: ne,
      target: q,
      moved: z,
      direction: "allToSource"
    });
  }, [M, D, ue, ie, U]), ke = F(() => {
    if (P.size === 0) return;
    const z = [...D], q = P, ne = [];
    for (let se = 1; se < z.length; se++) {
      const me = z[se], Ne = z[se - 1];
      if (!me || !Ne) continue;
      const qe = rt(me, b), Je = rt(Ne, b);
      q.has(qe) && !q.has(Je) && !me.disabled && !Ne.disabled && (z[se - 1] = me, z[se] = Ne, ne.push(me));
    }
    if (ne.length === 0) return;
    S(z), ie(z), U({ source: M, target: z, moved: ne, direction: "up" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = z.findIndex(
        (me) => rt(me, b) === _e
      );
      se >= 0 && J(se);
    }
  }, [
    D,
    P,
    b,
    M,
    ie,
    U
  ]), Be = F(() => {
    if (P.size === 0) return;
    const z = [...D], q = P, ne = [];
    for (let se = z.length - 2; se >= 0; se--) {
      const me = z[se], Ne = z[se + 1];
      if (!me || !Ne) continue;
      const qe = rt(me, b), Je = rt(Ne, b);
      q.has(qe) && !q.has(Je) && !me.disabled && !Ne.disabled && (z[se] = Ne, z[se + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    S(z), ie(z), U({ source: M, target: z, moved: ne, direction: "down" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = z.findIndex(
        (me) => rt(me, b) === _e
      );
      se >= 0 && J(se);
    }
  }, [
    D,
    P,
    b,
    M,
    ie,
    U
  ]), ve = g.size > 0, We = P.size > 0, ye = ae(""), Ze = ae(
    null
  ), Ve = ae(""), Le = ae(
    null
  ), tt = F(
    (z) => {
      if (M.length === 0) return;
      const q = Z;
      if (q.length === 0) return;
      const ne = q.includes(A) ? A : q[0] ?? 0;
      let _e = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se + 1) % q.length] ?? q[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se - 1 + q.length) % q.length] ?? q[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), _e = q[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), _e = q[q.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), R(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const se = (ye.current + z.key).toLowerCase();
        ye.current = se, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const me = [...q, ...q], Ne = q.indexOf(ne) + 1, qe = me.slice(Ne).find(
          (Je) => Wn(M[Je]).toLowerCase().startsWith(se)
        );
        qe != null && H(qe);
        return;
      }
      _e >= 0 && H(_e);
    },
    [M, Z, A, R]
  ), Qe = F(
    (z) => {
      if (D.length === 0) return;
      const q = ee;
      if (q.length === 0) return;
      const ne = q.includes(V) ? V : q[0] ?? 0;
      let _e = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se + 1) % q.length] ?? q[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se - 1 + q.length) % q.length] ?? q[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), _e = q[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), _e = q[q.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), te(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const se = (Ve.current + z.key).toLowerCase();
        Ve.current = se, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...q, ...q], Ne = q.indexOf(ne) + 1, qe = me.slice(Ne).find(
          (Je) => Wn(D[Je]).toLowerCase().startsWith(se)
        );
        qe != null && J(qe);
        return;
      }
      _e >= 0 && J(_e);
    },
    [D, ee, V, te]
  ), et = ae(null), W = ae(null);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Re.root, $].filter(Boolean).join(" "),
      "aria-label": E,
      children: [
        /* @__PURE__ */ O("div", { className: Re.panel, children: [
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
              children: M.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : M.map((z, q) => {
                const ne = rt(z, b), _e = g.has(ne), se = q === A, me = !!z.disabled;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Re.option,
                      _e ? Re.selected : null,
                      se ? Re.active : null,
                      me ? Re.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => R(q),
                    children: Wn(z)
                  },
                  ne
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ O("div", { className: Re.controls, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Re.btn,
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
              className: Re.btn,
              "aria-label": "Move all to target",
              "aria-disabled": M.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: M.filter((z) => !z.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Re.btn,
              "aria-label": "Move all",
              "aria-disabled": M.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: M.filter((z) => !z.disabled).length === 0,
              onClick: oe,
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
              "aria-disabled": D.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: D.filter((z) => !z.disabled).length === 0,
              onClick: xe,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ O("div", { className: Re.panel, children: [
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
              children: D.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : D.map((z, q) => {
                const ne = rt(z, b), _e = P.has(ne), se = q === V, me = !!z.disabled;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Re.option,
                      _e ? Re.selected : null,
                      se ? Re.active : null,
                      me ? Re.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => te(q),
                    children: Wn(z)
                  },
                  ne
                );
              })
            }
          ),
          /* @__PURE__ */ O("div", { className: Re.reorder, children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Re.btn,
                "aria-label": "Move up",
                "aria-disabled": !We || void 0,
                disabled: !We,
                onClick: ke,
                children: /* @__PURE__ */ n(De, { name: "chevron-up", size: "sm" })
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
                children: /* @__PURE__ */ n(De, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const f2 = "_root_928ty_1", h2 = "_header_928ty_8", p2 = "_title_928ty_15", m2 = "_navBtn_928ty_20", g2 = "_resources_928ty_39", y2 = "_resource_928ty_39", x2 = "_grid_928ty_50", b2 = "_timeCol_928ty_55", v2 = "_timeCell_928ty_61", k2 = "_dayCol_928ty_66", w2 = "_dayHeader_928ty_73", $2 = "_slot_928ty_81", N2 = "_event_928ty_91", ft = {
  root: f2,
  header: h2,
  title: p2,
  navBtn: m2,
  resources: g2,
  resource: y2,
  grid: x2,
  timeCol: b2,
  timeCell: v2,
  dayCol: k2,
  dayHeader: w2,
  slot: $2,
  event: N2
};
function Ls(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Uv({
  data: e,
  view: t = "week",
  date: s,
  onDateChange: o,
  resources: i,
  onEventClick: c,
  onSlotClick: p,
  ariaLabel: r = "Scheduler",
  className: a
}) {
  const [l, u] = X(
    s ?? /* @__PURE__ */ new Date()
  ), d = s ?? l, k = (w) => {
    s || u(w), o?.(w);
  }, x = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (w, y) => {
    const _ = new Date(d);
    return _.setDate(d.getDate() - d.getDay() + y), _;
  }) : Array.from({ length: 30 }, (w, y) => {
    const _ = new Date(d);
    return _.setDate(1 + y), _;
  }), N = Array.from({ length: 12 }, (w, y) => 8 + y);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [ft.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ O("div", { className: ft.header, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const w = new Date(d);
                w.setDate(w.getDate() - 7), k(w);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ n("span", { className: ft.title, children: d.toLocaleDateString() }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const w = new Date(d);
                w.setDate(w.getDate() + 7), k(w);
              },
              children: "›"
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: ft.resources, children: i.map((w) => /* @__PURE__ */ n(
          "div",
          {
            className: ft.resource,
            role: "presentation",
            "aria-label": w.name,
            children: w.name
          },
          w.id
        )) }),
        /* @__PURE__ */ O("div", { className: ft.grid, role: "presentation", children: [
          /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: N.map((w) => /* @__PURE__ */ O("div", { className: ft.timeCell, children: [
            w,
            ":00"
          ] }, w)) }),
          x.map((w) => /* @__PURE__ */ O(
            "div",
            {
              className: ft.dayCol,
              role: "presentation",
              title: w.toLocaleDateString(),
              onClick: () => p?.({ date: w }),
              tabIndex: 0,
              "aria-label": w.toLocaleDateString(),
              children: [
                /* @__PURE__ */ n("div", { className: ft.dayHeader, children: w.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                N.map((y) => /* @__PURE__ */ n(
                  "div",
                  {
                    className: ft.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(w);
                      _.setHours(y), p?.({ date: _ });
                    }
                  },
                  y
                )),
                e.filter((y) => y.start.toDateString() === w.toDateString()).map((y) => /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: ft.event,
                    "aria-label": `${y.title} ${Ls(y.start)} - ${Ls(y.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: y }),
                    children: y.title
                  },
                  y.id
                ))
              ]
            },
            w.toISOString()
          ))
        ] })
      ]
    }
  );
}
const O2 = "_root_1n0oq_1", S2 = "_header_1n0oq_8", z2 = "_headerCell_1n0oq_15", D2 = "_timeline_1n0oq_21", M2 = "_row_1n0oq_26", C2 = "_taskName_1n0oq_32", E2 = "_timelineCell_1n0oq_37", I2 = "_bar_1n0oq_43", j2 = "_progress_1n0oq_56", A2 = "_dep_1n0oq_61", Tt = {
  root: O2,
  header: S2,
  headerCell: z2,
  timeline: D2,
  row: M2,
  taskName: C2,
  timelineCell: E2,
  bar: I2,
  progress: j2,
  dep: A2
};
function Wv({
  tasks: e,
  view: t = "week",
  onTaskClick: s,
  ariaLabel: o = "Gantt",
  className: i
}) {
  const [c, p] = X(null);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Tt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": o,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ O("div", { className: Tt.header, role: "row", children: [
          /* @__PURE__ */ n("div", { className: Tt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ O("div", { className: Tt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ O(
          "div",
          {
            className: Tt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ n("div", { className: Tt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ O("div", { className: Tt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: Tt.bar,
                    role: "button",
                    "aria-label": `${r.name} ${r.start.toLocaleDateString()} - ${r.end.toLocaleDateString()}${r.progress !== void 0 ? `, ${r.progress}% complete` : ""}`,
                    "aria-pressed": c === r.id,
                    tabIndex: 0,
                    onClick: () => {
                      p(r.id), s?.({ task: r });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), p(r.id), s?.({ task: r }));
                    },
                    children: /* @__PURE__ */ n(
                      "div",
                      {
                        className: Tt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((a) => /* @__PURE__ */ n("svg", { className: Tt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, a))
              ] })
            ]
          },
          r.id
        ))
      ]
    }
  );
}
const T2 = "_root_1p46p_1", R2 = "_fields_1p46p_6", L2 = "_chip_1p46p_13", P2 = "_table_1p46p_35", B2 = "_totalRow_1p46p_55", q2 = "_total_1p46p_55", mn = {
  root: T2,
  fields: R2,
  chip: L2,
  table: P2,
  totalRow: B2,
  total: q2
}, Vn = {
  Sum: (e) => e.reduce((t, s) => t + s, 0),
  Average: (e) => e.length ? e.reduce((t, s) => t + s, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function En(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Vv({
  data: e,
  rowFields: t = [],
  columnFields: s = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: p
}) {
  const r = t, a = s, l = o, u = (y, _, f) => {
    const m = y === "row" ? r.filter((E) => E.property !== _) : r, $ = y === "col" ? a.filter((E) => E.property !== _) : a, b = y === "agg" ? l.filter((E) => !(E.property === _ && E.aggregate === f)) : l;
    i?.({
      rowFields: m,
      columnFields: $,
      aggregateFields: b
    });
  }, d = (y, _) => _.map((f) => String(y[f.property])).join(""), k = [
    ...new Set(r.length ? e.map((y) => d(y, r)) : [""])
  ].sort(), x = [
    ...new Set(a.length ? e.map((y) => d(y, a)) : [""])
  ].sort(), N = (y, _, f) => {
    const m = e.filter(
      (b) => d(b, r) === y && d(b, a) === _
    ), $ = m.map((b) => Number(b[f.property])).filter((b) => !Number.isNaN(b));
    return !$.length && f.aggregate !== "Count" ? 0 : Vn[f.aggregate](
      f.aggregate === "Count" ? m.map(() => 1) : $
    );
  }, w = (y, _, f, m) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: mn.chip,
      "aria-label": `Remove ${y} field ${f}`,
      onClick: () => u(y, _, m),
      children: [
        f,
        m ? ` (${m})` : ""
      ]
    },
    `${y}-${f}-${m ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [mn.root, p].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: mn.fields, children: [
      r.map((y) => w("row", y.property, y.title ?? y.property)),
      a.map((y) => w("col", y.property, y.title ?? y.property)),
      l.map(
        (y) => w("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ O("table", { className: mn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: r.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        x.map((y) => /* @__PURE__ */ n("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ O("tbody", { children: [
        k.map((y) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: y || "—" }),
          x.map((_) => /* @__PURE__ */ n(
            "td",
            {
              title: En(
                N(
                  y,
                  _,
                  l[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: l.length ? En(N(y, _, l[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ n("td", { className: mn.total, children: l.length ? En(
            Vn[l[0].aggregate](
              x.flatMap(
                (_) => e.filter(
                  (f) => d(f, r) === y && d(f, a) === _
                ).map((f) => Number(f[l[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ O("tr", { className: mn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          x.map((y) => /* @__PURE__ */ n("td", { children: l.length ? En(
            Vn[l[0].aggregate](
              e.filter((_) => d(_, a) === y).map((_) => Number(_[l[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, y)),
          /* @__PURE__ */ n("td", { children: l.length ? En(
            Vn[l[0].aggregate](
              e.map((y) => Number(y[l[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const F2 = "_root_13gvl_1", H2 = "_reverse_13gvl_10", K2 = "_item_13gvl_14", U2 = "_marker_13gvl_35", W2 = "_body_13gvl_46", V2 = "_label_13gvl_50", X2 = "_content_13gvl_56", on = {
  root: F2,
  reverse: H2,
  item: K2,
  marker: U2,
  body: W2,
  label: V2,
  content: X2
};
function Xv({
  items: e,
  reverse: t = !1,
  ariaLabel: s = "Timeline",
  className: o
}) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [on.root, t ? on.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": s,
      children: i.map((c, p) => /* @__PURE__ */ O("li", { className: on.item, children: [
        /* @__PURE__ */ n("span", { className: on.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ O("div", { className: on.body, children: [
          /* @__PURE__ */ n("div", { className: on.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: on.content, children: c.content })
        ] })
      ] }, p))
    }
  );
}
const G2 = "_root_4ls7q_1", Y2 = "_header_4ls7q_13", Z2 = "_headCell_4ls7q_22", J2 = "_row_4ls7q_32", Q2 = "_cell_4ls7q_37", In = {
  root: G2,
  header: Y2,
  headCell: Z2,
  row: J2,
  cell: Q2
};
function Gv({
  count: e,
  rowHeight: t = 40,
  height: s = 320,
  loadData: o,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: p
}) {
  const [r, a] = X(
    /* @__PURE__ */ new Map()
  ), [l, u] = X(0), d = ae(/* @__PURE__ */ new Set()), k = Math.ceil(s / t), x = Math.max(0, Math.floor(l / t) - 3), N = Math.min(e, x + k + 6), w = F(
    (_, f) => {
      let m = !1;
      for (let $ = _; $ < f; $++)
        !r.has($) && !d.current.has($) && (m = !0);
      if (m) {
        for (let $ = _; $ < f; $++) d.current.add($);
        o({ skip: _, top: f }).then(($) => {
          a((b) => {
            const E = new Map(b);
            return $.forEach((h, v) => E.set(_ + v, h)), E;
          });
          for (let b = _; b < f; b++) d.current.delete(b);
        });
      }
    },
    [r, o]
  );
  we(() => {
    w(x, N);
  }, [x, N]);
  const y = [];
  for (let _ = x; _ < N; _++) {
    const f = r.get(_) ?? {};
    y.push(
      /* @__PURE__ */ n(
        "div",
        {
          className: In.row,
          role: "row",
          style: { height: t },
          children: i.map((m) => /* @__PURE__ */ n(
            "div",
            {
              role: "gridcell",
              className: In.cell,
              style: m.width ? { width: m.width } : void 0,
              children: String(f[m.property] ?? "")
            },
            m.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [In.root, p].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: s },
      onScroll: (_) => u(_.target.scrollTop),
      onKeyDown: (_) => {
        const f = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), f.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), f.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), f.scrollTop += s) : _.key === "PageUp" && (_.preventDefault(), f.scrollTop -= s);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: x * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: In.header, role: "row", children: i.map((_) => /* @__PURE__ */ n(
          "div",
          {
            role: "columnheader",
            className: In.headCell,
            style: {
              height: t,
              ..._.width ? { width: _.width } : {}
            },
            children: _.title ?? _.property
          },
          _.property
        )) }),
        y,
        /* @__PURE__ */ n(
          "div",
          {
            style: { height: Math.max(0, (e - N) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var Ct;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(r, a, l, u) {
      if (this.version = r, this.errorCorrectionLevel = a, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let d = [];
      for (let x = 0; x < this.size; x++) d.push(!1);
      for (let x = 0; x < this.size; x++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(l);
      if (this.drawCodewords(k), u == -1) {
        let x = 1e9;
        for (let N = 0; N < 8; N++) {
          this.applyMask(N), this.drawFormatBits(N);
          const w = this.getPenaltyScore();
          w < x && (u = N, x = w), this.applyMask(N);
        }
      }
      i(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(r, a) {
      const l = e.QrSegment.makeSegments(r);
      return t.encodeSegments(l, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(r, a) {
      const l = e.QrSegment.makeBytes(r);
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
    static encodeSegments(r, a, l = 1, u = 40, d = -1, k = !0) {
      if (!(t.MIN_VERSION <= l && l <= u && u <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let x, N;
      for (x = l; ; x++) {
        const f = t.getNumDataCodewords(x, a) * 8, m = c.getTotalBits(r, x);
        if (m <= f) {
          N = m;
          break;
        }
        if (x >= u)
          throw new RangeError("Data too long");
      }
      for (const f of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && N <= t.getNumDataCodewords(x, f) * 8 && (a = f);
      let w = [];
      for (const f of r) {
        s(f.mode.modeBits, 4, w), s(f.numChars, f.mode.numCharCountBits(x), w);
        for (const m of f.getData()) w.push(m);
      }
      i(w.length == N);
      const y = t.getNumDataCodewords(x, a) * 8;
      i(w.length <= y), s(0, Math.min(4, y - w.length), w), s(0, (8 - w.length % 8) % 8, w), i(w.length % 8 == 0);
      for (let f = 236; w.length < y; f ^= 253)
        s(f, 8, w);
      let _ = [];
      for (; _.length * 8 < w.length; ) _.push(0);
      return w.forEach(
        (f, m) => _[m >>> 3] |= f << 7 - (m & 7)
      ), new t(x, a, _, d);
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
    getModule(r, a) {
      return 0 <= r && r < this.size && 0 <= a && a < this.size && this.modules[a][r];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let l = 0; l < this.size; l++)
        this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), a = r.length;
      for (let l = 0; l < a; l++)
        for (let u = 0; u < a; u++)
          l == 0 && u == 0 || l == 0 && u == a - 1 || l == a - 1 && u == 0 || this.drawAlignmentPattern(r[l], r[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const a = this.errorCorrectionLevel.formatBits << 3 | r;
      let l = a;
      for (let d = 0; d < 10; d++) l = l << 1 ^ (l >>> 9) * 1335;
      const u = (a << 10 | l) ^ 21522;
      i(u >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, o(u, d));
      this.setFunctionModule(8, 7, o(u, 6)), this.setFunctionModule(8, 8, o(u, 7)), this.setFunctionModule(7, 8, o(u, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, o(u, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, o(u, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, o(u, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let r = this.version;
      for (let l = 0; l < 12; l++) r = r << 1 ^ (r >>> 11) * 7973;
      const a = this.version << 12 | r;
      i(a >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const u = o(a, l), d = this.size - 11 + l % 3, k = Math.floor(l / 3);
        this.setFunctionModule(d, k, u), this.setFunctionModule(k, d, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, a) {
      for (let l = -4; l <= 4; l++)
        for (let u = -4; u <= 4; u++) {
          const d = Math.max(Math.abs(u), Math.abs(l)), k = r + u, x = a + l;
          0 <= k && k < this.size && 0 <= x && x < this.size && this.setFunctionModule(k, x, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, a) {
      for (let l = -2; l <= 2; l++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            r + u,
            a + l,
            Math.max(Math.abs(u), Math.abs(l)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(r, a, l) {
      this.modules[a][r] = l, this.isFunction[a][r] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(r) {
      const a = this.version, l = this.errorCorrectionLevel;
      if (r.length != t.getNumDataCodewords(a, l))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][a], k = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), x = u - k % u, N = Math.floor(k / u);
      let w = [];
      const y = t.reedSolomonComputeDivisor(d);
      for (let f = 0, m = 0; f < u; f++) {
        let $ = r.slice(
          m,
          m + N - d + (f < x ? 0 : 1)
        );
        m += $.length;
        const b = t.reedSolomonComputeRemainder($, y);
        f < x && $.push(0), w.push($.concat(b));
      }
      let _ = [];
      for (let f = 0; f < w[0].length; f++)
        w.forEach((m, $) => {
          (f != N - d || $ >= x) && _.push(m[f]);
        });
      return i(_.length == k), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let u = 0; u < this.size; u++)
          for (let d = 0; d < 2; d++) {
            const k = l - d, N = (l + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[N][k] && a < r.length * 8 && (this.modules[N][k] = o(r[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      i(a == r.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(r) {
      if (r < 0 || r > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let l = 0; l < this.size; l++) {
          let u;
          switch (r) {
            case 0:
              u = (l + a) % 2 == 0;
              break;
            case 1:
              u = a % 2 == 0;
              break;
            case 2:
              u = l % 3 == 0;
              break;
            case 3:
              u = (l + a) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(l / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              u = l * a % 2 + l * a % 3 == 0;
              break;
            case 6:
              u = (l * a % 2 + l * a % 3) % 2 == 0;
              break;
            case 7:
              u = ((l + a) % 2 + l * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][l] && u && (this.modules[a][l] = !this.modules[a][l]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let d = 0; d < this.size; d++) {
        let k = !1, x = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[d][w] == k ? (x++, x == 5 ? r += t.PENALTY_N1 : x > 5 && r++) : (this.finderPenaltyAddHistory(x, N), k || (r += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), k = this.modules[d][w], x = 1);
        r += this.finderPenaltyTerminateAndCount(k, x, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let k = !1, x = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[w][d] == k ? (x++, x == 5 ? r += t.PENALTY_N1 : x > 5 && r++) : (this.finderPenaltyAddHistory(x, N), k || (r += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), k = this.modules[w][d], x = 1);
        r += this.finderPenaltyTerminateAndCount(k, x, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let k = 0; k < this.size - 1; k++) {
          const x = this.modules[d][k];
          x == this.modules[d][k + 1] && x == this.modules[d + 1][k] && x == this.modules[d + 1][k + 1] && (r += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce((k, x) => k + (x ? 1 : 0), a);
      const l = this.size * this.size, u = Math.ceil(Math.abs(a * 20 - l * 10) / l) - 1;
      return i(0 <= u && u <= 9), r += u * t.PENALTY_N4, i(0 <= r && r <= 2568888), r;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const r = Math.floor(this.version / 7) + 2, a = Math.floor(
          (this.version * 8 + r * 3 + 5) / (r * 4 - 4)
        ) * 2;
        let l = [6];
        for (let u = this.size - 7; l.length < r; u -= a)
          l.splice(1, 0, u);
        return l;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(r) {
      if (r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * r + 128) * r + 64;
      if (r >= 2) {
        const l = Math.floor(r / 7) + 2;
        a -= (25 * l - 10) * l - 55, r >= 7 && (a -= 36);
      }
      return i(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(r, a) {
      return Math.floor(t.getNumRawDataModules(r) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][r] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][r];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(r) {
      if (r < 1 || r > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let u = 0; u < r - 1; u++) a.push(0);
      a.push(1);
      let l = 1;
      for (let u = 0; u < r; u++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], l), d + 1 < a.length && (a[d] ^= a[d + 1]);
        l = t.reedSolomonMultiply(l, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, a) {
      let l = a.map((u) => 0);
      for (const u of r) {
        const d = u ^ l.shift();
        l.push(0), a.forEach(
          (k, x) => l[x] ^= t.reedSolomonMultiply(k, d)
        );
      }
      return l;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(r, a) {
      if (r >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let l = 0;
      for (let u = 7; u >= 0; u--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (a >>> u & 1) * r;
      return i(l >>> 8 == 0), l;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(r) {
      const a = r[1];
      i(a <= this.size * 3);
      const l = a > 0 && r[2] == a && r[3] == a * 3 && r[4] == a && r[5] == a;
      return (l && r[0] >= a * 4 && r[6] >= a ? 1 : 0) + (l && r[6] >= a * 4 && r[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(r, a, l) {
      return r && (this.finderPenaltyAddHistory(a, l), a = 0), a += this.size, this.finderPenaltyAddHistory(a, l), this.finderPenaltyCountPatterns(l);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(r, a) {
      a[0] == 0 && (r += this.size), a.pop(), a.unshift(r);
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
  function s(p, r, a) {
    if (r < 0 || r > 31 || p >>> r)
      throw new RangeError("Value out of range");
    for (let l = r - 1; l >= 0; l--)
      a.push(p >>> l & 1);
  }
  function o(p, r) {
    return (p >>> r & 1) != 0;
  }
  function i(p) {
    if (!p) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(r, a, l) {
      if (this.mode = r, this.numChars = a, this.bitData = l, a < 0) throw new RangeError("Invalid argument");
      this.bitData = l.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(r) {
      let a = [];
      for (const l of r) s(l, 8, a);
      return new c(c.Mode.BYTE, r.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!c.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let l = 0; l < r.length; ) {
        const u = Math.min(r.length - l, 3);
        s(parseInt(r.substring(l, l + u), 10), u * 3 + 1, a), l += u;
      }
      return new c(c.Mode.NUMERIC, r.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(r) {
      if (!c.isAlphanumeric(r))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], l;
      for (l = 0; l + 2 <= r.length; l += 2) {
        let u = c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l)) * 45;
        u += c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l + 1)), s(u, 11, a);
      }
      return l < r.length && s(
        c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l)),
        6,
        a
      ), new c(c.Mode.ALPHANUMERIC, r.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(r) {
      return r == "" ? [] : c.isNumeric(r) ? [c.makeNumeric(r)] : c.isAlphanumeric(r) ? [c.makeAlphanumeric(r)] : [c.makeBytes(c.toUtf8ByteArray(r))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(r) {
      let a = [];
      if (r < 0)
        throw new RangeError("ECI assignment value out of range");
      if (r < 128) s(r, 8, a);
      else if (r < 16384)
        s(2, 2, a), s(r, 14, a);
      else if (r < 1e6)
        s(6, 3, a), s(r, 21, a);
      else throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(r) {
      return c.NUMERIC_REGEX.test(r);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(r) {
      return c.ALPHANUMERIC_REGEX.test(r);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(r, a) {
      let l = 0;
      for (const u of r) {
        const d = u.mode.numCharCountBits(a);
        if (u.numChars >= 1 << d) return 1 / 0;
        l += 4 + d + u.bitData.length;
      }
      return l;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let a = [];
      for (let l = 0; l < r.length; l++)
        r.charAt(l) != "%" ? a.push(r.charCodeAt(l)) : (a.push(parseInt(r.substring(l + 1, l + 3), 16)), l += 2);
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
})(Ct || (Ct = {}));
((e) => {
  ((t) => {
    class s {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.ordinal = i, this.formatBits = c;
      }
      ordinal;
      formatBits;
      /*-- Constants --*/
      static LOW = new s(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new s(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new s(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new s(3, 2);
    }
    t.Ecc = s;
  })(e.QrCode || (e.QrCode = {}));
})(Ct || (Ct = {}));
((e) => {
  ((t) => {
    class s {
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.modeBits = i, this.numBitsCharCount = c;
      }
      modeBits;
      numBitsCharCount;
      /*-- Constants --*/
      static NUMERIC = new s(1, [10, 12, 14]);
      static ALPHANUMERIC = new s(2, [9, 11, 13]);
      static BYTE = new s(4, [8, 16, 16]);
      static KANJI = new s(8, [8, 10, 12]);
      static ECI = new s(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    }
    t.Mode = s;
  })(e.QrSegment || (e.QrSegment = {}));
})(Ct || (Ct = {}));
const eb = "_root_1leml_1", tb = {
  root: eb
}, nb = {
  low: Ct.QrCode.Ecc.LOW,
  medium: Ct.QrCode.Ecc.MEDIUM,
  quartile: Ct.QrCode.Ecc.QUARTILE,
  high: Ct.QrCode.Ecc.HIGH
};
function Yv({
  value: e,
  size: t = 128,
  render: s = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: p,
  onError: r
}) {
  const a = c ?? `QR code for ${e}`, l = ae(null), u = Zs("(prefers-color-scheme: dark)"), [d, k] = X(null);
  we(() => {
    const $ = document.documentElement;
    k($.dataset.theme ?? null);
    const b = new MutationObserver(() => {
      k($.dataset.theme ?? null);
    });
    return b.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => b.disconnect();
  }, []);
  const x = $e(() => {
    try {
      return Ct.QrCode.encodeText(e, nb[o]);
    } catch {
      return null;
    }
  }, [e, o]), N = ae(null);
  we(() => {
    if (x !== null) {
      N.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (N.current?.value !== e || N.current?.onError !== r) && (N.current = { value: e, onError: r }, r?.($));
  }, [x, e, r]);
  const w = Math.max(0, Math.floor(i)), y = [tb.root, p].filter(Boolean).join(" ");
  if (we(() => {
    if (s !== "canvas" || x === null) return;
    const $ = l.current, b = $?.getContext("2d");
    if (!$ || !b) return;
    const E = getComputedStyle($), h = E.getPropertyValue("--dx-text-color").trim() || "#000", v = E.getPropertyValue("--dx-surface-color").trim() || "#fff";
    sb(b, x, t, w, h, v);
  }, [s, x, t, w, u, d]), x === null)
    return /* @__PURE__ */ n("div", { className: y, role: "img", "aria-label": a, "data-qr-error": "true" });
  const _ = x.size + w * 2, f = t / _;
  if (s === "canvas")
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
  for (let $ = 0; $ < x.size; $++)
    for (let b = 0; b < x.size; b++)
      x.getModule(b, $) && m.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (b + w) * f,
            y: ($ + w) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${b}-${$}`
        )
      );
  return /* @__PURE__ */ O(
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
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: m })
      ]
    }
  );
}
function sb(e, t, s, o, i, c) {
  const p = s / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, s, s), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, r) && e.fillRect((a + o) * p, (r + o) * p, p + 0.5, p + 0.5);
}
const rb = "_root_1v9la_1", ob = "_value_1v9la_9", Ps = {
  root: rb,
  value: ob
}, Bs = [
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
], qs = 104, ab = 106;
function lb(e) {
  const t = [qs];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let s = qs;
  for (let o = 1; o < t.length; o++) s += o * t[o];
  return t.push(s % 103, ab), t;
}
function Zv({
  value: e,
  format: t = "Code128",
  height: s = 60,
  showValue: o = !1,
  ariaLabel: i,
  className: c
}) {
  const p = i ?? `Barcode ${e}`, r = $e(() => {
    const a = [];
    let l = 0;
    for (const u of lb(e)) {
      const d = Bs[u] ?? Bs[0];
      for (let k = 0; k < d.length; k++) {
        const x = Number(d[k]);
        k % 2 === 0 && a.push({ x: l, w: x }), l += x;
      }
    }
    return { modules: a, total: l };
  }, [e]);
  return /* @__PURE__ */ O("span", { className: [Ps.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "svg",
      {
        width: "100%",
        height: s,
        viewBox: `0 0 ${r.total} ${s}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": p,
        "data-value": e,
        children: [
          /* @__PURE__ */ n(
            "rect",
            {
              width: r.total,
              height: s,
              fill: "var(--dx-surface-color)"
            }
          ),
          r.modules.map((a, l) => /* @__PURE__ */ n(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: s,
              fill: "var(--dx-text-color)"
            },
            l
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n("span", { className: Ps.value, children: e })
  ] });
}
const ib = "_root_gfdmk_1", cb = "_svg_gfdmk_10", db = "_gridline_gfdmk_15", ub = "_tickLabel_gfdmk_21", _b = "_axisTitle_gfdmk_27", fb = "_dataLabel_gfdmk_34", hb = "_legend_gfdmk_40", pb = "_legendItem_gfdmk_48", mb = "_swatch_gfdmk_56", gb = "_tooltip_gfdmk_63", yb = "_visuallyHidden_gfdmk_77", ot = {
  root: ib,
  svg: cb,
  gridline: db,
  tickLabel: ub,
  axisTitle: _b,
  dataLabel: fb,
  legend: hb,
  legendItem: pb,
  swatch: mb,
  tooltip: gb,
  visuallyHidden: yb
}, Fs = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function xb(e, t, s) {
  const o = t - e || 1, i = s ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, p = Math.ceil(t / i) * i, r = [];
  for (let a = c; a <= p + 1e-9; a += i)
    r.push(Number(a.toFixed(6)));
  return { min: c, max: p, step: i, ticks: r };
}
function Jv({
  series: e,
  width: t = 600,
  height: s = 400,
  valueAxis: o,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: p = !0,
  onSeriesClick: r,
  ariaLabel: a = "Chart",
  className: l
}) {
  const [u, d] = X(
    null
  ), k = $e(() => {
    const h = /* @__PURE__ */ new Set();
    for (const v of e)
      for (const M of v.data) h.add(String(M[v.categoryProperty] ?? ""));
    return [...h];
  }, [e]), x = $e(
    () => e.flatMap((h) => h.data.map((v) => Number(v[h.valueProperty]))).filter((h) => !Number.isNaN(h)),
    [e]
  ), N = o?.min ?? (x.length ? Math.min(0, ...x) : 0), w = o?.max ?? (x.length ? Math.max(...x) : 10), y = $e(
    () => xb(N, w, o?.step),
    [N, w, o?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, f = t - _.l - _.r, m = s - _.t - _.b, $ = (h) => _.l + h / Math.max(1, k.length - 1) * f, b = (h) => _.t + (1 - (h - y.min) / (y.max - y.min || 1)) * m, E = (h, v) => v.color ?? Fs[h % Fs.length];
  return /* @__PURE__ */ O(
    "figure",
    {
      className: [ot.root, l].filter(Boolean).join(" "),
      role: "img",
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ O(
          "svg",
          {
            width: t,
            height: s,
            className: ot.svg,
            role: "presentation",
            children: [
              o?.gridlines !== !1 && y.ticks.map((h) => /* @__PURE__ */ n(
                "line",
                {
                  x1: _.l,
                  x2: _.l + f,
                  y1: b(h),
                  y2: b(h),
                  className: ot.gridline
                },
                h
              )),
              i?.gridlines && k.map((h, v) => /* @__PURE__ */ n(
                "line",
                {
                  x1: $(v),
                  x2: $(v),
                  y1: _.t,
                  y2: _.t + m,
                  className: ot.gridline
                },
                v
              )),
              y.ticks.map((h) => /* @__PURE__ */ n(
                "text",
                {
                  x: _.l - 8,
                  y: b(h) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: h
                },
                h
              )),
              k.map((h, v) => /* @__PURE__ */ n(
                "text",
                {
                  x: $(v),
                  y: _.t + m + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: h
                },
                h
              )),
              o?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: 12,
                  y: _.t + m / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + m / 2})`,
                  className: ot.axisTitle,
                  children: o.title
                }
              ),
              i?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: _.l + f / 2,
                  y: s - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: i.title
                }
              ),
              (() => {
                const h = /* @__PURE__ */ new Map();
                for (const I of e)
                  if (I.stack)
                    for (const D of I.data) {
                      const S = String(D[I.categoryProperty] ?? ""), g = Number(D[I.valueProperty]);
                      if (Number.isNaN(g)) continue;
                      h.has(I.stack) || h.set(I.stack, /* @__PURE__ */ new Map());
                      const C = h.get(I.stack);
                      C.set(S, (C.get(S) ?? 0) + g);
                    }
                const v = e.filter(
                  (I) => I.type === "pie" || I.type === "donut"
                ), M = /* @__PURE__ */ new Map();
                for (const I of v) {
                  const D = I.data.reduce(
                    (S, g) => S + (Number(g[I.valueProperty]) || 0),
                    0
                  );
                  M.set(I, D);
                }
                return e.map((I, D) => {
                  const S = I.data.map((j) => ({
                    cat: String(j[I.categoryProperty] ?? ""),
                    val: Number(j[I.valueProperty]),
                    size: I.sizeProperty ? Number(j[I.sizeProperty]) : void 0,
                    item: j
                  })), g = new Map(k.map((j, A) => [j, A])), C = E(D, I);
                  if (I.type === "pie" || I.type === "donut") {
                    const j = _.l + f / 2, A = _.t + m / 2, H = Math.min(f, m) / 3, V = I.type === "donut" ? I.innerRadius ?? H * 0.5 : 0, J = M.get(I) ?? S.reduce((ee, ue) => ee + ue.val, 0);
                    let Z = -90;
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${D + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
                          S.map((ee, ue) => {
                            const ie = J ? ee.val / J * 360 : 0, U = Z, R = Z + ie;
                            Z = R;
                            const te = ie > 180 ? 1 : 0, G = (Qe) => Qe * Math.PI / 180, ce = j + H * Math.cos(G(U)), oe = A + H * Math.sin(G(U)), xe = j + H * Math.cos(G(R)), ke = A + H * Math.sin(G(R)), Be = j + V * Math.cos(G(R)), ve = A + V * Math.sin(G(R)), We = j + V * Math.cos(G(U)), ye = A + V * Math.sin(G(U)), Ze = V ? `M ${ce} ${oe} A ${H} ${H} 0 ${te} 1 ${xe} ${ke} L ${Be} ${ve} A ${V} ${V} 0 ${te} 0 ${We} ${ye} Z` : `M ${j} ${A} L ${ce} ${oe} A ${H} ${H} 0 ${te} 1 ${xe} ${ke} Z`, Ve = (U + R) / 2, Le = j + (H + 12) * Math.cos(G(Ve)), tt = A + (H + 12) * Math.sin(G(Ve));
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "path",
                                {
                                  d: Ze,
                                  fill: C,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => p && d({
                                    x: Le,
                                    y: tt,
                                    text: `${I.title ?? ee.cat}: ${ee.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: ee.cat,
                                    value: ee.val,
                                    item: ee.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              I.labels?.visible && /* @__PURE__ */ n(
                                "text",
                                {
                                  x: Le,
                                  y: tt,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: ee.val
                                }
                              )
                            ] }, ue);
                          })
                        ]
                      },
                      D
                    );
                  }
                  if (I.type === "scatter" || I.type === "bubble")
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${D + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
                          S.map((j, A) => {
                            const H = g.get(j.cat) ?? 0, V = Number(S[A].cat), J = Number.isNaN(V) ? $(H) : _.l + (V - y.min) / (y.max - y.min || 1) * f, Z = b(j.val), ee = I.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: J,
                                  cy: Z,
                                  r: ee,
                                  fill: C,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: J,
                                  cy: Z,
                                  r: 12,
                                  fill: "transparent",
                                  onMouseEnter: () => p && d({
                                    x: J,
                                    y: Z,
                                    text: `${I.title ?? j.cat}: ${j.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: j.cat,
                                    value: j.val,
                                    item: j.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              )
                            ] }, A);
                          })
                        ]
                      },
                      D
                    );
                  if (I.type === "line" || I.type === "area") {
                    const j = (V) => {
                      if (!I.stack) return y.min;
                      let J = 0;
                      for (let Z = 0; Z < D; Z++) {
                        const ee = e[Z];
                        if (ee?.stack !== I.stack) continue;
                        const ue = ee.data.find(
                          (ie) => String(ie[ee.categoryProperty] ?? "") === V
                        );
                        ue && (J += Number(ue[ee.valueProperty]) || 0);
                      }
                      return J;
                    }, A = S.map((V) => {
                      const J = g.get(V.cat) ?? 0, Z = j(V.cat);
                      return `${J === 0 ? "M" : "L"} ${$(J)} ${b(Z + V.val)}`;
                    }).join(" "), H = S.map((V) => {
                      const J = g.get(V.cat) ?? 0, Z = j(V.cat);
                      return `${J === 0 ? "M" : "L"} ${$(J)} ${b(Z)}`;
                    }).join(" ");
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${D + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
                          I.type === "area" && /* @__PURE__ */ n(
                            "path",
                            {
                              d: `${A} L ${$(S.length - 1)} ${b(j(S[S.length - 1].cat))} L ${$(0)} ${b(j(S[0].cat))} Z`,
                              fill: C,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ n("path", { d: A, fill: "none", stroke: C, strokeWidth: 2 }),
                          I.stack && /* @__PURE__ */ n("path", { d: H, fill: "none", stroke: "transparent" }),
                          S.map((V, J) => {
                            const Z = g.get(V.cat) ?? 0, ee = j(V.cat), ue = $(Z), ie = b(ee + V.val);
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: ue,
                                  cy: ie,
                                  r: 4,
                                  fill: C,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ n(
                                "rect",
                                {
                                  x: ue - 12,
                                  y: ie - 12,
                                  width: 24,
                                  height: 24,
                                  fill: "transparent",
                                  onMouseEnter: () => p && d({
                                    x: ue,
                                    y: ie,
                                    text: `${I.title ?? V.cat}: ${V.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onFocus: () => p && d({
                                    x: ue,
                                    y: ie,
                                    text: `${I.title ?? V.cat}: ${V.val}`
                                  }),
                                  onBlur: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: V.cat,
                                    value: V.val,
                                    item: V.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              I.labels?.visible && /* @__PURE__ */ n(
                                "text",
                                {
                                  x: ue,
                                  y: ie - 8,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: V.val
                                }
                              )
                            ] }, J);
                          })
                        ]
                      },
                      D
                    );
                  }
                  const P = I.type === "bar";
                  return /* @__PURE__ */ O(
                    "g",
                    {
                      role: "list",
                      "aria-label": I.title ?? `Series ${D + 1}`,
                      children: [
                        /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
                        S.map((j, A) => {
                          const H = g.get(j.cat) ?? 0;
                          let V = 0;
                          if (I.stack)
                            for (let oe = 0; oe < D; oe++) {
                              const xe = e[oe];
                              if (xe?.stack !== I.stack) continue;
                              const ke = xe.data.find(
                                (Be) => String(Be[xe.categoryProperty] ?? "") === j.cat
                              );
                              ke && (V += Number(ke[xe.valueProperty]) || 0);
                            }
                          const J = V + j.val, Z = e.filter(
                            (oe) => !oe.stack || oe.stack === I.stack
                          ).length, ee = f / k.length, ue = P ? 18 : Math.max(
                            12,
                            ee / (I.stack ? 1 : e.length) - 4
                          ), ie = P ? _.l + V / (y.max - y.min || 1) * f : $(H) - ue / 2 + (I.stack ? 0 : D % Z * ue), U = P ? _.t + H * m / k.length + 4 : b(J), R = P ? j.val / (y.max - y.min || 1) * f : ue - 4, te = P ? 16 : b(V) - b(J), G = P ? _.l + V / (y.max - y.min || 1) * f : ie, ce = P ? _.t + H * m / k.length + 4 : U;
                          return /* @__PURE__ */ O("g", { role: "listitem", children: [
                            /* @__PURE__ */ n(
                              "rect",
                              {
                                x: G,
                                y: ce,
                                width: P ? R : ue - 4,
                                height: te,
                                fill: C,
                                rx: 2,
                                onMouseEnter: () => p && d({
                                  x: G + (P ? R : ue) / 2,
                                  y: ce,
                                  text: `${I.title ?? j.cat}: ${j.val}`
                                }),
                                onMouseLeave: () => d(null),
                                onClick: () => r?.({
                                  seriesTitle: I.title ?? "",
                                  category: j.cat,
                                  value: j.val,
                                  item: j.item
                                }),
                                style: { cursor: "pointer" }
                              }
                            ),
                            I.labels?.visible && /* @__PURE__ */ n(
                              "text",
                              {
                                x: G + (P ? R : ue) / 2,
                                y: ce - 4,
                                textAnchor: "middle",
                                className: ot.dataLabel,
                                children: j.val
                              }
                            )
                          ] }, A);
                        })
                      ]
                    },
                    D
                  );
                });
              })()
            ]
          }
        ),
        u && /* @__PURE__ */ n(
          "div",
          {
            className: ot.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((h, v) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: E(v, h) },
              "aria-hidden": "true"
            }
          ),
          h.title ?? `Series ${v + 1}`
        ] }, v)) }),
        /* @__PURE__ */ O(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ n("caption", { children: a }),
              /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
                /* @__PURE__ */ n("th", { children: "Series" }),
                /* @__PURE__ */ n("th", { children: "Category" }),
                /* @__PURE__ */ n("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ n("tbody", { children: e.map(
                (h) => h.data.map((v, M) => /* @__PURE__ */ O("tr", { children: [
                  /* @__PURE__ */ n("td", { children: h.title ?? "" }),
                  /* @__PURE__ */ n("td", { children: String(v[h.categoryProperty] ?? "") }),
                  /* @__PURE__ */ n("td", { children: String(v[h.valueProperty] ?? "") })
                ] }, `${h.title}-${M}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  Qi as ALERT_ICON,
  dv as Accordion,
  Zb as Alert,
  hv as Autocomplete,
  iv as Avatar,
  $b as Badge,
  Zv as Barcode,
  sv as Body,
  Lv as Breadcrumb,
  kb as Button,
  wb as Card,
  Fv as Carousel,
  Jv as Chart,
  Wb as Checkbox,
  mv as Checkboxlist,
  Nv as Colorpicker,
  ev as Column,
  kn as DEFAULT_OPERATOR_BY_TYPE,
  Jg as DEFAULT_PALETTE,
  qb as DataFilter,
  Fb as DataGrid,
  Hb as DataList,
  Ov as Datepicker,
  Xb as Dialog,
  Iv as DropZone,
  fv as Dropdown,
  zb as EmptyState,
  Vs as FILTER_OPERATORS,
  Rv as FabMenu,
  Db as Field,
  lh as Footer,
  Mb as Form,
  Wv as Gantt,
  dh as Header,
  De as Icon,
  Ub as Input,
  Kb as Label,
  nv as Layout,
  pv as Listbox,
  wv as Mask,
  jv as Menu,
  $v as Numeric,
  Ia as Pager,
  Av as PanelMenu,
  kv as Password,
  Kv as PickList,
  Vv as Pivot,
  Tv as ProfileMenu,
  ov as Progress,
  Yv as QRCode,
  gv as Radiobuttonlist,
  Sv as Rating,
  Qb as Row,
  Uv as Scheduler,
  Mv as SecurityCode,
  gn as Select,
  yv as Selectbar,
  vh as Sidebar,
  rv as SidebarToggle,
  Cv as SignaturePad,
  Jb as Skeleton,
  zv as Slider,
  bv as Splitbutton,
  Bv as Splitter,
  tv as Stack,
  Ob as Stat,
  Pv as Steps,
  Wl as Switch,
  Sb as Table,
  cv as Tabs,
  _v as Text,
  uv as Textarea,
  vv as Textbox,
  lv as ThemeSwitcher,
  Xv as Timeline,
  Dv as Timespanpicker,
  Yb as ToastProvider,
  qv as Toc,
  xv as Togglebutton,
  Vb as Tooltip,
  Hv as Tree,
  Ev as Upload,
  Gv as VirtualGrid,
  Gs as applyFilters,
  Ba as applyGridState,
  $n as columnValue,
  Rb as compare,
  Pb as custom,
  Ra as cycleSort,
  qa as defaultOperatorForType,
  Eb as email,
  Ds as formatMasked,
  xs as formatValue,
  Gn as getByPath,
  Nb as iconNames,
  Xs as matchesFilters,
  Ab as maxLength,
  jb as minLength,
  Pa as paginate,
  Ib as pattern,
  Tb as range,
  Cb as required,
  Lb as requiredTrue,
  ds as resolveVariant,
  Bo as runValidators,
  av as shadeClass,
  sa as sortItems,
  La as sortedItems,
  Jo as toFilterString,
  na as toODataFilterString,
  Po as useFormContext,
  Bb as useFormField,
  Zs as useMediaQuery,
  Gb as useToast
};
