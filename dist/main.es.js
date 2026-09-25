import { jsxs as O, jsx as n, Fragment as Ee } from "react/jsx-runtime";
import { forwardRef as He, useId as Ye, isValidElement as Tn, cloneElement as Br, useState as X, useRef as ae, useCallback as H, useMemo as $e, useContext as Fr, createContext as Hr, useEffect as we, Fragment as Jr, Children as Qr, useImperativeHandle as ir } from "react";
const es = "_button_rnnri_1", ts = "_filled_rnnri_36", ns = "_flat_rnnri_37", rs = "_outlined_rnnri_38", ss = "_text_rnnri_39", os = "_primary_rnnri_200", as = "_secondary_rnnri_202", ls = "_ghost_rnnri_204", is = "_danger_rnnri_206", cs = "_success_rnnri_208", ds = "_info_rnnri_210", us = "_loading_rnnri_214", _s = "_spinner_rnnri_217", fs = "_xs_rnnri_229", ps = "_sm_rnnri_235", ms = "_md_rnnri_241", hs = "_lg_rnnri_247", gs = "_xl_rnnri_253", bs = "_iconOnly_rnnri_259", ys = "_fullWidth_rnnri_285", vt = {
  button: es,
  filled: ts,
  flat: ns,
  outlined: rs,
  text: ss,
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
  primary: os,
  secondary: as,
  ghost: ls,
  danger: is,
  success: cs,
  info: ds,
  loading: us,
  spinner: _s,
  "dx-spin": "_dx-spin_rnnri_1",
  xs: fs,
  sm: ps,
  md: ms,
  lg: hs,
  xl: gs,
  iconOnly: bs,
  fullWidth: ys
}, xs = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" }
};
function ks(e, t) {
  const r = e === "primary" || e === "secondary" || e === "ghost" || e === "danger" || e === "success" || e === "info", o = t;
  if (r) {
    const m = xs[e];
    return { variant: m.variant, style: o ?? m.style };
  }
  const l = e ?? "filled";
  return { variant: l === "filled" || l === "flat" || l === "outlined" || l === "text" ? l : "filled", style: o ?? "primary" };
}
const i2 = He(function({
  variant: t = "filled",
  severity: r,
  shade: o = "default",
  size: l = "md",
  fullWidth: c = !1,
  iconOnly: m = !1,
  loading: s = !1,
  visible: a = !0,
  className: i,
  type: p = "button",
  disabled: d,
  children: $,
  ...y
}, N) {
  if (a === !1) return null;
  const v = ks(t, r), u = !(v.style === "light" || v.style === "dark") && o !== "default" ? `shade-${o}` : null, _ = [
    vt.button,
    vt[v.variant],
    vt[`style-${v.style}`],
    // backwards-compat: tone-* still emitted
    vt[`tone-${v.style}`],
    u ? vt[u] : null,
    vt[l],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    t && vt[t] ? vt[t] : null,
    c ? vt.fullWidth : null,
    m ? vt.iconOnly : null,
    s ? vt.loading : null,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ O(
    "button",
    {
      ref: N,
      type: p,
      className: _,
      disabled: d || s,
      "aria-busy": s || void 0,
      ...y,
      children: [
        s ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: vt.spinner }) : null,
        $
      ]
    }
  );
}), vs = "_card_b9mht_1", ws = "_elevated_b9mht_8", $s = "_filled_b9mht_13", Ns = "_outlined_b9mht_18", Os = "_interactive_b9mht_22", Ss = "_text_b9mht_30", zs = "_header_b9mht_46", Ds = "_body_b9mht_53", Ms = "_footer_b9mht_63", gn = {
  card: vs,
  elevated: ws,
  filled: $s,
  outlined: Ns,
  interactive: Os,
  text: Ss,
  header: zs,
  body: Ds,
  footer: Ms
}, c2 = He(function({ variant: t = "elevated", header: r, footer: o, className: l, visible: c = !0, children: m, onKeyDown: s, ...a }, i) {
  if (c === !1) return null;
  const p = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ O(
      "div",
      {
        ref: i,
        role: p ? "button" : void 0,
        tabIndex: p ? 0 : void 0,
        onKeyDown: (d) => {
          s?.(d), !(!p || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [gn.card, gn[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          r != null && /* @__PURE__ */ n("div", { className: gn.header, children: r }),
          /* @__PURE__ */ n("div", { className: gn.body, children: m }),
          o != null && /* @__PURE__ */ n("div", { className: gn.footer, children: o })
        ]
      }
    )
  );
});
function cr(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Cs = "_badge_fbxod_1", Es = "_xs_fbxod_14", Is = "_sm_fbxod_19", As = "_md_fbxod_24", Ts = "_lg_fbxod_29", js = "_xl_fbxod_34", Ls = "_neutral_fbxod_40", Rs = "_primary_fbxod_45", Ps = "_secondary_fbxod_50", Bs = "_light_fbxod_55", Fs = "_base_fbxod_60", Hs = "_dark_fbxod_65", Ks = "_info_fbxod_70", qs = "_success_fbxod_75", Us = "_warning_fbxod_80", Ws = "_danger_fbxod_85", Vs = "_filled_fbxod_92", Xs = "_outlined_fbxod_142", Gs = "_text_fbxod_194", bn = {
  badge: Cs,
  xs: Es,
  sm: Is,
  md: As,
  lg: Ts,
  xl: js,
  neutral: Ls,
  primary: Rs,
  secondary: Ps,
  light: Bs,
  base: Fs,
  dark: Hs,
  info: Ks,
  success: qs,
  warning: Us,
  danger: Ws,
  filled: Vs,
  outlined: Xs,
  text: Gs,
  "shade-lighter": "_shade-lighter_fbxod_346",
  "shade-light": "_shade-light_fbxod_346",
  "shade-dark": "_shade-dark_fbxod_348",
  "shade-darker": "_shade-darker_fbxod_349"
}, d2 = He(function({ severity: t = "primary", variant: r = "filled", shade: o, size: l = "md", className: c, visible: m = !0, children: s, ...a }, i) {
  if (m === !1) return null;
  const p = t, d = cr(r, "filled"), $ = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: i,
      className: [bn.badge, bn[l], bn[p], bn[d], $ ? bn[$] : null, c].filter(Boolean).join(" "),
      ...a,
      children: s
    }
  );
}), Ys = "_xs_1t3wj_2", Zs = "_sm_1t3wj_7", Js = "_md_1t3wj_1", Qs = "_lg_1t3wj_17", eo = "_xl_1t3wj_22", to = {
  xs: Ys,
  sm: Zs,
  md: Js,
  lg: Qs,
  xl: eo
}, u2 = [
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
], no = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(Ee, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(Ee, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(Ee, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ n("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ n("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ O(Ee, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Me = He(function({ name: t, size: r = "md", strokeWidth: o = 2, className: l, ...c }, m) {
  const s = typeof r == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: m,
      className: [s ? to[r] : null, l].filter(Boolean).join(" "),
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
      children: no[t]
    }
  );
}), ro = "_stat_lffej_1", so = "_label_lffej_8", oo = "_row_lffej_16", ao = "_value_lffej_22", lo = "_delta_lffej_28", io = "_success_lffej_33", co = "_danger_lffej_37", uo = "_neutral_lffej_41", _o = "_hint_lffej_45", Jt = {
  stat: ro,
  label: so,
  row: oo,
  value: ao,
  delta: lo,
  success: io,
  danger: co,
  neutral: uo,
  hint: _o
}, _2 = He(function({ label: t, value: r, delta: o, deltaTone: l = "neutral", hint: c, className: m, ...s }, a) {
  return /* @__PURE__ */ O("div", { ref: a, className: [Jt.stat, m].filter(Boolean).join(" "), ...s, children: [
    /* @__PURE__ */ n("div", { className: Jt.label, children: t }),
    /* @__PURE__ */ O("div", { className: Jt.row, children: [
      /* @__PURE__ */ n("div", { className: Jt.value, children: r }),
      o != null && /* @__PURE__ */ n("div", { className: [Jt.delta, Jt[l]].join(" "), children: o })
    ] }),
    c != null && /* @__PURE__ */ n("div", { className: Jt.hint, children: c })
  ] });
}), fo = "_wrap_n9de1_1", po = "_table_n9de1_8", mo = "_caption_n9de1_14", ho = "_none_n9de1_51", go = "_horizontal_n9de1_57", bo = "_vertical_n9de1_67", yo = "_alternating_n9de1_85", xo = "_start_n9de1_89", ko = "_center_n9de1_93", vo = "_end_n9de1_97", wo = "_empty_n9de1_101", Wt = {
  wrap: fo,
  table: po,
  caption: mo,
  none: ho,
  horizontal: go,
  vertical: bo,
  alternating: yo,
  start: xo,
  center: ko,
  end: vo,
  empty: wo
};
function f2({
  columns: e,
  rows: t,
  rowKey: r,
  empty: o,
  caption: l,
  gridLines: c = "default",
  allowAlternatingRows: m = !0,
  className: s,
  visible: a = !0
}) {
  if (a === !1) return null;
  const i = c === "default" || c === "both" ? "" : Wt[c];
  return /* @__PURE__ */ O("div", { className: [Wt.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "table",
      {
        className: [
          Wt.table,
          i,
          m ? Wt.alternating : ""
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
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Wt.empty, children: o })
  ] });
}
const $o = "_emptyState_uurdd_1", No = "_icon_uurdd_13", Oo = "_title_uurdd_18", So = "_description_uurdd_24", zo = "_action_uurdd_30", yn = {
  emptyState: $o,
  icon: No,
  title: Oo,
  description: So,
  action: zo
};
function p2({ icon: e, title: t, description: r, action: o, className: l, visible: c = !0 }) {
  return c === !1 ? null : /* @__PURE__ */ O("div", { className: [yn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: yn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: yn.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: yn.description, children: r }),
    o != null && /* @__PURE__ */ n("div", { className: yn.action, children: o })
  ] });
}
const Do = "_field_2mpbc_1", Mo = "_label_2mpbc_8", Co = "_required_2mpbc_14", Eo = "_hint_2mpbc_19", Io = "_error_2mpbc_24", xn = {
  field: Do,
  label: Mo,
  required: Co,
  hint: Eo,
  error: Io
};
function m2({ label: e, htmlFor: t, required: r, hint: o, supporting: l, error: c, children: m, className: s, visible: a = !0 }) {
  const i = o ?? l, p = Ye(), d = Ye(), $ = Ye();
  if (a === !1) return null;
  const y = c != null ? d : i != null ? $ : null, N = typeof m == "function" ? m({ inputId: p, hintId: $, errorId: d }) : m, v = Tn(N) && typeof N.props.id == "string" ? N.props.id : void 0, b = v ?? t ?? p, u = Tn(N) && (y != null || v == null && typeof N.type == "string"), _ = v != null || t != null || u, h = u && Tn(N) ? Br(
    N,
    {
      id: b,
      "aria-describedby": y != null ? [
        N.props["aria-describedby"],
        y
      ].filter((w) => typeof w == "string").join(" ") || void 0 : N.props["aria-describedby"],
      "aria-invalid": c != null ? !0 : N.props["aria-invalid"]
    }
  ) : N;
  return /* @__PURE__ */ O("div", { className: [xn.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O("label", { className: xn.label, htmlFor: _ ? b : void 0, children: [
      e,
      r === !0 && /* @__PURE__ */ n("span", { className: xn.required, "aria-hidden": "true", children: "*" })
    ] }),
    h,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: xn.error, "aria-live": "polite", children: c }) : i != null ? /* @__PURE__ */ n("div", { id: $, className: xn.hint, children: i }) : null
  ] });
}
const Ao = "_form_fwqyn_1", To = {
  form: Ao
}, Kr = Hr(null);
function jo() {
  const e = Fr(Kr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function h2({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: o,
  method: l,
  children: c,
  className: m
}) {
  const [s, a] = X({}), [i, p] = X(0), d = ae(s);
  d.current = s;
  const $ = H((h) => {
    a((w) => w[h.name] === h ? w : { ...w, [h.name]: h });
  }, []), y = H((h) => {
    a((w) => {
      if (!(h in w)) return w;
      const x = { ...w };
      return delete x[h], x;
    });
  }, []), N = H(() => {
    const h = {};
    for (const w of Object.values(d.current)) {
      const x = w.validate();
      x.length > 0 && (h[w.name] = x);
    }
    return h;
  }, []), v = H(() => {
    const h = N();
    p((w) => w + 1), Object.keys(h).length === 0 ? t?.(e) : r?.(h);
  }, [N, e, t, r]), b = (h) => {
    o != null && l != null || (h.preventDefault(), v());
  }, u = $e(
    () => ({ registerField: $, unregisterField: y, submit: v, submitCount: i }),
    [$, y, v, i]
  ), _ = [To.form, m].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Kr.Provider, { value: u, children: /* @__PURE__ */ n("form", { className: _, onSubmit: b, action: o, method: l, noValidate: !0, children: c }) });
}
const on = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", g2 = (e = "Required") => (t) => on(t) ? e : null, b2 = (e = "Invalid email") => (t) => on(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, y2 = (e, t = "Invalid format") => (r) => on(r) || e.test(String(r)) ? null : t, x2 = (e, t = `Minimum ${e} characters`) => (r) => on(r) || String(r).length >= e ? null : t, k2 = (e, t = `Maximum ${e} characters`) => (r) => on(r) || String(r).length <= e ? null : t, v2 = (e, t, r = `Between ${e} and ${t}`) => (o) => {
  if (on(o)) return null;
  const l = Number(o);
  return !Number.isNaN(l) && l >= e && l <= t ? null : r;
}, w2 = (e, t = "Values do not match") => (r, o) => {
  if (on(r)) return null;
  const l = typeof e == "function" ? e(o) : e;
  return r === l ? null : t;
}, $2 = (e = "Required") => (t) => t === !0 ? null : e, N2 = (e) => (t, r) => e(t, r);
function Lo(e, t, r) {
  return e.map((o) => o(t, r)).filter((o) => o != null);
}
function O2(e, t) {
  const { registerField: r, unregisterField: o, submitCount: l } = jo(), [c, m] = X(t?.initialValue), [s, a] = X(!1), [i, p] = X(!1), d = ae(() => []);
  d.current = () => Lo(t?.validate ?? [], c), we(() => (r({ name: e, validate: () => d.current() }), () => o(e)), [e, r, o]), we(() => {
    l > 0 && (a(!0), p(!1));
  }, [l]);
  const $ = s && !i ? d.current() : [];
  return { value: c, setValue: (N) => {
    m(N), p(!0);
  }, errors: $ };
}
const Ro = "_select_1j4dh_1", Po = "_invalid_1j4dh_33", Bo = "_xs_1j4dh_40", Fo = "_sm_1j4dh_48", Ho = "_md_1j4dh_56", Ko = "_lg_1j4dh_62", qo = "_xl_1j4dh_68", Yn = {
  select: Ro,
  invalid: Po,
  xs: Bo,
  sm: Fo,
  md: Ho,
  lg: Ko,
  xl: qo
}, hn = He(function({ size: t = "md", invalid: r = !1, options: o, children: l, className: c, ...m }, s) {
  return /* @__PURE__ */ n(
    "select",
    {
      ref: s,
      className: [Yn.select, Yn[t], r ? Yn.invalid : null, c].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...m,
      children: o != null ? o.map((a) => /* @__PURE__ */ n("option", { value: a.value, disabled: a.disabled, children: a.label }, a.value)) : l
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
], kn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Uo = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"];
function Wo(e) {
  return Uo.includes(e);
}
function Xn(e, t) {
  return t.split(".").reduce((r, o) => {
    if (r != null)
      return r[o];
  }, e);
}
function _r(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function In(e, t) {
  const r = _r(e), o = _r(t);
  if (typeof r == "number" && typeof o == "number") return r - o;
  const l = String(r ?? ""), c = String(o ?? "");
  return l < c ? -1 : l > c ? 1 : 0;
}
function Gn(e) {
  if (e.secondOperator == null) return !1;
  if (Wo(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function fr(e, t, r) {
  const o = Xn(t, e.property), l = pr(o, e.value, e.operator, r);
  if (!Gn(e)) return l;
  const c = pr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? l && c : l || c;
}
function pr(e, t, r, o) {
  const l = o === "CaseInsensitive", c = (a) => l && typeof a == "string" ? a.toLowerCase() : a, m = c(e), s = c(t);
  switch (r) {
    case "Equals":
      return m === s || Array.isArray(m) && m.some((a) => c(a) === s);
    case "NotEquals":
      return m !== s && !(Array.isArray(m) && m.some((a) => c(a) === s));
    case "LessThan":
      return In(m, s) < 0;
    case "LessThanOrEquals":
      return In(m, s) <= 0;
    case "GreaterThan":
      return In(m, s) > 0;
    case "GreaterThanOrEquals":
      return In(m, s) >= 0;
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
function dr(e) {
  return "filters" in e;
}
function Ur(e, t, r = {}) {
  const o = r.logicalOperator ?? "And", l = r.caseSensitivity ?? "CaseInsensitive";
  if (dr(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (m) => Ur(e, m, { logicalOperator: c, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", fr(t, e, l);
}
function Wr(e, t, r = {}) {
  return e.filter((o) => Ur(o, t, r));
}
function Vo(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${Vo(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function Xo(e) {
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
  const r = e.logicalOperator ?? "And", o = e.secondOperator;
  return `(${t(e.operator, e.value)} ${r} ${t(
    o,
    e.secondValue
  )})`;
}
function Go(e) {
  return dr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Go).filter(Boolean).join(` ${e.operator} `)})` : Xo(e);
}
function Yo(e) {
  return e.replace(/'/g, "''");
}
const Zo = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Jo(e, t) {
  const r = e.property, o = t === "CaseInsensitive", l = (i) => o ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${Yo(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), m = (i, p) => {
    const d = typeof p == "string", $ = d && o ? l(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${$} ${Zo[i]} ${d && o ? l(c(p)) : c(p)}`;
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
    return m(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${m(e.operator, e.value)} ${s} ${m(
    a,
    e.secondValue
  )})`;
}
function Qo(e, t = {}) {
  const r = t.caseSensitivity ?? "CaseInsensitive";
  if (dr(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Qo(l, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return Jo(e, r);
}
function ea(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const l of t) {
      const c = l.sortOrder === "Ascending" ? 1 : -1, m = In(Xn(r, l.property), Xn(o, l.property));
      if (m !== 0) return m * c;
    }
    return 0;
  });
}
const ta = "_filter_1nhm8_1", na = "_rows_1nhm8_9", ra = "_row_1nhm8_9", sa = "_join_1nhm8_21", oa = "_property_1nhm8_30", aa = "_operator_1nhm8_34", la = "_value_1nhm8_38", ia = "_remove_1nhm8_42", ca = "_bar_1nhm8_58", da = "_add_1nhm8_64", ua = "_custom_1nhm8_78", _a = "_summary_1nhm8_82", fa = "_second_1nhm8_87", pa = "_secondAdd_1nhm8_91", ma = "_addSecond_1nhm8_95", ha = "_joinSelect_1nhm8_109", Ge = {
  filter: ta,
  rows: na,
  row: ra,
  join: sa,
  property: oa,
  operator: aa,
  value: la,
  remove: ia,
  bar: ca,
  add: da,
  custom: ua,
  summary: _a,
  second: fa,
  secondAdd: pa,
  addSecond: ma,
  joinSelect: ha
}, vn = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], mr = {
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
function hr({
  property: e,
  value: t,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(Ee, { children: e.editor({ value: t, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      hn,
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
      hn,
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
  const l = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ge.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (c) => r(o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value)
    }
  );
}
function S2({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: l = !1,
  className: c,
  viewChanged: m,
  items: s,
  children: a
}) {
  const [i, p] = X(
    () => o != null && o.length > 0 ? o.map((u, _) => ({ id: _, ...u })) : [{ id: 0, property: e[0]?.name ?? "", operator: kn[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (u, _) => {
    p((h) => h.map((w) => w.id === u ? { ...w, ..._ } : w));
  }, $ = () => {
    const u = i[i.length - 1], _ = Math.max(0, ...i.map((w) => w.id)) + 1, h = e[0];
    p((w) => [
      ...w,
      {
        id: _,
        property: u?.property ?? h?.name ?? "",
        operator: kn[e.find((x) => x.name === (u?.property ?? h?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, y = (u) => {
    p((_) => _.length > 1 ? _.filter((h) => h.id !== u) : _);
  }, N = $e(() => {
    const u = [];
    for (const _ of i) {
      if (_.property === "" || (_.value == null || _.value === "") && !vn.includes(_.operator)) continue;
      const w = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: x } = _;
      x != null && Gn(_) && (w.secondOperator = x, w.secondValue = _.secondValue, w.logicalOperator = _.logicalOperator ?? "And"), u.push(w);
    }
    return u;
  }, [i]), v = $e(() => s == null || N.length === 0 ? s : Wr(s, { operator: t, filters: N }, { caseSensitivity: r }), [s, N, t, r]);
  we(() => {
    m != null && s != null && m(v ?? []);
  }, [v]);
  const b = (u) => e.find((_) => _.name === u) ?? { name: u, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: i.map((u, _) => {
      const h = b(u.property), w = l ? [kn[h.type ?? "string"]] : qr, x = !vn.includes(u.operator), E = u.secondOperator != null;
      return /* @__PURE__ */ O(Jr, { children: [
        /* @__PURE__ */ O("div", { className: Ge.row, children: [
          _ > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            hn,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Ge.property,
              value: u.property,
              onChange: (f) => {
                const k = e.find((M) => M.name === f.target.value);
                d(u.id, {
                  property: f.target.value,
                  operator: kn[k?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((f) => ({ value: f.name, label: f.title ?? f.name }))
            }
          ),
          /* @__PURE__ */ n(
            hn,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: Ge.operator,
              value: u.operator,
              onChange: (f) => {
                const k = f.target.value;
                d(
                  u.id,
                  vn.includes(k) ? {
                    operator: k,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: k }
                );
              },
              options: w.map((f) => ({ value: f, label: mr[f] }))
            }
          ),
          x ? /* @__PURE__ */ n(hr, { property: h, value: u.value, onChange: (f) => d(u.id, { value: f }) }) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => y(u.id),
              children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" })
            }
          )
        ] }),
        x ? E ? /* @__PURE__ */ O("div", { className: [Ge.row, Ge.second].filter(Boolean).join(" "), children: [
          /* @__PURE__ */ n(
            hn,
            {
              "aria-label": `Condition ${_ + 1} second-operator logic`,
              className: Ge.joinSelect,
              value: u.logicalOperator ?? "And",
              onChange: (f) => d(u.id, { logicalOperator: f.target.value }),
              options: [
                { value: "And", label: "And" },
                { value: "Or", label: "Or" }
              ]
            }
          ),
          /* @__PURE__ */ n(
            hn,
            {
              "aria-label": `Condition ${_ + 1} second operator`,
              className: Ge.operator,
              value: u.secondOperator,
              onChange: (f) => {
                const k = f.target.value;
                d(
                  u.id,
                  vn.includes(k) ? { secondOperator: k, secondValue: void 0 } : { secondOperator: k }
                );
              },
              options: w.map((f) => ({
                value: f,
                label: mr[f]
              }))
            }
          ),
          u.secondOperator == null || !vn.includes(u.secondOperator) ? /* @__PURE__ */ n(
            hr,
            {
              property: h,
              value: u.secondValue,
              onChange: (f) => d(u.id, { secondValue: f })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove second condition ${_ + 1}`,
              onClick: () => d(u.id, {
                secondOperator: void 0,
                secondValue: void 0,
                logicalOperator: void 0
              }),
              children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" })
            }
          )
        ] }) : /* @__PURE__ */ n("div", { className: Ge.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ge.addSecond,
            onClick: () => d(u.id, {
              secondOperator: kn[h.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, u.id);
    }) }),
    /* @__PURE__ */ O("div", { className: Ge.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ge.add, onClick: $, children: "Add filter" }),
      a != null ? /* @__PURE__ */ n("div", { className: Ge.custom, children: a }) : null,
      s != null ? /* @__PURE__ */ O("span", { className: Ge.summary, "aria-live": "polite", children: [
        v?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const ga = "_pager_203q2_1", ba = "_alignLeft_203q2_10", ya = "_alignCenter_203q2_14", xa = "_alignRight_203q2_18", ka = "_alignJustify_203q2_22", va = "_summary_203q2_26", wa = "_controls_203q2_31", $a = "_button_203q2_37", Na = "_active_203q2_73", Oa = "_ellipsis_203q2_85", Sa = "_size_203q2_91", lt = {
  pager: ga,
  alignLeft: ba,
  alignCenter: ya,
  alignRight: xa,
  alignJustify: ka,
  summary: va,
  controls: wa,
  button: $a,
  active: Na,
  ellipsis: Oa,
  size: Sa
};
function za(e, t, r, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(r)).replace("{2}", String(o));
}
function gr(e, t) {
  return e.replace("{0}", String(t));
}
function Da(e, t, r) {
  if (t <= r) return Array.from({ length: t }, (s, a) => a + 1);
  const o = Math.floor(r / 2);
  let l = Math.max(1, e - o);
  const c = Math.min(t, l + r - 1);
  l = Math.max(1, c - r + 1);
  const m = [];
  for (let s = l; s <= c; s++) m.push(s);
  return l > 2 && m.unshift("ellipsis"), l > 1 && m.unshift(1), c < t - 1 && m.push("ellipsis"), c < t && m.push(t), m;
}
function Ma({
  count: e,
  pageSize: t,
  page: r,
  pageNumber: o,
  defaultPage: l = 1,
  pageSizeOptions: c,
  pageNumbersCount: m = 5,
  alwaysVisible: s = !1,
  horizontalAlign: a = "left",
  showPagingSummary: i,
  showSummary: p,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: $ = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: y,
  summaryTemplate: N,
  pageSizeText: v = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: u = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: h = "Last page",
  pageTitleFormat: w = "Page {0}",
  pageAriaLabelFormat: x = "Page {0}",
  onPageChange: E,
  onPageSizeChange: f,
  ariaLabel: k = "Pagination",
  className: M,
  visible: I = !0
}) {
  const D = r ?? o ?? l, [S, g] = X(D), C = r !== void 0 || o !== void 0, P = C ? D : S, A = Math.max(1, Math.ceil(e / t)), T = Math.min(Math.max(1, P), A), K = i ?? p ?? !0, V = s || A > 1, J = Da(T, A, m), Z = H(
    (U) => {
      const L = Math.min(Math.max(1, U), A);
      C || g(L);
      const te = (L - 1) * t;
      E?.({ page: L, skip: te, top: t, pageCount: A, pageSize: t });
    },
    [C, E, A, t]
  ), ee = a === "center" ? lt.alignCenter : a === "right" ? lt.alignRight : a === "justify" ? lt.alignJustify : lt.alignLeft, ue = { count: e, pageNumber: T, pageSize: t, pageCount: A }, ie = (U) => {
    const L = Array.from(U.currentTarget.querySelectorAll("button[data-pager-page]")), te = L.indexOf(document.activeElement);
    te !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (L[te + 1] ?? L[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (L[te - 1] ?? L[L.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), L[0]?.focus()) : U.key === "End" && (U.preventDefault(), L[L.length - 1]?.focus()));
  };
  return I === !1 || !V ? null : /* @__PURE__ */ O("nav", { className: [lt.pager, ee, M].filter(Boolean).join(" "), "aria-label": k, children: [
    K && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: y ? y(ue) : N ? N({ count: e, pageNumber: T, pageSize: t }) : za($, T, A, e) }),
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
          "aria-label": u,
          title: u,
          children: "‹"
        }
      ),
      J.map(
        (U, L) => U === "ellipsis" ? /* @__PURE__ */ n("span", { className: lt.ellipsis, "aria-hidden": "true", children: "…" }, `e${L}`) : /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "data-pager-page": U,
            className: [lt.button, U === T ? lt.active : ""].filter(Boolean).join(" "),
            "aria-current": U === T ? "page" : void 0,
            "aria-label": gr(x, U),
            title: gr(w, U),
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
          disabled: T >= A,
          onClick: () => Z(A),
          "aria-label": h,
          title: h,
          children: "»"
        }
      )
    ] }),
    d && c && c.length > 0 && /* @__PURE__ */ O("label", { className: lt.size, children: [
      /* @__PURE__ */ n("span", { children: v }),
      /* @__PURE__ */ n(
        "select",
        {
          value: t,
          onChange: (U) => f?.(Number(U.target.value)),
          "aria-label": v,
          children: c.map((U) => /* @__PURE__ */ n("option", { value: U, children: U }, U))
        }
      )
    ] })
  ] });
}
function rr(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: o, showSummary: l, ...c } = e;
  return /* @__PURE__ */ n(
    Ma,
    {
      page: t,
      showPagingSummary: l,
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
function Ca(e, t, r, o, l, c) {
  if (!t || !r) return e.map((a) => ({ type: "row", row: a }));
  const m = /* @__PURE__ */ new Map();
  e.forEach((a) => {
    const i = String(l(a, t) ?? ""), p = m.get(i);
    p ? p.push(a) : m.set(i, [a]);
  });
  const s = [];
  return m.forEach((a, i) => {
    const p = a[0], d = p != null ? l(p, t) : void 0;
    s.push({
      type: "group",
      group: { key: i, display: c(d), property: t, title: r.title ?? t, count: a.length }
    }), o.has(i) && a.forEach(($) => s.push({ type: "row", row: $ }));
  }), s;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function Ea(e, t) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: l, column: c }) => {
    if (!c.frozen) return;
    r[l] = o === 0 ? "0px" : `${o}px`;
    const m = t[l] ?? c.width ?? "8rem";
    o += parseFloat(m);
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
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const yr = ["Ascending", "Descending", null];
function Aa(e, t, r = {}) {
  const o = e.find((c) => c.property === t), l = yr[(o ? yr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((c) => c.property !== t) : r.multi ? [...e.filter((c) => c.property !== t), { property: t, sortOrder: l }] : [{ property: t, sortOrder: l }];
}
function Ta(e, t) {
  return ea(e, t);
}
function ja(e, t, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), l = Math.min(Math.max(1, t), o), c = (l - 1) * r;
  return { items: e.slice(c, c + r), pageCount: o, pageNumber: l, total: e.length };
}
function La(e, t, r = {}) {
  const o = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(([s, a]) => ({
    property: s,
    operator: a.operator ?? "Contains",
    value: Ia(a.value, r.types?.[s] ?? "string")
  })), l = o.length > 0 ? Wr(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, c = Ta(l, t.sorts);
  return { ...ja(c, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function Ra(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Pa = "_grid_kz335_1", Ba = "_toolbar_kz335_8", Fa = "_picker_kz335_13", Ha = "_pickerButton_kz335_17", Ka = "_pickerPanel_kz335_31", qa = "_pickerItem_kz335_46", Ua = "_groupPanel_kz335_55", Wa = "_groupPanelActive_kz335_66", Va = "_groupPanelText_kz335_70", Xa = "_groupChip_kz335_74", Ga = "_groupRemove_kz335_85", Ya = "_groupRow_kz335_94", Za = "_groupCell_kz335_98", Ja = "_groupToggle_kz335_103", Qa = "_editRow_kz335_116", el = "_editCell_kz335_120", tl = "_editInput_kz335_125", nl = "_commandCell_kz335_135", rl = "_commandButton_kz335_141", sl = "_data_kz335_156", ol = "_table_kz335_163", al = "_header_kz335_169", ll = "_center_kz335_181", il = "_right_kz335_185", cl = "_sortButton_kz335_189", dl = "_sortIndicator_kz335_207", ul = "_sortIndex_kz335_211", _l = "_cell_kz335_222", fl = "_clickable_kz335_236", pl = "_frozen_kz335_244", ml = "_selected_kz335_250", hl = "_resizeHandle_kz335_254", gl = "_filterCell_kz335_272", bl = "_filterSelect_kz335_280", yl = "_filterInput_kz335_290", xl = "_empty_kz335_301", kl = "_loading_kz335_307", vl = "_visuallyHidden_kz335_317", ge = {
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
  data: sl,
  table: ol,
  header: al,
  center: ll,
  right: il,
  sortButton: cl,
  sortIndicator: dl,
  sortIndex: ul,
  cell: _l,
  clickable: fl,
  frozen: pl,
  selected: ml,
  resizeHandle: hl,
  filterCell: gl,
  filterSelect: bl,
  filterInput: yl,
  empty: xl,
  loading: kl,
  visuallyHidden: vl
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
function z2({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: c = !1,
  allowFiltering: m = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: i = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: $ = 5,
  pagerPosition: y = "Bottom",
  showPagingSummary: N = !0,
  showPageSizeSelector: v = !0,
  selectionMode: b = "None",
  selectedKeys: u,
  onSelectionChange: _,
  showColumnPicker: h = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: E = !1,
  allowGrouping: f = !1,
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
  className: K,
  onRowClick: V
}) {
  const [J, Z] = X([]), [ee, ue] = X(/* @__PURE__ */ new Map()), [ie, U] = X(1), [L, te] = X(p), [G, ce] = X(
    () => e.map((j, R) => Ln(j, R))
  ), [oe, ye] = X(
    () => new Set(e.map((j, R) => j.visible !== !1 ? Ln(j, R) : "").filter(Boolean))
  ), [ve, Be] = X({}), [ke, We] = X(!1), [be, Ze] = X(null), [Ve, Re] = X(null), [tt, Qe] = X(null), [et, W] = X({}), z = ae(null), F = ae(null), ne = $e(() => {
    const j = /* @__PURE__ */ new Map();
    return e.forEach((R, le) => j.set(Ln(R, le), R)), j;
  }, [e]), _e = $e(
    () => G.filter((j) => oe.has(j)).map((j) => ({ key: j, column: ne.get(j) })).filter((j) => j.column != null),
    [G, oe, ne]
  ), re = $e(
    () => Ea(_e, ve),
    [_e, ve]
  ), he = I !== "None" || C != null || D, Ne = $e(
    () => La(t, { sorts: J, filters: ee, pageNumber: ie, pageSize: L }, {
      logicalOperator: a,
      caseSensitivity: s,
      types: Object.fromEntries(
        e.filter((j) => j.type != null && j.property != null).map((j) => [j.property, j.type])
      )
    }),
    [t, J, ee, ie, L, a, s, e]
  ), Fe = $e(
    () => be ? e.find((j) => j.property === be) : void 0,
    [be, e]
  ), Je = $e(
    () => Ve ?? new Set(M ? Ne.items.map((j) => String(wn(j, be ?? "") ?? "")) : []),
    [Ve, M, Ne.items, be]
  ), dt = $e(
    () => Ca(
      Ne.items,
      be ?? void 0,
      Fe,
      Je,
      wn,
      (j) => br(j, Fe?.format)
    ),
    [Ne.items, be, Fe, Je]
  ), xt = $e(
    () => be ? _e.filter((j) => j.column.property !== be) : _e,
    [_e, be]
  ), Q = (j) => {
    j !== "" && Z(Aa(J, j, { multi: l }));
  }, Se = (j, R) => {
    ue((le) => {
      const me = new Map(le);
      return me.set(j, R), me;
    }), U(1);
  }, nt = (j) => {
    te(j), U(1);
  }, Ut = (j) => {
    if (b === "None") return;
    const R = r(j), le = u ?? [];
    let me;
    b === "Single" ? me = le.length === 1 && le[0] === R ? [] : [R] : me = le.includes(R) ? le.filter((Ie) => Ie !== R) : [...le, R], _?.(me);
  }, Ot = (j) => {
    V?.(j);
  }, ze = (j, R, le) => {
    z.current = { key: j, startX: R, startWidth: le };
  }, Xe = (j) => {
    const R = z.current;
    if (!R) return;
    const le = j - R.startX, me = Math.max(48, R.startWidth + le);
    Be((Ie) => ({ ...Ie, [R.key]: `${me}px` }));
  }, kt = () => {
    z.current = null;
  }, Lt = (j) => {
    F.current = j;
  }, Zt = (j) => {
    const R = F.current;
    F.current = null, !(!R || R === j) && ce((le) => {
      const me = [...le], Ie = me.indexOf(R), Ae = me.indexOf(j);
      return Ie < 0 || Ae < 0 ? le : (me.splice(Ie, 1), me.splice(Ae, 0, R), me);
    });
  }, q = (j) => {
    ye((R) => {
      const le = new Set(R);
      return le.has(j) ? le.delete(j) : le.add(j), le;
    });
  }, de = () => {
    const j = F.current;
    if (F.current = null, !j || !f) return;
    const le = ne.get(j)?.property;
    le && (Ze(le), Re(null));
  }, Pe = () => {
    Ze(null), Re(null);
  }, Ke = (j) => {
    Re((R) => {
      const le = R ?? new Set(M ? Ne.items.map((Ie) => String(wn(Ie, be ?? "") ?? "")) : []), me = new Set(le);
      return me.has(j) ? me.delete(j) : me.add(j), me;
    });
  }, Rt = (j) => {
    const R = {};
    e.forEach((le) => {
      le.property && (R[le.property] = wn(j, le.property));
    }), W(R), Qe(String(r(j)));
  }, St = () => {
    const j = {};
    e.forEach((R) => {
      R.property && R.type === "boolean" && (j[R.property] = !1);
    }), W(j), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, Y = (j) => {
    if (tt === "__new__") {
      const R = Object.fromEntries(
        e.filter((le) => le.property).map((le) => [le.property, et[le.property]])
      );
      g?.(R);
    } else if (j != null) {
      const R = { ...j, ...et };
      S?.(j, R);
    }
    B();
  }, se = i && (y === "Top" || y === "TopAndBottom"), pe = i && (y === "Bottom" || y === "TopAndBottom"), fe = m && e.some((j) => xr(j, m)), xe = (j, R, le) => j.render ? j.render(R, { index: 0 }) : br(wn(R, j.property), j.format), je = (j) => {
    const R = [ge.cell];
    return j.align === "center" && R.push(ge.center), j.align === "right" && R.push(ge.right), j.frozen && R.push(ge.frozen), R.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, K].filter(Boolean).join(" "), children: [
    se && /* @__PURE__ */ n(
      rr,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: $,
        showSummary: N,
        showPageSizeSelector: v,
        ariaLabel: pe ? "Pagination (top)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: nt
      }
    ),
    (f || D || h) && /* @__PURE__ */ O("div", { className: ge.toolbar, children: [
      f && /* @__PURE__ */ n(
        "div",
        {
          className: [ge.groupPanel, be ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: f ? (j) => j.preventDefault() : void 0,
          onDrop: f ? de : void 0,
          children: be ? /* @__PURE__ */ O("span", { className: ge.groupChip, children: [
            Fe?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ n("button", { type: "button", className: ge.groupRemove, onClick: Pe, "aria-label": `Remove group by ${Fe?.title ?? be}`, children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" }) })
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
            children: w
          }
        ),
        ke && /* @__PURE__ */ n("div", { className: ge.pickerPanel, role: "menu", "aria-label": w, children: e.map((j, R) => {
          const le = Ln(j, R);
          return /* @__PURE__ */ O("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                checked: oe.has(le),
                onChange: () => q(le)
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
              xt.map(({ key: j, column: R }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: ve[j] ?? R.width,
                    minWidth: R.minWidth,
                    maxWidth: R.maxWidth
                  }
                },
                j
              )),
              he && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ O("thead", { children: [
              /* @__PURE__ */ O("tr", { children: [
                xt.map(({ key: j, column: R }) => {
                  const le = $l(R, o), me = J.find((De) => De.property === R.property), Ie = me ? J.indexOf(me) + 1 : 0, Ae = R.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": le && me ? wl[me.sortOrder] : "none",
                      className: [
                        ge.header,
                        Ae === "center" ? ge.center : "",
                        Ae === "right" ? ge.right : "",
                        R.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: re[j] } : void 0,
                      scope: "col",
                      draggable: E || f || void 0,
                      onDragStart: E || f ? (De) => {
                        De.dataTransfer && (De.dataTransfer.effectAllowed = "move"), Lt(j);
                      } : void 0,
                      onDragOver: E ? (De) => De.preventDefault() : void 0,
                      onDrop: E ? () => Zt(j) : void 0,
                      children: [
                        le ? /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => R.property != null && Q(R.property),
                            "aria-label": me ? me.sortOrder === "Ascending" ? `Sort ${R.title ?? R.property} descending` : `Sort ${R.title ?? R.property} ascending` : `Sort ${R.title ?? R.property} ascending`,
                            children: [
                              R.title ?? R.property,
                              me && /* @__PURE__ */ n("span", { className: ge.sortIndicator, "aria-hidden": "true", children: me.sortOrder === "Ascending" ? "▲" : "▼" }),
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
                            onMouseDown: (De) => {
                              De.preventDefault(), De.stopPropagation();
                              const at = ve[j] ?? R.width, zt = at ? parseFloat(at) : 96;
                              ze(j, De.clientX, Number.isFinite(zt) ? zt : 96);
                            },
                            onMouseMove: (De) => {
                              z.current?.key === j && Xe(De.clientX);
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
              fe && /* @__PURE__ */ n("tr", { children: xt.map(({ key: j, column: R }) => {
                if (!xr(R, m)) return /* @__PURE__ */ n("td", { className: ge.filterCell }, j);
                const le = ee.get(R.property ?? "");
                return /* @__PURE__ */ O("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ O("label", { className: ge.visuallyHidden, htmlFor: `df-${R.property}`, children: [
                    "Filter ",
                    R.title ?? R.property
                  ] }),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${R.property}`,
                      className: ge.filterSelect,
                      value: le?.operator ?? Ra(R.type ?? "string"),
                      onChange: (me) => Se(R.property ?? "", { ...le, operator: me.target.value }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: qr.filter((me) => me !== "Custom").map((me) => /* @__PURE__ */ n("option", { value: me, children: me }, me))
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: le?.value ?? "",
                      onChange: (me) => Se(R.property ?? "", { ...le, value: me.target.value }),
                      placeholder: `Filter ${R.title ?? R.property}`,
                      "aria-label": `${R.title ?? R.property} value`
                    }
                  )
                ] }, j);
              }) })
            ] }),
            /* @__PURE__ */ O("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ O("tr", { className: ge.editRow, children: [
                xt.map(({ key: j, column: R }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: R.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: R.type === "number" ? "number" : R.type === "boolean" ? "checkbox" : "text",
                    checked: R.type === "boolean" ? !!et[R.property] : void 0,
                    value: R.type === "boolean" ? void 0 : String(et[R.property] ?? ""),
                    onChange: (le) => W((me) => ({
                      ...me,
                      [R.property]: R.type === "boolean" ? le.target.checked : le.target.value
                    })),
                    "aria-label": `${R.title ?? R.property} (new)`
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
                  return /* @__PURE__ */ n("tr", { className: ge.groupRow, children: /* @__PURE__ */ n("td", { colSpan: xt.length + (he ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ O(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": Ae,
                      onClick: () => Ke(j.group.key),
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
                const R = j.row, le = r(R), me = (u ?? []).includes(le), Ie = tt != null && tt === String(le);
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
                      Nl(Ae.target) || (Ot(R), Ut(R));
                    } : void 0,
                    children: [
                      xt.map(({ key: Ae, column: De }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: je(De),
                          style: De.frozen ? { left: re[Ae] } : void 0,
                          children: Ie && De.property ? /* @__PURE__ */ n(
                            "input",
                            {
                              className: ge.editInput,
                              type: De.type === "number" ? "number" : De.type === "boolean" ? "checkbox" : "text",
                              checked: De.type === "boolean" ? !!et[De.property] : void 0,
                              value: De.type === "boolean" ? void 0 : String(et[De.property] ?? ""),
                              onChange: (at) => W((zt) => ({
                                ...zt,
                                [De.property]: De.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${De.title ?? De.property} (edit)`
                            }
                          ) : xe(De, R)
                        },
                        Ae
                      )),
                      he && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(Ee, { children: [
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: () => Y(R), children: "Save" }),
                        /* @__PURE__ */ n("button", { type: "button", className: ge.commandButton, onClick: B, children: "Cancel" })
                      ] }) : /* @__PURE__ */ O(Ee, { children: [
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
        showPageSizeSelector: v,
        ariaLabel: se ? "Pagination (bottom)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Ol = "_wrap_2wcog_1", Sl = "_grid_2wcog_7", zl = "_stacked_2wcog_13", Dl = "_item_2wcog_19", Ml = "_empty_2wcog_25", $n = {
  wrap: Ol,
  grid: Sl,
  stacked: zl,
  item: Dl,
  empty: Ml
};
function D2({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: l,
  emptyMessage: c = "No records found",
  emptyTemplate: m,
  loadingTemplate: s,
  isLoading: a = !1,
  showPageSizeSelector: i = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [$, y] = X(1), [N, v] = X(t), b = e.length, u = Math.max(1, Math.ceil(b / N)), _ = Math.min(Math.max(1, $), u), h = $e(() => {
    const x = (_ - 1) * N;
    return e.slice(x, x + N);
  }, [e, _, N]), w = o ? $n.grid : $n.stacked;
  return /* @__PURE__ */ O("div", { className: [$n.wrap, p].filter(Boolean).join(" "), "aria-label": d, children: [
    a && s != null ? s : b === 0 ? m ?? /* @__PURE__ */ n("div", { className: $n.empty, children: c }) : /* @__PURE__ */ n("div", { className: w, children: h.map((x, E) => /* @__PURE__ */ n("div", { className: $n.item, children: l ? l(x, E) : String(x) }, E)) }),
    /* @__PURE__ */ n(
      rr,
      {
        pageNumber: _,
        pageSize: N,
        count: b,
        pageSizeOptions: r,
        showPageSizeSelector: i,
        onPageChange: y,
        onPageSizeChange: (x) => {
          v(x), y(1);
        }
      }
    )
  ] });
}
const Cl = "_label_6jw3b_1", El = {
  label: Cl
}, M2 = He(
  function({ className: t, children: r, ...o }, l) {
    return /* @__PURE__ */ n("label", { ref: l, className: [El.label, t].filter(Boolean).join(" "), ...o, children: r });
  }
), Il = "_input_1hgze_1", Al = "_invalid_1hgze_37", Tl = "_xs_1hgze_43", jl = "_sm_1hgze_49", Ll = "_md_1hgze_55", Rl = "_lg_1hgze_61", Pl = "_xl_1hgze_67", Zn = {
  input: Il,
  invalid: Al,
  xs: Tl,
  sm: jl,
  md: Ll,
  lg: Rl,
  xl: Pl
}, C2 = He(function({ size: t = "md", invalid: r = !1, className: o, visible: l = !0, ...c }, m) {
  return l === !1 ? null : /* @__PURE__ */ n(
    "input",
    {
      ref: m,
      className: [Zn.input, Zn[t], r ? Zn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), Bl = "_checkbox_1e35b_1", Fl = {
  checkbox: Bl
}, E2 = He(function({ className: t, ...r }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Fl.checkbox, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), Hl = {
  switch: "_switch_g0q9x_1"
}, Kl = He(function({ className: t, ...r }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [Hl.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), ql = "_trigger_23nf5_1", Ul = "_tooltip_23nf5_7", Wl = "_top_23nf5_34", Vl = "_right_23nf5_40", Xl = "_bottom_23nf5_46", Gl = "_left_23nf5_52", Yl = "_arrow_23nf5_58", Rn = {
  trigger: ql,
  tooltip: Ul,
  "se-tooltip-in": "_se-tooltip-in_23nf5_1",
  top: Wl,
  right: Vl,
  bottom: Xl,
  left: Gl,
  arrow: Yl
};
function I2({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: o = 300,
  className: l
}) {
  const c = Ye(), m = ae(null), [s, a] = X(!1), i = () => {
    m.current = window.setTimeout(() => a(!0), o);
  }, p = () => {
    m.current !== null && (window.clearTimeout(m.current), m.current = null), a(!1);
  };
  we(() => {
    if (!s) return;
    const $ = (y) => {
      y.key === "Escape" && p();
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [s]);
  const d = Tn(t) ? Br(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        s ? c : null
      ].filter(($) => typeof $ == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ O(
    "span",
    {
      className: [Rn.trigger, l].filter(Boolean).join(" "),
      onMouseEnter: i,
      onMouseLeave: p,
      onFocus: i,
      onBlur: p,
      children: [
        d,
        s && /* @__PURE__ */ O(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [Rn.tooltip, Rn[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ n("span", { className: Rn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Zl = "_dialog_h8uja_1", Jl = "_sm_h8uja_36", Ql = "_md_h8uja_40", ei = "_lg_h8uja_44", ti = "_header_h8uja_48", ni = "_title_h8uja_57", ri = "_description_h8uja_64", si = "_close_h8uja_71", oi = "_body_h8uja_90", ai = "_footer_h8uja_96", Vt = {
  dialog: Zl,
  "se-dialog-in": "_se-dialog-in_h8uja_1",
  sm: Jl,
  md: Ql,
  lg: ei,
  header: ti,
  title: ni,
  description: ri,
  close: si,
  body: oi,
  footer: ai
};
function A2({
  open: e,
  onClose: t,
  title: r,
  description: o,
  children: l,
  footer: c,
  size: m = "md",
  width: s,
  height: a,
  className: i
}) {
  const p = ae(null), d = Ye(), $ = Ye(), y = ae(t);
  we(() => {
    y.current = t;
  });
  const N = ae(!1), v = ae(!1), b = H(() => {
    N.current || (N.current = !0, y.current());
  }, []), u = H(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    y.current();
  }, []);
  return we(() => {
    const _ = p.current;
    if (_)
      if (e && !_.open) {
        const h = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        _.showModal(), (_.querySelector('button[aria-label="Close dialog"]') ?? _.querySelector("button"))?.focus();
        const x = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const E = (f) => {
          f.preventDefault(), b();
        };
        return _.addEventListener("cancel", E), () => {
          _.removeEventListener("cancel", E), document.body.style.overflow = x, h?.focus({ preventScroll: !0 });
        };
      } else !e && _.open && (v.current = N.current, N.current = !1, _.close());
  }, [e, b]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ O(
    "dialog",
    {
      ref: p,
      className: [Vt.dialog, Vt[m], i].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: u,
      onClick: (_) => {
        _.target === p.current && b();
      },
      "aria-modal": "true",
      "aria-labelledby": r ? d : void 0,
      "aria-describedby": o ? $ : void 0,
      children: [
        r && /* @__PURE__ */ O("header", { className: Vt.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: d, className: Vt.title, children: r }),
            o && /* @__PURE__ */ n("p", { id: $, className: Vt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Vt.close,
              onClick: b,
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ n("div", { className: Vt.body, children: l }),
        c && /* @__PURE__ */ n("footer", { className: Vt.footer, children: c })
      ]
    }
  );
}
const li = "_viewport_1dj88_1", ii = "_topLeft_1dj88_13", ci = "_topRight_1dj88_20", di = "_bottomLeft_1dj88_25", ui = "_toast_1dj88_30", _i = "_leaving_1dj88_61", fi = "_info_1dj88_77", pi = "_success_1dj88_82", mi = "_warning_1dj88_87", hi = "_danger_1dj88_92", gi = "_content_1dj88_97", bi = "_title_1dj88_102", yi = "_description_1dj88_125", xi = "_dismiss_1dj88_132", ki = "_actions_1dj88_151", vi = "_action_1dj88_151", wi = "_cancel_1dj88_159", $i = "_progress_1dj88_195", mt = {
  viewport: li,
  topLeft: ii,
  topRight: ci,
  bottomLeft: di,
  toast: ui,
  "se-toast-in": "_se-toast-in_1dj88_1",
  leaving: _i,
  "se-toast-out": "_se-toast-out_1dj88_1",
  info: fi,
  success: pi,
  warning: mi,
  danger: hi,
  content: gi,
  title: bi,
  description: yi,
  dismiss: xi,
  actions: ki,
  action: vi,
  cancel: wi,
  progress: $i,
  "se-toast-progress": "_se-toast-progress_1dj88_1"
}, Vr = Hr(null);
function T2() {
  const e = Fr(Vr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Ni = 200, Oi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function j2({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: l
}) {
  const [c, m] = X([]), [s, a] = X(!1), i = ae([]), p = ae(/* @__PURE__ */ new Map()), d = ae(!1), $ = ae(0), y = (S) => {
    d.current = S, a(S);
  }, N = H((S) => {
    const g = p.current.get(S);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(0, g.remaining - (Date.now() - g.startedAt)));
  }, []), v = H((S) => {
    const g = p.current.get(S);
    g && (window.clearTimeout(g.timeoutId), p.current.delete(S));
  }, []), b = H(
    (S) => {
      v(S), m((g) => {
        const C = g.filter((P) => P.id !== S);
        return i.current = C, C;
      });
    },
    [v]
  ), u = H(
    (S) => {
      const g = i.current.find((C) => C.id === S);
      !g || g.leaving || (g.onAutoClose?.(), b(S));
    },
    [b]
  ), _ = H(
    (S) => {
      const g = p.current.get(S);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => u(S), g.remaining));
    },
    [u]
  ), h = H(() => {
    d.current || p.current.forEach((S, g) => N(g)), y(!0);
  }, [N]), w = H(() => {
    p.current.forEach((S, g) => _(g)), y(!1);
  }, [_]);
  we(() => {
    if (!o) return;
    const S = () => {
      document.hidden ? h() : w();
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, [o, h, w]);
  const x = H(
    (S) => {
      const g = i.current.find((C) => C.id === S);
      !g || g.leaving || (g.onDismiss?.(), m((C) => {
        const P = C.map((A) => A.id === S ? { ...A, leaving: !0 } : A);
        return i.current = P, P;
      }), window.setTimeout(() => b(S), Ni));
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
      p.current.set(S.id, g), d.current || _(S.id);
    },
    [_]
  ), f = H(
    (S) => {
      const g = i.current.find((P) => P.id === S.id), C = {
        id: S.id ?? ++$.current,
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
        return i.current = A, A;
      }), g && v(C.id), E(C);
    },
    [t, r, E, v]
  ), k = $e(() => ({ toast: f }), [f]), M = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map((S) => S.position)])),
    [r, c]
  ), I = o ? h : void 0, D = o ? w : void 0;
  return /* @__PURE__ */ O(Vr.Provider, { value: k, children: [
    e,
    M.map((S) => /* @__PURE__ */ n(
      "div",
      {
        className: [
          mt.viewport,
          mt[Oi[S]],
          l
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
            onClick: g.closeOnClick ? () => x(g.id) : void 0,
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
                        g.action?.onClick?.(), x(g.id);
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
                  className: mt.dismiss,
                  onClick: () => x(g.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" })
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
const Si = "_alert_1uhk1_1", zi = "_xs_1uhk1_28", Di = "_sm_1uhk1_38", Mi = "_lg_1uhk1_48", Ci = "_xl_1uhk1_58", Ei = "_primary_1uhk1_69", Ii = "_secondary_1uhk1_74", Ai = "_light_1uhk1_79", Ti = "_base_1uhk1_84", ji = "_dark_1uhk1_89", Li = "_info_1uhk1_94", Ri = "_success_1uhk1_99", Pi = "_warning_1uhk1_104", Bi = "_danger_1uhk1_109", Fi = "_flat_1uhk1_116", Hi = "_outlined_1uhk1_123", Ki = "_filled_1uhk1_131", qi = "_text_1uhk1_138", Ui = "_icon_1uhk1_181", Wi = "_content_1uhk1_192", Vi = "_title_1uhk1_197", Xi = "_body_1uhk1_203", Gi = "_dismiss_1uhk1_209", Et = {
  alert: Si,
  xs: zi,
  sm: Di,
  lg: Mi,
  xl: Ci,
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
  "shade-lighter": "_shade-lighter_1uhk1_341",
  "shade-light": "_shade-light_1uhk1_341",
  "shade-dark": "_shade-dark_1uhk1_343",
  "shade-darker": "_shade-darker_1uhk1_344"
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
function L2({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: r,
  size: o = "md",
  title: l,
  icon: c,
  showIcon: m = !0,
  children: s,
  dismissible: a = !0,
  onDismiss: i,
  visible: p,
  onVisibleChange: d,
  className: $,
  ...y
}) {
  const [N, v] = X(!1);
  if (p === !1 || p === void 0 && N)
    return null;
  const b = () => {
    p === void 0 && v(!0), i?.(), d?.(!1);
  }, u = e, _ = cr(t, "filled"), h = r && r !== "default" ? `shade-${r}` : null, w = c ?? (m ? /* @__PURE__ */ n(Me, { name: Yi[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...y,
      className: [Et.alert, Et[u], Et[_], h ? Et[h] : null, Et[o], $].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          l && /* @__PURE__ */ n("div", { className: Et.title, children: l }),
          s && /* @__PURE__ */ n("div", { className: Et.body, children: s })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Zi = "_skeleton_1e8h1_1", Ji = "_text_1e8h1_35", Qi = "_circle_1e8h1_40", ec = "_rect_1e8h1_44", kr = {
  skeleton: Zi,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1e8h1_1",
  text: Ji,
  circle: Qi,
  rect: ec
};
function R2({
  variant: e = "text",
  width: t,
  height: r,
  className: o
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (l.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [kr.skeleton, kr[e], o].filter(Boolean).join(" "),
      style: l
    }
  );
}
const tc = "_row_1tkam_1", nc = "_gapXs_1tkam_12", rc = "_gapSm_1tkam_17", sc = "_gapMd_1tkam_22", oc = "_gapLg_1tkam_27", ac = "_gapXl_1tkam_32", lc = "_start_1tkam_37", ic = "_center_1tkam_41", cc = "_end_1tkam_45", dc = "_stretch_1tkam_49", uc = "_baseline_1tkam_53", _c = "_noWrap_1tkam_109", fc = "_wrapReverse_1tkam_113", pc = "_gapRowXs_1tkam_117", mc = "_gapRowSm_1tkam_121", hc = "_gapRowMd_1tkam_125", gc = "_gapRowLg_1tkam_129", bc = "_gapRowXl_1tkam_133", an = {
  row: tc,
  gapXs: nc,
  gapSm: rc,
  gapMd: sc,
  gapLg: oc,
  gapXl: ac,
  start: lc,
  center: ic,
  end: cc,
  stretch: dc,
  baseline: uc,
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
  noWrap: _c,
  wrapReverse: fc,
  gapRowXs: pc,
  gapRowSm: mc,
  gapRowMd: hc,
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
function kc(e) {
  return typeof e != "string" ? null : yc[e] ?? null;
}
function vc(e) {
  return typeof e != "string" ? null : xc[e] ?? null;
}
function vr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function P2({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: o = "start",
  wrap: l = !0,
  className: c,
  style: m,
  ...s
}) {
  const a = kc(e), i = vc(t), p = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, d = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...p ? { gap: p, "--dx-col-gap": p } : {},
    ...t != null && !i ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...m
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        an.row,
        an[r],
        an[`justify-${o}`],
        vr(l) != null ? an[vr(l)] : null,
        a ? an[a] : null,
        i ? an[i] : null,
        c
      ].filter(Boolean).join(" "),
      style: d,
      ...s
    }
  );
}
const wc = "_column_1819k_1", $c = "_Size1_1819k_15", Nc = "_Size2_1819k_16", Oc = "_Size3_1819k_17", Sc = "_Size4_1819k_18", zc = "_Size5_1819k_19", Dc = "_Size6_1819k_20", Mc = "_Size7_1819k_21", Cc = "_Size8_1819k_22", Ec = "_Size9_1819k_23", Ic = "_Size10_1819k_24", Ac = "_Size11_1819k_25", Tc = "_Size12_1819k_26", jc = "_Offset0_1819k_27", Lc = "_Offset1_1819k_28", Rc = "_Offset2_1819k_29", Pc = "_Offset3_1819k_30", Bc = "_Offset4_1819k_31", Fc = "_Offset5_1819k_32", Hc = "_Offset6_1819k_33", Kc = "_Offset7_1819k_34", qc = "_Offset8_1819k_35", Uc = "_Offset9_1819k_36", Wc = "_Offset10_1819k_37", Vc = "_Offset11_1819k_38", Xc = "_Offset12_1819k_39", Gc = "_OrderFirst_1819k_40", Yc = "_OrderLast_1819k_41", Zc = "_Order0_1819k_42", Jc = "_Order1_1819k_43", Qc = "_Order2_1819k_44", ed = "_Order3_1819k_45", td = "_Order4_1819k_46", nd = "_Order5_1819k_47", rd = "_Order6_1819k_48", sd = "_Order7_1819k_49", od = "_Order8_1819k_50", ad = "_Order9_1819k_51", ld = "_Order10_1819k_52", id = "_Order11_1819k_53", cd = "_Order12_1819k_54", dd = "_xsSize1_1819k_57", ud = "_xsSize2_1819k_58", _d = "_xsSize3_1819k_59", fd = "_xsSize4_1819k_60", pd = "_xsSize5_1819k_61", md = "_xsSize6_1819k_62", hd = "_xsSize7_1819k_63", gd = "_xsSize8_1819k_64", bd = "_xsSize9_1819k_65", yd = "_xsSize10_1819k_66", xd = "_xsSize11_1819k_67", kd = "_xsSize12_1819k_68", vd = "_xsOffset0_1819k_69", wd = "_xsOffset1_1819k_70", $d = "_xsOffset2_1819k_71", Nd = "_xsOffset3_1819k_72", Od = "_xsOffset4_1819k_73", Sd = "_xsOffset5_1819k_74", zd = "_xsOffset6_1819k_75", Dd = "_xsOffset7_1819k_76", Md = "_xsOffset8_1819k_77", Cd = "_xsOffset9_1819k_78", Ed = "_xsOffset10_1819k_79", Id = "_xsOffset11_1819k_80", Ad = "_xsOffset12_1819k_81", Td = "_xsOrderFirst_1819k_82", jd = "_xsOrderLast_1819k_83", Ld = "_xsOrder0_1819k_84", Rd = "_xsOrder1_1819k_85", Pd = "_xsOrder2_1819k_86", Bd = "_xsOrder3_1819k_87", Fd = "_xsOrder4_1819k_88", Hd = "_xsOrder5_1819k_89", Kd = "_xsOrder6_1819k_90", qd = "_xsOrder7_1819k_91", Ud = "_xsOrder8_1819k_92", Wd = "_xsOrder9_1819k_93", Vd = "_xsOrder10_1819k_94", Xd = "_xsOrder11_1819k_95", Gd = "_xsOrder12_1819k_96", Yd = "_smSize1_1819k_100", Zd = "_smSize2_1819k_101", Jd = "_smSize3_1819k_102", Qd = "_smSize4_1819k_103", eu = "_smSize5_1819k_104", tu = "_smSize6_1819k_105", nu = "_smSize7_1819k_106", ru = "_smSize8_1819k_107", su = "_smSize9_1819k_108", ou = "_smSize10_1819k_109", au = "_smSize11_1819k_110", lu = "_smSize12_1819k_111", iu = "_smOffset0_1819k_112", cu = "_smOffset1_1819k_113", du = "_smOffset2_1819k_114", uu = "_smOffset3_1819k_115", _u = "_smOffset4_1819k_116", fu = "_smOffset5_1819k_117", pu = "_smOffset6_1819k_118", mu = "_smOffset7_1819k_119", hu = "_smOffset8_1819k_120", gu = "_smOffset9_1819k_121", bu = "_smOffset10_1819k_122", yu = "_smOffset11_1819k_123", xu = "_smOffset12_1819k_124", ku = "_smOrderFirst_1819k_125", vu = "_smOrderLast_1819k_126", wu = "_smOrder0_1819k_127", $u = "_smOrder1_1819k_128", Nu = "_smOrder2_1819k_129", Ou = "_smOrder3_1819k_130", Su = "_smOrder4_1819k_131", zu = "_smOrder5_1819k_132", Du = "_smOrder6_1819k_133", Mu = "_smOrder7_1819k_134", Cu = "_smOrder8_1819k_135", Eu = "_smOrder9_1819k_136", Iu = "_smOrder10_1819k_137", Au = "_smOrder11_1819k_138", Tu = "_smOrder12_1819k_139", ju = "_mdSize1_1819k_143", Lu = "_mdSize2_1819k_144", Ru = "_mdSize3_1819k_145", Pu = "_mdSize4_1819k_146", Bu = "_mdSize5_1819k_147", Fu = "_mdSize6_1819k_148", Hu = "_mdSize7_1819k_149", Ku = "_mdSize8_1819k_150", qu = "_mdSize9_1819k_151", Uu = "_mdSize10_1819k_152", Wu = "_mdSize11_1819k_153", Vu = "_mdSize12_1819k_154", Xu = "_mdOffset0_1819k_155", Gu = "_mdOffset1_1819k_156", Yu = "_mdOffset2_1819k_157", Zu = "_mdOffset3_1819k_158", Ju = "_mdOffset4_1819k_159", Qu = "_mdOffset5_1819k_160", e1 = "_mdOffset6_1819k_161", t1 = "_mdOffset7_1819k_162", n1 = "_mdOffset8_1819k_163", r1 = "_mdOffset9_1819k_164", s1 = "_mdOffset10_1819k_165", o1 = "_mdOffset11_1819k_166", a1 = "_mdOffset12_1819k_167", l1 = "_mdOrderFirst_1819k_168", i1 = "_mdOrderLast_1819k_169", c1 = "_mdOrder0_1819k_170", d1 = "_mdOrder1_1819k_171", u1 = "_mdOrder2_1819k_172", _1 = "_mdOrder3_1819k_173", f1 = "_mdOrder4_1819k_174", p1 = "_mdOrder5_1819k_175", m1 = "_mdOrder6_1819k_176", h1 = "_mdOrder7_1819k_177", g1 = "_mdOrder8_1819k_178", b1 = "_mdOrder9_1819k_179", y1 = "_mdOrder10_1819k_180", x1 = "_mdOrder11_1819k_181", k1 = "_mdOrder12_1819k_182", v1 = "_lgSize1_1819k_186", w1 = "_lgSize2_1819k_187", $1 = "_lgSize3_1819k_188", N1 = "_lgSize4_1819k_189", O1 = "_lgSize5_1819k_190", S1 = "_lgSize6_1819k_191", z1 = "_lgSize7_1819k_192", D1 = "_lgSize8_1819k_193", M1 = "_lgSize9_1819k_194", C1 = "_lgSize10_1819k_195", E1 = "_lgSize11_1819k_196", I1 = "_lgSize12_1819k_197", A1 = "_lgOffset0_1819k_198", T1 = "_lgOffset1_1819k_199", j1 = "_lgOffset2_1819k_200", L1 = "_lgOffset3_1819k_201", R1 = "_lgOffset4_1819k_202", P1 = "_lgOffset5_1819k_203", B1 = "_lgOffset6_1819k_204", F1 = "_lgOffset7_1819k_205", H1 = "_lgOffset8_1819k_206", K1 = "_lgOffset9_1819k_207", q1 = "_lgOffset10_1819k_208", U1 = "_lgOffset11_1819k_209", W1 = "_lgOffset12_1819k_210", V1 = "_lgOrderFirst_1819k_211", X1 = "_lgOrderLast_1819k_212", G1 = "_lgOrder0_1819k_213", Y1 = "_lgOrder1_1819k_214", Z1 = "_lgOrder2_1819k_215", J1 = "_lgOrder3_1819k_216", Q1 = "_lgOrder4_1819k_217", e_ = "_lgOrder5_1819k_218", t_ = "_lgOrder6_1819k_219", n_ = "_lgOrder7_1819k_220", r_ = "_lgOrder8_1819k_221", s_ = "_lgOrder9_1819k_222", o_ = "_lgOrder10_1819k_223", a_ = "_lgOrder11_1819k_224", l_ = "_lgOrder12_1819k_225", i_ = "_xlSize1_1819k_229", c_ = "_xlSize2_1819k_230", d_ = "_xlSize3_1819k_231", u_ = "_xlSize4_1819k_232", __ = "_xlSize5_1819k_233", f_ = "_xlSize6_1819k_234", p_ = "_xlSize7_1819k_235", m_ = "_xlSize8_1819k_236", h_ = "_xlSize9_1819k_237", g_ = "_xlSize10_1819k_238", b_ = "_xlSize11_1819k_239", y_ = "_xlSize12_1819k_240", x_ = "_xlOffset0_1819k_241", k_ = "_xlOffset1_1819k_242", v_ = "_xlOffset2_1819k_243", w_ = "_xlOffset3_1819k_244", $_ = "_xlOffset4_1819k_245", N_ = "_xlOffset5_1819k_246", O_ = "_xlOffset6_1819k_247", S_ = "_xlOffset7_1819k_248", z_ = "_xlOffset8_1819k_249", D_ = "_xlOffset9_1819k_250", M_ = "_xlOffset10_1819k_251", C_ = "_xlOffset11_1819k_252", E_ = "_xlOffset12_1819k_253", I_ = "_xlOrderFirst_1819k_254", A_ = "_xlOrderLast_1819k_255", T_ = "_xlOrder0_1819k_256", j_ = "_xlOrder1_1819k_257", L_ = "_xlOrder2_1819k_258", R_ = "_xlOrder3_1819k_259", P_ = "_xlOrder4_1819k_260", B_ = "_xlOrder5_1819k_261", F_ = "_xlOrder6_1819k_262", H_ = "_xlOrder7_1819k_263", K_ = "_xlOrder8_1819k_264", q_ = "_xlOrder9_1819k_265", U_ = "_xlOrder10_1819k_266", W_ = "_xlOrder11_1819k_267", V_ = "_xlOrder12_1819k_268", X_ = "_xxSize1_1819k_272", G_ = "_xxSize2_1819k_273", Y_ = "_xxSize3_1819k_274", Z_ = "_xxSize4_1819k_275", J_ = "_xxSize5_1819k_276", Q_ = "_xxSize6_1819k_277", ef = "_xxSize7_1819k_278", tf = "_xxSize8_1819k_279", nf = "_xxSize9_1819k_280", rf = "_xxSize10_1819k_281", sf = "_xxSize11_1819k_282", of = "_xxSize12_1819k_283", af = "_xxOffset0_1819k_284", lf = "_xxOffset1_1819k_285", cf = "_xxOffset2_1819k_286", df = "_xxOffset3_1819k_287", uf = "_xxOffset4_1819k_288", _f = "_xxOffset5_1819k_289", ff = "_xxOffset6_1819k_290", pf = "_xxOffset7_1819k_291", mf = "_xxOffset8_1819k_292", hf = "_xxOffset9_1819k_293", gf = "_xxOffset10_1819k_294", bf = "_xxOffset11_1819k_295", yf = "_xxOffset12_1819k_296", xf = "_xxOrderFirst_1819k_297", kf = "_xxOrderLast_1819k_298", vf = "_xxOrder0_1819k_299", wf = "_xxOrder1_1819k_300", $f = "_xxOrder2_1819k_301", Nf = "_xxOrder3_1819k_302", Of = "_xxOrder4_1819k_303", Sf = "_xxOrder5_1819k_304", zf = "_xxOrder6_1819k_305", Df = "_xxOrder7_1819k_306", Mf = "_xxOrder8_1819k_307", Cf = "_xxOrder9_1819k_308", Ef = "_xxOrder10_1819k_309", If = "_xxOrder11_1819k_310", Af = "_xxOrder12_1819k_311", Pn = {
  column: wc,
  Size1: $c,
  Size2: Nc,
  Size3: Oc,
  Size4: Sc,
  Size5: zc,
  Size6: Dc,
  Size7: Mc,
  Size8: Cc,
  Size9: Ec,
  Size10: Ic,
  Size11: Ac,
  Size12: Tc,
  Offset0: jc,
  Offset1: Lc,
  Offset2: Rc,
  Offset3: Pc,
  Offset4: Bc,
  Offset5: Fc,
  Offset6: Hc,
  Offset7: Kc,
  Offset8: qc,
  Offset9: Uc,
  Offset10: Wc,
  Offset11: Vc,
  Offset12: Xc,
  OrderFirst: Gc,
  OrderLast: Yc,
  Order0: Zc,
  Order1: Jc,
  Order2: Qc,
  Order3: ed,
  Order4: td,
  Order5: nd,
  Order6: rd,
  Order7: sd,
  Order8: od,
  Order9: ad,
  Order10: ld,
  Order11: id,
  Order12: cd,
  xsSize1: dd,
  xsSize2: ud,
  xsSize3: _d,
  xsSize4: fd,
  xsSize5: pd,
  xsSize6: md,
  xsSize7: hd,
  xsSize8: gd,
  xsSize9: bd,
  xsSize10: yd,
  xsSize11: xd,
  xsSize12: kd,
  xsOffset0: vd,
  xsOffset1: wd,
  xsOffset2: $d,
  xsOffset3: Nd,
  xsOffset4: Od,
  xsOffset5: Sd,
  xsOffset6: zd,
  xsOffset7: Dd,
  xsOffset8: Md,
  xsOffset9: Cd,
  xsOffset10: Ed,
  xsOffset11: Id,
  xsOffset12: Ad,
  xsOrderFirst: Td,
  xsOrderLast: jd,
  xsOrder0: Ld,
  xsOrder1: Rd,
  xsOrder2: Pd,
  xsOrder3: Bd,
  xsOrder4: Fd,
  xsOrder5: Hd,
  xsOrder6: Kd,
  xsOrder7: qd,
  xsOrder8: Ud,
  xsOrder9: Wd,
  xsOrder10: Vd,
  xsOrder11: Xd,
  xsOrder12: Gd,
  smSize1: Yd,
  smSize2: Zd,
  smSize3: Jd,
  smSize4: Qd,
  smSize5: eu,
  smSize6: tu,
  smSize7: nu,
  smSize8: ru,
  smSize9: su,
  smSize10: ou,
  smSize11: au,
  smSize12: lu,
  smOffset0: iu,
  smOffset1: cu,
  smOffset2: du,
  smOffset3: uu,
  smOffset4: _u,
  smOffset5: fu,
  smOffset6: pu,
  smOffset7: mu,
  smOffset8: hu,
  smOffset9: gu,
  smOffset10: bu,
  smOffset11: yu,
  smOffset12: xu,
  smOrderFirst: ku,
  smOrderLast: vu,
  smOrder0: wu,
  smOrder1: $u,
  smOrder2: Nu,
  smOrder3: Ou,
  smOrder4: Su,
  smOrder5: zu,
  smOrder6: Du,
  smOrder7: Mu,
  smOrder8: Cu,
  smOrder9: Eu,
  smOrder10: Iu,
  smOrder11: Au,
  smOrder12: Tu,
  mdSize1: ju,
  mdSize2: Lu,
  mdSize3: Ru,
  mdSize4: Pu,
  mdSize5: Bu,
  mdSize6: Fu,
  mdSize7: Hu,
  mdSize8: Ku,
  mdSize9: qu,
  mdSize10: Uu,
  mdSize11: Wu,
  mdSize12: Vu,
  mdOffset0: Xu,
  mdOffset1: Gu,
  mdOffset2: Yu,
  mdOffset3: Zu,
  mdOffset4: Ju,
  mdOffset5: Qu,
  mdOffset6: e1,
  mdOffset7: t1,
  mdOffset8: n1,
  mdOffset9: r1,
  mdOffset10: s1,
  mdOffset11: o1,
  mdOffset12: a1,
  mdOrderFirst: l1,
  mdOrderLast: i1,
  mdOrder0: c1,
  mdOrder1: d1,
  mdOrder2: u1,
  mdOrder3: _1,
  mdOrder4: f1,
  mdOrder5: p1,
  mdOrder6: m1,
  mdOrder7: h1,
  mdOrder8: g1,
  mdOrder9: b1,
  mdOrder10: y1,
  mdOrder11: x1,
  mdOrder12: k1,
  lgSize1: v1,
  lgSize2: w1,
  lgSize3: $1,
  lgSize4: N1,
  lgSize5: O1,
  lgSize6: S1,
  lgSize7: z1,
  lgSize8: D1,
  lgSize9: M1,
  lgSize10: C1,
  lgSize11: E1,
  lgSize12: I1,
  lgOffset0: A1,
  lgOffset1: T1,
  lgOffset2: j1,
  lgOffset3: L1,
  lgOffset4: R1,
  lgOffset5: P1,
  lgOffset6: B1,
  lgOffset7: F1,
  lgOffset8: H1,
  lgOffset9: K1,
  lgOffset10: q1,
  lgOffset11: U1,
  lgOffset12: W1,
  lgOrderFirst: V1,
  lgOrderLast: X1,
  lgOrder0: G1,
  lgOrder1: Y1,
  lgOrder2: Z1,
  lgOrder3: J1,
  lgOrder4: Q1,
  lgOrder5: e_,
  lgOrder6: t_,
  lgOrder7: n_,
  lgOrder8: r_,
  lgOrder9: s_,
  lgOrder10: o_,
  lgOrder11: a_,
  lgOrder12: l_,
  xlSize1: i_,
  xlSize2: c_,
  xlSize3: d_,
  xlSize4: u_,
  xlSize5: __,
  xlSize6: f_,
  xlSize7: p_,
  xlSize8: m_,
  xlSize9: h_,
  xlSize10: g_,
  xlSize11: b_,
  xlSize12: y_,
  xlOffset0: x_,
  xlOffset1: k_,
  xlOffset2: v_,
  xlOffset3: w_,
  xlOffset4: $_,
  xlOffset5: N_,
  xlOffset6: O_,
  xlOffset7: S_,
  xlOffset8: z_,
  xlOffset9: D_,
  xlOffset10: M_,
  xlOffset11: C_,
  xlOffset12: E_,
  xlOrderFirst: I_,
  xlOrderLast: A_,
  xlOrder0: T_,
  xlOrder1: j_,
  xlOrder2: L_,
  xlOrder3: R_,
  xlOrder4: P_,
  xlOrder5: B_,
  xlOrder6: F_,
  xlOrder7: H_,
  xlOrder8: K_,
  xlOrder9: q_,
  xlOrder10: U_,
  xlOrder11: W_,
  xlOrder12: V_,
  xxSize1: X_,
  xxSize2: G_,
  xxSize3: Y_,
  xxSize4: Z_,
  xxSize5: J_,
  xxSize6: Q_,
  xxSize7: ef,
  xxSize8: tf,
  xxSize9: nf,
  xxSize10: rf,
  xxSize11: sf,
  xxSize12: of,
  xxOffset0: af,
  xxOffset1: lf,
  xxOffset2: cf,
  xxOffset3: df,
  xxOffset4: uf,
  xxOffset5: _f,
  xxOffset6: ff,
  xxOffset7: pf,
  xxOffset8: mf,
  xxOffset9: hf,
  xxOffset10: gf,
  xxOffset11: bf,
  xxOffset12: yf,
  xxOrderFirst: xf,
  xxOrderLast: kf,
  xxOrder0: vf,
  xxOrder1: wf,
  xxOrder2: $f,
  xxOrder3: Nf,
  xxOrder4: Of,
  xxOrder5: Sf,
  xxOrder6: zf,
  xxOrder7: Df,
  xxOrder8: Mf,
  xxOrder9: Cf,
  xxOrder10: Ef,
  xxOrder11: If,
  xxOrder12: Af
}, Tf = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function jf(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(`Column property ${e} value should be between 1 and 12.`);
}
function Lf(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(`Column property ${e} value should be between 0 and 12.`);
}
function Rf(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(`Column property ${e} value should be between 0 and 12 or first/last.`);
}
function Pf(e, t, r) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Rf(r, t), `${e}Order${t}`);
}
function B2({ className: e, style: t, ...r }) {
  const o = [Pn.column], l = { ...t };
  for (const [D, S, g, C] of Tf) {
    const P = r[S], A = r[g], T = r[C];
    if (P != null) {
      jf(S, P);
      const K = Pn[`${D}Size${P}`];
      K && o.push(K);
    }
    if (A != null) {
      Lf(g, A);
      const K = Pn[`${D}Offset${A}`];
      K && o.push(K);
    }
    if (T != null) {
      const K = Pn[Pf(D, T, C)];
      K && o.push(K);
    }
  }
  const {
    size: c,
    offset: m,
    sizeXs: s,
    offsetXs: a,
    sizeSm: i,
    offsetSm: p,
    sizeMd: d,
    offsetMd: $,
    sizeLg: y,
    offsetLg: N,
    sizeXl: v,
    offsetXl: b,
    sizeXx: u,
    offsetXx: _,
    order: h,
    orderXs: w,
    orderSm: x,
    orderMd: E,
    orderLg: f,
    orderXl: k,
    orderXx: M,
    ...I
  } = r;
  return /* @__PURE__ */ n("div", { className: [...o, e].filter(Boolean).join(" "), style: l, ...I });
}
const Bf = "_stack_1yc1g_1", Ff = "_gapXs_1yc1g_29", Hf = "_gapSm_1yc1g_33", Kf = "_gapMd_1yc1g_37", qf = "_gapLg_1yc1g_41", Uf = "_gapXl_1yc1g_45", ln = {
  stack: Bf,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: Ff,
  gapSm: Hf,
  gapMd: Kf,
  gapLg: qf,
  gapXl: Uf,
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
}, Wf = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Vf(e) {
  return typeof e != "string" ? null : Wf[e] ?? null;
}
function wr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function F2({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: l,
  justify: c,
  className: m,
  style: s,
  ...a
}) {
  const i = Vf(o), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !i ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...s
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
        m
      ].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const Xf = "_layout_1pcye_1", Gf = "_row_1pcye_7", $r = {
  layout: Xf,
  row: Gf
}, Yf = "_footer_1divs_1", Zf = {
  footer: Yf
};
function Jf({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("footer", { className: [Zf.footer, e].filter(Boolean).join(" "), ...r, children: t });
}
const Qf = "_header_14i3s_1", ep = {
  header: Qf
};
function tp({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("header", { className: [ep.header, e].filter(Boolean).join(" "), ...r, children: t });
}
const np = "_sidebar_1w0bm_1", rp = "_left_1w0bm_9", sp = "_right_1w0bm_13", op = "_collapsed_1w0bm_17", ap = "_responsive_1w0bm_25", lp = "_overlay_1w0bm_33", ip = "_mask_1w0bm_53", Qt = {
  sidebar: np,
  left: rp,
  right: sp,
  collapsed: op,
  responsive: ap,
  overlay: lp,
  mask: ip
};
function cp({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
  overlay: o = !1,
  onClose: l,
  className: c,
  children: m,
  ...s
}) {
  return we(() => {
    if (!o || !t || l == null) return;
    const a = (i) => {
      i.key === "Escape" && l();
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [o, t, l]), /* @__PURE__ */ O(Ee, { children: [
    o && t ? /* @__PURE__ */ n("div", { className: `${Qt.mask} se-layout-mask`, "aria-hidden": "true", onClick: l }) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          Qt.sidebar,
          e === "right" ? Qt.right : Qt.left,
          t ? null : Qt.collapsed,
          r ? Qt.responsive : null,
          o ? [Qt.overlay, "se-sidebar--overlay"] : null,
          c
        ].flat().filter(Boolean).join(" "),
        ...s,
        children: m
      }
    )
  ] });
}
function H2({ className: e, children: t, ...r }) {
  const o = [], l = [], c = [], m = [], s = [];
  return Qr.forEach(t, (a) => {
    if (!Tn(a)) {
      c.push(a);
      return;
    }
    a.type === tp ? o.push(a) : a.type === Jf ? l.push(a) : a.type === cp ? (a.props.position === "right" ? s : m).push(a) : c.push(a);
  }), /* @__PURE__ */ O("div", { className: [$r.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ O("div", { className: $r.row, children: [
      m,
      c,
      s
    ] }),
    l
  ] });
}
const dp = "_body_10zdy_1", up = {
  body: dp
};
function K2({ as: e = "main", className: t, children: r, ...o }) {
  return /* @__PURE__ */ n(e, { className: [up.body, t].filter(Boolean).join(" "), ...o, children: r });
}
const _p = "_track_zebo1_1", fp = "_bar_zebo1_31", pp = "_primary_zebo1_39", mp = "_success_zebo1_43", hp = "_warning_zebo1_47", gp = "_danger_zebo1_51", bp = "_indeterminate_zebo1_101", yp = "_circular_zebo1_115", xp = "_fill_zebo1_155", ht = {
  track: _p,
  "linear-xs": "_linear-xs_zebo1_11",
  "linear-sm": "_linear-sm_zebo1_15",
  "linear-md": "_linear-md_zebo1_19",
  "linear-lg": "_linear-lg_zebo1_23",
  "linear-xl": "_linear-xl_zebo1_27",
  bar: fp,
  primary: pp,
  success: mp,
  warning: hp,
  danger: gp,
  "shade-lighter": "_shade-lighter_zebo1_85",
  "shade-light": "_shade-light_zebo1_85",
  "shade-dark": "_shade-dark_zebo1_93",
  "shade-darker": "_shade-darker_zebo1_97",
  indeterminate: bp,
  "se-progress-slide": "_se-progress-slide_zebo1_1",
  circular: yp,
  "circular-xs": "_circular-xs_zebo1_121",
  "circular-sm": "_circular-sm_zebo1_126",
  "circular-md": "_circular-md_zebo1_131",
  "circular-lg": "_circular-lg_zebo1_136",
  "circular-xl": "_circular-xl_zebo1_141",
  fill: xp,
  "se-progress-spin": "_se-progress-spin_zebo1_1"
};
function q2({
  value: e = 0,
  max: t = 100,
  severity: r = "primary",
  shade: o,
  indeterminate: l = !1,
  variant: c = "linear",
  size: m = "md",
  className: s,
  visible: a = !0,
  ...i
}) {
  if (a === !1) return null;
  const p = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? p / t * 100 : 0;
  if (c === "circular") {
    const y = typeof m == "string", N = 2, v = 10.5, b = 2 * Math.PI * v, u = b * (l ? 0.75 : 1), _ = l ? 0 : b * (1 - d / 100);
    return /* @__PURE__ */ O(
      "svg",
      {
        width: y ? void 0 : m,
        height: y ? void 0 : m,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(p),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...i,
        className: [
          ht.circular,
          ht[r],
          o && o !== "default" ? ht[`shade-${o}`] : null,
          y ? ht[`circular-${m}`] : null,
          l ? ht.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n("circle", { className: ht.track, cx: 12, cy: 12, r: v, strokeWidth: N }),
          /* @__PURE__ */ n(
            "circle",
            {
              className: ht.fill,
              cx: 12,
              cy: 12,
              r: v,
              strokeWidth: N,
              strokeDasharray: `${u} ${b}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const $ = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(p),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        ht.track,
        ht[r],
        $ ? ht[$] : null,
        typeof m == "string" ? ht[`linear-${m}`] : null,
        l ? ht.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: ht.bar,
          style: l ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
function U2(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function kp(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Xr(e) {
  const [t, r] = X(() => kp(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    r(o.matches);
    const l = (c) => r(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", l), () => o.removeEventListener("change", l)) : (o.addListener(l), () => o.removeListener(l));
  }, [e]), t;
}
const vp = "_wrapper_1x82r_1", wp = {
  wrapper: vp
}, Gr = "dx-theme";
function $p(e) {
  const t = e === void 0 ? Gr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(t);
      return r === "light" || r === "dark" || r === "system" ? r : void 0;
    } catch {
      return;
    }
}
function Np(e, t) {
  const r = e === void 0 ? Gr : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, t);
    } catch {
    }
}
function W2({
  value: e,
  defaultValue: t,
  defaultTheme: r,
  storageKey: o,
  onChange: l,
  label: c = "Dark mode",
  className: m
}) {
  const s = Xr("(prefers-color-scheme: dark)"), [a, i] = X(void 0), p = e ?? a ?? $p(o) ?? t ?? r ?? "system", d = p === "system" ? s ? "dark" : "light" : p;
  we(() => {
    if (p === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = p;
  }, [p]);
  const $ = (y) => {
    const N = y.target.checked ? "dark" : "light";
    e === void 0 && i(N), Np(o, N), l?.(N);
  };
  return /* @__PURE__ */ O("label", { className: [wp.wrapper, m].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ n(Kl, { checked: d === "dark", onChange: $ })
  ] });
}
const Op = "_avatar_14xlu_1", Sp = "_xs_14xlu_12", zp = "_sm_14xlu_18", Dp = "_md_14xlu_24", Mp = "_lg_14xlu_30", Cp = "_xl_14xlu_36", Ep = "_initials_14xlu_42", Ip = "_image_14xlu_57", Ap = "_status_14xlu_64", Tp = "_online_14xlu_84", jp = "_offline_14xlu_88", Lp = "_away_14xlu_92", cn = {
  avatar: Op,
  xs: Sp,
  sm: zp,
  md: Dp,
  lg: Mp,
  xl: Cp,
  initials: Ep,
  image: Ip,
  status: Ap,
  online: Tp,
  offline: jp,
  away: Lp
}, Vn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Rp(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Pp(e) {
  let t = 0;
  for (let r = 0; r < e.length; r += 1)
    t = t * 31 + e.charCodeAt(r) >>> 0;
  return Vn[t % Vn.length] ?? Vn[0];
}
function V2({
  name: e,
  src: t,
  alt: r,
  size: o = "md",
  status: l,
  className: c
}) {
  const m = $e(() => e ? Rp(e) : "?", [e]), s = $e(() => e ? Pp(e) : Vn[0], [e]), a = t != null && r === "", i = r ?? e ?? "avatar", p = l ? `${i}, ${l}` : i, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: cn.image,
      src: t,
      alt: a ? "" : l ? p : i
    }
  ) : /* @__PURE__ */ n("span", { "aria-hidden": "true", className: cn.initials, style: { background: s }, children: m });
  return /* @__PURE__ */ O(
    "span",
    {
      className: [
        cn.avatar,
        cn[o],
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
const Bp = "_root_1nhdv_1", Fp = "_left_1nhdv_6", Hp = "_right_1nhdv_7", Kp = "_panel_1nhdv_12", qp = "_bottom_1nhdv_20", Up = "_tabList_1nhdv_24", Wp = "_underline_1nhdv_53", Vp = "_pills_1nhdv_72", Xp = "_tab_1nhdv_24", Gp = "_active_1nhdv_113", Yp = "_disabled_1nhdv_139", Pt = {
  root: Bp,
  left: Fp,
  right: Hp,
  panel: Kp,
  bottom: qp,
  tabList: Up,
  underline: Wp,
  pills: Vp,
  tab: Xp,
  active: Gp,
  disabled: Yp
};
function X2({
  items: e,
  value: t,
  defaultValue: r,
  onChange: o,
  variant: l = "underline",
  position: c = "top",
  className: m
}) {
  const s = Ye(), a = ae(null), [i, p] = X(r ?? e[0]?.key ?? ""), d = t ?? i, $ = c === "left" || c === "right", y = (b) => {
    p(b), o?.(b);
  }, N = (b) => {
    const u = e.filter((w) => !w.disabled), _ = u.findIndex((w) => w.key === d);
    let h = -1;
    b.key === "ArrowRight" || $ && b.key === "ArrowDown" ? h = (_ + 1) % u.length : b.key === "ArrowLeft" || $ && b.key === "ArrowUp" ? h = (_ - 1 + u.length) % u.length : b.key === "Home" ? h = 0 : b.key === "End" && (h = u.length - 1), h >= 0 && (b.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(u[h]?.key ?? "")}"]`
    )?.focus(), y(u[h]?.key ?? ""));
  }, v = e.find((b) => b.key === d);
  return /* @__PURE__ */ O("div", { className: [Pt.root, Pt[c], m].filter(Boolean).join(" "), children: [
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
              id: `${s}-tab-${b.key}`,
              "data-tab-key": b.key,
              "aria-selected": u,
              "aria-controls": `${s}-panel-${b.key}`,
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
    v && /* @__PURE__ */ n(
      "div",
      {
        role: "tabpanel",
        id: `${s}-panel-${v.key}`,
        "aria-labelledby": `${s}-tab-${v.key}`,
        className: Pt.panel,
        children: v.content
      }
    )
  ] });
}
const Zp = "_root_ph7ff_1", Jp = "_item_ph7ff_9", Qp = "_heading_ph7ff_13", em = "_trigger_ph7ff_17", tm = "_disabled_ph7ff_34", nm = "_title_ph7ff_48", rm = "_chevron_ph7ff_52", sm = "_open_ph7ff_59", om = "_content_ph7ff_63", Bt = {
  root: Zp,
  item: Jp,
  heading: Qp,
  trigger: em,
  disabled: tm,
  title: nm,
  chevron: rm,
  open: sm,
  content: om
};
function G2({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: o,
  onChange: l,
  className: c
}) {
  const m = Ye(), [s, a] = X(o ?? []), i = r ?? s, p = (d) => {
    const $ = i.includes(d) ? i.filter((y) => y !== d) : t ? [...i, d] : [d];
    a($), l?.($);
  };
  return /* @__PURE__ */ n("div", { className: [Bt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const $ = i.includes(d.key), y = `${m}-panel-${d.key}`, N = `${m}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: Bt.item, children: [
      /* @__PURE__ */ n("h3", { className: Bt.heading, children: /* @__PURE__ */ O(
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
            /* @__PURE__ */ n("span", { className: [Bt.chevron, $ ? Bt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 12 }) })
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
const am = "_textarea_we46m_1", lm = "_invalid_we46m_25", im = "_xs_we46m_31", cm = "_sm_we46m_36", dm = "_md_we46m_41", um = "_lg_we46m_46", _m = "_xl_we46m_51", Bn = {
  textarea: am,
  invalid: lm,
  xs: im,
  sm: cm,
  md: dm,
  lg: um,
  xl: _m,
  "resize-none": "_resize-none_we46m_56",
  "resize-vertical": "_resize-vertical_we46m_60",
  "resize-horizontal": "_resize-horizontal_we46m_64",
  "resize-both": "_resize-both_we46m_68"
}, Y2 = He(function({ size: t = "md", resize: r = "none", invalid: o = !1, className: l, ...c }, m) {
  return /* @__PURE__ */ n(
    "textarea",
    {
      ref: m,
      className: [
        Bn.textarea,
        Bn[t],
        Bn[`resize-${r}`],
        o ? Bn.invalid : null,
        l
      ].filter(Boolean).join(" "),
      "aria-invalid": o || void 0,
      ...c
    }
  );
}), fm = "_typography_1oak1_1", pm = "_h1_1oak1_36", mm = "_h2_1oak1_42", hm = "_h3_1oak1_48", gm = "_h4_1oak1_54", bm = "_h5_1oak1_60", ym = "_h6_1oak1_66", xm = "_button_1oak1_96", km = "_caption_1oak1_103", vm = "_overline_1oak1_109", Jn = {
  typography: fm,
  "display-1": "_display-1_1oak1_5",
  "display-2": "_display-2_1oak1_10",
  "display-3": "_display-3_1oak1_15",
  "display-4": "_display-4_1oak1_20",
  "display-5": "_display-5_1oak1_25",
  "display-6": "_display-6_1oak1_30",
  h1: pm,
  h2: mm,
  h3: hm,
  h4: gm,
  h5: bm,
  h6: ym,
  "subtitle-1": "_subtitle-1_1oak1_72",
  "subtitle-2": "_subtitle-2_1oak1_78",
  "body-1": "_body-1_1oak1_84",
  "body-2": "_body-2_1oak1_89",
  button: xm,
  caption: km,
  overline: vm,
  "align-left": "_align-left_1oak1_118",
  "align-center": "_align-center_1oak1_122",
  "align-right": "_align-right_1oak1_126",
  "align-justify": "_align-justify_1oak1_130"
}, wm = {
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
}, $m = {
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
}, Nm = {
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
}, Om = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Z2 = He(function({
  textStyle: t = "Body1",
  tagName: r = "Auto",
  textAlign: o,
  text: l,
  visible: c = !0,
  className: m,
  children: s,
  ...a
}, i) {
  if (c === !1) return null;
  const p = r === "Auto" ? wm[t] : Nm[r];
  return /* @__PURE__ */ n(
    p,
    {
      ref: i,
      className: [
        Jn.typography,
        Jn[$m[t]],
        o ? Jn[Om[o]] : null,
        m
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? s
    }
  );
}), Sm = "_root_1n255_1", zm = "_trigger_1n255_9", Dm = "_invalid_1n255_40", Mm = "_placeholder_1n255_46", Cm = "_label_1n255_53", Em = "_chevron_1n255_59", Im = "_chevronOpen_1n255_69", Am = "_menu_1n255_73", Tm = "_option_1n255_88", jm = "_disabled_1n255_99", Lm = "_active_1n255_103", Rm = "_selected_1n255_104", Pm = "_header_1n255_114", Bm = "_xs_1n255_121", Fm = "_sm_1n255_127", Hm = "_md_1n255_133", Km = "_lg_1n255_139", qm = "_xl_1n255_145", it = {
  root: Sm,
  trigger: zm,
  invalid: Dm,
  placeholder: Mm,
  label: Cm,
  chevron: Em,
  chevronOpen: Im,
  menu: Am,
  option: Tm,
  disabled: jm,
  active: Lm,
  selected: Rm,
  header: Pm,
  xs: Bm,
  sm: Fm,
  md: Hm,
  lg: Km,
  xl: qm
}, Um = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function J2({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  placeholder: l = "Select…",
  size: c = "md",
  invalid: m = !1,
  disabled: s = !1,
  className: a,
  ...i
}) {
  const p = Ye(), d = `${p}-listbox`, $ = ae(null), y = ae(null), [N, v] = X(r), [b, u] = X(!1), _ = t ?? N, h = e.map((g, C) => g.label === "" || g.disabled ? -1 : C).filter((g) => g >= 0), w = e.findIndex((g) => g.value === _), [x, E] = X(
    () => h.includes(0) ? 0 : h[0] ?? -1
  ), f = H(() => {
    if (s) return;
    const g = w >= 0 && h.includes(w) ? w : h[0];
    E(g ?? -1), u(!0);
  }, [s, w, h]), k = H(() => {
    u(!1), y.current?.focus();
  }, []);
  we(() => {
    if (!b) return;
    const g = (C) => {
      $.current && !$.current.contains(C.target) && u(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [b]);
  const M = (g) => {
    v(g), o?.(g), u(!1), y.current?.focus();
  }, I = (g) => {
    if (h.length === 0) return;
    const C = h.includes(x) ? h.indexOf(x) : 0, P = h[(C + g + h.length) % h.length];
    P != null && E(P);
  }, D = (g) => {
    if (!b) {
      g.key === "ArrowDown" && (g.preventDefault(), f());
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
        g.preventDefault(), x >= 0 && e[x] && h.includes(x) && M(e[x]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), k();
        break;
      case "Tab":
        u(!1);
        break;
    }
  }, S = e.find((g) => g.value === _);
  return /* @__PURE__ */ O("div", { ref: $, className: [it.root, a].filter(Boolean).join(" "), onKeyDown: D, children: [
    /* @__PURE__ */ O(
      "button",
      {
        ref: y,
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
        onClick: () => b ? u(!1) : f(),
        ...i,
        children: [
          /* @__PURE__ */ n("span", { className: S ? it.label : it.placeholder, children: S ? S.label : l }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [it.chevron, b ? it.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: Um },
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
              "aria-selected": g.value === _,
              "aria-disabled": g.disabled || void 0,
              className: [
                it.option,
                C === x ? it.active : null,
                g.value === _ ? it.selected : null,
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
const Wm = "_root_1n38r_1", Vm = "_wrap_1n38r_9", Xm = "_input_1n38r_26", Gm = "_invalid_1n38r_31", Ym = "_clear_1n38r_57", Zm = "_menu_1n38r_82", Jm = "_option_1n38r_97", Qm = "_disabled_1n38r_108", eh = "_active_1n38r_112", th = "_empty_1n38r_122", nh = "_xs_1n38r_128", rh = "_sm_1n38r_135", sh = "_md_1n38r_142", oh = "_lg_1n38r_149", ah = "_xl_1n38r_156", Dt = {
  root: Wm,
  wrap: Vm,
  input: Xm,
  invalid: Gm,
  clear: Ym,
  menu: Zm,
  option: Jm,
  disabled: Qm,
  active: eh,
  empty: th,
  xs: nh,
  sm: rh,
  md: sh,
  lg: oh,
  xl: ah
}, lh = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Q2({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: o,
  onSelect: l,
  placeholder: c = "",
  size: m = "md",
  invalid: s = !1,
  disabled: a = !1,
  filter: i = lh,
  className: p,
  ...d
}) {
  const $ = Ye(), y = `${$}-listbox`, N = ae(null), v = ae(null), [b, u] = X(r), [_, h] = X(!1), w = t ?? b, x = $e(
    () => w.trim() === "" ? [...e] : e.filter((T) => i(T, w)),
    [e, w, i]
  ), E = x.map((T, K) => T.disabled ? -1 : K).filter((T) => T >= 0), [f, k] = X(-1), M = (T) => {
    u(T), o?.(T);
  }, I = (T) => {
    M(T.label), l?.(T.value, T), h(!1);
  }, D = (T) => {
    if (E.length === 0) return;
    const K = E.includes(f) ? E.indexOf(f) : T === 1 ? -1 : 0, V = E[(K + T + E.length) % E.length];
    V != null && k(V);
  }, S = (T) => {
    a || (M(T.target.value), h(!0), k(-1));
  }, g = () => {
    a || w !== "" && h(!0);
  }, C = (T) => {
    N.current && !N.current.contains(T.relatedTarget) && h(!1);
  }, P = (T) => {
    if (!a)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), _ ? D(1) : (h(!0), k(E[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), _ && D(-1);
          break;
        case "Enter":
          T.preventDefault(), _ && f >= 0 && x[f] && I(x[f]);
          break;
        case "Escape":
          T.preventDefault(), h(!1);
          break;
        case "Tab":
          _ && f >= 0 && x[f] && I(x[f]), h(!1);
          break;
      }
  }, A = () => {
    M(""), k(-1), h(!0), v.current?.focus();
  };
  return /* @__PURE__ */ O("div", { ref: N, className: [Dt.root, p].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: [Dt.wrap, Dt[m], s ? Dt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: v,
          type: "text",
          role: "combobox",
          "aria-expanded": _,
          "aria-controls": y,
          "aria-autocomplete": "list",
          "aria-activedescendant": _ && f >= 0 ? `${$}-option-${f}` : void 0,
          "aria-invalid": s || void 0,
          disabled: a,
          value: w,
          placeholder: c,
          className: Dt.input,
          onChange: S,
          onFocus: g,
          onBlur: C,
          onKeyDown: P,
          ...d
        }
      ),
      w !== "" && !a && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Dt.clear,
          "aria-label": "Clear",
          onClick: A,
          children: /* @__PURE__ */ n(Me, { name: "close", size: "sm" })
        }
      )
    ] }),
    _ && /* @__PURE__ */ n("div", { id: y, role: "listbox", className: Dt.menu, children: x.length === 0 ? /* @__PURE__ */ n("div", { className: Dt.empty, children: "No matches" }) : x.map((T, K) => /* @__PURE__ */ n(
      "div",
      {
        id: `${$}-option-${K}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": T.disabled || void 0,
        className: [
          Dt.option,
          K === f ? Dt.active : null,
          T.disabled ? Dt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          T.disabled || I(T);
        },
        onMouseDown: (V) => {
          V.preventDefault(), T.disabled || I(T);
        },
        onMouseEnter: () => {
          T.disabled || k(K);
        },
        children: T.label
      },
      T.value
    )) })
  ] });
}
const ih = "_box_1r6oj_1", ch = "_option_1r6oj_12", dh = "_disabled_1r6oj_23", uh = "_selected_1r6oj_27", _h = "_active_1r6oj_33", Nn = {
  box: ih,
  option: ch,
  disabled: dh,
  selected: uh,
  active: _h
};
function ek({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: o = !1,
  onChange: l,
  className: c,
  style: m,
  ...s
}) {
  const a = Ye(), [i, p] = X(() => {
    const x = r;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), d = t == null ? i : Array.isArray(t) ? t : [t], $ = e.findIndex((x) => !x.disabled), [y, N] = X(() => $ >= 0 ? $ : 0), v = ae(""), b = ae(null), u = (x) => {
    p(x), l?.(o ? x : x[0] ?? "");
  }, _ = e.map((x, E) => x.disabled ? -1 : E).filter((x) => x >= 0), h = (x) => {
    const E = e[x];
    if (!(!E || E.disabled))
      if (N(x), o) {
        const f = d.includes(E.value) ? d.filter((k) => k !== E.value) : [...d, E.value];
        u(f);
      } else
        u([E.value]);
  }, w = (x) => {
    if (_.length === 0) return;
    const E = _.includes(y) ? y : _[0];
    let f = -1;
    if (x.key === "ArrowDown")
      f = _[(_.indexOf(E) + 1) % _.length];
    else if (x.key === "ArrowUp")
      f = _[(_.indexOf(E) - 1 + _.length) % _.length];
    else if (x.key === "Home")
      f = _[0];
    else if (x.key === "End")
      f = _[_.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), h(E);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const k = (v.current + x.key).toLowerCase();
      v.current = k, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        v.current = "";
      }, 500);
      const M = [..._, ..._], I = _.indexOf(E) + 1, D = M.slice(I).find(
        (S) => e[S]?.label.toLowerCase().startsWith(k)
      );
      D != null && N(D);
      return;
    }
    f >= 0 && (x.preventDefault(), N(f), o || u([e[f]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[y] ? `${a}-option-${y}` : void 0,
      style: m,
      className: [Nn.box, c].filter(Boolean).join(" "),
      onKeyDown: w,
      ...s,
      children: e.map((x, E) => {
        const f = d.includes(x.value), k = E === y;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${E}`,
            role: "option",
            "aria-selected": f,
            "aria-disabled": x.disabled || void 0,
            className: [
              Nn.option,
              f ? Nn.selected : null,
              k ? Nn.active : null,
              x.disabled ? Nn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => h(E),
            children: x.label
          },
          x.value
        );
      })
    }
  );
}
const fh = "_group_br8r4_1", ph = "_legend_br8r4_8", mh = "_list_br8r4_16", hh = "_item_br8r4_25", gh = "_disabled_br8r4_32", bh = "_label_br8r4_37", yh = "_checkbox_br8r4_48", en = {
  group: fh,
  legend: ph,
  list: mh,
  item: hh,
  disabled: gh,
  label: bh,
  checkbox: yh
};
function tk({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: o,
  legend: l,
  name: c,
  className: m
}) {
  const [s, a] = X(() => [...r]), i = t ?? s, p = (d, $) => {
    const y = $ ? [...i, d] : i.filter((N) => N !== d);
    a(y), o?.(y);
  };
  return /* @__PURE__ */ O("fieldset", { className: [en.group, m].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ n("legend", { className: en.legend, children: l }),
    /* @__PURE__ */ n("ul", { className: en.list, children: e.map((d) => {
      const $ = i.includes(d.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [en.item, d.disabled ? en.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: en.label, children: [
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
const xh = "_group_t2uos_1", kh = "_legend_t2uos_8", vh = "_list_t2uos_16", wh = "_item_t2uos_25", $h = "_disabled_t2uos_32", Nh = "_label_t2uos_37", Oh = "_radio_t2uos_48", tn = {
  group: xh,
  legend: kh,
  list: vh,
  item: wh,
  disabled: $h,
  label: Nh,
  radio: Oh
};
function nk({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  legend: l,
  name: c,
  className: m
}) {
  const [s, a] = X(r), i = t ?? s, p = (d) => {
    a(d), o?.(d);
  };
  return /* @__PURE__ */ O("fieldset", { className: [tn.group, m].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ n("legend", { className: tn.legend, children: l }),
    /* @__PURE__ */ n("ul", { className: tn.list, children: e.map((d) => {
      const $ = d.value === i;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [tn.item, d.disabled ? tn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: tn.label, children: [
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
const Sh = "_bar_9r6ow_1", zh = "_vertical_9r6ow_12", Dh = "_option_9r6ow_17", Mh = "_selected_9r6ow_38", Ch = "_sm_9r6ow_55", Eh = "_md_9r6ow_61", Ih = "_lg_9r6ow_67", dn = {
  bar: Sh,
  vertical: zh,
  option: Dh,
  selected: Mh,
  sm: Ch,
  md: Eh,
  lg: Ih
};
function Nr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function rk(e) {
  const {
    options: t = [],
    value: r,
    defaultValue: o,
    multiple: l,
    orientation: c = "horizontal",
    onChange: m,
    size: s = "md",
    className: a,
    ...i
  } = e, p = l ?? !1, [d, $] = X(
    o ?? (p ? [] : t[0]?.value)
  ), y = r ?? d, N = l === !0 || l === void 0 && Array.isArray(y), v = (u) => {
    if (!N) {
      $(u), m?.(u);
      return;
    }
    const _ = Nr(y), h = _.includes(u) ? _.filter((w) => w !== u) : [..._, u];
    $(h), m?.(h);
  }, b = (u) => N ? Nr(y).includes(u) : y === u;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        dn.bar,
        dn[s],
        c === "vertical" ? dn.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((u) => {
        const _ = b(u.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: u.disabled,
            className: [
              dn.option,
              _ ? dn.selected : null,
              u.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => v(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const Ah = "_toggle_19izf_1", Th = "_pressed_19izf_29", jh = "_sm_19izf_41", Lh = "_md_19izf_47", Rh = "_lg_19izf_53", Ph = "_fullWidth_19izf_59", Fn = {
  toggle: Ah,
  pressed: Th,
  sm: jh,
  md: Lh,
  lg: Rh,
  fullWidth: Ph
}, sk = He(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: o,
    size: l = "md",
    fullWidth: c = !1,
    className: m,
    type: s = "button",
    ...a
  }, i) {
    const [p, d] = X(r), $ = t ?? p, y = () => {
      const N = !$;
      d(N), o?.(N);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: i,
        type: s,
        "aria-pressed": $,
        className: [
          Fn.toggle,
          Fn[l],
          $ ? Fn.pressed : null,
          c ? Fn.fullWidth : null,
          m
        ].filter(Boolean).join(" "),
        onClick: y,
        ...a
      }
    );
  }
), Bh = "_root_1vkmu_1", Fh = "_action_1vkmu_196", Hh = "_filled_1vkmu_216", Kh = "_caret_1vkmu_220", qh = "_flat_1vkmu_241", Uh = "_outlined_1vkmu_249", Wh = "_text_1vkmu_257", Vh = "_sm_1vkmu_347", Xh = "_md_1vkmu_359", Gh = "_lg_1vkmu_371", Yh = "_menu_1vkmu_383", Zh = "_item_1vkmu_396", Jh = "_disabled_1vkmu_417", Qh = "_active_1vkmu_421", eg = "_danger_1vkmu_430", wt = {
  root: Bh,
  "style-primary": "_style-primary_1vkmu_11",
  "style-secondary": "_style-secondary_1vkmu_21",
  "style-base": "_style-base_1vkmu_31",
  "style-light": "_style-light_1vkmu_41",
  "style-dark": "_style-dark_1vkmu_51",
  "style-info": "_style-info_1vkmu_61",
  "style-success": "_style-success_1vkmu_71",
  "style-warning": "_style-warning_1vkmu_81",
  "style-danger": "_style-danger_1vkmu_91",
  action: Fh,
  filled: Hh,
  caret: Kh,
  flat: qh,
  outlined: Uh,
  text: Wh,
  "shade-lighter": "_shade-lighter_1vkmu_274",
  "shade-light": "_shade-light_1vkmu_274",
  "shade-dark": "_shade-dark_1vkmu_284",
  "shade-darker": "_shade-darker_1vkmu_288",
  sm: Vh,
  md: Xh,
  lg: Gh,
  menu: Yh,
  item: Zh,
  disabled: Jh,
  active: Qh,
  danger: eg
};
function ok({
  label: e,
  onClick: t,
  items: r = [],
  severity: o = "primary",
  variant: l = "filled",
  shade: c = "default",
  size: m = "md",
  disabled: s = !1,
  className: a,
  ...i
}) {
  const d = `${Ye()}-menu`, $ = ae(null), y = ae(null), N = ae([]), [v, b] = X(!1), [u, _] = X(-1), h = $e(
    () => r.map((D, S) => D.disabled ? -1 : S).filter((D) => D >= 0),
    [r]
  ), w = H(() => {
    s || (_(h[0] ?? -1), b(!0));
  }, [s, h]), x = H(() => {
    b(!1), y.current?.focus();
  }, []);
  we(() => {
    if (!v) return;
    const D = (S) => {
      $.current && !$.current.contains(S.target) && b(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [v]);
  const E = ae(v);
  we(() => {
    const D = E.current;
    if (E.current = v, !v || D) return;
    const S = h.includes(u) ? u : h[0] ?? -1;
    S >= 0 && N.current[S]?.focus();
  }, [v, u, h]);
  const f = (D) => {
    const S = r[D];
    !S || S.disabled || (S.onClick?.(), b(!1), y.current?.focus());
  }, k = (D) => {
    if (h.length === 0) return;
    const S = h.includes(u) ? h.indexOf(u) : D === 1 ? -1 : 0, g = h[(S + D + h.length) % h.length];
    g != null && (_(g), N.current[g]?.focus());
  }, M = (D) => {
    const S = D === "first" ? h[0] : h[h.length - 1];
    S != null && (_(S), N.current[S]?.focus());
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
        D.preventDefault(), x();
        break;
      case "Tab":
        b(!1);
        break;
    }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: $,
      className: [
        wt.root,
        wt[m],
        wt[`style-${o}`],
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
            disabled: s,
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
            "aria-expanded": v,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: s,
            onClick: () => v ? b(!1) : w(),
            onKeyDown: (D) => {
              !v && D.key === "ArrowDown" && (D.preventDefault(), w());
            },
            children: /* @__PURE__ */ n(Me, { name: "chevron-down" })
          }
        ),
        v && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: I,
            ...i,
            children: r.map((D, S) => /* @__PURE__ */ n(
              "button",
              {
                ref: (g) => {
                  N.current[S] = g;
                },
                type: "button",
                role: "menuitem",
                tabIndex: S === u ? 0 : -1,
                disabled: D.disabled,
                className: [
                  wt.item,
                  S === u ? wt.active : null,
                  D.danger ? wt.danger : null,
                  D.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => f(S),
                onMouseEnter: () => {
                  D.disabled || _(S);
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
const tg = "_textbox_yfceg_1", ng = "_invalid_yfceg_31", rg = "_xs_yfceg_37", sg = "_sm_yfceg_43", og = "_md_yfceg_49", ag = "_lg_yfceg_55", lg = "_xl_yfceg_61", Qn = {
  textbox: tg,
  invalid: ng,
  xs: rg,
  sm: sg,
  md: og,
  lg: ag,
  xl: lg
}, ak = He(function({ size: t = "md", invalid: r = !1, className: o, type: l = "text", ...c }, m) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: m,
      type: l,
      className: [Qn.textbox, Qn[t], r ? Qn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), ig = "_wrapper_1smbu_1", cg = "_input_1smbu_8", dg = "_invalid_1smbu_38", ug = "_toggle_1smbu_44", _g = "_xs_1smbu_79", fg = "_sm_1smbu_85", pg = "_md_1smbu_91", mg = "_lg_1smbu_97", hg = "_xl_1smbu_103", On = {
  wrapper: ig,
  input: cg,
  invalid: dg,
  toggle: ug,
  xs: _g,
  sm: fg,
  md: pg,
  lg: mg,
  xl: hg
}, lk = He(function({
  size: t = "md",
  invalid: r = !1,
  className: o,
  disabled: l,
  showLabel: c = "Show password",
  hideLabel: m = "Hide password",
  ...s
}, a) {
  const [i, p] = X(!1);
  return /* @__PURE__ */ O("div", { className: On.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: a,
        type: i ? "text" : "password",
        disabled: l,
        className: [On.input, On[t], r ? On.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...s
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: On.toggle,
        "aria-pressed": i,
        "aria-label": i ? m : c,
        disabled: l,
        onClick: () => p((d) => !d),
        children: /* @__PURE__ */ n(Me, { name: i ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), gg = "_mask_1acmv_1", bg = "_invalid_1acmv_31", yg = "_xs_1acmv_37", xg = "_sm_1acmv_43", kg = "_md_1acmv_49", vg = "_lg_1acmv_55", wg = "_xl_1acmv_61", er = {
  mask: gg,
  invalid: bg,
  xs: yg,
  sm: xg,
  md: kg,
  lg: vg,
  xl: wg
};
function Or(e, t) {
  let r = e.replace(/\D/g, ""), o = "";
  for (const l of t)
    if (l === "#") {
      if (r.length === 0) break;
      o += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      o += l;
    else
      break;
  return o;
}
const ik = He(function({
  size: t = "md",
  invalid: r = !1,
  mask: o,
  value: l,
  defaultValue: c = "",
  onChange: m,
  className: s,
  onKeyDown: a,
  ...i
}, p) {
  const [d, $] = X(c ?? ""), y = l !== void 0, N = y ? l ?? "" : d, v = (_) => {
    const h = Or(_, o);
    return y || $(h), m?.(h), h;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      value: N,
      onChange: (_) => {
        v(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const h = _.currentTarget.selectionStart ?? N.length, w = N[h - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            _.preventDefault();
            const x = N.replace(/\D/g, "");
            v(Or(x.slice(0, -1), o));
          }
        }
        a?.(_);
      },
      className: [er.mask, er[t], r ? er.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...i
    }
  );
}), $g = "_wrapper_pn38o_1", Ng = "_input_pn38o_8", Og = "_invalid_pn38o_38", Sg = "_button_pn38o_44", zg = "_up_pn38o_76", Dg = "_down_pn38o_81", Mg = "_xs_pn38o_86", Cg = "_sm_pn38o_92", Eg = "_md_pn38o_98", Ig = "_lg_pn38o_104", Ag = "_xl_pn38o_110", Xt = {
  wrapper: $g,
  input: Ng,
  invalid: Og,
  button: Sg,
  up: zg,
  down: Dg,
  xs: Mg,
  sm: Cg,
  md: Eg,
  lg: Ig,
  xl: Ag
};
function sr(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Tg(e) {
  let t = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !r ? (r = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function Yr(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function jg(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function Lg(e, t, r, o, l) {
  const m = sr(e) ?? r ?? 0;
  let s;
  return r === void 0 ? s = m + t * l : t > 0 ? s = r + Math.ceil((m - r + 1e-9) / l) * l : s = r + Math.floor((m - r - 1e-9) / l) * l, Yr(s, r, o);
}
const ck = He(function({
  size: t = "md",
  invalid: r = !1,
  className: o,
  disabled: l,
  value: c,
  defaultValue: m,
  onChange: s,
  min: a,
  max: i,
  step: p = 1,
  incrementLabel: d = "Increment",
  decrementLabel: $ = "Decrement",
  onBlur: y,
  onKeyDown: N,
  ...v
}, b) {
  const [u, _] = X(m != null ? String(m) : ""), h = c !== void 0, w = h ? c == null ? "" : String(c) : u, x = (D) => {
    h || _(D), s?.(sr(D));
  }, E = (D) => {
    h || _(String(D)), s?.(D);
  }, f = (D) => {
    l || E(Lg(w, D, a, i, p));
  }, k = (D) => {
    x(Tg(D.target.value));
  }, M = (D) => {
    D.key === "ArrowUp" ? (D.preventDefault(), f(1)) : D.key === "ArrowDown" && (D.preventDefault(), f(-1)), N?.(D);
  }, I = (D) => {
    const S = sr(w);
    S === null ? (h || _(""), s?.(null)) : E(Yr(jg(S, a, p), a, i)), y?.(D);
  };
  return /* @__PURE__ */ O("div", { className: Xt.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: b,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: w,
        disabled: l,
        onChange: k,
        onKeyDown: M,
        onBlur: I,
        className: [Xt.input, Xt[t], r ? Xt.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...v
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Xt.button, Xt.up].join(" "),
        "aria-label": d,
        disabled: l,
        onClick: () => f(1),
        children: /* @__PURE__ */ n(Me, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Xt.button, Xt.down].join(" "),
        "aria-label": $,
        disabled: l,
        onClick: () => f(-1),
        children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 14 })
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
}, Rg = [
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
function or(e) {
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
function Pg({ r: e, g: t, b: r }) {
  const o = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(r)}`;
}
function Bg({ r: e, g: t, b: r }) {
  const o = e / 255, l = t / 255, c = r / 255, m = Math.max(o, l, c), s = Math.min(o, l, c), a = m - s;
  let i = 0;
  return a !== 0 && (m === o ? i = (l - c) / a % 6 : m === l ? i = (c - o) / a + 2 : i = (o - l) / a + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: m === 0 ? 0 : a / m,
    v: m
  };
}
function un({ h: e, s: t, v: r }) {
  const o = r * t, l = e / 60, c = o * (1 - Math.abs(l % 2 - 1));
  let m = 0, s = 0, a = 0;
  l < 1 ? (m = o, s = c) : l < 2 ? (m = c, s = o) : l < 3 ? (s = o, a = c) : l < 4 ? (s = c, a = o) : l < 5 ? (m = c, a = o) : (m = o, a = c);
  const i = r - o;
  return {
    r: Math.round((m + i) * 255),
    g: Math.round((s + i) * 255),
    b: Math.round((a + i) * 255),
    a: 1
  };
}
function Fg(e) {
  const t = or(e);
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
function Sr({ r: e, g: t, b: r, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(o * 100) / 100})`;
}
const dk = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: l = Rg,
  showButton: c = !1,
  showArrow: m = !0,
  disabled: s = !1,
  invalid: a = !1,
  placeholder: i = "",
  size: p = "md",
  tabIndex: d = 0,
  className: $,
  onChange: y,
  onValueChange: N,
  onOpen: v,
  onClose: b
}) => {
  const u = ae(null), _ = ae(null), h = ae(null), w = ae(null), x = ae(null), E = Ye(), f = ae(null), k = $e(
    () => Fg(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, I] = X(!1), [D, S] = X(null), g = D ?? k, C = $e(() => Bg(g), [g]), P = H(
    (W) => {
      const z = Sr(W);
      y?.(z), N?.(z);
    },
    [y, N]
  ), A = H(
    (W, z) => {
      S(W), z && !c && P(W);
    },
    [c, P]
  ), T = H(() => {
    I(!1), S(null), b?.(), _.current?.focus();
  }, [b]), K = H(() => {
    s || (S(k), I(!0), v?.());
  }, [s, k, v]), V = H(() => {
    M ? T() : K();
  }, [M, T, K]), J = H(
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
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), f.current = "sat";
    const z = J(W.clientX, W.clientY);
    A({ ...un(z), a: g.a }, !0);
  }, ue = (W) => {
    if (f.current !== "sat") return;
    W.preventDefault();
    const z = J(W.clientX, W.clientY);
    A({ ...un(z), a: g.a }, !0);
  }, ie = (W) => {
    if (s) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), f.current = "hue";
    const z = Z(W.clientX, w.current);
    A({ ...un({ ...C, h: z * 360 }), a: g.a }, !0);
  }, U = (W) => {
    if (f.current !== "hue") return;
    W.preventDefault();
    const z = Z(W.clientX, w.current);
    A({ ...un({ ...C, h: z * 360 }), a: g.a }, !0);
  }, L = (W) => {
    if (s) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), f.current = "alpha";
    const z = Z(W.clientX, x.current);
    A({ ...g, a: z }, !0);
  }, te = (W) => {
    if (f.current !== "alpha") return;
    W.preventDefault();
    const z = Z(W.clientX, x.current);
    A({ ...g, a: z }, !0);
  }, G = () => {
    f.current = null;
  }, ce = H(
    (W, z) => {
      const F = { h: C.h, s: bt(C.s + W, 0, 1), v: bt(C.v + z, 0, 1) };
      A({ ...un(F), a: g.a }, !0);
    },
    [C, g.a, A]
  ), oe = H(
    (W) => {
      const z = (C.h + W + 360) % 360;
      A({ ...un({ ...C, h: z }), a: g.a }, !0);
    },
    [C, g.a, A]
  ), ye = H(
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
        W.preventDefault(), z === "hue" ? oe(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), z === "hue" ? oe(6) : ye(0.05);
        break;
      case "Escape":
        W.preventDefault(), T();
        break;
    }
  }, ke = (W, z) => {
    if (W === "hex") {
      const re = or(z);
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
    D && (P(D), S(null), I(!1), b?.(), _.current?.focus());
  };
  we(() => {
    if (!M) return;
    const W = (z) => {
      u.current && !u.current.contains(z.target) && T();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [M, T]), we(() => {
    if (!M) return;
    const W = (z) => {
      z.key === "Escape" && T();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [M, T]);
  const be = p === "xs" ? Oe["dx-colorpicker-trigger-xs"] : p === "sm" ? Oe["dx-colorpicker-trigger-sm"] : p === "lg" ? Oe["dx-colorpicker-trigger-lg"] : p === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], Ze = Sr(g), Ve = Pg(g), Re = { x: C.s * 100, y: (1 - C.v) * 100 }, tt = C.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-panel"], children: [
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
            style: { left: `${Re.x}%`, top: `${Re.y}%` },
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
        ref: x,
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
        onPointerDown: L,
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
    o && /* @__PURE__ */ n("div", { className: Oe["dx-colorpicker-palette"], children: l.map((W) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Oe["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const z = or(W);
          c ? A({ ...z, a: g.a }, !1) : (S(null), P({ ...z, a: g.a }), I(!1), b?.(), _.current?.focus());
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
      ref: u,
      className: [
        Oe["dx-colorpicker"],
        M ? Oe["dx-colorpicker-open"] : null,
        a ? Oe["dx-colorpicker-invalid"] : null,
        $
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: _,
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
              i && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-text"], children: i }),
              m && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 14 }) })
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
}, Ce = {
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
}, Hg = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function Kg(e, t) {
  const r = pt(e);
  return t ? `${r} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : r;
}
function ar(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), o = Number(t[2]), l = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, m = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || l < 1 || l > 31) return null;
  const a = new Date(r, o - 1, l, c, m, s);
  return a.getFullYear() !== r || a.getMonth() !== o - 1 || a.getDate() !== l ? null : { year: r, month: o, day: l, hour: c, minute: m, second: s };
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
  const r = new Date(e.year, e.month - 1 + t, 1), o = r.getFullYear(), l = r.getMonth() + 1, c = new Date(o, l, 0).getDate();
  return {
    year: o,
    month: l,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function zr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Dr = {
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
}, qg = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], Ug = ["y", "M", "d", "H", "m", "s"];
function Kn(e, t, r) {
  const o = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", c = 0;
  for (; c < t.length; ) {
    let m = !1;
    for (const a of qg)
      if (t.startsWith(a, c)) {
        l += Dr[a](e, o, r), c += a.length, m = !0;
        break;
      }
    if (m) continue;
    const s = t[c];
    if (Ug.includes(s)) {
      l += Dr[s](e, o, r), c += 1;
      continue;
    }
    l += s, c += 1;
  }
  return l;
}
const Wg = [
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
function Vg(e, t) {
  const r = {};
  let o = 0, l = 0;
  for (; l < t.length; ) {
    let s = null;
    for (const a of Wg)
      if (t.startsWith(a, l)) {
        s = a;
        break;
      }
    if (s) {
      const a = e.slice(o, o + s.length);
      if (!/^\d+$/.test(a)) return null;
      const i = Number(a);
      switch (s) {
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
      o += s.length, l += s.length;
      continue;
    }
    if (e[o] !== t[l]) return null;
    o += 1, l += 1;
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
function Sn(e, t) {
  const r = ar(e);
  return r || Vg(e, t);
}
function Xg(e, t, r) {
  return t && pt(e) < pt(t) ? t : r && pt(e) > pt(r) ? r : e;
}
const Gg = ["hour", "minute", "second"];
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
const uk = He(function({
  size: t = "md",
  invalid: r = !1,
  value: o,
  defaultValue: l,
  format: c = "yyyy-MM-dd",
  min: m,
  max: s,
  showTime: a = !1,
  showButton: i = !0,
  allowClear: p = !1,
  inline: d = !1,
  disabledDates: $,
  locale: y = "en-US",
  onChange: N,
  onValueChange: v,
  onOpen: b,
  onClose: u,
  disabled: _,
  readOnly: h,
  placeholder: w,
  ariaLabel: x,
  triggerLabel: E,
  clearLabel: f,
  tabIndex: k,
  className: M,
  onBlur: I,
  onKeyDown: D,
  ...S
}, g) {
  const C = ae(null), P = ae(null), A = ae(null), T = ae(null), K = Ye(), V = o !== void 0, [J, Z] = X(
    () => l != null ? Kn(Sn(l, c) ?? Gt(), c, y) : ""
  ), [ee, ue] = X(!1), [ie, U] = X(null), [L, te] = X(() => {
    const q = o !== void 0 ? o ?? "" : l ?? "";
    if (q) {
      const de = Sn(q, c);
      if (de) return de;
    }
    return Gt();
  }), G = $e(() => m ? ar(m) : null, [m]), ce = $e(() => s ? ar(s) : null, [s]), oe = $e(
    () => new Set($ ?? []),
    [$]
  ), ye = $e(() => {
    const q = V ? o ?? "" : J;
    return q ? Sn(q, c) : null;
  }, [o, J, V, c]), ve = H(
    (q) => {
      const de = pt(q);
      return !!(oe.has(de) || G && de < pt(G) || ce && de > pt(ce));
    },
    [oe, G, ce]
  ), Be = H(
    (q) => {
      if (!ve(q)) return q;
      for (let de = 1; de <= 366; de += 1) {
        const Pe = Ft(q, de);
        if (!ve(Pe)) return Pe;
        const Ke = Ft(q, -de);
        if (!ve(Ke)) return Ke;
      }
      return q;
    },
    [ve]
  ), ke = H(
    (q) => {
      V || Z(q ? Kn(q, c, y) : "");
      const de = q ? Kg(q, a) : "";
      N?.(de), v?.(de);
    },
    [V, c, y, a, N, v]
  ), We = H(
    (q) => {
      P.current = q, typeof g == "function" ? g(q) : g && (g.current = q);
    },
    [g]
  ), be = H(() => {
    ue(!1), U(null), u?.(), d || A.current?.focus();
  }, [d, u]), Ze = H(() => {
    if (_) return;
    const q = ye ?? Gt();
    U(q), te(Be(q)), ue(!0), b?.();
  }, [_, ye, Be, b]), Ve = H(() => {
    ee ? be() : Ze();
  }, [ee, be, Ze]), Re = H((q) => {
    T.current?.querySelector(
      `[data-date="${pt(q)}"]`
    )?.focus();
  }, []), tt = H(
    (q) => {
      if (ve(q)) return;
      const de = ie ?? ye, Ke = {
        ...a ? {
          hour: de?.hour ?? 0,
          minute: de?.minute ?? 0,
          second: de?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: q.year,
        month: q.month,
        day: q.day
      };
      U(Ke), a || (ke(Ke), be());
    },
    [ve, ie, ye, a, ke, be]
  ), Qe = H(
    (q, de) => {
      U((Pe) => {
        const Ke = Pe ?? ye ?? Gt(), St = Math.min(q === "hour" ? 23 : 59, Math.max(0, Ke[q] + de));
        return { ...Ke, [q]: St };
      });
    },
    [ye]
  ), et = H(
    (q, de) => {
      const Pe = de.replace(/\D/g, ""), Ke = Pe === "" ? 0 : Number(Pe), Rt = q === "hour" ? 23 : 59;
      U((St) => ({ ...St ?? ye ?? Gt(), [q]: Math.min(Rt, Ke) }));
    },
    [ye]
  ), W = H(() => {
    ie && (ke(ie), be());
  }, [ie, ke, be]), z = H(() => {
    if (ee) return;
    const q = Sn(J, c);
    ke(q ? Xg(q, G, ce) : null);
  }, [ee, J, c, G, ce, ke]), F = (q) => {
    const de = q.target.value;
    V || Z(de), ee && U(null);
  }, ne = (q) => {
    q.key === "Enter" ? (q.preventDefault(), ee ? ie && (ke(ie), be()) : z()) : q.key === "Escape" ? ee && (q.preventDefault(), be()) : q.key === "ArrowDown" && !ee ? (q.preventDefault(), Ze()) : q.key === "Tab" && ee && ue(!1), D?.(q);
  }, _e = (q) => {
    z(), I?.(q);
  }, re = (q) => {
    let de = null;
    switch (q.key) {
      case "ArrowLeft":
        de = Ft(L, -1), q.preventDefault();
        break;
      case "ArrowRight":
        de = Ft(L, 1), q.preventDefault();
        break;
      case "ArrowUp":
        de = Ft(L, -7), q.preventDefault();
        break;
      case "ArrowDown":
        de = Ft(L, 7), q.preventDefault();
        break;
      case "Home":
        de = Ft(L, -zr(L)), q.preventDefault();
        break;
      case "End":
        de = Ft(L, 6 - zr(L)), q.preventDefault();
        break;
      case "PageUp":
        de = Hn(L, q.shiftKey ? -12 : -1), q.preventDefault();
        break;
      case "PageDown":
        de = Hn(L, q.shiftKey ? 12 : 1), q.preventDefault();
        break;
      case "Enter":
      case " ":
        q.preventDefault(), tt(L);
        break;
      case "Escape":
        q.preventDefault(), be();
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
    const q = (de) => {
      C.current && !C.current.contains(de.target) && be();
    };
    return document.addEventListener("mousedown", q), () => document.removeEventListener("mousedown", q);
  }, [ee, be]), we(() => {
    if (!ee) return;
    const q = (de) => {
      de.key === "Escape" && be();
    };
    return document.addEventListener("keydown", q), () => document.removeEventListener("keydown", q);
  }, [ee, be]);
  const he = () => {
    V || Z(""), N?.(""), v?.(""), P.current?.focus();
  }, Ne = ee && ie ? Kn(ie, c, y) : V ? o ? Kn(Sn(o, c) ?? Gt(), c, y) : "" : J, Fe = V ? !!o : J.length > 0, Je = d || ee, dt = { year: L.year, month: L.month }, xt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
    year: dt.year,
    month: dt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, Se = [];
  for (let q = 0; q < Hg; q += 1)
    Se.push(Ft(Q, q - xt));
  const nt = ie ? pt(ie) : ye ? pt(ye) : null, Ut = pt(Gt()), Ot = `${dt.year}-${yt(dt.month)}`, ze = $e(
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
  }).format(new Date(dt.year, dt.month - 1, 1)), kt = Array.from(
    { length: 7 },
    (q, de) => new Intl.DateTimeFormat(y, { weekday: "short" }).format(
      new Date(2021, 0, 3 + de)
    )
  ), Lt = t === "xs" ? Ce["dx-datepicker-input--xs"] : t === "sm" ? Ce["dx-datepicker-input--sm"] : t === "lg" ? Ce["dx-datepicker-input--lg"] : t === "xl" ? Ce["dx-datepicker-input--xl"] : Ce["dx-datepicker-input--md"], Zt = /* @__PURE__ */ O(
    "div",
    {
      className: Ce["dx-datepicker-calendar"],
      "aria-label": x ?? "Date picker",
      children: [
        /* @__PURE__ */ O("div", { className: Ce["dx-datepicker-header"], children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ce["dx-datepicker-nav"],
              "aria-label": "Previous month",
              onClick: () => {
                const q = Be(Hn(L, -1));
                te(q), setTimeout(() => Re(q), 0);
              },
              children: /* @__PURE__ */ n(Me, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ n("span", { className: Ce["dx-datepicker-title"], children: Xe }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ce["dx-datepicker-nav"],
              "aria-label": "Next month",
              onClick: () => {
                const q = Be(Hn(L, 1));
                te(q), setTimeout(() => Re(q), 0);
              },
              children: /* @__PURE__ */ n(Me, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ O(
          "div",
          {
            ref: T,
            role: "grid",
            className: Ce["dx-datepicker-grid"],
            onKeyDown: re,
            children: [
              /* @__PURE__ */ n("div", { role: "row", className: Ce["dx-datepicker-week-row"], children: kt.map((q) => /* @__PURE__ */ n(
                "div",
                {
                  role: "columnheader",
                  className: Ce["dx-datepicker-weekday"],
                  children: q
                },
                q
              )) }),
              Array.from({ length: 6 }, (q, de) => /* @__PURE__ */ n("div", { role: "row", className: Ce["dx-datepicker-row"], children: Se.slice(de * 7, de * 7 + 7).map((Pe) => {
                const Ke = pt(Pe), Rt = ve(Pe), St = Ke.startsWith(Ot);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Ke,
                    tabIndex: Ke === pt(L) ? 0 : -1,
                    "aria-selected": Ke === nt || void 0,
                    "aria-disabled": Rt || void 0,
                    "aria-label": ze.format(
                      new Date(Pe.year, Pe.month - 1, Pe.day)
                    ),
                    className: [
                      Ce["dx-datepicker-day"],
                      St ? null : Ce["dx-datepicker-day--outside"],
                      Ke === Ut ? Ce["dx-datepicker-day--today"] : null,
                      Ke === nt ? Ce["dx-datepicker-day--selected"] : null,
                      Rt ? Ce["dx-datepicker-day--disabled"] : null
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
        a && /* @__PURE__ */ O("div", { className: Ce["dx-datepicker-time"], children: [
          Gg.map((q) => /* @__PURE__ */ O("label", { className: Ce["dx-datepicker-time-field"], children: [
            /* @__PURE__ */ n("span", { className: Ce["dx-datepicker-time-label"], children: qn(q) }),
            /* @__PURE__ */ O("div", { className: Ce["dx-datepicker-time-control"], children: [
              /* @__PURE__ */ n(
                "input",
                {
                  className: Ce["dx-datepicker-time-input"],
                  inputMode: "numeric",
                  "aria-label": qn(q),
                  value: yt((ie ?? ye ?? Gt())[q]),
                  onChange: (de) => et(q, de.target.value),
                  onKeyDown: (de) => {
                    de.key === "ArrowUp" ? (de.preventDefault(), Qe(q, 1)) : de.key === "ArrowDown" ? (de.preventDefault(), Qe(q, -1)) : de.key === "Enter" && (de.preventDefault(), W());
                  }
                }
              ),
              /* @__PURE__ */ O("span", { className: Ce["dx-datepicker-time-buttons"], children: [
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${qn(q).toLowerCase()}`,
                    onClick: () => Qe(q, 1),
                    children: /* @__PURE__ */ n(Me, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${qn(q).toLowerCase()}`,
                    onClick: () => Qe(q, -1),
                    children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, q)),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ce["dx-datepicker-ok"],
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
        Ce["dx-datepicker"],
        d ? Ce["dx-datepicker-inline"] : null,
        M
      ].filter(Boolean).join(" "),
      children: [
        !d && /* @__PURE__ */ O(Ee, { children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: We,
              type: "text",
              autoComplete: "off",
              value: Ne,
              disabled: _,
              readOnly: h,
              placeholder: w,
              tabIndex: k,
              role: i ? void 0 : "combobox",
              "aria-label": x ?? "Date",
              "aria-haspopup": i ? void 0 : "dialog",
              "aria-expanded": i ? void 0 : Je,
              "aria-controls": i ? void 0 : K,
              "aria-invalid": r || void 0,
              className: [
                Ce["dx-datepicker-input"],
                Lt,
                r ? Ce["dx-datepicker-input-invalid"] : null
              ].filter(Boolean).join(" "),
              onChange: F,
              onKeyDown: ne,
              onBlur: _e,
              onClick: () => {
                i || Ve();
              },
              ...S
            }
          ),
          p && !_ && Fe && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [
                Ce["dx-datepicker-clear"],
                i ? Ce["dx-datepicker-clear--inset"] : null
              ].filter(Boolean).join(" "),
              "aria-label": f ?? "Clear",
              onClick: he,
              children: /* @__PURE__ */ n(Me, { name: "close", size: 14 })
            }
          ),
          i && /* @__PURE__ */ n(
            "button",
            {
              ref: A,
              type: "button",
              className: [
                Ce["dx-datepicker-trigger"]
              ].filter(Boolean).join(" "),
              "aria-label": E ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": ee,
              "aria-controls": K,
              disabled: _,
              onClick: Ve,
              children: /* @__PURE__ */ n(Me, { name: "calendar", size: 16 })
            }
          )
        ] }),
        Je && /* @__PURE__ */ n(
          "div",
          {
            id: K,
            role: d ? void 0 : "dialog",
            className: d ? void 0 : Ce["dx-datepicker-popup"],
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
}, _k = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: l = "Rating",
  clearLabel: c = "Clear",
  rateLabel: m = "Rate",
  tabIndex: s = 0,
  className: a,
  onChange: i,
  onValueChange: p
}) => {
  const [d, $] = X(e), y = H(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), N = H(
    (_) => {
      i?.(_), p?.(_);
    },
    [i, p]
  ), v = H(
    (_) => {
      r || o || (N(_), $(_));
    },
    [r, o, N]
  ), b = (_) => {
    if (r || o) return;
    const h = d > 0 ? d : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), v(y(h + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), v(y(h - 1));
        break;
      case "Home":
        _.preventDefault(), v(1);
        break;
      case "End":
        _.preventDefault(), v(t);
        break;
    }
  }, u = Array.from({ length: t }, (_, h) => h + 1);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": r || void 0,
      className: [
        Yt["dx-rating"],
        r ? Yt["dx-rating-readonly"] : null,
        o ? Yt["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !r && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Yt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? s : -1,
            disabled: o,
            onClick: () => v(0),
            children: /* @__PURE__ */ n(Me, { name: "ban", size: 16 })
          }
        ),
        u.map((_) => {
          const h = _ <= e, w = _ === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": h,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${m} ${_}`,
              tabIndex: w ? s : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Yt["dx-rating-item"],
                h ? Yt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => v(_),
              onFocus: () => $(_),
              children: [
                /* @__PURE__ */ n("span", { className: Yt["dx-rating-icon-filled"], "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "star", size: 20 }) }),
                /* @__PURE__ */ n("span", { className: Yt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "star-outline", size: 20 }) })
              ]
            },
            _
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
const fk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: o = 0,
  max: l = 100,
  step: c = 1,
  range: m = !1,
  orientation: s = "horizontal",
  disabled: a = !1,
  label: i = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: $ = 0,
  className: y,
  onChange: N,
  onInput: v,
  onValueChange: b,
  onInputChange: u
}) => {
  const _ = ae(null), h = ae(null), [w, x] = X(null), E = w ?? e, f = $e(() => It(E, o, l), [E, o, l]), k = $e(
    () => It(m ? t : f, o, l),
    [m, t, f, o, l]
  ), M = $e(
    () => It(m ? Math.max(r, k) : f, o, l),
    [m, r, k, f, o, l]
  ), I = H(
    (L) => {
      const te = l - o;
      return te <= 0 ? 0 : (It(L, o, l) - o) / te * 100;
    },
    [o, l]
  ), D = H(
    (L, te) => {
      const G = _.current;
      if (!G) return o;
      const ce = G.getBoundingClientRect();
      let oe;
      s === "vertical" ? oe = 1 - (te - ce.top) / ce.height : oe = (L - ce.left) / ce.width;
      const ye = o + It(oe, 0, 1) * (l - o);
      return c > 0 ? It(Math.round(ye / c) * c, o, l) : It(ye, o, l);
    },
    [o, l, c, s]
  ), S = H(
    (L) => {
      typeof L == "number" && x(L), N?.(L), b?.(L);
    },
    [N, b]
  ), g = H(
    (L) => {
      typeof L == "number" && x(L), v?.(L), u?.(L);
    },
    [v, u]
  ), C = H(
    (L, te, G) => {
      const ce = D(te, G);
      let oe;
      m ? L === "min" ? oe = { min: Math.min(ce, M), max: M } : oe = { min: k, max: Math.max(ce, k) } : oe = ce, g(oe), h.current === null && S(oe);
    },
    [m, D, k, M, g, S]
  ), P = H(
    (L, te) => {
      const G = (c > 0 ? c : 1) * te;
      let ce;
      m ? L === "min" ? ce = {
        min: It(k + G, o, M),
        max: M
      } : ce = {
        min: k,
        max: It(M + G, k, l)
      } : ce = It(f + G, o, l), S(ce);
    },
    [m, c, o, l, k, M, f, S]
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
          te.preventDefault(), S(m ? L === "min" ? { min: o, max: M } : { min: k, max: k } : o);
          break;
        case "End":
          te.preventDefault(), S(m ? L === "min" ? { min: M, max: M } : { min: k, max: l } : l);
          break;
      }
  }, T = (L, te) => {
    a || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), h.current = { key: L, pointerId: te.pointerId }, C(L, te.clientX, te.clientY));
  }, K = (L) => {
    !h.current || h.current.pointerId !== L.pointerId || (L.preventDefault(), C(h.current.key, L.clientX, L.clientY));
  }, V = (L) => {
    !h.current || h.current.pointerId !== L.pointerId || (h.current = null, L.preventDefault(), S(m ? { min: k, max: M } : f));
  }, [J, Z] = X(null), ee = I(k), ue = I(M), ie = m ? ee : 0, U = ue;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        nn["dx-slider"],
        s === "vertical" ? nn["dx-slider-vertical"] : null,
        a ? nn["dx-slider-disabled"] : null,
        y
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ O("div", { ref: _, className: nn["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: nn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${ie}%`, height: `${U - ie}%` } : { left: `${ie}%`, width: `${U - ie}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(k),
            "aria-orientation": s,
            "aria-label": m ? p : i,
            "aria-disabled": a || void 0,
            tabIndex: a || m && J === "max" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ee}% - 8px)` } : { left: `calc(${ee}% - 8px)` },
            onKeyDown: (L) => A("min", L),
            onPointerDown: (L) => T("min", L),
            onPointerMove: K,
            onPointerUp: V,
            onFocus: () => Z("min")
          }
        ),
        m && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(M),
            "aria-orientation": s,
            "aria-label": d,
            "aria-disabled": a || void 0,
            tabIndex: a || J === "min" ? -1 : $,
            className: nn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ue}% - 8px)` } : { left: `calc(${ue}% - 8px)` },
            onKeyDown: (L) => A("max", L),
            onPointerDown: (L) => T("max", L),
            onPointerMove: K,
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
}, Yg = "-10675199.02:48:05.4775808", Zg = "10675199.02:48:05.4775808", Kt = 86400, qt = 3600, Mt = 60, tr = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Mr = {
  days: Kt,
  hours: qt,
  minutes: Mt,
  seconds: 1
}, Jg = {
  day: Kt,
  hour: qt,
  minute: Mt,
  second: 1
};
function _n(e) {
  return String(e).padStart(2, "0");
}
function An(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, o = t;
  o.startsWith("-") ? (r = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (l) {
    if (!l.slice(1).some((d) => d != null)) return null;
    const s = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, i = l[3] != null ? Number(l[3]) : 0, p = l[4] != null ? Number(l[4]) : 0;
    return r * (s * Kt + a * qt + i * Mt + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (c) {
    const m = c[1] != null ? Number(c[1]) : 0, s = Number(c[2]), a = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return s > 23 || a > 59 || i > 59 ? null : r * (m * Kt + s * qt + a * Mt + i + p);
  }
  return null;
}
function Qg(e) {
  return e.days * Kt + e.hours * qt + e.minutes * Mt + e.seconds;
}
function Cr(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / Kt);
  t %= Kt;
  const o = Math.floor(t / qt);
  t %= qt;
  const l = Math.floor(t / Mt), c = Math.round(t % Mt * 1e9) / 1e9;
  return { days: r, hours: o, minutes: l, seconds: c };
}
function lr(e, t) {
  const r = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Mt) * Mt : t === "hour" ? o = Math.round(o / qt) * qt : t === "day" && (o = Math.round(o / Kt) * Kt);
  let l = Math.round(o % Mt);
  const c = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const m = Math.floor(o / Mt) + c, s = m % 60, a = Math.floor(m / 60), i = a % 24, p = Math.floor(a / 24), d = r ? "-" : "", $ = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${$}${_n(i)}`;
    case "minute":
      return `${d}${$}${_n(i)}:${_n(s)}`;
    default:
      return `${d}${$}${_n(i)}:${_n(s)}:${_n(l)}`;
  }
}
function Er(e, t = "second") {
  const r = An(e);
  return r === null ? "" : lr(r, t);
}
function nr(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const pk = He(
  function({
    size: t = "md",
    invalid: r = !1,
    value: o,
    defaultValue: l,
    min: c = Yg,
    max: m = Zg,
    step: s = "1",
    precision: a = "second",
    showDays: i = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: $ = !0,
    allowClear: y = !1,
    inline: N = !1,
    onChange: v,
    onValueChange: b,
    onOpen: u,
    onClose: _,
    disabled: h,
    placeholder: w,
    ariaLabel: x,
    triggerLabel: E,
    clearLabel: f,
    tabIndex: k,
    className: M,
    onBlur: I,
    onKeyDown: D,
    ...S
  }, g) {
    const C = ae(null), P = ae(null), A = ae(null), T = Ye(), K = o !== void 0, [V, J] = X(
      () => l != null ? Er(l, a) : ""
    ), [Z, ee] = X(!1), [ue, ie] = X(null), [U, L] = X(null), te = $e(
      () => An(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), G = $e(
      () => An(m) ?? Number.MAX_SAFE_INTEGER,
      [m]
    ), ce = $e(() => {
      const Q = Number.parseFloat(s);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [s]), oe = $e(() => {
      const Q = K ? o ?? "" : V;
      return Q ? An(Q) : null;
    }, [o, V, K]), ye = H(
      (Q) => {
        const Se = Q === null ? "" : lr(Q, a);
        K || J(Se), v?.(Se), b?.(Se);
      },
      [K, a, v, b]
    ), ve = H(
      (Q) => {
        Q && ue !== null && ye(ue), ee(!1), ie(null), L(null), _?.(), N || A.current?.focus();
      },
      [N, ue, ye, _]
    ), Be = H(() => {
      h || (ie(oe ?? 0), ee(!0), u?.());
    }, [h, oe, u]), ke = H(() => {
      Z ? ve(!1) : Be();
    }, [Z, ve, Be]), We = H(
      (Q, Se) => {
        ie((nt) => {
          const Ot = (nt ?? oe ?? 0) + Se * ce * Mr[Q];
          return nr(Ot, te, G);
        });
      },
      [oe, ce, te, G]
    ), be = H(
      (Q) => {
        const Se = U?.[Q];
        if (Se == null) return;
        const nt = Number.parseFloat(Se), Ut = Number.isNaN(nt) ? 0 : nt;
        ie((Ot) => {
          const ze = Ot ?? oe ?? 0, Xe = Cr(ze);
          Xe[Q] = Ut;
          const Lt = (ze < 0 ? -1 : 1) * Qg(Xe);
          return nr(Lt, te, G);
        }), L(null);
      },
      [U, oe, te, G]
    ), Ze = (Q, Se) => {
      L((nt) => ({ ...nt ?? {}, [Q]: Se }));
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
    }, Re = H(() => {
      if (Z) return;
      const Q = An(V);
      ye(Q !== null ? nr(Q, te, G) : null);
    }, [Z, V, te, G, ye]), tt = (Q) => {
      K || J(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Z ? ve(!0) : Re()) : Q.key === "Escape" && Z ? (Q.preventDefault(), ve(!1)) : Q.key === "ArrowDown" && !Z ? (Q.preventDefault(), Be()) : Q.key === "Tab" && Z && ee(!1), D?.(Q);
    }, et = (Q) => {
      Re(), I?.(Q);
    }, W = () => {
      K || J(""), v?.(""), b?.(""), P.current?.focus();
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
        (Q === null || Math.abs(ue - Q) > 1e-9) && ye(ue);
      }
    }, [N, ue, oe, ye]);
    const z = H(
      (Q) => {
        P.current = Q, typeof g == "function" ? g(Q) : g && (g.current = Q);
      },
      [g]
    ), F = K ? o ? Er(o, a) : "" : V, ne = K ? !!o : V.length > 0, _e = N || Z, re = ue ?? oe ?? 0, he = Cr(re), Ne = Jg[a], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Mr[Q] >= Ne && (Q === "days" ? i : Q === "hours" ? p : Q === "minutes" ? d : $)
    ), dt = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], xt = /* @__PURE__ */ O("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: lr(re, a) }),
      /* @__PURE__ */ n("div", { className: qe["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ O("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: qe["dx-timespanpicker-unit-label"], children: tr[Q] }),
        /* @__PURE__ */ O("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: U?.[Q] ?? String(he[Q]),
              onChange: (Se) => Ze(Q, Se.target.value),
              onKeyDown: (Se) => Ve(Q, Se),
              onBlur: () => be(Q)
            }
          ),
          /* @__PURE__ */ O("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${tr[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), We(Q, 1);
                },
                children: /* @__PURE__ */ n(Me, { name: "chevron-up", size: 11 })
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
                children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 11 })
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
          qe["dx-timespanpicker"],
          N ? qe["dx-timespanpicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !N && /* @__PURE__ */ O(Ee, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: F,
                disabled: h,
                placeholder: w,
                tabIndex: k,
                role: "combobox",
                "aria-label": x ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": T,
                "aria-invalid": r || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  dt,
                  r ? qe["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...S
              }
            ),
            y && !h && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: qe["dx-timespanpicker-clear"],
                "aria-label": f ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(Me, { name: "close", size: 14 })
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
                "aria-controls": T,
                disabled: h,
                onClick: ke,
                children: /* @__PURE__ */ n(Me, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ n(
            "div",
            {
              id: T,
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
), e0 = "_wrapper_7payt_1", t0 = "_cells_7payt_8", n0 = "_cell_7payt_8", r0 = "_invalid_7payt_63", s0 = "_live_7payt_72", rn = {
  wrapper: e0,
  cells: t0,
  cell: n0,
  "cell-sm": "_cell-sm_7payt_45",
  "cell-md": "_cell-md_7payt_51",
  "cell-lg": "_cell-lg_7payt_57",
  invalid: r0,
  live: s0
};
function Ir(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const mk = He(
  function({
    length: t = 6,
    value: r,
    defaultValue: o,
    onChange: l,
    invalid: c = !1,
    size: m = "md",
    autoFocus: s = !1,
    disabled: a = !1,
    label: i = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": $
  }, y) {
    const N = Ye(), v = r !== void 0, [b, u] = X(Ir(o).join("")), _ = v ? Ir(r).join("") : b, h = Array.from({ length: t }, (S, g) => _[g] ?? ""), w = ae([]), [x, E] = X(""), f = (S) => {
      v || u(S), l?.(S);
    }, k = (S) => {
      const g = w.current[S];
      g && !g.disabled && (g.focus(), g.select());
    }, M = (S, g) => {
      const C = g.replace(/\D/g, "").slice(-1), P = _.split("");
      if (C) {
        P[S] = C;
        const A = P.join("").slice(0, t);
        f(A), A.length < t ? k(S + 1) : p && E("Code complete");
      }
    }, I = (S, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), _[S]) {
          const C = _.split("");
          C[S] = "", f(C.join(""));
        } else if (S > 0) {
          const C = _.split("");
          C[S - 1] = "", f(C.join("")), k(S - 1);
        }
      } else g.key === "ArrowLeft" && S > 0 ? (g.preventDefault(), k(S - 1)) : g.key === "ArrowRight" && S < t - 1 ? (g.preventDefault(), k(S + 1)) : g.key === "Home" ? (g.preventDefault(), k(0)) : g.key === "End" && (g.preventDefault(), k(t - 1));
    }, D = (S, g) => {
      g.preventDefault();
      const C = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!C) return;
      const P = _.split("");
      let A = 0;
      for (let K = 0; K < C.length && S + K < t; K++)
        P[S + K] = C[K] ?? "", A++;
      const T = P.join("");
      f(T), T.length >= t ? p && E("Code complete") : k(S + A);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": $ ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[m]].join(" "), children: h.map((S, g) => /* @__PURE__ */ n(
            "input",
            {
              ref: (C) => {
                w.current[g] = C, g === 0 && y && (typeof y == "function" ? y(C) : y.current = C);
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
              className: [rn.cell, rn[`cell-${m}`], c ? rn.invalid : null].filter(Boolean).join(" "),
              onChange: (C) => M(g, C.target.value),
              onKeyDown: (C) => I(g, C),
              onPaste: (C) => D(g, C),
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
), o0 = "_wrapper_w4qo1_1", a0 = "_header_w4qo1_7", l0 = "_label_w4qo1_15", i0 = "_clear_w4qo1_22", c0 = "_canvas_w4qo1_53", d0 = "_disabled_w4qo1_69", fn = {
  wrapper: o0,
  header: a0,
  label: l0,
  clear: i0,
  canvas: c0,
  disabled: d0
}, hk = He(
  function({
    value: t,
    defaultValue: r,
    onChange: o,
    penColor: l = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: m = "Clear",
    ariaLabel: s = "Signature",
    width: a,
    height: i = 140,
    disabled: p = !1,
    className: d
  }, $) {
    const y = ae(null), N = ae(!1), v = ae(!1), b = ae({ x: 0, y: 0 });
    we(() => {
      const f = y.current;
      if (!f) return;
      const k = window.devicePixelRatio || 1, M = Math.round((a ?? f.clientWidth) * k), I = Math.round(i * k);
      (f.width !== M || f.height !== I) && (f.width = M, f.height = I);
      const D = f.getContext("2d");
      if (!D) return;
      D.setTransform(k, 0, 0, k, 0, 0), D.lineWidth = c, D.strokeStyle = l, D.lineCap = "round", D.lineJoin = "round";
      const S = t ?? r;
      if (S) {
        const g = new Image();
        g.onload = () => {
          D.drawImage(g, 0, 0, f.clientWidth, i);
        }, g.src = S;
      }
    }, [t, r, l, c, a, i]);
    const u = () => {
      const f = y.current;
      if (!f) return;
      const k = f.toDataURL("image/png");
      o?.(k);
    }, _ = () => {
      const f = y.current;
      if (!f) return;
      const k = f.getContext("2d");
      k && k.clearRect(0, 0, f.width, f.height), o?.("");
    };
    ir($, () => ({
      clear: _,
      toDataURL: (f = "image/png", k) => y.current?.toDataURL(f, k) ?? ""
    }));
    const h = (f) => {
      const k = f.currentTarget.getBoundingClientRect();
      return { x: f.clientX - k.left, y: f.clientY - k.top };
    }, w = (f) => {
      p || (f.preventDefault(), typeof f.currentTarget.setPointerCapture == "function" && f.currentTarget.setPointerCapture(f.pointerId), N.current = !0, v.current = !1, b.current = h(f));
    }, x = (f) => {
      if (!N.current) return;
      f.preventDefault();
      const k = f.currentTarget.getContext("2d");
      if (!k) return;
      const M = h(f);
      k.beginPath(), k.moveTo(b.current.x, b.current.y), k.lineTo(M.x, M.y), k.stroke(), b.current = M, v.current = !0;
    }, E = (f) => {
      N.current && (f.preventDefault(), N.current = !1, v.current && u());
    };
    return /* @__PURE__ */ O("div", { className: [fn.wrapper, d, p ? fn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ O("div", { className: fn.header, children: [
        /* @__PURE__ */ n("span", { className: fn.label, children: s }),
        /* @__PURE__ */ n("button", { type: "button", className: fn.clear, onClick: _, disabled: p, children: m })
      ] }),
      /* @__PURE__ */ n(
        "canvas",
        {
          ref: y,
          role: "img",
          "aria-label": s,
          "aria-disabled": p || void 0,
          style: { width: a ? `${a}px` : void 0, height: `${i}px` },
          className: fn.canvas,
          onPointerDown: w,
          onPointerMove: x,
          onPointerUp: E,
          onPointerCancel: E
        }
      )
    ] });
  }
), u0 = "_wrapper_5g858_1", _0 = "_trigger_5g858_7", f0 = "_list_5g858_35", p0 = "_row_5g858_44", m0 = "_name_5g858_59", h0 = "_size_5g858_68", g0 = "_progress_5g858_74", b0 = "_fill_5g858_82", y0 = "_status_5g858_99", x0 = "_remove_5g858_106", At = {
  wrapper: u0,
  trigger: _0,
  list: f0,
  row: p0,
  name: m0,
  size: h0,
  progress: g0,
  fill: b0,
  status: y0,
  remove: x0
};
function Ar(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const gk = He(function({
  url: t,
  multiple: r = !1,
  parameterName: o = "files",
  auto: l = !0,
  headers: c,
  accept: m,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: i = "Upload",
  children: p,
  onProgress: d,
  onComplete: $,
  onError: y
}, N) {
  const v = ae(null), [b, u] = X([]), _ = ae(/* @__PURE__ */ new Map()), h = (k, M) => {
    u((I) => I.map((D) => D.file.name === k ? { ...D, ...M } : D));
  }, w = (k) => {
    if (!t) return;
    const M = new XMLHttpRequest();
    _.current.set(k.file.name, M);
    const I = new FormData();
    if (I.append(o, k.file), M.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const S = Math.round(D.loaded / D.total * 100);
      h(k.file.name, { state: "uploading", progress: S }), d?.(k.file.name, S);
    }), M.addEventListener("load", () => {
      M.status >= 200 && M.status < 300 ? (h(k.file.name, { state: "complete", progress: 100 }), $?.(k.file.name)) : (h(k.file.name, { state: "error", message: `HTTP ${M.status}` }), y?.(k.file.name, `HTTP ${M.status}`));
    }), M.addEventListener("error", () => {
      h(k.file.name, { state: "error", message: "Network error" }), y?.(k.file.name, "Network error");
    }), c)
      for (const [D, S] of Object.entries(c))
        M.setRequestHeader(D, S);
    M.open("POST", t), M.send(I), h(k.file.name, { state: "uploading", progress: 0 });
  }, x = (k) => {
    if (!k) return;
    const M = [...k], I = [];
    let D = Math.max(0, s - b.length);
    for (const g of M) {
      if (a != null && g.size > a) {
        y?.(g.name, `File too large (maximum ${Ar(a)})`);
        continue;
      }
      if (D <= 0) {
        y?.(g.name, `Too many files (maximum ${s})`);
        continue;
      }
      D -= 1, I.push(g);
    }
    const S = I.map((g) => ({
      file: g,
      state: "pending",
      progress: 0
    }));
    u((g) => [...g, ...S]), v.current && (v.current.value = ""), l && S.forEach(w);
  }, E = (k) => {
    _.current.get(k)?.abort(), _.current.delete(k), u((I) => I.filter((D) => D.file.name !== k));
  }, f = p ?? /* @__PURE__ */ O("button", { type: "button", className: At.trigger, onClick: () => v.current?.click(), children: [
    /* @__PURE__ */ n(Me, { name: "upload", size: 14 }),
    i
  ] });
  return ir(N, () => ({
    open: () => v.current?.click(),
    upload: () => b.forEach((k) => k.state === "pending" ? w(k) : null)
  })), /* @__PURE__ */ O("div", { className: At.wrapper, children: [
    f,
    /* @__PURE__ */ n(
      "input",
      {
        ref: v,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: m,
        "data-testid": "upload-input",
        onChange: (k) => x(k.target.files)
      }
    ),
    !p && b.length > 0 && /* @__PURE__ */ n("ul", { className: At.list, children: b.map(({ file: k, state: M, progress: I, message: D }) => /* @__PURE__ */ O("li", { className: At.row, "data-state": M, "data-testid": "upload-row", children: [
      /* @__PURE__ */ n("span", { className: At.name, children: k.name }),
      /* @__PURE__ */ n("span", { className: At.size, children: Ar(k.size) }),
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
          children: /* @__PURE__ */ n(Me, { name: "close", size: 14 })
        }
      )
    ] }, k.name)) })
  ] });
}), k0 = "_zone_1158o_1", v0 = "_dragging_1158o_23", w0 = "_caption_1158o_28", $0 = "_browse_1158o_40", N0 = "_disabled_1158o_67", zn = {
  zone: k0,
  dragging: v0,
  caption: w0,
  browse: $0,
  disabled: N0
};
function O0(e, t) {
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
const bk = He(function({
  accept: t,
  multiple: r = !1,
  onDrop: o,
  label: l = "Drop files here or browse",
  dragLabel: c = "Drop to attach",
  browseText: m = "Browse",
  disabled: s = !1,
  className: a
}, i) {
  const p = ae(null), [d, $] = X(!1), y = (_) => {
    if (!_ || _.length === 0) return;
    const h = [..._].filter((w) => O0(w, t ?? ""));
    h.length !== 0 && o?.(h);
  }, N = (_) => {
    s || (_.preventDefault(), $(!0));
  }, v = (_) => {
    s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", $(!0));
  }, b = (_) => {
    s || _.currentTarget.contains(_.relatedTarget) || $(!1);
  }, u = (_) => {
    s || (_.preventDefault(), $(!1), y(_.dataTransfer.files));
  };
  return ir(i, () => ({
    open: () => p.current?.click()
  })), /* @__PURE__ */ O(
    "div",
    {
      role: "region",
      "aria-label": l,
      className: [zn.zone, d ? zn.dragging : null, s ? zn.disabled : null, a].filter(Boolean).join(" "),
      onDragEnter: N,
      onDragOver: v,
      onDragLeave: b,
      onDrop: u,
      children: [
        /* @__PURE__ */ n("p", { className: zn.caption, children: d ? c : l }),
        !s && /* @__PURE__ */ n("button", { type: "button", className: zn.browse, onClick: () => p.current?.click(), children: m }),
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
              y(_.target.files), _.target.value = "";
            }
          }
        )
      ]
    }
  );
}), S0 = "_root_y70dg_1", z0 = "_menubar_y70dg_5", D0 = "_horizontal_y70dg_15", M0 = "_vertical_y70dg_20", C0 = "_itemWrapper_y70dg_25", E0 = "_item_y70dg_25", I0 = "_disabled_y70dg_61", A0 = "_icon_y70dg_68", T0 = "_text_y70dg_75", j0 = "_caret_y70dg_79", L0 = "_hasChildren_y70dg_85", R0 = "_submenu_y70dg_94", P0 = "_submenuItem_y70dg_118", ct = {
  root: S0,
  menubar: z0,
  horizontal: D0,
  vertical: M0,
  itemWrapper: C0,
  item: E0,
  disabled: I0,
  icon: A0,
  text: T0,
  caret: j0,
  hasChildren: L0,
  submenu: R0,
  submenuItem: P0
};
function Dn(e) {
  return !!e.disabled;
}
function yk({
  items: e,
  orientation: t = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: l = "Menu",
  className: c
}) {
  const m = Ye(), s = ae(null), a = ae(null), [i, p] = X(null), d = ae(0), $ = ae(null), y = H(
    (u) => {
      const _ = { text: u.text, value: u.value, path: u.path };
      (r ?? o)?.(_);
    },
    [r, o]
  ), N = H(
    (u, _) => {
      if (!Dn(u)) {
        if (u.children && u.children.length > 0) {
          const h = i === _, w = Date.now() - d.current < 600;
          if (h && w) {
            d.current = 0;
            return;
          }
          p((x) => x === _ ? null : _);
          return;
        }
        y(u), p(null);
      }
    },
    [y, i]
  ), v = (u) => {
    Dn(u) || u.children && u.children.length > 0 || (y(u), p(null));
  };
  we(() => {
    if (i == null) return;
    const u = (_) => {
      s.current && !s.current.contains(_.target) && p(null);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [i]), we(() => {
    if ($.current != null && i === $.current) {
      const u = `${m}-submenu-${i}`;
      document.getElementById(u)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), $.current = null;
    }
  }, [i, m]);
  const b = (u) => {
    const _ = a.current;
    if (!_) return;
    const h = Array.from(
      _.querySelectorAll('[data-top="true"]')
    ).filter((E) => !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true");
    if (i != null) {
      const E = `${m}-submenu-${i}`, f = document.getElementById(E);
      if (f) {
        const k = Array.from(f.querySelectorAll('[role="menuitem"]')).filter(
          (D) => D.getAttribute("aria-disabled") !== "true"
        ), M = document.activeElement, I = M ? k.indexOf(M) : -1;
        if (u.key === "ArrowDown") {
          u.preventDefault(), I === -1 ? k[0]?.focus() : k[(I + 1) % k.length]?.focus();
          return;
        }
        if (u.key === "ArrowUp") {
          u.preventDefault(), I === -1 ? k[k.length - 1]?.focus() : k[(I - 1 + k.length) % k.length]?.focus();
          return;
        }
        if (u.key === "Escape") {
          u.preventDefault(), p(null), _.querySelector(`[data-top="true"][data-index="${i}"]`)?.focus();
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
    const w = document.activeElement, x = w ? h.indexOf(w) : -1;
    if (u.key === "ArrowRight" || t === "vertical" && u.key === "ArrowDown") {
      if (u.preventDefault(), h.length === 0) return;
      const E = x === -1 ? 0 : (x + 1) % h.length;
      h[E]?.focus();
      return;
    }
    if (u.key === "ArrowLeft" || t === "vertical" && u.key === "ArrowUp") {
      if (u.preventDefault(), h.length === 0) return;
      const E = x === -1 ? h.length - 1 : (x - 1 + h.length) % h.length;
      h[E]?.focus();
      return;
    }
    if (u.key === "ArrowDown") {
      if (x >= 0) {
        const E = w?.getAttribute("data-index"), f = E != null ? Number(E) : -1, k = f >= 0 ? e[f] : void 0;
        k?.children && k.children.length > 0 && !Dn(k) && (u.preventDefault(), $.current = f, p(f));
      }
      return;
    }
    if (u.key === "Home") {
      u.preventDefault(), h[0]?.focus();
      return;
    }
    if (u.key === "End") {
      u.preventDefault(), h[h.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: s,
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
          children: e.map((u, _) => {
            const h = !!u.children && u.children.length > 0, w = i === _, x = Dn(u), E = `${m}-submenu-${_}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && h && !x && (d.current = Date.now(), p(_));
                },
                onMouseLeave: () => {
                  t === "horizontal" && h && p((f) => f === _ ? null : f);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ O(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": _,
                      "data-dx-menu-item": "",
                      "aria-disabled": x || void 0,
                      "aria-haspopup": h ? "menu" : void 0,
                      "aria-expanded": h ? w : void 0,
                      "aria-controls": h ? E : void 0,
                      tabIndex: x ? -1 : 0,
                      disabled: x,
                      className: [ct.item, x ? ct.disabled : null, h ? ct.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => N(u, _),
                      children: [
                        u.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: u.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: u.text }),
                        h ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  h && w ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: E,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": u.text,
                      children: u.children?.map((f, k) => {
                        const M = Dn(f), I = !!f.children && f.children.length > 0;
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
                            onClick: () => v(f),
                            children: [
                              f.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: f.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: f.text })
                            ]
                          },
                          `${f.text}-${k}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${u.text}-${_}`
            );
          })
        }
      )
    }
  );
}
const B0 = "_root_1jwkg_1", F0 = "_list_1jwkg_9", H0 = "_item_1jwkg_14", K0 = "_trigger_1jwkg_18", q0 = "_disabled_1jwkg_44", U0 = "_expanded_1jwkg_51", W0 = "_icon_1jwkg_55", V0 = "_text_1jwkg_66", X0 = "_caret_1jwkg_73", G0 = "_open_1jwkg_80", Y0 = "_submenu_1jwkg_84", Z0 = "_submenuItem_1jwkg_93", J0 = "_nestedWrapper_1jwkg_122", Q0 = "_nestedTrigger_1jwkg_127", eb = "_nestedMenu_1jwkg_152", tb = "_iconOnly_1jwkg_160", Te = {
  root: B0,
  list: F0,
  item: H0,
  trigger: K0,
  disabled: q0,
  expanded: U0,
  icon: W0,
  text: V0,
  caret: X0,
  open: G0,
  submenu: Y0,
  submenuItem: Z0,
  nestedWrapper: J0,
  nestedTrigger: Q0,
  nestedMenu: eb,
  iconOnly: tb
};
function nb({
  item: e,
  baseId: t,
  parentKey: r,
  onEmit: o
}) {
  const l = !!e.children && e.children.length > 0, [c, m] = X(!1), s = `${t}-nested-${r}`, a = !!e.disabled, i = () => {
    if (!a) {
      if (l) {
        m((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), i()) : d.key === "Escape" && c && (d.preventDefault(), m(!1));
  };
  return l ? /* @__PURE__ */ O("div", { className: Te.nestedWrapper, children: [
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
        onClick: i,
        onKeyDown: p,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Te.text, children: e.text }),
          /* @__PURE__ */ n("span", { className: [Te.caret, c ? Te.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 10 }) })
        ]
      }
    ),
    c ? /* @__PURE__ */ n("div", { id: s, role: "menu", className: Te.nestedMenu, children: e.children?.map((d, $) => {
      const y = !!d.disabled;
      return /* @__PURE__ */ O(
        "div",
        {
          role: "menuitem",
          "aria-disabled": y || void 0,
          tabIndex: y ? -1 : 0,
          className: [Te.submenuItem, y ? Te.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            y || d.children && d.children.length > 0 || o({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (N) => {
            if (N.key === "Enter" || N.key === " ") {
              if (N.preventDefault(), y) return;
              o({ text: d.text, value: d.value, path: d.path });
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
function xk({
  items: e,
  multiple: t,
  Multiple: r,
  showArrow: o,
  ShowArrow: l,
  displayStyle: c,
  DisplayStyle: m,
  onClick: s,
  Click: a,
  ariaLabel: i = "Panel menu",
  className: p
}) {
  const d = Ye(), $ = t ?? r ?? !1, y = o ?? l ?? !0, N = c ?? m ?? "iconAndText", [v, b] = X([]), u = H(
    (w) => {
      const x = { text: w.text, value: w.value, path: w.path };
      (s ?? a)?.(x);
    },
    [s, a]
  ), _ = (w, x, E) => {
    if (!E.disabled) {
      if (x) {
        b((f) => f.includes(w) ? f.filter((M) => M !== w) : $ ? [...f, w] : [w]);
        return;
      }
      u(E);
    }
  }, h = (w) => {
    const x = w.target;
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "Escape") {
        const E = x.getAttribute("aria-controls");
        if (E) {
          const f = E.match(/-panel-(\d+)$/);
          if (f) {
            const k = Number(f[1]);
            b((M) => M.filter((I) => I !== k));
          }
        } else {
          const f = x.closest('[role="menu"]');
          if (f) {
            const M = f.id.match(/-panel-(\d+)$/);
            if (M) {
              const I = Number(M[1]);
              b((S) => S.filter((g) => g !== I)), document.getElementById(`${d}-trigger-${I}`)?.focus();
            }
          }
        }
        w.preventDefault();
        return;
      }
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const E = Array.from(
          w.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((I) => !I.hasAttribute("disabled") && I.getAttribute("aria-disabled") !== "true"), f = E.indexOf(x);
        if (f === -1) return;
        w.preventDefault();
        const k = w.key === "ArrowDown" ? 1 : -1;
        E[(f + k + E.length) % E.length]?.focus();
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
      onKeyDown: h,
      children: /* @__PURE__ */ n("div", { className: Te.list, role: "presentation", children: e.map((w, x) => {
        const E = !!w.children && w.children.length > 0, f = v.includes(x), k = !!w.disabled, M = `${d}-panel-${x}`, I = `${d}-trigger-${x}`;
        return /* @__PURE__ */ O("div", { className: Te.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: I,
              "aria-expanded": E ? f : void 0,
              "aria-controls": E ? M : void 0,
              "aria-disabled": k || void 0,
              disabled: k,
              tabIndex: k ? -1 : 0,
              className: [
                Te.trigger,
                k ? Te.disabled : null,
                f ? Te.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => _(x, E, w),
              children: [
                w.icon ? /* @__PURE__ */ n("span", { className: Te.icon, "aria-hidden": "true", children: w.icon }) : null,
                N === "iconAndText" ? /* @__PURE__ */ n("span", { className: Te.text, children: w.text }) : /* @__PURE__ */ n("span", { className: Te.text, "aria-label": w.text, children: w.icon ? null : w.text.slice(0, 1) }),
                E && y ? /* @__PURE__ */ n("span", { className: [Te.caret, f ? Te.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: 10 }) }) : null
              ]
            }
          ),
          E && f ? /* @__PURE__ */ n("div", { id: M, role: "menu", className: Te.submenu, "aria-labelledby": I, children: w.children?.map((D, S) => /* @__PURE__ */ n(
            nb,
            {
              item: D,
              baseId: d,
              parentKey: `${x}-${S}`,
              onEmit: u
            },
            `${D.text}-${S}`
          )) }) : null
        ] }, `${w.text}-${x}`);
      }) })
    }
  );
}
const rb = "_root_8nui5_1", sb = "_trigger_8nui5_7", ob = "_defaultTrigger_8nui5_40", ab = "_avatar_8nui5_46", lb = "_menu_8nui5_58", ib = "_item_8nui5_74", cb = "_disabled_8nui5_88", db = "_active_8nui5_97", ub = "_icon_8nui5_107", _b = "_text_8nui5_114", Tt = {
  root: rb,
  trigger: sb,
  defaultTrigger: ob,
  avatar: ab,
  menu: lb,
  item: ib,
  disabled: cb,
  active: db,
  icon: ub,
  text: _b
};
function kk({
  items: e,
  trigger: t,
  Template: r,
  onClick: o,
  Click: l,
  ariaLabel: c = "Profile menu",
  className: m
}) {
  const s = Ye(), a = `${s}-menu`, i = ae(null), p = ae(null), [d, $] = X(!1), [y, N] = X(-1), v = t ?? r, b = e.map((f, k) => f.disabled ? -1 : k).filter((f) => f >= 0), u = H(
    (f) => {
      if (f.disabled) return;
      const k = { text: f.text, path: f.path };
      (o ?? l)?.(k), $(!1), p.current?.focus();
    },
    [o, l]
  ), _ = H(() => {
    N(b[0] ?? -1), $(!0);
  }, [b]), h = H(() => {
    $(!1), N(-1), p.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const f = (k) => {
      i.current && !i.current.contains(k.target) && ($(!1), N(-1));
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [d]), we(() => {
    if (!d) return;
    const f = (k) => {
      k.key === "Escape" && (k.preventDefault(), h());
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [d, h]);
  const w = (f) => {
    if (b.length === 0) return;
    const k = b.indexOf(y), M = k === -1 ? 0 : (k + f + b.length) % b.length, I = b[M];
    I != null && N(I);
  }, x = (f) => {
    if (!d) {
      (f.key === "ArrowDown" || f.key === "Enter" || f.key === " ") && (f.preventDefault(), _());
      return;
    }
    switch (f.key) {
      case "Escape":
        f.preventDefault(), h();
        break;
      case "ArrowDown":
        f.preventDefault(), w(1);
        break;
      case "ArrowUp":
        f.preventDefault(), w(-1);
        break;
      case "Home":
        f.preventDefault(), b[0] != null && N(b[0]);
        break;
      case "End":
        f.preventDefault(), b[b.length - 1] != null && N(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (f.preventDefault(), y >= 0) {
          const k = e[y];
          k && !k.disabled && u(k);
        }
        break;
      case "Tab":
        $(!1), N(-1);
        break;
    }
  }, E = (f) => {
    switch (f.key) {
      case "ArrowDown":
        f.preventDefault(), w(1);
        break;
      case "ArrowUp":
        f.preventDefault(), w(-1);
        break;
      case "Home":
        f.preventDefault(), b[0] != null && N(b[0]);
        break;
      case "End":
        f.preventDefault(), b[b.length - 1] != null && N(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (f.preventDefault(), y >= 0) {
          const k = e[y];
          k && !k.disabled && u(k);
        }
        break;
      case "Escape":
        f.preventDefault(), h();
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
      className: [Tt.root, m].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ O("nav", { "aria-label": c, children: [
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
            onClick: () => d ? h() : _(),
            onKeyDown: x,
            children: v ?? /* @__PURE__ */ O("span", { className: Tt.defaultTrigger, children: [
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
            "aria-activedescendant": y >= 0 ? `${s}-item-${y}` : void 0,
            className: Tt.menu,
            onKeyDown: E,
            tabIndex: -1,
            children: e.map((f, k) => {
              const M = !!f.disabled, I = k === y;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${s}-item-${k}`,
                  role: "menuitem",
                  "aria-disabled": M || void 0,
                  tabIndex: M ? -1 : 0,
                  className: [Tt.item, I ? Tt.active : null, M ? Tt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    M || u(f);
                  },
                  onMouseEnter: () => {
                    M || N(k);
                  },
                  children: [
                    f.icon ? /* @__PURE__ */ n("span", { className: Tt.icon, "aria-hidden": "true", children: f.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Tt.text, children: f.text })
                  ]
                },
                `${f.text}-${k}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const fb = "_root_ci25s_1", pb = "_bottomRight_ci25s_11", mb = "_bottomLeft_ci25s_16", hb = "_topRight_ci25s_21", gb = "_topLeft_ci25s_26", bb = "_menu_ci25s_31", yb = "_itemWrapper_ci25s_48", xb = "_tooltip_ci25s_54", kb = "_main_ci25s_76", vb = "_mainIcon_ci25s_104", wb = "_mainOpen_ci25s_109", $b = "_item_ci25s_48", Nb = "_disabled_ci25s_141", Ob = "_itemIcon_ci25s_148", ut = {
  root: fb,
  bottomRight: pb,
  bottomLeft: mb,
  topRight: hb,
  topLeft: gb,
  menu: bb,
  itemWrapper: yb,
  tooltip: xb,
  main: kb,
  mainIcon: vb,
  mainOpen: wb,
  item: $b,
  disabled: Nb,
  itemIcon: Ob
};
function vk({
  items: e,
  position: t,
  Position: r,
  icon: o = "+",
  onClick: l,
  Click: c,
  ariaLabel: m = "Open menu",
  className: s
}) {
  const a = t ?? r ?? "bottom-right", p = `${Ye()}-menu`, d = ae(null), $ = ae(null), [y, N] = X(!1), v = H(
    (h) => {
      if (h.disabled) return;
      const w = { text: h.text, value: h.value };
      (l ?? c)?.(w), N(!1), $.current?.focus();
    },
    [l, c]
  );
  we(() => {
    if (!y) return;
    const h = (w) => {
      d.current && !d.current.contains(w.target) && N(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [y]), we(() => {
    if (!y) return;
    const h = (w) => {
      w.key === "Escape" && (N(!1), $.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [y]);
  const b = a === "bottom-right" ? ut.bottomRight : a === "bottom-left" ? ut.bottomLeft : a === "top-right" ? ut.topRight : ut.topLeft, u = (h) => {
    !y && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), N(!0)) : y && h.key === "Escape" && (h.preventDefault(), N(!1));
  }, _ = (h) => {
    h.key === "Escape" && (h.preventDefault(), N(!1), $.current?.focus());
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: d,
      className: [ut.root, b, s].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        y ? /* @__PURE__ */ n(
          "div",
          {
            id: p,
            role: "menu",
            "aria-label": m,
            className: ut.menu,
            onKeyDown: _,
            children: e.map((h, w) => {
              const x = !!h.disabled;
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": x || void 0,
                    title: h.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [ut.item, x ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => v(h),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: h.icon ?? "•" })
                  }
                )
              ] }, `${h.text}-${w}`);
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
            "aria-label": m,
            onClick: () => N((h) => !h),
            onKeyDown: u,
            children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [ut.mainIcon, y ? ut.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const Sb = "_root_1wujt_1", zb = "_list_1wujt_5", Db = "_item_1wujt_15", Mb = "_link_1wujt_22", Cb = "_linkButton_1wujt_23", Eb = "_current_1wujt_24", Ib = "_disabled_1wujt_68", Ab = "_icon_1wujt_74", Tb = "_text_1wujt_81", jb = "_separator_1wujt_85", Ue = {
  root: Sb,
  list: zb,
  item: Db,
  link: Mb,
  linkButton: Cb,
  current: Eb,
  disabled: Ib,
  icon: Ab,
  text: Tb,
  separator: jb
};
function wk({ items: e, onClick: t, Click: r, ariaLabel: o = "Breadcrumb", className: l }) {
  const c = t ?? r, m = (s) => {
    s.disabled || c?.({ text: s.text, path: s.path });
  };
  return /* @__PURE__ */ n("nav", { "aria-label": o, className: [Ue.root, l].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((s, a) => {
    const i = a === e.length - 1, p = !!s.disabled;
    return /* @__PURE__ */ O("li", { className: Ue.item, children: [
      i ? p ? /* @__PURE__ */ O(
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
      ) : p ? /* @__PURE__ */ O(
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
      i ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
    ] }, `${s.text}-${a}`);
  }) }) });
}
const Lb = "_root_fkzb5_1", Rb = "_list_fkzb5_5", Pb = "_item_fkzb5_15", Bb = "_connector_fkzb5_21", Fb = "_connectorCompleted_fkzb5_30", Hb = "_step_fkzb5_34", Kb = "_active_fkzb5_69", qb = "_completed_fkzb5_75", Ub = "_circle_fkzb5_79", Wb = "_check_fkzb5_109", Vb = "_icon_fkzb5_114", Xb = "_number_fkzb5_119", Gb = "_text_fkzb5_124", _t = {
  root: Lb,
  list: Rb,
  item: Pb,
  connector: Bb,
  connectorCompleted: Fb,
  step: Hb,
  active: Kb,
  completed: qb,
  circle: Ub,
  check: Wb,
  icon: Vb,
  number: Xb,
  text: Gb
};
function $k({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: l,
  Linear: c,
  onChange: m,
  Change: s,
  onSelectedIndexChange: a,
  ariaLabel: i = "Steps",
  className: p
}) {
  const d = l ?? c ?? !1, $ = t ?? r, y = $ !== void 0, [N, v] = X(() => Math.min(Math.max(0, $ ?? o), Math.max(0, e.length - 1))), u = Math.min(Math.max(0, y ? $ : N), Math.max(0, e.length - 1)), _ = ae(null), h = H(
    (E) => {
      const f = Math.min(Math.max(0, E), Math.max(0, e.length - 1));
      y || v(f), (m ?? s ?? a)?.(f);
    },
    [y, m, s, a, e.length]
  ), w = H(
    (E, f) => !!(f.disabled || d && E > u + 1),
    [d, u]
  ), x = (E) => {
    const f = Array.from(
      E.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), k = document.activeElement, M = k ? f.indexOf(k) : -1;
    if (E.key === "ArrowRight" || E.key === "ArrowDown") {
      if (E.preventDefault(), f.length === 0) return;
      const I = M === -1 ? 0 : (M + 1) % f.length, D = f[I];
      D && D.focus();
    } else if (E.key === "ArrowLeft" || E.key === "ArrowUp") {
      if (E.preventDefault(), f.length === 0) return;
      const I = M === -1 ? f.length - 1 : (M - 1 + f.length) % f.length, D = f[I];
      D && D.focus();
    } else E.key === "Home" ? (E.preventDefault(), f[0]?.focus()) : E.key === "End" && (E.preventDefault(), f[f.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": i,
      className: [_t.root, p].filter(Boolean).join(" "),
      onKeyDown: x,
      children: /* @__PURE__ */ n("ol", { ref: _, role: "list", className: _t.list, children: e.map((E, f) => {
        const k = f === u, M = f < u, I = w(f, E);
        return /* @__PURE__ */ O("li", { role: "listitem", className: _t.item, children: [
          f > 0 ? /* @__PURE__ */ n("span", { className: [_t.connector, M ? _t.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              "data-step": f,
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
                I || h(f);
              },
              children: [
                /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Me, { name: "check", size: "sm" }) }) : E.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: E.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: f + 1 }) }),
                /* @__PURE__ */ n("span", { className: _t.text, children: E.text })
              ]
            }
          )
        ] }, `${E.text}-${f}`);
      }) })
    }
  );
}
const Yb = "_root_1axlw_1", Zb = "_horizontal_1axlw_13", Jb = "_vertical_1axlw_17", Qb = "_pane_1axlw_21", ey = "_handle_1axlw_31", ty = "_handleHorizontal_1axlw_51", ny = "_handleVertical_1axlw_57", ry = "_handleGrip_1axlw_63", sy = "_handleCollapseHint_1axlw_75", oy = "_collapseBtn_1axlw_79", ay = "_collapseBtnCollapsed_1axlw_109", $t = {
  root: Yb,
  horizontal: Zb,
  vertical: Jb,
  pane: Qb,
  handle: ey,
  handleHorizontal: ty,
  handleVertical: ny,
  handleGrip: ry,
  handleCollapseHint: sy,
  collapseBtn: oy,
  collapseBtnCollapsed: ay
};
function Mn(e, t) {
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
  const o = parseFloat(r);
  return Number.isNaN(o) ? t : o;
}
function Ht(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Nk({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: o,
  Resize: l,
  onCollapse: c,
  Collapse: m,
  ariaLabel: s = "Splitter",
  className: a
}) {
  const i = e ?? t ?? "horizontal", p = i === "horizontal", d = ae(null), $ = H(() => {
    const g = r.length;
    if (g === 0) return [];
    const C = r.map((A) => A.size ? Mn(A.size, 100 / g) : 100 / g), P = C.reduce((A, T) => A + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? C.map((A) => A / P * 100) : C;
  }, [r]), [y, N] = X(() => $()), [v, b] = X(() => r.map((g) => !!g.collapsed)), u = ae(y);
  we(() => {
    b(r.map((g) => !!g.collapsed));
  }, [r]);
  const _ = H(() => r.map((g) => Mn(g.min, 0)), [r]), h = H(() => r.map((g) => Mn(g.max, 100)), [r]), w = H(
    (g, C) => {
      const P = { paneIndex: g, newSize: C, cancel: !1 };
      return (o ?? l)?.(P), !P.cancel;
    },
    [o, l]
  ), x = H(
    (g, C) => {
      const P = { paneIndex: g, collapse: C, cancel: !1 };
      return (c ?? m)?.(P), !P.cancel;
    },
    [c, m]
  ), E = H(
    (g) => {
      const C = !v[g];
      x(g, C) && (C ? (u.current = [...y], b((P) => {
        const A = [...P];
        return A[g] !== void 0 && (A[g] = !0), A;
      }), N((P) => {
        const A = [...P], T = A[g] ?? 0, K = g < A.length - 1 ? g + 1 : g - 1;
        if (K >= 0 && K < A.length) {
          const V = A[K] ?? 0;
          A[K] = V + T, A[g] = 0;
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
    [v, y, r.length, x]
  ), f = ae(null), k = H(
    (g, C, P) => {
      const A = d.current;
      if (!A) return null;
      const T = A.getBoundingClientRect();
      let K;
      if (p) {
        if (T.width === 0) return null;
        K = (C - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        K = (P - T.top) / T.height * 100;
      }
      let V = 0;
      for (let Z = 0; Z < g; Z++) {
        const ee = y[Z];
        ee !== void 0 && (V += ee);
      }
      return K - V;
    },
    [p, y]
  ), M = (g, C) => {
    C.preventDefault();
    const P = C.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(C.pointerId), f.current = { handleIndex: g, pointerId: C.pointerId };
  }, I = (g) => {
    if (!f.current || f.current.pointerId !== g.pointerId) return;
    g.preventDefault();
    const C = f.current.handleIndex, P = k(C, g.clientX, g.clientY);
    if (P == null) return;
    const A = _(), T = h(), K = A[C] ?? 0, V = T[C] ?? 100, J = C + 1, Z = A[J] ?? 0, ee = T[J] ?? 100, ue = y[C] ?? 0, ie = y[J] ?? 0, U = ue + ie;
    if (U <= 0) return;
    let L = Ht(P, K, V), te = U - L;
    if (te < Z) {
      if (te = Z, L = U - te, L < K || L > V) return;
    } else if (te > ee && (te = ee, L = U - te, L < K || L > V))
      return;
    L = Ht(L, K, V), te = U - L, w(C, L) && N((G) => {
      const ce = [...G];
      return ce[C] = L, ce[J] = te, ce;
    });
  }, D = (g) => {
    !f.current || f.current.pointerId !== g.pointerId || (f.current = null);
  }, S = (g, C) => {
    const P = _(), A = h(), T = g, K = g + 1, V = y[T] ?? 0, J = y[K] ?? 0, Z = V + J;
    let ee = 0;
    const ue = !!r[T]?.collapsible, ie = !!r[K]?.collapsible;
    if (p ? C.key === "ArrowLeft" ? ee = -5 : C.key === "ArrowRight" && (ee = 5) : C.key === "ArrowUp" ? ee = -5 : C.key === "ArrowDown" && (ee = 5), C.key === "Home") {
      C.preventDefault();
      let U = P[T] ?? 0, L = Z - U;
      if (L = Ht(L, P[K] ?? 0, A[K] ?? 100), U = Z - L, U = Ht(U, P[T] ?? 0, A[T] ?? 100), !w(T, U)) return;
      N((te) => {
        const G = [...te];
        return G[T] = U, G[K] = L, G;
      });
      return;
    }
    if (C.key === "End") {
      C.preventDefault();
      let U = A[T] ?? 100;
      U = Math.min(U, Z - (P[K] ?? 0));
      let L = Z - U;
      if (L = Ht(L, P[K] ?? 0, A[K] ?? 100), U = Z - L, U = Ht(U, P[T] ?? 0, A[T] ?? 100), !w(T, U)) return;
      N((te) => {
        const G = [...te];
        return G[T] = U, G[K] = L, G;
      });
      return;
    }
    if ((C.key === "Enter" || C.key === " ") && (ue || ie)) {
      C.preventDefault(), E(ue ? T : K);
      return;
    }
    if (ee !== 0) {
      C.preventDefault();
      let U = V + ee, L = Z - U;
      const te = P[T] ?? 0, G = A[T] ?? 100, ce = P[K] ?? 0, oe = A[K] ?? 100;
      if (U = Ht(U, te, G), L = Z - U, (L < ce || L > oe) && (L = Ht(L, ce, oe), U = Z - L, U = Ht(U, te, G), L = Z - U), !w(T, U)) return;
      N((ye) => {
        const ve = [...ye];
        return ve[T] = U, ve[K] = L, ve;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [$t.root, p ? $t.horizontal : $t.vertical, a].filter(Boolean).join(" "),
      "aria-label": s,
      children: r.map((g, C) => {
        const P = !!v[C], A = P ? 0 : y[C] ?? 100 / r.length, T = P ? { display: "none" } : p ? { flexBasis: `${A}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${A}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, K = Mn(g.min, 0), V = Mn(g.max, 100), J = C < r.length - 1, Z = !!r[C + 1]?.collapsible;
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
          J ? /* @__PURE__ */ O(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": K,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(A),
              "aria-label": `Resize handle ${C + 1}`,
              tabIndex: P || v[C + 1] ? -1 : 0,
              className: [$t.handle, p ? $t.handleHorizontal : $t.handleVertical].filter(Boolean).join(" "),
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
const ly = "_root_exk72_1", iy = "_list_exk72_5", cy = "_vertical_exk72_14", dy = "_horizontal_exk72_20", uy = "_item_exk72_28", _y = "_link_exk72_32", fy = "_active_exk72_57", pn = {
  root: ly,
  list: iy,
  vertical: cy,
  horizontal: dy,
  item: uy,
  link: _y,
  active: fy
};
function Ok({
  items: e,
  selector: t,
  Selector: r,
  orientation: o,
  Orientation: l,
  onClick: c,
  Click: m,
  ariaLabel: s = "Table of contents",
  className: a
}) {
  const i = t ?? r, p = o ?? l ?? "vertical", [d, $] = X(() => e[0]?.selector ?? null), y = ae(d);
  y.current = d;
  const N = H(
    (v, b) => {
      if ($(v.selector), (c ?? m)?.({ text: v.text, selector: v.selector }), b) {
        try {
          b.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          b.scrollIntoView();
        }
        const _ = b;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [c, m]
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
    const _ = /* @__PURE__ */ new Map(), h = () => {
      let x = null, E = null;
      for (const k of e) {
        const M = document.querySelector(k.selector);
        if (!M) continue;
        _.set(k.selector, M);
        const I = M.getBoundingClientRect();
        let D = I.top;
        if (b !== window) {
          const S = b.getBoundingClientRect();
          D = I.top - S.top;
        }
        D <= 80 ? (!E || D > E.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (E = { sel: k.selector, el: M }) : (!x || D < x.top) && (x = { sel: k.selector, top: D });
      }
      const f = E?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      f && f !== y.current && $(f);
    }, w = () => {
      h();
    };
    if (typeof IntersectionObserver < "u") {
      const x = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: b, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      u = new IntersectionObserver((E) => {
        const f = E.filter((k) => k.isIntersecting).sort((k, M) => k.boundingClientRect.top - M.boundingClientRect.top);
        if (f[0]) {
          const k = f[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === k) {
              $(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && k.id === M.selector.slice(1)) {
              $(M.selector);
              break;
            }
          }
        } else
          h();
      }, x);
      for (const E of e) {
        const f = document.querySelector(E.selector);
        f && (u.observe(f), _.set(E.selector, f));
      }
    }
    return b === window ? (window.addEventListener("scroll", w, { passive: !0 }), h(), () => {
      window.removeEventListener("scroll", w), u?.disconnect();
    }) : (b.addEventListener("scroll", w, { passive: !0 }), h(), () => {
      b.removeEventListener("scroll", w), u?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ n("nav", { "aria-label": s, className: [pn.root, pn[p], a].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: pn.list, children: e.map((v) => {
    const b = v.selector === d;
    return /* @__PURE__ */ n("li", { className: pn.item, children: /* @__PURE__ */ n(
      "a",
      {
        href: v.selector.startsWith("#") || v.selector.startsWith(".") ? v.selector : `#${v.selector}`,
        className: [pn.link, b ? pn.active : null].filter(Boolean).join(" "),
        "aria-current": b ? "location" : void 0,
        onClick: (u) => {
          u.preventDefault();
          const _ = document.querySelector(v.selector);
          N(v, _);
        },
        children: v.text
      }
    ) }, `${v.text}-${v.selector}`);
  }) }) });
}
const py = "_root_1i6qn_1", my = "_viewport_1i6qn_17", hy = "_slide_1i6qn_24", gy = "_active_1i6qn_33", by = "_arrow_1i6qn_37", yy = "_prev_1i6qn_71", xy = "_next_1i6qn_75", ky = "_pauseBtn_1i6qn_79", vy = "_indicators_1i6qn_110", wy = "_indicator_1i6qn_110", $y = "_indicatorActive_1i6qn_145", Nt = {
  root: py,
  viewport: my,
  slide: hy,
  active: gy,
  arrow: by,
  prev: yy,
  next: xy,
  pauseBtn: ky,
  indicators: vy,
  indicator: wy,
  indicatorActive: $y
};
function Sk({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: l,
  Auto: c,
  interval: m,
  Interval: s,
  pauseOnHover: a,
  PauseOnHover: i,
  showArrows: p,
  ShowArrows: d,
  showIndicators: $,
  ShowIndicators: y,
  onChange: N,
  Change: v,
  ariaLabel: b = "Carousel",
  className: u
}) {
  const _ = t ?? r, h = _ !== void 0, [w, x] = X(() => Math.min(Math.max(0, _ ?? o), Math.max(0, e.length - 1))), E = h ? _ : w, f = e.length === 0 ? 0 : Math.min(Math.max(0, E), e.length - 1), k = l ?? c ?? !1, M = m ?? s ?? 3e3, I = a ?? i ?? !0, D = p ?? d ?? !0, S = $ ?? y ?? !0, [g, C] = X(!1), [P, A] = X(!1), T = g || P, K = ae(null), V = Ye(), J = H(
    (ce) => {
      const oe = e.length === 0 ? 0 : (ce % e.length + e.length) % e.length;
      h || x(oe), (N ?? v)?.(oe);
    },
    [h, N, v, e.length]
  ), Z = H(() => {
    J(f - 1);
  }, [J, f]), ee = H(() => {
    J(f + 1);
  }, [J, f]), ue = H(
    (ce) => {
      J(ce);
    },
    [J]
  );
  we(() => {
    if (!k || T || e.length <= 1) return;
    const ce = setInterval(() => {
      J(f + 1);
    }, M);
    return () => clearInterval(ce);
  }, [k, T, M, f, J, e.length]);
  const ie = (ce) => {
    e.length !== 0 && (ce.key === "ArrowLeft" ? (ce.preventDefault(), Z()) : ce.key === "ArrowRight" ? (ce.preventDefault(), ee()) : ce.key === "Home" ? (ce.preventDefault(), ue(0)) : ce.key === "End" && (ce.preventDefault(), ue(e.length - 1)));
  }, U = () => {
    I && k && A(!0);
  }, L = () => {
    I && k && A(!1);
  }, te = () => {
    I && k && A(!0);
  }, G = () => {
    I && k && A(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ O(
    "div",
    {
      ref: K,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [Nt.root, u].filter(Boolean).join(" "),
      onKeyDown: ie,
      onMouseEnter: U,
      onMouseLeave: L,
      onFocusCapture: te,
      onBlurCapture: G,
      children: [
        /* @__PURE__ */ n("div", { id: V, className: Nt.viewport, children: e.map((ce, oe) => {
          const ye = oe === f;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${oe + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [Nt.slide, ye ? Nt.active : null].filter(Boolean).join(" "),
              children: ce
            },
            oe
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ O(Ee, { children: [
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
          const ye = oe === f;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Nt.indicator, ye ? Nt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${oe + 1}`,
              "aria-current": ye ? "true" : void 0,
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
const Ny = "_root_1arpg_1", Oy = "_group_1arpg_20", Sy = "_itemWrapper_1arpg_30", zy = "_treeitem_1arpg_34", Dy = "_disabled_1arpg_50", My = "_selected_1arpg_60", Cy = "_caret_1arpg_66", Ey = "_caretIcon_1arpg_113", Iy = "_caretOpen_1arpg_120", Ay = "_caretPlaceholder_1arpg_124", Ty = "_label_1arpg_130", jy = "_loading_1arpg_137", Ly = "_loadingRow_1arpg_143", Ry = "_empty_1arpg_149", Py = "_checkbox_1arpg_155", rt = {
  root: Ny,
  group: Oy,
  itemWrapper: Sy,
  treeitem: zy,
  disabled: Dy,
  selected: My,
  caret: Cy,
  caretIcon: Ey,
  caretOpen: Iy,
  caretPlaceholder: Ay,
  label: Ty,
  loading: jy,
  loadingRow: Ly,
  empty: Ry,
  checkbox: Py
};
function By({
  indeterminate: e,
  ...t
}) {
  const r = ae(null);
  return we(() => {
    r.current && (r.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: r, type: "checkbox", ...t });
}
function zk({
  data: e,
  Data: t,
  children: r,
  Children: o,
  textProperty: l,
  TextProperty: c,
  keyProperty: m,
  KeyProperty: s,
  selectionMode: a,
  SelectionMode: i,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: $,
  SelectedItems: y,
  defaultSelectedItem: N,
  defaultSelectedItems: v,
  onChange: b,
  Change: u,
  onExpand: _,
  Expand: h,
  onCollapse: w,
  Collapse: x,
  loadChildData: E,
  LoadChildData: f,
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
  allowCheckChildren: K = !0,
  className: V
}) {
  const J = e ?? t ?? [], Z = r ?? o, ee = l ?? c ?? "text", ue = m ?? s ?? "id", ie = a ?? i ?? "single", U = S ?? g ?? "Tree", L = E ?? f, te = k ?? M ?? I ?? D, G = H(
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
  ), ye = H(
    (B) => {
      const Y = /* @__PURE__ */ new Set(), se = (pe) => {
        for (const fe of pe) {
          const xe = G(fe);
          fe.expanded && Y.add(xe);
          const je = oe(fe);
          je && je.length > 0 && se(je);
        }
      };
      return se(B), Y;
    },
    [G, oe]
  ), [ve, Be] = X(() => ye(J)), [ke, We] = X(() => /* @__PURE__ */ new Map()), [be, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = p ?? d, Re = $ ?? y, et = ie === "multiple" ? Re !== void 0 : Ve !== void 0, W = H(() => {
    if (ie === "multiple") {
      if (v && v.length > 0)
        return new Set(v.map((se) => G(se)));
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
  }, [ie, N, v, G, oe, J]), [z, F] = X(() => W()), ne = $e(() => {
    if (ie === "multiple") {
      if (Re !== void 0) {
        const B = Re;
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
  }, [ie, Re, Ve, z, G]), _e = H(
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
          const fe = b ?? u;
          if (fe) {
            const xe = re(), je = [];
            for (const j of pe) {
              const R = xe.get(j) ?? _e(j);
              R && je.push(R);
            }
            fe({ item: B, selectedItems: je });
          }
        } else if (!ne.has(Y) || ne.size !== 1 || !ne.has(Y)) {
          et || F(/* @__PURE__ */ new Set([Y]));
          const fe = b ?? u;
          fe && fe({ item: B, selectedItem: B });
        } else {
          const fe = b ?? u;
          fe && fe({ item: B, selectedItem: B });
        }
    },
    [G, ie, ne, et, b, u, re, _e]
  ), Ne = H(
    async (B) => {
      const Y = G(B);
      if (!!B.disabled) return;
      const pe = ve.has(Y), fe = _ ?? h, xe = w ?? x, je = oe(B), R = ke.get(Y) ?? je, me = !(R !== void 0 && R.length > 0) && L != null;
      if (pe) {
        Be((Ie) => {
          const Ae = new Set(Ie);
          return Ae.delete(Y), Ae;
        }), xe?.({ item: B });
        return;
      }
      if (me) {
        if (be.has(Y)) return;
        Ze((Ie) => {
          const Ae = new Set(Ie);
          return Ae.add(Y), Ae;
        });
        try {
          const Ae = await L(B);
          We((De) => {
            const at = new Map(De);
            return at.set(Y, Ae), at;
          }), Be((De) => {
            const at = new Set(De);
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
    [G, ve, oe, ke, L, be, _, h, w, x]
  ), Fe = $e(() => {
    const B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Set(), pe = (fe, xe) => {
      for (const je of fe) {
        const j = G(je);
        B.has(j) || B.set(j, []), Y.set(j, xe), je.disabled && se.add(j);
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
  ), [dt, xt] = X(
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
      if (!C || !K) return !1;
      const Y = Se(B);
      return Y.length > 0 && Y.every((se) => Q.has(se));
    },
    [Q, C, K, Se]
  ), Ut = H(
    (B) => {
      if (!C || !K || Q.has(B)) return !1;
      const Y = Se(B);
      if (Y.length === 0) return !1;
      const se = Y.filter((pe) => Q.has(pe)).length;
      return se > 0 && se < Y.length;
    },
    [Q, C, K, Se]
  ), Ot = H(
    (B) => {
      if (!C || B.disabled) return;
      const Y = G(B), se = new Set(Q);
      if (se.has(Y) || nt(Y)) {
        if (se.delete(Y), K)
          for (const pe of Se(Y)) se.delete(pe);
      } else if (se.add(Y), K)
        for (const pe of Se(Y)) se.add(pe);
      P === void 0 && xt(se), T?.([...se]);
    },
    [
      C,
      K,
      P,
      Q,
      Se,
      G,
      nt,
      T
    ]
  ), ze = $e(() => {
    const B = [], Y = (se, pe, fe) => {
      se.forEach((xe, je) => {
        const j = G(xe), R = ce(xe), le = ke.get(j) ?? oe(xe);
        let me;
        ke.has(j) ? me = ke.get(j).length > 0 : le !== void 0 ? me = le.length > 0 : L ? me = !0 : me = !1;
        const Ie = ve.has(j), Ae = !!xe.disabled, De = se.length, at = je + 1;
        if (B.push({
          item: xe,
          key: j,
          text: R,
          level: pe,
          posInSet: at,
          setSize: De,
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
  }, [J, G, ce, oe, ke, ve, L, be]), [Xe, kt] = X(() => ze[0]?.key ?? null), Lt = ae(""), Zt = ae(null), q = ae(null);
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
      const B = q.current?.querySelector(`[data-key="${CSS.escape(Xe)}"]`);
      let Y = null;
      B || (Y = q.current?.querySelector(`[data-key="${Xe}"]`) ?? null);
      const se = B ?? Y;
      se && document.activeElement !== se && q.current?.contains(document.activeElement) && se.focus();
    }
  }, [Xe]);
  const de = H(
    (B) => {
      kt(B), requestAnimationFrame(() => {
        const Y = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
        let se = q.current?.querySelector(`[data-key="${Y}"]`);
        se || (se = q.current?.querySelector(`[data-key="${B}"]`) ?? null), se?.focus();
      });
    },
    []
  ), Pe = H(
    (B) => ze.find((se) => se.key === B)?.parentKey ?? null,
    [ze]
  ), Ke = H(
    (B) => {
      if (ze.length === 0) return;
      const Y = Xe ? ze.findIndex((fe) => fe.key === Xe) : -1, se = Y >= 0 ? ze[Y] : void 0;
      let pe = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), Y === -1)
          pe = ze[0]?.key ?? null;
        else {
          const fe = (Y + 1) % ze.length, xe = ze[fe];
          xe && (pe = xe.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), Y === -1) {
          const fe = ze[ze.length - 1];
          fe && (pe = fe.key);
        } else {
          const fe = (Y - 1 + ze.length) % ze.length, xe = ze[fe];
          xe && (pe = xe.key);
        }
        pe && de(pe);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !se) return;
        if (se.hasChildren && !se.expanded)
          Ne(se.item);
        else if (se.hasChildren && se.expanded) {
          const fe = Y + 1, xe = ze[fe];
          xe && xe.parentKey === se.key && de(xe.key);
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
        const fe = (Lt.current + B.key).toLowerCase();
        Lt.current = fe, Zt.current && clearTimeout(Zt.current), Zt.current = setTimeout(() => {
          Lt.current = "";
        }, 500);
        const xe = Y >= 0 ? Y + 1 : 0, R = [...ze, ...ze].slice(xe, xe + ze.length).find((le) => le.text.toLowerCase().startsWith(fe));
        R && de(R.key);
        return;
      }
    },
    [ze, Xe, de, Ne, he, Pe, C, Ot]
  ), Rt = H(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && kt(B.key);
    }
  }, [Xe, ze]), St = (B, Y, se) => /* @__PURE__ */ n("ul", { role: "group", className: rt.group, children: B.map((pe, fe) => {
    const xe = G(pe), je = ce(pe), j = ke.get(xe) ?? oe(pe);
    let R;
    ke.has(xe) ? R = ke.get(xe).length > 0 : j !== void 0 ? R = j.length > 0 : L ? R = !0 : R = !1;
    const le = ve.has(xe), me = ne.has(xe), Ie = !!pe.disabled, Ae = be.has(xe), De = Xe === xe, at = B.length, zt = fe + 1, Zr = te ? te(pe) : je, ur = C ? {
      checked: nt(xe),
      indeterminate: Ut(xe)
    } : null;
    return /* @__PURE__ */ O("li", { role: "none", className: rt.itemWrapper, children: [
      /* @__PURE__ */ O(
        "div",
        {
          role: "treeitem",
          "data-key": xe,
          tabIndex: De ? 0 : -1,
          "aria-expanded": R ? le : void 0,
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
            De ? rt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            de(xe), Ie || he(pe);
          },
          onFocus: () => kt(xe),
          children: [
            C ? /* @__PURE__ */ n(
              By,
              {
                className: rt.checkbox,
                checked: ur?.checked ?? !1,
                indeterminate: ur?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${je}`,
                onClick: (jn) => jn.stopPropagation(),
                onChange: () => Ot(pe)
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
                onClick: (jn) => {
                  jn.stopPropagation(), de(xe), Ne(pe);
                },
                children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [rt.caretIcon, le ? rt.caretOpen : null].filter(Boolean).join(" "), children: /* @__PURE__ */ n(Me, { name: "chevron-right", size: 10 }) })
              }
            ) : /* @__PURE__ */ n("span", { className: rt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ n("span", { className: rt.label, children: Zr }),
            Ae ? /* @__PURE__ */ n("span", { className: rt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && le ? Ae ? /* @__PURE__ */ n("div", { className: rt.loadingRow, "aria-busy": "true", children: "Loading…" }) : j && j.length > 0 ? St(j, Y + 1) : ke.has(xe) && ke.get(xe).length > 0 ? St(ke.get(xe), Y + 1) : (j && j.length === 0, null) : null
    ] }, xe);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: q,
      role: "tree",
      "aria-label": U,
      "aria-multiselectable": ie === "multiple" || void 0,
      tabIndex: 0,
      className: [rt.root, V].filter(Boolean).join(" "),
      onKeyDown: Ke,
      onFocus: Rt,
      children: J.length === 0 ? /* @__PURE__ */ n("div", { className: rt.empty, children: "No items" }) : St(J, 1)
    }
  );
}
const Fy = "_root_ky8zf_1", Hy = "_panel_ky8zf_8", Ky = "_header_ky8zf_19", qy = "_listbox_ky8zf_28", Uy = "_option_ky8zf_42", Wy = "_disabled_ky8zf_57", Vy = "_active_ky8zf_66", Xy = "_selected_ky8zf_70", Gy = "_empty_ky8zf_86", Yy = "_controls_ky8zf_93", Zy = "_reorder_ky8zf_102", Jy = "_btn_ky8zf_110", Le = {
  root: Fy,
  panel: Hy,
  header: Ky,
  listbox: qy,
  option: Uy,
  disabled: Wy,
  active: Vy,
  selected: Xy,
  empty: Gy,
  controls: Yy,
  reorder: Zy,
  btn: Jy
};
function st(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function Un(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Dk({
  source: e,
  Source: t,
  target: r,
  Target: o,
  value: l,
  Value: c,
  targetValue: m,
  TargetValue: s,
  data: a,
  Data: i,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: $,
  TargetChange: y,
  keyProperty: N,
  KeyProperty: v,
  onMove: b,
  Move: u,
  ariaLabel: _,
  AriaLabel: h,
  className: w
}) {
  const x = N ?? v ?? "id", E = _ ?? h ?? "PickList", f = e ?? t ?? l ?? c ?? a ?? i ?? [], k = r ?? o ?? m ?? s ?? [], [M, I] = X(() => [...f]), [D, S] = X(() => [...k]);
  we(() => {
    const z = e ?? t ?? l ?? c ?? a ?? i;
    z !== void 0 && I([...z]);
  }, [e, t, l, c, a, i]), we(() => {
    const z = r ?? o ?? m ?? s;
    z !== void 0 && S([...z]);
  }, [r, o, m, s]);
  const [g, C] = X(() => /* @__PURE__ */ new Set()), [P, A] = X(() => /* @__PURE__ */ new Set()), [T, K] = X(() => {
    const z = f.findIndex((F) => !F.disabled);
    return z >= 0 ? z : 0;
  }), [V, J] = X(() => {
    const z = k.findIndex((F) => !F.disabled);
    return z >= 0 ? z : 0;
  }), Z = $e(() => M.map((z, F) => z.disabled ? -1 : F).filter((z) => z >= 0), [M]), ee = $e(() => D.map((z, F) => z.disabled ? -1 : F).filter((z) => z >= 0), [D]);
  we(() => {
    if (T >= M.length) {
      const z = Z[Z.length - 1];
      K(z ?? 0);
    } else if (M.length > 0 && Z.length > 0 && !Z.includes(T)) {
      const z = Z[0];
      z !== void 0 && K(z);
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
        M.some((re) => st(re, x) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [M, x]), we(() => {
    A((z) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of z)
        D.some((re) => st(re, x) === ne && !re.disabled) && F.add(ne);
      return F;
    });
  }, [D, x]);
  const ue = H(
    (z) => {
      (p ?? d)?.(z);
    },
    [p, d]
  ), ie = H(
    (z) => {
      ($ ?? y)?.(z);
    },
    [$, y]
  ), U = H(
    (z) => {
      (b ?? u)?.(z);
    },
    [b, u]
  ), L = H(
    (z) => {
      const F = M[z];
      if (!F || F.disabled) return;
      const ne = st(F, x);
      C((_e) => {
        const re = new Set(_e);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), K(z);
    },
    [M, x]
  ), te = H(
    (z) => {
      const F = D[z];
      if (!F || F.disabled) return;
      const ne = st(F, x);
      A((_e) => {
        const re = new Set(_e);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), J(z);
    },
    [D, x]
  ), G = H(() => {
    const z = [], F = [];
    for (const he of M) {
      const Ne = st(he, x);
      g.has(Ne) && !he.disabled ? z.push(he) : F.push(he);
    }
    if (z.length === 0) return;
    const ne = F, _e = [...D, ...z];
    I(ne), S(_e), C(/* @__PURE__ */ new Set());
    const re = new Set(z.map((he) => st(he, x)));
    A(re), ue(ne), ie(_e), U({ source: ne, target: _e, moved: z, direction: "toTarget" });
  }, [M, D, g, x, ue, ie, U]), ce = H(() => {
    const z = [], F = [];
    for (const he of D) {
      const Ne = st(he, x);
      P.has(Ne) && !he.disabled ? z.push(he) : F.push(he);
    }
    if (z.length === 0) return;
    const ne = F, _e = [...M, ...z];
    S(ne), I(_e), A(/* @__PURE__ */ new Set());
    const re = new Set(z.map((he) => st(he, x)));
    C(re), ue(_e), ie(ne), U({ source: _e, target: ne, moved: z, direction: "toSource" });
  }, [M, D, P, x, ue, ie, U]), oe = H(() => {
    const z = M.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const F = M.filter((_e) => !!_e.disabled), ne = [...D, ...z];
    I(F), S(ne), C(/* @__PURE__ */ new Set()), ue(F), ie(ne), U({ source: F, target: ne, moved: z, direction: "allToTarget" });
  }, [M, D, x, ue, ie, U]), ye = H(() => {
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
      const Fe = st(he, x), Je = st(Ne, x);
      F.has(Fe) && !F.has(Je) && !he.disabled && !Ne.disabled && (z[re - 1] = he, z[re] = Ne, ne.push(he));
    }
    if (ne.length === 0) return;
    S(z), ie(z), U({ source: M, target: z, moved: ne, direction: "up" });
    const _e = Array.from(F)[0];
    if (_e) {
      const re = z.findIndex((he) => st(he, x) === _e);
      re >= 0 && J(re);
    }
  }, [D, P, x, M, ie, U]), Be = H(() => {
    if (P.size === 0) return;
    const z = [...D], F = P, ne = [];
    for (let re = z.length - 2; re >= 0; re--) {
      const he = z[re], Ne = z[re + 1];
      if (!he || !Ne) continue;
      const Fe = st(he, x), Je = st(Ne, x);
      F.has(Fe) && !F.has(Je) && !he.disabled && !Ne.disabled && (z[re] = Ne, z[re + 1] = he, ne.push(he));
    }
    if (ne.length === 0) return;
    S(z), ie(z), U({ source: M, target: z, moved: ne, direction: "down" });
    const _e = Array.from(F)[0];
    if (_e) {
      const re = z.findIndex((he) => st(he, x) === _e);
      re >= 0 && J(re);
    }
  }, [D, P, x, M, ie, U]), ke = g.size > 0, We = P.size > 0, be = ae(""), Ze = ae(null), Ve = ae(""), Re = ae(null), tt = H(
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
        z.preventDefault(), L(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (be.current + z.key).toLowerCase();
        be.current = re, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const he = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = he.slice(Ne).find((Je) => Un(M[Je]).toLowerCase().startsWith(re));
        Fe != null && K(Fe);
        return;
      }
      _e >= 0 && K(_e);
    },
    [M, Z, T, L]
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
        Ve.current = re, Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const he = [...F, ...F], Ne = F.indexOf(ne) + 1, Fe = he.slice(Ne).find((Je) => Un(D[Je]).toLowerCase().startsWith(re));
        Fe != null && J(Fe);
        return;
      }
      _e >= 0 && J(_e);
    },
    [D, ee, V, te]
  ), et = ae(null), W = ae(null);
  return /* @__PURE__ */ O("div", { className: [Le.root, w].filter(Boolean).join(" "), "aria-label": E, children: [
    /* @__PURE__ */ O("div", { className: Le.panel, children: [
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
          children: M.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : M.map((z, F) => {
            const ne = st(z, x), _e = g.has(ne), re = F === T, he = !!z.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": _e,
                "aria-disabled": he || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Le.option,
                  _e ? Le.selected : null,
                  re ? Le.active : null,
                  he ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => L(F),
                children: Un(z)
              },
              ne
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ O("div", { className: Le.controls, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
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
          className: Le.btn,
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
          className: Le.btn,
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
          "aria-disabled": D.filter((z) => !z.disabled).length === 0 || void 0,
          disabled: D.filter((z) => !z.disabled).length === 0,
          onClick: ye,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ O("div", { className: Le.panel, children: [
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
          children: D.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : D.map((z, F) => {
            const ne = st(z, x), _e = P.has(ne), re = F === V, he = !!z.disabled;
            return /* @__PURE__ */ n(
              "div",
              {
                role: "option",
                "aria-selected": _e,
                "aria-disabled": he || void 0,
                tabIndex: -1,
                "data-active": re || void 0,
                className: [
                  Le.option,
                  _e ? Le.selected : null,
                  re ? Le.active : null,
                  he ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => te(F),
                children: Un(z)
              },
              ne
            );
          })
        }
      ),
      /* @__PURE__ */ O("div", { className: Le.reorder, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move up",
            "aria-disabled": !We || void 0,
            disabled: !We,
            onClick: ve,
            children: /* @__PURE__ */ n(Me, { name: "chevron-up", size: "sm" })
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
            children: /* @__PURE__ */ n(Me, { name: "chevron-down", size: "sm" })
          }
        )
      ] })
    ] })
  ] });
}
const Qy = "_root_928ty_1", ex = "_header_928ty_8", tx = "_title_928ty_15", nx = "_navBtn_928ty_20", rx = "_resources_928ty_39", sx = "_resource_928ty_39", ox = "_grid_928ty_50", ax = "_timeCol_928ty_55", lx = "_timeCell_928ty_61", ix = "_dayCol_928ty_66", cx = "_dayHeader_928ty_73", dx = "_slot_928ty_81", ux = "_event_928ty_91", ft = {
  root: Qy,
  header: ex,
  title: tx,
  navBtn: nx,
  resources: rx,
  resource: sx,
  grid: ox,
  timeCol: ax,
  timeCell: lx,
  dayCol: ix,
  dayHeader: cx,
  slot: dx,
  event: ux
};
function Tr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Mk({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: o,
  resources: l,
  onEventClick: c,
  onSlotClick: m,
  ariaLabel: s = "Scheduler",
  className: a
}) {
  const [i, p] = X(r ?? /* @__PURE__ */ new Date()), d = r ?? i, $ = (v) => {
    r || p(v), o?.(v);
  }, y = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (v, b) => {
    const u = new Date(d);
    return u.setDate(d.getDate() - d.getDay() + b), u;
  }) : Array.from({ length: 30 }, (v, b) => {
    const u = new Date(d);
    return u.setDate(1 + b), u;
  }), N = Array.from({ length: 12 }, (v, b) => 8 + b);
  return /* @__PURE__ */ O("div", { className: [ft.root, a].filter(Boolean).join(" "), role: "group", "aria-label": s, children: [
    /* @__PURE__ */ O("div", { className: ft.header, children: [
      /* @__PURE__ */ n("button", { type: "button", className: ft.navBtn, "aria-label": "Previous", onClick: () => {
        const v = new Date(d);
        v.setDate(v.getDate() - 7), $(v);
      }, children: "‹" }),
      /* @__PURE__ */ n("span", { className: ft.title, children: d.toLocaleDateString() }),
      /* @__PURE__ */ n("button", { type: "button", className: ft.navBtn, "aria-label": "Next", onClick: () => {
        const v = new Date(d);
        v.setDate(v.getDate() + 7), $(v);
      }, children: "›" })
    ] }),
    l && /* @__PURE__ */ n("div", { className: ft.resources, children: l.map((v) => /* @__PURE__ */ n("div", { className: ft.resource, role: "presentation", "aria-label": v.name, children: v.name }, v.id)) }),
    /* @__PURE__ */ O("div", { className: ft.grid, role: "presentation", children: [
      /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: N.map((v) => /* @__PURE__ */ O("div", { className: ft.timeCell, children: [
        v,
        ":00"
      ] }, v)) }),
      y.map((v) => /* @__PURE__ */ O("div", { className: ft.dayCol, role: "presentation", title: v.toLocaleDateString(), onClick: () => m?.({ date: v }), tabIndex: 0, "aria-label": v.toLocaleDateString(), children: [
        /* @__PURE__ */ n("div", { className: ft.dayHeader, children: v.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        N.map((b) => /* @__PURE__ */ n("div", { className: ft.slot, tabIndex: -1, onClick: () => {
          const u = new Date(v);
          u.setHours(b), m?.({ date: u });
        } }, b)),
        e.filter((b) => b.start.toDateString() === v.toDateString()).map((b) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ft.event,
            "aria-label": `${b.title} ${Tr(b.start)} - ${Tr(b.end)}`,
            "aria-pressed": !1,
            onClick: () => c?.({ event: b }),
            children: b.title
          },
          b.id
        ))
      ] }, v.toISOString()))
    ] })
  ] });
}
const _x = "_root_1n0oq_1", fx = "_header_1n0oq_8", px = "_headerCell_1n0oq_15", mx = "_timeline_1n0oq_21", hx = "_row_1n0oq_26", gx = "_taskName_1n0oq_32", bx = "_timelineCell_1n0oq_37", yx = "_bar_1n0oq_43", xx = "_progress_1n0oq_56", kx = "_dep_1n0oq_61", jt = {
  root: _x,
  header: fx,
  headerCell: px,
  timeline: mx,
  row: hx,
  taskName: gx,
  timelineCell: bx,
  bar: yx,
  progress: xx,
  dep: kx
};
function Ck({ tasks: e, view: t = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: l }) {
  const [c, m] = X(null);
  return /* @__PURE__ */ O("div", { className: [jt.root, l].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
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
const vx = "_root_1p46p_1", wx = "_fields_1p46p_6", $x = "_chip_1p46p_13", Nx = "_table_1p46p_35", Ox = "_totalRow_1p46p_55", Sx = "_total_1p46p_55", mn = {
  root: vx,
  fields: wx,
  chip: $x,
  table: Nx,
  totalRow: Ox,
  total: Sx
}, Wn = {
  Sum: (e) => e.reduce((t, r) => t + r, 0),
  Average: (e) => e.length ? e.reduce((t, r) => t + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Cn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Ek({ data: e, rowFields: t = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: l, ariaLabel: c = "Pivot table", className: m }) {
  const s = t, a = r, i = o, p = (b, u, _) => {
    const h = b === "row" ? s.filter((E) => E.property !== u) : s, w = b === "col" ? a.filter((E) => E.property !== u) : a, x = b === "agg" ? i.filter((E) => !(E.property === u && E.aggregate === _)) : i;
    l?.({ rowFields: h, columnFields: w, aggregateFields: x });
  }, d = (b, u) => u.map((_) => String(b[_.property])).join(""), $ = [...new Set(s.length ? e.map((b) => d(b, s)) : [""])].sort(), y = [...new Set(a.length ? e.map((b) => d(b, a)) : [""])].sort(), N = (b, u, _) => {
    const h = e.filter((x) => d(x, s) === b && d(x, a) === u), w = h.map((x) => Number(x[_.property])).filter((x) => !Number.isNaN(x));
    return !w.length && _.aggregate !== "Count" ? 0 : Wn[_.aggregate](_.aggregate === "Count" ? h.map(() => 1) : w);
  }, v = (b, u, _, h) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: mn.chip,
      "aria-label": `Remove ${b} field ${_}`,
      onClick: () => p(b, u, h),
      children: [
        _,
        h ? ` (${h})` : ""
      ]
    },
    `${b}-${_}-${h ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [mn.root, m].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: mn.fields, children: [
      s.map((b) => v("row", b.property, b.title ?? b.property)),
      a.map((b) => v("col", b.property, b.title ?? b.property)),
      i.map((b) => v("agg", b.property, b.title ?? b.property, b.aggregate))
    ] }),
    /* @__PURE__ */ O("table", { className: mn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        y.map((b) => /* @__PURE__ */ n("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ O("tbody", { children: [
        $.map((b) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: b || "—" }),
          y.map((u) => /* @__PURE__ */ n("td", { title: Cn(N(b, u, i[0] ?? { property: "", aggregate: "Count" })), children: i.length ? Cn(N(b, u, i[0])) : "" }, u)),
          /* @__PURE__ */ n("td", { className: mn.total, children: i.length ? Cn(
            Wn[i[0].aggregate](
              y.flatMap((u) => e.filter((_) => d(_, s) === b && d(_, a) === u).map((_) => Number(_[i[0].property]))).filter((u) => !Number.isNaN(u))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ O("tr", { className: mn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          y.map((b) => /* @__PURE__ */ n("td", { children: i.length ? Cn(
            Wn[i[0].aggregate](
              e.filter((u) => d(u, a) === b).map((u) => Number(u[i[0].property])).filter((u) => !Number.isNaN(u))
            )
          ) : "" }, b)),
          /* @__PURE__ */ n("td", { children: i.length ? Cn(Wn[i[0].aggregate](e.map((b) => Number(b[i[0].property])).filter((b) => !Number.isNaN(b)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const zx = "_root_1axvl_1", Dx = "_reverse_1axvl_10", Mx = "_item_1axvl_14", Cx = "_marker_1axvl_35", Ex = "_body_1axvl_46", Ix = "_label_1axvl_50", Ax = "_content_1axvl_56", sn = {
  root: zx,
  reverse: Dx,
  item: Mx,
  marker: Cx,
  body: Ex,
  label: Ix,
  content: Ax
};
function Ik({ items: e, reverse: t = !1, ariaLabel: r = "Timeline", className: o }) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [sn.root, t ? sn.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: l.map((c, m) => /* @__PURE__ */ O("li", { className: sn.item, children: [
        /* @__PURE__ */ n("span", { className: sn.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ O("div", { className: sn.body, children: [
          /* @__PURE__ */ n("div", { className: sn.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: sn.content, children: c.content })
        ] })
      ] }, m))
    }
  );
}
const Tx = "_root_4ls7q_1", jx = "_header_4ls7q_13", Lx = "_headCell_4ls7q_22", Rx = "_row_4ls7q_32", Px = "_cell_4ls7q_37", En = {
  root: Tx,
  header: jx,
  headCell: Lx,
  row: Rx,
  cell: Px
};
function Ak({ count: e, rowHeight: t = 40, height: r = 320, loadData: o, columns: l = [], ariaLabel: c = "Virtual grid", className: m }) {
  const [s, a] = X(/* @__PURE__ */ new Map()), [i, p] = X(0), d = ae(/* @__PURE__ */ new Set()), $ = Math.ceil(r / t), y = Math.max(0, Math.floor(i / t) - 3), N = Math.min(e, y + $ + 6), v = H(
    (u, _) => {
      let h = !1;
      for (let w = u; w < _; w++)
        !s.has(w) && !d.current.has(w) && (h = !0);
      if (h) {
        for (let w = u; w < _; w++) d.current.add(w);
        o({ skip: u, top: _ }).then((w) => {
          a((x) => {
            const E = new Map(x);
            return w.forEach((f, k) => E.set(u + k, f)), E;
          });
          for (let x = u; x < _; x++) d.current.delete(x);
        });
      }
    },
    [s, o]
  );
  we(() => {
    v(y, N);
  }, [y, N]);
  const b = [];
  for (let u = y; u < N; u++) {
    const _ = s.get(u) ?? {};
    b.push(
      /* @__PURE__ */ n("div", { className: En.row, role: "row", style: { height: t }, children: l.map((h) => /* @__PURE__ */ n("div", { role: "gridcell", className: En.cell, style: h.width ? { width: h.width } : void 0, children: String(_[h.property] ?? "") }, h.property)) }, u)
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [En.root, m].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (u) => p(u.target.scrollTop),
      onKeyDown: (u) => {
        const _ = u.currentTarget;
        u.key === "ArrowDown" ? (u.preventDefault(), _.scrollTop += t) : u.key === "ArrowUp" ? (u.preventDefault(), _.scrollTop -= t) : u.key === "PageDown" ? (u.preventDefault(), _.scrollTop += r) : u.key === "PageUp" && (u.preventDefault(), _.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: y * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: En.header, role: "row", children: l.map((u) => /* @__PURE__ */ n("div", { role: "columnheader", className: En.headCell, style: { height: t, ...u.width ? { width: u.width } : {} }, children: u.title ?? u.property }, u.property)) }),
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
    constructor(s, a, i, p) {
      if (this.version = s, this.errorCorrectionLevel = a, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7)
        throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
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
          const v = this.getPenaltyScore();
          v < y && (p = N, y = v), this.applyMask(N);
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
    static encodeText(s, a) {
      const i = e.QrSegment.makeSegments(s);
      return t.encodeSegments(i, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, a) {
      const i = e.QrSegment.makeBytes(s);
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
    static encodeSegments(s, a, i = 1, p = 40, d = -1, $ = !0) {
      if (!(t.MIN_VERSION <= i && i <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let y, N;
      for (y = i; ; y++) {
        const _ = t.getNumDataCodewords(y, a) * 8, h = c.getTotalBits(s, y);
        if (h <= _) {
          N = h;
          break;
        }
        if (y >= p)
          throw new RangeError("Data too long");
      }
      for (const _ of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        $ && N <= t.getNumDataCodewords(y, _) * 8 && (a = _);
      let v = [];
      for (const _ of s) {
        r(_.mode.modeBits, 4, v), r(_.numChars, _.mode.numCharCountBits(y), v);
        for (const h of _.getData())
          v.push(h);
      }
      l(v.length == N);
      const b = t.getNumDataCodewords(y, a) * 8;
      l(v.length <= b), r(0, Math.min(4, b - v.length), v), r(0, (8 - v.length % 8) % 8, v), l(v.length % 8 == 0);
      for (let _ = 236; v.length < b; _ ^= 253)
        r(_, 8, v);
      let u = [];
      for (; u.length * 8 < v.length; )
        u.push(0);
      return v.forEach((_, h) => u[h >>> 3] |= _ << 7 - (h & 7)), new t(y, a, u, d);
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
      for (let i = 0; i < this.size; i++)
        this.setFunctionModule(6, i, i % 2 == 0), this.setFunctionModule(i, 6, i % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), a = s.length;
      for (let i = 0; i < a; i++)
        for (let p = 0; p < a; p++)
          i == 0 && p == 0 || i == 0 && p == a - 1 || i == a - 1 && p == 0 || this.drawAlignmentPattern(s[i], s[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const a = this.errorCorrectionLevel.formatBits << 3 | s;
      let i = a;
      for (let d = 0; d < 10; d++)
        i = i << 1 ^ (i >>> 9) * 1335;
      const p = (a << 10 | i) ^ 21522;
      l(p >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, o(p, d));
      this.setFunctionModule(8, 7, o(p, 6)), this.setFunctionModule(8, 8, o(p, 7)), this.setFunctionModule(7, 8, o(p, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, o(p, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, o(p, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, o(p, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let s = this.version;
      for (let i = 0; i < 12; i++)
        s = s << 1 ^ (s >>> 11) * 7973;
      const a = this.version << 12 | s;
      l(a >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const p = o(a, i), d = this.size - 11 + i % 3, $ = Math.floor(i / 3);
        this.setFunctionModule(d, $, p), this.setFunctionModule($, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, a) {
      for (let i = -4; i <= 4; i++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(i)), $ = s + p, y = a + i;
          0 <= $ && $ < this.size && 0 <= y && y < this.size && this.setFunctionModule($, y, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, a) {
      for (let i = -2; i <= 2; i++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(s + p, a + i, Math.max(Math.abs(p), Math.abs(i)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, a, i) {
      this.modules[a][s] = i, this.isFunction[a][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const a = this.version, i = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(a, i))
        throw new RangeError("Invalid argument");
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a], $ = Math.floor(t.getNumRawDataModules(a) / 8), y = p - $ % p, N = Math.floor($ / p);
      let v = [];
      const b = t.reedSolomonComputeDivisor(d);
      for (let _ = 0, h = 0; _ < p; _++) {
        let w = s.slice(h, h + N - d + (_ < y ? 0 : 1));
        h += w.length;
        const x = t.reedSolomonComputeRemainder(w, b);
        _ < y && w.push(0), v.push(w.concat(x));
      }
      let u = [];
      for (let _ = 0; _ < v[0].length; _++)
        v.forEach((h, w) => {
          (_ != N - d || w >= y) && u.push(h[_]);
        });
      return l(u.length == $), u;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let i = this.size - 1; i >= 1; i -= 2) {
        i == 6 && (i = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const $ = i - d, N = (i + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[N][$] && a < s.length * 8 && (this.modules[N][$] = o(s[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == s.length * 8);
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
        for (let i = 0; i < this.size; i++) {
          let p;
          switch (s) {
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
      let s = 0;
      for (let d = 0; d < this.size; d++) {
        let $ = !1, y = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let v = 0; v < this.size; v++)
          this.modules[d][v] == $ ? (y++, y == 5 ? s += t.PENALTY_N1 : y > 5 && s++) : (this.finderPenaltyAddHistory(y, N), $ || (s += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[d][v], y = 1);
        s += this.finderPenaltyTerminateAndCount($, y, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let $ = !1, y = 0, N = [0, 0, 0, 0, 0, 0, 0];
        for (let v = 0; v < this.size; v++)
          this.modules[v][d] == $ ? (y++, y == 5 ? s += t.PENALTY_N1 : y > 5 && s++) : (this.finderPenaltyAddHistory(y, N), $ || (s += this.finderPenaltyCountPatterns(N) * t.PENALTY_N3), $ = this.modules[v][d], y = 1);
        s += this.finderPenaltyTerminateAndCount($, y, N) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let $ = 0; $ < this.size - 1; $++) {
          const y = this.modules[d][$];
          y == this.modules[d][$ + 1] && y == this.modules[d + 1][$] && y == this.modules[d + 1][$ + 1] && (s += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce(($, y) => $ + (y ? 1 : 0), a);
      const i = this.size * this.size, p = Math.ceil(Math.abs(a * 20 - i * 10) / i) - 1;
      return l(0 <= p && p <= 9), s += p * t.PENALTY_N4, l(0 <= s && s <= 2568888), s;
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
        let i = [6];
        for (let p = this.size - 7; i.length < s; p -= a)
          i.splice(1, 0, p);
        return i;
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
        const i = Math.floor(s / 7) + 2;
        a -= (25 * i - 10) * i - 55, s >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
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
      for (let p = 0; p < s - 1; p++)
        a.push(0);
      a.push(1);
      let i = 1;
      for (let p = 0; p < s; p++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], i), d + 1 < a.length && (a[d] ^= a[d + 1]);
        i = t.reedSolomonMultiply(i, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, a) {
      let i = a.map((p) => 0);
      for (const p of s) {
        const d = p ^ i.shift();
        i.push(0), a.forEach(($, y) => i[y] ^= t.reedSolomonMultiply($, d));
      }
      return i;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, a) {
      if (s >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let i = 0;
      for (let p = 7; p >= 0; p--)
        i = i << 1 ^ (i >>> 7) * 285, i ^= (a >>> p & 1) * s;
      return l(i >>> 8 == 0), i;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const a = s[1];
      l(a <= this.size * 3);
      const i = a > 0 && s[2] == a && s[3] == a * 3 && s[4] == a && s[5] == a;
      return (i && s[0] >= a * 4 && s[6] >= a ? 1 : 0) + (i && s[6] >= a * 4 && s[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, a, i) {
      return s && (this.finderPenaltyAddHistory(a, i), a = 0), a += this.size, this.finderPenaltyAddHistory(a, i), this.finderPenaltyCountPatterns(i);
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
    for (let i = s - 1; i >= 0; i--)
      a.push(m >>> i & 1);
  }
  function o(m, s) {
    return (m >>> s & 1) != 0;
  }
  function l(m) {
    if (!m)
      throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, a, i) {
      if (this.mode = s, this.numChars = a, this.bitData = i, a < 0)
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
    static makeBytes(s) {
      let a = [];
      for (const i of s)
        r(i, 8, a);
      return new c(c.Mode.BYTE, s.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!c.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let i = 0; i < s.length; ) {
        const p = Math.min(s.length - i, 3);
        r(parseInt(s.substring(i, i + p), 10), p * 3 + 1, a), i += p;
      }
      return new c(c.Mode.NUMERIC, s.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!c.isAlphanumeric(s))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let a = [], i;
      for (i = 0; i + 2 <= s.length; i += 2) {
        let p = c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(i)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(i + 1)), r(p, 11, a);
      }
      return i < s.length && r(c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(i)), 6, a), new c(c.Mode.ALPHANUMERIC, s.length, a);
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
      let i = 0;
      for (const p of s) {
        const d = p.mode.numCharCountBits(a);
        if (p.numChars >= 1 << d)
          return 1 / 0;
        i += 4 + d + p.bitData.length;
      }
      return i;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let a = [];
      for (let i = 0; i < s.length; i++)
        s.charAt(i) != "%" ? a.push(s.charCodeAt(i)) : (a.push(parseInt(s.substring(i + 1, i + 3), 16)), i += 2);
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
})(Ct || (Ct = {}));
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
})(Ct || (Ct = {}));
const Bx = "_root_1leml_1", Fx = {
  root: Bx
}, Hx = {
  low: Ct.QrCode.Ecc.LOW,
  medium: Ct.QrCode.Ecc.MEDIUM,
  quartile: Ct.QrCode.Ecc.QUARTILE,
  high: Ct.QrCode.Ecc.HIGH
};
function Tk({
  value: e,
  size: t = 128,
  render: r = "svg",
  errorCorrection: o = "medium",
  margin: l = 4,
  ariaLabel: c,
  className: m,
  onError: s
}) {
  const a = c ?? `QR code for ${e}`, i = ae(null), p = Xr("(prefers-color-scheme: dark)"), [d, $] = X(null);
  we(() => {
    const w = document.documentElement;
    $(w.dataset.theme ?? null);
    const x = new MutationObserver(() => {
      $(w.dataset.theme ?? null);
    });
    return x.observe(w, { attributes: !0, attributeFilter: ["data-theme"] }), () => x.disconnect();
  }, []);
  const y = $e(() => {
    try {
      return Ct.QrCode.encodeText(e, Hx[o]);
    } catch {
      return null;
    }
  }, [e, o]), N = ae(null);
  we(() => {
    if (y !== null) {
      N.current = null;
      return;
    }
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), (N.current?.value !== e || N.current?.onError !== s) && (N.current = { value: e, onError: s }, s?.(w));
  }, [y, e, s]);
  const v = Math.max(0, Math.floor(l)), b = [Fx.root, m].filter(Boolean).join(" ");
  if (we(() => {
    if (r !== "canvas" || y === null) return;
    const w = i.current, x = w?.getContext("2d");
    if (!w || !x) return;
    const E = getComputedStyle(w), f = E.getPropertyValue("--dx-text-color").trim() || "#000", k = E.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Kx(x, y, t, v, f, k);
  }, [r, y, t, v, p, d]), y === null)
    return /* @__PURE__ */ n("div", { className: b, role: "img", "aria-label": a, "data-qr-error": "true" });
  const u = y.size + v * 2, _ = t / u;
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
  const h = [];
  for (let w = 0; w < y.size; w++)
    for (let x = 0; x < y.size; x++)
      y.getModule(x, w) && h.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (x + v) * _,
            y: (w + v) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${x}-${w}`
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
function Kx(e, t, r, o, l, c) {
  const m = r / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, r, r), e.fillStyle = l;
  for (let s = 0; s < t.size; s++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, s) && e.fillRect((a + o) * m, (s + o) * m, m + 0.5, m + 0.5);
}
const qx = "_root_1v9la_1", Ux = "_value_1v9la_9", jr = {
  root: qx,
  value: Ux
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
], Rr = 104, Wx = 106;
function Vx(e) {
  const t = [Rr];
  for (let o = 0; o < e.length; o++) {
    const l = e.charCodeAt(o);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let r = Rr;
  for (let o = 1; o < t.length; o++) r += o * t[o];
  return t.push(r % 103, Wx), t;
}
function jk({ value: e, format: t = "Code128", height: r = 60, showValue: o = !1, ariaLabel: l, className: c }) {
  const m = l ?? `Barcode ${e}`, s = $e(() => {
    const a = [];
    let i = 0;
    for (const p of Vx(e)) {
      const d = Lr[p] ?? Lr[0];
      for (let $ = 0; $ < d.length; $++) {
        const y = Number(d[$]);
        $ % 2 === 0 && a.push({ x: i, w: y }), i += y;
      }
    }
    return { modules: a, total: i };
  }, [e]);
  return /* @__PURE__ */ O("span", { className: [jr.root, c].filter(Boolean).join(" "), children: [
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
          s.modules.map((a, i) => /* @__PURE__ */ n("rect", { x: a.x, y: 0, width: a.w, height: r, fill: "var(--dx-text-color)" }, i))
        ]
      }
    ),
    o && /* @__PURE__ */ n("span", { className: jr.value, children: e })
  ] });
}
const Xx = "_root_gfdmk_1", Gx = "_svg_gfdmk_10", Yx = "_gridline_gfdmk_15", Zx = "_tickLabel_gfdmk_21", Jx = "_axisTitle_gfdmk_27", Qx = "_dataLabel_gfdmk_34", e2 = "_legend_gfdmk_40", t2 = "_legendItem_gfdmk_48", n2 = "_swatch_gfdmk_56", r2 = "_tooltip_gfdmk_63", s2 = "_visuallyHidden_gfdmk_77", ot = {
  root: Xx,
  svg: Gx,
  gridline: Yx,
  tickLabel: Zx,
  axisTitle: Jx,
  dataLabel: Qx,
  legend: e2,
  legendItem: t2,
  swatch: n2,
  tooltip: r2,
  visuallyHidden: s2
}, Pr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function o2(e, t, r) {
  const o = t - e || 1, l = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / l) * l, m = Math.ceil(t / l) * l, s = [];
  for (let a = c; a <= m + 1e-9; a += l) s.push(Number(a.toFixed(6)));
  return { min: c, max: m, step: l, ticks: s };
}
function Lk({
  series: e,
  width: t = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: l,
  showLegend: c = !0,
  tooltipVisible: m = !0,
  onSeriesClick: s,
  ariaLabel: a = "Chart",
  className: i
}) {
  const [p, d] = X(null), $ = $e(() => {
    const f = /* @__PURE__ */ new Set();
    for (const k of e) for (const M of k.data) f.add(String(M[k.categoryProperty] ?? ""));
    return [...f];
  }, [e]), y = $e(() => e.flatMap((f) => f.data.map((k) => Number(k[f.valueProperty]))).filter((f) => !Number.isNaN(f)), [e]), N = o?.min ?? (y.length ? Math.min(0, ...y) : 0), v = o?.max ?? (y.length ? Math.max(...y) : 10), b = $e(() => o2(N, v, o?.step), [N, v, o?.step]), u = { t: 16, r: 16, b: 40, l: 56 }, _ = t - u.l - u.r, h = r - u.t - u.b, w = (f) => u.l + f / Math.max(1, $.length - 1) * _, x = (f) => u.t + (1 - (f - b.min) / (b.max - b.min || 1)) * h, E = (f, k) => k.color ?? Pr[f % Pr.length];
  return /* @__PURE__ */ O("figure", { className: [ot.root, i].filter(Boolean).join(" "), role: "img", "aria-label": a, "aria-describedby": `${a.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ O("svg", { width: t, height: r, className: ot.svg, role: "presentation", children: [
      o?.gridlines !== !1 && b.ticks.map((f) => /* @__PURE__ */ n("line", { x1: u.l, x2: u.l + _, y1: x(f), y2: x(f), className: ot.gridline }, f)),
      l?.gridlines && $.map((f, k) => /* @__PURE__ */ n("line", { x1: w(k), x2: w(k), y1: u.t, y2: u.t + h, className: ot.gridline }, k)),
      b.ticks.map((f) => /* @__PURE__ */ n("text", { x: u.l - 8, y: x(f) + 4, textAnchor: "end", className: ot.tickLabel, children: f }, f)),
      $.map((f, k) => /* @__PURE__ */ n("text", { x: w(k), y: u.t + h + 16, textAnchor: "middle", className: ot.tickLabel, children: f }, f)),
      o?.title && /* @__PURE__ */ n("text", { x: 12, y: u.t + h / 2, textAnchor: "middle", transform: `rotate(-90,12,${u.t + h / 2})`, className: ot.axisTitle, children: o.title }),
      l?.title && /* @__PURE__ */ n("text", { x: u.l + _ / 2, y: r - 4, textAnchor: "middle", className: ot.axisTitle, children: l.title }),
      (() => {
        const f = /* @__PURE__ */ new Map();
        for (const I of e)
          if (I.stack)
            for (const D of I.data) {
              const S = String(D[I.categoryProperty] ?? ""), g = Number(D[I.valueProperty]);
              if (Number.isNaN(g)) continue;
              f.has(I.stack) || f.set(I.stack, /* @__PURE__ */ new Map());
              const C = f.get(I.stack);
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
          })), g = new Map($.map((A, T) => [A, T])), C = E(D, I);
          if (I.type === "pie" || I.type === "donut") {
            const A = u.l + _ / 2, T = u.t + h / 2, K = Math.min(_, h) / 3, V = I.type === "donut" ? I.innerRadius ?? K * 0.5 : 0, J = M.get(I) ?? S.reduce((ee, ue) => ee + ue.val, 0);
            let Z = -90;
            return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
              S.map((ee, ue) => {
                const ie = J ? ee.val / J * 360 : 0, U = Z, L = Z + ie;
                Z = L;
                const te = ie > 180 ? 1 : 0, G = (Qe) => Qe * Math.PI / 180, ce = A + K * Math.cos(G(U)), oe = T + K * Math.sin(G(U)), ye = A + K * Math.cos(G(L)), ve = T + K * Math.sin(G(L)), Be = A + V * Math.cos(G(L)), ke = T + V * Math.sin(G(L)), We = A + V * Math.cos(G(U)), be = T + V * Math.sin(G(U)), Ze = V ? `M ${ce} ${oe} A ${K} ${K} 0 ${te} 1 ${ye} ${ve} L ${Be} ${ke} A ${V} ${V} 0 ${te} 0 ${We} ${be} Z` : `M ${A} ${T} L ${ce} ${oe} A ${K} ${K} 0 ${te} 1 ${ye} ${ve} Z`, Ve = (U + L) / 2, Re = A + (K + 12) * Math.cos(G(Ve)), tt = T + (K + 12) * Math.sin(G(Ve));
                return /* @__PURE__ */ O("g", { role: "listitem", children: [
                  /* @__PURE__ */ n(
                    "path",
                    {
                      d: Ze,
                      fill: C,
                      stroke: "var(--dx-surface-color)",
                      strokeWidth: 1,
                      onMouseEnter: () => m && d({ x: Re, y: tt, text: `${I.title ?? ee.cat}: ${ee.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => s?.({ seriesTitle: I.title ?? "", category: ee.cat, value: ee.val, item: ee.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  I.labels?.visible && /* @__PURE__ */ n("text", { x: Re, y: tt, textAnchor: "middle", className: ot.dataLabel, children: ee.val })
                ] }, ue);
              })
            ] }, D);
          }
          if (I.type === "scatter" || I.type === "bubble")
            return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
              S.map((A, T) => {
                const K = g.get(A.cat) ?? 0, V = Number(S[T].cat), J = Number.isNaN(V) ? w(K) : u.l + (V - b.min) / (b.max - b.min || 1) * _, Z = x(A.val), ee = I.type === "bubble" && A.size !== void 0 ? Math.max(4, Math.min(12, A.size / 10)) : 4;
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
              return `${J === 0 ? "M" : "L"} ${w(J)} ${x(Z + V.val)}`;
            }).join(" "), K = S.map((V) => {
              const J = g.get(V.cat) ?? 0, Z = A(V.cat);
              return `${J === 0 ? "M" : "L"} ${w(J)} ${x(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ O("g", { role: "list", "aria-label": I.title ?? `Series ${D + 1}`, children: [
              /* @__PURE__ */ n("title", { children: I.title ?? `Series ${D + 1}` }),
              I.type === "area" && /* @__PURE__ */ n("path", { d: `${T} L ${w(S.length - 1)} ${x(A(S[S.length - 1].cat))} L ${w(0)} ${x(A(S[0].cat))} Z`, fill: C, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ n("path", { d: T, fill: "none", stroke: C, strokeWidth: 2 }),
              I.stack && /* @__PURE__ */ n("path", { d: K, fill: "none", stroke: "transparent" }),
              S.map((V, J) => {
                const Z = g.get(V.cat) ?? 0, ee = A(V.cat), ue = w(Z), ie = x(ee + V.val);
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
              const K = g.get(A.cat) ?? 0;
              let V = 0;
              if (I.stack)
                for (let oe = 0; oe < D; oe++) {
                  const ye = e[oe];
                  if (ye?.stack !== I.stack) continue;
                  const ve = ye.data.find((Be) => String(Be[ye.categoryProperty] ?? "") === A.cat);
                  ve && (V += Number(ve[ye.valueProperty]) || 0);
                }
              const J = V + A.val, Z = e.filter((oe) => !oe.stack || oe.stack === I.stack).length, ee = _ / $.length, ue = P ? 18 : Math.max(12, ee / (I.stack ? 1 : e.length) - 4), ie = P ? u.l + V / (b.max - b.min || 1) * _ : w(K) - ue / 2 + (I.stack ? 0 : D % Z * ue), U = P ? u.t + K * h / $.length + 4 : x(J), L = P ? A.val / (b.max - b.min || 1) * _ : ue - 4, te = P ? 16 : x(V) - x(J), G = P ? u.l + V / (b.max - b.min || 1) * _ : ie, ce = P ? u.t + K * h / $.length + 4 : U;
              return /* @__PURE__ */ O("g", { role: "listitem", children: [
                /* @__PURE__ */ n(
                  "rect",
                  {
                    x: G,
                    y: ce,
                    width: P ? L : ue - 4,
                    height: te,
                    fill: C,
                    rx: 2,
                    onMouseEnter: () => m && d({ x: G + (P ? L : ue) / 2, y: ce, text: `${I.title ?? A.cat}: ${A.val}` }),
                    onMouseLeave: () => d(null),
                    onClick: () => s?.({ seriesTitle: I.title ?? "", category: A.cat, value: A.val, item: A.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                I.labels?.visible && /* @__PURE__ */ n("text", { x: G + (P ? L : ue) / 2, y: ce - 4, textAnchor: "middle", className: ot.dataLabel, children: A.val })
              ] }, T);
            })
          ] }, D);
        });
      })()
    ] }),
    p && /* @__PURE__ */ n("div", { className: ot.tooltip, style: { left: p.x, top: p.y - 28 }, children: p.text }),
    c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((f, k) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
      /* @__PURE__ */ n("span", { className: ot.swatch, style: { backgroundColor: E(k, f) }, "aria-hidden": "true" }),
      f.title ?? `Series ${k + 1}`
    ] }, k)) }),
    /* @__PURE__ */ O("table", { className: ot.visuallyHidden, id: `${a.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ n("caption", { children: a }),
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { children: "Series" }),
        /* @__PURE__ */ n("th", { children: "Category" }),
        /* @__PURE__ */ n("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ n("tbody", { children: e.map(
        (f) => f.data.map((k, M) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("td", { children: f.title ?? "" }),
          /* @__PURE__ */ n("td", { children: String(k[f.categoryProperty] ?? "") }),
          /* @__PURE__ */ n("td", { children: String(k[f.valueProperty] ?? "") })
        ] }, `${f.title}-${M}`))
      ) })
    ] })
  ] });
}
export {
  Yi as ALERT_ICON,
  G2 as Accordion,
  L2 as Alert,
  Q2 as Autocomplete,
  V2 as Avatar,
  d2 as Badge,
  jk as Barcode,
  K2 as Body,
  wk as Breadcrumb,
  i2 as Button,
  c2 as Card,
  Sk as Carousel,
  Lk as Chart,
  E2 as Checkbox,
  tk as Checkboxlist,
  dk as Colorpicker,
  B2 as Column,
  kn as DEFAULT_OPERATOR_BY_TYPE,
  Rg as DEFAULT_PALETTE,
  S2 as DataFilter,
  z2 as DataGrid,
  D2 as DataList,
  uk as Datepicker,
  A2 as Dialog,
  bk as DropZone,
  J2 as Dropdown,
  p2 as EmptyState,
  qr as FILTER_OPERATORS,
  vk as FabMenu,
  m2 as Field,
  Jf as Footer,
  h2 as Form,
  Ck as Gantt,
  tp as Header,
  Me as Icon,
  C2 as Input,
  M2 as Label,
  H2 as Layout,
  ek as Listbox,
  ik as Mask,
  yk as Menu,
  ck as Numeric,
  Ma as Pager,
  xk as PanelMenu,
  lk as Password,
  Dk as PickList,
  Ek as Pivot,
  kk as ProfileMenu,
  q2 as Progress,
  Tk as QRCode,
  nk as Radiobuttonlist,
  _k as Rating,
  P2 as Row,
  Mk as Scheduler,
  mk as SecurityCode,
  hn as Select,
  rk as Selectbar,
  cp as Sidebar,
  hk as SignaturePad,
  R2 as Skeleton,
  fk as Slider,
  ok as Splitbutton,
  Nk as Splitter,
  F2 as Stack,
  _2 as Stat,
  $k as Steps,
  Kl as Switch,
  f2 as Table,
  X2 as Tabs,
  Z2 as Text,
  Y2 as Textarea,
  ak as Textbox,
  W2 as ThemeSwitcher,
  Ik as Timeline,
  pk as Timespanpicker,
  j2 as ToastProvider,
  Ok as Toc,
  sk as Togglebutton,
  I2 as Tooltip,
  zk as Tree,
  gk as Upload,
  Ak as VirtualGrid,
  Wr as applyFilters,
  La as applyGridState,
  wn as columnValue,
  w2 as compare,
  N2 as custom,
  Aa as cycleSort,
  Ra as defaultOperatorForType,
  b2 as email,
  Or as formatMasked,
  br as formatValue,
  Xn as getByPath,
  u2 as iconNames,
  Ur as matchesFilters,
  k2 as maxLength,
  x2 as minLength,
  ja as paginate,
  y2 as pattern,
  v2 as range,
  g2 as required,
  $2 as requiredTrue,
  cr as resolveVariant,
  Lo as runValidators,
  U2 as shadeClass,
  ea as sortItems,
  Ta as sortedItems,
  Go as toFilterString,
  Qo as toODataFilterString,
  jo as useFormContext,
  O2 as useFormField,
  Xr as useMediaQuery,
  T2 as useToast
};
