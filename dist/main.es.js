import { jsx as n, jsxs as O, Fragment as Ce } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ye, isValidElement as Tn, cloneElement as Hs, useState as X, useRef as ae, useCallback as H, useMemo as $e, useContext as Ks, createContext as Us, useEffect as ke, Fragment as tr, Children as nr, useImperativeHandle as cs } from "react";
const sr = "_button_mpzch_1", rr = "_filled_mpzch_36", or = "_flat_mpzch_39", ar = "_outlined_mpzch_42", lr = "_text_mpzch_47", ir = "_loading_mpzch_538", cr = "_spinner_mpzch_541", dr = "_xs_mpzch_557", ur = "_sm_mpzch_563", _r = "_md_mpzch_569", fr = "_lg_mpzch_575", hr = "_xl_mpzch_581", pr = "_iconOnly_mpzch_587", mr = "_fullWidth_mpzch_617", Ct = {
  button: sr,
  filled: rr,
  flat: or,
  outlined: ar,
  text: lr,
  "style-primary": "_style-primary_mpzch_53",
  "tone-primary": "_tone-primary_mpzch_54",
  "style-secondary": "_style-secondary_mpzch_80",
  "tone-secondary": "_tone-secondary_mpzch_81",
  "style-base": "_style-base_mpzch_102",
  "style-light": "_style-light_mpzch_121",
  "style-dark": "_style-dark_mpzch_139",
  "style-danger": "_style-danger_mpzch_162",
  "tone-danger": "_tone-danger_mpzch_163",
  "style-success": "_style-success_mpzch_189",
  "tone-success": "_tone-success_mpzch_190",
  "style-warning": "_style-warning_mpzch_216",
  "tone-warning": "_tone-warning_mpzch_217",
  "style-info": "_style-info_mpzch_243",
  "tone-info": "_tone-info_mpzch_244",
  "shade-lighter": "_shade-lighter_mpzch_440",
  "shade-light": "_shade-light_mpzch_440",
  "shade-dark": "_shade-dark_mpzch_450",
  "shade-darker": "_shade-darker_mpzch_454",
  loading: ir,
  spinner: cr,
  "dx-spin": "_dx-spin_mpzch_1",
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
const m2 = qe(
  function(t, s) {
    const {
      variant: o = "filled",
      severity: i,
      shade: c = "default",
      size: h = "md",
      fullWidth: r = !1,
      iconOnly: a = !1,
      loading: l = !1,
      visible: p = !0,
      className: d,
      disabled: v,
      children: b,
      ...$
    } = t;
    if (p === !1) return null;
    const k = gr(o, i), _ = !(k.style === "light" || k.style === "dark") && c !== "default" ? `shade-${c}` : null, u = [
      Ct.button,
      Ct[k.variant],
      Ct[`style-${k.style}`],
      // backwards-compat: tone-* still emitted
      Ct[`tone-${k.style}`],
      _ ? Ct[_] : null,
      Ct[h],
      r ? Ct.fullWidth : null,
      a ? Ct.iconOnly : null,
      l ? Ct.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      d
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ O(Ce, { children: [
      l ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Ct.spinner }) : null,
      b
    ] }), N = t.href;
    if (N != null) {
      const { onClick: x, ...w } = $, E = v || l;
      return /* @__PURE__ */ n(
        "a",
        {
          ref: s,
          href: N,
          className: u,
          "aria-disabled": E || void 0,
          "aria-busy": l || void 0,
          onClick: (I) => {
            if (E) {
              I.preventDefault();
              return;
            }
            x?.(I);
          },
          ...w,
          children: y
        }
      );
    }
    const { type: g = "button", ...S } = $;
    return /* @__PURE__ */ n(
      "button",
      {
        ref: s,
        type: g,
        className: u,
        disabled: v || l,
        "aria-busy": l || void 0,
        ...S,
        children: y
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
}, g2 = qe(function({
  variant: t = "elevated",
  header: s,
  footer: o,
  className: i,
  visible: c = !0,
  children: h,
  onKeyDown: r,
  ...a
}, l) {
  if (c === !1) return null;
  const p = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ O(
      "div",
      {
        ref: l,
        role: p ? "button" : void 0,
        tabIndex: p ? 0 : void 0,
        onKeyDown: (d) => {
          r?.(d), !(!p || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [xn.card, xn[t], i].filter(Boolean).join(" "),
        ...a,
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
}, x2 = qe(function({
  severity: t = "primary",
  variant: s = "filled",
  shade: o,
  size: i = "md",
  className: c,
  visible: h = !0,
  children: r,
  ...a
}, l) {
  if (h === !1) return null;
  const p = t, d = ds(s, "filled"), v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: l,
      className: [
        yn.badge,
        yn[i],
        yn[p],
        yn[d],
        v ? yn[v] : null,
        c
      ].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}), Wr = "_xs_2a6lm_2", Vr = "_sm_2a6lm_7", Xr = "_md_2a6lm_1", Gr = "_lg_2a6lm_17", Yr = "_xl_2a6lm_22", Zr = {
  xs: Wr,
  sm: Vr,
  md: Xr,
  lg: Gr,
  xl: Yr
}, y2 = [
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
}), Qr = "_stat_sjin9_1", eo = "_label_sjin9_8", to = "_row_sjin9_16", no = "_value_sjin9_22", so = "_delta_sjin9_28", ro = "_success_sjin9_33", oo = "_danger_sjin9_37", ao = "_neutral_sjin9_41", lo = "_hint_sjin9_45", Qt = {
  stat: Qr,
  label: eo,
  row: to,
  value: no,
  delta: so,
  success: ro,
  danger: oo,
  neutral: ao,
  hint: lo
}, b2 = qe(function({ label: t, value: s, delta: o, deltaTone: i = "neutral", hint: c, className: h, ...r }, a) {
  return /* @__PURE__ */ O(
    "div",
    {
      ref: a,
      className: [Qt.stat, h].filter(Boolean).join(" "),
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
}), io = "_wrap_1jc7y_1", co = "_table_1jc7y_8", uo = "_caption_1jc7y_14", _o = "_none_1jc7y_51", fo = "_horizontal_1jc7y_57", ho = "_vertical_1jc7y_67", po = "_alternating_1jc7y_85", mo = "_start_1jc7y_89", go = "_center_1jc7y_93", xo = "_end_1jc7y_97", yo = "_empty_1jc7y_101", Xt = {
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
function v2({
  columns: e,
  rows: t,
  rowKey: s,
  empty: o,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: h = !0,
  className: r,
  visible: a = !0
}) {
  if (a === !1) return null;
  const l = c === "default" || c === "both" ? "" : Xt[c];
  return /* @__PURE__ */ O("div", { className: [Xt.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "table",
      {
        className: [
          Xt.table,
          l,
          h ? Xt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ n("caption", { className: Xt.caption, children: i }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "th",
            {
              className: p.align != null ? Xt[p.align] : void 0,
              scope: "col",
              children: p.header
            },
            p.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((p) => /* @__PURE__ */ n("tr", { children: e.map((d) => /* @__PURE__ */ n(
            "td",
            {
              className: d.align != null ? Xt[d.align] : void 0,
              children: d.render != null ? d.render(p) : p[d.key]
            },
            d.key
          )) }, s(p))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Xt.empty, children: o })
  ] });
}
const bo = "_emptyState_1swxw_1", vo = "_icon_1swxw_13", ko = "_title_1swxw_18", wo = "_description_1swxw_24", $o = "_action_1swxw_30", bn = {
  emptyState: bo,
  icon: vo,
  title: ko,
  description: wo,
  action: $o
};
function k2({
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
const No = "_field_149oz_1", Oo = "_label_149oz_8", So = "_required_149oz_14", zo = "_hint_149oz_19", Do = "_error_149oz_24", vn = {
  field: No,
  label: Oo,
  required: So,
  hint: zo,
  error: Do
};
function w2({
  label: e,
  htmlFor: t,
  required: s,
  hint: o,
  supporting: i,
  error: c,
  children: h,
  className: r,
  visible: a = !0
}) {
  const l = o ?? i, p = Ye(), d = Ye(), v = Ye();
  if (a === !1) return null;
  const b = c != null ? d : l != null ? v : null, $ = typeof h == "function" ? h({ inputId: p, hintId: v, errorId: d }) : h, k = Tn($) && typeof $.props.id == "string" ? $.props.id : void 0, f = k ?? t ?? p, _ = Tn($) && (b != null || k == null && typeof $.type == "string"), u = k != null || t != null || _, y = _ && Tn($) ? Hs($, {
    id: f,
    "aria-describedby": b != null ? [
      $.props["aria-describedby"],
      b
    ].filter((N) => typeof N == "string").join(" ") || void 0 : $.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : $.props["aria-invalid"]
  }) : $;
  return /* @__PURE__ */ O("div", { className: [vn.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O(
      "label",
      {
        className: vn.label,
        htmlFor: u ? f : void 0,
        children: [
          e,
          s === !0 && /* @__PURE__ */ n("span", { className: vn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: vn.error, "aria-live": "polite", children: c }) : l != null ? /* @__PURE__ */ n("div", { id: v, className: vn.hint, children: l }) : null
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
function $2({
  model: e,
  onSubmit: t,
  onInvalidSubmit: s,
  action: o,
  method: i,
  children: c,
  className: h
}) {
  const [r, a] = X({}), [l, p] = X(0), d = ae(r);
  d.current = r;
  const v = H((y) => {
    a(
      (N) => N[y.name] === y ? N : { ...N, [y.name]: y }
    );
  }, []), b = H((y) => {
    a((N) => {
      if (!(y in N)) return N;
      const g = { ...N };
      return delete g[y], g;
    });
  }, []), $ = H(() => {
    const y = {};
    for (const N of Object.values(d.current)) {
      const g = N.validate();
      g.length > 0 && (y[N.name] = g);
    }
    return y;
  }, []), k = H(() => {
    const y = $();
    p((N) => N + 1), Object.keys(y).length === 0 ? t?.(e) : s?.(y);
  }, [$, e, t, s]), f = (y) => {
    o != null && i != null || (y.preventDefault(), k());
  }, _ = $e(
    () => ({ registerField: v, unregisterField: b, submit: k, submitCount: l }),
    [v, b, k, l]
  ), u = [Co.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Ws.Provider, { value: _, children: /* @__PURE__ */ n(
    "form",
    {
      className: u,
      onSubmit: f,
      action: o,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const an = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", N2 = (e = "Required") => (t) => an(t) ? e : null, O2 = (e = "Invalid email") => (t) => an(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, S2 = (e, t = "Invalid format") => (s) => an(s) || e.test(String(s)) ? null : t, z2 = (e, t = `Minimum ${e} characters`) => (s) => an(s) || String(s).length >= e ? null : t, D2 = (e, t = `Maximum ${e} characters`) => (s) => an(s) || String(s).length <= e ? null : t, M2 = (e, t, s = `Between ${e} and ${t}`) => (o) => {
  if (an(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : s;
}, C2 = (e, t = "Values do not match") => (s, o) => {
  if (an(s)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return s === i ? null : t;
}, E2 = (e = "Required") => (t) => t === !0 ? null : e, I2 = (e) => (t, s) => e(t, s);
function Io(e, t, s) {
  return e.map((o) => o(t, s)).filter((o) => o != null);
}
function j2(e, t) {
  const { registerField: s, unregisterField: o, submitCount: i } = Eo(), [c, h] = X(t?.initialValue), [r, a] = X(!1), [l, p] = X(!1), d = ae(() => []);
  d.current = () => Io(t?.validate ?? [], c), ke(() => (s({ name: e, validate: () => d.current() }), () => o(e)), [e, s, o]), ke(() => {
    i > 0 && (a(!0), p(!1));
  }, [i]);
  const v = r && !l ? d.current() : [];
  return { value: c, setValue: ($) => {
    h($), p(!0);
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
  const i = o === "CaseInsensitive", c = (a) => i && typeof a == "string" ? a.toLowerCase() : a, h = c(e), r = c(t);
  switch (s) {
    case "Equals":
      return h === r || Array.isArray(h) && h.some((a) => c(a) === r);
    case "NotEquals":
      return h !== r && !(Array.isArray(h) && h.some((a) => c(a) === r));
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
      return Array.isArray(r) && r.some((a) => c(a) === h);
    case "NotIn":
      return Array.isArray(r) && !r.some((a) => c(a) === h);
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
  const s = e.property, o = t === "CaseInsensitive", i = (l) => o ? `tolower(${l})` : l, c = (l) => typeof l == "string" ? `'${Wo(l)}'` : l instanceof Date ? `'${l.toISOString()}'` : String(l ?? ""), h = (l, p) => {
    const d = typeof p == "string", v = d && o ? i(s) : s;
    switch (l) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${v} ${Vo[l]} ${d && o ? i(c(p)) : c(p)}`;
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
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${h(e.operator, e.value)} ${r} ${h(
    a,
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
const Zo = "_filter_los3f_1", Jo = "_rows_los3f_9", Qo = "_row_los3f_9", ea = "_join_los3f_21", ta = "_property_los3f_30", na = "_operator_los3f_34", sa = "_value_los3f_38", ra = "_remove_los3f_42", oa = "_bar_los3f_58", aa = "_add_los3f_64", la = "_custom_los3f_78", ia = "_summary_los3f_82", ca = "_second_los3f_87", da = "_secondAdd_los3f_91", ua = "_addSecond_los3f_95", _a = "_joinSelect_los3f_109", Ge = {
  filter: Zo,
  rows: Jo,
  row: Qo,
  join: ea,
  property: ta,
  operator: na,
  value: sa,
  remove: ra,
  bar: oa,
  add: aa,
  custom: la,
  summary: ia,
  second: ca,
  secondAdd: da,
  addSecond: ua,
  joinSelect: _a
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
function A2({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: s = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: h,
  items: r,
  children: a
}) {
  const [l, p] = X(
    () => o != null && o.length > 0 ? o.map((_, u) => ({ id: u, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: kn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (_, u) => {
    p(
      (y) => y.map((N) => N.id === _ ? { ...N, ...u } : N)
    );
  }, v = () => {
    const _ = l[l.length - 1], u = Math.max(0, ...l.map((N) => N.id)) + 1, y = e[0];
    p((N) => [
      ...N,
      {
        id: u,
        property: _?.property ?? y?.name ?? "",
        operator: kn[e.find(
          (g) => g.name === (_?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (_) => {
    p(
      (u) => u.length > 1 ? u.filter((y) => y.id !== _) : u
    );
  }, $ = $e(() => {
    const _ = [];
    for (const u of l) {
      if (u.property === "" || (u.value == null || u.value === "") && !wn.includes(u.operator)) continue;
      const N = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: g } = u;
      g != null && Yn(u) && (N.secondOperator = g, N.secondValue = u.secondValue, N.logicalOperator = u.logicalOperator ?? "And"), _.push(N);
    }
    return _;
  }, [l]), k = $e(() => r == null || $.length === 0 ? r : Gs(r, {
    operator: t,
    filters: $
  }, {
    caseSensitivity: s
  }), [r, $, t, s]);
  ke(() => {
    h != null && r != null && h(k ?? []);
  }, [k]);
  const f = (_) => e.find((u) => u.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ge.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ge.rows, role: "group", "aria-label": "Filter conditions", children: l.map((_, u) => {
      const y = f(_.property), N = i ? [kn[y.type ?? "string"]] : Vs, g = !wn.includes(_.operator), S = _.secondOperator != null;
      return /* @__PURE__ */ O(tr, { children: [
        /* @__PURE__ */ O("div", { className: Ge.row, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: Ge.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            gn,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: Ge.property,
              value: _.property,
              onChange: (x) => {
                const w = e.find(
                  (E) => E.name === x.target.value
                );
                d(_.id, {
                  property: x.target.value,
                  operator: kn[w?.type ?? "string"],
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
              value: _.operator,
              onChange: (x) => {
                const w = x.target.value;
                d(
                  _.id,
                  wn.includes(w) ? {
                    operator: w,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: w }
                );
              },
              options: N.map((x) => ({
                value: x,
                label: ms[x]
              }))
            }
          ),
          g ? /* @__PURE__ */ n(
            gs,
            {
              property: y,
              value: _.value,
              onChange: (x) => d(_.id, { value: x })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ge.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => b(_.id),
              children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
            }
          )
        ] }),
        g ? S ? /* @__PURE__ */ O(
          "div",
          {
            className: [Ge.row, Ge.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                gn,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: Ge.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (x) => d(_.id, {
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
                  value: _.secondOperator,
                  onChange: (x) => {
                    const w = x.target.value;
                    d(
                      _.id,
                      wn.includes(w) ? { secondOperator: w, secondValue: void 0 } : { secondOperator: w }
                    );
                  },
                  options: N.map((x) => ({
                    value: x,
                    label: ms[x]
                  }))
                }
              ),
              _.secondOperator == null || !wn.includes(_.secondOperator) ? /* @__PURE__ */ n(
                gs,
                {
                  property: y,
                  value: _.secondValue,
                  onChange: (x) => d(_.id, { secondValue: x })
                }
              ) : null,
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: Ge.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
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
              secondOperator: kn[y.type ?? "string"],
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
      r != null ? /* @__PURE__ */ O("span", { className: Ge.summary, "aria-live": "polite", children: [
        k?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const fa = "_pager_k78w3_1", ha = "_alignLeft_k78w3_10", pa = "_alignCenter_k78w3_14", ma = "_alignRight_k78w3_18", ga = "_alignJustify_k78w3_22", xa = "_summary_k78w3_26", ya = "_controls_k78w3_31", ba = "_button_k78w3_37", va = "_active_k78w3_73", ka = "_ellipsis_k78w3_85", wa = "_size_k78w3_91", lt = {
  pager: fa,
  alignLeft: ha,
  alignCenter: pa,
  alignRight: ma,
  alignJustify: ga,
  summary: xa,
  controls: ya,
  button: ba,
  active: va,
  ellipsis: ka,
  size: wa
};
function $a(e, t, s, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(s)).replace("{2}", String(o));
}
function xs(e, t) {
  return e.replace("{0}", String(t));
}
function Na(e, t, s) {
  if (t <= s)
    return Array.from({ length: t }, (r, a) => a + 1);
  const o = Math.floor(s / 2);
  let i = Math.max(1, e - o);
  const c = Math.min(t, i + s - 1);
  i = Math.max(1, c - s + 1);
  const h = [];
  for (let r = i; r <= c; r++) h.push(r);
  return i > 2 && h.unshift("ellipsis"), i > 1 && h.unshift(1), c < t - 1 && h.push("ellipsis"), c < t && h.push(t), h;
}
function Oa({
  count: e,
  pageSize: t,
  page: s,
  defaultPage: o = 1,
  pageSizeOptions: i,
  pageNumbersCount: c = 5,
  alwaysVisible: h = !1,
  horizontalAlign: r = "left",
  showPagingSummary: a,
  showPageSizeSelector: l = !0,
  pagingSummaryFormat: p = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: d,
  pageSizeText: v = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: $ = "Previous page",
  nextPageTitle: k = "Next page",
  lastPageTitle: f = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: y,
  onPageSizeChange: N,
  ariaLabel: g = "Pagination",
  className: S,
  visible: x = !0
}) {
  const w = s ?? o, [E, I] = X(w), C = s !== void 0, z = C ? w : E, m = Math.max(1, Math.ceil(e / t)), M = Math.min(Math.max(1, z), m), P = a ?? !0, j = h || m > 1, T = Na(M, m, c), F = H(
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
  ), V = r === "center" ? lt.alignCenter : r === "right" ? lt.alignRight : r === "justify" ? lt.alignJustify : lt.alignLeft, Z = {
    count: e,
    pageNumber: M,
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
  return x === !1 || !j ? null : /* @__PURE__ */ O(
    "nav",
    {
      className: [lt.pager, V, S].filter(Boolean).join(" "),
      "aria-label": g,
      children: [
        P && /* @__PURE__ */ n("span", { className: lt.summary, "aria-live": "polite", children: d ? d(Z) : $a(p, M, m, e) }),
        /* @__PURE__ */ O(
          "div",
          {
            className: lt.controls,
            role: "group",
            "aria-label": g,
            onKeyDown: Q,
            children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: lt.button,
                  disabled: M <= 1,
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
                  className: lt.button,
                  disabled: M <= 1,
                  onClick: () => F(M - 1),
                  "aria-label": $,
                  title: $,
                  children: "‹"
                }
              ),
              T.map(
                (K, te) => K === "ellipsis" ? /* @__PURE__ */ n("span", { className: lt.ellipsis, "aria-hidden": "true", children: "…" }, `e${te}`) : /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": K,
                    className: [lt.button, K === M ? lt.active : ""].filter(Boolean).join(" "),
                    "aria-current": K === M ? "page" : void 0,
                    "aria-label": xs(u, K),
                    title: xs(_, K),
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
                  className: lt.button,
                  disabled: M >= m,
                  onClick: () => F(M + 1),
                  "aria-label": k,
                  title: k,
                  children: "›"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: lt.button,
                  disabled: M >= m,
                  onClick: () => F(m),
                  "aria-label": f,
                  title: f,
                  children: "»"
                }
              )
            ]
          }
        ),
        l && i && i.length > 0 && /* @__PURE__ */ O("label", { className: lt.size, children: [
          /* @__PURE__ */ n("span", { children: v }),
          /* @__PURE__ */ n(
            "select",
            {
              value: t,
              onChange: (K) => N?.(Number(K.target.value)),
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
    Oa,
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
function Sa(e, t, s, o, i, c) {
  if (!t || !s) return e.map((a) => ({ type: "row", row: a }));
  const h = /* @__PURE__ */ new Map();
  e.forEach((a) => {
    const l = String(i(a, t) ?? ""), p = h.get(l);
    p ? p.push(a) : h.set(l, [a]);
  });
  const r = [];
  return h.forEach((a, l) => {
    const p = a[0], d = p != null ? i(p, t) : void 0;
    r.push({
      type: "group",
      group: {
        key: l,
        display: c(d),
        property: t,
        title: s.title ?? t,
        count: a.length
      }
    }), o.has(l) && a.forEach((v) => r.push({ type: "row", row: v }));
  }), r;
}
function Ln(e, t) {
  return e.property ?? `col-${t}`;
}
function za(e, t) {
  const s = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    s[i] = o === 0 ? "0px" : `${o}px`;
    const h = t[i] ?? c.width ?? "8rem";
    o += parseFloat(h);
  }), s;
}
function Da(e, t) {
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
function Ma(e, t, s = {}) {
  const o = e.find((c) => c.property === t), i = bs[(o ? bs.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : s.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function Ca(e, t) {
  return Yo(e, t);
}
function Ea(e, t, s) {
  const o = Math.max(1, Math.ceil(e.length / s)), i = Math.min(Math.max(1, t), o), c = (i - 1) * s;
  return {
    items: e.slice(c, c + s),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function Ia(e, t, s = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, a]) => ({
      property: r,
      operator: a.operator ?? "Contains",
      value: Da(
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
  ) : e, c = Ca(i, t.sorts);
  return {
    ...Ea(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function ja(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Aa = "_grid_a6ibk_1", Ta = "_toolbar_a6ibk_8", Ra = "_picker_a6ibk_13", La = "_pickerButton_a6ibk_17", Pa = "_pickerPanel_a6ibk_31", Ba = "_pickerItem_a6ibk_46", Fa = "_groupPanel_a6ibk_55", qa = "_groupPanelActive_a6ibk_66", Ha = "_groupPanelText_a6ibk_70", Ka = "_groupChip_a6ibk_74", Ua = "_groupRemove_a6ibk_85", Wa = "_groupRow_a6ibk_94", Va = "_groupCell_a6ibk_98", Xa = "_groupToggle_a6ibk_103", Ga = "_editRow_a6ibk_116", Ya = "_editCell_a6ibk_120", Za = "_editInput_a6ibk_125", Ja = "_commandCell_a6ibk_135", Qa = "_commandButton_a6ibk_141", el = "_data_a6ibk_156", tl = "_table_a6ibk_163", nl = "_header_a6ibk_169", sl = "_center_a6ibk_181", rl = "_right_a6ibk_185", ol = "_sortButton_a6ibk_189", al = "_sortIndicator_a6ibk_207", ll = "_sortIndex_a6ibk_211", il = "_cell_a6ibk_222", cl = "_clickable_a6ibk_236", dl = "_frozen_a6ibk_244", ul = "_selected_a6ibk_250", _l = "_resizeHandle_a6ibk_258", fl = "_filterCell_a6ibk_276", hl = "_filterSelect_a6ibk_284", pl = "_filterInput_a6ibk_294", ml = "_empty_a6ibk_305", gl = "_loading_a6ibk_311", xl = "_visuallyHidden_a6ibk_321", ge = {
  grid: Aa,
  toolbar: Ta,
  picker: Ra,
  pickerButton: La,
  pickerPanel: Pa,
  pickerItem: Ba,
  groupPanel: Fa,
  groupPanelActive: qa,
  groupPanelText: Ha,
  groupChip: Ka,
  groupRemove: Ua,
  groupRow: Wa,
  groupCell: Va,
  groupToggle: Xa,
  editRow: Ga,
  editCell: Ya,
  editInput: Za,
  commandCell: Ja,
  commandButton: Qa,
  data: el,
  table: tl,
  header: nl,
  center: sl,
  right: rl,
  sortButton: ol,
  sortIndicator: al,
  sortIndex: ll,
  cell: il,
  clickable: cl,
  frozen: dl,
  selected: ul,
  resizeHandle: _l,
  filterCell: fl,
  filterSelect: hl,
  filterInput: pl,
  empty: ml,
  loading: gl,
  visuallyHidden: xl
}, yl = {
  Ascending: "ascending",
  Descending: "descending"
};
function vs(e, t) {
  return e.filterable ?? t;
}
function bl(e, t) {
  return e.sortable ?? t;
}
function vl(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function T2({
  columns: e,
  rows: t,
  rowKey: s,
  allowSorting: o = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: h = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: l = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: v = 5,
  pagerPosition: b = "Bottom",
  showPagingSummary: $ = !0,
  showPageSizeSelector: k = !0,
  selectionMode: f = "None",
  selectedKeys: _,
  onSelectionChange: u,
  showColumnPicker: y = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: g = !1,
  allowColumnReorder: S = !1,
  allowGrouping: x = !1,
  groupPanelText: w = "Drag a column header here to group",
  groupExpanded: E = !0,
  editMode: I = "None",
  allowRowCreate: C = !1,
  onRowUpdate: z,
  onRowCreate: m,
  onRowDelete: M,
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
  ), [we, Be] = X({}), [ve, We] = X(!1), [xe, Ze] = X(null), [Ve, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, W] = X({}), D = ae(null), q = ae(null), ne = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((R, ce) => A.set(Ln(R, ce), R)), A;
  }, [e]), _e = $e(
    () => Y.filter((A) => le.has(A)).map((A) => ({ key: A, column: ne.get(A) })).filter(
      (A) => A.column != null
    ),
    [Y, le, ne]
  ), se = $e(
    () => za(_e, we),
    [_e, we]
  ), me = I !== "None" || M != null || C, Ne = $e(
    () => Ia(
      t,
      { sorts: Z, filters: K, pageNumber: oe, pageSize: L },
      {
        logicalOperator: a,
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
      a,
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
    () => Sa(
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
    A !== "" && Q(Ma(Z, A, { multi: i }));
  }, Se = (A, R) => {
    te((ce) => {
      const pe = new Map(ce);
      return pe.set(A, R), pe;
    }), ee(1);
  }, nt = (A) => {
    ie(A), ee(1);
  }, Vt = (A) => {
    if (f === "None") return;
    const R = s(A), ce = _ ?? [];
    let pe;
    f === "Single" ? pe = ce.length === 1 && ce[0] === R ? [] : [R] : pe = ce.includes(R) ? ce.filter((Ie) => Ie !== R) : [...ce, R], u?.(pe);
  }, Nt = (A) => {
    V?.(A);
  }, ze = (A, R, ce) => {
    D.current = { key: A, startX: R, startWidth: ce };
  }, Xe = (A) => {
    const R = D.current;
    if (!R) return;
    const ce = A - R.startX, pe = Math.max(48, R.startWidth + ce);
    Be((Ie) => ({ ...Ie, [R.key]: `${pe}px` }));
  }, vt = () => {
    D.current = null;
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
      z?.(A, R);
    }
    B();
  }, re = l && (b === "Top" || b === "TopAndBottom"), he = l && (b === "Bottom" || b === "TopAndBottom"), fe = h && e.some((A) => vs(A, h)), be = (A, R, ce) => A.render ? A.render(R, { index: 0 }) : ys($n(R, A.property), A.format), Te = (A) => {
    const R = [ge.cell];
    return A.align === "center" && R.push(ge.center), A.align === "right" && R.push(ge.right), A.frozen && R.push(ge.frozen), R.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, F].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ n(
      rs,
      {
        pageNumber: Ne.pageNumber,
        pageSize: Ne.pageSize,
        count: Ne.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: $,
        showPageSizeSelector: k,
        ariaLabel: he ? "Pagination (top)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    ),
    (x || C || y) && /* @__PURE__ */ O("div", { className: ge.toolbar, children: [
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
          children: xe ? /* @__PURE__ */ O("span", { className: ge.groupChip, children: [
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
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: w })
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
      y && /* @__PURE__ */ O("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => We((A) => !A),
            children: N
          }
        ),
        ve && /* @__PURE__ */ n(
          "div",
          {
            className: ge.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((A, R) => {
              const ce = Ln(A, R);
              return /* @__PURE__ */ O("label", { className: ge.pickerItem, children: [
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
              bt.map(({ key: A, column: R }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: we[A] ?? R.width,
                    minWidth: R.minWidth,
                    maxWidth: R.maxWidth
                  }
                },
                A
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ O("thead", { children: [
              /* @__PURE__ */ O("tr", { children: [
                bt.map(({ key: A, column: R }) => {
                  const ce = bl(R, o), pe = Z.find((Me) => Me.property === R.property), Ie = pe ? Z.indexOf(pe) + 1 : 0, je = R.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": ce && pe ? yl[pe.sortOrder] : "none",
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
                        ce ? /* @__PURE__ */ O(
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
                              const at = we[A] ?? R.width, St = at ? parseFloat(at) : 96;
                              ze(
                                A,
                                Me.clientX,
                                Number.isFinite(St) ? St : 96
                              );
                            },
                            onMouseMove: (Me) => {
                              D.current?.key === A && Xe(Me.clientX);
                            },
                            onMouseUp: vt,
                            onMouseLeave: () => {
                              D.current?.key === A && vt();
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
                return /* @__PURE__ */ O("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ O(
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
                      value: ce?.operator ?? ja(R.type ?? "string"),
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
            /* @__PURE__ */ O("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ O("tr", { className: ge.editRow, children: [
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
                me && /* @__PURE__ */ O("td", { className: ge.editCell, children: [
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
                          children: /* @__PURE__ */ O(
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
                const R = A.row, ce = s(R), pe = (_ ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ O(
                  "tr",
                  {
                    className: [
                      V || f !== "None" ? ge.clickable : "",
                      pe ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": f !== "None" ? pe : void 0,
                    onClick: V || f !== "None" ? (je) => {
                      vl(je.target) || (Nt(R), Vt(R));
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
                              onChange: (at) => W((St) => ({
                                ...St,
                                [Me.property]: Me.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${Me.title ?? Me.property} (edit)`
                            }
                          ) : be(Me, R)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(Ce, { children: [
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
                      ] }) : /* @__PURE__ */ O(Ce, { children: [
                        I !== "None" && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Lt(R),
                            children: "Edit"
                          }
                        ),
                        M && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => M(R),
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
        showSummary: $,
        showPageSizeSelector: k,
        ariaLabel: re ? "Pagination (bottom)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    )
  ] });
}
const kl = "_wrap_1e4xo_1", wl = "_grid_1e4xo_7", $l = "_stacked_1e4xo_13", Nl = "_item_1e4xo_19", Ol = "_empty_1e4xo_25", Nn = {
  wrap: kl,
  grid: wl,
  stacked: $l,
  item: Nl,
  empty: Ol
};
function R2({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: s,
  wrapItems: o = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: h,
  loadingTemplate: r,
  isLoading: a = !1,
  showPageSizeSelector: l = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [v, b] = X(1), [$, k] = X(t), f = e.length, _ = Math.max(1, Math.ceil(f / $)), u = Math.min(Math.max(1, v), _), y = $e(() => {
    const g = (u - 1) * $;
    return e.slice(g, g + $);
  }, [e, u, $]), N = o ? Nn.grid : Nn.stacked;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Nn.wrap, p].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        a && r != null ? r : f === 0 ? h ?? /* @__PURE__ */ n("div", { className: Nn.empty, children: c }) : /* @__PURE__ */ n("div", { className: N, children: y.map((g, S) => /* @__PURE__ */ n("div", { className: Nn.item, children: i ? i(g, S) : String(g) }, S)) }),
        /* @__PURE__ */ n(
          rs,
          {
            pageNumber: u,
            pageSize: $,
            count: f,
            pageSizeOptions: s,
            showPageSizeSelector: l,
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
const Sl = "_label_1qfpw_1", zl = {
  label: Sl
}, L2 = qe(function({ className: t, children: s, ...o }, i) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: i,
      className: [zl.label, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}), Dl = "_input_1xwnr_1", Ml = "_invalid_1xwnr_37", Cl = "_xs_1xwnr_44", El = "_sm_1xwnr_50", Il = "_md_1xwnr_56", jl = "_lg_1xwnr_62", Al = "_xl_1xwnr_68", Jn = {
  input: Dl,
  invalid: Ml,
  xs: Cl,
  sm: El,
  md: Il,
  lg: jl,
  xl: Al
}, P2 = qe(function({ size: t = "md", invalid: s = !1, className: o, visible: i = !0, ...c }, h) {
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
}), Tl = "_checkbox_ppe6g_1", Rl = {
  checkbox: Tl
}, B2 = qe(
  function({ className: t, ...s }, o) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [Rl.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), Ll = {
  switch: "_switch_luh7n_1"
}, Pl = qe(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [Ll.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Bl = "_trigger_fnpn4_1", Fl = "_tooltip_fnpn4_7", ql = "_top_fnpn4_34", Hl = "_right_fnpn4_40", Kl = "_bottom_fnpn4_46", Ul = "_left_fnpn4_52", Wl = "_arrow_fnpn4_58", Pn = {
  trigger: Bl,
  tooltip: Fl,
  "se-tooltip-in": "_se-tooltip-in_fnpn4_1",
  top: ql,
  right: Hl,
  bottom: Kl,
  left: Ul,
  arrow: Wl
};
function F2({
  content: e,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = Ye(), h = ae(null), [r, a] = X(!1), l = () => {
    h.current = window.setTimeout(() => a(!0), o);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), a(!1);
  };
  ke(() => {
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
  return /* @__PURE__ */ O(
    "span",
    {
      className: [Pn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: l,
      onMouseLeave: p,
      onFocus: l,
      onBlur: p,
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
const Vl = "_dialog_ox41c_1", Xl = "_sm_ox41c_72", Gl = "_resizable_ox41c_78", Yl = "_md_ox41c_81", Zl = "_lg_ox41c_85", Jl = "_header_ox41c_89", Ql = "_title_ox41c_99", ei = "_description_ox41c_106", ti = "_close_ox41c_113", ni = "_body_ox41c_143", si = "_footer_ox41c_155", Pt = {
  dialog: Vl,
  "se-dialog-in": "_se-dialog-in_ox41c_1",
  sm: Xl,
  resizable: Gl,
  md: Yl,
  lg: Zl,
  header: Jl,
  title: Ql,
  description: ei,
  close: ti,
  body: ni,
  footer: si
};
function q2({
  open: e,
  onClose: t,
  title: s,
  description: o,
  children: i,
  footer: c,
  size: h = "md",
  width: r,
  height: a,
  closeOnOverlayClick: l = !0,
  closeOnEsc: p = !0,
  resizable: d = !1,
  canClose: v,
  className: b
}) {
  const $ = ae(null), k = Ye(), f = Ye(), _ = ae(t);
  ke(() => {
    _.current = t;
  });
  const u = ae(v);
  ke(() => {
    u.current = v;
  });
  const y = ae(p);
  ke(() => {
    y.current = p;
  });
  const N = ae(!1), g = ae(!1), S = H(() => {
    if (N.current) return;
    const w = u.current?.();
    if (w instanceof Promise) {
      w.then((E) => {
        E && !N.current && (N.current = !0, _.current());
      });
      return;
    }
    w !== !1 && (N.current = !0, _.current());
  }, []), x = H(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    _.current();
  }, []);
  return ke(() => {
    const w = $.current;
    if (w)
      if (e && !w.open) {
        const E = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        w.showModal(), (w.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? w.querySelector("button"))?.focus();
        const C = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const z = (m) => {
          m.preventDefault(), y.current && S();
        };
        return w.addEventListener("cancel", z), () => {
          w.removeEventListener("cancel", z), document.body.style.overflow = C, E?.focus({ preventScroll: !0 });
        };
      } else !e && w.open && (g.current = N.current, N.current = !1, w.close());
  }, [e, S]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ O(
    "dialog",
    {
      ref: $,
      className: [
        Pt.dialog,
        Pt[h],
        d ? Pt.resizable : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: x,
      onClick: (w) => {
        w.target === $.current && l && S();
      },
      "aria-modal": "true",
      "aria-labelledby": s ? k : void 0,
      "aria-describedby": o ? f : void 0,
      children: [
        s && /* @__PURE__ */ O("header", { className: Pt.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: k, className: Pt.title, children: s }),
            o && /* @__PURE__ */ n("p", { id: f, className: Pt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Pt.close,
              onClick: () => {
                S();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: Pt.body, children: i }),
        c && /* @__PURE__ */ n("footer", { className: Pt.footer, children: c })
      ]
    }
  );
}
const ri = "_viewport_o7kje_1", oi = "_topLeft_o7kje_13", ai = "_topRight_o7kje_20", li = "_bottomLeft_o7kje_25", ii = "_toast_o7kje_30", ci = "_leaving_o7kje_61", di = "_info_o7kje_77", ui = "_success_o7kje_86", _i = "_warning_o7kje_95", fi = "_danger_o7kje_104", hi = "_content_o7kje_113", pi = "_title_o7kje_118", mi = "_description_o7kje_141", gi = "_dismiss_o7kje_148", xi = "_actions_o7kje_169", yi = "_action_o7kje_169", bi = "_cancel_o7kje_177", vi = "_progress_o7kje_215", pt = {
  viewport: ri,
  topLeft: oi,
  topRight: ai,
  bottomLeft: li,
  toast: ii,
  "se-toast-in": "_se-toast-in_o7kje_1",
  leaving: ci,
  "se-toast-out": "_se-toast-out_o7kje_1",
  info: di,
  success: ui,
  warning: _i,
  danger: fi,
  content: hi,
  title: pi,
  description: mi,
  dismiss: gi,
  actions: xi,
  action: yi,
  cancel: bi,
  progress: vi,
  "se-toast-progress": "_se-toast-progress_o7kje_1"
}, Ys = Us(null);
function H2() {
  const e = Ks(Ys);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const ki = 200, wi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function K2({
  children: e,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, h] = X([]), [r, a] = X(!1), l = ae([]), p = ae(/* @__PURE__ */ new Map()), d = ae(!1), v = ae(0), b = (z) => {
    d.current = z, a(z);
  }, $ = H((z) => {
    const m = p.current.get(z);
    m && (window.clearTimeout(m.timeoutId), m.remaining = Math.max(
      0,
      m.remaining - (Date.now() - m.startedAt)
    ));
  }, []), k = H((z) => {
    const m = p.current.get(z);
    m && (window.clearTimeout(m.timeoutId), p.current.delete(z));
  }, []), f = H(
    (z) => {
      k(z), h((m) => {
        const M = m.filter((P) => P.id !== z);
        return l.current = M, M;
      });
    },
    [k]
  ), _ = H(
    (z) => {
      const m = l.current.find((M) => M.id === z);
      !m || m.leaving || (m.onAutoClose?.(), f(z));
    },
    [f]
  ), u = H(
    (z) => {
      const m = p.current.get(z);
      !m || m.remaining <= 0 || (m.startedAt = Date.now(), m.timeoutId = window.setTimeout(() => _(z), m.remaining));
    },
    [_]
  ), y = H(() => {
    d.current || p.current.forEach((z, m) => $(m)), b(!0);
  }, [$]), N = H(() => {
    p.current.forEach((z, m) => u(m)), b(!1);
  }, [u]);
  ke(() => {
    if (!o) return;
    const z = () => {
      document.hidden ? y() : N();
    };
    return document.addEventListener("visibilitychange", z), () => document.removeEventListener("visibilitychange", z);
  }, [o, y, N]);
  const g = H(
    (z) => {
      const m = l.current.find((M) => M.id === z);
      !m || m.leaving || (m.onDismiss?.(), h((M) => {
        const P = M.map(
          (j) => j.id === z ? { ...j, leaving: !0 } : j
        );
        return l.current = P, P;
      }), window.setTimeout(() => f(z), ki));
    },
    [f]
  ), S = H(
    (z) => {
      if (z.durationMs <= 0) return;
      const m = {
        remaining: z.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(z.id, m), d.current || u(z.id);
    },
    [u]
  ), x = H(
    (z) => {
      const m = l.current.find((P) => P.id === z.id), M = {
        id: z.id ?? ++v.current,
        title: z.title,
        description: z.description,
        severity: z.severity ?? "info",
        durationMs: z.durationMs ?? t,
        action: z.action,
        cancel: z.cancel,
        dismissible: z.dismissible ?? !0,
        closeOnClick: z.closeOnClick ?? !1,
        showProgress: z.showProgress ?? !1,
        position: z.position ?? s,
        onDismiss: z.onDismiss,
        onAutoClose: z.onAutoClose
      };
      h((P) => {
        const j = m ? P.map(
          (T) => T.id === M.id ? { ...M, leaving: !1 } : T
        ) : [...P, M];
        return l.current = j, j;
      }), m && k(M.id), S(M);
    },
    [t, s, S, k]
  ), w = $e(() => ({ toast: x }), [x]), E = $e(
    () => Array.from(/* @__PURE__ */ new Set([s, ...c.map((z) => z.position)])),
    [s, c]
  ), I = o ? y : void 0, C = o ? N : void 0;
  return /* @__PURE__ */ O(Ys.Provider, { value: w, children: [
    e,
    E.map((z) => /* @__PURE__ */ n(
      "div",
      {
        className: [pt.viewport, pt[wi[z]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: C,
        children: c.filter((m) => m.position === z).map((m) => /* @__PURE__ */ O(
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
              /* @__PURE__ */ O("div", { className: pt.content, children: [
                /* @__PURE__ */ n("div", { className: pt.title, children: m.title }),
                m.description && /* @__PURE__ */ n("div", { className: pt.description, children: m.description }),
                (m.action || m.cancel) && /* @__PURE__ */ O("div", { className: pt.actions, children: [
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
      z
    ))
  ] });
}
const $i = "_alert_12gyw_1", Ni = "_xs_12gyw_28", Oi = "_sm_12gyw_38", Si = "_lg_12gyw_48", zi = "_xl_12gyw_58", Di = "_primary_12gyw_69", Mi = "_secondary_12gyw_74", Ci = "_light_12gyw_79", Ei = "_base_12gyw_84", Ii = "_dark_12gyw_89", ji = "_info_12gyw_94", Ai = "_success_12gyw_99", Ti = "_warning_12gyw_104", Ri = "_danger_12gyw_109", Li = "_flat_12gyw_116", Pi = "_outlined_12gyw_123", Bi = "_filled_12gyw_132", Fi = "_text_12gyw_139", qi = "_icon_12gyw_181", Hi = "_content_12gyw_192", Ki = "_title_12gyw_197", Ui = "_body_12gyw_203", Wi = "_dismiss_12gyw_209", Et = {
  alert: $i,
  xs: Ni,
  sm: Oi,
  lg: Si,
  xl: zi,
  primary: Di,
  secondary: Mi,
  light: Ci,
  base: Ei,
  dark: Ii,
  info: ji,
  success: Ai,
  warning: Ti,
  danger: Ri,
  flat: Li,
  outlined: Pi,
  filled: Bi,
  text: Fi,
  icon: qi,
  content: Hi,
  title: Ki,
  body: Ui,
  dismiss: Wi,
  "shade-lighter": "_shade-lighter_12gyw_451",
  "shade-light": "_shade-light_12gyw_451",
  "shade-dark": "_shade-dark_12gyw_461",
  "shade-darker": "_shade-darker_12gyw_465"
}, Vi = {
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
function U2({
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
  dismissible: a = !0,
  onDismiss: l,
  visible: p,
  onVisibleChange: d,
  className: v,
  ...b
}) {
  const [$, k] = X(!1);
  if (p === !1 || p === void 0 && $)
    return null;
  const f = () => {
    p === void 0 && k(!0), l?.(), d?.(!1);
  }, _ = e, u = ds(t, "filled"), y = s && s !== "default" ? `shade-${s}` : null, N = c ?? (h ? /* @__PURE__ */ n(De, { name: Vi[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...b,
      className: [
        Et.alert,
        Et[_],
        Et[u],
        y ? Et[y] : null,
        Et[o],
        v
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          i && /* @__PURE__ */ n("div", { className: Et.title, children: i }),
          r && /* @__PURE__ */ n("div", { className: Et.body, children: r })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: f,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(De, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Xi = "_skeleton_7ssmn_1", Gi = "_text_7ssmn_35", Yi = "_circle_7ssmn_40", Zi = "_rect_7ssmn_44", ks = {
  skeleton: Xi,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_7ssmn_1",
  text: Gi,
  circle: Yi,
  rect: Zi
};
function W2({
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
const Ji = "_row_tkkv2_1", Qi = "_gapXs_tkkv2_12", ec = "_gapSm_tkkv2_17", tc = "_gapMd_tkkv2_22", nc = "_gapLg_tkkv2_27", sc = "_gapXl_tkkv2_32", rc = "_start_tkkv2_37", oc = "_center_tkkv2_41", ac = "_end_tkkv2_45", lc = "_stretch_tkkv2_49", ic = "_baseline_tkkv2_53", cc = "_noWrap_tkkv2_109", dc = "_wrapReverse_tkkv2_113", uc = "_gapRowXs_tkkv2_117", _c = "_gapRowSm_tkkv2_121", fc = "_gapRowMd_tkkv2_125", hc = "_gapRowLg_tkkv2_129", pc = "_gapRowXl_tkkv2_133", ln = {
  row: Ji,
  gapXs: Qi,
  gapSm: ec,
  gapMd: tc,
  gapLg: nc,
  gapXl: sc,
  start: rc,
  center: oc,
  end: ac,
  stretch: lc,
  baseline: ic,
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
  noWrap: cc,
  wrapReverse: dc,
  gapRowXs: uc,
  gapRowSm: _c,
  gapRowMd: fc,
  gapRowLg: hc,
  gapRowXl: pc
}, mc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, gc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function xc(e) {
  return typeof e != "string" ? null : mc[e] ?? null;
}
function yc(e) {
  return typeof e != "string" ? null : gc[e] ?? null;
}
function ws(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function V2({
  gap: e,
  rowGap: t,
  align: s = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: h,
  ...r
}) {
  const a = xc(e), l = yc(t), p = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, d = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...p ? { gap: p, "--dx-col-gap": p } : {},
    ...t != null && !l ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...h
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
const bc = "_column_sh0ss_1", vc = "_Size1_sh0ss_15", kc = "_Size2_sh0ss_24", wc = "_Size3_sh0ss_33", $c = "_Size4_sh0ss_42", Nc = "_Size5_sh0ss_51", Oc = "_Size6_sh0ss_60", Sc = "_Size7_sh0ss_69", zc = "_Size8_sh0ss_78", Dc = "_Size9_sh0ss_87", Mc = "_Size10_sh0ss_96", Cc = "_Size11_sh0ss_105", Ec = "_Size12_sh0ss_114", Ic = "_Offset0_sh0ss_119", jc = "_Offset1_sh0ss_122", Ac = "_Offset2_sh0ss_127", Tc = "_Offset3_sh0ss_132", Rc = "_Offset4_sh0ss_137", Lc = "_Offset5_sh0ss_142", Pc = "_Offset6_sh0ss_147", Bc = "_Offset7_sh0ss_152", Fc = "_Offset8_sh0ss_157", qc = "_Offset9_sh0ss_162", Hc = "_Offset10_sh0ss_167", Kc = "_Offset11_sh0ss_172", Uc = "_Offset12_sh0ss_177", Wc = "_OrderFirst_sh0ss_182", Vc = "_OrderLast_sh0ss_185", Xc = "_Order0_sh0ss_188", Gc = "_Order1_sh0ss_191", Yc = "_Order2_sh0ss_194", Zc = "_Order3_sh0ss_197", Jc = "_Order4_sh0ss_200", Qc = "_Order5_sh0ss_203", ed = "_Order6_sh0ss_206", td = "_Order7_sh0ss_209", nd = "_Order8_sh0ss_212", sd = "_Order9_sh0ss_215", rd = "_Order10_sh0ss_218", od = "_Order11_sh0ss_221", ad = "_Order12_sh0ss_224", ld = "_xsSize1_sh0ss_229", id = "_xsSize2_sh0ss_238", cd = "_xsSize3_sh0ss_247", dd = "_xsSize4_sh0ss_256", ud = "_xsSize5_sh0ss_265", _d = "_xsSize6_sh0ss_274", fd = "_xsSize7_sh0ss_283", hd = "_xsSize8_sh0ss_292", pd = "_xsSize9_sh0ss_301", md = "_xsSize10_sh0ss_310", gd = "_xsSize11_sh0ss_321", xd = "_xsSize12_sh0ss_332", yd = "_xsOffset0_sh0ss_337", bd = "_xsOffset1_sh0ss_340", vd = "_xsOffset2_sh0ss_345", kd = "_xsOffset3_sh0ss_350", wd = "_xsOffset4_sh0ss_355", $d = "_xsOffset5_sh0ss_360", Nd = "_xsOffset6_sh0ss_365", Od = "_xsOffset7_sh0ss_370", Sd = "_xsOffset8_sh0ss_375", zd = "_xsOffset9_sh0ss_380", Dd = "_xsOffset10_sh0ss_385", Md = "_xsOffset11_sh0ss_391", Cd = "_xsOffset12_sh0ss_397", Ed = "_xsOrderFirst_sh0ss_403", Id = "_xsOrderLast_sh0ss_406", jd = "_xsOrder0_sh0ss_409", Ad = "_xsOrder1_sh0ss_412", Td = "_xsOrder2_sh0ss_415", Rd = "_xsOrder3_sh0ss_418", Ld = "_xsOrder4_sh0ss_421", Pd = "_xsOrder5_sh0ss_424", Bd = "_xsOrder6_sh0ss_427", Fd = "_xsOrder7_sh0ss_430", qd = "_xsOrder8_sh0ss_433", Hd = "_xsOrder9_sh0ss_436", Kd = "_xsOrder10_sh0ss_439", Ud = "_xsOrder11_sh0ss_442", Wd = "_xsOrder12_sh0ss_445", Vd = "_smSize1_sh0ss_451", Xd = "_smSize2_sh0ss_460", Gd = "_smSize3_sh0ss_469", Yd = "_smSize4_sh0ss_478", Zd = "_smSize5_sh0ss_487", Jd = "_smSize6_sh0ss_496", Qd = "_smSize7_sh0ss_505", eu = "_smSize8_sh0ss_514", tu = "_smSize9_sh0ss_523", nu = "_smSize10_sh0ss_532", su = "_smSize11_sh0ss_543", ru = "_smSize12_sh0ss_554", ou = "_smOffset0_sh0ss_559", au = "_smOffset1_sh0ss_562", lu = "_smOffset2_sh0ss_567", iu = "_smOffset3_sh0ss_572", cu = "_smOffset4_sh0ss_577", du = "_smOffset5_sh0ss_582", uu = "_smOffset6_sh0ss_587", _u = "_smOffset7_sh0ss_592", fu = "_smOffset8_sh0ss_597", hu = "_smOffset9_sh0ss_602", pu = "_smOffset10_sh0ss_607", mu = "_smOffset11_sh0ss_613", gu = "_smOffset12_sh0ss_619", xu = "_smOrderFirst_sh0ss_625", yu = "_smOrderLast_sh0ss_628", bu = "_smOrder0_sh0ss_631", vu = "_smOrder1_sh0ss_634", ku = "_smOrder2_sh0ss_637", wu = "_smOrder3_sh0ss_640", $u = "_smOrder4_sh0ss_643", Nu = "_smOrder5_sh0ss_646", Ou = "_smOrder6_sh0ss_649", Su = "_smOrder7_sh0ss_652", zu = "_smOrder8_sh0ss_655", Du = "_smOrder9_sh0ss_658", Mu = "_smOrder10_sh0ss_661", Cu = "_smOrder11_sh0ss_664", Eu = "_smOrder12_sh0ss_667", Iu = "_mdSize1_sh0ss_673", ju = "_mdSize2_sh0ss_682", Au = "_mdSize3_sh0ss_691", Tu = "_mdSize4_sh0ss_700", Ru = "_mdSize5_sh0ss_709", Lu = "_mdSize6_sh0ss_718", Pu = "_mdSize7_sh0ss_727", Bu = "_mdSize8_sh0ss_736", Fu = "_mdSize9_sh0ss_745", qu = "_mdSize10_sh0ss_754", Hu = "_mdSize11_sh0ss_765", Ku = "_mdSize12_sh0ss_776", Uu = "_mdOffset0_sh0ss_781", Wu = "_mdOffset1_sh0ss_784", Vu = "_mdOffset2_sh0ss_789", Xu = "_mdOffset3_sh0ss_794", Gu = "_mdOffset4_sh0ss_799", Yu = "_mdOffset5_sh0ss_804", Zu = "_mdOffset6_sh0ss_809", Ju = "_mdOffset7_sh0ss_814", Qu = "_mdOffset8_sh0ss_819", e_ = "_mdOffset9_sh0ss_824", t_ = "_mdOffset10_sh0ss_829", n_ = "_mdOffset11_sh0ss_835", s_ = "_mdOffset12_sh0ss_841", r_ = "_mdOrderFirst_sh0ss_847", o_ = "_mdOrderLast_sh0ss_850", a_ = "_mdOrder0_sh0ss_853", l_ = "_mdOrder1_sh0ss_856", i_ = "_mdOrder2_sh0ss_859", c_ = "_mdOrder3_sh0ss_862", d_ = "_mdOrder4_sh0ss_865", u_ = "_mdOrder5_sh0ss_868", __ = "_mdOrder6_sh0ss_871", f_ = "_mdOrder7_sh0ss_874", h_ = "_mdOrder8_sh0ss_877", p_ = "_mdOrder9_sh0ss_880", m_ = "_mdOrder10_sh0ss_883", g_ = "_mdOrder11_sh0ss_886", x_ = "_mdOrder12_sh0ss_889", y_ = "_lgSize1_sh0ss_895", b_ = "_lgSize2_sh0ss_904", v_ = "_lgSize3_sh0ss_913", k_ = "_lgSize4_sh0ss_922", w_ = "_lgSize5_sh0ss_931", $_ = "_lgSize6_sh0ss_940", N_ = "_lgSize7_sh0ss_949", O_ = "_lgSize8_sh0ss_958", S_ = "_lgSize9_sh0ss_967", z_ = "_lgSize10_sh0ss_976", D_ = "_lgSize11_sh0ss_987", M_ = "_lgSize12_sh0ss_998", C_ = "_lgOffset0_sh0ss_1003", E_ = "_lgOffset1_sh0ss_1006", I_ = "_lgOffset2_sh0ss_1011", j_ = "_lgOffset3_sh0ss_1016", A_ = "_lgOffset4_sh0ss_1021", T_ = "_lgOffset5_sh0ss_1026", R_ = "_lgOffset6_sh0ss_1031", L_ = "_lgOffset7_sh0ss_1036", P_ = "_lgOffset8_sh0ss_1041", B_ = "_lgOffset9_sh0ss_1046", F_ = "_lgOffset10_sh0ss_1051", q_ = "_lgOffset11_sh0ss_1057", H_ = "_lgOffset12_sh0ss_1063", K_ = "_lgOrderFirst_sh0ss_1069", U_ = "_lgOrderLast_sh0ss_1072", W_ = "_lgOrder0_sh0ss_1075", V_ = "_lgOrder1_sh0ss_1078", X_ = "_lgOrder2_sh0ss_1081", G_ = "_lgOrder3_sh0ss_1084", Y_ = "_lgOrder4_sh0ss_1087", Z_ = "_lgOrder5_sh0ss_1090", J_ = "_lgOrder6_sh0ss_1093", Q_ = "_lgOrder7_sh0ss_1096", ef = "_lgOrder8_sh0ss_1099", tf = "_lgOrder9_sh0ss_1102", nf = "_lgOrder10_sh0ss_1105", sf = "_lgOrder11_sh0ss_1108", rf = "_lgOrder12_sh0ss_1111", of = "_xlSize1_sh0ss_1117", af = "_xlSize2_sh0ss_1126", lf = "_xlSize3_sh0ss_1135", cf = "_xlSize4_sh0ss_1144", df = "_xlSize5_sh0ss_1153", uf = "_xlSize6_sh0ss_1162", _f = "_xlSize7_sh0ss_1171", ff = "_xlSize8_sh0ss_1180", hf = "_xlSize9_sh0ss_1189", pf = "_xlSize10_sh0ss_1198", mf = "_xlSize11_sh0ss_1209", gf = "_xlSize12_sh0ss_1220", xf = "_xlOffset0_sh0ss_1225", yf = "_xlOffset1_sh0ss_1228", bf = "_xlOffset2_sh0ss_1233", vf = "_xlOffset3_sh0ss_1238", kf = "_xlOffset4_sh0ss_1243", wf = "_xlOffset5_sh0ss_1248", $f = "_xlOffset6_sh0ss_1253", Nf = "_xlOffset7_sh0ss_1258", Of = "_xlOffset8_sh0ss_1263", Sf = "_xlOffset9_sh0ss_1268", zf = "_xlOffset10_sh0ss_1273", Df = "_xlOffset11_sh0ss_1279", Mf = "_xlOffset12_sh0ss_1285", Cf = "_xlOrderFirst_sh0ss_1291", Ef = "_xlOrderLast_sh0ss_1294", If = "_xlOrder0_sh0ss_1297", jf = "_xlOrder1_sh0ss_1300", Af = "_xlOrder2_sh0ss_1303", Tf = "_xlOrder3_sh0ss_1306", Rf = "_xlOrder4_sh0ss_1309", Lf = "_xlOrder5_sh0ss_1312", Pf = "_xlOrder6_sh0ss_1315", Bf = "_xlOrder7_sh0ss_1318", Ff = "_xlOrder8_sh0ss_1321", qf = "_xlOrder9_sh0ss_1324", Hf = "_xlOrder10_sh0ss_1327", Kf = "_xlOrder11_sh0ss_1330", Uf = "_xlOrder12_sh0ss_1333", Wf = "_xxSize1_sh0ss_1339", Vf = "_xxSize2_sh0ss_1348", Xf = "_xxSize3_sh0ss_1357", Gf = "_xxSize4_sh0ss_1366", Yf = "_xxSize5_sh0ss_1375", Zf = "_xxSize6_sh0ss_1384", Jf = "_xxSize7_sh0ss_1393", Qf = "_xxSize8_sh0ss_1402", e1 = "_xxSize9_sh0ss_1411", t1 = "_xxSize10_sh0ss_1420", n1 = "_xxSize11_sh0ss_1431", s1 = "_xxSize12_sh0ss_1442", r1 = "_xxOffset0_sh0ss_1447", o1 = "_xxOffset1_sh0ss_1450", a1 = "_xxOffset2_sh0ss_1455", l1 = "_xxOffset3_sh0ss_1460", i1 = "_xxOffset4_sh0ss_1465", c1 = "_xxOffset5_sh0ss_1470", d1 = "_xxOffset6_sh0ss_1475", u1 = "_xxOffset7_sh0ss_1480", _1 = "_xxOffset8_sh0ss_1485", f1 = "_xxOffset9_sh0ss_1490", h1 = "_xxOffset10_sh0ss_1495", p1 = "_xxOffset11_sh0ss_1501", m1 = "_xxOffset12_sh0ss_1507", g1 = "_xxOrderFirst_sh0ss_1513", x1 = "_xxOrderLast_sh0ss_1516", y1 = "_xxOrder0_sh0ss_1519", b1 = "_xxOrder1_sh0ss_1522", v1 = "_xxOrder2_sh0ss_1525", k1 = "_xxOrder3_sh0ss_1528", w1 = "_xxOrder4_sh0ss_1531", $1 = "_xxOrder5_sh0ss_1534", N1 = "_xxOrder6_sh0ss_1537", O1 = "_xxOrder7_sh0ss_1540", S1 = "_xxOrder8_sh0ss_1543", z1 = "_xxOrder9_sh0ss_1546", D1 = "_xxOrder10_sh0ss_1549", M1 = "_xxOrder11_sh0ss_1552", C1 = "_xxOrder12_sh0ss_1555", Bn = {
  column: bc,
  Size1: vc,
  Size2: kc,
  Size3: wc,
  Size4: $c,
  Size5: Nc,
  Size6: Oc,
  Size7: Sc,
  Size8: zc,
  Size9: Dc,
  Size10: Mc,
  Size11: Cc,
  Size12: Ec,
  Offset0: Ic,
  Offset1: jc,
  Offset2: Ac,
  Offset3: Tc,
  Offset4: Rc,
  Offset5: Lc,
  Offset6: Pc,
  Offset7: Bc,
  Offset8: Fc,
  Offset9: qc,
  Offset10: Hc,
  Offset11: Kc,
  Offset12: Uc,
  OrderFirst: Wc,
  OrderLast: Vc,
  Order0: Xc,
  Order1: Gc,
  Order2: Yc,
  Order3: Zc,
  Order4: Jc,
  Order5: Qc,
  Order6: ed,
  Order7: td,
  Order8: nd,
  Order9: sd,
  Order10: rd,
  Order11: od,
  Order12: ad,
  xsSize1: ld,
  xsSize2: id,
  xsSize3: cd,
  xsSize4: dd,
  xsSize5: ud,
  xsSize6: _d,
  xsSize7: fd,
  xsSize8: hd,
  xsSize9: pd,
  xsSize10: md,
  xsSize11: gd,
  xsSize12: xd,
  xsOffset0: yd,
  xsOffset1: bd,
  xsOffset2: vd,
  xsOffset3: kd,
  xsOffset4: wd,
  xsOffset5: $d,
  xsOffset6: Nd,
  xsOffset7: Od,
  xsOffset8: Sd,
  xsOffset9: zd,
  xsOffset10: Dd,
  xsOffset11: Md,
  xsOffset12: Cd,
  xsOrderFirst: Ed,
  xsOrderLast: Id,
  xsOrder0: jd,
  xsOrder1: Ad,
  xsOrder2: Td,
  xsOrder3: Rd,
  xsOrder4: Ld,
  xsOrder5: Pd,
  xsOrder6: Bd,
  xsOrder7: Fd,
  xsOrder8: qd,
  xsOrder9: Hd,
  xsOrder10: Kd,
  xsOrder11: Ud,
  xsOrder12: Wd,
  smSize1: Vd,
  smSize2: Xd,
  smSize3: Gd,
  smSize4: Yd,
  smSize5: Zd,
  smSize6: Jd,
  smSize7: Qd,
  smSize8: eu,
  smSize9: tu,
  smSize10: nu,
  smSize11: su,
  smSize12: ru,
  smOffset0: ou,
  smOffset1: au,
  smOffset2: lu,
  smOffset3: iu,
  smOffset4: cu,
  smOffset5: du,
  smOffset6: uu,
  smOffset7: _u,
  smOffset8: fu,
  smOffset9: hu,
  smOffset10: pu,
  smOffset11: mu,
  smOffset12: gu,
  smOrderFirst: xu,
  smOrderLast: yu,
  smOrder0: bu,
  smOrder1: vu,
  smOrder2: ku,
  smOrder3: wu,
  smOrder4: $u,
  smOrder5: Nu,
  smOrder6: Ou,
  smOrder7: Su,
  smOrder8: zu,
  smOrder9: Du,
  smOrder10: Mu,
  smOrder11: Cu,
  smOrder12: Eu,
  mdSize1: Iu,
  mdSize2: ju,
  mdSize3: Au,
  mdSize4: Tu,
  mdSize5: Ru,
  mdSize6: Lu,
  mdSize7: Pu,
  mdSize8: Bu,
  mdSize9: Fu,
  mdSize10: qu,
  mdSize11: Hu,
  mdSize12: Ku,
  mdOffset0: Uu,
  mdOffset1: Wu,
  mdOffset2: Vu,
  mdOffset3: Xu,
  mdOffset4: Gu,
  mdOffset5: Yu,
  mdOffset6: Zu,
  mdOffset7: Ju,
  mdOffset8: Qu,
  mdOffset9: e_,
  mdOffset10: t_,
  mdOffset11: n_,
  mdOffset12: s_,
  mdOrderFirst: r_,
  mdOrderLast: o_,
  mdOrder0: a_,
  mdOrder1: l_,
  mdOrder2: i_,
  mdOrder3: c_,
  mdOrder4: d_,
  mdOrder5: u_,
  mdOrder6: __,
  mdOrder7: f_,
  mdOrder8: h_,
  mdOrder9: p_,
  mdOrder10: m_,
  mdOrder11: g_,
  mdOrder12: x_,
  lgSize1: y_,
  lgSize2: b_,
  lgSize3: v_,
  lgSize4: k_,
  lgSize5: w_,
  lgSize6: $_,
  lgSize7: N_,
  lgSize8: O_,
  lgSize9: S_,
  lgSize10: z_,
  lgSize11: D_,
  lgSize12: M_,
  lgOffset0: C_,
  lgOffset1: E_,
  lgOffset2: I_,
  lgOffset3: j_,
  lgOffset4: A_,
  lgOffset5: T_,
  lgOffset6: R_,
  lgOffset7: L_,
  lgOffset8: P_,
  lgOffset9: B_,
  lgOffset10: F_,
  lgOffset11: q_,
  lgOffset12: H_,
  lgOrderFirst: K_,
  lgOrderLast: U_,
  lgOrder0: W_,
  lgOrder1: V_,
  lgOrder2: X_,
  lgOrder3: G_,
  lgOrder4: Y_,
  lgOrder5: Z_,
  lgOrder6: J_,
  lgOrder7: Q_,
  lgOrder8: ef,
  lgOrder9: tf,
  lgOrder10: nf,
  lgOrder11: sf,
  lgOrder12: rf,
  xlSize1: of,
  xlSize2: af,
  xlSize3: lf,
  xlSize4: cf,
  xlSize5: df,
  xlSize6: uf,
  xlSize7: _f,
  xlSize8: ff,
  xlSize9: hf,
  xlSize10: pf,
  xlSize11: mf,
  xlSize12: gf,
  xlOffset0: xf,
  xlOffset1: yf,
  xlOffset2: bf,
  xlOffset3: vf,
  xlOffset4: kf,
  xlOffset5: wf,
  xlOffset6: $f,
  xlOffset7: Nf,
  xlOffset8: Of,
  xlOffset9: Sf,
  xlOffset10: zf,
  xlOffset11: Df,
  xlOffset12: Mf,
  xlOrderFirst: Cf,
  xlOrderLast: Ef,
  xlOrder0: If,
  xlOrder1: jf,
  xlOrder2: Af,
  xlOrder3: Tf,
  xlOrder4: Rf,
  xlOrder5: Lf,
  xlOrder6: Pf,
  xlOrder7: Bf,
  xlOrder8: Ff,
  xlOrder9: qf,
  xlOrder10: Hf,
  xlOrder11: Kf,
  xlOrder12: Uf,
  xxSize1: Wf,
  xxSize2: Vf,
  xxSize3: Xf,
  xxSize4: Gf,
  xxSize5: Yf,
  xxSize6: Zf,
  xxSize7: Jf,
  xxSize8: Qf,
  xxSize9: e1,
  xxSize10: t1,
  xxSize11: n1,
  xxSize12: s1,
  xxOffset0: r1,
  xxOffset1: o1,
  xxOffset2: a1,
  xxOffset3: l1,
  xxOffset4: i1,
  xxOffset5: c1,
  xxOffset6: d1,
  xxOffset7: u1,
  xxOffset8: _1,
  xxOffset9: f1,
  xxOffset10: h1,
  xxOffset11: p1,
  xxOffset12: m1,
  xxOrderFirst: g1,
  xxOrderLast: x1,
  xxOrder0: y1,
  xxOrder1: b1,
  xxOrder2: v1,
  xxOrder3: k1,
  xxOrder4: w1,
  xxOrder5: $1,
  xxOrder6: N1,
  xxOrder7: O1,
  xxOrder8: S1,
  xxOrder9: z1,
  xxOrder10: D1,
  xxOrder11: M1,
  xxOrder12: C1
}, E1 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function I1(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function j1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function A1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function T1(e, t, s) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (A1(s, t), `${e}Order${t}`);
}
function X2({ className: e, style: t, ...s }) {
  const o = [Bn.column], i = { ...t };
  for (const [C, z, m, M] of E1) {
    const P = s[z], j = s[m], T = s[M];
    if (P != null) {
      I1(z, P);
      const F = Bn[`${C}Size${P}`];
      F && o.push(F);
    }
    if (j != null) {
      j1(m, j);
      const F = Bn[`${C}Offset${j}`];
      F && o.push(F);
    }
    if (T != null) {
      const F = Bn[T1(C, T, M)];
      F && o.push(F);
    }
  }
  const {
    size: c,
    offset: h,
    sizeXs: r,
    offsetXs: a,
    sizeSm: l,
    offsetSm: p,
    sizeMd: d,
    offsetMd: v,
    sizeLg: b,
    offsetLg: $,
    sizeXl: k,
    offsetXl: f,
    sizeXx: _,
    offsetXx: u,
    order: y,
    orderXs: N,
    orderSm: g,
    orderMd: S,
    orderLg: x,
    orderXl: w,
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
const R1 = "_stack_1yc1g_1", L1 = "_gapXs_1yc1g_29", P1 = "_gapSm_1yc1g_33", B1 = "_gapMd_1yc1g_37", F1 = "_gapLg_1yc1g_41", q1 = "_gapXl_1yc1g_45", cn = {
  stack: R1,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: L1,
  gapSm: P1,
  gapMd: B1,
  gapLg: F1,
  gapXl: q1,
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
}, H1 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function K1(e) {
  return typeof e != "string" ? null : H1[e] ?? null;
}
function $s(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function G2({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: s = !0,
  gap: o = "sm",
  align: i,
  justify: c,
  className: h,
  style: r,
  ...a
}) {
  const l = K1(o), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !l ? { gap: typeof o == "number" ? `${o}px` : o } : {},
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
        l ? cn[l] : null,
        h
      ].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const U1 = "_layout_fxvw1_1", W1 = "_row_fxvw1_7", V1 = "_grid_fxvw1_21", X1 = "_gridRight_fxvw1_27", G1 = "_gridHeader_fxvw1_31", Y1 = "_gridFooter_fxvw1_36", Z1 = "_gridContents_fxvw1_41", J1 = "_gridBody_fxvw1_45", Bt = {
  layout: U1,
  row: W1,
  grid: V1,
  gridRight: X1,
  gridHeader: G1,
  gridFooter: Y1,
  gridContents: Z1,
  gridBody: J1
}, Q1 = "_footer_1thaw_1", eh = "_sticky_1thaw_9", Ns = {
  footer: Q1,
  sticky: eh
};
function th({
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
const nh = "_header_wh9gi_1", sh = "_sticky_wh9gi_9", Os = {
  header: nh,
  sticky: sh
};
function rh({
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
const oh = "_sidebar_12teb_1", ah = "_left_12teb_9", lh = "_right_12teb_13", ih = "_start_12teb_18", ch = "_end_12teb_22", dh = "_fullHeight_12teb_28", uh = "_collapsed_12teb_32", _h = "_responsive_12teb_40", fh = "_overlay_12teb_48", hh = "_mask_12teb_76", en = {
  sidebar: oh,
  left: ah,
  right: lh,
  start: ih,
  end: ch,
  fullHeight: dh,
  collapsed: uh,
  responsive: _h,
  overlay: fh,
  mask: hh
};
function ph({
  position: e = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  fullHeight: i = !1,
  onClose: c,
  className: h,
  children: r,
  ...a
}) {
  return ke(() => {
    if (!o || !t || c == null) return;
    const l = (p) => {
      p.key === "Escape" && c();
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
          h
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: r
      }
    )
  ] });
}
function Y2(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(Ce, { children: e.children });
  const { className: t, children: s, ...o } = e, i = [], c = [], h = [], r = [], a = [], l = [];
  nr.forEach(s, (v) => {
    if (!Tn(v)) {
      h.push(v);
      return;
    }
    if (v.type === rh)
      i.push(v);
    else if (v.type === th)
      c.push(v);
    else if (v.type === ph) {
      const b = v, $ = b.props.position;
      l.push(b), ($ === "right" || $ === "end" ? a : r).push(b);
    } else
      h.push(v);
  });
  const p = l.length === 1 && l[0]?.props.fullHeight === !0 ? l[0] : null, d = p != null && (p.props.position === "right" || p.props.position === "end");
  if (p) {
    const v = d ? a : r;
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          Bt.layout,
          Bt.grid,
          d ? Bt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...o,
        children: [
          i.length > 0 && /* @__PURE__ */ n("div", { className: Bt.gridHeader, children: i }),
          /* @__PURE__ */ O("div", { className: Bt.gridContents, children: [
            v,
            /* @__PURE__ */ n("div", { className: Bt.gridBody, children: h })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: Bt.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Bt.layout, t].filter(Boolean).join(" "),
      ...o,
      children: [
        i,
        /* @__PURE__ */ O("div", { className: Bt.row, children: [
          r,
          h,
          a
        ] }),
        c
      ]
    }
  );
}
const mh = "_body_akga4_1", gh = "_bare_akga4_10", Ss = {
  body: mh,
  bare: gh
};
function Z2({
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
const xh = "_toggle_1qjb4_1", yh = {
  toggle: xh
};
function J2({
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
      className: [yh.toggle, s].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(De, { name: e, size: 20 })
    }
  );
}
const bh = "_track_14127_1", vh = "_bar_14127_31", kh = "_primary_14127_39", wh = "_success_14127_43", $h = "_warning_14127_47", Nh = "_danger_14127_51", Oh = "_indeterminate_14127_149", Sh = "_circular_14127_163", zh = "_fill_14127_203", mt = {
  track: bh,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: vh,
  primary: kh,
  success: wh,
  warning: $h,
  danger: Nh,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Oh,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Sh,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: zh,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function Q2({
  value: e = 0,
  max: t = 100,
  severity: s = "primary",
  shade: o,
  indeterminate: i = !1,
  variant: c = "linear",
  size: h = "md",
  className: r,
  visible: a = !0,
  ...l
}) {
  if (a === !1) return null;
  const p = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? p / t * 100 : 0;
  if (c === "circular") {
    const b = typeof h == "string", $ = 2, k = 10.5, f = 2 * Math.PI * k, _ = f * (i ? 0.75 : 1), u = i ? 0 : f * (1 - d / 100);
    return /* @__PURE__ */ O(
      "svg",
      {
        width: b ? void 0 : h,
        height: b ? void 0 : h,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": l["aria-label"],
        "aria-labelledby": l["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(p),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...l,
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
              strokeWidth: $
            }
          ),
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.fill,
              cx: 12,
              cy: 12,
              r: k,
              strokeWidth: $,
              strokeDasharray: `${_} ${f}`,
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
function ev(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Dh(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Zs(e) {
  const [t, s] = X(() => Dh(e));
  return ke(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    s(o.matches);
    const i = (c) => s(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const Mh = "_wrapper_1qmsj_1", Ch = {
  wrapper: Mh
}, Js = "dx-theme";
function Eh(e) {
  const t = e === void 0 ? Js : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(t);
      return s === "light" || s === "dark" || s === "system" ? s : void 0;
    } catch {
      return;
    }
}
function Ih(e, t) {
  const s = e === void 0 ? Js : e;
  if (!(s === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(s, t);
    } catch {
    }
}
function tv({
  value: e,
  defaultValue: t,
  storageKey: s,
  onChange: o,
  label: i = "Dark mode",
  className: c
}) {
  const h = Zs("(prefers-color-scheme: dark)"), [r, a] = X(void 0), l = e ?? r ?? Eh(s) ?? t ?? "system", p = l === "system" ? h ? "dark" : "light" : l;
  ke(() => {
    if (l === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = l;
  }, [l]);
  const d = (v) => {
    const b = v.target.checked ? "dark" : "light";
    e === void 0 && a(b), Ih(s, b), o?.(b);
  };
  return /* @__PURE__ */ O("label", { className: [Ch.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ n(Pl, { checked: p === "dark", onChange: d })
  ] });
}
const jh = "_avatar_yj2hz_1", Ah = "_xs_yj2hz_12", Th = "_sm_yj2hz_18", Rh = "_md_yj2hz_24", Lh = "_lg_yj2hz_30", Ph = "_xl_yj2hz_36", Bh = "_initials_yj2hz_42", Fh = "_image_yj2hz_57", qh = "_status_yj2hz_64", Hh = "_online_yj2hz_84", Kh = "_offline_yj2hz_88", Uh = "_away_yj2hz_92", dn = {
  avatar: jh,
  xs: Ah,
  sm: Th,
  md: Rh,
  lg: Lh,
  xl: Ph,
  initials: Bh,
  image: Fh,
  status: qh,
  online: Hh,
  offline: Kh,
  away: Uh
}, Xn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Wh(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Vh(e) {
  let t = 0;
  for (let s = 0; s < e.length; s += 1)
    t = t * 31 + e.charCodeAt(s) >>> 0;
  return Xn[t % Xn.length] ?? Xn[0];
}
function nv({
  name: e,
  src: t,
  alt: s,
  size: o = "md",
  status: i,
  className: c
}) {
  const h = $e(() => e ? Wh(e) : "?", [e]), r = $e(() => e ? Vh(e) : Xn[0], [e]), a = t != null && s === "", l = s ?? e ?? "avatar", p = i ? `${l}, ${i}` : l, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: dn.image,
      src: t,
      alt: a ? "" : i ? p : l
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
      "aria-label": t ? void 0 : p,
      children: [
        d,
        i && /* @__PURE__ */ n("span", { className: dn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Xh = "_root_80088_1", Gh = "_left_80088_6", Yh = "_right_80088_7", Zh = "_panel_80088_12", Jh = "_bottom_80088_20", Qh = "_tabList_80088_24", ep = "_underline_80088_53", tp = "_pills_80088_72", np = "_tab_80088_24", sp = "_active_80088_113", rp = "_disabled_80088_139", Ft = {
  root: Xh,
  left: Gh,
  right: Yh,
  panel: Zh,
  bottom: Jh,
  tabList: Qh,
  underline: ep,
  pills: tp,
  tab: np,
  active: sp,
  disabled: rp
};
function sv({
  items: e,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: h
}) {
  const r = Ye(), a = ae(null), [l, p] = X(
    s ?? e[0]?.key ?? ""
  ), d = t ?? l, v = c === "left" || c === "right", b = (f) => {
    p(f), o?.(f);
  }, $ = (f) => {
    const _ = e.filter((N) => !N.disabled), u = _.findIndex((N) => N.key === d);
    let y = -1;
    f.key === "ArrowRight" || v && f.key === "ArrowDown" ? y = (u + 1) % _.length : f.key === "ArrowLeft" || v && f.key === "ArrowUp" ? y = (u - 1 + _.length) % _.length : f.key === "Home" ? y = 0 : f.key === "End" && (y = _.length - 1), y >= 0 && (f.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[y]?.key ?? "")}"]`
    )?.focus(), b(_[y]?.key ?? ""));
  }, k = e.find((f) => f.key === d);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Ft.root, Ft[c], h].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Ft.tabList, Ft[i], Ft[c]].filter(Boolean).join(" "),
            onKeyDown: $,
            children: e.map((f) => {
              const _ = f.key === d;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${f.key}`,
                  "data-tab-key": f.key,
                  "aria-selected": _,
                  "aria-controls": `${r}-panel-${f.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: f.disabled,
                  className: [
                    Ft.tab,
                    _ ? Ft.active : null,
                    f.disabled ? Ft.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => b(f.key),
                  children: f.label
                },
                f.key
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
            className: Ft.panel,
            children: k.content
          }
        )
      ]
    }
  );
}
const op = "_root_18dnp_1", ap = "_item_18dnp_9", lp = "_heading_18dnp_13", ip = "_trigger_18dnp_17", cp = "_disabled_18dnp_34", dp = "_title_18dnp_48", up = "_chevron_18dnp_52", _p = "_open_18dnp_59", fp = "_content_18dnp_63", qt = {
  root: op,
  item: ap,
  heading: lp,
  trigger: ip,
  disabled: cp,
  title: dp,
  chevron: up,
  open: _p,
  content: fp
};
function rv({
  items: e,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const h = Ye(), [r, a] = X(
    o ?? []
  ), l = s ?? r, p = (d) => {
    const v = l.includes(d) ? l.filter((b) => b !== d) : t ? [...l, d] : [d];
    a(v), i?.(v);
  };
  return /* @__PURE__ */ n("div", { className: [qt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const v = l.includes(d.key), b = `${h}-panel-${d.key}`, $ = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: qt.item, children: [
      /* @__PURE__ */ n("h3", { className: qt.heading, children: /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          id: $,
          "aria-expanded": v,
          "aria-controls": b,
          disabled: d.disabled,
          className: [
            qt.trigger,
            d.disabled ? qt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: qt.title, children: d.title }),
            /* @__PURE__ */ n(
              "span",
              {
                className: [qt.chevron, v ? qt.open : null].filter(Boolean).join(" "),
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
          "aria-labelledby": $,
          hidden: !v,
          className: qt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const hp = "_textarea_1mu8y_1", pp = "_invalid_1mu8y_27", mp = "_xs_1mu8y_34", gp = "_sm_1mu8y_39", xp = "_md_1mu8y_44", yp = "_lg_1mu8y_49", bp = "_xl_1mu8y_54", Fn = {
  textarea: hp,
  invalid: pp,
  xs: mp,
  sm: gp,
  md: xp,
  lg: yp,
  xl: bp,
  "resize-none": "_resize-none_1mu8y_59",
  "resize-vertical": "_resize-vertical_1mu8y_63",
  "resize-horizontal": "_resize-horizontal_1mu8y_67",
  "resize-both": "_resize-both_1mu8y_71"
}, ov = qe(
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
), vp = "_typography_1ehxz_1", kp = "_h1_1ehxz_36", wp = "_h2_1ehxz_42", $p = "_h3_1ehxz_48", Np = "_h4_1ehxz_54", Op = "_h5_1ehxz_60", Sp = "_h6_1ehxz_66", zp = "_button_1ehxz_96", Dp = "_caption_1ehxz_103", Mp = "_overline_1ehxz_109", Qn = {
  typography: vp,
  "display-1": "_display-1_1ehxz_5",
  "display-2": "_display-2_1ehxz_10",
  "display-3": "_display-3_1ehxz_15",
  "display-4": "_display-4_1ehxz_20",
  "display-5": "_display-5_1ehxz_25",
  "display-6": "_display-6_1ehxz_30",
  h1: kp,
  h2: wp,
  h3: $p,
  h4: Np,
  h5: Op,
  h6: Sp,
  "subtitle-1": "_subtitle-1_1ehxz_72",
  "subtitle-2": "_subtitle-2_1ehxz_78",
  "body-1": "_body-1_1ehxz_84",
  "body-2": "_body-2_1ehxz_89",
  button: zp,
  caption: Dp,
  overline: Mp,
  "align-left": "_align-left_1ehxz_118",
  "align-center": "_align-center_1ehxz_122",
  "align-right": "_align-right_1ehxz_126",
  "align-justify": "_align-justify_1ehxz_130"
}, Cp = {
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
}, Ep = {
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
}, Ip = {
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
}, jp = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, av = qe(function({
  textStyle: t = "Body1",
  tagName: s = "Auto",
  textAlign: o,
  text: i,
  visible: c = !0,
  className: h,
  children: r,
  ...a
}, l) {
  if (c === !1) return null;
  const p = s === "Auto" ? Cp[t] : Ip[s];
  return /* @__PURE__ */ n(
    p,
    {
      ref: l,
      className: [
        Qn.typography,
        Qn[Ep[t]],
        o ? Qn[jp[o]] : null,
        h
      ].filter(Boolean).join(" "),
      ...a,
      children: i ?? r
    }
  );
}), Ap = "_root_rjoph_1", Tp = "_trigger_rjoph_9", Rp = "_invalid_rjoph_40", Lp = "_placeholder_rjoph_47", Pp = "_label_rjoph_54", Bp = "_chevron_rjoph_60", Fp = "_chevronOpen_rjoph_70", qp = "_menu_rjoph_74", Hp = "_option_rjoph_89", Kp = "_disabled_rjoph_100", Up = "_active_rjoph_104", Wp = "_selected_rjoph_105", Vp = "_header_rjoph_115", Xp = "_xs_rjoph_122", Gp = "_sm_rjoph_128", Yp = "_md_rjoph_134", Zp = "_lg_rjoph_140", Jp = "_xl_rjoph_146", it = {
  root: Ap,
  trigger: Tp,
  invalid: Rp,
  placeholder: Lp,
  label: Pp,
  chevron: Bp,
  chevronOpen: Fp,
  menu: qp,
  option: Hp,
  disabled: Kp,
  active: Up,
  selected: Wp,
  header: Vp,
  xs: Xp,
  sm: Gp,
  md: Yp,
  lg: Zp,
  xl: Jp
}, Qp = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function lv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: h = !1,
  disabled: r = !1,
  className: a,
  ...l
}) {
  const p = Ye(), d = `${p}-listbox`, v = ae(null), b = ae(null), [$, k] = X(
    s
  ), [f, _] = X(!1), u = t ?? $, y = e.map(
    (m, M) => m.label === "" || m.disabled ? -1 : M
  ).filter((m) => m >= 0), N = e.findIndex(
    (m) => m.value === u
  ), [g, S] = X(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), x = H(() => {
    if (r) return;
    const m = N >= 0 && y.includes(N) ? N : y[0];
    S(m ?? -1), _(!0);
  }, [r, N, y]), w = H(() => {
    _(!1), b.current?.focus();
  }, []);
  ke(() => {
    if (!f) return;
    const m = (M) => {
      v.current && !v.current.contains(M.target) && _(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [f]);
  const E = (m) => {
    k(m), o?.(m), _(!1), b.current?.focus();
  }, I = (m) => {
    if (y.length === 0) return;
    const M = y.includes(g) ? y.indexOf(g) : 0, P = y[(M + m + y.length) % y.length];
    P != null && S(P);
  }, C = (m) => {
    if (!f) {
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
        m.preventDefault(), w();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, z = e.find(
    (m) => m.value === u
  );
  return /* @__PURE__ */ O(
    "div",
    {
      ref: v,
      className: [it.root, a].filter(Boolean).join(" "),
      onKeyDown: C,
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: b,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": f,
            "aria-controls": d,
            "aria-invalid": h || void 0,
            disabled: r,
            className: [
              it.trigger,
              it[c],
              f ? it.open : null,
              h ? it.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => f ? _(!1) : x(),
            ...l,
            children: [
              /* @__PURE__ */ n("span", { className: z ? it.label : it.placeholder, children: z ? z.label : i }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [it.chevron, f ? it.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Qp },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "listbox",
            "aria-activedescendant": g >= 0 ? `${p}-option-${g}` : void 0,
            className: it.menu,
            children: e.map(
              (m, M) => m.label === "" ? /* @__PURE__ */ n(
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
                  id: `${p}-option-${M}`,
                  role: "option",
                  "aria-selected": m.value === u,
                  "aria-disabled": m.disabled || void 0,
                  className: [
                    it.option,
                    M === g ? it.active : null,
                    m.value === u ? it.selected : null,
                    m.disabled ? it.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    m.disabled || E(m.value);
                  },
                  onMouseEnter: () => {
                    !m.disabled && m.label !== "" && S(M);
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
const em = "_root_9y6ty_1", tm = "_wrap_9y6ty_9", nm = "_input_9y6ty_26", sm = "_invalid_9y6ty_31", rm = "_clear_9y6ty_58", om = "_menu_9y6ty_83", am = "_option_9y6ty_98", lm = "_disabled_9y6ty_109", im = "_active_9y6ty_113", cm = "_empty_9y6ty_123", dm = "_xs_9y6ty_129", um = "_sm_9y6ty_136", _m = "_md_9y6ty_143", fm = "_lg_9y6ty_150", hm = "_xl_9y6ty_157", zt = {
  root: em,
  wrap: tm,
  input: nm,
  invalid: sm,
  clear: rm,
  menu: om,
  option: am,
  disabled: lm,
  active: im,
  empty: cm,
  xs: dm,
  sm: um,
  md: _m,
  lg: fm,
  xl: hm
}, pm = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function iv({
  options: e = [],
  value: t,
  defaultValue: s = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: h = "md",
  invalid: r = !1,
  disabled: a = !1,
  filter: l = pm,
  className: p,
  ...d
}) {
  const v = Ye(), b = `${v}-listbox`, $ = ae(null), k = ae(null), [f, _] = X(s), [u, y] = X(!1), N = t ?? f, g = $e(
    () => N.trim() === "" ? [...e] : e.filter((T) => l(T, N)),
    [e, N, l]
  ), S = g.map((T, F) => T.disabled ? -1 : F).filter((T) => T >= 0), [x, w] = X(-1), E = (T) => {
    _(T), o?.(T);
  }, I = (T) => {
    E(T.label), i?.(T.value, T), y(!1);
  }, C = (T) => {
    if (S.length === 0) return;
    const F = S.includes(x) ? S.indexOf(x) : T === 1 ? -1 : 0, V = S[(F + T + S.length) % S.length];
    V != null && w(V);
  }, z = (T) => {
    a || (E(T.target.value), y(!0), w(-1));
  }, m = () => {
    a || N !== "" && y(!0);
  }, M = (T) => {
    $.current && !$.current.contains(T.relatedTarget) && y(!1);
  }, P = (T) => {
    if (!a)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), u ? C(1) : (y(!0), w(S[0] ?? -1));
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
    E(""), w(-1), y(!0), k.current?.focus();
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: $,
      className: [zt.root, p].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
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
                  disabled: a,
                  value: N,
                  placeholder: c,
                  className: zt.input,
                  onChange: z,
                  onFocus: m,
                  onBlur: M,
                  onKeyDown: P,
                  ...d
                }
              ),
              N !== "" && !a && /* @__PURE__ */ n(
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
              T.disabled || w(F);
            },
            children: T.label
          },
          T.value
        )) })
      ]
    }
  );
}
const mm = "_box_julie_1", gm = "_option_julie_12", xm = "_disabled_julie_23", ym = "_selected_julie_27", bm = "_active_julie_33", On = {
  box: mm,
  option: gm,
  disabled: xm,
  selected: ym,
  active: bm
};
function cv({
  options: e = [],
  value: t,
  defaultValue: s,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: h,
  ...r
}) {
  const a = Ye(), [l, p] = X(() => {
    const g = s;
    return g == null ? [] : Array.isArray(g) ? [...g] : [g];
  }), d = t == null ? l : Array.isArray(t) ? t : [t], v = e.findIndex((g) => !g.disabled), [b, $] = X(
    () => v >= 0 ? v : 0
  ), k = ae(""), f = ae(null), _ = (g) => {
    p(g), i?.(o ? g : g[0] ?? "");
  }, u = e.map((g, S) => g.disabled ? -1 : S).filter((g) => g >= 0), y = (g) => {
    const S = e[g];
    if (!(!S || S.disabled))
      if ($(g), o) {
        const x = d.includes(S.value) ? d.filter((w) => w !== S.value) : [...d, S.value];
        _(x);
      } else
        _([S.value]);
  }, N = (g) => {
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
      const w = (k.current + g.key).toLowerCase();
      k.current = w, f.current && clearTimeout(f.current), f.current = setTimeout(() => {
        k.current = "";
      }, 500);
      const E = [...u, ...u], I = u.indexOf(S) + 1, C = E.slice(I).find((z) => e[z]?.label.toLowerCase().startsWith(w));
      C != null && $(C);
      return;
    }
    x >= 0 && (g.preventDefault(), $(x), o || _([e[x]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[b] ? `${a}-option-${b}` : void 0,
      style: h,
      className: [On.box, c].filter(Boolean).join(" "),
      onKeyDown: N,
      ...r,
      children: e.map((g, S) => {
        const x = d.includes(g.value), w = S === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${S}`,
            role: "option",
            "aria-selected": x,
            "aria-disabled": g.disabled || void 0,
            className: [
              On.option,
              x ? On.selected : null,
              w ? On.active : null,
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
const vm = "_group_6i3u3_1", km = "_legend_6i3u3_8", wm = "_list_6i3u3_16", $m = "_item_6i3u3_25", Nm = "_disabled_6i3u3_32", Om = "_label_6i3u3_37", Sm = "_checkbox_6i3u3_48", tn = {
  group: vm,
  legend: km,
  list: wm,
  item: $m,
  disabled: Nm,
  label: Om,
  checkbox: Sm
};
function dv({
  options: e = [],
  value: t,
  defaultValue: s = [],
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, a] = X(() => [
    ...s
  ]), l = t ?? r, p = (d, v) => {
    const b = v ? [...l, d] : l.filter(($) => $ !== d);
    a(b), o?.(b);
  };
  return /* @__PURE__ */ O("fieldset", { className: [tn.group, h].filter(Boolean).join(" "), children: [
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
const zm = "_group_1mqxc_1", Dm = "_legend_1mqxc_8", Mm = "_list_1mqxc_16", Cm = "_item_1mqxc_25", Em = "_disabled_1mqxc_32", Im = "_label_1mqxc_37", jm = "_radio_1mqxc_48", nn = {
  group: zm,
  legend: Dm,
  list: Mm,
  item: Cm,
  disabled: Em,
  label: Im,
  radio: jm
};
function uv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, a] = X(
    s
  ), l = t ?? r, p = (d) => {
    a(d), o?.(d);
  };
  return /* @__PURE__ */ O("fieldset", { className: [nn.group, h].filter(Boolean).join(" "), children: [
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
const Am = "_bar_d59jw_1", Tm = "_vertical_d59jw_12", Rm = "_option_d59jw_17", Lm = "_selected_d59jw_40", Pm = "_sm_d59jw_56", Bm = "_md_d59jw_62", Fm = "_lg_d59jw_68", un = {
  bar: Am,
  vertical: Tm,
  option: Rm,
  selected: Lm,
  sm: Pm,
  md: Bm,
  lg: Fm
};
function zs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function _v(e) {
  const {
    options: t = [],
    value: s,
    defaultValue: o,
    multiple: i,
    orientation: c = "horizontal",
    onChange: h,
    size: r = "md",
    className: a,
    ...l
  } = e, p = i ?? !1, [d, v] = X(o ?? (p ? [] : t[0]?.value)), b = s ?? d, $ = i === !0 || i === void 0 && Array.isArray(b), k = (_) => {
    if (!$) {
      v(_), h?.(_);
      return;
    }
    const u = zs(b), y = u.includes(_) ? u.filter((N) => N !== _) : [...u, _];
    v(y), h?.(y);
  }, f = (_) => $ ? zs(b).includes(_) : b === _;
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
        const u = f(_.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: _.disabled,
            className: [
              un.option,
              u ? un.selected : null,
              _.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => k(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const qm = "_toggle_7nfjx_1", Hm = "_pressed_7nfjx_29", Km = "_sm_7nfjx_41", Um = "_md_7nfjx_47", Wm = "_lg_7nfjx_53", Vm = "_fullWidth_7nfjx_59", qn = {
  toggle: qm,
  pressed: Hm,
  sm: Km,
  md: Um,
  lg: Wm,
  fullWidth: Vm
}, fv = qe(
  function({
    pressed: t,
    defaultPressed: s = !1,
    onChange: o,
    size: i = "md",
    fullWidth: c = !1,
    className: h,
    type: r = "button",
    ...a
  }, l) {
    const [p, d] = X(s), v = t ?? p, b = () => {
      const $ = !v;
      d($), o?.($);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: l,
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
        ...a
      }
    );
  }
), Xm = "_root_fc1sj_1", Gm = "_action_fc1sj_328", Ym = "_filled_fc1sj_348", Zm = "_caret_fc1sj_352", Jm = "_flat_fc1sj_373", Qm = "_outlined_fc1sj_381", eg = "_text_fc1sj_390", tg = "_sm_fc1sj_496", ng = "_md_fc1sj_508", sg = "_lg_fc1sj_520", rg = "_menu_fc1sj_532", og = "_item_fc1sj_545", ag = "_disabled_fc1sj_566", lg = "_active_fc1sj_570", ig = "_danger_fc1sj_579", kt = {
  root: Xm,
  "style-primary": "_style-primary_fc1sj_11",
  "style-secondary": "_style-secondary_fc1sj_25",
  "style-base": "_style-base_fc1sj_35",
  "style-light": "_style-light_fc1sj_45",
  "style-dark": "_style-dark_fc1sj_55",
  "style-info": "_style-info_fc1sj_69",
  "style-success": "_style-success_fc1sj_83",
  "style-warning": "_style-warning_fc1sj_97",
  "style-danger": "_style-danger_fc1sj_111",
  action: Gm,
  filled: Ym,
  caret: Zm,
  flat: Jm,
  outlined: Qm,
  text: eg,
  "shade-lighter": "_shade-lighter_fc1sj_407",
  "shade-light": "_shade-light_fc1sj_407",
  "shade-dark": "_shade-dark_fc1sj_417",
  "shade-darker": "_shade-darker_fc1sj_421",
  sm: tg,
  md: ng,
  lg: sg,
  menu: rg,
  item: og,
  disabled: ag,
  active: lg,
  danger: ig
};
function hv({
  label: e,
  onClick: t,
  items: s = [],
  severity: o = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: h = "md",
  disabled: r = !1,
  className: a,
  ...l
}) {
  const d = `${Ye()}-menu`, v = ae(null), b = ae(null), $ = ae([]), [k, f] = X(!1), [_, u] = X(-1), y = $e(
    () => s.map((C, z) => C.disabled ? -1 : z).filter((C) => C >= 0),
    [s]
  ), N = H(() => {
    r || (u(y[0] ?? -1), f(!0));
  }, [r, y]), g = H(() => {
    f(!1), b.current?.focus();
  }, []);
  ke(() => {
    if (!k) return;
    const C = (z) => {
      v.current && !v.current.contains(z.target) && f(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [k]);
  const S = ae(k);
  ke(() => {
    const C = S.current;
    if (S.current = k, !k || C) return;
    const z = y.includes(_) ? _ : y[0] ?? -1;
    z >= 0 && $.current[z]?.focus();
  }, [k, _, y]);
  const x = (C) => {
    const z = s[C];
    !z || z.disabled || (z.onClick?.(), f(!1), b.current?.focus());
  }, w = (C) => {
    if (y.length === 0) return;
    const z = y.includes(_) ? y.indexOf(_) : C === 1 ? -1 : 0, m = y[(z + C + y.length) % y.length];
    m != null && (u(m), $.current[m]?.focus());
  }, E = (C) => {
    const z = C === "first" ? y[0] : y[y.length - 1];
    z != null && (u(z), $.current[z]?.focus());
  }, I = (C) => {
    switch (C.key) {
      case "ArrowDown":
        C.preventDefault(), w(1);
        break;
      case "ArrowUp":
        C.preventDefault(), w(-1);
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
        f(!1);
        break;
    }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: v,
      className: [
        kt.root,
        kt[h],
        kt[`style-${o}`],
        kt[ds(i, "filled")],
        c !== "default" ? kt[`shade-${c}`] : null,
        a
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
            onClick: () => k ? f(!1) : N(),
            onKeyDown: (C) => {
              !k && C.key === "ArrowDown" && (C.preventDefault(), N());
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
            ...l,
            children: s.map((C, z) => /* @__PURE__ */ n(
              "button",
              {
                ref: (m) => {
                  $.current[z] = m;
                },
                type: "button",
                role: "menuitem",
                tabIndex: z === _ ? 0 : -1,
                disabled: C.disabled,
                className: [
                  kt.item,
                  z === _ ? kt.active : null,
                  C.danger ? kt.danger : null,
                  C.disabled ? kt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => x(z),
                onMouseEnter: () => {
                  C.disabled || u(z);
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
const cg = "_textbox_dh04j_1", dg = "_invalid_dh04j_31", ug = "_xs_dh04j_38", _g = "_sm_dh04j_44", fg = "_md_dh04j_50", hg = "_lg_dh04j_56", pg = "_xl_dh04j_62", es = {
  textbox: cg,
  invalid: dg,
  xs: ug,
  sm: _g,
  md: fg,
  lg: hg,
  xl: pg
}, pv = qe(
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
), mg = "_wrapper_o4h13_1", gg = "_input_o4h13_8", xg = "_invalid_o4h13_38", yg = "_toggle_o4h13_45", bg = "_xs_o4h13_80", vg = "_sm_o4h13_86", kg = "_md_o4h13_92", wg = "_lg_o4h13_98", $g = "_xl_o4h13_104", Sn = {
  wrapper: mg,
  input: gg,
  invalid: xg,
  toggle: yg,
  xs: bg,
  sm: vg,
  md: kg,
  lg: wg,
  xl: $g
}, mv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: h = "Hide password",
    ...r
  }, a) {
    const [l, p] = X(!1);
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
          "aria-label": l ? h : c,
          disabled: i,
          onClick: () => p((d) => !d),
          children: /* @__PURE__ */ n(De, { name: l ? "eye-off" : "eye", size: 16 })
        }
      )
    ] });
  }
), Ng = "_mask_1tyy7_1", Og = "_invalid_1tyy7_31", Sg = "_xs_1tyy7_38", zg = "_sm_1tyy7_44", Dg = "_md_1tyy7_50", Mg = "_lg_1tyy7_56", Cg = "_xl_1tyy7_62", ts = {
  mask: Ng,
  invalid: Og,
  xs: Sg,
  sm: zg,
  md: Dg,
  lg: Mg,
  xl: Cg
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
const gv = qe(function({
  size: t = "md",
  invalid: s = !1,
  mask: o,
  value: i,
  defaultValue: c = "",
  onChange: h,
  className: r,
  onKeyDown: a,
  ...l
}, p) {
  const [d, v] = X(c ?? ""), b = i !== void 0, $ = b ? i ?? "" : d, k = (u) => {
    const y = Ds(u, o);
    return b || v(y), h?.(y), y;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      value: $,
      onChange: (u) => {
        k(u.target.value);
      },
      onKeyDown: (u) => {
        if (u.key === "Backspace") {
          const y = u.currentTarget.selectionStart ?? $.length, N = $[y - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            u.preventDefault();
            const g = $.replace(/\D/g, "");
            k(Ds(g.slice(0, -1), o));
          }
        }
        a?.(u);
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
}), Eg = "_wrapper_1kqw7_1", Ig = "_input_1kqw7_8", jg = "_invalid_1kqw7_38", Ag = "_button_1kqw7_45", Tg = "_up_1kqw7_77", Rg = "_down_1kqw7_82", Lg = "_xs_1kqw7_87", Pg = "_sm_1kqw7_93", Bg = "_md_1kqw7_99", Fg = "_lg_1kqw7_105", qg = "_xl_1kqw7_111", Gt = {
  wrapper: Eg,
  input: Ig,
  invalid: jg,
  button: Ag,
  up: Tg,
  down: Rg,
  xs: Lg,
  sm: Pg,
  md: Bg,
  lg: Fg,
  xl: qg
};
function os(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Hg(e) {
  let t = "", s = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !s ? (s = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function Qs(e, t, s) {
  return Math.min(s ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Kg(e, t, s) {
  return t === void 0 ? e : t + Math.round((e - t) / s) * s;
}
function Ug(e, t, s, o, i) {
  const h = os(e) ?? s ?? 0;
  let r;
  return s === void 0 ? r = h + t * i : t > 0 ? r = s + Math.ceil((h - s + 1e-9) / i) * i : r = s + Math.floor((h - s - 1e-9) / i) * i, Qs(r, s, o);
}
const xv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    value: c,
    defaultValue: h,
    onChange: r,
    min: a,
    max: l,
    step: p = 1,
    incrementLabel: d = "Increment",
    decrementLabel: v = "Decrement",
    onBlur: b,
    onKeyDown: $,
    ...k
  }, f) {
    const [_, u] = X(
      h != null ? String(h) : ""
    ), y = c !== void 0, N = y ? c == null ? "" : String(c) : _, g = (C) => {
      y || u(C), r?.(os(C));
    }, S = (C) => {
      y || u(String(C)), r?.(C);
    }, x = (C) => {
      i || S(Ug(N, C, a, l, p));
    }, w = (C) => {
      g(Hg(C.target.value));
    }, E = (C) => {
      C.key === "ArrowUp" ? (C.preventDefault(), x(1)) : C.key === "ArrowDown" && (C.preventDefault(), x(-1)), $?.(C);
    }, I = (C) => {
      const z = os(N);
      z === null ? (y || u(""), r?.(null)) : S(Qs(Kg(z, a, p), a, l)), b?.(C);
    };
    return /* @__PURE__ */ O("div", { className: Gt.wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: f,
          type: "text",
          inputMode: "decimal",
          autoComplete: "off",
          value: N,
          disabled: i,
          onChange: w,
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
}, Wg = [
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
function Vg({ r: e, g: t, b: s }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(s)}`;
}
function Xg({ r: e, g: t, b: s }) {
  const o = e / 255, i = t / 255, c = s / 255, h = Math.max(o, i, c), r = Math.min(o, i, c), a = h - r;
  let l = 0;
  return a !== 0 && (h === o ? l = (i - c) / a % 6 : h === i ? l = (c - o) / a + 2 : l = (o - i) / a + 4, l *= 60, l < 0 && (l += 360)), {
    h: l,
    s: h === 0 ? 0 : a / h,
    v: h
  };
}
function _n({ h: e, s: t, v: s }) {
  const o = s * t, i = e / 60, c = o * (1 - Math.abs(i % 2 - 1));
  let h = 0, r = 0, a = 0;
  i < 1 ? (h = o, r = c) : i < 2 ? (h = c, r = o) : i < 3 ? (r = o, a = c) : i < 4 ? (r = c, a = o) : i < 5 ? (h = c, a = o) : (h = o, a = c);
  const l = s - o;
  return {
    r: Math.round((h + l) * 255),
    g: Math.round((r + l) * 255),
    b: Math.round((a + l) * 255),
    a: 1
  };
}
function Gg(e) {
  const t = as(e);
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
const yv = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: s = !0,
  showPalette: o = !0,
  palette: i = Wg,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: r = !1,
  invalid: a = !1,
  placeholder: l = "",
  size: p = "md",
  tabIndex: d = 0,
  className: v,
  onChange: b,
  onValueChange: $,
  onOpen: k,
  onClose: f
}) => {
  const _ = ae(null), u = ae(null), y = ae(null), N = ae(null), g = ae(null), S = Ye(), x = ae(null), w = $e(
    () => Gg(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = X(!1), [C, z] = X(null), m = C ?? w, M = $e(() => Xg(m), [m]), P = H(
    (W) => {
      const D = Ms(W);
      b?.(D), $?.(D);
    },
    [b, $]
  ), j = H(
    (W, D) => {
      z(W), D && !c && P(W);
    },
    [c, P]
  ), T = H(() => {
    I(!1), z(null), f?.(), u.current?.focus();
  }, [f]), F = H(() => {
    r || (z(w), I(!0), k?.());
  }, [r, w, k]), V = H(() => {
    E ? T() : F();
  }, [E, T, F]), Z = H(
    (W, D) => {
      const q = y.current;
      if (!q) return M;
      const ne = q.getBoundingClientRect(), _e = xt((W - ne.left) / ne.width, 0, 1), se = xt(1 - (D - ne.top) / ne.height, 0, 1);
      return { h: M.h, s: _e, v: se };
    },
    [M]
  ), Q = H(
    (W, D) => {
      if (!D) return 0;
      const q = D.getBoundingClientRect();
      return xt((W - q.left) / q.width, 0, 1);
    },
    []
  ), K = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "sat";
    const D = Z(W.clientX, W.clientY);
    j({ ..._n(D), a: m.a }, !0);
  }, te = (W) => {
    if (x.current !== "sat") return;
    W.preventDefault();
    const D = Z(W.clientX, W.clientY);
    j({ ..._n(D), a: m.a }, !0);
  }, oe = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "hue";
    const D = Q(W.clientX, N.current);
    j(
      { ..._n({ ...M, h: D * 360 }), a: m.a },
      !0
    );
  }, ee = (W) => {
    if (x.current !== "hue") return;
    W.preventDefault();
    const D = Q(W.clientX, N.current);
    j(
      { ..._n({ ...M, h: D * 360 }), a: m.a },
      !0
    );
  }, L = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "alpha";
    const D = Q(W.clientX, g.current);
    j({ ...m, a: D }, !0);
  }, ie = (W) => {
    if (x.current !== "alpha") return;
    W.preventDefault();
    const D = Q(W.clientX, g.current);
    j({ ...m, a: D }, !0);
  }, Y = () => {
    x.current = null;
  }, de = H(
    (W, D) => {
      const q = {
        h: M.h,
        s: xt(M.s + W, 0, 1),
        v: xt(M.v + D, 0, 1)
      };
      j({ ..._n(q), a: m.a }, !0);
    },
    [M, m.a, j]
  ), le = H(
    (W) => {
      const D = (M.h + W + 360) % 360;
      j({ ..._n({ ...M, h: D }), a: m.a }, !0);
    },
    [M, m.a, j]
  ), ye = H(
    (W) => {
      j({ ...m, a: xt(m.a + W, 0, 1) }, !0);
    },
    [m, j]
  ), we = (W) => {
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
  }, Be = (W, D) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), D === "hue" ? le(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), D === "hue" ? le(6) : ye(0.05);
        break;
      case "Escape":
        W.preventDefault(), T();
        break;
    }
  }, ve = (W, D) => {
    if (W === "hex") {
      const se = as(D);
      se && j({ ...se, a: m.a }, !0);
      return;
    }
    const q = D.replace(/[^\d.]/g, ""), ne = Number.parseFloat(q);
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
    C && (P(C), z(null), I(!1), f?.(), u.current?.focus());
  };
  ke(() => {
    if (!E) return;
    const W = (D) => {
      _.current && !_.current.contains(D.target) && T();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [E, T]), ke(() => {
    if (!E) return;
    const W = (D) => {
      D.key === "Escape" && T();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [E, T]);
  const xe = p === "xs" ? Oe["dx-colorpicker-trigger-xs"] : p === "sm" ? Oe["dx-colorpicker-trigger-sm"] : p === "lg" ? Oe["dx-colorpicker-trigger-lg"] : p === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], Ze = Ms(m), Ve = Vg(m), Le = { x: M.s * 100, y: (1 - M.v) * 100 }, tt = M.h / 360 * 100, Qe = m.a * 100, et = /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(M.s * 100),
        "aria-valuetext": `Saturation ${Math.round(M.s * 100)}%, value ${Math.round(M.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Oe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${M.h}, 100%, 50%)`
        },
        onKeyDown: we,
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
        ref: N,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(M.h),
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
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${M.h}, 100%, 50%))`
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
            value: m.r,
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
            value: m.g,
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
            value: m.b,
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
          const D = as(W);
          c ? j({ ...D, a: m.a }, !1) : (z(null), P({ ...D, a: m.a }), I(!1), f?.(), u.current?.focus());
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
        E ? Oe["dx-colorpicker-open"] : null,
        a ? Oe["dx-colorpicker-invalid"] : null,
        v
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
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
              l && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-text"], children: l }),
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
}, Yg = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function Zg(e, t) {
  const s = ht(e);
  return t ? `${s} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : s;
}
function ls(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const s = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const a = new Date(s, o - 1, i, c, h, r);
  return a.getFullYear() !== s || a.getMonth() !== o - 1 || a.getDate() !== i ? null : { year: s, month: o, day: i, hour: c, minute: h, second: r };
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
}, Jg = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Qg = ["y", "M", "d", "H", "m", "s"];
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
    for (const a of Jg)
      if (t.startsWith(a, c)) {
        i += Es[a](e, o, s), c += a.length, h = !0;
        break;
      }
    if (h) continue;
    const r = t[c];
    if (Qg.includes(r)) {
      i += Es[r](e, o, s), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const e0 = [
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
function t0(e, t) {
  const s = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const a of e0)
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
  const s = ls(e);
  return s || t0(e, t);
}
function n0(e, t, s) {
  return t && ht(e) < ht(t) ? t : s && ht(e) > ht(s) ? s : e;
}
const s0 = ["hour", "minute", "second"];
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
const bv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: h,
    max: r,
    showTime: a = !1,
    showButton: l = !0,
    allowClear: p = !1,
    inline: d = !1,
    disabledDates: v,
    locale: b = "en-US",
    onChange: $,
    onValueChange: k,
    onOpen: f,
    onClose: _,
    disabled: u,
    readOnly: y,
    placeholder: N,
    ariaLabel: g,
    triggerLabel: S,
    clearLabel: x,
    tabIndex: w,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...z
  }, m) {
    const M = ae(null), P = ae(null), j = ae(null), T = ae(null), F = Ye(), V = o !== void 0, [Z, Q] = X(
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
    }), Y = $e(() => h ? ls(h) : null, [h]), de = $e(() => r ? ls(r) : null, [r]), le = $e(
      () => new Set(v ?? []),
      [v]
    ), ye = $e(() => {
      const U = V ? o ?? "" : Z;
      return U ? zn(U, c) : null;
    }, [o, Z, V, c]), we = H(
      (U) => {
        const ue = ht(U);
        return !!(le.has(ue) || Y && ue < ht(Y) || de && ue > ht(de));
      },
      [le, Y, de]
    ), Be = H(
      (U) => {
        if (!we(U)) return U;
        for (let ue = 1; ue <= 366; ue += 1) {
          const Pe = Ht(U, ue);
          if (!we(Pe)) return Pe;
          const He = Ht(U, -ue);
          if (!we(He)) return He;
        }
        return U;
      },
      [we]
    ), ve = H(
      (U) => {
        V || Q(U ? Kn(U, c, b) : "");
        const ue = U ? Zg(U, a) : "";
        $?.(ue), k?.(ue);
      },
      [V, c, b, a, $, k]
    ), We = H(
      (U) => {
        P.current = U, typeof m == "function" ? m(U) : m && (m.current = U);
      },
      [m]
    ), xe = H(() => {
      te(!1), ee(null), _?.(), d || j.current?.focus();
    }, [d, _]), Ze = H(() => {
      if (u) return;
      const U = ye ?? Yt();
      ee(U), ie(Be(U)), te(!0), f?.();
    }, [u, ye, Be, f]), Ve = H(() => {
      K ? xe() : Ze();
    }, [K, xe, Ze]), Le = H((U) => {
      T.current?.querySelector(
        `[data-date="${ht(U)}"]`
      )?.focus();
    }, []), tt = H(
      (U) => {
        if (we(U)) return;
        const ue = oe ?? ye, He = {
          ...a ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ee(He), a || (ve(He), xe());
      },
      [we, oe, ye, a, ve, xe]
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
    }, [oe, ve, xe]), D = H(() => {
      if (K) return;
      const U = zn(Z, c);
      ve(U ? n0(U, Y, de) : null);
    }, [K, Z, c, Y, de, ve]), q = (U) => {
      const ue = U.target.value;
      V || Q(ue), K && ee(null);
    }, ne = (U) => {
      U.key === "Enter" ? (U.preventDefault(), K ? oe && (ve(oe), xe()) : D()) : U.key === "Escape" ? K && (U.preventDefault(), xe()) : U.key === "ArrowDown" && !K ? (U.preventDefault(), Ze()) : U.key === "Tab" && K && te(!1), C?.(U);
    }, _e = (U) => {
      D(), I?.(U);
    }, se = (U) => {
      let ue = null;
      switch (U.key) {
        case "ArrowLeft":
          ue = Ht(L, -1), U.preventDefault();
          break;
        case "ArrowRight":
          ue = Ht(L, 1), U.preventDefault();
          break;
        case "ArrowUp":
          ue = Ht(L, -7), U.preventDefault();
          break;
        case "ArrowDown":
          ue = Ht(L, 7), U.preventDefault();
          break;
        case "Home":
          ue = Ht(L, -Cs(L)), U.preventDefault();
          break;
        case "End":
          ue = Ht(L, 6 - Cs(L)), U.preventDefault();
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
    ke(() => {
      if (!K) return;
      const U = (ue) => {
        M.current && !M.current.contains(ue.target) && xe();
      };
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
    }, [K, xe]), ke(() => {
      if (!K) return;
      const U = (ue) => {
        ue.key === "Escape" && xe();
      };
      return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
    }, [K, xe]);
    const me = () => {
      V || Q(""), $?.(""), k?.(""), P.current?.focus();
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
    for (let U = 0; U < Yg; U += 1)
      Se.push(Ht(J, U - bt));
    const nt = oe ? ht(oe) : ye ? ht(ye) : null, Vt = ht(Yt()), Nt = `${dt.year}-${yt(dt.month)}`, ze = $e(
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
    ), Rt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], Jt = /* @__PURE__ */ O(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": g ?? "Date picker",
        children: [
          /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-header"], children: [
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
          /* @__PURE__ */ O(
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
                      const He = ht(Pe), Lt = we(Pe), Ot = He.startsWith(Nt);
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
                            He === Vt ? Ee["dx-datepicker-day--today"] : null,
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
          a && /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time"], children: [
            s0.map((U) => /* @__PURE__ */ O("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-time-label"], children: Un(U) }),
              /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time-control"], children: [
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
                /* @__PURE__ */ O("span", { className: Ee["dx-datepicker-time-buttons"], children: [
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
    return /* @__PURE__ */ O(
      "div",
      {
        ref: M,
        className: [
          Ee["dx-datepicker"],
          d ? Ee["dx-datepicker-inline"] : null,
          E
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
                disabled: u,
                readOnly: y,
                placeholder: N,
                tabIndex: w,
                role: l ? void 0 : "combobox",
                "aria-label": g ?? "Date",
                "aria-haspopup": l ? void 0 : "dialog",
                "aria-expanded": l ? void 0 : Je,
                "aria-controls": l ? void 0 : F,
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
                ...z
              }
            ),
            p && !u && Fe && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: [
                  Ee["dx-datepicker-clear"],
                  l ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": x ?? "Clear",
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
}, vv = ({
  value: e = 0,
  stars: t = 5,
  readOnly: s = !1,
  disabled: o = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: h = "Rate",
  tabIndex: r = 0,
  className: a,
  onChange: l,
  onValueChange: p
}) => {
  const [d, v] = X(e), b = H(
    (u) => Math.min(t, Math.max(1, u)),
    [t]
  ), $ = H(
    (u) => {
      l?.(u), p?.(u);
    },
    [l, p]
  ), k = H(
    (u) => {
      s || o || ($(u), v(u));
    },
    [s, o, $]
  ), f = (u) => {
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
  }, _ = Array.from({ length: t }, (u, y) => y + 1);
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
      onKeyDown: f,
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
        _.map((u) => {
          const y = u <= e, N = u === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${h} ${u}`,
              tabIndex: N ? r : -1,
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
const kv = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: s = 100,
  min: o = 0,
  max: i = 100,
  step: c = 1,
  range: h = !1,
  orientation: r = "horizontal",
  disabled: a = !1,
  label: l = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: v = 0,
  className: b,
  onChange: $,
  onInput: k,
  onValueChange: f,
  onInputChange: _
}) => {
  const u = ae(null), y = ae(
    null
  ), [N, g] = X(null), S = N ?? e, x = $e(
    () => It(S, o, i),
    [S, o, i]
  ), w = $e(
    () => It(h ? t : x, o, i),
    [h, t, x, o, i]
  ), E = $e(
    () => It(h ? Math.max(s, w) : x, o, i),
    [h, s, w, x, o, i]
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
  ), z = H(
    (L) => {
      typeof L == "number" && g(L), $?.(L), f?.(L);
    },
    [$, f]
  ), m = H(
    (L) => {
      typeof L == "number" && g(L), k?.(L), _?.(L);
    },
    [k, _]
  ), M = H(
    (L, ie, Y) => {
      const de = C(ie, Y);
      let le;
      h ? L === "min" ? le = { min: Math.min(de, E), max: E } : le = { min: w, max: Math.max(de, w) } : le = de, m(le), y.current === null && z(le);
    },
    [h, C, w, E, m, z]
  ), P = H(
    (L, ie) => {
      const Y = (c > 0 ? c : 1) * ie;
      let de;
      h ? L === "min" ? de = {
        min: It(w + Y, o, E),
        max: E
      } : de = {
        min: w,
        max: It(E + Y, w, i)
      } : de = It(x + Y, o, i), z(de);
    },
    [h, c, o, i, w, E, x, z]
  ), j = (L, ie) => {
    if (!a)
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
          ie.preventDefault(), z(h ? L === "min" ? { min: o, max: E } : { min: w, max: w } : o);
          break;
        case "End":
          ie.preventDefault(), z(h ? L === "min" ? { min: E, max: E } : { min: w, max: i } : i);
          break;
      }
  }, T = (L, ie) => {
    a || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: L, pointerId: ie.pointerId }, M(L, ie.clientX, ie.clientY));
  }, F = (L) => {
    !y.current || y.current.pointerId !== L.pointerId || (L.preventDefault(), M(y.current.key, L.clientX, L.clientY));
  }, V = (L) => {
    !y.current || y.current.pointerId !== L.pointerId || (y.current = null, L.preventDefault(), z(h ? { min: w, max: E } : x));
  }, [Z, Q] = X(null), K = I(w), te = I(E), oe = h ? K : 0, ee = te;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        sn["dx-slider"],
        r === "vertical" ? sn["dx-slider-vertical"] : null,
        a ? sn["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ O("div", { ref: u, className: sn["dx-slider-track"], children: [
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
            "aria-valuenow": Math.round(w),
            "aria-orientation": r,
            "aria-label": h ? p : l,
            "aria-disabled": a || void 0,
            tabIndex: a || h && Z === "max" ? -1 : v,
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
            "aria-disabled": a || void 0,
            tabIndex: a || Z === "min" ? -1 : v,
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
}, r0 = "-10675199.02:48:05.4775808", o0 = "10675199.02:48:05.4775808", Ut = 86400, Wt = 3600, Dt = 60, ns = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Is = {
  days: Ut,
  hours: Wt,
  minutes: Dt,
  seconds: 1
}, a0 = {
  day: Ut,
  hour: Wt,
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
    const r = i[1] != null ? Number(i[1]) : 0, a = i[2] != null ? Number(i[2]) : 0, l = i[3] != null ? Number(i[3]) : 0, p = i[4] != null ? Number(i[4]) : 0;
    return s * (r * Ut + a * Wt + l * Dt + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), a = Number(c[3]), l = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || a > 59 || l > 59 ? null : s * (h * Ut + r * Wt + a * Dt + l + p);
  }
  return null;
}
function l0(e) {
  return e.days * Ut + e.hours * Wt + e.minutes * Dt + e.seconds;
}
function js(e) {
  let t = Math.abs(e);
  const s = Math.floor(t / Ut);
  t %= Ut;
  const o = Math.floor(t / Wt);
  t %= Wt;
  const i = Math.floor(t / Dt), c = Math.round(t % Dt * 1e9) / 1e9;
  return { days: s, hours: o, minutes: i, seconds: c };
}
function is(e, t) {
  const s = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Dt) * Dt : t === "hour" ? o = Math.round(o / Wt) * Wt : t === "day" && (o = Math.round(o / Ut) * Ut);
  let i = Math.round(o % Dt);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const h = Math.floor(o / Dt) + c, r = h % 60, a = Math.floor(h / 60), l = a % 24, p = Math.floor(a / 24), d = s ? "-" : "", v = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${v}${fn(l)}`;
    case "minute":
      return `${d}${v}${fn(l)}:${fn(r)}`;
    default:
      return `${d}${v}${fn(l)}:${fn(r)}:${fn(i)}`;
  }
}
function As(e, t = "second") {
  const s = An(e);
  return s === null ? "" : is(s, t);
}
function ss(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const wv = qe(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    min: c = r0,
    max: h = o0,
    step: r = "1",
    precision: a = "second",
    showDays: l = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: v = !0,
    allowClear: b = !1,
    inline: $ = !1,
    onChange: k,
    onValueChange: f,
    onOpen: _,
    onClose: u,
    disabled: y,
    placeholder: N,
    ariaLabel: g,
    triggerLabel: S,
    clearLabel: x,
    tabIndex: w,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...z
  }, m) {
    const M = ae(null), P = ae(null), j = ae(null), T = Ye(), F = o !== void 0, [V, Z] = X(
      () => i != null ? As(i, a) : ""
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
        const Se = J === null ? "" : is(J, a);
        F || Z(Se), k?.(Se), f?.(Se);
      },
      [F, a, k, f]
    ), we = H(
      (J) => {
        J && te !== null && ye(te), K(!1), oe(null), L(null), u?.(), $ || j.current?.focus();
      },
      [$, te, ye, u]
    ), Be = H(() => {
      y || (oe(le ?? 0), K(!0), _?.());
    }, [y, le, _]), ve = H(() => {
      Q ? we(!1) : Be();
    }, [Q, we, Be]), We = H(
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
        const nt = Number.parseFloat(Se), Vt = Number.isNaN(nt) ? 0 : nt;
        oe((Nt) => {
          const ze = Nt ?? le ?? 0, Xe = js(ze);
          Xe[J] = Vt;
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
          Se.preventDefault(), xe(J), we(!0);
          break;
      }
    }, Le = H(() => {
      if (Q) return;
      const J = An(V);
      ye(J !== null ? ss(J, ie, Y) : null);
    }, [Q, V, ie, Y, ye]), tt = (J) => {
      F || Z(J.target.value);
    }, Qe = (J) => {
      J.key === "Enter" ? (J.preventDefault(), Q ? we(!0) : Le()) : J.key === "Escape" && Q ? (J.preventDefault(), we(!1)) : J.key === "ArrowDown" && !Q ? (J.preventDefault(), Be()) : J.key === "Tab" && Q && K(!1), C?.(J);
    }, et = (J) => {
      Le(), I?.(J);
    }, W = () => {
      F || Z(""), k?.(""), f?.(""), P.current?.focus();
    };
    ke(() => {
      if (!Q) return;
      const J = (Se) => {
        M.current && !M.current.contains(Se.target) && we(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [Q, we]), ke(() => {
      if (!Q) return;
      const J = (Se) => {
        Se.key === "Escape" && we(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [Q, we]), ke(() => {
      if ($ && te !== null) {
        const J = le;
        (J === null || Math.abs(te - J) > 1e-9) && ye(te);
      }
    }, [$, te, le, ye]);
    const D = H(
      (J) => {
        P.current = J, typeof m == "function" ? m(J) : m && (m.current = J);
      },
      [m]
    ), q = F ? o ? As(o, a) : "" : V, ne = F ? !!o : V.length > 0, _e = $ || Q, se = te ?? le ?? 0, me = js(se), Ne = a0[a], Je = ["days", "hours", "minutes", "seconds"].filter(
      (J) => Is[J] >= Ne && (J === "days" ? l : J === "hours" ? p : J === "minutes" ? d : v)
    ), dt = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], bt = /* @__PURE__ */ O("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: is(se, a) }),
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((J) => /* @__PURE__ */ O("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ke["dx-timespanpicker-unit-label"], children: ns[J] }),
        /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
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
          /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
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
          onClick: () => we(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ O(
      "div",
      {
        ref: M,
        className: [
          Ke["dx-timespanpicker"],
          $ ? Ke["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !$ && /* @__PURE__ */ O(Ce, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: D,
                type: "text",
                autoComplete: "off",
                value: q,
                disabled: y,
                placeholder: N,
                tabIndex: w,
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
                ...z
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
              role: $ ? void 0 : "dialog",
              "aria-label": g ?? "Time span picker",
              className: $ ? void 0 : Ke["dx-timespanpicker-popup"],
              children: bt
            }
          )
        ]
      }
    );
  }
), i0 = "_wrapper_1c8sy_1", c0 = "_cells_1c8sy_8", d0 = "_cell_1c8sy_8", u0 = "_invalid_1c8sy_63", _0 = "_live_1c8sy_73", rn = {
  wrapper: i0,
  cells: c0,
  cell: d0,
  "cell-sm": "_cell-sm_1c8sy_45",
  "cell-md": "_cell-md_1c8sy_51",
  "cell-lg": "_cell-lg_1c8sy_57",
  invalid: u0,
  live: _0
};
function Ts(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const $v = qe(
  function({
    length: t = 6,
    value: s,
    defaultValue: o,
    onChange: i,
    invalid: c = !1,
    size: h = "md",
    autoFocus: r = !1,
    disabled: a = !1,
    label: l = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": v
  }, b) {
    const $ = Ye(), k = s !== void 0, [f, _] = X(Ts(o).join("")), u = k ? Ts(s).join("") : f, y = Array.from({ length: t }, (z, m) => u[m] ?? ""), N = ae([]), [g, S] = X(""), x = (z) => {
      k || _(z), i?.(z);
    }, w = (z) => {
      const m = N.current[z];
      m && !m.disabled && (m.focus(), m.select());
    }, E = (z, m) => {
      const M = m.replace(/\D/g, "").slice(-1), P = u.split("");
      if (M) {
        P[z] = M;
        const j = P.join("").slice(0, t);
        x(j), j.length < t ? w(z + 1) : p && S("Code complete");
      }
    }, I = (z, m) => {
      if (m.key === "Backspace") {
        if (m.preventDefault(), u[z]) {
          const M = u.split("");
          M[z] = "", x(M.join(""));
        } else if (z > 0) {
          const M = u.split("");
          M[z - 1] = "", x(M.join("")), w(z - 1);
        }
      } else m.key === "ArrowLeft" && z > 0 ? (m.preventDefault(), w(z - 1)) : m.key === "ArrowRight" && z < t - 1 ? (m.preventDefault(), w(z + 1)) : m.key === "Home" ? (m.preventDefault(), w(0)) : m.key === "End" && (m.preventDefault(), w(t - 1));
    }, C = (z, m) => {
      m.preventDefault();
      const M = m.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!M) return;
      const P = u.split("");
      let j = 0;
      for (let F = 0; F < M.length && z + F < t; F++)
        P[z + F] = M[F] ?? "", j++;
      const T = P.join("");
      x(T), T.length >= t ? p && S("Code complete") : w(z + j);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [rn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": v ?? l,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [rn.cells, rn[h]].join(" "), children: y.map((z, m) => /* @__PURE__ */ n(
            "input",
            {
              ref: (M) => {
                N.current[m] = M, m === 0 && b && (typeof b == "function" ? b(M) : b.current = M);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: z,
              disabled: a,
              "aria-label": `Digit ${m + 1} of ${t}`,
              "aria-invalid": c && z !== "" ? !0 : void 0,
              autoFocus: r && m === 0,
              className: [
                rn.cell,
                rn[`cell-${h}`],
                c ? rn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (M) => E(m, M.target.value),
              onKeyDown: (M) => I(m, M),
              onPaste: (M) => C(m, M),
              onFocus: (M) => M.target.select(),
              onBlur: () => {
                p && S("");
              }
            },
            m
          )) }),
          p && /* @__PURE__ */ n(
            "span",
            {
              id: `${$}-live`,
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
), f0 = "_wrapper_1mvcz_1", h0 = "_header_1mvcz_7", p0 = "_label_1mvcz_15", m0 = "_clear_1mvcz_22", g0 = "_canvas_1mvcz_53", x0 = "_disabled_1mvcz_69", hn = {
  wrapper: f0,
  header: h0,
  label: p0,
  clear: m0,
  canvas: g0,
  disabled: x0
}, Nv = qe(
  function({
    value: t,
    defaultValue: s,
    onChange: o,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: h = "Clear",
    ariaLabel: r = "Signature",
    width: a,
    height: l = 140,
    disabled: p = !1,
    className: d
  }, v) {
    const b = ae(null), $ = ae(!1), k = ae(!1), f = ae({ x: 0, y: 0 });
    ke(() => {
      const x = b.current;
      if (!x) return;
      const w = window.devicePixelRatio || 1, E = Math.round((a ?? x.clientWidth) * w), I = Math.round(l * w);
      (x.width !== E || x.height !== I) && (x.width = E, x.height = I);
      const C = x.getContext("2d");
      if (!C) return;
      C.setTransform(w, 0, 0, w, 0, 0), C.lineWidth = c, C.strokeStyle = i, C.lineCap = "round", C.lineJoin = "round";
      const z = t ?? s;
      if (z) {
        const m = new Image();
        m.onload = () => {
          C.drawImage(m, 0, 0, x.clientWidth, l);
        }, m.src = z;
      }
    }, [t, s, i, c, a, l]);
    const _ = () => {
      const x = b.current;
      if (!x) return;
      const w = x.toDataURL("image/png");
      o?.(w);
    }, u = () => {
      const x = b.current;
      if (!x) return;
      const w = x.getContext("2d");
      w && w.clearRect(0, 0, x.width, x.height), o?.("");
    };
    cs(v, () => ({
      clear: u,
      toDataURL: (x = "image/png", w) => b.current?.toDataURL(x, w) ?? ""
    }));
    const y = (x) => {
      const w = x.currentTarget.getBoundingClientRect();
      return { x: x.clientX - w.left, y: x.clientY - w.top };
    }, N = (x) => {
      p || (x.preventDefault(), typeof x.currentTarget.setPointerCapture == "function" && x.currentTarget.setPointerCapture(x.pointerId), $.current = !0, k.current = !1, f.current = y(x));
    }, g = (x) => {
      if (!$.current) return;
      x.preventDefault();
      const w = x.currentTarget.getContext("2d");
      if (!w) return;
      const E = y(x);
      w.beginPath(), w.moveTo(f.current.x, f.current.y), w.lineTo(E.x, E.y), w.stroke(), f.current = E, k.current = !0;
    }, S = (x) => {
      $.current && (x.preventDefault(), $.current = !1, k.current && _());
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          hn.wrapper,
          d,
          p ? hn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ O("div", { className: hn.header, children: [
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
                width: a ? `${a}px` : void 0,
                height: `${l}px`
              },
              className: hn.canvas,
              onPointerDown: N,
              onPointerMove: g,
              onPointerUp: S,
              onPointerCancel: S
            }
          )
        ]
      }
    );
  }
), y0 = "_wrapper_17azb_1", b0 = "_trigger_17azb_7", v0 = "_list_17azb_35", k0 = "_row_17azb_44", w0 = "_name_17azb_59", $0 = "_size_17azb_68", N0 = "_progress_17azb_74", O0 = "_fill_17azb_82", S0 = "_status_17azb_99", z0 = "_remove_17azb_106", jt = {
  wrapper: y0,
  trigger: b0,
  list: v0,
  row: k0,
  name: w0,
  size: $0,
  progress: N0,
  fill: O0,
  status: S0,
  remove: z0
};
function Rs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Ov = qe(function({
  url: t,
  multiple: s = !1,
  parameterName: o = "files",
  auto: i = !0,
  headers: c,
  accept: h,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: l = "Upload",
  children: p,
  onProgress: d,
  onComplete: v,
  onError: b
}, $) {
  const k = ae(null), [f, _] = X([]), u = ae(/* @__PURE__ */ new Map()), y = (w, E) => {
    _(
      (I) => I.map((C) => C.file.name === w ? { ...C, ...E } : C)
    );
  }, N = (w) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    u.current.set(w.file.name, E);
    const I = new FormData();
    if (I.append(o, w.file), E.upload.addEventListener("progress", (C) => {
      if (!C.lengthComputable) return;
      const z = Math.round(C.loaded / C.total * 100);
      y(w.file.name, { state: "uploading", progress: z }), d?.(w.file.name, z);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (y(w.file.name, { state: "complete", progress: 100 }), v?.(w.file.name)) : (y(w.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), b?.(w.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      y(w.file.name, { state: "error", message: "Network error" }), b?.(w.file.name, "Network error");
    }), c)
      for (const [C, z] of Object.entries(c))
        E.setRequestHeader(C, z);
    E.open("POST", t), E.send(I), y(w.file.name, { state: "uploading", progress: 0 });
  }, g = (w) => {
    if (!w) return;
    const E = [...w], I = [];
    let C = Math.max(0, r - f.length);
    for (const m of E) {
      if (a != null && m.size > a) {
        b?.(
          m.name,
          `File too large (maximum ${Rs(a)})`
        );
        continue;
      }
      if (C <= 0) {
        b?.(m.name, `Too many files (maximum ${r})`);
        continue;
      }
      C -= 1, I.push(m);
    }
    const z = I.map((m) => ({
      file: m,
      state: "pending",
      progress: 0
    }));
    _((m) => [...m, ...z]), k.current && (k.current.value = ""), i && z.forEach(N);
  }, S = (w) => {
    u.current.get(w)?.abort(), u.current.delete(w), _((I) => I.filter((C) => C.file.name !== w));
  }, x = p ?? /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: jt.trigger,
      onClick: () => k.current?.click(),
      children: [
        /* @__PURE__ */ n(De, { name: "upload", size: 14 }),
        l
      ]
    }
  );
  return cs($, () => ({
    open: () => k.current?.click(),
    upload: () => f.forEach((w) => w.state === "pending" ? N(w) : null)
  })), /* @__PURE__ */ O("div", { className: jt.wrapper, children: [
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
        onChange: (w) => g(w.target.files)
      }
    ),
    !p && f.length > 0 && /* @__PURE__ */ n("ul", { className: jt.list, children: f.map(({ file: w, state: E, progress: I, message: C }) => /* @__PURE__ */ O(
      "li",
      {
        className: jt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: jt.name, children: w.name }),
          /* @__PURE__ */ n("span", { className: jt.size, children: Rs(w.size) }),
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
              "aria-label": `Remove ${w.name}`,
              onClick: () => S(w.name),
              children: /* @__PURE__ */ n(De, { name: "close", size: 14 })
            }
          )
        ]
      },
      w.name
    )) })
  ] });
}), D0 = "_zone_1cstd_1", M0 = "_dragging_1cstd_23", C0 = "_caption_1cstd_28", E0 = "_browse_1cstd_40", I0 = "_disabled_1cstd_67", Dn = {
  zone: D0,
  dragging: M0,
  caption: C0,
  browse: E0,
  disabled: I0
};
function j0(e, t) {
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
const Sv = qe(
  function({
    accept: t,
    multiple: s = !1,
    onDrop: o,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: h = "Browse",
    disabled: r = !1,
    className: a
  }, l) {
    const p = ae(null), [d, v] = X(!1), b = (u) => {
      if (!u || u.length === 0) return;
      const y = [...u].filter((N) => j0(N, t ?? ""));
      y.length !== 0 && o?.(y);
    }, $ = (u) => {
      r || (u.preventDefault(), v(!0));
    }, k = (u) => {
      r || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", v(!0));
    }, f = (u) => {
      r || u.currentTarget.contains(u.relatedTarget) || v(!1);
    }, _ = (u) => {
      r || (u.preventDefault(), v(!1), b(u.dataTransfer.files));
    };
    return cs(l, () => ({
      open: () => p.current?.click()
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
        onDragEnter: $,
        onDragOver: k,
        onDragLeave: f,
        onDrop: _,
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
), A0 = "_root_2n1we_1", T0 = "_menubar_2n1we_5", R0 = "_horizontal_2n1we_15", L0 = "_vertical_2n1we_20", P0 = "_itemWrapper_2n1we_25", B0 = "_item_2n1we_25", F0 = "_disabled_2n1we_61", q0 = "_icon_2n1we_68", H0 = "_text_2n1we_75", K0 = "_caret_2n1we_79", U0 = "_hasChildren_2n1we_85", W0 = "_submenu_2n1we_94", V0 = "_submenuItem_2n1we_118", ct = {
  root: A0,
  menubar: T0,
  horizontal: R0,
  vertical: L0,
  itemWrapper: P0,
  item: B0,
  disabled: F0,
  icon: q0,
  text: H0,
  caret: K0,
  hasChildren: U0,
  submenu: W0,
  submenuItem: V0
};
function Mn(e) {
  return !!e.disabled;
}
function zv({
  items: e,
  orientation: t = "horizontal",
  onClick: s,
  ariaLabel: o = "Menu",
  className: i
}) {
  const c = Ye(), h = ae(null), r = ae(null), [a, l] = X(null), p = ae(0), d = ae(null), v = H(
    (f) => {
      const _ = {
        text: f.text,
        value: f.value,
        path: f.path
      };
      s?.(_);
    },
    [s]
  ), b = H(
    (f, _) => {
      if (!Mn(f)) {
        if (f.children && f.children.length > 0) {
          const u = a === _, y = Date.now() - p.current < 600;
          if (u && y) {
            p.current = 0;
            return;
          }
          l((N) => N === _ ? null : _);
          return;
        }
        v(f), l(null);
      }
    },
    [v, a]
  ), $ = (f) => {
    Mn(f) || f.children && f.children.length > 0 || (v(f), l(null));
  };
  ke(() => {
    if (a == null) return;
    const f = (_) => {
      h.current && !h.current.contains(_.target) && l(null);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [a]), ke(() => {
    if (d.current != null && a === d.current) {
      const f = `${c}-submenu-${a}`;
      document.getElementById(f)?.querySelector(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )?.focus(), d.current = null;
    }
  }, [a, c]);
  const k = (f) => {
    const _ = r.current;
    if (!_) return;
    const u = Array.from(
      _.querySelectorAll('[data-top="true"]')
    ).filter(
      (g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true"
    );
    if (a != null) {
      const g = `${c}-submenu-${a}`, S = document.getElementById(g);
      if (S) {
        const x = Array.from(
          S.querySelectorAll('[role="menuitem"]')
        ).filter((I) => I.getAttribute("aria-disabled") !== "true"), w = document.activeElement, E = w ? x.indexOf(w) : -1;
        if (f.key === "ArrowDown") {
          f.preventDefault(), E === -1 ? x[0]?.focus() : x[(E + 1) % x.length]?.focus();
          return;
        }
        if (f.key === "ArrowUp") {
          f.preventDefault(), E === -1 ? x[x.length - 1]?.focus() : x[(E - 1 + x.length) % x.length]?.focus();
          return;
        }
        if (f.key === "Escape") {
          f.preventDefault(), l(null), _.querySelector(
            `[data-top="true"][data-index="${a}"]`
          )?.focus();
          return;
        }
        if (f.key === "Enter" || f.key === " ")
          return;
      }
      if (f.key === "Escape") {
        f.preventDefault(), l(null);
        return;
      }
    }
    const y = document.activeElement, N = y ? u.indexOf(y) : -1;
    if (f.key === "ArrowRight" || t === "vertical" && f.key === "ArrowDown") {
      if (f.preventDefault(), u.length === 0) return;
      const g = N === -1 ? 0 : (N + 1) % u.length;
      u[g]?.focus();
      return;
    }
    if (f.key === "ArrowLeft" || t === "vertical" && f.key === "ArrowUp") {
      if (f.preventDefault(), u.length === 0) return;
      const g = N === -1 ? u.length - 1 : (N - 1 + u.length) % u.length;
      u[g]?.focus();
      return;
    }
    if (f.key === "ArrowDown") {
      if (N >= 0) {
        const g = y?.getAttribute("data-index"), S = g != null ? Number(g) : -1, x = S >= 0 ? e[S] : void 0;
        x?.children && x.children.length > 0 && !Mn(x) && (f.preventDefault(), d.current = S, l(S));
      }
      return;
    }
    if (f.key === "Home") {
      f.preventDefault(), u[0]?.focus();
      return;
    }
    if (f.key === "End") {
      f.preventDefault(), u[u.length - 1]?.focus();
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
          children: e.map((f, _) => {
            const u = !!f.children && f.children.length > 0, y = a === _, N = Mn(f), g = `${c}-submenu-${_}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && u && !N && (p.current = Date.now(), l(_));
                },
                onMouseLeave: () => {
                  t === "horizontal" && u && l((S) => S === _ ? null : S);
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
                      "aria-disabled": N || void 0,
                      "aria-haspopup": u ? "menu" : void 0,
                      "aria-expanded": u ? y : void 0,
                      "aria-controls": u ? g : void 0,
                      tabIndex: N ? -1 : 0,
                      disabled: N,
                      className: [
                        ct.item,
                        N ? ct.disabled : null,
                        u ? ct.hasChildren : null
                      ].filter(Boolean).join(" "),
                      onClick: () => b(f, _),
                      children: [
                        f.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: f.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: f.text }),
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
                      "aria-label": f.text,
                      children: f.children?.map((S, x) => {
                        const w = Mn(S), E = !!S.children && S.children.length > 0;
                        return /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": w || void 0,
                            "aria-haspopup": E ? "menu" : void 0,
                            tabIndex: w ? -1 : 0,
                            disabled: w,
                            className: [
                              ct.submenuItem,
                              w ? ct.disabled : null
                            ].filter(Boolean).join(" "),
                            onClick: () => $(S),
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
              `${f.text}-${_}`
            );
          })
        }
      )
    }
  );
}
const X0 = "_root_12bqn_1", G0 = "_list_12bqn_9", Y0 = "_item_12bqn_14", Z0 = "_trigger_12bqn_18", J0 = "_disabled_12bqn_44", Q0 = "_expanded_12bqn_51", ex = "_icon_12bqn_55", tx = "_text_12bqn_66", nx = "_caret_12bqn_73", sx = "_open_12bqn_80", rx = "_submenu_12bqn_84", ox = "_submenuItem_12bqn_93", ax = "_nestedWrapper_12bqn_122", lx = "_nestedTrigger_12bqn_127", ix = "_nestedMenu_12bqn_152", cx = "_iconOnly_12bqn_160", Ae = {
  root: X0,
  list: G0,
  item: Y0,
  trigger: Z0,
  disabled: J0,
  expanded: Q0,
  icon: ex,
  text: tx,
  caret: nx,
  open: sx,
  submenu: rx,
  submenuItem: ox,
  nestedWrapper: ax,
  nestedTrigger: lx,
  nestedMenu: ix,
  iconOnly: cx
};
function dx({
  item: e,
  baseId: t,
  parentKey: s,
  onEmit: o
}) {
  const i = !!e.children && e.children.length > 0, [c, h] = X(!1), r = `${t}-nested-${s}`, a = !!e.disabled, l = () => {
    if (!a) {
      if (i) {
        h((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), l()) : d.key === "Escape" && c && (d.preventDefault(), h(!1));
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
      return /* @__PURE__ */ O(
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
          onKeyDown: ($) => {
            if ($.key === "Enter" || $.key === " ") {
              if ($.preventDefault(), b) return;
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
function Dv({
  items: e,
  multiple: t,
  showArrow: s,
  displayStyle: o,
  onClick: i,
  ariaLabel: c = "Panel menu",
  className: h
}) {
  const r = Ye(), a = t ?? !1, l = s ?? !0, p = o ?? "iconAndText", [d, v] = X([]), b = H(
    (f) => {
      const _ = {
        text: f.text,
        value: f.value,
        path: f.path
      };
      i?.(_);
    },
    [i]
  ), $ = (f, _, u) => {
    if (!u.disabled) {
      if (_) {
        v((y) => y.includes(f) ? y.filter((g) => g !== f) : a ? [...y, f] : [f]);
        return;
      }
      b(u);
    }
  }, k = (f) => {
    const _ = f.target;
    if (!(f.key === "Enter" || f.key === " ")) {
      if (f.key === "Escape") {
        const u = _.getAttribute("aria-controls");
        if (u) {
          const y = u.match(/-panel-(\d+)$/);
          if (y) {
            const N = Number(y[1]);
            v((g) => g.filter((S) => S !== N));
          }
        } else {
          const y = _.closest('[role="menu"]');
          if (y) {
            const g = y.id.match(/-panel-(\d+)$/);
            if (g) {
              const S = Number(g[1]);
              v((w) => w.filter((E) => E !== S)), document.getElementById(`${r}-trigger-${S}`)?.focus();
            }
          }
        }
        f.preventDefault();
        return;
      }
      if (f.key === "ArrowDown" || f.key === "ArrowUp") {
        const u = Array.from(
          f.currentTarget.querySelectorAll(
            'button, [role="menuitem"]'
          )
        ).filter(
          (S) => !S.hasAttribute("disabled") && S.getAttribute("aria-disabled") !== "true"
        ), y = u.indexOf(_);
        if (y === -1) return;
        f.preventDefault();
        const N = f.key === "ArrowDown" ? 1 : -1;
        u[(y + N + u.length) % u.length]?.focus();
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
      children: /* @__PURE__ */ n("div", { className: Ae.list, role: "presentation", children: e.map((f, _) => {
        const u = !!f.children && f.children.length > 0, y = d.includes(_), N = !!f.disabled, g = `${r}-panel-${_}`, S = `${r}-trigger-${_}`;
        return /* @__PURE__ */ O("div", { className: Ae.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: S,
              "aria-expanded": u ? y : void 0,
              "aria-controls": u ? g : void 0,
              "aria-disabled": N || void 0,
              disabled: N,
              tabIndex: N ? -1 : 0,
              className: [
                Ae.trigger,
                N ? Ae.disabled : null,
                y ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => $(_, u, f),
              children: [
                f.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: f.icon }) : null,
                p === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: f.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": f.text, children: f.icon ? null : f.text.slice(0, 1) }),
                u && l ? /* @__PURE__ */ n(
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
              children: f.children?.map((x, w) => /* @__PURE__ */ n(
                dx,
                {
                  item: x,
                  baseId: r,
                  parentKey: `${_}-${w}`,
                  onEmit: b
                },
                `${x.text}-${w}`
              ))
            }
          ) : null
        ] }, `${f.text}-${_}`);
      }) })
    }
  );
}
const ux = "_root_wnctl_1", _x = "_trigger_wnctl_7", fx = "_defaultTrigger_wnctl_40", hx = "_avatar_wnctl_46", px = "_menu_wnctl_58", mx = "_item_wnctl_74", gx = "_disabled_wnctl_88", xx = "_active_wnctl_97", yx = "_icon_wnctl_107", bx = "_text_wnctl_114", At = {
  root: ux,
  trigger: _x,
  defaultTrigger: fx,
  avatar: hx,
  menu: px,
  item: mx,
  disabled: gx,
  active: xx,
  icon: yx,
  text: bx
};
function Mv({
  items: e,
  trigger: t,
  onClick: s,
  ariaLabel: o = "Profile menu",
  className: i
}) {
  const c = Ye(), h = `${c}-menu`, r = ae(null), a = ae(null), [l, p] = X(!1), [d, v] = X(-1), b = t, $ = e.map((g, S) => g.disabled ? -1 : S).filter((g) => g >= 0), k = H(
    (g) => {
      if (g.disabled) return;
      const S = {
        text: g.text,
        path: g.path
      };
      s?.(S), p(!1), a.current?.focus();
    },
    [s]
  ), f = H(() => {
    v($[0] ?? -1), p(!0);
  }, [$]), _ = H(() => {
    p(!1), v(-1), a.current?.focus();
  }, []);
  ke(() => {
    if (!l) return;
    const g = (S) => {
      r.current && !r.current.contains(S.target) && (p(!1), v(-1));
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [l]), ke(() => {
    if (!l) return;
    const g = (S) => {
      S.key === "Escape" && (S.preventDefault(), _());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [l, _]);
  const u = (g) => {
    if ($.length === 0) return;
    const S = $.indexOf(d), x = S === -1 ? 0 : (S + g + $.length) % $.length, w = $[x];
    w != null && v(w);
  }, y = (g) => {
    if (!l) {
      (g.key === "ArrowDown" || g.key === "Enter" || g.key === " ") && (g.preventDefault(), f());
      return;
    }
    switch (g.key) {
      case "Escape":
        g.preventDefault(), _();
        break;
      case "ArrowDown":
        g.preventDefault(), u(1);
        break;
      case "ArrowUp":
        g.preventDefault(), u(-1);
        break;
      case "Home":
        g.preventDefault(), $[0] != null && v($[0]);
        break;
      case "End":
        g.preventDefault(), $[$.length - 1] != null && v($[$.length - 1]);
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
  }, N = (g) => {
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), u(1);
        break;
      case "ArrowUp":
        g.preventDefault(), u(-1);
        break;
      case "Home":
        g.preventDefault(), $[0] != null && v($[0]);
        break;
      case "End":
        g.preventDefault(), $[$.length - 1] != null && v($[$.length - 1]);
        break;
      case "Enter":
      case " ":
        if (g.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Escape":
        g.preventDefault(), _();
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
      children: /* @__PURE__ */ O("nav", { "aria-label": o, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": l,
            "aria-controls": h,
            "aria-label": o,
            className: At.trigger,
            onClick: () => l ? _() : f(),
            onKeyDown: y,
            children: b ?? /* @__PURE__ */ O("span", { className: At.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: At.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        l ? /* @__PURE__ */ n(
          "div",
          {
            id: h,
            role: "menu",
            "aria-label": o,
            "aria-activedescendant": d >= 0 ? `${c}-item-${d}` : void 0,
            className: At.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((g, S) => {
              const x = !!g.disabled, w = S === d;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${c}-item-${S}`,
                  role: "menuitem",
                  "aria-disabled": x || void 0,
                  tabIndex: x ? -1 : 0,
                  className: [
                    At.item,
                    w ? At.active : null,
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
const vx = "_root_6bmhq_1", kx = "_bottomRight_6bmhq_11", wx = "_bottomLeft_6bmhq_16", $x = "_topRight_6bmhq_21", Nx = "_topLeft_6bmhq_26", Ox = "_menu_6bmhq_31", Sx = "_itemWrapper_6bmhq_48", zx = "_tooltip_6bmhq_54", Dx = "_main_6bmhq_76", Mx = "_mainIcon_6bmhq_104", Cx = "_mainOpen_6bmhq_109", Ex = "_item_6bmhq_48", Ix = "_disabled_6bmhq_141", jx = "_itemIcon_6bmhq_148", ut = {
  root: vx,
  bottomRight: kx,
  bottomLeft: wx,
  topRight: $x,
  topLeft: Nx,
  menu: Ox,
  itemWrapper: Sx,
  tooltip: zx,
  main: Dx,
  mainIcon: Mx,
  mainOpen: Cx,
  item: Ex,
  disabled: Ix,
  itemIcon: jx
};
function Cv({
  items: e,
  position: t,
  icon: s = "+",
  onClick: o,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const h = t ?? "bottom-right", a = `${Ye()}-menu`, l = ae(null), p = ae(null), [d, v] = X(!1), b = H(
    (_) => {
      if (_.disabled) return;
      const u = { text: _.text, value: _.value };
      o?.(u), v(!1), p.current?.focus();
    },
    [o]
  );
  ke(() => {
    if (!d) return;
    const _ = (u) => {
      l.current && !l.current.contains(u.target) && v(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [d]), ke(() => {
    if (!d) return;
    const _ = (u) => {
      u.key === "Escape" && (v(!1), p.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [d]);
  const $ = h === "bottom-right" ? ut.bottomRight : h === "bottom-left" ? ut.bottomLeft : h === "top-right" ? ut.topRight : ut.topLeft, k = (_) => {
    !d && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), v(!0)) : d && _.key === "Escape" && (_.preventDefault(), v(!1));
  }, f = (_) => {
    _.key === "Escape" && (_.preventDefault(), v(!1), p.current?.focus());
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: l,
      className: [ut.root, $, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        d ? /* @__PURE__ */ n(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": i,
            className: ut.menu,
            onKeyDown: f,
            children: e.map((_, u) => {
              const y = !!_.disabled;
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": y || void 0,
                    title: _.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [ut.item, y ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => b(_),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${u}`);
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
            "aria-controls": a,
            "aria-label": i,
            onClick: () => v((_) => !_),
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
const Ax = "_root_17721_1", Tx = "_list_17721_5", Rx = "_item_17721_15", Lx = "_link_17721_22", Px = "_linkButton_17721_23", Bx = "_current_17721_24", Fx = "_disabled_17721_68", qx = "_icon_17721_74", Hx = "_text_17721_81", Kx = "_separator_17721_85", Ue = {
  root: Ax,
  list: Tx,
  item: Rx,
  link: Lx,
  linkButton: Px,
  current: Bx,
  disabled: Fx,
  icon: qx,
  text: Hx,
  separator: Kx
};
function Ev({
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
        const a = r === e.length - 1, l = !!h.disabled;
        return /* @__PURE__ */ O("li", { className: Ue.item, children: [
          a ? l ? /* @__PURE__ */ O(
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
          ) : h.path ? /* @__PURE__ */ O(
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
          ) : /* @__PURE__ */ O(
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
          ) : l ? /* @__PURE__ */ O(
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
          ) : h.path ? /* @__PURE__ */ O(
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
          ) : /* @__PURE__ */ O(
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
          a ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${h.text}-${r}`);
      }) })
    }
  );
}
const Ux = "_root_pfzz5_1", Wx = "_list_pfzz5_5", Vx = "_item_pfzz5_15", Xx = "_connector_pfzz5_21", Gx = "_connectorCompleted_pfzz5_30", Yx = "_step_pfzz5_34", Zx = "_active_pfzz5_69", Jx = "_completed_pfzz5_75", Qx = "_circle_pfzz5_79", ey = "_check_pfzz5_109", ty = "_icon_pfzz5_114", ny = "_number_pfzz5_119", sy = "_text_pfzz5_124", _t = {
  root: Ux,
  list: Wx,
  item: Vx,
  connector: Xx,
  connectorCompleted: Gx,
  step: Yx,
  active: Zx,
  completed: Jx,
  circle: Qx,
  check: ey,
  icon: ty,
  number: ny,
  text: sy
};
function Iv({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  linear: i,
  Linear: c,
  onChange: h,
  Change: r,
  onSelectedIndexChange: a,
  ariaLabel: l = "Steps",
  className: p
}) {
  const d = i ?? c ?? !1, v = t ?? s, b = v !== void 0, [$, k] = X(() => Math.min(Math.max(0, v ?? o), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, b ? v : $),
    Math.max(0, e.length - 1)
  ), u = ae(null), y = H(
    (S) => {
      const x = Math.min(
        Math.max(0, S),
        Math.max(0, e.length - 1)
      );
      b || k(x), (h ?? r ?? a)?.(x);
    },
    [b, h, r, a, e.length]
  ), N = H(
    (S, x) => !!(x.disabled || d && S > _ + 1),
    [d, _]
  ), g = (S) => {
    const x = Array.from(
      S.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), w = document.activeElement, E = w ? x.indexOf(w) : -1;
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
      "aria-label": l,
      className: [_t.root, p].filter(Boolean).join(" "),
      onKeyDown: g,
      children: /* @__PURE__ */ n("ol", { ref: u, role: "list", className: _t.list, children: e.map((S, x) => {
        const w = x === _, E = x < _, I = N(x, S);
        return /* @__PURE__ */ O(
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
              /* @__PURE__ */ O(
                "button",
                {
                  type: "button",
                  "data-step": x,
                  "aria-current": w ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    _t.step,
                    w ? _t.active : null,
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
const ry = "_root_1axlw_1", oy = "_horizontal_1axlw_13", ay = "_vertical_1axlw_17", ly = "_pane_1axlw_21", iy = "_handle_1axlw_31", cy = "_handleHorizontal_1axlw_51", dy = "_handleVertical_1axlw_57", uy = "_handleGrip_1axlw_63", _y = "_handleCollapseHint_1axlw_75", fy = "_collapseBtn_1axlw_79", hy = "_collapseBtnCollapsed_1axlw_109", wt = {
  root: ry,
  horizontal: oy,
  vertical: ay,
  pane: ly,
  handle: iy,
  handleHorizontal: cy,
  handleVertical: dy,
  handleGrip: uy,
  handleCollapseHint: _y,
  collapseBtn: fy,
  collapseBtnCollapsed: hy
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
function Kt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function jv({
  orientation: e,
  Orientation: t,
  panes: s,
  onResize: o,
  Resize: i,
  onCollapse: c,
  Collapse: h,
  ariaLabel: r = "Splitter",
  className: a
}) {
  const l = e ?? t ?? "horizontal", p = l === "horizontal", d = ae(null), v = H(() => {
    const m = s.length;
    if (m === 0) return [];
    const M = s.map((j) => j.size ? Cn(j.size, 100 / m) : 100 / m), P = M.reduce((j, T) => j + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? M.map((j) => j / P * 100) : M;
  }, [s]), [b, $] = X(() => v()), [k, f] = X(
    () => s.map((m) => !!m.collapsed)
  ), _ = ae(b);
  ke(() => {
    f(s.map((m) => !!m.collapsed));
  }, [s]);
  const u = H(
    () => s.map((m) => Cn(m.min, 0)),
    [s]
  ), y = H(
    () => s.map((m) => Cn(m.max, 100)),
    [s]
  ), N = H(
    (m, M) => {
      const P = { paneIndex: m, newSize: M, cancel: !1 };
      return (o ?? i)?.(P), !P.cancel;
    },
    [o, i]
  ), g = H(
    (m, M) => {
      const P = { paneIndex: m, collapse: M, cancel: !1 };
      return (c ?? h)?.(P), !P.cancel;
    },
    [c, h]
  ), S = H(
    (m) => {
      const M = !k[m];
      g(m, M) && (M ? (_.current = [...b], f((P) => {
        const j = [...P];
        return j[m] !== void 0 && (j[m] = !0), j;
      }), $((P) => {
        const j = [...P], T = j[m] ?? 0, F = m < j.length - 1 ? m + 1 : m - 1;
        if (F >= 0 && F < j.length) {
          const V = j[F] ?? 0;
          j[F] = V + T, j[m] = 0;
        } else
          j[m] = 0;
        return j;
      })) : (f((P) => {
        const j = [...P];
        return j[m] !== void 0 && (j[m] = !1), j;
      }), $(() => {
        const P = [..._.current];
        return P.length !== s.length ? s.map(() => 100 / s.length) : P;
      })));
    },
    [k, b, s.length, g]
  ), x = ae(
    null
  ), w = H(
    (m, M, P) => {
      const j = d.current;
      if (!j) return null;
      const T = j.getBoundingClientRect();
      let F;
      if (p) {
        if (T.width === 0) return null;
        F = (M - T.left) / T.width * 100;
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
  ), E = (m, M) => {
    M.preventDefault();
    const P = M.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(M.pointerId), x.current = { handleIndex: m, pointerId: M.pointerId };
  }, I = (m) => {
    if (!x.current || x.current.pointerId !== m.pointerId)
      return;
    m.preventDefault();
    const M = x.current.handleIndex, P = w(M, m.clientX, m.clientY);
    if (P == null) return;
    const j = u(), T = y(), F = j[M] ?? 0, V = T[M] ?? 100, Z = M + 1, Q = j[Z] ?? 0, K = T[Z] ?? 100, te = b[M] ?? 0, oe = b[Z] ?? 0, ee = te + oe;
    if (ee <= 0) return;
    let L = Kt(P, F, V), ie = ee - L;
    if (ie < Q) {
      if (ie = Q, L = ee - ie, L < F || L > V) return;
    } else if (ie > K && (ie = K, L = ee - ie, L < F || L > V))
      return;
    L = Kt(L, F, V), ie = ee - L, N(M, L) && $((Y) => {
      const de = [...Y];
      return de[M] = L, de[Z] = ie, de;
    });
  }, C = (m) => {
    !x.current || x.current.pointerId !== m.pointerId || (x.current = null);
  }, z = (m, M) => {
    const P = u(), j = y(), T = m, F = m + 1, V = b[T] ?? 0, Z = b[F] ?? 0, Q = V + Z;
    let K = 0;
    const te = !!s[T]?.collapsible, oe = !!s[F]?.collapsible;
    if (p ? M.key === "ArrowLeft" ? K = -5 : M.key === "ArrowRight" && (K = 5) : M.key === "ArrowUp" ? K = -5 : M.key === "ArrowDown" && (K = 5), M.key === "Home") {
      M.preventDefault();
      let ee = P[T] ?? 0, L = Q - ee;
      if (L = Kt(
        L,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - L, ee = Kt(ee, P[T] ?? 0, j[T] ?? 100), !N(T, ee)) return;
      $((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[F] = L, Y;
      });
      return;
    }
    if (M.key === "End") {
      M.preventDefault();
      let ee = j[T] ?? 100;
      ee = Math.min(ee, Q - (P[F] ?? 0));
      let L = Q - ee;
      if (L = Kt(
        L,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - L, ee = Kt(ee, P[T] ?? 0, j[T] ?? 100), !N(T, ee)) return;
      $((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[F] = L, Y;
      });
      return;
    }
    if ((M.key === "Enter" || M.key === " ") && (te || oe)) {
      M.preventDefault(), S(te ? T : F);
      return;
    }
    if (K !== 0) {
      M.preventDefault();
      let ee = V + K, L = Q - ee;
      const ie = P[T] ?? 0, Y = j[T] ?? 100, de = P[F] ?? 0, le = j[F] ?? 100;
      if (ee = Kt(ee, ie, Y), L = Q - ee, (L < de || L > le) && (L = Kt(L, de, le), ee = Q - L, ee = Kt(ee, ie, Y), L = Q - ee), !N(T, ee)) return;
      $((ye) => {
        const we = [...ye];
        return we[T] = ee, we[F] = L, we;
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
        a
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: s.map((m, M) => {
        const P = !!k[M], j = P ? 0 : b[M] ?? 100 / s.length, T = P ? { display: "none" } : p ? {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = Cn(m.min, 0), V = Cn(m.max, 100), Z = M < s.length - 1, Q = !!s[M + 1]?.collapsible;
        return /* @__PURE__ */ O("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ O(
            "div",
            {
              role: "group",
              "aria-label": m.label ?? `Pane ${M + 1}`,
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
                    "aria-label": `Collapse pane ${M + 1}`,
                    "aria-expanded": !P,
                    onClick: () => S(M),
                    children: p ? "◀" : "▲"
                  }
                ) : null,
                m.collapsible && P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: wt.collapseBtn,
                    "aria-label": `Expand pane ${M + 1}`,
                    "aria-expanded": !P,
                    onClick: () => S(M),
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
                "aria-label": `Expand pane ${M + 1}`,
                "aria-expanded": "false",
                onClick: () => S(M),
                children: p ? "▶" : "▼"
              }
            )
          ) : null,
          Z ? /* @__PURE__ */ O(
            "div",
            {
              role: "separator",
              "aria-orientation": l,
              "aria-valuemin": F,
              "aria-valuemax": V,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${M + 1}`,
              tabIndex: P || k[M + 1] ? -1 : 0,
              className: [
                wt.handle,
                p ? wt.handleHorizontal : wt.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (K) => E(M, K),
              onPointerMove: I,
              onPointerUp: C,
              onKeyDown: (K) => z(M, K),
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
        ] }, M);
      })
    }
  );
}
const py = "_root_exk72_1", my = "_list_exk72_5", gy = "_vertical_exk72_14", xy = "_horizontal_exk72_20", yy = "_item_exk72_28", by = "_link_exk72_32", vy = "_active_exk72_57", pn = {
  root: py,
  list: my,
  vertical: gy,
  horizontal: xy,
  item: yy,
  link: by,
  active: vy
};
function Av({
  items: e,
  selector: t,
  Selector: s,
  orientation: o,
  Orientation: i,
  onClick: c,
  Click: h,
  ariaLabel: r = "Table of contents",
  className: a
}) {
  const l = t ?? s, p = o ?? i ?? "vertical", [d, v] = X(
    () => e[0]?.selector ?? null
  ), b = ae(d);
  b.current = d;
  const $ = H(
    (k, f) => {
      if (v(k.selector), (c ?? h)?.({ text: k.text, selector: k.selector }), f) {
        try {
          f.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          f.scrollIntoView();
        }
        const u = f;
        u.getAttribute("tabindex") == null && u.tabIndex === -1 || u.tabIndex < 0 ? (u.getAttribute("tabindex"), u.setAttribute("tabindex", "-1"), u.focus({ preventScroll: !0 })) : u.focus({ preventScroll: !0 });
      }
    },
    [c, h]
  );
  return ke(() => {
    if (e.length === 0) return;
    const f = (() => {
      if (l) {
        const g = document.querySelector(l);
        if (g) return g;
      }
      return window;
    })();
    let _ = null;
    const u = /* @__PURE__ */ new Map(), y = () => {
      let g = null, S = null;
      for (const w of e) {
        const E = document.querySelector(w.selector);
        if (!E) continue;
        u.set(w.selector, E);
        const I = E.getBoundingClientRect();
        let C = I.top;
        if (f !== window) {
          const z = f.getBoundingClientRect();
          C = I.top - z.top;
        }
        C <= 80 ? (!S || C > S.el.getBoundingClientRect().top - (f !== window ? f.getBoundingClientRect().top : 0)) && (S = { sel: w.selector, el: E }) : (!g || C < g.top) && (g = { sel: w.selector, top: C });
      }
      const x = S?.sel ?? g?.sel ?? e[0]?.selector ?? null;
      x && x !== b.current && v(x);
    }, N = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const g = f === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: f,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver((S) => {
        const x = S.filter((w) => w.isIntersecting).sort((w, E) => w.boundingClientRect.top - E.boundingClientRect.top);
        if (x[0]) {
          const w = x[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === w) {
              v(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && w.id === E.selector.slice(1)) {
              v(E.selector);
              break;
            }
          }
        } else
          y();
      }, g);
      for (const S of e) {
        const x = document.querySelector(S.selector);
        x && (_.observe(x), u.set(S.selector, x));
      }
    }
    return f === window ? (window.addEventListener("scroll", N, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", N), _?.disconnect();
    }) : (f.addEventListener("scroll", N, {
      passive: !0
    }), y(), () => {
      f.removeEventListener("scroll", N), _?.disconnect();
    });
  }, [e, l]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [pn.root, pn[p], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: pn.list, children: e.map((k) => {
        const f = k.selector === d;
        return /* @__PURE__ */ n("li", { className: pn.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: k.selector.startsWith("#") || k.selector.startsWith(".") ? k.selector : `#${k.selector}`,
            className: [pn.link, f ? pn.active : null].filter(Boolean).join(" "),
            "aria-current": f ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const u = document.querySelector(k.selector);
              $(k, u);
            },
            children: k.text
          }
        ) }, `${k.text}-${k.selector}`);
      }) })
    }
  );
}
const ky = "_root_1i6qn_1", wy = "_viewport_1i6qn_17", $y = "_slide_1i6qn_24", Ny = "_active_1i6qn_33", Oy = "_arrow_1i6qn_37", Sy = "_prev_1i6qn_71", zy = "_next_1i6qn_75", Dy = "_pauseBtn_1i6qn_79", My = "_indicators_1i6qn_110", Cy = "_indicator_1i6qn_110", Ey = "_indicatorActive_1i6qn_145", $t = {
  root: ky,
  viewport: wy,
  slide: $y,
  active: Ny,
  arrow: Oy,
  prev: Sy,
  next: zy,
  pauseBtn: Dy,
  indicators: My,
  indicator: Cy,
  indicatorActive: Ey
};
function Tv({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  auto: i,
  Auto: c,
  interval: h,
  Interval: r,
  pauseOnHover: a,
  PauseOnHover: l,
  showArrows: p,
  ShowArrows: d,
  showIndicators: v,
  ShowIndicators: b,
  onChange: $,
  Change: k,
  ariaLabel: f = "Carousel",
  className: _
}) {
  const u = t ?? s, y = u !== void 0, [N, g] = X(() => Math.min(Math.max(0, u ?? o), Math.max(0, e.length - 1))), S = y ? u : N, x = e.length === 0 ? 0 : Math.min(Math.max(0, S), e.length - 1), w = i ?? c ?? !1, E = h ?? r ?? 3e3, I = a ?? l ?? !0, C = p ?? d ?? !0, z = v ?? b ?? !0, [m, M] = X(!1), [P, j] = X(!1), T = m || P, F = ae(null), V = Ye(), Z = H(
    (de) => {
      const le = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      y || g(le), ($ ?? k)?.(le);
    },
    [y, $, k, e.length]
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
  ke(() => {
    if (!w || T || e.length <= 1) return;
    const de = setInterval(() => {
      Z(x + 1);
    }, E);
    return () => clearInterval(de);
  }, [w, T, E, x, Z, e.length]);
  const oe = (de) => {
    e.length !== 0 && (de.key === "ArrowLeft" ? (de.preventDefault(), Q()) : de.key === "ArrowRight" ? (de.preventDefault(), K()) : de.key === "Home" ? (de.preventDefault(), te(0)) : de.key === "End" && (de.preventDefault(), te(e.length - 1)));
  }, ee = () => {
    I && w && j(!0);
  }, L = () => {
    I && w && j(!1);
  }, ie = () => {
    I && w && j(!0);
  }, Y = () => {
    I && w && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ O(
    "div",
    {
      ref: F,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": f,
      tabIndex: 0,
      className: [$t.root, _].filter(Boolean).join(" "),
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
        C && e.length > 1 ? /* @__PURE__ */ O(Ce, { children: [
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
        w ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: $t.pauseBtn,
            "aria-label": m ? "Resume" : "Pause",
            "aria-pressed": m,
            onClick: () => M((de) => !de),
            children: m ? "▶" : "⏸"
          }
        ) : null,
        z && e.length > 1 ? /* @__PURE__ */ n(
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
const Iy = "_root_15u2v_1", jy = "_group_15u2v_20", Ay = "_itemWrapper_15u2v_30", Ty = "_treeitem_15u2v_34", Ry = "_disabled_15u2v_50", Ly = "_selected_15u2v_60", Py = "_caret_15u2v_66", By = "_caretIcon_15u2v_113", Fy = "_caretOpen_15u2v_120", qy = "_caretPlaceholder_15u2v_124", Hy = "_label_15u2v_130", Ky = "_loading_15u2v_137", Uy = "_loadingRow_15u2v_143", Wy = "_empty_15u2v_149", Vy = "_checkbox_15u2v_155", st = {
  root: Iy,
  group: jy,
  itemWrapper: Ay,
  treeitem: Ty,
  disabled: Ry,
  selected: Ly,
  caret: Py,
  caretIcon: By,
  caretOpen: Fy,
  caretPlaceholder: qy,
  label: Hy,
  loading: Ky,
  loadingRow: Uy,
  empty: Wy,
  checkbox: Vy
};
function Xy({
  indeterminate: e,
  ...t
}) {
  const s = ae(null);
  return ke(() => {
    s.current && (s.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: s, type: "checkbox", ...t });
}
function Rv({
  data: e,
  Data: t,
  children: s,
  Children: o,
  textProperty: i,
  TextProperty: c,
  keyProperty: h,
  KeyProperty: r,
  selectionMode: a,
  SelectionMode: l,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: v,
  SelectedItems: b,
  defaultSelectedItem: $,
  defaultSelectedItems: k,
  onChange: f,
  Change: _,
  onExpand: u,
  Expand: y,
  onCollapse: N,
  Collapse: g,
  loadChildData: S,
  LoadChildData: x,
  template: w,
  Template: E,
  itemTemplate: I,
  ItemTemplate: C,
  ariaLabel: z,
  AriaLabel: m,
  allowCheckBoxes: M = !1,
  checkedKeys: P,
  defaultCheckedKeys: j,
  onCheckedChange: T,
  allowCheckChildren: F = !0,
  className: V
}) {
  const Z = e ?? t ?? [], Q = s ?? o, K = i ?? c ?? "text", te = h ?? r ?? "id", oe = a ?? l ?? "single", ee = z ?? m ?? "Tree", L = S ?? x, ie = w ?? E ?? I ?? C, Y = H(
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
  ), [we, Be] = X(
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
      if ($) return /* @__PURE__ */ new Set([Y($)]);
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
    $,
    k,
    Y,
    le,
    Z
  ]), [D, q] = X(
    () => W()
  ), ne = $e(() => {
    if (oe === "multiple") {
      if (Le !== void 0) {
        const B = Le;
        return B ? new Set(B.map((G) => Y(G))) : /* @__PURE__ */ new Set();
      }
      return D;
    } else {
      if (Ve !== void 0) {
        const B = Ve;
        return B ? /* @__PURE__ */ new Set([Y(B)]) : /* @__PURE__ */ new Set();
      }
      return D;
    }
  }, [
    oe,
    Le,
    Ve,
    D,
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
          const fe = f ?? _;
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
          const fe = f ?? _;
          fe && fe({ item: B, selectedItem: B });
        } else {
          const fe = f ?? _;
          fe && fe({ item: B, selectedItem: B });
        }
    },
    [
      Y,
      oe,
      ne,
      et,
      f,
      _,
      se,
      _e
    ]
  ), Ne = H(
    async (B) => {
      const G = Y(B);
      if (!!B.disabled) return;
      const he = we.has(G), fe = u ?? y, be = N ?? g, Te = le(B), R = ve.get(G) ?? Te, pe = !(R !== void 0 && R.length > 0) && L != null;
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
            const at = new Map(Me);
            return at.set(G, je), at;
          }), Be((Me) => {
            const at = new Set(Me);
            return at.add(G), at;
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
      we,
      le,
      ve,
      L,
      xe,
      u,
      y,
      N,
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
      if (!M || !F) return !1;
      const G = Se(B);
      return G.length > 0 && G.every((re) => J.has(re));
    },
    [J, M, F, Se]
  ), Vt = H(
    (B) => {
      if (!M || !F || J.has(B))
        return !1;
      const G = Se(B);
      if (G.length === 0) return !1;
      const re = G.filter((he) => J.has(he)).length;
      return re > 0 && re < G.length;
    },
    [J, M, F, Se]
  ), Nt = H(
    (B) => {
      if (!M || B.disabled) return;
      const G = Y(B), re = new Set(J);
      if (re.has(G) || nt(G)) {
        if (re.delete(G), F)
          for (const he of Se(G)) re.delete(he);
      } else if (re.add(G), F)
        for (const he of Se(G)) re.add(he);
      P === void 0 && bt(re), T?.([...re]);
    },
    [
      M,
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
        const Ie = we.has(A), je = !!be.disabled, Me = re.length, at = Te + 1;
        if (B.push({
          item: be,
          key: A,
          text: R,
          level: he,
          posInSet: at,
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
    we,
    L,
    xe
  ]), [Xe, vt] = X(
    () => ze[0]?.key ?? null
  ), Rt = ae(""), Jt = ae(null), U = ae(null);
  ke(() => {
    if (!Xe && ze.length > 0) {
      const B = ze[0];
      B && vt(B.key);
    } else if (Xe && !ze.some((B) => B.key === Xe)) {
      const B = ze[0];
      vt(B ? B.key : null);
    }
  }, [ze, Xe]), ke(() => {
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
        if (B.key === " " && M) {
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
      M,
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
    const ce = we.has(be), pe = ne.has(be), Ie = !!he.disabled, je = xe.has(be), Me = Xe === be, at = B.length, St = fe + 1, er = ie ? ie(he) : Te, _s = M ? {
      checked: nt(be),
      indeterminate: Vt(be)
    } : null;
    return /* @__PURE__ */ O("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ O(
        "div",
        {
          role: "treeitem",
          "data-key": be,
          tabIndex: Me ? 0 : -1,
          "aria-expanded": R ? ce : void 0,
          "aria-selected": pe,
          "aria-level": G,
          "aria-setsize": at,
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
            M ? /* @__PURE__ */ n(
              Xy,
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
const Gy = "_root_12sxo_1", Yy = "_panel_12sxo_8", Zy = "_header_12sxo_19", Jy = "_listbox_12sxo_28", Qy = "_option_12sxo_42", eb = "_disabled_12sxo_57", tb = "_active_12sxo_66", nb = "_selected_12sxo_70", sb = "_empty_12sxo_86", rb = "_controls_12sxo_93", ob = "_reorder_12sxo_102", ab = "_btn_12sxo_110", Re = {
  root: Gy,
  panel: Yy,
  header: Zy,
  listbox: Jy,
  option: Qy,
  disabled: eb,
  active: tb,
  selected: nb,
  empty: sb,
  controls: rb,
  reorder: ob,
  btn: ab
};
function rt(e, t) {
  const s = e[t];
  return s != null ? String(s) : String(e.id ?? "");
}
function Wn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Lv({
  source: e,
  Source: t,
  target: s,
  Target: o,
  value: i,
  Value: c,
  targetValue: h,
  TargetValue: r,
  data: a,
  Data: l,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: v,
  TargetChange: b,
  keyProperty: $,
  KeyProperty: k,
  onMove: f,
  Move: _,
  ariaLabel: u,
  AriaLabel: y,
  className: N
}) {
  const g = $ ?? k ?? "id", S = u ?? y ?? "PickList", x = e ?? t ?? i ?? c ?? a ?? l ?? [], w = s ?? o ?? h ?? r ?? [], [E, I] = X(() => [
    ...x
  ]), [C, z] = X(() => [
    ...w
  ]);
  ke(() => {
    const D = e ?? t ?? i ?? c ?? a ?? l;
    D !== void 0 && I([...D]);
  }, [e, t, i, c, a, l]), ke(() => {
    const D = s ?? o ?? h ?? r;
    D !== void 0 && z([...D]);
  }, [s, o, h, r]);
  const [m, M] = X(
    () => /* @__PURE__ */ new Set()
  ), [P, j] = X(
    () => /* @__PURE__ */ new Set()
  ), [T, F] = X(() => {
    const D = x.findIndex((q) => !q.disabled);
    return D >= 0 ? D : 0;
  }), [V, Z] = X(() => {
    const D = w.findIndex((q) => !q.disabled);
    return D >= 0 ? D : 0;
  }), Q = $e(
    () => E.map((D, q) => D.disabled ? -1 : q).filter((D) => D >= 0),
    [E]
  ), K = $e(
    () => C.map((D, q) => D.disabled ? -1 : q).filter((D) => D >= 0),
    [C]
  );
  ke(() => {
    if (T >= E.length) {
      const D = Q[Q.length - 1];
      F(D ?? 0);
    } else if (E.length > 0 && Q.length > 0 && !Q.includes(T)) {
      const D = Q[0];
      D !== void 0 && F(D);
    }
  }, [T, E.length, Q]), ke(() => {
    if (V >= C.length) {
      const D = K[K.length - 1];
      Z(D ?? 0);
    } else if (C.length > 0 && K.length > 0 && !K.includes(V)) {
      const D = K[0];
      D !== void 0 && Z(D);
    }
  }, [V, C.length, K]), ke(() => {
    M((D) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of D)
        E.some(
          (se) => rt(se, g) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [E, g]), ke(() => {
    j((D) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of D)
        C.some(
          (se) => rt(se, g) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [C, g]);
  const te = H(
    (D) => {
      (p ?? d)?.(D);
    },
    [p, d]
  ), oe = H(
    (D) => {
      (v ?? b)?.(D);
    },
    [v, b]
  ), ee = H(
    (D) => {
      (f ?? _)?.(D);
    },
    [f, _]
  ), L = H(
    (D) => {
      const q = E[D];
      if (!q || q.disabled) return;
      const ne = rt(q, g);
      M((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), F(D);
    },
    [E, g]
  ), ie = H(
    (D) => {
      const q = C[D];
      if (!q || q.disabled) return;
      const ne = rt(q, g);
      j((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), Z(D);
    },
    [C, g]
  ), Y = H(() => {
    const D = [], q = [];
    for (const me of E) {
      const Ne = rt(me, g);
      m.has(Ne) && !me.disabled ? D.push(me) : q.push(me);
    }
    if (D.length === 0) return;
    const ne = q, _e = [...C, ...D];
    I(ne), z(_e), M(/* @__PURE__ */ new Set());
    const se = new Set(D.map((me) => rt(me, g)));
    j(se), te(ne), oe(_e), ee({
      source: ne,
      target: _e,
      moved: D,
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
    const D = [], q = [];
    for (const me of C) {
      const Ne = rt(me, g);
      P.has(Ne) && !me.disabled ? D.push(me) : q.push(me);
    }
    if (D.length === 0) return;
    const ne = q, _e = [...E, ...D];
    z(ne), I(_e), j(/* @__PURE__ */ new Set());
    const se = new Set(D.map((me) => rt(me, g)));
    M(se), te(_e), oe(ne), ee({
      source: _e,
      target: ne,
      moved: D,
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
    const D = E.filter((_e) => !_e.disabled);
    if (D.length === 0) return;
    const q = E.filter((_e) => !!_e.disabled), ne = [...C, ...D];
    I(q), z(ne), M(/* @__PURE__ */ new Set()), te(q), oe(ne), ee({
      source: q,
      target: ne,
      moved: D,
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
    const D = C.filter((_e) => !_e.disabled);
    if (D.length === 0) return;
    const q = C.filter((_e) => !!_e.disabled), ne = [...E, ...D];
    z(q), I(ne), j(/* @__PURE__ */ new Set()), te(ne), oe(q), ee({
      source: ne,
      target: q,
      moved: D,
      direction: "allToSource"
    });
  }, [E, C, te, oe, ee]), we = H(() => {
    if (P.size === 0) return;
    const D = [...C], q = P, ne = [];
    for (let se = 1; se < D.length; se++) {
      const me = D[se], Ne = D[se - 1];
      if (!me || !Ne) continue;
      const Fe = rt(me, g), Je = rt(Ne, g);
      q.has(Fe) && !q.has(Je) && !me.disabled && !Ne.disabled && (D[se - 1] = me, D[se] = Ne, ne.push(me));
    }
    if (ne.length === 0) return;
    z(D), oe(D), ee({ source: E, target: D, moved: ne, direction: "up" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = D.findIndex(
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
    const D = [...C], q = P, ne = [];
    for (let se = D.length - 2; se >= 0; se--) {
      const me = D[se], Ne = D[se + 1];
      if (!me || !Ne) continue;
      const Fe = rt(me, g), Je = rt(Ne, g);
      q.has(Fe) && !q.has(Je) && !me.disabled && !Ne.disabled && (D[se] = Ne, D[se + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    z(D), oe(D), ee({ source: E, target: D, moved: ne, direction: "down" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = D.findIndex(
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
    (D) => {
      if (E.length === 0) return;
      const q = Q;
      if (q.length === 0) return;
      const ne = q.includes(T) ? T : q[0] ?? 0;
      let _e = -1;
      if (D.key === "ArrowDown") {
        D.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se + 1) % q.length] ?? q[0] ?? 0;
      } else if (D.key === "ArrowUp") {
        D.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se - 1 + q.length) % q.length] ?? q[0] ?? 0;
      } else if (D.key === "Home")
        D.preventDefault(), _e = q[0] ?? 0;
      else if (D.key === "End")
        D.preventDefault(), _e = q[q.length - 1] ?? 0;
      else if (D.key === "Enter" || D.key === " ") {
        D.preventDefault(), L(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(D.key)) {
        D.preventDefault();
        const se = (xe.current + D.key).toLowerCase();
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
    (D) => {
      if (C.length === 0) return;
      const q = K;
      if (q.length === 0) return;
      const ne = q.includes(V) ? V : q[0] ?? 0;
      let _e = -1;
      if (D.key === "ArrowDown") {
        D.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se + 1) % q.length] ?? q[0] ?? 0;
      } else if (D.key === "ArrowUp") {
        D.preventDefault();
        const se = q.indexOf(ne);
        _e = q[(se - 1 + q.length) % q.length] ?? q[0] ?? 0;
      } else if (D.key === "Home")
        D.preventDefault(), _e = q[0] ?? 0;
      else if (D.key === "End")
        D.preventDefault(), _e = q[q.length - 1] ?? 0;
      else if (D.key === "Enter" || D.key === " ") {
        D.preventDefault(), ie(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(D.key)) {
        D.preventDefault();
        const se = (Ve.current + D.key).toLowerCase();
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
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Re.root, N].filter(Boolean).join(" "),
      "aria-label": S,
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
              children: E.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : E.map((D, q) => {
                const ne = rt(D, g), _e = m.has(ne), se = q === T, me = !!D.disabled;
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
                    children: Wn(D)
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
              "aria-disabled": E.filter((D) => !D.disabled).length === 0 || void 0,
              disabled: E.filter((D) => !D.disabled).length === 0,
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
              "aria-disabled": E.filter((D) => !D.disabled).length === 0 || void 0,
              disabled: E.filter((D) => !D.disabled).length === 0,
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
              "aria-disabled": C.filter((D) => !D.disabled).length === 0 || void 0,
              disabled: C.filter((D) => !D.disabled).length === 0,
              onClick: ye,
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
              children: C.length === 0 ? /* @__PURE__ */ n("div", { className: Re.empty, children: "No items" }) : C.map((D, q) => {
                const ne = rt(D, g), _e = P.has(ne), se = q === V, me = !!D.disabled;
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
                    children: Wn(D)
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
                onClick: we,
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
const lb = "_root_drtn7_1", ib = "_header_drtn7_8", cb = "_title_drtn7_15", db = "_navBtn_drtn7_20", ub = "_resources_drtn7_39", _b = "_resource_drtn7_39", fb = "_grid_drtn7_50", hb = "_timeCol_drtn7_55", pb = "_timeCell_drtn7_61", mb = "_dayCol_drtn7_66", gb = "_dayHeader_drtn7_73", xb = "_slot_drtn7_81", yb = "_event_drtn7_91", ft = {
  root: lb,
  header: ib,
  title: cb,
  navBtn: db,
  resources: ub,
  resource: _b,
  grid: fb,
  timeCol: hb,
  timeCell: pb,
  dayCol: mb,
  dayHeader: gb,
  slot: xb,
  event: yb
};
function Ls(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Pv({
  data: e,
  view: t = "week",
  date: s,
  onDateChange: o,
  resources: i,
  onEventClick: c,
  onSlotClick: h,
  ariaLabel: r = "Scheduler",
  className: a
}) {
  const [l, p] = X(
    s ?? /* @__PURE__ */ new Date()
  ), d = s ?? l, v = (k) => {
    s || p(k), o?.(k);
  }, b = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (k, f) => {
    const _ = new Date(d);
    return _.setDate(d.getDate() - d.getDay() + f), _;
  }) : Array.from({ length: 30 }, (k, f) => {
    const _ = new Date(d);
    return _.setDate(1 + f), _;
  }), $ = Array.from({ length: 12 }, (k, f) => 8 + f);
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
        /* @__PURE__ */ O("div", { className: ft.grid, role: "presentation", children: [
          /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: $.map((k) => /* @__PURE__ */ O("div", { className: ft.timeCell, children: [
            k,
            ":00"
          ] }, k)) }),
          b.map((k) => /* @__PURE__ */ O(
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
                $.map((f) => /* @__PURE__ */ n(
                  "div",
                  {
                    className: ft.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(k);
                      _.setHours(f), h?.({ date: _ });
                    }
                  },
                  f
                )),
                e.filter((f) => f.start.toDateString() === k.toDateString()).map((f) => /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: ft.event,
                    "aria-label": `${f.title} ${Ls(f.start)} - ${Ls(f.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: f }),
                    children: f.title
                  },
                  f.id
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
const bb = "_root_1n0oq_1", vb = "_header_1n0oq_8", kb = "_headerCell_1n0oq_15", wb = "_timeline_1n0oq_21", $b = "_row_1n0oq_26", Nb = "_taskName_1n0oq_32", Ob = "_timelineCell_1n0oq_37", Sb = "_bar_1n0oq_43", zb = "_progress_1n0oq_56", Db = "_dep_1n0oq_61", Tt = {
  root: bb,
  header: vb,
  headerCell: kb,
  timeline: wb,
  row: $b,
  taskName: Nb,
  timelineCell: Ob,
  bar: Sb,
  progress: zb,
  dep: Db
};
function Bv({
  tasks: e,
  view: t = "week",
  onTaskClick: s,
  ariaLabel: o = "Gantt",
  className: i
}) {
  const [c, h] = X(null);
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
                      h(r.id), s?.({ task: r });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), h(r.id), s?.({ task: r }));
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
const Mb = "_root_1p46p_1", Cb = "_fields_1p46p_6", Eb = "_chip_1p46p_13", Ib = "_table_1p46p_35", jb = "_totalRow_1p46p_55", Ab = "_total_1p46p_55", mn = {
  root: Mb,
  fields: Cb,
  chip: Eb,
  table: Ib,
  totalRow: jb,
  total: Ab
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
function Fv({
  data: e,
  rowFields: t = [],
  columnFields: s = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: h
}) {
  const r = t, a = s, l = o, p = (f, _, u) => {
    const y = f === "row" ? r.filter((S) => S.property !== _) : r, N = f === "col" ? a.filter((S) => S.property !== _) : a, g = f === "agg" ? l.filter((S) => !(S.property === _ && S.aggregate === u)) : l;
    i?.({
      rowFields: y,
      columnFields: N,
      aggregateFields: g
    });
  }, d = (f, _) => _.map((u) => String(f[u.property])).join(""), v = [
    ...new Set(r.length ? e.map((f) => d(f, r)) : [""])
  ].sort(), b = [
    ...new Set(a.length ? e.map((f) => d(f, a)) : [""])
  ].sort(), $ = (f, _, u) => {
    const y = e.filter(
      (g) => d(g, r) === f && d(g, a) === _
    ), N = y.map((g) => Number(g[u.property])).filter((g) => !Number.isNaN(g));
    return !N.length && u.aggregate !== "Count" ? 0 : Vn[u.aggregate](
      u.aggregate === "Count" ? y.map(() => 1) : N
    );
  }, k = (f, _, u, y) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: mn.chip,
      "aria-label": `Remove ${f} field ${u}`,
      onClick: () => p(f, _, y),
      children: [
        u,
        y ? ` (${y})` : ""
      ]
    },
    `${f}-${u}-${y ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [mn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: mn.fields, children: [
      r.map((f) => k("row", f.property, f.title ?? f.property)),
      a.map((f) => k("col", f.property, f.title ?? f.property)),
      l.map(
        (f) => k("agg", f.property, f.title ?? f.property, f.aggregate)
      )
    ] }),
    /* @__PURE__ */ O("table", { className: mn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: r.map((f) => f.title ?? f.property).join(" / ") || "Total" }),
        b.map((f) => /* @__PURE__ */ n("th", { scope: "col", children: f || "—" }, f)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ O("tbody", { children: [
        v.map((f) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: f || "—" }),
          b.map((_) => /* @__PURE__ */ n(
            "td",
            {
              title: En(
                $(
                  f,
                  _,
                  l[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: l.length ? En($(f, _, l[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ n("td", { className: mn.total, children: l.length ? En(
            Vn[l[0].aggregate](
              b.flatMap(
                (_) => e.filter(
                  (u) => d(u, r) === f && d(u, a) === _
                ).map((u) => Number(u[l[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, f)),
        /* @__PURE__ */ O("tr", { className: mn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((f) => /* @__PURE__ */ n("td", { children: l.length ? En(
            Vn[l[0].aggregate](
              e.filter((_) => d(_, a) === f).map((_) => Number(_[l[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, f)),
          /* @__PURE__ */ n("td", { children: l.length ? En(
            Vn[l[0].aggregate](
              e.map((f) => Number(f[l[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Tb = "_root_13gvl_1", Rb = "_reverse_13gvl_10", Lb = "_item_13gvl_14", Pb = "_marker_13gvl_35", Bb = "_body_13gvl_46", Fb = "_label_13gvl_50", qb = "_content_13gvl_56", on = {
  root: Tb,
  reverse: Rb,
  item: Lb,
  marker: Pb,
  body: Bb,
  label: Fb,
  content: qb
};
function qv({
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
      children: i.map((c, h) => /* @__PURE__ */ O("li", { className: on.item, children: [
        /* @__PURE__ */ n("span", { className: on.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ O("div", { className: on.body, children: [
          /* @__PURE__ */ n("div", { className: on.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: on.content, children: c.content })
        ] })
      ] }, h))
    }
  );
}
const Hb = "_root_4ls7q_1", Kb = "_header_4ls7q_13", Ub = "_headCell_4ls7q_22", Wb = "_row_4ls7q_32", Vb = "_cell_4ls7q_37", In = {
  root: Hb,
  header: Kb,
  headCell: Ub,
  row: Wb,
  cell: Vb
};
function Hv({
  count: e,
  rowHeight: t = 40,
  height: s = 320,
  loadData: o,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: h
}) {
  const [r, a] = X(
    /* @__PURE__ */ new Map()
  ), [l, p] = X(0), d = ae(/* @__PURE__ */ new Set()), v = Math.ceil(s / t), b = Math.max(0, Math.floor(l / t) - 3), $ = Math.min(e, b + v + 6), k = H(
    (_, u) => {
      let y = !1;
      for (let N = _; N < u; N++)
        !r.has(N) && !d.current.has(N) && (y = !0);
      if (y) {
        for (let N = _; N < u; N++) d.current.add(N);
        o({ skip: _, top: u }).then((N) => {
          a((g) => {
            const S = new Map(g);
            return N.forEach((x, w) => S.set(_ + w, x)), S;
          });
          for (let g = _; g < u; g++) d.current.delete(g);
        });
      }
    },
    [r, o]
  );
  ke(() => {
    k(b, $);
  }, [b, $]);
  const f = [];
  for (let _ = b; _ < $; _++) {
    const u = r.get(_) ?? {};
    f.push(
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
        _
      )
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [In.root, h].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: s },
      onScroll: (_) => p(_.target.scrollTop),
      onKeyDown: (_) => {
        const u = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), u.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), u.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), u.scrollTop += s) : _.key === "PageUp" && (_.preventDefault(), u.scrollTop -= s);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: b * t }, "aria-hidden": "true" }),
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
        f,
        /* @__PURE__ */ n(
          "div",
          {
            style: { height: Math.max(0, (e - $) * t) },
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
    constructor(r, a, l, p) {
      if (this.version = r, this.errorCorrectionLevel = a, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let d = [];
      for (let b = 0; b < this.size; b++) d.push(!1);
      for (let b = 0; b < this.size; b++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const v = this.addEccAndInterleave(l);
      if (this.drawCodewords(v), p == -1) {
        let b = 1e9;
        for (let $ = 0; $ < 8; $++) {
          this.applyMask($), this.drawFormatBits($);
          const k = this.getPenaltyScore();
          k < b && (p = $, b = k), this.applyMask($);
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
    static encodeSegments(r, a, l = 1, p = 40, d = -1, v = !0) {
      if (!(t.MIN_VERSION <= l && l <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let b, $;
      for (b = l; ; b++) {
        const u = t.getNumDataCodewords(b, a) * 8, y = c.getTotalBits(r, b);
        if (y <= u) {
          $ = y;
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
        v && $ <= t.getNumDataCodewords(b, u) * 8 && (a = u);
      let k = [];
      for (const u of r) {
        s(u.mode.modeBits, 4, k), s(u.numChars, u.mode.numCharCountBits(b), k);
        for (const y of u.getData()) k.push(y);
      }
      i(k.length == $);
      const f = t.getNumDataCodewords(b, a) * 8;
      i(k.length <= f), s(0, Math.min(4, f - k.length), k), s(0, (8 - k.length % 8) % 8, k), i(k.length % 8 == 0);
      for (let u = 236; k.length < f; u ^= 253)
        s(u, 8, k);
      let _ = [];
      for (; _.length * 8 < k.length; ) _.push(0);
      return k.forEach(
        (u, y) => _[y >>> 3] |= u << 7 - (y & 7)
      ), new t(b, a, _, d);
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
        for (let p = 0; p < a; p++)
          l == 0 && p == 0 || l == 0 && p == a - 1 || l == a - 1 && p == 0 || this.drawAlignmentPattern(r[l], r[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const a = this.errorCorrectionLevel.formatBits << 3 | r;
      let l = a;
      for (let d = 0; d < 10; d++) l = l << 1 ^ (l >>> 9) * 1335;
      const p = (a << 10 | l) ^ 21522;
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
      for (let l = 0; l < 12; l++) r = r << 1 ^ (r >>> 11) * 7973;
      const a = this.version << 12 | r;
      i(a >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const p = o(a, l), d = this.size - 11 + l % 3, v = Math.floor(l / 3);
        this.setFunctionModule(d, v, p), this.setFunctionModule(v, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, a) {
      for (let l = -4; l <= 4; l++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(l)), v = r + p, b = a + l;
          0 <= v && v < this.size && 0 <= b && b < this.size && this.setFunctionModule(v, b, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, a) {
      for (let l = -2; l <= 2; l++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(
            r + p,
            a + l,
            Math.max(Math.abs(p), Math.abs(l)) != 1
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
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][a], v = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), b = p - v % p, $ = Math.floor(v / p);
      let k = [];
      const f = t.reedSolomonComputeDivisor(d);
      for (let u = 0, y = 0; u < p; u++) {
        let N = r.slice(
          y,
          y + $ - d + (u < b ? 0 : 1)
        );
        y += N.length;
        const g = t.reedSolomonComputeRemainder(N, f);
        u < b && N.push(0), k.push(N.concat(g));
      }
      let _ = [];
      for (let u = 0; u < k[0].length; u++)
        k.forEach((y, N) => {
          (u != $ - d || N >= b) && _.push(y[u]);
        });
      return i(_.length == v), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const v = l - d, $ = (l + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[$][v] && a < r.length * 8 && (this.modules[$][v] = o(r[a >>> 3], 7 - (a & 7)), a++);
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
          let p;
          switch (r) {
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
      let r = 0;
      for (let d = 0; d < this.size; d++) {
        let v = !1, b = 0, $ = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[d][k] == v ? (b++, b == 5 ? r += t.PENALTY_N1 : b > 5 && r++) : (this.finderPenaltyAddHistory(b, $), v || (r += this.finderPenaltyCountPatterns($) * t.PENALTY_N3), v = this.modules[d][k], b = 1);
        r += this.finderPenaltyTerminateAndCount(v, b, $) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let v = !1, b = 0, $ = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[k][d] == v ? (b++, b == 5 ? r += t.PENALTY_N1 : b > 5 && r++) : (this.finderPenaltyAddHistory(b, $), v || (r += this.finderPenaltyCountPatterns($) * t.PENALTY_N3), v = this.modules[k][d], b = 1);
        r += this.finderPenaltyTerminateAndCount(v, b, $) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let v = 0; v < this.size - 1; v++) {
          const b = this.modules[d][v];
          b == this.modules[d][v + 1] && b == this.modules[d + 1][v] && b == this.modules[d + 1][v + 1] && (r += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce((v, b) => v + (b ? 1 : 0), a);
      const l = this.size * this.size, p = Math.ceil(Math.abs(a * 20 - l * 10) / l) - 1;
      return i(0 <= p && p <= 9), r += p * t.PENALTY_N4, i(0 <= r && r <= 2568888), r;
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
        for (let p = this.size - 7; l.length < r; p -= a)
          l.splice(1, 0, p);
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
      for (let p = 0; p < r - 1; p++) a.push(0);
      a.push(1);
      let l = 1;
      for (let p = 0; p < r; p++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], l), d + 1 < a.length && (a[d] ^= a[d + 1]);
        l = t.reedSolomonMultiply(l, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, a) {
      let l = a.map((p) => 0);
      for (const p of r) {
        const d = p ^ l.shift();
        l.push(0), a.forEach(
          (v, b) => l[b] ^= t.reedSolomonMultiply(v, d)
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
      for (let p = 7; p >= 0; p--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (a >>> p & 1) * r;
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
  function s(h, r, a) {
    if (r < 0 || r > 31 || h >>> r)
      throw new RangeError("Value out of range");
    for (let l = r - 1; l >= 0; l--)
      a.push(h >>> l & 1);
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
        const p = Math.min(r.length - l, 3);
        s(parseInt(r.substring(l, l + p), 10), p * 3 + 1, a), l += p;
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
        let p = c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l + 1)), s(p, 11, a);
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
      for (const p of r) {
        const d = p.mode.numCharCountBits(a);
        if (p.numChars >= 1 << d) return 1 / 0;
        l += 4 + d + p.bitData.length;
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
const Xb = "_root_1leml_1", Gb = {
  root: Xb
}, Yb = {
  low: Mt.QrCode.Ecc.LOW,
  medium: Mt.QrCode.Ecc.MEDIUM,
  quartile: Mt.QrCode.Ecc.QUARTILE,
  high: Mt.QrCode.Ecc.HIGH
};
function Kv({
  value: e,
  size: t = 128,
  render: s = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: h,
  onError: r
}) {
  const a = c ?? `QR code for ${e}`, l = ae(null), p = Zs("(prefers-color-scheme: dark)"), [d, v] = X(null);
  ke(() => {
    const N = document.documentElement;
    v(N.dataset.theme ?? null);
    const g = new MutationObserver(() => {
      v(N.dataset.theme ?? null);
    });
    return g.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => g.disconnect();
  }, []);
  const b = $e(() => {
    try {
      return Mt.QrCode.encodeText(e, Yb[o]);
    } catch {
      return null;
    }
  }, [e, o]), $ = ae(null);
  ke(() => {
    if (b !== null) {
      $.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), ($.current?.value !== e || $.current?.onError !== r) && ($.current = { value: e, onError: r }, r?.(N));
  }, [b, e, r]);
  const k = Math.max(0, Math.floor(i)), f = [Gb.root, h].filter(Boolean).join(" ");
  if (ke(() => {
    if (s !== "canvas" || b === null) return;
    const N = l.current, g = N?.getContext("2d");
    if (!N || !g) return;
    const S = getComputedStyle(N), x = S.getPropertyValue("--dx-text-color").trim() || "#000", w = S.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Zb(g, b, t, k, x, w);
  }, [s, b, t, k, p, d]), b === null)
    return /* @__PURE__ */ n("div", { className: f, role: "img", "aria-label": a, "data-qr-error": "true" });
  const _ = b.size + k * 2, u = t / _;
  if (s === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: l,
        className: f,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const y = [];
  for (let N = 0; N < b.size; N++)
    for (let g = 0; g < b.size; g++)
      b.getModule(g, N) && y.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (g + k) * u,
            y: (N + k) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${g}-${N}`
        )
      );
  return /* @__PURE__ */ O(
    "svg",
    {
      className: f,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function Zb(e, t, s, o, i, c) {
  const h = s / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, s, s), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, r) && e.fillRect((a + o) * h, (r + o) * h, h + 0.5, h + 0.5);
}
const Jb = "_root_1v9la_1", Qb = "_value_1v9la_9", Ps = {
  root: Jb,
  value: Qb
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
], Fs = 104, e2 = 106;
function t2(e) {
  const t = [Fs];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let s = Fs;
  for (let o = 1; o < t.length; o++) s += o * t[o];
  return t.push(s % 103, e2), t;
}
function Uv({
  value: e,
  format: t = "Code128",
  height: s = 60,
  showValue: o = !1,
  ariaLabel: i,
  className: c
}) {
  const h = i ?? `Barcode ${e}`, r = $e(() => {
    const a = [];
    let l = 0;
    for (const p of t2(e)) {
      const d = Bs[p] ?? Bs[0];
      for (let v = 0; v < d.length; v++) {
        const b = Number(d[v]);
        v % 2 === 0 && a.push({ x: l, w: b }), l += b;
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
const n2 = "_root_gfdmk_1", s2 = "_svg_gfdmk_10", r2 = "_gridline_gfdmk_15", o2 = "_tickLabel_gfdmk_21", a2 = "_axisTitle_gfdmk_27", l2 = "_dataLabel_gfdmk_34", i2 = "_legend_gfdmk_40", c2 = "_legendItem_gfdmk_48", d2 = "_swatch_gfdmk_56", u2 = "_tooltip_gfdmk_63", _2 = "_visuallyHidden_gfdmk_77", ot = {
  root: n2,
  svg: s2,
  gridline: r2,
  tickLabel: o2,
  axisTitle: a2,
  dataLabel: l2,
  legend: i2,
  legendItem: c2,
  swatch: d2,
  tooltip: u2,
  visuallyHidden: _2
}, qs = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function f2(e, t, s) {
  const o = t - e || 1, i = s ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, h = Math.ceil(t / i) * i, r = [];
  for (let a = c; a <= h + 1e-9; a += i)
    r.push(Number(a.toFixed(6)));
  return { min: c, max: h, step: i, ticks: r };
}
function Wv({
  series: e,
  width: t = 600,
  height: s = 400,
  valueAxis: o,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: h = !0,
  onSeriesClick: r,
  ariaLabel: a = "Chart",
  className: l
}) {
  const [p, d] = X(
    null
  ), v = $e(() => {
    const x = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const E of w.data) x.add(String(E[w.categoryProperty] ?? ""));
    return [...x];
  }, [e]), b = $e(
    () => e.flatMap((x) => x.data.map((w) => Number(w[x.valueProperty]))).filter((x) => !Number.isNaN(x)),
    [e]
  ), $ = o?.min ?? (b.length ? Math.min(0, ...b) : 0), k = o?.max ?? (b.length ? Math.max(...b) : 10), f = $e(
    () => f2($, k, o?.step),
    [$, k, o?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, u = t - _.l - _.r, y = s - _.t - _.b, N = (x) => _.l + x / Math.max(1, v.length - 1) * u, g = (x) => _.t + (1 - (x - f.min) / (f.max - f.min || 1)) * y, S = (x, w) => w.color ?? qs[x % qs.length];
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
              o?.gridlines !== !1 && f.ticks.map((x) => /* @__PURE__ */ n(
                "line",
                {
                  x1: _.l,
                  x2: _.l + u,
                  y1: g(x),
                  y2: g(x),
                  className: ot.gridline
                },
                x
              )),
              i?.gridlines && v.map((x, w) => /* @__PURE__ */ n(
                "line",
                {
                  x1: N(w),
                  x2: N(w),
                  y1: _.t,
                  y2: _.t + y,
                  className: ot.gridline
                },
                w
              )),
              f.ticks.map((x) => /* @__PURE__ */ n(
                "text",
                {
                  x: _.l - 8,
                  y: g(x) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: x
                },
                x
              )),
              v.map((x, w) => /* @__PURE__ */ n(
                "text",
                {
                  x: N(w),
                  y: _.t + y + 16,
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
                  y: _.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + y / 2})`,
                  className: ot.axisTitle,
                  children: o.title
                }
              ),
              i?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: _.l + u / 2,
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
                      const z = String(C[I.categoryProperty] ?? ""), m = Number(C[I.valueProperty]);
                      if (Number.isNaN(m)) continue;
                      x.has(I.stack) || x.set(I.stack, /* @__PURE__ */ new Map());
                      const M = x.get(I.stack);
                      M.set(z, (M.get(z) ?? 0) + m);
                    }
                const w = e.filter(
                  (I) => I.type === "pie" || I.type === "donut"
                ), E = /* @__PURE__ */ new Map();
                for (const I of w) {
                  const C = I.data.reduce(
                    (z, m) => z + (Number(m[I.valueProperty]) || 0),
                    0
                  );
                  E.set(I, C);
                }
                return e.map((I, C) => {
                  const z = I.data.map((j) => ({
                    cat: String(j[I.categoryProperty] ?? ""),
                    val: Number(j[I.valueProperty]),
                    size: I.sizeProperty ? Number(j[I.sizeProperty]) : void 0,
                    item: j
                  })), m = new Map(v.map((j, T) => [j, T])), M = S(C, I);
                  if (I.type === "pie" || I.type === "donut") {
                    const j = _.l + u / 2, T = _.t + y / 2, F = Math.min(u, y) / 3, V = I.type === "donut" ? I.innerRadius ?? F * 0.5 : 0, Z = E.get(I) ?? z.reduce((K, te) => K + te.val, 0);
                    let Q = -90;
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          z.map((K, te) => {
                            const oe = Z ? K.val / Z * 360 : 0, ee = Q, L = Q + oe;
                            Q = L;
                            const ie = oe > 180 ? 1 : 0, Y = (Qe) => Qe * Math.PI / 180, de = j + F * Math.cos(Y(ee)), le = T + F * Math.sin(Y(ee)), ye = j + F * Math.cos(Y(L)), we = T + F * Math.sin(Y(L)), Be = j + V * Math.cos(Y(L)), ve = T + V * Math.sin(Y(L)), We = j + V * Math.cos(Y(ee)), xe = T + V * Math.sin(Y(ee)), Ze = V ? `M ${de} ${le} A ${F} ${F} 0 ${ie} 1 ${ye} ${we} L ${Be} ${ve} A ${V} ${V} 0 ${ie} 0 ${We} ${xe} Z` : `M ${j} ${T} L ${de} ${le} A ${F} ${F} 0 ${ie} 1 ${ye} ${we} Z`, Ve = (ee + L) / 2, Le = j + (F + 12) * Math.cos(Y(Ve)), tt = T + (F + 12) * Math.sin(Y(Ve));
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "path",
                                {
                                  d: Ze,
                                  fill: M,
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
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          z.map((j, T) => {
                            const F = m.get(j.cat) ?? 0, V = Number(z[T].cat), Z = Number.isNaN(V) ? N(F) : _.l + (V - f.min) / (f.max - f.min || 1) * u, Q = g(j.val), K = I.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: Z,
                                  cy: Q,
                                  r: K,
                                  fill: M,
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
                      if (!I.stack) return f.min;
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
                    }, T = z.map((V) => {
                      const Z = m.get(V.cat) ?? 0, Q = j(V.cat);
                      return `${Z === 0 ? "M" : "L"} ${N(Z)} ${g(Q + V.val)}`;
                    }).join(" "), F = z.map((V) => {
                      const Z = m.get(V.cat) ?? 0, Q = j(V.cat);
                      return `${Z === 0 ? "M" : "L"} ${N(Z)} ${g(Q)}`;
                    }).join(" ");
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          I.type === "area" && /* @__PURE__ */ n(
                            "path",
                            {
                              d: `${T} L ${N(z.length - 1)} ${g(j(z[z.length - 1].cat))} L ${N(0)} ${g(j(z[0].cat))} Z`,
                              fill: M,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ n("path", { d: T, fill: "none", stroke: M, strokeWidth: 2 }),
                          I.stack && /* @__PURE__ */ n("path", { d: F, fill: "none", stroke: "transparent" }),
                          z.map((V, Z) => {
                            const Q = m.get(V.cat) ?? 0, K = j(V.cat), te = N(Q), oe = g(K + V.val);
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: te,
                                  cy: oe,
                                  r: 4,
                                  fill: M,
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
                  return /* @__PURE__ */ O(
                    "g",
                    {
                      role: "list",
                      "aria-label": I.title ?? `Series ${C + 1}`,
                      children: [
                        /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                        z.map((j, T) => {
                          const F = m.get(j.cat) ?? 0;
                          let V = 0;
                          if (I.stack)
                            for (let le = 0; le < C; le++) {
                              const ye = e[le];
                              if (ye?.stack !== I.stack) continue;
                              const we = ye.data.find(
                                (Be) => String(Be[ye.categoryProperty] ?? "") === j.cat
                              );
                              we && (V += Number(we[ye.valueProperty]) || 0);
                            }
                          const Z = V + j.val, Q = e.filter(
                            (le) => !le.stack || le.stack === I.stack
                          ).length, K = u / v.length, te = P ? 18 : Math.max(
                            12,
                            K / (I.stack ? 1 : e.length) - 4
                          ), oe = P ? _.l + V / (f.max - f.min || 1) * u : N(F) - te / 2 + (I.stack ? 0 : C % Q * te), ee = P ? _.t + F * y / v.length + 4 : g(Z), L = P ? j.val / (f.max - f.min || 1) * u : te - 4, ie = P ? 16 : g(V) - g(Z), Y = P ? _.l + V / (f.max - f.min || 1) * u : oe, de = P ? _.t + F * y / v.length + 4 : ee;
                          return /* @__PURE__ */ O("g", { role: "listitem", children: [
                            /* @__PURE__ */ n(
                              "rect",
                              {
                                x: Y,
                                y: de,
                                width: P ? L : te - 4,
                                height: ie,
                                fill: M,
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
        c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((x, w) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: S(w, x) },
              "aria-hidden": "true"
            }
          ),
          x.title ?? `Series ${w + 1}`
        ] }, w)) }),
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
                (x) => x.data.map((w, E) => /* @__PURE__ */ O("tr", { children: [
                  /* @__PURE__ */ n("td", { children: x.title ?? "" }),
                  /* @__PURE__ */ n("td", { children: String(w[x.categoryProperty] ?? "") }),
                  /* @__PURE__ */ n("td", { children: String(w[x.valueProperty] ?? "") })
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
  Vi as ALERT_ICON,
  rv as Accordion,
  U2 as Alert,
  iv as Autocomplete,
  nv as Avatar,
  x2 as Badge,
  Uv as Barcode,
  Z2 as Body,
  Ev as Breadcrumb,
  m2 as Button,
  g2 as Card,
  Tv as Carousel,
  Wv as Chart,
  B2 as Checkbox,
  dv as Checkboxlist,
  yv as Colorpicker,
  X2 as Column,
  kn as DEFAULT_OPERATOR_BY_TYPE,
  Wg as DEFAULT_PALETTE,
  A2 as DataFilter,
  T2 as DataGrid,
  R2 as DataList,
  bv as Datepicker,
  q2 as Dialog,
  Sv as DropZone,
  lv as Dropdown,
  k2 as EmptyState,
  Vs as FILTER_OPERATORS,
  Cv as FabMenu,
  w2 as Field,
  th as Footer,
  $2 as Form,
  Bv as Gantt,
  rh as Header,
  De as Icon,
  P2 as Input,
  L2 as Label,
  Y2 as Layout,
  cv as Listbox,
  gv as Mask,
  zv as Menu,
  xv as Numeric,
  Oa as Pager,
  Dv as PanelMenu,
  mv as Password,
  Lv as PickList,
  Fv as Pivot,
  Mv as ProfileMenu,
  Q2 as Progress,
  Kv as QRCode,
  uv as Radiobuttonlist,
  vv as Rating,
  V2 as Row,
  Pv as Scheduler,
  $v as SecurityCode,
  gn as Select,
  _v as Selectbar,
  ph as Sidebar,
  J2 as SidebarToggle,
  Nv as SignaturePad,
  W2 as Skeleton,
  kv as Slider,
  hv as Splitbutton,
  jv as Splitter,
  G2 as Stack,
  b2 as Stat,
  Iv as Steps,
  Pl as Switch,
  v2 as Table,
  sv as Tabs,
  av as Text,
  ov as Textarea,
  pv as Textbox,
  tv as ThemeSwitcher,
  qv as Timeline,
  wv as Timespanpicker,
  K2 as ToastProvider,
  Av as Toc,
  fv as Togglebutton,
  F2 as Tooltip,
  Rv as Tree,
  Ov as Upload,
  Hv as VirtualGrid,
  Gs as applyFilters,
  Ia as applyGridState,
  $n as columnValue,
  C2 as compare,
  I2 as custom,
  Ma as cycleSort,
  ja as defaultOperatorForType,
  O2 as email,
  Ds as formatMasked,
  ys as formatValue,
  Gn as getByPath,
  y2 as iconNames,
  Xs as matchesFilters,
  D2 as maxLength,
  z2 as minLength,
  Ea as paginate,
  S2 as pattern,
  M2 as range,
  N2 as required,
  E2 as requiredTrue,
  ds as resolveVariant,
  Io as runValidators,
  ev as shadeClass,
  Yo as sortItems,
  Ca as sortedItems,
  Uo as toFilterString,
  Go as toODataFilterString,
  Eo as useFormContext,
  j2 as useFormField,
  Zs as useMediaQuery,
  H2 as useToast
};
