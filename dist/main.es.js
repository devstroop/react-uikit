import { jsxs as O, jsx as n, Fragment as Ce } from "react/jsx-runtime";
import { forwardRef as He, useId as Ye, isValidElement as jn, cloneElement as qr, useState as X, useRef as ae, useCallback as H, useMemo as $e, useContext as Kr, createContext as Ur, useEffect as we, Fragment as ts, Children as ns, useImperativeHandle as cr } from "react";
const rs = "_button_rnnri_1", ss = "_filled_rnnri_36", os = "_flat_rnnri_37", as = "_outlined_rnnri_38", ls = "_text_rnnri_39", is = "_primary_rnnri_200", cs = "_secondary_rnnri_202", ds = "_ghost_rnnri_204", us = "_danger_rnnri_206", _s = "_success_rnnri_208", fs = "_info_rnnri_210", ps = "_loading_rnnri_214", ms = "_spinner_rnnri_217", hs = "_xs_rnnri_229", gs = "_sm_rnnri_235", bs = "_md_rnnri_241", xs = "_lg_rnnri_247", ys = "_xl_rnnri_253", ks = "_iconOnly_rnnri_259", vs = "_fullWidth_rnnri_285", vt = {
  button: rs,
  filled: ss,
  flat: os,
  outlined: as,
  text: ls,
  "style-primary": "_style-primary_rnnri_42",
  "tone-primary": "_tone-primary_rnnri_42",
  "style-secondary": "_style-secondary_rnnri_48",
  "tone-secondary": "_tone-secondary_rnnri_48",
  "style-base": "_style-base_rnnri_54",
  "style-light": "_style-light_rnnri_59",
  "style-dark": "_style-dark_rnnri_64",
  "style-danger": "_style-danger_rnnri_70",
  "tone-danger": "_tone-danger_rnnri_70",
  "style-success": "_style-success_rnnri_76",
  "tone-success": "_tone-success_rnnri_76",
  "style-warning": "_style-warning_rnnri_82",
  "tone-warning": "_tone-warning_rnnri_82",
  "style-info": "_style-info_rnnri_88",
  "tone-info": "_tone-info_rnnri_88",
  "shade-lighter": "_shade-lighter_rnnri_174",
  "shade-light": "_shade-light_rnnri_174",
  "shade-dark": "_shade-dark_rnnri_176",
  "shade-darker": "_shade-darker_rnnri_177",
  primary: is,
  secondary: cs,
  ghost: ds,
  danger: us,
  success: _s,
  info: fs,
  loading: ps,
  spinner: ms,
  "dx-spin": "_dx-spin_rnnri_1",
  xs: hs,
  sm: gs,
  md: bs,
  lg: xs,
  xl: ys,
  iconOnly: ks,
  fullWidth: vs
}, ws = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function $s(e, t) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", o = t;
  if (r) {
    const m = ws[e];
    return { variant: m.variant, style: o ?? m.style };
  }
  const i = e ?? "filled";
  return { variant: i === "filled" || i === "flat" || i === "outlined" || i === "text" ? i : "filled", style: o ?? "primary" };
}
const v2 = He(function({
  variant: t = "filled",
  severity: r,
  shade: o = "default",
  size: i = "md",
  fullWidth: c = !1,
  iconOnly: m = !1,
  loading: s = !1,
  visible: a = !0,
  className: l,
  type: u = "button",
  disabled: d,
  children: v,
  ...x
}, N) {
  if (a === !1) return null;
  const w = $s(t, r), _ = !(w.style === "light" || w.style === "dark") && o !== "default" ? `shade-${o}` : null, f = [
    vt.button,
    vt[w.variant],
    vt[`style-${w.style}`],
    // backwards-compat: tone-* still emitted
    vt[`tone-${w.style}`],
    _ ? vt[_] : null,
    vt[i],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    t && vt[t] ? vt[t] : null,
    c ? vt.fullWidth : null,
    m ? vt.iconOnly : null,
    s ? vt.loading : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ O(
    "button",
    {
      ref: N,
      type: u,
      className: f,
      disabled: d || s,
      "aria-busy": s || void 0,
      ...x,
      children: [
        s ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: vt.spinner }) : null,
        v
      ]
    }
  );
}), Ns = "_card_b9mht_1", Os = "_elevated_b9mht_8", Ss = "_filled_b9mht_13", zs = "_outlined_b9mht_18", Ds = "_interactive_b9mht_22", Ms = "_text_b9mht_30", Cs = "_header_b9mht_46", Es = "_body_b9mht_53", Is = "_footer_b9mht_63", bn = {
  card: Ns,
  elevated: Os,
  filled: Ss,
  outlined: zs,
  interactive: Ds,
  text: Ms,
  header: Cs,
  body: Es,
  footer: Is
}, w2 = He(function({ variant: t = "elevated", header: r, footer: o, className: i, visible: c = !0, children: m, onKeyDown: s, ...a }, l) {
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
          s?.(d), !(!u || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [bn.card, bn[t], i].filter(Boolean).join(" "),
        ...a,
        children: [
          r != null && /* @__PURE__ */ n("div", { className: bn.header, children: r }),
          /* @__PURE__ */ n("div", { className: bn.body, children: m }),
          o != null && /* @__PURE__ */ n("div", { className: bn.footer, children: o })
        ]
      }
    )
  );
});
function dr(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const As = "_badge_fbxod_1", Ts = "_xs_fbxod_14", js = "_sm_fbxod_19", Rs = "_md_fbxod_24", Ls = "_lg_fbxod_29", Ps = "_xl_fbxod_34", Bs = "_neutral_fbxod_40", Fs = "_primary_fbxod_45", Hs = "_secondary_fbxod_50", qs = "_light_fbxod_55", Ks = "_base_fbxod_60", Us = "_dark_fbxod_65", Ws = "_info_fbxod_70", Vs = "_success_fbxod_75", Xs = "_warning_fbxod_80", Gs = "_danger_fbxod_85", Ys = "_filled_fbxod_92", Zs = "_outlined_fbxod_142", Js = "_text_fbxod_194", xn = {
  badge: As,
  xs: Ts,
  sm: js,
  md: Rs,
  lg: Ls,
  xl: Ps,
  neutral: Bs,
  primary: Fs,
  secondary: Hs,
  light: qs,
  base: Ks,
  dark: Us,
  info: Ws,
  success: Vs,
  warning: Xs,
  danger: Gs,
  filled: Ys,
  outlined: Zs,
  text: Js,
  "shade-lighter": "_shade-lighter_fbxod_346",
  "shade-light": "_shade-light_fbxod_346",
  "shade-dark": "_shade-dark_fbxod_348",
  "shade-darker": "_shade-darker_fbxod_349"
}, $2 = He(function({ severity: t = "primary", variant: r = "filled", shade: o, size: i = "md", className: c, visible: m = !0, children: s, ...a }, l) {
  if (m === !1) return null;
  const u = t, d = dr(r, "filled"), v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: l,
      className: [xn.badge, xn[i], xn[u], xn[d], v ? xn[v] : null, c].filter(Boolean).join(" "),
      ...a,
      children: s
    }
  );
}), Qs = "_xs_1t3wj_2", eo = "_sm_1t3wj_7", to = "_md_1t3wj_1", no = "_lg_1t3wj_17", ro = "_xl_1t3wj_22", so = {
  xs: Qs,
  sm: eo,
  md: to,
  lg: no,
  xl: ro
}, N2 = [
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
  star: /* @__PURE__ */ n("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ n("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ O(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, De = He(function({ name: t, size: r = "md", strokeWidth: o = 2, className: i, ...c }, m) {
  const s = typeof r == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: m,
      className: [s ? so[r] : null, i].filter(Boolean).join(" "),
      width: s ? void 0 : r,
      height: s ? void 0 : r,
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
}), ao = "_stat_lffej_1", lo = "_label_lffej_8", io = "_row_lffej_16", co = "_value_lffej_22", uo = "_delta_lffej_28", _o = "_success_lffej_33", fo = "_danger_lffej_37", po = "_neutral_lffej_41", mo = "_hint_lffej_45", Qt = {
  stat: ao,
  label: lo,
  row: io,
  value: co,
  delta: uo,
  success: _o,
  danger: fo,
  neutral: po,
  hint: mo
}, O2 = He(function({ label: t, value: r, delta: o, deltaTone: i = "neutral", hint: c, className: m, ...s }, a) {
  return /* @__PURE__ */ O("div", { ref: a, className: [Qt.stat, m].filter(Boolean).join(" "), ...s, children: [
    /* @__PURE__ */ n("div", { className: Qt.label, children: t }),
    /* @__PURE__ */ O("div", { className: Qt.row, children: [
      /* @__PURE__ */ n("div", { className: Qt.value, children: r }),
      o != null && /* @__PURE__ */ n("div", { className: [Qt.delta, Qt[i]].join(" "), children: o })
    ] }),
    c != null && /* @__PURE__ */ n("div", { className: Qt.hint, children: c })
  ] });
}), ho = "_wrap_n9de1_1", go = "_table_n9de1_8", bo = "_caption_n9de1_14", xo = "_none_n9de1_51", yo = "_horizontal_n9de1_57", ko = "_vertical_n9de1_67", vo = "_alternating_n9de1_85", wo = "_start_n9de1_89", $o = "_center_n9de1_93", No = "_end_n9de1_97", Oo = "_empty_n9de1_101", Vt = {
  wrap: ho,
  table: go,
  caption: bo,
  none: xo,
  horizontal: yo,
  vertical: ko,
  alternating: vo,
  start: wo,
  center: $o,
  end: No,
  empty: Oo
};
function S2({
  columns: e,
  rows: t,
  rowKey: r,
  empty: o,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: m = !0,
  className: s,
  visible: a = !0
}) {
  if (a === !1) return null;
  const l = c === "default" || c === "both" ? "" : Vt[c];
  return /* @__PURE__ */ O("div", { className: [Vt.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "table",
      {
        className: [
          Vt.table,
          l,
          m ? Vt.alternating : ""
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
          )) }, r(u))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Vt.empty, children: o })
  ] });
}
const So = "_emptyState_uurdd_1", zo = "_icon_uurdd_13", Do = "_title_uurdd_18", Mo = "_description_uurdd_24", Co = "_action_uurdd_30", yn = {
  emptyState: So,
  icon: zo,
  title: Do,
  description: Mo,
  action: Co
};
function z2({ icon: e, title: t, description: r, action: o, className: i, visible: c = !0 }) {
  return c === !1 ? null : /* @__PURE__ */ O("div", { className: [yn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: yn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: yn.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: yn.description, children: r }),
    o != null && /* @__PURE__ */ n("div", { className: yn.action, children: o })
  ] });
}
const Eo = "_field_2mpbc_1", Io = "_label_2mpbc_8", Ao = "_required_2mpbc_14", To = "_hint_2mpbc_19", jo = "_error_2mpbc_24", kn = {
  field: Eo,
  label: Io,
  required: Ao,
  hint: To,
  error: jo
};
function D2({ label: e, htmlFor: t, required: r, hint: o, supporting: i, error: c, children: m, className: s, visible: a = !0 }) {
  const l = o ?? i, u = Ye(), d = Ye(), v = Ye();
  if (a === !1) return null;
  const x = c != null ? d : l != null ? v : null, N = typeof m == "function" ? m({ inputId: u, hintId: v, errorId: d }) : m, w = jn(N) && typeof N.props.id == "string" ? N.props.id : void 0, b = w ?? t ?? u, _ = jn(N) && (x != null || w == null && typeof N.type == "string"), f = w != null || t != null || _, h = _ && jn(N) ? qr(
    N,
    {
      id: b,
      "aria-describedby": x != null ? [
        N.props["aria-describedby"],
        x
      ].filter(($) => typeof $ == "string").join(" ") || void 0 : N.props["aria-describedby"],
      "aria-invalid": c != null ? !0 : N.props["aria-invalid"]
    }
  ) : N;
  return /* @__PURE__ */ O("div", { className: [kn.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O("label", { className: kn.label, htmlFor: f ? b : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ n("span", { className: kn.required, "aria-hidden": "true", children: "*" })
    ] }),
    h,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: kn.error, "aria-live": "polite", children: c }) : l != null ? /* @__PURE__ */ n("div", { id: v, className: kn.hint, children: l }) : null
  ] });
}
const Ro = "_form_fwqyn_1", Lo = {
  form: Ro
}, Wr = Ur(null);
function Po() {
  const e = Kr(Wr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function M2({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: o,
  method: i,
  children: c,
  className: m
}) {
  const [s, a] = X({}), [l, u] = X(0), d = ae(s);
  d.current = s;
  const v = H((h) => {
    a(($) => $[h.name] === h ? $ : { ...$, [h.name]: h });
  }, []), x = H((h) => {
    a(($) => {
      if (!(h in $)) return $;
      const y = { ...$ };
      return delete y[h], y;
    });
  }, []), N = H(() => {
    const h = {};
    for (const $ of Object.values(d.current)) {
      const y = $.validate();
      y.length > 0 && (h[$.name] = y);
    }
    return h;
  }, []), w = H(() => {
    const h = N();
    u(($) => $ + 1), Object.keys(h).length === 0 ? t?.(e) : r?.(h);
  }, [N, e, t, r]), b = (h) => {
    o != null && i != null || (h.preventDefault(), w());
  }, _ = $e(
    () => ({ registerField: v, unregisterField: x, submit: w, submitCount: l }),
    [v, x, w, l]
  ), f = [Lo.form, m].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Wr.Provider, { value: _, children: /* @__PURE__ */ n("form", { className: f, onSubmit: b, action: o, method: i, noValidate: !0, children: c }) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", C2 = (e = "Required") => (t) => an(t) ? e : null, E2 = (e = "Invalid email") => (t) => an(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, I2 = (e, t = "Invalid format") => (r) => an(r) || e.test(String(r)) ? null : t, A2 = (e, t = `Minimum ${e} characters`) => (r) => an(r) || String(r).length >= e ? null : t, T2 = (e, t = `Maximum ${e} characters`) => (r) => an(r) || String(r).length <= e ? null : t, j2 = (e, t, r = `Between ${e} and ${t}`) => (o) => {
  if (an(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : r;
}, R2 = (e, t = "Values do not match") => (r, o) => {
  if (an(r)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return r === i ? null : t;
}, L2 = (e = "Required") => (t) => t === !0 ? null : e, P2 = (e) => (t, r) => e(t, r);
function Bo(e, t, r) {
  return e.map((o) => o(t, r)).filter((o) => o != null);
}
function B2(e, t) {
  const { registerField: r, unregisterField: o, submitCount: i } = Po(), [c, m] = X(t?.initialValue), [s, a] = X(!1), [l, u] = X(!1), d = ae(() => []);
  d.current = () => Bo(t?.validate ?? [], c), we(() => (r({ name: e, validate: () => d.current() }), () => o(e)), [e, r, o]), we(() => {
    i > 0 && (a(!0), u(!1));
  }, [i]);
  const v = s && !l ? d.current() : [];
  return { value: c, setValue: (N) => {
    m(N), u(!0);
  }, errors: v };
}
const Fo = "_select_1j4dh_1", Ho = "_invalid_1j4dh_33", qo = "_xs_1j4dh_40", Ko = "_sm_1j4dh_48", Uo = "_md_1j4dh_56", Wo = "_lg_1j4dh_62", Vo = "_xl_1j4dh_68", Zn = {
  select: Fo,
  invalid: Ho,
  xs: qo,
  sm: Ko,
  md: Uo,
  lg: Wo,
  xl: Vo
}, gn = He(function({ size: t = "md", invalid: r = !1, options: o, children: i, className: c, ...m }, s) {
  return /* @__PURE__ */ n(
    "select",
    {
      ref: s,
      className: [Zn.select, Zn[t], r ? Zn.invalid : null, c].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...m,
      children: o != null ? o.map((a) => /* @__PURE__ */ n("option", { value: a.value, disabled: a.disabled, children: a.label }, a.value)) : i
    }
  );
}), Vr = [
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
}, Xo = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"];
function Go(e) {
  return Xo.includes(e);
}
function Gn(e, t) {
  return t.split(".").reduce((r, o) => {
    if (r != null)
      return r[o];
  }, e);
}
function fr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function An(e, t) {
  const r = fr(e), o = fr(t);
  if (typeof r == "number" && typeof o == "number") return r - o;
  const i = String(r ?? ""), c = String(o ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function Yn(e) {
  if (e.secondOperator == null) return !1;
  if (Go(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function pr(e, t, r) {
  const o = Gn(t, e.property), i = mr(o, e.value, e.operator, r);
  if (!Yn(e)) return i;
  const c = mr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function mr(e, t, r, o) {
  const i = o === "CaseInsensitive", c = (a) => i && typeof a == "string" ? a.toLowerCase() : a, m = c(e), s = c(t);
  switch (r) {
    case "Equals":
      return m === s || Array.isArray(m) && m.some((a) => c(a) === s);
    case "NotEquals":
      return m !== s && !(Array.isArray(m) && m.some((a) => c(a) === s));
    case "LessThan":
      return An(m, s) < 0;
    case "LessThanOrEquals":
      return An(m, s) <= 0;
    case "GreaterThan":
      return An(m, s) > 0;
    case "GreaterThanOrEquals":
      return An(m, s) >= 0;
    case "Contains":
      return typeof m == "string" && typeof s == "string" && m.includes(s);
    case "StartsWith":
      return typeof m == "string" && typeof s == "string" && m.startsWith(s);
    case "EndsWith":
      return typeof m == "string" && typeof s == "string" && m.endsWith(s);
    case "DoesNotContain":
      return typeof m == "string" && typeof s == "string" && !m.includes(s);
    case "In":
      return Array.isArray(s) && s.some((a) => c(a) === m);
    case "NotIn":
      return Array.isArray(s) && !s.some((a) => c(a) === m);
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
function ur(e) {
  return "filters" in e;
}
function Xr(e, t, r = {}) {
  const o = r.logicalOperator ?? "And", i = r.caseSensitivity ?? "CaseInsensitive";
  if (ur(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (m) => Xr(e, m, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", pr(t, e, i);
}
function Gr(e, t, r = {}) {
  return e.filter((o) => Xr(o, t, r));
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
  const r = e.logicalOperator ?? "And", o = e.secondOperator;
  return `(${t(e.operator, e.value)} ${r} ${t(
    o,
    e.secondValue
  )})`;
}
function Jo(e) {
  return ur(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Jo).filter(Boolean).join(` ${e.operator} `)})` : Zo(e);
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
  const r = e.property, o = t === "CaseInsensitive", i = (l) => o ? `tolower(${l})` : l, c = (l) => typeof l == "string" ? `'${Qo(l)}'` : l instanceof Date ? `'${l.toISOString()}'` : String(l ?? ""), m = (l, u) => {
    const d = typeof u == "string", v = d && o ? i(r) : r;
    switch (l) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${v} ${ea[l]} ${d && o ? i(c(u)) : c(u)}`;
      case "Contains":
        return `contains(${i(r)}, ${i(c(u))})`;
      case "StartsWith":
        return `startswith(${i(r)}, ${i(c(u))})`;
      case "EndsWith":
        return `endswith(${i(r)}, ${i(c(u))})`;
      case "DoesNotContain":
        return `not(contains(${i(r)}, ${i(c(u))}))`;
      case "In":
        return Array.isArray(u) ? `${v} in (${u.map((x) => c(x)).join(", ")})` : `${v} in (${c(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${v} in (${u.map((x) => c(x)).join(", ")}))` : `not(${v} in (${c(u)}))`;
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
  if (!Yn(e))
    return m(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${m(e.operator, e.value)} ${s} ${m(
    a,
    e.secondValue
  )})`;
}
function na(e, t = {}) {
  const r = t.caseSensitivity ?? "CaseInsensitive";
  if (ur(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => na(i, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return ta(e, r);
}
function ra(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, m = An(Gn(r, i.property), Gn(o, i.property));
      if (m !== 0) return m * c;
    }
    return 0;
  });
}
const sa = "_filter_1nhm8_1", oa = "_rows_1nhm8_9", aa = "_row_1nhm8_9", la = "_join_1nhm8_21", ia = "_property_1nhm8_30", ca = "_operator_1nhm8_34", da = "_value_1nhm8_38", ua = "_remove_1nhm8_42", _a = "_bar_1nhm8_58", fa = "_add_1nhm8_64", pa = "_custom_1nhm8_78", ma = "_summary_1nhm8_82", ha = "_second_1nhm8_87", ga = "_secondAdd_1nhm8_91", ba = "_addSecond_1nhm8_95", xa = "_joinSelect_1nhm8_109", Ge = {
  filter: sa,
  rows: oa,
  row: aa,
  join: la,
  property: ia,
  operator: ca,
  value: da,
  remove: ua,
  bar: _a,
  add: fa,
  custom: pa,
  summary: ma,
  second: ha,
  secondAdd: ga,
  addSecond: ba,
  joinSelect: xa
}, wn = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], hr = {
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
function gr({
  property: e,
  value: t,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(Ce, { children: e.editor({ value: t, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
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
          c.target.value === "" ? r(void 0) : r(c.target.value === "true");
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
      onChange: (c) => r(o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value)
    }
  );
}
function F2({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: m,
  items: s,
  children: a
}) {
  const [l, u] = X(
    () => o != null && o.length > 0 ? o.map((_, f) => ({ id: f, ..._ })) : [{ id: 0, property: e[0]?.name ?? "", operator: vn[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (_, f) => {
    u((h) => h.map(($) => $.id === _ ? { ...$, ...f } : $));
  }, v = () => {
    const _ = l[l.length - 1], f = Math.max(0, ...l.map(($) => $.id)) + 1, h = e[0];
    u(($) => [
      ...$,
      {
        id: f,
        property: _?.property ?? h?.name ?? "",
        operator: vn[e.find((y) => y.name === (_?.property ?? h?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, x = (_) => {
    u((f) => f.length > 1 ? f.filter((h) => h.id !== _) : f);
  }, N = $e(() => {
    const _ = [];
    for (const f of l) {
      if (f.property === "" || (f.value == null || f.value === "") && !wn.includes(f.operator)) continue;
      const $ = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: y } = f;
      y != null && Yn(f) && ($.secondOperator = y, $.secondValue = f.secondValue, $.logicalOperator = f.logicalOperator ?? "And"), _.push($);
    }
    return _;
  }, [l]), w = $e(() => s == null || N.length === 0 ? s : Gr(s, { operator: t, filters: N }, { caseSensitivity: r }), [s, N, t, r]);
  we(() => {
    m != null && s != null && m(w ?? []);
  }, [w]);
  const b = (_) => e.find((f) => f.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: l.map((_, f) => {
      const h = b(_.property), $ = i ? [vn[h.type ?? "string"]] : Vr, y = !wn.includes(_.operator), E = _.secondOperator != null;
      return /* @__PURE__ */ O(ts, { children: [
        /* @__PURE__ */ O("div", { className: Ge.row, children: [
          f > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: Ge.property,
              value: _.property,
              onChange: (p) => {
                const k = e.find((M) => M.name === p.target.value);
                d(_.id, {
                  property: p.target.value,
                  operator: vn[k?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((p) => ({ value: p.name, label: p.title ?? p.name }))
            }
          ),
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: Ge.operator,
              value: _.operator,
              onChange: (p) => {
                const k = p.target.value;
                d(
                  _.id,
                  wn.includes(k) ? {
                    operator: k,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: k }
                );
              },
              options: $.map((p) => ({ value: p, label: hr[p] }))
            }
          ),
          y ? /* @__PURE__ */ n(gr, { property: h, value: _.value, onChange: (p) => d(_.id, { value: p }) }) : null,
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
        y ? E ? /* @__PURE__ */ O("div", { className: [Ge.row, Ge.second].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${f + 1} second-operator logic`,
              className: Ge.joinSelect,
              value: _.logicalOperator ?? "And",
              onChange: (p) => d(_.id, { logicalOperator: p.target.value }),
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
              onChange: (p) => {
                const k = p.target.value;
                d(
                  _.id,
                  wn.includes(k) ? { secondOperator: k, secondValue: void 0 } : { secondOperator: k }
                );
              },
              options: $.map((p) => ({
                value: p,
                label: hr[p]
              }))
            }
          ),
          _.secondOperator == null || !wn.includes(_.secondOperator) ? /* @__PURE__ */ n(
            gr,
            {
              property: h,
              value: _.secondValue,
              onChange: (p) => d(_.id, { secondValue: p })
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
        ] }) : /* @__PURE__ */ n("div", { className: Ge.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ge.addSecond,
            onClick: () => d(_.id, {
              secondOperator: vn[h.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ O("div", { className: Ge.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ge.add, onClick: v, children: "Add filter" }),
      a != null ? /* @__PURE__ */ n("div", { className: Ge.custom, children: a }) : null,
      s != null ? /* @__PURE__ */ O("span", { className: Ge.summary, "aria-live": "polite", children: [
        w?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const ya = "_pager_203q2_1", ka = "_alignLeft_203q2_10", va = "_alignCenter_203q2_14", wa = "_alignRight_203q2_18", $a = "_alignJustify_203q2_22", Na = "_summary_203q2_26", Oa = "_controls_203q2_31", Sa = "_button_203q2_37", za = "_active_203q2_73", Da = "_ellipsis_203q2_85", Ma = "_size_203q2_91", lt = {
  pager: ya,
  alignLeft: ka,
  alignCenter: va,
  alignRight: wa,
  alignJustify: $a,
  summary: Na,
  controls: Oa,
  button: Sa,
  active: za,
  ellipsis: Da,
  size: Ma
};
function Ca(e, t, r, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(r)).replace("{2}", String(o));
}
function br(e, t) {
  return e.replace("{0}", String(t));
}
function Ea(e, t, r) {
  if (t <= r) return Array.from({ length: t }, (s, a) => a + 1);
  const o = Math.floor(r / 2);
  let i = Math.max(1, e - o);
  const c = Math.min(t, i + r - 1);
  i = Math.max(1, c - r + 1);
  const m = [];
  for (let s = i; s <= c; s++) m.push(s);
  return i > 2 && m.unshift("ellipsis"), i > 1 && m.unshift(1), c < t - 1 && m.push("ellipsis"), c < t && m.push(t), m;
}
function Ia({
  count: e,
  pageSize: t,
  page: r,
  pageNumber: o,
  defaultPage: i = 1,
  pageSizeOptions: c,
  pageNumbersCount: m = 5,
  alwaysVisible: s = !1,
  horizontalAlign: a = "left",
  showPagingSummary: l,
  showSummary: u,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: v = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: x,
  summaryTemplate: N,
  pageSizeText: w = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: _ = "Previous page",
  nextPageTitle: f = "Next page",
  lastPageTitle: h = "Last page",
  pageTitleFormat: $ = "Page {0}",
  pageAriaLabelFormat: y = "Page {0}",
  onPageChange: E,
  onPageSizeChange: p,
  ariaLabel: k = "Pagination",
  className: M,
  visible: I = !0
}) {
  const D = r ?? o ?? i, [S, g] = X(D), C = r !== void 0 || o !== void 0, P = C ? D : S, A = Math.max(1, Math.ceil(e / t)), T = Math.min(Math.max(1, P), A), q = l ?? u ?? !0, V = s || A > 1, J = Ea(T, A, m), Z = H(
    (U) => {
      const R = Math.min(Math.max(1, U), A);
      C || g(R);
      const te = (R - 1) * t;
      E?.({ page: R, skip: te, top: t, pageCount: A, pageSize: t });
    },
    [C, E, A, t]
  ), ee = a === "center" ? lt.alignCenter : a === "right" ? lt.alignRight : a === "justify" ? lt.alignJustify : lt.alignLeft, ue = { count: e, pageNumber: T, pageSize: t, pageCount: A }, ie = (U) => {
    const R = Array.from(U.currentTarget.querySelectorAll("button[data-pager-page]")), te = R.indexOf(document.activeElement);
    te !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (R[te + 1] ?? R[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (R[te - 1] ?? R[R.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), R[0]?.focus()) : U.key === "End" && (U.preventDefault(), R[R.length - 1]?.focus()));
  };
  return I === !1 || !V ? null : /* @__PURE__ */ O("nav", { className: [lt.pager, ee, M].filter(Boolean).join(" "), "aria-label": k, children: [
    q && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: x ? x(ue) : N ? N({ count: e, pageNumber: T, pageSize: t }) : Ca(v, T, A, e) }),
    /* @__PURE__ */ O("div", { className: lt.controls, role: "group", "aria-label": k, onKeyDown: ie, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: lt.button,
          disabled: T <= 1,
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
          disabled: T <= 1,
          onClick: () => Z(T - 1),
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
            className: [lt.button, U === T ? lt.active : ""].filter(Boolean).join(" "),
            "aria-current": U === T ? "page" : void 0,
            "aria-label": br(y, U),
            title: br($, U),
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
          disabled: T >= A,
          onClick: () => Z(T + 1),
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
          disabled: T >= A,
          onClick: () => Z(A),
          "aria-label": h,
          title: h,
          children: "»"
        }
      )
    ] }),
    d && c && c.length > 0 && /* @__PURE__ */ O("label", { className: lt.size, children: [
      /* @__PURE__ */ n("span", { children: w }),
      /* @__PURE__ */ n(
        "select",
        {
          value: t,
          onChange: (U) => p?.(Number(U.target.value)),
          "aria-label": w,
          children: c.map((U) => /* @__PURE__ */ n("option", { value: U, children: U }, U))
        }
      )
    ] })
  ] });
}
function sr(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: o, showSummary: i, ...c } = e;
  return /* @__PURE__ */ n(
    Ia,
    {
      page: t,
      showPagingSummary: i,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: o ? (s) => o({ count: s.count, pageNumber: s.pageNumber, pageSize: s.pageSize }) : void 0,
      onPageChange: r ? (s) => r(s.page) : void 0,
      ...c
    }
  );
}
function Aa(e, t, r, o, i, c) {
  if (!t || !r) return e.map((a) => ({ type: "row", row: a }));
  const m = /* @__PURE__ */ new Map();
  e.forEach((a) => {
    const l = String(i(a, t) ?? ""), u = m.get(l);
    u ? u.push(a) : m.set(l, [a]);
  });
  const s = [];
  return m.forEach((a, l) => {
    const u = a[0], d = u != null ? i(u, t) : void 0;
    s.push({
      type: "group",
      group: { key: l, display: c(d), property: t, title: r.title ?? t, count: a.length }
    }), o.has(l) && a.forEach((v) => s.push({ type: "row", row: v }));
  }), s;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function Ta(e, t) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    r[i] = o === 0 ? "0px" : `${o}px`;
    const m = t[i] ?? c.width ?? "8rem";
    o += parseFloat(m);
  }), r;
}
function ja(e, t) {
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
function $n(e, t) {
  if (t != null)
    return Gn(e, t);
}
function xr(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(t);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (t === "d" || t === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const yr = ["Ascending", "Descending", null];
function Ra(e, t, r = {}) {
  const o = e.find((c) => c.property === t), i = yr[(o ? yr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : r.multi ? [...e.filter((c) => c.property !== t), { property: t, sortOrder: i }] : [{ property: t, sortOrder: i }];
}
function La(e, t) {
  return ra(e, t);
}
function Pa(e, t, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), i = Math.min(Math.max(1, t), o), c = (i - 1) * r;
  return { items: e.slice(c, c + r), pageCount: o, pageNumber: i, total: e.length };
}
function Ba(e, t, r = {}) {
  const o = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(([s, a]) => ({
    property: s,
    operator: a.operator ?? "Contains",
    value: ja(a.value, r.types?.[s] ?? "string")
  })), i = o.length > 0 ? Gr(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, c = La(i, t.sorts);
  return { ...Pa(c, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function Fa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Ha = "_grid_kz335_1", qa = "_toolbar_kz335_8", Ka = "_picker_kz335_13", Ua = "_pickerButton_kz335_17", Wa = "_pickerPanel_kz335_31", Va = "_pickerItem_kz335_46", Xa = "_groupPanel_kz335_55", Ga = "_groupPanelActive_kz335_66", Ya = "_groupPanelText_kz335_70", Za = "_groupChip_kz335_74", Ja = "_groupRemove_kz335_85", Qa = "_groupRow_kz335_94", el = "_groupCell_kz335_98", tl = "_groupToggle_kz335_103", nl = "_editRow_kz335_116", rl = "_editCell_kz335_120", sl = "_editInput_kz335_125", ol = "_commandCell_kz335_135", al = "_commandButton_kz335_141", ll = "_data_kz335_156", il = "_table_kz335_163", cl = "_header_kz335_169", dl = "_center_kz335_181", ul = "_right_kz335_185", _l = "_sortButton_kz335_189", fl = "_sortIndicator_kz335_207", pl = "_sortIndex_kz335_211", ml = "_cell_kz335_222", hl = "_clickable_kz335_236", gl = "_frozen_kz335_244", bl = "_selected_kz335_250", xl = "_resizeHandle_kz335_254", yl = "_filterCell_kz335_272", kl = "_filterSelect_kz335_280", vl = "_filterInput_kz335_290", wl = "_empty_kz335_301", $l = "_loading_kz335_307", Nl = "_visuallyHidden_kz335_317", ge = {
  grid: Ha,
  toolbar: qa,
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
  editCell: rl,
  editInput: sl,
  commandCell: ol,
  commandButton: al,
  data: ll,
  table: il,
  header: cl,
  center: dl,
  right: ul,
  sortButton: _l,
  sortIndicator: fl,
  sortIndex: pl,
  cell: ml,
  clickable: hl,
  frozen: gl,
  selected: bl,
  resizeHandle: xl,
  filterCell: yl,
  filterSelect: kl,
  filterInput: vl,
  empty: wl,
  loading: $l,
  visuallyHidden: Nl
}, Ol = {
  Ascending: "ascending",
  Descending: "descending"
};
function kr(e, t) {
  return e.filterable ?? t;
}
function Sl(e, t) {
  return e.sortable ?? t;
}
function zl(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function H2({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: m = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: l = !1,
  pageSize: u = 10,
  pageSizeOptions: d,
  pageNumbersCount: v = 5,
  pagerPosition: x = "Bottom",
  showPagingSummary: N = !0,
  showPageSizeSelector: w = !0,
  selectionMode: b = "None",
  selectedKeys: _,
  onSelectionChange: f,
  showColumnPicker: h = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: y = !1,
  allowColumnReorder: E = !1,
  allowGrouping: p = !1,
  groupPanelText: k = "Drag a column header here to group",
  groupExpanded: M = !0,
  editMode: I = "None",
  allowRowCreate: D = !1,
  onRowUpdate: S,
  onRowCreate: g,
  onRowDelete: C,
  isLoading: P = !1,
  empty: A = "No records found",
  ariaLabel: T,
  className: q,
  onRowClick: V
}) {
  const [J, Z] = X([]), [ee, ue] = X(/* @__PURE__ */ new Map()), [ie, U] = X(1), [R, te] = X(u), [G, ce] = X(
    () => e.map((j, L) => Ln(j, L))
  ), [oe, xe] = X(
    () => new Set(e.map((j, L) => j.visible !== !1 ? Ln(j, L) : "").filter(Boolean))
  ), [ve, Be] = X({}), [ke, We] = X(!1), [be, Ze] = X(null), [Ve, Le] = X(null), [tt, Qe] = X(null), [et, W] = X({}), z = ae(null), F = ae(null), ne = $e(() => {
    const j = /* @__PURE__ */ new Map();
    return e.forEach((L, le) => j.set(Ln(L, le), L)), j;
  }, [e]), _e = $e(
    () => G.filter((j) => oe.has(j)).map((j) => ({ key: j, column: ne.get(j) })).filter((j) => j.column != null),
    [G, oe, ne]
  ), re = $e(
    () => Ta(_e, ve),
    [_e, ve]
  ), he = I !== "None" || C != null || D, Ne = $e(
    () => Ba(t, { sorts: J, filters: ee, pageNumber: ie, pageSize: R }, {
      logicalOperator: a,
      caseSensitivity: s,
      types: Object.fromEntries(
        e.filter((j) => j.type != null && j.property != null).map((j) => [j.property, j.type])
      )
    }),
    [t, J, ee, ie, R, a, s, e]
  ), Fe = $e(
    () => be ? e.find((j) => j.property === be) : void 0,
    [be, e]
  ), Je = $e(
    () => Ve ?? new Set(M ? Ne.items.map((j) => String($n(j, be ?? "") ?? "")) : []),
    [Ve, M, Ne.items, be]
  ), dt = $e(
    () => Aa(
      Ne.items,
      be ?? void 0,
      Fe,
      Je,
      $n,
      (j) => xr(j, Fe?.format)
    ),
    [Ne.items, be, Fe, Je]
  ), yt = $e(
    () => be ? _e.filter((j) => j.column.property !== be) : _e,
    [_e, be]
  ), Q = (j) => {
    j !== "" && Z(Ra(J, j, { multi: i }));
  }, Se = (j, L) => {
    ue((le) => {
      const me = new Map(le);
      return me.set(j, L), me;
    }), U(1);
  }, nt = (j) => {
    te(j), U(1);
  }, Wt = (j) => {
    if (b === "None") return;
    const L = r(j), le = _ ?? [];
    let me;
    b === "Single" ? me = le.length === 1 && le[0] === L ? [] : [L] : me = le.includes(L) ? le.filter((Ie) => Ie !== L) : [...le, L], f?.(me);
  }, Ot = (j) => {
    V?.(j);
  }, ze = (j, L, le) => {
    z.current = { key: j, startX: L, startWidth: le };
  }, Xe = (j) => {
    const L = z.current;
    if (!L) return;
    const le = j - L.startX, me = Math.max(48, L.startWidth + le);
    Be((Ie) => ({ ...Ie, [L.key]: `${me}px` }));
  }, kt = () => {
    z.current = null;
  }, Rt = (j) => {
    F.current = j;
  }, Jt = (j) => {
    const L = F.current;
    F.current = null, !(!L || L === j) && ce((le) => {
      const me = [...le], Ie = me.indexOf(L), Ae = me.indexOf(j);
      return Ie < 0 || Ae < 0 ? le : (me.splice(Ie, 1), me.splice(Ae, 0, L), me);
    });
  }, K = (j) => {
    xe((L) => {
      const le = new Set(L);
      return le.has(j) ? le.delete(j) : le.add(j), le;
    });
  }, de = () => {
    const j = F.current;
    if (F.current = null, !j || !p) return;
    const le = ne.get(j)?.property;
    le && (Ze(le), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, qe = (j) => {
    Le((L) => {
      const le = L ?? new Set(M ? Ne.items.map((Ie) => String($n(Ie, be ?? "") ?? "")) : []), me = new Set(le);
      return me.has(j) ? me.delete(j) : me.add(j), me;
    });
  }, Lt = (j) => {
    const L = {};
    e.forEach((le) => {
      le.property && (L[le.property] = $n(j, le.property));
    }), W(L), Qe(String(r(j)));
  }, St = () => {
    const j = {};
    e.forEach((L) => {
      L.property && L.type === "boolean" && (j[L.property] = !1);
    }), W(j), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, Y = (j) => {
    if (tt === "__new__") {
      const L = Object.fromEntries(
        e.filter((le) => le.property).map((le) => [le.property, et[le.property]])
      );
      g?.(L);
    } else if (j != null) {
      const L = { ...j, ...et };
      S?.(j, L);
    }
    B();
  }, se = l && (x === "Top" || x === "TopAndBottom"), pe = l && (x === "Bottom" || x === "TopAndBottom"), fe = m && e.some((j) => kr(j, m)), ye = (j, L, le) => j.render ? j.render(L, { index: 0 }) : xr($n(L, j.property), j.format), je = (j) => {
    const L = [ge.cell];
    return j.align === "center" && L.push(ge.center), j.align === "right" && L.push(ge.right), j.frozen && L.push(ge.frozen), L.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, q].filter(Boolean).join(" "), children: [
    se && /* @__PURE__ */ n(
      sr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: N,
        showPageSizeSelector: w,
        ariaLabel: pe ? "Pagination (top)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: nt
      }
    ),
    (p || D || h) && /* @__PURE__ */ O("div", { className: ge.toolbar, children: [
      p && /* @__PURE__ */ n(
        "div",
        {
          className: [ge.groupPanel, be ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: p ? (j) => j.preventDefault() : void 0,
          onDrop: p ? de : void 0,
          children: be ? /* @__PURE__ */ O("span", { className: ge.groupChip, children: [
            Fe?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ n("button", { type: "button", className: ge.groupRemove, onClick: Pe, "aria-label": `Remove group by ${Fe?.title ?? be}`, children: /* @__PURE__ */ n(De, { name: "close", size: "sm" }) })
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: k })
        }
      ),
      D && /* @__PURE__ */ n("button", { type: "button", className: ge.pickerButton, onClick: St, children: "Add row" }),
      h && /* @__PURE__ */ O("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ke,
            onClick: () => We((j) => !j),
            children: $
          }
        ),
        ke && /* @__PURE__ */ n("div", { className: ge.pickerPanel, role: "menu", "aria-label": $, children: e.map((j, L) => {
          const le = Ln(j, L);
          return /* @__PURE__ */ O("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                checked: oe.has(le),
                onChange: () => K(le)
              }
            ),
            j.title ?? j.property
          ] }, le);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ O("div", { className: ge.data, children: [
      /* @__PURE__ */ O(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": Ne.total + 1,
          "aria-label": T,
          "aria-busy": P || void 0,
          children: [
            /* @__PURE__ */ O("colgroup", { children: [
              yt.map(({ key: j, column: L }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: ve[j] ?? L.width,
                    minWidth: L.minWidth,
                    maxWidth: L.maxWidth
                  }
                },
                j
              )),
              he && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ O("thead", { children: [
              /* @__PURE__ */ O("tr", { children: [
                yt.map(({ key: j, column: L }) => {
                  const le = Sl(L, o), me = J.find((Me) => Me.property === L.property), Ie = me ? J.indexOf(me) + 1 : 0, Ae = L.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": le && me ? Ol[me.sortOrder] : "none",
                      className: [
                        ge.header,
                        Ae === "center" ? ge.center : "",
                        Ae === "right" ? ge.right : "",
                        L.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: L.frozen ? { left: re[j] } : void 0,
                      scope: "col",
                      draggable: E || p || void 0,
                      onDragStart: E || p ? (Me) => {
                        Me.dataTransfer && (Me.dataTransfer.effectAllowed = "move"), Rt(j);
                      } : void 0,
                      onDragOver: E ? (Me) => Me.preventDefault() : void 0,
                      onDrop: E ? () => Jt(j) : void 0,
                      children: [
                        le ? /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => L.property != null && Q(L.property),
                            "aria-label": me ? me.sortOrder === "Ascending" ? `Sort ${L.title ?? L.property} descending` : `Sort ${L.title ?? L.property} ascending` : `Sort ${L.title ?? L.property} ascending`,
                            children: [
                              L.title ?? L.property,
                              me && /* @__PURE__ */ n("span", { className: ge.sortIndicator, "aria-hidden": "true", children: me.sortOrder === "Ascending" ? "▲" : "▼" }),
                              Ie > 1 && c && /* @__PURE__ */ n("span", { className: ge.sortIndex, children: Ie })
                            ]
                          }
                        ) : L.title ?? L.property,
                        y && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${L.title ?? L.property}`,
                            onMouseDown: (Me) => {
                              Me.preventDefault(), Me.stopPropagation();
                              const at = ve[j] ?? L.width, zt = at ? parseFloat(at) : 96;
                              ze(j, Me.clientX, Number.isFinite(zt) ? zt : 96);
                            },
                            onMouseMove: (Me) => {
                              z.current?.key === j && Xe(Me.clientX);
                            },
                            onMouseUp: kt,
                            onMouseLeave: () => {
                              z.current?.key === j && kt();
                            }
                          }
                        )
                      ]
                    },
                    j
                  );
                }),
                he && /* @__PURE__ */ n("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              fe && /* @__PURE__ */ n("tr", { children: yt.map(({ key: j, column: L }) => {
                if (!kr(L, m)) return /* @__PURE__ */ n("td", { className: ge.filterCell }, j);
                const le = ee.get(L.property ?? "");
                return /* @__PURE__ */ O("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ O("label", { className: ge.visuallyHidden, htmlFor: `df-${L.property}`, children: [
                    "Filter ",
                    L.title ?? L.property
                  ] }),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${L.property}`,
                      className: ge.filterSelect,
                      value: le?.operator ?? Fa(L.type ?? "string"),
                      onChange: (me) => Se(L.property ?? "", { ...le, operator: me.target.value }),
                      "aria-label": `${L.title ?? L.property} operator`,
                      children: Vr.filter((me) => me !== "Custom").map((me) => /* @__PURE__ */ n("option", { value: me, children: me }, me))
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: le?.value ?? "",
                      onChange: (me) => Se(L.property ?? "", { ...le, value: me.target.value }),
                      placeholder: `Filter ${L.title ?? L.property}`,
                      "aria-label": `${L.title ?? L.property} value`
                    }
                  )
                ] }, j);
              }) })
            ] }),
            /* @__PURE__ */ O("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ O("tr", { className: ge.editRow, children: [
                yt.map(({ key: j, column: L }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: L.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: L.type === "number" ? "number" : L.type === "boolean" ? "checkbox" : "text",
                    checked: L.type === "boolean" ? !!et[L.property] : void 0,
                    value: L.type === "boolean" ? void 0 : String(et[L.property] ?? ""),
                    onChange: (le) => W((me) => ({
                      ...me,
                      [L.property]: L.type === "boolean" ? le.target.checked : le.target.value
                    })),
                    "aria-label": `${L.title ?? L.property} (new)`
                  }
                ) }, j)),
                he && /* @__PURE__ */ O("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Y(), children: "Save" }),
                  /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                ] })
              ] }),
              dt.map((j) => {
                if (j.type === "group" && j.group) {
                  const Ae = Je.has(j.group.key);
                  return /* @__PURE__ */ n("tr", { className: ge.groupRow, children: /* @__PURE__ */ n("td", { colSpan: yt.length + (he ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ O(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": Ae,
                      onClick: () => qe(j.group.key),
                      children: [
                        /* @__PURE__ */ n("span", { "aria-hidden": "true", children: Ae ? "▼" : "▶" }),
                        j.group.title,
                        ": ",
                        j.group.display,
                        " (",
                        j.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${j.group.key}`);
                }
                const L = j.row, le = r(L), me = (_ ?? []).includes(le), Ie = tt != null && tt === String(le);
                return /* @__PURE__ */ O(
                  "tr",
                  {
                    className: [
                      V || b !== "None" ? ge.clickable : "",
                      me ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": b !== "None" ? me : void 0,
                    onClick: V || b !== "None" ? (Ae) => {
                      zl(Ae.target) || (Ot(L), Wt(L));
                    } : void 0,
                    children: [
                      yt.map(({ key: Ae, column: Me }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: je(Me),
                          style: Me.frozen ? { left: re[Ae] } : void 0,
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
                          ) : ye(Me, L)
                        },
                        Ae
                      )),
                      he && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(Ce, { children: [
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Y(L), children: "Save" }),
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                      ] }) : /* @__PURE__ */ O(Ce, { children: [
                        I !== "None" && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Lt(L), children: "Edit" }),
                        C && /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => C(L), children: "Delete" })
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
      sr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: N,
        showPageSizeSelector: w,
        ariaLabel: se ? "Pagination (bottom)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Dl = "_wrap_2wcog_1", Ml = "_grid_2wcog_7", Cl = "_stacked_2wcog_13", El = "_item_2wcog_19", Il = "_empty_2wcog_25", Nn = {
  wrap: Dl,
  grid: Ml,
  stacked: Cl,
  item: El,
  empty: Il
};
function q2({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: m,
  loadingTemplate: s,
  isLoading: a = !1,
  showPageSizeSelector: l = !0,
  className: u,
  ariaLabel: d = "Data list"
}) {
  const [v, x] = X(1), [N, w] = X(t), b = e.length, _ = Math.max(1, Math.ceil(b / N)), f = Math.min(Math.max(1, v), _), h = $e(() => {
    const y = (f - 1) * N;
    return e.slice(y, y + N);
  }, [e, f, N]), $ = o ? Nn.grid : Nn.stacked;
  return /* @__PURE__ */ O("div", { className: [Nn.wrap, u].filter(Boolean).join(" "), "aria-label": d, children: [
    a && s != null ? s : b === 0 ? m ?? /* @__PURE__ */ n("div", { className: Nn.empty, children: c }) : /* @__PURE__ */ n("div", { className: $, children: h.map((y, E) => /* @__PURE__ */ n("div", { className: Nn.item, children: i ? i(y, E) : String(y) }, E)) }),
    /* @__PURE__ */ n(
      sr,
      {
        pageNumber: f,
        pageSize: N,
        count: b,
        pageSizeOptions: r,
        showPageSizeSelector: l,
        onPageChange: x,
        onPageSizeChange: (y) => {
          w(y), x(1);
        }
      }
    )
  ] });
}
const Al = "_label_6jw3b_1", Tl = {
  label: Al
}, K2 = He(
  function({ className: t, children: r, ...o }, i) {
    return /* @__PURE__ */ n("label", { ref: i, className: [Tl.label, t].filter(Boolean).join(" "), ...o, children: r });
  }
), jl = "_input_1hgze_1", Rl = "_invalid_1hgze_37", Ll = "_xs_1hgze_43", Pl = "_sm_1hgze_49", Bl = "_md_1hgze_55", Fl = "_lg_1hgze_61", Hl = "_xl_1hgze_67", Jn = {
  input: jl,
  invalid: Rl,
  xs: Ll,
  sm: Pl,
  md: Bl,
  lg: Fl,
  xl: Hl
}, U2 = He(function({ size: t = "md", invalid: r = !1, className: o, visible: i = !0, ...c }, m) {
  return i === !1 ? null : /* @__PURE__ */ n(
    "input",
    {
      ref: m,
      className: [Jn.input, Jn[t], r ? Jn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), ql = "_checkbox_1e35b_1", Kl = {
  checkbox: ql
}, W2 = He(function({ className: t, ...r }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Kl.checkbox, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Ul = {
  switch: "_switch_g0q9x_1"
}, Wl = He(function({ className: t, ...r }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [Ul.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Vl = "_trigger_23nf5_1", Xl = "_tooltip_23nf5_7", Gl = "_top_23nf5_34", Yl = "_right_23nf5_40", Zl = "_bottom_23nf5_46", Jl = "_left_23nf5_52", Ql = "_arrow_23nf5_58", Pn = {
  trigger: Vl,
  tooltip: Xl,
  "se-tooltip-in": "_se-tooltip-in_23nf5_1",
  top: Gl,
  right: Yl,
  bottom: Zl,
  left: Jl,
  arrow: Ql
};
function V2({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = Ye(), m = ae(null), [s, a] = X(!1), l = () => {
    m.current = window.setTimeout(() => a(!0), o);
  }, u = () => {
    m.current !== null && (window.clearTimeout(m.current), m.current = null), a(!1);
  };
  we(() => {
    if (!s) return;
    const v = (x) => {
      x.key === "Escape" && u();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [s]);
  const d = jn(t) ? qr(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        s ? c : null
      ].filter((v) => typeof v == "string").join(" ") || void 0
    }
  ) : t;
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
        s && /* @__PURE__ */ O(
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
const ei = "_dialog_1xe7o_1", ti = "_sm_1xe7o_72", ni = "_md_1xe7o_76", ri = "_lg_1xe7o_80", si = "_header_1xe7o_84", oi = "_title_1xe7o_94", ai = "_description_1xe7o_101", li = "_close_1xe7o_108", ii = "_body_1xe7o_136", ci = "_footer_1xe7o_148", Xt = {
  dialog: ei,
  "se-dialog-in": "_se-dialog-in_1xe7o_1",
  sm: ti,
  md: ni,
  lg: ri,
  header: si,
  title: oi,
  description: ai,
  close: li,
  body: ii,
  footer: ci
};
function X2({
  open: e,
  onClose: t,
  title: r,
  description: o,
  children: i,
  footer: c,
  size: m = "md",
  width: s,
  height: a,
  className: l
}) {
  const u = ae(null), d = Ye(), v = Ye(), x = ae(t);
  we(() => {
    x.current = t;
  });
  const N = ae(!1), w = ae(!1), b = H(() => {
    N.current || (N.current = !0, x.current());
  }, []), _ = H(() => {
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
        const h = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        f.showModal(), (f.querySelector('button[aria-label="Close dialog"]') ?? f.querySelector("button"))?.focus();
        const y = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const E = (p) => {
          p.preventDefault(), b();
        };
        return f.addEventListener("cancel", E), () => {
          f.removeEventListener("cancel", E), document.body.style.overflow = y, h?.focus({ preventScroll: !0 });
        };
      } else !e && f.open && (w.current = N.current, N.current = !1, f.close());
  }, [e, b]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ O(
    "dialog",
    {
      ref: u,
      className: [Xt.dialog, Xt[m], l].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: _,
      onClick: (f) => {
        f.target === u.current && b();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? d : void 0,
      "aria-describedby": o ? v : void 0,
      children: [
        r && /* @__PURE__ */ O("header", { className: Xt.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: d, className: Xt.title, children: r }),
            o && /* @__PURE__ */ n("p", { id: v, className: Xt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Xt.close,
              onClick: b,
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
const di = "_viewport_1dj88_1", ui = "_topLeft_1dj88_13", _i = "_topRight_1dj88_20", fi = "_bottomLeft_1dj88_25", pi = "_toast_1dj88_30", mi = "_leaving_1dj88_61", hi = "_info_1dj88_77", gi = "_success_1dj88_82", bi = "_warning_1dj88_87", xi = "_danger_1dj88_92", yi = "_content_1dj88_97", ki = "_title_1dj88_102", vi = "_description_1dj88_125", wi = "_dismiss_1dj88_132", $i = "_actions_1dj88_151", Ni = "_action_1dj88_151", Oi = "_cancel_1dj88_159", Si = "_progress_1dj88_195", mt = {
  viewport: di,
  topLeft: ui,
  topRight: _i,
  bottomLeft: fi,
  toast: pi,
  "se-toast-in": "_se-toast-in_1dj88_1",
  leaving: mi,
  "se-toast-out": "_se-toast-out_1dj88_1",
  info: hi,
  success: gi,
  warning: bi,
  danger: xi,
  content: yi,
  title: ki,
  description: vi,
  dismiss: wi,
  actions: $i,
  action: Ni,
  cancel: Oi,
  progress: Si,
  "se-toast-progress": "_se-toast-progress_1dj88_1"
}, Yr = Ur(null);
function G2() {
  const e = Kr(Yr);
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
function Y2({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, m] = X([]), [s, a] = X(!1), l = ae([]), u = ae(/* @__PURE__ */ new Map()), d = ae(!1), v = ae(0), x = (S) => {
    d.current = S, a(S);
  }, N = H((S) => {
    const g = u.current.get(S);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(0, g.remaining - (Date.now() - g.startedAt)));
  }, []), w = H((S) => {
    const g = u.current.get(S);
    g && (window.clearTimeout(g.timeoutId), u.current.delete(S));
  }, []), b = H(
    (S) => {
      w(S), m((g) => {
        const C = g.filter((P) => P.id !== S);
        return l.current = C, C;
      });
    },
    [w]
  ), _ = H(
    (S) => {
      const g = l.current.find((C) => C.id === S);
      !g || g.leaving || (g.onAutoClose?.(), b(S));
    },
    [b]
  ), f = H(
    (S) => {
      const g = u.current.get(S);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => _(S), g.remaining));
    },
    [_]
  ), h = H(() => {
    d.current || u.current.forEach((S, g) => N(g)), x(!0);
  }, [N]), $ = H(() => {
    u.current.forEach((S, g) => f(g)), x(!1);
  }, [f]);
  we(() => {
    if (!o) return;
    const S = () => {
      document.hidden ? h() : $();
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, [o, h, $]);
  const y = H(
    (S) => {
      const g = l.current.find((C) => C.id === S);
      !g || g.leaving || (g.onDismiss?.(), m((C) => {
        const P = C.map((A) => A.id === S ? { ...A, leaving: !0 } : A);
        return l.current = P, P;
      }), window.setTimeout(() => b(S), zi));
    },
    [b]
  ), E = H(
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
  ), p = H(
    (S) => {
      const g = l.current.find((P) => P.id === S.id), C = {
        id: S.id ?? ++v.current,
        title: S.title,
        description: S.description,
        severity: S.severity ?? "info",
        durationMs: S.durationMs ?? t,
        action: S.action,
        cancel: S.cancel,
        dismissible: S.dismissible ?? !0,
        closeOnClick: S.closeOnClick ?? !1,
        showProgress: S.showProgress ?? !1,
        position: S.position ?? r,
        onDismiss: S.onDismiss,
        onAutoClose: S.onAutoClose
      };
      m((P) => {
        const A = g ? P.map((T) => T.id === C.id ? { ...C, leaving: !1 } : T) : [...P, C];
        return l.current = A, A;
      }), g && w(C.id), E(C);
    },
    [t, r, E, w]
  ), k = $e(() => ({ toast: p }), [p]), M = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map((S) => S.position)])),
    [r, c]
  ), I = o ? h : void 0, D = o ? $ : void 0;
  return /* @__PURE__ */ O(Yr.Provider, { value: k, children: [
    e,
    M.map((S) => /* @__PURE__ */ n(
      "div",
      {
        className: [
          mt.viewport,
          mt[Di[S]],
          i
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: D,
        children: c.filter((g) => g.position === S).map((g) => /* @__PURE__ */ O(
          "div",
          {
            role: g.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
            "data-clickable": g.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[g.severity],
              g.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: g.closeOnClick ? () => y(g.id) : void 0,
            children: [
              /* @__PURE__ */ O("div", { className: mt.content, children: [
                /* @__PURE__ */ n("div", { className: mt.title, children: g.title }),
                g.description && /* @__PURE__ */ n("div", { className: mt.description, children: g.description }),
                (g.action || g.cancel) && /* @__PURE__ */ O("div", { className: mt.actions, children: [
                  g.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        g.action?.onClick?.(), y(g.id);
                      },
                      children: g.action.label
                    }
                  ),
                  g.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        g.cancel?.onClick?.(), y(g.id);
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
                  className: mt.dismiss,
                  onClick: () => y(g.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
                }
              ),
              g.showProgress && g.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: mt.progress,
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
const Mi = "_alert_1uhk1_1", Ci = "_xs_1uhk1_28", Ei = "_sm_1uhk1_38", Ii = "_lg_1uhk1_48", Ai = "_xl_1uhk1_58", Ti = "_primary_1uhk1_69", ji = "_secondary_1uhk1_74", Ri = "_light_1uhk1_79", Li = "_base_1uhk1_84", Pi = "_dark_1uhk1_89", Bi = "_info_1uhk1_94", Fi = "_success_1uhk1_99", Hi = "_warning_1uhk1_104", qi = "_danger_1uhk1_109", Ki = "_flat_1uhk1_116", Ui = "_outlined_1uhk1_123", Wi = "_filled_1uhk1_131", Vi = "_text_1uhk1_138", Xi = "_icon_1uhk1_181", Gi = "_content_1uhk1_192", Yi = "_title_1uhk1_197", Zi = "_body_1uhk1_203", Ji = "_dismiss_1uhk1_209", Et = {
  alert: Mi,
  xs: Ci,
  sm: Ei,
  lg: Ii,
  xl: Ai,
  primary: Ti,
  secondary: ji,
  light: Ri,
  base: Li,
  dark: Pi,
  info: Bi,
  success: Fi,
  warning: Hi,
  danger: qi,
  flat: Ki,
  outlined: Ui,
  filled: Wi,
  text: Vi,
  icon: Xi,
  content: Gi,
  title: Yi,
  body: Zi,
  dismiss: Ji,
  "shade-lighter": "_shade-lighter_1uhk1_341",
  "shade-light": "_shade-light_1uhk1_341",
  "shade-dark": "_shade-dark_1uhk1_343",
  "shade-darker": "_shade-darker_1uhk1_344"
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
function Z2({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: r,
  size: o = "md",
  title: i,
  icon: c,
  showIcon: m = !0,
  children: s,
  dismissible: a = !0,
  onDismiss: l,
  visible: u,
  onVisibleChange: d,
  className: v,
  ...x
}) {
  const [N, w] = X(!1);
  if (u === !1 || u === void 0 && N)
    return null;
  const b = () => {
    u === void 0 && w(!0), l?.(), d?.(!1);
  }, _ = e, f = dr(t, "filled"), h = r && r !== "default" ? `shade-${r}` : null, $ = c ?? (m ? /* @__PURE__ */ n(De, { name: Qi[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...x,
      className: [Et.alert, Et[_], Et[f], h ? Et[h] : null, Et[o], v].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          i && /* @__PURE__ */ n("div", { className: Et.title, children: i }),
          s && /* @__PURE__ */ n("div", { className: Et.body, children: s })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const ec = "_skeleton_1e8h1_1", tc = "_text_1e8h1_35", nc = "_circle_1e8h1_40", rc = "_rect_1e8h1_44", vr = {
  skeleton: ec,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1e8h1_1",
  text: tc,
  circle: nc,
  rect: rc
};
function J2({
  variant: e = "text",
  width: t,
  height: r,
  className: o
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (i.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [vr.skeleton, vr[e], o].filter(Boolean).join(" "),
      style: i
    }
  );
}
const sc = "_row_1tkam_1", oc = "_gapXs_1tkam_12", ac = "_gapSm_1tkam_17", lc = "_gapMd_1tkam_22", ic = "_gapLg_1tkam_27", cc = "_gapXl_1tkam_32", dc = "_start_1tkam_37", uc = "_center_1tkam_41", _c = "_end_1tkam_45", fc = "_stretch_1tkam_49", pc = "_baseline_1tkam_53", mc = "_noWrap_1tkam_109", hc = "_wrapReverse_1tkam_113", gc = "_gapRowXs_1tkam_117", bc = "_gapRowSm_1tkam_121", xc = "_gapRowMd_1tkam_125", yc = "_gapRowLg_1tkam_129", kc = "_gapRowXl_1tkam_133", ln = {
  row: sc,
  gapXs: oc,
  gapSm: ac,
  gapMd: lc,
  gapLg: ic,
  gapXl: cc,
  start: dc,
  center: uc,
  end: _c,
  stretch: fc,
  baseline: pc,
  "justify-start": "_justify-start_1tkam_57",
  "justify-center": "_justify-center_1tkam_61",
  "justify-end": "_justify-end_1tkam_65",
  "justify-between": "_justify-between_1tkam_69",
  "justify-around": "_justify-around_1tkam_73",
  "justify-evenly": "_justify-evenly_1tkam_77",
  "justify-normal": "_justify-normal_1tkam_81",
  "justify-left": "_justify-left_1tkam_85",
  "justify-right": "_justify-right_1tkam_89",
  "justify-stretch": "_justify-stretch_1tkam_93",
  "justify-space-between": "_justify-space-between_1tkam_97",
  "justify-space-around": "_justify-space-around_1tkam_101",
  "justify-space-evenly": "_justify-space-evenly_1tkam_105",
  noWrap: mc,
  wrapReverse: hc,
  gapRowXs: gc,
  gapRowSm: bc,
  gapRowMd: xc,
  gapRowLg: yc,
  gapRowXl: kc
}, vc = {
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
  return typeof e != "string" ? null : vc[e] ?? null;
}
function Nc(e) {
  return typeof e != "string" ? null : wc[e] ?? null;
}
function wr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Q2({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: m,
  ...s
}) {
  const a = $c(e), l = Nc(t), u = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, d = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...u ? { gap: u, "--dx-col-gap": u } : {},
    ...t != null && !l ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...m
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln.row,
        ln[r],
        ln[`justify-${o}`],
        wr(i) != null ? ln[wr(i)] : null,
        a ? ln[a] : null,
        l ? ln[l] : null,
        c
      ].filter(Boolean).join(" "),
      style: d,
      ...s
    }
  );
}
const Oc = "_column_1819k_1", Sc = "_Size1_1819k_15", zc = "_Size2_1819k_16", Dc = "_Size3_1819k_17", Mc = "_Size4_1819k_18", Cc = "_Size5_1819k_19", Ec = "_Size6_1819k_20", Ic = "_Size7_1819k_21", Ac = "_Size8_1819k_22", Tc = "_Size9_1819k_23", jc = "_Size10_1819k_24", Rc = "_Size11_1819k_25", Lc = "_Size12_1819k_26", Pc = "_Offset0_1819k_27", Bc = "_Offset1_1819k_28", Fc = "_Offset2_1819k_29", Hc = "_Offset3_1819k_30", qc = "_Offset4_1819k_31", Kc = "_Offset5_1819k_32", Uc = "_Offset6_1819k_33", Wc = "_Offset7_1819k_34", Vc = "_Offset8_1819k_35", Xc = "_Offset9_1819k_36", Gc = "_Offset10_1819k_37", Yc = "_Offset11_1819k_38", Zc = "_Offset12_1819k_39", Jc = "_OrderFirst_1819k_40", Qc = "_OrderLast_1819k_41", ed = "_Order0_1819k_42", td = "_Order1_1819k_43", nd = "_Order2_1819k_44", rd = "_Order3_1819k_45", sd = "_Order4_1819k_46", od = "_Order5_1819k_47", ad = "_Order6_1819k_48", ld = "_Order7_1819k_49", id = "_Order8_1819k_50", cd = "_Order9_1819k_51", dd = "_Order10_1819k_52", ud = "_Order11_1819k_53", _d = "_Order12_1819k_54", fd = "_xsSize1_1819k_57", pd = "_xsSize2_1819k_58", md = "_xsSize3_1819k_59", hd = "_xsSize4_1819k_60", gd = "_xsSize5_1819k_61", bd = "_xsSize6_1819k_62", xd = "_xsSize7_1819k_63", yd = "_xsSize8_1819k_64", kd = "_xsSize9_1819k_65", vd = "_xsSize10_1819k_66", wd = "_xsSize11_1819k_67", $d = "_xsSize12_1819k_68", Nd = "_xsOffset0_1819k_69", Od = "_xsOffset1_1819k_70", Sd = "_xsOffset2_1819k_71", zd = "_xsOffset3_1819k_72", Dd = "_xsOffset4_1819k_73", Md = "_xsOffset5_1819k_74", Cd = "_xsOffset6_1819k_75", Ed = "_xsOffset7_1819k_76", Id = "_xsOffset8_1819k_77", Ad = "_xsOffset9_1819k_78", Td = "_xsOffset10_1819k_79", jd = "_xsOffset11_1819k_80", Rd = "_xsOffset12_1819k_81", Ld = "_xsOrderFirst_1819k_82", Pd = "_xsOrderLast_1819k_83", Bd = "_xsOrder0_1819k_84", Fd = "_xsOrder1_1819k_85", Hd = "_xsOrder2_1819k_86", qd = "_xsOrder3_1819k_87", Kd = "_xsOrder4_1819k_88", Ud = "_xsOrder5_1819k_89", Wd = "_xsOrder6_1819k_90", Vd = "_xsOrder7_1819k_91", Xd = "_xsOrder8_1819k_92", Gd = "_xsOrder9_1819k_93", Yd = "_xsOrder10_1819k_94", Zd = "_xsOrder11_1819k_95", Jd = "_xsOrder12_1819k_96", Qd = "_smSize1_1819k_100", eu = "_smSize2_1819k_101", tu = "_smSize3_1819k_102", nu = "_smSize4_1819k_103", ru = "_smSize5_1819k_104", su = "_smSize6_1819k_105", ou = "_smSize7_1819k_106", au = "_smSize8_1819k_107", lu = "_smSize9_1819k_108", iu = "_smSize10_1819k_109", cu = "_smSize11_1819k_110", du = "_smSize12_1819k_111", uu = "_smOffset0_1819k_112", _u = "_smOffset1_1819k_113", fu = "_smOffset2_1819k_114", pu = "_smOffset3_1819k_115", mu = "_smOffset4_1819k_116", hu = "_smOffset5_1819k_117", gu = "_smOffset6_1819k_118", bu = "_smOffset7_1819k_119", xu = "_smOffset8_1819k_120", yu = "_smOffset9_1819k_121", ku = "_smOffset10_1819k_122", vu = "_smOffset11_1819k_123", wu = "_smOffset12_1819k_124", $u = "_smOrderFirst_1819k_125", Nu = "_smOrderLast_1819k_126", Ou = "_smOrder0_1819k_127", Su = "_smOrder1_1819k_128", zu = "_smOrder2_1819k_129", Du = "_smOrder3_1819k_130", Mu = "_smOrder4_1819k_131", Cu = "_smOrder5_1819k_132", Eu = "_smOrder6_1819k_133", Iu = "_smOrder7_1819k_134", Au = "_smOrder8_1819k_135", Tu = "_smOrder9_1819k_136", ju = "_smOrder10_1819k_137", Ru = "_smOrder11_1819k_138", Lu = "_smOrder12_1819k_139", Pu = "_mdSize1_1819k_143", Bu = "_mdSize2_1819k_144", Fu = "_mdSize3_1819k_145", Hu = "_mdSize4_1819k_146", qu = "_mdSize5_1819k_147", Ku = "_mdSize6_1819k_148", Uu = "_mdSize7_1819k_149", Wu = "_mdSize8_1819k_150", Vu = "_mdSize9_1819k_151", Xu = "_mdSize10_1819k_152", Gu = "_mdSize11_1819k_153", Yu = "_mdSize12_1819k_154", Zu = "_mdOffset0_1819k_155", Ju = "_mdOffset1_1819k_156", Qu = "_mdOffset2_1819k_157", e1 = "_mdOffset3_1819k_158", t1 = "_mdOffset4_1819k_159", n1 = "_mdOffset5_1819k_160", r1 = "_mdOffset6_1819k_161", s1 = "_mdOffset7_1819k_162", o1 = "_mdOffset8_1819k_163", a1 = "_mdOffset9_1819k_164", l1 = "_mdOffset10_1819k_165", i1 = "_mdOffset11_1819k_166", c1 = "_mdOffset12_1819k_167", d1 = "_mdOrderFirst_1819k_168", u1 = "_mdOrderLast_1819k_169", _1 = "_mdOrder0_1819k_170", f1 = "_mdOrder1_1819k_171", p1 = "_mdOrder2_1819k_172", m1 = "_mdOrder3_1819k_173", h1 = "_mdOrder4_1819k_174", g1 = "_mdOrder5_1819k_175", b1 = "_mdOrder6_1819k_176", x1 = "_mdOrder7_1819k_177", y1 = "_mdOrder8_1819k_178", k1 = "_mdOrder9_1819k_179", v1 = "_mdOrder10_1819k_180", w1 = "_mdOrder11_1819k_181", $1 = "_mdOrder12_1819k_182", N1 = "_lgSize1_1819k_186", O1 = "_lgSize2_1819k_187", S1 = "_lgSize3_1819k_188", z1 = "_lgSize4_1819k_189", D1 = "_lgSize5_1819k_190", M1 = "_lgSize6_1819k_191", C1 = "_lgSize7_1819k_192", E1 = "_lgSize8_1819k_193", I1 = "_lgSize9_1819k_194", A1 = "_lgSize10_1819k_195", T1 = "_lgSize11_1819k_196", j1 = "_lgSize12_1819k_197", R1 = "_lgOffset0_1819k_198", L1 = "_lgOffset1_1819k_199", P1 = "_lgOffset2_1819k_200", B1 = "_lgOffset3_1819k_201", F1 = "_lgOffset4_1819k_202", H1 = "_lgOffset5_1819k_203", q1 = "_lgOffset6_1819k_204", K1 = "_lgOffset7_1819k_205", U1 = "_lgOffset8_1819k_206", W1 = "_lgOffset9_1819k_207", V1 = "_lgOffset10_1819k_208", X1 = "_lgOffset11_1819k_209", G1 = "_lgOffset12_1819k_210", Y1 = "_lgOrderFirst_1819k_211", Z1 = "_lgOrderLast_1819k_212", J1 = "_lgOrder0_1819k_213", Q1 = "_lgOrder1_1819k_214", e_ = "_lgOrder2_1819k_215", t_ = "_lgOrder3_1819k_216", n_ = "_lgOrder4_1819k_217", r_ = "_lgOrder5_1819k_218", s_ = "_lgOrder6_1819k_219", o_ = "_lgOrder7_1819k_220", a_ = "_lgOrder8_1819k_221", l_ = "_lgOrder9_1819k_222", i_ = "_lgOrder10_1819k_223", c_ = "_lgOrder11_1819k_224", d_ = "_lgOrder12_1819k_225", u_ = "_xlSize1_1819k_229", __ = "_xlSize2_1819k_230", f_ = "_xlSize3_1819k_231", p_ = "_xlSize4_1819k_232", m_ = "_xlSize5_1819k_233", h_ = "_xlSize6_1819k_234", g_ = "_xlSize7_1819k_235", b_ = "_xlSize8_1819k_236", x_ = "_xlSize9_1819k_237", y_ = "_xlSize10_1819k_238", k_ = "_xlSize11_1819k_239", v_ = "_xlSize12_1819k_240", w_ = "_xlOffset0_1819k_241", $_ = "_xlOffset1_1819k_242", N_ = "_xlOffset2_1819k_243", O_ = "_xlOffset3_1819k_244", S_ = "_xlOffset4_1819k_245", z_ = "_xlOffset5_1819k_246", D_ = "_xlOffset6_1819k_247", M_ = "_xlOffset7_1819k_248", C_ = "_xlOffset8_1819k_249", E_ = "_xlOffset9_1819k_250", I_ = "_xlOffset10_1819k_251", A_ = "_xlOffset11_1819k_252", T_ = "_xlOffset12_1819k_253", j_ = "_xlOrderFirst_1819k_254", R_ = "_xlOrderLast_1819k_255", L_ = "_xlOrder0_1819k_256", P_ = "_xlOrder1_1819k_257", B_ = "_xlOrder2_1819k_258", F_ = "_xlOrder3_1819k_259", H_ = "_xlOrder4_1819k_260", q_ = "_xlOrder5_1819k_261", K_ = "_xlOrder6_1819k_262", U_ = "_xlOrder7_1819k_263", W_ = "_xlOrder8_1819k_264", V_ = "_xlOrder9_1819k_265", X_ = "_xlOrder10_1819k_266", G_ = "_xlOrder11_1819k_267", Y_ = "_xlOrder12_1819k_268", Z_ = "_xxSize1_1819k_272", J_ = "_xxSize2_1819k_273", Q_ = "_xxSize3_1819k_274", ef = "_xxSize4_1819k_275", tf = "_xxSize5_1819k_276", nf = "_xxSize6_1819k_277", rf = "_xxSize7_1819k_278", sf = "_xxSize8_1819k_279", of = "_xxSize9_1819k_280", af = "_xxSize10_1819k_281", lf = "_xxSize11_1819k_282", cf = "_xxSize12_1819k_283", df = "_xxOffset0_1819k_284", uf = "_xxOffset1_1819k_285", _f = "_xxOffset2_1819k_286", ff = "_xxOffset3_1819k_287", pf = "_xxOffset4_1819k_288", mf = "_xxOffset5_1819k_289", hf = "_xxOffset6_1819k_290", gf = "_xxOffset7_1819k_291", bf = "_xxOffset8_1819k_292", xf = "_xxOffset9_1819k_293", yf = "_xxOffset10_1819k_294", kf = "_xxOffset11_1819k_295", vf = "_xxOffset12_1819k_296", wf = "_xxOrderFirst_1819k_297", $f = "_xxOrderLast_1819k_298", Nf = "_xxOrder0_1819k_299", Of = "_xxOrder1_1819k_300", Sf = "_xxOrder2_1819k_301", zf = "_xxOrder3_1819k_302", Df = "_xxOrder4_1819k_303", Mf = "_xxOrder5_1819k_304", Cf = "_xxOrder6_1819k_305", Ef = "_xxOrder7_1819k_306", If = "_xxOrder8_1819k_307", Af = "_xxOrder9_1819k_308", Tf = "_xxOrder10_1819k_309", jf = "_xxOrder11_1819k_310", Rf = "_xxOrder12_1819k_311", Bn = {
  column: Oc,
  Size1: Sc,
  Size2: zc,
  Size3: Dc,
  Size4: Mc,
  Size5: Cc,
  Size6: Ec,
  Size7: Ic,
  Size8: Ac,
  Size9: Tc,
  Size10: jc,
  Size11: Rc,
  Size12: Lc,
  Offset0: Pc,
  Offset1: Bc,
  Offset2: Fc,
  Offset3: Hc,
  Offset4: qc,
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
  Order3: rd,
  Order4: sd,
  Order5: od,
  Order6: ad,
  Order7: ld,
  Order8: id,
  Order9: cd,
  Order10: dd,
  Order11: ud,
  Order12: _d,
  xsSize1: fd,
  xsSize2: pd,
  xsSize3: md,
  xsSize4: hd,
  xsSize5: gd,
  xsSize6: bd,
  xsSize7: xd,
  xsSize8: yd,
  xsSize9: kd,
  xsSize10: vd,
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
  xsOffset9: Ad,
  xsOffset10: Td,
  xsOffset11: jd,
  xsOffset12: Rd,
  xsOrderFirst: Ld,
  xsOrderLast: Pd,
  xsOrder0: Bd,
  xsOrder1: Fd,
  xsOrder2: Hd,
  xsOrder3: qd,
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
  smSize5: ru,
  smSize6: su,
  smSize7: ou,
  smSize8: au,
  smSize9: lu,
  smSize10: iu,
  smSize11: cu,
  smSize12: du,
  smOffset0: uu,
  smOffset1: _u,
  smOffset2: fu,
  smOffset3: pu,
  smOffset4: mu,
  smOffset5: hu,
  smOffset6: gu,
  smOffset7: bu,
  smOffset8: xu,
  smOffset9: yu,
  smOffset10: ku,
  smOffset11: vu,
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
  smOrder8: Au,
  smOrder9: Tu,
  smOrder10: ju,
  smOrder11: Ru,
  smOrder12: Lu,
  mdSize1: Pu,
  mdSize2: Bu,
  mdSize3: Fu,
  mdSize4: Hu,
  mdSize5: qu,
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
  mdOffset3: e1,
  mdOffset4: t1,
  mdOffset5: n1,
  mdOffset6: r1,
  mdOffset7: s1,
  mdOffset8: o1,
  mdOffset9: a1,
  mdOffset10: l1,
  mdOffset11: i1,
  mdOffset12: c1,
  mdOrderFirst: d1,
  mdOrderLast: u1,
  mdOrder0: _1,
  mdOrder1: f1,
  mdOrder2: p1,
  mdOrder3: m1,
  mdOrder4: h1,
  mdOrder5: g1,
  mdOrder6: b1,
  mdOrder7: x1,
  mdOrder8: y1,
  mdOrder9: k1,
  mdOrder10: v1,
  mdOrder11: w1,
  mdOrder12: $1,
  lgSize1: N1,
  lgSize2: O1,
  lgSize3: S1,
  lgSize4: z1,
  lgSize5: D1,
  lgSize6: M1,
  lgSize7: C1,
  lgSize8: E1,
  lgSize9: I1,
  lgSize10: A1,
  lgSize11: T1,
  lgSize12: j1,
  lgOffset0: R1,
  lgOffset1: L1,
  lgOffset2: P1,
  lgOffset3: B1,
  lgOffset4: F1,
  lgOffset5: H1,
  lgOffset6: q1,
  lgOffset7: K1,
  lgOffset8: U1,
  lgOffset9: W1,
  lgOffset10: V1,
  lgOffset11: X1,
  lgOffset12: G1,
  lgOrderFirst: Y1,
  lgOrderLast: Z1,
  lgOrder0: J1,
  lgOrder1: Q1,
  lgOrder2: e_,
  lgOrder3: t_,
  lgOrder4: n_,
  lgOrder5: r_,
  lgOrder6: s_,
  lgOrder7: o_,
  lgOrder8: a_,
  lgOrder9: l_,
  lgOrder10: i_,
  lgOrder11: c_,
  lgOrder12: d_,
  xlSize1: u_,
  xlSize2: __,
  xlSize3: f_,
  xlSize4: p_,
  xlSize5: m_,
  xlSize6: h_,
  xlSize7: g_,
  xlSize8: b_,
  xlSize9: x_,
  xlSize10: y_,
  xlSize11: k_,
  xlSize12: v_,
  xlOffset0: w_,
  xlOffset1: $_,
  xlOffset2: N_,
  xlOffset3: O_,
  xlOffset4: S_,
  xlOffset5: z_,
  xlOffset6: D_,
  xlOffset7: M_,
  xlOffset8: C_,
  xlOffset9: E_,
  xlOffset10: I_,
  xlOffset11: A_,
  xlOffset12: T_,
  xlOrderFirst: j_,
  xlOrderLast: R_,
  xlOrder0: L_,
  xlOrder1: P_,
  xlOrder2: B_,
  xlOrder3: F_,
  xlOrder4: H_,
  xlOrder5: q_,
  xlOrder6: K_,
  xlOrder7: U_,
  xlOrder8: W_,
  xlOrder9: V_,
  xlOrder10: X_,
  xlOrder11: G_,
  xlOrder12: Y_,
  xxSize1: Z_,
  xxSize2: J_,
  xxSize3: Q_,
  xxSize4: ef,
  xxSize5: tf,
  xxSize6: nf,
  xxSize7: rf,
  xxSize8: sf,
  xxSize9: of,
  xxSize10: af,
  xxSize11: lf,
  xxSize12: cf,
  xxOffset0: df,
  xxOffset1: uf,
  xxOffset2: _f,
  xxOffset3: ff,
  xxOffset4: pf,
  xxOffset5: mf,
  xxOffset6: hf,
  xxOffset7: gf,
  xxOffset8: bf,
  xxOffset9: xf,
  xxOffset10: yf,
  xxOffset11: kf,
  xxOffset12: vf,
  xxOrderFirst: wf,
  xxOrderLast: $f,
  xxOrder0: Nf,
  xxOrder1: Of,
  xxOrder2: Sf,
  xxOrder3: zf,
  xxOrder4: Df,
  xxOrder5: Mf,
  xxOrder6: Cf,
  xxOrder7: Ef,
  xxOrder8: If,
  xxOrder9: Af,
  xxOrder10: Tf,
  xxOrder11: jf,
  xxOrder12: Rf
}, Lf = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Pf(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(`Column property ${e} value should be between 1 and 12.`);
}
function Bf(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(`Column property ${e} value should be between 0 and 12.`);
}
function Ff(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(`Column property ${e} value should be between 0 and 12 or first/last.`);
}
function Hf(e, t, r) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Ff(r, t), `${e}Order${t}`);
}
function ek({ className: e, style: t, ...r }) {
  const o = [Bn.column], i = { ...t };
  for (const [D, S, g, C] of Lf) {
    const P = r[S], A = r[g], T = r[C];
    if (P != null) {
      Pf(S, P);
      const q = Bn[`${D}Size${P}`];
      q && o.push(q);
    }
    if (A != null) {
      Bf(g, A);
      const q = Bn[`${D}Offset${A}`];
      q && o.push(q);
    }
    if (T != null) {
      const q = Bn[Hf(D, T, C)];
      q && o.push(q);
    }
  }
  const {
    size: c,
    offset: m,
    sizeXs: s,
    offsetXs: a,
    sizeSm: l,
    offsetSm: u,
    sizeMd: d,
    offsetMd: v,
    sizeLg: x,
    offsetLg: N,
    sizeXl: w,
    offsetXl: b,
    sizeXx: _,
    offsetXx: f,
    order: h,
    orderXs: $,
    orderSm: y,
    orderMd: E,
    orderLg: p,
    orderXl: k,
    orderXx: M,
    ...I
  } = r;
  return /* @__PURE__ */ n("div", { className: [...o, e].filter(Boolean).join(" "), style: i, ...I });
}
const qf = "_stack_1yc1g_1", Kf = "_gapXs_1yc1g_29", Uf = "_gapSm_1yc1g_33", Wf = "_gapMd_1yc1g_37", Vf = "_gapLg_1yc1g_41", Xf = "_gapXl_1yc1g_45", cn = {
  stack: qf,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: Kf,
  gapSm: Uf,
  gapMd: Wf,
  gapLg: Vf,
  gapXl: Xf,
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
}, Gf = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Yf(e) {
  return typeof e != "string" ? null : Gf[e] ?? null;
}
function $r(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function tk({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: i,
  justify: c,
  className: m,
  style: s,
  ...a
}) {
  const l = Yf(o), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !l ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...s
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        cn.stack,
        cn[`dir-${u}`],
        $r(r) !== "wrap" ? cn[`wrap-${$r(r)}`] : null,
        i != null ? cn[`align-${i}`] : null,
        c != null ? cn[`justify-${c}`] : null,
        l ? cn[l] : null,
        m
      ].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const Zf = "_layout_iqkjp_1", Jf = "_row_iqkjp_7", Qf = "_grid_iqkjp_21", ep = "_gridRight_iqkjp_27", tp = "_gridHeader_iqkjp_31", np = "_gridFooter_iqkjp_36", rp = "_gridContents_iqkjp_41", sp = "_gridBody_iqkjp_45", Pt = {
  layout: Zf,
  row: Jf,
  grid: Qf,
  gridRight: ep,
  gridHeader: tp,
  gridFooter: np,
  gridContents: rp,
  gridBody: sp
}, op = "_footer_8i7bm_1", ap = "_sticky_8i7bm_9", Nr = {
  footer: op,
  sticky: ap
};
function lp({ sticky: e = !1, className: t, children: r, ...o }) {
  return /* @__PURE__ */ n(
    "footer",
    {
      className: [Nr.footer, e ? Nr.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: r
    }
  );
}
const ip = "_header_khq7g_1", cp = "_sticky_khq7g_9", Or = {
  header: ip,
  sticky: cp
};
function dp({ sticky: e = !1, className: t, children: r, ...o }) {
  return /* @__PURE__ */ n(
    "header",
    {
      className: [Or.header, e ? Or.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: r
    }
  );
}
const up = "_sidebar_1fx86_1", _p = "_left_1fx86_9", fp = "_right_1fx86_13", pp = "_start_1fx86_18", mp = "_end_1fx86_22", hp = "_fullHeight_1fx86_28", gp = "_collapsed_1fx86_32", bp = "_responsive_1fx86_40", xp = "_overlay_1fx86_48", yp = "_mask_1fx86_76", en = {
  sidebar: up,
  left: _p,
  right: fp,
  start: pp,
  end: mp,
  fullHeight: hp,
  collapsed: gp,
  responsive: bp,
  overlay: xp,
  mask: yp
};
function kp({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
  overlay: o = !1,
  fullHeight: i = !1,
  onClose: c,
  className: m,
  children: s,
  ...a
}) {
  return we(() => {
    if (!o || !t || c == null) return;
    const l = (u) => {
      u.key === "Escape" && c();
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [o, t, c]), /* @__PURE__ */ O(Ce, { children: [
    o && t ? /* @__PURE__ */ n("div", { className: `${en.mask} se-layout-mask`, "aria-hidden": "true", onClick: c }) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          en.sidebar,
          en[e],
          t ? null : en.collapsed,
          r ? en.responsive : null,
          o ? [en.overlay, "se-sidebar--overlay"] : null,
          i ? en.fullHeight : null,
          m
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: s
      }
    )
  ] });
}
function nk(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(Ce, { children: e.children });
  const { className: t, children: r, ...o } = e, i = [], c = [], m = [], s = [], a = [], l = [];
  ns.forEach(r, (v) => {
    if (!jn(v)) {
      m.push(v);
      return;
    }
    if (v.type === dp)
      i.push(v);
    else if (v.type === lp)
      c.push(v);
    else if (v.type === kp) {
      const x = v, N = x.props.position;
      l.push(x), (N === "right" || N === "end" ? a : s).push(x);
    } else
      m.push(v);
  });
  const u = l.length === 1 && l[0]?.props.fullHeight === !0 ? l[0] : null, d = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const v = d ? a : s;
    return /* @__PURE__ */ O(
      "div",
      {
        className: [Pt.layout, Pt.grid, d ? Pt.gridRight : null, t].filter(Boolean).join(" "),
        ...o,
        children: [
          i.length > 0 && /* @__PURE__ */ n("div", { className: Pt.gridHeader, children: i }),
          /* @__PURE__ */ O("div", { className: Pt.gridContents, children: [
            v,
            /* @__PURE__ */ n("div", { className: Pt.gridBody, children: m })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: Pt.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ O("div", { className: [Pt.layout, t].filter(Boolean).join(" "), ...o, children: [
    i,
    /* @__PURE__ */ O("div", { className: Pt.row, children: [
      s,
      m,
      a
    ] }),
    c
  ] });
}
const vp = "_body_13emj_1", wp = "_bare_13emj_10", Sr = {
  body: vp,
  bare: wp
};
function rk({ as: e = "main", padded: t = !0, className: r, children: o, ...i }) {
  return /* @__PURE__ */ n(
    e,
    {
      className: [Sr.body, t ? null : Sr.bare, r].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}
const $p = "_toggle_1qjb4_1", Np = {
  toggle: $p
};
function sk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: r,
  type: o = "button",
  children: i,
  ...c
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: o,
      "aria-label": t,
      className: [Np.toggle, r].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(De, { name: e, size: 20 })
    }
  );
}
const Op = "_track_zebo1_1", Sp = "_bar_zebo1_31", zp = "_primary_zebo1_39", Dp = "_success_zebo1_43", Mp = "_warning_zebo1_47", Cp = "_danger_zebo1_51", Ep = "_indeterminate_zebo1_101", Ip = "_circular_zebo1_115", Ap = "_fill_zebo1_155", ht = {
  track: Op,
  "linear-xs": "_linear-xs_zebo1_11",
  "linear-sm": "_linear-sm_zebo1_15",
  "linear-md": "_linear-md_zebo1_19",
  "linear-lg": "_linear-lg_zebo1_23",
  "linear-xl": "_linear-xl_zebo1_27",
  bar: Sp,
  primary: zp,
  success: Dp,
  warning: Mp,
  danger: Cp,
  "shade-lighter": "_shade-lighter_zebo1_85",
  "shade-light": "_shade-light_zebo1_85",
  "shade-dark": "_shade-dark_zebo1_93",
  "shade-darker": "_shade-darker_zebo1_97",
  indeterminate: Ep,
  "se-progress-slide": "_se-progress-slide_zebo1_1",
  circular: Ip,
  "circular-xs": "_circular-xs_zebo1_121",
  "circular-sm": "_circular-sm_zebo1_126",
  "circular-md": "_circular-md_zebo1_131",
  "circular-lg": "_circular-lg_zebo1_136",
  "circular-xl": "_circular-xl_zebo1_141",
  fill: Ap,
  "se-progress-spin": "_se-progress-spin_zebo1_1"
};
function ok({
  value: e = 0,
  max: t = 100,
  severity: r = "primary",
  shade: o,
  indeterminate: i = !1,
  variant: c = "linear",
  size: m = "md",
  className: s,
  visible: a = !0,
  ...l
}) {
  if (a === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? u / t * 100 : 0;
  if (c === "circular") {
    const x = typeof m == "string", N = 2, w = 10.5, b = 2 * Math.PI * w, _ = b * (i ? 0.75 : 1), f = i ? 0 : b * (1 - d / 100);
    return /* @__PURE__ */ O(
      "svg",
      {
        width: x ? void 0 : m,
        height: x ? void 0 : m,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": l["aria-label"],
        "aria-labelledby": l["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...l,
        className: [
          ht.circular,
          ht[r],
          o && o !== "default" ? ht[`shade-${o}`] : null,
          x ? ht[`circular-${m}`] : null,
          i ? ht.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n("circle", { className: ht.track, cx: 12, cy: 12, r: w, strokeWidth: N }),
          /* @__PURE__ */ n(
            "circle",
            {
              className: ht.fill,
              cx: 12,
              cy: 12,
              r: w,
              strokeWidth: N,
              strokeDasharray: `${_} ${b}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        ht.track,
        ht[r],
        v ? ht[v] : null,
        typeof m == "string" ? ht[`linear-${m}`] : null,
        i ? ht.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: ht.bar,
          style: i ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
function ak(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Tp(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Zr(e) {
  const [t, r] = X(() => Tp(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    r(o.matches);
    const i = (c) => r(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const jp = "_wrapper_1x82r_1", Rp = {
  wrapper: jp
}, Jr = "dx-theme";
function Lp(e) {
  const t = e === void 0 ? Jr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(t);
      return r === "light" || r === "dark" || r === "system" ? r : void 0;
    } catch {
      return;
    }
}
function Pp(e, t) {
  const r = e === void 0 ? Jr : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, t);
    } catch {
    }
}
function lk({
  value: e,
  defaultValue: t,
  defaultTheme: r,
  storageKey: o,
  onChange: i,
  label: c = "Dark mode",
  className: m
}) {
  const s = Zr("(prefers-color-scheme: dark)"), [a, l] = X(void 0), u = e ?? a ?? Lp(o) ?? t ?? r ?? "system", d = u === "system" ? s ? "dark" : "light" : u;
  we(() => {
    if (u === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = u;
  }, [u]);
  const v = (x) => {
    const N = x.target.checked ? "dark" : "light";
    e === void 0 && l(N), Pp(o, N), i?.(N);
  };
  return /* @__PURE__ */ O("label", { className: [Rp.wrapper, m].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ n(Wl, { checked: d === "dark", onChange: v })
  ] });
}
const Bp = "_avatar_14xlu_1", Fp = "_xs_14xlu_12", Hp = "_sm_14xlu_18", qp = "_md_14xlu_24", Kp = "_lg_14xlu_30", Up = "_xl_14xlu_36", Wp = "_initials_14xlu_42", Vp = "_image_14xlu_57", Xp = "_status_14xlu_64", Gp = "_online_14xlu_84", Yp = "_offline_14xlu_88", Zp = "_away_14xlu_92", dn = {
  avatar: Bp,
  xs: Fp,
  sm: Hp,
  md: qp,
  lg: Kp,
  xl: Up,
  initials: Wp,
  image: Vp,
  status: Xp,
  online: Gp,
  offline: Yp,
  away: Zp
}, Xn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Jp(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Qp(e) {
  let t = 0;
  for (let r = 0; r < e.length; r += 1)
    t = t * 31 + e.charCodeAt(r) >>> 0;
  return Xn[t % Xn.length] ?? Xn[0];
}
function ik({
  name: e,
  src: t,
  alt: r,
  size: o = "md",
  status: i,
  className: c
}) {
  const m = $e(() => e ? Jp(e) : "?", [e]), s = $e(() => e ? Qp(e) : Xn[0], [e]), a = t != null && r === "", l = r ?? e ?? "avatar", u = i ? `${l}, ${i}` : l, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: dn.image,
      src: t,
      alt: a ? "" : i ? u : l
    }
  ) : /* @__PURE__ */ n("span", { "aria-hidden": "true", className: dn.initials, style: { background: s }, children: m });
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
const em = "_root_1nhdv_1", tm = "_left_1nhdv_6", nm = "_right_1nhdv_7", rm = "_panel_1nhdv_12", sm = "_bottom_1nhdv_20", om = "_tabList_1nhdv_24", am = "_underline_1nhdv_53", lm = "_pills_1nhdv_72", im = "_tab_1nhdv_24", cm = "_active_1nhdv_113", dm = "_disabled_1nhdv_139", Bt = {
  root: em,
  left: tm,
  right: nm,
  panel: rm,
  bottom: sm,
  tabList: om,
  underline: am,
  pills: lm,
  tab: im,
  active: cm,
  disabled: dm
};
function ck({
  items: e,
  value: t,
  defaultValue: r,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: m
}) {
  const s = Ye(), a = ae(null), [l, u] = X(r ?? e[0]?.key ?? ""), d = t ?? l, v = c === "left" || c === "right", x = (b) => {
    u(b), o?.(b);
  }, N = (b) => {
    const _ = e.filter(($) => !$.disabled), f = _.findIndex(($) => $.key === d);
    let h = -1;
    b.key === "ArrowRight" || v && b.key === "ArrowDown" ? h = (f + 1) % _.length : b.key === "ArrowLeft" || v && b.key === "ArrowUp" ? h = (f - 1 + _.length) % _.length : b.key === "Home" ? h = 0 : b.key === "End" && (h = _.length - 1), h >= 0 && (b.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[h]?.key ?? "")}"]`
    )?.focus(), x(_[h]?.key ?? ""));
  }, w = e.find((b) => b.key === d);
  return /* @__PURE__ */ O("div", { className: [Bt.root, Bt[c], m].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n(
      "div",
      {
        ref: a,
        role: "tablist",
        className: [Bt.tabList, Bt[i], Bt[c]].filter(Boolean).join(" "),
        onKeyDown: N,
        children: e.map((b) => {
          const _ = b.key === d;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${s}-tab-${b.key}`,
              "data-tab-key": b.key,
              "aria-selected": _,
              "aria-controls": `${s}-panel-${b.key}`,
              tabIndex: _ ? 0 : -1,
              disabled: b.disabled,
              className: [
                Bt.tab,
                _ ? Bt.active : null,
                b.disabled ? Bt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => x(b.key),
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
        id: `${s}-panel-${w.key}`,
        "aria-labelledby": `${s}-tab-${w.key}`,
        className: Bt.panel,
        children: w.content
      }
    )
  ] });
}
const um = "_root_ph7ff_1", _m = "_item_ph7ff_9", fm = "_heading_ph7ff_13", pm = "_trigger_ph7ff_17", mm = "_disabled_ph7ff_34", hm = "_title_ph7ff_48", gm = "_chevron_ph7ff_52", bm = "_open_ph7ff_59", xm = "_content_ph7ff_63", Ft = {
  root: um,
  item: _m,
  heading: fm,
  trigger: pm,
  disabled: mm,
  title: hm,
  chevron: gm,
  open: bm,
  content: xm
};
function dk({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const m = Ye(), [s, a] = X(o ?? []), l = r ?? s, u = (d) => {
    const v = l.includes(d) ? l.filter((x) => x !== d) : t ? [...l, d] : [d];
    a(v), i?.(v);
  };
  return /* @__PURE__ */ n("div", { className: [Ft.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const v = l.includes(d.key), x = `${m}-panel-${d.key}`, N = `${m}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: Ft.item, children: [
      /* @__PURE__ */ n("h3", { className: Ft.heading, children: /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          id: N,
          "aria-expanded": v,
          "aria-controls": x,
          disabled: d.disabled,
          className: [
            Ft.trigger,
            d.disabled ? Ft.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: Ft.title, children: d.title }),
            /* @__PURE__ */ n("span", { className: [Ft.chevron, v ? Ft.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 12 }) })
          ]
        }
      ) }),
      /* @__PURE__ */ n(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": N,
          hidden: !v,
          className: Ft.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const ym = "_textarea_we46m_1", km = "_invalid_we46m_25", vm = "_xs_we46m_31", wm = "_sm_we46m_36", $m = "_md_we46m_41", Nm = "_lg_we46m_46", Om = "_xl_we46m_51", Fn = {
  textarea: ym,
  invalid: km,
  xs: vm,
  sm: wm,
  md: $m,
  lg: Nm,
  xl: Om,
  "resize-none": "_resize-none_we46m_56",
  "resize-vertical": "_resize-vertical_we46m_60",
  "resize-horizontal": "_resize-horizontal_we46m_64",
  "resize-both": "_resize-both_we46m_68"
}, uk = He(function({ size: t = "md", resize: r = "none", invalid: o = !1, className: i, ...c }, m) {
  return /* @__PURE__ */ n(
    "textarea",
    {
      ref: m,
      className: [
        Fn.textarea,
        Fn[t],
        Fn[`resize-${r}`],
        o ? Fn.invalid : null,
        i
      ].filter(Boolean).join(" "),
      "aria-invalid": o || void 0,
      ...c
    }
  );
}), Sm = "_typography_1oak1_1", zm = "_h1_1oak1_36", Dm = "_h2_1oak1_42", Mm = "_h3_1oak1_48", Cm = "_h4_1oak1_54", Em = "_h5_1oak1_60", Im = "_h6_1oak1_66", Am = "_button_1oak1_96", Tm = "_caption_1oak1_103", jm = "_overline_1oak1_109", Qn = {
  typography: Sm,
  "display-1": "_display-1_1oak1_5",
  "display-2": "_display-2_1oak1_10",
  "display-3": "_display-3_1oak1_15",
  "display-4": "_display-4_1oak1_20",
  "display-5": "_display-5_1oak1_25",
  "display-6": "_display-6_1oak1_30",
  h1: zm,
  h2: Dm,
  h3: Mm,
  h4: Cm,
  h5: Em,
  h6: Im,
  "subtitle-1": "_subtitle-1_1oak1_72",
  "subtitle-2": "_subtitle-2_1oak1_78",
  "body-1": "_body-1_1oak1_84",
  "body-2": "_body-2_1oak1_89",
  button: Am,
  caption: Tm,
  overline: jm,
  "align-left": "_align-left_1oak1_118",
  "align-center": "_align-center_1oak1_122",
  "align-right": "_align-right_1oak1_126",
  "align-justify": "_align-justify_1oak1_130"
}, Rm = {
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
}, Lm = {
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
}, Pm = {
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
}, Bm = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, _k = He(function({
  textStyle: t = "Body1",
  tagName: r = "Auto",
  textAlign: o,
  text: i,
  visible: c = !0,
  className: m,
  children: s,
  ...a
}, l) {
  if (c === !1) return null;
  const u = r === "Auto" ? Rm[t] : Pm[r];
  return /* @__PURE__ */ n(
    u,
    {
      ref: l,
      className: [
        Qn.typography,
        Qn[Lm[t]],
        o ? Qn[Bm[o]] : null,
        m
      ].filter(Boolean).join(" "),
      ...a,
      children: i ?? s
    }
  );
}), Fm = "_root_1n255_1", Hm = "_trigger_1n255_9", qm = "_invalid_1n255_40", Km = "_placeholder_1n255_46", Um = "_label_1n255_53", Wm = "_chevron_1n255_59", Vm = "_chevronOpen_1n255_69", Xm = "_menu_1n255_73", Gm = "_option_1n255_88", Ym = "_disabled_1n255_99", Zm = "_active_1n255_103", Jm = "_selected_1n255_104", Qm = "_header_1n255_114", eh = "_xs_1n255_121", th = "_sm_1n255_127", nh = "_md_1n255_133", rh = "_lg_1n255_139", sh = "_xl_1n255_145", it = {
  root: Fm,
  trigger: Hm,
  invalid: qm,
  placeholder: Km,
  label: Um,
  chevron: Wm,
  chevronOpen: Vm,
  menu: Xm,
  option: Gm,
  disabled: Ym,
  active: Zm,
  selected: Jm,
  header: Qm,
  xs: eh,
  sm: th,
  md: nh,
  lg: rh,
  xl: sh
}, oh = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function fk({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: m = !1,
  disabled: s = !1,
  className: a,
  ...l
}) {
  const u = Ye(), d = `${u}-listbox`, v = ae(null), x = ae(null), [N, w] = X(r), [b, _] = X(!1), f = t ?? N, h = e.map((g, C) => g.label === "" || g.disabled ? -1 : C).filter((g) => g >= 0), $ = e.findIndex((g) => g.value === f), [y, E] = X(
    () => h.includes(0) ? 0 : h[0] ?? -1
  ), p = H(() => {
    if (s) return;
    const g = $ >= 0 && h.includes($) ? $ : h[0];
    E(g ?? -1), _(!0);
  }, [s, $, h]), k = H(() => {
    _(!1), x.current?.focus();
  }, []);
  we(() => {
    if (!b) return;
    const g = (C) => {
      v.current && !v.current.contains(C.target) && _(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [b]);
  const M = (g) => {
    w(g), o?.(g), _(!1), x.current?.focus();
  }, I = (g) => {
    if (h.length === 0) return;
    const C = h.includes(y) ? h.indexOf(y) : 0, P = h[(C + g + h.length) % h.length];
    P != null && E(P);
  }, D = (g) => {
    if (!b) {
      g.key === "ArrowDown" && (g.preventDefault(), p());
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
        g.preventDefault(), h[0] != null && E(h[0]);
        break;
      case "End":
        g.preventDefault(), h[h.length - 1] != null && E(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), y >= 0 && e[y] && h.includes(y) && M(e[y]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), k();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, S = e.find((g) => g.value === f);
  return /* @__PURE__ */ O("div", { ref: v, className: [it.root, a].filter(Boolean).join(" "), onKeyDown: D, children: [
    /* @__PURE__ */ O(
      "button",
      {
        ref: x,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": d,
        "aria-invalid": m || void 0,
        disabled: s,
        className: [
          it.trigger,
          it[c],
          b ? it.open : null,
          m ? it.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => b ? _(!1) : p(),
        ...l,
        children: [
          /* @__PURE__ */ n("span", { className: S ? it.label : it.placeholder, children: S ? S.label : i }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [it.chevron, b ? it.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: oh },
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
        "aria-activedescendant": y >= 0 ? `${u}-option-${y}` : void 0,
        className: it.menu,
        children: e.map(
          (g, C) => g.label === "" ? /* @__PURE__ */ n("div", { className: it.header, role: "presentation", children: g.value }, g.value) : /* @__PURE__ */ n(
            "div",
            {
              id: `${u}-option-${C}`,
              role: "option",
              "aria-selected": g.value === f,
              "aria-disabled": g.disabled || void 0,
              className: [
                it.option,
                C === y ? it.active : null,
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
  ] });
}
const ah = "_root_1n38r_1", lh = "_wrap_1n38r_9", ih = "_input_1n38r_26", ch = "_invalid_1n38r_31", dh = "_clear_1n38r_57", uh = "_menu_1n38r_82", _h = "_option_1n38r_97", fh = "_disabled_1n38r_108", ph = "_active_1n38r_112", mh = "_empty_1n38r_122", hh = "_xs_1n38r_128", gh = "_sm_1n38r_135", bh = "_md_1n38r_142", xh = "_lg_1n38r_149", yh = "_xl_1n38r_156", Dt = {
  root: ah,
  wrap: lh,
  input: ih,
  invalid: ch,
  clear: dh,
  menu: uh,
  option: _h,
  disabled: fh,
  active: ph,
  empty: mh,
  xs: hh,
  sm: gh,
  md: bh,
  lg: xh,
  xl: yh
}, kh = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function pk({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: m = "md",
  invalid: s = !1,
  disabled: a = !1,
  filter: l = kh,
  className: u,
  ...d
}) {
  const v = Ye(), x = `${v}-listbox`, N = ae(null), w = ae(null), [b, _] = X(r), [f, h] = X(!1), $ = t ?? b, y = $e(
    () => $.trim() === "" ? [...e] : e.filter((T) => l(T, $)),
    [e, $, l]
  ), E = y.map((T, q) => T.disabled ? -1 : q).filter((T) => T >= 0), [p, k] = X(-1), M = (T) => {
    _(T), o?.(T);
  }, I = (T) => {
    M(T.label), i?.(T.value, T), h(!1);
  }, D = (T) => {
    if (E.length === 0) return;
    const q = E.includes(p) ? E.indexOf(p) : T === 1 ? -1 : 0, V = E[(q + T + E.length) % E.length];
    V != null && k(V);
  }, S = (T) => {
    a || (M(T.target.value), h(!0), k(-1));
  }, g = () => {
    a || $ !== "" && h(!0);
  }, C = (T) => {
    N.current && !N.current.contains(T.relatedTarget) && h(!1);
  }, P = (T) => {
    if (!a)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), f ? D(1) : (h(!0), k(E[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), f && D(-1);
          break;
        case "Enter":
          T.preventDefault(), f && p >= 0 && y[p] && I(y[p]);
          break;
        case "Escape":
          T.preventDefault(), h(!1);
          break;
        case "Tab":
          f && p >= 0 && y[p] && I(y[p]), h(!1);
          break;
      }
  }, A = () => {
    M(""), k(-1), h(!0), w.current?.focus();
  };
  return /* @__PURE__ */ O("div", { ref: N, className: [Dt.root, u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: [Dt.wrap, Dt[m], s ? Dt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: w,
          type: "text",
          role: "combobox",
          "aria-expanded": f,
          "aria-controls": x,
          "aria-autocomplete": "list",
          "aria-activedescendant": f && p >= 0 ? `${v}-option-${p}` : void 0,
          "aria-invalid": s || void 0,
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
          onClick: A,
          children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
        }
      )
    ] }),
    f && /* @__PURE__ */ n("div", { id: x, role: "listbox", className: Dt.menu, children: y.length === 0 ? /* @__PURE__ */ n("div", { className: Dt.empty, children: "No matches" }) : y.map((T, q) => /* @__PURE__ */ n(
      "div",
      {
        id: `${v}-option-${q}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": T.disabled || void 0,
        className: [
          Dt.option,
          q === p ? Dt.active : null,
          T.disabled ? Dt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          T.disabled || I(T);
        },
        onMouseDown: (V) => {
          V.preventDefault(), T.disabled || I(T);
        },
        onMouseEnter: () => {
          T.disabled || k(q);
        },
        children: T.label
      },
      T.value
    )) })
  ] });
}
const vh = "_box_1r6oj_1", wh = "_option_1r6oj_12", $h = "_disabled_1r6oj_23", Nh = "_selected_1r6oj_27", Oh = "_active_1r6oj_33", On = {
  box: vh,
  option: wh,
  disabled: $h,
  selected: Nh,
  active: Oh
};
function mk({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: m,
  ...s
}) {
  const a = Ye(), [l, u] = X(() => {
    const y = r;
    return y == null ? [] : Array.isArray(y) ? [...y] : [y];
  }), d = t == null ? l : Array.isArray(t) ? t : [t], v = e.findIndex((y) => !y.disabled), [x, N] = X(() => v >= 0 ? v : 0), w = ae(""), b = ae(null), _ = (y) => {
    u(y), i?.(o ? y : y[0] ?? "");
  }, f = e.map((y, E) => y.disabled ? -1 : E).filter((y) => y >= 0), h = (y) => {
    const E = e[y];
    if (!(!E || E.disabled))
      if (N(y), o) {
        const p = d.includes(E.value) ? d.filter((k) => k !== E.value) : [...d, E.value];
        _(p);
      } else
        _([E.value]);
  }, $ = (y) => {
    if (f.length === 0) return;
    const E = f.includes(x) ? x : f[0];
    let p = -1;
    if (y.key === "ArrowDown")
      p = f[(f.indexOf(E) + 1) % f.length];
    else if (y.key === "ArrowUp")
      p = f[(f.indexOf(E) - 1 + f.length) % f.length];
    else if (y.key === "Home")
      p = f[0];
    else if (y.key === "End")
      p = f[f.length - 1];
    else if (y.key === "Enter" || y.key === " ") {
      y.preventDefault(), h(E);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(y.key)) {
      y.preventDefault();
      const k = (w.current + y.key).toLowerCase();
      w.current = k, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        w.current = "";
      }, 500);
      const M = [...f, ...f], I = f.indexOf(E) + 1, D = M.slice(I).find(
        (S) => e[S]?.label.toLowerCase().startsWith(k)
      );
      D != null && N(D);
      return;
    }
    p >= 0 && (y.preventDefault(), N(p), o || _([e[p]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[x] ? `${a}-option-${x}` : void 0,
      style: m,
      className: [On.box, c].filter(Boolean).join(" "),
      onKeyDown: $,
      ...s,
      children: e.map((y, E) => {
        const p = d.includes(y.value), k = E === x;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${E}`,
            role: "option",
            "aria-selected": p,
            "aria-disabled": y.disabled || void 0,
            className: [
              On.option,
              p ? On.selected : null,
              k ? On.active : null,
              y.disabled ? On.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => h(E),
            children: y.label
          },
          y.value
        );
      })
    }
  );
}
const Sh = "_group_br8r4_1", zh = "_legend_br8r4_8", Dh = "_list_br8r4_16", Mh = "_item_br8r4_25", Ch = "_disabled_br8r4_32", Eh = "_label_br8r4_37", Ih = "_checkbox_br8r4_48", tn = {
  group: Sh,
  legend: zh,
  list: Dh,
  item: Mh,
  disabled: Ch,
  label: Eh,
  checkbox: Ih
};
function hk({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: o,
  legend: i,
  name: c,
  className: m
}) {
  const [s, a] = X(() => [...r]), l = t ?? s, u = (d, v) => {
    const x = v ? [...l, d] : l.filter((N) => N !== d);
    a(x), o?.(x);
  };
  return /* @__PURE__ */ O("fieldset", { className: [tn.group, m].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: tn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: tn.list, children: e.map((d) => {
      const v = l.includes(d.value);
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
                checked: v,
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
const Ah = "_group_t2uos_1", Th = "_legend_t2uos_8", jh = "_list_t2uos_16", Rh = "_item_t2uos_25", Lh = "_disabled_t2uos_32", Ph = "_label_t2uos_37", Bh = "_radio_t2uos_48", nn = {
  group: Ah,
  legend: Th,
  list: jh,
  item: Rh,
  disabled: Lh,
  label: Ph,
  radio: Bh
};
function gk({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  legend: i,
  name: c,
  className: m
}) {
  const [s, a] = X(r), l = t ?? s, u = (d) => {
    a(d), o?.(d);
  };
  return /* @__PURE__ */ O("fieldset", { className: [nn.group, m].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: nn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: nn.list, children: e.map((d) => {
      const v = d.value === l;
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
                checked: v,
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
const Fh = "_bar_9r6ow_1", Hh = "_vertical_9r6ow_12", qh = "_option_9r6ow_17", Kh = "_selected_9r6ow_38", Uh = "_sm_9r6ow_55", Wh = "_md_9r6ow_61", Vh = "_lg_9r6ow_67", un = {
  bar: Fh,
  vertical: Hh,
  option: qh,
  selected: Kh,
  sm: Uh,
  md: Wh,
  lg: Vh
};
function zr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function bk(e) {
  const {
    options: t = [],
    value: r,
    defaultValue: o,
    multiple: i,
    orientation: c = "horizontal",
    onChange: m,
    size: s = "md",
    className: a,
    ...l
  } = e, u = i ?? !1, [d, v] = X(
    o ?? (u ? [] : t[0]?.value)
  ), x = r ?? d, N = i === !0 || i === void 0 && Array.isArray(x), w = (_) => {
    if (!N) {
      v(_), m?.(_);
      return;
    }
    const f = zr(x), h = f.includes(_) ? f.filter(($) => $ !== _) : [...f, _];
    v(h), m?.(h);
  }, b = (_) => N ? zr(x).includes(_) : x === _;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        un.bar,
        un[s],
        c === "vertical" ? un.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...l,
      children: t.map((_) => {
        const f = b(_.value);
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
const Xh = "_toggle_19izf_1", Gh = "_pressed_19izf_29", Yh = "_sm_19izf_41", Zh = "_md_19izf_47", Jh = "_lg_19izf_53", Qh = "_fullWidth_19izf_59", Hn = {
  toggle: Xh,
  pressed: Gh,
  sm: Yh,
  md: Zh,
  lg: Jh,
  fullWidth: Qh
}, xk = He(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: o,
    size: i = "md",
    fullWidth: c = !1,
    className: m,
    type: s = "button",
    ...a
  }, l) {
    const [u, d] = X(r), v = t ?? u, x = () => {
      const N = !v;
      d(N), o?.(N);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: l,
        type: s,
        "aria-pressed": v,
        className: [
          Hn.toggle,
          Hn[i],
          v ? Hn.pressed : null,
          c ? Hn.fullWidth : null,
          m
        ].filter(Boolean).join(" "),
        onClick: x,
        ...a
      }
    );
  }
), eg = "_root_1vkmu_1", tg = "_action_1vkmu_196", ng = "_filled_1vkmu_216", rg = "_caret_1vkmu_220", sg = "_flat_1vkmu_241", og = "_outlined_1vkmu_249", ag = "_text_1vkmu_257", lg = "_sm_1vkmu_347", ig = "_md_1vkmu_359", cg = "_lg_1vkmu_371", dg = "_menu_1vkmu_383", ug = "_item_1vkmu_396", _g = "_disabled_1vkmu_417", fg = "_active_1vkmu_421", pg = "_danger_1vkmu_430", wt = {
  root: eg,
  "style-primary": "_style-primary_1vkmu_11",
  "style-secondary": "_style-secondary_1vkmu_21",
  "style-base": "_style-base_1vkmu_31",
  "style-light": "_style-light_1vkmu_41",
  "style-dark": "_style-dark_1vkmu_51",
  "style-info": "_style-info_1vkmu_61",
  "style-success": "_style-success_1vkmu_71",
  "style-warning": "_style-warning_1vkmu_81",
  "style-danger": "_style-danger_1vkmu_91",
  action: tg,
  filled: ng,
  caret: rg,
  flat: sg,
  outlined: og,
  text: ag,
  "shade-lighter": "_shade-lighter_1vkmu_274",
  "shade-light": "_shade-light_1vkmu_274",
  "shade-dark": "_shade-dark_1vkmu_284",
  "shade-darker": "_shade-darker_1vkmu_288",
  sm: lg,
  md: ig,
  lg: cg,
  menu: dg,
  item: ug,
  disabled: _g,
  active: fg,
  danger: pg
};
function yk({
  label: e,
  onClick: t,
  items: r = [],
  severity: o = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: m = "md",
  disabled: s = !1,
  className: a,
  ...l
}) {
  const d = `${Ye()}-menu`, v = ae(null), x = ae(null), N = ae([]), [w, b] = X(!1), [_, f] = X(-1), h = $e(
    () => r.map((D, S) => D.disabled ? -1 : S).filter((D) => D >= 0),
    [r]
  ), $ = H(() => {
    s || (f(h[0] ?? -1), b(!0));
  }, [s, h]), y = H(() => {
    b(!1), x.current?.focus();
  }, []);
  we(() => {
    if (!w) return;
    const D = (S) => {
      v.current && !v.current.contains(S.target) && b(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [w]);
  const E = ae(w);
  we(() => {
    const D = E.current;
    if (E.current = w, !w || D) return;
    const S = h.includes(_) ? _ : h[0] ?? -1;
    S >= 0 && N.current[S]?.focus();
  }, [w, _, h]);
  const p = (D) => {
    const S = r[D];
    !S || S.disabled || (S.onClick?.(), b(!1), x.current?.focus());
  }, k = (D) => {
    if (h.length === 0) return;
    const S = h.includes(_) ? h.indexOf(_) : D === 1 ? -1 : 0, g = h[(S + D + h.length) % h.length];
    g != null && (f(g), N.current[g]?.focus());
  }, M = (D) => {
    const S = D === "first" ? h[0] : h[h.length - 1];
    S != null && (f(S), N.current[S]?.focus());
  }, I = (D) => {
    switch (D.key) {
      case "ArrowDown":
        D.preventDefault(), k(1);
        break;
      case "ArrowUp":
        D.preventDefault(), k(-1);
        break;
      case "Home":
        D.preventDefault(), M("first");
        break;
      case "End":
        D.preventDefault(), M("last");
        break;
      case "Escape":
        D.preventDefault(), y();
        break;
      case "Tab":
        b(!1);
        break;
    }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: v,
      className: [
        wt.root,
        wt[m],
        wt[`style-${o}`],
        wt[dr(i, "filled")],
        c !== "default" ? wt[`shade-${c}`] : null,
        a
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: wt.action,
            disabled: s,
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
            disabled: s,
            onClick: () => w ? b(!1) : $(),
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
            children: r.map((D, S) => /* @__PURE__ */ n(
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
                onClick: () => p(S),
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
const mg = "_textbox_yfceg_1", hg = "_invalid_yfceg_31", gg = "_xs_yfceg_37", bg = "_sm_yfceg_43", xg = "_md_yfceg_49", yg = "_lg_yfceg_55", kg = "_xl_yfceg_61", er = {
  textbox: mg,
  invalid: hg,
  xs: gg,
  sm: bg,
  md: xg,
  lg: yg,
  xl: kg
}, kk = He(function({ size: t = "md", invalid: r = !1, className: o, type: i = "text", ...c }, m) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: m,
      type: i,
      className: [er.textbox, er[t], r ? er.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), vg = "_wrapper_1smbu_1", wg = "_input_1smbu_8", $g = "_invalid_1smbu_38", Ng = "_toggle_1smbu_44", Og = "_xs_1smbu_79", Sg = "_sm_1smbu_85", zg = "_md_1smbu_91", Dg = "_lg_1smbu_97", Mg = "_xl_1smbu_103", Sn = {
  wrapper: vg,
  input: wg,
  invalid: $g,
  toggle: Ng,
  xs: Og,
  sm: Sg,
  md: zg,
  lg: Dg,
  xl: Mg
}, vk = He(function({
  size: t = "md",
  invalid: r = !1,
  className: o,
  disabled: i,
  showLabel: c = "Show password",
  hideLabel: m = "Hide password",
  ...s
}, a) {
  const [l, u] = X(!1);
  return /* @__PURE__ */ O("div", { className: Sn.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: a,
        type: l ? "text" : "password",
        disabled: i,
        className: [Sn.input, Sn[t], r ? Sn.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...s
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Sn.toggle,
        "aria-pressed": l,
        "aria-label": l ? m : c,
        disabled: i,
        onClick: () => u((d) => !d),
        children: /* @__PURE__ */ n(De, { name: l ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), Cg = "_mask_1acmv_1", Eg = "_invalid_1acmv_31", Ig = "_xs_1acmv_37", Ag = "_sm_1acmv_43", Tg = "_md_1acmv_49", jg = "_lg_1acmv_55", Rg = "_xl_1acmv_61", tr = {
  mask: Cg,
  invalid: Eg,
  xs: Ig,
  sm: Ag,
  md: Tg,
  lg: jg,
  xl: Rg
};
function Dr(e, t) {
  let r = e.replace(/\D/g, ""), o = "";
  for (const i of t)
    if (i === "#") {
      if (r.length === 0) break;
      o += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      o += i;
    else
      break;
  return o;
}
const wk = He(function({
  size: t = "md",
  invalid: r = !1,
  mask: o,
  value: i,
  defaultValue: c = "",
  onChange: m,
  className: s,
  onKeyDown: a,
  ...l
}, u) {
  const [d, v] = X(c ?? ""), x = i !== void 0, N = x ? i ?? "" : d, w = (f) => {
    const h = Dr(f, o);
    return x || v(h), m?.(h), h;
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
          const h = f.currentTarget.selectionStart ?? N.length, $ = N[h - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            f.preventDefault();
            const y = N.replace(/\D/g, "");
            w(Dr(y.slice(0, -1), o));
          }
        }
        a?.(f);
      },
      className: [tr.mask, tr[t], r ? tr.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), Lg = "_wrapper_pn38o_1", Pg = "_input_pn38o_8", Bg = "_invalid_pn38o_38", Fg = "_button_pn38o_44", Hg = "_up_pn38o_76", qg = "_down_pn38o_81", Kg = "_xs_pn38o_86", Ug = "_sm_pn38o_92", Wg = "_md_pn38o_98", Vg = "_lg_pn38o_104", Xg = "_xl_pn38o_110", Gt = {
  wrapper: Lg,
  input: Pg,
  invalid: Bg,
  button: Fg,
  up: Hg,
  down: qg,
  xs: Kg,
  sm: Ug,
  md: Wg,
  lg: Vg,
  xl: Xg
};
function or(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Gg(e) {
  let t = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !r ? (r = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function Qr(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Yg(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function Zg(e, t, r, o, i) {
  const m = or(e) ?? r ?? 0;
  let s;
  return r === void 0 ? s = m + t * i : t > 0 ? s = r + Math.ceil((m - r + 1e-9) / i) * i : s = r + Math.floor((m - r - 1e-9) / i) * i, Qr(s, r, o);
}
const $k = He(function({
  size: t = "md",
  invalid: r = !1,
  className: o,
  disabled: i,
  value: c,
  defaultValue: m,
  onChange: s,
  min: a,
  max: l,
  step: u = 1,
  incrementLabel: d = "Increment",
  decrementLabel: v = "Decrement",
  onBlur: x,
  onKeyDown: N,
  ...w
}, b) {
  const [_, f] = X(m != null ? String(m) : ""), h = c !== void 0, $ = h ? c == null ? "" : String(c) : _, y = (D) => {
    h || f(D), s?.(or(D));
  }, E = (D) => {
    h || f(String(D)), s?.(D);
  }, p = (D) => {
    i || E(Zg($, D, a, l, u));
  }, k = (D) => {
    y(Gg(D.target.value));
  }, M = (D) => {
    D.key === "ArrowUp" ? (D.preventDefault(), p(1)) : D.key === "ArrowDown" && (D.preventDefault(), p(-1)), N?.(D);
  }, I = (D) => {
    const S = or($);
    S === null ? (h || f(""), s?.(null)) : E(Qr(Yg(S, a, u), a, l)), x?.(D);
  };
  return /* @__PURE__ */ O("div", { className: Gt.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: b,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: $,
        disabled: i,
        onChange: k,
        onKeyDown: M,
        onBlur: I,
        className: [Gt.input, Gt[t], r ? Gt.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
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
        onClick: () => p(1),
        children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Gt.button, Gt.down].join(" "),
        "aria-label": v,
        disabled: i,
        onClick: () => p(-1),
        children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), Oe = {
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
function bt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function ar(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let r = t[1];
  return r.length === 3 && (r = r.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function Qg({ r: e, g: t, b: r }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(r)}`;
}
function e0({ r: e, g: t, b: r }) {
  const o = e / 255, i = t / 255, c = r / 255, m = Math.max(o, i, c), s = Math.min(o, i, c), a = m - s;
  let l = 0;
  return a !== 0 && (m === o ? l = (i - c) / a % 6 : m === i ? l = (c - o) / a + 2 : l = (o - i) / a + 4, l *= 60, l < 0 && (l += 360)), {
    h: l,
    s: m === 0 ? 0 : a / m,
    v: m
  };
}
function _n({ h: e, s: t, v: r }) {
  const o = r * t, i = e / 60, c = o * (1 - Math.abs(i % 2 - 1));
  let m = 0, s = 0, a = 0;
  i < 1 ? (m = o, s = c) : i < 2 ? (m = c, s = o) : i < 3 ? (s = o, a = c) : i < 4 ? (s = c, a = o) : i < 5 ? (m = c, a = o) : (m = o, a = c);
  const l = r - o;
  return {
    r: Math.round((m + l) * 255),
    g: Math.round((s + l) * 255),
    b: Math.round((a + l) * 255),
    a: 1
  };
}
function t0(e) {
  const t = ar(e);
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
function Mr({ r: e, g: t, b: r, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(o * 100) / 100})`;
}
const Nk = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: i = Jg,
  showButton: c = !1,
  showArrow: m = !0,
  disabled: s = !1,
  invalid: a = !1,
  placeholder: l = "",
  size: u = "md",
  tabIndex: d = 0,
  className: v,
  onChange: x,
  onValueChange: N,
  onOpen: w,
  onClose: b
}) => {
  const _ = ae(null), f = ae(null), h = ae(null), $ = ae(null), y = ae(null), E = Ye(), p = ae(null), k = $e(
    () => t0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, I] = X(!1), [D, S] = X(null), g = D ?? k, C = $e(() => e0(g), [g]), P = H(
    (W) => {
      const z = Mr(W);
      x?.(z), N?.(z);
    },
    [x, N]
  ), A = H(
    (W, z) => {
      S(W), z && !c && P(W);
    },
    [c, P]
  ), T = H(() => {
    I(!1), S(null), b?.(), f.current?.focus();
  }, [b]), q = H(() => {
    s || (S(k), I(!0), w?.());
  }, [s, k, w]), V = H(() => {
    M ? T() : q();
  }, [M, T, q]), J = H(
    (W, z) => {
      const F = h.current;
      if (!F) return C;
      const ne = F.getBoundingClientRect(), _e = bt((W - ne.left) / ne.width, 0, 1), re = bt(1 - (z - ne.top) / ne.height, 0, 1);
      return { h: C.h, s: _e, v: re };
    },
    [C]
  ), Z = H(
    (W, z) => {
      if (!z) return 0;
      const F = z.getBoundingClientRect();
      return bt((W - F.left) / F.width, 0, 1);
    },
    []
  ), ee = (W) => {
    if (s) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), p.current = "sat";
    const z = J(W.clientX, W.clientY);
    A({ ..._n(z), a: g.a }, !0);
  }, ue = (W) => {
    if (p.current !== "sat") return;
    W.preventDefault();
    const z = J(W.clientX, W.clientY);
    A({ ..._n(z), a: g.a }, !0);
  }, ie = (W) => {
    if (s) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), p.current = "hue";
    const z = Z(W.clientX, $.current);
    A({ ..._n({ ...C, h: z * 360 }), a: g.a }, !0);
  }, U = (W) => {
    if (p.current !== "hue") return;
    W.preventDefault();
    const z = Z(W.clientX, $.current);
    A({ ..._n({ ...C, h: z * 360 }), a: g.a }, !0);
  }, R = (W) => {
    if (s) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), p.current = "alpha";
    const z = Z(W.clientX, y.current);
    A({ ...g, a: z }, !0);
  }, te = (W) => {
    if (p.current !== "alpha") return;
    W.preventDefault();
    const z = Z(W.clientX, y.current);
    A({ ...g, a: z }, !0);
  }, G = () => {
    p.current = null;
  }, ce = H(
    (W, z) => {
      const F = { h: C.h, s: bt(C.s + W, 0, 1), v: bt(C.v + z, 0, 1) };
      A({ ..._n(F), a: g.a }, !0);
    },
    [C, g.a, A]
  ), oe = H(
    (W) => {
      const z = (C.h + W + 360) % 360;
      A({ ..._n({ ...C, h: z }), a: g.a }, !0);
    },
    [C, g.a, A]
  ), xe = H(
    (W) => {
      A({ ...g, a: bt(g.a + W, 0, 1) }, !0);
    },
    [g, A]
  ), ve = (W) => {
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
        W.preventDefault(), T();
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
        W.preventDefault(), T();
        break;
    }
  }, ke = (W, z) => {
    if (W === "hex") {
      const re = ar(z);
      re && A({ ...re, a: g.a }, !0);
      return;
    }
    const F = z.replace(/[^\d.]/g, ""), ne = Number.parseFloat(F);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const re = F.includes(".") ? bt(ne, 0, 1) : bt(ne / 100, 0, 1);
      A({ ...g, a: re }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    A({ ...g, [W]: bt(ne, 0, _e[W]) }, !0);
  }, We = () => {
    D && (P(D), S(null), I(!1), b?.(), f.current?.focus());
  };
  we(() => {
    if (!M) return;
    const W = (z) => {
      _.current && !_.current.contains(z.target) && T();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [M, T]), we(() => {
    if (!M) return;
    const W = (z) => {
      z.key === "Escape" && T();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [M, T]);
  const be = u === "xs" ? Oe["dx-colorpicker-trigger-xs"] : u === "sm" ? Oe["dx-colorpicker-trigger-sm"] : u === "lg" ? Oe["dx-colorpicker-trigger-lg"] : u === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], Ze = Mr(g), Ve = Qg(g), Le = { x: C.s * 100, y: (1 - C.v) * 100 }, tt = C.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: h,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(C.s * 100),
        "aria-valuetext": `Saturation ${Math.round(C.s * 100)}%, value ${Math.round(C.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : d,
        className: Oe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${C.h}, 100%, 50%)`
        },
        onKeyDown: ve,
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
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : d,
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
        ref: y,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : d,
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
    r && /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-rgba"], children: [
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
            onChange: (W) => ke("hex", W.target.value)
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
            onChange: (W) => ke("r", W.target.value)
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
            onChange: (W) => ke("g", W.target.value)
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
            onChange: (W) => ke("b", W.target.value)
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
            onChange: (W) => ke("a", W.target.value)
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
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const z = ar(W);
          c ? A({ ...z, a: g.a }, !1) : (S(null), P({ ...z, a: g.a }), I(!1), b?.(), f.current?.focus());
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
        v
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: f,
            type: "button",
            className: [Oe["dx-colorpicker-trigger"], be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": M,
            "aria-controls": E,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: d,
            onClick: V,
            onKeyDown: (W) => {
              W.key === "Escape" && M && (W.preventDefault(), T());
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
              m && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 14 }) })
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
}, n0 = 42;
function xt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${xt(e.month)}-${xt(e.day)}`;
}
function r0(e, t) {
  const r = pt(e);
  return t ? `${r} ${xt(e.hour)}:${xt(e.minute)}:${xt(e.second)}` : r;
}
function lr(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, m = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const a = new Date(r, o - 1, i, c, m, s);
  return a.getFullYear() !== r || a.getMonth() !== o - 1 || a.getDate() !== i ? null : { year: r, month: o, day: i, hour: c, minute: m, second: s };
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
function Ht(e, t) {
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
  const r = new Date(e.year, e.month - 1 + t, 1), o = r.getFullYear(), i = r.getMonth() + 1, c = new Date(o, i, 0).getDate();
  return {
    year: o,
    month: i,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Cr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Er = {
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
  tt: (e, t, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, s0 = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], o0 = ["y", "M", "d", "H", "m", "s"];
function Kn(e, t, r) {
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
    let m = !1;
    for (const a of s0)
      if (t.startsWith(a, c)) {
        i += Er[a](e, o, r), c += a.length, m = !0;
        break;
      }
    if (m) continue;
    const s = t[c];
    if (o0.includes(s)) {
      i += Er[s](e, o, r), c += 1;
      continue;
    }
    i += s, c += 1;
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
  const r = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let s = null;
    for (const a of a0)
      if (t.startsWith(a, i)) {
        s = a;
        break;
      }
    if (s) {
      const a = e.slice(o, o + s.length);
      if (!/^\d+$/.test(a)) return null;
      const l = Number(a);
      switch (s) {
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
      o += s.length, i += s.length;
      continue;
    }
    if (e[o] !== t[i]) return null;
    o += 1, i += 1;
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
  const m = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return m.getFullYear() !== c.year || m.getMonth() !== c.month - 1 || m.getDate() !== c.day ? null : c;
}
function zn(e, t) {
  const r = lr(e);
  return r || l0(e, t);
}
function i0(e, t, r) {
  return t && pt(e) < pt(t) ? t : r && pt(e) > pt(r) ? r : e;
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
const Ok = He(function({
  size: t = "md",
  invalid: r = !1,
  value: o,
  defaultValue: i,
  format: c = "yyyy-MM-dd",
  min: m,
  max: s,
  showTime: a = !1,
  showButton: l = !0,
  allowClear: u = !1,
  inline: d = !1,
  disabledDates: v,
  locale: x = "en-US",
  onChange: N,
  onValueChange: w,
  onOpen: b,
  onClose: _,
  disabled: f,
  readOnly: h,
  placeholder: $,
  ariaLabel: y,
  triggerLabel: E,
  clearLabel: p,
  tabIndex: k,
  className: M,
  onBlur: I,
  onKeyDown: D,
  ...S
}, g) {
  const C = ae(null), P = ae(null), A = ae(null), T = ae(null), q = Ye(), V = o !== void 0, [J, Z] = X(
    () => i != null ? Kn(zn(i, c) ?? Yt(), c, x) : ""
  ), [ee, ue] = X(!1), [ie, U] = X(null), [R, te] = X(() => {
    const K = o !== void 0 ? o ?? "" : i ?? "";
    if (K) {
      const de = zn(K, c);
      if (de) return de;
    }
    return Yt();
  }), G = $e(() => m ? lr(m) : null, [m]), ce = $e(() => s ? lr(s) : null, [s]), oe = $e(
    () => new Set(v ?? []),
    [v]
  ), xe = $e(() => {
    const K = V ? o ?? "" : J;
    return K ? zn(K, c) : null;
  }, [o, J, V, c]), ve = H(
    (K) => {
      const de = pt(K);
      return !!(oe.has(de) || G && de < pt(G) || ce && de > pt(ce));
    },
    [oe, G, ce]
  ), Be = H(
    (K) => {
      if (!ve(K)) return K;
      for (let de = 1; de <= 366; de += 1) {
        const Pe = Ht(K, de);
        if (!ve(Pe)) return Pe;
        const qe = Ht(K, -de);
        if (!ve(qe)) return qe;
      }
      return K;
    },
    [ve]
  ), ke = H(
    (K) => {
      V || Z(K ? Kn(K, c, x) : "");
      const de = K ? r0(K, a) : "";
      N?.(de), w?.(de);
    },
    [V, c, x, a, N, w]
  ), We = H(
    (K) => {
      P.current = K, typeof g == "function" ? g(K) : g && (g.current = K);
    },
    [g]
  ), be = H(() => {
    ue(!1), U(null), _?.(), d || A.current?.focus();
  }, [d, _]), Ze = H(() => {
    if (f) return;
    const K = xe ?? Yt();
    U(K), te(Be(K)), ue(!0), b?.();
  }, [f, xe, Be, b]), Ve = H(() => {
    ee ? be() : Ze();
  }, [ee, be, Ze]), Le = H((K) => {
    T.current?.querySelector(
      `[data-date="${pt(K)}"]`
    )?.focus();
  }, []), tt = H(
    (K) => {
      if (ve(K)) return;
      const de = ie ?? xe, qe = {
        ...a ? {
          hour: de?.hour ?? 0,
          minute: de?.minute ?? 0,
          second: de?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: K.year,
        month: K.month,
        day: K.day
      };
      U(qe), a || (ke(qe), be());
    },
    [ve, ie, xe, a, ke, be]
  ), Qe = H(
    (K, de) => {
      U((Pe) => {
        const qe = Pe ?? xe ?? Yt(), St = Math.min(K === "hour" ? 23 : 59, Math.max(0, qe[K] + de));
        return { ...qe, [K]: St };
      });
    },
    [xe]
  ), et = H(
    (K, de) => {
      const Pe = de.replace(/\D/g, ""), qe = Pe === "" ? 0 : Number(Pe), Lt = K === "hour" ? 23 : 59;
      U((St) => ({ ...St ?? xe ?? Yt(), [K]: Math.min(Lt, qe) }));
    },
    [xe]
  ), W = H(() => {
    ie && (ke(ie), be());
  }, [ie, ke, be]), z = H(() => {
    if (ee) return;
    const K = zn(J, c);
    ke(K ? i0(K, G, ce) : null);
  }, [ee, J, c, G, ce, ke]), F = (K) => {
    const de = K.target.value;
    V || Z(de), ee && U(null);
  }, ne = (K) => {
    K.key === "Enter" ? (K.preventDefault(), ee ? ie && (ke(ie), be()) : z()) : K.key === "Escape" ? ee && (K.preventDefault(), be()) : K.key === "ArrowDown" && !ee ? (K.preventDefault(), Ze()) : K.key === "Tab" && ee && ue(!1), D?.(K);
  }, _e = (K) => {
    z(), I?.(K);
  }, re = (K) => {
    let de = null;
    switch (K.key) {
      case "ArrowLeft":
        de = Ht(R, -1), K.preventDefault();
        break;
      case "ArrowRight":
        de = Ht(R, 1), K.preventDefault();
        break;
      case "ArrowUp":
        de = Ht(R, -7), K.preventDefault();
        break;
      case "ArrowDown":
        de = Ht(R, 7), K.preventDefault();
        break;
      case "Home":
        de = Ht(R, -Cr(R)), K.preventDefault();
        break;
      case "End":
        de = Ht(R, 6 - Cr(R)), K.preventDefault();
        break;
      case "PageUp":
        de = qn(R, K.shiftKey ? -12 : -1), K.preventDefault();
        break;
      case "PageDown":
        de = qn(R, K.shiftKey ? 12 : 1), K.preventDefault();
        break;
      case "Enter":
      case " ":
        K.preventDefault(), tt(R);
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
      te(Pe), setTimeout(() => Le(Pe), 0);
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
  const he = () => {
    V || Z(""), N?.(""), w?.(""), P.current?.focus();
  }, Ne = ee && ie ? Kn(ie, c, x) : V ? o ? Kn(zn(o, c) ?? Yt(), c, x) : "" : J, Fe = V ? !!o : J.length > 0, Je = d || ee, dt = { year: R.year, month: R.month }, yt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
    year: dt.year,
    month: dt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, Se = [];
  for (let K = 0; K < n0; K += 1)
    Se.push(Ht(Q, K - yt));
  const nt = ie ? pt(ie) : xe ? pt(xe) : null, Wt = pt(Yt()), Ot = `${dt.year}-${xt(dt.month)}`, ze = $e(
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
  }).format(new Date(dt.year, dt.month - 1, 1)), kt = Array.from(
    { length: 7 },
    (K, de) => new Intl.DateTimeFormat(x, { weekday: "short" }).format(
      new Date(2021, 0, 3 + de)
    )
  ), Rt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], Jt = /* @__PURE__ */ O(
    "div",
    {
      className: Ee["dx-datepicker-calendar"],
      "aria-label": y ?? "Date picker",
      children: [
        /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-header"], children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ee["dx-datepicker-nav"],
              "aria-label": "Previous month",
              onClick: () => {
                const K = Be(qn(R, -1));
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
                const K = Be(qn(R, 1));
                te(K), setTimeout(() => Le(K), 0);
              },
              children: /* @__PURE__ */ n(De, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ O(
          "div",
          {
            ref: T,
            role: "grid",
            className: Ee["dx-datepicker-grid"],
            onKeyDown: re,
            children: [
              /* @__PURE__ */ n("div", { role: "row", className: Ee["dx-datepicker-week-row"], children: kt.map((K) => /* @__PURE__ */ n(
                "div",
                {
                  role: "columnheader",
                  className: Ee["dx-datepicker-weekday"],
                  children: K
                },
                K
              )) }),
              Array.from({ length: 6 }, (K, de) => /* @__PURE__ */ n("div", { role: "row", className: Ee["dx-datepicker-row"], children: Se.slice(de * 7, de * 7 + 7).map((Pe) => {
                const qe = pt(Pe), Lt = ve(Pe), St = qe.startsWith(Ot);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": qe,
                    tabIndex: qe === pt(R) ? 0 : -1,
                    "aria-selected": qe === nt || void 0,
                    "aria-disabled": Lt || void 0,
                    "aria-label": ze.format(
                      new Date(Pe.year, Pe.month - 1, Pe.day)
                    ),
                    className: [
                      Ee["dx-datepicker-day"],
                      St ? null : Ee["dx-datepicker-day--outside"],
                      qe === Wt ? Ee["dx-datepicker-day--today"] : null,
                      qe === nt ? Ee["dx-datepicker-day--selected"] : null,
                      Lt ? Ee["dx-datepicker-day--disabled"] : null
                    ].filter(Boolean).join(" "),
                    onClick: () => tt(Pe),
                    onFocus: () => te(Pe),
                    children: Pe.day
                  },
                  qe
                );
              }) }, de))
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
                  value: xt((ie ?? xe ?? Yt())[K]),
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
              readOnly: h,
              placeholder: $,
              tabIndex: k,
              role: l ? void 0 : "combobox",
              "aria-label": y ?? "Date",
              "aria-haspopup": l ? void 0 : "dialog",
              "aria-expanded": l ? void 0 : Je,
              "aria-controls": l ? void 0 : q,
              "aria-invalid": r || void 0,
              className: [
                Ee["dx-datepicker-input"],
                Rt,
                r ? Ee["dx-datepicker-input-invalid"] : null
              ].filter(Boolean).join(" "),
              onChange: F,
              onKeyDown: ne,
              onBlur: _e,
              onClick: () => {
                l || Ve();
              },
              ...S
            }
          ),
          u && !f && Fe && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [
                Ee["dx-datepicker-clear"],
                l ? Ee["dx-datepicker-clear--inset"] : null
              ].filter(Boolean).join(" "),
              "aria-label": p ?? "Clear",
              onClick: he,
              children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
            }
          ),
          l && /* @__PURE__ */ n(
            "button",
            {
              ref: A,
              type: "button",
              className: [
                Ee["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": E ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": ee,
              "aria-controls": q,
              disabled: f,
              onClick: Ve,
              children: /* @__PURE__ */ n(De, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Je && /* @__PURE__ */ n(
          "div",
          {
            id: q,
            role: d ? void 0 : "dialog",
            className: d ? void 0 : Ee["dx-datepicker-popup"],
            children: Jt
          }
        )
      ]
    }
  );
}), Zt = {
  "dx-rating": "_dx-rating_kqu83_1",
  "dx-rating-item": "_dx-rating-item_kqu83_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_kqu83_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_kqu83_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_kqu83_51",
  "dx-rating-clear": "_dx-rating-clear_kqu83_55",
  "dx-rating-readonly": "_dx-rating-readonly_kqu83_87",
  "dx-rating-disabled": "_dx-rating-disabled_kqu83_96"
}, Sk = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: m = "Rate",
  tabIndex: s = 0,
  className: a,
  onChange: l,
  onValueChange: u
}) => {
  const [d, v] = X(e), x = H(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), N = H(
    (f) => {
      l?.(f), u?.(f);
    },
    [l, u]
  ), w = H(
    (f) => {
      r || o || (N(f), v(f));
    },
    [r, o, N]
  ), b = (f) => {
    if (r || o) return;
    const h = d > 0 ? d : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), w(x(h + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), w(x(h - 1));
        break;
      case "Home":
        f.preventDefault(), w(1);
        break;
      case "End":
        f.preventDefault(), w(t);
        break;
    }
  }, _ = Array.from({ length: t }, (f, h) => h + 1);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": r || void 0,
      className: [
        Zt["dx-rating"],
        r ? Zt["dx-rating-readonly"] : null,
        o ? Zt["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !r && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Zt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? s : -1,
            disabled: o,
            onClick: () => w(0),
            children: /* @__PURE__ */ n(De, { name: "ban", size: 16 })
          }
        ),
        _.map((f) => {
          const h = f <= e, $ = f === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": h,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${m} ${f}`,
              tabIndex: $ ? s : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Zt["dx-rating-item"],
                h ? Zt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => w(f),
              onFocus: () => v(f),
              children: [
                /* @__PURE__ */ n("span", { className: Zt["dx-rating-icon-filled"], "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "star", size: 20 }) }),
                /* @__PURE__ */ n("span", { className: Zt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "star-outline", size: 20 }) })
              ]
            },
            f
          );
        })
      ]
    }
  );
}, rn = {
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
const zk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: o = 0,
  max: i = 100,
  step: c = 1,
  range: m = !1,
  orientation: s = "horizontal",
  disabled: a = !1,
  label: l = "Value",
  minLabel: u = "Min",
  maxLabel: d = "Max",
  tabIndex: v = 0,
  className: x,
  onChange: N,
  onInput: w,
  onValueChange: b,
  onInputChange: _
}) => {
  const f = ae(null), h = ae(null), [$, y] = X(null), E = $ ?? e, p = $e(() => It(E, o, i), [E, o, i]), k = $e(
    () => It(m ? t : p, o, i),
    [m, t, p, o, i]
  ), M = $e(
    () => It(m ? Math.max(r, k) : p, o, i),
    [m, r, k, p, o, i]
  ), I = H(
    (R) => {
      const te = i - o;
      return te <= 0 ? 0 : (It(R, o, i) - o) / te * 100;
    },
    [o, i]
  ), D = H(
    (R, te) => {
      const G = f.current;
      if (!G) return o;
      const ce = G.getBoundingClientRect();
      let oe;
      s === "vertical" ? oe = 1 - (te - ce.top) / ce.height : oe = (R - ce.left) / ce.width;
      const xe = o + It(oe, 0, 1) * (i - o);
      return c > 0 ? It(Math.round(xe / c) * c, o, i) : It(xe, o, i);
    },
    [o, i, c, s]
  ), S = H(
    (R) => {
      typeof R == "number" && y(R), N?.(R), b?.(R);
    },
    [N, b]
  ), g = H(
    (R) => {
      typeof R == "number" && y(R), w?.(R), _?.(R);
    },
    [w, _]
  ), C = H(
    (R, te, G) => {
      const ce = D(te, G);
      let oe;
      m ? R === "min" ? oe = { min: Math.min(ce, M), max: M } : oe = { min: k, max: Math.max(ce, k) } : oe = ce, g(oe), h.current === null && S(oe);
    },
    [m, D, k, M, g, S]
  ), P = H(
    (R, te) => {
      const G = (c > 0 ? c : 1) * te;
      let ce;
      m ? R === "min" ? ce = {
        min: It(k + G, o, M),
        max: M
      } : ce = {
        min: k,
        max: It(M + G, k, i)
      } : ce = It(p + G, o, i), S(ce);
    },
    [m, c, o, i, k, M, p, S]
  ), A = (R, te) => {
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
          te.preventDefault(), S(m ? R === "min" ? { min: o, max: M } : { min: k, max: k } : o);
          break;
        case "End":
          te.preventDefault(), S(m ? R === "min" ? { min: M, max: M } : { min: k, max: i } : i);
          break;
      }
  }, T = (R, te) => {
    a || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), h.current = { key: R, pointerId: te.pointerId }, C(R, te.clientX, te.clientY));
  }, q = (R) => {
    !h.current || h.current.pointerId !== R.pointerId || (R.preventDefault(), C(h.current.key, R.clientX, R.clientY));
  }, V = (R) => {
    !h.current || h.current.pointerId !== R.pointerId || (h.current = null, R.preventDefault(), S(m ? { min: k, max: M } : p));
  }, [J, Z] = X(null), ee = I(k), ue = I(M), ie = m ? ee : 0, U = ue;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        rn["dx-slider"],
        s === "vertical" ? rn["dx-slider-vertical"] : null,
        a ? rn["dx-slider-disabled"] : null,
        x
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ O("div", { ref: f, className: rn["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: rn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${ie}%`, height: `${U - ie}%` } : { left: `${ie}%`, width: `${U - ie}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(k),
            "aria-orientation": s,
            "aria-label": m ? u : l,
            "aria-disabled": a || void 0,
            tabIndex: a || m && J === "max" ? -1 : v,
            className: rn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ee}% - 8px)` } : { left: `calc(${ee}% - 8px)` },
            onKeyDown: (R) => A("min", R),
            onPointerDown: (R) => T("min", R),
            onPointerMove: q,
            onPointerUp: V,
            onFocus: () => Z("min")
          }
        ),
        m && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(M),
            "aria-orientation": s,
            "aria-label": d,
            "aria-disabled": a || void 0,
            tabIndex: a || J === "min" ? -1 : v,
            className: rn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ue}% - 8px)` } : { left: `calc(${ue}% - 8px)` },
            onKeyDown: (R) => A("max", R),
            onPointerDown: (R) => T("max", R),
            onPointerMove: q,
            onPointerUp: V,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, Ke = {
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
}, d0 = "-10675199.02:48:05.4775808", u0 = "10675199.02:48:05.4775808", Kt = 86400, Ut = 3600, Mt = 60, nr = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Ir = {
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
function Tn(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, o = t;
  o.startsWith("-") ? (r = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (i) {
    if (!i.slice(1).some((d) => d != null)) return null;
    const s = i[1] != null ? Number(i[1]) : 0, a = i[2] != null ? Number(i[2]) : 0, l = i[3] != null ? Number(i[3]) : 0, u = i[4] != null ? Number(i[4]) : 0;
    return r * (s * Kt + a * Ut + l * Mt + u);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (c) {
    const m = c[1] != null ? Number(c[1]) : 0, s = Number(c[2]), a = Number(c[3]), l = c[4] != null ? Number(c[4]) : 0, u = c[5] != null ? +`0.${c[5]}` : 0;
    return s > 23 || a > 59 || l > 59 ? null : r * (m * Kt + s * Ut + a * Mt + l + u);
  }
  return null;
}
function f0(e) {
  return e.days * Kt + e.hours * Ut + e.minutes * Mt + e.seconds;
}
function Ar(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / Kt);
  t %= Kt;
  const o = Math.floor(t / Ut);
  t %= Ut;
  const i = Math.floor(t / Mt), c = Math.round(t % Mt * 1e9) / 1e9;
  return { days: r, hours: o, minutes: i, seconds: c };
}
function ir(e, t) {
  const r = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Mt) * Mt : t === "hour" ? o = Math.round(o / Ut) * Ut : t === "day" && (o = Math.round(o / Kt) * Kt);
  let i = Math.round(o % Mt);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const m = Math.floor(o / Mt) + c, s = m % 60, a = Math.floor(m / 60), l = a % 24, u = Math.floor(a / 24), d = r ? "-" : "", v = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${d}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${v}${fn(l)}`;
    case "minute":
      return `${d}${v}${fn(l)}:${fn(s)}`;
    default:
      return `${d}${v}${fn(l)}:${fn(s)}:${fn(i)}`;
  }
}
function Tr(e, t = "second") {
  const r = Tn(e);
  return r === null ? "" : ir(r, t);
}
function rr(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const Dk = He(
  function({
    size: t = "md",
    invalid: r = !1,
    value: o,
    defaultValue: i,
    min: c = d0,
    max: m = u0,
    step: s = "1",
    precision: a = "second",
    showDays: l = !0,
    showHours: u = !0,
    showMinutes: d = !0,
    showSeconds: v = !0,
    allowClear: x = !1,
    inline: N = !1,
    onChange: w,
    onValueChange: b,
    onOpen: _,
    onClose: f,
    disabled: h,
    placeholder: $,
    ariaLabel: y,
    triggerLabel: E,
    clearLabel: p,
    tabIndex: k,
    className: M,
    onBlur: I,
    onKeyDown: D,
    ...S
  }, g) {
    const C = ae(null), P = ae(null), A = ae(null), T = Ye(), q = o !== void 0, [V, J] = X(
      () => i != null ? Tr(i, a) : ""
    ), [Z, ee] = X(!1), [ue, ie] = X(null), [U, R] = X(null), te = $e(
      () => Tn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), G = $e(
      () => Tn(m) ?? Number.MAX_SAFE_INTEGER,
      [m]
    ), ce = $e(() => {
      const Q = Number.parseFloat(s);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [s]), oe = $e(() => {
      const Q = q ? o ?? "" : V;
      return Q ? Tn(Q) : null;
    }, [o, V, q]), xe = H(
      (Q) => {
        const Se = Q === null ? "" : ir(Q, a);
        q || J(Se), w?.(Se), b?.(Se);
      },
      [q, a, w, b]
    ), ve = H(
      (Q) => {
        Q && ue !== null && xe(ue), ee(!1), ie(null), R(null), f?.(), N || A.current?.focus();
      },
      [N, ue, xe, f]
    ), Be = H(() => {
      h || (ie(oe ?? 0), ee(!0), _?.());
    }, [h, oe, _]), ke = H(() => {
      Z ? ve(!1) : Be();
    }, [Z, ve, Be]), We = H(
      (Q, Se) => {
        ie((nt) => {
          const Ot = (nt ?? oe ?? 0) + Se * ce * Ir[Q];
          return rr(Ot, te, G);
        });
      },
      [oe, ce, te, G]
    ), be = H(
      (Q) => {
        const Se = U?.[Q];
        if (Se == null) return;
        const nt = Number.parseFloat(Se), Wt = Number.isNaN(nt) ? 0 : nt;
        ie((Ot) => {
          const ze = Ot ?? oe ?? 0, Xe = Ar(ze);
          Xe[Q] = Wt;
          const Rt = (ze < 0 ? -1 : 1) * f0(Xe);
          return rr(Rt, te, G);
        }), R(null);
      },
      [U, oe, te, G]
    ), Ze = (Q, Se) => {
      R((nt) => ({ ...nt ?? {}, [Q]: Se }));
    }, Ve = (Q, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), be(Q), We(Q, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), be(Q), We(Q, -1);
          break;
        case "Home":
          Se.preventDefault(), be(Q), ie(te);
          break;
        case "End":
          Se.preventDefault(), be(Q), ie(G);
          break;
        case "Enter":
          Se.preventDefault(), be(Q), ve(!0);
          break;
      }
    }, Le = H(() => {
      if (Z) return;
      const Q = Tn(V);
      xe(Q !== null ? rr(Q, te, G) : null);
    }, [Z, V, te, G, xe]), tt = (Q) => {
      q || J(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Z ? ve(!0) : Le()) : Q.key === "Escape" && Z ? (Q.preventDefault(), ve(!1)) : Q.key === "ArrowDown" && !Z ? (Q.preventDefault(), Be()) : Q.key === "Tab" && Z && ee(!1), D?.(Q);
    }, et = (Q) => {
      Le(), I?.(Q);
    }, W = () => {
      q || J(""), w?.(""), b?.(""), P.current?.focus();
    };
    we(() => {
      if (!Z) return;
      const Q = (Se) => {
        C.current && !C.current.contains(Se.target) && ve(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [Z, ve]), we(() => {
      if (!Z) return;
      const Q = (Se) => {
        Se.key === "Escape" && ve(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [Z, ve]), we(() => {
      if (N && ue !== null) {
        const Q = oe;
        (Q === null || Math.abs(ue - Q) > 1e-9) && xe(ue);
      }
    }, [N, ue, oe, xe]);
    const z = H(
      (Q) => {
        P.current = Q, typeof g == "function" ? g(Q) : g && (g.current = Q);
      },
      [g]
    ), F = q ? o ? Tr(o, a) : "" : V, ne = q ? !!o : V.length > 0, _e = N || Z, re = ue ?? oe ?? 0, he = Ar(re), Ne = _0[a], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Ir[Q] >= Ne && (Q === "days" ? l : Q === "hours" ? u : Q === "minutes" ? d : v)
    ), dt = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], yt = /* @__PURE__ */ O("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: ir(re, a) }),
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ O("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ke["dx-timespanpicker-unit-label"], children: nr[Q] }),
        /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: U?.[Q] ?? String(he[Q]),
              onChange: (Se) => Ze(Q, Se.target.value),
              onKeyDown: (Se) => Ve(Q, Se),
              onBlur: () => be(Q)
            }
          ),
          /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${nr[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), We(Q, 1);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${nr[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), We(Q, -1);
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
          onClick: () => ve(!0),
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
                value: F,
                disabled: h,
                placeholder: $,
                tabIndex: k,
                role: "combobox",
                "aria-label": y ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": T,
                "aria-invalid": r || void 0,
                className: [
                  Ke["dx-timespanpicker-input"],
                  dt,
                  r ? Ke["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...S
              }
            ),
            x && !h && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ke["dx-timespanpicker-clear"],
                "aria-label": p ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: A,
                type: "button",
                className: [
                  Ke["dx-timespanpicker-trigger"]
                ].filter(Boolean).join(" "),
                "aria-label": E ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": T,
                disabled: h,
                onClick: ke,
                children: /* @__PURE__ */ n(De, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ n(
            "div",
            {
              id: T,
              role: N ? void 0 : "dialog",
              "aria-label": y ?? "Time span picker",
              className: N ? void 0 : Ke["dx-timespanpicker-popup"],
              children: yt
            }
          )
        ]
      }
    );
  }
), p0 = "_wrapper_7payt_1", m0 = "_cells_7payt_8", h0 = "_cell_7payt_8", g0 = "_invalid_7payt_63", b0 = "_live_7payt_72", sn = {
  wrapper: p0,
  cells: m0,
  cell: h0,
  "cell-sm": "_cell-sm_7payt_45",
  "cell-md": "_cell-md_7payt_51",
  "cell-lg": "_cell-lg_7payt_57",
  invalid: g0,
  live: b0
};
function jr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Mk = He(
  function({
    length: t = 6,
    value: r,
    defaultValue: o,
    onChange: i,
    invalid: c = !1,
    size: m = "md",
    autoFocus: s = !1,
    disabled: a = !1,
    label: l = "Security code",
    liveAnnounce: u = !0,
    className: d,
    "aria-label": v
  }, x) {
    const N = Ye(), w = r !== void 0, [b, _] = X(jr(o).join("")), f = w ? jr(r).join("") : b, h = Array.from({ length: t }, (S, g) => f[g] ?? ""), $ = ae([]), [y, E] = X(""), p = (S) => {
      w || _(S), i?.(S);
    }, k = (S) => {
      const g = $.current[S];
      g && !g.disabled && (g.focus(), g.select());
    }, M = (S, g) => {
      const C = g.replace(/\D/g, "").slice(-1), P = f.split("");
      if (C) {
        P[S] = C;
        const A = P.join("").slice(0, t);
        p(A), A.length < t ? k(S + 1) : u && E("Code complete");
      }
    }, I = (S, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), f[S]) {
          const C = f.split("");
          C[S] = "", p(C.join(""));
        } else if (S > 0) {
          const C = f.split("");
          C[S - 1] = "", p(C.join("")), k(S - 1);
        }
      } else g.key === "ArrowLeft" && S > 0 ? (g.preventDefault(), k(S - 1)) : g.key === "ArrowRight" && S < t - 1 ? (g.preventDefault(), k(S + 1)) : g.key === "Home" ? (g.preventDefault(), k(0)) : g.key === "End" && (g.preventDefault(), k(t - 1));
    }, D = (S, g) => {
      g.preventDefault();
      const C = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!C) return;
      const P = f.split("");
      let A = 0;
      for (let q = 0; q < C.length && S + q < t; q++)
        P[S + q] = C[q] ?? "", A++;
      const T = P.join("");
      p(T), T.length >= t ? u && E("Code complete") : k(S + A);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [sn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": v ?? l,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [sn.cells, sn[m]].join(" "), children: h.map((S, g) => /* @__PURE__ */ n(
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
              autoFocus: s && g === 0,
              className: [sn.cell, sn[`cell-${m}`], c ? sn.invalid : null].filter(Boolean).join(" "),
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
          u && /* @__PURE__ */ n("span", { id: `${N}-live`, role: "status", "aria-live": "polite", className: sn.live, children: y })
        ]
      }
    );
  }
), x0 = "_wrapper_w4qo1_1", y0 = "_header_w4qo1_7", k0 = "_label_w4qo1_15", v0 = "_clear_w4qo1_22", w0 = "_canvas_w4qo1_53", $0 = "_disabled_w4qo1_69", pn = {
  wrapper: x0,
  header: y0,
  label: k0,
  clear: v0,
  canvas: w0,
  disabled: $0
}, Ck = He(
  function({
    value: t,
    defaultValue: r,
    onChange: o,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: m = "Clear",
    ariaLabel: s = "Signature",
    width: a,
    height: l = 140,
    disabled: u = !1,
    className: d
  }, v) {
    const x = ae(null), N = ae(!1), w = ae(!1), b = ae({ x: 0, y: 0 });
    we(() => {
      const p = x.current;
      if (!p) return;
      const k = window.devicePixelRatio || 1, M = Math.round((a ?? p.clientWidth) * k), I = Math.round(l * k);
      (p.width !== M || p.height !== I) && (p.width = M, p.height = I);
      const D = p.getContext("2d");
      if (!D) return;
      D.setTransform(k, 0, 0, k, 0, 0), D.lineWidth = c, D.strokeStyle = i, D.lineCap = "round", D.lineJoin = "round";
      const S = t ?? r;
      if (S) {
        const g = new Image();
        g.onload = () => {
          D.drawImage(g, 0, 0, p.clientWidth, l);
        }, g.src = S;
      }
    }, [t, r, i, c, a, l]);
    const _ = () => {
      const p = x.current;
      if (!p) return;
      const k = p.toDataURL("image/png");
      o?.(k);
    }, f = () => {
      const p = x.current;
      if (!p) return;
      const k = p.getContext("2d");
      k && k.clearRect(0, 0, p.width, p.height), o?.("");
    };
    cr(v, () => ({
      clear: f,
      toDataURL: (p = "image/png", k) => x.current?.toDataURL(p, k) ?? ""
    }));
    const h = (p) => {
      const k = p.currentTarget.getBoundingClientRect();
      return { x: p.clientX - k.left, y: p.clientY - k.top };
    }, $ = (p) => {
      u || (p.preventDefault(), typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId), N.current = !0, w.current = !1, b.current = h(p));
    }, y = (p) => {
      if (!N.current) return;
      p.preventDefault();
      const k = p.currentTarget.getContext("2d");
      if (!k) return;
      const M = h(p);
      k.beginPath(), k.moveTo(b.current.x, b.current.y), k.lineTo(M.x, M.y), k.stroke(), b.current = M, w.current = !0;
    }, E = (p) => {
      N.current && (p.preventDefault(), N.current = !1, w.current && _());
    };
    return /* @__PURE__ */ O("div", { className: [pn.wrapper, d, u ? pn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ O("div", { className: pn.header, children: [
        /* @__PURE__ */ n("span", { className: pn.label, children: s }),
        /* @__PURE__ */ n("button", { type: "button", className: pn.clear, onClick: f, disabled: u, children: m })
      ] }),
      /* @__PURE__ */ n(
        "canvas",
        {
          ref: x,
          role: "img",
          "aria-label": s,
          "aria-disabled": u || void 0,
          style: { width: a ? `${a}px` : void 0, height: `${l}px` },
          className: pn.canvas,
          onPointerDown: $,
          onPointerMove: y,
          onPointerUp: E,
          onPointerCancel: E
        }
      )
    ] });
  }
), N0 = "_wrapper_5g858_1", O0 = "_trigger_5g858_7", S0 = "_list_5g858_35", z0 = "_row_5g858_44", D0 = "_name_5g858_59", M0 = "_size_5g858_68", C0 = "_progress_5g858_74", E0 = "_fill_5g858_82", I0 = "_status_5g858_99", A0 = "_remove_5g858_106", At = {
  wrapper: N0,
  trigger: O0,
  list: S0,
  row: z0,
  name: D0,
  size: M0,
  progress: C0,
  fill: E0,
  status: I0,
  remove: A0
};
function Rr(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Ek = He(function({
  url: t,
  multiple: r = !1,
  parameterName: o = "files",
  auto: i = !0,
  headers: c,
  accept: m,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: l = "Upload",
  children: u,
  onProgress: d,
  onComplete: v,
  onError: x
}, N) {
  const w = ae(null), [b, _] = X([]), f = ae(/* @__PURE__ */ new Map()), h = (k, M) => {
    _((I) => I.map((D) => D.file.name === k ? { ...D, ...M } : D));
  }, $ = (k) => {
    if (!t) return;
    const M = new XMLHttpRequest();
    f.current.set(k.file.name, M);
    const I = new FormData();
    if (I.append(o, k.file), M.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const S = Math.round(D.loaded / D.total * 100);
      h(k.file.name, { state: "uploading", progress: S }), d?.(k.file.name, S);
    }), M.addEventListener("load", () => {
      M.status >= 200 && M.status < 300 ? (h(k.file.name, { state: "complete", progress: 100 }), v?.(k.file.name)) : (h(k.file.name, { state: "error", message: `HTTP ${M.status}` }), x?.(k.file.name, `HTTP ${M.status}`));
    }), M.addEventListener("error", () => {
      h(k.file.name, { state: "error", message: "Network error" }), x?.(k.file.name, "Network error");
    }), c)
      for (const [D, S] of Object.entries(c))
        M.setRequestHeader(D, S);
    M.open("POST", t), M.send(I), h(k.file.name, { state: "uploading", progress: 0 });
  }, y = (k) => {
    if (!k) return;
    const M = [...k], I = [];
    let D = Math.max(0, s - b.length);
    for (const g of M) {
      if (a != null && g.size > a) {
        x?.(g.name, `File too large (maximum ${Rr(a)})`);
        continue;
      }
      if (D <= 0) {
        x?.(g.name, `Too many files (maximum ${s})`);
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
  }, E = (k) => {
    f.current.get(k)?.abort(), f.current.delete(k), _((I) => I.filter((D) => D.file.name !== k));
  }, p = u ?? /* @__PURE__ */ O("button", { type: "button", className: At.trigger, onClick: () => w.current?.click(), children: [
    /* @__PURE__ */ n(De, { name: "upload", size: 14 }),
    l
  ] });
  return cr(N, () => ({
    open: () => w.current?.click(),
    upload: () => b.forEach((k) => k.state === "pending" ? $(k) : null)
  })), /* @__PURE__ */ O("div", { className: At.wrapper, children: [
    p,
    /* @__PURE__ */ n(
      "input",
      {
        ref: w,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: m,
        "data-testid": "upload-input",
        onChange: (k) => y(k.target.files)
      }
    ),
    !u && b.length > 0 && /* @__PURE__ */ n("ul", { className: At.list, children: b.map(({ file: k, state: M, progress: I, message: D }) => /* @__PURE__ */ O("li", { className: At.row, "data-state": M, "data-testid": "upload-row", children: [
      /* @__PURE__ */ n("span", { className: At.name, children: k.name }),
      /* @__PURE__ */ n("span", { className: At.size, children: Rr(k.size) }),
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
      /* @__PURE__ */ n("span", { className: At.status, role: "status", children: M === "uploading" ? "Uploading" : M === "complete" ? "Complete" : M === "error" ? D ?? "Failed" : "Pending" }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: At.remove,
          "aria-label": `Remove ${k.name}`,
          onClick: () => E(k.name),
          children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
        }
      )
    ] }, k.name)) })
  ] });
}), T0 = "_zone_1158o_1", j0 = "_dragging_1158o_23", R0 = "_caption_1158o_28", L0 = "_browse_1158o_40", P0 = "_disabled_1158o_67", Dn = {
  zone: T0,
  dragging: j0,
  caption: R0,
  browse: L0,
  disabled: P0
};
function B0(e, t) {
  return t ? t.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const o = r.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === r;
  }) : !0;
}
const Ik = He(function({
  accept: t,
  multiple: r = !1,
  onDrop: o,
  label: i = "Drop files here or browse",
  dragLabel: c = "Drop to attach",
  browseText: m = "Browse",
  disabled: s = !1,
  className: a
}, l) {
  const u = ae(null), [d, v] = X(!1), x = (f) => {
    if (!f || f.length === 0) return;
    const h = [...f].filter(($) => B0($, t ?? ""));
    h.length !== 0 && o?.(h);
  }, N = (f) => {
    s || (f.preventDefault(), v(!0));
  }, w = (f) => {
    s || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", v(!0));
  }, b = (f) => {
    s || f.currentTarget.contains(f.relatedTarget) || v(!1);
  }, _ = (f) => {
    s || (f.preventDefault(), v(!1), x(f.dataTransfer.files));
  };
  return cr(l, () => ({
    open: () => u.current?.click()
  })), /* @__PURE__ */ O(
    "div",
    {
      role: "region",
      "aria-label": i,
      className: [Dn.zone, d ? Dn.dragging : null, s ? Dn.disabled : null, a].filter(Boolean).join(" "),
      onDragEnter: N,
      onDragOver: w,
      onDragLeave: b,
      onDrop: _,
      children: [
        /* @__PURE__ */ n("p", { className: Dn.caption, children: d ? c : i }),
        !s && /* @__PURE__ */ n("button", { type: "button", className: Dn.browse, onClick: () => u.current?.click(), children: m }),
        /* @__PURE__ */ n(
          "input",
          {
            ref: u,
            type: "file",
            hidden: !0,
            multiple: r,
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
}), F0 = "_root_y70dg_1", H0 = "_menubar_y70dg_5", q0 = "_horizontal_y70dg_15", K0 = "_vertical_y70dg_20", U0 = "_itemWrapper_y70dg_25", W0 = "_item_y70dg_25", V0 = "_disabled_y70dg_61", X0 = "_icon_y70dg_68", G0 = "_text_y70dg_75", Y0 = "_caret_y70dg_79", Z0 = "_hasChildren_y70dg_85", J0 = "_submenu_y70dg_94", Q0 = "_submenuItem_y70dg_118", ct = {
  root: F0,
  menubar: H0,
  horizontal: q0,
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
function Ak({
  items: e,
  orientation: t = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: i = "Menu",
  className: c
}) {
  const m = Ye(), s = ae(null), a = ae(null), [l, u] = X(null), d = ae(0), v = ae(null), x = H(
    (_) => {
      const f = { text: _.text, value: _.value, path: _.path };
      (r ?? o)?.(f);
    },
    [r, o]
  ), N = H(
    (_, f) => {
      if (!Mn(_)) {
        if (_.children && _.children.length > 0) {
          const h = l === f, $ = Date.now() - d.current < 600;
          if (h && $) {
            d.current = 0;
            return;
          }
          u((y) => y === f ? null : f);
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
      s.current && !s.current.contains(f.target) && u(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [l]), we(() => {
    if (v.current != null && l === v.current) {
      const _ = `${m}-submenu-${l}`;
      document.getElementById(_)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), v.current = null;
    }
  }, [l, m]);
  const b = (_) => {
    const f = a.current;
    if (!f) return;
    const h = Array.from(
      f.querySelectorAll('[data-top="true"]')
    ).filter((E) => !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true");
    if (l != null) {
      const E = `${m}-submenu-${l}`, p = document.getElementById(E);
      if (p) {
        const k = Array.from(p.querySelectorAll('[role="menuitem"]')).filter(
          (D) => D.getAttribute("aria-disabled") !== "true"
        ), M = document.activeElement, I = M ? k.indexOf(M) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), I === -1 ? k[0]?.focus() : k[(I + 1) % k.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), I === -1 ? k[k.length - 1]?.focus() : k[(I - 1 + k.length) % k.length]?.focus();
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), u(null), f.querySelector(`[data-top="true"][data-index="${l}"]`)?.focus();
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
    const $ = document.activeElement, y = $ ? h.indexOf($) : -1;
    if (_.key === "ArrowRight" || t === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), h.length === 0) return;
      const E = y === -1 ? 0 : (y + 1) % h.length;
      h[E]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || t === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), h.length === 0) return;
      const E = y === -1 ? h.length - 1 : (y - 1 + h.length) % h.length;
      h[E]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if (y >= 0) {
        const E = $?.getAttribute("data-index"), p = E != null ? Number(E) : -1, k = p >= 0 ? e[p] : void 0;
        k?.children && k.children.length > 0 && !Mn(k) && (_.preventDefault(), v.current = p, u(p));
      }
      return;
    }
    if (_.key === "Home") {
      _.preventDefault(), h[0]?.focus();
      return;
    }
    if (_.key === "End") {
      _.preventDefault(), h[h.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: s,
      "aria-label": i,
      className: [ct.root, ct[t], c].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: a,
          role: "menubar",
          "aria-label": i,
          className: ct.menubar,
          onKeyDown: b,
          children: e.map((_, f) => {
            const h = !!_.children && _.children.length > 0, $ = l === f, y = Mn(_), E = `${m}-submenu-${f}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && h && !y && (d.current = Date.now(), u(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && h && u((p) => p === f ? null : p);
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
                      "aria-disabled": y || void 0,
                      "aria-haspopup": h ? "menu" : void 0,
                      "aria-expanded": h ? $ : void 0,
                      "aria-controls": h ? E : void 0,
                      tabIndex: y ? -1 : 0,
                      disabled: y,
                      className: [ct.item, y ? ct.disabled : null, h ? ct.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => N(_, f),
                      children: [
                        _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: _.text }),
                        h ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  h && $ ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: E,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((p, k) => {
                        const M = Mn(p), I = !!p.children && p.children.length > 0;
                        return /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": M || void 0,
                            "aria-haspopup": I ? "menu" : void 0,
                            tabIndex: M ? -1 : 0,
                            disabled: M,
                            className: [ct.submenuItem, M ? ct.disabled : null].filter(Boolean).join(" "),
                            onClick: () => w(p),
                            children: [
                              p.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: p.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: p.text })
                            ]
                          },
                          `${p.text}-${k}`
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
const eb = "_root_1jwkg_1", tb = "_list_1jwkg_9", nb = "_item_1jwkg_14", rb = "_trigger_1jwkg_18", sb = "_disabled_1jwkg_44", ob = "_expanded_1jwkg_51", ab = "_icon_1jwkg_55", lb = "_text_1jwkg_66", ib = "_caret_1jwkg_73", cb = "_open_1jwkg_80", db = "_submenu_1jwkg_84", ub = "_submenuItem_1jwkg_93", _b = "_nestedWrapper_1jwkg_122", fb = "_nestedTrigger_1jwkg_127", pb = "_nestedMenu_1jwkg_152", mb = "_iconOnly_1jwkg_160", Te = {
  root: eb,
  list: tb,
  item: nb,
  trigger: rb,
  disabled: sb,
  expanded: ob,
  icon: ab,
  text: lb,
  caret: ib,
  open: cb,
  submenu: db,
  submenuItem: ub,
  nestedWrapper: _b,
  nestedTrigger: fb,
  nestedMenu: pb,
  iconOnly: mb
};
function hb({
  item: e,
  baseId: t,
  parentKey: r,
  onEmit: o
}) {
  const i = !!e.children && e.children.length > 0, [c, m] = X(!1), s = `${t}-nested-${r}`, a = !!e.disabled, l = () => {
    if (!a) {
      if (i) {
        m((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, u = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), l()) : d.key === "Escape" && c && (d.preventDefault(), m(!1));
  };
  return i ? /* @__PURE__ */ O("div", { className: Te.nestedWrapper, children: [
    /* @__PURE__ */ O(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": s,
        "aria-disabled": a || void 0,
        disabled: a,
        tabIndex: a ? -1 : 0,
        className: [Te.nestedTrigger, a ? Te.disabled : null].filter(Boolean).join(" "),
        onClick: l,
        onKeyDown: u,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Te.text, children: e.text }),
          /* @__PURE__ */ n("span", { className: [Te.caret, c ? Te.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 }) })
        ]
      }
    ),
    c ? /* @__PURE__ */ n("div", { id: s, role: "menu", className: Te.nestedMenu, children: e.children?.map((d, v) => {
      const x = !!d.disabled;
      return /* @__PURE__ */ O(
        "div",
        {
          role: "menuitem",
          "aria-disabled": x || void 0,
          tabIndex: x ? -1 : 0,
          className: [Te.submenuItem, x ? Te.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            x || d.children && d.children.length > 0 || o({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (N) => {
            if (N.key === "Enter" || N.key === " ") {
              if (N.preventDefault(), x) return;
              o({ text: d.text, value: d.value, path: d.path });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ n("span", { className: Te.text, children: d.text })
          ]
        },
        `${d.text}-${v}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ O(
    "div",
    {
      role: "menuitem",
      "aria-disabled": a || void 0,
      tabIndex: a ? -1 : 0,
      className: [Te.submenuItem, a ? Te.disabled : null].filter(Boolean).join(" "),
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
        e.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Te.text, children: e.text })
      ]
    }
  );
}
function Tk({
  items: e,
  multiple: t,
  Multiple: r,
  showArrow: o,
  ShowArrow: i,
  displayStyle: c,
  DisplayStyle: m,
  onClick: s,
  Click: a,
  ariaLabel: l = "Panel menu",
  className: u
}) {
  const d = Ye(), v = t ?? r ?? !1, x = o ?? i ?? !0, N = c ?? m ?? "iconAndText", [w, b] = X([]), _ = H(
    ($) => {
      const y = { text: $.text, value: $.value, path: $.path };
      (s ?? a)?.(y);
    },
    [s, a]
  ), f = ($, y, E) => {
    if (!E.disabled) {
      if (y) {
        b((p) => p.includes($) ? p.filter((M) => M !== $) : v ? [...p, $] : [$]);
        return;
      }
      _(E);
    }
  }, h = ($) => {
    const y = $.target;
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "Escape") {
        const E = y.getAttribute("aria-controls");
        if (E) {
          const p = E.match(/-panel-(\d+)$/);
          if (p) {
            const k = Number(p[1]);
            b((M) => M.filter((I) => I !== k));
          }
        } else {
          const p = y.closest('[role="menu"]');
          if (p) {
            const M = p.id.match(/-panel-(\d+)$/);
            if (M) {
              const I = Number(M[1]);
              b((S) => S.filter((g) => g !== I)), document.getElementById(`${d}-trigger-${I}`)?.focus();
            }
          }
        }
        $.preventDefault();
        return;
      }
      if ($.key === "ArrowDown" || $.key === "ArrowUp") {
        const E = Array.from(
          $.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((I) => !I.hasAttribute("disabled") && I.getAttribute("aria-disabled") !== "true"), p = E.indexOf(y);
        if (p === -1) return;
        $.preventDefault();
        const k = $.key === "ArrowDown" ? 1 : -1;
        E[(p + k + E.length) % E.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": l,
      className: [
        Te.root,
        N === "icon" ? Te.iconOnly : Te.iconAndText,
        u
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      children: /* @__PURE__ */ n("div", { className: Te.list, role: "presentation", children: e.map(($, y) => {
        const E = !!$.children && $.children.length > 0, p = w.includes(y), k = !!$.disabled, M = `${d}-panel-${y}`, I = `${d}-trigger-${y}`;
        return /* @__PURE__ */ O("div", { className: Te.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": E ? p : void 0,
              "aria-controls": E ? M : void 0,
              "aria-disabled": k || void 0,
              disabled: k,
              tabIndex: k ? -1 : 0,
              className: [
                Te.trigger,
                k ? Te.disabled : null,
                p ? Te.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => f(y, E, $),
              children: [
                $.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: $.icon }) : null,
                N === "iconAndText" ? /* @__PURE__ */ n("span", { className: Te.text, children: $.text }) : /* @__PURE__ */ n("span", { className: Te.text, "aria-label": $.text, children: $.icon ? null : $.text.slice(0, 1) }),
                E && x ? /* @__PURE__ */ n("span", { className: [Te.caret, p ? Te.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 }) }) : null
              ]
            }
          ),
          E && p ? /* @__PURE__ */ n("div", { id: M, role: "menu", className: Te.submenu, "aria-labelledby": I, children: $.children?.map((D, S) => /* @__PURE__ */ n(
            hb,
            {
              item: D,
              baseId: d,
              parentKey: `${y}-${S}`,
              onEmit: _
            },
            `${D.text}-${S}`
          )) }) : null
        ] }, `${$.text}-${y}`);
      }) })
    }
  );
}
const gb = "_root_8nui5_1", bb = "_trigger_8nui5_7", xb = "_defaultTrigger_8nui5_40", yb = "_avatar_8nui5_46", kb = "_menu_8nui5_58", vb = "_item_8nui5_74", wb = "_disabled_8nui5_88", $b = "_active_8nui5_97", Nb = "_icon_8nui5_107", Ob = "_text_8nui5_114", Tt = {
  root: gb,
  trigger: bb,
  defaultTrigger: xb,
  avatar: yb,
  menu: kb,
  item: vb,
  disabled: wb,
  active: $b,
  icon: Nb,
  text: Ob
};
function jk({
  items: e,
  trigger: t,
  Template: r,
  onClick: o,
  Click: i,
  ariaLabel: c = "Profile menu",
  className: m
}) {
  const s = Ye(), a = `${s}-menu`, l = ae(null), u = ae(null), [d, v] = X(!1), [x, N] = X(-1), w = t ?? r, b = e.map((p, k) => p.disabled ? -1 : k).filter((p) => p >= 0), _ = H(
    (p) => {
      if (p.disabled) return;
      const k = { text: p.text, path: p.path };
      (o ?? i)?.(k), v(!1), u.current?.focus();
    },
    [o, i]
  ), f = H(() => {
    N(b[0] ?? -1), v(!0);
  }, [b]), h = H(() => {
    v(!1), N(-1), u.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const p = (k) => {
      l.current && !l.current.contains(k.target) && (v(!1), N(-1));
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [d]), we(() => {
    if (!d) return;
    const p = (k) => {
      k.key === "Escape" && (k.preventDefault(), h());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [d, h]);
  const $ = (p) => {
    if (b.length === 0) return;
    const k = b.indexOf(x), M = k === -1 ? 0 : (k + p + b.length) % b.length, I = b[M];
    I != null && N(I);
  }, y = (p) => {
    if (!d) {
      (p.key === "ArrowDown" || p.key === "Enter" || p.key === " ") && (p.preventDefault(), f());
      return;
    }
    switch (p.key) {
      case "Escape":
        p.preventDefault(), h();
        break;
      case "ArrowDown":
        p.preventDefault(), $(1);
        break;
      case "ArrowUp":
        p.preventDefault(), $(-1);
        break;
      case "Home":
        p.preventDefault(), b[0] != null && N(b[0]);
        break;
      case "End":
        p.preventDefault(), b[b.length - 1] != null && N(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (p.preventDefault(), x >= 0) {
          const k = e[x];
          k && !k.disabled && _(k);
        }
        break;
      case "Tab":
        v(!1), N(-1);
        break;
    }
  }, E = (p) => {
    switch (p.key) {
      case "ArrowDown":
        p.preventDefault(), $(1);
        break;
      case "ArrowUp":
        p.preventDefault(), $(-1);
        break;
      case "Home":
        p.preventDefault(), b[0] != null && N(b[0]);
        break;
      case "End":
        p.preventDefault(), b[b.length - 1] != null && N(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (p.preventDefault(), x >= 0) {
          const k = e[x];
          k && !k.disabled && _(k);
        }
        break;
      case "Escape":
        p.preventDefault(), h();
        break;
      case "Tab":
        v(!1), N(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: l,
      className: [Tt.root, m].filter(Boolean).join(" "),
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
            className: Tt.trigger,
            onClick: () => d ? h() : f(),
            onKeyDown: y,
            children: w ?? /* @__PURE__ */ O("span", { className: Tt.defaultTrigger, children: [
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
            "aria-activedescendant": x >= 0 ? `${s}-item-${x}` : void 0,
            className: Tt.menu,
            onKeyDown: E,
            tabIndex: -1,
            children: e.map((p, k) => {
              const M = !!p.disabled, I = k === x;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${s}-item-${k}`,
                  role: "menuitem",
                  "aria-disabled": M || void 0,
                  tabIndex: M ? -1 : 0,
                  className: [Tt.item, I ? Tt.active : null, M ? Tt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    M || _(p);
                  },
                  onMouseEnter: () => {
                    M || N(k);
                  },
                  children: [
                    p.icon ? /* @__PURE__ */ n("span", { className: Tt.icon, "aria-hidden": "true", children: p.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Tt.text, children: p.text })
                  ]
                },
                `${p.text}-${k}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Sb = "_root_ci25s_1", zb = "_bottomRight_ci25s_11", Db = "_bottomLeft_ci25s_16", Mb = "_topRight_ci25s_21", Cb = "_topLeft_ci25s_26", Eb = "_menu_ci25s_31", Ib = "_itemWrapper_ci25s_48", Ab = "_tooltip_ci25s_54", Tb = "_main_ci25s_76", jb = "_mainIcon_ci25s_104", Rb = "_mainOpen_ci25s_109", Lb = "_item_ci25s_48", Pb = "_disabled_ci25s_141", Bb = "_itemIcon_ci25s_148", ut = {
  root: Sb,
  bottomRight: zb,
  bottomLeft: Db,
  topRight: Mb,
  topLeft: Cb,
  menu: Eb,
  itemWrapper: Ib,
  tooltip: Ab,
  main: Tb,
  mainIcon: jb,
  mainOpen: Rb,
  item: Lb,
  disabled: Pb,
  itemIcon: Bb
};
function Rk({
  items: e,
  position: t,
  Position: r,
  icon: o = "+",
  onClick: i,
  Click: c,
  ariaLabel: m = "Open menu",
  className: s
}) {
  const a = t ?? r ?? "bottom-right", u = `${Ye()}-menu`, d = ae(null), v = ae(null), [x, N] = X(!1), w = H(
    (h) => {
      if (h.disabled) return;
      const $ = { text: h.text, value: h.value };
      (i ?? c)?.($), N(!1), v.current?.focus();
    },
    [i, c]
  );
  we(() => {
    if (!x) return;
    const h = ($) => {
      d.current && !d.current.contains($.target) && N(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [x]), we(() => {
    if (!x) return;
    const h = ($) => {
      $.key === "Escape" && (N(!1), v.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [x]);
  const b = a === "bottom-right" ? ut.bottomRight : a === "bottom-left" ? ut.bottomLeft : a === "top-right" ? ut.topRight : ut.topLeft, _ = (h) => {
    !x && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), N(!0)) : x && h.key === "Escape" && (h.preventDefault(), N(!1));
  }, f = (h) => {
    h.key === "Escape" && (h.preventDefault(), N(!1), v.current?.focus());
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: d,
      className: [ut.root, b, s].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        x ? /* @__PURE__ */ n(
          "div",
          {
            id: u,
            role: "menu",
            "aria-label": m,
            className: ut.menu,
            onKeyDown: f,
            children: e.map((h, $) => {
              const y = !!h.disabled;
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": y || void 0,
                    title: h.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [ut.item, y ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => w(h),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: h.icon ?? "•" })
                  }
                )
              ] }, `${h.text}-${$}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: v,
            type: "button",
            className: ut.main,
            "aria-haspopup": "menu",
            "aria-expanded": x,
            "aria-controls": u,
            "aria-label": m,
            onClick: () => N((h) => !h),
            onKeyDown: _,
            children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [ut.mainIcon, x ? ut.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const Fb = "_root_1wujt_1", Hb = "_list_1wujt_5", qb = "_item_1wujt_15", Kb = "_link_1wujt_22", Ub = "_linkButton_1wujt_23", Wb = "_current_1wujt_24", Vb = "_disabled_1wujt_68", Xb = "_icon_1wujt_74", Gb = "_text_1wujt_81", Yb = "_separator_1wujt_85", Ue = {
  root: Fb,
  list: Hb,
  item: qb,
  link: Kb,
  linkButton: Ub,
  current: Wb,
  disabled: Vb,
  icon: Xb,
  text: Gb,
  separator: Yb
};
function Lk({ items: e, onClick: t, Click: r, ariaLabel: o = "Breadcrumb", className: i }) {
  const c = t ?? r, m = (s) => {
    s.disabled || c?.({ text: s.text, path: s.path });
  };
  return /* @__PURE__ */ n("nav", { "aria-label": o, className: [Ue.root, i].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((s, a) => {
    const l = a === e.length - 1, u = !!s.disabled;
    return /* @__PURE__ */ O("li", { className: Ue.item, children: [
      l ? u ? /* @__PURE__ */ O(
        "span",
        {
          className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            s.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: s.icon }) : null,
            s.text
          ]
        }
      ) : s.path ? /* @__PURE__ */ O(
        "a",
        {
          href: s.path,
          className: Ue.link,
          "aria-current": "page",
          onClick: (d) => {
            d.preventDefault(), m(s);
          },
          children: [
            s.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: s.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: s.text })
          ]
        }
      ) : /* @__PURE__ */ O(
        "span",
        {
          className: Ue.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            s.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: s.icon }) : null,
            s.text
          ]
        }
      ) : u ? /* @__PURE__ */ O(
        "span",
        {
          className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            s.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: s.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: s.text })
          ]
        }
      ) : s.path ? /* @__PURE__ */ O(
        "a",
        {
          href: s.path,
          className: Ue.link,
          onClick: (d) => {
            d.preventDefault(), m(s);
          },
          children: [
            s.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: s.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: s.text })
          ]
        }
      ) : /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          className: Ue.linkButton,
          tabIndex: 0,
          onClick: () => m(s),
          children: [
            s.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: s.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ue.text, children: s.text })
          ]
        }
      ),
      l ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
    ] }, `${s.text}-${a}`);
  }) }) });
}
const Zb = "_root_fkzb5_1", Jb = "_list_fkzb5_5", Qb = "_item_fkzb5_15", ex = "_connector_fkzb5_21", tx = "_connectorCompleted_fkzb5_30", nx = "_step_fkzb5_34", rx = "_active_fkzb5_69", sx = "_completed_fkzb5_75", ox = "_circle_fkzb5_79", ax = "_check_fkzb5_109", lx = "_icon_fkzb5_114", ix = "_number_fkzb5_119", cx = "_text_fkzb5_124", _t = {
  root: Zb,
  list: Jb,
  item: Qb,
  connector: ex,
  connectorCompleted: tx,
  step: nx,
  active: rx,
  completed: sx,
  circle: ox,
  check: ax,
  icon: lx,
  number: ix,
  text: cx
};
function Pk({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: i,
  Linear: c,
  onChange: m,
  Change: s,
  onSelectedIndexChange: a,
  ariaLabel: l = "Steps",
  className: u
}) {
  const d = i ?? c ?? !1, v = t ?? r, x = v !== void 0, [N, w] = X(() => Math.min(Math.max(0, v ?? o), Math.max(0, e.length - 1))), _ = Math.min(Math.max(0, x ? v : N), Math.max(0, e.length - 1)), f = ae(null), h = H(
    (E) => {
      const p = Math.min(Math.max(0, E), Math.max(0, e.length - 1));
      x || w(p), (m ?? s ?? a)?.(p);
    },
    [x, m, s, a, e.length]
  ), $ = H(
    (E, p) => !!(p.disabled || d && E > _ + 1),
    [d, _]
  ), y = (E) => {
    const p = Array.from(
      E.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), k = document.activeElement, M = k ? p.indexOf(k) : -1;
    if (E.key === "ArrowRight" || E.key === "ArrowDown") {
      if (E.preventDefault(), p.length === 0) return;
      const I = M === -1 ? 0 : (M + 1) % p.length, D = p[I];
      D && D.focus();
    } else if (E.key === "ArrowLeft" || E.key === "ArrowUp") {
      if (E.preventDefault(), p.length === 0) return;
      const I = M === -1 ? p.length - 1 : (M - 1 + p.length) % p.length, D = p[I];
      D && D.focus();
    } else E.key === "Home" ? (E.preventDefault(), p[0]?.focus()) : E.key === "End" && (E.preventDefault(), p[p.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": l,
      className: [_t.root, u].filter(Boolean).join(" "),
      onKeyDown: y,
      children: /* @__PURE__ */ n("ol", { ref: f, role: "list", className: _t.list, children: e.map((E, p) => {
        const k = p === _, M = p < _, I = $(p, E);
        return /* @__PURE__ */ O("li", { role: "listitem", className: _t.item, children: [
          p > 0 ? /* @__PURE__ */ n("span", { className: [_t.connector, M ? _t.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              "data-step": p,
              "aria-current": k ? "step" : void 0,
              "aria-disabled": I ? "true" : void 0,
              disabled: I,
              tabIndex: I ? -1 : 0,
              className: [
                _t.step,
                k ? _t.active : null,
                M ? _t.completed : null,
                I ? _t.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                I || h(p);
              },
              children: [
                /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "check", size: "sm" }) }) : E.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: E.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: p + 1 }) }),
                /* @__PURE__ */ n("span", { className: _t.text, children: E.text })
              ]
            }
          )
        ] }, `${E.text}-${p}`);
      }) })
    }
  );
}
const dx = "_root_1axlw_1", ux = "_horizontal_1axlw_13", _x = "_vertical_1axlw_17", fx = "_pane_1axlw_21", px = "_handle_1axlw_31", mx = "_handleHorizontal_1axlw_51", hx = "_handleVertical_1axlw_57", gx = "_handleGrip_1axlw_63", bx = "_handleCollapseHint_1axlw_75", xx = "_collapseBtn_1axlw_79", yx = "_collapseBtnCollapsed_1axlw_109", $t = {
  root: dx,
  horizontal: ux,
  vertical: _x,
  pane: fx,
  handle: px,
  handleHorizontal: mx,
  handleVertical: hx,
  handleGrip: gx,
  handleCollapseHint: bx,
  collapseBtn: xx,
  collapseBtnCollapsed: yx
};
function Cn(e, t) {
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
  const o = parseFloat(r);
  return Number.isNaN(o) ? t : o;
}
function qt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Bk({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: o,
  Resize: i,
  onCollapse: c,
  Collapse: m,
  ariaLabel: s = "Splitter",
  className: a
}) {
  const l = e ?? t ?? "horizontal", u = l === "horizontal", d = ae(null), v = H(() => {
    const g = r.length;
    if (g === 0) return [];
    const C = r.map((A) => A.size ? Cn(A.size, 100 / g) : 100 / g), P = C.reduce((A, T) => A + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? C.map((A) => A / P * 100) : C;
  }, [r]), [x, N] = X(() => v()), [w, b] = X(() => r.map((g) => !!g.collapsed)), _ = ae(x);
  we(() => {
    b(r.map((g) => !!g.collapsed));
  }, [r]);
  const f = H(() => r.map((g) => Cn(g.min, 0)), [r]), h = H(() => r.map((g) => Cn(g.max, 100)), [r]), $ = H(
    (g, C) => {
      const P = { paneIndex: g, newSize: C, cancel: !1 };
      return (o ?? i)?.(P), !P.cancel;
    },
    [o, i]
  ), y = H(
    (g, C) => {
      const P = { paneIndex: g, collapse: C, cancel: !1 };
      return (c ?? m)?.(P), !P.cancel;
    },
    [c, m]
  ), E = H(
    (g) => {
      const C = !w[g];
      y(g, C) && (C ? (_.current = [...x], b((P) => {
        const A = [...P];
        return A[g] !== void 0 && (A[g] = !0), A;
      }), N((P) => {
        const A = [...P], T = A[g] ?? 0, q = g < A.length - 1 ? g + 1 : g - 1;
        if (q >= 0 && q < A.length) {
          const V = A[q] ?? 0;
          A[q] = V + T, A[g] = 0;
        } else
          A[g] = 0;
        return A;
      })) : (b((P) => {
        const A = [...P];
        return A[g] !== void 0 && (A[g] = !1), A;
      }), N(() => {
        const P = [..._.current];
        return P.length !== r.length ? r.map(() => 100 / r.length) : P;
      })));
    },
    [w, x, r.length, y]
  ), p = ae(null), k = H(
    (g, C, P) => {
      const A = d.current;
      if (!A) return null;
      const T = A.getBoundingClientRect();
      let q;
      if (u) {
        if (T.width === 0) return null;
        q = (C - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        q = (P - T.top) / T.height * 100;
      }
      let V = 0;
      for (let Z = 0; Z < g; Z++) {
        const ee = x[Z];
        ee !== void 0 && (V += ee);
      }
      return q - V;
    },
    [u, x]
  ), M = (g, C) => {
    C.preventDefault();
    const P = C.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(C.pointerId), p.current = { handleIndex: g, pointerId: C.pointerId };
  }, I = (g) => {
    if (!p.current || p.current.pointerId !== g.pointerId) return;
    g.preventDefault();
    const C = p.current.handleIndex, P = k(C, g.clientX, g.clientY);
    if (P == null) return;
    const A = f(), T = h(), q = A[C] ?? 0, V = T[C] ?? 100, J = C + 1, Z = A[J] ?? 0, ee = T[J] ?? 100, ue = x[C] ?? 0, ie = x[J] ?? 0, U = ue + ie;
    if (U <= 0) return;
    let R = qt(P, q, V), te = U - R;
    if (te < Z) {
      if (te = Z, R = U - te, R < q || R > V) return;
    } else if (te > ee && (te = ee, R = U - te, R < q || R > V))
      return;
    R = qt(R, q, V), te = U - R, $(C, R) && N((G) => {
      const ce = [...G];
      return ce[C] = R, ce[J] = te, ce;
    });
  }, D = (g) => {
    !p.current || p.current.pointerId !== g.pointerId || (p.current = null);
  }, S = (g, C) => {
    const P = f(), A = h(), T = g, q = g + 1, V = x[T] ?? 0, J = x[q] ?? 0, Z = V + J;
    let ee = 0;
    const ue = !!r[T]?.collapsible, ie = !!r[q]?.collapsible;
    if (u ? C.key === "ArrowLeft" ? ee = -5 : C.key === "ArrowRight" && (ee = 5) : C.key === "ArrowUp" ? ee = -5 : C.key === "ArrowDown" && (ee = 5), C.key === "Home") {
      C.preventDefault();
      let U = P[T] ?? 0, R = Z - U;
      if (R = qt(R, P[q] ?? 0, A[q] ?? 100), U = Z - R, U = qt(U, P[T] ?? 0, A[T] ?? 100), !$(T, U)) return;
      N((te) => {
        const G = [...te];
        return G[T] = U, G[q] = R, G;
      });
      return;
    }
    if (C.key === "End") {
      C.preventDefault();
      let U = A[T] ?? 100;
      U = Math.min(U, Z - (P[q] ?? 0));
      let R = Z - U;
      if (R = qt(R, P[q] ?? 0, A[q] ?? 100), U = Z - R, U = qt(U, P[T] ?? 0, A[T] ?? 100), !$(T, U)) return;
      N((te) => {
        const G = [...te];
        return G[T] = U, G[q] = R, G;
      });
      return;
    }
    if ((C.key === "Enter" || C.key === " ") && (ue || ie)) {
      C.preventDefault(), E(ue ? T : q);
      return;
    }
    if (ee !== 0) {
      C.preventDefault();
      let U = V + ee, R = Z - U;
      const te = P[T] ?? 0, G = A[T] ?? 100, ce = P[q] ?? 0, oe = A[q] ?? 100;
      if (U = qt(U, te, G), R = Z - U, (R < ce || R > oe) && (R = qt(R, ce, oe), U = Z - R, U = qt(U, te, G), R = Z - U), !$(T, U)) return;
      N((xe) => {
        const ve = [...xe];
        return ve[T] = U, ve[q] = R, ve;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [$t.root, u ? $t.horizontal : $t.vertical, a].filter(Boolean).join(" "),
      "aria-label": s,
      children: r.map((g, C) => {
        const P = !!w[C], A = P ? 0 : x[C] ?? 100 / r.length, T = P ? { display: "none" } : u ? { flexBasis: `${A}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${A}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, q = Cn(g.min, 0), V = Cn(g.max, 100), J = C < r.length - 1, Z = !!r[C + 1]?.collapsible;
        return /* @__PURE__ */ O("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ O(
            "div",
            {
              role: "group",
              "aria-label": g.label ?? `Pane ${C + 1}`,
              className: $t.pane,
              style: T,
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
              "aria-valuemin": q,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(A),
              "aria-label": `Resize handle ${C + 1}`,
              tabIndex: P || w[C + 1] ? -1 : 0,
              className: [$t.handle, u ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (ee) => M(C, ee),
              onPointerMove: I,
              onPointerUp: D,
              onKeyDown: (ee) => S(C, ee),
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
const kx = "_root_exk72_1", vx = "_list_exk72_5", wx = "_vertical_exk72_14", $x = "_horizontal_exk72_20", Nx = "_item_exk72_28", Ox = "_link_exk72_32", Sx = "_active_exk72_57", mn = {
  root: kx,
  list: vx,
  vertical: wx,
  horizontal: $x,
  item: Nx,
  link: Ox,
  active: Sx
};
function Fk({
  items: e,
  selector: t,
  Selector: r,
  orientation: o,
  Orientation: i,
  onClick: c,
  Click: m,
  ariaLabel: s = "Table of contents",
  className: a
}) {
  const l = t ?? r, u = o ?? i ?? "vertical", [d, v] = X(() => e[0]?.selector ?? null), x = ae(d);
  x.current = d;
  const N = H(
    (w, b) => {
      if (v(w.selector), (c ?? m)?.({ text: w.text, selector: w.selector }), b) {
        try {
          b.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          b.scrollIntoView();
        }
        const f = b;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, m]
  );
  return we(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (l) {
        const y = document.querySelector(l);
        if (y) return y;
      }
      return window;
    })();
    let _ = null;
    const f = /* @__PURE__ */ new Map(), h = () => {
      let y = null, E = null;
      for (const k of e) {
        const M = document.querySelector(k.selector);
        if (!M) continue;
        f.set(k.selector, M);
        const I = M.getBoundingClientRect();
        let D = I.top;
        if (b !== window) {
          const S = b.getBoundingClientRect();
          D = I.top - S.top;
        }
        D <= 80 ? (!E || D > E.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (E = { sel: k.selector, el: M }) : (!y || D < y.top) && (y = { sel: k.selector, top: D });
      }
      const p = E?.sel ?? y?.sel ?? e[0]?.selector ?? null;
      p && p !== x.current && v(p);
    }, $ = () => {
      h();
    };
    if (typeof IntersectionObserver < "u") {
      const y = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: b, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      _ = new IntersectionObserver((E) => {
        const p = E.filter((k) => k.isIntersecting).sort((k, M) => k.boundingClientRect.top - M.boundingClientRect.top);
        if (p[0]) {
          const k = p[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === k) {
              v(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && k.id === M.selector.slice(1)) {
              v(M.selector);
              break;
            }
          }
        } else
          h();
      }, y);
      for (const E of e) {
        const p = document.querySelector(E.selector);
        p && (_.observe(p), f.set(E.selector, p));
      }
    }
    return b === window ? (window.addEventListener("scroll", $, { passive: !0 }), h(), () => {
      window.removeEventListener("scroll", $), _?.disconnect();
    }) : (b.addEventListener("scroll", $, { passive: !0 }), h(), () => {
      b.removeEventListener("scroll", $), _?.disconnect();
    });
  }, [e, l]), /* @__PURE__ */ n("nav", { "aria-label": s, className: [mn.root, mn[u], a].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: mn.list, children: e.map((w) => {
    const b = w.selector === d;
    return /* @__PURE__ */ n("li", { className: mn.item, children: /* @__PURE__ */ n(
      "a",
      {
        href: w.selector.startsWith("#") || w.selector.startsWith(".") ? w.selector : `#${w.selector}`,
        className: [mn.link, b ? mn.active : null].filter(Boolean).join(" "),
        "aria-current": b ? "location" : void 0,
        onClick: (_) => {
          _.preventDefault();
          const f = document.querySelector(w.selector);
          N(w, f);
        },
        children: w.text
      }
    ) }, `${w.text}-${w.selector}`);
  }) }) });
}
const zx = "_root_1i6qn_1", Dx = "_viewport_1i6qn_17", Mx = "_slide_1i6qn_24", Cx = "_active_1i6qn_33", Ex = "_arrow_1i6qn_37", Ix = "_prev_1i6qn_71", Ax = "_next_1i6qn_75", Tx = "_pauseBtn_1i6qn_79", jx = "_indicators_1i6qn_110", Rx = "_indicator_1i6qn_110", Lx = "_indicatorActive_1i6qn_145", Nt = {
  root: zx,
  viewport: Dx,
  slide: Mx,
  active: Cx,
  arrow: Ex,
  prev: Ix,
  next: Ax,
  pauseBtn: Tx,
  indicators: jx,
  indicator: Rx,
  indicatorActive: Lx
};
function Hk({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: i,
  Auto: c,
  interval: m,
  Interval: s,
  pauseOnHover: a,
  PauseOnHover: l,
  showArrows: u,
  ShowArrows: d,
  showIndicators: v,
  ShowIndicators: x,
  onChange: N,
  Change: w,
  ariaLabel: b = "Carousel",
  className: _
}) {
  const f = t ?? r, h = f !== void 0, [$, y] = X(() => Math.min(Math.max(0, f ?? o), Math.max(0, e.length - 1))), E = h ? f : $, p = e.length === 0 ? 0 : Math.min(Math.max(0, E), e.length - 1), k = i ?? c ?? !1, M = m ?? s ?? 3e3, I = a ?? l ?? !0, D = u ?? d ?? !0, S = v ?? x ?? !0, [g, C] = X(!1), [P, A] = X(!1), T = g || P, q = ae(null), V = Ye(), J = H(
    (ce) => {
      const oe = e.length === 0 ? 0 : (ce % e.length + e.length) % e.length;
      h || y(oe), (N ?? w)?.(oe);
    },
    [h, N, w, e.length]
  ), Z = H(() => {
    J(p - 1);
  }, [J, p]), ee = H(() => {
    J(p + 1);
  }, [J, p]), ue = H(
    (ce) => {
      J(ce);
    },
    [J]
  );
  we(() => {
    if (!k || T || e.length <= 1) return;
    const ce = setInterval(() => {
      J(p + 1);
    }, M);
    return () => clearInterval(ce);
  }, [k, T, M, p, J, e.length]);
  const ie = (ce) => {
    e.length !== 0 && (ce.key === "ArrowLeft" ? (ce.preventDefault(), Z()) : ce.key === "ArrowRight" ? (ce.preventDefault(), ee()) : ce.key === "Home" ? (ce.preventDefault(), ue(0)) : ce.key === "End" && (ce.preventDefault(), ue(e.length - 1)));
  }, U = () => {
    I && k && A(!0);
  }, R = () => {
    I && k && A(!1);
  }, te = () => {
    I && k && A(!0);
  }, G = () => {
    I && k && A(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ O(
    "div",
    {
      ref: q,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [Nt.root, _].filter(Boolean).join(" "),
      onKeyDown: ie,
      onMouseEnter: U,
      onMouseLeave: R,
      onFocusCapture: te,
      onBlurCapture: G,
      children: [
        /* @__PURE__ */ n("div", { id: V, className: Nt.viewport, children: e.map((ce, oe) => {
          const xe = oe === p;
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
        k ? /* @__PURE__ */ n(
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
        S && e.length > 1 ? /* @__PURE__ */ n("div", { className: Nt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ce, oe) => {
          const xe = oe === p;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Nt.indicator, xe ? Nt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${oe + 1}`,
              "aria-current": xe ? "true" : void 0,
              "aria-controls": V,
              onClick: () => ue(oe)
            },
            oe
          );
        }) }) : null
      ]
    }
  );
}
const Px = "_root_1arpg_1", Bx = "_group_1arpg_20", Fx = "_itemWrapper_1arpg_30", Hx = "_treeitem_1arpg_34", qx = "_disabled_1arpg_50", Kx = "_selected_1arpg_60", Ux = "_caret_1arpg_66", Wx = "_caretIcon_1arpg_113", Vx = "_caretOpen_1arpg_120", Xx = "_caretPlaceholder_1arpg_124", Gx = "_label_1arpg_130", Yx = "_loading_1arpg_137", Zx = "_loadingRow_1arpg_143", Jx = "_empty_1arpg_149", Qx = "_checkbox_1arpg_155", rt = {
  root: Px,
  group: Bx,
  itemWrapper: Fx,
  treeitem: Hx,
  disabled: qx,
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
function ey({
  indeterminate: e,
  ...t
}) {
  const r = ae(null);
  return we(() => {
    r.current && (r.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: r, type: "checkbox", ...t });
}
function qk({
  data: e,
  Data: t,
  children: r,
  Children: o,
  textProperty: i,
  TextProperty: c,
  keyProperty: m,
  KeyProperty: s,
  selectionMode: a,
  SelectionMode: l,
  selectedItem: u,
  SelectedItem: d,
  selectedItems: v,
  SelectedItems: x,
  defaultSelectedItem: N,
  defaultSelectedItems: w,
  onChange: b,
  Change: _,
  onExpand: f,
  Expand: h,
  onCollapse: $,
  Collapse: y,
  loadChildData: E,
  LoadChildData: p,
  template: k,
  Template: M,
  itemTemplate: I,
  ItemTemplate: D,
  ariaLabel: S,
  AriaLabel: g,
  allowCheckBoxes: C = !1,
  checkedKeys: P,
  defaultCheckedKeys: A,
  onCheckedChange: T,
  allowCheckChildren: q = !0,
  className: V
}) {
  const J = e ?? t ?? [], Z = r ?? o, ee = i ?? c ?? "text", ue = m ?? s ?? "id", ie = a ?? l ?? "single", U = S ?? g ?? "Tree", R = E ?? p, te = k ?? M ?? I ?? D, G = H(
    (B) => {
      const Y = B[ue];
      return Y != null ? String(Y) : String(B.id ?? "");
    },
    [ue]
  ), ce = H(
    (B) => {
      const Y = B[ee];
      if (Y != null) return String(Y);
      const se = B.text;
      return se != null ? String(se) : "";
    },
    [ee]
  ), oe = H(
    (B) => {
      if (Z) {
        const se = Z(B);
        if (se !== void 0) return se;
      }
      const Y = B.children;
      if (Array.isArray(Y)) return Y;
    },
    [Z]
  ), xe = H(
    (B) => {
      const Y = /* @__PURE__ */ new Set(), se = (pe) => {
        for (const fe of pe) {
          const ye = G(fe);
          fe.expanded && Y.add(ye);
          const je = oe(fe);
          je && je.length > 0 && se(je);
        }
      };
      return se(B), Y;
    },
    [G, oe]
  ), [ve, Be] = X(() => xe(J)), [ke, We] = X(() => /* @__PURE__ */ new Map()), [be, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = u ?? d, Le = v ?? x, et = ie === "multiple" ? Le !== void 0 : Ve !== void 0, W = H(() => {
    if (ie === "multiple") {
      if (w && w.length > 0)
        return new Set(w.map((se) => G(se)));
      const B = /* @__PURE__ */ new Set(), Y = (se) => {
        for (const pe of se) {
          pe.selected && B.add(G(pe));
          const fe = oe(pe);
          fe && Y(fe);
        }
      };
      return Y(J), B;
    } else {
      if (N) return /* @__PURE__ */ new Set([G(N)]);
      let B = null;
      const Y = (se) => {
        for (const pe of se) {
          if (pe.selected)
            return B = G(pe), !0;
          const fe = oe(pe);
          if (fe && Y(fe)) return !0;
        }
        return !1;
      };
      return Y(J), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [ie, N, w, G, oe, J]), [z, F] = X(() => W()), ne = $e(() => {
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
  }, [ie, Le, Ve, z, G]), _e = H(
    (B) => {
      let Y;
      const se = (pe) => {
        for (const fe of pe) {
          if (G(fe) === B)
            return Y = fe, !0;
          const je = ke.get(G(fe)) ?? oe(fe);
          if (je && se(je)) return !0;
        }
        return !1;
      };
      if (se(J), !Y) {
        for (const pe of ke.values())
          if (se(pe)) break;
      }
      return Y;
    },
    [J, ke, G, oe]
  ), re = H(() => {
    const B = /* @__PURE__ */ new Map(), Y = (se) => {
      for (const pe of se) {
        const fe = G(pe);
        B.set(fe, pe);
        const je = ke.get(fe) ?? oe(pe);
        je && Y(je);
      }
    };
    return Y(J), B;
  }, [J, ke, G, oe]), he = H(
    (B) => {
      const Y = G(B);
      if (!B.disabled)
        if (ie === "multiple") {
          const pe = new Set(ne);
          pe.has(Y) ? pe.delete(Y) : pe.add(Y), et || F(pe);
          const fe = b ?? _;
          if (fe) {
            const ye = re(), je = [];
            for (const j of pe) {
              const L = ye.get(j) ?? _e(j);
              L && je.push(L);
            }
            fe({ item: B, selectedItems: je });
          }
        } else if (!ne.has(Y) || ne.size !== 1 || !ne.has(Y)) {
          et || F(/* @__PURE__ */ new Set([Y]));
          const fe = b ?? _;
          fe && fe({ item: B, selectedItem: B });
        } else {
          const fe = b ?? _;
          fe && fe({ item: B, selectedItem: B });
        }
    },
    [G, ie, ne, et, b, _, re, _e]
  ), Ne = H(
    async (B) => {
      const Y = G(B);
      if (!!B.disabled) return;
      const pe = ve.has(Y), fe = f ?? h, ye = $ ?? y, je = oe(B), L = ke.get(Y) ?? je, me = !(L !== void 0 && L.length > 0) && R != null;
      if (pe) {
        Be((Ie) => {
          const Ae = new Set(Ie);
          return Ae.delete(Y), Ae;
        }), ye?.({ item: B });
        return;
      }
      if (me) {
        if (be.has(Y)) return;
        Ze((Ie) => {
          const Ae = new Set(Ie);
          return Ae.add(Y), Ae;
        });
        try {
          const Ae = await R(B);
          We((Me) => {
            const at = new Map(Me);
            return at.set(Y, Ae), at;
          }), Be((Me) => {
            const at = new Set(Me);
            return at.add(Y), at;
          }), fe?.({ item: B });
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
      }), fe?.({ item: B });
    },
    [G, ve, oe, ke, R, be, f, h, $, y]
  ), Fe = $e(() => {
    const B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Set(), pe = (fe, ye) => {
      for (const je of fe) {
        const j = G(je);
        B.has(j) || B.set(j, []), Y.set(j, ye), je.disabled && se.add(j);
        const le = ke.get(j) ?? oe(je);
        le && le.length > 0 && (B.set(j, le.map((me) => G(me))), pe(le, j));
      }
    };
    return pe(J, null), { childrenOf: B, parentOf: Y, disabledKeys: se };
  }, [J, ke, G, oe]), Je = H(
    (B) => {
      const Y = [], se = [...Fe.childrenOf.get(B) ?? []];
      for (; se.length > 0; ) {
        const pe = se.pop();
        Y.push(pe), se.push(...Fe.childrenOf.get(pe) ?? []);
      }
      return Y;
    },
    [Fe]
  ), [dt, yt] = X(
    () => new Set(A ?? [])
  ), Q = P !== void 0 ? new Set(P) : dt, Se = H(
    (B) => {
      const Y = Fe.disabledKeys;
      return Je(B).filter((se) => !Y.has(se));
    },
    [Je, Fe]
  ), nt = H(
    (B) => {
      if (Q.has(B)) return !0;
      if (!C || !q) return !1;
      const Y = Se(B);
      return Y.length > 0 && Y.every((se) => Q.has(se));
    },
    [Q, C, q, Se]
  ), Wt = H(
    (B) => {
      if (!C || !q || Q.has(B)) return !1;
      const Y = Se(B);
      if (Y.length === 0) return !1;
      const se = Y.filter((pe) => Q.has(pe)).length;
      return se > 0 && se < Y.length;
    },
    [Q, C, q, Se]
  ), Ot = H(
    (B) => {
      if (!C || B.disabled) return;
      const Y = G(B), se = new Set(Q);
      if (se.has(Y) || nt(Y)) {
        if (se.delete(Y), q)
          for (const pe of Se(Y)) se.delete(pe);
      } else if (se.add(Y), q)
        for (const pe of Se(Y)) se.add(pe);
      P === void 0 && yt(se), T?.([...se]);
    },
    [
      C,
      q,
      P,
      Q,
      Se,
      G,
      nt,
      T
    ]
  ), ze = $e(() => {
    const B = [], Y = (se, pe, fe) => {
      se.forEach((ye, je) => {
        const j = G(ye), L = ce(ye), le = ke.get(j) ?? oe(ye);
        let me;
        ke.has(j) ? me = ke.get(j).length > 0 : le !== void 0 ? me = le.length > 0 : R ? me = !0 : me = !1;
        const Ie = ve.has(j), Ae = !!ye.disabled, Me = se.length, at = je + 1;
        if (B.push({
          item: ye,
          key: j,
          text: L,
          level: pe,
          posInSet: at,
          setSize: Me,
          hasChildren: me,
          expanded: Ie,
          parentKey: fe,
          disabled: Ae
        }), me && Ie) {
          const zt = ke.get(j) ?? le;
          zt && zt.length > 0 && Y(zt, pe + 1, j);
        }
      });
    };
    return Y(J, 1, null), B;
  }, [J, G, ce, oe, ke, ve, R, be]), [Xe, kt] = X(() => ze[0]?.key ?? null), Rt = ae(""), Jt = ae(null), K = ae(null);
  we(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && kt(B.key);
    } else if (Xe && !ze.some((B) => B.key === Xe)) {
      const B = ze[0];
      kt(B ? B.key : null);
    }
  }, [ze, Xe]), we(() => {
    if (Xe) {
      const B = K.current?.querySelector(`[data-key="${CSS.escape(Xe)}"]`);
      let Y = null;
      B || (Y = K.current?.querySelector(`[data-key="${Xe}"]`) ?? null);
      const se = B ?? Y;
      se && document.activeElement !== se && K.current?.contains(document.activeElement) && se.focus();
    }
  }, [Xe]);
  const de = H(
    (B) => {
      kt(B), requestAnimationFrame(() => {
        const Y = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
        let se = K.current?.querySelector(`[data-key="${Y}"]`);
        se || (se = K.current?.querySelector(`[data-key="${B}"]`) ?? null), se?.focus();
      });
    },
    []
  ), Pe = H(
    (B) => ze.find((se) => se.key === B)?.parentKey ?? null,
    [ze]
  ), qe = H(
    (B) => {
      if (ze.length === 0) return;
      const Y = Xe ? ze.findIndex((fe) => fe.key === Xe) : -1, se = Y >= 0 ? ze[Y] : void 0;
      let pe = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), Y === -1)
          pe = ze[0]?.key ?? null;
        else {
          const fe = (Y + 1) % ze.length, ye = ze[fe];
          ye && (pe = ye.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), Y === -1) {
          const fe = ze[ze.length - 1];
          fe && (pe = fe.key);
        } else {
          const fe = (Y - 1 + ze.length) % ze.length, ye = ze[fe];
          ye && (pe = ye.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !se) return;
        if (se.hasChildren && !se.expanded)
          Ne(se.item);
        else if (se.hasChildren && se.expanded) {
          const fe = Y + 1, ye = ze[fe];
          ye && ye.parentKey === se.key && de(ye.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !se) return;
        if (se.hasChildren && se.expanded)
          Ne(se.item);
        else {
          const fe = Pe(se.key);
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
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !se)) return;
        if (B.key === " " && C) {
          const fe = _e(se.key);
          fe && Ot(fe);
          return;
        }
        he(se.item);
        return;
      }
      if (B.key.length === 1 && /^[a-zA-Z0-9]$/.test(B.key)) {
        B.preventDefault();
        const fe = (Rt.current + B.key).toLowerCase();
        Rt.current = fe, Jt.current && clearTimeout(Jt.current), Jt.current = setTimeout(() => {
          Rt.current = "";
        }, 500);
        const ye = Y >= 0 ? Y + 1 : 0, L = [...ze, ...ze].slice(ye, ye + ze.length).find((le) => le.text.toLowerCase().startsWith(fe));
        L && de(L.key);
        return;
      }
    },
    [ze, Xe, de, Ne, he, Pe, C, Ot]
  ), Lt = H(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && kt(B.key);
    }
  }, [Xe, ze]), St = (B, Y, se) => /* @__PURE__ */ n("ul", { role: "group", className: rt.group, children: B.map((pe, fe) => {
    const ye = G(pe), je = ce(pe), j = ke.get(ye) ?? oe(pe);
    let L;
    ke.has(ye) ? L = ke.get(ye).length > 0 : j !== void 0 ? L = j.length > 0 : R ? L = !0 : L = !1;
    const le = ve.has(ye), me = ne.has(ye), Ie = !!pe.disabled, Ae = be.has(ye), Me = Xe === ye, at = B.length, zt = fe + 1, es = te ? te(pe) : je, _r = C ? {
      checked: nt(ye),
      indeterminate: Wt(ye)
    } : null;
    return /* @__PURE__ */ O("li", { role: "none", className: rt.itemWrapper, children: [
      /* @__PURE__ */ O(
        "div",
        {
          role: "treeitem",
          "data-key": ye,
          tabIndex: Me ? 0 : -1,
          "aria-expanded": L ? le : void 0,
          "aria-selected": me,
          "aria-level": Y,
          "aria-setsize": at,
          "aria-posinset": zt,
          "aria-disabled": Ie || void 0,
          "aria-busy": Ae || void 0,
          className: [
            rt.treeitem,
            me ? rt.selected : null,
            Ie ? rt.disabled : null,
            Me ? rt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            de(ye), Ie || he(pe);
          },
          onFocus: () => kt(ye),
          children: [
            C ? /* @__PURE__ */ n(
              ey,
              {
                className: rt.checkbox,
                checked: _r?.checked ?? !1,
                indeterminate: _r?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${je}`,
                onClick: (Rn) => Rn.stopPropagation(),
                onChange: () => Ot(pe)
              }
            ) : null,
            L ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: rt.caret,
                "aria-label": `${le ? "Collapse" : "Expand"} ${je}`,
                "aria-expanded": le,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Rn) => {
                  Rn.stopPropagation(), de(ye), Ne(pe);
                },
                children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [rt.caretIcon, le ? rt.caretOpen : null].filter(Boolean).join(" "), children: /* @__PURE__ */ n(De, { name: "chevron-right", size: 10 }) })
              }
            ) : /* @__PURE__ */ n("span", { className: rt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ n("span", { className: rt.label, children: es }),
            Ae ? /* @__PURE__ */ n("span", { className: rt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      L && le ? Ae ? /* @__PURE__ */ n("div", { className: rt.loadingRow, "aria-busy": "true", children: "Loading…" }) : j && j.length > 0 ? St(j, Y + 1) : ke.has(ye) && ke.get(ye).length > 0 ? St(ke.get(ye), Y + 1) : (j && j.length === 0, null) : null
    ] }, ye);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: K,
      role: "tree",
      "aria-label": U,
      "aria-multiselectable": ie === "multiple" || void 0,
      tabIndex: 0,
      className: [rt.root, V].filter(Boolean).join(" "),
      onKeyDown: qe,
      onFocus: Lt,
      children: J.length === 0 ? /* @__PURE__ */ n("div", { className: rt.empty, children: "No items" }) : St(J, 1)
    }
  );
}
const ty = "_root_ky8zf_1", ny = "_panel_ky8zf_8", ry = "_header_ky8zf_19", sy = "_listbox_ky8zf_28", oy = "_option_ky8zf_42", ay = "_disabled_ky8zf_57", ly = "_active_ky8zf_66", iy = "_selected_ky8zf_70", cy = "_empty_ky8zf_86", dy = "_controls_ky8zf_93", uy = "_reorder_ky8zf_102", _y = "_btn_ky8zf_110", Re = {
  root: ty,
  panel: ny,
  header: ry,
  listbox: sy,
  option: oy,
  disabled: ay,
  active: ly,
  selected: iy,
  empty: cy,
  controls: dy,
  reorder: uy,
  btn: _y
};
function st(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function Wn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Kk({
  source: e,
  Source: t,
  target: r,
  Target: o,
  value: i,
  Value: c,
  targetValue: m,
  TargetValue: s,
  data: a,
  Data: l,
  onSourceChange: u,
  SourceChange: d,
  onTargetChange: v,
  TargetChange: x,
  keyProperty: N,
  KeyProperty: w,
  onMove: b,
  Move: _,
  ariaLabel: f,
  AriaLabel: h,
  className: $
}) {
  const y = N ?? w ?? "id", E = f ?? h ?? "PickList", p = e ?? t ?? i ?? c ?? a ?? l ?? [], k = r ?? o ?? m ?? s ?? [], [M, I] = X(() => [...p]), [D, S] = X(() => [...k]);
  we(() => {
    const z = e ?? t ?? i ?? c ?? a ?? l;
    z !== void 0 && I([...z]);
  }, [e, t, i, c, a, l]), we(() => {
    const z = r ?? o ?? m ?? s;
    z !== void 0 && S([...z]);
  }, [r, o, m, s]);
  const [g, C] = X(() => /* @__PURE__ */ new Set()), [P, A] = X(() => /* @__PURE__ */ new Set()), [T, q] = X(() => {
    const z = p.findIndex((F) => !F.disabled);
    return z >= 0 ? z : 0;
  }), [V, J] = X(() => {
    const z = k.findIndex((F) => !F.disabled);
    return z >= 0 ? z : 0;
  }), Z = $e(() => M.map((z, F) => z.disabled ? -1 : F).filter((z) => z >= 0), [M]), ee = $e(() => D.map((z, F) => z.disabled ? -1 : F).filter((z) => z >= 0), [D]);
  we(() => {
    if (T >= M.length) {
      const z = Z[Z.length - 1];
      q(z ?? 0);
    } else if (M.length > 0 && Z.length > 0 && !Z.includes(T)) {
      const z = Z[0];
      z !== void 0 && q(z);
    }
  }, [T, M.length, Z]), we(() => {
    if (V >= D.length) {
      const z = ee[ee.length - 1];
      J(z ?? 0);
    } else if (D.length > 0 && ee.length > 0 && !ee.includes(V)) {
      const z = ee[0];
      z !== void 0 && J(z);
    }
  }, [V, D.length, ee]), we(() => {
    C((z) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of z)
        M.some((re) => st(re, y) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [M, y]), we(() => {
    A((z) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of z)
        D.some((re) => st(re, y) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [D, y]);
  const ue = H(
    (z) => {
      (u ?? d)?.(z);
    },
    [u, d]
  ), ie = H(
    (z) => {
      (v ?? x)?.(z);
    },
    [v, x]
  ), U = H(
    (z) => {
      (b ?? _)?.(z);
    },
    [b, _]
  ), R = H(
    (z) => {
      const F = M[z];
      if (!F || F.disabled) return;
      const ne = st(F, y);
      C((_e) => {
        const re = new Set(_e);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), q(z);
    },
    [M, y]
  ), te = H(
    (z) => {
      const F = D[z];
      if (!F || F.disabled) return;
      const ne = st(F, y);
      A((_e) => {
        const re = new Set(_e);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), J(z);
    },
    [D, y]
  ), G = H(() => {
    const z = [], F = [];
    for (const he of M) {
      const Ne = st(he, y);
      g.has(Ne) && !he.disabled ? z.push(he) : F.push(he);
    }
    if (z.length === 0) return;
    const ne = F, _e = [...D, ...z];
    I(ne), S(_e), C(/* @__PURE__ */ new Set());
    const re = new Set(z.map((he) => st(he, y)));
    A(re), ue(ne), ie(_e), U({ source: ne, target: _e, moved: z, direction: "toTarget" });
  }, [M, D, g, y, ue, ie, U]), ce = H(() => {
    const z = [], F = [];
    for (const he of D) {
      const Ne = st(he, y);
      P.has(Ne) && !he.disabled ? z.push(he) : F.push(he);
    }
    if (z.length === 0) return;
    const ne = F, _e = [...M, ...z];
    S(ne), I(_e), A(/* @__PURE__ */ new Set());
    const re = new Set(z.map((he) => st(he, y)));
    C(re), ue(_e), ie(ne), U({ source: _e, target: ne, moved: z, direction: "toSource" });
  }, [M, D, P, y, ue, ie, U]), oe = H(() => {
    const z = M.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const F = M.filter((_e) => !!_e.disabled), ne = [...D, ...z];
    I(F), S(ne), C(/* @__PURE__ */ new Set()), ue(F), ie(ne), U({ source: F, target: ne, moved: z, direction: "allToTarget" });
  }, [M, D, y, ue, ie, U]), xe = H(() => {
    const z = D.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const F = D.filter((_e) => !!_e.disabled), ne = [...M, ...z];
    S(F), I(ne), A(/* @__PURE__ */ new Set()), ue(ne), ie(F), U({ source: ne, target: F, moved: z, direction: "allToSource" });
  }, [M, D, ue, ie, U]), ve = H(() => {
    if (P.size === 0) return;
    const z = [...D], F = P, ne = [];
    for (let re = 1; re < z.length; re++) {
      const he = z[re], Ne = z[re - 1];
      if (!he || !Ne) continue;
      const Fe = st(he, y), Je = st(Ne, y);
      F.has(Fe) && !F.has(Je) && !he.disabled && !Ne.disabled && (z[re - 1] = he, z[re] = Ne, ne.push(he));
    }
    if (ne.length === 0) return;
    S(z), ie(z), U({ source: M, target: z, moved: ne, direction: "up" });
    const _e = Array.from(F)[0];
    if (_e) {
      const re = z.findIndex((he) => st(he, y) === _e);
      re >= 0 && J(re);
    }
  }, [D, P, y, M, ie, U]), Be = H(() => {
    if (P.size === 0) return;
    const z = [...D], F = P, ne = [];
    for (let re = z.length - 2; re >= 0; re--) {
      const he = z[re], Ne = z[re + 1];
      if (!he || !Ne) continue;
      const Fe = st(he, y), Je = st(Ne, y);
      F.has(Fe) && !F.has(Je) && !he.disabled && !Ne.disabled && (z[re] = Ne, z[re + 1] = he, ne.push(he));
    }
    if (ne.length === 0) return;
    S(z), ie(z), U({ source: M, target: z, moved: ne, direction: "down" });
    const _e = Array.from(F)[0];
    if (_e) {
      const re = z.findIndex((he) => st(he, y) === _e);
      re >= 0 && J(re);
    }
  }, [D, P, y, M, ie, U]), ke = g.size > 0, We = P.size > 0, be = ae(""), Ze = ae(null), Ve = ae(""), Le = ae(null), tt = H(
    (z) => {
      if (M.length === 0) return;
      const F = Z;
      if (F.length === 0) return;
      const ne = F.includes(T) ? T : F[0] ?? 0;
      let _e = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const re = F.indexOf(ne);
        _e = F[(re + 1) % F.length] ?? F[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const re = F.indexOf(ne);
        _e = F[(re - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), _e = F[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), _e = F[F.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), R(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (be.current + z.key).toLowerCase();
        be.current = re, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const he = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = he.slice(Ne).find((Je) => Wn(M[Je]).toLowerCase().startsWith(re));
        Fe != null && q(Fe);
        return;
      }
      _e >= 0 && q(_e);
    },
    [M, Z, T, R]
  ), Qe = H(
    (z) => {
      if (D.length === 0) return;
      const F = ee;
      if (F.length === 0) return;
      const ne = F.includes(V) ? V : F[0] ?? 0;
      let _e = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const re = F.indexOf(ne);
        _e = F[(re + 1) % F.length] ?? F[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const re = F.indexOf(ne);
        _e = F[(re - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), _e = F[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), _e = F[F.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), te(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (Ve.current + z.key).toLowerCase();
        Ve.current = re, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const he = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = he.slice(Ne).find((Je) => Wn(D[Je]).toLowerCase().startsWith(re));
        Fe != null && J(Fe);
        return;
      }
      _e >= 0 && J(_e);
    },
    [D, ee, V, te]
  ), et = ae(null), W = ae(null);
  return /* @__PURE__ */ O("div", { className: [Re.root, $].filter(Boolean).join(" "), "aria-label": E, children: [
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
          children: M.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : M.map((z, F) => {
            const ne = st(z, y), _e = g.has(ne), re = F === T, he = !!z.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": _e,
                "aria-disabled": he || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Re.option,
                  _e ? Re.selected : null,
                  re ? Re.active : null,
                  he ? Re.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => R(F),
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
          "aria-disabled": !ke || void 0,
          disabled: !ke,
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
          children: D.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : D.map((z, F) => {
            const ne = st(z, y), _e = P.has(ne), re = F === V, he = !!z.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": _e,
                "aria-disabled": he || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Re.option,
                  _e ? Re.selected : null,
                  re ? Re.active : null,
                  he ? Re.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => te(F),
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
            onClick: ve,
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
  ] });
}
const fy = "_root_928ty_1", py = "_header_928ty_8", my = "_title_928ty_15", hy = "_navBtn_928ty_20", gy = "_resources_928ty_39", by = "_resource_928ty_39", xy = "_grid_928ty_50", yy = "_timeCol_928ty_55", ky = "_timeCell_928ty_61", vy = "_dayCol_928ty_66", wy = "_dayHeader_928ty_73", $y = "_slot_928ty_81", Ny = "_event_928ty_91", ft = {
  root: fy,
  header: py,
  title: my,
  navBtn: hy,
  resources: gy,
  resource: by,
  grid: xy,
  timeCol: yy,
  timeCell: ky,
  dayCol: vy,
  dayHeader: wy,
  slot: $y,
  event: Ny
};
function Lr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Uk({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: o,
  resources: i,
  onEventClick: c,
  onSlotClick: m,
  ariaLabel: s = "Scheduler",
  className: a
}) {
  const [l, u] = X(r ?? /* @__PURE__ */ new Date()), d = r ?? l, v = (w) => {
    r || u(w), o?.(w);
  }, x = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (w, b) => {
    const _ = new Date(d);
    return _.setDate(d.getDate() - d.getDay() + b), _;
  }) : Array.from({ length: 30 }, (w, b) => {
    const _ = new Date(d);
    return _.setDate(1 + b), _;
  }), N = Array.from({ length: 12 }, (w, b) => 8 + b);
  return /* @__PURE__ */ O("div", { className: [ft.root, a].filter(Boolean).join(" "), role: "group", "aria-label": s, children: [
    /* @__PURE__ */ O("div", { className: ft.header, children: [
      /* @__PURE__ */ n("button", { type: "button", className: ft.navBtn, "aria-label": "Previous", onClick: () => {
        const w = new Date(d);
        w.setDate(w.getDate() - 7), v(w);
      }, children: "‹" }),
      /* @__PURE__ */ n("span", { className: ft.title, children: d.toLocaleDateString() }),
      /* @__PURE__ */ n("button", { type: "button", className: ft.navBtn, "aria-label": "Next", onClick: () => {
        const w = new Date(d);
        w.setDate(w.getDate() + 7), v(w);
      }, children: "›" })
    ] }),
    i && /* @__PURE__ */ n("div", { className: ft.resources, children: i.map((w) => /* @__PURE__ */ n("div", { className: ft.resource, role: "presentation", "aria-label": w.name, children: w.name }, w.id)) }),
    /* @__PURE__ */ O("div", { className: ft.grid, role: "presentation", children: [
      /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: N.map((w) => /* @__PURE__ */ O("div", { className: ft.timeCell, children: [
        w,
        ":00"
      ] }, w)) }),
      x.map((w) => /* @__PURE__ */ O("div", { className: ft.dayCol, role: "presentation", title: w.toLocaleDateString(), onClick: () => m?.({ date: w }), tabIndex: 0, "aria-label": w.toLocaleDateString(), children: [
        /* @__PURE__ */ n("div", { className: ft.dayHeader, children: w.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        N.map((b) => /* @__PURE__ */ n("div", { className: ft.slot, tabIndex: -1, onClick: () => {
          const _ = new Date(w);
          _.setHours(b), m?.({ date: _ });
        } }, b)),
        e.filter((b) => b.start.toDateString() === w.toDateString()).map((b) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ft.event,
            "aria-label": `${b.title} ${Lr(b.start)} - ${Lr(b.end)}`,
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
const Oy = "_root_1n0oq_1", Sy = "_header_1n0oq_8", zy = "_headerCell_1n0oq_15", Dy = "_timeline_1n0oq_21", My = "_row_1n0oq_26", Cy = "_taskName_1n0oq_32", Ey = "_timelineCell_1n0oq_37", Iy = "_bar_1n0oq_43", Ay = "_progress_1n0oq_56", Ty = "_dep_1n0oq_61", jt = {
  root: Oy,
  header: Sy,
  headerCell: zy,
  timeline: Dy,
  row: My,
  taskName: Cy,
  timelineCell: Ey,
  bar: Iy,
  progress: Ay,
  dep: Ty
};
function Wk({ tasks: e, view: t = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: i }) {
  const [c, m] = X(null);
  return /* @__PURE__ */ O("div", { className: [jt.root, i].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ O("div", { className: jt.header, role: "row", children: [
      /* @__PURE__ */ n("div", { className: jt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ O("div", { className: jt.timeline, role: "columnheader", children: [
        "Timeline (",
        t,
        ")"
      ] })
    ] }),
    e.map((s) => /* @__PURE__ */ O("div", { className: jt.row, role: "row", "aria-selected": c === s.id, children: [
      /* @__PURE__ */ n("div", { className: jt.taskName, role: "gridcell", children: s.name }),
      /* @__PURE__ */ O("div", { className: jt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: jt.bar,
            role: "button",
            "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
            "aria-pressed": c === s.id,
            tabIndex: 0,
            onClick: () => {
              m(s.id), r?.({ task: s });
            },
            onKeyDown: (a) => {
              (a.key === "Enter" || a.key === " ") && (a.preventDefault(), m(s.id), r?.({ task: s }));
            },
            children: /* @__PURE__ */ n("div", { className: jt.progress, style: { width: `${s.progress ?? 0}%` } })
          }
        ),
        s.dependencies?.map((a) => /* @__PURE__ */ n("svg", { className: jt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dx-border-color)" }) }, a))
      ] })
    ] }, s.id))
  ] });
}
const jy = "_root_1p46p_1", Ry = "_fields_1p46p_6", Ly = "_chip_1p46p_13", Py = "_table_1p46p_35", By = "_totalRow_1p46p_55", Fy = "_total_1p46p_55", hn = {
  root: jy,
  fields: Ry,
  chip: Ly,
  table: Py,
  totalRow: By,
  total: Fy
}, Vn = {
  Sum: (e) => e.reduce((t, r) => t + r, 0),
  Average: (e) => e.length ? e.reduce((t, r) => t + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function En(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Vk({ data: e, rowFields: t = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: i, ariaLabel: c = "Pivot table", className: m }) {
  const s = t, a = r, l = o, u = (b, _, f) => {
    const h = b === "row" ? s.filter((E) => E.property !== _) : s, $ = b === "col" ? a.filter((E) => E.property !== _) : a, y = b === "agg" ? l.filter((E) => !(E.property === _ && E.aggregate === f)) : l;
    i?.({ rowFields: h, columnFields: $, aggregateFields: y });
  }, d = (b, _) => _.map((f) => String(b[f.property])).join(""), v = [...new Set(s.length ? e.map((b) => d(b, s)) : [""])].sort(), x = [...new Set(a.length ? e.map((b) => d(b, a)) : [""])].sort(), N = (b, _, f) => {
    const h = e.filter((y) => d(y, s) === b && d(y, a) === _), $ = h.map((y) => Number(y[f.property])).filter((y) => !Number.isNaN(y));
    return !$.length && f.aggregate !== "Count" ? 0 : Vn[f.aggregate](f.aggregate === "Count" ? h.map(() => 1) : $);
  }, w = (b, _, f, h) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: hn.chip,
      "aria-label": `Remove ${b} field ${f}`,
      onClick: () => u(b, _, h),
      children: [
        f,
        h ? ` (${h})` : ""
      ]
    },
    `${b}-${f}-${h ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [hn.root, m].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: hn.fields, children: [
      s.map((b) => w("row", b.property, b.title ?? b.property)),
      a.map((b) => w("col", b.property, b.title ?? b.property)),
      l.map((b) => w("agg", b.property, b.title ?? b.property, b.aggregate))
    ] }),
    /* @__PURE__ */ O("table", { className: hn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        x.map((b) => /* @__PURE__ */ n("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ O("tbody", { children: [
        v.map((b) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: b || "—" }),
          x.map((_) => /* @__PURE__ */ n("td", { title: En(N(b, _, l[0] ?? { property: "", aggregate: "Count" })), children: l.length ? En(N(b, _, l[0])) : "" }, _)),
          /* @__PURE__ */ n("td", { className: hn.total, children: l.length ? En(
            Vn[l[0].aggregate](
              x.flatMap((_) => e.filter((f) => d(f, s) === b && d(f, a) === _).map((f) => Number(f[l[0].property]))).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ O("tr", { className: hn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          x.map((b) => /* @__PURE__ */ n("td", { children: l.length ? En(
            Vn[l[0].aggregate](
              e.filter((_) => d(_, a) === b).map((_) => Number(_[l[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, b)),
          /* @__PURE__ */ n("td", { children: l.length ? En(Vn[l[0].aggregate](e.map((b) => Number(b[l[0].property])).filter((b) => !Number.isNaN(b)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Hy = "_root_1axvl_1", qy = "_reverse_1axvl_10", Ky = "_item_1axvl_14", Uy = "_marker_1axvl_35", Wy = "_body_1axvl_46", Vy = "_label_1axvl_50", Xy = "_content_1axvl_56", on = {
  root: Hy,
  reverse: qy,
  item: Ky,
  marker: Uy,
  body: Wy,
  label: Vy,
  content: Xy
};
function Xk({ items: e, reverse: t = !1, ariaLabel: r = "Timeline", className: o }) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [on.root, t ? on.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: i.map((c, m) => /* @__PURE__ */ O("li", { className: on.item, children: [
        /* @__PURE__ */ n("span", { className: on.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ O("div", { className: on.body, children: [
          /* @__PURE__ */ n("div", { className: on.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: on.content, children: c.content })
        ] })
      ] }, m))
    }
  );
}
const Gy = "_root_4ls7q_1", Yy = "_header_4ls7q_13", Zy = "_headCell_4ls7q_22", Jy = "_row_4ls7q_32", Qy = "_cell_4ls7q_37", In = {
  root: Gy,
  header: Yy,
  headCell: Zy,
  row: Jy,
  cell: Qy
};
function Gk({ count: e, rowHeight: t = 40, height: r = 320, loadData: o, columns: i = [], ariaLabel: c = "Virtual grid", className: m }) {
  const [s, a] = X(/* @__PURE__ */ new Map()), [l, u] = X(0), d = ae(/* @__PURE__ */ new Set()), v = Math.ceil(r / t), x = Math.max(0, Math.floor(l / t) - 3), N = Math.min(e, x + v + 6), w = H(
    (_, f) => {
      let h = !1;
      for (let $ = _; $ < f; $++)
        !s.has($) && !d.current.has($) && (h = !0);
      if (h) {
        for (let $ = _; $ < f; $++) d.current.add($);
        o({ skip: _, top: f }).then(($) => {
          a((y) => {
            const E = new Map(y);
            return $.forEach((p, k) => E.set(_ + k, p)), E;
          });
          for (let y = _; y < f; y++) d.current.delete(y);
        });
      }
    },
    [s, o]
  );
  we(() => {
    w(x, N);
  }, [x, N]);
  const b = [];
  for (let _ = x; _ < N; _++) {
    const f = s.get(_) ?? {};
    b.push(
      /* @__PURE__ */ n("div", { className: In.row, role: "row", style: { height: t }, children: i.map((h) => /* @__PURE__ */ n("div", { role: "gridcell", className: In.cell, style: h.width ? { width: h.width } : void 0, children: String(f[h.property] ?? "") }, h.property)) }, _)
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [In.root, m].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (_) => u(_.target.scrollTop),
      onKeyDown: (_) => {
        const f = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), f.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), f.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), f.scrollTop += r) : _.key === "PageUp" && (_.preventDefault(), f.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: x * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: In.header, role: "row", children: i.map((_) => /* @__PURE__ */ n("div", { role: "columnheader", className: In.headCell, style: { height: t, ..._.width ? { width: _.width } : {} }, children: _.title ?? _.property }, _.property)) }),
        b,
        /* @__PURE__ */ n("div", { style: { height: Math.max(0, (e - N) * t) }, "aria-hidden": "true" })
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
    constructor(s, a, l, u) {
      if (this.version = s, this.errorCorrectionLevel = a, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7)
        throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let d = [];
      for (let x = 0; x < this.size; x++)
        d.push(!1);
      for (let x = 0; x < this.size; x++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const v = this.addEccAndInterleave(l);
      if (this.drawCodewords(v), u == -1) {
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
    static encodeText(s, a) {
      const l = e.QrSegment.makeSegments(s);
      return t.encodeSegments(l, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, a) {
      const l = e.QrSegment.makeBytes(s);
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
    static encodeSegments(s, a, l = 1, u = 40, d = -1, v = !0) {
      if (!(t.MIN_VERSION <= l && l <= u && u <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let x, N;
      for (x = l; ; x++) {
        const f = t.getNumDataCodewords(x, a) * 8, h = c.getTotalBits(s, x);
        if (h <= f) {
          N = h;
          break;
        }
        if (x >= u)
          throw new RangeError("Data too long");
      }
      for (const f of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        v && N <= t.getNumDataCodewords(x, f) * 8 && (a = f);
      let w = [];
      for (const f of s) {
        r(f.mode.modeBits, 4, w), r(f.numChars, f.mode.numCharCountBits(x), w);
        for (const h of f.getData())
          w.push(h);
      }
      i(w.length == N);
      const b = t.getNumDataCodewords(x, a) * 8;
      i(w.length <= b), r(0, Math.min(4, b - w.length), w), r(0, (8 - w.length % 8) % 8, w), i(w.length % 8 == 0);
      for (let f = 236; w.length < b; f ^= 253)
        r(f, 8, w);
      let _ = [];
      for (; _.length * 8 < w.length; )
        _.push(0);
      return w.forEach((f, h) => _[h >>> 3] |= f << 7 - (h & 7)), new t(x, a, _, d);
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
    getModule(s, a) {
      return 0 <= s && s < this.size && 0 <= a && a < this.size && this.modules[a][s];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let l = 0; l < this.size; l++)
        this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), a = s.length;
      for (let l = 0; l < a; l++)
        for (let u = 0; u < a; u++)
          l == 0 && u == 0 || l == 0 && u == a - 1 || l == a - 1 && u == 0 || this.drawAlignmentPattern(s[l], s[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const a = this.errorCorrectionLevel.formatBits << 3 | s;
      let l = a;
      for (let d = 0; d < 10; d++)
        l = l << 1 ^ (l >>> 9) * 1335;
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
      if (this.version < 7)
        return;
      let s = this.version;
      for (let l = 0; l < 12; l++)
        s = s << 1 ^ (s >>> 11) * 7973;
      const a = this.version << 12 | s;
      i(a >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const u = o(a, l), d = this.size - 11 + l % 3, v = Math.floor(l / 3);
        this.setFunctionModule(d, v, u), this.setFunctionModule(v, d, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, a) {
      for (let l = -4; l <= 4; l++)
        for (let u = -4; u <= 4; u++) {
          const d = Math.max(Math.abs(u), Math.abs(l)), v = s + u, x = a + l;
          0 <= v && v < this.size && 0 <= x && x < this.size && this.setFunctionModule(v, x, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, a) {
      for (let l = -2; l <= 2; l++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(s + u, a + l, Math.max(Math.abs(u), Math.abs(l)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, a, l) {
      this.modules[a][s] = l, this.isFunction[a][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const a = this.version, l = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(a, l))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][a], v = Math.floor(t.getNumRawDataModules(a) / 8), x = u - v % u, N = Math.floor(v / u);
      let w = [];
      const b = t.reedSolomonComputeDivisor(d);
      for (let f = 0, h = 0; f < u; f++) {
        let $ = s.slice(h, h + N - d + (f < x ? 0 : 1));
        h += $.length;
        const y = t.reedSolomonComputeRemainder($, b);
        f < x && $.push(0), w.push($.concat(y));
      }
      let _ = [];
      for (let f = 0; f < w[0].length; f++)
        w.forEach((h, $) => {
          (f != N - d || $ >= x) && _.push(h[f]);
        });
      return i(_.length == v), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let u = 0; u < this.size; u++)
          for (let d = 0; d < 2; d++) {
            const v = l - d, N = (l + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[N][v] && a < s.length * 8 && (this.modules[N][v] = o(s[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      i(a == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7)
        throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let l = 0; l < this.size; l++) {
          let u;
          switch (s) {
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
      let s = 0;
      for (let d = 0; d < this.size; d++) {
        let v = !1, x = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[d][w] == v ? (x++, x == 5 ? s += t.PENALTY_N1 : x > 5 && s++) : (this.finderPenaltyAddHistory(x, N), v || (s += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), v = this.modules[d][w], x = 1);
        s += this.finderPenaltyTerminateAndCount(v, x, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let v = !1, x = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[w][d] == v ? (x++, x == 5 ? s += t.PENALTY_N1 : x > 5 && s++) : (this.finderPenaltyAddHistory(x, N), v || (s += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), v = this.modules[w][d], x = 1);
        s += this.finderPenaltyTerminateAndCount(v, x, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let v = 0; v < this.size - 1; v++) {
          const x = this.modules[d][v];
          x == this.modules[d][v + 1] && x == this.modules[d + 1][v] && x == this.modules[d + 1][v + 1] && (s += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce((v, x) => v + (x ? 1 : 0), a);
      const l = this.size * this.size, u = Math.ceil(Math.abs(a * 20 - l * 10) / l) - 1;
      return i(0 <= u && u <= 9), s += u * t.PENALTY_N4, i(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const s = Math.floor(this.version / 7) + 2, a = Math.floor((this.version * 8 + s * 3 + 5) / (s * 4 - 4)) * 2;
        let l = [6];
        for (let u = this.size - 7; l.length < s; u -= a)
          l.splice(1, 0, u);
        return l;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(s) {
      if (s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const l = Math.floor(s / 7) + 2;
        a -= (25 * l - 10) * l - 55, s >= 7 && (a -= 36);
      }
      return i(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, a) {
      return Math.floor(t.getNumRawDataModules(s) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][s] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let u = 0; u < s - 1; u++)
        a.push(0);
      a.push(1);
      let l = 1;
      for (let u = 0; u < s; u++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], l), d + 1 < a.length && (a[d] ^= a[d + 1]);
        l = t.reedSolomonMultiply(l, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, a) {
      let l = a.map((u) => 0);
      for (const u of s) {
        const d = u ^ l.shift();
        l.push(0), a.forEach((v, x) => l[x] ^= t.reedSolomonMultiply(v, d));
      }
      return l;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, a) {
      if (s >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let l = 0;
      for (let u = 7; u >= 0; u--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (a >>> u & 1) * s;
      return i(l >>> 8 == 0), l;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const a = s[1];
      i(a <= this.size * 3);
      const l = a > 0 && s[2] == a && s[3] == a * 3 && s[4] == a && s[5] == a;
      return (l && s[0] >= a * 4 && s[6] >= a ? 1 : 0) + (l && s[6] >= a * 4 && s[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, a, l) {
      return s && (this.finderPenaltyAddHistory(a, l), a = 0), a += this.size, this.finderPenaltyAddHistory(a, l), this.finderPenaltyCountPatterns(l);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, a) {
      a[0] == 0 && (s += this.size), a.pop(), a.unshift(s);
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
  function r(m, s, a) {
    if (s < 0 || s > 31 || m >>> s)
      throw new RangeError("Value out of range");
    for (let l = s - 1; l >= 0; l--)
      a.push(m >>> l & 1);
  }
  function o(m, s) {
    return (m >>> s & 1) != 0;
  }
  function i(m) {
    if (!m)
      throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, a, l) {
      if (this.mode = s, this.numChars = a, this.bitData = l, a < 0)
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
    static makeBytes(s) {
      let a = [];
      for (const l of s)
        r(l, 8, a);
      return new c(c.Mode.BYTE, s.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!c.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let l = 0; l < s.length; ) {
        const u = Math.min(s.length - l, 3);
        r(parseInt(s.substring(l, l + u), 10), u * 3 + 1, a), l += u;
      }
      return new c(c.Mode.NUMERIC, s.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!c.isAlphanumeric(s))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let a = [], l;
      for (l = 0; l + 2 <= s.length; l += 2) {
        let u = c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(l)) * 45;
        u += c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(l + 1)), r(u, 11, a);
      }
      return l < s.length && r(c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(l)), 6, a), new c(c.Mode.ALPHANUMERIC, s.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : c.isNumeric(s) ? [c.makeNumeric(s)] : c.isAlphanumeric(s) ? [c.makeAlphanumeric(s)] : [c.makeBytes(c.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let a = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128)
        r(s, 8, a);
      else if (s < 16384)
        r(2, 2, a), r(s, 14, a);
      else if (s < 1e6)
        r(6, 3, a), r(s, 21, a);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return c.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return c.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, a) {
      let l = 0;
      for (const u of s) {
        const d = u.mode.numCharCountBits(a);
        if (u.numChars >= 1 << d)
          return 1 / 0;
        l += 4 + d + u.bitData.length;
      }
      return l;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let a = [];
      for (let l = 0; l < s.length; l++)
        s.charAt(l) != "%" ? a.push(s.charCodeAt(l)) : (a.push(parseInt(s.substring(l + 1, l + 3), 16)), l += 2);
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
})(Ct || (Ct = {}));
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
})(Ct || (Ct = {}));
const e2 = "_root_1leml_1", t2 = {
  root: e2
}, n2 = {
  low: Ct.QrCode.Ecc.LOW,
  medium: Ct.QrCode.Ecc.MEDIUM,
  quartile: Ct.QrCode.Ecc.QUARTILE,
  high: Ct.QrCode.Ecc.HIGH
};
function Yk({
  value: e,
  size: t = 128,
  render: r = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: m,
  onError: s
}) {
  const a = c ?? `QR code for ${e}`, l = ae(null), u = Zr("(prefers-color-scheme: dark)"), [d, v] = X(null);
  we(() => {
    const $ = document.documentElement;
    v($.dataset.theme ?? null);
    const y = new MutationObserver(() => {
      v($.dataset.theme ?? null);
    });
    return y.observe($, { attributes: !0, attributeFilter: ["data-theme"] }), () => y.disconnect();
  }, []);
  const x = $e(() => {
    try {
      return Ct.QrCode.encodeText(e, n2[o]);
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
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (N.current?.value !== e || N.current?.onError !== s) && (N.current = { value: e, onError: s }, s?.($));
  }, [x, e, s]);
  const w = Math.max(0, Math.floor(i)), b = [t2.root, m].filter(Boolean).join(" ");
  if (we(() => {
    if (r !== "canvas" || x === null) return;
    const $ = l.current, y = $?.getContext("2d");
    if (!$ || !y) return;
    const E = getComputedStyle($), p = E.getPropertyValue("--dx-text-color").trim() || "#000", k = E.getPropertyValue("--dx-surface-color").trim() || "#fff";
    r2(y, x, t, w, p, k);
  }, [r, x, t, w, u, d]), x === null)
    return /* @__PURE__ */ n("div", { className: b, role: "img", "aria-label": a, "data-qr-error": "true" });
  const _ = x.size + w * 2, f = t / _;
  if (r === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: l,
        className: b,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const h = [];
  for (let $ = 0; $ < x.size; $++)
    for (let y = 0; y < x.size; y++)
      x.getModule(y, $) && h.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (y + w) * f,
            y: ($ + w) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${y}-${$}`
        )
      );
  return /* @__PURE__ */ O(
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
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: h })
      ]
    }
  );
}
function r2(e, t, r, o, i, c) {
  const m = r / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, r, r), e.fillStyle = i;
  for (let s = 0; s < t.size; s++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, s) && e.fillRect((a + o) * m, (s + o) * m, m + 0.5, m + 0.5);
}
const s2 = "_root_1v9la_1", o2 = "_value_1v9la_9", Pr = {
  root: s2,
  value: o2
}, Br = [
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
], Fr = 104, a2 = 106;
function l2(e) {
  const t = [Fr];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let r = Fr;
  for (let o = 1; o < t.length; o++) r += o * t[o];
  return t.push(r % 103, a2), t;
}
function Zk({ value: e, format: t = "Code128", height: r = 60, showValue: o = !1, ariaLabel: i, className: c }) {
  const m = i ?? `Barcode ${e}`, s = $e(() => {
    const a = [];
    let l = 0;
    for (const u of l2(e)) {
      const d = Br[u] ?? Br[0];
      for (let v = 0; v < d.length; v++) {
        const x = Number(d[v]);
        v % 2 === 0 && a.push({ x: l, w: x }), l += x;
      }
    }
    return { modules: a, total: l };
  }, [e]);
  return /* @__PURE__ */ O("span", { className: [Pr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${s.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": m,
        "data-value": e,
        children: [
          /* @__PURE__ */ n("rect", { width: s.total, height: r, fill: "var(--dx-surface-color)" }),
          s.modules.map((a, l) => /* @__PURE__ */ n("rect", { x: a.x, y: 0, width: a.w, height: r, fill: "var(--dx-text-color)" }, l))
        ]
      }
    ),
    o && /* @__PURE__ */ n("span", { className: Pr.value, children: e })
  ] });
}
const i2 = "_root_gfdmk_1", c2 = "_svg_gfdmk_10", d2 = "_gridline_gfdmk_15", u2 = "_tickLabel_gfdmk_21", _2 = "_axisTitle_gfdmk_27", f2 = "_dataLabel_gfdmk_34", p2 = "_legend_gfdmk_40", m2 = "_legendItem_gfdmk_48", h2 = "_swatch_gfdmk_56", g2 = "_tooltip_gfdmk_63", b2 = "_visuallyHidden_gfdmk_77", ot = {
  root: i2,
  svg: c2,
  gridline: d2,
  tickLabel: u2,
  axisTitle: _2,
  dataLabel: f2,
  legend: p2,
  legendItem: m2,
  swatch: h2,
  tooltip: g2,
  visuallyHidden: b2
}, Hr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function x2(e, t, r) {
  const o = t - e || 1, i = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, m = Math.ceil(t / i) * i, s = [];
  for (let a = c; a <= m + 1e-9; a += i) s.push(Number(a.toFixed(6)));
  return { min: c, max: m, step: i, ticks: s };
}
function Jk({
  series: e,
  width: t = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: m = !0,
  onSeriesClick: s,
  ariaLabel: a = "Chart",
  className: l
}) {
  const [u, d] = X(null), v = $e(() => {
    const p = /* @__PURE__ */ new Set();
    for (const k of e) for (const M of k.data) p.add(String(M[k.categoryProperty] ?? ""));
    return [...p];
  }, [e]), x = $e(() => e.flatMap((p) => p.data.map((k) => Number(k[p.valueProperty]))).filter((p) => !Number.isNaN(p)), [e]), N = o?.min ?? (x.length ? Math.min(0, ...x) : 0), w = o?.max ?? (x.length ? Math.max(...x) : 10), b = $e(() => x2(N, w, o?.step), [N, w, o?.step]), _ = { t: 16, r: 16, b: 40, l: 56 }, f = t - _.l - _.r, h = r - _.t - _.b, $ = (p) => _.l + p / Math.max(1, v.length - 1) * f, y = (p) => _.t + (1 - (p - b.min) / (b.max - b.min || 1)) * h, E = (p, k) => k.color ?? Hr[p % Hr.length];
  return /* @__PURE__ */ O("figure", { className: [ot.root, l].filter(Boolean).join(" "), role: "img", "aria-label": a, "aria-describedby": `${a.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ O("svg", { width: t, height: r, className: ot.svg, role: "presentation", children: [
      o?.gridlines !== !1 && b.ticks.map((p) => /* @__PURE__ */ n("line", { x1: _.l, x2: _.l + f, y1: y(p), y2: y(p), className: ot.gridline }, p)),
      i?.gridlines && v.map((p, k) => /* @__PURE__ */ n("line", { x1: $(k), x2: $(k), y1: _.t, y2: _.t + h, className: ot.gridline }, k)),
      b.ticks.map((p) => /* @__PURE__ */ n("text", { x: _.l - 8, y: y(p) + 4, textAnchor: "end", className: ot.tickLabel, children: p }, p)),
      v.map((p, k) => /* @__PURE__ */ n("text", { x: $(k), y: _.t + h + 16, textAnchor: "middle", className: ot.tickLabel, children: p }, p)),
      o?.title && /* @__PURE__ */ n("text", { x: 12, y: _.t + h / 2, textAnchor: "middle", transform: `rotate(-90,12,${_.t + h / 2})`, className: ot.axisTitle, children: o.title }),
      i?.title && /* @__PURE__ */ n("text", { x: _.l + f / 2, y: r - 4, textAnchor: "middle", className: ot.axisTitle, children: i.title }),
      (() => {
        const p = /* @__PURE__ */ new Map();
        for (const I of e)
          if (I.stack)
            for (const D of I.data) {
              const S = String(D[I.categoryProperty] ?? ""), g = Number(D[I.valueProperty]);
              if (Number.isNaN(g)) continue;
              p.has(I.stack) || p.set(I.stack, /* @__PURE__ */ new Map());
              const C = p.get(I.stack);
              C.set(S, (C.get(S) ?? 0) + g);
            }
        const k = e.filter((I) => I.type === "pie" || I.type === "donut"), M = /* @__PURE__ */ new Map();
        for (const I of k) {
          const D = I.data.reduce((S, g) => S + (Number(g[I.valueProperty]) || 0), 0);
          M.set(I, D);
        }
        return e.map((I, D) => {
          const S = I.data.map((A) => ({
            cat: String(A[I.categoryProperty] ?? ""),
            val: Number(A[I.valueProperty]),
            size: I.sizeProperty ? Number(A[I.sizeProperty]) : void 0,
            item: A
          })), g = new Map(v.map((A, T) => [A, T])), C = E(D, I);
          if (I.type === "pie" || I.type === "donut") {
            const A = _.l + f / 2, T = _.t + h / 2, q = Math.min(f, h) / 3, V = I.type === "donut" ? I.innerRadius ?? q * 0.5 : 0, J = M.get(I) ?? S.reduce((ee, ue) => ee + ue.val, 0);
            let Z = -90;
            return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
              S.map((ee, ue) => {
                const ie = J ? ee.val / J * 360 : 0, U = Z, R = Z + ie;
                Z = R;
                const te = ie > 180 ? 1 : 0, G = (Qe) => Qe * Math.PI / 180, ce = A + q * Math.cos(G(U)), oe = T + q * Math.sin(G(U)), xe = A + q * Math.cos(G(R)), ve = T + q * Math.sin(G(R)), Be = A + V * Math.cos(G(R)), ke = T + V * Math.sin(G(R)), We = A + V * Math.cos(G(U)), be = T + V * Math.sin(G(U)), Ze = V ? `M ${ce} ${oe} A ${q} ${q} 0 ${te} 1 ${xe} ${ve} L ${Be} ${ke} A ${V} ${V} 0 ${te} 0 ${We} ${be} Z` : `M ${A} ${T} L ${ce} ${oe} A ${q} ${q} 0 ${te} 1 ${xe} ${ve} Z`, Ve = (U + R) / 2, Le = A + (q + 12) * Math.cos(G(Ve)), tt = T + (q + 12) * Math.sin(G(Ve));
                return /* @__PURE__ */ O("g", { role: "listitem", children: [
                  /* @__PURE__ */ n(
                    "path",
                    {
                      d: Ze,
                      fill: C,
                      stroke: "var(--dx-surface-color)",
                      strokeWidth: 1,
                      onMouseEnter: () => m && d({ x: Le, y: tt, text: `${I.title ?? ee.cat}: ${ee.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => s?.({ seriesTitle: I.title ?? "", category: ee.cat, value: ee.val, item: ee.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: Le, y: tt, textAnchor: "middle", className: ot.dataLabel, children: ee.val })
                ] }, ue);
              })
            ] }, D);
          }
          if (I.type === "scatter" || I.type === "bubble")
            return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
              S.map((A, T) => {
                const q = g.get(A.cat) ?? 0, V = Number(S[T].cat), J = Number.isNaN(V) ? $(q) : _.l + (V - b.min) / (b.max - b.min || 1) * f, Z = y(A.val), ee = I.type === "bubble" && A.size !== void 0 ? Math.max(4, Math.min(12, A.size / 10)) : 4;
                return /* @__PURE__ */ O("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: J, cy: Z, r: ee, fill: C, stroke: "var(--dx-surface-color)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      cx: J,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => m && d({ x: J, y: Z, text: `${I.title ?? A.cat}: ${A.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => s?.({ seriesTitle: I.title ?? "", category: A.cat, value: A.val, item: A.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, T);
              })
            ] }, D);
          if (I.type === "line" || I.type === "area") {
            const A = (V) => {
              if (!I.stack) return b.min;
              let J = 0;
              for (let Z = 0; Z < D; Z++) {
                const ee = e[Z];
                if (ee?.stack !== I.stack) continue;
                const ue = ee.data.find((ie) => String(ie[ee.categoryProperty] ?? "") === V);
                ue && (J += Number(ue[ee.valueProperty]) || 0);
              }
              return J;
            }, T = S.map((V) => {
              const J = g.get(V.cat) ?? 0, Z = A(V.cat);
              return `${J === 0 ? "M" : "L"} ${$(J)} ${y(Z + V.val)}`;
            }).join(" "), q = S.map((V) => {
              const J = g.get(V.cat) ?? 0, Z = A(V.cat);
              return `${J === 0 ? "M" : "L"} ${$(J)} ${y(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
              I.type === "area" && /* @__PURE__ */ n("path", { d: `${T} L ${$(S.length - 1)} ${y(A(S[S.length - 1].cat))} L ${$(0)} ${y(A(S[0].cat))} Z`, fill: C, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ n("path", { d: T, fill: "none", stroke: C, strokeWidth: 2 }),
              I.stack && /* @__PURE__ */ n("path", { d: q, fill: "none", stroke: "transparent" }),
              S.map((V, J) => {
                const Z = g.get(V.cat) ?? 0, ee = A(V.cat), ue = $(Z), ie = y(ee + V.val);
                return /* @__PURE__ */ O("g", { role: "listitem", children: [
                  /* @__PURE__ */ n("circle", { cx: ue, cy: ie, r: 4, fill: C, stroke: "var(--dx-surface-color)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ n(
                    "rect",
                    {
                      x: ue - 12,
                      y: ie - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => m && d({ x: ue, y: ie, text: `${I.title ?? V.cat}: ${V.val}` }),
                      onMouseLeave: () => d(null),
                      onFocus: () => m && d({ x: ue, y: ie, text: `${I.title ?? V.cat}: ${V.val}` }),
                      onBlur: () => d(null),
                      onClick: () => s?.({ seriesTitle: I.title ?? "", category: V.cat, value: V.val, item: V.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: ue, y: ie - 8, textAnchor: "middle", className: ot.dataLabel, children: V.val })
                ] }, J);
              })
            ] }, D);
          }
          const P = I.type === "bar";
          return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
            /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
            S.map((A, T) => {
              const q = g.get(A.cat) ?? 0;
              let V = 0;
              if (I.stack)
                for (let oe = 0; oe < D; oe++) {
                  const xe = e[oe];
                  if (xe?.stack !== I.stack) continue;
                  const ve = xe.data.find((Be) => String(Be[xe.categoryProperty] ?? "") === A.cat);
                  ve && (V += Number(ve[xe.valueProperty]) || 0);
                }
              const J = V + A.val, Z = e.filter((oe) => !oe.stack || oe.stack === I.stack).length, ee = f / v.length, ue = P ? 18 : Math.max(12, ee / (I.stack ? 1 : e.length) - 4), ie = P ? _.l + V / (b.max - b.min || 1) * f : $(q) - ue / 2 + (I.stack ? 0 : D % Z * ue), U = P ? _.t + q * h / v.length + 4 : y(J), R = P ? A.val / (b.max - b.min || 1) * f : ue - 4, te = P ? 16 : y(V) - y(J), G = P ? _.l + V / (b.max - b.min || 1) * f : ie, ce = P ? _.t + q * h / v.length + 4 : U;
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
                    onMouseEnter: () => m && d({ x: G + (P ? R : ue) / 2, y: ce, text: `${I.title ?? A.cat}: ${A.val}` }),
                    onMouseLeave: () => d(null),
                    onClick: () => s?.({ seriesTitle: I.title ?? "", category: A.cat, value: A.val, item: A.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                I.labels?.visible && /* @__PURE__ */ n("text", { x: G + (P ? R : ue) / 2, y: ce - 4, textAnchor: "middle", className: ot.dataLabel, children: A.val })
              ] }, T);
            })
          ] }, D);
        });
      })()
    ] }),
    u && /* @__PURE__ */ n("div", { className: ot.tooltip, style: { left: u.x, top: u.y - 28 }, children: u.text }),
    c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((p, k) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
      /* @__PURE__ */ n("span", { className: ot.swatch, style: { backgroundColor: E(k, p) }, "aria-hidden": "true" }),
      p.title ?? `Series ${k + 1}`
    ] }, k)) }),
    /* @__PURE__ */ O("table", { className: ot.visuallyHidden, id: `${a.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ n("caption", { children: a }),
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { children: "Series" }),
        /* @__PURE__ */ n("th", { children: "Category" }),
        /* @__PURE__ */ n("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ n("tbody", { children: e.map(
        (p) => p.data.map((k, M) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("td", { children: p.title ?? "" }),
          /* @__PURE__ */ n("td", { children: String(k[p.categoryProperty] ?? "") }),
          /* @__PURE__ */ n("td", { children: String(k[p.valueProperty] ?? "") })
        ] }, `${p.title}-${M}`))
      ) })
    ] })
  ] });
}
export {
  Qi as ALERT_ICON,
  dk as Accordion,
  Z2 as Alert,
  pk as Autocomplete,
  ik as Avatar,
  $2 as Badge,
  Zk as Barcode,
  rk as Body,
  Lk as Breadcrumb,
  v2 as Button,
  w2 as Card,
  Hk as Carousel,
  Jk as Chart,
  W2 as Checkbox,
  hk as Checkboxlist,
  Nk as Colorpicker,
  ek as Column,
  vn as DEFAULT_OPERATOR_BY_TYPE,
  Jg as DEFAULT_PALETTE,
  F2 as DataFilter,
  H2 as DataGrid,
  q2 as DataList,
  Ok as Datepicker,
  X2 as Dialog,
  Ik as DropZone,
  fk as Dropdown,
  z2 as EmptyState,
  Vr as FILTER_OPERATORS,
  Rk as FabMenu,
  D2 as Field,
  lp as Footer,
  M2 as Form,
  Wk as Gantt,
  dp as Header,
  De as Icon,
  U2 as Input,
  K2 as Label,
  nk as Layout,
  mk as Listbox,
  wk as Mask,
  Ak as Menu,
  $k as Numeric,
  Ia as Pager,
  Tk as PanelMenu,
  vk as Password,
  Kk as PickList,
  Vk as Pivot,
  jk as ProfileMenu,
  ok as Progress,
  Yk as QRCode,
  gk as Radiobuttonlist,
  Sk as Rating,
  Q2 as Row,
  Uk as Scheduler,
  Mk as SecurityCode,
  gn as Select,
  bk as Selectbar,
  kp as Sidebar,
  sk as SidebarToggle,
  Ck as SignaturePad,
  J2 as Skeleton,
  zk as Slider,
  yk as Splitbutton,
  Bk as Splitter,
  tk as Stack,
  O2 as Stat,
  Pk as Steps,
  Wl as Switch,
  S2 as Table,
  ck as Tabs,
  _k as Text,
  uk as Textarea,
  kk as Textbox,
  lk as ThemeSwitcher,
  Xk as Timeline,
  Dk as Timespanpicker,
  Y2 as ToastProvider,
  Fk as Toc,
  xk as Togglebutton,
  V2 as Tooltip,
  qk as Tree,
  Ek as Upload,
  Gk as VirtualGrid,
  Gr as applyFilters,
  Ba as applyGridState,
  $n as columnValue,
  R2 as compare,
  P2 as custom,
  Ra as cycleSort,
  Fa as defaultOperatorForType,
  E2 as email,
  Dr as formatMasked,
  xr as formatValue,
  Gn as getByPath,
  N2 as iconNames,
  Xr as matchesFilters,
  T2 as maxLength,
  A2 as minLength,
  Pa as paginate,
  I2 as pattern,
  j2 as range,
  C2 as required,
  L2 as requiredTrue,
  dr as resolveVariant,
  Bo as runValidators,
  ak as shadeClass,
  ra as sortItems,
  La as sortedItems,
  Jo as toFilterString,
  na as toODataFilterString,
  Po as useFormContext,
  B2 as useFormField,
  Zr as useMediaQuery,
  G2 as useToast
};
