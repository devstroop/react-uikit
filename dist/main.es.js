import { jsx as n, jsxs as O, Fragment as De } from "react/jsx-runtime";
import { forwardRef as We, useId as qe, isValidElement as Lt, cloneElement as ds, useState as X, useRef as le, useCallback as H, useMemo as $e, useContext as Us, createContext as Ws, useEffect as ke, Fragment as nr, Children as sr, useImperativeHandle as us } from "react";
const rr = "_button_mpzch_1", or = "_filled_mpzch_36", lr = "_flat_mpzch_39", ar = "_outlined_mpzch_42", ir = "_text_mpzch_47", cr = "_loading_mpzch_538", dr = "_spinner_mpzch_541", ur = "_xs_mpzch_557", _r = "_sm_mpzch_563", fr = "_md_mpzch_569", hr = "_lg_mpzch_575", pr = "_xl_mpzch_581", mr = "_iconOnly_mpzch_587", gr = "_fullWidth_mpzch_617", Ct = {
  button: rr,
  filled: or,
  flat: lr,
  outlined: ar,
  text: ir,
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
  loading: cr,
  spinner: dr,
  "dx-spin": "_dx-spin_mpzch_1",
  xs: ur,
  sm: _r,
  md: fr,
  lg: hr,
  xl: pr,
  iconOnly: mr,
  fullWidth: gr
};
function yr(e, t) {
  const s = t, o = e ?? "filled";
  return { variant: o === "filled" || o === "flat" || o === "outlined" || o === "text" ? o : "filled", style: s ?? "primary" };
}
const z2 = We(
  function(t, s) {
    const {
      variant: o = "filled",
      severity: i,
      shade: c = "default",
      size: h = "md",
      fullWidth: r = !1,
      iconOnly: l = !1,
      loading: a = !1,
      visible: p = !0,
      className: d,
      disabled: v,
      children: b,
      ...$
    } = t;
    if (p === !1) return null;
    const k = yr(o, i), _ = !(k.style === "light" || k.style === "dark") && c !== "default" ? `shade-${c}` : null, u = [
      Ct.button,
      Ct[k.variant],
      Ct[`style-${k.style}`],
      // backwards-compat: tone-* still emitted
      Ct[`tone-${k.style}`],
      _ ? Ct[_] : null,
      Ct[h],
      r ? Ct.fullWidth : null,
      l ? Ct.iconOnly : null,
      a ? Ct.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      d
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ O(De, { children: [
      a ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Ct.spinner }) : null,
      b
    ] }), N = t.href;
    if (N != null) {
      const { onClick: y, ...w } = $, E = v || a;
      return /* @__PURE__ */ n(
        "a",
        {
          ref: s,
          href: N,
          className: u,
          "aria-disabled": E || void 0,
          "aria-busy": a || void 0,
          onClick: (I) => {
            if (E) {
              I.preventDefault();
              return;
            }
            y?.(I);
          },
          ...w,
          children: x
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
        disabled: v || a,
        "aria-busy": a || void 0,
        ...S,
        children: x
      }
    );
  }
), xr = "_card_1ozlz_1", br = "_elevated_1ozlz_8", vr = "_filled_1ozlz_13", kr = "_outlined_1ozlz_18", wr = "_interactive_1ozlz_22", $r = "_text_1ozlz_30", Nr = "_header_1ozlz_46", Or = "_body_1ozlz_53", Sr = "_footer_1ozlz_63", vn = {
  card: xr,
  elevated: br,
  filled: vr,
  outlined: kr,
  interactive: wr,
  text: $r,
  header: Nr,
  body: Or,
  footer: Sr
}, D2 = We(function({
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
    /* @__PURE__ */ O(
      "div",
      {
        ref: a,
        role: p ? "button" : void 0,
        tabIndex: p ? 0 : void 0,
        onKeyDown: (d) => {
          r?.(d), !(!p || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [vn.card, vn[t], i].filter(Boolean).join(" "),
        ...l,
        children: [
          s != null && /* @__PURE__ */ n("div", { className: vn.header, children: s }),
          /* @__PURE__ */ n("div", { className: vn.body, children: h }),
          o != null && /* @__PURE__ */ n("div", { className: vn.footer, children: o })
        ]
      }
    )
  );
});
function _s(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const zr = "_badge_1dt9s_1", Dr = "_xs_1dt9s_21", Mr = "_sm_1dt9s_26", Cr = "_md_1dt9s_31", Er = "_lg_1dt9s_36", Ir = "_xl_1dt9s_41", jr = "_neutral_1dt9s_47", Ar = "_primary_1dt9s_52", Tr = "_secondary_1dt9s_61", Rr = "_light_1dt9s_66", Lr = "_base_1dt9s_71", Pr = "_dark_1dt9s_76", Br = "_info_1dt9s_81", Fr = "_success_1dt9s_86", qr = "_warning_1dt9s_95", Hr = "_danger_1dt9s_104", Kr = "_filled_1dt9s_111", Ur = "_outlined_1dt9s_161", Wr = "_text_1dt9s_213", kn = {
  badge: zr,
  xs: Dr,
  sm: Mr,
  md: Cr,
  lg: Er,
  xl: Ir,
  neutral: jr,
  primary: Ar,
  secondary: Tr,
  light: Rr,
  base: Lr,
  dark: Pr,
  info: Br,
  success: Fr,
  warning: qr,
  danger: Hr,
  filled: Kr,
  outlined: Ur,
  text: Wr,
  "shade-lighter": "_shade-lighter_1dt9s_484",
  "shade-light": "_shade-light_1dt9s_484",
  "shade-dark": "_shade-dark_1dt9s_492",
  "shade-darker": "_shade-darker_1dt9s_495"
}, M2 = We(function({
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
  const p = t, d = _s(s, "filled"), v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: a,
      className: [
        kn.badge,
        kn[i],
        kn[p],
        kn[d],
        v ? kn[v] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}), Vr = "_xs_2a6lm_2", Xr = "_sm_2a6lm_7", Gr = "_md_2a6lm_1", Yr = "_lg_2a6lm_17", Zr = "_xl_2a6lm_22", Jr = {
  xs: Vr,
  sm: Xr,
  md: Gr,
  lg: Yr,
  xl: Zr
}, C2 = [
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
], Qr = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(De, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(De, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(De, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ O(De, { children: [
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
  ban: /* @__PURE__ */ O(De, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Se = We(function({ name: t, size: s = "md", strokeWidth: o = 2, className: i, ...c }, h) {
  const r = typeof s == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: h,
      className: [r ? Jr[s] : null, i].filter(Boolean).join(" "),
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
      children: Qr[t]
    }
  );
}), eo = "_stat_sjin9_1", to = "_label_sjin9_8", no = "_row_sjin9_16", so = "_value_sjin9_22", ro = "_delta_sjin9_28", oo = "_success_sjin9_33", lo = "_danger_sjin9_37", ao = "_neutral_sjin9_41", io = "_hint_sjin9_45", tn = {
  stat: eo,
  label: to,
  row: no,
  value: so,
  delta: ro,
  success: oo,
  danger: lo,
  neutral: ao,
  hint: io
}, E2 = We(function({ label: t, value: s, delta: o, deltaTone: i = "neutral", hint: c, className: h, ...r }, l) {
  return /* @__PURE__ */ O(
    "div",
    {
      ref: l,
      className: [tn.stat, h].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ n("div", { className: tn.label, children: t }),
        /* @__PURE__ */ O("div", { className: tn.row, children: [
          /* @__PURE__ */ n("div", { className: tn.value, children: s }),
          o != null && /* @__PURE__ */ n("div", { className: [tn.delta, tn[i]].join(" "), children: o })
        ] }),
        c != null && /* @__PURE__ */ n("div", { className: tn.hint, children: c })
      ]
    }
  );
}), co = "_wrap_1jc7y_1", uo = "_table_1jc7y_8", _o = "_caption_1jc7y_14", fo = "_none_1jc7y_51", ho = "_horizontal_1jc7y_57", po = "_vertical_1jc7y_67", mo = "_alternating_1jc7y_85", go = "_start_1jc7y_89", yo = "_center_1jc7y_93", xo = "_end_1jc7y_97", bo = "_empty_1jc7y_101", Yt = {
  wrap: co,
  table: uo,
  caption: _o,
  none: fo,
  horizontal: ho,
  vertical: po,
  alternating: mo,
  start: go,
  center: yo,
  end: xo,
  empty: bo
};
function I2({
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
  const a = c === "default" || c === "both" ? "" : Yt[c];
  return /* @__PURE__ */ O("div", { className: [Yt.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "table",
      {
        className: [
          Yt.table,
          a,
          h ? Yt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ n("caption", { className: Yt.caption, children: i }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "th",
            {
              className: p.align != null ? Yt[p.align] : void 0,
              scope: "col",
              children: p.header
            },
            p.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((p) => /* @__PURE__ */ n("tr", { children: e.map((d) => /* @__PURE__ */ n(
            "td",
            {
              className: d.align != null ? Yt[d.align] : void 0,
              children: d.render != null ? d.render(p) : p[d.key]
            },
            d.key
          )) }, s(p))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Yt.empty, children: o })
  ] });
}
const vo = "_emptyState_1swxw_1", ko = "_icon_1swxw_13", wo = "_title_1swxw_18", $o = "_description_1swxw_24", No = "_action_1swxw_30", wn = {
  emptyState: vo,
  icon: ko,
  title: wo,
  description: $o,
  action: No
};
function j2({
  icon: e,
  title: t,
  description: s,
  action: o,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ O("div", { className: [wn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: wn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: wn.title, children: t }),
    s != null && /* @__PURE__ */ n("div", { className: wn.description, children: s }),
    o != null && /* @__PURE__ */ n("div", { className: wn.action, children: o })
  ] });
}
const Oo = "_field_149oz_1", So = "_label_149oz_8", zo = "_required_149oz_14", Do = "_hint_149oz_19", Mo = "_error_149oz_24", $n = {
  field: Oo,
  label: So,
  required: zo,
  hint: Do,
  error: Mo
};
function A2({
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
  const a = o ?? i, p = qe(), d = qe(), v = qe();
  if (l === !1) return null;
  const b = c != null ? d : a != null ? v : null, $ = typeof h == "function" ? h({ inputId: p, hintId: v, errorId: d }) : h, k = Lt($) && typeof $.props.id == "string" ? $.props.id : void 0, f = k ?? t ?? p, _ = Lt($) && (b != null || k == null && typeof $.type == "string"), u = k != null || t != null || _, x = _ && Lt($) ? ds($, {
    id: f,
    "aria-describedby": b != null ? [
      $.props["aria-describedby"],
      b
    ].filter((N) => typeof N == "string").join(" ") || void 0 : $.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : $.props["aria-invalid"]
  }) : $;
  return /* @__PURE__ */ O("div", { className: [$n.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O(
      "label",
      {
        className: $n.label,
        htmlFor: u ? f : void 0,
        children: [
          e,
          s === !0 && /* @__PURE__ */ n("span", { className: $n.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: $n.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ n("div", { id: v, className: $n.hint, children: a }) : null
  ] });
}
const Co = "_formfield_pw6rq_1", Eo = "_content_pw6rq_8", Io = "_label_pw6rq_43", jo = "_floating_pw6rq_64", Ao = "_start_pw6rq_64", To = "_required_pw6rq_101", Ro = "_end_pw6rq_107", Lo = "_filled_pw6rq_124", Po = "_flat_pw6rq_131", Bo = "_helper_pw6rq_138", Fo = "_invalid_pw6rq_143", Et = {
  formfield: Co,
  content: Eo,
  label: Io,
  floating: jo,
  start: Ao,
  required: To,
  end: Ro,
  filled: Lo,
  flat: Po,
  helper: Bo,
  invalid: Fo
};
function T2({
  text: e,
  start: t,
  end: s,
  helper: o,
  component: i,
  allowFloatingLabel: c = !0,
  variant: h = "outlined",
  invalid: r = !1,
  required: l = !1,
  children: a,
  className: p,
  visible: d = !0
}) {
  const v = qe(), b = qe();
  if (d === !1) return null;
  const $ = i ?? v, k = typeof a == "function" ? a({
    inputId: $
  }) : a, f = Lt(k) ? k.type : null, _ = typeof f == "string", u = Lt(k) && typeof f != "symbol", x = Lt(k) ? k.props : null, N = typeof x?.id == "string" ? x.id : void 0, g = u && (o != null || r || N == null && _), S = N != null || i != null || g, y = _ && Lt(k) ? k.type.toLowerCase() : null, w = y === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, E = y === "textarea" || y === "input" && (w == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(w)), I = g && Lt(k) ? ds(
    k,
    {
      id: N ?? $,
      ...c && E && x?.placeholder == null ? { placeholder: " " } : {},
      ...o != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          b
        ].filter((z) => typeof z == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : k, C = e != null ? /* @__PURE__ */ O(
    "label",
    {
      className: Et.label,
      htmlFor: S ? N ?? $ : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ n("span", { className: Et.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [
        Et.formfield,
        Et[h],
        c ? Et.floating : null,
        r ? Et.invalid : null,
        p
      ].filter(Boolean).join(" "),
      children: [
        c ? null : C,
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          t != null && /* @__PURE__ */ n("div", { className: Et.start, children: t }),
          I,
          c ? C : null,
          s != null && /* @__PURE__ */ n("div", { className: Et.end, children: s })
        ] }),
        o != null && /* @__PURE__ */ n("div", { id: b, className: Et.helper, children: o })
      ]
    }
  );
}
const qo = "_fieldset_1ionk_1", Ho = "_legend_1ionk_11", Ko = "_legendText_1ionk_20", Uo = "_toggle_1ionk_24", Wo = "_content_1ionk_45", Vo = "_summary_1ionk_49", nn = {
  fieldset: qo,
  legend: Ho,
  legendText: Ko,
  toggle: Uo,
  content: Wo,
  summary: Vo
};
function R2({
  text: e,
  headerTemplate: t,
  icon: s,
  iconColor: o,
  allowCollapse: i = !1,
  collapsed: c,
  defaultCollapsed: h = !1,
  summary: r,
  expandTitle: l,
  collapseTitle: a,
  expandAriaLabel: p,
  collapseAriaLabel: d,
  onExpand: v,
  onCollapse: b,
  children: $,
  className: k,
  visible: f = !0
}) {
  const _ = qe(), [u, x] = X(h);
  if (f === !1) return null;
  const N = c ?? u, g = i ? `${_}-content` : void 0, S = () => {
    const z = !N;
    c === void 0 && x(z), z ? b?.() : v?.();
  }, y = i || e != null || s != null || t != null, w = i ? N : !1, E = i && N && r != null, I = w ? l ?? "Expand" : a ?? "Collapse", C = w ? p ?? "Expand" : d ?? "Collapse";
  return /* @__PURE__ */ O(
    "fieldset",
    {
      className: [nn.fieldset, k].filter(Boolean).join(" "),
      children: [
        y ? /* @__PURE__ */ n("legend", { className: nn.legend, children: i ? /* @__PURE__ */ O(De, { children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              className: nn.toggle,
              title: I,
              "aria-label": e == null ? C : void 0,
              "aria-expanded": !w,
              "aria-controls": g,
              onClick: S,
              children: [
                /* @__PURE__ */ n(
                  Se,
                  {
                    name: w ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                s != null && /* @__PURE__ */ n(
                  Se,
                  {
                    name: s,
                    "aria-hidden": "true",
                    ...o != null ? { style: { color: o } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ n("span", { className: nn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ O(De, { children: [
          s != null && /* @__PURE__ */ n(
            Se,
            {
              name: s,
              "aria-hidden": "true",
              ...o != null ? { style: { color: o } } : {}
            }
          ),
          e != null && /* @__PURE__ */ n("span", { className: nn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ n(
          "div",
          {
            className: nn.content,
            id: g,
            hidden: w,
            children: $
          }
        ),
        E ? /* @__PURE__ */ n("div", { className: nn.summary, children: r }) : null
      ]
    }
  );
}
const Xo = "_form_19k3s_1", Go = {
  form: Xo
}, Vs = Ws(null);
function Yo() {
  const e = Us(Vs);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function L2({
  model: e,
  onSubmit: t,
  onInvalidSubmit: s,
  action: o,
  method: i,
  children: c,
  className: h
}) {
  const [r, l] = X({}), [a, p] = X(0), d = le(r);
  d.current = r;
  const v = H((x) => {
    l(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), b = H((x) => {
    l((N) => {
      if (!(x in N)) return N;
      const g = { ...N };
      return delete g[x], g;
    });
  }, []), $ = H(() => {
    const x = {};
    for (const N of Object.values(d.current)) {
      const g = N.validate();
      g.length > 0 && (x[N.name] = g);
    }
    return x;
  }, []), k = H(() => {
    const x = $();
    p((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : s?.(x);
  }, [$, e, t, s]), f = (x) => {
    o != null && i != null || (x.preventDefault(), k());
  }, _ = $e(
    () => ({ registerField: v, unregisterField: b, submit: k, submitCount: a }),
    [v, b, k, a]
  ), u = [Go.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Vs.Provider, { value: _, children: /* @__PURE__ */ n(
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
const dn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", P2 = (e = "Required") => (t) => dn(t) ? e : null, B2 = (e = "Invalid email") => (t) => dn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, F2 = (e, t = "Invalid format") => (s) => dn(s) || e.test(String(s)) ? null : t, q2 = (e, t = `Minimum ${e} characters`) => (s) => dn(s) || String(s).length >= e ? null : t, H2 = (e, t = `Maximum ${e} characters`) => (s) => dn(s) || String(s).length <= e ? null : t, K2 = (e, t, s = `Between ${e} and ${t}`) => (o) => {
  if (dn(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : s;
}, U2 = (e, t = "Values do not match") => (s, o) => {
  if (dn(s)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return s === i ? null : t;
}, W2 = (e = "Required") => (t) => t === !0 ? null : e, V2 = (e) => (t, s) => e(t, s);
function Zo(e, t, s) {
  return e.map((o) => o(t, s)).filter((o) => o != null);
}
function X2(e, t) {
  const { registerField: s, unregisterField: o, submitCount: i } = Yo(), [c, h] = X(t?.initialValue), [r, l] = X(!1), [a, p] = X(!1), d = le(() => []);
  d.current = () => Zo(t?.validate ?? [], c), ke(() => (s({ name: e, validate: () => d.current() }), () => o(e)), [e, s, o]), ke(() => {
    i > 0 && (l(!0), p(!1));
  }, [i]);
  const v = r && !a ? d.current() : [];
  return { value: c, setValue: ($) => {
    h($), p(!0);
  }, errors: v };
}
const Jo = "_select_1j4dh_1", Qo = "_invalid_1j4dh_33", el = "_xs_1j4dh_40", tl = "_sm_1j4dh_48", nl = "_md_1j4dh_56", sl = "_lg_1j4dh_62", rl = "_xl_1j4dh_68", Qn = {
  select: Jo,
  invalid: Qo,
  xs: el,
  sm: tl,
  md: nl,
  lg: sl,
  xl: rl
}, bn = We(
  function({ size: t = "md", invalid: s = !1, options: o, children: i, className: c, ...h }, r) {
    return /* @__PURE__ */ n(
      "select",
      {
        ref: r,
        className: [
          Qn.select,
          Qn[t],
          s ? Qn.invalid : null,
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
), Xs = [
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
], Nn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, ol = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function ll(e) {
  return ol.includes(e);
}
function Zn(e, t) {
  return t.split(".").reduce((s, o) => {
    if (s != null)
      return s[o];
  }, e);
}
function ps(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Rn(e, t) {
  const s = ps(e), o = ps(t);
  if (typeof s == "number" && typeof o == "number") return s - o;
  const i = String(s ?? ""), c = String(o ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function Jn(e) {
  if (e.secondOperator == null) return !1;
  if (ll(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function ms(e, t, s) {
  const o = Zn(t, e.property), i = gs(
    o,
    e.value,
    e.operator,
    s
  );
  if (!Jn(e)) return i;
  const c = gs(
    o,
    e.secondValue,
    e.secondOperator,
    s
  );
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function gs(e, t, s, o) {
  const i = o === "CaseInsensitive", c = (l) => i && typeof l == "string" ? l.toLowerCase() : l, h = c(e), r = c(t);
  switch (s) {
    case "Equals":
      return h === r || Array.isArray(h) && h.some((l) => c(l) === r);
    case "NotEquals":
      return h !== r && !(Array.isArray(h) && h.some((l) => c(l) === r));
    case "LessThan":
      return Rn(h, r) < 0;
    case "LessThanOrEquals":
      return Rn(h, r) <= 0;
    case "GreaterThan":
      return Rn(h, r) > 0;
    case "GreaterThanOrEquals":
      return Rn(h, r) >= 0;
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
function fs(e) {
  return "filters" in e;
}
function Gs(e, t, s = {}) {
  const o = s.logicalOperator ?? "And", i = s.caseSensitivity ?? "CaseInsensitive";
  if (fs(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (h) => Gs(e, h, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", ms(t, e, i);
}
function Ys(e, t, s = {}) {
  return e.filter((o) => Gs(o, t, s));
}
function al(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${al(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function il(e) {
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
  if (!Jn(e))
    return t(e.operator, e.value);
  const s = e.logicalOperator ?? "And", o = e.secondOperator;
  return `(${t(e.operator, e.value)} ${s} ${t(
    o,
    e.secondValue
  )})`;
}
function cl(e) {
  return fs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(cl).filter(Boolean).join(` ${e.operator} `)})` : il(e);
}
function dl(e) {
  return e.replace(/'/g, "''");
}
const ul = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function _l(e, t) {
  const s = e.property, o = t === "CaseInsensitive", i = (a) => o ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${dl(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), h = (a, p) => {
    const d = typeof p == "string", v = d && o ? i(s) : s;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${v} ${ul[a]} ${d && o ? i(c(p)) : c(p)}`;
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
  if (!Jn(e))
    return h(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${h(e.operator, e.value)} ${r} ${h(
    l,
    e.secondValue
  )})`;
}
function fl(e, t = {}) {
  const s = t.caseSensitivity ?? "CaseInsensitive";
  if (fs(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => fl(i, { caseSensitivity: s })).filter(Boolean).join(` ${o} `)})`;
  }
  return _l(e, s);
}
function hl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((s, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, h = Rn(
        Zn(s, i.property),
        Zn(o, i.property)
      );
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const pl = "_filter_los3f_1", ml = "_rows_los3f_9", gl = "_row_los3f_9", yl = "_join_los3f_21", xl = "_property_los3f_30", bl = "_operator_los3f_34", vl = "_value_los3f_38", kl = "_remove_los3f_42", wl = "_bar_los3f_58", $l = "_add_los3f_64", Nl = "_custom_los3f_78", Ol = "_summary_los3f_82", Sl = "_second_los3f_87", zl = "_secondAdd_los3f_91", Dl = "_addSecond_los3f_95", Ml = "_joinSelect_los3f_109", Ye = {
  filter: pl,
  rows: ml,
  row: gl,
  join: yl,
  property: xl,
  operator: bl,
  value: vl,
  remove: kl,
  bar: wl,
  add: $l,
  custom: Nl,
  summary: Ol,
  second: Sl,
  secondAdd: zl,
  addSecond: Dl,
  joinSelect: Ml
}, On = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], ys = {
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
function xs({
  property: e,
  value: t,
  onChange: s
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(De, { children: e.editor({ value: t, onChange: s }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      bn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => s(c.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ n(
      bn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
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
      className: Ye.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => s(
        o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function G2({
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
    () => o != null && o.length > 0 ? o.map((_, u) => ({ id: u, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Nn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (_, u) => {
    p(
      (x) => x.map((N) => N.id === _ ? { ...N, ...u } : N)
    );
  }, v = () => {
    const _ = a[a.length - 1], u = Math.max(0, ...a.map((N) => N.id)) + 1, x = e[0];
    p((N) => [
      ...N,
      {
        id: u,
        property: _?.property ?? x?.name ?? "",
        operator: Nn[e.find(
          (g) => g.name === (_?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (_) => {
    p(
      (u) => u.length > 1 ? u.filter((x) => x.id !== _) : u
    );
  }, $ = $e(() => {
    const _ = [];
    for (const u of a) {
      if (u.property === "" || (u.value == null || u.value === "") && !On.includes(u.operator)) continue;
      const N = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: g } = u;
      g != null && Jn(u) && (N.secondOperator = g, N.secondValue = u.secondValue, N.logicalOperator = u.logicalOperator ?? "And"), _.push(N);
    }
    return _;
  }, [a]), k = $e(() => r == null || $.length === 0 ? r : Ys(r, {
    operator: t,
    filters: $
  }, {
    caseSensitivity: s
  }), [r, $, t, s]);
  ke(() => {
    h != null && r != null && h(k ?? []);
  }, [k]);
  const f = (_) => e.find((u) => u.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ye.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ye.rows, role: "group", "aria-label": "Filter conditions", children: a.map((_, u) => {
      const x = f(_.property), N = i ? [Nn[x.type ?? "string"]] : Xs, g = !On.includes(_.operator), S = _.secondOperator != null;
      return /* @__PURE__ */ O(nr, { children: [
        /* @__PURE__ */ O("div", { className: Ye.row, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: Ye.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            bn,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: Ye.property,
              value: _.property,
              onChange: (y) => {
                const w = e.find(
                  (E) => E.name === y.target.value
                );
                d(_.id, {
                  property: y.target.value,
                  operator: Nn[w?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((y) => ({
                value: y.name,
                label: y.title ?? y.name
              }))
            }
          ),
          /* @__PURE__ */ n(
            bn,
            {
              "aria-label": `Condition ${u + 1} operator`,
              className: Ye.operator,
              value: _.operator,
              onChange: (y) => {
                const w = y.target.value;
                d(
                  _.id,
                  On.includes(w) ? {
                    operator: w,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: w }
                );
              },
              options: N.map((y) => ({
                value: y,
                label: ys[y]
              }))
            }
          ),
          g ? /* @__PURE__ */ n(
            xs,
            {
              property: x,
              value: _.value,
              onChange: (y) => d(_.id, { value: y })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ye.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => b(_.id),
              children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
            }
          )
        ] }),
        g ? S ? /* @__PURE__ */ O(
          "div",
          {
            className: [Ye.row, Ye.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                bn,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: Ye.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (y) => d(_.id, {
                    logicalOperator: y.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ n(
                bn,
                {
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: Ye.operator,
                  value: _.secondOperator,
                  onChange: (y) => {
                    const w = y.target.value;
                    d(
                      _.id,
                      On.includes(w) ? { secondOperator: w, secondValue: void 0 } : { secondOperator: w }
                    );
                  },
                  options: N.map((y) => ({
                    value: y,
                    label: ys[y]
                  }))
                }
              ),
              _.secondOperator == null || !On.includes(_.secondOperator) ? /* @__PURE__ */ n(
                xs,
                {
                  property: x,
                  value: _.secondValue,
                  onChange: (y) => d(_.id, { secondValue: y })
                }
              ) : null,
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: Ye.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
                  onClick: () => d(_.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ n("div", { className: Ye.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ye.addSecond,
            onClick: () => d(_.id, {
              secondOperator: Nn[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ O("div", { className: Ye.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ye.add, onClick: v, children: "Add filter" }),
      l != null ? /* @__PURE__ */ n("div", { className: Ye.custom, children: l }) : null,
      r != null ? /* @__PURE__ */ O("span", { className: Ye.summary, "aria-live": "polite", children: [
        k?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const Cl = "_pager_k78w3_1", El = "_alignLeft_k78w3_10", Il = "_alignCenter_k78w3_14", jl = "_alignRight_k78w3_18", Al = "_alignJustify_k78w3_22", Tl = "_summary_k78w3_26", Rl = "_controls_k78w3_31", Ll = "_button_k78w3_37", Pl = "_active_k78w3_73", Bl = "_ellipsis_k78w3_85", Fl = "_size_k78w3_91", at = {
  pager: Cl,
  alignLeft: El,
  alignCenter: Il,
  alignRight: jl,
  alignJustify: Al,
  summary: Tl,
  controls: Rl,
  button: Ll,
  active: Pl,
  ellipsis: Bl,
  size: Fl
};
function ql(e, t, s, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(s)).replace("{2}", String(o));
}
function bs(e, t) {
  return e.replace("{0}", String(t));
}
function Hl(e, t, s) {
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
function Kl({
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
  prevPageTitle: $ = "Previous page",
  nextPageTitle: k = "Next page",
  lastPageTitle: f = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: g = "Pagination",
  className: S,
  visible: y = !0
}) {
  const w = s ?? o, [E, I] = X(w), C = s !== void 0, z = C ? w : E, m = Math.max(1, Math.ceil(e / t)), M = Math.min(Math.max(1, z), m), P = l ?? !0, j = h || m > 1, T = Hl(M, m, c), F = H(
    (K) => {
      const te = Math.min(Math.max(1, K), m);
      C || I(te);
      const oe = (te - 1) * t;
      x?.({
        page: te,
        skip: oe,
        top: t,
        pageCount: m,
        pageSize: t
      });
    },
    [C, x, m, t]
  ), V = r === "center" ? at.alignCenter : r === "right" ? at.alignRight : r === "justify" ? at.alignJustify : at.alignLeft, Z = {
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
  return y === !1 || !j ? null : /* @__PURE__ */ O(
    "nav",
    {
      className: [at.pager, V, S].filter(Boolean).join(" "),
      "aria-label": g,
      children: [
        P && /* @__PURE__ */ n("span", { className: at.summary, "aria-live": "polite", children: d ? d(Z) : ql(p, M, m, e) }),
        /* @__PURE__ */ O(
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
                  className: at.button,
                  disabled: M <= 1,
                  onClick: () => F(M - 1),
                  "aria-label": $,
                  title: $,
                  children: "‹"
                }
              ),
              T.map(
                (K, te) => K === "ellipsis" ? /* @__PURE__ */ n("span", { className: at.ellipsis, "aria-hidden": "true", children: "…" }, `e${te}`) : /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": K,
                    className: [at.button, K === M ? at.active : ""].filter(Boolean).join(" "),
                    "aria-current": K === M ? "page" : void 0,
                    "aria-label": bs(u, K),
                    title: bs(_, K),
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
                  className: at.button,
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
        a && i && i.length > 0 && /* @__PURE__ */ O("label", { className: at.size, children: [
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
function os(e) {
  const { pageNumber: t, onPageChange: s, summaryTemplate: o, showSummary: i, ...c } = e;
  return /* @__PURE__ */ n(
    Kl,
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
function Ul(e, t, s, o, i, c) {
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
function Bn(e, t) {
  return e.property ?? `col-${t}`;
}
function Wl(e, t) {
  const s = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    s[i] = o === 0 ? "0px" : `${o}px`;
    const h = t[i] ?? c.width ?? "8rem";
    o += parseFloat(h);
  }), s;
}
function Vl(e, t) {
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
function Sn(e, t) {
  if (t != null)
    return Zn(e, t);
}
function vs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const s = /^N(\d+)$/i.exec(t);
  if (s && typeof e == "number") return e.toFixed(Number(s[1]));
  if (t === "d" || t === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const ks = [
  "Ascending",
  "Descending",
  null
];
function Xl(e, t, s = {}) {
  const o = e.find((c) => c.property === t), i = ks[(o ? ks.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : s.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function Gl(e, t) {
  return hl(e, t);
}
function Yl(e, t, s) {
  const o = Math.max(1, Math.ceil(e.length / s)), i = Math.min(Math.max(1, t), o), c = (i - 1) * s;
  return {
    items: e.slice(c, c + s),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function Zl(e, t, s = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, l]) => ({
      property: r,
      operator: l.operator ?? "Contains",
      value: Vl(
        l.value,
        s.types?.[r] ?? "string"
      )
    })
  ), i = o.length > 0 ? Ys(
    e,
    { operator: s.logicalOperator ?? "And", filters: o },
    {
      logicalOperator: s.logicalOperator ?? "And",
      caseSensitivity: s.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = Gl(i, t.sorts);
  return {
    ...Yl(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Jl(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Ql = "_grid_a6ibk_1", ea = "_toolbar_a6ibk_8", ta = "_picker_a6ibk_13", na = "_pickerButton_a6ibk_17", sa = "_pickerPanel_a6ibk_31", ra = "_pickerItem_a6ibk_46", oa = "_groupPanel_a6ibk_55", la = "_groupPanelActive_a6ibk_66", aa = "_groupPanelText_a6ibk_70", ia = "_groupChip_a6ibk_74", ca = "_groupRemove_a6ibk_85", da = "_groupRow_a6ibk_94", ua = "_groupCell_a6ibk_98", _a = "_groupToggle_a6ibk_103", fa = "_editRow_a6ibk_116", ha = "_editCell_a6ibk_120", pa = "_editInput_a6ibk_125", ma = "_commandCell_a6ibk_135", ga = "_commandButton_a6ibk_141", ya = "_data_a6ibk_156", xa = "_table_a6ibk_163", ba = "_header_a6ibk_169", va = "_center_a6ibk_181", ka = "_right_a6ibk_185", wa = "_sortButton_a6ibk_189", $a = "_sortIndicator_a6ibk_207", Na = "_sortIndex_a6ibk_211", Oa = "_cell_a6ibk_222", Sa = "_clickable_a6ibk_236", za = "_frozen_a6ibk_244", Da = "_selected_a6ibk_250", Ma = "_resizeHandle_a6ibk_258", Ca = "_filterCell_a6ibk_276", Ea = "_filterSelect_a6ibk_284", Ia = "_filterInput_a6ibk_294", ja = "_empty_a6ibk_305", Aa = "_loading_a6ibk_311", Ta = "_visuallyHidden_a6ibk_321", ge = {
  grid: Ql,
  toolbar: ea,
  picker: ta,
  pickerButton: na,
  pickerPanel: sa,
  pickerItem: ra,
  groupPanel: oa,
  groupPanelActive: la,
  groupPanelText: aa,
  groupChip: ia,
  groupRemove: ca,
  groupRow: da,
  groupCell: ua,
  groupToggle: _a,
  editRow: fa,
  editCell: ha,
  editInput: pa,
  commandCell: ma,
  commandButton: ga,
  data: ya,
  table: xa,
  header: ba,
  center: va,
  right: ka,
  sortButton: wa,
  sortIndicator: $a,
  sortIndex: Na,
  cell: Oa,
  clickable: Sa,
  frozen: za,
  selected: Da,
  resizeHandle: Ma,
  filterCell: Ca,
  filterSelect: Ea,
  filterInput: Ia,
  empty: ja,
  loading: Aa,
  visuallyHidden: Ta
}, Ra = {
  Ascending: "ascending",
  Descending: "descending"
};
function ws(e, t) {
  return e.filterable ?? t;
}
function La(e, t) {
  return e.sortable ?? t;
}
function Pa(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Y2({
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
  showPagingSummary: $ = !0,
  showPageSizeSelector: k = !0,
  selectionMode: f = "None",
  selectedKeys: _,
  onSelectionChange: u,
  showColumnPicker: x = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: g = !1,
  allowColumnReorder: S = !1,
  allowGrouping: y = !1,
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
    () => e.map((A, R) => Bn(A, R))
  ), [ae, xe] = X(
    () => new Set(
      e.map((A, R) => A.visible !== !1 ? Bn(A, R) : "").filter(Boolean)
    )
  ), [we, Be] = X({}), [ve, Ve] = X(!1), [ye, Ze] = X(null), [Xe, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, W] = X({}), D = le(null), q = le(null), ne = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((R, ce) => A.set(Bn(R, ce), R)), A;
  }, [e]), _e = $e(
    () => Y.filter((A) => ae.has(A)).map((A) => ({ key: A, column: ne.get(A) })).filter(
      (A) => A.column != null
    ),
    [Y, ae, ne]
  ), se = $e(
    () => Wl(_e, we),
    [_e, we]
  ), me = I !== "None" || M != null || C, Ne = $e(
    () => Zl(
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
    () => ye ? e.find((A) => A.property === ye) : void 0,
    [ye, e]
  ), Je = $e(
    () => Xe ?? new Set(
      E ? Ne.items.map(
        (A) => String(Sn(A, ye ?? "") ?? "")
      ) : []
    ),
    [Xe, E, Ne.items, ye]
  ), dt = $e(
    () => Ul(
      Ne.items,
      ye ?? void 0,
      Fe,
      Je,
      Sn,
      (A) => vs(A, Fe?.format)
    ),
    [Ne.items, ye, Fe, Je]
  ), bt = $e(
    () => ye ? _e.filter((A) => A.column.property !== ye) : _e,
    [_e, ye]
  ), J = (A) => {
    A !== "" && Q(Xl(Z, A, { multi: i }));
  }, ze = (A, R) => {
    te((ce) => {
      const pe = new Map(ce);
      return pe.set(A, R), pe;
    }), ee(1);
  }, nt = (A) => {
    ie(A), ee(1);
  }, Gt = (A) => {
    if (f === "None") return;
    const R = s(A), ce = _ ?? [];
    let pe;
    f === "Single" ? pe = ce.length === 1 && ce[0] === R ? [] : [R] : pe = ce.includes(R) ? ce.filter((Ie) => Ie !== R) : [...ce, R], u?.(pe);
  }, Nt = (A) => {
    V?.(A);
  }, Me = (A, R, ce) => {
    D.current = { key: A, startX: R, startWidth: ce };
  }, Ge = (A) => {
    const R = D.current;
    if (!R) return;
    const ce = A - R.startX, pe = Math.max(48, R.startWidth + ce);
    Be((Ie) => ({ ...Ie, [R.key]: `${pe}px` }));
  }, vt = () => {
    D.current = null;
  }, Pt = (A) => {
    q.current = A;
  }, en = (A) => {
    const R = q.current;
    q.current = null, !(!R || R === A) && de((ce) => {
      const pe = [...ce], Ie = pe.indexOf(R), je = pe.indexOf(A);
      return Ie < 0 || je < 0 ? ce : (pe.splice(Ie, 1), pe.splice(je, 0, R), pe);
    });
  }, U = (A) => {
    xe((R) => {
      const ce = new Set(R);
      return ce.has(A) ? ce.delete(A) : ce.add(A), ce;
    });
  }, ue = () => {
    const A = q.current;
    if (q.current = null, !A || !y) return;
    const ce = ne.get(A)?.property;
    ce && (Ze(ce), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, He = (A) => {
    Le((R) => {
      const ce = R ?? new Set(
        E ? Ne.items.map(
          (Ie) => String(Sn(Ie, ye ?? "") ?? "")
        ) : []
      ), pe = new Set(ce);
      return pe.has(A) ? pe.delete(A) : pe.add(A), pe;
    });
  }, Bt = (A) => {
    const R = {};
    e.forEach((ce) => {
      ce.property && (R[ce.property] = Sn(A, ce.property));
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
  }, re = a && (b === "Top" || b === "TopAndBottom"), he = a && (b === "Bottom" || b === "TopAndBottom"), fe = h && e.some((A) => ws(A, h)), be = (A, R, ce) => A.render ? A.render(R, { index: 0 }) : vs(Sn(R, A.property), A.format), Te = (A) => {
    const R = [ge.cell];
    return A.align === "center" && R.push(ge.center), A.align === "right" && R.push(ge.right), A.frozen && R.push(ge.frozen), R.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, F].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ n(
      os,
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
    (y || C || x) && /* @__PURE__ */ O("div", { className: ge.toolbar, children: [
      y && /* @__PURE__ */ n(
        "div",
        {
          className: [
            ge.groupPanel,
            ye ? ge.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: y ? (A) => A.preventDefault() : void 0,
          onDrop: y ? ue : void 0,
          children: ye ? /* @__PURE__ */ O("span", { className: ge.groupChip, children: [
            Fe?.title ?? ye,
            ":",
            " ",
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: ge.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${Fe?.title ?? ye}`,
                children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
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
      x && /* @__PURE__ */ O("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => Ve((A) => !A),
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
              const ce = Bn(A, R);
              return /* @__PURE__ */ O("label", { className: ge.pickerItem, children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    type: "checkbox",
                    checked: ae.has(ce),
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
                  const ce = La(R, o), pe = Z.find((Ce) => Ce.property === R.property), Ie = pe ? Z.indexOf(pe) + 1 : 0, je = R.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": ce && pe ? Ra[pe.sortOrder] : "none",
                      className: [
                        ge.header,
                        je === "center" ? ge.center : "",
                        je === "right" ? ge.right : "",
                        R.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: se[A] } : void 0,
                      scope: "col",
                      draggable: S || y || void 0,
                      onDragStart: S || y ? (Ce) => {
                        Ce.dataTransfer && (Ce.dataTransfer.effectAllowed = "move"), Pt(A);
                      } : void 0,
                      onDragOver: S ? (Ce) => Ce.preventDefault() : void 0,
                      onDrop: S ? () => en(A) : void 0,
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
                            onMouseDown: (Ce) => {
                              Ce.preventDefault(), Ce.stopPropagation();
                              const lt = we[A] ?? R.width, St = lt ? parseFloat(lt) : 96;
                              Me(
                                A,
                                Ce.clientX,
                                Number.isFinite(St) ? St : 96
                              );
                            },
                            onMouseMove: (Ce) => {
                              D.current?.key === A && Ge(Ce.clientX);
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
                if (!ws(R, h))
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
                      value: ce?.operator ?? Jl(R.type ?? "string"),
                      onChange: (pe) => ze(R.property ?? "", {
                        ...ce,
                        operator: pe.target.value
                      }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: Xs.filter((pe) => pe !== "Custom").map(
                        (pe) => /* @__PURE__ */ n("option", { value: pe, children: pe }, pe)
                      )
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: ce?.value ?? "",
                      onChange: (pe) => ze(R.property ?? "", {
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
                      Pa(je.target) || (Nt(R), Gt(R));
                    } : void 0,
                    children: [
                      bt.map(({ key: je, column: Ce }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: Te(Ce),
                          style: Ce.frozen ? { left: se[je] } : void 0,
                          children: Ie && Ce.property ? /* @__PURE__ */ n(
                            "input",
                            {
                              className: ge.editInput,
                              type: Ce.type === "number" ? "number" : Ce.type === "boolean" ? "checkbox" : "text",
                              checked: Ce.type === "boolean" ? !!et[Ce.property] : void 0,
                              value: Ce.type === "boolean" ? void 0 : String(et[Ce.property] ?? ""),
                              onChange: (lt) => W((St) => ({
                                ...St,
                                [Ce.property]: Ce.type === "boolean" ? lt.target.checked : lt.target.value
                              })),
                              "aria-label": `${Ce.title ?? Ce.property} (edit)`
                            }
                          ) : be(Ce, R)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(De, { children: [
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
                      ] }) : /* @__PURE__ */ O(De, { children: [
                        I !== "None" && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Bt(R),
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
      os,
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
const Ba = "_wrap_1e4xo_1", Fa = "_grid_1e4xo_7", qa = "_stacked_1e4xo_13", Ha = "_item_1e4xo_19", Ka = "_empty_1e4xo_25", zn = {
  wrap: Ba,
  grid: Fa,
  stacked: qa,
  item: Ha,
  empty: Ka
};
function Z2({
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
  const [v, b] = X(1), [$, k] = X(t), f = e.length, _ = Math.max(1, Math.ceil(f / $)), u = Math.min(Math.max(1, v), _), x = $e(() => {
    const g = (u - 1) * $;
    return e.slice(g, g + $);
  }, [e, u, $]), N = o ? zn.grid : zn.stacked;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [zn.wrap, p].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        l && r != null ? r : f === 0 ? h ?? /* @__PURE__ */ n("div", { className: zn.empty, children: c }) : /* @__PURE__ */ n("div", { className: N, children: x.map((g, S) => /* @__PURE__ */ n("div", { className: zn.item, children: i ? i(g, S) : String(g) }, S)) }),
        /* @__PURE__ */ n(
          os,
          {
            pageNumber: u,
            pageSize: $,
            count: f,
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
const Ua = "_label_1qfpw_1", Wa = {
  label: Ua
}, J2 = We(function({ className: t, children: s, ...o }, i) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: i,
      className: [Wa.label, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}), Va = "_textbox_p4yvm_1", Xa = "_invalid_p4yvm_37", Ga = "_xs_p4yvm_44", Ya = "_sm_p4yvm_50", Za = "_md_p4yvm_56", Ja = "_lg_p4yvm_62", Qa = "_xl_p4yvm_68", es = {
  textbox: Va,
  invalid: Xa,
  xs: Ga,
  sm: Ya,
  md: Za,
  lg: Ja,
  xl: Qa
}, ei = We(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    visible: i = !0,
    type: c = "text",
    ...h
  }, r) {
    return i === !1 ? null : /* @__PURE__ */ n(
      "input",
      {
        ref: r,
        type: c,
        className: [
          es.textbox,
          es[t],
          s ? es.invalid : null,
          o
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...h
      }
    );
  }
), Q2 = ei, ti = "_checkbox_ppe6g_1", ni = {
  checkbox: ti
}, ev = We(
  function({ className: t, ...s }, o) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [ni.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), si = {
  switch: "_switch_luh7n_1"
}, ri = We(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [si.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), oi = "_trigger_fnpn4_1", li = "_tooltip_fnpn4_7", ai = "_top_fnpn4_34", ii = "_right_fnpn4_40", ci = "_bottom_fnpn4_46", di = "_left_fnpn4_52", ui = "_arrow_fnpn4_58", Fn = {
  trigger: oi,
  tooltip: li,
  "se-tooltip-in": "_se-tooltip-in_fnpn4_1",
  top: ai,
  right: ii,
  bottom: ci,
  left: di,
  arrow: ui
};
function tv({
  content: e,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = qe(), h = le(null), [r, l] = X(!1), a = () => {
    h.current = window.setTimeout(() => l(!0), o);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), l(!1);
  };
  ke(() => {
    if (!r) return;
    const v = (b) => {
      b.key === "Escape" && p();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [r]);
  const d = Lt(t) ? ds(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      r ? c : null
    ].filter((v) => typeof v == "string").join(" ") || void 0
  }) : t;
  return /* @__PURE__ */ O(
    "span",
    {
      className: [Fn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: a,
      onMouseLeave: p,
      onFocus: a,
      onBlur: p,
      children: [
        d,
        r && /* @__PURE__ */ O(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [Fn.tooltip, Fn[s]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ n("span", { className: Fn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const _i = "_dialog_ox41c_1", fi = "_sm_ox41c_72", hi = "_resizable_ox41c_78", pi = "_md_ox41c_81", mi = "_lg_ox41c_85", gi = "_header_ox41c_89", yi = "_title_ox41c_99", xi = "_description_ox41c_106", bi = "_close_ox41c_113", vi = "_body_ox41c_143", ki = "_footer_ox41c_155", Ft = {
  dialog: _i,
  "se-dialog-in": "_se-dialog-in_ox41c_1",
  sm: fi,
  resizable: hi,
  md: pi,
  lg: mi,
  header: gi,
  title: yi,
  description: xi,
  close: bi,
  body: vi,
  footer: ki
};
function nv({
  open: e,
  onClose: t,
  title: s,
  description: o,
  children: i,
  footer: c,
  size: h = "md",
  width: r,
  height: l,
  closeOnOverlayClick: a = !0,
  closeOnEsc: p = !0,
  resizable: d = !1,
  canClose: v,
  className: b
}) {
  const $ = le(null), k = qe(), f = qe(), _ = le(t);
  ke(() => {
    _.current = t;
  });
  const u = le(v);
  ke(() => {
    u.current = v;
  });
  const x = le(p);
  ke(() => {
    x.current = p;
  });
  const N = le(!1), g = le(!1), S = H(() => {
    if (N.current) return;
    const w = u.current?.();
    if (w instanceof Promise) {
      w.then((E) => {
        E && !N.current && (N.current = !0, _.current());
      });
      return;
    }
    w !== !1 && (N.current = !0, _.current());
  }, []), y = H(() => {
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
          m.preventDefault(), x.current && S();
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
        Ft.dialog,
        Ft[h],
        d ? Ft.resizable : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: y,
      onClick: (w) => {
        w.target === $.current && a && S();
      },
      "aria-modal": "true",
      "aria-labelledby": s ? k : void 0,
      "aria-describedby": o ? f : void 0,
      children: [
        s && /* @__PURE__ */ O("header", { className: Ft.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: k, className: Ft.title, children: s }),
            o && /* @__PURE__ */ n("p", { id: f, className: Ft.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ft.close,
              onClick: () => {
                S();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: Ft.body, children: i }),
        c && /* @__PURE__ */ n("footer", { className: Ft.footer, children: c })
      ]
    }
  );
}
const wi = "_viewport_o7kje_1", $i = "_topLeft_o7kje_13", Ni = "_topRight_o7kje_20", Oi = "_bottomLeft_o7kje_25", Si = "_toast_o7kje_30", zi = "_leaving_o7kje_61", Di = "_info_o7kje_77", Mi = "_success_o7kje_86", Ci = "_warning_o7kje_95", Ei = "_danger_o7kje_104", Ii = "_content_o7kje_113", ji = "_title_o7kje_118", Ai = "_description_o7kje_141", Ti = "_dismiss_o7kje_148", Ri = "_actions_o7kje_169", Li = "_action_o7kje_169", Pi = "_cancel_o7kje_177", Bi = "_progress_o7kje_215", pt = {
  viewport: wi,
  topLeft: $i,
  topRight: Ni,
  bottomLeft: Oi,
  toast: Si,
  "se-toast-in": "_se-toast-in_o7kje_1",
  leaving: zi,
  "se-toast-out": "_se-toast-out_o7kje_1",
  info: Di,
  success: Mi,
  warning: Ci,
  danger: Ei,
  content: Ii,
  title: ji,
  description: Ai,
  dismiss: Ti,
  actions: Ri,
  action: Li,
  cancel: Pi,
  progress: Bi,
  "se-toast-progress": "_se-toast-progress_o7kje_1"
}, Zs = Ws(null);
function sv() {
  const e = Us(Zs);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Fi = 200, qi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function rv({
  children: e,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, h] = X([]), [r, l] = X(!1), a = le([]), p = le(/* @__PURE__ */ new Map()), d = le(!1), v = le(0), b = (z) => {
    d.current = z, l(z);
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
        return a.current = M, M;
      });
    },
    [k]
  ), _ = H(
    (z) => {
      const m = a.current.find((M) => M.id === z);
      !m || m.leaving || (m.onAutoClose?.(), f(z));
    },
    [f]
  ), u = H(
    (z) => {
      const m = p.current.get(z);
      !m || m.remaining <= 0 || (m.startedAt = Date.now(), m.timeoutId = window.setTimeout(() => _(z), m.remaining));
    },
    [_]
  ), x = H(() => {
    d.current || p.current.forEach((z, m) => $(m)), b(!0);
  }, [$]), N = H(() => {
    p.current.forEach((z, m) => u(m)), b(!1);
  }, [u]);
  ke(() => {
    if (!o) return;
    const z = () => {
      document.hidden ? x() : N();
    };
    return document.addEventListener("visibilitychange", z), () => document.removeEventListener("visibilitychange", z);
  }, [o, x, N]);
  const g = H(
    (z) => {
      const m = a.current.find((M) => M.id === z);
      !m || m.leaving || (m.onDismiss?.(), h((M) => {
        const P = M.map(
          (j) => j.id === z ? { ...j, leaving: !0 } : j
        );
        return a.current = P, P;
      }), window.setTimeout(() => f(z), Fi));
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
  ), y = H(
    (z) => {
      const m = a.current.find((P) => P.id === z.id), M = {
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
        return a.current = j, j;
      }), m && k(M.id), S(M);
    },
    [t, s, S, k]
  ), w = $e(() => ({ toast: y }), [y]), E = $e(
    () => Array.from(/* @__PURE__ */ new Set([s, ...c.map((z) => z.position)])),
    [s, c]
  ), I = o ? x : void 0, C = o ? N : void 0;
  return /* @__PURE__ */ O(Zs.Provider, { value: w, children: [
    e,
    E.map((z) => /* @__PURE__ */ n(
      "div",
      {
        className: [pt.viewport, pt[qi[z]], i].filter(Boolean).join(" "),
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
                  children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
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
const Hi = "_alert_12gyw_1", Ki = "_xs_12gyw_28", Ui = "_sm_12gyw_38", Wi = "_lg_12gyw_48", Vi = "_xl_12gyw_58", Xi = "_primary_12gyw_69", Gi = "_secondary_12gyw_74", Yi = "_light_12gyw_79", Zi = "_base_12gyw_84", Ji = "_dark_12gyw_89", Qi = "_info_12gyw_94", ec = "_success_12gyw_99", tc = "_warning_12gyw_104", nc = "_danger_12gyw_109", sc = "_flat_12gyw_116", rc = "_outlined_12gyw_123", oc = "_filled_12gyw_132", lc = "_text_12gyw_139", ac = "_icon_12gyw_181", ic = "_content_12gyw_192", cc = "_title_12gyw_197", dc = "_body_12gyw_203", uc = "_dismiss_12gyw_209", It = {
  alert: Hi,
  xs: Ki,
  sm: Ui,
  lg: Wi,
  xl: Vi,
  primary: Xi,
  secondary: Gi,
  light: Yi,
  base: Zi,
  dark: Ji,
  info: Qi,
  success: ec,
  warning: tc,
  danger: nc,
  flat: sc,
  outlined: rc,
  filled: oc,
  text: lc,
  icon: ac,
  content: ic,
  title: cc,
  body: dc,
  dismiss: uc,
  "shade-lighter": "_shade-lighter_12gyw_451",
  "shade-light": "_shade-light_12gyw_451",
  "shade-dark": "_shade-dark_12gyw_461",
  "shade-darker": "_shade-darker_12gyw_465"
}, _c = {
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
function ov({
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
  const [$, k] = X(!1);
  if (p === !1 || p === void 0 && $)
    return null;
  const f = () => {
    p === void 0 && k(!0), a?.(), d?.(!1);
  }, _ = e, u = _s(t, "filled"), x = s && s !== "default" ? `shade-${s}` : null, N = c ?? (h ? /* @__PURE__ */ n(Se, { name: _c[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...b,
      className: [
        It.alert,
        It[_],
        It[u],
        x ? It[x] : null,
        It[o],
        v
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ n("span", { className: It.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ O("div", { className: It.content, children: [
          i && /* @__PURE__ */ n("div", { className: It.title, children: i }),
          r && /* @__PURE__ */ n("div", { className: It.body, children: r })
        ] }),
        l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: It.dismiss,
            onClick: f,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const fc = "_skeleton_7ssmn_1", hc = "_text_7ssmn_35", pc = "_circle_7ssmn_40", mc = "_rect_7ssmn_44", $s = {
  skeleton: fc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_7ssmn_1",
  text: hc,
  circle: pc,
  rect: mc
};
function lv({
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
      className: [$s.skeleton, $s[e], o].filter(Boolean).join(" "),
      style: i
    }
  );
}
const gc = "_row_tkkv2_1", yc = "_gapXs_tkkv2_12", xc = "_gapSm_tkkv2_17", bc = "_gapMd_tkkv2_22", vc = "_gapLg_tkkv2_27", kc = "_gapXl_tkkv2_32", wc = "_start_tkkv2_37", $c = "_center_tkkv2_41", Nc = "_end_tkkv2_45", Oc = "_stretch_tkkv2_49", Sc = "_baseline_tkkv2_53", zc = "_noWrap_tkkv2_109", Dc = "_wrapReverse_tkkv2_113", Mc = "_gapRowXs_tkkv2_117", Cc = "_gapRowSm_tkkv2_121", Ec = "_gapRowMd_tkkv2_125", Ic = "_gapRowLg_tkkv2_129", jc = "_gapRowXl_tkkv2_133", un = {
  row: gc,
  gapXs: yc,
  gapSm: xc,
  gapMd: bc,
  gapLg: vc,
  gapXl: kc,
  start: wc,
  center: $c,
  end: Nc,
  stretch: Oc,
  baseline: Sc,
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
  noWrap: zc,
  wrapReverse: Dc,
  gapRowXs: Mc,
  gapRowSm: Cc,
  gapRowMd: Ec,
  gapRowLg: Ic,
  gapRowXl: jc
}, Ac = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Tc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Rc(e) {
  return typeof e != "string" ? null : Ac[e] ?? null;
}
function Lc(e) {
  return typeof e != "string" ? null : Tc[e] ?? null;
}
function Ns(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function av({
  gap: e,
  rowGap: t,
  align: s = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: h,
  ...r
}) {
  const l = Rc(e), a = Lc(t), p = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, d = {
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
        un.row,
        un[s],
        un[`justify-${o}`],
        Ns(i) != null ? un[Ns(i)] : null,
        l ? un[l] : null,
        a ? un[a] : null,
        c
      ].filter(Boolean).join(" "),
      style: d,
      ...r
    }
  );
}
const Pc = "_column_sh0ss_1", Bc = "_Size1_sh0ss_15", Fc = "_Size2_sh0ss_24", qc = "_Size3_sh0ss_33", Hc = "_Size4_sh0ss_42", Kc = "_Size5_sh0ss_51", Uc = "_Size6_sh0ss_60", Wc = "_Size7_sh0ss_69", Vc = "_Size8_sh0ss_78", Xc = "_Size9_sh0ss_87", Gc = "_Size10_sh0ss_96", Yc = "_Size11_sh0ss_105", Zc = "_Size12_sh0ss_114", Jc = "_Offset0_sh0ss_119", Qc = "_Offset1_sh0ss_122", ed = "_Offset2_sh0ss_127", td = "_Offset3_sh0ss_132", nd = "_Offset4_sh0ss_137", sd = "_Offset5_sh0ss_142", rd = "_Offset6_sh0ss_147", od = "_Offset7_sh0ss_152", ld = "_Offset8_sh0ss_157", ad = "_Offset9_sh0ss_162", id = "_Offset10_sh0ss_167", cd = "_Offset11_sh0ss_172", dd = "_Offset12_sh0ss_177", ud = "_OrderFirst_sh0ss_182", _d = "_OrderLast_sh0ss_185", fd = "_Order0_sh0ss_188", hd = "_Order1_sh0ss_191", pd = "_Order2_sh0ss_194", md = "_Order3_sh0ss_197", gd = "_Order4_sh0ss_200", yd = "_Order5_sh0ss_203", xd = "_Order6_sh0ss_206", bd = "_Order7_sh0ss_209", vd = "_Order8_sh0ss_212", kd = "_Order9_sh0ss_215", wd = "_Order10_sh0ss_218", $d = "_Order11_sh0ss_221", Nd = "_Order12_sh0ss_224", Od = "_xsSize1_sh0ss_229", Sd = "_xsSize2_sh0ss_238", zd = "_xsSize3_sh0ss_247", Dd = "_xsSize4_sh0ss_256", Md = "_xsSize5_sh0ss_265", Cd = "_xsSize6_sh0ss_274", Ed = "_xsSize7_sh0ss_283", Id = "_xsSize8_sh0ss_292", jd = "_xsSize9_sh0ss_301", Ad = "_xsSize10_sh0ss_310", Td = "_xsSize11_sh0ss_321", Rd = "_xsSize12_sh0ss_332", Ld = "_xsOffset0_sh0ss_337", Pd = "_xsOffset1_sh0ss_340", Bd = "_xsOffset2_sh0ss_345", Fd = "_xsOffset3_sh0ss_350", qd = "_xsOffset4_sh0ss_355", Hd = "_xsOffset5_sh0ss_360", Kd = "_xsOffset6_sh0ss_365", Ud = "_xsOffset7_sh0ss_370", Wd = "_xsOffset8_sh0ss_375", Vd = "_xsOffset9_sh0ss_380", Xd = "_xsOffset10_sh0ss_385", Gd = "_xsOffset11_sh0ss_391", Yd = "_xsOffset12_sh0ss_397", Zd = "_xsOrderFirst_sh0ss_403", Jd = "_xsOrderLast_sh0ss_406", Qd = "_xsOrder0_sh0ss_409", eu = "_xsOrder1_sh0ss_412", tu = "_xsOrder2_sh0ss_415", nu = "_xsOrder3_sh0ss_418", su = "_xsOrder4_sh0ss_421", ru = "_xsOrder5_sh0ss_424", ou = "_xsOrder6_sh0ss_427", lu = "_xsOrder7_sh0ss_430", au = "_xsOrder8_sh0ss_433", iu = "_xsOrder9_sh0ss_436", cu = "_xsOrder10_sh0ss_439", du = "_xsOrder11_sh0ss_442", uu = "_xsOrder12_sh0ss_445", _u = "_smSize1_sh0ss_451", fu = "_smSize2_sh0ss_460", hu = "_smSize3_sh0ss_469", pu = "_smSize4_sh0ss_478", mu = "_smSize5_sh0ss_487", gu = "_smSize6_sh0ss_496", yu = "_smSize7_sh0ss_505", xu = "_smSize8_sh0ss_514", bu = "_smSize9_sh0ss_523", vu = "_smSize10_sh0ss_532", ku = "_smSize11_sh0ss_543", wu = "_smSize12_sh0ss_554", $u = "_smOffset0_sh0ss_559", Nu = "_smOffset1_sh0ss_562", Ou = "_smOffset2_sh0ss_567", Su = "_smOffset3_sh0ss_572", zu = "_smOffset4_sh0ss_577", Du = "_smOffset5_sh0ss_582", Mu = "_smOffset6_sh0ss_587", Cu = "_smOffset7_sh0ss_592", Eu = "_smOffset8_sh0ss_597", Iu = "_smOffset9_sh0ss_602", ju = "_smOffset10_sh0ss_607", Au = "_smOffset11_sh0ss_613", Tu = "_smOffset12_sh0ss_619", Ru = "_smOrderFirst_sh0ss_625", Lu = "_smOrderLast_sh0ss_628", Pu = "_smOrder0_sh0ss_631", Bu = "_smOrder1_sh0ss_634", Fu = "_smOrder2_sh0ss_637", qu = "_smOrder3_sh0ss_640", Hu = "_smOrder4_sh0ss_643", Ku = "_smOrder5_sh0ss_646", Uu = "_smOrder6_sh0ss_649", Wu = "_smOrder7_sh0ss_652", Vu = "_smOrder8_sh0ss_655", Xu = "_smOrder9_sh0ss_658", Gu = "_smOrder10_sh0ss_661", Yu = "_smOrder11_sh0ss_664", Zu = "_smOrder12_sh0ss_667", Ju = "_mdSize1_sh0ss_673", Qu = "_mdSize2_sh0ss_682", e_ = "_mdSize3_sh0ss_691", t_ = "_mdSize4_sh0ss_700", n_ = "_mdSize5_sh0ss_709", s_ = "_mdSize6_sh0ss_718", r_ = "_mdSize7_sh0ss_727", o_ = "_mdSize8_sh0ss_736", l_ = "_mdSize9_sh0ss_745", a_ = "_mdSize10_sh0ss_754", i_ = "_mdSize11_sh0ss_765", c_ = "_mdSize12_sh0ss_776", d_ = "_mdOffset0_sh0ss_781", u_ = "_mdOffset1_sh0ss_784", __ = "_mdOffset2_sh0ss_789", f_ = "_mdOffset3_sh0ss_794", h_ = "_mdOffset4_sh0ss_799", p_ = "_mdOffset5_sh0ss_804", m_ = "_mdOffset6_sh0ss_809", g_ = "_mdOffset7_sh0ss_814", y_ = "_mdOffset8_sh0ss_819", x_ = "_mdOffset9_sh0ss_824", b_ = "_mdOffset10_sh0ss_829", v_ = "_mdOffset11_sh0ss_835", k_ = "_mdOffset12_sh0ss_841", w_ = "_mdOrderFirst_sh0ss_847", $_ = "_mdOrderLast_sh0ss_850", N_ = "_mdOrder0_sh0ss_853", O_ = "_mdOrder1_sh0ss_856", S_ = "_mdOrder2_sh0ss_859", z_ = "_mdOrder3_sh0ss_862", D_ = "_mdOrder4_sh0ss_865", M_ = "_mdOrder5_sh0ss_868", C_ = "_mdOrder6_sh0ss_871", E_ = "_mdOrder7_sh0ss_874", I_ = "_mdOrder8_sh0ss_877", j_ = "_mdOrder9_sh0ss_880", A_ = "_mdOrder10_sh0ss_883", T_ = "_mdOrder11_sh0ss_886", R_ = "_mdOrder12_sh0ss_889", L_ = "_lgSize1_sh0ss_895", P_ = "_lgSize2_sh0ss_904", B_ = "_lgSize3_sh0ss_913", F_ = "_lgSize4_sh0ss_922", q_ = "_lgSize5_sh0ss_931", H_ = "_lgSize6_sh0ss_940", K_ = "_lgSize7_sh0ss_949", U_ = "_lgSize8_sh0ss_958", W_ = "_lgSize9_sh0ss_967", V_ = "_lgSize10_sh0ss_976", X_ = "_lgSize11_sh0ss_987", G_ = "_lgSize12_sh0ss_998", Y_ = "_lgOffset0_sh0ss_1003", Z_ = "_lgOffset1_sh0ss_1006", J_ = "_lgOffset2_sh0ss_1011", Q_ = "_lgOffset3_sh0ss_1016", ef = "_lgOffset4_sh0ss_1021", tf = "_lgOffset5_sh0ss_1026", nf = "_lgOffset6_sh0ss_1031", sf = "_lgOffset7_sh0ss_1036", rf = "_lgOffset8_sh0ss_1041", of = "_lgOffset9_sh0ss_1046", lf = "_lgOffset10_sh0ss_1051", af = "_lgOffset11_sh0ss_1057", cf = "_lgOffset12_sh0ss_1063", df = "_lgOrderFirst_sh0ss_1069", uf = "_lgOrderLast_sh0ss_1072", _f = "_lgOrder0_sh0ss_1075", ff = "_lgOrder1_sh0ss_1078", hf = "_lgOrder2_sh0ss_1081", pf = "_lgOrder3_sh0ss_1084", mf = "_lgOrder4_sh0ss_1087", gf = "_lgOrder5_sh0ss_1090", yf = "_lgOrder6_sh0ss_1093", xf = "_lgOrder7_sh0ss_1096", bf = "_lgOrder8_sh0ss_1099", vf = "_lgOrder9_sh0ss_1102", kf = "_lgOrder10_sh0ss_1105", wf = "_lgOrder11_sh0ss_1108", $f = "_lgOrder12_sh0ss_1111", Nf = "_xlSize1_sh0ss_1117", Of = "_xlSize2_sh0ss_1126", Sf = "_xlSize3_sh0ss_1135", zf = "_xlSize4_sh0ss_1144", Df = "_xlSize5_sh0ss_1153", Mf = "_xlSize6_sh0ss_1162", Cf = "_xlSize7_sh0ss_1171", Ef = "_xlSize8_sh0ss_1180", If = "_xlSize9_sh0ss_1189", jf = "_xlSize10_sh0ss_1198", Af = "_xlSize11_sh0ss_1209", Tf = "_xlSize12_sh0ss_1220", Rf = "_xlOffset0_sh0ss_1225", Lf = "_xlOffset1_sh0ss_1228", Pf = "_xlOffset2_sh0ss_1233", Bf = "_xlOffset3_sh0ss_1238", Ff = "_xlOffset4_sh0ss_1243", qf = "_xlOffset5_sh0ss_1248", Hf = "_xlOffset6_sh0ss_1253", Kf = "_xlOffset7_sh0ss_1258", Uf = "_xlOffset8_sh0ss_1263", Wf = "_xlOffset9_sh0ss_1268", Vf = "_xlOffset10_sh0ss_1273", Xf = "_xlOffset11_sh0ss_1279", Gf = "_xlOffset12_sh0ss_1285", Yf = "_xlOrderFirst_sh0ss_1291", Zf = "_xlOrderLast_sh0ss_1294", Jf = "_xlOrder0_sh0ss_1297", Qf = "_xlOrder1_sh0ss_1300", e1 = "_xlOrder2_sh0ss_1303", t1 = "_xlOrder3_sh0ss_1306", n1 = "_xlOrder4_sh0ss_1309", s1 = "_xlOrder5_sh0ss_1312", r1 = "_xlOrder6_sh0ss_1315", o1 = "_xlOrder7_sh0ss_1318", l1 = "_xlOrder8_sh0ss_1321", a1 = "_xlOrder9_sh0ss_1324", i1 = "_xlOrder10_sh0ss_1327", c1 = "_xlOrder11_sh0ss_1330", d1 = "_xlOrder12_sh0ss_1333", u1 = "_xxSize1_sh0ss_1339", _1 = "_xxSize2_sh0ss_1348", f1 = "_xxSize3_sh0ss_1357", h1 = "_xxSize4_sh0ss_1366", p1 = "_xxSize5_sh0ss_1375", m1 = "_xxSize6_sh0ss_1384", g1 = "_xxSize7_sh0ss_1393", y1 = "_xxSize8_sh0ss_1402", x1 = "_xxSize9_sh0ss_1411", b1 = "_xxSize10_sh0ss_1420", v1 = "_xxSize11_sh0ss_1431", k1 = "_xxSize12_sh0ss_1442", w1 = "_xxOffset0_sh0ss_1447", $1 = "_xxOffset1_sh0ss_1450", N1 = "_xxOffset2_sh0ss_1455", O1 = "_xxOffset3_sh0ss_1460", S1 = "_xxOffset4_sh0ss_1465", z1 = "_xxOffset5_sh0ss_1470", D1 = "_xxOffset6_sh0ss_1475", M1 = "_xxOffset7_sh0ss_1480", C1 = "_xxOffset8_sh0ss_1485", E1 = "_xxOffset9_sh0ss_1490", I1 = "_xxOffset10_sh0ss_1495", j1 = "_xxOffset11_sh0ss_1501", A1 = "_xxOffset12_sh0ss_1507", T1 = "_xxOrderFirst_sh0ss_1513", R1 = "_xxOrderLast_sh0ss_1516", L1 = "_xxOrder0_sh0ss_1519", P1 = "_xxOrder1_sh0ss_1522", B1 = "_xxOrder2_sh0ss_1525", F1 = "_xxOrder3_sh0ss_1528", q1 = "_xxOrder4_sh0ss_1531", H1 = "_xxOrder5_sh0ss_1534", K1 = "_xxOrder6_sh0ss_1537", U1 = "_xxOrder7_sh0ss_1540", W1 = "_xxOrder8_sh0ss_1543", V1 = "_xxOrder9_sh0ss_1546", X1 = "_xxOrder10_sh0ss_1549", G1 = "_xxOrder11_sh0ss_1552", Y1 = "_xxOrder12_sh0ss_1555", qn = {
  column: Pc,
  Size1: Bc,
  Size2: Fc,
  Size3: qc,
  Size4: Hc,
  Size5: Kc,
  Size6: Uc,
  Size7: Wc,
  Size8: Vc,
  Size9: Xc,
  Size10: Gc,
  Size11: Yc,
  Size12: Zc,
  Offset0: Jc,
  Offset1: Qc,
  Offset2: ed,
  Offset3: td,
  Offset4: nd,
  Offset5: sd,
  Offset6: rd,
  Offset7: od,
  Offset8: ld,
  Offset9: ad,
  Offset10: id,
  Offset11: cd,
  Offset12: dd,
  OrderFirst: ud,
  OrderLast: _d,
  Order0: fd,
  Order1: hd,
  Order2: pd,
  Order3: md,
  Order4: gd,
  Order5: yd,
  Order6: xd,
  Order7: bd,
  Order8: vd,
  Order9: kd,
  Order10: wd,
  Order11: $d,
  Order12: Nd,
  xsSize1: Od,
  xsSize2: Sd,
  xsSize3: zd,
  xsSize4: Dd,
  xsSize5: Md,
  xsSize6: Cd,
  xsSize7: Ed,
  xsSize8: Id,
  xsSize9: jd,
  xsSize10: Ad,
  xsSize11: Td,
  xsSize12: Rd,
  xsOffset0: Ld,
  xsOffset1: Pd,
  xsOffset2: Bd,
  xsOffset3: Fd,
  xsOffset4: qd,
  xsOffset5: Hd,
  xsOffset6: Kd,
  xsOffset7: Ud,
  xsOffset8: Wd,
  xsOffset9: Vd,
  xsOffset10: Xd,
  xsOffset11: Gd,
  xsOffset12: Yd,
  xsOrderFirst: Zd,
  xsOrderLast: Jd,
  xsOrder0: Qd,
  xsOrder1: eu,
  xsOrder2: tu,
  xsOrder3: nu,
  xsOrder4: su,
  xsOrder5: ru,
  xsOrder6: ou,
  xsOrder7: lu,
  xsOrder8: au,
  xsOrder9: iu,
  xsOrder10: cu,
  xsOrder11: du,
  xsOrder12: uu,
  smSize1: _u,
  smSize2: fu,
  smSize3: hu,
  smSize4: pu,
  smSize5: mu,
  smSize6: gu,
  smSize7: yu,
  smSize8: xu,
  smSize9: bu,
  smSize10: vu,
  smSize11: ku,
  smSize12: wu,
  smOffset0: $u,
  smOffset1: Nu,
  smOffset2: Ou,
  smOffset3: Su,
  smOffset4: zu,
  smOffset5: Du,
  smOffset6: Mu,
  smOffset7: Cu,
  smOffset8: Eu,
  smOffset9: Iu,
  smOffset10: ju,
  smOffset11: Au,
  smOffset12: Tu,
  smOrderFirst: Ru,
  smOrderLast: Lu,
  smOrder0: Pu,
  smOrder1: Bu,
  smOrder2: Fu,
  smOrder3: qu,
  smOrder4: Hu,
  smOrder5: Ku,
  smOrder6: Uu,
  smOrder7: Wu,
  smOrder8: Vu,
  smOrder9: Xu,
  smOrder10: Gu,
  smOrder11: Yu,
  smOrder12: Zu,
  mdSize1: Ju,
  mdSize2: Qu,
  mdSize3: e_,
  mdSize4: t_,
  mdSize5: n_,
  mdSize6: s_,
  mdSize7: r_,
  mdSize8: o_,
  mdSize9: l_,
  mdSize10: a_,
  mdSize11: i_,
  mdSize12: c_,
  mdOffset0: d_,
  mdOffset1: u_,
  mdOffset2: __,
  mdOffset3: f_,
  mdOffset4: h_,
  mdOffset5: p_,
  mdOffset6: m_,
  mdOffset7: g_,
  mdOffset8: y_,
  mdOffset9: x_,
  mdOffset10: b_,
  mdOffset11: v_,
  mdOffset12: k_,
  mdOrderFirst: w_,
  mdOrderLast: $_,
  mdOrder0: N_,
  mdOrder1: O_,
  mdOrder2: S_,
  mdOrder3: z_,
  mdOrder4: D_,
  mdOrder5: M_,
  mdOrder6: C_,
  mdOrder7: E_,
  mdOrder8: I_,
  mdOrder9: j_,
  mdOrder10: A_,
  mdOrder11: T_,
  mdOrder12: R_,
  lgSize1: L_,
  lgSize2: P_,
  lgSize3: B_,
  lgSize4: F_,
  lgSize5: q_,
  lgSize6: H_,
  lgSize7: K_,
  lgSize8: U_,
  lgSize9: W_,
  lgSize10: V_,
  lgSize11: X_,
  lgSize12: G_,
  lgOffset0: Y_,
  lgOffset1: Z_,
  lgOffset2: J_,
  lgOffset3: Q_,
  lgOffset4: ef,
  lgOffset5: tf,
  lgOffset6: nf,
  lgOffset7: sf,
  lgOffset8: rf,
  lgOffset9: of,
  lgOffset10: lf,
  lgOffset11: af,
  lgOffset12: cf,
  lgOrderFirst: df,
  lgOrderLast: uf,
  lgOrder0: _f,
  lgOrder1: ff,
  lgOrder2: hf,
  lgOrder3: pf,
  lgOrder4: mf,
  lgOrder5: gf,
  lgOrder6: yf,
  lgOrder7: xf,
  lgOrder8: bf,
  lgOrder9: vf,
  lgOrder10: kf,
  lgOrder11: wf,
  lgOrder12: $f,
  xlSize1: Nf,
  xlSize2: Of,
  xlSize3: Sf,
  xlSize4: zf,
  xlSize5: Df,
  xlSize6: Mf,
  xlSize7: Cf,
  xlSize8: Ef,
  xlSize9: If,
  xlSize10: jf,
  xlSize11: Af,
  xlSize12: Tf,
  xlOffset0: Rf,
  xlOffset1: Lf,
  xlOffset2: Pf,
  xlOffset3: Bf,
  xlOffset4: Ff,
  xlOffset5: qf,
  xlOffset6: Hf,
  xlOffset7: Kf,
  xlOffset8: Uf,
  xlOffset9: Wf,
  xlOffset10: Vf,
  xlOffset11: Xf,
  xlOffset12: Gf,
  xlOrderFirst: Yf,
  xlOrderLast: Zf,
  xlOrder0: Jf,
  xlOrder1: Qf,
  xlOrder2: e1,
  xlOrder3: t1,
  xlOrder4: n1,
  xlOrder5: s1,
  xlOrder6: r1,
  xlOrder7: o1,
  xlOrder8: l1,
  xlOrder9: a1,
  xlOrder10: i1,
  xlOrder11: c1,
  xlOrder12: d1,
  xxSize1: u1,
  xxSize2: _1,
  xxSize3: f1,
  xxSize4: h1,
  xxSize5: p1,
  xxSize6: m1,
  xxSize7: g1,
  xxSize8: y1,
  xxSize9: x1,
  xxSize10: b1,
  xxSize11: v1,
  xxSize12: k1,
  xxOffset0: w1,
  xxOffset1: $1,
  xxOffset2: N1,
  xxOffset3: O1,
  xxOffset4: S1,
  xxOffset5: z1,
  xxOffset6: D1,
  xxOffset7: M1,
  xxOffset8: C1,
  xxOffset9: E1,
  xxOffset10: I1,
  xxOffset11: j1,
  xxOffset12: A1,
  xxOrderFirst: T1,
  xxOrderLast: R1,
  xxOrder0: L1,
  xxOrder1: P1,
  xxOrder2: B1,
  xxOrder3: F1,
  xxOrder4: q1,
  xxOrder5: H1,
  xxOrder6: K1,
  xxOrder7: U1,
  xxOrder8: W1,
  xxOrder9: V1,
  xxOrder10: X1,
  xxOrder11: G1,
  xxOrder12: Y1
}, Z1 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function J1(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Q1(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function eh(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function th(e, t, s) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (eh(s, t), `${e}Order${t}`);
}
function iv({ className: e, style: t, ...s }) {
  const o = [qn.column], i = { ...t };
  for (const [C, z, m, M] of Z1) {
    const P = s[z], j = s[m], T = s[M];
    if (P != null) {
      J1(z, P);
      const F = qn[`${C}Size${P}`];
      F && o.push(F);
    }
    if (j != null) {
      Q1(m, j);
      const F = qn[`${C}Offset${j}`];
      F && o.push(F);
    }
    if (T != null) {
      const F = qn[th(C, T, M)];
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
    offsetLg: $,
    sizeXl: k,
    offsetXl: f,
    sizeXx: _,
    offsetXx: u,
    order: x,
    orderXs: N,
    orderSm: g,
    orderMd: S,
    orderLg: y,
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
const nh = "_stack_1yc1g_1", sh = "_gapXs_1yc1g_29", rh = "_gapSm_1yc1g_33", oh = "_gapMd_1yc1g_37", lh = "_gapLg_1yc1g_41", ah = "_gapXl_1yc1g_45", _n = {
  stack: nh,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: sh,
  gapSm: rh,
  gapMd: oh,
  gapLg: lh,
  gapXl: ah,
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
}, ih = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function ch(e) {
  return typeof e != "string" ? null : ih[e] ?? null;
}
function Os(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function cv({
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
  const a = ch(o), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !a ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...r
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        _n.stack,
        _n[`dir-${p}`],
        Os(s) !== "wrap" ? _n[`wrap-${Os(s)}`] : null,
        i != null ? _n[`align-${i}`] : null,
        c != null ? _n[`justify-${c}`] : null,
        a ? _n[a] : null,
        h
      ].filter(Boolean).join(" "),
      style: d,
      ...l
    }
  );
}
const dh = "_layout_fxvw1_1", uh = "_row_fxvw1_7", _h = "_grid_fxvw1_21", fh = "_gridRight_fxvw1_27", hh = "_gridHeader_fxvw1_31", ph = "_gridFooter_fxvw1_36", mh = "_gridContents_fxvw1_41", gh = "_gridBody_fxvw1_45", qt = {
  layout: dh,
  row: uh,
  grid: _h,
  gridRight: fh,
  gridHeader: hh,
  gridFooter: ph,
  gridContents: mh,
  gridBody: gh
}, yh = "_footer_1thaw_1", xh = "_sticky_1thaw_9", Ss = {
  footer: yh,
  sticky: xh
};
function bh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "footer",
    {
      className: [Ss.footer, e ? Ss.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const vh = "_header_wh9gi_1", kh = "_sticky_wh9gi_9", zs = {
  header: vh,
  sticky: kh
};
function wh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "header",
    {
      className: [zs.header, e ? zs.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const $h = "_sidebar_12teb_1", Nh = "_left_12teb_9", Oh = "_right_12teb_13", Sh = "_start_12teb_18", zh = "_end_12teb_22", Dh = "_fullHeight_12teb_28", Mh = "_collapsed_12teb_32", Ch = "_responsive_12teb_40", Eh = "_overlay_12teb_48", Ih = "_mask_12teb_76", sn = {
  sidebar: $h,
  left: Nh,
  right: Oh,
  start: Sh,
  end: zh,
  fullHeight: Dh,
  collapsed: Mh,
  responsive: Ch,
  overlay: Eh,
  mask: Ih
};
function jh({
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
  return ke(() => {
    if (!o || !t || c == null) return;
    const a = (p) => {
      p.key === "Escape" && c();
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [o, t, c]), /* @__PURE__ */ O(De, { children: [
    o && t ? /* @__PURE__ */ n(
      "div",
      {
        className: `${sn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: c
      }
    ) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          sn.sidebar,
          sn[e],
          t ? null : sn.collapsed,
          s ? sn.responsive : null,
          o ? [sn.overlay, "se-sidebar--overlay"] : null,
          i ? sn.fullHeight : null,
          h
        ].flat().filter(Boolean).join(" "),
        ...l,
        children: r
      }
    )
  ] });
}
function dv(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(De, { children: e.children });
  const { className: t, children: s, ...o } = e, i = [], c = [], h = [], r = [], l = [], a = [];
  sr.forEach(s, (v) => {
    if (!Lt(v)) {
      h.push(v);
      return;
    }
    if (v.type === wh)
      i.push(v);
    else if (v.type === bh)
      c.push(v);
    else if (v.type === jh) {
      const b = v, $ = b.props.position;
      a.push(b), ($ === "right" || $ === "end" ? l : r).push(b);
    } else
      h.push(v);
  });
  const p = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, d = p != null && (p.props.position === "right" || p.props.position === "end");
  if (p) {
    const v = d ? l : r;
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          qt.layout,
          qt.grid,
          d ? qt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...o,
        children: [
          i.length > 0 && /* @__PURE__ */ n("div", { className: qt.gridHeader, children: i }),
          /* @__PURE__ */ O("div", { className: qt.gridContents, children: [
            v,
            /* @__PURE__ */ n("div", { className: qt.gridBody, children: h })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: qt.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [qt.layout, t].filter(Boolean).join(" "),
      ...o,
      children: [
        i,
        /* @__PURE__ */ O("div", { className: qt.row, children: [
          r,
          h,
          l
        ] }),
        c
      ]
    }
  );
}
const Ah = "_body_akga4_1", Th = "_bare_akga4_10", Ds = {
  body: Ah,
  bare: Th
};
function uv({
  as: e = "main",
  padded: t = !0,
  className: s,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ n(
    e,
    {
      className: [Ds.body, t ? null : Ds.bare, s].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}
const Rh = "_toggle_1qjb4_1", Lh = {
  toggle: Rh
};
function _v({
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
      className: [Lh.toggle, s].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(Se, { name: e, size: 20 })
    }
  );
}
const Ph = "_track_14127_1", Bh = "_bar_14127_31", Fh = "_primary_14127_39", qh = "_success_14127_43", Hh = "_warning_14127_47", Kh = "_danger_14127_51", Uh = "_indeterminate_14127_149", Wh = "_circular_14127_163", Vh = "_fill_14127_203", mt = {
  track: Ph,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Bh,
  primary: Fh,
  success: qh,
  warning: Hh,
  danger: Kh,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Uh,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Wh,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Vh,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function fv({
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
    const b = typeof h == "string", $ = 2, k = 10.5, f = 2 * Math.PI * k, _ = f * (i ? 0.75 : 1), u = i ? 0 : f * (1 - d / 100);
    return /* @__PURE__ */ O(
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
function hv(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function Xh(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Js(e) {
  const [t, s] = X(() => Xh(e));
  return ke(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    s(o.matches);
    const i = (c) => s(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const Gh = "_wrapper_1qmsj_1", Yh = {
  wrapper: Gh
}, Qs = "dx-theme";
function Zh(e) {
  const t = e === void 0 ? Qs : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(t);
      return s === "light" || s === "dark" || s === "system" ? s : void 0;
    } catch {
      return;
    }
}
function Jh(e, t) {
  const s = e === void 0 ? Qs : e;
  if (!(s === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(s, t);
    } catch {
    }
}
function pv({
  value: e,
  defaultValue: t,
  storageKey: s,
  onChange: o,
  label: i = "Dark mode",
  className: c
}) {
  const h = Js("(prefers-color-scheme: dark)"), [r, l] = X(void 0), a = e ?? r ?? Zh(s) ?? t ?? "system", p = a === "system" ? h ? "dark" : "light" : a;
  ke(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const d = (v) => {
    const b = v.target.checked ? "dark" : "light";
    e === void 0 && l(b), Jh(s, b), o?.(b);
  };
  return /* @__PURE__ */ O("label", { className: [Yh.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ n(ri, { checked: p === "dark", onChange: d })
  ] });
}
const Qh = "_avatar_yj2hz_1", ep = "_xs_yj2hz_12", tp = "_sm_yj2hz_18", np = "_md_yj2hz_24", sp = "_lg_yj2hz_30", rp = "_xl_yj2hz_36", op = "_initials_yj2hz_42", lp = "_image_yj2hz_57", ap = "_status_yj2hz_64", ip = "_online_yj2hz_84", cp = "_offline_yj2hz_88", dp = "_away_yj2hz_92", fn = {
  avatar: Qh,
  xs: ep,
  sm: tp,
  md: np,
  lg: sp,
  xl: rp,
  initials: op,
  image: lp,
  status: ap,
  online: ip,
  offline: cp,
  away: dp
}, Yn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function up(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function _p(e) {
  let t = 0;
  for (let s = 0; s < e.length; s += 1)
    t = t * 31 + e.charCodeAt(s) >>> 0;
  return Yn[t % Yn.length] ?? Yn[0];
}
function mv({
  name: e,
  src: t,
  alt: s,
  size: o = "md",
  status: i,
  className: c
}) {
  const h = $e(() => e ? up(e) : "?", [e]), r = $e(() => e ? _p(e) : Yn[0], [e]), l = t != null && s === "", a = s ?? e ?? "avatar", p = i ? `${a}, ${i}` : a, d = t ? /* @__PURE__ */ n(
    "img",
    {
      className: fn.image,
      src: t,
      alt: l ? "" : i ? p : a
    }
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: fn.initials,
      style: { background: r },
      children: h
    }
  );
  return /* @__PURE__ */ O(
    "span",
    {
      className: [
        fn.avatar,
        fn[o],
        i ? fn[i] : null,
        c
      ].filter(Boolean).join(" "),
      role: t ? void 0 : "img",
      "aria-label": t ? void 0 : p,
      children: [
        d,
        i && /* @__PURE__ */ n("span", { className: fn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const fp = "_root_80088_1", hp = "_left_80088_6", pp = "_right_80088_7", mp = "_panel_80088_12", gp = "_bottom_80088_20", yp = "_tabList_80088_24", xp = "_underline_80088_53", bp = "_pills_80088_72", vp = "_tab_80088_24", kp = "_active_80088_113", wp = "_disabled_80088_139", Ht = {
  root: fp,
  left: hp,
  right: pp,
  panel: mp,
  bottom: gp,
  tabList: yp,
  underline: xp,
  pills: bp,
  tab: vp,
  active: kp,
  disabled: wp
};
function gv({
  items: e,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: h
}) {
  const r = qe(), l = le(null), [a, p] = X(
    s ?? e[0]?.key ?? ""
  ), d = t ?? a, v = c === "left" || c === "right", b = (f) => {
    p(f), o?.(f);
  }, $ = (f) => {
    const _ = e.filter((N) => !N.disabled), u = _.findIndex((N) => N.key === d);
    let x = -1;
    f.key === "ArrowRight" || v && f.key === "ArrowDown" ? x = (u + 1) % _.length : f.key === "ArrowLeft" || v && f.key === "ArrowUp" ? x = (u - 1 + _.length) % _.length : f.key === "Home" ? x = 0 : f.key === "End" && (x = _.length - 1), x >= 0 && (f.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[x]?.key ?? "")}"]`
    )?.focus(), b(_[x]?.key ?? ""));
  }, k = e.find((f) => f.key === d);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Ht.root, Ht[c], h].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Ht.tabList, Ht[i], Ht[c]].filter(Boolean).join(" "),
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
                    Ht.tab,
                    _ ? Ht.active : null,
                    f.disabled ? Ht.disabled : null
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
            className: Ht.panel,
            children: k.content
          }
        )
      ]
    }
  );
}
const $p = "_root_18dnp_1", Np = "_item_18dnp_9", Op = "_heading_18dnp_13", Sp = "_trigger_18dnp_17", zp = "_disabled_18dnp_34", Dp = "_title_18dnp_48", Mp = "_chevron_18dnp_52", Cp = "_open_18dnp_59", Ep = "_content_18dnp_63", Kt = {
  root: $p,
  item: Np,
  heading: Op,
  trigger: Sp,
  disabled: zp,
  title: Dp,
  chevron: Mp,
  open: Cp,
  content: Ep
};
function yv({
  items: e,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const h = qe(), [r, l] = X(
    o ?? []
  ), a = s ?? r, p = (d) => {
    const v = a.includes(d) ? a.filter((b) => b !== d) : t ? [...a, d] : [d];
    l(v), i?.(v);
  };
  return /* @__PURE__ */ n("div", { className: [Kt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const v = a.includes(d.key), b = `${h}-panel-${d.key}`, $ = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: Kt.item, children: [
      /* @__PURE__ */ n("h3", { className: Kt.heading, children: /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          id: $,
          "aria-expanded": v,
          "aria-controls": b,
          disabled: d.disabled,
          className: [
            Kt.trigger,
            d.disabled ? Kt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: Kt.title, children: d.title }),
            /* @__PURE__ */ n(
              "span",
              {
                className: [Kt.chevron, v ? Kt.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 12 })
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
          className: Kt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const Ip = "_textarea_1mu8y_1", jp = "_invalid_1mu8y_27", Ap = "_xs_1mu8y_34", Tp = "_sm_1mu8y_39", Rp = "_md_1mu8y_44", Lp = "_lg_1mu8y_49", Pp = "_xl_1mu8y_54", Hn = {
  textarea: Ip,
  invalid: jp,
  xs: Ap,
  sm: Tp,
  md: Rp,
  lg: Lp,
  xl: Pp,
  "resize-none": "_resize-none_1mu8y_59",
  "resize-vertical": "_resize-vertical_1mu8y_63",
  "resize-horizontal": "_resize-horizontal_1mu8y_67",
  "resize-both": "_resize-both_1mu8y_71"
}, xv = We(
  function({ size: t = "md", resize: s = "none", invalid: o = !1, className: i, ...c }, h) {
    return /* @__PURE__ */ n(
      "textarea",
      {
        ref: h,
        className: [
          Hn.textarea,
          Hn[t],
          Hn[`resize-${s}`],
          o ? Hn.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": o || void 0,
        ...c
      }
    );
  }
), Bp = "_typography_1ehxz_1", Fp = "_h1_1ehxz_36", qp = "_h2_1ehxz_42", Hp = "_h3_1ehxz_48", Kp = "_h4_1ehxz_54", Up = "_h5_1ehxz_60", Wp = "_h6_1ehxz_66", Vp = "_button_1ehxz_96", Xp = "_caption_1ehxz_103", Gp = "_overline_1ehxz_109", ts = {
  typography: Bp,
  "display-1": "_display-1_1ehxz_5",
  "display-2": "_display-2_1ehxz_10",
  "display-3": "_display-3_1ehxz_15",
  "display-4": "_display-4_1ehxz_20",
  "display-5": "_display-5_1ehxz_25",
  "display-6": "_display-6_1ehxz_30",
  h1: Fp,
  h2: qp,
  h3: Hp,
  h4: Kp,
  h5: Up,
  h6: Wp,
  "subtitle-1": "_subtitle-1_1ehxz_72",
  "subtitle-2": "_subtitle-2_1ehxz_78",
  "body-1": "_body-1_1ehxz_84",
  "body-2": "_body-2_1ehxz_89",
  button: Vp,
  caption: Xp,
  overline: Gp,
  "align-left": "_align-left_1ehxz_118",
  "align-center": "_align-center_1ehxz_122",
  "align-right": "_align-right_1ehxz_126",
  "align-justify": "_align-justify_1ehxz_130"
}, Yp = {
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
}, Zp = {
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
}, Jp = {
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
}, Qp = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, bv = We(function({
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
  const p = s === "Auto" ? Yp[t] : Jp[s];
  return /* @__PURE__ */ n(
    p,
    {
      ref: a,
      className: [
        ts.typography,
        ts[Zp[t]],
        o ? ts[Qp[o]] : null,
        h
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? r
    }
  );
}), em = "_root_rjoph_1", tm = "_trigger_rjoph_9", nm = "_invalid_rjoph_40", sm = "_placeholder_rjoph_47", rm = "_label_rjoph_54", om = "_chevron_rjoph_60", lm = "_chevronOpen_rjoph_70", am = "_menu_rjoph_74", im = "_option_rjoph_89", cm = "_disabled_rjoph_100", dm = "_active_rjoph_104", um = "_selected_rjoph_105", _m = "_header_rjoph_115", fm = "_xs_rjoph_122", hm = "_sm_rjoph_128", pm = "_md_rjoph_134", mm = "_lg_rjoph_140", gm = "_xl_rjoph_146", it = {
  root: em,
  trigger: tm,
  invalid: nm,
  placeholder: sm,
  label: rm,
  chevron: om,
  chevronOpen: lm,
  menu: am,
  option: im,
  disabled: cm,
  active: dm,
  selected: um,
  header: _m,
  xs: fm,
  sm: hm,
  md: pm,
  lg: mm,
  xl: gm
}, ym = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function vv({
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
  const p = qe(), d = `${p}-listbox`, v = le(null), b = le(null), [$, k] = X(
    s
  ), [f, _] = X(!1), u = t ?? $, x = e.map(
    (m, M) => m.label === "" || m.disabled ? -1 : M
  ).filter((m) => m >= 0), N = e.findIndex(
    (m) => m.value === u
  ), [g, S] = X(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), y = H(() => {
    if (r) return;
    const m = N >= 0 && x.includes(N) ? N : x[0];
    S(m ?? -1), _(!0);
  }, [r, N, x]), w = H(() => {
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
    if (x.length === 0) return;
    const M = x.includes(g) ? x.indexOf(g) : 0, P = x[(M + m + x.length) % x.length];
    P != null && S(P);
  }, C = (m) => {
    if (!f) {
      m.key === "ArrowDown" && (m.preventDefault(), y());
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
        m.preventDefault(), x[0] != null && S(x[0]);
        break;
      case "End":
        m.preventDefault(), x[x.length - 1] != null && S(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        m.preventDefault(), g >= 0 && e[g] && x.includes(g) && E(e[g]?.value ?? "");
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
      className: [it.root, l].filter(Boolean).join(" "),
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
            onClick: () => f ? _(!1) : y(),
            ...a,
            children: [
              /* @__PURE__ */ n("span", { className: z ? it.label : it.placeholder, children: z ? z.label : i }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [it.chevron, f ? it.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: ym },
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
const xm = "_root_9y6ty_1", bm = "_wrap_9y6ty_9", vm = "_input_9y6ty_26", km = "_invalid_9y6ty_31", wm = "_clear_9y6ty_58", $m = "_menu_9y6ty_83", Nm = "_option_9y6ty_98", Om = "_disabled_9y6ty_109", Sm = "_active_9y6ty_113", zm = "_empty_9y6ty_123", Dm = "_xs_9y6ty_129", Mm = "_sm_9y6ty_136", Cm = "_md_9y6ty_143", Em = "_lg_9y6ty_150", Im = "_xl_9y6ty_157", zt = {
  root: xm,
  wrap: bm,
  input: vm,
  invalid: km,
  clear: wm,
  menu: $m,
  option: Nm,
  disabled: Om,
  active: Sm,
  empty: zm,
  xs: Dm,
  sm: Mm,
  md: Cm,
  lg: Em,
  xl: Im
}, jm = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function kv({
  options: e = [],
  value: t,
  defaultValue: s = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: h = "md",
  invalid: r = !1,
  disabled: l = !1,
  filter: a = jm,
  className: p,
  ...d
}) {
  const v = qe(), b = `${v}-listbox`, $ = le(null), k = le(null), [f, _] = X(s), [u, x] = X(!1), N = t ?? f, g = $e(
    () => N.trim() === "" ? [...e] : e.filter((T) => a(T, N)),
    [e, N, a]
  ), S = g.map((T, F) => T.disabled ? -1 : F).filter((T) => T >= 0), [y, w] = X(-1), E = (T) => {
    _(T), o?.(T);
  }, I = (T) => {
    E(T.label), i?.(T.value, T), x(!1);
  }, C = (T) => {
    if (S.length === 0) return;
    const F = S.includes(y) ? S.indexOf(y) : T === 1 ? -1 : 0, V = S[(F + T + S.length) % S.length];
    V != null && w(V);
  }, z = (T) => {
    l || (E(T.target.value), x(!0), w(-1));
  }, m = () => {
    l || N !== "" && x(!0);
  }, M = (T) => {
    $.current && !$.current.contains(T.relatedTarget) && x(!1);
  }, P = (T) => {
    if (!l)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), u ? C(1) : (x(!0), w(S[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), u && C(-1);
          break;
        case "Enter":
          T.preventDefault(), u && y >= 0 && g[y] && I(g[y]);
          break;
        case "Escape":
          T.preventDefault(), x(!1);
          break;
        case "Tab":
          u && y >= 0 && g[y] && I(g[y]), x(!1);
          break;
      }
  }, j = () => {
    E(""), w(-1), x(!0), k.current?.focus();
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
                  "aria-activedescendant": u && y >= 0 ? `${v}-option-${y}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: l,
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
              N !== "" && !l && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: zt.clear,
                  "aria-label": "Clear",
                  onClick: j,
                  children: /* @__PURE__ */ n(Se, { name: "close", size: "sm" })
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
              F === y ? zt.active : null,
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
const Am = "_box_julie_1", Tm = "_option_julie_12", Rm = "_disabled_julie_23", Lm = "_selected_julie_27", Pm = "_active_julie_33", Dn = {
  box: Am,
  option: Tm,
  disabled: Rm,
  selected: Lm,
  active: Pm
};
function wv({
  options: e = [],
  value: t,
  defaultValue: s,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: h,
  ...r
}) {
  const l = qe(), [a, p] = X(() => {
    const g = s;
    return g == null ? [] : Array.isArray(g) ? [...g] : [g];
  }), d = t == null ? a : Array.isArray(t) ? t : [t], v = e.findIndex((g) => !g.disabled), [b, $] = X(
    () => v >= 0 ? v : 0
  ), k = le(""), f = le(null), _ = (g) => {
    p(g), i?.(o ? g : g[0] ?? "");
  }, u = e.map((g, S) => g.disabled ? -1 : S).filter((g) => g >= 0), x = (g) => {
    const S = e[g];
    if (!(!S || S.disabled))
      if ($(g), o) {
        const y = d.includes(S.value) ? d.filter((w) => w !== S.value) : [...d, S.value];
        _(y);
      } else
        _([S.value]);
  }, N = (g) => {
    if (u.length === 0) return;
    const S = u.includes(b) ? b : u[0];
    let y = -1;
    if (g.key === "ArrowDown")
      y = u[(u.indexOf(S) + 1) % u.length];
    else if (g.key === "ArrowUp")
      y = u[(u.indexOf(S) - 1 + u.length) % u.length];
    else if (g.key === "Home")
      y = u[0];
    else if (g.key === "End")
      y = u[u.length - 1];
    else if (g.key === "Enter" || g.key === " ") {
      g.preventDefault(), x(S);
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
    y >= 0 && (g.preventDefault(), $(y), o || _([e[y]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[b] ? `${l}-option-${b}` : void 0,
      style: h,
      className: [Dn.box, c].filter(Boolean).join(" "),
      onKeyDown: N,
      ...r,
      children: e.map((g, S) => {
        const y = d.includes(g.value), w = S === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${l}-option-${S}`,
            role: "option",
            "aria-selected": y,
            "aria-disabled": g.disabled || void 0,
            className: [
              Dn.option,
              y ? Dn.selected : null,
              w ? Dn.active : null,
              g.disabled ? Dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(S),
            children: g.label
          },
          g.value
        );
      })
    }
  );
}
const Bm = "_group_6i3u3_1", Fm = "_legend_6i3u3_8", qm = "_list_6i3u3_16", Hm = "_item_6i3u3_25", Km = "_disabled_6i3u3_32", Um = "_label_6i3u3_37", Wm = "_checkbox_6i3u3_48", rn = {
  group: Bm,
  legend: Fm,
  list: qm,
  item: Hm,
  disabled: Km,
  label: Um,
  checkbox: Wm
};
function $v({
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
    const b = v ? [...a, d] : a.filter(($) => $ !== d);
    l(b), o?.(b);
  };
  return /* @__PURE__ */ O("fieldset", { className: [rn.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: rn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: rn.list, children: e.map((d) => {
      const v = a.includes(d.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [rn.item, d.disabled ? rn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: rn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: rn.checkbox,
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
const Vm = "_group_1mqxc_1", Xm = "_legend_1mqxc_8", Gm = "_list_1mqxc_16", Ym = "_item_1mqxc_25", Zm = "_disabled_1mqxc_32", Jm = "_label_1mqxc_37", Qm = "_radio_1mqxc_48", on = {
  group: Vm,
  legend: Xm,
  list: Gm,
  item: Ym,
  disabled: Zm,
  label: Jm,
  radio: Qm
};
function Nv({
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
  return /* @__PURE__ */ O("fieldset", { className: [on.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: on.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: on.list, children: e.map((d) => {
      const v = d.value === a;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [on.item, d.disabled ? on.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: on.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: on.radio,
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
const eg = "_bar_d59jw_1", tg = "_vertical_d59jw_12", ng = "_option_d59jw_17", sg = "_selected_d59jw_40", rg = "_sm_d59jw_56", og = "_md_d59jw_62", lg = "_lg_d59jw_68", hn = {
  bar: eg,
  vertical: tg,
  option: ng,
  selected: sg,
  sm: rg,
  md: og,
  lg
};
function Ms(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ov(e) {
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
  } = e, p = i ?? !1, [d, v] = X(o ?? (p ? [] : t[0]?.value)), b = s ?? d, $ = i === !0 || i === void 0 && Array.isArray(b), k = (_) => {
    if (!$) {
      v(_), h?.(_);
      return;
    }
    const u = Ms(b), x = u.includes(_) ? u.filter((N) => N !== _) : [...u, _];
    v(x), h?.(x);
  }, f = (_) => $ ? Ms(b).includes(_) : b === _;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        hn.bar,
        hn[r],
        c === "vertical" ? hn.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...a,
      children: t.map((_) => {
        const u = f(_.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: _.disabled,
            className: [
              hn.option,
              u ? hn.selected : null,
              _.disabled ? hn.disabled : null
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
const ag = "_toggle_7nfjx_1", ig = "_pressed_7nfjx_29", cg = "_sm_7nfjx_41", dg = "_md_7nfjx_47", ug = "_lg_7nfjx_53", _g = "_fullWidth_7nfjx_59", Kn = {
  toggle: ag,
  pressed: ig,
  sm: cg,
  md: dg,
  lg: ug,
  fullWidth: _g
}, Sv = We(
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
      const $ = !v;
      d($), o?.($);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: a,
        type: r,
        "aria-pressed": v,
        className: [
          Kn.toggle,
          Kn[i],
          v ? Kn.pressed : null,
          c ? Kn.fullWidth : null,
          h
        ].filter(Boolean).join(" "),
        onClick: b,
        ...l
      }
    );
  }
), fg = "_root_fc1sj_1", hg = "_action_fc1sj_328", pg = "_filled_fc1sj_348", mg = "_caret_fc1sj_352", gg = "_flat_fc1sj_373", yg = "_outlined_fc1sj_381", xg = "_text_fc1sj_390", bg = "_sm_fc1sj_496", vg = "_md_fc1sj_508", kg = "_lg_fc1sj_520", wg = "_menu_fc1sj_532", $g = "_item_fc1sj_545", Ng = "_disabled_fc1sj_566", Og = "_active_fc1sj_570", Sg = "_danger_fc1sj_579", kt = {
  root: fg,
  "style-primary": "_style-primary_fc1sj_11",
  "style-secondary": "_style-secondary_fc1sj_25",
  "style-base": "_style-base_fc1sj_35",
  "style-light": "_style-light_fc1sj_45",
  "style-dark": "_style-dark_fc1sj_55",
  "style-info": "_style-info_fc1sj_69",
  "style-success": "_style-success_fc1sj_83",
  "style-warning": "_style-warning_fc1sj_97",
  "style-danger": "_style-danger_fc1sj_111",
  action: hg,
  filled: pg,
  caret: mg,
  flat: gg,
  outlined: yg,
  text: xg,
  "shade-lighter": "_shade-lighter_fc1sj_407",
  "shade-light": "_shade-light_fc1sj_407",
  "shade-dark": "_shade-dark_fc1sj_417",
  "shade-darker": "_shade-darker_fc1sj_421",
  sm: bg,
  md: vg,
  lg: kg,
  menu: wg,
  item: $g,
  disabled: Ng,
  active: Og,
  danger: Sg
};
function zv({
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
  const d = `${qe()}-menu`, v = le(null), b = le(null), $ = le([]), [k, f] = X(!1), [_, u] = X(-1), x = $e(
    () => s.map((C, z) => C.disabled ? -1 : z).filter((C) => C >= 0),
    [s]
  ), N = H(() => {
    r || (u(x[0] ?? -1), f(!0));
  }, [r, x]), g = H(() => {
    f(!1), b.current?.focus();
  }, []);
  ke(() => {
    if (!k) return;
    const C = (z) => {
      v.current && !v.current.contains(z.target) && f(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [k]);
  const S = le(k);
  ke(() => {
    const C = S.current;
    if (S.current = k, !k || C) return;
    const z = x.includes(_) ? _ : x[0] ?? -1;
    z >= 0 && $.current[z]?.focus();
  }, [k, _, x]);
  const y = (C) => {
    const z = s[C];
    !z || z.disabled || (z.onClick?.(), f(!1), b.current?.focus());
  }, w = (C) => {
    if (x.length === 0) return;
    const z = x.includes(_) ? x.indexOf(_) : C === 1 ? -1 : 0, m = x[(z + C + x.length) % x.length];
    m != null && (u(m), $.current[m]?.focus());
  }, E = (C) => {
    const z = C === "first" ? x[0] : x[x.length - 1];
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
        kt[_s(i, "filled")],
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
            onClick: () => k ? f(!1) : N(),
            onKeyDown: (C) => {
              !k && C.key === "ArrowDown" && (C.preventDefault(), N());
            },
            children: /* @__PURE__ */ n(Se, { name: "chevron-down" })
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
                onClick: () => y(z),
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
const zg = "_wrapper_o4h13_1", Dg = "_input_o4h13_8", Mg = "_invalid_o4h13_38", Cg = "_toggle_o4h13_45", Eg = "_xs_o4h13_80", Ig = "_sm_o4h13_86", jg = "_md_o4h13_92", Ag = "_lg_o4h13_98", Tg = "_xl_o4h13_104", Mn = {
  wrapper: zg,
  input: Dg,
  invalid: Mg,
  toggle: Cg,
  xs: Eg,
  sm: Ig,
  md: jg,
  lg: Ag,
  xl: Tg
}, Dv = We(
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
    return /* @__PURE__ */ O("div", { className: Mn.wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: l,
          type: a ? "text" : "password",
          disabled: i,
          className: [
            Mn.input,
            Mn[t],
            s ? Mn.invalid : null,
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
          className: Mn.toggle,
          "aria-pressed": a,
          "aria-label": a ? h : c,
          disabled: i,
          onClick: () => p((d) => !d),
          children: /* @__PURE__ */ n(Se, { name: a ? "eye-off" : "eye", size: 16 })
        }
      )
    ] });
  }
), Rg = "_mask_1tyy7_1", Lg = "_invalid_1tyy7_31", Pg = "_xs_1tyy7_38", Bg = "_sm_1tyy7_44", Fg = "_md_1tyy7_50", qg = "_lg_1tyy7_56", Hg = "_xl_1tyy7_62", ns = {
  mask: Rg,
  invalid: Lg,
  xs: Pg,
  sm: Bg,
  md: Fg,
  lg: qg,
  xl: Hg
};
function Cs(e, t) {
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
const Mv = We(function({
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
  const [d, v] = X(c ?? ""), b = i !== void 0, $ = b ? i ?? "" : d, k = (u) => {
    const x = Cs(u, o);
    return b || v(x), h?.(x), x;
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
          const x = u.currentTarget.selectionStart ?? $.length, N = $[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            u.preventDefault();
            const g = $.replace(/\D/g, "");
            k(Cs(g.slice(0, -1), o));
          }
        }
        l?.(u);
      },
      className: [
        ns.mask,
        ns[t],
        s ? ns.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), Kg = "_wrapper_1kqw7_1", Ug = "_input_1kqw7_8", Wg = "_invalid_1kqw7_38", Vg = "_button_1kqw7_45", Xg = "_up_1kqw7_77", Gg = "_down_1kqw7_82", Yg = "_xs_1kqw7_87", Zg = "_sm_1kqw7_93", Jg = "_md_1kqw7_99", Qg = "_lg_1kqw7_105", e0 = "_xl_1kqw7_111", Zt = {
  wrapper: Kg,
  input: Ug,
  invalid: Wg,
  button: Vg,
  up: Xg,
  down: Gg,
  xs: Yg,
  sm: Zg,
  md: Jg,
  lg: Qg,
  xl: e0
};
function ls(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function t0(e) {
  let t = "", s = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !s ? (s = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function er(e, t, s) {
  return Math.min(s ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function n0(e, t, s) {
  return t === void 0 ? e : t + Math.round((e - t) / s) * s;
}
function s0(e, t, s, o, i) {
  const h = ls(e) ?? s ?? 0;
  let r;
  return s === void 0 ? r = h + t * i : t > 0 ? r = s + Math.ceil((h - s + 1e-9) / i) * i : r = s + Math.floor((h - s - 1e-9) / i) * i, er(r, s, o);
}
const Cv = We(
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
    onKeyDown: $,
    ...k
  }, f) {
    const [_, u] = X(
      h != null ? String(h) : ""
    ), x = c !== void 0, N = x ? c == null ? "" : String(c) : _, g = (C) => {
      x || u(C), r?.(ls(C));
    }, S = (C) => {
      x || u(String(C)), r?.(C);
    }, y = (C) => {
      i || S(s0(N, C, l, a, p));
    }, w = (C) => {
      g(t0(C.target.value));
    }, E = (C) => {
      C.key === "ArrowUp" ? (C.preventDefault(), y(1)) : C.key === "ArrowDown" && (C.preventDefault(), y(-1)), $?.(C);
    }, I = (C) => {
      const z = ls(N);
      z === null ? (x || u(""), r?.(null)) : S(er(n0(z, l, p), l, a)), b?.(C);
    };
    return /* @__PURE__ */ O("div", { className: Zt.wrapper, children: [
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
            Zt.input,
            Zt[t],
            s ? Zt.invalid : null,
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
          className: [Zt.button, Zt.up].join(" "),
          "aria-label": d,
          disabled: i,
          onClick: () => y(1),
          children: /* @__PURE__ */ n(Se, { name: "chevron-up", size: 14 })
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: [Zt.button, Zt.down].join(" "),
          "aria-label": v,
          disabled: i,
          onClick: () => y(-1),
          children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 14 })
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
}, r0 = [
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
function o0({ r: e, g: t, b: s }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(s)}`;
}
function l0({ r: e, g: t, b: s }) {
  const o = e / 255, i = t / 255, c = s / 255, h = Math.max(o, i, c), r = Math.min(o, i, c), l = h - r;
  let a = 0;
  return l !== 0 && (h === o ? a = (i - c) / l % 6 : h === i ? a = (c - o) / l + 2 : a = (o - i) / l + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: h === 0 ? 0 : l / h,
    v: h
  };
}
function pn({ h: e, s: t, v: s }) {
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
function a0(e) {
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
function Es({ r: e, g: t, b: s, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${s})` : `rgba(${e}, ${t}, ${s}, ${Math.round(o * 100) / 100})`;
}
const Ev = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: s = !0,
  showPalette: o = !0,
  palette: i = r0,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: r = !1,
  invalid: l = !1,
  placeholder: a = "",
  size: p = "md",
  tabIndex: d = 0,
  className: v,
  onChange: b,
  onValueChange: $,
  onOpen: k,
  onClose: f
}) => {
  const _ = le(null), u = le(null), x = le(null), N = le(null), g = le(null), S = qe(), y = le(null), w = $e(
    () => a0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = X(!1), [C, z] = X(null), m = C ?? w, M = $e(() => l0(m), [m]), P = H(
    (W) => {
      const D = Es(W);
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
      const q = x.current;
      if (!q) return M;
      const ne = q.getBoundingClientRect(), _e = yt((W - ne.left) / ne.width, 0, 1), se = yt(1 - (D - ne.top) / ne.height, 0, 1);
      return { h: M.h, s: _e, v: se };
    },
    [M]
  ), Q = H(
    (W, D) => {
      if (!D) return 0;
      const q = D.getBoundingClientRect();
      return yt((W - q.left) / q.width, 0, 1);
    },
    []
  ), K = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), y.current = "sat";
    const D = Z(W.clientX, W.clientY);
    j({ ...pn(D), a: m.a }, !0);
  }, te = (W) => {
    if (y.current !== "sat") return;
    W.preventDefault();
    const D = Z(W.clientX, W.clientY);
    j({ ...pn(D), a: m.a }, !0);
  }, oe = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), y.current = "hue";
    const D = Q(W.clientX, N.current);
    j(
      { ...pn({ ...M, h: D * 360 }), a: m.a },
      !0
    );
  }, ee = (W) => {
    if (y.current !== "hue") return;
    W.preventDefault();
    const D = Q(W.clientX, N.current);
    j(
      { ...pn({ ...M, h: D * 360 }), a: m.a },
      !0
    );
  }, L = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), y.current = "alpha";
    const D = Q(W.clientX, g.current);
    j({ ...m, a: D }, !0);
  }, ie = (W) => {
    if (y.current !== "alpha") return;
    W.preventDefault();
    const D = Q(W.clientX, g.current);
    j({ ...m, a: D }, !0);
  }, Y = () => {
    y.current = null;
  }, de = H(
    (W, D) => {
      const q = {
        h: M.h,
        s: yt(M.s + W, 0, 1),
        v: yt(M.v + D, 0, 1)
      };
      j({ ...pn(q), a: m.a }, !0);
    },
    [M, m.a, j]
  ), ae = H(
    (W) => {
      const D = (M.h + W + 360) % 360;
      j({ ...pn({ ...M, h: D }), a: m.a }, !0);
    },
    [M, m.a, j]
  ), xe = H(
    (W) => {
      j({ ...m, a: yt(m.a + W, 0, 1) }, !0);
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
        W.preventDefault(), D === "hue" ? ae(-6) : xe(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), D === "hue" ? ae(6) : xe(0.05);
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
      const se = q.includes(".") ? yt(ne, 0, 1) : yt(ne / 100, 0, 1);
      j({ ...m, a: se }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    j(
      { ...m, [W]: yt(ne, 0, _e[W]) },
      !0
    );
  }, Ve = () => {
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
  const ye = p === "xs" ? Oe["dx-colorpicker-trigger-xs"] : p === "sm" ? Oe["dx-colorpicker-trigger-sm"] : p === "lg" ? Oe["dx-colorpicker-trigger-lg"] : p === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], Ze = Es(m), Xe = o0(m), Le = { x: M.s * 100, y: (1 - M.v) * 100 }, tt = M.h / 360 * 100, Qe = m.a * 100, et = /* @__PURE__ */ O("div", { className: Oe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: x,
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
            value: Xe,
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
        onClick: Ve,
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
        l ? Oe["dx-colorpicker-invalid"] : null,
        v
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: u,
            type: "button",
            className: [Oe["dx-colorpicker-trigger"], ye].join(" "),
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
              h && /* @__PURE__ */ n("span", { className: Oe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 14 }) })
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
}, i0 = 42;
function xt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${xt(e.month)}-${xt(e.day)}`;
}
function c0(e, t) {
  const s = ht(e);
  return t ? `${s} ${xt(e.hour)}:${xt(e.minute)}:${xt(e.second)}` : s;
}
function is(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const s = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const l = new Date(s, o - 1, i, c, h, r);
  return l.getFullYear() !== s || l.getMonth() !== o - 1 || l.getDate() !== i ? null : { year: s, month: o, day: i, hour: c, minute: h, second: r };
}
function Jt() {
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
function Ut(e, t) {
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
function Un(e, t) {
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
function Is(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const js = {
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
}, d0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], u0 = ["y", "M", "d", "H", "m", "s"];
function Wn(e, t, s) {
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
    for (const l of d0)
      if (t.startsWith(l, c)) {
        i += js[l](e, o, s), c += l.length, h = !0;
        break;
      }
    if (h) continue;
    const r = t[c];
    if (u0.includes(r)) {
      i += js[r](e, o, s), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const _0 = [
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
function f0(e, t) {
  const s = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const l of _0)
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
function Cn(e, t) {
  const s = is(e);
  return s || f0(e, t);
}
function h0(e, t, s) {
  return t && ht(e) < ht(t) ? t : s && ht(e) > ht(s) ? s : e;
}
const p0 = ["hour", "minute", "second"];
function Vn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Iv = We(
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
    onChange: $,
    onValueChange: k,
    onOpen: f,
    onClose: _,
    disabled: u,
    readOnly: x,
    placeholder: N,
    ariaLabel: g,
    triggerLabel: S,
    clearLabel: y,
    tabIndex: w,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...z
  }, m) {
    const M = le(null), P = le(null), j = le(null), T = le(null), F = qe(), V = o !== void 0, [Z, Q] = X(
      () => i != null ? Wn(
        Cn(i, c) ?? Jt(),
        c,
        b
      ) : ""
    ), [K, te] = X(!1), [oe, ee] = X(null), [L, ie] = X(() => {
      const U = o !== void 0 ? o ?? "" : i ?? "";
      if (U) {
        const ue = Cn(U, c);
        if (ue) return ue;
      }
      return Jt();
    }), Y = $e(() => h ? is(h) : null, [h]), de = $e(() => r ? is(r) : null, [r]), ae = $e(
      () => new Set(v ?? []),
      [v]
    ), xe = $e(() => {
      const U = V ? o ?? "" : Z;
      return U ? Cn(U, c) : null;
    }, [o, Z, V, c]), we = H(
      (U) => {
        const ue = ht(U);
        return !!(ae.has(ue) || Y && ue < ht(Y) || de && ue > ht(de));
      },
      [ae, Y, de]
    ), Be = H(
      (U) => {
        if (!we(U)) return U;
        for (let ue = 1; ue <= 366; ue += 1) {
          const Pe = Ut(U, ue);
          if (!we(Pe)) return Pe;
          const He = Ut(U, -ue);
          if (!we(He)) return He;
        }
        return U;
      },
      [we]
    ), ve = H(
      (U) => {
        V || Q(U ? Wn(U, c, b) : "");
        const ue = U ? c0(U, l) : "";
        $?.(ue), k?.(ue);
      },
      [V, c, b, l, $, k]
    ), Ve = H(
      (U) => {
        P.current = U, typeof m == "function" ? m(U) : m && (m.current = U);
      },
      [m]
    ), ye = H(() => {
      te(!1), ee(null), _?.(), d || j.current?.focus();
    }, [d, _]), Ze = H(() => {
      if (u) return;
      const U = xe ?? Jt();
      ee(U), ie(Be(U)), te(!0), f?.();
    }, [u, xe, Be, f]), Xe = H(() => {
      K ? ye() : Ze();
    }, [K, ye, Ze]), Le = H((U) => {
      T.current?.querySelector(
        `[data-date="${ht(U)}"]`
      )?.focus();
    }, []), tt = H(
      (U) => {
        if (we(U)) return;
        const ue = oe ?? xe, He = {
          ...l ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ee(He), l || (ve(He), ye());
      },
      [we, oe, xe, l, ve, ye]
    ), Qe = H(
      (U, ue) => {
        ee((Pe) => {
          const He = Pe ?? xe ?? Jt(), Ot = Math.min(U === "hour" ? 23 : 59, Math.max(0, He[U] + ue));
          return { ...He, [U]: Ot };
        });
      },
      [xe]
    ), et = H(
      (U, ue) => {
        const Pe = ue.replace(/\D/g, ""), He = Pe === "" ? 0 : Number(Pe), Bt = U === "hour" ? 23 : 59;
        ee((Ot) => ({ ...Ot ?? xe ?? Jt(), [U]: Math.min(Bt, He) }));
      },
      [xe]
    ), W = H(() => {
      oe && (ve(oe), ye());
    }, [oe, ve, ye]), D = H(() => {
      if (K) return;
      const U = Cn(Z, c);
      ve(U ? h0(U, Y, de) : null);
    }, [K, Z, c, Y, de, ve]), q = (U) => {
      const ue = U.target.value;
      V || Q(ue), K && ee(null);
    }, ne = (U) => {
      U.key === "Enter" ? (U.preventDefault(), K ? oe && (ve(oe), ye()) : D()) : U.key === "Escape" ? K && (U.preventDefault(), ye()) : U.key === "ArrowDown" && !K ? (U.preventDefault(), Ze()) : U.key === "Tab" && K && te(!1), C?.(U);
    }, _e = (U) => {
      D(), I?.(U);
    }, se = (U) => {
      let ue = null;
      switch (U.key) {
        case "ArrowLeft":
          ue = Ut(L, -1), U.preventDefault();
          break;
        case "ArrowRight":
          ue = Ut(L, 1), U.preventDefault();
          break;
        case "ArrowUp":
          ue = Ut(L, -7), U.preventDefault();
          break;
        case "ArrowDown":
          ue = Ut(L, 7), U.preventDefault();
          break;
        case "Home":
          ue = Ut(L, -Is(L)), U.preventDefault();
          break;
        case "End":
          ue = Ut(L, 6 - Is(L)), U.preventDefault();
          break;
        case "PageUp":
          ue = Un(L, U.shiftKey ? -12 : -1), U.preventDefault();
          break;
        case "PageDown":
          ue = Un(L, U.shiftKey ? 12 : 1), U.preventDefault();
          break;
        case "Enter":
        case " ":
          U.preventDefault(), tt(L);
          break;
        case "Escape":
          U.preventDefault(), ye();
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
        M.current && !M.current.contains(ue.target) && ye();
      };
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
    }, [K, ye]), ke(() => {
      if (!K) return;
      const U = (ue) => {
        ue.key === "Escape" && ye();
      };
      return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
    }, [K, ye]);
    const me = () => {
      V || Q(""), $?.(""), k?.(""), P.current?.focus();
    }, Ne = K && oe ? Wn(oe, c, b) : V ? o ? Wn(
      Cn(o, c) ?? Jt(),
      c,
      b
    ) : "" : Z, Fe = V ? !!o : Z.length > 0, Je = d || K, dt = { year: L.year, month: L.month }, bt = new Date(dt.year, dt.month - 1, 1).getDay(), J = {
      year: dt.year,
      month: dt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, ze = [];
    for (let U = 0; U < i0; U += 1)
      ze.push(Ut(J, U - bt));
    const nt = oe ? ht(oe) : xe ? ht(xe) : null, Gt = ht(Jt()), Nt = `${dt.year}-${xt(dt.month)}`, Me = $e(
      () => new Intl.DateTimeFormat(b, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [b]
    ), Ge = new Intl.DateTimeFormat(b, {
      month: "long",
      year: "numeric"
    }).format(new Date(dt.year, dt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (U, ue) => new Intl.DateTimeFormat(b, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ue)
      )
    ), Pt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], en = /* @__PURE__ */ O(
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
                  const U = Be(Un(L, -1));
                  ie(U), setTimeout(() => Le(U), 0);
                },
                children: /* @__PURE__ */ n(Se, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-title"], children: Ge }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const U = Be(Un(L, 1));
                  ie(U), setTimeout(() => Le(U), 0);
                },
                children: /* @__PURE__ */ n(Se, { name: "chevron-right", size: 16 })
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
                    children: ze.slice(ue * 7, ue * 7 + 7).map((Pe) => {
                      const He = ht(Pe), Bt = we(Pe), Ot = He.startsWith(Nt);
                      return /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": He,
                          tabIndex: He === ht(L) ? 0 : -1,
                          "aria-selected": He === nt || void 0,
                          "aria-disabled": Bt || void 0,
                          "aria-label": Me.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            Ot ? null : Ee["dx-datepicker-day--outside"],
                            He === Gt ? Ee["dx-datepicker-day--today"] : null,
                            He === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Bt ? Ee["dx-datepicker-day--disabled"] : null
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
          l && /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time"], children: [
            p0.map((U) => /* @__PURE__ */ O("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-time-label"], children: Vn(U) }),
              /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Vn(U),
                    value: xt(
                      (oe ?? xe ?? Jt())[U]
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
                      "aria-label": `Increase ${Vn(U).toLowerCase()}`,
                      onClick: () => Qe(U, 1),
                      children: /* @__PURE__ */ n(Se, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Vn(U).toLowerCase()}`,
                      onClick: () => Qe(U, -1),
                      children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 11 })
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
          !d && /* @__PURE__ */ O(De, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: Ve,
                type: "text",
                autoComplete: "off",
                value: Ne,
                disabled: u,
                readOnly: x,
                placeholder: N,
                tabIndex: w,
                role: a ? void 0 : "combobox",
                "aria-label": g ?? "Date",
                "aria-haspopup": a ? void 0 : "dialog",
                "aria-expanded": a ? void 0 : Je,
                "aria-controls": a ? void 0 : F,
                "aria-invalid": s || void 0,
                className: [
                  Ee["dx-datepicker-input"],
                  Pt,
                  s ? Ee["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: q,
                onKeyDown: ne,
                onBlur: _e,
                onClick: () => {
                  a || Xe();
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
                  a ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": y ?? "Clear",
                onClick: me,
                children: /* @__PURE__ */ n(Se, { name: "close", size: 14 })
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
                onClick: Xe,
                children: /* @__PURE__ */ n(Se, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ n(
            "div",
            {
              id: F,
              role: d ? void 0 : "dialog",
              className: d ? void 0 : Ee["dx-datepicker-popup"],
              children: en
            }
          )
        ]
      }
    );
  }
), Qt = {
  "dx-rating": "_dx-rating_1q2pj_1",
  "dx-rating-item": "_dx-rating-item_1q2pj_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_1q2pj_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_1q2pj_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_1q2pj_51",
  "dx-rating-clear": "_dx-rating-clear_1q2pj_55",
  "dx-rating-readonly": "_dx-rating-readonly_1q2pj_87",
  "dx-rating-disabled": "_dx-rating-disabled_1q2pj_96"
}, jv = ({
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
  ), $ = H(
    (u) => {
      a?.(u), p?.(u);
    },
    [a, p]
  ), k = H(
    (u) => {
      s || o || ($(u), v(u));
    },
    [s, o, $]
  ), f = (u) => {
    if (s || o) return;
    const x = d > 0 ? d : 1;
    switch (u.key) {
      case "ArrowRight":
      case "ArrowUp":
        u.preventDefault(), k(b(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        u.preventDefault(), k(b(x - 1));
        break;
      case "Home":
        u.preventDefault(), k(1);
        break;
      case "End":
        u.preventDefault(), k(t);
        break;
    }
  }, _ = Array.from({ length: t }, (u, x) => x + 1);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": s || void 0,
      className: [
        Qt["dx-rating"],
        s ? Qt["dx-rating-readonly"] : null,
        o ? Qt["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: f,
      children: [
        !s && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Qt["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? r : -1,
            disabled: o,
            onClick: () => k(0),
            children: /* @__PURE__ */ n(Se, { name: "ban", size: 16 })
          }
        ),
        _.map((u) => {
          const x = u <= e, N = u === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${h} ${u}`,
              tabIndex: N ? r : -1,
              "aria-disabled": o || s || void 0,
              disabled: o || s,
              className: [
                Qt["dx-rating-item"],
                x ? Qt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => k(u),
              onFocus: () => v(u),
              children: [
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: Qt["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(Se, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ n("span", { className: Qt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(Se, { name: "star-outline", size: 20 }) })
              ]
            },
            u
          );
        })
      ]
    }
  );
}, ln = {
  "dx-slider": "_dx-slider_1jrpw_1",
  "dx-slider-track": "_dx-slider-track_1jrpw_9",
  "dx-slider-range": "_dx-slider-range_1jrpw_17",
  "dx-slider-handle": "_dx-slider-handle_1jrpw_26",
  "dx-slider-vertical": "_dx-slider-vertical_1jrpw_58",
  "dx-slider-disabled": "_dx-slider-disabled_1jrpw_84"
};
function jt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const Av = ({
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
  onChange: $,
  onInput: k,
  onValueChange: f,
  onInputChange: _
}) => {
  const u = le(null), x = le(
    null
  ), [N, g] = X(null), S = N ?? e, y = $e(
    () => jt(S, o, i),
    [S, o, i]
  ), w = $e(
    () => jt(h ? t : y, o, i),
    [h, t, y, o, i]
  ), E = $e(
    () => jt(h ? Math.max(s, w) : y, o, i),
    [h, s, w, y, o, i]
  ), I = H(
    (L) => {
      const ie = i - o;
      return ie <= 0 ? 0 : (jt(L, o, i) - o) / ie * 100;
    },
    [o, i]
  ), C = H(
    (L, ie) => {
      const Y = u.current;
      if (!Y) return o;
      const de = Y.getBoundingClientRect();
      let ae;
      r === "vertical" ? ae = 1 - (ie - de.top) / de.height : ae = (L - de.left) / de.width;
      const xe = o + jt(ae, 0, 1) * (i - o);
      return c > 0 ? jt(Math.round(xe / c) * c, o, i) : jt(xe, o, i);
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
      let ae;
      h ? L === "min" ? ae = { min: Math.min(de, E), max: E } : ae = { min: w, max: Math.max(de, w) } : ae = de, m(ae), x.current === null && z(ae);
    },
    [h, C, w, E, m, z]
  ), P = H(
    (L, ie) => {
      const Y = (c > 0 ? c : 1) * ie;
      let de;
      h ? L === "min" ? de = {
        min: jt(w + Y, o, E),
        max: E
      } : de = {
        min: w,
        max: jt(E + Y, w, i)
      } : de = jt(y + Y, o, i), z(de);
    },
    [h, c, o, i, w, E, y, z]
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
          ie.preventDefault(), z(h ? L === "min" ? { min: o, max: E } : { min: w, max: w } : o);
          break;
        case "End":
          ie.preventDefault(), z(h ? L === "min" ? { min: E, max: E } : { min: w, max: i } : i);
          break;
      }
  }, T = (L, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), x.current = { key: L, pointerId: ie.pointerId }, M(L, ie.clientX, ie.clientY));
  }, F = (L) => {
    !x.current || x.current.pointerId !== L.pointerId || (L.preventDefault(), M(x.current.key, L.clientX, L.clientY));
  }, V = (L) => {
    !x.current || x.current.pointerId !== L.pointerId || (x.current = null, L.preventDefault(), z(h ? { min: w, max: E } : y));
  }, [Z, Q] = X(null), K = I(w), te = I(E), oe = h ? K : 0, ee = te;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln["dx-slider"],
        r === "vertical" ? ln["dx-slider-vertical"] : null,
        l ? ln["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ O("div", { ref: u, className: ln["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: ln["dx-slider-range"],
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
            "aria-label": h ? p : a,
            "aria-disabled": l || void 0,
            tabIndex: l || h && Z === "max" ? -1 : v,
            className: ln["dx-slider-handle"],
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
            className: ln["dx-slider-handle"],
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
}, m0 = "-10675199.02:48:05.4775808", g0 = "10675199.02:48:05.4775808", Vt = 86400, Xt = 3600, Dt = 60, ss = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, As = {
  days: Vt,
  hours: Xt,
  minutes: Dt,
  seconds: 1
}, y0 = {
  day: Vt,
  hour: Xt,
  minute: Dt,
  second: 1
};
function mn(e) {
  return String(e).padStart(2, "0");
}
function Ln(e) {
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
    return s * (r * Vt + l * Xt + a * Dt + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || l > 59 || a > 59 ? null : s * (h * Vt + r * Xt + l * Dt + a + p);
  }
  return null;
}
function x0(e) {
  return e.days * Vt + e.hours * Xt + e.minutes * Dt + e.seconds;
}
function Ts(e) {
  let t = Math.abs(e);
  const s = Math.floor(t / Vt);
  t %= Vt;
  const o = Math.floor(t / Xt);
  t %= Xt;
  const i = Math.floor(t / Dt), c = Math.round(t % Dt * 1e9) / 1e9;
  return { days: s, hours: o, minutes: i, seconds: c };
}
function cs(e, t) {
  const s = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Dt) * Dt : t === "hour" ? o = Math.round(o / Xt) * Xt : t === "day" && (o = Math.round(o / Vt) * Vt);
  let i = Math.round(o % Dt);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const h = Math.floor(o / Dt) + c, r = h % 60, l = Math.floor(h / 60), a = l % 24, p = Math.floor(l / 24), d = s ? "-" : "", v = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${v}${mn(a)}`;
    case "minute":
      return `${d}${v}${mn(a)}:${mn(r)}`;
    default:
      return `${d}${v}${mn(a)}:${mn(r)}:${mn(i)}`;
  }
}
function Rs(e, t = "second") {
  const s = Ln(e);
  return s === null ? "" : cs(s, t);
}
function rs(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const Tv = We(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    min: c = m0,
    max: h = g0,
    step: r = "1",
    precision: l = "second",
    showDays: a = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: v = !0,
    allowClear: b = !1,
    inline: $ = !1,
    onChange: k,
    onValueChange: f,
    onOpen: _,
    onClose: u,
    disabled: x,
    placeholder: N,
    ariaLabel: g,
    triggerLabel: S,
    clearLabel: y,
    tabIndex: w,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...z
  }, m) {
    const M = le(null), P = le(null), j = le(null), T = qe(), F = o !== void 0, [V, Z] = X(
      () => i != null ? Rs(i, l) : ""
    ), [Q, K] = X(!1), [te, oe] = X(null), [ee, L] = X(null), ie = $e(
      () => Ln(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), Y = $e(
      () => Ln(h) ?? Number.MAX_SAFE_INTEGER,
      [h]
    ), de = $e(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), ae = $e(() => {
      const J = F ? o ?? "" : V;
      return J ? Ln(J) : null;
    }, [o, V, F]), xe = H(
      (J) => {
        const ze = J === null ? "" : cs(J, l);
        F || Z(ze), k?.(ze), f?.(ze);
      },
      [F, l, k, f]
    ), we = H(
      (J) => {
        J && te !== null && xe(te), K(!1), oe(null), L(null), u?.(), $ || j.current?.focus();
      },
      [$, te, xe, u]
    ), Be = H(() => {
      x || (oe(ae ?? 0), K(!0), _?.());
    }, [x, ae, _]), ve = H(() => {
      Q ? we(!1) : Be();
    }, [Q, we, Be]), Ve = H(
      (J, ze) => {
        oe((nt) => {
          const Nt = (nt ?? ae ?? 0) + ze * de * As[J];
          return rs(Nt, ie, Y);
        });
      },
      [ae, de, ie, Y]
    ), ye = H(
      (J) => {
        const ze = ee?.[J];
        if (ze == null) return;
        const nt = Number.parseFloat(ze), Gt = Number.isNaN(nt) ? 0 : nt;
        oe((Nt) => {
          const Me = Nt ?? ae ?? 0, Ge = Ts(Me);
          Ge[J] = Gt;
          const Pt = (Me < 0 ? -1 : 1) * x0(Ge);
          return rs(Pt, ie, Y);
        }), L(null);
      },
      [ee, ae, ie, Y]
    ), Ze = (J, ze) => {
      L((nt) => ({ ...nt ?? {}, [J]: ze }));
    }, Xe = (J, ze) => {
      switch (ze.key) {
        case "ArrowUp":
          ze.preventDefault(), ye(J), Ve(J, 1);
          break;
        case "ArrowDown":
          ze.preventDefault(), ye(J), Ve(J, -1);
          break;
        case "Home":
          ze.preventDefault(), ye(J), oe(ie);
          break;
        case "End":
          ze.preventDefault(), ye(J), oe(Y);
          break;
        case "Enter":
          ze.preventDefault(), ye(J), we(!0);
          break;
      }
    }, Le = H(() => {
      if (Q) return;
      const J = Ln(V);
      xe(J !== null ? rs(J, ie, Y) : null);
    }, [Q, V, ie, Y, xe]), tt = (J) => {
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
      const J = (ze) => {
        M.current && !M.current.contains(ze.target) && we(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [Q, we]), ke(() => {
      if (!Q) return;
      const J = (ze) => {
        ze.key === "Escape" && we(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [Q, we]), ke(() => {
      if ($ && te !== null) {
        const J = ae;
        (J === null || Math.abs(te - J) > 1e-9) && xe(te);
      }
    }, [$, te, ae, xe]);
    const D = H(
      (J) => {
        P.current = J, typeof m == "function" ? m(J) : m && (m.current = J);
      },
      [m]
    ), q = F ? o ? Rs(o, l) : "" : V, ne = F ? !!o : V.length > 0, _e = $ || Q, se = te ?? ae ?? 0, me = Ts(se), Ne = y0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (J) => As[J] >= Ne && (J === "days" ? a : J === "hours" ? p : J === "minutes" ? d : v)
    ), dt = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], bt = /* @__PURE__ */ O("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: cs(se, l) }),
      /* @__PURE__ */ n("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((J) => /* @__PURE__ */ O("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ke["dx-timespanpicker-unit-label"], children: ss[J] }),
        /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ee?.[J] ?? String(me[J]),
              onChange: (ze) => Ze(J, ze.target.value),
              onKeyDown: (ze) => Xe(J, ze),
              onBlur: () => ye(J)
            }
          ),
          /* @__PURE__ */ O("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${ss[J].toLowerCase()}`,
                onClick: () => {
                  ye(J), Ve(J, 1);
                },
                children: /* @__PURE__ */ n(Se, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${ss[J].toLowerCase()}`,
                onClick: () => {
                  ye(J), Ve(J, -1);
                },
                children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 11 })
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
          !$ && /* @__PURE__ */ O(De, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: D,
                type: "text",
                autoComplete: "off",
                value: q,
                disabled: x,
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
            b && !x && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ke["dx-timespanpicker-clear"],
                "aria-label": y ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(Se, { name: "close", size: 14 })
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
                disabled: x,
                onClick: ve,
                children: /* @__PURE__ */ n(Se, { name: "clock", size: 16 })
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
), b0 = "_wrapper_1c8sy_1", v0 = "_cells_1c8sy_8", k0 = "_cell_1c8sy_8", w0 = "_invalid_1c8sy_63", $0 = "_live_1c8sy_73", an = {
  wrapper: b0,
  cells: v0,
  cell: k0,
  "cell-sm": "_cell-sm_1c8sy_45",
  "cell-md": "_cell-md_1c8sy_51",
  "cell-lg": "_cell-lg_1c8sy_57",
  invalid: w0,
  live: $0
};
function Ls(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Rv = We(
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
    const $ = qe(), k = s !== void 0, [f, _] = X(Ls(o).join("")), u = k ? Ls(s).join("") : f, x = Array.from({ length: t }, (z, m) => u[m] ?? ""), N = le([]), [g, S] = X(""), y = (z) => {
      k || _(z), i?.(z);
    }, w = (z) => {
      const m = N.current[z];
      m && !m.disabled && (m.focus(), m.select());
    }, E = (z, m) => {
      const M = m.replace(/\D/g, "").slice(-1), P = u.split("");
      if (M) {
        P[z] = M;
        const j = P.join("").slice(0, t);
        y(j), j.length < t ? w(z + 1) : p && S("Code complete");
      }
    }, I = (z, m) => {
      if (m.key === "Backspace") {
        if (m.preventDefault(), u[z]) {
          const M = u.split("");
          M[z] = "", y(M.join(""));
        } else if (z > 0) {
          const M = u.split("");
          M[z - 1] = "", y(M.join("")), w(z - 1);
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
      y(T), T.length >= t ? p && S("Code complete") : w(z + j);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [an.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": v ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [an.cells, an[h]].join(" "), children: x.map((z, m) => /* @__PURE__ */ n(
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
              disabled: l,
              "aria-label": `Digit ${m + 1} of ${t}`,
              "aria-invalid": c && z !== "" ? !0 : void 0,
              autoFocus: r && m === 0,
              className: [
                an.cell,
                an[`cell-${h}`],
                c ? an.invalid : null
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
              className: an.live,
              children: g
            }
          )
        ]
      }
    );
  }
), N0 = "_wrapper_1mvcz_1", O0 = "_header_1mvcz_7", S0 = "_label_1mvcz_15", z0 = "_clear_1mvcz_22", D0 = "_canvas_1mvcz_53", M0 = "_disabled_1mvcz_69", gn = {
  wrapper: N0,
  header: O0,
  label: S0,
  clear: z0,
  canvas: D0,
  disabled: M0
}, Lv = We(
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
    const b = le(null), $ = le(!1), k = le(!1), f = le({ x: 0, y: 0 });
    ke(() => {
      const y = b.current;
      if (!y) return;
      const w = window.devicePixelRatio || 1, E = Math.round((l ?? y.clientWidth) * w), I = Math.round(a * w);
      (y.width !== E || y.height !== I) && (y.width = E, y.height = I);
      const C = y.getContext("2d");
      if (!C) return;
      C.setTransform(w, 0, 0, w, 0, 0), C.lineWidth = c, C.strokeStyle = i, C.lineCap = "round", C.lineJoin = "round";
      const z = t ?? s;
      if (z) {
        const m = new Image();
        m.onload = () => {
          C.drawImage(m, 0, 0, y.clientWidth, a);
        }, m.src = z;
      }
    }, [t, s, i, c, l, a]);
    const _ = () => {
      const y = b.current;
      if (!y) return;
      const w = y.toDataURL("image/png");
      o?.(w);
    }, u = () => {
      const y = b.current;
      if (!y) return;
      const w = y.getContext("2d");
      w && w.clearRect(0, 0, y.width, y.height), o?.("");
    };
    us(v, () => ({
      clear: u,
      toDataURL: (y = "image/png", w) => b.current?.toDataURL(y, w) ?? ""
    }));
    const x = (y) => {
      const w = y.currentTarget.getBoundingClientRect();
      return { x: y.clientX - w.left, y: y.clientY - w.top };
    }, N = (y) => {
      p || (y.preventDefault(), typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId), $.current = !0, k.current = !1, f.current = x(y));
    }, g = (y) => {
      if (!$.current) return;
      y.preventDefault();
      const w = y.currentTarget.getContext("2d");
      if (!w) return;
      const E = x(y);
      w.beginPath(), w.moveTo(f.current.x, f.current.y), w.lineTo(E.x, E.y), w.stroke(), f.current = E, k.current = !0;
    }, S = (y) => {
      $.current && (y.preventDefault(), $.current = !1, k.current && _());
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          gn.wrapper,
          d,
          p ? gn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ O("div", { className: gn.header, children: [
            /* @__PURE__ */ n("span", { className: gn.label, children: r }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: gn.clear,
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
              className: gn.canvas,
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
), C0 = "_wrapper_17azb_1", E0 = "_trigger_17azb_7", I0 = "_list_17azb_35", j0 = "_row_17azb_44", A0 = "_name_17azb_59", T0 = "_size_17azb_68", R0 = "_progress_17azb_74", L0 = "_fill_17azb_82", P0 = "_status_17azb_99", B0 = "_remove_17azb_106", At = {
  wrapper: C0,
  trigger: E0,
  list: I0,
  row: j0,
  name: A0,
  size: T0,
  progress: R0,
  fill: L0,
  status: P0,
  remove: B0
};
function Ps(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Pv = We(function({
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
}, $) {
  const k = le(null), [f, _] = X([]), u = le(/* @__PURE__ */ new Map()), x = (w, E) => {
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
      x(w.file.name, { state: "uploading", progress: z }), d?.(w.file.name, z);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (x(w.file.name, { state: "complete", progress: 100 }), v?.(w.file.name)) : (x(w.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), b?.(w.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      x(w.file.name, { state: "error", message: "Network error" }), b?.(w.file.name, "Network error");
    }), c)
      for (const [C, z] of Object.entries(c))
        E.setRequestHeader(C, z);
    E.open("POST", t), E.send(I), x(w.file.name, { state: "uploading", progress: 0 });
  }, g = (w) => {
    if (!w) return;
    const E = [...w], I = [];
    let C = Math.max(0, r - f.length);
    for (const m of E) {
      if (l != null && m.size > l) {
        b?.(
          m.name,
          `File too large (maximum ${Ps(l)})`
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
  }, y = p ?? /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: At.trigger,
      onClick: () => k.current?.click(),
      children: [
        /* @__PURE__ */ n(Se, { name: "upload", size: 14 }),
        a
      ]
    }
  );
  return us($, () => ({
    open: () => k.current?.click(),
    upload: () => f.forEach((w) => w.state === "pending" ? N(w) : null)
  })), /* @__PURE__ */ O("div", { className: At.wrapper, children: [
    y,
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
    !p && f.length > 0 && /* @__PURE__ */ n("ul", { className: At.list, children: f.map(({ file: w, state: E, progress: I, message: C }) => /* @__PURE__ */ O(
      "li",
      {
        className: At.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: At.name, children: w.name }),
          /* @__PURE__ */ n("span", { className: At.size, children: Ps(w.size) }),
          /* @__PURE__ */ n(
            "span",
            {
              className: At.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": I,
              children: /* @__PURE__ */ n(
                "span",
                {
                  className: At.fill,
                  style: { width: `${I}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ n("span", { className: At.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? C ?? "Failed" : "Pending" }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: At.remove,
              "aria-label": `Remove ${w.name}`,
              onClick: () => S(w.name),
              children: /* @__PURE__ */ n(Se, { name: "close", size: 14 })
            }
          )
        ]
      },
      w.name
    )) })
  ] });
}), F0 = "_zone_1cstd_1", q0 = "_dragging_1cstd_23", H0 = "_caption_1cstd_28", K0 = "_browse_1cstd_40", U0 = "_disabled_1cstd_67", En = {
  zone: F0,
  dragging: q0,
  caption: H0,
  browse: K0,
  disabled: U0
};
function W0(e, t) {
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
const Bv = We(
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
    const p = le(null), [d, v] = X(!1), b = (u) => {
      if (!u || u.length === 0) return;
      const x = [...u].filter((N) => W0(N, t ?? ""));
      x.length !== 0 && o?.(x);
    }, $ = (u) => {
      r || (u.preventDefault(), v(!0));
    }, k = (u) => {
      r || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", v(!0));
    }, f = (u) => {
      r || u.currentTarget.contains(u.relatedTarget) || v(!1);
    }, _ = (u) => {
      r || (u.preventDefault(), v(!1), b(u.dataTransfer.files));
    };
    return us(a, () => ({
      open: () => p.current?.click()
    })), /* @__PURE__ */ O(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          En.zone,
          d ? En.dragging : null,
          r ? En.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: $,
        onDragOver: k,
        onDragLeave: f,
        onDrop: _,
        children: [
          /* @__PURE__ */ n("p", { className: En.caption, children: d ? c : i }),
          !r && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: En.browse,
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
), V0 = "_root_2n1we_1", X0 = "_menubar_2n1we_5", G0 = "_horizontal_2n1we_15", Y0 = "_vertical_2n1we_20", Z0 = "_itemWrapper_2n1we_25", J0 = "_item_2n1we_25", Q0 = "_disabled_2n1we_61", ey = "_icon_2n1we_68", ty = "_text_2n1we_75", ny = "_caret_2n1we_79", sy = "_hasChildren_2n1we_85", ry = "_submenu_2n1we_94", oy = "_submenuItem_2n1we_118", ct = {
  root: V0,
  menubar: X0,
  horizontal: G0,
  vertical: Y0,
  itemWrapper: Z0,
  item: J0,
  disabled: Q0,
  icon: ey,
  text: ty,
  caret: ny,
  hasChildren: sy,
  submenu: ry,
  submenuItem: oy
};
function In(e) {
  return !!e.disabled;
}
function Fv({
  items: e,
  orientation: t = "horizontal",
  onClick: s,
  ariaLabel: o = "Menu",
  className: i
}) {
  const c = qe(), h = le(null), r = le(null), [l, a] = X(null), p = le(0), d = le(null), v = H(
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
      if (!In(f)) {
        if (f.children && f.children.length > 0) {
          const u = l === _, x = Date.now() - p.current < 600;
          if (u && x) {
            p.current = 0;
            return;
          }
          a((N) => N === _ ? null : _);
          return;
        }
        v(f), a(null);
      }
    },
    [v, l]
  ), $ = (f) => {
    In(f) || f.children && f.children.length > 0 || (v(f), a(null));
  };
  ke(() => {
    if (l == null) return;
    const f = (_) => {
      h.current && !h.current.contains(_.target) && a(null);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [l]), ke(() => {
    if (d.current != null && l === d.current) {
      const f = `${c}-submenu-${l}`;
      document.getElementById(f)?.querySelector(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )?.focus(), d.current = null;
    }
  }, [l, c]);
  const k = (f) => {
    const _ = r.current;
    if (!_) return;
    const u = Array.from(
      _.querySelectorAll('[data-top="true"]')
    ).filter(
      (g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true"
    );
    if (l != null) {
      const g = `${c}-submenu-${l}`, S = document.getElementById(g);
      if (S) {
        const y = Array.from(
          S.querySelectorAll('[role="menuitem"]')
        ).filter((I) => I.getAttribute("aria-disabled") !== "true"), w = document.activeElement, E = w ? y.indexOf(w) : -1;
        if (f.key === "ArrowDown") {
          f.preventDefault(), E === -1 ? y[0]?.focus() : y[(E + 1) % y.length]?.focus();
          return;
        }
        if (f.key === "ArrowUp") {
          f.preventDefault(), E === -1 ? y[y.length - 1]?.focus() : y[(E - 1 + y.length) % y.length]?.focus();
          return;
        }
        if (f.key === "Escape") {
          f.preventDefault(), a(null), _.querySelector(
            `[data-top="true"][data-index="${l}"]`
          )?.focus();
          return;
        }
        if (f.key === "Enter" || f.key === " ")
          return;
      }
      if (f.key === "Escape") {
        f.preventDefault(), a(null);
        return;
      }
    }
    const x = document.activeElement, N = x ? u.indexOf(x) : -1;
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
        const g = x?.getAttribute("data-index"), S = g != null ? Number(g) : -1, y = S >= 0 ? e[S] : void 0;
        y?.children && y.children.length > 0 && !In(y) && (f.preventDefault(), d.current = S, a(S));
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
            const u = !!f.children && f.children.length > 0, x = l === _, N = In(f), g = `${c}-submenu-${_}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && u && !N && (p.current = Date.now(), a(_));
                },
                onMouseLeave: () => {
                  t === "horizontal" && u && a((S) => S === _ ? null : S);
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
                      "aria-expanded": u ? x : void 0,
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
                        u ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  u && x ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: g,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": f.text,
                      children: f.children?.map((S, y) => {
                        const w = In(S), E = !!S.children && S.children.length > 0;
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
                          `${S.text}-${y}`
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
const ly = "_root_12bqn_1", ay = "_list_12bqn_9", iy = "_item_12bqn_14", cy = "_trigger_12bqn_18", dy = "_disabled_12bqn_44", uy = "_expanded_12bqn_51", _y = "_icon_12bqn_55", fy = "_text_12bqn_66", hy = "_caret_12bqn_73", py = "_open_12bqn_80", my = "_submenu_12bqn_84", gy = "_submenuItem_12bqn_93", yy = "_nestedWrapper_12bqn_122", xy = "_nestedTrigger_12bqn_127", by = "_nestedMenu_12bqn_152", vy = "_iconOnly_12bqn_160", Ae = {
  root: ly,
  list: ay,
  item: iy,
  trigger: cy,
  disabled: dy,
  expanded: uy,
  icon: _y,
  text: fy,
  caret: hy,
  open: py,
  submenu: my,
  submenuItem: gy,
  nestedWrapper: yy,
  nestedTrigger: xy,
  nestedMenu: by,
  iconOnly: vy
};
function ky({
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
  return i ? /* @__PURE__ */ O("div", { className: Ae.nestedWrapper, children: [
    /* @__PURE__ */ O(
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
              children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 10 })
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
function qv({
  items: e,
  multiple: t,
  showArrow: s,
  displayStyle: o,
  onClick: i,
  ariaLabel: c = "Panel menu",
  className: h
}) {
  const r = qe(), l = t ?? !1, a = s ?? !0, p = o ?? "iconAndText", [d, v] = X([]), b = H(
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
        v((x) => x.includes(f) ? x.filter((g) => g !== f) : l ? [...x, f] : [f]);
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
          const x = u.match(/-panel-(\d+)$/);
          if (x) {
            const N = Number(x[1]);
            v((g) => g.filter((S) => S !== N));
          }
        } else {
          const x = _.closest('[role="menu"]');
          if (x) {
            const g = x.id.match(/-panel-(\d+)$/);
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
        ), x = u.indexOf(_);
        if (x === -1) return;
        f.preventDefault();
        const N = f.key === "ArrowDown" ? 1 : -1;
        u[(x + N + u.length) % u.length]?.focus();
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
        const u = !!f.children && f.children.length > 0, x = d.includes(_), N = !!f.disabled, g = `${r}-panel-${_}`, S = `${r}-trigger-${_}`;
        return /* @__PURE__ */ O("div", { className: Ae.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: S,
              "aria-expanded": u ? x : void 0,
              "aria-controls": u ? g : void 0,
              "aria-disabled": N || void 0,
              disabled: N,
              tabIndex: N ? -1 : 0,
              className: [
                Ae.trigger,
                N ? Ae.disabled : null,
                x ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => $(_, u, f),
              children: [
                f.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: f.icon }) : null,
                p === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: f.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": f.text, children: f.icon ? null : f.text.slice(0, 1) }),
                u && a ? /* @__PURE__ */ n(
                  "span",
                  {
                    className: [Ae.caret, x ? Ae.open : null].filter(Boolean).join(" "),
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: 10 })
                  }
                ) : null
              ]
            }
          ),
          u && x ? /* @__PURE__ */ n(
            "div",
            {
              id: g,
              role: "menu",
              className: Ae.submenu,
              "aria-labelledby": S,
              children: f.children?.map((y, w) => /* @__PURE__ */ n(
                ky,
                {
                  item: y,
                  baseId: r,
                  parentKey: `${_}-${w}`,
                  onEmit: b
                },
                `${y.text}-${w}`
              ))
            }
          ) : null
        ] }, `${f.text}-${_}`);
      }) })
    }
  );
}
const wy = "_root_wnctl_1", $y = "_trigger_wnctl_7", Ny = "_defaultTrigger_wnctl_40", Oy = "_avatar_wnctl_46", Sy = "_menu_wnctl_58", zy = "_item_wnctl_74", Dy = "_disabled_wnctl_88", My = "_active_wnctl_97", Cy = "_icon_wnctl_107", Ey = "_text_wnctl_114", Tt = {
  root: wy,
  trigger: $y,
  defaultTrigger: Ny,
  avatar: Oy,
  menu: Sy,
  item: zy,
  disabled: Dy,
  active: My,
  icon: Cy,
  text: Ey
};
function Hv({
  items: e,
  trigger: t,
  onClick: s,
  ariaLabel: o = "Profile menu",
  className: i
}) {
  const c = qe(), h = `${c}-menu`, r = le(null), l = le(null), [a, p] = X(!1), [d, v] = X(-1), b = t, $ = e.map((g, S) => g.disabled ? -1 : S).filter((g) => g >= 0), k = H(
    (g) => {
      if (g.disabled) return;
      const S = {
        text: g.text,
        path: g.path
      };
      s?.(S), p(!1), l.current?.focus();
    },
    [s]
  ), f = H(() => {
    v($[0] ?? -1), p(!0);
  }, [$]), _ = H(() => {
    p(!1), v(-1), l.current?.focus();
  }, []);
  ke(() => {
    if (!a) return;
    const g = (S) => {
      r.current && !r.current.contains(S.target) && (p(!1), v(-1));
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [a]), ke(() => {
    if (!a) return;
    const g = (S) => {
      S.key === "Escape" && (S.preventDefault(), _());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [a, _]);
  const u = (g) => {
    if ($.length === 0) return;
    const S = $.indexOf(d), y = S === -1 ? 0 : (S + g + $.length) % $.length, w = $[y];
    w != null && v(w);
  }, x = (g) => {
    if (!a) {
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
      className: [Tt.root, i].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ O("nav", { "aria-label": o, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": h,
            "aria-label": o,
            className: Tt.trigger,
            onClick: () => a ? _() : f(),
            onKeyDown: x,
            children: b ?? /* @__PURE__ */ O("span", { className: Tt.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: Tt.avatar, "aria-hidden": "true", children: "●" }),
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
            className: Tt.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((g, S) => {
              const y = !!g.disabled, w = S === d;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${c}-item-${S}`,
                  role: "menuitem",
                  "aria-disabled": y || void 0,
                  tabIndex: y ? -1 : 0,
                  className: [
                    Tt.item,
                    w ? Tt.active : null,
                    y ? Tt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    y || k(g);
                  },
                  onMouseEnter: () => {
                    y || v(S);
                  },
                  children: [
                    g.icon ? /* @__PURE__ */ n("span", { className: Tt.icon, "aria-hidden": "true", children: g.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Tt.text, children: g.text })
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
const Iy = "_root_6bmhq_1", jy = "_bottomRight_6bmhq_11", Ay = "_bottomLeft_6bmhq_16", Ty = "_topRight_6bmhq_21", Ry = "_topLeft_6bmhq_26", Ly = "_menu_6bmhq_31", Py = "_itemWrapper_6bmhq_48", By = "_tooltip_6bmhq_54", Fy = "_main_6bmhq_76", qy = "_mainIcon_6bmhq_104", Hy = "_mainOpen_6bmhq_109", Ky = "_item_6bmhq_48", Uy = "_disabled_6bmhq_141", Wy = "_itemIcon_6bmhq_148", ut = {
  root: Iy,
  bottomRight: jy,
  bottomLeft: Ay,
  topRight: Ty,
  topLeft: Ry,
  menu: Ly,
  itemWrapper: Py,
  tooltip: By,
  main: Fy,
  mainIcon: qy,
  mainOpen: Hy,
  item: Ky,
  disabled: Uy,
  itemIcon: Wy
};
function Kv({
  items: e,
  position: t,
  icon: s = "+",
  onClick: o,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const h = t ?? "bottom-right", l = `${qe()}-menu`, a = le(null), p = le(null), [d, v] = X(!1), b = H(
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
      a.current && !a.current.contains(u.target) && v(!1);
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
      ref: a,
      className: [ut.root, $, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        d ? /* @__PURE__ */ n(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": i,
            className: ut.menu,
            onKeyDown: f,
            children: e.map((_, u) => {
              const x = !!_.disabled;
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": x || void 0,
                    title: _.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [ut.item, x ? ut.disabled : null].filter(Boolean).join(" "),
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
            "aria-controls": l,
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
const Vy = "_root_17721_1", Xy = "_list_17721_5", Gy = "_item_17721_15", Yy = "_link_17721_22", Zy = "_linkButton_17721_23", Jy = "_current_17721_24", Qy = "_disabled_17721_68", ex = "_icon_17721_74", tx = "_text_17721_81", nx = "_separator_17721_85", Ue = {
  root: Vy,
  list: Xy,
  item: Gy,
  link: Yy,
  linkButton: Zy,
  current: Jy,
  disabled: Qy,
  icon: ex,
  text: tx,
  separator: nx
};
function Uv({
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
        return /* @__PURE__ */ O("li", { className: Ue.item, children: [
          l ? a ? /* @__PURE__ */ O(
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
          ) : a ? /* @__PURE__ */ O(
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
          l ? null : /* @__PURE__ */ n("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${h.text}-${r}`);
      }) })
    }
  );
}
const sx = "_root_pfzz5_1", rx = "_list_pfzz5_5", ox = "_item_pfzz5_15", lx = "_connector_pfzz5_21", ax = "_connectorCompleted_pfzz5_30", ix = "_step_pfzz5_34", cx = "_active_pfzz5_69", dx = "_completed_pfzz5_75", ux = "_circle_pfzz5_79", _x = "_check_pfzz5_109", fx = "_icon_pfzz5_114", hx = "_number_pfzz5_119", px = "_text_pfzz5_124", _t = {
  root: sx,
  list: rx,
  item: ox,
  connector: lx,
  connectorCompleted: ax,
  step: ix,
  active: cx,
  completed: dx,
  circle: ux,
  check: _x,
  icon: fx,
  number: hx,
  text: px
};
function Wv({
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
  const d = i ?? c ?? !1, v = t ?? s, b = v !== void 0, [$, k] = X(() => Math.min(Math.max(0, v ?? o), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, b ? v : $),
    Math.max(0, e.length - 1)
  ), u = le(null), x = H(
    (S) => {
      const y = Math.min(
        Math.max(0, S),
        Math.max(0, e.length - 1)
      );
      b || k(y), (h ?? r ?? l)?.(y);
    },
    [b, h, r, l, e.length]
  ), N = H(
    (S, y) => !!(y.disabled || d && S > _ + 1),
    [d, _]
  ), g = (S) => {
    const y = Array.from(
      S.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), w = document.activeElement, E = w ? y.indexOf(w) : -1;
    if (S.key === "ArrowRight" || S.key === "ArrowDown") {
      if (S.preventDefault(), y.length === 0) return;
      const I = E === -1 ? 0 : (E + 1) % y.length, C = y[I];
      C && C.focus();
    } else if (S.key === "ArrowLeft" || S.key === "ArrowUp") {
      if (S.preventDefault(), y.length === 0) return;
      const I = E === -1 ? y.length - 1 : (E - 1 + y.length) % y.length, C = y[I];
      C && C.focus();
    } else S.key === "Home" ? (S.preventDefault(), y[0]?.focus()) : S.key === "End" && (S.preventDefault(), y[y.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": a,
      className: [_t.root, p].filter(Boolean).join(" "),
      onKeyDown: g,
      children: /* @__PURE__ */ n("ol", { ref: u, role: "list", className: _t.list, children: e.map((S, y) => {
        const w = y === _, E = y < _, I = N(y, S);
        return /* @__PURE__ */ O(
          "li",
          {
            role: "listitem",
            className: _t.item,
            children: [
              y > 0 ? /* @__PURE__ */ n(
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
                  "data-step": y,
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
                    I || x(y);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Se, { name: "check", size: "sm" }) }) : S.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: S.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: y + 1 }) }),
                    /* @__PURE__ */ n("span", { className: _t.text, children: S.text })
                  ]
                }
              )
            ]
          },
          `${S.text}-${y}`
        );
      }) })
    }
  );
}
const mx = "_root_1axlw_1", gx = "_horizontal_1axlw_13", yx = "_vertical_1axlw_17", xx = "_pane_1axlw_21", bx = "_handle_1axlw_31", vx = "_handleHorizontal_1axlw_51", kx = "_handleVertical_1axlw_57", wx = "_handleGrip_1axlw_63", $x = "_handleCollapseHint_1axlw_75", Nx = "_collapseBtn_1axlw_79", Ox = "_collapseBtnCollapsed_1axlw_109", wt = {
  root: mx,
  horizontal: gx,
  vertical: yx,
  pane: xx,
  handle: bx,
  handleHorizontal: vx,
  handleVertical: kx,
  handleGrip: wx,
  handleCollapseHint: $x,
  collapseBtn: Nx,
  collapseBtnCollapsed: Ox
};
function jn(e, t) {
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
function Wt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function Vv({
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
  const a = e ?? t ?? "horizontal", p = a === "horizontal", d = le(null), v = H(() => {
    const m = s.length;
    if (m === 0) return [];
    const M = s.map((j) => j.size ? jn(j.size, 100 / m) : 100 / m), P = M.reduce((j, T) => j + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? M.map((j) => j / P * 100) : M;
  }, [s]), [b, $] = X(() => v()), [k, f] = X(
    () => s.map((m) => !!m.collapsed)
  ), _ = le(b);
  ke(() => {
    f(s.map((m) => !!m.collapsed));
  }, [s]);
  const u = H(
    () => s.map((m) => jn(m.min, 0)),
    [s]
  ), x = H(
    () => s.map((m) => jn(m.max, 100)),
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
  ), y = le(
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
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(M.pointerId), y.current = { handleIndex: m, pointerId: M.pointerId };
  }, I = (m) => {
    if (!y.current || y.current.pointerId !== m.pointerId)
      return;
    m.preventDefault();
    const M = y.current.handleIndex, P = w(M, m.clientX, m.clientY);
    if (P == null) return;
    const j = u(), T = x(), F = j[M] ?? 0, V = T[M] ?? 100, Z = M + 1, Q = j[Z] ?? 0, K = T[Z] ?? 100, te = b[M] ?? 0, oe = b[Z] ?? 0, ee = te + oe;
    if (ee <= 0) return;
    let L = Wt(P, F, V), ie = ee - L;
    if (ie < Q) {
      if (ie = Q, L = ee - ie, L < F || L > V) return;
    } else if (ie > K && (ie = K, L = ee - ie, L < F || L > V))
      return;
    L = Wt(L, F, V), ie = ee - L, N(M, L) && $((Y) => {
      const de = [...Y];
      return de[M] = L, de[Z] = ie, de;
    });
  }, C = (m) => {
    !y.current || y.current.pointerId !== m.pointerId || (y.current = null);
  }, z = (m, M) => {
    const P = u(), j = x(), T = m, F = m + 1, V = b[T] ?? 0, Z = b[F] ?? 0, Q = V + Z;
    let K = 0;
    const te = !!s[T]?.collapsible, oe = !!s[F]?.collapsible;
    if (p ? M.key === "ArrowLeft" ? K = -5 : M.key === "ArrowRight" && (K = 5) : M.key === "ArrowUp" ? K = -5 : M.key === "ArrowDown" && (K = 5), M.key === "Home") {
      M.preventDefault();
      let ee = P[T] ?? 0, L = Q - ee;
      if (L = Wt(
        L,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - L, ee = Wt(ee, P[T] ?? 0, j[T] ?? 100), !N(T, ee)) return;
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
      if (L = Wt(
        L,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - L, ee = Wt(ee, P[T] ?? 0, j[T] ?? 100), !N(T, ee)) return;
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
      const ie = P[T] ?? 0, Y = j[T] ?? 100, de = P[F] ?? 0, ae = j[F] ?? 100;
      if (ee = Wt(ee, ie, Y), L = Q - ee, (L < de || L > ae) && (L = Wt(L, de, ae), ee = Q - L, ee = Wt(ee, ie, Y), L = Q - ee), !N(T, ee)) return;
      $((xe) => {
        const we = [...xe];
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
        l
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
        }, F = jn(m.min, 0), V = jn(m.max, 100), Z = M < s.length - 1, Q = !!s[M + 1]?.collapsible;
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
              "aria-orientation": a,
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
const Sx = "_root_exk72_1", zx = "_list_exk72_5", Dx = "_vertical_exk72_14", Mx = "_horizontal_exk72_20", Cx = "_item_exk72_28", Ex = "_link_exk72_32", Ix = "_active_exk72_57", yn = {
  root: Sx,
  list: zx,
  vertical: Dx,
  horizontal: Mx,
  item: Cx,
  link: Ex,
  active: Ix
};
function Xv({
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
  ), b = le(d);
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
      if (a) {
        const g = document.querySelector(a);
        if (g) return g;
      }
      return window;
    })();
    let _ = null;
    const u = /* @__PURE__ */ new Map(), x = () => {
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
      const y = S?.sel ?? g?.sel ?? e[0]?.selector ?? null;
      y && y !== b.current && v(y);
    }, N = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const g = f === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: f,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver((S) => {
        const y = S.filter((w) => w.isIntersecting).sort((w, E) => w.boundingClientRect.top - E.boundingClientRect.top);
        if (y[0]) {
          const w = y[0].target;
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
          x();
      }, g);
      for (const S of e) {
        const y = document.querySelector(S.selector);
        y && (_.observe(y), u.set(S.selector, y));
      }
    }
    return f === window ? (window.addEventListener("scroll", N, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", N), _?.disconnect();
    }) : (f.addEventListener("scroll", N, {
      passive: !0
    }), x(), () => {
      f.removeEventListener("scroll", N), _?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [yn.root, yn[p], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: yn.list, children: e.map((k) => {
        const f = k.selector === d;
        return /* @__PURE__ */ n("li", { className: yn.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: k.selector.startsWith("#") || k.selector.startsWith(".") ? k.selector : `#${k.selector}`,
            className: [yn.link, f ? yn.active : null].filter(Boolean).join(" "),
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
const jx = "_root_1i6qn_1", Ax = "_viewport_1i6qn_17", Tx = "_slide_1i6qn_24", Rx = "_active_1i6qn_33", Lx = "_arrow_1i6qn_37", Px = "_prev_1i6qn_71", Bx = "_next_1i6qn_75", Fx = "_pauseBtn_1i6qn_79", qx = "_indicators_1i6qn_110", Hx = "_indicator_1i6qn_110", Kx = "_indicatorActive_1i6qn_145", $t = {
  root: jx,
  viewport: Ax,
  slide: Tx,
  active: Rx,
  arrow: Lx,
  prev: Px,
  next: Bx,
  pauseBtn: Fx,
  indicators: qx,
  indicator: Hx,
  indicatorActive: Kx
};
function Gv({
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
  onChange: $,
  Change: k,
  ariaLabel: f = "Carousel",
  className: _
}) {
  const u = t ?? s, x = u !== void 0, [N, g] = X(() => Math.min(Math.max(0, u ?? o), Math.max(0, e.length - 1))), S = x ? u : N, y = e.length === 0 ? 0 : Math.min(Math.max(0, S), e.length - 1), w = i ?? c ?? !1, E = h ?? r ?? 3e3, I = l ?? a ?? !0, C = p ?? d ?? !0, z = v ?? b ?? !0, [m, M] = X(!1), [P, j] = X(!1), T = m || P, F = le(null), V = qe(), Z = H(
    (de) => {
      const ae = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      x || g(ae), ($ ?? k)?.(ae);
    },
    [x, $, k, e.length]
  ), Q = H(() => {
    Z(y - 1);
  }, [Z, y]), K = H(() => {
    Z(y + 1);
  }, [Z, y]), te = H(
    (de) => {
      Z(de);
    },
    [Z]
  );
  ke(() => {
    if (!w || T || e.length <= 1) return;
    const de = setInterval(() => {
      Z(y + 1);
    }, E);
    return () => clearInterval(de);
  }, [w, T, E, y, Z, e.length]);
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
        /* @__PURE__ */ n("div", { id: V, className: $t.viewport, children: e.map((de, ae) => {
          const xe = ae === y;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ae + 1} of ${e.length}`,
              "aria-hidden": xe ? void 0 : !0,
              hidden: !xe,
              className: [$t.slide, xe ? $t.active : null].filter(Boolean).join(" "),
              children: de
            },
            ae
          );
        }) }),
        C && e.length > 1 ? /* @__PURE__ */ O(De, { children: [
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
            children: e.map((de, ae) => {
              const xe = ae === y;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: [
                    $t.indicator,
                    xe ? $t.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${ae + 1}`,
                  "aria-current": xe ? "true" : void 0,
                  "aria-controls": V,
                  onClick: () => te(ae)
                },
                ae
              );
            })
          }
        ) : null
      ]
    }
  );
}
const Ux = "_root_15u2v_1", Wx = "_group_15u2v_20", Vx = "_itemWrapper_15u2v_30", Xx = "_treeitem_15u2v_34", Gx = "_disabled_15u2v_50", Yx = "_selected_15u2v_60", Zx = "_caret_15u2v_66", Jx = "_caretIcon_15u2v_113", Qx = "_caretOpen_15u2v_120", eb = "_caretPlaceholder_15u2v_124", tb = "_label_15u2v_130", nb = "_loading_15u2v_137", sb = "_loadingRow_15u2v_143", rb = "_empty_15u2v_149", ob = "_checkbox_15u2v_155", st = {
  root: Ux,
  group: Wx,
  itemWrapper: Vx,
  treeitem: Xx,
  disabled: Gx,
  selected: Yx,
  caret: Zx,
  caretIcon: Jx,
  caretOpen: Qx,
  caretPlaceholder: eb,
  label: tb,
  loading: nb,
  loadingRow: sb,
  empty: rb,
  checkbox: ob
};
function lb({
  indeterminate: e,
  ...t
}) {
  const s = le(null);
  return ke(() => {
    s.current && (s.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: s, type: "checkbox", ...t });
}
function Yv({
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
  defaultSelectedItem: $,
  defaultSelectedItems: k,
  onChange: f,
  Change: _,
  onExpand: u,
  Expand: x,
  onCollapse: N,
  Collapse: g,
  loadChildData: S,
  LoadChildData: y,
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
  const Z = e ?? t ?? [], Q = s ?? o, K = i ?? c ?? "text", te = h ?? r ?? "id", oe = l ?? a ?? "single", ee = z ?? m ?? "Tree", L = S ?? y, ie = w ?? E ?? I ?? C, Y = H(
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
  ), ae = H(
    (B) => {
      if (Q) {
        const re = Q(B);
        if (re !== void 0) return re;
      }
      const G = B.children;
      if (Array.isArray(G)) return G;
    },
    [Q]
  ), xe = H(
    (B) => {
      const G = /* @__PURE__ */ new Set(), re = (he) => {
        for (const fe of he) {
          const be = Y(fe);
          fe.expanded && G.add(be);
          const Te = ae(fe);
          Te && Te.length > 0 && re(Te);
        }
      };
      return re(B), G;
    },
    [Y, ae]
  ), [we, Be] = X(
    () => xe(Z)
  ), [ve, Ve] = X(
    () => /* @__PURE__ */ new Map()
  ), [ye, Ze] = X(() => /* @__PURE__ */ new Set()), Xe = p ?? d, Le = v ?? b, et = oe === "multiple" ? Le !== void 0 : Xe !== void 0, W = H(() => {
    if (oe === "multiple") {
      if (k && k.length > 0)
        return new Set(k.map((re) => Y(re)));
      const B = /* @__PURE__ */ new Set(), G = (re) => {
        for (const he of re) {
          he.selected && B.add(Y(he));
          const fe = ae(he);
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
          const fe = ae(he);
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
    ae,
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
      if (Xe !== void 0) {
        const B = Xe;
        return B ? /* @__PURE__ */ new Set([Y(B)]) : /* @__PURE__ */ new Set();
      }
      return D;
    }
  }, [
    oe,
    Le,
    Xe,
    D,
    Y
  ]), _e = H(
    (B) => {
      let G;
      const re = (he) => {
        for (const fe of he) {
          if (Y(fe) === B)
            return G = fe, !0;
          const Te = ve.get(Y(fe)) ?? ae(fe);
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
    [Z, ve, Y, ae]
  ), se = H(() => {
    const B = /* @__PURE__ */ new Map(), G = (re) => {
      for (const he of re) {
        const fe = Y(he);
        B.set(fe, he);
        const Te = ve.get(fe) ?? ae(he);
        Te && G(Te);
      }
    };
    return G(Z), B;
  }, [Z, ve, Y, ae]), me = H(
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
      const he = we.has(G), fe = u ?? x, be = N ?? g, Te = ae(B), R = ve.get(G) ?? Te, pe = !(R !== void 0 && R.length > 0) && L != null;
      if (he) {
        Be((Ie) => {
          const je = new Set(Ie);
          return je.delete(G), je;
        }), be?.({ item: B });
        return;
      }
      if (pe) {
        if (ye.has(G)) return;
        Ze((Ie) => {
          const je = new Set(Ie);
          return je.add(G), je;
        });
        try {
          const je = await L(B);
          Ve((Ce) => {
            const lt = new Map(Ce);
            return lt.set(G, je), lt;
          }), Be((Ce) => {
            const lt = new Set(Ce);
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
      we,
      ae,
      ve,
      L,
      ye,
      u,
      x,
      N,
      g
    ]
  ), Fe = $e(() => {
    const B = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), he = (fe, be) => {
      for (const Te of fe) {
        const A = Y(Te);
        B.has(A) || B.set(A, []), G.set(A, be), Te.disabled && re.add(A);
        const ce = ve.get(A) ?? ae(Te);
        ce && ce.length > 0 && (B.set(
          A,
          ce.map((pe) => Y(pe))
        ), he(ce, A));
      }
    };
    return he(Z, null), { childrenOf: B, parentOf: G, disabledKeys: re };
  }, [Z, ve, Y, ae]), Je = H(
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
  ), J = P !== void 0 ? new Set(P) : dt, ze = H(
    (B) => {
      const G = Fe.disabledKeys;
      return Je(B).filter((re) => !G.has(re));
    },
    [Je, Fe]
  ), nt = H(
    (B) => {
      if (J.has(B)) return !0;
      if (!M || !F) return !1;
      const G = ze(B);
      return G.length > 0 && G.every((re) => J.has(re));
    },
    [J, M, F, ze]
  ), Gt = H(
    (B) => {
      if (!M || !F || J.has(B))
        return !1;
      const G = ze(B);
      if (G.length === 0) return !1;
      const re = G.filter((he) => J.has(he)).length;
      return re > 0 && re < G.length;
    },
    [J, M, F, ze]
  ), Nt = H(
    (B) => {
      if (!M || B.disabled) return;
      const G = Y(B), re = new Set(J);
      if (re.has(G) || nt(G)) {
        if (re.delete(G), F)
          for (const he of ze(G)) re.delete(he);
      } else if (re.add(G), F)
        for (const he of ze(G)) re.add(he);
      P === void 0 && bt(re), T?.([...re]);
    },
    [
      M,
      F,
      P,
      J,
      ze,
      Y,
      nt,
      T
    ]
  ), Me = $e(() => {
    const B = [], G = (re, he, fe) => {
      re.forEach((be, Te) => {
        const A = Y(be), R = de(be), ce = ve.get(A) ?? ae(be);
        let pe;
        ve.has(A) ? pe = ve.get(A).length > 0 : ce !== void 0 ? pe = ce.length > 0 : L ? pe = !0 : pe = !1;
        const Ie = we.has(A), je = !!be.disabled, Ce = re.length, lt = Te + 1;
        if (B.push({
          item: be,
          key: A,
          text: R,
          level: he,
          posInSet: lt,
          setSize: Ce,
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
    ae,
    ve,
    we,
    L,
    ye
  ]), [Ge, vt] = X(
    () => Me[0]?.key ?? null
  ), Pt = le(""), en = le(null), U = le(null);
  ke(() => {
    if (!Ge && Me.length > 0) {
      const B = Me[0];
      B && vt(B.key);
    } else if (Ge && !Me.some((B) => B.key === Ge)) {
      const B = Me[0];
      vt(B ? B.key : null);
    }
  }, [Me, Ge]), ke(() => {
    if (Ge) {
      const B = U.current?.querySelector(
        `[data-key="${CSS.escape(Ge)}"]`
      );
      let G = null;
      B || (G = U.current?.querySelector(
        `[data-key="${Ge}"]`
      ) ?? null);
      const re = B ?? G;
      re && document.activeElement !== re && U.current?.contains(document.activeElement) && re.focus();
    }
  }, [Ge]);
  const ue = H((B) => {
    vt(B), requestAnimationFrame(() => {
      const G = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
      let re = U.current?.querySelector(
        `[data-key="${G}"]`
      );
      re || (re = U.current?.querySelector(`[data-key="${B}"]`) ?? null), re?.focus();
    });
  }, []), Pe = H(
    (B) => Me.find((re) => re.key === B)?.parentKey ?? null,
    [Me]
  ), He = H(
    (B) => {
      if (Me.length === 0) return;
      const G = Ge ? Me.findIndex((fe) => fe.key === Ge) : -1, re = G >= 0 ? Me[G] : void 0;
      let he = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), G === -1)
          he = Me[0]?.key ?? null;
        else {
          const fe = (G + 1) % Me.length, be = Me[fe];
          be && (he = be.key);
        }
        he && ue(he);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), G === -1) {
          const fe = Me[Me.length - 1];
          fe && (he = fe.key);
        } else {
          const fe = (G - 1 + Me.length) % Me.length, be = Me[fe];
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
          const fe = G + 1, be = Me[fe];
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
        const fe = Me[0];
        fe && ue(fe.key);
        return;
      }
      if (B.key === "End") {
        B.preventDefault();
        const fe = Me[Me.length - 1];
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
        const fe = (Pt.current + B.key).toLowerCase();
        Pt.current = fe, en.current && clearTimeout(en.current), en.current = setTimeout(() => {
          Pt.current = "";
        }, 500);
        const be = G >= 0 ? G + 1 : 0, R = [...Me, ...Me].slice(be, be + Me.length).find((ce) => ce.text.toLowerCase().startsWith(fe));
        R && ue(R.key);
        return;
      }
    },
    [
      Me,
      Ge,
      ue,
      Ne,
      me,
      Pe,
      M,
      Nt
    ]
  ), Bt = H(() => {
    if (!Ge && Me.length > 0) {
      const B = Me[0];
      B && vt(B.key);
    }
  }, [Ge, Me]), Ot = (B, G, re) => /* @__PURE__ */ n("ul", { role: "group", className: st.group, children: B.map((he, fe) => {
    const be = Y(he), Te = de(he), A = ve.get(be) ?? ae(he);
    let R;
    ve.has(be) ? R = ve.get(be).length > 0 : A !== void 0 ? R = A.length > 0 : L ? R = !0 : R = !1;
    const ce = we.has(be), pe = ne.has(be), Ie = !!he.disabled, je = ye.has(be), Ce = Ge === be, lt = B.length, St = fe + 1, tr = ie ? ie(he) : Te, hs = M ? {
      checked: nt(be),
      indeterminate: Gt(be)
    } : null;
    return /* @__PURE__ */ O("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ O(
        "div",
        {
          role: "treeitem",
          "data-key": be,
          tabIndex: Ce ? 0 : -1,
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
            Ce ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ue(be), Ie || me(he);
          },
          onFocus: () => vt(be),
          children: [
            M ? /* @__PURE__ */ n(
              lb,
              {
                className: st.checkbox,
                checked: hs?.checked ?? !1,
                indeterminate: hs?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${Te}`,
                onClick: (Pn) => Pn.stopPropagation(),
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
                onClick: (Pn) => {
                  Pn.stopPropagation(), ue(be), Ne(he);
                },
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      ce ? st.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ n(Se, { name: "chevron-right", size: 10 })
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
            /* @__PURE__ */ n("span", { className: st.label, children: tr }),
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
      onFocus: Bt,
      children: Z.length === 0 ? /* @__PURE__ */ n("div", { className: st.empty, children: "No items" }) : Ot(Z, 1)
    }
  );
}
const ab = "_root_12sxo_1", ib = "_panel_12sxo_8", cb = "_header_12sxo_19", db = "_listbox_12sxo_28", ub = "_option_12sxo_42", _b = "_disabled_12sxo_57", fb = "_active_12sxo_66", hb = "_selected_12sxo_70", pb = "_empty_12sxo_86", mb = "_controls_12sxo_93", gb = "_reorder_12sxo_102", yb = "_btn_12sxo_110", Re = {
  root: ab,
  panel: ib,
  header: cb,
  listbox: db,
  option: ub,
  disabled: _b,
  active: fb,
  selected: hb,
  empty: pb,
  controls: mb,
  reorder: gb,
  btn: yb
};
function rt(e, t) {
  const s = e[t];
  return s != null ? String(s) : String(e.id ?? "");
}
function Xn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Zv({
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
  keyProperty: $,
  KeyProperty: k,
  onMove: f,
  Move: _,
  ariaLabel: u,
  AriaLabel: x,
  className: N
}) {
  const g = $ ?? k ?? "id", S = u ?? x ?? "PickList", y = e ?? t ?? i ?? c ?? l ?? a ?? [], w = s ?? o ?? h ?? r ?? [], [E, I] = X(() => [
    ...y
  ]), [C, z] = X(() => [
    ...w
  ]);
  ke(() => {
    const D = e ?? t ?? i ?? c ?? l ?? a;
    D !== void 0 && I([...D]);
  }, [e, t, i, c, l, a]), ke(() => {
    const D = s ?? o ?? h ?? r;
    D !== void 0 && z([...D]);
  }, [s, o, h, r]);
  const [m, M] = X(
    () => /* @__PURE__ */ new Set()
  ), [P, j] = X(
    () => /* @__PURE__ */ new Set()
  ), [T, F] = X(() => {
    const D = y.findIndex((q) => !q.disabled);
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
  ]), ae = H(() => {
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
  ]), xe = H(() => {
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
  ]), ve = m.size > 0, Ve = P.size > 0, ye = le(""), Ze = le(
    null
  ), Xe = le(""), Le = le(
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
        const se = (ye.current + D.key).toLowerCase();
        ye.current = se, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const me = [...q, ...q], Ne = q.indexOf(ne) + 1, Fe = me.slice(Ne).find(
          (Je) => Xn(E[Je]).toLowerCase().startsWith(se)
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
        const se = (Xe.current + D.key).toLowerCase();
        Xe.current = se, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Xe.current = "";
        }, 500);
        const me = [...q, ...q], Ne = q.indexOf(ne) + 1, Fe = me.slice(Ne).find(
          (Je) => Xn(C[Je]).toLowerCase().startsWith(se)
        );
        Fe != null && Z(Fe);
        return;
      }
      _e >= 0 && Z(_e);
    },
    [C, K, V, ie]
  ), et = le(null), W = le(null);
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
                    children: Xn(D)
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
              "aria-disabled": E.filter((D) => !D.disabled).length === 0 || void 0,
              disabled: E.filter((D) => !D.disabled).length === 0,
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
              "aria-disabled": !Ve || void 0,
              disabled: !Ve,
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
                    children: Xn(D)
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
                "aria-disabled": !Ve || void 0,
                disabled: !Ve,
                onClick: we,
                children: /* @__PURE__ */ n(Se, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Re.btn,
                "aria-label": "Move down",
                "aria-disabled": !Ve || void 0,
                disabled: !Ve,
                onClick: Be,
                children: /* @__PURE__ */ n(Se, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const xb = "_root_drtn7_1", bb = "_header_drtn7_8", vb = "_title_drtn7_15", kb = "_navBtn_drtn7_20", wb = "_resources_drtn7_39", $b = "_resource_drtn7_39", Nb = "_grid_drtn7_50", Ob = "_timeCol_drtn7_55", Sb = "_timeCell_drtn7_61", zb = "_dayCol_drtn7_66", Db = "_dayHeader_drtn7_73", Mb = "_slot_drtn7_81", Cb = "_event_drtn7_91", ft = {
  root: xb,
  header: bb,
  title: vb,
  navBtn: kb,
  resources: wb,
  resource: $b,
  grid: Nb,
  timeCol: Ob,
  timeCell: Sb,
  dayCol: zb,
  dayHeader: Db,
  slot: Mb,
  event: Cb
};
function Bs(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Jv({
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
      className: [ft.root, l].filter(Boolean).join(" "),
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
                    "aria-label": `${f.title} ${Bs(f.start)} - ${Bs(f.end)}`,
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
const Eb = "_root_1n0oq_1", Ib = "_header_1n0oq_8", jb = "_headerCell_1n0oq_15", Ab = "_timeline_1n0oq_21", Tb = "_row_1n0oq_26", Rb = "_taskName_1n0oq_32", Lb = "_timelineCell_1n0oq_37", Pb = "_bar_1n0oq_43", Bb = "_progress_1n0oq_56", Fb = "_dep_1n0oq_61", Rt = {
  root: Eb,
  header: Ib,
  headerCell: jb,
  timeline: Ab,
  row: Tb,
  taskName: Rb,
  timelineCell: Lb,
  bar: Pb,
  progress: Bb,
  dep: Fb
};
function Qv({
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
      className: [Rt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": o,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ O("div", { className: Rt.header, role: "row", children: [
          /* @__PURE__ */ n("div", { className: Rt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ O("div", { className: Rt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ O(
          "div",
          {
            className: Rt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ n("div", { className: Rt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ O("div", { className: Rt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: Rt.bar,
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
                        className: Rt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((l) => /* @__PURE__ */ n("svg", { className: Rt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
const qb = "_root_1p46p_1", Hb = "_fields_1p46p_6", Kb = "_chip_1p46p_13", Ub = "_table_1p46p_35", Wb = "_totalRow_1p46p_55", Vb = "_total_1p46p_55", xn = {
  root: qb,
  fields: Hb,
  chip: Kb,
  table: Ub,
  totalRow: Wb,
  total: Vb
}, Gn = {
  Sum: (e) => e.reduce((t, s) => t + s, 0),
  Average: (e) => e.length ? e.reduce((t, s) => t + s, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function An(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function ek({
  data: e,
  rowFields: t = [],
  columnFields: s = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: h
}) {
  const r = t, l = s, a = o, p = (f, _, u) => {
    const x = f === "row" ? r.filter((S) => S.property !== _) : r, N = f === "col" ? l.filter((S) => S.property !== _) : l, g = f === "agg" ? a.filter((S) => !(S.property === _ && S.aggregate === u)) : a;
    i?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: g
    });
  }, d = (f, _) => _.map((u) => String(f[u.property])).join(""), v = [
    ...new Set(r.length ? e.map((f) => d(f, r)) : [""])
  ].sort(), b = [
    ...new Set(l.length ? e.map((f) => d(f, l)) : [""])
  ].sort(), $ = (f, _, u) => {
    const x = e.filter(
      (g) => d(g, r) === f && d(g, l) === _
    ), N = x.map((g) => Number(g[u.property])).filter((g) => !Number.isNaN(g));
    return !N.length && u.aggregate !== "Count" ? 0 : Gn[u.aggregate](
      u.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, k = (f, _, u, x) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: xn.chip,
      "aria-label": `Remove ${f} field ${u}`,
      onClick: () => p(f, _, x),
      children: [
        u,
        x ? ` (${x})` : ""
      ]
    },
    `${f}-${u}-${x ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [xn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: xn.fields, children: [
      r.map((f) => k("row", f.property, f.title ?? f.property)),
      l.map((f) => k("col", f.property, f.title ?? f.property)),
      a.map(
        (f) => k("agg", f.property, f.title ?? f.property, f.aggregate)
      )
    ] }),
    /* @__PURE__ */ O("table", { className: xn.table, role: "grid", "aria-label": c, children: [
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
              title: An(
                $(
                  f,
                  _,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? An($(f, _, a[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ n("td", { className: xn.total, children: a.length ? An(
            Gn[a[0].aggregate](
              b.flatMap(
                (_) => e.filter(
                  (u) => d(u, r) === f && d(u, l) === _
                ).map((u) => Number(u[a[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, f)),
        /* @__PURE__ */ O("tr", { className: xn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((f) => /* @__PURE__ */ n("td", { children: a.length ? An(
            Gn[a[0].aggregate](
              e.filter((_) => d(_, l) === f).map((_) => Number(_[a[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, f)),
          /* @__PURE__ */ n("td", { children: a.length ? An(
            Gn[a[0].aggregate](
              e.map((f) => Number(f[a[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Xb = "_root_13gvl_1", Gb = "_reverse_13gvl_10", Yb = "_item_13gvl_14", Zb = "_marker_13gvl_35", Jb = "_body_13gvl_46", Qb = "_label_13gvl_50", e2 = "_content_13gvl_56", cn = {
  root: Xb,
  reverse: Gb,
  item: Yb,
  marker: Zb,
  body: Jb,
  label: Qb,
  content: e2
};
function tk({
  items: e,
  reverse: t = !1,
  ariaLabel: s = "Timeline",
  className: o
}) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [cn.root, t ? cn.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": s,
      children: i.map((c, h) => /* @__PURE__ */ O("li", { className: cn.item, children: [
        /* @__PURE__ */ n("span", { className: cn.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ O("div", { className: cn.body, children: [
          /* @__PURE__ */ n("div", { className: cn.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: cn.content, children: c.content })
        ] })
      ] }, h))
    }
  );
}
const t2 = "_root_4ls7q_1", n2 = "_header_4ls7q_13", s2 = "_headCell_4ls7q_22", r2 = "_row_4ls7q_32", o2 = "_cell_4ls7q_37", Tn = {
  root: t2,
  header: n2,
  headCell: s2,
  row: r2,
  cell: o2
};
function nk({
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
  ), [a, p] = X(0), d = le(/* @__PURE__ */ new Set()), v = Math.ceil(s / t), b = Math.max(0, Math.floor(a / t) - 3), $ = Math.min(e, b + v + 6), k = H(
    (_, u) => {
      let x = !1;
      for (let N = _; N < u; N++)
        !r.has(N) && !d.current.has(N) && (x = !0);
      if (x) {
        for (let N = _; N < u; N++) d.current.add(N);
        o({ skip: _, top: u }).then((N) => {
          l((g) => {
            const S = new Map(g);
            return N.forEach((y, w) => S.set(_ + w, y)), S;
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
          className: Tn.row,
          role: "row",
          style: { height: t },
          children: i.map((x) => /* @__PURE__ */ n(
            "div",
            {
              role: "gridcell",
              className: Tn.cell,
              style: x.width ? { width: x.width } : void 0,
              children: String(u[x.property] ?? "")
            },
            x.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Tn.root, h].filter(Boolean).join(" "),
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
        /* @__PURE__ */ n("div", { className: Tn.header, role: "row", children: i.map((_) => /* @__PURE__ */ n(
          "div",
          {
            role: "columnheader",
            className: Tn.headCell,
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
      let b, $;
      for (b = a; ; b++) {
        const u = t.getNumDataCodewords(b, l) * 8, x = c.getTotalBits(r, b);
        if (x <= u) {
          $ = x;
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
        v && $ <= t.getNumDataCodewords(b, u) * 8 && (l = u);
      let k = [];
      for (const u of r) {
        s(u.mode.modeBits, 4, k), s(u.numChars, u.mode.numCharCountBits(b), k);
        for (const x of u.getData()) k.push(x);
      }
      i(k.length == $);
      const f = t.getNumDataCodewords(b, l) * 8;
      i(k.length <= f), s(0, Math.min(4, f - k.length), k), s(0, (8 - k.length % 8) % 8, k), i(k.length % 8 == 0);
      for (let u = 236; k.length < f; u ^= 253)
        s(u, 8, k);
      let _ = [];
      for (; _.length * 8 < k.length; ) _.push(0);
      return k.forEach(
        (u, x) => _[x >>> 3] |= u << 7 - (x & 7)
      ), new t(b, l, _, d);
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
      ), b = p - v % p, $ = Math.floor(v / p);
      let k = [];
      const f = t.reedSolomonComputeDivisor(d);
      for (let u = 0, x = 0; u < p; u++) {
        let N = r.slice(
          x,
          x + $ - d + (u < b ? 0 : 1)
        );
        x += N.length;
        const g = t.reedSolomonComputeRemainder(N, f);
        u < b && N.push(0), k.push(N.concat(g));
      }
      let _ = [];
      for (let u = 0; u < k[0].length; u++)
        k.forEach((x, N) => {
          (u != $ - d || N >= b) && _.push(x[u]);
        });
      return i(_.length == v), _;
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
            const v = a - d, $ = (a + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[$][v] && l < r.length * 8 && (this.modules[$][v] = o(r[l >>> 3], 7 - (l & 7)), l++);
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
const l2 = "_root_1leml_1", a2 = {
  root: l2
}, i2 = {
  low: Mt.QrCode.Ecc.LOW,
  medium: Mt.QrCode.Ecc.MEDIUM,
  quartile: Mt.QrCode.Ecc.QUARTILE,
  high: Mt.QrCode.Ecc.HIGH
};
function sk({
  value: e,
  size: t = 128,
  render: s = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: h,
  onError: r
}) {
  const l = c ?? `QR code for ${e}`, a = le(null), p = Js("(prefers-color-scheme: dark)"), [d, v] = X(null);
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
      return Mt.QrCode.encodeText(e, i2[o]);
    } catch {
      return null;
    }
  }, [e, o]), $ = le(null);
  ke(() => {
    if (b !== null) {
      $.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), ($.current?.value !== e || $.current?.onError !== r) && ($.current = { value: e, onError: r }, r?.(N));
  }, [b, e, r]);
  const k = Math.max(0, Math.floor(i)), f = [a2.root, h].filter(Boolean).join(" ");
  if (ke(() => {
    if (s !== "canvas" || b === null) return;
    const N = a.current, g = N?.getContext("2d");
    if (!N || !g) return;
    const S = getComputedStyle(N), y = S.getPropertyValue("--dx-text-color").trim() || "#000", w = S.getPropertyValue("--dx-surface-color").trim() || "#fff";
    c2(g, b, t, k, y, w);
  }, [s, b, t, k, p, d]), b === null)
    return /* @__PURE__ */ n("div", { className: f, role: "img", "aria-label": l, "data-qr-error": "true" });
  const _ = b.size + k * 2, u = t / _;
  if (s === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: a,
        className: f,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const x = [];
  for (let N = 0; N < b.size; N++)
    for (let g = 0; g < b.size; g++)
      b.getModule(g, N) && x.push(
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
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function c2(e, t, s, o, i, c) {
  const h = s / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, s, s), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, r) && e.fillRect((l + o) * h, (r + o) * h, h + 0.5, h + 0.5);
}
const d2 = "_root_1v9la_1", u2 = "_value_1v9la_9", Fs = {
  root: d2,
  value: u2
}, qs = [
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
], Hs = 104, _2 = 106;
function f2(e) {
  const t = [Hs];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let s = Hs;
  for (let o = 1; o < t.length; o++) s += o * t[o];
  return t.push(s % 103, _2), t;
}
function rk({
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
    for (const p of f2(e)) {
      const d = qs[p] ?? qs[0];
      for (let v = 0; v < d.length; v++) {
        const b = Number(d[v]);
        v % 2 === 0 && l.push({ x: a, w: b }), a += b;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ O("span", { className: [Fs.root, c].filter(Boolean).join(" "), children: [
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
    o && /* @__PURE__ */ n("span", { className: Fs.value, children: e })
  ] });
}
const h2 = "_root_gfdmk_1", p2 = "_svg_gfdmk_10", m2 = "_gridline_gfdmk_15", g2 = "_tickLabel_gfdmk_21", y2 = "_axisTitle_gfdmk_27", x2 = "_dataLabel_gfdmk_34", b2 = "_legend_gfdmk_40", v2 = "_legendItem_gfdmk_48", k2 = "_swatch_gfdmk_56", w2 = "_tooltip_gfdmk_63", $2 = "_visuallyHidden_gfdmk_77", ot = {
  root: h2,
  svg: p2,
  gridline: m2,
  tickLabel: g2,
  axisTitle: y2,
  dataLabel: x2,
  legend: b2,
  legendItem: v2,
  swatch: k2,
  tooltip: w2,
  visuallyHidden: $2
}, Ks = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function N2(e, t, s) {
  const o = t - e || 1, i = s ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, h = Math.ceil(t / i) * i, r = [];
  for (let l = c; l <= h + 1e-9; l += i)
    r.push(Number(l.toFixed(6)));
  return { min: c, max: h, step: i, ticks: r };
}
function ok({
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
    const y = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const E of w.data) y.add(String(E[w.categoryProperty] ?? ""));
    return [...y];
  }, [e]), b = $e(
    () => e.flatMap((y) => y.data.map((w) => Number(w[y.valueProperty]))).filter((y) => !Number.isNaN(y)),
    [e]
  ), $ = o?.min ?? (b.length ? Math.min(0, ...b) : 0), k = o?.max ?? (b.length ? Math.max(...b) : 10), f = $e(
    () => N2($, k, o?.step),
    [$, k, o?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, u = t - _.l - _.r, x = s - _.t - _.b, N = (y) => _.l + y / Math.max(1, v.length - 1) * u, g = (y) => _.t + (1 - (y - f.min) / (f.max - f.min || 1)) * x, S = (y, w) => w.color ?? Ks[y % Ks.length];
  return /* @__PURE__ */ O(
    "figure",
    {
      className: [ot.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": l,
      "aria-describedby": `${l.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ O(
          "svg",
          {
            width: t,
            height: s,
            className: ot.svg,
            role: "presentation",
            children: [
              o?.gridlines !== !1 && f.ticks.map((y) => /* @__PURE__ */ n(
                "line",
                {
                  x1: _.l,
                  x2: _.l + u,
                  y1: g(y),
                  y2: g(y),
                  className: ot.gridline
                },
                y
              )),
              i?.gridlines && v.map((y, w) => /* @__PURE__ */ n(
                "line",
                {
                  x1: N(w),
                  x2: N(w),
                  y1: _.t,
                  y2: _.t + x,
                  className: ot.gridline
                },
                w
              )),
              f.ticks.map((y) => /* @__PURE__ */ n(
                "text",
                {
                  x: _.l - 8,
                  y: g(y) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: y
                },
                y
              )),
              v.map((y, w) => /* @__PURE__ */ n(
                "text",
                {
                  x: N(w),
                  y: _.t + x + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: y
                },
                y
              )),
              o?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: 12,
                  y: _.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + x / 2})`,
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
                const y = /* @__PURE__ */ new Map();
                for (const I of e)
                  if (I.stack)
                    for (const C of I.data) {
                      const z = String(C[I.categoryProperty] ?? ""), m = Number(C[I.valueProperty]);
                      if (Number.isNaN(m)) continue;
                      y.has(I.stack) || y.set(I.stack, /* @__PURE__ */ new Map());
                      const M = y.get(I.stack);
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
                    const j = _.l + u / 2, T = _.t + x / 2, F = Math.min(u, x) / 3, V = I.type === "donut" ? I.innerRadius ?? F * 0.5 : 0, Z = E.get(I) ?? z.reduce((K, te) => K + te.val, 0);
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
                            const ie = oe > 180 ? 1 : 0, Y = (Qe) => Qe * Math.PI / 180, de = j + F * Math.cos(Y(ee)), ae = T + F * Math.sin(Y(ee)), xe = j + F * Math.cos(Y(L)), we = T + F * Math.sin(Y(L)), Be = j + V * Math.cos(Y(L)), ve = T + V * Math.sin(Y(L)), Ve = j + V * Math.cos(Y(ee)), ye = T + V * Math.sin(Y(ee)), Ze = V ? `M ${de} ${ae} A ${F} ${F} 0 ${ie} 1 ${xe} ${we} L ${Be} ${ve} A ${V} ${V} 0 ${ie} 0 ${Ve} ${ye} Z` : `M ${j} ${T} L ${de} ${ae} A ${F} ${F} 0 ${ie} 1 ${xe} ${we} Z`, Xe = (ee + L) / 2, Le = j + (F + 12) * Math.cos(Y(Xe)), tt = T + (F + 12) * Math.sin(Y(Xe));
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
                            for (let ae = 0; ae < C; ae++) {
                              const xe = e[ae];
                              if (xe?.stack !== I.stack) continue;
                              const we = xe.data.find(
                                (Be) => String(Be[xe.categoryProperty] ?? "") === j.cat
                              );
                              we && (V += Number(we[xe.valueProperty]) || 0);
                            }
                          const Z = V + j.val, Q = e.filter(
                            (ae) => !ae.stack || ae.stack === I.stack
                          ).length, K = u / v.length, te = P ? 18 : Math.max(
                            12,
                            K / (I.stack ? 1 : e.length) - 4
                          ), oe = P ? _.l + V / (f.max - f.min || 1) * u : N(F) - te / 2 + (I.stack ? 0 : C % Q * te), ee = P ? _.t + F * x / v.length + 4 : g(Z), L = P ? j.val / (f.max - f.min || 1) * u : te - 4, ie = P ? 16 : g(V) - g(Z), Y = P ? _.l + V / (f.max - f.min || 1) * u : oe, de = P ? _.t + F * x / v.length + 4 : ee;
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
        c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((y, w) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: S(w, y) },
              "aria-hidden": "true"
            }
          ),
          y.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ O(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${l.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ n("caption", { children: l }),
              /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
                /* @__PURE__ */ n("th", { children: "Series" }),
                /* @__PURE__ */ n("th", { children: "Category" }),
                /* @__PURE__ */ n("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ n("tbody", { children: e.map(
                (y) => y.data.map((w, E) => /* @__PURE__ */ O("tr", { children: [
                  /* @__PURE__ */ n("td", { children: y.title ?? "" }),
                  /* @__PURE__ */ n("td", { children: String(w[y.categoryProperty] ?? "") }),
                  /* @__PURE__ */ n("td", { children: String(w[y.valueProperty] ?? "") })
                ] }, `${y.title}-${E}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  _c as ALERT_ICON,
  yv as Accordion,
  ov as Alert,
  kv as Autocomplete,
  mv as Avatar,
  M2 as Badge,
  rk as Barcode,
  uv as Body,
  Uv as Breadcrumb,
  z2 as Button,
  D2 as Card,
  Gv as Carousel,
  ok as Chart,
  ev as Checkbox,
  $v as Checkboxlist,
  Ev as Colorpicker,
  iv as Column,
  Nn as DEFAULT_OPERATOR_BY_TYPE,
  r0 as DEFAULT_PALETTE,
  G2 as DataFilter,
  Y2 as DataGrid,
  Z2 as DataList,
  Iv as Datepicker,
  nv as Dialog,
  Bv as DropZone,
  vv as Dropdown,
  j2 as EmptyState,
  Xs as FILTER_OPERATORS,
  Kv as FabMenu,
  A2 as Field,
  R2 as Fieldset,
  bh as Footer,
  L2 as Form,
  T2 as FormField,
  Qv as Gantt,
  wh as Header,
  Se as Icon,
  Q2 as Input,
  J2 as Label,
  dv as Layout,
  wv as Listbox,
  Mv as Mask,
  Fv as Menu,
  Cv as Numeric,
  Kl as Pager,
  qv as PanelMenu,
  Dv as Password,
  Zv as PickList,
  ek as Pivot,
  Hv as ProfileMenu,
  fv as Progress,
  sk as QRCode,
  Nv as Radiobuttonlist,
  jv as Rating,
  av as Row,
  Jv as Scheduler,
  Rv as SecurityCode,
  bn as Select,
  Ov as Selectbar,
  jh as Sidebar,
  _v as SidebarToggle,
  Lv as SignaturePad,
  lv as Skeleton,
  Av as Slider,
  zv as Splitbutton,
  Vv as Splitter,
  cv as Stack,
  E2 as Stat,
  Wv as Steps,
  ri as Switch,
  I2 as Table,
  gv as Tabs,
  bv as Text,
  xv as Textarea,
  ei as Textbox,
  pv as ThemeSwitcher,
  tk as Timeline,
  Tv as Timespanpicker,
  rv as ToastProvider,
  Xv as Toc,
  Sv as Togglebutton,
  tv as Tooltip,
  Yv as Tree,
  Pv as Upload,
  nk as VirtualGrid,
  Ys as applyFilters,
  Zl as applyGridState,
  Sn as columnValue,
  U2 as compare,
  V2 as custom,
  Xl as cycleSort,
  Jl as defaultOperatorForType,
  B2 as email,
  Cs as formatMasked,
  vs as formatValue,
  Zn as getByPath,
  C2 as iconNames,
  Gs as matchesFilters,
  H2 as maxLength,
  q2 as minLength,
  Yl as paginate,
  F2 as pattern,
  K2 as range,
  P2 as required,
  W2 as requiredTrue,
  _s as resolveVariant,
  Zo as runValidators,
  hv as shadeClass,
  hl as sortItems,
  Gl as sortedItems,
  cl as toFilterString,
  fl as toODataFilterString,
  Yo as useFormContext,
  X2 as useFormField,
  Js as useMediaQuery,
  sv as useToast
};
