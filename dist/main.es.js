import { jsxs as $, jsx as n, Fragment as Ce } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ye, isValidElement as Tn, cloneElement as Hs, useState as X, useRef as ae, useCallback as H, useMemo as $e, useContext as Ks, createContext as Us, useEffect as we, Fragment as tr, Children as nr, useImperativeHandle as cs } from "react";
const sr = "_button_hx9k9_1", rr = "_filled_hx9k9_36", or = "_flat_hx9k9_39", lr = "_outlined_hx9k9_42", ar = "_text_hx9k9_47", ir = "_loading_hx9k9_538", cr = "_spinner_hx9k9_541", dr = "_xs_hx9k9_557", ur = "_sm_hx9k9_563", _r = "_md_hx9k9_569", fr = "_lg_hx9k9_575", hr = "_xl_hx9k9_581", pr = "_iconOnly_hx9k9_587", mr = "_fullWidth_hx9k9_613", Ct = {
  button: sr,
  filled: rr,
  flat: or,
  outlined: lr,
  text: ar,
  "style-primary": "_style-primary_hx9k9_53",
  "tone-primary": "_tone-primary_hx9k9_54",
  "style-secondary": "_style-secondary_hx9k9_80",
  "tone-secondary": "_tone-secondary_hx9k9_81",
  "style-base": "_style-base_hx9k9_102",
  "style-light": "_style-light_hx9k9_121",
  "style-dark": "_style-dark_hx9k9_139",
  "style-danger": "_style-danger_hx9k9_162",
  "tone-danger": "_tone-danger_hx9k9_163",
  "style-success": "_style-success_hx9k9_189",
  "tone-success": "_tone-success_hx9k9_190",
  "style-warning": "_style-warning_hx9k9_216",
  "tone-warning": "_tone-warning_hx9k9_217",
  "style-info": "_style-info_hx9k9_243",
  "tone-info": "_tone-info_hx9k9_244",
  "shade-lighter": "_shade-lighter_hx9k9_440",
  "shade-light": "_shade-light_hx9k9_440",
  "shade-dark": "_shade-dark_hx9k9_450",
  "shade-darker": "_shade-darker_hx9k9_454",
  loading: ir,
  spinner: cr,
  "dx-spin": "_dx-spin_hx9k9_1",
  xs: dr,
  sm: ur,
  md: _r,
  lg: fr,
  xl: hr,
  iconOnly: pr,
  fullWidth: mr
};
function gr(e, t) {
  const s = t, o = e ?? "filled";
  return { variant: o === "filled" || o === "flat" || o === "outlined" || o === "text" ? o : "filled", style: s ?? "primary" };
}
const pb = qe(
  function({
    variant: t = "filled",
    severity: s,
    shade: o = "default",
    size: i = "md",
    fullWidth: c = !1,
    iconOnly: h = !1,
    loading: r = !1,
    visible: l = !0,
    className: a,
    type: p = "button",
    disabled: d,
    children: v,
    ...b
  }, w) {
    if (l === !1) return null;
    const k = gr(t, s), f = !(k.style === "light" || k.style === "dark") && o !== "default" ? `shade-${o}` : null, u = [
      Ct.button,
      Ct[k.variant],
      Ct[`style-${k.style}`],
      // backwards-compat: tone-* still emitted
      Ct[`tone-${k.style}`],
      f ? Ct[f] : null,
      Ct[i],
      c ? Ct.fullWidth : null,
      h ? Ct.iconOnly : null,
      r ? Ct.loading : null,
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ $(
      "button",
      {
        ref: w,
        type: p,
        className: u,
        disabled: d || r,
        "aria-busy": r || void 0,
        ...b,
        children: [
          r ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Ct.spinner }) : null,
          v
        ]
      }
    );
  }
), xr = "_card_1ozlz_1", yr = "_elevated_1ozlz_8", br = "_filled_1ozlz_13", vr = "_outlined_1ozlz_18", kr = "_interactive_1ozlz_22", wr = "_text_1ozlz_30", $r = "_header_1ozlz_46", Nr = "_body_1ozlz_53", Or = "_footer_1ozlz_63", xn = {
  card: xr,
  elevated: yr,
  filled: br,
  outlined: vr,
  interactive: kr,
  text: wr,
  header: $r,
  body: Nr,
  footer: Or
}, mb = qe(function({
  variant: t = "elevated",
  header: s,
  footer: o,
  className: i,
  visible: c = !0,
  children: h,
  onKeyDown: r,
  ...l
}, a) {
  if (c === !1) return null;
  const p = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ $(
      "div",
      {
        ref: a,
        role: p ? "button" : void 0,
        tabIndex: p ? 0 : void 0,
        onKeyDown: (d) => {
          r?.(d), !(!p || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [xn.card, xn[t], i].filter(Boolean).join(" "),
        ...l,
        children: [
          s != null && /* @__PURE__ */ n("div", { className: xn.header, children: s }),
          /* @__PURE__ */ n("div", { className: xn.body, children: h }),
          o != null && /* @__PURE__ */ n("div", { className: xn.footer, children: o })
        ]
      }
    )
  );
});
function ds(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Sr = "_badge_1dt9s_1", zr = "_xs_1dt9s_21", Dr = "_sm_1dt9s_26", Mr = "_md_1dt9s_31", Cr = "_lg_1dt9s_36", Er = "_xl_1dt9s_41", Ir = "_neutral_1dt9s_47", jr = "_primary_1dt9s_52", Ar = "_secondary_1dt9s_61", Tr = "_light_1dt9s_66", Rr = "_base_1dt9s_71", Lr = "_dark_1dt9s_76", Pr = "_info_1dt9s_81", Br = "_success_1dt9s_86", Fr = "_warning_1dt9s_95", qr = "_danger_1dt9s_104", Hr = "_filled_1dt9s_111", Kr = "_outlined_1dt9s_161", Ur = "_text_1dt9s_213", yn = {
  badge: Sr,
  xs: zr,
  sm: Dr,
  md: Mr,
  lg: Cr,
  xl: Er,
  neutral: Ir,
  primary: jr,
  secondary: Ar,
  light: Tr,
  base: Rr,
  dark: Lr,
  info: Pr,
  success: Br,
  warning: Fr,
  danger: qr,
  filled: Hr,
  outlined: Kr,
  text: Ur,
  "shade-lighter": "_shade-lighter_1dt9s_484",
  "shade-light": "_shade-light_1dt9s_484",
  "shade-dark": "_shade-dark_1dt9s_492",
  "shade-darker": "_shade-darker_1dt9s_495"
}, gb = qe(function({
  severity: t = "primary",
  variant: s = "filled",
  shade: o,
  size: i = "md",
  className: c,
  visible: h = !0,
  children: r,
  ...l
}, a) {
  if (h === !1) return null;
  const p = t, d = ds(s, "filled"), v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: a,
      className: [
        yn.badge,
        yn[i],
        yn[p],
        yn[d],
        v ? yn[v] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}), Wr = "_xs_2a6lm_2", Vr = "_sm_2a6lm_7", Xr = "_md_2a6lm_1", Gr = "_lg_2a6lm_17", Yr = "_xl_2a6lm_22", Zr = {
  xs: Wr,
  sm: Vr,
  md: Xr,
  lg: Gr,
  xl: Yr
}, xb = [
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
], Jr = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(Ce, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(Ce, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(Ce, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ $(Ce, { children: [
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
  ban: /* @__PURE__ */ $(Ce, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, De = qe(function({ name: t, size: s = "md", strokeWidth: o = 2, className: i, ...c }, h) {
  const r = typeof s == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: h,
      className: [r ? Zr[s] : null, i].filter(Boolean).join(" "),
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
      children: Jr[t]
    }
  );
}), Qr = "_stat_sjin9_1", eo = "_label_sjin9_8", to = "_row_sjin9_16", no = "_value_sjin9_22", so = "_delta_sjin9_28", ro = "_success_sjin9_33", oo = "_danger_sjin9_37", lo = "_neutral_sjin9_41", ao = "_hint_sjin9_45", Qt = {
  stat: Qr,
  label: eo,
  row: to,
  value: no,
  delta: so,
  success: ro,
  danger: oo,
  neutral: lo,
  hint: ao
}, yb = qe(function({ label: t, value: s, delta: o, deltaTone: i = "neutral", hint: c, className: h, ...r }, l) {
  return /* @__PURE__ */ $(
    "div",
    {
      ref: l,
      className: [Qt.stat, h].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ n("div", { className: Qt.label, children: t }),
        /* @__PURE__ */ $("div", { className: Qt.row, children: [
          /* @__PURE__ */ n("div", { className: Qt.value, children: s }),
          o != null && /* @__PURE__ */ n("div", { className: [Qt.delta, Qt[i]].join(" "), children: o })
        ] }),
        c != null && /* @__PURE__ */ n("div", { className: Qt.hint, children: c })
      ]
    }
  );
}), io = "_wrap_1jc7y_1", co = "_table_1jc7y_8", uo = "_caption_1jc7y_14", _o = "_none_1jc7y_51", fo = "_horizontal_1jc7y_57", ho = "_vertical_1jc7y_67", po = "_alternating_1jc7y_85", mo = "_start_1jc7y_89", go = "_center_1jc7y_93", xo = "_end_1jc7y_97", yo = "_empty_1jc7y_101", Vt = {
  wrap: io,
  table: co,
  caption: uo,
  none: _o,
  horizontal: fo,
  vertical: ho,
  alternating: po,
  start: mo,
  center: go,
  end: xo,
  empty: yo
};
function bb({
  columns: e,
  rows: t,
  rowKey: s,
  empty: o,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: h = !0,
  className: r,
  visible: l = !0
}) {
  if (l === !1) return null;
  const a = c === "default" || c === "both" ? "" : Vt[c];
  return /* @__PURE__ */ $("div", { className: [Vt.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
      "table",
      {
        className: [
          Vt.table,
          a,
          h ? Vt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ n("caption", { className: Vt.caption, children: i }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "th",
            {
              className: p.align != null ? Vt[p.align] : void 0,
              scope: "col",
              children: p.header
            },
            p.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((p) => /* @__PURE__ */ n("tr", { children: e.map((d) => /* @__PURE__ */ n(
            "td",
            {
              className: d.align != null ? Vt[d.align] : void 0,
              children: d.render != null ? d.render(p) : p[d.key]
            },
            d.key
          )) }, s(p))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Vt.empty, children: o })
  ] });
}
const bo = "_emptyState_1swxw_1", vo = "_icon_1swxw_13", ko = "_title_1swxw_18", wo = "_description_1swxw_24", $o = "_action_1swxw_30", bn = {
  emptyState: bo,
  icon: vo,
  title: ko,
  description: wo,
  action: $o
};
function vb({
  icon: e,
  title: t,
  description: s,
  action: o,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ $("div", { className: [bn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: bn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: bn.title, children: t }),
    s != null && /* @__PURE__ */ n("div", { className: bn.description, children: s }),
    o != null && /* @__PURE__ */ n("div", { className: bn.action, children: o })
  ] });
}
const No = "_field_149oz_1", Oo = "_label_149oz_8", So = "_required_149oz_14", zo = "_hint_149oz_19", Do = "_error_149oz_24", vn = {
  field: No,
  label: Oo,
  required: So,
  hint: zo,
  error: Do
};
function kb({
  label: e,
  htmlFor: t,
  required: s,
  hint: o,
  supporting: i,
  error: c,
  children: h,
  className: r,
  visible: l = !0
}) {
  const a = o ?? i, p = Ye(), d = Ye(), v = Ye();
  if (l === !1) return null;
  const b = c != null ? d : a != null ? v : null, w = typeof h == "function" ? h({ inputId: p, hintId: v, errorId: d }) : h, k = Tn(w) && typeof w.props.id == "string" ? w.props.id : void 0, _ = k ?? t ?? p, f = Tn(w) && (b != null || k == null && typeof w.type == "string"), u = k != null || t != null || f, y = f && Tn(w) ? Hs(w, {
    id: _,
    "aria-describedby": b != null ? [
      w.props["aria-describedby"],
      b
    ].filter((O) => typeof O == "string").join(" ") || void 0 : w.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : w.props["aria-invalid"]
  }) : w;
  return /* @__PURE__ */ $("div", { className: [vn.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ $(
      "label",
      {
        className: vn.label,
        htmlFor: u ? _ : void 0,
        children: [
          e,
          s === !0 && /* @__PURE__ */ n("span", { className: vn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: vn.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ n("div", { id: v, className: vn.hint, children: a }) : null
  ] });
}
const Mo = "_form_19k3s_1", Co = {
  form: Mo
}, Ws = Us(null);
function Eo() {
  const e = Ks(Ws);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function wb({
  model: e,
  onSubmit: t,
  onInvalidSubmit: s,
  action: o,
  method: i,
  children: c,
  className: h
}) {
  const [r, l] = X({}), [a, p] = X(0), d = ae(r);
  d.current = r;
  const v = H((y) => {
    l(
      (O) => O[y.name] === y ? O : { ...O, [y.name]: y }
    );
  }, []), b = H((y) => {
    l((O) => {
      if (!(y in O)) return O;
      const g = { ...O };
      return delete g[y], g;
    });
  }, []), w = H(() => {
    const y = {};
    for (const O of Object.values(d.current)) {
      const g = O.validate();
      g.length > 0 && (y[O.name] = g);
    }
    return y;
  }, []), k = H(() => {
    const y = w();
    p((O) => O + 1), Object.keys(y).length === 0 ? t?.(e) : s?.(y);
  }, [w, e, t, s]), _ = (y) => {
    o != null && i != null || (y.preventDefault(), k());
  }, f = $e(
    () => ({ registerField: v, unregisterField: b, submit: k, submitCount: a }),
    [v, b, k, a]
  ), u = [Co.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Ws.Provider, { value: f, children: /* @__PURE__ */ n(
    "form",
    {
      className: u,
      onSubmit: _,
      action: o,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const ln = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", $b = (e = "Required") => (t) => ln(t) ? e : null, Nb = (e = "Invalid email") => (t) => ln(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Ob = (e, t = "Invalid format") => (s) => ln(s) || e.test(String(s)) ? null : t, Sb = (e, t = `Minimum ${e} characters`) => (s) => ln(s) || String(s).length >= e ? null : t, zb = (e, t = `Maximum ${e} characters`) => (s) => ln(s) || String(s).length <= e ? null : t, Db = (e, t, s = `Between ${e} and ${t}`) => (o) => {
  if (ln(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : s;
}, Mb = (e, t = "Values do not match") => (s, o) => {
  if (ln(s)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return s === i ? null : t;
}, Cb = (e = "Required") => (t) => t === !0 ? null : e, Eb = (e) => (t, s) => e(t, s);
function Io(e, t, s) {
  return e.map((o) => o(t, s)).filter((o) => o != null);
}
function Ib(e, t) {
  const { registerField: s, unregisterField: o, submitCount: i } = Eo(), [c, h] = X(t?.initialValue), [r, l] = X(!1), [a, p] = X(!1), d = ae(() => []);
  d.current = () => Io(t?.validate ?? [], c), we(() => (s({ name: e, validate: () => d.current() }), () => o(e)), [e, s, o]), we(() => {
    i > 0 && (l(!0), p(!1));
  }, [i]);
  const v = r && !a ? d.current() : [];
  return { value: c, setValue: (w) => {
    h(w), p(!0);
  }, errors: v };
}
const jo = "_select_1j4dh_1", Ao = "_invalid_1j4dh_33", To = "_xs_1j4dh_40", Ro = "_sm_1j4dh_48", Lo = "_md_1j4dh_56", Po = "_lg_1j4dh_62", Bo = "_xl_1j4dh_68", Zn = {
  select: jo,
  invalid: Ao,
  xs: To,
  sm: Ro,
  md: Lo,
  lg: Po,
  xl: Bo
}, gn = qe(
  function({ size: t = "md", invalid: s = !1, options: o, children: i, className: c, ...h }, r) {
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
        ...h,
        children: o != null ? o.map((l) => /* @__PURE__ */ n(
          "option",
          {
            value: l.value,
            disabled: l.disabled,
            children: l.label
          },
          l.value
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
}, Fo = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function qo(e) {
  return Fo.includes(e);
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
  if (qo(e.secondOperator)) return !0;
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
  const i = o === "CaseInsensitive", c = (l) => i && typeof l == "string" ? l.toLowerCase() : l, h = c(e), r = c(t);
  switch (s) {
    case "Equals":
      return h === r || Array.isArray(h) && h.some((l) => c(l) === r);
    case "NotEquals":
      return h !== r && !(Array.isArray(h) && h.some((l) => c(l) === r));
    case "LessThan":
      return jn(h, r) < 0;
    case "LessThanOrEquals":
      return jn(h, r) <= 0;
    case "GreaterThan":
      return jn(h, r) > 0;
    case "GreaterThanOrEquals":
      return jn(h, r) >= 0;
    case "Contains":
      return typeof h == "string" && typeof r == "string" && h.includes(r);
    case "StartsWith":
      return typeof h == "string" && typeof r == "string" && h.startsWith(r);
    case "EndsWith":
      return typeof h == "string" && typeof r == "string" && h.endsWith(r);
    case "DoesNotContain":
      return typeof h == "string" && typeof r == "string" && !h.includes(r);
    case "In":
      return Array.isArray(r) && r.some((l) => c(l) === h);
    case "NotIn":
      return Array.isArray(r) && !r.some((l) => c(l) === h);
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
      (h) => Xs(e, h, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", hs(t, e, i);
}
function Gs(e, t, s = {}) {
  return e.filter((o) => Xs(o, t, s));
}
function Ho(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${Ho(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function Ko(e) {
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
function Uo(e) {
  return us(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Uo).filter(Boolean).join(` ${e.operator} `)})` : Ko(e);
}
function Wo(e) {
  return e.replace(/'/g, "''");
}
const Vo = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Xo(e, t) {
  const s = e.property, o = t === "CaseInsensitive", i = (a) => o ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${Wo(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), h = (a, p) => {
    const d = typeof p == "string", v = d && o ? i(s) : s;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${v} ${Vo[a]} ${d && o ? i(c(p)) : c(p)}`;
      case "Contains":
        return `contains(${i(s)}, ${i(c(p))})`;
      case "StartsWith":
        return `startswith(${i(s)}, ${i(c(p))})`;
      case "EndsWith":
        return `endswith(${i(s)}, ${i(c(p))})`;
      case "DoesNotContain":
        return `not(contains(${i(s)}, ${i(c(p))}))`;
      case "In":
        return Array.isArray(p) ? `${v} in (${p.map((b) => c(b)).join(", ")})` : `${v} in (${c(p)})`;
      case "NotIn":
        return Array.isArray(p) ? `not(${v} in (${p.map((b) => c(b)).join(", ")}))` : `not(${v} in (${c(p)}))`;
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
    return h(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${h(e.operator, e.value)} ${r} ${h(
    l,
    e.secondValue
  )})`;
}
function Go(e, t = {}) {
  const s = t.caseSensitivity ?? "CaseInsensitive";
  if (us(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => Go(i, { caseSensitivity: s })).filter(Boolean).join(` ${o} `)})`;
  }
  return Xo(e, s);
}
function Yo(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((s, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, h = jn(
        Gn(s, i.property),
        Gn(o, i.property)
      );
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const Zo = "_filter_los3f_1", Jo = "_rows_los3f_9", Qo = "_row_los3f_9", el = "_join_los3f_21", tl = "_property_los3f_30", nl = "_operator_los3f_34", sl = "_value_los3f_38", rl = "_remove_los3f_42", ol = "_bar_los3f_58", ll = "_add_los3f_64", al = "_custom_los3f_78", il = "_summary_los3f_82", cl = "_second_los3f_87", dl = "_secondAdd_los3f_91", ul = "_addSecond_los3f_95", _l = "_joinSelect_los3f_109", Ge = {
  filter: Zo,
  rows: Jo,
  row: Qo,
  join: el,
  property: tl,
  operator: nl,
  value: sl,
  remove: rl,
  bar: ol,
  add: ll,
  custom: al,
  summary: il,
  second: cl,
  secondAdd: dl,
  addSecond: ul,
  joinSelect: _l
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
function jb({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: s = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: h,
  items: r,
  children: l
}) {
  const [a, p] = X(
    () => o != null && o.length > 0 ? o.map((f, u) => ({ id: u, ...f })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: kn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (f, u) => {
    p(
      (y) => y.map((O) => O.id === f ? { ...O, ...u } : O)
    );
  }, v = () => {
    const f = a[a.length - 1], u = Math.max(0, ...a.map((O) => O.id)) + 1, y = e[0];
    p((O) => [
      ...O,
      {
        id: u,
        property: f?.property ?? y?.name ?? "",
        operator: kn[e.find(
          (g) => g.name === (f?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (f) => {
    p(
      (u) => u.length > 1 ? u.filter((y) => y.id !== f) : u
    );
  }, w = $e(() => {
    const f = [];
    for (const u of a) {
      if (u.property === "" || (u.value == null || u.value === "") && !wn.includes(u.operator)) continue;
      const O = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: g } = u;
      g != null && Yn(u) && (O.secondOperator = g, O.secondValue = u.secondValue, O.logicalOperator = u.logicalOperator ?? "And"), f.push(O);
    }
    return f;
  }, [a]), k = $e(() => r == null || w.length === 0 ? r : Gs(r, {
    operator: t,
    filters: w
  }, {
    caseSensitivity: s
  }), [r, w, t, s]);
  we(() => {
    h != null && r != null && h(k ?? []);
  }, [k]);
  const _ = (f) => e.find((u) => u.name === f) ?? { name: f, type: "string" };
  return /* @__PURE__ */ $("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: a.map((f, u) => {
      const y = _(f.property), O = i ? [kn[y.type ?? "string"]] : Vs, g = !wn.includes(f.operator), S = f.secondOperator != null;
      return /* @__PURE__ */ $(tr, { children: [
        /* @__PURE__ */ $("div", { className: Ge.row, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: Ge.property,
              value: f.property,
              onChange: (x) => {
                const N = e.find(
                  (E) => E.name === x.target.value
                );
                d(f.id, {
                  property: x.target.value,
                  operator: kn[N?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((x) => ({
                value: x.name,
                label: x.title ?? x.name
              }))
            }
          ),
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${u + 1} operator`,
              className: Ge.operator,
              value: f.operator,
              onChange: (x) => {
                const N = x.target.value;
                d(
                  f.id,
                  wn.includes(N) ? {
                    operator: N,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: N }
                );
              },
              options: O.map((x) => ({
                value: x,
                label: ms[x]
              }))
            }
          ),
          g ? /* @__PURE__ */ n(
            gs,
            {
              property: y,
              value: f.value,
              onChange: (x) => d(f.id, { value: x })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => b(f.id),
              children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
            }
          )
        ] }),
        g ? S ? /* @__PURE__ */ $(
          "div",
          {
            className: [Ge.row, Ge.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                gn,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: Ge.joinSelect,
                  value: f.logicalOperator ?? "And",
                  onChange: (x) => d(f.id, {
                    logicalOperator: x.target.value
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
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: Ge.operator,
                  value: f.secondOperator,
                  onChange: (x) => {
                    const N = x.target.value;
                    d(
                      f.id,
                      wn.includes(N) ? { secondOperator: N, secondValue: void 0 } : { secondOperator: N }
                    );
                  },
                  options: O.map((x) => ({
                    value: x,
                    label: ms[x]
                  }))
                }
              ),
              f.secondOperator == null || !wn.includes(f.secondOperator) ? /* @__PURE__ */ n(
                gs,
                {
                  property: y,
                  value: f.secondValue,
                  onChange: (x) => d(f.id, { secondValue: x })
                }
              ) : null,
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: Ge.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
                  onClick: () => d(f.id, {
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
            onClick: () => d(f.id, {
              secondOperator: kn[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, f.id);
    }) }),
    /* @__PURE__ */ $("div", { className: Ge.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ge.add, onClick: v, children: "Add filter" }),
      l != null ? /* @__PURE__ */ n("div", { className: Ge.custom, children: l }) : null,
      r != null ? /* @__PURE__ */ $("span", { className: Ge.summary, "aria-live": "polite", children: [
        k?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const fl = "_pager_k78w3_1", hl = "_alignLeft_k78w3_10", pl = "_alignCenter_k78w3_14", ml = "_alignRight_k78w3_18", gl = "_alignJustify_k78w3_22", xl = "_summary_k78w3_26", yl = "_controls_k78w3_31", bl = "_button_k78w3_37", vl = "_active_k78w3_73", kl = "_ellipsis_k78w3_85", wl = "_size_k78w3_91", at = {
  pager: fl,
  alignLeft: hl,
  alignCenter: pl,
  alignRight: ml,
  alignJustify: gl,
  summary: xl,
  controls: yl,
  button: bl,
  active: vl,
  ellipsis: kl,
  size: wl
};
function $l(e, t, s, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(s)).replace("{2}", String(o));
}
function xs(e, t) {
  return e.replace("{0}", String(t));
}
function Nl(e, t, s) {
  if (t <= s)
    return Array.from({ length: t }, (r, l) => l + 1);
  const o = Math.floor(s / 2);
  let i = Math.max(1, e - o);
  const c = Math.min(t, i + s - 1);
  i = Math.max(1, c - s + 1);
  const h = [];
  for (let r = i; r <= c; r++) h.push(r);
  return i > 2 && h.unshift("ellipsis"), i > 1 && h.unshift(1), c < t - 1 && h.push("ellipsis"), c < t && h.push(t), h;
}
function Ol({
  count: e,
  pageSize: t,
  page: s,
  defaultPage: o = 1,
  pageSizeOptions: i,
  pageNumbersCount: c = 5,
  alwaysVisible: h = !1,
  horizontalAlign: r = "left",
  showPagingSummary: l,
  showPageSizeSelector: a = !0,
  pagingSummaryFormat: p = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: d,
  pageSizeText: v = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: w = "Previous page",
  nextPageTitle: k = "Next page",
  lastPageTitle: _ = "Last page",
  pageTitleFormat: f = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: y,
  onPageSizeChange: O,
  ariaLabel: g = "Pagination",
  className: S,
  visible: x = !0
}) {
  const N = s ?? o, [E, I] = X(N), C = s !== void 0, M = C ? N : E, m = Math.max(1, Math.ceil(e / t)), D = Math.min(Math.max(1, M), m), P = l ?? !0, j = h || m > 1, T = Nl(D, m, c), F = H(
    (K) => {
      const te = Math.min(Math.max(1, K), m);
      C || I(te);
      const oe = (te - 1) * t;
      y?.({
        page: te,
        skip: oe,
        top: t,
        pageCount: m,
        pageSize: t
      });
    },
    [C, y, m, t]
  ), V = r === "center" ? at.alignCenter : r === "right" ? at.alignRight : r === "justify" ? at.alignJustify : at.alignLeft, Z = {
    count: e,
    pageNumber: D,
    pageSize: t,
    pageCount: m
  }, Q = (K) => {
    const te = Array.from(
      K.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), oe = te.indexOf(document.activeElement);
    oe !== -1 && (K.key === "ArrowRight" || K.key === "ArrowDown" ? (K.preventDefault(), (te[oe + 1] ?? te[0])?.focus()) : K.key === "ArrowLeft" || K.key === "ArrowUp" ? (K.preventDefault(), (te[oe - 1] ?? te[te.length - 1])?.focus()) : K.key === "Home" ? (K.preventDefault(), te[0]?.focus()) : K.key === "End" && (K.preventDefault(), te[te.length - 1]?.focus()));
  };
  return x === !1 || !j ? null : /* @__PURE__ */ $(
    "nav",
    {
      className: [at.pager, V, S].filter(Boolean).join(" "),
      "aria-label": g,
      children: [
        P && /* @__PURE__ */ n("span", { className: at.summary, "aria-live": "polite", children: d ? d(Z) : $l(p, D, m, e) }),
        /* @__PURE__ */ $(
          "div",
          {
            className: at.controls,
            role: "group",
            "aria-label": g,
            onKeyDown: Q,
            children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: D <= 1,
                  onClick: () => F(1),
                  "aria-label": b,
                  title: b,
                  children: "«"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: D <= 1,
                  onClick: () => F(D - 1),
                  "aria-label": w,
                  title: w,
                  children: "‹"
                }
              ),
              T.map(
                (K, te) => K === "ellipsis" ? /* @__PURE__ */ n("span", { className: at.ellipsis, "aria-hidden": "true", children: "…" }, `e${te}`) : /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": K,
                    className: [at.button, K === D ? at.active : ""].filter(Boolean).join(" "),
                    "aria-current": K === D ? "page" : void 0,
                    "aria-label": xs(u, K),
                    title: xs(f, K),
                    onClick: () => F(K),
                    children: K
                  },
                  K
                )
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: D >= m,
                  onClick: () => F(D + 1),
                  "aria-label": k,
                  title: k,
                  children: "›"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: D >= m,
                  onClick: () => F(m),
                  "aria-label": _,
                  title: _,
                  children: "»"
                }
              )
            ]
          }
        ),
        a && i && i.length > 0 && /* @__PURE__ */ $("label", { className: at.size, children: [
          /* @__PURE__ */ n("span", { children: v }),
          /* @__PURE__ */ n(
            "select",
            {
              value: t,
              onChange: (K) => O?.(Number(K.target.value)),
              "aria-label": v,
              children: i.map((K) => /* @__PURE__ */ n("option", { value: K, children: K }, K))
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
    Ol,
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
function Sl(e, t, s, o, i, c) {
  if (!t || !s) return e.map((l) => ({ type: "row", row: l }));
  const h = /* @__PURE__ */ new Map();
  e.forEach((l) => {
    const a = String(i(l, t) ?? ""), p = h.get(a);
    p ? p.push(l) : h.set(a, [l]);
  });
  const r = [];
  return h.forEach((l, a) => {
    const p = l[0], d = p != null ? i(p, t) : void 0;
    r.push({
      type: "group",
      group: {
        key: a,
        display: c(d),
        property: t,
        title: s.title ?? t,
        count: l.length
      }
    }), o.has(a) && l.forEach((v) => r.push({ type: "row", row: v }));
  }), r;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function zl(e, t) {
  const s = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    s[i] = o === 0 ? "0px" : `${o}px`;
    const h = t[i] ?? c.width ?? "8rem";
    o += parseFloat(h);
  }), s;
}
function Dl(e, t) {
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
function ys(e, t) {
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
function Ml(e, t, s = {}) {
  const o = e.find((c) => c.property === t), i = bs[(o ? bs.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : s.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function Cl(e, t) {
  return Yo(e, t);
}
function El(e, t, s) {
  const o = Math.max(1, Math.ceil(e.length / s)), i = Math.min(Math.max(1, t), o), c = (i - 1) * s;
  return {
    items: e.slice(c, c + s),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function Il(e, t, s = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, l]) => ({
      property: r,
      operator: l.operator ?? "Contains",
      value: Dl(
        l.value,
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
  ) : e, c = Cl(i, t.sorts);
  return {
    ...El(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function jl(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Al = "_grid_a6ibk_1", Tl = "_toolbar_a6ibk_8", Rl = "_picker_a6ibk_13", Ll = "_pickerButton_a6ibk_17", Pl = "_pickerPanel_a6ibk_31", Bl = "_pickerItem_a6ibk_46", Fl = "_groupPanel_a6ibk_55", ql = "_groupPanelActive_a6ibk_66", Hl = "_groupPanelText_a6ibk_70", Kl = "_groupChip_a6ibk_74", Ul = "_groupRemove_a6ibk_85", Wl = "_groupRow_a6ibk_94", Vl = "_groupCell_a6ibk_98", Xl = "_groupToggle_a6ibk_103", Gl = "_editRow_a6ibk_116", Yl = "_editCell_a6ibk_120", Zl = "_editInput_a6ibk_125", Jl = "_commandCell_a6ibk_135", Ql = "_commandButton_a6ibk_141", ea = "_data_a6ibk_156", ta = "_table_a6ibk_163", na = "_header_a6ibk_169", sa = "_center_a6ibk_181", ra = "_right_a6ibk_185", oa = "_sortButton_a6ibk_189", la = "_sortIndicator_a6ibk_207", aa = "_sortIndex_a6ibk_211", ia = "_cell_a6ibk_222", ca = "_clickable_a6ibk_236", da = "_frozen_a6ibk_244", ua = "_selected_a6ibk_250", _a = "_resizeHandle_a6ibk_258", fa = "_filterCell_a6ibk_276", ha = "_filterSelect_a6ibk_284", pa = "_filterInput_a6ibk_294", ma = "_empty_a6ibk_305", ga = "_loading_a6ibk_311", xa = "_visuallyHidden_a6ibk_321", ge = {
  grid: Al,
  toolbar: Tl,
  picker: Rl,
  pickerButton: Ll,
  pickerPanel: Pl,
  pickerItem: Bl,
  groupPanel: Fl,
  groupPanelActive: ql,
  groupPanelText: Hl,
  groupChip: Kl,
  groupRemove: Ul,
  groupRow: Wl,
  groupCell: Vl,
  groupToggle: Xl,
  editRow: Gl,
  editCell: Yl,
  editInput: Zl,
  commandCell: Jl,
  commandButton: Ql,
  data: ea,
  table: ta,
  header: na,
  center: sa,
  right: ra,
  sortButton: oa,
  sortIndicator: la,
  sortIndex: aa,
  cell: ia,
  clickable: ca,
  frozen: da,
  selected: ua,
  resizeHandle: _a,
  filterCell: fa,
  filterSelect: ha,
  filterInput: pa,
  empty: ma,
  loading: ga,
  visuallyHidden: xa
}, ya = {
  Ascending: "ascending",
  Descending: "descending"
};
function vs(e, t) {
  return e.filterable ?? t;
}
function ba(e, t) {
  return e.sortable ?? t;
}
function va(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Ab({
  columns: e,
  rows: t,
  rowKey: s,
  allowSorting: o = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: h = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: a = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: v = 5,
  pagerPosition: b = "Bottom",
  showPagingSummary: w = !0,
  showPageSizeSelector: k = !0,
  selectionMode: _ = "None",
  selectedKeys: f,
  onSelectionChange: u,
  showColumnPicker: y = !1,
  columnPickerText: O = "Columns",
  allowColumnResize: g = !1,
  allowColumnReorder: S = !1,
  allowGrouping: x = !1,
  groupPanelText: N = "Drag a column header here to group",
  groupExpanded: E = !0,
  editMode: I = "None",
  allowRowCreate: C = !1,
  onRowUpdate: M,
  onRowCreate: m,
  onRowDelete: D,
  isLoading: P = !1,
  empty: j = "No records found",
  ariaLabel: T,
  className: F,
  onRowClick: V
}) {
  const [Z, Q] = X([]), [K, te] = X(
    /* @__PURE__ */ new Map()
  ), [oe, ee] = X(1), [L, ie] = X(p), [Y, de] = X(
    () => e.map((A, R) => Ln(A, R))
  ), [le, ye] = X(
    () => new Set(
      e.map((A, R) => A.visible !== !1 ? Ln(A, R) : "").filter(Boolean)
    )
  ), [ke, Be] = X({}), [ve, We] = X(!1), [xe, Ze] = X(null), [Ve, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, W] = X({}), z = ae(null), q = ae(null), ne = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((R, ce) => A.set(Ln(R, ce), R)), A;
  }, [e]), _e = $e(
    () => Y.filter((A) => le.has(A)).map((A) => ({ key: A, column: ne.get(A) })).filter(
      (A) => A.column != null
    ),
    [Y, le, ne]
  ), se = $e(
    () => zl(_e, ke),
    [_e, ke]
  ), me = I !== "None" || D != null || C, Ne = $e(
    () => Il(
      t,
      { sorts: Z, filters: K, pageNumber: oe, pageSize: L },
      {
        logicalOperator: l,
        caseSensitivity: r,
        types: Object.fromEntries(
          e.filter((A) => A.type != null && A.property != null).map((A) => [
            A.property,
            A.type
          ])
        )
      }
    ),
    [
      t,
      Z,
      K,
      oe,
      L,
      l,
      r,
      e
    ]
  ), Fe = $e(
    () => xe ? e.find((A) => A.property === xe) : void 0,
    [xe, e]
  ), Je = $e(
    () => Ve ?? new Set(
      E ? Ne.items.map(
        (A) => String($n(A, xe ?? "") ?? "")
      ) : []
    ),
    [Ve, E, Ne.items, xe]
  ), dt = $e(
    () => Sl(
      Ne.items,
      xe ?? void 0,
      Fe,
      Je,
      $n,
      (A) => ys(A, Fe?.format)
    ),
    [Ne.items, xe, Fe, Je]
  ), bt = $e(
    () => xe ? _e.filter((A) => A.column.property !== xe) : _e,
    [_e, xe]
  ), J = (A) => {
    A !== "" && Q(Ml(Z, A, { multi: i }));
  }, Se = (A, R) => {
    te((ce) => {
      const pe = new Map(ce);
      return pe.set(A, R), pe;
    }), ee(1);
  }, nt = (A) => {
    ie(A), ee(1);
  }, Wt = (A) => {
    if (_ === "None") return;
    const R = s(A), ce = f ?? [];
    let pe;
    _ === "Single" ? pe = ce.length === 1 && ce[0] === R ? [] : [R] : pe = ce.includes(R) ? ce.filter((Ie) => Ie !== R) : [...ce, R], u?.(pe);
  }, Nt = (A) => {
    V?.(A);
  }, ze = (A, R, ce) => {
    z.current = { key: A, startX: R, startWidth: ce };
  }, Xe = (A) => {
    const R = z.current;
    if (!R) return;
    const ce = A - R.startX, pe = Math.max(48, R.startWidth + ce);
    Be((Ie) => ({ ...Ie, [R.key]: `${pe}px` }));
  }, vt = () => {
    z.current = null;
  }, Rt = (A) => {
    q.current = A;
  }, Jt = (A) => {
    const R = q.current;
    q.current = null, !(!R || R === A) && de((ce) => {
      const pe = [...ce], Ie = pe.indexOf(R), je = pe.indexOf(A);
      return Ie < 0 || je < 0 ? ce : (pe.splice(Ie, 1), pe.splice(je, 0, R), pe);
    });
  }, U = (A) => {
    ye((R) => {
      const ce = new Set(R);
      return ce.has(A) ? ce.delete(A) : ce.add(A), ce;
    });
  }, ue = () => {
    const A = q.current;
    if (q.current = null, !A || !x) return;
    const ce = ne.get(A)?.property;
    ce && (Ze(ce), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, He = (A) => {
    Le((R) => {
      const ce = R ?? new Set(
        E ? Ne.items.map(
          (Ie) => String($n(Ie, xe ?? "") ?? "")
        ) : []
      ), pe = new Set(ce);
      return pe.has(A) ? pe.delete(A) : pe.add(A), pe;
    });
  }, Lt = (A) => {
    const R = {};
    e.forEach((ce) => {
      ce.property && (R[ce.property] = $n(A, ce.property));
    }), W(R), Qe(String(s(A)));
  }, Ot = () => {
    const A = {};
    e.forEach((R) => {
      R.property && R.type === "boolean" && (A[R.property] = !1);
    }), W(A), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, G = (A) => {
    if (tt === "__new__") {
      const R = Object.fromEntries(
        e.filter((ce) => ce.property).map((ce) => [ce.property, et[ce.property]])
      );
      m?.(R);
    } else if (A != null) {
      const R = { ...A, ...et };
      M?.(A, R);
    }
    B();
  }, re = a && (b === "Top" || b === "TopAndBottom"), he = a && (b === "Bottom" || b === "TopAndBottom"), fe = h && e.some((A) => vs(A, h)), be = (A, R, ce) => A.render ? A.render(R, { index: 0 }) : ys($n(R, A.property), A.format), Te = (A) => {
    const R = [ge.cell];
    return A.align === "center" && R.push(ge.center), A.align === "right" && R.push(ge.right), A.frozen && R.push(ge.frozen), R.join(" ");
  };
  return /* @__PURE__ */ $("div", { className: [ge.grid, F].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ n(
      rs,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: w,
        showPageSizeSelector: k,
        ariaLabel: he ? "Pagination (top)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    ),
    (x || C || y) && /* @__PURE__ */ $("div", { className: ge.toolbar, children: [
      x && /* @__PURE__ */ n(
        "div",
        {
          className: [
            ge.groupPanel,
            xe ? ge.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: x ? (A) => A.preventDefault() : void 0,
          onDrop: x ? ue : void 0,
          children: xe ? /* @__PURE__ */ $("span", { className: ge.groupChip, children: [
            Fe?.title ?? xe,
            ":",
            " ",
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: ge.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${Fe?.title ?? xe}`,
                children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
              }
            )
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: N })
        }
      ),
      C && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ge.pickerButton,
          onClick: Ot,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ $("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => We((A) => !A),
            children: O
          }
        ),
        ve && /* @__PURE__ */ n(
          "div",
          {
            className: ge.pickerPanel,
            role: "menu",
            "aria-label": O,
            children: e.map((A, R) => {
              const ce = Ln(A, R);
              return /* @__PURE__ */ $("label", { className: ge.pickerItem, children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    type: "checkbox",
                    checked: le.has(ce),
                    onChange: () => U(ce)
                  }
                ),
                A.title ?? A.property
              ] }, ce);
            })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ $("div", { className: ge.data, children: [
      /* @__PURE__ */ $(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": Ne.total + 1,
          "aria-label": T,
          "aria-busy": P || void 0,
          children: [
            /* @__PURE__ */ $("colgroup", { children: [
              bt.map(({ key: A, column: R }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: ke[A] ?? R.width,
                    minWidth: R.minWidth,
                    maxWidth: R.maxWidth
                  }
                },
                A
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ $("thead", { children: [
              /* @__PURE__ */ $("tr", { children: [
                bt.map(({ key: A, column: R }) => {
                  const ce = ba(R, o), pe = Z.find((Me) => Me.property === R.property), Ie = pe ? Z.indexOf(pe) + 1 : 0, je = R.align ?? "left";
                  return /* @__PURE__ */ $(
                    "th",
                    {
                      "aria-sort": ce && pe ? ya[pe.sortOrder] : "none",
                      className: [
                        ge.header,
                        je === "center" ? ge.center : "",
                        je === "right" ? ge.right : "",
                        R.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: se[A] } : void 0,
                      scope: "col",
                      draggable: S || x || void 0,
                      onDragStart: S || x ? (Me) => {
                        Me.dataTransfer && (Me.dataTransfer.effectAllowed = "move"), Rt(A);
                      } : void 0,
                      onDragOver: S ? (Me) => Me.preventDefault() : void 0,
                      onDrop: S ? () => Jt(A) : void 0,
                      children: [
                        ce ? /* @__PURE__ */ $(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => R.property != null && J(R.property),
                            "aria-label": pe ? pe.sortOrder === "Ascending" ? `Sort ${R.title ?? R.property} descending` : `Sort ${R.title ?? R.property} ascending` : `Sort ${R.title ?? R.property} ascending`,
                            children: [
                              R.title ?? R.property,
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
                        ) : R.title ?? R.property,
                        g && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${R.title ?? R.property}`,
                            onMouseDown: (Me) => {
                              Me.preventDefault(), Me.stopPropagation();
                              const lt = ke[A] ?? R.width, St = lt ? parseFloat(lt) : 96;
                              ze(
                                A,
                                Me.clientX,
                                Number.isFinite(St) ? St : 96
                              );
                            },
                            onMouseMove: (Me) => {
                              z.current?.key === A && Xe(Me.clientX);
                            },
                            onMouseUp: vt,
                            onMouseLeave: () => {
                              z.current?.key === A && vt();
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
              fe && /* @__PURE__ */ n("tr", { children: bt.map(({ key: A, column: R }) => {
                if (!vs(R, h))
                  return /* @__PURE__ */ n("td", { className: ge.filterCell }, A);
                const ce = K.get(R.property ?? "");
                return /* @__PURE__ */ $("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ $(
                    "label",
                    {
                      className: ge.visuallyHidden,
                      htmlFor: `df-${R.property}`,
                      children: [
                        "Filter ",
                        R.title ?? R.property
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${R.property}`,
                      className: ge.filterSelect,
                      value: ce?.operator ?? jl(R.type ?? "string"),
                      onChange: (pe) => Se(R.property ?? "", {
                        ...ce,
                        operator: pe.target.value
                      }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: Vs.filter((pe) => pe !== "Custom").map(
                        (pe) => /* @__PURE__ */ n("option", { value: pe, children: pe }, pe)
                      )
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: ce?.value ?? "",
                      onChange: (pe) => Se(R.property ?? "", {
                        ...ce,
                        value: pe.target.value
                      }),
                      placeholder: `Filter ${R.title ?? R.property}`,
                      "aria-label": `${R.title ?? R.property} value`
                    }
                  )
                ] }, A);
              }) })
            ] }),
            /* @__PURE__ */ $("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ $("tr", { className: ge.editRow, children: [
                bt.map(({ key: A, column: R }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: R.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: R.type === "number" ? "number" : R.type === "boolean" ? "checkbox" : "text",
                    checked: R.type === "boolean" ? !!et[R.property] : void 0,
                    value: R.type === "boolean" ? void 0 : String(et[R.property] ?? ""),
                    onChange: (ce) => W((pe) => ({
                      ...pe,
                      [R.property]: R.type === "boolean" ? ce.target.checked : ce.target.value
                    })),
                    "aria-label": `${R.title ?? R.property} (new)`
                  }
                ) }, A)),
                me && /* @__PURE__ */ $("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: () => G(),
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
              dt.map((A) => {
                if (A.type === "group" && A.group) {
                  const je = Je.has(A.group.key);
                  return /* @__PURE__ */ n(
                    "tr",
                    {
                      className: ge.groupRow,
                      children: /* @__PURE__ */ n(
                        "td",
                        {
                          colSpan: bt.length + (me ? 1 : 0),
                          className: ge.groupCell,
                          children: /* @__PURE__ */ $(
                            "button",
                            {
                              type: "button",
                              className: ge.groupToggle,
                              "aria-expanded": je,
                              onClick: () => He(A.group.key),
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
                          )
                        }
                      )
                    },
                    `group-${A.group.key}`
                  );
                }
                const R = A.row, ce = s(R), pe = (f ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ $(
                  "tr",
                  {
                    className: [
                      V || _ !== "None" ? ge.clickable : "",
                      pe ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": _ !== "None" ? pe : void 0,
                    onClick: V || _ !== "None" ? (je) => {
                      va(je.target) || (Nt(R), Wt(R));
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
                              onChange: (lt) => W((St) => ({
                                ...St,
                                [Me.property]: Me.type === "boolean" ? lt.target.checked : lt.target.value
                              })),
                              "aria-label": `${Me.title ?? Me.property} (edit)`
                            }
                          ) : be(Me, R)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ $(Ce, { children: [
                        /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => G(R),
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
                      ] }) : /* @__PURE__ */ $(Ce, { children: [
                        I !== "None" && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Lt(R),
                            children: "Edit"
                          }
                        ),
                        D && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => D(R),
                            children: "Delete"
                          }
                        )
                      ] }) })
                    ]
                  },
                  ce
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
        pageNumbersCount: v,
        showSummary: w,
        showPageSizeSelector: k,
        ariaLabel: re ? "Pagination (bottom)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    )
  ] });
}
const ka = "_wrap_1e4xo_1", wa = "_grid_1e4xo_7", $a = "_stacked_1e4xo_13", Na = "_item_1e4xo_19", Oa = "_empty_1e4xo_25", Nn = {
  wrap: ka,
  grid: wa,
  stacked: $a,
  item: Na,
  empty: Oa
};
function Tb({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: s,
  wrapItems: o = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: h,
  loadingTemplate: r,
  isLoading: l = !1,
  showPageSizeSelector: a = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [v, b] = X(1), [w, k] = X(t), _ = e.length, f = Math.max(1, Math.ceil(_ / w)), u = Math.min(Math.max(1, v), f), y = $e(() => {
    const g = (u - 1) * w;
    return e.slice(g, g + w);
  }, [e, u, w]), O = o ? Nn.grid : Nn.stacked;
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Nn.wrap, p].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        l && r != null ? r : _ === 0 ? h ?? /* @__PURE__ */ n("div", { className: Nn.empty, children: c }) : /* @__PURE__ */ n("div", { className: O, children: y.map((g, S) => /* @__PURE__ */ n("div", { className: Nn.item, children: i ? i(g, S) : String(g) }, S)) }),
        /* @__PURE__ */ n(
          rs,
          {
            pageNumber: u,
            pageSize: w,
            count: _,
            pageSizeOptions: s,
            showPageSizeSelector: a,
            onPageChange: b,
            onPageSizeChange: (g) => {
              k(g), b(1);
            }
          }
        )
      ]
    }
  );
}
const Sa = "_label_1qfpw_1", za = {
  label: Sa
}, Rb = qe(function({ className: t, children: s, ...o }, i) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: i,
      className: [za.label, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}), Da = "_input_1xwnr_1", Ma = "_invalid_1xwnr_37", Ca = "_xs_1xwnr_44", Ea = "_sm_1xwnr_50", Ia = "_md_1xwnr_56", ja = "_lg_1xwnr_62", Aa = "_xl_1xwnr_68", Jn = {
  input: Da,
  invalid: Ma,
  xs: Ca,
  sm: Ea,
  md: Ia,
  lg: ja,
  xl: Aa
}, Lb = qe(function({ size: t = "md", invalid: s = !1, className: o, visible: i = !0, ...c }, h) {
  return i === !1 ? null : /* @__PURE__ */ n(
    "input",
    {
      ref: h,
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
}), Ta = "_checkbox_ppe6g_1", Ra = {
  checkbox: Ta
}, Pb = qe(
  function({ className: t, ...s }, o) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [Ra.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), La = {
  switch: "_switch_luh7n_1"
}, Pa = qe(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [La.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Ba = "_trigger_fnpn4_1", Fa = "_tooltip_fnpn4_7", qa = "_top_fnpn4_34", Ha = "_right_fnpn4_40", Ka = "_bottom_fnpn4_46", Ua = "_left_fnpn4_52", Wa = "_arrow_fnpn4_58", Pn = {
  trigger: Ba,
  tooltip: Fa,
  "se-tooltip-in": "_se-tooltip-in_fnpn4_1",
  top: qa,
  right: Ha,
  bottom: Ka,
  left: Ua,
  arrow: Wa
};
function Bb({
  content: e,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = Ye(), h = ae(null), [r, l] = X(!1), a = () => {
    h.current = window.setTimeout(() => l(!0), o);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), l(!1);
  };
  we(() => {
    if (!r) return;
    const v = (b) => {
      b.key === "Escape" && p();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [r]);
  const d = Tn(t) ? Hs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      r ? c : null
    ].filter((v) => typeof v == "string").join(" ") || void 0
  }) : t;
  return /* @__PURE__ */ $(
    "span",
    {
      className: [Pn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: a,
      onMouseLeave: p,
      onFocus: a,
      onBlur: p,
      children: [
        d,
        r && /* @__PURE__ */ $(
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
const Va = "_dialog_18lzl_1", Xa = "_sm_18lzl_72", Ga = "_md_18lzl_76", Ya = "_lg_18lzl_80", Za = "_header_18lzl_84", Ja = "_title_18lzl_94", Qa = "_description_18lzl_101", ei = "_close_18lzl_108", ti = "_body_18lzl_138", ni = "_footer_18lzl_150", Xt = {
  dialog: Va,
  "se-dialog-in": "_se-dialog-in_18lzl_1",
  sm: Xa,
  md: Ga,
  lg: Ya,
  header: Za,
  title: Ja,
  description: Qa,
  close: ei,
  body: ti,
  footer: ni
};
function Fb({
  open: e,
  onClose: t,
  title: s,
  description: o,
  children: i,
  footer: c,
  size: h = "md",
  width: r,
  height: l,
  className: a
}) {
  const p = ae(null), d = Ye(), v = Ye(), b = ae(t);
  we(() => {
    b.current = t;
  });
  const w = ae(!1), k = ae(!1), _ = H(() => {
    w.current || (w.current = !0, b.current());
  }, []), f = H(() => {
    if (k.current) {
      k.current = !1;
      return;
    }
    b.current();
  }, []);
  return we(() => {
    const u = p.current;
    if (u)
      if (e && !u.open) {
        const y = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        u.showModal(), (u.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? u.querySelector("button"))?.focus();
        const g = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const S = (x) => {
          x.preventDefault(), _();
        };
        return u.addEventListener("cancel", S), () => {
          u.removeEventListener("cancel", S), document.body.style.overflow = g, y?.focus({ preventScroll: !0 });
        };
      } else !e && u.open && (k.current = w.current, w.current = !1, u.close());
  }, [e, _]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ $(
    "dialog",
    {
      ref: p,
      className: [Xt.dialog, Xt[h], a].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: f,
      onClick: (u) => {
        u.target === p.current && _();
      },
      "aria-modal": "true",
      "aria-labelledby": s ? d : void 0,
      "aria-describedby": o ? v : void 0,
      children: [
        s && /* @__PURE__ */ $("header", { className: Xt.header, children: [
          /* @__PURE__ */ $("div", { children: [
            /* @__PURE__ */ n("h2", { id: d, className: Xt.title, children: s }),
            o && /* @__PURE__ */ n("p", { id: v, className: Xt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Xt.close,
              onClick: _,
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
const si = "_viewport_o7kje_1", ri = "_topLeft_o7kje_13", oi = "_topRight_o7kje_20", li = "_bottomLeft_o7kje_25", ai = "_toast_o7kje_30", ii = "_leaving_o7kje_61", ci = "_info_o7kje_77", di = "_success_o7kje_86", ui = "_warning_o7kje_95", _i = "_danger_o7kje_104", fi = "_content_o7kje_113", hi = "_title_o7kje_118", pi = "_description_o7kje_141", mi = "_dismiss_o7kje_148", gi = "_actions_o7kje_169", xi = "_action_o7kje_169", yi = "_cancel_o7kje_177", bi = "_progress_o7kje_215", pt = {
  viewport: si,
  topLeft: ri,
  topRight: oi,
  bottomLeft: li,
  toast: ai,
  "se-toast-in": "_se-toast-in_o7kje_1",
  leaving: ii,
  "se-toast-out": "_se-toast-out_o7kje_1",
  info: ci,
  success: di,
  warning: ui,
  danger: _i,
  content: fi,
  title: hi,
  description: pi,
  dismiss: mi,
  actions: gi,
  action: xi,
  cancel: yi,
  progress: bi,
  "se-toast-progress": "_se-toast-progress_o7kje_1"
}, Ys = Us(null);
function qb() {
  const e = Ks(Ys);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const vi = 200, ki = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Hb({
  children: e,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, h] = X([]), [r, l] = X(!1), a = ae([]), p = ae(/* @__PURE__ */ new Map()), d = ae(!1), v = ae(0), b = (M) => {
    d.current = M, l(M);
  }, w = H((M) => {
    const m = p.current.get(M);
    m && (window.clearTimeout(m.timeoutId), m.remaining = Math.max(
      0,
      m.remaining - (Date.now() - m.startedAt)
    ));
  }, []), k = H((M) => {
    const m = p.current.get(M);
    m && (window.clearTimeout(m.timeoutId), p.current.delete(M));
  }, []), _ = H(
    (M) => {
      k(M), h((m) => {
        const D = m.filter((P) => P.id !== M);
        return a.current = D, D;
      });
    },
    [k]
  ), f = H(
    (M) => {
      const m = a.current.find((D) => D.id === M);
      !m || m.leaving || (m.onAutoClose?.(), _(M));
    },
    [_]
  ), u = H(
    (M) => {
      const m = p.current.get(M);
      !m || m.remaining <= 0 || (m.startedAt = Date.now(), m.timeoutId = window.setTimeout(() => f(M), m.remaining));
    },
    [f]
  ), y = H(() => {
    d.current || p.current.forEach((M, m) => w(m)), b(!0);
  }, [w]), O = H(() => {
    p.current.forEach((M, m) => u(m)), b(!1);
  }, [u]);
  we(() => {
    if (!o) return;
    const M = () => {
      document.hidden ? y() : O();
    };
    return document.addEventListener("visibilitychange", M), () => document.removeEventListener("visibilitychange", M);
  }, [o, y, O]);
  const g = H(
    (M) => {
      const m = a.current.find((D) => D.id === M);
      !m || m.leaving || (m.onDismiss?.(), h((D) => {
        const P = D.map(
          (j) => j.id === M ? { ...j, leaving: !0 } : j
        );
        return a.current = P, P;
      }), window.setTimeout(() => _(M), vi));
    },
    [_]
  ), S = H(
    (M) => {
      if (M.durationMs <= 0) return;
      const m = {
        remaining: M.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(M.id, m), d.current || u(M.id);
    },
    [u]
  ), x = H(
    (M) => {
      const m = a.current.find((P) => P.id === M.id), D = {
        id: M.id ?? ++v.current,
        title: M.title,
        description: M.description,
        severity: M.severity ?? "info",
        durationMs: M.durationMs ?? t,
        action: M.action,
        cancel: M.cancel,
        dismissible: M.dismissible ?? !0,
        closeOnClick: M.closeOnClick ?? !1,
        showProgress: M.showProgress ?? !1,
        position: M.position ?? s,
        onDismiss: M.onDismiss,
        onAutoClose: M.onAutoClose
      };
      h((P) => {
        const j = m ? P.map(
          (T) => T.id === D.id ? { ...D, leaving: !1 } : T
        ) : [...P, D];
        return a.current = j, j;
      }), m && k(D.id), S(D);
    },
    [t, s, S, k]
  ), N = $e(() => ({ toast: x }), [x]), E = $e(
    () => Array.from(/* @__PURE__ */ new Set([s, ...c.map((M) => M.position)])),
    [s, c]
  ), I = o ? y : void 0, C = o ? O : void 0;
  return /* @__PURE__ */ $(Ys.Provider, { value: N, children: [
    e,
    E.map((M) => /* @__PURE__ */ n(
      "div",
      {
        className: [pt.viewport, pt[ki[M]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: C,
        children: c.filter((m) => m.position === M).map((m) => /* @__PURE__ */ $(
          "div",
          {
            role: m.severity === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": m.closeOnClick ? "true" : "false",
            className: [
              pt.toast,
              pt[m.severity],
              m.leaving ? pt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: m.closeOnClick ? () => g(m.id) : void 0,
            children: [
              /* @__PURE__ */ $("div", { className: pt.content, children: [
                /* @__PURE__ */ n("div", { className: pt.title, children: m.title }),
                m.description && /* @__PURE__ */ n("div", { className: pt.description, children: m.description }),
                (m.action || m.cancel) && /* @__PURE__ */ $("div", { className: pt.actions, children: [
                  m.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: pt.action,
                      onClick: () => {
                        m.action?.onClick?.(), g(m.id);
                      },
                      children: m.action.label
                    }
                  ),
                  m.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: pt.cancel,
                      onClick: () => {
                        m.cancel?.onClick?.(), g(m.id);
                      },
                      children: m.cancel.label
                    }
                  )
                ] })
              ] }),
              m.dismissible && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: pt.dismiss,
                  onClick: () => g(m.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
                }
              ),
              m.showProgress && m.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: pt.progress,
                  style: { animationDuration: `${m.durationMs}ms` }
                }
              )
            ]
          },
          m.id
        ))
      },
      M
    ))
  ] });
}
const wi = "_alert_12gyw_1", $i = "_xs_12gyw_28", Ni = "_sm_12gyw_38", Oi = "_lg_12gyw_48", Si = "_xl_12gyw_58", zi = "_primary_12gyw_69", Di = "_secondary_12gyw_74", Mi = "_light_12gyw_79", Ci = "_base_12gyw_84", Ei = "_dark_12gyw_89", Ii = "_info_12gyw_94", ji = "_success_12gyw_99", Ai = "_warning_12gyw_104", Ti = "_danger_12gyw_109", Ri = "_flat_12gyw_116", Li = "_outlined_12gyw_123", Pi = "_filled_12gyw_132", Bi = "_text_12gyw_139", Fi = "_icon_12gyw_181", qi = "_content_12gyw_192", Hi = "_title_12gyw_197", Ki = "_body_12gyw_203", Ui = "_dismiss_12gyw_209", Et = {
  alert: wi,
  xs: $i,
  sm: Ni,
  lg: Oi,
  xl: Si,
  primary: zi,
  secondary: Di,
  light: Mi,
  base: Ci,
  dark: Ei,
  info: Ii,
  success: ji,
  warning: Ai,
  danger: Ti,
  flat: Ri,
  outlined: Li,
  filled: Pi,
  text: Bi,
  icon: Fi,
  content: qi,
  title: Hi,
  body: Ki,
  dismiss: Ui,
  "shade-lighter": "_shade-lighter_12gyw_451",
  "shade-light": "_shade-light_12gyw_451",
  "shade-dark": "_shade-dark_12gyw_461",
  "shade-darker": "_shade-darker_12gyw_465"
}, Wi = {
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
function Kb({
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
  showIcon: h = !0,
  children: r,
  dismissible: l = !0,
  onDismiss: a,
  visible: p,
  onVisibleChange: d,
  className: v,
  ...b
}) {
  const [w, k] = X(!1);
  if (p === !1 || p === void 0 && w)
    return null;
  const _ = () => {
    p === void 0 && k(!0), a?.(), d?.(!1);
  }, f = e, u = ds(t, "filled"), y = s && s !== "default" ? `shade-${s}` : null, O = c ?? (h ? /* @__PURE__ */ n(De, { name: Wi[e] }) : null);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "alert",
      ...b,
      className: [
        Et.alert,
        Et[f],
        Et[u],
        y ? Et[y] : null,
        Et[o],
        v
      ].filter(Boolean).join(" "),
      children: [
        O != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: O }),
        /* @__PURE__ */ $("div", { className: Et.content, children: [
          i && /* @__PURE__ */ n("div", { className: Et.title, children: i }),
          r && /* @__PURE__ */ n("div", { className: Et.body, children: r })
        ] }),
        l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: _,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Vi = "_skeleton_7ssmn_1", Xi = "_text_7ssmn_35", Gi = "_circle_7ssmn_40", Yi = "_rect_7ssmn_44", ks = {
  skeleton: Vi,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_7ssmn_1",
  text: Xi,
  circle: Gi,
  rect: Yi
};
function Ub({
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
const Zi = "_row_tkkv2_1", Ji = "_gapXs_tkkv2_12", Qi = "_gapSm_tkkv2_17", ec = "_gapMd_tkkv2_22", tc = "_gapLg_tkkv2_27", nc = "_gapXl_tkkv2_32", sc = "_start_tkkv2_37", rc = "_center_tkkv2_41", oc = "_end_tkkv2_45", lc = "_stretch_tkkv2_49", ac = "_baseline_tkkv2_53", ic = "_noWrap_tkkv2_109", cc = "_wrapReverse_tkkv2_113", dc = "_gapRowXs_tkkv2_117", uc = "_gapRowSm_tkkv2_121", _c = "_gapRowMd_tkkv2_125", fc = "_gapRowLg_tkkv2_129", hc = "_gapRowXl_tkkv2_133", an = {
  row: Zi,
  gapXs: Ji,
  gapSm: Qi,
  gapMd: ec,
  gapLg: tc,
  gapXl: nc,
  start: sc,
  center: rc,
  end: oc,
  stretch: lc,
  baseline: ac,
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
  noWrap: ic,
  wrapReverse: cc,
  gapRowXs: dc,
  gapRowSm: uc,
  gapRowMd: _c,
  gapRowLg: fc,
  gapRowXl: hc
}, pc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, mc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function gc(e) {
  return typeof e != "string" ? null : pc[e] ?? null;
}
function xc(e) {
  return typeof e != "string" ? null : mc[e] ?? null;
}
function ws(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Wb({
  gap: e,
  rowGap: t,
  align: s = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: h,
  ...r
}) {
  const l = gc(e), a = xc(t), p = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, d = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...p ? { gap: p, "--dx-col-gap": p } : {},
    ...t != null && !a ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...h
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        an.row,
        an[s],
        an[`justify-${o}`],
        ws(i) != null ? an[ws(i)] : null,
        l ? an[l] : null,
        a ? an[a] : null,
        c
      ].filter(Boolean).join(" "),
      style: d,
      ...r
    }
  );
}
const yc = "_column_sh0ss_1", bc = "_Size1_sh0ss_15", vc = "_Size2_sh0ss_24", kc = "_Size3_sh0ss_33", wc = "_Size4_sh0ss_42", $c = "_Size5_sh0ss_51", Nc = "_Size6_sh0ss_60", Oc = "_Size7_sh0ss_69", Sc = "_Size8_sh0ss_78", zc = "_Size9_sh0ss_87", Dc = "_Size10_sh0ss_96", Mc = "_Size11_sh0ss_105", Cc = "_Size12_sh0ss_114", Ec = "_Offset0_sh0ss_119", Ic = "_Offset1_sh0ss_122", jc = "_Offset2_sh0ss_127", Ac = "_Offset3_sh0ss_132", Tc = "_Offset4_sh0ss_137", Rc = "_Offset5_sh0ss_142", Lc = "_Offset6_sh0ss_147", Pc = "_Offset7_sh0ss_152", Bc = "_Offset8_sh0ss_157", Fc = "_Offset9_sh0ss_162", qc = "_Offset10_sh0ss_167", Hc = "_Offset11_sh0ss_172", Kc = "_Offset12_sh0ss_177", Uc = "_OrderFirst_sh0ss_182", Wc = "_OrderLast_sh0ss_185", Vc = "_Order0_sh0ss_188", Xc = "_Order1_sh0ss_191", Gc = "_Order2_sh0ss_194", Yc = "_Order3_sh0ss_197", Zc = "_Order4_sh0ss_200", Jc = "_Order5_sh0ss_203", Qc = "_Order6_sh0ss_206", ed = "_Order7_sh0ss_209", td = "_Order8_sh0ss_212", nd = "_Order9_sh0ss_215", sd = "_Order10_sh0ss_218", rd = "_Order11_sh0ss_221", od = "_Order12_sh0ss_224", ld = "_xsSize1_sh0ss_229", ad = "_xsSize2_sh0ss_238", id = "_xsSize3_sh0ss_247", cd = "_xsSize4_sh0ss_256", dd = "_xsSize5_sh0ss_265", ud = "_xsSize6_sh0ss_274", _d = "_xsSize7_sh0ss_283", fd = "_xsSize8_sh0ss_292", hd = "_xsSize9_sh0ss_301", pd = "_xsSize10_sh0ss_310", md = "_xsSize11_sh0ss_321", gd = "_xsSize12_sh0ss_332", xd = "_xsOffset0_sh0ss_337", yd = "_xsOffset1_sh0ss_340", bd = "_xsOffset2_sh0ss_345", vd = "_xsOffset3_sh0ss_350", kd = "_xsOffset4_sh0ss_355", wd = "_xsOffset5_sh0ss_360", $d = "_xsOffset6_sh0ss_365", Nd = "_xsOffset7_sh0ss_370", Od = "_xsOffset8_sh0ss_375", Sd = "_xsOffset9_sh0ss_380", zd = "_xsOffset10_sh0ss_385", Dd = "_xsOffset11_sh0ss_391", Md = "_xsOffset12_sh0ss_397", Cd = "_xsOrderFirst_sh0ss_403", Ed = "_xsOrderLast_sh0ss_406", Id = "_xsOrder0_sh0ss_409", jd = "_xsOrder1_sh0ss_412", Ad = "_xsOrder2_sh0ss_415", Td = "_xsOrder3_sh0ss_418", Rd = "_xsOrder4_sh0ss_421", Ld = "_xsOrder5_sh0ss_424", Pd = "_xsOrder6_sh0ss_427", Bd = "_xsOrder7_sh0ss_430", Fd = "_xsOrder8_sh0ss_433", qd = "_xsOrder9_sh0ss_436", Hd = "_xsOrder10_sh0ss_439", Kd = "_xsOrder11_sh0ss_442", Ud = "_xsOrder12_sh0ss_445", Wd = "_smSize1_sh0ss_451", Vd = "_smSize2_sh0ss_460", Xd = "_smSize3_sh0ss_469", Gd = "_smSize4_sh0ss_478", Yd = "_smSize5_sh0ss_487", Zd = "_smSize6_sh0ss_496", Jd = "_smSize7_sh0ss_505", Qd = "_smSize8_sh0ss_514", eu = "_smSize9_sh0ss_523", tu = "_smSize10_sh0ss_532", nu = "_smSize11_sh0ss_543", su = "_smSize12_sh0ss_554", ru = "_smOffset0_sh0ss_559", ou = "_smOffset1_sh0ss_562", lu = "_smOffset2_sh0ss_567", au = "_smOffset3_sh0ss_572", iu = "_smOffset4_sh0ss_577", cu = "_smOffset5_sh0ss_582", du = "_smOffset6_sh0ss_587", uu = "_smOffset7_sh0ss_592", _u = "_smOffset8_sh0ss_597", fu = "_smOffset9_sh0ss_602", hu = "_smOffset10_sh0ss_607", pu = "_smOffset11_sh0ss_613", mu = "_smOffset12_sh0ss_619", gu = "_smOrderFirst_sh0ss_625", xu = "_smOrderLast_sh0ss_628", yu = "_smOrder0_sh0ss_631", bu = "_smOrder1_sh0ss_634", vu = "_smOrder2_sh0ss_637", ku = "_smOrder3_sh0ss_640", wu = "_smOrder4_sh0ss_643", $u = "_smOrder5_sh0ss_646", Nu = "_smOrder6_sh0ss_649", Ou = "_smOrder7_sh0ss_652", Su = "_smOrder8_sh0ss_655", zu = "_smOrder9_sh0ss_658", Du = "_smOrder10_sh0ss_661", Mu = "_smOrder11_sh0ss_664", Cu = "_smOrder12_sh0ss_667", Eu = "_mdSize1_sh0ss_673", Iu = "_mdSize2_sh0ss_682", ju = "_mdSize3_sh0ss_691", Au = "_mdSize4_sh0ss_700", Tu = "_mdSize5_sh0ss_709", Ru = "_mdSize6_sh0ss_718", Lu = "_mdSize7_sh0ss_727", Pu = "_mdSize8_sh0ss_736", Bu = "_mdSize9_sh0ss_745", Fu = "_mdSize10_sh0ss_754", qu = "_mdSize11_sh0ss_765", Hu = "_mdSize12_sh0ss_776", Ku = "_mdOffset0_sh0ss_781", Uu = "_mdOffset1_sh0ss_784", Wu = "_mdOffset2_sh0ss_789", Vu = "_mdOffset3_sh0ss_794", Xu = "_mdOffset4_sh0ss_799", Gu = "_mdOffset5_sh0ss_804", Yu = "_mdOffset6_sh0ss_809", Zu = "_mdOffset7_sh0ss_814", Ju = "_mdOffset8_sh0ss_819", Qu = "_mdOffset9_sh0ss_824", e_ = "_mdOffset10_sh0ss_829", t_ = "_mdOffset11_sh0ss_835", n_ = "_mdOffset12_sh0ss_841", s_ = "_mdOrderFirst_sh0ss_847", r_ = "_mdOrderLast_sh0ss_850", o_ = "_mdOrder0_sh0ss_853", l_ = "_mdOrder1_sh0ss_856", a_ = "_mdOrder2_sh0ss_859", i_ = "_mdOrder3_sh0ss_862", c_ = "_mdOrder4_sh0ss_865", d_ = "_mdOrder5_sh0ss_868", u_ = "_mdOrder6_sh0ss_871", __ = "_mdOrder7_sh0ss_874", f_ = "_mdOrder8_sh0ss_877", h_ = "_mdOrder9_sh0ss_880", p_ = "_mdOrder10_sh0ss_883", m_ = "_mdOrder11_sh0ss_886", g_ = "_mdOrder12_sh0ss_889", x_ = "_lgSize1_sh0ss_895", y_ = "_lgSize2_sh0ss_904", b_ = "_lgSize3_sh0ss_913", v_ = "_lgSize4_sh0ss_922", k_ = "_lgSize5_sh0ss_931", w_ = "_lgSize6_sh0ss_940", $_ = "_lgSize7_sh0ss_949", N_ = "_lgSize8_sh0ss_958", O_ = "_lgSize9_sh0ss_967", S_ = "_lgSize10_sh0ss_976", z_ = "_lgSize11_sh0ss_987", D_ = "_lgSize12_sh0ss_998", M_ = "_lgOffset0_sh0ss_1003", C_ = "_lgOffset1_sh0ss_1006", E_ = "_lgOffset2_sh0ss_1011", I_ = "_lgOffset3_sh0ss_1016", j_ = "_lgOffset4_sh0ss_1021", A_ = "_lgOffset5_sh0ss_1026", T_ = "_lgOffset6_sh0ss_1031", R_ = "_lgOffset7_sh0ss_1036", L_ = "_lgOffset8_sh0ss_1041", P_ = "_lgOffset9_sh0ss_1046", B_ = "_lgOffset10_sh0ss_1051", F_ = "_lgOffset11_sh0ss_1057", q_ = "_lgOffset12_sh0ss_1063", H_ = "_lgOrderFirst_sh0ss_1069", K_ = "_lgOrderLast_sh0ss_1072", U_ = "_lgOrder0_sh0ss_1075", W_ = "_lgOrder1_sh0ss_1078", V_ = "_lgOrder2_sh0ss_1081", X_ = "_lgOrder3_sh0ss_1084", G_ = "_lgOrder4_sh0ss_1087", Y_ = "_lgOrder5_sh0ss_1090", Z_ = "_lgOrder6_sh0ss_1093", J_ = "_lgOrder7_sh0ss_1096", Q_ = "_lgOrder8_sh0ss_1099", ef = "_lgOrder9_sh0ss_1102", tf = "_lgOrder10_sh0ss_1105", nf = "_lgOrder11_sh0ss_1108", sf = "_lgOrder12_sh0ss_1111", rf = "_xlSize1_sh0ss_1117", of = "_xlSize2_sh0ss_1126", lf = "_xlSize3_sh0ss_1135", af = "_xlSize4_sh0ss_1144", cf = "_xlSize5_sh0ss_1153", df = "_xlSize6_sh0ss_1162", uf = "_xlSize7_sh0ss_1171", _f = "_xlSize8_sh0ss_1180", ff = "_xlSize9_sh0ss_1189", hf = "_xlSize10_sh0ss_1198", pf = "_xlSize11_sh0ss_1209", mf = "_xlSize12_sh0ss_1220", gf = "_xlOffset0_sh0ss_1225", xf = "_xlOffset1_sh0ss_1228", yf = "_xlOffset2_sh0ss_1233", bf = "_xlOffset3_sh0ss_1238", vf = "_xlOffset4_sh0ss_1243", kf = "_xlOffset5_sh0ss_1248", wf = "_xlOffset6_sh0ss_1253", $f = "_xlOffset7_sh0ss_1258", Nf = "_xlOffset8_sh0ss_1263", Of = "_xlOffset9_sh0ss_1268", Sf = "_xlOffset10_sh0ss_1273", zf = "_xlOffset11_sh0ss_1279", Df = "_xlOffset12_sh0ss_1285", Mf = "_xlOrderFirst_sh0ss_1291", Cf = "_xlOrderLast_sh0ss_1294", Ef = "_xlOrder0_sh0ss_1297", If = "_xlOrder1_sh0ss_1300", jf = "_xlOrder2_sh0ss_1303", Af = "_xlOrder3_sh0ss_1306", Tf = "_xlOrder4_sh0ss_1309", Rf = "_xlOrder5_sh0ss_1312", Lf = "_xlOrder6_sh0ss_1315", Pf = "_xlOrder7_sh0ss_1318", Bf = "_xlOrder8_sh0ss_1321", Ff = "_xlOrder9_sh0ss_1324", qf = "_xlOrder10_sh0ss_1327", Hf = "_xlOrder11_sh0ss_1330", Kf = "_xlOrder12_sh0ss_1333", Uf = "_xxSize1_sh0ss_1339", Wf = "_xxSize2_sh0ss_1348", Vf = "_xxSize3_sh0ss_1357", Xf = "_xxSize4_sh0ss_1366", Gf = "_xxSize5_sh0ss_1375", Yf = "_xxSize6_sh0ss_1384", Zf = "_xxSize7_sh0ss_1393", Jf = "_xxSize8_sh0ss_1402", Qf = "_xxSize9_sh0ss_1411", e1 = "_xxSize10_sh0ss_1420", t1 = "_xxSize11_sh0ss_1431", n1 = "_xxSize12_sh0ss_1442", s1 = "_xxOffset0_sh0ss_1447", r1 = "_xxOffset1_sh0ss_1450", o1 = "_xxOffset2_sh0ss_1455", l1 = "_xxOffset3_sh0ss_1460", a1 = "_xxOffset4_sh0ss_1465", i1 = "_xxOffset5_sh0ss_1470", c1 = "_xxOffset6_sh0ss_1475", d1 = "_xxOffset7_sh0ss_1480", u1 = "_xxOffset8_sh0ss_1485", _1 = "_xxOffset9_sh0ss_1490", f1 = "_xxOffset10_sh0ss_1495", h1 = "_xxOffset11_sh0ss_1501", p1 = "_xxOffset12_sh0ss_1507", m1 = "_xxOrderFirst_sh0ss_1513", g1 = "_xxOrderLast_sh0ss_1516", x1 = "_xxOrder0_sh0ss_1519", y1 = "_xxOrder1_sh0ss_1522", b1 = "_xxOrder2_sh0ss_1525", v1 = "_xxOrder3_sh0ss_1528", k1 = "_xxOrder4_sh0ss_1531", w1 = "_xxOrder5_sh0ss_1534", $1 = "_xxOrder6_sh0ss_1537", N1 = "_xxOrder7_sh0ss_1540", O1 = "_xxOrder8_sh0ss_1543", S1 = "_xxOrder9_sh0ss_1546", z1 = "_xxOrder10_sh0ss_1549", D1 = "_xxOrder11_sh0ss_1552", M1 = "_xxOrder12_sh0ss_1555", Bn = {
  column: yc,
  Size1: bc,
  Size2: vc,
  Size3: kc,
  Size4: wc,
  Size5: $c,
  Size6: Nc,
  Size7: Oc,
  Size8: Sc,
  Size9: zc,
  Size10: Dc,
  Size11: Mc,
  Size12: Cc,
  Offset0: Ec,
  Offset1: Ic,
  Offset2: jc,
  Offset3: Ac,
  Offset4: Tc,
  Offset5: Rc,
  Offset6: Lc,
  Offset7: Pc,
  Offset8: Bc,
  Offset9: Fc,
  Offset10: qc,
  Offset11: Hc,
  Offset12: Kc,
  OrderFirst: Uc,
  OrderLast: Wc,
  Order0: Vc,
  Order1: Xc,
  Order2: Gc,
  Order3: Yc,
  Order4: Zc,
  Order5: Jc,
  Order6: Qc,
  Order7: ed,
  Order8: td,
  Order9: nd,
  Order10: sd,
  Order11: rd,
  Order12: od,
  xsSize1: ld,
  xsSize2: ad,
  xsSize3: id,
  xsSize4: cd,
  xsSize5: dd,
  xsSize6: ud,
  xsSize7: _d,
  xsSize8: fd,
  xsSize9: hd,
  xsSize10: pd,
  xsSize11: md,
  xsSize12: gd,
  xsOffset0: xd,
  xsOffset1: yd,
  xsOffset2: bd,
  xsOffset3: vd,
  xsOffset4: kd,
  xsOffset5: wd,
  xsOffset6: $d,
  xsOffset7: Nd,
  xsOffset8: Od,
  xsOffset9: Sd,
  xsOffset10: zd,
  xsOffset11: Dd,
  xsOffset12: Md,
  xsOrderFirst: Cd,
  xsOrderLast: Ed,
  xsOrder0: Id,
  xsOrder1: jd,
  xsOrder2: Ad,
  xsOrder3: Td,
  xsOrder4: Rd,
  xsOrder5: Ld,
  xsOrder6: Pd,
  xsOrder7: Bd,
  xsOrder8: Fd,
  xsOrder9: qd,
  xsOrder10: Hd,
  xsOrder11: Kd,
  xsOrder12: Ud,
  smSize1: Wd,
  smSize2: Vd,
  smSize3: Xd,
  smSize4: Gd,
  smSize5: Yd,
  smSize6: Zd,
  smSize7: Jd,
  smSize8: Qd,
  smSize9: eu,
  smSize10: tu,
  smSize11: nu,
  smSize12: su,
  smOffset0: ru,
  smOffset1: ou,
  smOffset2: lu,
  smOffset3: au,
  smOffset4: iu,
  smOffset5: cu,
  smOffset6: du,
  smOffset7: uu,
  smOffset8: _u,
  smOffset9: fu,
  smOffset10: hu,
  smOffset11: pu,
  smOffset12: mu,
  smOrderFirst: gu,
  smOrderLast: xu,
  smOrder0: yu,
  smOrder1: bu,
  smOrder2: vu,
  smOrder3: ku,
  smOrder4: wu,
  smOrder5: $u,
  smOrder6: Nu,
  smOrder7: Ou,
  smOrder8: Su,
  smOrder9: zu,
  smOrder10: Du,
  smOrder11: Mu,
  smOrder12: Cu,
  mdSize1: Eu,
  mdSize2: Iu,
  mdSize3: ju,
  mdSize4: Au,
  mdSize5: Tu,
  mdSize6: Ru,
  mdSize7: Lu,
  mdSize8: Pu,
  mdSize9: Bu,
  mdSize10: Fu,
  mdSize11: qu,
  mdSize12: Hu,
  mdOffset0: Ku,
  mdOffset1: Uu,
  mdOffset2: Wu,
  mdOffset3: Vu,
  mdOffset4: Xu,
  mdOffset5: Gu,
  mdOffset6: Yu,
  mdOffset7: Zu,
  mdOffset8: Ju,
  mdOffset9: Qu,
  mdOffset10: e_,
  mdOffset11: t_,
  mdOffset12: n_,
  mdOrderFirst: s_,
  mdOrderLast: r_,
  mdOrder0: o_,
  mdOrder1: l_,
  mdOrder2: a_,
  mdOrder3: i_,
  mdOrder4: c_,
  mdOrder5: d_,
  mdOrder6: u_,
  mdOrder7: __,
  mdOrder8: f_,
  mdOrder9: h_,
  mdOrder10: p_,
  mdOrder11: m_,
  mdOrder12: g_,
  lgSize1: x_,
  lgSize2: y_,
  lgSize3: b_,
  lgSize4: v_,
  lgSize5: k_,
  lgSize6: w_,
  lgSize7: $_,
  lgSize8: N_,
  lgSize9: O_,
  lgSize10: S_,
  lgSize11: z_,
  lgSize12: D_,
  lgOffset0: M_,
  lgOffset1: C_,
  lgOffset2: E_,
  lgOffset3: I_,
  lgOffset4: j_,
  lgOffset5: A_,
  lgOffset6: T_,
  lgOffset7: R_,
  lgOffset8: L_,
  lgOffset9: P_,
  lgOffset10: B_,
  lgOffset11: F_,
  lgOffset12: q_,
  lgOrderFirst: H_,
  lgOrderLast: K_,
  lgOrder0: U_,
  lgOrder1: W_,
  lgOrder2: V_,
  lgOrder3: X_,
  lgOrder4: G_,
  lgOrder5: Y_,
  lgOrder6: Z_,
  lgOrder7: J_,
  lgOrder8: Q_,
  lgOrder9: ef,
  lgOrder10: tf,
  lgOrder11: nf,
  lgOrder12: sf,
  xlSize1: rf,
  xlSize2: of,
  xlSize3: lf,
  xlSize4: af,
  xlSize5: cf,
  xlSize6: df,
  xlSize7: uf,
  xlSize8: _f,
  xlSize9: ff,
  xlSize10: hf,
  xlSize11: pf,
  xlSize12: mf,
  xlOffset0: gf,
  xlOffset1: xf,
  xlOffset2: yf,
  xlOffset3: bf,
  xlOffset4: vf,
  xlOffset5: kf,
  xlOffset6: wf,
  xlOffset7: $f,
  xlOffset8: Nf,
  xlOffset9: Of,
  xlOffset10: Sf,
  xlOffset11: zf,
  xlOffset12: Df,
  xlOrderFirst: Mf,
  xlOrderLast: Cf,
  xlOrder0: Ef,
  xlOrder1: If,
  xlOrder2: jf,
  xlOrder3: Af,
  xlOrder4: Tf,
  xlOrder5: Rf,
  xlOrder6: Lf,
  xlOrder7: Pf,
  xlOrder8: Bf,
  xlOrder9: Ff,
  xlOrder10: qf,
  xlOrder11: Hf,
  xlOrder12: Kf,
  xxSize1: Uf,
  xxSize2: Wf,
  xxSize3: Vf,
  xxSize4: Xf,
  xxSize5: Gf,
  xxSize6: Yf,
  xxSize7: Zf,
  xxSize8: Jf,
  xxSize9: Qf,
  xxSize10: e1,
  xxSize11: t1,
  xxSize12: n1,
  xxOffset0: s1,
  xxOffset1: r1,
  xxOffset2: o1,
  xxOffset3: l1,
  xxOffset4: a1,
  xxOffset5: i1,
  xxOffset6: c1,
  xxOffset7: d1,
  xxOffset8: u1,
  xxOffset9: _1,
  xxOffset10: f1,
  xxOffset11: h1,
  xxOffset12: p1,
  xxOrderFirst: m1,
  xxOrderLast: g1,
  xxOrder0: x1,
  xxOrder1: y1,
  xxOrder2: b1,
  xxOrder3: v1,
  xxOrder4: k1,
  xxOrder5: w1,
  xxOrder6: $1,
  xxOrder7: N1,
  xxOrder8: O1,
  xxOrder9: S1,
  xxOrder10: z1,
  xxOrder11: D1,
  xxOrder12: M1
}, C1 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function E1(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function I1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function j1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function A1(e, t, s) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (j1(s, t), `${e}Order${t}`);
}
function Vb({ className: e, style: t, ...s }) {
  const o = [Bn.column], i = { ...t };
  for (const [C, M, m, D] of C1) {
    const P = s[M], j = s[m], T = s[D];
    if (P != null) {
      E1(M, P);
      const F = Bn[`${C}Size${P}`];
      F && o.push(F);
    }
    if (j != null) {
      I1(m, j);
      const F = Bn[`${C}Offset${j}`];
      F && o.push(F);
    }
    if (T != null) {
      const F = Bn[A1(C, T, D)];
      F && o.push(F);
    }
  }
  const {
    size: c,
    offset: h,
    sizeXs: r,
    offsetXs: l,
    sizeSm: a,
    offsetSm: p,
    sizeMd: d,
    offsetMd: v,
    sizeLg: b,
    offsetLg: w,
    sizeXl: k,
    offsetXl: _,
    sizeXx: f,
    offsetXx: u,
    order: y,
    orderXs: O,
    orderSm: g,
    orderMd: S,
    orderLg: x,
    orderXl: N,
    orderXx: E,
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
const T1 = "_stack_1yc1g_1", R1 = "_gapXs_1yc1g_29", L1 = "_gapSm_1yc1g_33", P1 = "_gapMd_1yc1g_37", B1 = "_gapLg_1yc1g_41", F1 = "_gapXl_1yc1g_45", cn = {
  stack: T1,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: R1,
  gapSm: L1,
  gapMd: P1,
  gapLg: B1,
  gapXl: F1,
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
}, q1 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function H1(e) {
  return typeof e != "string" ? null : q1[e] ?? null;
}
function $s(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Xb({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: s = !0,
  gap: o = "sm",
  align: i,
  justify: c,
  className: h,
  style: r,
  ...l
}) {
  const a = H1(o), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !a ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...r
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        cn.stack,
        cn[`dir-${p}`],
        $s(s) !== "wrap" ? cn[`wrap-${$s(s)}`] : null,
        i != null ? cn[`align-${i}`] : null,
        c != null ? cn[`justify-${c}`] : null,
        a ? cn[a] : null,
        h
      ].filter(Boolean).join(" "),
      style: d,
      ...l
    }
  );
}
const K1 = "_layout_fxvw1_1", U1 = "_row_fxvw1_7", W1 = "_grid_fxvw1_21", V1 = "_gridRight_fxvw1_27", X1 = "_gridHeader_fxvw1_31", G1 = "_gridFooter_fxvw1_36", Y1 = "_gridContents_fxvw1_41", Z1 = "_gridBody_fxvw1_45", Pt = {
  layout: K1,
  row: U1,
  grid: W1,
  gridRight: V1,
  gridHeader: X1,
  gridFooter: G1,
  gridContents: Y1,
  gridBody: Z1
}, J1 = "_footer_1thaw_1", Q1 = "_sticky_1thaw_9", Ns = {
  footer: J1,
  sticky: Q1
};
function eh({
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
const th = "_header_wh9gi_1", nh = "_sticky_wh9gi_9", Os = {
  header: th,
  sticky: nh
};
function sh({
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
const rh = "_sidebar_12teb_1", oh = "_left_12teb_9", lh = "_right_12teb_13", ah = "_start_12teb_18", ih = "_end_12teb_22", ch = "_fullHeight_12teb_28", dh = "_collapsed_12teb_32", uh = "_responsive_12teb_40", _h = "_overlay_12teb_48", fh = "_mask_12teb_76", en = {
  sidebar: rh,
  left: oh,
  right: lh,
  start: ah,
  end: ih,
  fullHeight: ch,
  collapsed: dh,
  responsive: uh,
  overlay: _h,
  mask: fh
};
function hh({
  position: e = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  fullHeight: i = !1,
  onClose: c,
  className: h,
  children: r,
  ...l
}) {
  return we(() => {
    if (!o || !t || c == null) return;
    const a = (p) => {
      p.key === "Escape" && c();
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [o, t, c]), /* @__PURE__ */ $(Ce, { children: [
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
          h
        ].flat().filter(Boolean).join(" "),
        ...l,
        children: r
      }
    )
  ] });
}
function Gb(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(Ce, { children: e.children });
  const { className: t, children: s, ...o } = e, i = [], c = [], h = [], r = [], l = [], a = [];
  nr.forEach(s, (v) => {
    if (!Tn(v)) {
      h.push(v);
      return;
    }
    if (v.type === sh)
      i.push(v);
    else if (v.type === eh)
      c.push(v);
    else if (v.type === hh) {
      const b = v, w = b.props.position;
      a.push(b), (w === "right" || w === "end" ? l : r).push(b);
    } else
      h.push(v);
  });
  const p = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, d = p != null && (p.props.position === "right" || p.props.position === "end");
  if (p) {
    const v = d ? l : r;
    return /* @__PURE__ */ $(
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
          /* @__PURE__ */ $("div", { className: Pt.gridContents, children: [
            v,
            /* @__PURE__ */ n("div", { className: Pt.gridBody, children: h })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: Pt.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Pt.layout, t].filter(Boolean).join(" "),
      ...o,
      children: [
        i,
        /* @__PURE__ */ $("div", { className: Pt.row, children: [
          r,
          h,
          l
        ] }),
        c
      ]
    }
  );
}
const ph = "_body_akga4_1", mh = "_bare_akga4_10", Ss = {
  body: ph,
  bare: mh
};
function Yb({
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
const gh = "_toggle_1qjb4_1", xh = {
  toggle: gh
};
function Zb({
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
      className: [xh.toggle, s].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(De, { name: e, size: 20 })
    }
  );
}
const yh = "_track_14127_1", bh = "_bar_14127_31", vh = "_primary_14127_39", kh = "_success_14127_43", wh = "_warning_14127_47", $h = "_danger_14127_51", Nh = "_indeterminate_14127_149", Oh = "_circular_14127_163", Sh = "_fill_14127_203", mt = {
  track: yh,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: bh,
  primary: vh,
  success: kh,
  warning: wh,
  danger: $h,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Nh,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Oh,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Sh,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function Jb({
  value: e = 0,
  max: t = 100,
  severity: s = "primary",
  shade: o,
  indeterminate: i = !1,
  variant: c = "linear",
  size: h = "md",
  className: r,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const p = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? p / t * 100 : 0;
  if (c === "circular") {
    const b = typeof h == "string", w = 2, k = 10.5, _ = 2 * Math.PI * k, f = _ * (i ? 0.75 : 1), u = i ? 0 : _ * (1 - d / 100);
    return /* @__PURE__ */ $(
      "svg",
      {
        width: b ? void 0 : h,
        height: b ? void 0 : h,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(p),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          mt.circular,
          mt[s],
          o && o !== "default" ? mt[`shade-${o}`] : null,
          b ? mt[`circular-${h}`] : null,
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
              r: k,
              strokeWidth: w
            }
          ),
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.fill,
              cx: 12,
              cy: 12,
              r: k,
              strokeWidth: w,
              strokeDasharray: `${f} ${_}`,
              strokeDashoffset: u
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
      "aria-valuenow": i ? void 0 : Math.round(p),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        mt.track,
        mt[s],
        v ? mt[v] : null,
        typeof h == "string" ? mt[`linear-${h}`] : null,
        i ? mt.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...a,
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
function Qb(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function zh(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Zs(e) {
  const [t, s] = X(() => zh(e));
  return we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    s(o.matches);
    const i = (c) => s(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const Dh = "_wrapper_1qmsj_1", Mh = {
  wrapper: Dh
}, Js = "dx-theme";
function Ch(e) {
  const t = e === void 0 ? Js : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(t);
      return s === "light" || s === "dark" || s === "system" ? s : void 0;
    } catch {
      return;
    }
}
function Eh(e, t) {
  const s = e === void 0 ? Js : e;
  if (!(s === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(s, t);
    } catch {
    }
}
function ev({
  value: e,
  defaultValue: t,
  storageKey: s,
  onChange: o,
  label: i = "Dark mode",
  className: c
}) {
  const h = Zs("(prefers-color-scheme: dark)"), [r, l] = X(void 0), a = e ?? r ?? Ch(s) ?? t ?? "system", p = a === "system" ? h ? "dark" : "light" : a;
  we(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const d = (v) => {
    const b = v.target.checked ? "dark" : "light";
    e === void 0 && l(b), Eh(s, b), o?.(b);
  };
  return /* @__PURE__ */ $("label", { className: [Mh.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ n(Pa, { checked: p === "dark", onChange: d })
  ] });
}
const Ih = "_avatar_yj2hz_1", jh = "_xs_yj2hz_12", Ah = "_sm_yj2hz_18", Th = "_md_yj2hz_24", Rh = "_lg_yj2hz_30", Lh = "_xl_yj2hz_36", Ph = "_initials_yj2hz_42", Bh = "_image_yj2hz_57", Fh = "_status_yj2hz_64", qh = "_online_yj2hz_84", Hh = "_offline_yj2hz_88", Kh = "_away_yj2hz_92", dn = {
  avatar: Ih,
  xs: jh,
  sm: Ah,
  md: Th,
  lg: Rh,
  xl: Lh,
  initials: Ph,
  image: Bh,
  status: Fh,
  online: qh,
  offline: Hh,
  away: Kh
}, Xn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Uh(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Wh(e) {
  let t = 0;
  for (let s = 0; s < e.length; s += 1)
    t = t * 31 + e.charCodeAt(s) >>> 0;
  return Xn[t % Xn.length] ?? Xn[0];
}
function tv({
  name: e,
  src: t,
  alt: s,
  size: o = "md",
  status: i,
  className: c
}) {
  const h = $e(() => e ? Uh(e) : "?", [e]), r = $e(() => e ? Wh(e) : Xn[0], [e]), l = t != null && s === "", a = s ?? e ?? "avatar", p = i ? `${a}, ${i}` : a, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: dn.image,
      src: t,
      alt: l ? "" : i ? p : a
    }
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: dn.initials,
      style: { background: r },
      children: h
    }
  );
  return /* @__PURE__ */ $(
    "span",
    {
      className: [
        dn.avatar,
        dn[o],
        i ? dn[i] : null,
        c
      ].filter(Boolean).join(" "),
      role: t ? void 0 : "img",
      "aria-label": t ? void 0 : p,
      children: [
        d,
        i && /* @__PURE__ */ n("span", { className: dn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Vh = "_root_80088_1", Xh = "_left_80088_6", Gh = "_right_80088_7", Yh = "_panel_80088_12", Zh = "_bottom_80088_20", Jh = "_tabList_80088_24", Qh = "_underline_80088_53", ep = "_pills_80088_72", tp = "_tab_80088_24", np = "_active_80088_113", sp = "_disabled_80088_139", Bt = {
  root: Vh,
  left: Xh,
  right: Gh,
  panel: Yh,
  bottom: Zh,
  tabList: Jh,
  underline: Qh,
  pills: ep,
  tab: tp,
  active: np,
  disabled: sp
};
function nv({
  items: e,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: h
}) {
  const r = Ye(), l = ae(null), [a, p] = X(
    s ?? e[0]?.key ?? ""
  ), d = t ?? a, v = c === "left" || c === "right", b = (_) => {
    p(_), o?.(_);
  }, w = (_) => {
    const f = e.filter((O) => !O.disabled), u = f.findIndex((O) => O.key === d);
    let y = -1;
    _.key === "ArrowRight" || v && _.key === "ArrowDown" ? y = (u + 1) % f.length : _.key === "ArrowLeft" || v && _.key === "ArrowUp" ? y = (u - 1 + f.length) % f.length : _.key === "Home" ? y = 0 : _.key === "End" && (y = f.length - 1), y >= 0 && (_.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[y]?.key ?? "")}"]`
    )?.focus(), b(f[y]?.key ?? ""));
  }, k = e.find((_) => _.key === d);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Bt.root, Bt[c], h].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Bt.tabList, Bt[i], Bt[c]].filter(Boolean).join(" "),
            onKeyDown: w,
            children: e.map((_) => {
              const f = _.key === d;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${_.key}`,
                  "data-tab-key": _.key,
                  "aria-selected": f,
                  "aria-controls": `${r}-panel-${_.key}`,
                  tabIndex: f ? 0 : -1,
                  disabled: _.disabled,
                  className: [
                    Bt.tab,
                    f ? Bt.active : null,
                    _.disabled ? Bt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => b(_.key),
                  children: _.label
                },
                _.key
              );
            })
          }
        ),
        k && /* @__PURE__ */ n(
          "div",
          {
            role: "tabpanel",
            id: `${r}-panel-${k.key}`,
            "aria-labelledby": `${r}-tab-${k.key}`,
            className: Bt.panel,
            children: k.content
          }
        )
      ]
    }
  );
}
const rp = "_root_18dnp_1", op = "_item_18dnp_9", lp = "_heading_18dnp_13", ap = "_trigger_18dnp_17", ip = "_disabled_18dnp_34", cp = "_title_18dnp_48", dp = "_chevron_18dnp_52", up = "_open_18dnp_59", _p = "_content_18dnp_63", Ft = {
  root: rp,
  item: op,
  heading: lp,
  trigger: ap,
  disabled: ip,
  title: cp,
  chevron: dp,
  open: up,
  content: _p
};
function sv({
  items: e,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const h = Ye(), [r, l] = X(
    o ?? []
  ), a = s ?? r, p = (d) => {
    const v = a.includes(d) ? a.filter((b) => b !== d) : t ? [...a, d] : [d];
    l(v), i?.(v);
  };
  return /* @__PURE__ */ n("div", { className: [Ft.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const v = a.includes(d.key), b = `${h}-panel-${d.key}`, w = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ $("div", { className: Ft.item, children: [
      /* @__PURE__ */ n("h3", { className: Ft.heading, children: /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          id: w,
          "aria-expanded": v,
          "aria-controls": b,
          disabled: d.disabled,
          className: [
            Ft.trigger,
            d.disabled ? Ft.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: Ft.title, children: d.title }),
            /* @__PURE__ */ n(
              "span",
              {
                className: [Ft.chevron, v ? Ft.open : null].filter(Boolean).join(" "),
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
          id: b,
          role: "region",
          "aria-labelledby": w,
          hidden: !v,
          className: Ft.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const fp = "_textarea_1mu8y_1", hp = "_invalid_1mu8y_27", pp = "_xs_1mu8y_34", mp = "_sm_1mu8y_39", gp = "_md_1mu8y_44", xp = "_lg_1mu8y_49", yp = "_xl_1mu8y_54", Fn = {
  textarea: fp,
  invalid: hp,
  xs: pp,
  sm: mp,
  md: gp,
  lg: xp,
  xl: yp,
  "resize-none": "_resize-none_1mu8y_59",
  "resize-vertical": "_resize-vertical_1mu8y_63",
  "resize-horizontal": "_resize-horizontal_1mu8y_67",
  "resize-both": "_resize-both_1mu8y_71"
}, rv = qe(
  function({ size: t = "md", resize: s = "none", invalid: o = !1, className: i, ...c }, h) {
    return /* @__PURE__ */ n(
      "textarea",
      {
        ref: h,
        className: [
          Fn.textarea,
          Fn[t],
          Fn[`resize-${s}`],
          o ? Fn.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": o || void 0,
        ...c
      }
    );
  }
), bp = "_typography_1ehxz_1", vp = "_h1_1ehxz_36", kp = "_h2_1ehxz_42", wp = "_h3_1ehxz_48", $p = "_h4_1ehxz_54", Np = "_h5_1ehxz_60", Op = "_h6_1ehxz_66", Sp = "_button_1ehxz_96", zp = "_caption_1ehxz_103", Dp = "_overline_1ehxz_109", Qn = {
  typography: bp,
  "display-1": "_display-1_1ehxz_5",
  "display-2": "_display-2_1ehxz_10",
  "display-3": "_display-3_1ehxz_15",
  "display-4": "_display-4_1ehxz_20",
  "display-5": "_display-5_1ehxz_25",
  "display-6": "_display-6_1ehxz_30",
  h1: vp,
  h2: kp,
  h3: wp,
  h4: $p,
  h5: Np,
  h6: Op,
  "subtitle-1": "_subtitle-1_1ehxz_72",
  "subtitle-2": "_subtitle-2_1ehxz_78",
  "body-1": "_body-1_1ehxz_84",
  "body-2": "_body-2_1ehxz_89",
  button: Sp,
  caption: zp,
  overline: Dp,
  "align-left": "_align-left_1ehxz_118",
  "align-center": "_align-center_1ehxz_122",
  "align-right": "_align-right_1ehxz_126",
  "align-justify": "_align-justify_1ehxz_130"
}, Mp = {
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
}, Cp = {
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
}, Ep = {
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
}, Ip = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, ov = qe(function({
  textStyle: t = "Body1",
  tagName: s = "Auto",
  textAlign: o,
  text: i,
  visible: c = !0,
  className: h,
  children: r,
  ...l
}, a) {
  if (c === !1) return null;
  const p = s === "Auto" ? Mp[t] : Ep[s];
  return /* @__PURE__ */ n(
    p,
    {
      ref: a,
      className: [
        Qn.typography,
        Qn[Cp[t]],
        o ? Qn[Ip[o]] : null,
        h
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? r
    }
  );
}), jp = "_root_rjoph_1", Ap = "_trigger_rjoph_9", Tp = "_invalid_rjoph_40", Rp = "_placeholder_rjoph_47", Lp = "_label_rjoph_54", Pp = "_chevron_rjoph_60", Bp = "_chevronOpen_rjoph_70", Fp = "_menu_rjoph_74", qp = "_option_rjoph_89", Hp = "_disabled_rjoph_100", Kp = "_active_rjoph_104", Up = "_selected_rjoph_105", Wp = "_header_rjoph_115", Vp = "_xs_rjoph_122", Xp = "_sm_rjoph_128", Gp = "_md_rjoph_134", Yp = "_lg_rjoph_140", Zp = "_xl_rjoph_146", it = {
  root: jp,
  trigger: Ap,
  invalid: Tp,
  placeholder: Rp,
  label: Lp,
  chevron: Pp,
  chevronOpen: Bp,
  menu: Fp,
  option: qp,
  disabled: Hp,
  active: Kp,
  selected: Up,
  header: Wp,
  xs: Vp,
  sm: Xp,
  md: Gp,
  lg: Yp,
  xl: Zp
}, Jp = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function lv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: h = !1,
  disabled: r = !1,
  className: l,
  ...a
}) {
  const p = Ye(), d = `${p}-listbox`, v = ae(null), b = ae(null), [w, k] = X(
    s
  ), [_, f] = X(!1), u = t ?? w, y = e.map(
    (m, D) => m.label === "" || m.disabled ? -1 : D
  ).filter((m) => m >= 0), O = e.findIndex(
    (m) => m.value === u
  ), [g, S] = X(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), x = H(() => {
    if (r) return;
    const m = O >= 0 && y.includes(O) ? O : y[0];
    S(m ?? -1), f(!0);
  }, [r, O, y]), N = H(() => {
    f(!1), b.current?.focus();
  }, []);
  we(() => {
    if (!_) return;
    const m = (D) => {
      v.current && !v.current.contains(D.target) && f(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [_]);
  const E = (m) => {
    k(m), o?.(m), f(!1), b.current?.focus();
  }, I = (m) => {
    if (y.length === 0) return;
    const D = y.includes(g) ? y.indexOf(g) : 0, P = y[(D + m + y.length) % y.length];
    P != null && S(P);
  }, C = (m) => {
    if (!_) {
      m.key === "ArrowDown" && (m.preventDefault(), x());
      return;
    }
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), I(1);
        break;
      case "ArrowUp":
        m.preventDefault(), I(-1);
        break;
      case "Home":
        m.preventDefault(), y[0] != null && S(y[0]);
        break;
      case "End":
        m.preventDefault(), y[y.length - 1] != null && S(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        m.preventDefault(), g >= 0 && e[g] && y.includes(g) && E(e[g]?.value ?? "");
        break;
      case "Escape":
        m.preventDefault(), N();
        break;
      case "Tab":
        f(!1);
        break;
    }
  }, M = e.find(
    (m) => m.value === u
  );
  return /* @__PURE__ */ $(
    "div",
    {
      ref: v,
      className: [it.root, l].filter(Boolean).join(" "),
      onKeyDown: C,
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            ref: b,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": _,
            "aria-controls": d,
            "aria-invalid": h || void 0,
            disabled: r,
            className: [
              it.trigger,
              it[c],
              _ ? it.open : null,
              h ? it.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => _ ? f(!1) : x(),
            ...a,
            children: [
              /* @__PURE__ */ n("span", { className: M ? it.label : it.placeholder, children: M ? M.label : i }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [it.chevron, _ ? it.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Jp },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        _ && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "listbox",
            "aria-activedescendant": g >= 0 ? `${p}-option-${g}` : void 0,
            className: it.menu,
            children: e.map(
              (m, D) => m.label === "" ? /* @__PURE__ */ n(
                "div",
                {
                  className: it.header,
                  role: "presentation",
                  children: m.value
                },
                m.value
              ) : /* @__PURE__ */ n(
                "div",
                {
                  id: `${p}-option-${D}`,
                  role: "option",
                  "aria-selected": m.value === u,
                  "aria-disabled": m.disabled || void 0,
                  className: [
                    it.option,
                    D === g ? it.active : null,
                    m.value === u ? it.selected : null,
                    m.disabled ? it.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    m.disabled || E(m.value);
                  },
                  onMouseEnter: () => {
                    !m.disabled && m.label !== "" && S(D);
                  },
                  children: m.label
                },
                m.value
              )
            )
          }
        )
      ]
    }
  );
}
const Qp = "_root_9y6ty_1", em = "_wrap_9y6ty_9", tm = "_input_9y6ty_26", nm = "_invalid_9y6ty_31", sm = "_clear_9y6ty_58", rm = "_menu_9y6ty_83", om = "_option_9y6ty_98", lm = "_disabled_9y6ty_109", am = "_active_9y6ty_113", im = "_empty_9y6ty_123", cm = "_xs_9y6ty_129", dm = "_sm_9y6ty_136", um = "_md_9y6ty_143", _m = "_lg_9y6ty_150", fm = "_xl_9y6ty_157", zt = {
  root: Qp,
  wrap: em,
  input: tm,
  invalid: nm,
  clear: sm,
  menu: rm,
  option: om,
  disabled: lm,
  active: am,
  empty: im,
  xs: cm,
  sm: dm,
  md: um,
  lg: _m,
  xl: fm
}, hm = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function av({
  options: e = [],
  value: t,
  defaultValue: s = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: h = "md",
  invalid: r = !1,
  disabled: l = !1,
  filter: a = hm,
  className: p,
  ...d
}) {
  const v = Ye(), b = `${v}-listbox`, w = ae(null), k = ae(null), [_, f] = X(s), [u, y] = X(!1), O = t ?? _, g = $e(
    () => O.trim() === "" ? [...e] : e.filter((T) => a(T, O)),
    [e, O, a]
  ), S = g.map((T, F) => T.disabled ? -1 : F).filter((T) => T >= 0), [x, N] = X(-1), E = (T) => {
    f(T), o?.(T);
  }, I = (T) => {
    E(T.label), i?.(T.value, T), y(!1);
  }, C = (T) => {
    if (S.length === 0) return;
    const F = S.includes(x) ? S.indexOf(x) : T === 1 ? -1 : 0, V = S[(F + T + S.length) % S.length];
    V != null && N(V);
  }, M = (T) => {
    l || (E(T.target.value), y(!0), N(-1));
  }, m = () => {
    l || O !== "" && y(!0);
  }, D = (T) => {
    w.current && !w.current.contains(T.relatedTarget) && y(!1);
  }, P = (T) => {
    if (!l)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), u ? C(1) : (y(!0), N(S[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), u && C(-1);
          break;
        case "Enter":
          T.preventDefault(), u && x >= 0 && g[x] && I(g[x]);
          break;
        case "Escape":
          T.preventDefault(), y(!1);
          break;
        case "Tab":
          u && x >= 0 && g[x] && I(g[x]), y(!1);
          break;
      }
  }, j = () => {
    E(""), N(-1), y(!0), k.current?.focus();
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: w,
      className: [zt.root, p].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ $(
          "div",
          {
            className: [zt.wrap, zt[h], r ? zt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  ref: k,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": u,
                  "aria-controls": b,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": u && x >= 0 ? `${v}-option-${x}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: l,
                  value: O,
                  placeholder: c,
                  className: zt.input,
                  onChange: M,
                  onFocus: m,
                  onBlur: D,
                  onKeyDown: P,
                  ...d
                }
              ),
              O !== "" && !l && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: zt.clear,
                  "aria-label": "Clear",
                  onClick: j,
                  children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ n("div", { id: b, role: "listbox", className: zt.menu, children: g.length === 0 ? /* @__PURE__ */ n("div", { className: zt.empty, children: "No matches" }) : g.map((T, F) => /* @__PURE__ */ n(
          "div",
          {
            id: `${v}-option-${F}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": T.disabled || void 0,
            className: [
              zt.option,
              F === x ? zt.active : null,
              T.disabled ? zt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              T.disabled || I(T);
            },
            onMouseDown: (V) => {
              V.preventDefault(), T.disabled || I(T);
            },
            onMouseEnter: () => {
              T.disabled || N(F);
            },
            children: T.label
          },
          T.value
        )) })
      ]
    }
  );
}
const pm = "_box_julie_1", mm = "_option_julie_12", gm = "_disabled_julie_23", xm = "_selected_julie_27", ym = "_active_julie_33", On = {
  box: pm,
  option: mm,
  disabled: gm,
  selected: xm,
  active: ym
};
function iv({
  options: e = [],
  value: t,
  defaultValue: s,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: h,
  ...r
}) {
  const l = Ye(), [a, p] = X(() => {
    const g = s;
    return g == null ? [] : Array.isArray(g) ? [...g] : [g];
  }), d = t == null ? a : Array.isArray(t) ? t : [t], v = e.findIndex((g) => !g.disabled), [b, w] = X(
    () => v >= 0 ? v : 0
  ), k = ae(""), _ = ae(null), f = (g) => {
    p(g), i?.(o ? g : g[0] ?? "");
  }, u = e.map((g, S) => g.disabled ? -1 : S).filter((g) => g >= 0), y = (g) => {
    const S = e[g];
    if (!(!S || S.disabled))
      if (w(g), o) {
        const x = d.includes(S.value) ? d.filter((N) => N !== S.value) : [...d, S.value];
        f(x);
      } else
        f([S.value]);
  }, O = (g) => {
    if (u.length === 0) return;
    const S = u.includes(b) ? b : u[0];
    let x = -1;
    if (g.key === "ArrowDown")
      x = u[(u.indexOf(S) + 1) % u.length];
    else if (g.key === "ArrowUp")
      x = u[(u.indexOf(S) - 1 + u.length) % u.length];
    else if (g.key === "Home")
      x = u[0];
    else if (g.key === "End")
      x = u[u.length - 1];
    else if (g.key === "Enter" || g.key === " ") {
      g.preventDefault(), y(S);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(g.key)) {
      g.preventDefault();
      const N = (k.current + g.key).toLowerCase();
      k.current = N, _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        k.current = "";
      }, 500);
      const E = [...u, ...u], I = u.indexOf(S) + 1, C = E.slice(I).find((M) => e[M]?.label.toLowerCase().startsWith(N));
      C != null && w(C);
      return;
    }
    x >= 0 && (g.preventDefault(), w(x), o || f([e[x]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[b] ? `${l}-option-${b}` : void 0,
      style: h,
      className: [On.box, c].filter(Boolean).join(" "),
      onKeyDown: O,
      ...r,
      children: e.map((g, S) => {
        const x = d.includes(g.value), N = S === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${l}-option-${S}`,
            role: "option",
            "aria-selected": x,
            "aria-disabled": g.disabled || void 0,
            className: [
              On.option,
              x ? On.selected : null,
              N ? On.active : null,
              g.disabled ? On.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y(S),
            children: g.label
          },
          g.value
        );
      })
    }
  );
}
const bm = "_group_6i3u3_1", vm = "_legend_6i3u3_8", km = "_list_6i3u3_16", wm = "_item_6i3u3_25", $m = "_disabled_6i3u3_32", Nm = "_label_6i3u3_37", Om = "_checkbox_6i3u3_48", tn = {
  group: bm,
  legend: vm,
  list: km,
  item: wm,
  disabled: $m,
  label: Nm,
  checkbox: Om
};
function cv({
  options: e = [],
  value: t,
  defaultValue: s = [],
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, l] = X(() => [
    ...s
  ]), a = t ?? r, p = (d, v) => {
    const b = v ? [...a, d] : a.filter((w) => w !== d);
    l(b), o?.(b);
  };
  return /* @__PURE__ */ $("fieldset", { className: [tn.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: tn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: tn.list, children: e.map((d) => {
      const v = a.includes(d.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [tn.item, d.disabled ? tn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: tn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: tn.checkbox,
                name: c,
                value: d.value,
                checked: v,
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
const Sm = "_group_1mqxc_1", zm = "_legend_1mqxc_8", Dm = "_list_1mqxc_16", Mm = "_item_1mqxc_25", Cm = "_disabled_1mqxc_32", Em = "_label_1mqxc_37", Im = "_radio_1mqxc_48", nn = {
  group: Sm,
  legend: zm,
  list: Dm,
  item: Mm,
  disabled: Cm,
  label: Em,
  radio: Im
};
function dv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, l] = X(
    s
  ), a = t ?? r, p = (d) => {
    l(d), o?.(d);
  };
  return /* @__PURE__ */ $("fieldset", { className: [nn.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: nn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: nn.list, children: e.map((d) => {
      const v = d.value === a;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [nn.item, d.disabled ? nn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: nn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: nn.radio,
                name: c,
                value: d.value,
                checked: v,
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
const jm = "_bar_d59jw_1", Am = "_vertical_d59jw_12", Tm = "_option_d59jw_17", Rm = "_selected_d59jw_40", Lm = "_sm_d59jw_56", Pm = "_md_d59jw_62", Bm = "_lg_d59jw_68", un = {
  bar: jm,
  vertical: Am,
  option: Tm,
  selected: Rm,
  sm: Lm,
  md: Pm,
  lg: Bm
};
function zs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function uv(e) {
  const {
    options: t = [],
    value: s,
    defaultValue: o,
    multiple: i,
    orientation: c = "horizontal",
    onChange: h,
    size: r = "md",
    className: l,
    ...a
  } = e, p = i ?? !1, [d, v] = X(o ?? (p ? [] : t[0]?.value)), b = s ?? d, w = i === !0 || i === void 0 && Array.isArray(b), k = (f) => {
    if (!w) {
      v(f), h?.(f);
      return;
    }
    const u = zs(b), y = u.includes(f) ? u.filter((O) => O !== f) : [...u, f];
    v(y), h?.(y);
  }, _ = (f) => w ? zs(b).includes(f) : b === f;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        un.bar,
        un[r],
        c === "vertical" ? un.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...a,
      children: t.map((f) => {
        const u = _(f.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: f.disabled,
            className: [
              un.option,
              u ? un.selected : null,
              f.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => k(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const Fm = "_toggle_7nfjx_1", qm = "_pressed_7nfjx_29", Hm = "_sm_7nfjx_41", Km = "_md_7nfjx_47", Um = "_lg_7nfjx_53", Wm = "_fullWidth_7nfjx_59", qn = {
  toggle: Fm,
  pressed: qm,
  sm: Hm,
  md: Km,
  lg: Um,
  fullWidth: Wm
}, _v = qe(
  function({
    pressed: t,
    defaultPressed: s = !1,
    onChange: o,
    size: i = "md",
    fullWidth: c = !1,
    className: h,
    type: r = "button",
    ...l
  }, a) {
    const [p, d] = X(s), v = t ?? p, b = () => {
      const w = !v;
      d(w), o?.(w);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: a,
        type: r,
        "aria-pressed": v,
        className: [
          qn.toggle,
          qn[i],
          v ? qn.pressed : null,
          c ? qn.fullWidth : null,
          h
        ].filter(Boolean).join(" "),
        onClick: b,
        ...l
      }
    );
  }
), Vm = "_root_fc1sj_1", Xm = "_action_fc1sj_328", Gm = "_filled_fc1sj_348", Ym = "_caret_fc1sj_352", Zm = "_flat_fc1sj_373", Jm = "_outlined_fc1sj_381", Qm = "_text_fc1sj_390", eg = "_sm_fc1sj_496", tg = "_md_fc1sj_508", ng = "_lg_fc1sj_520", sg = "_menu_fc1sj_532", rg = "_item_fc1sj_545", og = "_disabled_fc1sj_566", lg = "_active_fc1sj_570", ag = "_danger_fc1sj_579", kt = {
  root: Vm,
  "style-primary": "_style-primary_fc1sj_11",
  "style-secondary": "_style-secondary_fc1sj_25",
  "style-base": "_style-base_fc1sj_35",
  "style-light": "_style-light_fc1sj_45",
  "style-dark": "_style-dark_fc1sj_55",
  "style-info": "_style-info_fc1sj_69",
  "style-success": "_style-success_fc1sj_83",
  "style-warning": "_style-warning_fc1sj_97",
  "style-danger": "_style-danger_fc1sj_111",
  action: Xm,
  filled: Gm,
  caret: Ym,
  flat: Zm,
  outlined: Jm,
  text: Qm,
  "shade-lighter": "_shade-lighter_fc1sj_407",
  "shade-light": "_shade-light_fc1sj_407",
  "shade-dark": "_shade-dark_fc1sj_417",
  "shade-darker": "_shade-darker_fc1sj_421",
  sm: eg,
  md: tg,
  lg: ng,
  menu: sg,
  item: rg,
  disabled: og,
  active: lg,
  danger: ag
};
function fv({
  label: e,
  onClick: t,
  items: s = [],
  severity: o = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: h = "md",
  disabled: r = !1,
  className: l,
  ...a
}) {
  const d = `${Ye()}-menu`, v = ae(null), b = ae(null), w = ae([]), [k, _] = X(!1), [f, u] = X(-1), y = $e(
    () => s.map((C, M) => C.disabled ? -1 : M).filter((C) => C >= 0),
    [s]
  ), O = H(() => {
    r || (u(y[0] ?? -1), _(!0));
  }, [r, y]), g = H(() => {
    _(!1), b.current?.focus();
  }, []);
  we(() => {
    if (!k) return;
    const C = (M) => {
      v.current && !v.current.contains(M.target) && _(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [k]);
  const S = ae(k);
  we(() => {
    const C = S.current;
    if (S.current = k, !k || C) return;
    const M = y.includes(f) ? f : y[0] ?? -1;
    M >= 0 && w.current[M]?.focus();
  }, [k, f, y]);
  const x = (C) => {
    const M = s[C];
    !M || M.disabled || (M.onClick?.(), _(!1), b.current?.focus());
  }, N = (C) => {
    if (y.length === 0) return;
    const M = y.includes(f) ? y.indexOf(f) : C === 1 ? -1 : 0, m = y[(M + C + y.length) % y.length];
    m != null && (u(m), w.current[m]?.focus());
  }, E = (C) => {
    const M = C === "first" ? y[0] : y[y.length - 1];
    M != null && (u(M), w.current[M]?.focus());
  }, I = (C) => {
    switch (C.key) {
      case "ArrowDown":
        C.preventDefault(), N(1);
        break;
      case "ArrowUp":
        C.preventDefault(), N(-1);
        break;
      case "Home":
        C.preventDefault(), E("first");
        break;
      case "End":
        C.preventDefault(), E("last");
        break;
      case "Escape":
        C.preventDefault(), g();
        break;
      case "Tab":
        _(!1);
        break;
    }
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: v,
      className: [
        kt.root,
        kt[h],
        kt[`style-${o}`],
        kt[ds(i, "filled")],
        c !== "default" ? kt[`shade-${c}`] : null,
        l
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: kt.action,
            disabled: r,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            ref: b,
            type: "button",
            className: kt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: r,
            onClick: () => k ? _(!1) : O(),
            onKeyDown: (C) => {
              !k && C.key === "ArrowDown" && (C.preventDefault(), O());
            },
            children: /* @__PURE__ */ n(De, { name: "chevron-down" })
          }
        ),
        k && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "menu",
            tabIndex: -1,
            className: kt.menu,
            onKeyDown: I,
            ...a,
            children: s.map((C, M) => /* @__PURE__ */ n(
              "button",
              {
                ref: (m) => {
                  w.current[M] = m;
                },
                type: "button",
                role: "menuitem",
                tabIndex: M === f ? 0 : -1,
                disabled: C.disabled,
                className: [
                  kt.item,
                  M === f ? kt.active : null,
                  C.danger ? kt.danger : null,
                  C.disabled ? kt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => x(M),
                onMouseEnter: () => {
                  C.disabled || u(M);
                },
                children: C.label
              },
              C.key
            ))
          }
        )
      ]
    }
  );
}
const ig = "_textbox_dh04j_1", cg = "_invalid_dh04j_31", dg = "_xs_dh04j_38", ug = "_sm_dh04j_44", _g = "_md_dh04j_50", fg = "_lg_dh04j_56", hg = "_xl_dh04j_62", es = {
  textbox: ig,
  invalid: cg,
  xs: dg,
  sm: ug,
  md: _g,
  lg: fg,
  xl: hg
}, hv = qe(
  function({ size: t = "md", invalid: s = !1, className: o, type: i = "text", ...c }, h) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: h,
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
), pg = "_wrapper_o4h13_1", mg = "_input_o4h13_8", gg = "_invalid_o4h13_38", xg = "_toggle_o4h13_45", yg = "_xs_o4h13_80", bg = "_sm_o4h13_86", vg = "_md_o4h13_92", kg = "_lg_o4h13_98", wg = "_xl_o4h13_104", Sn = {
  wrapper: pg,
  input: mg,
  invalid: gg,
  toggle: xg,
  xs: yg,
  sm: bg,
  md: vg,
  lg: kg,
  xl: wg
}, pv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: h = "Hide password",
    ...r
  }, l) {
    const [a, p] = X(!1);
    return /* @__PURE__ */ $("div", { className: Sn.wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: l,
          type: a ? "text" : "password",
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
          "aria-pressed": a,
          "aria-label": a ? h : c,
          disabled: i,
          onClick: () => p((d) => !d),
          children: /* @__PURE__ */ n(De, { name: a ? "eye-off" : "eye", size: 16 })
        }
      )
    ] });
  }
), $g = "_mask_1tyy7_1", Ng = "_invalid_1tyy7_31", Og = "_xs_1tyy7_38", Sg = "_sm_1tyy7_44", zg = "_md_1tyy7_50", Dg = "_lg_1tyy7_56", Mg = "_xl_1tyy7_62", ts = {
  mask: $g,
  invalid: Ng,
  xs: Og,
  sm: Sg,
  md: zg,
  lg: Dg,
  xl: Mg
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
const mv = qe(function({
  size: t = "md",
  invalid: s = !1,
  mask: o,
  value: i,
  defaultValue: c = "",
  onChange: h,
  className: r,
  onKeyDown: l,
  ...a
}, p) {
  const [d, v] = X(c ?? ""), b = i !== void 0, w = b ? i ?? "" : d, k = (u) => {
    const y = Ds(u, o);
    return b || v(y), h?.(y), y;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      value: w,
      onChange: (u) => {
        k(u.target.value);
      },
      onKeyDown: (u) => {
        if (u.key === "Backspace") {
          const y = u.currentTarget.selectionStart ?? w.length, O = w[y - 1];
          if (O !== void 0 && !/\d/.test(O)) {
            u.preventDefault();
            const g = w.replace(/\D/g, "");
            k(Ds(g.slice(0, -1), o));
          }
        }
        l?.(u);
      },
      className: [
        ts.mask,
        ts[t],
        s ? ts.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), Cg = "_wrapper_1kqw7_1", Eg = "_input_1kqw7_8", Ig = "_invalid_1kqw7_38", jg = "_button_1kqw7_45", Ag = "_up_1kqw7_77", Tg = "_down_1kqw7_82", Rg = "_xs_1kqw7_87", Lg = "_sm_1kqw7_93", Pg = "_md_1kqw7_99", Bg = "_lg_1kqw7_105", Fg = "_xl_1kqw7_111", Gt = {
  wrapper: Cg,
  input: Eg,
  invalid: Ig,
  button: jg,
  up: Ag,
  down: Tg,
  xs: Rg,
  sm: Lg,
  md: Pg,
  lg: Bg,
  xl: Fg
};
function os(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function qg(e) {
  let t = "", s = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !s ? (s = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function Qs(e, t, s) {
  return Math.min(s ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Hg(e, t, s) {
  return t === void 0 ? e : t + Math.round((e - t) / s) * s;
}
function Kg(e, t, s, o, i) {
  const h = os(e) ?? s ?? 0;
  let r;
  return s === void 0 ? r = h + t * i : t > 0 ? r = s + Math.ceil((h - s + 1e-9) / i) * i : r = s + Math.floor((h - s - 1e-9) / i) * i, Qs(r, s, o);
}
const gv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    value: c,
    defaultValue: h,
    onChange: r,
    min: l,
    max: a,
    step: p = 1,
    incrementLabel: d = "Increment",
    decrementLabel: v = "Decrement",
    onBlur: b,
    onKeyDown: w,
    ...k
  }, _) {
    const [f, u] = X(
      h != null ? String(h) : ""
    ), y = c !== void 0, O = y ? c == null ? "" : String(c) : f, g = (C) => {
      y || u(C), r?.(os(C));
    }, S = (C) => {
      y || u(String(C)), r?.(C);
    }, x = (C) => {
      i || S(Kg(O, C, l, a, p));
    }, N = (C) => {
      g(qg(C.target.value));
    }, E = (C) => {
      C.key === "ArrowUp" ? (C.preventDefault(), x(1)) : C.key === "ArrowDown" && (C.preventDefault(), x(-1)), w?.(C);
    }, I = (C) => {
      const M = os(O);
      M === null ? (y || u(""), r?.(null)) : S(Qs(Hg(M, l, p), l, a)), b?.(C);
    };
    return /* @__PURE__ */ $("div", { className: Gt.wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: _,
          type: "text",
          inputMode: "decimal",
          autoComplete: "off",
          value: O,
          disabled: i,
          onChange: N,
          onKeyDown: E,
          onBlur: I,
          className: [
            Gt.input,
            Gt[t],
            s ? Gt.invalid : null,
            o
          ].filter(Boolean).join(" "),
          "aria-invalid": s || void 0,
          ...k
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: [Gt.button, Gt.up].join(" "),
          "aria-label": d,
          disabled: i,
          onClick: () => x(1),
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
          onClick: () => x(-1),
          children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 14 })
        }
      )
    ] });
  }
), Oe = {
  "dx-colorpicker": "_dx-colorpicker_mmfdo_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_mmfdo_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_mmfdo_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_mmfdo_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_mmfdo_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_mmfdo_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_mmfdo_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_mmfdo_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_mmfdo_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_mmfdo_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_mmfdo_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_mmfdo_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_mmfdo_133",
  "dx-saturation-picker": "_dx-saturation-picker_mmfdo_138",
  "dx-hue-picker": "_dx-hue-picker_mmfdo_149",
  "dx-alpha-picker": "_dx-alpha-picker_mmfdo_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_mmfdo_155",
  "dx-hue-indicator": "_dx-hue-indicator_mmfdo_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_mmfdo_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_mmfdo_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_mmfdo_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_mmfdo_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_mmfdo_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_mmfdo_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_mmfdo_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_mmfdo_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_mmfdo_300"
}, Ug = [
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
function xt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function ls(e) {
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
function Wg({ r: e, g: t, b: s }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(s)}`;
}
function Vg({ r: e, g: t, b: s }) {
  const o = e / 255, i = t / 255, c = s / 255, h = Math.max(o, i, c), r = Math.min(o, i, c), l = h - r;
  let a = 0;
  return l !== 0 && (h === o ? a = (i - c) / l % 6 : h === i ? a = (c - o) / l + 2 : a = (o - i) / l + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: h === 0 ? 0 : l / h,
    v: h
  };
}
function _n({ h: e, s: t, v: s }) {
  const o = s * t, i = e / 60, c = o * (1 - Math.abs(i % 2 - 1));
  let h = 0, r = 0, l = 0;
  i < 1 ? (h = o, r = c) : i < 2 ? (h = c, r = o) : i < 3 ? (r = o, l = c) : i < 4 ? (r = c, l = o) : i < 5 ? (h = c, l = o) : (h = o, l = c);
  const a = s - o;
  return {
    r: Math.round((h + a) * 255),
    g: Math.round((r + a) * 255),
    b: Math.round((l + a) * 255),
    a: 1
  };
}
function Xg(e) {
  const t = ls(e);
  if (t) return t;
  const s = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return s ? {
    r: xt(Number(s[1]), 0, 255),
    g: xt(Number(s[2]), 0, 255),
    b: xt(Number(s[3]), 0, 255),
    a: s[4] != null ? xt(Number(s[4]), 0, 1) : 1
  } : null;
}
function Ms({ r: e, g: t, b: s, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${s})` : `rgba(${e}, ${t}, ${s}, ${Math.round(o * 100) / 100})`;
}
const xv = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: s = !0,
  showPalette: o = !0,
  palette: i = Ug,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: r = !1,
  invalid: l = !1,
  placeholder: a = "",
  size: p = "md",
  tabIndex: d = 0,
  className: v,
  onChange: b,
  onValueChange: w,
  onOpen: k,
  onClose: _
}) => {
  const f = ae(null), u = ae(null), y = ae(null), O = ae(null), g = ae(null), S = Ye(), x = ae(null), N = $e(
    () => Xg(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = X(!1), [C, M] = X(null), m = C ?? N, D = $e(() => Vg(m), [m]), P = H(
    (W) => {
      const z = Ms(W);
      b?.(z), w?.(z);
    },
    [b, w]
  ), j = H(
    (W, z) => {
      M(W), z && !c && P(W);
    },
    [c, P]
  ), T = H(() => {
    I(!1), M(null), _?.(), u.current?.focus();
  }, [_]), F = H(() => {
    r || (M(N), I(!0), k?.());
  }, [r, N, k]), V = H(() => {
    E ? T() : F();
  }, [E, T, F]), Z = H(
    (W, z) => {
      const q = y.current;
      if (!q) return D;
      const ne = q.getBoundingClientRect(), _e = xt((W - ne.left) / ne.width, 0, 1), se = xt(1 - (z - ne.top) / ne.height, 0, 1);
      return { h: D.h, s: _e, v: se };
    },
    [D]
  ), Q = H(
    (W, z) => {
      if (!z) return 0;
      const q = z.getBoundingClientRect();
      return xt((W - q.left) / q.width, 0, 1);
    },
    []
  ), K = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "sat";
    const z = Z(W.clientX, W.clientY);
    j({ ..._n(z), a: m.a }, !0);
  }, te = (W) => {
    if (x.current !== "sat") return;
    W.preventDefault();
    const z = Z(W.clientX, W.clientY);
    j({ ..._n(z), a: m.a }, !0);
  }, oe = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "hue";
    const z = Q(W.clientX, O.current);
    j(
      { ..._n({ ...D, h: z * 360 }), a: m.a },
      !0
    );
  }, ee = (W) => {
    if (x.current !== "hue") return;
    W.preventDefault();
    const z = Q(W.clientX, O.current);
    j(
      { ..._n({ ...D, h: z * 360 }), a: m.a },
      !0
    );
  }, L = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "alpha";
    const z = Q(W.clientX, g.current);
    j({ ...m, a: z }, !0);
  }, ie = (W) => {
    if (x.current !== "alpha") return;
    W.preventDefault();
    const z = Q(W.clientX, g.current);
    j({ ...m, a: z }, !0);
  }, Y = () => {
    x.current = null;
  }, de = H(
    (W, z) => {
      const q = {
        h: D.h,
        s: xt(D.s + W, 0, 1),
        v: xt(D.v + z, 0, 1)
      };
      j({ ..._n(q), a: m.a }, !0);
    },
    [D, m.a, j]
  ), le = H(
    (W) => {
      const z = (D.h + W + 360) % 360;
      j({ ..._n({ ...D, h: z }), a: m.a }, !0);
    },
    [D, m.a, j]
  ), ye = H(
    (W) => {
      j({ ...m, a: xt(m.a + W, 0, 1) }, !0);
    },
    [m, j]
  ), ke = (W) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), de(-0.05, 0);
        break;
      case "ArrowRight":
        W.preventDefault(), de(0.05, 0);
        break;
      case "ArrowUp":
        W.preventDefault(), de(0, 0.05);
        break;
      case "ArrowDown":
        W.preventDefault(), de(0, -0.05);
        break;
      case "Escape":
        W.preventDefault(), T();
        break;
    }
  }, Be = (W, z) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), z === "hue" ? le(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), z === "hue" ? le(6) : ye(0.05);
        break;
      case "Escape":
        W.preventDefault(), T();
        break;
    }
  }, ve = (W, z) => {
    if (W === "hex") {
      const se = ls(z);
      se && j({ ...se, a: m.a }, !0);
      return;
    }
    const q = z.replace(/[^\d.]/g, ""), ne = Number.parseFloat(q);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const se = q.includes(".") ? xt(ne, 0, 1) : xt(ne / 100, 0, 1);
      j({ ...m, a: se }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    j(
      { ...m, [W]: xt(ne, 0, _e[W]) },
      !0
    );
  }, We = () => {
    C && (P(C), M(null), I(!1), _?.(), u.current?.focus());
  };
  we(() => {
    if (!E) return;
    const W = (z) => {
      f.current && !f.current.contains(z.target) && T();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [E, T]), we(() => {
    if (!E) return;
    const W = (z) => {
      z.key === "Escape" && T();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [E, T]);
  const xe = p === "xs" ? Oe["dx-colorpicker-trigger-xs"] : p === "sm" ? Oe["dx-colorpicker-trigger-sm"] : p === "lg" ? Oe["dx-colorpicker-trigger-lg"] : p === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], Ze = Ms(m), Ve = Wg(m), Le = { x: D.s * 100, y: (1 - D.v) * 100 }, tt = D.h / 360 * 100, Qe = m.a * 100, et = /* @__PURE__ */ $("div", { className: Oe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(D.s * 100),
        "aria-valuetext": `Saturation ${Math.round(D.s * 100)}%, value ${Math.round(D.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${D.h}, 100%, 50%)`
        },
        onKeyDown: ke,
        onPointerDown: K,
        onPointerMove: te,
        onPointerUp: Y,
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
        ref: O,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(D.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-hue-picker"],
        onKeyDown: (W) => Be(W, "hue"),
        onPointerDown: oe,
        onPointerMove: ee,
        onPointerUp: Y,
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
        ref: g,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${D.h}, 100%, 50%))`
        },
        onKeyDown: (W) => Be(W, "alpha"),
        onPointerDown: L,
        onPointerMove: ie,
        onPointerUp: Y,
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
    s && /* @__PURE__ */ $("div", { className: Oe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ $("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ $("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: m.r,
            onChange: (W) => ve("r", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: m.g,
            onChange: (W) => ve("g", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: m.b,
            onChange: (W) => ve("b", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(m.a * 100),
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
          const z = ls(W);
          c ? j({ ...z, a: m.a }, !1) : (M(null), P({ ...z, a: m.a }), I(!1), _?.(), u.current?.focus());
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
  return /* @__PURE__ */ $(
    "div",
    {
      ref: f,
      className: [
        Oe["dx-colorpicker"],
        E ? Oe["dx-colorpicker-open"] : null,
        l ? Oe["dx-colorpicker-invalid"] : null,
        v
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            ref: u,
            type: "button",
            className: [Oe["dx-colorpicker-trigger"], xe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": S,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: d,
            onClick: V,
            onKeyDown: (W) => {
              W.key === "Escape" && E && (W.preventDefault(), T());
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
              a && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-text"], children: a }),
              h && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ n(
          "div",
          {
            id: S,
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
  "dx-datepicker": "_dx-datepicker_rfg2u_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_rfg2u_9",
  "dx-datepicker-input": "_dx-datepicker-input_rfg2u_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_rfg2u_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_rfg2u_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_rfg2u_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_rfg2u_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_rfg2u_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_rfg2u_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_rfg2u_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_rfg2u_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_rfg2u_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_rfg2u_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_rfg2u_161",
  "dx-datepicker-header": "_dx-datepicker-header_rfg2u_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_rfg2u_175",
  "dx-datepicker-title": "_dx-datepicker-title_rfg2u_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_rfg2u_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_rfg2u_214",
  "dx-datepicker-row": "_dx-datepicker-row_rfg2u_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_rfg2u_220",
  "dx-datepicker-day": "_dx-datepicker-day_rfg2u_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_rfg2u_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_rfg2u_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_rfg2u_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_rfg2u_277",
  "dx-datepicker-time": "_dx-datepicker-time_rfg2u_283",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_rfg2u_292",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_rfg2u_298",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_rfg2u_303",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_rfg2u_307",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_rfg2u_327",
  "dx-datepicker-ok": "_dx-datepicker-ok_rfg2u_355"
}, Gg = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function Yg(e, t) {
  const s = ht(e);
  return t ? `${s} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : s;
}
function as(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const s = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const l = new Date(s, o - 1, i, c, h, r);
  return l.getFullYear() !== s || l.getMonth() !== o - 1 || l.getDate() !== i ? null : { year: s, month: o, day: i, hour: c, minute: h, second: r };
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
function qt(e, t) {
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
  tt: (e, t, s) => new Intl.DateTimeFormat(s, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, Zg = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Jg = ["y", "M", "d", "H", "m", "s"];
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
    let h = !1;
    for (const l of Zg)
      if (t.startsWith(l, c)) {
        i += Es[l](e, o, s), c += l.length, h = !0;
        break;
      }
    if (h) continue;
    const r = t[c];
    if (Jg.includes(r)) {
      i += Es[r](e, o, s), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const Qg = [
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
function e0(e, t) {
  const s = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const l of Qg)
      if (t.startsWith(l, i)) {
        r = l;
        break;
      }
    if (r) {
      const l = e.slice(o, o + r.length);
      if (!/^\d+$/.test(l)) return null;
      const a = Number(l);
      switch (r) {
        case "yyyy":
          s.year = a;
          break;
        case "yy":
        case "y":
          s.year = 2e3 + a;
          break;
        case "MM":
        case "M":
          s.month = a;
          break;
        case "dd":
        case "d":
          s.day = a;
          break;
        case "HH":
        case "H":
          s.hour = a;
          break;
        case "mm":
        case "m":
          s.minute = a;
          break;
        case "ss":
        case "s":
          s.second = a;
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
function zn(e, t) {
  const s = as(e);
  return s || e0(e, t);
}
function t0(e, t, s) {
  return t && ht(e) < ht(t) ? t : s && ht(e) > ht(s) ? s : e;
}
const n0 = ["hour", "minute", "second"];
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
const yv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: h,
    max: r,
    showTime: l = !1,
    showButton: a = !0,
    allowClear: p = !1,
    inline: d = !1,
    disabledDates: v,
    locale: b = "en-US",
    onChange: w,
    onValueChange: k,
    onOpen: _,
    onClose: f,
    disabled: u,
    readOnly: y,
    placeholder: O,
    ariaLabel: g,
    triggerLabel: S,
    clearLabel: x,
    tabIndex: N,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...M
  }, m) {
    const D = ae(null), P = ae(null), j = ae(null), T = ae(null), F = Ye(), V = o !== void 0, [Z, Q] = X(
      () => i != null ? Kn(
        zn(i, c) ?? Yt(),
        c,
        b
      ) : ""
    ), [K, te] = X(!1), [oe, ee] = X(null), [L, ie] = X(() => {
      const U = o !== void 0 ? o ?? "" : i ?? "";
      if (U) {
        const ue = zn(U, c);
        if (ue) return ue;
      }
      return Yt();
    }), Y = $e(() => h ? as(h) : null, [h]), de = $e(() => r ? as(r) : null, [r]), le = $e(
      () => new Set(v ?? []),
      [v]
    ), ye = $e(() => {
      const U = V ? o ?? "" : Z;
      return U ? zn(U, c) : null;
    }, [o, Z, V, c]), ke = H(
      (U) => {
        const ue = ht(U);
        return !!(le.has(ue) || Y && ue < ht(Y) || de && ue > ht(de));
      },
      [le, Y, de]
    ), Be = H(
      (U) => {
        if (!ke(U)) return U;
        for (let ue = 1; ue <= 366; ue += 1) {
          const Pe = qt(U, ue);
          if (!ke(Pe)) return Pe;
          const He = qt(U, -ue);
          if (!ke(He)) return He;
        }
        return U;
      },
      [ke]
    ), ve = H(
      (U) => {
        V || Q(U ? Kn(U, c, b) : "");
        const ue = U ? Yg(U, l) : "";
        w?.(ue), k?.(ue);
      },
      [V, c, b, l, w, k]
    ), We = H(
      (U) => {
        P.current = U, typeof m == "function" ? m(U) : m && (m.current = U);
      },
      [m]
    ), xe = H(() => {
      te(!1), ee(null), f?.(), d || j.current?.focus();
    }, [d, f]), Ze = H(() => {
      if (u) return;
      const U = ye ?? Yt();
      ee(U), ie(Be(U)), te(!0), _?.();
    }, [u, ye, Be, _]), Ve = H(() => {
      K ? xe() : Ze();
    }, [K, xe, Ze]), Le = H((U) => {
      T.current?.querySelector(
        `[data-date="${ht(U)}"]`
      )?.focus();
    }, []), tt = H(
      (U) => {
        if (ke(U)) return;
        const ue = oe ?? ye, He = {
          ...l ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ee(He), l || (ve(He), xe());
      },
      [ke, oe, ye, l, ve, xe]
    ), Qe = H(
      (U, ue) => {
        ee((Pe) => {
          const He = Pe ?? ye ?? Yt(), Ot = Math.min(U === "hour" ? 23 : 59, Math.max(0, He[U] + ue));
          return { ...He, [U]: Ot };
        });
      },
      [ye]
    ), et = H(
      (U, ue) => {
        const Pe = ue.replace(/\D/g, ""), He = Pe === "" ? 0 : Number(Pe), Lt = U === "hour" ? 23 : 59;
        ee((Ot) => ({ ...Ot ?? ye ?? Yt(), [U]: Math.min(Lt, He) }));
      },
      [ye]
    ), W = H(() => {
      oe && (ve(oe), xe());
    }, [oe, ve, xe]), z = H(() => {
      if (K) return;
      const U = zn(Z, c);
      ve(U ? t0(U, Y, de) : null);
    }, [K, Z, c, Y, de, ve]), q = (U) => {
      const ue = U.target.value;
      V || Q(ue), K && ee(null);
    }, ne = (U) => {
      U.key === "Enter" ? (U.preventDefault(), K ? oe && (ve(oe), xe()) : z()) : U.key === "Escape" ? K && (U.preventDefault(), xe()) : U.key === "ArrowDown" && !K ? (U.preventDefault(), Ze()) : U.key === "Tab" && K && te(!1), C?.(U);
    }, _e = (U) => {
      z(), I?.(U);
    }, se = (U) => {
      let ue = null;
      switch (U.key) {
        case "ArrowLeft":
          ue = qt(L, -1), U.preventDefault();
          break;
        case "ArrowRight":
          ue = qt(L, 1), U.preventDefault();
          break;
        case "ArrowUp":
          ue = qt(L, -7), U.preventDefault();
          break;
        case "ArrowDown":
          ue = qt(L, 7), U.preventDefault();
          break;
        case "Home":
          ue = qt(L, -Cs(L)), U.preventDefault();
          break;
        case "End":
          ue = qt(L, 6 - Cs(L)), U.preventDefault();
          break;
        case "PageUp":
          ue = Hn(L, U.shiftKey ? -12 : -1), U.preventDefault();
          break;
        case "PageDown":
          ue = Hn(L, U.shiftKey ? 12 : 1), U.preventDefault();
          break;
        case "Enter":
        case " ":
          U.preventDefault(), tt(L);
          break;
        case "Escape":
          U.preventDefault(), xe();
          break;
        case "Tab":
          te(!1);
          break;
      }
      if (ue) {
        const Pe = Be(ue);
        ie(Pe), setTimeout(() => Le(Pe), 0);
      }
    };
    we(() => {
      if (!K) return;
      const U = (ue) => {
        D.current && !D.current.contains(ue.target) && xe();
      };
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
    }, [K, xe]), we(() => {
      if (!K) return;
      const U = (ue) => {
        ue.key === "Escape" && xe();
      };
      return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
    }, [K, xe]);
    const me = () => {
      V || Q(""), w?.(""), k?.(""), P.current?.focus();
    }, Ne = K && oe ? Kn(oe, c, b) : V ? o ? Kn(
      zn(o, c) ?? Yt(),
      c,
      b
    ) : "" : Z, Fe = V ? !!o : Z.length > 0, Je = d || K, dt = { year: L.year, month: L.month }, bt = new Date(dt.year, dt.month - 1, 1).getDay(), J = {
      year: dt.year,
      month: dt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let U = 0; U < Gg; U += 1)
      Se.push(qt(J, U - bt));
    const nt = oe ? ht(oe) : ye ? ht(ye) : null, Wt = ht(Yt()), Nt = `${dt.year}-${yt(dt.month)}`, ze = $e(
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
      (U, ue) => new Intl.DateTimeFormat(b, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ue)
      )
    ), Rt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], Jt = /* @__PURE__ */ $(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": g ?? "Date picker",
        children: [
          /* @__PURE__ */ $("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const U = Be(Hn(L, -1));
                  ie(U), setTimeout(() => Le(U), 0);
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
                  const U = Be(Hn(L, 1));
                  ie(U), setTimeout(() => Le(U), 0);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ $(
            "div",
            {
              ref: T,
              role: "grid",
              className: Ee["dx-datepicker-grid"],
              onKeyDown: se,
              children: [
                /* @__PURE__ */ n("div", { role: "row", className: Ee["dx-datepicker-week-row"], children: vt.map((U) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "columnheader",
                    className: Ee["dx-datepicker-weekday"],
                    children: U
                  },
                  U
                )) }),
                Array.from({ length: 6 }, (U, ue) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "row",
                    className: Ee["dx-datepicker-row"],
                    children: Se.slice(ue * 7, ue * 7 + 7).map((Pe) => {
                      const He = ht(Pe), Lt = ke(Pe), Ot = He.startsWith(Nt);
                      return /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": He,
                          tabIndex: He === ht(L) ? 0 : -1,
                          "aria-selected": He === nt || void 0,
                          "aria-disabled": Lt || void 0,
                          "aria-label": ze.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            Ot ? null : Ee["dx-datepicker-day--outside"],
                            He === Wt ? Ee["dx-datepicker-day--today"] : null,
                            He === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Lt ? Ee["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => tt(Pe),
                          onFocus: () => ie(Pe),
                          children: Pe.day
                        },
                        He
                      );
                    })
                  },
                  ue
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ $("div", { className: Ee["dx-datepicker-time"], children: [
            n0.map((U) => /* @__PURE__ */ $("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-time-label"], children: Un(U) }),
              /* @__PURE__ */ $("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Un(U),
                    value: yt(
                      (oe ?? ye ?? Yt())[U]
                    ),
                    onChange: (ue) => et(U, ue.target.value),
                    onKeyDown: (ue) => {
                      ue.key === "ArrowUp" ? (ue.preventDefault(), Qe(U, 1)) : ue.key === "ArrowDown" ? (ue.preventDefault(), Qe(U, -1)) : ue.key === "Enter" && (ue.preventDefault(), W());
                    }
                  }
                ),
                /* @__PURE__ */ $("span", { className: Ee["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${Un(U).toLowerCase()}`,
                      onClick: () => Qe(U, 1),
                      children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Un(U).toLowerCase()}`,
                      onClick: () => Qe(U, -1),
                      children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, U)),
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
    return /* @__PURE__ */ $(
      "div",
      {
        ref: D,
        className: [
          Ee["dx-datepicker"],
          d ? Ee["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !d && /* @__PURE__ */ $(Ce, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: We,
                type: "text",
                autoComplete: "off",
                value: Ne,
                disabled: u,
                readOnly: y,
                placeholder: O,
                tabIndex: N,
                role: a ? void 0 : "combobox",
                "aria-label": g ?? "Date",
                "aria-haspopup": a ? void 0 : "dialog",
                "aria-expanded": a ? void 0 : Je,
                "aria-controls": a ? void 0 : F,
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
                  a || Ve();
                },
                ...M
              }
            ),
            p && !u && Fe && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: [
                  Ee["dx-datepicker-clear"],
                  a ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": x ?? "Clear",
                onClick: me,
                children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
              }
            ),
            a && /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ee["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": S ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": K,
                "aria-controls": F,
                disabled: u,
                onClick: Ve,
                children: /* @__PURE__ */ n(De, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ n(
            "div",
            {
              id: F,
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
}, bv = ({
  value: e = 0,
  stars: t = 5,
  readOnly: s = !1,
  disabled: o = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: h = "Rate",
  tabIndex: r = 0,
  className: l,
  onChange: a,
  onValueChange: p
}) => {
  const [d, v] = X(e), b = H(
    (u) => Math.min(t, Math.max(1, u)),
    [t]
  ), w = H(
    (u) => {
      a?.(u), p?.(u);
    },
    [a, p]
  ), k = H(
    (u) => {
      s || o || (w(u), v(u));
    },
    [s, o, w]
  ), _ = (u) => {
    if (s || o) return;
    const y = d > 0 ? d : 1;
    switch (u.key) {
      case "ArrowRight":
      case "ArrowUp":
        u.preventDefault(), k(b(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        u.preventDefault(), k(b(y - 1));
        break;
      case "Home":
        u.preventDefault(), k(1);
        break;
      case "End":
        u.preventDefault(), k(t);
        break;
    }
  }, f = Array.from({ length: t }, (u, y) => y + 1);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": s || void 0,
      className: [
        Zt["dx-rating"],
        s ? Zt["dx-rating-readonly"] : null,
        o ? Zt["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      children: [
        !s && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Zt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? r : -1,
            disabled: o,
            onClick: () => k(0),
            children: /* @__PURE__ */ n(De, { name: "ban", size: 16 })
          }
        ),
        f.map((u) => {
          const y = u <= e, O = u === (e > 0 ? e : d);
          return /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${h} ${u}`,
              tabIndex: O ? r : -1,
              "aria-disabled": o || s || void 0,
              disabled: o || s,
              className: [
                Zt["dx-rating-item"],
                y ? Zt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => k(u),
              onFocus: () => v(u),
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
            u
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
const vv = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: s = 100,
  min: o = 0,
  max: i = 100,
  step: c = 1,
  range: h = !1,
  orientation: r = "horizontal",
  disabled: l = !1,
  label: a = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: v = 0,
  className: b,
  onChange: w,
  onInput: k,
  onValueChange: _,
  onInputChange: f
}) => {
  const u = ae(null), y = ae(
    null
  ), [O, g] = X(null), S = O ?? e, x = $e(
    () => It(S, o, i),
    [S, o, i]
  ), N = $e(
    () => It(h ? t : x, o, i),
    [h, t, x, o, i]
  ), E = $e(
    () => It(h ? Math.max(s, N) : x, o, i),
    [h, s, N, x, o, i]
  ), I = H(
    (L) => {
      const ie = i - o;
      return ie <= 0 ? 0 : (It(L, o, i) - o) / ie * 100;
    },
    [o, i]
  ), C = H(
    (L, ie) => {
      const Y = u.current;
      if (!Y) return o;
      const de = Y.getBoundingClientRect();
      let le;
      r === "vertical" ? le = 1 - (ie - de.top) / de.height : le = (L - de.left) / de.width;
      const ye = o + It(le, 0, 1) * (i - o);
      return c > 0 ? It(Math.round(ye / c) * c, o, i) : It(ye, o, i);
    },
    [o, i, c, r]
  ), M = H(
    (L) => {
      typeof L == "number" && g(L), w?.(L), _?.(L);
    },
    [w, _]
  ), m = H(
    (L) => {
      typeof L == "number" && g(L), k?.(L), f?.(L);
    },
    [k, f]
  ), D = H(
    (L, ie, Y) => {
      const de = C(ie, Y);
      let le;
      h ? L === "min" ? le = { min: Math.min(de, E), max: E } : le = { min: N, max: Math.max(de, N) } : le = de, m(le), y.current === null && M(le);
    },
    [h, C, N, E, m, M]
  ), P = H(
    (L, ie) => {
      const Y = (c > 0 ? c : 1) * ie;
      let de;
      h ? L === "min" ? de = {
        min: It(N + Y, o, E),
        max: E
      } : de = {
        min: N,
        max: It(E + Y, N, i)
      } : de = It(x + Y, o, i), M(de);
    },
    [h, c, o, i, N, E, x, M]
  ), j = (L, ie) => {
    if (!l)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), P(L, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), P(L, 1);
          break;
        case "Home":
          ie.preventDefault(), M(h ? L === "min" ? { min: o, max: E } : { min: N, max: N } : o);
          break;
        case "End":
          ie.preventDefault(), M(h ? L === "min" ? { min: E, max: E } : { min: N, max: i } : i);
          break;
      }
  }, T = (L, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: L, pointerId: ie.pointerId }, D(L, ie.clientX, ie.clientY));
  }, F = (L) => {
    !y.current || y.current.pointerId !== L.pointerId || (L.preventDefault(), D(y.current.key, L.clientX, L.clientY));
  }, V = (L) => {
    !y.current || y.current.pointerId !== L.pointerId || (y.current = null, L.preventDefault(), M(h ? { min: N, max: E } : x));
  }, [Z, Q] = X(null), K = I(N), te = I(E), oe = h ? K : 0, ee = te;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        sn["dx-slider"],
        r === "vertical" ? sn["dx-slider-vertical"] : null,
        l ? sn["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ $("div", { ref: u, className: sn["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: sn["dx-slider-range"],
            style: r === "vertical" ? { bottom: `${oe}%`, height: `${ee - oe}%` } : { left: `${oe}%`, width: `${ee - oe}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(N),
            "aria-orientation": r,
            "aria-label": h ? p : a,
            "aria-disabled": l || void 0,
            tabIndex: l || h && Z === "max" ? -1 : v,
            className: sn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${K}% - 8px)` } : { left: `calc(${K}% - 8px)` },
            onKeyDown: (L) => j("min", L),
            onPointerDown: (L) => T("min", L),
            onPointerMove: F,
            onPointerUp: V,
            onFocus: () => Q("min")
          }
        ),
        h && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(E),
            "aria-orientation": r,
            "aria-label": d,
            "aria-disabled": l || void 0,
            tabIndex: l || Z === "min" ? -1 : v,
            className: sn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (L) => j("max", L),
            onPointerDown: (L) => T("max", L),
            onPointerMove: F,
            onPointerUp: V,
            onFocus: () => Q("max")
          }
        )
      ] })
    }
  );
}, Ke = {
  "dx-timespanpicker": "_dx-timespanpicker_1nol4_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_1nol4_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_1nol4_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_1nol4_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_1nol4_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_1nol4_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_1nol4_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_1nol4_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_1nol4_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_1nol4_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_1nol4_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_1nol4_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_1nol4_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_1nol4_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_1nol4_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_1nol4_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_1nol4_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_1nol4_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_1nol4_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_1nol4_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_1nol4_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_1nol4_250"
}, s0 = "-10675199.02:48:05.4775808", r0 = "10675199.02:48:05.4775808", Kt = 86400, Ut = 3600, Dt = 60, ns = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Is = {
  days: Kt,
  hours: Ut,
  minutes: Dt,
  seconds: 1
}, o0 = {
  day: Kt,
  hour: Ut,
  minute: Dt,
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
    const r = i[1] != null ? Number(i[1]) : 0, l = i[2] != null ? Number(i[2]) : 0, a = i[3] != null ? Number(i[3]) : 0, p = i[4] != null ? Number(i[4]) : 0;
    return s * (r * Kt + l * Ut + a * Dt + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || l > 59 || a > 59 ? null : s * (h * Kt + r * Ut + l * Dt + a + p);
  }
  return null;
}
function l0(e) {
  return e.days * Kt + e.hours * Ut + e.minutes * Dt + e.seconds;
}
function js(e) {
  let t = Math.abs(e);
  const s = Math.floor(t / Kt);
  t %= Kt;
  const o = Math.floor(t / Ut);
  t %= Ut;
  const i = Math.floor(t / Dt), c = Math.round(t % Dt * 1e9) / 1e9;
  return { days: s, hours: o, minutes: i, seconds: c };
}
function is(e, t) {
  const s = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Dt) * Dt : t === "hour" ? o = Math.round(o / Ut) * Ut : t === "day" && (o = Math.round(o / Kt) * Kt);
  let i = Math.round(o % Dt);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const h = Math.floor(o / Dt) + c, r = h % 60, l = Math.floor(h / 60), a = l % 24, p = Math.floor(l / 24), d = s ? "-" : "", v = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${v}${fn(a)}`;
    case "minute":
      return `${d}${v}${fn(a)}:${fn(r)}`;
    default:
      return `${d}${v}${fn(a)}:${fn(r)}:${fn(i)}`;
  }
}
function As(e, t = "second") {
  const s = An(e);
  return s === null ? "" : is(s, t);
}
function ss(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const kv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    min: c = s0,
    max: h = r0,
    step: r = "1",
    precision: l = "second",
    showDays: a = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: v = !0,
    allowClear: b = !1,
    inline: w = !1,
    onChange: k,
    onValueChange: _,
    onOpen: f,
    onClose: u,
    disabled: y,
    placeholder: O,
    ariaLabel: g,
    triggerLabel: S,
    clearLabel: x,
    tabIndex: N,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...M
  }, m) {
    const D = ae(null), P = ae(null), j = ae(null), T = Ye(), F = o !== void 0, [V, Z] = X(
      () => i != null ? As(i, l) : ""
    ), [Q, K] = X(!1), [te, oe] = X(null), [ee, L] = X(null), ie = $e(
      () => An(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), Y = $e(
      () => An(h) ?? Number.MAX_SAFE_INTEGER,
      [h]
    ), de = $e(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), le = $e(() => {
      const J = F ? o ?? "" : V;
      return J ? An(J) : null;
    }, [o, V, F]), ye = H(
      (J) => {
        const Se = J === null ? "" : is(J, l);
        F || Z(Se), k?.(Se), _?.(Se);
      },
      [F, l, k, _]
    ), ke = H(
      (J) => {
        J && te !== null && ye(te), K(!1), oe(null), L(null), u?.(), w || j.current?.focus();
      },
      [w, te, ye, u]
    ), Be = H(() => {
      y || (oe(le ?? 0), K(!0), f?.());
    }, [y, le, f]), ve = H(() => {
      Q ? ke(!1) : Be();
    }, [Q, ke, Be]), We = H(
      (J, Se) => {
        oe((nt) => {
          const Nt = (nt ?? le ?? 0) + Se * de * Is[J];
          return ss(Nt, ie, Y);
        });
      },
      [le, de, ie, Y]
    ), xe = H(
      (J) => {
        const Se = ee?.[J];
        if (Se == null) return;
        const nt = Number.parseFloat(Se), Wt = Number.isNaN(nt) ? 0 : nt;
        oe((Nt) => {
          const ze = Nt ?? le ?? 0, Xe = js(ze);
          Xe[J] = Wt;
          const Rt = (ze < 0 ? -1 : 1) * l0(Xe);
          return ss(Rt, ie, Y);
        }), L(null);
      },
      [ee, le, ie, Y]
    ), Ze = (J, Se) => {
      L((nt) => ({ ...nt ?? {}, [J]: Se }));
    }, Ve = (J, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), xe(J), We(J, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), xe(J), We(J, -1);
          break;
        case "Home":
          Se.preventDefault(), xe(J), oe(ie);
          break;
        case "End":
          Se.preventDefault(), xe(J), oe(Y);
          break;
        case "Enter":
          Se.preventDefault(), xe(J), ke(!0);
          break;
      }
    }, Le = H(() => {
      if (Q) return;
      const J = An(V);
      ye(J !== null ? ss(J, ie, Y) : null);
    }, [Q, V, ie, Y, ye]), tt = (J) => {
      F || Z(J.target.value);
    }, Qe = (J) => {
      J.key === "Enter" ? (J.preventDefault(), Q ? ke(!0) : Le()) : J.key === "Escape" && Q ? (J.preventDefault(), ke(!1)) : J.key === "ArrowDown" && !Q ? (J.preventDefault(), Be()) : J.key === "Tab" && Q && K(!1), C?.(J);
    }, et = (J) => {
      Le(), I?.(J);
    }, W = () => {
      F || Z(""), k?.(""), _?.(""), P.current?.focus();
    };
    we(() => {
      if (!Q) return;
      const J = (Se) => {
        D.current && !D.current.contains(Se.target) && ke(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [Q, ke]), we(() => {
      if (!Q) return;
      const J = (Se) => {
        Se.key === "Escape" && ke(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [Q, ke]), we(() => {
      if (w && te !== null) {
        const J = le;
        (J === null || Math.abs(te - J) > 1e-9) && ye(te);
      }
    }, [w, te, le, ye]);
    const z = H(
      (J) => {
        P.current = J, typeof m == "function" ? m(J) : m && (m.current = J);
      },
      [m]
    ), q = F ? o ? As(o, l) : "" : V, ne = F ? !!o : V.length > 0, _e = w || Q, se = te ?? le ?? 0, me = js(se), Ne = o0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (J) => Is[J] >= Ne && (J === "days" ? a : J === "hours" ? p : J === "minutes" ? d : v)
    ), dt = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], bt = /* @__PURE__ */ $("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: is(se, l) }),
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((J) => /* @__PURE__ */ $("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ke["dx-timespanpicker-unit-label"], children: ns[J] }),
        /* @__PURE__ */ $("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ee?.[J] ?? String(me[J]),
              onChange: (Se) => Ze(J, Se.target.value),
              onKeyDown: (Se) => Ve(J, Se),
              onBlur: () => xe(J)
            }
          ),
          /* @__PURE__ */ $("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${ns[J].toLowerCase()}`,
                onClick: () => {
                  xe(J), We(J, 1);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${ns[J].toLowerCase()}`,
                onClick: () => {
                  xe(J), We(J, -1);
                },
                children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, J)) }),
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
    return /* @__PURE__ */ $(
      "div",
      {
        ref: D,
        className: [
          Ke["dx-timespanpicker"],
          w ? Ke["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !w && /* @__PURE__ */ $(Ce, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: q,
                disabled: y,
                placeholder: O,
                tabIndex: N,
                role: "combobox",
                "aria-label": g ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": T,
                "aria-invalid": s || void 0,
                className: [
                  Ke["dx-timespanpicker-input"],
                  dt,
                  s ? Ke["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...M
              }
            ),
            b && !y && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ke["dx-timespanpicker-clear"],
                "aria-label": x ?? "Clear",
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
                "aria-label": S ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": T,
                disabled: y,
                onClick: ve,
                children: /* @__PURE__ */ n(De, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ n(
            "div",
            {
              id: T,
              role: w ? void 0 : "dialog",
              "aria-label": g ?? "Time span picker",
              className: w ? void 0 : Ke["dx-timespanpicker-popup"],
              children: bt
            }
          )
        ]
      }
    );
  }
), a0 = "_wrapper_1c8sy_1", i0 = "_cells_1c8sy_8", c0 = "_cell_1c8sy_8", d0 = "_invalid_1c8sy_63", u0 = "_live_1c8sy_73", rn = {
  wrapper: a0,
  cells: i0,
  cell: c0,
  "cell-sm": "_cell-sm_1c8sy_45",
  "cell-md": "_cell-md_1c8sy_51",
  "cell-lg": "_cell-lg_1c8sy_57",
  invalid: d0,
  live: u0
};
function Ts(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const wv = qe(
  function({
    length: t = 6,
    value: s,
    defaultValue: o,
    onChange: i,
    invalid: c = !1,
    size: h = "md",
    autoFocus: r = !1,
    disabled: l = !1,
    label: a = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": v
  }, b) {
    const w = Ye(), k = s !== void 0, [_, f] = X(Ts(o).join("")), u = k ? Ts(s).join("") : _, y = Array.from({ length: t }, (M, m) => u[m] ?? ""), O = ae([]), [g, S] = X(""), x = (M) => {
      k || f(M), i?.(M);
    }, N = (M) => {
      const m = O.current[M];
      m && !m.disabled && (m.focus(), m.select());
    }, E = (M, m) => {
      const D = m.replace(/\D/g, "").slice(-1), P = u.split("");
      if (D) {
        P[M] = D;
        const j = P.join("").slice(0, t);
        x(j), j.length < t ? N(M + 1) : p && S("Code complete");
      }
    }, I = (M, m) => {
      if (m.key === "Backspace") {
        if (m.preventDefault(), u[M]) {
          const D = u.split("");
          D[M] = "", x(D.join(""));
        } else if (M > 0) {
          const D = u.split("");
          D[M - 1] = "", x(D.join("")), N(M - 1);
        }
      } else m.key === "ArrowLeft" && M > 0 ? (m.preventDefault(), N(M - 1)) : m.key === "ArrowRight" && M < t - 1 ? (m.preventDefault(), N(M + 1)) : m.key === "Home" ? (m.preventDefault(), N(0)) : m.key === "End" && (m.preventDefault(), N(t - 1));
    }, C = (M, m) => {
      m.preventDefault();
      const D = m.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!D) return;
      const P = u.split("");
      let j = 0;
      for (let F = 0; F < D.length && M + F < t; F++)
        P[M + F] = D[F] ?? "", j++;
      const T = P.join("");
      x(T), T.length >= t ? p && S("Code complete") : N(M + j);
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": v ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[h]].join(" "), children: y.map((M, m) => /* @__PURE__ */ n(
            "input",
            {
              ref: (D) => {
                O.current[m] = D, m === 0 && b && (typeof b == "function" ? b(D) : b.current = D);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: M,
              disabled: l,
              "aria-label": `Digit ${m + 1} of ${t}`,
              "aria-invalid": c && M !== "" ? !0 : void 0,
              autoFocus: r && m === 0,
              className: [
                rn.cell,
                rn[`cell-${h}`],
                c ? rn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (D) => E(m, D.target.value),
              onKeyDown: (D) => I(m, D),
              onPaste: (D) => C(m, D),
              onFocus: (D) => D.target.select(),
              onBlur: () => {
                p && S("");
              }
            },
            m
          )) }),
          p && /* @__PURE__ */ n(
            "span",
            {
              id: `${w}-live`,
              role: "status",
              "aria-live": "polite",
              className: rn.live,
              children: g
            }
          )
        ]
      }
    );
  }
), _0 = "_wrapper_1mvcz_1", f0 = "_header_1mvcz_7", h0 = "_label_1mvcz_15", p0 = "_clear_1mvcz_22", m0 = "_canvas_1mvcz_53", g0 = "_disabled_1mvcz_69", hn = {
  wrapper: _0,
  header: f0,
  label: h0,
  clear: p0,
  canvas: m0,
  disabled: g0
}, $v = qe(
  function({
    value: t,
    defaultValue: s,
    onChange: o,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: h = "Clear",
    ariaLabel: r = "Signature",
    width: l,
    height: a = 140,
    disabled: p = !1,
    className: d
  }, v) {
    const b = ae(null), w = ae(!1), k = ae(!1), _ = ae({ x: 0, y: 0 });
    we(() => {
      const x = b.current;
      if (!x) return;
      const N = window.devicePixelRatio || 1, E = Math.round((l ?? x.clientWidth) * N), I = Math.round(a * N);
      (x.width !== E || x.height !== I) && (x.width = E, x.height = I);
      const C = x.getContext("2d");
      if (!C) return;
      C.setTransform(N, 0, 0, N, 0, 0), C.lineWidth = c, C.strokeStyle = i, C.lineCap = "round", C.lineJoin = "round";
      const M = t ?? s;
      if (M) {
        const m = new Image();
        m.onload = () => {
          C.drawImage(m, 0, 0, x.clientWidth, a);
        }, m.src = M;
      }
    }, [t, s, i, c, l, a]);
    const f = () => {
      const x = b.current;
      if (!x) return;
      const N = x.toDataURL("image/png");
      o?.(N);
    }, u = () => {
      const x = b.current;
      if (!x) return;
      const N = x.getContext("2d");
      N && N.clearRect(0, 0, x.width, x.height), o?.("");
    };
    cs(v, () => ({
      clear: u,
      toDataURL: (x = "image/png", N) => b.current?.toDataURL(x, N) ?? ""
    }));
    const y = (x) => {
      const N = x.currentTarget.getBoundingClientRect();
      return { x: x.clientX - N.left, y: x.clientY - N.top };
    }, O = (x) => {
      p || (x.preventDefault(), typeof x.currentTarget.setPointerCapture == "function" && x.currentTarget.setPointerCapture(x.pointerId), w.current = !0, k.current = !1, _.current = y(x));
    }, g = (x) => {
      if (!w.current) return;
      x.preventDefault();
      const N = x.currentTarget.getContext("2d");
      if (!N) return;
      const E = y(x);
      N.beginPath(), N.moveTo(_.current.x, _.current.y), N.lineTo(E.x, E.y), N.stroke(), _.current = E, k.current = !0;
    }, S = (x) => {
      w.current && (x.preventDefault(), w.current = !1, k.current && f());
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: [
          hn.wrapper,
          d,
          p ? hn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ $("div", { className: hn.header, children: [
            /* @__PURE__ */ n("span", { className: hn.label, children: r }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: hn.clear,
                onClick: u,
                disabled: p,
                children: h
              }
            )
          ] }),
          /* @__PURE__ */ n(
            "canvas",
            {
              ref: b,
              role: "img",
              "aria-label": r,
              "aria-disabled": p || void 0,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${a}px`
              },
              className: hn.canvas,
              onPointerDown: O,
              onPointerMove: g,
              onPointerUp: S,
              onPointerCancel: S
            }
          )
        ]
      }
    );
  }
), x0 = "_wrapper_17azb_1", y0 = "_trigger_17azb_7", b0 = "_list_17azb_35", v0 = "_row_17azb_44", k0 = "_name_17azb_59", w0 = "_size_17azb_68", $0 = "_progress_17azb_74", N0 = "_fill_17azb_82", O0 = "_status_17azb_99", S0 = "_remove_17azb_106", jt = {
  wrapper: x0,
  trigger: y0,
  list: b0,
  row: v0,
  name: k0,
  size: w0,
  progress: $0,
  fill: N0,
  status: O0,
  remove: S0
};
function Rs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Nv = qe(function({
  url: t,
  multiple: s = !1,
  parameterName: o = "files",
  auto: i = !0,
  headers: c,
  accept: h,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: a = "Upload",
  children: p,
  onProgress: d,
  onComplete: v,
  onError: b
}, w) {
  const k = ae(null), [_, f] = X([]), u = ae(/* @__PURE__ */ new Map()), y = (N, E) => {
    f(
      (I) => I.map((C) => C.file.name === N ? { ...C, ...E } : C)
    );
  }, O = (N) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    u.current.set(N.file.name, E);
    const I = new FormData();
    if (I.append(o, N.file), E.upload.addEventListener("progress", (C) => {
      if (!C.lengthComputable) return;
      const M = Math.round(C.loaded / C.total * 100);
      y(N.file.name, { state: "uploading", progress: M }), d?.(N.file.name, M);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (y(N.file.name, { state: "complete", progress: 100 }), v?.(N.file.name)) : (y(N.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), b?.(N.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      y(N.file.name, { state: "error", message: "Network error" }), b?.(N.file.name, "Network error");
    }), c)
      for (const [C, M] of Object.entries(c))
        E.setRequestHeader(C, M);
    E.open("POST", t), E.send(I), y(N.file.name, { state: "uploading", progress: 0 });
  }, g = (N) => {
    if (!N) return;
    const E = [...N], I = [];
    let C = Math.max(0, r - _.length);
    for (const m of E) {
      if (l != null && m.size > l) {
        b?.(
          m.name,
          `File too large (maximum ${Rs(l)})`
        );
        continue;
      }
      if (C <= 0) {
        b?.(m.name, `Too many files (maximum ${r})`);
        continue;
      }
      C -= 1, I.push(m);
    }
    const M = I.map((m) => ({
      file: m,
      state: "pending",
      progress: 0
    }));
    f((m) => [...m, ...M]), k.current && (k.current.value = ""), i && M.forEach(O);
  }, S = (N) => {
    u.current.get(N)?.abort(), u.current.delete(N), f((I) => I.filter((C) => C.file.name !== N));
  }, x = p ?? /* @__PURE__ */ $(
    "button",
    {
      type: "button",
      className: jt.trigger,
      onClick: () => k.current?.click(),
      children: [
        /* @__PURE__ */ n(De, { name: "upload", size: 14 }),
        a
      ]
    }
  );
  return cs(w, () => ({
    open: () => k.current?.click(),
    upload: () => _.forEach((N) => N.state === "pending" ? O(N) : null)
  })), /* @__PURE__ */ $("div", { className: jt.wrapper, children: [
    x,
    /* @__PURE__ */ n(
      "input",
      {
        ref: k,
        type: "file",
        hidden: !0,
        multiple: s,
        accept: h,
        "data-testid": "upload-input",
        onChange: (N) => g(N.target.files)
      }
    ),
    !p && _.length > 0 && /* @__PURE__ */ n("ul", { className: jt.list, children: _.map(({ file: N, state: E, progress: I, message: C }) => /* @__PURE__ */ $(
      "li",
      {
        className: jt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: jt.name, children: N.name }),
          /* @__PURE__ */ n("span", { className: jt.size, children: Rs(N.size) }),
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
          /* @__PURE__ */ n("span", { className: jt.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? C ?? "Failed" : "Pending" }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: jt.remove,
              "aria-label": `Remove ${N.name}`,
              onClick: () => S(N.name),
              children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
            }
          )
        ]
      },
      N.name
    )) })
  ] });
}), z0 = "_zone_1cstd_1", D0 = "_dragging_1cstd_23", M0 = "_caption_1cstd_28", C0 = "_browse_1cstd_40", E0 = "_disabled_1cstd_67", Dn = {
  zone: z0,
  dragging: D0,
  caption: M0,
  browse: C0,
  disabled: E0
};
function I0(e, t) {
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
const Ov = qe(
  function({
    accept: t,
    multiple: s = !1,
    onDrop: o,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: h = "Browse",
    disabled: r = !1,
    className: l
  }, a) {
    const p = ae(null), [d, v] = X(!1), b = (u) => {
      if (!u || u.length === 0) return;
      const y = [...u].filter((O) => I0(O, t ?? ""));
      y.length !== 0 && o?.(y);
    }, w = (u) => {
      r || (u.preventDefault(), v(!0));
    }, k = (u) => {
      r || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", v(!0));
    }, _ = (u) => {
      r || u.currentTarget.contains(u.relatedTarget) || v(!1);
    }, f = (u) => {
      r || (u.preventDefault(), v(!1), b(u.dataTransfer.files));
    };
    return cs(a, () => ({
      open: () => p.current?.click()
    })), /* @__PURE__ */ $(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          Dn.zone,
          d ? Dn.dragging : null,
          r ? Dn.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: w,
        onDragOver: k,
        onDragLeave: _,
        onDrop: f,
        children: [
          /* @__PURE__ */ n("p", { className: Dn.caption, children: d ? c : i }),
          !r && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Dn.browse,
              onClick: () => p.current?.click(),
              children: h
            }
          ),
          /* @__PURE__ */ n(
            "input",
            {
              ref: p,
              type: "file",
              hidden: !0,
              multiple: s,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (u) => {
                b(u.target.files), u.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), j0 = "_root_2n1we_1", A0 = "_menubar_2n1we_5", T0 = "_horizontal_2n1we_15", R0 = "_vertical_2n1we_20", L0 = "_itemWrapper_2n1we_25", P0 = "_item_2n1we_25", B0 = "_disabled_2n1we_61", F0 = "_icon_2n1we_68", q0 = "_text_2n1we_75", H0 = "_caret_2n1we_79", K0 = "_hasChildren_2n1we_85", U0 = "_submenu_2n1we_94", W0 = "_submenuItem_2n1we_118", ct = {
  root: j0,
  menubar: A0,
  horizontal: T0,
  vertical: R0,
  itemWrapper: L0,
  item: P0,
  disabled: B0,
  icon: F0,
  text: q0,
  caret: H0,
  hasChildren: K0,
  submenu: U0,
  submenuItem: W0
};
function Mn(e) {
  return !!e.disabled;
}
function Sv({
  items: e,
  orientation: t = "horizontal",
  onClick: s,
  ariaLabel: o = "Menu",
  className: i
}) {
  const c = Ye(), h = ae(null), r = ae(null), [l, a] = X(null), p = ae(0), d = ae(null), v = H(
    (_) => {
      const f = {
        text: _.text,
        value: _.value,
        path: _.path
      };
      s?.(f);
    },
    [s]
  ), b = H(
    (_, f) => {
      if (!Mn(_)) {
        if (_.children && _.children.length > 0) {
          const u = l === f, y = Date.now() - p.current < 600;
          if (u && y) {
            p.current = 0;
            return;
          }
          a((O) => O === f ? null : f);
          return;
        }
        v(_), a(null);
      }
    },
    [v, l]
  ), w = (_) => {
    Mn(_) || _.children && _.children.length > 0 || (v(_), a(null));
  };
  we(() => {
    if (l == null) return;
    const _ = (f) => {
      h.current && !h.current.contains(f.target) && a(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [l]), we(() => {
    if (d.current != null && l === d.current) {
      const _ = `${c}-submenu-${l}`;
      document.getElementById(_)?.querySelector(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )?.focus(), d.current = null;
    }
  }, [l, c]);
  const k = (_) => {
    const f = r.current;
    if (!f) return;
    const u = Array.from(
      f.querySelectorAll('[data-top="true"]')
    ).filter(
      (g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true"
    );
    if (l != null) {
      const g = `${c}-submenu-${l}`, S = document.getElementById(g);
      if (S) {
        const x = Array.from(
          S.querySelectorAll('[role="menuitem"]')
        ).filter((I) => I.getAttribute("aria-disabled") !== "true"), N = document.activeElement, E = N ? x.indexOf(N) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), E === -1 ? x[0]?.focus() : x[(E + 1) % x.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), E === -1 ? x[x.length - 1]?.focus() : x[(E - 1 + x.length) % x.length]?.focus();
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), a(null), f.querySelector(
            `[data-top="true"][data-index="${l}"]`
          )?.focus();
          return;
        }
        if (_.key === "Enter" || _.key === " ")
          return;
      }
      if (_.key === "Escape") {
        _.preventDefault(), a(null);
        return;
      }
    }
    const y = document.activeElement, O = y ? u.indexOf(y) : -1;
    if (_.key === "ArrowRight" || t === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), u.length === 0) return;
      const g = O === -1 ? 0 : (O + 1) % u.length;
      u[g]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || t === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), u.length === 0) return;
      const g = O === -1 ? u.length - 1 : (O - 1 + u.length) % u.length;
      u[g]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if (O >= 0) {
        const g = y?.getAttribute("data-index"), S = g != null ? Number(g) : -1, x = S >= 0 ? e[S] : void 0;
        x?.children && x.children.length > 0 && !Mn(x) && (_.preventDefault(), d.current = S, a(S));
      }
      return;
    }
    if (_.key === "Home") {
      _.preventDefault(), u[0]?.focus();
      return;
    }
    if (_.key === "End") {
      _.preventDefault(), u[u.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: h,
      "aria-label": o,
      className: [ct.root, ct[t], i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: r,
          role: "menubar",
          "aria-label": o,
          className: ct.menubar,
          onKeyDown: k,
          children: e.map((_, f) => {
            const u = !!_.children && _.children.length > 0, y = l === f, O = Mn(_), g = `${c}-submenu-${f}`;
            return /* @__PURE__ */ $(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && u && !O && (p.current = Date.now(), a(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && u && a((S) => S === f ? null : S);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ $(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": f,
                      "data-dx-menu-item": "",
                      "aria-disabled": O || void 0,
                      "aria-haspopup": u ? "menu" : void 0,
                      "aria-expanded": u ? y : void 0,
                      "aria-controls": u ? g : void 0,
                      tabIndex: O ? -1 : 0,
                      disabled: O,
                      className: [
                        ct.item,
                        O ? ct.disabled : null,
                        u ? ct.hasChildren : null
                      ].filter(Boolean).join(" "),
                      onClick: () => b(_, f),
                      children: [
                        _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: _.text }),
                        u ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  u && y ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: g,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((S, x) => {
                        const N = Mn(S), E = !!S.children && S.children.length > 0;
                        return /* @__PURE__ */ $(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": N || void 0,
                            "aria-haspopup": E ? "menu" : void 0,
                            tabIndex: N ? -1 : 0,
                            disabled: N,
                            className: [
                              ct.submenuItem,
                              N ? ct.disabled : null
                            ].filter(Boolean).join(" "),
                            onClick: () => w(S),
                            children: [
                              S.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: S.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: S.text })
                            ]
                          },
                          `${S.text}-${x}`
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
const V0 = "_root_12bqn_1", X0 = "_list_12bqn_9", G0 = "_item_12bqn_14", Y0 = "_trigger_12bqn_18", Z0 = "_disabled_12bqn_44", J0 = "_expanded_12bqn_51", Q0 = "_icon_12bqn_55", ex = "_text_12bqn_66", tx = "_caret_12bqn_73", nx = "_open_12bqn_80", sx = "_submenu_12bqn_84", rx = "_submenuItem_12bqn_93", ox = "_nestedWrapper_12bqn_122", lx = "_nestedTrigger_12bqn_127", ax = "_nestedMenu_12bqn_152", ix = "_iconOnly_12bqn_160", Ae = {
  root: V0,
  list: X0,
  item: G0,
  trigger: Y0,
  disabled: Z0,
  expanded: J0,
  icon: Q0,
  text: ex,
  caret: tx,
  open: nx,
  submenu: sx,
  submenuItem: rx,
  nestedWrapper: ox,
  nestedTrigger: lx,
  nestedMenu: ax,
  iconOnly: ix
};
function cx({
  item: e,
  baseId: t,
  parentKey: s,
  onEmit: o
}) {
  const i = !!e.children && e.children.length > 0, [c, h] = X(!1), r = `${t}-nested-${s}`, l = !!e.disabled, a = () => {
    if (!l) {
      if (i) {
        h((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), a()) : d.key === "Escape" && c && (d.preventDefault(), h(!1));
  };
  return i ? /* @__PURE__ */ $("div", { className: Ae.nestedWrapper, children: [
    /* @__PURE__ */ $(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": r,
        "aria-disabled": l || void 0,
        disabled: l,
        tabIndex: l ? -1 : 0,
        className: [Ae.nestedTrigger, l ? Ae.disabled : null].filter(Boolean).join(" "),
        onClick: a,
        onKeyDown: p,
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
    c ? /* @__PURE__ */ n("div", { id: r, role: "menu", className: Ae.nestedMenu, children: e.children?.map((d, v) => {
      const b = !!d.disabled;
      return /* @__PURE__ */ $(
        "div",
        {
          role: "menuitem",
          "aria-disabled": b || void 0,
          tabIndex: b ? -1 : 0,
          className: [
            Ae.submenuItem,
            b ? Ae.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            b || d.children && d.children.length > 0 || o({
              text: d.text,
              value: d.value,
              path: d.path
            });
          },
          onKeyDown: (w) => {
            if (w.key === "Enter" || w.key === " ") {
              if (w.preventDefault(), b) return;
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
        `${d.text}-${v}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ $(
    "div",
    {
      role: "menuitem",
      "aria-disabled": l || void 0,
      tabIndex: l ? -1 : 0,
      className: [Ae.submenuItem, l ? Ae.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        l || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), l) return;
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
function zv({
  items: e,
  multiple: t,
  showArrow: s,
  displayStyle: o,
  onClick: i,
  ariaLabel: c = "Panel menu",
  className: h
}) {
  const r = Ye(), l = t ?? !1, a = s ?? !0, p = o ?? "iconAndText", [d, v] = X([]), b = H(
    (_) => {
      const f = {
        text: _.text,
        value: _.value,
        path: _.path
      };
      i?.(f);
    },
    [i]
  ), w = (_, f, u) => {
    if (!u.disabled) {
      if (f) {
        v((y) => y.includes(_) ? y.filter((g) => g !== _) : l ? [...y, _] : [_]);
        return;
      }
      b(u);
    }
  }, k = (_) => {
    const f = _.target;
    if (!(_.key === "Enter" || _.key === " ")) {
      if (_.key === "Escape") {
        const u = f.getAttribute("aria-controls");
        if (u) {
          const y = u.match(/-panel-(\d+)$/);
          if (y) {
            const O = Number(y[1]);
            v((g) => g.filter((S) => S !== O));
          }
        } else {
          const y = f.closest('[role="menu"]');
          if (y) {
            const g = y.id.match(/-panel-(\d+)$/);
            if (g) {
              const S = Number(g[1]);
              v((N) => N.filter((E) => E !== S)), document.getElementById(`${r}-trigger-${S}`)?.focus();
            }
          }
        }
        _.preventDefault();
        return;
      }
      if (_.key === "ArrowDown" || _.key === "ArrowUp") {
        const u = Array.from(
          _.currentTarget.querySelectorAll(
            'button, [role="menuitem"]'
          )
        ).filter(
          (S) => !S.hasAttribute("disabled") && S.getAttribute("aria-disabled") !== "true"
        ), y = u.indexOf(f);
        if (y === -1) return;
        _.preventDefault();
        const O = _.key === "ArrowDown" ? 1 : -1;
        u[(y + O + u.length) % u.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": c,
      className: [
        Ae.root,
        p === "icon" ? Ae.iconOnly : Ae.iconAndText,
        h
      ].filter(Boolean).join(" "),
      onKeyDown: k,
      children: /* @__PURE__ */ n("div", { className: Ae.list, role: "presentation", children: e.map((_, f) => {
        const u = !!_.children && _.children.length > 0, y = d.includes(f), O = !!_.disabled, g = `${r}-panel-${f}`, S = `${r}-trigger-${f}`;
        return /* @__PURE__ */ $("div", { className: Ae.item, children: [
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              id: S,
              "aria-expanded": u ? y : void 0,
              "aria-controls": u ? g : void 0,
              "aria-disabled": O || void 0,
              disabled: O,
              tabIndex: O ? -1 : 0,
              className: [
                Ae.trigger,
                O ? Ae.disabled : null,
                y ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => w(f, u, _),
              children: [
                _.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: _.icon }) : null,
                p === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: _.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": _.text, children: _.icon ? null : _.text.slice(0, 1) }),
                u && a ? /* @__PURE__ */ n(
                  "span",
                  {
                    className: [Ae.caret, y ? Ae.open : null].filter(Boolean).join(" "),
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(De, { name: "chevron-down", size: 10 })
                  }
                ) : null
              ]
            }
          ),
          u && y ? /* @__PURE__ */ n(
            "div",
            {
              id: g,
              role: "menu",
              className: Ae.submenu,
              "aria-labelledby": S,
              children: _.children?.map((x, N) => /* @__PURE__ */ n(
                cx,
                {
                  item: x,
                  baseId: r,
                  parentKey: `${f}-${N}`,
                  onEmit: b
                },
                `${x.text}-${N}`
              ))
            }
          ) : null
        ] }, `${_.text}-${f}`);
      }) })
    }
  );
}
const dx = "_root_wnctl_1", ux = "_trigger_wnctl_7", _x = "_defaultTrigger_wnctl_40", fx = "_avatar_wnctl_46", hx = "_menu_wnctl_58", px = "_item_wnctl_74", mx = "_disabled_wnctl_88", gx = "_active_wnctl_97", xx = "_icon_wnctl_107", yx = "_text_wnctl_114", At = {
  root: dx,
  trigger: ux,
  defaultTrigger: _x,
  avatar: fx,
  menu: hx,
  item: px,
  disabled: mx,
  active: gx,
  icon: xx,
  text: yx
};
function Dv({
  items: e,
  trigger: t,
  onClick: s,
  ariaLabel: o = "Profile menu",
  className: i
}) {
  const c = Ye(), h = `${c}-menu`, r = ae(null), l = ae(null), [a, p] = X(!1), [d, v] = X(-1), b = t, w = e.map((g, S) => g.disabled ? -1 : S).filter((g) => g >= 0), k = H(
    (g) => {
      if (g.disabled) return;
      const S = {
        text: g.text,
        path: g.path
      };
      s?.(S), p(!1), l.current?.focus();
    },
    [s]
  ), _ = H(() => {
    v(w[0] ?? -1), p(!0);
  }, [w]), f = H(() => {
    p(!1), v(-1), l.current?.focus();
  }, []);
  we(() => {
    if (!a) return;
    const g = (S) => {
      r.current && !r.current.contains(S.target) && (p(!1), v(-1));
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [a]), we(() => {
    if (!a) return;
    const g = (S) => {
      S.key === "Escape" && (S.preventDefault(), f());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [a, f]);
  const u = (g) => {
    if (w.length === 0) return;
    const S = w.indexOf(d), x = S === -1 ? 0 : (S + g + w.length) % w.length, N = w[x];
    N != null && v(N);
  }, y = (g) => {
    if (!a) {
      (g.key === "ArrowDown" || g.key === "Enter" || g.key === " ") && (g.preventDefault(), _());
      return;
    }
    switch (g.key) {
      case "Escape":
        g.preventDefault(), f();
        break;
      case "ArrowDown":
        g.preventDefault(), u(1);
        break;
      case "ArrowUp":
        g.preventDefault(), u(-1);
        break;
      case "Home":
        g.preventDefault(), w[0] != null && v(w[0]);
        break;
      case "End":
        g.preventDefault(), w[w.length - 1] != null && v(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (g.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Tab":
        p(!1), v(-1);
        break;
    }
  }, O = (g) => {
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), u(1);
        break;
      case "ArrowUp":
        g.preventDefault(), u(-1);
        break;
      case "Home":
        g.preventDefault(), w[0] != null && v(w[0]);
        break;
      case "End":
        g.preventDefault(), w[w.length - 1] != null && v(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (g.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Escape":
        g.preventDefault(), f();
        break;
      case "Tab":
        p(!1), v(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      className: [At.root, i].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ $("nav", { "aria-label": o, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": h,
            "aria-label": o,
            className: At.trigger,
            onClick: () => a ? f() : _(),
            onKeyDown: y,
            children: b ?? /* @__PURE__ */ $("span", { className: At.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: At.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        a ? /* @__PURE__ */ n(
          "div",
          {
            id: h,
            role: "menu",
            "aria-label": o,
            "aria-activedescendant": d >= 0 ? `${c}-item-${d}` : void 0,
            className: At.menu,
            onKeyDown: O,
            tabIndex: -1,
            children: e.map((g, S) => {
              const x = !!g.disabled, N = S === d;
              return /* @__PURE__ */ $(
                "div",
                {
                  id: `${c}-item-${S}`,
                  role: "menuitem",
                  "aria-disabled": x || void 0,
                  tabIndex: x ? -1 : 0,
                  className: [
                    At.item,
                    N ? At.active : null,
                    x ? At.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    x || k(g);
                  },
                  onMouseEnter: () => {
                    x || v(S);
                  },
                  children: [
                    g.icon ? /* @__PURE__ */ n("span", { className: At.icon, "aria-hidden": "true", children: g.icon }) : null,
                    /* @__PURE__ */ n("span", { className: At.text, children: g.text })
                  ]
                },
                `${g.text}-${S}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const bx = "_root_6bmhq_1", vx = "_bottomRight_6bmhq_11", kx = "_bottomLeft_6bmhq_16", wx = "_topRight_6bmhq_21", $x = "_topLeft_6bmhq_26", Nx = "_menu_6bmhq_31", Ox = "_itemWrapper_6bmhq_48", Sx = "_tooltip_6bmhq_54", zx = "_main_6bmhq_76", Dx = "_mainIcon_6bmhq_104", Mx = "_mainOpen_6bmhq_109", Cx = "_item_6bmhq_48", Ex = "_disabled_6bmhq_141", Ix = "_itemIcon_6bmhq_148", ut = {
  root: bx,
  bottomRight: vx,
  bottomLeft: kx,
  topRight: wx,
  topLeft: $x,
  menu: Nx,
  itemWrapper: Ox,
  tooltip: Sx,
  main: zx,
  mainIcon: Dx,
  mainOpen: Mx,
  item: Cx,
  disabled: Ex,
  itemIcon: Ix
};
function Mv({
  items: e,
  position: t,
  icon: s = "+",
  onClick: o,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const h = t ?? "bottom-right", l = `${Ye()}-menu`, a = ae(null), p = ae(null), [d, v] = X(!1), b = H(
    (f) => {
      if (f.disabled) return;
      const u = { text: f.text, value: f.value };
      o?.(u), v(!1), p.current?.focus();
    },
    [o]
  );
  we(() => {
    if (!d) return;
    const f = (u) => {
      a.current && !a.current.contains(u.target) && v(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [d]), we(() => {
    if (!d) return;
    const f = (u) => {
      u.key === "Escape" && (v(!1), p.current?.focus());
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [d]);
  const w = h === "bottom-right" ? ut.bottomRight : h === "bottom-left" ? ut.bottomLeft : h === "top-right" ? ut.topRight : ut.topLeft, k = (f) => {
    !d && (f.key === "Enter" || f.key === " " || f.key === "ArrowDown" || f.key === "ArrowUp") ? (f.preventDefault(), v(!0)) : d && f.key === "Escape" && (f.preventDefault(), v(!1));
  }, _ = (f) => {
    f.key === "Escape" && (f.preventDefault(), v(!1), p.current?.focus());
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: a,
      className: [ut.root, w, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        d ? /* @__PURE__ */ n(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": i,
            className: ut.menu,
            onKeyDown: _,
            children: e.map((f, u) => {
              const y = !!f.disabled;
              return /* @__PURE__ */ $("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: f.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": f.text,
                    "aria-disabled": y || void 0,
                    title: f.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [ut.item, y ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => b(f),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: f.icon ?? "•" })
                  }
                )
              ] }, `${f.text}-${u}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: p,
            type: "button",
            className: ut.main,
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": l,
            "aria-label": i,
            onClick: () => v((f) => !f),
            onKeyDown: k,
            children: /* @__PURE__ */ n(
              "span",
              {
                "aria-hidden": "true",
                className: [ut.mainIcon, d ? ut.mainOpen : null].filter(Boolean).join(" "),
                children: s
              }
            )
          }
        )
      ]
    }
  );
}
const jx = "_root_17721_1", Ax = "_list_17721_5", Tx = "_item_17721_15", Rx = "_link_17721_22", Lx = "_linkButton_17721_23", Px = "_current_17721_24", Bx = "_disabled_17721_68", Fx = "_icon_17721_74", qx = "_text_17721_81", Hx = "_separator_17721_85", Ue = {
  root: jx,
  list: Ax,
  item: Tx,
  link: Rx,
  linkButton: Lx,
  current: Px,
  disabled: Bx,
  icon: Fx,
  text: qx,
  separator: Hx
};
function Cv({
  items: e,
  onClick: t,
  ariaLabel: s = "Breadcrumb",
  className: o
}) {
  const i = t, c = (h) => {
    h.disabled || i?.({ text: h.text, path: h.path });
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": s,
      className: [Ue.root, o].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: Ue.list, children: e.map((h, r) => {
        const l = r === e.length - 1, a = !!h.disabled;
        return /* @__PURE__ */ $("li", { className: Ue.item, children: [
          l ? a ? /* @__PURE__ */ $(
            "span",
            {
              className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: h.icon }) : null,
                h.text
              ]
            }
          ) : h.path ? /* @__PURE__ */ $(
            "a",
            {
              href: h.path,
              className: Ue.link,
              "aria-current": "page",
              onClick: (p) => {
                p.preventDefault(), c(h);
              },
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: h.text })
              ]
            }
          ) : /* @__PURE__ */ $(
            "span",
            {
              className: Ue.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: h.icon }) : null,
                h.text
              ]
            }
          ) : a ? /* @__PURE__ */ $(
            "span",
            {
              className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: h.text })
              ]
            }
          ) : h.path ? /* @__PURE__ */ $(
            "a",
            {
              href: h.path,
              className: Ue.link,
              onClick: (p) => {
                p.preventDefault(), c(h);
              },
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: h.text })
              ]
            }
          ) : /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              className: Ue.linkButton,
              tabIndex: 0,
              onClick: () => c(h),
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: Ue.text, children: h.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${h.text}-${r}`);
      }) })
    }
  );
}
const Kx = "_root_pfzz5_1", Ux = "_list_pfzz5_5", Wx = "_item_pfzz5_15", Vx = "_connector_pfzz5_21", Xx = "_connectorCompleted_pfzz5_30", Gx = "_step_pfzz5_34", Yx = "_active_pfzz5_69", Zx = "_completed_pfzz5_75", Jx = "_circle_pfzz5_79", Qx = "_check_pfzz5_109", ey = "_icon_pfzz5_114", ty = "_number_pfzz5_119", ny = "_text_pfzz5_124", _t = {
  root: Kx,
  list: Ux,
  item: Wx,
  connector: Vx,
  connectorCompleted: Xx,
  step: Gx,
  active: Yx,
  completed: Zx,
  circle: Jx,
  check: Qx,
  icon: ey,
  number: ty,
  text: ny
};
function Ev({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  linear: i,
  Linear: c,
  onChange: h,
  Change: r,
  onSelectedIndexChange: l,
  ariaLabel: a = "Steps",
  className: p
}) {
  const d = i ?? c ?? !1, v = t ?? s, b = v !== void 0, [w, k] = X(() => Math.min(Math.max(0, v ?? o), Math.max(0, e.length - 1))), f = Math.min(
    Math.max(0, b ? v : w),
    Math.max(0, e.length - 1)
  ), u = ae(null), y = H(
    (S) => {
      const x = Math.min(
        Math.max(0, S),
        Math.max(0, e.length - 1)
      );
      b || k(x), (h ?? r ?? l)?.(x);
    },
    [b, h, r, l, e.length]
  ), O = H(
    (S, x) => !!(x.disabled || d && S > f + 1),
    [d, f]
  ), g = (S) => {
    const x = Array.from(
      S.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), N = document.activeElement, E = N ? x.indexOf(N) : -1;
    if (S.key === "ArrowRight" || S.key === "ArrowDown") {
      if (S.preventDefault(), x.length === 0) return;
      const I = E === -1 ? 0 : (E + 1) % x.length, C = x[I];
      C && C.focus();
    } else if (S.key === "ArrowLeft" || S.key === "ArrowUp") {
      if (S.preventDefault(), x.length === 0) return;
      const I = E === -1 ? x.length - 1 : (E - 1 + x.length) % x.length, C = x[I];
      C && C.focus();
    } else S.key === "Home" ? (S.preventDefault(), x[0]?.focus()) : S.key === "End" && (S.preventDefault(), x[x.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": a,
      className: [_t.root, p].filter(Boolean).join(" "),
      onKeyDown: g,
      children: /* @__PURE__ */ n("ol", { ref: u, role: "list", className: _t.list, children: e.map((S, x) => {
        const N = x === f, E = x < f, I = O(x, S);
        return /* @__PURE__ */ $(
          "li",
          {
            role: "listitem",
            className: _t.item,
            children: [
              x > 0 ? /* @__PURE__ */ n(
                "span",
                {
                  className: [
                    _t.connector,
                    E ? _t.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ $(
                "button",
                {
                  type: "button",
                  "data-step": x,
                  "aria-current": N ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    _t.step,
                    N ? _t.active : null,
                    E ? _t.completed : null,
                    I ? _t.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || y(x);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(De, { name: "check", size: "sm" }) }) : S.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: S.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: x + 1 }) }),
                    /* @__PURE__ */ n("span", { className: _t.text, children: S.text })
                  ]
                }
              )
            ]
          },
          `${S.text}-${x}`
        );
      }) })
    }
  );
}
const sy = "_root_1axlw_1", ry = "_horizontal_1axlw_13", oy = "_vertical_1axlw_17", ly = "_pane_1axlw_21", ay = "_handle_1axlw_31", iy = "_handleHorizontal_1axlw_51", cy = "_handleVertical_1axlw_57", dy = "_handleGrip_1axlw_63", uy = "_handleCollapseHint_1axlw_75", _y = "_collapseBtn_1axlw_79", fy = "_collapseBtnCollapsed_1axlw_109", wt = {
  root: sy,
  horizontal: ry,
  vertical: oy,
  pane: ly,
  handle: ay,
  handleHorizontal: iy,
  handleVertical: cy,
  handleGrip: dy,
  handleCollapseHint: uy,
  collapseBtn: _y,
  collapseBtnCollapsed: fy
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
function Iv({
  orientation: e,
  Orientation: t,
  panes: s,
  onResize: o,
  Resize: i,
  onCollapse: c,
  Collapse: h,
  ariaLabel: r = "Splitter",
  className: l
}) {
  const a = e ?? t ?? "horizontal", p = a === "horizontal", d = ae(null), v = H(() => {
    const m = s.length;
    if (m === 0) return [];
    const D = s.map((j) => j.size ? Cn(j.size, 100 / m) : 100 / m), P = D.reduce((j, T) => j + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? D.map((j) => j / P * 100) : D;
  }, [s]), [b, w] = X(() => v()), [k, _] = X(
    () => s.map((m) => !!m.collapsed)
  ), f = ae(b);
  we(() => {
    _(s.map((m) => !!m.collapsed));
  }, [s]);
  const u = H(
    () => s.map((m) => Cn(m.min, 0)),
    [s]
  ), y = H(
    () => s.map((m) => Cn(m.max, 100)),
    [s]
  ), O = H(
    (m, D) => {
      const P = { paneIndex: m, newSize: D, cancel: !1 };
      return (o ?? i)?.(P), !P.cancel;
    },
    [o, i]
  ), g = H(
    (m, D) => {
      const P = { paneIndex: m, collapse: D, cancel: !1 };
      return (c ?? h)?.(P), !P.cancel;
    },
    [c, h]
  ), S = H(
    (m) => {
      const D = !k[m];
      g(m, D) && (D ? (f.current = [...b], _((P) => {
        const j = [...P];
        return j[m] !== void 0 && (j[m] = !0), j;
      }), w((P) => {
        const j = [...P], T = j[m] ?? 0, F = m < j.length - 1 ? m + 1 : m - 1;
        if (F >= 0 && F < j.length) {
          const V = j[F] ?? 0;
          j[F] = V + T, j[m] = 0;
        } else
          j[m] = 0;
        return j;
      })) : (_((P) => {
        const j = [...P];
        return j[m] !== void 0 && (j[m] = !1), j;
      }), w(() => {
        const P = [...f.current];
        return P.length !== s.length ? s.map(() => 100 / s.length) : P;
      })));
    },
    [k, b, s.length, g]
  ), x = ae(
    null
  ), N = H(
    (m, D, P) => {
      const j = d.current;
      if (!j) return null;
      const T = j.getBoundingClientRect();
      let F;
      if (p) {
        if (T.width === 0) return null;
        F = (D - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        F = (P - T.top) / T.height * 100;
      }
      let V = 0;
      for (let Q = 0; Q < m; Q++) {
        const K = b[Q];
        K !== void 0 && (V += K);
      }
      return F - V;
    },
    [p, b]
  ), E = (m, D) => {
    D.preventDefault();
    const P = D.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(D.pointerId), x.current = { handleIndex: m, pointerId: D.pointerId };
  }, I = (m) => {
    if (!x.current || x.current.pointerId !== m.pointerId)
      return;
    m.preventDefault();
    const D = x.current.handleIndex, P = N(D, m.clientX, m.clientY);
    if (P == null) return;
    const j = u(), T = y(), F = j[D] ?? 0, V = T[D] ?? 100, Z = D + 1, Q = j[Z] ?? 0, K = T[Z] ?? 100, te = b[D] ?? 0, oe = b[Z] ?? 0, ee = te + oe;
    if (ee <= 0) return;
    let L = Ht(P, F, V), ie = ee - L;
    if (ie < Q) {
      if (ie = Q, L = ee - ie, L < F || L > V) return;
    } else if (ie > K && (ie = K, L = ee - ie, L < F || L > V))
      return;
    L = Ht(L, F, V), ie = ee - L, O(D, L) && w((Y) => {
      const de = [...Y];
      return de[D] = L, de[Z] = ie, de;
    });
  }, C = (m) => {
    !x.current || x.current.pointerId !== m.pointerId || (x.current = null);
  }, M = (m, D) => {
    const P = u(), j = y(), T = m, F = m + 1, V = b[T] ?? 0, Z = b[F] ?? 0, Q = V + Z;
    let K = 0;
    const te = !!s[T]?.collapsible, oe = !!s[F]?.collapsible;
    if (p ? D.key === "ArrowLeft" ? K = -5 : D.key === "ArrowRight" && (K = 5) : D.key === "ArrowUp" ? K = -5 : D.key === "ArrowDown" && (K = 5), D.key === "Home") {
      D.preventDefault();
      let ee = P[T] ?? 0, L = Q - ee;
      if (L = Ht(
        L,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - L, ee = Ht(ee, P[T] ?? 0, j[T] ?? 100), !O(T, ee)) return;
      w((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[F] = L, Y;
      });
      return;
    }
    if (D.key === "End") {
      D.preventDefault();
      let ee = j[T] ?? 100;
      ee = Math.min(ee, Q - (P[F] ?? 0));
      let L = Q - ee;
      if (L = Ht(
        L,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - L, ee = Ht(ee, P[T] ?? 0, j[T] ?? 100), !O(T, ee)) return;
      w((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[F] = L, Y;
      });
      return;
    }
    if ((D.key === "Enter" || D.key === " ") && (te || oe)) {
      D.preventDefault(), S(te ? T : F);
      return;
    }
    if (K !== 0) {
      D.preventDefault();
      let ee = V + K, L = Q - ee;
      const ie = P[T] ?? 0, Y = j[T] ?? 100, de = P[F] ?? 0, le = j[F] ?? 100;
      if (ee = Ht(ee, ie, Y), L = Q - ee, (L < de || L > le) && (L = Ht(L, de, le), ee = Q - L, ee = Ht(ee, ie, Y), L = Q - ee), !O(T, ee)) return;
      w((ye) => {
        const ke = [...ye];
        return ke[T] = ee, ke[F] = L, ke;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [
        wt.root,
        p ? wt.horizontal : wt.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: s.map((m, D) => {
        const P = !!k[D], j = P ? 0 : b[D] ?? 100 / s.length, T = P ? { display: "none" } : p ? {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = Cn(m.min, 0), V = Cn(m.max, 100), Z = D < s.length - 1, Q = !!s[D + 1]?.collapsible;
        return /* @__PURE__ */ $("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ $(
            "div",
            {
              role: "group",
              "aria-label": m.label ?? `Pane ${D + 1}`,
              className: wt.pane,
              style: T,
              "data-collapsed": P ? "true" : void 0,
              children: [
                P ? null : m.children,
                m.collapsible && !P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: wt.collapseBtn,
                    "aria-label": `Collapse pane ${D + 1}`,
                    "aria-expanded": !P,
                    onClick: () => S(D),
                    children: p ? "◀" : "▲"
                  }
                ) : null,
                m.collapsible && P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: wt.collapseBtn,
                    "aria-label": `Expand pane ${D + 1}`,
                    "aria-expanded": !P,
                    onClick: () => S(D),
                    children: p ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          P && m.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: wt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${D + 1}`,
                "aria-expanded": "false",
                onClick: () => S(D),
                children: p ? "▶" : "▼"
              }
            )
          ) : null,
          Z ? /* @__PURE__ */ $(
            "div",
            {
              role: "separator",
              "aria-orientation": a,
              "aria-valuemin": F,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${D + 1}`,
              tabIndex: P || k[D + 1] ? -1 : 0,
              className: [
                wt.handle,
                p ? wt.handleHorizontal : wt.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (K) => E(D, K),
              onPointerMove: I,
              onPointerUp: C,
              onKeyDown: (K) => M(D, K),
              children: [
                /* @__PURE__ */ n("span", { className: wt.handleGrip, "aria-hidden": "true" }),
                (m.collapsible || Q) && /* @__PURE__ */ n(
                  "span",
                  {
                    className: wt.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, D);
      })
    }
  );
}
const hy = "_root_exk72_1", py = "_list_exk72_5", my = "_vertical_exk72_14", gy = "_horizontal_exk72_20", xy = "_item_exk72_28", yy = "_link_exk72_32", by = "_active_exk72_57", pn = {
  root: hy,
  list: py,
  vertical: my,
  horizontal: gy,
  item: xy,
  link: yy,
  active: by
};
function jv({
  items: e,
  selector: t,
  Selector: s,
  orientation: o,
  Orientation: i,
  onClick: c,
  Click: h,
  ariaLabel: r = "Table of contents",
  className: l
}) {
  const a = t ?? s, p = o ?? i ?? "vertical", [d, v] = X(
    () => e[0]?.selector ?? null
  ), b = ae(d);
  b.current = d;
  const w = H(
    (k, _) => {
      if (v(k.selector), (c ?? h)?.({ text: k.text, selector: k.selector }), _) {
        try {
          _.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          _.scrollIntoView();
        }
        const u = _;
        u.getAttribute("tabindex") == null && u.tabIndex === -1 || u.tabIndex < 0 ? (u.getAttribute("tabindex"), u.setAttribute("tabindex", "-1"), u.focus({ preventScroll: !0 })) : u.focus({ preventScroll: !0 });
      }
    },
    [c, h]
  );
  return we(() => {
    if (e.length === 0) return;
    const _ = (() => {
      if (a) {
        const g = document.querySelector(a);
        if (g) return g;
      }
      return window;
    })();
    let f = null;
    const u = /* @__PURE__ */ new Map(), y = () => {
      let g = null, S = null;
      for (const N of e) {
        const E = document.querySelector(N.selector);
        if (!E) continue;
        u.set(N.selector, E);
        const I = E.getBoundingClientRect();
        let C = I.top;
        if (_ !== window) {
          const M = _.getBoundingClientRect();
          C = I.top - M.top;
        }
        C <= 80 ? (!S || C > S.el.getBoundingClientRect().top - (_ !== window ? _.getBoundingClientRect().top : 0)) && (S = { sel: N.selector, el: E }) : (!g || C < g.top) && (g = { sel: N.selector, top: C });
      }
      const x = S?.sel ?? g?.sel ?? e[0]?.selector ?? null;
      x && x !== b.current && v(x);
    }, O = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const g = _ === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: _,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      f = new IntersectionObserver((S) => {
        const x = S.filter((N) => N.isIntersecting).sort((N, E) => N.boundingClientRect.top - E.boundingClientRect.top);
        if (x[0]) {
          const N = x[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === N) {
              v(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && N.id === E.selector.slice(1)) {
              v(E.selector);
              break;
            }
          }
        } else
          y();
      }, g);
      for (const S of e) {
        const x = document.querySelector(S.selector);
        x && (f.observe(x), u.set(S.selector, x));
      }
    }
    return _ === window ? (window.addEventListener("scroll", O, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", O), f?.disconnect();
    }) : (_.addEventListener("scroll", O, {
      passive: !0
    }), y(), () => {
      _.removeEventListener("scroll", O), f?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [pn.root, pn[p], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: pn.list, children: e.map((k) => {
        const _ = k.selector === d;
        return /* @__PURE__ */ n("li", { className: pn.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: k.selector.startsWith("#") || k.selector.startsWith(".") ? k.selector : `#${k.selector}`,
            className: [pn.link, _ ? pn.active : null].filter(Boolean).join(" "),
            "aria-current": _ ? "location" : void 0,
            onClick: (f) => {
              f.preventDefault();
              const u = document.querySelector(k.selector);
              w(k, u);
            },
            children: k.text
          }
        ) }, `${k.text}-${k.selector}`);
      }) })
    }
  );
}
const vy = "_root_1i6qn_1", ky = "_viewport_1i6qn_17", wy = "_slide_1i6qn_24", $y = "_active_1i6qn_33", Ny = "_arrow_1i6qn_37", Oy = "_prev_1i6qn_71", Sy = "_next_1i6qn_75", zy = "_pauseBtn_1i6qn_79", Dy = "_indicators_1i6qn_110", My = "_indicator_1i6qn_110", Cy = "_indicatorActive_1i6qn_145", $t = {
  root: vy,
  viewport: ky,
  slide: wy,
  active: $y,
  arrow: Ny,
  prev: Oy,
  next: Sy,
  pauseBtn: zy,
  indicators: Dy,
  indicator: My,
  indicatorActive: Cy
};
function Av({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  auto: i,
  Auto: c,
  interval: h,
  Interval: r,
  pauseOnHover: l,
  PauseOnHover: a,
  showArrows: p,
  ShowArrows: d,
  showIndicators: v,
  ShowIndicators: b,
  onChange: w,
  Change: k,
  ariaLabel: _ = "Carousel",
  className: f
}) {
  const u = t ?? s, y = u !== void 0, [O, g] = X(() => Math.min(Math.max(0, u ?? o), Math.max(0, e.length - 1))), S = y ? u : O, x = e.length === 0 ? 0 : Math.min(Math.max(0, S), e.length - 1), N = i ?? c ?? !1, E = h ?? r ?? 3e3, I = l ?? a ?? !0, C = p ?? d ?? !0, M = v ?? b ?? !0, [m, D] = X(!1), [P, j] = X(!1), T = m || P, F = ae(null), V = Ye(), Z = H(
    (de) => {
      const le = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      y || g(le), (w ?? k)?.(le);
    },
    [y, w, k, e.length]
  ), Q = H(() => {
    Z(x - 1);
  }, [Z, x]), K = H(() => {
    Z(x + 1);
  }, [Z, x]), te = H(
    (de) => {
      Z(de);
    },
    [Z]
  );
  we(() => {
    if (!N || T || e.length <= 1) return;
    const de = setInterval(() => {
      Z(x + 1);
    }, E);
    return () => clearInterval(de);
  }, [N, T, E, x, Z, e.length]);
  const oe = (de) => {
    e.length !== 0 && (de.key === "ArrowLeft" ? (de.preventDefault(), Q()) : de.key === "ArrowRight" ? (de.preventDefault(), K()) : de.key === "Home" ? (de.preventDefault(), te(0)) : de.key === "End" && (de.preventDefault(), te(e.length - 1)));
  }, ee = () => {
    I && N && j(!0);
  }, L = () => {
    I && N && j(!1);
  }, ie = () => {
    I && N && j(!0);
  }, Y = () => {
    I && N && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ $(
    "div",
    {
      ref: F,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": _,
      tabIndex: 0,
      className: [$t.root, f].filter(Boolean).join(" "),
      onKeyDown: oe,
      onMouseEnter: ee,
      onMouseLeave: L,
      onFocusCapture: ie,
      onBlurCapture: Y,
      children: [
        /* @__PURE__ */ n("div", { id: V, className: $t.viewport, children: e.map((de, le) => {
          const ye = le === x;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${le + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [$t.slide, ye ? $t.active : null].filter(Boolean).join(" "),
              children: de
            },
            le
          );
        }) }),
        C && e.length > 1 ? /* @__PURE__ */ $(Ce, { children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [$t.arrow, $t.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": V,
              onClick: Q,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [$t.arrow, $t.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": V,
              onClick: K,
              children: "›"
            }
          )
        ] }) : null,
        N ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: $t.pauseBtn,
            "aria-label": m ? "Resume" : "Pause",
            "aria-pressed": m,
            onClick: () => D((de) => !de),
            children: m ? "▶" : "⏸"
          }
        ) : null,
        M && e.length > 1 ? /* @__PURE__ */ n(
          "div",
          {
            className: $t.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((de, le) => {
              const ye = le === x;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: [
                    $t.indicator,
                    ye ? $t.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${le + 1}`,
                  "aria-current": ye ? "true" : void 0,
                  "aria-controls": V,
                  onClick: () => te(le)
                },
                le
              );
            })
          }
        ) : null
      ]
    }
  );
}
const Ey = "_root_15u2v_1", Iy = "_group_15u2v_20", jy = "_itemWrapper_15u2v_30", Ay = "_treeitem_15u2v_34", Ty = "_disabled_15u2v_50", Ry = "_selected_15u2v_60", Ly = "_caret_15u2v_66", Py = "_caretIcon_15u2v_113", By = "_caretOpen_15u2v_120", Fy = "_caretPlaceholder_15u2v_124", qy = "_label_15u2v_130", Hy = "_loading_15u2v_137", Ky = "_loadingRow_15u2v_143", Uy = "_empty_15u2v_149", Wy = "_checkbox_15u2v_155", st = {
  root: Ey,
  group: Iy,
  itemWrapper: jy,
  treeitem: Ay,
  disabled: Ty,
  selected: Ry,
  caret: Ly,
  caretIcon: Py,
  caretOpen: By,
  caretPlaceholder: Fy,
  label: qy,
  loading: Hy,
  loadingRow: Ky,
  empty: Uy,
  checkbox: Wy
};
function Vy({
  indeterminate: e,
  ...t
}) {
  const s = ae(null);
  return we(() => {
    s.current && (s.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: s, type: "checkbox", ...t });
}
function Tv({
  data: e,
  Data: t,
  children: s,
  Children: o,
  textProperty: i,
  TextProperty: c,
  keyProperty: h,
  KeyProperty: r,
  selectionMode: l,
  SelectionMode: a,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: v,
  SelectedItems: b,
  defaultSelectedItem: w,
  defaultSelectedItems: k,
  onChange: _,
  Change: f,
  onExpand: u,
  Expand: y,
  onCollapse: O,
  Collapse: g,
  loadChildData: S,
  LoadChildData: x,
  template: N,
  Template: E,
  itemTemplate: I,
  ItemTemplate: C,
  ariaLabel: M,
  AriaLabel: m,
  allowCheckBoxes: D = !1,
  checkedKeys: P,
  defaultCheckedKeys: j,
  onCheckedChange: T,
  allowCheckChildren: F = !0,
  className: V
}) {
  const Z = e ?? t ?? [], Q = s ?? o, K = i ?? c ?? "text", te = h ?? r ?? "id", oe = l ?? a ?? "single", ee = M ?? m ?? "Tree", L = S ?? x, ie = N ?? E ?? I ?? C, Y = H(
    (B) => {
      const G = B[te];
      return G != null ? String(G) : String(B.id ?? "");
    },
    [te]
  ), de = H(
    (B) => {
      const G = B[K];
      if (G != null) return String(G);
      const re = B.text;
      return re != null ? String(re) : "";
    },
    [K]
  ), le = H(
    (B) => {
      if (Q) {
        const re = Q(B);
        if (re !== void 0) return re;
      }
      const G = B.children;
      if (Array.isArray(G)) return G;
    },
    [Q]
  ), ye = H(
    (B) => {
      const G = /* @__PURE__ */ new Set(), re = (he) => {
        for (const fe of he) {
          const be = Y(fe);
          fe.expanded && G.add(be);
          const Te = le(fe);
          Te && Te.length > 0 && re(Te);
        }
      };
      return re(B), G;
    },
    [Y, le]
  ), [ke, Be] = X(
    () => ye(Z)
  ), [ve, We] = X(
    () => /* @__PURE__ */ new Map()
  ), [xe, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = p ?? d, Le = v ?? b, et = oe === "multiple" ? Le !== void 0 : Ve !== void 0, W = H(() => {
    if (oe === "multiple") {
      if (k && k.length > 0)
        return new Set(k.map((re) => Y(re)));
      const B = /* @__PURE__ */ new Set(), G = (re) => {
        for (const he of re) {
          he.selected && B.add(Y(he));
          const fe = le(he);
          fe && G(fe);
        }
      };
      return G(Z), B;
    } else {
      if (w) return /* @__PURE__ */ new Set([Y(w)]);
      let B = null;
      const G = (re) => {
        for (const he of re) {
          if (he.selected)
            return B = Y(he), !0;
          const fe = le(he);
          if (fe && G(fe)) return !0;
        }
        return !1;
      };
      return G(Z), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [
    oe,
    w,
    k,
    Y,
    le,
    Z
  ]), [z, q] = X(
    () => W()
  ), ne = $e(() => {
    if (oe === "multiple") {
      if (Le !== void 0) {
        const B = Le;
        return B ? new Set(B.map((G) => Y(G))) : /* @__PURE__ */ new Set();
      }
      return z;
    } else {
      if (Ve !== void 0) {
        const B = Ve;
        return B ? /* @__PURE__ */ new Set([Y(B)]) : /* @__PURE__ */ new Set();
      }
      return z;
    }
  }, [
    oe,
    Le,
    Ve,
    z,
    Y
  ]), _e = H(
    (B) => {
      let G;
      const re = (he) => {
        for (const fe of he) {
          if (Y(fe) === B)
            return G = fe, !0;
          const Te = ve.get(Y(fe)) ?? le(fe);
          if (Te && re(Te)) return !0;
        }
        return !1;
      };
      if (re(Z), !G) {
        for (const he of ve.values())
          if (re(he)) break;
      }
      return G;
    },
    [Z, ve, Y, le]
  ), se = H(() => {
    const B = /* @__PURE__ */ new Map(), G = (re) => {
      for (const he of re) {
        const fe = Y(he);
        B.set(fe, he);
        const Te = ve.get(fe) ?? le(he);
        Te && G(Te);
      }
    };
    return G(Z), B;
  }, [Z, ve, Y, le]), me = H(
    (B) => {
      const G = Y(B);
      if (!B.disabled)
        if (oe === "multiple") {
          const he = new Set(ne);
          he.has(G) ? he.delete(G) : he.add(G), et || q(he);
          const fe = _ ?? f;
          if (fe) {
            const be = se(), Te = [];
            for (const A of he) {
              const R = be.get(A) ?? _e(A);
              R && Te.push(R);
            }
            fe({ item: B, selectedItems: Te });
          }
        } else if (!ne.has(G) || ne.size !== 1 || !ne.has(G)) {
          et || q(/* @__PURE__ */ new Set([G]));
          const fe = _ ?? f;
          fe && fe({ item: B, selectedItem: B });
        } else {
          const fe = _ ?? f;
          fe && fe({ item: B, selectedItem: B });
        }
    },
    [
      Y,
      oe,
      ne,
      et,
      _,
      f,
      se,
      _e
    ]
  ), Ne = H(
    async (B) => {
      const G = Y(B);
      if (!!B.disabled) return;
      const he = ke.has(G), fe = u ?? y, be = O ?? g, Te = le(B), R = ve.get(G) ?? Te, pe = !(R !== void 0 && R.length > 0) && L != null;
      if (he) {
        Be((Ie) => {
          const je = new Set(Ie);
          return je.delete(G), je;
        }), be?.({ item: B });
        return;
      }
      if (pe) {
        if (xe.has(G)) return;
        Ze((Ie) => {
          const je = new Set(Ie);
          return je.add(G), je;
        });
        try {
          const je = await L(B);
          We((Me) => {
            const lt = new Map(Me);
            return lt.set(G, je), lt;
          }), Be((Me) => {
            const lt = new Set(Me);
            return lt.add(G), lt;
          }), fe?.({ item: B });
        } catch {
        } finally {
          Ze((Ie) => {
            const je = new Set(Ie);
            return je.delete(G), je;
          });
        }
        return;
      }
      Be((Ie) => {
        const je = new Set(Ie);
        return je.add(G), je;
      }), fe?.({ item: B });
    },
    [
      Y,
      ke,
      le,
      ve,
      L,
      xe,
      u,
      y,
      O,
      g
    ]
  ), Fe = $e(() => {
    const B = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), he = (fe, be) => {
      for (const Te of fe) {
        const A = Y(Te);
        B.has(A) || B.set(A, []), G.set(A, be), Te.disabled && re.add(A);
        const ce = ve.get(A) ?? le(Te);
        ce && ce.length > 0 && (B.set(
          A,
          ce.map((pe) => Y(pe))
        ), he(ce, A));
      }
    };
    return he(Z, null), { childrenOf: B, parentOf: G, disabledKeys: re };
  }, [Z, ve, Y, le]), Je = H(
    (B) => {
      const G = [], re = [...Fe.childrenOf.get(B) ?? []];
      for (; re.length > 0; ) {
        const he = re.pop();
        G.push(he), re.push(...Fe.childrenOf.get(he) ?? []);
      }
      return G;
    },
    [Fe]
  ), [dt, bt] = X(
    () => new Set(j ?? [])
  ), J = P !== void 0 ? new Set(P) : dt, Se = H(
    (B) => {
      const G = Fe.disabledKeys;
      return Je(B).filter((re) => !G.has(re));
    },
    [Je, Fe]
  ), nt = H(
    (B) => {
      if (J.has(B)) return !0;
      if (!D || !F) return !1;
      const G = Se(B);
      return G.length > 0 && G.every((re) => J.has(re));
    },
    [J, D, F, Se]
  ), Wt = H(
    (B) => {
      if (!D || !F || J.has(B))
        return !1;
      const G = Se(B);
      if (G.length === 0) return !1;
      const re = G.filter((he) => J.has(he)).length;
      return re > 0 && re < G.length;
    },
    [J, D, F, Se]
  ), Nt = H(
    (B) => {
      if (!D || B.disabled) return;
      const G = Y(B), re = new Set(J);
      if (re.has(G) || nt(G)) {
        if (re.delete(G), F)
          for (const he of Se(G)) re.delete(he);
      } else if (re.add(G), F)
        for (const he of Se(G)) re.add(he);
      P === void 0 && bt(re), T?.([...re]);
    },
    [
      D,
      F,
      P,
      J,
      Se,
      Y,
      nt,
      T
    ]
  ), ze = $e(() => {
    const B = [], G = (re, he, fe) => {
      re.forEach((be, Te) => {
        const A = Y(be), R = de(be), ce = ve.get(A) ?? le(be);
        let pe;
        ve.has(A) ? pe = ve.get(A).length > 0 : ce !== void 0 ? pe = ce.length > 0 : L ? pe = !0 : pe = !1;
        const Ie = ke.has(A), je = !!be.disabled, Me = re.length, lt = Te + 1;
        if (B.push({
          item: be,
          key: A,
          text: R,
          level: he,
          posInSet: lt,
          setSize: Me,
          hasChildren: pe,
          expanded: Ie,
          parentKey: fe,
          disabled: je
        }), pe && Ie) {
          const St = ve.get(A) ?? ce;
          St && St.length > 0 && G(St, he + 1, A);
        }
      });
    };
    return G(Z, 1, null), B;
  }, [
    Z,
    Y,
    de,
    le,
    ve,
    ke,
    L,
    xe
  ]), [Xe, vt] = X(
    () => ze[0]?.key ?? null
  ), Rt = ae(""), Jt = ae(null), U = ae(null);
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
      const B = U.current?.querySelector(
        `[data-key="${CSS.escape(Xe)}"]`
      );
      let G = null;
      B || (G = U.current?.querySelector(
        `[data-key="${Xe}"]`
      ) ?? null);
      const re = B ?? G;
      re && document.activeElement !== re && U.current?.contains(document.activeElement) && re.focus();
    }
  }, [Xe]);
  const ue = H((B) => {
    vt(B), requestAnimationFrame(() => {
      const G = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
      let re = U.current?.querySelector(
        `[data-key="${G}"]`
      );
      re || (re = U.current?.querySelector(`[data-key="${B}"]`) ?? null), re?.focus();
    });
  }, []), Pe = H(
    (B) => ze.find((re) => re.key === B)?.parentKey ?? null,
    [ze]
  ), He = H(
    (B) => {
      if (ze.length === 0) return;
      const G = Xe ? ze.findIndex((fe) => fe.key === Xe) : -1, re = G >= 0 ? ze[G] : void 0;
      let he = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), G === -1)
          he = ze[0]?.key ?? null;
        else {
          const fe = (G + 1) % ze.length, be = ze[fe];
          be && (he = be.key);
        }
        he && ue(he);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), G === -1) {
          const fe = ze[ze.length - 1];
          fe && (he = fe.key);
        } else {
          const fe = (G - 1 + ze.length) % ze.length, be = ze[fe];
          be && (he = be.key);
        }
        he && ue(he);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && !re.expanded)
          Ne(re.item);
        else if (re.hasChildren && re.expanded) {
          const fe = G + 1, be = ze[fe];
          be && be.parentKey === re.key && ue(be.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && re.expanded)
          Ne(re.item);
        else {
          const fe = Pe(re.key);
          fe && ue(fe);
        }
        return;
      }
      if (B.key === "Home") {
        B.preventDefault();
        const fe = ze[0];
        fe && ue(fe.key);
        return;
      }
      if (B.key === "End") {
        B.preventDefault();
        const fe = ze[ze.length - 1];
        fe && ue(fe.key);
        return;
      }
      if (B.key === "Enter" || B.key === " ") {
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !re)) return;
        if (B.key === " " && D) {
          const fe = _e(re.key);
          fe && Nt(fe);
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
        const be = G >= 0 ? G + 1 : 0, R = [...ze, ...ze].slice(be, be + ze.length).find((ce) => ce.text.toLowerCase().startsWith(fe));
        R && ue(R.key);
        return;
      }
    },
    [
      ze,
      Xe,
      ue,
      Ne,
      me,
      Pe,
      D,
      Nt
    ]
  ), Lt = H(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && vt(B.key);
    }
  }, [Xe, ze]), Ot = (B, G, re) => /* @__PURE__ */ n("ul", { role: "group", className: st.group, children: B.map((he, fe) => {
    const be = Y(he), Te = de(he), A = ve.get(be) ?? le(he);
    let R;
    ve.has(be) ? R = ve.get(be).length > 0 : A !== void 0 ? R = A.length > 0 : L ? R = !0 : R = !1;
    const ce = ke.has(be), pe = ne.has(be), Ie = !!he.disabled, je = xe.has(be), Me = Xe === be, lt = B.length, St = fe + 1, er = ie ? ie(he) : Te, _s = D ? {
      checked: nt(be),
      indeterminate: Wt(be)
    } : null;
    return /* @__PURE__ */ $("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ $(
        "div",
        {
          role: "treeitem",
          "data-key": be,
          tabIndex: Me ? 0 : -1,
          "aria-expanded": R ? ce : void 0,
          "aria-selected": pe,
          "aria-level": G,
          "aria-setsize": lt,
          "aria-posinset": St,
          "aria-disabled": Ie || void 0,
          "aria-busy": je || void 0,
          className: [
            st.treeitem,
            pe ? st.selected : null,
            Ie ? st.disabled : null,
            Me ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ue(be), Ie || me(he);
          },
          onFocus: () => vt(be),
          children: [
            D ? /* @__PURE__ */ n(
              Vy,
              {
                className: st.checkbox,
                checked: _s?.checked ?? !1,
                indeterminate: _s?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${Te}`,
                onClick: (Rn) => Rn.stopPropagation(),
                onChange: () => Nt(he)
              }
            ) : null,
            R ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: st.caret,
                "aria-label": `${ce ? "Collapse" : "Expand"} ${Te}`,
                "aria-expanded": ce,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Rn) => {
                  Rn.stopPropagation(), ue(be), Ne(he);
                },
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      ce ? st.caretOpen : null
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
      R && ce ? je ? /* @__PURE__ */ n("div", { className: st.loadingRow, "aria-busy": "true", children: "Loading…" }) : A && A.length > 0 ? Ot(A, G + 1) : ve.has(be) && ve.get(be).length > 0 ? Ot(
        ve.get(be),
        G + 1
      ) : (A && A.length === 0, null) : null
    ] }, be);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: U,
      role: "tree",
      "aria-label": ee,
      "aria-multiselectable": oe === "multiple" || void 0,
      tabIndex: 0,
      className: [st.root, V].filter(Boolean).join(" "),
      onKeyDown: He,
      onFocus: Lt,
      children: Z.length === 0 ? /* @__PURE__ */ n("div", { className: st.empty, children: "No items" }) : Ot(Z, 1)
    }
  );
}
const Xy = "_root_12sxo_1", Gy = "_panel_12sxo_8", Yy = "_header_12sxo_19", Zy = "_listbox_12sxo_28", Jy = "_option_12sxo_42", Qy = "_disabled_12sxo_57", e2 = "_active_12sxo_66", t2 = "_selected_12sxo_70", n2 = "_empty_12sxo_86", s2 = "_controls_12sxo_93", r2 = "_reorder_12sxo_102", o2 = "_btn_12sxo_110", Re = {
  root: Xy,
  panel: Gy,
  header: Yy,
  listbox: Zy,
  option: Jy,
  disabled: Qy,
  active: e2,
  selected: t2,
  empty: n2,
  controls: s2,
  reorder: r2,
  btn: o2
};
function rt(e, t) {
  const s = e[t];
  return s != null ? String(s) : String(e.id ?? "");
}
function Wn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Rv({
  source: e,
  Source: t,
  target: s,
  Target: o,
  value: i,
  Value: c,
  targetValue: h,
  TargetValue: r,
  data: l,
  Data: a,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: v,
  TargetChange: b,
  keyProperty: w,
  KeyProperty: k,
  onMove: _,
  Move: f,
  ariaLabel: u,
  AriaLabel: y,
  className: O
}) {
  const g = w ?? k ?? "id", S = u ?? y ?? "PickList", x = e ?? t ?? i ?? c ?? l ?? a ?? [], N = s ?? o ?? h ?? r ?? [], [E, I] = X(() => [
    ...x
  ]), [C, M] = X(() => [
    ...N
  ]);
  we(() => {
    const z = e ?? t ?? i ?? c ?? l ?? a;
    z !== void 0 && I([...z]);
  }, [e, t, i, c, l, a]), we(() => {
    const z = s ?? o ?? h ?? r;
    z !== void 0 && M([...z]);
  }, [s, o, h, r]);
  const [m, D] = X(
    () => /* @__PURE__ */ new Set()
  ), [P, j] = X(
    () => /* @__PURE__ */ new Set()
  ), [T, F] = X(() => {
    const z = x.findIndex((q) => !q.disabled);
    return z >= 0 ? z : 0;
  }), [V, Z] = X(() => {
    const z = N.findIndex((q) => !q.disabled);
    return z >= 0 ? z : 0;
  }), Q = $e(
    () => E.map((z, q) => z.disabled ? -1 : q).filter((z) => z >= 0),
    [E]
  ), K = $e(
    () => C.map((z, q) => z.disabled ? -1 : q).filter((z) => z >= 0),
    [C]
  );
  we(() => {
    if (T >= E.length) {
      const z = Q[Q.length - 1];
      F(z ?? 0);
    } else if (E.length > 0 && Q.length > 0 && !Q.includes(T)) {
      const z = Q[0];
      z !== void 0 && F(z);
    }
  }, [T, E.length, Q]), we(() => {
    if (V >= C.length) {
      const z = K[K.length - 1];
      Z(z ?? 0);
    } else if (C.length > 0 && K.length > 0 && !K.includes(V)) {
      const z = K[0];
      z !== void 0 && Z(z);
    }
  }, [V, C.length, K]), we(() => {
    D((z) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of z)
        E.some(
          (se) => rt(se, g) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [E, g]), we(() => {
    j((z) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of z)
        C.some(
          (se) => rt(se, g) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [C, g]);
  const te = H(
    (z) => {
      (p ?? d)?.(z);
    },
    [p, d]
  ), oe = H(
    (z) => {
      (v ?? b)?.(z);
    },
    [v, b]
  ), ee = H(
    (z) => {
      (_ ?? f)?.(z);
    },
    [_, f]
  ), L = H(
    (z) => {
      const q = E[z];
      if (!q || q.disabled) return;
      const ne = rt(q, g);
      D((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), F(z);
    },
    [E, g]
  ), ie = H(
    (z) => {
      const q = C[z];
      if (!q || q.disabled) return;
      const ne = rt(q, g);
      j((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), Z(z);
    },
    [C, g]
  ), Y = H(() => {
    const z = [], q = [];
    for (const me of E) {
      const Ne = rt(me, g);
      m.has(Ne) && !me.disabled ? z.push(me) : q.push(me);
    }
    if (z.length === 0) return;
    const ne = q, _e = [...C, ...z];
    I(ne), M(_e), D(/* @__PURE__ */ new Set());
    const se = new Set(z.map((me) => rt(me, g)));
    j(se), te(ne), oe(_e), ee({
      source: ne,
      target: _e,
      moved: z,
      direction: "toTarget"
    });
  }, [
    E,
    C,
    m,
    g,
    te,
    oe,
    ee
  ]), de = H(() => {
    const z = [], q = [];
    for (const me of C) {
      const Ne = rt(me, g);
      P.has(Ne) && !me.disabled ? z.push(me) : q.push(me);
    }
    if (z.length === 0) return;
    const ne = q, _e = [...E, ...z];
    M(ne), I(_e), j(/* @__PURE__ */ new Set());
    const se = new Set(z.map((me) => rt(me, g)));
    D(se), te(_e), oe(ne), ee({
      source: _e,
      target: ne,
      moved: z,
      direction: "toSource"
    });
  }, [
    E,
    C,
    P,
    g,
    te,
    oe,
    ee
  ]), le = H(() => {
    const z = E.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const q = E.filter((_e) => !!_e.disabled), ne = [...C, ...z];
    I(q), M(ne), D(/* @__PURE__ */ new Set()), te(q), oe(ne), ee({
      source: q,
      target: ne,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    E,
    C,
    g,
    te,
    oe,
    ee
  ]), ye = H(() => {
    const z = C.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const q = C.filter((_e) => !!_e.disabled), ne = [...E, ...z];
    M(q), I(ne), j(/* @__PURE__ */ new Set()), te(ne), oe(q), ee({
      source: ne,
      target: q,
      moved: z,
      direction: "allToSource"
    });
  }, [E, C, te, oe, ee]), ke = H(() => {
    if (P.size === 0) return;
    const z = [...C], q = P, ne = [];
    for (let se = 1; se < z.length; se++) {
      const me = z[se], Ne = z[se - 1];
      if (!me || !Ne) continue;
      const Fe = rt(me, g), Je = rt(Ne, g);
      q.has(Fe) && !q.has(Je) && !me.disabled && !Ne.disabled && (z[se - 1] = me, z[se] = Ne, ne.push(me));
    }
    if (ne.length === 0) return;
    M(z), oe(z), ee({ source: E, target: z, moved: ne, direction: "up" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = z.findIndex(
        (me) => rt(me, g) === _e
      );
      se >= 0 && Z(se);
    }
  }, [
    C,
    P,
    g,
    E,
    oe,
    ee
  ]), Be = H(() => {
    if (P.size === 0) return;
    const z = [...C], q = P, ne = [];
    for (let se = z.length - 2; se >= 0; se--) {
      const me = z[se], Ne = z[se + 1];
      if (!me || !Ne) continue;
      const Fe = rt(me, g), Je = rt(Ne, g);
      q.has(Fe) && !q.has(Je) && !me.disabled && !Ne.disabled && (z[se] = Ne, z[se + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    M(z), oe(z), ee({ source: E, target: z, moved: ne, direction: "down" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = z.findIndex(
        (me) => rt(me, g) === _e
      );
      se >= 0 && Z(se);
    }
  }, [
    C,
    P,
    g,
    E,
    oe,
    ee
  ]), ve = m.size > 0, We = P.size > 0, xe = ae(""), Ze = ae(
    null
  ), Ve = ae(""), Le = ae(
    null
  ), tt = H(
    (z) => {
      if (E.length === 0) return;
      const q = Q;
      if (q.length === 0) return;
      const ne = q.includes(T) ? T : q[0] ?? 0;
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
        z.preventDefault(), L(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const se = (xe.current + z.key).toLowerCase();
        xe.current = se, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          xe.current = "";
        }, 500);
        const me = [...q, ...q], Ne = q.indexOf(ne) + 1, Fe = me.slice(Ne).find(
          (Je) => Wn(E[Je]).toLowerCase().startsWith(se)
        );
        Fe != null && F(Fe);
        return;
      }
      _e >= 0 && F(_e);
    },
    [E, Q, T, L]
  ), Qe = H(
    (z) => {
      if (C.length === 0) return;
      const q = K;
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
        z.preventDefault(), ie(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const se = (Ve.current + z.key).toLowerCase();
        Ve.current = se, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...q, ...q], Ne = q.indexOf(ne) + 1, Fe = me.slice(Ne).find(
          (Je) => Wn(C[Je]).toLowerCase().startsWith(se)
        );
        Fe != null && Z(Fe);
        return;
      }
      _e >= 0 && Z(_e);
    },
    [C, K, V, ie]
  ), et = ae(null), W = ae(null);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Re.root, O].filter(Boolean).join(" "),
      "aria-label": S,
      children: [
        /* @__PURE__ */ $("div", { className: Re.panel, children: [
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
              children: E.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : E.map((z, q) => {
                const ne = rt(z, g), _e = m.has(ne), se = q === T, me = !!z.disabled;
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
                    onClick: () => L(q),
                    children: Wn(z)
                  },
                  ne
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ $("div", { className: Re.controls, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Re.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !ve || void 0,
              disabled: !ve,
              onClick: Y,
              children: "›"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Re.btn,
              "aria-label": "Move all to target",
              "aria-disabled": E.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: E.filter((z) => !z.disabled).length === 0,
              onClick: le,
              children: "»"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Re.btn,
              "aria-label": "Move all",
              "aria-disabled": E.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: E.filter((z) => !z.disabled).length === 0,
              onClick: le,
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
              onClick: de,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Re.btn,
              "aria-label": "Move all to source",
              "aria-disabled": C.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: C.filter((z) => !z.disabled).length === 0,
              onClick: ye,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ $("div", { className: Re.panel, children: [
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
              children: C.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : C.map((z, q) => {
                const ne = rt(z, g), _e = P.has(ne), se = q === V, me = !!z.disabled;
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
                    onClick: () => ie(q),
                    children: Wn(z)
                  },
                  ne
                );
              })
            }
          ),
          /* @__PURE__ */ $("div", { className: Re.reorder, children: [
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
const l2 = "_root_drtn7_1", a2 = "_header_drtn7_8", i2 = "_title_drtn7_15", c2 = "_navBtn_drtn7_20", d2 = "_resources_drtn7_39", u2 = "_resource_drtn7_39", _2 = "_grid_drtn7_50", f2 = "_timeCol_drtn7_55", h2 = "_timeCell_drtn7_61", p2 = "_dayCol_drtn7_66", m2 = "_dayHeader_drtn7_73", g2 = "_slot_drtn7_81", x2 = "_event_drtn7_91", ft = {
  root: l2,
  header: a2,
  title: i2,
  navBtn: c2,
  resources: d2,
  resource: u2,
  grid: _2,
  timeCol: f2,
  timeCell: h2,
  dayCol: p2,
  dayHeader: m2,
  slot: g2,
  event: x2
};
function Ls(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Lv({
  data: e,
  view: t = "week",
  date: s,
  onDateChange: o,
  resources: i,
  onEventClick: c,
  onSlotClick: h,
  ariaLabel: r = "Scheduler",
  className: l
}) {
  const [a, p] = X(
    s ?? /* @__PURE__ */ new Date()
  ), d = s ?? a, v = (k) => {
    s || p(k), o?.(k);
  }, b = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (k, _) => {
    const f = new Date(d);
    return f.setDate(d.getDate() - d.getDay() + _), f;
  }) : Array.from({ length: 30 }, (k, _) => {
    const f = new Date(d);
    return f.setDate(1 + _), f;
  }), w = Array.from({ length: 12 }, (k, _) => 8 + _);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [ft.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ $("div", { className: ft.header, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const k = new Date(d);
                k.setDate(k.getDate() - 7), v(k);
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
                const k = new Date(d);
                k.setDate(k.getDate() + 7), v(k);
              },
              children: "›"
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: ft.resources, children: i.map((k) => /* @__PURE__ */ n(
          "div",
          {
            className: ft.resource,
            role: "presentation",
            "aria-label": k.name,
            children: k.name
          },
          k.id
        )) }),
        /* @__PURE__ */ $("div", { className: ft.grid, role: "presentation", children: [
          /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: w.map((k) => /* @__PURE__ */ $("div", { className: ft.timeCell, children: [
            k,
            ":00"
          ] }, k)) }),
          b.map((k) => /* @__PURE__ */ $(
            "div",
            {
              className: ft.dayCol,
              role: "presentation",
              title: k.toLocaleDateString(),
              onClick: () => h?.({ date: k }),
              tabIndex: 0,
              "aria-label": k.toLocaleDateString(),
              children: [
                /* @__PURE__ */ n("div", { className: ft.dayHeader, children: k.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                w.map((_) => /* @__PURE__ */ n(
                  "div",
                  {
                    className: ft.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const f = new Date(k);
                      f.setHours(_), h?.({ date: f });
                    }
                  },
                  _
                )),
                e.filter((_) => _.start.toDateString() === k.toDateString()).map((_) => /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: ft.event,
                    "aria-label": `${_.title} ${Ls(_.start)} - ${Ls(_.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: _ }),
                    children: _.title
                  },
                  _.id
                ))
              ]
            },
            k.toISOString()
          ))
        ] })
      ]
    }
  );
}
const y2 = "_root_1n0oq_1", b2 = "_header_1n0oq_8", v2 = "_headerCell_1n0oq_15", k2 = "_timeline_1n0oq_21", w2 = "_row_1n0oq_26", $2 = "_taskName_1n0oq_32", N2 = "_timelineCell_1n0oq_37", O2 = "_bar_1n0oq_43", S2 = "_progress_1n0oq_56", z2 = "_dep_1n0oq_61", Tt = {
  root: y2,
  header: b2,
  headerCell: v2,
  timeline: k2,
  row: w2,
  taskName: $2,
  timelineCell: N2,
  bar: O2,
  progress: S2,
  dep: z2
};
function Pv({
  tasks: e,
  view: t = "week",
  onTaskClick: s,
  ariaLabel: o = "Gantt",
  className: i
}) {
  const [c, h] = X(null);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Tt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": o,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ $("div", { className: Tt.header, role: "row", children: [
          /* @__PURE__ */ n("div", { className: Tt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ $("div", { className: Tt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ $(
          "div",
          {
            className: Tt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ n("div", { className: Tt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ $("div", { className: Tt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: Tt.bar,
                    role: "button",
                    "aria-label": `${r.name} ${r.start.toLocaleDateString()} - ${r.end.toLocaleDateString()}${r.progress !== void 0 ? `, ${r.progress}% complete` : ""}`,
                    "aria-pressed": c === r.id,
                    tabIndex: 0,
                    onClick: () => {
                      h(r.id), s?.({ task: r });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), h(r.id), s?.({ task: r }));
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
                r.dependencies?.map((l) => /* @__PURE__ */ n("svg", { className: Tt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, l))
              ] })
            ]
          },
          r.id
        ))
      ]
    }
  );
}
const D2 = "_root_1p46p_1", M2 = "_fields_1p46p_6", C2 = "_chip_1p46p_13", E2 = "_table_1p46p_35", I2 = "_totalRow_1p46p_55", j2 = "_total_1p46p_55", mn = {
  root: D2,
  fields: M2,
  chip: C2,
  table: E2,
  totalRow: I2,
  total: j2
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
function Bv({
  data: e,
  rowFields: t = [],
  columnFields: s = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: h
}) {
  const r = t, l = s, a = o, p = (_, f, u) => {
    const y = _ === "row" ? r.filter((S) => S.property !== f) : r, O = _ === "col" ? l.filter((S) => S.property !== f) : l, g = _ === "agg" ? a.filter((S) => !(S.property === f && S.aggregate === u)) : a;
    i?.({
      rowFields: y,
      columnFields: O,
      aggregateFields: g
    });
  }, d = (_, f) => f.map((u) => String(_[u.property])).join(""), v = [
    ...new Set(r.length ? e.map((_) => d(_, r)) : [""])
  ].sort(), b = [
    ...new Set(l.length ? e.map((_) => d(_, l)) : [""])
  ].sort(), w = (_, f, u) => {
    const y = e.filter(
      (g) => d(g, r) === _ && d(g, l) === f
    ), O = y.map((g) => Number(g[u.property])).filter((g) => !Number.isNaN(g));
    return !O.length && u.aggregate !== "Count" ? 0 : Vn[u.aggregate](
      u.aggregate === "Count" ? y.map(() => 1) : O
    );
  }, k = (_, f, u, y) => /* @__PURE__ */ $(
    "button",
    {
      type: "button",
      className: mn.chip,
      "aria-label": `Remove ${_} field ${u}`,
      onClick: () => p(_, f, y),
      children: [
        u,
        y ? ` (${y})` : ""
      ]
    },
    `${_}-${u}-${y ?? ""}`
  );
  return /* @__PURE__ */ $("div", { className: [mn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $("div", { className: mn.fields, children: [
      r.map((_) => k("row", _.property, _.title ?? _.property)),
      l.map((_) => k("col", _.property, _.title ?? _.property)),
      a.map(
        (_) => k("agg", _.property, _.title ?? _.property, _.aggregate)
      )
    ] }),
    /* @__PURE__ */ $("table", { className: mn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ $("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: r.map((_) => _.title ?? _.property).join(" / ") || "Total" }),
        b.map((_) => /* @__PURE__ */ n("th", { scope: "col", children: _ || "—" }, _)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ $("tbody", { children: [
        v.map((_) => /* @__PURE__ */ $("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: _ || "—" }),
          b.map((f) => /* @__PURE__ */ n(
            "td",
            {
              title: En(
                w(
                  _,
                  f,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? En(w(_, f, a[0])) : ""
            },
            f
          )),
          /* @__PURE__ */ n("td", { className: mn.total, children: a.length ? En(
            Vn[a[0].aggregate](
              b.flatMap(
                (f) => e.filter(
                  (u) => d(u, r) === _ && d(u, l) === f
                ).map((u) => Number(u[a[0].property]))
              ).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] }, _)),
        /* @__PURE__ */ $("tr", { className: mn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((_) => /* @__PURE__ */ n("td", { children: a.length ? En(
            Vn[a[0].aggregate](
              e.filter((f) => d(f, l) === _).map((f) => Number(f[a[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" }, _)),
          /* @__PURE__ */ n("td", { children: a.length ? En(
            Vn[a[0].aggregate](
              e.map((_) => Number(_[a[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const A2 = "_root_13gvl_1", T2 = "_reverse_13gvl_10", R2 = "_item_13gvl_14", L2 = "_marker_13gvl_35", P2 = "_body_13gvl_46", B2 = "_label_13gvl_50", F2 = "_content_13gvl_56", on = {
  root: A2,
  reverse: T2,
  item: R2,
  marker: L2,
  body: P2,
  label: B2,
  content: F2
};
function Fv({
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
      children: i.map((c, h) => /* @__PURE__ */ $("li", { className: on.item, children: [
        /* @__PURE__ */ n("span", { className: on.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ $("div", { className: on.body, children: [
          /* @__PURE__ */ n("div", { className: on.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: on.content, children: c.content })
        ] })
      ] }, h))
    }
  );
}
const q2 = "_root_4ls7q_1", H2 = "_header_4ls7q_13", K2 = "_headCell_4ls7q_22", U2 = "_row_4ls7q_32", W2 = "_cell_4ls7q_37", In = {
  root: q2,
  header: H2,
  headCell: K2,
  row: U2,
  cell: W2
};
function qv({
  count: e,
  rowHeight: t = 40,
  height: s = 320,
  loadData: o,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: h
}) {
  const [r, l] = X(
    /* @__PURE__ */ new Map()
  ), [a, p] = X(0), d = ae(/* @__PURE__ */ new Set()), v = Math.ceil(s / t), b = Math.max(0, Math.floor(a / t) - 3), w = Math.min(e, b + v + 6), k = H(
    (f, u) => {
      let y = !1;
      for (let O = f; O < u; O++)
        !r.has(O) && !d.current.has(O) && (y = !0);
      if (y) {
        for (let O = f; O < u; O++) d.current.add(O);
        o({ skip: f, top: u }).then((O) => {
          l((g) => {
            const S = new Map(g);
            return O.forEach((x, N) => S.set(f + N, x)), S;
          });
          for (let g = f; g < u; g++) d.current.delete(g);
        });
      }
    },
    [r, o]
  );
  we(() => {
    k(b, w);
  }, [b, w]);
  const _ = [];
  for (let f = b; f < w; f++) {
    const u = r.get(f) ?? {};
    _.push(
      /* @__PURE__ */ n(
        "div",
        {
          className: In.row,
          role: "row",
          style: { height: t },
          children: i.map((y) => /* @__PURE__ */ n(
            "div",
            {
              role: "gridcell",
              className: In.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(u[y.property] ?? "")
            },
            y.property
          ))
        },
        f
      )
    );
  }
  return /* @__PURE__ */ $(
    "div",
    {
      className: [In.root, h].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: s },
      onScroll: (f) => p(f.target.scrollTop),
      onKeyDown: (f) => {
        const u = f.currentTarget;
        f.key === "ArrowDown" ? (f.preventDefault(), u.scrollTop += t) : f.key === "ArrowUp" ? (f.preventDefault(), u.scrollTop -= t) : f.key === "PageDown" ? (f.preventDefault(), u.scrollTop += s) : f.key === "PageUp" && (f.preventDefault(), u.scrollTop -= s);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: b * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: In.header, role: "row", children: i.map((f) => /* @__PURE__ */ n(
          "div",
          {
            role: "columnheader",
            className: In.headCell,
            style: {
              height: t,
              ...f.width ? { width: f.width } : {}
            },
            children: f.title ?? f.property
          },
          f.property
        )) }),
        _,
        /* @__PURE__ */ n(
          "div",
          {
            style: { height: Math.max(0, (e - w) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var Mt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(r, l, a, p) {
      if (this.version = r, this.errorCorrectionLevel = l, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let d = [];
      for (let b = 0; b < this.size; b++) d.push(!1);
      for (let b = 0; b < this.size; b++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const v = this.addEccAndInterleave(a);
      if (this.drawCodewords(v), p == -1) {
        let b = 1e9;
        for (let w = 0; w < 8; w++) {
          this.applyMask(w), this.drawFormatBits(w);
          const k = this.getPenaltyScore();
          k < b && (p = w, b = k), this.applyMask(w);
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
    static encodeText(r, l) {
      const a = e.QrSegment.makeSegments(r);
      return t.encodeSegments(a, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(r, l) {
      const a = e.QrSegment.makeBytes(r);
      return t.encodeSegments([a], l);
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
    static encodeSegments(r, l, a = 1, p = 40, d = -1, v = !0) {
      if (!(t.MIN_VERSION <= a && a <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let b, w;
      for (b = a; ; b++) {
        const u = t.getNumDataCodewords(b, l) * 8, y = c.getTotalBits(r, b);
        if (y <= u) {
          w = y;
          break;
        }
        if (b >= p)
          throw new RangeError("Data too long");
      }
      for (const u of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        v && w <= t.getNumDataCodewords(b, u) * 8 && (l = u);
      let k = [];
      for (const u of r) {
        s(u.mode.modeBits, 4, k), s(u.numChars, u.mode.numCharCountBits(b), k);
        for (const y of u.getData()) k.push(y);
      }
      i(k.length == w);
      const _ = t.getNumDataCodewords(b, l) * 8;
      i(k.length <= _), s(0, Math.min(4, _ - k.length), k), s(0, (8 - k.length % 8) % 8, k), i(k.length % 8 == 0);
      for (let u = 236; k.length < _; u ^= 253)
        s(u, 8, k);
      let f = [];
      for (; f.length * 8 < k.length; ) f.push(0);
      return k.forEach(
        (u, y) => f[y >>> 3] |= u << 7 - (y & 7)
      ), new t(b, l, f, d);
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
    getModule(r, l) {
      return 0 <= r && r < this.size && 0 <= l && l < this.size && this.modules[l][r];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), l = r.length;
      for (let a = 0; a < l; a++)
        for (let p = 0; p < l; p++)
          a == 0 && p == 0 || a == 0 && p == l - 1 || a == l - 1 && p == 0 || this.drawAlignmentPattern(r[a], r[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const l = this.errorCorrectionLevel.formatBits << 3 | r;
      let a = l;
      for (let d = 0; d < 10; d++) a = a << 1 ^ (a >>> 9) * 1335;
      const p = (l << 10 | a) ^ 21522;
      i(p >>> 15 == 0);
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
      if (this.version < 7) return;
      let r = this.version;
      for (let a = 0; a < 12; a++) r = r << 1 ^ (r >>> 11) * 7973;
      const l = this.version << 12 | r;
      i(l >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const p = o(l, a), d = this.size - 11 + a % 3, v = Math.floor(a / 3);
        this.setFunctionModule(d, v, p), this.setFunctionModule(v, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, l) {
      for (let a = -4; a <= 4; a++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(a)), v = r + p, b = l + a;
          0 <= v && v < this.size && 0 <= b && b < this.size && this.setFunctionModule(v, b, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, l) {
      for (let a = -2; a <= 2; a++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(
            r + p,
            l + a,
            Math.max(Math.abs(p), Math.abs(a)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(r, l, a) {
      this.modules[l][r] = a, this.isFunction[l][r] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(r) {
      const l = this.version, a = this.errorCorrectionLevel;
      if (r.length != t.getNumDataCodewords(l, a))
        throw new RangeError("Invalid argument");
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][l], d = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][l], v = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), b = p - v % p, w = Math.floor(v / p);
      let k = [];
      const _ = t.reedSolomonComputeDivisor(d);
      for (let u = 0, y = 0; u < p; u++) {
        let O = r.slice(
          y,
          y + w - d + (u < b ? 0 : 1)
        );
        y += O.length;
        const g = t.reedSolomonComputeRemainder(O, _);
        u < b && O.push(0), k.push(O.concat(g));
      }
      let f = [];
      for (let u = 0; u < k[0].length; u++)
        k.forEach((y, O) => {
          (u != w - d || O >= b) && f.push(y[u]);
        });
      return i(f.length == v), f;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const v = a - d, w = (a + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[w][v] && l < r.length * 8 && (this.modules[w][v] = o(r[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      i(l == r.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(r) {
      if (r < 0 || r > 7) throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let a = 0; a < this.size; a++) {
          let p;
          switch (r) {
            case 0:
              p = (a + l) % 2 == 0;
              break;
            case 1:
              p = l % 2 == 0;
              break;
            case 2:
              p = a % 3 == 0;
              break;
            case 3:
              p = (a + l) % 3 == 0;
              break;
            case 4:
              p = (Math.floor(a / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              p = a * l % 2 + a * l % 3 == 0;
              break;
            case 6:
              p = (a * l % 2 + a * l % 3) % 2 == 0;
              break;
            case 7:
              p = ((a + l) % 2 + a * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][a] && p && (this.modules[l][a] = !this.modules[l][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let d = 0; d < this.size; d++) {
        let v = !1, b = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[d][k] == v ? (b++, b == 5 ? r += t.PENALTY_N1 : b > 5 && r++) : (this.finderPenaltyAddHistory(b, w), v || (r += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), v = this.modules[d][k], b = 1);
        r += this.finderPenaltyTerminateAndCount(v, b, w) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let v = !1, b = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[k][d] == v ? (b++, b == 5 ? r += t.PENALTY_N1 : b > 5 && r++) : (this.finderPenaltyAddHistory(b, w), v || (r += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), v = this.modules[k][d], b = 1);
        r += this.finderPenaltyTerminateAndCount(v, b, w) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let v = 0; v < this.size - 1; v++) {
          const b = this.modules[d][v];
          b == this.modules[d][v + 1] && b == this.modules[d + 1][v] && b == this.modules[d + 1][v + 1] && (r += t.PENALTY_N2);
        }
      let l = 0;
      for (const d of this.modules)
        l = d.reduce((v, b) => v + (b ? 1 : 0), l);
      const a = this.size * this.size, p = Math.ceil(Math.abs(l * 20 - a * 10) / a) - 1;
      return i(0 <= p && p <= 9), r += p * t.PENALTY_N4, i(0 <= r && r <= 2568888), r;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const r = Math.floor(this.version / 7) + 2, l = Math.floor(
          (this.version * 8 + r * 3 + 5) / (r * 4 - 4)
        ) * 2;
        let a = [6];
        for (let p = this.size - 7; a.length < r; p -= l)
          a.splice(1, 0, p);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(r) {
      if (r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * r + 128) * r + 64;
      if (r >= 2) {
        const a = Math.floor(r / 7) + 2;
        l -= (25 * a - 10) * a - 55, r >= 7 && (l -= 36);
      }
      return i(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(r, l) {
      return Math.floor(t.getNumRawDataModules(r) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][r] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][r];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(r) {
      if (r < 1 || r > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let p = 0; p < r - 1; p++) l.push(0);
      l.push(1);
      let a = 1;
      for (let p = 0; p < r; p++) {
        for (let d = 0; d < l.length; d++)
          l[d] = t.reedSolomonMultiply(l[d], a), d + 1 < l.length && (l[d] ^= l[d + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, l) {
      let a = l.map((p) => 0);
      for (const p of r) {
        const d = p ^ a.shift();
        a.push(0), l.forEach(
          (v, b) => a[b] ^= t.reedSolomonMultiply(v, d)
        );
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(r, l) {
      if (r >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let p = 7; p >= 0; p--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (l >>> p & 1) * r;
      return i(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(r) {
      const l = r[1];
      i(l <= this.size * 3);
      const a = l > 0 && r[2] == l && r[3] == l * 3 && r[4] == l && r[5] == l;
      return (a && r[0] >= l * 4 && r[6] >= l ? 1 : 0) + (a && r[6] >= l * 4 && r[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(r, l, a) {
      return r && (this.finderPenaltyAddHistory(l, a), l = 0), l += this.size, this.finderPenaltyAddHistory(l, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(r, l) {
      l[0] == 0 && (r += this.size), l.pop(), l.unshift(r);
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
  function s(h, r, l) {
    if (r < 0 || r > 31 || h >>> r)
      throw new RangeError("Value out of range");
    for (let a = r - 1; a >= 0; a--)
      l.push(h >>> a & 1);
  }
  function o(h, r) {
    return (h >>> r & 1) != 0;
  }
  function i(h) {
    if (!h) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(r, l, a) {
      if (this.mode = r, this.numChars = l, this.bitData = a, l < 0) throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(r) {
      let l = [];
      for (const a of r) s(a, 8, l);
      return new c(c.Mode.BYTE, r.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!c.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let a = 0; a < r.length; ) {
        const p = Math.min(r.length - a, 3);
        s(parseInt(r.substring(a, a + p), 10), p * 3 + 1, l), a += p;
      }
      return new c(c.Mode.NUMERIC, r.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(r) {
      if (!c.isAlphanumeric(r))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let l = [], a;
      for (a = 0; a + 2 <= r.length; a += 2) {
        let p = c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a + 1)), s(p, 11, l);
      }
      return a < r.length && s(
        c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)),
        6,
        l
      ), new c(c.Mode.ALPHANUMERIC, r.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(r) {
      return r == "" ? [] : c.isNumeric(r) ? [c.makeNumeric(r)] : c.isAlphanumeric(r) ? [c.makeAlphanumeric(r)] : [c.makeBytes(c.toUtf8ByteArray(r))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(r) {
      let l = [];
      if (r < 0)
        throw new RangeError("ECI assignment value out of range");
      if (r < 128) s(r, 8, l);
      else if (r < 16384)
        s(2, 2, l), s(r, 14, l);
      else if (r < 1e6)
        s(6, 3, l), s(r, 21, l);
      else throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, l);
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
    static getTotalBits(r, l) {
      let a = 0;
      for (const p of r) {
        const d = p.mode.numCharCountBits(l);
        if (p.numChars >= 1 << d) return 1 / 0;
        a += 4 + d + p.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let l = [];
      for (let a = 0; a < r.length; a++)
        r.charAt(a) != "%" ? l.push(r.charCodeAt(a)) : (l.push(parseInt(r.substring(a + 1, a + 3), 16)), a += 2);
      return l;
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
})(Mt || (Mt = {}));
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
})(Mt || (Mt = {}));
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
})(Mt || (Mt = {}));
const V2 = "_root_1leml_1", X2 = {
  root: V2
}, G2 = {
  low: Mt.QrCode.Ecc.LOW,
  medium: Mt.QrCode.Ecc.MEDIUM,
  quartile: Mt.QrCode.Ecc.QUARTILE,
  high: Mt.QrCode.Ecc.HIGH
};
function Hv({
  value: e,
  size: t = 128,
  render: s = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: h,
  onError: r
}) {
  const l = c ?? `QR code for ${e}`, a = ae(null), p = Zs("(prefers-color-scheme: dark)"), [d, v] = X(null);
  we(() => {
    const O = document.documentElement;
    v(O.dataset.theme ?? null);
    const g = new MutationObserver(() => {
      v(O.dataset.theme ?? null);
    });
    return g.observe(O, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => g.disconnect();
  }, []);
  const b = $e(() => {
    try {
      return Mt.QrCode.encodeText(e, G2[o]);
    } catch {
      return null;
    }
  }, [e, o]), w = ae(null);
  we(() => {
    if (b !== null) {
      w.current = null;
      return;
    }
    const O = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(O), (w.current?.value !== e || w.current?.onError !== r) && (w.current = { value: e, onError: r }, r?.(O));
  }, [b, e, r]);
  const k = Math.max(0, Math.floor(i)), _ = [X2.root, h].filter(Boolean).join(" ");
  if (we(() => {
    if (s !== "canvas" || b === null) return;
    const O = a.current, g = O?.getContext("2d");
    if (!O || !g) return;
    const S = getComputedStyle(O), x = S.getPropertyValue("--dx-text-color").trim() || "#000", N = S.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Y2(g, b, t, k, x, N);
  }, [s, b, t, k, p, d]), b === null)
    return /* @__PURE__ */ n("div", { className: _, role: "img", "aria-label": l, "data-qr-error": "true" });
  const f = b.size + k * 2, u = t / f;
  if (s === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: a,
        className: _,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const y = [];
  for (let O = 0; O < b.size; O++)
    for (let g = 0; g < b.size; g++)
      b.getModule(g, O) && y.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (g + k) * u,
            y: (O + k) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${g}-${O}`
        )
      );
  return /* @__PURE__ */ $(
    "svg",
    {
      className: _,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function Y2(e, t, s, o, i, c) {
  const h = s / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, s, s), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, r) && e.fillRect((l + o) * h, (r + o) * h, h + 0.5, h + 0.5);
}
const Z2 = "_root_1v9la_1", J2 = "_value_1v9la_9", Ps = {
  root: Z2,
  value: J2
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
], Fs = 104, Q2 = 106;
function eb(e) {
  const t = [Fs];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let s = Fs;
  for (let o = 1; o < t.length; o++) s += o * t[o];
  return t.push(s % 103, Q2), t;
}
function Kv({
  value: e,
  format: t = "Code128",
  height: s = 60,
  showValue: o = !1,
  ariaLabel: i,
  className: c
}) {
  const h = i ?? `Barcode ${e}`, r = $e(() => {
    const l = [];
    let a = 0;
    for (const p of eb(e)) {
      const d = Bs[p] ?? Bs[0];
      for (let v = 0; v < d.length; v++) {
        const b = Number(d[v]);
        v % 2 === 0 && l.push({ x: a, w: b }), a += b;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ $("span", { className: [Ps.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
      "svg",
      {
        width: "100%",
        height: s,
        viewBox: `0 0 ${r.total} ${s}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": h,
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
          r.modules.map((l, a) => /* @__PURE__ */ n(
            "rect",
            {
              x: l.x,
              y: 0,
              width: l.w,
              height: s,
              fill: "var(--dx-text-color)"
            },
            a
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n("span", { className: Ps.value, children: e })
  ] });
}
const tb = "_root_gfdmk_1", nb = "_svg_gfdmk_10", sb = "_gridline_gfdmk_15", rb = "_tickLabel_gfdmk_21", ob = "_axisTitle_gfdmk_27", lb = "_dataLabel_gfdmk_34", ab = "_legend_gfdmk_40", ib = "_legendItem_gfdmk_48", cb = "_swatch_gfdmk_56", db = "_tooltip_gfdmk_63", ub = "_visuallyHidden_gfdmk_77", ot = {
  root: tb,
  svg: nb,
  gridline: sb,
  tickLabel: rb,
  axisTitle: ob,
  dataLabel: lb,
  legend: ab,
  legendItem: ib,
  swatch: cb,
  tooltip: db,
  visuallyHidden: ub
}, qs = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function _b(e, t, s) {
  const o = t - e || 1, i = s ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, h = Math.ceil(t / i) * i, r = [];
  for (let l = c; l <= h + 1e-9; l += i)
    r.push(Number(l.toFixed(6)));
  return { min: c, max: h, step: i, ticks: r };
}
function Uv({
  series: e,
  width: t = 600,
  height: s = 400,
  valueAxis: o,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: h = !0,
  onSeriesClick: r,
  ariaLabel: l = "Chart",
  className: a
}) {
  const [p, d] = X(
    null
  ), v = $e(() => {
    const x = /* @__PURE__ */ new Set();
    for (const N of e)
      for (const E of N.data) x.add(String(E[N.categoryProperty] ?? ""));
    return [...x];
  }, [e]), b = $e(
    () => e.flatMap((x) => x.data.map((N) => Number(N[x.valueProperty]))).filter((x) => !Number.isNaN(x)),
    [e]
  ), w = o?.min ?? (b.length ? Math.min(0, ...b) : 0), k = o?.max ?? (b.length ? Math.max(...b) : 10), _ = $e(
    () => _b(w, k, o?.step),
    [w, k, o?.step]
  ), f = { t: 16, r: 16, b: 40, l: 56 }, u = t - f.l - f.r, y = s - f.t - f.b, O = (x) => f.l + x / Math.max(1, v.length - 1) * u, g = (x) => f.t + (1 - (x - _.min) / (_.max - _.min || 1)) * y, S = (x, N) => N.color ?? qs[x % qs.length];
  return /* @__PURE__ */ $(
    "figure",
    {
      className: [ot.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": l,
      "aria-describedby": `${l.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ $(
          "svg",
          {
            width: t,
            height: s,
            className: ot.svg,
            role: "presentation",
            children: [
              o?.gridlines !== !1 && _.ticks.map((x) => /* @__PURE__ */ n(
                "line",
                {
                  x1: f.l,
                  x2: f.l + u,
                  y1: g(x),
                  y2: g(x),
                  className: ot.gridline
                },
                x
              )),
              i?.gridlines && v.map((x, N) => /* @__PURE__ */ n(
                "line",
                {
                  x1: O(N),
                  x2: O(N),
                  y1: f.t,
                  y2: f.t + y,
                  className: ot.gridline
                },
                N
              )),
              _.ticks.map((x) => /* @__PURE__ */ n(
                "text",
                {
                  x: f.l - 8,
                  y: g(x) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: x
                },
                x
              )),
              v.map((x, N) => /* @__PURE__ */ n(
                "text",
                {
                  x: O(N),
                  y: f.t + y + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: x
                },
                x
              )),
              o?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: 12,
                  y: f.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${f.t + y / 2})`,
                  className: ot.axisTitle,
                  children: o.title
                }
              ),
              i?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: f.l + u / 2,
                  y: s - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: i.title
                }
              ),
              (() => {
                const x = /* @__PURE__ */ new Map();
                for (const I of e)
                  if (I.stack)
                    for (const C of I.data) {
                      const M = String(C[I.categoryProperty] ?? ""), m = Number(C[I.valueProperty]);
                      if (Number.isNaN(m)) continue;
                      x.has(I.stack) || x.set(I.stack, /* @__PURE__ */ new Map());
                      const D = x.get(I.stack);
                      D.set(M, (D.get(M) ?? 0) + m);
                    }
                const N = e.filter(
                  (I) => I.type === "pie" || I.type === "donut"
                ), E = /* @__PURE__ */ new Map();
                for (const I of N) {
                  const C = I.data.reduce(
                    (M, m) => M + (Number(m[I.valueProperty]) || 0),
                    0
                  );
                  E.set(I, C);
                }
                return e.map((I, C) => {
                  const M = I.data.map((j) => ({
                    cat: String(j[I.categoryProperty] ?? ""),
                    val: Number(j[I.valueProperty]),
                    size: I.sizeProperty ? Number(j[I.sizeProperty]) : void 0,
                    item: j
                  })), m = new Map(v.map((j, T) => [j, T])), D = S(C, I);
                  if (I.type === "pie" || I.type === "donut") {
                    const j = f.l + u / 2, T = f.t + y / 2, F = Math.min(u, y) / 3, V = I.type === "donut" ? I.innerRadius ?? F * 0.5 : 0, Z = E.get(I) ?? M.reduce((K, te) => K + te.val, 0);
                    let Q = -90;
                    return /* @__PURE__ */ $(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          M.map((K, te) => {
                            const oe = Z ? K.val / Z * 360 : 0, ee = Q, L = Q + oe;
                            Q = L;
                            const ie = oe > 180 ? 1 : 0, Y = (Qe) => Qe * Math.PI / 180, de = j + F * Math.cos(Y(ee)), le = T + F * Math.sin(Y(ee)), ye = j + F * Math.cos(Y(L)), ke = T + F * Math.sin(Y(L)), Be = j + V * Math.cos(Y(L)), ve = T + V * Math.sin(Y(L)), We = j + V * Math.cos(Y(ee)), xe = T + V * Math.sin(Y(ee)), Ze = V ? `M ${de} ${le} A ${F} ${F} 0 ${ie} 1 ${ye} ${ke} L ${Be} ${ve} A ${V} ${V} 0 ${ie} 0 ${We} ${xe} Z` : `M ${j} ${T} L ${de} ${le} A ${F} ${F} 0 ${ie} 1 ${ye} ${ke} Z`, Ve = (ee + L) / 2, Le = j + (F + 12) * Math.cos(Y(Ve)), tt = T + (F + 12) * Math.sin(Y(Ve));
                            return /* @__PURE__ */ $("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "path",
                                {
                                  d: Ze,
                                  fill: D,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => h && d({
                                    x: Le,
                                    y: tt,
                                    text: `${I.title ?? K.cat}: ${K.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: K.cat,
                                    value: K.val,
                                    item: K.item
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
                                  children: K.val
                                }
                              )
                            ] }, te);
                          })
                        ]
                      },
                      C
                    );
                  }
                  if (I.type === "scatter" || I.type === "bubble")
                    return /* @__PURE__ */ $(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          M.map((j, T) => {
                            const F = m.get(j.cat) ?? 0, V = Number(M[T].cat), Z = Number.isNaN(V) ? O(F) : f.l + (V - _.min) / (_.max - _.min || 1) * u, Q = g(j.val), K = I.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                            return /* @__PURE__ */ $("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: Z,
                                  cy: Q,
                                  r: K,
                                  fill: D,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: Z,
                                  cy: Q,
                                  r: 12,
                                  fill: "transparent",
                                  onMouseEnter: () => h && d({
                                    x: Z,
                                    y: Q,
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
                            ] }, T);
                          })
                        ]
                      },
                      C
                    );
                  if (I.type === "line" || I.type === "area") {
                    const j = (V) => {
                      if (!I.stack) return _.min;
                      let Z = 0;
                      for (let Q = 0; Q < C; Q++) {
                        const K = e[Q];
                        if (K?.stack !== I.stack) continue;
                        const te = K.data.find(
                          (oe) => String(oe[K.categoryProperty] ?? "") === V
                        );
                        te && (Z += Number(te[K.valueProperty]) || 0);
                      }
                      return Z;
                    }, T = M.map((V) => {
                      const Z = m.get(V.cat) ?? 0, Q = j(V.cat);
                      return `${Z === 0 ? "M" : "L"} ${O(Z)} ${g(Q + V.val)}`;
                    }).join(" "), F = M.map((V) => {
                      const Z = m.get(V.cat) ?? 0, Q = j(V.cat);
                      return `${Z === 0 ? "M" : "L"} ${O(Z)} ${g(Q)}`;
                    }).join(" ");
                    return /* @__PURE__ */ $(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          I.type === "area" && /* @__PURE__ */ n(
                            "path",
                            {
                              d: `${T} L ${O(M.length - 1)} ${g(j(M[M.length - 1].cat))} L ${O(0)} ${g(j(M[0].cat))} Z`,
                              fill: D,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ n("path", { d: T, fill: "none", stroke: D, strokeWidth: 2 }),
                          I.stack && /* @__PURE__ */ n("path", { d: F, fill: "none", stroke: "transparent" }),
                          M.map((V, Z) => {
                            const Q = m.get(V.cat) ?? 0, K = j(V.cat), te = O(Q), oe = g(K + V.val);
                            return /* @__PURE__ */ $("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: te,
                                  cy: oe,
                                  r: 4,
                                  fill: D,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ n(
                                "rect",
                                {
                                  x: te - 12,
                                  y: oe - 12,
                                  width: 24,
                                  height: 24,
                                  fill: "transparent",
                                  onMouseEnter: () => h && d({
                                    x: te,
                                    y: oe,
                                    text: `${I.title ?? V.cat}: ${V.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onFocus: () => h && d({
                                    x: te,
                                    y: oe,
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
                                  x: te,
                                  y: oe - 8,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: V.val
                                }
                              )
                            ] }, Z);
                          })
                        ]
                      },
                      C
                    );
                  }
                  const P = I.type === "bar";
                  return /* @__PURE__ */ $(
                    "g",
                    {
                      role: "list",
                      "aria-label": I.title ?? `Series ${C + 1}`,
                      children: [
                        /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                        M.map((j, T) => {
                          const F = m.get(j.cat) ?? 0;
                          let V = 0;
                          if (I.stack)
                            for (let le = 0; le < C; le++) {
                              const ye = e[le];
                              if (ye?.stack !== I.stack) continue;
                              const ke = ye.data.find(
                                (Be) => String(Be[ye.categoryProperty] ?? "") === j.cat
                              );
                              ke && (V += Number(ke[ye.valueProperty]) || 0);
                            }
                          const Z = V + j.val, Q = e.filter(
                            (le) => !le.stack || le.stack === I.stack
                          ).length, K = u / v.length, te = P ? 18 : Math.max(
                            12,
                            K / (I.stack ? 1 : e.length) - 4
                          ), oe = P ? f.l + V / (_.max - _.min || 1) * u : O(F) - te / 2 + (I.stack ? 0 : C % Q * te), ee = P ? f.t + F * y / v.length + 4 : g(Z), L = P ? j.val / (_.max - _.min || 1) * u : te - 4, ie = P ? 16 : g(V) - g(Z), Y = P ? f.l + V / (_.max - _.min || 1) * u : oe, de = P ? f.t + F * y / v.length + 4 : ee;
                          return /* @__PURE__ */ $("g", { role: "listitem", children: [
                            /* @__PURE__ */ n(
                              "rect",
                              {
                                x: Y,
                                y: de,
                                width: P ? L : te - 4,
                                height: ie,
                                fill: D,
                                rx: 2,
                                onMouseEnter: () => h && d({
                                  x: Y + (P ? L : te) / 2,
                                  y: de,
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
                                x: Y + (P ? L : te) / 2,
                                y: de - 4,
                                textAnchor: "middle",
                                className: ot.dataLabel,
                                children: j.val
                              }
                            )
                          ] }, T);
                        })
                      ]
                    },
                    C
                  );
                });
              })()
            ]
          }
        ),
        p && /* @__PURE__ */ n(
          "div",
          {
            className: ot.tooltip,
            style: { left: p.x, top: p.y - 28 },
            children: p.text
          }
        ),
        c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((x, N) => /* @__PURE__ */ $("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: S(N, x) },
              "aria-hidden": "true"
            }
          ),
          x.title ?? `Series ${N + 1}`
        ] }, N)) }),
        /* @__PURE__ */ $(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${l.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ n("caption", { children: l }),
              /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ $("tr", { children: [
                /* @__PURE__ */ n("th", { children: "Series" }),
                /* @__PURE__ */ n("th", { children: "Category" }),
                /* @__PURE__ */ n("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ n("tbody", { children: e.map(
                (x) => x.data.map((N, E) => /* @__PURE__ */ $("tr", { children: [
                  /* @__PURE__ */ n("td", { children: x.title ?? "" }),
                  /* @__PURE__ */ n("td", { children: String(N[x.categoryProperty] ?? "") }),
                  /* @__PURE__ */ n("td", { children: String(N[x.valueProperty] ?? "") })
                ] }, `${x.title}-${E}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  Wi as ALERT_ICON,
  sv as Accordion,
  Kb as Alert,
  av as Autocomplete,
  tv as Avatar,
  gb as Badge,
  Kv as Barcode,
  Yb as Body,
  Cv as Breadcrumb,
  pb as Button,
  mb as Card,
  Av as Carousel,
  Uv as Chart,
  Pb as Checkbox,
  cv as Checkboxlist,
  xv as Colorpicker,
  Vb as Column,
  kn as DEFAULT_OPERATOR_BY_TYPE,
  Ug as DEFAULT_PALETTE,
  jb as DataFilter,
  Ab as DataGrid,
  Tb as DataList,
  yv as Datepicker,
  Fb as Dialog,
  Ov as DropZone,
  lv as Dropdown,
  vb as EmptyState,
  Vs as FILTER_OPERATORS,
  Mv as FabMenu,
  kb as Field,
  eh as Footer,
  wb as Form,
  Pv as Gantt,
  sh as Header,
  De as Icon,
  Lb as Input,
  Rb as Label,
  Gb as Layout,
  iv as Listbox,
  mv as Mask,
  Sv as Menu,
  gv as Numeric,
  Ol as Pager,
  zv as PanelMenu,
  pv as Password,
  Rv as PickList,
  Bv as Pivot,
  Dv as ProfileMenu,
  Jb as Progress,
  Hv as QRCode,
  dv as Radiobuttonlist,
  bv as Rating,
  Wb as Row,
  Lv as Scheduler,
  wv as SecurityCode,
  gn as Select,
  uv as Selectbar,
  hh as Sidebar,
  Zb as SidebarToggle,
  $v as SignaturePad,
  Ub as Skeleton,
  vv as Slider,
  fv as Splitbutton,
  Iv as Splitter,
  Xb as Stack,
  yb as Stat,
  Ev as Steps,
  Pa as Switch,
  bb as Table,
  nv as Tabs,
  ov as Text,
  rv as Textarea,
  hv as Textbox,
  ev as ThemeSwitcher,
  Fv as Timeline,
  kv as Timespanpicker,
  Hb as ToastProvider,
  jv as Toc,
  _v as Togglebutton,
  Bb as Tooltip,
  Tv as Tree,
  Nv as Upload,
  qv as VirtualGrid,
  Gs as applyFilters,
  Il as applyGridState,
  $n as columnValue,
  Mb as compare,
  Eb as custom,
  Ml as cycleSort,
  jl as defaultOperatorForType,
  Nb as email,
  Ds as formatMasked,
  ys as formatValue,
  Gn as getByPath,
  xb as iconNames,
  Xs as matchesFilters,
  zb as maxLength,
  Sb as minLength,
  El as paginate,
  Ob as pattern,
  Db as range,
  $b as required,
  Cb as requiredTrue,
  ds as resolveVariant,
  Io as runValidators,
  Qb as shadeClass,
  Yo as sortItems,
  Cl as sortedItems,
  Uo as toFilterString,
  Go as toODataFilterString,
  Eo as useFormContext,
  Ib as useFormField,
  Zs as useMediaQuery,
  qb as useToast
};
